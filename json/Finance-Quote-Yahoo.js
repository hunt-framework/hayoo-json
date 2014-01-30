[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Finance-Quote-Yahoo/docs/Finance-Quote-Yahoo.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFinance.Quote.Yahoo\n\u003c/p\u003e\u003cp\u003eFinance.Quote.Yahoo is a module to obtain quote information from \nfinance.yahoo.com, which delivers a csv file with data for various fields, \nwhich are documented at http://www.gummy-stuff.org/Yahoo-data.htm.\n\u003c/p\u003e\u003cp\u003eThe homepage for this module is \nhttp://www.b7j0c.org/stuff/haskell-yquote.xhtml\n\u003c/p\u003e\u003cp\u003eThe license for this module is at\nhttp://www.b7j0c.org/stuff/license.txt\n\u003c/p\u003e\u003cp\u003eSince this uses Data.Time.Format, ghc-6.6.1 or greater is required.\n\u003c/p\u003e\u003cp\u003eError reporting is somewhat of a mixed model in this module. Where strict\nerrors of data construction occur, these will be noted as fatal error()\nsignals, so the error can be noted and fixed. An example of this would be\nputting the start and end data in the wrong order for the retrieval of\nhistorical quotes or the creation of a malformed URI. On the other hand,\nI continue to propogate Nothing() for networking issues as there may be \nexternal issues creating these errors for which one may want program \nexecution to continue. My personal tendency is to fail early when \npossible and practical.\n\u003c/p\u003e\u003cp\u003eExported functions:\n\u003c/p\u003e\u003cp\u003egetQuote, which takes a list of quote symbols (in the finance sense of \n\"symbol\" - YHOO,GOOG etc), a list of fields, and \nreturns a Data.Map, where the keys are pairs (symbol,field) and \nvalues are the returned Strings. Upon any problem, Nothing is \nreturned. I have not cast the data into stronger types than String since\nYahoo is inconsistent about what is returned in the csv. Fields often\ncontain punctuation, symbols, as well as numbers. So really, they are\nStrings.\n\u003c/p\u003e\u003cp\u003egetHistoricalQuote, which takes a quote symbol, and two Data.Time.Calendar\nDay types, one for the starting date to receive quote data, and one for the\nend date. Yahoo does not let you choose the fields to see in historical\nquotes, data is limited to price and volume information.\n\u003c/p\u003e\u003cp\u003equoteRec - useful for debugging the quote URI to see if Yahoo is denying\nthe service.\n\u003c/p\u003e\u003cp\u003eHere is small complete program illustrating the use of this module\n\u003c/p\u003e\u003cpre\u003e\n  module Main where\n  import Finance.Quote.Yahoo\n  import Data.Time.Calendar\n  import Data.Map\n  quoteSymbolList = [\"YHOO\",\"^DJI\"] :: [QuoteSymbol]\n  quoteFieldsList = [\"s\",\"l1\",\"c\"] :: [QuoteField]\n  main = do\n  q \u003c- getQuote quoteSymbolList quoteFieldsList\n  case q of\n    Nothing -\u003e error \"no map\"\n    Just m -\u003e case (Data.Map.lookup (\"YHOO\",\"l1\") m) of\n                   Nothing -\u003e print \"no match\"\n                   Just a -\u003e print a\n  let startDate = Data.Time.Calendar.fromGregorian 2007 07 01\n  let endDate = Data.Time.Calendar.fromGregorian 2007 07 03\n  h \u003c- getHistoricalQuote (head quoteSymbolList) startDate endDate Daily\n  case h of\n    Nothing -\u003e error \"no historical\"\n    Just l -\u003e sequence $ Prelude.map print l\n  return ()\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Finance.Quote.Yahoo",
        "fct-package": "Finance-Quote-Yahoo",
        "fct-signature": "module",
        "fct-source": "src/Finance-Quote-Yahoo.html",
        "fct-type": "module",
        "title": "Yahoo"
      },
      "index": {
        "description": "Finance.Quote.Yahoo Finance.Quote.Yahoo is module to obtain quote information from finance.yahoo.com which delivers csv file with data for various fields which are documented at http www.gummy-stuff.org Yahoo-data.htm The homepage for this module is http www.b7j0c.org stuff haskell-yquote.xhtml The license for this module is at http www.b7j0c.org stuff license.txt Since this uses Data.Time.Format ghc-6.6.1 or greater is required Error reporting is somewhat of mixed model in this module Where strict errors of data construction occur these will be noted as fatal error signals so the error can be noted and fixed An example of this would be putting the start and end data in the wrong order for the retrieval of historical quotes or the creation of malformed URI On the other hand continue to propogate Nothing for networking issues as there may be external issues creating these errors for which one may want program execution to continue My personal tendency is to fail early when possible and practical Exported functions getQuote which takes list of quote symbols in the finance sense of symbol YHOO GOOG etc list of fields and returns Data.Map where the keys are pairs symbol field and values are the returned Strings Upon any problem Nothing is returned have not cast the data into stronger types than String since Yahoo is inconsistent about what is returned in the csv Fields often contain punctuation symbols as well as numbers So really they are Strings getHistoricalQuote which takes quote symbol and two Data.Time.Calendar Day types one for the starting date to receive quote data and one for the end date Yahoo does not let you choose the fields to see in historical quotes data is limited to price and volume information quoteRec useful for debugging the quote URI to see if Yahoo is denying the service Here is small complete program illustrating the use of this module module Main where import Finance.Quote.Yahoo import Data.Time.Calendar import Data.Map quoteSymbolList YHOO DJI QuoteSymbol quoteFieldsList l1 QuoteField main do getQuote quoteSymbolList quoteFieldsList case of Nothing error no map Just case Data.Map.lookup YHOO l1 of Nothing print no match Just print let startDate Data.Time.Calendar.fromGregorian let endDate Data.Time.Calendar.fromGregorian getHistoricalQuote head quoteSymbolList startDate endDate Daily case of Nothing error no historical Just sequence Prelude.map print return",
        "hierarchy": "Finance Quote Yahoo",
        "module": "Finance.Quote.Yahoo",
        "name": "Yahoo",
        "normalized": "",
        "package": "Finance-Quote-Yahoo",
        "partial": "Yahoo",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Finance-Quote-Yahoo/docs/Finance-Quote-Yahoo.html#t:HistoricalQuote",
      "description": {
        "fct-descr": "\u003cp\u003eHistoricalQuote reflects the row form of a yahoo historical quote:\n Date,Open,High,Low,Close,Volume,Adj Close (taken from the csv itself).\n Exported.\n\u003c/p\u003e",
        "fct-module": "Finance.Quote.Yahoo",
        "fct-package": "Finance-Quote-Yahoo",
        "fct-signature": "data",
        "fct-source": "src/Finance-Quote-Yahoo.html#HistoricalQuote",
        "fct-type": "data",
        "title": "HistoricalQuote"
      },
      "index": {
        "description": "HistoricalQuote reflects the row form of yahoo historical quote Date Open High Low Close Volume Adj Close taken from the csv itself Exported",
        "hierarchy": "Finance Quote Yahoo",
        "module": "Finance.Quote.Yahoo",
        "name": "HistoricalQuote",
        "normalized": "",
        "package": "Finance-Quote-Yahoo",
        "partial": "Historical Quote",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Finance-Quote-Yahoo/docs/Finance-Quote-Yahoo.html#t:Quote",
      "description": {
        "fct-module": "Finance.Quote.Yahoo",
        "fct-package": "Finance-Quote-Yahoo",
        "fct-signature": "type",
        "fct-source": "src/Finance-Quote-Yahoo.html#Quote",
        "fct-type": "type",
        "title": "Quote"
      },
      "index": {
        "description": "",
        "hierarchy": "Finance Quote Yahoo",
        "module": "Finance.Quote.Yahoo",
        "name": "Quote",
        "normalized": "",
        "package": "Finance-Quote-Yahoo",
        "partial": "Quote",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Finance-Quote-Yahoo/docs/Finance-Quote-Yahoo.html#t:QuoteCurrency",
      "description": {
        "fct-descr": "\u003cp\u003eThis is the base uri to get csv historical quote data. Exported.\n\u003c/p\u003e\u003cp\u003eFloat is not an fully appropriate currency type, beware. Exported.\n\u003c/p\u003e",
        "fct-module": "Finance.Quote.Yahoo",
        "fct-package": "Finance-Quote-Yahoo",
        "fct-signature": "type",
        "fct-source": "src/Finance-Quote-Yahoo.html#QuoteCurrency",
        "fct-type": "type",
        "title": "QuoteCurrency"
      },
      "index": {
        "description": "This is the base uri to get csv historical quote data Exported Float is not an fully appropriate currency type beware Exported",
        "hierarchy": "Finance Quote Yahoo",
        "module": "Finance.Quote.Yahoo",
        "name": "QuoteCurrency",
        "normalized": "",
        "package": "Finance-Quote-Yahoo",
        "partial": "Quote Currency",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Finance-Quote-Yahoo/docs/Finance-Quote-Yahoo.html#t:QuoteField",
      "description": {
        "fct-module": "Finance.Quote.Yahoo",
        "fct-package": "Finance-Quote-Yahoo",
        "fct-signature": "type",
        "fct-source": "src/Finance-Quote-Yahoo.html#QuoteField",
        "fct-type": "type",
        "title": "QuoteField"
      },
      "index": {
        "description": "",
        "hierarchy": "Finance Quote Yahoo",
        "module": "Finance.Quote.Yahoo",
        "name": "QuoteField",
        "normalized": "",
        "package": "Finance-Quote-Yahoo",
        "partial": "Quote Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Finance-Quote-Yahoo/docs/Finance-Quote-Yahoo.html#t:QuoteFrequency",
      "description": {
        "fct-descr": "\u003cp\u003eQuoteFrequency - frequency for historical quotes. Exported.\n\u003c/p\u003e",
        "fct-module": "Finance.Quote.Yahoo",
        "fct-package": "Finance-Quote-Yahoo",
        "fct-signature": "data",
        "fct-source": "src/Finance-Quote-Yahoo.html#QuoteFrequency",
        "fct-type": "data",
        "title": "QuoteFrequency"
      },
      "index": {
        "description": "QuoteFrequency frequency for historical quotes Exported",
        "hierarchy": "Finance Quote Yahoo",
        "module": "Finance.Quote.Yahoo",
        "name": "QuoteFrequency",
        "normalized": "",
        "package": "Finance-Quote-Yahoo",
        "partial": "Quote Frequency",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Finance-Quote-Yahoo/docs/Finance-Quote-Yahoo.html#t:QuoteSymbol",
      "description": {
        "fct-module": "Finance.Quote.Yahoo",
        "fct-package": "Finance-Quote-Yahoo",
        "fct-signature": "type",
        "fct-source": "src/Finance-Quote-Yahoo.html#QuoteSymbol",
        "fct-type": "type",
        "title": "QuoteSymbol"
      },
      "index": {
        "description": "",
        "hierarchy": "Finance Quote Yahoo",
        "module": "Finance.Quote.Yahoo",
        "name": "QuoteSymbol",
        "normalized": "",
        "package": "Finance-Quote-Yahoo",
        "partial": "Quote Symbol",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Finance-Quote-Yahoo/docs/Finance-Quote-Yahoo.html#t:QuoteValue",
      "description": {
        "fct-module": "Finance.Quote.Yahoo",
        "fct-package": "Finance-Quote-Yahoo",
        "fct-signature": "type",
        "fct-source": "src/Finance-Quote-Yahoo.html#QuoteValue",
        "fct-type": "type",
        "title": "QuoteValue"
      },
      "index": {
        "description": "",
        "hierarchy": "Finance Quote Yahoo",
        "module": "Finance.Quote.Yahoo",
        "name": "QuoteValue",
        "normalized": "",
        "package": "Finance-Quote-Yahoo",
        "partial": "Quote Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Finance-Quote-Yahoo/docs/Finance-Quote-Yahoo.html#v:Daily",
      "description": {
        "fct-module": "Finance.Quote.Yahoo",
        "fct-package": "Finance-Quote-Yahoo",
        "fct-signature": "Daily",
        "fct-source": "src/Finance-Quote-Yahoo.html#QuoteFrequency",
        "fct-type": "function",
        "title": "Daily"
      },
      "index": {
        "description": "",
        "hierarchy": "Finance Quote Yahoo",
        "module": "Finance.Quote.Yahoo",
        "name": "Daily",
        "normalized": "",
        "package": "Finance-Quote-Yahoo",
        "partial": "Daily",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Finance-Quote-Yahoo/docs/Finance-Quote-Yahoo.html#v:Dividend",
      "description": {
        "fct-module": "Finance.Quote.Yahoo",
        "fct-package": "Finance-Quote-Yahoo",
        "fct-signature": "Dividend",
        "fct-source": "src/Finance-Quote-Yahoo.html#QuoteFrequency",
        "fct-type": "function",
        "title": "Dividend"
      },
      "index": {
        "description": "",
        "hierarchy": "Finance Quote Yahoo",
        "module": "Finance.Quote.Yahoo",
        "name": "Dividend",
        "normalized": "",
        "package": "Finance-Quote-Yahoo",
        "partial": "Dividend",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Finance-Quote-Yahoo/docs/Finance-Quote-Yahoo.html#v:HistoricalQuote",
      "description": {
        "fct-module": "Finance.Quote.Yahoo",
        "fct-package": "Finance-Quote-Yahoo",
        "fct-signature": "HistoricalQuote",
        "fct-source": "src/Finance-Quote-Yahoo.html#HistoricalQuote",
        "fct-type": "function",
        "title": "HistoricalQuote"
      },
      "index": {
        "description": "",
        "hierarchy": "Finance Quote Yahoo",
        "module": "Finance.Quote.Yahoo",
        "name": "HistoricalQuote",
        "normalized": "",
        "package": "Finance-Quote-Yahoo",
        "partial": "Historical Quote",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Finance-Quote-Yahoo/docs/Finance-Quote-Yahoo.html#v:Monthly",
      "description": {
        "fct-module": "Finance.Quote.Yahoo",
        "fct-package": "Finance-Quote-Yahoo",
        "fct-signature": "Monthly",
        "fct-source": "src/Finance-Quote-Yahoo.html#QuoteFrequency",
        "fct-type": "function",
        "title": "Monthly"
      },
      "index": {
        "description": "",
        "hierarchy": "Finance Quote Yahoo",
        "module": "Finance.Quote.Yahoo",
        "name": "Monthly",
        "normalized": "",
        "package": "Finance-Quote-Yahoo",
        "partial": "Monthly",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Finance-Quote-Yahoo/docs/Finance-Quote-Yahoo.html#v:Weekly",
      "description": {
        "fct-module": "Finance.Quote.Yahoo",
        "fct-package": "Finance-Quote-Yahoo",
        "fct-signature": "Weekly",
        "fct-source": "src/Finance-Quote-Yahoo.html#QuoteFrequency",
        "fct-type": "function",
        "title": "Weekly"
      },
      "index": {
        "description": "",
        "hierarchy": "Finance Quote Yahoo",
        "module": "Finance.Quote.Yahoo",
        "name": "Weekly",
        "normalized": "",
        "package": "Finance-Quote-Yahoo",
        "partial": "Weekly",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Finance-Quote-Yahoo/docs/Finance-Quote-Yahoo.html#v:adjclose",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Finance.Quote.Yahoo",
        "fct-package": "Finance-Quote-Yahoo",
        "fct-signature": "QuoteCurrency",
        "fct-source": "src/Finance-Quote-Yahoo.html#HistoricalQuote",
        "fct-type": "function",
        "title": "adjclose"
      },
      "index": {
        "description": "",
        "hierarchy": "Finance Quote Yahoo",
        "module": "Finance.Quote.Yahoo",
        "name": "adjclose",
        "normalized": "",
        "package": "Finance-Quote-Yahoo",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Finance-Quote-Yahoo/docs/Finance-Quote-Yahoo.html#v:baseHistoricalURI",
      "description": {
        "fct-module": "Finance.Quote.Yahoo",
        "fct-package": "Finance-Quote-Yahoo",
        "fct-signature": "[Char]",
        "fct-source": "src/Finance-Quote-Yahoo.html#baseHistoricalURI",
        "fct-type": "function",
        "title": "baseHistoricalURI"
      },
      "index": {
        "description": "",
        "hierarchy": "Finance Quote Yahoo",
        "module": "Finance.Quote.Yahoo",
        "name": "baseHistoricalURI",
        "normalized": "[Char]",
        "package": "Finance-Quote-Yahoo",
        "partial": "Historical URI",
        "signature": "[Char]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Finance-Quote-Yahoo/docs/Finance-Quote-Yahoo.html#v:baseQuoteURI",
      "description": {
        "fct-module": "Finance.Quote.Yahoo",
        "fct-package": "Finance-Quote-Yahoo",
        "fct-signature": "String",
        "fct-source": "src/Finance-Quote-Yahoo.html#baseQuoteURI",
        "fct-type": "function",
        "title": "baseQuoteURI"
      },
      "index": {
        "description": "",
        "hierarchy": "Finance Quote Yahoo",
        "module": "Finance.Quote.Yahoo",
        "name": "baseQuoteURI",
        "normalized": "",
        "package": "Finance-Quote-Yahoo",
        "partial": "Quote URI",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Finance-Quote-Yahoo/docs/Finance-Quote-Yahoo.html#v:close",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Finance.Quote.Yahoo",
        "fct-package": "Finance-Quote-Yahoo",
        "fct-signature": "QuoteCurrency",
        "fct-source": "src/Finance-Quote-Yahoo.html#HistoricalQuote",
        "fct-type": "function",
        "title": "close"
      },
      "index": {
        "description": "",
        "hierarchy": "Finance Quote Yahoo",
        "module": "Finance.Quote.Yahoo",
        "name": "close",
        "normalized": "",
        "package": "Finance-Quote-Yahoo",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Finance-Quote-Yahoo/docs/Finance-Quote-Yahoo.html#v:date",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Finance.Quote.Yahoo",
        "fct-package": "Finance-Quote-Yahoo",
        "fct-signature": "Day",
        "fct-source": "src/Finance-Quote-Yahoo.html#HistoricalQuote",
        "fct-type": "function",
        "title": "date"
      },
      "index": {
        "description": "",
        "hierarchy": "Finance Quote Yahoo",
        "module": "Finance.Quote.Yahoo",
        "name": "date",
        "normalized": "",
        "package": "Finance-Quote-Yahoo",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Finance-Quote-Yahoo/docs/Finance-Quote-Yahoo.html#v:defaultQuoteFields",
      "description": {
        "fct-module": "Finance.Quote.Yahoo",
        "fct-package": "Finance-Quote-Yahoo",
        "fct-signature": "[QuoteField]",
        "fct-source": "src/Finance-Quote-Yahoo.html#defaultQuoteFields",
        "fct-type": "function",
        "title": "defaultQuoteFields"
      },
      "index": {
        "description": "",
        "hierarchy": "Finance Quote Yahoo",
        "module": "Finance.Quote.Yahoo",
        "name": "defaultQuoteFields",
        "normalized": "[QuoteField]",
        "package": "Finance-Quote-Yahoo",
        "partial": "Quote Fields",
        "signature": "[QuoteField]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Finance-Quote-Yahoo/docs/Finance-Quote-Yahoo.html#v:getHistoricalQuote",
      "description": {
        "fct-descr": "\u003cp\u003egetHistoricalQuote takes a stock symbol, start and end date ranges,\n a quote frequency setting, and obtains the HistoricalQuote lines \n for this given date range and quote frequency. \n Supported frequencies are \u003ca\u003eDaily\u003c/a\u003e, \u003ca\u003eWeekly\u003c/a\u003e, \n \u003ca\u003eMonthly\u003c/a\u003e or \u003ca\u003eDividend\u003c/a\u003e. Hopefully these are self-explanatory.\n Nothing is returned on any error, but note if you ask for the quotes\n based on Dividend frequency for a stock that pays no dividends, you\n will not see Nothing, but just an empty result.\n Check finance.yahoo.com to see how\n far they offer quote history for a symbol you are interested in.\n Note! Yahoo takes some liberties with dates due to weekends and \n holidays and market closures. Exported.\n\u003c/p\u003e\u003cp\u003eHere is what a sample result looks like for one day in the history:\n\u003c/p\u003e\u003cp\u003eHistoricalQuote {symbol = \"YHOO\",\n                   date = 2007-07-02, \n                   open = 27.19, \n                   high = 27.27, \n                   low = 26.76, \n                   close = 26.86, \n                   adjclose = 26.86, \n                   volume = 21011000}\n\u003c/p\u003e",
        "fct-module": "Finance.Quote.Yahoo",
        "fct-package": "Finance-Quote-Yahoo",
        "fct-signature": "QuoteSymbol -\u003e Day -\u003e Day -\u003e QuoteFrequency -\u003e IO (Maybe [HistoricalQuote])",
        "fct-source": "src/Finance-Quote-Yahoo.html#getHistoricalQuote",
        "fct-type": "function",
        "title": "getHistoricalQuote"
      },
      "index": {
        "description": "getHistoricalQuote takes stock symbol start and end date ranges quote frequency setting and obtains the HistoricalQuote lines for this given date range and quote frequency Supported frequencies are Daily Weekly Monthly or Dividend Hopefully these are self-explanatory Nothing is returned on any error but note if you ask for the quotes based on Dividend frequency for stock that pays no dividends you will not see Nothing but just an empty result Check finance.yahoo.com to see how far they offer quote history for symbol you are interested in Note Yahoo takes some liberties with dates due to weekends and holidays and market closures Exported Here is what sample result looks like for one day in the history HistoricalQuote symbol YHOO date open high low close adjclose volume",
        "hierarchy": "Finance Quote Yahoo",
        "module": "Finance.Quote.Yahoo",
        "name": "getHistoricalQuote",
        "normalized": "QuoteSymbol-\u003eDay-\u003eDay-\u003eQuoteFrequency-\u003eIO(Maybe[HistoricalQuote])",
        "package": "Finance-Quote-Yahoo",
        "partial": "Historical Quote",
        "signature": "QuoteSymbol-\u003eDay-\u003eDay-\u003eQuoteFrequency-\u003eIO(Maybe[HistoricalQuote])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Finance-Quote-Yahoo/docs/Finance-Quote-Yahoo.html#v:getQuote",
      "description": {
        "fct-descr": "\u003cp\u003egetQuote will take a list of symbols, a list of fields, and will \n return a Data.Map, where the key type is\n (symbol,field) \n and the value type is whatever quote value string is returned.\n An example map entry: \n\u003c/p\u003e\u003cp\u003ekey: (\"YHOO\",\"c\"), value: \"24.00\"\n\u003c/p\u003e\u003cp\u003eWhich gives you the closing price (c) for the symbol YHOO.\n\u003c/p\u003e\u003cp\u003eNOTE!\n This function does NOT alter the casing of the quote symbols passed\n in the first parameter. These symbols are used as the first element\n of the Map key tuple without altering them. Be careful! This function\n is exported.\n\u003c/p\u003e",
        "fct-module": "Finance.Quote.Yahoo",
        "fct-package": "Finance-Quote-Yahoo",
        "fct-signature": "[QuoteSymbol] -\u003e [QuoteField] -\u003e IO (Maybe (Map (QuoteSymbol, QuoteField) QuoteValue))",
        "fct-source": "src/Finance-Quote-Yahoo.html#getQuote",
        "fct-type": "function",
        "title": "getQuote"
      },
      "index": {
        "description": "getQuote will take list of symbols list of fields and will return Data.Map where the key type is symbol field and the value type is whatever quote value string is returned An example map entry key YHOO value Which gives you the closing price for the symbol YHOO NOTE This function does NOT alter the casing of the quote symbols passed in the first parameter These symbols are used as the first element of the Map key tuple without altering them Be careful This function is exported",
        "hierarchy": "Finance Quote Yahoo",
        "module": "Finance.Quote.Yahoo",
        "name": "getQuote",
        "normalized": "[QuoteSymbol]-\u003e[QuoteField]-\u003eIO(Maybe(Map(QuoteSymbol,QuoteField)QuoteValue))",
        "package": "Finance-Quote-Yahoo",
        "partial": "Quote",
        "signature": "[QuoteSymbol]-\u003e[QuoteField]-\u003eIO(Maybe(Map(QuoteSymbol,QuoteField)QuoteValue))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Finance-Quote-Yahoo/docs/Finance-Quote-Yahoo.html#v:high",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Finance.Quote.Yahoo",
        "fct-package": "Finance-Quote-Yahoo",
        "fct-signature": "QuoteCurrency",
        "fct-source": "src/Finance-Quote-Yahoo.html#HistoricalQuote",
        "fct-type": "function",
        "title": "high"
      },
      "index": {
        "description": "",
        "hierarchy": "Finance Quote Yahoo",
        "module": "Finance.Quote.Yahoo",
        "name": "high",
        "normalized": "",
        "package": "Finance-Quote-Yahoo",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Finance-Quote-Yahoo/docs/Finance-Quote-Yahoo.html#v:low",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Finance.Quote.Yahoo",
        "fct-package": "Finance-Quote-Yahoo",
        "fct-signature": "QuoteCurrency",
        "fct-source": "src/Finance-Quote-Yahoo.html#HistoricalQuote",
        "fct-type": "function",
        "title": "low"
      },
      "index": {
        "description": "",
        "hierarchy": "Finance Quote Yahoo",
        "module": "Finance.Quote.Yahoo",
        "name": "low",
        "normalized": "",
        "package": "Finance-Quote-Yahoo",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Finance-Quote-Yahoo/docs/Finance-Quote-Yahoo.html#v:open",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Finance.Quote.Yahoo",
        "fct-package": "Finance-Quote-Yahoo",
        "fct-signature": "QuoteCurrency",
        "fct-source": "src/Finance-Quote-Yahoo.html#HistoricalQuote",
        "fct-type": "function",
        "title": "open"
      },
      "index": {
        "description": "",
        "hierarchy": "Finance Quote Yahoo",
        "module": "Finance.Quote.Yahoo",
        "name": "open",
        "normalized": "",
        "package": "Finance-Quote-Yahoo",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Finance-Quote-Yahoo/docs/Finance-Quote-Yahoo.html#v:quoteReq",
      "description": {
        "fct-descr": "\u003cp\u003eThis is the base uri to get csv quotes. Exported. \n\u003c/p\u003e\u003cp\u003eIf you just want the name, latest price and change, use this. Exported.\n\u003c/p\u003e\u003cp\u003equoteReq will build a String representation of a Yahoo Finance CSV\n request URI. \n\u003c/p\u003e",
        "fct-module": "Finance.Quote.Yahoo",
        "fct-package": "Finance-Quote-Yahoo",
        "fct-signature": "[QuoteSymbol] -\u003e [QuoteField] -\u003e String",
        "fct-source": "src/Finance-Quote-Yahoo.html#quoteReq",
        "fct-type": "function",
        "title": "quoteReq"
      },
      "index": {
        "description": "This is the base uri to get csv quotes Exported If you just want the name latest price and change use this Exported quoteReq will build String representation of Yahoo Finance CSV request URI",
        "hierarchy": "Finance Quote Yahoo",
        "module": "Finance.Quote.Yahoo",
        "name": "quoteReq",
        "normalized": "[QuoteSymbol]-\u003e[QuoteField]-\u003eString",
        "package": "Finance-Quote-Yahoo",
        "partial": "Req",
        "signature": "[QuoteSymbol]-\u003e[QuoteField]-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Finance-Quote-Yahoo/docs/Finance-Quote-Yahoo.html#v:symbol",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Finance.Quote.Yahoo",
        "fct-package": "Finance-Quote-Yahoo",
        "fct-signature": "QuoteSymbol",
        "fct-source": "src/Finance-Quote-Yahoo.html#HistoricalQuote",
        "fct-type": "function",
        "title": "symbol"
      },
      "index": {
        "description": "",
        "hierarchy": "Finance Quote Yahoo",
        "module": "Finance.Quote.Yahoo",
        "name": "symbol",
        "normalized": "",
        "package": "Finance-Quote-Yahoo",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Finance-Quote-Yahoo/docs/Finance-Quote-Yahoo.html#v:volume",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Finance.Quote.Yahoo",
        "fct-package": "Finance-Quote-Yahoo",
        "fct-signature": "Int",
        "fct-source": "src/Finance-Quote-Yahoo.html#HistoricalQuote",
        "fct-type": "function",
        "title": "volume"
      },
      "index": {
        "description": "",
        "hierarchy": "Finance Quote Yahoo",
        "module": "Finance.Quote.Yahoo",
        "name": "volume",
        "normalized": "",
        "package": "Finance-Quote-Yahoo",
        "partial": "",
        "signature": ""
      }
    }
  }
]