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
        "word": "tsparse"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParses U.S. federal Thrift Savings Plan (TSP) statements.\n\u003c/p\u003e\u003cp\u003eThis module works with PDF TSP statements downloaded from the TSP\n web site. It works with the statement format used as of July 2013.\n The format recently changed to allow for Roth contributions.  This\n works on civilian, FERS statements; maybe it works on others, but I\n cannot test these (if you test these and find bugs, send me patches\n and I will merge them.)\n\u003c/p\u003e\u003cp\u003eYou need to have the pdftotext program installed and available on\n your PATH.  This program is part of the poppler project.  On Debian\n GNU/Linux systems, it is part of the poppler-utils package.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "TsParse",
          "name": "TsParse",
          "package": "tsparse",
          "source": "src/TsParse.html",
          "type": "module"
        },
        "index": {
          "description": "Parses U.S federal Thrift Savings Plan TSP statements This module works with PDF TSP statements downloaded from the TSP web site It works with the statement format used as of July The format recently changed to allow for Roth contributions This works on civilian FERS statements maybe it works on others but cannot test these if you test these and find bugs send me patches and will merge them You need to have the pdftotext program installed and available on your PATH This program is part of the poppler project On Debian GNU Linux systems it is part of the poppler-utils package",
          "hierarchy": "TsParse",
          "module": "TsParse",
          "name": "TsParse",
          "package": "tsparse",
          "partial": "Ts Parse",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA single fund in the \u003ccode\u003eYOUR TRANSACTION DETAIL BY FUND\u003c/code\u003e section\n (e.g. the \u003ccode\u003eG Fund\u003c/code\u003e, \u003ccode\u003eL 2040 Fund\u003c/code\u003e, etc.)\n\u003c/p\u003e",
          "module": "TsParse",
          "name": "ByFund",
          "package": "tsparse",
          "source": "src/TsParse.html#ByFund",
          "type": "data"
        },
        "index": {
          "description": "single fund in the YOUR TRANSACTION DETAIL BY FUND section e.g the Fund Fund etc",
          "hierarchy": "TsParse",
          "module": "TsParse",
          "name": "ByFund",
          "package": "tsparse",
          "partial": "By Fund",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#t:ByFund"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe beginning balance in a \u003ccode\u003eYOUR TRANSACTION DETAIL BY FUND\u003c/code\u003e\n section.\n\u003c/p\u003e",
          "module": "TsParse",
          "name": "ByFundBeginningBal",
          "package": "tsparse",
          "source": "src/TsParse.html#ByFundBeginningBal",
          "type": "data"
        },
        "index": {
          "description": "The beginning balance in YOUR TRANSACTION DETAIL BY FUND section",
          "hierarchy": "TsParse",
          "module": "TsParse",
          "name": "ByFundBeginningBal",
          "package": "tsparse",
          "partial": "By Fund Beginning Bal",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#t:ByFundBeginningBal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnding balance in the \u003ccode\u003eYOUR TRANSACTION DETAIL BY FUND\u003c/code\u003e section.\n\u003c/p\u003e",
          "module": "TsParse",
          "name": "ByFundEndingBal",
          "package": "tsparse",
          "source": "src/TsParse.html#ByFundEndingBal",
          "type": "data"
        },
        "index": {
          "description": "Ending balance in the YOUR TRANSACTION DETAIL BY FUND section",
          "hierarchy": "TsParse",
          "module": "TsParse",
          "name": "ByFundEndingBal",
          "package": "tsparse",
          "partial": "By Fund Ending Bal",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#t:ByFundEndingBal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGain or Loss This Quarter in the \u003ccode\u003eYOUR TRANSACTION DETAIL BY\n FUND\u003c/code\u003e section.\n\u003c/p\u003e",
          "module": "TsParse",
          "name": "ByFundGainLoss",
          "package": "tsparse",
          "source": "src/TsParse.html#ByFundGainLoss",
          "type": "data"
        },
        "index": {
          "description": "Gain or Loss This Quarter in the YOUR TRANSACTION DETAIL BY FUND section",
          "hierarchy": "TsParse",
          "module": "TsParse",
          "name": "ByFundGainLoss",
          "package": "tsparse",
          "partial": "By Fund Gain Loss",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#t:ByFundGainLoss"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA single posting in the \u003ccode\u003eYOUR TRANSACTION DETAIL BY FUND\u003c/code\u003e section.\n\u003c/p\u003e",
          "module": "TsParse",
          "name": "ByFundPosting",
          "package": "tsparse",
          "source": "src/TsParse.html#ByFundPosting",
          "type": "data"
        },
        "index": {
          "description": "single posting in the YOUR TRANSACTION DETAIL BY FUND section",
          "hierarchy": "TsParse",
          "module": "TsParse",
          "name": "ByFundPosting",
          "package": "tsparse",
          "partial": "By Fund Posting",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#t:ByFundPosting"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents the entire \u003ccode\u003eYOUR TRANSACTION DETAIL BY SOURCE\u003c/code\u003e section.\n\u003c/p\u003e",
          "module": "TsParse",
          "name": "BySource",
          "package": "tsparse",
          "source": "src/TsParse.html#BySource",
          "type": "data"
        },
        "index": {
          "description": "Represents the entire YOUR TRANSACTION DETAIL BY SOURCE section",
          "hierarchy": "TsParse",
          "module": "TsParse",
          "name": "BySource",
          "package": "tsparse",
          "partial": "By Source",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#t:BySource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eYOUR TRANSACTION DETAIL BY SOURCE\u003c/code\u003e Beginning Balance.\n\u003c/p\u003e",
          "module": "TsParse",
          "name": "BySourceBeginningBal",
          "package": "tsparse",
          "source": "src/TsParse.html#BySourceBeginningBal",
          "type": "type"
        },
        "index": {
          "description": "YOUR TRANSACTION DETAIL BY SOURCE Beginning Balance",
          "hierarchy": "TsParse",
          "module": "TsParse",
          "name": "BySourceBeginningBal",
          "package": "tsparse",
          "partial": "By Source Beginning Bal",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#t:BySourceBeginningBal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eYOUR TRANSACTION DETAIL BY SOURCE\u003c/code\u003e Ending Balance.\n\u003c/p\u003e",
          "module": "TsParse",
          "name": "BySourceEndingBal",
          "package": "tsparse",
          "source": "src/TsParse.html#BySourceEndingBal",
          "type": "type"
        },
        "index": {
          "description": "YOUR TRANSACTION DETAIL BY SOURCE Ending Balance",
          "hierarchy": "TsParse",
          "module": "TsParse",
          "name": "BySourceEndingBal",
          "package": "tsparse",
          "partial": "By Source Ending Bal",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#t:BySourceEndingBal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eYOUR TRANSACTION DETAIL BY SOURCE\u003c/code\u003e Gain or Loss This Quarter.\n\u003c/p\u003e",
          "module": "TsParse",
          "name": "BySourceGainLoss",
          "package": "tsparse",
          "source": "src/TsParse.html#BySourceGainLoss",
          "type": "type"
        },
        "index": {
          "description": "YOUR TRANSACTION DETAIL BY SOURCE Gain or Loss This Quarter",
          "hierarchy": "TsParse",
          "module": "TsParse",
          "name": "BySourceGainLoss",
          "package": "tsparse",
          "partial": "By Source Gain Loss",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#t:BySourceGainLoss"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TsParse",
          "name": "BySourcePosting",
          "package": "tsparse",
          "source": "src/TsParse.html#BySourcePosting",
          "type": "data"
        },
        "index": {
          "hierarchy": "TsParse",
          "module": "TsParse",
          "name": "BySourcePosting",
          "package": "tsparse",
          "partial": "By Source Posting",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#t:BySourcePosting"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe TSP statement has several lines in the \u003ccode\u003eYOUR TRANSACTION\n DETAIL BY SOURCE\u003c/code\u003e section that contain summary data: \u003ccode\u003eBeginning\n Balance\u003c/code\u003e, \u003ccode\u003eGain or Loss This Quarter\u003c/code\u003e, and \u003ccode\u003eEnding Balance\u003c/code\u003e. Since\n the columns in these lines are all the same they are all\n represented by this single type. Type synonyms\n \u003ccode\u003e\u003ca\u003eBySourceBeginningBal\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eBySourceGainLoss\u003c/a\u003e\u003c/code\u003e, and\n \u003ccode\u003e\u003ca\u003eBySourceEndingBal\u003c/a\u003e\u003c/code\u003e are used as appropriate.\n\u003c/p\u003e",
          "module": "TsParse",
          "name": "BySourceSummary",
          "package": "tsparse",
          "source": "src/TsParse.html#BySourceSummary",
          "type": "data"
        },
        "index": {
          "description": "The TSP statement has several lines in the YOUR TRANSACTION DETAIL BY SOURCE section that contain summary data Beginning Balance Gain or Loss This Quarter and Ending Balance Since the columns in these lines are all the same they are all represented by this single type Type synonyms BySourceBeginningBal BySourceGainLoss and BySourceEndingBal are used as appropriate",
          "hierarchy": "TsParse",
          "module": "TsParse",
          "name": "BySourceSummary",
          "package": "tsparse",
          "partial": "By Source Summary",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#t:BySourceSummary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAny data type that is Dollars on the TSP statement.\n\u003c/p\u003e",
          "module": "TsParse",
          "name": "Dollars",
          "package": "tsparse",
          "source": "src/TsParse.html#Dollars",
          "type": "type"
        },
        "index": {
          "description": "Any data type that is Dollars on the TSP statement",
          "hierarchy": "TsParse",
          "module": "TsParse",
          "name": "Dollars",
          "package": "tsparse",
          "partial": "Dollars",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#t:Dollars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe name of a fund, eg \u003ccode\u003eC Fund\u003c/code\u003e. This is a list of words; each\n word will not contain any spaces.\n\u003c/p\u003e",
          "module": "TsParse",
          "name": "FundName",
          "package": "tsparse",
          "source": "src/TsParse.html#FundName",
          "type": "type"
        },
        "index": {
          "description": "The name of fund eg Fund This is list of words each word will not contain any spaces",
          "hierarchy": "TsParse",
          "module": "TsParse",
          "name": "FundName",
          "package": "tsparse",
          "partial": "Fund Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#t:FundName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TsParse",
          "name": "Pretty",
          "package": "tsparse",
          "source": "src/TsParse.html#Pretty",
          "type": "class"
        },
        "index": {
          "hierarchy": "TsParse",
          "module": "TsParse",
          "name": "Pretty",
          "package": "tsparse",
          "partial": "Pretty",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#t:Pretty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAny data type that is a number of shares on the TSP statement.\n\u003c/p\u003e",
          "module": "TsParse",
          "name": "Shares",
          "package": "tsparse",
          "source": "src/TsParse.html#Shares",
          "type": "type"
        },
        "index": {
          "description": "Any data type that is number of shares on the TSP statement",
          "hierarchy": "TsParse",
          "module": "TsParse",
          "name": "Shares",
          "package": "tsparse",
          "partial": "Shares",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#t:Shares"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll data that is parsed from the TSP statement is in this\n type. The parser does not attempt to parse any of the data that is\n on Page 1 of the PDF; most of this data all appears elsewhere on\n the statement and can be calculated using the data that is in this\n type (and besides, the data on Page 1 is in a multi-column format\n that would be difficult to parse; since the data is all elsewhere,\n it's not worth the effort.) One exception is the investment\n allocation for future contributions, which does not appear\n elsewhere.\n\u003c/p\u003e\u003cp\u003eIn addition, the statement contains a quarterly account summary.\n This also is not parsed because it can be derived from all the data\n that is elsewhere on the statement.\n\u003c/p\u003e",
          "module": "TsParse",
          "name": "TspStatement",
          "package": "tsparse",
          "source": "src/TsParse.html#TspStatement",
          "type": "data"
        },
        "index": {
          "description": "All data that is parsed from the TSP statement is in this type The parser does not attempt to parse any of the data that is on Page of the PDF most of this data all appears elsewhere on the statement and can be calculated using the data that is in this type and besides the data on Page is in multi-column format that would be difficult to parse since the data is all elsewhere it not worth the effort One exception is the investment allocation for future contributions which does not appear elsewhere In addition the statement contains quarterly account summary This also is not parsed because it can be derived from all the data that is elsewhere on the statement",
          "hierarchy": "TsParse",
          "module": "TsParse",
          "name": "TspStatement",
          "package": "tsparse",
          "partial": "Tsp Statement",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#t:TspStatement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA list of words that indicates the transaction type.  Each string\n in this list will not have any spaces in it.\n\u003c/p\u003e",
          "module": "TsParse",
          "name": "TxnType",
          "package": "tsparse",
          "source": "src/TsParse.html#TxnType",
          "type": "type"
        },
        "index": {
          "description": "list of words that indicates the transaction type Each string in this list will not have any spaces in it",
          "hierarchy": "TsParse",
          "module": "TsParse",
          "name": "TxnType",
          "package": "tsparse",
          "partial": "Txn Type",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#t:TxnType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TsParse",
          "name": "ByFund",
          "package": "tsparse",
          "signature": "ByFund",
          "source": "src/TsParse.html#ByFund",
          "type": "function"
        },
        "index": {
          "hierarchy": "TsParse",
          "module": "TsParse",
          "name": "ByFund",
          "package": "tsparse",
          "partial": "By Fund",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:ByFund"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TsParse",
          "name": "ByFundBeginningBal",
          "package": "tsparse",
          "signature": "ByFundBeginningBal",
          "source": "src/TsParse.html#ByFundBeginningBal",
          "type": "function"
        },
        "index": {
          "hierarchy": "TsParse",
          "module": "TsParse",
          "name": "ByFundBeginningBal",
          "package": "tsparse",
          "partial": "By Fund Beginning Bal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:ByFundBeginningBal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TsParse",
          "name": "ByFundEndingBal",
          "package": "tsparse",
          "signature": "ByFundEndingBal",
          "source": "src/TsParse.html#ByFundEndingBal",
          "type": "function"
        },
        "index": {
          "hierarchy": "TsParse",
          "module": "TsParse",
          "name": "ByFundEndingBal",
          "package": "tsparse",
          "partial": "By Fund Ending Bal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:ByFundEndingBal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TsParse",
          "name": "ByFundGainLoss",
          "package": "tsparse",
          "signature": "ByFundGainLoss",
          "source": "src/TsParse.html#ByFundGainLoss",
          "type": "function"
        },
        "index": {
          "hierarchy": "TsParse",
          "module": "TsParse",
          "name": "ByFundGainLoss",
          "package": "tsparse",
          "partial": "By Fund Gain Loss",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:ByFundGainLoss"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TsParse",
          "name": "ByFundPosting",
          "package": "tsparse",
          "signature": "ByFundPosting",
          "source": "src/TsParse.html#ByFundPosting",
          "type": "function"
        },
        "index": {
          "hierarchy": "TsParse",
          "module": "TsParse",
          "name": "ByFundPosting",
          "package": "tsparse",
          "partial": "By Fund Posting",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:ByFundPosting"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TsParse",
          "name": "BySource",
          "package": "tsparse",
          "signature": "BySource",
          "source": "src/TsParse.html#BySource",
          "type": "function"
        },
        "index": {
          "hierarchy": "TsParse",
          "module": "TsParse",
          "name": "BySource",
          "package": "tsparse",
          "partial": "By Source",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:BySource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TsParse",
          "name": "BySourcePosting",
          "package": "tsparse",
          "signature": "BySourcePosting",
          "source": "src/TsParse.html#BySourcePosting",
          "type": "function"
        },
        "index": {
          "hierarchy": "TsParse",
          "module": "TsParse",
          "name": "BySourcePosting",
          "package": "tsparse",
          "partial": "By Source Posting",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:BySourcePosting"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TsParse",
          "name": "BySourceSummary",
          "package": "tsparse",
          "signature": "BySourceSummary",
          "source": "src/TsParse.html#BySourceSummary",
          "type": "function"
        },
        "index": {
          "hierarchy": "TsParse",
          "module": "TsParse",
          "name": "BySourceSummary",
          "package": "tsparse",
          "partial": "By Source Summary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:BySourceSummary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TsParse",
          "name": "TspStatement",
          "package": "tsparse",
          "signature": "TspStatement",
          "source": "src/TsParse.html#TspStatement",
          "type": "function"
        },
        "index": {
          "hierarchy": "TsParse",
          "module": "TsParse",
          "name": "TspStatement",
          "package": "tsparse",
          "partial": "Tsp Statement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:TspStatement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TsParse",
          "name": "bfBeginningBal",
          "package": "tsparse",
          "signature": "ByFundBeginningBal",
          "source": "src/TsParse.html#ByFund",
          "type": "function"
        },
        "index": {
          "hierarchy": "TsParse",
          "module": "TsParse",
          "name": "bfBeginningBal",
          "package": "tsparse",
          "partial": "Beginning Bal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:bfBeginningBal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TsParse",
          "name": "bfEndingBal",
          "package": "tsparse",
          "signature": "ByFundEndingBal",
          "source": "src/TsParse.html#ByFund",
          "type": "function"
        },
        "index": {
          "hierarchy": "TsParse",
          "module": "TsParse",
          "name": "bfEndingBal",
          "package": "tsparse",
          "partial": "Ending Bal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:bfEndingBal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TsParse",
          "name": "bfFundName",
          "package": "tsparse",
          "signature": "FundName",
          "source": "src/TsParse.html#ByFund",
          "type": "function"
        },
        "index": {
          "hierarchy": "TsParse",
          "module": "TsParse",
          "name": "bfFundName",
          "package": "tsparse",
          "partial": "Fund Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:bfFundName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TsParse",
          "name": "bfGainLoss",
          "package": "tsparse",
          "signature": "ByFundGainLoss",
          "source": "src/TsParse.html#ByFund",
          "type": "function"
        },
        "index": {
          "hierarchy": "TsParse",
          "module": "TsParse",
          "name": "bfGainLoss",
          "package": "tsparse",
          "partial": "Gain Loss",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:bfGainLoss"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TsParse",
          "name": "bfPostings",
          "package": "tsparse",
          "signature": "[ByFundPosting]",
          "source": "src/TsParse.html#ByFund",
          "type": "function"
        },
        "index": {
          "hierarchy": "TsParse",
          "module": "TsParse",
          "name": "bfPostings",
          "normalized": "[ByFundPosting]",
          "package": "tsparse",
          "partial": "Postings",
          "signature": "[ByFundPosting]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:bfPostings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TsParse",
          "name": "bfbbDollarBalance",
          "package": "tsparse",
          "signature": "Dollars",
          "source": "src/TsParse.html#ByFundBeginningBal",
          "type": "function"
        },
        "index": {
          "hierarchy": "TsParse",
          "module": "TsParse",
          "name": "bfbbDollarBalance",
          "package": "tsparse",
          "partial": "Dollar Balance",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:bfbbDollarBalance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TsParse",
          "name": "bfbbNumShares",
          "package": "tsparse",
          "signature": "Shares",
          "source": "src/TsParse.html#ByFundBeginningBal",
          "type": "function"
        },
        "index": {
          "hierarchy": "TsParse",
          "module": "TsParse",
          "name": "bfbbNumShares",
          "package": "tsparse",
          "partial": "Num Shares",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:bfbbNumShares"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TsParse",
          "name": "bfbbSharePrice",
          "package": "tsparse",
          "signature": "Dollars",
          "source": "src/TsParse.html#ByFundBeginningBal",
          "type": "function"
        },
        "index": {
          "hierarchy": "TsParse",
          "module": "TsParse",
          "name": "bfbbSharePrice",
          "package": "tsparse",
          "partial": "Share Price",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:bfbbSharePrice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TsParse",
          "name": "bfebDollarBalance",
          "package": "tsparse",
          "signature": "Dollars",
          "source": "src/TsParse.html#ByFundEndingBal",
          "type": "function"
        },
        "index": {
          "hierarchy": "TsParse",
          "module": "TsParse",
          "name": "bfebDollarBalance",
          "package": "tsparse",
          "partial": "Dollar Balance",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:bfebDollarBalance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TsParse",
          "name": "bfebNumShares",
          "package": "tsparse",
          "signature": "Shares",
          "source": "src/TsParse.html#ByFundEndingBal",
          "type": "function"
        },
        "index": {
          "hierarchy": "TsParse",
          "module": "TsParse",
          "name": "bfebNumShares",
          "package": "tsparse",
          "partial": "Num Shares",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:bfebNumShares"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TsParse",
          "name": "bfebSharePrice",
          "package": "tsparse",
          "signature": "Dollars",
          "source": "src/TsParse.html#ByFundEndingBal",
          "type": "function"
        },
        "index": {
          "hierarchy": "TsParse",
          "module": "TsParse",
          "name": "bfebSharePrice",
          "package": "tsparse",
          "partial": "Share Price",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:bfebSharePrice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TsParse",
          "name": "bfglDollarBalance",
          "package": "tsparse",
          "signature": "Dollars",
          "source": "src/TsParse.html#ByFundGainLoss",
          "type": "function"
        },
        "index": {
          "hierarchy": "TsParse",
          "module": "TsParse",
          "name": "bfglDollarBalance",
          "package": "tsparse",
          "partial": "Dollar Balance",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:bfglDollarBalance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TsParse",
          "name": "bfpNumShares",
          "package": "tsparse",
          "signature": "Shares",
          "source": "src/TsParse.html#ByFundPosting",
          "type": "function"
        },
        "index": {
          "hierarchy": "TsParse",
          "module": "TsParse",
          "name": "bfpNumShares",
          "package": "tsparse",
          "partial": "Num Shares",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:bfpNumShares"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TsParse",
          "name": "bfpPostingDate",
          "package": "tsparse",
          "signature": "Day",
          "source": "src/TsParse.html#ByFundPosting",
          "type": "function"
        },
        "index": {
          "hierarchy": "TsParse",
          "module": "TsParse",
          "name": "bfpPostingDate",
          "package": "tsparse",
          "partial": "Posting Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:bfpPostingDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TsParse",
          "name": "bfpRoth",
          "package": "tsparse",
          "signature": "Dollars",
          "source": "src/TsParse.html#ByFundPosting",
          "type": "function"
        },
        "index": {
          "hierarchy": "TsParse",
          "module": "TsParse",
          "name": "bfpRoth",
          "package": "tsparse",
          "partial": "Roth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:bfpRoth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TsParse",
          "name": "bfpSharePrice",
          "package": "tsparse",
          "signature": "Dollars",
          "source": "src/TsParse.html#ByFundPosting",
          "type": "function"
        },
        "index": {
          "hierarchy": "TsParse",
          "module": "TsParse",
          "name": "bfpSharePrice",
          "package": "tsparse",
          "partial": "Share Price",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:bfpSharePrice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TsParse",
          "name": "bfpTotal",
          "package": "tsparse",
          "signature": "Dollars",
          "source": "src/TsParse.html#ByFundPosting",
          "type": "function"
        },
        "index": {
          "hierarchy": "TsParse",
          "module": "TsParse",
          "name": "bfpTotal",
          "package": "tsparse",
          "partial": "Total",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:bfpTotal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TsParse",
          "name": "bfpTraditional",
          "package": "tsparse",
          "signature": "Dollars",
          "source": "src/TsParse.html#ByFundPosting",
          "type": "function"
        },
        "index": {
          "hierarchy": "TsParse",
          "module": "TsParse",
          "name": "bfpTraditional",
          "package": "tsparse",
          "partial": "Traditional",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:bfpTraditional"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TsParse",
          "name": "bfpTxnType",
          "package": "tsparse",
          "signature": "[String]",
          "source": "src/TsParse.html#ByFundPosting",
          "type": "function"
        },
        "index": {
          "hierarchy": "TsParse",
          "module": "TsParse",
          "name": "bfpTxnType",
          "normalized": "[String]",
          "package": "tsparse",
          "partial": "Txn Type",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:bfpTxnType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TsParse",
          "name": "bsBeginningBal",
          "package": "tsparse",
          "signature": "BySourceBeginningBal",
          "source": "src/TsParse.html#BySource",
          "type": "function"
        },
        "index": {
          "hierarchy": "TsParse",
          "module": "TsParse",
          "name": "bsBeginningBal",
          "package": "tsparse",
          "partial": "Beginning Bal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:bsBeginningBal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TsParse",
          "name": "bsEndingBal",
          "package": "tsparse",
          "signature": "BySourceEndingBal",
          "source": "src/TsParse.html#BySource",
          "type": "function"
        },
        "index": {
          "hierarchy": "TsParse",
          "module": "TsParse",
          "name": "bsEndingBal",
          "package": "tsparse",
          "partial": "Ending Bal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:bsEndingBal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TsParse",
          "name": "bsGainLoss",
          "package": "tsparse",
          "signature": "BySourceGainLoss",
          "source": "src/TsParse.html#BySource",
          "type": "function"
        },
        "index": {
          "hierarchy": "TsParse",
          "module": "TsParse",
          "name": "bsGainLoss",
          "package": "tsparse",
          "partial": "Gain Loss",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:bsGainLoss"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TsParse",
          "name": "bsTxns",
          "package": "tsparse",
          "signature": "[BySourcePosting]",
          "source": "src/TsParse.html#BySource",
          "type": "function"
        },
        "index": {
          "hierarchy": "TsParse",
          "module": "TsParse",
          "name": "bsTxns",
          "normalized": "[BySourcePosting]",
          "package": "tsparse",
          "partial": "Txns",
          "signature": "[BySourcePosting]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:bsTxns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TsParse",
          "name": "bspAutomatic",
          "package": "tsparse",
          "signature": "Dollars",
          "source": "src/TsParse.html#BySourcePosting",
          "type": "function"
        },
        "index": {
          "hierarchy": "TsParse",
          "module": "TsParse",
          "name": "bspAutomatic",
          "package": "tsparse",
          "partial": "Automatic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:bspAutomatic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TsParse",
          "name": "bspMatching",
          "package": "tsparse",
          "signature": "Dollars",
          "source": "src/TsParse.html#BySourcePosting",
          "type": "function"
        },
        "index": {
          "hierarchy": "TsParse",
          "module": "TsParse",
          "name": "bspMatching",
          "package": "tsparse",
          "partial": "Matching",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:bspMatching"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TsParse",
          "name": "bspPayrollOffice",
          "package": "tsparse",
          "signature": "String",
          "source": "src/TsParse.html#BySourcePosting",
          "type": "function"
        },
        "index": {
          "hierarchy": "TsParse",
          "module": "TsParse",
          "name": "bspPayrollOffice",
          "package": "tsparse",
          "partial": "Payroll Office",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:bspPayrollOffice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TsParse",
          "name": "bspPostingDate",
          "package": "tsparse",
          "signature": "Day",
          "source": "src/TsParse.html#BySourcePosting",
          "type": "function"
        },
        "index": {
          "hierarchy": "TsParse",
          "module": "TsParse",
          "name": "bspPostingDate",
          "package": "tsparse",
          "partial": "Posting Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:bspPostingDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TsParse",
          "name": "bspRoth",
          "package": "tsparse",
          "signature": "Dollars",
          "source": "src/TsParse.html#BySourcePosting",
          "type": "function"
        },
        "index": {
          "hierarchy": "TsParse",
          "module": "TsParse",
          "name": "bspRoth",
          "package": "tsparse",
          "partial": "Roth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:bspRoth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TsParse",
          "name": "bspTotal",
          "package": "tsparse",
          "signature": "Dollars",
          "source": "src/TsParse.html#BySourcePosting",
          "type": "function"
        },
        "index": {
          "hierarchy": "TsParse",
          "module": "TsParse",
          "name": "bspTotal",
          "package": "tsparse",
          "partial": "Total",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:bspTotal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TsParse",
          "name": "bspTraditional",
          "package": "tsparse",
          "signature": "Dollars",
          "source": "src/TsParse.html#BySourcePosting",
          "type": "function"
        },
        "index": {
          "hierarchy": "TsParse",
          "module": "TsParse",
          "name": "bspTraditional",
          "package": "tsparse",
          "partial": "Traditional",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:bspTraditional"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TsParse",
          "name": "bspTxnType",
          "package": "tsparse",
          "signature": "TxnType",
          "source": "src/TsParse.html#BySourcePosting",
          "type": "function"
        },
        "index": {
          "hierarchy": "TsParse",
          "module": "TsParse",
          "name": "bspTxnType",
          "package": "tsparse",
          "partial": "Txn Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:bspTxnType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TsParse",
          "name": "bssAuto",
          "package": "tsparse",
          "signature": "Dollars",
          "source": "src/TsParse.html#BySourceSummary",
          "type": "function"
        },
        "index": {
          "hierarchy": "TsParse",
          "module": "TsParse",
          "name": "bssAuto",
          "package": "tsparse",
          "partial": "Auto",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:bssAuto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TsParse",
          "name": "bssMatching",
          "package": "tsparse",
          "signature": "Dollars",
          "source": "src/TsParse.html#BySourceSummary",
          "type": "function"
        },
        "index": {
          "hierarchy": "TsParse",
          "module": "TsParse",
          "name": "bssMatching",
          "package": "tsparse",
          "partial": "Matching",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:bssMatching"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TsParse",
          "name": "bssRoth",
          "package": "tsparse",
          "signature": "Dollars",
          "source": "src/TsParse.html#BySourceSummary",
          "type": "function"
        },
        "index": {
          "hierarchy": "TsParse",
          "module": "TsParse",
          "name": "bssRoth",
          "package": "tsparse",
          "partial": "Roth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:bssRoth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TsParse",
          "name": "bssTotal",
          "package": "tsparse",
          "signature": "Dollars",
          "source": "src/TsParse.html#BySourceSummary",
          "type": "function"
        },
        "index": {
          "hierarchy": "TsParse",
          "module": "TsParse",
          "name": "bssTotal",
          "package": "tsparse",
          "partial": "Total",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:bssTotal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TsParse",
          "name": "bssTraditional",
          "package": "tsparse",
          "signature": "Dollars",
          "source": "src/TsParse.html#BySourceSummary",
          "type": "function"
        },
        "index": {
          "hierarchy": "TsParse",
          "module": "TsParse",
          "name": "bssTraditional",
          "package": "tsparse",
          "partial": "Traditional",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:bssTraditional"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a plain text TSP statement.  The input must be generated\n by the pdftotext program.  This library was tested against\n pdftotext version 0.18.4, which came with Debian Wheezy.\n\u003c/p\u003e",
          "module": "TsParse",
          "name": "parseTsp",
          "package": "tsparse",
          "signature": "Parser TspStatement",
          "source": "src/TsParse.html#parseTsp",
          "type": "function"
        },
        "index": {
          "description": "Parses plain text TSP statement The input must be generated by the pdftotext program This library was tested against pdftotext version which came with Debian Wheezy",
          "hierarchy": "TsParse",
          "module": "TsParse",
          "name": "parseTsp",
          "package": "tsparse",
          "partial": "Tsp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:parseTsp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a TSP statement from a file.  This function relies upon\n the \u003ccode\u003epdftotext\u003c/code\u003e program.  This program must exist somewhere in your\n PATH.  This library was tested against pdftotext version 0.18.4,\n which came with Debian Wheezy.\n\u003c/p\u003e",
          "module": "TsParse",
          "name": "parseTspFromFile",
          "package": "tsparse",
          "signature": "String-\u003e IO TspStatement",
          "type": "function"
        },
        "index": {
          "description": "Parses TSP statement from file This function relies upon the pdftotext program This program must exist somewhere in your PATH This library was tested against pdftotext version which came with Debian Wheezy",
          "hierarchy": "TsParse",
          "module": "TsParse",
          "name": "parseTspFromFile",
          "normalized": "String-\u003eIO TspStatement",
          "package": "tsparse",
          "partial": "Tsp From File",
          "signature": "String-\u003eIO TspStatement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:parseTspFromFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TsParse",
          "name": "pretty",
          "package": "tsparse",
          "signature": "a -\u003e Doc",
          "source": "src/TsParse.html#pretty",
          "type": "method"
        },
        "index": {
          "hierarchy": "TsParse",
          "module": "TsParse",
          "name": "pretty",
          "normalized": "a-\u003eDoc",
          "package": "tsparse",
          "signature": "a-\u003eDoc",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:pretty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TsParse",
          "name": "tspDetailByFund",
          "package": "tsparse",
          "signature": "[ByFund]",
          "source": "src/TsParse.html#TspStatement",
          "type": "function"
        },
        "index": {
          "hierarchy": "TsParse",
          "module": "TsParse",
          "name": "tspDetailByFund",
          "normalized": "[ByFund]",
          "package": "tsparse",
          "partial": "Detail By Fund",
          "signature": "[ByFund]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:tspDetailByFund"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TsParse",
          "name": "tspDetailBySource",
          "package": "tsparse",
          "signature": "BySource",
          "source": "src/TsParse.html#TspStatement",
          "type": "function"
        },
        "index": {
          "hierarchy": "TsParse",
          "module": "TsParse",
          "name": "tspDetailBySource",
          "package": "tsparse",
          "partial": "Detail By Source",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:tspDetailBySource"
      }
    }
  ]
]