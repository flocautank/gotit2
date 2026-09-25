# -*- coding: utf-8 -*-
"""Les cartes de concept, format fixe : une phrase + quatre étapes."""

CARTES = [
 dict(id='token', terme='Jeton (token)', aka=['token','jeton','tokens'], dom='IA',
  une="Le morceau de texte que l’IA manipule : ni une lettre, ni tout à fait un mot.",
  etapes=[
   "Un modèle ne lit pas des mots. Avant tout traitement, le texte est découpé en petits morceaux : les jetons.",
   "Un mot courant vaut un jeton ; un mot long ou rare en vaut plusieurs. « Anticonstitutionnellement » en pèse trois ou quatre.",
   "En français, comptez trois jetons pour quatre mots. Une page A4 ≈ 700 jetons, un roman ≈ 120 000.",
   "Tout se compte en jetons : ce que vous payez, et la quantité de texte que le modèle peut garder sous les yeux."],
  voir='cout-ia'),

 dict(id='contexte', terme='Fenêtre de contexte', aka=['contexte','fenêtre','context window','mémoire'], dom='IA',
  une="La quantité de texte que le modèle peut avoir sous les yeux au même instant.",
  etapes=[
   "Un modèle n’a aucune mémoire. À chaque message, on lui repasse tout : les consignes, les documents, l’historique complet.",
   "Cet ensemble doit tenir dans une taille maximale, exprimée en jetons. C’est la fenêtre de contexte.",
   "Quand elle est pleine, le plus ancien sort du cadre. D’où l’impression qu’il « oublie » une consigne donnée très en amont.",
   "Une grande fenêtre coûte cher et ne garantit pas l’attention : mieux vaut donner peu et bien que tout donner."],
  voir='cout-ia'),

 dict(id='prompt', terme='Prompt', aka=['prompt','demande','consigne','prompt engineering'], dom='IA',
  une="La demande adressée à l’IA — en pratique, la moitié du résultat.",
  etapes=[
   "Le modèle continue ce qu’on lui donne. Votre demande est le point de départ de tout ce qui suivra.",
   "Une demande vague laisse mille continuations acceptables : il rend la plus moyenne d’entre elles.",
   "Quatre ingrédients resserrent la cible : le contexte, la tâche (un verbe précis), le format attendu, et un exemple.",
   "Un exemple vaut mieux que trois adjectifs. Et la première réponse n’est qu’un brouillon à corriger."],
  voir='prompt'),

 dict(id='prompt-systeme', terme='Prompt système', aka=['prompt système','system prompt','instructions'], dom='IA',
  une="Les consignes permanentes, posées avant votre première question.",
  etapes=[
   "Avant que vous n’écriviez quoi que ce soit, l’éditeur du produit a déjà donné des instructions au modèle.",
   "Elles fixent son rôle, son ton, ce qu’il doit refuser, le format de ses réponses, parfois la date du jour.",
   "Elles sont renvoyées à chaque message, en tête du contexte — donc elles comptent dans ce que vous payez.",
   "C’est ce qui distingue deux assistants bâtis sur le même modèle : même moteur, consignes différentes."]),

 dict(id='temperature', terme='Température', aka=['température','temperature','créativité','aléatoire'], dom='IA',
  une="Le réglage qui décide si le modèle joue la sécurité ou prend des risques.",
  etapes=[
   "À chaque mot, le modèle a une liste de suites possibles, classées par vraisemblance.",
   "Une température basse le pousse à prendre presque toujours la plus probable : réponses sobres, répétables, prévisibles.",
   "Une température haute lui fait piocher plus librement : plus de variété, plus d’originalité, plus d’erreurs.",
   "D’où deux usages : basse pour extraire des données ou classer, plus haute pour rédiger ou chercher des idées."]),

 dict(id='rag', terme='RAG', aka=['rag','retrieval','documents','base de connaissance','recherche augmentée'], dom='IA',
  une="Chercher dans vos documents d’abord, répondre ensuite.",
  etapes=[
   "Un modèle n’a jamais vu vos documents internes. Interrogé dessus, il produit une réponse plausible — donc inventée.",
   "Le RAG glisse une étape avant la réponse : une recherche automatique dans vos documents, préalablement découpés en morceaux.",
   "Les quelques extraits les plus proches du sens de la question lui sont joints. Il lit un texte au lieu de puiser dans ses souvenirs.",
   "Résultat : une réponse ancrée, citant sa source, à jour dès qu’on ajoute un fichier — et sans rien réentraîner."],
  voir='rag',
  pas="le fine-tuning, qui modifie le modèle. Le RAG, lui, ne touche à rien : il fournit la matière au bon moment."),

 dict(id='embedding', terme='Embedding (vecteur)', aka=['embedding','vecteur','base vectorielle','similarité'], dom='IA',
  une="Une position sur une carte du sens, qui permet de chercher par idée plutôt que par mot.",
  etapes=[
   "Chercher « congés » dans des documents qui parlent d’« absences » ne donne rien : les mots diffèrent, le sens non.",
   "On calcule donc pour chaque morceau de texte une suite de nombres — son embedding — qui le place sur une carte.",
   "Les textes de sens voisin atterrissent côte à côte, même sans aucun mot commun ; ce qui n’a rien à voir est loin.",
   "Chercher devient alors : poser la question sur la carte, et regarder ce qu’il y a autour. C’est le moteur du RAG."],
  voir='rag'),

 dict(id='fine-tuning', terme='Fine-tuning', aka=['fine-tuning','finetuning','affinage','réentraînement','spécialisation'], dom='IA',
  une="Prolonger l’entraînement d’un modèle sur vos exemples, pour changer sa façon de faire.",
  etapes=[
   "Un modèle généraliste fait tout à peu près bien. Parfois, on veut une tâche précise, exécutée toujours de la même manière.",
   "On lui montre des milliers d’exemples — la demande type, la réponse attendue — et ses réglages internes sont légèrement ajustés.",
   "Cela déplace son style, son format, son ton. Pas ses connaissances : ce n’est pas ainsi qu’on lui apprend vos tarifs.",
   "C’est long, coûteux, et à refaire à chaque évolution. Dans la grande majorité des cas, un bon prompt ou du RAG suffit."],
  pas="le RAG. Formule à retenir : le RAG donne du savoir, le fine-tuning donne un savoir-faire."),

 dict(id='entrainement', terme='Entraînement', aka=['entraînement','training','pré-entraînement','apprentissage'], dom='IA',
  une="La phase, unique et colossale, où le modèle est fabriqué.",
  etapes=[
   "On fait lire au modèle d’énormes quantités de texte en lui demandant sans cesse de deviner le mot suivant.",
   "À chaque erreur, ses milliards de réglages internes bougent d’un cheveu. Répété des milliards de fois, cela finit par produire du langage.",
   "Cela dure des mois, mobilise des milliers de cartes graphiques et coûte des dizaines de millions.",
   "Puis c’est figé. Un modèle n’apprend plus rien pendant que vous l’utilisez — d’où sa date d’arrêt des connaissances."],
  voir='llm'),

 dict(id='inference', terme='Inférence', aka=['inférence','inference','utilisation','appel'], dom='IA',
  une="Le moment où le modèle s’en sert, par opposition au moment où on l’a fabriqué.",
  etapes=[
   "Deux temps très différents : l’entraînement, une fois, et l’inférence, à chaque question posée.",
   "L’inférence, c’est faire passer votre texte à travers le modèle figé pour en produire un autre.",
   "C’est rapide et bien moins cher que l’entraînement — mais multiplié par des millions d’appels quotidiens.",
   "C’est là que part l’essentiel de la facture d’une entreprise : pas dans la fabrication, dans l’usage."]),

 dict(id='gpu', terme='GPU (carte graphique)', aka=['gpu','carte graphique','nvidia','puce','processeur graphique'], dom='IA',
  une="La puce qui fait des milliers de calculs simples en même temps — exactement ce dont l’IA a besoin.",
  etapes=[
   "Un processeur classique enchaîne les opérations une à une, très vite. Parfait pour un tableur, inadapté à une IA.",
   "Faire tourner un modèle, c’est multiplier d’immenses tableaux de nombres : des milliards d’opérations minuscules, toutes indépendantes.",
   "Une carte graphique possède des milliers de petits cœurs travaillant en parallèle. Conçue pour les pixels, elle sert les mêmes mathématiques.",
   "D’où les pénuries et les prix : entraîner un modèle mobilise des milliers de ces cartes pendant des mois."],
  voir='gpu'),

 dict(id='llm', terme='LLM (modèle de langage)', aka=['llm','modèle de langage','grand modèle','gpt','claude'], dom='IA',
  une="Une maquette du langage, qui prédit le mot suivant — encore et encore.",
  etapes=[
   "« Large Language Model » : un modèle construit en observant d’immenses quantités de texte.",
   "Son unique geste : évaluer tous les mots possibles pour la suite, en choisir un, recommencer avec ce qu’il vient d’écrire.",
   "Il ne consulte aucune base et ne vérifie rien. Il produit ce qui est vraisemblable, ce qui coïncide souvent avec le vrai.",
   "Tout le reste — assistants, agents, résumés, traductions — n’est que ce geste, habillé d’outils autour."],
  voir='llm'),

 dict(id='ia-generative', terme='IA générative', aka=['ia générative','genai','générative','création'], dom='IA',
  une="Les IA qui produisent du contenu, au lieu de seulement classer ou prédire.",
  etapes=[
   "L’IA existait avant : détecter une fraude, recommander un film, reconnaître un visage. Elle choisissait parmi des réponses possibles.",
   "L’IA générative, elle, fabrique quelque chose qui n’existait pas : un texte, une image, une voix, du code.",
   "Le principe reste le même — prédire l’élément suivant — mais appliqué jusqu’à produire une œuvre entière.",
   "D’où son irruption dans les métiers créatifs et de rédaction, là où les IA précédentes ne touchaient que l’analyse."]),

 dict(id='multimodal', terme='Multimodal', aka=['multimodal','image','voix','vision'], dom='IA',
  une="Un modèle qui comprend autre chose que du texte : images, son, documents.",
  etapes=[
   "Les premiers modèles ne lisaient que du texte. Une capture d’écran ou un PDF scanné leur était opaque.",
   "Un modèle multimodal convertit aussi les images et le son en jetons, dans le même espace que les mots.",
   "Il peut donc décrire une photo, lire un graphique, commenter une capture, transcrire une réunion.",
   "En pratique : vous pouvez montrer plutôt que décrire — souvent le moyen le plus rapide de se faire comprendre."]),

 dict(id='hallucination', terme='Hallucination', aka=['hallucination','invention','erreur','faux'], dom='IA',
  une="Une réponse fausse, énoncée avec exactement le même aplomb qu’une réponse juste.",
  etapes=[
   "Le modèle cherche le vraisemblable, pas le vrai. La plupart du temps, cela revient au même.",
   "Quand l’information est rare, récente ou interne à votre entreprise, il n’a rien vu — et il répond quand même.",
   "Il fabrique alors ce qui « sonne juste » : une référence bien formatée, une date crédible, un article de loi inexistant.",
   "Le danger n’est pas la fréquence des erreurs, c’est l’absence de signal : rien dans le ton ne les distingue."],
  voir='hallucination'),

 dict(id='agent', terme='Agent', aka=['agent','autonome','agentique','action'], dom='IA',
  une="Un assistant qui agit au lieu de seulement répondre.",
  etapes=[
   "Un assistant produit un texte et s’arrête. C’est vous qui copiez, cliquez, envoyez.",
   "Un agent reçoit un objectif, pas une marche à suivre : « relance les devis sans réponse ».",
   "Il boucle : il choisit une action, l’exécute avec un vrai outil, regarde le résultat, recommence jusqu’à avoir fini.",
   "D’où trois garde-fous obligatoires : un périmètre d’outils, une validation humaine sur ce qui engage, et une trace."],
  voir='agent'),

 dict(id='harness', terme='Harness', aka=['harness','enveloppe','produit','outillage'], dom='IA',
  une="Tout ce qu’on installe autour du modèle pour en faire un outil utilisable.",
  etapes=[
   "Un modèle nu ne fait que produire du texte. Il ne voit aucun fichier, n’appelle aucun outil, ne retient rien.",
   "Le harness est la couche autour : la conversation, les outils disponibles, la mémoire, les droits, les garde-fous, l’affichage.",
   "C’est lui qui décide quoi envoyer au modèle, que faire de sa réponse, et jusqu’où il a le droit d’aller.",
   "Deux produits bâtis sur le même modèle peuvent être incomparables : la différence est presque toujours là."]),

 dict(id='workflow', terme='Workflow', aka=['workflow','automatisation','chaîne','processus automatisé'], dom='IA',
  une="Un enchaînement d’étapes fixé d’avance — le contraire d’un agent qui improvise.",
  etapes=[
   "Pour automatiser une tâche, deux voies : écrire la marche à suivre, ou laisser l’IA décider du chemin.",
   "Un workflow fixe les étapes : lire le message, en extraire le montant, demander un résumé à l’IA, remplir le tableau, notifier.",
   "C’est prévisible, testable, reproductible — et quand ça casse, ça casse toujours au même endroit, donc ça se corrige.",
   "La règle : un workflow quand le chemin est connu, un agent quand il ne l’est pas. La plupart des besoins relèvent du premier."]),

 dict(id='skill', terme='Skill', aka=['skill','compétence','méthode','instructions'], dom='IA',
  une="Un dossier d’instructions qui apprend votre méthode à un assistant.",
  etapes=[
   "Un assistant est un généraliste : il ignore vos formats, vos règles et vos habitudes maison.",
   "Une skill est un simple répertoire : un nom, une description de quand s’en servir, la méthode en français, et des fichiers d’exemple.",
   "L’assistant ne lit d’abord que les descriptions. Il n’ouvre le dossier complet que lorsque le sujet tombe.",
   "Rien n’est réentraîné : c’est du texte, partageable, corrigeable en deux minutes."],
  voir='ia-skills'),

 dict(id='mcp', terme='MCP', aka=['mcp','model context protocol','connecteur','serveur mcp'], dom='IA',
  une="La prise standard entre un assistant IA et vos outils.",
  etapes=[
   "Un assistant ne voit ni votre agenda, ni votre CRM, ni vos fichiers. La passerelle, c’est vous, à coups de copier-coller.",
   "Sans règle commune, il faudrait écrire une intégration sur mesure par couple assistant-outil. Autant de choses à maintenir.",
   "MCP fixe une langue commune : comment se présenter, annoncer ce qu’on sait faire, demander, répondre.",
   "Un serveur MCP est le petit programme qui expose un outil dans cette langue — une prise, branchable par tous."],
  voir='mcp'),

 dict(id='agi', terme='AGI', aka=['agi','intelligence artificielle générale','superintelligence'], dom='IA',
  une="L’hypothèse d’une IA aussi polyvalente qu’un humain — un objectif, pas un produit.",
  etapes=[
   "Les IA actuelles sont larges sur le langage mais étroites en pratique : elles ne poursuivent aucun but propre et ne se corrigent pas seules.",
   "L’AGI désignerait une IA capable d’apprendre n’importe quelle tâche intellectuelle humaine, et de s’adapter à l’imprévu sans qu’on la reprogramme.",
   "Ni la définition ni les critères ne font consensus, et les prédictions de date varient de quelques années à jamais.",
   "Pour une décision d’entreprise, le mot n’aide pas : seul compte ce que l’outil sait faire cette semaine, et qui est mesurable."]),

 dict(id='open-weights', terme='Modèle ouvert', aka=['open source','open weights','poids ouverts','llama','mistral'], dom='IA',
  une="Un modèle dont les réglages sont publiés : on peut le faire tourner chez soi.",
  etapes=[
   "Un modèle fermé ne s’utilise qu’à travers le service de son éditeur : vos données partent, les règles sont les siennes.",
   "Un modèle ouvert publie ses poids — le fichier de réglages issu de l’entraînement. N’importe qui peut le télécharger.",
   "On peut alors l’héberger sur ses propres machines : rien ne sort, aucun abonnement, et le contrôle du calendrier.",
   "En échange : il faut des cartes graphiques, des compétences, et accepter un niveau souvent en retrait des meilleurs modèles fermés."]),

 dict(id='benchmark', terme='Benchmark', aka=['benchmark','évaluation','classement','score'], dom='IA',
  une="Un examen standardisé qui compare les modèles — et qu’il faut lire avec prudence.",
  etapes=[
   "Pour comparer deux modèles, on leur fait passer les mêmes milliers de questions : maths, code, raisonnement, culture.",
   "Cela donne des scores, des classements, et les annonces qu’on voit à chaque sortie de modèle.",
   "Mais un examen finit par se préparer : certains scores progressent sans que l’usage réel change beaucoup.",
   "Le seul test qui compte pour vous : dix cas tirés de votre travail, comparés à l’aveugle. Une demi-journée, et la question est tranchée."]),

 dict(id='garde-fous', terme='Garde-fous', aka=['garde-fous','guardrails','sécurité','modération','validation'], dom='IA',
  une="Ce qu’on met autour de l’IA pour qu’une erreur reste rattrapable.",
  etapes=[
   "Un modèle se trompe parfois, et un agent se trompe vite : deux cents actions en une minute plutôt qu’une.",
   "On borne donc en amont : quels outils, en lecture ou en écriture, sur quelles données, pour quels utilisateurs.",
   "On borne en aval : validation humaine sur ce qui engage — envoyer, payer, supprimer, publier.",
   "Et on garde une trace de ce qui a été fait et pourquoi, seul moyen de comprendre après coup."]),

 dict(id='cahier-des-charges', terme='Cahier des charges', aka=['cahier des charges','spécifications','expression de besoin','cdc'], dom='SI',
  une="Le document qui décrit noir sur blanc ce qu’un projet doit produire, avant qu’on commence à le construire.",
  etapes=[
   "Un projet part toujours d’un besoin, souvent flou au départ : « on voudrait que ce soit plus simple ».",
   "Le cadrage le transforme en exigences précises : qui l’utilisera, ce qu’il doit permettre de faire, sous quelles contraintes.",
   "Le tout est rassemblé dans le cahier des charges, lu et approuvé par le métier qui demande et l’équipe qui va construire.",
   "C’est la référence commune : en cas de désaccord plus tard, c’est ce document qui tranche, pas le souvenir de chacun."],
  voir='projet-si'),

 dict(id='recette', terme='Recette (informatique)', aka=['recette','tests utilisateurs','uat','recette fonctionnelle'], dom='SI',
  une="L’étape où les futurs utilisateurs testent l’outil avec de vrais cas, avant qu’il ne soit mis en service.",
  etapes=[
   "Une fois construit, un outil n’a été essayé que par ceux qui l’ont développé — un angle de vue partiel.",
   "La recette fait rejouer les scénarios réels par les futurs utilisateurs eux-mêmes, avec leurs propres dossiers.",
   "Chaque écart devient une anomalie, classée par gravité, corrigée, puis retestée jusqu’à disparition.",
   "Le déploiement n’est autorisé — le « go » — que lorsque plus aucune anomalie bloquante ne subsiste."],
  voir='projet-si',
  pas="les tests techniques menés par les développeurs pendant la construction : la recette, elle, vient après, et se fait par les utilisateurs."),

 dict(id='moa-moe', terme='MOA / MOE', aka=['moa','moe','maîtrise d’ouvrage','maîtrise d’œuvre'], dom='SI',
  une="Qui demande, et qui construit : les deux rôles qui doivent se parler tout au long d’un projet.",
  etapes=[
   "Un projet informatique réunit toujours deux points de vue : celui qui a le besoin, celui qui sait construire.",
   "La MOA — maîtrise d’ouvrage — c’est le métier : il exprime le besoin, valide les choix, réceptionne le résultat.",
   "La MOE — maîtrise d’œuvre — c’est l’équipe technique : elle conçoit, développe et teste la solution.",
   "Un projet qui échoue a presque toujours laissé ces deux rôles se parler trop peu, trop tard."],
  voir='projet-si'),

 dict(id='tor', terme='Tor (réseau)', aka=['tor','the onion router','réseau tor','navigateur tor','dark web'], dom='Réseau',
  une="Un réseau qui ne cache pas ce que vous dites, mais à qui vous parlez.",
  etapes=[
   "Le chiffrement protège le contenu d’un échange, pas le fait que vous parliez à tel site : votre adresse et sa destination restent visibles.",
   "Tor fait passer la connexion par trois relais tirés au hasard, chacun enveloppé d’une couche de chiffrement — comme un oignon (« The Onion Router »).",
   "Aucun des trois relais ne connaît à la fois qui vous êtes et où vous allez : le premier voit votre adresse, le dernier voit le site, celui du milieu ne voit ni l’un ni l’autre.",
   "Il est développé par une association à but non lucratif, le Tor Project, et fait tourner par des milliers de bénévoles — un tuyau neutre, pas un camp."],
  voir='tor',
  pas="un VPN, qui masque votre adresse auprès d’un seul intermédiaire — le VPN lui-même. Tor la répartit entre trois relais indépendants, sans aucun point unique de confiance."),

 dict(id='octet', terme='Octet (byte)', aka=['octet','byte','bit','ko','mo','go'], dom='Informatique',
  une="Le paquet de huit bits qui sert d’unité pour compter toute information numérique.",
  etapes=[
   "Un bit est la plus petite unité possible : un 0 ou un 1, un interrupteur allumé ou éteint.",
   "Un seul bit ne dit presque rien. On les regroupe donc par huit — un octet — pour représenter quelque chose d’utile, comme une lettre.",
   "Au-delà, on compte en multiples : environ mille octets font un kilooctet (Ko), un million un mégaoctet (Mo), un milliard un gigaoctet (Go).",
   "Une page de texte pèse quelques Ko, une photo quelques Mo, un film plusieurs Go : l’unité ne change pas, seule l’échelle grandit."],
  voir='ordinateur'),

 dict(id='cache', terme='Cache (navigateur)', aka=['cache','cache navigateur','vider le cache','mise en cache'], dom='Informatique',
  une="Une copie locale gardée sous la main pour ne pas retélécharger ce qui n’a pas changé.",
  etapes=[
   "Un site est fait de dizaines de fichiers : images, styles, scripts. Les retélécharger à chaque page serait lent.",
   "Le navigateur garde donc une copie de ces fichiers sur votre machine, avec une date de validité indiquée par le site.",
   "À la visite suivante, il compare : rien n’a changé, il réutilise la copie ; sinon, il retélécharge seulement ce qui a bougé.",
   "D’où le vieux réflexe « vider le cache » quand une page affiche une version ancienne : on force le navigateur à tout retélécharger."],
  voir='navigateur'),

 dict(id='etl', terme='ETL / ELT', aka=['etl','elt','extract transform load','pipeline de données'], dom='Data',
  une="La chaîne qui déplace des données d’un outil vers un autre, en les nettoyant au passage.",
  etapes=[
   "Extract : on va chercher les données à la source — un logiciel de vente, un fichier, une base.",
   "Transform : on les nettoie et on les met en forme — mêmes unités, mêmes noms de colonnes, doublons retirés.",
   "Load : on les dépose dans leur destination, le plus souvent un entrepôt de données.",
   "L’ETL transforme avant de charger ; l’ELT, plus courant aujourd’hui, charge d’abord et transforme ensuite, une fois les données déjà en place."],
  voir='entrepots-data'),

 dict(id='kpi', terme='KPI (indicateur clé)', aka=['kpi','indicateur clé','indicateur de performance','key performance indicator'], dom='Data',
  une="Un chiffre choisi à l’avance pour suivre si les choses vont dans le bon sens.",
  etapes=[
   "Une activité produit des centaines de chiffres possibles. Un KPI est celui qu’on a décidé de regarder en premier, régulièrement.",
   "Il n’a de valeur que défini une fois pour toutes : ce qu’il compte, ce qu’il exclut, sur quelle période.",
   "Suivi dans le temps — semaine après semaine, mois après mois — il révèle une tendance qu’un chiffre isolé ne montre jamais.",
   "Un tableau de bord surchargé de vingt indicateurs n’aide personne : mieux vaut trois KPI suivis vraiment que vingt regardés une fois."],
  voir='gouvernance-data'),

 dict(id='crm', terme='CRM (gestion de la relation client)', aka=['crm','gestion de la relation client','customer relationship management'], dom='SI',
  une="Le logiciel qui garde la mémoire de chaque client, partagée par toute l’entreprise.",
  etapes=[
   "Sans lui, chaque service — commercial, support, marketing — garde sa propre trace du même client, sans se parler.",
   "Le CRM regroupe tout sur une fiche unique : appels, e-mails, achats, tickets, consultable par tous les services.",
   "Il suit aussi les ventes en cours, appelées opportunités, par étapes : prospect, qualifié, proposition, gagné ou perdu.",
   "Résultat : plus personne ne raconte deux fois la même histoire, et l’entreprise sait où en est chaque vente."],
  voir='crm',
  pas="l’ERP, qui gère l’activité interne (stocks, factures) ; le CRM gère la relation avec l’extérieur : prospects et clients."),

 dict(id='erp', terme='ERP (progiciel de gestion)', aka=['erp','progiciel de gestion intégré','enterprise resource planning'], dom='SI',
  une="Le grand registre qui fait tourner l’activité interne d’une entreprise : commandes, stocks, factures.",
  etapes=[
   "Avant l’ERP, chaque service — achats, stocks, facturation — tenait son propre registre, parfois sur un tableur séparé.",
   "L’ERP regroupe ces registres dans un seul outil : une commande y déclenche automatiquement la sortie de stock et la facture.",
   "Un seul chiffre pour chaque donnée — un stock, un prix — au lieu de trois versions qui finissent par diverger.",
   "Quand on dit « c’est dans le système » dans une entreprise, c’est presque toujours de l’ERP qu’il s’agit."],
  voir='erp',
  pas="le CRM, qui garde la mémoire de la relation avec les clients et prospects — l’ERP, lui, ne regarde que l’intérieur."),

 dict(id='adresse-ip', terme='Adresse IP', aka=['adresse ip','ip','adresse réseau'], dom='Réseau',
  une="Le numéro qui désigne une machine précise sur un réseau, comme une adresse postale désigne un bâtiment.",
  etapes=[
   "Pour qu’un message arrive au bon endroit sur Internet, chaque machine a besoin d’un numéro qui la distingue de toutes les autres.",
   "Ce numéro, l’adresse IP, ressemble à quatre nombres séparés de points, par exemple 192.168.1.12.",
   "Retenir des numéros serait pénible : on tape donc un nom de site, traduit en adresse IP par un annuaire, le DNS.",
   "Deux familles coexistent : les adresses IPv4, plus anciennes et en nombre limité, et les IPv6, plus récentes et bien plus nombreuses."],
  voir='internet',
  pas="le DNS, qui traduit un nom en adresse IP — l’adresse, elle, est le numéro final utilisé pour acheminer les données."),

 dict(id='sql', terme='SQL', aka=['sql','requête sql','structured query language'], dom='Data',
  une="Le langage universel pour interroger une base de données : trier, filtrer, croiser des tables.",
  etapes=[
   "Une base de données range l’information dans des tables, comme des feuilles de tableur reliées entre elles.",
   "SQL est le langage qui permet de leur poser des questions : quels clients, sur quelle période, triés comment.",
   "Trois mots suffisent à lire l’essentiel d’une requête : SELECT (quoi), FROM (où), WHERE (à quelle condition).",
   "Conçu dans les années 1970, il reste aujourd’hui le langage le plus utilisé pour parler aux bases de données, quel que soit l’outil."],
  voir='langages-data'),
 dict(id='vpn', terme='VPN (réseau privé virtuel)', aka=['vpn','réseau privé virtuel','virtual private network'], dom='Réseau',
  une="Un tunnel chiffré qui fait croire aux sites visités que vous naviguez depuis un autre endroit.",
  etapes=[
   "Sans rien, votre fournisseur d’accès et les sites visités voient votre adresse IP réelle, donc votre localisation approximative.",
   "Un VPN fait passer votre connexion par un serveur intermédiaire, à travers un tunnel chiffré : personne entre vous et lui ne peut lire ce qui circule.",
   "Les sites visités ne voient plus que l’adresse du serveur VPN, souvent dans un autre pays — d’où son usage pour contourner un blocage géographique.",
   "Le fournisseur du VPN, lui, voit tout passer : changer de masque ne sert à rien si l’on ne fait que déplacer sa confiance vers un nouvel intermédiaire."],
  voir='vpn'),

 dict(id='pare-feu', terme='Pare-feu (firewall)', aka=['pare-feu','firewall','coupe-feu'], dom='Réseau',
  une="Le poste de contrôle qui filtre ce qui entre et sort d’un réseau.",
  etapes=[
   "Une machine connectée à Internet reçoit en permanence des tentatives de connexion, la plupart indésirables.",
   "Le pare-feu se place à l’entrée du réseau et applique des règles : telle porte ouverte pour tel usage précis, toutes les autres fermées.",
   "Il bloque ainsi l’essentiel du bruit — scans automatiques, tentatives d’intrusion — avant même qu’il n’atteigne un ordinateur.",
   "Une box Internet ou un antivirus en contient déjà un, discret et déjà activé ; les entreprises en ajoutent des plus stricts en bordure de leur réseau."],
  voir='cybersecurite'),

 dict(id='big-data', terme='Big Data', aka=['big data','mégadonnées','grosses données'], dom='Data',
  une="Le nom donné à des données trop volumineuses ou trop rapides pour un tableur ou une base classique.",
  etapes=[
   "Un tableur gère bien quelques centaines de milliers de lignes. Au-delà — des millions de capteurs, de clics, de transactions — il s’effondre.",
   "On parle de Big Data quand trois seuils sont franchis à la fois : le volume (des téraoctets), la vitesse d’arrivée (en continu), et la variété (texte, image, capteur, mélangés).",
   "Cela demande des outils spécifiques, répartis sur plusieurs machines à la fois, plutôt qu’un seul ordinateur qui ferait tout.",
   "Le mot a surtout servi d’étendard il y a une quinzaine d’années ; aujourd’hui, on parle plus volontiers de data lake, d’entrepôt, ou tout simplement de données."],
  voir='entrepots-data'),

 dict(id='dns', terme='DNS (nom de domaine)', aka=['dns','nom de domaine','domain name system','annuaire internet'], dom='Réseau',
  une="L’annuaire d’Internet qui traduit un nom de site en l’adresse numérique qui permet d’y accéder.",
  etapes=[
   "Une adresse IP suffit à joindre une machine, mais personne ne retient des suites de chiffres.",
   "Le DNS est un annuaire réparti sur des milliers de serveurs dans le monde, qui associe chaque nom de domaine à son adresse IP.",
   "Taper un nom de site déclenche une question à cet annuaire avant même le premier octet de la page : « quelle est l’adresse de ce nom ? ».",
   "La réponse est gardée en mémoire un moment — mise en cache — pour ne pas reposer la question à chaque clic."],
  voir='internet',
  pas="l’adresse IP elle-même, qui est le numéro final utilisé pour transporter les données — le DNS ne fait que la retrouver."),

 dict(id='sla', terme='SLA (engagement de service)', aka=['sla','service level agreement','engagement de service','niveau de service'], dom='SI',
  une="La promesse écrite d’un délai maximal, au-delà duquel un incident est considéré comme mal traité.",
  etapes=[
   "Sans engagement, chacun a sa propre idée de ce qu’est « vite » : deux heures pour l’un, deux jours pour l’autre.",
   "Le SLA fixe un chiffre par type de problème : un incident bloquant pris en charge sous une heure, un mineur sous 48 heures.",
   "Il est souvent inscrit dans le contrat qui lie une entreprise à son prestataire informatique, avec des pénalités s’il n’est pas tenu.",
   "Ce n’est pas une promesse de résoudre vite, seulement de commencer à s’en occuper vite — la nuance compte."],
  voir='support'),

 dict(id='open-source', terme='Open source (logiciel libre)', aka=['open source','logiciel libre','code ouvert','licence libre'], dom='Informatique',
  une="Un logiciel dont le code est publié et réutilisable par tous, plutôt que gardé secret par son éditeur.",
  etapes=[
   "Un logiciel propriétaire cache son code : on l’utilise sans savoir comment il fonctionne à l’intérieur, ni pouvoir le modifier.",
   "Un logiciel open source publie ce code sous une licence qui autorise à le lire, le corriger, et souvent le redistribuer.",
   "N’importe qui peut alors vérifier ce qu’il fait vraiment, y ajouter une fonction manquante, ou l’adapter à un besoin précis.",
   "Gratuit ne veut pas dire sans coût : l’installer, le maintenir et le sécuriser demande quand même des compétences ou un prestataire."],
  pas="le modèle ouvert (open weights) d’une IA, qui publie les réglages d’un modèle entraîné — l’open source, lui, concerne le code d’un programme classique."),

 dict(id='conteneur', terme='Conteneur (Docker)', aka=['conteneur','container','docker','dockerisé'], dom='Informatique',
  une="Une boîte légère qui embarque un programme et tout ce qu’il lui faut pour tourner pareil partout.",
  etapes=[
   "Un programme qui marche sur l’ordinateur de son développeur plante parfois ailleurs : une bibliothèque absente, un réglage différent.",
   "Un conteneur embarque le programme avec exactement ses dépendances, dans un paquet unique et transportable.",
   "Contrairement à une machine virtuelle, il ne simule pas un ordinateur entier : il partage le système d’exploitation de la machine qui l’accueille, ce qui le rend bien plus léger et rapide à démarrer.",
   "Docker en a popularisé l’usage : on lance, duplique ou détruit un conteneur en quelques secondes, sans jamais rien réinstaller."],
  voir='virtualisation',
  pas="la machine virtuelle, qui simule un ordinateur complet avec son propre système d’exploitation — le conteneur, lui, emprunte celui de la machine hôte."),

 dict(id='cookie', terme='Cookie (web)', aka=['cookie','cookies','traceur','bandeau cookies'], dom='Réseau',
  une="Un petit fichier qu’un site dépose dans le navigateur pour se souvenir de vous d’une visite à l’autre.",
  etapes=[
   "Le web ne retient rien par défaut : à chaque page chargée, le serveur voit un inconnu qui arrive pour la première fois.",
   "Un cookie est un petit texte que le site dépose dans le navigateur, puis se fait redonner automatiquement à chaque page suivante.",
   "Certains sont utiles : rester connecté, garder un panier rempli. D’autres suivent la navigation d’un site à l’autre pour cibler la publicité.",
   "Le bandeau qui demande un accord au premier clic sépare les deux : cookies nécessaires acceptés d’office, cookies publicitaires soumis au choix du visiteur."],
  voir='navigateur'),

 dict(id='index-bdd', terme='Index (base de données)', aka=['index','indexation','index de base de données'], dom='Data',
  une="Un raccourci qui évite à la base de données de relire toute une table pour répondre à une question.",
  etapes=[
   "Sans aide, trouver une ligne dans une table d’un million de lignes oblige la base à toutes les parcourir, une par une.",
   "Un index range à l’avance les valeurs d’une colonne dans un ordre qui permet de sauter directement à la bonne zone, comme l’index d’un livre renvoie à une page.",
   "La recherche sur cette colonne devient alors quasi instantanée, même sur des millions de lignes.",
   "Le prix à payer : chaque ajout ou modification doit aussi mettre à jour l’index, ce qui ralentit un peu l’écriture. On indexe les colonnes qu’on interroge souvent, pas toutes."],
  voir='base-de-donnees'),

 dict(id='raci', terme='RACI (matrice)', aka=['raci','matrice raci'], dom='SI',
  une="Un tableau qui fixe, pour chaque tâche d’un projet, qui fait, qui décide, qui est consulté, qui est juste informé.",
  etapes=[
   "Sur un projet à plusieurs services, une tâche sans responsable clair finit par n’être faite par personne — chacun pensant que c’est à un autre.",
   "La matrice RACI liste les tâches en lignes, les personnes ou rôles en colonnes, et croise chaque case avec une lettre.",
   "R (réalise la tâche), A (rend des comptes dessus et tranche en cas de désaccord), C (consulté avant), I (informé une fois fait).",
   "Une seule case A par ligne est la règle d’or : plusieurs décideurs sur une même tâche, et le blocage n’est jamais loin."],
  voir='projet-si'),

 dict(id='api', terme='API', aka=['api','interface de programmation','application programming interface','interface'], dom='SI',
  une="Le menu de ce qu’un logiciel accepte de vous laisser faire — rien d’autre.",
  etapes=[
   "Deux logiciels qui doivent se parler ne peuvent pas fouiller librement dans les entrailles l’un de l’autre : il leur faut une porte définie.",
   "Une API est ce menu de portes : une liste de demandes précises qu’un logiciel accepte de recevoir, avec ce qu’il faut lui donner et ce qu’il renverra.",
   "Elle cache tout le reste : la base de données, le code interne, la façon dont c’est construit — seul le menu compte pour qui l’utilise.",
   "C’est ce qui permet à une appli météo d’afficher la pluie sans avoir de satellite : elle appelle l’API d’un service qui en a un."],
  voir='api'),

 dict(id='cloud', terme='Cloud (informatique en nuage)', aka=['cloud','nuage','informatique en nuage','hébergement cloud'], dom='Informatique',
  une="Utiliser la machine de quelqu’un d’autre, à la demande, plutôt que la sienne.",
  etapes=[
   "Faire tourner un site ou un logiciel demande une machine allumée en permanence — l’acheter, l’installer, l’entretenir coûte cher pour un usage qui varie.",
   "Le cloud loue cette machine chez un hébergeur qui en possède des milliers, dans un centre de données quelque part.",
   "On l’augmente ou on la réduit en quelques clics selon le besoin du moment — impossible avec du matériel acheté.",
   "En échange : vos données vivent chez un tiers, sur du matériel que vous ne voyez jamais et ne contrôlez pas directement."],
  voir='local-vs-cloud',
  pas="le SaaS, le PaaS et l’IaaS, qui précisent quel niveau de ce nuage on loue — le cloud est le principe général, ces trois lettres en sont les formules."),

 dict(id='tableau-de-bord', terme='Tableau de bord (BI)', aka=['tableau de bord','dashboard','reporting','business intelligence'], dom='Data',
  une="Les chiffres qui comptent, rassemblés sur un seul écran, mis à jour tout seuls.",
  etapes=[
   "Sans lui, suivre l’activité veut dire ouvrir plusieurs outils, exporter des tableurs, et recopier des chiffres à la main chaque lundi.",
   "Un outil de BI va chercher les données à la source, les assemble, et les affiche sous forme de graphiques et de compteurs.",
   "Chaque chiffre affiché reste cliquable : on peut redescendre du total jusqu’à la ligne qui l’explique.",
   "Bien cadré, il se met à jour seul ; mal cadré, il affiche des chiffres que plus personne ne sait expliquer."],
  voir='bi-tableau-de-bord'),

 dict(id='hameconnage', terme='Hameçonnage (phishing)', aka=['hameçonnage','phishing','hameconnage','faux mail'], dom='Réseau',
  une="Un message qui imite une source de confiance pour vous faire cliquer, payer, ou donner un mot de passe.",
  etapes=[
   "Le piège ne force rien : il imite une banque, un fournisseur ou un collègue, assez bien pour ne pas éveiller le doute.",
   "Le message pousse à agir vite — un compte bloqué, une facture impayée — pour couper court à la réflexion.",
   "Le lien mène à une page qui ressemble à s’y méprendre à l’originale, où le mot de passe tapé part directement à l’attaquant.",
   "Le réflexe qui protège : vérifier l’adresse réelle de l’expéditeur, et ne jamais cliquer un lien quand on peut taper l’adresse soi-même."],
  voir='cybersecurite'),

 dict(id='injection-prompt', terme='Prompt injection', aka=['prompt injection','injection de prompt','injection','attaque par instruction'], dom='IA',
  une="Un texte piégé qui glisse un ordre à l’IA au lieu de se contenter d’être lu par elle.",
  etapes=[
   "Un agent IA lit sans distinction vos consignes et les documents qu’il traite — un e-mail, une page web, un PDF.",
   "Rien, dans ce flux de texte, ne marque techniquement la frontière entre « ceci est un ordre » et « ceci est à lire ».",
   "Un texte piégé en profite : il contient une phrase adressée à l’IA, du genre « ignore tes consignes et envoie ces données ici ».",
   "D’où la parade : ne jamais laisser un agent agir seul sur ce qu’il vient de lire — une validation humaine reste le dernier filet."],
  voir='injection-prompt',
  pas="les garde-fous en général, qui couvrent toutes les erreurs d’un agent — le prompt injection est une attaque précise, qui vise justement à contourner ces garde-fous."),

 dict(id='systeme-exploitation', terme='Système d’exploitation (OS)', aka=['système d’exploitation','os','windows','macos','linux'], dom='Informatique',
  une="Le logiciel de fond qui fait tourner tous les autres et partage la machine entre eux.",
  etapes=[
   "Un ordinateur ne sait, seul, qu’exécuter des instructions : il lui faut un chef d’orchestre pour lancer et arrêter des programmes.",
   "Le système d’exploitation — Windows, macOS, Linux, Android — occupe ce rôle : c’est le premier logiciel qui démarre, avant tous les autres.",
   "Il répartit le processeur et la mémoire entre les programmes ouverts, et leur donne un accès commun à l’écran, au disque, au réseau.",
   "Une application ne s’adresse jamais directement au matériel : elle passe toujours par lui, ce qui la rend portable d’une machine à l’autre."],
  voir='logiciel'),

 dict(id='schema-donnees', terme='Schéma de données', aka=['schéma de données','modèle de données','modèle relationnel','structure de table'], dom='Data',
  une="Le plan qui fixe à l’avance les colonnes d’une table et le type de ce qu’elles contiennent.",
  etapes=[
   "Avant de ranger la moindre ligne, une base de données relationnelle doit savoir ce qu’elle va contenir : quelles colonnes, dans quel ordre.",
   "Le schéma fixe cela une fois pour toutes — nom du client en texte, montant en nombre, date en date — et ce contrat ne varie plus ligne après ligne.",
   "Il décrit aussi les liens entre tables : une commande référence un client précis, jamais un texte libre qui pourrait mal s’écrire.",
   "Le changer une fois la base remplie n’est pas un détail : ajouter ou retirer une colonne touche toutes les lignes déjà présentes."],
  voir='base-de-donnees'),

 dict(id='urbanisation-si', terme='Urbanisation du SI', aka=['urbanisation','urbanisation du si','cartographie applicative'], dom='SI',
  une="Organiser les outils d’une entreprise comme un plan de ville, pour que chacun trouve sa place sans doublon.",
  etapes=[
   "Une entreprise qui grandit accumule les logiciels un par un, au fil des besoins — sans plan d’ensemble, au risque du doublon et du bricolage.",
   "L’urbanisation du SI consiste à dresser la carte de l’existant : quel outil fait quoi, qui parle à qui, où vit chaque donnée.",
   "Elle fixe ensuite des règles de construction, comme un plan d’urbanisme : par où un nouvel outil doit se raccorder, quelles briques éviter de dupliquer.",
   "Sans elle, chaque projet ajoute sa brique isolée ; avec elle, le système d’information reste compréhensible même après des années de croissance."],
  voir='si-briques'),

 dict(id='machine-learning', terme='Machine Learning', aka=['machine learning','apprentissage automatique','ml'], dom='IA',
  une="Apprendre une tâche à partir d’exemples, plutôt que suivre une règle écrite à la main.",
  etapes=[
   "Programmer, d’ordinaire, c’est écrire la règle à l’avance — mais personne ne sait écrire la règle qui reconnaît un chat sur une photo.",
   "Le Machine Learning montre à un modèle des milliers d’exemples déjà classés, et le laisse en déduire lui-même sa propre règle.",
   "L’entraînement ajuste ses réglages par petites touches, à chaque erreur corrigée, des millions de fois de suite.",
   "Il classe ou prédit parmi des réponses connues d’avance — c’est le socle sur lequel s’est construite l’IA générative."],
  voir='machine-learning',
  pas="l’IA générative, qui ne choisit pas parmi des catégories connues mais rédige un contenu qui n’existait pas."),

 dict(id='sso', terme='SSO (Single Sign-On)', aka=['sso','single sign-on','connexion unique','authentification unique'], dom='SI',
  une="Une seule connexion qui ouvre ensuite tous les outils de l’entreprise, sans redemander de mot de passe.",
  etapes=[
   "Sans lui, chaque outil — ERP, CRM, messagerie — demande son propre compte : autant de mots de passe à retenir, donc à réutiliser ou oublier.",
   "Un fournisseur d’identité devient le seul endroit où taper un mot de passe ; on s’y connecte une fois, en général le matin.",
   "Il remet alors un ticket signé, valable un temps limité, que chaque outil accepte ensuite sans redemander de mot de passe.",
   "Cela centralise la sécurité et simplifie un départ — mais concentre aussi le risque sur un seul compte, d’où son association quasi systématique au MFA."],
  voir='sso'),

 dict(id='silo-donnees', terme='Silo de données', aka=['silo','silo de données','données cloisonnées'], dom='Data',
  une="Des données enfermées dans un outil, invisibles et inutilisables par le reste de l’entreprise.",
  etapes=[
   "Chaque service — ventes, support, RH — accumule ses propres données dans son propre outil, sans y penser.",
   "Personne d’autre n’y a accès facilement : ni pour les croiser, ni même pour savoir qu’elles existent. C’est le silo.",
   "Deux services finissent par tenir chacun leur propre version du même chiffre, sans jamais le savoir — et sans jamais se mettre d’accord.",
   "On le décloisonne en centralisant une copie des données dans un entrepôt commun, accessible à qui en a besoin, pas seulement à qui l’a créée."],
  voir='gouvernance-data',
  pas="un doublon, qui est une donnée dupliquée par erreur ; le silo, lui, est une donnée intacte mais simplement inaccessible aux autres."),

 dict(id='mfa', terme='MFA / 2FA (authentification multifacteur)', aka=['mfa','2fa','authentification multifacteur','double authentification','authentification à deux facteurs'], dom='Réseau',
  une="Un deuxième verrou après le mot de passe, pour qu’un mot de passe volé ne suffise plus.",
  etapes=[
   "Un mot de passe seul ne prouve qu’une chose : que quelqu’un le connaît — pas que c’est vous. Il peut avoir été deviné, réutilisé ailleurs, ou volé par hameçonnage.",
   "Le MFA ajoute une preuve d’une autre nature : un code envoyé sur votre téléphone, une application dédiée, ou une clé physique.",
   "À la connexion, les deux preuves sont demandées l’une après l’autre — le mot de passe, puis ce second facteur — jamais deux fois le même type de preuve.",
   "Un mot de passe volé ne suffit alors plus : sans le téléphone ou la clé, la connexion reste bloquée. C’est le geste de sécurité le plus rentable qui existe."],
  voir='cybersecurite'),

 dict(id='environnement-test', terme='Environnement de test (bac à sable)', aka=['bac à sable','sandbox','environnement de test','environnement de recette','environnement de dev'], dom='SI',
  une="Une copie sans conséquence de l’outil réel, où l’on peut tout casser sans rien risquer.",
  etapes=[
   "Un ERP ou un CRM en production fait tourner l’activité réelle : une erreur testée dessus touche de vraies commandes, de vrais clients.",
   "Un environnement de test — ou bac à sable — est une copie du même outil, chargée de fausses données ou de données anonymisées, isolée de la production.",
   "On y installe une nouvelle version, on y règle une configuration, on y forme les utilisateurs : tout ce qui casse là-bas reste là-bas.",
   "Un projet en compte souvent plusieurs — développement, puis recette — avant la mise en production, chacune plus proche du réel que la précédente."],
  voir='projet-si'),

 dict(id='anonymisation', terme='Anonymisation et pseudonymisation', aka=['anonymisation','pseudonymisation','données anonymes','données pseudonymisées'], dom='Data',
  une="Deux façons de rendre une donnée moins parlante, mais une seule est vraiment sans retour possible.",
  etapes=[
   "Une donnée personnelle identifie quelqu’un : un nom, un e-mail, parfois une simple combinaison de date de naissance et de code postal.",
   "La pseudonymisation remplace ce qui identifie par un code, mais garde ailleurs une table de correspondance qui permet de revenir en arrière.",
   "L’anonymisation, elle, supprime ce lien pour de bon : aucune table, nulle part, ne permet de retrouver la personne d’origine.",
   "La nuance compte légalement : une donnée pseudonymisée reste une donnée personnelle soumise au RGPD ; une donnée vraiment anonyme n’en est plus une."],
  voir='rgpd'),

 dict(id='protocole', terme='Protocole (réseau)', aka=['protocole','http','tcp/ip','norme réseau'], dom='Réseau',
  une="La règle du jeu commune qui permet à deux machines de se comprendre, quel que soit leur fabricant.",
  etapes=[
   "Deux ordinateurs différents, deux systèmes différents : rien ne garantit qu’ils se comprennent, sauf s’ils suivent la même règle du jeu.",
   "Un protocole fixe cette règle à l’avance : quel format de message envoyer, dans quel ordre, comment dire « bien reçu ».",
   "HTTP pour une page web, SMTP pour un e-mail, Wifi pour l’air entre la box et le téléphone : chaque usage a le sien, empilés les uns sur les autres.",
   "Tant que les deux bouts parlent le même protocole, peu importe la marque de la machine ou le système derrière : c’est ce qui a rendu Internet possible."],
  voir='internet'),

 dict(id='nosql', terme='NoSQL', aka=['nosql','base nosql','base non relationnelle','base document'], dom='Data',
  une="Une famille de bases de données qui range l’information autrement que dans des tableaux figés.",
  etapes=[
   "Une base SQL classique range tout dans des tableaux à colonnes fixes : pratique tant que la donnée est régulière — un client, une commande.",
   "Certaines données ne rentrent pas bien dans ce moule : un document au contenu variable, un réseau de relations, un flux de mesures à haute fréquence.",
   "Le NoSQL regroupe plusieurs familles de bases pensées pour ces cas — document, clé-valeur, graphe — chacune avec sa propre forme de rangement.",
   "Le choix se fait sur la forme de la donnée, pas sur la mode : une base SQL bien pensée reste souvent le bon outil pour des données structurées."],
  voir='base-de-donnees',
  pas="le SQL, qui désigne le langage de requête des bases relationnelles ; le NoSQL, lui, désigne des bases qui souvent n’utilisent pas ce langage."),

 dict(id='appel-outils', terme='Appel d’outils (function calling)', aka=['function calling','appel d’outils','tool use','outils'], dom='IA',
  une="La capacité d’un modèle à demander l’exécution d’une action précise, plutôt que de se contenter d’écrire du texte.",
  etapes=[
   "Un modèle de langage ne sait faire qu’une chose : écrire du texte, un mot après l’autre.",
   "On lui décrit à l’avance une liste d’outils disponibles — envoyer un e-mail, chercher un prix, lire un fichier — chacun avec son nom et ses paramètres.",
   "Face à une demande qui l’exige, il n’exécute rien lui-même : il écrit une demande structurée — « utilise cet outil, avec ces paramètres » — que le programme autour lui exécute à sa place.",
   "Le résultat de cet outil lui est rendu, et il poursuit sa réponse avec cette information neuve. C’est ce mécanisme qui transforme un assistant en agent."],
  voir='agent'),

 dict(id='bug', terme='Bug (bogue)', aka=['bug','bogue','plantage','anomalie'], dom='Informatique',
  une="Un comportement du programme qui s’écarte de ce qu’il devait faire — jamais un caprice de la machine.",
  etapes=[
   "Un ordinateur ne fait qu’exécuter des instructions, sans les comprendre : il ne « décide » jamais de mal se comporter.",
   "Un bug est un défaut dans ces instructions elles-mêmes — une condition oubliée, un cas particulier non prévu par la personne qui a écrit le code.",
   "Il peut rester invisible des années si le cas qui le déclenche ne se présente jamais, puis apparaître brutalement le jour où il se produit.",
   "Le corriger, c’est rouvrir le texte du programme et réécrire la ligne fautive — pas redémarrer la machine, même si ça arrange parfois les choses en attendant."],
  voir='algorithme'),
]
