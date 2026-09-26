/* GENERATED FILE — do not edit by hand.
   Written by tools/fetch_market.py via .github/workflows/update-market.yml.
   Any edit here is overwritten on the next run. Curated fallbacks live in data.js.
   Generated 2026-09-26T02:54Z. */
window.MARKET = {
 "generated": "2026-09-26T02:54Z",
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
    0.64,
    -0.43,
    -0.32,
    -0.39,
    0.37,
    -0.44,
    0.48,
    0.25,
    -0.38,
    -0.78,
    0.64
   ],
   [
    0.88,
    1.0,
    0.84,
    -0.33,
    -0.24,
    -0.35,
    0.32,
    -0.25,
    0.52,
    0.23,
    -0.29,
    -0.65,
    0.56
   ],
   [
    0.64,
    0.84,
    1.0,
    -0.32,
    -0.24,
    -0.41,
    0.36,
    -0.18,
    0.53,
    0.27,
    -0.23,
    -0.6,
    0.51
   ],
   [
    -0.43,
    -0.33,
    -0.32,
    1.0,
    0.81,
    0.17,
    -0.18,
    0.65,
    -0.2,
    -0.15,
    0.22,
    0.29,
    -0.66
   ],
   [
    -0.32,
    -0.24,
    -0.24,
    0.81,
    1.0,
    0.31,
    -0.3,
    0.47,
    -0.26,
    -0.18,
    0.25,
    0.19,
    -0.59
   ],
   [
    -0.39,
    -0.35,
    -0.41,
    0.17,
    0.31,
    1.0,
    -0.57,
    0.21,
    -0.44,
    -0.35,
    0.71,
    0.43,
    -0.37
   ],
   [
    0.37,
    0.32,
    0.36,
    -0.18,
    -0.3,
    -0.57,
    1.0,
    -0.23,
    0.5,
    0.6,
    -0.34,
    -0.41,
    0.4
   ],
   [
    -0.44,
    -0.25,
    -0.18,
    0.65,
    0.47,
    0.21,
    -0.23,
    1.0,
    -0.25,
    -0.18,
    0.21,
    0.44,
    -0.5
   ],
   [
    0.48,
    0.52,
    0.53,
    -0.2,
    -0.26,
    -0.44,
    0.5,
    -0.25,
    1.0,
    0.26,
    -0.27,
    -0.45,
    0.45
   ],
   [
    0.25,
    0.23,
    0.27,
    -0.15,
    -0.18,
    -0.35,
    0.6,
    -0.18,
    0.26,
    1.0,
    -0.24,
    -0.25,
    0.24
   ],
   [
    -0.38,
    -0.29,
    -0.23,
    0.22,
    0.25,
    0.71,
    -0.34,
    0.21,
    -0.27,
    -0.24,
    1.0,
    0.37,
    -0.23
   ],
   [
    -0.78,
    -0.65,
    -0.6,
    0.29,
    0.19,
    0.43,
    -0.41,
    0.44,
    -0.45,
    -0.25,
    0.37,
    1.0,
    -0.59
   ],
   [
    0.64,
    0.56,
    0.51,
    -0.66,
    -0.59,
    -0.37,
    0.4,
    -0.5,
    0.45,
    0.24,
    -0.23,
    -0.59,
    1.0
   ]
  ],
  "asof": "2026-09-18",
  "obs": 60,
  "sources": {
   "S&P 500": "yahoo:^GSPC",
   "Nasdaq 100": "yahoo:^NDX",
   "MSCI EM": "yahoo:EEM",
   "US 10y yield": "fred:DGS10",
   "US 2y yield": "fred:DGS2",
   "DXY": "fred:DTWEXBGS",
   "Gold": "yahoo:GC=F",
   "Brent": "fred:DCOILBRENTEU",
   "Copper": "yahoo:HG=F",
   "Bitcoin": "yahoo:BTC-USD",
   "USDJPY": "fred:DEXJPUS",
   "VIX": "fred:VIXCLS",
   "HY credit": "yahoo:HYG"
  }
 },
 "ytd": {
  "USA": {
   "v": 13.1,
   "asof": "2026-09-25",
   "src": "yahoo:^GSPC"
  },
  "JPN": {
   "v": 31.8,
   "asof": "2026-09-25",
   "src": "yahoo:^N225"
  },
  "IND": {
   "v": -11.4,
   "asof": "2026-09-25",
   "src": "yahoo:^NSEI"
  },
  "DEU": {
   "v": 3.7,
   "asof": "2026-09-25",
   "src": "yahoo:^GDAXI"
  },
  "GBR": {
   "v": 7.7,
   "asof": "2026-09-25",
   "src": "yahoo:^FTSE"
  },
  "FRA": {
   "v": -0.9,
   "asof": "2026-09-25",
   "src": "yahoo:^FCHI"
  },
  "ITA": {
   "v": 15.4,
   "asof": "2026-09-25",
   "src": "yahoo:FTSEMIB.MI"
  },
  "CAN": {
   "v": 12.9,
   "asof": "2026-09-25",
   "src": "yahoo:^GSPTSE"
  },
  "BRA": {
   "v": 13.9,
   "asof": "2026-09-25",
   "src": "yahoo:^BVSP"
  },
  "KOR": {
   "v": 68.0,
   "asof": "2026-09-23",
   "src": "yahoo:^KS11"
  },
  "AUS": {
   "v": -0.6,
   "asof": "2026-09-25",
   "src": "yahoo:^AXJO"
  },
  "ESP": {
   "v": 13.8,
   "asof": "2026-09-25",
   "src": "yahoo:^IBEX"
  },
  "MEX": {
   "v": 1.1,
   "asof": "2026-09-25",
   "src": "yahoo:^MXX"
  },
  "IDN": {
   "v": -27.8,
   "asof": "2026-09-25",
   "src": "yahoo:^JKSE"
  },
  "NLD": {
   "v": 16.9,
   "asof": "2026-09-25",
   "src": "yahoo:^AEX"
  },
  "CHE": {
   "v": 5.1,
   "asof": "2026-09-25",
   "src": "yahoo:^SSMI"
  },
  "TWN": {
   "v": 65.8,
   "asof": "2026-09-24",
   "src": "yahoo:^TWII"
  },
  "TUR": {
   "v": 14.5,
   "asof": "2026-09-25",
   "src": "yahoo:XU100.IS"
  },
  "SGP": {
   "v": 22.9,
   "asof": "2026-09-25",
   "src": "yahoo:^STI"
  },
  "HKG": {
   "v": -4.4,
   "asof": "2026-09-25",
   "src": "yahoo:^HSI"
  },
  "SWE": {
   "v": 14.3,
   "asof": "2026-09-25",
   "src": "yahoo:^OMX"
  },
  "ZAF": {
   "v": -4.5,
   "asof": "2026-09-25",
   "src": "yahoo:^J200.JO"
  }
 },
 "failed": [
  "ARE",
  "CHN",
  "POL",
  "SAU"
 ]
};
