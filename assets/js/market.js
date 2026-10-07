/* GENERATED FILE — do not edit by hand.
   Written by tools/fetch_market.py via .github/workflows/update-market.yml.
   Any edit here is overwritten on the next run. Curated fallbacks live in data.js.
   Generated 2026-10-07T01:37Z. */
window.MARKET = {
 "generated": "2026-10-07T01:37Z",
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
    -0.2,
    -0.3,
    0.33,
    -0.52,
    0.5,
    0.33,
    -0.28,
    -0.79,
    0.53
   ],
   [
    0.87,
    1.0,
    0.85,
    -0.27,
    -0.12,
    -0.25,
    0.29,
    -0.34,
    0.59,
    0.32,
    -0.19,
    -0.67,
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
    -0.57,
    0.43
   ],
   [
    -0.38,
    -0.27,
    -0.27,
    1.0,
    0.81,
    0.3,
    -0.27,
    0.57,
    -0.21,
    -0.17,
    0.18,
    0.4,
    -0.66
   ],
   [
    -0.2,
    -0.12,
    -0.14,
    0.81,
    1.0,
    0.38,
    -0.35,
    0.39,
    -0.16,
    -0.03,
    0.22,
    0.24,
    -0.49
   ],
   [
    -0.3,
    -0.25,
    -0.35,
    0.3,
    0.38,
    1.0,
    -0.42,
    0.02,
    -0.31,
    -0.22,
    0.63,
    0.38,
    -0.48
   ],
   [
    0.33,
    0.29,
    0.3,
    -0.27,
    -0.35,
    -0.42,
    1.0,
    -0.11,
    0.45,
    0.48,
    -0.17,
    -0.38,
    0.4
   ],
   [
    -0.52,
    -0.34,
    -0.21,
    0.57,
    0.39,
    0.02,
    -0.11,
    1.0,
    -0.24,
    -0.17,
    0.18,
    0.46,
    -0.44
   ],
   [
    0.5,
    0.59,
    0.61,
    -0.21,
    -0.16,
    -0.31,
    0.45,
    -0.24,
    1.0,
    0.28,
    -0.22,
    -0.48,
    0.51
   ],
   [
    0.33,
    0.32,
    0.31,
    -0.17,
    -0.03,
    -0.22,
    0.48,
    -0.17,
    0.28,
    1.0,
    -0.02,
    -0.24,
    0.28
   ],
   [
    -0.28,
    -0.19,
    -0.22,
    0.18,
    0.22,
    0.63,
    -0.17,
    0.18,
    -0.22,
    -0.02,
    1.0,
    0.32,
    -0.21
   ],
   [
    -0.79,
    -0.67,
    -0.57,
    0.4,
    0.24,
    0.38,
    -0.38,
    0.46,
    -0.48,
    -0.24,
    0.32,
    1.0,
    -0.56
   ],
   [
    0.53,
    0.46,
    0.43,
    -0.66,
    -0.49,
    -0.48,
    0.4,
    -0.44,
    0.51,
    0.28,
    -0.21,
    -0.56,
    1.0
   ]
  ],
  "asof": "2026-10-05",
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
   "v": 14.2,
   "asof": "2026-10-06",
   "src": "yahoo:^GSPC"
  },
  "CHN": {
   "v": -6.8,
   "asof": "2026-09-30",
   "src": "yahoo:510300.SS"
  },
  "JPN": {
   "v": 22.9,
   "asof": "2026-10-07",
   "src": "yahoo:1306.T",
   "proxy": "TOPIX tracker"
  },
  "IND": {
   "v": -12.8,
   "asof": "2026-10-06",
   "src": "yahoo:^NSEI"
  },
  "DEU": {
   "v": 3.9,
   "asof": "2026-10-06",
   "src": "yahoo:^GDAXI"
  },
  "GBR": {
   "v": 6.1,
   "asof": "2026-10-06",
   "src": "yahoo:^FTSE"
  },
  "FRA": {
   "v": -3.5,
   "asof": "2026-10-06",
   "src": "yahoo:^FCHI"
  },
  "ITA": {
   "v": 14.1,
   "asof": "2026-10-06",
   "src": "yahoo:FTSEMIB.MI"
  },
  "CAN": {
   "v": 12.4,
   "asof": "2026-10-06",
   "src": "yahoo:^GSPTSE"
  },
  "BRA": {
   "v": 27.7,
   "asof": "2026-10-06",
   "src": "yahoo:^BVSP"
  },
  "KOR": {
   "v": 64.0,
   "asof": "2026-10-07",
   "src": "yahoo:^KS11"
  },
  "AUS": {
   "v": 0.2,
   "asof": "2026-10-07",
   "src": "yahoo:^AXJO"
  },
  "ESP": {
   "v": 12.3,
   "asof": "2026-10-06",
   "src": "yahoo:^IBEX"
  },
  "MEX": {
   "v": 1.6,
   "asof": "2026-10-06",
   "src": "yahoo:^MXX"
  },
  "IDN": {
   "v": -28.4,
   "asof": "2026-10-06",
   "src": "yahoo:^JKSE"
  },
  "NLD": {
   "v": 18.6,
   "asof": "2026-10-06",
   "src": "yahoo:^AEX"
  },
  "CHE": {
   "v": 3.9,
   "asof": "2026-10-06",
   "src": "yahoo:^SSMI"
  },
  "TWN": {
   "v": 72.3,
   "asof": "2026-10-07",
   "src": "yahoo:^TWII"
  },
  "TUR": {
   "v": 9.9,
   "asof": "2026-10-06",
   "src": "yahoo:XU100.IS"
  },
  "SGP": {
   "v": 21.8,
   "asof": "2026-10-07",
   "src": "yahoo:^STI"
  },
  "HKG": {
   "v": -5.3,
   "asof": "2026-10-06",
   "src": "yahoo:^HSI"
  },
  "SWE": {
   "v": 13.9,
   "asof": "2026-10-06",
   "src": "yahoo:^OMX"
  },
  "ZAF": {
   "v": -6.3,
   "asof": "2026-10-06",
   "src": "yahoo:^J200.JO"
  },
  "ARE": {
   "v": 3.2,
   "asof": "2026-10-06",
   "src": "yahoo:UAE",
   "proxy": "MSCI UAE ETF proxy"
  }
 },
 "failed": [
  "POL",
  "SAU"
 ]
};
