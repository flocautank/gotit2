/* GotIt — catalogue de contenus.
 *
 * Tout le site se construit à partir de ce fichier : ajouter une leçon = ajouter
 * une entrée dans LESSONS puis son identifiant dans la taxonomie ci-dessous.
 * Voir CONTRIBUER.md pour la marche à suivre complète.
 *
 * Niveaux : 1 = découverte, 2 = intermédiaire, 3 = avancé.
 */

window.GOTIT = (function () {
  'use strict';

  var LESSONS = {
    'serveur': {
      title: 'C’est quoi un serveur ?',
      summary: 'Un ordinateur qui ne dort jamais et qui passe sa vie à répondre aux demandes des autres.',
      path: 'lecons/serveur.html',
      duration: '5 min',
      level: 1,
      keywords: ['serveur', 'client', 'requête', 'hébergement', 'datacenter', 'machine']
    },
    'local-vs-cloud': {
      title: 'Local ou cloud : quelle différence ?',
      summary: 'Chez soi ou chez quelqu’un d’autre : où vivent vraiment vos fichiers et vos programmes.',
      path: 'lecons/local-vs-cloud.html',
      duration: '6 min',
      level: 1,
      keywords: ['local', 'cloud', 'nuage', 'hébergement', 'sauvegarde', 'données', 'internet']
    },
    'ia-skills': {
      title: 'Les « skills » d’une IA',
      summary: 'Comment on apprend une méthode de travail à un assistant, sans le réentraîner.',
      path: 'lecons/ia-skills.html',
      duration: '6 min',
      level: 2,
      keywords: ['skill', 'compétence', 'ia', 'assistant', 'instructions', 'contexte', 'agent']
    },
    'mcp': {
      title: 'Un serveur MCP, c’est quoi ?',
      summary: 'La prise universelle qui permet à un assistant IA de se brancher sur vos outils.',
      path: 'lecons/mcp.html',
      duration: '7 min',
      level: 2,
      keywords: ['mcp', 'model context protocol', 'outils', 'connecteur', 'api', 'agent', 'ia']
    },

    /* Leçons prévues : affichées en grisé tant que la page n'existe pas. */
    'internet': { title: 'Comment voyage une page web', summary: 'De la barre d’adresse à l’écran, le trajet d’une requête.', soon: true, level: 1, keywords: ['internet', 'dns', 'http', 'réseau'] },
    'api': { title: 'C’est quoi une API ?', summary: 'Le menu d’un restaurant, version logicielle.', soon: true, level: 2, keywords: ['api', 'interface', 'intégration'] },
    'chiffrement': { title: 'Le chiffrement expliqué simplement', summary: 'Pourquoi le cadenas du navigateur change tout.', soon: true, level: 2, keywords: ['chiffrement', 'https', 'sécurité'] },
    'llm': { title: 'Comment un modèle de langage écrit', summary: 'Un mot après l’autre, et pourquoi ça marche.', soon: true, level: 1, keywords: ['llm', 'modèle', 'token', 'prédiction'] },
    'hallucination': { title: 'Pourquoi une IA invente parfois', summary: 'L’origine des erreurs sûres d’elles.', soon: true, level: 2, keywords: ['hallucination', 'erreur', 'fiabilité'] },
    'rag': { title: 'Donner ses documents à une IA (RAG)', summary: 'Chercher d’abord, répondre ensuite.', soon: true, level: 3, keywords: ['rag', 'recherche', 'documents', 'vecteurs'] }
  };

  var FAMILIES = [
    {
      id: 'numerique',
      title: 'Le numérique, concrètement',
      description: 'Les briques invisibles derrière un site, une application ou un fichier partagé.',
      categories: [
        {
          id: 'infrastructure',
          title: 'Infrastructure',
          subcategories: [
            { id: 'fondations', title: 'Les fondations', lessons: ['serveur', 'local-vs-cloud'] },
            { id: 'reseau', title: 'Réseau & web', lessons: ['internet', 'chiffrement'] }
          ]
        },
        {
          id: 'logiciel',
          title: 'Logiciel',
          subcategories: [
            { id: 'communication', title: 'Faire dialoguer des programmes', lessons: ['api'] }
          ]
        }
      ]
    },
    {
      id: 'ia',
      title: 'Intelligence artificielle',
      description: 'Ce que fait réellement un assistant IA, et ce qu’on peut lui brancher autour.',
      categories: [
        {
          id: 'fondamentaux-ia',
          title: 'Fondamentaux',
          subcategories: [
            { id: 'modeles', title: 'Les modèles de langage', lessons: ['llm', 'hallucination'] }
          ]
        },
        {
          id: 'agents',
          title: 'Agents & outils',
          subcategories: [
            { id: 'etendre', title: 'Étendre un assistant', lessons: ['ia-skills', 'mcp'] },
            { id: 'connaissance', title: 'Lui donner de la connaissance', lessons: ['rag'] }
          ]
        }
      ]
    }
  ];

  var LEVELS = { 1: 'Découverte', 2: 'Intermédiaire', 3: 'Avancé' };

  return { LESSONS: LESSONS, FAMILIES: FAMILIES, LEVELS: LEVELS };
})();
