/* GotIt — chorégraphies.
 *
 * Le moteur de scènes (scene.js) montre ou cache des éléments d'une étape à
 * l'autre. Ici, on va plus loin : les objets *voyagent*. Un même morceau de
 * document part de la pile, traverse la recherche, rejoint la question, entre
 * dans le modèle — c'est cette continuité qui fait comprendre, pas l'apparition.
 *
 * Tout repose sur l'API Web Animations du navigateur : aucune dépendance.
 *
 * Une scène s'y abonne avec data-motion="nom" et déclare une fonction par étape :
 *
 *   GotItMotion.scene('nom', function (q) {
 *     return [
 *       function (t) { t.to(q('#doc'), { transform: 'translate(120px,80px)' }, { dur: 700 }); },
 *       …
 *     ];
 *   });
 *
 * Le principe qui rend le tout robuste : l'état de l'étape n est, par définition,
 * le résultat des étapes 1 à n jouées jusqu'au bout. Pour sauter directement à
 * une étape, on rejoue donc les précédentes instantanément. Il n'existe qu'une
 * seule description de chaque mouvement — impossible que le saut et la lecture
 * divergent.
 *
 * Convention de dessin : un acteur est un <g> dessiné autour de (0,0) et posé
 * par une transformation CSS (style="transform:translate(…)"). Ses positions
 * s'écrivent alors en absolu, et une mise à l'échelle se fait autour de son
 * propre centre.
 */
(function () {
  'use strict';

  var reduit = window.matchMedia('(prefers-reduced-motion: reduce)');
  var registre = {};

  /* Des courbes avec du caractère : une entrée qui ralentit franchement, un
     léger dépassement pour ce qui « se pose », un départ qui prend son élan. */
  var COURBES = {
    out:     'cubic-bezier(.16, 1, .3, 1)',
    inout:   'cubic-bezier(.65, 0, .35, 1)',
    in:      'cubic-bezier(.55, 0, 1, .45)',
    pose:    'cubic-bezier(.34, 1.56, .64, 1)',
    lin:     'linear'
  };

  /* Un arc entre deux points, découpé en images clés : l'objet ne glisse pas
     en ligne droite comme un curseur, il décrit une trajectoire.
     L'échelle peut changer en route — c'est ainsi qu'un objet se transforme
     pendant qu'il voyage : e0 et e1 valent un nombre, ou [largeur, hauteur]. */
  function point(de, vers, levee, k) {
    var mx = (de[0] + vers[0]) / 2, my = (de[1] + vers[1]) / 2 - levee, u = 1 - k;
    return [
      u * u * de[0] + 2 * u * k * mx + k * k * vers[0],
      u * u * de[1] + 2 * u * k * my + k * k * vers[1]
    ];
  }

  function pose(xy, ech) {
    var t = 'translate(' + xy[0].toFixed(1) + 'px,' + xy[1].toFixed(1) + 'px)';
    if (ech === undefined) return t;
    if (Array.isArray(ech)) return t + ' scale(' + ech[0].toFixed(3) + ',' + ech[1].toFixed(3) + ')';
    return t + ' scale(' + ech.toFixed(3) + ')';
  }

  function melange(a, b, k) {
    if (a === undefined) return undefined;
    if (Array.isArray(a)) return [a[0] + (b[0] - a[0]) * k, a[1] + (b[1] - a[1]) * k];
    return a + (b - a) * k;
  }

  function arc(de, vers, levee, e0, e1) {
    var n = 12, images = [];
    if (e1 === undefined) e1 = e0;
    for (var i = 0; i <= n; i++) {
      var k = i / n;
      images.push({ transform: pose(point(de, vers, levee || 0, k), melange(e0, e1, k)) });
    }
    return images;
  }

  /* Un passage dans une boucle : l'objet n'est visible qu'entre « debut » et
     « fin » (fractions de la période), le reste du temps il attend, caché.
     C'est ce qui donne un rythme — une demande, un silence, une autre. */
  function passage(de, vers, levee, debut, fin, ech) {
    var n = 10, images = [];
    var fondu = Math.min(0.04, (fin - debut) / 4);
    images.push({ offset: 0, opacity: 0, transform: pose(de, ech) });
    if (debut > 0) images.push({ offset: debut, opacity: 0, transform: pose(de, ech) });
    for (var i = 0; i <= n; i++) {
      var k = i / n;
      var off = debut + (fin - debut) * k;
      var op = (off < debut + fondu || off > fin - fondu) ? 0 : 1;
      if (i === 0 || i === n) op = 0;
      images.push({ offset: off, opacity: op, transform: pose(point(de, vers, levee || 0, k), ech) });
    }
    if (fin < 1) images.push({ offset: 1, opacity: 0, transform: pose(vers, ech) });
    return images;
  }

  function Chronologie() {
    this.animations = [];
    this.vus = [];
  }

  /* t.to(cible(s), images clés, { at, dur, ease, stagger, iterations })
     - at      : départ, en ms depuis le début de l'étape ;
     - stagger : décalage entre plusieurs cibles, pour une cascade ;
     - images  : un objet seul (« aller vers ») ou un tableau d'images clés. */
  Chronologie.prototype.to = function (cibles, images, o) {
    o = o || {};
    if (!cibles) return this;
    if (!cibles.length && cibles.nodeType) cibles = [cibles];
    var self = this;
    var liste = Array.isArray(images) ? images : [images];
    var proprietes = [];
    liste.forEach(function (im) {
      Object.keys(im).forEach(function (k) {
        if (k !== 'offset' && k !== 'easing' && proprietes.indexOf(k) === -1) proprietes.push(k);
      });
    });

    Array.prototype.forEach.call(cibles, function (el, i) {
      if (!el || !el.animate) return;

      /* Le premier mouvement d'une propriété garde sa pose de départ pendant
         son attente (une cascade ne doit rien laisser clignoter). Les suivants,
         non : ils écraseraient le mouvement précédent encore en cours. */
      var deja = proprietes.some(function (pr) {
        return self.vus.some(function (v) { return v[0] === el && v[1] === pr; });
      });
      proprietes.forEach(function (pr) { self.vus.push([el, pr]); });

      var debut = (o.at || 0) + i * (o.stagger || 0);
      var a = el.animate(liste, {
        duration: o.dur || 600,
        delay: debut,
        easing: COURBES[o.ease] || o.ease || COURBES.out,
        iterations: o.iterations || 1,
        fill: o.fill || (deja ? 'forwards' : 'both')
      });
      a.ambiant = o.iterations === Infinity;
      a.fin = debut + (o.dur || 600);
      self.animations.push(a);
    });
    return this;
  };

  /* Figer le résultat dans le style de l'élément, puis libérer l'animation :
     les étapes suivantes partent de cet état, sans empiler les effets. */
  function figer(a) {
    if (a.ambiant) return;
    try { a.finish(); a.commitStyles(); } catch (e) { /* élément détaché */ }
    a.cancel();
  }

  function Liaison(racine, etapes) {
    this.racine = racine;
    this.etapes = etapes;
    this.enCours = [];
    this.ambiants = [];

    /* L'état de départ de chaque élément, tel qu'écrit dans la page. */
    this.origine = Array.prototype.map.call(racine.querySelectorAll('.stage svg *'), function (el) {
      return [el, el.getAttribute('style')];
    });

    var self = this;
    racine.addEventListener('scene:step', function (e) {
      self.aller(e.detail.step, e.detail.live && !reduit.matches);
    });
    this.aller(parseInt(racine.dataset.step, 10) || 1, false);
  }

  Liaison.prototype.remettre = function () {
    this.enCours.concat(this.ambiants).forEach(function (a) { a.cancel(); });
    this.enCours = [];
    this.ambiants = [];
    this.origine.forEach(function (paire) {
      if (paire[1] === null) paire[0].removeAttribute('style');
      else paire[0].setAttribute('style', paire[1]);
    });
  };

  Liaison.prototype.jouer = function (n) {
    var t = new Chronologie();
    if (this.etapes[n - 1]) this.etapes[n - 1](t);
    return t.animations;
  };

  Liaison.prototype.aller = function (etape, vivant) {
    var self = this;
    this.remettre();

    /* Figer instantanément une étape : dans l'ordre où les mouvements se
       terminent, pour que le dernier arrivé l'emporte — comme à la lecture. */
    function figerTout(anims) {
      anims.filter(function (a) { return a.ambiant; }).forEach(function (a) { self.ambiants.push(a); });
      anims.filter(function (a) { return !a.ambiant; })
        .sort(function (x, y) { return x.fin - y.fin; })
        .forEach(figer);
    }

    /* Les étapes déjà franchies : rejouées, et figées aussitôt. */
    for (var k = 1; k < etape; k++) figerTout(this.jouer(k));

    /* L'étape courante : en entier si l'on y arrive, ou figée si l'on y saute. */
    var anims = this.jouer(etape);
    if (!vivant) { figerTout(anims); anims = []; }
    anims.forEach(function (a) {
      if (a.ambiant) { self.ambiants.push(a); return; }
      self.enCours.push(a);
      a.finished.then(function () {
        if (self.enCours.indexOf(a) === -1) return;
        figer(a);
        self.enCours.splice(self.enCours.indexOf(a), 1);
      }, function () { /* annulée par un changement d'étape */ });
    });

    /* Le mouvement d'ambiance (une diode qui clignote) n'a pas lieu d'être
       pour qui a demandé moins d'animations. */
    if (reduit.matches) this.ambiants.forEach(function (a) { a.cancel(); });
  };

  window.GotItMotion = {
    scene: function (nom, fabrique) { registre[nom] = fabrique; },
    arc: arc,
    passage: passage,
    pose: pose
  };

  function lier() {
    Array.prototype.forEach.call(document.querySelectorAll('.scene[data-motion]'), function (racine) {
      var fabrique = registre[racine.dataset.motion];
      if (!fabrique || racine.dataset.motionLie) return;
      if (!racine.animate) return;
      racine.dataset.motionLie = '1';
      var q = function (sel) { return racine.querySelectorAll(sel); };
      new Liaison(racine, fabrique(q));
    });
  }

  /* Chaque fichier de chorégraphie appelle GotItMotion.lier() après s'être
     déclaré : seules les scènes dont la chorégraphie est connue sont liées, et
     un second appel ne relie jamais deux fois la même. */
  window.GotItMotion.lier = lier;
})();
