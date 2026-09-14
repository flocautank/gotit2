/* GotIt — navigation du catalogue.
 *
 * On n'affiche jamais les leçons d'emblée : on choisit d'abord un domaine, puis
 * une catégorie. La recherche, elle, court-circuite la hiérarchie et cherche
 * directement dans toutes les leçons.
 *
 * L'état de navigation vit dans le fragment d'URL (#/ia, #/ia/agents), ce qui
 * rend le bouton « retour » du navigateur utilisable.
 */
(function () {
  'use strict';

  var data = window.GOTIT;
  var view = document.getElementById('view');
  var search = document.getElementById('search');
  var hint = document.getElementById('search-hint');
  var empty = document.getElementById('empty-state');
  if (!data || !view) return;

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  function lessonsOf(node) {
    // Récupère récursivement les identifiants de leçons d'une famille ou d'une catégorie.
    var out = [];
    (node.categories || [node]).forEach(function (category) {
      (category.subcategories || []).forEach(function (sub) {
        out = out.concat(sub.lessons);
      });
    });
    return out;
  }

  function countLabel(ids) {
    var ready = ids.filter(function (id) { return data.LESSONS[id] && !data.LESSONS[id].soon; }).length;
    var soon = ids.length - ready;
    var label = ready + (ready > 1 ? ' leçons' : ' leçon');
    if (soon) label += ' · ' + soon + ' à venir';
    return label;
  }

  function findFamily(id) {
    return data.FAMILIES.filter(function (f) { return f.id === id; })[0];
  }
  function findCategory(family, id) {
    return family && family.categories.filter(function (c) { return c.id === id; })[0];
  }

  /* Chemin lisible d'une leçon, pour les résultats de recherche. */
  function pathOf(lessonId) {
    var found = null;
    data.FAMILIES.forEach(function (family) {
      family.categories.forEach(function (category) {
        category.subcategories.forEach(function (sub) {
          if (sub.lessons.indexOf(lessonId) !== -1) {
            found = family.title + ' › ' + category.title + ' › ' + sub.title;
          }
        });
      });
    });
    return found;
  }

  function lessonCard(id, withPath) {
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

    if (withPath) {
      var path = pathOf(id);
      if (path) card.appendChild(el('div', 'card-path', path));
    }
    return card;
  }

  function crumbs(items) {
    var bar = el('nav', 'crumbs');
    bar.setAttribute('aria-label', 'Fil d’Ariane');
    items.forEach(function (item, i) {
      if (i) bar.appendChild(el('span', 'sep', '/'));
      if (item.route == null) {
        bar.appendChild(el('span', 'here', item.label));
      } else {
        var button = el('button', null, item.label);
        button.type = 'button';
        button.addEventListener('click', function () { location.hash = item.route; });
        bar.appendChild(button);
      }
    });
    return bar;
  }

  function head(title, description) {
    var box = el('div', 'view-head');
    box.appendChild(el('h2', null, title));
    if (description) box.appendChild(el('p', null, description));
    return box;
  }

  /* ---------- Les trois écrans ---------- */

  function renderFamilies() {
    var cards = el('div', 'cards cards-wide');

    data.FAMILIES.forEach(function (family) {
      var ids = lessonsOf(family);
      var card = el('a', 'card card-family');
      card.href = '#/' + family.id;
      card.appendChild(el('div', 'card-title', family.title));
      card.appendChild(el('p', 'card-sum', family.description));

      // Les leçons disponibles passent devant celles qui sont encore à venir.
      var preview = ids.slice().sort(function (a, b) {
        var soonA = data.LESSONS[a] && data.LESSONS[a].soon ? 1 : 0;
        var soonB = data.LESSONS[b] && data.LESSONS[b].soon ? 1 : 0;
        return soonA - soonB;
      });
      var topics = el('ul', 'card-topics');
      preview.slice(0, 3).forEach(function (id) {
        if (data.LESSONS[id]) topics.appendChild(el('li', null, data.LESSONS[id].title));
      });
      card.appendChild(topics);

      var meta = el('div', 'card-meta');
      meta.appendChild(el('span', 'card-count', countLabel(ids)));
      card.appendChild(meta);
      cards.appendChild(card);
    });

    view.appendChild(head('Par où commencer ?', 'Choisissez un domaine, puis une catégorie — ou tapez un mot-clé dans la barre ci-dessus.'));
    view.appendChild(cards);
  }

  function renderFamily(family) {
    view.appendChild(crumbs([
      { label: 'Tous les domaines', route: '#/' },
      { label: family.title }
    ]));
    view.appendChild(head(family.title, family.description));

    var cards = el('div', 'cards cards-wide');
    family.categories.forEach(function (category) {
      var ids = lessonsOf(category);
      var card = el('a', 'card');
      card.href = '#/' + family.id + '/' + category.id;
      card.appendChild(el('div', 'card-title', category.title));

      var topics = el('ul', 'card-topics');
      category.subcategories.forEach(function (sub) { topics.appendChild(el('li', null, sub.title)); });
      card.appendChild(topics);

      var meta = el('div', 'card-meta');
      meta.appendChild(el('span', 'card-count', countLabel(ids)));
      card.appendChild(meta);
      cards.appendChild(card);
    });
    view.appendChild(cards);
  }

  function renderCategory(family, category) {
    view.appendChild(crumbs([
      { label: 'Tous les domaines', route: '#/' },
      { label: family.title, route: '#/' + family.id },
      { label: category.title }
    ]));
    view.appendChild(head(category.title));

    category.subcategories.forEach(function (sub) {
      var block = el('div', 'subcategory');
      block.appendChild(head(sub.title));
      block.querySelector('h2').style.fontSize = '1.12rem';
      var cards = el('div', 'cards');
      sub.lessons.forEach(function (id) {
        var card = lessonCard(id);
        if (card) cards.appendChild(card);
      });
      block.appendChild(cards);
      block.style.marginBottom = '30px';
      view.appendChild(block);
    });
  }

  /* Les cartes de concept répondent souvent mieux qu'une leçon à un mot isolé :
     on les montre en premier, avec un lien direct vers la carte concernée. */
  function renderCardHits(q) {
    var hits = (data.CARDS || []).filter(function (c) {
      var foin = (c.terme + ' ' + c.une + ' ' + c.aka.join(' ')).toLowerCase();
      return foin.indexOf(q) !== -1;
    });
    if (!hits.length) return 0;

    var bloc = el('div', 'subcategory');
    bloc.style.marginBottom = '30px';
    var titre = el('h4', null, hits.length > 1 ? 'Définitions rapides' : 'Définition rapide');
    bloc.appendChild(titre);

    var cards = el('div', 'cards');
    hits.slice(0, 6).forEach(function (c) {
      var a = el('a', 'card card-concept');
      a.href = 'cartes.html#' + c.id;
      a.appendChild(el('div', 'card-title', c.terme));
      a.appendChild(el('p', 'card-sum', c.une));
      var meta = el('div', 'card-meta');
      meta.appendChild(el('span', 'tag', 'Carte · 4 étapes'));
      a.appendChild(meta);
      cards.appendChild(a);
    });
    bloc.appendChild(cards);
    view.appendChild(bloc);
    return hits.length;
  }

  function renderSearch(query) {
    var q = query.trim().toLowerCase();
    var hits = Object.keys(data.LESSONS).filter(function (id) {
      var lesson = data.LESSONS[id];
      var haystack = (lesson.title + ' ' + lesson.summary + ' ' + (lesson.keywords || []).join(' ')).toLowerCase();
      return haystack.indexOf(q) !== -1;
    });

    var nbCartes = renderCardHits(q);
    empty.hidden = (hits.length + nbCartes) > 0;

    if (hits.length) {
      view.appendChild(el('p', 'results-count',
        hits.length + (hits.length > 1 ? ' leçons' : ' leçon') + ' pour « ' + query.trim() + ' »'));
    }

    var cards = el('div', 'cards');
    hits.forEach(function (id) {
      var card = lessonCard(id, true);
      if (card) cards.appendChild(card);
    });
    view.appendChild(cards);
  }

  /* ---------- Routage ---------- */

  function render() {
    view.textContent = '';
    empty.hidden = true;

    if (search && search.value.trim().length >= 2) {
      hint.hidden = false;
      hint.textContent = 'Effacez la recherche pour revenir à la navigation par domaine.';
      renderSearch(search.value);
      return;
    }

    hint.hidden = true;

    var parts = location.hash.replace(/^#\/?/, '').split('/').filter(Boolean);
    var family = parts[0] && findFamily(parts[0]);
    var category = family && parts[1] && findCategory(family, parts[1]);

    if (category) renderCategory(family, category);
    else if (family) renderFamily(family);
    else renderFamilies();
  }

  window.addEventListener('hashchange', function () {
    render();
    // On ne remonte en haut que lorsqu'on change d'écran depuis le bas de la page.
    var anchor = document.getElementById('catalogue');
    if (anchor && anchor.getBoundingClientRect().top < 0) anchor.scrollIntoView();
  });

  if (search) {
    search.addEventListener('input', render);
    search.addEventListener('search', render);
  }

  render();
})();
