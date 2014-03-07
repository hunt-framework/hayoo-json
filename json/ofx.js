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
        "word": "ofx"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParser for downloaded OFX files.\n\u003c/p\u003e\u003cp\u003eThis parser was written based on the OFX version 1.03\n specification, which is available at\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.ofx.net\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eIt will probably work on earlier versions of OFX without\n incident. However, it may or may not not work on newer versions of\n OFX, which are XML based (this version of OFX is SGML based.)\n\u003c/p\u003e\u003cp\u003eIt will also parse QFX files, which are OFX files with minor\n proprietary additions by Intuit, the maker of Quicken.\n\u003c/p\u003e\u003cp\u003eAn OFX file consists of three parts: the HTTP headers (which this\n parser does NOT handle because typically they will not show up in\n files downloaded to disk), the OFX headers, and the OFX data. This\n parser handles the OFX headers and the OFX data.\n\u003c/p\u003e\u003cp\u003eThe parser in this module simply parses the tags and data into a\n tree, which you can manipulate with other functions. Some functions\n are provided to find the transactions in the tree and place them\n into a \u003ccode\u003e\u003ca\u003eTransaction\u003c/a\u003e\u003c/code\u003e type, which is the data you are most likely\n interested in. If you are interested in other data you can query\n the \u003ccode\u003e\u003ca\u003eTag\u003c/a\u003e\u003c/code\u003e tree for what you need.\n\u003c/p\u003e\u003cp\u003eFor example, to read in the filename given on the command line and\n parse it and print it nicely:\n\u003c/p\u003e\u003cpre\u003e import System.Environment\n import Text.Parsec\n import Text.PrettyPrint\n import Data.OFX\n import System.IO\n import System.Exit\n\n main :: IO ()\n main = do\n   filename:[] \u003c- getArgs\n   contents \u003c- readFile filename\n   ofx \u003c- case parse ofxFile filename contents of\n     Left e -\u003e do\n       hPutStrLn stderr . show $ e\n       exitFailure\n     Right g -\u003e return g\n   putStrLn . render . pFile $ ofx\n   putStrLn\n     . render\n     . pExceptional text (pList . map pTransaction)\n     . transactions\n     $ ofx\n   putStrLn . render . pMaybe text . fiName $ ofx\n   putStrLn . render . pMaybe text . accountNumber $ ofx\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.OFX",
          "name": "OFX",
          "package": "ofx",
          "source": "src/Data-OFX.html",
          "type": "module"
        },
        "index": {
          "description": "Parser for downloaded OFX files This parser was written based on the OFX version specification which is available at http www.ofx.net It will probably work on earlier versions of OFX without incident However it may or may not not work on newer versions of OFX which are XML based this version of OFX is SGML based It will also parse QFX files which are OFX files with minor proprietary additions by Intuit the maker of Quicken An OFX file consists of three parts the HTTP headers which this parser does NOT handle because typically they will not show up in files downloaded to disk the OFX headers and the OFX data This parser handles the OFX headers and the OFX data The parser in this module simply parses the tags and data into tree which you can manipulate with other functions Some functions are provided to find the transactions in the tree and place them into Transaction type which is the data you are most likely interested in If you are interested in other data you can query the Tag tree for what you need For example to read in the filename given on the command line and parse it and print it nicely import System.Environment import Text.Parsec import Text.PrettyPrint import Data.OFX import System.IO import System.Exit main IO main do filename getArgs contents readFile filename ofx case parse ofxFile filename contents of Left do hPutStrLn stderr show exitFailure Right return putStrLn render pFile ofx putStrLn render pExceptional text pList map pTransaction transactions ofx putStrLn render pMaybe text fiName ofx putStrLn render pMaybe text accountNumber ofx",
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "OFX",
          "package": "ofx",
          "partial": "OFX",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OFX",
          "name": "AcctType",
          "package": "ofx",
          "source": "src/Data-OFX.html#AcctType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "AcctType",
          "package": "ofx",
          "partial": "Acct Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#t:AcctType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OFX",
          "name": "BankAcctTo",
          "package": "ofx",
          "source": "src/Data-OFX.html#BankAcctTo",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "BankAcctTo",
          "package": "ofx",
          "partial": "Bank Acct To",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#t:BankAcctTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OFX",
          "name": "CCAcctTo",
          "package": "ofx",
          "source": "src/Data-OFX.html#CCAcctTo",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "CCAcctTo",
          "package": "ofx",
          "partial": "CCAcct To",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#t:CCAcctTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCan be either REPLACE or DELETE.\n\u003c/p\u003e",
          "module": "Data.OFX",
          "name": "CorrectAction",
          "package": "ofx",
          "source": "src/Data-OFX.html#CorrectAction",
          "type": "data"
        },
        "index": {
          "description": "Can be either REPLACE or DELETE",
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "CorrectAction",
          "package": "ofx",
          "partial": "Correct Action",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#t:CorrectAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OFX",
          "name": "Currency",
          "package": "ofx",
          "source": "src/Data-OFX.html#Currency",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "Currency",
          "package": "ofx",
          "partial": "Currency",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#t:Currency"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHolds all data both for CURRENCY and for ORIGCURRENCY.\n\u003c/p\u003e",
          "module": "Data.OFX",
          "name": "CurrencyData",
          "package": "ofx",
          "source": "src/Data-OFX.html#CurrencyData",
          "type": "data"
        },
        "index": {
          "description": "Holds all data both for CURRENCY and for ORIGCURRENCY",
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "CurrencyData",
          "package": "ofx",
          "partial": "Currency Data",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#t:CurrencyData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eError handling. Errors are indicated with a Left String;\n successes with a Right.\n\u003c/p\u003e",
          "module": "Data.OFX",
          "name": "Err",
          "package": "ofx",
          "source": "src/Data-OFX.html#Err",
          "type": "type"
        },
        "index": {
          "description": "Error handling Errors are indicated with Left String successes with Right",
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "Err",
          "package": "ofx",
          "partial": "Err",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#t:Err"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHeaders consists of simple \u003ccode\u003etag:value\u003c/code\u003e pairs; this represents the\n tag.\n\u003c/p\u003e",
          "module": "Data.OFX",
          "name": "HeaderTag",
          "package": "ofx",
          "source": "src/Data-OFX.html#HeaderTag",
          "type": "type"
        },
        "index": {
          "description": "Headers consists of simple tag value pairs this represents the tag",
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "HeaderTag",
          "package": "ofx",
          "partial": "Header Tag",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#t:HeaderTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe value in an OFX header.\n\u003c/p\u003e",
          "module": "Data.OFX",
          "name": "HeaderValue",
          "package": "ofx",
          "source": "src/Data-OFX.html#HeaderValue",
          "type": "type"
        },
        "index": {
          "description": "The value in an OFX header",
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "HeaderValue",
          "package": "ofx",
          "partial": "Header Value",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#t:HeaderValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll the data from an OFX file.\n\u003c/p\u003e",
          "module": "Data.OFX",
          "name": "OFXFile",
          "package": "ofx",
          "source": "src/Data-OFX.html#OFXFile",
          "type": "data"
        },
        "index": {
          "description": "All the data from an OFX file",
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "OFXFile",
          "package": "ofx",
          "partial": "OFXFile",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#t:OFXFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn OFX file starts with a number of headers, which take the form\n \u003ccode\u003etag:value\u003c/code\u003e followed by a newline. These are followed by a blank\n line.\n\u003c/p\u003e",
          "module": "Data.OFX",
          "name": "OFXHeader",
          "package": "ofx",
          "source": "src/Data-OFX.html#OFXHeader",
          "type": "data"
        },
        "index": {
          "description": "An OFX file starts with number of headers which take the form tag value followed by newline These are followed by blank line",
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "OFXHeader",
          "package": "ofx",
          "partial": "OFXHeader",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#t:OFXHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OFX",
          "name": "OrigCurrency",
          "package": "ofx",
          "source": "src/Data-OFX.html#OrigCurrency",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "OrigCurrency",
          "package": "ofx",
          "partial": "Orig Currency",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#t:OrigCurrency"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OFX",
          "name": "Payee",
          "package": "ofx",
          "source": "src/Data-OFX.html#Payee",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "Payee",
          "package": "ofx",
          "partial": "Payee",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#t:Payee"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe main OFX data consists of a series of tags. OFX 1.03 is SGML,\n not XML. This means that opening tags need not have closing\n tags. In OFX, a tag either has data and no child elements, or it\n has no data and it has child elements.\n\u003c/p\u003e",
          "module": "Data.OFX",
          "name": "Tag",
          "package": "ofx",
          "source": "src/Data-OFX.html#Tag",
          "type": "data"
        },
        "index": {
          "description": "The main OFX data consists of series of tags OFX is SGML not XML This means that opening tags need not have closing tags In OFX tag either has data and no child elements or it has no data and it has child elements",
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "Tag",
          "package": "ofx",
          "partial": "Tag",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#t:Tag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe data accompanying an OFX tag.\n\u003c/p\u003e",
          "module": "Data.OFX",
          "name": "TagData",
          "package": "ofx",
          "source": "src/Data-OFX.html#TagData",
          "type": "type"
        },
        "index": {
          "description": "The data accompanying an OFX tag",
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "TagData",
          "package": "ofx",
          "partial": "Tag Data",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#t:TagData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe name of an OFX tag\n\u003c/p\u003e",
          "module": "Data.OFX",
          "name": "TagName",
          "package": "ofx",
          "source": "src/Data-OFX.html#TagName",
          "type": "type"
        },
        "index": {
          "description": "The name of an OFX tag",
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "TagName",
          "package": "ofx",
          "partial": "Tag Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#t:TagName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA single STMTTRN, see OFX spec section 11.4.2.3.1. This is most\n likely what you are interested in after downloading a statement\n from a bank.\n\u003c/p\u003e",
          "module": "Data.OFX",
          "name": "Transaction",
          "package": "ofx",
          "source": "src/Data-OFX.html#Transaction",
          "type": "data"
        },
        "index": {
          "description": "single STMTTRN see OFX spec section This is most likely what you are interested in after downloading statement from bank",
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "Transaction",
          "package": "ofx",
          "partial": "Transaction",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#t:Transaction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOFX transaction types. These are used in STMTTRN aggregates, see\n OFX spec section 11.4.2.3.1.1.\n\u003c/p\u003e",
          "module": "Data.OFX",
          "name": "TrnType",
          "package": "ofx",
          "source": "src/Data-OFX.html#TrnType",
          "type": "data"
        },
        "index": {
          "description": "OFX transaction types These are used in STMTTRN aggregates see OFX spec section",
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "TrnType",
          "package": "ofx",
          "partial": "Trn Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#t:TrnType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OFX",
          "name": "ACHECKING",
          "package": "ofx",
          "signature": "ACHECKING",
          "source": "src/Data-OFX.html#AcctType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "ACHECKING",
          "package": "ofx",
          "partial": "ACHECKING",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:ACHECKING"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OFX",
          "name": "ACREDITLINE",
          "package": "ofx",
          "signature": "ACREDITLINE",
          "source": "src/Data-OFX.html#AcctType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "ACREDITLINE",
          "package": "ofx",
          "partial": "ACREDITLINE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:ACREDITLINE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OFX",
          "name": "AMONEYMRKT",
          "package": "ofx",
          "signature": "AMONEYMRKT",
          "source": "src/Data-OFX.html#AcctType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "AMONEYMRKT",
          "package": "ofx",
          "partial": "AMONEYMRKT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:AMONEYMRKT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OFX",
          "name": "ASAVINGS",
          "package": "ofx",
          "signature": "ASAVINGS",
          "source": "src/Data-OFX.html#AcctType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "ASAVINGS",
          "package": "ofx",
          "partial": "ASAVINGS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:ASAVINGS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OFX",
          "name": "BankAcctTo",
          "package": "ofx",
          "signature": "BankAcctTo",
          "source": "src/Data-OFX.html#BankAcctTo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "BankAcctTo",
          "package": "ofx",
          "partial": "Bank Acct To",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:BankAcctTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OFX",
          "name": "CCAcctTo",
          "package": "ofx",
          "signature": "CCAcctTo",
          "source": "src/Data-OFX.html#CCAcctTo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "CCAcctTo",
          "package": "ofx",
          "partial": "CCAcct To",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:CCAcctTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OFX",
          "name": "Currency",
          "package": "ofx",
          "signature": "Currency CurrencyData",
          "source": "src/Data-OFX.html#Currency",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "Currency",
          "package": "ofx",
          "partial": "Currency",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:Currency"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OFX",
          "name": "CurrencyData",
          "package": "ofx",
          "signature": "CurrencyData",
          "source": "src/Data-OFX.html#CurrencyData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "CurrencyData",
          "package": "ofx",
          "partial": "Currency Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:CurrencyData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeletes the transaction referenced by the CORRECTFITID\n\u003c/p\u003e",
          "module": "Data.OFX",
          "name": "DELETE",
          "package": "ofx",
          "signature": "DELETE",
          "source": "src/Data-OFX.html#CorrectAction",
          "type": "function"
        },
        "index": {
          "description": "Deletes the transaction referenced by the CORRECTFITID",
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "DELETE",
          "package": "ofx",
          "partial": "DELETE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:DELETE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OFX",
          "name": "OFXFile",
          "package": "ofx",
          "signature": "OFXFile",
          "source": "src/Data-OFX.html#OFXFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "OFXFile",
          "package": "ofx",
          "partial": "OFXFile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:OFXFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OFX",
          "name": "OFXHeader",
          "package": "ofx",
          "signature": "OFXHeader HeaderTag HeaderValue",
          "source": "src/Data-OFX.html#OFXHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "OFXHeader",
          "package": "ofx",
          "partial": "OFXHeader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:OFXHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OFX",
          "name": "OrigCurrency",
          "package": "ofx",
          "signature": "OrigCurrency CurrencyData",
          "source": "src/Data-OFX.html#OrigCurrency",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "OrigCurrency",
          "package": "ofx",
          "partial": "Orig Currency",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:OrigCurrency"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OFX",
          "name": "Payee",
          "package": "ofx",
          "signature": "Payee",
          "source": "src/Data-OFX.html#Payee",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "Payee",
          "package": "ofx",
          "partial": "Payee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:Payee"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplaces the transaction referenced by the CORRECTFITID\n\u003c/p\u003e",
          "module": "Data.OFX",
          "name": "REPLACE",
          "package": "ofx",
          "signature": "REPLACE",
          "source": "src/Data-OFX.html#CorrectAction",
          "type": "function"
        },
        "index": {
          "description": "Replaces the transaction referenced by the CORRECTFITID",
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "REPLACE",
          "package": "ofx",
          "partial": "REPLACE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:REPLACE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eATM debit or credit (which it is depends on sign of amount)\n\u003c/p\u003e",
          "module": "Data.OFX",
          "name": "TATM",
          "package": "ofx",
          "signature": "TATM",
          "source": "src/Data-OFX.html#TrnType",
          "type": "function"
        },
        "index": {
          "description": "ATM debit or credit which it is depends on sign of amount",
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "TATM",
          "package": "ofx",
          "partial": "TATM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:TATM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCash withdrawal\n\u003c/p\u003e",
          "module": "Data.OFX",
          "name": "TCASH",
          "package": "ofx",
          "signature": "TCASH",
          "source": "src/Data-OFX.html#TrnType",
          "type": "function"
        },
        "index": {
          "description": "Cash withdrawal",
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "TCASH",
          "package": "ofx",
          "partial": "TCASH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:TCASH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OFX",
          "name": "TCHECK",
          "package": "ofx",
          "signature": "TCHECK",
          "source": "src/Data-OFX.html#TrnType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "TCHECK",
          "package": "ofx",
          "partial": "TCHECK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:TCHECK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OFX",
          "name": "TCREDIT",
          "package": "ofx",
          "signature": "TCREDIT",
          "source": "src/Data-OFX.html#TrnType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "TCREDIT",
          "package": "ofx",
          "partial": "TCREDIT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:TCREDIT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OFX",
          "name": "TDEBIT",
          "package": "ofx",
          "signature": "TDEBIT",
          "source": "src/Data-OFX.html#TrnType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "TDEBIT",
          "package": "ofx",
          "partial": "TDEBIT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:TDEBIT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeposit\n\u003c/p\u003e",
          "module": "Data.OFX",
          "name": "TDEP",
          "package": "ofx",
          "signature": "TDEP",
          "source": "src/Data-OFX.html#TrnType",
          "type": "function"
        },
        "index": {
          "description": "Deposit",
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "TDEP",
          "package": "ofx",
          "partial": "TDEP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:TDEP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerchant initiated debit\n\u003c/p\u003e",
          "module": "Data.OFX",
          "name": "TDIRECTDEBIT",
          "package": "ofx",
          "signature": "TDIRECTDEBIT",
          "source": "src/Data-OFX.html#TrnType",
          "type": "function"
        },
        "index": {
          "description": "Merchant initiated debit",
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "TDIRECTDEBIT",
          "package": "ofx",
          "partial": "TDIRECTDEBIT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:TDIRECTDEBIT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDirect deposit\n\u003c/p\u003e",
          "module": "Data.OFX",
          "name": "TDIRECTDEP",
          "package": "ofx",
          "signature": "TDIRECTDEP",
          "source": "src/Data-OFX.html#TrnType",
          "type": "function"
        },
        "index": {
          "description": "Direct deposit",
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "TDIRECTDEP",
          "package": "ofx",
          "partial": "TDIRECTDEP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:TDIRECTDEP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDividend\n\u003c/p\u003e",
          "module": "Data.OFX",
          "name": "TDIV",
          "package": "ofx",
          "signature": "TDIV",
          "source": "src/Data-OFX.html#TrnType",
          "type": "function"
        },
        "index": {
          "description": "Dividend",
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "TDIV",
          "package": "ofx",
          "partial": "TDIV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:TDIV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OFX",
          "name": "TFEE",
          "package": "ofx",
          "signature": "TFEE",
          "source": "src/Data-OFX.html#TrnType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "TFEE",
          "package": "ofx",
          "partial": "TFEE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:TFEE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterest earned or paid (which it is depends on sign of amount)\n\u003c/p\u003e",
          "module": "Data.OFX",
          "name": "TINT",
          "package": "ofx",
          "signature": "TINT",
          "source": "src/Data-OFX.html#TrnType",
          "type": "function"
        },
        "index": {
          "description": "Interest earned or paid which it is depends on sign of amount",
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "TINT",
          "package": "ofx",
          "partial": "TINT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:TINT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OFX",
          "name": "TOTHER",
          "package": "ofx",
          "signature": "TOTHER",
          "source": "src/Data-OFX.html#TrnType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "TOTHER",
          "package": "ofx",
          "partial": "TOTHER",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:TOTHER"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eElectronic payment\n\u003c/p\u003e",
          "module": "Data.OFX",
          "name": "TPAYMENT",
          "package": "ofx",
          "signature": "TPAYMENT",
          "source": "src/Data-OFX.html#TrnType",
          "type": "function"
        },
        "index": {
          "description": "Electronic payment",
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "TPAYMENT",
          "package": "ofx",
          "partial": "TPAYMENT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:TPAYMENT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePoint of sale debit or credit (which it is depends on sign of\n amount)\n\u003c/p\u003e",
          "module": "Data.OFX",
          "name": "TPOS",
          "package": "ofx",
          "signature": "TPOS",
          "source": "src/Data-OFX.html#TrnType",
          "type": "function"
        },
        "index": {
          "description": "Point of sale debit or credit which it is depends on sign of amount",
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "TPOS",
          "package": "ofx",
          "partial": "TPOS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:TPOS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepeating payment / standing order\n\u003c/p\u003e",
          "module": "Data.OFX",
          "name": "TREPEATPMT",
          "package": "ofx",
          "signature": "TREPEATPMT",
          "source": "src/Data-OFX.html#TrnType",
          "type": "function"
        },
        "index": {
          "description": "Repeating payment standing order",
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "TREPEATPMT",
          "package": "ofx",
          "partial": "TREPEATPMT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:TREPEATPMT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OFX",
          "name": "TSRVCHG",
          "package": "ofx",
          "signature": "TSRVCHG",
          "source": "src/Data-OFX.html#TrnType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "TSRVCHG",
          "package": "ofx",
          "partial": "TSRVCHG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:TSRVCHG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransfer\n\u003c/p\u003e",
          "module": "Data.OFX",
          "name": "TXFER",
          "package": "ofx",
          "signature": "TXFER",
          "source": "src/Data-OFX.html#TrnType",
          "type": "function"
        },
        "index": {
          "description": "Transfer",
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "TXFER",
          "package": "ofx",
          "partial": "TXFER",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:TXFER"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OFX",
          "name": "Tag",
          "package": "ofx",
          "signature": "Tag TagName (Either TagData [Tag])",
          "source": "src/Data-OFX.html#Tag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "Tag",
          "normalized": "Tag TagName(Either TagData[Tag])",
          "package": "ofx",
          "partial": "Tag",
          "signature": "Tag TagName(Either TagData[Tag])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:Tag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OFX",
          "name": "Transaction",
          "package": "ofx",
          "signature": "Transaction",
          "source": "src/Data-OFX.html#Transaction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "Transaction",
          "package": "ofx",
          "partial": "Transaction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:Transaction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets either the credit card or bank account number, if available.\n\u003c/p\u003e",
          "module": "Data.OFX",
          "name": "accountNumber",
          "package": "ofx",
          "signature": "OFXFile -\u003e Maybe TagData",
          "source": "src/Data-OFX.html#accountNumber",
          "type": "function"
        },
        "index": {
          "description": "Gets either the credit card or bank account number if available",
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "accountNumber",
          "normalized": "OFXFile-\u003eMaybe TagData",
          "package": "ofx",
          "partial": "Number",
          "signature": "OFXFile-\u003eMaybe TagData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:accountNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OFX",
          "name": "acctType",
          "package": "ofx",
          "signature": "String -\u003e Err AcctType",
          "source": "src/Data-OFX.html#acctType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "acctType",
          "normalized": "String-\u003eErr AcctType",
          "package": "ofx",
          "partial": "Type",
          "signature": "String-\u003eErr AcctType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:acctType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the bank account number, if available. The OFX spec does not\n require this tag to be present.\n\u003c/p\u003e",
          "module": "Data.OFX",
          "name": "bankAccountNumber",
          "package": "ofx",
          "signature": "OFXFile -\u003e Maybe TagData",
          "source": "src/Data-OFX.html#bankAccountNumber",
          "type": "function"
        },
        "index": {
          "description": "Gets the bank account number if available The OFX spec does not require this tag to be present",
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "bankAccountNumber",
          "normalized": "OFXFile-\u003eMaybe TagData",
          "package": "ofx",
          "partial": "Account Number",
          "signature": "OFXFile-\u003eMaybe TagData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:bankAccountNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OFX",
          "name": "bankAcctTo",
          "package": "ofx",
          "signature": "Tag -\u003e Maybe (Err BankAcctTo)",
          "source": "src/Data-OFX.html#bankAcctTo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "bankAcctTo",
          "normalized": "Tag-\u003eMaybe(Err BankAcctTo)",
          "package": "ofx",
          "partial": "Acct To",
          "signature": "Tag-\u003eMaybe(Err BankAcctTo)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:bankAcctTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccount number\n\u003c/p\u003e",
          "module": "Data.OFX",
          "name": "btACCTID",
          "package": "ofx",
          "signature": "String",
          "source": "src/Data-OFX.html#BankAcctTo",
          "type": "function"
        },
        "index": {
          "description": "Account number",
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "btACCTID",
          "package": "ofx",
          "partial": "ACCTID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:btACCTID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecksum for international banks\n\u003c/p\u003e",
          "module": "Data.OFX",
          "name": "btACCTKEY",
          "package": "ofx",
          "signature": "Maybe String",
          "source": "src/Data-OFX.html#BankAcctTo",
          "type": "function"
        },
        "index": {
          "description": "Checksum for international banks",
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "btACCTKEY",
          "package": "ofx",
          "partial": "ACCTKEY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:btACCTKEY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of account\n\u003c/p\u003e",
          "module": "Data.OFX",
          "name": "btACCTTYPE",
          "package": "ofx",
          "signature": "AcctType",
          "source": "src/Data-OFX.html#BankAcctTo",
          "type": "function"
        },
        "index": {
          "description": "Type of account",
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "btACCTTYPE",
          "package": "ofx",
          "partial": "ACCTTYPE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:btACCTTYPE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRouting and transit number\n\u003c/p\u003e",
          "module": "Data.OFX",
          "name": "btBANKID",
          "package": "ofx",
          "signature": "String",
          "source": "src/Data-OFX.html#BankAcctTo",
          "type": "function"
        },
        "index": {
          "description": "Routing and transit number",
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "btBANKID",
          "package": "ofx",
          "partial": "BANKID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:btBANKID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBank identifier for international banks\n\u003c/p\u003e",
          "module": "Data.OFX",
          "name": "btBRANCHID",
          "package": "ofx",
          "signature": "Maybe String",
          "source": "src/Data-OFX.html#BankAcctTo",
          "type": "function"
        },
        "index": {
          "description": "Bank identifier for international banks",
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "btBRANCHID",
          "package": "ofx",
          "partial": "BRANCHID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:btBRANCHID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OFX",
          "name": "ccAcctTo",
          "package": "ofx",
          "signature": "Tag -\u003e Maybe (Err CCAcctTo)",
          "source": "src/Data-OFX.html#ccAcctTo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "ccAcctTo",
          "normalized": "Tag-\u003eMaybe(Err CCAcctTo)",
          "package": "ofx",
          "partial": "Acct To",
          "signature": "Tag-\u003eMaybe(Err CCAcctTo)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:ccAcctTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRatio of CURDEF currency to CURSYM currency, in decimal form\n\u003c/p\u003e",
          "module": "Data.OFX",
          "name": "cdCURRATE",
          "package": "ofx",
          "signature": "String",
          "source": "src/Data-OFX.html#CurrencyData",
          "type": "function"
        },
        "index": {
          "description": "Ratio of CURDEF currency to CURSYM currency in decimal form",
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "cdCURRATE",
          "package": "ofx",
          "partial": "CURRATE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:cdCURRATE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eISO-4217 3-letter currency identifier\n\u003c/p\u003e",
          "module": "Data.OFX",
          "name": "cdCURSYM",
          "package": "ofx",
          "signature": "String",
          "source": "src/Data-OFX.html#CurrencyData",
          "type": "function"
        },
        "index": {
          "description": "ISO-4217 letter currency identifier",
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "cdCURSYM",
          "package": "ofx",
          "partial": "CURSYM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:cdCURSYM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a closing tag with the given name.\n\u003c/p\u003e",
          "module": "Data.OFX",
          "name": "closingTag",
          "package": "ofx",
          "signature": "TagName -\u003e Parser ()",
          "source": "src/Data-OFX.html#closingTag",
          "type": "function"
        },
        "index": {
          "description": "Parses closing tag with the given name",
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "closingTag",
          "normalized": "TagName-\u003eParser()",
          "package": "ofx",
          "partial": "Tag",
          "signature": "TagName-\u003eParser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:closingTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the credit card number, if available. The OFX spec does not\n require this tag to be present.\n\u003c/p\u003e",
          "module": "Data.OFX",
          "name": "creditCardNumber",
          "package": "ofx",
          "signature": "OFXFile -\u003e Maybe TagData",
          "source": "src/Data-OFX.html#creditCardNumber",
          "type": "function"
        },
        "index": {
          "description": "Gets the credit card number if available The OFX spec does not require this tag to be present",
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "creditCardNumber",
          "normalized": "OFXFile-\u003eMaybe TagData",
          "package": "ofx",
          "partial": "Card Number",
          "signature": "OFXFile-\u003eMaybe TagData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:creditCardNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccount number\n\u003c/p\u003e",
          "module": "Data.OFX",
          "name": "ctACCTID",
          "package": "ofx",
          "signature": "String",
          "source": "src/Data-OFX.html#CCAcctTo",
          "type": "function"
        },
        "index": {
          "description": "Account number",
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "ctACCTID",
          "package": "ofx",
          "partial": "ACCTID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:ctACCTID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecksum for international banks\n\u003c/p\u003e",
          "module": "Data.OFX",
          "name": "ctACCTKEY",
          "package": "ofx",
          "signature": "Maybe String",
          "source": "src/Data-OFX.html#CCAcctTo",
          "type": "function"
        },
        "index": {
          "description": "Checksum for international banks",
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "ctACCTKEY",
          "package": "ofx",
          "partial": "ACCTKEY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:ctACCTKEY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OFX",
          "name": "currency",
          "package": "ofx",
          "signature": "Tag -\u003e Maybe (Err Currency)",
          "source": "src/Data-OFX.html#currency",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "currency",
          "normalized": "Tag-\u003eMaybe(Err Currency)",
          "package": "ofx",
          "signature": "Tag-\u003eMaybe(Err Currency)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:currency"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses currency data.\n\u003c/p\u003e",
          "module": "Data.OFX",
          "name": "currencyData",
          "package": "ofx",
          "signature": "Tag-\u003e Err CurrencyData",
          "type": "function"
        },
        "index": {
          "description": "Parses currency data",
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "currencyData",
          "normalized": "Tag-\u003eErr CurrencyData",
          "package": "ofx",
          "partial": "Data",
          "signature": "Tag-\u003eErr CurrencyData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:currencyData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses an OFX date. Fails if the date is not valid or if there is\n no date to be parsed.\n\u003c/p\u003e",
          "module": "Data.OFX",
          "name": "date",
          "package": "ofx",
          "signature": "Parser ZonedTime",
          "source": "src/Data-OFX.html#date",
          "type": "function"
        },
        "index": {
          "description": "Parses an OFX date Fails if the date is not valid or if there is no date to be parsed",
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "date",
          "package": "ofx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:date"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a character, possibly with an escape sequence. The\n greater-than sign, less-than sign, and ampersand must be entered\n with escape sequences.\n\u003c/p\u003e\u003cp\u003eAccording to OFX spec section 2.3.2.1, ampersands, less-than signs,\n and greater-than signs must appear as entities.  However some banks\n deliver broken OFX files that do not use entities for ampersands\n (and possibly for less-than or greater-than signs too, although I\n have not yet observed such behavior.) There is now an error message\n that reflects this problem.  Client code can filter the OFX data\n for known offenders before passing it to this library.\n\u003c/p\u003e",
          "module": "Data.OFX",
          "name": "escChar",
          "package": "ofx",
          "signature": "Parser Char",
          "source": "src/Data-OFX.html#escChar",
          "type": "function"
        },
        "index": {
          "description": "Parses character possibly with an escape sequence The greater-than sign less-than sign and ampersand must be entered with escape sequences According to OFX spec section ampersands less-than signs and greater-than signs must appear as entities However some banks deliver broken OFX files that do not use entities for ampersands and possibly for less-than or greater-than signs too although have not yet observed such behavior There is now an error message that reflects this problem Client code can filter the OFX data for known offenders before passing it to this library",
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "escChar",
          "package": "ofx",
          "partial": "Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:escChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OFX",
          "name": "fHeader",
          "package": "ofx",
          "signature": "[OFXHeader]",
          "source": "src/Data-OFX.html#OFXFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "fHeader",
          "normalized": "[OFXHeader]",
          "package": "ofx",
          "partial": "Header",
          "signature": "[OFXHeader]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:fHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll the data will be contained in a root tag with the TagName\n \u003ccode\u003eOFX\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.OFX",
          "name": "fTag",
          "package": "ofx",
          "signature": "Tag",
          "source": "src/Data-OFX.html#OFXFile",
          "type": "function"
        },
        "index": {
          "description": "All the data will be contained in root tag with the TagName OFX",
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "fTag",
          "package": "ofx",
          "partial": "Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:fTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the name of the financial institution from the FI tag, if\n available. The OFX spec does not require this tag to be present.\n\u003c/p\u003e",
          "module": "Data.OFX",
          "name": "fiName",
          "package": "ofx",
          "signature": "OFXFile -\u003e Maybe TagData",
          "source": "src/Data-OFX.html#fiName",
          "type": "function"
        },
        "index": {
          "description": "Gets the name of the financial institution from the FI tag if available The OFX spec does not require this tag to be present",
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "fiName",
          "normalized": "OFXFile-\u003eMaybe TagData",
          "package": "ofx",
          "partial": "Name",
          "signature": "OFXFile-\u003eMaybe TagData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:fiName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinds child tags with the given name. When a tag is found, that\n tag is not searched for further children with the same name.\n\u003c/p\u003e",
          "module": "Data.OFX",
          "name": "find",
          "package": "ofx",
          "signature": "TagName -\u003e Tag -\u003e [Tag]",
          "source": "src/Data-OFX.html#find",
          "type": "function"
        },
        "index": {
          "description": "Finds child tags with the given name When tag is found that tag is not searched for further children with the same name",
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "find",
          "normalized": "TagName-\u003eTag-\u003e[Tag]",
          "package": "ofx",
          "signature": "TagName-\u003eTag-\u003e[Tag]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:find"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinds the first tag (either this tag or any children) that has\n the given name and that is a data tag (not an aggregate tag.) If no\n data tag with the given name is found, returns Nothing.\n\u003c/p\u003e",
          "module": "Data.OFX",
          "name": "findData",
          "package": "ofx",
          "signature": "TagName -\u003e Tag -\u003e Maybe TagData",
          "source": "src/Data-OFX.html#findData",
          "type": "function"
        },
        "index": {
          "description": "Finds the first tag either this tag or any children that has the given name and that is data tag not an aggregate tag If no data tag with the given name is found returns Nothing",
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "findData",
          "normalized": "TagName-\u003eTag-\u003eMaybe TagData",
          "package": "ofx",
          "partial": "Data",
          "signature": "TagName-\u003eTag-\u003eMaybe TagData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:findData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescends through a tree of tags to find a tag at a specific\n location in the tree. Fails if any part of the search fails. For\n example, to find the financial institution ORG tag, where \u003ccode\u003et\u003c/code\u003e is\n the root \u003ccode\u003eOFX\u003c/code\u003e tag:\n\u003c/p\u003e\u003cpre\u003e findPath [\"SIGNONMSGSRSV1\", \"SONRS\", \"FI\", \"ORG\"] t\n\u003c/pre\u003e",
          "module": "Data.OFX",
          "name": "findPath",
          "package": "ofx",
          "signature": "[TagName] -\u003e Tag -\u003e Maybe Tag",
          "source": "src/Data-OFX.html#findPath",
          "type": "function"
        },
        "index": {
          "description": "Descends through tree of tags to find tag at specific location in the tree Fails if any part of the search fails For example to find the financial institution ORG tag where is the root OFX tag findPath SIGNONMSGSRSV1 SONRS FI ORG",
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "findPath",
          "normalized": "[TagName]-\u003eTag-\u003eMaybe Tag",
          "package": "ofx",
          "partial": "Path",
          "signature": "[TagName]-\u003eTag-\u003eMaybe Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:findPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OFX",
          "name": "header",
          "package": "ofx",
          "signature": "Parser OFXHeader",
          "source": "src/Data-OFX.html#header",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "header",
          "package": "ofx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:header"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OFX",
          "name": "label",
          "package": "ofx",
          "signature": "String -\u003e Doc -\u003e Doc",
          "source": "src/Data-OFX.html#label",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "label",
          "normalized": "String-\u003eDoc-\u003eDoc",
          "package": "ofx",
          "signature": "String-\u003eDoc-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:label"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses either a UNIX or an MS-DOS newline. According to 1.2.2,\n OFX does not contain any white space between tags. However, since I\n have seen OFX files that do have whitespace between tags, the\n parser makes allowance for this.\n\u003c/p\u003e",
          "module": "Data.OFX",
          "name": "newline",
          "package": "ofx",
          "signature": "Parser ()",
          "source": "src/Data-OFX.html#newline",
          "type": "function"
        },
        "index": {
          "description": "Parses either UNIX or an MS-DOS newline According to OFX does not contain any white space between tags However since have seen OFX files that do have whitespace between tags the parser makes allowance for this",
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "newline",
          "normalized": "Parser()",
          "package": "ofx",
          "signature": "Parser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:newline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses an entire OFX file, including headers.\n\u003c/p\u003e",
          "module": "Data.OFX",
          "name": "ofxFile",
          "package": "ofx",
          "signature": "Parser OFXFile",
          "source": "src/Data-OFX.html#ofxFile",
          "type": "function"
        },
        "index": {
          "description": "Parses an entire OFX file including headers",
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "ofxFile",
          "package": "ofx",
          "partial": "File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:ofxFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses any opening tag. Returns the name of the tag.\n\u003c/p\u003e",
          "module": "Data.OFX",
          "name": "openingTag",
          "package": "ofx",
          "signature": "Parser TagName",
          "source": "src/Data-OFX.html#openingTag",
          "type": "function"
        },
        "index": {
          "description": "Parses any opening tag Returns the name of the tag",
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "openingTag",
          "package": "ofx",
          "partial": "Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:openingTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OFX",
          "name": "origCurrency",
          "package": "ofx",
          "signature": "Tag -\u003e Maybe (Err OrigCurrency)",
          "source": "src/Data-OFX.html#origCurrency",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "origCurrency",
          "normalized": "Tag-\u003eMaybe(Err OrigCurrency)",
          "package": "ofx",
          "partial": "Currency",
          "signature": "Tag-\u003eMaybe(Err OrigCurrency)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:origCurrency"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OFX",
          "name": "pEither",
          "package": "ofx",
          "signature": "(a -\u003e Doc) -\u003e (b -\u003e Doc) -\u003e Either a b -\u003e Doc",
          "source": "src/Data-OFX.html#pEither",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "pEither",
          "normalized": "(a-\u003eDoc)-\u003e(b-\u003eDoc)-\u003eEither a b-\u003eDoc",
          "package": "ofx",
          "partial": "Either",
          "signature": "(a-\u003eDoc)-\u003e(b-\u003eDoc)-\u003eEither a b-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:pEither"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OFX",
          "name": "pExceptional",
          "package": "ofx",
          "signature": "(e -\u003e Doc) -\u003e (a -\u003e Doc) -\u003e Either e a -\u003e Doc",
          "source": "src/Data-OFX.html#pExceptional",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "pExceptional",
          "normalized": "(a-\u003eDoc)-\u003e(b-\u003eDoc)-\u003eEither a b-\u003eDoc",
          "package": "ofx",
          "partial": "Exceptional",
          "signature": "(e-\u003eDoc)-\u003e(a-\u003eDoc)-\u003eEither e a-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:pExceptional"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OFX",
          "name": "pFile",
          "package": "ofx",
          "signature": "OFXFile -\u003e Doc",
          "source": "src/Data-OFX.html#pFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "pFile",
          "normalized": "OFXFile-\u003eDoc",
          "package": "ofx",
          "partial": "File",
          "signature": "OFXFile-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:pFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OFX",
          "name": "pHeader",
          "package": "ofx",
          "signature": "OFXHeader -\u003e Doc",
          "source": "src/Data-OFX.html#pHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "pHeader",
          "normalized": "OFXHeader-\u003eDoc",
          "package": "ofx",
          "partial": "Header",
          "signature": "OFXHeader-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:pHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OFX",
          "name": "pList",
          "package": "ofx",
          "signature": "[Doc] -\u003e Doc",
          "source": "src/Data-OFX.html#pList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "pList",
          "normalized": "[Doc]-\u003eDoc",
          "package": "ofx",
          "partial": "List",
          "signature": "[Doc]-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:pList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OFX",
          "name": "pMaybe",
          "package": "ofx",
          "signature": "(a -\u003e Doc) -\u003e Maybe a -\u003e Doc",
          "source": "src/Data-OFX.html#pMaybe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "pMaybe",
          "normalized": "(a-\u003eDoc)-\u003eMaybe a-\u003eDoc",
          "package": "ofx",
          "partial": "Maybe",
          "signature": "(a-\u003eDoc)-\u003eMaybe a-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:pMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OFX",
          "name": "pPayee",
          "package": "ofx",
          "signature": "Payee -\u003e Doc",
          "source": "src/Data-OFX.html#pPayee",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "pPayee",
          "normalized": "Payee-\u003eDoc",
          "package": "ofx",
          "partial": "Payee",
          "signature": "Payee-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:pPayee"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OFX",
          "name": "pTag",
          "package": "ofx",
          "signature": "Tag -\u003e Doc",
          "source": "src/Data-OFX.html#pTag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "pTag",
          "normalized": "Tag-\u003eDoc",
          "package": "ofx",
          "partial": "Tag",
          "signature": "Tag-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:pTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OFX",
          "name": "pTransaction",
          "package": "ofx",
          "signature": "Transaction -\u003e Doc",
          "source": "src/Data-OFX.html#pTransaction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "pTransaction",
          "normalized": "Transaction-\u003eDoc",
          "package": "ofx",
          "partial": "Transaction",
          "signature": "Transaction-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:pTransaction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGoes to a certain path in the tag hierarchy and pulls the\n requested data, if the tag is present and it is a data tag.  For\n example, to get the name of the financial institution:\n\u003c/p\u003e\u003cpre\u003e pathData [\"SIGNONMSGSRSV1\", \"SONRS\", \"FI\", \"ORG\"] f\n\u003c/pre\u003e",
          "module": "Data.OFX",
          "name": "pathData",
          "package": "ofx",
          "signature": "[TagName] -\u003e OFXFile -\u003e Maybe TagData",
          "source": "src/Data-OFX.html#pathData",
          "type": "function"
        },
        "index": {
          "description": "Goes to certain path in the tag hierarchy and pulls the requested data if the tag is present and it is data tag For example to get the name of the financial institution pathData SIGNONMSGSRSV1 SONRS FI ORG",
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "pathData",
          "normalized": "[TagName]-\u003eOFXFile-\u003eMaybe TagData",
          "package": "ofx",
          "partial": "Data",
          "signature": "[TagName]-\u003eOFXFile-\u003eMaybe TagData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:pathData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a Payee record from its parent tag.\n\u003c/p\u003e",
          "module": "Data.OFX",
          "name": "payee",
          "package": "ofx",
          "signature": "Tag-\u003e Maybe (Err Payee)",
          "type": "function"
        },
        "index": {
          "description": "Parses Payee record from its parent tag",
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "payee",
          "normalized": "Tag-\u003eMaybe(Err Payee)",
          "package": "ofx",
          "signature": "Tag-\u003eMaybe(Err Payee)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:payee"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OFX",
          "name": "peADDR1",
          "package": "ofx",
          "signature": "String",
          "source": "src/Data-OFX.html#Payee",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "peADDR1",
          "package": "ofx",
          "partial": "ADDR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:peADDR1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OFX",
          "name": "peADDR2",
          "package": "ofx",
          "signature": "Maybe String",
          "source": "src/Data-OFX.html#Payee",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "peADDR2",
          "package": "ofx",
          "partial": "ADDR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:peADDR2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OFX",
          "name": "peADDR3",
          "package": "ofx",
          "signature": "Maybe String",
          "source": "src/Data-OFX.html#Payee",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "peADDR3",
          "package": "ofx",
          "partial": "ADDR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:peADDR3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OFX",
          "name": "peCITY",
          "package": "ofx",
          "signature": "String",
          "source": "src/Data-OFX.html#Payee",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "peCITY",
          "package": "ofx",
          "partial": "CITY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:peCITY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OFX",
          "name": "peCOUNTRY",
          "package": "ofx",
          "signature": "Maybe String",
          "source": "src/Data-OFX.html#Payee",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "peCOUNTRY",
          "package": "ofx",
          "partial": "COUNTRY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:peCOUNTRY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OFX",
          "name": "peNAME",
          "package": "ofx",
          "signature": "String",
          "source": "src/Data-OFX.html#Payee",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "peNAME",
          "package": "ofx",
          "partial": "NAME",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:peNAME"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OFX",
          "name": "pePHONE",
          "package": "ofx",
          "signature": "String",
          "source": "src/Data-OFX.html#Payee",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "pePHONE",
          "package": "ofx",
          "partial": "PHONE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:pePHONE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OFX",
          "name": "pePOSTALCODE",
          "package": "ofx",
          "signature": "String",
          "source": "src/Data-OFX.html#Payee",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "pePOSTALCODE",
          "package": "ofx",
          "partial": "POSTALCODE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:pePOSTALCODE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OFX",
          "name": "peSTATE",
          "package": "ofx",
          "signature": "String",
          "source": "src/Data-OFX.html#Payee",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "peSTATE",
          "package": "ofx",
          "partial": "STATE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:peSTATE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses any tag. The tag itself must be followed by at least one\n character: either the next tag if this is an aggregate tag, or the\n data if this is a data tag. OFX does not allow empty tags.\n\u003c/p\u003e\u003cp\u003eThe OFX spec seems to say that OFX files do not include trailing\n newlines after tags or data, but I have seen these newlines in QFX\n files, so this parses optional trailing newlines and spaces.\n\u003c/p\u003e",
          "module": "Data.OFX",
          "name": "tag",
          "package": "ofx",
          "signature": "Parser Tag",
          "source": "src/Data-OFX.html#tag",
          "type": "function"
        },
        "index": {
          "description": "Parses any tag The tag itself must be followed by at least one character either the next tag if this is an aggregate tag or the data if this is data tag OFX does not allow empty tags The OFX spec seems to say that OFX files do not include trailing newlines after tags or data but have seen these newlines in QFX files so this parses optional trailing newlines and spaces",
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "tag",
          "package": "ofx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:tag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the data from a tag, if it is a tag with data.\n\u003c/p\u003e",
          "module": "Data.OFX",
          "name": "tagData",
          "package": "ofx",
          "signature": "Tag -\u003e Maybe TagData",
          "source": "src/Data-OFX.html#tagData",
          "type": "function"
        },
        "index": {
          "description": "Gets the data from tag if it is tag with data",
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "tagData",
          "normalized": "Tag-\u003eMaybe TagData",
          "package": "ofx",
          "partial": "Data",
          "signature": "Tag-\u003eMaybe TagData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:tagData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses an OFX time. Fails if the time is not valid or if there is\n no time to parse. Fails if there is no time to parse; however, if\n there is a time but no zone, returns the time and UTC for the zone.\n\u003c/p\u003e",
          "module": "Data.OFX",
          "name": "time",
          "package": "ofx",
          "signature": "Parser (TimeOfDay, TimeZone)",
          "source": "src/Data-OFX.html#time",
          "type": "function"
        },
        "index": {
          "description": "Parses an OFX time Fails if the time is not valid or if there is no time to parse Fails if there is no time to parse however if there is time but no zone returns the time and UTC for the zone",
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "time",
          "normalized": "Parser(TimeOfDay,TimeZone)",
          "package": "ofx",
          "signature": "Parser(TimeOfDay,TimeZone)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets a single Transaction from a tag. The tag should be the one\n named STMTTRN. Fails with an error message if any required field\n was not present.\n\u003c/p\u003e",
          "module": "Data.OFX",
          "name": "transaction",
          "package": "ofx",
          "signature": "Tag -\u003e Err Transaction",
          "source": "src/Data-OFX.html#transaction",
          "type": "function"
        },
        "index": {
          "description": "Gets single Transaction from tag The tag should be the one named STMTTRN Fails with an error message if any required field was not present",
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "transaction",
          "normalized": "Tag-\u003eErr Transaction",
          "package": "ofx",
          "signature": "Tag-\u003eErr Transaction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:transaction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePulls all Transactions from a file. Might fail if the OFX file\n does not conform to the specification (or if there are bugs in this\n library.) In case of the former, you can manually parse the\n transaction information yourself using functions like\n \u003ccode\u003e\u003ca\u003epathData\u003c/a\u003e\u003c/code\u003e. In case of the latter, please send bugreports :-)\n\u003c/p\u003e",
          "module": "Data.OFX",
          "name": "transactions",
          "package": "ofx",
          "signature": "OFXFile -\u003e Err [Transaction]",
          "source": "src/Data-OFX.html#transactions",
          "type": "function"
        },
        "index": {
          "description": "Pulls all Transactions from file Might fail if the OFX file does not conform to the specification or if there are bugs in this library In case of the former you can manually parse the transaction information yourself using functions like pathData In case of the latter please send bugreports",
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "transactions",
          "normalized": "OFXFile-\u003eErr[Transaction]",
          "package": "ofx",
          "signature": "OFXFile-\u003eErr[Transaction]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:transactions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OFX",
          "name": "trnType",
          "package": "ofx",
          "signature": "TagData -\u003e Maybe TrnType",
          "source": "src/Data-OFX.html#trnType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "trnType",
          "normalized": "TagData-\u003eMaybe TrnType",
          "package": "ofx",
          "partial": "Type",
          "signature": "TagData-\u003eMaybe TrnType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:trnType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInformation on a transfer. If this transaction wa sa\n transfer, this may contain information about the account being\n transferred to.\n\u003c/p\u003e",
          "module": "Data.OFX",
          "name": "txAccountTo",
          "package": "ofx",
          "signature": "Maybe (Either BankAcctTo CCAcctTo)",
          "source": "src/Data-OFX.html#Transaction",
          "type": "function"
        },
        "index": {
          "description": "Information on transfer If this transaction wa sa transfer this may contain information about the account being transferred to",
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "txAccountTo",
          "package": "ofx",
          "partial": "Account To",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:txAccountTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck or other reference number\n\u003c/p\u003e",
          "module": "Data.OFX",
          "name": "txCHECKNUM",
          "package": "ofx",
          "signature": "Maybe String",
          "source": "src/Data-OFX.html#Transaction",
          "type": "function"
        },
        "index": {
          "description": "Check or other reference number",
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "txCHECKNUM",
          "package": "ofx",
          "partial": "CHECKNUM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:txCHECKNUM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eCorrectAction\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003etxCORRECTFITID\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.OFX",
          "name": "txCORRECTACTION",
          "package": "ofx",
          "signature": "Maybe CorrectAction",
          "source": "src/Data-OFX.html#Transaction",
          "type": "function"
        },
        "index": {
          "description": "See CorrectAction and txCORRECTFITID",
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "txCORRECTACTION",
          "package": "ofx",
          "partial": "CORRECTACTION",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:txCORRECTACTION"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf present, this indicates the FITID of a previously sent\n transaction that is corrected by this record. This transaction\n replaces or deletes the transaction that it corrects, based on\n the value of CORRECTACTION below.\n\u003c/p\u003e",
          "module": "Data.OFX",
          "name": "txCORRECTFITID",
          "package": "ofx",
          "signature": "Maybe String",
          "source": "src/Data-OFX.html#Transaction",
          "type": "function"
        },
        "index": {
          "description": "If present this indicates the FITID of previously sent transaction that is corrected by this record This transaction replaces or deletes the transaction that it corrects based on the value of CORRECTACTION below",
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "txCORRECTFITID",
          "package": "ofx",
          "partial": "CORRECTFITID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:txCORRECTFITID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCurrency option. OFX spec says to choose either CURRENCY or\n ORIGCURRENCY.\n\u003c/p\u003e",
          "module": "Data.OFX",
          "name": "txCurrency",
          "package": "ofx",
          "signature": "Maybe (Either Currency OrigCurrency)",
          "source": "src/Data-OFX.html#Transaction",
          "type": "function"
        },
        "index": {
          "description": "Currency option OFX spec says to choose either CURRENCY or ORIGCURRENCY",
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "txCurrency",
          "package": "ofx",
          "partial": "Currency",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:txCurrency"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDate funds are available\n\u003c/p\u003e",
          "module": "Data.OFX",
          "name": "txDTAVAIL",
          "package": "ofx",
          "signature": "Maybe ZonedTime",
          "source": "src/Data-OFX.html#Transaction",
          "type": "function"
        },
        "index": {
          "description": "Date funds are available",
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "txDTAVAIL",
          "package": "ofx",
          "partial": "DTAVAIL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:txDTAVAIL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDate transaction was posted to account\n\u003c/p\u003e",
          "module": "Data.OFX",
          "name": "txDTPOSTED",
          "package": "ofx",
          "signature": "ZonedTime",
          "source": "src/Data-OFX.html#Transaction",
          "type": "function"
        },
        "index": {
          "description": "Date transaction was posted to account",
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "txDTPOSTED",
          "package": "ofx",
          "partial": "DTPOSTED",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:txDTPOSTED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDate user initiated transaction, if known\n\u003c/p\u003e",
          "module": "Data.OFX",
          "name": "txDTUSER",
          "package": "ofx",
          "signature": "Maybe ZonedTime",
          "source": "src/Data-OFX.html#Transaction",
          "type": "function"
        },
        "index": {
          "description": "Date user initiated transaction if known",
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "txDTUSER",
          "package": "ofx",
          "partial": "DTUSER",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:txDTUSER"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransaction ID issued by financial institution. Used to\n detect duplicate downloads.\n\u003c/p\u003e",
          "module": "Data.OFX",
          "name": "txFITID",
          "package": "ofx",
          "signature": "String",
          "source": "src/Data-OFX.html#Transaction",
          "type": "function"
        },
        "index": {
          "description": "Transaction ID issued by financial institution Used to detect duplicate downloads",
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "txFITID",
          "package": "ofx",
          "partial": "FITID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:txFITID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtra information not in NAME\n\u003c/p\u003e",
          "module": "Data.OFX",
          "name": "txMEMO",
          "package": "ofx",
          "signature": "Maybe String",
          "source": "src/Data-OFX.html#Transaction",
          "type": "function"
        },
        "index": {
          "description": "Extra information not in NAME",
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "txMEMO",
          "package": "ofx",
          "partial": "MEMO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:txMEMO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePayee identifier if available\n\u003c/p\u003e",
          "module": "Data.OFX",
          "name": "txPAYEEID",
          "package": "ofx",
          "signature": "Maybe String",
          "source": "src/Data-OFX.html#Transaction",
          "type": "function"
        },
        "index": {
          "description": "Payee identifier if available",
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "txPAYEEID",
          "package": "ofx",
          "partial": "PAYEEID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:txPAYEEID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInformation on the payee. The OFX spec seems to be saying\n that every transaction must have either NAME, wich is \"name of\n payee or description of transaction\", or the Payee\n aggregate. The former is indicated with a Left, the latter with\n a Right.\n\u003c/p\u003e",
          "module": "Data.OFX",
          "name": "txPayeeInfo",
          "package": "ofx",
          "signature": "Maybe (Either String Payee)",
          "source": "src/Data-OFX.html#Transaction",
          "type": "function"
        },
        "index": {
          "description": "Information on the payee The OFX spec seems to be saying that every transaction must have either NAME wich is name of payee or description of transaction or the Payee aggregate The former is indicated with Left the latter with Right",
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "txPayeeInfo",
          "package": "ofx",
          "partial": "Payee Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:txPayeeInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReference number that uniquely identifies the\n transaction. Can be used in addition to or instead of a\n CHECKNUM.\n\u003c/p\u003e",
          "module": "Data.OFX",
          "name": "txREFNUM",
          "package": "ofx",
          "signature": "Maybe String",
          "source": "src/Data-OFX.html#Transaction",
          "type": "function"
        },
        "index": {
          "description": "Reference number that uniquely identifies the transaction Can be used in addition to or instead of CHECKNUM",
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "txREFNUM",
          "package": "ofx",
          "partial": "REFNUM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:txREFNUM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStandard Industrial Code\n\u003c/p\u003e",
          "module": "Data.OFX",
          "name": "txSIC",
          "package": "ofx",
          "signature": "Maybe String",
          "source": "src/Data-OFX.html#Transaction",
          "type": "function"
        },
        "index": {
          "description": "Standard Industrial Code",
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "txSIC",
          "package": "ofx",
          "partial": "SIC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:txSIC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eServer assigned transaction ID; used for transactions\n initiated by client, such as payment or funds transfer\n\u003c/p\u003e",
          "module": "Data.OFX",
          "name": "txSRVRTID",
          "package": "ofx",
          "signature": "Maybe String",
          "source": "src/Data-OFX.html#Transaction",
          "type": "function"
        },
        "index": {
          "description": "Server assigned transaction ID used for transactions initiated by client such as payment or funds transfer",
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "txSRVRTID",
          "package": "ofx",
          "partial": "SRVRTID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:txSRVRTID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAmount of transaction. This is left as the string that was\n originally in the download. That means the transaction may\n include a plus or minus sign (no sign is the same as a plus\n sign.) According to section 3.2.9.2, amounts are always signed\n from the perspective of the customer.\n\u003c/p\u003e\u003cp\u003eTypically negative amounts:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Investment buy amount, investment sell quantity\n\u003c/li\u003e\u003cli\u003e Bank statement debit amounts, checks, fees\n\u003c/li\u003e\u003cli\u003e Credit card purchases\n\u003c/li\u003e\u003cli\u003e Margin balance (unless the institution owes the client money)\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eTypically positive amounts:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Investment sell amount, investment buy quantity\n\u003c/li\u003e\u003cli\u003e Bank statement credits\n\u003c/li\u003e\u003cli\u003e Credit card payments\n\u003c/li\u003e\u003cli\u003e Ledger balance (unless the account is overdrawn)\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eFormats for amounts are described in 3.2.9.1. If there is no\n decimal point, there is an implied decimal point at the end of\n the value. Trailing and leading spaces \"should\" be\n stripped. Positive or minus is indicated with a leading sign; a\n plus sign is assumed if there is no sign.\n\u003c/p\u003e\u003cp\u003eAn amount has a maximum of 32 alphanumeric characters,\n including digits and punctuation.\n\u003c/p\u003e\u003cp\u003eThe radix point is indicated with either a period or a\n comma. Amounts \"should\" not include any digit grouping\n characters.\n\u003c/p\u003e",
          "module": "Data.OFX",
          "name": "txTRNAMT",
          "package": "ofx",
          "signature": "String",
          "source": "src/Data-OFX.html#Transaction",
          "type": "function"
        },
        "index": {
          "description": "Amount of transaction This is left as the string that was originally in the download That means the transaction may include plus or minus sign no sign is the same as plus sign According to section amounts are always signed from the perspective of the customer Typically negative amounts Investment buy amount investment sell quantity Bank statement debit amounts checks fees Credit card purchases Margin balance unless the institution owes the client money Typically positive amounts Investment sell amount investment buy quantity Bank statement credits Credit card payments Ledger balance unless the account is overdrawn Formats for amounts are described in If there is no decimal point there is an implied decimal point at the end of the value Trailing and leading spaces should be stripped Positive or minus is indicated with leading sign plus sign is assumed if there is no sign An amount has maximum of alphanumeric characters including digits and punctuation The radix point is indicated with either period or comma Amounts should not include any digit grouping characters",
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "txTRNAMT",
          "package": "ofx",
          "partial": "TRNAMT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:txTRNAMT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransaction type\n\u003c/p\u003e",
          "module": "Data.OFX",
          "name": "txTRNTYPE",
          "package": "ofx",
          "signature": "TrnType",
          "source": "src/Data-OFX.html#Transaction",
          "type": "function"
        },
        "index": {
          "description": "Transaction type",
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "txTRNTYPE",
          "package": "ofx",
          "partial": "TRNTYPE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:txTRNTYPE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a time zone offset. Fails if there is no time zone offset\n to parse.\n\u003c/p\u003e",
          "module": "Data.OFX",
          "name": "tzOffset",
          "package": "ofx",
          "signature": "Parser TimeZone",
          "source": "src/Data-OFX.html#tzOffset",
          "type": "function"
        },
        "index": {
          "description": "Parses time zone offset Fails if there is no time zone offset to parse",
          "hierarchy": "Data OFX",
          "module": "Data.OFX",
          "name": "tzOffset",
          "package": "ofx",
          "partial": "Offset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ofx/docs/Data-OFX.html#v:tzOffset"
      }
    }
  ]
]