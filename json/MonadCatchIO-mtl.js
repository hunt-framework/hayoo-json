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
        "word": "MonadCatchIO-mtl"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.CatchIO",
          "name": "CatchIO",
          "package": "MonadCatchIO-mtl",
          "source": "src/Control-Monad-CatchIO.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Monad CatchIO",
          "module": "Control.Monad.CatchIO",
          "name": "CatchIO",
          "package": "MonadCatchIO-mtl",
          "partial": "Catch IO",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MonadCatchIO-mtl/docs/Control-Monad-CatchIO.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAny type that you wish to throw or catch as an exception must be an\ninstance of the \u003ccode\u003eException\u003c/code\u003e class. The simplest case is a new exception\ntype directly below the root:\n\u003c/p\u003e\u003cpre\u003e data MyException = ThisException | ThatException\n     deriving (Show, Typeable)\n\n instance Exception MyException\n\u003c/pre\u003e\u003cp\u003eThe default method definitions in the \u003ccode\u003eException\u003c/code\u003e class do what we need\nin this case. You can now throw and catch \u003ccode\u003eThisException\u003c/code\u003e and\n\u003ccode\u003eThatException\u003c/code\u003e as exceptions:\n\u003c/p\u003e\u003cpre\u003e\n*Main\u003e throw ThisException `catch` \\e -\u003e putStrLn (\"Caught \" ++ show (e :: MyException))\nCaught ThisException\n\u003c/pre\u003e\u003cp\u003eIn more complicated examples, you may wish to define a whole hierarchy\nof exceptions:\n\u003c/p\u003e\u003cpre\u003e ---------------------------------------------------------------------\n -- Make the root exception type for all the exceptions in a compiler\n\n data SomeCompilerException = forall e . Exception e =\u003e SomeCompilerException e\n     deriving Typeable\n\n instance Show SomeCompilerException where\n     show (SomeCompilerException e) = show e\n\n instance Exception SomeCompilerException\n\n compilerExceptionToException :: Exception e =\u003e e -\u003e SomeException\n compilerExceptionToException = toException . SomeCompilerException\n\n compilerExceptionFromException :: Exception e =\u003e SomeException -\u003e Maybe e\n compilerExceptionFromException x = do\n     SomeCompilerException a \u003c- fromException x\n     cast a\n\n ---------------------------------------------------------------------\n -- Make a subhierarchy for exceptions in the frontend of the compiler\n\n data SomeFrontendException = forall e . Exception e =\u003e SomeFrontendException e\n     deriving Typeable\n\n instance Show SomeFrontendException where\n     show (SomeFrontendException e) = show e\n\n instance Exception SomeFrontendException where\n     toException = compilerExceptionToException\n     fromException = compilerExceptionFromException\n\n frontendExceptionToException :: Exception e =\u003e e -\u003e SomeException\n frontendExceptionToException = toException . SomeFrontendException\n\n frontendExceptionFromException :: Exception e =\u003e SomeException -\u003e Maybe e\n frontendExceptionFromException x = do\n     SomeFrontendException a \u003c- fromException x\n     cast a\n\n ---------------------------------------------------------------------\n -- Make an exception type for a particular frontend compiler exception\n\n data MismatchedParentheses = MismatchedParentheses\n     deriving (Typeable, Show)\n\n instance Exception MismatchedParentheses where\n     toException   = frontendExceptionToException\n     fromException = frontendExceptionFromException\n\u003c/pre\u003e\u003cp\u003eWe can now catch a \u003ccode\u003eMismatchedParentheses\u003c/code\u003e exception as\n\u003ccode\u003eMismatchedParentheses\u003c/code\u003e, \u003ccode\u003eSomeFrontendException\u003c/code\u003e or\n\u003ccode\u003eSomeCompilerException\u003c/code\u003e, but not other types, e.g. \u003ccode\u003eIOException\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\n*Main\u003e throw MismatchedParentheses \u003ccode\u003ecatch\u003c/code\u003e e -\u003e putStrLn (\"Caught \" ++ show (e :: MismatchedParentheses))\nCaught MismatchedParentheses\n*Main\u003e throw MismatchedParentheses \u003ccode\u003ecatch\u003c/code\u003e e -\u003e putStrLn (\"Caught \" ++ show (e :: SomeFrontendException))\nCaught MismatchedParentheses\n*Main\u003e throw MismatchedParentheses \u003ccode\u003ecatch\u003c/code\u003e e -\u003e putStrLn (\"Caught \" ++ show (e :: SomeCompilerException))\nCaught MismatchedParentheses\n*Main\u003e throw MismatchedParentheses \u003ccode\u003ecatch\u003c/code\u003e e -\u003e putStrLn (\"Caught \" ++ show (e :: IOException))\n*** Exception: MismatchedParentheses\n\u003c/pre\u003e",
          "module": "Control.Monad.CatchIO",
          "name": "Exception",
          "package": "MonadCatchIO-mtl",
          "type": "class"
        },
        "index": {
          "description": "Any type that you wish to throw or catch as an exception must be an instance of the Exception class The simplest case is new exception type directly below the root data MyException ThisException ThatException deriving Show Typeable instance Exception MyException The default method definitions in the Exception class do what we need in this case You can now throw and catch ThisException and ThatException as exceptions Main throw ThisException catch putStrLn Caught show MyException Caught ThisException In more complicated examples you may wish to define whole hierarchy of exceptions Make the root exception type for all the exceptions in compiler data SomeCompilerException forall Exception SomeCompilerException deriving Typeable instance Show SomeCompilerException where show SomeCompilerException show instance Exception SomeCompilerException compilerExceptionToException Exception SomeException compilerExceptionToException toException SomeCompilerException compilerExceptionFromException Exception SomeException Maybe compilerExceptionFromException do SomeCompilerException fromException cast Make subhierarchy for exceptions in the frontend of the compiler data SomeFrontendException forall Exception SomeFrontendException deriving Typeable instance Show SomeFrontendException where show SomeFrontendException show instance Exception SomeFrontendException where toException compilerExceptionToException fromException compilerExceptionFromException frontendExceptionToException Exception SomeException frontendExceptionToException toException SomeFrontendException frontendExceptionFromException Exception SomeException Maybe frontendExceptionFromException do SomeFrontendException fromException cast Make an exception type for particular frontend compiler exception data MismatchedParentheses MismatchedParentheses deriving Typeable Show instance Exception MismatchedParentheses where toException frontendExceptionToException fromException frontendExceptionFromException We can now catch MismatchedParentheses exception as MismatchedParentheses SomeFrontendException or SomeCompilerException but not other types e.g IOException Main throw MismatchedParentheses catch putStrLn Caught show MismatchedParentheses Caught MismatchedParentheses Main throw MismatchedParentheses catch putStrLn Caught show SomeFrontendException Caught MismatchedParentheses Main throw MismatchedParentheses catch putStrLn Caught show SomeCompilerException Caught MismatchedParentheses Main throw MismatchedParentheses catch putStrLn Caught show IOException Exception MismatchedParentheses",
          "hierarchy": "Control Monad CatchIO",
          "module": "Control.Monad.CatchIO",
          "name": "Exception",
          "package": "MonadCatchIO-mtl",
          "partial": "Exception",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/MonadCatchIO-mtl/docs/Control-Monad-CatchIO.html#t:Exception"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003eHandler\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.CatchIO",
          "name": "Handler",
          "package": "MonadCatchIO-mtl",
          "type": "data"
        },
        "index": {
          "description": "Generalized version of Handler",
          "hierarchy": "Control Monad CatchIO",
          "module": "Control.Monad.CatchIO",
          "name": "Handler",
          "package": "MonadCatchIO-mtl",
          "partial": "Handler",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/MonadCatchIO-mtl/docs/Control-Monad-CatchIO.html#t:Handler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.CatchIO",
          "name": "MonadCatchIO",
          "package": "MonadCatchIO-mtl",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Monad CatchIO",
          "module": "Control.Monad.CatchIO",
          "name": "MonadCatchIO",
          "package": "MonadCatchIO-mtl",
          "partial": "Monad Catch IO",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/MonadCatchIO-mtl/docs/Control-Monad-CatchIO.html#t:MonadCatchIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.CatchIO",
          "name": "Handler",
          "package": "MonadCatchIO-mtl",
          "signature": "(e -\u003e m a) -\u003e Handler m a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad CatchIO",
          "module": "Control.Monad.CatchIO",
          "name": "Handler",
          "normalized": "(a-\u003eb c)-\u003eHandler b c",
          "package": "MonadCatchIO-mtl",
          "partial": "Handler",
          "signature": "(e-\u003em a)-\u003eHandler m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MonadCatchIO-mtl/docs/Control-Monad-CatchIO.html#v:Handler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.CatchIO",
          "name": "block",
          "package": "MonadCatchIO-mtl",
          "signature": "m a -\u003e m a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad CatchIO",
          "module": "Control.Monad.CatchIO",
          "name": "block",
          "normalized": "a b-\u003ea b",
          "package": "MonadCatchIO-mtl",
          "signature": "m a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MonadCatchIO-mtl/docs/Control-Monad-CatchIO.html#v:block"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003ebracket\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.CatchIO",
          "name": "bracket",
          "package": "MonadCatchIO-mtl",
          "signature": "m a -\u003e (a -\u003e m b) -\u003e (a -\u003e m c) -\u003e m c",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of bracket",
          "hierarchy": "Control Monad CatchIO",
          "module": "Control.Monad.CatchIO",
          "name": "bracket",
          "normalized": "a b-\u003e(b-\u003ea c)-\u003e(b-\u003ea d)-\u003ea d",
          "package": "MonadCatchIO-mtl",
          "signature": "m a-\u003e(a-\u003em b)-\u003e(a-\u003em c)-\u003em c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MonadCatchIO-mtl/docs/Control-Monad-CatchIO.html#v:bracket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ebracket\u003c/a\u003e\u003c/code\u003e, but only performs the final action if there was an\n exception raised by the in-between computation.\n\u003c/p\u003e",
          "module": "Control.Monad.CatchIO",
          "name": "bracketOnError",
          "package": "MonadCatchIO-mtl",
          "signature": "m a-\u003e (a -\u003e m b)-\u003e (a -\u003e m c)-\u003e m c",
          "type": "function"
        },
        "index": {
          "description": "Like bracket but only performs the final action if there was an exception raised by the in-between computation",
          "hierarchy": "Control Monad CatchIO",
          "module": "Control.Monad.CatchIO",
          "name": "bracketOnError",
          "normalized": "a b-\u003e(b-\u003ea c)-\u003e(b-\u003ea d)-\u003ea d",
          "package": "MonadCatchIO-mtl",
          "partial": "On Error",
          "signature": "m a-\u003e(a-\u003em b)-\u003e(a-\u003em c)-\u003em c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MonadCatchIO-mtl/docs/Control-Monad-CatchIO.html#v:bracketOnError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003ebracket\u003c/a\u003e\u003c/code\u003e where the return value from the first computation\n is not required.\n\u003c/p\u003e",
          "module": "Control.Monad.CatchIO",
          "name": "bracket_",
          "package": "MonadCatchIO-mtl",
          "signature": "m a-\u003e m b-\u003e m c-\u003e m c",
          "type": "function"
        },
        "index": {
          "description": "variant of bracket where the return value from the first computation is not required",
          "hierarchy": "Control Monad CatchIO",
          "module": "Control.Monad.CatchIO",
          "name": "bracket_",
          "normalized": "a b-\u003ea c-\u003ea d-\u003ea d",
          "package": "MonadCatchIO-mtl",
          "signature": "m a-\u003em b-\u003em c-\u003em c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MonadCatchIO-mtl/docs/Control-Monad-CatchIO.html#v:bracket_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003ecatch\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.CatchIO",
          "name": "catch",
          "package": "MonadCatchIO-mtl",
          "signature": "m a -\u003e (e -\u003e m a) -\u003e m a",
          "type": "method"
        },
        "index": {
          "description": "Generalized version of catch",
          "hierarchy": "Control Monad CatchIO",
          "module": "Control.Monad.CatchIO",
          "name": "catch",
          "normalized": "a b-\u003e(c-\u003ea b)-\u003ea b",
          "package": "MonadCatchIO-mtl",
          "signature": "m a-\u003e(e-\u003em a)-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MonadCatchIO-mtl/docs/Control-Monad-CatchIO.html#v:catch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003ecatches\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.CatchIO",
          "name": "catches",
          "package": "MonadCatchIO-mtl",
          "signature": "m a -\u003e [Handler m a] -\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of catches",
          "hierarchy": "Control Monad CatchIO",
          "module": "Control.Monad.CatchIO",
          "name": "catches",
          "normalized": "a b-\u003e[Handler a b]-\u003ea b",
          "package": "MonadCatchIO-mtl",
          "signature": "m a-\u003e[Handler m a]-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MonadCatchIO-mtl/docs/Control-Monad-CatchIO.html#v:catches"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA specialised variant of \u003ccode\u003e\u003ca\u003ebracket\u003c/a\u003e\u003c/code\u003e with just a computation to run\n afterward.\n\u003c/p\u003e",
          "module": "Control.Monad.CatchIO",
          "name": "finally",
          "package": "MonadCatchIO-mtl",
          "signature": "m a-\u003e m b-\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "specialised variant of bracket with just computation to run afterward",
          "hierarchy": "Control Monad CatchIO",
          "module": "Control.Monad.CatchIO",
          "name": "finally",
          "normalized": "a b-\u003ea c-\u003ea b",
          "package": "MonadCatchIO-mtl",
          "signature": "m a-\u003em b-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MonadCatchIO-mtl/docs/Control-Monad-CatchIO.html#v:finally"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.CatchIO",
          "name": "fromException",
          "package": "MonadCatchIO-mtl",
          "signature": "SomeException -\u003e Maybe e",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad CatchIO",
          "module": "Control.Monad.CatchIO",
          "name": "fromException",
          "normalized": "SomeException-\u003eMaybe a",
          "package": "MonadCatchIO-mtl",
          "partial": "Exception",
          "signature": "SomeException-\u003eMaybe e",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MonadCatchIO-mtl/docs/Control-Monad-CatchIO.html#v:fromException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003eonException\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.CatchIO",
          "name": "onException",
          "package": "MonadCatchIO-mtl",
          "signature": "m a -\u003e m b -\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of onException",
          "hierarchy": "Control Monad CatchIO",
          "module": "Control.Monad.CatchIO",
          "name": "onException",
          "normalized": "a b-\u003ea c-\u003ea b",
          "package": "MonadCatchIO-mtl",
          "partial": "Exception",
          "signature": "m a-\u003em b-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MonadCatchIO-mtl/docs/Control-Monad-CatchIO.html#v:onException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003ethrowIO\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.CatchIO",
          "name": "throw",
          "package": "MonadCatchIO-mtl",
          "signature": "e -\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of throwIO",
          "hierarchy": "Control Monad CatchIO",
          "module": "Control.Monad.CatchIO",
          "name": "throw",
          "normalized": "a-\u003eb c",
          "package": "MonadCatchIO-mtl",
          "signature": "e-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MonadCatchIO-mtl/docs/Control-Monad-CatchIO.html#v:throw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.CatchIO",
          "name": "toException",
          "package": "MonadCatchIO-mtl",
          "signature": "e -\u003e SomeException",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad CatchIO",
          "module": "Control.Monad.CatchIO",
          "name": "toException",
          "normalized": "a-\u003eSomeException",
          "package": "MonadCatchIO-mtl",
          "partial": "Exception",
          "signature": "e-\u003eSomeException",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MonadCatchIO-mtl/docs/Control-Monad-CatchIO.html#v:toException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003etry\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.CatchIO",
          "name": "try",
          "package": "MonadCatchIO-mtl",
          "signature": "m a -\u003e m (Either e a)",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of try",
          "hierarchy": "Control Monad CatchIO",
          "module": "Control.Monad.CatchIO",
          "name": "try",
          "normalized": "a b-\u003ea(Either c b)",
          "package": "MonadCatchIO-mtl",
          "signature": "m a-\u003em(Either e a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MonadCatchIO-mtl/docs/Control-Monad-CatchIO.html#v:try"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003etryJust\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.CatchIO",
          "name": "tryJust",
          "package": "MonadCatchIO-mtl",
          "signature": "(e -\u003e Maybe b) -\u003e m a -\u003e m (Either b a)",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of tryJust",
          "hierarchy": "Control Monad CatchIO",
          "module": "Control.Monad.CatchIO",
          "name": "tryJust",
          "normalized": "(a-\u003eMaybe b)-\u003ec d-\u003ec(Either b d)",
          "package": "MonadCatchIO-mtl",
          "partial": "Just",
          "signature": "(e-\u003eMaybe b)-\u003em a-\u003em(Either b a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MonadCatchIO-mtl/docs/Control-Monad-CatchIO.html#v:tryJust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.CatchIO",
          "name": "unblock",
          "package": "MonadCatchIO-mtl",
          "signature": "m a -\u003e m a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad CatchIO",
          "module": "Control.Monad.CatchIO",
          "name": "unblock",
          "normalized": "a b-\u003ea b",
          "package": "MonadCatchIO-mtl",
          "signature": "m a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MonadCatchIO-mtl/docs/Control-Monad-CatchIO.html#v:unblock"
      }
    }
  ]
]