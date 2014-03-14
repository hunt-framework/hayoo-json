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
        "word": "AbortT-transformers"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a monad and a monad transformer that allow the\n user to abort a monadic computation and immediately return a\n result.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Trans.Abort",
          "name": "Abort",
          "package": "AbortT-transformers",
          "source": "src/Control-Monad-Trans-Abort.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides monad and monad transformer that allow the user to abort monadic computation and immediately return result",
          "hierarchy": "Control Monad Trans Abort",
          "module": "Control.Monad.Trans.Abort",
          "name": "Abort",
          "package": "AbortT-transformers",
          "partial": "Abort",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AbortT-transformers/docs/Control-Monad-Trans-Abort.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn abort monad, parametrized by the type \u003ccode\u003er\u003c/code\u003e of the value to return.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Abort",
          "name": "Abort",
          "package": "AbortT-transformers",
          "source": "src/Control-Monad-Trans-Abort.html#Abort",
          "type": "type"
        },
        "index": {
          "description": "An abort monad parametrized by the type of the value to return",
          "hierarchy": "Control Monad Trans Abort",
          "module": "Control.Monad.Trans.Abort",
          "name": "Abort",
          "package": "AbortT-transformers",
          "partial": "Abort",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/AbortT-transformers/docs/Control-Monad-Trans-Abort.html#t:Abort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn abort monad transformer parametrized by\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003er\u003c/code\u003e - the value that will ultimately be returned; and\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003em\u003c/code\u003e - the inner monad.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eAbortT\u003c/a\u003e\u003c/code\u003e type wraps a monadic value that is either\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e \u003ccode\u003er\u003c/code\u003e, which indicates that the monadic computation has\n     terminated with result \u003ccode\u003er\u003c/code\u003e and so all further steps in the computation\n     should be ignored; or\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ea\u003c/code\u003e, which indicates that the computation is proceding normally\n     and that its current value is \u003ccode\u003ea\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.Monad.Trans.Abort",
          "name": "AbortT",
          "package": "AbortT-transformers",
          "source": "src/Control-Monad-Trans-Abort.html#AbortT",
          "type": "newtype"
        },
        "index": {
          "description": "An abort monad transformer parametrized by the value that will ultimately be returned and the inner monad The AbortT type wraps monadic value that is either Left which indicates that the monadic computation has terminated with result and so all further steps in the computation should be ignored or Right which indicates that the computation is proceding normally and that its current value is",
          "hierarchy": "Control Monad Trans Abort",
          "module": "Control.Monad.Trans.Abort",
          "name": "AbortT",
          "package": "AbortT-transformers",
          "partial": "Abort",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/AbortT-transformers/docs/Control-Monad-Trans-Abort.html#t:AbortT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Abort",
          "name": "AbortT",
          "package": "AbortT-transformers",
          "signature": "AbortT",
          "source": "src/Control-Monad-Trans-Abort.html#AbortT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Abort",
          "module": "Control.Monad.Trans.Abort",
          "name": "AbortT",
          "package": "AbortT-transformers",
          "partial": "Abort",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AbortT-transformers/docs/Control-Monad-Trans-Abort.html#v:AbortT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbort the computation and immediately return a result; all steps\n in the computation after this monadic computation will be ignored.\n\u003c/p\u003e\u003cp\u003eNote that since no further computation is performed after this, there is\n no way for subsequent computations to access the monadic value, and so it\n can be assigned an arbitrary type.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Abort",
          "name": "abort",
          "package": "AbortT-transformers",
          "signature": "r-\u003e AbortT r m a",
          "type": "function"
        },
        "index": {
          "description": "Abort the computation and immediately return result all steps in the computation after this monadic computation will be ignored Note that since no further computation is performed after this there is no way for subsequent computations to access the monadic value and so it can be assigned an arbitrary type",
          "hierarchy": "Control Monad Trans Abort",
          "module": "Control.Monad.Trans.Abort",
          "name": "abort",
          "normalized": "a-\u003eAbortT a b c",
          "package": "AbortT-transformers",
          "signature": "r-\u003eAbortT r m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AbortT-transformers/docs/Control-Monad-Trans-Abort.html#v:abort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifts a \u003ccode\u003ecallCC\u003c/code\u003e operation to \u003ccode\u003e\u003ca\u003eAbortT\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Abort",
          "name": "liftCallCC",
          "package": "AbortT-transformers",
          "signature": "(((Either r a -\u003e m (Either r b)) -\u003e m (Either r a)) -\u003e m (Either r a))-\u003e ((a -\u003e AbortT r m b) -\u003e AbortT r m a)-\u003e AbortT r m a",
          "type": "function"
        },
        "index": {
          "description": "Lifts callCC operation to AbortT",
          "hierarchy": "Control Monad Trans Abort",
          "module": "Control.Monad.Trans.Abort",
          "name": "liftCallCC",
          "normalized": "(((Either a b-\u003ec(Either a d))-\u003ec(Either a b))-\u003ec(Either a b))-\u003e((b-\u003eAbortT a c d)-\u003eAbortT a c b)-\u003eAbortT a c b",
          "package": "AbortT-transformers",
          "partial": "Call CC",
          "signature": "(((Either r a-\u003em(Either r b))-\u003em(Either r a))-\u003em(Either r a))-\u003e((a-\u003eAbortT r m b)-\u003eAbortT r m a)-\u003eAbortT r m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AbortT-transformers/docs/Control-Monad-Trans-Abort.html#v:liftCallCC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a \u003ccode\u003ecatchError\u003c/code\u003e operation to \u003ccode\u003e\u003ca\u003eAbortT\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Abort",
          "name": "liftCatch",
          "package": "AbortT-transformers",
          "signature": "(m (Either r a) -\u003e (e -\u003e m (Either r a)) -\u003e m (Either r a))-\u003e AbortT r m a-\u003e (e -\u003e AbortT r m a)-\u003e AbortT r m a",
          "type": "function"
        },
        "index": {
          "description": "Lift catchError operation to AbortT",
          "hierarchy": "Control Monad Trans Abort",
          "module": "Control.Monad.Trans.Abort",
          "name": "liftCatch",
          "normalized": "(a(Either b c)-\u003e(d-\u003ea(Either b c))-\u003ea(Either b c))-\u003eAbortT b a c-\u003e(d-\u003eAbortT b a c)-\u003eAbortT b a c",
          "package": "AbortT-transformers",
          "partial": "Catch",
          "signature": "(m(Either r a)-\u003e(e-\u003em(Either r a))-\u003em(Either r a))-\u003eAbortT r m a-\u003e(e-\u003eAbortT r m a)-\u003eAbortT r m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AbortT-transformers/docs/Control-Monad-Trans-Abort.html#v:liftCatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a \u003ccode\u003elisten\u003c/code\u003e operation to the new monad.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Abort",
          "name": "liftListen",
          "package": "AbortT-transformers",
          "signature": "(m (Either r a) -\u003e m (Either r a, w))-\u003e AbortT r m a-\u003e AbortT r m (a, w)",
          "type": "function"
        },
        "index": {
          "description": "Lift listen operation to the new monad",
          "hierarchy": "Control Monad Trans Abort",
          "module": "Control.Monad.Trans.Abort",
          "name": "liftListen",
          "normalized": "(a(Either b c)-\u003ea(Either b c,d))-\u003eAbortT b a c-\u003eAbortT b a(c,d)",
          "package": "AbortT-transformers",
          "partial": "Listen",
          "signature": "(m(Either r a)-\u003em(Either r a,w))-\u003eAbortT r m a-\u003eAbortT r m(a,w)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AbortT-transformers/docs/Control-Monad-Trans-Abort.html#v:liftListen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a \u003ccode\u003epass\u003c/code\u003e operation to the new monad.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Abort",
          "name": "liftPass",
          "package": "AbortT-transformers",
          "signature": "(m (Either r a, w -\u003e w) -\u003e m (Either r a))-\u003e AbortT r m (a, w -\u003e w)-\u003e AbortT r m a",
          "type": "function"
        },
        "index": {
          "description": "Lift pass operation to the new monad",
          "hierarchy": "Control Monad Trans Abort",
          "module": "Control.Monad.Trans.Abort",
          "name": "liftPass",
          "normalized": "(a(Either b c,d-\u003ed)-\u003ea(Either b c))-\u003eAbortT b a(c,d-\u003ed)-\u003eAbortT b a c",
          "package": "AbortT-transformers",
          "partial": "Pass",
          "signature": "(m(Either r a,w-\u003ew)-\u003em(Either r a))-\u003eAbortT r m(a,w-\u003ew)-\u003eAbortT r m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AbortT-transformers/docs/Control-Monad-Trans-Abort.html#v:liftPass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute the abort monad computation and return the resulting value.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Abort",
          "name": "runAbort",
          "package": "AbortT-transformers",
          "signature": "Abort r r-\u003e r",
          "type": "function"
        },
        "index": {
          "description": "Execute the abort monad computation and return the resulting value",
          "hierarchy": "Control Monad Trans Abort",
          "module": "Control.Monad.Trans.Abort",
          "name": "runAbort",
          "normalized": "Abort a a-\u003ea",
          "package": "AbortT-transformers",
          "partial": "Abort",
          "signature": "Abort r r-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AbortT-transformers/docs/Control-Monad-Trans-Abort.html#v:runAbort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute the abort monad computation and return the resulting\n   (monadic) value.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Abort",
          "name": "runAbortT",
          "package": "AbortT-transformers",
          "signature": "AbortT r m r-\u003e m r",
          "type": "function"
        },
        "index": {
          "description": "Execute the abort monad computation and return the resulting monadic value",
          "hierarchy": "Control Monad Trans Abort",
          "module": "Control.Monad.Trans.Abort",
          "name": "runAbortT",
          "normalized": "AbortT a b a-\u003eb a",
          "package": "AbortT-transformers",
          "partial": "Abort",
          "signature": "AbortT r m r-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AbortT-transformers/docs/Control-Monad-Trans-Abort.html#v:runAbortT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Abort",
          "name": "unwrapAbortT",
          "package": "AbortT-transformers",
          "signature": "m (Either r a)",
          "source": "src/Control-Monad-Trans-Abort.html#AbortT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Abort",
          "module": "Control.Monad.Trans.Abort",
          "name": "unwrapAbortT",
          "package": "AbortT-transformers",
          "partial": "Abort",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AbortT-transformers/docs/Control-Monad-Trans-Abort.html#v:unwrapAbortT"
      }
    }
  ]
]