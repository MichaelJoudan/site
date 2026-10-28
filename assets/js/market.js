/* GENERATED FILE — do not edit by hand.
   Written by tools/fetch_market.py via .github/workflows/update-market.yml.
   Any edit here is overwritten on the next run. Curated fallbacks live in data.js.
   Generated 2026-10-28T01:27Z. */
window.MARKET = {
 "generated": "2026-10-28T01:27Z",
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
    0.37,
    -0.57,
    0.49,
    0.38,
    -0.24,
    -0.79,
    0.52
   ],
   [
    0.88,
    1.0,
    0.84,
    -0.08,
    -0.07,
    -0.17,
    0.35,
    -0.44,
    0.57,
    0.4,
    -0.17,
    -0.71,
    0.44
   ],
   [
    0.66,
    0.84,
    1.0,
    -0.1,
    -0.1,
    -0.3,
    0.38,
    -0.34,
    0.61,
    0.41,
    -0.23,
    -0.61,
    0.38
   ],
   [
    -0.25,
    -0.08,
    -0.1,
    1.0,
    0.81,
    0.37,
    -0.28,
    0.43,
    -0.1,
    -0.09,
    0.25,
    0.23,
    -0.65
   ],
   [
    -0.16,
    -0.07,
    -0.1,
    0.81,
    1.0,
    0.43,
    -0.33,
    0.31,
    -0.1,
    0.03,
    0.26,
    0.15,
    -0.5
   ],
   [
    -0.26,
    -0.17,
    -0.3,
    0.37,
    0.43,
    1.0,
    -0.43,
    0.03,
    -0.18,
    -0.22,
    0.57,
    0.31,
    -0.49
   ],
   [
    0.37,
    0.35,
    0.38,
    -0.28,
    -0.33,
    -0.43,
    1.0,
    -0.17,
    0.37,
    0.48,
    -0.09,
    -0.44,
    0.44
   ],
   [
    -0.57,
    -0.44,
    -0.34,
    0.43,
    0.31,
    0.03,
    -0.17,
    1.0,
    -0.33,
    -0.21,
    0.18,
    0.49,
    -0.43
   ],
   [
    0.49,
    0.57,
    0.61,
    -0.1,
    -0.1,
    -0.18,
    0.37,
    -0.33,
    1.0,
    0.29,
    -0.16,
    -0.49,
    0.42
   ],
   [
    0.38,
    0.4,
    0.41,
    -0.09,
    0.03,
    -0.22,
    0.48,
    -0.21,
    0.29,
    1.0,
    0.04,
    -0.3,
    0.26
   ],
   [
    -0.24,
    -0.17,
    -0.23,
    0.25,
    0.26,
    0.57,
    -0.09,
    0.18,
    -0.16,
    0.04,
    1.0,
    0.26,
    -0.2
   ],
   [
    -0.79,
    -0.71,
    -0.61,
    0.23,
    0.15,
    0.31,
    -0.44,
    0.49,
    -0.49,
    -0.3,
    0.26,
    1.0,
    -0.56
   ],
   [
    0.52,
    0.44,
    0.38,
    -0.65,
    -0.5,
    -0.49,
    0.44,
    -0.43,
    0.42,
    0.26,
    -0.2,
    -0.56,
    1.0
   ]
  ],
  "asof": "2026-10-26",
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
   "v": 12.8,
   "asof": "2026-10-27",
   "src": "yahoo:^GSPC"
  },
  "CHN": {
   "v": -12.1,
   "asof": "2026-10-26",
   "src": "yahoo:510300.SS"
  },
  "JPN": {
   "v": 17.8,
   "asof": "2026-10-28",
   "src": "yahoo:1306.T",
   "proxy": "TOPIX tracker"
  },
  "IND": {
   "v": -12.9,
   "asof": "2026-10-26",
   "src": "yahoo:^NSEI"
  },
  "DEU": {
   "v": 3.8,
   "asof": "2026-10-26",
   "src": "yahoo:^GDAXI"
  },
  "GBR": {
   "v": 8.4,
   "asof": "2026-10-26",
   "src": "yahoo:^FTSE"
  },
  "FRA": {
   "v": -3.7,
   "asof": "2026-10-26",
   "src": "yahoo:^FCHI"
  },
  "ITA": {
   "v": 9.4,
   "asof": "2026-10-26",
   "src": "yahoo:FTSEMIB.MI"
  },
  "CAN": {
   "v": 14.1,
   "asof": "2026-10-27",
   "src": "yahoo:^GSPTSE"
  },
  "BRA": {
   "v": 9.1,
   "asof": "2026-10-27",
   "src": "yahoo:^BVSP"
  },
  "KOR": {
   "v": 40.4,
   "asof": "2026-10-28",
   "src": "yahoo:^KS11"
  },
  "AUS": {
   "v": 2.0,
   "asof": "2026-10-28",
   "src": "yahoo:^AXJO"
  },
  "ESP": {
   "v": 10.0,
   "asof": "2026-10-26",
   "src": "yahoo:^IBEX"
  },
  "MEX": {
   "v": 8.4,
   "asof": "2026-10-27",
   "src": "yahoo:^MXX"
  },
  "IDN": {
   "v": -37.9,
   "asof": "2026-10-26",
   "src": "yahoo:^JKSE"
  },
  "NLD": {
   "v": 19.1,
   "asof": "2026-10-26",
   "src": "yahoo:^AEX"
  },
  "CHE": {
   "v": 9.6,
   "asof": "2026-10-26",
   "src": "yahoo:^SSMI"
  },
  "TWN": {
   "v": 61.3,
   "asof": "2026-10-28",
   "src": "yahoo:^TWII"
  },
  "TUR": {
   "v": -1.0,
   "asof": "2026-10-26",
   "src": "yahoo:XU100.IS"
  },
  "SGP": {
   "v": 16.5,
   "asof": "2026-10-28",
   "src": "yahoo:^STI"
  },
  "HKG": {
   "v": -9.4,
   "asof": "2026-10-26",
   "src": "yahoo:^HSI"
  },
  "SWE": {
   "v": 11.9,
   "asof": "2026-10-26",
   "src": "yahoo:^OMX"
  },
  "ZAF": {
   "v": -6.5,
   "asof": "2026-10-26",
   "src": "yahoo:^J200.JO"
  },
  "ARE": {
   "v": 0.3,
   "asof": "2026-10-26",
   "src": "yahoo:UAE",
   "proxy": "MSCI UAE ETF proxy"
  }
 },
 "failed": [
  "POL",
  "SAU"
 ]
};
