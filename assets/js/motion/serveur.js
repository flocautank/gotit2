/* GotIt — leçon Serveur, scène 1 : la métamorphose.
 *
 * L'idée à faire passer tient en une phrase : un serveur est un ordinateur.
 * Plutôt que de poser deux dessins côte à côte, on transforme l'un en l'autre :
 * le portable vit sa journée et s'endort, on le démonte, son cœur se met à plat
 * et glisse dans une armoire — et cette machine-là ne dort plus jamais.
 */
(function () {
  'use strict';
  var M = window.GotItMotion;
  if (!M) return;

  var CHARNIERE = [220, 222];
  var ZENITH = [400, 40];
  var LEVANT = [70, 160], COUCHANT = [730, 160];
  var CENTRE = [400, 180];
  var FENTES = [[610, 95], [610, 141], [610, 187], [610, 233]];

  M.scene('serveur-metamorphose', function (q) {
    var soleil = q('#sv-soleil')[0], lune = q('#sv-lune')[0], nuit = q('#sv-nuit')[0];
    var ecran = q('#sv-ecran')[0], allume = q('#sv-ecran .mo-allume')[0];
    var socle = q('#sv-socle')[0], txtPc = q('#sv-txt-pc')[0];
    var coeur = q('#sv-coeur')[0], puces = q('.sv-puce'), etiquettes = q('.sv-etiq');
    var baie = q('#sv-baie')[0], unites = q('.sv-u'), leds = q('.sv-u .mo-led'), txtSrv = q('#sv-txt-srv')[0];
    var tel = q('#sv-tel')[0], pc2 = q('#sv-pc2')[0];
    var req = q('.sv-req'), rep = q('.sv-rep'), badge = q('#sv-badge')[0];

    function ouvert(f) { return M.pose(CHARNIERE, [1, f]); }

    return [

      /* 1. Une journée. L'aube chasse la nuit, le soleil monte, l'écran s'ouvre
            et s'allume ; le soir tombe, la lune se lève, l'écran se referme. */
      function (t) {
        t.to(nuit, { opacity: 0 }, { dur: 1000, ease: 'inout' });
        t.to([ecran, socle], { opacity: 1 }, { dur: 500 });
        t.to(txtPc, { opacity: 1 }, { at: 300, dur: 500 });

        t.to(soleil, { opacity: 1 }, { dur: 400 });
        t.to(soleil, M.arc(LEVANT, ZENITH, 40), { dur: 1400, ease: 'out' });

        t.to(ecran, [
          { transform: ouvert(.06) },
          { transform: ouvert(1.05), offset: .72 },
          { transform: ouvert(1) }
        ], { at: 650, dur: 750, ease: 'out' });
        t.to(allume, { opacity: 1 }, { at: 1250, dur: 450 });

        t.to(soleil, M.arc(ZENITH, COUCHANT, 40), { at: 2500, dur: 1200, ease: 'in' });
        t.to(soleil, { opacity: 0 }, { at: 3400, dur: 300 });
        t.to(nuit, { opacity: 1 }, { at: 2900, dur: 900, ease: 'inout' });
        t.to(lune, { opacity: 1 }, { at: 3200, dur: 400 });
        t.to(lune, M.arc(LEVANT, [262, 64], 30), { at: 3200, dur: 1100, ease: 'out' });

        t.to(allume, { opacity: 0 }, { at: 3800, dur: 300 });
        t.to(ecran, { transform: ouvert(.06) }, { at: 3900, dur: 520, ease: 'in' });
      },

      /* 2. Le jour revient. On ôte l'écran et le clavier, et ce qu'ils cachaient
            sort et grandit au centre ; ses trois organes s'allument un à un. */
      function (t) {
        t.to(nuit, { opacity: 0 }, { dur: 600, ease: 'inout' });
        t.to(lune, { opacity: 0 }, { dur: 400 });
        t.to(soleil, [
          { transform: M.pose(ZENITH), opacity: 0 },
          { transform: M.pose(ZENITH), opacity: 1 }
        ], { at: 200, dur: 500 });

        t.to(ecran, [
          { transform: ouvert(.06), opacity: 1 },
          { transform: M.pose([220, 176], [1, .06]), opacity: 0 }
        ], { at: 350, dur: 520, ease: 'in' });
        t.to(socle, [
          { transform: M.pose(CHARNIERE), opacity: 1 },
          { transform: M.pose([220, 262]), opacity: 0 }
        ], { at: 400, dur: 520, ease: 'in' });
        t.to(txtPc, { opacity: 0 }, { at: 300, dur: 300 });

        t.to(coeur, { opacity: 1 }, { at: 650, dur: 300 });
        t.to(coeur, M.arc([220, 200], CENTRE, 40, .35, 1), { at: 650, dur: 900, ease: 'out' });

        t.to(puces, [
          { opacity: 0 }, { opacity: 1 }
        ], { at: 1300, dur: 360, stagger: 150 });
        t.to(etiquettes, { opacity: 1 }, { at: 1500, dur: 400, stagger: 150 });
      },

      /* 3. L'armoire glisse en place. Le cœur perd ses étiquettes, se met à
            plat en volant vers la fente du haut — et devient une machine de
            l'armoire. Trois autres le rejoignent ; les diodes s'allument. */
      function (t) {
        t.to(baie, [
          { transform: 'translate(650px,175px)', opacity: 0 },
          { transform: 'translate(610px,175px)', opacity: 1 }
        ], { dur: 750 });

        t.to(etiquettes, { opacity: 0 }, { dur: 300, stagger: 60 });
        t.to(coeur, M.arc(CENTRE, FENTES[0], 70, [1, 1], [.54, .28]), { at: 550, dur: 950, ease: 'inout' });
        t.to(coeur, { opacity: 0 }, { at: 1380, dur: 220 });
        t.to(unites[0], { opacity: 1 }, { at: 1330, dur: 260 });

        for (var i = 1; i < unites.length; i++) {
          t.to(unites[i], [
            { transform: M.pose([780, FENTES[i][1]]), opacity: 0 },
            { transform: M.pose(FENTES[i]), opacity: 1 }
          ], { at: 1500 + (i - 1) * 170, dur: 650, ease: 'pose' });
        }
        t.to(txtSrv, { opacity: 1 }, { at: 2100, dur: 500 });

        /* Le mouvement d'ambiance : des diodes qui vivent, chacune à son rythme. */
        Array.prototype.forEach.call(leds, function (led, k) {
          t.to(led, [
            { opacity: 1 }, { opacity: .25, offset: .5 }, { opacity: 1 }
          ], { at: 2200 + k * 230, dur: 1300 + k * 120, iterations: Infinity, ease: 'inout' });
        });
      },

      /* 4. Le soleil se couche — et cette fois rien ne s'éteint. Jour, nuit,
            jour : la boucle tourne, les demandes arrivent, les réponses partent. */
      function (t) {
        t.to(badge, [
          { transform: 'translate(610px,0px)', opacity: 0 },
          { transform: 'translate(610px,30px)', opacity: 1 }
        ], { dur: 650, ease: 'pose' });
        t.to([tel, pc2], { opacity: 1 }, { at: 250, dur: 500, stagger: 120 });

        t.to(soleil, M.arc(ZENITH, COUCHANT, 40), { dur: 1300, ease: 'in' });
        t.to(soleil, { opacity: 0 }, { at: 1050, dur: 250 });

        /* Une journée en 7 secondes : la nuit d'abord, puis le jour. */
        var JOUR = 7000, debut = 1300;
        t.to(nuit, [
          { opacity: 0, offset: 0 }, { opacity: 1, offset: .08 }, { opacity: 1, offset: .44 },
          { opacity: 0, offset: .52 }, { opacity: 0, offset: 1 }
        ], { at: debut, dur: JOUR, iterations: Infinity, ease: 'lin' });
        t.to(lune, M.passage(LEVANT, COUCHANT, 210, .02, .48), { at: debut, dur: JOUR, iterations: Infinity, ease: 'lin' });
        t.to(soleil, M.passage(LEVANT, COUCHANT, 210, .52, .98), { at: debut, dur: JOUR, iterations: Infinity, ease: 'lin' });

        /* Demandes et réponses : un aller, un temps de travail, un retour. */
        var CYCLE = 2600;
        var trajets = [
          [[110, 112], [520, 122]],
          [[116, 236], [520, 222]]
        ];
        trajets.forEach(function (tr, k) {
          var decale = 700 + k * 1300;
          t.to(req[k], M.passage(tr[0], tr[1], 40, 0, .4), { at: decale, dur: CYCLE, iterations: Infinity, ease: 'lin' });
          t.to(rep[k], M.passage(tr[1], tr[0], -40, .5, .9), { at: decale, dur: CYCLE, iterations: Infinity, ease: 'lin' });
        });
      }
    ];
  });

  M.lier();
})();
