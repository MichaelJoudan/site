/* GENERATED FILE — do not edit by hand.
   Written by tools/fetch_market.py via .github/workflows/update-market.yml.
   Any edit here is overwritten on the next run. Curated fallbacks live in data.js.
   Generated 2026-11-13T02:40Z. */
window.MARKET = {
 "generated": "2026-11-13T02:40Z",
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
    0.78,
    -0.04,
    0.12,
    -0.2,
    0.31,
    -0.56,
    0.49,
    0.44,
    -0.1,
    -0.85,
    0.53
   ],
   [
    0.93,
    1.0,
    0.88,
    0.1,
    0.19,
    -0.1,
    0.24,
    -0.48,
    0.55,
    0.42,
    -0.07,
    -0.79,
    0.48
   ],
   [
    0.78,
    0.88,
    1.0,
    0.06,
    0.13,
    -0.2,
    0.26,
    -0.47,
    0.64,
    0.42,
    -0.17,
    -0.71,
    0.42
   ],
   [
    -0.04,
    0.1,
    0.06,
    1.0,
    0.78,
    0.34,
    -0.28,
    0.29,
    -0.07,
    -0.02,
    0.21,
    -0.06,
    -0.49
   ],
   [
    0.12,
    0.19,
    0.13,
    0.78,
    1.0,
    0.38,
    -0.28,
    0.01,
    -0.01,
    0.11,
    0.2,
    -0.22,
    -0.35
   ],
   [
    -0.2,
    -0.1,
    -0.2,
    0.34,
    0.38,
    1.0,
    -0.43,
    0.05,
    -0.22,
    -0.18,
    0.42,
    0.16,
    -0.4
   ],
   [
    0.31,
    0.24,
    0.26,
    -0.28,
    -0.28,
    -0.43,
    1.0,
    -0.24,
    0.38,
    0.43,
    -0.01,
    -0.2,
    0.42
   ],
   [
    -0.56,
    -0.48,
    -0.47,
    0.29,
    0.01,
    0.05,
    -0.24,
    1.0,
    -0.4,
    -0.29,
    0.08,
    0.44,
    -0.33
   ],
   [
    0.49,
    0.55,
    0.64,
    -0.07,
    -0.01,
    -0.22,
    0.38,
    -0.4,
    1.0,
    0.3,
    -0.12,
    -0.41,
    0.39
   ],
   [
    0.44,
    0.42,
    0.42,
    -0.02,
    0.11,
    -0.18,
    0.43,
    -0.29,
    0.3,
    1.0,
    0.07,
    -0.35,
    0.29
   ],
   [
    -0.1,
    -0.07,
    -0.17,
    0.21,
    0.2,
    0.42,
    -0.01,
    0.08,
    -0.12,
    0.07,
    1.0,
    0.06,
    -0.06
   ],
   [
    -0.85,
    -0.79,
    -0.71,
    -0.06,
    -0.22,
    0.16,
    -0.2,
    0.44,
    -0.41,
    -0.35,
    0.06,
    1.0,
    -0.49
   ],
   [
    0.53,
    0.48,
    0.42,
    -0.49,
    -0.35,
    -0.4,
    0.42,
    -0.33,
    0.39,
    0.29,
    -0.06,
    -0.49,
    1.0
   ]
  ],
  "asof": "2026-11-10",
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
   "v": 10.9,
   "asof": "2026-11-12",
   "src": "yahoo:^GSPC"
  },
  "CHN": {
   "v": -13.4,
   "asof": "2026-11-13",
   "src": "yahoo:510300.SS"
  },
  "JPN": {
   "v": 16.5,
   "asof": "2026-11-13",
   "src": "yahoo:1306.T",
   "proxy": "TOPIX tracker"
  },
  "IND": {
   "v": -3.2,
   "asof": "2026-11-12",
   "src": "yahoo:^NSEI"
  },
  "DEU": {
   "v": 9.3,
   "asof": "2026-11-12",
   "src": "yahoo:^GDAXI"
  },
  "GBR": {
   "v": 9.4,
   "asof": "2026-11-12",
   "src": "yahoo:^FTSE"
  },
  "FRA": {
   "v": 2.6,
   "asof": "2026-11-12",
   "src": "yahoo:^FCHI"
  },
  "ITA": {
   "v": 15.3,
   "asof": "2026-11-12",
   "src": "yahoo:FTSEMIB.MI"
  },
  "CAN": {
   "v": 14.0,
   "asof": "2026-11-12",
   "src": "yahoo:^GSPTSE"
  },
  "BRA": {
   "v": 6.3,
   "asof": "2026-11-12",
   "src": "yahoo:^BVSP"
  },
  "KOR": {
   "v": 28.7,
   "asof": "2026-11-13",
   "src": "yahoo:^KS11"
  },
  "AUS": {
   "v": 4.3,
   "asof": "2026-11-13",
   "src": "yahoo:^AXJO"
  },
  "ESP": {
   "v": 15.4,
   "asof": "2026-11-12",
   "src": "yahoo:^IBEX"
  },
  "MEX": {
   "v": 11.7,
   "asof": "2026-11-12",
   "src": "yahoo:^MXX"
  },
  "IDN": {
   "v": -38.7,
   "asof": "2026-11-13",
   "src": "yahoo:^JKSE"
  },
  "NLD": {
   "v": 19.8,
   "asof": "2026-11-12",
   "src": "yahoo:^AEX"
  },
  "CHE": {
   "v": 14.2,
   "asof": "2026-11-12",
   "src": "yahoo:^SSMI"
  },
  "TWN": {
   "v": 52.6,
   "asof": "2026-11-13",
   "src": "yahoo:^TWII"
  },
  "TUR": {
   "v": 4.9,
   "asof": "2026-11-12",
   "src": "yahoo:XU100.IS"
  },
  "SGP": {
   "v": 12.7,
   "asof": "2026-11-13",
   "src": "yahoo:^STI"
  },
  "HKG": {
   "v": -6.9,
   "asof": "2026-11-13",
   "src": "yahoo:^HSI"
  },
  "SWE": {
   "v": 16.5,
   "asof": "2026-11-12",
   "src": "yahoo:^OMX"
  },
  "ZAF": {
   "v": -2.8,
   "asof": "2026-11-12",
   "src": "yahoo:^J200.JO"
  },
  "ARE": {
   "v": 10.4,
   "asof": "2026-11-12",
   "src": "yahoo:UAE",
   "proxy": "MSCI UAE ETF proxy"
  }
 },
 "failed": [
  "POL",
  "SAU"
 ]
};
