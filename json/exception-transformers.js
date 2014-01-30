[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exception-transformers/docs/Control-Monad-Exception.html#",
      "description": {
        "fct-module": "Control.Monad.Exception",
        "fct-package": "exception-transformers",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Exception.html",
        "fct-type": "module",
        "title": "Exception"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception",
        "module": "Control.Monad.Exception",
        "name": "Exception",
        "normalized": "",
        "package": "exception-transformers",
        "partial": "Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exception-transformers/docs/Control-Monad-Exception.html#t:Exception",
      "description": {
        "fct-descr": "\u003cp\u003eAny type that you wish to throw or catch as an exception must be an\ninstance of the \u003ccode\u003eException\u003c/code\u003e class. The simplest case is a new exception\ntype directly below the root:\n\u003c/p\u003e\u003cpre\u003e data MyException = ThisException | ThatException\n     deriving (Show, Typeable)\n\n instance Exception MyException\n\u003c/pre\u003e\u003cp\u003eThe default method definitions in the \u003ccode\u003eException\u003c/code\u003e class do what we need\nin this case. You can now throw and catch \u003ccode\u003eThisException\u003c/code\u003e and\n\u003ccode\u003eThatException\u003c/code\u003e as exceptions:\n\u003c/p\u003e\u003cpre\u003e\n*Main\u003e throw ThisException `catch` \\e -\u003e putStrLn (\"Caught \" ++ show (e :: MyException))\nCaught ThisException\n\u003c/pre\u003e\u003cp\u003eIn more complicated examples, you may wish to define a whole hierarchy\nof exceptions:\n\u003c/p\u003e\u003cpre\u003e ---------------------------------------------------------------------\n -- Make the root exception type for all the exceptions in a compiler\n\n data SomeCompilerException = forall e . Exception e =\u003e SomeCompilerException e\n     deriving Typeable\n\n instance Show SomeCompilerException where\n     show (SomeCompilerException e) = show e\n\n instance Exception SomeCompilerException\n\n compilerExceptionToException :: Exception e =\u003e e -\u003e SomeException\n compilerExceptionToException = toException . SomeCompilerException\n\n compilerExceptionFromException :: Exception e =\u003e SomeException -\u003e Maybe e\n compilerExceptionFromException x = do\n     SomeCompilerException a \u003c- fromException x\n     cast a\n\n ---------------------------------------------------------------------\n -- Make a subhierarchy for exceptions in the frontend of the compiler\n\n data SomeFrontendException = forall e . Exception e =\u003e SomeFrontendException e\n     deriving Typeable\n\n instance Show SomeFrontendException where\n     show (SomeFrontendException e) = show e\n\n instance Exception SomeFrontendException where\n     toException = compilerExceptionToException\n     fromException = compilerExceptionFromException\n\n frontendExceptionToException :: Exception e =\u003e e -\u003e SomeException\n frontendExceptionToException = toException . SomeFrontendException\n\n frontendExceptionFromException :: Exception e =\u003e SomeException -\u003e Maybe e\n frontendExceptionFromException x = do\n     SomeFrontendException a \u003c- fromException x\n     cast a\n\n ---------------------------------------------------------------------\n -- Make an exception type for a particular frontend compiler exception\n\n data MismatchedParentheses = MismatchedParentheses\n     deriving (Typeable, Show)\n\n instance Exception MismatchedParentheses where\n     toException   = frontendExceptionToException\n     fromException = frontendExceptionFromException\n\u003c/pre\u003e\u003cp\u003eWe can now catch a \u003ccode\u003eMismatchedParentheses\u003c/code\u003e exception as\n\u003ccode\u003eMismatchedParentheses\u003c/code\u003e, \u003ccode\u003eSomeFrontendException\u003c/code\u003e or\n\u003ccode\u003eSomeCompilerException\u003c/code\u003e, but not other types, e.g. \u003ccode\u003eIOException\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\n*Main\u003e throw MismatchedParentheses \u003ccode\u003ecatch\u003c/code\u003e e -\u003e putStrLn (\"Caught \" ++ show (e :: MismatchedParentheses))\nCaught MismatchedParentheses\n*Main\u003e throw MismatchedParentheses \u003ccode\u003ecatch\u003c/code\u003e e -\u003e putStrLn (\"Caught \" ++ show (e :: SomeFrontendException))\nCaught MismatchedParentheses\n*Main\u003e throw MismatchedParentheses \u003ccode\u003ecatch\u003c/code\u003e e -\u003e putStrLn (\"Caught \" ++ show (e :: SomeCompilerException))\nCaught MismatchedParentheses\n*Main\u003e throw MismatchedParentheses \u003ccode\u003ecatch\u003c/code\u003e e -\u003e putStrLn (\"Caught \" ++ show (e :: IOException))\n*** Exception: MismatchedParentheses\n\u003c/pre\u003e",
        "fct-module": "Control.Monad.Exception",
        "fct-package": "exception-transformers",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "Exception"
      },
      "index": {
        "description": "Any type that you wish to throw or catch as an exception must be an instance of the Exception class The simplest case is new exception type directly below the root data MyException ThisException ThatException deriving Show Typeable instance Exception MyException The default method definitions in the Exception class do what we need in this case You can now throw and catch ThisException and ThatException as exceptions Main throw ThisException catch putStrLn Caught show MyException Caught ThisException In more complicated examples you may wish to define whole hierarchy of exceptions Make the root exception type for all the exceptions in compiler data SomeCompilerException forall Exception SomeCompilerException deriving Typeable instance Show SomeCompilerException where show SomeCompilerException show instance Exception SomeCompilerException compilerExceptionToException Exception SomeException compilerExceptionToException toException SomeCompilerException compilerExceptionFromException Exception SomeException Maybe compilerExceptionFromException do SomeCompilerException fromException cast Make subhierarchy for exceptions in the frontend of the compiler data SomeFrontendException forall Exception SomeFrontendException deriving Typeable instance Show SomeFrontendException where show SomeFrontendException show instance Exception SomeFrontendException where toException compilerExceptionToException fromException compilerExceptionFromException frontendExceptionToException Exception SomeException frontendExceptionToException toException SomeFrontendException frontendExceptionFromException Exception SomeException Maybe frontendExceptionFromException do SomeFrontendException fromException cast Make an exception type for particular frontend compiler exception data MismatchedParentheses MismatchedParentheses deriving Typeable Show instance Exception MismatchedParentheses where toException frontendExceptionToException fromException frontendExceptionFromException We can now catch MismatchedParentheses exception as MismatchedParentheses SomeFrontendException or SomeCompilerException but not other types e.g IOException Main throw MismatchedParentheses catch putStrLn Caught show MismatchedParentheses Caught MismatchedParentheses Main throw MismatchedParentheses catch putStrLn Caught show SomeFrontendException Caught MismatchedParentheses Main throw MismatchedParentheses catch putStrLn Caught show SomeCompilerException Caught MismatchedParentheses Main throw MismatchedParentheses catch putStrLn Caught show IOException Exception MismatchedParentheses",
        "hierarchy": "Control Monad Exception",
        "module": "Control.Monad.Exception",
        "name": "Exception",
        "normalized": "",
        "package": "exception-transformers",
        "partial": "Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exception-transformers/docs/Control-Monad-Exception.html#t:ExceptionT",
      "description": {
        "fct-module": "Control.Monad.Exception",
        "fct-package": "exception-transformers",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Monad-Exception.html#ExceptionT",
        "fct-type": "newtype",
        "title": "ExceptionT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception",
        "module": "Control.Monad.Exception",
        "name": "ExceptionT",
        "normalized": "",
        "package": "exception-transformers",
        "partial": "Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exception-transformers/docs/Control-Monad-Exception.html#t:MonadAsyncException",
      "description": {
        "fct-module": "Control.Monad.Exception",
        "fct-package": "exception-transformers",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Exception.html#MonadAsyncException",
        "fct-type": "class",
        "title": "MonadAsyncException"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception",
        "module": "Control.Monad.Exception",
        "name": "MonadAsyncException",
        "normalized": "",
        "package": "exception-transformers",
        "partial": "Monad Async Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exception-transformers/docs/Control-Monad-Exception.html#t:MonadException",
      "description": {
        "fct-module": "Control.Monad.Exception",
        "fct-package": "exception-transformers",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Exception.html#MonadException",
        "fct-type": "class",
        "title": "MonadException"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception",
        "module": "Control.Monad.Exception",
        "name": "MonadException",
        "normalized": "",
        "package": "exception-transformers",
        "partial": "Monad Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exception-transformers/docs/Control-Monad-Exception.html#t:SomeException",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003eSomeException\u003c/code\u003e type is the root of the exception type hierarchy.\nWhen an exception of type \u003ccode\u003ee\u003c/code\u003e is thrown, behind the scenes it is\nencapsulated in a \u003ccode\u003eSomeException\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception",
        "fct-package": "exception-transformers",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "SomeException"
      },
      "index": {
        "description": "The SomeException type is the root of the exception type hierarchy When an exception of type is thrown behind the scenes it is encapsulated in SomeException",
        "hierarchy": "Control Monad Exception",
        "module": "Control.Monad.Exception",
        "name": "SomeException",
        "normalized": "",
        "package": "exception-transformers",
        "partial": "Some Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exception-transformers/docs/Control-Monad-Exception.html#v:ExceptionT",
      "description": {
        "fct-module": "Control.Monad.Exception",
        "fct-package": "exception-transformers",
        "fct-signature": "ExceptionT",
        "fct-source": "src/Control-Monad-Exception.html#ExceptionT",
        "fct-type": "function",
        "title": "ExceptionT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception",
        "module": "Control.Monad.Exception",
        "name": "ExceptionT",
        "normalized": "",
        "package": "exception-transformers",
        "partial": "Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exception-transformers/docs/Control-Monad-Exception.html#v:bracket",
      "description": {
        "fct-descr": "\u003cp\u003eWhen you want to acquire a resource, do some work with it, and then release\n the resource, it is a good idea to use \u003ccode\u003e\u003ca\u003ebracket\u003c/a\u003e\u003c/code\u003e, because \u003ccode\u003e\u003ca\u003ebracket\u003c/a\u003e\u003c/code\u003e will\n install the necessary exception handler to release the resource in the event\n that an exception is raised during the computation.  If an exception is\n raised, then \u003ccode\u003e\u003ca\u003ebracket\u003c/a\u003e\u003c/code\u003e will re-raise the exception (after performing the\n release).\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception",
        "fct-package": "exception-transformers",
        "fct-signature": "m a-\u003e (a -\u003e m b)-\u003e (a -\u003e m c)-\u003e m c",
        "fct-type": "function",
        "title": "bracket"
      },
      "index": {
        "description": "When you want to acquire resource do some work with it and then release the resource it is good idea to use bracket because bracket will install the necessary exception handler to release the resource in the event that an exception is raised during the computation If an exception is raised then bracket will re-raise the exception after performing the release",
        "hierarchy": "Control Monad Exception",
        "module": "Control.Monad.Exception",
        "name": "bracket",
        "normalized": "a b-\u003e(b-\u003ea c)-\u003e(b-\u003ea d)-\u003ea d",
        "package": "exception-transformers",
        "partial": "",
        "signature": "m a-\u003e(a-\u003em b)-\u003e(a-\u003em c)-\u003em c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exception-transformers/docs/Control-Monad-Exception.html#v:bracket_",
      "description": {
        "fct-descr": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003ebracket\u003c/a\u003e\u003c/code\u003e where the return value from the first computation is\n not required.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception",
        "fct-package": "exception-transformers",
        "fct-signature": "m a -\u003e m b -\u003e m c -\u003e m c",
        "fct-source": "src/Control-Monad-Exception.html#bracket_",
        "fct-type": "function",
        "title": "bracket_"
      },
      "index": {
        "description": "variant of bracket where the return value from the first computation is not required",
        "hierarchy": "Control Monad Exception",
        "module": "Control.Monad.Exception",
        "name": "bracket_",
        "normalized": "a b-\u003ea c-\u003ea d-\u003ea d",
        "package": "exception-transformers",
        "partial": "",
        "signature": "m a-\u003em b-\u003em c-\u003em c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exception-transformers/docs/Control-Monad-Exception.html#v:catch",
      "description": {
        "fct-descr": "\u003cp\u003eCatch an exception.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception",
        "fct-package": "exception-transformers",
        "fct-signature": "catch",
        "fct-source": "src/Control-Monad-Exception.html#catch",
        "fct-type": "method",
        "title": "catch"
      },
      "index": {
        "description": "Catch an exception",
        "hierarchy": "Control Monad Exception",
        "module": "Control.Monad.Exception",
        "name": "catch",
        "normalized": "",
        "package": "exception-transformers",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exception-transformers/docs/Control-Monad-Exception.html#v:finally",
      "description": {
        "fct-descr": "\u003cp\u003eRun a computation and always perform a second, final computation even\n if an exception is raised. If a short-circuiting monad transformer such\n as ErrorT or MaybeT is used to transform a MonadException monad, then the\n implementation of \u003ccode\u003efinally\u003c/code\u003e for the transformed monad must guarantee that\n the final action is also always performed when any short-circuiting\n occurs.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception",
        "fct-package": "exception-transformers",
        "fct-signature": "finally",
        "fct-source": "src/Control-Monad-Exception.html#finally",
        "fct-type": "method",
        "title": "finally"
      },
      "index": {
        "description": "Run computation and always perform second final computation even if an exception is raised If short-circuiting monad transformer such as ErrorT or MaybeT is used to transform MonadException monad then the implementation of finally for the transformed monad must guarantee that the final action is also always performed when any short-circuiting occurs",
        "hierarchy": "Control Monad Exception",
        "module": "Control.Monad.Exception",
        "name": "finally",
        "normalized": "",
        "package": "exception-transformers",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exception-transformers/docs/Control-Monad-Exception.html#v:fromException",
      "description": {
        "fct-module": "Control.Monad.Exception",
        "fct-package": "exception-transformers",
        "fct-signature": "SomeException -\u003e Maybe e",
        "fct-type": "method",
        "title": "fromException"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception",
        "module": "Control.Monad.Exception",
        "name": "fromException",
        "normalized": "SomeException-\u003eMaybe a",
        "package": "exception-transformers",
        "partial": "Exception",
        "signature": "SomeException-\u003eMaybe e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exception-transformers/docs/Control-Monad-Exception.html#v:liftException",
      "description": {
        "fct-descr": "\u003cp\u003eLift the result of running a computation in a monad transformed by\n \u003ccode\u003e\u003ca\u003eExceptionT\u003c/a\u003e\u003c/code\u003e into another monad that supports exceptions.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception",
        "fct-package": "exception-transformers",
        "fct-signature": "Either SomeException a -\u003e m a",
        "fct-source": "src/Control-Monad-Exception.html#liftException",
        "fct-type": "function",
        "title": "liftException"
      },
      "index": {
        "description": "Lift the result of running computation in monad transformed by ExceptionT into another monad that supports exceptions",
        "hierarchy": "Control Monad Exception",
        "module": "Control.Monad.Exception",
        "name": "liftException",
        "normalized": "Either SomeException a-\u003eb a",
        "package": "exception-transformers",
        "partial": "Exception",
        "signature": "Either SomeException a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exception-transformers/docs/Control-Monad-Exception.html#v:mapExceptionT",
      "description": {
        "fct-module": "Control.Monad.Exception",
        "fct-package": "exception-transformers",
        "fct-signature": "(m (Either SomeException a) -\u003e n (Either SomeException b)) -\u003e ExceptionT m a -\u003e ExceptionT n b",
        "fct-source": "src/Control-Monad-Exception.html#mapExceptionT",
        "fct-type": "function",
        "title": "mapExceptionT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception",
        "module": "Control.Monad.Exception",
        "name": "mapExceptionT",
        "normalized": "(a(Either SomeException b)-\u003ec(Either SomeException d))-\u003eExceptionT a b-\u003eExceptionT c d",
        "package": "exception-transformers",
        "partial": "Exception",
        "signature": "(m(Either SomeException a)-\u003en(Either SomeException b))-\u003eExceptionT m a-\u003eExceptionT n b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exception-transformers/docs/Control-Monad-Exception.html#v:mask",
      "description": {
        "fct-descr": "\u003cp\u003eExecutes a computation with asynchronous exceptions \u003cem\u003emasked\u003c/em\u003e. The\n argument passed to \u003ccode\u003e\u003ca\u003emask\u003c/a\u003e\u003c/code\u003e is a function that takes as its argument\n another function, which can be used to restore the prevailing masking\n state within the context of the masked computation.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception",
        "fct-package": "exception-transformers",
        "fct-signature": "((forall a.  m a -\u003e m a) -\u003e m b) -\u003e m b",
        "fct-source": "src/Control-Monad-Exception.html#mask",
        "fct-type": "method",
        "title": "mask"
      },
      "index": {
        "description": "Executes computation with asynchronous exceptions masked The argument passed to mask is function that takes as its argument another function which can be used to restore the prevailing masking state within the context of the masked computation",
        "hierarchy": "Control Monad Exception",
        "module": "Control.Monad.Exception",
        "name": "mask",
        "normalized": "((a b c d-\u003ec d)-\u003ec e)-\u003ec e",
        "package": "exception-transformers",
        "partial": "",
        "signature": "((forall a. m a-\u003em a)-\u003em b)-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exception-transformers/docs/Control-Monad-Exception.html#v:onException",
      "description": {
        "fct-descr": "\u003cp\u003eIf an exception is raised by the computation, then perform a final action\n and re-raise the exception.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception",
        "fct-package": "exception-transformers",
        "fct-signature": "m a-\u003e m b-\u003e m a",
        "fct-type": "function",
        "title": "onException"
      },
      "index": {
        "description": "If an exception is raised by the computation then perform final action and re-raise the exception",
        "hierarchy": "Control Monad Exception",
        "module": "Control.Monad.Exception",
        "name": "onException",
        "normalized": "a b-\u003ea c-\u003ea b",
        "package": "exception-transformers",
        "partial": "Exception",
        "signature": "m a-\u003em b-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exception-transformers/docs/Control-Monad-Exception.html#v:runExceptionT",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Exception",
        "fct-package": "exception-transformers",
        "fct-signature": "m (Either SomeException a)",
        "fct-source": "src/Control-Monad-Exception.html#ExceptionT",
        "fct-type": "function",
        "title": "runExceptionT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception",
        "module": "Control.Monad.Exception",
        "name": "runExceptionT",
        "normalized": "",
        "package": "exception-transformers",
        "partial": "Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exception-transformers/docs/Control-Monad-Exception.html#v:throw",
      "description": {
        "fct-descr": "\u003cp\u003eThrow an exception.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception",
        "fct-package": "exception-transformers",
        "fct-signature": "e -\u003e m a",
        "fct-source": "src/Control-Monad-Exception.html#throw",
        "fct-type": "method",
        "title": "throw"
      },
      "index": {
        "description": "Throw an exception",
        "hierarchy": "Control Monad Exception",
        "module": "Control.Monad.Exception",
        "name": "throw",
        "normalized": "a-\u003eb c",
        "package": "exception-transformers",
        "partial": "",
        "signature": "e-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exception-transformers/docs/Control-Monad-Exception.html#v:toException",
      "description": {
        "fct-module": "Control.Monad.Exception",
        "fct-package": "exception-transformers",
        "fct-signature": "e -\u003e SomeException",
        "fct-type": "method",
        "title": "toException"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception",
        "module": "Control.Monad.Exception",
        "name": "toException",
        "normalized": "a-\u003eSomeException",
        "package": "exception-transformers",
        "partial": "Exception",
        "signature": "e-\u003eSomeException"
      }
    }
  }
]