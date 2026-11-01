# GotIt !

Site de vulgarisation : des concepts techniques expliqués par des schémas animés, en quatre étapes. Règles de contribution et contrôles obligatoires : `README.md` et `CONTRIBUER.md`.

## Contexte du propriétaire (second-brain)

- **Statut du produit** : `.vibeship/project.yml` à la racine (étape, version, prochaine action humaine). C'est la source de vérité de l'état ; ne pas le recopier ailleurs.
- **Contexte et décisions** : dépôt `flocautank/second-brain`, `personal/gotit/PROJECT.md` puis `SUMMARY.md`. À lire seulement si la tâche touche au contexte du projet ou à une décision, jamais le dépôt entier. Si le second-brain n'est pas disponible dans la session, continuer sans le signaler.
- **Branches** : ce dépôt va dans `main` par pull request à fusion automatique après contrôles (`controles.yml`) : exemption écrite, ADR-009 complément du 2026-11-01. Le propriétaire peut aussi pousser directement.
- **Décision structurante** (architecture, dépendance majeure, règle de produit) : à consigner en ADR dans le second-brain, au prochain numéro libre, ou en complément d'un ADR du même thème.
