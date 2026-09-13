/* GotIt — moteur de scènes animées.
 *
 * Une scène = un bloc `.scene` contenant :
 *   - `.stage`   : le SVG, dont les éléments portent `data-show="1"`, `data-show="2-4"`
 *                  ou `data-show="1,3-5"` pour indiquer à quelles étapes ils sont visibles ;
 *   - `.scene-caption > .step` : un paragraphe par étape (le nombre d'étapes en découle) ;
 *                  attribut facultatif `data-duration` (ms) pour la lecture automatique.
 *
 * Le moteur ajoute/retire la classe `is-on` sur les éléments du SVG : toute
 * l'animation elle-même est décrite en CSS (voir lesson.css).
 */
(function () {
  'use strict';

  var DEFAULT_DURATION = 4600;
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var ICON_PLAY = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>';
  var ICON_PAUSE = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5h4v14H6zm8 0h4v14h-4z"/></svg>';
  var ICON_PREV = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 5v14l-9-7z"/></svg>';
  var ICON_NEXT = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l9-7z"/></svg>';

  /** "1,3-5" -> function(step) -> bool */
  function parseRange(spec) {
    var parts = String(spec).split(',').map(function (part) {
      var bounds = part.trim().split('-');
      var from = parseInt(bounds[0], 10);
      var to = bounds.length > 1 ? parseInt(bounds[1], 10) : from;
      if (isNaN(from)) return null;
      if (isNaN(to)) to = Infinity;
      return [from, to];
    }).filter(Boolean);

    return function (step) {
      for (var i = 0; i < parts.length; i++) {
        if (step >= parts[i][0] && step <= parts[i][1]) return true;
      }
      return false;
    };
  }

  function Scene(root, index) {
    this.root = root;
    this.index = index;
    this.steps = Array.prototype.slice.call(root.querySelectorAll('.scene-caption .step'));
    this.total = this.steps.length;
    this.current = 0;
    this.playing = false;
    this.timer = null;

    this.targets = Array.prototype.slice.call(root.querySelectorAll('[data-show]')).map(function (el) {
      // Les tracés dessinés ont besoin de leur longueur réelle pour l'animation.
      if (el.classList.contains('m-draw') && typeof el.getTotalLength === 'function') {
        try { el.style.setProperty('--len', Math.ceil(el.getTotalLength())); } catch (e) { /* noop */ }
      }
      return { el: el, match: parseRange(el.getAttribute('data-show')) };
    });

    this.caption = root.querySelector('.scene-caption');
    this.buildControls();
    this.go(1, true);
    this.sizeCaption();
    this.observe();

    var self = this;
    window.addEventListener('resize', function () {
      clearTimeout(self.resizeTimer);
      self.resizeTimer = setTimeout(function () { self.sizeCaption(); }, 200);
    });
  }

  Scene.prototype.buildControls = function () {
    var self = this;
    var bar = document.createElement('div');
    bar.className = 'scene-controls';

    this.prevBtn = button(ICON_PREV, 'Étape précédente');
    this.playBtn = button(ICON_PLAY, 'Lecture');
    this.playBtn.classList.add('ctrl-play');
    this.nextBtn = button(ICON_NEXT, 'Étape suivante');

    this.dots = document.createElement('div');
    this.dots.className = 'dots';
    this.dotEls = [];
    for (var i = 1; i <= this.total; i++) {
      var dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'dot';
      dot.setAttribute('aria-label', 'Aller à l’étape ' + i);
      dot.dataset.step = i;
      dot.addEventListener('click', function () {
        self.pause();
        self.go(parseInt(this.dataset.step, 10));
      });
      this.dots.appendChild(dot);
      this.dotEls.push(dot);
    }

    this.label = document.createElement('div');
    this.label.className = 'scene-step-label';

    bar.appendChild(this.prevBtn);
    bar.appendChild(this.playBtn);
    bar.appendChild(this.nextBtn);
    bar.appendChild(this.dots);
    bar.appendChild(this.label);
    this.root.appendChild(bar);

    this.prevBtn.addEventListener('click', function () { self.pause(); self.go(self.current - 1); });
    this.nextBtn.addEventListener('click', function () { self.pause(); self.go(self.current + 1); });
    this.playBtn.addEventListener('click', function () { self.playing ? self.pause() : self.play(); });

    this.root.setAttribute('tabindex', '0');
    this.root.setAttribute('role', 'group');
    this.root.addEventListener('keydown', function (event) {
      if (event.key === 'ArrowRight') { self.pause(); self.go(self.current + 1); event.preventDefault(); }
      else if (event.key === 'ArrowLeft') { self.pause(); self.go(self.current - 1); event.preventDefault(); }
      else if (event.key === ' ') { self.playing ? self.pause() : self.play(); event.preventDefault(); }
    });

    function button(icon, label) {
      var el = document.createElement('button');
      el.type = 'button';
      el.className = 'ctrl';
      el.innerHTML = icon;
      el.setAttribute('aria-label', label);
      return el;
    }
  };

  /* Les étapes sont superposées : on réserve la hauteur de la plus longue,
     sinon la dernière ligne d'une légende recouvre les boutons. */
  Scene.prototype.sizeCaption = function () {
    if (!this.caption) return;
    var tallest = 0;
    this.steps.forEach(function (el) { tallest = Math.max(tallest, el.offsetHeight); });
    if (tallest) this.caption.style.minHeight = (tallest + 26) + 'px';
  };

  Scene.prototype.go = function (step, silent) {
    if (step < 1) step = 1;
    if (step > this.total) step = this.total;
    this.current = step;

    this.targets.forEach(function (target) {
      target.el.classList.toggle('is-on', target.match(step));
    });

    this.steps.forEach(function (el, i) {
      el.classList.toggle('is-current', i === step - 1);
      el.setAttribute('aria-hidden', i === step - 1 ? 'false' : 'true');
    });

    this.dotEls.forEach(function (dot, i) {
      dot.classList.toggle('is-current', i === step - 1);
      dot.classList.toggle('is-done', i < step - 1);
    });

    this.prevBtn.disabled = step === 1;
    this.nextBtn.disabled = step === this.total;
    this.label.textContent = step + ' / ' + this.total;

    if (!silent && this.playing) this.schedule();
  };

  Scene.prototype.schedule = function () {
    var self = this;
    clearTimeout(this.timer);
    var el = this.steps[this.current - 1];
    var duration = el && el.dataset.duration ? parseInt(el.dataset.duration, 10) : DEFAULT_DURATION;
    this.timer = setTimeout(function () {
      if (self.current >= self.total) { self.pause(); return; }
      self.go(self.current + 1);
    }, duration);
  };

  Scene.prototype.play = function () {
    if (this.total < 2) return;
    if (this.current >= this.total) this.go(1, true);
    this.playing = true;
    this.playBtn.innerHTML = ICON_PAUSE;
    this.playBtn.setAttribute('aria-label', 'Pause');
    this.schedule();
  };

  Scene.prototype.pause = function () {
    this.playing = false;
    clearTimeout(this.timer);
    this.playBtn.innerHTML = ICON_PLAY;
    this.playBtn.setAttribute('aria-label', 'Lecture');
  };

  /* Lecture automatique quand la scène entre dans l'écran, pause quand elle en sort. */
  Scene.prototype.observe = function () {
    var self = this;
    if (reduced || !('IntersectionObserver' in window)) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          if (!self.autoPlayed) {
            self.autoPlayed = true;
            self.play();
          }
        } else if (self.playing) {
          self.pause();
        }
      });
    }, { threshold: 0.55 });

    observer.observe(this.root);
  };

  function init() {
    var scenes = document.querySelectorAll('.scene');
    Array.prototype.forEach.call(scenes, function (el, i) { new Scene(el, i); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
