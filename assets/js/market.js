/* GENERATED FILE — do not edit by hand.
   Written by tools/fetch_market.py via .github/workflows/update-market.yml.
   Any edit here is overwritten on the next run. Curated fallbacks live in data.js.
   Generated 2026-10-06T02:20Z. */
window.MARKET = {
 "generated": "2026-10-06T02:20Z",
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
    0.63,
    -0.44,
    -0.24,
    -0.24,
    0.3,
    -0.51,
    0.46,
    0.3,
    -0.26,
    -0.79,
    0.54
   ],
   [
    0.87,
    1.0,
    0.85,
    -0.32,
    -0.15,
    -0.17,
    0.24,
    -0.33,
    0.53,
    0.28,
    -0.17,
    -0.69,
    0.48
   ],
   [
    0.63,
    0.85,
    1.0,
    -0.33,
    -0.18,
    -0.27,
    0.25,
    -0.19,
    0.54,
    0.27,
    -0.19,
    -0.59,
    0.45
   ],
   [
    -0.44,
    -0.32,
    -0.33,
    1.0,
    0.8,
    0.25,
    -0.23,
    0.59,
    -0.22,
    -0.16,
    0.17,
    0.43,
    -0.69
   ],
   [
    -0.24,
    -0.15,
    -0.18,
    0.8,
    1.0,
    0.35,
    -0.32,
    0.4,
    -0.16,
    -0.03,
    0.21,
    0.26,
    -0.5
   ],
   [
    -0.24,
    -0.17,
    -0.27,
    0.25,
    0.35,
    1.0,
    -0.46,
    0.02,
    -0.34,
    -0.25,
    0.63,
    0.28,
    -0.39
   ],
   [
    0.3,
    0.24,
    0.25,
    -0.23,
    -0.32,
    -0.46,
    1.0,
    -0.11,
    0.49,
    0.5,
    -0.19,
    -0.31,
    0.34
   ],
   [
    -0.51,
    -0.33,
    -0.19,
    0.59,
    0.4,
    0.02,
    -0.11,
    1.0,
    -0.23,
    -0.16,
    0.18,
    0.45,
    -0.42
   ],
   [
    0.46,
    0.53,
    0.54,
    -0.22,
    -0.16,
    -0.34,
    0.49,
    -0.23,
    1.0,
    0.29,
    -0.23,
    -0.43,
    0.46
   ],
   [
    0.3,
    0.28,
    0.27,
    -0.16,
    -0.03,
    -0.25,
    0.5,
    -0.16,
    0.29,
    1.0,
    -0.03,
    -0.2,
    0.24
   ],
   [
    -0.26,
    -0.17,
    -0.19,
    0.17,
    0.21,
    0.63,
    -0.19,
    0.18,
    -0.23,
    -0.03,
    1.0,
    0.29,
    -0.18
   ],
   [
    -0.79,
    -0.69,
    -0.59,
    0.43,
    0.26,
    0.28,
    -0.31,
    0.45,
    -0.43,
    -0.2,
    0.29,
    1.0,
    -0.58
   ],
   [
    0.54,
    0.48,
    0.45,
    -0.69,
    -0.5,
    -0.39,
    0.34,
    -0.42,
    0.46,
    0.24,
    -0.18,
    -0.58,
    1.0
   ]
  ],
  "asof": "2026-10-01",
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
   "v": 13.6,
   "asof": "2026-10-05",
   "src": "yahoo:^GSPC"
  },
  "CHN": {
   "v": -6.8,
   "asof": "2026-09-30",
   "src": "yahoo:510300.SS"
  },
  "JPN": {
   "v": 22.4,
   "asof": "2026-10-06",
   "src": "yahoo:1306.T",
   "proxy": "TOPIX tracker"
  },
  "IND": {
   "v": -13.7,
   "asof": "2026-10-05",
   "src": "yahoo:^NSEI"
  },
  "DEU": {
   "v": 3.1,
   "asof": "2026-10-05",
   "src": "yahoo:^GDAXI"
  },
  "GBR": {
   "v": 5.7,
   "asof": "2026-10-05",
   "src": "yahoo:^FTSE"
  },
  "FRA": {
   "v": -3.9,
   "asof": "2026-10-05",
   "src": "yahoo:^FCHI"
  },
  "ITA": {
   "v": 13.1,
   "asof": "2026-10-05",
   "src": "yahoo:FTSEMIB.MI"
  },
  "CAN": {
   "v": 12.0,
   "asof": "2026-10-05",
   "src": "yahoo:^GSPTSE"
  },
  "BRA": {
   "v": 28.4,
   "asof": "2026-10-05",
   "src": "yahoo:^BVSP"
  },
  "KOR": {
   "v": 65.7,
   "asof": "2026-10-06",
   "src": "yahoo:^KS11"
  },
  "AUS": {
   "v": 0.4,
   "asof": "2026-10-06",
   "src": "yahoo:^AXJO"
  },
  "ESP": {
   "v": 11.5,
   "asof": "2026-10-05",
   "src": "yahoo:^IBEX"
  },
  "MEX": {
   "v": 1.0,
   "asof": "2026-10-05",
   "src": "yahoo:^MXX"
  },
  "IDN": {
   "v": -29.1,
   "asof": "2026-10-06",
   "src": "yahoo:^JKSE"
  },
  "NLD": {
   "v": 18.1,
   "asof": "2026-10-05",
   "src": "yahoo:^AEX"
  },
  "CHE": {
   "v": 3.3,
   "asof": "2026-10-05",
   "src": "yahoo:^SSMI"
  },
  "TWN": {
   "v": 71.6,
   "asof": "2026-10-06",
   "src": "yahoo:^TWII"
  },
  "TUR": {
   "v": 10.5,
   "asof": "2026-10-05",
   "src": "yahoo:XU100.IS"
  },
  "SGP": {
   "v": 21.6,
   "asof": "2026-10-06",
   "src": "yahoo:^STI"
  },
  "HKG": {
   "v": -5.5,
   "asof": "2026-10-06",
   "src": "yahoo:^HSI"
  },
  "SWE": {
   "v": 13.0,
   "asof": "2026-10-05",
   "src": "yahoo:^OMX"
  },
  "ZAF": {
   "v": -6.8,
   "asof": "2026-10-05",
   "src": "yahoo:^J200.JO"
  },
  "ARE": {
   "v": 3.3,
   "asof": "2026-10-05",
   "src": "yahoo:UAE",
   "proxy": "MSCI UAE ETF proxy"
  }
 },
 "failed": [
  "POL",
  "SAU"
 ]
};
