/* GotIt ! — la page « Idées ».
 *
 * Le formulaire envoie le message à un petit relais hébergé, qui détient la clé
 * GitHub et crée l'issue. Le visiteur ne quitte jamais le site et ne voit jamais
 * GitHub : c'est tout l'objet de ce relais.
 *
 * Tant que le relais n'est pas configuré (assets/js/config.js), on bascule sur
 * un envoi par GitHub pré-rempli, pour que la page reste utilisable.
 *
 * Le préfixe du titre — [Contenu], [Suggestion], [Bug] — est ce qui permet aux
 * routines de trier les demandes sans dépendre des étiquettes.
 */
(function () {
  'use strict';

  var RELAIS = (window.GOTIT_CONFIG && window.GOTIT_CONFIG.RELAIS_IDEES) || '';
  var DEPOT_ISSUES = 'https://github.com/flocautank/gotit2/issues/new';

  var TYPES = {
    contenu: {
      prefixe: '[Contenu]', etiquette: 'contenu',
      titre: 'Quel concept aimeriez-vous voir expliqué ?',
      exempleTitre: 'Ex. : la blockchain, un VPN, ce qu’est un token…',
      exempleDetail: 'Dites-nous ce qui vous a laissé sur votre faim : où avez-vous entendu ce mot, ' +
                     'ce que vous avez déjà cru comprendre, ce qui reste flou. Plus c’est concret, meilleure sera l’explication.',
      suite: 'Les demandes de contenu sont traitées en priorité — souvent dès la nuit suivante.',
      merci: 'Merci. Votre demande est enregistrée : elle sera regardée dès cette nuit.'
    },
    suggestion: {
      prefixe: '[Suggestion]', etiquette: 'suggestion',
      titre: 'Qu’est-ce qui rendrait le site meilleur ?',
      exempleTitre: 'Ex. : pouvoir imprimer une leçon, un mode sombre…',
      exempleDetail: 'Décrivez l’idée et surtout ce qu’elle vous permettrait de faire. ' +
                     'Même une petite gêne mérite d’être signalée : c’est souvent ce qui se corrige le mieux.',
      suite: 'Les suggestions sont regroupées dans un point hebdomadaire.',
      merci: 'Merci, c’est noté. Votre suggestion sera examinée au prochain point.'
    },
    bug: {
      prefixe: '[Bug]', etiquette: 'bug',
      titre: 'Qu’est-ce qui ne fonctionne pas ?',
      exempleTitre: 'Ex. : l’animation reste figée, un texte déborde…',
      exempleDetail: 'Dites ce que vous avez fait, ce que vous attendiez, et ce qui s’est passé à la place. ' +
                     'Précisez si vous êtes sur ordinateur ou sur téléphone, et avec quel navigateur si vous le savez.',
      suite: 'Les bugs sont examinés chaque semaine, les plus simples corrigés tout de suite.',
      merci: 'Merci du signalement. Il part directement dans la liste des correctifs.'
    }
  };

  var type = document.getElementById('type');
  var titre = document.getElementById('titre');
  var detail = document.getElementById('detail');
  var page = document.getElementById('page');
  var auteur = document.getElementById('auteur');
  var piege = document.getElementById('site');
  var question = document.getElementById('question-type');
  var aide = document.getElementById('aide-detail');
  var suite = document.getElementById('suite');
  var champPage = document.getElementById('champ-page');
  var envoyer = document.getElementById('envoyer');
  var retour = document.getElementById('retour');
  var formulaire = document.getElementById('formulaire');
  if (!type || !titre || !envoyer) return;

  /* La page d'où l'on vient : utile surtout pour un bug. */
  function pageOrigine() {
    try {
      var ref = document.referrer;
      if (!ref) return '';
      var url = new URL(ref);
      if (url.host !== location.host) return '';
      return decodeURIComponent(url.pathname.replace(/^\//, '')) || 'accueil';
    } catch (e) { return ''; }
  }

  function majType() {
    var t = TYPES[type.value];
    question.textContent = t.titre;
    titre.placeholder = t.exempleTitre;
    aide.textContent = t.exempleDetail;
    suite.textContent = t.suite;
    champPage.hidden = type.value !== 'bug';
  }

  function message(texte, erreur) {
    retour.hidden = false;
    retour.textContent = texte;
    retour.classList.toggle('retour-erreur', !!erreur);
  }

  function verifier() {
    envoyer.disabled = titre.value.trim().length < 3;
    return !envoyer.disabled;
  }

  function donnees() {
    return {
      type: type.value,
      titre: titre.value.trim(),
      detail: detail.value.trim(),
      page: type.value === 'bug' ? page.value.trim() : '',
      auteur: auteur.value.trim(),
      site: piege ? piege.value : ''
    };
  }

  /* Envoi normal : le relais crée l'issue, on ne quitte pas la page. */
  function envoyerAuRelais() {
    envoyer.disabled = true;
    var libelle = envoyer.textContent;
    envoyer.textContent = 'Envoi…';
    message('', false);
    retour.hidden = true;

    fetch(RELAIS, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(donnees())
    })
      .then(function (r) { return r.json().then(function (d) { return { ok: r.ok, d: d }; }); })
      .then(function (res) {
        envoyer.textContent = libelle;
        if (res.ok && res.d && res.d.ok) {
          formulaire.reset();
          majType();
          verifier();
          message(TYPES[type.value].merci, false);
        } else {
          envoyer.disabled = false;
          message((res.d && res.d.erreur ? res.d.erreur + ' ' : '') +
                  'Réessayez dans un instant — ou utilisez le lien de secours ci-dessous.', true);
          secours();
        }
      })
      .catch(function () {
        envoyer.textContent = libelle;
        envoyer.disabled = false;
        message('L’envoi n’a pas abouti, sans doute un souci de connexion. ' +
                'Réessayez, ou utilisez le lien de secours ci-dessous.', true);
        secours();
      });
  }

  /* Repli : ouvre GitHub avec l'issue déjà remplie. */
  function lienGithub() {
    var t = TYPES[type.value];
    var d = donnees();
    var corps = [d.detail || '_(aucun détail fourni)_'];
    if (d.page) corps.push('', '**Page concernée** : ' + d.page);
    if (d.auteur) corps.push('', '**De la part de** : ' + d.auteur);
    return DEPOT_ISSUES +
      '?title=' + encodeURIComponent(t.prefixe + ' ' + d.titre) +
      '&labels=' + encodeURIComponent(t.etiquette) +
      '&body=' + encodeURIComponent(corps.join('\n'));
  }

  function secours() {
    var existant = document.getElementById('lien-secours');
    if (existant) existant.remove();
    var lien = document.createElement('a');
    lien.id = 'lien-secours';
    lien.className = 'lien-secours';
    lien.href = lienGithub();
    lien.target = '_blank';
    lien.rel = 'noopener';
    lien.textContent = 'Envoyer autrement (ouvre GitHub)';
    retour.parentNode.insertBefore(lien, retour.nextSibling);
  }

  type.addEventListener('change', majType);
  titre.addEventListener('input', verifier);

  envoyer.addEventListener('click', function () {
    if (!verifier()) return;
    if (RELAIS) {
      envoyerAuRelais();
    } else {
      // Relais pas encore déployé : on ne laisse pas le visiteur sans issue.
      window.open(lienGithub(), '_blank', 'noopener');
      message('GitHub s’ouvre dans un nouvel onglet, le message déjà rempli : il ne reste qu’à valider.', false);
    }
  });

  majType();
  verifier();
  var origine = pageOrigine();
  if (origine) page.value = origine;
})();
