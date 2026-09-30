/* GENERATED FILE — do not edit by hand.
   Written by tools/fetch_market.py via .github/workflows/update-market.yml.
   Any edit here is overwritten on the next run. Curated fallbacks live in data.js.
   Generated 2026-09-30T01:20Z. */
window.MARKET = {
 "generated": "2026-09-30T01:20Z",
 "heat": {
  "window": "60-day rolling, daily returns",
  "assets": [
   "S&P 500",
   "Nasdaq 100",
   "MSCI EM",
   "US 10y yield",
   "US 2y yield",
   "DXY",
   "Gold",
   "Brent",
   "Copper",
   "Bitcoin",
   "USDJPY",
   "VIX",
   "HY credit"
  ],
  "matrix": [
   [
    1.0,
    0.89,
    0.68,
    -0.44,
    -0.3,
    -0.3,
    0.36,
    -0.53,
    0.49,
    0.37,
    -0.27,
    -0.84,
    0.6
   ],
   [
    0.89,
    1.0,
    0.87,
    -0.33,
    -0.19,
    -0.22,
    0.3,
    -0.36,
    0.55,
    0.34,
    -0.18,
    -0.74,
    0.54
   ],
   [
    0.68,
    0.87,
    1.0,
    -0.36,
    -0.21,
    -0.28,
    0.3,
    -0.24,
    0.56,
    0.32,
    -0.2,
    -0.64,
    0.52
   ],
   [
    -0.44,
    -0.33,
    -0.36,
    1.0,
    0.81,
    0.33,
    -0.15,
    0.59,
    -0.2,
    -0.17,
    0.21,
    0.46,
    -0.76
   ],
   [
    -0.3,
    -0.19,
    -0.21,
    0.81,
    1.0,
    0.49,
    -0.23,
    0.38,
    -0.17,
    -0.06,
    0.26,
    0.34,
    -0.63
   ],
   [
    -0.3,
    -0.22,
    -0.28,
    0.33,
    0.49,
    1.0,
    -0.49,
    0.08,
    -0.35,
    -0.3,
    0.62,
    0.34,
    -0.4
   ],
   [
    0.36,
    0.3,
    0.3,
    -0.15,
    -0.23,
    -0.49,
    1.0,
    -0.22,
    0.52,
    0.5,
    -0.22,
    -0.36,
    0.29
   ],
   [
    -0.53,
    -0.36,
    -0.24,
    0.59,
    0.38,
    0.08,
    -0.22,
    1.0,
    -0.31,
    -0.2,
    0.16,
    0.49,
    -0.49
   ],
   [
    0.49,
    0.55,
    0.56,
    -0.2,
    -0.17,
    -0.35,
    0.52,
    -0.31,
    1.0,
    0.32,
    -0.26,
    -0.45,
    0.41
   ],
   [
    0.37,
    0.34,
    0.32,
    -0.17,
    -0.06,
    -0.3,
    0.5,
    -0.2,
    0.32,
    1.0,
    -0.06,
    -0.28,
    0.29
   ],
   [
    -0.27,
    -0.18,
    -0.2,
    0.21,
    0.26,
    0.62,
    -0.22,
    0.16,
    -0.26,
    -0.06,
    1.0,
    0.29,
    -0.23
   ],
   [
    -0.84,
    -0.74,
    -0.64,
    0.46,
    0.34,
    0.34,
    -0.36,
    0.49,
    -0.45,
    -0.28,
    0.29,
    1.0,
    -0.64
   ],
   [
    0.6,
    0.54,
    0.52,
    -0.76,
    -0.63,
    -0.4,
    0.29,
    -0.49,
    0.41,
    0.29,
    -0.23,
    -0.64,
    1.0
   ]
  ],
  "asof": "2026-09-24",
  "obs": 60,
  "sources": {
   "S&P 500": "yahoo:^GSPC",
   "Nasdaq 100": "yahoo:^NDX",
   "MSCI EM": "yahoo:EEM",
   "US 10y yield": "fred:DGS10",
   "US 2y yield": "fred:DGS2",
   "DXY": "yahoo:DX-Y.NYB",
   "Gold": "yahoo:GC=F",
   "Brent": "yahoo:BZ=F",
   "Copper": "yahoo:HG=F",
   "Bitcoin": "yahoo:BTC-USD",
   "USDJPY": "yahoo:JPY=X",
   "VIX": "fred:VIXCLS",
   "HY credit": "yahoo:HYG"
  }
 },
 "ytd": {
  "USA": {
   "v": 12.1,
   "asof": "2026-09-29",
   "src": "yahoo:^GSPC"
  },
  "CHN": {
   "v": -7.1,
   "asof": "2026-09-28",
   "src": "yahoo:510300.SS"
  },
  "JPN": {
   "v": 19.3,
   "asof": "2026-09-30",
   "src": "yahoo:1306.T",
   "proxy": "TOPIX tracker"
  },
  "IND": {
   "v": -12.8,
   "asof": "2026-09-28",
   "src": "yahoo:^NSEI"
  },
  "DEU": {
   "v": 3.6,
   "asof": "2026-09-28",
   "src": "yahoo:^GDAXI"
  },
  "GBR": {
   "v": 7.6,
   "asof": "2026-09-28",
   "src": "yahoo:^FTSE"
  },
  "FRA": {
   "v": -0.9,
   "asof": "2026-09-28",
   "src": "yahoo:^FCHI"
  },
  "ITA": {
   "v": 15.2,
   "asof": "2026-09-28",
   "src": "yahoo:FTSEMIB.MI"
  },
  "CAN": {
   "v": 11.8,
   "asof": "2026-09-29",
   "src": "yahoo:^GSPTSE"
  },
  "BRA": {
   "v": 14.1,
   "asof": "2026-09-29",
   "src": "yahoo:^BVSP"
  },
  "KOR": {
   "v": 64.7,
   "asof": "2026-09-30",
   "src": "yahoo:^KS11"
  },
  "AUS": {
   "v": 0.1,
   "asof": "2026-09-30",
   "src": "yahoo:^AXJO"
  },
  "ESP": {
   "v": 13.2,
   "asof": "2026-09-28",
   "src": "yahoo:^IBEX"
  },
  "MEX": {
   "v": 1.2,
   "asof": "2026-09-29",
   "src": "yahoo:^MXX"
  },
  "IDN": {
   "v": -28.9,
   "asof": "2026-09-28",
   "src": "yahoo:^JKSE"
  },
  "NLD": {
   "v": 17.3,
   "asof": "2026-09-28",
   "src": "yahoo:^AEX"
  },
  "CHE": {
   "v": 5.1,
   "asof": "2026-09-28",
   "src": "yahoo:^SSMI"
  },
  "TWN": {
   "v": 66.5,
   "asof": "2026-09-30",
   "src": "yahoo:^TWII"
  },
  "TUR": {
   "v": 11.8,
   "asof": "2026-09-28",
   "src": "yahoo:XU100.IS"
  },
  "SGP": {
   "v": 23.0,
   "asof": "2026-09-30",
   "src": "yahoo:^STI"
  },
  "HKG": {
   "v": -3.9,
   "asof": "2026-09-28",
   "src": "yahoo:^HSI"
  },
  "SWE": {
   "v": 13.8,
   "asof": "2026-09-28",
   "src": "yahoo:^OMX"
  },
  "ZAF": {
   "v": -6.2,
   "asof": "2026-09-28",
   "src": "yahoo:^J200.JO"
  },
  "ARE": {
   "v": 5.6,
   "asof": "2026-09-28",
   "src": "yahoo:UAE",
   "proxy": "MSCI UAE ETF proxy"
  }
 },
 "failed": [
  "POL",
  "SAU"
 ]
};
