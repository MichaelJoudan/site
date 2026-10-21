/* GENERATED FILE — do not edit by hand.
   Written by tools/fetch_market.py via .github/workflows/update-market.yml.
   Any edit here is overwritten on the next run. Curated fallbacks live in data.js.
   Generated 2026-10-21T00:49Z. */
window.MARKET = {
 "generated": "2026-10-21T00:49Z",
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
    0.64,
    -0.4,
    -0.28,
    -0.28,
    0.36,
    -0.57,
    0.48,
    0.38,
    -0.28,
    -0.78,
    0.56
   ],
   [
    0.87,
    1.0,
    0.84,
    -0.27,
    -0.21,
    -0.2,
    0.31,
    -0.42,
    0.52,
    0.38,
    -0.21,
    -0.67,
    0.46
   ],
   [
    0.64,
    0.84,
    1.0,
    -0.26,
    -0.22,
    -0.31,
    0.33,
    -0.31,
    0.56,
    0.39,
    -0.25,
    -0.56,
    0.41
   ],
   [
    -0.4,
    -0.27,
    -0.26,
    1.0,
    0.79,
    0.36,
    -0.4,
    0.53,
    -0.26,
    -0.19,
    0.16,
    0.4,
    -0.69
   ],
   [
    -0.28,
    -0.21,
    -0.22,
    0.79,
    1.0,
    0.45,
    -0.44,
    0.38,
    -0.23,
    -0.06,
    0.21,
    0.31,
    -0.53
   ],
   [
    -0.28,
    -0.2,
    -0.31,
    0.36,
    0.45,
    1.0,
    -0.46,
    0.03,
    -0.21,
    -0.23,
    0.58,
    0.36,
    -0.52
   ],
   [
    0.36,
    0.31,
    0.33,
    -0.4,
    -0.44,
    -0.46,
    1.0,
    -0.17,
    0.38,
    0.48,
    -0.14,
    -0.44,
    0.49
   ],
   [
    -0.57,
    -0.42,
    -0.31,
    0.53,
    0.38,
    0.03,
    -0.17,
    1.0,
    -0.35,
    -0.2,
    0.21,
    0.5,
    -0.45
   ],
   [
    0.48,
    0.52,
    0.56,
    -0.26,
    -0.23,
    -0.21,
    0.38,
    -0.35,
    1.0,
    0.31,
    -0.23,
    -0.47,
    0.46
   ],
   [
    0.38,
    0.38,
    0.39,
    -0.19,
    -0.06,
    -0.23,
    0.48,
    -0.2,
    0.31,
    1.0,
    0.01,
    -0.29,
    0.32
   ],
   [
    -0.28,
    -0.21,
    -0.25,
    0.16,
    0.21,
    0.58,
    -0.14,
    0.21,
    -0.23,
    0.01,
    1.0,
    0.34,
    -0.18
   ],
   [
    -0.78,
    -0.67,
    -0.56,
    0.4,
    0.31,
    0.36,
    -0.44,
    0.5,
    -0.47,
    -0.29,
    0.34,
    1.0,
    -0.61
   ],
   [
    0.56,
    0.46,
    0.41,
    -0.69,
    -0.53,
    -0.52,
    0.49,
    -0.45,
    0.46,
    0.32,
    -0.18,
    -0.61,
    1.0
   ]
  ],
  "asof": "2026-10-19",
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
   "v": 12.7,
   "asof": "2026-10-20",
   "src": "yahoo:^GSPC"
  },
  "CHN": {
   "v": -10.8,
   "asof": "2026-10-19",
   "src": "yahoo:510300.SS"
  },
  "JPN": {
   "v": 19.3,
   "asof": "2026-10-21",
   "src": "yahoo:1306.T",
   "proxy": "TOPIX tracker"
  },
  "IND": {
   "v": -12.4,
   "asof": "2026-10-19",
   "src": "yahoo:^NSEI"
  },
  "DEU": {
   "v": 3.4,
   "asof": "2026-10-19",
   "src": "yahoo:^GDAXI"
  },
  "GBR": {
   "v": 8.4,
   "asof": "2026-10-19",
   "src": "yahoo:^FTSE"
  },
  "FRA": {
   "v": -3.5,
   "asof": "2026-10-19",
   "src": "yahoo:^FCHI"
  },
  "ITA": {
   "v": 9.2,
   "asof": "2026-10-19",
   "src": "yahoo:FTSEMIB.MI"
  },
  "CAN": {
   "v": 13.9,
   "asof": "2026-10-20",
   "src": "yahoo:^GSPTSE"
  },
  "BRA": {
   "v": 29.3,
   "asof": "2026-10-21",
   "src": "yahoo:^BVSP"
  },
  "KOR": {
   "v": 36.5,
   "asof": "2026-10-21",
   "src": "yahoo:^KS11"
  },
  "AUS": {
   "v": 1.0,
   "asof": "2026-10-21",
   "src": "yahoo:^AXJO"
  },
  "ESP": {
   "v": 10.0,
   "asof": "2026-10-19",
   "src": "yahoo:^IBEX"
  },
  "MEX": {
   "v": 7.7,
   "asof": "2026-10-20",
   "src": "yahoo:^MXX"
  },
  "IDN": {
   "v": -42.2,
   "asof": "2026-10-19",
   "src": "yahoo:^JKSE"
  },
  "NLD": {
   "v": 20.0,
   "asof": "2026-10-19",
   "src": "yahoo:^AEX"
  },
  "CHE": {
   "v": 8.3,
   "asof": "2026-10-19",
   "src": "yahoo:^SSMI"
  },
  "TWN": {
   "v": 61.7,
   "asof": "2026-10-19",
   "src": "yahoo:^TWII"
  },
  "TUR": {
   "v": 1.5,
   "asof": "2026-10-19",
   "src": "yahoo:XU100.IS"
  },
  "SGP": {
   "v": 16.5,
   "asof": "2026-10-19",
   "src": "yahoo:^STI"
  },
  "HKG": {
   "v": -5.6,
   "asof": "2026-10-16",
   "src": "yahoo:^HSI"
  },
  "SWE": {
   "v": 13.3,
   "asof": "2026-10-19",
   "src": "yahoo:^OMX"
  },
  "ZAF": {
   "v": -6.2,
   "asof": "2026-10-19",
   "src": "yahoo:^J200.JO"
  },
  "ARE": {
   "v": 2.6,
   "asof": "2026-10-19",
   "src": "yahoo:UAE",
   "proxy": "MSCI UAE ETF proxy"
  }
 },
 "failed": [
  "POL",
  "SAU"
 ]
};
