/* GENERATED FILE — do not edit by hand.
   Written by tools/fetch_market.py via .github/workflows/update-market.yml.
   Any edit here is overwritten on the next run. Curated fallbacks live in data.js.
   Generated 2026-10-08T02:11Z. */
window.MARKET = {
 "generated": "2026-10-08T02:11Z",
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
    -0.38,
    -0.21,
    -0.3,
    0.33,
    -0.53,
    0.5,
    0.33,
    -0.27,
    -0.79,
    0.54
   ],
   [
    0.87,
    1.0,
    0.85,
    -0.27,
    -0.13,
    -0.25,
    0.29,
    -0.35,
    0.59,
    0.32,
    -0.19,
    -0.68,
    0.46
   ],
   [
    0.64,
    0.85,
    1.0,
    -0.27,
    -0.14,
    -0.35,
    0.3,
    -0.21,
    0.61,
    0.31,
    -0.22,
    -0.58,
    0.41
   ],
   [
    -0.38,
    -0.27,
    -0.27,
    1.0,
    0.81,
    0.31,
    -0.27,
    0.59,
    -0.21,
    -0.17,
    0.17,
    0.39,
    -0.67
   ],
   [
    -0.21,
    -0.13,
    -0.14,
    0.81,
    1.0,
    0.39,
    -0.35,
    0.4,
    -0.15,
    -0.03,
    0.21,
    0.24,
    -0.51
   ],
   [
    -0.3,
    -0.25,
    -0.35,
    0.31,
    0.39,
    1.0,
    -0.42,
    0.02,
    -0.31,
    -0.22,
    0.61,
    0.38,
    -0.5
   ],
   [
    0.33,
    0.29,
    0.3,
    -0.27,
    -0.35,
    -0.42,
    1.0,
    -0.12,
    0.45,
    0.49,
    -0.16,
    -0.37,
    0.41
   ],
   [
    -0.53,
    -0.35,
    -0.21,
    0.59,
    0.4,
    0.02,
    -0.12,
    1.0,
    -0.25,
    -0.16,
    0.18,
    0.48,
    -0.43
   ],
   [
    0.5,
    0.59,
    0.61,
    -0.21,
    -0.15,
    -0.31,
    0.45,
    -0.25,
    1.0,
    0.28,
    -0.22,
    -0.48,
    0.5
   ],
   [
    0.33,
    0.32,
    0.31,
    -0.17,
    -0.03,
    -0.22,
    0.49,
    -0.16,
    0.28,
    1.0,
    -0.02,
    -0.24,
    0.27
   ],
   [
    -0.27,
    -0.19,
    -0.22,
    0.17,
    0.21,
    0.61,
    -0.16,
    0.18,
    -0.22,
    -0.02,
    1.0,
    0.32,
    -0.19
   ],
   [
    -0.79,
    -0.68,
    -0.58,
    0.39,
    0.24,
    0.38,
    -0.37,
    0.48,
    -0.48,
    -0.24,
    0.32,
    1.0,
    -0.56
   ],
   [
    0.54,
    0.46,
    0.41,
    -0.67,
    -0.51,
    -0.5,
    0.41,
    -0.43,
    0.5,
    0.27,
    -0.19,
    -0.56,
    1.0
   ]
  ],
  "asof": "2026-10-06",
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
   "asof": "2026-10-07",
   "src": "yahoo:^GSPC"
  },
  "CHN": {
   "v": -6.5,
   "asof": "2026-10-08",
   "src": "yahoo:510300.SS"
  },
  "JPN": {
   "v": 20.3,
   "asof": "2026-10-08",
   "src": "yahoo:1306.T",
   "proxy": "TOPIX tracker"
  },
  "IND": {
   "v": -13.5,
   "asof": "2026-10-07",
   "src": "yahoo:^NSEI"
  },
  "DEU": {
   "v": 2.5,
   "asof": "2026-10-07",
   "src": "yahoo:^GDAXI"
  },
  "GBR": {
   "v": 5.3,
   "asof": "2026-10-07",
   "src": "yahoo:^FTSE"
  },
  "FRA": {
   "v": -4.7,
   "asof": "2026-10-07",
   "src": "yahoo:^FCHI"
  },
  "ITA": {
   "v": 11.2,
   "asof": "2026-10-07",
   "src": "yahoo:FTSEMIB.MI"
  },
  "CAN": {
   "v": 10.5,
   "asof": "2026-10-07",
   "src": "yahoo:^GSPTSE"
  },
  "BRA": {
   "v": 26.8,
   "asof": "2026-10-07",
   "src": "yahoo:^BVSP"
  },
  "KOR": {
   "v": 61.1,
   "asof": "2026-10-08",
   "src": "yahoo:^KS11"
  },
  "AUS": {
   "v": -0.4,
   "asof": "2026-10-08",
   "src": "yahoo:^AXJO"
  },
  "ESP": {
   "v": 10.5,
   "asof": "2026-10-07",
   "src": "yahoo:^IBEX"
  },
  "MEX": {
   "v": 0.5,
   "asof": "2026-10-07",
   "src": "yahoo:^MXX"
  },
  "IDN": {
   "v": -28.9,
   "asof": "2026-10-08",
   "src": "yahoo:^JKSE"
  },
  "NLD": {
   "v": 17.5,
   "asof": "2026-10-07",
   "src": "yahoo:^AEX"
  },
  "CHE": {
   "v": 4.1,
   "asof": "2026-10-07",
   "src": "yahoo:^SSMI"
  },
  "TWN": {
   "v": 71.1,
   "asof": "2026-10-08",
   "src": "yahoo:^TWII"
  },
  "TUR": {
   "v": 7.6,
   "asof": "2026-10-07",
   "src": "yahoo:XU100.IS"
  },
  "SGP": {
   "v": 17.7,
   "asof": "2026-10-08",
   "src": "yahoo:^STI"
  },
  "HKG": {
   "v": -6.1,
   "asof": "2026-10-08",
   "src": "yahoo:^HSI"
  },
  "SWE": {
   "v": 11.9,
   "asof": "2026-10-07",
   "src": "yahoo:^OMX"
  },
  "ZAF": {
   "v": -7.9,
   "asof": "2026-10-07",
   "src": "yahoo:^J200.JO"
  },
  "ARE": {
   "v": 3.2,
   "asof": "2026-10-07",
   "src": "yahoo:UAE",
   "proxy": "MSCI UAE ETF proxy"
  }
 },
 "failed": [
  "POL",
  "SAU"
 ]
};
