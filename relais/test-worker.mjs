import fs from 'fs';
const src = fs.readFileSync('new URL('./worker.js', import.meta.url)', 'utf8');
const mod = await import('data:text/javascript;base64,' + Buffer.from(src).toString('base64'));
const worker = mod.default;

const env = { JETON_GITHUB: 'faux-jeton', DEPOT: 'flocautank/gotit2' };
let dernierAppel = null;
globalThis.fetch = async (url, opts) => {
  dernierAppel = { url, corps: JSON.parse(opts.body) };
  return { ok: true, json: async () => ({ number: 7 }) };
};

const ORIGINE = 'https://flocautank.github.io';
function requete(corps, origine = ORIGINE, methode = 'POST') {
  return new Request('https://relais.workers.dev/', {
    method: methode,
    headers: { 'Origin': origine, 'Content-Type': 'application/json' },
    body: methode === 'POST' ? JSON.stringify(corps) : undefined
  });
}

async function essai(nom, corps, attendu, origine) {
  dernierAppel = null;
  const r = await worker.fetch(requete(corps, origine), env);
  const d = await r.json().catch(() => ({}));
  const ok = attendu(r, d, dernierAppel);
  console.log(`  ${ok ? '✓' : '✗'} ${nom}${ok ? '' : `  (statut ${r.status}, ${JSON.stringify(d)})`}`);
  return ok;
}

console.log('— le relais —');
let tout = true;
tout &= await essai('une idée valide crée l’issue',
  { type: 'contenu', titre: 'La blockchain', detail: 'jamais compris' },
  (r, d, appel) => r.status === 200 && d.ok && d.numero === 7 &&
                   appel.corps.title === '[Contenu] La blockchain' &&
                   appel.corps.labels[0] === 'contenu');

tout &= await essai('le type décide du préfixe',
  { type: 'bug', titre: 'Animation figée', page: 'lecons/rag.html' },
  (r, d, appel) => appel.corps.title.startsWith('[Bug]') &&
                   appel.corps.body.includes('lecons/rag.html'));

tout &= await essai('un type inconnu retombe sur suggestion',
  { type: 'n’importe quoi', titre: 'Essai' },
  (r, d, appel) => appel.corps.title.startsWith('[Suggestion]'));

tout &= await essai('un titre trop court est refusé',
  { type: 'contenu', titre: 'ab' },
  (r, d, appel) => r.status === 400 && appel === null);

tout &= await essai('le champ piège est avalé sans rien créer',
  { type: 'contenu', titre: 'Achetez des montres', site: 'robot' },
  (r, d, appel) => r.status === 200 && d.ok && appel === null);

tout &= await essai('une origine étrangère est rejetée',
  { type: 'contenu', titre: 'Tentative extérieure' },
  (r, d, appel) => r.status === 403 && appel === null, 'https://site-malveillant.example');

tout &= await essai('un texte trop long est tronqué',
  { type: 'contenu', titre: 'T'.repeat(400), detail: 'D'.repeat(9000) },
  (r, d, appel) => appel.corps.title.length <= 132 && appel.corps.body.length < 4300);

// pré-vol CORS
const pre = await worker.fetch(requete(null, ORIGINE, 'OPTIONS'), env);
const okPre = pre.status === 204 && pre.headers.get('Access-Control-Allow-Origin') === ORIGINE;
console.log(`  ${okPre ? '✓' : '✗'} le pré-vol CORS répond correctement`);
tout &= okPre;

console.log(tout ? '\ntous les contrôles du relais passent' : '\nDES CONTRÔLES ÉCHOUENT');
process.exit(tout ? 0 : 1);
