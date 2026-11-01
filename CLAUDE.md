# GotIt !

Site de vulgarisation : des concepts techniques expliqués par des schémas animés, en quatre étapes. Règles de contribution et contrôles obligatoires : `README.md` et `CONTRIBUER.md`.

## Contexte du propriétaire (second-brain)

- **Statut du produit** : `.vibeship/project.yml` à la racine (étape, version, prochaine action humaine). C'est la source de vérité de l'état ; ne pas le recopier ailleurs.
- **Contexte et décisions** : dépôt `flocautank/second-brain`, `personal/gotit/PROJECT.md` puis `SUMMARY.md`. À lire seulement si la tâche touche au contexte du projet ou à une décision, jamais le dépôt entier. Si le second-brain n'est pas disponible dans la session, continuer sans le signaler.
- **Branches** : ce dépôt va dans `main` par pull request à fusion automatique après contrôles (`controles.yml`) : exemption écrite, ADR-009 complément du 2026-11-01. Le propriétaire peut aussi pousser directement.
- **Écrire dans le second-brain** : depuis ce dépôt, ne modifie pas son arborescence (`PROJECT.md`, `SUMMARY.md`, `INDEX`, `decisions/`) : dépose une note dans son `inbox/` (skill `inbox-capture`, `shared/skills/inbox-capture/SKILL.md` du second-brain), la maintenance de nuit l'intègre.
- **Mode de travail** : un travail qui touche plusieurs fichiers suit le skill `orchestrate` du second-brain (planificateur, implémenteurs en copies de travail séparées, vérificateurs, `tools/gate.mjs`) ; livraison par le skill `deliver`.
- **Décision structurante** (architecture, dépendance majeure, règle de produit) : à déposer comme note `adr-candidat` dans l'`inbox/` du second-brain : la maintenance lui donne son numéro ou complète l'ADR du même thème.
