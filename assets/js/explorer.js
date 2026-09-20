/* GotIt — la carte du site.
 *
 * Le graphe se déduit entièrement du catalogue (assets/js/data.js) : rien n'est
 * décrit deux fois, et une leçon ajoutée cette nuit apparaît ici le lendemain
 * sans qu'on touche à ce fichier.
 *
 * Quatre sortes de liens, tous réels — jamais de trait décoratif :
 *   taxonomie  un domaine et ce qu'il contient ;
 *   renvoi     une carte qui pointe vers sa leçon (champ « voir ») ;
 *   parente    deux leçons qui partagent au moins deux mots-clés ;
 *   parente    une carte et une leçon qui partagent un mot.
 *
 * Le tracé est calculé en pixels réels, mesurés sur la page. Un viewBox mis à
 * l'échelle rendrait les libellés minuscules sur mobile — c'est le piège des
 * schémas animés, et il n'a pas sa place ici.
 */
(function () {
  'use strict';

  var data = window.GOTIT;
  if (!data) return;

  var SVG = 'http://www.w3.org/2000/svg';
  var toile = document.getElementById('toile');
  if (!toile) return;

  /* ------------------------------------------------------------------ *
   *  1. Construire le graphe
   * ------------------------------------------------------------------ */

  /* Les cartes portent un domaine écrit en clair ; les familles, un identifiant.
     Toute valeur inconnue formera sa propre grappe plutôt que de disparaître. */
  var ALIAS = {
    'IA': 'ia', 'SI': 'si', 'Réseau': 'reseau',
    'Informatique': 'informatique', 'Data': 'data'
  };

  var noeuds = {};   // clé -> { type, label, titre, resume, url, domaine }
  var liens = [];    // { a, b, genre }
  var voisins = {};  // clé -> [clés]

  function ajouterLien(a, b, genre) {
    if (a === b || !noeuds[a] || !noeuds[b]) return;
    var deja = liens.some(function (l) {
      return (l.a === a && l.b === b) || (l.a === b && l.b === a);
    });
    if (deja) return;
    liens.push({ a: a, b: b, genre: genre });
    (voisins[a] = voisins[a] || []).push(b);
    (voisins[b] = voisins[b] || []).push(a);
  }

  /* Un identifiant fait un bien meilleur libellé qu'un titre entier :
     « local-vs-cloud » plutôt que « Le local et le cloud, la vraie différence ». */
  function libelleCourt(id) {
    return id.replace(/-/g, ' ');
  }

  (data.FAMILIES || []).forEach(function (f) {
    noeuds['d:' + f.id] = {
      type: 'domaine', label: f.title, titre: f.title,
      resume: f.description, url: 'index.html#/' + f.id, domaine: f.id
    };
  });

  (data.FAMILIES || []).forEach(function (f) {
    f.categories.forEach(function (c) {
      c.subcategories.forEach(function (s) {
        s.lessons.forEach(function (lid) {
          var l = (data.LESSONS || {})[lid];
          if (!l || l.soon) return;
          var cle = 'l:' + lid;
          if (!noeuds[cle]) {
            noeuds[cle] = {
              type: 'lecon', label: libelleCourt(lid), titre: l.title,
              resume: l.summary, url: l.path, domaine: f.id,
              rang: c.title + ' · ' + s.title, mots: l.keywords || []
            };
          }
          ajouterLien('d:' + f.id, cle, 'taxonomie');
        });
      });
    });
  });

  (data.CARDS || []).forEach(function (c) {
    var dom = ALIAS[c.domaine] || c.domaine;
    var cleDom = 'd:' + dom;
    if (!noeuds[cleDom]) {
      // Un domaine apparu côté cartes mais absent de la taxonomie : on le montre.
      noeuds[cleDom] = { type: 'domaine', label: c.domaine, titre: c.domaine, resume: '', url: 'cartes.html', domaine: dom };
    }
    noeuds['c:' + c.id] = {
      /* Le libellé perd sa parenthèse — « GPU » et non « GPU (carte graphique) » :
         sur la carte, la place est comptée. Le titre entier reste au panneau. */
      type: 'carte', label: c.terme.replace(/\s*\(.*\)\s*$/, ''), titre: c.terme,
      resume: c.une, url: 'cartes.html#' + c.id, domaine: dom,
      mots: (c.aka || []).concat([c.id])
    };
    ajouterLien(cleDom, 'c:' + c.id, 'taxonomie');
  });

  /* Les renvois explicites d'une carte vers sa leçon. */
  (data.CARDS || []).forEach(function (c) {
    if (c.voir) ajouterLien('c:' + c.id, 'l:' + c.voir, 'renvoi');
  });

  /* Les parentés déduites des mots-clés. Deux mots communs entre leçons :
     en dessous, le lien serait du hasard. Un seul suffit entre une carte et une
     leçon, les « aka » d'une carte étant déjà très ciblés. */
  var idsLecons = Object.keys(noeuds).filter(function (k) { return noeuds[k].type === 'lecon'; });

  idsLecons.forEach(function (a, i) {
    idsLecons.slice(i + 1).forEach(function (b) {
      var ma = noeuds[a].mots || [], mb = noeuds[b].mots || [];
      var communs = ma.filter(function (m) { return mb.indexOf(m) !== -1; });
      if (communs.length >= 2) ajouterLien(a, b, 'parente');
    });
  });

  Object.keys(noeuds).forEach(function (k) {
    if (noeuds[k].type !== 'carte') return;
    var ma = noeuds[k].mots || [];
    idsLecons.forEach(function (b) {
      var mb = noeuds[b].mots || [];
      if (ma.some(function (m) { return mb.indexOf(m) !== -1; })) ajouterLien(k, b, 'parente');
    });
  });

  /* Une carte qui en nomme une autre dans sa phrase ou dans son « à ne pas
     confondre » : c'est le lien le plus parlant du site — « le RAG, à ne pas
     confondre avec le fine-tuning » — et il n'existait nulle part ailleurs.
     Cinq lettres au minimum, pour ne pas ferrer un mot courant. */
  (data.CARDS || []).forEach(function (a) {
    var texte = ((a.une || '') + ' ' + (a.pas || '')).toLowerCase();
    (data.CARDS || []).forEach(function (b) {
      if (a.id === b.id) return;
      var noms = [b.terme].concat(b.aka || []).filter(function (m) { return m.length >= 5; });
      if (noms.some(function (m) { return texte.indexOf(m.toLowerCase()) !== -1; })) {
        ajouterLien('c:' + a.id, 'c:' + b.id, 'renvoi');
      }
    });
  });

  /* Et deux cartes qui répondent au même mot sont voisines par construction. */
  var idsCartes = Object.keys(noeuds).filter(function (k) { return noeuds[k].type === 'carte'; });
  idsCartes.forEach(function (a, i) {
    idsCartes.slice(i + 1).forEach(function (b) {
      var ma = noeuds[a].mots || [], mb = noeuds[b].mots || [];
      if (ma.some(function (m) { return mb.indexOf(m) !== -1; })) ajouterLien(a, b, 'parente');
    });
  });

  /* ------------------------------------------------------------------ *
   *  2. L'état de la page
   * ------------------------------------------------------------------ */

  var etat = { filtre: 'lecons', centre: null, survol: null };

  var elFil = document.getElementById('position');
  var elRetour = document.getElementById('retour');
  var elVide = document.getElementById('vide');
  var elInvite = document.getElementById('invite');
  var elDetail = document.getElementById('detail');
  var elRecherche = document.getElementById('recherche');

  function visible(cle) {
    var n = noeuds[cle];
    if (!n) return false;
    if (n.type === 'domaine') return true;
    if (etat.filtre === 'tout') return true;
    return etat.filtre === (n.type === 'lecon' ? 'lecons' : 'cartes');
  }

  /* ------------------------------------------------------------------ *
   *  3. Les deux dispositions
   * ------------------------------------------------------------------ */

  /* Vue d'ensemble : une grappe par domaine, posée sur une ellipse. Le calcul
     est déterministe — pas de simulation physique : la carte est identique à
     chaque visite, et ne coûte rien au téléphone. */
  function disposerEnsemble(L, H) {
    var pos = {};
    var doms = Object.keys(noeuds).filter(function (k) { return noeuds[k].type === 'domaine'; });
    var cx = L / 2, cy = H / 2;
    var rx = L * 0.32, ry = H * 0.32;
    var etroit = L < 620;

    /* Deux cas où l'on ne montre que les domaines : un téléphone, où cinq
       grappes côte à côte sont illisibles quoi qu'on fasse ; et un catalogue
       devenu trop fourni, où tout afficher ne ferait qu'un plat de spaghettis.
       Le contenu s'ouvre alors d'un clic, comme dans le catalogue : on choisit
       d'abord, on entre ensuite. Le seuil fait que la page vieillit bien —
       cinq contenus s'ajoutent chaque nuit. */
    var total = Object.keys(noeuds).filter(function (k) {
      return noeuds[k].type !== 'domaine' && visible(k);
    }).length;

    if (etroit || total > 46) {
      doms.forEach(function (d, i) {
        var a = (i / doms.length) * Math.PI * 2 - Math.PI / 2;
        pos[d] = { x: cx + Math.cos(a) * L * 0.33, y: cy + Math.sin(a) * H * 0.30, r: 30 };
      });
      return borner(pos, L, H);
    }

    doms.forEach(function (d, i) {
      var a = (i / doms.length) * Math.PI * 2 - Math.PI / 2;
      pos[d] = { x: cx + Math.cos(a) * rx, y: cy + Math.sin(a) * ry, r: 25 };

      var enfants = (voisins[d] || []).filter(visible);
      if (!enfants.length) return;

      /* Le rayon de la grappe suit le nombre d'enfants : les libellés ne se
         chevauchent pas davantage quand le catalogue double. */
      var r = Math.max(78, enfants.length * 9.4);
      r = Math.min(r, Math.min(L, H) * 0.26);

      /* Un quart de tour laissé libre sous le centre : c'est là que se pose le
         nom du domaine, et rien ne doit venir l'écraser. */
      var creux = 1.15;
      var plage = Math.PI * 2 - creux;

      enfants.forEach(function (e, j) {
        var b = Math.PI / 2 + creux / 2 + ((j + 0.5) / enfants.length) * plage;
        pos[e] = { x: pos[d].x + Math.cos(b) * r, y: pos[d].y + Math.sin(b) * r, r: 7.5 };
      });
    });

    return borner(pos, L, H);
  }

  /* Vue centrée : le point choisi au milieu, ses voisins autour. C'est là que
     la carte sert vraiment — on voit d'un coup ce qui touche à une notion. */
  function disposerCentre(L, H, centre) {
    var pos = {};
    var cx = L / 2, cy = H / 2;
    var etroit = L < 620;

    pos[centre] = { x: cx, y: cy, r: etroit ? 26 : 32 };

    var autour = (voisins[centre] || []).filter(visible);
    if (!autour.length) return pos;

    /* Au-delà d'une quinzaine, deux anneaux : un seul deviendrait illisible. */
    var deuxAnneaux = autour.length > 14;
    var r1 = Math.min(L, H) * (etroit ? 0.27 : 0.29);
    var r2 = Math.min(L, H) * (etroit ? 0.42 : 0.44);

    var premier = deuxAnneaux ? Math.ceil(autour.length / 2) : autour.length;

    autour.forEach(function (v, i) {
      var interne = i < premier;
      var n = interne ? premier : autour.length - premier;
      var k = interne ? i : i - premier;
      var a = (k / n) * Math.PI * 2 - Math.PI / 2 + (interne ? 0 : Math.PI / n);
      var r = interne ? r1 : r2;
      pos[v] = {
        x: cx + Math.cos(a) * r,
        y: cy + Math.sin(a) * r * (H < L ? 0.82 : 1),
        r: noeuds[v].type === 'domaine' ? (etroit ? 17 : 21) : (etroit ? 8 : 10)
      };
    });

    return borner(pos, L, H);
  }

  /* ------------------------------------------------------------------ *
   *  4. Le tracé
   * ------------------------------------------------------------------ */

  function couper(texte, max) {
    var mots = String(texte).split(' ');
    var lignes = [], ligne = '';
    mots.forEach(function (m) {
      if (!ligne) { ligne = m; return; }
      if ((ligne + ' ' + m).length <= max) ligne += ' ' + m;
      else { lignes.push(ligne); ligne = m; }
    });
    if (ligne) lignes.push(ligne);
    if (lignes.length > 2) {
      lignes = lignes.slice(0, 2);
      lignes[1] = lignes[1].replace(/.{0,2}$/, '…');
    }
    return lignes;
  }

  /* Aucun point ne doit finir sous le bord : on replie la disposition entière
     vers l'intérieur plutôt que de rogner un libellé. */
  function borner(pos, L, H) {
    var m = 58;
    var cles = Object.keys(pos);
    if (!cles.length) return pos;

    var minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    cles.forEach(function (k) {
      minX = Math.min(minX, pos[k].x); maxX = Math.max(maxX, pos[k].x);
      minY = Math.min(minY, pos[k].y); maxY = Math.max(maxY, pos[k].y);
    });

    var l = maxX - minX || 1, h = maxY - minY || 1;
    /* On agrandit aussi quand c'est trop petit — une vue centrée à trois points
       laisserait sinon la toile presque vide — mais sans jamais grossir au point
       de perdre l'échelle de lecture. */
    var k = Math.min(1.7, (L - 2 * m) / l, (H - 2 * m) / h);
    var dx = (L - l * k) / 2 - minX * k;
    var dy = (H - h * k) / 2 - minY * k;

    cles.forEach(function (c) {
      pos[c] = { x: pos[c].x * k + dx, y: pos[c].y * k + dy, r: pos[c].r };
    });
    return pos;
  }

  function creer(nom, attrs) {
    var e = document.createElementNS(SVG, nom);
    Object.keys(attrs || {}).forEach(function (k) { e.setAttribute(k, attrs[k]); });
    return e;
  }

  var positions = {};
  var ancres = {};

  /* Pour chaque point, le point dont il s'éloigne : son domaine en vue
     d'ensemble, le point centré en vue centrée. C'est lui qui donne la
     direction dans laquelle poser le libellé. */
  function calculerAncres() {
    ancres = {};
    Object.keys(positions).forEach(function (cle) {
      if (etat.centre) { ancres[cle] = positions[etat.centre]; return; }
      var dom = 'd:' + noeuds[cle].domaine;
      ancres[cle] = (cle !== dom && positions[dom]) ? positions[dom] : null;
    });
    /* Les domaines, eux, s'écartent du milieu de la toile. */
    var rect = toile.getBoundingClientRect();
    var milieu = { x: rect.width / 2, y: rect.height / 2 };
    Object.keys(ancres).forEach(function (cle) {
      if (!ancres[cle]) ancres[cle] = milieu;
    });
  }

  function tracer() {
    var rect = toile.getBoundingClientRect();
    var L = Math.round(rect.width), H = Math.round(rect.height);
    if (!L || !H) return;

    toile.setAttribute('viewBox', '0 0 ' + L + ' ' + H);
    while (toile.childNodes.length > 1) toile.removeChild(toile.lastChild);

    positions = etat.centre ? disposerCentre(L, H, etat.centre) : disposerEnsemble(L, H);
    calculerAncres();

    var affiches = Object.keys(positions);
    elVide.hidden = affiches.length > 0;

    var etroit = L < 620;
    var gLiens = creer('g', {}), gNoeuds = creer('g', {});

    liens.forEach(function (l) {
      var pa = positions[l.a], pb = positions[l.b];
      if (!pa || !pb) return;
      /* En vue d'ensemble on ne trace que la taxonomie et les parentés entre
         leçons : les renvois de cartes brouilleraient tout. */
      if (!etat.centre && l.genre === 'parente' && noeuds[l.a].type === 'carte') return;

      /* En vue centrée, les liens qui ne touchent pas le point central sont
         vrais mais secondaires : on les laisse en fond de plan. */
      var second = etat.centre && l.a !== etat.centre && l.b !== etat.centre;

      var trait = creer('path', {
        class: 'lien lien-' + l.genre + (second ? ' lien-second' : ''),
        d: 'M' + pa.x + ' ' + pa.y + ' Q' + ((pa.x + pb.x) / 2) + ' ' +
           ((pa.y + pb.y) / 2 - Math.abs(pa.x - pb.x) * 0.08) + ' ' + pb.x + ' ' + pb.y
      });
      trait.dataset.a = l.a;
      trait.dataset.b = l.b;
      gLiens.appendChild(trait);
    });

    affiches.forEach(function (cle) {
      var n = noeuds[cle], p = positions[cle];
      var g = creer('g', {
        class: 'noeud n-' + n.type + (cle === etat.centre ? ' est-centre' : ''),
        tabindex: '0', role: 'button',
        'aria-label': n.titre + ' — ' + (n.type === 'lecon' ? 'leçon' : n.type === 'carte' ? 'carte' : 'domaine')
      });
      g.dataset.cle = cle;
      g.appendChild(creer('circle', { cx: p.x, cy: p.y, r: p.r }));

      var grand = n.type === 'domaine' || cle === etat.centre;
      var taille = grand ? (etroit ? 13 : 14.5) : (etroit ? 10.5 : 11.5);
      var lignes = couper(n.label, grand ? 15 : 13);
      if (n.type === 'domaine' && !etat.centre) {
        var enf = (voisins[cle] || []).filter(visible).length;
        lignes = lignes.concat([enf + (enf > 1 ? ' contenus' : ' contenu')]);
      }

      /* Le libellé part vers l'extérieur de la grappe : posés tous en dessous,
         ceux des points voisins se chevaucheraient. */
      var ancre = ancres[cle] || { x: 0, y: 0 };
      var dx = p.x - ancre.x, dy = p.y - ancre.y;
      var d = Math.sqrt(dx * dx + dy * dy) || 1;
      var horizontal = !grand && Math.abs(dx) / d > 0.26;

      var tx, ty, align;
      if (horizontal) {
        align = dx > 0 ? 'start' : 'end';
        tx = p.x + (dx > 0 ? p.r + 9 : -(p.r + 9));
        ty = p.y + taille * 0.36 - (lignes.length - 1) * (taille + 1) / 2;
      } else {
        align = 'middle';
        tx = p.x;
        ty = dy < 0 && !grand
          ? p.y - p.r - 7 - (lignes.length - 1) * (taille + 1)
          : p.y + p.r + taille + 4;
      }

      var texte = creer('text', { x: tx, y: ty, 'font-size': taille, 'text-anchor': align });
      lignes.forEach(function (ligne, i) {
        var t = creer('tspan', { x: tx, dy: i ? taille + 1 : 0 });
        t.textContent = ligne;
        texte.appendChild(t);
      });
      g.appendChild(texte);
      gNoeuds.appendChild(g);
    });

    toile.appendChild(gLiens);
    toile.appendChild(gNoeuds);

    elRetour.hidden = !etat.centre;
    if (etat.centre) {
      elFil.textContent = noeuds[etat.centre].titre;
    } else {
      var poses = affiches.filter(function (c) { return noeuds[c].type !== 'domaine'; }).length;
      var total = Object.keys(noeuds).filter(function (c) {
        return noeuds[c].type !== 'domaine' && visible(c);
      }).length;
      elFil.textContent = poses
        ? 'Les cinq domaines — ' + poses + ' points'
        : 'Les cinq domaines — ' + total + ' contenus, touchez pour ouvrir';
    }
  }

  /* ------------------------------------------------------------------ *
   *  5. Mettre en avant, et raconter dans le panneau
   * ------------------------------------------------------------------ */

  function eclairer(cle) {
    var proches = cle ? [cle].concat(voisins[cle] || []) : null;

    Array.prototype.forEach.call(toile.querySelectorAll('.noeud'), function (g) {
      var k = g.dataset.cle;
      g.classList.toggle('est-vif', !!cle && k === cle);
      g.classList.toggle('est-eteint', !!cle && proches.indexOf(k) === -1);
    });

    Array.prototype.forEach.call(toile.querySelectorAll('.lien'), function (t) {
      var touche = !!cle && (t.dataset.a === cle || t.dataset.b === cle);
      t.classList.toggle('est-vif', touche);
      t.classList.toggle('est-eteint', !!cle && !touche);
    });
  }

  function raconter(cle) {
    var n = noeuds[cle];
    if (!n) return;

    elInvite.hidden = true;
    elDetail.hidden = false;
    document.getElementById('d-type').textContent =
      n.type === 'lecon' ? 'Leçon' : n.type === 'carte' ? 'Carte' : 'Domaine';
    document.getElementById('d-titre').textContent = n.titre;
    document.getElementById('d-resume').textContent = n.resume || '';

    var lien = document.getElementById('d-lien');
    lien.href = n.url;
    lien.textContent = n.type === 'lecon' ? 'Ouvrir la leçon' :
                       n.type === 'carte' ? 'Voir la carte' : 'Parcourir le domaine';

    var boite = document.getElementById('d-voisins');
    boite.innerHTML = '';
    var proches = (voisins[cle] || []).filter(visible);
    if (!proches.length) return;

    var titre = document.createElement('h3');
    titre.textContent = proches.length + (proches.length > 1 ? ' notions liées' : ' notion liée');
    boite.appendChild(titre);

    var ul = document.createElement('ul');
    proches.slice(0, 12).forEach(function (v) {
      var li = document.createElement('li');
      var b = document.createElement('button');
      b.type = 'button';
      b.textContent = noeuds[v].titre;
      b.addEventListener('click', function () { centrer(v); });
      li.appendChild(b);
      ul.appendChild(li);
    });
    boite.appendChild(ul);
  }

  function centrer(cle) {
    if (!noeuds[cle]) return;
    /* Se placer sur un point n'a de sens que s'il est affiché : on élargit
       le filtre plutôt que de montrer une carte vide. */
    if (!visible(cle)) majFiltre('tout');
    etat.centre = cle;
    tracer();
    eclairer(null);
    raconter(cle);
  }

  function revenir() {
    etat.centre = null;
    tracer();
    eclairer(null);
    elDetail.hidden = true;
    elInvite.hidden = false;
  }

  /* ------------------------------------------------------------------ *
   *  6. Les commandes
   * ------------------------------------------------------------------ */

  toile.addEventListener('mouseover', function (e) {
    var g = e.target.closest ? e.target.closest('.noeud') : null;
    if (!g) return;
    eclairer(g.dataset.cle);
    raconter(g.dataset.cle);
  });

  toile.addEventListener('mouseleave', function () {
    eclairer(null);
    if (etat.centre) raconter(etat.centre);
  });

  toile.addEventListener('click', function (e) {
    var g = e.target.closest ? e.target.closest('.noeud') : null;
    if (g) centrer(g.dataset.cle);
  });

  toile.addEventListener('keydown', function (e) {
    var g = e.target.closest ? e.target.closest('.noeud') : null;
    if (!g) return;
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); centrer(g.dataset.cle); }
  });

  toile.addEventListener('focusin', function (e) {
    var g = e.target.closest ? e.target.closest('.noeud') : null;
    if (g) { eclairer(g.dataset.cle); raconter(g.dataset.cle); }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && etat.centre) revenir();
  });

  elRetour.addEventListener('click', revenir);

  function majFiltre(valeur) {
    etat.filtre = valeur;
    Array.prototype.forEach.call(document.querySelectorAll('.explo-bascule button'), function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.filtre === valeur));
    });
  }

  Array.prototype.forEach.call(document.querySelectorAll('.explo-bascule button'), function (b) {
    b.addEventListener('click', function () {
      majFiltre(b.dataset.filtre);
      /* Si le point centré vient d'être masqué, on remonte à la vue d'ensemble. */
      if (etat.centre && !visible(etat.centre)) { revenir(); return; }
      tracer();
      if (etat.centre) raconter(etat.centre);
    });
  });

  /* La recherche saute directement sur un point. */
  var suggestions = document.getElementById('suggestions');
  Object.keys(noeuds).forEach(function (cle) {
    if (noeuds[cle].type === 'domaine') return;
    var o = document.createElement('option');
    o.value = noeuds[cle].titre;
    suggestions.appendChild(o);
  });

  function chercher(q) {
    q = q.trim().toLowerCase();
    if (!q) return null;
    var cles = Object.keys(noeuds);
    var exact = cles.filter(function (k) { return noeuds[k].titre.toLowerCase() === q; });
    if (exact.length) return exact[0];
    var partiel = cles.filter(function (k) {
      return noeuds[k].titre.toLowerCase().indexOf(q) !== -1 ||
             noeuds[k].label.toLowerCase().indexOf(q) !== -1 ||
             (noeuds[k].mots || []).some(function (m) { return m.toLowerCase() === q; });
    });
    return partiel.length ? partiel[0] : null;
  }

  elRecherche.addEventListener('change', function () {
    var cle = chercher(elRecherche.value);
    if (cle) { centrer(cle); elRecherche.value = ''; }
  });
  elRecherche.addEventListener('keydown', function (e) {
    if (e.key !== 'Enter') return;
    var cle = chercher(elRecherche.value);
    if (cle) { centrer(cle); elRecherche.value = ''; }
  });

  /* ------------------------------------------------------------------ *
   *  7. La même chose en liste, pour qui préfère lire
   * ------------------------------------------------------------------ */

  (function liste() {
    var boite = document.getElementById('liste-contenu');
    if (!boite) return;

    Object.keys(noeuds).filter(function (k) { return noeuds[k].type === 'domaine'; }).forEach(function (d) {
      var bloc = document.createElement('div');
      bloc.className = 'liste-domaine';

      var h = document.createElement('h3');
      var enfants = (voisins[d] || []).filter(function (k) { return noeuds[k].type !== 'domaine'; });
      var nbL = enfants.filter(function (k) { return noeuds[k].type === 'lecon'; }).length;
      var nbC = enfants.length - nbL;
      h.textContent = noeuds[d].titre + ' — ' + nbL + (nbL > 1 ? ' leçons' : ' leçon') +
                      ', ' + nbC + (nbC > 1 ? ' cartes' : ' carte');
      bloc.appendChild(h);

      var ul = document.createElement('ul');
      enfants.forEach(function (k) {
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.href = noeuds[k].url;
        a.textContent = noeuds[k].titre;
        li.appendChild(a);
        ul.appendChild(li);
      });
      bloc.appendChild(ul);
      boite.appendChild(bloc);
    });
  })();

  /* ------------------------------------------------------------------ *
   *  8. Départ
   * ------------------------------------------------------------------ */

  majFiltre('lecons');
  tracer();

  var minuteur;
  window.addEventListener('resize', function () {
    clearTimeout(minuteur);
    minuteur = setTimeout(function () {
      tracer();
      if (etat.centre) eclairer(null);
    }, 160);
  });

  /* Une adresse du type explorer.html#rag ouvre directement sur ce point. */
  function depuisAdresse() {
    var h = location.hash.replace(/^#/, '');
    if (!h) return;
    var cle = noeuds['l:' + h] ? 'l:' + h : noeuds['c:' + h] ? 'c:' + h : noeuds['d:' + h] ? 'd:' + h : null;
    if (cle) centrer(cle);
  }
  window.addEventListener('hashchange', depuisAdresse);
  depuisAdresse();
})();
