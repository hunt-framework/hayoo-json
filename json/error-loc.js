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
        "word": "error-loc"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cpre\u003e {-# LANGUAGE TemplateHaskell #-}\n\n import Prelude hiding (error)\n import ErrorLoc\n\n main :: IO ()\n main = $error \"Oh no!\"\n\u003c/pre\u003e\u003cpre\u003e test.hs:7:10: Oh no!\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "ErrorLoc",
          "name": "ErrorLoc",
          "package": "error-loc",
          "source": "src/ErrorLoc.html",
          "type": "module"
        },
        "index": {
          "description": "LANGUAGE TemplateHaskell import Prelude hiding error import ErrorLoc main IO main error Oh no test.hs Oh no",
          "hierarchy": "ErrorLoc",
          "module": "ErrorLoc",
          "name": "ErrorLoc",
          "package": "error-loc",
          "partial": "Error Loc",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/error-loc/docs/ErrorLoc.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProvides a version of \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e with call-site metadata.\n\u003c/p\u003e",
          "module": "ErrorLoc",
          "name": "error",
          "package": "error-loc",
          "signature": "Q Exp",
          "source": "src/ErrorLoc.html#error",
          "type": "function"
        },
        "index": {
          "description": "Provides version of error with call-site metadata",
          "hierarchy": "ErrorLoc",
          "module": "ErrorLoc",
          "name": "error",
          "package": "error-loc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/error-loc/docs/ErrorLoc.html#v:error"
      }
    }
  ]
]