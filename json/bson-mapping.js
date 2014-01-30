[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bson-mapping/docs/Data-Bson-Mapping.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module aims to make mapping between algebraic data types and bson\ndocuments easy.\n\u003c/p\u003e\u003cp\u003eYou can also generate documents with \u003ccode\u003e\u003ca\u003eselectFields\u003c/a\u003e\u003c/code\u003e, which takes a\nlist of functions names that of type a -\u003e b and returns a function\nof type a -\u003e Document.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e import Data.Bson.Mapping\n import Data.Time.Clock\n import Data.Data (Typeable)\n\n data Post = Post { time :: UTCTime\n                  , author :: String\n                  , content :: String \n                  , votes :: Int\n                  }\n           deriving (Show, Read, Eq, Ord, Typeable)\n $(deriveBson ''Post)\n\n main :: IO ()\n main = do\n   now \u003c- getCurrentTime\n   let post = Post now \"francesco\" \"lorem ipsum\" 5\n   (fromBson (toBson post) :: IO Post) \u003e\u003e= print\n   print $ toBson post\n   print $ $(selectFields ['time, 'content]) post\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Data.Bson.Mapping",
        "fct-package": "bson-mapping",
        "fct-signature": "module",
        "fct-source": "src/Data-Bson-Mapping.html",
        "fct-type": "module",
        "title": "Mapping"
      },
      "index": {
        "description": "This module aims to make mapping between algebraic data types and bson documents easy You can also generate documents with selectFields which takes list of functions names that of type and returns function of type Document Example import Data.Bson.Mapping import Data.Time.Clock import Data.Data Typeable data Post Post time UTCTime author String content String votes Int deriving Show Read Eq Ord Typeable deriveBson Post main IO main do now getCurrentTime let post Post now francesco lorem ipsum fromBson toBson post IO Post print print toBson post print selectFields time content post",
        "hierarchy": "Data Bson Mapping",
        "module": "Data.Bson.Mapping",
        "name": "Mapping",
        "normalized": "",
        "package": "bson-mapping",
        "partial": "Mapping",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bson-mapping/docs/Data-Bson-Mapping.html#t:Bson",
      "description": {
        "fct-module": "Data.Bson.Mapping",
        "fct-package": "bson-mapping",
        "fct-signature": "class",
        "fct-source": "src/Data-Bson-Mapping.html#Bson",
        "fct-type": "class",
        "title": "Bson"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Bson Mapping",
        "module": "Data.Bson.Mapping",
        "name": "Bson",
        "normalized": "",
        "package": "bson-mapping",
        "partial": "Bson",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bson-mapping/docs/Data-Bson-Mapping.html#v:deriveBson",
      "description": {
        "fct-descr": "\u003cp\u003eDerive \u003ccode\u003e\u003ca\u003eBson\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eVal\u003c/a\u003e\u003c/code\u003e declarations for a data type.\n\u003c/p\u003e",
        "fct-module": "Data.Bson.Mapping",
        "fct-package": "bson-mapping",
        "fct-signature": "Name -\u003e Q [Dec]",
        "fct-source": "src/Data-Bson-Mapping.html#deriveBson",
        "fct-type": "function",
        "title": "deriveBson"
      },
      "index": {
        "description": "Derive Bson and Val declarations for data type",
        "hierarchy": "Data Bson Mapping",
        "module": "Data.Bson.Mapping",
        "name": "deriveBson",
        "normalized": "Name-\u003eQ[Dec]",
        "package": "bson-mapping",
        "partial": "Bson",
        "signature": "Name-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bson-mapping/docs/Data-Bson-Mapping.html#v:fromBson",
      "description": {
        "fct-module": "Data.Bson.Mapping",
        "fct-package": "bson-mapping",
        "fct-signature": "Document -\u003e m a",
        "fct-source": "src/Data-Bson-Mapping.html#fromBson",
        "fct-type": "method",
        "title": "fromBson"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Bson Mapping",
        "module": "Data.Bson.Mapping",
        "name": "fromBson",
        "normalized": "Document-\u003ea b",
        "package": "bson-mapping",
        "partial": "Bson",
        "signature": "Document-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bson-mapping/docs/Data-Bson-Mapping.html#v:getConsDoc",
      "description": {
        "fct-descr": "\u003cp\u003eGet a document that identifies the data type - \u003ccode\u003egetConsDoc ''Post\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis is useful to select all documents mapped to a certain data type.\n\u003c/p\u003e",
        "fct-module": "Data.Bson.Mapping",
        "fct-package": "bson-mapping",
        "fct-signature": "Name -\u003e Q Exp",
        "fct-source": "src/Data-Bson-Mapping.html#getConsDoc",
        "fct-type": "function",
        "title": "getConsDoc"
      },
      "index": {
        "description": "Get document that identifies the data type getConsDoc Post This is useful to select all documents mapped to certain data type",
        "hierarchy": "Data Bson Mapping",
        "module": "Data.Bson.Mapping",
        "name": "getConsDoc",
        "normalized": "Name-\u003eQ Exp",
        "package": "bson-mapping",
        "partial": "Cons Doc",
        "signature": "Name-\u003eQ Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bson-mapping/docs/Data-Bson-Mapping.html#v:getField",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a function that gets a datatype and a value, and generates a \u003ccode\u003e\u003ca\u003eDocument\u003c/a\u003e\u003c/code\u003e consisting of one field - the label provided - and the value of that datatype.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e$(getField 'time) post\u003c/code\u003e will generate \u003ccode\u003e[\"time\" =: time post]\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Bson.Mapping",
        "fct-package": "bson-mapping",
        "fct-signature": "Name -\u003e Q Exp",
        "fct-source": "src/Data-Bson-Mapping.html#getField",
        "fct-type": "function",
        "title": "getField"
      },
      "index": {
        "description": "Returns function that gets datatype and value and generates Document consisting of one field the label provided and the value of that datatype getField time post will generate time time post",
        "hierarchy": "Data Bson Mapping",
        "module": "Data.Bson.Mapping",
        "name": "getField",
        "normalized": "Name-\u003eQ Exp",
        "package": "bson-mapping",
        "partial": "Field",
        "signature": "Name-\u003eQ Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bson-mapping/docs/Data-Bson-Mapping.html#v:getLabel",
      "description": {
        "fct-module": "Data.Bson.Mapping",
        "fct-package": "bson-mapping",
        "fct-signature": "Name -\u003e Q Exp",
        "fct-source": "src/Data-Bson-Mapping.html#getLabel",
        "fct-type": "function",
        "title": "getLabel"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Bson Mapping",
        "module": "Data.Bson.Mapping",
        "name": "getLabel",
        "normalized": "Name-\u003eQ Exp",
        "package": "bson-mapping",
        "partial": "Label",
        "signature": "Name-\u003eQ Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bson-mapping/docs/Data-Bson-Mapping.html#v:selectFields",
      "description": {
        "fct-descr": "\u003cp\u003eSelect only certain fields in a document, see the code sample at the\ntop.\n\u003c/p\u003e\u003cp\u003ePlease note that there is no checking for the names to be actual\nfields of the bson document mapped to a datatype, so be careful.\n\u003c/p\u003e",
        "fct-module": "Data.Bson.Mapping",
        "fct-package": "bson-mapping",
        "fct-signature": "[Name] -\u003e Q Exp",
        "fct-source": "src/Data-Bson-Mapping.html#selectFields",
        "fct-type": "function",
        "title": "selectFields"
      },
      "index": {
        "description": "Select only certain fields in document see the code sample at the top Please note that there is no checking for the names to be actual fields of the bson document mapped to datatype so be careful",
        "hierarchy": "Data Bson Mapping",
        "module": "Data.Bson.Mapping",
        "name": "selectFields",
        "normalized": "[Name]-\u003eQ Exp",
        "package": "bson-mapping",
        "partial": "Fields",
        "signature": "[Name]-\u003eQ Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bson-mapping/docs/Data-Bson-Mapping.html#v:subDocument",
      "description": {
        "fct-descr": "\u003cp\u003eSimple function to select fields in a nested document.\n\u003c/p\u003e",
        "fct-module": "Data.Bson.Mapping",
        "fct-package": "bson-mapping",
        "fct-signature": "Label -\u003e Document -\u003e Document",
        "fct-source": "src/Data-Bson-Mapping.html#subDocument",
        "fct-type": "function",
        "title": "subDocument"
      },
      "index": {
        "description": "Simple function to select fields in nested document",
        "hierarchy": "Data Bson Mapping",
        "module": "Data.Bson.Mapping",
        "name": "subDocument",
        "normalized": "Label-\u003eDocument-\u003eDocument",
        "package": "bson-mapping",
        "partial": "Document",
        "signature": "Label-\u003eDocument-\u003eDocument"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bson-mapping/docs/Data-Bson-Mapping.html#v:toBson",
      "description": {
        "fct-module": "Data.Bson.Mapping",
        "fct-package": "bson-mapping",
        "fct-signature": "a -\u003e Document",
        "fct-source": "src/Data-Bson-Mapping.html#toBson",
        "fct-type": "method",
        "title": "toBson"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Bson Mapping",
        "module": "Data.Bson.Mapping",
        "name": "toBson",
        "normalized": "a-\u003eDocument",
        "package": "bson-mapping",
        "partial": "Bson",
        "signature": "a-\u003eDocument"
      }
    }
  }
]