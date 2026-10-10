/* Contrôle mobile des schémas animés.
 *
 *   node .outils/audit-mobile.js
 *
 * Ouvre chaque leçon dans un navigateur de 390 px de large et vérifie deux choses :
 *   1. la page ne défile pas horizontalement ;
 *   2. aucun texte ne sort du viewBox de son SVG.
 *
 * Les scènes chorégraphiées (data-motion, voir assets/js/motion.js) sont
 * contrôlées étape par étape : leurs objets voyagent, un libellé peut être bien
 * placé au départ et sortir du cadre trois étapes plus loin. On y mesure la
 * position réelle à l'écran de chaque libellé visible — un objet garé hors
 * champ tant qu'il est invisible n'est pas une faute.
 *
 * C'est indispensable : les tailles de police des schémas sont agrandies sur petit
 * écran pour rester lisibles, ce qui fait déborder les libellés trop longs.
 *
 * Prérequis : un serveur local (python3 -m http.server 8766) et playwright-core.
 * Le navigateur est cherché dans PLAYWRIGHT_BROWSERS_PATH ou /opt/pw-browsers.
 */
const fs = require('fs');
const path = require('path');

const BASE = process.env.GOTIT_URL || 'http://localhost:8766';

function trouverChromium() {
  const racines = [process.env.PLAYWRIGHT_BROWSERS_PATH, '/opt/pw-browsers'].filter(Boolean);
  for (const racine of racines) {
    if (!fs.existsSync(racine)) continue;
    for (const dossier of fs.readdirSync(racine)) {
      const exe = path.join(racine, dossier, 'chrome-linux', 'chrome');
      if (fs.existsSync(exe)) return exe;
    }
  }
  return null;
}

(async () => {
  let chromium;
  for (const paquet of ['playwright', 'playwright-core']) {
    try { ({ chromium } = require(paquet)); break; } catch (e) { /* on essaie le suivant */ }
  }
  if (!chromium) {
    console.error('Ni playwright ni playwright-core ne sont installés. Par exemple :');
    console.error('  cd /tmp && npm init -y >/dev/null && npm i playwright-core');
    console.error('  NODE_PATH=/tmp/node_modules node .outils/audit-mobile.js');
    process.exit(2);
  }

  const lecons = fs.readdirSync('lecons').filter(f => f.endsWith('.html')).map(f => f.replace('.html', ''));
  const exe = trouverChromium();
  // Sans navigateur local repéré, on laisse playwright utiliser le sien.
  const navigateur = await chromium.launch(exe ? { executablePath: exe, args: ['--no-sandbox'] }
                                               : { args: ['--no-sandbox'] });
  // Animations réduites : chaque étape se pose instantanément, et rien ne
  // démarre tout seul pendant qu'on mesure.
  const page = await navigateur.newPage({ viewport: { width: 390, height: 800 }, reducedMotion: 'reduce' });

  const soucis = [];
  page.on('pageerror', e => soucis.push(`erreur JavaScript : ${e.message}`));

  for (const nom of lecons) {
    await page.goto(`${BASE}/lecons/${nom}.html`, { waitUntil: 'networkidle' });
    const rapport = await page.evaluate(() => {
      const sorties = [];
      document.querySelectorAll('.scene').forEach((scene, i) => {
        const svg = scene.querySelector('.stage svg');
        if (!svg || scene.hasAttribute('data-motion')) return;
        const vb = svg.viewBox.baseVal;
        svg.querySelectorAll('text').forEach(noeud => {
          let b;
          try { b = noeud.getBBox(); } catch (e) { return; }
          if (!b.width) return;
          if (b.x < vb.x - 1 || b.x + b.width > vb.x + vb.width + 1) {
            sorties.push(`scène ${i + 1} : « ${(noeud.textContent || '').slice(0, 40)} » sort du cadre`);
          }
        });
      });
      return {
        debordement: document.documentElement.scrollWidth - document.documentElement.clientWidth,
        sorties
      };
    });
    if (rapport.debordement > 0) soucis.push(`${nom} : la page déborde de ${rapport.debordement} px`);
    rapport.sorties.forEach(s => soucis.push(`${nom} — ${s}`));

    const scenes = page.locator('.scene');
    const nbScenes = await scenes.count();
    for (let i = 0; i < nbScenes; i++) {
      const scene = scenes.nth(i);
      if (!(await scene.evaluate(el => el.hasAttribute('data-motion')))) continue;
      const etapes = await scene.locator('.scene-caption .step').count();
      await scene.focus();
      for (let e = 1; e < etapes; e++) await page.keyboard.press('ArrowLeft');
      for (let e = 1; e <= etapes; e++) {
        if (e > 1) await page.keyboard.press('ArrowRight');
        const fautes = await scene.evaluate(el => {
          const svg = el.querySelector('.stage svg');
          const cadre = svg.getBoundingClientRect();
          const visible = n => {
            let op = 1;
            for (let x = n; x && x !== svg; x = x.parentNode) op *= parseFloat(getComputedStyle(x).opacity);
            return op > .05;
          };
          const sortis = [];
          svg.querySelectorAll('text').forEach(n => {
            if (!visible(n)) return;
            const r = n.getBoundingClientRect();
            if (!r.width) return;
            if (r.left < cadre.left - 1 || r.right > cadre.right + 1 || r.top < cadre.top - 1 || r.bottom > cadre.bottom + 1) {
              sortis.push((n.textContent || '').slice(0, 40));
            }
          });
          return sortis;
        });
        fautes.forEach(t => soucis.push(`${nom} — scène ${i + 1}, étape ${e} : « ${t} » sort du cadre`));
      }
    }
  }

  await navigateur.close();

  if (soucis.length) {
    soucis.forEach(s => console.log('✗', s));
    console.log(`\n${soucis.length} problème(s) — raccourcissez les libellés concernés.`);
    process.exit(1);
  }
  console.log(`OK — ${lecons.length} leçons, aucun débordement à 390 px.`);
})();
