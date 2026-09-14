#!/usr/bin/env python3
"""Contrôles de cohérence du site — à lancer depuis la racine du dépôt.

    python3 .outils/verifier.py

Vérifie : la structure HTML de chaque page, les liens internes, l'intégrité du
catalogue (toute leçon référencée existe, toute page déclarée est présente), la
cohérence des étapes de chaque scène animée, et la règle des quatre étapes pour
les cartes de concept.

Sort en code 1 si quelque chose ne va pas.
"""
import glob, json, os, re, sys
from html.parser import HTMLParser

VOID = {'area','base','br','col','embed','hr','img','input','link','meta','source','track','wbr',
        'path','circle','rect','line','polygon','polyline','ellipse','use','stop','animate','mpath'}

erreurs = []


class Structure(HTMLParser):
    def __init__(self, fichier):
        super().__init__(convert_charrefs=True)
        self.pile, self.fichier = [], fichier

    def handle_starttag(self, tag, attrs):
        if tag not in VOID:
            self.pile.append((tag, self.getpos()))

    def handle_endtag(self, tag):
        if tag in VOID:
            return
        if not self.pile:
            erreurs.append(f'{self.fichier} : </{tag}> orphelin ligne {self.getpos()[0]}')
            return
        ouvert, pos = self.pile.pop()
        if ouvert != tag:
            erreurs.append(f'{self.fichier} : attendu </{ouvert}> (ouvert l.{pos[0]}), trouvé </{tag}> l.{self.getpos()[0]}')


def verifier_pages():
    pages = ['index.html', 'cartes.html', 'idees.html'] + sorted(glob.glob('lecons/*.html'))
    for fichier in pages:
        source = open(fichier, encoding='utf-8').read()

        analyseur = Structure(fichier)
        analyseur.feed(source)
        for tag, pos in analyseur.pile:
            erreurs.append(f'{fichier} : <{tag}> jamais fermé (l.{pos[0]})')

        # Chaque scène : au moins deux étapes, et aucun data-show au-delà.
        for scene in re.findall(r'<section class="scene".*?</section>', source, re.S):
            etapes = len(re.findall(r'<p class="step"', scene))
            titre = re.search(r'scene-title">(.*?)<', scene)
            titre = titre.group(1) if titre else '?'
            if etapes < 2:
                erreurs.append(f'{fichier} : scène « {titre} » n\'a que {etapes} étape(s)')
            for spec in re.findall(r'data-show="([^"]+)"', scene):
                nombres = [int(n) for n in re.findall(r'\d+', spec)]
                if nombres and max(nombres) > etapes:
                    erreurs.append(f'{fichier} : scène « {titre} » ({etapes} étapes) référence data-show="{spec}"')

        for href in re.findall(r'href="([^"#]+\.html)[^"]*"', source):
            cible = os.path.normpath(os.path.join(os.path.dirname(fichier), href))
            if not os.path.exists(cible):
                erreurs.append(f'{fichier} : lien mort vers {href}')
    return len(pages)


def lire_data():
    """Extrait LESSONS, FAMILIES et CARDS sans exécuter de JavaScript."""
    source = open('assets/js/data.js', encoding='utf-8').read()
    ids_lecons = dict(re.findall(r"^    '([a-z0-9-]+)': \{", source, re.M) and [] or [])
    lecons = {}
    for bloc in re.finditer(r"^    '([a-z0-9-]+)': \{(.*?)^    \},", source, re.S | re.M):
        cle, corps = bloc.group(1), bloc.group(2)
        chemin = re.search(r"path: '([^']+)'", corps)
        lecons[cle] = {'path': chemin.group(1) if chemin else None,
                       'soon': 'soon: true' in corps}
    for bloc in re.finditer(r"^    '([a-z0-9-]+)': \{ title:(.*?)\},$", source, re.M):
        cle, corps = bloc.group(1), bloc.group(2)
        if cle not in lecons:
            lecons[cle] = {'path': None, 'soon': 'soon: true' in corps}
    references = set(re.findall(r"lessons: \[([^\]]*)\]", source))
    citees = set()
    for groupe in references:
        citees |= set(re.findall(r"'([a-z0-9-]+)'", groupe))
    cartes = re.findall(r"\n      id: \"([^\"]+)\".*?etapes: \[(.*?)\n      \]", source, re.S)
    return lecons, citees, cartes


def verifier_catalogue():
    lecons, citees, cartes = lire_data()
    for cle, fiche in lecons.items():
        if cle not in citees:
            erreurs.append(f'catalogue : la leçon « {cle} » n\'est rattachée à aucune sous-catégorie')
        if fiche['soon'] and fiche['path']:
            erreurs.append(f'catalogue : « {cle} » est marquée « bientôt » mais a un chemin')
        if not fiche['soon']:
            if not fiche['path']:
                erreurs.append(f'catalogue : « {cle} » n\'a pas de chemin')
            elif not os.path.exists(fiche['path']):
                erreurs.append(f'catalogue : la page {fiche["path"]} est absente')
    for cle in citees - set(lecons):
        erreurs.append(f'catalogue : la sous-catégorie cite « {cle} », qui n\'a pas de fiche')

    # La règle du site : toute explication se fait en quatre étapes.
    for cle, corps in cartes:
        nb = corps.count('\n        "')
        if nb != 4:
            erreurs.append(f'carte « {cle} » : {nb} étapes au lieu de 4')

    publiees = sum(1 for f in lecons.values() if not f['soon'])
    return publiees, len(lecons) - publiees, len(cartes)


if __name__ == '__main__':
    nb_pages = verifier_pages()
    publiees, a_venir, nb_cartes = verifier_catalogue()

    if erreurs:
        for e in erreurs:
            print('✗', e)
        print(f'\n{len(erreurs)} problème(s).')
        sys.exit(1)

    print(f'OK — {nb_pages} pages, {publiees} leçons publiées, {a_venir} à venir, {nb_cartes} cartes.')
