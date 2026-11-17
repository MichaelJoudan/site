/* GENERATED FILE — do not edit by hand.
   Written by tools/fetch_market.py via .github/workflows/update-market.yml.
   Any edit here is overwritten on the next run. Curated fallbacks live in data.js.
   Generated 2026-11-17T04:34Z. */
window.MARKET = {
 "generated": "2026-11-17T04:34Z",
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
    0.01,
    0.13,
    -0.16,
    0.24,
    -0.5,
    0.45,
    0.43,
    0.01,
    -0.84,
    0.5
   ],
   [
    0.93,
    1.0,
    0.86,
    0.15,
    0.21,
    -0.0,
    0.16,
    -0.41,
    0.51,
    0.41,
    0.08,
    -0.77,
    0.44
   ],
   [
    0.77,
    0.86,
    1.0,
    0.1,
    0.13,
    -0.12,
    0.2,
    -0.43,
    0.6,
    0.41,
    -0.03,
    -0.68,
    0.38
   ],
   [
    0.01,
    0.15,
    0.1,
    1.0,
    0.82,
    0.46,
    -0.33,
    0.3,
    -0.09,
    -0.08,
    0.3,
    -0.08,
    -0.5
   ],
   [
    0.13,
    0.21,
    0.13,
    0.82,
    1.0,
    0.45,
    -0.34,
    0.08,
    -0.03,
    0.06,
    0.27,
    -0.22,
    -0.38
   ],
   [
    -0.16,
    -0.0,
    -0.12,
    0.46,
    0.45,
    1.0,
    -0.48,
    0.16,
    -0.19,
    -0.23,
    0.39,
    0.12,
    -0.42
   ],
   [
    0.24,
    0.16,
    0.2,
    -0.33,
    -0.34,
    -0.48,
    1.0,
    -0.28,
    0.36,
    0.44,
    -0.03,
    -0.16,
    0.42
   ],
   [
    -0.5,
    -0.41,
    -0.43,
    0.3,
    0.08,
    0.16,
    -0.28,
    1.0,
    -0.39,
    -0.31,
    0.12,
    0.39,
    -0.32
   ],
   [
    0.45,
    0.51,
    0.6,
    -0.09,
    -0.03,
    -0.19,
    0.36,
    -0.39,
    1.0,
    0.32,
    -0.05,
    -0.37,
    0.36
   ],
   [
    0.43,
    0.41,
    0.41,
    -0.08,
    0.06,
    -0.23,
    0.44,
    -0.31,
    0.32,
    1.0,
    0.05,
    -0.34,
    0.29
   ],
   [
    0.01,
    0.08,
    -0.03,
    0.3,
    0.27,
    0.39,
    -0.03,
    0.12,
    -0.05,
    0.05,
    1.0,
    -0.04,
    -0.02
   ],
   [
    -0.84,
    -0.77,
    -0.68,
    -0.08,
    -0.22,
    0.12,
    -0.16,
    0.39,
    -0.37,
    -0.34,
    -0.04,
    1.0,
    -0.46
   ],
   [
    0.5,
    0.44,
    0.38,
    -0.5,
    -0.38,
    -0.42,
    0.42,
    -0.32,
    0.36,
    0.29,
    -0.02,
    -0.46,
    1.0
   ]
  ],
  "asof": "2026-11-13",
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
   "v": 8.3,
   "asof": "2026-11-16",
   "src": "yahoo:^GSPC"
  },
  "CHN": {
   "v": -14.7,
   "asof": "2026-11-17",
   "src": "yahoo:510300.SS"
  },
  "JPN": {
   "v": 12.8,
   "asof": "2026-11-17",
   "src": "yahoo:1306.T",
   "proxy": "TOPIX tracker"
  },
  "IND": {
   "v": -2.9,
   "asof": "2026-11-17",
   "src": "yahoo:^NSEI"
  },
  "DEU": {
   "v": 8.6,
   "asof": "2026-11-16",
   "src": "yahoo:^GDAXI"
  },
  "GBR": {
   "v": 9.6,
   "asof": "2026-11-16",
   "src": "yahoo:^FTSE"
  },
  "FRA": {
   "v": 2.5,
   "asof": "2026-11-16",
   "src": "yahoo:^FCHI"
  },
  "ITA": {
   "v": 14.6,
   "asof": "2026-11-16",
   "src": "yahoo:FTSEMIB.MI"
  },
  "CAN": {
   "v": 12.6,
   "asof": "2026-11-16",
   "src": "yahoo:^GSPTSE"
  },
  "BRA": {
   "v": 5.1,
   "asof": "2026-11-16",
   "src": "yahoo:^BVSP"
  },
  "KOR": {
   "v": 18.5,
   "asof": "2026-11-17",
   "src": "yahoo:^KS11"
  },
  "AUS": {
   "v": 2.1,
   "asof": "2026-11-17",
   "src": "yahoo:^AXJO"
  },
  "ESP": {
   "v": 15.2,
   "asof": "2026-11-16",
   "src": "yahoo:^IBEX"
  },
  "MEX": {
   "v": 10.7,
   "asof": "2026-11-13",
   "src": "yahoo:^MXX"
  },
  "IDN": {
   "v": -38.0,
   "asof": "2026-11-17",
   "src": "yahoo:^JKSE"
  },
  "NLD": {
   "v": 19.2,
   "asof": "2026-11-16",
   "src": "yahoo:^AEX"
  },
  "CHE": {
   "v": 14.5,
   "asof": "2026-11-16",
   "src": "yahoo:^SSMI"
  },
  "TWN": {
   "v": 38.9,
   "asof": "2026-11-17",
   "src": "yahoo:^TWII"
  },
  "TUR": {
   "v": 5.2,
   "asof": "2026-11-16",
   "src": "yahoo:XU100.IS"
  },
  "SGP": {
   "v": 10.5,
   "asof": "2026-11-17",
   "src": "yahoo:^STI"
  },
  "HKG": {
   "v": -8.0,
   "asof": "2026-11-17",
   "src": "yahoo:^HSI"
  },
  "SWE": {
   "v": 15.9,
   "asof": "2026-11-16",
   "src": "yahoo:^OMX"
  },
  "ZAF": {
   "v": -4.0,
   "asof": "2026-11-16",
   "src": "yahoo:^J200.JO"
  },
  "ARE": {
   "v": 9.2,
   "asof": "2026-11-16",
   "src": "yahoo:UAE",
   "proxy": "MSCI UAE ETF proxy"
  }
 },
 "failed": [
  "POL",
  "SAU"
 ]
};
