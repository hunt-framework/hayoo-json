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
        "word": "monadio-unwrappable"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.IO.MonadIOException",
          "name": "MonadIOException",
          "package": "monadio-unwrappable",
          "source": "src/Control-Monad-IO-MonadIOException.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Monad IO MonadIOException",
          "module": "Control.Monad.IO.MonadIOException",
          "name": "MonadIOException",
          "package": "monadio-unwrappable",
          "partial": "Monad IOException",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monadio-unwrappable/docs/Control-Monad-IO-MonadIOException.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGuarantees that an IO operation will be performed before an after executing\n | a MonadIOUnwrappable monad. The operation will be performed even if the\n | MonadIO contains error monads that fails, or if an exception is raised.\n\u003c/p\u003e",
          "module": "Control.Monad.IO.MonadIOException",
          "name": "bracketIO",
          "package": "monadio-unwrappable",
          "signature": "IO a-\u003e (a -\u003e IO b)-\u003e (a -\u003e m c)-\u003e m c",
          "type": "function"
        },
        "index": {
          "description": "Guarantees that an IO operation will be performed before an after executing MonadIOUnwrappable monad The operation will be performed even if the MonadIO contains error monads that fails or if an exception is raised",
          "hierarchy": "Control Monad IO MonadIOException",
          "module": "Control.Monad.IO.MonadIOException",
          "name": "bracketIO",
          "normalized": "IO a-\u003e(a-\u003eIO b)-\u003e(a-\u003ec d)-\u003ec d",
          "package": "monadio-unwrappable",
          "partial": "IO",
          "signature": "IO a-\u003e(a-\u003eIO b)-\u003e(a-\u003em c)-\u003em c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadio-unwrappable/docs/Control-Monad-IO-MonadIOException.html#v:bracketIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eContains a class and instance for MonadIO implementations that can be run directly in MonadIO and\n | then reconstructed to the original type, without changing the overall semantics.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.IO.Unwrappable",
          "name": "Unwrappable",
          "package": "monadio-unwrappable",
          "source": "src/Control-Monad-IO-Unwrappable.html",
          "type": "module"
        },
        "index": {
          "description": "Contains class and instance for MonadIO implementations that can be run directly in MonadIO and then reconstructed to the original type without changing the overall semantics",
          "hierarchy": "Control Monad IO Unwrappable",
          "module": "Control.Monad.IO.Unwrappable",
          "name": "Unwrappable",
          "package": "monadio-unwrappable",
          "partial": "Unwrappable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monadio-unwrappable/docs/Control-Monad-IO-Unwrappable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a MonadIO where any change further up the monad stack can be\n | represented lower down in the stack.\n\u003c/p\u003e",
          "module": "Control.Monad.IO.Unwrappable",
          "name": "MonadIOUnwrappable",
          "package": "monadio-unwrappable",
          "source": "src/Control-Monad-IO-Unwrappable.html#MonadIOUnwrappable",
          "type": "class"
        },
        "index": {
          "description": "Represents MonadIO where any change further up the monad stack can be represented lower down in the stack",
          "hierarchy": "Control Monad IO Unwrappable",
          "module": "Control.Monad.IO.Unwrappable",
          "name": "MonadIOUnwrappable",
          "package": "monadio-unwrappable",
          "partial": "Monad IOUnwrappable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monadio-unwrappable/docs/Control-Monad-IO-Unwrappable.html#t:MonadIOUnwrappable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReverses a previous unwrapMonadIO operation.\n\u003c/p\u003e",
          "module": "Control.Monad.IO.Unwrappable",
          "name": "rewrapMonadIO",
          "package": "monadio-unwrappable",
          "signature": "MonadIOStateType m -\u003e MonadIOWrapType m a -\u003e m a",
          "source": "src/Control-Monad-IO-Unwrappable.html#rewrapMonadIO",
          "type": "method"
        },
        "index": {
          "description": "Reverses previous unwrapMonadIO operation",
          "hierarchy": "Control Monad IO Unwrappable",
          "module": "Control.Monad.IO.Unwrappable",
          "name": "rewrapMonadIO",
          "normalized": "MonadIOStateType a-\u003eMonadIOWrapType a b-\u003ea b",
          "package": "monadio-unwrappable",
          "partial": "Monad IO",
          "signature": "MonadIOStateType m-\u003eMonadIOWrapType m a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monadio-unwrappable/docs/Control-Monad-IO-Unwrappable.html#v:rewrapMonadIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaps the monad to only use IO level constructs and the state set up \n | using unwrapState.\n\u003c/p\u003e",
          "module": "Control.Monad.IO.Unwrappable",
          "name": "unwrapMonadIO",
          "package": "monadio-unwrappable",
          "signature": "MonadIOStateType m -\u003e m a -\u003e IO (MonadIOWrapType m a)",
          "source": "src/Control-Monad-IO-Unwrappable.html#unwrapMonadIO",
          "type": "method"
        },
        "index": {
          "description": "Maps the monad to only use IO level constructs and the state set up using unwrapState",
          "hierarchy": "Control Monad IO Unwrappable",
          "module": "Control.Monad.IO.Unwrappable",
          "name": "unwrapMonadIO",
          "normalized": "MonadIOStateType a-\u003ea b-\u003eIO(MonadIOWrapType a b)",
          "package": "monadio-unwrappable",
          "partial": "Monad IO",
          "signature": "MonadIOStateType m-\u003em a-\u003eIO(MonadIOWrapType m a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monadio-unwrappable/docs/Control-Monad-IO-Unwrappable.html#v:unwrapMonadIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets up state (e.g. an IORef) to be used to simulate the monad from the\n | IO monad.\n\u003c/p\u003e",
          "module": "Control.Monad.IO.Unwrappable",
          "name": "unwrapState",
          "package": "monadio-unwrappable",
          "signature": "m (MonadIOStateType m)",
          "source": "src/Control-Monad-IO-Unwrappable.html#unwrapState",
          "type": "method"
        },
        "index": {
          "description": "Sets up state e.g an IORef to be used to simulate the monad from the IO monad",
          "hierarchy": "Control Monad IO Unwrappable",
          "module": "Control.Monad.IO.Unwrappable",
          "name": "unwrapState",
          "package": "monadio-unwrappable",
          "partial": "State",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monadio-unwrappable/docs/Control-Monad-IO-Unwrappable.html#v:unwrapState"
      }
    }
  ]
]