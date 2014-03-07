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
        "word": "dtrace"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.DTrace",
          "name": "DTrace",
          "package": "dtrace",
          "source": "src/System-DTrace.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System DTrace",
          "module": "System.DTrace",
          "name": "DTrace",
          "package": "dtrace",
          "partial": "DTrace",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dtrace/docs/System-DTrace.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.DTrace",
          "name": "trace",
          "package": "dtrace",
          "signature": "String -\u003e IO ()",
          "source": "src/System-DTrace.html#trace",
          "type": "function"
        },
        "index": {
          "hierarchy": "System DTrace",
          "module": "System.DTrace",
          "name": "trace",
          "normalized": "String-\u003eIO()",
          "package": "dtrace",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtrace/docs/System-DTrace.html#v:trace"
      }
    }
  ]
]