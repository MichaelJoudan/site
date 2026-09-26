# Jay & Anna

One address, two halves. The site opens on a **gate** — a full-height chooser
with a door for each person — and the rest of the site sits behind it.

```
#/            the gate
#/base        ─┐
#/strategies   │ Jay: strategy shelf, cross-asset grid, world atlas
#/signals      │
#/atlas       ─┘
#/anna         Anna: a holding page, waiting on her
```

Frost white throughout: a soft colour wash with real translucent glass over it.
One committed light theme — there is no dark mode, by choice.

No framework, no build step, no backend. Open `index.html` and it works.

---

## Deploying

Everything you need is in **Intelligence Base Launch Kit** (the guide published
alongside this). The two-line version:

1. Upload the contents of this folder to a public GitHub repository, with
   `index.html` at the top level.
2. **Settings → Pages → Deploy from a branch → main → / (root)**.

`.nojekyll` is included but **optional for this site** — it disables GitHub's
Jekyll processing, which only matters for files or folders whose names start
with `_`, or for content containing Liquid tags (`{{`, `{%`). This site has
neither. Add it if you later introduce either.

---

## Files

```
.github/workflows/update-market.yml   the daily data job
index.html               the whole page (four hash routes)
assets/css/site.css      design tokens + every style
assets/js/data.js        ← ALL CONTENT LIVES HERE (English)
assets/js/i18n.js        ← the Chinese layer (overrides only)
assets/js/market.js      GENERATED daily by the workflow — never edit
assets/js/world.js       generated country geometry (do not hand-edit)
assets/js/app.js         spring engine, routing, sheet, strategy + event render
assets/js/atlas.js       map projection, colour buckets, pan/zoom, country sheet
assets/js/heat.js        correlation grid
tools/fetch_market.py         the daily job: fetch → correlate → write market.js
tools/build_correlations.py   manual alternative: your own CSV → the matrix
tools/build_preview.py        inline everything into one shareable file
.nojekyll                stops GitHub's Jekyll from eating the assets folder
```

---

## Editing

### Your details
`assets/js/data.js` → `window.META`. Fill in `email`, `linkedin`, `github` and
they appear in the footer; leave them blank and nothing is shown.

### The gate
`window.GATE` is the headline and sub. `window.PEOPLE` is the two doors —
name, initials, role, summary, chips, and the route the door opens.
`ready: false` gives a door the quieter, reserved treatment (no chips, three
placeholder bars, a muted call to action). Flip Anna's to `true` and add
`chips` once her side has real content.

### Anna's page
`window.ANNA` — an eyebrow, a title, a lede, and any number of
`[heading, body]` slots. Change the words, refresh, done. It is deliberately
a placeholder; when it outgrows one, have the page built properly.

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

### Chinese
`assets/js/i18n.js` is an **override map**, not a second copy of the site.
`data.js` stays the English source of truth and is never touched by
translation. Anything missing from `i18n.js` falls back to English rather than
going blank — so a market or strategy you add to `data.js` keeps working, it
just shows in English until you add its line here.

| To translate | Add to |
|---|---|
| a country | `zh.countries.XXX` — same ISO-3 key as `data.js` |
| a sector | `zh.sectors["Sector Name"]` |
| a strategy | `zh.strategies.<id>` — the `id` field from `data.js` |
| an event | `zh.events[n]` — `n` is its position in `window.EVENTS` |
| a heat-map asset | `zh.heat.assets` and `zh.heat.short` |
| interface text | `zh.ui.<key>` — the key is the `data-i18n="..."` in `index.html` |

Money is converted, not relabelled: `$253bn` becomes `2,530亿美元` and
`$8.70tn` becomes `8.70万亿美元` (`window.money` / `window.moneyTn` in
`i18n.js`). Company names, tickers and index names stay Latin — that is
normal in Chinese financial writing and safer than guessing.

The chosen language is remembered per browser. On a first visit the site
follows the browser's own locale, but only for an explicit Chinese one.

### Live data

`market.js` is an **overlay**, not a replacement. `data.js` stays the curated
source of truth; anything the job fetches successfully sits on top of it.
The site works identically with `market.js` missing, empty, or `null`.

```
GitHub Actions (weekdays 22:24 UTC ≈ 06:24 SGT)
  → tools/fetch_market.py            standard library only, no pip step
  → fetches daily closes, correlates → assets/js/market.js
  → commits → Pages redeploys
```

**What it refreshes:** the 13×13 correlation matrix and the index YTD figure
for as many of the 26 markets as have a working ticker. Market cap, sector
weights and the top-5 companies have no free source and stay curated.

**Three states, per number.** `app.js` computes an age from each `asof` date:

| State | Means | Shown as |
|---|---|---|
| live | fetched, ≤ 5 days old | green dot, "Updated 25 Sept" |
| stale | fetched, but the job stopped | amber "20 days old", value greyed out |
| curated | never fetched, or no ticker | "Snapshot · August 2026" |

Stale values are dimmed rather than hidden — you can still read them, they
just stop looking authoritative. Change the threshold via `STALE_DAYS` in
`app.js`.

**Sources**, tried in order per series: FRED (keyless CSV, authoritative for
yields, FX and the dollar index), Stooq (keyless CSV, broad index coverage),
Yahoo's chart endpoint (widest coverage, least stable, last resort). A series
that fails everywhere is omitted from `market.js` entirely and falls back to
curated. Partial data is the normal case, not an error.

**Fixing a ticker.** The script prints a per-symbol OK / miss / FAIL table in
the Actions log. If a market never resolves, edit its entry in `INDEX_SERIES`
or `HEAT_SERIES` at the top of `tools/fetch_market.py` — not `data.js`.

**Run it by hand first:** Actions tab → *Update market data* → **Run workflow**.
Read the log before trusting the schedule.

    python3 tools/fetch_market.py --check    # same report locally, writes nothing

**One repository setting it needs:** Settings → Actions → General → Workflow
permissions must be **Read and write**. Without it the job runs, fetches
correctly, and fails on the final `git push`.

**The commentary does not auto-update.** `HEAT.reads` — the four "what the grid
is saying" paragraphs — are your words in `data.js`. When the numbers move
enough to contradict them, rewrite them. Nothing will warn you.

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
