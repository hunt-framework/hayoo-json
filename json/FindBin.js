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
        "word": "FindBin"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Environment.FindBin",
          "name": "FindBin",
          "package": "FindBin",
          "source": "src/System-Environment-FindBin.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Environment FindBin",
          "module": "System.Environment.FindBin",
          "name": "FindBin",
          "package": "FindBin",
          "partial": "Find Bin",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/FindBin/docs/System-Environment-FindBin.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnsafe (\u003cem\u003econstant\u003c/em\u003e) version of \u003ccode\u003e\u003ca\u003egetProgPath\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Environment.FindBin",
          "name": "__Bin__",
          "package": "FindBin",
          "signature": "String",
          "source": "src/System-Environment-FindBin.html#__Bin__",
          "type": "function"
        },
        "index": {
          "description": "Unsafe constant version of getProgPath",
          "hierarchy": "System Environment FindBin",
          "module": "System.Environment.FindBin",
          "name": "__Bin__",
          "package": "FindBin",
          "partial": "Bin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FindBin/docs/System-Environment-FindBin.html#v:__Bin__"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the full directory to the running program.\n\u003c/p\u003e",
          "module": "System.Environment.FindBin",
          "name": "getProgPath",
          "package": "FindBin",
          "signature": "IO String",
          "source": "src/System-Environment-FindBin.html#getProgPath",
          "type": "function"
        },
        "index": {
          "description": "Get the full directory to the running program",
          "hierarchy": "System Environment FindBin",
          "module": "System.Environment.FindBin",
          "name": "getProgPath",
          "package": "FindBin",
          "partial": "Prog Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FindBin/docs/System-Environment-FindBin.html#v:getProgPath"
      }
    }
  ]
]