[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParses U.S. federal Thrift Savings Plan (TSP) statements.\n\u003c/p\u003e\u003cp\u003eThis module works with PDF TSP statements downloaded from the TSP\n web site. It works with the statement format used as of July 2013.\n The format recently changed to allow for Roth contributions.  This\n works on civilian, FERS statements; maybe it works on others, but I\n cannot test these (if you test these and find bugs, send me patches\n and I will merge them.)\n\u003c/p\u003e\u003cp\u003eYou need to have the pdftotext program installed and available on\n your PATH.  This program is part of the poppler project.  On Debian\n GNU/Linux systems, it is part of the poppler-utils package.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "TsParse",
        "fct-package": "tsparse",
        "fct-signature": "module",
        "fct-source": "src/TsParse.html",
        "fct-type": "module",
        "title": "TsParse"
      },
      "index": {
        "description": "Parses U.S federal Thrift Savings Plan TSP statements This module works with PDF TSP statements downloaded from the TSP web site It works with the statement format used as of July The format recently changed to allow for Roth contributions This works on civilian FERS statements maybe it works on others but cannot test these if you test these and find bugs send me patches and will merge them You need to have the pdftotext program installed and available on your PATH This program is part of the poppler project On Debian GNU Linux systems it is part of the poppler-utils package",
        "hierarchy": "TsParse",
        "module": "TsParse",
        "name": "TsParse",
        "normalized": "",
        "package": "tsparse",
        "partial": "Ts Parse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#t:ByFund",
      "description": {
        "fct-descr": "\u003cp\u003eA single fund in the \u003ccode\u003eYOUR TRANSACTION DETAIL BY FUND\u003c/code\u003e section\n (e.g. the \u003ccode\u003eG Fund\u003c/code\u003e, \u003ccode\u003eL 2040 Fund\u003c/code\u003e, etc.)\n\u003c/p\u003e",
        "fct-module": "TsParse",
        "fct-package": "tsparse",
        "fct-signature": "data",
        "fct-source": "src/TsParse.html#ByFund",
        "fct-type": "data",
        "title": "ByFund"
      },
      "index": {
        "description": "single fund in the YOUR TRANSACTION DETAIL BY FUND section e.g the Fund Fund etc",
        "hierarchy": "TsParse",
        "module": "TsParse",
        "name": "ByFund",
        "normalized": "",
        "package": "tsparse",
        "partial": "By Fund",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#t:ByFundBeginningBal",
      "description": {
        "fct-descr": "\u003cp\u003eThe beginning balance in a \u003ccode\u003eYOUR TRANSACTION DETAIL BY FUND\u003c/code\u003e\n section.\n\u003c/p\u003e",
        "fct-module": "TsParse",
        "fct-package": "tsparse",
        "fct-signature": "data",
        "fct-source": "src/TsParse.html#ByFundBeginningBal",
        "fct-type": "data",
        "title": "ByFundBeginningBal"
      },
      "index": {
        "description": "The beginning balance in YOUR TRANSACTION DETAIL BY FUND section",
        "hierarchy": "TsParse",
        "module": "TsParse",
        "name": "ByFundBeginningBal",
        "normalized": "",
        "package": "tsparse",
        "partial": "By Fund Beginning Bal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#t:ByFundEndingBal",
      "description": {
        "fct-descr": "\u003cp\u003eEnding balance in the \u003ccode\u003eYOUR TRANSACTION DETAIL BY FUND\u003c/code\u003e section.\n\u003c/p\u003e",
        "fct-module": "TsParse",
        "fct-package": "tsparse",
        "fct-signature": "data",
        "fct-source": "src/TsParse.html#ByFundEndingBal",
        "fct-type": "data",
        "title": "ByFundEndingBal"
      },
      "index": {
        "description": "Ending balance in the YOUR TRANSACTION DETAIL BY FUND section",
        "hierarchy": "TsParse",
        "module": "TsParse",
        "name": "ByFundEndingBal",
        "normalized": "",
        "package": "tsparse",
        "partial": "By Fund Ending Bal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#t:ByFundGainLoss",
      "description": {
        "fct-descr": "\u003cp\u003eGain or Loss This Quarter in the \u003ccode\u003eYOUR TRANSACTION DETAIL BY\n FUND\u003c/code\u003e section.\n\u003c/p\u003e",
        "fct-module": "TsParse",
        "fct-package": "tsparse",
        "fct-signature": "data",
        "fct-source": "src/TsParse.html#ByFundGainLoss",
        "fct-type": "data",
        "title": "ByFundGainLoss"
      },
      "index": {
        "description": "Gain or Loss This Quarter in the YOUR TRANSACTION DETAIL BY FUND section",
        "hierarchy": "TsParse",
        "module": "TsParse",
        "name": "ByFundGainLoss",
        "normalized": "",
        "package": "tsparse",
        "partial": "By Fund Gain Loss",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#t:ByFundPosting",
      "description": {
        "fct-descr": "\u003cp\u003eA single posting in the \u003ccode\u003eYOUR TRANSACTION DETAIL BY FUND\u003c/code\u003e section.\n\u003c/p\u003e",
        "fct-module": "TsParse",
        "fct-package": "tsparse",
        "fct-signature": "data",
        "fct-source": "src/TsParse.html#ByFundPosting",
        "fct-type": "data",
        "title": "ByFundPosting"
      },
      "index": {
        "description": "single posting in the YOUR TRANSACTION DETAIL BY FUND section",
        "hierarchy": "TsParse",
        "module": "TsParse",
        "name": "ByFundPosting",
        "normalized": "",
        "package": "tsparse",
        "partial": "By Fund Posting",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#t:BySource",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents the entire \u003ccode\u003eYOUR TRANSACTION DETAIL BY SOURCE\u003c/code\u003e section.\n\u003c/p\u003e",
        "fct-module": "TsParse",
        "fct-package": "tsparse",
        "fct-signature": "data",
        "fct-source": "src/TsParse.html#BySource",
        "fct-type": "data",
        "title": "BySource"
      },
      "index": {
        "description": "Represents the entire YOUR TRANSACTION DETAIL BY SOURCE section",
        "hierarchy": "TsParse",
        "module": "TsParse",
        "name": "BySource",
        "normalized": "",
        "package": "tsparse",
        "partial": "By Source",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#t:BySourceBeginningBal",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eYOUR TRANSACTION DETAIL BY SOURCE\u003c/code\u003e Beginning Balance.\n\u003c/p\u003e",
        "fct-module": "TsParse",
        "fct-package": "tsparse",
        "fct-signature": "type",
        "fct-source": "src/TsParse.html#BySourceBeginningBal",
        "fct-type": "type",
        "title": "BySourceBeginningBal"
      },
      "index": {
        "description": "YOUR TRANSACTION DETAIL BY SOURCE Beginning Balance",
        "hierarchy": "TsParse",
        "module": "TsParse",
        "name": "BySourceBeginningBal",
        "normalized": "",
        "package": "tsparse",
        "partial": "By Source Beginning Bal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#t:BySourceEndingBal",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eYOUR TRANSACTION DETAIL BY SOURCE\u003c/code\u003e Ending Balance.\n\u003c/p\u003e",
        "fct-module": "TsParse",
        "fct-package": "tsparse",
        "fct-signature": "type",
        "fct-source": "src/TsParse.html#BySourceEndingBal",
        "fct-type": "type",
        "title": "BySourceEndingBal"
      },
      "index": {
        "description": "YOUR TRANSACTION DETAIL BY SOURCE Ending Balance",
        "hierarchy": "TsParse",
        "module": "TsParse",
        "name": "BySourceEndingBal",
        "normalized": "",
        "package": "tsparse",
        "partial": "By Source Ending Bal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#t:BySourceGainLoss",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eYOUR TRANSACTION DETAIL BY SOURCE\u003c/code\u003e Gain or Loss This Quarter.\n\u003c/p\u003e",
        "fct-module": "TsParse",
        "fct-package": "tsparse",
        "fct-signature": "type",
        "fct-source": "src/TsParse.html#BySourceGainLoss",
        "fct-type": "type",
        "title": "BySourceGainLoss"
      },
      "index": {
        "description": "YOUR TRANSACTION DETAIL BY SOURCE Gain or Loss This Quarter",
        "hierarchy": "TsParse",
        "module": "TsParse",
        "name": "BySourceGainLoss",
        "normalized": "",
        "package": "tsparse",
        "partial": "By Source Gain Loss",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#t:BySourcePosting",
      "description": {
        "fct-module": "TsParse",
        "fct-package": "tsparse",
        "fct-signature": "data",
        "fct-source": "src/TsParse.html#BySourcePosting",
        "fct-type": "data",
        "title": "BySourcePosting"
      },
      "index": {
        "description": "",
        "hierarchy": "TsParse",
        "module": "TsParse",
        "name": "BySourcePosting",
        "normalized": "",
        "package": "tsparse",
        "partial": "By Source Posting",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#t:BySourceSummary",
      "description": {
        "fct-descr": "\u003cp\u003eThe TSP statement has several lines in the \u003ccode\u003eYOUR TRANSACTION\n DETAIL BY SOURCE\u003c/code\u003e section that contain summary data: \u003ccode\u003eBeginning\n Balance\u003c/code\u003e, \u003ccode\u003eGain or Loss This Quarter\u003c/code\u003e, and \u003ccode\u003eEnding Balance\u003c/code\u003e. Since\n the columns in these lines are all the same they are all\n represented by this single type. Type synonyms\n \u003ccode\u003e\u003ca\u003eBySourceBeginningBal\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eBySourceGainLoss\u003c/a\u003e\u003c/code\u003e, and\n \u003ccode\u003e\u003ca\u003eBySourceEndingBal\u003c/a\u003e\u003c/code\u003e are used as appropriate.\n\u003c/p\u003e",
        "fct-module": "TsParse",
        "fct-package": "tsparse",
        "fct-signature": "data",
        "fct-source": "src/TsParse.html#BySourceSummary",
        "fct-type": "data",
        "title": "BySourceSummary"
      },
      "index": {
        "description": "The TSP statement has several lines in the YOUR TRANSACTION DETAIL BY SOURCE section that contain summary data Beginning Balance Gain or Loss This Quarter and Ending Balance Since the columns in these lines are all the same they are all represented by this single type Type synonyms BySourceBeginningBal BySourceGainLoss and BySourceEndingBal are used as appropriate",
        "hierarchy": "TsParse",
        "module": "TsParse",
        "name": "BySourceSummary",
        "normalized": "",
        "package": "tsparse",
        "partial": "By Source Summary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#t:Dollars",
      "description": {
        "fct-descr": "\u003cp\u003eAny data type that is Dollars on the TSP statement.\n\u003c/p\u003e",
        "fct-module": "TsParse",
        "fct-package": "tsparse",
        "fct-signature": "type",
        "fct-source": "src/TsParse.html#Dollars",
        "fct-type": "type",
        "title": "Dollars"
      },
      "index": {
        "description": "Any data type that is Dollars on the TSP statement",
        "hierarchy": "TsParse",
        "module": "TsParse",
        "name": "Dollars",
        "normalized": "",
        "package": "tsparse",
        "partial": "Dollars",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#t:FundName",
      "description": {
        "fct-descr": "\u003cp\u003eThe name of a fund, eg \u003ccode\u003eC Fund\u003c/code\u003e. This is a list of words; each\n word will not contain any spaces.\n\u003c/p\u003e",
        "fct-module": "TsParse",
        "fct-package": "tsparse",
        "fct-signature": "type",
        "fct-source": "src/TsParse.html#FundName",
        "fct-type": "type",
        "title": "FundName"
      },
      "index": {
        "description": "The name of fund eg Fund This is list of words each word will not contain any spaces",
        "hierarchy": "TsParse",
        "module": "TsParse",
        "name": "FundName",
        "normalized": "",
        "package": "tsparse",
        "partial": "Fund Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#t:Pretty",
      "description": {
        "fct-module": "TsParse",
        "fct-package": "tsparse",
        "fct-signature": "class",
        "fct-source": "src/TsParse.html#Pretty",
        "fct-type": "class",
        "title": "Pretty"
      },
      "index": {
        "description": "",
        "hierarchy": "TsParse",
        "module": "TsParse",
        "name": "Pretty",
        "normalized": "",
        "package": "tsparse",
        "partial": "Pretty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#t:Shares",
      "description": {
        "fct-descr": "\u003cp\u003eAny data type that is a number of shares on the TSP statement.\n\u003c/p\u003e",
        "fct-module": "TsParse",
        "fct-package": "tsparse",
        "fct-signature": "type",
        "fct-source": "src/TsParse.html#Shares",
        "fct-type": "type",
        "title": "Shares"
      },
      "index": {
        "description": "Any data type that is number of shares on the TSP statement",
        "hierarchy": "TsParse",
        "module": "TsParse",
        "name": "Shares",
        "normalized": "",
        "package": "tsparse",
        "partial": "Shares",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#t:TspStatement",
      "description": {
        "fct-descr": "\u003cp\u003eAll data that is parsed from the TSP statement is in this\n type. The parser does not attempt to parse any of the data that is\n on Page 1 of the PDF; most of this data all appears elsewhere on\n the statement and can be calculated using the data that is in this\n type (and besides, the data on Page 1 is in a multi-column format\n that would be difficult to parse; since the data is all elsewhere,\n it's not worth the effort.) One exception is the investment\n allocation for future contributions, which does not appear\n elsewhere.\n\u003c/p\u003e\u003cp\u003eIn addition, the statement contains a quarterly account summary.\n This also is not parsed because it can be derived from all the data\n that is elsewhere on the statement.\n\u003c/p\u003e",
        "fct-module": "TsParse",
        "fct-package": "tsparse",
        "fct-signature": "data",
        "fct-source": "src/TsParse.html#TspStatement",
        "fct-type": "data",
        "title": "TspStatement"
      },
      "index": {
        "description": "All data that is parsed from the TSP statement is in this type The parser does not attempt to parse any of the data that is on Page of the PDF most of this data all appears elsewhere on the statement and can be calculated using the data that is in this type and besides the data on Page is in multi-column format that would be difficult to parse since the data is all elsewhere it not worth the effort One exception is the investment allocation for future contributions which does not appear elsewhere In addition the statement contains quarterly account summary This also is not parsed because it can be derived from all the data that is elsewhere on the statement",
        "hierarchy": "TsParse",
        "module": "TsParse",
        "name": "TspStatement",
        "normalized": "",
        "package": "tsparse",
        "partial": "Tsp Statement",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#t:TxnType",
      "description": {
        "fct-descr": "\u003cp\u003eA list of words that indicates the transaction type.  Each string\n in this list will not have any spaces in it.\n\u003c/p\u003e",
        "fct-module": "TsParse",
        "fct-package": "tsparse",
        "fct-signature": "type",
        "fct-source": "src/TsParse.html#TxnType",
        "fct-type": "type",
        "title": "TxnType"
      },
      "index": {
        "description": "list of words that indicates the transaction type Each string in this list will not have any spaces in it",
        "hierarchy": "TsParse",
        "module": "TsParse",
        "name": "TxnType",
        "normalized": "",
        "package": "tsparse",
        "partial": "Txn Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:ByFund",
      "description": {
        "fct-module": "TsParse",
        "fct-package": "tsparse",
        "fct-signature": "ByFund",
        "fct-source": "src/TsParse.html#ByFund",
        "fct-type": "function",
        "title": "ByFund"
      },
      "index": {
        "description": "",
        "hierarchy": "TsParse",
        "module": "TsParse",
        "name": "ByFund",
        "normalized": "",
        "package": "tsparse",
        "partial": "By Fund",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:ByFundBeginningBal",
      "description": {
        "fct-module": "TsParse",
        "fct-package": "tsparse",
        "fct-signature": "ByFundBeginningBal",
        "fct-source": "src/TsParse.html#ByFundBeginningBal",
        "fct-type": "function",
        "title": "ByFundBeginningBal"
      },
      "index": {
        "description": "",
        "hierarchy": "TsParse",
        "module": "TsParse",
        "name": "ByFundBeginningBal",
        "normalized": "",
        "package": "tsparse",
        "partial": "By Fund Beginning Bal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:ByFundEndingBal",
      "description": {
        "fct-module": "TsParse",
        "fct-package": "tsparse",
        "fct-signature": "ByFundEndingBal",
        "fct-source": "src/TsParse.html#ByFundEndingBal",
        "fct-type": "function",
        "title": "ByFundEndingBal"
      },
      "index": {
        "description": "",
        "hierarchy": "TsParse",
        "module": "TsParse",
        "name": "ByFundEndingBal",
        "normalized": "",
        "package": "tsparse",
        "partial": "By Fund Ending Bal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:ByFundGainLoss",
      "description": {
        "fct-module": "TsParse",
        "fct-package": "tsparse",
        "fct-signature": "ByFundGainLoss",
        "fct-source": "src/TsParse.html#ByFundGainLoss",
        "fct-type": "function",
        "title": "ByFundGainLoss"
      },
      "index": {
        "description": "",
        "hierarchy": "TsParse",
        "module": "TsParse",
        "name": "ByFundGainLoss",
        "normalized": "",
        "package": "tsparse",
        "partial": "By Fund Gain Loss",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:ByFundPosting",
      "description": {
        "fct-module": "TsParse",
        "fct-package": "tsparse",
        "fct-signature": "ByFundPosting",
        "fct-source": "src/TsParse.html#ByFundPosting",
        "fct-type": "function",
        "title": "ByFundPosting"
      },
      "index": {
        "description": "",
        "hierarchy": "TsParse",
        "module": "TsParse",
        "name": "ByFundPosting",
        "normalized": "",
        "package": "tsparse",
        "partial": "By Fund Posting",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:BySource",
      "description": {
        "fct-module": "TsParse",
        "fct-package": "tsparse",
        "fct-signature": "BySource",
        "fct-source": "src/TsParse.html#BySource",
        "fct-type": "function",
        "title": "BySource"
      },
      "index": {
        "description": "",
        "hierarchy": "TsParse",
        "module": "TsParse",
        "name": "BySource",
        "normalized": "",
        "package": "tsparse",
        "partial": "By Source",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:BySourcePosting",
      "description": {
        "fct-module": "TsParse",
        "fct-package": "tsparse",
        "fct-signature": "BySourcePosting",
        "fct-source": "src/TsParse.html#BySourcePosting",
        "fct-type": "function",
        "title": "BySourcePosting"
      },
      "index": {
        "description": "",
        "hierarchy": "TsParse",
        "module": "TsParse",
        "name": "BySourcePosting",
        "normalized": "",
        "package": "tsparse",
        "partial": "By Source Posting",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:BySourceSummary",
      "description": {
        "fct-module": "TsParse",
        "fct-package": "tsparse",
        "fct-signature": "BySourceSummary",
        "fct-source": "src/TsParse.html#BySourceSummary",
        "fct-type": "function",
        "title": "BySourceSummary"
      },
      "index": {
        "description": "",
        "hierarchy": "TsParse",
        "module": "TsParse",
        "name": "BySourceSummary",
        "normalized": "",
        "package": "tsparse",
        "partial": "By Source Summary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:TspStatement",
      "description": {
        "fct-module": "TsParse",
        "fct-package": "tsparse",
        "fct-signature": "TspStatement",
        "fct-source": "src/TsParse.html#TspStatement",
        "fct-type": "function",
        "title": "TspStatement"
      },
      "index": {
        "description": "",
        "hierarchy": "TsParse",
        "module": "TsParse",
        "name": "TspStatement",
        "normalized": "",
        "package": "tsparse",
        "partial": "Tsp Statement",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:bfBeginningBal",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "TsParse",
        "fct-package": "tsparse",
        "fct-signature": "ByFundBeginningBal",
        "fct-source": "src/TsParse.html#ByFund",
        "fct-type": "function",
        "title": "bfBeginningBal"
      },
      "index": {
        "description": "",
        "hierarchy": "TsParse",
        "module": "TsParse",
        "name": "bfBeginningBal",
        "normalized": "",
        "package": "tsparse",
        "partial": "Beginning Bal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:bfEndingBal",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "TsParse",
        "fct-package": "tsparse",
        "fct-signature": "ByFundEndingBal",
        "fct-source": "src/TsParse.html#ByFund",
        "fct-type": "function",
        "title": "bfEndingBal"
      },
      "index": {
        "description": "",
        "hierarchy": "TsParse",
        "module": "TsParse",
        "name": "bfEndingBal",
        "normalized": "",
        "package": "tsparse",
        "partial": "Ending Bal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:bfFundName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "TsParse",
        "fct-package": "tsparse",
        "fct-signature": "FundName",
        "fct-source": "src/TsParse.html#ByFund",
        "fct-type": "function",
        "title": "bfFundName"
      },
      "index": {
        "description": "",
        "hierarchy": "TsParse",
        "module": "TsParse",
        "name": "bfFundName",
        "normalized": "",
        "package": "tsparse",
        "partial": "Fund Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:bfGainLoss",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "TsParse",
        "fct-package": "tsparse",
        "fct-signature": "ByFundGainLoss",
        "fct-source": "src/TsParse.html#ByFund",
        "fct-type": "function",
        "title": "bfGainLoss"
      },
      "index": {
        "description": "",
        "hierarchy": "TsParse",
        "module": "TsParse",
        "name": "bfGainLoss",
        "normalized": "",
        "package": "tsparse",
        "partial": "Gain Loss",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:bfPostings",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "TsParse",
        "fct-package": "tsparse",
        "fct-signature": "[ByFundPosting]",
        "fct-source": "src/TsParse.html#ByFund",
        "fct-type": "function",
        "title": "bfPostings"
      },
      "index": {
        "description": "",
        "hierarchy": "TsParse",
        "module": "TsParse",
        "name": "bfPostings",
        "normalized": "[ByFundPosting]",
        "package": "tsparse",
        "partial": "Postings",
        "signature": "[ByFundPosting]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:bfbbDollarBalance",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "TsParse",
        "fct-package": "tsparse",
        "fct-signature": "Dollars",
        "fct-source": "src/TsParse.html#ByFundBeginningBal",
        "fct-type": "function",
        "title": "bfbbDollarBalance"
      },
      "index": {
        "description": "",
        "hierarchy": "TsParse",
        "module": "TsParse",
        "name": "bfbbDollarBalance",
        "normalized": "",
        "package": "tsparse",
        "partial": "Dollar Balance",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:bfbbNumShares",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "TsParse",
        "fct-package": "tsparse",
        "fct-signature": "Shares",
        "fct-source": "src/TsParse.html#ByFundBeginningBal",
        "fct-type": "function",
        "title": "bfbbNumShares"
      },
      "index": {
        "description": "",
        "hierarchy": "TsParse",
        "module": "TsParse",
        "name": "bfbbNumShares",
        "normalized": "",
        "package": "tsparse",
        "partial": "Num Shares",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:bfbbSharePrice",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "TsParse",
        "fct-package": "tsparse",
        "fct-signature": "Dollars",
        "fct-source": "src/TsParse.html#ByFundBeginningBal",
        "fct-type": "function",
        "title": "bfbbSharePrice"
      },
      "index": {
        "description": "",
        "hierarchy": "TsParse",
        "module": "TsParse",
        "name": "bfbbSharePrice",
        "normalized": "",
        "package": "tsparse",
        "partial": "Share Price",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:bfebDollarBalance",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "TsParse",
        "fct-package": "tsparse",
        "fct-signature": "Dollars",
        "fct-source": "src/TsParse.html#ByFundEndingBal",
        "fct-type": "function",
        "title": "bfebDollarBalance"
      },
      "index": {
        "description": "",
        "hierarchy": "TsParse",
        "module": "TsParse",
        "name": "bfebDollarBalance",
        "normalized": "",
        "package": "tsparse",
        "partial": "Dollar Balance",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:bfebNumShares",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "TsParse",
        "fct-package": "tsparse",
        "fct-signature": "Shares",
        "fct-source": "src/TsParse.html#ByFundEndingBal",
        "fct-type": "function",
        "title": "bfebNumShares"
      },
      "index": {
        "description": "",
        "hierarchy": "TsParse",
        "module": "TsParse",
        "name": "bfebNumShares",
        "normalized": "",
        "package": "tsparse",
        "partial": "Num Shares",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:bfebSharePrice",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "TsParse",
        "fct-package": "tsparse",
        "fct-signature": "Dollars",
        "fct-source": "src/TsParse.html#ByFundEndingBal",
        "fct-type": "function",
        "title": "bfebSharePrice"
      },
      "index": {
        "description": "",
        "hierarchy": "TsParse",
        "module": "TsParse",
        "name": "bfebSharePrice",
        "normalized": "",
        "package": "tsparse",
        "partial": "Share Price",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:bfglDollarBalance",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "TsParse",
        "fct-package": "tsparse",
        "fct-signature": "Dollars",
        "fct-source": "src/TsParse.html#ByFundGainLoss",
        "fct-type": "function",
        "title": "bfglDollarBalance"
      },
      "index": {
        "description": "",
        "hierarchy": "TsParse",
        "module": "TsParse",
        "name": "bfglDollarBalance",
        "normalized": "",
        "package": "tsparse",
        "partial": "Dollar Balance",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:bfpNumShares",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "TsParse",
        "fct-package": "tsparse",
        "fct-signature": "Shares",
        "fct-source": "src/TsParse.html#ByFundPosting",
        "fct-type": "function",
        "title": "bfpNumShares"
      },
      "index": {
        "description": "",
        "hierarchy": "TsParse",
        "module": "TsParse",
        "name": "bfpNumShares",
        "normalized": "",
        "package": "tsparse",
        "partial": "Num Shares",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:bfpPostingDate",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "TsParse",
        "fct-package": "tsparse",
        "fct-signature": "Day",
        "fct-source": "src/TsParse.html#ByFundPosting",
        "fct-type": "function",
        "title": "bfpPostingDate"
      },
      "index": {
        "description": "",
        "hierarchy": "TsParse",
        "module": "TsParse",
        "name": "bfpPostingDate",
        "normalized": "",
        "package": "tsparse",
        "partial": "Posting Date",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:bfpRoth",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "TsParse",
        "fct-package": "tsparse",
        "fct-signature": "Dollars",
        "fct-source": "src/TsParse.html#ByFundPosting",
        "fct-type": "function",
        "title": "bfpRoth"
      },
      "index": {
        "description": "",
        "hierarchy": "TsParse",
        "module": "TsParse",
        "name": "bfpRoth",
        "normalized": "",
        "package": "tsparse",
        "partial": "Roth",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:bfpSharePrice",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "TsParse",
        "fct-package": "tsparse",
        "fct-signature": "Dollars",
        "fct-source": "src/TsParse.html#ByFundPosting",
        "fct-type": "function",
        "title": "bfpSharePrice"
      },
      "index": {
        "description": "",
        "hierarchy": "TsParse",
        "module": "TsParse",
        "name": "bfpSharePrice",
        "normalized": "",
        "package": "tsparse",
        "partial": "Share Price",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:bfpTotal",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "TsParse",
        "fct-package": "tsparse",
        "fct-signature": "Dollars",
        "fct-source": "src/TsParse.html#ByFundPosting",
        "fct-type": "function",
        "title": "bfpTotal"
      },
      "index": {
        "description": "",
        "hierarchy": "TsParse",
        "module": "TsParse",
        "name": "bfpTotal",
        "normalized": "",
        "package": "tsparse",
        "partial": "Total",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:bfpTraditional",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "TsParse",
        "fct-package": "tsparse",
        "fct-signature": "Dollars",
        "fct-source": "src/TsParse.html#ByFundPosting",
        "fct-type": "function",
        "title": "bfpTraditional"
      },
      "index": {
        "description": "",
        "hierarchy": "TsParse",
        "module": "TsParse",
        "name": "bfpTraditional",
        "normalized": "",
        "package": "tsparse",
        "partial": "Traditional",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:bfpTxnType",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "TsParse",
        "fct-package": "tsparse",
        "fct-signature": "[String]",
        "fct-source": "src/TsParse.html#ByFundPosting",
        "fct-type": "function",
        "title": "bfpTxnType"
      },
      "index": {
        "description": "",
        "hierarchy": "TsParse",
        "module": "TsParse",
        "name": "bfpTxnType",
        "normalized": "[String]",
        "package": "tsparse",
        "partial": "Txn Type",
        "signature": "[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:bsBeginningBal",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "TsParse",
        "fct-package": "tsparse",
        "fct-signature": "BySourceBeginningBal",
        "fct-source": "src/TsParse.html#BySource",
        "fct-type": "function",
        "title": "bsBeginningBal"
      },
      "index": {
        "description": "",
        "hierarchy": "TsParse",
        "module": "TsParse",
        "name": "bsBeginningBal",
        "normalized": "",
        "package": "tsparse",
        "partial": "Beginning Bal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:bsEndingBal",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "TsParse",
        "fct-package": "tsparse",
        "fct-signature": "BySourceEndingBal",
        "fct-source": "src/TsParse.html#BySource",
        "fct-type": "function",
        "title": "bsEndingBal"
      },
      "index": {
        "description": "",
        "hierarchy": "TsParse",
        "module": "TsParse",
        "name": "bsEndingBal",
        "normalized": "",
        "package": "tsparse",
        "partial": "Ending Bal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:bsGainLoss",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "TsParse",
        "fct-package": "tsparse",
        "fct-signature": "BySourceGainLoss",
        "fct-source": "src/TsParse.html#BySource",
        "fct-type": "function",
        "title": "bsGainLoss"
      },
      "index": {
        "description": "",
        "hierarchy": "TsParse",
        "module": "TsParse",
        "name": "bsGainLoss",
        "normalized": "",
        "package": "tsparse",
        "partial": "Gain Loss",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:bsTxns",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "TsParse",
        "fct-package": "tsparse",
        "fct-signature": "[BySourcePosting]",
        "fct-source": "src/TsParse.html#BySource",
        "fct-type": "function",
        "title": "bsTxns"
      },
      "index": {
        "description": "",
        "hierarchy": "TsParse",
        "module": "TsParse",
        "name": "bsTxns",
        "normalized": "[BySourcePosting]",
        "package": "tsparse",
        "partial": "Txns",
        "signature": "[BySourcePosting]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:bspAutomatic",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "TsParse",
        "fct-package": "tsparse",
        "fct-signature": "Dollars",
        "fct-source": "src/TsParse.html#BySourcePosting",
        "fct-type": "function",
        "title": "bspAutomatic"
      },
      "index": {
        "description": "",
        "hierarchy": "TsParse",
        "module": "TsParse",
        "name": "bspAutomatic",
        "normalized": "",
        "package": "tsparse",
        "partial": "Automatic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:bspMatching",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "TsParse",
        "fct-package": "tsparse",
        "fct-signature": "Dollars",
        "fct-source": "src/TsParse.html#BySourcePosting",
        "fct-type": "function",
        "title": "bspMatching"
      },
      "index": {
        "description": "",
        "hierarchy": "TsParse",
        "module": "TsParse",
        "name": "bspMatching",
        "normalized": "",
        "package": "tsparse",
        "partial": "Matching",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:bspPayrollOffice",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "TsParse",
        "fct-package": "tsparse",
        "fct-signature": "String",
        "fct-source": "src/TsParse.html#BySourcePosting",
        "fct-type": "function",
        "title": "bspPayrollOffice"
      },
      "index": {
        "description": "",
        "hierarchy": "TsParse",
        "module": "TsParse",
        "name": "bspPayrollOffice",
        "normalized": "",
        "package": "tsparse",
        "partial": "Payroll Office",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:bspPostingDate",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "TsParse",
        "fct-package": "tsparse",
        "fct-signature": "Day",
        "fct-source": "src/TsParse.html#BySourcePosting",
        "fct-type": "function",
        "title": "bspPostingDate"
      },
      "index": {
        "description": "",
        "hierarchy": "TsParse",
        "module": "TsParse",
        "name": "bspPostingDate",
        "normalized": "",
        "package": "tsparse",
        "partial": "Posting Date",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:bspRoth",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "TsParse",
        "fct-package": "tsparse",
        "fct-signature": "Dollars",
        "fct-source": "src/TsParse.html#BySourcePosting",
        "fct-type": "function",
        "title": "bspRoth"
      },
      "index": {
        "description": "",
        "hierarchy": "TsParse",
        "module": "TsParse",
        "name": "bspRoth",
        "normalized": "",
        "package": "tsparse",
        "partial": "Roth",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:bspTotal",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "TsParse",
        "fct-package": "tsparse",
        "fct-signature": "Dollars",
        "fct-source": "src/TsParse.html#BySourcePosting",
        "fct-type": "function",
        "title": "bspTotal"
      },
      "index": {
        "description": "",
        "hierarchy": "TsParse",
        "module": "TsParse",
        "name": "bspTotal",
        "normalized": "",
        "package": "tsparse",
        "partial": "Total",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:bspTraditional",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "TsParse",
        "fct-package": "tsparse",
        "fct-signature": "Dollars",
        "fct-source": "src/TsParse.html#BySourcePosting",
        "fct-type": "function",
        "title": "bspTraditional"
      },
      "index": {
        "description": "",
        "hierarchy": "TsParse",
        "module": "TsParse",
        "name": "bspTraditional",
        "normalized": "",
        "package": "tsparse",
        "partial": "Traditional",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:bspTxnType",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "TsParse",
        "fct-package": "tsparse",
        "fct-signature": "TxnType",
        "fct-source": "src/TsParse.html#BySourcePosting",
        "fct-type": "function",
        "title": "bspTxnType"
      },
      "index": {
        "description": "",
        "hierarchy": "TsParse",
        "module": "TsParse",
        "name": "bspTxnType",
        "normalized": "",
        "package": "tsparse",
        "partial": "Txn Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:bssAuto",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "TsParse",
        "fct-package": "tsparse",
        "fct-signature": "Dollars",
        "fct-source": "src/TsParse.html#BySourceSummary",
        "fct-type": "function",
        "title": "bssAuto"
      },
      "index": {
        "description": "",
        "hierarchy": "TsParse",
        "module": "TsParse",
        "name": "bssAuto",
        "normalized": "",
        "package": "tsparse",
        "partial": "Auto",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:bssMatching",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "TsParse",
        "fct-package": "tsparse",
        "fct-signature": "Dollars",
        "fct-source": "src/TsParse.html#BySourceSummary",
        "fct-type": "function",
        "title": "bssMatching"
      },
      "index": {
        "description": "",
        "hierarchy": "TsParse",
        "module": "TsParse",
        "name": "bssMatching",
        "normalized": "",
        "package": "tsparse",
        "partial": "Matching",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:bssRoth",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "TsParse",
        "fct-package": "tsparse",
        "fct-signature": "Dollars",
        "fct-source": "src/TsParse.html#BySourceSummary",
        "fct-type": "function",
        "title": "bssRoth"
      },
      "index": {
        "description": "",
        "hierarchy": "TsParse",
        "module": "TsParse",
        "name": "bssRoth",
        "normalized": "",
        "package": "tsparse",
        "partial": "Roth",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:bssTotal",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "TsParse",
        "fct-package": "tsparse",
        "fct-signature": "Dollars",
        "fct-source": "src/TsParse.html#BySourceSummary",
        "fct-type": "function",
        "title": "bssTotal"
      },
      "index": {
        "description": "",
        "hierarchy": "TsParse",
        "module": "TsParse",
        "name": "bssTotal",
        "normalized": "",
        "package": "tsparse",
        "partial": "Total",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:bssTraditional",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "TsParse",
        "fct-package": "tsparse",
        "fct-signature": "Dollars",
        "fct-source": "src/TsParse.html#BySourceSummary",
        "fct-type": "function",
        "title": "bssTraditional"
      },
      "index": {
        "description": "",
        "hierarchy": "TsParse",
        "module": "TsParse",
        "name": "bssTraditional",
        "normalized": "",
        "package": "tsparse",
        "partial": "Traditional",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:parseTsp",
      "description": {
        "fct-descr": "\u003cp\u003eParses a plain text TSP statement.  The input must be generated\n by the pdftotext program.  This library was tested against\n pdftotext version 0.18.4, which came with Debian Wheezy.\n\u003c/p\u003e",
        "fct-module": "TsParse",
        "fct-package": "tsparse",
        "fct-signature": "Parser TspStatement",
        "fct-source": "src/TsParse.html#parseTsp",
        "fct-type": "function",
        "title": "parseTsp"
      },
      "index": {
        "description": "Parses plain text TSP statement The input must be generated by the pdftotext program This library was tested against pdftotext version which came with Debian Wheezy",
        "hierarchy": "TsParse",
        "module": "TsParse",
        "name": "parseTsp",
        "normalized": "",
        "package": "tsparse",
        "partial": "Tsp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:parseTspFromFile",
      "description": {
        "fct-descr": "\u003cp\u003eParses a TSP statement from a file.  This function relies upon\n the \u003ccode\u003epdftotext\u003c/code\u003e program.  This program must exist somewhere in your\n PATH.  This library was tested against pdftotext version 0.18.4,\n which came with Debian Wheezy.\n\u003c/p\u003e",
        "fct-module": "TsParse",
        "fct-package": "tsparse",
        "fct-signature": "String-\u003e IO TspStatement",
        "fct-type": "function",
        "title": "parseTspFromFile"
      },
      "index": {
        "description": "Parses TSP statement from file This function relies upon the pdftotext program This program must exist somewhere in your PATH This library was tested against pdftotext version which came with Debian Wheezy",
        "hierarchy": "TsParse",
        "module": "TsParse",
        "name": "parseTspFromFile",
        "normalized": "String-\u003eIO TspStatement",
        "package": "tsparse",
        "partial": "Tsp From File",
        "signature": "String-\u003eIO TspStatement"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:pretty",
      "description": {
        "fct-module": "TsParse",
        "fct-package": "tsparse",
        "fct-signature": "a -\u003e Doc",
        "fct-source": "src/TsParse.html#pretty",
        "fct-type": "method",
        "title": "pretty"
      },
      "index": {
        "description": "",
        "hierarchy": "TsParse",
        "module": "TsParse",
        "name": "pretty",
        "normalized": "a-\u003eDoc",
        "package": "tsparse",
        "partial": "",
        "signature": "a-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:tspDetailByFund",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "TsParse",
        "fct-package": "tsparse",
        "fct-signature": "[ByFund]",
        "fct-source": "src/TsParse.html#TspStatement",
        "fct-type": "function",
        "title": "tspDetailByFund"
      },
      "index": {
        "description": "",
        "hierarchy": "TsParse",
        "module": "TsParse",
        "name": "tspDetailByFund",
        "normalized": "[ByFund]",
        "package": "tsparse",
        "partial": "Detail By Fund",
        "signature": "[ByFund]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tsparse/docs/TsParse.html#v:tspDetailBySource",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "TsParse",
        "fct-package": "tsparse",
        "fct-signature": "BySource",
        "fct-source": "src/TsParse.html#TspStatement",
        "fct-type": "function",
        "title": "tspDetailBySource"
      },
      "index": {
        "description": "",
        "hierarchy": "TsParse",
        "module": "TsParse",
        "name": "tspDetailBySource",
        "normalized": "",
        "package": "tsparse",
        "partial": "Detail By Source",
        "signature": ""
      }
    }
  }
]