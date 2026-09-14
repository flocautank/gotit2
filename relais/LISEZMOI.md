# Le relais d'idées

## Pourquoi il existe

Le site est une page statique : elle ne peut pas détenir de clé GitHub, car une clé
placée dans une page publique est lisible par tout le monde — donc perdue.

Ce relais est un programme minuscule, hébergé gratuitement, qui détient la clé à la
place de la page. Le formulaire lui envoie le message, il crée l'issue dans le dépôt.

Résultat : **le visiteur ne quitte jamais le site et ne voit jamais GitHub.**

```
Formulaire  →  relais (détient la clé)  →  issue GitHub  →  routine de nuit
```

## Déploiement — une fois, environ dix minutes

### 1. Créer le jeton GitHub

Sur GitHub : **Settings → Developer settings → Personal access tokens → Fine-grained tokens
→ Generate new token**.

- **Repository access** : *Only select repositories* → `gotit2`, et rien d'autre ;
- **Permissions → Repository permissions → Issues** : *Read and write*. Laissez tout le reste
  sur *No access* ;
- **Expiration** : un an, par exemple. Notez la date, le jeton devra être renouvelé.

Copiez le jeton : il ne s'affichera plus.

> Ce jeton ne peut faire qu'une chose : écrire des issues dans ce dépôt. Même divulgué,
> il ne donne accès ni au code, ni aux autres dépôts, ni au compte.

### 2. Déployer le relais

Sur [dash.cloudflare.com](https://dash.cloudflare.com) (compte gratuit) :

1. **Workers & Pages → Create → Start with Hello World → Deploy** ;
2. **Edit code**, remplacez tout le contenu par celui de `relais/worker.js`, puis **Deploy** ;
3. **Settings → Variables and Secrets**, ajoutez deux secrets :
   - `JETON_GITHUB` : le jeton de l'étape 1 ;
   - `DEPOT` : `flocautank/gotit2` ;
4. Déployez à nouveau pour que les secrets soient pris en compte ;
5. Copiez l'adresse du worker, du type `https://xxxxx.workers.dev`.

### 3. Brancher le site

Dans `assets/js/config.js`, collez l'adresse :

```js
window.GOTIT_CONFIG = {
  RELAIS_IDEES: 'https://xxxxx.workers.dev'
};
```

C'est la seule ligne à modifier. Commitez : le site se republie tout seul.

## Vérifier

Ouvrez la page Idées, envoyez un message de test. Vous devez voir un remerciement
**sans quitter le site**, et l'issue doit apparaître dans le dépôt quelques secondes plus tard.

Tant que `RELAIS_IDEES` est vide, le formulaire bascule automatiquement sur un envoi par
GitHub : la page reste utilisable, mais le visiteur quitte le site. C'est un repli, pas la
cible.

## Contrôler le relais avant de le déployer

```bash
node relais/test-worker.mjs
```

Le test rejoue les cas importants sans rien appeler de réel : création d'une issue,
préfixe selon le type, titre trop court refusé, champ piège avalé sans rien créer,
origine étrangère rejetée, textes tronqués, pré-vol CORS.

## Ce que le relais refuse

- les requêtes qui ne viennent pas du site (contrôle de l'origine) ;
- les messages dont le titre fait moins de trois caractères ;
- les textes trop longs, tronqués aux limites indiquées dans le code ;
- les envois qui remplissent le champ piège, invisible pour un humain.

Le type est validé côté relais : personne ne peut forger une étiquette arbitraire.

Si le site reçoit du spam malgré tout, ajoutez une règle de limitation par adresse IP
dans Cloudflare (**Security → WAF → Rate limiting rules**), par exemple cinq envois
par minute. C'est gratuit et cela se règle sans toucher au code.

## Et si Cloudflare ne convient pas

Le fichier `worker.js` est un module standard : il fonctionne tel quel sur Cloudflare
Workers, et moyennant une adaptation de quelques lignes sur Vercel, Netlify Functions ou
Deno Deploy. Le principe ne change pas : un intermédiaire détient la clé, la page non.
