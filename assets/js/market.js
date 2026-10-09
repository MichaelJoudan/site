/* GENERATED FILE — do not edit by hand.
   Written by tools/fetch_market.py via .github/workflows/update-market.yml.
   Any edit here is overwritten on the next run. Curated fallbacks live in data.js.
   Generated 2026-10-09T02:15Z. */
window.MARKET = {
 "generated": "2026-10-09T02:15Z",
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
    -0.41,
    -0.27,
    -0.28,
    0.32,
    -0.56,
    0.46,
    0.32,
    -0.27,
    -0.77,
    0.55
   ],
   [
    0.87,
    1.0,
    0.83,
    -0.31,
    -0.2,
    -0.22,
    0.28,
    -0.38,
    0.55,
    0.3,
    -0.19,
    -0.65,
    0.47
   ],
   [
    0.61,
    0.83,
    1.0,
    -0.32,
    -0.24,
    -0.32,
    0.29,
    -0.25,
    0.56,
    0.3,
    -0.23,
    -0.53,
    0.44
   ],
   [
    -0.41,
    -0.31,
    -0.32,
    1.0,
    0.81,
    0.32,
    -0.28,
    0.58,
    -0.24,
    -0.18,
    0.17,
    0.43,
    -0.67
   ],
   [
    -0.27,
    -0.2,
    -0.24,
    0.81,
    1.0,
    0.42,
    -0.37,
    0.4,
    -0.22,
    -0.05,
    0.21,
    0.31,
    -0.52
   ],
   [
    -0.28,
    -0.22,
    -0.32,
    0.32,
    0.42,
    1.0,
    -0.42,
    0.03,
    -0.28,
    -0.22,
    0.6,
    0.35,
    -0.5
   ],
   [
    0.32,
    0.28,
    0.29,
    -0.28,
    -0.37,
    -0.42,
    1.0,
    -0.12,
    0.44,
    0.49,
    -0.16,
    -0.36,
    0.41
   ],
   [
    -0.56,
    -0.38,
    -0.25,
    0.58,
    0.4,
    0.03,
    -0.12,
    1.0,
    -0.28,
    -0.16,
    0.19,
    0.51,
    -0.43
   ],
   [
    0.46,
    0.55,
    0.56,
    -0.24,
    -0.22,
    -0.28,
    0.44,
    -0.28,
    1.0,
    0.26,
    -0.22,
    -0.44,
    0.52
   ],
   [
    0.32,
    0.3,
    0.3,
    -0.18,
    -0.05,
    -0.22,
    0.49,
    -0.16,
    0.26,
    1.0,
    -0.02,
    -0.22,
    0.27
   ],
   [
    -0.27,
    -0.19,
    -0.23,
    0.17,
    0.21,
    0.6,
    -0.16,
    0.19,
    -0.22,
    -0.02,
    1.0,
    0.32,
    -0.19
   ],
   [
    -0.77,
    -0.65,
    -0.53,
    0.43,
    0.31,
    0.35,
    -0.36,
    0.51,
    -0.44,
    -0.22,
    0.32,
    1.0,
    -0.58
   ],
   [
    0.55,
    0.47,
    0.44,
    -0.67,
    -0.52,
    -0.5,
    0.41,
    -0.43,
    0.52,
    0.27,
    -0.19,
    -0.58,
    1.0
   ]
  ],
  "asof": "2026-10-07",
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
   "v": 13.4,
   "asof": "2026-10-08",
   "src": "yahoo:^GSPC"
  },
  "CHN": {
   "v": -8.6,
   "asof": "2026-10-09",
   "src": "yahoo:510300.SS"
  },
  "JPN": {
   "v": 20.2,
   "asof": "2026-10-09",
   "src": "yahoo:1306.T",
   "proxy": "TOPIX tracker"
  },
  "IND": {
   "v": -14.9,
   "asof": "2026-10-08",
   "src": "yahoo:^NSEI"
  },
  "DEU": {
   "v": 1.3,
   "asof": "2026-10-08",
   "src": "yahoo:^GDAXI"
  },
  "GBR": {
   "v": 5.1,
   "asof": "2026-10-08",
   "src": "yahoo:^FTSE"
  },
  "FRA": {
   "v": -5.2,
   "asof": "2026-10-08",
   "src": "yahoo:^FCHI"
  },
  "ITA": {
   "v": 9.7,
   "asof": "2026-10-08",
   "src": "yahoo:FTSEMIB.MI"
  },
  "CAN": {
   "v": 10.8,
   "asof": "2026-10-08",
   "src": "yahoo:^GSPTSE"
  },
  "BRA": {
   "v": 28.0,
   "asof": "2026-10-08",
   "src": "yahoo:^BVSP"
  },
  "KOR": {
   "v": 57.2,
   "asof": "2026-10-08",
   "src": "yahoo:^KS11"
  },
  "AUS": {
   "v": -0.2,
   "asof": "2026-10-09",
   "src": "yahoo:^AXJO"
  },
  "ESP": {
   "v": 9.4,
   "asof": "2026-10-08",
   "src": "yahoo:^IBEX"
  },
  "MEX": {
   "v": 1.1,
   "asof": "2026-10-08",
   "src": "yahoo:^MXX"
  },
  "IDN": {
   "v": -30.2,
   "asof": "2026-10-09",
   "src": "yahoo:^JKSE"
  },
  "NLD": {
   "v": 17.9,
   "asof": "2026-10-08",
   "src": "yahoo:^AEX"
  },
  "CHE": {
   "v": 2.8,
   "asof": "2026-10-08",
   "src": "yahoo:^SSMI"
  },
  "TWN": {
   "v": 70.3,
   "asof": "2026-10-08",
   "src": "yahoo:^TWII"
  },
  "TUR": {
   "v": 8.5,
   "asof": "2026-10-08",
   "src": "yahoo:XU100.IS"
  },
  "SGP": {
   "v": 15.8,
   "asof": "2026-10-09",
   "src": "yahoo:^STI"
  },
  "HKG": {
   "v": -6.1,
   "asof": "2026-10-09",
   "src": "yahoo:^HSI"
  },
  "SWE": {
   "v": 11.1,
   "asof": "2026-10-08",
   "src": "yahoo:^OMX"
  },
  "ZAF": {
   "v": -7.9,
   "asof": "2026-10-08",
   "src": "yahoo:^J200.JO"
  },
  "ARE": {
   "v": 0.9,
   "asof": "2026-10-08",
   "src": "yahoo:UAE",
   "proxy": "MSCI UAE ETF proxy"
  }
 },
 "failed": [
  "POL",
  "SAU"
 ]
};
