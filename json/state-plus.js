[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/state-plus/docs/Control-Monad-Trans-State-Plus.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMonadPlus with left catch (MonadOr) for StateT.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Trans.State.Plus",
        "fct-package": "state-plus",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Trans-State-Plus.html",
        "fct-type": "module",
        "title": "Plus"
      },
      "index": {
        "description": "MonadPlus with left catch MonadOr for StateT",
        "hierarchy": "Control Monad Trans State Plus",
        "module": "Control.Monad.Trans.State.Plus",
        "name": "Plus",
        "normalized": "",
        "package": "state-plus",
        "partial": "Plus",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/state-plus/docs/Control-Monad-Trans-State-Plus.html#t:StatePlusT",
      "description": {
        "fct-descr": "\u003cp\u003eStatePlusT behaves similar to StateT monad transformer\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.State.Plus",
        "fct-package": "state-plus",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-Trans-State-Plus.html#StatePlusT",
        "fct-type": "data",
        "title": "StatePlusT"
      },
      "index": {
        "description": "StatePlusT behaves similar to StateT monad transformer",
        "hierarchy": "Control Monad Trans State Plus",
        "module": "Control.Monad.Trans.State.Plus",
        "name": "StatePlusT",
        "normalized": "",
        "package": "state-plus",
        "partial": "State Plus",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/state-plus/docs/Control-Monad-Trans-State-Plus.html#v:evalStatePlusT",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate StatePlusT monad returning resulting value. See above\n for the semantics.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.State.Plus",
        "fct-package": "state-plus",
        "fct-signature": "StatePlusT s m a -\u003e s -\u003e m (Maybe a)",
        "fct-source": "src/Control-Monad-Trans-State-Plus.html#evalStatePlusT",
        "fct-type": "function",
        "title": "evalStatePlusT"
      },
      "index": {
        "description": "Evaluate StatePlusT monad returning resulting value See above for the semantics",
        "hierarchy": "Control Monad Trans State Plus",
        "module": "Control.Monad.Trans.State.Plus",
        "name": "evalStatePlusT",
        "normalized": "StatePlusT a b c-\u003ea-\u003eb(Maybe c)",
        "package": "state-plus",
        "partial": "State Plus",
        "signature": "StatePlusT s m a-\u003es-\u003em(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/state-plus/docs/Control-Monad-Trans-State-Plus.html#v:execStatePlusT",
      "description": {
        "fct-descr": "\u003cp\u003eExecute StatePlusT monad returning resulting state\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.State.Plus",
        "fct-package": "state-plus",
        "fct-signature": "StatePlusT s m a -\u003e s -\u003e m s",
        "fct-source": "src/Control-Monad-Trans-State-Plus.html#execStatePlusT",
        "fct-type": "function",
        "title": "execStatePlusT"
      },
      "index": {
        "description": "Execute StatePlusT monad returning resulting state",
        "hierarchy": "Control Monad Trans State Plus",
        "module": "Control.Monad.Trans.State.Plus",
        "name": "execStatePlusT",
        "normalized": "StatePlusT a b c-\u003ea-\u003eb a",
        "package": "state-plus",
        "partial": "State Plus",
        "signature": "StatePlusT s m a-\u003es-\u003em s"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/state-plus/docs/Control-Monad-Trans-State-Plus.html#v:runStatePlusT",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate StatePlusT monad. In difference from runStateT it returns\n \u003ccode\u003eNothing\u003c/code\u003e if \u003ccode\u003emzero\u003c/code\u003e has been encountered. \u003ccode\u003eJust a\u003c/code\u003e otherwise.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.State.Plus",
        "fct-package": "state-plus",
        "fct-signature": "StatePlusT s m a -\u003e s -\u003e m (Maybe a, s)",
        "fct-source": "src/Control-Monad-Trans-State-Plus.html#runStatePlusT",
        "fct-type": "function",
        "title": "runStatePlusT"
      },
      "index": {
        "description": "Evaluate StatePlusT monad In difference from runStateT it returns Nothing if mzero has been encountered Just otherwise",
        "hierarchy": "Control Monad Trans State Plus",
        "module": "Control.Monad.Trans.State.Plus",
        "name": "runStatePlusT",
        "normalized": "StatePlusT a b c-\u003ea-\u003eb(Maybe c,a)",
        "package": "state-plus",
        "partial": "State Plus",
        "signature": "StatePlusT s m a-\u003es-\u003em(Maybe a,s)"
      }
    }
  }
]