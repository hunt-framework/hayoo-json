[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadio-unwrappable/docs/Control-Monad-IO-MonadIOException.html#",
      "description": {
        "fct-module": "Control.Monad.IO.MonadIOException",
        "fct-package": "monadio-unwrappable",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-IO-MonadIOException.html",
        "fct-type": "module",
        "title": "MonadIOException"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad IO MonadIOException",
        "module": "Control.Monad.IO.MonadIOException",
        "name": "MonadIOException",
        "normalized": "",
        "package": "monadio-unwrappable",
        "partial": "Monad IOException",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadio-unwrappable/docs/Control-Monad-IO-MonadIOException.html#v:bracketIO",
      "description": {
        "fct-descr": "\u003cp\u003eGuarantees that an IO operation will be performed before an after executing\n | a MonadIOUnwrappable monad. The operation will be performed even if the\n | MonadIO contains error monads that fails, or if an exception is raised.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.IO.MonadIOException",
        "fct-package": "monadio-unwrappable",
        "fct-signature": "IO a-\u003e (a -\u003e IO b)-\u003e (a -\u003e m c)-\u003e m c",
        "fct-type": "function",
        "title": "bracketIO"
      },
      "index": {
        "description": "Guarantees that an IO operation will be performed before an after executing MonadIOUnwrappable monad The operation will be performed even if the MonadIO contains error monads that fails or if an exception is raised",
        "hierarchy": "Control Monad IO MonadIOException",
        "module": "Control.Monad.IO.MonadIOException",
        "name": "bracketIO",
        "normalized": "IO a-\u003e(a-\u003eIO b)-\u003e(a-\u003ec d)-\u003ec d",
        "package": "monadio-unwrappable",
        "partial": "IO",
        "signature": "IO a-\u003e(a-\u003eIO b)-\u003e(a-\u003em c)-\u003em c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadio-unwrappable/docs/Control-Monad-IO-Unwrappable.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eContains a class and instance for MonadIO implementations that can be run directly in MonadIO and\n | then reconstructed to the original type, without changing the overall semantics.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.IO.Unwrappable",
        "fct-package": "monadio-unwrappable",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-IO-Unwrappable.html",
        "fct-type": "module",
        "title": "Unwrappable"
      },
      "index": {
        "description": "Contains class and instance for MonadIO implementations that can be run directly in MonadIO and then reconstructed to the original type without changing the overall semantics",
        "hierarchy": "Control Monad IO Unwrappable",
        "module": "Control.Monad.IO.Unwrappable",
        "name": "Unwrappable",
        "normalized": "",
        "package": "monadio-unwrappable",
        "partial": "Unwrappable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadio-unwrappable/docs/Control-Monad-IO-Unwrappable.html#t:MonadIOUnwrappable",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents a MonadIO where any change further up the monad stack can be\n | represented lower down in the stack.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.IO.Unwrappable",
        "fct-package": "monadio-unwrappable",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-IO-Unwrappable.html#MonadIOUnwrappable",
        "fct-type": "class",
        "title": "MonadIOUnwrappable"
      },
      "index": {
        "description": "Represents MonadIO where any change further up the monad stack can be represented lower down in the stack",
        "hierarchy": "Control Monad IO Unwrappable",
        "module": "Control.Monad.IO.Unwrappable",
        "name": "MonadIOUnwrappable",
        "normalized": "",
        "package": "monadio-unwrappable",
        "partial": "Monad IOUnwrappable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadio-unwrappable/docs/Control-Monad-IO-Unwrappable.html#v:rewrapMonadIO",
      "description": {
        "fct-descr": "\u003cp\u003eReverses a previous unwrapMonadIO operation.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.IO.Unwrappable",
        "fct-package": "monadio-unwrappable",
        "fct-signature": "MonadIOStateType m -\u003e MonadIOWrapType m a -\u003e m a",
        "fct-source": "src/Control-Monad-IO-Unwrappable.html#rewrapMonadIO",
        "fct-type": "method",
        "title": "rewrapMonadIO"
      },
      "index": {
        "description": "Reverses previous unwrapMonadIO operation",
        "hierarchy": "Control Monad IO Unwrappable",
        "module": "Control.Monad.IO.Unwrappable",
        "name": "rewrapMonadIO",
        "normalized": "MonadIOStateType a-\u003eMonadIOWrapType a b-\u003ea b",
        "package": "monadio-unwrappable",
        "partial": "Monad IO",
        "signature": "MonadIOStateType m-\u003eMonadIOWrapType m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadio-unwrappable/docs/Control-Monad-IO-Unwrappable.html#v:unwrapMonadIO",
      "description": {
        "fct-descr": "\u003cp\u003eMaps the monad to only use IO level constructs and the state set up \n | using unwrapState.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.IO.Unwrappable",
        "fct-package": "monadio-unwrappable",
        "fct-signature": "MonadIOStateType m -\u003e m a -\u003e IO (MonadIOWrapType m a)",
        "fct-source": "src/Control-Monad-IO-Unwrappable.html#unwrapMonadIO",
        "fct-type": "method",
        "title": "unwrapMonadIO"
      },
      "index": {
        "description": "Maps the monad to only use IO level constructs and the state set up using unwrapState",
        "hierarchy": "Control Monad IO Unwrappable",
        "module": "Control.Monad.IO.Unwrappable",
        "name": "unwrapMonadIO",
        "normalized": "MonadIOStateType a-\u003ea b-\u003eIO(MonadIOWrapType a b)",
        "package": "monadio-unwrappable",
        "partial": "Monad IO",
        "signature": "MonadIOStateType m-\u003em a-\u003eIO(MonadIOWrapType m a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadio-unwrappable/docs/Control-Monad-IO-Unwrappable.html#v:unwrapState",
      "description": {
        "fct-descr": "\u003cp\u003eSets up state (e.g. an IORef) to be used to simulate the monad from the\n | IO monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.IO.Unwrappable",
        "fct-package": "monadio-unwrappable",
        "fct-signature": "m (MonadIOStateType m)",
        "fct-source": "src/Control-Monad-IO-Unwrappable.html#unwrapState",
        "fct-type": "method",
        "title": "unwrapState"
      },
      "index": {
        "description": "Sets up state e.g an IORef to be used to simulate the monad from the IO monad",
        "hierarchy": "Control Monad IO Unwrappable",
        "module": "Control.Monad.IO.Unwrappable",
        "name": "unwrapState",
        "normalized": "",
        "package": "monadio-unwrappable",
        "partial": "State",
        "signature": ""
      }
    }
  }
]