#!/usr/bin/env python3
"""
fetch_market.py — refresh the live half of the site.

Run by .github/workflows/update-market.yml every weekday after the US close.
Writes assets/js/market.js, which the site loads *before* app.js and treats as
an overlay on top of the curated figures in data.js.

WHAT IT PRODUCES
    window.MARKET = {
      generated: "2026-09-26T22:24Z",
      heat: { window: "...", assets: [...], matrix: [[...]], asof: "2026-09-25",
              obs: 60, sources: {...} },
      ytd:  { "USA": {"v": 12.9, "asof": "2026-09-25", "src": "stooq:^spx"}, ... },
      failed: ["MEX", "SAU"]
    }

DESIGN RULES
  * No third-party packages. Standard library only, so the workflow has no
    install step and nothing to break on a dependency bump.
  * Every series has an ordered list of sources and falls through on failure.
  * A series that fails everywhere is simply ABSENT from the output. The site
    then falls back to the curated value in data.js and marks it stale rather
    than showing a gap or a zero. Partial data is normal, not an error.
  * Yields and VIX are DIFFERENCED (they are levels); everything else uses
    percentage returns. Correlating the level of a yield against the price of
    an equity index is the classic way to get a meaningless number.

USAGE
    python3 tools/fetch_market.py --out assets/js/market.js
    python3 tools/fetch_market.py --check          # print a source report, write nothing
"""

from __future__ import annotations

import argparse
import csv
import io
import json
import math
import sys
import urllib.error
import urllib.parse
import urllib.request
from datetime import date, datetime, timedelta, timezone

UA = "Mozilla/5.0 (compatible; jayandanna-site/1.0; +https://jayandanna.com)"
TIMEOUT = 25
WINDOW = 60            # trading days in the rolling correlation window
LOOKBACK_DAYS = 500    # enough history for a YTD base and the window

# ---------------------------------------------------------------------------
# Sources. Each entry is (provider, symbol), tried in order until one returns.
#
# fred  — St. Louis Fed CSV. Keyless, authoritative, clean terms. Best choice
#         for yields, FX and the dollar index.
# stooq — keyless CSV, broad index coverage.
# yahoo — unofficial chart endpoint. Widest coverage, least stable; last resort.
# ---------------------------------------------------------------------------

HEAT_SERIES = [
    # (display name as it appears in data.js, kind, [(provider, symbol), ...])
    ("S&P 500",      "price", [("stooq", "^spx"), ("yahoo", "^GSPC")]),
    ("Nasdaq 100",   "price", [("stooq", "^ndq"), ("yahoo", "^NDX")]),
    ("MSCI EM",      "price", [("stooq", "eem.us"), ("yahoo", "EEM")]),
    ("US 10y yield", "level", [("fred", "DGS10"), ("yahoo", "^TNX")]),
    ("US 2y yield",  "level", [("fred", "DGS2"), ("stooq", "2usy.b")]),
    ("DXY",          "price", [("yahoo", "DX-Y.NYB"), ("fred", "DTWEXBGS")]),
    ("Gold",         "price", [("stooq", "xauusd"), ("yahoo", "GC=F")]),
    ("Brent",        "price", [("yahoo", "BZ=F"), ("fred", "DCOILBRENTEU")]),
    ("Copper",       "price", [("stooq", "hg.f"), ("yahoo", "HG=F")]),
    ("Bitcoin",      "price", [("stooq", "btcusd"), ("yahoo", "BTC-USD")]),
    ("USDJPY",       "price", [("yahoo", "JPY=X"), ("fred", "DEXJPUS")]),
    ("VIX",          "level", [("fred", "VIXCLS"), ("stooq", "^vix"), ("yahoo", "^VIX")]),
    ("HY credit",    "price", [("stooq", "hyg.us"), ("yahoo", "HYG")]),
]

# ISO-3 → the benchmark named in data.js. Tickers are best-effort; anything that
# fails is reported and left curated. Fix a ticker here, not in data.js.
INDEX_SERIES = {
    "USA": [("stooq", "^spx"), ("yahoo", "^GSPC")],
    "CHN": [("yahoo", "510300.SS"), ("yahoo", "000300.SS"),
            ("yahoo", "ASHR", "USD ETF proxy"), ("yahoo", "000001.SS", "Shanghai Composite")],
    "JPN": [("yahoo", "1306.T", "TOPIX tracker"), ("yahoo", "^N225", "Nikkei 225")],
    "IND": [("yahoo", "^NSEI"), ("stooq", "^nsei")],
    "DEU": [("stooq", "^dax"), ("yahoo", "^GDAXI")],
    "GBR": [("stooq", "^ukx"), ("yahoo", "^FTSE")],
    "FRA": [("stooq", "^cac"), ("yahoo", "^FCHI")],
    "ITA": [("yahoo", "FTSEMIB.MI"), ("stooq", "^fmib")],
    "CAN": [("yahoo", "^GSPTSE"), ("stooq", "^tsx")],
    "BRA": [("yahoo", "^BVSP"), ("stooq", "^bvp")],
    "KOR": [("yahoo", "^KS11"), ("stooq", "^kospi")],
    "AUS": [("yahoo", "^AXJO"), ("stooq", "^axjo")],
    "ESP": [("yahoo", "^IBEX"), ("stooq", "^ibex")],
    "MEX": [("yahoo", "^MXX"), ("stooq", "^mex")],
    "IDN": [("yahoo", "^JKSE"), ("stooq", "^jci")],
    "NLD": [("yahoo", "^AEX"), ("stooq", "^aex")],
    "SAU": [("yahoo", "^TASI.SR"), ("yahoo", "KSA", "MSCI Saudi ETF proxy")],
    "CHE": [("yahoo", "^SSMI"), ("stooq", "^smi")],
    "TWN": [("yahoo", "^TWII"), ("stooq", "^twse")],
    "TUR": [("yahoo", "XU100.IS"), ("stooq", "^xu100")],
    "SGP": [("yahoo", "^STI"), ("stooq", "^sti")],
    "HKG": [("yahoo", "^HSI"), ("stooq", "^hsi")],
    "SWE": [("yahoo", "^OMX"), ("stooq", "^omxs30")],
    "POL": [("yahoo", "WIG20.WA"), ("yahoo", "EPOL", "USD ETF proxy — includes PLN move")],
    "ZAF": [("yahoo", "^J200.JO")],
    "ARE": [("yahoo", "UAE", "MSCI UAE ETF proxy"), ("yahoo", "^ADI")],
}


# ---------------------------------------------------------------------------
# Fetching
# ---------------------------------------------------------------------------

def _get(url: str) -> bytes:
    req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept": "*/*"})
    with urllib.request.urlopen(req, timeout=TIMEOUT) as r:
        return r.read()


def from_stooq(symbol: str) -> dict[date, float]:
    d1 = (date.today() - timedelta(days=LOOKBACK_DAYS)).strftime("%Y%m%d")
    d2 = date.today().strftime("%Y%m%d")
    url = f"https://stooq.com/q/d/l/?s={urllib.parse.quote(symbol)}&d1={d1}&d2={d2}&i=d"
    text = _get(url).decode("utf-8", "replace")
    if "Date" not in text.split("\n", 1)[0]:
        raise ValueError("no CSV header — symbol probably unknown")
    out: dict[date, float] = {}
    for row in csv.DictReader(io.StringIO(text)):
        try:
            out[date.fromisoformat(row["Date"])] = float(row["Close"])
        except (ValueError, KeyError, TypeError):
            continue
    if not out:
        raise ValueError("empty series")
    return out


def from_fred(series_id: str) -> dict[date, float]:
    cosd = (date.today() - timedelta(days=LOOKBACK_DAYS)).isoformat()
    url = f"https://fred.stlouisfed.org/graph/fredgraph.csv?id={series_id}&cosd={cosd}"
    text = _get(url).decode("utf-8", "replace")
    rdr = csv.reader(io.StringIO(text))
    header = next(rdr, None)
    if not header or len(header) < 2:
        raise ValueError("unexpected FRED response")
    out: dict[date, float] = {}
    for row in rdr:
        if len(row) < 2 or row[1] in (".", ""):
            continue                                   # FRED marks holidays "."
        try:
            out[date.fromisoformat(row[0])] = float(row[1])
        except ValueError:
            continue
    if not out:
        raise ValueError("empty series")
    return out


def from_yahoo(symbol: str) -> dict[date, float]:
    url = ("https://query1.finance.yahoo.com/v8/finance/chart/"
           f"{urllib.parse.quote(symbol)}?range=2y&interval=1d")
    payload = json.loads(_get(url))
    result = (payload.get("chart") or {}).get("result") or []
    if not result:
        raise ValueError("no result block")
    r = result[0]
    stamps = r.get("timestamp") or []
    closes = ((r.get("indicators") or {}).get("quote") or [{}])[0].get("close") or []
    out: dict[date, float] = {}
    for ts, c in zip(stamps, closes):
        if c is None:
            continue
        out[datetime.fromtimestamp(ts, timezone.utc).date()] = float(c)
    if not out:
        raise ValueError("empty series")
    return out


FETCHERS = {"stooq": from_stooq, "fred": from_fred, "yahoo": from_yahoo}


def fetch(sources, label: str, log: list[str]):
    """Try each source in order.

    A source may carry a third element: a note saying the instrument is not the
    index data.js names (an ETF, a different benchmark). That note travels all
    the way to the page, so a substituted number is never shown as if it were
    the real thing.

    Returns (series, "provider:symbol", note_or_None).
    """
    for entry in sources:
        provider, symbol = entry[0], entry[1]
        note = entry[2] if len(entry) > 2 else None
        try:
            series = FETCHERS[provider](symbol)
            log.append(f"  OK    {label:<14} {provider}:{symbol}"
                       f"{'  [' + note + ']' if note else ''}  ({len(series)} obs, "
                       f"latest {max(series)})")
            return series, f"{provider}:{symbol}", note
        except (urllib.error.URLError, urllib.error.HTTPError, ValueError,
                KeyError, TypeError, json.JSONDecodeError, OSError) as e:
            log.append(f"  miss  {label:<14} {provider}:{symbol}  — {type(e).__name__}: {e}")
    log.append(f"  FAIL  {label:<14} no source returned data")
    return None, None, None


# ---------------------------------------------------------------------------
# Maths
# ---------------------------------------------------------------------------

def pearson(xs: list[float], ys: list[float]) -> float | None:
    n = len(xs)
    if n < 10:
        return None
    mx, my = sum(xs) / n, sum(ys) / n
    sxy = sum((a - mx) * (b - my) for a, b in zip(xs, ys))
    sxx = sum((a - mx) ** 2 for a in xs)
    syy = sum((b - my) ** 2 for b in ys)
    if sxx <= 0 or syy <= 0:
        return None
    return sxy / math.sqrt(sxx * syy)


def build_matrix(series: dict[str, dict[date, float]], kinds: dict[str, str]):
    """Align on dates every series shares, then correlate daily changes."""
    common = None
    for s in series.values():
        common = set(s) if common is None else (common & set(s))
    days = sorted(common or [])[-(WINDOW + 1):]
    if len(days) < 12:
        raise ValueError(f"only {len(days)} overlapping dates — not enough to correlate")

    changes: dict[str, list[float]] = {}
    for name, s in series.items():
        vals = [s[d] for d in days]
        if kinds[name] == "level":
            changes[name] = [b - a for a, b in zip(vals, vals[1:])]
        else:
            changes[name] = [
                (b / a - 1) if a else 0.0 for a, b in zip(vals, vals[1:])
            ]

    names = list(series)
    matrix = []
    for a in names:
        row = []
        for b in names:
            if a == b:
                row.append(1.0)
            else:
                r = pearson(changes[a], changes[b])
                row.append(round(r, 2) if r is not None else 0.0)
        matrix.append(row)
    return names, matrix, days[-1], len(days) - 1


def ytd_percent(s: dict[date, float]) -> tuple[float, date] | None:
    """Last close against the final close of the previous calendar year."""
    if not s:
        return None
    last_day = max(s)
    base_days = [d for d in s if d.year < last_day.year]
    if not base_days:
        return None
    base = s[max(base_days)]
    if not base:
        return None
    return round((s[last_day] / base - 1) * 100, 1), last_day


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--out", default="assets/js/market.js")
    ap.add_argument("--check", action="store_true", help="report sources, write nothing")
    args = ap.parse_args()

    log: list[str] = []
    failed: list[str] = []

    print("Cross-asset series")
    heat_series: dict[str, dict[date, float]] = {}
    heat_kinds: dict[str, str] = {}
    heat_src: dict[str, str] = {}
    for name, kind, sources in HEAT_SERIES:
        log.clear()
        s, src, _ = fetch(sources, name, log)
        print("\n".join(log))
        if s:
            heat_series[name], heat_kinds[name], heat_src[name] = s, kind, src
        else:
            failed.append(name)

    heat_block = None
    if len(heat_series) >= 4:
        try:
            names, matrix, asof, obs = build_matrix(heat_series, heat_kinds)
            heat_block = {
                "window": f"{obs}-day rolling, daily returns",
                "assets": names,
                "matrix": matrix,
                "asof": asof.isoformat(),
                "obs": obs,
                "sources": heat_src,
            }
            lag = (date.today() - asof).days
            print(f"\nMatrix: {len(names)} assets, {obs} observations, as of {asof} "
                  f"({lag}d behind today — set by the slowest series)")
            if lag > 4:
                slowest = sorted(((max(v), k) for k, v in heat_series.items()))[:3]
                print("  Slowest series holding the window back: "
                      + ", ".join(f"{k} (to {d})" for d, k in slowest))
        except ValueError as e:
            print(f"\nMatrix skipped — {e}")
            failed.append("correlation matrix")
    else:
        print(f"\nMatrix skipped — only {len(heat_series)} series available")
        failed.append("correlation matrix")

    print("\nIndex year-to-date")
    ytd: dict[str, dict] = {}
    for iso, sources in INDEX_SERIES.items():
        log.clear()
        s, src, note = fetch(sources, iso, log)
        print("\n".join(log))
        if not s:
            failed.append(iso)
            continue
        r = ytd_percent(s)
        if r is None:
            print(f"  FAIL  {iso:<14} no previous-year close to measure from")
            failed.append(iso)
            continue
        v, asof = r
        ytd[iso] = {"v": v, "asof": asof.isoformat(), "src": src}
        if note:
            ytd[iso]["proxy"] = note

    payload = {
        "generated": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%MZ"),
        "heat": heat_block,
        "ytd": ytd,
        "failed": sorted(failed),
    }

    print(f"\n{'='*64}")
    print(f"  matrix      : {'yes' if heat_block else 'NO'}")
    print(f"  ytd markets : {len(ytd)} of {len(INDEX_SERIES)}")
    print(f"  failed      : {', '.join(payload['failed']) or 'none'}")
    print(f"{'='*64}")

    if args.check:
        print("\n--check: nothing written.")
        return 0

    if not heat_block and not ytd:
        print("\nNothing usable fetched — leaving the existing file untouched.")
        return 1                                   # fail the job loudly, keep the site honest

    banner = (
        "/* GENERATED FILE — do not edit by hand.\n"
        "   Written by tools/fetch_market.py via .github/workflows/update-market.yml.\n"
        "   Any edit here is overwritten on the next run. Curated fallbacks live in data.js.\n"
        f"   Generated {payload['generated']}. */\n"
    )
    with open(args.out, "w", encoding="utf-8") as f:
        f.write(banner + "window.MARKET = " + json.dumps(payload, indent=1) + ";\n")
    print(f"\nWrote {args.out}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
