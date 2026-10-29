/* GENERATED FILE — do not edit by hand.
   Written by tools/fetch_market.py via .github/workflows/update-market.yml.
   Any edit here is overwritten on the next run. Curated fallbacks live in data.js.
   Generated 2026-10-29T01:51Z. */
window.MARKET = {
 "generated": "2026-10-29T01:51Z",
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
    0.88,
    0.66,
    -0.25,
    -0.14,
    -0.24,
    0.37,
    -0.57,
    0.48,
    0.38,
    -0.22,
    -0.79,
    0.52
   ],
   [
    0.88,
    1.0,
    0.85,
    -0.08,
    -0.05,
    -0.15,
    0.35,
    -0.43,
    0.56,
    0.4,
    -0.15,
    -0.71,
    0.45
   ],
   [
    0.66,
    0.85,
    1.0,
    -0.09,
    -0.09,
    -0.27,
    0.38,
    -0.34,
    0.61,
    0.4,
    -0.22,
    -0.61,
    0.39
   ],
   [
    -0.25,
    -0.08,
    -0.09,
    1.0,
    0.81,
    0.36,
    -0.27,
    0.43,
    -0.09,
    -0.09,
    0.24,
    0.22,
    -0.63
   ],
   [
    -0.14,
    -0.05,
    -0.09,
    0.81,
    1.0,
    0.43,
    -0.32,
    0.29,
    -0.07,
    0.03,
    0.27,
    0.13,
    -0.47
   ],
   [
    -0.24,
    -0.15,
    -0.27,
    0.36,
    0.43,
    1.0,
    -0.42,
    0.02,
    -0.15,
    -0.21,
    0.58,
    0.29,
    -0.43
   ],
   [
    0.37,
    0.35,
    0.38,
    -0.27,
    -0.32,
    -0.42,
    1.0,
    -0.16,
    0.37,
    0.48,
    -0.08,
    -0.43,
    0.43
   ],
   [
    -0.57,
    -0.43,
    -0.34,
    0.43,
    0.29,
    0.02,
    -0.16,
    1.0,
    -0.33,
    -0.2,
    0.17,
    0.49,
    -0.43
   ],
   [
    0.48,
    0.56,
    0.61,
    -0.09,
    -0.07,
    -0.15,
    0.37,
    -0.33,
    1.0,
    0.29,
    -0.14,
    -0.49,
    0.43
   ],
   [
    0.38,
    0.4,
    0.4,
    -0.09,
    0.03,
    -0.21,
    0.48,
    -0.2,
    0.29,
    1.0,
    0.04,
    -0.29,
    0.25
   ],
   [
    -0.22,
    -0.15,
    -0.22,
    0.24,
    0.27,
    0.58,
    -0.08,
    0.17,
    -0.14,
    0.04,
    1.0,
    0.24,
    -0.16
   ],
   [
    -0.79,
    -0.71,
    -0.61,
    0.22,
    0.13,
    0.29,
    -0.43,
    0.49,
    -0.49,
    -0.29,
    0.24,
    1.0,
    -0.56
   ],
   [
    0.52,
    0.45,
    0.39,
    -0.63,
    -0.47,
    -0.43,
    0.43,
    -0.43,
    0.43,
    0.25,
    -0.16,
    -0.56,
    1.0
   ]
  ],
  "asof": "2026-10-27",
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
   "v": 13.1,
   "asof": "2026-10-28",
   "src": "yahoo:^GSPC"
  },
  "CHN": {
   "v": -13.3,
   "asof": "2026-10-29",
   "src": "yahoo:510300.SS"
  },
  "JPN": {
   "v": 17.4,
   "asof": "2026-10-29",
   "src": "yahoo:1306.T",
   "proxy": "TOPIX tracker"
  },
  "IND": {
   "v": -13.1,
   "asof": "2026-10-28",
   "src": "yahoo:^NSEI"
  },
  "DEU": {
   "v": 5.0,
   "asof": "2026-10-28",
   "src": "yahoo:^GDAXI"
  },
  "GBR": {
   "v": 7.7,
   "asof": "2026-10-28",
   "src": "yahoo:^FTSE"
  },
  "FRA": {
   "v": -3.2,
   "asof": "2026-10-28",
   "src": "yahoo:^FCHI"
  },
  "ITA": {
   "v": 10.9,
   "asof": "2026-10-28",
   "src": "yahoo:FTSEMIB.MI"
  },
  "CAN": {
   "v": 14.4,
   "asof": "2026-10-28",
   "src": "yahoo:^GSPTSE"
  },
  "BRA": {
   "v": 6.1,
   "asof": "2026-10-28",
   "src": "yahoo:^BVSP"
  },
  "KOR": {
   "v": 39.2,
   "asof": "2026-10-29",
   "src": "yahoo:^KS11"
  },
  "AUS": {
   "v": 1.8,
   "asof": "2026-10-29",
   "src": "yahoo:^AXJO"
  },
  "ESP": {
   "v": 9.1,
   "asof": "2026-10-28",
   "src": "yahoo:^IBEX"
  },
  "MEX": {
   "v": 7.6,
   "asof": "2026-10-28",
   "src": "yahoo:^MXX"
  },
  "IDN": {
   "v": -38.9,
   "asof": "2026-10-28",
   "src": "yahoo:^JKSE"
  },
  "NLD": {
   "v": 19.4,
   "asof": "2026-10-28",
   "src": "yahoo:^AEX"
  },
  "CHE": {
   "v": 9.9,
   "asof": "2026-10-28",
   "src": "yahoo:^SSMI"
  },
  "TWN": {
   "v": 60.8,
   "asof": "2026-10-29",
   "src": "yahoo:^TWII"
  },
  "TUR": {
   "v": -0.9,
   "asof": "2026-10-28",
   "src": "yahoo:XU100.IS"
  },
  "SGP": {
   "v": 16.6,
   "asof": "2026-10-29",
   "src": "yahoo:^STI"
  },
  "HKG": {
   "v": -9.8,
   "asof": "2026-10-29",
   "src": "yahoo:^HSI"
  },
  "SWE": {
   "v": 13.3,
   "asof": "2026-10-28",
   "src": "yahoo:^OMX"
  },
  "ZAF": {
   "v": -5.9,
   "asof": "2026-10-28",
   "src": "yahoo:^J200.JO"
  },
  "ARE": {
   "v": 1.6,
   "asof": "2026-10-28",
   "src": "yahoo:UAE",
   "proxy": "MSCI UAE ETF proxy"
  }
 },
 "failed": [
  "POL",
  "SAU"
 ]
};
