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
        "word": "iException"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.InterleavableIO.Control.Exception",
          "name": "3Ablock",
          "package": "iException",
          "signature": "trans1 a -\u003e trans a",
          "source": "http://hackage.haskell.org/package/iException/docs/src/Control-Monad-Trans-InterleavableIO-Control-Exception.html#block",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans InterleavableIO Control Exception",
          "module": "Control.Monad.Trans.InterleavableIO.Control.Exception",
          "name": "3Ablock",
          "normalized": "a b-\u003ea b",
          "package": "iException",
          "partial": "Ablock",
          "signature": "trans a-\u003etrans a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iException/docs/Control-Monad-Trans-InterleavableIO-Control-Exception.html#v:3Ablock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.InterleavableIO.Control.Exception",
          "name": "3Abracket",
          "package": "iException",
          "signature": "trans1 a -\u003e (a -\u003e trans2 result) -\u003e (a -\u003e trans3 result1) -\u003e trans result1",
          "source": "http://hackage.haskell.org/package/iException/docs/src/Control-Monad-Trans-InterleavableIO-Control-Exception.html#bracket",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans InterleavableIO Control Exception",
          "module": "Control.Monad.Trans.InterleavableIO.Control.Exception",
          "name": "3Abracket",
          "normalized": "a b-\u003e(b-\u003ea c)-\u003e(b-\u003ea c)-\u003ea c",
          "package": "iException",
          "partial": "Abracket",
          "signature": "trans a-\u003e(a-\u003etrans result)-\u003e(a-\u003etrans result)-\u003etrans result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iException/docs/Control-Monad-Trans-InterleavableIO-Control-Exception.html#v:3Abracket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.InterleavableIO.Control.Exception",
          "name": "3AbracketOnError",
          "package": "iException",
          "signature": "trans1 a -\u003e (a -\u003e trans2 result) -\u003e (a -\u003e trans3 result1) -\u003e trans result1",
          "source": "http://hackage.haskell.org/package/iException/docs/src/Control-Monad-Trans-InterleavableIO-Control-Exception.html#bracketOnError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans InterleavableIO Control Exception",
          "module": "Control.Monad.Trans.InterleavableIO.Control.Exception",
          "name": "3AbracketOnError",
          "normalized": "a b-\u003e(b-\u003ea c)-\u003e(b-\u003ea c)-\u003ea c",
          "package": "iException",
          "partial": "Abracket On Error",
          "signature": "trans a-\u003e(a-\u003etrans result)-\u003e(a-\u003etrans result)-\u003etrans result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iException/docs/Control-Monad-Trans-InterleavableIO-Control-Exception.html#v:3AbracketOnError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.InterleavableIO.Control.Exception",
          "name": "3Abracket_",
          "package": "iException",
          "signature": "trans1 a -\u003e trans2 b -\u003e trans3 c -\u003e trans c",
          "source": "http://hackage.haskell.org/package/iException/docs/src/Control-Monad-Trans-InterleavableIO-Control-Exception.html#bracket_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans InterleavableIO Control Exception",
          "module": "Control.Monad.Trans.InterleavableIO.Control.Exception",
          "name": "3Abracket_",
          "normalized": "a b-\u003ea c-\u003ea d-\u003ea d",
          "package": "iException",
          "partial": "Abracket",
          "signature": "trans a-\u003etrans b-\u003etrans c-\u003etrans c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iException/docs/Control-Monad-Trans-InterleavableIO-Control-Exception.html#v:3Abracket_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.InterleavableIO.Control.Exception",
          "name": "3Acatch",
          "package": "iException",
          "signature": "trans1 result -\u003e (Exception -\u003e trans2 result) -\u003e trans result",
          "source": "http://hackage.haskell.org/package/iException/docs/src/Control-Monad-Trans-InterleavableIO-Control-Exception.html#catch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans InterleavableIO Control Exception",
          "module": "Control.Monad.Trans.InterleavableIO.Control.Exception",
          "name": "3Acatch",
          "normalized": "a b-\u003e(Exception-\u003ea b)-\u003ea b",
          "package": "iException",
          "partial": "Acatch",
          "signature": "trans result-\u003e(Exception-\u003etrans result)-\u003etrans result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iException/docs/Control-Monad-Trans-InterleavableIO-Control-Exception.html#v:3Acatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.InterleavableIO.Control.Exception",
          "name": "3AcatchDyn",
          "package": "iException",
          "signature": "trans1 result -\u003e (exception -\u003e trans2 result) -\u003e trans result",
          "source": "http://hackage.haskell.org/package/iException/docs/src/Control-Monad-Trans-InterleavableIO-Control-Exception.html#catchDyn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans InterleavableIO Control Exception",
          "module": "Control.Monad.Trans.InterleavableIO.Control.Exception",
          "name": "3AcatchDyn",
          "normalized": "a b-\u003e(c-\u003ea b)-\u003ea b",
          "package": "iException",
          "partial": "Acatch Dyn",
          "signature": "trans result-\u003e(exception-\u003etrans result)-\u003etrans result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iException/docs/Control-Monad-Trans-InterleavableIO-Control-Exception.html#v:3AcatchDyn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.InterleavableIO.Control.Exception",
          "name": "3AcatchJust",
          "package": "iException",
          "signature": "(Exception -\u003e Maybe b) -\u003e trans1 result -\u003e (b -\u003e trans2 result) -\u003e trans result",
          "source": "http://hackage.haskell.org/package/iException/docs/src/Control-Monad-Trans-InterleavableIO-Control-Exception.html#catchJust",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans InterleavableIO Control Exception",
          "module": "Control.Monad.Trans.InterleavableIO.Control.Exception",
          "name": "3AcatchJust",
          "normalized": "(Exception-\u003eMaybe a)-\u003eb c-\u003e(a-\u003eb c)-\u003eb c",
          "package": "iException",
          "partial": "Acatch Just",
          "signature": "(Exception-\u003eMaybe b)-\u003etrans result-\u003e(b-\u003etrans result)-\u003etrans result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iException/docs/Control-Monad-Trans-InterleavableIO-Control-Exception.html#v:3AcatchJust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.InterleavableIO.Control.Exception",
          "name": "3Aevaluate",
          "package": "iException",
          "signature": "a -\u003e m a",
          "source": "http://hackage.haskell.org/package/iException/docs/src/Control-Monad-Trans-InterleavableIO-Control-Exception.html#evaluate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans InterleavableIO Control Exception",
          "module": "Control.Monad.Trans.InterleavableIO.Control.Exception",
          "name": "3Aevaluate",
          "normalized": "a-\u003eb a",
          "package": "iException",
          "partial": "Aevaluate",
          "signature": "a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iException/docs/Control-Monad-Trans-InterleavableIO-Control-Exception.html#v:3Aevaluate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.InterleavableIO.Control.Exception",
          "name": "3Afinally",
          "package": "iException",
          "signature": "trans1 a -\u003e trans2 b -\u003e trans a",
          "source": "http://hackage.haskell.org/package/iException/docs/src/Control-Monad-Trans-InterleavableIO-Control-Exception.html#finally",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans InterleavableIO Control Exception",
          "module": "Control.Monad.Trans.InterleavableIO.Control.Exception",
          "name": "3Afinally",
          "normalized": "a b-\u003ea c-\u003ea b",
          "package": "iException",
          "partial": "Afinally",
          "signature": "trans a-\u003etrans b-\u003etrans a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iException/docs/Control-Monad-Trans-InterleavableIO-Control-Exception.html#v:3Afinally"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.InterleavableIO.Control.Exception",
          "name": "3AgetUncaughtExceptionHandler",
          "package": "iException",
          "signature": "m (Exception -\u003e m1 ())",
          "source": "http://hackage.haskell.org/package/iException/docs/src/Control-Monad-Trans-InterleavableIO-Control-Exception.html#getUncaughtExceptionHandler",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans InterleavableIO Control Exception",
          "module": "Control.Monad.Trans.InterleavableIO.Control.Exception",
          "name": "3AgetUncaughtExceptionHandler",
          "normalized": "a(Exception-\u003ea())",
          "package": "iException",
          "partial": "Aget Uncaught Exception Handler",
          "signature": "m(Exception-\u003em())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iException/docs/Control-Monad-Trans-InterleavableIO-Control-Exception.html#v:3AgetUncaughtExceptionHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.InterleavableIO.Control.Exception",
          "name": "3Ahandle",
          "package": "iException",
          "signature": "(Exception -\u003e trans1 result) -\u003e trans2 result -\u003e trans result",
          "source": "http://hackage.haskell.org/package/iException/docs/src/Control-Monad-Trans-InterleavableIO-Control-Exception.html#handle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans InterleavableIO Control Exception",
          "module": "Control.Monad.Trans.InterleavableIO.Control.Exception",
          "name": "3Ahandle",
          "normalized": "(Exception-\u003ea b)-\u003ea b-\u003ea b",
          "package": "iException",
          "partial": "Ahandle",
          "signature": "(Exception-\u003etrans result)-\u003etrans result-\u003etrans result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iException/docs/Control-Monad-Trans-InterleavableIO-Control-Exception.html#v:3Ahandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.InterleavableIO.Control.Exception",
          "name": "3AhandleJust",
          "package": "iException",
          "signature": "(Exception -\u003e Maybe b) -\u003e (b -\u003e trans1 result) -\u003e trans2 result -\u003e trans result",
          "source": "http://hackage.haskell.org/package/iException/docs/src/Control-Monad-Trans-InterleavableIO-Control-Exception.html#handleJust",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans InterleavableIO Control Exception",
          "module": "Control.Monad.Trans.InterleavableIO.Control.Exception",
          "name": "3AhandleJust",
          "normalized": "(Exception-\u003eMaybe a)-\u003e(a-\u003eb c)-\u003eb c-\u003eb c",
          "package": "iException",
          "partial": "Ahandle Just",
          "signature": "(Exception-\u003eMaybe b)-\u003e(b-\u003etrans result)-\u003etrans result-\u003etrans result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iException/docs/Control-Monad-Trans-InterleavableIO-Control-Exception.html#v:3AhandleJust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.InterleavableIO.Control.Exception",
          "name": "3AioError",
          "package": "iException",
          "signature": "IOError -\u003e m a",
          "source": "http://hackage.haskell.org/package/iException/docs/src/Control-Monad-Trans-InterleavableIO-Control-Exception.html#ioError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans InterleavableIO Control Exception",
          "module": "Control.Monad.Trans.InterleavableIO.Control.Exception",
          "name": "3AioError",
          "normalized": "IOError-\u003ea b",
          "package": "iException",
          "partial": "Aio Error",
          "signature": "IOError-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iException/docs/Control-Monad-Trans-InterleavableIO-Control-Exception.html#v:3AioError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.InterleavableIO.Control.Exception",
          "name": "3AsetUncaughtExceptionHandler",
          "package": "iException",
          "signature": "(Exception -\u003e trans1 ()) -\u003e trans ()",
          "source": "http://hackage.haskell.org/package/iException/docs/src/Control-Monad-Trans-InterleavableIO-Control-Exception.html#setUncaughtExceptionHandler",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans InterleavableIO Control Exception",
          "module": "Control.Monad.Trans.InterleavableIO.Control.Exception",
          "name": "3AsetUncaughtExceptionHandler",
          "normalized": "(Exception-\u003ea())-\u003ea()",
          "package": "iException",
          "partial": "Aset Uncaught Exception Handler",
          "signature": "(Exception-\u003etrans())-\u003etrans()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iException/docs/Control-Monad-Trans-InterleavableIO-Control-Exception.html#v:3AsetUncaughtExceptionHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.InterleavableIO.Control.Exception",
          "name": "3AthrowDynTo",
          "package": "iException",
          "signature": "ThreadId -\u003e exception -\u003e m ()",
          "source": "http://hackage.haskell.org/package/iException/docs/src/Control-Monad-Trans-InterleavableIO-Control-Exception.html#throwDynTo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans InterleavableIO Control Exception",
          "module": "Control.Monad.Trans.InterleavableIO.Control.Exception",
          "name": "3AthrowDynTo",
          "normalized": "ThreadId-\u003ea-\u003eb()",
          "package": "iException",
          "partial": "Athrow Dyn To",
          "signature": "ThreadId-\u003eexception-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iException/docs/Control-Monad-Trans-InterleavableIO-Control-Exception.html#v:3AthrowDynTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.InterleavableIO.Control.Exception",
          "name": "3AthrowIO",
          "package": "iException",
          "signature": "Exception -\u003e m a",
          "source": "http://hackage.haskell.org/package/iException/docs/src/Control-Monad-Trans-InterleavableIO-Control-Exception.html#throwIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans InterleavableIO Control Exception",
          "module": "Control.Monad.Trans.InterleavableIO.Control.Exception",
          "name": "3AthrowIO",
          "normalized": "Exception-\u003ea b",
          "package": "iException",
          "partial": "Athrow IO",
          "signature": "Exception-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iException/docs/Control-Monad-Trans-InterleavableIO-Control-Exception.html#v:3AthrowIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.InterleavableIO.Control.Exception",
          "name": "3AthrowTo",
          "package": "iException",
          "signature": "ThreadId -\u003e Exception -\u003e m ()",
          "source": "http://hackage.haskell.org/package/iException/docs/src/Control-Monad-Trans-InterleavableIO-Control-Exception.html#throwTo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans InterleavableIO Control Exception",
          "module": "Control.Monad.Trans.InterleavableIO.Control.Exception",
          "name": "3AthrowTo",
          "normalized": "ThreadId-\u003eException-\u003ea()",
          "package": "iException",
          "partial": "Athrow To",
          "signature": "ThreadId-\u003eException-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iException/docs/Control-Monad-Trans-InterleavableIO-Control-Exception.html#v:3AthrowTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.InterleavableIO.Control.Exception",
          "name": "3Atry",
          "package": "iException",
          "signature": "trans1 a -\u003e trans (Either Exception a)",
          "source": "http://hackage.haskell.org/package/iException/docs/src/Control-Monad-Trans-InterleavableIO-Control-Exception.html#try",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans InterleavableIO Control Exception",
          "module": "Control.Monad.Trans.InterleavableIO.Control.Exception",
          "name": "3Atry",
          "normalized": "a b-\u003ea(Either Exception b)",
          "package": "iException",
          "partial": "Atry",
          "signature": "trans a-\u003etrans(Either Exception a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iException/docs/Control-Monad-Trans-InterleavableIO-Control-Exception.html#v:3Atry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.InterleavableIO.Control.Exception",
          "name": "3AtryJust",
          "package": "iException",
          "signature": "(Exception -\u003e Maybe b) -\u003e trans1 a -\u003e trans (Either b a)",
          "source": "http://hackage.haskell.org/package/iException/docs/src/Control-Monad-Trans-InterleavableIO-Control-Exception.html#tryJust",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans InterleavableIO Control Exception",
          "module": "Control.Monad.Trans.InterleavableIO.Control.Exception",
          "name": "3AtryJust",
          "normalized": "(Exception-\u003eMaybe a)-\u003eb c-\u003eb(Either a c)",
          "package": "iException",
          "partial": "Atry Just",
          "signature": "(Exception-\u003eMaybe b)-\u003etrans a-\u003etrans(Either b a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iException/docs/Control-Monad-Trans-InterleavableIO-Control-Exception.html#v:3AtryJust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.InterleavableIO.Control.Exception",
          "name": "3Aunblock",
          "package": "iException",
          "signature": "trans1 a -\u003e trans a",
          "source": "http://hackage.haskell.org/package/iException/docs/src/Control-Monad-Trans-InterleavableIO-Control-Exception.html#unblock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans InterleavableIO Control Exception",
          "module": "Control.Monad.Trans.InterleavableIO.Control.Exception",
          "name": "3Aunblock",
          "normalized": "a b-\u003ea b",
          "package": "iException",
          "partial": "Aunblock",
          "signature": "trans a-\u003etrans a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iException/docs/Control-Monad-Trans-InterleavableIO-Control-Exception.html#v:3Aunblock"
      }
    }
  ]
]