/* GENERATED FILE — do not edit by hand.
   Written by tools/fetch_market.py via .github/workflows/update-market.yml.
   Any edit here is overwritten on the next run. Curated fallbacks live in data.js.
   Generated 2026-11-06T02:33Z. */
window.MARKET = {
 "generated": "2026-11-06T02:33Z",
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
    0.89,
    0.68,
    -0.18,
    -0.08,
    -0.19,
    0.43,
    -0.53,
    0.46,
    0.42,
    -0.19,
    -0.79,
    0.56
   ],
   [
    0.89,
    1.0,
    0.83,
    0.03,
    0.05,
    -0.07,
    0.33,
    -0.35,
    0.53,
    0.4,
    -0.14,
    -0.68,
    0.46
   ],
   [
    0.68,
    0.83,
    1.0,
    0.02,
    0.02,
    -0.23,
    0.33,
    -0.3,
    0.61,
    0.39,
    -0.22,
    -0.55,
    0.36
   ],
   [
    -0.18,
    0.03,
    0.02,
    1.0,
    0.78,
    0.33,
    -0.23,
    0.41,
    -0.1,
    -0.03,
    0.22,
    0.15,
    -0.53
   ],
   [
    -0.08,
    0.05,
    0.02,
    0.78,
    1.0,
    0.39,
    -0.23,
    0.21,
    -0.06,
    0.1,
    0.24,
    0.08,
    -0.42
   ],
   [
    -0.19,
    -0.07,
    -0.23,
    0.33,
    0.39,
    1.0,
    -0.4,
    0.03,
    -0.17,
    -0.19,
    0.56,
    0.25,
    -0.38
   ],
   [
    0.43,
    0.33,
    0.33,
    -0.23,
    -0.23,
    -0.4,
    1.0,
    -0.25,
    0.39,
    0.45,
    -0.06,
    -0.47,
    0.41
   ],
   [
    -0.53,
    -0.35,
    -0.3,
    0.41,
    0.21,
    0.03,
    -0.25,
    1.0,
    -0.38,
    -0.22,
    0.12,
    0.44,
    -0.33
   ],
   [
    0.46,
    0.53,
    0.61,
    -0.1,
    -0.06,
    -0.17,
    0.39,
    -0.38,
    1.0,
    0.27,
    -0.18,
    -0.42,
    0.36
   ],
   [
    0.42,
    0.4,
    0.39,
    -0.03,
    0.1,
    -0.19,
    0.45,
    -0.22,
    0.27,
    1.0,
    0.06,
    -0.34,
    0.28
   ],
   [
    -0.19,
    -0.14,
    -0.22,
    0.22,
    0.24,
    0.56,
    -0.06,
    0.12,
    -0.18,
    0.06,
    1.0,
    0.18,
    -0.1
   ],
   [
    -0.79,
    -0.68,
    -0.55,
    0.15,
    0.08,
    0.25,
    -0.47,
    0.44,
    -0.42,
    -0.34,
    0.18,
    1.0,
    -0.64
   ],
   [
    0.56,
    0.46,
    0.36,
    -0.53,
    -0.42,
    -0.38,
    0.41,
    -0.33,
    0.36,
    0.28,
    -0.1,
    -0.64,
    1.0
   ]
  ],
  "asof": "2026-11-04",
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
   "v": 7.4,
   "asof": "2026-11-05",
   "src": "yahoo:^GSPC"
  },
  "CHN": {
   "v": -13.2,
   "asof": "2026-11-06",
   "src": "yahoo:510300.SS"
  },
  "JPN": {
   "v": 9.2,
   "asof": "2026-11-06",
   "src": "yahoo:1306.T",
   "proxy": "TOPIX tracker"
  },
  "IND": {
   "v": -6.1,
   "asof": "2026-11-05",
   "src": "yahoo:^NSEI"
  },
  "DEU": {
   "v": 7.5,
   "asof": "2026-11-05",
   "src": "yahoo:^GDAXI"
  },
  "GBR": {
   "v": 8.6,
   "asof": "2026-11-05",
   "src": "yahoo:^FTSE"
  },
  "FRA": {
   "v": 0.7,
   "asof": "2026-11-05",
   "src": "yahoo:^FCHI"
  },
  "ITA": {
   "v": 12.4,
   "asof": "2026-11-05",
   "src": "yahoo:FTSEMIB.MI"
  },
  "CAN": {
   "v": 12.3,
   "asof": "2026-11-05",
   "src": "yahoo:^GSPTSE"
  },
  "BRA": {
   "v": 3.1,
   "asof": "2026-11-05",
   "src": "yahoo:^BVSP"
  },
  "KOR": {
   "v": 21.5,
   "asof": "2026-11-06",
   "src": "yahoo:^KS11"
  },
  "AUS": {
   "v": 3.0,
   "asof": "2026-11-06",
   "src": "yahoo:^AXJO"
  },
  "ESP": {
   "v": 12.6,
   "asof": "2026-11-05",
   "src": "yahoo:^IBEX"
  },
  "MEX": {
   "v": 10.5,
   "asof": "2026-11-05",
   "src": "yahoo:^MXX"
  },
  "IDN": {
   "v": -42.8,
   "asof": "2026-11-06",
   "src": "yahoo:^JKSE"
  },
  "NLD": {
   "v": 18.7,
   "asof": "2026-11-05",
   "src": "yahoo:^AEX"
  },
  "CHE": {
   "v": 12.8,
   "asof": "2026-11-05",
   "src": "yahoo:^SSMI"
  },
  "TWN": {
   "v": 35.4,
   "asof": "2026-11-06",
   "src": "yahoo:^TWII"
  },
  "TUR": {
   "v": 0.6,
   "asof": "2026-11-05",
   "src": "yahoo:XU100.IS"
  },
  "SGP": {
   "v": 11.5,
   "asof": "2026-11-06",
   "src": "yahoo:^STI"
  },
  "HKG": {
   "v": -4.0,
   "asof": "2026-11-06",
   "src": "yahoo:^HSI"
  },
  "SWE": {
   "v": 14.5,
   "asof": "2026-11-05",
   "src": "yahoo:^OMX"
  },
  "ZAF": {
   "v": -2.5,
   "asof": "2026-11-05",
   "src": "yahoo:^J200.JO"
  },
  "ARE": {
   "v": 2.8,
   "asof": "2026-11-05",
   "src": "yahoo:UAE",
   "proxy": "MSCI UAE ETF proxy"
  }
 },
 "failed": [
  "POL",
  "SAU"
 ]
};
