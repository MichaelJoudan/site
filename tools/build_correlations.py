#!/usr/bin/env python3
"""
build_correlations.py — turn your own price history into the site's heat map.

Input : a CSV with a date column and one price column per asset.
        date,S&P 500,Nasdaq 100,Gold,Brent,...
        2026-01-02,4780.2,16890.1,2065.4,78.9,...

Output: a JS snippet you paste over the `matrix` / `assets` block in
        assets/js/data.js.

Usage:
    python3 tools/build_correlations.py prices.csv --window 60
    python3 tools/build_correlations.py prices.csv --window 60 --write ../assets/js/data.js

Notes:
  * Yield and volatility series (US 10y, VIX) should be fed as levels; the
    script differences them rather than taking log returns. List them with
    --levels "US 10y yield,US 2y yield,VIX".
  * Requires pandas: pip install pandas
"""

import argparse
import re
import sys

import pandas as pd


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("csv", help="CSV of prices: date column + one column per asset")
    ap.add_argument("--window", type=int, default=60, help="rolling window in trading days")
    ap.add_argument("--levels", default="", help="comma-separated columns to difference, not log-return")
    ap.add_argument("--write", default="", help="path to data.js — rewrites the HEAT block in place")
    a = ap.parse_args()

    df = pd.read_csv(a.csv, parse_dates=[0], index_col=0).sort_index()
    level_cols = {c.strip() for c in a.levels.split(",") if c.strip()}

    rets = pd.DataFrame(index=df.index)
    for col in df.columns:
        s = pd.to_numeric(df[col], errors="coerce")
        rets[col] = s.diff() if col in level_cols else s.pct_change()

    tail = rets.tail(a.window).dropna(how="all")
    if len(tail) < max(10, a.window // 3):
        print(f"warning: only {len(tail)} usable rows for a {a.window}-day window", file=sys.stderr)

    corr = tail.corr(min_periods=max(5, a.window // 4)).round(2).fillna(0.0)

    assets = list(corr.columns)
    rows = [
        "    [" + ",".join(f"{corr.iloc[i, j]:5.2f}" for j in range(len(assets))) + "]"
        for i in range(len(assets))
    ]
    block = (
        f'  window: "{a.window}-day rolling, daily returns",\n'
        "  assets: [" + ", ".join(f'"{x}"' for x in assets) + "],\n"
        "  matrix: [\n" + ",\n".join(rows) + "\n  ],"
    )

    if not a.write:
        print(block)
        return 0

    src = open(a.write, encoding="utf-8").read()
    pattern = re.compile(r"(window\.HEAT = \{\n).*?(\n  reads:)", re.S)
    if not pattern.search(src):
        print("could not find the HEAT block in", a.write, file=sys.stderr)
        return 1
    open(a.write, "w", encoding="utf-8").write(pattern.sub(r"\1" + block + r"\2", src))
    print(f"updated {a.write} — {len(assets)} assets, {len(tail)} observations")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
