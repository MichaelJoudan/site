/* GENERATED FILE — do not edit by hand.
   Written by tools/fetch_market.py via .github/workflows/update-market.yml.
   Any edit here is overwritten on the next run. Curated fallbacks live in data.js.
   Generated 2026-10-24T00:46Z. */
window.MARKET = {
 "generated": "2026-10-24T00:46Z",
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
    -0.16,
    -0.26,
    0.38,
    -0.57,
    0.49,
    0.39,
    -0.24,
    -0.79,
    0.53
   ],
   [
    0.88,
    1.0,
    0.85,
    -0.09,
    -0.07,
    -0.19,
    0.35,
    -0.44,
    0.55,
    0.41,
    -0.17,
    -0.7,
    0.43
   ],
   [
    0.66,
    0.85,
    1.0,
    -0.1,
    -0.1,
    -0.3,
    0.37,
    -0.32,
    0.59,
    0.4,
    -0.23,
    -0.6,
    0.37
   ],
   [
    -0.25,
    -0.09,
    -0.1,
    1.0,
    0.81,
    0.36,
    -0.27,
    0.43,
    -0.12,
    -0.08,
    0.24,
    0.23,
    -0.66
   ],
   [
    -0.16,
    -0.07,
    -0.1,
    0.81,
    1.0,
    0.43,
    -0.33,
    0.3,
    -0.11,
    0.03,
    0.26,
    0.16,
    -0.51
   ],
   [
    -0.26,
    -0.19,
    -0.3,
    0.36,
    0.43,
    1.0,
    -0.42,
    0.02,
    -0.2,
    -0.2,
    0.57,
    0.33,
    -0.51
   ],
   [
    0.38,
    0.35,
    0.37,
    -0.27,
    -0.33,
    -0.42,
    1.0,
    -0.19,
    0.4,
    0.49,
    -0.09,
    -0.45,
    0.44
   ],
   [
    -0.57,
    -0.44,
    -0.32,
    0.43,
    0.3,
    0.02,
    -0.19,
    1.0,
    -0.37,
    -0.21,
    0.18,
    0.51,
    -0.44
   ],
   [
    0.49,
    0.55,
    0.59,
    -0.12,
    -0.11,
    -0.2,
    0.4,
    -0.37,
    1.0,
    0.33,
    -0.18,
    -0.49,
    0.41
   ],
   [
    0.39,
    0.41,
    0.4,
    -0.08,
    0.03,
    -0.2,
    0.49,
    -0.21,
    0.33,
    1.0,
    0.04,
    -0.31,
    0.27
   ],
   [
    -0.24,
    -0.17,
    -0.23,
    0.24,
    0.26,
    0.57,
    -0.09,
    0.18,
    -0.18,
    0.04,
    1.0,
    0.27,
    -0.2
   ],
   [
    -0.79,
    -0.7,
    -0.6,
    0.23,
    0.16,
    0.33,
    -0.45,
    0.51,
    -0.49,
    -0.31,
    0.27,
    1.0,
    -0.55
   ],
   [
    0.53,
    0.43,
    0.37,
    -0.66,
    -0.51,
    -0.51,
    0.44,
    -0.44,
    0.41,
    0.27,
    -0.2,
    -0.55,
    1.0
   ]
  ],
  "asof": "2026-10-22",
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
   "v": 11.4,
   "asof": "2026-10-23",
   "src": "yahoo:^GSPC"
  },
  "CHN": {
   "v": -13.6,
   "asof": "2026-10-22",
   "src": "yahoo:510300.SS"
  },
  "JPN": {
   "v": 16.3,
   "asof": "2026-10-23",
   "src": "yahoo:1306.T",
   "proxy": "TOPIX tracker"
  },
  "IND": {
   "v": -13.2,
   "asof": "2026-10-22",
   "src": "yahoo:^NSEI"
  },
  "DEU": {
   "v": 3.6,
   "asof": "2026-10-22",
   "src": "yahoo:^GDAXI"
  },
  "GBR": {
   "v": 8.0,
   "asof": "2026-10-22",
   "src": "yahoo:^FTSE"
  },
  "FRA": {
   "v": -4.2,
   "asof": "2026-10-22",
   "src": "yahoo:^FCHI"
  },
  "ITA": {
   "v": 7.7,
   "asof": "2026-10-22",
   "src": "yahoo:FTSEMIB.MI"
  },
  "CAN": {
   "v": 12.9,
   "asof": "2026-10-23",
   "src": "yahoo:^GSPTSE"
  },
  "BRA": {
   "v": 27.3,
   "asof": "2026-10-23",
   "src": "yahoo:^BVSP"
  },
  "KOR": {
   "v": 31.3,
   "asof": "2026-10-22",
   "src": "yahoo:^KS11"
  },
  "AUS": {
   "v": 0.9,
   "asof": "2026-10-23",
   "src": "yahoo:^AXJO"
  },
  "ESP": {
   "v": 9.3,
   "asof": "2026-10-22",
   "src": "yahoo:^IBEX"
  },
  "MEX": {
   "v": 8.7,
   "asof": "2026-10-23",
   "src": "yahoo:^MXX"
  },
  "IDN": {
   "v": -37.7,
   "asof": "2026-10-22",
   "src": "yahoo:^JKSE"
  },
  "NLD": {
   "v": 18.8,
   "asof": "2026-10-22",
   "src": "yahoo:^AEX"
  },
  "CHE": {
   "v": 9.7,
   "asof": "2026-10-22",
   "src": "yahoo:^SSMI"
  },
  "TWN": {
   "v": 59.0,
   "asof": "2026-10-22",
   "src": "yahoo:^TWII"
  },
  "TUR": {
   "v": -0.4,
   "asof": "2026-10-22",
   "src": "yahoo:XU100.IS"
  },
  "SGP": {
   "v": 16.5,
   "asof": "2026-10-22",
   "src": "yahoo:^STI"
  },
  "HKG": {
   "v": -10.5,
   "asof": "2026-10-22",
   "src": "yahoo:^HSI"
  },
  "SWE": {
   "v": 9.7,
   "asof": "2026-10-22",
   "src": "yahoo:^OMX"
  },
  "ZAF": {
   "v": -6.9,
   "asof": "2026-10-22",
   "src": "yahoo:^J200.JO"
  },
  "ARE": {
   "v": 0.8,
   "asof": "2026-10-22",
   "src": "yahoo:UAE",
   "proxy": "MSCI UAE ETF proxy"
  }
 },
 "failed": [
  "POL",
  "SAU"
 ]
};
