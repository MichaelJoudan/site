/* GENERATED FILE — do not edit by hand.
   Written by tools/fetch_market.py via .github/workflows/update-market.yml.
   Any edit here is overwritten on the next run. Curated fallbacks live in data.js.
   Generated 2026-11-11T01:58Z. */
window.MARKET = {
 "generated": "2026-11-11T01:58Z",
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
    0.93,
    0.77,
    -0.03,
    0.15,
    -0.2,
    0.3,
    -0.56,
    0.49,
    0.44,
    -0.1,
    -0.86,
    0.53
   ],
   [
    0.93,
    1.0,
    0.88,
    0.12,
    0.22,
    -0.08,
    0.24,
    -0.46,
    0.55,
    0.42,
    -0.07,
    -0.79,
    0.47
   ],
   [
    0.77,
    0.88,
    1.0,
    0.09,
    0.17,
    -0.19,
    0.26,
    -0.44,
    0.63,
    0.41,
    -0.17,
    -0.7,
    0.39
   ],
   [
    -0.03,
    0.12,
    0.09,
    1.0,
    0.77,
    0.31,
    -0.24,
    0.32,
    -0.03,
    0.0,
    0.22,
    -0.05,
    -0.48
   ],
   [
    0.15,
    0.22,
    0.17,
    0.77,
    1.0,
    0.34,
    -0.23,
    0.05,
    0.05,
    0.16,
    0.22,
    -0.22,
    -0.32
   ],
   [
    -0.2,
    -0.08,
    -0.19,
    0.31,
    0.34,
    1.0,
    -0.4,
    0.07,
    -0.19,
    -0.16,
    0.43,
    0.18,
    -0.38
   ],
   [
    0.3,
    0.24,
    0.26,
    -0.24,
    -0.23,
    -0.4,
    1.0,
    -0.23,
    0.36,
    0.42,
    -0.02,
    -0.21,
    0.4
   ],
   [
    -0.56,
    -0.46,
    -0.44,
    0.32,
    0.05,
    0.07,
    -0.23,
    1.0,
    -0.4,
    -0.29,
    0.07,
    0.43,
    -0.35
   ],
   [
    0.49,
    0.55,
    0.63,
    -0.03,
    0.05,
    -0.19,
    0.36,
    -0.4,
    1.0,
    0.29,
    -0.13,
    -0.42,
    0.37
   ],
   [
    0.44,
    0.42,
    0.41,
    0.0,
    0.16,
    -0.16,
    0.42,
    -0.29,
    0.29,
    1.0,
    0.07,
    -0.35,
    0.28
   ],
   [
    -0.1,
    -0.07,
    -0.17,
    0.22,
    0.22,
    0.43,
    -0.02,
    0.07,
    -0.13,
    0.07,
    1.0,
    0.06,
    -0.06
   ],
   [
    -0.86,
    -0.79,
    -0.7,
    -0.05,
    -0.22,
    0.18,
    -0.21,
    0.43,
    -0.42,
    -0.35,
    0.06,
    1.0,
    -0.5
   ],
   [
    0.53,
    0.47,
    0.39,
    -0.48,
    -0.32,
    -0.38,
    0.4,
    -0.35,
    0.37,
    0.28,
    -0.06,
    -0.5,
    1.0
   ]
  ],
  "asof": "2026-11-09",
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
   "v": 9.9,
   "asof": "2026-11-10",
   "src": "yahoo:^GSPC"
  },
  "CHN": {
   "v": -13.1,
   "asof": "2026-11-11",
   "src": "yahoo:510300.SS"
  },
  "JPN": {
   "v": 15.6,
   "asof": "2026-11-11",
   "src": "yahoo:1306.T",
   "proxy": "TOPIX tracker"
  },
  "IND": {
   "v": -4.2,
   "asof": "2026-11-09",
   "src": "yahoo:^NSEI"
  },
  "DEU": {
   "v": 7.6,
   "asof": "2026-11-10",
   "src": "yahoo:^GDAXI"
  },
  "GBR": {
   "v": 8.3,
   "asof": "2026-11-10",
   "src": "yahoo:^FTSE"
  },
  "FRA": {
   "v": 1.6,
   "asof": "2026-11-10",
   "src": "yahoo:^FCHI"
  },
  "ITA": {
   "v": 15.2,
   "asof": "2026-11-10",
   "src": "yahoo:FTSEMIB.MI"
  },
  "CAN": {
   "v": 14.1,
   "asof": "2026-11-10",
   "src": "yahoo:^GSPTSE"
  },
  "BRA": {
   "v": 6.3,
   "asof": "2026-11-10",
   "src": "yahoo:^BVSP"
  },
  "KOR": {
   "v": 26.0,
   "asof": "2026-11-11",
   "src": "yahoo:^KS11"
  },
  "AUS": {
   "v": 4.6,
   "asof": "2026-11-11",
   "src": "yahoo:^AXJO"
  },
  "ESP": {
   "v": 15.2,
   "asof": "2026-11-10",
   "src": "yahoo:^IBEX"
  },
  "MEX": {
   "v": 11.8,
   "asof": "2026-11-10",
   "src": "yahoo:^MXX"
  },
  "IDN": {
   "v": -40.7,
   "asof": "2026-11-10",
   "src": "yahoo:^JKSE"
  },
  "NLD": {
   "v": 19.0,
   "asof": "2026-11-10",
   "src": "yahoo:^AEX"
  },
  "CHE": {
   "v": 13.3,
   "asof": "2026-11-10",
   "src": "yahoo:^SSMI"
  },
  "TWN": {
   "v": 49.0,
   "asof": "2026-11-11",
   "src": "yahoo:^TWII"
  },
  "TUR": {
   "v": 3.6,
   "asof": "2026-11-10",
   "src": "yahoo:XU100.IS"
  },
  "SGP": {
   "v": 13.2,
   "asof": "2026-11-11",
   "src": "yahoo:^STI"
  },
  "HKG": {
   "v": -5.0,
   "asof": "2026-11-11",
   "src": "yahoo:^HSI"
  },
  "SWE": {
   "v": 15.4,
   "asof": "2026-11-10",
   "src": "yahoo:^OMX"
  },
  "ZAF": {
   "v": -1.1,
   "asof": "2026-11-10",
   "src": "yahoo:^J200.JO"
  },
  "ARE": {
   "v": 6.1,
   "asof": "2026-11-09",
   "src": "yahoo:UAE",
   "proxy": "MSCI UAE ETF proxy"
  }
 },
 "failed": [
  "POL",
  "SAU"
 ]
};
