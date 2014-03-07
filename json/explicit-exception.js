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
        "word": "explicit-exception"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "Lazy",
          "package": "explicit-exception",
          "source": "src/Control-Monad-Exception-Asynchronous-Lazy.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Monad Exception Asynchronous Lazy",
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "Lazy",
          "package": "explicit-exception",
          "partial": "Lazy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContains a value and a reason why the computation of the value of type \u003ccode\u003ea\u003c/code\u003e was terminated.\nImagine \u003ccode\u003ea\u003c/code\u003e as a list type, and an according operation like the \u003ccode\u003e\u003ca\u003ereadFile\u003c/a\u003e\u003c/code\u003e operation.\nIf the exception part is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e then the value could be constructed regularly.\nIf the exception part is \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e then the value could not be constructed completely.\nHowever you can read the result of type \u003ccode\u003ea\u003c/code\u003e lazily,\neven if an exception occurs while it is evaluated.\nIf you evaluate the exception part,\nthen the result value is certainly computed completely.\n\u003c/p\u003e\u003cp\u003eHowever, we cannot provide general \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e functionality\ndue to the very different ways of combining the results of type \u003ccode\u003ea\u003c/code\u003e.\nIt is recommended to process the result value in an application specific way,\nand after consumption of the result, throw a synchronous exception using \u003ccode\u003e\u003ca\u003etoSynchronous\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eMaybe in the future we provide a monad instance\nwhich considers subsequent actions as simultaneous processes on a lazy data structure.\n\u003c/p\u003e\u003cp\u003eThis variant has lazy combinators like \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e.\nThis implies that some laws are not fulfilled,\nbut in practice it saves you some calls to \u003ccode\u003e\u003ca\u003eforce\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "Exceptional",
          "package": "explicit-exception",
          "source": "src/Control-Monad-Exception-Asynchronous-Lazy.html#Exceptional",
          "type": "data"
        },
        "index": {
          "description": "Contains value and reason why the computation of the value of type was terminated Imagine as list type and an according operation like the readFile operation If the exception part is Nothing then the value could be constructed regularly If the exception part is Just then the value could not be constructed completely However you can read the result of type lazily even if an exception occurs while it is evaluated If you evaluate the exception part then the result value is certainly computed completely However we cannot provide general Monad functionality due to the very different ways of combining the results of type It is recommended to process the result value in an application specific way and after consumption of the result throw synchronous exception using toSynchronous Maybe in the future we provide monad instance which considers subsequent actions as simultaneous processes on lazy data structure This variant has lazy combinators like fmap This implies that some laws are not fulfilled but in practice it saves you some calls to force",
          "hierarchy": "Control Monad Exception Asynchronous Lazy",
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "Exceptional",
          "package": "explicit-exception",
          "partial": "Exceptional",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#t:Exceptional"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIn contrast to synchronous exceptions,\nthe asynchronous monad transformer is not quite a monad.\nYou must use the \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e interface or \u003ccode\u003e\u003ca\u003ebindT\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e",
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "ExceptionalT",
          "package": "explicit-exception",
          "source": "src/Control-Monad-Exception-Asynchronous-Lazy.html#ExceptionalT",
          "type": "newtype"
        },
        "index": {
          "description": "In contrast to synchronous exceptions the asynchronous monad transformer is not quite monad You must use the Monoid interface or bindT instead",
          "hierarchy": "Control Monad Exception Asynchronous Lazy",
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "ExceptionalT",
          "package": "explicit-exception",
          "partial": "Exceptional",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#t:ExceptionalT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "Exceptional",
          "package": "explicit-exception",
          "signature": "Exceptional",
          "source": "src/Control-Monad-Exception-Asynchronous-Lazy.html#Exceptional",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception Asynchronous Lazy",
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "Exceptional",
          "package": "explicit-exception",
          "partial": "Exceptional",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:Exceptional"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "ExceptionalT",
          "package": "explicit-exception",
          "signature": "ExceptionalT",
          "source": "src/Control-Monad-Exception-Asynchronous-Lazy.html#ExceptionalT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception Asynchronous Lazy",
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "ExceptionalT",
          "package": "explicit-exception",
          "partial": "Exceptional",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:ExceptionalT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is an example for application specific handling of result values.\nAssume you obtain two lazy lists say from \u003ccode\u003e\u003ca\u003ereadFile\u003c/a\u003e\u003c/code\u003e\nand you want to append their contents.\nIf the first stream ends with an exception,\nthis exception is kept\nand the second stream is not touched.\nIf the first stream can be read successfully,\nthe second one is appended until stops.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eappend\u003c/a\u003e\u003c/code\u003e is less strict than the \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e method \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "append",
          "package": "explicit-exception",
          "signature": "Exceptional e a -\u003e Exceptional e a -\u003e Exceptional e a",
          "source": "src/Control-Monad-Exception-Asynchronous-Lazy.html#append",
          "type": "function"
        },
        "index": {
          "description": "This is an example for application specific handling of result values Assume you obtain two lazy lists say from readFile and you want to append their contents If the first stream ends with an exception this exception is kept and the second stream is not touched If the first stream can be read successfully the second one is appended until stops append is less strict than the Monoid method mappend instance",
          "hierarchy": "Control Monad Exception Asynchronous Lazy",
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "append",
          "normalized": "Exceptional a b-\u003eExceptional a b-\u003eExceptional a b",
          "package": "explicit-exception",
          "signature": "Exceptional e a-\u003eExceptional e a-\u003eExceptional e a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:append"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "appendM",
          "package": "explicit-exception",
          "signature": "m (Exceptional e a) -\u003e m (Exceptional e a) -\u003e m (Exceptional e a)",
          "source": "src/Control-Monad-Exception-Asynchronous-Lazy.html#appendM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception Asynchronous Lazy",
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "appendM",
          "normalized": "a(Exceptional b c)-\u003ea(Exceptional b c)-\u003ea(Exceptional b c)",
          "package": "explicit-exception",
          "signature": "m(Exceptional e a)-\u003em(Exceptional e a)-\u003em(Exceptional e a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:appendM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe monadic bind operation.\nIt cannot be made an instance of the Monad class method \u003ccode\u003e(\u003e\u003e=)\u003c/code\u003e\nsince it requires a default return value\nin case the first action fails.\nWe get this default value by the \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e method \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "bindT",
          "package": "explicit-exception",
          "signature": "ExceptionalT e m a -\u003e (a -\u003e ExceptionalT e m b) -\u003e ExceptionalT e m b",
          "source": "src/Control-Monad-Exception-Asynchronous-Lazy.html#bindT",
          "type": "function"
        },
        "index": {
          "description": "The monadic bind operation It cannot be made an instance of the Monad class method since it requires default return value in case the first action fails We get this default value by the Monoid method mempty",
          "hierarchy": "Control Monad Exception Asynchronous Lazy",
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "bindT",
          "normalized": "ExceptionalT a b c-\u003e(c-\u003eExceptionalT a b d)-\u003eExceptionalT a b d",
          "package": "explicit-exception",
          "signature": "ExceptionalT e m a-\u003e(a-\u003eExceptionalT e m b)-\u003eExceptionalT e m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:bindT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an exceptional value with exception.\n\u003c/p\u003e",
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "broken",
          "package": "explicit-exception",
          "signature": "e -\u003e a -\u003e Exceptional e a",
          "source": "src/Control-Monad-Exception-Asynchronous-Lazy.html#broken",
          "type": "function"
        },
        "index": {
          "description": "Create an exceptional value with exception",
          "hierarchy": "Control Monad Exception Asynchronous Lazy",
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "broken",
          "normalized": "a-\u003eb-\u003eExceptional a b",
          "package": "explicit-exception",
          "signature": "e-\u003ea-\u003eExceptional e a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:broken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "continue",
          "package": "explicit-exception",
          "signature": "Maybe e -\u003e Exceptional e a -\u003e Exceptional e a",
          "source": "src/Control-Monad-Exception-Asynchronous-Lazy.html#continue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception Asynchronous Lazy",
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "continue",
          "normalized": "Maybe a-\u003eExceptional a b-\u003eExceptional a b",
          "package": "explicit-exception",
          "signature": "Maybe e-\u003eExceptional e a-\u003eExceptional e a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:continue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "continueM",
          "package": "explicit-exception",
          "signature": "m (Maybe e) -\u003e m (Exceptional e a) -\u003e m (Exceptional e a)",
          "source": "src/Control-Monad-Exception-Asynchronous-Lazy.html#continueM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception Asynchronous Lazy",
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "continueM",
          "normalized": "a(Maybe b)-\u003ea(Exceptional b c)-\u003ea(Exceptional b c)",
          "package": "explicit-exception",
          "signature": "m(Maybe e)-\u003em(Exceptional e a)-\u003em(Exceptional e a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:continueM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYou might use an exception of type \u003ccode\u003eMaybe e\u003c/code\u003e in \u003ccode\u003e\u003ca\u003emanyMonoidT\u003c/a\u003e\u003c/code\u003e\nin order to stop the loop.\nAfter finishing the loop you will want\nto turn the \u003ccode\u003eNothing\u003c/code\u003e exception into a success.\nThis is achieved by this function.\n\u003c/p\u003e",
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "eatNothing",
          "package": "explicit-exception",
          "signature": "Exceptional (Maybe e) a -\u003e Exceptional e a",
          "source": "src/Control-Monad-Exception-Asynchronous-Lazy.html#eatNothing",
          "type": "function"
        },
        "index": {
          "description": "You might use an exception of type Maybe in manyMonoidT in order to stop the loop After finishing the loop you will want to turn the Nothing exception into success This is achieved by this function",
          "hierarchy": "Control Monad Exception Asynchronous Lazy",
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "eatNothing",
          "normalized": "Exceptional(Maybe a)b-\u003eExceptional a b",
          "package": "explicit-exception",
          "partial": "Nothing",
          "signature": "Exceptional(Maybe e)a-\u003eExceptional e a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:eatNothing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "eatNothingT",
          "package": "explicit-exception",
          "signature": "ExceptionalT (Maybe e) m a -\u003e ExceptionalT e m a",
          "source": "src/Control-Monad-Exception-Asynchronous-Lazy.html#eatNothingT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception Asynchronous Lazy",
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "eatNothingT",
          "normalized": "ExceptionalT(Maybe a)b c-\u003eExceptionalT a b c",
          "package": "explicit-exception",
          "partial": "Nothing",
          "signature": "ExceptionalT(Maybe e)m a-\u003eExceptionalT e m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:eatNothingT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "exception",
          "package": "explicit-exception",
          "signature": "Maybe e",
          "source": "src/Control-Monad-Exception-Asynchronous-Lazy.html#Exceptional",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception Asynchronous Lazy",
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "exception",
          "package": "explicit-exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:exception"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econstruct Exceptional constructor lazily \n\u003c/p\u003e",
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "force",
          "package": "explicit-exception",
          "signature": "Exceptional e a -\u003e Exceptional e a",
          "source": "src/Control-Monad-Exception-Asynchronous-Lazy.html#force",
          "type": "function"
        },
        "index": {
          "description": "construct Exceptional constructor lazily",
          "hierarchy": "Control Monad Exception Asynchronous Lazy",
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "force",
          "normalized": "Exceptional a b-\u003eExceptional a b",
          "package": "explicit-exception",
          "signature": "Exceptional e a-\u003eExceptional e a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:force"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003eforce\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "forceT",
          "package": "explicit-exception",
          "signature": "ExceptionalT e m a -\u003e ExceptionalT e m a",
          "source": "src/Control-Monad-Exception-Asynchronous-Lazy.html#forceT",
          "type": "function"
        },
        "index": {
          "description": "see force",
          "hierarchy": "Control Monad Exception Asynchronous Lazy",
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "forceT",
          "normalized": "ExceptionalT a b c-\u003eExceptionalT a b c",
          "package": "explicit-exception",
          "signature": "ExceptionalT e m a-\u003eExceptionalT e m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:forceT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "fromSynchronous",
          "package": "explicit-exception",
          "signature": "a -\u003e Exceptional e a -\u003e Exceptional e a",
          "source": "src/Control-Monad-Exception-Asynchronous-Lazy.html#fromSynchronous",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception Asynchronous Lazy",
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "fromSynchronous",
          "normalized": "a-\u003eExceptional b a-\u003eExceptional b a",
          "package": "explicit-exception",
          "partial": "Synchronous",
          "signature": "a-\u003eExceptional e a-\u003eExceptional e a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:fromSynchronous"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "fromSynchronousMonoid",
          "package": "explicit-exception",
          "signature": "Exceptional e a -\u003e Exceptional e a",
          "source": "src/Control-Monad-Exception-Asynchronous-Lazy.html#fromSynchronousMonoid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception Asynchronous Lazy",
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "fromSynchronousMonoid",
          "normalized": "Exceptional a b-\u003eExceptional a b",
          "package": "explicit-exception",
          "partial": "Synchronous Monoid",
          "signature": "Exceptional e a-\u003eExceptional e a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:fromSynchronousMonoid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "fromSynchronousMonoidT",
          "package": "explicit-exception",
          "signature": "ExceptionalT e m a -\u003e ExceptionalT e m a",
          "source": "src/Control-Monad-Exception-Asynchronous-Lazy.html#fromSynchronousMonoidT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception Asynchronous Lazy",
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "fromSynchronousMonoidT",
          "normalized": "ExceptionalT a b c-\u003eExceptionalT a b c",
          "package": "explicit-exception",
          "partial": "Synchronous Monoid",
          "signature": "ExceptionalT e m a-\u003eExceptionalT e m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:fromSynchronousMonoidT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "fromSynchronousNull",
          "package": "explicit-exception",
          "signature": "Exceptional e () -\u003e Exceptional e ()",
          "source": "src/Control-Monad-Exception-Asynchronous-Lazy.html#fromSynchronousNull",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception Asynchronous Lazy",
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "fromSynchronousNull",
          "normalized": "Exceptional a()-\u003eExceptional a()",
          "package": "explicit-exception",
          "partial": "Synchronous Null",
          "signature": "Exceptional e()-\u003eExceptional e()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:fromSynchronousNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "fromSynchronousT",
          "package": "explicit-exception",
          "signature": "a -\u003e ExceptionalT e m a -\u003e ExceptionalT e m a",
          "source": "src/Control-Monad-Exception-Asynchronous-Lazy.html#fromSynchronousT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception Asynchronous Lazy",
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "fromSynchronousT",
          "normalized": "a-\u003eExceptionalT b c a-\u003eExceptionalT b c a",
          "package": "explicit-exception",
          "partial": "Synchronous",
          "signature": "a-\u003eExceptionalT e m a-\u003eExceptionalT e m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:fromSynchronousT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe advise to use the Endo Monoid\nwhen you want to read a series of characters into a list.\nThis means you use the difference lists technique\nin order to build the list, which is efficient.\n\u003c/p\u003e\u003cpre\u003e import Data.Monoid (Endo, appEndo, )\n import Control.Exception (try, )\n import qualified Control.Monad.Exception.Synchronous as Sync\n\u003c/pre\u003e\u003cpre\u003e fmap (flip appEndo []) $ manyMonoidT (fromSynchronousMonoidT $ fmap (Endo . (:)) $ Sync.fromEitherT $ try getChar)\n\u003c/pre\u003e\u003cp\u003eIf you want Lazy IO you must additionally convert \u003ccode\u003egetChar\u003c/code\u003e to LazyIO monad.\n\u003c/p\u003e",
          "module": "[\"Control.Monad.Exception.Asynchronous.Lazy\",\"Control.Monad.Exception.Asynchronous.Strict\"]",
          "name": "manyMonoidT",
          "package": "explicit-exception",
          "signature": "ExceptionalT e m a-\u003e ExceptionalT e m a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:manyMonoidT\",\"http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#v:manyMonoidT\"]"
        },
        "index": {
          "description": "We advise to use the Endo Monoid when you want to read series of characters into list This means you use the difference lists technique in order to build the list which is efficient import Data.Monoid Endo appEndo import Control.Exception try import qualified Control.Monad.Exception.Synchronous as Sync fmap flip appEndo manyMonoidT fromSynchronousMonoidT fmap Endo Sync.fromEitherT try getChar If you want Lazy IO you must additionally convert getChar to LazyIO monad",
          "hierarchy": "Control Monad Exception Asynchronous Lazy",
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "manyMonoidT",
          "normalized": "ExceptionalT a b c-\u003eExceptionalT a b c",
          "package": "explicit-exception",
          "partial": "Monoid",
          "signature": "ExceptionalT e m a-\u003eExceptionalT e m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:manyMonoidT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: use manyMonoidT with appropriate Monad like LazyIO and result Monoid like Endo instead\u003c/p\u003e\u003c/div\u003e\u003cp\u003eRepeat an action with synchronous exceptions until an exception occurs.\nCombine all atomic results using the \u003ccode\u003ebind\u003c/code\u003e function.\nIt may be \u003ccode\u003econs = (:)\u003c/code\u003e and \u003ccode\u003eempty = []\u003c/code\u003e for \u003ccode\u003eb\u003c/code\u003e being a list type.\nThe \u003ccode\u003edefer\u003c/code\u003e function may be \u003ccode\u003eid\u003c/code\u003e\nor \u003ccode\u003eunsafeInterleaveIO\u003c/code\u003e for lazy read operations.\nThe exception is returned as asynchronous exception.\n\u003c/p\u003e",
          "module": "[\"Control.Monad.Exception.Asynchronous.Lazy\",\"Control.Monad.Exception.Asynchronous.Strict\"]",
          "name": "manySynchronousT",
          "package": "explicit-exception",
          "signature": "(m (Exceptional e b) -\u003e m (Exceptional e b))-\u003e (a -\u003e b -\u003e b)-\u003e b-\u003e ExceptionalT e m a-\u003e m (Exceptional e b)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:manySynchronousT\",\"http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#v:manySynchronousT\"]"
        },
        "index": {
          "description": "Deprecated use manyMonoidT with appropriate Monad like LazyIO and result Monoid like Endo instead Repeat an action with synchronous exceptions until an exception occurs Combine all atomic results using the bind function It may be cons and empty for being list type The defer function may be id or unsafeInterleaveIO for lazy read operations The exception is returned as asynchronous exception",
          "hierarchy": "Control Monad Exception Asynchronous Lazy",
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "manySynchronousT",
          "normalized": "(a(Exceptional b c)-\u003ea(Exceptional b c))-\u003e(d-\u003ec-\u003ec)-\u003ec-\u003eExceptionalT b a d-\u003ea(Exceptional b c)",
          "package": "explicit-exception",
          "partial": "Synchronous",
          "signature": "(m(Exceptional e b)-\u003em(Exceptional e b))-\u003e(a-\u003eb-\u003eb)-\u003eb-\u003eExceptionalT e m a-\u003em(Exceptional e b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:manySynchronousT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "mapException",
          "package": "explicit-exception",
          "signature": "(e0 -\u003e e1) -\u003e Exceptional e0 a -\u003e Exceptional e1 a",
          "source": "src/Control-Monad-Exception-Asynchronous-Lazy.html#mapException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception Asynchronous Lazy",
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "mapException",
          "normalized": "(a-\u003ea)-\u003eExceptional a b-\u003eExceptional a b",
          "package": "explicit-exception",
          "partial": "Exception",
          "signature": "(e-\u003ee)-\u003eExceptional e a-\u003eExceptional e a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:mapException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "mapExceptionT",
          "package": "explicit-exception",
          "signature": "(e0 -\u003e e1) -\u003e ExceptionalT e0 m a -\u003e ExceptionalT e1 m a",
          "source": "src/Control-Monad-Exception-Asynchronous-Lazy.html#mapExceptionT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception Asynchronous Lazy",
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "mapExceptionT",
          "normalized": "(a-\u003ea)-\u003eExceptionalT a b c-\u003eExceptionalT a b c",
          "package": "explicit-exception",
          "partial": "Exception",
          "signature": "(e-\u003ee)-\u003eExceptionalT e m a-\u003eExceptionalT e m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:mapExceptionT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "mapExceptional",
          "package": "explicit-exception",
          "signature": "(e0 -\u003e e1) -\u003e (a -\u003e b) -\u003e Exceptional e0 a -\u003e Exceptional e1 b",
          "source": "src/Control-Monad-Exception-Asynchronous-Lazy.html#mapExceptional",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception Asynchronous Lazy",
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "mapExceptional",
          "normalized": "(a-\u003ea)-\u003e(b-\u003ec)-\u003eExceptional a b-\u003eExceptional a c",
          "package": "explicit-exception",
          "partial": "Exceptional",
          "signature": "(e-\u003ee)-\u003e(a-\u003eb)-\u003eExceptional e a-\u003eExceptional e b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:mapExceptional"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "mapExceptionalT",
          "package": "explicit-exception",
          "signature": "(m (Exceptional e0 a) -\u003e n (Exceptional e1 b)) -\u003e ExceptionalT e0 m a -\u003e ExceptionalT e1 n b",
          "source": "src/Control-Monad-Exception-Asynchronous-Lazy.html#mapExceptionalT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception Asynchronous Lazy",
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "mapExceptionalT",
          "normalized": "(a(Exceptional b c)-\u003ed(Exceptional b e))-\u003eExceptionalT b a c-\u003eExceptionalT b d e",
          "package": "explicit-exception",
          "partial": "Exceptional",
          "signature": "(m(Exceptional e a)-\u003en(Exceptional e b))-\u003eExceptionalT e m a-\u003eExceptionalT e n b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:mapExceptionalT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "mapM",
          "package": "explicit-exception",
          "signature": "(a -\u003e m b) -\u003e Exceptional e a -\u003e m (Exceptional e b)",
          "source": "src/Control-Monad-Exception-Asynchronous-Lazy.html#mapM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception Asynchronous Lazy",
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "mapM",
          "normalized": "(a-\u003eb c)-\u003eExceptional d a-\u003eb(Exceptional d c)",
          "package": "explicit-exception",
          "signature": "(a-\u003em b)-\u003eExceptional e a-\u003em(Exceptional e b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:mapM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "maybeAbort",
          "package": "explicit-exception",
          "signature": "Exceptional e a -\u003e Maybe e -\u003e Exceptional e a",
          "source": "src/Control-Monad-Exception-Asynchronous-Lazy.html#maybeAbort",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception Asynchronous Lazy",
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "maybeAbort",
          "normalized": "Exceptional a b-\u003eMaybe a-\u003eExceptional a b",
          "package": "explicit-exception",
          "partial": "Abort",
          "signature": "Exceptional e a-\u003eMaybe e-\u003eExceptional e a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:maybeAbort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScan \u003ccode\u003ex\u003c/code\u003e using the \u003ccode\u003edecons\u003c/code\u003e function\nand run an action with synchronous exceptions for each element fetched from \u003ccode\u003ex\u003c/code\u003e.\nEach invocation of an element action may stop this function\ndue to an exception.\nIf all element actions can be performed successfully\nand if there is an asynchronous exception\nthen at the end this exception is raised as synchronous exception.\n\u003ccode\u003edecons\u003c/code\u003e function might be \u003ccode\u003eData.List.HT.viewL\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Control.Monad.Exception.Asynchronous.Lazy\",\"Control.Monad.Exception.Asynchronous.Strict\"]",
          "name": "processToSynchronousT_",
          "package": "explicit-exception",
          "signature": "(b -\u003e Maybe (a, b))-\u003e (a -\u003e ExceptionalT e m ())-\u003e Exceptional e b-\u003e ExceptionalT e m ()",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:processToSynchronousT_\",\"http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#v:processToSynchronousT_\"]"
        },
        "index": {
          "description": "Scan using the decons function and run an action with synchronous exceptions for each element fetched from Each invocation of an element action may stop this function due to an exception If all element actions can be performed successfully and if there is an asynchronous exception then at the end this exception is raised as synchronous exception decons function might be Data.List.HT.viewL",
          "hierarchy": "Control Monad Exception Asynchronous Lazy",
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "processToSynchronousT_",
          "normalized": "(a-\u003eMaybe(b,a))-\u003e(b-\u003eExceptionalT c d())-\u003eExceptional c a-\u003eExceptionalT c d()",
          "package": "explicit-exception",
          "partial": "To Synchronous",
          "signature": "(b-\u003eMaybe(a,b))-\u003e(a-\u003eExceptionalT e m())-\u003eExceptional e b-\u003eExceptionalT e m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:processToSynchronousT_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an exceptional value without exception.\n\u003c/p\u003e",
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "pure",
          "package": "explicit-exception",
          "signature": "a -\u003e Exceptional e a",
          "source": "src/Control-Monad-Exception-Asynchronous-Lazy.html#pure",
          "type": "function"
        },
        "index": {
          "description": "Create an exceptional value without exception",
          "hierarchy": "Control Monad Exception Asynchronous Lazy",
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "pure",
          "normalized": "a-\u003eExceptional b a",
          "package": "explicit-exception",
          "signature": "a-\u003eExceptional e a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:pure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "result",
          "package": "explicit-exception",
          "signature": "a",
          "source": "src/Control-Monad-Exception-Asynchronous-Lazy.html#Exceptional",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception Asynchronous Lazy",
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "result",
          "package": "explicit-exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "runExceptionalT",
          "package": "explicit-exception",
          "signature": "m (Exceptional e a)",
          "source": "src/Control-Monad-Exception-Asynchronous-Lazy.html#ExceptionalT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception Asynchronous Lazy",
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "runExceptionalT",
          "package": "explicit-exception",
          "partial": "Exceptional",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:runExceptionalT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "sequence",
          "package": "explicit-exception",
          "signature": "Exceptional e (m a) -\u003e m (Exceptional e a)",
          "source": "src/Control-Monad-Exception-Asynchronous-Lazy.html#sequence",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception Asynchronous Lazy",
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "sequence",
          "normalized": "Exceptional a(b c)-\u003eb(Exceptional a c)",
          "package": "explicit-exception",
          "signature": "Exceptional e(m a)-\u003em(Exceptional e a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:sequence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "sequenceA",
          "package": "explicit-exception",
          "signature": "Exceptional e (f a) -\u003e f (Exceptional e a)",
          "source": "src/Control-Monad-Exception-Asynchronous-Lazy.html#sequenceA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception Asynchronous Lazy",
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "sequenceA",
          "normalized": "Exceptional a(b c)-\u003eb(Exceptional a c)",
          "package": "explicit-exception",
          "signature": "Exceptional e(f a)-\u003ef(Exceptional e a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:sequenceA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs there a better name?\n\u003c/p\u003e",
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "sequenceF",
          "package": "explicit-exception",
          "signature": "Exceptional e (f a) -\u003e f (Exceptional e a)",
          "source": "src/Control-Monad-Exception-Asynchronous-Lazy.html#sequenceF",
          "type": "function"
        },
        "index": {
          "description": "Is there better name",
          "hierarchy": "Control Monad Exception Asynchronous Lazy",
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "sequenceF",
          "normalized": "Exceptional a(b c)-\u003eb(Exceptional a c)",
          "package": "explicit-exception",
          "signature": "Exceptional e(f a)-\u003ef(Exceptional e a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:sequenceF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Check whether this function is really what you need. It generates an unreasonable exception when the second exception is caused by the first one.\u003c/p\u003e\u003c/div\u003e\u003cp\u003eI consider both actions to process the data simultaneously through lazy evaluation.\nIf the second one fails too, it must have encountered an exception\nin the data that was successfully emitted by the first action,\nand thus the exception of the second action is probably earlier.\n\u003c/p\u003e\u003cp\u003eWe cannot check in general whether the two exception occur at the same time,\ne.g. the second one might occur since the first occured and left an invalid structure.\nIn this case we should emit the first exception, not the second one.\nBecause of this I expect that this function is not particularly useful.\nOtherwise it could be used as bind operation for a monad instance.\n\u003c/p\u003e",
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "simultaneousBind",
          "package": "explicit-exception",
          "signature": "Exceptional e a -\u003e (a -\u003e Exceptional e b) -\u003e Exceptional e b",
          "source": "src/Control-Monad-Exception-Asynchronous-Lazy.html#simultaneousBind",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Check whether this function is really what you need It generates an unreasonable exception when the second exception is caused by the first one consider both actions to process the data simultaneously through lazy evaluation If the second one fails too it must have encountered an exception in the data that was successfully emitted by the first action and thus the exception of the second action is probably earlier We cannot check in general whether the two exception occur at the same time e.g the second one might occur since the first occured and left an invalid structure In this case we should emit the first exception not the second one Because of this expect that this function is not particularly useful Otherwise it could be used as bind operation for monad instance",
          "hierarchy": "Control Monad Exception Asynchronous Lazy",
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "simultaneousBind",
          "normalized": "Exceptional a b-\u003e(b-\u003eExceptional a c)-\u003eExceptional a c",
          "package": "explicit-exception",
          "partial": "Bind",
          "signature": "Exceptional e a-\u003e(a-\u003eExceptional e b)-\u003eExceptional e b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:simultaneousBind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Check whether this function is really what you need. It generates an unreasonable exception when the second exception is caused by the first one.\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "simultaneousBindM",
          "package": "explicit-exception",
          "signature": "m (Exceptional e a) -\u003e (a -\u003e m (Exceptional e b)) -\u003e m (Exceptional e b)",
          "source": "src/Control-Monad-Exception-Asynchronous-Lazy.html#simultaneousBindM",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Check whether this function is really what you need It generates an unreasonable exception when the second exception is caused by the first one",
          "hierarchy": "Control Monad Exception Asynchronous Lazy",
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "simultaneousBindM",
          "normalized": "a(Exceptional b c)-\u003e(c-\u003ea(Exceptional b d))-\u003ea(Exceptional b d)",
          "package": "explicit-exception",
          "partial": "Bind",
          "signature": "m(Exceptional e a)-\u003e(a-\u003em(Exceptional e b))-\u003em(Exceptional e b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:simultaneousBindM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "swapToAsynchronousSynchronous",
          "package": "explicit-exception",
          "signature": "Exceptional e1 (Exceptional e0 a) -\u003e Exceptional e0 (Exceptional e1 a)",
          "source": "src/Control-Monad-Exception-Asynchronous-Lazy.html#swapToAsynchronousSynchronous",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception Asynchronous Lazy",
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "swapToAsynchronousSynchronous",
          "normalized": "Exceptional a(Exceptional a b)-\u003eExceptional a(Exceptional a b)",
          "package": "explicit-exception",
          "partial": "To Asynchronous Synchronous",
          "signature": "Exceptional e(Exceptional e a)-\u003eExceptional e(Exceptional e a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:swapToAsynchronousSynchronous"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConsider a file format consisting of a header and a data body.\nThe header can only be used if is read completely.\nIts parsing might stop with an synchronous exception.\nThe data body can also be used if it is truncated by an exceptional event.\nThis is expressed by an asynchronous exception.\nA loader for this file format can thus fail\nby a synchronous and an asynchronous exception.\nSurprisingly, both orders of nesting these two kinds of exceptional actions\nare equally expressive.\nThis function converts to the form where the synchronous exception is the outer one.\n\u003c/p\u003e\u003cp\u003eThis is a specialisation of \u003ccode\u003e\u003ca\u003esequence\u003c/a\u003e\u003c/code\u003e and friends.\n\u003c/p\u003e",
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "swapToSynchronousAsynchronous",
          "package": "explicit-exception",
          "signature": "Exceptional e0 (Exceptional e1 a) -\u003e Exceptional e1 (Exceptional e0 a)",
          "source": "src/Control-Monad-Exception-Asynchronous-Lazy.html#swapToSynchronousAsynchronous",
          "type": "function"
        },
        "index": {
          "description": "Consider file format consisting of header and data body The header can only be used if is read completely Its parsing might stop with an synchronous exception The data body can also be used if it is truncated by an exceptional event This is expressed by an asynchronous exception loader for this file format can thus fail by synchronous and an asynchronous exception Surprisingly both orders of nesting these two kinds of exceptional actions are equally expressive This function converts to the form where the synchronous exception is the outer one This is specialisation of sequence and friends",
          "hierarchy": "Control Monad Exception Asynchronous Lazy",
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "swapToSynchronousAsynchronous",
          "normalized": "Exceptional a(Exceptional a b)-\u003eExceptional a(Exceptional a b)",
          "package": "explicit-exception",
          "partial": "To Synchronous Asynchronous",
          "signature": "Exceptional e(Exceptional e a)-\u003eExceptional e(Exceptional e a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:swapToSynchronousAsynchronous"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eI think in most cases we want throwMonoid,\nthus we can replace \u003ccode\u003e\u003ca\u003ethrow\u003c/a\u003e\u003c/code\u003e by \u003ccode\u003e\u003ca\u003ethrowMonoid\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "throw",
          "package": "explicit-exception",
          "signature": "e -\u003e Exceptional e ()",
          "source": "src/Control-Monad-Exception-Asynchronous-Lazy.html#throw",
          "type": "function"
        },
        "index": {
          "description": "think in most cases we want throwMonoid thus we can replace throw by throwMonoid",
          "hierarchy": "Control Monad Exception Asynchronous Lazy",
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "throw",
          "normalized": "a-\u003eExceptional a()",
          "package": "explicit-exception",
          "signature": "e-\u003eExceptional e()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:throw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "throwMonoid",
          "package": "explicit-exception",
          "signature": "e -\u003e Exceptional e a",
          "source": "src/Control-Monad-Exception-Asynchronous-Lazy.html#throwMonoid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception Asynchronous Lazy",
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "throwMonoid",
          "normalized": "a-\u003eExceptional a b",
          "package": "explicit-exception",
          "partial": "Monoid",
          "signature": "e-\u003eExceptional e a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:throwMonoid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "throwMonoidT",
          "package": "explicit-exception",
          "signature": "e -\u003e ExceptionalT e m a",
          "source": "src/Control-Monad-Exception-Asynchronous-Lazy.html#throwMonoidT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception Asynchronous Lazy",
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "throwMonoidT",
          "normalized": "a-\u003eExceptionalT a b c",
          "package": "explicit-exception",
          "partial": "Monoid",
          "signature": "e-\u003eExceptionalT e m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:throwMonoidT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "toSynchronous",
          "package": "explicit-exception",
          "signature": "Exceptional e a -\u003e Exceptional e a",
          "source": "src/Control-Monad-Exception-Asynchronous-Lazy.html#toSynchronous",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception Asynchronous Lazy",
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "toSynchronous",
          "normalized": "Exceptional a b-\u003eExceptional a b",
          "package": "explicit-exception",
          "partial": "Synchronous",
          "signature": "Exceptional e a-\u003eExceptional e a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:toSynchronous"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eFoldable\u003c/code\u003e instance would allow to strip off the exception too easily.\n\u003c/p\u003e\u003cp\u003eI like the methods of \u003ccode\u003eTraversable\u003c/code\u003e, but \u003ccode\u003eTraversable\u003c/code\u003e instance requires \u003ccode\u003eFoldable\u003c/code\u003e instance.\n\u003c/p\u003e",
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "traverse",
          "package": "explicit-exception",
          "signature": "(a -\u003e f b) -\u003e Exceptional e a -\u003e f (Exceptional e b)",
          "source": "src/Control-Monad-Exception-Asynchronous-Lazy.html#traverse",
          "type": "function"
        },
        "index": {
          "description": "Foldable instance would allow to strip off the exception too easily like the methods of Traversable but Traversable instance requires Foldable instance",
          "hierarchy": "Control Monad Exception Asynchronous Lazy",
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "traverse",
          "normalized": "(a-\u003eb c)-\u003eExceptional d a-\u003eb(Exceptional d c)",
          "package": "explicit-exception",
          "signature": "(a-\u003ef b)-\u003eExceptional e a-\u003ef(Exceptional e b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:traverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is an example for application specific handling of result values.\nAssume you obtain two lazy lists say from \u003ccode\u003e\u003ca\u003ereadFile\u003c/a\u003e\u003c/code\u003e\nand you want to zip their contents.\nIf one of the stream readers emits an exception,\nwe quit with that exception.\nIf both streams have throw an exception at the same file position,\nthe exception of the first stream is propagated.\n\u003c/p\u003e",
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "zipWith",
          "package": "explicit-exception",
          "signature": "(a -\u003e b -\u003e c) -\u003e Exceptional e [a] -\u003e Exceptional e [b] -\u003e Exceptional e [c]",
          "source": "src/Control-Monad-Exception-Asynchronous-Lazy.html#zipWith",
          "type": "function"
        },
        "index": {
          "description": "This is an example for application specific handling of result values Assume you obtain two lazy lists say from readFile and you want to zip their contents If one of the stream readers emits an exception we quit with that exception If both streams have throw an exception at the same file position the exception of the first stream is propagated",
          "hierarchy": "Control Monad Exception Asynchronous Lazy",
          "module": "Control.Monad.Exception.Asynchronous.Lazy",
          "name": "zipWith",
          "normalized": "(a-\u003eb-\u003ec)-\u003eExceptional d[a]-\u003eExceptional d[b]-\u003eExceptional d[c]",
          "package": "explicit-exception",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec)-\u003eExceptional e[a]-\u003eExceptional e[b]-\u003eExceptional e[c]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:zipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception.Asynchronous.Strict",
          "name": "Strict",
          "package": "explicit-exception",
          "source": "src/Control-Monad-Exception-Asynchronous-Strict.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Monad Exception Asynchronous Strict",
          "module": "Control.Monad.Exception.Asynchronous.Strict",
          "name": "Strict",
          "package": "explicit-exception",
          "partial": "Strict",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContains a value and a reason why the computation of the value of type \u003ccode\u003ea\u003c/code\u003e was terminated.\nImagine \u003ccode\u003ea\u003c/code\u003e as a list type, and an according operation like the \u003ccode\u003e\u003ca\u003ereadFile\u003c/a\u003e\u003c/code\u003e operation.\nIf the exception part is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e then the value could be constructed regularly.\nIf the exception part is \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e then the value could not be constructed completely.\nHowever you can read the result of type \u003ccode\u003ea\u003c/code\u003e lazily,\neven if an exception occurs while it is evaluated.\nIf you evaluate the exception part,\nthen the result value is certainly computed completely.\n\u003c/p\u003e\u003cp\u003eHowever, we cannot provide general \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e functionality\ndue to the very different ways of combining the results of type \u003ccode\u003ea\u003c/code\u003e.\nIt is recommended to process the result value in an application specific way,\nand after consumption of the result, throw a synchronous exception using \u003ccode\u003e\u003ca\u003etoSynchronous\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eMaybe in the future we provide a monad instance\nwhich considers subsequent actions as simultaneous processes on a lazy data structure.\n\u003c/p\u003e",
          "module": "Control.Monad.Exception.Asynchronous.Strict",
          "name": "Exceptional",
          "package": "explicit-exception",
          "source": "src/Control-Monad-Exception-Asynchronous-Strict.html#Exceptional",
          "type": "data"
        },
        "index": {
          "description": "Contains value and reason why the computation of the value of type was terminated Imagine as list type and an according operation like the readFile operation If the exception part is Nothing then the value could be constructed regularly If the exception part is Just then the value could not be constructed completely However you can read the result of type lazily even if an exception occurs while it is evaluated If you evaluate the exception part then the result value is certainly computed completely However we cannot provide general Monad functionality due to the very different ways of combining the results of type It is recommended to process the result value in an application specific way and after consumption of the result throw synchronous exception using toSynchronous Maybe in the future we provide monad instance which considers subsequent actions as simultaneous processes on lazy data structure",
          "hierarchy": "Control Monad Exception Asynchronous Strict",
          "module": "Control.Monad.Exception.Asynchronous.Strict",
          "name": "Exceptional",
          "package": "explicit-exception",
          "partial": "Exceptional",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#t:Exceptional"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIn contrast to synchronous exceptions,\nthe asynchronous monad transformer is not quite a monad.\nYou must use the \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e interface or \u003ccode\u003e\u003ca\u003ebindT\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e",
          "module": "Control.Monad.Exception.Asynchronous.Strict",
          "name": "ExceptionalT",
          "package": "explicit-exception",
          "source": "src/Control-Monad-Exception-Asynchronous-Strict.html#ExceptionalT",
          "type": "newtype"
        },
        "index": {
          "description": "In contrast to synchronous exceptions the asynchronous monad transformer is not quite monad You must use the Monoid interface or bindT instead",
          "hierarchy": "Control Monad Exception Asynchronous Strict",
          "module": "Control.Monad.Exception.Asynchronous.Strict",
          "name": "ExceptionalT",
          "package": "explicit-exception",
          "partial": "Exceptional",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#t:ExceptionalT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception.Asynchronous.Strict",
          "name": "Exceptional",
          "package": "explicit-exception",
          "signature": "Exceptional",
          "source": "src/Control-Monad-Exception-Asynchronous-Strict.html#Exceptional",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception Asynchronous Strict",
          "module": "Control.Monad.Exception.Asynchronous.Strict",
          "name": "Exceptional",
          "package": "explicit-exception",
          "partial": "Exceptional",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#v:Exceptional"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception.Asynchronous.Strict",
          "name": "ExceptionalT",
          "package": "explicit-exception",
          "signature": "ExceptionalT",
          "source": "src/Control-Monad-Exception-Asynchronous-Strict.html#ExceptionalT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception Asynchronous Strict",
          "module": "Control.Monad.Exception.Asynchronous.Strict",
          "name": "ExceptionalT",
          "package": "explicit-exception",
          "partial": "Exceptional",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#v:ExceptionalT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is an example for application specific handling of result values.\nAssume you obtain two lazy lists say from \u003ccode\u003e\u003ca\u003ereadFile\u003c/a\u003e\u003c/code\u003e\nand you want to append their contents.\nIf the first stream ends with an exception,\nthis exception is kept\nand the second stream is not touched.\nIf the first stream can be read successfully,\nthe second one is appended until stops.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eappend\u003c/a\u003e\u003c/code\u003e is less strict than the \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e method \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
          "module": "Control.Monad.Exception.Asynchronous.Strict",
          "name": "append",
          "package": "explicit-exception",
          "signature": "Exceptional e a -\u003e Exceptional e a -\u003e Exceptional e a",
          "source": "src/Control-Monad-Exception-Asynchronous-Strict.html#append",
          "type": "function"
        },
        "index": {
          "description": "This is an example for application specific handling of result values Assume you obtain two lazy lists say from readFile and you want to append their contents If the first stream ends with an exception this exception is kept and the second stream is not touched If the first stream can be read successfully the second one is appended until stops append is less strict than the Monoid method mappend instance",
          "hierarchy": "Control Monad Exception Asynchronous Strict",
          "module": "Control.Monad.Exception.Asynchronous.Strict",
          "name": "append",
          "normalized": "Exceptional a b-\u003eExceptional a b-\u003eExceptional a b",
          "package": "explicit-exception",
          "signature": "Exceptional e a-\u003eExceptional e a-\u003eExceptional e a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#v:append"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception.Asynchronous.Strict",
          "name": "appendM",
          "package": "explicit-exception",
          "signature": "m (Exceptional e a) -\u003e m (Exceptional e a) -\u003e m (Exceptional e a)",
          "source": "src/Control-Monad-Exception-Asynchronous-Strict.html#appendM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception Asynchronous Strict",
          "module": "Control.Monad.Exception.Asynchronous.Strict",
          "name": "appendM",
          "normalized": "a(Exceptional b c)-\u003ea(Exceptional b c)-\u003ea(Exceptional b c)",
          "package": "explicit-exception",
          "signature": "m(Exceptional e a)-\u003em(Exceptional e a)-\u003em(Exceptional e a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#v:appendM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe monadic bind operation.\nIt cannot be made an instance of the Monad class method \u003ccode\u003e(\u003e\u003e=)\u003c/code\u003e\nsince it requires a default return value\nin case the first action fails.\nWe get this default value by the \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e method \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Exception.Asynchronous.Strict",
          "name": "bindT",
          "package": "explicit-exception",
          "signature": "ExceptionalT e m a -\u003e (a -\u003e ExceptionalT e m b) -\u003e ExceptionalT e m b",
          "source": "src/Control-Monad-Exception-Asynchronous-Strict.html#bindT",
          "type": "function"
        },
        "index": {
          "description": "The monadic bind operation It cannot be made an instance of the Monad class method since it requires default return value in case the first action fails We get this default value by the Monoid method mempty",
          "hierarchy": "Control Monad Exception Asynchronous Strict",
          "module": "Control.Monad.Exception.Asynchronous.Strict",
          "name": "bindT",
          "normalized": "ExceptionalT a b c-\u003e(c-\u003eExceptionalT a b d)-\u003eExceptionalT a b d",
          "package": "explicit-exception",
          "signature": "ExceptionalT e m a-\u003e(a-\u003eExceptionalT e m b)-\u003eExceptionalT e m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#v:bindT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an exceptional value with exception.\n\u003c/p\u003e",
          "module": "Control.Monad.Exception.Asynchronous.Strict",
          "name": "broken",
          "package": "explicit-exception",
          "signature": "e -\u003e a -\u003e Exceptional e a",
          "source": "src/Control-Monad-Exception-Asynchronous-Strict.html#broken",
          "type": "function"
        },
        "index": {
          "description": "Create an exceptional value with exception",
          "hierarchy": "Control Monad Exception Asynchronous Strict",
          "module": "Control.Monad.Exception.Asynchronous.Strict",
          "name": "broken",
          "normalized": "a-\u003eb-\u003eExceptional a b",
          "package": "explicit-exception",
          "signature": "e-\u003ea-\u003eExceptional e a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#v:broken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception.Asynchronous.Strict",
          "name": "continue",
          "package": "explicit-exception",
          "signature": "Maybe e -\u003e Exceptional e a -\u003e Exceptional e a",
          "source": "src/Control-Monad-Exception-Asynchronous-Strict.html#continue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception Asynchronous Strict",
          "module": "Control.Monad.Exception.Asynchronous.Strict",
          "name": "continue",
          "normalized": "Maybe a-\u003eExceptional a b-\u003eExceptional a b",
          "package": "explicit-exception",
          "signature": "Maybe e-\u003eExceptional e a-\u003eExceptional e a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#v:continue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception.Asynchronous.Strict",
          "name": "continueM",
          "package": "explicit-exception",
          "signature": "m (Maybe e) -\u003e m (Exceptional e a) -\u003e m (Exceptional e a)",
          "source": "src/Control-Monad-Exception-Asynchronous-Strict.html#continueM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception Asynchronous Strict",
          "module": "Control.Monad.Exception.Asynchronous.Strict",
          "name": "continueM",
          "normalized": "a(Maybe b)-\u003ea(Exceptional b c)-\u003ea(Exceptional b c)",
          "package": "explicit-exception",
          "signature": "m(Maybe e)-\u003em(Exceptional e a)-\u003em(Exceptional e a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#v:continueM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYou might use an exception of type \u003ccode\u003eMaybe e\u003c/code\u003e in \u003ccode\u003e\u003ca\u003emanyMonoidT\u003c/a\u003e\u003c/code\u003e\nin order to stop the loop.\nAfter finishing the loop you will want\nto turn the \u003ccode\u003eNothing\u003c/code\u003e exception into a success.\nThis is achieved by this function.\n\u003c/p\u003e",
          "module": "Control.Monad.Exception.Asynchronous.Strict",
          "name": "eatNothing",
          "package": "explicit-exception",
          "signature": "Exceptional (Maybe e) a -\u003e Exceptional e a",
          "source": "src/Control-Monad-Exception-Asynchronous-Strict.html#eatNothing",
          "type": "function"
        },
        "index": {
          "description": "You might use an exception of type Maybe in manyMonoidT in order to stop the loop After finishing the loop you will want to turn the Nothing exception into success This is achieved by this function",
          "hierarchy": "Control Monad Exception Asynchronous Strict",
          "module": "Control.Monad.Exception.Asynchronous.Strict",
          "name": "eatNothing",
          "normalized": "Exceptional(Maybe a)b-\u003eExceptional a b",
          "package": "explicit-exception",
          "partial": "Nothing",
          "signature": "Exceptional(Maybe e)a-\u003eExceptional e a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#v:eatNothing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception.Asynchronous.Strict",
          "name": "eatNothingT",
          "package": "explicit-exception",
          "signature": "ExceptionalT (Maybe e) m a -\u003e ExceptionalT e m a",
          "source": "src/Control-Monad-Exception-Asynchronous-Strict.html#eatNothingT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception Asynchronous Strict",
          "module": "Control.Monad.Exception.Asynchronous.Strict",
          "name": "eatNothingT",
          "normalized": "ExceptionalT(Maybe a)b c-\u003eExceptionalT a b c",
          "package": "explicit-exception",
          "partial": "Nothing",
          "signature": "ExceptionalT(Maybe e)m a-\u003eExceptionalT e m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#v:eatNothingT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception.Asynchronous.Strict",
          "name": "exception",
          "package": "explicit-exception",
          "signature": "Maybe e",
          "source": "src/Control-Monad-Exception-Asynchronous-Strict.html#Exceptional",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception Asynchronous Strict",
          "module": "Control.Monad.Exception.Asynchronous.Strict",
          "name": "exception",
          "package": "explicit-exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#v:exception"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econstruct Exceptional constructor lazily \n\u003c/p\u003e",
          "module": "Control.Monad.Exception.Asynchronous.Strict",
          "name": "force",
          "package": "explicit-exception",
          "signature": "Exceptional e a -\u003e Exceptional e a",
          "source": "src/Control-Monad-Exception-Asynchronous-Strict.html#force",
          "type": "function"
        },
        "index": {
          "description": "construct Exceptional constructor lazily",
          "hierarchy": "Control Monad Exception Asynchronous Strict",
          "module": "Control.Monad.Exception.Asynchronous.Strict",
          "name": "force",
          "normalized": "Exceptional a b-\u003eExceptional a b",
          "package": "explicit-exception",
          "signature": "Exceptional e a-\u003eExceptional e a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#v:force"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003eforce\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.Exception.Asynchronous.Strict",
          "name": "forceT",
          "package": "explicit-exception",
          "signature": "ExceptionalT e m a -\u003e ExceptionalT e m a",
          "source": "src/Control-Monad-Exception-Asynchronous-Strict.html#forceT",
          "type": "function"
        },
        "index": {
          "description": "see force",
          "hierarchy": "Control Monad Exception Asynchronous Strict",
          "module": "Control.Monad.Exception.Asynchronous.Strict",
          "name": "forceT",
          "normalized": "ExceptionalT a b c-\u003eExceptionalT a b c",
          "package": "explicit-exception",
          "signature": "ExceptionalT e m a-\u003eExceptionalT e m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#v:forceT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception.Asynchronous.Strict",
          "name": "fromSynchronous",
          "package": "explicit-exception",
          "signature": "a -\u003e Exceptional e a -\u003e Exceptional e a",
          "source": "src/Control-Monad-Exception-Asynchronous-Strict.html#fromSynchronous",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception Asynchronous Strict",
          "module": "Control.Monad.Exception.Asynchronous.Strict",
          "name": "fromSynchronous",
          "normalized": "a-\u003eExceptional b a-\u003eExceptional b a",
          "package": "explicit-exception",
          "partial": "Synchronous",
          "signature": "a-\u003eExceptional e a-\u003eExceptional e a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#v:fromSynchronous"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception.Asynchronous.Strict",
          "name": "fromSynchronousMonoid",
          "package": "explicit-exception",
          "signature": "Exceptional e a -\u003e Exceptional e a",
          "source": "src/Control-Monad-Exception-Asynchronous-Strict.html#fromSynchronousMonoid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception Asynchronous Strict",
          "module": "Control.Monad.Exception.Asynchronous.Strict",
          "name": "fromSynchronousMonoid",
          "normalized": "Exceptional a b-\u003eExceptional a b",
          "package": "explicit-exception",
          "partial": "Synchronous Monoid",
          "signature": "Exceptional e a-\u003eExceptional e a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#v:fromSynchronousMonoid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception.Asynchronous.Strict",
          "name": "fromSynchronousMonoidT",
          "package": "explicit-exception",
          "signature": "ExceptionalT e m a -\u003e ExceptionalT e m a",
          "source": "src/Control-Monad-Exception-Asynchronous-Strict.html#fromSynchronousMonoidT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception Asynchronous Strict",
          "module": "Control.Monad.Exception.Asynchronous.Strict",
          "name": "fromSynchronousMonoidT",
          "normalized": "ExceptionalT a b c-\u003eExceptionalT a b c",
          "package": "explicit-exception",
          "partial": "Synchronous Monoid",
          "signature": "ExceptionalT e m a-\u003eExceptionalT e m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#v:fromSynchronousMonoidT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception.Asynchronous.Strict",
          "name": "fromSynchronousNull",
          "package": "explicit-exception",
          "signature": "Exceptional e () -\u003e Exceptional e ()",
          "source": "src/Control-Monad-Exception-Asynchronous-Strict.html#fromSynchronousNull",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception Asynchronous Strict",
          "module": "Control.Monad.Exception.Asynchronous.Strict",
          "name": "fromSynchronousNull",
          "normalized": "Exceptional a()-\u003eExceptional a()",
          "package": "explicit-exception",
          "partial": "Synchronous Null",
          "signature": "Exceptional e()-\u003eExceptional e()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#v:fromSynchronousNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception.Asynchronous.Strict",
          "name": "fromSynchronousT",
          "package": "explicit-exception",
          "signature": "a -\u003e ExceptionalT e m a -\u003e ExceptionalT e m a",
          "source": "src/Control-Monad-Exception-Asynchronous-Strict.html#fromSynchronousT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception Asynchronous Strict",
          "module": "Control.Monad.Exception.Asynchronous.Strict",
          "name": "fromSynchronousT",
          "normalized": "a-\u003eExceptionalT b c a-\u003eExceptionalT b c a",
          "package": "explicit-exception",
          "partial": "Synchronous",
          "signature": "a-\u003eExceptionalT e m a-\u003eExceptionalT e m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#v:fromSynchronousT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception.Asynchronous.Strict",
          "name": "mapException",
          "package": "explicit-exception",
          "signature": "(e0 -\u003e e1) -\u003e Exceptional e0 a -\u003e Exceptional e1 a",
          "source": "src/Control-Monad-Exception-Asynchronous-Strict.html#mapException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception Asynchronous Strict",
          "module": "Control.Monad.Exception.Asynchronous.Strict",
          "name": "mapException",
          "normalized": "(a-\u003ea)-\u003eExceptional a b-\u003eExceptional a b",
          "package": "explicit-exception",
          "partial": "Exception",
          "signature": "(e-\u003ee)-\u003eExceptional e a-\u003eExceptional e a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#v:mapException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception.Asynchronous.Strict",
          "name": "mapExceptionT",
          "package": "explicit-exception",
          "signature": "(e0 -\u003e e1) -\u003e ExceptionalT e0 m a -\u003e ExceptionalT e1 m a",
          "source": "src/Control-Monad-Exception-Asynchronous-Strict.html#mapExceptionT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception Asynchronous Strict",
          "module": "Control.Monad.Exception.Asynchronous.Strict",
          "name": "mapExceptionT",
          "normalized": "(a-\u003ea)-\u003eExceptionalT a b c-\u003eExceptionalT a b c",
          "package": "explicit-exception",
          "partial": "Exception",
          "signature": "(e-\u003ee)-\u003eExceptionalT e m a-\u003eExceptionalT e m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#v:mapExceptionT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception.Asynchronous.Strict",
          "name": "mapExceptional",
          "package": "explicit-exception",
          "signature": "(e0 -\u003e e1) -\u003e (a -\u003e b) -\u003e Exceptional e0 a -\u003e Exceptional e1 b",
          "source": "src/Control-Monad-Exception-Asynchronous-Strict.html#mapExceptional",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception Asynchronous Strict",
          "module": "Control.Monad.Exception.Asynchronous.Strict",
          "name": "mapExceptional",
          "normalized": "(a-\u003ea)-\u003e(b-\u003ec)-\u003eExceptional a b-\u003eExceptional a c",
          "package": "explicit-exception",
          "partial": "Exceptional",
          "signature": "(e-\u003ee)-\u003e(a-\u003eb)-\u003eExceptional e a-\u003eExceptional e b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#v:mapExceptional"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception.Asynchronous.Strict",
          "name": "mapExceptionalT",
          "package": "explicit-exception",
          "signature": "(m (Exceptional e0 a) -\u003e n (Exceptional e1 b)) -\u003e ExceptionalT e0 m a -\u003e ExceptionalT e1 n b",
          "source": "src/Control-Monad-Exception-Asynchronous-Strict.html#mapExceptionalT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception Asynchronous Strict",
          "module": "Control.Monad.Exception.Asynchronous.Strict",
          "name": "mapExceptionalT",
          "normalized": "(a(Exceptional b c)-\u003ed(Exceptional b e))-\u003eExceptionalT b a c-\u003eExceptionalT b d e",
          "package": "explicit-exception",
          "partial": "Exceptional",
          "signature": "(m(Exceptional e a)-\u003en(Exceptional e b))-\u003eExceptionalT e m a-\u003eExceptionalT e n b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#v:mapExceptionalT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception.Asynchronous.Strict",
          "name": "mapM",
          "package": "explicit-exception",
          "signature": "(a -\u003e m b) -\u003e Exceptional e a -\u003e m (Exceptional e b)",
          "source": "src/Control-Monad-Exception-Asynchronous-Strict.html#mapM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception Asynchronous Strict",
          "module": "Control.Monad.Exception.Asynchronous.Strict",
          "name": "mapM",
          "normalized": "(a-\u003eb c)-\u003eExceptional d a-\u003eb(Exceptional d c)",
          "package": "explicit-exception",
          "signature": "(a-\u003em b)-\u003eExceptional e a-\u003em(Exceptional e b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#v:mapM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception.Asynchronous.Strict",
          "name": "maybeAbort",
          "package": "explicit-exception",
          "signature": "Exceptional e a -\u003e Maybe e -\u003e Exceptional e a",
          "source": "src/Control-Monad-Exception-Asynchronous-Strict.html#maybeAbort",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception Asynchronous Strict",
          "module": "Control.Monad.Exception.Asynchronous.Strict",
          "name": "maybeAbort",
          "normalized": "Exceptional a b-\u003eMaybe a-\u003eExceptional a b",
          "package": "explicit-exception",
          "partial": "Abort",
          "signature": "Exceptional e a-\u003eMaybe e-\u003eExceptional e a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#v:maybeAbort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an exceptional value without exception.\n\u003c/p\u003e",
          "module": "Control.Monad.Exception.Asynchronous.Strict",
          "name": "pure",
          "package": "explicit-exception",
          "signature": "a -\u003e Exceptional e a",
          "source": "src/Control-Monad-Exception-Asynchronous-Strict.html#pure",
          "type": "function"
        },
        "index": {
          "description": "Create an exceptional value without exception",
          "hierarchy": "Control Monad Exception Asynchronous Strict",
          "module": "Control.Monad.Exception.Asynchronous.Strict",
          "name": "pure",
          "normalized": "a-\u003eExceptional b a",
          "package": "explicit-exception",
          "signature": "a-\u003eExceptional e a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#v:pure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception.Asynchronous.Strict",
          "name": "result",
          "package": "explicit-exception",
          "signature": "a",
          "source": "src/Control-Monad-Exception-Asynchronous-Strict.html#Exceptional",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception Asynchronous Strict",
          "module": "Control.Monad.Exception.Asynchronous.Strict",
          "name": "result",
          "package": "explicit-exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#v:result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception.Asynchronous.Strict",
          "name": "runExceptionalT",
          "package": "explicit-exception",
          "signature": "m (Exceptional e a)",
          "source": "src/Control-Monad-Exception-Asynchronous-Strict.html#ExceptionalT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception Asynchronous Strict",
          "module": "Control.Monad.Exception.Asynchronous.Strict",
          "name": "runExceptionalT",
          "package": "explicit-exception",
          "partial": "Exceptional",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#v:runExceptionalT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception.Asynchronous.Strict",
          "name": "sequence",
          "package": "explicit-exception",
          "signature": "Exceptional e (m a) -\u003e m (Exceptional e a)",
          "source": "src/Control-Monad-Exception-Asynchronous-Strict.html#sequence",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception Asynchronous Strict",
          "module": "Control.Monad.Exception.Asynchronous.Strict",
          "name": "sequence",
          "normalized": "Exceptional a(b c)-\u003eb(Exceptional a c)",
          "package": "explicit-exception",
          "signature": "Exceptional e(m a)-\u003em(Exceptional e a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#v:sequence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception.Asynchronous.Strict",
          "name": "sequenceA",
          "package": "explicit-exception",
          "signature": "Exceptional e (f a) -\u003e f (Exceptional e a)",
          "source": "src/Control-Monad-Exception-Asynchronous-Strict.html#sequenceA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception Asynchronous Strict",
          "module": "Control.Monad.Exception.Asynchronous.Strict",
          "name": "sequenceA",
          "normalized": "Exceptional a(b c)-\u003eb(Exceptional a c)",
          "package": "explicit-exception",
          "signature": "Exceptional e(f a)-\u003ef(Exceptional e a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#v:sequenceA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs there a better name?\n\u003c/p\u003e",
          "module": "Control.Monad.Exception.Asynchronous.Strict",
          "name": "sequenceF",
          "package": "explicit-exception",
          "signature": "Exceptional e (f a) -\u003e f (Exceptional e a)",
          "source": "src/Control-Monad-Exception-Asynchronous-Strict.html#sequenceF",
          "type": "function"
        },
        "index": {
          "description": "Is there better name",
          "hierarchy": "Control Monad Exception Asynchronous Strict",
          "module": "Control.Monad.Exception.Asynchronous.Strict",
          "name": "sequenceF",
          "normalized": "Exceptional a(b c)-\u003eb(Exceptional a c)",
          "package": "explicit-exception",
          "signature": "Exceptional e(f a)-\u003ef(Exceptional e a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#v:sequenceF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Check whether this function is really what you need. It generates an unreasonable exception when the second exception is caused by the first one.\u003c/p\u003e\u003c/div\u003e\u003cp\u003eI consider both actions to process the data simultaneously through lazy evaluation.\nIf the second one fails too, it must have encountered an exception\nin the data that was successfully emitted by the first action,\nand thus the exception of the second action is probably earlier.\n\u003c/p\u003e\u003cp\u003eWe cannot check in general whether the two exception occur at the same time,\ne.g. the second one might occur since the first occured and left an invalid structure.\nIn this case we should emit the first exception, not the second one.\nBecause of this I expect that this function is not particularly useful.\nOtherwise it could be used as bind operation for a monad instance.\n\u003c/p\u003e",
          "module": "Control.Monad.Exception.Asynchronous.Strict",
          "name": "simultaneousBind",
          "package": "explicit-exception",
          "signature": "Exceptional e a -\u003e (a -\u003e Exceptional e b) -\u003e Exceptional e b",
          "source": "src/Control-Monad-Exception-Asynchronous-Strict.html#simultaneousBind",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Check whether this function is really what you need It generates an unreasonable exception when the second exception is caused by the first one consider both actions to process the data simultaneously through lazy evaluation If the second one fails too it must have encountered an exception in the data that was successfully emitted by the first action and thus the exception of the second action is probably earlier We cannot check in general whether the two exception occur at the same time e.g the second one might occur since the first occured and left an invalid structure In this case we should emit the first exception not the second one Because of this expect that this function is not particularly useful Otherwise it could be used as bind operation for monad instance",
          "hierarchy": "Control Monad Exception Asynchronous Strict",
          "module": "Control.Monad.Exception.Asynchronous.Strict",
          "name": "simultaneousBind",
          "normalized": "Exceptional a b-\u003e(b-\u003eExceptional a c)-\u003eExceptional a c",
          "package": "explicit-exception",
          "partial": "Bind",
          "signature": "Exceptional e a-\u003e(a-\u003eExceptional e b)-\u003eExceptional e b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#v:simultaneousBind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Check whether this function is really what you need. It generates an unreasonable exception when the second exception is caused by the first one.\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Exception.Asynchronous.Strict",
          "name": "simultaneousBindM",
          "package": "explicit-exception",
          "signature": "m (Exceptional e a) -\u003e (a -\u003e m (Exceptional e b)) -\u003e m (Exceptional e b)",
          "source": "src/Control-Monad-Exception-Asynchronous-Strict.html#simultaneousBindM",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Check whether this function is really what you need It generates an unreasonable exception when the second exception is caused by the first one",
          "hierarchy": "Control Monad Exception Asynchronous Strict",
          "module": "Control.Monad.Exception.Asynchronous.Strict",
          "name": "simultaneousBindM",
          "normalized": "a(Exceptional b c)-\u003e(c-\u003ea(Exceptional b d))-\u003ea(Exceptional b d)",
          "package": "explicit-exception",
          "partial": "Bind",
          "signature": "m(Exceptional e a)-\u003e(a-\u003em(Exceptional e b))-\u003em(Exceptional e b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#v:simultaneousBindM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception.Asynchronous.Strict",
          "name": "swapToAsynchronousSynchronous",
          "package": "explicit-exception",
          "signature": "Exceptional e1 (Exceptional e0 a) -\u003e Exceptional e0 (Exceptional e1 a)",
          "source": "src/Control-Monad-Exception-Asynchronous-Strict.html#swapToAsynchronousSynchronous",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception Asynchronous Strict",
          "module": "Control.Monad.Exception.Asynchronous.Strict",
          "name": "swapToAsynchronousSynchronous",
          "normalized": "Exceptional a(Exceptional a b)-\u003eExceptional a(Exceptional a b)",
          "package": "explicit-exception",
          "partial": "To Asynchronous Synchronous",
          "signature": "Exceptional e(Exceptional e a)-\u003eExceptional e(Exceptional e a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#v:swapToAsynchronousSynchronous"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConsider a file format consisting of a header and a data body.\nThe header can only be used if is read completely.\nIts parsing might stop with an synchronous exception.\nThe data body can also be used if it is truncated by an exceptional event.\nThis is expressed by an asynchronous exception.\nA loader for this file format can thus fail\nby a synchronous and an asynchronous exception.\nSurprisingly, both orders of nesting these two kinds of exceptional actions\nare equally expressive.\nThis function converts to the form where the synchronous exception is the outer one.\n\u003c/p\u003e\u003cp\u003eThis is a specialisation of \u003ccode\u003e\u003ca\u003esequence\u003c/a\u003e\u003c/code\u003e and friends.\n\u003c/p\u003e",
          "module": "Control.Monad.Exception.Asynchronous.Strict",
          "name": "swapToSynchronousAsynchronous",
          "package": "explicit-exception",
          "signature": "Exceptional e0 (Exceptional e1 a) -\u003e Exceptional e1 (Exceptional e0 a)",
          "source": "src/Control-Monad-Exception-Asynchronous-Strict.html#swapToSynchronousAsynchronous",
          "type": "function"
        },
        "index": {
          "description": "Consider file format consisting of header and data body The header can only be used if is read completely Its parsing might stop with an synchronous exception The data body can also be used if it is truncated by an exceptional event This is expressed by an asynchronous exception loader for this file format can thus fail by synchronous and an asynchronous exception Surprisingly both orders of nesting these two kinds of exceptional actions are equally expressive This function converts to the form where the synchronous exception is the outer one This is specialisation of sequence and friends",
          "hierarchy": "Control Monad Exception Asynchronous Strict",
          "module": "Control.Monad.Exception.Asynchronous.Strict",
          "name": "swapToSynchronousAsynchronous",
          "normalized": "Exceptional a(Exceptional a b)-\u003eExceptional a(Exceptional a b)",
          "package": "explicit-exception",
          "partial": "To Synchronous Asynchronous",
          "signature": "Exceptional e(Exceptional e a)-\u003eExceptional e(Exceptional e a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#v:swapToSynchronousAsynchronous"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eI think in most cases we want throwMonoid,\nthus we can replace \u003ccode\u003e\u003ca\u003ethrow\u003c/a\u003e\u003c/code\u003e by \u003ccode\u003e\u003ca\u003ethrowMonoid\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Exception.Asynchronous.Strict",
          "name": "throw",
          "package": "explicit-exception",
          "signature": "e -\u003e Exceptional e ()",
          "source": "src/Control-Monad-Exception-Asynchronous-Strict.html#throw",
          "type": "function"
        },
        "index": {
          "description": "think in most cases we want throwMonoid thus we can replace throw by throwMonoid",
          "hierarchy": "Control Monad Exception Asynchronous Strict",
          "module": "Control.Monad.Exception.Asynchronous.Strict",
          "name": "throw",
          "normalized": "a-\u003eExceptional a()",
          "package": "explicit-exception",
          "signature": "e-\u003eExceptional e()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#v:throw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception.Asynchronous.Strict",
          "name": "throwMonoid",
          "package": "explicit-exception",
          "signature": "e -\u003e Exceptional e a",
          "source": "src/Control-Monad-Exception-Asynchronous-Strict.html#throwMonoid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception Asynchronous Strict",
          "module": "Control.Monad.Exception.Asynchronous.Strict",
          "name": "throwMonoid",
          "normalized": "a-\u003eExceptional a b",
          "package": "explicit-exception",
          "partial": "Monoid",
          "signature": "e-\u003eExceptional e a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#v:throwMonoid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception.Asynchronous.Strict",
          "name": "throwMonoidT",
          "package": "explicit-exception",
          "signature": "e -\u003e ExceptionalT e m a",
          "source": "src/Control-Monad-Exception-Asynchronous-Strict.html#throwMonoidT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception Asynchronous Strict",
          "module": "Control.Monad.Exception.Asynchronous.Strict",
          "name": "throwMonoidT",
          "normalized": "a-\u003eExceptionalT a b c",
          "package": "explicit-exception",
          "partial": "Monoid",
          "signature": "e-\u003eExceptionalT e m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#v:throwMonoidT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception.Asynchronous.Strict",
          "name": "toSynchronous",
          "package": "explicit-exception",
          "signature": "Exceptional e a -\u003e Exceptional e a",
          "source": "src/Control-Monad-Exception-Asynchronous-Strict.html#toSynchronous",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception Asynchronous Strict",
          "module": "Control.Monad.Exception.Asynchronous.Strict",
          "name": "toSynchronous",
          "normalized": "Exceptional a b-\u003eExceptional a b",
          "package": "explicit-exception",
          "partial": "Synchronous",
          "signature": "Exceptional e a-\u003eExceptional e a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#v:toSynchronous"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eFoldable\u003c/code\u003e instance would allow to strip off the exception too easily.\n\u003c/p\u003e\u003cp\u003eI like the methods of \u003ccode\u003eTraversable\u003c/code\u003e, but \u003ccode\u003eTraversable\u003c/code\u003e instance requires \u003ccode\u003eFoldable\u003c/code\u003e instance.\n\u003c/p\u003e",
          "module": "Control.Monad.Exception.Asynchronous.Strict",
          "name": "traverse",
          "package": "explicit-exception",
          "signature": "(a -\u003e f b) -\u003e Exceptional e a -\u003e f (Exceptional e b)",
          "source": "src/Control-Monad-Exception-Asynchronous-Strict.html#traverse",
          "type": "function"
        },
        "index": {
          "description": "Foldable instance would allow to strip off the exception too easily like the methods of Traversable but Traversable instance requires Foldable instance",
          "hierarchy": "Control Monad Exception Asynchronous Strict",
          "module": "Control.Monad.Exception.Asynchronous.Strict",
          "name": "traverse",
          "normalized": "(a-\u003eb c)-\u003eExceptional d a-\u003eb(Exceptional d c)",
          "package": "explicit-exception",
          "signature": "(a-\u003ef b)-\u003eExceptional e a-\u003ef(Exceptional e b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#v:traverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is an example for application specific handling of result values.\nAssume you obtain two lazy lists say from \u003ccode\u003e\u003ca\u003ereadFile\u003c/a\u003e\u003c/code\u003e\nand you want to zip their contents.\nIf one of the stream readers emits an exception,\nwe quit with that exception.\nIf both streams have throw an exception at the same file position,\nthe exception of the first stream is propagated.\n\u003c/p\u003e",
          "module": "Control.Monad.Exception.Asynchronous.Strict",
          "name": "zipWith",
          "package": "explicit-exception",
          "signature": "(a -\u003e b -\u003e c) -\u003e Exceptional e [a] -\u003e Exceptional e [b] -\u003e Exceptional e [c]",
          "source": "src/Control-Monad-Exception-Asynchronous-Strict.html#zipWith",
          "type": "function"
        },
        "index": {
          "description": "This is an example for application specific handling of result values Assume you obtain two lazy lists say from readFile and you want to zip their contents If one of the stream readers emits an exception we quit with that exception If both streams have throw an exception at the same file position the exception of the first stream is propagated",
          "hierarchy": "Control Monad Exception Asynchronous Strict",
          "module": "Control.Monad.Exception.Asynchronous.Strict",
          "name": "zipWith",
          "normalized": "(a-\u003eb-\u003ec)-\u003eExceptional d[a]-\u003eExceptional d[b]-\u003eExceptional d[c]",
          "package": "explicit-exception",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec)-\u003eExceptional e[a]-\u003eExceptional e[b]-\u003eExceptional e[c]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#v:zipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAsynchronous exceptions can occur during the construction of a lazy data structure.\nThey are represented by a lazy data structure itself.\n\u003c/p\u003e\u003cp\u003eThis module re-exports the type with lazy combinators.\n\u003c/p\u003e\u003cp\u003eTODO:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Is the Null type appropriate anywhere?\n  Should it be better a Monoid type with mempty?\n  Shall Monoid.mempty be the default, or functions with explicit default values?\n\u003c/li\u003e\u003cli\u003e Shall we replace Monad constraint by Functor constraint,\n  where we only need liftM?\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Control.Monad.Exception.Asynchronous",
          "name": "Asynchronous",
          "package": "explicit-exception",
          "source": "src/Control-Monad-Exception-Asynchronous.html",
          "type": "module"
        },
        "index": {
          "description": "Asynchronous exceptions can occur during the construction of lazy data structure They are represented by lazy data structure itself This module re-exports the type with lazy combinators TODO Is the Null type appropriate anywhere Should it be better Monoid type with mempty Shall Monoid.mempty be the default or functions with explicit default values Shall we replace Monad constraint by Functor constraint where we only need liftM",
          "hierarchy": "Control Monad Exception Asynchronous",
          "module": "Control.Monad.Exception.Asynchronous",
          "name": "Asynchronous",
          "package": "explicit-exception",
          "partial": "Asynchronous",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSynchronous exceptions immediately abort a series of computations.\nWe provide monads for describing this behaviour.\nIn contrast to ErrorT from \u003ccode\u003emtl\u003c/code\u003e or \u003ccode\u003etransformers\u003c/code\u003e package\nwe do not pose restrictions on the exception type.\n\u003c/p\u003e\u003cp\u003eHow to tell, that a function can possibly throw more than one (kind of) exception?\n\u003c/p\u003e\u003cp\u003eIf you would use the exception type \u003ccode\u003e(Either ParserException IOError)\u003c/code\u003e\nthen this is different from \u003ccode\u003e(Either IOError ParserException)\u003c/code\u003e.\nThus we recommned using type classes for exceptions.\nThen you can use one type containing all exceptions in an application,\nbut the type signature still tells which exceptions are actually possible.\nExamples:\n\u003c/p\u003e\u003cpre\u003e parser :: ParserException e =\u003e ExceptionalT e ParserMonad a\n\n getLine :: IOException e =\u003e ExceptionalT e IO String\n\n fileParser :: (ParserException e, IOException e) =\u003e ExceptionalT e IO String\n\u003c/pre\u003e\u003cp\u003eUnfortunately, this way you cannot remove single exceptions\nfrom the constraints by catching them.\nYou can only remove all of them using \u003ccode\u003e\u003ca\u003eresolve\u003c/a\u003e\u003c/code\u003e or none.\nFor a more advanced approach,\nthat allows removing exceptions constraints\nby some non-Haskell-98 type hackery,\nsee the exception package by Joseph Iborra.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Exception.Synchronous",
          "name": "Synchronous",
          "package": "explicit-exception",
          "source": "src/Control-Monad-Exception-Synchronous.html",
          "type": "module"
        },
        "index": {
          "description": "Synchronous exceptions immediately abort series of computations We provide monads for describing this behaviour In contrast to ErrorT from mtl or transformers package we do not pose restrictions on the exception type How to tell that function can possibly throw more than one kind of exception If you would use the exception type Either ParserException IOError then this is different from Either IOError ParserException Thus we recommned using type classes for exceptions Then you can use one type containing all exceptions in an application but the type signature still tells which exceptions are actually possible Examples parser ParserException ExceptionalT ParserMonad getLine IOException ExceptionalT IO String fileParser ParserException IOException ExceptionalT IO String Unfortunately this way you cannot remove single exceptions from the constraints by catching them You can only remove all of them using resolve or none For more advanced approach that allows removing exceptions constraints by some non-Haskell-98 type hackery see the exception package by Joseph Iborra",
          "hierarchy": "Control Monad Exception Synchronous",
          "module": "Control.Monad.Exception.Synchronous",
          "name": "Synchronous",
          "package": "explicit-exception",
          "partial": "Synchronous",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e, but explicitly intended for handling of exceptional results.\nIn contrast to \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e we do not support \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e.\nCalling \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e in the \u003ccode\u003e\u003ca\u003eExceptional\u003c/a\u003e\u003c/code\u003e monad is an error.\nThis way, we do not require that an exception can be derived from a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e,\nyet, we require no constraint on the exception type at all.\n\u003c/p\u003e",
          "module": "Control.Monad.Exception.Synchronous",
          "name": "Exceptional",
          "package": "explicit-exception",
          "source": "src/Control-Monad-Exception-Synchronous.html#Exceptional",
          "type": "data"
        },
        "index": {
          "description": "Like Either but explicitly intended for handling of exceptional results In contrast to Either we do not support fail Calling fail in the Exceptional monad is an error This way we do not require that an exception can be derived from String yet we require no constraint on the exception type at all",
          "hierarchy": "Control Monad Exception Synchronous",
          "module": "Control.Monad.Exception.Synchronous",
          "name": "Exceptional",
          "package": "explicit-exception",
          "partial": "Exceptional",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#t:Exceptional"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elike ErrorT, but ExceptionalT is the better name in order to distinguish from real (programming) errors\n\u003c/p\u003e",
          "module": "Control.Monad.Exception.Synchronous",
          "name": "ExceptionalT",
          "package": "explicit-exception",
          "source": "src/Control-Monad-Exception-Synchronous.html#ExceptionalT",
          "type": "newtype"
        },
        "index": {
          "description": "like ErrorT but ExceptionalT is the better name in order to distinguish from real programming errors",
          "hierarchy": "Control Monad Exception Synchronous",
          "module": "Control.Monad.Exception.Synchronous",
          "name": "ExceptionalT",
          "package": "explicit-exception",
          "partial": "Exceptional",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#t:ExceptionalT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception.Synchronous",
          "name": "Exception",
          "package": "explicit-exception",
          "signature": "Exception e",
          "source": "src/Control-Monad-Exception-Synchronous.html#Exceptional",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception Synchronous",
          "module": "Control.Monad.Exception.Synchronous",
          "name": "Exception",
          "package": "explicit-exception",
          "partial": "Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#v:Exception"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception.Synchronous",
          "name": "ExceptionalT",
          "package": "explicit-exception",
          "signature": "ExceptionalT",
          "source": "src/Control-Monad-Exception-Synchronous.html#ExceptionalT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception Synchronous",
          "module": "Control.Monad.Exception.Synchronous",
          "name": "ExceptionalT",
          "package": "explicit-exception",
          "partial": "Exceptional",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#v:ExceptionalT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception.Synchronous",
          "name": "Success",
          "package": "explicit-exception",
          "signature": "Success a",
          "source": "src/Control-Monad-Exception-Synchronous.html#Exceptional",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception Synchronous",
          "module": "Control.Monad.Exception.Synchronous",
          "name": "Success",
          "package": "explicit-exception",
          "partial": "Success",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#v:Success"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception.Synchronous",
          "name": "assert",
          "package": "explicit-exception",
          "signature": "e -\u003e Bool -\u003e Exceptional e ()",
          "source": "src/Control-Monad-Exception-Synchronous.html#assert",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception Synchronous",
          "module": "Control.Monad.Exception.Synchronous",
          "name": "assert",
          "normalized": "a-\u003eBool-\u003eExceptional a()",
          "package": "explicit-exception",
          "signature": "e-\u003eBool-\u003eExceptional e()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#v:assert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception.Synchronous",
          "name": "assertT",
          "package": "explicit-exception",
          "signature": "e -\u003e Bool -\u003e ExceptionalT e m ()",
          "source": "src/Control-Monad-Exception-Synchronous.html#assertT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception Synchronous",
          "module": "Control.Monad.Exception.Synchronous",
          "name": "assertT",
          "normalized": "a-\u003eBool-\u003eExceptionalT a b()",
          "package": "explicit-exception",
          "signature": "e-\u003eBool-\u003eExceptionalT e m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#v:assertT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf the enclosed monad has custom exception facilities,\nthey could skip the cleanup code.\nMake sure, that this cannot happen by choosing an appropriate monad.\n\u003c/p\u003e",
          "module": "Control.Monad.Exception.Synchronous",
          "name": "bracketT",
          "package": "explicit-exception",
          "signature": "ExceptionalT e m h -\u003e (h -\u003e ExceptionalT e m ()) -\u003e (h -\u003e ExceptionalT e m a) -\u003e ExceptionalT e m a",
          "source": "src/Control-Monad-Exception-Synchronous.html#bracketT",
          "type": "function"
        },
        "index": {
          "description": "If the enclosed monad has custom exception facilities they could skip the cleanup code Make sure that this cannot happen by choosing an appropriate monad",
          "hierarchy": "Control Monad Exception Synchronous",
          "module": "Control.Monad.Exception.Synchronous",
          "name": "bracketT",
          "normalized": "ExceptionalT a b c-\u003e(c-\u003eExceptionalT a b())-\u003e(c-\u003eExceptionalT a b d)-\u003eExceptionalT a b d",
          "package": "explicit-exception",
          "signature": "ExceptionalT e m h-\u003e(h-\u003eExceptionalT e m())-\u003e(h-\u003eExceptionalT e m a)-\u003eExceptionalT e m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#v:bracketT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception.Synchronous",
          "name": "catch",
          "package": "explicit-exception",
          "signature": "Exceptional e0 a -\u003e (e0 -\u003e Exceptional e1 a) -\u003e Exceptional e1 a",
          "source": "src/Control-Monad-Exception-Synchronous.html#catch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception Synchronous",
          "module": "Control.Monad.Exception.Synchronous",
          "name": "catch",
          "normalized": "Exceptional a b-\u003e(a-\u003eExceptional a b)-\u003eExceptional a b",
          "package": "explicit-exception",
          "signature": "Exceptional e a-\u003e(e-\u003eExceptional e a)-\u003eExceptional e a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#v:catch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception.Synchronous",
          "name": "catchT",
          "package": "explicit-exception",
          "signature": "ExceptionalT e0 m a -\u003e (e0 -\u003e ExceptionalT e1 m a) -\u003e ExceptionalT e1 m a",
          "source": "src/Control-Monad-Exception-Synchronous.html#catchT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception Synchronous",
          "module": "Control.Monad.Exception.Synchronous",
          "name": "catchT",
          "normalized": "ExceptionalT a b c-\u003e(a-\u003eExceptionalT a b c)-\u003eExceptionalT a b c",
          "package": "explicit-exception",
          "signature": "ExceptionalT e m a-\u003e(e-\u003eExceptionalT e m a)-\u003eExceptionalT e m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#v:catchT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf you are sure that the value is always a \u003ccode\u003e\u003ca\u003eSuccess\u003c/a\u003e\u003c/code\u003e\nyou can tell that the run-time system\nthus making your program lazy.\nHowever, try to avoid this function by using \u003ccode\u003e\u003ca\u003ecatch\u003c/a\u003e\u003c/code\u003e and friends,\nsince this function is partial.\n\u003c/p\u003e",
          "module": "Control.Monad.Exception.Synchronous",
          "name": "force",
          "package": "explicit-exception",
          "signature": "Exceptional e a -\u003e Exceptional e a",
          "source": "src/Control-Monad-Exception-Synchronous.html#force",
          "type": "function"
        },
        "index": {
          "description": "If you are sure that the value is always Success you can tell that the run-time system thus making your program lazy However try to avoid this function by using catch and friends since this function is partial",
          "hierarchy": "Control Monad Exception Synchronous",
          "module": "Control.Monad.Exception.Synchronous",
          "name": "force",
          "normalized": "Exceptional a b-\u003eExceptional a b",
          "package": "explicit-exception",
          "signature": "Exceptional e a-\u003eExceptional e a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#v:force"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003eforce\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.Exception.Synchronous",
          "name": "forceT",
          "package": "explicit-exception",
          "signature": "ExceptionalT e m a -\u003e ExceptionalT e m a",
          "source": "src/Control-Monad-Exception-Synchronous.html#forceT",
          "type": "function"
        },
        "index": {
          "description": "see force",
          "hierarchy": "Control Monad Exception Synchronous",
          "module": "Control.Monad.Exception.Synchronous",
          "name": "forceT",
          "normalized": "ExceptionalT a b c-\u003eExceptionalT a b c",
          "package": "explicit-exception",
          "signature": "ExceptionalT e m a-\u003eExceptionalT e m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#v:forceT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception.Synchronous",
          "name": "fromEither",
          "package": "explicit-exception",
          "signature": "Either e a -\u003e Exceptional e a",
          "source": "src/Control-Monad-Exception-Synchronous.html#fromEither",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception Synchronous",
          "module": "Control.Monad.Exception.Synchronous",
          "name": "fromEither",
          "normalized": "Either a b-\u003eExceptional a b",
          "package": "explicit-exception",
          "partial": "Either",
          "signature": "Either e a-\u003eExceptional e a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#v:fromEither"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception.Synchronous",
          "name": "fromEitherT",
          "package": "explicit-exception",
          "signature": "m (Either e a) -\u003e ExceptionalT e m a",
          "source": "src/Control-Monad-Exception-Synchronous.html#fromEitherT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception Synchronous",
          "module": "Control.Monad.Exception.Synchronous",
          "name": "fromEitherT",
          "normalized": "a(Either b c)-\u003eExceptionalT b a c",
          "package": "explicit-exception",
          "partial": "Either",
          "signature": "m(Either e a)-\u003eExceptionalT e m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#v:fromEitherT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception.Synchronous",
          "name": "fromErrorT",
          "package": "explicit-exception",
          "signature": "ErrorT e m a -\u003e ExceptionalT e m a",
          "source": "src/Control-Monad-Exception-Synchronous.html#fromErrorT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception Synchronous",
          "module": "Control.Monad.Exception.Synchronous",
          "name": "fromErrorT",
          "normalized": "ErrorT a b c-\u003eExceptionalT a b c",
          "package": "explicit-exception",
          "partial": "Error",
          "signature": "ErrorT e m a-\u003eExceptionalT e m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#v:fromErrorT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception.Synchronous",
          "name": "fromExitCode",
          "package": "explicit-exception",
          "signature": "ExitCode -\u003e Exceptional Int ()",
          "source": "src/Control-Monad-Exception-Synchronous.html#fromExitCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception Synchronous",
          "module": "Control.Monad.Exception.Synchronous",
          "name": "fromExitCode",
          "normalized": "ExitCode-\u003eExceptional Int()",
          "package": "explicit-exception",
          "partial": "Exit Code",
          "signature": "ExitCode-\u003eExceptional Int()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#v:fromExitCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception.Synchronous",
          "name": "fromExitCodeT",
          "package": "explicit-exception",
          "signature": "m ExitCode -\u003e ExceptionalT Int m ()",
          "source": "src/Control-Monad-Exception-Synchronous.html#fromExitCodeT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception Synchronous",
          "module": "Control.Monad.Exception.Synchronous",
          "name": "fromExitCodeT",
          "normalized": "a ExitCode-\u003eExceptionalT Int a()",
          "package": "explicit-exception",
          "partial": "Exit Code",
          "signature": "m ExitCode-\u003eExceptionalT Int m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#v:fromExitCodeT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception.Synchronous",
          "name": "fromMaybe",
          "package": "explicit-exception",
          "signature": "e -\u003e Maybe a -\u003e Exceptional e a",
          "source": "src/Control-Monad-Exception-Synchronous.html#fromMaybe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception Synchronous",
          "module": "Control.Monad.Exception.Synchronous",
          "name": "fromMaybe",
          "normalized": "a-\u003eMaybe b-\u003eExceptional a b",
          "package": "explicit-exception",
          "partial": "Maybe",
          "signature": "e-\u003eMaybe a-\u003eExceptional e a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#v:fromMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception.Synchronous",
          "name": "fromMaybeT",
          "package": "explicit-exception",
          "signature": "e -\u003e MaybeT m a -\u003e ExceptionalT e m a",
          "source": "src/Control-Monad-Exception-Synchronous.html#fromMaybeT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception Synchronous",
          "module": "Control.Monad.Exception.Synchronous",
          "name": "fromMaybeT",
          "normalized": "a-\u003eMaybeT b c-\u003eExceptionalT a b c",
          "package": "explicit-exception",
          "partial": "Maybe",
          "signature": "e-\u003eMaybeT m a-\u003eExceptionalT e m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#v:fromMaybeT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003euseful in connection with \u003ccode\u003e\u003ca\u003econtinue\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.Exception.Synchronous",
          "name": "getExceptionNull",
          "package": "explicit-exception",
          "signature": "Exceptional e () -\u003e Maybe e",
          "source": "src/Control-Monad-Exception-Synchronous.html#getExceptionNull",
          "type": "function"
        },
        "index": {
          "description": "useful in connection with continue",
          "hierarchy": "Control Monad Exception Synchronous",
          "module": "Control.Monad.Exception.Synchronous",
          "name": "getExceptionNull",
          "normalized": "Exceptional a()-\u003eMaybe a",
          "package": "explicit-exception",
          "partial": "Exception Null",
          "signature": "Exceptional e()-\u003eMaybe e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#v:getExceptionNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception.Synchronous",
          "name": "manyMonoidT",
          "package": "explicit-exception",
          "signature": "(e0 -\u003e Maybe e1)-\u003e ExceptionalT e0 m a-\u003e ExceptionalT e1 m a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception Synchronous",
          "module": "Control.Monad.Exception.Synchronous",
          "name": "manyMonoidT",
          "normalized": "(a-\u003eMaybe a)-\u003eExceptionalT a b c-\u003eExceptionalT a b c",
          "package": "explicit-exception",
          "partial": "Monoid",
          "signature": "(e-\u003eMaybe e)-\u003eExceptionalT e m a-\u003eExceptionalT e m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#v:manyMonoidT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepeat an action until an exception occurs.\nInitialize the result with \u003ccode\u003eempty\u003c/code\u003e and add new elements using \u003ccode\u003econs\u003c/code\u003e\n(e.g. \u003ccode\u003e[]\u003c/code\u003e and \u003ccode\u003e(:)\u003c/code\u003e).\nThe exception handler decides whether the terminating exception\nis re-raised (\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e) or catched (\u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Control.Monad.Exception.Synchronous",
          "name": "manyT",
          "package": "explicit-exception",
          "signature": "(e0 -\u003e Maybe e1)-\u003e (a -\u003e b -\u003e b)-\u003e b-\u003e ExceptionalT e0 m a-\u003e ExceptionalT e1 m b",
          "type": "function"
        },
        "index": {
          "description": "Repeat an action until an exception occurs Initialize the result with empty and add new elements using cons e.g and The exception handler decides whether the terminating exception is re-raised Just or catched Nothing",
          "hierarchy": "Control Monad Exception Synchronous",
          "module": "Control.Monad.Exception.Synchronous",
          "name": "manyT",
          "normalized": "(a-\u003eMaybe a)-\u003e(b-\u003ec-\u003ec)-\u003ec-\u003eExceptionalT a d b-\u003eExceptionalT a d c",
          "package": "explicit-exception",
          "signature": "(e-\u003eMaybe e)-\u003e(a-\u003eb-\u003eb)-\u003eb-\u003eExceptionalT e m a-\u003eExceptionalT e m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#v:manyT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception.Synchronous",
          "name": "mapException",
          "package": "explicit-exception",
          "signature": "(e0 -\u003e e1) -\u003e Exceptional e0 a -\u003e Exceptional e1 a",
          "source": "src/Control-Monad-Exception-Synchronous.html#mapException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception Synchronous",
          "module": "Control.Monad.Exception.Synchronous",
          "name": "mapException",
          "normalized": "(a-\u003ea)-\u003eExceptional a b-\u003eExceptional a b",
          "package": "explicit-exception",
          "partial": "Exception",
          "signature": "(e-\u003ee)-\u003eExceptional e a-\u003eExceptional e a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#v:mapException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception.Synchronous",
          "name": "mapExceptionT",
          "package": "explicit-exception",
          "signature": "(e0 -\u003e e1) -\u003e ExceptionalT e0 m a -\u003e ExceptionalT e1 m a",
          "source": "src/Control-Monad-Exception-Synchronous.html#mapExceptionT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception Synchronous",
          "module": "Control.Monad.Exception.Synchronous",
          "name": "mapExceptionT",
          "normalized": "(a-\u003ea)-\u003eExceptionalT a b c-\u003eExceptionalT a b c",
          "package": "explicit-exception",
          "partial": "Exception",
          "signature": "(e-\u003ee)-\u003eExceptionalT e m a-\u003eExceptionalT e m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#v:mapExceptionT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception.Synchronous",
          "name": "mapExceptional",
          "package": "explicit-exception",
          "signature": "(e0 -\u003e e1) -\u003e (a -\u003e b) -\u003e Exceptional e0 a -\u003e Exceptional e1 b",
          "source": "src/Control-Monad-Exception-Synchronous.html#mapExceptional",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception Synchronous",
          "module": "Control.Monad.Exception.Synchronous",
          "name": "mapExceptional",
          "normalized": "(a-\u003ea)-\u003e(b-\u003ec)-\u003eExceptional a b-\u003eExceptional a c",
          "package": "explicit-exception",
          "partial": "Exceptional",
          "signature": "(e-\u003ee)-\u003e(a-\u003eb)-\u003eExceptional e a-\u003eExceptional e b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#v:mapExceptional"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception.Synchronous",
          "name": "mapExceptionalT",
          "package": "explicit-exception",
          "signature": "(m (Exceptional e0 a) -\u003e n (Exceptional e1 b)) -\u003e ExceptionalT e0 m a -\u003e ExceptionalT e1 n b",
          "source": "src/Control-Monad-Exception-Synchronous.html#mapExceptionalT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception Synchronous",
          "module": "Control.Monad.Exception.Synchronous",
          "name": "mapExceptionalT",
          "normalized": "(a(Exceptional b c)-\u003ed(Exceptional b e))-\u003eExceptionalT b a c-\u003eExceptionalT b d e",
          "package": "explicit-exception",
          "partial": "Exceptional",
          "signature": "(m(Exceptional e a)-\u003en(Exceptional e b))-\u003eExceptionalT e m a-\u003eExceptionalT e n b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#v:mapExceptionalT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003emergeT\u003c/a\u003e\u003c/code\u003e \n\u003c/p\u003e",
          "module": "Control.Monad.Exception.Synchronous",
          "name": "merge",
          "package": "explicit-exception",
          "signature": "Exceptional e (a -\u003e b) -\u003e Exceptional e a -\u003e Exceptional e b",
          "source": "src/Control-Monad-Exception-Synchronous.html#merge",
          "type": "function"
        },
        "index": {
          "description": "see mergeT",
          "hierarchy": "Control Monad Exception Synchronous",
          "module": "Control.Monad.Exception.Synchronous",
          "name": "merge",
          "normalized": "Exceptional a(b-\u003ec)-\u003eExceptional a b-\u003eExceptional a c",
          "package": "explicit-exception",
          "signature": "Exceptional e(a-\u003eb)-\u003eExceptional e a-\u003eExceptional e b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#v:merge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis combines two actions similar to Applicative's \u003ccode\u003e\u003ca\u003e*\u003c/a\u003e\u003c/code\u003e.\nThe result action fails if one of the input action fails,\nbut both actions are executed.\nE.g. consider a compiler that emits all errors\nthat can be detected independently,\nbut eventually aborts if there is at least one error.\n\u003c/p\u003e\u003cp\u003eThe exception type \u003ccode\u003ee\u003c/code\u003e might be a list type,\nor an \u003ccode\u003eEndo\u003c/code\u003e type that implements a difflist.\n\u003c/p\u003e",
          "module": "Control.Monad.Exception.Synchronous",
          "name": "mergeT",
          "package": "explicit-exception",
          "signature": "ExceptionalT e m (a -\u003e b) -\u003e ExceptionalT e m a -\u003e ExceptionalT e m b",
          "source": "src/Control-Monad-Exception-Synchronous.html#mergeT",
          "type": "function"
        },
        "index": {
          "description": "This combines two actions similar to Applicative The result action fails if one of the input action fails but both actions are executed E.g consider compiler that emits all errors that can be detected independently but eventually aborts if there is at least one error The exception type might be list type or an Endo type that implements difflist",
          "hierarchy": "Control Monad Exception Synchronous",
          "module": "Control.Monad.Exception.Synchronous",
          "name": "mergeT",
          "normalized": "ExceptionalT a b(c-\u003ed)-\u003eExceptionalT a b c-\u003eExceptionalT a b d",
          "package": "explicit-exception",
          "signature": "ExceptionalT e m(a-\u003eb)-\u003eExceptionalT e m a-\u003eExceptionalT e m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#v:mergeT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception.Synchronous",
          "name": "resolve",
          "package": "explicit-exception",
          "signature": "(e -\u003e a) -\u003e Exceptional e a -\u003e a",
          "source": "src/Control-Monad-Exception-Synchronous.html#resolve",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception Synchronous",
          "module": "Control.Monad.Exception.Synchronous",
          "name": "resolve",
          "normalized": "(a-\u003eb)-\u003eExceptional a b-\u003eb",
          "package": "explicit-exception",
          "signature": "(e-\u003ea)-\u003eExceptional e a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#v:resolve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception.Synchronous",
          "name": "resolveT",
          "package": "explicit-exception",
          "signature": "(e -\u003e m a) -\u003e ExceptionalT e m a -\u003e m a",
          "source": "src/Control-Monad-Exception-Synchronous.html#resolveT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception Synchronous",
          "module": "Control.Monad.Exception.Synchronous",
          "name": "resolveT",
          "normalized": "(a-\u003eb c)-\u003eExceptionalT a b c-\u003eb c",
          "package": "explicit-exception",
          "signature": "(e-\u003em a)-\u003eExceptionalT e m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#v:resolveT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception.Synchronous",
          "name": "runExceptionalT",
          "package": "explicit-exception",
          "signature": "m (Exceptional e a)",
          "source": "src/Control-Monad-Exception-Synchronous.html#ExceptionalT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception Synchronous",
          "module": "Control.Monad.Exception.Synchronous",
          "name": "runExceptionalT",
          "package": "explicit-exception",
          "partial": "Exceptional",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#v:runExceptionalT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCounterpart to \u003ccode\u003e\u003ca\u003eeither\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Exception.Synchronous",
          "name": "switch",
          "package": "explicit-exception",
          "signature": "(e -\u003e b) -\u003e (a -\u003e b) -\u003e Exceptional e a -\u003e b",
          "source": "src/Control-Monad-Exception-Synchronous.html#switch",
          "type": "function"
        },
        "index": {
          "description": "Counterpart to either for Either",
          "hierarchy": "Control Monad Exception Synchronous",
          "module": "Control.Monad.Exception.Synchronous",
          "name": "switch",
          "normalized": "(a-\u003eb)-\u003e(c-\u003eb)-\u003eExceptional a c-\u003eb",
          "package": "explicit-exception",
          "signature": "(e-\u003eb)-\u003e(a-\u003eb)-\u003eExceptional e a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#v:switch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception.Synchronous",
          "name": "switchT",
          "package": "explicit-exception",
          "signature": "(e -\u003e m b) -\u003e (a -\u003e m b) -\u003e ExceptionalT e m a -\u003e m b",
          "source": "src/Control-Monad-Exception-Synchronous.html#switchT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception Synchronous",
          "module": "Control.Monad.Exception.Synchronous",
          "name": "switchT",
          "normalized": "(a-\u003eb c)-\u003e(d-\u003eb c)-\u003eExceptionalT a b d-\u003eb c",
          "package": "explicit-exception",
          "signature": "(e-\u003em b)-\u003e(a-\u003em b)-\u003eExceptionalT e m a-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#v:switchT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception.Synchronous",
          "name": "throw",
          "package": "explicit-exception",
          "signature": "e -\u003e Exceptional e a",
          "source": "src/Control-Monad-Exception-Synchronous.html#throw",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception Synchronous",
          "module": "Control.Monad.Exception.Synchronous",
          "name": "throw",
          "normalized": "a-\u003eExceptional a b",
          "package": "explicit-exception",
          "signature": "e-\u003eExceptional e a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#v:throw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception.Synchronous",
          "name": "throwT",
          "package": "explicit-exception",
          "signature": "e -\u003e ExceptionalT e m a",
          "source": "src/Control-Monad-Exception-Synchronous.html#throwT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception Synchronous",
          "module": "Control.Monad.Exception.Synchronous",
          "name": "throwT",
          "normalized": "a-\u003eExceptionalT a b c",
          "package": "explicit-exception",
          "signature": "e-\u003eExceptionalT e m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#v:throwT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception.Synchronous",
          "name": "toEither",
          "package": "explicit-exception",
          "signature": "Exceptional e a -\u003e Either e a",
          "source": "src/Control-Monad-Exception-Synchronous.html#toEither",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception Synchronous",
          "module": "Control.Monad.Exception.Synchronous",
          "name": "toEither",
          "normalized": "Exceptional a b-\u003eEither a b",
          "package": "explicit-exception",
          "partial": "Either",
          "signature": "Exceptional e a-\u003eEither e a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#v:toEither"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception.Synchronous",
          "name": "toEitherT",
          "package": "explicit-exception",
          "signature": "ExceptionalT e m a -\u003e m (Either e a)",
          "source": "src/Control-Monad-Exception-Synchronous.html#toEitherT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception Synchronous",
          "module": "Control.Monad.Exception.Synchronous",
          "name": "toEitherT",
          "normalized": "ExceptionalT a b c-\u003eb(Either a c)",
          "package": "explicit-exception",
          "partial": "Either",
          "signature": "ExceptionalT e m a-\u003em(Either e a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#v:toEitherT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception.Synchronous",
          "name": "toErrorT",
          "package": "explicit-exception",
          "signature": "ExceptionalT e m a -\u003e ErrorT e m a",
          "source": "src/Control-Monad-Exception-Synchronous.html#toErrorT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception Synchronous",
          "module": "Control.Monad.Exception.Synchronous",
          "name": "toErrorT",
          "normalized": "ExceptionalT a b c-\u003eErrorT a b c",
          "package": "explicit-exception",
          "partial": "Error",
          "signature": "ExceptionalT e m a-\u003eErrorT e m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#v:toErrorT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception.Synchronous",
          "name": "toExitCode",
          "package": "explicit-exception",
          "signature": "Exceptional Int () -\u003e ExitCode",
          "source": "src/Control-Monad-Exception-Synchronous.html#toExitCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception Synchronous",
          "module": "Control.Monad.Exception.Synchronous",
          "name": "toExitCode",
          "normalized": "Exceptional Int()-\u003eExitCode",
          "package": "explicit-exception",
          "partial": "Exit Code",
          "signature": "Exceptional Int()-\u003eExitCode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#v:toExitCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception.Synchronous",
          "name": "toExitCodeT",
          "package": "explicit-exception",
          "signature": "ExceptionalT Int m () -\u003e m ExitCode",
          "source": "src/Control-Monad-Exception-Synchronous.html#toExitCodeT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception Synchronous",
          "module": "Control.Monad.Exception.Synchronous",
          "name": "toExitCodeT",
          "normalized": "ExceptionalT Int a()-\u003ea ExitCode",
          "package": "explicit-exception",
          "partial": "Exit Code",
          "signature": "ExceptionalT Int m()-\u003em ExitCode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#v:toExitCodeT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception.Synchronous",
          "name": "toMaybe",
          "package": "explicit-exception",
          "signature": "Exceptional e a -\u003e Maybe a",
          "source": "src/Control-Monad-Exception-Synchronous.html#toMaybe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception Synchronous",
          "module": "Control.Monad.Exception.Synchronous",
          "name": "toMaybe",
          "normalized": "Exceptional a b-\u003eMaybe b",
          "package": "explicit-exception",
          "partial": "Maybe",
          "signature": "Exceptional e a-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#v:toMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception.Synchronous",
          "name": "toMaybeT",
          "package": "explicit-exception",
          "signature": "ExceptionalT e m a -\u003e MaybeT m a",
          "source": "src/Control-Monad-Exception-Synchronous.html#toMaybeT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception Synchronous",
          "module": "Control.Monad.Exception.Synchronous",
          "name": "toMaybeT",
          "normalized": "ExceptionalT a b c-\u003eMaybeT b c",
          "package": "explicit-exception",
          "partial": "Maybe",
          "signature": "ExceptionalT e m a-\u003eMaybeT m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#v:toMaybeT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception.Synchronous",
          "name": "tryT",
          "package": "explicit-exception",
          "signature": "ExceptionalT e m a -\u003e m (Exceptional e a)",
          "source": "src/Control-Monad-Exception-Synchronous.html#tryT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception Synchronous",
          "module": "Control.Monad.Exception.Synchronous",
          "name": "tryT",
          "normalized": "ExceptionalT a b c-\u003eb(Exceptional a c)",
          "package": "explicit-exception",
          "signature": "ExceptionalT e m a-\u003em(Exceptional e a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#v:tryT"
      }
    }
  ]
]