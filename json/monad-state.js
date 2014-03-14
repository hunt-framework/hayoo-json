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
        "word": "monad-state"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Abort.Class",
          "name": "Class",
          "package": "monad-state",
          "source": "src/Control-Monad-Abort-Class.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Monad Abort Class",
          "module": "Control.Monad.Abort.Class",
          "name": "Class",
          "package": "monad-state",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Abort-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn abort monad, parametrized by the type \u003ccode\u003er\u003c/code\u003e of the value to return.\n\u003c/p\u003e",
          "module": "Control.Monad.Abort.Class",
          "name": "Abort",
          "package": "monad-state",
          "type": "type"
        },
        "index": {
          "description": "An abort monad parametrized by the type of the value to return",
          "hierarchy": "Control Monad Abort Class",
          "module": "Control.Monad.Abort.Class",
          "name": "Abort",
          "package": "monad-state",
          "partial": "Abort",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Abort-Class.html#t:Abort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn abort monad transformer parametrized by\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003er\u003c/code\u003e - the value that will ultimately be returned; and\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003em\u003c/code\u003e - the inner monad.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eAbortT\u003c/a\u003e\u003c/code\u003e type wraps a monadic value that is either\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e \u003ccode\u003er\u003c/code\u003e, which indicates that the monadic computation has\n     terminated with result \u003ccode\u003er\u003c/code\u003e and so all further steps in the computation\n     should be ignored; or\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ea\u003c/code\u003e, which indicates that the computation is proceding normally\n     and that its current value is \u003ccode\u003ea\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.Monad.Abort.Class",
          "name": "AbortT",
          "package": "monad-state",
          "type": "newtype"
        },
        "index": {
          "description": "An abort monad transformer parametrized by the value that will ultimately be returned and the inner monad The AbortT type wraps monadic value that is either Left which indicates that the monadic computation has terminated with result and so all further steps in the computation should be ignored or Right which indicates that the computation is proceding normally and that its current value is",
          "hierarchy": "Control Monad Abort Class",
          "module": "Control.Monad.Abort.Class",
          "name": "AbortT",
          "package": "monad-state",
          "partial": "Abort",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Abort-Class.html#t:AbortT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Abort.Class",
          "name": "MonadAbort",
          "package": "monad-state",
          "source": "src/Control-Monad-Abort-Class.html#MonadAbort",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Monad Abort Class",
          "module": "Control.Monad.Abort.Class",
          "name": "MonadAbort",
          "package": "monad-state",
          "partial": "Monad Abort",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Abort-Class.html#t:MonadAbort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Control.Monad.Abort.Class\",\"Control.Monad.Abort\"]",
          "name": "AbortT",
          "package": "monad-state",
          "signature": "AbortT",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Abort-Class.html#v:AbortT\",\"http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Abort.html#v:AbortT\"]"
        },
        "index": {
          "hierarchy": "Control Monad Abort Class",
          "module": "Control.Monad.Abort.Class",
          "name": "AbortT",
          "package": "monad-state",
          "partial": "Abort",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Abort-Class.html#v:AbortT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Abort.Class",
          "name": "abort",
          "package": "monad-state",
          "signature": "AbortResultType m -\u003e m a",
          "source": "src/Control-Monad-Abort-Class.html#abort",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Abort Class",
          "module": "Control.Monad.Abort.Class",
          "name": "abort",
          "normalized": "AbortResultType a-\u003ea b",
          "package": "monad-state",
          "signature": "AbortResultType m-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Abort-Class.html#v:abort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Control.Monad.Abort.Class\",\"Control.Monad.Abort\"]",
          "name": "unwrapAbortT",
          "package": "monad-state",
          "signature": "m (Either r a)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Abort-Class.html#v:unwrapAbortT\",\"http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Abort.html#v:unwrapAbortT\"]"
        },
        "index": {
          "hierarchy": "Control Monad Abort Class",
          "module": "Control.Monad.Abort.Class",
          "name": "unwrapAbortT",
          "package": "monad-state",
          "partial": "Abort",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Abort-Class.html#v:unwrapAbortT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Abort.Instances",
          "name": "Instances",
          "package": "monad-state",
          "source": "src/Control-Monad-Abort-Instances.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Monad Abort Instances",
          "module": "Control.Monad.Abort.Instances",
          "name": "Instances",
          "package": "monad-state",
          "partial": "Instances",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Abort-Instances.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Control.Monad.Abort.Instances\",\"Control.Monad.Abort\"]",
          "name": "mapAbortT",
          "package": "monad-state",
          "signature": "(m (Either r a) -\u003e n (Either r' b)) -\u003e AbortT r m a -\u003e AbortT r' n b",
          "source": "src/Control-Monad-Abort-Instances.html#mapAbortT",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Abort-Instances.html#v:mapAbortT\",\"http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Abort.html#v:mapAbortT\"]"
        },
        "index": {
          "hierarchy": "Control Monad Abort Instances",
          "module": "Control.Monad.Abort.Instances",
          "name": "mapAbortT",
          "normalized": "(a(Either b c)-\u003ed(Either e f))-\u003eAbortT b a c-\u003eAbortT e d f",
          "package": "monad-state",
          "partial": "Abort",
          "signature": "(m(Either r a)-\u003en(Either r' b))-\u003eAbortT r m a-\u003eAbortT r' n b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Abort-Instances.html#v:mapAbortT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Abort",
          "name": "Abort",
          "package": "monad-state",
          "source": "src/Control-Monad-Abort.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Monad Abort",
          "module": "Control.Monad.Abort",
          "name": "Abort",
          "package": "monad-state",
          "partial": "Abort",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Abort.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn abort monad, parametrized by the type \u003ccode\u003er\u003c/code\u003e of the value to return.\n\u003c/p\u003e",
          "module": "Control.Monad.Abort",
          "name": "Abort",
          "package": "monad-state",
          "type": "type"
        },
        "index": {
          "description": "An abort monad parametrized by the type of the value to return",
          "hierarchy": "Control Monad Abort",
          "module": "Control.Monad.Abort",
          "name": "Abort",
          "package": "monad-state",
          "partial": "Abort",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Abort.html#t:Abort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn abort monad transformer parametrized by\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003er\u003c/code\u003e - the value that will ultimately be returned; and\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003em\u003c/code\u003e - the inner monad.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eAbortT\u003c/a\u003e\u003c/code\u003e type wraps a monadic value that is either\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e \u003ccode\u003er\u003c/code\u003e, which indicates that the monadic computation has\n     terminated with result \u003ccode\u003er\u003c/code\u003e and so all further steps in the computation\n     should be ignored; or\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ea\u003c/code\u003e, which indicates that the computation is proceding normally\n     and that its current value is \u003ccode\u003ea\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.Monad.Abort",
          "name": "AbortT",
          "package": "monad-state",
          "type": "newtype"
        },
        "index": {
          "description": "An abort monad transformer parametrized by the value that will ultimately be returned and the inner monad The AbortT type wraps monadic value that is either Left which indicates that the monadic computation has terminated with result and so all further steps in the computation should be ignored or Right which indicates that the computation is proceding normally and that its current value is",
          "hierarchy": "Control Monad Abort",
          "module": "Control.Monad.Abort",
          "name": "AbortT",
          "package": "monad-state",
          "partial": "Abort",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Abort.html#t:AbortT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Abort",
          "name": "MonadAbort",
          "package": "monad-state",
          "source": "src/Control-Monad-Abort-Class.html#MonadAbort",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Monad Abort",
          "module": "Control.Monad.Abort",
          "name": "MonadAbort",
          "package": "monad-state",
          "partial": "Monad Abort",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Abort.html#t:MonadAbort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Abort",
          "name": "abort",
          "package": "monad-state",
          "signature": "AbortResultType m -\u003e m a",
          "source": "src/Control-Monad-Abort-Class.html#abort",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Abort",
          "module": "Control.Monad.Abort",
          "name": "abort",
          "normalized": "AbortResultType a-\u003ea b",
          "package": "monad-state",
          "signature": "AbortResultType m-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Abort.html#v:abort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute the abort monad computation and return the resulting value.\n\u003c/p\u003e",
          "module": "Control.Monad.Abort",
          "name": "runAbort",
          "package": "monad-state",
          "signature": "Abort r r-\u003e r",
          "type": "function"
        },
        "index": {
          "description": "Execute the abort monad computation and return the resulting value",
          "hierarchy": "Control Monad Abort",
          "module": "Control.Monad.Abort",
          "name": "runAbort",
          "normalized": "Abort a a-\u003ea",
          "package": "monad-state",
          "partial": "Abort",
          "signature": "Abort r r-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Abort.html#v:runAbort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute the abort monad computation and return the resulting\n   (monadic) value.\n\u003c/p\u003e",
          "module": "Control.Monad.Abort",
          "name": "runAbortT",
          "package": "monad-state",
          "signature": "AbortT r m r-\u003e m r",
          "type": "function"
        },
        "index": {
          "description": "Execute the abort monad computation and return the resulting monadic value",
          "hierarchy": "Control Monad Abort",
          "module": "Control.Monad.Abort",
          "name": "runAbortT",
          "normalized": "AbortT a b a-\u003eb a",
          "package": "monad-state",
          "partial": "Abort",
          "signature": "AbortT r m r-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Abort.html#v:runAbortT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Record",
          "name": "Record",
          "package": "monad-state",
          "source": "src/Control-Monad-Record.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Monad Record",
          "module": "Control.Monad.Record",
          "name": "Record",
          "package": "monad-state",
          "partial": "Record",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Record.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Record",
          "name": ":--\u003e",
          "package": "monad-state",
          "source": "src/Control-Monad-Record.html#%3A--%3E",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Control Monad Record",
          "module": "Control.Monad.Record",
          "name": ":--\u003e",
          "package": "monad-state",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Record.html#t::-45--45--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Record",
          "name": "MLens",
          "package": "monad-state",
          "source": "src/Control-Monad-Record.html#MLens",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Monad Record",
          "module": "Control.Monad.Record",
          "name": "MLens",
          "package": "monad-state",
          "partial": "MLens",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Record.html#t:MLens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emodL\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.Record",
          "name": "($:)",
          "package": "monad-state",
          "signature": "(f :-\u003e a) -\u003e (a -\u003e a) -\u003e f -\u003e f",
          "source": "src/Control-Monad-Record.html#%24%3A",
          "type": "function"
        },
        "index": {
          "description": "modL",
          "hierarchy": "Control Monad Record",
          "module": "Control.Monad.Record",
          "name": "($:) $:",
          "normalized": "(a-\u003eb)-\u003e(b-\u003eb)-\u003ea-\u003ea",
          "package": "monad-state",
          "signature": "(f-\u003ea)-\u003e(a-\u003ea)-\u003ef-\u003ef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Record.html#v:-36-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emodM\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.Record",
          "name": "($::)",
          "package": "monad-state",
          "signature": "(StateType m :-\u003e a) -\u003e (a -\u003e a) -\u003e m ()",
          "source": "src/Control-Monad-Record.html#%24%3A%3A",
          "type": "function"
        },
        "index": {
          "description": "modM",
          "hierarchy": "Control Monad Record",
          "module": "Control.Monad.Record",
          "name": "($::) $::",
          "normalized": "(StateType a-\u003eb)-\u003e(b-\u003eb)-\u003ea()",
          "package": "monad-state",
          "signature": "(StateType m-\u003ea)-\u003e(a-\u003ea)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Record.html#v:-36-::"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emodMAbort\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.Record",
          "name": "(\u003c$:)",
          "package": "monad-state",
          "signature": "l (StateType m) b -\u003e (MLensA l b :-\u003e a) -\u003e (a -\u003e a) -\u003e m ()",
          "source": "src/Control-Monad-Record.html#%3C%24%3A",
          "type": "function"
        },
        "index": {
          "description": "modMAbort",
          "hierarchy": "Control Monad Record",
          "module": "Control.Monad.Record",
          "name": "(\u003c$:) \u003c$:",
          "normalized": "a(StateType b)c-\u003e(MLensA a c-\u003ed)-\u003e(d-\u003ed)-\u003eb()",
          "package": "monad-state",
          "signature": "l(StateType m)b-\u003e(MLensA l b-\u003ea)-\u003e(a-\u003ea)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Record.html#v:-60--36-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Record",
          "name": "(\u003c-\u003e)",
          "package": "monad-state",
          "signature": "l (MLensA l' a') a -\u003e l' f a' -\u003e f :--\u003e MLensA l a",
          "source": "src/Control-Monad-Record.html#%3C-%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Record",
          "module": "Control.Monad.Record",
          "name": "(\u003c-\u003e) \u003c-\u003e",
          "normalized": "a(MLensA b c)d-\u003eb e c-\u003ee-\u003eMLensA a d",
          "package": "monad-state",
          "signature": "l(MLensA l' a')a-\u003el' f a'-\u003ef-\u003eMLensA l a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Record.html#v:-60--45--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003egetMAbort\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.Record",
          "name": "(\u003c\u003c:)",
          "package": "monad-state",
          "signature": "r -\u003e l (StateType (AbortT r m)) b -\u003e (MLensA l b :-\u003e a) -\u003e AbortT r m a",
          "source": "src/Control-Monad-Record.html#%3C%3C%3A",
          "type": "function"
        },
        "index": {
          "description": "getMAbort",
          "hierarchy": "Control Monad Record",
          "module": "Control.Monad.Record",
          "name": "(\u003c\u003c:) \u003c\u003c:",
          "normalized": "a-\u003eb(StateType(AbortT a c))d-\u003e(MLensA b d-\u003ee)-\u003eAbortT a c e",
          "package": "monad-state",
          "signature": "r-\u003el(StateType(AbortT r m))b-\u003e(MLensA l b-\u003ea)-\u003eAbortT r m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Record.html#v:-60--60-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003egetMAbort\u003c/a\u003e\u003c/code\u003e ()\n\u003c/p\u003e",
          "module": "Control.Monad.Record",
          "name": "(\u003c\u003c::)",
          "package": "monad-state",
          "signature": "l (StateType (AbortT r m)) b -\u003e (MLensA l b :-\u003e a) -\u003e AbortT () m a",
          "source": "src/Control-Monad-Record.html#%3C%3C%3A%3A",
          "type": "function"
        },
        "index": {
          "description": "getMAbort",
          "hierarchy": "Control Monad Record",
          "module": "Control.Monad.Record",
          "name": "(\u003c\u003c::) \u003c\u003c::",
          "normalized": "a(StateType(AbortT b c))d-\u003e(MLensA a d-\u003ee)-\u003eAbortT()c e",
          "package": "monad-state",
          "signature": "l(StateType(AbortT r m))b-\u003e(MLensA l b-\u003ea)-\u003eAbortT()m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Record.html#v:-60--60-::"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esetMAbort\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.Record",
          "name": "(\u003c=:)",
          "package": "monad-state",
          "signature": "l (StateType m) b -\u003e (MLensA l b :-\u003e a) -\u003e a -\u003e m ()",
          "source": "src/Control-Monad-Record.html#%3C%3D%3A",
          "type": "function"
        },
        "index": {
          "description": "setMAbort",
          "hierarchy": "Control Monad Record",
          "module": "Control.Monad.Record",
          "name": "(\u003c=:) \u003c=:",
          "normalized": "a(StateType b)c-\u003e(MLensA a c-\u003ed)-\u003ed-\u003eb()",
          "package": "monad-state",
          "signature": "l(StateType m)b-\u003e(MLensA l b-\u003ea)-\u003ea-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Record.html#v:-60--61-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003egetL\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.Record",
          "name": "(\u003c:)",
          "package": "monad-state",
          "signature": "(f :-\u003e a) -\u003e f -\u003e a",
          "source": "src/Control-Monad-Record.html#%3C%3A",
          "type": "function"
        },
        "index": {
          "description": "getL",
          "hierarchy": "Control Monad Record",
          "module": "Control.Monad.Record",
          "name": "(\u003c:) \u003c:",
          "normalized": "(a-\u003eb)-\u003ea-\u003eb",
          "package": "monad-state",
          "signature": "(f-\u003ea)-\u003ef-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Record.html#v:-60-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003easkM\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.Record",
          "name": "(\u003c:\u003c)",
          "package": "monad-state",
          "signature": "(EnvType m :-\u003e a) -\u003e m a",
          "source": "src/Control-Monad-Record.html#%3C%3A%3C",
          "type": "function"
        },
        "index": {
          "description": "askM",
          "hierarchy": "Control Monad Record",
          "module": "Control.Monad.Record",
          "name": "(\u003c:\u003c) \u003c:\u003c",
          "normalized": "(EnvType a-\u003eb)-\u003ea b",
          "package": "monad-state",
          "signature": "(EnvType m-\u003ea)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Record.html#v:-60-:-60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003egetM\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.Record",
          "name": "(\u003c::)",
          "package": "monad-state",
          "signature": "(StateType m :-\u003e a) -\u003e m a",
          "source": "src/Control-Monad-Record.html#%3C%3A%3A",
          "type": "function"
        },
        "index": {
          "description": "getM",
          "hierarchy": "Control Monad Record",
          "module": "Control.Monad.Record",
          "name": "(\u003c::) \u003c::",
          "normalized": "(StateType a-\u003eb)-\u003ea b",
          "package": "monad-state",
          "signature": "(StateType m-\u003ea)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Record.html#v:-60-::"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esetL\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.Record",
          "name": "(=:)",
          "package": "monad-state",
          "signature": "(f :-\u003e a) -\u003e a -\u003e f -\u003e f",
          "source": "src/Control-Monad-Record.html#%3D%3A",
          "type": "function"
        },
        "index": {
          "description": "setL",
          "hierarchy": "Control Monad Record",
          "module": "Control.Monad.Record",
          "name": "(=:) =:",
          "normalized": "(a-\u003eb)-\u003eb-\u003ea-\u003ea",
          "package": "monad-state",
          "signature": "(f-\u003ea)-\u003ea-\u003ef-\u003ef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Record.html#v:-61-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esetM\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.Record",
          "name": "(=::)",
          "package": "monad-state",
          "signature": "(StateType m :-\u003e a) -\u003e a -\u003e m ()",
          "source": "src/Control-Monad-Record.html#%3D%3A%3A",
          "type": "function"
        },
        "index": {
          "description": "setM",
          "hierarchy": "Control Monad Record",
          "module": "Control.Monad.Record",
          "name": "(=::) =::",
          "normalized": "(StateType a-\u003eb)-\u003eb-\u003ea()",
          "package": "monad-state",
          "signature": "(StateType m-\u003ea)-\u003ea-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Record.html#v:-61-::"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eliftSubMaybeState\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.Record",
          "name": "(\u003e$$\u003e)",
          "package": "monad-state",
          "signature": "l s a -\u003e StateT (MLensA l a) m a1 -\u003e MaybeT (StateT s m) a1",
          "source": "src/Control-Monad-Record.html#%3E%24%24%3E",
          "type": "function"
        },
        "index": {
          "description": "liftSubMaybeState",
          "hierarchy": "Control Monad Record",
          "module": "Control.Monad.Record",
          "name": "(\u003e$$\u003e) \u003e$$\u003e",
          "normalized": "a b c-\u003eStateT(MLensA a c)d c-\u003eMaybeT(StateT b d)c",
          "package": "monad-state",
          "signature": "l s a-\u003eStateT(MLensA l a)m a-\u003eMaybeT(StateT s m)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Record.html#v:-62--36--36--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eliftState\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.Record",
          "name": "(\u003e$\u003c)",
          "package": "monad-state",
          "signature": "(StateType m :-\u003e s) -\u003e StateT s m a -\u003e m a",
          "source": "src/Control-Monad-Record.html#%3E%24%3C",
          "type": "function"
        },
        "index": {
          "description": "liftState",
          "hierarchy": "Control Monad Record",
          "module": "Control.Monad.Record",
          "name": "(\u003e$\u003c) \u003e$\u003c",
          "normalized": "(StateType a-\u003eb)-\u003eStateT b a c-\u003ea c",
          "package": "monad-state",
          "signature": "(StateType m-\u003es)-\u003eStateT s m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Record.html#v:-62--36--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eliftSubState\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.Record",
          "name": "(\u003e$\u003e)",
          "package": "monad-state",
          "signature": "(s :-\u003e s') -\u003e StateT s' m a -\u003e StateT s m a",
          "source": "src/Control-Monad-Record.html#%3E%24%3E",
          "type": "function"
        },
        "index": {
          "description": "liftSubState",
          "hierarchy": "Control Monad Record",
          "module": "Control.Monad.Record",
          "name": "(\u003e$\u003e) \u003e$\u003e",
          "normalized": "(a-\u003eb)-\u003eStateT b c d-\u003eStateT a c d",
          "package": "monad-state",
          "signature": "(s-\u003es')-\u003eStateT s' m a-\u003eStateT s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Record.html#v:-62--36--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Record",
          "name": "MaybeLens",
          "package": "monad-state",
          "signature": "MaybeLens",
          "source": "src/Control-Monad-Record.html#%3A--%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Record",
          "module": "Control.Monad.Record",
          "name": "MaybeLens",
          "package": "monad-state",
          "partial": "Maybe Lens",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Record.html#v:MaybeLens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Record",
          "name": "askM",
          "package": "monad-state",
          "signature": "(EnvType m :-\u003e a) -\u003e m a",
          "source": "src/Control-Monad-Record.html#askM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Record",
          "module": "Control.Monad.Record",
          "name": "askM",
          "normalized": "(EnvType a-\u003eb)-\u003ea b",
          "package": "monad-state",
          "signature": "(EnvType m-\u003ea)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Record.html#v:askM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Record",
          "name": "getM",
          "package": "monad-state",
          "signature": "(StateType m :-\u003e a) -\u003e m a",
          "source": "src/Control-Monad-Record.html#getM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Record",
          "module": "Control.Monad.Record",
          "name": "getM",
          "normalized": "(StateType a-\u003eb)-\u003ea b",
          "package": "monad-state",
          "signature": "(StateType m-\u003ea)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Record.html#v:getM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Record",
          "name": "getMAbort",
          "package": "monad-state",
          "signature": "r -\u003e l (StateType (AbortT r m)) b -\u003e (MLensA l b :-\u003e a) -\u003e AbortT r m a",
          "source": "src/Control-Monad-Record.html#getMAbort",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Record",
          "module": "Control.Monad.Record",
          "name": "getMAbort",
          "normalized": "a-\u003eb(StateType(AbortT a c))d-\u003e(MLensA b d-\u003ee)-\u003eAbortT a c e",
          "package": "monad-state",
          "partial": "MAbort",
          "signature": "r-\u003el(StateType(AbortT r m))b-\u003e(MLensA l b-\u003ea)-\u003eAbortT r m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Record.html#v:getMAbort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Record",
          "name": "liftState",
          "package": "monad-state",
          "signature": "(StateType m :-\u003e s) -\u003e StateT s m a -\u003e m a",
          "source": "src/Control-Monad-Record.html#liftState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Record",
          "module": "Control.Monad.Record",
          "name": "liftState",
          "normalized": "(StateType a-\u003eb)-\u003eStateT b a c-\u003ea c",
          "package": "monad-state",
          "partial": "State",
          "signature": "(StateType m-\u003es)-\u003eStateT s m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Record.html#v:liftState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Record",
          "name": "liftSubMaybeState",
          "package": "monad-state",
          "signature": "l (StateType (t m)) a -\u003e StateT (MLensA l a) m a1 -\u003e MaybeT (t m) a1",
          "source": "src/Control-Monad-Record.html#liftSubMaybeState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Record",
          "module": "Control.Monad.Record",
          "name": "liftSubMaybeState",
          "normalized": "a(StateType(b c))d-\u003eStateT(MLensA a d)c d-\u003eMaybeT(b c)d",
          "package": "monad-state",
          "partial": "Sub Maybe State",
          "signature": "l(StateType(t m))a-\u003eStateT(MLensA l a)m a-\u003eMaybeT(t m)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Record.html#v:liftSubMaybeState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Record",
          "name": "liftSubState",
          "package": "monad-state",
          "signature": "(StateType (t m) :-\u003e s) -\u003e StateT s m a -\u003e t m a",
          "source": "src/Control-Monad-Record.html#liftSubState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Record",
          "module": "Control.Monad.Record",
          "name": "liftSubState",
          "normalized": "(StateType(a b)-\u003ec)-\u003eStateT c b d-\u003ea b d",
          "package": "monad-state",
          "partial": "Sub State",
          "signature": "(StateType(t m)-\u003es)-\u003eStateT s m a-\u003et m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Record.html#v:liftSubState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Record",
          "name": "maybeAbort",
          "package": "monad-state",
          "signature": "r -\u003e Maybe a -\u003e AbortT r m a",
          "source": "src/Control-Monad-Record.html#maybeAbort",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Record",
          "module": "Control.Monad.Record",
          "name": "maybeAbort",
          "normalized": "a-\u003eMaybe b-\u003eAbortT a c b",
          "package": "monad-state",
          "partial": "Abort",
          "signature": "r-\u003eMaybe a-\u003eAbortT r m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Record.html#v:maybeAbort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Record",
          "name": "maybeAbortM",
          "package": "monad-state",
          "signature": "AbortResultType (t m) -\u003e MaybeT m a -\u003e t m a",
          "source": "src/Control-Monad-Record.html#maybeAbortM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Record",
          "module": "Control.Monad.Record",
          "name": "maybeAbortM",
          "normalized": "AbortResultType(a b)-\u003eMaybeT b c-\u003ea b c",
          "package": "monad-state",
          "partial": "Abort",
          "signature": "AbortResultType(t m)-\u003eMaybeT m a-\u003et m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Record.html#v:maybeAbortM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Record",
          "name": "modM",
          "package": "monad-state",
          "signature": "(StateType m :-\u003e a) -\u003e (a -\u003e a) -\u003e m ()",
          "source": "src/Control-Monad-Record.html#modM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Record",
          "module": "Control.Monad.Record",
          "name": "modM",
          "normalized": "(StateType a-\u003eb)-\u003e(b-\u003eb)-\u003ea()",
          "package": "monad-state",
          "signature": "(StateType m-\u003ea)-\u003e(a-\u003ea)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Record.html#v:modM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Record",
          "name": "modMAbort",
          "package": "monad-state",
          "signature": "l (StateType m) b -\u003e (MLensA l b :-\u003e a) -\u003e (a -\u003e a) -\u003e m ()",
          "source": "src/Control-Monad-Record.html#modMAbort",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Record",
          "module": "Control.Monad.Record",
          "name": "modMAbort",
          "normalized": "a(StateType b)c-\u003e(MLensA a c-\u003ed)-\u003e(d-\u003ed)-\u003eb()",
          "package": "monad-state",
          "partial": "MAbort",
          "signature": "l(StateType m)b-\u003e(MLensA l b-\u003ea)-\u003e(a-\u003ea)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Record.html#v:modMAbort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Record",
          "name": "setM",
          "package": "monad-state",
          "signature": "(StateType m :-\u003e a) -\u003e a -\u003e m ()",
          "source": "src/Control-Monad-Record.html#setM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Record",
          "module": "Control.Monad.Record",
          "name": "setM",
          "normalized": "(StateType a-\u003eb)-\u003eb-\u003ea()",
          "package": "monad-state",
          "signature": "(StateType m-\u003ea)-\u003ea-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Record.html#v:setM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Record",
          "name": "setMAbort",
          "package": "monad-state",
          "signature": "l (StateType m) b -\u003e (MLensA l b :-\u003e a) -\u003e a -\u003e m ()",
          "source": "src/Control-Monad-Record.html#setMAbort",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Record",
          "module": "Control.Monad.Record",
          "name": "setMAbort",
          "normalized": "a(StateType b)c-\u003e(MLensA a c-\u003ed)-\u003ed-\u003eb()",
          "package": "monad-state",
          "partial": "MAbort",
          "signature": "l(StateType m)b-\u003e(MLensA l b-\u003ea)-\u003ea-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Record.html#v:setMAbort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Record",
          "name": "toLens",
          "package": "monad-state",
          "signature": "l f a -\u003e f :-\u003e Maybe (MLensA l a)",
          "source": "src/Control-Monad-Record.html#toLens",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Record",
          "module": "Control.Monad.Record",
          "name": "toLens",
          "normalized": "a b c-\u003eb-\u003eMaybe(MLensA a c)",
          "package": "monad-state",
          "partial": "Lens",
          "signature": "l f a-\u003ef-\u003eMaybe(MLensA l a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Record.html#v:toLens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Record",
          "name": "unMaybeLens",
          "package": "monad-state",
          "signature": "f :-\u003e Maybe a",
          "source": "src/Control-Monad-Record.html#%3A--%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Record",
          "module": "Control.Monad.Record",
          "name": "unMaybeLens",
          "normalized": "a-\u003eMaybe b",
          "package": "monad-state",
          "partial": "Maybe Lens",
          "signature": "f-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Record.html#v:unMaybeLens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Runnable",
          "name": "Runnable",
          "package": "monad-state",
          "source": "src/Control-Monad-Runnable.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Monad Runnable",
          "module": "Control.Monad.Runnable",
          "name": "Runnable",
          "package": "monad-state",
          "partial": "Runnable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Runnable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonads that can be run in the IO monad\n\u003c/p\u003e",
          "module": "Control.Monad.Runnable",
          "name": "MonadRunnable",
          "package": "monad-state",
          "source": "src/Control-Monad-Runnable.html#MonadRunnable",
          "type": "class"
        },
        "index": {
          "description": "Monads that can be run in the IO monad",
          "hierarchy": "Control Monad Runnable",
          "module": "Control.Monad.Runnable",
          "name": "MonadRunnable",
          "package": "monad-state",
          "partial": "Monad Runnable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Runnable.html#t:MonadRunnable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Runnable",
          "name": "RunnableContainer",
          "package": "monad-state",
          "source": "src/Control-Monad-Runnable.html#RunnableContainer",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Monad Runnable",
          "module": "Control.Monad.Runnable",
          "name": "RunnableContainer",
          "package": "monad-state",
          "partial": "Runnable Container",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Runnable.html#t:RunnableContainer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Runnable",
          "name": "construct",
          "package": "monad-state",
          "signature": "ConstructType m a -\u003e m a",
          "source": "src/Control-Monad-Runnable.html#construct",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Runnable",
          "module": "Control.Monad.Runnable",
          "name": "construct",
          "normalized": "ConstructType a b-\u003ea b",
          "package": "monad-state",
          "signature": "ConstructType m a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Runnable.html#v:construct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Runnable",
          "name": "rcToIO",
          "package": "monad-state",
          "signature": "m a -\u003e IO a",
          "source": "src/Control-Monad-Runnable.html#rcToIO",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Runnable",
          "module": "Control.Monad.Runnable",
          "name": "rcToIO",
          "normalized": "a b-\u003eIO b",
          "package": "monad-state",
          "partial": "To IO",
          "signature": "m a-\u003eIO a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Runnable.html#v:rcToIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Runnable",
          "name": "run",
          "package": "monad-state",
          "signature": "m a -\u003e RunData m -\u003e RunContainer m (ConstructType m a)",
          "source": "src/Control-Monad-Runnable.html#run",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Runnable",
          "module": "Control.Monad.Runnable",
          "name": "run",
          "normalized": "a b-\u003eRunData a-\u003eRunContainer a(ConstructType a b)",
          "package": "monad-state",
          "signature": "m a-\u003eRunData m-\u003eRunContainer m(ConstructType m a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Runnable.html#v:run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Runnable",
          "name": "runData",
          "package": "monad-state",
          "signature": "m (RunData m)",
          "source": "src/Control-Monad-Runnable.html#runData",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Runnable",
          "module": "Control.Monad.Runnable",
          "name": "runData",
          "package": "monad-state",
          "partial": "Data",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Runnable.html#v:runData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Short",
          "name": "Short",
          "package": "monad-state",
          "source": "src/Control-Monad-Short.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Monad Short",
          "module": "Control.Monad.Short",
          "name": "Short",
          "package": "monad-state",
          "partial": "Short",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Short.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Short",
          "name": "MonadErrorShortable",
          "package": "monad-state",
          "source": "src/Control-Monad-Short.html#MonadErrorShortable",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Monad Short",
          "module": "Control.Monad.Short",
          "name": "MonadErrorShortable",
          "package": "monad-state",
          "partial": "Monad Error Shortable",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Short.html#t:MonadErrorShortable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMinimal complete definition: unError\n\u003c/p\u003e",
          "module": "Control.Monad.Short",
          "name": "MonadShort",
          "package": "monad-state",
          "source": "src/Control-Monad-Short.html#MonadShort",
          "type": "class"
        },
        "index": {
          "description": "Minimal complete definition unError",
          "hierarchy": "Control Monad Short",
          "module": "Control.Monad.Short",
          "name": "MonadShort",
          "package": "monad-state",
          "partial": "Monad Short",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Short.html#t:MonadShort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Short",
          "name": "MonadShortable",
          "package": "monad-state",
          "source": "src/Control-Monad-Short.html#MonadShortable",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Monad Short",
          "module": "Control.Monad.Short",
          "name": "MonadShortable",
          "package": "monad-state",
          "partial": "Monad Shortable",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Short.html#t:MonadShortable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Short",
          "name": "short",
          "package": "monad-state",
          "signature": "m a -\u003e MonadShortable r m a",
          "source": "src/Control-Monad-Short.html#short",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Short",
          "module": "Control.Monad.Short",
          "name": "short",
          "normalized": "a b-\u003eMonadShortable c a b",
          "package": "monad-state",
          "signature": "m a-\u003eMonadShortable r m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Short.html#v:short"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Short",
          "name": "unError",
          "package": "monad-state",
          "signature": "r -\u003e MonadErrorShortable m a -\u003e MonadShortable r m a",
          "source": "src/Control-Monad-Short.html#unError",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Short",
          "module": "Control.Monad.Short",
          "name": "unError",
          "normalized": "a-\u003eMonadErrorShortable b c-\u003eMonadShortable a b c",
          "package": "monad-state",
          "partial": "Error",
          "signature": "r-\u003eMonadErrorShortable m a-\u003eMonadShortable r m a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Short.html#v:unError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Short",
          "name": "unErrorShort",
          "package": "monad-state",
          "signature": "r -\u003e MonadErrorShortable m r -\u003e m r",
          "source": "src/Control-Monad-Short.html#unErrorShort",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Short",
          "module": "Control.Monad.Short",
          "name": "unErrorShort",
          "normalized": "a-\u003eMonadErrorShortable b a-\u003eb a",
          "package": "monad-state",
          "partial": "Error Short",
          "signature": "r-\u003eMonadErrorShortable m r-\u003em r",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Short.html#v:unErrorShort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Short",
          "name": "unErrorShort_",
          "package": "monad-state",
          "signature": "MonadErrorShortable m () -\u003e m ()",
          "source": "src/Control-Monad-Short.html#unErrorShort_",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Short",
          "module": "Control.Monad.Short",
          "name": "unErrorShort_",
          "normalized": "MonadErrorShortable a()-\u003ea()",
          "package": "monad-state",
          "partial": "Error Short",
          "signature": "MonadErrorShortable m()-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Short.html#v:unErrorShort_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Short",
          "name": "unError_",
          "package": "monad-state",
          "signature": "MonadErrorShortable m a -\u003e MonadShortable () m a",
          "source": "src/Control-Monad-Short.html#unError_",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Short",
          "module": "Control.Monad.Short",
          "name": "unError_",
          "normalized": "MonadErrorShortable a b-\u003eMonadShortable()a b",
          "package": "monad-state",
          "partial": "Error",
          "signature": "MonadErrorShortable m a-\u003eMonadShortable()m a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Short.html#v:unError_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Short",
          "name": "unShort",
          "package": "monad-state",
          "signature": "MonadShortable r m r -\u003e m r",
          "source": "src/Control-Monad-Short.html#unShort",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Short",
          "module": "Control.Monad.Short",
          "name": "unShort",
          "normalized": "MonadShortable a b a-\u003eb a",
          "package": "monad-state",
          "partial": "Short",
          "signature": "MonadShortable r m r-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Short.html#v:unShort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Timeout.Monad",
          "name": "Monad",
          "package": "monad-state",
          "source": "src/System-Timeout-Monad.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Timeout Monad",
          "module": "System.Timeout.Monad",
          "name": "Monad",
          "package": "monad-state",
          "partial": "Monad",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monad-state/docs/System-Timeout-Monad.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEquivalent to \u003ccode\u003e\u003ca\u003etimeoutM\u003c/a\u003e\u003c/code\u003e, but the result is the same monad, making passing the data needed to run the monad unnecessary\n\u003c/p\u003e",
          "module": "System.Timeout.Monad",
          "name": "timeoutM",
          "package": "monad-state",
          "signature": "i -\u003e m a -\u003e m (Maybe (m a))",
          "source": "src/System-Timeout-Monad.html#timeoutM",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to timeoutM but the result is the same monad making passing the data needed to run the monad unnecessary",
          "hierarchy": "System Timeout Monad",
          "module": "System.Timeout.Monad",
          "name": "timeoutM",
          "normalized": "a-\u003eb c-\u003eb(Maybe(b c))",
          "package": "monad-state",
          "signature": "i-\u003em a-\u003em(Maybe(m a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-state/docs/System-Timeout-Monad.html#v:timeoutM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun an action that is runnable in the IO monad within a time limit\n\u003c/p\u003e\u003cp\u003eThe time limit is specified in microseconds, and is subject to the same sas \u003ccode\u003e\u003ca\u003etimeout\u003c/a\u003e\u003c/code\u003e.  \n Finally, the action to be run itself is passed.  The result is an IO action, which is\n normally lifted with \u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e to be run in the same IO (see \u003ccode\u003e\u003ca\u003etimeoutM\u003c/a\u003e\u003c/code\u003e).  The action,\n when run, returns the resulting monadic value if it was run in time.  Conceptually,\n one can think of this as running a local monad, perhaps a copy, in the IO monad;\n the effects of running in the IO monad are unavoidably irreversible, but the resulting monadic\n value can be optionally ignored, in which case it is not evaluated in the parent monad\n and no effects are present in the outer layers of the monad.\n\u003c/p\u003e",
          "module": "System.Timeout.Monad",
          "name": "timeoutR",
          "package": "monad-state",
          "signature": "i -\u003e m a -\u003e RunData m -\u003e IO (Maybe (m a))",
          "source": "src/System-Timeout-Monad.html#timeoutR",
          "type": "function"
        },
        "index": {
          "description": "Run an action that is runnable in the IO monad within time limit The time limit is specified in microseconds and is subject to the same sas timeout Finally the action to be run itself is passed The result is an IO action which is normally lifted with liftIO to be run in the same IO see timeoutM The action when run returns the resulting monadic value if it was run in time Conceptually one can think of this as running local monad perhaps copy in the IO monad the effects of running in the IO monad are unavoidably irreversible but the resulting monadic value can be optionally ignored in which case it is not evaluated in the parent monad and no effects are present in the outer layers of the monad",
          "hierarchy": "System Timeout Monad",
          "module": "System.Timeout.Monad",
          "name": "timeoutR",
          "normalized": "a-\u003eb c-\u003eRunData b-\u003eIO(Maybe(b c))",
          "package": "monad-state",
          "signature": "i-\u003em a-\u003eRunData m-\u003eIO(Maybe(m a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-state/docs/System-Timeout-Monad.html#v:timeoutR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf the void action runs in time, it is run and \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e is returned; otherwise \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e is returned when running the action in time does not succeed\n\u003c/p\u003e\u003cp\u003eFor example, to run a void action within one second,\n one might write\n\u003c/p\u003e\u003cpre\u003e succeeded \u003c- timeoutVoid\n\u003c/pre\u003e\u003cp\u003eThe effects of \u003ca\u003eaction\u003c/a\u003e will be fully executed if succeeded\n is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e; if succeeded is \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e, the action could not run\n in time, and only global IO actions that were performed while\n the local monad was being evaluated will be run.\n\u003c/p\u003e",
          "module": "System.Timeout.Monad",
          "name": "timeoutVoid",
          "package": "monad-state",
          "signature": "i -\u003e m () -\u003e m Bool",
          "source": "src/System-Timeout-Monad.html#timeoutVoid",
          "type": "function"
        },
        "index": {
          "description": "If the void action runs in time it is run and True is returned otherwise False is returned when running the action in time does not succeed For example to run void action within one second one might write succeeded timeoutVoid The effects of action will be fully executed if succeeded is True if succeeded is False the action could not run in time and only global IO actions that were performed while the local monad was being evaluated will be run",
          "hierarchy": "System Timeout Monad",
          "module": "System.Timeout.Monad",
          "name": "timeoutVoid",
          "normalized": "a-\u003eb()-\u003eb Bool",
          "package": "monad-state",
          "partial": "Void",
          "signature": "i-\u003em()-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-state/docs/System-Timeout-Monad.html#v:timeoutVoid"
      }
    }
  ]
]