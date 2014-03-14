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
        "word": "monadfibre"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis package defines Monadic functions which provide Choice and Parallelism - (&lt;||&rt;) and (&lt;&&&rt;) - that work on Monads that provide a (MonadBi m IO) instance.\n\u003c/p\u003e\u003cp\u003eDepends on the \u003ccode\u003emonadbi\u003c/code\u003e library for extracting the IO actions from m. Also provides a good example of how to use the library.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Fibre",
          "name": "Fibre",
          "package": "monadfibre",
          "source": "src/Control-Monad-Fibre.html",
          "type": "module"
        },
        "index": {
          "description": "This package defines Monadic functions which provide Choice and Parallelism lt rt and lt rt that work on Monads that provide MonadBi IO instance Depends on the monadbi library for extracting the IO actions from Also provides good example of how to use the library",
          "hierarchy": "Control Monad Fibre",
          "module": "Control.Monad.Fibre",
          "name": "Fibre",
          "package": "monadfibre",
          "partial": "Fibre",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monadfibre/docs/Control-Monad-Fibre.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Fibre",
          "name": "(\u003c||\u003e)",
          "package": "monadfibre",
          "signature": "m o -\u003e m o -\u003e m o",
          "source": "src/Control-Monad-Fibre.html#%3C%7C%7C%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Fibre",
          "module": "Control.Monad.Fibre",
          "name": "(\u003c||\u003e) \u003c||\u003e",
          "normalized": "a b-\u003ea b-\u003ea b",
          "package": "monadfibre",
          "signature": "m o-\u003em o-\u003em o",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadfibre/docs/Control-Monad-Fibre.html#v:-60--124--124--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Fibre",
          "name": "(\u003c&&\u003e)",
          "package": "monadfibre",
          "signature": "m o1 -\u003e m o2 -\u003e m (o1, o2)",
          "source": "src/Control-Monad-Fibre.html#%3C%26%26%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Fibre",
          "module": "Control.Monad.Fibre",
          "name": "(\u003c&&\u003e) \u003c&&\u003e",
          "normalized": "a b-\u003ea b-\u003ea(b,b)",
          "package": "monadfibre",
          "signature": "m o-\u003em o-\u003em(o,o)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadfibre/docs/Control-Monad-Fibre.html#v:-60--38--38--62-"
      }
    }
  ]
]