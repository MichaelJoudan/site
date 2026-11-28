/* GENERATED FILE — do not edit by hand.
   Written by tools/fetch_market.py via .github/workflows/update-market.yml.
   Any edit here is overwritten on the next run. Curated fallbacks live in data.js.
   Generated 2026-11-28T03:58Z. */
window.MARKET = {
 "generated": "2026-11-28T03:58Z",
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
    0.18,
    0.28,
    0.02,
    0.46,
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
    0.29,
    0.34,
    0.15,
    0.39,
    -0.34,
    0.53,
    0.52,
    0.05,
    -0.89,
    0.44
   ],
   [
    0.86,
    0.92,
    1.0,
    0.24,
    0.27,
    0.04,
    0.42,
    -0.36,
    0.61,
    0.52,
    -0.07,
    -0.82,
    0.39
   ],
   [
    0.18,
    0.29,
    0.24,
    1.0,
    0.82,
    0.44,
    -0.16,
    0.23,
    0.06,
    0.02,
    0.3,
    -0.19,
    -0.42
   ],
   [
    0.28,
    0.34,
    0.27,
    0.82,
    1.0,
    0.41,
    -0.16,
    0.05,
    0.07,
    0.15,
    0.28,
    -0.3,
    -0.29
   ],
   [
    0.02,
    0.15,
    0.04,
    0.44,
    0.41,
    1.0,
    -0.3,
    0.08,
    -0.07,
    -0.17,
    0.36,
    -0.02,
    -0.36
   ],
   [
    0.46,
    0.39,
    0.42,
    -0.16,
    -0.16,
    -0.3,
    1.0,
    -0.37,
    0.52,
    0.55,
    -0.12,
    -0.37,
    0.43
   ],
   [
    -0.39,
    -0.34,
    -0.36,
    0.23,
    0.05,
    0.08,
    -0.37,
    1.0,
    -0.31,
    -0.3,
    0.02,
    0.38,
    -0.33
   ],
   [
    0.48,
    0.53,
    0.61,
    0.06,
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
    0.02,
    0.15,
    -0.17,
    0.55,
    -0.3,
    0.42,
    1.0,
    -0.0,
    -0.43,
    0.33
   ],
   [
    0.02,
    0.05,
    -0.07,
    0.3,
    0.28,
    0.36,
    -0.12,
    0.02,
    -0.03,
    -0.0,
    1.0,
    0.01,
    -0.08
   ],
   [
    -0.94,
    -0.89,
    -0.82,
    -0.19,
    -0.3,
    -0.02,
    -0.37,
    0.38,
    -0.39,
    -0.43,
    0.01,
    1.0,
    -0.48
   ],
   [
    0.5,
    0.44,
    0.39,
    -0.42,
    -0.29,
    -0.36,
    0.43,
    -0.33,
    0.34,
    0.33,
    -0.08,
    -0.48,
    1.0
   ]
  ],
  "asof": "2026-11-25",
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
   "v": 6.6,
   "asof": "2026-11-27",
   "src": "yahoo:^GSPC"
  },
  "CHN": {
   "v": -16.7,
   "asof": "2026-11-26",
   "src": "yahoo:510300.SS"
  },
  "JPN": {
   "v": 12.2,
   "asof": "2026-11-27",
   "src": "yahoo:1306.T",
   "proxy": "TOPIX tracker"
  },
  "IND": {
   "v": -2.0,
   "asof": "2026-11-27",
   "src": "yahoo:^NSEI"
  },
  "DEU": {
   "v": 3.9,
   "asof": "2026-11-27",
   "src": "yahoo:^GDAXI"
  },
  "GBR": {
   "v": 7.7,
   "asof": "2026-11-27",
   "src": "yahoo:^FTSE"
  },
  "FRA": {
   "v": 0.1,
   "asof": "2026-11-27",
   "src": "yahoo:^FCHI"
  },
  "ITA": {
   "v": 9.6,
   "asof": "2026-11-27",
   "src": "yahoo:FTSEMIB.MI"
  },
  "CAN": {
   "v": 9.9,
   "asof": "2026-11-27",
   "src": "yahoo:^GSPTSE"
  },
  "BRA": {
   "v": 9.6,
   "asof": "2026-11-27",
   "src": "yahoo:^BVSP"
  },
  "KOR": {
   "v": 16.6,
   "asof": "2026-11-27",
   "src": "yahoo:^KS11"
  },
  "AUS": {
   "v": 1.4,
   "asof": "2026-11-27",
   "src": "yahoo:^AXJO"
  },
  "ESP": {
   "v": 12.0,
   "asof": "2026-11-27",
   "src": "yahoo:^IBEX"
  },
  "MEX": {
   "v": 11.4,
   "asof": "2026-11-27",
   "src": "yahoo:^MXX"
  },
  "IDN": {
   "v": -38.3,
   "asof": "2026-11-27",
   "src": "yahoo:^JKSE"
  },
  "NLD": {
   "v": 15.3,
   "asof": "2026-11-27",
   "src": "yahoo:^AEX"
  },
  "CHE": {
   "v": 12.2,
   "asof": "2026-11-27",
   "src": "yahoo:^SSMI"
  },
  "TWN": {
   "v": 35.7,
   "asof": "2026-11-27",
   "src": "yahoo:^TWII"
  },
  "TUR": {
   "v": -2.5,
   "asof": "2026-11-27",
   "src": "yahoo:XU100.IS"
  },
  "SGP": {
   "v": 7.5,
   "asof": "2026-11-27",
   "src": "yahoo:^STI"
  },
  "HKG": {
   "v": -11.5,
   "asof": "2026-11-27",
   "src": "yahoo:^HSI"
  },
  "SWE": {
   "v": 14.4,
   "asof": "2026-11-27",
   "src": "yahoo:^OMX"
  },
  "ZAF": {
   "v": -6.6,
   "asof": "2026-11-27",
   "src": "yahoo:^J200.JO"
  },
  "ARE": {
   "v": 16.1,
   "asof": "2026-11-27",
   "src": "yahoo:UAE",
   "proxy": "MSCI UAE ETF proxy"
  }
 },
 "failed": [
  "POL",
  "SAU"
 ]
};
