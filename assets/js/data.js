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

    /* ---------- Leçons prévues (affichées en grisé) ---------- */

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
            { id: 'ou-ca-tourne', title: 'Où tournent les programmes', lessons: ['local-vs-cloud', 'cloud-saas'] },
            { id: 'fichiers-formats', title: 'Fichiers et formats', lessons: ['fichiers'] }
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
            { id: 'bases-reseau', title: 'Les bases', lessons: ['internet', 'wifi-box'] },
            { id: 'traces', title: 'Les traces qu\u2019on laisse', lessons: ['navigateur'] }
          ]
        },
        {
          id: 'securite', title: 'Se protéger',
          subcategories: [
            { id: 'gestes', title: 'Les gestes du quotidien', lessons: ['cybersecurite'] },
            { id: 'protection', title: 'Ce qui protège les données', lessons: ['chiffrement', 'sauvegarde'] }
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
            { id: 'connaissance', title: 'Lui donner de la connaissance', lessons: ['rag'] }
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
  ];

  var LEVELS = { 1: 'Découverte', 2: 'Intermédiaire', 3: 'Avancé' };

  return { LESSONS: LESSONS, FAMILIES: FAMILIES, LEVELS: LEVELS, CARDS: CARDS };
})();
