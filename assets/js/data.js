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
    'algorithme': {
      title: 'C’est quoi un algorithme ?',
      summary: 'Une suite d’instructions précises pour résoudre un problème, toujours de la même façon.',
      path: 'lecons/algorithme.html',
      duration: '6 min', level: 1,
      keywords: ['algorithme', 'instructions', 'programme', 'code', 'méthode', 'tri', 'étapes']
    },
    'local-vs-cloud': {
      title: 'Local ou cloud : quelle différence ?',
      summary: 'Chez soi ou chez quelqu’un d’autre : où vivent vraiment vos fichiers et vos programmes.',
      path: 'lecons/local-vs-cloud.html',
      duration: '6 min', level: 1,
      keywords: ['local', 'cloud', 'nuage', 'hébergement', 'sauvegarde', 'données', 'internet']
    },
    'virtualisation': {
      title: 'La virtualisation, un ordinateur dans l’ordinateur',
      summary: 'Comment une seule machine physique se découpe en plusieurs, chacune persuadée d’être seule au monde.',
      path: 'lecons/virtualisation.html',
      duration: '7 min', level: 2,
      keywords: ['virtualisation', 'machine virtuelle', 'vm', 'hyperviseur', 'serveur', 'cloud', 'conteneur', 'docker']
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

    'donnees-structurees': {
      title: 'Donnée structurée ou pas : le grand tri',
      summary: 'Tableau, formulaire souple, ou vrac total : trois familles de données, qui ne se rangent pas avec les mêmes outils.',
      path: 'lecons/donnees-structurees.html',
      duration: '6 min', level: 1,
      keywords: ['structurée', 'non structurée', 'semi-structurée', 'json', 'xml', 'donnée', 'schéma', 'tableur']
    },
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
    'bi-tableau-de-bord': {
      title: 'Ce qu’il y a derrière un tableau de bord',
      summary: 'De la donnée rangée au graphique du lundi matin : ce que fait vraiment un outil de BI.',
      path: 'lecons/bi-tableau-de-bord.html',
      duration: '6 min', level: 2,
      keywords: ['bi', 'business intelligence', 'tableau de bord', 'dashboard', 'kpi', 'power bi', 'tableau', 'looker', 'reporting', 'seuil']
    },

    /* ---------- Système d'information ---------- */

    'crm': {
      title: 'C’est quoi un CRM ?',
      summary: 'Pas un carnet d’adresses : la mémoire de chaque client, partagée par toute l’entreprise.',
      path: 'lecons/crm.html',
      duration: '6 min', level: 1,
      keywords: ['crm', 'client', 'relation client', 'commercial', 'pipeline', 'opportunité', 'vente']
    },
    'si-briques': {
      title: 'C’est quoi un système d’information ?',
      summary: 'ERP, CRM, paie, BI : la carte des outils d’une entreprise et ce qui les relie.',
      path: 'lecons/si-briques.html',
      duration: '7 min', level: 1,
      keywords: ['système d’information', 'si', 'erp', 'crm', 'urbanisation', 'processus', 'métier', 'intégration', 'référentiel']
    },
    'erp': {
      title: 'C’est quoi un ERP ?',
      summary: 'Le grand registre qui fait tourner l’activité interne : stock, commandes, factures, un seul chiffre partagé.',
      path: 'lecons/erp.html',
      duration: '6 min', level: 1,
      keywords: ['erp', 'progiciel de gestion', 'stock', 'facture', 'commande', 'intégré', 'enterprise resource planning', 'sap']
    },
    'support': {
      title: 'Le support informatique, du ticket à la résolution',
      summary: 'Un problème signalé, trié par urgence, puis résolu et clos : la mécanique derrière « j’ai ouvert un ticket ».',
      path: 'lecons/support.html',
      duration: '6 min', level: 1,
      keywords: ['support', 'ticket', 'helpdesk', 'itsm', 'sla', 'assistance', 'incident', 'priorité']
    },
    'sso': {
      title: 'Le SSO, une seule connexion pour tous vos outils',
      summary: 'ERP, CRM, messagerie, RH : comment une seule connexion suffit à ouvrir tous les outils de l’entreprise.',
      path: 'lecons/sso.html',
      duration: '6 min', level: 2,
      keywords: ['sso', 'single sign-on', 'connexion unique', 'identité', 'mot de passe', 'mfa', 'authentification']
    },

    /* ---------- Intelligence artificielle ---------- */

    'machine-learning': {
      title: 'Qu’est-ce que le Machine Learning ?',
      summary: 'Avant l’IA générative, il y avait déjà l’apprentissage à partir d’exemples, sans écrire la moindre règle.',
      path: 'lecons/machine-learning.html',
      duration: '6 min', level: 1,
      keywords: ['machine learning', 'apprentissage automatique', 'modèle', 'entraînement', 'classification', 'prédiction']
    },
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
    'projet-si': {
      title: 'Comment se déroule un projet SI',
      summary: 'Cadrage, construction, recette, déploiement : les quatre temps d\u2019un projet, du besoin métier à l\u2019usage quotidien.',
      path: 'lecons/projet-si.html',
      duration: '7 min', level: 2,
      keywords: ['projet', 'cadrage', 'cahier des charges', 'recette', 'déploiement', 'moa', 'moe', 'run', 'go no-go']
    },
    'llm': {
      title: 'Comment un modèle de langage écrit',
      summary: 'Un mot après l\u2019autre, sans jamais savoir où il va — et pourquoi ça marche quand même.',
      path: 'lecons/llm.html',
      duration: '7 min', level: 1,
      keywords: ['llm', 'modèle de langage', 'token', 'prédiction', 'entraînement', 'chatgpt', 'claude', 'ia générative']
    },
    'gpu': {
      title: 'Pourquoi l\u2019IA a besoin de cartes graphiques',
      summary: 'Des milliards de multiplications simples : ce que fait vraiment une IA quand elle « réfléchit ».',
      path: 'lecons/gpu.html',
      duration: '7 min', level: 1,
      keywords: ['gpu', 'carte graphique', 'nvidia', 'calcul', 'processeur', 'puce', 'entraînement', 'vram', 'datacenter']
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
    'injection-prompt': {
      title: 'Le prompt injection, le risque caché des agents IA',
      summary: 'Un texte peut contenir un ordre adressé à l’IA plutôt qu’à vous — et un agent, lui, peut lui obéir.',
      path: 'lecons/injection-prompt.html',
      duration: '6 min', level: 2,
      keywords: ['prompt injection', 'injection', 'sécurité', 'agent', 'garde-fous', 'attaque', 'donnée externe']
    },
    'cybersecurite': {
      title: 'Les bases de la cybersécurité',
      summary: 'Mot de passe, hameçonnage, double authentification : les trois gestes qui comptent vraiment.',
      path: 'lecons/cybersecurite.html',
      duration: '7 min', level: 1,
      keywords: ['sécurité', 'phishing', 'hameçonnage', 'mot de passe', 'mfa', 'double authentification', 'arnaque', 'piratage']
    },

    'cout-ia': {
      title: 'Ce que coûte une IA',
      summary: 'Jetons, abonnements, fenêtre de contexte : pourquoi un long document coûte cher.',
      path: 'lecons/cout-ia.html',
      duration: '6 min', level: 2,
      keywords: ['token', 'jeton', 'coût', 'tarif', 'contexte', 'abonnement', 'facturation', 'api']
    },
    'ia-donnees': {
      title: 'Vos données et l\u2019IA',
      summary: 'Ce qui part, ce qui reste, ce qui sert à l\u2019entraînement — et les questions à poser.',
      path: 'lecons/ia-donnees.html',
      duration: '6 min', level: 2,
      keywords: ['confidentialité', 'données', 'entraînement', 'rgpd', 'secret', 'fournisseur', 'grand public', 'entreprise']
    },
    'ia-limites': {
      title: 'Ce qu\u2019une IA ne sait pas faire',
      summary: 'Les limites structurelles — celles qui ne partiront pas avec la prochaine version.',
      path: 'lecons/ia-limites.html',
      duration: '6 min', level: 2,
      keywords: ['limites', 'calcul', 'temps réel', 'responsabilité', 'jugement', 'fiabilité', 'compter']
    },
    'chiffrement': {
      title: 'Le chiffrement expliqué simplement',
      summary: 'Le coffre et sa clé, la double serrure, et ce que « chiffré de bout en bout » veut dire.',
      path: 'lecons/chiffrement.html',
      duration: '7 min', level: 2,
      keywords: ['chiffrement', 'clé', 'https', 'bout en bout', 'whatsapp', 'sécurité', 'déchiffrer', 'cadenas']
    },
    'vpn': {
      title: 'Le VPN, un tunnel privé sur un réseau public',
      summary: 'Un VPN ne rend pas invisible : il déplace la confiance vers un autre intermédiaire.',
      path: 'lecons/vpn.html',
      duration: '6 min', level: 2,
      keywords: ['vpn', 'tunnel', 'chiffrement', 'adresse ip', 'confidentialité', 'réseau privé virtuel', 'wifi public']
    },
    'cloud-saas': {
      title: 'SaaS, PaaS, IaaS',
      summary: 'Trois niveaux de location, de la machine nue au logiciel clé en main.',
      path: 'lecons/cloud-saas.html',
      duration: '6 min', level: 2,
      keywords: ['saas', 'paas', 'iaas', 'cloud', 'abonnement', 'hébergement', 'licence', 'location']
    },
    'gouvernance-data': {
      title: 'Pourquoi deux tableaux ne disent jamais pareil',
      summary: 'Qualité, définitions, propriétaire : le vrai sujet derrière « gouvernance des données ».',
      path: 'lecons/gouvernance-data.html',
      duration: '7 min', level: 2,
      keywords: ['qualité', 'gouvernance', 'définition', 'référentiel', 'doublon', 'propriétaire', 'indicateur', 'kpi']
    },
    'migration-donnees': {
      title: 'Migrer ses données, le grand déménagement',
      summary: 'Changer d’ERP ou de CRM, c’est aussi faire suivre les données de l’ancien système, sans les perdre ni les déformer.',
      path: 'lecons/migration-donnees.html',
      duration: '6 min', level: 2,
      keywords: ['migration', 'données', 'etl', 'mapping', 'nettoyage', 'bascule', 'crm', 'erp', 'projet data']
    },

    'fichiers': {
      title: 'Fichiers, formats et dossiers',
      summary: 'Pourquoi un fichier ne s\u2019ouvre pas, et pourquoi le PDF existe.',
      path: 'lecons/fichiers.html', duration: '6 min', level: 1,
      keywords: ['fichier', 'format', 'extension', 'dossier', 'pdf', 'jpg', 'csv', 'zip', 'convertir']
    },
    'navigateur': {
      title: 'Ce que sait votre navigateur',
      summary: 'Cookies, pistage, navigation priv\u00e9e : ce qui est enregistr\u00e9, et par qui.',
      path: 'lecons/navigateur.html', duration: '7 min', level: 1,
      keywords: ['navigateur', 'cookie', 'trace', 'publicit\u00e9', 'pistage', 'navigation priv\u00e9e', 'cache', 'vie priv\u00e9e']
    },
    'wifi-box': {
      title: 'Wifi, box et d\u00e9bit',
      summary: 'Pourquoi \u00e7a rame dans la chambre du fond, alors qu\u2019on a la fibre.',
      path: 'lecons/wifi-box.html', duration: '6 min', level: 1,
      keywords: ['wifi', 'box', 'd\u00e9bit', 'latence', 'fibre', 'r\u00e9p\u00e9teur', 'ghz', 'connexion']
    },
    'sauvegarde': {
      title: 'Sauvegarder pour de vrai',
      summary: 'Synchroniser n\u2019est pas sauvegarder : la r\u00e8gle des trois copies.',
      path: 'lecons/sauvegarde.html', duration: '6 min', level: 1,
      keywords: ['sauvegarde', 'backup', 'synchronisation', 'rançongiciel', 'restauration', 'cloud', 'disque']
    },
    'rgpd': {
      title: 'Le RGPD en clair',
      summary: 'Ce qu\u2019on a le droit de faire avec les donn\u00e9es des gens.',
      path: 'lecons/rgpd.html', duration: '7 min', level: 1,
      keywords: ['rgpd', 'donn\u00e9es personnelles', 'consentement', 'cnil', 'droits', 'conservation', 'vie priv\u00e9e']
    },

    'tor': {
      title: 'Le r\u00e9seau Tor, comment \u00e7a marche',
      summary: 'Le chiffrement cache ce qui est dit ; Tor cache qui parle \u00e0 qui \u2014 trois relais et un oignon de chiffrement.',
      path: 'lecons/tor.html', duration: '7 min', level: 2,
      keywords: ['tor', 'onion routing', 'oignon', 'anonymat', 'dark web', 'relais', 'navigateur tor', 'vie priv\u00e9e']
    },
    'email': {
      title: 'Comment voyage un e-mail',
      summary: 'Un e-mail ne part jamais directement chez son destinataire : le trajet r\u00e9el, du clic sur Envoyer au tri anti-spam.',
      path: 'lecons/email.html', duration: '6 min', level: 1,
      keywords: ['e-mail', 'email', 'courriel', 'smtp', 'spam', 'pourriel', 'bo\u00eete mail', 'pi\u00e8ce jointe', 'hame\u00e7onnage']
    },
    /* ---------- Leçons prévues (affichées en grisé) ---------- */

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
            { id: 'ou-ca-tourne', title: 'Où tournent les programmes', lessons: ['local-vs-cloud', 'cloud-saas', 'virtualisation'] },
            { id: 'fichiers-formats', title: 'Fichiers et formats', lessons: ['fichiers'] }
          ]
        },
        {
          id: 'logiciels', title: 'Le logiciel',
          subcategories: [
            { id: 'programmes', title: 'De quoi est fait un programme', lessons: ['logiciel', 'algorithme'] }
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
            { id: 'bases-reseau', title: 'Les bases', lessons: ['internet', 'wifi-box'] },
            { id: 'messagerie', title: 'La messagerie', lessons: ['email'] },
            { id: 'traces', title: 'Les traces qu\u2019on laisse', lessons: ['navigateur'] }
          ]
        },
        {
          id: 'securite', title: 'Se protéger',
          subcategories: [
            { id: 'gestes', title: 'Les gestes du quotidien', lessons: ['cybersecurite'] },
            { id: 'protection', title: 'Ce qui protège les données', lessons: ['chiffrement', 'sauvegarde', 'vpn'] },
            { id: 'anonymat', title: 'Rester anonyme', lessons: ['tor'] }
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
            { id: 'nature', title: 'La nature des données', lessons: ['donnees-structurees'] },
            { id: 'bdd', title: 'Les bases de données', lessons: ['base-de-donnees'] },
            { id: 'entrepots', title: 'Lacs, entrepôts et magasins', lessons: ['entrepots-data'] }
          ]
        },
        {
          id: 'exploiter', title: 'Exploiter les données',
          subcategories: [
            { id: 'langages', title: 'Les langages', lessons: ['langages-data'] },
            { id: 'piloter', title: 'Piloter par les chiffres', lessons: ['bi-tableau-de-bord'] },
            { id: 'qualite', title: 'Qualité & cadre légal', lessons: ['gouvernance-data', 'rgpd'] },
            { id: 'projets-data', title: 'Mener un projet data', lessons: ['migration-donnees'] }
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
            { id: 'briques', title: 'Les grandes briques', lessons: ['si-briques', 'erp'] },
            { id: 'dialogue', title: 'Faire dialoguer les outils', lessons: ['api', 'sso'] },
            { id: 'relation-client', title: 'La relation client', lessons: ['crm'] }
          ]
        },
        {
          id: 'conduite', title: 'Faire vivre le SI',
          subcategories: [
            { id: 'projets', title: 'Les projets', lessons: ['projet-si'] },
            { id: 'support', title: 'Le support', lessons: ['support'] }
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
            { id: 'apprentissage', title: 'Apprendre par l’exemple', lessons: ['machine-learning'] },
            { id: 'modeles', title: 'Les modèles de langage', lessons: ['llm', 'hallucination'] },
            { id: 'machinerie', title: 'La machinerie', lessons: ['gpu'] }
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
            { id: 'connaissance', title: 'Lui donner de la connaissance', lessons: ['rag'] },
            { id: 'securiser', title: 'Le sécuriser', lessons: ['injection-prompt'] }
          ]
        }
      ]
    }
  ];


  /* ---------- Cartes de concept ----------
   * Format fixe : une définition en une phrase, puis quatre étapes.
   * Elles se consultent sur cartes.html et alimentent la recherche de l'accueil.
   */
  var CARDS = [
    {
      id: "token", terme: "Jeton (token)", domaine: "IA",
      aka: ["token", "jeton", "tokens"],
      une: "Le morceau de texte que l’IA manipule : ni une lettre, ni tout à fait un mot.",
      etapes: [
        "Un modèle ne lit pas des mots. Avant tout traitement, le texte est découpé en petits morceaux : les jetons.",
        "Un mot courant vaut un jeton ; un mot long ou rare en vaut plusieurs. « Anticonstitutionnellement » en pèse trois ou quatre.",
        "En français, comptez trois jetons pour quatre mots. Une page A4 ≈ 700 jetons, un roman ≈ 120 000.",
        "Tout se compte en jetons : ce que vous payez, et la quantité de texte que le modèle peut garder sous les yeux."
      ],
      voir: "cout-ia"
    },
    {
      id: "contexte", terme: "Fenêtre de contexte", domaine: "IA",
      aka: ["contexte", "fenêtre", "context window", "mémoire"],
      une: "La quantité de texte que le modèle peut avoir sous les yeux au même instant.",
      etapes: [
        "Un modèle n’a aucune mémoire. À chaque message, on lui repasse tout : les consignes, les documents, l’historique complet.",
        "Cet ensemble doit tenir dans une taille maximale, exprimée en jetons. C’est la fenêtre de contexte.",
        "Quand elle est pleine, le plus ancien sort du cadre. D’où l’impression qu’il « oublie » une consigne donnée très en amont.",
        "Une grande fenêtre coûte cher et ne garantit pas l’attention : mieux vaut donner peu et bien que tout donner."
      ],
      voir: "cout-ia"
    },
    {
      id: "prompt", terme: "Prompt", domaine: "IA",
      aka: ["prompt", "demande", "consigne", "prompt engineering"],
      une: "La demande adressée à l’IA — en pratique, la moitié du résultat.",
      etapes: [
        "Le modèle continue ce qu’on lui donne. Votre demande est le point de départ de tout ce qui suivra.",
        "Une demande vague laisse mille continuations acceptables : il rend la plus moyenne d’entre elles.",
        "Quatre ingrédients resserrent la cible : le contexte, la tâche (un verbe précis), le format attendu, et un exemple.",
        "Un exemple vaut mieux que trois adjectifs. Et la première réponse n’est qu’un brouillon à corriger."
      ],
      voir: "prompt"
    },
    {
      id: "prompt-systeme", terme: "Prompt système", domaine: "IA",
      aka: ["prompt système", "system prompt", "instructions"],
      une: "Les consignes permanentes, posées avant votre première question.",
      etapes: [
        "Avant que vous n’écriviez quoi que ce soit, l’éditeur du produit a déjà donné des instructions au modèle.",
        "Elles fixent son rôle, son ton, ce qu’il doit refuser, le format de ses réponses, parfois la date du jour.",
        "Elles sont renvoyées à chaque message, en tête du contexte — donc elles comptent dans ce que vous payez.",
        "C’est ce qui distingue deux assistants bâtis sur le même modèle : même moteur, consignes différentes."
      ]
    },
    {
      id: "temperature", terme: "Température", domaine: "IA",
      aka: ["température", "temperature", "créativité", "aléatoire"],
      une: "Le réglage qui décide si le modèle joue la sécurité ou prend des risques.",
      etapes: [
        "À chaque mot, le modèle a une liste de suites possibles, classées par vraisemblance.",
        "Une température basse le pousse à prendre presque toujours la plus probable : réponses sobres, répétables, prévisibles.",
        "Une température haute lui fait piocher plus librement : plus de variété, plus d’originalité, plus d’erreurs.",
        "D’où deux usages : basse pour extraire des données ou classer, plus haute pour rédiger ou chercher des idées."
      ]
    },
    {
      id: "rag", terme: "RAG", domaine: "IA",
      aka: ["rag", "retrieval", "documents", "base de connaissance", "recherche augmentée"],
      une: "Chercher dans vos documents d’abord, répondre ensuite.",
      etapes: [
        "Un modèle n’a jamais vu vos documents internes. Interrogé dessus, il produit une réponse plausible — donc inventée.",
        "Le RAG glisse une étape avant la réponse : une recherche automatique dans vos documents, préalablement découpés en morceaux.",
        "Les quelques extraits les plus proches du sens de la question lui sont joints. Il lit un texte au lieu de puiser dans ses souvenirs.",
        "Résultat : une réponse ancrée, citant sa source, à jour dès qu’on ajoute un fichier — et sans rien réentraîner."
      ],
      voir: "rag",
      pas: "le fine-tuning, qui modifie le modèle. Le RAG, lui, ne touche à rien : il fournit la matière au bon moment."
    },
    {
      id: "embedding", terme: "Embedding (vecteur)", domaine: "IA",
      aka: ["embedding", "vecteur", "base vectorielle", "similarité"],
      une: "Une position sur une carte du sens, qui permet de chercher par idée plutôt que par mot.",
      etapes: [
        "Chercher « congés » dans des documents qui parlent d’« absences » ne donne rien : les mots diffèrent, le sens non.",
        "On calcule donc pour chaque morceau de texte une suite de nombres — son embedding — qui le place sur une carte.",
        "Les textes de sens voisin atterrissent côte à côte, même sans aucun mot commun ; ce qui n’a rien à voir est loin.",
        "Chercher devient alors : poser la question sur la carte, et regarder ce qu’il y a autour. C’est le moteur du RAG."
      ],
      voir: "rag"
    },
    {
      id: "fine-tuning", terme: "Fine-tuning", domaine: "IA",
      aka: ["fine-tuning", "finetuning", "affinage", "réentraînement", "spécialisation"],
      une: "Prolonger l’entraînement d’un modèle sur vos exemples, pour changer sa façon de faire.",
      etapes: [
        "Un modèle généraliste fait tout à peu près bien. Parfois, on veut une tâche précise, exécutée toujours de la même manière.",
        "On lui montre des milliers d’exemples — la demande type, la réponse attendue — et ses réglages internes sont légèrement ajustés.",
        "Cela déplace son style, son format, son ton. Pas ses connaissances : ce n’est pas ainsi qu’on lui apprend vos tarifs.",
        "C’est long, coûteux, et à refaire à chaque évolution. Dans la grande majorité des cas, un bon prompt ou du RAG suffit."
      ],
      pas: "le RAG. Formule à retenir : le RAG donne du savoir, le fine-tuning donne un savoir-faire."
    },
    {
      id: "entrainement", terme: "Entraînement", domaine: "IA",
      aka: ["entraînement", "training", "pré-entraînement", "apprentissage"],
      une: "La phase, unique et colossale, où le modèle est fabriqué.",
      etapes: [
        "On fait lire au modèle d’énormes quantités de texte en lui demandant sans cesse de deviner le mot suivant.",
        "À chaque erreur, ses milliards de réglages internes bougent d’un cheveu. Répété des milliards de fois, cela finit par produire du langage.",
        "Cela dure des mois, mobilise des milliers de cartes graphiques et coûte des dizaines de millions.",
        "Puis c’est figé. Un modèle n’apprend plus rien pendant que vous l’utilisez — d’où sa date d’arrêt des connaissances."
      ],
      voir: "llm"
    },
    {
      id: "inference", terme: "Inférence", domaine: "IA",
      aka: ["inférence", "inference", "utilisation", "appel"],
      une: "Le moment où le modèle s’en sert, par opposition au moment où on l’a fabriqué.",
      etapes: [
        "Deux temps très différents : l’entraînement, une fois, et l’inférence, à chaque question posée.",
        "L’inférence, c’est faire passer votre texte à travers le modèle figé pour en produire un autre.",
        "C’est rapide et bien moins cher que l’entraînement — mais multiplié par des millions d’appels quotidiens.",
        "C’est là que part l’essentiel de la facture d’une entreprise : pas dans la fabrication, dans l’usage."
      ]
    },
    {
      id: "gpu", terme: "GPU (carte graphique)", domaine: "IA",
      aka: ["gpu", "carte graphique", "nvidia", "puce", "processeur graphique"],
      une: "La puce qui fait des milliers de calculs simples en même temps — exactement ce dont l’IA a besoin.",
      etapes: [
        "Un processeur classique enchaîne les opérations une à une, très vite. Parfait pour un tableur, inadapté à une IA.",
        "Faire tourner un modèle, c’est multiplier d’immenses tableaux de nombres : des milliards d’opérations minuscules, toutes indépendantes.",
        "Une carte graphique possède des milliers de petits cœurs travaillant en parallèle. Conçue pour les pixels, elle sert les mêmes mathématiques.",
        "D’où les pénuries et les prix : entraîner un modèle mobilise des milliers de ces cartes pendant des mois."
      ],
      voir: "gpu"
    },
    {
      id: "llm", terme: "LLM (modèle de langage)", domaine: "IA",
      aka: ["llm", "modèle de langage", "grand modèle", "gpt", "claude"],
      une: "Une maquette du langage, qui prédit le mot suivant — encore et encore.",
      etapes: [
        "« Large Language Model » : un modèle construit en observant d’immenses quantités de texte.",
        "Son unique geste : évaluer tous les mots possibles pour la suite, en choisir un, recommencer avec ce qu’il vient d’écrire.",
        "Il ne consulte aucune base et ne vérifie rien. Il produit ce qui est vraisemblable, ce qui coïncide souvent avec le vrai.",
        "Tout le reste — assistants, agents, résumés, traductions — n’est que ce geste, habillé d’outils autour."
      ],
      voir: "llm"
    },
    {
      id: "ia-generative", terme: "IA générative", domaine: "IA",
      aka: ["ia générative", "genai", "générative", "création"],
      une: "Les IA qui produisent du contenu, au lieu de seulement classer ou prédire.",
      etapes: [
        "L’IA existait avant : détecter une fraude, recommander un film, reconnaître un visage. Elle choisissait parmi des réponses possibles.",
        "L’IA générative, elle, fabrique quelque chose qui n’existait pas : un texte, une image, une voix, du code.",
        "Le principe reste le même — prédire l’élément suivant — mais appliqué jusqu’à produire une œuvre entière.",
        "D’où son irruption dans les métiers créatifs et de rédaction, là où les IA précédentes ne touchaient que l’analyse."
      ]
    },
    {
      id: "multimodal", terme: "Multimodal", domaine: "IA",
      aka: ["multimodal", "image", "voix", "vision"],
      une: "Un modèle qui comprend autre chose que du texte : images, son, documents.",
      etapes: [
        "Les premiers modèles ne lisaient que du texte. Une capture d’écran ou un PDF scanné leur était opaque.",
        "Un modèle multimodal convertit aussi les images et le son en jetons, dans le même espace que les mots.",
        "Il peut donc décrire une photo, lire un graphique, commenter une capture, transcrire une réunion.",
        "En pratique : vous pouvez montrer plutôt que décrire — souvent le moyen le plus rapide de se faire comprendre."
      ]
    },
    {
      id: "hallucination", terme: "Hallucination", domaine: "IA",
      aka: ["hallucination", "invention", "erreur", "faux"],
      une: "Une réponse fausse, énoncée avec exactement le même aplomb qu’une réponse juste.",
      etapes: [
        "Le modèle cherche le vraisemblable, pas le vrai. La plupart du temps, cela revient au même.",
        "Quand l’information est rare, récente ou interne à votre entreprise, il n’a rien vu — et il répond quand même.",
        "Il fabrique alors ce qui « sonne juste » : une référence bien formatée, une date crédible, un article de loi inexistant.",
        "Le danger n’est pas la fréquence des erreurs, c’est l’absence de signal : rien dans le ton ne les distingue."
      ],
      voir: "hallucination"
    },
    {
      id: "agent", terme: "Agent", domaine: "IA",
      aka: ["agent", "autonome", "agentique", "action"],
      une: "Un assistant qui agit au lieu de seulement répondre.",
      etapes: [
        "Un assistant produit un texte et s’arrête. C’est vous qui copiez, cliquez, envoyez.",
        "Un agent reçoit un objectif, pas une marche à suivre : « relance les devis sans réponse ».",
        "Il boucle : il choisit une action, l’exécute avec un vrai outil, regarde le résultat, recommence jusqu’à avoir fini.",
        "D’où trois garde-fous obligatoires : un périmètre d’outils, une validation humaine sur ce qui engage, et une trace."
      ],
      voir: "agent"
    },
    {
      id: "harness", terme: "Harness", domaine: "IA",
      aka: ["harness", "enveloppe", "produit", "outillage"],
      une: "Tout ce qu’on installe autour du modèle pour en faire un outil utilisable.",
      etapes: [
        "Un modèle nu ne fait que produire du texte. Il ne voit aucun fichier, n’appelle aucun outil, ne retient rien.",
        "Le harness est la couche autour : la conversation, les outils disponibles, la mémoire, les droits, les garde-fous, l’affichage.",
        "C’est lui qui décide quoi envoyer au modèle, que faire de sa réponse, et jusqu’où il a le droit d’aller.",
        "Deux produits bâtis sur le même modèle peuvent être incomparables : la différence est presque toujours là."
      ]
    },
    {
      id: "workflow", terme: "Workflow", domaine: "IA",
      aka: ["workflow", "automatisation", "chaîne", "processus automatisé"],
      une: "Un enchaînement d’étapes fixé d’avance — le contraire d’un agent qui improvise.",
      etapes: [
        "Pour automatiser une tâche, deux voies : écrire la marche à suivre, ou laisser l’IA décider du chemin.",
        "Un workflow fixe les étapes : lire le message, en extraire le montant, demander un résumé à l’IA, remplir le tableau, notifier.",
        "C’est prévisible, testable, reproductible — et quand ça casse, ça casse toujours au même endroit, donc ça se corrige.",
        "La règle : un workflow quand le chemin est connu, un agent quand il ne l’est pas. La plupart des besoins relèvent du premier."
      ]
    },
    {
      id: "skill", terme: "Skill", domaine: "IA",
      aka: ["skill", "compétence", "méthode", "instructions"],
      une: "Un dossier d’instructions qui apprend votre méthode à un assistant.",
      etapes: [
        "Un assistant est un généraliste : il ignore vos formats, vos règles et vos habitudes maison.",
        "Une skill est un simple répertoire : un nom, une description de quand s’en servir, la méthode en français, et des fichiers d’exemple.",
        "L’assistant ne lit d’abord que les descriptions. Il n’ouvre le dossier complet que lorsque le sujet tombe.",
        "Rien n’est réentraîné : c’est du texte, partageable, corrigeable en deux minutes."
      ],
      voir: "ia-skills"
    },
    {
      id: "mcp", terme: "MCP", domaine: "IA",
      aka: ["mcp", "model context protocol", "connecteur", "serveur mcp"],
      une: "La prise standard entre un assistant IA et vos outils.",
      etapes: [
        "Un assistant ne voit ni votre agenda, ni votre CRM, ni vos fichiers. La passerelle, c’est vous, à coups de copier-coller.",
        "Sans règle commune, il faudrait écrire une intégration sur mesure par couple assistant-outil. Autant de choses à maintenir.",
        "MCP fixe une langue commune : comment se présenter, annoncer ce qu’on sait faire, demander, répondre.",
        "Un serveur MCP est le petit programme qui expose un outil dans cette langue — une prise, branchable par tous."
      ],
      voir: "mcp"
    },
    {
      id: "agi", terme: "AGI", domaine: "IA",
      aka: ["agi", "intelligence artificielle générale", "superintelligence"],
      une: "L’hypothèse d’une IA aussi polyvalente qu’un humain — un objectif, pas un produit.",
      etapes: [
        "Les IA actuelles sont larges sur le langage mais étroites en pratique : elles ne poursuivent aucun but propre et ne se corrigent pas seules.",
        "L’AGI désignerait une IA capable d’apprendre n’importe quelle tâche intellectuelle humaine, et de s’adapter à l’imprévu sans qu’on la reprogramme.",
        "Ni la définition ni les critères ne font consensus, et les prédictions de date varient de quelques années à jamais.",
        "Pour une décision d’entreprise, le mot n’aide pas : seul compte ce que l’outil sait faire cette semaine, et qui est mesurable."
      ]
    },
    {
      id: "open-weights", terme: "Modèle ouvert", domaine: "IA",
      aka: ["open source", "open weights", "poids ouverts", "llama", "mistral"],
      une: "Un modèle dont les réglages sont publiés : on peut le faire tourner chez soi.",
      etapes: [
        "Un modèle fermé ne s’utilise qu’à travers le service de son éditeur : vos données partent, les règles sont les siennes.",
        "Un modèle ouvert publie ses poids — le fichier de réglages issu de l’entraînement. N’importe qui peut le télécharger.",
        "On peut alors l’héberger sur ses propres machines : rien ne sort, aucun abonnement, et le contrôle du calendrier.",
        "En échange : il faut des cartes graphiques, des compétences, et accepter un niveau souvent en retrait des meilleurs modèles fermés."
      ]
    },
    {
      id: "benchmark", terme: "Benchmark", domaine: "IA",
      aka: ["benchmark", "évaluation", "classement", "score"],
      une: "Un examen standardisé qui compare les modèles — et qu’il faut lire avec prudence.",
      etapes: [
        "Pour comparer deux modèles, on leur fait passer les mêmes milliers de questions : maths, code, raisonnement, culture.",
        "Cela donne des scores, des classements, et les annonces qu’on voit à chaque sortie de modèle.",
        "Mais un examen finit par se préparer : certains scores progressent sans que l’usage réel change beaucoup.",
        "Le seul test qui compte pour vous : dix cas tirés de votre travail, comparés à l’aveugle. Une demi-journée, et la question est tranchée."
      ]
    },
    {
      id: "garde-fous", terme: "Garde-fous", domaine: "IA",
      aka: ["garde-fous", "guardrails", "sécurité", "modération", "validation"],
      une: "Ce qu’on met autour de l’IA pour qu’une erreur reste rattrapable.",
      etapes: [
        "Un modèle se trompe parfois, et un agent se trompe vite : deux cents actions en une minute plutôt qu’une.",
        "On borne donc en amont : quels outils, en lecture ou en écriture, sur quelles données, pour quels utilisateurs.",
        "On borne en aval : validation humaine sur ce qui engage — envoyer, payer, supprimer, publier.",
        "Et on garde une trace de ce qui a été fait et pourquoi, seul moyen de comprendre après coup."
      ]
    },
    {
      id: "cahier-des-charges", terme: "Cahier des charges", domaine: "SI",
      aka: ["cahier des charges", "spécifications", "expression de besoin", "cdc"],
      une: "Le document qui décrit noir sur blanc ce qu’un projet doit produire, avant qu’on commence à le construire.",
      etapes: [
        "Un projet part toujours d’un besoin, souvent flou au départ : « on voudrait que ce soit plus simple ».",
        "Le cadrage le transforme en exigences précises : qui l’utilisera, ce qu’il doit permettre de faire, sous quelles contraintes.",
        "Le tout est rassemblé dans le cahier des charges, lu et approuvé par le métier qui demande et l’équipe qui va construire.",
        "C’est la référence commune : en cas de désaccord plus tard, c’est ce document qui tranche, pas le souvenir de chacun."
      ],
      voir: "projet-si"
    },
    {
      id: "recette", terme: "Recette (informatique)", domaine: "SI",
      aka: ["recette", "tests utilisateurs", "uat", "recette fonctionnelle"],
      une: "L’étape où les futurs utilisateurs testent l’outil avec de vrais cas, avant qu’il ne soit mis en service.",
      etapes: [
        "Une fois construit, un outil n’a été essayé que par ceux qui l’ont développé — un angle de vue partiel.",
        "La recette fait rejouer les scénarios réels par les futurs utilisateurs eux-mêmes, avec leurs propres dossiers.",
        "Chaque écart devient une anomalie, classée par gravité, corrigée, puis retestée jusqu’à disparition.",
        "Le déploiement n’est autorisé — le « go » — que lorsque plus aucune anomalie bloquante ne subsiste."
      ],
      voir: "projet-si",
      pas: "les tests techniques menés par les développeurs pendant la construction : la recette, elle, vient après, et se fait par les utilisateurs."
    },
    {
      id: "moa-moe", terme: "MOA / MOE", domaine: "SI",
      aka: ["moa", "moe", "maîtrise d’ouvrage", "maîtrise d’œuvre"],
      une: "Qui demande, et qui construit : les deux rôles qui doivent se parler tout au long d’un projet.",
      etapes: [
        "Un projet informatique réunit toujours deux points de vue : celui qui a le besoin, celui qui sait construire.",
        "La MOA — maîtrise d’ouvrage — c’est le métier : il exprime le besoin, valide les choix, réceptionne le résultat.",
        "La MOE — maîtrise d’œuvre — c’est l’équipe technique : elle conçoit, développe et teste la solution.",
        "Un projet qui échoue a presque toujours laissé ces deux rôles se parler trop peu, trop tard."
      ],
      voir: "projet-si"
    },
    {
      id: "tor", terme: "Tor (réseau)", domaine: "Réseau",
      aka: ["tor", "the onion router", "réseau tor", "navigateur tor", "dark web"],
      une: "Un réseau qui ne cache pas ce que vous dites, mais à qui vous parlez.",
      etapes: [
        "Le chiffrement protège le contenu d’un échange, pas le fait que vous parliez à tel site : votre adresse et sa destination restent visibles.",
        "Tor fait passer la connexion par trois relais tirés au hasard, chacun enveloppé d’une couche de chiffrement — comme un oignon (« The Onion Router »).",
        "Aucun des trois relais ne connaît à la fois qui vous êtes et où vous allez : le premier voit votre adresse, le dernier voit le site, celui du milieu ne voit ni l’un ni l’autre.",
        "Il est développé par une association à but non lucratif, le Tor Project, et fait tourner par des milliers de bénévoles — un tuyau neutre, pas un camp."
      ],
      voir: "tor",
      pas: "un VPN, qui masque votre adresse auprès d’un seul intermédiaire — le VPN lui-même. Tor la répartit entre trois relais indépendants, sans aucun point unique de confiance."
    },
    {
      id: "octet", terme: "Octet (byte)", domaine: "Informatique",
      aka: ["octet", "byte", "bit", "ko", "mo", "go"],
      une: "Le paquet de huit bits qui sert d’unité pour compter toute information numérique.",
      etapes: [
        "Un bit est la plus petite unité possible : un 0 ou un 1, un interrupteur allumé ou éteint.",
        "Un seul bit ne dit presque rien. On les regroupe donc par huit — un octet — pour représenter quelque chose d’utile, comme une lettre.",
        "Au-delà, on compte en multiples : environ mille octets font un kilooctet (Ko), un million un mégaoctet (Mo), un milliard un gigaoctet (Go).",
        "Une page de texte pèse quelques Ko, une photo quelques Mo, un film plusieurs Go : l’unité ne change pas, seule l’échelle grandit."
      ],
      voir: "ordinateur"
    },
    {
      id: "cache", terme: "Cache (navigateur)", domaine: "Informatique",
      aka: ["cache", "cache navigateur", "vider le cache", "mise en cache"],
      une: "Une copie locale gardée sous la main pour ne pas retélécharger ce qui n’a pas changé.",
      etapes: [
        "Un site est fait de dizaines de fichiers : images, styles, scripts. Les retélécharger à chaque page serait lent.",
        "Le navigateur garde donc une copie de ces fichiers sur votre machine, avec une date de validité indiquée par le site.",
        "À la visite suivante, il compare : rien n’a changé, il réutilise la copie ; sinon, il retélécharge seulement ce qui a bougé.",
        "D’où le vieux réflexe « vider le cache » quand une page affiche une version ancienne : on force le navigateur à tout retélécharger."
      ],
      voir: "navigateur"
    },
    {
      id: "etl", terme: "ETL / ELT", domaine: "Data",
      aka: ["etl", "elt", "extract transform load", "pipeline de données"],
      une: "La chaîne qui déplace des données d’un outil vers un autre, en les nettoyant au passage.",
      etapes: [
        "Extract : on va chercher les données à la source — un logiciel de vente, un fichier, une base.",
        "Transform : on les nettoie et on les met en forme — mêmes unités, mêmes noms de colonnes, doublons retirés.",
        "Load : on les dépose dans leur destination, le plus souvent un entrepôt de données.",
        "L’ETL transforme avant de charger ; l’ELT, plus courant aujourd’hui, charge d’abord et transforme ensuite, une fois les données déjà en place."
      ],
      voir: "entrepots-data"
    },
    {
      id: "kpi", terme: "KPI (indicateur clé)", domaine: "Data",
      aka: ["kpi", "indicateur clé", "indicateur de performance", "key performance indicator"],
      une: "Un chiffre choisi à l’avance pour suivre si les choses vont dans le bon sens.",
      etapes: [
        "Une activité produit des centaines de chiffres possibles. Un KPI est celui qu’on a décidé de regarder en premier, régulièrement.",
        "Il n’a de valeur que défini une fois pour toutes : ce qu’il compte, ce qu’il exclut, sur quelle période.",
        "Suivi dans le temps — semaine après semaine, mois après mois — il révèle une tendance qu’un chiffre isolé ne montre jamais.",
        "Un tableau de bord surchargé de vingt indicateurs n’aide personne : mieux vaut trois KPI suivis vraiment que vingt regardés une fois."
      ],
      voir: "gouvernance-data"
    },
    {
      id: "crm", terme: "CRM (gestion de la relation client)", domaine: "SI",
      aka: ["crm", "gestion de la relation client", "customer relationship management"],
      une: "Le logiciel qui garde la mémoire de chaque client, partagée par toute l’entreprise.",
      etapes: [
        "Sans lui, chaque service — commercial, support, marketing — garde sa propre trace du même client, sans se parler.",
        "Le CRM regroupe tout sur une fiche unique : appels, e-mails, achats, tickets, consultable par tous les services.",
        "Il suit aussi les ventes en cours, appelées opportunités, par étapes : prospect, qualifié, proposition, gagné ou perdu.",
        "Résultat : plus personne ne raconte deux fois la même histoire, et l’entreprise sait où en est chaque vente."
      ],
      voir: "crm",
      pas: "l’ERP, qui gère l’activité interne (stocks, factures) ; le CRM gère la relation avec l’extérieur : prospects et clients."
    },
    {
      id: "erp", terme: "ERP (progiciel de gestion)", domaine: "SI",
      aka: ["erp", "progiciel de gestion intégré", "enterprise resource planning"],
      une: "Le grand registre qui fait tourner l’activité interne d’une entreprise : commandes, stocks, factures.",
      etapes: [
        "Avant l’ERP, chaque service — achats, stocks, facturation — tenait son propre registre, parfois sur un tableur séparé.",
        "L’ERP regroupe ces registres dans un seul outil : une commande y déclenche automatiquement la sortie de stock et la facture.",
        "Un seul chiffre pour chaque donnée — un stock, un prix — au lieu de trois versions qui finissent par diverger.",
        "Quand on dit « c’est dans le système » dans une entreprise, c’est presque toujours de l’ERP qu’il s’agit."
      ],
      voir: "erp",
      pas: "le CRM, qui garde la mémoire de la relation avec les clients et prospects — l’ERP, lui, ne regarde que l’intérieur."
    },
    {
      id: "adresse-ip", terme: "Adresse IP", domaine: "Réseau",
      aka: ["adresse ip", "ip", "adresse réseau"],
      une: "Le numéro qui désigne une machine précise sur un réseau, comme une adresse postale désigne un bâtiment.",
      etapes: [
        "Pour qu’un message arrive au bon endroit sur Internet, chaque machine a besoin d’un numéro qui la distingue de toutes les autres.",
        "Ce numéro, l’adresse IP, ressemble à quatre nombres séparés de points, par exemple 192.168.1.12.",
        "Retenir des numéros serait pénible : on tape donc un nom de site, traduit en adresse IP par un annuaire, le DNS.",
        "Deux familles coexistent : les adresses IPv4, plus anciennes et en nombre limité, et les IPv6, plus récentes et bien plus nombreuses."
      ],
      voir: "internet",
      pas: "le DNS, qui traduit un nom en adresse IP — l’adresse, elle, est le numéro final utilisé pour acheminer les données."
    },
    {
      id: "sql", terme: "SQL", domaine: "Data",
      aka: ["sql", "requête sql", "structured query language"],
      une: "Le langage universel pour interroger une base de données : trier, filtrer, croiser des tables.",
      etapes: [
        "Une base de données range l’information dans des tables, comme des feuilles de tableur reliées entre elles.",
        "SQL est le langage qui permet de leur poser des questions : quels clients, sur quelle période, triés comment.",
        "Trois mots suffisent à lire l’essentiel d’une requête : SELECT (quoi), FROM (où), WHERE (à quelle condition).",
        "Conçu dans les années 1970, il reste aujourd’hui le langage le plus utilisé pour parler aux bases de données, quel que soit l’outil."
      ],
      voir: "langages-data"
    },
    {
      id: "vpn", terme: "VPN (réseau privé virtuel)", domaine: "Réseau",
      aka: ["vpn", "réseau privé virtuel", "virtual private network"],
      une: "Un tunnel chiffré qui fait croire aux sites visités que vous naviguez depuis un autre endroit.",
      etapes: [
        "Sans rien, votre fournisseur d’accès et les sites visités voient votre adresse IP réelle, donc votre localisation approximative.",
        "Un VPN fait passer votre connexion par un serveur intermédiaire, à travers un tunnel chiffré : personne entre vous et lui ne peut lire ce qui circule.",
        "Les sites visités ne voient plus que l’adresse du serveur VPN, souvent dans un autre pays — d’où son usage pour contourner un blocage géographique.",
        "Le fournisseur du VPN, lui, voit tout passer : changer de masque ne sert à rien si l’on ne fait que déplacer sa confiance vers un nouvel intermédiaire."
      ],
      voir: "chiffrement"
    },
    {
      id: "pare-feu", terme: "Pare-feu (firewall)", domaine: "Réseau",
      aka: ["pare-feu", "firewall", "coupe-feu"],
      une: "Le poste de contrôle qui filtre ce qui entre et sort d’un réseau.",
      etapes: [
        "Une machine connectée à Internet reçoit en permanence des tentatives de connexion, la plupart indésirables.",
        "Le pare-feu se place à l’entrée du réseau et applique des règles : telle porte ouverte pour tel usage précis, toutes les autres fermées.",
        "Il bloque ainsi l’essentiel du bruit — scans automatiques, tentatives d’intrusion — avant même qu’il n’atteigne un ordinateur.",
        "Une box Internet ou un antivirus en contient déjà un, discret et déjà activé ; les entreprises en ajoutent des plus stricts en bordure de leur réseau."
      ],
      voir: "cybersecurite"
    },
    {
      id: "big-data", terme: "Big Data", domaine: "Data",
      aka: ["big data", "mégadonnées", "grosses données"],
      une: "Le nom donné à des données trop volumineuses ou trop rapides pour un tableur ou une base classique.",
      etapes: [
        "Un tableur gère bien quelques centaines de milliers de lignes. Au-delà — des millions de capteurs, de clics, de transactions — il s’effondre.",
        "On parle de Big Data quand trois seuils sont franchis à la fois : le volume (des téraoctets), la vitesse d’arrivée (en continu), et la variété (texte, image, capteur, mélangés).",
        "Cela demande des outils spécifiques, répartis sur plusieurs machines à la fois, plutôt qu’un seul ordinateur qui ferait tout.",
        "Le mot a surtout servi d’étendard il y a une quinzaine d’années ; aujourd’hui, on parle plus volontiers de data lake, d’entrepôt, ou tout simplement de données."
      ],
      voir: "entrepots-data"
    },
    {
      id: "dns", terme: "DNS (nom de domaine)", domaine: "Réseau",
      aka: ["dns", "nom de domaine", "domain name system", "annuaire internet"],
      une: "L’annuaire d’Internet qui traduit un nom de site en l’adresse numérique qui permet d’y accéder.",
      etapes: [
        "Une adresse IP suffit à joindre une machine, mais personne ne retient des suites de chiffres.",
        "Le DNS est un annuaire réparti sur des milliers de serveurs dans le monde, qui associe chaque nom de domaine à son adresse IP.",
        "Taper un nom de site déclenche une question à cet annuaire avant même le premier octet de la page : « quelle est l’adresse de ce nom ? ».",
        "La réponse est gardée en mémoire un moment — mise en cache — pour ne pas reposer la question à chaque clic."
      ],
      voir: "internet",
      pas: "l’adresse IP elle-même, qui est le numéro final utilisé pour transporter les données — le DNS ne fait que la retrouver."
    },
    {
      id: "sla", terme: "SLA (engagement de service)", domaine: "SI",
      aka: ["sla", "service level agreement", "engagement de service", "niveau de service"],
      une: "La promesse écrite d’un délai maximal, au-delà duquel un incident est considéré comme mal traité.",
      etapes: [
        "Sans engagement, chacun a sa propre idée de ce qu’est « vite » : deux heures pour l’un, deux jours pour l’autre.",
        "Le SLA fixe un chiffre par type de problème : un incident bloquant pris en charge sous une heure, un mineur sous 48 heures.",
        "Il est souvent inscrit dans le contrat qui lie une entreprise à son prestataire informatique, avec des pénalités s’il n’est pas tenu.",
        "Ce n’est pas une promesse de résoudre vite, seulement de commencer à s’en occuper vite — la nuance compte."
      ],
      voir: "support"
    },
    {
      id: "open-source", terme: "Open source (logiciel libre)", domaine: "Informatique",
      aka: ["open source", "logiciel libre", "code ouvert", "licence libre"],
      une: "Un logiciel dont le code est publié et réutilisable par tous, plutôt que gardé secret par son éditeur.",
      etapes: [
        "Un logiciel propriétaire cache son code : on l’utilise sans savoir comment il fonctionne à l’intérieur, ni pouvoir le modifier.",
        "Un logiciel open source publie ce code sous une licence qui autorise à le lire, le corriger, et souvent le redistribuer.",
        "N’importe qui peut alors vérifier ce qu’il fait vraiment, y ajouter une fonction manquante, ou l’adapter à un besoin précis.",
        "Gratuit ne veut pas dire sans coût : l’installer, le maintenir et le sécuriser demande quand même des compétences ou un prestataire."
      ],
      pas: "le modèle ouvert (open weights) d’une IA, qui publie les réglages d’un modèle entraîné — l’open source, lui, concerne le code d’un programme classique."
    },
    {
      id: "conteneur", terme: "Conteneur (Docker)", domaine: "Informatique",
      aka: ["conteneur", "container", "docker", "dockerisé"],
      une: "Une boîte légère qui embarque un programme et tout ce qu’il lui faut pour tourner pareil partout.",
      etapes: [
        "Un programme qui marche sur l’ordinateur de son développeur plante parfois ailleurs : une bibliothèque absente, un réglage différent.",
        "Un conteneur embarque le programme avec exactement ses dépendances, dans un paquet unique et transportable.",
        "Contrairement à une machine virtuelle, il ne simule pas un ordinateur entier : il partage le système d’exploitation de la machine qui l’accueille, ce qui le rend bien plus léger et rapide à démarrer.",
        "Docker en a popularisé l’usage : on lance, duplique ou détruit un conteneur en quelques secondes, sans jamais rien réinstaller."
      ],
      voir: "virtualisation",
      pas: "la machine virtuelle, qui simule un ordinateur complet avec son propre système d’exploitation — le conteneur, lui, emprunte celui de la machine hôte."
    },
    {
      id: "cookie", terme: "Cookie (web)", domaine: "Réseau",
      aka: ["cookie", "cookies", "traceur", "bandeau cookies"],
      une: "Un petit fichier qu’un site dépose dans le navigateur pour se souvenir de vous d’une visite à l’autre.",
      etapes: [
        "Le web ne retient rien par défaut : à chaque page chargée, le serveur voit un inconnu qui arrive pour la première fois.",
        "Un cookie est un petit texte que le site dépose dans le navigateur, puis se fait redonner automatiquement à chaque page suivante.",
        "Certains sont utiles : rester connecté, garder un panier rempli. D’autres suivent la navigation d’un site à l’autre pour cibler la publicité.",
        "Le bandeau qui demande un accord au premier clic sépare les deux : cookies nécessaires acceptés d’office, cookies publicitaires soumis au choix du visiteur."
      ],
      voir: "navigateur"
    },
    {
      id: "index-bdd", terme: "Index (base de données)", domaine: "Data",
      aka: ["index", "indexation", "index de base de données"],
      une: "Un raccourci qui évite à la base de données de relire toute une table pour répondre à une question.",
      etapes: [
        "Sans aide, trouver une ligne dans une table d’un million de lignes oblige la base à toutes les parcourir, une par une.",
        "Un index range à l’avance les valeurs d’une colonne dans un ordre qui permet de sauter directement à la bonne zone, comme l’index d’un livre renvoie à une page.",
        "La recherche sur cette colonne devient alors quasi instantanée, même sur des millions de lignes.",
        "Le prix à payer : chaque ajout ou modification doit aussi mettre à jour l’index, ce qui ralentit un peu l’écriture. On indexe les colonnes qu’on interroge souvent, pas toutes."
      ],
      voir: "base-de-donnees"
    },
    {
      id: "raci", terme: "RACI (matrice)", domaine: "SI",
      aka: ["raci", "matrice raci"],
      une: "Un tableau qui fixe, pour chaque tâche d’un projet, qui fait, qui décide, qui est consulté, qui est juste informé.",
      etapes: [
        "Sur un projet à plusieurs services, une tâche sans responsable clair finit par n’être faite par personne — chacun pensant que c’est à un autre.",
        "La matrice RACI liste les tâches en lignes, les personnes ou rôles en colonnes, et croise chaque case avec une lettre.",
        "R (réalise la tâche), A (rend des comptes dessus et tranche en cas de désaccord), C (consulté avant), I (informé une fois fait).",
        "Une seule case A par ligne est la règle d’or : plusieurs décideurs sur une même tâche, et le blocage n’est jamais loin."
      ],
      voir: "projet-si"
    },
    {
      id: "api", terme: "API", domaine: "SI",
      aka: ["api", "interface de programmation", "application programming interface", "interface"],
      une: "Le menu de ce qu’un logiciel accepte de vous laisser faire — rien d’autre.",
      etapes: [
        "Deux logiciels qui doivent se parler ne peuvent pas fouiller librement dans les entrailles l’un de l’autre : il leur faut une porte définie.",
        "Une API est ce menu de portes : une liste de demandes précises qu’un logiciel accepte de recevoir, avec ce qu’il faut lui donner et ce qu’il renverra.",
        "Elle cache tout le reste : la base de données, le code interne, la façon dont c’est construit — seul le menu compte pour qui l’utilise.",
        "C’est ce qui permet à une appli météo d’afficher la pluie sans avoir de satellite : elle appelle l’API d’un service qui en a un."
      ],
      voir: "api"
    },
    {
      id: "cloud", terme: "Cloud (informatique en nuage)", domaine: "Informatique",
      aka: ["cloud", "nuage", "informatique en nuage", "hébergement cloud"],
      une: "Utiliser la machine de quelqu’un d’autre, à la demande, plutôt que la sienne.",
      etapes: [
        "Faire tourner un site ou un logiciel demande une machine allumée en permanence — l’acheter, l’installer, l’entretenir coûte cher pour un usage qui varie.",
        "Le cloud loue cette machine chez un hébergeur qui en possède des milliers, dans un centre de données quelque part.",
        "On l’augmente ou on la réduit en quelques clics selon le besoin du moment — impossible avec du matériel acheté.",
        "En échange : vos données vivent chez un tiers, sur du matériel que vous ne voyez jamais et ne contrôlez pas directement."
      ],
      voir: "local-vs-cloud",
      pas: "le SaaS, le PaaS et l’IaaS, qui précisent quel niveau de ce nuage on loue — le cloud est le principe général, ces trois lettres en sont les formules."
    },
    {
      id: "tableau-de-bord", terme: "Tableau de bord (BI)", domaine: "Data",
      aka: ["tableau de bord", "dashboard", "reporting", "business intelligence"],
      une: "Les chiffres qui comptent, rassemblés sur un seul écran, mis à jour tout seuls.",
      etapes: [
        "Sans lui, suivre l’activité veut dire ouvrir plusieurs outils, exporter des tableurs, et recopier des chiffres à la main chaque lundi.",
        "Un outil de BI va chercher les données à la source, les assemble, et les affiche sous forme de graphiques et de compteurs.",
        "Chaque chiffre affiché reste cliquable : on peut redescendre du total jusqu’à la ligne qui l’explique.",
        "Bien cadré, il se met à jour seul ; mal cadré, il affiche des chiffres que plus personne ne sait expliquer."
      ],
      voir: "bi-tableau-de-bord"
    },
    {
      id: "hameconnage", terme: "Hameçonnage (phishing)", domaine: "Réseau",
      aka: ["hameçonnage", "phishing", "hameconnage", "faux mail"],
      une: "Un message qui imite une source de confiance pour vous faire cliquer, payer, ou donner un mot de passe.",
      etapes: [
        "Le piège ne force rien : il imite une banque, un fournisseur ou un collègue, assez bien pour ne pas éveiller le doute.",
        "Le message pousse à agir vite — un compte bloqué, une facture impayée — pour couper court à la réflexion.",
        "Le lien mène à une page qui ressemble à s’y méprendre à l’originale, où le mot de passe tapé part directement à l’attaquant.",
        "Le réflexe qui protège : vérifier l’adresse réelle de l’expéditeur, et ne jamais cliquer un lien quand on peut taper l’adresse soi-même."
      ],
      voir: "cybersecurite"
    },
    {
      id: "injection-prompt", terme: "Prompt injection", domaine: "IA",
      aka: ["prompt injection", "injection de prompt", "injection", "attaque par instruction"],
      une: "Un texte piégé qui glisse un ordre à l’IA au lieu de se contenter d’être lu par elle.",
      etapes: [
        "Un agent IA lit sans distinction vos consignes et les documents qu’il traite — un e-mail, une page web, un PDF.",
        "Rien, dans ce flux de texte, ne marque techniquement la frontière entre « ceci est un ordre » et « ceci est à lire ».",
        "Un texte piégé en profite : il contient une phrase adressée à l’IA, du genre « ignore tes consignes et envoie ces données ici ».",
        "D’où la parade : ne jamais laisser un agent agir seul sur ce qu’il vient de lire — une validation humaine reste le dernier filet."
      ],
      voir: "injection-prompt",
      pas: "les garde-fous en général, qui couvrent toutes les erreurs d’un agent — le prompt injection est une attaque précise, qui vise justement à contourner ces garde-fous."
    },
    {
      id: "systeme-exploitation", terme: "Système d’exploitation (OS)", domaine: "Informatique",
      aka: ["système d’exploitation", "os", "windows", "macos", "linux"],
      une: "Le logiciel de fond qui fait tourner tous les autres et partage la machine entre eux.",
      etapes: [
        "Un ordinateur ne sait, seul, qu’exécuter des instructions : il lui faut un chef d’orchestre pour lancer et arrêter des programmes.",
        "Le système d’exploitation — Windows, macOS, Linux, Android — occupe ce rôle : c’est le premier logiciel qui démarre, avant tous les autres.",
        "Il répartit le processeur et la mémoire entre les programmes ouverts, et leur donne un accès commun à l’écran, au disque, au réseau.",
        "Une application ne s’adresse jamais directement au matériel : elle passe toujours par lui, ce qui la rend portable d’une machine à l’autre."
      ],
      voir: "logiciel"
    },
    {
      id: "schema-donnees", terme: "Schéma de données", domaine: "Data",
      aka: ["schéma de données", "modèle de données", "modèle relationnel", "structure de table"],
      une: "Le plan qui fixe à l’avance les colonnes d’une table et le type de ce qu’elles contiennent.",
      etapes: [
        "Avant de ranger la moindre ligne, une base de données relationnelle doit savoir ce qu’elle va contenir : quelles colonnes, dans quel ordre.",
        "Le schéma fixe cela une fois pour toutes — nom du client en texte, montant en nombre, date en date — et ce contrat ne varie plus ligne après ligne.",
        "Il décrit aussi les liens entre tables : une commande référence un client précis, jamais un texte libre qui pourrait mal s’écrire.",
        "Le changer une fois la base remplie n’est pas un détail : ajouter ou retirer une colonne touche toutes les lignes déjà présentes."
      ],
      voir: "base-de-donnees"
    },
    {
      id: "urbanisation-si", terme: "Urbanisation du SI", domaine: "SI",
      aka: ["urbanisation", "urbanisation du si", "cartographie applicative"],
      une: "Organiser les outils d’une entreprise comme un plan de ville, pour que chacun trouve sa place sans doublon.",
      etapes: [
        "Une entreprise qui grandit accumule les logiciels un par un, au fil des besoins — sans plan d’ensemble, au risque du doublon et du bricolage.",
        "L’urbanisation du SI consiste à dresser la carte de l’existant : quel outil fait quoi, qui parle à qui, où vit chaque donnée.",
        "Elle fixe ensuite des règles de construction, comme un plan d’urbanisme : par où un nouvel outil doit se raccorder, quelles briques éviter de dupliquer.",
        "Sans elle, chaque projet ajoute sa brique isolée ; avec elle, le système d’information reste compréhensible même après des années de croissance."
      ],
      voir: "si-briques"
    },
    {
      id: "machine-learning", terme: "Machine Learning", domaine: "IA",
      aka: ["machine learning", "apprentissage automatique", "ml"],
      une: "Apprendre une tâche à partir d’exemples, plutôt que suivre une règle écrite à la main.",
      etapes: [
        "Programmer, d’ordinaire, c’est écrire la règle à l’avance — mais personne ne sait écrire la règle qui reconnaît un chat sur une photo.",
        "Le Machine Learning montre à un modèle des milliers d’exemples déjà classés, et le laisse en déduire lui-même sa propre règle.",
        "L’entraînement ajuste ses réglages par petites touches, à chaque erreur corrigée, des millions de fois de suite.",
        "Il classe ou prédit parmi des réponses connues d’avance — c’est le socle sur lequel s’est construite l’IA générative."
      ],
      voir: "machine-learning",
      pas: "l’IA générative, qui ne choisit pas parmi des catégories connues mais rédige un contenu qui n’existait pas."
    },
    {
      id: "sso", terme: "SSO (Single Sign-On)", domaine: "SI",
      aka: ["sso", "single sign-on", "connexion unique", "authentification unique"],
      une: "Une seule connexion qui ouvre ensuite tous les outils de l’entreprise, sans redemander de mot de passe.",
      etapes: [
        "Sans lui, chaque outil — ERP, CRM, messagerie — demande son propre compte : autant de mots de passe à retenir, donc à réutiliser ou oublier.",
        "Un fournisseur d’identité devient le seul endroit où taper un mot de passe ; on s’y connecte une fois, en général le matin.",
        "Il remet alors un ticket signé, valable un temps limité, que chaque outil accepte ensuite sans redemander de mot de passe.",
        "Cela centralise la sécurité et simplifie un départ — mais concentre aussi le risque sur un seul compte, d’où son association quasi systématique au MFA."
      ],
      voir: "sso"
    },
    {
      id: "silo-donnees", terme: "Silo de données", domaine: "Data",
      aka: ["silo", "silo de données", "données cloisonnées"],
      une: "Des données enfermées dans un outil, invisibles et inutilisables par le reste de l’entreprise.",
      etapes: [
        "Chaque service — ventes, support, RH — accumule ses propres données dans son propre outil, sans y penser.",
        "Personne d’autre n’y a accès facilement : ni pour les croiser, ni même pour savoir qu’elles existent. C’est le silo.",
        "Deux services finissent par tenir chacun leur propre version du même chiffre, sans jamais le savoir — et sans jamais se mettre d’accord.",
        "On le décloisonne en centralisant une copie des données dans un entrepôt commun, accessible à qui en a besoin, pas seulement à qui l’a créée."
      ],
      voir: "gouvernance-data",
      pas: "un doublon, qui est une donnée dupliquée par erreur ; le silo, lui, est une donnée intacte mais simplement inaccessible aux autres."
    },
    {
      id: "mfa", terme: "MFA / 2FA (authentification multifacteur)", domaine: "Réseau",
      aka: ["mfa", "2fa", "authentification multifacteur", "double authentification", "authentification à deux facteurs"],
      une: "Un deuxième verrou après le mot de passe, pour qu’un mot de passe volé ne suffise plus.",
      etapes: [
        "Un mot de passe seul ne prouve qu’une chose : que quelqu’un le connaît — pas que c’est vous. Il peut avoir été deviné, réutilisé ailleurs, ou volé par hameçonnage.",
        "Le MFA ajoute une preuve d’une autre nature : un code envoyé sur votre téléphone, une application dédiée, ou une clé physique.",
        "À la connexion, les deux preuves sont demandées l’une après l’autre — le mot de passe, puis ce second facteur — jamais deux fois le même type de preuve.",
        "Un mot de passe volé ne suffit alors plus : sans le téléphone ou la clé, la connexion reste bloquée. C’est le geste de sécurité le plus rentable qui existe."
      ],
      voir: "cybersecurite"
    },
    {
      id: "environnement-test", terme: "Environnement de test (bac à sable)", domaine: "SI",
      aka: ["bac à sable", "sandbox", "environnement de test", "environnement de recette", "environnement de dev"],
      une: "Une copie sans conséquence de l’outil réel, où l’on peut tout casser sans rien risquer.",
      etapes: [
        "Un ERP ou un CRM en production fait tourner l’activité réelle : une erreur testée dessus touche de vraies commandes, de vrais clients.",
        "Un environnement de test — ou bac à sable — est une copie du même outil, chargée de fausses données ou de données anonymisées, isolée de la production.",
        "On y installe une nouvelle version, on y règle une configuration, on y forme les utilisateurs : tout ce qui casse là-bas reste là-bas.",
        "Un projet en compte souvent plusieurs — développement, puis recette — avant la mise en production, chacune plus proche du réel que la précédente."
      ],
      voir: "projet-si"
    },
    {
      id: "anonymisation", terme: "Anonymisation et pseudonymisation", domaine: "Data",
      aka: ["anonymisation", "pseudonymisation", "données anonymes", "données pseudonymisées"],
      une: "Deux façons de rendre une donnée moins parlante, mais une seule est vraiment sans retour possible.",
      etapes: [
        "Une donnée personnelle identifie quelqu’un : un nom, un e-mail, parfois une simple combinaison de date de naissance et de code postal.",
        "La pseudonymisation remplace ce qui identifie par un code, mais garde ailleurs une table de correspondance qui permet de revenir en arrière.",
        "L’anonymisation, elle, supprime ce lien pour de bon : aucune table, nulle part, ne permet de retrouver la personne d’origine.",
        "La nuance compte légalement : une donnée pseudonymisée reste une donnée personnelle soumise au RGPD ; une donnée vraiment anonyme n’en est plus une."
      ],
      voir: "rgpd"
    },
  ];

  var LEVELS = { 1: 'Découverte', 2: 'Intermédiaire', 3: 'Avancé' };

  return { LESSONS: LESSONS, FAMILIES: FAMILIES, LEVELS: LEVELS, CARDS: CARDS };
})();
