# Ajouter du contenu

> Une idée de leçon, une suggestion ou un bug ? Le plus simple est la page
> [Idées](idees.html) du site : elle dépose votre message dans les issues du dépôt.



Deux formats coexistent : les **leçons** (schémas animés) et les **cartes** (définitions).
Les deux suivent la même règle : **une explication se fait en quatre étapes**.

## Ajouter une carte

Dans `.outils/cartes-ia.py`, ajouter une entrée :

```python
dict(id='mon-concept', terme='Mon concept', aka=['synonyme', 'sigle'], dom='IA',
  une="La définition en une seule phrase, sans jargon.",
  etapes=[
   "1. Le problème ou le point de départ.",
   "2. L'idée, en une phrase.",
   "3. Comment ça marche concrètement.",
   "4. Ce que ça change — ou le piège à éviter."],
  voir='identifiant-de-lecon',          # facultatif
  pas="le concept voisin, parce que…"), # facultatif
```

Puis régénérer le bloc `CARDS` de `assets/js/data.js`. Les quatre étapes sont obligatoires :
un contrôle échoue si une carte en compte un autre nombre.

`aka` est important : ce sont les mots que les gens tapent réellement dans la recherche.

# La carte du site

`explorer.html` se construit toute seule à partir du catalogue : rien à y déclarer.
Deux gestes l'enrichissent au passage, et ils ne coûtent rien :

- **le champ `voir` d'une carte** devient un trait vers la leçon correspondante ;
- **nommer une notion voisine** dans le `une` ou le `pas` d'une carte (« à ne pas
  confondre avec le fine-tuning ») crée un lien entre les deux cartes.

Les mots-clés d'une leçon servent aussi : deux leçons qui en partagent au moins
deux sont reliées. Des mots-clés justes valent donc mieux que nombreux.

# Les deux thèmes

Le site se porte en deux charte : GotIt (par défaut) et Klint. Il n'y a rien à faire
pour qu'une nouvelle page suive : tout est en variables CSS, et `.outils/gabarit.py`
branche déjà `assets/css/theme-klint.css` et `assets/js/theme.js`. Un contrôle refuse
une page qui les oublierait.

Une seule règle en écrivant un schéma : **peindre avec les variables**
(`var(--accent)`, `var(--sage)`, `var(--slate)`, `var(--line)`), jamais avec une
couleur en dur — sinon le schéma resterait terre cuite en thème Klint.

# Ajouter une leçon

Trois étapes, une quinzaine de minutes une fois le schéma en tête.

## 1. Déclarer la leçon dans le catalogue

Dans `assets/js/data.js`, ajouter une fiche à `LESSONS` :

```js
'mon-sujet': {
  title: 'Titre de la leçon',
  summary: 'Une phrase qui donne envie et annonce l’angle.',
  path: 'lecons/mon-sujet.html',
  duration: '5 min',
  level: 1,                       // 1 découverte · 2 intermédiaire · 3 avancé
  keywords: ['mot', 'clé', 'pour', 'la', 'recherche']
}
```

Puis référencer son identifiant dans la sous-catégorie voulue, dans `FAMILIES`.
L'accueil se construit à partir de cette hiérarchie : on choisit un domaine, puis une
catégorie, avant de voir les leçons. Une leçon introuvable par ce chemin reste
accessible par la recherche, qui interroge titres, résumés et `keywords`.
Une leçon encore à écrire se déclare avec `soon: true` et sans `path` : elle s'affiche
en grisé sur l'accueil.

## 2. Créer la page

Le plus simple est de copier `lecons/serveur.html` et de remplacer le contenu :
en-tête, fil d'Ariane, titre, puis les sections.

## 3. Écrire une scène animée

Une scène est un bloc HTML. Le moteur (`assets/js/scene.js`) lit le nombre d'étapes
dans les paragraphes de `.scene-caption`, puis allume ou éteint les éléments du SVG
selon leur attribut `data-show`.

```html
<section class="scene" aria-label="Animation : description pour les lecteurs d’écran">
  <div class="scene-title">Scène 1 — Titre court</div>
  <div class="stage">
    <svg viewBox="0 0 800 320" role="img" aria-label="Description du schéma">
      <rect x="40" y="60" width="160" height="80" rx="10"
            class="s-box m-rise" data-show="1-3"/>
      <path d="M210 100 H 520" class="s-line m-draw" data-show="2-3"/>
      <circle r="7" class="packet" data-show="2"
              style="offset-path:path('M210 100 H 520')"/>
    </svg>
  </div>
  <div class="scene-caption">
    <p class="step" data-duration="4200"><b>Titre de l’étape.</b><span>Le commentaire.</span></p>
    <p class="step"><b>Étape suivante.</b><span>…</span></p>
    <p class="step"><b>Conclusion.</b><span>…</span></p>
  </div>
</section>
```

### `data-show`

Indique à quelles étapes l'élément est visible :

- `data-show="2"` — uniquement à l'étape 2 ;
- `data-show="2-4"` — des étapes 2 à 4 ;
- `data-show="1,4-5"` — combinaisons possibles.

### Classes utiles

| Classe | Effet |
|---|---|
| `m-rise` / `m-fall` | apparaît en montant / en descendant |
| `m-left` / `m-right` | apparaît par la gauche / la droite |
| `m-pop` | apparaît en grossissant |
| `m-draw` | le tracé se dessine (sur `path`, la longueur est calculée automatiquement) |
| `packet` | point qui circule le long d'un `offset-path` |
| `pulse` | respiration continue |
| `blink` | clignotement (diodes) |
| `s-box`, `s-box-accent`, `s-box-violet`, `s-box-teal` | boîtes |
| `s-line`, `s-line-accent` | traits |
| `s-label`, `s-label-sm`, `s-label-xs` | textes |

### Tenir sur un écran de téléphone

Les schémas ne défilent jamais horizontalement : ils sont réduits pour tenir dans
la largeur. Comme les tailles de police du SVG sont exprimées en unités du `viewBox`,
`lesson.css` les agrandit sur petit écran pour compenser cette réduction.

Conséquence : **un texte qui tient au large peut déborder du cadre sur mobile.**
Gardez les libellés courts (une poignée de mots), et vérifiez avec la fenêtre du
navigateur réduite à 390 px que rien ne sort du `viewBox`.

### Aller plus loin : une scène chorégraphiée

`data-show` fait apparaître et disparaître. Pour qu'un objet **voyage** d'une
étape à l'autre — un morceau de document qui sort de la pile, rejoint la
question, entre dans le modèle —, on passe par `assets/js/motion.js`. Deux
exemples complets : `lecons/rag.html` (scène 2) et `lecons/serveur.html`
(scène 1), avec leurs chorégraphies dans `assets/js/motion/`.

Réservez-le aux scènes où le mouvement *est* l'explication : une transformation,
une matière qu'on suit. Pour montrer des boîtes et des flèches, `data-show` suffit.

1. La scène porte `data-motion="nom"` et n'utilise pas `data-show`.
2. Chaque objet animé est un enfant direct du `<svg>`, **dessiné autour de (0,0)**
   et posé par `style="transform:translate(…px,…px);opacity:0"` — son état de
   départ. Ses positions s'écrivent alors en absolu, et une mise à l'échelle se
   fait autour de son centre.
3. Un fichier `assets/js/motion/<nom>.js` déclare une fonction par étape :

```js
GotItMotion.scene('nom', function (q) {
  var boite = q('#boite')[0];
  return [
    function (t) {                     // étape 1
      t.to(boite, [{ opacity: 0, transform: 'translate(100px,80px)' },
                   { opacity: 1, transform: 'translate(300px,80px)' }],
           { at: 0, dur: 700, ease: 'out' });
    },
    function (t) { /* étape 2 */ }
  ];
});
GotItMotion.lier();
```

   `t.to(cibles, images, { at, dur, ease, stagger, iterations })` — `ease` vaut
   `out`, `inout`, `in`, `pose` (léger rebond) ou `lin` ; `stagger` décale une
   cascade ; `iterations: Infinity` donne un mouvement d'ambiance (une diode qui
   clignote). `GotItMotion.arc(de, vers, levee, echelleDepart, echelleArrivee)`
   fait voyager un objet en arc, en le transformant en route.
4. La page charge `motion.js`, puis la chorégraphie, **avant** `scene.js`.

Ce qu'on obtient sans rien écrire de plus : un saut direct à une étape, un retour
arrière, le réglage « réduire les animations » — l'état de l'étape *n* étant par
définition le résultat des étapes 1 à *n* jouées jusqu'au bout, il n'existe
qu'une seule description de chaque mouvement. Le contrôle mobile parcourt ces
scènes étape par étape.

### Bonnes pratiques

- **Une idée par étape.** Si une étape demande deux phrases d'explication, c'est deux étapes.
- **Le texte doit se suffire à lui-même** : quelqu'un qui n'a pas vu l'animation doit comprendre.
- **Toujours une analogie du quotidien** (bloc `.callout-analogy`).
- **Pas de jargon sans traduction immédiate.** Le mot technique vient après l'idée, jamais avant.
- **4 à 5 étapes par scène** : au-delà, couper en deux scènes.
- Terminer par un « À retenir » de trois ou quatre puces.

## Publier

Poussez votre travail sur une branche nommée `claude/...` et ouvrez une pull request :
les contrôles ci-dessous sont rejoués automatiquement, et la fusion se fait toute
seule s'ils passent. Une proposition qui échoue reste ouverte, avec le détail du
problème dans l'onglet Actions.

## Vérifier — obligatoire avant de publier

Deux contrôles automatiques, à lancer depuis la racine du dépôt :

```bash
python3 .outils/verifier.py          # structure, liens, catalogue, règle des 4 étapes, thème

python3 -m http.server 8766 &        # puis, pour le contrôle mobile :
node .outils/audit-mobile.js         # aucun texte ne doit sortir du cadre à 390 px
```

Le second est le plus important : sur petit écran, les polices des schémas sont
agrandies pour rester lisibles, ce qui fait déborder les libellés trop longs.
Quand il signale une sortie de cadre, raccourcissez le libellé — ne réduisez pas
la police.

Puis contrôler à l'œil : la leçon apparaît sur l'accueil, la recherche la trouve,
chaque scène se déroule seule à l'arrivée dans l'écran, et les flèches du clavier
la pilotent.
