/* GENERATED FILE — do not edit by hand.
   Written by tools/fetch_market.py via .github/workflows/update-market.yml.
   Any edit here is overwritten on the next run. Curated fallbacks live in data.js.
   Generated 2026-11-18T03:44Z. */
window.MARKET = {
 "generated": "2026-11-18T03:44Z",
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
    0.79,
    0.02,
    0.16,
    -0.15,
    0.26,
    -0.41,
    0.46,
    0.5,
    0.14,
    -0.86,
    0.55
   ],
   [
    0.93,
    1.0,
    0.87,
    0.16,
    0.23,
    -0.0,
    0.17,
    -0.34,
    0.51,
    0.46,
    0.17,
    -0.78,
    0.47
   ],
   [
    0.79,
    0.87,
    1.0,
    0.11,
    0.16,
    -0.12,
    0.21,
    -0.36,
    0.6,
    0.45,
    0.02,
    -0.7,
    0.4
   ],
   [
    0.02,
    0.16,
    0.11,
    1.0,
    0.82,
    0.46,
    -0.33,
    0.32,
    -0.08,
    -0.05,
    0.34,
    -0.1,
    -0.49
   ],
   [
    0.16,
    0.23,
    0.16,
    0.82,
    1.0,
    0.44,
    -0.33,
    0.11,
    -0.01,
    0.09,
    0.3,
    -0.24,
    -0.36
   ],
   [
    -0.15,
    -0.0,
    -0.12,
    0.46,
    0.44,
    1.0,
    -0.48,
    0.15,
    -0.19,
    -0.24,
    0.4,
    0.12,
    -0.42
   ],
   [
    0.26,
    0.17,
    0.21,
    -0.33,
    -0.33,
    -0.48,
    1.0,
    -0.28,
    0.36,
    0.44,
    -0.04,
    -0.17,
    0.42
   ],
   [
    -0.41,
    -0.34,
    -0.36,
    0.32,
    0.11,
    0.15,
    -0.28,
    1.0,
    -0.35,
    -0.29,
    0.03,
    0.34,
    -0.33
   ],
   [
    0.46,
    0.51,
    0.6,
    -0.08,
    -0.01,
    -0.19,
    0.36,
    -0.35,
    1.0,
    0.34,
    -0.01,
    -0.38,
    0.38
   ],
   [
    0.5,
    0.46,
    0.45,
    -0.05,
    0.09,
    -0.24,
    0.44,
    -0.29,
    0.34,
    1.0,
    0.02,
    -0.38,
    0.3
   ],
   [
    0.14,
    0.17,
    0.02,
    0.34,
    0.3,
    0.4,
    -0.04,
    0.03,
    -0.01,
    0.02,
    1.0,
    -0.08,
    -0.05
   ],
   [
    -0.86,
    -0.78,
    -0.7,
    -0.1,
    -0.24,
    0.12,
    -0.17,
    0.34,
    -0.38,
    -0.38,
    -0.08,
    1.0,
    -0.48
   ],
   [
    0.55,
    0.47,
    0.4,
    -0.49,
    -0.36,
    -0.42,
    0.42,
    -0.33,
    0.38,
    0.3,
    -0.05,
    -0.48,
    1.0
   ]
  ],
  "asof": "2026-11-16",
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
   "v": 7.2,
   "asof": "2026-11-17",
   "src": "yahoo:^GSPC"
  },
  "CHN": {
   "v": -15.1,
   "asof": "2026-11-18",
   "src": "yahoo:510300.SS"
  },
  "JPN": {
   "v": 12.0,
   "asof": "2026-11-18",
   "src": "yahoo:1306.T",
   "proxy": "TOPIX tracker"
  },
  "IND": {
   "v": -3.1,
   "asof": "2026-11-18",
   "src": "yahoo:^NSEI"
  },
  "DEU": {
   "v": 6.3,
   "asof": "2026-11-17",
   "src": "yahoo:^GDAXI"
  },
  "GBR": {
   "v": 7.6,
   "asof": "2026-11-17",
   "src": "yahoo:^FTSE"
  },
  "FRA": {
   "v": 0.8,
   "asof": "2026-11-17",
   "src": "yahoo:^FCHI"
  },
  "ITA": {
   "v": 13.1,
   "asof": "2026-11-17",
   "src": "yahoo:FTSEMIB.MI"
  },
  "CAN": {
   "v": 11.4,
   "asof": "2026-11-17",
   "src": "yahoo:^GSPTSE"
  },
  "BRA": {
   "v": 5.4,
   "asof": "2026-11-17",
   "src": "yahoo:^BVSP"
  },
  "KOR": {
   "v": 18.3,
   "asof": "2026-11-18",
   "src": "yahoo:^KS11"
  },
  "AUS": {
   "v": 1.4,
   "asof": "2026-11-18",
   "src": "yahoo:^AXJO"
  },
  "ESP": {
   "v": 13.4,
   "asof": "2026-11-17",
   "src": "yahoo:^IBEX"
  },
  "MEX": {
   "v": 9.5,
   "asof": "2026-11-17",
   "src": "yahoo:^MXX"
  },
  "IDN": {
   "v": -38.4,
   "asof": "2026-11-18",
   "src": "yahoo:^JKSE"
  },
  "NLD": {
   "v": 16.7,
   "asof": "2026-11-17",
   "src": "yahoo:^AEX"
  },
  "CHE": {
   "v": 12.9,
   "asof": "2026-11-17",
   "src": "yahoo:^SSMI"
  },
  "TWN": {
   "v": 37.9,
   "asof": "2026-11-18",
   "src": "yahoo:^TWII"
  },
  "TUR": {
   "v": 3.5,
   "asof": "2026-11-17",
   "src": "yahoo:XU100.IS"
  },
  "SGP": {
   "v": 8.7,
   "asof": "2026-11-18",
   "src": "yahoo:^STI"
  },
  "HKG": {
   "v": -9.2,
   "asof": "2026-11-18",
   "src": "yahoo:^HSI"
  },
  "SWE": {
   "v": 14.0,
   "asof": "2026-11-17",
   "src": "yahoo:^OMX"
  },
  "ZAF": {
   "v": -4.8,
   "asof": "2026-11-17",
   "src": "yahoo:^J200.JO"
  },
  "ARE": {
   "v": 10.5,
   "asof": "2026-11-17",
   "src": "yahoo:UAE",
   "proxy": "MSCI UAE ETF proxy"
  }
 },
 "failed": [
  "POL",
  "SAU"
 ]
};
