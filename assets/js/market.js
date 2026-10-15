/* GENERATED FILE — do not edit by hand.
   Written by tools/fetch_market.py via .github/workflows/update-market.yml.
   Any edit here is overwritten on the next run. Curated fallbacks live in data.js.
   Generated 2026-10-15T00:34Z. */
window.MARKET = {
 "generated": "2026-10-15T00:34Z",
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
    0.86,
    0.61,
    -0.41,
    -0.26,
    -0.27,
    0.32,
    -0.58,
    0.49,
    0.33,
    -0.27,
    -0.78,
    0.55
   ],
   [
    0.86,
    1.0,
    0.83,
    -0.29,
    -0.2,
    -0.2,
    0.26,
    -0.41,
    0.54,
    0.31,
    -0.19,
    -0.66,
    0.47
   ],
   [
    0.61,
    0.83,
    1.0,
    -0.28,
    -0.22,
    -0.31,
    0.29,
    -0.27,
    0.57,
    0.33,
    -0.24,
    -0.53,
    0.43
   ],
   [
    -0.41,
    -0.29,
    -0.28,
    1.0,
    0.8,
    0.36,
    -0.39,
    0.53,
    -0.31,
    -0.21,
    0.18,
    0.4,
    -0.68
   ],
   [
    -0.26,
    -0.2,
    -0.22,
    0.8,
    1.0,
    0.43,
    -0.43,
    0.38,
    -0.24,
    -0.06,
    0.22,
    0.3,
    -0.52
   ],
   [
    -0.27,
    -0.2,
    -0.31,
    0.36,
    0.43,
    1.0,
    -0.41,
    0.04,
    -0.24,
    -0.22,
    0.6,
    0.36,
    -0.5
   ],
   [
    0.32,
    0.26,
    0.29,
    -0.39,
    -0.43,
    -0.41,
    1.0,
    -0.18,
    0.38,
    0.48,
    -0.15,
    -0.41,
    0.43
   ],
   [
    -0.58,
    -0.41,
    -0.27,
    0.53,
    0.38,
    0.04,
    -0.18,
    1.0,
    -0.35,
    -0.2,
    0.19,
    0.51,
    -0.44
   ],
   [
    0.49,
    0.54,
    0.57,
    -0.31,
    -0.24,
    -0.24,
    0.38,
    -0.35,
    1.0,
    0.27,
    -0.22,
    -0.5,
    0.53
   ],
   [
    0.33,
    0.31,
    0.33,
    -0.21,
    -0.06,
    -0.22,
    0.48,
    -0.2,
    0.27,
    1.0,
    -0.01,
    -0.24,
    0.28
   ],
   [
    -0.27,
    -0.19,
    -0.24,
    0.18,
    0.22,
    0.6,
    -0.15,
    0.19,
    -0.22,
    -0.01,
    1.0,
    0.33,
    -0.19
   ],
   [
    -0.78,
    -0.66,
    -0.53,
    0.4,
    0.3,
    0.36,
    -0.41,
    0.51,
    -0.5,
    -0.24,
    0.33,
    1.0,
    -0.58
   ],
   [
    0.55,
    0.47,
    0.43,
    -0.68,
    -0.52,
    -0.5,
    0.43,
    -0.44,
    0.53,
    0.28,
    -0.19,
    -0.58,
    1.0
   ]
  ],
  "asof": "2026-10-13",
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
   "v": 12.8,
   "asof": "2026-10-14",
   "src": "yahoo:^GSPC"
  },
  "CHN": {
   "v": -8.6,
   "asof": "2026-10-13",
   "src": "yahoo:510300.SS"
  },
  "JPN": {
   "v": 18.1,
   "asof": "2026-10-15",
   "src": "yahoo:1306.T",
   "proxy": "TOPIX tracker"
  },
  "IND": {
   "v": -13.4,
   "asof": "2026-10-14",
   "src": "yahoo:^NSEI"
  },
  "DEU": {
   "v": 3.3,
   "asof": "2026-10-14",
   "src": "yahoo:^GDAXI"
  },
  "GBR": {
   "v": 8.0,
   "asof": "2026-10-14",
   "src": "yahoo:^FTSE"
  },
  "FRA": {
   "v": -3.4,
   "asof": "2026-10-14",
   "src": "yahoo:^FCHI"
  },
  "ITA": {
   "v": 10.7,
   "asof": "2026-10-14",
   "src": "yahoo:FTSEMIB.MI"
  },
  "CAN": {
   "v": 12.2,
   "asof": "2026-10-14",
   "src": "yahoo:^GSPTSE"
  },
  "BRA": {
   "v": 28.2,
   "asof": "2026-10-14",
   "src": "yahoo:^BVSP"
  },
  "KOR": {
   "v": 34.8,
   "asof": "2026-10-15",
   "src": "yahoo:^KS11"
  },
  "AUS": {
   "v": -0.6,
   "asof": "2026-10-15",
   "src": "yahoo:^AXJO"
  },
  "ESP": {
   "v": 11.1,
   "asof": "2026-10-14",
   "src": "yahoo:^IBEX"
  },
  "MEX": {
   "v": 3.9,
   "asof": "2026-10-14",
   "src": "yahoo:^MXX"
  },
  "IDN": {
   "v": -31.3,
   "asof": "2026-10-14",
   "src": "yahoo:^JKSE"
  },
  "NLD": {
   "v": 19.5,
   "asof": "2026-10-14",
   "src": "yahoo:^AEX"
  },
  "CHE": {
   "v": 6.5,
   "asof": "2026-10-14",
   "src": "yahoo:^SSMI"
  },
  "TWN": {
   "v": 67.9,
   "asof": "2026-10-14",
   "src": "yahoo:^TWII"
  },
  "TUR": {
   "v": 7.6,
   "asof": "2026-10-14",
   "src": "yahoo:XU100.IS"
  },
  "SGP": {
   "v": 16.7,
   "asof": "2026-10-14",
   "src": "yahoo:^STI"
  },
  "HKG": {
   "v": -5.1,
   "asof": "2026-10-14",
   "src": "yahoo:^HSI"
  },
  "SWE": {
   "v": 13.6,
   "asof": "2026-10-14",
   "src": "yahoo:^OMX"
  },
  "ZAF": {
   "v": -6.7,
   "asof": "2026-10-14",
   "src": "yahoo:^J200.JO"
  },
  "ARE": {
   "v": 1.4,
   "asof": "2026-10-13",
   "src": "yahoo:UAE",
   "proxy": "MSCI UAE ETF proxy"
  }
 },
 "failed": [
  "POL",
  "SAU"
 ]
};
