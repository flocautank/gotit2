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

### Bonnes pratiques

- **Une idée par étape.** Si une étape demande deux phrases d'explication, c'est deux étapes.
- **Le texte doit se suffire à lui-même** : quelqu'un qui n'a pas vu l'animation doit comprendre.
- **Toujours une analogie du quotidien** (bloc `.callout-analogy`).
- **Pas de jargon sans traduction immédiate.** Le mot technique vient après l'idée, jamais avant.
- **4 à 5 étapes par scène** : au-delà, couper en deux scènes.
- Terminer par un « À retenir » de trois ou quatre puces.

## Vérifier

```bash
python3 -m http.server 8000
```

Puis contrôler : la leçon apparaît sur l'accueil, la recherche la trouve, chaque scène
se déroule seule à l'arrivée dans l'écran, et les flèches du clavier la pilotent.
