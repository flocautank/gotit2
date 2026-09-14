#!/usr/bin/env python3
"""Assemble une page de leçon à partir d'un fragment de corps.

Usage : python3 .outils/gabarit.py <fragment.part>
Le fragment commence par quatre lignes d'en-tête (TITRE, DESC, FIL, META),
puis le corps HTML de l'article. Le résultat est écrit dans lecons/<nom>.html.
"""
import sys, pathlib

MARK = ('<span class="brand-mark" aria-hidden="true"><svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">'
  '<path d="M11 4h26a8 8 0 0 1 8 8v17a8 8 0 0 1-8 8H23.8l-8.4 6.9A1.5 1.5 0 0 1 13 43.7V37h-2a8 8 0 0 1-8-8V12a8 8 0 0 1 8-8z" fill="currentColor"/>'
  '<path d="M14.8 20.8 L21 27 L33.2 14" fill="none" stroke="#FBF9F5" stroke-width="4.8" stroke-linecap="round" stroke-linejoin="round"/>'
  '</svg></span>')
FAV = ("<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'>"
  "<path d='M11 4h26a8 8 0 0 1 8 8v17a8 8 0 0 1-8 8H23.8l-8.4 6.9A1.5 1.5 0 0 1 13 43.7V37h-2a8 8 0 0 1-8-8V12a8 8 0 0 1 8-8z' fill='%23C3623F'/>"
  "<path d='M14.8 20.8 L21 27 L33.2 14' fill='none' stroke='%23FBF9F5' stroke-width='4.8' stroke-linecap='round' stroke-linejoin='round'/></svg>")

PAGE = """<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{titre} — GotIt !</title>
<meta name="description" content="{desc}">
<link rel="icon" href="data:image/svg+xml,{fav}">
<link rel="stylesheet" href="../assets/css/main.css">
<link rel="stylesheet" href="../assets/css/lesson.css">
<link rel="stylesheet" href="../assets/css/theme-klint.css">
</head>
<body>
<a class="skip-link" href="#contenu">Aller au contenu</a>

<header class="site-header">
  <div class="wrap">
    <a class="brand" href="../index.html">{mark} <span class="brand-word">GotIt<span class="bang">!</span></span></a>
    <nav class="site-nav"><a href="../index.html#catalogue">Catalogue</a></nav>
  </div>
</header>

<main id="contenu">
  <section class="lesson-hero">
    <div class="wrap">
      <div class="breadcrumb">{fil}</div>
      <h1>{titre}</h1>
      <p class="lead">{lead}</p>
      <div class="lesson-meta">{meta}</div>
    </div>
  </section>

  <div class="wrap">
    <article class="lesson-body">
{corps}
    </article>
  </div>
</main>

<footer class="site-footer">
  <div class="wrap"><span>GotIt ! — vulgarisation visuelle.</span><span><a href="../index.html">Retour à l’accueil</a></span></div>
</footer>

<script src="../assets/js/scene.js"></script>
<script src="../assets/js/theme.js"></script>
</body>
</html>
"""

src = pathlib.Path(sys.argv[1])
lignes = src.read_text(encoding='utf-8').split('\n')
champs = {}
for i in range(5):
    cle, _, val = lignes[i].partition(': ')
    champs[cle.strip()] = val
corps = '\n'.join(lignes[5:])

out = pathlib.Path('lecons') / (src.stem + '.html')
out.write_text(PAGE.format(titre=champs['TITRE'], desc=champs['DESC'], fil=champs['FIL'],
                           lead=champs['LEAD'], meta=champs['META'], corps=corps,
                           mark=MARK, fav=FAV), encoding='utf-8')
print('écrit :', out)
