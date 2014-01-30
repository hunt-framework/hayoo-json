[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Finance-Treasury/docs/Finance-Treasury.html#t:3ADailyYieldCurve",
      "description": {
        "fct-descr": "a Map storing the assoc array of maturity to interest rate (in percent)\n",
        "fct-module": "Finance.Treasury",
        "fct-package": "Finance-Treasury",
        "fct-signature": "type",
        "fct-source": "http://hackage.haskell.org/package/Finance-Treasury/docs/src/Finance-Treasury.html#DailyYieldCurve",
        "fct-type": "unknown",
        "title": "3ADailyYieldCurve"
      },
      "index": {
        "description": "Map storing the assoc array of maturity to interest rate in percent",
        "hierarchy": "Finance Treasury",
        "module": "Finance.Treasury",
        "name": "3ADailyYieldCurve",
        "normalized": "",
        "package": "Finance-Treasury",
        "partial": "ADaily Yield Curve",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Finance-Treasury/docs/Finance-Treasury.html#t:3ADailyYieldCurveList",
      "description": {
        "fct-descr": "a List storing the tuple of maturity and interest rate (in percent)\n",
        "fct-module": "Finance.Treasury",
        "fct-package": "Finance-Treasury",
        "fct-signature": "type",
        "fct-source": "http://hackage.haskell.org/package/Finance-Treasury/docs/src/Finance-Treasury.html#DailyYieldCurveList",
        "fct-type": "unknown",
        "title": "3ADailyYieldCurveList"
      },
      "index": {
        "description": "List storing the tuple of maturity and interest rate in percent",
        "hierarchy": "Finance Treasury",
        "module": "Finance.Treasury",
        "name": "3ADailyYieldCurveList",
        "normalized": "",
        "package": "Finance-Treasury",
        "partial": "ADaily Yield Curve List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Finance-Treasury/docs/Finance-Treasury.html#t:3AYieldCurveMap",
      "description": {
        "fct-descr": "a Map storing all the daily yield curves\n",
        "fct-module": "Finance.Treasury",
        "fct-package": "Finance-Treasury",
        "fct-signature": "type",
        "fct-source": "http://hackage.haskell.org/package/Finance-Treasury/docs/src/Finance-Treasury.html#YieldCurveMap",
        "fct-type": "unknown",
        "title": "3AYieldCurveMap"
      },
      "index": {
        "description": "Map storing all the daily yield curves",
        "hierarchy": "Finance Treasury",
        "module": "Finance.Treasury",
        "name": "3AYieldCurveMap",
        "normalized": "",
        "package": "Finance-Treasury",
        "partial": "AYield Curve Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Finance-Treasury/docs/Finance-Treasury.html#v:3AgetLatestYieldCurve",
      "description": {
        "fct-descr": "fetch the latest daily yield curve from the monthly data.\n",
        "fct-module": "Finance.Treasury",
        "fct-package": "Finance-Treasury",
        "fct-signature": "IO (Day, DailyYieldCurve)",
        "fct-source": "http://hackage.haskell.org/package/Finance-Treasury/docs/src/Finance-Treasury.html#getLatestYieldCurve",
        "fct-type": "unknown",
        "title": "3AgetLatestYieldCurve"
      },
      "index": {
        "description": "fetch the latest daily yield curve from the monthly data",
        "hierarchy": "Finance Treasury",
        "module": "Finance.Treasury",
        "name": "3AgetLatestYieldCurve",
        "normalized": "IO(Day,DailyYieldCurve)",
        "package": "Finance-Treasury",
        "partial": "Aget Latest Yield Curve",
        "signature": "IO(Day,DailyYieldCurve)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Finance-Treasury/docs/Finance-Treasury.html#v:3AgetYieldCurveHist",
      "description": {
        "fct-descr": "fetch the latest yearly data (excluding current month).\n There is no reason to fail, so it is an error if there is no XML returned\n",
        "fct-module": "Finance.Treasury",
        "fct-package": "Finance-Treasury",
        "fct-signature": "IO YieldCurveMap",
        "fct-source": "http://hackage.haskell.org/package/Finance-Treasury/docs/src/Finance-Treasury.html#getYieldCurveHist",
        "fct-type": "unknown",
        "title": "3AgetYieldCurveHist"
      },
      "index": {
        "description": "fetch the latest yearly data excluding current month There is no reason to fail so it is an error if there is no XML returned",
        "hierarchy": "Finance Treasury",
        "module": "Finance.Treasury",
        "name": "3AgetYieldCurveHist",
        "normalized": "",
        "package": "Finance-Treasury",
        "partial": "Aget Yield Curve Hist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Finance-Treasury/docs/Finance-Treasury.html#v:3AgetYieldCurveThisMonth",
      "description": {
        "fct-descr": "fetch the latest monthly data.\n There is no reason to fail, so it is an error if there is no XML returned\n",
        "fct-module": "Finance.Treasury",
        "fct-package": "Finance-Treasury",
        "fct-signature": "IO YieldCurveMap",
        "fct-source": "http://hackage.haskell.org/package/Finance-Treasury/docs/src/Finance-Treasury.html#getYieldCurveThisMonth",
        "fct-type": "unknown",
        "title": "3AgetYieldCurveThisMonth"
      },
      "index": {
        "description": "fetch the latest monthly data There is no reason to fail so it is an error if there is no XML returned",
        "hierarchy": "Finance Treasury",
        "module": "Finance.Treasury",
        "name": "3AgetYieldCurveThisMonth",
        "normalized": "",
        "package": "Finance-Treasury",
        "partial": "Aget Yield Curve This Month",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Finance-Treasury/docs/Finance-Treasury.html#v:3AgetYieldCurveYyyy",
      "description": {
        "fct-descr": "fetch the historical yearly data (excluding current year).\n If YYYY is not in range (since 1992), this call may fail.\n Otherwise, there is no reason to fail.\n",
        "fct-module": "Finance.Treasury",
        "fct-package": "Finance-Treasury",
        "fct-signature": "Int -\u003e IO YieldCurveMap",
        "fct-source": "http://hackage.haskell.org/package/Finance-Treasury/docs/src/Finance-Treasury.html#getYieldCurveYyyy",
        "fct-type": "unknown",
        "title": "3AgetYieldCurveYyyy"
      },
      "index": {
        "description": "fetch the historical yearly data excluding current year If YYYY is not in range since this call may fail Otherwise there is no reason to fail",
        "hierarchy": "Finance Treasury",
        "module": "Finance.Treasury",
        "name": "3AgetYieldCurveYyyy",
        "normalized": "Int-\u003eIO YieldCurveMap",
        "package": "Finance-Treasury",
        "partial": "Aget Yield Curve Yyyy",
        "signature": "Int-\u003eIO YieldCurveMap"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Finance-Treasury/docs/Finance-Treasury.html#v:3AprettyYieldCurve",
      "description": {
        "fct-descr": "print yield curve data in a csv format for storage or testing.\n",
        "fct-module": "Finance.Treasury",
        "fct-package": "Finance-Treasury",
        "fct-signature": "YieldCurveMap -\u003e Maybe String -\u003e IO ()",
        "fct-source": "http://hackage.haskell.org/package/Finance-Treasury/docs/src/Finance-Treasury.html#prettyYieldCurve",
        "fct-type": "unknown",
        "title": "3AprettyYieldCurve"
      },
      "index": {
        "description": "print yield curve data in csv format for storage or testing",
        "hierarchy": "Finance Treasury",
        "module": "Finance.Treasury",
        "name": "3AprettyYieldCurve",
        "normalized": "YieldCurveMap-\u003eMaybe String-\u003eIO()",
        "package": "Finance-Treasury",
        "partial": "Apretty Yield Curve",
        "signature": "YieldCurveMap-\u003eMaybe String-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Finance-Treasury/docs/Finance-Treasury.html#v:3AyieldCurveHash",
      "description": {
        "fct-descr": "translates maturity from XML names to abbreviations.\n E.g. BC_1MONTH becomes 1m.\n List of all maturities: 1m 3m 6m 1y 2y 3y 5y 7y 10y 20y 30y.\n However, 30y data may be lacking for some years when the bond was not in circulation. \n",
        "fct-module": "Finance.Treasury",
        "fct-package": "Finance-Treasury",
        "fct-signature": "Map String String",
        "fct-source": "http://hackage.haskell.org/package/Finance-Treasury/docs/src/Finance-Treasury.html#yieldCurveHash",
        "fct-type": "unknown",
        "title": "3AyieldCurveHash"
      },
      "index": {
        "description": "translates maturity from XML names to abbreviations E.g BC MONTH becomes List of all maturities However data may be lacking for some years when the bond was not in circulation",
        "hierarchy": "Finance Treasury",
        "module": "Finance.Treasury",
        "name": "3AyieldCurveHash",
        "normalized": "",
        "package": "Finance-Treasury",
        "partial": "Ayield Curve Hash",
        "signature": ""
      }
    }
  }
]