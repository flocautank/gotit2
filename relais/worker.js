/**
 * Relais d'idées — GotIt !
 *
 * Le site est une page statique : il ne peut pas détenir de clé GitHub, car une
 * clé placée dans une page publique est une clé volée. Ce petit programme tient
 * donc la clé à sa place. Le formulaire lui envoie le message, il crée l'issue.
 *
 * Le visiteur ne quitte jamais le site et ne voit jamais GitHub.
 *
 * Déploiement : voir relais/LISEZMOI.md (dix minutes, une seule fois).
 *
 * Deux secrets à définir dans l'hébergeur :
 *   JETON_GITHUB — un jeton fin, limité au dépôt, droit « Issues : lecture et écriture »
 *   DEPOT        — par exemple « flocautank/gotit2 »
 */

const ORIGINES_AUTORISEES = [
  'https://flocautank.github.io',
  'http://localhost:8766',
];

const TYPES = {
  contenu:    { prefixe: '[Contenu]',    etiquette: 'contenu' },
  suggestion: { prefixe: '[Suggestion]', etiquette: 'suggestion' },
  bug:        { prefixe: '[Bug]',        etiquette: 'bug' },
};

const LIMITES = { titre: 120, detail: 4000, page: 200, auteur: 80 };

function entetes(origine) {
  return {
    'Access-Control-Allow-Origin': origine || ORIGINES_AUTORISEES[0],
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
    'Content-Type': 'application/json; charset=utf-8',
  };
}

function reponse(donnees, statut, origine) {
  return new Response(JSON.stringify(donnees), { status: statut, headers: entetes(origine) });
}

function propre(valeur, max) {
  return String(valeur == null ? '' : valeur).trim().slice(0, max);
}

export default {
  async fetch(request, env) {
    const origine = request.headers.get('Origin');
    const autorisee = ORIGINES_AUTORISEES.includes(origine) ? origine : null;

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: entetes(autorisee) });
    }
    if (request.method !== 'POST') {
      return reponse({ erreur: 'Méthode non autorisée.' }, 405, autorisee);
    }
    // On n'accepte que les envois venant du site.
    if (!autorisee) {
      return reponse({ erreur: 'Origine non autorisée.' }, 403, null);
    }

    let corps;
    try {
      corps = await request.json();
    } catch (e) {
      return reponse({ erreur: 'Message illisible.' }, 400, autorisee);
    }

    // Champ piège : invisible pour un humain, rempli par les robots.
    if (propre(corps.site, 50) !== '') {
      return reponse({ ok: true }, 200, autorisee);   // on fait semblant d'accepter
    }

    const type = TYPES[corps.type] ? corps.type : 'suggestion';
    const titre = propre(corps.titre, LIMITES.titre);
    if (titre.length < 3) {
      return reponse({ erreur: 'Le titre est trop court.' }, 400, autorisee);
    }

    const detail = propre(corps.detail, LIMITES.detail);
    const page = propre(corps.page, LIMITES.page);
    const auteur = propre(corps.auteur, LIMITES.auteur);

    const lignes = [];
    lignes.push(detail || '_(aucun détail fourni)_');
    if (page) lignes.push('', '**Page concernée** : ' + page);
    if (auteur) lignes.push('', '**De la part de** : ' + auteur);
    lignes.push('', '---', '_Envoyé depuis la page Idées du site, le ' +
      new Date().toLocaleDateString('fr-FR', { timeZone: 'Europe/Paris' }) + '._');

    const requete = await fetch(`https://api.github.com/repos/${env.DEPOT}/issues`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.JETON_GITHUB}`,
        'Accept': 'application/vnd.github+json',
        'Content-Type': 'application/json',
        'User-Agent': 'relais-idees-gotit',
      },
      body: JSON.stringify({
        title: `${TYPES[type].prefixe} ${titre}`,
        body: lignes.join('\n'),
        labels: [TYPES[type].etiquette],
      }),
    });

    if (!requete.ok) {
      const detailErreur = await requete.text();
      console.log('Échec GitHub', requete.status, detailErreur.slice(0, 300));
      return reponse({ erreur: 'L’enregistrement a échoué.' }, 502, autorisee);
    }

    const issue = await requete.json();
    return reponse({ ok: true, numero: issue.number }, 200, autorisee);
  },
};
