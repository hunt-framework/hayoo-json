[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParser for downloaded OFX files.\n\u003c/p\u003e\u003cp\u003eThis parser was written based on the OFX version 1.03\n specification, which is available at\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.ofx.net\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eIt will probably work on earlier versions of OFX without\n incident. However, it may or may not not work on newer versions of\n OFX, which are XML based (this version of OFX is SGML based.)\n\u003c/p\u003e\u003cp\u003eIt will also parse QFX files, which are OFX files with minor\n proprietary additions by Intuit, the maker of Quicken.\n\u003c/p\u003e\u003cp\u003eAn OFX file consists of three parts: the HTTP headers (which this\n parser does NOT handle because typically they will not show up in\n files downloaded to disk), the OFX headers, and the OFX data. This\n parser handles the OFX headers and the OFX data.\n\u003c/p\u003e\u003cp\u003eThe parser in this module simply parses the tags and data into a\n tree, which you can manipulate with other functions. Some functions\n are provided to find the transactions in the tree and place them\n into a \u003ccode\u003e\u003ca\u003eTransaction\u003c/a\u003e\u003c/code\u003e type, which is the data you are most likely\n interested in. If you are interested in other data you can query\n the \u003ccode\u003e\u003ca\u003eTag\u003c/a\u003e\u003c/code\u003e tree for what you need.\n\u003c/p\u003e\u003cp\u003eFor example, to read in the filename given on the command line and\n parse it and print it nicely:\n\u003c/p\u003e\u003cpre\u003e import System.Environment\n import Text.Parsec\n import Text.PrettyPrint\n import Data.OFX\n import System.IO\n import System.Exit\n\n main :: IO ()\n main = do\n   filename:[] \u003c- getArgs\n   contents \u003c- readFile filename\n   ofx \u003c- case parse ofxFile filename contents of\n     Left e -\u003e do\n       hPutStrLn stderr . show $ e\n       exitFailure\n     Right g -\u003e return g\n   putStrLn . render . pFile $ ofx\n   putStrLn\n     . render\n     . pExceptional text (pList . map pTransaction)\n     . transactions\n     $ ofx\n   putStrLn . render . pMaybe text . fiName $ ofx\n   putStrLn . render . pMaybe text . accountNumber $ ofx\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "module",
        "fct-source": "src/Data-OFX.html",
        "fct-type": "module",
        "title": "OFX"
      },
      "index": {
        "description": "Parser for downloaded OFX files This parser was written based on the OFX version specification which is available at http www.ofx.net It will probably work on earlier versions of OFX without incident However it may or may not not work on newer versions of OFX which are XML based this version of OFX is SGML based It will also parse QFX files which are OFX files with minor proprietary additions by Intuit the maker of Quicken An OFX file consists of three parts the HTTP headers which this parser does NOT handle because typically they will not show up in files downloaded to disk the OFX headers and the OFX data This parser handles the OFX headers and the OFX data The parser in this module simply parses the tags and data into tree which you can manipulate with other functions Some functions are provided to find the transactions in the tree and place them into Transaction type which is the data you are most likely interested in If you are interested in other data you can query the Tag tree for what you need For example to read in the filename given on the command line and parse it and print it nicely import System.Environment import Text.Parsec import Text.PrettyPrint import Data.OFX import System.IO import System.Exit main IO main do filename getArgs contents readFile filename ofx case parse ofxFile filename contents of Left do hPutStrLn stderr show exitFailure Right return putStrLn render pFile ofx putStrLn render pExceptional text pList map pTransaction transactions ofx putStrLn render pMaybe text fiName ofx putStrLn render pMaybe text accountNumber ofx",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "OFX",
        "normalized": "",
        "package": "ofx",
        "partial": "OFX",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#t:AcctType",
      "description": {
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "data",
        "fct-source": "src/Data-OFX.html#AcctType",
        "fct-type": "data",
        "title": "AcctType"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "AcctType",
        "normalized": "",
        "package": "ofx",
        "partial": "Acct Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#t:BankAcctTo",
      "description": {
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "data",
        "fct-source": "src/Data-OFX.html#BankAcctTo",
        "fct-type": "data",
        "title": "BankAcctTo"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "BankAcctTo",
        "normalized": "",
        "package": "ofx",
        "partial": "Bank Acct To",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#t:CCAcctTo",
      "description": {
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "data",
        "fct-source": "src/Data-OFX.html#CCAcctTo",
        "fct-type": "data",
        "title": "CCAcctTo"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "CCAcctTo",
        "normalized": "",
        "package": "ofx",
        "partial": "CCAcct To",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#t:CorrectAction",
      "description": {
        "fct-descr": "\u003cp\u003eCan be either REPLACE or DELETE.\n\u003c/p\u003e",
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "data",
        "fct-source": "src/Data-OFX.html#CorrectAction",
        "fct-type": "data",
        "title": "CorrectAction"
      },
      "index": {
        "description": "Can be either REPLACE or DELETE",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "CorrectAction",
        "normalized": "",
        "package": "ofx",
        "partial": "Correct Action",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#t:Currency",
      "description": {
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "data",
        "fct-source": "src/Data-OFX.html#Currency",
        "fct-type": "data",
        "title": "Currency"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "Currency",
        "normalized": "",
        "package": "ofx",
        "partial": "Currency",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#t:CurrencyData",
      "description": {
        "fct-descr": "\u003cp\u003eHolds all data both for CURRENCY and for ORIGCURRENCY.\n\u003c/p\u003e",
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "data",
        "fct-source": "src/Data-OFX.html#CurrencyData",
        "fct-type": "data",
        "title": "CurrencyData"
      },
      "index": {
        "description": "Holds all data both for CURRENCY and for ORIGCURRENCY",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "CurrencyData",
        "normalized": "",
        "package": "ofx",
        "partial": "Currency Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#t:Err",
      "description": {
        "fct-descr": "\u003cp\u003eError handling. Errors are indicated with a Left String;\n successes with a Right.\n\u003c/p\u003e",
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "type",
        "fct-source": "src/Data-OFX.html#Err",
        "fct-type": "type",
        "title": "Err"
      },
      "index": {
        "description": "Error handling Errors are indicated with Left String successes with Right",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "Err",
        "normalized": "",
        "package": "ofx",
        "partial": "Err",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#t:HeaderTag",
      "description": {
        "fct-descr": "\u003cp\u003eHeaders consists of simple \u003ccode\u003etag:value\u003c/code\u003e pairs; this represents the\n tag.\n\u003c/p\u003e",
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "type",
        "fct-source": "src/Data-OFX.html#HeaderTag",
        "fct-type": "type",
        "title": "HeaderTag"
      },
      "index": {
        "description": "Headers consists of simple tag value pairs this represents the tag",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "HeaderTag",
        "normalized": "",
        "package": "ofx",
        "partial": "Header Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#t:HeaderValue",
      "description": {
        "fct-descr": "\u003cp\u003eThe value in an OFX header.\n\u003c/p\u003e",
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "type",
        "fct-source": "src/Data-OFX.html#HeaderValue",
        "fct-type": "type",
        "title": "HeaderValue"
      },
      "index": {
        "description": "The value in an OFX header",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "HeaderValue",
        "normalized": "",
        "package": "ofx",
        "partial": "Header Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#t:OFXFile",
      "description": {
        "fct-descr": "\u003cp\u003eAll the data from an OFX file.\n\u003c/p\u003e",
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "data",
        "fct-source": "src/Data-OFX.html#OFXFile",
        "fct-type": "data",
        "title": "OFXFile"
      },
      "index": {
        "description": "All the data from an OFX file",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "OFXFile",
        "normalized": "",
        "package": "ofx",
        "partial": "OFXFile",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#t:OFXHeader",
      "description": {
        "fct-descr": "\u003cp\u003eAn OFX file starts with a number of headers, which take the form\n \u003ccode\u003etag:value\u003c/code\u003e followed by a newline. These are followed by a blank\n line.\n\u003c/p\u003e",
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "data",
        "fct-source": "src/Data-OFX.html#OFXHeader",
        "fct-type": "data",
        "title": "OFXHeader"
      },
      "index": {
        "description": "An OFX file starts with number of headers which take the form tag value followed by newline These are followed by blank line",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "OFXHeader",
        "normalized": "",
        "package": "ofx",
        "partial": "OFXHeader",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#t:OrigCurrency",
      "description": {
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "data",
        "fct-source": "src/Data-OFX.html#OrigCurrency",
        "fct-type": "data",
        "title": "OrigCurrency"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "OrigCurrency",
        "normalized": "",
        "package": "ofx",
        "partial": "Orig Currency",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#t:Payee",
      "description": {
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "data",
        "fct-source": "src/Data-OFX.html#Payee",
        "fct-type": "data",
        "title": "Payee"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "Payee",
        "normalized": "",
        "package": "ofx",
        "partial": "Payee",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#t:Tag",
      "description": {
        "fct-descr": "\u003cp\u003eThe main OFX data consists of a series of tags. OFX 1.03 is SGML,\n not XML. This means that opening tags need not have closing\n tags. In OFX, a tag either has data and no child elements, or it\n has no data and it has child elements.\n\u003c/p\u003e",
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "data",
        "fct-source": "src/Data-OFX.html#Tag",
        "fct-type": "data",
        "title": "Tag"
      },
      "index": {
        "description": "The main OFX data consists of series of tags OFX is SGML not XML This means that opening tags need not have closing tags In OFX tag either has data and no child elements or it has no data and it has child elements",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "Tag",
        "normalized": "",
        "package": "ofx",
        "partial": "Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#t:TagData",
      "description": {
        "fct-descr": "\u003cp\u003eThe data accompanying an OFX tag.\n\u003c/p\u003e",
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "type",
        "fct-source": "src/Data-OFX.html#TagData",
        "fct-type": "type",
        "title": "TagData"
      },
      "index": {
        "description": "The data accompanying an OFX tag",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "TagData",
        "normalized": "",
        "package": "ofx",
        "partial": "Tag Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#t:TagName",
      "description": {
        "fct-descr": "\u003cp\u003eThe name of an OFX tag\n\u003c/p\u003e",
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "type",
        "fct-source": "src/Data-OFX.html#TagName",
        "fct-type": "type",
        "title": "TagName"
      },
      "index": {
        "description": "The name of an OFX tag",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "TagName",
        "normalized": "",
        "package": "ofx",
        "partial": "Tag Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#t:Transaction",
      "description": {
        "fct-descr": "\u003cp\u003eA single STMTTRN, see OFX spec section 11.4.2.3.1. This is most\n likely what you are interested in after downloading a statement\n from a bank.\n\u003c/p\u003e",
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "data",
        "fct-source": "src/Data-OFX.html#Transaction",
        "fct-type": "data",
        "title": "Transaction"
      },
      "index": {
        "description": "single STMTTRN see OFX spec section This is most likely what you are interested in after downloading statement from bank",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "Transaction",
        "normalized": "",
        "package": "ofx",
        "partial": "Transaction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#t:TrnType",
      "description": {
        "fct-descr": "\u003cp\u003eOFX transaction types. These are used in STMTTRN aggregates, see\n OFX spec section 11.4.2.3.1.1.\n\u003c/p\u003e",
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "data",
        "fct-source": "src/Data-OFX.html#TrnType",
        "fct-type": "data",
        "title": "TrnType"
      },
      "index": {
        "description": "OFX transaction types These are used in STMTTRN aggregates see OFX spec section",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "TrnType",
        "normalized": "",
        "package": "ofx",
        "partial": "Trn Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:ACHECKING",
      "description": {
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "ACHECKING",
        "fct-source": "src/Data-OFX.html#AcctType",
        "fct-type": "function",
        "title": "ACHECKING"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "ACHECKING",
        "normalized": "",
        "package": "ofx",
        "partial": "ACHECKING",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:ACREDITLINE",
      "description": {
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "ACREDITLINE",
        "fct-source": "src/Data-OFX.html#AcctType",
        "fct-type": "function",
        "title": "ACREDITLINE"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "ACREDITLINE",
        "normalized": "",
        "package": "ofx",
        "partial": "ACREDITLINE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:AMONEYMRKT",
      "description": {
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "AMONEYMRKT",
        "fct-source": "src/Data-OFX.html#AcctType",
        "fct-type": "function",
        "title": "AMONEYMRKT"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "AMONEYMRKT",
        "normalized": "",
        "package": "ofx",
        "partial": "AMONEYMRKT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:ASAVINGS",
      "description": {
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "ASAVINGS",
        "fct-source": "src/Data-OFX.html#AcctType",
        "fct-type": "function",
        "title": "ASAVINGS"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "ASAVINGS",
        "normalized": "",
        "package": "ofx",
        "partial": "ASAVINGS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:BankAcctTo",
      "description": {
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "BankAcctTo",
        "fct-source": "src/Data-OFX.html#BankAcctTo",
        "fct-type": "function",
        "title": "BankAcctTo"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "BankAcctTo",
        "normalized": "",
        "package": "ofx",
        "partial": "Bank Acct To",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:CCAcctTo",
      "description": {
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "CCAcctTo",
        "fct-source": "src/Data-OFX.html#CCAcctTo",
        "fct-type": "function",
        "title": "CCAcctTo"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "CCAcctTo",
        "normalized": "",
        "package": "ofx",
        "partial": "CCAcct To",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:Currency",
      "description": {
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "Currency CurrencyData",
        "fct-source": "src/Data-OFX.html#Currency",
        "fct-type": "function",
        "title": "Currency"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "Currency",
        "normalized": "",
        "package": "ofx",
        "partial": "Currency",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:CurrencyData",
      "description": {
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "CurrencyData",
        "fct-source": "src/Data-OFX.html#CurrencyData",
        "fct-type": "function",
        "title": "CurrencyData"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "CurrencyData",
        "normalized": "",
        "package": "ofx",
        "partial": "Currency Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:DELETE",
      "description": {
        "fct-descr": "\u003cp\u003eDeletes the transaction referenced by the CORRECTFITID\n\u003c/p\u003e",
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "DELETE",
        "fct-source": "src/Data-OFX.html#CorrectAction",
        "fct-type": "function",
        "title": "DELETE"
      },
      "index": {
        "description": "Deletes the transaction referenced by the CORRECTFITID",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "DELETE",
        "normalized": "",
        "package": "ofx",
        "partial": "DELETE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:OFXFile",
      "description": {
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "OFXFile",
        "fct-source": "src/Data-OFX.html#OFXFile",
        "fct-type": "function",
        "title": "OFXFile"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "OFXFile",
        "normalized": "",
        "package": "ofx",
        "partial": "OFXFile",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:OFXHeader",
      "description": {
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "OFXHeader HeaderTag HeaderValue",
        "fct-source": "src/Data-OFX.html#OFXHeader",
        "fct-type": "function",
        "title": "OFXHeader"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "OFXHeader",
        "normalized": "",
        "package": "ofx",
        "partial": "OFXHeader",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:OrigCurrency",
      "description": {
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "OrigCurrency CurrencyData",
        "fct-source": "src/Data-OFX.html#OrigCurrency",
        "fct-type": "function",
        "title": "OrigCurrency"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "OrigCurrency",
        "normalized": "",
        "package": "ofx",
        "partial": "Orig Currency",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:Payee",
      "description": {
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "Payee",
        "fct-source": "src/Data-OFX.html#Payee",
        "fct-type": "function",
        "title": "Payee"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "Payee",
        "normalized": "",
        "package": "ofx",
        "partial": "Payee",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:REPLACE",
      "description": {
        "fct-descr": "\u003cp\u003eReplaces the transaction referenced by the CORRECTFITID\n\u003c/p\u003e",
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "REPLACE",
        "fct-source": "src/Data-OFX.html#CorrectAction",
        "fct-type": "function",
        "title": "REPLACE"
      },
      "index": {
        "description": "Replaces the transaction referenced by the CORRECTFITID",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "REPLACE",
        "normalized": "",
        "package": "ofx",
        "partial": "REPLACE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:TATM",
      "description": {
        "fct-descr": "\u003cp\u003eATM debit or credit (which it is depends on sign of amount)\n\u003c/p\u003e",
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "TATM",
        "fct-source": "src/Data-OFX.html#TrnType",
        "fct-type": "function",
        "title": "TATM"
      },
      "index": {
        "description": "ATM debit or credit which it is depends on sign of amount",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "TATM",
        "normalized": "",
        "package": "ofx",
        "partial": "TATM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:TCASH",
      "description": {
        "fct-descr": "\u003cp\u003eCash withdrawal\n\u003c/p\u003e",
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "TCASH",
        "fct-source": "src/Data-OFX.html#TrnType",
        "fct-type": "function",
        "title": "TCASH"
      },
      "index": {
        "description": "Cash withdrawal",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "TCASH",
        "normalized": "",
        "package": "ofx",
        "partial": "TCASH",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:TCHECK",
      "description": {
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "TCHECK",
        "fct-source": "src/Data-OFX.html#TrnType",
        "fct-type": "function",
        "title": "TCHECK"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "TCHECK",
        "normalized": "",
        "package": "ofx",
        "partial": "TCHECK",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:TCREDIT",
      "description": {
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "TCREDIT",
        "fct-source": "src/Data-OFX.html#TrnType",
        "fct-type": "function",
        "title": "TCREDIT"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "TCREDIT",
        "normalized": "",
        "package": "ofx",
        "partial": "TCREDIT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:TDEBIT",
      "description": {
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "TDEBIT",
        "fct-source": "src/Data-OFX.html#TrnType",
        "fct-type": "function",
        "title": "TDEBIT"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "TDEBIT",
        "normalized": "",
        "package": "ofx",
        "partial": "TDEBIT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:TDEP",
      "description": {
        "fct-descr": "\u003cp\u003eDeposit\n\u003c/p\u003e",
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "TDEP",
        "fct-source": "src/Data-OFX.html#TrnType",
        "fct-type": "function",
        "title": "TDEP"
      },
      "index": {
        "description": "Deposit",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "TDEP",
        "normalized": "",
        "package": "ofx",
        "partial": "TDEP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:TDIRECTDEBIT",
      "description": {
        "fct-descr": "\u003cp\u003eMerchant initiated debit\n\u003c/p\u003e",
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "TDIRECTDEBIT",
        "fct-source": "src/Data-OFX.html#TrnType",
        "fct-type": "function",
        "title": "TDIRECTDEBIT"
      },
      "index": {
        "description": "Merchant initiated debit",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "TDIRECTDEBIT",
        "normalized": "",
        "package": "ofx",
        "partial": "TDIRECTDEBIT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:TDIRECTDEP",
      "description": {
        "fct-descr": "\u003cp\u003eDirect deposit\n\u003c/p\u003e",
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "TDIRECTDEP",
        "fct-source": "src/Data-OFX.html#TrnType",
        "fct-type": "function",
        "title": "TDIRECTDEP"
      },
      "index": {
        "description": "Direct deposit",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "TDIRECTDEP",
        "normalized": "",
        "package": "ofx",
        "partial": "TDIRECTDEP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:TDIV",
      "description": {
        "fct-descr": "\u003cp\u003eDividend\n\u003c/p\u003e",
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "TDIV",
        "fct-source": "src/Data-OFX.html#TrnType",
        "fct-type": "function",
        "title": "TDIV"
      },
      "index": {
        "description": "Dividend",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "TDIV",
        "normalized": "",
        "package": "ofx",
        "partial": "TDIV",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:TFEE",
      "description": {
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "TFEE",
        "fct-source": "src/Data-OFX.html#TrnType",
        "fct-type": "function",
        "title": "TFEE"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "TFEE",
        "normalized": "",
        "package": "ofx",
        "partial": "TFEE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:TINT",
      "description": {
        "fct-descr": "\u003cp\u003eInterest earned or paid (which it is depends on sign of amount)\n\u003c/p\u003e",
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "TINT",
        "fct-source": "src/Data-OFX.html#TrnType",
        "fct-type": "function",
        "title": "TINT"
      },
      "index": {
        "description": "Interest earned or paid which it is depends on sign of amount",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "TINT",
        "normalized": "",
        "package": "ofx",
        "partial": "TINT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:TOTHER",
      "description": {
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "TOTHER",
        "fct-source": "src/Data-OFX.html#TrnType",
        "fct-type": "function",
        "title": "TOTHER"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "TOTHER",
        "normalized": "",
        "package": "ofx",
        "partial": "TOTHER",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:TPAYMENT",
      "description": {
        "fct-descr": "\u003cp\u003eElectronic payment\n\u003c/p\u003e",
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "TPAYMENT",
        "fct-source": "src/Data-OFX.html#TrnType",
        "fct-type": "function",
        "title": "TPAYMENT"
      },
      "index": {
        "description": "Electronic payment",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "TPAYMENT",
        "normalized": "",
        "package": "ofx",
        "partial": "TPAYMENT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:TPOS",
      "description": {
        "fct-descr": "\u003cp\u003ePoint of sale debit or credit (which it is depends on sign of\n amount)\n\u003c/p\u003e",
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "TPOS",
        "fct-source": "src/Data-OFX.html#TrnType",
        "fct-type": "function",
        "title": "TPOS"
      },
      "index": {
        "description": "Point of sale debit or credit which it is depends on sign of amount",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "TPOS",
        "normalized": "",
        "package": "ofx",
        "partial": "TPOS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:TREPEATPMT",
      "description": {
        "fct-descr": "\u003cp\u003eRepeating payment / standing order\n\u003c/p\u003e",
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "TREPEATPMT",
        "fct-source": "src/Data-OFX.html#TrnType",
        "fct-type": "function",
        "title": "TREPEATPMT"
      },
      "index": {
        "description": "Repeating payment standing order",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "TREPEATPMT",
        "normalized": "",
        "package": "ofx",
        "partial": "TREPEATPMT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:TSRVCHG",
      "description": {
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "TSRVCHG",
        "fct-source": "src/Data-OFX.html#TrnType",
        "fct-type": "function",
        "title": "TSRVCHG"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "TSRVCHG",
        "normalized": "",
        "package": "ofx",
        "partial": "TSRVCHG",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:TXFER",
      "description": {
        "fct-descr": "\u003cp\u003eTransfer\n\u003c/p\u003e",
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "TXFER",
        "fct-source": "src/Data-OFX.html#TrnType",
        "fct-type": "function",
        "title": "TXFER"
      },
      "index": {
        "description": "Transfer",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "TXFER",
        "normalized": "",
        "package": "ofx",
        "partial": "TXFER",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:Tag",
      "description": {
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "Tag TagName (Either TagData [Tag])",
        "fct-source": "src/Data-OFX.html#Tag",
        "fct-type": "function",
        "title": "Tag"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "Tag",
        "normalized": "Tag TagName(Either TagData[Tag])",
        "package": "ofx",
        "partial": "Tag",
        "signature": "Tag TagName(Either TagData[Tag])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:Transaction",
      "description": {
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "Transaction",
        "fct-source": "src/Data-OFX.html#Transaction",
        "fct-type": "function",
        "title": "Transaction"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "Transaction",
        "normalized": "",
        "package": "ofx",
        "partial": "Transaction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:accountNumber",
      "description": {
        "fct-descr": "\u003cp\u003eGets either the credit card or bank account number, if available.\n\u003c/p\u003e",
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "OFXFile -\u003e Maybe TagData",
        "fct-source": "src/Data-OFX.html#accountNumber",
        "fct-type": "function",
        "title": "accountNumber"
      },
      "index": {
        "description": "Gets either the credit card or bank account number if available",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "accountNumber",
        "normalized": "OFXFile-\u003eMaybe TagData",
        "package": "ofx",
        "partial": "Number",
        "signature": "OFXFile-\u003eMaybe TagData"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:acctType",
      "description": {
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "String -\u003e Err AcctType",
        "fct-source": "src/Data-OFX.html#acctType",
        "fct-type": "function",
        "title": "acctType"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "acctType",
        "normalized": "String-\u003eErr AcctType",
        "package": "ofx",
        "partial": "Type",
        "signature": "String-\u003eErr AcctType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:bankAccountNumber",
      "description": {
        "fct-descr": "\u003cp\u003eGets the bank account number, if available. The OFX spec does not\n require this tag to be present.\n\u003c/p\u003e",
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "OFXFile -\u003e Maybe TagData",
        "fct-source": "src/Data-OFX.html#bankAccountNumber",
        "fct-type": "function",
        "title": "bankAccountNumber"
      },
      "index": {
        "description": "Gets the bank account number if available The OFX spec does not require this tag to be present",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "bankAccountNumber",
        "normalized": "OFXFile-\u003eMaybe TagData",
        "package": "ofx",
        "partial": "Account Number",
        "signature": "OFXFile-\u003eMaybe TagData"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:bankAcctTo",
      "description": {
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "Tag -\u003e Maybe (Err BankAcctTo)",
        "fct-source": "src/Data-OFX.html#bankAcctTo",
        "fct-type": "function",
        "title": "bankAcctTo"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "bankAcctTo",
        "normalized": "Tag-\u003eMaybe(Err BankAcctTo)",
        "package": "ofx",
        "partial": "Acct To",
        "signature": "Tag-\u003eMaybe(Err BankAcctTo)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:btACCTID",
      "description": {
        "fct-descr": "\u003cp\u003eAccount number\n\u003c/p\u003e",
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "String",
        "fct-source": "src/Data-OFX.html#BankAcctTo",
        "fct-type": "function",
        "title": "btACCTID"
      },
      "index": {
        "description": "Account number",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "btACCTID",
        "normalized": "",
        "package": "ofx",
        "partial": "ACCTID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:btACCTKEY",
      "description": {
        "fct-descr": "\u003cp\u003eChecksum for international banks\n\u003c/p\u003e",
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "Maybe String",
        "fct-source": "src/Data-OFX.html#BankAcctTo",
        "fct-type": "function",
        "title": "btACCTKEY"
      },
      "index": {
        "description": "Checksum for international banks",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "btACCTKEY",
        "normalized": "",
        "package": "ofx",
        "partial": "ACCTKEY",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:btACCTTYPE",
      "description": {
        "fct-descr": "\u003cp\u003eType of account\n\u003c/p\u003e",
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "AcctType",
        "fct-source": "src/Data-OFX.html#BankAcctTo",
        "fct-type": "function",
        "title": "btACCTTYPE"
      },
      "index": {
        "description": "Type of account",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "btACCTTYPE",
        "normalized": "",
        "package": "ofx",
        "partial": "ACCTTYPE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:btBANKID",
      "description": {
        "fct-descr": "\u003cp\u003eRouting and transit number\n\u003c/p\u003e",
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "String",
        "fct-source": "src/Data-OFX.html#BankAcctTo",
        "fct-type": "function",
        "title": "btBANKID"
      },
      "index": {
        "description": "Routing and transit number",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "btBANKID",
        "normalized": "",
        "package": "ofx",
        "partial": "BANKID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:btBRANCHID",
      "description": {
        "fct-descr": "\u003cp\u003eBank identifier for international banks\n\u003c/p\u003e",
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "Maybe String",
        "fct-source": "src/Data-OFX.html#BankAcctTo",
        "fct-type": "function",
        "title": "btBRANCHID"
      },
      "index": {
        "description": "Bank identifier for international banks",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "btBRANCHID",
        "normalized": "",
        "package": "ofx",
        "partial": "BRANCHID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:ccAcctTo",
      "description": {
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "Tag -\u003e Maybe (Err CCAcctTo)",
        "fct-source": "src/Data-OFX.html#ccAcctTo",
        "fct-type": "function",
        "title": "ccAcctTo"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "ccAcctTo",
        "normalized": "Tag-\u003eMaybe(Err CCAcctTo)",
        "package": "ofx",
        "partial": "Acct To",
        "signature": "Tag-\u003eMaybe(Err CCAcctTo)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:cdCURRATE",
      "description": {
        "fct-descr": "\u003cp\u003eRatio of CURDEF currency to CURSYM currency, in decimal form\n\u003c/p\u003e",
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "String",
        "fct-source": "src/Data-OFX.html#CurrencyData",
        "fct-type": "function",
        "title": "cdCURRATE"
      },
      "index": {
        "description": "Ratio of CURDEF currency to CURSYM currency in decimal form",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "cdCURRATE",
        "normalized": "",
        "package": "ofx",
        "partial": "CURRATE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:cdCURSYM",
      "description": {
        "fct-descr": "\u003cp\u003eISO-4217 3-letter currency identifier\n\u003c/p\u003e",
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "String",
        "fct-source": "src/Data-OFX.html#CurrencyData",
        "fct-type": "function",
        "title": "cdCURSYM"
      },
      "index": {
        "description": "ISO-4217 letter currency identifier",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "cdCURSYM",
        "normalized": "",
        "package": "ofx",
        "partial": "CURSYM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:closingTag",
      "description": {
        "fct-descr": "\u003cp\u003eParses a closing tag with the given name.\n\u003c/p\u003e",
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "TagName -\u003e Parser ()",
        "fct-source": "src/Data-OFX.html#closingTag",
        "fct-type": "function",
        "title": "closingTag"
      },
      "index": {
        "description": "Parses closing tag with the given name",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "closingTag",
        "normalized": "TagName-\u003eParser()",
        "package": "ofx",
        "partial": "Tag",
        "signature": "TagName-\u003eParser()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:creditCardNumber",
      "description": {
        "fct-descr": "\u003cp\u003eGets the credit card number, if available. The OFX spec does not\n require this tag to be present.\n\u003c/p\u003e",
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "OFXFile -\u003e Maybe TagData",
        "fct-source": "src/Data-OFX.html#creditCardNumber",
        "fct-type": "function",
        "title": "creditCardNumber"
      },
      "index": {
        "description": "Gets the credit card number if available The OFX spec does not require this tag to be present",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "creditCardNumber",
        "normalized": "OFXFile-\u003eMaybe TagData",
        "package": "ofx",
        "partial": "Card Number",
        "signature": "OFXFile-\u003eMaybe TagData"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:ctACCTID",
      "description": {
        "fct-descr": "\u003cp\u003eAccount number\n\u003c/p\u003e",
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "String",
        "fct-source": "src/Data-OFX.html#CCAcctTo",
        "fct-type": "function",
        "title": "ctACCTID"
      },
      "index": {
        "description": "Account number",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "ctACCTID",
        "normalized": "",
        "package": "ofx",
        "partial": "ACCTID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:ctACCTKEY",
      "description": {
        "fct-descr": "\u003cp\u003eChecksum for international banks\n\u003c/p\u003e",
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "Maybe String",
        "fct-source": "src/Data-OFX.html#CCAcctTo",
        "fct-type": "function",
        "title": "ctACCTKEY"
      },
      "index": {
        "description": "Checksum for international banks",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "ctACCTKEY",
        "normalized": "",
        "package": "ofx",
        "partial": "ACCTKEY",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:currency",
      "description": {
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "Tag -\u003e Maybe (Err Currency)",
        "fct-source": "src/Data-OFX.html#currency",
        "fct-type": "function",
        "title": "currency"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "currency",
        "normalized": "Tag-\u003eMaybe(Err Currency)",
        "package": "ofx",
        "partial": "",
        "signature": "Tag-\u003eMaybe(Err Currency)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:currencyData",
      "description": {
        "fct-descr": "\u003cp\u003eParses currency data.\n\u003c/p\u003e",
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "Tag-\u003e Err CurrencyData",
        "fct-type": "function",
        "title": "currencyData"
      },
      "index": {
        "description": "Parses currency data",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "currencyData",
        "normalized": "Tag-\u003eErr CurrencyData",
        "package": "ofx",
        "partial": "Data",
        "signature": "Tag-\u003eErr CurrencyData"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:date",
      "description": {
        "fct-descr": "\u003cp\u003eParses an OFX date. Fails if the date is not valid or if there is\n no date to be parsed.\n\u003c/p\u003e",
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "Parser ZonedTime",
        "fct-source": "src/Data-OFX.html#date",
        "fct-type": "function",
        "title": "date"
      },
      "index": {
        "description": "Parses an OFX date Fails if the date is not valid or if there is no date to be parsed",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "date",
        "normalized": "",
        "package": "ofx",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:escChar",
      "description": {
        "fct-descr": "\u003cp\u003eParses a character, possibly with an escape sequence. The\n greater-than sign, less-than sign, and ampersand must be entered\n with escape sequences.\n\u003c/p\u003e\u003cp\u003eAccording to OFX spec section 2.3.2.1, ampersands, less-than signs,\n and greater-than signs must appear as entities.  However some banks\n deliver broken OFX files that do not use entities for ampersands\n (and possibly for less-than or greater-than signs too, although I\n have not yet observed such behavior.) There is now an error message\n that reflects this problem.  Client code can filter the OFX data\n for known offenders before passing it to this library.\n\u003c/p\u003e",
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "Parser Char",
        "fct-source": "src/Data-OFX.html#escChar",
        "fct-type": "function",
        "title": "escChar"
      },
      "index": {
        "description": "Parses character possibly with an escape sequence The greater-than sign less-than sign and ampersand must be entered with escape sequences According to OFX spec section ampersands less-than signs and greater-than signs must appear as entities However some banks deliver broken OFX files that do not use entities for ampersands and possibly for less-than or greater-than signs too although have not yet observed such behavior There is now an error message that reflects this problem Client code can filter the OFX data for known offenders before passing it to this library",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "escChar",
        "normalized": "",
        "package": "ofx",
        "partial": "Char",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:fHeader",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "[OFXHeader]",
        "fct-source": "src/Data-OFX.html#OFXFile",
        "fct-type": "function",
        "title": "fHeader"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "fHeader",
        "normalized": "[OFXHeader]",
        "package": "ofx",
        "partial": "Header",
        "signature": "[OFXHeader]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:fTag",
      "description": {
        "fct-descr": "\u003cp\u003eAll the data will be contained in a root tag with the TagName\n \u003ccode\u003eOFX\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "Tag",
        "fct-source": "src/Data-OFX.html#OFXFile",
        "fct-type": "function",
        "title": "fTag"
      },
      "index": {
        "description": "All the data will be contained in root tag with the TagName OFX",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "fTag",
        "normalized": "",
        "package": "ofx",
        "partial": "Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:fiName",
      "description": {
        "fct-descr": "\u003cp\u003eGets the name of the financial institution from the FI tag, if\n available. The OFX spec does not require this tag to be present.\n\u003c/p\u003e",
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "OFXFile -\u003e Maybe TagData",
        "fct-source": "src/Data-OFX.html#fiName",
        "fct-type": "function",
        "title": "fiName"
      },
      "index": {
        "description": "Gets the name of the financial institution from the FI tag if available The OFX spec does not require this tag to be present",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "fiName",
        "normalized": "OFXFile-\u003eMaybe TagData",
        "package": "ofx",
        "partial": "Name",
        "signature": "OFXFile-\u003eMaybe TagData"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:find",
      "description": {
        "fct-descr": "\u003cp\u003eFinds child tags with the given name. When a tag is found, that\n tag is not searched for further children with the same name.\n\u003c/p\u003e",
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "TagName -\u003e Tag -\u003e [Tag]",
        "fct-source": "src/Data-OFX.html#find",
        "fct-type": "function",
        "title": "find"
      },
      "index": {
        "description": "Finds child tags with the given name When tag is found that tag is not searched for further children with the same name",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "find",
        "normalized": "TagName-\u003eTag-\u003e[Tag]",
        "package": "ofx",
        "partial": "",
        "signature": "TagName-\u003eTag-\u003e[Tag]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:findData",
      "description": {
        "fct-descr": "\u003cp\u003eFinds the first tag (either this tag or any children) that has\n the given name and that is a data tag (not an aggregate tag.) If no\n data tag with the given name is found, returns Nothing.\n\u003c/p\u003e",
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "TagName -\u003e Tag -\u003e Maybe TagData",
        "fct-source": "src/Data-OFX.html#findData",
        "fct-type": "function",
        "title": "findData"
      },
      "index": {
        "description": "Finds the first tag either this tag or any children that has the given name and that is data tag not an aggregate tag If no data tag with the given name is found returns Nothing",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "findData",
        "normalized": "TagName-\u003eTag-\u003eMaybe TagData",
        "package": "ofx",
        "partial": "Data",
        "signature": "TagName-\u003eTag-\u003eMaybe TagData"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:findPath",
      "description": {
        "fct-descr": "\u003cp\u003eDescends through a tree of tags to find a tag at a specific\n location in the tree. Fails if any part of the search fails. For\n example, to find the financial institution ORG tag, where \u003ccode\u003et\u003c/code\u003e is\n the root \u003ccode\u003eOFX\u003c/code\u003e tag:\n\u003c/p\u003e\u003cpre\u003e findPath [\"SIGNONMSGSRSV1\", \"SONRS\", \"FI\", \"ORG\"] t\n\u003c/pre\u003e",
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "[TagName] -\u003e Tag -\u003e Maybe Tag",
        "fct-source": "src/Data-OFX.html#findPath",
        "fct-type": "function",
        "title": "findPath"
      },
      "index": {
        "description": "Descends through tree of tags to find tag at specific location in the tree Fails if any part of the search fails For example to find the financial institution ORG tag where is the root OFX tag findPath SIGNONMSGSRSV1 SONRS FI ORG",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "findPath",
        "normalized": "[TagName]-\u003eTag-\u003eMaybe Tag",
        "package": "ofx",
        "partial": "Path",
        "signature": "[TagName]-\u003eTag-\u003eMaybe Tag"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:header",
      "description": {
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "Parser OFXHeader",
        "fct-source": "src/Data-OFX.html#header",
        "fct-type": "function",
        "title": "header"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "header",
        "normalized": "",
        "package": "ofx",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:label",
      "description": {
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "String -\u003e Doc -\u003e Doc",
        "fct-source": "src/Data-OFX.html#label",
        "fct-type": "function",
        "title": "label"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "label",
        "normalized": "String-\u003eDoc-\u003eDoc",
        "package": "ofx",
        "partial": "",
        "signature": "String-\u003eDoc-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:newline",
      "description": {
        "fct-descr": "\u003cp\u003eParses either a UNIX or an MS-DOS newline. According to 1.2.2,\n OFX does not contain any white space between tags. However, since I\n have seen OFX files that do have whitespace between tags, the\n parser makes allowance for this.\n\u003c/p\u003e",
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "Parser ()",
        "fct-source": "src/Data-OFX.html#newline",
        "fct-type": "function",
        "title": "newline"
      },
      "index": {
        "description": "Parses either UNIX or an MS-DOS newline According to OFX does not contain any white space between tags However since have seen OFX files that do have whitespace between tags the parser makes allowance for this",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "newline",
        "normalized": "Parser()",
        "package": "ofx",
        "partial": "",
        "signature": "Parser()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:ofxFile",
      "description": {
        "fct-descr": "\u003cp\u003eParses an entire OFX file, including headers.\n\u003c/p\u003e",
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "Parser OFXFile",
        "fct-source": "src/Data-OFX.html#ofxFile",
        "fct-type": "function",
        "title": "ofxFile"
      },
      "index": {
        "description": "Parses an entire OFX file including headers",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "ofxFile",
        "normalized": "",
        "package": "ofx",
        "partial": "File",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:openingTag",
      "description": {
        "fct-descr": "\u003cp\u003eParses any opening tag. Returns the name of the tag.\n\u003c/p\u003e",
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "Parser TagName",
        "fct-source": "src/Data-OFX.html#openingTag",
        "fct-type": "function",
        "title": "openingTag"
      },
      "index": {
        "description": "Parses any opening tag Returns the name of the tag",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "openingTag",
        "normalized": "",
        "package": "ofx",
        "partial": "Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:origCurrency",
      "description": {
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "Tag -\u003e Maybe (Err OrigCurrency)",
        "fct-source": "src/Data-OFX.html#origCurrency",
        "fct-type": "function",
        "title": "origCurrency"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "origCurrency",
        "normalized": "Tag-\u003eMaybe(Err OrigCurrency)",
        "package": "ofx",
        "partial": "Currency",
        "signature": "Tag-\u003eMaybe(Err OrigCurrency)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:pEither",
      "description": {
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "(a -\u003e Doc) -\u003e (b -\u003e Doc) -\u003e Either a b -\u003e Doc",
        "fct-source": "src/Data-OFX.html#pEither",
        "fct-type": "function",
        "title": "pEither"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "pEither",
        "normalized": "(a-\u003eDoc)-\u003e(b-\u003eDoc)-\u003eEither a b-\u003eDoc",
        "package": "ofx",
        "partial": "Either",
        "signature": "(a-\u003eDoc)-\u003e(b-\u003eDoc)-\u003eEither a b-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:pExceptional",
      "description": {
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "(e -\u003e Doc) -\u003e (a -\u003e Doc) -\u003e Either e a -\u003e Doc",
        "fct-source": "src/Data-OFX.html#pExceptional",
        "fct-type": "function",
        "title": "pExceptional"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "pExceptional",
        "normalized": "(a-\u003eDoc)-\u003e(b-\u003eDoc)-\u003eEither a b-\u003eDoc",
        "package": "ofx",
        "partial": "Exceptional",
        "signature": "(e-\u003eDoc)-\u003e(a-\u003eDoc)-\u003eEither e a-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:pFile",
      "description": {
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "OFXFile -\u003e Doc",
        "fct-source": "src/Data-OFX.html#pFile",
        "fct-type": "function",
        "title": "pFile"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "pFile",
        "normalized": "OFXFile-\u003eDoc",
        "package": "ofx",
        "partial": "File",
        "signature": "OFXFile-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:pHeader",
      "description": {
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "OFXHeader -\u003e Doc",
        "fct-source": "src/Data-OFX.html#pHeader",
        "fct-type": "function",
        "title": "pHeader"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "pHeader",
        "normalized": "OFXHeader-\u003eDoc",
        "package": "ofx",
        "partial": "Header",
        "signature": "OFXHeader-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:pList",
      "description": {
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "[Doc] -\u003e Doc",
        "fct-source": "src/Data-OFX.html#pList",
        "fct-type": "function",
        "title": "pList"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "pList",
        "normalized": "[Doc]-\u003eDoc",
        "package": "ofx",
        "partial": "List",
        "signature": "[Doc]-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:pMaybe",
      "description": {
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "(a -\u003e Doc) -\u003e Maybe a -\u003e Doc",
        "fct-source": "src/Data-OFX.html#pMaybe",
        "fct-type": "function",
        "title": "pMaybe"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "pMaybe",
        "normalized": "(a-\u003eDoc)-\u003eMaybe a-\u003eDoc",
        "package": "ofx",
        "partial": "Maybe",
        "signature": "(a-\u003eDoc)-\u003eMaybe a-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:pPayee",
      "description": {
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "Payee -\u003e Doc",
        "fct-source": "src/Data-OFX.html#pPayee",
        "fct-type": "function",
        "title": "pPayee"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "pPayee",
        "normalized": "Payee-\u003eDoc",
        "package": "ofx",
        "partial": "Payee",
        "signature": "Payee-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:pTag",
      "description": {
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "Tag -\u003e Doc",
        "fct-source": "src/Data-OFX.html#pTag",
        "fct-type": "function",
        "title": "pTag"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "pTag",
        "normalized": "Tag-\u003eDoc",
        "package": "ofx",
        "partial": "Tag",
        "signature": "Tag-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:pTransaction",
      "description": {
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "Transaction -\u003e Doc",
        "fct-source": "src/Data-OFX.html#pTransaction",
        "fct-type": "function",
        "title": "pTransaction"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "pTransaction",
        "normalized": "Transaction-\u003eDoc",
        "package": "ofx",
        "partial": "Transaction",
        "signature": "Transaction-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:pathData",
      "description": {
        "fct-descr": "\u003cp\u003eGoes to a certain path in the tag hierarchy and pulls the\n requested data, if the tag is present and it is a data tag.  For\n example, to get the name of the financial institution:\n\u003c/p\u003e\u003cpre\u003e pathData [\"SIGNONMSGSRSV1\", \"SONRS\", \"FI\", \"ORG\"] f\n\u003c/pre\u003e",
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "[TagName] -\u003e OFXFile -\u003e Maybe TagData",
        "fct-source": "src/Data-OFX.html#pathData",
        "fct-type": "function",
        "title": "pathData"
      },
      "index": {
        "description": "Goes to certain path in the tag hierarchy and pulls the requested data if the tag is present and it is data tag For example to get the name of the financial institution pathData SIGNONMSGSRSV1 SONRS FI ORG",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "pathData",
        "normalized": "[TagName]-\u003eOFXFile-\u003eMaybe TagData",
        "package": "ofx",
        "partial": "Data",
        "signature": "[TagName]-\u003eOFXFile-\u003eMaybe TagData"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:payee",
      "description": {
        "fct-descr": "\u003cp\u003eParses a Payee record from its parent tag.\n\u003c/p\u003e",
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "Tag-\u003e Maybe (Err Payee)",
        "fct-type": "function",
        "title": "payee"
      },
      "index": {
        "description": "Parses Payee record from its parent tag",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "payee",
        "normalized": "Tag-\u003eMaybe(Err Payee)",
        "package": "ofx",
        "partial": "",
        "signature": "Tag-\u003eMaybe(Err Payee)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:peADDR1",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "String",
        "fct-source": "src/Data-OFX.html#Payee",
        "fct-type": "function",
        "title": "peADDR1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "peADDR1",
        "normalized": "",
        "package": "ofx",
        "partial": "ADDR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:peADDR2",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "Maybe String",
        "fct-source": "src/Data-OFX.html#Payee",
        "fct-type": "function",
        "title": "peADDR2"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "peADDR2",
        "normalized": "",
        "package": "ofx",
        "partial": "ADDR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:peADDR3",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "Maybe String",
        "fct-source": "src/Data-OFX.html#Payee",
        "fct-type": "function",
        "title": "peADDR3"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "peADDR3",
        "normalized": "",
        "package": "ofx",
        "partial": "ADDR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:peCITY",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "String",
        "fct-source": "src/Data-OFX.html#Payee",
        "fct-type": "function",
        "title": "peCITY"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "peCITY",
        "normalized": "",
        "package": "ofx",
        "partial": "CITY",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:peCOUNTRY",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "Maybe String",
        "fct-source": "src/Data-OFX.html#Payee",
        "fct-type": "function",
        "title": "peCOUNTRY"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "peCOUNTRY",
        "normalized": "",
        "package": "ofx",
        "partial": "COUNTRY",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:peNAME",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "String",
        "fct-source": "src/Data-OFX.html#Payee",
        "fct-type": "function",
        "title": "peNAME"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "peNAME",
        "normalized": "",
        "package": "ofx",
        "partial": "NAME",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:pePHONE",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "String",
        "fct-source": "src/Data-OFX.html#Payee",
        "fct-type": "function",
        "title": "pePHONE"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "pePHONE",
        "normalized": "",
        "package": "ofx",
        "partial": "PHONE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:pePOSTALCODE",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "String",
        "fct-source": "src/Data-OFX.html#Payee",
        "fct-type": "function",
        "title": "pePOSTALCODE"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "pePOSTALCODE",
        "normalized": "",
        "package": "ofx",
        "partial": "POSTALCODE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:peSTATE",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "String",
        "fct-source": "src/Data-OFX.html#Payee",
        "fct-type": "function",
        "title": "peSTATE"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "peSTATE",
        "normalized": "",
        "package": "ofx",
        "partial": "STATE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:tag",
      "description": {
        "fct-descr": "\u003cp\u003eParses any tag. The tag itself must be followed by at least one\n character: either the next tag if this is an aggregate tag, or the\n data if this is a data tag. OFX does not allow empty tags.\n\u003c/p\u003e\u003cp\u003eThe OFX spec seems to say that OFX files do not include trailing\n newlines after tags or data, but I have seen these newlines in QFX\n files, so this parses optional trailing newlines and spaces.\n\u003c/p\u003e",
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "Parser Tag",
        "fct-source": "src/Data-OFX.html#tag",
        "fct-type": "function",
        "title": "tag"
      },
      "index": {
        "description": "Parses any tag The tag itself must be followed by at least one character either the next tag if this is an aggregate tag or the data if this is data tag OFX does not allow empty tags The OFX spec seems to say that OFX files do not include trailing newlines after tags or data but have seen these newlines in QFX files so this parses optional trailing newlines and spaces",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "tag",
        "normalized": "",
        "package": "ofx",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:tagData",
      "description": {
        "fct-descr": "\u003cp\u003eGets the data from a tag, if it is a tag with data.\n\u003c/p\u003e",
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "Tag -\u003e Maybe TagData",
        "fct-source": "src/Data-OFX.html#tagData",
        "fct-type": "function",
        "title": "tagData"
      },
      "index": {
        "description": "Gets the data from tag if it is tag with data",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "tagData",
        "normalized": "Tag-\u003eMaybe TagData",
        "package": "ofx",
        "partial": "Data",
        "signature": "Tag-\u003eMaybe TagData"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:time",
      "description": {
        "fct-descr": "\u003cp\u003eParses an OFX time. Fails if the time is not valid or if there is\n no time to parse. Fails if there is no time to parse; however, if\n there is a time but no zone, returns the time and UTC for the zone.\n\u003c/p\u003e",
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "Parser (TimeOfDay, TimeZone)",
        "fct-source": "src/Data-OFX.html#time",
        "fct-type": "function",
        "title": "time"
      },
      "index": {
        "description": "Parses an OFX time Fails if the time is not valid or if there is no time to parse Fails if there is no time to parse however if there is time but no zone returns the time and UTC for the zone",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "time",
        "normalized": "Parser(TimeOfDay,TimeZone)",
        "package": "ofx",
        "partial": "",
        "signature": "Parser(TimeOfDay,TimeZone)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:transaction",
      "description": {
        "fct-descr": "\u003cp\u003eGets a single Transaction from a tag. The tag should be the one\n named STMTTRN. Fails with an error message if any required field\n was not present.\n\u003c/p\u003e",
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "Tag -\u003e Err Transaction",
        "fct-source": "src/Data-OFX.html#transaction",
        "fct-type": "function",
        "title": "transaction"
      },
      "index": {
        "description": "Gets single Transaction from tag The tag should be the one named STMTTRN Fails with an error message if any required field was not present",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "transaction",
        "normalized": "Tag-\u003eErr Transaction",
        "package": "ofx",
        "partial": "",
        "signature": "Tag-\u003eErr Transaction"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:transactions",
      "description": {
        "fct-descr": "\u003cp\u003ePulls all Transactions from a file. Might fail if the OFX file\n does not conform to the specification (or if there are bugs in this\n library.) In case of the former, you can manually parse the\n transaction information yourself using functions like\n \u003ccode\u003e\u003ca\u003epathData\u003c/a\u003e\u003c/code\u003e. In case of the latter, please send bugreports :-)\n\u003c/p\u003e",
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "OFXFile -\u003e Err [Transaction]",
        "fct-source": "src/Data-OFX.html#transactions",
        "fct-type": "function",
        "title": "transactions"
      },
      "index": {
        "description": "Pulls all Transactions from file Might fail if the OFX file does not conform to the specification or if there are bugs in this library In case of the former you can manually parse the transaction information yourself using functions like pathData In case of the latter please send bugreports",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "transactions",
        "normalized": "OFXFile-\u003eErr[Transaction]",
        "package": "ofx",
        "partial": "",
        "signature": "OFXFile-\u003eErr[Transaction]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:trnType",
      "description": {
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "TagData -\u003e Maybe TrnType",
        "fct-source": "src/Data-OFX.html#trnType",
        "fct-type": "function",
        "title": "trnType"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "trnType",
        "normalized": "TagData-\u003eMaybe TrnType",
        "package": "ofx",
        "partial": "Type",
        "signature": "TagData-\u003eMaybe TrnType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:txAccountTo",
      "description": {
        "fct-descr": "\u003cp\u003eInformation on a transfer. If this transaction wa sa\n transfer, this may contain information about the account being\n transferred to.\n\u003c/p\u003e",
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "Maybe (Either BankAcctTo CCAcctTo)",
        "fct-source": "src/Data-OFX.html#Transaction",
        "fct-type": "function",
        "title": "txAccountTo"
      },
      "index": {
        "description": "Information on transfer If this transaction wa sa transfer this may contain information about the account being transferred to",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "txAccountTo",
        "normalized": "",
        "package": "ofx",
        "partial": "Account To",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:txCHECKNUM",
      "description": {
        "fct-descr": "\u003cp\u003eCheck or other reference number\n\u003c/p\u003e",
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "Maybe String",
        "fct-source": "src/Data-OFX.html#Transaction",
        "fct-type": "function",
        "title": "txCHECKNUM"
      },
      "index": {
        "description": "Check or other reference number",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "txCHECKNUM",
        "normalized": "",
        "package": "ofx",
        "partial": "CHECKNUM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:txCORRECTACTION",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eCorrectAction\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003etxCORRECTFITID\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "Maybe CorrectAction",
        "fct-source": "src/Data-OFX.html#Transaction",
        "fct-type": "function",
        "title": "txCORRECTACTION"
      },
      "index": {
        "description": "See CorrectAction and txCORRECTFITID",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "txCORRECTACTION",
        "normalized": "",
        "package": "ofx",
        "partial": "CORRECTACTION",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:txCORRECTFITID",
      "description": {
        "fct-descr": "\u003cp\u003eIf present, this indicates the FITID of a previously sent\n transaction that is corrected by this record. This transaction\n replaces or deletes the transaction that it corrects, based on\n the value of CORRECTACTION below.\n\u003c/p\u003e",
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "Maybe String",
        "fct-source": "src/Data-OFX.html#Transaction",
        "fct-type": "function",
        "title": "txCORRECTFITID"
      },
      "index": {
        "description": "If present this indicates the FITID of previously sent transaction that is corrected by this record This transaction replaces or deletes the transaction that it corrects based on the value of CORRECTACTION below",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "txCORRECTFITID",
        "normalized": "",
        "package": "ofx",
        "partial": "CORRECTFITID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:txCurrency",
      "description": {
        "fct-descr": "\u003cp\u003eCurrency option. OFX spec says to choose either CURRENCY or\n ORIGCURRENCY.\n\u003c/p\u003e",
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "Maybe (Either Currency OrigCurrency)",
        "fct-source": "src/Data-OFX.html#Transaction",
        "fct-type": "function",
        "title": "txCurrency"
      },
      "index": {
        "description": "Currency option OFX spec says to choose either CURRENCY or ORIGCURRENCY",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "txCurrency",
        "normalized": "",
        "package": "ofx",
        "partial": "Currency",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:txDTAVAIL",
      "description": {
        "fct-descr": "\u003cp\u003eDate funds are available\n\u003c/p\u003e",
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "Maybe ZonedTime",
        "fct-source": "src/Data-OFX.html#Transaction",
        "fct-type": "function",
        "title": "txDTAVAIL"
      },
      "index": {
        "description": "Date funds are available",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "txDTAVAIL",
        "normalized": "",
        "package": "ofx",
        "partial": "DTAVAIL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:txDTPOSTED",
      "description": {
        "fct-descr": "\u003cp\u003eDate transaction was posted to account\n\u003c/p\u003e",
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "ZonedTime",
        "fct-source": "src/Data-OFX.html#Transaction",
        "fct-type": "function",
        "title": "txDTPOSTED"
      },
      "index": {
        "description": "Date transaction was posted to account",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "txDTPOSTED",
        "normalized": "",
        "package": "ofx",
        "partial": "DTPOSTED",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:txDTUSER",
      "description": {
        "fct-descr": "\u003cp\u003eDate user initiated transaction, if known\n\u003c/p\u003e",
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "Maybe ZonedTime",
        "fct-source": "src/Data-OFX.html#Transaction",
        "fct-type": "function",
        "title": "txDTUSER"
      },
      "index": {
        "description": "Date user initiated transaction if known",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "txDTUSER",
        "normalized": "",
        "package": "ofx",
        "partial": "DTUSER",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:txFITID",
      "description": {
        "fct-descr": "\u003cp\u003eTransaction ID issued by financial institution. Used to\n detect duplicate downloads.\n\u003c/p\u003e",
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "String",
        "fct-source": "src/Data-OFX.html#Transaction",
        "fct-type": "function",
        "title": "txFITID"
      },
      "index": {
        "description": "Transaction ID issued by financial institution Used to detect duplicate downloads",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "txFITID",
        "normalized": "",
        "package": "ofx",
        "partial": "FITID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:txMEMO",
      "description": {
        "fct-descr": "\u003cp\u003eExtra information not in NAME\n\u003c/p\u003e",
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "Maybe String",
        "fct-source": "src/Data-OFX.html#Transaction",
        "fct-type": "function",
        "title": "txMEMO"
      },
      "index": {
        "description": "Extra information not in NAME",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "txMEMO",
        "normalized": "",
        "package": "ofx",
        "partial": "MEMO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:txPAYEEID",
      "description": {
        "fct-descr": "\u003cp\u003ePayee identifier if available\n\u003c/p\u003e",
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "Maybe String",
        "fct-source": "src/Data-OFX.html#Transaction",
        "fct-type": "function",
        "title": "txPAYEEID"
      },
      "index": {
        "description": "Payee identifier if available",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "txPAYEEID",
        "normalized": "",
        "package": "ofx",
        "partial": "PAYEEID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:txPayeeInfo",
      "description": {
        "fct-descr": "\u003cp\u003eInformation on the payee. The OFX spec seems to be saying\n that every transaction must have either NAME, wich is \"name of\n payee or description of transaction\", or the Payee\n aggregate. The former is indicated with a Left, the latter with\n a Right.\n\u003c/p\u003e",
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "Maybe (Either String Payee)",
        "fct-source": "src/Data-OFX.html#Transaction",
        "fct-type": "function",
        "title": "txPayeeInfo"
      },
      "index": {
        "description": "Information on the payee The OFX spec seems to be saying that every transaction must have either NAME wich is name of payee or description of transaction or the Payee aggregate The former is indicated with Left the latter with Right",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "txPayeeInfo",
        "normalized": "",
        "package": "ofx",
        "partial": "Payee Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:txREFNUM",
      "description": {
        "fct-descr": "\u003cp\u003eReference number that uniquely identifies the\n transaction. Can be used in addition to or instead of a\n CHECKNUM.\n\u003c/p\u003e",
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "Maybe String",
        "fct-source": "src/Data-OFX.html#Transaction",
        "fct-type": "function",
        "title": "txREFNUM"
      },
      "index": {
        "description": "Reference number that uniquely identifies the transaction Can be used in addition to or instead of CHECKNUM",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "txREFNUM",
        "normalized": "",
        "package": "ofx",
        "partial": "REFNUM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:txSIC",
      "description": {
        "fct-descr": "\u003cp\u003eStandard Industrial Code\n\u003c/p\u003e",
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "Maybe String",
        "fct-source": "src/Data-OFX.html#Transaction",
        "fct-type": "function",
        "title": "txSIC"
      },
      "index": {
        "description": "Standard Industrial Code",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "txSIC",
        "normalized": "",
        "package": "ofx",
        "partial": "SIC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:txSRVRTID",
      "description": {
        "fct-descr": "\u003cp\u003eServer assigned transaction ID; used for transactions\n initiated by client, such as payment or funds transfer\n\u003c/p\u003e",
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "Maybe String",
        "fct-source": "src/Data-OFX.html#Transaction",
        "fct-type": "function",
        "title": "txSRVRTID"
      },
      "index": {
        "description": "Server assigned transaction ID used for transactions initiated by client such as payment or funds transfer",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "txSRVRTID",
        "normalized": "",
        "package": "ofx",
        "partial": "SRVRTID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:txTRNAMT",
      "description": {
        "fct-descr": "\u003cp\u003eAmount of transaction. This is left as the string that was\n originally in the download. That means the transaction may\n include a plus or minus sign (no sign is the same as a plus\n sign.) According to section 3.2.9.2, amounts are always signed\n from the perspective of the customer.\n\u003c/p\u003e\u003cp\u003eTypically negative amounts:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Investment buy amount, investment sell quantity\n\u003c/li\u003e\u003cli\u003e Bank statement debit amounts, checks, fees\n\u003c/li\u003e\u003cli\u003e Credit card purchases\n\u003c/li\u003e\u003cli\u003e Margin balance (unless the institution owes the client money)\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eTypically positive amounts:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Investment sell amount, investment buy quantity\n\u003c/li\u003e\u003cli\u003e Bank statement credits\n\u003c/li\u003e\u003cli\u003e Credit card payments\n\u003c/li\u003e\u003cli\u003e Ledger balance (unless the account is overdrawn)\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eFormats for amounts are described in 3.2.9.1. If there is no\n decimal point, there is an implied decimal point at the end of\n the value. Trailing and leading spaces \"should\" be\n stripped. Positive or minus is indicated with a leading sign; a\n plus sign is assumed if there is no sign.\n\u003c/p\u003e\u003cp\u003eAn amount has a maximum of 32 alphanumeric characters,\n including digits and punctuation.\n\u003c/p\u003e\u003cp\u003eThe radix point is indicated with either a period or a\n comma. Amounts \"should\" not include any digit grouping\n characters.\n\u003c/p\u003e",
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "String",
        "fct-source": "src/Data-OFX.html#Transaction",
        "fct-type": "function",
        "title": "txTRNAMT"
      },
      "index": {
        "description": "Amount of transaction This is left as the string that was originally in the download That means the transaction may include plus or minus sign no sign is the same as plus sign According to section amounts are always signed from the perspective of the customer Typically negative amounts Investment buy amount investment sell quantity Bank statement debit amounts checks fees Credit card purchases Margin balance unless the institution owes the client money Typically positive amounts Investment sell amount investment buy quantity Bank statement credits Credit card payments Ledger balance unless the account is overdrawn Formats for amounts are described in If there is no decimal point there is an implied decimal point at the end of the value Trailing and leading spaces should be stripped Positive or minus is indicated with leading sign plus sign is assumed if there is no sign An amount has maximum of alphanumeric characters including digits and punctuation The radix point is indicated with either period or comma Amounts should not include any digit grouping characters",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "txTRNAMT",
        "normalized": "",
        "package": "ofx",
        "partial": "TRNAMT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:txTRNTYPE",
      "description": {
        "fct-descr": "\u003cp\u003eTransaction type\n\u003c/p\u003e",
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "TrnType",
        "fct-source": "src/Data-OFX.html#Transaction",
        "fct-type": "function",
        "title": "txTRNTYPE"
      },
      "index": {
        "description": "Transaction type",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "txTRNTYPE",
        "normalized": "",
        "package": "ofx",
        "partial": "TRNTYPE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:tzOffset",
      "description": {
        "fct-descr": "\u003cp\u003eParses a time zone offset. Fails if there is no time zone offset\n to parse.\n\u003c/p\u003e",
        "fct-module": "Data.OFX",
        "fct-package": "ofx",
        "fct-signature": "Parser TimeZone",
        "fct-source": "src/Data-OFX.html#tzOffset",
        "fct-type": "function",
        "title": "tzOffset"
      },
      "index": {
        "description": "Parses time zone offset Fails if there is no time zone offset to parse",
        "hierarchy": "Data OFX",
        "module": "Data.OFX",
        "name": "tzOffset",
        "normalized": "",
        "package": "ofx",
        "partial": "Offset",
        "signature": ""
      }
    }
  }
]