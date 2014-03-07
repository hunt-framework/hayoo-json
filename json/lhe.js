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
        "word": "lhe"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a pure haskell implementation of a parser and writer for\nthe Les-Houches event file format, as described in hep-ph/0609017. (Note that\nthe writer doesn't actually exist yet.)\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.LHE",
          "name": "LHE",
          "package": "lhe",
          "source": "src/Data-LHE.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides pure haskell implementation of parser and writer for the Les-Houches event file format as described in hep-ph Note that the writer doesn actually exist yet",
          "hierarchy": "Data LHE",
          "module": "Data.LHE",
          "name": "LHE",
          "package": "lhe",
          "partial": "LHE",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/lhe/docs/Data-LHE.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LHE",
          "name": "parse",
          "package": "lhe",
          "signature": "String -\u003e ByteString -\u003e (Run, [Event])",
          "source": "src/Data-LHE.html#parse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LHE",
          "module": "Data.LHE",
          "name": "parse",
          "normalized": "String-\u003eByteString-\u003e(Run,[Event])",
          "package": "lhe",
          "signature": "String-\u003eByteString-\u003e(Run,[Event])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lhe/docs/Data-LHE.html#v:parse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LHE",
          "name": "parseFile",
          "package": "lhe",
          "signature": "String -\u003e IO (Run, [Event])",
          "source": "src/Data-LHE.html#parseFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LHE",
          "module": "Data.LHE",
          "name": "parseFile",
          "normalized": "String-\u003eIO(Run,[Event])",
          "package": "lhe",
          "partial": "File",
          "signature": "String-\u003eIO(Run,[Event])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lhe/docs/Data-LHE.html#v:parseFile"
      }
    }
  ]
]