[
  {
    "cmd": "delete-by-query",
    "query": {
      "contexts": [
        "package"
      ],
      "query": {
        "op": "case",
        "type": "word",
        "word": "Finance-Treasury"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "a Map storing the assoc array of maturity to interest rate (in percent)\n",
          "module": "Finance.Treasury",
          "name": "3ADailyYieldCurve",
          "package": "Finance-Treasury",
          "source": "http://hackage.haskell.org/package/Finance-Treasury/docs/src/Finance-Treasury.html#DailyYieldCurve",
          "type": "type"
        },
        "index": {
          "description": "Map storing the assoc array of maturity to interest rate in percent",
          "hierarchy": "Finance Treasury",
          "module": "Finance.Treasury",
          "name": "3ADailyYieldCurve",
          "package": "Finance-Treasury",
          "partial": "ADaily Yield Curve",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Finance-Treasury/docs/Finance-Treasury.html#t:3ADailyYieldCurve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "a List storing the tuple of maturity and interest rate (in percent)\n",
          "module": "Finance.Treasury",
          "name": "3ADailyYieldCurveList",
          "package": "Finance-Treasury",
          "source": "http://hackage.haskell.org/package/Finance-Treasury/docs/src/Finance-Treasury.html#DailyYieldCurveList",
          "type": "type"
        },
        "index": {
          "description": "List storing the tuple of maturity and interest rate in percent",
          "hierarchy": "Finance Treasury",
          "module": "Finance.Treasury",
          "name": "3ADailyYieldCurveList",
          "package": "Finance-Treasury",
          "partial": "ADaily Yield Curve List",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Finance-Treasury/docs/Finance-Treasury.html#t:3ADailyYieldCurveList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "a Map storing all the daily yield curves\n",
          "module": "Finance.Treasury",
          "name": "3AYieldCurveMap",
          "package": "Finance-Treasury",
          "source": "http://hackage.haskell.org/package/Finance-Treasury/docs/src/Finance-Treasury.html#YieldCurveMap",
          "type": "type"
        },
        "index": {
          "description": "Map storing all the daily yield curves",
          "hierarchy": "Finance Treasury",
          "module": "Finance.Treasury",
          "name": "3AYieldCurveMap",
          "package": "Finance-Treasury",
          "partial": "AYield Curve Map",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Finance-Treasury/docs/Finance-Treasury.html#t:3AYieldCurveMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "fetch the latest daily yield curve from the monthly data.\n",
          "module": "Finance.Treasury",
          "name": "3AgetLatestYieldCurve",
          "package": "Finance-Treasury",
          "signature": "IO (Day, DailyYieldCurve)",
          "source": "http://hackage.haskell.org/package/Finance-Treasury/docs/src/Finance-Treasury.html#getLatestYieldCurve",
          "type": "function"
        },
        "index": {
          "description": "fetch the latest daily yield curve from the monthly data",
          "hierarchy": "Finance Treasury",
          "module": "Finance.Treasury",
          "name": "3AgetLatestYieldCurve",
          "normalized": "IO(Day,DailyYieldCurve)",
          "package": "Finance-Treasury",
          "partial": "Aget Latest Yield Curve",
          "signature": "IO(Day,DailyYieldCurve)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Finance-Treasury/docs/Finance-Treasury.html#v:3AgetLatestYieldCurve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "fetch the latest yearly data (excluding current month).\n There is no reason to fail, so it is an error if there is no XML returned\n",
          "module": "Finance.Treasury",
          "name": "3AgetYieldCurveHist",
          "package": "Finance-Treasury",
          "signature": "IO YieldCurveMap",
          "source": "http://hackage.haskell.org/package/Finance-Treasury/docs/src/Finance-Treasury.html#getYieldCurveHist",
          "type": "function"
        },
        "index": {
          "description": "fetch the latest yearly data excluding current month There is no reason to fail so it is an error if there is no XML returned",
          "hierarchy": "Finance Treasury",
          "module": "Finance.Treasury",
          "name": "3AgetYieldCurveHist",
          "package": "Finance-Treasury",
          "partial": "Aget Yield Curve Hist",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Finance-Treasury/docs/Finance-Treasury.html#v:3AgetYieldCurveHist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "fetch the latest monthly data.\n There is no reason to fail, so it is an error if there is no XML returned\n",
          "module": "Finance.Treasury",
          "name": "3AgetYieldCurveThisMonth",
          "package": "Finance-Treasury",
          "signature": "IO YieldCurveMap",
          "source": "http://hackage.haskell.org/package/Finance-Treasury/docs/src/Finance-Treasury.html#getYieldCurveThisMonth",
          "type": "function"
        },
        "index": {
          "description": "fetch the latest monthly data There is no reason to fail so it is an error if there is no XML returned",
          "hierarchy": "Finance Treasury",
          "module": "Finance.Treasury",
          "name": "3AgetYieldCurveThisMonth",
          "package": "Finance-Treasury",
          "partial": "Aget Yield Curve This Month",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Finance-Treasury/docs/Finance-Treasury.html#v:3AgetYieldCurveThisMonth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "fetch the historical yearly data (excluding current year).\n If YYYY is not in range (since 1992), this call may fail.\n Otherwise, there is no reason to fail.\n",
          "module": "Finance.Treasury",
          "name": "3AgetYieldCurveYyyy",
          "package": "Finance-Treasury",
          "signature": "Int -\u003e IO YieldCurveMap",
          "source": "http://hackage.haskell.org/package/Finance-Treasury/docs/src/Finance-Treasury.html#getYieldCurveYyyy",
          "type": "function"
        },
        "index": {
          "description": "fetch the historical yearly data excluding current year If YYYY is not in range since this call may fail Otherwise there is no reason to fail",
          "hierarchy": "Finance Treasury",
          "module": "Finance.Treasury",
          "name": "3AgetYieldCurveYyyy",
          "normalized": "Int-\u003eIO YieldCurveMap",
          "package": "Finance-Treasury",
          "partial": "Aget Yield Curve Yyyy",
          "signature": "Int-\u003eIO YieldCurveMap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Finance-Treasury/docs/Finance-Treasury.html#v:3AgetYieldCurveYyyy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "print yield curve data in a csv format for storage or testing.\n",
          "module": "Finance.Treasury",
          "name": "3AprettyYieldCurve",
          "package": "Finance-Treasury",
          "signature": "YieldCurveMap -\u003e Maybe String -\u003e IO ()",
          "source": "http://hackage.haskell.org/package/Finance-Treasury/docs/src/Finance-Treasury.html#prettyYieldCurve",
          "type": "function"
        },
        "index": {
          "description": "print yield curve data in csv format for storage or testing",
          "hierarchy": "Finance Treasury",
          "module": "Finance.Treasury",
          "name": "3AprettyYieldCurve",
          "normalized": "YieldCurveMap-\u003eMaybe String-\u003eIO()",
          "package": "Finance-Treasury",
          "partial": "Apretty Yield Curve",
          "signature": "YieldCurveMap-\u003eMaybe String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Finance-Treasury/docs/Finance-Treasury.html#v:3AprettyYieldCurve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "translates maturity from XML names to abbreviations.\n E.g. BC_1MONTH becomes 1m.\n List of all maturities: 1m 3m 6m 1y 2y 3y 5y 7y 10y 20y 30y.\n However, 30y data may be lacking for some years when the bond was not in circulation. \n",
          "module": "Finance.Treasury",
          "name": "3AyieldCurveHash",
          "package": "Finance-Treasury",
          "signature": "Map String String",
          "source": "http://hackage.haskell.org/package/Finance-Treasury/docs/src/Finance-Treasury.html#yieldCurveHash",
          "type": "function"
        },
        "index": {
          "description": "translates maturity from XML names to abbreviations E.g BC MONTH becomes List of all maturities However data may be lacking for some years when the bond was not in circulation",
          "hierarchy": "Finance Treasury",
          "module": "Finance.Treasury",
          "name": "3AyieldCurveHash",
          "package": "Finance-Treasury",
          "partial": "Ayield Curve Hash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Finance-Treasury/docs/Finance-Treasury.html#v:3AyieldCurveHash"
      }
    }
  ]
]