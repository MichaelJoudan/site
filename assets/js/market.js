/* GENERATED FILE — do not edit by hand.
   Written by tools/fetch_market.py via .github/workflows/update-market.yml.
   Any edit here is overwritten on the next run. Curated fallbacks live in data.js.
   Generated 2026-11-25T04:56Z. */
window.MARKET = {
 "generated": "2026-11-25T04:56Z",
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
    0.26,
    0.01,
    0.46,
    -0.39,
    0.5,
    0.54,
    0.02,
    -0.94,
    0.51
   ],
   [
    0.95,
    1.0,
    0.91,
    0.27,
    0.32,
    0.12,
    0.38,
    -0.34,
    0.52,
    0.51,
    0.06,
    -0.89,
    0.45
   ],
   [
    0.86,
    0.91,
    1.0,
    0.23,
    0.25,
    0.02,
    0.41,
    -0.35,
    0.61,
    0.51,
    -0.06,
    -0.83,
    0.4
   ],
   [
    0.17,
    0.27,
    0.23,
    1.0,
    0.83,
    0.44,
    -0.17,
    0.26,
    0.05,
    0.03,
    0.31,
    -0.18,
    -0.42
   ],
   [
    0.26,
    0.32,
    0.25,
    0.83,
    1.0,
    0.41,
    -0.16,
    0.07,
    0.07,
    0.15,
    0.27,
    -0.3,
    -0.3
   ],
   [
    0.01,
    0.12,
    0.02,
    0.44,
    0.41,
    1.0,
    -0.34,
    0.12,
    -0.15,
    -0.19,
    0.38,
    -0.02,
    -0.37
   ],
   [
    0.46,
    0.38,
    0.41,
    -0.17,
    -0.16,
    -0.34,
    1.0,
    -0.35,
    0.5,
    0.55,
    -0.12,
    -0.38,
    0.43
   ],
   [
    -0.39,
    -0.34,
    -0.35,
    0.26,
    0.07,
    0.12,
    -0.35,
    1.0,
    -0.3,
    -0.3,
    0.01,
    0.37,
    -0.35
   ],
   [
    0.5,
    0.52,
    0.61,
    0.05,
    0.07,
    -0.15,
    0.5,
    -0.3,
    1.0,
    0.41,
    -0.03,
    -0.42,
    0.35
   ],
   [
    0.54,
    0.51,
    0.51,
    0.03,
    0.15,
    -0.19,
    0.55,
    -0.3,
    0.41,
    1.0,
    -0.01,
    -0.44,
    0.32
   ],
   [
    0.02,
    0.06,
    -0.06,
    0.31,
    0.27,
    0.38,
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
    -0.83,
    -0.18,
    -0.3,
    -0.02,
    -0.38,
    0.37,
    -0.42,
    -0.44,
    0.01,
    1.0,
    -0.48
   ],
   [
    0.51,
    0.45,
    0.4,
    -0.42,
    -0.3,
    -0.37,
    0.43,
    -0.35,
    0.35,
    0.32,
    -0.08,
    -0.48,
    1.0
   ]
  ],
  "asof": "2026-11-23",
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
   "v": 5.2,
   "asof": "2026-11-24",
   "src": "yahoo:^GSPC"
  },
  "CHN": {
   "v": -15.8,
   "asof": "2026-11-25",
   "src": "yahoo:510300.SS"
  },
  "JPN": {
   "v": 10.1,
   "asof": "2026-11-25",
   "src": "yahoo:1306.T",
   "proxy": "TOPIX tracker"
  },
  "IND": {
   "v": -1.3,
   "asof": "2026-11-25",
   "src": "yahoo:^NSEI"
  },
  "DEU": {
   "v": 2.2,
   "asof": "2026-11-24",
   "src": "yahoo:^GDAXI"
  },
  "GBR": {
   "v": 5.4,
   "asof": "2026-11-24",
   "src": "yahoo:^FTSE"
  },
  "FRA": {
   "v": -1.3,
   "asof": "2026-11-24",
   "src": "yahoo:^FCHI"
  },
  "ITA": {
   "v": 7.1,
   "asof": "2026-11-24",
   "src": "yahoo:FTSEMIB.MI"
  },
  "CAN": {
   "v": 7.1,
   "asof": "2026-11-24",
   "src": "yahoo:^GSPTSE"
  },
  "BRA": {
   "v": 1.8,
   "asof": "2026-11-24",
   "src": "yahoo:^BVSP"
  },
  "KOR": {
   "v": 12.0,
   "asof": "2026-11-25",
   "src": "yahoo:^KS11"
  },
  "AUS": {
   "v": -0.3,
   "asof": "2026-11-25",
   "src": "yahoo:^AXJO"
  },
  "ESP": {
   "v": 9.9,
   "asof": "2026-11-24",
   "src": "yahoo:^IBEX"
  },
  "MEX": {
   "v": 7.8,
   "asof": "2026-11-24",
   "src": "yahoo:^MXX"
  },
  "IDN": {
   "v": -39.7,
   "asof": "2026-11-25",
   "src": "yahoo:^JKSE"
  },
  "NLD": {
   "v": 13.3,
   "asof": "2026-11-24",
   "src": "yahoo:^AEX"
  },
  "CHE": {
   "v": 11.1,
   "asof": "2026-11-24",
   "src": "yahoo:^SSMI"
  },
  "TWN": {
   "v": 31.2,
   "asof": "2026-11-25",
   "src": "yahoo:^TWII"
  },
  "TUR": {
   "v": -2.6,
   "asof": "2026-11-24",
   "src": "yahoo:XU100.IS"
  },
  "SGP": {
   "v": 6.6,
   "asof": "2026-11-25",
   "src": "yahoo:^STI"
  },
  "HKG": {
   "v": -13.1,
   "asof": "2026-11-25",
   "src": "yahoo:^HSI"
  },
  "SWE": {
   "v": 11.5,
   "asof": "2026-11-24",
   "src": "yahoo:^OMX"
  },
  "ZAF": {
   "v": -8.9,
   "asof": "2026-11-24",
   "src": "yahoo:^J200.JO"
  },
  "ARE": {
   "v": 13.2,
   "asof": "2026-11-24",
   "src": "yahoo:UAE",
   "proxy": "MSCI UAE ETF proxy"
  }
 },
 "failed": [
  "POL",
  "SAU"
 ]
};
