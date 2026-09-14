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
]
