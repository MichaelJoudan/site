/* GENERATED FILE — do not edit by hand.
   Written by tools/fetch_market.py via .github/workflows/update-market.yml.
   Any edit here is overwritten on the next run. Curated fallbacks live in data.js.
   Generated 2026-11-20T03:27Z. */
window.MARKET = {
 "generated": "2026-11-20T03:27Z",
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
    0.92,
    0.78,
    0.08,
    0.2,
    -0.14,
    0.25,
    -0.37,
    0.41,
    0.5,
    0.14,
    -0.9,
    0.53
   ],
   [
    0.92,
    1.0,
    0.86,
    0.22,
    0.27,
    0.01,
    0.15,
    -0.3,
    0.44,
    0.46,
    0.17,
    -0.83,
    0.45
   ],
   [
    0.78,
    0.86,
    1.0,
    0.16,
    0.2,
    -0.12,
    0.2,
    -0.33,
    0.56,
    0.46,
    0.02,
    -0.72,
    0.38
   ],
   [
    0.08,
    0.22,
    0.16,
    1.0,
    0.81,
    0.45,
    -0.29,
    0.3,
    -0.01,
    -0.04,
    0.35,
    -0.1,
    -0.47
   ],
   [
    0.2,
    0.27,
    0.2,
    0.81,
    1.0,
    0.43,
    -0.3,
    0.08,
    0.02,
    0.1,
    0.31,
    -0.25,
    -0.34
   ],
   [
    -0.14,
    0.01,
    -0.12,
    0.45,
    0.43,
    1.0,
    -0.48,
    0.13,
    -0.2,
    -0.24,
    0.4,
    0.1,
    -0.41
   ],
   [
    0.25,
    0.15,
    0.2,
    -0.29,
    -0.3,
    -0.48,
    1.0,
    -0.24,
    0.39,
    0.47,
    -0.04,
    -0.14,
    0.41
   ],
   [
    -0.37,
    -0.3,
    -0.33,
    0.3,
    0.08,
    0.13,
    -0.24,
    1.0,
    -0.28,
    -0.28,
    0.04,
    0.36,
    -0.31
   ],
   [
    0.41,
    0.44,
    0.56,
    -0.01,
    0.02,
    -0.2,
    0.39,
    -0.28,
    1.0,
    0.36,
    -0.0,
    -0.32,
    0.32
   ],
   [
    0.5,
    0.46,
    0.46,
    -0.04,
    0.1,
    -0.24,
    0.47,
    -0.28,
    0.36,
    1.0,
    0.02,
    -0.36,
    0.29
   ],
   [
    0.14,
    0.17,
    0.02,
    0.35,
    0.31,
    0.4,
    -0.04,
    0.04,
    -0.0,
    0.02,
    1.0,
    -0.09,
    -0.05
   ],
   [
    -0.9,
    -0.83,
    -0.72,
    -0.1,
    -0.25,
    0.1,
    -0.14,
    0.36,
    -0.32,
    -0.36,
    -0.09,
    1.0,
    -0.49
   ],
   [
    0.53,
    0.45,
    0.38,
    -0.47,
    -0.34,
    -0.41,
    0.41,
    -0.31,
    0.32,
    0.29,
    -0.05,
    -0.49,
    1.0
   ]
  ],
  "asof": "2026-11-18",
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
   "v": 4.8,
   "asof": "2026-11-19",
   "src": "yahoo:^GSPC"
  },
  "CHN": {
   "v": -16.4,
   "asof": "2026-11-20",
   "src": "yahoo:510300.SS"
  },
  "JPN": {
   "v": 8.8,
   "asof": "2026-11-20",
   "src": "yahoo:1306.T",
   "proxy": "TOPIX tracker"
  },
  "IND": {
   "v": -2.4,
   "asof": "2026-11-19",
   "src": "yahoo:^NSEI"
  },
  "DEU": {
   "v": 4.0,
   "asof": "2026-11-19",
   "src": "yahoo:^GDAXI"
  },
  "GBR": {
   "v": 5.2,
   "asof": "2026-11-19",
   "src": "yahoo:^FTSE"
  },
  "FRA": {
   "v": -0.8,
   "asof": "2026-11-19",
   "src": "yahoo:^FCHI"
  },
  "ITA": {
   "v": 11.1,
   "asof": "2026-11-19",
   "src": "yahoo:FTSEMIB.MI"
  },
  "CAN": {
   "v": 7.3,
   "asof": "2026-11-19",
   "src": "yahoo:^GSPTSE"
  },
  "BRA": {
   "v": 3.3,
   "asof": "2026-11-19",
   "src": "yahoo:^BVSP"
  },
  "KOR": {
   "v": 15.8,
   "asof": "2026-11-20",
   "src": "yahoo:^KS11"
  },
  "AUS": {
   "v": -1.4,
   "asof": "2026-11-20",
   "src": "yahoo:^AXJO"
  },
  "ESP": {
   "v": 10.9,
   "asof": "2026-11-19",
   "src": "yahoo:^IBEX"
  },
  "MEX": {
   "v": 6.9,
   "asof": "2026-11-19",
   "src": "yahoo:^MXX"
  },
  "IDN": {
   "v": -40.2,
   "asof": "2026-11-20",
   "src": "yahoo:^JKSE"
  },
  "NLD": {
   "v": 14.8,
   "asof": "2026-11-19",
   "src": "yahoo:^AEX"
  },
  "CHE": {
   "v": 11.0,
   "asof": "2026-11-19",
   "src": "yahoo:^SSMI"
  },
  "TWN": {
   "v": 24.5,
   "asof": "2026-11-20",
   "src": "yahoo:^TWII"
  },
  "TUR": {
   "v": 1.2,
   "asof": "2026-11-19",
   "src": "yahoo:XU100.IS"
  },
  "SGP": {
   "v": 7.5,
   "asof": "2026-11-20",
   "src": "yahoo:^STI"
  },
  "HKG": {
   "v": -12.8,
   "asof": "2026-11-20",
   "src": "yahoo:^HSI"
  },
  "SWE": {
   "v": 13.0,
   "asof": "2026-11-19",
   "src": "yahoo:^OMX"
  },
  "ZAF": {
   "v": -8.9,
   "asof": "2026-11-19",
   "src": "yahoo:^J200.JO"
  },
  "ARE": {
   "v": 10.9,
   "asof": "2026-11-18",
   "src": "yahoo:UAE",
   "proxy": "MSCI UAE ETF proxy"
  }
 },
 "failed": [
  "POL",
  "SAU"
 ]
};
