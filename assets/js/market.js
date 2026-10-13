/* GENERATED FILE — do not edit by hand.
   Written by tools/fetch_market.py via .github/workflows/update-market.yml.
   Any edit here is overwritten on the next run. Curated fallbacks live in data.js.
   Generated 2026-10-13T03:04Z. */
window.MARKET = {
 "generated": "2026-10-13T03:04Z",
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
    0.87,
    0.61,
    -0.4,
    -0.27,
    -0.27,
    0.32,
    -0.58,
    0.48,
    0.32,
    -0.27,
    -0.78,
    0.55
   ],
   [
    0.87,
    1.0,
    0.83,
    -0.29,
    -0.2,
    -0.2,
    0.27,
    -0.41,
    0.57,
    0.31,
    -0.19,
    -0.65,
    0.47
   ],
   [
    0.61,
    0.83,
    1.0,
    -0.29,
    -0.23,
    -0.31,
    0.3,
    -0.27,
    0.59,
    0.32,
    -0.23,
    -0.53,
    0.44
   ],
   [
    -0.4,
    -0.29,
    -0.29,
    1.0,
    0.81,
    0.36,
    -0.39,
    0.53,
    -0.31,
    -0.2,
    0.18,
    0.4,
    -0.68
   ],
   [
    -0.27,
    -0.2,
    -0.23,
    0.81,
    1.0,
    0.44,
    -0.43,
    0.37,
    -0.27,
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
    0.44,
    1.0,
    -0.42,
    0.04,
    -0.26,
    -0.21,
    0.6,
    0.36,
    -0.5
   ],
   [
    0.32,
    0.27,
    0.3,
    -0.39,
    -0.43,
    -0.42,
    1.0,
    -0.17,
    0.39,
    0.46,
    -0.15,
    -0.41,
    0.43
   ],
   [
    -0.58,
    -0.41,
    -0.27,
    0.53,
    0.37,
    0.04,
    -0.17,
    1.0,
    -0.35,
    -0.2,
    0.19,
    0.51,
    -0.43
   ],
   [
    0.48,
    0.57,
    0.59,
    -0.31,
    -0.27,
    -0.26,
    0.39,
    -0.35,
    1.0,
    0.24,
    -0.22,
    -0.49,
    0.54
   ],
   [
    0.32,
    0.31,
    0.32,
    -0.2,
    -0.06,
    -0.21,
    0.46,
    -0.2,
    0.24,
    1.0,
    -0.02,
    -0.24,
    0.27
   ],
   [
    -0.27,
    -0.19,
    -0.23,
    0.18,
    0.22,
    0.6,
    -0.15,
    0.19,
    -0.22,
    -0.02,
    1.0,
    0.33,
    -0.19
   ],
   [
    -0.78,
    -0.65,
    -0.53,
    0.4,
    0.3,
    0.36,
    -0.41,
    0.51,
    -0.49,
    -0.24,
    0.33,
    1.0,
    -0.58
   ],
   [
    0.55,
    0.47,
    0.44,
    -0.68,
    -0.52,
    -0.5,
    0.43,
    -0.43,
    0.54,
    0.27,
    -0.19,
    -0.58,
    1.0
   ]
  ],
  "asof": "2026-10-08",
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
   "v": 14.0,
   "asof": "2026-10-12",
   "src": "yahoo:^GSPC"
  },
  "CHN": {
   "v": -9.6,
   "asof": "2026-10-13",
   "src": "yahoo:510300.SS"
  },
  "JPN": {
   "v": 20.1,
   "asof": "2026-10-13",
   "src": "yahoo:1306.T",
   "proxy": "TOPIX tracker"
  },
  "IND": {
   "v": -14.4,
   "asof": "2026-10-12",
   "src": "yahoo:^NSEI"
  },
  "DEU": {
   "v": 3.2,
   "asof": "2026-10-12",
   "src": "yahoo:^GDAXI"
  },
  "GBR": {
   "v": 7.3,
   "asof": "2026-10-12",
   "src": "yahoo:^FTSE"
  },
  "FRA": {
   "v": -3.9,
   "asof": "2026-10-12",
   "src": "yahoo:^FCHI"
  },
  "ITA": {
   "v": 11.3,
   "asof": "2026-10-12",
   "src": "yahoo:FTSEMIB.MI"
  },
  "CAN": {
   "v": 12.5,
   "asof": "2026-10-09",
   "src": "yahoo:^GSPTSE"
  },
  "BRA": {
   "v": 29.8,
   "asof": "2026-10-09",
   "src": "yahoo:^BVSP"
  },
  "KOR": {
   "v": 40.5,
   "asof": "2026-10-13",
   "src": "yahoo:^KS11"
  },
  "AUS": {
   "v": 0.6,
   "asof": "2026-10-13",
   "src": "yahoo:^AXJO"
  },
  "ESP": {
   "v": 11.4,
   "asof": "2026-10-12",
   "src": "yahoo:^IBEX"
  },
  "MEX": {
   "v": 3.8,
   "asof": "2026-10-12",
   "src": "yahoo:^MXX"
  },
  "IDN": {
   "v": -32.0,
   "asof": "2026-10-13",
   "src": "yahoo:^JKSE"
  },
  "NLD": {
   "v": 19.4,
   "asof": "2026-10-12",
   "src": "yahoo:^AEX"
  },
  "CHE": {
   "v": 4.6,
   "asof": "2026-10-12",
   "src": "yahoo:^SSMI"
  },
  "TWN": {
   "v": 66.4,
   "asof": "2026-10-13",
   "src": "yahoo:^TWII"
  },
  "TUR": {
   "v": 7.9,
   "asof": "2026-10-12",
   "src": "yahoo:XU100.IS"
  },
  "SGP": {
   "v": 16.7,
   "asof": "2026-10-13",
   "src": "yahoo:^STI"
  },
  "HKG": {
   "v": -6.2,
   "asof": "2026-10-13",
   "src": "yahoo:^HSI"
  },
  "SWE": {
   "v": 13.4,
   "asof": "2026-10-12",
   "src": "yahoo:^OMX"
  },
  "ZAF": {
   "v": -6.5,
   "asof": "2026-10-12",
   "src": "yahoo:^J200.JO"
  },
  "ARE": {
   "v": 1.0,
   "asof": "2026-10-12",
   "src": "yahoo:UAE",
   "proxy": "MSCI UAE ETF proxy"
  }
 },
 "failed": [
  "POL",
  "SAU"
 ]
};
