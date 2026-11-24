/* GENERATED FILE — do not edit by hand.
   Written by tools/fetch_market.py via .github/workflows/update-market.yml.
   Any edit here is overwritten on the next run. Curated fallbacks live in data.js.
   Generated 2026-11-24T06:08Z. */
window.MARKET = {
 "generated": "2026-11-24T06:08Z",
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
    0.94,
    0.82,
    0.2,
    0.31,
    -0.09,
    0.36,
    -0.37,
    0.45,
    0.54,
    0.1,
    -0.93,
    0.51
   ],
   [
    0.94,
    1.0,
    0.89,
    0.31,
    0.37,
    0.05,
    0.27,
    -0.31,
    0.48,
    0.5,
    0.13,
    -0.86,
    0.44
   ],
   [
    0.82,
    0.89,
    1.0,
    0.27,
    0.3,
    -0.08,
    0.31,
    -0.32,
    0.59,
    0.5,
    0.0,
    -0.77,
    0.38
   ],
   [
    0.2,
    0.31,
    0.27,
    1.0,
    0.83,
    0.45,
    -0.18,
    0.26,
    0.05,
    0.03,
    0.31,
    -0.21,
    -0.43
   ],
   [
    0.31,
    0.37,
    0.3,
    0.83,
    1.0,
    0.42,
    -0.17,
    0.06,
    0.07,
    0.16,
    0.27,
    -0.34,
    -0.3
   ],
   [
    -0.09,
    0.05,
    -0.08,
    0.45,
    0.42,
    1.0,
    -0.43,
    0.15,
    -0.2,
    -0.23,
    0.41,
    0.07,
    -0.4
   ],
   [
    0.36,
    0.27,
    0.31,
    -0.18,
    -0.17,
    -0.43,
    1.0,
    -0.32,
    0.46,
    0.52,
    -0.08,
    -0.28,
    0.42
   ],
   [
    -0.37,
    -0.31,
    -0.32,
    0.26,
    0.06,
    0.15,
    -0.32,
    1.0,
    -0.27,
    -0.28,
    -0.01,
    0.34,
    -0.33
   ],
   [
    0.45,
    0.48,
    0.59,
    0.05,
    0.07,
    -0.2,
    0.46,
    -0.27,
    1.0,
    0.39,
    -0.0,
    -0.36,
    0.33
   ],
   [
    0.54,
    0.5,
    0.5,
    0.03,
    0.16,
    -0.23,
    0.52,
    -0.28,
    0.39,
    1.0,
    0.02,
    -0.41,
    0.31
   ],
   [
    0.1,
    0.13,
    0.0,
    0.31,
    0.27,
    0.41,
    -0.08,
    -0.01,
    -0.0,
    0.02,
    1.0,
    -0.06,
    -0.06
   ],
   [
    -0.93,
    -0.86,
    -0.77,
    -0.21,
    -0.34,
    0.07,
    -0.28,
    0.34,
    -0.36,
    -0.41,
    -0.06,
    1.0,
    -0.48
   ],
   [
    0.51,
    0.44,
    0.38,
    -0.43,
    -0.3,
    -0.4,
    0.42,
    -0.33,
    0.33,
    0.31,
    -0.06,
    -0.48,
    1.0
   ]
  ],
  "asof": "2026-11-20",
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
   "v": 5.7,
   "asof": "2026-11-23",
   "src": "yahoo:^GSPC"
  },
  "CHN": {
   "v": -14.9,
   "asof": "2026-11-24",
   "src": "yahoo:510300.SS"
  },
  "JPN": {
   "v": 11.0,
   "asof": "2026-11-24",
   "src": "yahoo:1306.T",
   "proxy": "TOPIX tracker"
  },
  "IND": {
   "v": -3.0,
   "asof": "2026-11-23",
   "src": "yahoo:^NSEI"
  },
  "DEU": {
   "v": 3.5,
   "asof": "2026-11-23",
   "src": "yahoo:^GDAXI"
  },
  "GBR": {
   "v": 5.5,
   "asof": "2026-11-23",
   "src": "yahoo:^FTSE"
  },
  "FRA": {
   "v": -1.3,
   "asof": "2026-11-23",
   "src": "yahoo:^FCHI"
  },
  "ITA": {
   "v": 9.1,
   "asof": "2026-11-23",
   "src": "yahoo:FTSEMIB.MI"
  },
  "CAN": {
   "v": 7.5,
   "asof": "2026-11-23",
   "src": "yahoo:^GSPTSE"
  },
  "BRA": {
   "v": 2.3,
   "asof": "2026-11-23",
   "src": "yahoo:^BVSP"
  },
  "KOR": {
   "v": 19.8,
   "asof": "2026-11-24",
   "src": "yahoo:^KS11"
  },
  "AUS": {
   "v": 0.1,
   "asof": "2026-11-24",
   "src": "yahoo:^AXJO"
  },
  "ESP": {
   "v": 10.8,
   "asof": "2026-11-23",
   "src": "yahoo:^IBEX"
  },
  "MEX": {
   "v": 7.8,
   "asof": "2026-11-23",
   "src": "yahoo:^MXX"
  },
  "IDN": {
   "v": -39.5,
   "asof": "2026-11-24",
   "src": "yahoo:^JKSE"
  },
  "NLD": {
   "v": 14.5,
   "asof": "2026-11-23",
   "src": "yahoo:^AEX"
  },
  "CHE": {
   "v": 11.1,
   "asof": "2026-11-23",
   "src": "yahoo:^SSMI"
  },
  "TWN": {
   "v": 38.5,
   "asof": "2026-11-24",
   "src": "yahoo:^TWII"
  },
  "TUR": {
   "v": -1.4,
   "asof": "2026-11-23",
   "src": "yahoo:XU100.IS"
  },
  "SGP": {
   "v": 7.5,
   "asof": "2026-11-24",
   "src": "yahoo:^STI"
  },
  "HKG": {
   "v": -13.1,
   "asof": "2026-11-24",
   "src": "yahoo:^HSI"
  },
  "SWE": {
   "v": 13.1,
   "asof": "2026-11-23",
   "src": "yahoo:^OMX"
  },
  "ZAF": {
   "v": -8.6,
   "asof": "2026-11-23",
   "src": "yahoo:^J200.JO"
  },
  "ARE": {
   "v": 11.6,
   "asof": "2026-11-23",
   "src": "yahoo:UAE",
   "proxy": "MSCI UAE ETF proxy"
  }
 },
 "failed": [
  "POL",
  "SAU"
 ]
};
