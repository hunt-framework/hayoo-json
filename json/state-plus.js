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
        "word": "state-plus"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMonadPlus with left catch (MonadOr) for StateT.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Trans.State.Plus",
          "name": "Plus",
          "package": "state-plus",
          "source": "src/Control-Monad-Trans-State-Plus.html",
          "type": "module"
        },
        "index": {
          "description": "MonadPlus with left catch MonadOr for StateT",
          "hierarchy": "Control Monad Trans State Plus",
          "module": "Control.Monad.Trans.State.Plus",
          "name": "Plus",
          "package": "state-plus",
          "partial": "Plus",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/state-plus/docs/Control-Monad-Trans-State-Plus.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStatePlusT behaves similar to StateT monad transformer\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.State.Plus",
          "name": "StatePlusT",
          "package": "state-plus",
          "source": "src/Control-Monad-Trans-State-Plus.html#StatePlusT",
          "type": "data"
        },
        "index": {
          "description": "StatePlusT behaves similar to StateT monad transformer",
          "hierarchy": "Control Monad Trans State Plus",
          "module": "Control.Monad.Trans.State.Plus",
          "name": "StatePlusT",
          "package": "state-plus",
          "partial": "State Plus",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/state-plus/docs/Control-Monad-Trans-State-Plus.html#t:StatePlusT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate StatePlusT monad returning resulting value. See above\n for the semantics.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.State.Plus",
          "name": "evalStatePlusT",
          "package": "state-plus",
          "signature": "StatePlusT s m a -\u003e s -\u003e m (Maybe a)",
          "source": "src/Control-Monad-Trans-State-Plus.html#evalStatePlusT",
          "type": "function"
        },
        "index": {
          "description": "Evaluate StatePlusT monad returning resulting value See above for the semantics",
          "hierarchy": "Control Monad Trans State Plus",
          "module": "Control.Monad.Trans.State.Plus",
          "name": "evalStatePlusT",
          "normalized": "StatePlusT a b c-\u003ea-\u003eb(Maybe c)",
          "package": "state-plus",
          "partial": "State Plus",
          "signature": "StatePlusT s m a-\u003es-\u003em(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/state-plus/docs/Control-Monad-Trans-State-Plus.html#v:evalStatePlusT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute StatePlusT monad returning resulting state\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.State.Plus",
          "name": "execStatePlusT",
          "package": "state-plus",
          "signature": "StatePlusT s m a -\u003e s -\u003e m s",
          "source": "src/Control-Monad-Trans-State-Plus.html#execStatePlusT",
          "type": "function"
        },
        "index": {
          "description": "Execute StatePlusT monad returning resulting state",
          "hierarchy": "Control Monad Trans State Plus",
          "module": "Control.Monad.Trans.State.Plus",
          "name": "execStatePlusT",
          "normalized": "StatePlusT a b c-\u003ea-\u003eb a",
          "package": "state-plus",
          "partial": "State Plus",
          "signature": "StatePlusT s m a-\u003es-\u003em s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/state-plus/docs/Control-Monad-Trans-State-Plus.html#v:execStatePlusT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate StatePlusT monad. In difference from runStateT it returns\n \u003ccode\u003eNothing\u003c/code\u003e if \u003ccode\u003emzero\u003c/code\u003e has been encountered. \u003ccode\u003eJust a\u003c/code\u003e otherwise.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.State.Plus",
          "name": "runStatePlusT",
          "package": "state-plus",
          "signature": "StatePlusT s m a -\u003e s -\u003e m (Maybe a, s)",
          "source": "src/Control-Monad-Trans-State-Plus.html#runStatePlusT",
          "type": "function"
        },
        "index": {
          "description": "Evaluate StatePlusT monad In difference from runStateT it returns Nothing if mzero has been encountered Just otherwise",
          "hierarchy": "Control Monad Trans State Plus",
          "module": "Control.Monad.Trans.State.Plus",
          "name": "runStatePlusT",
          "normalized": "StatePlusT a b c-\u003ea-\u003eb(Maybe c,a)",
          "package": "state-plus",
          "partial": "State Plus",
          "signature": "StatePlusT s m a-\u003es-\u003em(Maybe a,s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/state-plus/docs/Control-Monad-Trans-State-Plus.html#v:runStatePlusT"
      }
    }
  ]
]