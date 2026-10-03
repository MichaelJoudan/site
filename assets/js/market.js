/* GENERATED FILE — do not edit by hand.
   Written by tools/fetch_market.py via .github/workflows/update-market.yml.
   Any edit here is overwritten on the next run. Curated fallbacks live in data.js.
   Generated 2026-10-03T01:14Z. */
window.MARKET = {
 "generated": "2026-10-03T01:14Z",
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
   "v": 12.8,
   "asof": "2026-10-02",
   "src": "yahoo:^GSPC"
  },
  "CHN": {
   "v": -6.8,
   "asof": "2026-09-30",
   "src": "yahoo:510300.SS"
  },
  "JPN": {
   "v": 20.2,
   "asof": "2026-10-02",
   "src": "yahoo:1306.T",
   "proxy": "TOPIX tracker"
  },
  "IND": {
   "v": -14.2,
   "asof": "2026-10-01",
   "src": "yahoo:^NSEI"
  },
  "DEU": {
   "v": 1.8,
   "asof": "2026-10-01",
   "src": "yahoo:^GDAXI"
  },
  "GBR": {
   "v": 5.0,
   "asof": "2026-10-01",
   "src": "yahoo:^FTSE"
  },
  "FRA": {
   "v": -3.9,
   "asof": "2026-10-01",
   "src": "yahoo:^FCHI"
  },
  "ITA": {
   "v": 11.8,
   "asof": "2026-10-01",
   "src": "yahoo:FTSEMIB.MI"
  },
  "CAN": {
   "v": 12.0,
   "asof": "2026-10-02",
   "src": "yahoo:^GSPTSE"
  },
  "BRA": {
   "v": 19.2,
   "asof": "2026-10-02",
   "src": "yahoo:^BVSP"
  },
  "KOR": {
   "v": 65.4,
   "asof": "2026-10-01",
   "src": "yahoo:^KS11"
  },
  "AUS": {
   "v": -1.1,
   "asof": "2026-10-01",
   "src": "yahoo:^AXJO"
  },
  "ESP": {
   "v": 9.8,
   "asof": "2026-10-01",
   "src": "yahoo:^IBEX"
  },
  "MEX": {
   "v": 0.3,
   "asof": "2026-10-02",
   "src": "yahoo:^MXX"
  },
  "IDN": {
   "v": -30.5,
   "asof": "2026-10-01",
   "src": "yahoo:^JKSE"
  },
  "NLD": {
   "v": 15.9,
   "asof": "2026-10-01",
   "src": "yahoo:^AEX"
  },
  "CHE": {
   "v": 2.7,
   "asof": "2026-10-01",
   "src": "yahoo:^SSMI"
  },
  "TWN": {
   "v": 66.9,
   "asof": "2026-10-01",
   "src": "yahoo:^TWII"
  },
  "TUR": {
   "v": 8.8,
   "asof": "2026-10-01",
   "src": "yahoo:XU100.IS"
  },
  "SGP": {
   "v": 22.0,
   "asof": "2026-10-01",
   "src": "yahoo:^STI"
  },
  "HKG": {
   "v": -4.0,
   "asof": "2026-09-30",
   "src": "yahoo:^HSI"
  },
  "SWE": {
   "v": 11.9,
   "asof": "2026-10-01",
   "src": "yahoo:^OMX"
  },
  "ZAF": {
   "v": -7.2,
   "asof": "2026-10-01",
   "src": "yahoo:^J200.JO"
  },
  "ARE": {
   "v": 3.6,
   "asof": "2026-10-01",
   "src": "yahoo:UAE",
   "proxy": "MSCI UAE ETF proxy"
  }
 },
 "failed": [
  "POL",
  "SAU"
 ]
};
