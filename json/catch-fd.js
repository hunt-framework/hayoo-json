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
        "word": "catch-fd"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003eComputation type:\u003c/dt\u003e\u003cdd\u003e\nComputations which may fail or throw exceptions; and computations which may\ncatch failures and thrown exceptions.\n\u003c/dd\u003e\u003cdt\u003eBinding strategy:\u003c/dt\u003e\u003cdd\u003e\nFailure records information about the cause/location of the failure.  Failure\nvalues bypass the bound function; other values are used as inputs to the bound\nfunction (same as \u003ccode\u003e\u003ccode\u003e\u003ca\u003eMonadError\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e).\n\u003c/dd\u003e\u003cdt\u003eUseful for:\u003c/dt\u003e\u003cdd\u003e\nBuilding computations from sequences of functions that may fail; and using\nexception handling to structure error handling.  The handler may or may not\nthrow an exception, which does not have to be of the same type as the original\nthrown exception (see \u003ccode\u003e\u003ccode\u003e\u003ca\u003emapE\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e).\n\u003c/dd\u003e\u003cdt\u003eZero and plus:\u003c/dt\u003e\u003cdd\u003e\nZero is represented by an empty error, and the plus operation executes its\nsecond argument if the first fails (same as\n\u003ccode\u003e\u003ccode\u003e\u003ca\u003eMonadError\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e).\n\u003c/dd\u003e\u003cdt\u003eExample type:\u003c/dt\u003e\u003cdd\u003e\n\u003ccode\u003e\u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eString\u003c/code\u003e a\u003c/code\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eThe Throw and Catch monads.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Catch.Class",
          "name": "Class",
          "package": "catch-fd",
          "source": "src/Control-Monad-Catch-Class.html",
          "type": "module"
        },
        "index": {
          "description": "Computation type Computations which may fail or throw exceptions and computations which may catch failures and thrown exceptions Binding strategy Failure records information about the cause location of the failure Failure values bypass the bound function other values are used as inputs to the bound function same as MonadError Useful for Building computations from sequences of functions that may fail and using exception handling to structure error handling The handler may or may not throw an exception which does not have to be of the same type as the original thrown exception see mapE Zero and plus Zero is represented by an empty error and the plus operation executes its second argument if the first fails same as MonadError Example type Either String The Throw and Catch monads",
          "hierarchy": "Control Monad Catch Class",
          "module": "Control.Monad.Catch.Class",
          "name": "Class",
          "package": "catch-fd",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/catch-fd/docs/Control-Monad-Catch-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe strategy of combining computations that can handle thrown exceptions,\nas well as throwing exceptions in the original computation.\n\u003c/p\u003e\u003cp\u003eIs parameterized over the type of error information and the original monad type\nconstructor, as well as the handler monad type constructor.  The handler monad\ntype constructor commonly differs from the original monad type constructor due\nto a change in the type of the error information.\n\u003c/p\u003e",
          "module": "Control.Monad.Catch.Class",
          "name": "MonadCatch",
          "package": "catch-fd",
          "source": "src/Control-Monad-Catch-Class.html#MonadCatch",
          "type": "class"
        },
        "index": {
          "description": "The strategy of combining computations that can handle thrown exceptions as well as throwing exceptions in the original computation Is parameterized over the type of error information and the original monad type constructor as well as the handler monad type constructor The handler monad type constructor commonly differs from the original monad type constructor due to change in the type of the error information",
          "hierarchy": "Control Monad Catch Class",
          "module": "Control.Monad.Catch.Class",
          "name": "MonadCatch",
          "package": "catch-fd",
          "partial": "Monad Catch",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/catch-fd/docs/Control-Monad-Catch-Class.html#t:MonadCatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe strategy of combining computations that can throw exceptions.\n\u003c/p\u003e\u003cp\u003eIs parameterized over the type of error information and the monad type\nconstructor.  It is common to use \u003ccode\u003e\u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eString\u003c/code\u003e\u003c/code\u003e.  In some cases you will\nhave to define an instance of \u003ccode\u003e\u003ccode\u003e\u003ca\u003eMonadThrow\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, though rarely a definition of\n\u003ccode\u003e\u003ccode\u003e\u003ca\u003ethrow\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.Catch.Class",
          "name": "MonadThrow",
          "package": "catch-fd",
          "source": "src/Control-Monad-Catch-Class.html#MonadThrow",
          "type": "class"
        },
        "index": {
          "description": "The strategy of combining computations that can throw exceptions Is parameterized over the type of error information and the monad type constructor It is common to use Either String In some cases you will have to define an instance of MonadThrow though rarely definition of throw",
          "hierarchy": "Control Monad Catch Class",
          "module": "Control.Monad.Catch.Class",
          "name": "MonadThrow",
          "package": "catch-fd",
          "partial": "Monad Throw",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/catch-fd/docs/Control-Monad-Catch-Class.html#t:MonadThrow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA handler function to handle thrown values and return to normal execution.\n  A common idiom is:\n\u003c/p\u003e\u003cpre\u003e do { action1; action2; action3 } `catch` handler\n\u003c/pre\u003e\u003cp\u003ewhere the \u003ccode\u003eaction\u003c/code\u003e functions can call \u003ccode\u003e\u003ca\u003ethrow\u003c/a\u003e\u003c/code\u003e.\n  Note that \u003ccode\u003ehandler\u003c/code\u003e and the do-block must have the same return type.\n\u003c/p\u003e",
          "module": "Control.Monad.Catch.Class",
          "name": "catch",
          "package": "catch-fd",
          "signature": "m a -\u003e (e -\u003e n a) -\u003e n a",
          "source": "src/Control-Monad-Catch-Class.html#catch",
          "type": "method"
        },
        "index": {
          "description": "handler function to handle thrown values and return to normal execution common idiom is do action1 action2 action3 catch handler where the action functions can call throw Note that handler and the do-block must have the same return type",
          "hierarchy": "Control Monad Catch Class",
          "module": "Control.Monad.Catch.Class",
          "name": "catch",
          "normalized": "a b-\u003e(c-\u003ed b)-\u003ed b",
          "package": "catch-fd",
          "signature": "m a-\u003e(e-\u003en a)-\u003en a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/catch-fd/docs/Control-Monad-Catch-Class.html#v:catch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap the thrown value using the given function\n\u003c/p\u003e",
          "module": "[\"Control.Monad.Catch.Class\",\"Control.Monad.Catch\"]",
          "name": "mapE",
          "package": "catch-fd",
          "signature": "(e -\u003e e') -\u003e m a -\u003e n a",
          "source": "src/Control-Monad-Catch-Class.html#mapE",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/catch-fd/docs/Control-Monad-Catch-Class.html#v:mapE\",\"http://hackage.haskell.org/package/catch-fd/docs/Control-Monad-Catch.html#v:mapE\"]"
        },
        "index": {
          "description": "Map the thrown value using the given function",
          "hierarchy": "Control Monad Catch Class",
          "module": "Control.Monad.Catch.Class",
          "name": "mapE",
          "normalized": "(a-\u003eb)-\u003ec d-\u003ee d",
          "package": "catch-fd",
          "signature": "(e-\u003ee')-\u003em a-\u003en a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/catch-fd/docs/Control-Monad-Catch-Class.html#v:mapE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs used within a monadic computation to begin exception processing.  If\n  \u003ccode\u003e(\u003ccode\u003e\u003ca\u003eMonadThrow\u003c/a\u003e\u003c/code\u003e e n, \u003ccode\u003e\u003ca\u003eMonadTrans\u003c/a\u003e\u003c/code\u003e t) =\u003e t n ~ m\u003c/code\u003e, then \u003ccode\u003e\u003ccode\u003e\u003ca\u003ethrow\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e\n  \u003ccode\u003e\u003ca\u003ethrow\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e is the default definition.\n\u003c/p\u003e",
          "module": "Control.Monad.Catch.Class",
          "name": "throw",
          "package": "catch-fd",
          "signature": "e -\u003e m a",
          "source": "src/Control-Monad-Catch-Class.html#throw",
          "type": "method"
        },
        "index": {
          "description": "Is used within monadic computation to begin exception processing If MonadThrow MonadTrans then throw lift throw is the default definition",
          "hierarchy": "Control Monad Catch Class",
          "module": "Control.Monad.Catch.Class",
          "name": "throw",
          "normalized": "a-\u003eb c",
          "package": "catch-fd",
          "signature": "e-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/catch-fd/docs/Control-Monad-Catch-Class.html#v:throw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003eComputation type:\u003c/dt\u003e\u003cdd\u003e\nComputations which may fail or throw exceptions; and computations which may\ncatch failures and thrown exceptions.\n\u003c/dd\u003e\u003cdt\u003eBinding strategy:\u003c/dt\u003e\u003cdd\u003e\nFailure records information about the cause/location of the failure.  Failure\nvalues bypass the bound function; other values are used as inputs to the bound\nfunction (same as \u003ccode\u003e\u003ccode\u003e\u003ca\u003eMonadError\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e).\n\u003c/dd\u003e\u003cdt\u003eUseful for:\u003c/dt\u003e\u003cdd\u003e\nBuilding computations from sequences of functions that may fail; and using\nexception handling to structure error handling.  The handler may or may not\nthrow an exception, which does not have to be of the same type as the original\nthrown exception (see \u003ccode\u003e\u003ccode\u003e\u003ca\u003emapE\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e).\n\u003c/dd\u003e\u003cdt\u003eZero and plus:\u003c/dt\u003e\u003cdd\u003e\nZero is represented by an empty error, and the plus operation executes its\nsecond argument if the first fails (same as\n\u003ccode\u003e\u003ccode\u003e\u003ca\u003eMonadError\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e).\n\u003c/dd\u003e\u003cdt\u003eExample type:\u003c/dt\u003e\u003cdd\u003e\n\u003ccode\u003e\u003ccode\u003eEither\u003c/code\u003e \u003ccode\u003eString\u003c/code\u003e a\u003c/code\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eThe Throw and Catch monads.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Catch",
          "name": "Catch",
          "package": "catch-fd",
          "source": "src/Control-Monad-Catch.html",
          "type": "module"
        },
        "index": {
          "description": "Computation type Computations which may fail or throw exceptions and computations which may catch failures and thrown exceptions Binding strategy Failure records information about the cause location of the failure Failure values bypass the bound function other values are used as inputs to the bound function same as MonadError Useful for Building computations from sequences of functions that may fail and using exception handling to structure error handling The handler may or may not throw an exception which does not have to be of the same type as the original thrown exception see mapE Zero and plus Zero is represented by an empty error and the plus operation executes its second argument if the first fails same as MonadError Example type Either String The Throw and Catch monads",
          "hierarchy": "Control Monad Catch",
          "module": "Control.Monad.Catch",
          "name": "Catch",
          "package": "catch-fd",
          "partial": "Catch",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/catch-fd/docs/Control-Monad-Catch.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe strategy of combining computations that can handle thrown exceptions,\nas well as throwing exceptions in the original computation.\n\u003c/p\u003e\u003cp\u003eIs parameterized over the type of error information and the original monad type\nconstructor, as well as the handler monad type constructor.  The handler monad\ntype constructor commonly differs from the original monad type constructor due\nto a change in the type of the error information.\n\u003c/p\u003e",
          "module": "Control.Monad.Catch",
          "name": "MonadCatch",
          "package": "catch-fd",
          "source": "src/Control-Monad-Catch-Class.html#MonadCatch",
          "type": "class"
        },
        "index": {
          "description": "The strategy of combining computations that can handle thrown exceptions as well as throwing exceptions in the original computation Is parameterized over the type of error information and the original monad type constructor as well as the handler monad type constructor The handler monad type constructor commonly differs from the original monad type constructor due to change in the type of the error information",
          "hierarchy": "Control Monad Catch",
          "module": "Control.Monad.Catch",
          "name": "MonadCatch",
          "package": "catch-fd",
          "partial": "Monad Catch",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/catch-fd/docs/Control-Monad-Catch.html#t:MonadCatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Catch",
          "name": "MonadError",
          "package": "catch-fd",
          "source": "src/Control-Monad-Catch.html#MonadError",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Monad Catch",
          "module": "Control.Monad.Catch",
          "name": "MonadError",
          "package": "catch-fd",
          "partial": "Monad Error",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/catch-fd/docs/Control-Monad-Catch.html#t:MonadError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe strategy of combining computations that can throw exceptions.\n\u003c/p\u003e\u003cp\u003eIs parameterized over the type of error information and the monad type\nconstructor.  It is common to use \u003ccode\u003e\u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eString\u003c/code\u003e\u003c/code\u003e.  In some cases you will\nhave to define an instance of \u003ccode\u003e\u003ccode\u003e\u003ca\u003eMonadThrow\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, though rarely a definition of\n\u003ccode\u003e\u003ccode\u003e\u003ca\u003ethrow\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.Catch",
          "name": "MonadThrow",
          "package": "catch-fd",
          "source": "src/Control-Monad-Catch-Class.html#MonadThrow",
          "type": "class"
        },
        "index": {
          "description": "The strategy of combining computations that can throw exceptions Is parameterized over the type of error information and the monad type constructor It is common to use Either String In some cases you will have to define an instance of MonadThrow though rarely definition of throw",
          "hierarchy": "Control Monad Catch",
          "module": "Control.Monad.Catch",
          "name": "MonadThrow",
          "package": "catch-fd",
          "partial": "Monad Throw",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/catch-fd/docs/Control-Monad-Catch.html#t:MonadThrow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Catch",
          "name": "WrappedMonadCatch",
          "package": "catch-fd",
          "source": "src/Control-Monad-Catch.html#WrappedMonadCatch",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Control Monad Catch",
          "module": "Control.Monad.Catch",
          "name": "WrappedMonadCatch",
          "package": "catch-fd",
          "partial": "Wrapped Monad Catch",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/catch-fd/docs/Control-Monad-Catch.html#t:WrappedMonadCatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Catch",
          "name": "WrappedMonadError",
          "package": "catch-fd",
          "source": "src/Control-Monad-Catch.html#WrappedMonadError",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Control Monad Catch",
          "module": "Control.Monad.Catch",
          "name": "WrappedMonadError",
          "package": "catch-fd",
          "partial": "Wrapped Monad Error",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/catch-fd/docs/Control-Monad-Catch.html#t:WrappedMonadError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Catch",
          "name": "WrapMonadCatch",
          "package": "catch-fd",
          "signature": "WrapMonadCatch",
          "source": "src/Control-Monad-Catch.html#WrappedMonadCatch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Catch",
          "module": "Control.Monad.Catch",
          "name": "WrapMonadCatch",
          "package": "catch-fd",
          "partial": "Wrap Monad Catch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/catch-fd/docs/Control-Monad-Catch.html#v:WrapMonadCatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Catch",
          "name": "WrapMonadError",
          "package": "catch-fd",
          "signature": "WrapMonadError",
          "source": "src/Control-Monad-Catch.html#WrappedMonadError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Catch",
          "module": "Control.Monad.Catch",
          "name": "WrapMonadError",
          "package": "catch-fd",
          "partial": "Wrap Monad Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/catch-fd/docs/Control-Monad-Catch.html#v:WrapMonadError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA handler function to handle thrown values and return to normal execution.\n  A common idiom is:\n\u003c/p\u003e\u003cpre\u003e do { action1; action2; action3 } `catch` handler\n\u003c/pre\u003e\u003cp\u003ewhere the \u003ccode\u003eaction\u003c/code\u003e functions can call \u003ccode\u003e\u003ca\u003ethrow\u003c/a\u003e\u003c/code\u003e.\n  Note that \u003ccode\u003ehandler\u003c/code\u003e and the do-block must have the same return type.\n\u003c/p\u003e",
          "module": "Control.Monad.Catch",
          "name": "catch",
          "package": "catch-fd",
          "signature": "m a -\u003e (e -\u003e n a) -\u003e n a",
          "source": "src/Control-Monad-Catch-Class.html#catch",
          "type": "method"
        },
        "index": {
          "description": "handler function to handle thrown values and return to normal execution common idiom is do action1 action2 action3 catch handler where the action functions can call throw Note that handler and the do-block must have the same return type",
          "hierarchy": "Control Monad Catch",
          "module": "Control.Monad.Catch",
          "name": "catch",
          "normalized": "a b-\u003e(c-\u003ed b)-\u003ed b",
          "package": "catch-fd",
          "signature": "m a-\u003e(e-\u003en a)-\u003en a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/catch-fd/docs/Control-Monad-Catch.html#v:catch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs used within a monadic computation to begin exception processing.  If\n  \u003ccode\u003e(\u003ccode\u003e\u003ca\u003eMonadThrow\u003c/a\u003e\u003c/code\u003e e n, \u003ccode\u003e\u003ca\u003eMonadTrans\u003c/a\u003e\u003c/code\u003e t) =\u003e t n ~ m\u003c/code\u003e, then \u003ccode\u003e\u003ccode\u003e\u003ca\u003ethrow\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e\n  \u003ccode\u003e\u003ca\u003ethrow\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e is the default definition.\n\u003c/p\u003e",
          "module": "Control.Monad.Catch",
          "name": "throw",
          "package": "catch-fd",
          "signature": "e -\u003e m a",
          "source": "src/Control-Monad-Catch-Class.html#throw",
          "type": "method"
        },
        "index": {
          "description": "Is used within monadic computation to begin exception processing If MonadThrow MonadTrans then throw lift throw is the default definition",
          "hierarchy": "Control Monad Catch",
          "module": "Control.Monad.Catch",
          "name": "throw",
          "normalized": "a-\u003eb c",
          "package": "catch-fd",
          "signature": "e-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/catch-fd/docs/Control-Monad-Catch.html#v:throw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Catch",
          "name": "unwrapMonadCatch",
          "package": "catch-fd",
          "signature": "m a",
          "source": "src/Control-Monad-Catch.html#WrappedMonadCatch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Catch",
          "module": "Control.Monad.Catch",
          "name": "unwrapMonadCatch",
          "package": "catch-fd",
          "partial": "Monad Catch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/catch-fd/docs/Control-Monad-Catch.html#v:unwrapMonadCatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Catch",
          "name": "unwrapMonadError",
          "package": "catch-fd",
          "signature": "m a",
          "source": "src/Control-Monad-Catch.html#WrappedMonadError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Catch",
          "module": "Control.Monad.Catch",
          "name": "unwrapMonadError",
          "package": "catch-fd",
          "partial": "Monad Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/catch-fd/docs/Control-Monad-Catch.html#v:unwrapMonadError"
      }
    }
  ]
]