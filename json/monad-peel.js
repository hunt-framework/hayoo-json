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
        "word": "monad-peel"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is a wrapped version of Control.Exception with types generalized\nfrom \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e to all monads in \u003ccode\u003e\u003ca\u003eMonadPeelIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Exception.Peel",
          "name": "Peel",
          "package": "monad-peel",
          "source": "src/Control-Exception-Peel.html",
          "type": "module"
        },
        "index": {
          "description": "This is wrapped version of Control.Exception with types generalized from IO to all monads in MonadPeelIO",
          "hierarchy": "Control Exception Peel",
          "module": "Control.Exception.Peel",
          "name": "Peel",
          "package": "monad-peel",
          "partial": "Peel",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monad-peel/docs/Control-Exception-Peel.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003eHandler\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Exception.Peel",
          "name": "Handler",
          "package": "monad-peel",
          "source": "src/Control-Exception-Peel.html#Handler",
          "type": "data"
        },
        "index": {
          "description": "Generalized version of Handler",
          "hierarchy": "Control Exception Peel",
          "module": "Control.Exception.Peel",
          "name": "Handler",
          "package": "monad-peel",
          "partial": "Handler",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/monad-peel/docs/Control-Exception-Peel.html#t:Handler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Exception.Peel",
          "name": "Handler",
          "package": "monad-peel",
          "signature": "Handler (e -\u003e m a)",
          "source": "src/Control-Exception-Peel.html#Handler",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Exception Peel",
          "module": "Control.Exception.Peel",
          "name": "Handler",
          "normalized": "Handler(a-\u003eb c)",
          "package": "monad-peel",
          "partial": "Handler",
          "signature": "Handler(e-\u003em a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-peel/docs/Control-Exception-Peel.html#v:Handler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003eblock\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Exception.Peel",
          "name": "block",
          "package": "monad-peel",
          "signature": "m a -\u003e m a",
          "source": "src/Control-Exception-Peel.html#block",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of block",
          "hierarchy": "Control Exception Peel",
          "module": "Control.Exception.Peel",
          "name": "block",
          "normalized": "a b-\u003ea b",
          "package": "monad-peel",
          "signature": "m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-peel/docs/Control-Exception-Peel.html#v:block"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003ebracket\u003c/a\u003e\u003c/code\u003e.  Note, any monadic side\n effects in \u003ccode\u003em\u003c/code\u003e of the \"release\" computation will be discarded; it\n is run only for its side effects in \u003ccode\u003eIO\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Exception.Peel",
          "name": "bracket",
          "package": "monad-peel",
          "signature": "m a-\u003e (a -\u003e m b)-\u003e (a -\u003e m c)-\u003e m c",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of bracket Note any monadic side effects in of the release computation will be discarded it is run only for its side effects in IO",
          "hierarchy": "Control Exception Peel",
          "module": "Control.Exception.Peel",
          "name": "bracket",
          "normalized": "a b-\u003e(b-\u003ea c)-\u003e(b-\u003ea d)-\u003ea d",
          "package": "monad-peel",
          "signature": "m a-\u003e(a-\u003em b)-\u003e(a-\u003em c)-\u003em c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-peel/docs/Control-Exception-Peel.html#v:bracket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003ebracketOnError\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Exception.Peel",
          "name": "bracketOnError",
          "package": "monad-peel",
          "signature": "m a-\u003e (a -\u003e m b)-\u003e (a -\u003e m c)-\u003e m c",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of bracketOnError",
          "hierarchy": "Control Exception Peel",
          "module": "Control.Exception.Peel",
          "name": "bracketOnError",
          "normalized": "a b-\u003e(b-\u003ea c)-\u003e(b-\u003ea d)-\u003ea d",
          "package": "monad-peel",
          "partial": "On Error",
          "signature": "m a-\u003e(a-\u003em b)-\u003e(a-\u003em c)-\u003em c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-peel/docs/Control-Exception-Peel.html#v:bracketOnError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003ebracket_\u003c/a\u003e\u003c/code\u003e.  Note, any monadic side\n effects in \u003ccode\u003em\u003c/code\u003e of \u003cem\u003eboth\u003c/em\u003e the \"acquire\" and \"release\"\n computations will be discarded.  To keep the monadic side effects\n of the \"acquire\" computation, use \u003ccode\u003e\u003ca\u003ebracket\u003c/a\u003e\u003c/code\u003e with constant\n functions instead.\n\u003c/p\u003e",
          "module": "Control.Exception.Peel",
          "name": "bracket_",
          "package": "monad-peel",
          "signature": "m a -\u003e m b -\u003e m c -\u003e m c",
          "source": "src/Control-Exception-Peel.html#bracket_",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of bracket Note any monadic side effects in of both the acquire and release computations will be discarded To keep the monadic side effects of the acquire computation use bracket with constant functions instead",
          "hierarchy": "Control Exception Peel",
          "module": "Control.Exception.Peel",
          "name": "bracket_",
          "normalized": "a b-\u003ea c-\u003ea d-\u003ea d",
          "package": "monad-peel",
          "signature": "m a-\u003em b-\u003em c-\u003em c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-peel/docs/Control-Exception-Peel.html#v:bracket_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003ecatch\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Exception.Peel",
          "name": "catch",
          "package": "monad-peel",
          "signature": "m a-\u003e (e -\u003e m a)-\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of catch",
          "hierarchy": "Control Exception Peel",
          "module": "Control.Exception.Peel",
          "name": "catch",
          "normalized": "a b-\u003e(c-\u003ea b)-\u003ea b",
          "package": "monad-peel",
          "signature": "m a-\u003e(e-\u003em a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-peel/docs/Control-Exception-Peel.html#v:catch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003ecatchJust\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Exception.Peel",
          "name": "catchJust",
          "package": "monad-peel",
          "signature": "(e -\u003e Maybe b)-\u003e m a-\u003e (b -\u003e m a)-\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of catchJust",
          "hierarchy": "Control Exception Peel",
          "module": "Control.Exception.Peel",
          "name": "catchJust",
          "normalized": "(a-\u003eMaybe b)-\u003ec d-\u003e(b-\u003ec d)-\u003ec d",
          "package": "monad-peel",
          "partial": "Just",
          "signature": "(e-\u003eMaybe b)-\u003em a-\u003e(b-\u003em a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-peel/docs/Control-Exception-Peel.html#v:catchJust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003ecatches\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Exception.Peel",
          "name": "catches",
          "package": "monad-peel",
          "signature": "m a -\u003e [Handler m a] -\u003e m a",
          "source": "src/Control-Exception-Peel.html#catches",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of catches",
          "hierarchy": "Control Exception Peel",
          "module": "Control.Exception.Peel",
          "name": "catches",
          "normalized": "a b-\u003e[Handler a b]-\u003ea b",
          "package": "monad-peel",
          "signature": "m a-\u003e[Handler m a]-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-peel/docs/Control-Exception-Peel.html#v:catches"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003eevaluate\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Exception.Peel",
          "name": "evaluate",
          "package": "monad-peel",
          "signature": "a -\u003e m a",
          "source": "src/Control-Exception-Peel.html#evaluate",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of evaluate",
          "hierarchy": "Control Exception Peel",
          "module": "Control.Exception.Peel",
          "name": "evaluate",
          "normalized": "a-\u003eb a",
          "package": "monad-peel",
          "signature": "a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-peel/docs/Control-Exception-Peel.html#v:evaluate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003efinally\u003c/a\u003e\u003c/code\u003e.  Note, any monadic side\n effects in \u003ccode\u003em\u003c/code\u003e of the \"afterward\" computation will be discarded.\n\u003c/p\u003e",
          "module": "Control.Exception.Peel",
          "name": "finally",
          "package": "monad-peel",
          "signature": "m a-\u003e m b-\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of finally Note any monadic side effects in of the afterward computation will be discarded",
          "hierarchy": "Control Exception Peel",
          "module": "Control.Exception.Peel",
          "name": "finally",
          "normalized": "a b-\u003ea c-\u003ea b",
          "package": "monad-peel",
          "signature": "m a-\u003em b-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-peel/docs/Control-Exception-Peel.html#v:finally"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003ehandle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Exception.Peel",
          "name": "handle",
          "package": "monad-peel",
          "signature": "(e -\u003e m a) -\u003e m a -\u003e m a",
          "source": "src/Control-Exception-Peel.html#handle",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of handle",
          "hierarchy": "Control Exception Peel",
          "module": "Control.Exception.Peel",
          "name": "handle",
          "normalized": "(a-\u003eb c)-\u003eb c-\u003eb c",
          "package": "monad-peel",
          "signature": "(e-\u003em a)-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-peel/docs/Control-Exception-Peel.html#v:handle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003ehandleJust\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Exception.Peel",
          "name": "handleJust",
          "package": "monad-peel",
          "signature": "(e -\u003e Maybe b) -\u003e (b -\u003e m a) -\u003e m a -\u003e m a",
          "source": "src/Control-Exception-Peel.html#handleJust",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of handleJust",
          "hierarchy": "Control Exception Peel",
          "module": "Control.Exception.Peel",
          "name": "handleJust",
          "normalized": "(a-\u003eMaybe b)-\u003e(b-\u003ec d)-\u003ec d-\u003ec d",
          "package": "monad-peel",
          "partial": "Just",
          "signature": "(e-\u003eMaybe b)-\u003e(b-\u003em a)-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-peel/docs/Control-Exception-Peel.html#v:handleJust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003eioError\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Exception.Peel",
          "name": "ioError",
          "package": "monad-peel",
          "signature": "IOError -\u003e m a",
          "source": "src/Control-Exception-Peel.html#ioError",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of ioError",
          "hierarchy": "Control Exception Peel",
          "module": "Control.Exception.Peel",
          "name": "ioError",
          "normalized": "IOError-\u003ea b",
          "package": "monad-peel",
          "partial": "Error",
          "signature": "IOError-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-peel/docs/Control-Exception-Peel.html#v:ioError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003eonException\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Exception.Peel",
          "name": "onException",
          "package": "monad-peel",
          "signature": "m a -\u003e m b -\u003e m a",
          "source": "src/Control-Exception-Peel.html#onException",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of onException",
          "hierarchy": "Control Exception Peel",
          "module": "Control.Exception.Peel",
          "name": "onException",
          "normalized": "a b-\u003ea c-\u003ea b",
          "package": "monad-peel",
          "partial": "Exception",
          "signature": "m a-\u003em b-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-peel/docs/Control-Exception-Peel.html#v:onException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003ethrowIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Exception.Peel",
          "name": "throwIO",
          "package": "monad-peel",
          "signature": "e -\u003e m a",
          "source": "src/Control-Exception-Peel.html#throwIO",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of throwIO",
          "hierarchy": "Control Exception Peel",
          "module": "Control.Exception.Peel",
          "name": "throwIO",
          "normalized": "a-\u003eb c",
          "package": "monad-peel",
          "partial": "IO",
          "signature": "e-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-peel/docs/Control-Exception-Peel.html#v:throwIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003etry\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Exception.Peel",
          "name": "try",
          "package": "monad-peel",
          "signature": "m a -\u003e m (Either e a)",
          "source": "src/Control-Exception-Peel.html#try",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of try",
          "hierarchy": "Control Exception Peel",
          "module": "Control.Exception.Peel",
          "name": "try",
          "normalized": "a b-\u003ea(Either c b)",
          "package": "monad-peel",
          "signature": "m a-\u003em(Either e a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-peel/docs/Control-Exception-Peel.html#v:try"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003etryJust\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Exception.Peel",
          "name": "tryJust",
          "package": "monad-peel",
          "signature": "(e -\u003e Maybe b) -\u003e m a -\u003e m (Either b a)",
          "source": "src/Control-Exception-Peel.html#tryJust",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of tryJust",
          "hierarchy": "Control Exception Peel",
          "module": "Control.Exception.Peel",
          "name": "tryJust",
          "normalized": "(a-\u003eMaybe b)-\u003ec d-\u003ec(Either b d)",
          "package": "monad-peel",
          "partial": "Just",
          "signature": "(e-\u003eMaybe b)-\u003em a-\u003em(Either b a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-peel/docs/Control-Exception-Peel.html#v:tryJust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003eunblock\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Exception.Peel",
          "name": "unblock",
          "package": "monad-peel",
          "signature": "m a -\u003e m a",
          "source": "src/Control-Exception-Peel.html#unblock",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of unblock",
          "hierarchy": "Control Exception Peel",
          "module": "Control.Exception.Peel",
          "name": "unblock",
          "normalized": "a b-\u003ea b",
          "package": "monad-peel",
          "signature": "m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-peel/docs/Control-Exception-Peel.html#v:unblock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines the class \u003ccode\u003e\u003ca\u003eMonadPeelIO\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e-based monads into\nwhich control operations on \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e (such as exception catching; see\n\u003ca\u003eControl.Exception.Peel\u003c/a\u003e) can be lifted.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eliftIOOp\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eliftIOOp_\u003c/a\u003e\u003c/code\u003e enable convenient lifting of two common\nspecial cases of control operation types.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.IO.Peel",
          "name": "Peel",
          "package": "monad-peel",
          "source": "src/Control-Monad-IO-Peel.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines the class MonadPeelIO of IO based monads into which control operations on IO such as exception catching see Control.Exception.Peel can be lifted liftIOOp and liftIOOp enable convenient lifting of two common special cases of control operation types",
          "hierarchy": "Control Monad IO Peel",
          "module": "Control.Monad.IO.Peel",
          "name": "Peel",
          "package": "monad-peel",
          "partial": "Peel",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monad-peel/docs/Control-Monad-IO-Peel.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eMonadPeelIO\u003c/code\u003e is the class of \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e-based monads supporting an\n extra operation \u003ccode\u003e\u003ca\u003epeelIO\u003c/a\u003e\u003c/code\u003e, enabling control operations on \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e to be\n lifted into the monad.\n\u003c/p\u003e",
          "module": "Control.Monad.IO.Peel",
          "name": "MonadPeelIO",
          "package": "monad-peel",
          "source": "src/Control-Monad-IO-Peel.html#MonadPeelIO",
          "type": "class"
        },
        "index": {
          "description": "MonadPeelIO is the class of IO based monads supporting an extra operation peelIO enabling control operations on IO to be lifted into the monad",
          "hierarchy": "Control Monad IO Peel",
          "module": "Control.Monad.IO.Peel",
          "name": "MonadPeelIO",
          "package": "monad-peel",
          "partial": "Monad Peel IO",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monad-peel/docs/Control-Monad-IO-Peel.html#t:MonadPeelIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eliftIOOp\u003c/code\u003e is a particular application of \u003ccode\u003e\u003ca\u003epeelIO\u003c/a\u003e\u003c/code\u003e that allows\n lifting control operations of type \u003ccode\u003e(a -\u003e \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e b) -\u003e \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e b\u003c/code\u003e\n (e.g. \u003ccode\u003ealloca\u003c/code\u003e, \u003ccode\u003ewithMVar v\u003c/code\u003e) to \u003ccode\u003e\u003ccode\u003e\u003ca\u003eMonadPeelIO\u003c/a\u003e\u003c/code\u003e m =\u003e (a -\u003e m b) -\u003e\n m b\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\n    \u003ccode\u003e\u003ca\u003eliftIOOp\u003c/a\u003e\u003c/code\u003e f g = do\n      k \u003c- \u003ccode\u003e\u003ca\u003epeelIO\u003c/a\u003e\u003c/code\u003e\n      \u003ccode\u003e\u003ca\u003ejoin\u003c/a\u003e\u003c/code\u003e $ \u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e $ f (k . g)\n\u003c/pre\u003e",
          "module": "Control.Monad.IO.Peel",
          "name": "liftIOOp",
          "package": "monad-peel",
          "signature": "((a -\u003e IO (m b)) -\u003e IO (m c)) -\u003e (a -\u003e m b) -\u003e m c",
          "source": "src/Control-Monad-IO-Peel.html#liftIOOp",
          "type": "function"
        },
        "index": {
          "description": "liftIOOp is particular application of peelIO that allows lifting control operations of type IO IO e.g alloca withMVar to MonadPeelIO liftIOOp do peelIO join liftIO",
          "hierarchy": "Control Monad IO Peel",
          "module": "Control.Monad.IO.Peel",
          "name": "liftIOOp",
          "normalized": "((a-\u003eIO(b c))-\u003eIO(b d))-\u003e(a-\u003eb c)-\u003eb d",
          "package": "monad-peel",
          "partial": "IOOp",
          "signature": "((a-\u003eIO(m b))-\u003eIO(m c))-\u003e(a-\u003em b)-\u003em c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-peel/docs/Control-Monad-IO-Peel.html#v:liftIOOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eliftIOOp_\u003c/code\u003e is a particular application of \u003ccode\u003e\u003ca\u003epeelIO\u003c/a\u003e\u003c/code\u003e that allows\n lifting control operations of type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e a -\u003e \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e\n (e.g. \u003ccode\u003eblock\u003c/code\u003e) to \u003ccode\u003e\u003ccode\u003e\u003ca\u003eMonadPeelIO\u003c/a\u003e\u003c/code\u003e m =\u003e m a -\u003e m a\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\n    \u003ccode\u003e\u003ca\u003eliftIOOp_\u003c/a\u003e\u003c/code\u003e f m = do\n      k \u003c- \u003ccode\u003e\u003ca\u003epeelIO\u003c/a\u003e\u003c/code\u003e\n      \u003ccode\u003e\u003ca\u003ejoin\u003c/a\u003e\u003c/code\u003e $ \u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e $ f (k m)\n\u003c/pre\u003e",
          "module": "Control.Monad.IO.Peel",
          "name": "liftIOOp_",
          "package": "monad-peel",
          "signature": "(IO (m a) -\u003e IO (m b)) -\u003e m a -\u003e m b",
          "source": "src/Control-Monad-IO-Peel.html#liftIOOp_",
          "type": "function"
        },
        "index": {
          "description": "liftIOOp is particular application of peelIO that allows lifting control operations of type IO IO e.g block to MonadPeelIO liftIOOp do peelIO join liftIO",
          "hierarchy": "Control Monad IO Peel",
          "module": "Control.Monad.IO.Peel",
          "name": "liftIOOp_",
          "normalized": "(IO(a b)-\u003eIO(a c))-\u003ea b-\u003ea c",
          "package": "monad-peel",
          "partial": "IOOp",
          "signature": "(IO(m a)-\u003eIO(m b))-\u003em a-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-peel/docs/Control-Monad-IO-Peel.html#v:liftIOOp_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003epeelIO\u003c/code\u003e is a version of \u003ccode\u003e\u003ca\u003epeel\u003c/a\u003e\u003c/code\u003e that operates through an\n arbitrary stack of monad transformers directly to an inner \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e\n (analagously to how \u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e is a version of \u003ccode\u003elift\u003c/code\u003e).  So it can\n be used with \u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e to lift control operations on \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e into any\n monad in \u003ccode\u003e\u003ca\u003eMonadPeelIO\u003c/a\u003e\u003c/code\u003e.  For example:\n\u003c/p\u003e\u003cpre\u003e\n    foo :: \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e a -\u003e \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e a\n    foo' :: \u003ccode\u003e\u003ca\u003eMonadPeelIO\u003c/a\u003e\u003c/code\u003e m =\u003e m a -\u003e m a\n    foo' a = do\n      k \u003c- \u003ccode\u003e\u003ca\u003epeelIO\u003c/a\u003e\u003c/code\u003e  -- k :: m a -\u003e IO (m a)\n      \u003ccode\u003e\u003ca\u003ejoin\u003c/a\u003e\u003c/code\u003e $ \u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e $ foo (k a)  -- uses foo :: \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e (m a) -\u003e \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e (m a)\n\u003c/pre\u003e\u003cp\u003eNote that the \"obvious\" term of this type (\u003ccode\u003epeelIO = \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e\n \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e) \u003cem\u003edoes not\u003c/em\u003e work correctly.  Instances of \u003ccode\u003e\u003ca\u003eMonadPeelIO\u003c/a\u003e\u003c/code\u003e\n should be constructed via \u003ccode\u003e\u003ca\u003eMonadTransPeel\u003c/a\u003e\u003c/code\u003e, using \u003ccode\u003epeelIO =\n \u003ccode\u003e\u003ca\u003eliftPeel\u003c/a\u003e\u003c/code\u003e peelIO\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.IO.Peel",
          "name": "peelIO",
          "package": "monad-peel",
          "signature": "m (m a -\u003e IO (m a))",
          "source": "src/Control-Monad-IO-Peel.html#peelIO",
          "type": "method"
        },
        "index": {
          "description": "peelIO is version of peel that operates through an arbitrary stack of monad transformers directly to an inner IO analagously to how liftIO is version of lift So it can be used with liftIO to lift control operations on IO into any monad in MonadPeelIO For example foo IO IO foo MonadPeelIO foo do peelIO IO join liftIO foo uses foo IO IO Note that the obvious term of this type peelIO return return does not work correctly Instances of MonadPeelIO should be constructed via MonadTransPeel using peelIO liftPeel peelIO",
          "hierarchy": "Control Monad IO Peel",
          "module": "Control.Monad.IO.Peel",
          "name": "peelIO",
          "normalized": "a(a b-\u003eIO(a b))",
          "package": "monad-peel",
          "partial": "IO",
          "signature": "m(m a-\u003eIO(m a))",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monad-peel/docs/Control-Monad-IO-Peel.html#v:peelIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines the class \u003ccode\u003e\u003ca\u003eMonadTransPeel\u003c/a\u003e\u003c/code\u003e of monad transformers\nthrough which control operations can be lifted.  Instances are\nincluded for all the standard monad transformers from the\n\u003ccode\u003etransformers\u003c/code\u003e library except \u003ccode\u003eContT\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eidPeel\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eliftPeel\u003c/a\u003e\u003c/code\u003e are provided to assist creation of\n\u003ccode\u003eMonadPeelIO\u003c/code\u003e-like classes (see \u003ca\u003eControl.Monad.IO.Peel\u003c/a\u003e) based on core\nmonads other than \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eliftOp\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eliftOp_\u003c/a\u003e\u003c/code\u003e enable convenient lifting of two common special\ncases of control operation types.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Trans.Peel",
          "name": "Peel",
          "package": "monad-peel",
          "source": "src/Control-Monad-Trans-Peel.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines the class MonadTransPeel of monad transformers through which control operations can be lifted Instances are included for all the standard monad transformers from the transformers library except ContT idPeel and liftPeel are provided to assist creation of MonadPeelIO like classes see Control.Monad.IO.Peel based on core monads other than IO liftOp and liftOp enable convenient lifting of two common special cases of control operation types",
          "hierarchy": "Control Monad Trans Peel",
          "module": "Control.Monad.Trans.Peel",
          "name": "Peel",
          "package": "monad-peel",
          "partial": "Peel",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monad-peel/docs/Control-Monad-Trans-Peel.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eMonadTransPeel\u003c/code\u003e is the class of monad transformers supporting an\n extra operation \u003ccode\u003e\u003ca\u003epeel\u003c/a\u003e\u003c/code\u003e, enabling control operations (functions that\n use monadic actions as input instead of just output) to be lifted\n through the transformer.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Peel",
          "name": "MonadTransPeel",
          "package": "monad-peel",
          "source": "src/Control-Monad-Trans-Peel.html#MonadTransPeel",
          "type": "class"
        },
        "index": {
          "description": "MonadTransPeel is the class of monad transformers supporting an extra operation peel enabling control operations functions that use monadic actions as input instead of just output to be lifted through the transformer",
          "hierarchy": "Control Monad Trans Peel",
          "module": "Control.Monad.Trans.Peel",
          "name": "MonadTransPeel",
          "package": "monad-peel",
          "partial": "Monad Trans Peel",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monad-peel/docs/Control-Monad-Trans-Peel.html#t:MonadTransPeel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eidPeel\u003c/code\u003e acts as the \"identity\" \u003ccode\u003e\u003ca\u003epeel\u003c/a\u003e\u003c/code\u003e operation from a monad\n \u003ccode\u003em\u003c/code\u003e to itself.\n\u003c/p\u003e\u003cpre\u003e\n    \u003ccode\u003e\u003ca\u003eidPeel\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e $ \u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e\u003cp\u003eIt serves as the base case for a class like \u003ccode\u003eMonadPeelIO\u003c/code\u003e, which\n allows control operations in some base monad (here \u003ccode\u003eIO\u003c/code\u003e) to be\n lifted through arbitrary stacks of zero or more monad transformers\n in one call.  For example, \u003ca\u003eControl.Monad.IO.Peel\u003c/a\u003e defines\n\u003c/p\u003e\u003cpre\u003e\n    class \u003ccode\u003eMonadIO\u003c/code\u003e m =\u003e MonadPeelIO m where\n      peelIO :: m (m a -\u003e \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e (m a))\n    instance MonadPeelIO \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e where\n      peelIO = \u003ccode\u003e\u003ca\u003eidPeel\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
          "module": "Control.Monad.Trans.Peel",
          "name": "idPeel",
          "package": "monad-peel",
          "signature": "n (m a -\u003e m (o a))",
          "source": "src/Control-Monad-Trans-Peel.html#idPeel",
          "type": "function"
        },
        "index": {
          "description": "idPeel acts as the identity peel operation from monad to itself idPeel return liftM return It serves as the base case for class like MonadPeelIO which allows control operations in some base monad here IO to be lifted through arbitrary stacks of zero or more monad transformers in one call For example Control.Monad.IO.Peel defines class MonadIO MonadPeelIO where peelIO IO instance MonadPeelIO IO where peelIO idPeel",
          "hierarchy": "Control Monad Trans Peel",
          "module": "Control.Monad.Trans.Peel",
          "name": "idPeel",
          "normalized": "a(b c-\u003eb(d c))",
          "package": "monad-peel",
          "partial": "Peel",
          "signature": "n(m a-\u003em(o a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-peel/docs/Control-Monad-Trans-Peel.html#v:idPeel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eliftOp\u003c/code\u003e is a particular application of \u003ccode\u003e\u003ca\u003epeel\u003c/a\u003e\u003c/code\u003e that allows lifting\n control operations of type \u003ccode\u003e(a -\u003e m b) -\u003e m b\u003c/code\u003e to \u003ccode\u003e\u003ccode\u003e\u003ca\u003eMonadTransPeel\u003c/a\u003e\u003c/code\u003e\n t =\u003e (a -\u003e t m b) -\u003e t m b\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\n    \u003ccode\u003e\u003ca\u003eliftOp\u003c/a\u003e\u003c/code\u003e f g = do\n      k \u003c- \u003ccode\u003e\u003ca\u003epeel\u003c/a\u003e\u003c/code\u003e\n      \u003ccode\u003e\u003ca\u003ejoin\u003c/a\u003e\u003c/code\u003e $ \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e $ f (k . g)\n\u003c/pre\u003e",
          "module": "Control.Monad.Trans.Peel",
          "name": "liftOp",
          "package": "monad-peel",
          "signature": "((a -\u003e m (t o b)) -\u003e n (t n c)) -\u003e (a -\u003e t m b) -\u003e t n c",
          "source": "src/Control-Monad-Trans-Peel.html#liftOp",
          "type": "function"
        },
        "index": {
          "description": "liftOp is particular application of peel that allows lifting control operations of type to MonadTransPeel liftOp do peel join lift",
          "hierarchy": "Control Monad Trans Peel",
          "module": "Control.Monad.Trans.Peel",
          "name": "liftOp",
          "normalized": "((a-\u003eb(c d e))-\u003ef(c f g))-\u003e(a-\u003ec b e)-\u003ec f g",
          "package": "monad-peel",
          "partial": "Op",
          "signature": "((a-\u003em(t o b))-\u003en(t n c))-\u003e(a-\u003et m b)-\u003et n c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-peel/docs/Control-Monad-Trans-Peel.html#v:liftOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eliftOp_\u003c/code\u003e is a particular application of \u003ccode\u003e\u003ca\u003epeel\u003c/a\u003e\u003c/code\u003e that allows\n lifting control operations of type \u003ccode\u003em a -\u003e m a\u003c/code\u003e to\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eMonadTransPeel\u003c/a\u003e\u003c/code\u003e m =\u003e t m a -\u003e t m a\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIt can be thought of as a generalization of \u003ccode\u003emapReaderT\u003c/code\u003e,\n \u003ccode\u003emapStateT\u003c/code\u003e, etc.\n\u003c/p\u003e\u003cpre\u003e\n    \u003ccode\u003e\u003ca\u003eliftOp_\u003c/a\u003e\u003c/code\u003e f m = do\n      k \u003c- \u003ccode\u003e\u003ca\u003epeel\u003c/a\u003e\u003c/code\u003e\n      \u003ccode\u003e\u003ca\u003ejoin\u003c/a\u003e\u003c/code\u003e $ \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e $ f (k m)\n\u003c/pre\u003e",
          "module": "Control.Monad.Trans.Peel",
          "name": "liftOp_",
          "package": "monad-peel",
          "signature": "(m (t o a) -\u003e n (t n b)) -\u003e t m a -\u003e t n b",
          "source": "src/Control-Monad-Trans-Peel.html#liftOp_",
          "type": "function"
        },
        "index": {
          "description": "liftOp is particular application of peel that allows lifting control operations of type to MonadTransPeel It can be thought of as generalization of mapReaderT mapStateT etc liftOp do peel join lift",
          "hierarchy": "Control Monad Trans Peel",
          "module": "Control.Monad.Trans.Peel",
          "name": "liftOp_",
          "normalized": "(a(b c d)-\u003ee(b e f))-\u003eb a d-\u003eb e f",
          "package": "monad-peel",
          "partial": "Op",
          "signature": "(m(t o a)-\u003en(t n b))-\u003et m a-\u003et n b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-peel/docs/Control-Monad-Trans-Peel.html#v:liftOp_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eliftPeel\u003c/code\u003e is used to compose two \u003ccode\u003e\u003ca\u003epeel\u003c/a\u003e\u003c/code\u003e operations: the outer\n provided by a \u003ccode\u003e\u003ca\u003eMonadTransPeel\u003c/a\u003e\u003c/code\u003e instance, and the inner provided as\n the argument.\n\u003c/p\u003e\u003cp\u003eIt satisfies \u003ccode\u003e\u003ccode\u003e\u003ca\u003eliftPeel\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eidPeel\u003c/a\u003e\u003c/code\u003e == \u003ccode\u003e\u003ca\u003epeel\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIt serves as the induction step of a \u003ccode\u003eMonadPeelIO\u003c/code\u003e-like class.  For\n example, \u003ca\u003eControl.Monad.IO.Peel\u003c/a\u003e defines\n\u003c/p\u003e\u003cpre\u003e\n    instance MonadPeelIO m =\u003e MonadPeelIO (\u003ccode\u003e\u003ca\u003eStateT\u003c/a\u003e\u003c/code\u003e s m) where\n      peelIO = \u003ccode\u003e\u003ca\u003eliftPeel\u003c/a\u003e\u003c/code\u003e peelIO\n\u003c/pre\u003e\u003cp\u003eusing the \u003ccode\u003e\u003ca\u003eMonadTransPeel\u003c/a\u003e\u003c/code\u003e instance of \u003ccode\u003e\u003ccode\u003e\u003ca\u003eStateT\u003c/a\u003e\u003c/code\u003e s\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Peel",
          "name": "liftPeel",
          "package": "monad-peel",
          "signature": "n' (m' (t o' a) -\u003e m (o' (t o' a))) -\u003e t n' (t m' a -\u003e m (t o' a))",
          "source": "src/Control-Monad-Trans-Peel.html#liftPeel",
          "type": "function"
        },
        "index": {
          "description": "liftPeel is used to compose two peel operations the outer provided by MonadTransPeel instance and the inner provided as the argument It satisfies liftPeel idPeel peel It serves as the induction step of MonadPeelIO like class For example Control.Monad.IO.Peel defines instance MonadPeelIO MonadPeelIO StateT where peelIO liftPeel peelIO using the MonadTransPeel instance of StateT",
          "hierarchy": "Control Monad Trans Peel",
          "module": "Control.Monad.Trans.Peel",
          "name": "liftPeel",
          "normalized": "a(b(c d e)-\u003ef(d(c d e)))-\u003ec a(c b e-\u003ef(c d e))",
          "package": "monad-peel",
          "partial": "Peel",
          "signature": "n'(m'(t o' a)-\u003em(o'(t o' a)))-\u003et n'(t m' a-\u003em(t o' a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-peel/docs/Control-Monad-Trans-Peel.html#v:liftPeel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003epeel\u003c/code\u003e is used to peel off the outer layer of a transformed\n monadic action, allowing an transformed action \u003ccode\u003et m a\u003c/code\u003e to be\n treated as a base action \u003ccode\u003em b\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eMore precisely, \u003ccode\u003epeel\u003c/code\u003e captures the monadic state of \u003ccode\u003et\u003c/code\u003e at the\n point where it is bound (in \u003ccode\u003et n\u003c/code\u003e), yielding a function \u003ccode\u003et m a -\u003e\n m (t o a)\u003c/code\u003e; this function runs a transformed monadic action \u003ccode\u003et m\n a\u003c/code\u003e in the base monad \u003ccode\u003em\u003c/code\u003e using the captured state, and leaves the\n result \u003ccode\u003et o a\u003c/code\u003e in the monad \u003ccode\u003em\u003c/code\u003e after all side effects in \u003ccode\u003em\u003c/code\u003e\n have occurred.\n\u003c/p\u003e\u003cp\u003eThis can be used together with \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e to lift control operations\n with types such as \u003ccode\u003eM a -\u003e M a\u003c/code\u003e into the transformed monad \u003ccode\u003et M\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\n    instance Monad M\n    foo :: M a -\u003e M a\n    foo' :: (\u003ccode\u003e\u003ca\u003eMonadTransPeel\u003c/a\u003e\u003c/code\u003e t, \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e (t M)) =\u003e t M a -\u003e t M a\n    foo' a = do\n      k \u003c- \u003ccode\u003e\u003ca\u003epeel\u003c/a\u003e\u003c/code\u003e  -- k :: t M a -\u003e M (t M a)\n      \u003ccode\u003e\u003ca\u003ejoin\u003c/a\u003e\u003c/code\u003e $ \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e $ foo (k a)  -- uses foo :: M (t M a) -\u003e M (t M a)\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003epeel\u003c/code\u003e is typically used with \u003ccode\u003em == n == o\u003c/code\u003e, but is required to\n be polymorphic for greater type safety: for example, this type\n ensures that the result of running the action in \u003ccode\u003em\u003c/code\u003e has no\n remaining side effects in \u003ccode\u003em\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Peel",
          "name": "peel",
          "package": "monad-peel",
          "signature": "t n (t m a -\u003e m (t o a))",
          "source": "src/Control-Monad-Trans-Peel.html#peel",
          "type": "method"
        },
        "index": {
          "description": "peel is used to peel off the outer layer of transformed monadic action allowing an transformed action to be treated as base action More precisely peel captures the monadic state of at the point where it is bound in yielding function this function runs transformed monadic action in the base monad using the captured state and leaves the result in the monad after all side effects in have occurred This can be used together with lift to lift control operations with types such as into the transformed monad instance Monad foo foo MonadTransPeel Monad foo do peel join lift foo uses foo peel is typically used with but is required to be polymorphic for greater type safety for example this type ensures that the result of running the action in has no remaining side effects in",
          "hierarchy": "Control Monad Trans Peel",
          "module": "Control.Monad.Trans.Peel",
          "name": "peel",
          "normalized": "a b(a c d-\u003ec(a e d))",
          "package": "monad-peel",
          "signature": "t n(t m a-\u003em(t o a))",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monad-peel/docs/Control-Monad-Trans-Peel.html#v:peel"
      }
    }
  ]
]