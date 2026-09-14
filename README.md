<img src="assets/img/logo.svg" alt="GotIt !" width="230">

# GotIt ! — comprendre, enfin

Le nom se lit « Got it! » : le moment où ça fait tilt. Le logo reprend cette idée —
une bulle d'explication qui contient une coche.

Site de vulgarisation visuelle : des concepts techniques expliqués par des **schémas animés**,
étape par étape. Pas de vidéo à produire, pas de framework : les animations sont générées par
du code (SVG + CSS), ce qui les rend nettes sur tous les écrans, instantanées à charger et
faciles à corriger.

👉 **Le site :** https://flocautank.github.io/gotit2/

## Deux formats

**Les leçons** (`lecons/`) — un concept expliqué par des schémas animés, 5 à 7 minutes.
**Les cartes** (`cartes.html`) — le même concept en une phrase, puis en quatre étapes, pour
retrouver une définition en dix secondes. Les cartes renvoient vers la leçon quand elle existe,
et la recherche de l'accueil les remonte en premier.

Toutes les explications du site suivent le même rythme : **quatre étapes**.

## Contenus disponibles

| Leçon | Domaine | Niveau |
|---|---|---|
| [Ce qu'il y a dans un ordinateur](lecons/ordinateur.html) | Informatique | Découverte |
| [C'est quoi un serveur ?](lecons/serveur.html) | Informatique | Découverte |
| [Logiciel, système, application](lecons/logiciel.html) | Informatique | Découverte |
| [Fichiers, formats et dossiers](lecons/fichiers.html) | Informatique | Découverte |
| [Local ou cloud : quelle différence ?](lecons/local-vs-cloud.html) | Informatique | Découverte |
| [SaaS, PaaS, IaaS](lecons/cloud-saas.html) | Informatique | Intermédiaire |
| [Comment voyage une page web](lecons/internet.html) | Réseau | Découverte |
| [Wifi, box et débit](lecons/wifi-box.html) | Réseau | Découverte |
| [Ce que sait votre navigateur](lecons/navigateur.html) | Réseau | Découverte |
| [Les bases de la cybersécurité](lecons/cybersecurite.html) | Réseau | Découverte |
| [Sauvegarder pour de vrai](lecons/sauvegarde.html) | Réseau | Découverte |
| [Le chiffrement expliqué simplement](lecons/chiffrement.html) | Réseau | Intermédiaire |
| [Le réseau Tor, comment ça marche](lecons/tor.html) | Réseau | Intermédiaire |
| [C'est quoi une base de données ?](lecons/base-de-donnees.html) | Data | Découverte |
| [Lac, entrepôt, magasin de données](lecons/entrepots-data.html) | Data | Intermédiaire |
| [Les langages de la data, situés](lecons/langages-data.html) | Data | Intermédiaire |
| [Pourquoi deux tableaux ne disent jamais pareil](lecons/gouvernance-data.html) | Data | Intermédiaire |
| [Le RGPD en clair](lecons/rgpd.html) | Data | Découverte |
| [C'est quoi un système d'information ?](lecons/si-briques.html) | Système d'information | Découverte |
| [C'est quoi une API ?](lecons/api.html) | Système d'information | Découverte |
| [Comment se déroule un projet SI](lecons/projet-si.html) | Système d'information | Intermédiaire |
| [Comment un modèle de langage écrit](lecons/llm.html) | IA | Découverte |
| [Pourquoi l'IA a besoin de cartes graphiques](lecons/gpu.html) | IA | Découverte |
| [Pourquoi une IA invente parfois](lecons/hallucination.html) | IA | Intermédiaire |
| [Bien demander à une IA](lecons/prompt.html) | IA | Découverte |
| [Ce qu'une IA ne sait pas faire](lecons/ia-limites.html) | IA | Intermédiaire |
| [Ce que coûte une IA](lecons/cout-ia.html) | IA | Intermédiaire |
| [Vos données et l'IA](lecons/ia-donnees.html) | IA | Intermédiaire |
| [Donner ses documents à une IA](lecons/rag.html) | IA | Intermédiaire |
| [C'est quoi un agent IA ?](lecons/agent.html) | IA | Intermédiaire |
| [Les « skills » d'une IA](lecons/ia-skills.html) | IA | Intermédiaire |
| [Un serveur MCP, c'est quoi ?](lecons/mcp.html) | IA | Intermédiaire |

**27 cartes de concept** couvrent le jargon de l'IA — jeton, fenêtre de contexte, prompt,
prompt système, température, RAG, embedding, fine-tuning, entraînement, inférence, GPU, LLM,
IA générative, multimodal, hallucination, agent, harness, workflow, skill, MCP, AGI, modèle
ouvert, benchmark, garde-fous — et celui des projets SI : cahier des charges, recette, MOA/MOE.

Le public visé : quelqu'un d'intelligent à qui personne n'a jamais montré les objets.
Aucun prérequis, une analogie du quotidien par leçon, et le mot technique toujours
après l'idée — jamais avant.

## Organisation du contenu

Le catalogue est hiérarchisé sur trois niveaux, décrits dans `assets/js/data.js` :

```
Domaine            ex. « Data »
└── Catégorie      ex. « Stocker les données »
    └── Sous-catégorie   ex. « Lacs, entrepôts et magasins »
        └── Leçon        ex. « Lac, entrepôt, magasin de données »
```

## Structure du dépôt

```
index.html              Accueil : catalogue + recherche
lecons/*.html           Une page par leçon
assets/js/data.js       Le catalogue (taxonomie + fiches des leçons)
assets/js/home.js       Navigation du catalogue (domaine > catégorie) et recherche
assets/js/scene.js      Moteur d'animation des scènes (étapes, lecture, clavier)
assets/css/main.css     Styles généraux
assets/css/lesson.css   Styles des leçons et utilitaires d'animation
assets/img/             Logo, marque seule et image de partage
.outils/gabarit.py      Assemble une page de leçon à partir d'un fragment
.outils/verifier.py     Contrôles de cohérence (à lancer avant de publier)
.outils/audit-mobile.js Contrôle des débordements sur petit écran
CONTRIBUER.md           Comment ajouter une leçon
```

## Retours des visiteurs

La page `idees.html` recueille trois choses : un **concept à expliquer**, une **suggestion**
sur le site, un **bug**. L'envoi se fait **sans quitter le site** : le formulaire s'adresse à un petit relais
hébergé (`relais/worker.js`), qui détient la clé GitHub à la place de la page — une clé
dans une page publique serait une clé perdue — et crée l'issue. Le visiteur ne voit jamais
GitHub, et aucun compte ne lui est demandé.

Le déploiement du relais est décrit dans `relais/LISEZMOI.md` : une dizaine de minutes,
une seule fois. Tant que son adresse n'est pas renseignée dans `assets/js/config.js`, le
formulaire bascule sur un envoi par GitHub pré-rempli, moins confortable mais fonctionnel.

Le tri se fait sur le préfixe du titre, `[Contenu]`, `[Suggestion]` ou `[Bug]` : c'est ce qui
permet aux routines de travailler sans dépendre des étiquettes GitHub.

| Type | Qui le traite | Quand |
|---|---|---|
| `[Contenu]` | routine d'enrichissement | la nuit suivante, en priorité |
| `[Suggestion]` et `[Bug]` | routine de rapport | rapport hebdomadaire dans `rapports/` |

Une demande de contenu traitée est fermée automatiquement : la pull request porte un
`Closes #N`, et la fusion ferme l'issue.

## Alimentation automatique

Une routine quotidienne traite les demandes de contenu reçues, ou décide elle-même
de ce qui manque, l'écrit, et pousse son travail sur une branche `claude/...`. Le workflow `.github/workflows/controles.yml`
rejoue alors les contrôles ci-dessous, **fusionne la pull request si, et seulement si,
ils passent**, puis publie dans la foulée sur `gh-pages`.

Ce dernier point n'est pas un détail : un push effectué avec le jeton d'Actions ne
déclenche pas les autres workflows. Si la publication n'était pas faite dans le même
job que la fusion, le contenu fusionné automatiquement ne serait jamais mis en ligne.

Aucune intervention manuelle n'est nécessaire. Pour reprendre la main, il suffit de
désactiver la routine, ou de retirer le job `fusion` du workflow pour repasser en
validation manuelle. L'historique Git permet de revenir sur tout contenu indésirable.

## Contrôles

```bash
python3 .outils/verifier.py     # structure, liens, catalogue, règle des 4 étapes
node .outils/audit-mobile.js    # aucun débordement des schémas à 390 px
```

## Développer en local

Aucune dépendance, aucune compilation. Un simple serveur statique suffit :

```bash
python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```

## Publication

Le site est publié par GitHub Pages depuis la branche `gh-pages`
(**Settings → Pages → Deploy from a branch → `gh-pages` / `/ (root)`**).

Il n'y a rien à faire à la main : le workflow `.github/workflows/publier.yml`
recopie `main` sur `gh-pages` à chaque push. On travaille donc toujours sur `main`.

## Parti pris visuel

Palette chaude et claire — fond ivoire, texte brun sombre, accent terre cuite, sauge
et ardoise en secondaires — avec une serif pour les titres et une sans-serif système
pour le texte. Tout est défini en variables CSS en haut de `assets/css/main.css` :
changer la charte, c'est changer ce bloc.

## Accessibilité

- Les scènes se pilotent au clavier (`←`, `→`, `Espace`) et se mettent en pause hors écran.
- Les schémas tiennent dans la largeur de l'écran : aucun défilement horizontal, y compris sur mobile.
- Le réglage système « réduire les animations » est respecté.
- Chaque schéma porte une description textuelle, et chaque étape existe sous forme de texte.
