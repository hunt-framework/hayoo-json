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
        "word": "currency"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Currency.Rates",
          "name": "Rates",
          "package": "currency",
          "source": "src/Currency-Rates.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Currency Rates",
          "module": "Currency.Rates",
          "name": "Rates",
          "package": "currency",
          "partial": "Rates",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/currency/docs/Currency-Rates.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA map from currency to exchange rate against some reference currency\n\u003c/p\u003e",
          "module": "Currency.Rates",
          "name": "Rates",
          "package": "currency",
          "source": "src/Currency-Rates.html#Rates",
          "type": "data"
        },
        "index": {
          "description": "map from currency to exchange rate against some reference currency",
          "hierarchy": "Currency Rates",
          "module": "Currency.Rates",
          "name": "Rates",
          "package": "currency",
          "partial": "Rates",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/currency/docs/Currency-Rates.html#t:Rates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Currency.Rates",
          "name": "Rates",
          "package": "currency",
          "signature": "Rates",
          "source": "src/Currency-Rates.html#Rates",
          "type": "function"
        },
        "index": {
          "hierarchy": "Currency Rates",
          "module": "Currency.Rates",
          "name": "Rates",
          "package": "currency",
          "partial": "Rates",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/currency/docs/Currency-Rates.html#v:Rates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience function for getting a single exchange rate\n\u003c/p\u003e\u003cp\u003eIf you're doing a lot of conversions, use \u003ccode\u003e\u003ca\u003erebase\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003elookup\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Currency.Rates",
          "name": "exchangeRate",
          "package": "currency",
          "signature": "Rates a b-\u003e a-\u003e a-\u003e Maybe b",
          "type": "function"
        },
        "index": {
          "description": "Convenience function for getting single exchange rate If you re doing lot of conversions use rebase and lookup",
          "hierarchy": "Currency Rates",
          "module": "Currency.Rates",
          "name": "exchangeRate",
          "normalized": "Rates a b-\u003ea-\u003ea-\u003eMaybe b",
          "package": "currency",
          "partial": "Rate",
          "signature": "Rates a b-\u003ea-\u003ea-\u003eMaybe b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/currency/docs/Currency-Rates.html#v:exchangeRate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Currency.Rates",
          "name": "rates",
          "package": "currency",
          "signature": "Map a b",
          "source": "src/Currency-Rates.html#Rates",
          "type": "function"
        },
        "index": {
          "hierarchy": "Currency Rates",
          "module": "Currency.Rates",
          "name": "rates",
          "package": "currency",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/currency/docs/Currency-Rates.html#v:rates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange the reference currency to a different one found in the \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Currency.Rates",
          "name": "rebase",
          "package": "currency",
          "signature": "a -\u003e Rates a b -\u003e Rates a b",
          "source": "src/Currency-Rates.html#rebase",
          "type": "function"
        },
        "index": {
          "description": "Change the reference currency to different one found in the Map",
          "hierarchy": "Currency Rates",
          "module": "Currency.Rates",
          "name": "rebase",
          "normalized": "a-\u003eRates a b-\u003eRates a b",
          "package": "currency",
          "signature": "a-\u003eRates a b-\u003eRates a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/currency/docs/Currency-Rates.html#v:rebase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Currency.Rates",
          "name": "reference",
          "package": "currency",
          "signature": "a",
          "source": "src/Currency-Rates.html#Rates",
          "type": "function"
        },
        "index": {
          "hierarchy": "Currency Rates",
          "module": "Currency.Rates",
          "name": "reference",
          "package": "currency",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/currency/docs/Currency-Rates.html#v:reference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA representation of both ISO4217 and nonstandard currencies\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Currency",
          "name": "Currency",
          "package": "currency",
          "source": "src/Currency.html",
          "type": "module"
        },
        "index": {
          "description": "representation of both ISO4217 and nonstandard currencies",
          "hierarchy": "Currency",
          "module": "Currency",
          "name": "Currency",
          "package": "currency",
          "partial": "Currency",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/currency/docs/Currency.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEither an \u003ccode\u003e\u003ca\u003eISO4217Currency\u003c/a\u003e\u003c/code\u003e or a nonstandard currency\n\u003c/p\u003e",
          "module": "Currency",
          "name": "Currency",
          "package": "currency",
          "source": "src/Currency.html#Currency",
          "type": "data"
        },
        "index": {
          "description": "Either an ISO4217Currency or nonstandard currency",
          "hierarchy": "Currency",
          "module": "Currency",
          "name": "Currency",
          "package": "currency",
          "partial": "Currency",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/currency/docs/Currency.html#t:Currency"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eISO4217 currency, either national or non-national\n\u003c/p\u003e",
          "module": "Currency",
          "name": "ISO4217Currency",
          "package": "currency",
          "source": "src/Currency.html#ISO4217Currency",
          "type": "data"
        },
        "index": {
          "description": "ISO4217 currency either national or non-national",
          "hierarchy": "Currency",
          "module": "Currency",
          "name": "ISO4217Currency",
          "package": "currency",
          "partial": "ISO Currency",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/currency/docs/Currency.html#t:ISO4217Currency"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Currency",
          "name": "ISO4217Currency",
          "package": "currency",
          "signature": "ISO4217Currency ISO4217Currency",
          "source": "src/Currency.html#Currency",
          "type": "function"
        },
        "index": {
          "hierarchy": "Currency",
          "module": "Currency",
          "name": "ISO4217Currency",
          "package": "currency",
          "partial": "ISO Currency",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/currency/docs/Currency.html#v:ISO4217Currency"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Currency",
          "name": "NationalCurrency",
          "package": "currency",
          "signature": "NationalCurrency CountryCode Char",
          "source": "src/Currency.html#ISO4217Currency",
          "type": "function"
        },
        "index": {
          "hierarchy": "Currency",
          "module": "Currency",
          "name": "NationalCurrency",
          "package": "currency",
          "partial": "National Currency",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/currency/docs/Currency.html#v:NationalCurrency"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Currency",
          "name": "NonNationalCurrency",
          "package": "currency",
          "signature": "NonNationalCurrency Char Char",
          "source": "src/Currency.html#ISO4217Currency",
          "type": "function"
        },
        "index": {
          "hierarchy": "Currency",
          "module": "Currency",
          "name": "NonNationalCurrency",
          "package": "currency",
          "partial": "Non National Currency",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/currency/docs/Currency.html#v:NonNationalCurrency"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Currency",
          "name": "NonStandardCurrency",
          "package": "currency",
          "signature": "NonStandardCurrency String",
          "source": "src/Currency.html#Currency",
          "type": "function"
        },
        "index": {
          "hierarchy": "Currency",
          "module": "Currency",
          "name": "NonStandardCurrency",
          "package": "currency",
          "partial": "Non Standard Currency",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/currency/docs/Currency.html#v:NonStandardCurrency"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number of fractional decimal places in an amount of a\n \u003ccode\u003e\u003ca\u003eCurrency\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eISO4217Currency\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Currency",
          "name": "minorUnits",
          "package": "currency",
          "signature": "a -\u003e Maybe Int",
          "source": "src/Currency.html#minorUnits",
          "type": "function"
        },
        "index": {
          "description": "The number of fractional decimal places in an amount of Currency or ISO4217Currency",
          "hierarchy": "Currency",
          "module": "Currency",
          "name": "minorUnits",
          "normalized": "a-\u003eMaybe Int",
          "package": "currency",
          "partial": "Units",
          "signature": "a-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/currency/docs/Currency.html#v:minorUnits"
      }
    }
  ]
]