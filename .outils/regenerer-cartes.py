#!/usr/bin/env python3
"""Régénère le bloc CARDS de assets/js/data.js à partir de .outils/cartes-ia.py."""
import json, re, importlib.util

spec = importlib.util.spec_from_file_location('c', '.outils/cartes-ia.py')
m = importlib.util.module_from_spec(spec); spec.loader.exec_module(m)
j = lambda s: json.dumps(s, ensure_ascii=False)

def carte(c):
    s = '    {\n      id: %s, terme: %s, domaine: %s,\n      aka: [%s],\n      une: %s,\n      etapes: [\n%s\n      ]' % (
        j(c['id']), j(c['terme']), j(c['dom']), ', '.join(j(a) for a in c['aka']), j(c['une']),
        ',\n'.join('        ' + j(e) for e in c['etapes']))
    if c.get('voir'): s += ',\n      voir: %s' % j(c['voir'])
    if c.get('pas'): s += ',\n      pas: %s' % j(c['pas'])
    return s + '\n    }'

p = 'assets/js/data.js'
d = open(p, encoding='utf-8').read()
debut = d.index('  var CARDS = [\n') + len('  var CARDS = [\n')
fin = d.index('\n  ];', debut)
d = d[:debut] + ',\n'.join(carte(c) for c in m.CARTES) + d[fin:]
open(p, 'w', encoding='utf-8').write(d)
print(len(m.CARTES), 'cartes')
