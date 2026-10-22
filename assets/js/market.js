/* GENERATED FILE — do not edit by hand.
   Written by tools/fetch_market.py via .github/workflows/update-market.yml.
   Any edit here is overwritten on the next run. Curated fallbacks live in data.js.
   Generated 2026-10-22T00:43Z. */
window.MARKET = {
 "generated": "2026-10-22T00:43Z",
 "heat": {
  "window": "60-day rolling, daily returns",
  "assets": [
   "S&P 500",
   "Nasdaq 100",
   "MSCI EM",
   "US 10y yield",
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
    -0.34,
    -0.27,
    0.36,
    -0.56,
    0.47,
    0.36,
    -0.3,
    -0.78,
    0.56
   ],
   [
    0.88,
    1.0,
    0.84,
    -0.19,
    -0.23,
    0.32,
    -0.43,
    0.52,
    0.39,
    -0.26,
    -0.68,
    0.47
   ],
   [
    0.64,
    0.84,
    1.0,
    -0.14,
    -0.33,
    0.34,
    -0.31,
    0.57,
    0.38,
    -0.3,
    -0.57,
    0.41
   ],
   [
    -0.34,
    -0.19,
    -0.14,
    1.0,
    0.37,
    -0.43,
    0.51,
    -0.21,
    -0.21,
    0.13,
    0.34,
    -0.64
   ],
   [
    -0.27,
    -0.23,
    -0.33,
    0.37,
    1.0,
    -0.41,
    0.05,
    -0.17,
    -0.23,
    0.56,
    0.35,
    -0.46
   ],
   [
    0.36,
    0.32,
    0.34,
    -0.43,
    -0.41,
    1.0,
    -0.17,
    0.38,
    0.47,
    -0.14,
    -0.42,
    0.48
   ],
   [
    -0.56,
    -0.43,
    -0.31,
    0.51,
    0.05,
    -0.17,
    1.0,
    -0.34,
    -0.21,
    0.22,
    0.5,
    -0.44
   ],
   [
    0.47,
    0.52,
    0.57,
    -0.21,
    -0.17,
    0.38,
    -0.34,
    1.0,
    0.28,
    -0.24,
    -0.46,
    0.49
   ],
   [
    0.36,
    0.39,
    0.38,
    -0.21,
    -0.23,
    0.47,
    -0.21,
    0.28,
    1.0,
    -0.0,
    -0.28,
    0.29
   ],
   [
    -0.3,
    -0.26,
    -0.3,
    0.13,
    0.56,
    -0.14,
    0.22,
    -0.24,
    -0.0,
    1.0,
    0.35,
    -0.17
   ],
   [
    -0.78,
    -0.68,
    -0.57,
    0.34,
    0.35,
    -0.42,
    0.5,
    -0.46,
    -0.28,
    0.35,
    1.0,
    -0.6
   ],
   [
    0.56,
    0.47,
    0.41,
    -0.64,
    -0.46,
    0.48,
    -0.44,
    0.49,
    0.29,
    -0.17,
    -0.6,
    1.0
   ]
  ],
  "asof": "2026-10-20",
  "obs": 60,
  "sources": {
   "S&P 500": "yahoo:^GSPC",
   "Nasdaq 100": "yahoo:^NDX",
   "MSCI EM": "yahoo:EEM",
   "US 10y yield": "yahoo:^TNX",
   "DXY": "yahoo:DX-Y.NYB",
   "Gold": "yahoo:GC=F",
   "Brent": "yahoo:BZ=F",
   "Copper": "yahoo:HG=F",
   "Bitcoin": "yahoo:BTC-USD",
   "USDJPY": "yahoo:JPY=X",
   "VIX": "yahoo:^VIX",
   "HY credit": "yahoo:HYG"
  }
 },
 "ytd": {
  "USA": {
   "v": 13.3,
   "asof": "2026-10-21",
   "src": "yahoo:^GSPC"
  },
  "CHN": {
   "v": -11.2,
   "asof": "2026-10-20",
   "src": "yahoo:510300.SS"
  },
  "JPN": {
   "v": 19.2,
   "asof": "2026-10-22",
   "src": "yahoo:1306.T",
   "proxy": "TOPIX tracker"
  },
  "IND": {
   "v": -12.4,
   "asof": "2026-10-19",
   "src": "yahoo:^NSEI"
  },
  "DEU": {
   "v": 3.3,
   "asof": "2026-10-20",
   "src": "yahoo:^GDAXI"
  },
  "GBR": {
   "v": 8.1,
   "asof": "2026-10-20",
   "src": "yahoo:^FTSE"
  },
  "FRA": {
   "v": -3.8,
   "asof": "2026-10-20",
   "src": "yahoo:^FCHI"
  },
  "ITA": {
   "v": 9.2,
   "asof": "2026-10-20",
   "src": "yahoo:FTSEMIB.MI"
  },
  "CAN": {
   "v": 14.5,
   "asof": "2026-10-21",
   "src": "yahoo:^GSPTSE"
  },
  "BRA": {
   "v": 28.2,
   "asof": "2026-10-21",
   "src": "yahoo:^BVSP"
  },
  "KOR": {
   "v": 35.2,
   "asof": "2026-10-22",
   "src": "yahoo:^KS11"
  },
  "AUS": {
   "v": 0.8,
   "asof": "2026-10-22",
   "src": "yahoo:^AXJO"
  },
  "ESP": {
   "v": 10.3,
   "asof": "2026-10-20",
   "src": "yahoo:^IBEX"
  },
  "MEX": {
   "v": 9.2,
   "asof": "2026-10-21",
   "src": "yahoo:^MXX"
  },
  "IDN": {
   "v": -39.0,
   "asof": "2026-10-20",
   "src": "yahoo:^JKSE"
  },
  "NLD": {
   "v": 19.2,
   "asof": "2026-10-20",
   "src": "yahoo:^AEX"
  },
  "CHE": {
   "v": 9.1,
   "asof": "2026-10-20",
   "src": "yahoo:^SSMI"
  },
  "TWN": {
   "v": 59.8,
   "asof": "2026-10-20",
   "src": "yahoo:^TWII"
  },
  "TUR": {
   "v": 4.8,
   "asof": "2026-10-20",
   "src": "yahoo:XU100.IS"
  },
  "SGP": {
   "v": 16.3,
   "asof": "2026-10-20",
   "src": "yahoo:^STI"
  },
  "HKG": {
   "v": -6.9,
   "asof": "2026-10-20",
   "src": "yahoo:^HSI"
  },
  "SWE": {
   "v": 12.3,
   "asof": "2026-10-20",
   "src": "yahoo:^OMX"
  },
  "ZAF": {
   "v": -5.0,
   "asof": "2026-10-20",
   "src": "yahoo:^J200.JO"
  },
  "ARE": {
   "v": 2.9,
   "asof": "2026-10-20",
   "src": "yahoo:UAE",
   "proxy": "MSCI UAE ETF proxy"
  }
 },
 "failed": [
  "POL",
  "SAU",
  "US 2y yield"
 ]
};
