/* GotIt ! — la page « Idées ».
 *
 * Le site est statique : il ne peut pas écrire dans GitHub sans clé secrète,
 * et une clé placée dans une page publique est une clé volée. On compose donc
 * le message ici, et on l'envoie de deux façons au choix :
 *   — en ouvrant GitHub avec l'issue déjà remplie (un clic, compte requis) ;
 *   — en copiant le texte, pour l'envoyer par mail ou par message.
 *
 * Le préfixe du titre ([Contenu], [Suggestion], [Bug]) est ce qui permet à la
 * routine quotidienne de trier les demandes sans dépendre des étiquettes.
 */
(function () {
  'use strict';

  var DEPOT = 'https://github.com/flocautank/gotit2/issues/new';

  var TYPES = {
    contenu: {
      prefixe: '[Contenu]',
      etiquette: 'contenu',
      titre: 'Quel concept aimeriez-vous voir expliqué ?',
      exempleTitre: 'Ex. : la blockchain, un VPN, ce qu’est un token…',
      exempleDetail: 'Dites-nous ce qui vous a laissé sur votre faim : où avez-vous entendu ce mot, ' +
                     'ce que vous avez déjà cru comprendre, ce qui reste flou. Plus c’est concret, meilleure sera l’explication.',
      suite: 'Les demandes de contenu sont traitées en priorité — souvent dès la nuit suivante.'
    },
    suggestion: {
      prefixe: '[Suggestion]',
      etiquette: 'suggestion',
      titre: 'Qu’est-ce qui rendrait le site meilleur ?',
      exempleTitre: 'Ex. : pouvoir imprimer une leçon, un mode sombre…',
      exempleDetail: 'Décrivez l’idée et surtout ce qu’elle vous permettrait de faire. ' +
                     'Même une petite gêne mérite d’être signalée : c’est souvent ce qui se corrige le mieux.',
      suite: 'Les suggestions sont regroupées dans un rapport régulier.'
    },
    bug: {
      prefixe: '[Bug]',
      etiquette: 'bug',
      titre: 'Qu’est-ce qui ne fonctionne pas ?',
      exempleTitre: 'Ex. : l’animation reste figée, un texte déborde…',
      exempleDetail: 'Dites ce que vous avez fait, ce que vous attendiez, et ce qui s’est passé à la place. ' +
                     'Précisez si vous êtes sur ordinateur ou sur téléphone, et avec quel navigateur si vous le savez.',
      suite: 'Les bugs sont regroupés dans un rapport régulier.'
    }
  };

  var type = document.getElementById('type');
  var titre = document.getElementById('titre');
  var detail = document.getElementById('detail');
  var page = document.getElementById('page');
  var auteur = document.getElementById('auteur');
  var question = document.getElementById('question-type');
  var aide = document.getElementById('aide-detail');
  var suite = document.getElementById('suite');
  var champPage = document.getElementById('champ-page');
  var envoyer = document.getElementById('envoyer');
  var copier = document.getElementById('copier');
  var retour = document.getElementById('retour');
  if (!type || !titre) return;

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

  function corps() {
    var t = TYPES[type.value];
    var lignes = [];
    lignes.push('**Type** : ' + type.options[type.selectedIndex].text);
    lignes.push('');
    lignes.push(detail.value.trim() || '_(aucun détail fourni)_');
    if (type.value === 'bug' && page.value.trim()) {
      lignes.push('');
      lignes.push('**Page concernée** : ' + page.value.trim());
    }
    if (auteur.value.trim()) {
      lignes.push('');
      lignes.push('**De la part de** : ' + auteur.value.trim());
    }
    lignes.push('');
    lignes.push('---');
    lignes.push('_Envoyé depuis la page Idées de GotIt !, le ' +
                new Date().toLocaleDateString('fr-FR') + '._');
    return lignes.join('\n');
  }

  function texteComplet() {
    return TYPES[type.value].prefixe + ' ' + titre.value.trim() + '\n\n' + corps();
  }

  function lienGithub() {
    var t = TYPES[type.value];
    return DEPOT +
      '?title=' + encodeURIComponent(t.prefixe + ' ' + titre.value.trim()) +
      '&labels=' + encodeURIComponent(t.etiquette) +
      '&body=' + encodeURIComponent(corps());
  }

  function verifier() {
    var pret = titre.value.trim().length >= 3;
    envoyer.disabled = !pret;
    copier.disabled = !pret;
    return pret;
  }

  type.addEventListener('change', majType);
  titre.addEventListener('input', verifier);

  envoyer.addEventListener('click', function () {
    if (!verifier()) return;
    window.open(lienGithub(), '_blank', 'noopener');
    retour.hidden = false;
    retour.textContent = 'GitHub s’ouvre dans un nouvel onglet, l’issue déjà remplie : il ne reste qu’à valider.';
  });

  copier.addEventListener('click', function () {
    if (!verifier()) return;
    var texte = texteComplet();
    function fait() {
      retour.hidden = false;
      retour.textContent = 'Texte copié. Collez-le dans un message ou un mail — tout y est.';
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(texte).then(fait, secours);
    } else {
      secours();
    }
    function secours() {
      var zone = document.createElement('textarea');
      zone.value = texte;
      zone.setAttribute('readonly', '');
      zone.style.position = 'fixed';
      zone.style.opacity = '0';
      document.body.appendChild(zone);
      zone.select();
      try { document.execCommand('copy'); fait(); }
      catch (e) {
        retour.hidden = false;
        retour.textContent = 'La copie automatique a échoué — sélectionnez le texte ci-dessous à la main.';
      }
      document.body.removeChild(zone);
    }
  });

  majType();
  verifier();
  var origine = pageOrigine();
  if (origine) page.value = origine;
})();
