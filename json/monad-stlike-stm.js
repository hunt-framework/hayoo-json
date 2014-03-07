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
        "word": "monad-stlike-stm"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Monad for STM computations with ST-like variables.\n",
          "module": "Control.Monad.STLike.STM",
          "name": "STMS",
          "package": "monad-stlike-stm",
          "source": "http://hackage.haskell.org/package/monad-stlike-stm/docs/src/Control-Monad-STLike-STM.html#STMS",
          "type": "type"
        },
        "index": {
          "description": "Monad for STM computations with ST-like variables",
          "hierarchy": "Control Monad STLike STM",
          "module": "Control.Monad.STLike.STM",
          "name": "STMS",
          "package": "monad-stlike-stm",
          "partial": "STMS",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/monad-stlike-stm/docs/Control-Monad-STLike-STM.html#t:STMS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Lift STM computations into STMS.\n",
          "module": "Control.Monad.STLike.STM",
          "name": "stm",
          "package": "monad-stlike-stm",
          "signature": "STM t -\u003e STMS s t",
          "source": "http://hackage.haskell.org/package/monad-stlike-stm/docs/src/Control-Monad-STLike-STM.html#stm",
          "type": "function"
        },
        "index": {
          "description": "Lift STM computations into STMS",
          "hierarchy": "Control Monad STLike STM",
          "module": "Control.Monad.STLike.STM",
          "name": "stm",
          "normalized": "STM a-\u003eSTMS b a",
          "package": "monad-stlike-stm",
          "signature": "STM t-\u003eSTMS s t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-stlike-stm/docs/Control-Monad-STLike-STM.html#v:stm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Run an STMS computation with \u003cem\u003eatomically\u003c/em\u003e.\n",
          "module": "Control.Monad.STLike.STM",
          "name": "stmsToIOS",
          "package": "monad-stlike-stm",
          "signature": "STMS s t -\u003e IOS s t",
          "source": "http://hackage.haskell.org/package/monad-stlike-stm/docs/src/Control-Monad-STLike-STM.html#stmsToIOS",
          "type": "function"
        },
        "index": {
          "description": "Run an STMS computation with atomically",
          "hierarchy": "Control Monad STLike STM",
          "module": "Control.Monad.STLike.STM",
          "name": "stmsToIOS",
          "normalized": "STMS a b-\u003eIOS a b",
          "package": "monad-stlike-stm",
          "partial": "To IOS",
          "signature": "STMS s t-\u003eIOS s t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-stlike-stm/docs/Control-Monad-STLike-STM.html#v:stmsToIOS"
      }
    }
  ]
]