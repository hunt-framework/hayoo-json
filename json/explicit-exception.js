[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#",
      "description": {
        "fct-module": "Control.Monad.Exception.Asynchronous.Lazy",
        "fct-package": "explicit-exception",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Exception-Asynchronous-Lazy.html",
        "fct-type": "module",
        "title": "Lazy"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Asynchronous Lazy",
        "module": "Control.Monad.Exception.Asynchronous.Lazy",
        "name": "Lazy",
        "normalized": "",
        "package": "explicit-exception",
        "partial": "Lazy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#t:Exceptional",
      "description": {
        "fct-descr": "\u003cp\u003eContains a value and a reason why the computation of the value of type \u003ccode\u003ea\u003c/code\u003e was terminated.\nImagine \u003ccode\u003ea\u003c/code\u003e as a list type, and an according operation like the \u003ccode\u003e\u003ca\u003ereadFile\u003c/a\u003e\u003c/code\u003e operation.\nIf the exception part is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e then the value could be constructed regularly.\nIf the exception part is \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e then the value could not be constructed completely.\nHowever you can read the result of type \u003ccode\u003ea\u003c/code\u003e lazily,\neven if an exception occurs while it is evaluated.\nIf you evaluate the exception part,\nthen the result value is certainly computed completely.\n\u003c/p\u003e\u003cp\u003eHowever, we cannot provide general \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e functionality\ndue to the very different ways of combining the results of type \u003ccode\u003ea\u003c/code\u003e.\nIt is recommended to process the result value in an application specific way,\nand after consumption of the result, throw a synchronous exception using \u003ccode\u003e\u003ca\u003etoSynchronous\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eMaybe in the future we provide a monad instance\nwhich considers subsequent actions as simultaneous processes on a lazy data structure.\n\u003c/p\u003e\u003cp\u003eThis variant has lazy combinators like \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e.\nThis implies that some laws are not fulfilled,\nbut in practice it saves you some calls to \u003ccode\u003e\u003ca\u003eforce\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception.Asynchronous.Lazy",
        "fct-package": "explicit-exception",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-Exception-Asynchronous-Lazy.html#Exceptional",
        "fct-type": "data",
        "title": "Exceptional"
      },
      "index": {
        "description": "Contains value and reason why the computation of the value of type was terminated Imagine as list type and an according operation like the readFile operation If the exception part is Nothing then the value could be constructed regularly If the exception part is Just then the value could not be constructed completely However you can read the result of type lazily even if an exception occurs while it is evaluated If you evaluate the exception part then the result value is certainly computed completely However we cannot provide general Monad functionality due to the very different ways of combining the results of type It is recommended to process the result value in an application specific way and after consumption of the result throw synchronous exception using toSynchronous Maybe in the future we provide monad instance which considers subsequent actions as simultaneous processes on lazy data structure This variant has lazy combinators like fmap This implies that some laws are not fulfilled but in practice it saves you some calls to force",
        "hierarchy": "Control Monad Exception Asynchronous Lazy",
        "module": "Control.Monad.Exception.Asynchronous.Lazy",
        "name": "Exceptional",
        "normalized": "",
        "package": "explicit-exception",
        "partial": "Exceptional",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#t:ExceptionalT",
      "description": {
        "fct-descr": "\u003cp\u003eIn contrast to synchronous exceptions,\nthe asynchronous monad transformer is not quite a monad.\nYou must use the \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e interface or \u003ccode\u003e\u003ca\u003ebindT\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception.Asynchronous.Lazy",
        "fct-package": "explicit-exception",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Monad-Exception-Asynchronous-Lazy.html#ExceptionalT",
        "fct-type": "newtype",
        "title": "ExceptionalT"
      },
      "index": {
        "description": "In contrast to synchronous exceptions the asynchronous monad transformer is not quite monad You must use the Monoid interface or bindT instead",
        "hierarchy": "Control Monad Exception Asynchronous Lazy",
        "module": "Control.Monad.Exception.Asynchronous.Lazy",
        "name": "ExceptionalT",
        "normalized": "",
        "package": "explicit-exception",
        "partial": "Exceptional",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:Exceptional",
      "description": {
        "fct-module": "Control.Monad.Exception.Asynchronous.Lazy",
        "fct-package": "explicit-exception",
        "fct-signature": "Exceptional",
        "fct-source": "src/Control-Monad-Exception-Asynchronous-Lazy.html#Exceptional",
        "fct-type": "function",
        "title": "Exceptional"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Asynchronous Lazy",
        "module": "Control.Monad.Exception.Asynchronous.Lazy",
        "name": "Exceptional",
        "normalized": "",
        "package": "explicit-exception",
        "partial": "Exceptional",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:ExceptionalT",
      "description": {
        "fct-module": "Control.Monad.Exception.Asynchronous.Lazy",
        "fct-package": "explicit-exception",
        "fct-signature": "ExceptionalT",
        "fct-source": "src/Control-Monad-Exception-Asynchronous-Lazy.html#ExceptionalT",
        "fct-type": "function",
        "title": "ExceptionalT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Asynchronous Lazy",
        "module": "Control.Monad.Exception.Asynchronous.Lazy",
        "name": "ExceptionalT",
        "normalized": "",
        "package": "explicit-exception",
        "partial": "Exceptional",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:append",
      "description": {
        "fct-descr": "\u003cp\u003eThis is an example for application specific handling of result values.\nAssume you obtain two lazy lists say from \u003ccode\u003e\u003ca\u003ereadFile\u003c/a\u003e\u003c/code\u003e\nand you want to append their contents.\nIf the first stream ends with an exception,\nthis exception is kept\nand the second stream is not touched.\nIf the first stream can be read successfully,\nthe second one is appended until stops.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eappend\u003c/a\u003e\u003c/code\u003e is less strict than the \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e method \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception.Asynchronous.Lazy",
        "fct-package": "explicit-exception",
        "fct-signature": "Exceptional e a -\u003e Exceptional e a -\u003e Exceptional e a",
        "fct-source": "src/Control-Monad-Exception-Asynchronous-Lazy.html#append",
        "fct-type": "function",
        "title": "append"
      },
      "index": {
        "description": "This is an example for application specific handling of result values Assume you obtain two lazy lists say from readFile and you want to append their contents If the first stream ends with an exception this exception is kept and the second stream is not touched If the first stream can be read successfully the second one is appended until stops append is less strict than the Monoid method mappend instance",
        "hierarchy": "Control Monad Exception Asynchronous Lazy",
        "module": "Control.Monad.Exception.Asynchronous.Lazy",
        "name": "append",
        "normalized": "Exceptional a b-\u003eExceptional a b-\u003eExceptional a b",
        "package": "explicit-exception",
        "partial": "",
        "signature": "Exceptional e a-\u003eExceptional e a-\u003eExceptional e a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:appendM",
      "description": {
        "fct-module": "Control.Monad.Exception.Asynchronous.Lazy",
        "fct-package": "explicit-exception",
        "fct-signature": "m (Exceptional e a) -\u003e m (Exceptional e a) -\u003e m (Exceptional e a)",
        "fct-source": "src/Control-Monad-Exception-Asynchronous-Lazy.html#appendM",
        "fct-type": "function",
        "title": "appendM"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Asynchronous Lazy",
        "module": "Control.Monad.Exception.Asynchronous.Lazy",
        "name": "appendM",
        "normalized": "a(Exceptional b c)-\u003ea(Exceptional b c)-\u003ea(Exceptional b c)",
        "package": "explicit-exception",
        "partial": "",
        "signature": "m(Exceptional e a)-\u003em(Exceptional e a)-\u003em(Exceptional e a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:bindT",
      "description": {
        "fct-descr": "\u003cp\u003eThe monadic bind operation.\nIt cannot be made an instance of the Monad class method \u003ccode\u003e(\u003e\u003e=)\u003c/code\u003e\nsince it requires a default return value\nin case the first action fails.\nWe get this default value by the \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e method \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception.Asynchronous.Lazy",
        "fct-package": "explicit-exception",
        "fct-signature": "ExceptionalT e m a -\u003e (a -\u003e ExceptionalT e m b) -\u003e ExceptionalT e m b",
        "fct-source": "src/Control-Monad-Exception-Asynchronous-Lazy.html#bindT",
        "fct-type": "function",
        "title": "bindT"
      },
      "index": {
        "description": "The monadic bind operation It cannot be made an instance of the Monad class method since it requires default return value in case the first action fails We get this default value by the Monoid method mempty",
        "hierarchy": "Control Monad Exception Asynchronous Lazy",
        "module": "Control.Monad.Exception.Asynchronous.Lazy",
        "name": "bindT",
        "normalized": "ExceptionalT a b c-\u003e(c-\u003eExceptionalT a b d)-\u003eExceptionalT a b d",
        "package": "explicit-exception",
        "partial": "",
        "signature": "ExceptionalT e m a-\u003e(a-\u003eExceptionalT e m b)-\u003eExceptionalT e m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:broken",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an exceptional value with exception.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception.Asynchronous.Lazy",
        "fct-package": "explicit-exception",
        "fct-signature": "e -\u003e a -\u003e Exceptional e a",
        "fct-source": "src/Control-Monad-Exception-Asynchronous-Lazy.html#broken",
        "fct-type": "function",
        "title": "broken"
      },
      "index": {
        "description": "Create an exceptional value with exception",
        "hierarchy": "Control Monad Exception Asynchronous Lazy",
        "module": "Control.Monad.Exception.Asynchronous.Lazy",
        "name": "broken",
        "normalized": "a-\u003eb-\u003eExceptional a b",
        "package": "explicit-exception",
        "partial": "",
        "signature": "e-\u003ea-\u003eExceptional e a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:continue",
      "description": {
        "fct-module": "Control.Monad.Exception.Asynchronous.Lazy",
        "fct-package": "explicit-exception",
        "fct-signature": "Maybe e -\u003e Exceptional e a -\u003e Exceptional e a",
        "fct-source": "src/Control-Monad-Exception-Asynchronous-Lazy.html#continue",
        "fct-type": "function",
        "title": "continue"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Asynchronous Lazy",
        "module": "Control.Monad.Exception.Asynchronous.Lazy",
        "name": "continue",
        "normalized": "Maybe a-\u003eExceptional a b-\u003eExceptional a b",
        "package": "explicit-exception",
        "partial": "",
        "signature": "Maybe e-\u003eExceptional e a-\u003eExceptional e a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:continueM",
      "description": {
        "fct-module": "Control.Monad.Exception.Asynchronous.Lazy",
        "fct-package": "explicit-exception",
        "fct-signature": "m (Maybe e) -\u003e m (Exceptional e a) -\u003e m (Exceptional e a)",
        "fct-source": "src/Control-Monad-Exception-Asynchronous-Lazy.html#continueM",
        "fct-type": "function",
        "title": "continueM"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Asynchronous Lazy",
        "module": "Control.Monad.Exception.Asynchronous.Lazy",
        "name": "continueM",
        "normalized": "a(Maybe b)-\u003ea(Exceptional b c)-\u003ea(Exceptional b c)",
        "package": "explicit-exception",
        "partial": "",
        "signature": "m(Maybe e)-\u003em(Exceptional e a)-\u003em(Exceptional e a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:eatNothing",
      "description": {
        "fct-descr": "\u003cp\u003eYou might use an exception of type \u003ccode\u003eMaybe e\u003c/code\u003e in \u003ccode\u003e\u003ca\u003emanyMonoidT\u003c/a\u003e\u003c/code\u003e\nin order to stop the loop.\nAfter finishing the loop you will want\nto turn the \u003ccode\u003eNothing\u003c/code\u003e exception into a success.\nThis is achieved by this function.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception.Asynchronous.Lazy",
        "fct-package": "explicit-exception",
        "fct-signature": "Exceptional (Maybe e) a -\u003e Exceptional e a",
        "fct-source": "src/Control-Monad-Exception-Asynchronous-Lazy.html#eatNothing",
        "fct-type": "function",
        "title": "eatNothing"
      },
      "index": {
        "description": "You might use an exception of type Maybe in manyMonoidT in order to stop the loop After finishing the loop you will want to turn the Nothing exception into success This is achieved by this function",
        "hierarchy": "Control Monad Exception Asynchronous Lazy",
        "module": "Control.Monad.Exception.Asynchronous.Lazy",
        "name": "eatNothing",
        "normalized": "Exceptional(Maybe a)b-\u003eExceptional a b",
        "package": "explicit-exception",
        "partial": "Nothing",
        "signature": "Exceptional(Maybe e)a-\u003eExceptional e a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:eatNothingT",
      "description": {
        "fct-module": "Control.Monad.Exception.Asynchronous.Lazy",
        "fct-package": "explicit-exception",
        "fct-signature": "ExceptionalT (Maybe e) m a -\u003e ExceptionalT e m a",
        "fct-source": "src/Control-Monad-Exception-Asynchronous-Lazy.html#eatNothingT",
        "fct-type": "function",
        "title": "eatNothingT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Asynchronous Lazy",
        "module": "Control.Monad.Exception.Asynchronous.Lazy",
        "name": "eatNothingT",
        "normalized": "ExceptionalT(Maybe a)b c-\u003eExceptionalT a b c",
        "package": "explicit-exception",
        "partial": "Nothing",
        "signature": "ExceptionalT(Maybe e)m a-\u003eExceptionalT e m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:exception",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Exception.Asynchronous.Lazy",
        "fct-package": "explicit-exception",
        "fct-signature": "Maybe e",
        "fct-source": "src/Control-Monad-Exception-Asynchronous-Lazy.html#Exceptional",
        "fct-type": "function",
        "title": "exception"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Asynchronous Lazy",
        "module": "Control.Monad.Exception.Asynchronous.Lazy",
        "name": "exception",
        "normalized": "",
        "package": "explicit-exception",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:force",
      "description": {
        "fct-descr": "\u003cp\u003econstruct Exceptional constructor lazily \n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception.Asynchronous.Lazy",
        "fct-package": "explicit-exception",
        "fct-signature": "Exceptional e a -\u003e Exceptional e a",
        "fct-source": "src/Control-Monad-Exception-Asynchronous-Lazy.html#force",
        "fct-type": "function",
        "title": "force"
      },
      "index": {
        "description": "construct Exceptional constructor lazily",
        "hierarchy": "Control Monad Exception Asynchronous Lazy",
        "module": "Control.Monad.Exception.Asynchronous.Lazy",
        "name": "force",
        "normalized": "Exceptional a b-\u003eExceptional a b",
        "package": "explicit-exception",
        "partial": "",
        "signature": "Exceptional e a-\u003eExceptional e a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:forceT",
      "description": {
        "fct-descr": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003eforce\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception.Asynchronous.Lazy",
        "fct-package": "explicit-exception",
        "fct-signature": "ExceptionalT e m a -\u003e ExceptionalT e m a",
        "fct-source": "src/Control-Monad-Exception-Asynchronous-Lazy.html#forceT",
        "fct-type": "function",
        "title": "forceT"
      },
      "index": {
        "description": "see force",
        "hierarchy": "Control Monad Exception Asynchronous Lazy",
        "module": "Control.Monad.Exception.Asynchronous.Lazy",
        "name": "forceT",
        "normalized": "ExceptionalT a b c-\u003eExceptionalT a b c",
        "package": "explicit-exception",
        "partial": "",
        "signature": "ExceptionalT e m a-\u003eExceptionalT e m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:fromSynchronous",
      "description": {
        "fct-module": "Control.Monad.Exception.Asynchronous.Lazy",
        "fct-package": "explicit-exception",
        "fct-signature": "a -\u003e Exceptional e a -\u003e Exceptional e a",
        "fct-source": "src/Control-Monad-Exception-Asynchronous-Lazy.html#fromSynchronous",
        "fct-type": "function",
        "title": "fromSynchronous"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Asynchronous Lazy",
        "module": "Control.Monad.Exception.Asynchronous.Lazy",
        "name": "fromSynchronous",
        "normalized": "a-\u003eExceptional b a-\u003eExceptional b a",
        "package": "explicit-exception",
        "partial": "Synchronous",
        "signature": "a-\u003eExceptional e a-\u003eExceptional e a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:fromSynchronousMonoid",
      "description": {
        "fct-module": "Control.Monad.Exception.Asynchronous.Lazy",
        "fct-package": "explicit-exception",
        "fct-signature": "Exceptional e a -\u003e Exceptional e a",
        "fct-source": "src/Control-Monad-Exception-Asynchronous-Lazy.html#fromSynchronousMonoid",
        "fct-type": "function",
        "title": "fromSynchronousMonoid"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Asynchronous Lazy",
        "module": "Control.Monad.Exception.Asynchronous.Lazy",
        "name": "fromSynchronousMonoid",
        "normalized": "Exceptional a b-\u003eExceptional a b",
        "package": "explicit-exception",
        "partial": "Synchronous Monoid",
        "signature": "Exceptional e a-\u003eExceptional e a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:fromSynchronousMonoidT",
      "description": {
        "fct-module": "Control.Monad.Exception.Asynchronous.Lazy",
        "fct-package": "explicit-exception",
        "fct-signature": "ExceptionalT e m a -\u003e ExceptionalT e m a",
        "fct-source": "src/Control-Monad-Exception-Asynchronous-Lazy.html#fromSynchronousMonoidT",
        "fct-type": "function",
        "title": "fromSynchronousMonoidT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Asynchronous Lazy",
        "module": "Control.Monad.Exception.Asynchronous.Lazy",
        "name": "fromSynchronousMonoidT",
        "normalized": "ExceptionalT a b c-\u003eExceptionalT a b c",
        "package": "explicit-exception",
        "partial": "Synchronous Monoid",
        "signature": "ExceptionalT e m a-\u003eExceptionalT e m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:fromSynchronousNull",
      "description": {
        "fct-module": "Control.Monad.Exception.Asynchronous.Lazy",
        "fct-package": "explicit-exception",
        "fct-signature": "Exceptional e () -\u003e Exceptional e ()",
        "fct-source": "src/Control-Monad-Exception-Asynchronous-Lazy.html#fromSynchronousNull",
        "fct-type": "function",
        "title": "fromSynchronousNull"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Asynchronous Lazy",
        "module": "Control.Monad.Exception.Asynchronous.Lazy",
        "name": "fromSynchronousNull",
        "normalized": "Exceptional a()-\u003eExceptional a()",
        "package": "explicit-exception",
        "partial": "Synchronous Null",
        "signature": "Exceptional e()-\u003eExceptional e()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:fromSynchronousT",
      "description": {
        "fct-module": "Control.Monad.Exception.Asynchronous.Lazy",
        "fct-package": "explicit-exception",
        "fct-signature": "a -\u003e ExceptionalT e m a -\u003e ExceptionalT e m a",
        "fct-source": "src/Control-Monad-Exception-Asynchronous-Lazy.html#fromSynchronousT",
        "fct-type": "function",
        "title": "fromSynchronousT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Asynchronous Lazy",
        "module": "Control.Monad.Exception.Asynchronous.Lazy",
        "name": "fromSynchronousT",
        "normalized": "a-\u003eExceptionalT b c a-\u003eExceptionalT b c a",
        "package": "explicit-exception",
        "partial": "Synchronous",
        "signature": "a-\u003eExceptionalT e m a-\u003eExceptionalT e m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:manyMonoidT",
      "description": {
        "fct-descr": "\u003cp\u003eWe advise to use the Endo Monoid\nwhen you want to read a series of characters into a list.\nThis means you use the difference lists technique\nin order to build the list, which is efficient.\n\u003c/p\u003e\u003cpre\u003e import Data.Monoid (Endo, appEndo, )\n import Control.Exception (try, )\n import qualified Control.Monad.Exception.Synchronous as Sync\n\u003c/pre\u003e\u003cpre\u003e fmap (flip appEndo []) $ manyMonoidT (fromSynchronousMonoidT $ fmap (Endo . (:)) $ Sync.fromEitherT $ try getChar)\n\u003c/pre\u003e\u003cp\u003eIf you want Lazy IO you must additionally convert \u003ccode\u003egetChar\u003c/code\u003e to LazyIO monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception.Asynchronous.Lazy",
        "fct-package": "explicit-exception",
        "fct-signature": "ExceptionalT e m a-\u003e ExceptionalT e m a",
        "fct-type": "function",
        "title": "manyMonoidT"
      },
      "index": {
        "description": "We advise to use the Endo Monoid when you want to read series of characters into list This means you use the difference lists technique in order to build the list which is efficient import Data.Monoid Endo appEndo import Control.Exception try import qualified Control.Monad.Exception.Synchronous as Sync fmap flip appEndo manyMonoidT fromSynchronousMonoidT fmap Endo Sync.fromEitherT try getChar If you want Lazy IO you must additionally convert getChar to LazyIO monad",
        "hierarchy": "Control Monad Exception Asynchronous Lazy",
        "module": "Control.Monad.Exception.Asynchronous.Lazy",
        "name": "manyMonoidT",
        "normalized": "ExceptionalT a b c-\u003eExceptionalT a b c",
        "package": "explicit-exception",
        "partial": "Monoid",
        "signature": "ExceptionalT e m a-\u003eExceptionalT e m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:manySynchronousT",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: use manyMonoidT with appropriate Monad like LazyIO and result Monoid like Endo instead\u003c/p\u003e\u003c/div\u003e\u003cp\u003eRepeat an action with synchronous exceptions until an exception occurs.\nCombine all atomic results using the \u003ccode\u003ebind\u003c/code\u003e function.\nIt may be \u003ccode\u003econs = (:)\u003c/code\u003e and \u003ccode\u003eempty = []\u003c/code\u003e for \u003ccode\u003eb\u003c/code\u003e being a list type.\nThe \u003ccode\u003edefer\u003c/code\u003e function may be \u003ccode\u003eid\u003c/code\u003e\nor \u003ccode\u003eunsafeInterleaveIO\u003c/code\u003e for lazy read operations.\nThe exception is returned as asynchronous exception.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception.Asynchronous.Lazy",
        "fct-package": "explicit-exception",
        "fct-signature": "(m (Exceptional e b) -\u003e m (Exceptional e b))-\u003e (a -\u003e b -\u003e b)-\u003e b-\u003e ExceptionalT e m a-\u003e m (Exceptional e b)",
        "fct-type": "function",
        "title": "manySynchronousT"
      },
      "index": {
        "description": "Deprecated use manyMonoidT with appropriate Monad like LazyIO and result Monoid like Endo instead Repeat an action with synchronous exceptions until an exception occurs Combine all atomic results using the bind function It may be cons and empty for being list type The defer function may be id or unsafeInterleaveIO for lazy read operations The exception is returned as asynchronous exception",
        "hierarchy": "Control Monad Exception Asynchronous Lazy",
        "module": "Control.Monad.Exception.Asynchronous.Lazy",
        "name": "manySynchronousT",
        "normalized": "(a(Exceptional b c)-\u003ea(Exceptional b c))-\u003e(d-\u003ec-\u003ec)-\u003ec-\u003eExceptionalT b a d-\u003ea(Exceptional b c)",
        "package": "explicit-exception",
        "partial": "Synchronous",
        "signature": "(m(Exceptional e b)-\u003em(Exceptional e b))-\u003e(a-\u003eb-\u003eb)-\u003eb-\u003eExceptionalT e m a-\u003em(Exceptional e b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:mapException",
      "description": {
        "fct-module": "Control.Monad.Exception.Asynchronous.Lazy",
        "fct-package": "explicit-exception",
        "fct-signature": "(e0 -\u003e e1) -\u003e Exceptional e0 a -\u003e Exceptional e1 a",
        "fct-source": "src/Control-Monad-Exception-Asynchronous-Lazy.html#mapException",
        "fct-type": "function",
        "title": "mapException"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Asynchronous Lazy",
        "module": "Control.Monad.Exception.Asynchronous.Lazy",
        "name": "mapException",
        "normalized": "(a-\u003ea)-\u003eExceptional a b-\u003eExceptional a b",
        "package": "explicit-exception",
        "partial": "Exception",
        "signature": "(e-\u003ee)-\u003eExceptional e a-\u003eExceptional e a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:mapExceptionT",
      "description": {
        "fct-module": "Control.Monad.Exception.Asynchronous.Lazy",
        "fct-package": "explicit-exception",
        "fct-signature": "(e0 -\u003e e1) -\u003e ExceptionalT e0 m a -\u003e ExceptionalT e1 m a",
        "fct-source": "src/Control-Monad-Exception-Asynchronous-Lazy.html#mapExceptionT",
        "fct-type": "function",
        "title": "mapExceptionT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Asynchronous Lazy",
        "module": "Control.Monad.Exception.Asynchronous.Lazy",
        "name": "mapExceptionT",
        "normalized": "(a-\u003ea)-\u003eExceptionalT a b c-\u003eExceptionalT a b c",
        "package": "explicit-exception",
        "partial": "Exception",
        "signature": "(e-\u003ee)-\u003eExceptionalT e m a-\u003eExceptionalT e m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:mapExceptional",
      "description": {
        "fct-module": "Control.Monad.Exception.Asynchronous.Lazy",
        "fct-package": "explicit-exception",
        "fct-signature": "(e0 -\u003e e1) -\u003e (a -\u003e b) -\u003e Exceptional e0 a -\u003e Exceptional e1 b",
        "fct-source": "src/Control-Monad-Exception-Asynchronous-Lazy.html#mapExceptional",
        "fct-type": "function",
        "title": "mapExceptional"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Asynchronous Lazy",
        "module": "Control.Monad.Exception.Asynchronous.Lazy",
        "name": "mapExceptional",
        "normalized": "(a-\u003ea)-\u003e(b-\u003ec)-\u003eExceptional a b-\u003eExceptional a c",
        "package": "explicit-exception",
        "partial": "Exceptional",
        "signature": "(e-\u003ee)-\u003e(a-\u003eb)-\u003eExceptional e a-\u003eExceptional e b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:mapExceptionalT",
      "description": {
        "fct-module": "Control.Monad.Exception.Asynchronous.Lazy",
        "fct-package": "explicit-exception",
        "fct-signature": "(m (Exceptional e0 a) -\u003e n (Exceptional e1 b)) -\u003e ExceptionalT e0 m a -\u003e ExceptionalT e1 n b",
        "fct-source": "src/Control-Monad-Exception-Asynchronous-Lazy.html#mapExceptionalT",
        "fct-type": "function",
        "title": "mapExceptionalT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Asynchronous Lazy",
        "module": "Control.Monad.Exception.Asynchronous.Lazy",
        "name": "mapExceptionalT",
        "normalized": "(a(Exceptional b c)-\u003ed(Exceptional b e))-\u003eExceptionalT b a c-\u003eExceptionalT b d e",
        "package": "explicit-exception",
        "partial": "Exceptional",
        "signature": "(m(Exceptional e a)-\u003en(Exceptional e b))-\u003eExceptionalT e m a-\u003eExceptionalT e n b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:mapM",
      "description": {
        "fct-module": "Control.Monad.Exception.Asynchronous.Lazy",
        "fct-package": "explicit-exception",
        "fct-signature": "(a -\u003e m b) -\u003e Exceptional e a -\u003e m (Exceptional e b)",
        "fct-source": "src/Control-Monad-Exception-Asynchronous-Lazy.html#mapM",
        "fct-type": "function",
        "title": "mapM"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Asynchronous Lazy",
        "module": "Control.Monad.Exception.Asynchronous.Lazy",
        "name": "mapM",
        "normalized": "(a-\u003eb c)-\u003eExceptional d a-\u003eb(Exceptional d c)",
        "package": "explicit-exception",
        "partial": "",
        "signature": "(a-\u003em b)-\u003eExceptional e a-\u003em(Exceptional e b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:maybeAbort",
      "description": {
        "fct-module": "Control.Monad.Exception.Asynchronous.Lazy",
        "fct-package": "explicit-exception",
        "fct-signature": "Exceptional e a -\u003e Maybe e -\u003e Exceptional e a",
        "fct-source": "src/Control-Monad-Exception-Asynchronous-Lazy.html#maybeAbort",
        "fct-type": "function",
        "title": "maybeAbort"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Asynchronous Lazy",
        "module": "Control.Monad.Exception.Asynchronous.Lazy",
        "name": "maybeAbort",
        "normalized": "Exceptional a b-\u003eMaybe a-\u003eExceptional a b",
        "package": "explicit-exception",
        "partial": "Abort",
        "signature": "Exceptional e a-\u003eMaybe e-\u003eExceptional e a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:processToSynchronousT_",
      "description": {
        "fct-descr": "\u003cp\u003eScan \u003ccode\u003ex\u003c/code\u003e using the \u003ccode\u003edecons\u003c/code\u003e function\nand run an action with synchronous exceptions for each element fetched from \u003ccode\u003ex\u003c/code\u003e.\nEach invocation of an element action may stop this function\ndue to an exception.\nIf all element actions can be performed successfully\nand if there is an asynchronous exception\nthen at the end this exception is raised as synchronous exception.\n\u003ccode\u003edecons\u003c/code\u003e function might be \u003ccode\u003eData.List.HT.viewL\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception.Asynchronous.Lazy",
        "fct-package": "explicit-exception",
        "fct-signature": "(b -\u003e Maybe (a, b))-\u003e (a -\u003e ExceptionalT e m ())-\u003e Exceptional e b-\u003e ExceptionalT e m ()",
        "fct-type": "function",
        "title": "processToSynchronousT_"
      },
      "index": {
        "description": "Scan using the decons function and run an action with synchronous exceptions for each element fetched from Each invocation of an element action may stop this function due to an exception If all element actions can be performed successfully and if there is an asynchronous exception then at the end this exception is raised as synchronous exception decons function might be Data.List.HT.viewL",
        "hierarchy": "Control Monad Exception Asynchronous Lazy",
        "module": "Control.Monad.Exception.Asynchronous.Lazy",
        "name": "processToSynchronousT_",
        "normalized": "(a-\u003eMaybe(b,a))-\u003e(b-\u003eExceptionalT c d())-\u003eExceptional c a-\u003eExceptionalT c d()",
        "package": "explicit-exception",
        "partial": "To Synchronous",
        "signature": "(b-\u003eMaybe(a,b))-\u003e(a-\u003eExceptionalT e m())-\u003eExceptional e b-\u003eExceptionalT e m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:pure",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an exceptional value without exception.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception.Asynchronous.Lazy",
        "fct-package": "explicit-exception",
        "fct-signature": "a -\u003e Exceptional e a",
        "fct-source": "src/Control-Monad-Exception-Asynchronous-Lazy.html#pure",
        "fct-type": "function",
        "title": "pure"
      },
      "index": {
        "description": "Create an exceptional value without exception",
        "hierarchy": "Control Monad Exception Asynchronous Lazy",
        "module": "Control.Monad.Exception.Asynchronous.Lazy",
        "name": "pure",
        "normalized": "a-\u003eExceptional b a",
        "package": "explicit-exception",
        "partial": "",
        "signature": "a-\u003eExceptional e a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:result",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Exception.Asynchronous.Lazy",
        "fct-package": "explicit-exception",
        "fct-signature": "a",
        "fct-source": "src/Control-Monad-Exception-Asynchronous-Lazy.html#Exceptional",
        "fct-type": "function",
        "title": "result"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Asynchronous Lazy",
        "module": "Control.Monad.Exception.Asynchronous.Lazy",
        "name": "result",
        "normalized": "",
        "package": "explicit-exception",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:runExceptionalT",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Exception.Asynchronous.Lazy",
        "fct-package": "explicit-exception",
        "fct-signature": "m (Exceptional e a)",
        "fct-source": "src/Control-Monad-Exception-Asynchronous-Lazy.html#ExceptionalT",
        "fct-type": "function",
        "title": "runExceptionalT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Asynchronous Lazy",
        "module": "Control.Monad.Exception.Asynchronous.Lazy",
        "name": "runExceptionalT",
        "normalized": "",
        "package": "explicit-exception",
        "partial": "Exceptional",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:sequence",
      "description": {
        "fct-module": "Control.Monad.Exception.Asynchronous.Lazy",
        "fct-package": "explicit-exception",
        "fct-signature": "Exceptional e (m a) -\u003e m (Exceptional e a)",
        "fct-source": "src/Control-Monad-Exception-Asynchronous-Lazy.html#sequence",
        "fct-type": "function",
        "title": "sequence"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Asynchronous Lazy",
        "module": "Control.Monad.Exception.Asynchronous.Lazy",
        "name": "sequence",
        "normalized": "Exceptional a(b c)-\u003eb(Exceptional a c)",
        "package": "explicit-exception",
        "partial": "",
        "signature": "Exceptional e(m a)-\u003em(Exceptional e a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:sequenceA",
      "description": {
        "fct-module": "Control.Monad.Exception.Asynchronous.Lazy",
        "fct-package": "explicit-exception",
        "fct-signature": "Exceptional e (f a) -\u003e f (Exceptional e a)",
        "fct-source": "src/Control-Monad-Exception-Asynchronous-Lazy.html#sequenceA",
        "fct-type": "function",
        "title": "sequenceA"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Asynchronous Lazy",
        "module": "Control.Monad.Exception.Asynchronous.Lazy",
        "name": "sequenceA",
        "normalized": "Exceptional a(b c)-\u003eb(Exceptional a c)",
        "package": "explicit-exception",
        "partial": "",
        "signature": "Exceptional e(f a)-\u003ef(Exceptional e a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:sequenceF",
      "description": {
        "fct-descr": "\u003cp\u003eIs there a better name?\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception.Asynchronous.Lazy",
        "fct-package": "explicit-exception",
        "fct-signature": "Exceptional e (f a) -\u003e f (Exceptional e a)",
        "fct-source": "src/Control-Monad-Exception-Asynchronous-Lazy.html#sequenceF",
        "fct-type": "function",
        "title": "sequenceF"
      },
      "index": {
        "description": "Is there better name",
        "hierarchy": "Control Monad Exception Asynchronous Lazy",
        "module": "Control.Monad.Exception.Asynchronous.Lazy",
        "name": "sequenceF",
        "normalized": "Exceptional a(b c)-\u003eb(Exceptional a c)",
        "package": "explicit-exception",
        "partial": "",
        "signature": "Exceptional e(f a)-\u003ef(Exceptional e a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:simultaneousBind",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Check whether this function is really what you need. It generates an unreasonable exception when the second exception is caused by the first one.\u003c/p\u003e\u003c/div\u003e\u003cp\u003eI consider both actions to process the data simultaneously through lazy evaluation.\nIf the second one fails too, it must have encountered an exception\nin the data that was successfully emitted by the first action,\nand thus the exception of the second action is probably earlier.\n\u003c/p\u003e\u003cp\u003eWe cannot check in general whether the two exception occur at the same time,\ne.g. the second one might occur since the first occured and left an invalid structure.\nIn this case we should emit the first exception, not the second one.\nBecause of this I expect that this function is not particularly useful.\nOtherwise it could be used as bind operation for a monad instance.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception.Asynchronous.Lazy",
        "fct-package": "explicit-exception",
        "fct-signature": "Exceptional e a -\u003e (a -\u003e Exceptional e b) -\u003e Exceptional e b",
        "fct-source": "src/Control-Monad-Exception-Asynchronous-Lazy.html#simultaneousBind",
        "fct-type": "function",
        "title": "simultaneousBind"
      },
      "index": {
        "description": "Deprecated Check whether this function is really what you need It generates an unreasonable exception when the second exception is caused by the first one consider both actions to process the data simultaneously through lazy evaluation If the second one fails too it must have encountered an exception in the data that was successfully emitted by the first action and thus the exception of the second action is probably earlier We cannot check in general whether the two exception occur at the same time e.g the second one might occur since the first occured and left an invalid structure In this case we should emit the first exception not the second one Because of this expect that this function is not particularly useful Otherwise it could be used as bind operation for monad instance",
        "hierarchy": "Control Monad Exception Asynchronous Lazy",
        "module": "Control.Monad.Exception.Asynchronous.Lazy",
        "name": "simultaneousBind",
        "normalized": "Exceptional a b-\u003e(b-\u003eExceptional a c)-\u003eExceptional a c",
        "package": "explicit-exception",
        "partial": "Bind",
        "signature": "Exceptional e a-\u003e(a-\u003eExceptional e b)-\u003eExceptional e b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:simultaneousBindM",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Check whether this function is really what you need. It generates an unreasonable exception when the second exception is caused by the first one.\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Exception.Asynchronous.Lazy",
        "fct-package": "explicit-exception",
        "fct-signature": "m (Exceptional e a) -\u003e (a -\u003e m (Exceptional e b)) -\u003e m (Exceptional e b)",
        "fct-source": "src/Control-Monad-Exception-Asynchronous-Lazy.html#simultaneousBindM",
        "fct-type": "function",
        "title": "simultaneousBindM"
      },
      "index": {
        "description": "Deprecated Check whether this function is really what you need It generates an unreasonable exception when the second exception is caused by the first one",
        "hierarchy": "Control Monad Exception Asynchronous Lazy",
        "module": "Control.Monad.Exception.Asynchronous.Lazy",
        "name": "simultaneousBindM",
        "normalized": "a(Exceptional b c)-\u003e(c-\u003ea(Exceptional b d))-\u003ea(Exceptional b d)",
        "package": "explicit-exception",
        "partial": "Bind",
        "signature": "m(Exceptional e a)-\u003e(a-\u003em(Exceptional e b))-\u003em(Exceptional e b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:swapToAsynchronousSynchronous",
      "description": {
        "fct-module": "Control.Monad.Exception.Asynchronous.Lazy",
        "fct-package": "explicit-exception",
        "fct-signature": "Exceptional e1 (Exceptional e0 a) -\u003e Exceptional e0 (Exceptional e1 a)",
        "fct-source": "src/Control-Monad-Exception-Asynchronous-Lazy.html#swapToAsynchronousSynchronous",
        "fct-type": "function",
        "title": "swapToAsynchronousSynchronous"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Asynchronous Lazy",
        "module": "Control.Monad.Exception.Asynchronous.Lazy",
        "name": "swapToAsynchronousSynchronous",
        "normalized": "Exceptional a(Exceptional a b)-\u003eExceptional a(Exceptional a b)",
        "package": "explicit-exception",
        "partial": "To Asynchronous Synchronous",
        "signature": "Exceptional e(Exceptional e a)-\u003eExceptional e(Exceptional e a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:swapToSynchronousAsynchronous",
      "description": {
        "fct-descr": "\u003cp\u003eConsider a file format consisting of a header and a data body.\nThe header can only be used if is read completely.\nIts parsing might stop with an synchronous exception.\nThe data body can also be used if it is truncated by an exceptional event.\nThis is expressed by an asynchronous exception.\nA loader for this file format can thus fail\nby a synchronous and an asynchronous exception.\nSurprisingly, both orders of nesting these two kinds of exceptional actions\nare equally expressive.\nThis function converts to the form where the synchronous exception is the outer one.\n\u003c/p\u003e\u003cp\u003eThis is a specialisation of \u003ccode\u003e\u003ca\u003esequence\u003c/a\u003e\u003c/code\u003e and friends.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception.Asynchronous.Lazy",
        "fct-package": "explicit-exception",
        "fct-signature": "Exceptional e0 (Exceptional e1 a) -\u003e Exceptional e1 (Exceptional e0 a)",
        "fct-source": "src/Control-Monad-Exception-Asynchronous-Lazy.html#swapToSynchronousAsynchronous",
        "fct-type": "function",
        "title": "swapToSynchronousAsynchronous"
      },
      "index": {
        "description": "Consider file format consisting of header and data body The header can only be used if is read completely Its parsing might stop with an synchronous exception The data body can also be used if it is truncated by an exceptional event This is expressed by an asynchronous exception loader for this file format can thus fail by synchronous and an asynchronous exception Surprisingly both orders of nesting these two kinds of exceptional actions are equally expressive This function converts to the form where the synchronous exception is the outer one This is specialisation of sequence and friends",
        "hierarchy": "Control Monad Exception Asynchronous Lazy",
        "module": "Control.Monad.Exception.Asynchronous.Lazy",
        "name": "swapToSynchronousAsynchronous",
        "normalized": "Exceptional a(Exceptional a b)-\u003eExceptional a(Exceptional a b)",
        "package": "explicit-exception",
        "partial": "To Synchronous Asynchronous",
        "signature": "Exceptional e(Exceptional e a)-\u003eExceptional e(Exceptional e a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:throw",
      "description": {
        "fct-descr": "\u003cp\u003eI think in most cases we want throwMonoid,\nthus we can replace \u003ccode\u003e\u003ca\u003ethrow\u003c/a\u003e\u003c/code\u003e by \u003ccode\u003e\u003ca\u003ethrowMonoid\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception.Asynchronous.Lazy",
        "fct-package": "explicit-exception",
        "fct-signature": "e -\u003e Exceptional e ()",
        "fct-source": "src/Control-Monad-Exception-Asynchronous-Lazy.html#throw",
        "fct-type": "function",
        "title": "throw"
      },
      "index": {
        "description": "think in most cases we want throwMonoid thus we can replace throw by throwMonoid",
        "hierarchy": "Control Monad Exception Asynchronous Lazy",
        "module": "Control.Monad.Exception.Asynchronous.Lazy",
        "name": "throw",
        "normalized": "a-\u003eExceptional a()",
        "package": "explicit-exception",
        "partial": "",
        "signature": "e-\u003eExceptional e()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:throwMonoid",
      "description": {
        "fct-module": "Control.Monad.Exception.Asynchronous.Lazy",
        "fct-package": "explicit-exception",
        "fct-signature": "e -\u003e Exceptional e a",
        "fct-source": "src/Control-Monad-Exception-Asynchronous-Lazy.html#throwMonoid",
        "fct-type": "function",
        "title": "throwMonoid"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Asynchronous Lazy",
        "module": "Control.Monad.Exception.Asynchronous.Lazy",
        "name": "throwMonoid",
        "normalized": "a-\u003eExceptional a b",
        "package": "explicit-exception",
        "partial": "Monoid",
        "signature": "e-\u003eExceptional e a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:throwMonoidT",
      "description": {
        "fct-module": "Control.Monad.Exception.Asynchronous.Lazy",
        "fct-package": "explicit-exception",
        "fct-signature": "e -\u003e ExceptionalT e m a",
        "fct-source": "src/Control-Monad-Exception-Asynchronous-Lazy.html#throwMonoidT",
        "fct-type": "function",
        "title": "throwMonoidT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Asynchronous Lazy",
        "module": "Control.Monad.Exception.Asynchronous.Lazy",
        "name": "throwMonoidT",
        "normalized": "a-\u003eExceptionalT a b c",
        "package": "explicit-exception",
        "partial": "Monoid",
        "signature": "e-\u003eExceptionalT e m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:toSynchronous",
      "description": {
        "fct-module": "Control.Monad.Exception.Asynchronous.Lazy",
        "fct-package": "explicit-exception",
        "fct-signature": "Exceptional e a -\u003e Exceptional e a",
        "fct-source": "src/Control-Monad-Exception-Asynchronous-Lazy.html#toSynchronous",
        "fct-type": "function",
        "title": "toSynchronous"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Asynchronous Lazy",
        "module": "Control.Monad.Exception.Asynchronous.Lazy",
        "name": "toSynchronous",
        "normalized": "Exceptional a b-\u003eExceptional a b",
        "package": "explicit-exception",
        "partial": "Synchronous",
        "signature": "Exceptional e a-\u003eExceptional e a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:traverse",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eFoldable\u003c/code\u003e instance would allow to strip off the exception too easily.\n\u003c/p\u003e\u003cp\u003eI like the methods of \u003ccode\u003eTraversable\u003c/code\u003e, but \u003ccode\u003eTraversable\u003c/code\u003e instance requires \u003ccode\u003eFoldable\u003c/code\u003e instance.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception.Asynchronous.Lazy",
        "fct-package": "explicit-exception",
        "fct-signature": "(a -\u003e f b) -\u003e Exceptional e a -\u003e f (Exceptional e b)",
        "fct-source": "src/Control-Monad-Exception-Asynchronous-Lazy.html#traverse",
        "fct-type": "function",
        "title": "traverse"
      },
      "index": {
        "description": "Foldable instance would allow to strip off the exception too easily like the methods of Traversable but Traversable instance requires Foldable instance",
        "hierarchy": "Control Monad Exception Asynchronous Lazy",
        "module": "Control.Monad.Exception.Asynchronous.Lazy",
        "name": "traverse",
        "normalized": "(a-\u003eb c)-\u003eExceptional d a-\u003eb(Exceptional d c)",
        "package": "explicit-exception",
        "partial": "",
        "signature": "(a-\u003ef b)-\u003eExceptional e a-\u003ef(Exceptional e b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Lazy.html#v:zipWith",
      "description": {
        "fct-descr": "\u003cp\u003eThis is an example for application specific handling of result values.\nAssume you obtain two lazy lists say from \u003ccode\u003e\u003ca\u003ereadFile\u003c/a\u003e\u003c/code\u003e\nand you want to zip their contents.\nIf one of the stream readers emits an exception,\nwe quit with that exception.\nIf both streams have throw an exception at the same file position,\nthe exception of the first stream is propagated.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception.Asynchronous.Lazy",
        "fct-package": "explicit-exception",
        "fct-signature": "(a -\u003e b -\u003e c) -\u003e Exceptional e [a] -\u003e Exceptional e [b] -\u003e Exceptional e [c]",
        "fct-source": "src/Control-Monad-Exception-Asynchronous-Lazy.html#zipWith",
        "fct-type": "function",
        "title": "zipWith"
      },
      "index": {
        "description": "This is an example for application specific handling of result values Assume you obtain two lazy lists say from readFile and you want to zip their contents If one of the stream readers emits an exception we quit with that exception If both streams have throw an exception at the same file position the exception of the first stream is propagated",
        "hierarchy": "Control Monad Exception Asynchronous Lazy",
        "module": "Control.Monad.Exception.Asynchronous.Lazy",
        "name": "zipWith",
        "normalized": "(a-\u003eb-\u003ec)-\u003eExceptional d[a]-\u003eExceptional d[b]-\u003eExceptional d[c]",
        "package": "explicit-exception",
        "partial": "With",
        "signature": "(a-\u003eb-\u003ec)-\u003eExceptional e[a]-\u003eExceptional e[b]-\u003eExceptional e[c]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#",
      "description": {
        "fct-module": "Control.Monad.Exception.Asynchronous.Strict",
        "fct-package": "explicit-exception",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Exception-Asynchronous-Strict.html",
        "fct-type": "module",
        "title": "Strict"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Asynchronous Strict",
        "module": "Control.Monad.Exception.Asynchronous.Strict",
        "name": "Strict",
        "normalized": "",
        "package": "explicit-exception",
        "partial": "Strict",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#t:Exceptional",
      "description": {
        "fct-descr": "\u003cp\u003eContains a value and a reason why the computation of the value of type \u003ccode\u003ea\u003c/code\u003e was terminated.\nImagine \u003ccode\u003ea\u003c/code\u003e as a list type, and an according operation like the \u003ccode\u003e\u003ca\u003ereadFile\u003c/a\u003e\u003c/code\u003e operation.\nIf the exception part is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e then the value could be constructed regularly.\nIf the exception part is \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e then the value could not be constructed completely.\nHowever you can read the result of type \u003ccode\u003ea\u003c/code\u003e lazily,\neven if an exception occurs while it is evaluated.\nIf you evaluate the exception part,\nthen the result value is certainly computed completely.\n\u003c/p\u003e\u003cp\u003eHowever, we cannot provide general \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e functionality\ndue to the very different ways of combining the results of type \u003ccode\u003ea\u003c/code\u003e.\nIt is recommended to process the result value in an application specific way,\nand after consumption of the result, throw a synchronous exception using \u003ccode\u003e\u003ca\u003etoSynchronous\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eMaybe in the future we provide a monad instance\nwhich considers subsequent actions as simultaneous processes on a lazy data structure.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception.Asynchronous.Strict",
        "fct-package": "explicit-exception",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-Exception-Asynchronous-Strict.html#Exceptional",
        "fct-type": "data",
        "title": "Exceptional"
      },
      "index": {
        "description": "Contains value and reason why the computation of the value of type was terminated Imagine as list type and an according operation like the readFile operation If the exception part is Nothing then the value could be constructed regularly If the exception part is Just then the value could not be constructed completely However you can read the result of type lazily even if an exception occurs while it is evaluated If you evaluate the exception part then the result value is certainly computed completely However we cannot provide general Monad functionality due to the very different ways of combining the results of type It is recommended to process the result value in an application specific way and after consumption of the result throw synchronous exception using toSynchronous Maybe in the future we provide monad instance which considers subsequent actions as simultaneous processes on lazy data structure",
        "hierarchy": "Control Monad Exception Asynchronous Strict",
        "module": "Control.Monad.Exception.Asynchronous.Strict",
        "name": "Exceptional",
        "normalized": "",
        "package": "explicit-exception",
        "partial": "Exceptional",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#t:ExceptionalT",
      "description": {
        "fct-descr": "\u003cp\u003eIn contrast to synchronous exceptions,\nthe asynchronous monad transformer is not quite a monad.\nYou must use the \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e interface or \u003ccode\u003e\u003ca\u003ebindT\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception.Asynchronous.Strict",
        "fct-package": "explicit-exception",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Monad-Exception-Asynchronous-Strict.html#ExceptionalT",
        "fct-type": "newtype",
        "title": "ExceptionalT"
      },
      "index": {
        "description": "In contrast to synchronous exceptions the asynchronous monad transformer is not quite monad You must use the Monoid interface or bindT instead",
        "hierarchy": "Control Monad Exception Asynchronous Strict",
        "module": "Control.Monad.Exception.Asynchronous.Strict",
        "name": "ExceptionalT",
        "normalized": "",
        "package": "explicit-exception",
        "partial": "Exceptional",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#v:Exceptional",
      "description": {
        "fct-module": "Control.Monad.Exception.Asynchronous.Strict",
        "fct-package": "explicit-exception",
        "fct-signature": "Exceptional",
        "fct-source": "src/Control-Monad-Exception-Asynchronous-Strict.html#Exceptional",
        "fct-type": "function",
        "title": "Exceptional"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Asynchronous Strict",
        "module": "Control.Monad.Exception.Asynchronous.Strict",
        "name": "Exceptional",
        "normalized": "",
        "package": "explicit-exception",
        "partial": "Exceptional",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#v:ExceptionalT",
      "description": {
        "fct-module": "Control.Monad.Exception.Asynchronous.Strict",
        "fct-package": "explicit-exception",
        "fct-signature": "ExceptionalT",
        "fct-source": "src/Control-Monad-Exception-Asynchronous-Strict.html#ExceptionalT",
        "fct-type": "function",
        "title": "ExceptionalT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Asynchronous Strict",
        "module": "Control.Monad.Exception.Asynchronous.Strict",
        "name": "ExceptionalT",
        "normalized": "",
        "package": "explicit-exception",
        "partial": "Exceptional",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#v:append",
      "description": {
        "fct-descr": "\u003cp\u003eThis is an example for application specific handling of result values.\nAssume you obtain two lazy lists say from \u003ccode\u003e\u003ca\u003ereadFile\u003c/a\u003e\u003c/code\u003e\nand you want to append their contents.\nIf the first stream ends with an exception,\nthis exception is kept\nand the second stream is not touched.\nIf the first stream can be read successfully,\nthe second one is appended until stops.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eappend\u003c/a\u003e\u003c/code\u003e is less strict than the \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e method \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception.Asynchronous.Strict",
        "fct-package": "explicit-exception",
        "fct-signature": "Exceptional e a -\u003e Exceptional e a -\u003e Exceptional e a",
        "fct-source": "src/Control-Monad-Exception-Asynchronous-Strict.html#append",
        "fct-type": "function",
        "title": "append"
      },
      "index": {
        "description": "This is an example for application specific handling of result values Assume you obtain two lazy lists say from readFile and you want to append their contents If the first stream ends with an exception this exception is kept and the second stream is not touched If the first stream can be read successfully the second one is appended until stops append is less strict than the Monoid method mappend instance",
        "hierarchy": "Control Monad Exception Asynchronous Strict",
        "module": "Control.Monad.Exception.Asynchronous.Strict",
        "name": "append",
        "normalized": "Exceptional a b-\u003eExceptional a b-\u003eExceptional a b",
        "package": "explicit-exception",
        "partial": "",
        "signature": "Exceptional e a-\u003eExceptional e a-\u003eExceptional e a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#v:appendM",
      "description": {
        "fct-module": "Control.Monad.Exception.Asynchronous.Strict",
        "fct-package": "explicit-exception",
        "fct-signature": "m (Exceptional e a) -\u003e m (Exceptional e a) -\u003e m (Exceptional e a)",
        "fct-source": "src/Control-Monad-Exception-Asynchronous-Strict.html#appendM",
        "fct-type": "function",
        "title": "appendM"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Asynchronous Strict",
        "module": "Control.Monad.Exception.Asynchronous.Strict",
        "name": "appendM",
        "normalized": "a(Exceptional b c)-\u003ea(Exceptional b c)-\u003ea(Exceptional b c)",
        "package": "explicit-exception",
        "partial": "",
        "signature": "m(Exceptional e a)-\u003em(Exceptional e a)-\u003em(Exceptional e a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#v:bindT",
      "description": {
        "fct-descr": "\u003cp\u003eThe monadic bind operation.\nIt cannot be made an instance of the Monad class method \u003ccode\u003e(\u003e\u003e=)\u003c/code\u003e\nsince it requires a default return value\nin case the first action fails.\nWe get this default value by the \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e method \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception.Asynchronous.Strict",
        "fct-package": "explicit-exception",
        "fct-signature": "ExceptionalT e m a -\u003e (a -\u003e ExceptionalT e m b) -\u003e ExceptionalT e m b",
        "fct-source": "src/Control-Monad-Exception-Asynchronous-Strict.html#bindT",
        "fct-type": "function",
        "title": "bindT"
      },
      "index": {
        "description": "The monadic bind operation It cannot be made an instance of the Monad class method since it requires default return value in case the first action fails We get this default value by the Monoid method mempty",
        "hierarchy": "Control Monad Exception Asynchronous Strict",
        "module": "Control.Monad.Exception.Asynchronous.Strict",
        "name": "bindT",
        "normalized": "ExceptionalT a b c-\u003e(c-\u003eExceptionalT a b d)-\u003eExceptionalT a b d",
        "package": "explicit-exception",
        "partial": "",
        "signature": "ExceptionalT e m a-\u003e(a-\u003eExceptionalT e m b)-\u003eExceptionalT e m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#v:broken",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an exceptional value with exception.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception.Asynchronous.Strict",
        "fct-package": "explicit-exception",
        "fct-signature": "e -\u003e a -\u003e Exceptional e a",
        "fct-source": "src/Control-Monad-Exception-Asynchronous-Strict.html#broken",
        "fct-type": "function",
        "title": "broken"
      },
      "index": {
        "description": "Create an exceptional value with exception",
        "hierarchy": "Control Monad Exception Asynchronous Strict",
        "module": "Control.Monad.Exception.Asynchronous.Strict",
        "name": "broken",
        "normalized": "a-\u003eb-\u003eExceptional a b",
        "package": "explicit-exception",
        "partial": "",
        "signature": "e-\u003ea-\u003eExceptional e a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#v:continue",
      "description": {
        "fct-module": "Control.Monad.Exception.Asynchronous.Strict",
        "fct-package": "explicit-exception",
        "fct-signature": "Maybe e -\u003e Exceptional e a -\u003e Exceptional e a",
        "fct-source": "src/Control-Monad-Exception-Asynchronous-Strict.html#continue",
        "fct-type": "function",
        "title": "continue"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Asynchronous Strict",
        "module": "Control.Monad.Exception.Asynchronous.Strict",
        "name": "continue",
        "normalized": "Maybe a-\u003eExceptional a b-\u003eExceptional a b",
        "package": "explicit-exception",
        "partial": "",
        "signature": "Maybe e-\u003eExceptional e a-\u003eExceptional e a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#v:continueM",
      "description": {
        "fct-module": "Control.Monad.Exception.Asynchronous.Strict",
        "fct-package": "explicit-exception",
        "fct-signature": "m (Maybe e) -\u003e m (Exceptional e a) -\u003e m (Exceptional e a)",
        "fct-source": "src/Control-Monad-Exception-Asynchronous-Strict.html#continueM",
        "fct-type": "function",
        "title": "continueM"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Asynchronous Strict",
        "module": "Control.Monad.Exception.Asynchronous.Strict",
        "name": "continueM",
        "normalized": "a(Maybe b)-\u003ea(Exceptional b c)-\u003ea(Exceptional b c)",
        "package": "explicit-exception",
        "partial": "",
        "signature": "m(Maybe e)-\u003em(Exceptional e a)-\u003em(Exceptional e a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#v:eatNothing",
      "description": {
        "fct-descr": "\u003cp\u003eYou might use an exception of type \u003ccode\u003eMaybe e\u003c/code\u003e in \u003ccode\u003e\u003ca\u003emanyMonoidT\u003c/a\u003e\u003c/code\u003e\nin order to stop the loop.\nAfter finishing the loop you will want\nto turn the \u003ccode\u003eNothing\u003c/code\u003e exception into a success.\nThis is achieved by this function.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception.Asynchronous.Strict",
        "fct-package": "explicit-exception",
        "fct-signature": "Exceptional (Maybe e) a -\u003e Exceptional e a",
        "fct-source": "src/Control-Monad-Exception-Asynchronous-Strict.html#eatNothing",
        "fct-type": "function",
        "title": "eatNothing"
      },
      "index": {
        "description": "You might use an exception of type Maybe in manyMonoidT in order to stop the loop After finishing the loop you will want to turn the Nothing exception into success This is achieved by this function",
        "hierarchy": "Control Monad Exception Asynchronous Strict",
        "module": "Control.Monad.Exception.Asynchronous.Strict",
        "name": "eatNothing",
        "normalized": "Exceptional(Maybe a)b-\u003eExceptional a b",
        "package": "explicit-exception",
        "partial": "Nothing",
        "signature": "Exceptional(Maybe e)a-\u003eExceptional e a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#v:eatNothingT",
      "description": {
        "fct-module": "Control.Monad.Exception.Asynchronous.Strict",
        "fct-package": "explicit-exception",
        "fct-signature": "ExceptionalT (Maybe e) m a -\u003e ExceptionalT e m a",
        "fct-source": "src/Control-Monad-Exception-Asynchronous-Strict.html#eatNothingT",
        "fct-type": "function",
        "title": "eatNothingT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Asynchronous Strict",
        "module": "Control.Monad.Exception.Asynchronous.Strict",
        "name": "eatNothingT",
        "normalized": "ExceptionalT(Maybe a)b c-\u003eExceptionalT a b c",
        "package": "explicit-exception",
        "partial": "Nothing",
        "signature": "ExceptionalT(Maybe e)m a-\u003eExceptionalT e m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#v:exception",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Exception.Asynchronous.Strict",
        "fct-package": "explicit-exception",
        "fct-signature": "Maybe e",
        "fct-source": "src/Control-Monad-Exception-Asynchronous-Strict.html#Exceptional",
        "fct-type": "function",
        "title": "exception"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Asynchronous Strict",
        "module": "Control.Monad.Exception.Asynchronous.Strict",
        "name": "exception",
        "normalized": "",
        "package": "explicit-exception",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#v:force",
      "description": {
        "fct-descr": "\u003cp\u003econstruct Exceptional constructor lazily \n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception.Asynchronous.Strict",
        "fct-package": "explicit-exception",
        "fct-signature": "Exceptional e a -\u003e Exceptional e a",
        "fct-source": "src/Control-Monad-Exception-Asynchronous-Strict.html#force",
        "fct-type": "function",
        "title": "force"
      },
      "index": {
        "description": "construct Exceptional constructor lazily",
        "hierarchy": "Control Monad Exception Asynchronous Strict",
        "module": "Control.Monad.Exception.Asynchronous.Strict",
        "name": "force",
        "normalized": "Exceptional a b-\u003eExceptional a b",
        "package": "explicit-exception",
        "partial": "",
        "signature": "Exceptional e a-\u003eExceptional e a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#v:forceT",
      "description": {
        "fct-descr": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003eforce\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception.Asynchronous.Strict",
        "fct-package": "explicit-exception",
        "fct-signature": "ExceptionalT e m a -\u003e ExceptionalT e m a",
        "fct-source": "src/Control-Monad-Exception-Asynchronous-Strict.html#forceT",
        "fct-type": "function",
        "title": "forceT"
      },
      "index": {
        "description": "see force",
        "hierarchy": "Control Monad Exception Asynchronous Strict",
        "module": "Control.Monad.Exception.Asynchronous.Strict",
        "name": "forceT",
        "normalized": "ExceptionalT a b c-\u003eExceptionalT a b c",
        "package": "explicit-exception",
        "partial": "",
        "signature": "ExceptionalT e m a-\u003eExceptionalT e m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#v:fromSynchronous",
      "description": {
        "fct-module": "Control.Monad.Exception.Asynchronous.Strict",
        "fct-package": "explicit-exception",
        "fct-signature": "a -\u003e Exceptional e a -\u003e Exceptional e a",
        "fct-source": "src/Control-Monad-Exception-Asynchronous-Strict.html#fromSynchronous",
        "fct-type": "function",
        "title": "fromSynchronous"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Asynchronous Strict",
        "module": "Control.Monad.Exception.Asynchronous.Strict",
        "name": "fromSynchronous",
        "normalized": "a-\u003eExceptional b a-\u003eExceptional b a",
        "package": "explicit-exception",
        "partial": "Synchronous",
        "signature": "a-\u003eExceptional e a-\u003eExceptional e a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#v:fromSynchronousMonoid",
      "description": {
        "fct-module": "Control.Monad.Exception.Asynchronous.Strict",
        "fct-package": "explicit-exception",
        "fct-signature": "Exceptional e a -\u003e Exceptional e a",
        "fct-source": "src/Control-Monad-Exception-Asynchronous-Strict.html#fromSynchronousMonoid",
        "fct-type": "function",
        "title": "fromSynchronousMonoid"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Asynchronous Strict",
        "module": "Control.Monad.Exception.Asynchronous.Strict",
        "name": "fromSynchronousMonoid",
        "normalized": "Exceptional a b-\u003eExceptional a b",
        "package": "explicit-exception",
        "partial": "Synchronous Monoid",
        "signature": "Exceptional e a-\u003eExceptional e a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#v:fromSynchronousMonoidT",
      "description": {
        "fct-module": "Control.Monad.Exception.Asynchronous.Strict",
        "fct-package": "explicit-exception",
        "fct-signature": "ExceptionalT e m a -\u003e ExceptionalT e m a",
        "fct-source": "src/Control-Monad-Exception-Asynchronous-Strict.html#fromSynchronousMonoidT",
        "fct-type": "function",
        "title": "fromSynchronousMonoidT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Asynchronous Strict",
        "module": "Control.Monad.Exception.Asynchronous.Strict",
        "name": "fromSynchronousMonoidT",
        "normalized": "ExceptionalT a b c-\u003eExceptionalT a b c",
        "package": "explicit-exception",
        "partial": "Synchronous Monoid",
        "signature": "ExceptionalT e m a-\u003eExceptionalT e m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#v:fromSynchronousNull",
      "description": {
        "fct-module": "Control.Monad.Exception.Asynchronous.Strict",
        "fct-package": "explicit-exception",
        "fct-signature": "Exceptional e () -\u003e Exceptional e ()",
        "fct-source": "src/Control-Monad-Exception-Asynchronous-Strict.html#fromSynchronousNull",
        "fct-type": "function",
        "title": "fromSynchronousNull"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Asynchronous Strict",
        "module": "Control.Monad.Exception.Asynchronous.Strict",
        "name": "fromSynchronousNull",
        "normalized": "Exceptional a()-\u003eExceptional a()",
        "package": "explicit-exception",
        "partial": "Synchronous Null",
        "signature": "Exceptional e()-\u003eExceptional e()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#v:fromSynchronousT",
      "description": {
        "fct-module": "Control.Monad.Exception.Asynchronous.Strict",
        "fct-package": "explicit-exception",
        "fct-signature": "a -\u003e ExceptionalT e m a -\u003e ExceptionalT e m a",
        "fct-source": "src/Control-Monad-Exception-Asynchronous-Strict.html#fromSynchronousT",
        "fct-type": "function",
        "title": "fromSynchronousT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Asynchronous Strict",
        "module": "Control.Monad.Exception.Asynchronous.Strict",
        "name": "fromSynchronousT",
        "normalized": "a-\u003eExceptionalT b c a-\u003eExceptionalT b c a",
        "package": "explicit-exception",
        "partial": "Synchronous",
        "signature": "a-\u003eExceptionalT e m a-\u003eExceptionalT e m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#v:manyMonoidT",
      "description": {
        "fct-descr": "\u003cp\u003eWe advise to use the Endo Monoid\nwhen you want to read a series of characters into a list.\nThis means you use the difference lists technique\nin order to build the list, which is efficient.\n\u003c/p\u003e\u003cpre\u003e import Data.Monoid (Endo, appEndo, )\n import Control.Exception (try, )\n import qualified Control.Monad.Exception.Synchronous as Sync\n\u003c/pre\u003e\u003cpre\u003e fmap (flip appEndo []) $ manyMonoidT (fromSynchronousMonoidT $ fmap (Endo . (:)) $ Sync.fromEitherT $ try getChar)\n\u003c/pre\u003e\u003cp\u003eIf you want Lazy IO you must additionally convert \u003ccode\u003egetChar\u003c/code\u003e to LazyIO monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception.Asynchronous.Strict",
        "fct-package": "explicit-exception",
        "fct-signature": "ExceptionalT e m a-\u003e ExceptionalT e m a",
        "fct-type": "function",
        "title": "manyMonoidT"
      },
      "index": {
        "description": "We advise to use the Endo Monoid when you want to read series of characters into list This means you use the difference lists technique in order to build the list which is efficient import Data.Monoid Endo appEndo import Control.Exception try import qualified Control.Monad.Exception.Synchronous as Sync fmap flip appEndo manyMonoidT fromSynchronousMonoidT fmap Endo Sync.fromEitherT try getChar If you want Lazy IO you must additionally convert getChar to LazyIO monad",
        "hierarchy": "Control Monad Exception Asynchronous Strict",
        "module": "Control.Monad.Exception.Asynchronous.Strict",
        "name": "manyMonoidT",
        "normalized": "ExceptionalT a b c-\u003eExceptionalT a b c",
        "package": "explicit-exception",
        "partial": "Monoid",
        "signature": "ExceptionalT e m a-\u003eExceptionalT e m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#v:manySynchronousT",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: use manyMonoidT with appropriate Monad like LazyIO and result Monoid like Endo instead\u003c/p\u003e\u003c/div\u003e\u003cp\u003eRepeat an action with synchronous exceptions until an exception occurs.\nCombine all atomic results using the \u003ccode\u003ebind\u003c/code\u003e function.\nIt may be \u003ccode\u003econs = (:)\u003c/code\u003e and \u003ccode\u003eempty = []\u003c/code\u003e for \u003ccode\u003eb\u003c/code\u003e being a list type.\nThe \u003ccode\u003edefer\u003c/code\u003e function may be \u003ccode\u003eid\u003c/code\u003e\nor \u003ccode\u003eunsafeInterleaveIO\u003c/code\u003e for lazy read operations.\nThe exception is returned as asynchronous exception.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception.Asynchronous.Strict",
        "fct-package": "explicit-exception",
        "fct-signature": "(m (Exceptional e b) -\u003e m (Exceptional e b))-\u003e (a -\u003e b -\u003e b)-\u003e b-\u003e ExceptionalT e m a-\u003e m (Exceptional e b)",
        "fct-type": "function",
        "title": "manySynchronousT"
      },
      "index": {
        "description": "Deprecated use manyMonoidT with appropriate Monad like LazyIO and result Monoid like Endo instead Repeat an action with synchronous exceptions until an exception occurs Combine all atomic results using the bind function It may be cons and empty for being list type The defer function may be id or unsafeInterleaveIO for lazy read operations The exception is returned as asynchronous exception",
        "hierarchy": "Control Monad Exception Asynchronous Strict",
        "module": "Control.Monad.Exception.Asynchronous.Strict",
        "name": "manySynchronousT",
        "normalized": "(a(Exceptional b c)-\u003ea(Exceptional b c))-\u003e(d-\u003ec-\u003ec)-\u003ec-\u003eExceptionalT b a d-\u003ea(Exceptional b c)",
        "package": "explicit-exception",
        "partial": "Synchronous",
        "signature": "(m(Exceptional e b)-\u003em(Exceptional e b))-\u003e(a-\u003eb-\u003eb)-\u003eb-\u003eExceptionalT e m a-\u003em(Exceptional e b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#v:mapException",
      "description": {
        "fct-module": "Control.Monad.Exception.Asynchronous.Strict",
        "fct-package": "explicit-exception",
        "fct-signature": "(e0 -\u003e e1) -\u003e Exceptional e0 a -\u003e Exceptional e1 a",
        "fct-source": "src/Control-Monad-Exception-Asynchronous-Strict.html#mapException",
        "fct-type": "function",
        "title": "mapException"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Asynchronous Strict",
        "module": "Control.Monad.Exception.Asynchronous.Strict",
        "name": "mapException",
        "normalized": "(a-\u003ea)-\u003eExceptional a b-\u003eExceptional a b",
        "package": "explicit-exception",
        "partial": "Exception",
        "signature": "(e-\u003ee)-\u003eExceptional e a-\u003eExceptional e a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#v:mapExceptionT",
      "description": {
        "fct-module": "Control.Monad.Exception.Asynchronous.Strict",
        "fct-package": "explicit-exception",
        "fct-signature": "(e0 -\u003e e1) -\u003e ExceptionalT e0 m a -\u003e ExceptionalT e1 m a",
        "fct-source": "src/Control-Monad-Exception-Asynchronous-Strict.html#mapExceptionT",
        "fct-type": "function",
        "title": "mapExceptionT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Asynchronous Strict",
        "module": "Control.Monad.Exception.Asynchronous.Strict",
        "name": "mapExceptionT",
        "normalized": "(a-\u003ea)-\u003eExceptionalT a b c-\u003eExceptionalT a b c",
        "package": "explicit-exception",
        "partial": "Exception",
        "signature": "(e-\u003ee)-\u003eExceptionalT e m a-\u003eExceptionalT e m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#v:mapExceptional",
      "description": {
        "fct-module": "Control.Monad.Exception.Asynchronous.Strict",
        "fct-package": "explicit-exception",
        "fct-signature": "(e0 -\u003e e1) -\u003e (a -\u003e b) -\u003e Exceptional e0 a -\u003e Exceptional e1 b",
        "fct-source": "src/Control-Monad-Exception-Asynchronous-Strict.html#mapExceptional",
        "fct-type": "function",
        "title": "mapExceptional"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Asynchronous Strict",
        "module": "Control.Monad.Exception.Asynchronous.Strict",
        "name": "mapExceptional",
        "normalized": "(a-\u003ea)-\u003e(b-\u003ec)-\u003eExceptional a b-\u003eExceptional a c",
        "package": "explicit-exception",
        "partial": "Exceptional",
        "signature": "(e-\u003ee)-\u003e(a-\u003eb)-\u003eExceptional e a-\u003eExceptional e b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#v:mapExceptionalT",
      "description": {
        "fct-module": "Control.Monad.Exception.Asynchronous.Strict",
        "fct-package": "explicit-exception",
        "fct-signature": "(m (Exceptional e0 a) -\u003e n (Exceptional e1 b)) -\u003e ExceptionalT e0 m a -\u003e ExceptionalT e1 n b",
        "fct-source": "src/Control-Monad-Exception-Asynchronous-Strict.html#mapExceptionalT",
        "fct-type": "function",
        "title": "mapExceptionalT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Asynchronous Strict",
        "module": "Control.Monad.Exception.Asynchronous.Strict",
        "name": "mapExceptionalT",
        "normalized": "(a(Exceptional b c)-\u003ed(Exceptional b e))-\u003eExceptionalT b a c-\u003eExceptionalT b d e",
        "package": "explicit-exception",
        "partial": "Exceptional",
        "signature": "(m(Exceptional e a)-\u003en(Exceptional e b))-\u003eExceptionalT e m a-\u003eExceptionalT e n b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#v:mapM",
      "description": {
        "fct-module": "Control.Monad.Exception.Asynchronous.Strict",
        "fct-package": "explicit-exception",
        "fct-signature": "(a -\u003e m b) -\u003e Exceptional e a -\u003e m (Exceptional e b)",
        "fct-source": "src/Control-Monad-Exception-Asynchronous-Strict.html#mapM",
        "fct-type": "function",
        "title": "mapM"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Asynchronous Strict",
        "module": "Control.Monad.Exception.Asynchronous.Strict",
        "name": "mapM",
        "normalized": "(a-\u003eb c)-\u003eExceptional d a-\u003eb(Exceptional d c)",
        "package": "explicit-exception",
        "partial": "",
        "signature": "(a-\u003em b)-\u003eExceptional e a-\u003em(Exceptional e b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#v:maybeAbort",
      "description": {
        "fct-module": "Control.Monad.Exception.Asynchronous.Strict",
        "fct-package": "explicit-exception",
        "fct-signature": "Exceptional e a -\u003e Maybe e -\u003e Exceptional e a",
        "fct-source": "src/Control-Monad-Exception-Asynchronous-Strict.html#maybeAbort",
        "fct-type": "function",
        "title": "maybeAbort"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Asynchronous Strict",
        "module": "Control.Monad.Exception.Asynchronous.Strict",
        "name": "maybeAbort",
        "normalized": "Exceptional a b-\u003eMaybe a-\u003eExceptional a b",
        "package": "explicit-exception",
        "partial": "Abort",
        "signature": "Exceptional e a-\u003eMaybe e-\u003eExceptional e a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#v:processToSynchronousT_",
      "description": {
        "fct-descr": "\u003cp\u003eScan \u003ccode\u003ex\u003c/code\u003e using the \u003ccode\u003edecons\u003c/code\u003e function\nand run an action with synchronous exceptions for each element fetched from \u003ccode\u003ex\u003c/code\u003e.\nEach invocation of an element action may stop this function\ndue to an exception.\nIf all element actions can be performed successfully\nand if there is an asynchronous exception\nthen at the end this exception is raised as synchronous exception.\n\u003ccode\u003edecons\u003c/code\u003e function might be \u003ccode\u003eData.List.HT.viewL\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception.Asynchronous.Strict",
        "fct-package": "explicit-exception",
        "fct-signature": "(b -\u003e Maybe (a, b))-\u003e (a -\u003e ExceptionalT e m ())-\u003e Exceptional e b-\u003e ExceptionalT e m ()",
        "fct-type": "function",
        "title": "processToSynchronousT_"
      },
      "index": {
        "description": "Scan using the decons function and run an action with synchronous exceptions for each element fetched from Each invocation of an element action may stop this function due to an exception If all element actions can be performed successfully and if there is an asynchronous exception then at the end this exception is raised as synchronous exception decons function might be Data.List.HT.viewL",
        "hierarchy": "Control Monad Exception Asynchronous Strict",
        "module": "Control.Monad.Exception.Asynchronous.Strict",
        "name": "processToSynchronousT_",
        "normalized": "(a-\u003eMaybe(b,a))-\u003e(b-\u003eExceptionalT c d())-\u003eExceptional c a-\u003eExceptionalT c d()",
        "package": "explicit-exception",
        "partial": "To Synchronous",
        "signature": "(b-\u003eMaybe(a,b))-\u003e(a-\u003eExceptionalT e m())-\u003eExceptional e b-\u003eExceptionalT e m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#v:pure",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an exceptional value without exception.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception.Asynchronous.Strict",
        "fct-package": "explicit-exception",
        "fct-signature": "a -\u003e Exceptional e a",
        "fct-source": "src/Control-Monad-Exception-Asynchronous-Strict.html#pure",
        "fct-type": "function",
        "title": "pure"
      },
      "index": {
        "description": "Create an exceptional value without exception",
        "hierarchy": "Control Monad Exception Asynchronous Strict",
        "module": "Control.Monad.Exception.Asynchronous.Strict",
        "name": "pure",
        "normalized": "a-\u003eExceptional b a",
        "package": "explicit-exception",
        "partial": "",
        "signature": "a-\u003eExceptional e a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#v:result",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Exception.Asynchronous.Strict",
        "fct-package": "explicit-exception",
        "fct-signature": "a",
        "fct-source": "src/Control-Monad-Exception-Asynchronous-Strict.html#Exceptional",
        "fct-type": "function",
        "title": "result"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Asynchronous Strict",
        "module": "Control.Monad.Exception.Asynchronous.Strict",
        "name": "result",
        "normalized": "",
        "package": "explicit-exception",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#v:runExceptionalT",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Exception.Asynchronous.Strict",
        "fct-package": "explicit-exception",
        "fct-signature": "m (Exceptional e a)",
        "fct-source": "src/Control-Monad-Exception-Asynchronous-Strict.html#ExceptionalT",
        "fct-type": "function",
        "title": "runExceptionalT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Asynchronous Strict",
        "module": "Control.Monad.Exception.Asynchronous.Strict",
        "name": "runExceptionalT",
        "normalized": "",
        "package": "explicit-exception",
        "partial": "Exceptional",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#v:sequence",
      "description": {
        "fct-module": "Control.Monad.Exception.Asynchronous.Strict",
        "fct-package": "explicit-exception",
        "fct-signature": "Exceptional e (m a) -\u003e m (Exceptional e a)",
        "fct-source": "src/Control-Monad-Exception-Asynchronous-Strict.html#sequence",
        "fct-type": "function",
        "title": "sequence"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Asynchronous Strict",
        "module": "Control.Monad.Exception.Asynchronous.Strict",
        "name": "sequence",
        "normalized": "Exceptional a(b c)-\u003eb(Exceptional a c)",
        "package": "explicit-exception",
        "partial": "",
        "signature": "Exceptional e(m a)-\u003em(Exceptional e a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#v:sequenceA",
      "description": {
        "fct-module": "Control.Monad.Exception.Asynchronous.Strict",
        "fct-package": "explicit-exception",
        "fct-signature": "Exceptional e (f a) -\u003e f (Exceptional e a)",
        "fct-source": "src/Control-Monad-Exception-Asynchronous-Strict.html#sequenceA",
        "fct-type": "function",
        "title": "sequenceA"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Asynchronous Strict",
        "module": "Control.Monad.Exception.Asynchronous.Strict",
        "name": "sequenceA",
        "normalized": "Exceptional a(b c)-\u003eb(Exceptional a c)",
        "package": "explicit-exception",
        "partial": "",
        "signature": "Exceptional e(f a)-\u003ef(Exceptional e a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#v:sequenceF",
      "description": {
        "fct-descr": "\u003cp\u003eIs there a better name?\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception.Asynchronous.Strict",
        "fct-package": "explicit-exception",
        "fct-signature": "Exceptional e (f a) -\u003e f (Exceptional e a)",
        "fct-source": "src/Control-Monad-Exception-Asynchronous-Strict.html#sequenceF",
        "fct-type": "function",
        "title": "sequenceF"
      },
      "index": {
        "description": "Is there better name",
        "hierarchy": "Control Monad Exception Asynchronous Strict",
        "module": "Control.Monad.Exception.Asynchronous.Strict",
        "name": "sequenceF",
        "normalized": "Exceptional a(b c)-\u003eb(Exceptional a c)",
        "package": "explicit-exception",
        "partial": "",
        "signature": "Exceptional e(f a)-\u003ef(Exceptional e a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#v:simultaneousBind",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Check whether this function is really what you need. It generates an unreasonable exception when the second exception is caused by the first one.\u003c/p\u003e\u003c/div\u003e\u003cp\u003eI consider both actions to process the data simultaneously through lazy evaluation.\nIf the second one fails too, it must have encountered an exception\nin the data that was successfully emitted by the first action,\nand thus the exception of the second action is probably earlier.\n\u003c/p\u003e\u003cp\u003eWe cannot check in general whether the two exception occur at the same time,\ne.g. the second one might occur since the first occured and left an invalid structure.\nIn this case we should emit the first exception, not the second one.\nBecause of this I expect that this function is not particularly useful.\nOtherwise it could be used as bind operation for a monad instance.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception.Asynchronous.Strict",
        "fct-package": "explicit-exception",
        "fct-signature": "Exceptional e a -\u003e (a -\u003e Exceptional e b) -\u003e Exceptional e b",
        "fct-source": "src/Control-Monad-Exception-Asynchronous-Strict.html#simultaneousBind",
        "fct-type": "function",
        "title": "simultaneousBind"
      },
      "index": {
        "description": "Deprecated Check whether this function is really what you need It generates an unreasonable exception when the second exception is caused by the first one consider both actions to process the data simultaneously through lazy evaluation If the second one fails too it must have encountered an exception in the data that was successfully emitted by the first action and thus the exception of the second action is probably earlier We cannot check in general whether the two exception occur at the same time e.g the second one might occur since the first occured and left an invalid structure In this case we should emit the first exception not the second one Because of this expect that this function is not particularly useful Otherwise it could be used as bind operation for monad instance",
        "hierarchy": "Control Monad Exception Asynchronous Strict",
        "module": "Control.Monad.Exception.Asynchronous.Strict",
        "name": "simultaneousBind",
        "normalized": "Exceptional a b-\u003e(b-\u003eExceptional a c)-\u003eExceptional a c",
        "package": "explicit-exception",
        "partial": "Bind",
        "signature": "Exceptional e a-\u003e(a-\u003eExceptional e b)-\u003eExceptional e b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#v:simultaneousBindM",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Check whether this function is really what you need. It generates an unreasonable exception when the second exception is caused by the first one.\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Exception.Asynchronous.Strict",
        "fct-package": "explicit-exception",
        "fct-signature": "m (Exceptional e a) -\u003e (a -\u003e m (Exceptional e b)) -\u003e m (Exceptional e b)",
        "fct-source": "src/Control-Monad-Exception-Asynchronous-Strict.html#simultaneousBindM",
        "fct-type": "function",
        "title": "simultaneousBindM"
      },
      "index": {
        "description": "Deprecated Check whether this function is really what you need It generates an unreasonable exception when the second exception is caused by the first one",
        "hierarchy": "Control Monad Exception Asynchronous Strict",
        "module": "Control.Monad.Exception.Asynchronous.Strict",
        "name": "simultaneousBindM",
        "normalized": "a(Exceptional b c)-\u003e(c-\u003ea(Exceptional b d))-\u003ea(Exceptional b d)",
        "package": "explicit-exception",
        "partial": "Bind",
        "signature": "m(Exceptional e a)-\u003e(a-\u003em(Exceptional e b))-\u003em(Exceptional e b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#v:swapToAsynchronousSynchronous",
      "description": {
        "fct-module": "Control.Monad.Exception.Asynchronous.Strict",
        "fct-package": "explicit-exception",
        "fct-signature": "Exceptional e1 (Exceptional e0 a) -\u003e Exceptional e0 (Exceptional e1 a)",
        "fct-source": "src/Control-Monad-Exception-Asynchronous-Strict.html#swapToAsynchronousSynchronous",
        "fct-type": "function",
        "title": "swapToAsynchronousSynchronous"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Asynchronous Strict",
        "module": "Control.Monad.Exception.Asynchronous.Strict",
        "name": "swapToAsynchronousSynchronous",
        "normalized": "Exceptional a(Exceptional a b)-\u003eExceptional a(Exceptional a b)",
        "package": "explicit-exception",
        "partial": "To Asynchronous Synchronous",
        "signature": "Exceptional e(Exceptional e a)-\u003eExceptional e(Exceptional e a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#v:swapToSynchronousAsynchronous",
      "description": {
        "fct-descr": "\u003cp\u003eConsider a file format consisting of a header and a data body.\nThe header can only be used if is read completely.\nIts parsing might stop with an synchronous exception.\nThe data body can also be used if it is truncated by an exceptional event.\nThis is expressed by an asynchronous exception.\nA loader for this file format can thus fail\nby a synchronous and an asynchronous exception.\nSurprisingly, both orders of nesting these two kinds of exceptional actions\nare equally expressive.\nThis function converts to the form where the synchronous exception is the outer one.\n\u003c/p\u003e\u003cp\u003eThis is a specialisation of \u003ccode\u003e\u003ca\u003esequence\u003c/a\u003e\u003c/code\u003e and friends.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception.Asynchronous.Strict",
        "fct-package": "explicit-exception",
        "fct-signature": "Exceptional e0 (Exceptional e1 a) -\u003e Exceptional e1 (Exceptional e0 a)",
        "fct-source": "src/Control-Monad-Exception-Asynchronous-Strict.html#swapToSynchronousAsynchronous",
        "fct-type": "function",
        "title": "swapToSynchronousAsynchronous"
      },
      "index": {
        "description": "Consider file format consisting of header and data body The header can only be used if is read completely Its parsing might stop with an synchronous exception The data body can also be used if it is truncated by an exceptional event This is expressed by an asynchronous exception loader for this file format can thus fail by synchronous and an asynchronous exception Surprisingly both orders of nesting these two kinds of exceptional actions are equally expressive This function converts to the form where the synchronous exception is the outer one This is specialisation of sequence and friends",
        "hierarchy": "Control Monad Exception Asynchronous Strict",
        "module": "Control.Monad.Exception.Asynchronous.Strict",
        "name": "swapToSynchronousAsynchronous",
        "normalized": "Exceptional a(Exceptional a b)-\u003eExceptional a(Exceptional a b)",
        "package": "explicit-exception",
        "partial": "To Synchronous Asynchronous",
        "signature": "Exceptional e(Exceptional e a)-\u003eExceptional e(Exceptional e a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#v:throw",
      "description": {
        "fct-descr": "\u003cp\u003eI think in most cases we want throwMonoid,\nthus we can replace \u003ccode\u003e\u003ca\u003ethrow\u003c/a\u003e\u003c/code\u003e by \u003ccode\u003e\u003ca\u003ethrowMonoid\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception.Asynchronous.Strict",
        "fct-package": "explicit-exception",
        "fct-signature": "e -\u003e Exceptional e ()",
        "fct-source": "src/Control-Monad-Exception-Asynchronous-Strict.html#throw",
        "fct-type": "function",
        "title": "throw"
      },
      "index": {
        "description": "think in most cases we want throwMonoid thus we can replace throw by throwMonoid",
        "hierarchy": "Control Monad Exception Asynchronous Strict",
        "module": "Control.Monad.Exception.Asynchronous.Strict",
        "name": "throw",
        "normalized": "a-\u003eExceptional a()",
        "package": "explicit-exception",
        "partial": "",
        "signature": "e-\u003eExceptional e()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#v:throwMonoid",
      "description": {
        "fct-module": "Control.Monad.Exception.Asynchronous.Strict",
        "fct-package": "explicit-exception",
        "fct-signature": "e -\u003e Exceptional e a",
        "fct-source": "src/Control-Monad-Exception-Asynchronous-Strict.html#throwMonoid",
        "fct-type": "function",
        "title": "throwMonoid"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Asynchronous Strict",
        "module": "Control.Monad.Exception.Asynchronous.Strict",
        "name": "throwMonoid",
        "normalized": "a-\u003eExceptional a b",
        "package": "explicit-exception",
        "partial": "Monoid",
        "signature": "e-\u003eExceptional e a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#v:throwMonoidT",
      "description": {
        "fct-module": "Control.Monad.Exception.Asynchronous.Strict",
        "fct-package": "explicit-exception",
        "fct-signature": "e -\u003e ExceptionalT e m a",
        "fct-source": "src/Control-Monad-Exception-Asynchronous-Strict.html#throwMonoidT",
        "fct-type": "function",
        "title": "throwMonoidT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Asynchronous Strict",
        "module": "Control.Monad.Exception.Asynchronous.Strict",
        "name": "throwMonoidT",
        "normalized": "a-\u003eExceptionalT a b c",
        "package": "explicit-exception",
        "partial": "Monoid",
        "signature": "e-\u003eExceptionalT e m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#v:toSynchronous",
      "description": {
        "fct-module": "Control.Monad.Exception.Asynchronous.Strict",
        "fct-package": "explicit-exception",
        "fct-signature": "Exceptional e a -\u003e Exceptional e a",
        "fct-source": "src/Control-Monad-Exception-Asynchronous-Strict.html#toSynchronous",
        "fct-type": "function",
        "title": "toSynchronous"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Asynchronous Strict",
        "module": "Control.Monad.Exception.Asynchronous.Strict",
        "name": "toSynchronous",
        "normalized": "Exceptional a b-\u003eExceptional a b",
        "package": "explicit-exception",
        "partial": "Synchronous",
        "signature": "Exceptional e a-\u003eExceptional e a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#v:traverse",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eFoldable\u003c/code\u003e instance would allow to strip off the exception too easily.\n\u003c/p\u003e\u003cp\u003eI like the methods of \u003ccode\u003eTraversable\u003c/code\u003e, but \u003ccode\u003eTraversable\u003c/code\u003e instance requires \u003ccode\u003eFoldable\u003c/code\u003e instance.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception.Asynchronous.Strict",
        "fct-package": "explicit-exception",
        "fct-signature": "(a -\u003e f b) -\u003e Exceptional e a -\u003e f (Exceptional e b)",
        "fct-source": "src/Control-Monad-Exception-Asynchronous-Strict.html#traverse",
        "fct-type": "function",
        "title": "traverse"
      },
      "index": {
        "description": "Foldable instance would allow to strip off the exception too easily like the methods of Traversable but Traversable instance requires Foldable instance",
        "hierarchy": "Control Monad Exception Asynchronous Strict",
        "module": "Control.Monad.Exception.Asynchronous.Strict",
        "name": "traverse",
        "normalized": "(a-\u003eb c)-\u003eExceptional d a-\u003eb(Exceptional d c)",
        "package": "explicit-exception",
        "partial": "",
        "signature": "(a-\u003ef b)-\u003eExceptional e a-\u003ef(Exceptional e b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous-Strict.html#v:zipWith",
      "description": {
        "fct-descr": "\u003cp\u003eThis is an example for application specific handling of result values.\nAssume you obtain two lazy lists say from \u003ccode\u003e\u003ca\u003ereadFile\u003c/a\u003e\u003c/code\u003e\nand you want to zip their contents.\nIf one of the stream readers emits an exception,\nwe quit with that exception.\nIf both streams have throw an exception at the same file position,\nthe exception of the first stream is propagated.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception.Asynchronous.Strict",
        "fct-package": "explicit-exception",
        "fct-signature": "(a -\u003e b -\u003e c) -\u003e Exceptional e [a] -\u003e Exceptional e [b] -\u003e Exceptional e [c]",
        "fct-source": "src/Control-Monad-Exception-Asynchronous-Strict.html#zipWith",
        "fct-type": "function",
        "title": "zipWith"
      },
      "index": {
        "description": "This is an example for application specific handling of result values Assume you obtain two lazy lists say from readFile and you want to zip their contents If one of the stream readers emits an exception we quit with that exception If both streams have throw an exception at the same file position the exception of the first stream is propagated",
        "hierarchy": "Control Monad Exception Asynchronous Strict",
        "module": "Control.Monad.Exception.Asynchronous.Strict",
        "name": "zipWith",
        "normalized": "(a-\u003eb-\u003ec)-\u003eExceptional d[a]-\u003eExceptional d[b]-\u003eExceptional d[c]",
        "package": "explicit-exception",
        "partial": "With",
        "signature": "(a-\u003eb-\u003ec)-\u003eExceptional e[a]-\u003eExceptional e[b]-\u003eExceptional e[c]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Asynchronous.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAsynchronous exceptions can occur during the construction of a lazy data structure.\nThey are represented by a lazy data structure itself.\n\u003c/p\u003e\u003cp\u003eThis module re-exports the type with lazy combinators.\n\u003c/p\u003e\u003cp\u003eTODO:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Is the Null type appropriate anywhere?\n  Should it be better a Monoid type with mempty?\n  Shall Monoid.mempty be the default, or functions with explicit default values?\n\u003c/li\u003e\u003cli\u003e Shall we replace Monad constraint by Functor constraint,\n  where we only need liftM?\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Exception.Asynchronous",
        "fct-package": "explicit-exception",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Exception-Asynchronous.html",
        "fct-type": "module",
        "title": "Asynchronous"
      },
      "index": {
        "description": "Asynchronous exceptions can occur during the construction of lazy data structure They are represented by lazy data structure itself This module re-exports the type with lazy combinators TODO Is the Null type appropriate anywhere Should it be better Monoid type with mempty Shall Monoid.mempty be the default or functions with explicit default values Shall we replace Monad constraint by Functor constraint where we only need liftM",
        "hierarchy": "Control Monad Exception Asynchronous",
        "module": "Control.Monad.Exception.Asynchronous",
        "name": "Asynchronous",
        "normalized": "",
        "package": "explicit-exception",
        "partial": "Asynchronous",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSynchronous exceptions immediately abort a series of computations.\nWe provide monads for describing this behaviour.\nIn contrast to ErrorT from \u003ccode\u003emtl\u003c/code\u003e or \u003ccode\u003etransformers\u003c/code\u003e package\nwe do not pose restrictions on the exception type.\n\u003c/p\u003e\u003cp\u003eHow to tell, that a function can possibly throw more than one (kind of) exception?\n\u003c/p\u003e\u003cp\u003eIf you would use the exception type \u003ccode\u003e(Either ParserException IOError)\u003c/code\u003e\nthen this is different from \u003ccode\u003e(Either IOError ParserException)\u003c/code\u003e.\nThus we recommned using type classes for exceptions.\nThen you can use one type containing all exceptions in an application,\nbut the type signature still tells which exceptions are actually possible.\nExamples:\n\u003c/p\u003e\u003cpre\u003e parser :: ParserException e =\u003e ExceptionalT e ParserMonad a\n\n getLine :: IOException e =\u003e ExceptionalT e IO String\n\n fileParser :: (ParserException e, IOException e) =\u003e ExceptionalT e IO String\n\u003c/pre\u003e\u003cp\u003eUnfortunately, this way you cannot remove single exceptions\nfrom the constraints by catching them.\nYou can only remove all of them using \u003ccode\u003e\u003ca\u003eresolve\u003c/a\u003e\u003c/code\u003e or none.\nFor a more advanced approach,\nthat allows removing exceptions constraints\nby some non-Haskell-98 type hackery,\nsee the exception package by Joseph Iborra.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Exception.Synchronous",
        "fct-package": "explicit-exception",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Exception-Synchronous.html",
        "fct-type": "module",
        "title": "Synchronous"
      },
      "index": {
        "description": "Synchronous exceptions immediately abort series of computations We provide monads for describing this behaviour In contrast to ErrorT from mtl or transformers package we do not pose restrictions on the exception type How to tell that function can possibly throw more than one kind of exception If you would use the exception type Either ParserException IOError then this is different from Either IOError ParserException Thus we recommned using type classes for exceptions Then you can use one type containing all exceptions in an application but the type signature still tells which exceptions are actually possible Examples parser ParserException ExceptionalT ParserMonad getLine IOException ExceptionalT IO String fileParser ParserException IOException ExceptionalT IO String Unfortunately this way you cannot remove single exceptions from the constraints by catching them You can only remove all of them using resolve or none For more advanced approach that allows removing exceptions constraints by some non-Haskell-98 type hackery see the exception package by Joseph Iborra",
        "hierarchy": "Control Monad Exception Synchronous",
        "module": "Control.Monad.Exception.Synchronous",
        "name": "Synchronous",
        "normalized": "",
        "package": "explicit-exception",
        "partial": "Synchronous",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#t:Exceptional",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e, but explicitly intended for handling of exceptional results.\nIn contrast to \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e we do not support \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e.\nCalling \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e in the \u003ccode\u003e\u003ca\u003eExceptional\u003c/a\u003e\u003c/code\u003e monad is an error.\nThis way, we do not require that an exception can be derived from a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e,\nyet, we require no constraint on the exception type at all.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception.Synchronous",
        "fct-package": "explicit-exception",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-Exception-Synchronous.html#Exceptional",
        "fct-type": "data",
        "title": "Exceptional"
      },
      "index": {
        "description": "Like Either but explicitly intended for handling of exceptional results In contrast to Either we do not support fail Calling fail in the Exceptional monad is an error This way we do not require that an exception can be derived from String yet we require no constraint on the exception type at all",
        "hierarchy": "Control Monad Exception Synchronous",
        "module": "Control.Monad.Exception.Synchronous",
        "name": "Exceptional",
        "normalized": "",
        "package": "explicit-exception",
        "partial": "Exceptional",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#t:ExceptionalT",
      "description": {
        "fct-descr": "\u003cp\u003elike ErrorT, but ExceptionalT is the better name in order to distinguish from real (programming) errors\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception.Synchronous",
        "fct-package": "explicit-exception",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Monad-Exception-Synchronous.html#ExceptionalT",
        "fct-type": "newtype",
        "title": "ExceptionalT"
      },
      "index": {
        "description": "like ErrorT but ExceptionalT is the better name in order to distinguish from real programming errors",
        "hierarchy": "Control Monad Exception Synchronous",
        "module": "Control.Monad.Exception.Synchronous",
        "name": "ExceptionalT",
        "normalized": "",
        "package": "explicit-exception",
        "partial": "Exceptional",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#v:Exception",
      "description": {
        "fct-module": "Control.Monad.Exception.Synchronous",
        "fct-package": "explicit-exception",
        "fct-signature": "Exception e",
        "fct-source": "src/Control-Monad-Exception-Synchronous.html#Exceptional",
        "fct-type": "function",
        "title": "Exception"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Synchronous",
        "module": "Control.Monad.Exception.Synchronous",
        "name": "Exception",
        "normalized": "",
        "package": "explicit-exception",
        "partial": "Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#v:ExceptionalT",
      "description": {
        "fct-module": "Control.Monad.Exception.Synchronous",
        "fct-package": "explicit-exception",
        "fct-signature": "ExceptionalT",
        "fct-source": "src/Control-Monad-Exception-Synchronous.html#ExceptionalT",
        "fct-type": "function",
        "title": "ExceptionalT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Synchronous",
        "module": "Control.Monad.Exception.Synchronous",
        "name": "ExceptionalT",
        "normalized": "",
        "package": "explicit-exception",
        "partial": "Exceptional",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#v:Success",
      "description": {
        "fct-module": "Control.Monad.Exception.Synchronous",
        "fct-package": "explicit-exception",
        "fct-signature": "Success a",
        "fct-source": "src/Control-Monad-Exception-Synchronous.html#Exceptional",
        "fct-type": "function",
        "title": "Success"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Synchronous",
        "module": "Control.Monad.Exception.Synchronous",
        "name": "Success",
        "normalized": "",
        "package": "explicit-exception",
        "partial": "Success",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#v:assert",
      "description": {
        "fct-module": "Control.Monad.Exception.Synchronous",
        "fct-package": "explicit-exception",
        "fct-signature": "e -\u003e Bool -\u003e Exceptional e ()",
        "fct-source": "src/Control-Monad-Exception-Synchronous.html#assert",
        "fct-type": "function",
        "title": "assert"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Synchronous",
        "module": "Control.Monad.Exception.Synchronous",
        "name": "assert",
        "normalized": "a-\u003eBool-\u003eExceptional a()",
        "package": "explicit-exception",
        "partial": "",
        "signature": "e-\u003eBool-\u003eExceptional e()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#v:assertT",
      "description": {
        "fct-module": "Control.Monad.Exception.Synchronous",
        "fct-package": "explicit-exception",
        "fct-signature": "e -\u003e Bool -\u003e ExceptionalT e m ()",
        "fct-source": "src/Control-Monad-Exception-Synchronous.html#assertT",
        "fct-type": "function",
        "title": "assertT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Synchronous",
        "module": "Control.Monad.Exception.Synchronous",
        "name": "assertT",
        "normalized": "a-\u003eBool-\u003eExceptionalT a b()",
        "package": "explicit-exception",
        "partial": "",
        "signature": "e-\u003eBool-\u003eExceptionalT e m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#v:bracketT",
      "description": {
        "fct-descr": "\u003cp\u003eIf the enclosed monad has custom exception facilities,\nthey could skip the cleanup code.\nMake sure, that this cannot happen by choosing an appropriate monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception.Synchronous",
        "fct-package": "explicit-exception",
        "fct-signature": "ExceptionalT e m h -\u003e (h -\u003e ExceptionalT e m ()) -\u003e (h -\u003e ExceptionalT e m a) -\u003e ExceptionalT e m a",
        "fct-source": "src/Control-Monad-Exception-Synchronous.html#bracketT",
        "fct-type": "function",
        "title": "bracketT"
      },
      "index": {
        "description": "If the enclosed monad has custom exception facilities they could skip the cleanup code Make sure that this cannot happen by choosing an appropriate monad",
        "hierarchy": "Control Monad Exception Synchronous",
        "module": "Control.Monad.Exception.Synchronous",
        "name": "bracketT",
        "normalized": "ExceptionalT a b c-\u003e(c-\u003eExceptionalT a b())-\u003e(c-\u003eExceptionalT a b d)-\u003eExceptionalT a b d",
        "package": "explicit-exception",
        "partial": "",
        "signature": "ExceptionalT e m h-\u003e(h-\u003eExceptionalT e m())-\u003e(h-\u003eExceptionalT e m a)-\u003eExceptionalT e m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#v:catch",
      "description": {
        "fct-module": "Control.Monad.Exception.Synchronous",
        "fct-package": "explicit-exception",
        "fct-signature": "Exceptional e0 a -\u003e (e0 -\u003e Exceptional e1 a) -\u003e Exceptional e1 a",
        "fct-source": "src/Control-Monad-Exception-Synchronous.html#catch",
        "fct-type": "function",
        "title": "catch"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Synchronous",
        "module": "Control.Monad.Exception.Synchronous",
        "name": "catch",
        "normalized": "Exceptional a b-\u003e(a-\u003eExceptional a b)-\u003eExceptional a b",
        "package": "explicit-exception",
        "partial": "",
        "signature": "Exceptional e a-\u003e(e-\u003eExceptional e a)-\u003eExceptional e a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#v:catchT",
      "description": {
        "fct-module": "Control.Monad.Exception.Synchronous",
        "fct-package": "explicit-exception",
        "fct-signature": "ExceptionalT e0 m a -\u003e (e0 -\u003e ExceptionalT e1 m a) -\u003e ExceptionalT e1 m a",
        "fct-source": "src/Control-Monad-Exception-Synchronous.html#catchT",
        "fct-type": "function",
        "title": "catchT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Synchronous",
        "module": "Control.Monad.Exception.Synchronous",
        "name": "catchT",
        "normalized": "ExceptionalT a b c-\u003e(a-\u003eExceptionalT a b c)-\u003eExceptionalT a b c",
        "package": "explicit-exception",
        "partial": "",
        "signature": "ExceptionalT e m a-\u003e(e-\u003eExceptionalT e m a)-\u003eExceptionalT e m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#v:force",
      "description": {
        "fct-descr": "\u003cp\u003eIf you are sure that the value is always a \u003ccode\u003e\u003ca\u003eSuccess\u003c/a\u003e\u003c/code\u003e\nyou can tell that the run-time system\nthus making your program lazy.\nHowever, try to avoid this function by using \u003ccode\u003e\u003ca\u003ecatch\u003c/a\u003e\u003c/code\u003e and friends,\nsince this function is partial.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception.Synchronous",
        "fct-package": "explicit-exception",
        "fct-signature": "Exceptional e a -\u003e Exceptional e a",
        "fct-source": "src/Control-Monad-Exception-Synchronous.html#force",
        "fct-type": "function",
        "title": "force"
      },
      "index": {
        "description": "If you are sure that the value is always Success you can tell that the run-time system thus making your program lazy However try to avoid this function by using catch and friends since this function is partial",
        "hierarchy": "Control Monad Exception Synchronous",
        "module": "Control.Monad.Exception.Synchronous",
        "name": "force",
        "normalized": "Exceptional a b-\u003eExceptional a b",
        "package": "explicit-exception",
        "partial": "",
        "signature": "Exceptional e a-\u003eExceptional e a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#v:forceT",
      "description": {
        "fct-descr": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003eforce\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception.Synchronous",
        "fct-package": "explicit-exception",
        "fct-signature": "ExceptionalT e m a -\u003e ExceptionalT e m a",
        "fct-source": "src/Control-Monad-Exception-Synchronous.html#forceT",
        "fct-type": "function",
        "title": "forceT"
      },
      "index": {
        "description": "see force",
        "hierarchy": "Control Monad Exception Synchronous",
        "module": "Control.Monad.Exception.Synchronous",
        "name": "forceT",
        "normalized": "ExceptionalT a b c-\u003eExceptionalT a b c",
        "package": "explicit-exception",
        "partial": "",
        "signature": "ExceptionalT e m a-\u003eExceptionalT e m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#v:fromEither",
      "description": {
        "fct-module": "Control.Monad.Exception.Synchronous",
        "fct-package": "explicit-exception",
        "fct-signature": "Either e a -\u003e Exceptional e a",
        "fct-source": "src/Control-Monad-Exception-Synchronous.html#fromEither",
        "fct-type": "function",
        "title": "fromEither"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Synchronous",
        "module": "Control.Monad.Exception.Synchronous",
        "name": "fromEither",
        "normalized": "Either a b-\u003eExceptional a b",
        "package": "explicit-exception",
        "partial": "Either",
        "signature": "Either e a-\u003eExceptional e a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#v:fromEitherT",
      "description": {
        "fct-module": "Control.Monad.Exception.Synchronous",
        "fct-package": "explicit-exception",
        "fct-signature": "m (Either e a) -\u003e ExceptionalT e m a",
        "fct-source": "src/Control-Monad-Exception-Synchronous.html#fromEitherT",
        "fct-type": "function",
        "title": "fromEitherT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Synchronous",
        "module": "Control.Monad.Exception.Synchronous",
        "name": "fromEitherT",
        "normalized": "a(Either b c)-\u003eExceptionalT b a c",
        "package": "explicit-exception",
        "partial": "Either",
        "signature": "m(Either e a)-\u003eExceptionalT e m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#v:fromErrorT",
      "description": {
        "fct-module": "Control.Monad.Exception.Synchronous",
        "fct-package": "explicit-exception",
        "fct-signature": "ErrorT e m a -\u003e ExceptionalT e m a",
        "fct-source": "src/Control-Monad-Exception-Synchronous.html#fromErrorT",
        "fct-type": "function",
        "title": "fromErrorT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Synchronous",
        "module": "Control.Monad.Exception.Synchronous",
        "name": "fromErrorT",
        "normalized": "ErrorT a b c-\u003eExceptionalT a b c",
        "package": "explicit-exception",
        "partial": "Error",
        "signature": "ErrorT e m a-\u003eExceptionalT e m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#v:fromExitCode",
      "description": {
        "fct-module": "Control.Monad.Exception.Synchronous",
        "fct-package": "explicit-exception",
        "fct-signature": "ExitCode -\u003e Exceptional Int ()",
        "fct-source": "src/Control-Monad-Exception-Synchronous.html#fromExitCode",
        "fct-type": "function",
        "title": "fromExitCode"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Synchronous",
        "module": "Control.Monad.Exception.Synchronous",
        "name": "fromExitCode",
        "normalized": "ExitCode-\u003eExceptional Int()",
        "package": "explicit-exception",
        "partial": "Exit Code",
        "signature": "ExitCode-\u003eExceptional Int()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#v:fromExitCodeT",
      "description": {
        "fct-module": "Control.Monad.Exception.Synchronous",
        "fct-package": "explicit-exception",
        "fct-signature": "m ExitCode -\u003e ExceptionalT Int m ()",
        "fct-source": "src/Control-Monad-Exception-Synchronous.html#fromExitCodeT",
        "fct-type": "function",
        "title": "fromExitCodeT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Synchronous",
        "module": "Control.Monad.Exception.Synchronous",
        "name": "fromExitCodeT",
        "normalized": "a ExitCode-\u003eExceptionalT Int a()",
        "package": "explicit-exception",
        "partial": "Exit Code",
        "signature": "m ExitCode-\u003eExceptionalT Int m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#v:fromMaybe",
      "description": {
        "fct-module": "Control.Monad.Exception.Synchronous",
        "fct-package": "explicit-exception",
        "fct-signature": "e -\u003e Maybe a -\u003e Exceptional e a",
        "fct-source": "src/Control-Monad-Exception-Synchronous.html#fromMaybe",
        "fct-type": "function",
        "title": "fromMaybe"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Synchronous",
        "module": "Control.Monad.Exception.Synchronous",
        "name": "fromMaybe",
        "normalized": "a-\u003eMaybe b-\u003eExceptional a b",
        "package": "explicit-exception",
        "partial": "Maybe",
        "signature": "e-\u003eMaybe a-\u003eExceptional e a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#v:fromMaybeT",
      "description": {
        "fct-module": "Control.Monad.Exception.Synchronous",
        "fct-package": "explicit-exception",
        "fct-signature": "e -\u003e MaybeT m a -\u003e ExceptionalT e m a",
        "fct-source": "src/Control-Monad-Exception-Synchronous.html#fromMaybeT",
        "fct-type": "function",
        "title": "fromMaybeT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Synchronous",
        "module": "Control.Monad.Exception.Synchronous",
        "name": "fromMaybeT",
        "normalized": "a-\u003eMaybeT b c-\u003eExceptionalT a b c",
        "package": "explicit-exception",
        "partial": "Maybe",
        "signature": "e-\u003eMaybeT m a-\u003eExceptionalT e m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#v:getExceptionNull",
      "description": {
        "fct-descr": "\u003cp\u003euseful in connection with \u003ccode\u003e\u003ca\u003econtinue\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception.Synchronous",
        "fct-package": "explicit-exception",
        "fct-signature": "Exceptional e () -\u003e Maybe e",
        "fct-source": "src/Control-Monad-Exception-Synchronous.html#getExceptionNull",
        "fct-type": "function",
        "title": "getExceptionNull"
      },
      "index": {
        "description": "useful in connection with continue",
        "hierarchy": "Control Monad Exception Synchronous",
        "module": "Control.Monad.Exception.Synchronous",
        "name": "getExceptionNull",
        "normalized": "Exceptional a()-\u003eMaybe a",
        "package": "explicit-exception",
        "partial": "Exception Null",
        "signature": "Exceptional e()-\u003eMaybe e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#v:manyMonoidT",
      "description": {
        "fct-module": "Control.Monad.Exception.Synchronous",
        "fct-package": "explicit-exception",
        "fct-signature": "(e0 -\u003e Maybe e1)-\u003e ExceptionalT e0 m a-\u003e ExceptionalT e1 m a",
        "fct-type": "function",
        "title": "manyMonoidT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Synchronous",
        "module": "Control.Monad.Exception.Synchronous",
        "name": "manyMonoidT",
        "normalized": "(a-\u003eMaybe a)-\u003eExceptionalT a b c-\u003eExceptionalT a b c",
        "package": "explicit-exception",
        "partial": "Monoid",
        "signature": "(e-\u003eMaybe e)-\u003eExceptionalT e m a-\u003eExceptionalT e m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#v:manyT",
      "description": {
        "fct-descr": "\u003cp\u003eRepeat an action until an exception occurs.\nInitialize the result with \u003ccode\u003eempty\u003c/code\u003e and add new elements using \u003ccode\u003econs\u003c/code\u003e\n(e.g. \u003ccode\u003e[]\u003c/code\u003e and \u003ccode\u003e(:)\u003c/code\u003e).\nThe exception handler decides whether the terminating exception\nis re-raised (\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e) or catched (\u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception.Synchronous",
        "fct-package": "explicit-exception",
        "fct-signature": "(e0 -\u003e Maybe e1)-\u003e (a -\u003e b -\u003e b)-\u003e b-\u003e ExceptionalT e0 m a-\u003e ExceptionalT e1 m b",
        "fct-type": "function",
        "title": "manyT"
      },
      "index": {
        "description": "Repeat an action until an exception occurs Initialize the result with empty and add new elements using cons e.g and The exception handler decides whether the terminating exception is re-raised Just or catched Nothing",
        "hierarchy": "Control Monad Exception Synchronous",
        "module": "Control.Monad.Exception.Synchronous",
        "name": "manyT",
        "normalized": "(a-\u003eMaybe a)-\u003e(b-\u003ec-\u003ec)-\u003ec-\u003eExceptionalT a d b-\u003eExceptionalT a d c",
        "package": "explicit-exception",
        "partial": "",
        "signature": "(e-\u003eMaybe e)-\u003e(a-\u003eb-\u003eb)-\u003eb-\u003eExceptionalT e m a-\u003eExceptionalT e m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#v:mapException",
      "description": {
        "fct-module": "Control.Monad.Exception.Synchronous",
        "fct-package": "explicit-exception",
        "fct-signature": "(e0 -\u003e e1) -\u003e Exceptional e0 a -\u003e Exceptional e1 a",
        "fct-source": "src/Control-Monad-Exception-Synchronous.html#mapException",
        "fct-type": "function",
        "title": "mapException"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Synchronous",
        "module": "Control.Monad.Exception.Synchronous",
        "name": "mapException",
        "normalized": "(a-\u003ea)-\u003eExceptional a b-\u003eExceptional a b",
        "package": "explicit-exception",
        "partial": "Exception",
        "signature": "(e-\u003ee)-\u003eExceptional e a-\u003eExceptional e a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#v:mapExceptionT",
      "description": {
        "fct-module": "Control.Monad.Exception.Synchronous",
        "fct-package": "explicit-exception",
        "fct-signature": "(e0 -\u003e e1) -\u003e ExceptionalT e0 m a -\u003e ExceptionalT e1 m a",
        "fct-source": "src/Control-Monad-Exception-Synchronous.html#mapExceptionT",
        "fct-type": "function",
        "title": "mapExceptionT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Synchronous",
        "module": "Control.Monad.Exception.Synchronous",
        "name": "mapExceptionT",
        "normalized": "(a-\u003ea)-\u003eExceptionalT a b c-\u003eExceptionalT a b c",
        "package": "explicit-exception",
        "partial": "Exception",
        "signature": "(e-\u003ee)-\u003eExceptionalT e m a-\u003eExceptionalT e m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#v:mapExceptional",
      "description": {
        "fct-module": "Control.Monad.Exception.Synchronous",
        "fct-package": "explicit-exception",
        "fct-signature": "(e0 -\u003e e1) -\u003e (a -\u003e b) -\u003e Exceptional e0 a -\u003e Exceptional e1 b",
        "fct-source": "src/Control-Monad-Exception-Synchronous.html#mapExceptional",
        "fct-type": "function",
        "title": "mapExceptional"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Synchronous",
        "module": "Control.Monad.Exception.Synchronous",
        "name": "mapExceptional",
        "normalized": "(a-\u003ea)-\u003e(b-\u003ec)-\u003eExceptional a b-\u003eExceptional a c",
        "package": "explicit-exception",
        "partial": "Exceptional",
        "signature": "(e-\u003ee)-\u003e(a-\u003eb)-\u003eExceptional e a-\u003eExceptional e b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#v:mapExceptionalT",
      "description": {
        "fct-module": "Control.Monad.Exception.Synchronous",
        "fct-package": "explicit-exception",
        "fct-signature": "(m (Exceptional e0 a) -\u003e n (Exceptional e1 b)) -\u003e ExceptionalT e0 m a -\u003e ExceptionalT e1 n b",
        "fct-source": "src/Control-Monad-Exception-Synchronous.html#mapExceptionalT",
        "fct-type": "function",
        "title": "mapExceptionalT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Synchronous",
        "module": "Control.Monad.Exception.Synchronous",
        "name": "mapExceptionalT",
        "normalized": "(a(Exceptional b c)-\u003ed(Exceptional b e))-\u003eExceptionalT b a c-\u003eExceptionalT b d e",
        "package": "explicit-exception",
        "partial": "Exceptional",
        "signature": "(m(Exceptional e a)-\u003en(Exceptional e b))-\u003eExceptionalT e m a-\u003eExceptionalT e n b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#v:merge",
      "description": {
        "fct-descr": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003emergeT\u003c/a\u003e\u003c/code\u003e \n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception.Synchronous",
        "fct-package": "explicit-exception",
        "fct-signature": "Exceptional e (a -\u003e b) -\u003e Exceptional e a -\u003e Exceptional e b",
        "fct-source": "src/Control-Monad-Exception-Synchronous.html#merge",
        "fct-type": "function",
        "title": "merge"
      },
      "index": {
        "description": "see mergeT",
        "hierarchy": "Control Monad Exception Synchronous",
        "module": "Control.Monad.Exception.Synchronous",
        "name": "merge",
        "normalized": "Exceptional a(b-\u003ec)-\u003eExceptional a b-\u003eExceptional a c",
        "package": "explicit-exception",
        "partial": "",
        "signature": "Exceptional e(a-\u003eb)-\u003eExceptional e a-\u003eExceptional e b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#v:mergeT",
      "description": {
        "fct-descr": "\u003cp\u003eThis combines two actions similar to Applicative's \u003ccode\u003e\u003ca\u003e*\u003c/a\u003e\u003c/code\u003e.\nThe result action fails if one of the input action fails,\nbut both actions are executed.\nE.g. consider a compiler that emits all errors\nthat can be detected independently,\nbut eventually aborts if there is at least one error.\n\u003c/p\u003e\u003cp\u003eThe exception type \u003ccode\u003ee\u003c/code\u003e might be a list type,\nor an \u003ccode\u003eEndo\u003c/code\u003e type that implements a difflist.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception.Synchronous",
        "fct-package": "explicit-exception",
        "fct-signature": "ExceptionalT e m (a -\u003e b) -\u003e ExceptionalT e m a -\u003e ExceptionalT e m b",
        "fct-source": "src/Control-Monad-Exception-Synchronous.html#mergeT",
        "fct-type": "function",
        "title": "mergeT"
      },
      "index": {
        "description": "This combines two actions similar to Applicative The result action fails if one of the input action fails but both actions are executed E.g consider compiler that emits all errors that can be detected independently but eventually aborts if there is at least one error The exception type might be list type or an Endo type that implements difflist",
        "hierarchy": "Control Monad Exception Synchronous",
        "module": "Control.Monad.Exception.Synchronous",
        "name": "mergeT",
        "normalized": "ExceptionalT a b(c-\u003ed)-\u003eExceptionalT a b c-\u003eExceptionalT a b d",
        "package": "explicit-exception",
        "partial": "",
        "signature": "ExceptionalT e m(a-\u003eb)-\u003eExceptionalT e m a-\u003eExceptionalT e m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#v:resolve",
      "description": {
        "fct-module": "Control.Monad.Exception.Synchronous",
        "fct-package": "explicit-exception",
        "fct-signature": "(e -\u003e a) -\u003e Exceptional e a -\u003e a",
        "fct-source": "src/Control-Monad-Exception-Synchronous.html#resolve",
        "fct-type": "function",
        "title": "resolve"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Synchronous",
        "module": "Control.Monad.Exception.Synchronous",
        "name": "resolve",
        "normalized": "(a-\u003eb)-\u003eExceptional a b-\u003eb",
        "package": "explicit-exception",
        "partial": "",
        "signature": "(e-\u003ea)-\u003eExceptional e a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#v:resolveT",
      "description": {
        "fct-module": "Control.Monad.Exception.Synchronous",
        "fct-package": "explicit-exception",
        "fct-signature": "(e -\u003e m a) -\u003e ExceptionalT e m a -\u003e m a",
        "fct-source": "src/Control-Monad-Exception-Synchronous.html#resolveT",
        "fct-type": "function",
        "title": "resolveT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Synchronous",
        "module": "Control.Monad.Exception.Synchronous",
        "name": "resolveT",
        "normalized": "(a-\u003eb c)-\u003eExceptionalT a b c-\u003eb c",
        "package": "explicit-exception",
        "partial": "",
        "signature": "(e-\u003em a)-\u003eExceptionalT e m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#v:runExceptionalT",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Exception.Synchronous",
        "fct-package": "explicit-exception",
        "fct-signature": "m (Exceptional e a)",
        "fct-source": "src/Control-Monad-Exception-Synchronous.html#ExceptionalT",
        "fct-type": "function",
        "title": "runExceptionalT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Synchronous",
        "module": "Control.Monad.Exception.Synchronous",
        "name": "runExceptionalT",
        "normalized": "",
        "package": "explicit-exception",
        "partial": "Exceptional",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#v:switch",
      "description": {
        "fct-descr": "\u003cp\u003eCounterpart to \u003ccode\u003e\u003ca\u003eeither\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception.Synchronous",
        "fct-package": "explicit-exception",
        "fct-signature": "(e -\u003e b) -\u003e (a -\u003e b) -\u003e Exceptional e a -\u003e b",
        "fct-source": "src/Control-Monad-Exception-Synchronous.html#switch",
        "fct-type": "function",
        "title": "switch"
      },
      "index": {
        "description": "Counterpart to either for Either",
        "hierarchy": "Control Monad Exception Synchronous",
        "module": "Control.Monad.Exception.Synchronous",
        "name": "switch",
        "normalized": "(a-\u003eb)-\u003e(c-\u003eb)-\u003eExceptional a c-\u003eb",
        "package": "explicit-exception",
        "partial": "",
        "signature": "(e-\u003eb)-\u003e(a-\u003eb)-\u003eExceptional e a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#v:switchT",
      "description": {
        "fct-module": "Control.Monad.Exception.Synchronous",
        "fct-package": "explicit-exception",
        "fct-signature": "(e -\u003e m b) -\u003e (a -\u003e m b) -\u003e ExceptionalT e m a -\u003e m b",
        "fct-source": "src/Control-Monad-Exception-Synchronous.html#switchT",
        "fct-type": "function",
        "title": "switchT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Synchronous",
        "module": "Control.Monad.Exception.Synchronous",
        "name": "switchT",
        "normalized": "(a-\u003eb c)-\u003e(d-\u003eb c)-\u003eExceptionalT a b d-\u003eb c",
        "package": "explicit-exception",
        "partial": "",
        "signature": "(e-\u003em b)-\u003e(a-\u003em b)-\u003eExceptionalT e m a-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#v:throw",
      "description": {
        "fct-module": "Control.Monad.Exception.Synchronous",
        "fct-package": "explicit-exception",
        "fct-signature": "e -\u003e Exceptional e a",
        "fct-source": "src/Control-Monad-Exception-Synchronous.html#throw",
        "fct-type": "function",
        "title": "throw"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Synchronous",
        "module": "Control.Monad.Exception.Synchronous",
        "name": "throw",
        "normalized": "a-\u003eExceptional a b",
        "package": "explicit-exception",
        "partial": "",
        "signature": "e-\u003eExceptional e a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#v:throwT",
      "description": {
        "fct-module": "Control.Monad.Exception.Synchronous",
        "fct-package": "explicit-exception",
        "fct-signature": "e -\u003e ExceptionalT e m a",
        "fct-source": "src/Control-Monad-Exception-Synchronous.html#throwT",
        "fct-type": "function",
        "title": "throwT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Synchronous",
        "module": "Control.Monad.Exception.Synchronous",
        "name": "throwT",
        "normalized": "a-\u003eExceptionalT a b c",
        "package": "explicit-exception",
        "partial": "",
        "signature": "e-\u003eExceptionalT e m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#v:toEither",
      "description": {
        "fct-module": "Control.Monad.Exception.Synchronous",
        "fct-package": "explicit-exception",
        "fct-signature": "Exceptional e a -\u003e Either e a",
        "fct-source": "src/Control-Monad-Exception-Synchronous.html#toEither",
        "fct-type": "function",
        "title": "toEither"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Synchronous",
        "module": "Control.Monad.Exception.Synchronous",
        "name": "toEither",
        "normalized": "Exceptional a b-\u003eEither a b",
        "package": "explicit-exception",
        "partial": "Either",
        "signature": "Exceptional e a-\u003eEither e a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#v:toEitherT",
      "description": {
        "fct-module": "Control.Monad.Exception.Synchronous",
        "fct-package": "explicit-exception",
        "fct-signature": "ExceptionalT e m a -\u003e m (Either e a)",
        "fct-source": "src/Control-Monad-Exception-Synchronous.html#toEitherT",
        "fct-type": "function",
        "title": "toEitherT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Synchronous",
        "module": "Control.Monad.Exception.Synchronous",
        "name": "toEitherT",
        "normalized": "ExceptionalT a b c-\u003eb(Either a c)",
        "package": "explicit-exception",
        "partial": "Either",
        "signature": "ExceptionalT e m a-\u003em(Either e a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#v:toErrorT",
      "description": {
        "fct-module": "Control.Monad.Exception.Synchronous",
        "fct-package": "explicit-exception",
        "fct-signature": "ExceptionalT e m a -\u003e ErrorT e m a",
        "fct-source": "src/Control-Monad-Exception-Synchronous.html#toErrorT",
        "fct-type": "function",
        "title": "toErrorT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Synchronous",
        "module": "Control.Monad.Exception.Synchronous",
        "name": "toErrorT",
        "normalized": "ExceptionalT a b c-\u003eErrorT a b c",
        "package": "explicit-exception",
        "partial": "Error",
        "signature": "ExceptionalT e m a-\u003eErrorT e m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#v:toExitCode",
      "description": {
        "fct-module": "Control.Monad.Exception.Synchronous",
        "fct-package": "explicit-exception",
        "fct-signature": "Exceptional Int () -\u003e ExitCode",
        "fct-source": "src/Control-Monad-Exception-Synchronous.html#toExitCode",
        "fct-type": "function",
        "title": "toExitCode"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Synchronous",
        "module": "Control.Monad.Exception.Synchronous",
        "name": "toExitCode",
        "normalized": "Exceptional Int()-\u003eExitCode",
        "package": "explicit-exception",
        "partial": "Exit Code",
        "signature": "Exceptional Int()-\u003eExitCode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#v:toExitCodeT",
      "description": {
        "fct-module": "Control.Monad.Exception.Synchronous",
        "fct-package": "explicit-exception",
        "fct-signature": "ExceptionalT Int m () -\u003e m ExitCode",
        "fct-source": "src/Control-Monad-Exception-Synchronous.html#toExitCodeT",
        "fct-type": "function",
        "title": "toExitCodeT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Synchronous",
        "module": "Control.Monad.Exception.Synchronous",
        "name": "toExitCodeT",
        "normalized": "ExceptionalT Int a()-\u003ea ExitCode",
        "package": "explicit-exception",
        "partial": "Exit Code",
        "signature": "ExceptionalT Int m()-\u003em ExitCode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#v:toMaybe",
      "description": {
        "fct-module": "Control.Monad.Exception.Synchronous",
        "fct-package": "explicit-exception",
        "fct-signature": "Exceptional e a -\u003e Maybe a",
        "fct-source": "src/Control-Monad-Exception-Synchronous.html#toMaybe",
        "fct-type": "function",
        "title": "toMaybe"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Synchronous",
        "module": "Control.Monad.Exception.Synchronous",
        "name": "toMaybe",
        "normalized": "Exceptional a b-\u003eMaybe b",
        "package": "explicit-exception",
        "partial": "Maybe",
        "signature": "Exceptional e a-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#v:toMaybeT",
      "description": {
        "fct-module": "Control.Monad.Exception.Synchronous",
        "fct-package": "explicit-exception",
        "fct-signature": "ExceptionalT e m a -\u003e MaybeT m a",
        "fct-source": "src/Control-Monad-Exception-Synchronous.html#toMaybeT",
        "fct-type": "function",
        "title": "toMaybeT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Synchronous",
        "module": "Control.Monad.Exception.Synchronous",
        "name": "toMaybeT",
        "normalized": "ExceptionalT a b c-\u003eMaybeT b c",
        "package": "explicit-exception",
        "partial": "Maybe",
        "signature": "ExceptionalT e m a-\u003eMaybeT m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/explicit-exception/docs/Control-Monad-Exception-Synchronous.html#v:tryT",
      "description": {
        "fct-module": "Control.Monad.Exception.Synchronous",
        "fct-package": "explicit-exception",
        "fct-signature": "ExceptionalT e m a -\u003e m (Exceptional e a)",
        "fct-source": "src/Control-Monad-Exception-Synchronous.html#tryT",
        "fct-type": "function",
        "title": "tryT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Synchronous",
        "module": "Control.Monad.Exception.Synchronous",
        "name": "tryT",
        "normalized": "ExceptionalT a b c-\u003eb(Exceptional a c)",
        "package": "explicit-exception",
        "partial": "",
        "signature": "ExceptionalT e m a-\u003em(Exceptional e a)"
      }
    }
  }
]