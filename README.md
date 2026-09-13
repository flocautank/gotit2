# GotIt — comprendre, enfin

Site de vulgarisation visuelle : des concepts techniques expliqués par des **schémas animés**,
étape par étape. Pas de vidéo à produire, pas de framework : les animations sont générées par
du code (SVG + CSS), ce qui les rend nettes sur tous les écrans, instantanées à charger et
faciles à corriger.

👉 **Le site :** https://flocautank.github.io/gotit2/

## Contenus disponibles

| Leçon | Domaine | Niveau |
|---|---|---|
| [Ce qu'il y a dans un ordinateur](lecons/ordinateur.html) | Informatique | Découverte |
| [C'est quoi un serveur ?](lecons/serveur.html) | Informatique | Découverte |
| [Logiciel, système, application](lecons/logiciel.html) | Informatique | Découverte |
| [Local ou cloud : quelle différence ?](lecons/local-vs-cloud.html) | Informatique | Découverte |
| [Comment voyage une page web](lecons/internet.html) | Réseau | Découverte |
| [Les bases de la cybersécurité](lecons/cybersecurite.html) | Réseau | Découverte |
| [C'est quoi une base de données ?](lecons/base-de-donnees.html) | Data | Découverte |
| [Lac, entrepôt, magasin de données](lecons/entrepots-data.html) | Data | Intermédiaire |
| [Les langages de la data, situés](lecons/langages-data.html) | Data | Intermédiaire |
| [C'est quoi un système d'information ?](lecons/si-briques.html) | Système d'information | Découverte |
| [C'est quoi une API ?](lecons/api.html) | Système d'information | Découverte |
| [Comment un modèle de langage écrit](lecons/llm.html) | IA | Découverte |
| [Pourquoi une IA invente parfois](lecons/hallucination.html) | IA | Intermédiaire |
| [Bien demander à une IA](lecons/prompt.html) | IA | Découverte |
| [Donner ses documents à une IA](lecons/rag.html) | IA | Intermédiaire |
| [C'est quoi un agent IA ?](lecons/agent.html) | IA | Intermédiaire |
| [Les « skills » d'une IA](lecons/ia-skills.html) | IA | Intermédiaire |
| [Un serveur MCP, c'est quoi ?](lecons/mcp.html) | IA | Intermédiaire |

D'autres sujets sont déjà déclarés dans le catalogue et apparaissent en « Bientôt » :
chiffrement, SaaS/PaaS/IaaS, gouvernance des données, RGPD, projets SI, coût d'une IA,
limites d'une IA, confidentialité des données face à l'IA.

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
CONTRIBUER.md           Comment ajouter une leçon
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
