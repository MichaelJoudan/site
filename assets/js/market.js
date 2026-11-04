/* GENERATED FILE — do not edit by hand.
   Written by tools/fetch_market.py via .github/workflows/update-market.yml.
   Any edit here is overwritten on the next run. Curated fallbacks live in data.js.
   Generated 2026-11-04T02:24Z. */
window.MARKET = {
 "generated": "2026-11-04T02:24Z",
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
    0.9,
    0.69,
    -0.15,
    -0.07,
    -0.17,
    0.39,
    -0.5,
    0.5,
    0.37,
    -0.2,
    -0.8,
    0.51
   ],
   [
    0.9,
    1.0,
    0.84,
    0.04,
    0.06,
    -0.06,
    0.33,
    -0.34,
    0.57,
    0.39,
    -0.13,
    -0.73,
    0.45
   ],
   [
    0.69,
    0.84,
    1.0,
    0.04,
    0.04,
    -0.2,
    0.33,
    -0.28,
    0.65,
    0.38,
    -0.2,
    -0.6,
    0.35
   ],
   [
    -0.15,
    0.04,
    0.04,
    1.0,
    0.78,
    0.33,
    -0.19,
    0.4,
    -0.06,
    -0.0,
    0.24,
    0.11,
    -0.53
   ],
   [
    -0.07,
    0.06,
    0.04,
    0.78,
    1.0,
    0.39,
    -0.19,
    0.21,
    -0.02,
    0.13,
    0.25,
    0.05,
    -0.42
   ],
   [
    -0.17,
    -0.06,
    -0.2,
    0.33,
    0.39,
    1.0,
    -0.35,
    0.01,
    -0.13,
    -0.15,
    0.58,
    0.2,
    -0.36
   ],
   [
    0.39,
    0.33,
    0.33,
    -0.19,
    -0.19,
    -0.35,
    1.0,
    -0.17,
    0.41,
    0.44,
    -0.07,
    -0.4,
    0.35
   ],
   [
    -0.5,
    -0.34,
    -0.28,
    0.4,
    0.21,
    0.01,
    -0.17,
    1.0,
    -0.37,
    -0.16,
    0.16,
    0.36,
    -0.25
   ],
   [
    0.5,
    0.57,
    0.65,
    -0.06,
    -0.02,
    -0.13,
    0.41,
    -0.37,
    1.0,
    0.29,
    -0.14,
    -0.49,
    0.38
   ],
   [
    0.37,
    0.39,
    0.38,
    -0.0,
    0.13,
    -0.15,
    0.44,
    -0.16,
    0.29,
    1.0,
    0.06,
    -0.28,
    0.23
   ],
   [
    -0.2,
    -0.13,
    -0.2,
    0.24,
    0.25,
    0.58,
    -0.07,
    0.16,
    -0.14,
    0.06,
    1.0,
    0.22,
    -0.14
   ],
   [
    -0.8,
    -0.73,
    -0.6,
    0.11,
    0.05,
    0.2,
    -0.4,
    0.36,
    -0.49,
    -0.28,
    0.22,
    1.0,
    -0.57
   ],
   [
    0.51,
    0.45,
    0.35,
    -0.53,
    -0.42,
    -0.36,
    0.35,
    -0.25,
    0.38,
    0.23,
    -0.14,
    -0.57,
    1.0
   ]
  ],
  "asof": "2026-11-02",
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
   "v": 10.6,
   "asof": "2026-11-03",
   "src": "yahoo:^GSPC"
  },
  "CHN": {
   "v": -14.0,
   "asof": "2026-11-04",
   "src": "yahoo:510300.SS"
  },
  "JPN": {
   "v": 13.2,
   "asof": "2026-11-04",
   "src": "yahoo:1306.T",
   "proxy": "TOPIX tracker"
  },
  "IND": {
   "v": -8.9,
   "asof": "2026-11-03",
   "src": "yahoo:^NSEI"
  },
  "DEU": {
   "v": 5.6,
   "asof": "2026-11-03",
   "src": "yahoo:^GDAXI"
  },
  "GBR": {
   "v": 7.1,
   "asof": "2026-11-03",
   "src": "yahoo:^FTSE"
  },
  "FRA": {
   "v": -1.6,
   "asof": "2026-11-03",
   "src": "yahoo:^FCHI"
  },
  "ITA": {
   "v": 11.1,
   "asof": "2026-11-03",
   "src": "yahoo:FTSEMIB.MI"
  },
  "CAN": {
   "v": 12.0,
   "asof": "2026-11-03",
   "src": "yahoo:^GSPTSE"
  },
  "BRA": {
   "v": 2.7,
   "asof": "2026-11-03",
   "src": "yahoo:^BVSP"
  },
  "KOR": {
   "v": 32.4,
   "asof": "2026-11-04",
   "src": "yahoo:^KS11"
  },
  "AUS": {
   "v": 1.6,
   "asof": "2026-11-04",
   "src": "yahoo:^AXJO"
  },
  "ESP": {
   "v": 8.7,
   "asof": "2026-11-03",
   "src": "yahoo:^IBEX"
  },
  "MEX": {
   "v": 9.1,
   "asof": "2026-11-03",
   "src": "yahoo:^MXX"
  },
  "IDN": {
   "v": -44.1,
   "asof": "2026-11-04",
   "src": "yahoo:^JKSE"
  },
  "NLD": {
   "v": 17.9,
   "asof": "2026-11-03",
   "src": "yahoo:^AEX"
  },
  "CHE": {
   "v": 11.1,
   "asof": "2026-11-03",
   "src": "yahoo:^SSMI"
  },
  "TWN": {
   "v": 49.4,
   "asof": "2026-11-04",
   "src": "yahoo:^TWII"
  },
  "TUR": {
   "v": -2.1,
   "asof": "2026-11-03",
   "src": "yahoo:XU100.IS"
  },
  "SGP": {
   "v": 12.2,
   "asof": "2026-11-04",
   "src": "yahoo:^STI"
  },
  "HKG": {
   "v": -8.6,
   "asof": "2026-11-04",
   "src": "yahoo:^HSI"
  },
  "SWE": {
   "v": 13.9,
   "asof": "2026-11-03",
   "src": "yahoo:^OMX"
  },
  "ZAF": {
   "v": -6.3,
   "asof": "2026-11-03",
   "src": "yahoo:^J200.JO"
  },
  "ARE": {
   "v": 0.5,
   "asof": "2026-11-03",
   "src": "yahoo:UAE",
   "proxy": "MSCI UAE ETF proxy"
  }
 },
 "failed": [
  "POL",
  "SAU"
 ]
};
