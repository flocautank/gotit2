/* GotIt — leçon RAG, scène 2 : les quatre temps.
 *
 * Un seul jeu d'objets traverse les quatre étapes. Les morceaux qui sortent de
 * la pile en 2 sont ceux qui rejoignent la question en 3, puis entrent dans le
 * modèle en 4 — et la citation finale ramène à l'endroit précis d'où l'un d'eux
 * est parti. C'est cette continuité qui fait le sens : on suit une matière, pas
 * une suite de cases qui s'allument.
 */
(function () {
  'use strict';
  var M = window.GotItMotion;
  if (!M) return;

  /* La grille où les morceaux se rangent, dans l'ordre du document. */
  var GRILLE = [
    [300, 120], [390, 120], [480, 120],
    [300, 170], [390, 170], [480, 170],
    [300, 220], [390, 220], [480, 220]
  ];
  var PILE = [120, 170];
  var Q_DEPART = [400, 46], Q_JOINTE = [560, 46], MODELE = [690, 170];

  /* Sous la question, là où s'empilent les trois morceaux retenus. */
  var EMPILE = [[560, 96], [560, 138], [560, 180]];

  M.scene('rag-pipeline', function (q) {
    var docs = q('#rp-docs')[0], docsTxt = q('#rp-docs-txt')[0];
    var modele = q('#rp-modele')[0], question = q('#rp-q')[0];
    var morceaux = q('.rp-mor'), gardes = q('.rp-garde'), ecartes = q('.rp-ecarte');
    var balai = q('#rp-balai')[0], traces = q('.rp-trace');
    var reponse = q('#rp-rep')[0], cite = q('#rp-cite')[0], pense = q('.mo-pense');

    function indice(el) { return Array.prototype.indexOf.call(morceaux, el); }

    return [

      /* 1. La distribution entre en scène : la pile, le modèle, puis la question
            qui tombe d'en haut et se pose avec un léger rebond. */
      function (t) {
        t.to(docs, [
          { opacity: 0, transform: 'translate(60px,170px)' },
          { opacity: 1, transform: 'translate(120px,170px)' }
        ], { dur: 800 });
        t.to(docsTxt, { opacity: 1 }, { at: 350, dur: 500 });
        t.to(modele, [
          { opacity: 0, transform: 'translate(752px,170px)' },
          { opacity: 1, transform: 'translate(690px,170px)' }
        ], { at: 250, dur: 800 });
        t.to(question, [
          { opacity: 0, transform: 'translate(400px,8px) scale(.6)' },
          { opacity: 1, transform: 'translate(400px,52px) scale(1.04)', offset: .7 },
          { opacity: 1, transform: 'translate(400px,46px) scale(1)' }
        ], { at: 700, dur: 900 });
      },

      /* 2. La pile éclate en morceaux qui se rangent, puis la recherche balaie
            l'ensemble ; chaque morceau frémit au passage du faisceau. */
      function (t) {
        /* La pile ne disparaît pas : elle reste, pâlie, comme la source d'où tout
           est parti — l'œil la retrouvera quand la réponse citera son passage. */
        t.to(docs, { opacity: .3, transform: 'translate(120px,170px) scale(.84)' }, { dur: 450, ease: 'in' });
        t.to(docsTxt, { opacity: .55 }, { dur: 300 });

        Array.prototype.forEach.call(morceaux, function (m, i) {
          var cible = GRILLE[i];
          t.to(m, M.arc(PILE, cible, 50 + (i % 3) * 22, .4, 1), { at: 220 + i * 70, dur: 820, ease: 'inout' });
          t.to(m, { opacity: 1 }, { at: 220 + i * 70, dur: 260 });
        });

        var debutBalai = 1500, dureeBalai = 1300;
        t.to(balai, { opacity: 1 }, { at: debutBalai, dur: 220 });
        t.to(balai, [
          { transform: 'translate(250px,170px)' },
          { transform: 'translate(530px,170px)' }
        ], { at: debutBalai, dur: dureeBalai, ease: 'inout' });
        t.to(balai, { opacity: 0 }, { at: debutBalai + dureeBalai - 180, dur: 300 });

        Array.prototype.forEach.call(morceaux, function (m, i) {
          var c = GRILLE[i];
          var passage = debutBalai + (c[0] - 250) / 280 * dureeBalai - 120;
          var base = M.pose(c);
          t.to(m, [
            { transform: base + ' scale(1)' },
            { transform: base + ' scale(1.1)', offset: .4 },
            { transform: base + ' scale(1)' }
          ], { at: passage, dur: 380, ease: 'inout' });
        });
      },

      /* 3. Les morceaux sans rapport s'effacent ; les trois qui parlent de congés
            s'allument, la question se décale, et ils viennent s'empiler dessous.
            Une trace reste à leur place d'origine. */
      function (t) {
        t.to(ecartes, { opacity: .22 }, { dur: 500, stagger: 30 });
        Array.prototype.forEach.call(gardes, function (g, k) {
          var c = GRILLE[indice(g)], base = M.pose(c);
          t.to(g.querySelector('.mo-lueur'), { opacity: 1 }, { at: 250 + k * 130, dur: 320 });
          t.to(g, [
            { transform: base + ' scale(1)' },
            { transform: base + ' scale(1.16)', offset: .45 },
            { transform: base + ' scale(1.06)' }
          ], { at: 250 + k * 130, dur: 520, ease: 'out' });
        });

        t.to(question, [
          { transform: M.pose(Q_DEPART, 1) },
          { transform: M.pose(Q_JOINTE, 1) }
        ], { at: 750, dur: 750, ease: 'inout' });

        Array.prototype.forEach.call(gardes, function (g, k) {
          var c = GRILLE[indice(g)];
          t.to(g, M.arc(c, EMPILE[k], 60, 1.06, .92), { at: 1150 + k * 170, dur: 850, ease: 'inout' });
          t.to(traces[k], { opacity: .75 }, { at: 1200 + k * 170, dur: 400 });
        });
      },

      /* 4. La question et ses morceaux plongent dans le modèle, qui « inspire » ;
            il réfléchit, la réponse sort, et la citation se trace jusqu'au
            passage d'origine, qui s'éclaire. */
      function (t) {
        t.to(question, [
          { transform: M.pose(Q_JOINTE, 1), opacity: 1 },
          { transform: M.pose(MODELE, .2), opacity: 0 }
        ], { dur: 700, ease: 'in' });
        Array.prototype.forEach.call(gardes, function (g, k) {
          t.to(g, [
            { transform: M.pose(EMPILE[k], .92), opacity: 1 },
            { transform: M.pose(MODELE, .2), opacity: 0 }
          ], { at: 120 + k * 90, dur: 640, ease: 'in' });
        });

        t.to(modele, [
          { transform: M.pose(MODELE, 1) },
          { transform: M.pose(MODELE, 1.07), offset: .4 },
          { transform: M.pose(MODELE, 1) }
        ], { at: 720, dur: 600, ease: 'out' });

        t.to(pense, [
          { opacity: 0 }, { opacity: 1, offset: .2 }, { opacity: .2, offset: .5 },
          { opacity: 1, offset: .75 }, { opacity: 0 }
        ], { at: 1000, dur: 1100, stagger: 160, ease: 'lin' });

        t.to(reponse, [
          { opacity: 0, transform: 'translate(690px,232px) scale(.7)' },
          { opacity: 1, transform: 'translate(600px,292px) scale(1)' }
        ], { at: 2250, dur: 800, ease: 'pose' });

        t.to(cite, { opacity: 1 }, { at: 2950, dur: 150 });
        t.to(cite, [{ strokeDashoffset: 1 }, { strokeDashoffset: 0 }], { at: 2950, dur: 900, ease: 'inout' });
        t.to(traces[0], [
          { transform: 'translate(300px,120px) scale(1)', opacity: .75 },
          { transform: 'translate(300px,120px) scale(1.22)', opacity: 1, offset: .45 },
          { transform: 'translate(300px,120px) scale(1)', opacity: 1 }
        ], { at: 3800, dur: 600, ease: 'out' });
      }
    ];
  });

  M.lier();
})();
