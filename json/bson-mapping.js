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
        "word": "bson-mapping"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module aims to make mapping between algebraic data types and bson\ndocuments easy.\n\u003c/p\u003e\u003cp\u003eYou can also generate documents with \u003ccode\u003e\u003ca\u003eselectFields\u003c/a\u003e\u003c/code\u003e, which takes a\nlist of functions names that of type a -\u003e b and returns a function\nof type a -\u003e Document.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e import Data.Bson.Mapping\n import Data.Time.Clock\n import Data.Data (Typeable)\n\n data Post = Post { time :: UTCTime\n                  , author :: String\n                  , content :: String \n                  , votes :: Int\n                  }\n           deriving (Show, Read, Eq, Ord, Typeable)\n $(deriveBson ''Post)\n\n main :: IO ()\n main = do\n   now \u003c- getCurrentTime\n   let post = Post now \"francesco\" \"lorem ipsum\" 5\n   (fromBson (toBson post) :: IO Post) \u003e\u003e= print\n   print $ toBson post\n   print $ $(selectFields ['time, 'content]) post\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.Bson.Mapping",
          "name": "Mapping",
          "package": "bson-mapping",
          "source": "src/Data-Bson-Mapping.html",
          "type": "module"
        },
        "index": {
          "description": "This module aims to make mapping between algebraic data types and bson documents easy You can also generate documents with selectFields which takes list of functions names that of type and returns function of type Document Example import Data.Bson.Mapping import Data.Time.Clock import Data.Data Typeable data Post Post time UTCTime author String content String votes Int deriving Show Read Eq Ord Typeable deriveBson Post main IO main do now getCurrentTime let post Post now francesco lorem ipsum fromBson toBson post IO Post print print toBson post print selectFields time content post",
          "hierarchy": "Data Bson Mapping",
          "module": "Data.Bson.Mapping",
          "name": "Mapping",
          "package": "bson-mapping",
          "partial": "Mapping",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bson-mapping/docs/Data-Bson-Mapping.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bson.Mapping",
          "name": "Bson",
          "package": "bson-mapping",
          "source": "src/Data-Bson-Mapping.html#Bson",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Bson Mapping",
          "module": "Data.Bson.Mapping",
          "name": "Bson",
          "package": "bson-mapping",
          "partial": "Bson",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/bson-mapping/docs/Data-Bson-Mapping.html#t:Bson"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDerive \u003ccode\u003e\u003ca\u003eBson\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eVal\u003c/a\u003e\u003c/code\u003e declarations for a data type.\n\u003c/p\u003e",
          "module": "Data.Bson.Mapping",
          "name": "deriveBson",
          "package": "bson-mapping",
          "signature": "Name -\u003e Q [Dec]",
          "source": "src/Data-Bson-Mapping.html#deriveBson",
          "type": "function"
        },
        "index": {
          "description": "Derive Bson and Val declarations for data type",
          "hierarchy": "Data Bson Mapping",
          "module": "Data.Bson.Mapping",
          "name": "deriveBson",
          "normalized": "Name-\u003eQ[Dec]",
          "package": "bson-mapping",
          "partial": "Bson",
          "signature": "Name-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bson-mapping/docs/Data-Bson-Mapping.html#v:deriveBson"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bson.Mapping",
          "name": "fromBson",
          "package": "bson-mapping",
          "signature": "Document -\u003e m a",
          "source": "src/Data-Bson-Mapping.html#fromBson",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Bson Mapping",
          "module": "Data.Bson.Mapping",
          "name": "fromBson",
          "normalized": "Document-\u003ea b",
          "package": "bson-mapping",
          "partial": "Bson",
          "signature": "Document-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bson-mapping/docs/Data-Bson-Mapping.html#v:fromBson"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a document that identifies the data type - \u003ccode\u003egetConsDoc ''Post\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis is useful to select all documents mapped to a certain data type.\n\u003c/p\u003e",
          "module": "Data.Bson.Mapping",
          "name": "getConsDoc",
          "package": "bson-mapping",
          "signature": "Name -\u003e Q Exp",
          "source": "src/Data-Bson-Mapping.html#getConsDoc",
          "type": "function"
        },
        "index": {
          "description": "Get document that identifies the data type getConsDoc Post This is useful to select all documents mapped to certain data type",
          "hierarchy": "Data Bson Mapping",
          "module": "Data.Bson.Mapping",
          "name": "getConsDoc",
          "normalized": "Name-\u003eQ Exp",
          "package": "bson-mapping",
          "partial": "Cons Doc",
          "signature": "Name-\u003eQ Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bson-mapping/docs/Data-Bson-Mapping.html#v:getConsDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a function that gets a datatype and a value, and generates a \u003ccode\u003e\u003ca\u003eDocument\u003c/a\u003e\u003c/code\u003e consisting of one field - the label provided - and the value of that datatype.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e$(getField 'time) post\u003c/code\u003e will generate \u003ccode\u003e[\"time\" =: time post]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Bson.Mapping",
          "name": "getField",
          "package": "bson-mapping",
          "signature": "Name -\u003e Q Exp",
          "source": "src/Data-Bson-Mapping.html#getField",
          "type": "function"
        },
        "index": {
          "description": "Returns function that gets datatype and value and generates Document consisting of one field the label provided and the value of that datatype getField time post will generate time time post",
          "hierarchy": "Data Bson Mapping",
          "module": "Data.Bson.Mapping",
          "name": "getField",
          "normalized": "Name-\u003eQ Exp",
          "package": "bson-mapping",
          "partial": "Field",
          "signature": "Name-\u003eQ Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bson-mapping/docs/Data-Bson-Mapping.html#v:getField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bson.Mapping",
          "name": "getLabel",
          "package": "bson-mapping",
          "signature": "Name -\u003e Q Exp",
          "source": "src/Data-Bson-Mapping.html#getLabel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Bson Mapping",
          "module": "Data.Bson.Mapping",
          "name": "getLabel",
          "normalized": "Name-\u003eQ Exp",
          "package": "bson-mapping",
          "partial": "Label",
          "signature": "Name-\u003eQ Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bson-mapping/docs/Data-Bson-Mapping.html#v:getLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect only certain fields in a document, see the code sample at the\ntop.\n\u003c/p\u003e\u003cp\u003ePlease note that there is no checking for the names to be actual\nfields of the bson document mapped to a datatype, so be careful.\n\u003c/p\u003e",
          "module": "Data.Bson.Mapping",
          "name": "selectFields",
          "package": "bson-mapping",
          "signature": "[Name] -\u003e Q Exp",
          "source": "src/Data-Bson-Mapping.html#selectFields",
          "type": "function"
        },
        "index": {
          "description": "Select only certain fields in document see the code sample at the top Please note that there is no checking for the names to be actual fields of the bson document mapped to datatype so be careful",
          "hierarchy": "Data Bson Mapping",
          "module": "Data.Bson.Mapping",
          "name": "selectFields",
          "normalized": "[Name]-\u003eQ Exp",
          "package": "bson-mapping",
          "partial": "Fields",
          "signature": "[Name]-\u003eQ Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bson-mapping/docs/Data-Bson-Mapping.html#v:selectFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimple function to select fields in a nested document.\n\u003c/p\u003e",
          "module": "Data.Bson.Mapping",
          "name": "subDocument",
          "package": "bson-mapping",
          "signature": "Label -\u003e Document -\u003e Document",
          "source": "src/Data-Bson-Mapping.html#subDocument",
          "type": "function"
        },
        "index": {
          "description": "Simple function to select fields in nested document",
          "hierarchy": "Data Bson Mapping",
          "module": "Data.Bson.Mapping",
          "name": "subDocument",
          "normalized": "Label-\u003eDocument-\u003eDocument",
          "package": "bson-mapping",
          "partial": "Document",
          "signature": "Label-\u003eDocument-\u003eDocument",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bson-mapping/docs/Data-Bson-Mapping.html#v:subDocument"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bson.Mapping",
          "name": "toBson",
          "package": "bson-mapping",
          "signature": "a -\u003e Document",
          "source": "src/Data-Bson-Mapping.html#toBson",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Bson Mapping",
          "module": "Data.Bson.Mapping",
          "name": "toBson",
          "normalized": "a-\u003eDocument",
          "package": "bson-mapping",
          "partial": "Bson",
          "signature": "a-\u003eDocument",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bson-mapping/docs/Data-Bson-Mapping.html#v:toBson"
      }
    }
  ]
]