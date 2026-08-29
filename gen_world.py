import json, pycountry

src = json.load(open('node_modules/world-atlas/countries-110m.json'))
tr = src['transform']; sx, sy = tr['scale']; tx, ty = tr['translate']

def decode(arc):
    x = y = 0; out = []
    for dx, dy in arc:
        x += dx; y += dy
        out.append((x*sx+tx, y*sy+ty))
    return out

arcs = [decode(a) for a in src['arcs']]

def ring(idxs):
    pts = []
    for i in idxs:
        if i < 0:
            seg = arcs[~i][::-1]
        else:
            seg = arcs[i]
        pts.extend(seg[1:] if pts else seg)
    return pts

MANUAL = {'-99': None, '304': 'GRL', '260': 'ATF', '728': 'SSD', '688': 'SRB', '384': 'CIV'}

out = {}
for g in src['objects']['countries']['geometries']:
    nid = str(g.get('id','-99')); name = g['properties']['name']
    iso = MANUAL.get(nid, 'MISS')
    if iso == 'MISS':
        try:
            iso = pycountry.countries.get(numeric=nid.zfill(3)).alpha_3
        except Exception:
            iso = None
    if not iso:
        iso = 'X' + str(nid)
    if iso == 'ATA':          # Antarctica: clamped latitudes smear into a band
        continue
    polys = []
    raw = g['arcs'] if g['type'] == 'MultiPolygon' else [g['arcs']]
    for poly in raw:
        rings = []
        for r in poly:
            pts = ring(r)
            if len(pts) < 4:
                continue
            # Split any ring that crosses the antimeridian, or it draws a
            # full-width horizontal smear across the map (Russia, Fiji).
            seg = [pts[0]]
            for a, b in zip(pts, pts[1:]):
                if abs(b[0] - a[0]) > 180:
                    if len(seg) >= 4:
                        rings.append([[round(q[0], 2), round(q[1], 2)] for q in seg])
                    seg = [b]
                else:
                    seg.append(b)
            if len(seg) >= 4:
                rings.append([[round(q[0], 2), round(q[1], 2)] for q in seg])
        if rings:
            polys.append(rings)
    if polys:
        out[iso] = {'n': name, 'p': polys}

payload = json.dumps(out, separators=(',', ':'))
open('assets/js/world.js', 'w').write('window.WORLD_GEO=' + payload + ';\n')
print('countries:', len(out), 'bytes:', len(payload))
for k in ['USA','CHN','JPN','IND','DEU','GBR','FRA','ITA','CAN','BRA','KOR','AUS','ESP','MEX','IDN','NLD','SAU','CHE','TWN','TUR','SGP','HKG','SWE','POL','ZAF','ARE']:
    if k not in out: print('MISSING', k)
