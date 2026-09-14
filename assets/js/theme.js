/* GotIt — bascule de thème (Anthropic ↔ Klint).
 *
 * Le thème est un simple attribut sur <html> : toutes les couleurs, les formes
 * et la typographie du site sont des variables CSS, donc le basculement suffit
 * à rehabiller l'accueil, les cartes, les leçons et leurs schémas animés.
 *
 * Par défaut : thème GotIt. Le choix du visiteur est mémorisé localement.
 */
(function () {
  'use strict';

  var CLE = 'gotit-theme';
  var racine = document.documentElement;

  /* Le chemin de la racine du site depuis la page courante (les leçons sont
     dans un sous-dossier), déduit de la feuille de style déjà chargée. */
  function base() {
    var lien = document.querySelector('link[href$="assets/css/main.css"]');
    return lien ? lien.getAttribute('href').replace('assets/css/main.css', '') : '';
  }

  function appliquer(theme) {
    if (theme === 'klint') racine.setAttribute('data-theme', 'klint');
    else racine.removeAttribute('data-theme');
    try { localStorage.setItem(CLE, theme); } catch (e) { /* navigation privée */ }
    majBoutons(theme);
  }

  var boutons = [];
  function majBoutons(theme) {
    boutons.forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.theme === theme));
    });
  }

  function courant() {
    try { return localStorage.getItem(CLE) === 'klint' ? 'klint' : 'gotit'; } catch (e) { return 'gotit'; }
  }

  function bouton(theme, libelle) {
    var b = document.createElement('button');
    b.type = 'button';
    b.dataset.theme = theme;
    b.textContent = libelle;
    b.setAttribute('aria-label', 'Thème ' + libelle);
    b.addEventListener('click', function () { appliquer(theme); });
    boutons.push(b);
    return b;
  }

  function monter() {
    var nav = document.querySelector('.site-nav');
    if (nav) {
      var boite = document.createElement('span');
      boite.className = 'theme-switch';
      boite.setAttribute('role', 'group');
      boite.setAttribute('aria-label', 'Thème du site');
      boite.appendChild(bouton('gotit', 'GotIt'));
      boite.appendChild(bouton('klint', 'Klint'));
      nav.appendChild(boite);
    }

    /* La signature « Une initiative Klint », posée après la marque. */
    var marque = document.querySelector('.site-header .brand');
    if (marque && !document.querySelector('.klint-signature')) {
      var sig = document.createElement('span');
      sig.className = 'klint-signature';
      sig.innerHTML = '<span>Une initiative</span>';
      var logo = document.createElement('img');
      logo.src = base() + 'assets/img/klint/logo-klint-navy.png';
      logo.alt = 'Klint';
      sig.appendChild(logo);
      marque.parentNode.insertBefore(sig, marque.nextSibling);
    }

    /* Le pied de page Klint : agences et contact. */
    var pied = document.querySelector('.site-footer .wrap');
    if (pied && !document.querySelector('.klint-footer')) {
      var bloc = document.createElement('div');
      bloc.className = 'klint-footer';
      bloc.innerHTML =
        '<div style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;gap:16px;min-width:200px">' +
          '<img src="' + base() + 'assets/img/klint/logo-symbol-navy.png" alt="Klint" ' +
          'width="99" height="128" style="height:92px;width:auto;align-self:center;flex:none;object-fit:contain;display:block;filter:brightness(0) invert(1)">' +
          '<span class="klint-eyebrow">Human Intelligence</span>' +
        '</div>' +
        '<div style="flex:1;min-width:220px;line-height:1.6">' +
          '<strong>Levallois-Perret</strong><span>74 rue Anatole France, 92300</span>' +
          '<strong style="margin-top:12px">Marseille</strong><span>68 rue de la République, 13002</span>' +
        '</div>' +
        '<div style="flex:1;min-width:200px;line-height:1.6">' +
          '<strong>Nous écrire</strong>' +
          '<a href="mailto:contact@klint.com">contact@klint.com</a><br>' +
          '<a href="https://www.klint-consulting.com">www.klint-consulting.com</a>' +
        '</div>';
      /* Dans une enveloppe qui porte la largeur maximale et les marges
         latérales, sans quoi le bloc s'afficherait bord à bord. Elle a sa
         propre classe : « .wrap » hériterait du flex du pied de page et le
         bloc ne remplirait pas la largeur. */
      var enveloppe = document.createElement('div');
      enveloppe.className = 'klint-wrap';
      enveloppe.appendChild(bloc);
      pied.parentNode.appendChild(enveloppe);
    }

    appliquer(courant());
  }

  /* On pose le thème avant le rendu pour éviter tout clignotement. */
  if (courant() === 'klint') racine.setAttribute('data-theme', 'klint');

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', monter);
  else monter();
})();
