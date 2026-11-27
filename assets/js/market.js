/* GENERATED FILE — do not edit by hand.
   Written by tools/fetch_market.py via .github/workflows/update-market.yml.
   Any edit here is overwritten on the next run. Curated fallbacks live in data.js.
   Generated 2026-11-27T04:27Z. */
window.MARKET = {
 "generated": "2026-11-27T04:27Z",
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
    0.95,
    0.86,
    0.17,
    0.27,
    0.01,
    0.45,
    -0.39,
    0.48,
    0.54,
    0.02,
    -0.94,
    0.5
   ],
   [
    0.95,
    1.0,
    0.92,
    0.28,
    0.32,
    0.14,
    0.38,
    -0.35,
    0.53,
    0.52,
    0.05,
    -0.89,
    0.45
   ],
   [
    0.86,
    0.92,
    1.0,
    0.24,
    0.26,
    0.04,
    0.42,
    -0.36,
    0.61,
    0.52,
    -0.06,
    -0.82,
    0.39
   ],
   [
    0.17,
    0.28,
    0.24,
    1.0,
    0.83,
    0.44,
    -0.16,
    0.26,
    0.05,
    0.03,
    0.31,
    -0.18,
    -0.42
   ],
   [
    0.27,
    0.32,
    0.26,
    0.83,
    1.0,
    0.41,
    -0.16,
    0.07,
    0.07,
    0.15,
    0.28,
    -0.3,
    -0.29
   ],
   [
    0.01,
    0.14,
    0.04,
    0.44,
    0.41,
    1.0,
    -0.3,
    0.1,
    -0.07,
    -0.17,
    0.37,
    -0.01,
    -0.36
   ],
   [
    0.45,
    0.38,
    0.42,
    -0.16,
    -0.16,
    -0.3,
    1.0,
    -0.36,
    0.52,
    0.55,
    -0.12,
    -0.37,
    0.43
   ],
   [
    -0.39,
    -0.35,
    -0.36,
    0.26,
    0.07,
    0.1,
    -0.36,
    1.0,
    -0.31,
    -0.31,
    0.01,
    0.37,
    -0.35
   ],
   [
    0.48,
    0.53,
    0.61,
    0.05,
    0.07,
    -0.07,
    0.52,
    -0.31,
    1.0,
    0.42,
    -0.03,
    -0.39,
    0.34
   ],
   [
    0.54,
    0.52,
    0.52,
    0.03,
    0.15,
    -0.17,
    0.55,
    -0.31,
    0.42,
    1.0,
    -0.01,
    -0.44,
    0.33
   ],
   [
    0.02,
    0.05,
    -0.06,
    0.31,
    0.28,
    0.37,
    -0.12,
    0.01,
    -0.03,
    -0.01,
    1.0,
    0.01,
    -0.08
   ],
   [
    -0.94,
    -0.89,
    -0.82,
    -0.18,
    -0.3,
    -0.01,
    -0.37,
    0.37,
    -0.39,
    -0.44,
    0.01,
    1.0,
    -0.48
   ],
   [
    0.5,
    0.45,
    0.39,
    -0.42,
    -0.29,
    -0.36,
    0.43,
    -0.35,
    0.34,
    0.33,
    -0.08,
    -0.48,
    1.0
   ]
  ],
  "asof": "2026-11-24",
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
   "v": 4.9,
   "asof": "2026-11-25",
   "src": "yahoo:^GSPC"
  },
  "CHN": {
   "v": -16.2,
   "asof": "2026-11-27",
   "src": "yahoo:510300.SS"
  },
  "JPN": {
   "v": 12.3,
   "asof": "2026-11-27",
   "src": "yahoo:1306.T",
   "proxy": "TOPIX tracker"
  },
  "IND": {
   "v": -1.1,
   "asof": "2026-11-27",
   "src": "yahoo:^NSEI"
  },
  "DEU": {
   "v": 3.0,
   "asof": "2026-11-26",
   "src": "yahoo:^GDAXI"
  },
  "GBR": {
   "v": 6.8,
   "asof": "2026-11-26",
   "src": "yahoo:^FTSE"
  },
  "FRA": {
   "v": -0.5,
   "asof": "2026-11-26",
   "src": "yahoo:^FCHI"
  },
  "ITA": {
   "v": 7.6,
   "asof": "2026-11-26",
   "src": "yahoo:FTSEMIB.MI"
  },
  "CAN": {
   "v": 8.6,
   "asof": "2026-11-26",
   "src": "yahoo:^GSPTSE"
  },
  "BRA": {
   "v": 9.7,
   "asof": "2026-11-26",
   "src": "yahoo:^BVSP"
  },
  "KOR": {
   "v": 15.8,
   "asof": "2026-11-27",
   "src": "yahoo:^KS11"
  },
  "AUS": {
   "v": 1.4,
   "asof": "2026-11-27",
   "src": "yahoo:^AXJO"
  },
  "ESP": {
   "v": 10.1,
   "asof": "2026-11-26",
   "src": "yahoo:^IBEX"
  },
  "MEX": {
   "v": 9.4,
   "asof": "2026-11-26",
   "src": "yahoo:^MXX"
  },
  "IDN": {
   "v": -39.1,
   "asof": "2026-11-27",
   "src": "yahoo:^JKSE"
  },
  "NLD": {
   "v": 13.9,
   "asof": "2026-11-26",
   "src": "yahoo:^AEX"
  },
  "CHE": {
   "v": 11.7,
   "asof": "2026-11-26",
   "src": "yahoo:^SSMI"
  },
  "TWN": {
   "v": 35.7,
   "asof": "2026-11-27",
   "src": "yahoo:^TWII"
  },
  "TUR": {
   "v": -4.6,
   "asof": "2026-11-26",
   "src": "yahoo:XU100.IS"
  },
  "SGP": {
   "v": 7.0,
   "asof": "2026-11-27",
   "src": "yahoo:^STI"
  },
  "HKG": {
   "v": -12.5,
   "asof": "2026-11-27",
   "src": "yahoo:^HSI"
  },
  "SWE": {
   "v": 12.8,
   "asof": "2026-11-26",
   "src": "yahoo:^OMX"
  },
  "ZAF": {
   "v": -8.7,
   "asof": "2026-11-26",
   "src": "yahoo:^J200.JO"
  },
  "ARE": {
   "v": 15.4,
   "asof": "2026-11-25",
   "src": "yahoo:UAE",
   "proxy": "MSCI UAE ETF proxy"
  }
 },
 "failed": [
  "POL",
  "SAU"
 ]
};
