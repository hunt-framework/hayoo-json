[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exceptions/docs/Control-Monad-Catch-Pure.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module supplies a \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e monad transformer that can be used for\n mock-testing code that throws exceptions, so long as those exceptions\n are always thrown with \u003ccode\u003e\u003ca\u003ethrowM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eDo not mix \u003ccode\u003e\u003ca\u003eCatchT\u003c/a\u003e\u003c/code\u003e with \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e. Choose one or the other for the\n bottom of your transformer stack!\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Catch.Pure",
        "fct-package": "exceptions",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Catch-Pure.html",
        "fct-type": "module",
        "title": "Pure"
      },
      "index": {
        "description": "This module supplies pure monad transformer that can be used for mock-testing code that throws exceptions so long as those exceptions are always thrown with throwM Do not mix CatchT with IO Choose one or the other for the bottom of your transformer stack",
        "hierarchy": "Control Monad Catch Pure",
        "module": "Control.Monad.Catch.Pure",
        "name": "Pure",
        "normalized": "",
        "package": "exceptions",
        "partial": "Pure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exceptions/docs/Control-Monad-Catch-Pure.html#t:Catch",
      "description": {
        "fct-module": "Control.Monad.Catch.Pure",
        "fct-package": "exceptions",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-Catch-Pure.html#Catch",
        "fct-type": "type",
        "title": "Catch"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Catch Pure",
        "module": "Control.Monad.Catch.Pure",
        "name": "Catch",
        "normalized": "",
        "package": "exceptions",
        "partial": "Catch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exceptions/docs/Control-Monad-Catch-Pure.html#t:CatchT",
      "description": {
        "fct-descr": "\u003cp\u003eAdd \u003ccode\u003e\u003ca\u003eException\u003c/a\u003e\u003c/code\u003e handling abilities to a \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis should \u003cem\u003enever\u003c/em\u003e be used in combination with \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e. Think of \u003ccode\u003e\u003ca\u003eCatchT\u003c/a\u003e\u003c/code\u003e\n as an alternative base monad for use with mocking code that solely throws\n exceptions via \u003ccode\u003e\u003ca\u003ethrowM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote: that \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad has these abilities already, so stacking \u003ccode\u003e\u003ca\u003eCatchT\u003c/a\u003e\u003c/code\u003e on top\n of it does not add any value and can possibly be confusing:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(error \"Hello!\" :: IO ()) `catch` (\\(e :: ErrorCall) -\u003e liftIO $ print e)\n\u003c/code\u003e\u003c/strong\u003eHello!\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003erunCatchT $ (error \"Hello!\" :: CatchT IO ()) `catch` (\\(e :: ErrorCall) -\u003e liftIO $ print e)\n\u003c/code\u003e\u003c/strong\u003e*** Exception: Hello!\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003erunCatchT $ (throwM (ErrorCall \"Hello!\") :: CatchT IO ()) `catch` (\\(e :: ErrorCall) -\u003e liftIO $ print e)\n\u003c/code\u003e\u003c/strong\u003eHello!\n\u003c/pre\u003e",
        "fct-module": "Control.Monad.Catch.Pure",
        "fct-package": "exceptions",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Monad-Catch-Pure.html#CatchT",
        "fct-type": "newtype",
        "title": "CatchT"
      },
      "index": {
        "description": "Add Exception handling abilities to Monad This should never be used in combination with IO Think of CatchT as an alternative base monad for use with mocking code that solely throws exceptions via throwM Note that IO monad has these abilities already so stacking CatchT on top of it does not add any value and can possibly be confusing error Hello IO catch ErrorCall liftIO print Hello runCatchT error Hello CatchT IO catch ErrorCall liftIO print Exception Hello runCatchT throwM ErrorCall Hello CatchT IO catch ErrorCall liftIO print Hello",
        "hierarchy": "Control Monad Catch Pure",
        "module": "Control.Monad.Catch.Pure",
        "name": "CatchT",
        "normalized": "",
        "package": "exceptions",
        "partial": "Catch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exceptions/docs/Control-Monad-Catch-Pure.html#v:CatchT",
      "description": {
        "fct-module": "Control.Monad.Catch.Pure",
        "fct-package": "exceptions",
        "fct-signature": "CatchT",
        "fct-source": "src/Control-Monad-Catch-Pure.html#CatchT",
        "fct-type": "function",
        "title": "CatchT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Catch Pure",
        "module": "Control.Monad.Catch.Pure",
        "name": "CatchT",
        "normalized": "",
        "package": "exceptions",
        "partial": "Catch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exceptions/docs/Control-Monad-Catch-Pure.html#v:mapCatchT",
      "description": {
        "fct-descr": "\u003cp\u003eMap the unwrapped computation using the given function.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ccode\u003erunErrorT\u003c/code\u003e (\u003ccode\u003emapErrorT\u003c/code\u003e f m) = f (\u003ccode\u003erunErrorT\u003c/code\u003e m\u003c/code\u003e)\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Catch.Pure",
        "fct-package": "exceptions",
        "fct-signature": "(m (Either SomeException a) -\u003e n (Either SomeException b)) -\u003e CatchT m a -\u003e CatchT n b",
        "fct-source": "src/Control-Monad-Catch-Pure.html#mapCatchT",
        "fct-type": "function",
        "title": "mapCatchT"
      },
      "index": {
        "description": "Map the unwrapped computation using the given function runErrorT mapErrorT runErrorT",
        "hierarchy": "Control Monad Catch Pure",
        "module": "Control.Monad.Catch.Pure",
        "name": "mapCatchT",
        "normalized": "(a(Either SomeException b)-\u003ec(Either SomeException d))-\u003eCatchT a b-\u003eCatchT c d",
        "package": "exceptions",
        "partial": "Catch",
        "signature": "(m(Either SomeException a)-\u003en(Either SomeException b))-\u003eCatchT m a-\u003eCatchT n b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exceptions/docs/Control-Monad-Catch-Pure.html#v:runCatch",
      "description": {
        "fct-module": "Control.Monad.Catch.Pure",
        "fct-package": "exceptions",
        "fct-signature": "Catch a -\u003e Either SomeException a",
        "fct-source": "src/Control-Monad-Catch-Pure.html#runCatch",
        "fct-type": "function",
        "title": "runCatch"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Catch Pure",
        "module": "Control.Monad.Catch.Pure",
        "name": "runCatch",
        "normalized": "Catch a-\u003eEither SomeException a",
        "package": "exceptions",
        "partial": "Catch",
        "signature": "Catch a-\u003eEither SomeException a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exceptions/docs/Control-Monad-Catch-Pure.html#v:runCatchT",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Catch.Pure",
        "fct-package": "exceptions",
        "fct-signature": "m (Either SomeException a)",
        "fct-source": "src/Control-Monad-Catch-Pure.html#CatchT",
        "fct-type": "function",
        "title": "runCatchT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Catch Pure",
        "module": "Control.Monad.Catch.Pure",
        "name": "runCatchT",
        "normalized": "",
        "package": "exceptions",
        "partial": "Catch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exceptions/docs/Control-Monad-Catch.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module supports monads that can throw extensible exceptions. The\n exceptions are the very same from \u003ca\u003eControl.Exception\u003c/a\u003e, and the operations\n offered very similar, but here they are not limited to \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis code is in the style of both transformers and mtl, and is compatible\n with them, though doesn't mimic the module structure or offer the complete\n range of features in those packages.\n\u003c/p\u003e\u003cp\u003eThis is very similar to \u003ccode\u003eErrorT\u003c/code\u003e and \u003ccode\u003eMonadError\u003c/code\u003e, but based on features of\n \u003ca\u003eControl.Exception\u003c/a\u003e. In particular, it handles the complex case of\n asynchronous exceptions by including \u003ccode\u003e\u003ca\u003emask\u003c/a\u003e\u003c/code\u003e in the typeclass. Note that the\n extensible extensions feature relies the RankNTypes language extension.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Catch",
        "fct-package": "exceptions",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Catch.html",
        "fct-type": "module",
        "title": "Catch"
      },
      "index": {
        "description": "This module supports monads that can throw extensible exceptions The exceptions are the very same from Control.Exception and the operations offered very similar but here they are not limited to IO This code is in the style of both transformers and mtl and is compatible with them though doesn mimic the module structure or offer the complete range of features in those packages This is very similar to ErrorT and MonadError but based on features of Control.Exception In particular it handles the complex case of asynchronous exceptions by including mask in the typeclass Note that the extensible extensions feature relies the RankNTypes language extension",
        "hierarchy": "Control Monad Catch",
        "module": "Control.Monad.Catch",
        "name": "Catch",
        "normalized": "",
        "package": "exceptions",
        "partial": "Catch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exceptions/docs/Control-Monad-Catch.html#t:Exception",
      "description": {
        "fct-descr": "\u003cp\u003eAny type that you wish to throw or catch as an exception must be an\ninstance of the \u003ccode\u003eException\u003c/code\u003e class. The simplest case is a new exception\ntype directly below the root:\n\u003c/p\u003e\u003cpre\u003e data MyException = ThisException | ThatException\n     deriving (Show, Typeable)\n\n instance Exception MyException\n\u003c/pre\u003e\u003cp\u003eThe default method definitions in the \u003ccode\u003eException\u003c/code\u003e class do what we need\nin this case. You can now throw and catch \u003ccode\u003eThisException\u003c/code\u003e and\n\u003ccode\u003eThatException\u003c/code\u003e as exceptions:\n\u003c/p\u003e\u003cpre\u003e\n*Main\u003e throw ThisException `catch` \\e -\u003e putStrLn (\"Caught \" ++ show (e :: MyException))\nCaught ThisException\n\u003c/pre\u003e\u003cp\u003eIn more complicated examples, you may wish to define a whole hierarchy\nof exceptions:\n\u003c/p\u003e\u003cpre\u003e ---------------------------------------------------------------------\n -- Make the root exception type for all the exceptions in a compiler\n\n data SomeCompilerException = forall e . Exception e =\u003e SomeCompilerException e\n     deriving Typeable\n\n instance Show SomeCompilerException where\n     show (SomeCompilerException e) = show e\n\n instance Exception SomeCompilerException\n\n compilerExceptionToException :: Exception e =\u003e e -\u003e SomeException\n compilerExceptionToException = toException . SomeCompilerException\n\n compilerExceptionFromException :: Exception e =\u003e SomeException -\u003e Maybe e\n compilerExceptionFromException x = do\n     SomeCompilerException a \u003c- fromException x\n     cast a\n\n ---------------------------------------------------------------------\n -- Make a subhierarchy for exceptions in the frontend of the compiler\n\n data SomeFrontendException = forall e . Exception e =\u003e SomeFrontendException e\n     deriving Typeable\n\n instance Show SomeFrontendException where\n     show (SomeFrontendException e) = show e\n\n instance Exception SomeFrontendException where\n     toException = compilerExceptionToException\n     fromException = compilerExceptionFromException\n\n frontendExceptionToException :: Exception e =\u003e e -\u003e SomeException\n frontendExceptionToException = toException . SomeFrontendException\n\n frontendExceptionFromException :: Exception e =\u003e SomeException -\u003e Maybe e\n frontendExceptionFromException x = do\n     SomeFrontendException a \u003c- fromException x\n     cast a\n\n ---------------------------------------------------------------------\n -- Make an exception type for a particular frontend compiler exception\n\n data MismatchedParentheses = MismatchedParentheses\n     deriving (Typeable, Show)\n\n instance Exception MismatchedParentheses where\n     toException   = frontendExceptionToException\n     fromException = frontendExceptionFromException\n\u003c/pre\u003e\u003cp\u003eWe can now catch a \u003ccode\u003eMismatchedParentheses\u003c/code\u003e exception as\n\u003ccode\u003eMismatchedParentheses\u003c/code\u003e, \u003ccode\u003eSomeFrontendException\u003c/code\u003e or\n\u003ccode\u003eSomeCompilerException\u003c/code\u003e, but not other types, e.g. \u003ccode\u003eIOException\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\n*Main\u003e throw MismatchedParentheses \u003ccode\u003ecatch\u003c/code\u003e e -\u003e putStrLn (\"Caught \" ++ show (e :: MismatchedParentheses))\nCaught MismatchedParentheses\n*Main\u003e throw MismatchedParentheses \u003ccode\u003ecatch\u003c/code\u003e e -\u003e putStrLn (\"Caught \" ++ show (e :: SomeFrontendException))\nCaught MismatchedParentheses\n*Main\u003e throw MismatchedParentheses \u003ccode\u003ecatch\u003c/code\u003e e -\u003e putStrLn (\"Caught \" ++ show (e :: SomeCompilerException))\nCaught MismatchedParentheses\n*Main\u003e throw MismatchedParentheses \u003ccode\u003ecatch\u003c/code\u003e e -\u003e putStrLn (\"Caught \" ++ show (e :: IOException))\n*** Exception: MismatchedParentheses\n\u003c/pre\u003e",
        "fct-module": "Control.Monad.Catch",
        "fct-package": "exceptions",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "Exception"
      },
      "index": {
        "description": "Any type that you wish to throw or catch as an exception must be an instance of the Exception class The simplest case is new exception type directly below the root data MyException ThisException ThatException deriving Show Typeable instance Exception MyException The default method definitions in the Exception class do what we need in this case You can now throw and catch ThisException and ThatException as exceptions Main throw ThisException catch putStrLn Caught show MyException Caught ThisException In more complicated examples you may wish to define whole hierarchy of exceptions Make the root exception type for all the exceptions in compiler data SomeCompilerException forall Exception SomeCompilerException deriving Typeable instance Show SomeCompilerException where show SomeCompilerException show instance Exception SomeCompilerException compilerExceptionToException Exception SomeException compilerExceptionToException toException SomeCompilerException compilerExceptionFromException Exception SomeException Maybe compilerExceptionFromException do SomeCompilerException fromException cast Make subhierarchy for exceptions in the frontend of the compiler data SomeFrontendException forall Exception SomeFrontendException deriving Typeable instance Show SomeFrontendException where show SomeFrontendException show instance Exception SomeFrontendException where toException compilerExceptionToException fromException compilerExceptionFromException frontendExceptionToException Exception SomeException frontendExceptionToException toException SomeFrontendException frontendExceptionFromException Exception SomeException Maybe frontendExceptionFromException do SomeFrontendException fromException cast Make an exception type for particular frontend compiler exception data MismatchedParentheses MismatchedParentheses deriving Typeable Show instance Exception MismatchedParentheses where toException frontendExceptionToException fromException frontendExceptionFromException We can now catch MismatchedParentheses exception as MismatchedParentheses SomeFrontendException or SomeCompilerException but not other types e.g IOException Main throw MismatchedParentheses catch putStrLn Caught show MismatchedParentheses Caught MismatchedParentheses Main throw MismatchedParentheses catch putStrLn Caught show SomeFrontendException Caught MismatchedParentheses Main throw MismatchedParentheses catch putStrLn Caught show SomeCompilerException Caught MismatchedParentheses Main throw MismatchedParentheses catch putStrLn Caught show IOException Exception MismatchedParentheses",
        "hierarchy": "Control Monad Catch",
        "module": "Control.Monad.Catch",
        "name": "Exception",
        "normalized": "",
        "package": "exceptions",
        "partial": "Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exceptions/docs/Control-Monad-Catch.html#t:Handler",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003eHandler\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Catch",
        "fct-package": "exceptions",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-Catch.html#Handler",
        "fct-type": "data",
        "title": "Handler"
      },
      "index": {
        "description": "Generalized version of Handler",
        "hierarchy": "Control Monad Catch",
        "module": "Control.Monad.Catch",
        "name": "Handler",
        "normalized": "",
        "package": "exceptions",
        "partial": "Handler",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exceptions/docs/Control-Monad-Catch.html#t:MonadCatch",
      "description": {
        "fct-module": "Control.Monad.Catch",
        "fct-package": "exceptions",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Catch.html#MonadCatch",
        "fct-type": "class",
        "title": "MonadCatch"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Catch",
        "module": "Control.Monad.Catch",
        "name": "MonadCatch",
        "normalized": "",
        "package": "exceptions",
        "partial": "Monad Catch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exceptions/docs/Control-Monad-Catch.html#t:SomeException",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003eSomeException\u003c/code\u003e type is the root of the exception type hierarchy.\nWhen an exception of type \u003ccode\u003ee\u003c/code\u003e is thrown, behind the scenes it is\nencapsulated in a \u003ccode\u003eSomeException\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Catch",
        "fct-package": "exceptions",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "SomeException"
      },
      "index": {
        "description": "The SomeException type is the root of the exception type hierarchy When an exception of type is thrown behind the scenes it is encapsulated in SomeException",
        "hierarchy": "Control Monad Catch",
        "module": "Control.Monad.Catch",
        "name": "SomeException",
        "normalized": "",
        "package": "exceptions",
        "partial": "Some Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exceptions/docs/Control-Monad-Catch.html#v:Handler",
      "description": {
        "fct-module": "Control.Monad.Catch",
        "fct-package": "exceptions",
        "fct-signature": "Handler (e -\u003e m a)",
        "fct-source": "src/Control-Monad-Catch.html#Handler",
        "fct-type": "function",
        "title": "Handler"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Catch",
        "module": "Control.Monad.Catch",
        "name": "Handler",
        "normalized": "Handler(a-\u003eb c)",
        "package": "exceptions",
        "partial": "Handler",
        "signature": "Handler(e-\u003em a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exceptions/docs/Control-Monad-Catch.html#v:SomeException",
      "description": {
        "fct-module": "Control.Monad.Catch",
        "fct-package": "exceptions",
        "fct-signature": "e -\u003e SomeException",
        "fct-type": "function",
        "title": "SomeException"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Catch",
        "module": "Control.Monad.Catch",
        "name": "SomeException",
        "normalized": "a-\u003eSomeException",
        "package": "exceptions",
        "partial": "Some Exception",
        "signature": "e-\u003eSomeException"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exceptions/docs/Control-Monad-Catch.html#v:bracket",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized abstracted pattern of safe resource acquisition and release\n in the face of exceptions. The first action \"acquires\" some value, which\n is \"released\" by the second action at the end. The third action \"uses\"\n the value and its result is the result of the \u003ccode\u003e\u003ca\u003ebracket\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf an exception occurs during the use, the release still happens before the\n exception is rethrown.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Catch",
        "fct-package": "exceptions",
        "fct-signature": "m a -\u003e (a -\u003e m b) -\u003e (a -\u003e m c) -\u003e m c",
        "fct-source": "src/Control-Monad-Catch.html#bracket",
        "fct-type": "function",
        "title": "bracket"
      },
      "index": {
        "description": "Generalized abstracted pattern of safe resource acquisition and release in the face of exceptions The first action acquires some value which is released by the second action at the end The third action uses the value and its result is the result of the bracket If an exception occurs during the use the release still happens before the exception is rethrown",
        "hierarchy": "Control Monad Catch",
        "module": "Control.Monad.Catch",
        "name": "bracket",
        "normalized": "a b-\u003e(b-\u003ea c)-\u003e(b-\u003ea d)-\u003ea d",
        "package": "exceptions",
        "partial": "",
        "signature": "m a-\u003e(a-\u003em b)-\u003e(a-\u003em c)-\u003em c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exceptions/docs/Control-Monad-Catch.html#v:bracketOnError",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ebracket\u003c/a\u003e\u003c/code\u003e, but only performs the final action if there was an\n exception raised by the in-between computation.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Catch",
        "fct-package": "exceptions",
        "fct-signature": "m a -\u003e (a -\u003e m b) -\u003e (a -\u003e m c) -\u003e m c",
        "fct-source": "src/Control-Monad-Catch.html#bracketOnError",
        "fct-type": "function",
        "title": "bracketOnError"
      },
      "index": {
        "description": "Like bracket but only performs the final action if there was an exception raised by the in-between computation",
        "hierarchy": "Control Monad Catch",
        "module": "Control.Monad.Catch",
        "name": "bracketOnError",
        "normalized": "a b-\u003e(b-\u003ea c)-\u003e(b-\u003ea d)-\u003ea d",
        "package": "exceptions",
        "partial": "On Error",
        "signature": "m a-\u003e(a-\u003em b)-\u003e(a-\u003em c)-\u003em c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exceptions/docs/Control-Monad-Catch.html#v:bracket_",
      "description": {
        "fct-descr": "\u003cp\u003eVersion of \u003ccode\u003e\u003ca\u003ebracket\u003c/a\u003e\u003c/code\u003e without any value being passed to the second and\n third actions.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Catch",
        "fct-package": "exceptions",
        "fct-signature": "m a -\u003e m b -\u003e m c -\u003e m c",
        "fct-source": "src/Control-Monad-Catch.html#bracket_",
        "fct-type": "function",
        "title": "bracket_"
      },
      "index": {
        "description": "Version of bracket without any value being passed to the second and third actions",
        "hierarchy": "Control Monad Catch",
        "module": "Control.Monad.Catch",
        "name": "bracket_",
        "normalized": "a b-\u003ea c-\u003ea d-\u003ea d",
        "package": "exceptions",
        "partial": "",
        "signature": "m a-\u003em b-\u003em c-\u003em c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exceptions/docs/Control-Monad-Catch.html#v:catch",
      "description": {
        "fct-descr": "\u003cp\u003eProvide a handler for exceptions thrown during execution of the first\n action. Note that type of the type of the argument to the handler will\n constrain which exceptions are caught. See \u003ca\u003eControl.Exception\u003c/a\u003e's\n \u003ccode\u003e\u003ca\u003ecatch\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Catch",
        "fct-package": "exceptions",
        "fct-signature": "m a -\u003e (e -\u003e m a) -\u003e m a",
        "fct-source": "src/Control-Monad-Catch.html#catch",
        "fct-type": "method",
        "title": "catch"
      },
      "index": {
        "description": "Provide handler for exceptions thrown during execution of the first action Note that type of the type of the argument to the handler will constrain which exceptions are caught See Control.Exception catch",
        "hierarchy": "Control Monad Catch",
        "module": "Control.Monad.Catch",
        "name": "catch",
        "normalized": "a b-\u003e(c-\u003ea b)-\u003ea b",
        "package": "exceptions",
        "partial": "",
        "signature": "m a-\u003e(e-\u003em a)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exceptions/docs/Control-Monad-Catch.html#v:catchAll",
      "description": {
        "fct-descr": "\u003cp\u003eCatches all exceptions, and somewhat defeats the purpose of the extensible\n exception system. Use sparingly.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Catch",
        "fct-package": "exceptions",
        "fct-signature": "m a -\u003e (SomeException -\u003e m a) -\u003e m a",
        "fct-source": "src/Control-Monad-Catch.html#catchAll",
        "fct-type": "function",
        "title": "catchAll"
      },
      "index": {
        "description": "Catches all exceptions and somewhat defeats the purpose of the extensible exception system Use sparingly",
        "hierarchy": "Control Monad Catch",
        "module": "Control.Monad.Catch",
        "name": "catchAll",
        "normalized": "a b-\u003e(SomeException-\u003ea b)-\u003ea b",
        "package": "exceptions",
        "partial": "All",
        "signature": "m a-\u003e(SomeException-\u003em a)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exceptions/docs/Control-Monad-Catch.html#v:catchIOError",
      "description": {
        "fct-descr": "\u003cp\u003eCatch all \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e (eqv. \u003ccode\u003eIOException\u003c/code\u003e) exceptions. Still somewhat too\n general, but better than using \u003ccode\u003e\u003ca\u003ecatchAll\u003c/a\u003e\u003c/code\u003e. See \u003ccode\u003e\u003ca\u003ecatchIf\u003c/a\u003e\u003c/code\u003e for an easy way\n of catching specific \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003es based on the predicates in \u003ca\u003eSystem.IO.Error\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Catch",
        "fct-package": "exceptions",
        "fct-signature": "m a -\u003e (IOError -\u003e m a) -\u003e m a",
        "fct-source": "src/Control-Monad-Catch.html#catchIOError",
        "fct-type": "function",
        "title": "catchIOError"
      },
      "index": {
        "description": "Catch all IOError eqv IOException exceptions Still somewhat too general but better than using catchAll See catchIf for an easy way of catching specific IOError based on the predicates in System.IO.Error",
        "hierarchy": "Control Monad Catch",
        "module": "Control.Monad.Catch",
        "name": "catchIOError",
        "normalized": "a b-\u003e(IOError-\u003ea b)-\u003ea b",
        "package": "exceptions",
        "partial": "IOError",
        "signature": "m a-\u003e(IOError-\u003em a)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exceptions/docs/Control-Monad-Catch.html#v:catchIf",
      "description": {
        "fct-descr": "\u003cp\u003eCatch exceptions only if they pass some predicate. Often useful with the\n predicates for testing \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e values in \u003ca\u003eSystem.IO.Error\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Catch",
        "fct-package": "exceptions",
        "fct-signature": "(e -\u003e Bool) -\u003e m a -\u003e (e -\u003e m a) -\u003e m a",
        "fct-source": "src/Control-Monad-Catch.html#catchIf",
        "fct-type": "function",
        "title": "catchIf"
      },
      "index": {
        "description": "Catch exceptions only if they pass some predicate Often useful with the predicates for testing IOError values in System.IO.Error",
        "hierarchy": "Control Monad Catch",
        "module": "Control.Monad.Catch",
        "name": "catchIf",
        "normalized": "(a-\u003eBool)-\u003eb c-\u003e(a-\u003eb c)-\u003eb c",
        "package": "exceptions",
        "partial": "If",
        "signature": "(e-\u003eBool)-\u003em a-\u003e(e-\u003em a)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exceptions/docs/Control-Monad-Catch.html#v:catchJust",
      "description": {
        "fct-descr": "\u003cp\u003eA more generalized way of determining which exceptions to catch at\n run time.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Catch",
        "fct-package": "exceptions",
        "fct-signature": "(e -\u003e Maybe b) -\u003e m a -\u003e (b -\u003e m a) -\u003e m a",
        "fct-source": "src/Control-Monad-Catch.html#catchJust",
        "fct-type": "function",
        "title": "catchJust"
      },
      "index": {
        "description": "more generalized way of determining which exceptions to catch at run time",
        "hierarchy": "Control Monad Catch",
        "module": "Control.Monad.Catch",
        "name": "catchJust",
        "normalized": "(a-\u003eMaybe b)-\u003ec d-\u003e(b-\u003ec d)-\u003ec d",
        "package": "exceptions",
        "partial": "Just",
        "signature": "(e-\u003eMaybe b)-\u003em a-\u003e(b-\u003em a)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exceptions/docs/Control-Monad-Catch.html#v:catches",
      "description": {
        "fct-descr": "\u003cp\u003eCatches different sorts of exceptions. See \u003ca\u003eControl.Exception\u003c/a\u003e's \u003ccode\u003e\u003ca\u003ecatches\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Catch",
        "fct-package": "exceptions",
        "fct-signature": "m a -\u003e f (Handler m a) -\u003e m a",
        "fct-source": "src/Control-Monad-Catch.html#catches",
        "fct-type": "function",
        "title": "catches"
      },
      "index": {
        "description": "Catches different sorts of exceptions See Control.Exception catches",
        "hierarchy": "Control Monad Catch",
        "module": "Control.Monad.Catch",
        "name": "catches",
        "normalized": "a b-\u003ec(Handler a b)-\u003ea b",
        "package": "exceptions",
        "partial": "",
        "signature": "m a-\u003ef(Handler m a)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exceptions/docs/Control-Monad-Catch.html#v:finally",
      "description": {
        "fct-descr": "\u003cp\u003ePerform an action with a finalizer action that is run, even if an\n exception occurs.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Catch",
        "fct-package": "exceptions",
        "fct-signature": "m a -\u003e m b -\u003e m a",
        "fct-source": "src/Control-Monad-Catch.html#finally",
        "fct-type": "function",
        "title": "finally"
      },
      "index": {
        "description": "Perform an action with finalizer action that is run even if an exception occurs",
        "hierarchy": "Control Monad Catch",
        "module": "Control.Monad.Catch",
        "name": "finally",
        "normalized": "a b-\u003ea c-\u003ea b",
        "package": "exceptions",
        "partial": "",
        "signature": "m a-\u003em b-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exceptions/docs/Control-Monad-Catch.html#v:fromException",
      "description": {
        "fct-module": "Control.Monad.Catch",
        "fct-package": "exceptions",
        "fct-signature": "SomeException -\u003e Maybe e",
        "fct-type": "method",
        "title": "fromException"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Catch",
        "module": "Control.Monad.Catch",
        "name": "fromException",
        "normalized": "SomeException-\u003eMaybe a",
        "package": "exceptions",
        "partial": "Exception",
        "signature": "SomeException-\u003eMaybe e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exceptions/docs/Control-Monad-Catch.html#v:handle",
      "description": {
        "fct-descr": "\u003cp\u003eFlipped \u003ccode\u003e\u003ca\u003ecatch\u003c/a\u003e\u003c/code\u003e. See \u003ca\u003eControl.Exception\u003c/a\u003e's \u003ccode\u003e\u003ca\u003ehandle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Catch",
        "fct-package": "exceptions",
        "fct-signature": "(e -\u003e m a) -\u003e m a -\u003e m a",
        "fct-source": "src/Control-Monad-Catch.html#handle",
        "fct-type": "function",
        "title": "handle"
      },
      "index": {
        "description": "Flipped catch See Control.Exception handle",
        "hierarchy": "Control Monad Catch",
        "module": "Control.Monad.Catch",
        "name": "handle",
        "normalized": "(a-\u003eb c)-\u003eb c-\u003eb c",
        "package": "exceptions",
        "partial": "",
        "signature": "(e-\u003em a)-\u003em a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exceptions/docs/Control-Monad-Catch.html#v:handleAll",
      "description": {
        "fct-descr": "\u003cp\u003eFlipped \u003ccode\u003e\u003ca\u003ecatchAll\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Catch",
        "fct-package": "exceptions",
        "fct-signature": "(SomeException -\u003e m a) -\u003e m a -\u003e m a",
        "fct-source": "src/Control-Monad-Catch.html#handleAll",
        "fct-type": "function",
        "title": "handleAll"
      },
      "index": {
        "description": "Flipped catchAll",
        "hierarchy": "Control Monad Catch",
        "module": "Control.Monad.Catch",
        "name": "handleAll",
        "normalized": "(SomeException-\u003ea b)-\u003ea b-\u003ea b",
        "package": "exceptions",
        "partial": "All",
        "signature": "(SomeException-\u003em a)-\u003em a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exceptions/docs/Control-Monad-Catch.html#v:handleIOError",
      "description": {
        "fct-descr": "\u003cp\u003eFlipped \u003ccode\u003e\u003ca\u003ecatchIOError\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Catch",
        "fct-package": "exceptions",
        "fct-signature": "(IOError -\u003e m a) -\u003e m a -\u003e m a",
        "fct-source": "src/Control-Monad-Catch.html#handleIOError",
        "fct-type": "function",
        "title": "handleIOError"
      },
      "index": {
        "description": "Flipped catchIOError",
        "hierarchy": "Control Monad Catch",
        "module": "Control.Monad.Catch",
        "name": "handleIOError",
        "normalized": "(IOError-\u003ea b)-\u003ea b-\u003ea b",
        "package": "exceptions",
        "partial": "IOError",
        "signature": "(IOError-\u003em a)-\u003em a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exceptions/docs/Control-Monad-Catch.html#v:handleIf",
      "description": {
        "fct-descr": "\u003cp\u003eFlipped \u003ccode\u003e\u003ca\u003ecatchIf\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Catch",
        "fct-package": "exceptions",
        "fct-signature": "(e -\u003e Bool) -\u003e (e -\u003e m a) -\u003e m a -\u003e m a",
        "fct-source": "src/Control-Monad-Catch.html#handleIf",
        "fct-type": "function",
        "title": "handleIf"
      },
      "index": {
        "description": "Flipped catchIf",
        "hierarchy": "Control Monad Catch",
        "module": "Control.Monad.Catch",
        "name": "handleIf",
        "normalized": "(a-\u003eBool)-\u003e(a-\u003eb c)-\u003eb c-\u003eb c",
        "package": "exceptions",
        "partial": "If",
        "signature": "(e-\u003eBool)-\u003e(e-\u003em a)-\u003em a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exceptions/docs/Control-Monad-Catch.html#v:handleJust",
      "description": {
        "fct-descr": "\u003cp\u003eFlipped \u003ccode\u003e\u003ca\u003ecatchJust\u003c/a\u003e\u003c/code\u003e. See \u003ca\u003eControl.Exception\u003c/a\u003e's \u003ccode\u003e\u003ca\u003ehandleJust\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Catch",
        "fct-package": "exceptions",
        "fct-signature": "(e -\u003e Maybe b) -\u003e (b -\u003e m a) -\u003e m a -\u003e m a",
        "fct-source": "src/Control-Monad-Catch.html#handleJust",
        "fct-type": "function",
        "title": "handleJust"
      },
      "index": {
        "description": "Flipped catchJust See Control.Exception handleJust",
        "hierarchy": "Control Monad Catch",
        "module": "Control.Monad.Catch",
        "name": "handleJust",
        "normalized": "(a-\u003eMaybe b)-\u003e(b-\u003ec d)-\u003ec d-\u003ec d",
        "package": "exceptions",
        "partial": "Just",
        "signature": "(e-\u003eMaybe b)-\u003e(b-\u003em a)-\u003em a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exceptions/docs/Control-Monad-Catch.html#v:mask",
      "description": {
        "fct-descr": "\u003cp\u003eRuns an action with asynchronous exceptions disabled. The action is\n provided a method for restoring the async. environment to what it was\n at the \u003ccode\u003e\u003ca\u003emask\u003c/a\u003e\u003c/code\u003e call. See \u003ca\u003eControl.Exception\u003c/a\u003e's \u003ccode\u003e\u003ca\u003emask\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Catch",
        "fct-package": "exceptions",
        "fct-signature": "((forall a.  m a -\u003e m a) -\u003e m b) -\u003e m b",
        "fct-source": "src/Control-Monad-Catch.html#mask",
        "fct-type": "method",
        "title": "mask"
      },
      "index": {
        "description": "Runs an action with asynchronous exceptions disabled The action is provided method for restoring the async environment to what it was at the mask call See Control.Exception mask",
        "hierarchy": "Control Monad Catch",
        "module": "Control.Monad.Catch",
        "name": "mask",
        "normalized": "((a b c d-\u003ec d)-\u003ec e)-\u003ec e",
        "package": "exceptions",
        "partial": "",
        "signature": "((forall a. m a-\u003em a)-\u003em b)-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exceptions/docs/Control-Monad-Catch.html#v:mask_",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003emask\u003c/a\u003e\u003c/code\u003e, but does not pass a \u003ccode\u003erestore\u003c/code\u003e action to the argument.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Catch",
        "fct-package": "exceptions",
        "fct-signature": "m a -\u003e m a",
        "fct-source": "src/Control-Monad-Catch.html#mask_",
        "fct-type": "function",
        "title": "mask_"
      },
      "index": {
        "description": "Like mask but does not pass restore action to the argument",
        "hierarchy": "Control Monad Catch",
        "module": "Control.Monad.Catch",
        "name": "mask_",
        "normalized": "a b-\u003ea b",
        "package": "exceptions",
        "partial": "",
        "signature": "m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exceptions/docs/Control-Monad-Catch.html#v:onException",
      "description": {
        "fct-descr": "\u003cp\u003eRun an action only if an exception is thrown in the main action. The\n exception is not caught, simply rethrown.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Catch",
        "fct-package": "exceptions",
        "fct-signature": "m a -\u003e m b -\u003e m a",
        "fct-source": "src/Control-Monad-Catch.html#onException",
        "fct-type": "function",
        "title": "onException"
      },
      "index": {
        "description": "Run an action only if an exception is thrown in the main action The exception is not caught simply rethrown",
        "hierarchy": "Control Monad Catch",
        "module": "Control.Monad.Catch",
        "name": "onException",
        "normalized": "a b-\u003ea c-\u003ea b",
        "package": "exceptions",
        "partial": "Exception",
        "signature": "m a-\u003em b-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exceptions/docs/Control-Monad-Catch.html#v:throwM",
      "description": {
        "fct-descr": "\u003cp\u003eThrow an exception. Note that this throws when this action is run in\n the monad \u003ccode\u003em\u003c/code\u003e, not when it is applied. It is a generalization of\n \u003ca\u003eControl.Exception\u003c/a\u003e's \u003ccode\u003e\u003ca\u003ethrowIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Catch",
        "fct-package": "exceptions",
        "fct-signature": "e -\u003e m a",
        "fct-source": "src/Control-Monad-Catch.html#throwM",
        "fct-type": "method",
        "title": "throwM"
      },
      "index": {
        "description": "Throw an exception Note that this throws when this action is run in the monad not when it is applied It is generalization of Control.Exception throwIO",
        "hierarchy": "Control Monad Catch",
        "module": "Control.Monad.Catch",
        "name": "throwM",
        "normalized": "a-\u003eb c",
        "package": "exceptions",
        "partial": "",
        "signature": "e-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exceptions/docs/Control-Monad-Catch.html#v:toException",
      "description": {
        "fct-module": "Control.Monad.Catch",
        "fct-package": "exceptions",
        "fct-signature": "e -\u003e SomeException",
        "fct-type": "method",
        "title": "toException"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Catch",
        "module": "Control.Monad.Catch",
        "name": "toException",
        "normalized": "a-\u003eSomeException",
        "package": "exceptions",
        "partial": "Exception",
        "signature": "e-\u003eSomeException"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exceptions/docs/Control-Monad-Catch.html#v:try",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003ecatch\u003c/a\u003e\u003c/code\u003e, but returns an \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e result. See \u003ca\u003eControl.Exception\u003c/a\u003e's\n \u003ccode\u003e\u003ca\u003etry\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Catch",
        "fct-package": "exceptions",
        "fct-signature": "m a -\u003e m (Either e a)",
        "fct-source": "src/Control-Monad-Catch.html#try",
        "fct-type": "function",
        "title": "try"
      },
      "index": {
        "description": "Similar to catch but returns an Either result See Control.Exception try",
        "hierarchy": "Control Monad Catch",
        "module": "Control.Monad.Catch",
        "name": "try",
        "normalized": "a b-\u003ea(Either c b)",
        "package": "exceptions",
        "partial": "",
        "signature": "m a-\u003em(Either e a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exceptions/docs/Control-Monad-Catch.html#v:tryJust",
      "description": {
        "fct-descr": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003etry\u003c/a\u003e\u003c/code\u003e that takes an exception predicate to select\n which exceptions are caught. See \u003ca\u003eControl.Exception\u003c/a\u003e's \u003ccode\u003e\u003ca\u003etryJust\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Catch",
        "fct-package": "exceptions",
        "fct-signature": "(e -\u003e Maybe b) -\u003e m a -\u003e m (Either b a)",
        "fct-source": "src/Control-Monad-Catch.html#tryJust",
        "fct-type": "function",
        "title": "tryJust"
      },
      "index": {
        "description": "variant of try that takes an exception predicate to select which exceptions are caught See Control.Exception tryJust",
        "hierarchy": "Control Monad Catch",
        "module": "Control.Monad.Catch",
        "name": "tryJust",
        "normalized": "(a-\u003eMaybe b)-\u003ec d-\u003ec(Either b d)",
        "package": "exceptions",
        "partial": "Just",
        "signature": "(e-\u003eMaybe b)-\u003em a-\u003em(Either b a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exceptions/docs/Control-Monad-Catch.html#v:uninterruptibleMask",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003emask\u003c/a\u003e\u003c/code\u003e, but the masked computation is not interruptible (see\n \u003ca\u003eControl.Exception\u003c/a\u003e's \u003ccode\u003e\u003ca\u003euninterruptibleMask\u003c/a\u003e\u003c/code\u003e. WARNING:\n Only use if you need to mask exceptions around an interruptible operation\n AND you can guarantee the interruptible operation will only block for a\n short period of time. Otherwise you render the program/thread unresponsive\n and/or unkillable.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Catch",
        "fct-package": "exceptions",
        "fct-signature": "((forall a.  m a -\u003e m a) -\u003e m b) -\u003e m b",
        "fct-source": "src/Control-Monad-Catch.html#uninterruptibleMask",
        "fct-type": "method",
        "title": "uninterruptibleMask"
      },
      "index": {
        "description": "Like mask but the masked computation is not interruptible see Control.Exception uninterruptibleMask WARNING Only use if you need to mask exceptions around an interruptible operation AND you can guarantee the interruptible operation will only block for short period of time Otherwise you render the program thread unresponsive and or unkillable",
        "hierarchy": "Control Monad Catch",
        "module": "Control.Monad.Catch",
        "name": "uninterruptibleMask",
        "normalized": "((a b c d-\u003ec d)-\u003ec e)-\u003ec e",
        "package": "exceptions",
        "partial": "Mask",
        "signature": "((forall a. m a-\u003em a)-\u003em b)-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exceptions/docs/Control-Monad-Catch.html#v:uninterruptibleMask_",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003euninterruptibleMask\u003c/a\u003e\u003c/code\u003e, but does not pass a \u003ccode\u003erestore\u003c/code\u003e action to the\n argument.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Catch",
        "fct-package": "exceptions",
        "fct-signature": "m a -\u003e m a",
        "fct-source": "src/Control-Monad-Catch.html#uninterruptibleMask_",
        "fct-type": "function",
        "title": "uninterruptibleMask_"
      },
      "index": {
        "description": "Like uninterruptibleMask but does not pass restore action to the argument",
        "hierarchy": "Control Monad Catch",
        "module": "Control.Monad.Catch",
        "name": "uninterruptibleMask_",
        "normalized": "a b-\u003ea b",
        "package": "exceptions",
        "partial": "Mask",
        "signature": "m a-\u003em a"
      }
    }
  }
]