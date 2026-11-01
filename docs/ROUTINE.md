# Routine quotidienne de GotIt !

Lue chaque nuit par la routine planifiée « GotIt — enrichissement quotidien ». Elle fait autorité : le prompt du déclencheur est court et renvoie ici. Pour changer son comportement, modifier ce fichier (par pull request, comme tout contenu du site). `README.md` et `CONTRIBUER.md` décrivent les deux formats du site, la règle des quatre étapes, les deux thèmes et les contrôles obligatoires : ils font autorité sur le contenu.

GotIt ! est un site de vulgarisation visuelle : expliquer des concepts techniques à des gens qui n'ont aucune connaissance préalable, par des schémas animés et des définitions courtes.

## L'objectif de la nuit : cinq éléments

**Un élément = une leçon complète, ou une carte de concept.** Les deux comptent pareil : c'est le nombre qui compte, pas le format.

- **aucune demande de contenu en attente** : cinq éléments de ton choix ;
- **des demandes en attente, moins de cinq** : tu les traites **toutes**, puis tu complètes librement jusqu'à cinq ;
- **cinq demandes ou plus** : tu les traites **toutes**, sans plafond. Cinq est un plancher, jamais un quota qui ferait laisser une demande de côté.

Tu choisis librement le dosage entre leçons et cartes. Une leçon demande nettement plus de travail qu'une carte : une ou deux leçons et le reste en cartes est raisonnable. Si le sujet ne mérite qu'une définition, fais une carte. **Ne sacrifie jamais la qualité au compte** : si le temps manque vraiment, publie ce que tu as de solide et dis franchement combien d'éléments tu as produits et pourquoi tu es resté en dessous.

## Les demandes des visiteurs, prioritaires

La page « Idées » du site dépose les demandes dans les issues du dépôt. Lis-les sans jeton :

```
curl -s "https://api.github.com/repos/flocautank/gotit2/issues?state=open&per_page=50" -H "Accept: application/vnd.github+json"
```

Écarte les entrées qui contiennent une clé `pull_request`. Les titres en **`[Contenu]`** sont des demandes d'explication : elles passent avant tout le reste et comptent dans les cinq. Les `[Suggestion]` et `[Bug]` ne sont pas ton travail (le rapport hebdomadaire s'en occupe), sauf si un bug touche un contenu que tu modifies. Note le numéro de chaque demande traitée : il sert pour la pull request. Réponds **à la question posée** : relis le détail de l'issue, il dit souvent ce qui bloque vraiment.

## Choisir le reste

Lis `assets/js/data.js` : les leçons existantes, celles marquées `soon: true` (déclarées mais jamais écrites), les cartes déjà couvertes. Repère un domaine peu fourni, un mot de jargon courant sans carte, une leçon annoncée jamais écrite. Les cinq domaines : Informatique, Réseau, Data, Système d'information, Intelligence artificielle ; tu peux en créer un si le contenu le justifie. Varie les domaines d'une nuit sur l'autre.

## Écrire

Public : quelqu'un d'intelligent à qui personne n'a jamais montré les objets. Aucun prérequis.

- **Toute explication se fait en quatre étapes** (règle du site, contrôlée automatiquement).
- L'idée d'abord, le mot technique ensuite.
- Une analogie du quotidien par leçon (`.callout-analogy`) et un « À retenir » de trois ou quatre puces.
- Libellés de schémas très courts : sur mobile les polices sont agrandies.
- Peins les schémas avec les variables (`var(--accent)`, `var(--sage)`, `var(--slate)`, `var(--line)`), jamais en dur.
- `.outils/gabarit.py` assemble une page de leçon (les deux thèmes sont branchés) ; `.outils/cartes-ia.py` contient les cartes, dont le bloc `CARDS` de `assets/js/data.js` est régénéré.
- N'invente aucun fait vérifiable : chiffres, dates et noms de produits doivent être sûrs, ou absents.

## Contrôler, puis publier par une branche

```
python3 .outils/verifier.py
python3 -m http.server 8766 &
node .outils/audit-mobile.js
```

Les deux doivent passer. Si l'audit mobile signale une sortie de cadre, raccourcis le libellé : ne réduis jamais la police. Si `playwright` manque : `cd /tmp && npm init -y && npm i playwright-core`, puis relance avec `NODE_PATH=/tmp/node_modules`.

Ne pousse **jamais** sur `main` : le travail passe par le contrôle automatique. Mets à jour le tableau des contenus du README, puis :

```
git checkout -b claude/<un-nom-parlant>
git add -A && git commit -m "..." && git push -u origin HEAD
```

Ouvre une pull request vers `main`. **Dans son corps, une ligne `Closes #N` par demande traitée.** Le workflow `.github/workflows/controles.yml` rejoue les contrôles et fusionne seul s'ils passent ; le site se republie via `gh-pages`. Deux cas demandent ton action : le push échoue (dis-le avec l'erreur exacte) ; les contrôles échouent (corrige et repousse sur la même branche).

## Mémoire

- **Fiche d'état (`.vibeship/project.yml`)** : si le contenu a avancé, mets à jour `updated` et `last_activity` dans la même pull request. Ne modifie que des champs qui existent déjà et garde le YAML valide (guillemets autour de tout texte contenant « : »).
- Aucune version ni aucun état à recopier dans le second-brain. Si une décision structurante est prise, ADR dans le second-brain (prochain numéro libre).

## Résumé final

Court, et il commence par le compte : **combien d'éléments publiés cette nuit**, dont combien de leçons et de cartes. Puis les demandes traitées avec leurs numéros, la branche et la pull request, et ce que tu suggères pour la prochaine fois. Si tu n'as pas atteint cinq, dis-le en premier, avec la raison. Ne termine jamais sur un silence.
