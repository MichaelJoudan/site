/* GENERATED FILE — do not edit by hand.
   Written by tools/fetch_market.py via .github/workflows/update-market.yml.
   Any edit here is overwritten on the next run. Curated fallbacks live in data.js.
   Generated 2026-10-23T00:43Z. */
window.MARKET = {
 "generated": "2026-10-23T00:43Z",
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
    -0.4,
    -0.27,
    -0.29,
    0.35,
    -0.57,
    0.47,
    0.37,
    -0.3,
    -0.78,
    0.56
   ],
   [
    0.88,
    1.0,
    0.84,
    -0.27,
    -0.22,
    -0.24,
    0.32,
    -0.43,
    0.51,
    0.39,
    -0.26,
    -0.68,
    0.49
   ],
   [
    0.64,
    0.84,
    1.0,
    -0.25,
    -0.23,
    -0.35,
    0.33,
    -0.31,
    0.56,
    0.38,
    -0.3,
    -0.57,
    0.41
   ],
   [
    -0.4,
    -0.27,
    -0.25,
    1.0,
    0.78,
    0.38,
    -0.39,
    0.54,
    -0.25,
    -0.19,
    0.17,
    0.41,
    -0.68
   ],
   [
    -0.27,
    -0.22,
    -0.23,
    0.78,
    1.0,
    0.44,
    -0.44,
    0.38,
    -0.23,
    -0.05,
    0.2,
    0.29,
    -0.51
   ],
   [
    -0.29,
    -0.24,
    -0.35,
    0.38,
    0.44,
    1.0,
    -0.44,
    0.04,
    -0.22,
    -0.22,
    0.57,
    0.36,
    -0.51
   ],
   [
    0.35,
    0.32,
    0.33,
    -0.39,
    -0.44,
    -0.44,
    1.0,
    -0.17,
    0.38,
    0.47,
    -0.14,
    -0.42,
    0.47
   ],
   [
    -0.57,
    -0.43,
    -0.31,
    0.54,
    0.38,
    0.04,
    -0.17,
    1.0,
    -0.35,
    -0.2,
    0.21,
    0.5,
    -0.46
   ],
   [
    0.47,
    0.51,
    0.56,
    -0.25,
    -0.23,
    -0.22,
    0.38,
    -0.35,
    1.0,
    0.3,
    -0.25,
    -0.46,
    0.45
   ],
   [
    0.37,
    0.39,
    0.38,
    -0.19,
    -0.05,
    -0.22,
    0.47,
    -0.2,
    0.3,
    1.0,
    0.0,
    -0.28,
    0.3
   ],
   [
    -0.3,
    -0.26,
    -0.3,
    0.17,
    0.2,
    0.57,
    -0.14,
    0.21,
    -0.25,
    0.0,
    1.0,
    0.35,
    -0.19
   ],
   [
    -0.78,
    -0.68,
    -0.57,
    0.41,
    0.29,
    0.36,
    -0.42,
    0.5,
    -0.46,
    -0.28,
    0.35,
    1.0,
    -0.61
   ],
   [
    0.56,
    0.49,
    0.41,
    -0.68,
    -0.51,
    -0.51,
    0.47,
    -0.46,
    0.45,
    0.3,
    -0.19,
    -0.61,
    1.0
   ]
  ],
  "asof": "2026-10-21",
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
   "v": 11.9,
   "asof": "2026-10-22",
   "src": "yahoo:^GSPC"
  },
  "CHN": {
   "v": -12.0,
   "asof": "2026-10-21",
   "src": "yahoo:510300.SS"
  },
  "JPN": {
   "v": 15.7,
   "asof": "2026-10-23",
   "src": "yahoo:1306.T",
   "proxy": "TOPIX tracker"
  },
  "IND": {
   "v": -12.7,
   "asof": "2026-10-21",
   "src": "yahoo:^NSEI"
  },
  "DEU": {
   "v": 4.7,
   "asof": "2026-10-21",
   "src": "yahoo:^GDAXI"
  },
  "GBR": {
   "v": 8.3,
   "asof": "2026-10-21",
   "src": "yahoo:^FTSE"
  },
  "FRA": {
   "v": -2.8,
   "asof": "2026-10-21",
   "src": "yahoo:^FCHI"
  },
  "ITA": {
   "v": 10.5,
   "asof": "2026-10-21",
   "src": "yahoo:FTSEMIB.MI"
  },
  "CAN": {
   "v": 13.4,
   "asof": "2026-10-22",
   "src": "yahoo:^GSPTSE"
  },
  "BRA": {
   "v": 26.7,
   "asof": "2026-10-22",
   "src": "yahoo:^BVSP"
  },
  "KOR": {
   "v": 27.0,
   "asof": "2026-10-23",
   "src": "yahoo:^KS11"
  },
  "AUS": {
   "v": 0.7,
   "asof": "2026-10-23",
   "src": "yahoo:^AXJO"
  },
  "ESP": {
   "v": 11.6,
   "asof": "2026-10-21",
   "src": "yahoo:^IBEX"
  },
  "MEX": {
   "v": 8.7,
   "asof": "2026-10-22",
   "src": "yahoo:^MXX"
  },
  "IDN": {
   "v": -38.4,
   "asof": "2026-10-21",
   "src": "yahoo:^JKSE"
  },
  "NLD": {
   "v": 20.1,
   "asof": "2026-10-21",
   "src": "yahoo:^AEX"
  },
  "CHE": {
   "v": 9.7,
   "asof": "2026-10-21",
   "src": "yahoo:^SSMI"
  },
  "TWN": {
   "v": 61.9,
   "asof": "2026-10-21",
   "src": "yahoo:^TWII"
  },
  "TUR": {
   "v": 2.8,
   "asof": "2026-10-21",
   "src": "yahoo:XU100.IS"
  },
  "SGP": {
   "v": 17.0,
   "asof": "2026-10-21",
   "src": "yahoo:^STI"
  },
  "HKG": {
   "v": -7.7,
   "asof": "2026-10-21",
   "src": "yahoo:^HSI"
  },
  "SWE": {
   "v": 12.5,
   "asof": "2026-10-21",
   "src": "yahoo:^OMX"
  },
  "ZAF": {
   "v": -5.8,
   "asof": "2026-10-21",
   "src": "yahoo:^J200.JO"
  },
  "ARE": {
   "v": 3.1,
   "asof": "2026-10-21",
   "src": "yahoo:UAE",
   "proxy": "MSCI UAE ETF proxy"
  }
 },
 "failed": [
  "POL",
  "SAU"
 ]
};
