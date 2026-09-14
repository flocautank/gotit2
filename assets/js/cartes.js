/* GotIt ! — la page des cartes de concept.
 *
 * Objectif : trouver la définition d'un mot en dix secondes. On tape, on lit
 * une phrase, et on déplie les quatre étapes si on veut comprendre vraiment.
 * Chaque carte a son ancre (#rag), donc son lien partageable.
 */
(function () {
  'use strict';

  var data = window.GOTIT;
  var liste = document.getElementById('cartes');
  var champ = document.getElementById('recherche-carte');
  var compteur = document.getElementById('compteur');
  var vide = document.getElementById('aucune');
  if (!data || !data.CARDS || !liste) return;

  function el(tag, cls, txt) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (txt != null) n.textContent = txt;
    return n;
  }

  function carte(c) {
    var art = el('article', 'carte');
    art.id = c.id;

    var tete = el('button', 'carte-tete');
    tete.type = 'button';
    tete.setAttribute('aria-expanded', 'false');

    var titre = el('div', 'carte-titre');
    titre.appendChild(el('h2', null, c.terme));
    titre.appendChild(el('p', 'carte-une', c.une));
    tete.appendChild(titre);
    tete.appendChild(el('span', 'carte-chevron'));

    var corps = el('div', 'carte-corps');
    corps.hidden = true;

    var ol = el('ol', 'etapes');
    c.etapes.forEach(function (e) { ol.appendChild(el('li', null, e)); });
    corps.appendChild(ol);

    if (c.pas) {
      var p = el('p', 'carte-pas');
      p.appendChild(el('strong', null, 'À ne pas confondre avec '));
      p.appendChild(document.createTextNode(c.pas));
      corps.appendChild(p);
    }

    if (c.voir && data.LESSONS[c.voir] && !data.LESSONS[c.voir].soon) {
      var a = el('a', 'carte-voir', 'La leçon complète : ' + data.LESSONS[c.voir].title + ' →');
      a.href = data.LESSONS[c.voir].path;
      corps.appendChild(a);
    }

    tete.addEventListener('click', function () {
      var ouvert = !corps.hidden;
      corps.hidden = ouvert;
      art.classList.toggle('est-ouvert', !ouvert);
      tete.setAttribute('aria-expanded', String(!ouvert));
      if (!ouvert) history.replaceState(null, '', '#' + c.id);
    });

    art.appendChild(tete);
    art.appendChild(corps);
    art.dataset.recherche = (c.terme + ' ' + c.une + ' ' + c.aka.join(' ') + ' ' +
                             c.etapes.join(' ')).toLowerCase();
    art.dataset.titres = (c.terme + ' ' + c.aka.join(' ')).toLowerCase();
    return art;
  }

  data.CARDS.forEach(function (c) { liste.appendChild(carte(c)); });

  function ouvrir(id) {
    var art = document.getElementById(id);
    if (!art) return;
    var corps = art.querySelector('.carte-corps');
    if (corps.hidden) art.querySelector('.carte-tete').click();
    art.scrollIntoView({ block: 'center' });
    art.classList.add('est-visee');
    setTimeout(function () { art.classList.remove('est-visee'); }, 1600);
  }

  /* Une carte dont le nom correspond vaut mieux qu'une carte qui cite le mot
     en passant : on la remonte en tête, et on la déplie. */
  function pertinence(art, q) {
    var titres = art.dataset.titres;
    if (titres.split(/[ ,]+/).indexOf(q) !== -1) return 2;   // le nom exact
    if (titres.indexOf(q) !== -1) return 1;                  // le nom contient
    return 0;                                                // cité dans le texte
  }

  function filtrer() {
    var q = champ.value.trim().toLowerCase();
    var n = 0, meilleure = null, meilleurScore = -1;

    Array.prototype.forEach.call(liste.children, function (art) {
      var ok = !q || art.dataset.recherche.indexOf(q) !== -1;
      art.hidden = !ok;
      if (!ok) return;
      n++;
      var score = q ? pertinence(art, q) : 0;
      art.style.order = String(10 - score);
      if (score > meilleurScore) { meilleurScore = score; meilleure = art; }
    });

    compteur.textContent = q
      ? n + (n > 1 ? ' cartes trouvées' : ' carte trouvée')
      : data.CARDS.length + ' cartes';
    vide.hidden = n > 0;

    // Une réponse évidente — seule, ou portant exactement ce nom : on la déplie.
    if (q.length >= 2 && meilleure && (n === 1 || meilleurScore === 2)) {
      if (meilleure.querySelector('.carte-corps').hidden) meilleure.querySelector('.carte-tete').click();
    }
  }

  if (champ) {
    champ.addEventListener('input', filtrer);
    champ.addEventListener('search', filtrer);
  }
  filtrer();

  if (location.hash.length > 1) ouvrir(decodeURIComponent(location.hash.slice(1)));
  window.addEventListener('hashchange', function () {
    if (location.hash.length > 1) ouvrir(decodeURIComponent(location.hash.slice(1)));
  });
})();
