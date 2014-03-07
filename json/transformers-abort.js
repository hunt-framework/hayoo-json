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
        "word": "transformers-abort"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Abort",
          "name": "Abort",
          "package": "transformers-abort",
          "source": "src/Control-Monad-Trans-Abort.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Monad Trans Abort",
          "module": "Control.Monad.Trans.Abort",
          "name": "Abort",
          "package": "transformers-abort",
          "partial": "Abort",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/transformers-abort/docs/Control-Monad-Trans-Abort.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Abort",
          "name": "Abort",
          "package": "transformers-abort",
          "source": "src/Control-Monad-Trans-Abort.html#Abort",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Monad Trans Abort",
          "module": "Control.Monad.Trans.Abort",
          "name": "Abort",
          "package": "transformers-abort",
          "partial": "Abort",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/transformers-abort/docs/Control-Monad-Trans-Abort.html#t:Abort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Abort",
          "name": "AbortT",
          "package": "transformers-abort",
          "source": "src/Control-Monad-Trans-Abort.html#AbortT",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Control Monad Trans Abort",
          "module": "Control.Monad.Trans.Abort",
          "name": "AbortT",
          "package": "transformers-abort",
          "partial": "Abort",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/transformers-abort/docs/Control-Monad-Trans-Abort.html#t:AbortT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Abort",
          "name": "AbortT",
          "package": "transformers-abort",
          "signature": "AbortT",
          "source": "src/Control-Monad-Trans-Abort.html#AbortT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Abort",
          "module": "Control.Monad.Trans.Abort",
          "name": "AbortT",
          "package": "transformers-abort",
          "partial": "Abort",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/transformers-abort/docs/Control-Monad-Trans-Abort.html#v:AbortT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Abort",
          "name": "abort",
          "package": "transformers-abort",
          "signature": "e -\u003e AbortT e μ α",
          "source": "src/Control-Monad-Trans-Abort.html#abort",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Abort",
          "module": "Control.Monad.Trans.Abort",
          "name": "abort",
          "normalized": "a-\u003eAbortT a b c",
          "package": "transformers-abort",
          "signature": "e-\u003eAbortT e μ α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/transformers-abort/docs/Control-Monad-Trans-Abort.html#v:abort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Abort",
          "name": "recover",
          "package": "transformers-abort",
          "signature": "AbortT e μ α -\u003e (e -\u003e AbortT e μ α) -\u003e AbortT e μ α",
          "source": "src/Control-Monad-Trans-Abort.html#recover",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Abort",
          "module": "Control.Monad.Trans.Abort",
          "name": "recover",
          "normalized": "AbortT a b c-\u003e(a-\u003eAbortT a b c)-\u003eAbortT a b c",
          "package": "transformers-abort",
          "signature": "AbortT e μ α-\u003e(e-\u003eAbortT e μ α)-\u003eAbortT e μ α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/transformers-abort/docs/Control-Monad-Trans-Abort.html#v:recover"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Abort",
          "name": "runAbort",
          "package": "transformers-abort",
          "signature": "Abort e α -\u003e Either e α",
          "source": "src/Control-Monad-Trans-Abort.html#runAbort",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Abort",
          "module": "Control.Monad.Trans.Abort",
          "name": "runAbort",
          "normalized": "Abort a b-\u003eEither a b",
          "package": "transformers-abort",
          "partial": "Abort",
          "signature": "Abort e α-\u003eEither e α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/transformers-abort/docs/Control-Monad-Trans-Abort.html#v:runAbort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Abort",
          "name": "runAbortT",
          "package": "transformers-abort",
          "signature": "μ (Either e α)",
          "source": "src/Control-Monad-Trans-Abort.html#AbortT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Abort",
          "module": "Control.Monad.Trans.Abort",
          "name": "runAbortT",
          "package": "transformers-abort",
          "partial": "Abort",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/transformers-abort/docs/Control-Monad-Trans-Abort.html#v:runAbortT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Finish",
          "name": "Finish",
          "package": "transformers-abort",
          "source": "src/Control-Monad-Trans-Finish.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Monad Trans Finish",
          "module": "Control.Monad.Trans.Finish",
          "name": "Finish",
          "package": "transformers-abort",
          "partial": "Finish",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/transformers-abort/docs/Control-Monad-Trans-Finish.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Finish",
          "name": "Finish",
          "package": "transformers-abort",
          "source": "src/Control-Monad-Trans-Finish.html#Finish",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Monad Trans Finish",
          "module": "Control.Monad.Trans.Finish",
          "name": "Finish",
          "package": "transformers-abort",
          "partial": "Finish",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/transformers-abort/docs/Control-Monad-Trans-Finish.html#t:Finish"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Finish",
          "name": "FinishT",
          "package": "transformers-abort",
          "source": "src/Control-Monad-Trans-Finish.html#FinishT",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Control Monad Trans Finish",
          "module": "Control.Monad.Trans.Finish",
          "name": "FinishT",
          "package": "transformers-abort",
          "partial": "Finish",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/transformers-abort/docs/Control-Monad-Trans-Finish.html#t:FinishT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Finish",
          "name": "FinishT",
          "package": "transformers-abort",
          "signature": "FinishT",
          "source": "src/Control-Monad-Trans-Finish.html#FinishT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Finish",
          "module": "Control.Monad.Trans.Finish",
          "name": "FinishT",
          "package": "transformers-abort",
          "partial": "Finish",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/transformers-abort/docs/Control-Monad-Trans-Finish.html#v:FinishT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Finish",
          "name": "finish",
          "package": "transformers-abort",
          "signature": "f -\u003e FinishT f μ α",
          "source": "src/Control-Monad-Trans-Finish.html#finish",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Finish",
          "module": "Control.Monad.Trans.Finish",
          "name": "finish",
          "normalized": "a-\u003eFinishT a b c",
          "package": "transformers-abort",
          "signature": "f-\u003eFinishT f μ α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/transformers-abort/docs/Control-Monad-Trans-Finish.html#v:finish"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Finish",
          "name": "runFinish",
          "package": "transformers-abort",
          "signature": "Finish f α -\u003e Either f α",
          "source": "src/Control-Monad-Trans-Finish.html#runFinish",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Finish",
          "module": "Control.Monad.Trans.Finish",
          "name": "runFinish",
          "normalized": "Finish a b-\u003eEither a b",
          "package": "transformers-abort",
          "partial": "Finish",
          "signature": "Finish f α-\u003eEither f α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/transformers-abort/docs/Control-Monad-Trans-Finish.html#v:runFinish"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Finish",
          "name": "runFinish'",
          "package": "transformers-abort",
          "signature": "Finish α α -\u003e α",
          "source": "src/Control-Monad-Trans-Finish.html#runFinish%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Finish",
          "module": "Control.Monad.Trans.Finish",
          "name": "runFinish'",
          "normalized": "Finish a a-\u003ea",
          "package": "transformers-abort",
          "partial": "Finish'",
          "signature": "Finish α α-\u003eα",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/transformers-abort/docs/Control-Monad-Trans-Finish.html#v:runFinish-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Finish",
          "name": "runFinishT",
          "package": "transformers-abort",
          "signature": "μ (Either f α)",
          "source": "src/Control-Monad-Trans-Finish.html#FinishT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Finish",
          "module": "Control.Monad.Trans.Finish",
          "name": "runFinishT",
          "package": "transformers-abort",
          "partial": "Finish",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/transformers-abort/docs/Control-Monad-Trans-Finish.html#v:runFinishT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Finish",
          "name": "runFinishT'",
          "package": "transformers-abort",
          "signature": "FinishT α μ α -\u003e μ α",
          "source": "src/Control-Monad-Trans-Finish.html#runFinishT%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Finish",
          "module": "Control.Monad.Trans.Finish",
          "name": "runFinishT'",
          "normalized": "FinishT a b a-\u003eb a",
          "package": "transformers-abort",
          "partial": "Finish T'",
          "signature": "FinishT α μ α-\u003eμ α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/transformers-abort/docs/Control-Monad-Trans-Finish.html#v:runFinishT-39-"
      }
    }
  ]
]