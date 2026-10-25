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
    'code-source': {
      title: 'Du code source au programme qui tourne',
      summary: 'Le code est du texte écrit par des humains : un traducteur le rend exécutable, d’un coup (compilé) ou ligne à ligne (interprété).',
      path: 'lecons/code-source.html',
      duration: '5 min', level: 1,
      keywords: ['code source', 'compilateur', 'interpréteur', 'langage de programmation', 'programme', 'développeur', 'compilé', 'open source']
    },
    'versionnage': {
      title: 'Le versionnage, l’historique de chaque modification',
      summary: 'Comment on garde la trace de chaque changement, pour revenir en arrière et travailler à plusieurs sans s’écraser.',
      path: 'lecons/versionnage.html',
      duration: '6 min', level: 2,
      keywords: ['versionnage', 'git', 'version', 'commit', 'branche', 'fusion', 'historique', 'code', 'collaboration']
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
    'load-balancer': {
      title: 'Le répartiteur de charge, un site qui ne tombe jamais tout seul',
      summary: 'Comment plusieurs serveurs se relaient devant un pic de trafic, sans que le visiteur ne s’en aperçoive.',
      path: 'lecons/load-balancer.html',
      duration: '6 min', level: 2,
      keywords: ['load balancer', 'répartiteur de charge', 'serveur', 'scalabilité', 'montée en charge', 'haute disponibilité', 'cloud']
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
    'surapprentissage': {
      title: 'Le surapprentissage, apprendre par cœur au lieu de comprendre',
      summary: 'Pourquoi une IA parfaite sur ses exemples peut se tromper sur un cas nouveau — et comment on le détecte.',
      path: 'lecons/surapprentissage.html',
      duration: '5 min', level: 1,
      keywords: ['surapprentissage', 'overfitting', 'apprendre par cœur', 'généralisation', 'données de test', 'machine learning', 'modèle']
    },
    'recommandation': {
      title: 'Comment une IA vous recommande quelque chose',
      summary: 'Netflix, Amazon, Spotify : comment un algorithme devine ce qui vous plaira sans le demander.',
      path: 'lecons/recommandation.html',
      duration: '6 min', level: 1,
      keywords: ['recommandation', 'algorithme de recommandation', 'filtrage collaboratif', 'machine learning', 'personnalisation', 'netflix']
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
    'entrainement-inference': {
      title: 'Entraîner, puis utiliser : les deux vies d\u2019une IA',
      summary: 'Une IA se fabrique une fois, puis sert des millions de fois sans rien apprendre de vous.',
      path: 'lecons/entrainement-inference.html',
      duration: '5 min', level: 1,
      keywords: ['entraînement', 'inférence', 'modèle', 'apprentissage', 'ia', 'date de connaissance', 'figé']
    },
    'mfa': {
      title: 'La double authentification, pourquoi un mot de passe seul ne suffit plus',
      summary: 'Un mot de passe peut être volé ; un second justificatif beaucoup plus difficilement.',
      path: 'lecons/mfa.html',
      duration: '5 min', level: 1,
      keywords: ['mfa', '2fa', 'double authentification', 'code', 'mot de passe', 'sécurité', 'connexion']
    },
    'etl': {
      title: 'ETL, le convoyeur qui prépare les données avant l\u2019analyse',
      summary: 'Extraire, transformer, charger : comment des données dispersées arrivent propres dans un entrepôt.',
      path: 'lecons/etl.html',
      duration: '6 min', level: 2,
      keywords: ['etl', 'elt', 'extraire', 'transformer', 'charger', 'nettoyage', 'pipeline', 'entrepôt']
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
    'url': {
      title: 'L’adresse web, ce que dit vraiment une URL',
      summary: 'Protocole, nom du site, chemin : lire une adresse web comme une adresse postale, et repérer un faux lien.',
      path: 'lecons/url.html',
      duration: '5 min', level: 1,
      keywords: ['url', 'adresse web', 'lien', 'nom de domaine', 'https', 'faux lien', 'hameçonnage', 'navigateur']
    },
    'binaire': {
      title: 'Le binaire, comment un ordinateur écrit tout avec des 0 et des 1',
      summary: 'Un interrupteur n’a que deux positions : avec des 0 et des 1, on écrit nombres, lettres, images et sons.',
      path: 'lecons/binaire.html',
      duration: '5 min', level: 1,
      keywords: ['binaire', 'bit', 'octet', '0 et 1', 'codage', 'nombre', 'lettre', 'ordinateur']
    },
    'reseau-neurones': {
      title: 'Le réseau de neurones, des petits votes en cascade',
      summary: 'Des unités très simples pèsent des indices et votent ; empilées en couches, elles apprennent en réglant leurs poids.',
      path: 'lecons/reseau-neurones.html',
      duration: '6 min', level: 1,
      keywords: ['réseau de neurones', 'neurone', 'couches', 'poids', 'deep learning', 'apprentissage', 'ia']
    },
    'graphique-trompeur': {
      title: 'Un graphique peut mentir sans fausser un seul chiffre',
      summary: 'Axe coupé, fenêtre de temps choisie : comment un graphique exact trompe, et les deux réflexes pour s’en protéger.',
      path: 'lecons/graphique-trompeur.html',
      duration: '5 min', level: 1,
      keywords: ['graphique', 'axe', 'visualisation', 'données', 'tableau de bord', 'trompeur', 'statistiques']
    },
    'paquets': {
      title: 'Les paquets, pourquoi tout est découpé avant de voyager',
      summary: 'Un fichier est coupé en morceaux numérotés qui prennent des routes différentes, puis sont remis dans l’ordre à l’arrivée.',
      path: 'lecons/paquets.html',
      duration: '5 min', level: 1,
      keywords: ['paquet', 'paquets', 'routeur', 'protocole', 'internet', 'réseau', 'découpage', 'débit']
    },
    'redondance': {
      title: 'La redondance, pourquoi un service ne s’arrête (presque) jamais',
      summary: 'Deux serveurs au lieu d’un et une bascule automatique : une panne ne coupe plus le service.',
      path: 'lecons/redondance.html',
      duration: '5 min', level: 1,
      keywords: ['redondance', 'panne', 'haute disponibilité', 'secours', 'bascule', 'serveur', 'disponibilité']
    },
    'index-bdd': {
      title: 'L’index, pourquoi une recherche est rapide',
      summary: 'Un répertoire trié évite à la base de relire toute la table : on saute directement à la bonne ligne.',
      path: 'lecons/index-bdd.html',
      duration: '5 min', level: 2,
      keywords: ['index', 'base de données', 'recherche', 'requête', 'performance', 'table', 'tri']
    },
    'transaction': {
      title: 'La transaction, tout ou rien',
      summary: 'Un virement ne se perd jamais à mi-chemin : les gestes forment un bloc, validé en entier ou annulé.',
      path: 'lecons/transaction.html',
      duration: '5 min', level: 2,
      keywords: ['transaction', 'base de données', 'virement', 'annuler', 'valider', 'acid', 'cohérence']
    },
    'jointure': {
      title: 'La jointure, relier deux tableaux par une colonne commune',
      summary: 'Les clients d’un côté, les commandes de l’autre : un numéro commun suffit à les rapprocher sans rien recopier.',
      path: 'lecons/jointure.html',
      duration: '5 min', level: 1,
      keywords: ['jointure', 'join', 'table', 'base de données', 'clé étrangère', 'colonne commune', 'sql']
    },
    'cache': {
      title: 'Le cache, garder sous la main ce qu’on réutilise',
      summary: 'Une petite réserve rapide garde une copie de ce qu’on redemande : trouvé, c’est immédiat ; manqué, on va à la source.',
      path: 'lecons/cache.html',
      duration: '5 min', level: 1,
      keywords: ['cache', 'copie', 'rapidité', 'mémoire', 'performance', 'navigateur', 'vider le cache']
    },
    'front-back': {
      title: 'Front-end, back-end : la salle et la cuisine d’un site',
      summary: 'Ce que vous voyez d’un site n’est que la vitrine : le vrai travail se fait sur un serveur, hors de votre vue.',
      path: 'lecons/front-back.html',
      duration: '5 min', level: 1,
      keywords: ['front-end', 'back-end', 'frontend', 'backend', 'site web', 'serveur', 'application', 'interface', 'développeur']
    },
    'tableur-vs-bdd': {
      title: 'Tableur ou base de données : quand le tableau ne suffit plus',
      summary: 'Un fichier partagé produit des copies qui divergent ; une base centrale garde une seule version et règle les accès simultanés.',
      path: 'lecons/tableur-vs-bdd.html',
      duration: '5 min', level: 1,
      keywords: ['tableur', 'excel', 'base de données', 'copies', 'versions', 'partage', 'accès simultanés']
    },
    'supervision': {
      title: 'La supervision, un tableau de bord qui prévient avant la panne',
      summary: 'Des sondes mesurent en continu, un seuil déclenche une alerte : l’équipe sait avant les utilisateurs.',
      path: 'lecons/supervision.html',
      duration: '5 min', level: 1,
      keywords: ['supervision', 'monitoring', 'alerte', 'seuil', 'sonde', 'panne', 'disponibilité']
    },
    'pare-feu': {
      title: 'Le pare-feu, le poste de contrôle du réseau',
      summary: 'Un gardien applique des règles à l’entrée du réseau : ce qui est prévu passe, le reste est refusé.',
      path: 'lecons/pare-feu.html',
      duration: '5 min', level: 1,
      keywords: ['pare-feu', 'firewall', 'port', 'filtrage', 'réseau', 'sécurité', 'intrusion']
    },
    'dns': {
      title: 'Le DNS, l’annuaire d’Internet',
      summary: 'Vous tapez un nom, les machines ont besoin d’un numéro : le DNS fait la traduction.',
      path: 'lecons/dns.html',
      duration: '5 min', level: 1,
      keywords: ['dns', 'nom de domaine', 'adresse ip', 'annuaire', 'cache', 'résolution', 'internet']
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
    'dedoublonnage': {
      title: 'Le dédoublonnage : reconnaître qu’un client n’est pas deux',
      summary: 'Deux fiches, une même personne : comment un système les rapproche sans clé identique, sans perdre leur historique.',
      path: 'lecons/dedoublonnage.html',
      duration: '6 min', level: 2,
      keywords: ['dédoublonnage', 'doublon', 'déduplication', 'golden record', 'fiche client', 'crm', 'qualité de données', 'rapprochement']
    },

    'fichiers': {
      title: 'Fichiers, formats et dossiers',
      summary: 'Pourquoi un fichier ne s\u2019ouvre pas, et pourquoi le PDF existe.',
      path: 'lecons/fichiers.html', duration: '6 min', level: 1,
      keywords: ['fichier', 'format', 'extension', 'dossier', 'pdf', 'jpg', 'csv', 'zip', 'convertir']
    },
    'compression': {
      title: 'Compression : pourquoi un fichier zipp\u00e9 prend moins de place',
      summary: 'Le m\u00eame contenu, en moins d\u2019octets \u2014 et pourquoi zipper une vid\u00e9o ne sert presque \u00e0 rien.',
      path: 'lecons/compression.html', duration: '6 min', level: 1,
      keywords: ['compression', 'zip', 'jpg', 'mp3', 'sans perte', 'avec perte', 'algorithme', 'fichier', 'd\u00e9compresser']
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
    'no-code': {
      title: 'No-code, low-code : construire sans développeur',
      summary: 'Assembler une application métier avec des briques visuelles — et savoir où ça s’arrête.',
      path: 'lecons/no-code.html',
      duration: '6 min', level: 2,
      keywords: ['no-code', 'low-code', 'sans code', 'plateforme', 'automatisation', 'application métier', 'glisser-déposer', 'lock-in']
    },
    'conduite-changement': {
      title: 'La conduite du changement, ou pourquoi un bon outil ne suffit pas',
      summary: 'Un CRM ou un ERP livré sans accroc, techniquement — et pourtant boudé par ceux qui devaient s’en servir.',
      path: 'lecons/conduite-changement.html',
      duration: '6 min', level: 2,
      keywords: ['conduite du changement', 'adoption', 'résistance au changement', 'formation', 'accompagnement', 'projet si', 'crm', 'erp']
    },
    'mots-de-passe': {
      title: 'Mots de passe : pourquoi un site sérieux ne connaît pas le vôtre',
      summary: 'Empreinte, hachage et sel : comment un site vérifie votre mot de passe sans jamais le garder.',
      path: 'lecons/mots-de-passe.html',
      duration: '5 min', level: 1,
      keywords: ['mot de passe', 'hachage', 'empreinte', 'sel', 'connexion', 'identifiant', 'sécurité', 'gestionnaire de mots de passe']
    },
    'https-cadenas': {
      title: 'Le cadenas du navigateur, ce que HTTPS protège vraiment',
      summary: 'Un échange brouillé en route, un certificat qui prouve qui est le site — et ce que le cadenas ne garantit pas.',
      path: 'lecons/https-cadenas.html',
      duration: '5 min', level: 1,
      keywords: ['https', 'cadenas', 'certificat', 'tls', 'ssl', 'site sécurisé', 'chiffrement', 'navigateur', 'faux site']
    },
    'conteneurs': {
      title: 'Les conteneurs, une boîte qui marche partout',
      summary: 'Pourquoi « chez moi, ça marche » ne suffit pas, et comment un conteneur emballe un logiciel avec tout ce qu’il lui faut.',
      path: 'lecons/conteneurs.html',
      duration: '6 min', level: 2,
      keywords: ['conteneur', 'docker', 'environnement', 'déploiement', 'orchestration', 'serveur', 'virtualisation', 'application']
    },
    'recette': {
      title: 'La recette, essayer avant d’accepter',
      summary: 'Comment on vérifie qu’un nouvel outil répond au besoin avant de le valider : scénarios, anomalies, feu vert.',
      path: 'lecons/recette.html',
      duration: '5 min', level: 2,
      keywords: ['recette', 'test', 'scénario', 'anomalie', 'validation', 'réserves', 'projet', 'cahier des charges', 'mise en production']
    },
    'adresse-ip': {
      title: 'L’adresse IP, l’adresse postale d’une machine',
      summary: 'Comment un message trouve sa destination : l’adresse IP, la box qui en partage une, et les ports.',
      path: 'lecons/adresse-ip.html',
      duration: '5 min', level: 1,
      keywords: ['adresse ip', 'ip', 'port', 'box', 'réseau', 'ipv6', 'adresse privée', 'internet']
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
            { id: 'dans-la-machine', title: 'Dans la machine', lessons: ['ordinateur', 'serveur', 'cache'] },
            { id: 'trop-de-monde', title: 'Quand un site attire trop de monde', lessons: ['load-balancer', 'redondance'] },
            { id: 'ou-ca-tourne', title: 'Où tournent les programmes', lessons: ['local-vs-cloud', 'cloud-saas', 'virtualisation', 'conteneurs'] },
            { id: 'fichiers-formats', title: 'Fichiers et formats', lessons: ['binaire', 'fichiers', 'compression'] }
          ]
        },
        {
          id: 'logiciels', title: 'Le logiciel',
          subcategories: [
            { id: 'programmes', title: 'De quoi est fait un programme', lessons: ['logiciel', 'algorithme', 'code-source', 'front-back'] },
            { id: 'versions', title: 'Garder la trace des changements', lessons: ['versionnage'] }
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
            { id: 'bases-reseau', title: 'Les bases', lessons: ['internet', 'paquets', 'wifi-box', 'adresse-ip', 'dns', 'url'] },
            { id: 'messagerie', title: 'La messagerie', lessons: ['email'] },
            { id: 'traces', title: 'Les traces qu\u2019on laisse', lessons: ['navigateur'] }
          ]
        },
        {
          id: 'securite', title: 'Se protéger',
          subcategories: [
            { id: 'gestes', title: 'Les gestes du quotidien', lessons: ['cybersecurite', 'mots-de-passe', 'mfa'] },
            { id: 'protection', title: 'Ce qui protège les données', lessons: ['pare-feu', 'chiffrement', 'https-cadenas', 'sauvegarde', 'vpn'] },
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
            { id: 'bdd', title: 'Les bases de données', lessons: ['base-de-donnees', 'tableur-vs-bdd', 'jointure', 'index-bdd', 'transaction'] },
            { id: 'entrepots', title: 'Lacs, entrepôts et magasins', lessons: ['entrepots-data'] }
          ]
        },
        {
          id: 'exploiter', title: 'Exploiter les données',
          subcategories: [
            { id: 'langages', title: 'Les langages', lessons: ['langages-data'] },
            { id: 'piloter', title: 'Piloter par les chiffres', lessons: ['bi-tableau-de-bord', 'graphique-trompeur'] },
            { id: 'qualite', title: 'Qualité & cadre légal', lessons: ['gouvernance-data', 'dedoublonnage', 'rgpd'] },
            { id: 'projets-data', title: 'Mener un projet data', lessons: ['migration-donnees', 'etl'] }
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
            { id: 'projets', title: 'Les projets', lessons: ['projet-si', 'recette'] },
            { id: 'support', title: 'Le support', lessons: ['support', 'supervision'] },
            { id: 'construire', title: 'Construire sans développeur', lessons: ['no-code'] },
            { id: 'adoption', title: 'Faire adopter l’outil', lessons: ['conduite-changement'] }
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
            { id: 'apprentissage', title: 'Apprendre par l’exemple', lessons: ['machine-learning', 'surapprentissage', 'reseau-neurones', 'recommandation'] },
            { id: 'modeles', title: 'Les modèles de langage', lessons: ['llm', 'hallucination'] },
            { id: 'machinerie', title: 'La machinerie', lessons: ['gpu', 'entrainement-inference'] }
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
      voir: "entrainement-inference"
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
      ],
      voir: "entrainement-inference"
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
      voir: "etl"
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
      voir: "adresse-ip",
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
      voir: "vpn"
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
      voir: "index-bdd"
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
      voir: "mfa"
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
    {
      id: "protocole", terme: "Protocole (réseau)", domaine: "Réseau",
      aka: ["protocole", "http", "tcp/ip", "norme réseau"],
      une: "La règle du jeu commune qui permet à deux machines de se comprendre, quel que soit leur fabricant.",
      etapes: [
        "Deux ordinateurs différents, deux systèmes différents : rien ne garantit qu’ils se comprennent, sauf s’ils suivent la même règle du jeu.",
        "Un protocole fixe cette règle à l’avance : quel format de message envoyer, dans quel ordre, comment dire « bien reçu ».",
        "HTTP pour une page web, SMTP pour un e-mail, Wifi pour l’air entre la box et le téléphone : chaque usage a le sien, empilés les uns sur les autres.",
        "Tant que les deux bouts parlent le même protocole, peu importe la marque de la machine ou le système derrière : c’est ce qui a rendu Internet possible."
      ],
      voir: "internet"
    },
    {
      id: "nosql", terme: "NoSQL", domaine: "Data",
      aka: ["nosql", "base nosql", "base non relationnelle", "base document"],
      une: "Une famille de bases de données qui range l’information autrement que dans des tableaux figés.",
      etapes: [
        "Une base SQL classique range tout dans des tableaux à colonnes fixes : pratique tant que la donnée est régulière — un client, une commande.",
        "Certaines données ne rentrent pas bien dans ce moule : un document au contenu variable, un réseau de relations, un flux de mesures à haute fréquence.",
        "Le NoSQL regroupe plusieurs familles de bases pensées pour ces cas — document, clé-valeur, graphe — chacune avec sa propre forme de rangement.",
        "Le choix se fait sur la forme de la donnée, pas sur la mode : une base SQL bien pensée reste souvent le bon outil pour des données structurées."
      ],
      voir: "base-de-donnees",
      pas: "le SQL, qui désigne le langage de requête des bases relationnelles ; le NoSQL, lui, désigne des bases qui souvent n’utilisent pas ce langage."
    },
    {
      id: "appel-outils", terme: "Appel d’outils (function calling)", domaine: "IA",
      aka: ["function calling", "appel d’outils", "tool use", "outils"],
      une: "La capacité d’un modèle à demander l’exécution d’une action précise, plutôt que de se contenter d’écrire du texte.",
      etapes: [
        "Un modèle de langage ne sait faire qu’une chose : écrire du texte, un mot après l’autre.",
        "On lui décrit à l’avance une liste d’outils disponibles — envoyer un e-mail, chercher un prix, lire un fichier — chacun avec son nom et ses paramètres.",
        "Face à une demande qui l’exige, il n’exécute rien lui-même : il écrit une demande structurée — « utilise cet outil, avec ces paramètres » — que le programme autour lui exécute à sa place.",
        "Le résultat de cet outil lui est rendu, et il poursuit sa réponse avec cette information neuve. C’est ce mécanisme qui transforme un assistant en agent."
      ],
      voir: "agent"
    },
    {
      id: "bug", terme: "Bug (bogue)", domaine: "Informatique",
      aka: ["bug", "bogue", "plantage", "anomalie"],
      une: "Un comportement du programme qui s’écarte de ce qu’il devait faire — jamais un caprice de la machine.",
      etapes: [
        "Un ordinateur ne fait qu’exécuter des instructions, sans les comprendre : il ne « décide » jamais de mal se comporter.",
        "Un bug est un défaut dans ces instructions elles-mêmes — une condition oubliée, un cas particulier non prévu par la personne qui a écrit le code.",
        "Il peut rester invisible des années si le cas qui le déclenche ne se présente jamais, puis apparaître brutalement le jour où il se produit.",
        "Le corriger, c’est rouvrir le texte du programme et réécrire la ligne fautive — pas redémarrer la machine, même si ça arrange parfois les choses en attendant."
      ],
      voir: "algorithme"
    },
    {
      id: "dette-technique", terme: "Dette technique", domaine: "SI",
      aka: ["dette technique", "technical debt", "code à refaire"],
      une: "Le coût caché des raccourcis pris hier, à rembourser un jour avec les intérêts.",
      etapes: [
        "Sous la pression d’un délai, on choisit parfois la solution rapide plutôt que la solution propre : un correctif au lieu d’une vraie refonte.",
        "Ce choix fonctionne dans l’instant, mais laisse une base plus fragile — plus difficile à comprendre, à modifier, à faire évoluer sans casser autre chose.",
        "Comme un emprunt, elle s’accumule en silence, jusqu’au jour où chaque nouvelle demande, même petite, devient lente et risquée.",
        "La rembourser, c’est réserver du temps pour nettoyer plutôt que d’empiler une fonctionnalité de plus : un choix d’équipe, pas un luxe."
      ],
      voir: "projet-si"
    },
    {
      id: "mvp", terme: "MVP (produit minimum viable)", domaine: "SI",
      aka: ["mvp", "minimum viable product", "produit minimum viable", "version minimale"],
      une: "La plus petite version d’un produit qui permet déjà d’apprendre quelque chose de vrais utilisateurs.",
      etapes: [
        "Construire un outil complet avant de savoir s’il répond à un vrai besoin, c’est risquer des mois de travail sur une hypothèse jamais testée.",
        "Le MVP inverse l’ordre : on livre la version la plus réduite possible, mais qui rend déjà un service réel à un petit groupe d’utilisateurs.",
        "Leur usage réel — ce qu’ils utilisent, ce qu’ils ignorent, ce qu’ils demandent en plus — vaut plus que n’importe quelle réunion de cadrage.",
        "Chaque version suivante s’appuie sur ces retours, pas sur des suppositions : on construit ce qui manque vraiment, pas ce qu’on avait imaginé."
      ],
      voir: "projet-si",
      pas: "un produit bâclé : le MVP doit rester fiable et utilisable, seulement plus étroit dans ce qu’il couvre."
    },
    {
      id: "framework", terme: "Framework (cadre de développement)", domaine: "Informatique",
      aka: ["framework", "cadre de développement", "bibliothèque", "librairie"],
      une: "Un squelette de code déjà écrit, sur lequel un développeur construit plutôt que de repartir de zéro.",
      etapes: [
        "Beaucoup de programmes ont besoin des mêmes briques de base : afficher une page, gérer une connexion, sécuriser un mot de passe.",
        "Un framework fournit ces briques toutes faites, organisées selon des règles précises — au développeur de remplir les cases propres à son projet.",
        "Cela évite de réinventer et de retester ce que des milliers d’autres projets utilisent déjà, avec les mêmes bugs déjà corrigés une fois pour toutes.",
        "La contrepartie : on adopte aussi ses règles et ses limites — en sortir demande souvent de réécrire une bonne partie du projet."
      ],
      voir: "logiciel",
      pas: "une bibliothèque, plus petite et plus ponctuelle : on l’appelle depuis son propre code, alors qu’avec un framework, c’est lui qui appelle le vôtre."
    },
    {
      id: "scalabilite", terme: "Scalabilité (montée en charge)", domaine: "Informatique",
      aka: ["scalabilité", "montée en charge", "scalability", "passage à l’échelle"],
      une: "La capacité d’un système à absorber plus de demandes en ajoutant des ressources, sans tout reconstruire.",
      etapes: [
        "Un outil pensé pour cent utilisateurs craque souvent bien avant d’en accueillir dix mille.",
        "Scalable, il encaisse la croissance en ajoutant des ressources — plus de serveurs, plus de mémoire — sans changer son fonctionnement interne.",
        "Deux façons d’ajouter des ressources : une machine plus puissante (verticale), ou plusieurs machines identiques réparties (horizontale, la plus courante aujourd’hui).",
        "Le cloud a rendu la scalabilité horizontale presque triviale : ajouter un serveur prend des minutes, pas des semaines de commande de matériel."
      ],
      voir: "load-balancer"
    },
    {
      id: "ransomware", terme: "Rançongiciel (ransomware)", domaine: "Réseau",
      aka: ["rançongiciel", "ransomware", "rançon", "chiffrement malveillant"],
      une: "Un logiciel malveillant qui chiffre vos fichiers et exige une rançon pour la clé qui les débloque.",
      etapes: [
        "Le piège arrive souvent par un e-mail piégé ou une pièce jointe ouverte sans méfiance — le même chemin que le hameçonnage.",
        "Une fois lancé, le programme chiffre silencieusement les fichiers de la machine, puis ceux du réseau accessible, en quelques minutes.",
        "Un message apparaît alors : la clé de déchiffrement s’échange contre une rançon, payable en cryptomonnaie, sous un délai compté.",
        "La payer ne garantit rien ; la seule parade fiable est en amont : une sauvegarde récente, gardée hors d’atteinte du réseau infecté."
      ],
      voir: "sauvegarde",
      pas: "le hameçonnage, souvent la porte d’entrée du rançongiciel — celui-ci est le logiciel qui agit une fois entré."
    },
    {
      id: "catalogue-donnees", terme: "Catalogue de données", domaine: "Data",
      aka: ["catalogue de données", "data catalog", "inventaire des données"],
      une: "L’annuaire qui recense où vit chaque donnée de l’entreprise, ce qu’elle veut dire, et qui peut s’en servir.",
      etapes: [
        "Une entreprise qui grandit accumule les tables, les tableurs, les entrepôts — sans que personne n’ait la vue d’ensemble de ce qui existe où.",
        "Le catalogue de données recense chaque source : son emplacement, sa définition, sa fraîcheur, son propriétaire.",
        "Il devient le point de passage avant de chercher une donnée : on y vérifie d’abord si elle existe déjà, avant d’en redemander une copie.",
        "Sans lui, deux équipes reconstruisent souvent la même donnée chacune de leur côté, avec deux définitions qui finissent par diverger."
      ],
      voir: "gouvernance-data"
    },
    {
      id: "proxy", terme: "Proxy (serveur mandataire)", domaine: "Réseau",
      aka: ["proxy", "serveur mandataire", "proxy web"],
      une: "Un intermédiaire qui relaie vos demandes à votre place, et peut au passage filtrer, accélérer ou masquer.",
      etapes: [
        "Normalement, votre appareil s’adresse directement au site visité : votre demande part, sa réponse revient.",
        "Un proxy s’intercale entre les deux : c’est lui qui contacte le site, puis vous transmet la réponse reçue.",
        "Au passage, il peut filtrer des adresses interdites, garder une copie pour accélérer la prochaine demande, ou masquer votre adresse réelle au site visité.",
        "Une entreprise en place un en sortie de son réseau pour surveiller et filtrer ; un particulier, pour changer d’adresse apparente."
      ],
      voir: "vpn",
      pas: "le VPN, qui chiffre aussi tout le trajet entre vous et lui — un proxy, la plupart du temps, ne fait que relayer, sans rien chiffrer de plus."
    },
    {
      id: "cdn", terme: "CDN (réseau de diffusion de contenu)", domaine: "Réseau",
      aka: ["cdn", "content delivery network", "réseau de diffusion de contenu"],
      une: "Des copies d’un même site posées un peu partout dans le monde, pour répondre depuis le serveur le plus proche du visiteur.",
      etapes: [
        "Un site hébergé sur un seul serveur, dans un seul pays, répond vite tout près de lui et plus lentement à l’autre bout du monde.",
        "Un CDN dépose des copies des fichiers les plus demandés — images, vidéos, scripts — sur des serveurs répartis sur plusieurs continents.",
        "Une visite depuis Tokyo ou depuis Paris est alors servie par la copie la plus proche, pas par le serveur d’origine.",
        "Résultat : une page plus rapide à charger partout, et un serveur d’origine bien moins sollicité, même en cas de pic de trafic."
      ],
      voir: "internet"
    },
    {
      id: "ci-cd", terme: "CI/CD (intégration et déploiement continus)", domaine: "SI",
      aka: ["ci/cd", "intégration continue", "déploiement continu", "pipeline ci/cd"],
      une: "La chaîne automatisée qui teste puis met en ligne chaque modification de code, sans attendre une grosse livraison.",
      etapes: [
        "Livrer du code une fois par trimestre, en un seul bloc, rend chaque mise en production risquée : trop de changements à la fois.",
        "L’intégration continue (CI) rassemble et teste automatiquement chaque modification dès qu’un développeur la propose, plusieurs fois par jour.",
        "Le déploiement continu (CD) prend le relais : si les tests passent, le changement part en production sans attendre, parfois tout seul.",
        "Des changements petits et fréquents, testés à chaque étape, sont plus faciles à corriger qu’une grosse livraison annuelle qui casse tout à la fois."
      ],
      voir: "projet-si",
      pas: "la recette, qui fait rejouer les scénarios par de vrais utilisateurs avant mise en service — le CI/CD, lui, automatise des tests techniques, exécutés à chaque changement de code."
    },
    {
      id: "test-ab", terme: "Test A/B", domaine: "Data",
      aka: ["test a/b", "a/b testing", "test ab"],
      une: "Montrer deux versions différentes à deux groupes de visiteurs, et laisser les chiffres décider laquelle vaut mieux.",
      etapes: [
        "Changer un bouton, un prix ou un message repose souvent sur une intuition — sans savoir si les visiteurs préfèrent vraiment la nouveauté.",
        "Un test A/B répartit les visiteurs au hasard en deux groupes : le groupe A voit l’ancienne version, le groupe B voit la nouvelle.",
        "On mesure ensuite le même indicateur des deux côtés — taux de clic, d’achat — pendant une durée fixée à l’avance.",
        "Si l’écart est net et régulier, pas un hasard d’un seul jour, la version gagnante devient la nouvelle référence pour tout le monde."
      ],
      voir: "bi-tableau-de-bord",
      pas: "un KPI, qui est le chiffre suivi en continu — le test A/B, lui, est l’expérience ponctuelle qui compare deux versions sur ce chiffre."
    },
    {
      id: "chiffrement-bout-en-bout", terme: "Chiffrement de bout en bout", domaine: "Réseau",
      aka: ["e2e", "bout en bout", "end-to-end", "messagerie chiffrée"],
      une: "Un message chiffré dès l’envoi et lisible seulement par son destinataire — pas même par le service qui le transporte.",
      etapes: [
        "Un message qui passe par un service (messagerie, appel) traverse ses serveurs : sans protection, le service pourrait le lire.",
        "Avec le chiffrement de bout en bout, votre appareil verrouille le message avant l’envoi, avec une clé que seul le destinataire possède.",
        "Le service ne fait alors que transporter une suite illisible : il ne peut ni la lire, ni la montrer à quelqu’un qui la lui demanderait.",
        "La contrepartie : si vous perdez vos clés, personne ne peut vous aider à récupérer le contenu. Le verrou n’a pas de double."
      ],
      voir: "chiffrement",
      pas: "le simple cadenas du navigateur, qui protège le trajet jusqu’au service, mais que le service peut ensuite lire — ici, il ne le peut pas."
    },
    {
      id: "reseau-neurones", terme: "Réseau de neurones", domaine: "IA",
      aka: ["réseau de neurones", "neural network", "neurone artificiel", "deep learning", "apprentissage profond"],
      une: "Un empilement de petites unités de calcul qui, ensemble, apprennent à reconnaître des motifs à partir d’exemples.",
      etapes: [
        "Certaines tâches, comme reconnaître un visage, sont impossibles à décrire par des règles écrites à la main.",
        "Un réseau de neurones est fait de nombreuses unités simples, rangées en couches : chacune reçoit des nombres, les pondère, et transmet le résultat à la couche suivante.",
        "À l’entraînement, on lui montre des exemples ; à chaque erreur, on ajuste très légèrement les pondérations, des millions de fois.",
        "On parle d’apprentissage profond (deep learning) quand il y a beaucoup de couches. Le nom vient d’une image du cerveau, mais le fonctionnement reste du calcul."
      ],
      voir: "machine-learning",
      pas: "un cerveau : l’analogie est une inspiration de départ, pas une copie de la biologie."
    },
    {
      id: "qualite-donnees", terme: "Qualité des données", domaine: "Data",
      aka: ["qualité des données", "data quality", "données propres", "nettoyage"],
      une: "Le degré de confiance qu’on peut accorder à une donnée : est-elle juste, complète, à jour, sans doublon ?",
      etapes: [
        "Un tableau de bord peut être parfaitement construit et afficher pourtant des chiffres faux, si les données de départ le sont.",
        "On juge une donnée sur quelques critères simples : exacte, complète, à jour, sans doublon, écrite toujours de la même façon.",
        "On les contrôle par des règles automatiques (un code postal a cinq chiffres, une date n’est pas dans le futur) et on corrige à la source.",
        "Corriger en aval ne suffit pas : mieux vaut empêcher l’erreur à la saisie que la réparer chaque semaine dans les rapports."
      ],
      voir: "gouvernance-data",
      pas: "le dédoublonnage, qui n’est qu’un des contrôles : la qualité couvre aussi l’exactitude, la complétude et la fraîcheur."
    },
    {
      id: "shadow-it", terme: "Shadow IT (informatique fantôme)", domaine: "SI",
      aka: ["shadow it", "informatique fantôme", "outils non validés", "sauvage"],
      une: "Les outils utilisés dans une entreprise à l’insu du service informatique, souvent parce qu’ils dépannent vite.",
      etapes: [
        "Une équipe a un besoin urgent, l’outil officiel est trop lent ou n’existe pas : elle s’inscrit à un service en ligne avec sa propre carte ou son adresse pro.",
        "L’outil marche, l’équipe est contente, et personne d’autre dans l’entreprise ne sait qu’il existe : c’est le shadow IT.",
        "Le risque est là : des données de l’entreprise partent chez un fournisseur non examiné, sans sauvegarde, sans droits gérés, sans départ prévu quand la personne quitte.",
        "L’interdire en bloc marche rarement. Mieux vaut comprendre le besoin qu’il révèle, et proposer une solution validée qui le couvre."
      ],
      voir: "no-code",
      pas: "le no-code, qui est une façon de construire ; le shadow IT décrit seulement le fait que l’outil échappe à tout contrôle."
    },
    {
      id: "git", terme: "Git", domaine: "Informatique",
      aka: ["git", "dépôt", "commit", "github", "gitlab", "versionnage du code"],
      une: "L’outil qui garde l’historique complet d’un projet de code et permet à plusieurs personnes d’y travailler sans s’écraser.",
      etapes: [
        "Quand plusieurs personnes modifient les mêmes fichiers, on finit avec des copies « version finale 2 » et des changements écrasés.",
        "Git enregistre le projet à chaque étape choisie par les développeurs : un « commit », c’est un point de sauvegarde daté, signé et commenté.",
        "Chacun peut travailler sur sa propre branche, une ligne parallèle, puis proposer de la fusionner avec la principale une fois le travail relu.",
        "On peut ainsi revenir à n’importe quel point passé et voir qui a changé quoi. Les sites comme GitHub ou GitLab hébergent ces projets en ligne."
      ],
      voir: "versionnage",
      pas: "GitHub, qui est un service en ligne construit autour de Git — Git lui-même est l’outil, et fonctionne aussi sans internet."
    },
    {
      id: "jointure", terme: "Jointure (JOIN)", domaine: "Data",
      aka: ["jointure", "join", "relier deux tables", "clé étrangère", "clé primaire"],
      une: "L’opération qui rapproche deux tableaux de données grâce à une colonne qu’ils ont en commun.",
      etapes: [
        "Une base de données range chaque sujet dans son propre tableau : un pour les clients, un pour les commandes, plutôt que tout mélangé.",
        "Pour éviter les répétitions, la commande ne contient pas le nom du client, seulement son numéro : la colonne commune aux deux tableaux.",
        "La jointure rapproche les lignes des deux tableaux qui portent le même numéro, et reconstitue « telle commande, passée par tel client ».",
        "Si le numéro manque ou est faux d’un côté, la ligne ne trouve pas son pendant : c’est une cause classique de chiffres qui ne collent pas."
      ],
      voir: "jointure",
      pas: "le dédoublonnage, qui cherche les lignes en double au sein d’un tableau ; la jointure relie deux tableaux différents."
    },
    {
      id: "biais-ia", terme: "Biais (en IA)", domaine: "IA",
      aka: ["biais", "biais algorithmique", "discrimination", "équité", "données biaisées"],
      une: "Une déformation systématique dans les réponses d’une IA, héritée de ses exemples d’entraînement.",
      etapes: [
        "Une IA apprend à partir d’exemples. Elle ne connaît du monde que ce que ces exemples lui montrent.",
        "Si certains cas y sont rares, absents ou décrits de façon déséquilibrée, elle reproduit ce déséquilibre sans le remarquer.",
        "Cela donne, par exemple, un outil de tri de candidatures qui favorise les profils ressemblant à ceux déjà embauchés.",
        "On le limite en examinant les exemples de départ, en testant les résultats sur différents groupes, et en gardant un humain dans la boucle."
      ],
      voir: "machine-learning",
      pas: "une hallucination, qui est une invention isolée ; le biais est une pente régulière, présente à chaque réponse."
    },
    {
      id: "agile", terme: "Agile", domaine: "SI",
      aka: ["agile", "scrum", "sprint", "méthode agile", "itératif"],
      une: "Une façon de mener un projet par petites livraisons successives, plutôt qu’en une seule livraison à la fin.",
      etapes: [
        "Dans un projet classique, on décrit tout au début et on livre tout à la fin. Si le besoin a changé entre-temps, il est trop tard.",
        "La démarche agile découpe le travail en cycles courts, de quelques semaines, appelés sprints dans la méthode Scrum.",
        "À la fin de chaque cycle, l’équipe montre quelque chose qui fonctionne et recueille l’avis des utilisateurs, puis ajuste la suite.",
        "On corrige le tir plus tôt, au prix d’une implication régulière du métier — et d’un périmètre final moins figé au départ."
      ],
      voir: "projet-si",
      pas: "le cycle en V, la démarche classique où chaque phase se termine avant que la suivante ne commence."
    },
    {
      id: "latence", terme: "Latence", domaine: "Réseau",
      aka: ["latence", "ping", "délai", "temps de réponse", "lag"],
      une: "Le temps qu’un message met à faire l’aller-retour entre deux machines.",
      etapes: [
        "Quand vous cliquez, une demande part, atteint un serveur, et la réponse revient. Ce trajet prend un temps, même très court.",
        "Ce temps s’appelle la latence. On la mesure en millisecondes, souvent avec l’outil « ping ».",
        "Elle dépend surtout de la distance parcourue et du nombre d’étapes traversées, pas du tuyau lui-même.",
        "Une latence élevée gêne les appels vidéo et les jeux en ligne, même avec une grosse connexion."
      ],
      voir: "wifi-box",
      pas: "le débit, qui est la quantité de données transportée par seconde ; la latence est le temps d’un aller-retour."
    },
    {
      id: "backlog", terme: "Backlog", domaine: "SI",
      aka: ["backlog", "liste des tâches", "product backlog", "priorisation"],
      une: "La liste ordonnée de tout ce qu’il reste à construire dans un projet.",
      etapes: [
        "Dans un projet, les envies ne cessent d’arriver : nouvelles fonctions, corrections, idées des utilisateurs.",
        "On les note toutes dans une même liste, le backlog, chacune formulée de façon compréhensible par le métier.",
        "On la classe ensuite par priorité : ce qui apporte le plus de valeur est en haut, et l’équipe pioche par le haut.",
        "La liste vit : on la réordonne à mesure que le besoin évolue. Elle sert de support de dialogue entre le métier et l’équipe."
      ],
      voir: "projet-si",
      pas: "le cahier des charges, qui fige le besoin au départ ; le backlog est une liste qu’on réordonne tout au long du projet."
    },
    {
      id: "referentiel", terme: "Données de référence (référentiel)", domaine: "Data",
      aka: ["référentiel", "données de référence", "mdm", "master data", "données maîtres"],
      une: "La liste officielle et unique des objets de base de l’entreprise : clients, produits, sites.",
      etapes: [
        "Le même client existe souvent dans plusieurs outils : facturation, CRM, support. Chacun a sa version, parfois différente.",
        "Un référentiel désigne, pour chaque objet de base, une fiche unique de référence, avec un identifiant commun.",
        "Les autres outils s’y rattachent ou s’y synchronisent au lieu de recopier l’information à leur façon.",
        "Cela évite les doublons et les chiffres qui divergent ; il faut en échange désigner qui a le droit de le modifier."
      ],
      voir: "gouvernance-data",
      pas: "le dédoublonnage, qui nettoie des doublons existants ; le référentiel organise les choses pour qu’ils n’apparaissent pas."
    },
    {
      id: "chaine-de-pensee", terme: "Chaîne de pensée", domaine: "IA",
      aka: ["chaîne de pensée", "chain of thought", "raisonnement", "étape par étape", "réfléchir"],
      une: "Demander à l’IA d’écrire son raisonnement étape par étape avant de donner sa réponse.",
      etapes: [
        "Un modèle écrit mot après mot. Sur un problème à plusieurs étapes, une réponse donnée d’emblée est plus souvent fausse.",
        "En lui demandant de détailler d’abord les étapes, chaque ligne écrite devient un appui pour la suivante.",
        "Le raisonnement affiché fait partie du texte que le modèle lit pour produire la suite de sa réponse.",
        "Cela aide sur les calculs et la logique, mais coûte plus de texte, et un raisonnement bien écrit peut rester faux : il se vérifie."
      ],
      voir: "prompt",
      pas: "une hallucination, qui est une invention ; la chaîne de pensée est une technique de demande qui réduit certaines erreurs."
    },
    {
      id: "https", terme: "HTTPS (le cadenas)", domaine: "Réseau",
      aka: ["https", "cadenas", "certificat", "tls", "ssl", "site sécurisé"],
      une: "La version protégée du web : ce qui voyage entre vous et le site est chiffré, et le site prouve qui il est.",
      etapes: [
        "Sur un réseau, votre demande traverse plusieurs machines. Sans protection, chacune pourrait la lire ou la modifier.",
        "Avec HTTPS, le navigateur et le site se mettent d’abord d’accord sur un secret commun, puis chiffrent tout ce qu’ils échangent.",
        "Le site présente aussi un certificat, une carte d’identité délivrée par un organisme tiers, que le navigateur vérifie. Le cadenas indique que tout est en ordre.",
        "Le cadenas garantit un échange privé avec le site affiché, pas que ce site soit honnête : un site frauduleux peut aussi en avoir un."
      ],
      voir: "https-cadenas",
      pas: "le VPN, qui protège toute votre connexion ; HTTPS protège l’échange avec un site précis."
    },
    {
      id: "data-roles", terme: "Data analyst, data engineer, data scientist", domaine: "Data",
      aka: ["data analyst", "data engineer", "data scientist", "analyste de données", "ingénieur data", "métiers de la data"],
      une: "Les trois métiers de la data : celui qui amène les données, celui qui les lit, celui qui prédit.",
      etapes: [
        "Avant de servir à quelque chose, une donnée doit être collectée, rangée, nettoyée, puis interprétée. Ce n’est pas le travail d’une seule personne.",
        "Le data engineer construit les tuyaux : il fait arriver les données propres et à jour au bon endroit.",
        "Le data analyst les interroge et les met en forme, pour répondre à une question : que s’est-il passé, et où ?",
        "Le data scientist construit des modèles qui prévoient ou classent. Les trois dépendent les uns des autres, et les frontières varient d’une entreprise à l’autre."
      ],
      voir: "bi-tableau-de-bord",
      pas: "un chef de projet data, qui coordonne le travail sans manipuler lui-même les données."
    },
    {
      id: "rpa", terme: "RPA (robot logiciel)", domaine: "SI",
      aka: ["rpa", "robot logiciel", "automatisation", "robotic process automation", "automatiser"],
      une: "Un programme qui refait à votre place les clics et les saisies d’une tâche répétitive.",
      etapes: [
        "Beaucoup de tâches de bureau se répètent à l’identique : copier une valeur d’un écran vers un autre, remplir le même formulaire.",
        "Un robot logiciel enregistre ces gestes, puis les rejoue seul : il ouvre les écrans, lit les champs, saisit les données.",
        "Il travaille avec les outils existants, sans les modifier, un peu comme une personne invisible devant l’écran.",
        "Il convient aux règles stables et précises. Si un écran change, le robot s’arrête ou se trompe : il demande une surveillance."
      ],
      voir: "no-code",
      pas: "une IA, qui sait gérer le flou ; un robot logiciel suit à la lettre des règles écrites d’avance."
    },
    {
      id: "deploiement", terme: "Mise en production", domaine: "Informatique",
      aka: ["mise en production", "déploiement", "mep", "production", "déployer", "livraison"],
      une: "Le moment où une nouveauté quitte l’atelier pour être utilisée par de vrais utilisateurs.",
      etapes: [
        "Un logiciel se construit et se teste dans des environnements à part, sans risque pour les utilisateurs.",
        "Quand il est jugé prêt, on l’installe sur les machines que tout le monde utilise : c’est la mise en production.",
        "Ce passage est délicat : une erreur touche tout de suite les vrais utilisateurs. On le prépare, souvent à une heure creuse, avec un plan pour revenir en arrière.",
        "Beaucoup d’équipes l’automatisent pour le rendre plus fréquent et moins stressant, et surveillent le résultat juste après."
      ],
      voir: "versionnage",
      pas: "un environnement de test, où l’on essaie sans conséquence ; la production est l’endroit où cela compte."
    },
    {
      id: "surapprentissage", terme: "Surapprentissage", domaine: "IA",
      aka: ["surapprentissage", "overfitting", "apprendre par cœur", "sur-ajustement"],
      une: "Quand un modèle retient ses exemples par cœur au lieu d’en tirer la règle.",
      etapes: [
        "On entraîne un modèle sur des exemples pour qu’il réussisse ensuite sur des cas qu’il n’a jamais vus.",
        "S’il s’y colle trop, il retient les détails propres à ces exemples, y compris les accidents sans importance, plutôt que la règle générale.",
        "Il obtient alors d’excellents résultats sur ses exemples d’entraînement, et de mauvais sur les cas nouveaux : comme un élève qui récite son cours sans l’avoir compris.",
        "On le détecte en testant sur des données mises de côté. On le limite avec plus d’exemples variés ou un modèle plus simple."
      ],
      voir: "surapprentissage",
      pas: "une hallucination, qui est une invention d’un modèle de langage ; le surapprentissage est un défaut de l’entraînement."
    },
    {
      id: "regle-3-2-1", terme: "Règle 3-2-1 (sauvegarde)", domaine: "Réseau",
      aka: ["3-2-1", "règle 3-2-1", "trois copies", "sauvegarde", "backup"],
      une: "Trois copies de vos données, sur deux supports différents, dont une hors de chez vous.",
      etapes: [
        "Un disque finit toujours par tomber en panne, et un incendie, un vol ou un virus peuvent emporter tout ce qui se trouve au même endroit.",
        "La règle 3-2-1 répond à chaque risque : trois copies au total (l’original et deux sauvegardes), sur deux supports différents, dont une copie conservée ailleurs.",
        "Deux supports évitent qu’une même panne détruise tout ; une copie hors site (autre bâtiment ou cloud) résiste au sinistre local.",
        "Une copie qui se synchronise avec l’original n’est pas une sauvegarde : une suppression par erreur s’y répète aussi. Et une sauvegarde jamais testée est un pari."
      ],
      voir: "sauvegarde",
      pas: "la synchronisation, qui reflète vos changements partout, y compris vos erreurs ; une sauvegarde garde un état passé."
    },
    {
      id: "entrepot-donnees", terme: "Entrepôt de données (data warehouse)", domaine: "Data",
      aka: ["entrepôt de données", "data warehouse", "datawarehouse", "entrepôt"],
      une: "Une grande base qui rassemble les données de toute l’entreprise, rangées pour être analysées.",
      etapes: [
        "Chaque outil d’une entreprise garde ses propres données : ventes d’un côté, comptabilité d’un autre. Les croiser est pénible.",
        "Un entrepôt de données les récupère régulièrement depuis ces sources, les nettoie et les range dans un même format.",
        "Ainsi rangées, elles peuvent être interrogées ensemble, rapidement, sans ralentir les outils du quotidien.",
        "Les tableaux de bord et les analyses s’appuient dessus. Sa qualité dépend de celle du rangement : des données mal alignées donnent des chiffres qui se contredisent."
      ],
      voir: "entrepots-data",
      pas: "un lac de données, qui garde les données brutes telles quelles ; l’entrepôt ne garde que du rangé."
    },
    {
      id: "tma", terme: "TMA (maintenance applicative)", domaine: "SI",
      aka: ["tma", "maintenance applicative", "tierce maintenance applicative", "maintenance corrective", "maintenance évolutive", "run"],
      une: "Le travail de faire vivre un logiciel après sa mise en service : corriger, adapter, améliorer.",
      etapes: [
        "Un logiciel livré n’est pas terminé : des erreurs apparaissent à l’usage, les règles de gestion et le monde autour évoluent.",
        "La maintenance corrective répare ce qui ne marche pas ; la maintenance évolutive ajoute ou adapte des fonctions à de nouveaux besoins.",
        "La TMA est ce même travail confié à une équipe extérieure, sur la durée, avec des engagements de délai, souvent à travers des tickets.",
        "Elle représente en général une part importante du coût d’un logiciel sur sa durée de vie : il faut le prévoir dès le départ, pas seulement le budget de construction."
      ],
      voir: "support",
      pas: "le support aux utilisateurs, qui répond aux questions du quotidien ; la maintenance modifie le logiciel lui-même."
    },
    {
      id: "deepfake", terme: "Deepfake (hypertrucage)", domaine: "IA",
      aka: ["deepfake", "hypertrucage", "faux vidéo", "voix clonée", "clonage de voix"],
      une: "Une image, une vidéo ou une voix fabriquée par IA qui imite une personne réelle.",
      etapes: [
        "Montrer quelqu’un dire ou faire ce qu’il n’a jamais dit ni fait demandait autrefois de gros moyens de retouche.",
        "Un modèle entraîné sur des photos, vidéos ou enregistrements d’une personne apprend à reproduire son visage ou sa voix, puis à la faire dire autre chose.",
        "Les outils sont aujourd’hui accessibles : un faux peut être convaincant, et servir à l’arnaque, à la désinformation ou au harcèlement.",
        "Quelques réflexes : vérifier la source, chercher la même information ailleurs, se méfier d’une demande urgente reçue par voix ou vidéo, et convenir avec ses proches d’un mot de contrôle."
      ],
      voir: "hallucination",
      pas: "une hallucination, qui est une erreur involontaire d’un modèle de langage ; un deepfake est un faux fabriqué pour imiter quelqu’un."
    },
    {
      id: "hyperviseur", terme: "Machine virtuelle (hyperviseur)", domaine: "Informatique",
      aka: ["machine virtuelle", "vm", "hyperviseur", "virtualisation"],
      une: "Un ordinateur simulé par logiciel, qui tourne à l’intérieur d’un vrai.",
      etapes: [
        "Un ordinateur ne fait tourner qu’un système à la fois, et il est souvent loin d’être utilisé à fond.",
        "Un logiciel appelé hyperviseur découpe la machine réelle en plusieurs machines virtuelles, chacune avec sa part de mémoire, de processeur et de disque.",
        "Chaque machine virtuelle a son propre système et se croit seule au monde : un incident dans l’une n’atteint pas les autres.",
        "On utilise mieux le matériel, on crée une machine en quelques minutes et on peut la déplacer ou la copier facilement. C’est la base du cloud."
      ],
      voir: "virtualisation",
      pas: "un conteneur, plus léger, qui partage le système de la machine au lieu d’en embarquer un complet."
    },
    {
      id: "dedoublonnage", terme: "Dédoublonnage", domaine: "Data",
      aka: ["dédoublonnage", "doublon", "doublons", "déduplication", "fusion de fiches"],
      une: "Reconnaître que deux fiches décrivent la même personne ou la même chose, et n’en garder qu’une.",
      etapes: [
        "Un même client peut exister plusieurs fois : une faute de frappe, un prénom abrégé, une nouvelle adresse saisie par un autre service.",
        "Les doublons faussent les chiffres : on compte deux clients au lieu d’un, on envoie deux courriers, on perd l’historique.",
        "Le dédoublonnage compare les fiches sur plusieurs champs à la fois (nom, e-mail, adresse) pour repérer celles qui se ressemblent assez.",
        "Les fiches reconnues sont fusionnées en une seule, la plus complète. En cas de doute, une personne tranche : une fusion à tort est difficile à défaire."
      ],
      voir: "dedoublonnage",
      pas: "la sauvegarde, qui garde volontairement des copies ; le doublon est une copie involontaire dans les données de travail."
    },
    {
      id: "webhook", terme: "Webhook", domaine: "SI",
      aka: ["webhook", "crochet web", "notification automatique", "rappel http"],
      une: "Un message qu’un outil envoie tout seul à un autre dès qu’il se passe quelque chose.",
      etapes: [
        "Pour savoir si une commande est arrivée, un outil peut demander à l’autre toutes les minutes : « Y a-t-il du nouveau ? ». C’est lent et la plupart des réponses sont « non ».",
        "Avec un webhook, on inverse : on donne d’avance à l’outil source l’adresse où prévenir.",
        "Dès que l’événement se produit (paiement reçu, formulaire rempli), la source envoie un message à cette adresse, avec les détails.",
        "L’autre outil réagit aussitôt, sans rien demander. Il faut seulement que son adresse reste joignable et qu’il vérifie l’origine du message."
      ],
      voir: "api",
      pas: "une API classique, où c’est vous qui posez la question ; avec un webhook, c’est l’outil qui vous appelle."
    },
    {
      id: "chatbot", terme: "Chatbot (agent conversationnel)", domaine: "IA",
      aka: ["chatbot", "agent conversationnel", "robot de discussion", "assistant virtuel"],
      une: "Un programme avec lequel on discute par écrit, pour obtenir une réponse ou une action.",
      etapes: [
        "Un chatbot est une fenêtre de discussion : vous écrivez, il répond, comme avec une personne.",
        "Les premiers suivaient des règles écrites à la main : ils reconnaissaient quelques mots et renvoyaient une réponse prévue. Hors scénario, ils étaient perdus.",
        "Les chatbots actuels s’appuient souvent sur un modèle de langage : ils comprennent des formulations libres et rédigent leurs réponses.",
        "Leur qualité dépend de ce qu’on leur permet : consignes, documents à consulter, outils branchés. Sans cela, ils peuvent inventer."
      ],
      voir: "llm",
      pas: "un LLM, qui est le moteur de langage ; le chatbot est l’application autour, avec son interface et ses consignes."
    },
    {
      id: "cle-primaire", terme: "Clé primaire et clé étrangère", domaine: "Data",
      aka: ["clé primaire", "clé étrangère", "identifiant unique", "primary key", "foreign key", "clé"],
      une: "Un identifiant unique par ligne d’un tableau, et le moyen de s’y référer depuis un autre tableau.",
      etapes: [
        "Dans une base, deux clients peuvent avoir le même nom et le même prénom. Comment les distinguer à coup sûr ?",
        "On donne à chaque ligne un identifiant qui ne se répète jamais : le numéro client. C’est la clé primaire.",
        "Dans le tableau des commandes, on n’écrit pas toute la fiche du client : on note seulement son numéro. Ce numéro, qui renvoie à une ligne d’un autre tableau, est une clé étrangère.",
        "Cela évite de recopier les mêmes informations partout et permet de relier les tableaux entre eux, par exemple avec une jointure."
      ],
      voir: "base-de-donnees",
      pas: "un index, qui sert à retrouver plus vite des lignes ; la clé primaire sert à les identifier sans ambiguïté."
    },
    {
      id: "ligne-de-commande", terme: "Ligne de commande (terminal)", domaine: "Informatique",
      aka: ["ligne de commande", "terminal", "console", "shell", "cli", "invite de commandes"],
      une: "Une fenêtre où l’on pilote l’ordinateur en tapant des instructions, plutôt qu’en cliquant.",
      etapes: [
        "Avec la souris, on ne peut faire que ce que l’écran propose sous forme de boutons et de menus.",
        "La ligne de commande est une fenêtre de texte : on y tape une instruction, on valide, l’ordinateur l’exécute et répond par du texte.",
        "C’est plus austère, mais précis : une instruction peut agir sur des milliers de fichiers d’un coup, et on peut en enchaîner plusieurs dans un fichier de script.",
        "Les informaticiens s’en servent pour automatiser et administrer les serveurs. Une commande tapée sans la comprendre peut tout effacer : on ne copie pas à l’aveugle."
      ],
      voir: "logiciel",
      pas: "une interface graphique, avec fenêtres et boutons ; la ligne de commande donne les mêmes ordres par écrit."
    },
    {
      id: "middleware", terme: "Middleware (intergiciel)", domaine: "SI",
      aka: ["middleware", "intergiciel", "bus de service", "esb", "couche d’intégration"],
      une: "Le logiciel intermédiaire qui fait circuler les informations entre les applications d’une entreprise.",
      etapes: [
        "Dans une entreprise, chaque outil a son format et sa façon de parler. Les relier deux à deux donne vite un enchevêtrement.",
        "Un middleware se place au milieu : chaque application ne parle plus qu’à lui, dans un format convenu.",
        "Il reçoit, traduit si besoin, puis redistribue aux applications concernées, et garde une trace de ce qui est passé.",
        "On ajoute un outil en le branchant une fois au lieu de le relier à tous les autres. En contrepartie, cette brique devient critique : si elle s’arrête, les échanges s’arrêtent."
      ],
      voir: "si-briques",
      pas: "une API, qui est la porte d’un outil ; le middleware est l’aiguilleur qui relie plusieurs portes."
    },
    {
      id: "apprentissage-supervise", terme: "Apprentissage supervisé", domaine: "IA",
      aka: ["apprentissage supervisé", "supervised learning", "classification", "données étiquetées", "étiquettes"],
      une: "Apprendre à une machine à partir d’exemples dont la bonne réponse est déjà connue.",
      etapes: [
        "Pour apprendre à reconnaître un courriel indésirable, on ne peut pas décrire toutes les règles à la main.",
        "On rassemble des milliers d’exemples, chacun accompagné de sa réponse : « indésirable » ou « normal ». Ces réponses s’appellent des étiquettes.",
        "Le modèle ajuste ses réglages jusqu’à retrouver les bonnes réponses sur ces exemples, puis on le teste sur des exemples qu’il n’a jamais vus.",
        "Il apprend ce que contiennent les exemples : étiquetés par erreur ou peu variés, il se trompera. Étiqueter coûte souvent plus cher que calculer."
      ],
      voir: "machine-learning",
      pas: "l’apprentissage non supervisé, où l’on ne fournit aucune réponse et où le modèle cherche seul des regroupements."
    },
    {
      id: "bande-passante", terme: "Bande passante (débit)", domaine: "Réseau",
      aka: ["bande passante", "débit", "mégabits", "fibre", "vitesse de connexion"],
      une: "La quantité de données qu’une connexion peut faire passer chaque seconde.",
      etapes: [
        "Imaginez un tuyau : plus il est large, plus il laisse passer d’eau en même temps.",
        "Pour une connexion, c’est pareil : la bande passante, ou débit, mesure combien de données passent par seconde. On l’exprime en mégabits par seconde.",
        "Un gros fichier ou une vidéo en haute qualité demandent un gros débit. Un simple message en demande très peu.",
        "Un grand débit ne rend pas la réponse plus rapide à démarrer : cela dépend de la latence. Et le débit annoncé se partage entre tous les appareils connectés."
      ],
      voir: "wifi-box",
      pas: "la latence, qui mesure le temps d’un aller-retour ; le débit mesure le volume qui passe."
    },
    {
      id: "memoire-vive", terme: "Mémoire vive (RAM)", domaine: "Informatique",
      aka: ["ram", "mémoire vive", "mémoire", "mémoire de travail"],
      une: "La mémoire de travail de l’ordinateur : rapide, mais qui s’efface quand il s’éteint.",
      etapes: [
        "Pour travailler, un ordinateur ne lit pas tout directement sur le disque : c’est trop lent.",
        "Il recopie ce dont il a besoin dans une mémoire très rapide : la mémoire vive, ou RAM. C’est son plan de travail.",
        "Plus il y a de RAM, plus on peut ouvrir de programmes et de documents à la fois sans ralentir.",
        "Elle se vide à l’extinction : ce qui n’est pas enregistré sur le disque est perdu. D’où l’intérêt d’enregistrer régulièrement."
      ],
      voir: "ordinateur",
      pas: "le disque de stockage, qui garde les données même éteint mais est plus lent ; la RAM sert à travailler, le disque à conserver."
    },
    {
      id: "donnee-personnelle", terme: "Donnée personnelle", domaine: "Data",
      aka: ["donnée personnelle", "données personnelles", "rgpd", "cnil", "vie privée", "donnée sensible"],
      une: "Toute information qui permet d’identifier une personne, directement ou en recoupant plusieurs éléments.",
      etapes: [
        "Un nom est évidemment une donnée personnelle. Mais aussi une adresse électronique, un numéro de téléphone ou une photo.",
        "Même une information qui semble anodine en est une si, associée à d’autres, elle désigne quelqu’un : une adresse IP, un identifiant client, un lieu de travail précis.",
        "Le RGPD impose alors des règles : collecter seulement ce qui est utile, dire pourquoi, protéger, et ne pas garder indéfiniment.",
        "Les personnes concernées ont des droits : savoir ce qui est conservé, le corriger, demander la suppression. Certaines données, comme la santé, demandent une vigilance renforcée."
      ],
      voir: "rgpd",
      pas: "une donnée anonymisée, d’où l’on ne peut plus remonter à une personne ; elle sort du champ de ces règles."
    },
    {
      id: "pra-pca", terme: "PCA et PRA (continuité et reprise d’activité)", domaine: "SI",
      aka: ["pra", "pca", "plan de reprise", "plan de continuité", "reprise d’activité", "sinistre", "panne majeure"],
      une: "Les plans qui décident à l’avance comment une entreprise continue de fonctionner, puis redémarre, après une panne grave.",
      etapes: [
        "Un incendie, une cyberattaque ou une panne de datacenter peuvent arrêter tous les outils d’un coup. Improviser ce jour-là coûte très cher.",
        "On prépare donc deux plans. Le plan de continuité (PCA) cherche à éviter l’arrêt : outils doublés, solution de secours en veille.",
        "Le plan de reprise (PRA) suppose que l’arrêt a eu lieu et décrit comment redémarrer : quoi relancer d’abord, depuis quelle sauvegarde, par qui.",
        "Un plan jamais testé est une promesse sans garantie : on le répète régulièrement, en mesurant le temps de remise en route et la quantité de données perdue."
      ],
      voir: "sauvegarde",
      pas: "la sauvegarde, qui n’est qu’une copie des données ; le plan de reprise organise aussi les personnes, l’ordre et les délais."
    },
    {
      id: "mise-a-jour", terme: "Mise à jour (correctif)", domaine: "Informatique",
      aka: ["mise à jour", "patch", "correctif", "update", "faille"],
      une: "Une nouvelle version d’un logiciel qui corrige des défauts, dont les failles de sécurité.",
      etapes: [
        "Un logiciel est écrit par des humains : il contient des erreurs, dont certaines laissent entrer un intrus. Ce sont les failles.",
        "Quand l’éditeur en trouve une, il publie un correctif, parfois appelé « patch », qui referme la porte.",
        "Dès sa publication, le défaut est connu de tous, y compris des personnes malveillantes : elles guettent ceux qui n’ont pas encore installé la mise à jour.",
        "Mettre à jour vite est l’un des gestes de protection les plus efficaces. Seul risque : un correctif peut changer des habitudes, d’où les tests en entreprise."
      ],
      voir: "cybersecurite",
      pas: "une nouvelle version majeure, qui ajoute des fonctions ; le correctif, lui, répare l’existant."
    },
    {
      id: "boite-noire", terme: "Boîte noire (IA)", domaine: "IA",
      aka: ["boîte noire", "black box", "explicabilité", "ia explicable", "opacité"],
      une: "Un modèle dont on voit ce qui entre et ce qui sort, mais dont on ne sait pas expliquer le raisonnement.",
      etapes: [
        "Un réseau de neurones contient des milliards de réglages. Aucun n’a de sens lisible pour un humain.",
        "On voit donc la question posée et la réponse donnée, mais pas le chemin entre les deux : c’est une boîte noire.",
        "Quand le modèle se trompe, il est difficile de dire pourquoi. Des techniques d’explicabilité en donnent un aperçu partiel, jamais complet.",
        "Pour une décision importante, comme un crédit ou un diagnostic, on garde un humain dans la boucle et on demande à pouvoir justifier."
      ],
      voir: "ia-limites",
      pas: "un programme classique : on peut relire chacune de ses règles, ce qui n’est pas le cas d’un modèle appris."
    },
    {
      id: "interoperabilite", terme: "Interopérabilité", domaine: "SI",
      aka: ["interopérabilité", "interopérable", "standard", "format ouvert", "compatibilité"],
      une: "La capacité de deux outils différents à échanger des informations sans adaptation lourde.",
      etapes: [
        "Deux outils achetés séparément parlent rarement la même langue : formats de fichiers, noms de champs, façons de se connecter.",
        "Sans effort, chaque échange demande un développement sur mesure, cher et fragile.",
        "Des standards communs, comme des formats ouverts ou des API documentées, permettent à des outils d’origines différentes de se brancher.",
        "Elle protège aussi d’un fournisseur unique : changer d’outil est possible si les données sortent dans un format que les autres savent lire."
      ],
      voir: "api",
      pas: "l’intégration, qui est le travail de branchement lui-même ; l’interopérabilité est ce qui le rend facile ou non."
    },
    {
      id: "pilote", terme: "Pilote (driver)", domaine: "Informatique",
      aka: ["pilote", "driver", "imprimante", "périphérique", "pilote graphique"],
      une: "Le petit logiciel qui apprend à l’ordinateur à parler à un matériel précis.",
      etapes: [
        "Une imprimante, une souris, une carte graphique : chaque matériel a sa propre façon de recevoir des ordres.",
        "Le système de l’ordinateur ne peut pas les connaître tous à l’avance.",
        "Le pilote, fourni par le fabricant ou déjà inclus dans le système, traduit les ordres du système en ordres que ce matériel comprend.",
        "Un matériel branché qui ne répond pas, c’est souvent un pilote absent ou trop ancien : l’installer ou le mettre à jour règle le problème."
      ],
      voir: "logiciel",
      pas: "une application, que vous utilisez directement ; le pilote travaille en coulisses, entre le système et le matériel."
    },
    {
      id: "vision-ordinateur", terme: "Vision par ordinateur", domaine: "IA",
      aka: ["vision par ordinateur", "reconnaissance d’image", "reconnaissance faciale", "computer vision", "image"],
      une: "La capacité d’un programme à repérer et reconnaître ce qu’il y a dans une image ou une vidéo.",
      etapes: [
        "Pour un ordinateur, une photo n’est pas un paysage : c’est un tableau de millions de nombres, un par point de couleur.",
        "On montre à un modèle des milliers d’images accompagnées de leur étiquette, par exemple « chat » ou « panneau stop » : il apprend les motifs qui reviennent.",
        "Face à une nouvelle image, il dit ce qu’il y reconnaît, ou où : lire une plaque, repérer une pièce défectueuse, trier des photos.",
        "Il ne comprend pas la scène comme nous : un éclairage inhabituel ou un angle absent de ses exemples suffisent à le tromper."
      ],
      voir: "machine-learning",
      pas: "l’IA générative d’images, qui crée une image au lieu d’en analyser une."
    },
    {
      id: "jeu-de-donnees", terme: "Jeu de données (dataset)", domaine: "Data",
      aka: ["jeu de données", "dataset", "données d’entraînement", "échantillon", "fichier de données"],
      une: "Un ensemble de données rassemblées pour un même usage, présenté en lignes et en colonnes.",
      etapes: [
        "Des mesures éparses ne servent à rien tant qu’elles ne sont pas rassemblées au même endroit.",
        "On les range dans un ensemble cohérent : une ligne par cas, par exemple un client ou une vente, et une colonne par caractéristique.",
        "Ce jeu sert à analyser, à alimenter un tableau de bord ou à entraîner une IA, auquel cas on le découpe : une partie pour apprendre, une autre pour tester.",
        "Sa qualité décide du résultat : lignes manquantes, doublons ou échantillon biaisé faussent tout ce qu’on en tire."
      ],
      voir: "donnees-structurees",
      pas: "une base de données, qui est le système qui stocke et fait vivre les données ; le jeu est un ensemble ciblé, souvent tiré de là."
    },
    {
      id: "port-reseau", terme: "Port (réseau)", domaine: "Réseau",
      aka: ["port", "numéro de port", "port 443", "port 80", "service"],
      une: "Le numéro de porte, sur une machine, qui désigne le service à qui un message est destiné.",
      etapes: [
        "Une même machine peut offrir plusieurs services à la fois : pages web, messagerie, transfert de fichiers.",
        "L’adresse IP seule mène à la machine, pas au bon service : il faut aussi préciser lequel.",
        "Chaque service écoute à un numéro, le port. Par convention, les pages web sécurisées arrivent au port 443.",
        "Un pare-feu s’appuie souvent dessus : il laisse ouvertes les portes utiles et ferme toutes les autres."
      ],
      voir: "adresse-ip",
      pas: "l’adresse IP, qui désigne la machine ; le port désigne un service sur cette machine."
    },
    {
      id: "metadonnees", terme: "Métadonnées", domaine: "Data",
      aka: ["métadonnées", "metadata", "données sur les données", "propriétés du fichier"],
      une: "Les informations qui décrivent une donnée, sans en être le contenu.",
      etapes: [
        "Une photo contient une image. Mais on sait aussi quand elle a été prise, avec quel appareil, et sa taille.",
        "Ces informations qui décrivent la donnée, sans en faire partie, sont ses métadonnées.",
        "Elles servent à ranger, chercher et retrouver : trier des fichiers par date, ou savoir qui est responsable d’une table de données.",
        "Elles peuvent en dire long sur vous : un message dont on ne lit pas le contenu révèle déjà qui écrit à qui, et quand."
      ],
      voir: "donnees-structurees",
      pas: "la donnée elle-même : le contenu de la photo ou du message, par opposition à ce qui l’entoure."
    },
    {
      id: "refactoring", terme: "Refactorisation (refactoring)", domaine: "Informatique",
      aka: ["refactoring", "refactorisation", "réécriture", "nettoyer le code", "code propre"],
      une: "Réorganiser le code d’un logiciel pour le rendre plus clair, sans changer ce qu’il fait.",
      etapes: [
        "Au fil des ajouts, un programme devient confus : des morceaux répétés, des noms obscurs, des raccourcis pris dans l’urgence.",
        "La refactorisation range tout cela sans changer le comportement : l’utilisateur ne voit aucune différence.",
        "On vérifie par des tests que le logiciel fait toujours la même chose avant et après.",
        "C’est le remède courant à la dette technique : on y gagne en rapidité de travail, pas en fonctions nouvelles."
      ],
      voir: "logiciel",
      pas: "une nouvelle fonction ou un correctif de bug, qui changent ce que fait le logiciel."
    },
    {
      id: "poc", terme: "Preuve de concept (POC)", domaine: "SI",
      aka: ["poc", "proof of concept", "preuve de concept", "maquette", "prototype"],
      une: "Un essai rapide, à petite échelle, pour vérifier qu’une idée est réalisable avant d’investir.",
      etapes: [
        "Avant de lancer un gros projet, une question demeure : est-ce que cela peut fonctionner, ici, avec nos données ?",
        "On construit donc une version minimale, sur un cas précis et pour quelques utilisateurs, en quelques semaines.",
        "Le but est d’apprendre vite : ce qui marche, ce qui bloque, ce que cela coûterait en grand.",
        "À la fin, on décide : abandonner, ajuster, ou construire pour de bon. Un POC n’est pas fait pour être utilisé tel quel en production."
      ],
      voir: "projet-si",
      pas: "le MVP, qui est un premier produit réel confié à de vrais utilisateurs ; le POC ne cherche qu’à prouver la faisabilité."
    },
    {
      id: "authentification-autorisation", terme: "Authentification et autorisation", domaine: "Réseau",
      aka: ["authentification", "autorisation", "droits d’accès", "habilitation", "permissions"],
      une: "Deux questions distinctes : qui êtes-vous, puis qu’avez-vous le droit de faire.",
      etapes: [
        "À l’entrée d’un immeuble, le gardien commence par vérifier qui vous êtes.",
        "Cette vérification d’identité s’appelle l’authentification : mot de passe, code reçu, empreinte.",
        "Une fois identifié, il reste à savoir ce que vous avez le droit de faire ou de voir : c’est l’autorisation, aussi appelée droits d’accès.",
        "Les deux se confondent souvent à tort : être bien identifié ne donne pas accès à tout, et un droit mal réglé est une faille."
      ],
      voir: "mfa",
      pas: "le mot de passe, qui n’est qu’un moyen de s’authentifier, pas une autorisation."
    },
    {
      id: "cle-api", terme: "Clé d’API", domaine: "SI",
      aka: ["clé api", "api key", "clé d’accès", "secret", "jeton d’accès"],
      une: "Un code secret qui prouve à un service que la demande vient bien d’un programme autorisé.",
      etapes: [
        "Une API laisse un programme demander des choses à un autre service. Encore faut-il que le service sache qui demande.",
        "Il remet donc au demandeur un long code unique : la clé d’API, comme un badge d’accès.",
        "À chaque demande, le programme présente cette clé ; le service vérifie qu’elle est valide et ce qu’elle permet.",
        "Une clé se garde comme un mot de passe : publiée par erreur dans un code ou une page, elle permet à n’importe qui d’agir à votre place."
      ],
      voir: "api",
      pas: "l’API elle-même, qui est la porte de service ; la clé n’est que le badge pour la franchir."
    },
    {
      id: "lignage-donnees", terme: "Lignage des données (data lineage)", domaine: "Data",
      aka: ["lignage", "data lineage", "traçabilité des données", "origine des données", "provenance"],
      une: "Le trajet d’une donnée : d’où elle vient, par où elle est passée, et ce qui l’a transformée.",
      etapes: [
        "Un chiffre apparaît sur un tableau de bord. Quelqu’un demande : d’où sort-il ?",
        "Entre la source et l’écran, la donnée a souvent traversé plusieurs outils, filtres et calculs.",
        "Le lignage consigne ce parcours étape par étape, comme l’historique d’un colis.",
        "Il sert à retrouver la cause d’un chiffre faux et à mesurer ce qui sera touché si l’on modifie une source."
      ],
      voir: "gouvernance-data",
      pas: "le catalogue de données, qui décrit ce qui existe ; le lignage raconte le chemin parcouru."
    },
    {
      id: "faux-positif-negatif", terme: "Faux positif et faux négatif", domaine: "IA",
      aka: ["faux positif", "faux négatif", "erreur de classification", "précision", "fausse alerte"],
      une: "Les deux manières de se tromper pour un système qui décide : voir un problème qui n’existe pas, ou en rater un réel.",
      etapes: [
        "Un filtre anti-spam doit trancher pour chaque message : indésirable ou non.",
        "Un faux positif est une fausse alerte : un message normal classé comme spam.",
        "Un faux négatif est une alerte manquée : un vrai spam qui arrive dans la boîte.",
        "On ne peut pas supprimer les deux : durcir le filtre réduit l’un et augmente l’autre. Le bon réglage dépend de ce qui coûte le plus cher."
      ],
      voir: "machine-learning",
      pas: "le biais, qui est une erreur systématique dans les données ; ici, ce sont deux sortes d’erreurs de décision."
    },
    {
      id: "routeur", terme: "Routeur", domaine: "Réseau",
      aka: ["routeur", "router", "box", "passerelle"],
      une: "L’appareil qui aiguille chaque paquet de données vers la bonne direction, d’un réseau à l’autre.",
      etapes: [
        "Un réseau, comme celui de votre maison, ne communique pas tout seul avec les autres : il faut quelqu’un à la jonction.",
        "Le routeur est cet aiguilleur : il regarde l’adresse de destination inscrite sur chaque paquet de données.",
        "Il choisit alors la meilleure sortie parmi celles qu’il connaît, et transmet le paquet au routeur suivant, qui fait de même.",
        "Votre box en est un : elle relie vos appareils à Internet. Sans routeur, chaque réseau resterait isolé."
      ],
      voir: "wifi-box",
      pas: "le commutateur (switch), qui relie des appareils au sein d’un même réseau ; le routeur, lui, relie des réseaux entre eux."
    },
    {
      id: "apprentissage-non-supervise", terme: "Apprentissage non supervisé", domaine: "IA",
      aka: ["non supervisé", "clustering", "segmentation", "regroupement"],
      une: "Une IA qui cherche seule des groupes dans des données, sans qu’on lui ait dit ce qu’elle doit trouver.",
      etapes: [
        "On donne à la machine un grand tas de données, par exemple les achats de milliers de clients, sans aucune étiquette.",
        "Personne n’indique de bonne réponse : elle compare les cas entre eux et repère ceux qui se ressemblent.",
        "Elle en tire des groupes, appelés clusters : par exemple des clients aux habitudes d’achat proches.",
        "C’est à un humain de dire ce que ces groupes signifient. La machine propose des regroupements, elle ne les nomme pas."
      ],
      voir: "machine-learning",
      pas: "l’apprentissage supervisé, où l’on fournit au départ des exemples avec la bonne réponse."
    },
    {
      id: "cycle-en-v", terme: "Cycle en V", domaine: "SI",
      aka: ["cycle en v", "modèle en v", "projet en cascade", "waterfall", "méthode classique"],
      une: "Une façon de mener un projet par grandes phases enchaînées, où chaque phase de conception a sa phase de vérification.",
      etapes: [
        "On commence par écrire précisément ce que l’on veut : le besoin, puis la solution, puis le détail technique.",
        "Une fois tout conçu, on construit. Les phases s’enchaînent dans l’ordre, sans retour en arrière prévu.",
        "On remonte ensuite en vérifiant : chaque niveau de conception est contrôlé par un test qui lui correspond, jusqu’à la recette finale.",
        "C’est rassurant quand le besoin est stable. Mais l’utilisateur ne voit le résultat qu’à la fin, ce qui coûte cher si le besoin a changé."
      ],
      voir: "projet-si",
      pas: "la méthode agile, qui avance par petites livraisons successives plutôt qu’en phases longues."
    },
    {
      id: "base-relationnelle", terme: "Base de données relationnelle", domaine: "Data",
      aka: ["base relationnelle", "sgbd", "mysql", "postgresql", "tables liées"],
      une: "Une base qui range l’information dans des tableaux reliés entre eux par des identifiants.",
      etapes: [
        "Un commerce a des clients et des commandes. Tout noter dans un seul grand tableau répète les mêmes informations à chaque ligne.",
        "La base relationnelle sépare : un tableau pour les clients, un autre pour les commandes, chacun avec sa ligne par élément.",
        "Chaque client porte un identifiant unique ; chaque commande indique l’identifiant du client concerné. C’est le lien entre les tableaux.",
        "On interroge ensuite l’ensemble avec le langage SQL. Chaque information n’est écrite qu’une fois, donc plus facile à corriger."
      ],
      voir: "base-de-donnees",
      pas: "la base NoSQL, qui range souvent l’information en documents plutôt qu’en tableaux reliés."
    },
    {
      id: "adresse-mac", terme: "Adresse MAC", domaine: "Réseau",
      aka: ["mac", "adresse mac", "adresse physique", "identifiant matériel"],
      une: "Le numéro de série d’une carte réseau, qui l’identifie parmi les appareils d’un même réseau local.",
      etapes: [
        "Dans une maison, chaque appareil branché au wifi ou en câble doit pouvoir être reconnu par la box.",
        "Chaque carte réseau est fabriquée avec un identifiant propre, une suite de six paires de caractères : l’adresse MAC.",
        "Sur le réseau local, la box s’en sert pour livrer les données à l’appareil précis qui les attend.",
        "Elle ne sort pas de votre réseau local : pour Internet, c’est l’adresse IP qui compte. Et elle peut être masquée ou changée par le système."
      ],
      voir: "adresse-ip",
      pas: "l’adresse IP, qui situe l’appareil sur un réseau et peut changer ; l’adresse MAC est propre à la carte."
    },
    {
      id: "scrum", terme: "Scrum", domaine: "SI",
      aka: ["scrum", "sprint", "scrum master", "product owner"],
      une: "Une façon d’organiser un projet en cycles courts de quelques semaines, qui livrent chacun un morceau utilisable.",
      etapes: [
        "Dans un gros projet, le besoin évolue vite : tout prévoir d’avance est un pari risqué.",
        "Scrum découpe le travail en cycles courts, les sprints, d’une à quatre semaines, avec un objectif clair à chaque fois.",
        "Chaque sprint commence par choisir ce qu’on fait dans une liste priorisée, le backlog, et finit par montrer le résultat aux utilisateurs.",
        "Les retours alimentent le sprint suivant. C’est une méthode agile : on corrige la trajectoire souvent plutôt qu’à la fin."
      ],
      voir: "projet-si",
      pas: "le cycle en V, où l’on conçoit tout avant de construire ; Scrum avance par petites livraisons."
    },
    {
      id: "open-data", terme: "Données ouvertes (open data)", domaine: "Data",
      aka: ["open data", "données ouvertes", "données publiques", "data.gouv"],
      une: "Des données publiées par une organisation, souvent publique, que chacun peut librement consulter et réutiliser.",
      etapes: [
        "Administrations et collectivités produisent beaucoup de données : horaires, budgets, qualité de l’air, localisation d’équipements.",
        "Plutôt que de les garder, elles les publient en libre accès, dans des formats que n’importe quel programme sait lire.",
        "Chacun peut alors les télécharger, les croiser et les réutiliser, y compris pour créer une application ou un service.",
        "Ce sont des données qui ne concernent pas des personnes identifiables : l’ouverture ne contourne pas la protection de la vie privée."
      ],
      voir: "donnees-structurees",
      pas: "l’open source, qui concerne du code de logiciel ; l’open data concerne des données."
    },
    {
      id: "rgpd", terme: "RGPD", domaine: "Data",
      aka: ["rgpd", "gdpr", "règlement général sur la protection des données", "cnil", "protection des données"],
      une: "Le règlement européen qui encadre ce qu’une organisation a le droit de faire avec les données personnelles.",
      etapes: [
        "Une entreprise collecte des noms, des e-mails, des achats : ce sont des informations sur des personnes réelles.",
        "Le RGPD impose de dire pourquoi on les collecte, de n’en garder que le nécessaire et de les protéger.",
        "Chaque personne conserve des droits : savoir ce qui est détenu sur elle, le faire corriger, le faire effacer.",
        "En cas de manquement, l’autorité de contrôle peut sanctionner. Il s’applique dès qu’on traite les données de personnes en Europe."
      ],
      voir: "rgpd",
      pas: "la sécurité informatique, qui protège les données des intrusions ; le RGPD encadre ce qu’on a le droit d’en faire."
    },
    {
      id: "ssd", terme: "SSD et disque dur", domaine: "Informatique",
      aka: ["ssd", "disque dur", "hdd", "stockage", "disque"],
      une: "Les deux grandes manières de garder ses fichiers même quand l’ordinateur est éteint.",
      etapes: [
        "Un ordinateur éteint perd sa mémoire vive. Les fichiers, eux, doivent être rangés ailleurs : sur un disque.",
        "Le disque dur classique enregistre sur des plateaux qui tournent, lus par une tête mobile, comme un tourne-disque.",
        "Le SSD n’a aucune pièce en mouvement : il garde l’information dans des puces. Il est en général bien plus rapide et plus résistant aux chocs.",
        "Le disque dur coûte souvent moins cher pour une même capacité. Dans les deux cas, un disque peut tomber en panne : il faut une sauvegarde."
      ],
      voir: "ordinateur",
      pas: "la mémoire vive, qui sert à travailler et s’efface à l’extinction ; le disque, lui, conserve."
    },
    {
      id: "no-code", terme: "No-code et low-code", domaine: "SI",
      aka: ["no-code", "low-code", "nocode", "lowcode", "sans code", "développement visuel"],
      une: "Des outils qui permettent de construire une application en assemblant des blocs, avec peu ou pas de programmation.",
      etapes: [
        "Pour un besoin simple, comme un formulaire ou un suivi de demandes, attendre un développeur peut prendre des mois.",
        "Le no-code propose des blocs prêts à l’emploi : on glisse, on relie, on règle, sans écrire de code.",
        "Le low-code fait de même mais laisse la place à un peu de programmation pour les cas particuliers.",
        "C’est rapide pour un besoin ciblé. Mais sans cadrage, chacun crée son outil dans son coin : un risque de shadow IT."
      ],
      voir: "no-code",
      pas: "le développement classique, où tout s’écrit en code ; ici on assemble des composants existants."
    },
    {
      id: "ocr", terme: "OCR (reconnaissance de texte)", domaine: "IA",
      aka: ["ocr", "reconnaissance de caractères", "reconnaissance de texte", "numérisation", "scan"],
      une: "La technique qui lit le texte d’une image ou d’un scan et le transforme en vrai texte qu’on peut copier et chercher.",
      etapes: [
        "Une facture scannée est une photo : l’ordinateur y voit des pixels, pas des mots.",
        "L’OCR repère les zones de texte, puis reconnaît chaque lettre d’après sa forme.",
        "Il rend alors un texte réel : on peut le copier, le chercher, le ranger dans une base.",
        "Il peut se tromper sur une écriture manuscrite ou un scan flou : un contrôle humain reste utile pour les cas importants."
      ],
      voir: "donnees-structurees",
      pas: "un simple PDF de texte, qui contient déjà du texte ; l’OCR sert quand il n’y a que l’image."
    },
    {
      id: "compression", terme: "Compression de fichier", domaine: "Informatique",
      aka: ["compression", "zip", "compresser", "décompresser", "rar", "jpeg", "mp3"],
      une: "Une façon de réécrire un fichier pour qu’il prenne moins de place, sans changer ce qu’il raconte.",
      etapes: [
        "Un fichier contient beaucoup de répétitions : la même lettre, la même couleur de pixel, le même mot.",
        "Plutôt que de tout recopier, on note une fois le motif et combien de fois il revient.",
        "Sans perte (zip), le fichier se reconstitue à l’identique. Avec perte (jpeg, mp3), on abandonne des détails que l’œil ou l’oreille remarquent peu.",
        "Un fichier déjà compressé se compresse très mal de nouveau : on ne gagne qu’une fois."
      ],
      voir: "compression",
      pas: "le chiffrement, qui rend un fichier illisible sans clé ; la compression, elle, ne cache rien."
    },
    {
      id: "hachage", terme: "Hachage (hash)", domaine: "Réseau",
      aka: ["hash", "hachage", "empreinte", "haché", "sha", "md5"],
      une: "Une fonction qui transforme n’importe quel texte en une courte empreinte, impossible à remonter vers l’original.",
      etapes: [
        "Pour vérifier un mot de passe, un site sérieux préfère ne pas le conserver tel quel.",
        "Il le passe dans une fonction de hachage, qui produit une suite de caractères de taille fixe : l’empreinte.",
        "Le même texte donne toujours la même empreinte, mais on ne sait pas refaire le chemin inverse. Un seul caractère changé, et l’empreinte devient totalement différente.",
        "À la connexion, le site compare l’empreinte de ce que vous tapez avec celle qu’il garde. Même usage pour vérifier qu’un fichier n’a pas été altéré."
      ],
      voir: "mots-de-passe",
      pas: "le chiffrement, qui se défait avec la bonne clé ; un hash, lui, ne se défait pas."
    },
    {
      id: "gouvernance-donnees", terme: "Gouvernance des données", domaine: "Data",
      aka: ["gouvernance", "data gouvernance", "gouvernance data", "responsable de donnée", "data owner"],
      une: "Les règles du jeu qui disent qui possède une donnée, qui peut la modifier, et ce qui fait foi.",
      etapes: [
        "Sans règle, chaque service garde sa propre version d’un même chiffre, et deux tableaux se contredisent.",
        "On désigne pour chaque donnée un responsable, et on écrit une définition unique : qu’appelle-t-on un « client actif » ?",
        "On fixe aussi qui a le droit de la lire, de la corriger, et combien de temps on la garde.",
        "Ce n’est pas un outil mais une organisation : sans personnes responsables, le meilleur logiciel n’y change rien."
      ],
      voir: "gouvernance-data",
      pas: "la qualité des données, qui mesure si elles sont justes ; la gouvernance fixe qui en répond."
    },
    {
      id: "conduite-changement", terme: "Conduite du changement", domaine: "SI",
      aka: ["conduite du changement", "accompagnement du changement", "adoption", "change management", "formation"],
      une: "Tout ce qu’on fait pour que les gens utilisent vraiment le nouvel outil, pas seulement qu’il soit installé.",
      etapes: [
        "Un nouvel outil livré du jour au lendemain est souvent contourné : les habitudes sont plus fortes qu’un logiciel.",
        "On commence par expliquer pourquoi on change et ce que chacun y gagne, avant de dire comment.",
        "On forme, on associe des utilisateurs relais, on écoute les blocages et on les corrige.",
        "On mesure l’usage réel après la mise en service. Un projet n’est réussi que quand l’outil est adopté."
      ],
      voir: "conduite-changement",
      pas: "la gestion de projet, qui livre l’outil ; la conduite du changement le fait adopter."
    },
    {
      id: "parametres", terme: "Paramètres d’un modèle", domaine: "IA",
      aka: ["paramètres", "parametres", "poids", "weights", "milliards de paramètres"],
      une: "Les réglages internes d’un modèle, qu’il ajuste en apprenant et qui contiennent tout ce qu’il « sait ».",
      etapes: [
        "Un réseau de neurones est un grand nombre de petits curseurs, qui pèsent chacun un peu dans la décision finale.",
        "Ces curseurs sont les paramètres, ou poids. Au départ, ils sont réglés au hasard et le modèle répond n’importe quoi.",
        "Pendant l’entraînement, on les ajuste très légèrement, des millions de fois, pour réduire les erreurs.",
        "Un modèle « à plusieurs milliards de paramètres » en a donc autant de curseurs : plus il y en a, plus il demande de calcul et de mémoire."
      ],
      voir: "reseau-neurones",
      pas: "la température, que l’on règle à l’usage ; les paramètres, eux, se fixent à l’entraînement."
    },
    {
      id: "dhcp", terme: "DHCP", domaine: "Réseau",
      aka: ["dhcp", "attribution automatique", "bail", "adresse automatique"],
      une: "Le service qui donne automatiquement une adresse IP à chaque appareil qui se connecte au réseau.",
      etapes: [
        "Pour parler sur un réseau, un appareil a besoin d’une adresse IP. En saisir une à la main sur chaque téléphone serait fastidieux et source d’erreurs.",
        "À sa connexion, l’appareil lance un appel à la cantonade : « je viens d’arriver, quelqu’un a une adresse pour moi ? »",
        "Le service DHCP, souvent logé dans la box, répond en lui prêtant une adresse libre, pour une durée limitée appelée bail.",
        "Quand l’appareil part ou que le bail expire, l’adresse revient dans la réserve et peut servir à un autre. C’est pourquoi l’adresse d’un téléphone change d’un réseau à l’autre."
      ],
      voir: "adresse-ip",
      pas: "le DNS, qui traduit un nom de site en adresse ; le DHCP, lui, distribue les adresses des appareils."
    },
    {
      id: "few-shot", terme: "Few-shot (apprendre par l’exemple)", domaine: "IA",
      aka: ["few-shot", "few shot", "exemples", "zero-shot", "one-shot", "prompt avec exemples"],
      une: "Glisser quelques exemples dans sa demande pour montrer à l’IA le résultat attendu.",
      etapes: [
        "Décrire en mots le format voulu est parfois flou : « fais un résumé court » peut vouloir dire dix mots comme cent.",
        "On ajoute alors, dans la demande, deux ou trois exemples complets : une entrée, et la réponse idéale correspondante.",
        "Le modèle repère la forme commune et la reproduit pour la nouvelle entrée, sans aucun réentraînement.",
        "Sans exemple, on parle de zero-shot. Pour un format précis ou un ton particulier, quelques exemples valent souvent mieux qu’une longue explication."
      ],
      voir: "prompt",
      pas: "le fine-tuning, qui modifie le modèle ; avec des exemples dans la demande, le modèle ne change pas et l’effet disparaît à la fin de la conversation."
    },
    {
      id: "valeur-aberrante", terme: "Valeur aberrante (outlier)", domaine: "Data",
      aka: ["valeur aberrante", "outlier", "aberration", "valeur extrême", "point aberrant"],
      une: "Une valeur très éloignée des autres, qui peut être une erreur de saisie comme un fait réel et important.",
      etapes: [
        "Dans une liste d’âges de clients, un « 250 » saute aux yeux : il n’a pas la même allure que les autres.",
        "C’est une valeur aberrante. Elle fausse les calculs : une seule peut tirer une moyenne très loin de la réalité.",
        "Avant de la supprimer, on cherche d’où elle vient : faute de frappe, capteur déréglé, ou événement réel et rare, comme une fraude.",
        "Le piège est de l’effacer par réflexe : on perd parfois justement l’information la plus utile. On la corrige si c’est une erreur, on la garde si elle est vraie."
      ],
      voir: "graphique-trompeur",
      pas: "un doublon, qui est la même ligne répétée ; la valeur aberrante est une ligne unique mais anormale."
    },
    {
      id: "bac-a-sable", terme: "Bac à sable (sandbox)", domaine: "Informatique",
      aka: ["bac à sable", "sandbox", "isolation", "environnement isolé", "sandboxing"],
      une: "Un espace clos où l’on fait tourner un programme sans qu’il puisse toucher au reste de la machine.",
      etapes: [
        "Ouvrir un fichier ou lancer un programme inconnu est risqué : s’il est malveillant, il peut abîmer ou espionner tout le reste.",
        "On le place donc dans une enceinte fermée, comme un enfant dans un bac à sable : il peut y jouer, mais pas en sortir.",
        "À l’intérieur, il n’a accès qu’à un petit espace réservé : pas à vos fichiers, pas aux autres programmes.",
        "Navigateurs, téléphones et outils d’analyse de virus s’en servent. Aucune enceinte n’est parfaite : c’est une couche de protection de plus, pas une garantie absolue."
      ],
      voir: "cybersecurite",
      pas: "un environnement de test, fait pour essayer sans risque un projet ; le bac à sable sert surtout à contenir un programme dangereux."
    },
    {
      id: "pixel", terme: "Pixel (résolution)", domaine: "Informatique",
      aka: ["pixel", "pixels", "résolution", "définition d’écran", "full hd", "4k"],
      une: "Le plus petit point d’une image numérique : une image n’est qu’une mosaïque de pixels.",
      etapes: [
        "Une photo affichée à l’écran semble continue. Pourtant, en zoomant beaucoup, on voit apparaître de petits carrés.",
        "Chaque carré est un pixel : un point qui ne porte qu’une seule couleur, codée par des nombres (le dosage de rouge, de vert et de bleu).",
        "La résolution est le nombre de pixels de l’image, en largeur et en hauteur. Plus il y en a, plus les détails sont fins.",
        "Plus de pixels, c’est aussi un fichier plus lourd. Agrandir une petite image ne crée aucun détail : on étire les mêmes pixels, elle devient floue."
      ],
      voir: "binaire",
      pas: "la taille de l’écran, qui se mesure en centimètres ; la résolution compte, elle, les points affichés."
    },
    {
      id: "ping", terme: "Ping", domaine: "Réseau",
      aka: ["ping", "test de connexion", "temps de réponse", "ms"],
      une: "Un petit message envoyé à une machine pour savoir si elle répond, et en combien de temps.",
      etapes: [
        "Un site ne s’ouvre pas. Est-ce votre connexion, ou la machine en face qui est en panne ? Il faut un moyen de tester.",
        "Le ping envoie un tout petit message à l’adresse visée, comme on appelle « Allô ? » dans une pièce voisine.",
        "Si la machine est joignable, elle renvoie aussitôt un accusé de réception. On mesure le temps de l’aller-retour, en millisecondes.",
        "Pas de réponse ne prouve pas toujours une panne : certaines machines sont réglées pour ne pas répondre. Un temps court est un bon signe de réactivité."
      ],
      voir: "paquets",
      pas: "le débit, qui mesure la quantité transmise par seconde ; le ping mesure le temps de réponse."
    },
    {
      id: "correlation-causalite", terme: "Corrélation et causalité", domaine: "Data",
      aka: ["corrélation", "causalité", "correlation", "cause", "lien statistique"],
      une: "Deux chiffres qui varient ensemble ne prouvent pas que l’un provoque l’autre.",
      etapes: [
        "Les données montrent que, quand les ventes de glaces montent, les coups de soleil montent aussi.",
        "Cette façon de varier ensemble s’appelle une corrélation : un lien constaté entre deux séries de chiffres.",
        "Mais manger des glaces ne brûle pas la peau. Une troisième cause, ici le beau temps, agit sur les deux à la fois.",
        "Avant de conclure qu’une chose en cause une autre, on cherche la cause cachée, ou on teste en changeant un seul facteur, comme dans un test A/B."
      ],
      voir: "graphique-trompeur",
      pas: "le test A/B, qui sert justement à établir une cause en ne changeant qu’une seule chose."
    },
    {
      id: "moindre-privilege", terme: "Principe du moindre privilège", domaine: "SI",
      aka: ["moindre privilège", "droits d’accès", "habilitations", "accès minimal", "least privilege"],
      une: "Donner à chaque personne seulement les accès dont elle a besoin pour son travail, et rien de plus.",
      etapes: [
        "Dans une entreprise, si tout le monde peut ouvrir tous les dossiers, une erreur ou un compte piraté touche tout à la fois.",
        "Le principe est simple : chaque personne reçoit les droits strictement nécessaires à sa mission, comme une clé qui n’ouvre que votre bureau.",
        "Les droits suivent la fonction. Quand quelqu’un change de poste ou quitte l’entreprise, on retire les accès devenus inutiles.",
        "Un compte piraté ou une maladresse fait alors moins de dégâts. Le piège est d’accumuler des droits au fil des années sans jamais les retirer."
      ],
      voir: "cybersecurite",
      pas: "l’authentification, qui vérifie qui vous êtes ; le moindre privilège décide ce que vous avez le droit de faire."
    },
    {
      id: "modele-diffusion", terme: "Modèle de diffusion (images IA)", domaine: "IA",
      aka: ["diffusion", "modèle de diffusion", "génération d’images", "image par ia", "text-to-image"],
      une: "Le type d’IA qui crée une image en partant d’un brouillard de points et en le nettoyant peu à peu.",
      etapes: [
        "Pour apprendre, on prend de vraies images et on y ajoute du bruit, comme de la neige sur un écran, jusqu’à ce qu’il ne reste plus rien de lisible.",
        "Le modèle s’entraîne à faire l’inverse : deviner, à chaque niveau de bruit, ce qu’il faut retirer pour se rapprocher d’une vraie image.",
        "Pour créer, on part d’un bruit pur et on le nettoie en plusieurs passes. Votre texte de demande oriente ce qui émerge.",
        "Le résultat ressemble à une image, sans copier une image précise. D’où des détails parfois absurdes : des mains aux doigts en trop, par exemple."
      ],
      voir: "reseau-neurones",
      pas: "un modèle de langage, qui prédit le texte mot après mot ; la diffusion produit une image en la débruitant."
    },
    {
      id: "json", terme: "JSON", domaine: "Data",
      aka: ["json", "format json", "format d’échange", "données api"],
      une: "Un format de texte simple pour écrire des données de façon que deux logiciels se comprennent.",
      etapes: [
        "Pour qu’un logiciel envoie des données à un autre, il faut qu’ils s’accordent sur une façon de les écrire, comme une fiche à remplir.",
        "JSON est une de ces façons : du texte lisible où chaque information porte une étiquette, par exemple « prénom » suivi de « Léa ».",
        "On y range des étiquettes, des valeurs, des listes, et des fiches dans des fiches. Un humain peut le lire, et un programme sait le découper.",
        "C’est le format le plus courant des échanges entre applications, notamment dans les API. Une virgule oubliée suffit à le rendre illisible pour la machine."
      ],
      voir: "api",
      pas: "le CSV, qui range des lignes dans un tableau plat ; JSON sait imbriquer des informations les unes dans les autres."
    },
    {
      id: "certificat-numerique", terme: "Certificat numérique", domaine: "Réseau",
      aka: ["certificat", "certificat ssl", "certificat tls", "certificat de site", "autorité de certification"],
      une: "Une pièce d’identité numérique qui prouve qu’un site est bien celui qu’il prétend être.",
      etapes: [
        "Quand vous vous connectez à un site, comment savoir que ce n’est pas un imposteur qui a recopié sa page ?",
        "Le site présente un certificat : une carte d’identité numérique qui contient son nom et une clé servant à chiffrer les échanges.",
        "Cette carte est délivrée par un organisme de confiance, l’autorité de certification. Votre navigateur connaît ces organismes et vérifie la signature.",
        "Si tout concorde, le cadenas s’affiche. Un certificat périmé ou mal émis déclenche un avertissement : mieux vaut ne pas passer outre."
      ],
      voir: "https-cadenas",
      pas: "le mot de passe, qui prouve qui vous êtes au site ; le certificat prouve, lui, qui est le site."
    },
    {
      id: "apprentissage-renforcement", terme: "Apprentissage par renforcement", domaine: "IA",
      aka: ["renforcement", "reinforcement learning", "récompense", "essai erreur"],
      une: "Une IA qui apprend par essais et erreurs, guidée par des récompenses plutôt que par des exemples corrigés.",
      etapes: [
        "Pour apprendre à un chien un tour, on ne lui explique rien : on le félicite quand il fait juste.",
        "Ici, l’IA agit dans un environnement, par exemple un jeu, et reçoit un score après chaque action : plus il est haut, mieux c’est.",
        "Au départ elle essaie presque au hasard. Peu à peu, elle retient les actions qui rapportent et les répète plus souvent.",
        "Cela fonctionne bien quand on peut mesurer la réussite. Le piège : si la récompense est mal choisie, l’IA trouve des astuces qui font monter le score sans faire ce qu’on voulait."
      ],
      voir: "machine-learning",
      pas: "l’apprentissage supervisé, où l’on montre des exemples avec la bonne réponse ; ici, personne ne donne la réponse, seulement une note."
    },
    {
      id: "build-run", terme: "Build et Run", domaine: "SI",
      aka: ["build", "run", "projet et exploitation", "phase de run", "maintien en conditions opérationnelles"],
      une: "Les deux temps de la vie d’un outil informatique : le construire, puis le faire fonctionner au quotidien.",
      etapes: [
        "Un nouvel outil n’est pas fini le jour de sa livraison : quelqu’un devra aussi le faire tourner, le surveiller et le dépanner.",
        "Le build, c’est la construction : on conçoit, on développe, on teste, comme un chantier avec un début et une fin.",
        "Le run, c’est l’exploitation : le support, les mises à jour, les sauvegardes, la surveillance. Il dure tant que l’outil sert.",
        "Le run coûte souvent plus cher que le build sur la durée. Penser à lui dès la conception évite les mauvaises surprises."
      ],
      voir: "projet-si",
      pas: "la TMA, qui est une façon de confier une partie du run ; build et run décrivent le cycle, pas qui s’en charge."
    },
    {
      id: "url", terme: "URL (adresse web)", domaine: "Réseau",
      aka: ["url", "adresse web", "lien", "adresse d’un site", "https://"],
      une: "L’adresse complète d’une page web, qui dit comment, où et quoi aller chercher.",
      etapes: [
        "Pour trouver une page parmi des milliards, il faut une adresse précise, comme pour une maison.",
        "Une URL en contient plusieurs morceaux : le protocole (« https »), le nom du site, puis le chemin de la page voulue.",
        "Le navigateur lit le nom du site pour trouver le serveur, puis lui demande la page désignée par le chemin.",
        "Un lien n’est qu’une URL cachée derrière un texte. Lire le nom du site dans l’URL est le meilleur réflexe contre les faux liens."
      ],
      voir: "url",
      pas: "l’adresse IP, qui désigne une machine par des chiffres ; l’URL désigne une page, par un nom lisible."
    },
    {
      id: "base-de-donnees", terme: "Base de données", domaine: "Data",
      aka: ["base de donnees", "bdd", "database", "sgbd", "table", "tables"],
      une: "Un endroit organisé où l’on range des informations pour les retrouver, les trier et les modifier vite.",
      etapes: [
        "Un classeur où chaque feuille est jetée au hasard devient vite inutilisable dès qu’il grossit.",
        "Une base de données range les informations selon une structure fixée : des tables, des lignes, des colonnes, comme des tableurs reliés entre eux.",
        "Un logiciel dédié, le système de gestion de base de données, reçoit les demandes, retrouve les informations et évite que deux personnes ne s’écrasent.",
        "Presque tout outil d’entreprise en repose sur une. Sa qualité dépend de la rigueur avec laquelle on la remplit."
      ],
      voir: "base-de-donnees",
      pas: "un tableur, pensé pour une personne et peu de lignes ; une base gère de gros volumes et de nombreux utilisateurs en même temps."
    },
    {
      id: "algorithme", terme: "Algorithme", domaine: "Informatique",
      aka: ["algorithme", "algo", "recette", "suite d’instructions"],
      une: "Une suite d’instructions précises qui mène d’un point de départ à un résultat.",
      etapes: [
        "Pour qu’un ordinateur fasse quelque chose, il faut lui dire exactement quoi faire, dans quel ordre, sans rien laisser deviner.",
        "Un algorithme est cette suite d’étapes, comme une recette de cuisine : des ingrédients en entrée, des gestes dans l’ordre, un plat à la sortie.",
        "On l’écrit d’abord comme une idée, puis un programmeur le traduit dans un langage que la machine exécute.",
        "Le même résultat peut s’obtenir par des algorithmes différents ; certains sont bien plus rapides que d’autres."
      ],
      voir: "algorithme",
      pas: "un programme, qui est la traduction d’un algorithme dans un langage précis ; l’algorithme est l’idée, le programme est son texte."
    },
    {
      id: "classification-regression", terme: "Classification et régression", domaine: "IA",
      aka: ["classification", "régression", "regression", "classer", "prédire un nombre"],
      une: "Les deux grandes tâches d’un modèle de prédiction : choisir une catégorie, ou estimer un nombre.",
      etapes: [
        "Quand on demande à une IA de prédire quelque chose, on attend soit une étiquette, soit une quantité.",
        "La classification répond par une catégorie : ce courriel est-il un spam, cette photo montre-t-elle un chat ou un chien ?",
        "La régression répond par un nombre : le prix probable d’un logement, la durée d’un trajet, les ventes du mois prochain.",
        "Le choix dépend de la question. Se tromper d’une tâche à l’autre donne des résultats peu utilisables."
      ],
      voir: "machine-learning",
      pas: "le clustering, qui regroupe des éléments sans catégories fixées à l’avance, donc sans réponse attendue."
    },
    {
      id: "microservices", terme: "Microservices", domaine: "Informatique",
      aka: ["micro-services", "architecture microservices", "monolithe"],
      une: "Une façon de construire un logiciel en petits services indépendants plutôt qu’en un seul bloc.",
      etapes: [
        "Dans un logiciel construit d’un seul bloc, le moindre changement oblige à tout tester et à tout relivrer.",
        "On le découpe alors en petits services, chacun chargé d’une seule tâche : le paiement, le catalogue, les notifications.",
        "Chaque service peut être modifié, relancé ou renforcé seul, et ils se parlent entre eux par des échanges bien définis.",
        "C’est souple, mais plus de pièces à surveiller et à faire dialoguer : pour un petit projet, le bloc unique reste souvent plus simple."
      ],
      pas: "le monolithe, qui est le logiciel d’un seul bloc ; les microservices en sont le découpage."
    },
    {
      id: "zero-trust", terme: "Zero trust", domaine: "Réseau",
      aka: ["confiance zéro", "zéro confiance", "zero-trust"],
      une: "Un principe de sécurité : ne faire confiance à personne par défaut, même à l’intérieur du réseau, et tout vérifier à chaque accès.",
      etapes: [
        "Longtemps, on a protégé l’entreprise comme un château : une fois la porte franchie, on circulait librement.",
        "Le zero trust renverse l’idée : être dans le réseau ne prouve rien, chaque personne et chaque appareil doivent se justifier à chaque demande.",
        "On vérifie qui demande, depuis quel appareil, et pour quelle ressource précise, puis on n’ouvre que cet accès-là.",
        "Un intrus qui entre n’a plus les clés de tout. Le prix : plus de contrôles à mettre en place et à entretenir."
      ],
      voir: "cybersecurite",
      pas: "le pare-feu, qui garde la porte d’entrée ; le zero trust contrôle aussi à l’intérieur."
    },
    {
      id: "vendor-lock-in", terme: "Verrouillage fournisseur", domaine: "SI",
      aka: ["vendor lock-in", "lock-in", "dépendance fournisseur", "enfermement"],
      une: "La situation où changer de fournisseur coûte si cher qu’on reste chez lui, même quand il ne convient plus.",
      etapes: [
        "On choisit un outil, on y met ses données, ses habitudes, ses liens avec d’autres outils.",
        "Avec le temps, tout cela est écrit dans la forme propre à ce fournisseur : formats, fonctions, procédures.",
        "Partir demande alors de tout récupérer, convertir et réapprendre : le coût du départ devient un frein, et le fournisseur peut augmenter ses prix.",
        "On limite le risque en choisissant des formats ouverts, en vérifiant qu’on peut exporter ses données, et en gardant une porte de sortie prévue."
      ],
      voir: "cloud-saas",
      pas: "un contrat long, qui engage sur une durée ; le verrouillage vient de la difficulté technique de partir, même sans engagement."
    },
    {
      id: "transaction-bdd", terme: "Transaction (base de données)", domaine: "Data",
      aka: ["transaction", "acid", "commit", "rollback", "annuler"],
      une: "Un groupe d’opérations sur une base de données qui réussissent toutes ensemble, ou sont toutes annulées.",
      etapes: [
        "Un virement se fait en deux gestes : retirer d’un compte, ajouter à l’autre. S’arrêter au milieu perdrait l’argent.",
        "La base regroupe ces gestes en une transaction : un paquet indivisible, traité comme une seule opération.",
        "Si tout se passe bien, la transaction est validée et les changements deviennent visibles. Sinon, elle est annulée et la base revient à son état d’avant.",
        "C’est ce qui garantit des données cohérentes malgré les pannes et les accès simultanés ; c’est vital pour l’argent et les stocks."
      ],
      voir: "transaction",
      pas: "une sauvegarde, qui permet de revenir à un état ancien ; la transaction protège chaque opération en cours, à l’instant même."
    },
    {
      id: "debogage", terme: "Débogage", domaine: "Informatique",
      aka: ["debug", "déboguer", "débugger", "corriger un bug", "trouver une erreur"],
      une: "La chasse à la cause d’un bug dans un programme, pour le corriger.",
      etapes: [
        "Un programme se comporte autrement que prévu : un calcul faux, un bouton muet, un plantage.",
        "On commence par reproduire le problème à coup sûr : sans cela, impossible de savoir si on l’a réparé.",
        "On resserre ensuite la zone suspecte, en relisant les messages d’erreur et en observant ce que fait le programme étape par étape.",
        "Une fois la cause trouvée, on corrige, puis on vérifie que le défaut a disparu sans en créer un autre."
      ],
      voir: "code-source",
      pas: "le test, qui cherche à provoquer des erreurs avant la mise en service ; le débogage intervient quand une erreur est déjà constatée."
    },
    {
      id: "tableau-croise", terme: "Tableau croisé dynamique", domaine: "Data",
      aka: ["tcd", "pivot", "table pivot", "tableau croisé"],
      une: "Un tableau qui résume une longue liste en regroupant les lignes selon deux critères de votre choix.",
      etapes: [
        "Vous avez des milliers de lignes de ventes, impossibles à lire telles quelles.",
        "Vous choisissez ce qui va en lignes (les produits), ce qui va en colonnes (les mois) et ce qu’on calcule (la somme des ventes).",
        "Le tableur regroupe tout seul et remplit chaque case : le total d’un produit pour un mois donné.",
        "Changer d’angle ne demande qu’un glisser-déposer. Le résumé n’est exact que si la liste de départ l’est."
      ],
      voir: "bi-tableau-de-bord",
      pas: "un tableau de bord, qui présente des indicateurs choisis à l’avance ; le tableau croisé sert à explorer en regroupant à la demande."
    },
    {
      id: "deni-service", terme: "Déni de service (DDoS)", domaine: "Réseau",
      aka: ["ddos", "dos", "saturation", "attaque par saturation"],
      une: "Une attaque qui submerge un service de demandes jusqu’à ce qu’il ne réponde plus aux vrais utilisateurs.",
      etapes: [
        "Un site répond à un nombre limité de demandes à la fois, comme un guichet.",
        "L’attaquant envoie un flot de fausses demandes, souvent depuis de nombreuses machines infectées à la fois, ce qui le rend difficile à bloquer.",
        "Le service, occupé à répondre aux fausses demandes, n’a plus de place pour les vraies : il ralentit ou tombe.",
        "On se défend en filtrant le trafic suspect et en répartissant la charge. Rien n’est volé : le but est de bloquer, pas d’entrer."
      ],
      voir: "load-balancer",
      pas: "le rançongiciel, qui chiffre vos données pour réclamer de l’argent ; le déni de service ne touche pas aux données, il rend seulement le service injoignable."
    },
    {
      id: "ticket-support", terme: "Ticket (support)", domaine: "SI",
      aka: ["ticket", "incident", "helpdesk", "service desk", "demande de support"],
      une: "La fiche qui suit une demande d’aide, de sa création à sa résolution.",
      etapes: [
        "Quand quelque chose ne marche pas, un message oral ou un courriel égaré finit vite oublié.",
        "On crée un ticket : une fiche qui décrit le problème, la personne concernée et l’urgence.",
        "La fiche est confiée à quelqu’un, qui note ce qu’il fait ; si besoin elle passe à un spécialiste, sans que le demandeur ait à tout répéter.",
        "À la résolution, le ticket est clos. L’historique des tickets révèle les pannes qui reviennent et ce qu’il faut corriger à la source."
      ],
      voir: "support",
      pas: "un courriel, qui n’a ni responsable désigné ni état d’avancement ; le ticket garantit que la demande est suivie."
    },
    {
      id: "ingenierie-sociale", terme: "Ingénierie sociale", domaine: "Réseau",
      aka: ["social engineering", "arnaque", "manipulation", "fraude au président"],
      une: "Tromper une personne, plutôt qu’une machine, pour obtenir un accès ou une information.",
      etapes: [
        "Les systèmes les mieux protégés ont un point faible : les personnes qui les utilisent.",
        "L’attaquant se fait passer pour quelqu’un de confiance : un collègue, un fournisseur, le support informatique.",
        "Il joue sur l’urgence, la peur ou l’envie d’aider pour obtenir un mot de passe, un virement ou un clic.",
        "Le meilleur réflexe est de vérifier par un autre canal, surtout quand on vous presse d’agir vite."
      ],
      voir: "cybersecurite",
      pas: "le hameçonnage, qui en est une forme par message de masse ; l’ingénierie sociale couvre aussi le téléphone et la rencontre en personne."
    },
    {
      id: "reseau-local", terme: "Réseau local (LAN)", domaine: "Réseau",
      aka: ["lan", "wan", "réseau local", "réseau étendu"],
      une: "Le réseau qui relie les appareils d’un même lieu, comme une maison ou un bureau.",
      etapes: [
        "Dans un bureau, les ordinateurs, imprimantes et téléphones doivent pouvoir se parler entre eux.",
        "On les relie par câble ou Wi-Fi à un même équipement : cela forme un réseau local.",
        "Les échanges internes y sont rapides et restent chez vous ; seule la box ouvre la porte vers Internet.",
        "Entre plusieurs sites éloignés, on parle de réseau étendu : c’est le même principe, sur de plus grandes distances."
      ],
      voir: "wifi-box",
      pas: "Internet, qui est un réseau de réseaux ; le réseau local n’en est qu’une petite partie, la vôtre."
    },
    {
      id: "csv", terme: "CSV", domaine: "Data",
      aka: ["csv", "fichier csv", "valeurs séparées par des virgules", "export"],
      une: "Un fichier texte tout simple qui range un tableau : une ligne par ligne, des séparateurs entre les colonnes.",
      etapes: [
        "Pour échanger un tableau entre deux logiciels, il faut un format que tous comprennent.",
        "Le CSV écrit chaque ligne du tableau sur une ligne de texte, et sépare les cases par un signe, souvent une virgule ou un point-virgule.",
        "Il s’ouvre dans un tableur, un éditeur de texte ou presque n’importe quel outil de données.",
        "Il ne contient ni mise en forme, ni formule, ni graphique : seulement les valeurs. Attention aux accents mal lus."
      ],
      voir: "fichiers",
      pas: "un fichier de tableur, qui garde aussi formules et mise en forme ; le CSV est plus léger et plus universel."
    },
    {
      id: "modele-fondation", terme: "Modèle de fondation", domaine: "IA",
      aka: ["foundation model", "modèle de base", "modèle général"],
      une: "Un grand modèle entraîné une fois sur énormément de données, puis réutilisé pour de nombreux usages.",
      etapes: [
        "Entraîner un modèle depuis zéro coûte très cher : il faut des données immenses et beaucoup de puissance.",
        "On le fait donc une seule fois, sur des données très variées, pour obtenir un modèle généraliste.",
        "Ce modèle sert ensuite de base : on l’utilise tel quel, ou on l’adapte à un métier précis.",
        "Ses forces comme ses défauts se transmettent à tout ce qui est construit dessus."
      ],
      voir: "entrainement-inference",
      pas: "un modèle spécialisé, bâti pour une seule tâche ; le modèle de fondation est le point de départ commun de plusieurs d’entre eux."
    },
    {
      id: "tableur", terme: "Tableur", domaine: "Data",
      aka: ["excel", "tableur", "feuille de calcul", "spreadsheet"],
      une: "Un logiciel qui range des données en lignes et colonnes et calcule dessus avec des formules.",
      etapes: [
        "Pour compter, trier ou comparer des chiffres, une feuille quadrillée sur papier devient vite pénible.",
        "Un tableur reproduit cette feuille à l’écran : chaque case contient un texte, un nombre ou une formule.",
        "Quand une valeur change, les formules qui en dépendent se recalculent seules.",
        "Très pratique pour un usage personnel ; à plusieurs ou à grande échelle, une base de données prend le relais."
      ],
      voir: "tableur-vs-bdd",
      pas: "une base de données, qui gère de gros volumes et des accès simultanés ; le tableur est fait pour un usage individuel."
    },
    {
      id: "cle-etrangere", terme: "Clé étrangère", domaine: "Data",
      aka: ["foreign key", "clé externe", "lien entre tables"],
      une: "Une colonne qui contient l’identifiant d’une ligne d’une autre table, pour les relier.",
      etapes: [
        "Dans une base, les clients et les commandes sont rangés dans deux tables séparées, pour ne pas tout répéter.",
        "Chaque client a un identifiant unique : sa clé primaire.",
        "Chaque commande porte, dans une colonne, l’identifiant du client concerné : c’est la clé étrangère.",
        "La base peut alors refuser une commande rattachée à un client qui n’existe pas, et la jointure retrouve le lien."
      ],
      voir: "jointure",
      pas: "la clé primaire, qui identifie une ligne dans sa propre table ; la clé étrangère pointe vers la ligne d’une autre."
    },
    {
      id: "sauvegarde-incrementale", terme: "Sauvegarde incrémentale", domaine: "Informatique",
      aka: ["incrémentale", "différentielle", "sauvegarde complète"],
      une: "Une sauvegarde qui ne copie que ce qui a changé depuis la précédente.",
      etapes: [
        "Recopier tous les fichiers chaque nuit prend du temps et beaucoup de place.",
        "On fait d’abord une sauvegarde complète, une fois, comme point de départ.",
        "Ensuite, chaque sauvegarde incrémentale ne copie que les fichiers nouveaux ou modifiés depuis la dernière.",
        "C’est rapide et léger ; pour restaurer, il faut en revanche la complète et toute la chaîne qui suit."
      ],
      voir: "sauvegarde",
      pas: "la sauvegarde complète, qui recopie tout à chaque fois ; elle est plus lourde mais se restaure plus simplement."
    },
    {
      id: "segmentation-reseau", terme: "Segmentation réseau", domaine: "Réseau",
      aka: ["vlan", "segmentation", "cloisonnement", "réseau invité"],
      une: "Découper un réseau en zones séparées pour qu’un problème dans l’une ne gagne pas les autres.",
      etapes: [
        "Sur un réseau où tout communique avec tout, un appareil infecté peut atteindre n’importe quel autre.",
        "On le découpe en zones : par exemple les postes du personnel, les serveurs et le Wi-Fi des visiteurs.",
        "Entre les zones, un équipement ou un pare-feu ne laisse passer que les échanges nécessaires.",
        "Un incident reste alors confiné à sa zone, comme les cloisons d’un navire limitent une voie d’eau."
      ],
      voir: "pare-feu",
      pas: "le pare-feu, qui contrôle les passages ; la segmentation est le découpage qui lui donne des frontières à garder."
    },
    {
      id: "cycle-vie-donnee", terme: "Cycle de vie de la donnée", domaine: "Data",
      aka: ["archivage", "durée de conservation", "rétention", "purge"],
      une: "Les étapes d’une donnée, de sa création à sa suppression ou son archivage.",
      etapes: [
        "Une donnée n’est pas éternelle : elle est créée, utilisée, puis finit par ne plus servir.",
        "Tant qu’elle est utile, elle reste accessible et à jour dans les outils du quotidien.",
        "Ensuite, on l’archive à moindre coût ou on la supprime, selon une durée de conservation fixée à l’avance.",
        "Garder tout, tout le temps, coûte cher et expose à des risques ; le RGPD impose d’ailleurs de ne pas conserver sans raison."
      ],
      voir: "rgpd",
      pas: "la sauvegarde, qui sert à restaurer en cas de perte ; le cycle de vie décide de ce que l’on garde et jusqu’à quand."
    },
    {
      id: "logs", terme: "Journal d’événements (logs)", domaine: "Informatique",
      aka: ["logs", "log", "journal", "fichier de log", "traces"],
      une: "Le carnet de bord qu’un logiciel ou un serveur tient tout seul, ligne après ligne, de ce qui s’est passé.",
      etapes: [
        "Quand une panne survient, personne n’a vu ce qui s’est passé : le logiciel tourne sans témoin.",
        "Alors il note lui-même chaque événement important : une connexion, une erreur, un fichier envoyé, avec l’heure exacte.",
        "Ces lignes s’accumulent dans un fichier : le journal, ou « logs » en anglais.",
        "En cas de problème, on le relit pour reconstituer ce qui s’est passé et trouver la cause."
      ],
      voir: "supervision",
      pas: "la supervision, qui surveille en direct et prévient ; le journal, lui, garde la trace pour comprendre après coup."
    },
    {
      id: "jeu-de-test", terme: "Jeu de test", domaine: "IA",
      aka: ["jeu de test", "test set", "données de test", "évaluation"],
      une: "Des exemples mis de côté pendant l’entraînement, pour vérifier honnêtement ce que l’IA a vraiment appris.",
      etapes: [
        "Interroger un modèle sur les exemples qu’il a déjà vus ne prouve rien : il peut les avoir appris par cœur.",
        "On met donc de côté une partie des exemples, que le modèle ne voit jamais pendant l’entraînement.",
        "À la fin, on lui pose ces questions inédites et on compte ses bonnes réponses.",
        "Ce score est la vraie mesure de sa qualité ; un bon score à l’entraînement et un mauvais au test trahit un surapprentissage."
      ],
      voir: "surapprentissage",
      pas: "le jeu d’entraînement, qui sert à apprendre ; le jeu de test ne sert qu’à noter."
    },
    {
      id: "nat", terme: "NAT (traduction d’adresses)", domaine: "Réseau",
      aka: ["nat", "traduction d’adresses", "adresse privée", "adresse publique"],
      une: "Le mécanisme qui permet à tous les appareils d’une maison de sortir sur Internet avec une seule adresse publique.",
      etapes: [
        "Chez vous, chaque appareil a une adresse interne, que personne d’autre sur Internet ne peut utiliser directement.",
        "Votre box, elle, possède une adresse publique, vue de l’extérieur.",
        "Quand un appareil envoie une demande, la box la fait partir sous son adresse publique et note qui l’a posée.",
        "Quand la réponse revient, la box consulte sa note et la remet au bon appareil."
      ],
      voir: "adresse-ip",
      pas: "le pare-feu, qui filtre ce qui passe ; le NAT traduit les adresses, même si l’effet de bord est de masquer les appareils."
    },
    {
      id: "spof", terme: "Point unique de défaillance", domaine: "SI",
      aka: ["spof", "single point of failure", "maillon faible", "point de défaillance"],
      une: "L’élément dont la panne arrête tout, parce que rien ne peut le remplacer.",
      etapes: [
        "Dans un système, certains éléments ont un double ; d’autres existent en un seul exemplaire.",
        "Si l’un de ceux-là tombe, tout ce qui en dépend s’arrête : c’est le point unique de défaillance.",
        "Il peut être une machine, une ligne Internet, un logiciel, ou même une seule personne qui détient un savoir.",
        "On le repère en se demandant « que se passe-t-il si ceci s’arrête ? », puis on le double : c’est la redondance."
      ],
      voir: "redondance"
    },
    {
      id: "agregation", terme: "Agrégation", domaine: "Data",
      aka: ["agréger", "somme", "moyenne", "regroupement", "group by"],
      une: "Résumer plusieurs lignes en un seul chiffre : une somme, une moyenne, un nombre.",
      etapes: [
        "Mille lignes de ventes ne se lisent pas : on veut savoir « combien en tout ? », ou « combien par mois ? ».",
        "Agréger, c’est regrouper les lignes qui vont ensemble, par mois, par région ou par produit.",
        "Pour chaque groupe, on calcule un résumé : une somme, une moyenne, un minimum, un maximum ou un décompte.",
        "On gagne en lisibilité mais on perd le détail : une moyenne peut cacher de grands écarts."
      ],
      voir: "bi-tableau-de-bord",
      pas: "le filtre, qui retire des lignes ; l’agrégation, elle, garde toutes les lignes mais les résume."
    },
    {
      id: "processeur", terme: "Processeur (CPU)", domaine: "Informatique",
      aka: ["processeur", "cpu", "puce", "coeur", "cœur", "gigahertz"],
      une: "Le composant qui exécute les instructions d’un programme, une par une, à une vitesse vertigineuse.",
      etapes: [
        "Un programme n’est qu’une longue liste d’instructions très simples : additionner, comparer, déplacer une valeur.",
        "Le processeur les lit et les exécute dans l’ordre, des milliards de fois par seconde. Cette cadence se mesure en gigahertz.",
        "Un processeur moderne contient plusieurs cœurs : autant de petits exécutants qui travaillent en parallèle sur des tâches différentes.",
        "Un seul cœur plus rapide aide un programme séquentiel ; plus de cœurs aident quand le travail se découpe. Le reste du confort dépend aussi de la mémoire."
      ],
      voir: "ordinateur",
      pas: "la carte graphique, spécialisée dans un très grand nombre de calculs simples en parallèle ; le processeur est le généraliste."
    },
    {
      id: "gestionnaire-mots-de-passe", terme: "Gestionnaire de mots de passe", domaine: "Réseau",
      aka: ["gestionnaire de mots de passe", "coffre-fort", "password manager", "mot de passe"],
      une: "Un coffre-fort numérique qui retient à votre place un mot de passe différent pour chaque site.",
      etapes: [
        "Retenir un mot de passe solide par site est impossible. Alors on en réutilise un seul, et une fuite sur un site expose tous les autres.",
        "Le gestionnaire génère un mot de passe long et aléatoire pour chaque compte, et le range dans un coffre chiffré.",
        "Une seule phrase secrète, la vôtre, ouvre le coffre. Le gestionnaire remplit ensuite les formulaires à votre place.",
        "Vous n’avez plus qu’un secret à protéger : choisissez-le long, et doublez-le d’une double authentification."
      ],
      voir: "mots-de-passe",
      pas: "le mot de passe enregistré par le navigateur, plus limité ; un vrai gestionnaire fonctionne partout et se verrouille par sa propre phrase secrète."
    },
    {
      id: "donnee-structuree", terme: "Donnée structurée et non structurée", domaine: "Data",
      aka: ["donnée structurée", "non structurée", "données non structurées", "tableau", "texte libre"],
      une: "Une donnée structurée tient dans les cases d’un tableau ; une donnée non structurée, non.",
      etapes: [
        "Un nom, une date, un montant rangés dans des colonnes : on peut les trier, les compter, les additionner.",
        "Ce sont des données structurées : chaque information a sa case, avec un sens connu d’avance.",
        "Un e-mail, une photo, un enregistrement audio ou un contrat ne rentrent dans aucune case. Ce sont des données non structurées.",
        "Elles sont majoritaires dans une entreprise, et plus difficiles à exploiter : il faut d’abord en extraire de la structure."
      ],
      voir: "donnees-structurees",
      pas: "le format du fichier ; un PDF contenant un tableau reste difficile à exploiter, et un fichier texte peut être parfaitement structuré."
    },
    {
      id: "feuille-de-route", terme: "Feuille de route (roadmap)", domaine: "SI",
      aka: ["roadmap", "feuille de route", "plan produit", "planning"],
      une: "Le plan qui dit dans quel ordre, et à peu près quand, un produit ou un projet va évoluer.",
      etapes: [
        "Une équipe a toujours plus d’idées que de temps. Sans plan, on traite ce qui crie le plus fort.",
        "La feuille de route range les grandes évolutions dans l’ordre, par trimestre ou par étape, selon leur valeur et leur urgence.",
        "Elle indique la direction, pas un calendrier garanti : on ne détaille précisément que ce qui est proche.",
        "Elle se relit et se corrige régulièrement, au fil de ce qu’on apprend. Elle sert surtout à s’accorder sur les priorités."
      ],
      voir: "projet-si",
      pas: "le backlog, la liste détaillée du travail à faire ; la feuille de route est la vue d’ensemble qui le guide."
    },
    {
      id: "moteur-recommandation", terme: "Moteur de recommandation", domaine: "IA",
      aka: ["recommandation", "suggestions", "vous aimerez aussi", "filtrage collaboratif"],
      une: "Le système qui devine ce que vous aimeriez voir, lire ou acheter, d’après ce que d’autres ont aimé.",
      etapes: [
        "Un catalogue de milliers de films ou de produits est impossible à parcourir. Il faut en proposer quelques-uns.",
        "Le système garde la trace de ce que chacun regarde, note ou achète.",
        "Il repère les gens aux goûts proches des vôtres, puis vous propose ce que ceux-là ont aimé et que vous n’avez pas encore vu.",
        "Il fonctionne par ressemblance, pas par compréhension : il peut enfermer dans ses habitudes, et il se trompe sur un nouvel utilisateur sans historique."
      ],
      voir: "recommandation"
    },
    {
      id: "blockchain", terme: "Blockchain", domaine: "Data",
      aka: ["chaîne de blocs", "bitcoin", "registre distribué", "crypto"],
      une: "Un registre partagé, recopié chez des milliers de participants, où ce qui est écrit ne peut plus être modifié en douce.",
      etapes: [
        "Un registre classique est tenu par un seul acteur, une banque par exemple : il faut lui faire confiance.",
        "Ici, les écritures sont regroupées en blocs, et chaque bloc contient l’empreinte du précédent : ils forment une chaîne.",
        "Des milliers d’ordinateurs gardent chacun la même copie et se contrôlent entre eux. Modifier un ancien bloc casserait toute la chaîne.",
        "Utile quand plusieurs parties qui ne se font pas confiance partagent un registre ; inutile, et plus lourd, quand une seule organisation peut tenir la base."
      ],
      pas: "le bitcoin, qui n’est qu’une application de la blockchain parmi d’autres."
    },
    {
      id: "iot", terme: "Objets connectés (IoT)", domaine: "Réseau",
      aka: ["iot", "internet des objets", "objet connecté", "capteur"],
      une: "Un objet du quotidien, équipé d’un capteur et d’une connexion, qui envoie ou reçoit des informations par Internet.",
      etapes: [
        "Un thermostat, une montre, une serrure sont d’abord des objets sans lien avec Internet.",
        "On y ajoute un capteur qui mesure, une petite puce et une connexion (wifi, Bluetooth, réseau mobile).",
        "L’objet envoie ses mesures à un service en ligne et peut recevoir des ordres : on règle le chauffage depuis son téléphone.",
        "Chaque objet est une porte d’entrée de plus sur le réseau : mots de passe par défaut à changer, mises à jour à faire."
      ],
      voir: "cybersecurite",
      pas: "un simple appareil électronique : c’est la connexion qui fait l’objet connecté."
    },
    {
      id: "pipeline-donnees", terme: "Pipeline de données", domaine: "Data",
      aka: ["pipeline", "chaîne de traitement", "flux de données", "data pipeline"],
      une: "La chaîne automatique qui emmène les données de leur source jusqu’à l’endroit où on les utilise.",
      etapes: [
        "Les données naissent dans des endroits éparpillés : caisses, site web, logiciels de gestion.",
        "Le pipeline les récupère, les nettoie et les met au même format, étape après étape.",
        "Il les dépose dans un entrepôt ou un tableau de bord, à heure fixe ou en continu, sans que personne n’intervienne.",
        "Si un maillon casse, tout ce qui est en aval se vide ou se trompe : il faut donc le surveiller."
      ],
      voir: "etl",
      pas: "l’ETL, qui décrit surtout la transformation ; le pipeline désigne toute la chaîne de bout en bout."
    },
    {
      id: "vulnerabilite", terme: "Faille de sécurité (vulnérabilité)", domaine: "Réseau",
      aka: ["faille", "vulnérabilité", "cve", "patch", "correctif", "faille zero-day"],
      une: "Un défaut dans un logiciel qu’une personne malveillante peut exploiter pour faire ce qui n’était pas prévu.",
      etapes: [
        "Tout logiciel est écrit par des humains, donc contient des erreurs. Certaines ouvrent une porte par inadvertance.",
        "Un chercheur ou un attaquant la découvre. Si c’est un attaquant, il peut l’exploiter avant que l’éditeur le sache.",
        "L’éditeur publie un correctif. La faille est alors connue de tous, y compris des attaquants.",
        "Le risque restant vient de ceux qui n’installent pas la mise à jour : appliquer les correctifs vite est la meilleure défense."
      ],
      voir: "cybersecurite",
      pas: "un virus : la faille est la porte entrouverte, le virus est ce qui entre par elle."
    }
  ];

  var LEVELS = { 1: 'Découverte', 2: 'Intermédiaire', 3: 'Avancé' };

  return { LESSONS: LESSONS, FAMILIES: FAMILIES, LEVELS: LEVELS, CARDS: CARDS };
})();
