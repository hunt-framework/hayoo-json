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
        "word": "eurofxref"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Financial.CurrencyRates",
          "name": "CurrencyRates",
          "package": "eurofxref",
          "source": "src/Financial-CurrencyRates.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Financial CurrencyRates",
          "module": "Financial.CurrencyRates",
          "name": "CurrencyRates",
          "package": "eurofxref",
          "partial": "Currency Rates",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/eurofxref/docs/Financial-CurrencyRates.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA standard three-letter currency name.\n\u003c/p\u003e",
          "module": "Financial.CurrencyRates",
          "name": "Currency",
          "package": "eurofxref",
          "source": "src/Financial-CurrencyRates.html#Currency",
          "type": "newtype"
        },
        "index": {
          "description": "standard three-letter currency name",
          "hierarchy": "Financial CurrencyRates",
          "module": "Financial.CurrencyRates",
          "name": "Currency",
          "package": "eurofxref",
          "partial": "Currency",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/eurofxref/docs/Financial-CurrencyRates.html#t:Currency"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA table of currency rates.\n\u003c/p\u003e",
          "module": "Financial.CurrencyRates",
          "name": "Rates",
          "package": "eurofxref",
          "source": "src/Financial-CurrencyRates.html#Rates",
          "type": "data"
        },
        "index": {
          "description": "table of currency rates",
          "hierarchy": "Financial CurrencyRates",
          "module": "Financial.CurrencyRates",
          "name": "Rates",
          "package": "eurofxref",
          "partial": "Rates",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/eurofxref/docs/Financial-CurrencyRates.html#t:Rates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Financial.CurrencyRates",
          "name": "Currency",
          "package": "eurofxref",
          "signature": "Currency String",
          "source": "src/Financial-CurrencyRates.html#Currency",
          "type": "function"
        },
        "index": {
          "hierarchy": "Financial CurrencyRates",
          "module": "Financial.CurrencyRates",
          "name": "Currency",
          "package": "eurofxref",
          "partial": "Currency",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/eurofxref/docs/Financial-CurrencyRates.html#v:Currency"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Financial.CurrencyRates",
          "name": "Rates",
          "package": "eurofxref",
          "signature": "Rates",
          "source": "src/Financial-CurrencyRates.html#Rates",
          "type": "function"
        },
        "index": {
          "hierarchy": "Financial CurrencyRates",
          "module": "Financial.CurrencyRates",
          "name": "Rates",
          "package": "eurofxref",
          "partial": "Rates",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/eurofxref/docs/Financial-CurrencyRates.html#v:Rates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValue of one unit of the reference currency in each currency\n\u003c/p\u003e",
          "module": "Financial.CurrencyRates",
          "name": "raRates",
          "package": "eurofxref",
          "signature": "Map Currency a",
          "source": "src/Financial-CurrencyRates.html#Rates",
          "type": "function"
        },
        "index": {
          "description": "Value of one unit of the reference currency in each currency",
          "hierarchy": "Financial CurrencyRates",
          "module": "Financial.CurrencyRates",
          "name": "raRates",
          "package": "eurofxref",
          "partial": "Rates",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/eurofxref/docs/Financial-CurrencyRates.html#v:raRates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe reference currency\n\u003c/p\u003e",
          "module": "Financial.CurrencyRates",
          "name": "raReference",
          "package": "eurofxref",
          "signature": "Currency",
          "source": "src/Financial-CurrencyRates.html#Rates",
          "type": "function"
        },
        "index": {
          "description": "The reference currency",
          "hierarchy": "Financial CurrencyRates",
          "module": "Financial.CurrencyRates",
          "name": "raReference",
          "package": "eurofxref",
          "partial": "Reference",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/eurofxref/docs/Financial-CurrencyRates.html#v:raReference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe time when the rates were valid\n\u003c/p\u003e",
          "module": "Financial.CurrencyRates",
          "name": "raTime",
          "package": "eurofxref",
          "signature": "UTCTime",
          "source": "src/Financial-CurrencyRates.html#Rates",
          "type": "function"
        },
        "index": {
          "description": "The time when the rates were valid",
          "hierarchy": "Financial CurrencyRates",
          "module": "Financial.CurrencyRates",
          "name": "raTime",
          "package": "eurofxref",
          "partial": "Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/eurofxref/docs/Financial-CurrencyRates.html#v:raTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRe-base the rates to a different reference currency, such that the new rates give\n the value of one unit of that currency.\n\u003c/p\u003e",
          "module": "Financial.CurrencyRates",
          "name": "rebase",
          "package": "eurofxref",
          "signature": "Currency -\u003e Rates a -\u003e Rates a",
          "source": "src/Financial-CurrencyRates.html#rebase",
          "type": "function"
        },
        "index": {
          "description": "Re-base the rates to different reference currency such that the new rates give the value of one unit of that currency",
          "hierarchy": "Financial CurrencyRates",
          "module": "Financial.CurrencyRates",
          "name": "rebase",
          "normalized": "Currency-\u003eRates a-\u003eRates a",
          "package": "eurofxref",
          "signature": "Currency-\u003eRates a-\u003eRates a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/eurofxref/docs/Financial-CurrencyRates.html#v:rebase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExample using ghci, where we read the currency rates relative to Euros, and re-base\n them to New Zealand dollars.\n\u003c/p\u003e\u003cpre\u003e \u003e :m Financial.EuroFXRef Data.Map\n \u003e fmap (assocs . raRates . rebase (Currency \"NZD\")) fetch :: IO [(Currency, Double)]\n [(Currency \"AUD\",0.7696441703909034),(Currency \"BGN\",1.1064094586185438),...\n\u003c/pre\u003e\u003cp\u003eEach number is one unit of the reference currency in that currency,\n e.g. in this example NZD 1 == AUD 0.77.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Financial.EuroFXRef",
          "name": "EuroFXRef",
          "package": "eurofxref",
          "source": "src/Financial-EuroFXRef.html",
          "type": "module"
        },
        "index": {
          "description": "Example using ghci where we read the currency rates relative to Euros and re-base them to New Zealand dollars Financial.EuroFXRef Data.Map fmap assocs raRates rebase Currency NZD fetch IO Currency Double Currency AUD Currency BGN Each number is one unit of the reference currency in that currency e.g in this example NZD AUD",
          "hierarchy": "Financial EuroFXRef",
          "module": "Financial.EuroFXRef",
          "name": "EuroFXRef",
          "package": "eurofxref",
          "partial": "Euro FXRef",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/eurofxref/docs/Financial-EuroFXRef.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn exception indicating a parse error in the parsing of European Central Bank.\n\u003c/p\u003e",
          "module": "Financial.EuroFXRef",
          "name": "EuropeanCentralBankException",
          "package": "eurofxref",
          "source": "src/Financial-EuroFXRef.html#EuropeanCentralBankException",
          "type": "data"
        },
        "index": {
          "description": "An exception indicating parse error in the parsing of European Central Bank",
          "hierarchy": "Financial EuroFXRef",
          "module": "Financial.EuroFXRef",
          "name": "EuropeanCentralBankException",
          "package": "eurofxref",
          "partial": "European Central Bank Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/eurofxref/docs/Financial-EuroFXRef.html#t:EuropeanCentralBankException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Financial.EuroFXRef",
          "name": "ECBHttpException",
          "package": "eurofxref",
          "signature": "ECBHttpException HttpException",
          "source": "src/Financial-EuroFXRef.html#EuropeanCentralBankException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Financial EuroFXRef",
          "module": "Financial.EuroFXRef",
          "name": "ECBHttpException",
          "package": "eurofxref",
          "partial": "ECBHttp Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/eurofxref/docs/Financial-EuroFXRef.html#v:ECBHttpException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Financial.EuroFXRef",
          "name": "ECBHttpStatusException",
          "package": "eurofxref",
          "signature": "ECBHttpStatusException Status",
          "source": "src/Financial-EuroFXRef.html#EuropeanCentralBankException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Financial EuroFXRef",
          "module": "Financial.EuroFXRef",
          "name": "ECBHttpStatusException",
          "package": "eurofxref",
          "partial": "ECBHttp Status Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/eurofxref/docs/Financial-EuroFXRef.html#v:ECBHttpStatusException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Financial.EuroFXRef",
          "name": "ECBParseException",
          "package": "eurofxref",
          "signature": "ECBParseException String",
          "source": "src/Financial-EuroFXRef.html#EuropeanCentralBankException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Financial EuroFXRef",
          "module": "Financial.EuroFXRef",
          "name": "ECBParseException",
          "package": "eurofxref",
          "partial": "ECBParse Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/eurofxref/docs/Financial-EuroFXRef.html#v:ECBParseException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Financial.EuroFXRef",
          "name": "ECBXMLParseException",
          "package": "eurofxref",
          "signature": "ECBXMLParseException XMLParseError",
          "source": "src/Financial-EuroFXRef.html#EuropeanCentralBankException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Financial EuroFXRef",
          "module": "Financial.EuroFXRef",
          "name": "ECBXMLParseException",
          "package": "eurofxref",
          "partial": "ECBXMLParse Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/eurofxref/docs/Financial-EuroFXRef.html#v:ECBXMLParseException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe URL for the European Central Bank's free daily reference rates.\n\u003c/p\u003e",
          "module": "Financial.EuroFXRef",
          "name": "europeanCentralBankDaily",
          "package": "eurofxref",
          "signature": "m (Request m')",
          "source": "src/Financial-EuroFXRef.html#europeanCentralBankDaily",
          "type": "function"
        },
        "index": {
          "description": "The URL for the European Central Bank free daily reference rates",
          "hierarchy": "Financial EuroFXRef",
          "module": "Financial.EuroFXRef",
          "name": "europeanCentralBankDaily",
          "package": "eurofxref",
          "partial": "Central Bank Daily",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/eurofxref/docs/Financial-EuroFXRef.html#v:europeanCentralBankDaily"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFetch today's currency rates from European Central Bank server.\n \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e works for \u003ccode\u003em\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThrows a \u003ccode\u003e\u003ca\u003eEuropeanCentralBankException\u003c/a\u003e\u003c/code\u003e for failures at HTTP and above,\n or \u003ccode\u003e\u003ca\u003eIOException\u003c/a\u003e\u003c/code\u003e for network-level failures.\n\u003c/p\u003e",
          "module": "Financial.EuroFXRef",
          "name": "fetch",
          "package": "eurofxref",
          "signature": "m (Rates a)",
          "source": "src/Financial-EuroFXRef.html#fetch",
          "type": "function"
        },
        "index": {
          "description": "Fetch today currency rates from European Central Bank server IO works for and Double for Throws EuropeanCentralBankException for failures at HTTP and above or IOException for network-level failures",
          "hierarchy": "Financial EuroFXRef",
          "module": "Financial.EuroFXRef",
          "name": "fetch",
          "package": "eurofxref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/eurofxref/docs/Financial-EuroFXRef.html#v:fetch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFetch today's currency rates from the specified URL.\n\u003c/p\u003e\u003cp\u003eThrows a \u003ccode\u003e\u003ca\u003eEuropeanCentralBankException\u003c/a\u003e\u003c/code\u003e for failures at HTTP and above,\n or \u003ccode\u003e\u003ca\u003eIOException\u003c/a\u003e\u003c/code\u003e for network-level failures.\n\u003c/p\u003e",
          "module": "Financial.EuroFXRef",
          "name": "fetchFrom",
          "package": "eurofxref",
          "signature": "Request m -\u003e Manager -\u003e m (Rates a)",
          "source": "src/Financial-EuroFXRef.html#fetchFrom",
          "type": "function"
        },
        "index": {
          "description": "Fetch today currency rates from the specified URL Throws EuropeanCentralBankException for failures at HTTP and above or IOException for network-level failures",
          "hierarchy": "Financial EuroFXRef",
          "module": "Financial.EuroFXRef",
          "name": "fetchFrom",
          "normalized": "Request a-\u003eManager-\u003ea(Rates b)",
          "package": "eurofxref",
          "partial": "From",
          "signature": "Request m-\u003eManager-\u003em(Rates a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/eurofxref/docs/Financial-EuroFXRef.html#v:fetchFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse the European Central Bank's XML format.\n\u003c/p\u003e",
          "module": "Financial.EuroFXRef",
          "name": "parseEuropeanCentralBank",
          "package": "eurofxref",
          "signature": "UNode String -\u003e Either String (Rates a)",
          "source": "src/Financial-EuroFXRef.html#parseEuropeanCentralBank",
          "type": "function"
        },
        "index": {
          "description": "Parse the European Central Bank XML format",
          "hierarchy": "Financial EuroFXRef",
          "module": "Financial.EuroFXRef",
          "name": "parseEuropeanCentralBank",
          "normalized": "UNode String-\u003eEither String(Rates a)",
          "package": "eurofxref",
          "partial": "European Central Bank",
          "signature": "UNode String-\u003eEither String(Rates a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/eurofxref/docs/Financial-EuroFXRef.html#v:parseEuropeanCentralBank"
      }
    }
  ]
]