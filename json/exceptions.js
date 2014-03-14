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
        "word": "exceptions"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module supplies a \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e monad transformer that can be used for\n mock-testing code that throws exceptions, so long as those exceptions\n are always thrown with \u003ccode\u003e\u003ca\u003ethrowM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eDo not mix \u003ccode\u003e\u003ca\u003eCatchT\u003c/a\u003e\u003c/code\u003e with \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e. Choose one or the other for the\n bottom of your transformer stack!\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Catch.Pure",
          "name": "Pure",
          "package": "exceptions",
          "source": "src/Control-Monad-Catch-Pure.html",
          "type": "module"
        },
        "index": {
          "description": "This module supplies pure monad transformer that can be used for mock-testing code that throws exceptions so long as those exceptions are always thrown with throwM Do not mix CatchT with IO Choose one or the other for the bottom of your transformer stack",
          "hierarchy": "Control Monad Catch Pure",
          "module": "Control.Monad.Catch.Pure",
          "name": "Pure",
          "package": "exceptions",
          "partial": "Pure",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/exceptions/docs/Control-Monad-Catch-Pure.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Catch.Pure",
          "name": "Catch",
          "package": "exceptions",
          "source": "src/Control-Monad-Catch-Pure.html#Catch",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Monad Catch Pure",
          "module": "Control.Monad.Catch.Pure",
          "name": "Catch",
          "package": "exceptions",
          "partial": "Catch",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/exceptions/docs/Control-Monad-Catch-Pure.html#t:Catch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd \u003ccode\u003e\u003ca\u003eException\u003c/a\u003e\u003c/code\u003e handling abilities to a \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis should \u003cem\u003enever\u003c/em\u003e be used in combination with \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e. Think of \u003ccode\u003e\u003ca\u003eCatchT\u003c/a\u003e\u003c/code\u003e\n as an alternative base monad for use with mocking code that solely throws\n exceptions via \u003ccode\u003e\u003ca\u003ethrowM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote: that \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad has these abilities already, so stacking \u003ccode\u003e\u003ca\u003eCatchT\u003c/a\u003e\u003c/code\u003e on top\n of it does not add any value and can possibly be confusing:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(error \"Hello!\" :: IO ()) `catch` (\\(e :: ErrorCall) -\u003e liftIO $ print e)\n\u003c/code\u003e\u003c/strong\u003eHello!\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003erunCatchT $ (error \"Hello!\" :: CatchT IO ()) `catch` (\\(e :: ErrorCall) -\u003e liftIO $ print e)\n\u003c/code\u003e\u003c/strong\u003e*** Exception: Hello!\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003erunCatchT $ (throwM (ErrorCall \"Hello!\") :: CatchT IO ()) `catch` (\\(e :: ErrorCall) -\u003e liftIO $ print e)\n\u003c/code\u003e\u003c/strong\u003eHello!\n\u003c/pre\u003e",
          "module": "Control.Monad.Catch.Pure",
          "name": "CatchT",
          "package": "exceptions",
          "source": "src/Control-Monad-Catch-Pure.html#CatchT",
          "type": "newtype"
        },
        "index": {
          "description": "Add Exception handling abilities to Monad This should never be used in combination with IO Think of CatchT as an alternative base monad for use with mocking code that solely throws exceptions via throwM Note that IO monad has these abilities already so stacking CatchT on top of it does not add any value and can possibly be confusing error Hello IO catch ErrorCall liftIO print Hello runCatchT error Hello CatchT IO catch ErrorCall liftIO print Exception Hello runCatchT throwM ErrorCall Hello CatchT IO catch ErrorCall liftIO print Hello",
          "hierarchy": "Control Monad Catch Pure",
          "module": "Control.Monad.Catch.Pure",
          "name": "CatchT",
          "package": "exceptions",
          "partial": "Catch",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/exceptions/docs/Control-Monad-Catch-Pure.html#t:CatchT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Catch.Pure",
          "name": "CatchT",
          "package": "exceptions",
          "signature": "CatchT",
          "source": "src/Control-Monad-Catch-Pure.html#CatchT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Catch Pure",
          "module": "Control.Monad.Catch.Pure",
          "name": "CatchT",
          "package": "exceptions",
          "partial": "Catch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/exceptions/docs/Control-Monad-Catch-Pure.html#v:CatchT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap the unwrapped computation using the given function.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ccode\u003erunErrorT\u003c/code\u003e (\u003ccode\u003emapErrorT\u003c/code\u003e f m) = f (\u003ccode\u003erunErrorT\u003c/code\u003e m\u003c/code\u003e)\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.Monad.Catch.Pure",
          "name": "mapCatchT",
          "package": "exceptions",
          "signature": "(m (Either SomeException a) -\u003e n (Either SomeException b)) -\u003e CatchT m a -\u003e CatchT n b",
          "source": "src/Control-Monad-Catch-Pure.html#mapCatchT",
          "type": "function"
        },
        "index": {
          "description": "Map the unwrapped computation using the given function runErrorT mapErrorT runErrorT",
          "hierarchy": "Control Monad Catch Pure",
          "module": "Control.Monad.Catch.Pure",
          "name": "mapCatchT",
          "normalized": "(a(Either SomeException b)-\u003ec(Either SomeException d))-\u003eCatchT a b-\u003eCatchT c d",
          "package": "exceptions",
          "partial": "Catch",
          "signature": "(m(Either SomeException a)-\u003en(Either SomeException b))-\u003eCatchT m a-\u003eCatchT n b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/exceptions/docs/Control-Monad-Catch-Pure.html#v:mapCatchT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Catch.Pure",
          "name": "runCatch",
          "package": "exceptions",
          "signature": "Catch a -\u003e Either SomeException a",
          "source": "src/Control-Monad-Catch-Pure.html#runCatch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Catch Pure",
          "module": "Control.Monad.Catch.Pure",
          "name": "runCatch",
          "normalized": "Catch a-\u003eEither SomeException a",
          "package": "exceptions",
          "partial": "Catch",
          "signature": "Catch a-\u003eEither SomeException a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/exceptions/docs/Control-Monad-Catch-Pure.html#v:runCatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Catch.Pure",
          "name": "runCatchT",
          "package": "exceptions",
          "signature": "m (Either SomeException a)",
          "source": "src/Control-Monad-Catch-Pure.html#CatchT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Catch Pure",
          "module": "Control.Monad.Catch.Pure",
          "name": "runCatchT",
          "package": "exceptions",
          "partial": "Catch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/exceptions/docs/Control-Monad-Catch-Pure.html#v:runCatchT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module supports monads that can throw extensible exceptions. The\n exceptions are the very same from \u003ca\u003eControl.Exception\u003c/a\u003e, and the operations\n offered very similar, but here they are not limited to \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis code is in the style of both transformers and mtl, and is compatible\n with them, though doesn't mimic the module structure or offer the complete\n range of features in those packages.\n\u003c/p\u003e\u003cp\u003eThis is very similar to \u003ccode\u003eErrorT\u003c/code\u003e and \u003ccode\u003eMonadError\u003c/code\u003e, but based on features of\n \u003ca\u003eControl.Exception\u003c/a\u003e. In particular, it handles the complex case of\n asynchronous exceptions by including \u003ccode\u003e\u003ca\u003emask\u003c/a\u003e\u003c/code\u003e in the typeclass. Note that the\n extensible extensions feature relies the RankNTypes language extension.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Catch",
          "name": "Catch",
          "package": "exceptions",
          "source": "src/Control-Monad-Catch.html",
          "type": "module"
        },
        "index": {
          "description": "This module supports monads that can throw extensible exceptions The exceptions are the very same from Control.Exception and the operations offered very similar but here they are not limited to IO This code is in the style of both transformers and mtl and is compatible with them though doesn mimic the module structure or offer the complete range of features in those packages This is very similar to ErrorT and MonadError but based on features of Control.Exception In particular it handles the complex case of asynchronous exceptions by including mask in the typeclass Note that the extensible extensions feature relies the RankNTypes language extension",
          "hierarchy": "Control Monad Catch",
          "module": "Control.Monad.Catch",
          "name": "Catch",
          "package": "exceptions",
          "partial": "Catch",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/exceptions/docs/Control-Monad-Catch.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAny type that you wish to throw or catch as an exception must be an\ninstance of the \u003ccode\u003eException\u003c/code\u003e class. The simplest case is a new exception\ntype directly below the root:\n\u003c/p\u003e\u003cpre\u003e data MyException = ThisException | ThatException\n     deriving (Show, Typeable)\n\n instance Exception MyException\n\u003c/pre\u003e\u003cp\u003eThe default method definitions in the \u003ccode\u003eException\u003c/code\u003e class do what we need\nin this case. You can now throw and catch \u003ccode\u003eThisException\u003c/code\u003e and\n\u003ccode\u003eThatException\u003c/code\u003e as exceptions:\n\u003c/p\u003e\u003cpre\u003e\n*Main\u003e throw ThisException `catch` \\e -\u003e putStrLn (\"Caught \" ++ show (e :: MyException))\nCaught ThisException\n\u003c/pre\u003e\u003cp\u003eIn more complicated examples, you may wish to define a whole hierarchy\nof exceptions:\n\u003c/p\u003e\u003cpre\u003e ---------------------------------------------------------------------\n -- Make the root exception type for all the exceptions in a compiler\n\n data SomeCompilerException = forall e . Exception e =\u003e SomeCompilerException e\n     deriving Typeable\n\n instance Show SomeCompilerException where\n     show (SomeCompilerException e) = show e\n\n instance Exception SomeCompilerException\n\n compilerExceptionToException :: Exception e =\u003e e -\u003e SomeException\n compilerExceptionToException = toException . SomeCompilerException\n\n compilerExceptionFromException :: Exception e =\u003e SomeException -\u003e Maybe e\n compilerExceptionFromException x = do\n     SomeCompilerException a \u003c- fromException x\n     cast a\n\n ---------------------------------------------------------------------\n -- Make a subhierarchy for exceptions in the frontend of the compiler\n\n data SomeFrontendException = forall e . Exception e =\u003e SomeFrontendException e\n     deriving Typeable\n\n instance Show SomeFrontendException where\n     show (SomeFrontendException e) = show e\n\n instance Exception SomeFrontendException where\n     toException = compilerExceptionToException\n     fromException = compilerExceptionFromException\n\n frontendExceptionToException :: Exception e =\u003e e -\u003e SomeException\n frontendExceptionToException = toException . SomeFrontendException\n\n frontendExceptionFromException :: Exception e =\u003e SomeException -\u003e Maybe e\n frontendExceptionFromException x = do\n     SomeFrontendException a \u003c- fromException x\n     cast a\n\n ---------------------------------------------------------------------\n -- Make an exception type for a particular frontend compiler exception\n\n data MismatchedParentheses = MismatchedParentheses\n     deriving (Typeable, Show)\n\n instance Exception MismatchedParentheses where\n     toException   = frontendExceptionToException\n     fromException = frontendExceptionFromException\n\u003c/pre\u003e\u003cp\u003eWe can now catch a \u003ccode\u003eMismatchedParentheses\u003c/code\u003e exception as\n\u003ccode\u003eMismatchedParentheses\u003c/code\u003e, \u003ccode\u003eSomeFrontendException\u003c/code\u003e or\n\u003ccode\u003eSomeCompilerException\u003c/code\u003e, but not other types, e.g. \u003ccode\u003eIOException\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\n*Main\u003e throw MismatchedParentheses \u003ccode\u003ecatch\u003c/code\u003e e -\u003e putStrLn (\"Caught \" ++ show (e :: MismatchedParentheses))\nCaught MismatchedParentheses\n*Main\u003e throw MismatchedParentheses \u003ccode\u003ecatch\u003c/code\u003e e -\u003e putStrLn (\"Caught \" ++ show (e :: SomeFrontendException))\nCaught MismatchedParentheses\n*Main\u003e throw MismatchedParentheses \u003ccode\u003ecatch\u003c/code\u003e e -\u003e putStrLn (\"Caught \" ++ show (e :: SomeCompilerException))\nCaught MismatchedParentheses\n*Main\u003e throw MismatchedParentheses \u003ccode\u003ecatch\u003c/code\u003e e -\u003e putStrLn (\"Caught \" ++ show (e :: IOException))\n*** Exception: MismatchedParentheses\n\u003c/pre\u003e",
          "module": "Control.Monad.Catch",
          "name": "Exception",
          "package": "exceptions",
          "type": "class"
        },
        "index": {
          "description": "Any type that you wish to throw or catch as an exception must be an instance of the Exception class The simplest case is new exception type directly below the root data MyException ThisException ThatException deriving Show Typeable instance Exception MyException The default method definitions in the Exception class do what we need in this case You can now throw and catch ThisException and ThatException as exceptions Main throw ThisException catch putStrLn Caught show MyException Caught ThisException In more complicated examples you may wish to define whole hierarchy of exceptions Make the root exception type for all the exceptions in compiler data SomeCompilerException forall Exception SomeCompilerException deriving Typeable instance Show SomeCompilerException where show SomeCompilerException show instance Exception SomeCompilerException compilerExceptionToException Exception SomeException compilerExceptionToException toException SomeCompilerException compilerExceptionFromException Exception SomeException Maybe compilerExceptionFromException do SomeCompilerException fromException cast Make subhierarchy for exceptions in the frontend of the compiler data SomeFrontendException forall Exception SomeFrontendException deriving Typeable instance Show SomeFrontendException where show SomeFrontendException show instance Exception SomeFrontendException where toException compilerExceptionToException fromException compilerExceptionFromException frontendExceptionToException Exception SomeException frontendExceptionToException toException SomeFrontendException frontendExceptionFromException Exception SomeException Maybe frontendExceptionFromException do SomeFrontendException fromException cast Make an exception type for particular frontend compiler exception data MismatchedParentheses MismatchedParentheses deriving Typeable Show instance Exception MismatchedParentheses where toException frontendExceptionToException fromException frontendExceptionFromException We can now catch MismatchedParentheses exception as MismatchedParentheses SomeFrontendException or SomeCompilerException but not other types e.g IOException Main throw MismatchedParentheses catch putStrLn Caught show MismatchedParentheses Caught MismatchedParentheses Main throw MismatchedParentheses catch putStrLn Caught show SomeFrontendException Caught MismatchedParentheses Main throw MismatchedParentheses catch putStrLn Caught show SomeCompilerException Caught MismatchedParentheses Main throw MismatchedParentheses catch putStrLn Caught show IOException Exception MismatchedParentheses",
          "hierarchy": "Control Monad Catch",
          "module": "Control.Monad.Catch",
          "name": "Exception",
          "package": "exceptions",
          "partial": "Exception",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/exceptions/docs/Control-Monad-Catch.html#t:Exception"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003eHandler\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.Catch",
          "name": "Handler",
          "package": "exceptions",
          "source": "src/Control-Monad-Catch.html#Handler",
          "type": "data"
        },
        "index": {
          "description": "Generalized version of Handler",
          "hierarchy": "Control Monad Catch",
          "module": "Control.Monad.Catch",
          "name": "Handler",
          "package": "exceptions",
          "partial": "Handler",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/exceptions/docs/Control-Monad-Catch.html#t:Handler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Catch",
          "name": "MonadCatch",
          "package": "exceptions",
          "source": "src/Control-Monad-Catch.html#MonadCatch",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Monad Catch",
          "module": "Control.Monad.Catch",
          "name": "MonadCatch",
          "package": "exceptions",
          "partial": "Monad Catch",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/exceptions/docs/Control-Monad-Catch.html#t:MonadCatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003eSomeException\u003c/code\u003e type is the root of the exception type hierarchy.\nWhen an exception of type \u003ccode\u003ee\u003c/code\u003e is thrown, behind the scenes it is\nencapsulated in a \u003ccode\u003eSomeException\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Catch",
          "name": "SomeException",
          "package": "exceptions",
          "type": "data"
        },
        "index": {
          "description": "The SomeException type is the root of the exception type hierarchy When an exception of type is thrown behind the scenes it is encapsulated in SomeException",
          "hierarchy": "Control Monad Catch",
          "module": "Control.Monad.Catch",
          "name": "SomeException",
          "package": "exceptions",
          "partial": "Some Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/exceptions/docs/Control-Monad-Catch.html#t:SomeException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Catch",
          "name": "Handler",
          "package": "exceptions",
          "signature": "Handler (e -\u003e m a)",
          "source": "src/Control-Monad-Catch.html#Handler",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Catch",
          "module": "Control.Monad.Catch",
          "name": "Handler",
          "normalized": "Handler(a-\u003eb c)",
          "package": "exceptions",
          "partial": "Handler",
          "signature": "Handler(e-\u003em a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/exceptions/docs/Control-Monad-Catch.html#v:Handler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Catch",
          "name": "SomeException",
          "package": "exceptions",
          "signature": "e -\u003e SomeException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Catch",
          "module": "Control.Monad.Catch",
          "name": "SomeException",
          "normalized": "a-\u003eSomeException",
          "package": "exceptions",
          "partial": "Some Exception",
          "signature": "e-\u003eSomeException",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/exceptions/docs/Control-Monad-Catch.html#v:SomeException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized abstracted pattern of safe resource acquisition and release\n in the face of exceptions. The first action \"acquires\" some value, which\n is \"released\" by the second action at the end. The third action \"uses\"\n the value and its result is the result of the \u003ccode\u003e\u003ca\u003ebracket\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf an exception occurs during the use, the release still happens before the\n exception is rethrown.\n\u003c/p\u003e",
          "module": "Control.Monad.Catch",
          "name": "bracket",
          "package": "exceptions",
          "signature": "m a -\u003e (a -\u003e m b) -\u003e (a -\u003e m c) -\u003e m c",
          "source": "src/Control-Monad-Catch.html#bracket",
          "type": "function"
        },
        "index": {
          "description": "Generalized abstracted pattern of safe resource acquisition and release in the face of exceptions The first action acquires some value which is released by the second action at the end The third action uses the value and its result is the result of the bracket If an exception occurs during the use the release still happens before the exception is rethrown",
          "hierarchy": "Control Monad Catch",
          "module": "Control.Monad.Catch",
          "name": "bracket",
          "normalized": "a b-\u003e(b-\u003ea c)-\u003e(b-\u003ea d)-\u003ea d",
          "package": "exceptions",
          "signature": "m a-\u003e(a-\u003em b)-\u003e(a-\u003em c)-\u003em c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/exceptions/docs/Control-Monad-Catch.html#v:bracket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ebracket\u003c/a\u003e\u003c/code\u003e, but only performs the final action if there was an\n exception raised by the in-between computation.\n\u003c/p\u003e",
          "module": "Control.Monad.Catch",
          "name": "bracketOnError",
          "package": "exceptions",
          "signature": "m a -\u003e (a -\u003e m b) -\u003e (a -\u003e m c) -\u003e m c",
          "source": "src/Control-Monad-Catch.html#bracketOnError",
          "type": "function"
        },
        "index": {
          "description": "Like bracket but only performs the final action if there was an exception raised by the in-between computation",
          "hierarchy": "Control Monad Catch",
          "module": "Control.Monad.Catch",
          "name": "bracketOnError",
          "normalized": "a b-\u003e(b-\u003ea c)-\u003e(b-\u003ea d)-\u003ea d",
          "package": "exceptions",
          "partial": "On Error",
          "signature": "m a-\u003e(a-\u003em b)-\u003e(a-\u003em c)-\u003em c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/exceptions/docs/Control-Monad-Catch.html#v:bracketOnError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVersion of \u003ccode\u003e\u003ca\u003ebracket\u003c/a\u003e\u003c/code\u003e without any value being passed to the second and\n third actions.\n\u003c/p\u003e",
          "module": "Control.Monad.Catch",
          "name": "bracket_",
          "package": "exceptions",
          "signature": "m a -\u003e m b -\u003e m c -\u003e m c",
          "source": "src/Control-Monad-Catch.html#bracket_",
          "type": "function"
        },
        "index": {
          "description": "Version of bracket without any value being passed to the second and third actions",
          "hierarchy": "Control Monad Catch",
          "module": "Control.Monad.Catch",
          "name": "bracket_",
          "normalized": "a b-\u003ea c-\u003ea d-\u003ea d",
          "package": "exceptions",
          "signature": "m a-\u003em b-\u003em c-\u003em c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/exceptions/docs/Control-Monad-Catch.html#v:bracket_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProvide a handler for exceptions thrown during execution of the first\n action. Note that type of the type of the argument to the handler will\n constrain which exceptions are caught. See \u003ca\u003eControl.Exception\u003c/a\u003e's\n \u003ccode\u003e\u003ca\u003ecatch\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Catch",
          "name": "catch",
          "package": "exceptions",
          "signature": "m a -\u003e (e -\u003e m a) -\u003e m a",
          "source": "src/Control-Monad-Catch.html#catch",
          "type": "method"
        },
        "index": {
          "description": "Provide handler for exceptions thrown during execution of the first action Note that type of the type of the argument to the handler will constrain which exceptions are caught See Control.Exception catch",
          "hierarchy": "Control Monad Catch",
          "module": "Control.Monad.Catch",
          "name": "catch",
          "normalized": "a b-\u003e(c-\u003ea b)-\u003ea b",
          "package": "exceptions",
          "signature": "m a-\u003e(e-\u003em a)-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/exceptions/docs/Control-Monad-Catch.html#v:catch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCatches all exceptions, and somewhat defeats the purpose of the extensible\n exception system. Use sparingly.\n\u003c/p\u003e",
          "module": "Control.Monad.Catch",
          "name": "catchAll",
          "package": "exceptions",
          "signature": "m a -\u003e (SomeException -\u003e m a) -\u003e m a",
          "source": "src/Control-Monad-Catch.html#catchAll",
          "type": "function"
        },
        "index": {
          "description": "Catches all exceptions and somewhat defeats the purpose of the extensible exception system Use sparingly",
          "hierarchy": "Control Monad Catch",
          "module": "Control.Monad.Catch",
          "name": "catchAll",
          "normalized": "a b-\u003e(SomeException-\u003ea b)-\u003ea b",
          "package": "exceptions",
          "partial": "All",
          "signature": "m a-\u003e(SomeException-\u003em a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/exceptions/docs/Control-Monad-Catch.html#v:catchAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCatch all \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e (eqv. \u003ccode\u003eIOException\u003c/code\u003e) exceptions. Still somewhat too\n general, but better than using \u003ccode\u003e\u003ca\u003ecatchAll\u003c/a\u003e\u003c/code\u003e. See \u003ccode\u003e\u003ca\u003ecatchIf\u003c/a\u003e\u003c/code\u003e for an easy way\n of catching specific \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003es based on the predicates in \u003ca\u003eSystem.IO.Error\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Catch",
          "name": "catchIOError",
          "package": "exceptions",
          "signature": "m a -\u003e (IOError -\u003e m a) -\u003e m a",
          "source": "src/Control-Monad-Catch.html#catchIOError",
          "type": "function"
        },
        "index": {
          "description": "Catch all IOError eqv IOException exceptions Still somewhat too general but better than using catchAll See catchIf for an easy way of catching specific IOError based on the predicates in System.IO.Error",
          "hierarchy": "Control Monad Catch",
          "module": "Control.Monad.Catch",
          "name": "catchIOError",
          "normalized": "a b-\u003e(IOError-\u003ea b)-\u003ea b",
          "package": "exceptions",
          "partial": "IOError",
          "signature": "m a-\u003e(IOError-\u003em a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/exceptions/docs/Control-Monad-Catch.html#v:catchIOError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCatch exceptions only if they pass some predicate. Often useful with the\n predicates for testing \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e values in \u003ca\u003eSystem.IO.Error\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Catch",
          "name": "catchIf",
          "package": "exceptions",
          "signature": "(e -\u003e Bool) -\u003e m a -\u003e (e -\u003e m a) -\u003e m a",
          "source": "src/Control-Monad-Catch.html#catchIf",
          "type": "function"
        },
        "index": {
          "description": "Catch exceptions only if they pass some predicate Often useful with the predicates for testing IOError values in System.IO.Error",
          "hierarchy": "Control Monad Catch",
          "module": "Control.Monad.Catch",
          "name": "catchIf",
          "normalized": "(a-\u003eBool)-\u003eb c-\u003e(a-\u003eb c)-\u003eb c",
          "package": "exceptions",
          "partial": "If",
          "signature": "(e-\u003eBool)-\u003em a-\u003e(e-\u003em a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/exceptions/docs/Control-Monad-Catch.html#v:catchIf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA more generalized way of determining which exceptions to catch at\n run time.\n\u003c/p\u003e",
          "module": "Control.Monad.Catch",
          "name": "catchJust",
          "package": "exceptions",
          "signature": "(e -\u003e Maybe b) -\u003e m a -\u003e (b -\u003e m a) -\u003e m a",
          "source": "src/Control-Monad-Catch.html#catchJust",
          "type": "function"
        },
        "index": {
          "description": "more generalized way of determining which exceptions to catch at run time",
          "hierarchy": "Control Monad Catch",
          "module": "Control.Monad.Catch",
          "name": "catchJust",
          "normalized": "(a-\u003eMaybe b)-\u003ec d-\u003e(b-\u003ec d)-\u003ec d",
          "package": "exceptions",
          "partial": "Just",
          "signature": "(e-\u003eMaybe b)-\u003em a-\u003e(b-\u003em a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/exceptions/docs/Control-Monad-Catch.html#v:catchJust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCatches different sorts of exceptions. See \u003ca\u003eControl.Exception\u003c/a\u003e's \u003ccode\u003e\u003ca\u003ecatches\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.Catch",
          "name": "catches",
          "package": "exceptions",
          "signature": "m a -\u003e f (Handler m a) -\u003e m a",
          "source": "src/Control-Monad-Catch.html#catches",
          "type": "function"
        },
        "index": {
          "description": "Catches different sorts of exceptions See Control.Exception catches",
          "hierarchy": "Control Monad Catch",
          "module": "Control.Monad.Catch",
          "name": "catches",
          "normalized": "a b-\u003ec(Handler a b)-\u003ea b",
          "package": "exceptions",
          "signature": "m a-\u003ef(Handler m a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/exceptions/docs/Control-Monad-Catch.html#v:catches"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform an action with a finalizer action that is run, even if an\n exception occurs.\n\u003c/p\u003e",
          "module": "Control.Monad.Catch",
          "name": "finally",
          "package": "exceptions",
          "signature": "m a -\u003e m b -\u003e m a",
          "source": "src/Control-Monad-Catch.html#finally",
          "type": "function"
        },
        "index": {
          "description": "Perform an action with finalizer action that is run even if an exception occurs",
          "hierarchy": "Control Monad Catch",
          "module": "Control.Monad.Catch",
          "name": "finally",
          "normalized": "a b-\u003ea c-\u003ea b",
          "package": "exceptions",
          "signature": "m a-\u003em b-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/exceptions/docs/Control-Monad-Catch.html#v:finally"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Catch",
          "name": "fromException",
          "package": "exceptions",
          "signature": "SomeException -\u003e Maybe e",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Catch",
          "module": "Control.Monad.Catch",
          "name": "fromException",
          "normalized": "SomeException-\u003eMaybe a",
          "package": "exceptions",
          "partial": "Exception",
          "signature": "SomeException-\u003eMaybe e",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/exceptions/docs/Control-Monad-Catch.html#v:fromException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlipped \u003ccode\u003e\u003ca\u003ecatch\u003c/a\u003e\u003c/code\u003e. See \u003ca\u003eControl.Exception\u003c/a\u003e's \u003ccode\u003e\u003ca\u003ehandle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Catch",
          "name": "handle",
          "package": "exceptions",
          "signature": "(e -\u003e m a) -\u003e m a -\u003e m a",
          "source": "src/Control-Monad-Catch.html#handle",
          "type": "function"
        },
        "index": {
          "description": "Flipped catch See Control.Exception handle",
          "hierarchy": "Control Monad Catch",
          "module": "Control.Monad.Catch",
          "name": "handle",
          "normalized": "(a-\u003eb c)-\u003eb c-\u003eb c",
          "package": "exceptions",
          "signature": "(e-\u003em a)-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/exceptions/docs/Control-Monad-Catch.html#v:handle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlipped \u003ccode\u003e\u003ca\u003ecatchAll\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.Catch",
          "name": "handleAll",
          "package": "exceptions",
          "signature": "(SomeException -\u003e m a) -\u003e m a -\u003e m a",
          "source": "src/Control-Monad-Catch.html#handleAll",
          "type": "function"
        },
        "index": {
          "description": "Flipped catchAll",
          "hierarchy": "Control Monad Catch",
          "module": "Control.Monad.Catch",
          "name": "handleAll",
          "normalized": "(SomeException-\u003ea b)-\u003ea b-\u003ea b",
          "package": "exceptions",
          "partial": "All",
          "signature": "(SomeException-\u003em a)-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/exceptions/docs/Control-Monad-Catch.html#v:handleAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlipped \u003ccode\u003e\u003ca\u003ecatchIOError\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.Catch",
          "name": "handleIOError",
          "package": "exceptions",
          "signature": "(IOError -\u003e m a) -\u003e m a -\u003e m a",
          "source": "src/Control-Monad-Catch.html#handleIOError",
          "type": "function"
        },
        "index": {
          "description": "Flipped catchIOError",
          "hierarchy": "Control Monad Catch",
          "module": "Control.Monad.Catch",
          "name": "handleIOError",
          "normalized": "(IOError-\u003ea b)-\u003ea b-\u003ea b",
          "package": "exceptions",
          "partial": "IOError",
          "signature": "(IOError-\u003em a)-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/exceptions/docs/Control-Monad-Catch.html#v:handleIOError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlipped \u003ccode\u003e\u003ca\u003ecatchIf\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.Catch",
          "name": "handleIf",
          "package": "exceptions",
          "signature": "(e -\u003e Bool) -\u003e (e -\u003e m a) -\u003e m a -\u003e m a",
          "source": "src/Control-Monad-Catch.html#handleIf",
          "type": "function"
        },
        "index": {
          "description": "Flipped catchIf",
          "hierarchy": "Control Monad Catch",
          "module": "Control.Monad.Catch",
          "name": "handleIf",
          "normalized": "(a-\u003eBool)-\u003e(a-\u003eb c)-\u003eb c-\u003eb c",
          "package": "exceptions",
          "partial": "If",
          "signature": "(e-\u003eBool)-\u003e(e-\u003em a)-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/exceptions/docs/Control-Monad-Catch.html#v:handleIf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlipped \u003ccode\u003e\u003ca\u003ecatchJust\u003c/a\u003e\u003c/code\u003e. See \u003ca\u003eControl.Exception\u003c/a\u003e's \u003ccode\u003e\u003ca\u003ehandleJust\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Catch",
          "name": "handleJust",
          "package": "exceptions",
          "signature": "(e -\u003e Maybe b) -\u003e (b -\u003e m a) -\u003e m a -\u003e m a",
          "source": "src/Control-Monad-Catch.html#handleJust",
          "type": "function"
        },
        "index": {
          "description": "Flipped catchJust See Control.Exception handleJust",
          "hierarchy": "Control Monad Catch",
          "module": "Control.Monad.Catch",
          "name": "handleJust",
          "normalized": "(a-\u003eMaybe b)-\u003e(b-\u003ec d)-\u003ec d-\u003ec d",
          "package": "exceptions",
          "partial": "Just",
          "signature": "(e-\u003eMaybe b)-\u003e(b-\u003em a)-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/exceptions/docs/Control-Monad-Catch.html#v:handleJust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns an action with asynchronous exceptions disabled. The action is\n provided a method for restoring the async. environment to what it was\n at the \u003ccode\u003e\u003ca\u003emask\u003c/a\u003e\u003c/code\u003e call. See \u003ca\u003eControl.Exception\u003c/a\u003e's \u003ccode\u003e\u003ca\u003emask\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Catch",
          "name": "mask",
          "package": "exceptions",
          "signature": "((forall a.  m a -\u003e m a) -\u003e m b) -\u003e m b",
          "source": "src/Control-Monad-Catch.html#mask",
          "type": "method"
        },
        "index": {
          "description": "Runs an action with asynchronous exceptions disabled The action is provided method for restoring the async environment to what it was at the mask call See Control.Exception mask",
          "hierarchy": "Control Monad Catch",
          "module": "Control.Monad.Catch",
          "name": "mask",
          "normalized": "((a b c d-\u003ec d)-\u003ec e)-\u003ec e",
          "package": "exceptions",
          "signature": "((forall a. m a-\u003em a)-\u003em b)-\u003em b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/exceptions/docs/Control-Monad-Catch.html#v:mask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003emask\u003c/a\u003e\u003c/code\u003e, but does not pass a \u003ccode\u003erestore\u003c/code\u003e action to the argument.\n\u003c/p\u003e",
          "module": "Control.Monad.Catch",
          "name": "mask_",
          "package": "exceptions",
          "signature": "m a -\u003e m a",
          "source": "src/Control-Monad-Catch.html#mask_",
          "type": "function"
        },
        "index": {
          "description": "Like mask but does not pass restore action to the argument",
          "hierarchy": "Control Monad Catch",
          "module": "Control.Monad.Catch",
          "name": "mask_",
          "normalized": "a b-\u003ea b",
          "package": "exceptions",
          "signature": "m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/exceptions/docs/Control-Monad-Catch.html#v:mask_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun an action only if an exception is thrown in the main action. The\n exception is not caught, simply rethrown.\n\u003c/p\u003e",
          "module": "Control.Monad.Catch",
          "name": "onException",
          "package": "exceptions",
          "signature": "m a -\u003e m b -\u003e m a",
          "source": "src/Control-Monad-Catch.html#onException",
          "type": "function"
        },
        "index": {
          "description": "Run an action only if an exception is thrown in the main action The exception is not caught simply rethrown",
          "hierarchy": "Control Monad Catch",
          "module": "Control.Monad.Catch",
          "name": "onException",
          "normalized": "a b-\u003ea c-\u003ea b",
          "package": "exceptions",
          "partial": "Exception",
          "signature": "m a-\u003em b-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/exceptions/docs/Control-Monad-Catch.html#v:onException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThrow an exception. Note that this throws when this action is run in\n the monad \u003ccode\u003em\u003c/code\u003e, not when it is applied. It is a generalization of\n \u003ca\u003eControl.Exception\u003c/a\u003e's \u003ccode\u003e\u003ca\u003ethrowIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Catch",
          "name": "throwM",
          "package": "exceptions",
          "signature": "e -\u003e m a",
          "source": "src/Control-Monad-Catch.html#throwM",
          "type": "method"
        },
        "index": {
          "description": "Throw an exception Note that this throws when this action is run in the monad not when it is applied It is generalization of Control.Exception throwIO",
          "hierarchy": "Control Monad Catch",
          "module": "Control.Monad.Catch",
          "name": "throwM",
          "normalized": "a-\u003eb c",
          "package": "exceptions",
          "signature": "e-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/exceptions/docs/Control-Monad-Catch.html#v:throwM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Catch",
          "name": "toException",
          "package": "exceptions",
          "signature": "e -\u003e SomeException",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Catch",
          "module": "Control.Monad.Catch",
          "name": "toException",
          "normalized": "a-\u003eSomeException",
          "package": "exceptions",
          "partial": "Exception",
          "signature": "e-\u003eSomeException",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/exceptions/docs/Control-Monad-Catch.html#v:toException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003ecatch\u003c/a\u003e\u003c/code\u003e, but returns an \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e result. See \u003ca\u003eControl.Exception\u003c/a\u003e's\n \u003ccode\u003e\u003ca\u003etry\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Catch",
          "name": "try",
          "package": "exceptions",
          "signature": "m a -\u003e m (Either e a)",
          "source": "src/Control-Monad-Catch.html#try",
          "type": "function"
        },
        "index": {
          "description": "Similar to catch but returns an Either result See Control.Exception try",
          "hierarchy": "Control Monad Catch",
          "module": "Control.Monad.Catch",
          "name": "try",
          "normalized": "a b-\u003ea(Either c b)",
          "package": "exceptions",
          "signature": "m a-\u003em(Either e a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/exceptions/docs/Control-Monad-Catch.html#v:try"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003etry\u003c/a\u003e\u003c/code\u003e that takes an exception predicate to select\n which exceptions are caught. See \u003ca\u003eControl.Exception\u003c/a\u003e's \u003ccode\u003e\u003ca\u003etryJust\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.Catch",
          "name": "tryJust",
          "package": "exceptions",
          "signature": "(e -\u003e Maybe b) -\u003e m a -\u003e m (Either b a)",
          "source": "src/Control-Monad-Catch.html#tryJust",
          "type": "function"
        },
        "index": {
          "description": "variant of try that takes an exception predicate to select which exceptions are caught See Control.Exception tryJust",
          "hierarchy": "Control Monad Catch",
          "module": "Control.Monad.Catch",
          "name": "tryJust",
          "normalized": "(a-\u003eMaybe b)-\u003ec d-\u003ec(Either b d)",
          "package": "exceptions",
          "partial": "Just",
          "signature": "(e-\u003eMaybe b)-\u003em a-\u003em(Either b a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/exceptions/docs/Control-Monad-Catch.html#v:tryJust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003emask\u003c/a\u003e\u003c/code\u003e, but the masked computation is not interruptible (see\n \u003ca\u003eControl.Exception\u003c/a\u003e's \u003ccode\u003e\u003ca\u003euninterruptibleMask\u003c/a\u003e\u003c/code\u003e. WARNING:\n Only use if you need to mask exceptions around an interruptible operation\n AND you can guarantee the interruptible operation will only block for a\n short period of time. Otherwise you render the program/thread unresponsive\n and/or unkillable.\n\u003c/p\u003e",
          "module": "Control.Monad.Catch",
          "name": "uninterruptibleMask",
          "package": "exceptions",
          "signature": "((forall a.  m a -\u003e m a) -\u003e m b) -\u003e m b",
          "source": "src/Control-Monad-Catch.html#uninterruptibleMask",
          "type": "method"
        },
        "index": {
          "description": "Like mask but the masked computation is not interruptible see Control.Exception uninterruptibleMask WARNING Only use if you need to mask exceptions around an interruptible operation AND you can guarantee the interruptible operation will only block for short period of time Otherwise you render the program thread unresponsive and or unkillable",
          "hierarchy": "Control Monad Catch",
          "module": "Control.Monad.Catch",
          "name": "uninterruptibleMask",
          "normalized": "((a b c d-\u003ec d)-\u003ec e)-\u003ec e",
          "package": "exceptions",
          "partial": "Mask",
          "signature": "((forall a. m a-\u003em a)-\u003em b)-\u003em b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/exceptions/docs/Control-Monad-Catch.html#v:uninterruptibleMask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003euninterruptibleMask\u003c/a\u003e\u003c/code\u003e, but does not pass a \u003ccode\u003erestore\u003c/code\u003e action to the\n argument.\n\u003c/p\u003e",
          "module": "Control.Monad.Catch",
          "name": "uninterruptibleMask_",
          "package": "exceptions",
          "signature": "m a -\u003e m a",
          "source": "src/Control-Monad-Catch.html#uninterruptibleMask_",
          "type": "function"
        },
        "index": {
          "description": "Like uninterruptibleMask but does not pass restore action to the argument",
          "hierarchy": "Control Monad Catch",
          "module": "Control.Monad.Catch",
          "name": "uninterruptibleMask_",
          "normalized": "a b-\u003ea b",
          "package": "exceptions",
          "partial": "Mask",
          "signature": "m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/exceptions/docs/Control-Monad-Catch.html#v:uninterruptibleMask_"
      }
    }
  ]
]