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
        "word": "bools"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions for dealing with bools.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Bools",
          "name": "Bools",
          "package": "bools",
          "source": "src/Bools.html",
          "type": "module"
        },
        "index": {
          "description": "Functions for dealing with bools",
          "hierarchy": "Bools",
          "module": "Bools",
          "name": "Bools",
          "package": "bools",
          "partial": "Bools",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bools/docs/Bools.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ebool false true p = if p then true else false\n\u003c/p\u003e",
          "module": "Bools",
          "name": "bool",
          "package": "bools",
          "signature": "a -\u003e a -\u003e Bool -\u003e a",
          "source": "src/Bools.html#bool",
          "type": "function"
        },
        "index": {
          "description": "bool false true if then true else false",
          "hierarchy": "Bools",
          "module": "Bools",
          "name": "bool",
          "normalized": "a-\u003ea-\u003eBool-\u003ea",
          "package": "bools",
          "signature": "a-\u003ea-\u003eBool-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bools/docs/Bools.html#v:bool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econd false true p v = if p v then true v else false v\n\u003c/p\u003e",
          "module": "Bools",
          "name": "cond",
          "package": "bools",
          "signature": "(a -\u003e b) -\u003e (a -\u003e b) -\u003e (a -\u003e Bool) -\u003e a -\u003e b",
          "source": "src/Bools.html#cond",
          "type": "function"
        },
        "index": {
          "description": "cond false true if then true else false",
          "hierarchy": "Bools",
          "module": "Bools",
          "name": "cond",
          "normalized": "(a-\u003eb)-\u003e(a-\u003eb)-\u003e(a-\u003eBool)-\u003ea-\u003eb",
          "package": "bools",
          "signature": "(a-\u003eb)-\u003e(a-\u003eb)-\u003e(a-\u003eBool)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bools/docs/Bools.html#v:cond"
      }
    }
  ]
]