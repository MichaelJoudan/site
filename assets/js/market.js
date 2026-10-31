/* GENERATED FILE — do not edit by hand.
   Written by tools/fetch_market.py via .github/workflows/update-market.yml.
   Any edit here is overwritten on the next run. Curated fallbacks live in data.js.
   Generated 2026-10-31T01:38Z. */
window.MARKET = {
 "generated": "2026-10-31T01:38Z",
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
    0.88,
    0.67,
    -0.21,
    -0.12,
    -0.22,
    0.36,
    -0.58,
    0.48,
    0.37,
    -0.22,
    -0.79,
    0.52
   ],
   [
    0.88,
    1.0,
    0.85,
    -0.01,
    0.02,
    -0.11,
    0.31,
    -0.41,
    0.57,
    0.4,
    -0.14,
    -0.7,
    0.43
   ],
   [
    0.67,
    0.85,
    1.0,
    0.01,
    0.0,
    -0.23,
    0.3,
    -0.27,
    0.63,
    0.39,
    -0.2,
    -0.59,
    0.35
   ],
   [
    -0.21,
    -0.01,
    0.01,
    1.0,
    0.79,
    0.33,
    -0.21,
    0.41,
    -0.07,
    -0.01,
    0.24,
    0.17,
    -0.61
   ],
   [
    -0.12,
    0.02,
    0.0,
    0.79,
    1.0,
    0.4,
    -0.24,
    0.26,
    -0.04,
    0.12,
    0.26,
    0.09,
    -0.45
   ],
   [
    -0.22,
    -0.11,
    -0.23,
    0.33,
    0.4,
    1.0,
    -0.38,
    -0.02,
    -0.13,
    -0.16,
    0.57,
    0.27,
    -0.41
   ],
   [
    0.36,
    0.31,
    0.3,
    -0.21,
    -0.24,
    -0.38,
    1.0,
    -0.09,
    0.37,
    0.46,
    -0.08,
    -0.4,
    0.41
   ],
   [
    -0.58,
    -0.41,
    -0.27,
    0.41,
    0.26,
    -0.02,
    -0.09,
    1.0,
    -0.35,
    -0.18,
    0.17,
    0.47,
    -0.42
   ],
   [
    0.48,
    0.57,
    0.63,
    -0.07,
    -0.04,
    -0.13,
    0.37,
    -0.35,
    1.0,
    0.29,
    -0.14,
    -0.49,
    0.43
   ],
   [
    0.37,
    0.4,
    0.39,
    -0.01,
    0.12,
    -0.16,
    0.46,
    -0.18,
    0.29,
    1.0,
    0.05,
    -0.28,
    0.22
   ],
   [
    -0.22,
    -0.14,
    -0.2,
    0.24,
    0.26,
    0.57,
    -0.08,
    0.17,
    -0.14,
    0.05,
    1.0,
    0.24,
    -0.15
   ],
   [
    -0.79,
    -0.7,
    -0.59,
    0.17,
    0.09,
    0.27,
    -0.4,
    0.47,
    -0.49,
    -0.28,
    0.24,
    1.0,
    -0.54
   ],
   [
    0.52,
    0.43,
    0.35,
    -0.61,
    -0.45,
    -0.41,
    0.41,
    -0.42,
    0.43,
    0.22,
    -0.15,
    -0.54,
    1.0
   ]
  ],
  "asof": "2026-10-29",
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
   "v": 10.7,
   "asof": "2026-10-30",
   "src": "yahoo:^GSPC"
  },
  "CHN": {
   "v": -13.5,
   "asof": "2026-10-29",
   "src": "yahoo:510300.SS"
  },
  "JPN": {
   "v": 16.3,
   "asof": "2026-10-30",
   "src": "yahoo:1306.T",
   "proxy": "TOPIX tracker"
  },
  "IND": {
   "v": -11.8,
   "asof": "2026-10-30",
   "src": "yahoo:^NSEI"
  },
  "DEU": {
   "v": 5.4,
   "asof": "2026-10-30",
   "src": "yahoo:^GDAXI"
  },
  "GBR": {
   "v": 8.0,
   "asof": "2026-10-30",
   "src": "yahoo:^FTSE"
  },
  "FRA": {
   "v": -2.2,
   "asof": "2026-10-30",
   "src": "yahoo:^FCHI"
  },
  "ITA": {
   "v": 10.1,
   "asof": "2026-10-30",
   "src": "yahoo:FTSEMIB.MI"
  },
  "CAN": {
   "v": 12.3,
   "asof": "2026-10-30",
   "src": "yahoo:^GSPTSE"
  },
  "BRA": {
   "v": 4.2,
   "asof": "2026-10-30",
   "src": "yahoo:^BVSP"
  },
  "KOR": {
   "v": 36.0,
   "asof": "2026-10-30",
   "src": "yahoo:^KS11"
  },
  "AUS": {
   "v": 2.2,
   "asof": "2026-10-30",
   "src": "yahoo:^AXJO"
  },
  "ESP": {
   "v": 7.8,
   "asof": "2026-10-30",
   "src": "yahoo:^IBEX"
  },
  "MEX": {
   "v": 8.5,
   "asof": "2026-10-30",
   "src": "yahoo:^MXX"
  },
  "IDN": {
   "v": -41.5,
   "asof": "2026-10-30",
   "src": "yahoo:^JKSE"
  },
  "NLD": {
   "v": 19.3,
   "asof": "2026-10-30",
   "src": "yahoo:^AEX"
  },
  "CHE": {
   "v": 11.6,
   "asof": "2026-10-30",
   "src": "yahoo:^SSMI"
  },
  "TWN": {
   "v": 56.1,
   "asof": "2026-10-30",
   "src": "yahoo:^TWII"
  },
  "TUR": {
   "v": -4.5,
   "asof": "2026-10-30",
   "src": "yahoo:XU100.IS"
  },
  "SGP": {
   "v": 15.7,
   "asof": "2026-10-30",
   "src": "yahoo:^STI"
  },
  "HKG": {
   "v": -9.1,
   "asof": "2026-10-30",
   "src": "yahoo:^HSI"
  },
  "SWE": {
   "v": 13.5,
   "asof": "2026-10-30",
   "src": "yahoo:^OMX"
  },
  "ZAF": {
   "v": -7.9,
   "asof": "2026-10-30",
   "src": "yahoo:^J200.JO"
  },
  "ARE": {
   "v": -0.6,
   "asof": "2026-10-30",
   "src": "yahoo:UAE",
   "proxy": "MSCI UAE ETF proxy"
  }
 },
 "failed": [
  "POL",
  "SAU"
 ]
};
