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
  voir='entrainement-inference'),

 dict(id='inference', terme='Inférence', aka=['inférence','inference','utilisation','appel'], dom='IA',
  une="Le moment où le modèle s’en sert, par opposition au moment où on l’a fabriqué.",
  etapes=[
   "Deux temps très différents : l’entraînement, une fois, et l’inférence, à chaque question posée.",
   "L’inférence, c’est faire passer votre texte à travers le modèle figé pour en produire un autre.",
   "C’est rapide et bien moins cher que l’entraînement — mais multiplié par des millions d’appels quotidiens.",
   "C’est là que part l’essentiel de la facture d’une entreprise : pas dans la fabrication, dans l’usage."],
  voir='entrainement-inference'),

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
  voir='etl'),

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
  voir='adresse-ip',
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
  voir='mfa'),

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

 dict(id='dette-technique', terme='Dette technique', aka=['dette technique','technical debt','code à refaire'], dom='SI',
  une="Le coût caché des raccourcis pris hier, à rembourser un jour avec les intérêts.",
  etapes=[
   "Sous la pression d’un délai, on choisit parfois la solution rapide plutôt que la solution propre : un correctif au lieu d’une vraie refonte.",
   "Ce choix fonctionne dans l’instant, mais laisse une base plus fragile — plus difficile à comprendre, à modifier, à faire évoluer sans casser autre chose.",
   "Comme un emprunt, elle s’accumule en silence, jusqu’au jour où chaque nouvelle demande, même petite, devient lente et risquée.",
   "La rembourser, c’est réserver du temps pour nettoyer plutôt que d’empiler une fonctionnalité de plus : un choix d’équipe, pas un luxe."],
  voir='projet-si'),

 dict(id='mvp', terme='MVP (produit minimum viable)', aka=['mvp','minimum viable product','produit minimum viable','version minimale'], dom='SI',
  une="La plus petite version d’un produit qui permet déjà d’apprendre quelque chose de vrais utilisateurs.",
  etapes=[
   "Construire un outil complet avant de savoir s’il répond à un vrai besoin, c’est risquer des mois de travail sur une hypothèse jamais testée.",
   "Le MVP inverse l’ordre : on livre la version la plus réduite possible, mais qui rend déjà un service réel à un petit groupe d’utilisateurs.",
   "Leur usage réel — ce qu’ils utilisent, ce qu’ils ignorent, ce qu’ils demandent en plus — vaut plus que n’importe quelle réunion de cadrage.",
   "Chaque version suivante s’appuie sur ces retours, pas sur des suppositions : on construit ce qui manque vraiment, pas ce qu’on avait imaginé."],
  voir='projet-si',
  pas="un produit bâclé : le MVP doit rester fiable et utilisable, seulement plus étroit dans ce qu’il couvre."),

 dict(id='framework', terme='Framework (cadre de développement)', aka=['framework','cadre de développement','bibliothèque','librairie'], dom='Informatique',
  une="Un squelette de code déjà écrit, sur lequel un développeur construit plutôt que de repartir de zéro.",
  etapes=[
   "Beaucoup de programmes ont besoin des mêmes briques de base : afficher une page, gérer une connexion, sécuriser un mot de passe.",
   "Un framework fournit ces briques toutes faites, organisées selon des règles précises — au développeur de remplir les cases propres à son projet.",
   "Cela évite de réinventer et de retester ce que des milliers d’autres projets utilisent déjà, avec les mêmes bugs déjà corrigés une fois pour toutes.",
   "La contrepartie : on adopte aussi ses règles et ses limites — en sortir demande souvent de réécrire une bonne partie du projet."],
  voir='logiciel',
  pas="une bibliothèque, plus petite et plus ponctuelle : on l’appelle depuis son propre code, alors qu’avec un framework, c’est lui qui appelle le vôtre."),

 dict(id='scalabilite', terme='Scalabilité (montée en charge)', aka=['scalabilité','montée en charge','scalability','passage à l’échelle'], dom='Informatique',
  une="La capacité d’un système à absorber plus de demandes en ajoutant des ressources, sans tout reconstruire.",
  etapes=[
   "Un outil pensé pour cent utilisateurs craque souvent bien avant d’en accueillir dix mille.",
   "Scalable, il encaisse la croissance en ajoutant des ressources — plus de serveurs, plus de mémoire — sans changer son fonctionnement interne.",
   "Deux façons d’ajouter des ressources : une machine plus puissante (verticale), ou plusieurs machines identiques réparties (horizontale, la plus courante aujourd’hui).",
   "Le cloud a rendu la scalabilité horizontale presque triviale : ajouter un serveur prend des minutes, pas des semaines de commande de matériel."],
  voir='load-balancer'),

 dict(id='ransomware', terme='Rançongiciel (ransomware)', aka=['rançongiciel','ransomware','rançon','chiffrement malveillant'], dom='Réseau',
  une="Un logiciel malveillant qui chiffre vos fichiers et exige une rançon pour la clé qui les débloque.",
  etapes=[
   "Le piège arrive souvent par un e-mail piégé ou une pièce jointe ouverte sans méfiance — le même chemin que le hameçonnage.",
   "Une fois lancé, le programme chiffre silencieusement les fichiers de la machine, puis ceux du réseau accessible, en quelques minutes.",
   "Un message apparaît alors : la clé de déchiffrement s’échange contre une rançon, payable en cryptomonnaie, sous un délai compté.",
   "La payer ne garantit rien ; la seule parade fiable est en amont : une sauvegarde récente, gardée hors d’atteinte du réseau infecté."],
  voir='sauvegarde',
  pas="le hameçonnage, souvent la porte d’entrée du rançongiciel — celui-ci est le logiciel qui agit une fois entré."),

 dict(id='catalogue-donnees', terme='Catalogue de données', aka=['catalogue de données','data catalog','inventaire des données'], dom='Data',
  une="L’annuaire qui recense où vit chaque donnée de l’entreprise, ce qu’elle veut dire, et qui peut s’en servir.",
  etapes=[
   "Une entreprise qui grandit accumule les tables, les tableurs, les entrepôts — sans que personne n’ait la vue d’ensemble de ce qui existe où.",
   "Le catalogue de données recense chaque source : son emplacement, sa définition, sa fraîcheur, son propriétaire.",
   "Il devient le point de passage avant de chercher une donnée : on y vérifie d’abord si elle existe déjà, avant d’en redemander une copie.",
   "Sans lui, deux équipes reconstruisent souvent la même donnée chacune de leur côté, avec deux définitions qui finissent par diverger."],
  voir='gouvernance-data'),

 dict(id='proxy', terme='Proxy (serveur mandataire)', aka=['proxy','serveur mandataire','proxy web'], dom='Réseau',
  une="Un intermédiaire qui relaie vos demandes à votre place, et peut au passage filtrer, accélérer ou masquer.",
  etapes=[
   "Normalement, votre appareil s’adresse directement au site visité : votre demande part, sa réponse revient.",
   "Un proxy s’intercale entre les deux : c’est lui qui contacte le site, puis vous transmet la réponse reçue.",
   "Au passage, il peut filtrer des adresses interdites, garder une copie pour accélérer la prochaine demande, ou masquer votre adresse réelle au site visité.",
   "Une entreprise en place un en sortie de son réseau pour surveiller et filtrer ; un particulier, pour changer d’adresse apparente."],
  voir='vpn',
  pas="le VPN, qui chiffre aussi tout le trajet entre vous et lui — un proxy, la plupart du temps, ne fait que relayer, sans rien chiffrer de plus."),

 dict(id='cdn', terme='CDN (réseau de diffusion de contenu)', aka=['cdn','content delivery network','réseau de diffusion de contenu'], dom='Réseau',
  une="Des copies d’un même site posées un peu partout dans le monde, pour répondre depuis le serveur le plus proche du visiteur.",
  etapes=[
   "Un site hébergé sur un seul serveur, dans un seul pays, répond vite tout près de lui et plus lentement à l’autre bout du monde.",
   "Un CDN dépose des copies des fichiers les plus demandés — images, vidéos, scripts — sur des serveurs répartis sur plusieurs continents.",
   "Une visite depuis Tokyo ou depuis Paris est alors servie par la copie la plus proche, pas par le serveur d’origine.",
   "Résultat : une page plus rapide à charger partout, et un serveur d’origine bien moins sollicité, même en cas de pic de trafic."],
  voir='internet'),

 dict(id='ci-cd', terme='CI/CD (intégration et déploiement continus)', aka=['ci/cd','intégration continue','déploiement continu','pipeline ci/cd'], dom='SI',
  une="La chaîne automatisée qui teste puis met en ligne chaque modification de code, sans attendre une grosse livraison.",
  etapes=[
   "Livrer du code une fois par trimestre, en un seul bloc, rend chaque mise en production risquée : trop de changements à la fois.",
   "L’intégration continue (CI) rassemble et teste automatiquement chaque modification dès qu’un développeur la propose, plusieurs fois par jour.",
   "Le déploiement continu (CD) prend le relais : si les tests passent, le changement part en production sans attendre, parfois tout seul.",
   "Des changements petits et fréquents, testés à chaque étape, sont plus faciles à corriger qu’une grosse livraison annuelle qui casse tout à la fois."],
  voir='projet-si',
  pas="la recette, qui fait rejouer les scénarios par de vrais utilisateurs avant mise en service — le CI/CD, lui, automatise des tests techniques, exécutés à chaque changement de code."),

 dict(id='test-ab', terme='Test A/B', aka=['test a/b','a/b testing','test ab'], dom='Data',
  une="Montrer deux versions différentes à deux groupes de visiteurs, et laisser les chiffres décider laquelle vaut mieux.",
  etapes=[
   "Changer un bouton, un prix ou un message repose souvent sur une intuition — sans savoir si les visiteurs préfèrent vraiment la nouveauté.",
   "Un test A/B répartit les visiteurs au hasard en deux groupes : le groupe A voit l’ancienne version, le groupe B voit la nouvelle.",
   "On mesure ensuite le même indicateur des deux côtés — taux de clic, d’achat — pendant une durée fixée à l’avance.",
   "Si l’écart est net et régulier, pas un hasard d’un seul jour, la version gagnante devient la nouvelle référence pour tout le monde."],
  voir='bi-tableau-de-bord',
  pas="un KPI, qui est le chiffre suivi en continu — le test A/B, lui, est l’expérience ponctuelle qui compare deux versions sur ce chiffre."),

 dict(id='chiffrement-bout-en-bout', terme='Chiffrement de bout en bout', aka=['e2e','bout en bout','end-to-end','messagerie chiffrée'], dom='Réseau',
  une="Un message chiffré dès l’envoi et lisible seulement par son destinataire — pas même par le service qui le transporte.",
  etapes=[
   "Un message qui passe par un service (messagerie, appel) traverse ses serveurs : sans protection, le service pourrait le lire.",
   "Avec le chiffrement de bout en bout, votre appareil verrouille le message avant l’envoi, avec une clé que seul le destinataire possède.",
   "Le service ne fait alors que transporter une suite illisible : il ne peut ni la lire, ni la montrer à quelqu’un qui la lui demanderait.",
   "La contrepartie : si vous perdez vos clés, personne ne peut vous aider à récupérer le contenu. Le verrou n’a pas de double."],
  voir='chiffrement',
  pas="le simple cadenas du navigateur, qui protège le trajet jusqu’au service, mais que le service peut ensuite lire — ici, il ne le peut pas."),

 dict(id='reseau-neurones', terme='Réseau de neurones', aka=['réseau de neurones','neural network','neurone artificiel','deep learning','apprentissage profond'], dom='IA',
  une="Un empilement de petites unités de calcul qui, ensemble, apprennent à reconnaître des motifs à partir d’exemples.",
  etapes=[
   "Certaines tâches, comme reconnaître un visage, sont impossibles à décrire par des règles écrites à la main.",
   "Un réseau de neurones est fait de nombreuses unités simples, rangées en couches : chacune reçoit des nombres, les pondère, et transmet le résultat à la couche suivante.",
   "À l’entraînement, on lui montre des exemples ; à chaque erreur, on ajuste très légèrement les pondérations, des millions de fois.",
   "On parle d’apprentissage profond (deep learning) quand il y a beaucoup de couches. Le nom vient d’une image du cerveau, mais le fonctionnement reste du calcul."],
  voir='machine-learning',
  pas="un cerveau : l’analogie est une inspiration de départ, pas une copie de la biologie."),

 dict(id='qualite-donnees', terme='Qualité des données', aka=['qualité des données','data quality','données propres','nettoyage'], dom='Data',
  une="Le degré de confiance qu’on peut accorder à une donnée : est-elle juste, complète, à jour, sans doublon ?",
  etapes=[
   "Un tableau de bord peut être parfaitement construit et afficher pourtant des chiffres faux, si les données de départ le sont.",
   "On juge une donnée sur quelques critères simples : exacte, complète, à jour, sans doublon, écrite toujours de la même façon.",
   "On les contrôle par des règles automatiques (un code postal a cinq chiffres, une date n’est pas dans le futur) et on corrige à la source.",
   "Corriger en aval ne suffit pas : mieux vaut empêcher l’erreur à la saisie que la réparer chaque semaine dans les rapports."],
  voir='gouvernance-data',
  pas="le dédoublonnage, qui n’est qu’un des contrôles : la qualité couvre aussi l’exactitude, la complétude et la fraîcheur."),

 dict(id='shadow-it', terme='Shadow IT (informatique fantôme)', aka=['shadow it','informatique fantôme','outils non validés','sauvage'], dom='SI',
  une="Les outils utilisés dans une entreprise à l’insu du service informatique, souvent parce qu’ils dépannent vite.",
  etapes=[
   "Une équipe a un besoin urgent, l’outil officiel est trop lent ou n’existe pas : elle s’inscrit à un service en ligne avec sa propre carte ou son adresse pro.",
   "L’outil marche, l’équipe est contente, et personne d’autre dans l’entreprise ne sait qu’il existe : c’est le shadow IT.",
   "Le risque est là : des données de l’entreprise partent chez un fournisseur non examiné, sans sauvegarde, sans droits gérés, sans départ prévu quand la personne quitte.",
   "L’interdire en bloc marche rarement. Mieux vaut comprendre le besoin qu’il révèle, et proposer une solution validée qui le couvre."],
  voir='no-code',
  pas="le no-code, qui est une façon de construire ; le shadow IT décrit seulement le fait que l’outil échappe à tout contrôle."),

 dict(id='git', terme='Git', aka=['git', 'dépôt', 'commit', 'github', 'gitlab', 'versionnage du code'], dom='Informatique',
  une="L’outil qui garde l’historique complet d’un projet de code et permet à plusieurs personnes d’y travailler sans s’écraser.",
  etapes=[
   "Quand plusieurs personnes modifient les mêmes fichiers, on finit avec des copies « version finale 2 » et des changements écrasés.",
   "Git enregistre le projet à chaque étape choisie par les développeurs : un « commit », c’est un point de sauvegarde daté, signé et commenté.",
   "Chacun peut travailler sur sa propre branche, une ligne parallèle, puis proposer de la fusionner avec la principale une fois le travail relu.",
   "On peut ainsi revenir à n’importe quel point passé et voir qui a changé quoi. Les sites comme GitHub ou GitLab hébergent ces projets en ligne."],
  voir='versionnage',
  pas="GitHub, qui est un service en ligne construit autour de Git — Git lui-même est l’outil, et fonctionne aussi sans internet."),

 dict(id='jointure', terme='Jointure (JOIN)', aka=['jointure', 'join', 'relier deux tables', 'clé étrangère', 'clé primaire'], dom='Data',
  une="L’opération qui rapproche deux tableaux de données grâce à une colonne qu’ils ont en commun.",
  etapes=[
   "Une base de données range chaque sujet dans son propre tableau : un pour les clients, un pour les commandes, plutôt que tout mélangé.",
   "Pour éviter les répétitions, la commande ne contient pas le nom du client, seulement son numéro : la colonne commune aux deux tableaux.",
   "La jointure rapproche les lignes des deux tableaux qui portent le même numéro, et reconstitue « telle commande, passée par tel client ».",
   "Si le numéro manque ou est faux d’un côté, la ligne ne trouve pas son pendant : c’est une cause classique de chiffres qui ne collent pas."],
  voir='base-de-donnees',
  pas="le dédoublonnage, qui cherche les lignes en double au sein d’un tableau ; la jointure relie deux tableaux différents."),

 dict(id='biais-ia', terme='Biais (en IA)', aka=['biais', 'biais algorithmique', 'discrimination', 'équité', 'données biaisées'], dom='IA',
  une="Une déformation systématique dans les réponses d’une IA, héritée de ses exemples d’entraînement.",
  etapes=[
   "Une IA apprend à partir d’exemples. Elle ne connaît du monde que ce que ces exemples lui montrent.",
   "Si certains cas y sont rares, absents ou décrits de façon déséquilibrée, elle reproduit ce déséquilibre sans le remarquer.",
   "Cela donne, par exemple, un outil de tri de candidatures qui favorise les profils ressemblant à ceux déjà embauchés.",
   "On le limite en examinant les exemples de départ, en testant les résultats sur différents groupes, et en gardant un humain dans la boucle."],
  voir='machine-learning',
  pas="une hallucination, qui est une invention isolée ; le biais est une pente régulière, présente à chaque réponse."),

 dict(id='agile', terme='Agile', aka=['agile', 'scrum', 'sprint', 'méthode agile', 'itératif'], dom='SI',
  une="Une façon de mener un projet par petites livraisons successives, plutôt qu’en une seule livraison à la fin.",
  etapes=[
   "Dans un projet classique, on décrit tout au début et on livre tout à la fin. Si le besoin a changé entre-temps, il est trop tard.",
   "La démarche agile découpe le travail en cycles courts, de quelques semaines, appelés sprints dans la méthode Scrum.",
   "À la fin de chaque cycle, l’équipe montre quelque chose qui fonctionne et recueille l’avis des utilisateurs, puis ajuste la suite.",
   "On corrige le tir plus tôt, au prix d’une implication régulière du métier — et d’un périmètre final moins figé au départ."],
  voir='projet-si',
  pas="le cycle en V, la démarche classique où chaque phase se termine avant que la suivante ne commence."),

 dict(id='latence', terme='Latence', aka=['latence', 'ping', 'délai', 'temps de réponse', 'lag'], dom='Réseau',
  une='Le temps qu’un message met à faire l’aller-retour entre deux machines.',
  etapes=['Quand vous cliquez, une demande part, atteint un serveur, et la réponse revient. Ce trajet prend un temps, même très court.', 'Ce temps s’appelle la latence. On la mesure en millisecondes, souvent avec l’outil « ping ».', 'Elle dépend surtout de la distance parcourue et du nombre d’étapes traversées, pas du tuyau lui-même.', 'Une latence élevée gêne les appels vidéo et les jeux en ligne, même avec une grosse connexion.'],
  voir='wifi-box',
  pas='le débit, qui est la quantité de données transportée par seconde ; la latence est le temps d’un aller-retour.'),

 dict(id='backlog', terme='Backlog', aka=['backlog', 'liste des tâches', 'product backlog', 'priorisation'], dom='SI',
  une='La liste ordonnée de tout ce qu’il reste à construire dans un projet.',
  etapes=['Dans un projet, les envies ne cessent d’arriver : nouvelles fonctions, corrections, idées des utilisateurs.', 'On les note toutes dans une même liste, le backlog, chacune formulée de façon compréhensible par le métier.', 'On la classe ensuite par priorité : ce qui apporte le plus de valeur est en haut, et l’équipe pioche par le haut.', 'La liste vit : on la réordonne à mesure que le besoin évolue. Elle sert de support de dialogue entre le métier et l’équipe.'],
  voir='projet-si',
  pas='le cahier des charges, qui fige le besoin au départ ; le backlog est une liste qu’on réordonne tout au long du projet.'),

 dict(id='referentiel', terme='Données de référence (référentiel)', aka=['référentiel', 'données de référence', 'mdm', 'master data', 'données maîtres'], dom='Data',
  une='La liste officielle et unique des objets de base de l’entreprise : clients, produits, sites.',
  etapes=['Le même client existe souvent dans plusieurs outils : facturation, CRM, support. Chacun a sa version, parfois différente.', 'Un référentiel désigne, pour chaque objet de base, une fiche unique de référence, avec un identifiant commun.', 'Les autres outils s’y rattachent ou s’y synchronisent au lieu de recopier l’information à leur façon.', 'Cela évite les doublons et les chiffres qui divergent ; il faut en échange désigner qui a le droit de le modifier.'],
  voir='gouvernance-data',
  pas='le dédoublonnage, qui nettoie des doublons existants ; le référentiel organise les choses pour qu’ils n’apparaissent pas.'),

 dict(id='chaine-de-pensee', terme='Chaîne de pensée', aka=['chaîne de pensée', 'chain of thought', 'raisonnement', 'étape par étape', 'réfléchir'], dom='IA',
  une='Demander à l’IA d’écrire son raisonnement étape par étape avant de donner sa réponse.',
  etapes=['Un modèle écrit mot après mot. Sur un problème à plusieurs étapes, une réponse donnée d’emblée est plus souvent fausse.', 'En lui demandant de détailler d’abord les étapes, chaque ligne écrite devient un appui pour la suivante.', 'Le raisonnement affiché fait partie du texte que le modèle lit pour produire la suite de sa réponse.', 'Cela aide sur les calculs et la logique, mais coûte plus de texte, et un raisonnement bien écrit peut rester faux : il se vérifie.'],
  voir='prompt',
  pas='une hallucination, qui est une invention ; la chaîne de pensée est une technique de demande qui réduit certaines erreurs.'),

 dict(id='https', terme='HTTPS (le cadenas)', aka=['https', 'cadenas', 'certificat', 'tls', 'ssl', 'site sécurisé'], dom='Réseau',
  une='La version protégée du web : ce qui voyage entre vous et le site est chiffré, et le site prouve qui il est.',
  etapes=['Sur un réseau, votre demande traverse plusieurs machines. Sans protection, chacune pourrait la lire ou la modifier.', 'Avec HTTPS, le navigateur et le site se mettent d’abord d’accord sur un secret commun, puis chiffrent tout ce qu’ils échangent.', 'Le site présente aussi un certificat, une carte d’identité délivrée par un organisme tiers, que le navigateur vérifie. Le cadenas indique que tout est en ordre.', 'Le cadenas garantit un échange privé avec le site affiché, pas que ce site soit honnête : un site frauduleux peut aussi en avoir un.'],
  voir='https-cadenas',
  pas='le VPN, qui protège toute votre connexion ; HTTPS protège l’échange avec un site précis.'),

 dict(id='data-roles', terme='Data analyst, data engineer, data scientist', aka=['data analyst', 'data engineer', 'data scientist', 'analyste de données', 'ingénieur data', 'métiers de la data'], dom='Data',
  une='Les trois métiers de la data : celui qui amène les données, celui qui les lit, celui qui prédit.',
  etapes=['Avant de servir à quelque chose, une donnée doit être collectée, rangée, nettoyée, puis interprétée. Ce n’est pas le travail d’une seule personne.', 'Le data engineer construit les tuyaux : il fait arriver les données propres et à jour au bon endroit.', 'Le data analyst les interroge et les met en forme, pour répondre à une question : que s’est-il passé, et où ?', 'Le data scientist construit des modèles qui prévoient ou classent. Les trois dépendent les uns des autres, et les frontières varient d’une entreprise à l’autre.'],
  voir='bi-tableau-de-bord',
  pas='un chef de projet data, qui coordonne le travail sans manipuler lui-même les données.'),

 dict(id='rpa', terme='RPA (robot logiciel)', aka=['rpa', 'robot logiciel', 'automatisation', 'robotic process automation', 'automatiser'], dom='SI',
  une='Un programme qui refait à votre place les clics et les saisies d’une tâche répétitive.',
  etapes=['Beaucoup de tâches de bureau se répètent à l’identique : copier une valeur d’un écran vers un autre, remplir le même formulaire.', 'Un robot logiciel enregistre ces gestes, puis les rejoue seul : il ouvre les écrans, lit les champs, saisit les données.', 'Il travaille avec les outils existants, sans les modifier, un peu comme une personne invisible devant l’écran.', 'Il convient aux règles stables et précises. Si un écran change, le robot s’arrête ou se trompe : il demande une surveillance.'],
  voir='no-code',
  pas='une IA, qui sait gérer le flou ; un robot logiciel suit à la lettre des règles écrites d’avance.'),

 dict(id='deploiement', terme='Mise en production', aka=['mise en production', 'déploiement', 'mep', 'production', 'déployer', 'livraison'], dom='Informatique',
  une='Le moment où une nouveauté quitte l’atelier pour être utilisée par de vrais utilisateurs.',
  etapes=['Un logiciel se construit et se teste dans des environnements à part, sans risque pour les utilisateurs.', 'Quand il est jugé prêt, on l’installe sur les machines que tout le monde utilise : c’est la mise en production.', 'Ce passage est délicat : une erreur touche tout de suite les vrais utilisateurs. On le prépare, souvent à une heure creuse, avec un plan pour revenir en arrière.', 'Beaucoup d’équipes l’automatisent pour le rendre plus fréquent et moins stressant, et surveillent le résultat juste après.'],
  voir='versionnage',
  pas='un environnement de test, où l’on essaie sans conséquence ; la production est l’endroit où cela compte.'),

 dict(id='surapprentissage', terme='Surapprentissage', aka=['surapprentissage', 'overfitting', 'apprendre par cœur', 'sur-ajustement'], dom='IA',
  une='Quand un modèle retient ses exemples par cœur au lieu d’en tirer la règle.',
  etapes=['On entraîne un modèle sur des exemples pour qu’il réussisse ensuite sur des cas qu’il n’a jamais vus.', 'S’il s’y colle trop, il retient les détails propres à ces exemples, y compris les accidents sans importance, plutôt que la règle générale.', 'Il obtient alors d’excellents résultats sur ses exemples d’entraînement, et de mauvais sur les cas nouveaux : comme un élève qui récite son cours sans l’avoir compris.', 'On le détecte en testant sur des données mises de côté. On le limite avec plus d’exemples variés ou un modèle plus simple.'],
  voir='machine-learning',
  pas='une hallucination, qui est une invention d’un modèle de langage ; le surapprentissage est un défaut de l’entraînement.'),

 dict(id='regle-3-2-1', terme='Règle 3-2-1 (sauvegarde)', aka=['3-2-1', 'règle 3-2-1', 'trois copies', 'sauvegarde', 'backup'], dom='Réseau',
  une='Trois copies de vos données, sur deux supports différents, dont une hors de chez vous.',
  etapes=['Un disque finit toujours par tomber en panne, et un incendie, un vol ou un virus peuvent emporter tout ce qui se trouve au même endroit.', 'La règle 3-2-1 répond à chaque risque : trois copies au total (l’original et deux sauvegardes), sur deux supports différents, dont une copie conservée ailleurs.', 'Deux supports évitent qu’une même panne détruise tout ; une copie hors site (autre bâtiment ou cloud) résiste au sinistre local.', 'Une copie qui se synchronise avec l’original n’est pas une sauvegarde : une suppression par erreur s’y répète aussi. Et une sauvegarde jamais testée est un pari.'],
  voir='sauvegarde',
  pas='la synchronisation, qui reflète vos changements partout, y compris vos erreurs ; une sauvegarde garde un état passé.'),

 dict(id='entrepot-donnees', terme='Entrepôt de données (data warehouse)', aka=['entrepôt de données', 'data warehouse', 'datawarehouse', 'entrepôt'], dom='Data',
  une='Une grande base qui rassemble les données de toute l’entreprise, rangées pour être analysées.',
  etapes=['Chaque outil d’une entreprise garde ses propres données : ventes d’un côté, comptabilité d’un autre. Les croiser est pénible.', 'Un entrepôt de données les récupère régulièrement depuis ces sources, les nettoie et les range dans un même format.', 'Ainsi rangées, elles peuvent être interrogées ensemble, rapidement, sans ralentir les outils du quotidien.', 'Les tableaux de bord et les analyses s’appuient dessus. Sa qualité dépend de celle du rangement : des données mal alignées donnent des chiffres qui se contredisent.'],
  voir='entrepots-data',
  pas='un lac de données, qui garde les données brutes telles quelles ; l’entrepôt ne garde que du rangé.'),

 dict(id='tma', terme='TMA (maintenance applicative)', aka=['tma', 'maintenance applicative', 'tierce maintenance applicative', 'maintenance corrective', 'maintenance évolutive', 'run'], dom='SI',
  une='Le travail de faire vivre un logiciel après sa mise en service : corriger, adapter, améliorer.',
  etapes=['Un logiciel livré n’est pas terminé : des erreurs apparaissent à l’usage, les règles de gestion et le monde autour évoluent.', 'La maintenance corrective répare ce qui ne marche pas ; la maintenance évolutive ajoute ou adapte des fonctions à de nouveaux besoins.', 'La TMA est ce même travail confié à une équipe extérieure, sur la durée, avec des engagements de délai, souvent à travers des tickets.', 'Elle représente en général une part importante du coût d’un logiciel sur sa durée de vie : il faut le prévoir dès le départ, pas seulement le budget de construction.'],
  voir='support',
  pas='le support aux utilisateurs, qui répond aux questions du quotidien ; la maintenance modifie le logiciel lui-même.'),

 dict(id='deepfake', terme='Deepfake (hypertrucage)', aka=['deepfake', 'hypertrucage', 'faux vidéo', 'voix clonée', 'clonage de voix'], dom='IA',
  une='Une image, une vidéo ou une voix fabriquée par IA qui imite une personne réelle.',
  etapes=['Montrer quelqu’un dire ou faire ce qu’il n’a jamais dit ni fait demandait autrefois de gros moyens de retouche.', 'Un modèle entraîné sur des photos, vidéos ou enregistrements d’une personne apprend à reproduire son visage ou sa voix, puis à la faire dire autre chose.', 'Les outils sont aujourd’hui accessibles : un faux peut être convaincant, et servir à l’arnaque, à la désinformation ou au harcèlement.', 'Quelques réflexes : vérifier la source, chercher la même information ailleurs, se méfier d’une demande urgente reçue par voix ou vidéo, et convenir avec ses proches d’un mot de contrôle.'],
  voir='hallucination',
  pas='une hallucination, qui est une erreur involontaire d’un modèle de langage ; un deepfake est un faux fabriqué pour imiter quelqu’un.'),

 dict(id='hyperviseur', terme='Machine virtuelle (hyperviseur)', aka=['machine virtuelle', 'vm', 'hyperviseur', 'virtualisation'], dom='Informatique',
  une='Un ordinateur simulé par logiciel, qui tourne à l’intérieur d’un vrai.',
  etapes=['Un ordinateur ne fait tourner qu’un système à la fois, et il est souvent loin d’être utilisé à fond.', 'Un logiciel appelé hyperviseur découpe la machine réelle en plusieurs machines virtuelles, chacune avec sa part de mémoire, de processeur et de disque.', 'Chaque machine virtuelle a son propre système et se croit seule au monde : un incident dans l’une n’atteint pas les autres.', 'On utilise mieux le matériel, on crée une machine en quelques minutes et on peut la déplacer ou la copier facilement. C’est la base du cloud.'],
  voir='virtualisation',
  pas='un conteneur, plus léger, qui partage le système de la machine au lieu d’en embarquer un complet.'),

 dict(id='dedoublonnage', terme='Dédoublonnage', aka=['dédoublonnage', 'doublon', 'doublons', 'déduplication', 'fusion de fiches'], dom='Data',
  une='Reconnaître que deux fiches décrivent la même personne ou la même chose, et n’en garder qu’une.',
  etapes=['Un même client peut exister plusieurs fois : une faute de frappe, un prénom abrégé, une nouvelle adresse saisie par un autre service.', 'Les doublons faussent les chiffres : on compte deux clients au lieu d’un, on envoie deux courriers, on perd l’historique.', 'Le dédoublonnage compare les fiches sur plusieurs champs à la fois (nom, e-mail, adresse) pour repérer celles qui se ressemblent assez.', 'Les fiches reconnues sont fusionnées en une seule, la plus complète. En cas de doute, une personne tranche : une fusion à tort est difficile à défaire.'],
  voir='dedoublonnage',
  pas='la sauvegarde, qui garde volontairement des copies ; le doublon est une copie involontaire dans les données de travail.'),

 dict(id='webhook', terme='Webhook', aka=['webhook', 'crochet web', 'notification automatique', 'rappel http'], dom='SI',
  une='Un message qu’un outil envoie tout seul à un autre dès qu’il se passe quelque chose.',
  etapes=['Pour savoir si une commande est arrivée, un outil peut demander à l’autre toutes les minutes : « Y a-t-il du nouveau ? ». C’est lent et la plupart des réponses sont « non ».', 'Avec un webhook, on inverse : on donne d’avance à l’outil source l’adresse où prévenir.', 'Dès que l’événement se produit (paiement reçu, formulaire rempli), la source envoie un message à cette adresse, avec les détails.', 'L’autre outil réagit aussitôt, sans rien demander. Il faut seulement que son adresse reste joignable et qu’il vérifie l’origine du message.'],
  voir='api',
  pas='une API classique, où c’est vous qui posez la question ; avec un webhook, c’est l’outil qui vous appelle.'),

 dict(id='chatbot', terme='Chatbot (agent conversationnel)', aka=['chatbot', 'agent conversationnel', 'robot de discussion', 'assistant virtuel'], dom='IA',
  une='Un programme avec lequel on discute par écrit, pour obtenir une réponse ou une action.',
  etapes=['Un chatbot est une fenêtre de discussion : vous écrivez, il répond, comme avec une personne.', 'Les premiers suivaient des règles écrites à la main : ils reconnaissaient quelques mots et renvoyaient une réponse prévue. Hors scénario, ils étaient perdus.', 'Les chatbots actuels s’appuient souvent sur un modèle de langage : ils comprennent des formulations libres et rédigent leurs réponses.', 'Leur qualité dépend de ce qu’on leur permet : consignes, documents à consulter, outils branchés. Sans cela, ils peuvent inventer.'],
  voir='llm',
  pas='un LLM, qui est le moteur de langage ; le chatbot est l’application autour, avec son interface et ses consignes.'),

 dict(id='cle-primaire', terme='Clé primaire et clé étrangère', aka=['clé primaire', 'clé étrangère', 'identifiant unique', 'primary key', 'foreign key', 'clé'], dom='Data',
  une='Un identifiant unique par ligne d’un tableau, et le moyen de s’y référer depuis un autre tableau.',
  etapes=['Dans une base, deux clients peuvent avoir le même nom et le même prénom. Comment les distinguer à coup sûr ?', 'On donne à chaque ligne un identifiant qui ne se répète jamais : le numéro client. C’est la clé primaire.', 'Dans le tableau des commandes, on n’écrit pas toute la fiche du client : on note seulement son numéro. Ce numéro, qui renvoie à une ligne d’un autre tableau, est une clé étrangère.', 'Cela évite de recopier les mêmes informations partout et permet de relier les tableaux entre eux, par exemple avec une jointure.'],
  voir='base-de-donnees',
  pas='un index, qui sert à retrouver plus vite des lignes ; la clé primaire sert à les identifier sans ambiguïté.'),

 dict(id='ligne-de-commande', terme='Ligne de commande (terminal)', aka=['ligne de commande', 'terminal', 'console', 'shell', 'cli', 'invite de commandes'], dom='Informatique',
  une='Une fenêtre où l’on pilote l’ordinateur en tapant des instructions, plutôt qu’en cliquant.',
  etapes=['Avec la souris, on ne peut faire que ce que l’écran propose sous forme de boutons et de menus.', 'La ligne de commande est une fenêtre de texte : on y tape une instruction, on valide, l’ordinateur l’exécute et répond par du texte.', 'C’est plus austère, mais précis : une instruction peut agir sur des milliers de fichiers d’un coup, et on peut en enchaîner plusieurs dans un fichier de script.', 'Les informaticiens s’en servent pour automatiser et administrer les serveurs. Une commande tapée sans la comprendre peut tout effacer : on ne copie pas à l’aveugle.'],
  voir='logiciel',
  pas='une interface graphique, avec fenêtres et boutons ; la ligne de commande donne les mêmes ordres par écrit.'),

 dict(id='middleware', terme='Middleware (intergiciel)', aka=['middleware', 'intergiciel', 'bus de service', 'esb', 'couche d’intégration'], dom='SI',
  une='Le logiciel intermédiaire qui fait circuler les informations entre les applications d’une entreprise.',
  etapes=['Dans une entreprise, chaque outil a son format et sa façon de parler. Les relier deux à deux donne vite un enchevêtrement.', 'Un middleware se place au milieu : chaque application ne parle plus qu’à lui, dans un format convenu.', 'Il reçoit, traduit si besoin, puis redistribue aux applications concernées, et garde une trace de ce qui est passé.', 'On ajoute un outil en le branchant une fois au lieu de le relier à tous les autres. En contrepartie, cette brique devient critique : si elle s’arrête, les échanges s’arrêtent.'],
  voir='si-briques',
  pas='une API, qui est la porte d’un outil ; le middleware est l’aiguilleur qui relie plusieurs portes.'),

 dict(id='apprentissage-supervise', terme='Apprentissage supervisé', aka=['apprentissage supervisé', 'supervised learning', 'classification', 'données étiquetées', 'étiquettes'], dom='IA',
  une='Apprendre à une machine à partir d’exemples dont la bonne réponse est déjà connue.',
  etapes=['Pour apprendre à reconnaître un courriel indésirable, on ne peut pas décrire toutes les règles à la main.', 'On rassemble des milliers d’exemples, chacun accompagné de sa réponse : « indésirable » ou « normal ». Ces réponses s’appellent des étiquettes.', 'Le modèle ajuste ses réglages jusqu’à retrouver les bonnes réponses sur ces exemples, puis on le teste sur des exemples qu’il n’a jamais vus.', 'Il apprend ce que contiennent les exemples : étiquetés par erreur ou peu variés, il se trompera. Étiqueter coûte souvent plus cher que calculer.'],
  voir='machine-learning',
  pas='l’apprentissage non supervisé, où l’on ne fournit aucune réponse et où le modèle cherche seul des regroupements.'),

 dict(id='bande-passante', terme='Bande passante (débit)', aka=['bande passante', 'débit', 'mégabits', 'fibre', 'vitesse de connexion'], dom='Réseau',
  une='La quantité de données qu’une connexion peut faire passer chaque seconde.',
  etapes=['Imaginez un tuyau : plus il est large, plus il laisse passer d’eau en même temps.', 'Pour une connexion, c’est pareil : la bande passante, ou débit, mesure combien de données passent par seconde. On l’exprime en mégabits par seconde.', 'Un gros fichier ou une vidéo en haute qualité demandent un gros débit. Un simple message en demande très peu.', 'Un grand débit ne rend pas la réponse plus rapide à démarrer : cela dépend de la latence. Et le débit annoncé se partage entre tous les appareils connectés.'],
  voir='wifi-box',
  pas='la latence, qui mesure le temps d’un aller-retour ; le débit mesure le volume qui passe.'),

 dict(id='memoire-vive', terme='Mémoire vive (RAM)', aka=['ram', 'mémoire vive', 'mémoire', 'mémoire de travail'], dom='Informatique',
  une='La mémoire de travail de l’ordinateur : rapide, mais qui s’efface quand il s’éteint.',
  etapes=['Pour travailler, un ordinateur ne lit pas tout directement sur le disque : c’est trop lent.', 'Il recopie ce dont il a besoin dans une mémoire très rapide : la mémoire vive, ou RAM. C’est son plan de travail.', 'Plus il y a de RAM, plus on peut ouvrir de programmes et de documents à la fois sans ralentir.', 'Elle se vide à l’extinction : ce qui n’est pas enregistré sur le disque est perdu. D’où l’intérêt d’enregistrer régulièrement.'],
  voir='ordinateur',
  pas='le disque de stockage, qui garde les données même éteint mais est plus lent ; la RAM sert à travailler, le disque à conserver.'),

 dict(id='donnee-personnelle', terme='Donnée personnelle', aka=['donnée personnelle', 'données personnelles', 'rgpd', 'cnil', 'vie privée', 'donnée sensible'], dom='Data',
  une='Toute information qui permet d’identifier une personne, directement ou en recoupant plusieurs éléments.',
  etapes=['Un nom est évidemment une donnée personnelle. Mais aussi une adresse électronique, un numéro de téléphone ou une photo.', 'Même une information qui semble anodine en est une si, associée à d’autres, elle désigne quelqu’un : une adresse IP, un identifiant client, un lieu de travail précis.', 'Le RGPD impose alors des règles : collecter seulement ce qui est utile, dire pourquoi, protéger, et ne pas garder indéfiniment.', 'Les personnes concernées ont des droits : savoir ce qui est conservé, le corriger, demander la suppression. Certaines données, comme la santé, demandent une vigilance renforcée.'],
  voir='rgpd',
  pas='une donnée anonymisée, d’où l’on ne peut plus remonter à une personne ; elle sort du champ de ces règles.'),

 dict(id='pra-pca', terme='PCA et PRA (continuité et reprise d’activité)', aka=['pra', 'pca', 'plan de reprise', 'plan de continuité', 'reprise d’activité', 'sinistre', 'panne majeure'], dom='SI',
  une='Les plans qui décident à l’avance comment une entreprise continue de fonctionner, puis redémarre, après une panne grave.',
  etapes=['Un incendie, une cyberattaque ou une panne de datacenter peuvent arrêter tous les outils d’un coup. Improviser ce jour-là coûte très cher.', 'On prépare donc deux plans. Le plan de continuité (PCA) cherche à éviter l’arrêt : outils doublés, solution de secours en veille.', 'Le plan de reprise (PRA) suppose que l’arrêt a eu lieu et décrit comment redémarrer : quoi relancer d’abord, depuis quelle sauvegarde, par qui.', 'Un plan jamais testé est une promesse sans garantie : on le répète régulièrement, en mesurant le temps de remise en route et la quantité de données perdue.'],
  voir='sauvegarde',
  pas='la sauvegarde, qui n’est qu’une copie des données ; le plan de reprise organise aussi les personnes, l’ordre et les délais.'),

 dict(id='mise-a-jour', terme='Mise à jour (correctif)', aka=['mise à jour', 'patch', 'correctif', 'update', 'faille'], dom='Informatique',
  une='Une nouvelle version d’un logiciel qui corrige des défauts, dont les failles de sécurité.',
  etapes=['Un logiciel est écrit par des humains : il contient des erreurs, dont certaines laissent entrer un intrus. Ce sont les failles.', 'Quand l’éditeur en trouve une, il publie un correctif, parfois appelé « patch », qui referme la porte.', 'Dès sa publication, le défaut est connu de tous, y compris des personnes malveillantes : elles guettent ceux qui n’ont pas encore installé la mise à jour.', 'Mettre à jour vite est l’un des gestes de protection les plus efficaces. Seul risque : un correctif peut changer des habitudes, d’où les tests en entreprise.'],
  voir='cybersecurite',
  pas='une nouvelle version majeure, qui ajoute des fonctions ; le correctif, lui, répare l’existant.'),

 dict(id='boite-noire', terme='Boîte noire (IA)', aka=['boîte noire', 'black box', 'explicabilité', 'ia explicable', 'opacité'], dom='IA',
  une='Un modèle dont on voit ce qui entre et ce qui sort, mais dont on ne sait pas expliquer le raisonnement.',
  etapes=['Un réseau de neurones contient des milliards de réglages. Aucun n’a de sens lisible pour un humain.', 'On voit donc la question posée et la réponse donnée, mais pas le chemin entre les deux : c’est une boîte noire.', 'Quand le modèle se trompe, il est difficile de dire pourquoi. Des techniques d’explicabilité en donnent un aperçu partiel, jamais complet.', 'Pour une décision importante, comme un crédit ou un diagnostic, on garde un humain dans la boucle et on demande à pouvoir justifier.'],
  voir='ia-limites',
  pas='un programme classique : on peut relire chacune de ses règles, ce qui n’est pas le cas d’un modèle appris.'),

 dict(id='interoperabilite', terme='Interopérabilité', aka=['interopérabilité', 'interopérable', 'standard', 'format ouvert', 'compatibilité'], dom='SI',
  une='La capacité de deux outils différents à échanger des informations sans adaptation lourde.',
  etapes=['Deux outils achetés séparément parlent rarement la même langue : formats de fichiers, noms de champs, façons de se connecter.', 'Sans effort, chaque échange demande un développement sur mesure, cher et fragile.', 'Des standards communs, comme des formats ouverts ou des API documentées, permettent à des outils d’origines différentes de se brancher.', 'Elle protège aussi d’un fournisseur unique : changer d’outil est possible si les données sortent dans un format que les autres savent lire.'],
  voir='api',
  pas='l’intégration, qui est le travail de branchement lui-même ; l’interopérabilité est ce qui le rend facile ou non.'),

 dict(id='pilote', terme='Pilote (driver)', aka=['pilote', 'driver', 'imprimante', 'périphérique', 'pilote graphique'], dom='Informatique',
  une='Le petit logiciel qui apprend à l’ordinateur à parler à un matériel précis.',
  etapes=['Une imprimante, une souris, une carte graphique : chaque matériel a sa propre façon de recevoir des ordres.', 'Le système de l’ordinateur ne peut pas les connaître tous à l’avance.', 'Le pilote, fourni par le fabricant ou déjà inclus dans le système, traduit les ordres du système en ordres que ce matériel comprend.', 'Un matériel branché qui ne répond pas, c’est souvent un pilote absent ou trop ancien : l’installer ou le mettre à jour règle le problème.'],
  voir='logiciel',
  pas='une application, que vous utilisez directement ; le pilote travaille en coulisses, entre le système et le matériel.'),

 dict(id='vision-ordinateur', terme='Vision par ordinateur', aka=['vision par ordinateur', 'reconnaissance d’image', 'reconnaissance faciale', 'computer vision', 'image'], dom='IA',
  une='La capacité d’un programme à repérer et reconnaître ce qu’il y a dans une image ou une vidéo.',
  etapes=['Pour un ordinateur, une photo n’est pas un paysage : c’est un tableau de millions de nombres, un par point de couleur.', 'On montre à un modèle des milliers d’images accompagnées de leur étiquette, par exemple « chat » ou « panneau stop » : il apprend les motifs qui reviennent.', 'Face à une nouvelle image, il dit ce qu’il y reconnaît, ou où : lire une plaque, repérer une pièce défectueuse, trier des photos.', 'Il ne comprend pas la scène comme nous : un éclairage inhabituel ou un angle absent de ses exemples suffisent à le tromper.'],
  voir='machine-learning',
  pas='l’IA générative d’images, qui crée une image au lieu d’en analyser une.'),

 dict(id='jeu-de-donnees', terme='Jeu de données (dataset)', aka=['jeu de données', 'dataset', 'données d’entraînement', 'échantillon', 'fichier de données'], dom='Data',
  une='Un ensemble de données rassemblées pour un même usage, présenté en lignes et en colonnes.',
  etapes=['Des mesures éparses ne servent à rien tant qu’elles ne sont pas rassemblées au même endroit.', 'On les range dans un ensemble cohérent : une ligne par cas, par exemple un client ou une vente, et une colonne par caractéristique.', 'Ce jeu sert à analyser, à alimenter un tableau de bord ou à entraîner une IA, auquel cas on le découpe : une partie pour apprendre, une autre pour tester.', 'Sa qualité décide du résultat : lignes manquantes, doublons ou échantillon biaisé faussent tout ce qu’on en tire.'],
  voir='donnees-structurees',
  pas='une base de données, qui est le système qui stocke et fait vivre les données ; le jeu est un ensemble ciblé, souvent tiré de là.'),

 dict(id='port-reseau', terme='Port (réseau)', aka=['port', 'numéro de port', 'port 443', 'port 80', 'service'], dom='Réseau',
  une='Le numéro de porte, sur une machine, qui désigne le service à qui un message est destiné.',
  etapes=['Une même machine peut offrir plusieurs services à la fois : pages web, messagerie, transfert de fichiers.', 'L’adresse IP seule mène à la machine, pas au bon service : il faut aussi préciser lequel.', 'Chaque service écoute à un numéro, le port. Par convention, les pages web sécurisées arrivent au port 443.', 'Un pare-feu s’appuie souvent dessus : il laisse ouvertes les portes utiles et ferme toutes les autres.'],
  voir='adresse-ip',
  pas='l’adresse IP, qui désigne la machine ; le port désigne un service sur cette machine.'),

 dict(id='metadonnees', terme='Métadonnées', aka=['métadonnées', 'metadata', 'données sur les données', 'propriétés du fichier'], dom='Data',
  une='Les informations qui décrivent une donnée, sans en être le contenu.',
  etapes=['Une photo contient une image. Mais on sait aussi quand elle a été prise, avec quel appareil, et sa taille.', 'Ces informations qui décrivent la donnée, sans en faire partie, sont ses métadonnées.', 'Elles servent à ranger, chercher et retrouver : trier des fichiers par date, ou savoir qui est responsable d’une table de données.', 'Elles peuvent en dire long sur vous : un message dont on ne lit pas le contenu révèle déjà qui écrit à qui, et quand.'],
  voir='donnees-structurees',
  pas='la donnée elle-même : le contenu de la photo ou du message, par opposition à ce qui l’entoure.'),

 dict(id='refactoring', terme='Refactorisation (refactoring)', aka=['refactoring', 'refactorisation', 'réécriture', 'nettoyer le code', 'code propre'], dom='Informatique',
  une='Réorganiser le code d’un logiciel pour le rendre plus clair, sans changer ce qu’il fait.',
  etapes=['Au fil des ajouts, un programme devient confus : des morceaux répétés, des noms obscurs, des raccourcis pris dans l’urgence.', 'La refactorisation range tout cela sans changer le comportement : l’utilisateur ne voit aucune différence.', 'On vérifie par des tests que le logiciel fait toujours la même chose avant et après.', 'C’est le remède courant à la dette technique : on y gagne en rapidité de travail, pas en fonctions nouvelles.'],
  voir='logiciel',
  pas='une nouvelle fonction ou un correctif de bug, qui changent ce que fait le logiciel.'),

 dict(id='poc', terme='Preuve de concept (POC)', aka=['poc', 'proof of concept', 'preuve de concept', 'maquette', 'prototype'], dom='SI',
  une='Un essai rapide, à petite échelle, pour vérifier qu’une idée est réalisable avant d’investir.',
  etapes=['Avant de lancer un gros projet, une question demeure : est-ce que cela peut fonctionner, ici, avec nos données ?', 'On construit donc une version minimale, sur un cas précis et pour quelques utilisateurs, en quelques semaines.', 'Le but est d’apprendre vite : ce qui marche, ce qui bloque, ce que cela coûterait en grand.', 'À la fin, on décide : abandonner, ajuster, ou construire pour de bon. Un POC n’est pas fait pour être utilisé tel quel en production.'],
  voir='projet-si',
  pas='le MVP, qui est un premier produit réel confié à de vrais utilisateurs ; le POC ne cherche qu’à prouver la faisabilité.'),

]
