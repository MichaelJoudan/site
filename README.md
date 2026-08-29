# Intelligence Base

A static, single-page markets site: a derivative-strategy shelf, a cross-asset
interaction grid, and an interactive world atlas of market structure.

No framework, no build step, no backend. Open `index.html` and it works.

---

## Deploying

Everything you need is in **Intelligence Base Launch Kit** (the guide published
alongside this). The two-line version:

1. Upload the contents of this folder to a public GitHub repository, with
   `index.html` at the top level.
2. **Settings → Pages → Deploy from a branch → main → / (root)**.

`.nojekyll` must be uploaded or GitHub will skip files starting with `_`.

---

## Files

```
index.html               the whole page (four hash routes)
assets/css/site.css      design tokens + every style
assets/js/data.js        ← ALL CONTENT LIVES HERE
assets/js/world.js       generated country geometry (do not hand-edit)
assets/js/app.js         spring engine, routing, sheet, strategy + event render
assets/js/atlas.js       map projection, colour buckets, pan/zoom, country sheet
assets/js/heat.js        correlation grid
tools/build_correlations.py   CSV of prices → the heat-map matrix
tools/build_preview.py        inline everything into one shareable file
.nojekyll                stops GitHub's Jekyll from eating the assets folder
```

---

## Editing

### Your details
`assets/js/data.js` → `window.META`. Fill in `email`, `linkedin`, `github` and
they appear in the footer; leave them blank and nothing is shown.

### Adding a market
One object in `window.COUNTRIES`, keyed by **ISO-3 code** (the same key the map
geometry uses — `USA`, `DEU`, `KOR`):

```js
NOR: {
  name:"Norway", cur:"NOK", gdp:0.53, growth:1.4, cpi:2.6, rate:4.0,
  unemp:4.1, y10:3.9, mcap:0.36, index:"OBX", ytd:11.2, conf:"medium",
  sectors:{ "Energy":38.0, "Financials":22.0, /* … must sum to ~100 */ },
  top5:[ ["Equinor","EQNR","Energy",72], /* …five entries */ ],
  note:"Optional caveat shown at the bottom of the panel."
}
```

The map colours, the legend, the country chips and the hero stats all update
from that object alone. For a market too small to draw at this map resolution
(Singapore, Hong Kong), add `ll:[longitude, latitude]` and it gets a marker
instead of a shape.

`conf` is `"high" | "medium" | "low"` and shows as a data-quality line in the
panel. Use it honestly — it is the difference between a research page and a
brochure.

### Adding a strategy
One object in `window.STRATEGIES`. `payoff` names a shape drawn by `app.js`;
the available shapes are the keys of `PAYOFFS` near the bottom of that file.
Add a new one by adding an array of `[x, y]` points, `x` from 0 to 100 and
`y` roughly −60 to +30.

### Adding an event
One object at the **top** of `window.EVENTS`. `tone` is `""`, `"watch"` or
`"risk"` and sets the dot colour. Keep the `read` field — the whole point of
the log is the positioning consequence, not the headline.

### Refreshing the correlation grid
The shipped matrix is illustrative seed data. Replace it with your own:

```bash
pip install pandas
python3 tools/build_correlations.py prices.csv --window 60 \
        --levels "US 10y yield,US 2y yield,VIX" \
        --write assets/js/data.js
```

`prices.csv` is a date column plus one price column per asset. Yield and
volatility series are differenced rather than log-returned — list them under
`--levels`.

### Regenerating the map geometry
Only needed if you want more countries or a finer coastline:

```bash
npm install world-atlas
python3 gen_world.py          # writes assets/js/world.js
```

`countries-50m.json` gives a sharper outline at roughly 4× the file size.

---

## Design notes

Motion follows Apple's fluid-interface model: springs rather than fixed
durations, started from the current on-screen value and carrying pointer
velocity through, so a transition can be grabbed and reversed mid-flight.
The sheet drag uses momentum projection (`current + (v/1000)·d/(1−d)`) to
decide dismiss-versus-return, and rubber-bands rather than hard-stopping at
its boundary.

`prefers-reduced-motion`, `prefers-reduced-transparency` and
`prefers-contrast` are all honoured. Colour: one hue light→dark for magnitude,
two hues with a neutral midpoint for polarity; the diverging pair is
red↔teal rather than red↔green so it survives deuteranopia, and every heat
cell carries its number as a fallback.

## Licence

Yours. The country outlines come from Natural Earth via `world-atlas`, which is
public domain.
