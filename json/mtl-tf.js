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
        "word": "mtl-tf"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003eComputation type:\u003c/dt\u003e\u003cdd\u003e Computations which can be interrupted and resumed.\n\u003c/dd\u003e\u003cdt\u003eBinding strategy:\u003c/dt\u003e\u003cdd\u003e Binding a function to a monadic value creates\na new continuation which uses the function as the continuation of the monadic\ncomputation.\n\u003c/dd\u003e\u003cdt\u003eUseful for:\u003c/dt\u003e\u003cdd\u003e Complex control structures, error handling,\nand creating co-routines.\n\u003c/dd\u003e\u003cdt\u003eZero and plus:\u003c/dt\u003e\u003cdd\u003e None.\n\u003c/dd\u003e\u003cdt\u003eExample type:\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003e\u003ccode\u003eCont\u003c/code\u003e r a\u003c/code\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eThe Continuation monad represents computations in continuation-passing style\n(CPS).\nIn continuation-passing style function result is not returned,\nbut instead is passed to another function,\nreceived as a parameter (continuation).\nComputations are built up from sequences\nof nested continuations, terminated by a final continuation (often \u003ccode\u003eid\u003c/code\u003e)\nwhich produces the final result.\nSince continuations are functions which represent the future of a computation,\nmanipulation of the continuation functions can achieve complex manipulations\nof the future of the computation,\nsuch as interrupting a computation in the middle, aborting a portion\nof a computation, restarting a computation, and interleaving execution of\ncomputations.\nThe Continuation monad adapts CPS to the structure of a monad.\n\u003c/p\u003e\u003cp\u003eBefore using the Continuation monad, be sure that you have\na firm understanding of continuation-passing style\nand that continuations represent the best solution to your particular\ndesign problem.\nMany algorithms which require continuations in other languages do not require\nthem in Haskell, due to Haskell's lazy semantics.\nAbuse of the Continuation monad can produce code that is impossible\nto understand and maintain.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Cont.Class",
          "name": "Class",
          "package": "mtl-tf",
          "source": "src/Control-Monad-Cont-Class.html",
          "type": "module"
        },
        "index": {
          "description": "Computation type Computations which can be interrupted and resumed Binding strategy Binding function to monadic value creates new continuation which uses the function as the continuation of the monadic computation Useful for Complex control structures error handling and creating co-routines Zero and plus None Example type Cont The Continuation monad represents computations in continuation-passing style CPS In continuation-passing style function result is not returned but instead is passed to another function received as parameter continuation Computations are built up from sequences of nested continuations terminated by final continuation often id which produces the final result Since continuations are functions which represent the future of computation manipulation of the continuation functions can achieve complex manipulations of the future of the computation such as interrupting computation in the middle aborting portion of computation restarting computation and interleaving execution of computations The Continuation monad adapts CPS to the structure of monad Before using the Continuation monad be sure that you have firm understanding of continuation-passing style and that continuations represent the best solution to your particular design problem Many algorithms which require continuations in other languages do not require them in Haskell due to Haskell lazy semantics Abuse of the Continuation monad can produce code that is impossible to understand and maintain",
          "hierarchy": "Control Monad Cont Class",
          "module": "Control.Monad.Cont.Class",
          "name": "Class",
          "package": "mtl-tf",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-Cont-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Cont.Class",
          "name": "MonadCont",
          "package": "mtl-tf",
          "source": "src/Control-Monad-Cont-Class.html#MonadCont",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Monad Cont Class",
          "module": "Control.Monad.Cont.Class",
          "name": "MonadCont",
          "package": "mtl-tf",
          "partial": "Monad Cont",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-Cont-Class.html#t:MonadCont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ecallCC\u003c/code\u003e (call-with-current-continuation)\n    calls a function with the current continuation as its argument.\n    Provides an escape continuation mechanism for use with Continuation monads.\n    Escape continuations allow to abort the current computation and return\n    a value immediately.\n    They achieve a similar effect to \u003ccode\u003eControl.Monad.Error.throwError\u003c/code\u003e\n    and \u003ccode\u003eControl.Monad.Error.catchError\u003c/code\u003e\n    within an \u003ccode\u003eControl.Monad.Error.Error\u003c/code\u003e monad.\n    Advantage of this function over calling \u003ccode\u003ereturn\u003c/code\u003e is that it makes\n    the continuation explicit,\n    allowing more flexibility and better control\n    (see examples in \u003ca\u003eControl.Monad.Cont\u003c/a\u003e).\n\u003c/p\u003e\u003cp\u003eThe standard idiom used with \u003ccode\u003ecallCC\u003c/code\u003e is to provide a lambda-expression\n    to name the continuation. Then calling the named continuation anywhere\n    within its scope will escape from the computation,\n    even if it is many layers deep within nested computations.\n\u003c/p\u003e",
          "module": "Control.Monad.Cont.Class",
          "name": "callCC",
          "package": "mtl-tf",
          "signature": "((a -\u003e m b) -\u003e m a) -\u003e m a",
          "source": "src/Control-Monad-Cont-Class.html#callCC",
          "type": "method"
        },
        "index": {
          "description": "callCC call-with-current-continuation calls function with the current continuation as its argument Provides an escape continuation mechanism for use with Continuation monads Escape continuations allow to abort the current computation and return value immediately They achieve similar effect to Control.Monad.Error.throwError and Control.Monad.Error.catchError within an Control.Monad.Error.Error monad Advantage of this function over calling return is that it makes the continuation explicit allowing more flexibility and better control see examples in Control.Monad.Cont The standard idiom used with callCC is to provide lambda-expression to name the continuation Then calling the named continuation anywhere within its scope will escape from the computation even if it is many layers deep within nested computations",
          "hierarchy": "Control Monad Cont Class",
          "module": "Control.Monad.Cont.Class",
          "name": "callCC",
          "normalized": "((a-\u003eb c)-\u003eb a)-\u003eb a",
          "package": "mtl-tf",
          "partial": "CC",
          "signature": "((a-\u003em b)-\u003em a)-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-Cont-Class.html#v:callCC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003eComputation type:\u003c/dt\u003e\u003cdd\u003e Computations which can be interrupted and resumed.\n\u003c/dd\u003e\u003cdt\u003eBinding strategy:\u003c/dt\u003e\u003cdd\u003e Binding a function to a monadic value creates\na new continuation which uses the function as the continuation of the monadic\ncomputation.\n\u003c/dd\u003e\u003cdt\u003eUseful for:\u003c/dt\u003e\u003cdd\u003e Complex control structures, error handling,\nand creating co-routines.\n\u003c/dd\u003e\u003cdt\u003eZero and plus:\u003c/dt\u003e\u003cdd\u003e None.\n\u003c/dd\u003e\u003cdt\u003eExample type:\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003eCont\u003c/a\u003e\u003c/code\u003e r a\u003c/code\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eThe Continuation monad represents computations in continuation-passing style\n(CPS).\nIn continuation-passing style function result is not returned,\nbut instead is passed to another function,\nreceived as a parameter (continuation).\nComputations are built up from sequences\nof nested continuations, terminated by a final continuation (often \u003ccode\u003eid\u003c/code\u003e)\nwhich produces the final result.\nSince continuations are functions which represent the future of a computation,\nmanipulation of the continuation functions can achieve complex manipulations\nof the future of the computation,\nsuch as interrupting a computation in the middle, aborting a portion\nof a computation, restarting a computation, and interleaving execution of\ncomputations.\nThe Continuation monad adapts CPS to the structure of a monad.\n\u003c/p\u003e\u003cp\u003eBefore using the Continuation monad, be sure that you have\na firm understanding of continuation-passing style\nand that continuations represent the best solution to your particular\ndesign problem.\nMany algorithms which require continuations in other languages do not require\nthem in Haskell, due to Haskell's lazy semantics.\nAbuse of the Continuation monad can produce code that is impossible\nto understand and maintain.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Cont",
          "name": "Cont",
          "package": "mtl-tf",
          "source": "src/Control-Monad-Cont.html",
          "type": "module"
        },
        "index": {
          "description": "Computation type Computations which can be interrupted and resumed Binding strategy Binding function to monadic value creates new continuation which uses the function as the continuation of the monadic computation Useful for Complex control structures error handling and creating co-routines Zero and plus None Example type Cont The Continuation monad represents computations in continuation-passing style CPS In continuation-passing style function result is not returned but instead is passed to another function received as parameter continuation Computations are built up from sequences of nested continuations terminated by final continuation often id which produces the final result Since continuations are functions which represent the future of computation manipulation of the continuation functions can achieve complex manipulations of the future of the computation such as interrupting computation in the middle aborting portion of computation restarting computation and interleaving execution of computations The Continuation monad adapts CPS to the structure of monad Before using the Continuation monad be sure that you have firm understanding of continuation-passing style and that continuations represent the best solution to your particular design problem Many algorithms which require continuations in other languages do not require them in Haskell due to Haskell lazy semantics Abuse of the Continuation monad can produce code that is impossible to understand and maintain",
          "hierarchy": "Control Monad Cont",
          "module": "Control.Monad.Cont",
          "name": "Cont",
          "package": "mtl-tf",
          "partial": "Cont",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-Cont.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContinuation monad.\n\u003ccode\u003eCont r a\u003c/code\u003e is a CPS computation that produces an intermediate result\nof type \u003ccode\u003ea\u003c/code\u003e within a CPS computation whose final result type is \u003ccode\u003er\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003ereturn\u003c/code\u003e function simply creates a continuation which passes the value on.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003e\u003e=\u003c/code\u003e operator adds the bound function into the continuation chain.\n\u003c/p\u003e",
          "module": "Control.Monad.Cont",
          "name": "Cont",
          "package": "mtl-tf",
          "source": "src/Control-Monad-Cont.html#Cont",
          "type": "newtype"
        },
        "index": {
          "description": "Continuation monad Cont is CPS computation that produces an intermediate result of type within CPS computation whose final result type is The return function simply creates continuation which passes the value on The operator adds the bound function into the continuation chain",
          "hierarchy": "Control Monad Cont",
          "module": "Control.Monad.Cont",
          "name": "Cont",
          "package": "mtl-tf",
          "partial": "Cont",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-Cont.html#t:Cont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe continuation monad transformer.\nCan be used to add continuation handling to other monads.\n\u003c/p\u003e",
          "module": "Control.Monad.Cont",
          "name": "ContT",
          "package": "mtl-tf",
          "source": "src/Control-Monad-Cont.html#ContT",
          "type": "newtype"
        },
        "index": {
          "description": "The continuation monad transformer Can be used to add continuation handling to other monads",
          "hierarchy": "Control Monad Cont",
          "module": "Control.Monad.Cont",
          "name": "ContT",
          "package": "mtl-tf",
          "partial": "Cont",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-Cont.html#t:ContT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Cont",
          "name": "Cont",
          "package": "mtl-tf",
          "signature": "Cont",
          "source": "src/Control-Monad-Cont.html#Cont",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Cont",
          "module": "Control.Monad.Cont",
          "name": "Cont",
          "package": "mtl-tf",
          "partial": "Cont",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-Cont.html#v:Cont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Cont",
          "name": "ContT",
          "package": "mtl-tf",
          "signature": "ContT",
          "source": "src/Control-Monad-Cont.html#ContT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Cont",
          "module": "Control.Monad.Cont",
          "name": "ContT",
          "package": "mtl-tf",
          "partial": "Cont",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-Cont.html#v:ContT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Cont",
          "name": "mapCont",
          "package": "mtl-tf",
          "signature": "(r -\u003e r) -\u003e Cont r a -\u003e Cont r a",
          "source": "src/Control-Monad-Cont.html#mapCont",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Cont",
          "module": "Control.Monad.Cont",
          "name": "mapCont",
          "normalized": "(a-\u003ea)-\u003eCont a b-\u003eCont a b",
          "package": "mtl-tf",
          "partial": "Cont",
          "signature": "(r-\u003er)-\u003eCont r a-\u003eCont r a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-Cont.html#v:mapCont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Cont",
          "name": "mapContT",
          "package": "mtl-tf",
          "signature": "(m r -\u003e m r) -\u003e ContT r m a -\u003e ContT r m a",
          "source": "src/Control-Monad-Cont.html#mapContT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Cont",
          "module": "Control.Monad.Cont",
          "name": "mapContT",
          "normalized": "(a b-\u003ea b)-\u003eContT b a c-\u003eContT b a c",
          "package": "mtl-tf",
          "partial": "Cont",
          "signature": "(m r-\u003em r)-\u003eContT r m a-\u003eContT r m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-Cont.html#v:mapContT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns a CPS computation, returns its result after applying\n    the final continuation to it.\n    Parameters:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e a continuation computation (\u003ccode\u003eCont\u003c/code\u003e).\n\u003c/li\u003e\u003cli\u003e the final continuation, which produces the final result (often \u003ccode\u003eid\u003c/code\u003e).\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.Monad.Cont",
          "name": "runCont",
          "package": "mtl-tf",
          "signature": "(a -\u003e r) -\u003e r",
          "source": "src/Control-Monad-Cont.html#Cont",
          "type": "function"
        },
        "index": {
          "description": "Runs CPS computation returns its result after applying the final continuation to it Parameters continuation computation Cont the final continuation which produces the final result often id",
          "hierarchy": "Control Monad Cont",
          "module": "Control.Monad.Cont",
          "name": "runCont",
          "normalized": "(a-\u003eb)-\u003eb",
          "package": "mtl-tf",
          "partial": "Cont",
          "signature": "(a-\u003er)-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-Cont.html#v:runCont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Cont",
          "name": "runContT",
          "package": "mtl-tf",
          "signature": "(a -\u003e m r) -\u003e m r",
          "source": "src/Control-Monad-Cont.html#ContT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Cont",
          "module": "Control.Monad.Cont",
          "name": "runContT",
          "normalized": "(a-\u003eb c)-\u003eb c",
          "package": "mtl-tf",
          "partial": "Cont",
          "signature": "(a-\u003em r)-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-Cont.html#v:runContT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Cont",
          "name": "withCont",
          "package": "mtl-tf",
          "signature": "((b -\u003e r) -\u003e a -\u003e r) -\u003e Cont r a -\u003e Cont r b",
          "source": "src/Control-Monad-Cont.html#withCont",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Cont",
          "module": "Control.Monad.Cont",
          "name": "withCont",
          "normalized": "((a-\u003eb)-\u003ec-\u003eb)-\u003eCont b c-\u003eCont b a",
          "package": "mtl-tf",
          "partial": "Cont",
          "signature": "((b-\u003er)-\u003ea-\u003er)-\u003eCont r a-\u003eCont r b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-Cont.html#v:withCont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Cont",
          "name": "withContT",
          "package": "mtl-tf",
          "signature": "((b -\u003e m r) -\u003e a -\u003e m r) -\u003e ContT r m a -\u003e ContT r m b",
          "source": "src/Control-Monad-Cont.html#withContT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Cont",
          "module": "Control.Monad.Cont",
          "name": "withContT",
          "normalized": "((a-\u003eb c)-\u003ed-\u003eb c)-\u003eContT c b d-\u003eContT c b a",
          "package": "mtl-tf",
          "partial": "Cont",
          "signature": "((b-\u003em r)-\u003ea-\u003em r)-\u003eContT r m a-\u003eContT r m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-Cont.html#v:withContT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003eComputation type:\u003c/dt\u003e\u003cdd\u003e Computations which may fail or throw exceptions.\n\u003c/dd\u003e\u003cdt\u003eBinding strategy:\u003c/dt\u003e\u003cdd\u003e Failure records information about the cause/location\nof the failure. Failure values bypass the bound function,\nother values are used as inputs to the bound function.\n\u003c/dd\u003e\u003cdt\u003eUseful for:\u003c/dt\u003e\u003cdd\u003e Building computations from sequences of functions that may fail\nor using exception handling to structure error handling.\n\u003c/dd\u003e\u003cdt\u003eZero and plus:\u003c/dt\u003e\u003cdd\u003e Zero is represented by an empty error and the plus operation\nexecutes its second argument if the first fails.\n\u003c/dd\u003e\u003cdt\u003eExample type:\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003e\u003ccode\u003eData.Either\u003c/code\u003e String a\u003c/code\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eThe Error monad (also called the Exception monad).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Error.Class",
          "name": "Class",
          "package": "mtl-tf",
          "source": "src/Control-Monad-Error-Class.html",
          "type": "module"
        },
        "index": {
          "description": "Computation type Computations which may fail or throw exceptions Binding strategy Failure records information about the cause location of the failure Failure values bypass the bound function other values are used as inputs to the bound function Useful for Building computations from sequences of functions that may fail or using exception handling to structure error handling Zero and plus Zero is represented by an empty error and the plus operation executes its second argument if the first fails Example type Data.Either String The Error monad also called the Exception monad",
          "hierarchy": "Control Monad Error Class",
          "module": "Control.Monad.Error.Class",
          "name": "Class",
          "package": "mtl-tf",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-Error-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn exception to be thrown.\n An instance must redefine at least one of \u003ccode\u003e\u003ca\u003enoMsg\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003estrMsg\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Error.Class",
          "name": "Error",
          "package": "mtl-tf",
          "source": "src/Control-Monad-Error-Class.html#Error",
          "type": "class"
        },
        "index": {
          "description": "An exception to be thrown An instance must redefine at least one of noMsg strMsg",
          "hierarchy": "Control Monad Error Class",
          "module": "Control.Monad.Error.Class",
          "name": "Error",
          "package": "mtl-tf",
          "partial": "Error",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-Error-Class.html#t:Error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Error.Class",
          "name": "ErrorType",
          "package": "mtl-tf",
          "signature": "ErrorType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Error Class",
          "module": "Control.Monad.Error.Class",
          "name": "ErrorType",
          "package": "mtl-tf",
          "partial": "Error Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-Error-Class.html#t:ErrorType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe strategy of combining computations that can throw exceptions\nby bypassing bound functions\nfrom the point an exception is thrown to the point that it is handled.\n\u003c/p\u003e\u003cp\u003eIs parameterized over the type of error information and\nthe monad type constructor.\nIt is common to use \u003ccode\u003e\u003ccode\u003eData.Either\u003c/code\u003e String\u003c/code\u003e as the monad type constructor\nfor an error monad in which error descriptions take the form of strings.\nIn that case and many other common cases the resulting monad is already defined\nas an instance of the \u003ccode\u003e\u003ca\u003eMonadError\u003c/a\u003e\u003c/code\u003e class.\nYou can also define your own error type and/or use a monad type constructor\nother than \u003ccode\u003e\u003ccode\u003eData.Either\u003c/code\u003e String\u003c/code\u003e or \u003ccode\u003e\u003ccode\u003eData.Either\u003c/code\u003e IOError\u003c/code\u003e.\nIn these cases you will have to explicitly define instances of the \u003ccode\u003e\u003ca\u003eError\u003c/a\u003e\u003c/code\u003e\nand/or \u003ccode\u003e\u003ca\u003eMonadError\u003c/a\u003e\u003c/code\u003e classes.\n\u003c/p\u003e",
          "module": "Control.Monad.Error.Class",
          "name": "MonadError",
          "package": "mtl-tf",
          "source": "src/Control-Monad-Error-Class.html#MonadError",
          "type": "class"
        },
        "index": {
          "description": "The strategy of combining computations that can throw exceptions by bypassing bound functions from the point an exception is thrown to the point that it is handled Is parameterized over the type of error information and the monad type constructor It is common to use Data.Either String as the monad type constructor for an error monad in which error descriptions take the form of strings In that case and many other common cases the resulting monad is already defined as an instance of the MonadError class You can also define your own error type and or use monad type constructor other than Data.Either String or Data.Either IOError In these cases you will have to explicitly define instances of the Error and or MonadError classes",
          "hierarchy": "Control Monad Error Class",
          "module": "Control.Monad.Error.Class",
          "name": "MonadError",
          "package": "mtl-tf",
          "partial": "Monad Error",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-Error-Class.html#t:MonadError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA handler function to handle previous errors and return to normal execution.\n    A common idiom is:\n\u003c/p\u003e\u003cpre\u003e do { action1; action2; action3 } `catchError` handler\n\u003c/pre\u003e\u003cp\u003ewhere the \u003ccode\u003eaction\u003c/code\u003e functions can call \u003ccode\u003e\u003ca\u003ethrowError\u003c/a\u003e\u003c/code\u003e.\n    Note that \u003ccode\u003ehandler\u003c/code\u003e and the do-block must have the same return type.\n\u003c/p\u003e",
          "module": "Control.Monad.Error.Class",
          "name": "catchError",
          "package": "mtl-tf",
          "signature": "m a -\u003e (ErrorType m -\u003e m a) -\u003e m a",
          "source": "src/Control-Monad-Error-Class.html#catchError",
          "type": "method"
        },
        "index": {
          "description": "handler function to handle previous errors and return to normal execution common idiom is do action1 action2 action3 catchError handler where the action functions can call throwError Note that handler and the do-block must have the same return type",
          "hierarchy": "Control Monad Error Class",
          "module": "Control.Monad.Error.Class",
          "name": "catchError",
          "normalized": "a b-\u003e(ErrorType a-\u003ea b)-\u003ea b",
          "package": "mtl-tf",
          "partial": "Error",
          "signature": "m a-\u003e(ErrorType m-\u003em a)-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-Error-Class.html#v:catchError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates an exception without a message.\n Default implementation is \u003ccode\u003e\u003ccode\u003e\u003ca\u003estrMsg\u003c/a\u003e\u003c/code\u003e \"\"\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Error.Class",
          "name": "noMsg",
          "package": "mtl-tf",
          "signature": "a",
          "source": "src/Control-Monad-Error-Class.html#noMsg",
          "type": "method"
        },
        "index": {
          "description": "Creates an exception without message Default implementation is strMsg",
          "hierarchy": "Control Monad Error Class",
          "module": "Control.Monad.Error.Class",
          "name": "noMsg",
          "package": "mtl-tf",
          "partial": "Msg",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-Error-Class.html#v:noMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates an exception with a message.\n Default implementation is \u003ccode\u003e\u003ca\u003enoMsg\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Error.Class",
          "name": "strMsg",
          "package": "mtl-tf",
          "signature": "String -\u003e a",
          "source": "src/Control-Monad-Error-Class.html#strMsg",
          "type": "method"
        },
        "index": {
          "description": "Creates an exception with message Default implementation is noMsg",
          "hierarchy": "Control Monad Error Class",
          "module": "Control.Monad.Error.Class",
          "name": "strMsg",
          "normalized": "String-\u003ea",
          "package": "mtl-tf",
          "partial": "Msg",
          "signature": "String-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-Error-Class.html#v:strMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs used within a monadic computation to begin exception processing.\n\u003c/p\u003e",
          "module": "Control.Monad.Error.Class",
          "name": "throwError",
          "package": "mtl-tf",
          "signature": "ErrorType m -\u003e m a",
          "source": "src/Control-Monad-Error-Class.html#throwError",
          "type": "method"
        },
        "index": {
          "description": "Is used within monadic computation to begin exception processing",
          "hierarchy": "Control Monad Error Class",
          "module": "Control.Monad.Error.Class",
          "name": "throwError",
          "normalized": "ErrorType a-\u003ea b",
          "package": "mtl-tf",
          "partial": "Error",
          "signature": "ErrorType m-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-Error-Class.html#v:throwError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003eComputation type:\u003c/dt\u003e\u003cdd\u003e Computations which may fail or throw exceptions.\n\u003c/dd\u003e\u003cdt\u003eBinding strategy:\u003c/dt\u003e\u003cdd\u003e Failure records information about the cause/location\nof the failure. Failure values bypass the bound function,\nother values are used as inputs to the bound function.\n\u003c/dd\u003e\u003cdt\u003eUseful for:\u003c/dt\u003e\u003cdd\u003e Building computations from sequences of functions that may fail\nor using exception handling to structure error handling.\n\u003c/dd\u003e\u003cdt\u003eZero and plus:\u003c/dt\u003e\u003cdd\u003e Zero is represented by an empty error and the plus operation\nexecutes its second argument if the first fails.\n\u003c/dd\u003e\u003cdt\u003eExample type:\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003e\u003ccode\u003eData.Either\u003c/code\u003e String a\u003c/code\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eThe Error monad (also called the Exception monad).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Error",
          "name": "Error",
          "package": "mtl-tf",
          "source": "src/Control-Monad-Error.html",
          "type": "module"
        },
        "index": {
          "description": "Computation type Computations which may fail or throw exceptions Binding strategy Failure records information about the cause location of the failure Failure values bypass the bound function other values are used as inputs to the bound function Useful for Building computations from sequences of functions that may fail or using exception handling to structure error handling Zero and plus Zero is represented by an empty error and the plus operation executes its second argument if the first fails Example type Data.Either String The Error monad also called the Exception monad",
          "hierarchy": "Control Monad Error",
          "module": "Control.Monad.Error",
          "name": "Error",
          "package": "mtl-tf",
          "partial": "Error",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-Error.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe error monad transformer. It can be used to add error handling to other\nmonads.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003eErrorT\u003c/code\u003e Monad structure is parameterized over two things:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e e - The error type.\n\u003c/li\u003e\u003cli\u003e m - The inner monad.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eHere are some examples of use:\n\u003c/p\u003e\u003cpre\u003e -- wraps IO action that can throw an error e\n type ErrorWithIO e a = ErrorT e IO a\n ==\u003e ErrorT (IO (Either e a))\n\n -- IO monad wrapped in StateT inside of ErrorT\n type ErrorAndStateWithIO e s a = ErrorT e (StateT s IO) a\n ==\u003e ErrorT (StateT s IO (Either e a))\n ==\u003e ErrorT (StateT (s -\u003e IO (Either e a,s)))\n\u003c/pre\u003e",
          "module": "Control.Monad.Error",
          "name": "ErrorT",
          "package": "mtl-tf",
          "source": "src/Control-Monad-Error.html#ErrorT",
          "type": "newtype"
        },
        "index": {
          "description": "The error monad transformer It can be used to add error handling to other monads The ErrorT Monad structure is parameterized over two things The error type The inner monad Here are some examples of use wraps IO action that can throw an error type ErrorWithIO ErrorT IO ErrorT IO Either IO monad wrapped in StateT inside of ErrorT type ErrorAndStateWithIO ErrorT StateT IO ErrorT StateT IO Either ErrorT StateT IO Either",
          "hierarchy": "Control Monad Error",
          "module": "Control.Monad.Error",
          "name": "ErrorT",
          "package": "mtl-tf",
          "partial": "Error",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-Error.html#t:ErrorT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Error",
          "name": "ErrorT",
          "package": "mtl-tf",
          "signature": "ErrorT",
          "source": "src/Control-Monad-Error.html#ErrorT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Error",
          "module": "Control.Monad.Error",
          "name": "ErrorT",
          "package": "mtl-tf",
          "partial": "Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-Error.html#v:ErrorT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Error",
          "name": "mapErrorT",
          "package": "mtl-tf",
          "signature": "(m (Either e a) -\u003e n (Either e' b)) -\u003e ErrorT e m a -\u003e ErrorT e' n b",
          "source": "src/Control-Monad-Error.html#mapErrorT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Error",
          "module": "Control.Monad.Error",
          "name": "mapErrorT",
          "normalized": "(a(Either b c)-\u003ed(Either e f))-\u003eErrorT b a c-\u003eErrorT e d f",
          "package": "mtl-tf",
          "partial": "Error",
          "signature": "(m(Either e a)-\u003en(Either e' b))-\u003eErrorT e m a-\u003eErrorT e' n b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-Error.html#v:mapErrorT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Error",
          "name": "runErrorT",
          "package": "mtl-tf",
          "signature": "m (Either e a)",
          "source": "src/Control-Monad-Error.html#ErrorT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Error",
          "module": "Control.Monad.Error",
          "name": "runErrorT",
          "package": "mtl-tf",
          "partial": "Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-Error.html#v:runErrorT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003eComputation type:\u003c/dt\u003e\u003cdd\u003e Simple function application.\n\u003c/dd\u003e\u003cdt\u003eBinding strategy:\u003c/dt\u003e\u003cdd\u003e The bound function is applied to the input value.\n\u003ccode\u003e\u003ccode\u003e\u003ca\u003eIdentity\u003c/a\u003e\u003c/code\u003e x \u003e\u003e= f == \u003ccode\u003e\u003ca\u003eIdentity\u003c/a\u003e\u003c/code\u003e (f x)\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003eUseful for:\u003c/dt\u003e\u003cdd\u003e Monads can be derived from monad transformers applied to the\n\u003ccode\u003e\u003ca\u003eIdentity\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/dd\u003e\u003cdt\u003eZero and plus:\u003c/dt\u003e\u003cdd\u003e None.\n\u003c/dd\u003e\u003cdt\u003eExample type:\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIdentity\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eThe \u003ccode\u003eIdentity\u003c/code\u003e monad is a monad that does not embody any computational strategy.\nIt simply applies the bound function to its input without any modification.\nComputationally, there is no reason to use the \u003ccode\u003eIdentity\u003c/code\u003e monad\ninstead of the much simpler act of simply applying functions to their arguments.\nThe purpose of the \u003ccode\u003eIdentity\u003c/code\u003e monad is its fundamental role in the theory\nof monad transformers.\nAny monad transformer applied to the \u003ccode\u003eIdentity\u003c/code\u003e monad yields a non-transformer\nversion of that monad.\n\u003c/p\u003e\u003cp\u003eInspired by the paper\n  /Functional Programming with Overloading and\n      Higher-Order Polymorphism/,\n    Mark P Jones (\u003ca\u003ehttp://www.cse.ogi.edu/~mpj/\u003c/a\u003e)\n      Advanced School of Functional Programming, 1995.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Identity",
          "name": "Identity",
          "package": "mtl-tf",
          "source": "src/Control-Monad-Identity.html",
          "type": "module"
        },
        "index": {
          "description": "Computation type Simple function application Binding strategy The bound function is applied to the input value Identity Identity Useful for Monads can be derived from monad transformers applied to the Identity monad Zero and plus None Example type Identity The Identity monad is monad that does not embody any computational strategy It simply applies the bound function to its input without any modification Computationally there is no reason to use the Identity monad instead of the much simpler act of simply applying functions to their arguments The purpose of the Identity monad is its fundamental role in the theory of monad transformers Any monad transformer applied to the Identity monad yields non-transformer version of that monad Inspired by the paper Functional Programming with Overloading and Higher-Order Polymorphism Mark Jones http www.cse.ogi.edu mpj Advanced School of Functional Programming",
          "hierarchy": "Control Monad Identity",
          "module": "Control.Monad.Identity",
          "name": "Identity",
          "package": "mtl-tf",
          "partial": "Identity",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-Identity.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentity wrapper.\nAbstraction for wrapping up a object.\nIf you have an monadic function, say:\n\u003c/p\u003e\u003cpre\u003e   example :: Int -\u003e Identity Int\n   example x = return (x*x)\n\u003c/pre\u003e\u003cp\u003eyou can \"run\" it, using\n\u003c/p\u003e\u003cpre\u003e Main\u003e runIdentity (example 42)\n 1764 :: Int\n\u003c/pre\u003e\u003cp\u003eA typical use of the Identity monad is to derive a monad\nfrom a monad transformer.\n\u003c/p\u003e\u003cpre\u003e\n-- derive the \u003ccode\u003eControl.Monad.State.State\u003c/code\u003e monad using the \u003ccode\u003eControl.Monad.State.StateT\u003c/code\u003e monad transformer\ntype \u003ccode\u003eControl.Monad.State.State\u003c/code\u003e s a = \u003ccode\u003eControl.Monad.State.StateT\u003c/code\u003e s \u003ccode\u003e\u003ca\u003eIdentity\u003c/a\u003e\u003c/code\u003e a\n\u003c/pre\u003e\u003cp\u003eThe \u003ccode\u003e\u003ccode\u003e\u003ca\u003erunIdentity\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e label is used in the type definition because it follows\na style of monad definition that explicitly represents monad values as\ncomputations. In this style, a monadic computation is built up using the monadic\noperators and then the value of the computation is extracted\nusing the \u003ccode\u003erun******\u003c/code\u003e function.\nBecause the \u003ccode\u003eIdentity\u003c/code\u003e monad does not do any computation, its definition\nis trivial.\nFor a better example of this style of monad,\nsee the \u003ccode\u003e\u003ccode\u003eControl.Monad.State.State\u003c/code\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Control.Monad.Identity",
          "name": "Identity",
          "package": "mtl-tf",
          "source": "src/Control-Monad-Identity.html#Identity",
          "type": "newtype"
        },
        "index": {
          "description": "Identity wrapper Abstraction for wrapping up object If you have an monadic function say example Int Identity Int example return you can run it using Main runIdentity example Int typical use of the Identity monad is to derive monad from monad transformer derive the Control.Monad.State.State monad using the Control.Monad.State.StateT monad transformer type Control.Monad.State.State Control.Monad.State.StateT Identity The runIdentity label is used in the type definition because it follows style of monad definition that explicitly represents monad values as computations In this style monadic computation is built up using the monadic operators and then the value of the computation is extracted using the run function Because the Identity monad does not do any computation its definition is trivial For better example of this style of monad see the Control.Monad.State.State monad",
          "hierarchy": "Control Monad Identity",
          "module": "Control.Monad.Identity",
          "name": "Identity",
          "package": "mtl-tf",
          "partial": "Identity",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-Identity.html#t:Identity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Identity",
          "name": "Identity",
          "package": "mtl-tf",
          "signature": "Identity",
          "source": "src/Control-Monad-Identity.html#Identity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Identity",
          "module": "Control.Monad.Identity",
          "name": "Identity",
          "package": "mtl-tf",
          "partial": "Identity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-Identity.html#v:Identity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Identity",
          "name": "runIdentity",
          "package": "mtl-tf",
          "signature": "a",
          "source": "src/Control-Monad-Identity.html#Identity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Identity",
          "module": "Control.Monad.Identity",
          "name": "runIdentity",
          "package": "mtl-tf",
          "partial": "Identity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-Identity.html#v:runIdentity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe List monad.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.List",
          "name": "List",
          "package": "mtl-tf",
          "source": "src/Control-Monad-List.html",
          "type": "module"
        },
        "index": {
          "description": "The List monad",
          "hierarchy": "Control Monad List",
          "module": "Control.Monad.List",
          "name": "List",
          "package": "mtl-tf",
          "partial": "List",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-List.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.List",
          "name": "ListT",
          "package": "mtl-tf",
          "source": "src/Control-Monad-List.html#ListT",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Control Monad List",
          "module": "Control.Monad.List",
          "name": "ListT",
          "package": "mtl-tf",
          "partial": "List",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-List.html#t:ListT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.List",
          "name": "ListT",
          "package": "mtl-tf",
          "signature": "ListT",
          "source": "src/Control-Monad-List.html#ListT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad List",
          "module": "Control.Monad.List",
          "name": "ListT",
          "package": "mtl-tf",
          "partial": "List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-List.html#v:ListT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.List",
          "name": "mapListT",
          "package": "mtl-tf",
          "signature": "(m [a] -\u003e n [b]) -\u003e ListT m a -\u003e ListT n b",
          "source": "src/Control-Monad-List.html#mapListT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad List",
          "module": "Control.Monad.List",
          "name": "mapListT",
          "normalized": "(a[b]-\u003ec[d])-\u003eListT a b-\u003eListT c d",
          "package": "mtl-tf",
          "partial": "List",
          "signature": "(m[a]-\u003en[b])-\u003eListT m a-\u003eListT n b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-List.html#v:mapListT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.List",
          "name": "runListT",
          "package": "mtl-tf",
          "signature": "m [a]",
          "source": "src/Control-Monad-List.html#ListT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad List",
          "module": "Control.Monad.List",
          "name": "runListT",
          "normalized": "a[b]",
          "package": "mtl-tf",
          "partial": "List",
          "signature": "m[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-List.html#v:runListT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDeclaration of the MonadRWS class.\n\u003c/p\u003e\u003cp\u003eInspired by the paper\n      /Functional Programming with Overloading and\n          Higher-Order Polymorphism/,\n        Mark P Jones (\u003ca\u003ehttp://www.cse.ogi.edu/~mpj/\u003c/a\u003e)\n          Advanced School of Functional Programming, 1995.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.RWS.Class",
          "name": "Class",
          "package": "mtl-tf",
          "source": "src/Control-Monad-RWS-Class.html",
          "type": "module"
        },
        "index": {
          "description": "Declaration of the MonadRWS class Inspired by the paper Functional Programming with Overloading and Higher-Order Polymorphism Mark Jones http www.cse.ogi.edu mpj Advanced School of Functional Programming",
          "hierarchy": "Control Monad RWS Class",
          "module": "Control.Monad.RWS.Class",
          "name": "Class",
          "package": "mtl-tf",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-RWS-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.RWS.Class",
          "name": "MonadRWS",
          "package": "mtl-tf",
          "source": "src/Control-Monad-RWS-Class.html#MonadRWS",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Monad RWS Class",
          "module": "Control.Monad.RWS.Class",
          "name": "MonadRWS",
          "package": "mtl-tf",
          "partial": "Monad RWS",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-RWS-Class.html#t:MonadRWS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLazy RWS monad.\n\u003c/p\u003e\u003cp\u003eInspired by the paper\n      /Functional Programming with Overloading and\n          Higher-Order Polymorphism/,\n        Mark P Jones (\u003ca\u003ehttp://www.cse.ogi.edu/~mpj/\u003c/a\u003e)\n          Advanced School of Functional Programming, 1995.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.RWS.Lazy",
          "name": "Lazy",
          "package": "mtl-tf",
          "source": "src/Control-Monad-RWS-Lazy.html",
          "type": "module"
        },
        "index": {
          "description": "Lazy RWS monad Inspired by the paper Functional Programming with Overloading and Higher-Order Polymorphism Mark Jones http www.cse.ogi.edu mpj Advanced School of Functional Programming",
          "hierarchy": "Control Monad RWS Lazy",
          "module": "Control.Monad.RWS.Lazy",
          "name": "Lazy",
          "package": "mtl-tf",
          "partial": "Lazy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-RWS-Lazy.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.RWS.Lazy",
          "name": "RWS",
          "package": "mtl-tf",
          "source": "src/Control-Monad-RWS-Lazy.html#RWS",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Control Monad RWS Lazy",
          "module": "Control.Monad.RWS.Lazy",
          "name": "RWS",
          "package": "mtl-tf",
          "partial": "RWS",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-RWS-Lazy.html#t:RWS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.RWS.Lazy",
          "name": "RWST",
          "package": "mtl-tf",
          "source": "src/Control-Monad-RWS-Lazy.html#RWST",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Control Monad RWS Lazy",
          "module": "Control.Monad.RWS.Lazy",
          "name": "RWST",
          "package": "mtl-tf",
          "partial": "RWST",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-RWS-Lazy.html#t:RWST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.RWS.Lazy",
          "name": "RWS",
          "package": "mtl-tf",
          "signature": "RWS",
          "source": "src/Control-Monad-RWS-Lazy.html#RWS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad RWS Lazy",
          "module": "Control.Monad.RWS.Lazy",
          "name": "RWS",
          "package": "mtl-tf",
          "partial": "RWS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-RWS-Lazy.html#v:RWS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.RWS.Lazy",
          "name": "RWST",
          "package": "mtl-tf",
          "signature": "RWST",
          "source": "src/Control-Monad-RWS-Lazy.html#RWST",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad RWS Lazy",
          "module": "Control.Monad.RWS.Lazy",
          "name": "RWST",
          "package": "mtl-tf",
          "partial": "RWST",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-RWS-Lazy.html#v:RWST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.RWS.Lazy",
          "name": "evalRWS",
          "package": "mtl-tf",
          "signature": "RWS r w s a -\u003e r -\u003e s -\u003e (a, w)",
          "source": "src/Control-Monad-RWS-Lazy.html#evalRWS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad RWS Lazy",
          "module": "Control.Monad.RWS.Lazy",
          "name": "evalRWS",
          "normalized": "RWS a b c d-\u003ea-\u003ec-\u003e(d,b)",
          "package": "mtl-tf",
          "partial": "RWS",
          "signature": "RWS r w s a-\u003er-\u003es-\u003e(a,w)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-RWS-Lazy.html#v:evalRWS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.RWS.Lazy",
          "name": "evalRWST",
          "package": "mtl-tf",
          "signature": "RWST r w s m a -\u003e r -\u003e s -\u003e m (a, w)",
          "source": "src/Control-Monad-RWS-Lazy.html#evalRWST",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad RWS Lazy",
          "module": "Control.Monad.RWS.Lazy",
          "name": "evalRWST",
          "normalized": "RWST a b c d e-\u003ea-\u003ec-\u003ed(e,b)",
          "package": "mtl-tf",
          "partial": "RWST",
          "signature": "RWST r w s m a-\u003er-\u003es-\u003em(a,w)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-RWS-Lazy.html#v:evalRWST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.RWS.Lazy",
          "name": "execRWS",
          "package": "mtl-tf",
          "signature": "RWS r w s a -\u003e r -\u003e s -\u003e (s, w)",
          "source": "src/Control-Monad-RWS-Lazy.html#execRWS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad RWS Lazy",
          "module": "Control.Monad.RWS.Lazy",
          "name": "execRWS",
          "normalized": "RWS a b c d-\u003ea-\u003ec-\u003e(c,b)",
          "package": "mtl-tf",
          "partial": "RWS",
          "signature": "RWS r w s a-\u003er-\u003es-\u003e(s,w)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-RWS-Lazy.html#v:execRWS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.RWS.Lazy",
          "name": "execRWST",
          "package": "mtl-tf",
          "signature": "RWST r w s m a -\u003e r -\u003e s -\u003e m (s, w)",
          "source": "src/Control-Monad-RWS-Lazy.html#execRWST",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad RWS Lazy",
          "module": "Control.Monad.RWS.Lazy",
          "name": "execRWST",
          "normalized": "RWST a b c d e-\u003ea-\u003ec-\u003ed(c,b)",
          "package": "mtl-tf",
          "partial": "RWST",
          "signature": "RWST r w s m a-\u003er-\u003es-\u003em(s,w)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-RWS-Lazy.html#v:execRWST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.RWS.Lazy",
          "name": "mapRWS",
          "package": "mtl-tf",
          "signature": "((a, s, w) -\u003e (b, s, w')) -\u003e RWS r w s a -\u003e RWS r w' s b",
          "source": "src/Control-Monad-RWS-Lazy.html#mapRWS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad RWS Lazy",
          "module": "Control.Monad.RWS.Lazy",
          "name": "mapRWS",
          "normalized": "((a,b,c)-\u003e(d,b,e))-\u003eRWS f c b a-\u003eRWS f e b d",
          "package": "mtl-tf",
          "partial": "RWS",
          "signature": "((a,s,w)-\u003e(b,s,w'))-\u003eRWS r w s a-\u003eRWS r w' s b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-RWS-Lazy.html#v:mapRWS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.RWS.Lazy",
          "name": "mapRWST",
          "package": "mtl-tf",
          "signature": "(m (a, s, w) -\u003e n (b, s, w')) -\u003e RWST r w s m a -\u003e RWST r w' s n b",
          "source": "src/Control-Monad-RWS-Lazy.html#mapRWST",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad RWS Lazy",
          "module": "Control.Monad.RWS.Lazy",
          "name": "mapRWST",
          "normalized": "(a(b,c,d)-\u003ee(f,c,g))-\u003eRWST h d c a b-\u003eRWST h g c e f",
          "package": "mtl-tf",
          "partial": "RWST",
          "signature": "(m(a,s,w)-\u003en(b,s,w'))-\u003eRWST r w s m a-\u003eRWST r w' s n b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-RWS-Lazy.html#v:mapRWST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.RWS.Lazy",
          "name": "runRWS",
          "package": "mtl-tf",
          "signature": "r -\u003e s -\u003e (a, s, w)",
          "source": "src/Control-Monad-RWS-Lazy.html#RWS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad RWS Lazy",
          "module": "Control.Monad.RWS.Lazy",
          "name": "runRWS",
          "normalized": "a-\u003eb-\u003e(c,b,d)",
          "package": "mtl-tf",
          "partial": "RWS",
          "signature": "r-\u003es-\u003e(a,s,w)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-RWS-Lazy.html#v:runRWS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.RWS.Lazy",
          "name": "runRWST",
          "package": "mtl-tf",
          "signature": "r -\u003e s -\u003e m (a, s, w)",
          "source": "src/Control-Monad-RWS-Lazy.html#RWST",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad RWS Lazy",
          "module": "Control.Monad.RWS.Lazy",
          "name": "runRWST",
          "normalized": "a-\u003eb-\u003ec(d,b,e)",
          "package": "mtl-tf",
          "partial": "RWST",
          "signature": "r-\u003es-\u003em(a,s,w)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-RWS-Lazy.html#v:runRWST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.RWS.Lazy",
          "name": "withRWS",
          "package": "mtl-tf",
          "signature": "(r' -\u003e s -\u003e (r, s)) -\u003e RWS r w s a -\u003e RWS r' w s a",
          "source": "src/Control-Monad-RWS-Lazy.html#withRWS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad RWS Lazy",
          "module": "Control.Monad.RWS.Lazy",
          "name": "withRWS",
          "normalized": "(a-\u003eb-\u003e(c,b))-\u003eRWS c d b e-\u003eRWS a d b e",
          "package": "mtl-tf",
          "partial": "RWS",
          "signature": "(r'-\u003es-\u003e(r,s))-\u003eRWS r w s a-\u003eRWS r' w s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-RWS-Lazy.html#v:withRWS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.RWS.Lazy",
          "name": "withRWST",
          "package": "mtl-tf",
          "signature": "(r' -\u003e s -\u003e (r, s)) -\u003e RWST r w s m a -\u003e RWST r' w s m a",
          "source": "src/Control-Monad-RWS-Lazy.html#withRWST",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad RWS Lazy",
          "module": "Control.Monad.RWS.Lazy",
          "name": "withRWST",
          "normalized": "(a-\u003eb-\u003e(c,b))-\u003eRWST c d b e f-\u003eRWST a d b e f",
          "package": "mtl-tf",
          "partial": "RWST",
          "signature": "(r'-\u003es-\u003e(r,s))-\u003eRWST r w s m a-\u003eRWST r' w s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-RWS-Lazy.html#v:withRWST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eStrict RWS Monad.\n\u003c/p\u003e\u003cp\u003eInspired by the paper\n      /Functional Programming with Overloading and\n          Higher-Order Polymorphism/,\n        Mark P Jones (\u003ca\u003ehttp://www.cse.ogi.edu/~mpj/\u003c/a\u003e)\n          Advanced School of Functional Programming, 1995.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.RWS.Strict",
          "name": "Strict",
          "package": "mtl-tf",
          "source": "src/Control-Monad-RWS-Strict.html",
          "type": "module"
        },
        "index": {
          "description": "Strict RWS Monad Inspired by the paper Functional Programming with Overloading and Higher-Order Polymorphism Mark Jones http www.cse.ogi.edu mpj Advanced School of Functional Programming",
          "hierarchy": "Control Monad RWS Strict",
          "module": "Control.Monad.RWS.Strict",
          "name": "Strict",
          "package": "mtl-tf",
          "partial": "Strict",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-RWS-Strict.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.RWS.Strict",
          "name": "RWS",
          "package": "mtl-tf",
          "source": "src/Control-Monad-RWS-Strict.html#RWS",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Control Monad RWS Strict",
          "module": "Control.Monad.RWS.Strict",
          "name": "RWS",
          "package": "mtl-tf",
          "partial": "RWS",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-RWS-Strict.html#t:RWS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.RWS.Strict",
          "name": "RWST",
          "package": "mtl-tf",
          "source": "src/Control-Monad-RWS-Strict.html#RWST",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Control Monad RWS Strict",
          "module": "Control.Monad.RWS.Strict",
          "name": "RWST",
          "package": "mtl-tf",
          "partial": "RWST",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-RWS-Strict.html#t:RWST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.RWS.Strict",
          "name": "RWS",
          "package": "mtl-tf",
          "signature": "RWS",
          "source": "src/Control-Monad-RWS-Strict.html#RWS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad RWS Strict",
          "module": "Control.Monad.RWS.Strict",
          "name": "RWS",
          "package": "mtl-tf",
          "partial": "RWS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-RWS-Strict.html#v:RWS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.RWS.Strict",
          "name": "RWST",
          "package": "mtl-tf",
          "signature": "RWST",
          "source": "src/Control-Monad-RWS-Strict.html#RWST",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad RWS Strict",
          "module": "Control.Monad.RWS.Strict",
          "name": "RWST",
          "package": "mtl-tf",
          "partial": "RWST",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-RWS-Strict.html#v:RWST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.RWS.Strict",
          "name": "evalRWS",
          "package": "mtl-tf",
          "signature": "RWS r w s a -\u003e r -\u003e s -\u003e (a, w)",
          "source": "src/Control-Monad-RWS-Strict.html#evalRWS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad RWS Strict",
          "module": "Control.Monad.RWS.Strict",
          "name": "evalRWS",
          "normalized": "RWS a b c d-\u003ea-\u003ec-\u003e(d,b)",
          "package": "mtl-tf",
          "partial": "RWS",
          "signature": "RWS r w s a-\u003er-\u003es-\u003e(a,w)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-RWS-Strict.html#v:evalRWS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.RWS.Strict",
          "name": "evalRWST",
          "package": "mtl-tf",
          "signature": "RWST r w s m a -\u003e r -\u003e s -\u003e m (a, w)",
          "source": "src/Control-Monad-RWS-Strict.html#evalRWST",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad RWS Strict",
          "module": "Control.Monad.RWS.Strict",
          "name": "evalRWST",
          "normalized": "RWST a b c d e-\u003ea-\u003ec-\u003ed(e,b)",
          "package": "mtl-tf",
          "partial": "RWST",
          "signature": "RWST r w s m a-\u003er-\u003es-\u003em(a,w)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-RWS-Strict.html#v:evalRWST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.RWS.Strict",
          "name": "execRWS",
          "package": "mtl-tf",
          "signature": "RWS r w s a -\u003e r -\u003e s -\u003e (s, w)",
          "source": "src/Control-Monad-RWS-Strict.html#execRWS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad RWS Strict",
          "module": "Control.Monad.RWS.Strict",
          "name": "execRWS",
          "normalized": "RWS a b c d-\u003ea-\u003ec-\u003e(c,b)",
          "package": "mtl-tf",
          "partial": "RWS",
          "signature": "RWS r w s a-\u003er-\u003es-\u003e(s,w)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-RWS-Strict.html#v:execRWS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.RWS.Strict",
          "name": "execRWST",
          "package": "mtl-tf",
          "signature": "RWST r w s m a -\u003e r -\u003e s -\u003e m (s, w)",
          "source": "src/Control-Monad-RWS-Strict.html#execRWST",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad RWS Strict",
          "module": "Control.Monad.RWS.Strict",
          "name": "execRWST",
          "normalized": "RWST a b c d e-\u003ea-\u003ec-\u003ed(c,b)",
          "package": "mtl-tf",
          "partial": "RWST",
          "signature": "RWST r w s m a-\u003er-\u003es-\u003em(s,w)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-RWS-Strict.html#v:execRWST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.RWS.Strict",
          "name": "mapRWS",
          "package": "mtl-tf",
          "signature": "((a, s, w) -\u003e (b, s, w')) -\u003e RWS r w s a -\u003e RWS r w' s b",
          "source": "src/Control-Monad-RWS-Strict.html#mapRWS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad RWS Strict",
          "module": "Control.Monad.RWS.Strict",
          "name": "mapRWS",
          "normalized": "((a,b,c)-\u003e(d,b,e))-\u003eRWS f c b a-\u003eRWS f e b d",
          "package": "mtl-tf",
          "partial": "RWS",
          "signature": "((a,s,w)-\u003e(b,s,w'))-\u003eRWS r w s a-\u003eRWS r w' s b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-RWS-Strict.html#v:mapRWS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.RWS.Strict",
          "name": "mapRWST",
          "package": "mtl-tf",
          "signature": "(m (a, s, w) -\u003e n (b, s, w')) -\u003e RWST r w s m a -\u003e RWST r w' s n b",
          "source": "src/Control-Monad-RWS-Strict.html#mapRWST",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad RWS Strict",
          "module": "Control.Monad.RWS.Strict",
          "name": "mapRWST",
          "normalized": "(a(b,c,d)-\u003ee(f,c,g))-\u003eRWST h d c a b-\u003eRWST h g c e f",
          "package": "mtl-tf",
          "partial": "RWST",
          "signature": "(m(a,s,w)-\u003en(b,s,w'))-\u003eRWST r w s m a-\u003eRWST r w' s n b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-RWS-Strict.html#v:mapRWST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.RWS.Strict",
          "name": "runRWS",
          "package": "mtl-tf",
          "signature": "r -\u003e s -\u003e (a, s, w)",
          "source": "src/Control-Monad-RWS-Strict.html#RWS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad RWS Strict",
          "module": "Control.Monad.RWS.Strict",
          "name": "runRWS",
          "normalized": "a-\u003eb-\u003e(c,b,d)",
          "package": "mtl-tf",
          "partial": "RWS",
          "signature": "r-\u003es-\u003e(a,s,w)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-RWS-Strict.html#v:runRWS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.RWS.Strict",
          "name": "runRWST",
          "package": "mtl-tf",
          "signature": "r -\u003e s -\u003e m (a, s, w)",
          "source": "src/Control-Monad-RWS-Strict.html#RWST",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad RWS Strict",
          "module": "Control.Monad.RWS.Strict",
          "name": "runRWST",
          "normalized": "a-\u003eb-\u003ec(d,b,e)",
          "package": "mtl-tf",
          "partial": "RWST",
          "signature": "r-\u003es-\u003em(a,s,w)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-RWS-Strict.html#v:runRWST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.RWS.Strict",
          "name": "withRWS",
          "package": "mtl-tf",
          "signature": "(r' -\u003e s -\u003e (r, s)) -\u003e RWS r w s a -\u003e RWS r' w s a",
          "source": "src/Control-Monad-RWS-Strict.html#withRWS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad RWS Strict",
          "module": "Control.Monad.RWS.Strict",
          "name": "withRWS",
          "normalized": "(a-\u003eb-\u003e(c,b))-\u003eRWS c d b e-\u003eRWS a d b e",
          "package": "mtl-tf",
          "partial": "RWS",
          "signature": "(r'-\u003es-\u003e(r,s))-\u003eRWS r w s a-\u003eRWS r' w s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-RWS-Strict.html#v:withRWS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.RWS.Strict",
          "name": "withRWST",
          "package": "mtl-tf",
          "signature": "(r' -\u003e s -\u003e (r, s)) -\u003e RWST r w s m a -\u003e RWST r' w s m a",
          "source": "src/Control-Monad-RWS-Strict.html#withRWST",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad RWS Strict",
          "module": "Control.Monad.RWS.Strict",
          "name": "withRWST",
          "normalized": "(a-\u003eb-\u003e(c,b))-\u003eRWST c d b e f-\u003eRWST a d b e f",
          "package": "mtl-tf",
          "partial": "RWST",
          "signature": "(r'-\u003es-\u003e(r,s))-\u003eRWST r w s m a-\u003eRWST r' w s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-RWS-Strict.html#v:withRWST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDeclaration of the MonadRWS class.\n\u003c/p\u003e\u003cp\u003eInspired by the paper\n      /Functional Programming with Overloading and\n          Higher-Order Polymorphism/,\n        Mark P Jones (\u003ca\u003ehttp://www.cse.ogi.edu/~mpj/\u003c/a\u003e)\n          Advanced School of Functional Programming, 1995.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.RWS",
          "name": "RWS",
          "package": "mtl-tf",
          "source": "src/Control-Monad-RWS.html",
          "type": "module"
        },
        "index": {
          "description": "Declaration of the MonadRWS class Inspired by the paper Functional Programming with Overloading and Higher-Order Polymorphism Mark Jones http www.cse.ogi.edu mpj Advanced School of Functional Programming",
          "hierarchy": "Control Monad RWS",
          "module": "Control.Monad.RWS",
          "name": "RWS",
          "package": "mtl-tf",
          "partial": "RWS",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-RWS.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003eComputation type:\u003c/dt\u003e\u003cdd\u003e Computations which read values from a shared environment.\n\u003c/dd\u003e\u003cdt\u003eBinding strategy:\u003c/dt\u003e\u003cdd\u003e Monad values are functions from the environment to a value.\nThe bound function is applied to the bound value, and both have access\nto the shared environment.\n\u003c/dd\u003e\u003cdt\u003eUseful for:\u003c/dt\u003e\u003cdd\u003e Maintaining variable bindings, or other shared environment.\n\u003c/dd\u003e\u003cdt\u003eZero and plus:\u003c/dt\u003e\u003cdd\u003e None.\n\u003c/dd\u003e\u003cdt\u003eExample type:\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003e\u003ccode\u003eReader\u003c/code\u003e [(String,Value)] a\u003c/code\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eThe \u003ccode\u003eReader\u003c/code\u003e monad (also called the Environment monad).\nRepresents a computation, which can read values from\na shared environment, pass values from function to function,\nand execute sub-computations in a modified environment.\nUsing \u003ccode\u003eReader\u003c/code\u003e monad for such computations is often clearer and easier\nthan using the \u003ccode\u003eControl.Monad.State.State\u003c/code\u003e monad.\n\u003c/p\u003e\u003cp\u003eInspired by the paper\n  /Functional Programming with Overloading and\n      Higher-Order Polymorphism/, \n    Mark P Jones (\u003ca\u003ehttp://www.cse.ogi.edu/~mpj/\u003c/a\u003e)\n    Advanced School of Functional Programming, 1995.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Reader.Class",
          "name": "Class",
          "package": "mtl-tf",
          "source": "src/Control-Monad-Reader-Class.html",
          "type": "module"
        },
        "index": {
          "description": "Computation type Computations which read values from shared environment Binding strategy Monad values are functions from the environment to value The bound function is applied to the bound value and both have access to the shared environment Useful for Maintaining variable bindings or other shared environment Zero and plus None Example type Reader String Value The Reader monad also called the Environment monad Represents computation which can read values from shared environment pass values from function to function and execute sub-computations in modified environment Using Reader monad for such computations is often clearer and easier than using the Control.Monad.State.State monad Inspired by the paper Functional Programming with Overloading and Higher-Order Polymorphism Mark Jones http www.cse.ogi.edu mpj Advanced School of Functional Programming",
          "hierarchy": "Control Monad Reader Class",
          "module": "Control.Monad.Reader.Class",
          "name": "Class",
          "package": "mtl-tf",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-Reader-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Reader.Class",
          "name": "EnvType",
          "package": "mtl-tf",
          "signature": "EnvType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Reader Class",
          "module": "Control.Monad.Reader.Class",
          "name": "EnvType",
          "package": "mtl-tf",
          "partial": "Env Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-Reader-Class.html#t:EnvType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee examples in \u003ca\u003eControl.Monad.Reader\u003c/a\u003e.\nNote, the partially applied function type \u003ccode\u003e(-\u003e) r\u003c/code\u003e is a simple reader monad.\nSee the \u003ccode\u003einstance\u003c/code\u003e declaration below.\n\u003c/p\u003e",
          "module": "Control.Monad.Reader.Class",
          "name": "MonadReader",
          "package": "mtl-tf",
          "source": "src/Control-Monad-Reader-Class.html#MonadReader",
          "type": "class"
        },
        "index": {
          "description": "See examples in Control.Monad.Reader Note the partially applied function type is simple reader monad See the instance declaration below",
          "hierarchy": "Control Monad Reader Class",
          "module": "Control.Monad.Reader.Class",
          "name": "MonadReader",
          "package": "mtl-tf",
          "partial": "Monad Reader",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-Reader-Class.html#t:MonadReader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieves the monad environment.\n\u003c/p\u003e",
          "module": "Control.Monad.Reader.Class",
          "name": "ask",
          "package": "mtl-tf",
          "signature": "m (EnvType m)",
          "source": "src/Control-Monad-Reader-Class.html#ask",
          "type": "method"
        },
        "index": {
          "description": "Retrieves the monad environment",
          "hierarchy": "Control Monad Reader Class",
          "module": "Control.Monad.Reader.Class",
          "name": "ask",
          "package": "mtl-tf",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-Reader-Class.html#v:ask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieves a function of the current environment. Parameters:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The selector function to apply to the environment.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eSee an example in \u003ca\u003eControl.Monad.Reader\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Reader.Class",
          "name": "asks",
          "package": "mtl-tf",
          "signature": "(EnvType m -\u003e a) -\u003e m a",
          "source": "src/Control-Monad-Reader-Class.html#asks",
          "type": "function"
        },
        "index": {
          "description": "Retrieves function of the current environment Parameters The selector function to apply to the environment See an example in Control.Monad.Reader",
          "hierarchy": "Control Monad Reader Class",
          "module": "Control.Monad.Reader.Class",
          "name": "asks",
          "normalized": "(EnvType a-\u003eb)-\u003ea b",
          "package": "mtl-tf",
          "signature": "(EnvType m-\u003ea)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-Reader-Class.html#v:asks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecutes a computation in a modified environment. Parameters:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The function to modify the environment.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eReader\u003c/code\u003e to run.\n\u003c/li\u003e\u003cli\u003e The resulting \u003ccode\u003eReader\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.Monad.Reader.Class",
          "name": "local",
          "package": "mtl-tf",
          "signature": "(EnvType m -\u003e EnvType m) -\u003e m a -\u003e m a",
          "source": "src/Control-Monad-Reader-Class.html#local",
          "type": "method"
        },
        "index": {
          "description": "Executes computation in modified environment Parameters The function to modify the environment Reader to run The resulting Reader",
          "hierarchy": "Control Monad Reader Class",
          "module": "Control.Monad.Reader.Class",
          "name": "local",
          "normalized": "(EnvType a-\u003eEnvType a)-\u003ea b-\u003ea b",
          "package": "mtl-tf",
          "signature": "(EnvType m-\u003eEnvType m)-\u003em a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-Reader-Class.html#v:local"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003eComputation type:\u003c/dt\u003e\u003cdd\u003e Computations which read values from a shared environment.\n\u003c/dd\u003e\u003cdt\u003eBinding strategy:\u003c/dt\u003e\u003cdd\u003e Monad values are functions from the environment to a value.\nThe bound function is applied to the bound value, and both have access\nto the shared environment.\n\u003c/dd\u003e\u003cdt\u003eUseful for:\u003c/dt\u003e\u003cdd\u003e Maintaining variable bindings, or other shared environment.\n\u003c/dd\u003e\u003cdt\u003eZero and plus:\u003c/dt\u003e\u003cdd\u003e None.\n\u003c/dd\u003e\u003cdt\u003eExample type:\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003eReader\u003c/a\u003e\u003c/code\u003e [(String,Value)] a\u003c/code\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eReader\u003c/a\u003e\u003c/code\u003e monad (also called the Environment monad).\nRepresents a computation, which can read values from\na shared environment, pass values from function to function,\nand execute sub-computations in a modified environment.\nUsing \u003ccode\u003e\u003ca\u003eReader\u003c/a\u003e\u003c/code\u003e monad for such computations is often clearer and easier\nthan using the \u003ccode\u003eControl.Monad.State.State\u003c/code\u003e monad.\n\u003c/p\u003e\u003cp\u003eInspired by the paper\n  /Functional Programming with Overloading and\n      Higher-Order Polymorphism/, \n    Mark P Jones (\u003ca\u003ehttp://www.cse.ogi.edu/~mpj/\u003c/a\u003e)\n    Advanced School of Functional Programming, 1995.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Reader",
          "name": "Reader",
          "package": "mtl-tf",
          "source": "src/Control-Monad-Reader.html",
          "type": "module"
        },
        "index": {
          "description": "Computation type Computations which read values from shared environment Binding strategy Monad values are functions from the environment to value The bound function is applied to the bound value and both have access to the shared environment Useful for Maintaining variable bindings or other shared environment Zero and plus None Example type Reader String Value The Reader monad also called the Environment monad Represents computation which can read values from shared environment pass values from function to function and execute sub-computations in modified environment Using Reader monad for such computations is often clearer and easier than using the Control.Monad.State.State monad Inspired by the paper Functional Programming with Overloading and Higher-Order Polymorphism Mark Jones http www.cse.ogi.edu mpj Advanced School of Functional Programming",
          "hierarchy": "Control Monad Reader",
          "module": "Control.Monad.Reader",
          "name": "Reader",
          "package": "mtl-tf",
          "partial": "Reader",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-Reader.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parameterizable reader monad.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003ereturn\u003c/code\u003e function creates a \u003ccode\u003eReader\u003c/code\u003e that ignores the environment,\nand produces the given value.\n\u003c/p\u003e\u003cp\u003eThe binding operator \u003ccode\u003e\u003e\u003e=\u003c/code\u003e produces a \u003ccode\u003eReader\u003c/code\u003e that uses the environment\nto extract the value its left-hand side,\nand then applies the bound function to that value in the same environment.\n\u003c/p\u003e",
          "module": "Control.Monad.Reader",
          "name": "Reader",
          "package": "mtl-tf",
          "source": "src/Control-Monad-Reader.html#Reader",
          "type": "newtype"
        },
        "index": {
          "description": "The parameterizable reader monad The return function creates Reader that ignores the environment and produces the given value The binding operator produces Reader that uses the environment to extract the value its left-hand side and then applies the bound function to that value in the same environment",
          "hierarchy": "Control Monad Reader",
          "module": "Control.Monad.Reader",
          "name": "Reader",
          "package": "mtl-tf",
          "partial": "Reader",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-Reader.html#t:Reader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe reader monad transformer.\nCan be used to add environment reading functionality to other monads.\n\u003c/p\u003e",
          "module": "Control.Monad.Reader",
          "name": "ReaderT",
          "package": "mtl-tf",
          "source": "src/Control-Monad-Reader.html#ReaderT",
          "type": "newtype"
        },
        "index": {
          "description": "The reader monad transformer Can be used to add environment reading functionality to other monads",
          "hierarchy": "Control Monad Reader",
          "module": "Control.Monad.Reader",
          "name": "ReaderT",
          "package": "mtl-tf",
          "partial": "Reader",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-Reader.html#t:ReaderT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Reader",
          "name": "Reader",
          "package": "mtl-tf",
          "signature": "Reader",
          "source": "src/Control-Monad-Reader.html#Reader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Reader",
          "module": "Control.Monad.Reader",
          "name": "Reader",
          "package": "mtl-tf",
          "partial": "Reader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-Reader.html#v:Reader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Reader",
          "name": "ReaderT",
          "package": "mtl-tf",
          "signature": "ReaderT",
          "source": "src/Control-Monad-Reader.html#ReaderT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Reader",
          "module": "Control.Monad.Reader",
          "name": "ReaderT",
          "package": "mtl-tf",
          "partial": "Reader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-Reader.html#v:ReaderT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Reader",
          "name": "mapReader",
          "package": "mtl-tf",
          "signature": "(a -\u003e b) -\u003e Reader r a -\u003e Reader r b",
          "source": "src/Control-Monad-Reader.html#mapReader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Reader",
          "module": "Control.Monad.Reader",
          "name": "mapReader",
          "normalized": "(a-\u003eb)-\u003eReader c a-\u003eReader c b",
          "package": "mtl-tf",
          "partial": "Reader",
          "signature": "(a-\u003eb)-\u003eReader r a-\u003eReader r b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-Reader.html#v:mapReader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Reader",
          "name": "mapReaderT",
          "package": "mtl-tf",
          "signature": "(m a -\u003e n b) -\u003e ReaderT w m a -\u003e ReaderT w n b",
          "source": "src/Control-Monad-Reader.html#mapReaderT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Reader",
          "module": "Control.Monad.Reader",
          "name": "mapReaderT",
          "normalized": "(a b-\u003ec d)-\u003eReaderT e a b-\u003eReaderT e c d",
          "package": "mtl-tf",
          "partial": "Reader",
          "signature": "(m a-\u003en b)-\u003eReaderT w m a-\u003eReaderT w n b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-Reader.html#v:mapReaderT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns \u003ccode\u003eReader\u003c/code\u003e and extracts the final value from it.\n    To extract the value apply \u003ccode\u003e(runReader reader)\u003c/code\u003e to an environment value.  \n    Parameters:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e A \u003ccode\u003eReader\u003c/code\u003e to run.\n\u003c/li\u003e\u003cli\u003e An initial environment.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.Monad.Reader",
          "name": "runReader",
          "package": "mtl-tf",
          "signature": "r -\u003e a",
          "source": "src/Control-Monad-Reader.html#Reader",
          "type": "function"
        },
        "index": {
          "description": "Runs Reader and extracts the final value from it To extract the value apply runReader reader to an environment value Parameters Reader to run An initial environment",
          "hierarchy": "Control Monad Reader",
          "module": "Control.Monad.Reader",
          "name": "runReader",
          "normalized": "a-\u003eb",
          "package": "mtl-tf",
          "partial": "Reader",
          "signature": "r-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-Reader.html#v:runReader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Reader",
          "name": "runReaderT",
          "package": "mtl-tf",
          "signature": "r -\u003e m a",
          "source": "src/Control-Monad-Reader.html#ReaderT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Reader",
          "module": "Control.Monad.Reader",
          "name": "runReaderT",
          "normalized": "a-\u003eb c",
          "package": "mtl-tf",
          "partial": "Reader",
          "signature": "r-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-Reader.html#v:runReaderT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA more general version of \u003ccode\u003e\u003ca\u003elocal\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Reader",
          "name": "withReader",
          "package": "mtl-tf",
          "signature": "(r' -\u003e r) -\u003e Reader r a -\u003e Reader r' a",
          "source": "src/Control-Monad-Reader.html#withReader",
          "type": "function"
        },
        "index": {
          "description": "more general version of local",
          "hierarchy": "Control Monad Reader",
          "module": "Control.Monad.Reader",
          "name": "withReader",
          "normalized": "(a-\u003eb)-\u003eReader b c-\u003eReader a c",
          "package": "mtl-tf",
          "partial": "Reader",
          "signature": "(r'-\u003er)-\u003eReader r a-\u003eReader r' a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-Reader.html#v:withReader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Reader",
          "name": "withReaderT",
          "package": "mtl-tf",
          "signature": "(r' -\u003e r) -\u003e ReaderT r m a -\u003e ReaderT r' m a",
          "source": "src/Control-Monad-Reader.html#withReaderT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Reader",
          "module": "Control.Monad.Reader",
          "name": "withReaderT",
          "normalized": "(a-\u003eb)-\u003eReaderT b c d-\u003eReaderT a c d",
          "package": "mtl-tf",
          "partial": "Reader",
          "signature": "(r'-\u003er)-\u003eReaderT r m a-\u003eReaderT r' m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-Reader.html#v:withReaderT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMonadState class.\n\u003c/p\u003e\u003cp\u003eThis module is inspired by the paper\n      /Functional Programming with Overloading and\n          Higher-Order Polymorphism/,\n        Mark P Jones (\u003ca\u003ehttp://www.cse.ogi.edu/~mpj/\u003c/a\u003e)\n          Advanced School of Functional Programming, 1995.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.State.Class",
          "name": "Class",
          "package": "mtl-tf",
          "source": "src/Control-Monad-State-Class.html",
          "type": "module"
        },
        "index": {
          "description": "MonadState class This module is inspired by the paper Functional Programming with Overloading and Higher-Order Polymorphism Mark Jones http www.cse.ogi.edu mpj Advanced School of Functional Programming",
          "hierarchy": "Control Monad State Class",
          "module": "Control.Monad.State.Class",
          "name": "Class",
          "package": "mtl-tf",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-State-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eget\u003c/em\u003e returns the state from the internals of the monad.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eput\u003c/em\u003e replaces the state inside the monad.\n\u003c/p\u003e",
          "module": "Control.Monad.State.Class",
          "name": "MonadState",
          "package": "mtl-tf",
          "source": "src/Control-Monad-State-Class.html#MonadState",
          "type": "class"
        },
        "index": {
          "description": "get returns the state from the internals of the monad put replaces the state inside the monad",
          "hierarchy": "Control Monad State Class",
          "module": "Control.Monad.State.Class",
          "name": "MonadState",
          "package": "mtl-tf",
          "partial": "Monad State",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-State-Class.html#t:MonadState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.State.Class",
          "name": "StateType",
          "package": "mtl-tf",
          "signature": "StateType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad State Class",
          "module": "Control.Monad.State.Class",
          "name": "StateType",
          "package": "mtl-tf",
          "partial": "State Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-State-Class.html#t:StateType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.State.Class",
          "name": "get",
          "package": "mtl-tf",
          "signature": "m (StateType m)",
          "source": "src/Control-Monad-State-Class.html#get",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad State Class",
          "module": "Control.Monad.State.Class",
          "name": "get",
          "package": "mtl-tf",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-State-Class.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets specific component of the state, using a projection function\n supplied.\n\u003c/p\u003e",
          "module": "Control.Monad.State.Class",
          "name": "gets",
          "package": "mtl-tf",
          "signature": "(StateType m -\u003e a) -\u003e m a",
          "source": "src/Control-Monad-State-Class.html#gets",
          "type": "function"
        },
        "index": {
          "description": "Gets specific component of the state using projection function supplied",
          "hierarchy": "Control Monad State Class",
          "module": "Control.Monad.State.Class",
          "name": "gets",
          "normalized": "(StateType a-\u003eb)-\u003ea b",
          "package": "mtl-tf",
          "signature": "(StateType m-\u003ea)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-State-Class.html#v:gets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonadic state transformer.\n\u003c/p\u003e\u003cp\u003eMaps an old state to a new state inside a state monad.\n      The old state is thrown away.\n\u003c/p\u003e\u003cpre\u003e      Main\u003e :t modify ((+1) :: Int -\u003e Int)\n      modify (...) :: (MonadState Int a) =\u003e a ()\n\u003c/pre\u003e\u003cp\u003eThis says that \u003ccode\u003emodify (+1)\u003c/code\u003e acts over any\n    Monad that is a member of the \u003ccode\u003eMonadState\u003c/code\u003e class,\n    with an \u003ccode\u003eInt\u003c/code\u003e state.\n\u003c/p\u003e",
          "module": "Control.Monad.State.Class",
          "name": "modify",
          "package": "mtl-tf",
          "signature": "(StateType m -\u003e StateType m) -\u003e m ()",
          "source": "src/Control-Monad-State-Class.html#modify",
          "type": "function"
        },
        "index": {
          "description": "Monadic state transformer Maps an old state to new state inside state monad The old state is thrown away Main modify Int Int modify MonadState Int This says that modify acts over any Monad that is member of the MonadState class with an Int state",
          "hierarchy": "Control Monad State Class",
          "module": "Control.Monad.State.Class",
          "name": "modify",
          "normalized": "(StateType a-\u003eStateType a)-\u003ea()",
          "package": "mtl-tf",
          "signature": "(StateType m-\u003eStateType m)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-State-Class.html#v:modify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.State.Class",
          "name": "put",
          "package": "mtl-tf",
          "signature": "StateType m -\u003e m ()",
          "source": "src/Control-Monad-State-Class.html#put",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad State Class",
          "module": "Control.Monad.State.Class",
          "name": "put",
          "normalized": "StateType a-\u003ea()",
          "package": "mtl-tf",
          "signature": "StateType m-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-State-Class.html#v:put"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLazy state monads.\n\u003c/p\u003e\u003cp\u003eThis module is inspired by the paper\n      /Functional Programming with Overloading and\n          Higher-Order Polymorphism/,\n        Mark P Jones (\u003ca\u003ehttp://www.cse.ogi.edu/~mpj/\u003c/a\u003e)\n          Advanced School of Functional Programming, 1995.\n\u003c/p\u003e\u003cp\u003eSee below for examples.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.State.Lazy",
          "name": "Lazy",
          "package": "mtl-tf",
          "source": "src/Control-Monad-State-Lazy.html",
          "type": "module"
        },
        "index": {
          "description": "Lazy state monads This module is inspired by the paper Functional Programming with Overloading and Higher-Order Polymorphism Mark Jones http www.cse.ogi.edu mpj Advanced School of Functional Programming See below for examples",
          "hierarchy": "Control Monad State Lazy",
          "module": "Control.Monad.State.Lazy",
          "name": "Lazy",
          "package": "mtl-tf",
          "partial": "Lazy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-State-Lazy.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA parameterizable state monad where \u003cem\u003es\u003c/em\u003e is the type of the state\n to carry and \u003cem\u003ea\u003c/em\u003e is the type of the \u003cem\u003ereturn value\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.State.Lazy",
          "name": "State",
          "package": "mtl-tf",
          "source": "src/Control-Monad-State-Lazy.html#State",
          "type": "newtype"
        },
        "index": {
          "description": "parameterizable state monad where is the type of the state to carry and is the type of the return value",
          "hierarchy": "Control Monad State Lazy",
          "module": "Control.Monad.State.Lazy",
          "name": "State",
          "package": "mtl-tf",
          "partial": "State",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-State-Lazy.html#t:State"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA parameterizable state monad for encapsulating an inner\n monad.\n\u003c/p\u003e\u003cp\u003eThe StateT Monad structure is parameterized over two things:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e s - The state.\n\u003c/li\u003e\u003cli\u003e m - The inner monad.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eHere are some examples of use:\n\u003c/p\u003e\u003cp\u003e(Parser from ParseLib with Hugs)\n\u003c/p\u003e\u003cpre\u003e  type Parser a = StateT String [] a\n     ==\u003e StateT (String -\u003e [(a,String)])\n\u003c/pre\u003e\u003cp\u003eFor example, item can be written as:\n\u003c/p\u003e\u003cpre\u003e   item = do (x:xs) \u003c- get\n          put xs\n          return x\n\n   type BoringState s a = StateT s Indentity a\n        ==\u003e StateT (s -\u003e Identity (a,s))\n\n   type StateWithIO s a = StateT s IO a\n        ==\u003e StateT (s -\u003e IO (a,s))\n\n   type StateWithErr s a = StateT s Maybe a\n        ==\u003e StateT (s -\u003e Maybe (a,s))\n\u003c/pre\u003e",
          "module": "Control.Monad.State.Lazy",
          "name": "StateT",
          "package": "mtl-tf",
          "source": "src/Control-Monad-State-Lazy.html#StateT",
          "type": "newtype"
        },
        "index": {
          "description": "parameterizable state monad for encapsulating an inner monad The StateT Monad structure is parameterized over two things The state The inner monad Here are some examples of use Parser from ParseLib with Hugs type Parser StateT String StateT String String For example item can be written as item do xs get put xs return type BoringState StateT Indentity StateT Identity type StateWithIO StateT IO StateT IO type StateWithErr StateT Maybe StateT Maybe",
          "hierarchy": "Control Monad State Lazy",
          "module": "Control.Monad.State.Lazy",
          "name": "StateT",
          "package": "mtl-tf",
          "partial": "State",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-State-Lazy.html#t:StateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.State.Lazy",
          "name": "State",
          "package": "mtl-tf",
          "signature": "State",
          "source": "src/Control-Monad-State-Lazy.html#State",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad State Lazy",
          "module": "Control.Monad.State.Lazy",
          "name": "State",
          "package": "mtl-tf",
          "partial": "State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-State-Lazy.html#v:State"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.State.Lazy",
          "name": "StateT",
          "package": "mtl-tf",
          "signature": "StateT",
          "source": "src/Control-Monad-State-Lazy.html#StateT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad State Lazy",
          "module": "Control.Monad.State.Lazy",
          "name": "StateT",
          "package": "mtl-tf",
          "partial": "State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-State-Lazy.html#v:StateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate this state monad with the given initial state,throwing\n away the final state.  Very much like \u003ccode\u003efst\u003c/code\u003e composed with\n \u003ccode\u003erunstate\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Control.Monad.State.Lazy\",\"Control.Monad.State.Strict\"]",
          "name": "evalState",
          "package": "mtl-tf",
          "signature": "State s a-\u003e s-\u003e a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-State-Lazy.html#v:evalState\",\"http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-State-Strict.html#v:evalState\"]"
        },
        "index": {
          "description": "Evaluate this state monad with the given initial state throwing away the final state Very much like fst composed with runstate",
          "hierarchy": "Control Monad State Lazy",
          "module": "Control.Monad.State.Lazy",
          "name": "evalState",
          "normalized": "State a b-\u003ea-\u003eb",
          "package": "mtl-tf",
          "partial": "State",
          "signature": "State s a-\u003es-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-State-Lazy.html#v:evalState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003eevalState\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.State.Lazy",
          "name": "evalStateT",
          "package": "mtl-tf",
          "signature": "StateT s m a -\u003e s -\u003e m a",
          "source": "src/Control-Monad-State-Lazy.html#evalStateT",
          "type": "function"
        },
        "index": {
          "description": "Similar to evalState",
          "hierarchy": "Control Monad State Lazy",
          "module": "Control.Monad.State.Lazy",
          "name": "evalStateT",
          "normalized": "StateT a b c-\u003ea-\u003eb c",
          "package": "mtl-tf",
          "partial": "State",
          "signature": "StateT s m a-\u003es-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-State-Lazy.html#v:evalStateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute this state and return the new state, throwing away the\n return value.  Very much like \u003ccode\u003esnd\u003c/code\u003e composed with\n \u003ccode\u003erunstate\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Control.Monad.State.Lazy\",\"Control.Monad.State.Strict\"]",
          "name": "execState",
          "package": "mtl-tf",
          "signature": "State s a-\u003e s-\u003e s",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-State-Lazy.html#v:execState\",\"http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-State-Strict.html#v:execState\"]"
        },
        "index": {
          "description": "Execute this state and return the new state throwing away the return value Very much like snd composed with runstate",
          "hierarchy": "Control Monad State Lazy",
          "module": "Control.Monad.State.Lazy",
          "name": "execState",
          "normalized": "State a b-\u003ea-\u003ea",
          "package": "mtl-tf",
          "partial": "State",
          "signature": "State s a-\u003es-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-State-Lazy.html#v:execState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003eexecState\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.State.Lazy",
          "name": "execStateT",
          "package": "mtl-tf",
          "signature": "StateT s m a -\u003e s -\u003e m s",
          "source": "src/Control-Monad-State-Lazy.html#execStateT",
          "type": "function"
        },
        "index": {
          "description": "Similar to execState",
          "hierarchy": "Control Monad State Lazy",
          "module": "Control.Monad.State.Lazy",
          "name": "execStateT",
          "normalized": "StateT a b c-\u003ea-\u003eb a",
          "package": "mtl-tf",
          "partial": "State",
          "signature": "StateT s m a-\u003es-\u003em s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-State-Lazy.html#v:execStateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a stateful computation from one (return value, state) pair to\n another.  For instance, to convert numberTree from a function that\n returns a tree to a function that returns the sum of the numbered\n tree (see the Examples section for numberTree and sumTree) you may\n write:\n\u003c/p\u003e\u003cpre\u003e sumNumberedTree :: (Eq a) =\u003e Tree a -\u003e State (Table a) Int\n sumNumberedTree = mapState (\\ (t, tab) -\u003e (sumTree t, tab))  . numberTree\n\u003c/pre\u003e",
          "module": "Control.Monad.State.Lazy",
          "name": "mapState",
          "package": "mtl-tf",
          "signature": "((a, s) -\u003e (b, s)) -\u003e State s a -\u003e State s b",
          "source": "src/Control-Monad-State-Lazy.html#mapState",
          "type": "function"
        },
        "index": {
          "description": "Map stateful computation from one return value state pair to another For instance to convert numberTree from function that returns tree to function that returns the sum of the numbered tree see the Examples section for numberTree and sumTree you may write sumNumberedTree Eq Tree State Table Int sumNumberedTree mapState tab sumTree tab numberTree",
          "hierarchy": "Control Monad State Lazy",
          "module": "Control.Monad.State.Lazy",
          "name": "mapState",
          "normalized": "((a,b)-\u003e(c,b))-\u003eState b a-\u003eState b c",
          "package": "mtl-tf",
          "partial": "State",
          "signature": "((a,s)-\u003e(b,s))-\u003eState s a-\u003eState s b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-State-Lazy.html#v:mapState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003emapState\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.State.Lazy",
          "name": "mapStateT",
          "package": "mtl-tf",
          "signature": "(m (a, s) -\u003e n (b, s)) -\u003e StateT s m a -\u003e StateT s n b",
          "source": "src/Control-Monad-State-Lazy.html#mapStateT",
          "type": "function"
        },
        "index": {
          "description": "Similar to mapState",
          "hierarchy": "Control Monad State Lazy",
          "module": "Control.Monad.State.Lazy",
          "name": "mapStateT",
          "normalized": "(a(b,c)-\u003ed(e,c))-\u003eStateT c a b-\u003eStateT c d e",
          "package": "mtl-tf",
          "partial": "State",
          "signature": "(m(a,s)-\u003en(b,s))-\u003eStateT s m a-\u003eStateT s n b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-State-Lazy.html#v:mapStateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.State.Lazy",
          "name": "runState",
          "package": "mtl-tf",
          "signature": "s -\u003e (a, s)",
          "source": "src/Control-Monad-State-Lazy.html#State",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad State Lazy",
          "module": "Control.Monad.State.Lazy",
          "name": "runState",
          "normalized": "a-\u003e(b,a)",
          "package": "mtl-tf",
          "partial": "State",
          "signature": "s-\u003e(a,s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-State-Lazy.html#v:runState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.State.Lazy",
          "name": "runStateT",
          "package": "mtl-tf",
          "signature": "s -\u003e m (a, s)",
          "source": "src/Control-Monad-State-Lazy.html#StateT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad State Lazy",
          "module": "Control.Monad.State.Lazy",
          "name": "runStateT",
          "normalized": "a-\u003eb(c,a)",
          "package": "mtl-tf",
          "partial": "State",
          "signature": "s-\u003em(a,s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-State-Lazy.html#v:runStateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply this function to this state and return the resulting state.\n\u003c/p\u003e",
          "module": "Control.Monad.State.Lazy",
          "name": "withState",
          "package": "mtl-tf",
          "signature": "(s -\u003e s) -\u003e State s a -\u003e State s a",
          "source": "src/Control-Monad-State-Lazy.html#withState",
          "type": "function"
        },
        "index": {
          "description": "Apply this function to this state and return the resulting state",
          "hierarchy": "Control Monad State Lazy",
          "module": "Control.Monad.State.Lazy",
          "name": "withState",
          "normalized": "(a-\u003ea)-\u003eState a b-\u003eState a b",
          "package": "mtl-tf",
          "partial": "State",
          "signature": "(s-\u003es)-\u003eState s a-\u003eState s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-State-Lazy.html#v:withState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003ewithState\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.State.Lazy",
          "name": "withStateT",
          "package": "mtl-tf",
          "signature": "(s -\u003e s) -\u003e StateT s m a -\u003e StateT s m a",
          "source": "src/Control-Monad-State-Lazy.html#withStateT",
          "type": "function"
        },
        "index": {
          "description": "Similar to withState",
          "hierarchy": "Control Monad State Lazy",
          "module": "Control.Monad.State.Lazy",
          "name": "withStateT",
          "normalized": "(a-\u003ea)-\u003eStateT a b c-\u003eStateT a b c",
          "package": "mtl-tf",
          "partial": "State",
          "signature": "(s-\u003es)-\u003eStateT s m a-\u003eStateT s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-State-Lazy.html#v:withStateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eStrict state monads.\n\u003c/p\u003e\u003cp\u003eThis module is inspired by the paper\n      /Functional Programming with Overloading and\n          Higher-Order Polymorphism/,\n        Mark P Jones (\u003ca\u003ehttp://www.cse.ogi.edu/~mpj/\u003c/a\u003e)\n          Advanced School of Functional Programming, 1995.\n\u003c/p\u003e\u003cp\u003eSee below for examples.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.State.Strict",
          "name": "Strict",
          "package": "mtl-tf",
          "source": "src/Control-Monad-State-Strict.html",
          "type": "module"
        },
        "index": {
          "description": "Strict state monads This module is inspired by the paper Functional Programming with Overloading and Higher-Order Polymorphism Mark Jones http www.cse.ogi.edu mpj Advanced School of Functional Programming See below for examples",
          "hierarchy": "Control Monad State Strict",
          "module": "Control.Monad.State.Strict",
          "name": "Strict",
          "package": "mtl-tf",
          "partial": "Strict",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-State-Strict.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA parameterizable state monad where \u003cem\u003es\u003c/em\u003e is the type of the state\n to carry and \u003cem\u003ea\u003c/em\u003e is the type of the \u003cem\u003ereturn value\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.State.Strict",
          "name": "State",
          "package": "mtl-tf",
          "source": "src/Control-Monad-State-Strict.html#State",
          "type": "newtype"
        },
        "index": {
          "description": "parameterizable state monad where is the type of the state to carry and is the type of the return value",
          "hierarchy": "Control Monad State Strict",
          "module": "Control.Monad.State.Strict",
          "name": "State",
          "package": "mtl-tf",
          "partial": "State",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-State-Strict.html#t:State"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA parameterizable state monad for encapsulating an inner\n monad.\n\u003c/p\u003e\u003cp\u003eThe StateT Monad structure is parameterized over two things:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e s - The state.\n\u003c/li\u003e\u003cli\u003e m - The inner monad.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eHere are some examples of use:\n\u003c/p\u003e\u003cp\u003e(Parser from ParseLib with Hugs)\n\u003c/p\u003e\u003cpre\u003e  type Parser a = StateT String [] a\n     ==\u003e StateT (String -\u003e [(a,String)])\n\u003c/pre\u003e\u003cp\u003eFor example, item can be written as:\n\u003c/p\u003e\u003cpre\u003e   item = do (x:xs) \u003c- get\n          put xs\n          return x\n\n   type BoringState s a = StateT s Indentity a\n        ==\u003e StateT (s -\u003e Identity (a,s))\n\n   type StateWithIO s a = StateT s IO a\n        ==\u003e StateT (s -\u003e IO (a,s))\n\n   type StateWithErr s a = StateT s Maybe a\n        ==\u003e StateT (s -\u003e Maybe (a,s))\n\u003c/pre\u003e",
          "module": "Control.Monad.State.Strict",
          "name": "StateT",
          "package": "mtl-tf",
          "source": "src/Control-Monad-State-Strict.html#StateT",
          "type": "newtype"
        },
        "index": {
          "description": "parameterizable state monad for encapsulating an inner monad The StateT Monad structure is parameterized over two things The state The inner monad Here are some examples of use Parser from ParseLib with Hugs type Parser StateT String StateT String String For example item can be written as item do xs get put xs return type BoringState StateT Indentity StateT Identity type StateWithIO StateT IO StateT IO type StateWithErr StateT Maybe StateT Maybe",
          "hierarchy": "Control Monad State Strict",
          "module": "Control.Monad.State.Strict",
          "name": "StateT",
          "package": "mtl-tf",
          "partial": "State",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-State-Strict.html#t:StateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.State.Strict",
          "name": "State",
          "package": "mtl-tf",
          "signature": "State",
          "source": "src/Control-Monad-State-Strict.html#State",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad State Strict",
          "module": "Control.Monad.State.Strict",
          "name": "State",
          "package": "mtl-tf",
          "partial": "State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-State-Strict.html#v:State"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.State.Strict",
          "name": "StateT",
          "package": "mtl-tf",
          "signature": "StateT",
          "source": "src/Control-Monad-State-Strict.html#StateT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad State Strict",
          "module": "Control.Monad.State.Strict",
          "name": "StateT",
          "package": "mtl-tf",
          "partial": "State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-State-Strict.html#v:StateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003eevalState\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.State.Strict",
          "name": "evalStateT",
          "package": "mtl-tf",
          "signature": "StateT s m a -\u003e s -\u003e m a",
          "source": "src/Control-Monad-State-Strict.html#evalStateT",
          "type": "function"
        },
        "index": {
          "description": "Similar to evalState",
          "hierarchy": "Control Monad State Strict",
          "module": "Control.Monad.State.Strict",
          "name": "evalStateT",
          "normalized": "StateT a b c-\u003ea-\u003eb c",
          "package": "mtl-tf",
          "partial": "State",
          "signature": "StateT s m a-\u003es-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-State-Strict.html#v:evalStateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003eexecState\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.State.Strict",
          "name": "execStateT",
          "package": "mtl-tf",
          "signature": "StateT s m a -\u003e s -\u003e m s",
          "source": "src/Control-Monad-State-Strict.html#execStateT",
          "type": "function"
        },
        "index": {
          "description": "Similar to execState",
          "hierarchy": "Control Monad State Strict",
          "module": "Control.Monad.State.Strict",
          "name": "execStateT",
          "normalized": "StateT a b c-\u003ea-\u003eb a",
          "package": "mtl-tf",
          "partial": "State",
          "signature": "StateT s m a-\u003es-\u003em s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-State-Strict.html#v:execStateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a stateful computation from one (return value, state) pair to\n another.  For instance, to convert numberTree from a function that\n returns a tree to a function that returns the sum of the numbered\n tree (see the Examples section for numberTree and sumTree) you may\n write:\n\u003c/p\u003e\u003cpre\u003e sumNumberedTree :: (Eq a) =\u003e Tree a -\u003e State (Table a) Int\n sumNumberedTree = mapState (\\ (t, tab) -\u003e (sumTree t, tab))  . numberTree\n\u003c/pre\u003e",
          "module": "Control.Monad.State.Strict",
          "name": "mapState",
          "package": "mtl-tf",
          "signature": "((a, s) -\u003e (b, s)) -\u003e State s a -\u003e State s b",
          "source": "src/Control-Monad-State-Strict.html#mapState",
          "type": "function"
        },
        "index": {
          "description": "Map stateful computation from one return value state pair to another For instance to convert numberTree from function that returns tree to function that returns the sum of the numbered tree see the Examples section for numberTree and sumTree you may write sumNumberedTree Eq Tree State Table Int sumNumberedTree mapState tab sumTree tab numberTree",
          "hierarchy": "Control Monad State Strict",
          "module": "Control.Monad.State.Strict",
          "name": "mapState",
          "normalized": "((a,b)-\u003e(c,b))-\u003eState b a-\u003eState b c",
          "package": "mtl-tf",
          "partial": "State",
          "signature": "((a,s)-\u003e(b,s))-\u003eState s a-\u003eState s b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-State-Strict.html#v:mapState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003emapState\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.State.Strict",
          "name": "mapStateT",
          "package": "mtl-tf",
          "signature": "(m (a, s) -\u003e n (b, s)) -\u003e StateT s m a -\u003e StateT s n b",
          "source": "src/Control-Monad-State-Strict.html#mapStateT",
          "type": "function"
        },
        "index": {
          "description": "Similar to mapState",
          "hierarchy": "Control Monad State Strict",
          "module": "Control.Monad.State.Strict",
          "name": "mapStateT",
          "normalized": "(a(b,c)-\u003ed(e,c))-\u003eStateT c a b-\u003eStateT c d e",
          "package": "mtl-tf",
          "partial": "State",
          "signature": "(m(a,s)-\u003en(b,s))-\u003eStateT s m a-\u003eStateT s n b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-State-Strict.html#v:mapStateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.State.Strict",
          "name": "runState",
          "package": "mtl-tf",
          "signature": "s -\u003e (a, s)",
          "source": "src/Control-Monad-State-Strict.html#State",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad State Strict",
          "module": "Control.Monad.State.Strict",
          "name": "runState",
          "normalized": "a-\u003e(b,a)",
          "package": "mtl-tf",
          "partial": "State",
          "signature": "s-\u003e(a,s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-State-Strict.html#v:runState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.State.Strict",
          "name": "runStateT",
          "package": "mtl-tf",
          "signature": "s -\u003e m (a, s)",
          "source": "src/Control-Monad-State-Strict.html#StateT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad State Strict",
          "module": "Control.Monad.State.Strict",
          "name": "runStateT",
          "normalized": "a-\u003eb(c,a)",
          "package": "mtl-tf",
          "partial": "State",
          "signature": "s-\u003em(a,s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-State-Strict.html#v:runStateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply this function to this state and return the resulting state.\n\u003c/p\u003e",
          "module": "Control.Monad.State.Strict",
          "name": "withState",
          "package": "mtl-tf",
          "signature": "(s -\u003e s) -\u003e State s a -\u003e State s a",
          "source": "src/Control-Monad-State-Strict.html#withState",
          "type": "function"
        },
        "index": {
          "description": "Apply this function to this state and return the resulting state",
          "hierarchy": "Control Monad State Strict",
          "module": "Control.Monad.State.Strict",
          "name": "withState",
          "normalized": "(a-\u003ea)-\u003eState a b-\u003eState a b",
          "package": "mtl-tf",
          "partial": "State",
          "signature": "(s-\u003es)-\u003eState s a-\u003eState s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-State-Strict.html#v:withState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003ewithState\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.State.Strict",
          "name": "withStateT",
          "package": "mtl-tf",
          "signature": "(s -\u003e s) -\u003e StateT s m a -\u003e StateT s m a",
          "source": "src/Control-Monad-State-Strict.html#withStateT",
          "type": "function"
        },
        "index": {
          "description": "Similar to withState",
          "hierarchy": "Control Monad State Strict",
          "module": "Control.Monad.State.Strict",
          "name": "withStateT",
          "normalized": "(a-\u003ea)-\u003eStateT a b c-\u003eStateT a b c",
          "package": "mtl-tf",
          "partial": "State",
          "signature": "(s-\u003es)-\u003eStateT s m a-\u003eStateT s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-State-Strict.html#v:withStateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eState monads.\n\u003c/p\u003e\u003cp\u003eThis module is inspired by the paper\n      /Functional Programming with Overloading and\n          Higher-Order Polymorphism/,\n        Mark P Jones (\u003ca\u003ehttp://www.cse.ogi.edu/~mpj/\u003c/a\u003e)\n          Advanced School of Functional Programming, 1995.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.State",
          "name": "State",
          "package": "mtl-tf",
          "source": "src/Control-Monad-State.html",
          "type": "module"
        },
        "index": {
          "description": "State monads This module is inspired by the paper Functional Programming with Overloading and Higher-Order Polymorphism Mark Jones http www.cse.ogi.edu mpj Advanced School of Functional Programming",
          "hierarchy": "Control Monad State",
          "module": "Control.Monad.State",
          "name": "State",
          "package": "mtl-tf",
          "partial": "State",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-State.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe MonadTrans class.\n\u003c/p\u003e\u003cp\u003eInspired by the paper\n      /Functional Programming with Overloading and\n          Higher-Order Polymorphism/,\n        Mark P Jones (\u003ca\u003ehttp://www.cse.ogi.edu/~mpj/\u003c/a\u003e)\n          Advanced School of Functional Programming, 1995.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Trans",
          "name": "Trans",
          "package": "mtl-tf",
          "source": "src/Control-Monad-Trans.html",
          "type": "module"
        },
        "index": {
          "description": "The MonadTrans class Inspired by the paper Functional Programming with Overloading and Higher-Order Polymorphism Mark Jones http www.cse.ogi.edu mpj Advanced School of Functional Programming",
          "hierarchy": "Control Monad Trans",
          "module": "Control.Monad.Trans",
          "name": "Trans",
          "package": "mtl-tf",
          "partial": "Trans",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-Trans.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans",
          "name": "MonadIO",
          "package": "mtl-tf",
          "source": "src/Control-Monad-Trans.html#MonadIO",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Monad Trans",
          "module": "Control.Monad.Trans",
          "name": "MonadIO",
          "package": "mtl-tf",
          "partial": "Monad IO",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-Trans.html#t:MonadIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans",
          "name": "MonadTrans",
          "package": "mtl-tf",
          "source": "src/Control-Monad-Trans.html#MonadTrans",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Monad Trans",
          "module": "Control.Monad.Trans",
          "name": "MonadTrans",
          "package": "mtl-tf",
          "partial": "Monad Trans",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-Trans.html#t:MonadTrans"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans",
          "name": "lift",
          "package": "mtl-tf",
          "signature": "m a -\u003e t m a",
          "source": "src/Control-Monad-Trans.html#lift",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Trans",
          "module": "Control.Monad.Trans",
          "name": "lift",
          "normalized": "a b-\u003ec a b",
          "package": "mtl-tf",
          "signature": "m a-\u003et m a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-Trans.html#v:lift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans",
          "name": "liftIO",
          "package": "mtl-tf",
          "signature": "IO a -\u003e m a",
          "source": "src/Control-Monad-Trans.html#liftIO",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Trans",
          "module": "Control.Monad.Trans",
          "name": "liftIO",
          "normalized": "IO a-\u003eb a",
          "package": "mtl-tf",
          "partial": "IO",
          "signature": "IO a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-Trans.html#v:liftIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe MonadWriter class.\n\u003c/p\u003e\u003cp\u003eInspired by the paper\n      /Functional Programming with Overloading and\n          Higher-Order Polymorphism/,\n        Mark P Jones (\u003ca\u003ehttp://web.cecs.pdx.edu/~mpj/pubs/springschool.html\u003c/a\u003e)\n          Advanced School of Functional Programming, 1995.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Writer.Class",
          "name": "Class",
          "package": "mtl-tf",
          "source": "src/Control-Monad-Writer-Class.html",
          "type": "module"
        },
        "index": {
          "description": "The MonadWriter class Inspired by the paper Functional Programming with Overloading and Higher-Order Polymorphism Mark Jones http web.cecs.pdx.edu mpj pubs springschool.html Advanced School of Functional Programming",
          "hierarchy": "Control Monad Writer Class",
          "module": "Control.Monad.Writer.Class",
          "name": "Class",
          "package": "mtl-tf",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-Writer-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Writer.Class",
          "name": "MonadWriter",
          "package": "mtl-tf",
          "source": "src/Control-Monad-Writer-Class.html#MonadWriter",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Monad Writer Class",
          "module": "Control.Monad.Writer.Class",
          "name": "MonadWriter",
          "package": "mtl-tf",
          "partial": "Monad Writer",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-Writer-Class.html#t:MonadWriter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Writer.Class",
          "name": "WriterType",
          "package": "mtl-tf",
          "signature": "WriterType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Writer Class",
          "module": "Control.Monad.Writer.Class",
          "name": "WriterType",
          "package": "mtl-tf",
          "partial": "Writer Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-Writer-Class.html#t:WriterType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Writer.Class",
          "name": "censor",
          "package": "mtl-tf",
          "signature": "(WriterType m -\u003e WriterType m) -\u003e m a -\u003e m a",
          "source": "src/Control-Monad-Writer-Class.html#censor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Writer Class",
          "module": "Control.Monad.Writer.Class",
          "name": "censor",
          "normalized": "(WriterType a-\u003eWriterType a)-\u003ea b-\u003ea b",
          "package": "mtl-tf",
          "signature": "(WriterType m-\u003eWriterType m)-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-Writer-Class.html#v:censor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Writer.Class",
          "name": "listen",
          "package": "mtl-tf",
          "signature": "m a -\u003e m (a, WriterType m)",
          "source": "src/Control-Monad-Writer-Class.html#listen",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Writer Class",
          "module": "Control.Monad.Writer.Class",
          "name": "listen",
          "normalized": "a b-\u003ea(b,WriterType a)",
          "package": "mtl-tf",
          "signature": "m a-\u003em(a,WriterType m)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-Writer-Class.html#v:listen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Writer.Class",
          "name": "listens",
          "package": "mtl-tf",
          "signature": "(WriterType m -\u003e b) -\u003e m a -\u003e m (a, b)",
          "source": "src/Control-Monad-Writer-Class.html#listens",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Writer Class",
          "module": "Control.Monad.Writer.Class",
          "name": "listens",
          "normalized": "(WriterType a-\u003eb)-\u003ea c-\u003ea(c,b)",
          "package": "mtl-tf",
          "signature": "(WriterType m-\u003eb)-\u003em a-\u003em(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-Writer-Class.html#v:listens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Writer.Class",
          "name": "pass",
          "package": "mtl-tf",
          "signature": "m (a, WriterType m -\u003e WriterType m) -\u003e m a",
          "source": "src/Control-Monad-Writer-Class.html#pass",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Writer Class",
          "module": "Control.Monad.Writer.Class",
          "name": "pass",
          "normalized": "a(b,WriterType a-\u003eWriterType a)-\u003ea b",
          "package": "mtl-tf",
          "signature": "m(a,WriterType m-\u003eWriterType m)-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-Writer-Class.html#v:pass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Writer.Class",
          "name": "tell",
          "package": "mtl-tf",
          "signature": "WriterType m -\u003e m ()",
          "source": "src/Control-Monad-Writer-Class.html#tell",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Writer Class",
          "module": "Control.Monad.Writer.Class",
          "name": "tell",
          "normalized": "WriterType a-\u003ea()",
          "package": "mtl-tf",
          "signature": "WriterType m-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-Writer-Class.html#v:tell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLazy writer monads.\n\u003c/p\u003e\u003cp\u003eInspired by the paper\n      /Functional Programming with Overloading and\n          Higher-Order Polymorphism/,\n        Mark P Jones (\u003ca\u003ehttp://web.cecs.pdx.edu/~mpj/pubs/springschool.html\u003c/a\u003e)\n          Advanced School of Functional Programming, 1995.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Writer.Lazy",
          "name": "Lazy",
          "package": "mtl-tf",
          "source": "src/Control-Monad-Writer-Lazy.html",
          "type": "module"
        },
        "index": {
          "description": "Lazy writer monads Inspired by the paper Functional Programming with Overloading and Higher-Order Polymorphism Mark Jones http web.cecs.pdx.edu mpj pubs springschool.html Advanced School of Functional Programming",
          "hierarchy": "Control Monad Writer Lazy",
          "module": "Control.Monad.Writer.Lazy",
          "name": "Lazy",
          "package": "mtl-tf",
          "partial": "Lazy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-Writer-Lazy.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Writer.Lazy",
          "name": "Writer",
          "package": "mtl-tf",
          "source": "src/Control-Monad-Writer-Lazy.html#Writer",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Control Monad Writer Lazy",
          "module": "Control.Monad.Writer.Lazy",
          "name": "Writer",
          "package": "mtl-tf",
          "partial": "Writer",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-Writer-Lazy.html#t:Writer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Writer.Lazy",
          "name": "WriterT",
          "package": "mtl-tf",
          "source": "src/Control-Monad-Writer-Lazy.html#WriterT",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Control Monad Writer Lazy",
          "module": "Control.Monad.Writer.Lazy",
          "name": "WriterT",
          "package": "mtl-tf",
          "partial": "Writer",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-Writer-Lazy.html#t:WriterT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Writer.Lazy",
          "name": "Writer",
          "package": "mtl-tf",
          "signature": "Writer",
          "source": "src/Control-Monad-Writer-Lazy.html#Writer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Writer Lazy",
          "module": "Control.Monad.Writer.Lazy",
          "name": "Writer",
          "package": "mtl-tf",
          "partial": "Writer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-Writer-Lazy.html#v:Writer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Writer.Lazy",
          "name": "WriterT",
          "package": "mtl-tf",
          "signature": "WriterT",
          "source": "src/Control-Monad-Writer-Lazy.html#WriterT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Writer Lazy",
          "module": "Control.Monad.Writer.Lazy",
          "name": "WriterT",
          "package": "mtl-tf",
          "partial": "Writer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-Writer-Lazy.html#v:WriterT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Writer.Lazy",
          "name": "execWriter",
          "package": "mtl-tf",
          "signature": "Writer w a -\u003e w",
          "source": "src/Control-Monad-Writer-Lazy.html#execWriter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Writer Lazy",
          "module": "Control.Monad.Writer.Lazy",
          "name": "execWriter",
          "normalized": "Writer a b-\u003ea",
          "package": "mtl-tf",
          "partial": "Writer",
          "signature": "Writer w a-\u003ew",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-Writer-Lazy.html#v:execWriter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Writer.Lazy",
          "name": "execWriterT",
          "package": "mtl-tf",
          "signature": "WriterT w m a -\u003e m w",
          "source": "src/Control-Monad-Writer-Lazy.html#execWriterT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Writer Lazy",
          "module": "Control.Monad.Writer.Lazy",
          "name": "execWriterT",
          "normalized": "WriterT a b c-\u003eb a",
          "package": "mtl-tf",
          "partial": "Writer",
          "signature": "WriterT w m a-\u003em w",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-Writer-Lazy.html#v:execWriterT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Writer.Lazy",
          "name": "mapWriter",
          "package": "mtl-tf",
          "signature": "((a, w) -\u003e (b, w')) -\u003e Writer w a -\u003e Writer w' b",
          "source": "src/Control-Monad-Writer-Lazy.html#mapWriter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Writer Lazy",
          "module": "Control.Monad.Writer.Lazy",
          "name": "mapWriter",
          "normalized": "((a,b)-\u003e(c,d))-\u003eWriter b a-\u003eWriter d c",
          "package": "mtl-tf",
          "partial": "Writer",
          "signature": "((a,w)-\u003e(b,w'))-\u003eWriter w a-\u003eWriter w' b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-Writer-Lazy.html#v:mapWriter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Writer.Lazy",
          "name": "mapWriterT",
          "package": "mtl-tf",
          "signature": "(m (a, w) -\u003e n (b, w')) -\u003e WriterT w m a -\u003e WriterT w' n b",
          "source": "src/Control-Monad-Writer-Lazy.html#mapWriterT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Writer Lazy",
          "module": "Control.Monad.Writer.Lazy",
          "name": "mapWriterT",
          "normalized": "(a(b,c)-\u003ed(e,f))-\u003eWriterT c a b-\u003eWriterT f d e",
          "package": "mtl-tf",
          "partial": "Writer",
          "signature": "(m(a,w)-\u003en(b,w'))-\u003eWriterT w m a-\u003eWriterT w' n b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-Writer-Lazy.html#v:mapWriterT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Writer.Lazy",
          "name": "runWriter",
          "package": "mtl-tf",
          "signature": "(a, w)",
          "source": "src/Control-Monad-Writer-Lazy.html#Writer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Writer Lazy",
          "module": "Control.Monad.Writer.Lazy",
          "name": "runWriter",
          "normalized": "(a,b)",
          "package": "mtl-tf",
          "partial": "Writer",
          "signature": "(a,w)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-Writer-Lazy.html#v:runWriter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Writer.Lazy",
          "name": "runWriterT",
          "package": "mtl-tf",
          "signature": "m (a, w)",
          "source": "src/Control-Monad-Writer-Lazy.html#WriterT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Writer Lazy",
          "module": "Control.Monad.Writer.Lazy",
          "name": "runWriterT",
          "normalized": "a(b,c)",
          "package": "mtl-tf",
          "partial": "Writer",
          "signature": "m(a,w)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-Writer-Lazy.html#v:runWriterT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eStrict writer monads.\n\u003c/p\u003e\u003cp\u003eInspired by the paper\n      /Functional Programming with Overloading and\n          Higher-Order Polymorphism/,\n        Mark P Jones (\u003ca\u003ehttp://web.cecs.pdx.edu/~mpj/pubs/springschool.html\u003c/a\u003e)\n          Advanced School of Functional Programming, 1995.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Writer.Strict",
          "name": "Strict",
          "package": "mtl-tf",
          "source": "src/Control-Monad-Writer-Strict.html",
          "type": "module"
        },
        "index": {
          "description": "Strict writer monads Inspired by the paper Functional Programming with Overloading and Higher-Order Polymorphism Mark Jones http web.cecs.pdx.edu mpj pubs springschool.html Advanced School of Functional Programming",
          "hierarchy": "Control Monad Writer Strict",
          "module": "Control.Monad.Writer.Strict",
          "name": "Strict",
          "package": "mtl-tf",
          "partial": "Strict",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-Writer-Strict.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Writer.Strict",
          "name": "Writer",
          "package": "mtl-tf",
          "source": "src/Control-Monad-Writer-Strict.html#Writer",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Control Monad Writer Strict",
          "module": "Control.Monad.Writer.Strict",
          "name": "Writer",
          "package": "mtl-tf",
          "partial": "Writer",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-Writer-Strict.html#t:Writer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Writer.Strict",
          "name": "WriterT",
          "package": "mtl-tf",
          "source": "src/Control-Monad-Writer-Strict.html#WriterT",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Control Monad Writer Strict",
          "module": "Control.Monad.Writer.Strict",
          "name": "WriterT",
          "package": "mtl-tf",
          "partial": "Writer",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-Writer-Strict.html#t:WriterT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Writer.Strict",
          "name": "Writer",
          "package": "mtl-tf",
          "signature": "Writer",
          "source": "src/Control-Monad-Writer-Strict.html#Writer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Writer Strict",
          "module": "Control.Monad.Writer.Strict",
          "name": "Writer",
          "package": "mtl-tf",
          "partial": "Writer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-Writer-Strict.html#v:Writer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Writer.Strict",
          "name": "WriterT",
          "package": "mtl-tf",
          "signature": "WriterT",
          "source": "src/Control-Monad-Writer-Strict.html#WriterT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Writer Strict",
          "module": "Control.Monad.Writer.Strict",
          "name": "WriterT",
          "package": "mtl-tf",
          "partial": "Writer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-Writer-Strict.html#v:WriterT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Writer.Strict",
          "name": "execWriter",
          "package": "mtl-tf",
          "signature": "Writer w a -\u003e w",
          "source": "src/Control-Monad-Writer-Strict.html#execWriter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Writer Strict",
          "module": "Control.Monad.Writer.Strict",
          "name": "execWriter",
          "normalized": "Writer a b-\u003ea",
          "package": "mtl-tf",
          "partial": "Writer",
          "signature": "Writer w a-\u003ew",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-Writer-Strict.html#v:execWriter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Writer.Strict",
          "name": "execWriterT",
          "package": "mtl-tf",
          "signature": "WriterT w m a -\u003e m w",
          "source": "src/Control-Monad-Writer-Strict.html#execWriterT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Writer Strict",
          "module": "Control.Monad.Writer.Strict",
          "name": "execWriterT",
          "normalized": "WriterT a b c-\u003eb a",
          "package": "mtl-tf",
          "partial": "Writer",
          "signature": "WriterT w m a-\u003em w",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-Writer-Strict.html#v:execWriterT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Writer.Strict",
          "name": "mapWriter",
          "package": "mtl-tf",
          "signature": "((a, w) -\u003e (b, w')) -\u003e Writer w a -\u003e Writer w' b",
          "source": "src/Control-Monad-Writer-Strict.html#mapWriter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Writer Strict",
          "module": "Control.Monad.Writer.Strict",
          "name": "mapWriter",
          "normalized": "((a,b)-\u003e(c,d))-\u003eWriter b a-\u003eWriter d c",
          "package": "mtl-tf",
          "partial": "Writer",
          "signature": "((a,w)-\u003e(b,w'))-\u003eWriter w a-\u003eWriter w' b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-Writer-Strict.html#v:mapWriter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Writer.Strict",
          "name": "mapWriterT",
          "package": "mtl-tf",
          "signature": "(m (a, w) -\u003e n (b, w')) -\u003e WriterT w m a -\u003e WriterT w' n b",
          "source": "src/Control-Monad-Writer-Strict.html#mapWriterT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Writer Strict",
          "module": "Control.Monad.Writer.Strict",
          "name": "mapWriterT",
          "normalized": "(a(b,c)-\u003ed(e,f))-\u003eWriterT c a b-\u003eWriterT f d e",
          "package": "mtl-tf",
          "partial": "Writer",
          "signature": "(m(a,w)-\u003en(b,w'))-\u003eWriterT w m a-\u003eWriterT w' n b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-Writer-Strict.html#v:mapWriterT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Writer.Strict",
          "name": "runWriter",
          "package": "mtl-tf",
          "signature": "(a, w)",
          "source": "src/Control-Monad-Writer-Strict.html#Writer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Writer Strict",
          "module": "Control.Monad.Writer.Strict",
          "name": "runWriter",
          "normalized": "(a,b)",
          "package": "mtl-tf",
          "partial": "Writer",
          "signature": "(a,w)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-Writer-Strict.html#v:runWriter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Writer.Strict",
          "name": "runWriterT",
          "package": "mtl-tf",
          "signature": "m (a, w)",
          "source": "src/Control-Monad-Writer-Strict.html#WriterT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Writer Strict",
          "module": "Control.Monad.Writer.Strict",
          "name": "runWriterT",
          "normalized": "a(b,c)",
          "package": "mtl-tf",
          "partial": "Writer",
          "signature": "m(a,w)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-Writer-Strict.html#v:runWriterT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe MonadWriter class.\n\u003c/p\u003e\u003cp\u003eInspired by the paper\n      /Functional Programming with Overloading and\n          Higher-Order Polymorphism/,\n        Mark P Jones (\u003ca\u003ehttp://web.cecs.pdx.edu/~mpj/pubs/springschool.html\u003c/a\u003e)\n          Advanced School of Functional Programming, 1995.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Writer",
          "name": "Writer",
          "package": "mtl-tf",
          "source": "src/Control-Monad-Writer.html",
          "type": "module"
        },
        "index": {
          "description": "The MonadWriter class Inspired by the paper Functional Programming with Overloading and Higher-Order Polymorphism Mark Jones http web.cecs.pdx.edu mpj pubs springschool.html Advanced School of Functional Programming",
          "hierarchy": "Control Monad Writer",
          "module": "Control.Monad.Writer",
          "name": "Writer",
          "package": "mtl-tf",
          "partial": "Writer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/mtl-tf/docs/Control-Monad-Writer.html#"
      }
    }
  ]
]