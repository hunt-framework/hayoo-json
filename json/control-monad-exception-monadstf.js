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
        "word": "control-monad-exception-monadstf"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eEMT\u003c/a\u003e\u003c/code\u003e liftings for the classes in the monads-fd package\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Exception.MonadsTF",
          "name": "MonadsTF",
          "package": "control-monad-exception-monadstf",
          "source": "src/Control-Monad-Exception-MonadsTF.html",
          "type": "module"
        },
        "index": {
          "description": "EMT liftings for the classes in the monads-fd package",
          "hierarchy": "Control Monad Exception MonadsTF",
          "module": "Control.Monad.Exception.MonadsTF",
          "name": "MonadsTF",
          "package": "control-monad-exception-monadstf",
          "partial": "Monads TF",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/control-monad-exception-monadstf/docs/Control-Monad-Exception-MonadsTF.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe catch primitive\n\u003c/p\u003e",
          "module": "Control.Monad.Exception.MonadsTF",
          "name": "catch",
          "package": "control-monad-exception-monadstf",
          "signature": "EMT (Caught e l) m a -\u003e (e -\u003e EMT l m a) -\u003e EMT l m a",
          "type": "function"
        },
        "index": {
          "description": "The catch primitive",
          "hierarchy": "Control Monad Exception MonadsTF",
          "module": "Control.Monad.Exception.MonadsTF",
          "name": "catch",
          "normalized": "EMT(Caught a b)c d-\u003e(a-\u003eEMT b c d)-\u003eEMT b c d",
          "package": "control-monad-exception-monadstf",
          "signature": "EMT(Caught e l)m a-\u003e(e-\u003eEMT l m a)-\u003eEMT l m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/control-monad-exception-monadstf/docs/Control-Monad-Exception-MonadsTF.html#v:catch"
      }
    }
  ]
]