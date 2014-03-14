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
        "word": "monad-st"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ST.Class",
          "name": "Class",
          "package": "monad-st",
          "source": "src/Control-Monad-ST-Class.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Monad ST Class",
          "module": "Control.Monad.ST.Class",
          "name": "Class",
          "package": "monad-st",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monad-st/docs/Control-Monad-ST-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ST.Class",
          "name": "MonadST",
          "package": "monad-st",
          "source": "src/Control-Monad-ST-Class.html#MonadST",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Monad ST Class",
          "module": "Control.Monad.ST.Class",
          "name": "MonadST",
          "package": "monad-st",
          "partial": "Monad ST",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monad-st/docs/Control-Monad-ST-Class.html#t:MonadST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ST.Class",
          "name": "liftST",
          "package": "monad-st",
          "signature": "ST (World m) a -\u003e m a",
          "source": "src/Control-Monad-ST-Class.html#liftST",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad ST Class",
          "module": "Control.Monad.ST.Class",
          "name": "liftST",
          "normalized": "ST(World a)b-\u003ea b",
          "package": "monad-st",
          "partial": "ST",
          "signature": "ST(World m)a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monad-st/docs/Control-Monad-ST-Class.html#v:liftST"
      }
    }
  ]
]