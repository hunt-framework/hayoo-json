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
        "word": "safeint"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefines a variant of Haskell's Int type that is overflow-checked. If\n an overflow or arithmetic error occurs, a run-time exception is thrown.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.SafeInt",
          "name": "SafeInt",
          "package": "safeint",
          "source": "src/Data-SafeInt.html",
          "type": "module"
        },
        "index": {
          "description": "Defines variant of Haskell Int type that is overflow-checked If an overflow or arithmetic error occurs run-time exception is thrown",
          "hierarchy": "Data SafeInt",
          "module": "Data.SafeInt",
          "name": "SafeInt",
          "package": "safeint",
          "partial": "Safe Int",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/safeint/docs/Data-SafeInt.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SafeInt",
          "name": "SafeInt",
          "package": "safeint",
          "source": "src/Data-SafeInt.html#SafeInt",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data SafeInt",
          "module": "Data.SafeInt",
          "name": "SafeInt",
          "package": "safeint",
          "partial": "Safe Int",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/safeint/docs/Data-SafeInt.html#t:SafeInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SafeInt",
          "name": "SI",
          "package": "safeint",
          "signature": "SI Int",
          "source": "src/Data-SafeInt.html#SafeInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SafeInt",
          "module": "Data.SafeInt",
          "name": "SI",
          "package": "safeint",
          "partial": "SI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/safeint/docs/Data-SafeInt.html#v:SI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SafeInt",
          "name": "fromSafe",
          "package": "safeint",
          "signature": "SafeInt -\u003e Int",
          "source": "src/Data-SafeInt.html#fromSafe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SafeInt",
          "module": "Data.SafeInt",
          "name": "fromSafe",
          "normalized": "SafeInt-\u003eInt",
          "package": "safeint",
          "partial": "Safe",
          "signature": "SafeInt-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/safeint/docs/Data-SafeInt.html#v:fromSafe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SafeInt",
          "name": "toSafe",
          "package": "safeint",
          "signature": "Int -\u003e SafeInt",
          "source": "src/Data-SafeInt.html#toSafe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SafeInt",
          "module": "Data.SafeInt",
          "name": "toSafe",
          "normalized": "Int-\u003eSafeInt",
          "package": "safeint",
          "partial": "Safe",
          "signature": "Int-\u003eSafeInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/safeint/docs/Data-SafeInt.html#v:toSafe"
      }
    }
  ]
]