/* GotIt — rendu du catalogue sur la page d'accueil + recherche. */
(function () {
  'use strict';

  var data = window.GOTIT;
  var root = document.getElementById('catalogue');
  var search = document.getElementById('search');
  var summaryEl = document.getElementById('catalogue-summary');
  if (!data || !root) return;

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  function lessonCard(id) {
    var lesson = data.LESSONS[id];
    if (!lesson) return null;

    var card = document.createElement(lesson.soon ? 'div' : 'a');
    card.className = 'card' + (lesson.soon ? ' card-soon' : '');
    if (!lesson.soon) card.href = lesson.path;

    card.appendChild(el('div', 'card-title', lesson.title));
    card.appendChild(el('p', 'card-sum', lesson.summary));

    var meta = el('div', 'card-meta');
    meta.appendChild(el('span', 'tag tag-level-' + lesson.level, data.LEVELS[lesson.level]));
    if (lesson.duration) meta.appendChild(el('span', 'tag', lesson.duration));
    if (lesson.soon) meta.appendChild(el('span', 'tag', 'Bientôt'));
    card.appendChild(meta);

    card.dataset.search = (lesson.title + ' ' + lesson.summary + ' ' + (lesson.keywords || []).join(' ')).toLowerCase();
    return card;
  }

  function render() {
    var published = 0;
    var planned = 0;

    data.FAMILIES.forEach(function (family) {
      var section = el('section', 'family');
      section.id = family.id;

      var head = el('div', 'family-head');
      head.appendChild(el('h2', null, family.title));
      var familyCount = el('span', 'count');
      head.appendChild(familyCount);
      section.appendChild(head);
      section.appendChild(el('p', 'family-desc', family.description));

      var familyTotal = 0;

      family.categories.forEach(function (category) {
        var catNode = el('div', 'category');
        catNode.appendChild(el('h3', null, category.title));

        category.subcategories.forEach(function (sub) {
          var subNode = el('div', 'subcategory');
          subNode.appendChild(el('h4', null, sub.title));

          var cards = el('div', 'cards');
          sub.lessons.forEach(function (id) {
            var card = lessonCard(id);
            if (!card) return;
            cards.appendChild(card);
            familyTotal++;
            if (data.LESSONS[id].soon) planned++; else published++;
          });

          subNode.appendChild(cards);
          catNode.appendChild(subNode);
        });

        section.appendChild(catNode);
      });

      familyCount.textContent = familyTotal + (familyTotal > 1 ? ' contenus' : ' contenu');
      root.appendChild(section);
    });

    if (summaryEl) {
      summaryEl.textContent = published + ' leçon' + (published > 1 ? 's' : '') +
        ' disponible' + (published > 1 ? 's' : '') + ' · ' + planned + ' en préparation';
    }
  }

  function filter(query) {
    var q = query.trim().toLowerCase();
    var noResult = true;

    Array.prototype.forEach.call(root.querySelectorAll('.card'), function (card) {
      var hit = !q || card.dataset.search.indexOf(q) !== -1;
      card.style.display = hit ? '' : 'none';
      if (hit) noResult = false;
    });

    // On masque les blocs devenus vides pour garder une page lisible.
    Array.prototype.forEach.call(root.querySelectorAll('.subcategory'), function (node) {
      node.style.display = node.querySelector('.card:not([style*="none"])') ? '' : 'none';
    });
    ['.category', '.family'].forEach(function (selector) {
      Array.prototype.forEach.call(root.querySelectorAll(selector), function (node) {
        var visible = Array.prototype.some.call(node.querySelectorAll('.card'), function (card) {
          return card.style.display !== 'none';
        });
        node.style.display = visible ? '' : 'none';
      });
    });

    var empty = document.getElementById('empty-state');
    if (empty) empty.hidden = !noResult;
  }

  render();

  if (search) {
    search.addEventListener('input', function () { filter(search.value); });
  }
})();
