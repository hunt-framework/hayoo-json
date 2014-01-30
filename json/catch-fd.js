[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/catch-fd/docs/Control-Monad-Catch-Class.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003eComputation type:\u003c/dt\u003e\u003cdd\u003e\nComputations which may fail or throw exceptions; and computations which may\ncatch failures and thrown exceptions.\n\u003c/dd\u003e\u003cdt\u003eBinding strategy:\u003c/dt\u003e\u003cdd\u003e\nFailure records information about the cause/location of the failure.  Failure\nvalues bypass the bound function; other values are used as inputs to the bound\nfunction (same as \u003ccode\u003e\u003ccode\u003e\u003ca\u003eMonadError\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e).\n\u003c/dd\u003e\u003cdt\u003eUseful for:\u003c/dt\u003e\u003cdd\u003e\nBuilding computations from sequences of functions that may fail; and using\nexception handling to structure error handling.  The handler may or may not\nthrow an exception, which does not have to be of the same type as the original\nthrown exception (see \u003ccode\u003e\u003ccode\u003e\u003ca\u003emapE\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e).\n\u003c/dd\u003e\u003cdt\u003eZero and plus:\u003c/dt\u003e\u003cdd\u003e\nZero is represented by an empty error, and the plus operation executes its\nsecond argument if the first fails (same as\n\u003ccode\u003e\u003ccode\u003e\u003ca\u003eMonadError\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e).\n\u003c/dd\u003e\u003cdt\u003eExample type:\u003c/dt\u003e\u003cdd\u003e\n\u003ccode\u003e\u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eString\u003c/code\u003e a\u003c/code\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eThe Throw and Catch monads.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Catch.Class",
        "fct-package": "catch-fd",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Catch-Class.html",
        "fct-type": "module",
        "title": "Class"
      },
      "index": {
        "description": "Computation type Computations which may fail or throw exceptions and computations which may catch failures and thrown exceptions Binding strategy Failure records information about the cause location of the failure Failure values bypass the bound function other values are used as inputs to the bound function same as MonadError Useful for Building computations from sequences of functions that may fail and using exception handling to structure error handling The handler may or may not throw an exception which does not have to be of the same type as the original thrown exception see mapE Zero and plus Zero is represented by an empty error and the plus operation executes its second argument if the first fails same as MonadError Example type Either String The Throw and Catch monads",
        "hierarchy": "Control Monad Catch Class",
        "module": "Control.Monad.Catch.Class",
        "name": "Class",
        "normalized": "",
        "package": "catch-fd",
        "partial": "Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/catch-fd/docs/Control-Monad-Catch-Class.html#t:MonadCatch",
      "description": {
        "fct-descr": "\u003cp\u003eThe strategy of combining computations that can handle thrown exceptions,\nas well as throwing exceptions in the original computation.\n\u003c/p\u003e\u003cp\u003eIs parameterized over the type of error information and the original monad type\nconstructor, as well as the handler monad type constructor.  The handler monad\ntype constructor commonly differs from the original monad type constructor due\nto a change in the type of the error information.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Catch.Class",
        "fct-package": "catch-fd",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Catch-Class.html#MonadCatch",
        "fct-type": "class",
        "title": "MonadCatch"
      },
      "index": {
        "description": "The strategy of combining computations that can handle thrown exceptions as well as throwing exceptions in the original computation Is parameterized over the type of error information and the original monad type constructor as well as the handler monad type constructor The handler monad type constructor commonly differs from the original monad type constructor due to change in the type of the error information",
        "hierarchy": "Control Monad Catch Class",
        "module": "Control.Monad.Catch.Class",
        "name": "MonadCatch",
        "normalized": "",
        "package": "catch-fd",
        "partial": "Monad Catch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/catch-fd/docs/Control-Monad-Catch-Class.html#t:MonadThrow",
      "description": {
        "fct-descr": "\u003cp\u003eThe strategy of combining computations that can throw exceptions.\n\u003c/p\u003e\u003cp\u003eIs parameterized over the type of error information and the monad type\nconstructor.  It is common to use \u003ccode\u003e\u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eString\u003c/code\u003e\u003c/code\u003e.  In some cases you will\nhave to define an instance of \u003ccode\u003e\u003ccode\u003e\u003ca\u003eMonadThrow\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, though rarely a definition of\n\u003ccode\u003e\u003ccode\u003e\u003ca\u003ethrow\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Catch.Class",
        "fct-package": "catch-fd",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Catch-Class.html#MonadThrow",
        "fct-type": "class",
        "title": "MonadThrow"
      },
      "index": {
        "description": "The strategy of combining computations that can throw exceptions Is parameterized over the type of error information and the monad type constructor It is common to use Either String In some cases you will have to define an instance of MonadThrow though rarely definition of throw",
        "hierarchy": "Control Monad Catch Class",
        "module": "Control.Monad.Catch.Class",
        "name": "MonadThrow",
        "normalized": "",
        "package": "catch-fd",
        "partial": "Monad Throw",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/catch-fd/docs/Control-Monad-Catch-Class.html#v:catch",
      "description": {
        "fct-descr": "\u003cp\u003eA handler function to handle thrown values and return to normal execution.\n  A common idiom is:\n\u003c/p\u003e\u003cpre\u003e do { action1; action2; action3 } `catch` handler\n\u003c/pre\u003e\u003cp\u003ewhere the \u003ccode\u003eaction\u003c/code\u003e functions can call \u003ccode\u003e\u003ca\u003ethrow\u003c/a\u003e\u003c/code\u003e.\n  Note that \u003ccode\u003ehandler\u003c/code\u003e and the do-block must have the same return type.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Catch.Class",
        "fct-package": "catch-fd",
        "fct-signature": "m a -\u003e (e -\u003e n a) -\u003e n a",
        "fct-source": "src/Control-Monad-Catch-Class.html#catch",
        "fct-type": "method",
        "title": "catch"
      },
      "index": {
        "description": "handler function to handle thrown values and return to normal execution common idiom is do action1 action2 action3 catch handler where the action functions can call throw Note that handler and the do-block must have the same return type",
        "hierarchy": "Control Monad Catch Class",
        "module": "Control.Monad.Catch.Class",
        "name": "catch",
        "normalized": "a b-\u003e(c-\u003ed b)-\u003ed b",
        "package": "catch-fd",
        "partial": "",
        "signature": "m a-\u003e(e-\u003en a)-\u003en a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/catch-fd/docs/Control-Monad-Catch-Class.html#v:mapE",
      "description": {
        "fct-descr": "\u003cp\u003eMap the thrown value using the given function\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Catch.Class",
        "fct-package": "catch-fd",
        "fct-signature": "(e -\u003e e') -\u003e m a -\u003e n a",
        "fct-source": "src/Control-Monad-Catch-Class.html#mapE",
        "fct-type": "function",
        "title": "mapE"
      },
      "index": {
        "description": "Map the thrown value using the given function",
        "hierarchy": "Control Monad Catch Class",
        "module": "Control.Monad.Catch.Class",
        "name": "mapE",
        "normalized": "(a-\u003eb)-\u003ec d-\u003ee d",
        "package": "catch-fd",
        "partial": "",
        "signature": "(e-\u003ee')-\u003em a-\u003en a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/catch-fd/docs/Control-Monad-Catch-Class.html#v:throw",
      "description": {
        "fct-descr": "\u003cp\u003eIs used within a monadic computation to begin exception processing.  If\n  \u003ccode\u003e(\u003ccode\u003e\u003ca\u003eMonadThrow\u003c/a\u003e\u003c/code\u003e e n, \u003ccode\u003e\u003ca\u003eMonadTrans\u003c/a\u003e\u003c/code\u003e t) =\u003e t n ~ m\u003c/code\u003e, then \u003ccode\u003e\u003ccode\u003e\u003ca\u003ethrow\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e\n  \u003ccode\u003e\u003ca\u003ethrow\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e is the default definition.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Catch.Class",
        "fct-package": "catch-fd",
        "fct-signature": "e -\u003e m a",
        "fct-source": "src/Control-Monad-Catch-Class.html#throw",
        "fct-type": "method",
        "title": "throw"
      },
      "index": {
        "description": "Is used within monadic computation to begin exception processing If MonadThrow MonadTrans then throw lift throw is the default definition",
        "hierarchy": "Control Monad Catch Class",
        "module": "Control.Monad.Catch.Class",
        "name": "throw",
        "normalized": "a-\u003eb c",
        "package": "catch-fd",
        "partial": "",
        "signature": "e-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/catch-fd/docs/Control-Monad-Catch.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003eComputation type:\u003c/dt\u003e\u003cdd\u003e\nComputations which may fail or throw exceptions; and computations which may\ncatch failures and thrown exceptions.\n\u003c/dd\u003e\u003cdt\u003eBinding strategy:\u003c/dt\u003e\u003cdd\u003e\nFailure records information about the cause/location of the failure.  Failure\nvalues bypass the bound function; other values are used as inputs to the bound\nfunction (same as \u003ccode\u003e\u003ccode\u003e\u003ca\u003eMonadError\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e).\n\u003c/dd\u003e\u003cdt\u003eUseful for:\u003c/dt\u003e\u003cdd\u003e\nBuilding computations from sequences of functions that may fail; and using\nexception handling to structure error handling.  The handler may or may not\nthrow an exception, which does not have to be of the same type as the original\nthrown exception (see \u003ccode\u003e\u003ccode\u003e\u003ca\u003emapE\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e).\n\u003c/dd\u003e\u003cdt\u003eZero and plus:\u003c/dt\u003e\u003cdd\u003e\nZero is represented by an empty error, and the plus operation executes its\nsecond argument if the first fails (same as\n\u003ccode\u003e\u003ccode\u003e\u003ca\u003eMonadError\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e).\n\u003c/dd\u003e\u003cdt\u003eExample type:\u003c/dt\u003e\u003cdd\u003e\n\u003ccode\u003e\u003ccode\u003eEither\u003c/code\u003e \u003ccode\u003eString\u003c/code\u003e a\u003c/code\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eThe Throw and Catch monads.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Catch",
        "fct-package": "catch-fd",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Catch.html",
        "fct-type": "module",
        "title": "Catch"
      },
      "index": {
        "description": "Computation type Computations which may fail or throw exceptions and computations which may catch failures and thrown exceptions Binding strategy Failure records information about the cause location of the failure Failure values bypass the bound function other values are used as inputs to the bound function same as MonadError Useful for Building computations from sequences of functions that may fail and using exception handling to structure error handling The handler may or may not throw an exception which does not have to be of the same type as the original thrown exception see mapE Zero and plus Zero is represented by an empty error and the plus operation executes its second argument if the first fails same as MonadError Example type Either String The Throw and Catch monads",
        "hierarchy": "Control Monad Catch",
        "module": "Control.Monad.Catch",
        "name": "Catch",
        "normalized": "",
        "package": "catch-fd",
        "partial": "Catch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/catch-fd/docs/Control-Monad-Catch.html#t:MonadCatch",
      "description": {
        "fct-descr": "\u003cp\u003eThe strategy of combining computations that can handle thrown exceptions,\nas well as throwing exceptions in the original computation.\n\u003c/p\u003e\u003cp\u003eIs parameterized over the type of error information and the original monad type\nconstructor, as well as the handler monad type constructor.  The handler monad\ntype constructor commonly differs from the original monad type constructor due\nto a change in the type of the error information.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Catch",
        "fct-package": "catch-fd",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Catch-Class.html#MonadCatch",
        "fct-type": "class",
        "title": "MonadCatch"
      },
      "index": {
        "description": "The strategy of combining computations that can handle thrown exceptions as well as throwing exceptions in the original computation Is parameterized over the type of error information and the original monad type constructor as well as the handler monad type constructor The handler monad type constructor commonly differs from the original monad type constructor due to change in the type of the error information",
        "hierarchy": "Control Monad Catch",
        "module": "Control.Monad.Catch",
        "name": "MonadCatch",
        "normalized": "",
        "package": "catch-fd",
        "partial": "Monad Catch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/catch-fd/docs/Control-Monad-Catch.html#t:MonadError",
      "description": {
        "fct-module": "Control.Monad.Catch",
        "fct-package": "catch-fd",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-Catch.html#MonadError",
        "fct-type": "type",
        "title": "MonadError"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Catch",
        "module": "Control.Monad.Catch",
        "name": "MonadError",
        "normalized": "",
        "package": "catch-fd",
        "partial": "Monad Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/catch-fd/docs/Control-Monad-Catch.html#t:MonadThrow",
      "description": {
        "fct-descr": "\u003cp\u003eThe strategy of combining computations that can throw exceptions.\n\u003c/p\u003e\u003cp\u003eIs parameterized over the type of error information and the monad type\nconstructor.  It is common to use \u003ccode\u003e\u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eString\u003c/code\u003e\u003c/code\u003e.  In some cases you will\nhave to define an instance of \u003ccode\u003e\u003ccode\u003e\u003ca\u003eMonadThrow\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, though rarely a definition of\n\u003ccode\u003e\u003ccode\u003e\u003ca\u003ethrow\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Catch",
        "fct-package": "catch-fd",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Catch-Class.html#MonadThrow",
        "fct-type": "class",
        "title": "MonadThrow"
      },
      "index": {
        "description": "The strategy of combining computations that can throw exceptions Is parameterized over the type of error information and the monad type constructor It is common to use Either String In some cases you will have to define an instance of MonadThrow though rarely definition of throw",
        "hierarchy": "Control Monad Catch",
        "module": "Control.Monad.Catch",
        "name": "MonadThrow",
        "normalized": "",
        "package": "catch-fd",
        "partial": "Monad Throw",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/catch-fd/docs/Control-Monad-Catch.html#t:WrappedMonadCatch",
      "description": {
        "fct-module": "Control.Monad.Catch",
        "fct-package": "catch-fd",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Monad-Catch.html#WrappedMonadCatch",
        "fct-type": "newtype",
        "title": "WrappedMonadCatch"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Catch",
        "module": "Control.Monad.Catch",
        "name": "WrappedMonadCatch",
        "normalized": "",
        "package": "catch-fd",
        "partial": "Wrapped Monad Catch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/catch-fd/docs/Control-Monad-Catch.html#t:WrappedMonadError",
      "description": {
        "fct-module": "Control.Monad.Catch",
        "fct-package": "catch-fd",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Monad-Catch.html#WrappedMonadError",
        "fct-type": "newtype",
        "title": "WrappedMonadError"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Catch",
        "module": "Control.Monad.Catch",
        "name": "WrappedMonadError",
        "normalized": "",
        "package": "catch-fd",
        "partial": "Wrapped Monad Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/catch-fd/docs/Control-Monad-Catch.html#v:WrapMonadCatch",
      "description": {
        "fct-module": "Control.Monad.Catch",
        "fct-package": "catch-fd",
        "fct-signature": "WrapMonadCatch",
        "fct-source": "src/Control-Monad-Catch.html#WrappedMonadCatch",
        "fct-type": "function",
        "title": "WrapMonadCatch"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Catch",
        "module": "Control.Monad.Catch",
        "name": "WrapMonadCatch",
        "normalized": "",
        "package": "catch-fd",
        "partial": "Wrap Monad Catch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/catch-fd/docs/Control-Monad-Catch.html#v:WrapMonadError",
      "description": {
        "fct-module": "Control.Monad.Catch",
        "fct-package": "catch-fd",
        "fct-signature": "WrapMonadError",
        "fct-source": "src/Control-Monad-Catch.html#WrappedMonadError",
        "fct-type": "function",
        "title": "WrapMonadError"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Catch",
        "module": "Control.Monad.Catch",
        "name": "WrapMonadError",
        "normalized": "",
        "package": "catch-fd",
        "partial": "Wrap Monad Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/catch-fd/docs/Control-Monad-Catch.html#v:catch",
      "description": {
        "fct-descr": "\u003cp\u003eA handler function to handle thrown values and return to normal execution.\n  A common idiom is:\n\u003c/p\u003e\u003cpre\u003e do { action1; action2; action3 } `catch` handler\n\u003c/pre\u003e\u003cp\u003ewhere the \u003ccode\u003eaction\u003c/code\u003e functions can call \u003ccode\u003e\u003ca\u003ethrow\u003c/a\u003e\u003c/code\u003e.\n  Note that \u003ccode\u003ehandler\u003c/code\u003e and the do-block must have the same return type.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Catch",
        "fct-package": "catch-fd",
        "fct-signature": "m a -\u003e (e -\u003e n a) -\u003e n a",
        "fct-source": "src/Control-Monad-Catch-Class.html#catch",
        "fct-type": "method",
        "title": "catch"
      },
      "index": {
        "description": "handler function to handle thrown values and return to normal execution common idiom is do action1 action2 action3 catch handler where the action functions can call throw Note that handler and the do-block must have the same return type",
        "hierarchy": "Control Monad Catch",
        "module": "Control.Monad.Catch",
        "name": "catch",
        "normalized": "a b-\u003e(c-\u003ed b)-\u003ed b",
        "package": "catch-fd",
        "partial": "",
        "signature": "m a-\u003e(e-\u003en a)-\u003en a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/catch-fd/docs/Control-Monad-Catch.html#v:mapE",
      "description": {
        "fct-descr": "\u003cp\u003eMap the thrown value using the given function\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Catch",
        "fct-package": "catch-fd",
        "fct-signature": "(e -\u003e e') -\u003e m a -\u003e n a",
        "fct-source": "src/Control-Monad-Catch-Class.html#mapE",
        "fct-type": "function",
        "title": "mapE"
      },
      "index": {
        "description": "Map the thrown value using the given function",
        "hierarchy": "Control Monad Catch",
        "module": "Control.Monad.Catch",
        "name": "mapE",
        "normalized": "(a-\u003eb)-\u003ec d-\u003ee d",
        "package": "catch-fd",
        "partial": "",
        "signature": "(e-\u003ee')-\u003em a-\u003en a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/catch-fd/docs/Control-Monad-Catch.html#v:throw",
      "description": {
        "fct-descr": "\u003cp\u003eIs used within a monadic computation to begin exception processing.  If\n  \u003ccode\u003e(\u003ccode\u003e\u003ca\u003eMonadThrow\u003c/a\u003e\u003c/code\u003e e n, \u003ccode\u003e\u003ca\u003eMonadTrans\u003c/a\u003e\u003c/code\u003e t) =\u003e t n ~ m\u003c/code\u003e, then \u003ccode\u003e\u003ccode\u003e\u003ca\u003ethrow\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e\n  \u003ccode\u003e\u003ca\u003ethrow\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e is the default definition.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Catch",
        "fct-package": "catch-fd",
        "fct-signature": "e -\u003e m a",
        "fct-source": "src/Control-Monad-Catch-Class.html#throw",
        "fct-type": "method",
        "title": "throw"
      },
      "index": {
        "description": "Is used within monadic computation to begin exception processing If MonadThrow MonadTrans then throw lift throw is the default definition",
        "hierarchy": "Control Monad Catch",
        "module": "Control.Monad.Catch",
        "name": "throw",
        "normalized": "a-\u003eb c",
        "package": "catch-fd",
        "partial": "",
        "signature": "e-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/catch-fd/docs/Control-Monad-Catch.html#v:unwrapMonadCatch",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Catch",
        "fct-package": "catch-fd",
        "fct-signature": "m a",
        "fct-source": "src/Control-Monad-Catch.html#WrappedMonadCatch",
        "fct-type": "function",
        "title": "unwrapMonadCatch"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Catch",
        "module": "Control.Monad.Catch",
        "name": "unwrapMonadCatch",
        "normalized": "",
        "package": "catch-fd",
        "partial": "Monad Catch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/catch-fd/docs/Control-Monad-Catch.html#v:unwrapMonadError",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Catch",
        "fct-package": "catch-fd",
        "fct-signature": "m a",
        "fct-source": "src/Control-Monad-Catch.html#WrappedMonadError",
        "fct-type": "function",
        "title": "unwrapMonadError"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Catch",
        "module": "Control.Monad.Catch",
        "name": "unwrapMonadError",
        "normalized": "",
        "package": "catch-fd",
        "partial": "Monad Error",
        "signature": ""
      }
    }
  }
]