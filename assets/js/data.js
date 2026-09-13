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

    /* ---------- Informatique ---------- */

    'ordinateur': {
      title: 'Ce qu’il y a dans un ordinateur',
      summary: 'Quatre organes, et un seul geste : lire, calculer, ranger, afficher.',
      path: 'lecons/ordinateur.html',
      duration: '6 min', level: 1,
      keywords: ['ordinateur', 'processeur', 'cpu', 'mémoire', 'ram', 'disque', 'ssd', 'matériel', 'hardware']
    },
    'serveur': {
      title: 'C’est quoi un serveur ?',
      summary: 'Un ordinateur qui ne dort jamais et qui passe sa vie à répondre aux demandes des autres.',
      path: 'lecons/serveur.html',
      duration: '5 min', level: 1,
      keywords: ['serveur', 'client', 'requête', 'hébergement', 'datacenter', 'machine']
    },
    'logiciel': {
      title: 'Logiciel, système, application',
      summary: 'Du texte écrit par un humain jusqu’au bouton sur lequel vous cliquez.',
      path: 'lecons/logiciel.html',
      duration: '6 min', level: 1,
      keywords: ['logiciel', 'software', 'programme', 'code', 'système d’exploitation', 'windows', 'application', 'navigateur']
    },
    'local-vs-cloud': {
      title: 'Local ou cloud : quelle différence ?',
      summary: 'Chez soi ou chez quelqu’un d’autre : où vivent vraiment vos fichiers et vos programmes.',
      path: 'lecons/local-vs-cloud.html',
      duration: '6 min', level: 1,
      keywords: ['local', 'cloud', 'nuage', 'hébergement', 'sauvegarde', 'données', 'internet']
    },

    /* ---------- Réseau ---------- */

    'internet': {
      title: 'Comment voyage une page web',
      summary: 'De la barre d’adresse à l’écran : l’annuaire, le trajet, et le cadenas.',
      path: 'lecons/internet.html',
      duration: '7 min', level: 1,
      keywords: ['internet', 'réseau', 'dns', 'ip', 'url', 'http', 'https', 'box', 'wifi', 'chiffrement']
    },

    /* ---------- Data ---------- */

    'base-de-donnees': {
      title: 'C’est quoi une base de données ?',
      summary: 'Le tableur qui a grandi — et pourquoi certaines bases n’ont pas de colonnes.',
      path: 'lecons/base-de-donnees.html',
      duration: '7 min', level: 1,
      keywords: ['base de données', 'sql', 'relationnel', 'nosql', 'table', 'document', 'json', 'clé', 'mongodb', 'postgres']
    },
    'entrepots-data': {
      title: 'Lac, entrepôt, magasin de données',
      summary: 'Data lake, data warehouse, data mart, lakehouse : cinq mots, une seule histoire.',
      path: 'lecons/entrepots-data.html',
      duration: '7 min', level: 2,
      keywords: ['data lake', 'lac de données', 'data warehouse', 'entrepôt', 'datamart', 'lakehouse', 'etl', 'elt', 'bi', 'pipeline']
    },
    'langages-data': {
      title: 'Les langages de la data, situés',
      summary: 'SQL, Python, R, DAX, Spark : à quel moment de la chaîne chacun sert, en une phrase.',
      path: 'lecons/langages-data.html',
      duration: '7 min', level: 2,
      keywords: ['sql', 'python', 'r', 'dax', 'spark', 'scala', 'dbt', 'langage', 'requête', 'pandas', 'no-code']
    },

    /* ---------- Système d'information ---------- */

    'si-briques': {
      title: 'C’est quoi un système d’information ?',
      summary: 'ERP, CRM, paie, BI : la carte des outils d’une entreprise et ce qui les relie.',
      path: 'lecons/si-briques.html',
      duration: '7 min', level: 1,
      keywords: ['système d’information', 'si', 'erp', 'crm', 'urbanisation', 'processus', 'métier', 'intégration', 'référentiel']
    },

    /* ---------- Intelligence artificielle ---------- */

    'ia-skills': {
      title: 'Les « skills » d’une IA',
      summary: 'Comment on apprend une méthode de travail à un assistant, sans le réentraîner.',
      path: 'lecons/ia-skills.html',
      duration: '6 min', level: 2,
      keywords: ['skill', 'compétence', 'ia', 'assistant', 'instructions', 'contexte', 'agent']
    },
    'mcp': {
      title: 'Un serveur MCP, c’est quoi ?',
      summary: 'La prise universelle qui permet à un assistant IA de se brancher sur vos outils.',
      path: 'lecons/mcp.html',
      duration: '7 min', level: 2,
      keywords: ['mcp', 'model context protocol', 'outils', 'connecteur', 'api', 'agent', 'ia']
    },

    'api': {
      title: 'C\u2019est quoi une API ?',
      summary: 'Le passe-plat entre deux logiciels : un menu de demandes possibles, et rien d\u2019autre.',
      path: 'lecons/api.html',
      duration: '6 min', level: 1,
      keywords: ['api', 'interface', 'intégration', 'rest', 'json', 'connecteur', 'webhook', 'endpoint']
    },
    'llm': {
      title: 'Comment un modèle de langage écrit',
      summary: 'Un mot après l\u2019autre, sans jamais savoir où il va — et pourquoi ça marche quand même.',
      path: 'lecons/llm.html',
      duration: '7 min', level: 1,
      keywords: ['llm', 'modèle de langage', 'token', 'prédiction', 'entraînement', 'chatgpt', 'claude', 'ia générative']
    },
    'prompt': {
      title: 'Bien demander à une IA',
      summary: 'Les quatre ingrédients d\u2019une bonne demande, et pourquoi « fais-moi un truc sympa » échoue.',
      path: 'lecons/prompt.html',
      duration: '6 min', level: 1,
      keywords: ['prompt', 'demande', 'consigne', 'contexte', 'exemple', 'itération', 'prompt engineering']
    },
    'hallucination': {
      title: 'Pourquoi une IA invente parfois',
      summary: 'L\u2019origine des erreurs sûres d\u2019elles — et les trois réflexes qui les rattrapent.',
      path: 'lecons/hallucination.html',
      duration: '6 min', level: 2,
      keywords: ['hallucination', 'erreur', 'fiabilité', 'vérification', 'source', 'confiance']
    },
    'rag': {
      title: 'Donner ses documents à une IA',
      summary: 'Chercher d\u2019abord, répondre ensuite : le principe du RAG, sans jargon.',
      path: 'lecons/rag.html',
      duration: '7 min', level: 2,
      keywords: ['rag', 'documents', 'recherche', 'vecteurs', 'base de connaissance', 'source', 'contexte']
    },
    'agent': {
      title: 'C\u2019est quoi un agent IA ?',
      summary: 'La différence entre un assistant qui répond et un assistant qui agit.',
      path: 'lecons/agent.html',
      duration: '6 min', level: 2,
      keywords: ['agent', 'autonomie', 'boucle', 'outils', 'action', 'automatisation', 'validation']
    },
    'cybersecurite': {
      title: 'Les bases de la cybersécurité',
      summary: 'Mot de passe, hameçonnage, double authentification : les trois gestes qui comptent vraiment.',
      path: 'lecons/cybersecurite.html',
      duration: '7 min', level: 1,
      keywords: ['sécurité', 'phishing', 'hameçonnage', 'mot de passe', 'mfa', 'double authentification', 'arnaque', 'piratage']
    },

    /* ---------- Leçons prévues (affichées en grisé) ---------- */

    'cout-ia': { title: 'Ce que coûte une IA', summary: 'Jetons, abonnements, et pourquoi un long document coûte cher.', soon: true, level: 2, keywords: ['token', 'jeton', 'coût', 'tarif', 'contexte'] },
    'ia-limites': { title: 'Ce qu\u2019une IA ne sait pas faire', summary: 'Les limites structurelles, pas les défauts passagers.', soon: true, level: 2, keywords: ['limites', 'fiabilité', 'calcul', 'temps réel'] },
    'ia-donnees': { title: 'Vos données et l\u2019IA', summary: 'Ce qui part, ce qui reste, ce qui sert à l\u2019entraînement.', soon: true, level: 2, keywords: ['confidentialité', 'données', 'entraînement', 'rgpd'] },
    'cloud-saas': { title: 'SaaS, PaaS, IaaS', summary: 'Trois niveaux de location, une seule logique.', soon: true, level: 2, keywords: ['saas', 'paas', 'iaas', 'cloud', 'abonnement'] },
    'chiffrement': { title: 'Le chiffrement expliqué simplement', summary: 'Ce que protège vraiment le cadenas du navigateur.', soon: true, level: 2, keywords: ['chiffrement', 'https', 'sécurité', 'clé'] },
    'gouvernance-data': { title: 'Qualité et gouvernance des données', summary: 'Pourquoi deux tableaux ne donnent jamais le même chiffre.', soon: true, level: 2, keywords: ['qualité', 'gouvernance', 'rgpd', 'référentiel'] },
    'rgpd': { title: 'Le RGPD en clair', summary: 'Ce qu’on a le droit de faire avec les données des gens.', soon: true, level: 1, keywords: ['rgpd', 'données personnelles', 'consentement'] },
    'projet-si': { title: 'Comment se déroule un projet SI', summary: 'Du besoin métier à la mise en production.', soon: true, level: 2, keywords: ['projet', 'cadrage', 'recette', 'déploiement'] },
  };

  var FAMILIES = [
    {
      id: 'informatique',
      title: 'Informatique',
      description: 'Les objets de base : ce qu’il y a dans une machine, et ce qui la fait tourner.',
      categories: [
        {
          id: 'materiel', title: 'Le matériel',
          subcategories: [
            { id: 'dans-la-machine', title: 'Dans la machine', lessons: ['ordinateur', 'serveur'] },
            { id: 'ou-ca-tourne', title: 'Où tournent les programmes', lessons: ['local-vs-cloud', 'cloud-saas'] }
          ]
        },
        {
          id: 'logiciels', title: 'Le logiciel',
          subcategories: [
            { id: 'programmes', title: 'De quoi est fait un programme', lessons: ['logiciel'] }
          ]
        }
      ]
    },
    {
      id: 'reseau',
      title: 'Réseau',
      description: 'Comment l’information circule d’une machine à l’autre, et ce qui la protège en route.',
      categories: [
        {
          id: 'circulation', title: 'Comment ça circule',
          subcategories: [
            { id: 'bases-reseau', title: 'Les bases', lessons: ['internet'] }
          ]
        },
        {
          id: 'securite', title: 'Se protéger',
          subcategories: [
            { id: 'gestes', title: 'Les gestes du quotidien', lessons: ['cybersecurite'] },
            { id: 'protection', title: 'Ce qui protège les données', lessons: ['chiffrement'] }
          ]
        }
      ]
    },
    {
      id: 'data',
      title: 'Data',
      description: 'Où vivent les données d’une entreprise, comment elles sont rangées et avec quoi on les exploite.',
      categories: [
        {
          id: 'stocker', title: 'Stocker les données',
          subcategories: [
            { id: 'bdd', title: 'Les bases de données', lessons: ['base-de-donnees'] },
            { id: 'entrepots', title: 'Lacs, entrepôts et magasins', lessons: ['entrepots-data'] }
          ]
        },
        {
          id: 'exploiter', title: 'Exploiter les données',
          subcategories: [
            { id: 'langages', title: 'Les langages', lessons: ['langages-data'] },
            { id: 'qualite', title: 'Qualité & cadre légal', lessons: ['gouvernance-data', 'rgpd'] }
          ]
        }
      ]
    },
    {
      id: 'si',
      title: 'Système d’information',
      description: 'La carte des outils d’une entreprise : qui fait quoi, et comment ils se parlent.',
      categories: [
        {
          id: 'cartographie', title: 'La carte du SI',
          subcategories: [
            { id: 'briques', title: 'Les grandes briques', lessons: ['si-briques'] },
            { id: 'dialogue', title: 'Faire dialoguer les outils', lessons: ['api'] }
          ]
        },
        {
          id: 'conduite', title: 'Faire vivre le SI',
          subcategories: [
            { id: 'projets', title: 'Les projets', lessons: ['projet-si'] }
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
          id: 'fondamentaux-ia', title: 'Fondamentaux',
          subcategories: [
            { id: 'modeles', title: 'Les modèles de langage', lessons: ['llm', 'hallucination'] }
          ]
        },
        {
          id: 'usage-ia', title: 'Travailler avec l\u2019IA',
          subcategories: [
            { id: 'bien-demander', title: 'Bien s\u2019en servir', lessons: ['prompt', 'ia-limites'] },
            { id: 'cadre', title: 'Coûts et confidentialité', lessons: ['cout-ia', 'ia-donnees'] }
          ]
        },
        {
          id: 'agents', title: 'Agents & outils',
          subcategories: [
            { id: 'etendre', title: 'Étendre un assistant', lessons: ['ia-skills', 'mcp'] },
            { id: 'autonomie', title: 'Quand l\u2019assistant agit', lessons: ['agent'] },
            { id: 'connaissance', title: 'Lui donner de la connaissance', lessons: ['rag'] }
          ]
        }
      ]
    }
  ];

  var LEVELS = { 1: 'Découverte', 2: 'Intermédiaire', 3: 'Avancé' };

  return { LESSONS: LESSONS, FAMILIES: FAMILIES, LEVELS: LEVELS };
})();
