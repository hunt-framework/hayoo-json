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
        "word": "mtl"
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
          "package": "mtl",
          "source": "src/Control-Monad-Cont-Class.html",
          "type": "module"
        },
        "index": {
          "description": "Computation type Computations which can be interrupted and resumed Binding strategy Binding function to monadic value creates new continuation which uses the function as the continuation of the monadic computation Useful for Complex control structures error handling and creating co-routines Zero and plus None Example type Cont The Continuation monad represents computations in continuation-passing style CPS In continuation-passing style function result is not returned but instead is passed to another function received as parameter continuation Computations are built up from sequences of nested continuations terminated by final continuation often id which produces the final result Since continuations are functions which represent the future of computation manipulation of the continuation functions can achieve complex manipulations of the future of the computation such as interrupting computation in the middle aborting portion of computation restarting computation and interleaving execution of computations The Continuation monad adapts CPS to the structure of monad Before using the Continuation monad be sure that you have firm understanding of continuation-passing style and that continuations represent the best solution to your particular design problem Many algorithms which require continuations in other languages do not require them in Haskell due to Haskell lazy semantics Abuse of the Continuation monad can produce code that is impossible to understand and maintain",
          "hierarchy": "Control Monad Cont Class",
          "module": "Control.Monad.Cont.Class",
          "name": "Class",
          "package": "mtl",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Cont-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Cont.Class",
          "name": "MonadCont",
          "package": "mtl",
          "source": "src/Control-Monad-Cont-Class.html#MonadCont",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Monad Cont Class",
          "module": "Control.Monad.Cont.Class",
          "name": "MonadCont",
          "package": "mtl",
          "partial": "Monad Cont",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Cont-Class.html#t:MonadCont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ecallCC\u003c/code\u003e (call-with-current-continuation)\n    calls a function with the current continuation as its argument.\n    Provides an escape continuation mechanism for use with Continuation monads.\n    Escape continuations allow to abort the current computation and return\n    a value immediately.\n    They achieve a similar effect to \u003ccode\u003e\u003ca\u003ethrowError\u003c/a\u003e\u003c/code\u003e\n    and \u003ccode\u003e\u003ca\u003ecatchError\u003c/a\u003e\u003c/code\u003e\n    within an \u003ccode\u003e\u003ca\u003eError\u003c/a\u003e\u003c/code\u003e monad.\n    Advantage of this function over calling \u003ccode\u003ereturn\u003c/code\u003e is that it makes\n    the continuation explicit,\n    allowing more flexibility and better control\n    (see examples in \u003ca\u003eControl.Monad.Cont\u003c/a\u003e).\n\u003c/p\u003e\u003cp\u003eThe standard idiom used with \u003ccode\u003ecallCC\u003c/code\u003e is to provide a lambda-expression\n    to name the continuation. Then calling the named continuation anywhere\n    within its scope will escape from the computation,\n    even if it is many layers deep within nested computations.\n\u003c/p\u003e",
          "module": "Control.Monad.Cont.Class",
          "name": "callCC",
          "package": "mtl",
          "signature": "((a -\u003e m b) -\u003e m a) -\u003e m a",
          "source": "src/Control-Monad-Cont-Class.html#callCC",
          "type": "method"
        },
        "index": {
          "description": "callCC call-with-current-continuation calls function with the current continuation as its argument Provides an escape continuation mechanism for use with Continuation monads Escape continuations allow to abort the current computation and return value immediately They achieve similar effect to throwError and catchError within an Error monad Advantage of this function over calling return is that it makes the continuation explicit allowing more flexibility and better control see examples in Control.Monad.Cont The standard idiom used with callCC is to provide lambda-expression to name the continuation Then calling the named continuation anywhere within its scope will escape from the computation even if it is many layers deep within nested computations",
          "hierarchy": "Control Monad Cont Class",
          "module": "Control.Monad.Cont.Class",
          "name": "callCC",
          "normalized": "((a-\u003eb c)-\u003eb a)-\u003eb a",
          "package": "mtl",
          "partial": "CC",
          "signature": "((a-\u003em b)-\u003em a)-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Cont-Class.html#v:callCC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003eComputation type:\u003c/dt\u003e\u003cdd\u003e Computations which can be interrupted and resumed.\n\u003c/dd\u003e\u003cdt\u003eBinding strategy:\u003c/dt\u003e\u003cdd\u003e Binding a function to a monadic value creates\na new continuation which uses the function as the continuation of the monadic\ncomputation.\n\u003c/dd\u003e\u003cdt\u003eUseful for:\u003c/dt\u003e\u003cdd\u003e Complex control structures, error handling,\nand creating co-routines.\n\u003c/dd\u003e\u003cdt\u003eZero and plus:\u003c/dt\u003e\u003cdd\u003e None.\n\u003c/dd\u003e\u003cdt\u003eExample type:\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003eCont\u003c/a\u003e\u003c/code\u003e r a\u003c/code\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eThe Continuation monad represents computations in continuation-passing style\n(CPS).\nIn continuation-passing style function result is not returned,\nbut instead is passed to another function,\nreceived as a parameter (continuation).\nComputations are built up from sequences\nof nested continuations, terminated by a final continuation (often \u003ccode\u003eid\u003c/code\u003e)\nwhich produces the final result.\nSince continuations are functions which represent the future of a computation,\nmanipulation of the continuation functions can achieve complex manipulations\nof the future of the computation,\nsuch as interrupting a computation in the middle, aborting a portion\nof a computation, restarting a computation, and interleaving execution of\ncomputations.\nThe Continuation monad adapts CPS to the structure of a monad.\n\u003c/p\u003e\u003cp\u003eBefore using the Continuation monad, be sure that you have\na firm understanding of continuation-passing style\nand that continuations represent the best solution to your particular\ndesign problem.\nMany algorithms which require continuations in other languages do not require\nthem in Haskell, due to Haskell's lazy semantics.\nAbuse of the Continuation monad can produce code that is impossible\nto understand and maintain.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Cont",
          "name": "Cont",
          "package": "mtl",
          "source": "src/Control-Monad-Cont.html",
          "type": "module"
        },
        "index": {
          "description": "Computation type Computations which can be interrupted and resumed Binding strategy Binding function to monadic value creates new continuation which uses the function as the continuation of the monadic computation Useful for Complex control structures error handling and creating co-routines Zero and plus None Example type Cont The Continuation monad represents computations in continuation-passing style CPS In continuation-passing style function result is not returned but instead is passed to another function received as parameter continuation Computations are built up from sequences of nested continuations terminated by final continuation often id which produces the final result Since continuations are functions which represent the future of computation manipulation of the continuation functions can achieve complex manipulations of the future of the computation such as interrupting computation in the middle aborting portion of computation restarting computation and interleaving execution of computations The Continuation monad adapts CPS to the structure of monad Before using the Continuation monad be sure that you have firm understanding of continuation-passing style and that continuations represent the best solution to your particular design problem Many algorithms which require continuations in other languages do not require them in Haskell due to Haskell lazy semantics Abuse of the Continuation monad can produce code that is impossible to understand and maintain",
          "hierarchy": "Control Monad Cont",
          "module": "Control.Monad.Cont",
          "name": "Cont",
          "package": "mtl",
          "partial": "Cont",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Cont.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContinuation monad.\n\u003ccode\u003eCont r a\u003c/code\u003e is a CPS computation that produces an intermediate result\nof type \u003ccode\u003ea\u003c/code\u003e within a CPS computation whose final result type is \u003ccode\u003er\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003ereturn\u003c/code\u003e function simply creates a continuation which passes the value on.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003e\u003e=\u003c/code\u003e operator adds the bound function into the continuation chain.\n\u003c/p\u003e",
          "module": "Control.Monad.Cont",
          "name": "Cont",
          "package": "mtl",
          "type": "type"
        },
        "index": {
          "description": "Continuation monad Cont is CPS computation that produces an intermediate result of type within CPS computation whose final result type is The return function simply creates continuation which passes the value on The operator adds the bound function into the continuation chain",
          "hierarchy": "Control Monad Cont",
          "module": "Control.Monad.Cont",
          "name": "Cont",
          "package": "mtl",
          "partial": "Cont",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Cont.html#t:Cont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe continuation monad transformer.\nCan be used to add continuation handling to other monads.\n\u003c/p\u003e",
          "module": "Control.Monad.Cont",
          "name": "ContT",
          "package": "mtl",
          "type": "newtype"
        },
        "index": {
          "description": "The continuation monad transformer Can be used to add continuation handling to other monads",
          "hierarchy": "Control Monad Cont",
          "module": "Control.Monad.Cont",
          "name": "ContT",
          "package": "mtl",
          "partial": "Cont",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Cont.html#t:ContT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Cont",
          "name": "MonadCont",
          "package": "mtl",
          "source": "src/Control-Monad-Cont-Class.html#MonadCont",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Monad Cont",
          "module": "Control.Monad.Cont",
          "name": "MonadCont",
          "package": "mtl",
          "partial": "Monad Cont",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Cont.html#t:MonadCont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Cont",
          "name": "ContT",
          "package": "mtl",
          "signature": "ContT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Cont",
          "module": "Control.Monad.Cont",
          "name": "ContT",
          "package": "mtl",
          "partial": "Cont",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Cont.html#v:ContT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ecallCC\u003c/code\u003e (call-with-current-continuation)\n    calls a function with the current continuation as its argument.\n    Provides an escape continuation mechanism for use with Continuation monads.\n    Escape continuations allow to abort the current computation and return\n    a value immediately.\n    They achieve a similar effect to \u003ccode\u003e\u003ca\u003ethrowError\u003c/a\u003e\u003c/code\u003e\n    and \u003ccode\u003e\u003ca\u003ecatchError\u003c/a\u003e\u003c/code\u003e\n    within an \u003ccode\u003e\u003ca\u003eError\u003c/a\u003e\u003c/code\u003e monad.\n    Advantage of this function over calling \u003ccode\u003ereturn\u003c/code\u003e is that it makes\n    the continuation explicit,\n    allowing more flexibility and better control\n    (see examples in \u003ca\u003eControl.Monad.Cont\u003c/a\u003e).\n\u003c/p\u003e\u003cp\u003eThe standard idiom used with \u003ccode\u003ecallCC\u003c/code\u003e is to provide a lambda-expression\n    to name the continuation. Then calling the named continuation anywhere\n    within its scope will escape from the computation,\n    even if it is many layers deep within nested computations.\n\u003c/p\u003e",
          "module": "Control.Monad.Cont",
          "name": "callCC",
          "package": "mtl",
          "signature": "((a -\u003e m b) -\u003e m a) -\u003e m a",
          "source": "src/Control-Monad-Cont-Class.html#callCC",
          "type": "method"
        },
        "index": {
          "description": "callCC call-with-current-continuation calls function with the current continuation as its argument Provides an escape continuation mechanism for use with Continuation monads Escape continuations allow to abort the current computation and return value immediately They achieve similar effect to throwError and catchError within an Error monad Advantage of this function over calling return is that it makes the continuation explicit allowing more flexibility and better control see examples in Control.Monad.Cont The standard idiom used with callCC is to provide lambda-expression to name the continuation Then calling the named continuation anywhere within its scope will escape from the computation even if it is many layers deep within nested computations",
          "hierarchy": "Control Monad Cont",
          "module": "Control.Monad.Cont",
          "name": "callCC",
          "normalized": "((a-\u003eb c)-\u003eb a)-\u003eb a",
          "package": "mtl",
          "partial": "CC",
          "signature": "((a-\u003em b)-\u003em a)-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Cont.html#v:callCC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a continuation-passing computation from a function.\n (The inverse of \u003ccode\u003e\u003ca\u003erunCont\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e",
          "module": "Control.Monad.Cont",
          "name": "cont",
          "package": "mtl",
          "signature": "((a -\u003e r) -\u003e r) -\u003e Cont r a",
          "type": "function"
        },
        "index": {
          "description": "Construct continuation-passing computation from function The inverse of runCont",
          "hierarchy": "Control Monad Cont",
          "module": "Control.Monad.Cont",
          "name": "cont",
          "normalized": "((a-\u003eb)-\u003eb)-\u003eCont b a",
          "package": "mtl",
          "signature": "((a-\u003er)-\u003er)-\u003eCont r a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Cont.html#v:cont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function to transform the result of a continuation-passing\n computation.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunCont\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003emapCont\u003c/a\u003e\u003c/code\u003e f m) = f . \u003ccode\u003e\u003ca\u003erunCont\u003c/a\u003e\u003c/code\u003e m\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.Monad.Cont",
          "name": "mapCont",
          "package": "mtl",
          "signature": "(r -\u003e r) -\u003e Cont r a -\u003e Cont r a",
          "type": "function"
        },
        "index": {
          "description": "Apply function to transform the result of continuation-passing computation runCont mapCont runCont",
          "hierarchy": "Control Monad Cont",
          "module": "Control.Monad.Cont",
          "name": "mapCont",
          "normalized": "(a-\u003ea)-\u003eCont a b-\u003eCont a b",
          "package": "mtl",
          "partial": "Cont",
          "signature": "(r-\u003er)-\u003eCont r a-\u003eCont r a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Cont.html#v:mapCont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function to transform the result of a continuation-passing\n computation.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunContT\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003emapContT\u003c/a\u003e\u003c/code\u003e f m) = f . \u003ccode\u003e\u003ca\u003erunContT\u003c/a\u003e\u003c/code\u003e m\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.Monad.Cont",
          "name": "mapContT",
          "package": "mtl",
          "signature": "(m r -\u003e m r) -\u003e ContT r m a -\u003e ContT r m a",
          "type": "function"
        },
        "index": {
          "description": "Apply function to transform the result of continuation-passing computation runContT mapContT runContT",
          "hierarchy": "Control Monad Cont",
          "module": "Control.Monad.Cont",
          "name": "mapContT",
          "normalized": "(a b-\u003ea b)-\u003eContT b a c-\u003eContT b a c",
          "package": "mtl",
          "partial": "Cont",
          "signature": "(m r-\u003em r)-\u003eContT r m a-\u003eContT r m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Cont.html#v:mapContT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns a CPS computation, returns its result after applying the final\n continuation to it.\n (The inverse of \u003ccode\u003e\u003ca\u003econt\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e",
          "module": "Control.Monad.Cont",
          "name": "runCont",
          "package": "mtl",
          "signature": "Cont r a-\u003e (a -\u003e r)-\u003e r",
          "type": "function"
        },
        "index": {
          "description": "Runs CPS computation returns its result after applying the final continuation to it The inverse of cont",
          "hierarchy": "Control Monad Cont",
          "module": "Control.Monad.Cont",
          "name": "runCont",
          "normalized": "Cont a b-\u003e(b-\u003ea)-\u003ea",
          "package": "mtl",
          "partial": "Cont",
          "signature": "Cont r a-\u003e(a-\u003er)-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Cont.html#v:runCont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Cont",
          "name": "runContT",
          "package": "mtl",
          "signature": "(a -\u003e m r) -\u003e m r",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Cont",
          "module": "Control.Monad.Cont",
          "name": "runContT",
          "normalized": "(a-\u003eb c)-\u003eb c",
          "package": "mtl",
          "partial": "Cont",
          "signature": "(a-\u003em r)-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Cont.html#v:runContT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function to transform the continuation passed to a CPS\n computation.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunCont\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003ewithCont\u003c/a\u003e\u003c/code\u003e f m) = \u003ccode\u003e\u003ca\u003erunCont\u003c/a\u003e\u003c/code\u003e m . f\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.Monad.Cont",
          "name": "withCont",
          "package": "mtl",
          "signature": "((b -\u003e r) -\u003e a -\u003e r) -\u003e Cont r a -\u003e Cont r b",
          "type": "function"
        },
        "index": {
          "description": "Apply function to transform the continuation passed to CPS computation runCont withCont runCont",
          "hierarchy": "Control Monad Cont",
          "module": "Control.Monad.Cont",
          "name": "withCont",
          "normalized": "((a-\u003eb)-\u003ec-\u003eb)-\u003eCont b c-\u003eCont b a",
          "package": "mtl",
          "partial": "Cont",
          "signature": "((b-\u003er)-\u003ea-\u003er)-\u003eCont r a-\u003eCont r b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Cont.html#v:withCont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function to transform the continuation passed to a CPS\n computation.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunContT\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003ewithContT\u003c/a\u003e\u003c/code\u003e f m) = \u003ccode\u003e\u003ca\u003erunContT\u003c/a\u003e\u003c/code\u003e m . f\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.Monad.Cont",
          "name": "withContT",
          "package": "mtl",
          "signature": "((b -\u003e m r) -\u003e a -\u003e m r) -\u003e ContT r m a -\u003e ContT r m b",
          "type": "function"
        },
        "index": {
          "description": "Apply function to transform the continuation passed to CPS computation runContT withContT runContT",
          "hierarchy": "Control Monad Cont",
          "module": "Control.Monad.Cont",
          "name": "withContT",
          "normalized": "((a-\u003eb c)-\u003ed-\u003eb c)-\u003eContT c b d-\u003eContT c b a",
          "package": "mtl",
          "partial": "Cont",
          "signature": "((b-\u003em r)-\u003ea-\u003em r)-\u003eContT r m a-\u003eContT r m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Cont.html#v:withContT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003eComputation type:\u003c/dt\u003e\u003cdd\u003e Computations which may fail or throw exceptions.\n\u003c/dd\u003e\u003cdt\u003eBinding strategy:\u003c/dt\u003e\u003cdd\u003e Failure records information about the cause/location\nof the failure. Failure values bypass the bound function,\nother values are used as inputs to the bound function.\n\u003c/dd\u003e\u003cdt\u003eUseful for:\u003c/dt\u003e\u003cdd\u003e Building computations from sequences of functions that may fail\nor using exception handling to structure error handling.\n\u003c/dd\u003e\u003cdt\u003eZero and plus:\u003c/dt\u003e\u003cdd\u003e Zero is represented by an empty error and the plus operation\nexecutes its second argument if the first fails.\n\u003c/dd\u003e\u003cdt\u003eExample type:\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eString\u003c/code\u003e a\u003c/code\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eThe Error monad (also called the Exception monad).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Error.Class",
          "name": "Class",
          "package": "mtl",
          "source": "src/Control-Monad-Error-Class.html",
          "type": "module"
        },
        "index": {
          "description": "Computation type Computations which may fail or throw exceptions Binding strategy Failure records information about the cause location of the failure Failure values bypass the bound function other values are used as inputs to the bound function Useful for Building computations from sequences of functions that may fail or using exception handling to structure error handling Zero and plus Zero is represented by an empty error and the plus operation executes its second argument if the first fails Example type Either String The Error monad also called the Exception monad",
          "hierarchy": "Control Monad Error Class",
          "module": "Control.Monad.Error.Class",
          "name": "Class",
          "package": "mtl",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Error-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn exception to be thrown.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003enoMsg\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003estrMsg\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Error.Class",
          "name": "Error",
          "package": "mtl",
          "type": "class"
        },
        "index": {
          "description": "An exception to be thrown Minimal complete definition noMsg or strMsg",
          "hierarchy": "Control Monad Error Class",
          "module": "Control.Monad.Error.Class",
          "name": "Error",
          "package": "mtl",
          "partial": "Error",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Error-Class.html#t:Error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe strategy of combining computations that can throw exceptions\nby bypassing bound functions\nfrom the point an exception is thrown to the point that it is handled.\n\u003c/p\u003e\u003cp\u003eIs parameterized over the type of error information and\nthe monad type constructor.\nIt is common to use \u003ccode\u003e\u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e String\u003c/code\u003e as the monad type constructor\nfor an error monad in which error descriptions take the form of strings.\nIn that case and many other common cases the resulting monad is already defined\nas an instance of the \u003ccode\u003e\u003ca\u003eMonadError\u003c/a\u003e\u003c/code\u003e class.\nYou can also define your own error type and/or use a monad type constructor\nother than \u003ccode\u003e\u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eString\u003c/code\u003e\u003c/code\u003e or \u003ccode\u003e\u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eIOError\u003c/code\u003e\u003c/code\u003e.\nIn these cases you will have to explicitly define instances of the \u003ccode\u003e\u003ca\u003eError\u003c/a\u003e\u003c/code\u003e\nand/or \u003ccode\u003e\u003ca\u003eMonadError\u003c/a\u003e\u003c/code\u003e classes.\n\u003c/p\u003e",
          "module": "Control.Monad.Error.Class",
          "name": "MonadError",
          "package": "mtl",
          "source": "src/Control-Monad-Error-Class.html#MonadError",
          "type": "class"
        },
        "index": {
          "description": "The strategy of combining computations that can throw exceptions by bypassing bound functions from the point an exception is thrown to the point that it is handled Is parameterized over the type of error information and the monad type constructor It is common to use Either String as the monad type constructor for an error monad in which error descriptions take the form of strings In that case and many other common cases the resulting monad is already defined as an instance of the MonadError class You can also define your own error type and or use monad type constructor other than Either String or Either IOError In these cases you will have to explicitly define instances of the Error and or MonadError classes",
          "hierarchy": "Control Monad Error Class",
          "module": "Control.Monad.Error.Class",
          "name": "MonadError",
          "package": "mtl",
          "partial": "Monad Error",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Error-Class.html#t:MonadError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA handler function to handle previous errors and return to normal execution.\n    A common idiom is:\n\u003c/p\u003e\u003cpre\u003e do { action1; action2; action3 } `catchError` handler\n\u003c/pre\u003e\u003cp\u003ewhere the \u003ccode\u003eaction\u003c/code\u003e functions can call \u003ccode\u003e\u003ca\u003ethrowError\u003c/a\u003e\u003c/code\u003e.\n    Note that \u003ccode\u003ehandler\u003c/code\u003e and the do-block must have the same return type.\n\u003c/p\u003e",
          "module": "Control.Monad.Error.Class",
          "name": "catchError",
          "package": "mtl",
          "signature": "m a -\u003e (e -\u003e m a) -\u003e m a",
          "source": "src/Control-Monad-Error-Class.html#catchError",
          "type": "method"
        },
        "index": {
          "description": "handler function to handle previous errors and return to normal execution common idiom is do action1 action2 action3 catchError handler where the action functions can call throwError Note that handler and the do-block must have the same return type",
          "hierarchy": "Control Monad Error Class",
          "module": "Control.Monad.Error.Class",
          "name": "catchError",
          "normalized": "a b-\u003e(c-\u003ea b)-\u003ea b",
          "package": "mtl",
          "partial": "Error",
          "signature": "m a-\u003e(e-\u003em a)-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Error-Class.html#v:catchError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates an exception without a message.\n The default implementation is \u003ccode\u003e\u003ccode\u003e\u003ca\u003estrMsg\u003c/a\u003e\u003c/code\u003e \"\"\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Error.Class",
          "name": "noMsg",
          "package": "mtl",
          "signature": "a",
          "type": "method"
        },
        "index": {
          "description": "Creates an exception without message The default implementation is strMsg",
          "hierarchy": "Control Monad Error Class",
          "module": "Control.Monad.Error.Class",
          "name": "noMsg",
          "package": "mtl",
          "partial": "Msg",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Error-Class.html#v:noMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates an exception with a message.\n The default implementation of \u003ccode\u003e\u003ccode\u003e\u003ca\u003estrMsg\u003c/a\u003e\u003c/code\u003e s\u003c/code\u003e is \u003ccode\u003e\u003ca\u003enoMsg\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Error.Class",
          "name": "strMsg",
          "package": "mtl",
          "signature": "String -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "Creates an exception with message The default implementation of strMsg is noMsg",
          "hierarchy": "Control Monad Error Class",
          "module": "Control.Monad.Error.Class",
          "name": "strMsg",
          "normalized": "String-\u003ea",
          "package": "mtl",
          "partial": "Msg",
          "signature": "String-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Error-Class.html#v:strMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs used within a monadic computation to begin exception processing.\n\u003c/p\u003e",
          "module": "Control.Monad.Error.Class",
          "name": "throwError",
          "package": "mtl",
          "signature": "e -\u003e m a",
          "source": "src/Control-Monad-Error-Class.html#throwError",
          "type": "method"
        },
        "index": {
          "description": "Is used within monadic computation to begin exception processing",
          "hierarchy": "Control Monad Error Class",
          "module": "Control.Monad.Error.Class",
          "name": "throwError",
          "normalized": "a-\u003eb c",
          "package": "mtl",
          "partial": "Error",
          "signature": "e-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Error-Class.html#v:throwError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003eComputation type:\u003c/dt\u003e\u003cdd\u003e Computations which may fail or throw exceptions.\n\u003c/dd\u003e\u003cdt\u003eBinding strategy:\u003c/dt\u003e\u003cdd\u003e Failure records information about the cause/location\nof the failure. Failure values bypass the bound function,\nother values are used as inputs to the bound function.\n\u003c/dd\u003e\u003cdt\u003eUseful for:\u003c/dt\u003e\u003cdd\u003e Building computations from sequences of functions that may fail\nor using exception handling to structure error handling.\n\u003c/dd\u003e\u003cdt\u003eZero and plus:\u003c/dt\u003e\u003cdd\u003e Zero is represented by an empty error and the plus operation\nexecutes its second argument if the first fails.\n\u003c/dd\u003e\u003cdt\u003eExample type:\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e String a\u003c/code\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eThe Error monad (also called the Exception monad).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Error",
          "name": "Error",
          "package": "mtl",
          "source": "src/Control-Monad-Error.html",
          "type": "module"
        },
        "index": {
          "description": "Computation type Computations which may fail or throw exceptions Binding strategy Failure records information about the cause location of the failure Failure values bypass the bound function other values are used as inputs to the bound function Useful for Building computations from sequences of functions that may fail or using exception handling to structure error handling Zero and plus Zero is represented by an empty error and the plus operation executes its second argument if the first fails Example type Either String The Error monad also called the Exception monad",
          "hierarchy": "Control Monad Error",
          "module": "Control.Monad.Error",
          "name": "Error",
          "package": "mtl",
          "partial": "Error",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Error.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn exception to be thrown.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003enoMsg\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003estrMsg\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Error",
          "name": "Error",
          "package": "mtl",
          "type": "class"
        },
        "index": {
          "description": "An exception to be thrown Minimal complete definition noMsg or strMsg",
          "hierarchy": "Control Monad Error",
          "module": "Control.Monad.Error",
          "name": "Error",
          "package": "mtl",
          "partial": "Error",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Error.html#t:Error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe error monad transformer. It can be used to add error handling\n to other monads.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003eErrorT\u003c/code\u003e Monad structure is parameterized over two things:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e e - The error type.\n\u003c/li\u003e\u003cli\u003e m - The inner monad.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e function yields a successful computation, while \u003ccode\u003e\u003e\u003e=\u003c/code\u003e\n sequences two subcomputations, failing on the first error.\n\u003c/p\u003e",
          "module": "Control.Monad.Error",
          "name": "ErrorT",
          "package": "mtl",
          "type": "newtype"
        },
        "index": {
          "description": "The error monad transformer It can be used to add error handling to other monads The ErrorT Monad structure is parameterized over two things The error type The inner monad The return function yields successful computation while sequences two subcomputations failing on the first error",
          "hierarchy": "Control Monad Error",
          "module": "Control.Monad.Error",
          "name": "ErrorT",
          "package": "mtl",
          "partial": "Error",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Error.html#t:ErrorT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe strategy of combining computations that can throw exceptions\nby bypassing bound functions\nfrom the point an exception is thrown to the point that it is handled.\n\u003c/p\u003e\u003cp\u003eIs parameterized over the type of error information and\nthe monad type constructor.\nIt is common to use \u003ccode\u003e\u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e String\u003c/code\u003e as the monad type constructor\nfor an error monad in which error descriptions take the form of strings.\nIn that case and many other common cases the resulting monad is already defined\nas an instance of the \u003ccode\u003e\u003ca\u003eMonadError\u003c/a\u003e\u003c/code\u003e class.\nYou can also define your own error type and/or use a monad type constructor\nother than \u003ccode\u003e\u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eString\u003c/code\u003e\u003c/code\u003e or \u003ccode\u003e\u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eIOError\u003c/code\u003e\u003c/code\u003e.\nIn these cases you will have to explicitly define instances of the \u003ccode\u003e\u003ca\u003eError\u003c/a\u003e\u003c/code\u003e\nand/or \u003ccode\u003e\u003ca\u003eMonadError\u003c/a\u003e\u003c/code\u003e classes.\n\u003c/p\u003e",
          "module": "Control.Monad.Error",
          "name": "MonadError",
          "package": "mtl",
          "source": "src/Control-Monad-Error-Class.html#MonadError",
          "type": "class"
        },
        "index": {
          "description": "The strategy of combining computations that can throw exceptions by bypassing bound functions from the point an exception is thrown to the point that it is handled Is parameterized over the type of error information and the monad type constructor It is common to use Either String as the monad type constructor for an error monad in which error descriptions take the form of strings In that case and many other common cases the resulting monad is already defined as an instance of the MonadError class You can also define your own error type and or use monad type constructor other than Either String or Either IOError In these cases you will have to explicitly define instances of the Error and or MonadError classes",
          "hierarchy": "Control Monad Error",
          "module": "Control.Monad.Error",
          "name": "MonadError",
          "package": "mtl",
          "partial": "Monad Error",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Error.html#t:MonadError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Error",
          "name": "ErrorT",
          "package": "mtl",
          "signature": "ErrorT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Error",
          "module": "Control.Monad.Error",
          "name": "ErrorT",
          "package": "mtl",
          "partial": "Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Error.html#v:ErrorT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA handler function to handle previous errors and return to normal execution.\n    A common idiom is:\n\u003c/p\u003e\u003cpre\u003e do { action1; action2; action3 } `catchError` handler\n\u003c/pre\u003e\u003cp\u003ewhere the \u003ccode\u003eaction\u003c/code\u003e functions can call \u003ccode\u003e\u003ca\u003ethrowError\u003c/a\u003e\u003c/code\u003e.\n    Note that \u003ccode\u003ehandler\u003c/code\u003e and the do-block must have the same return type.\n\u003c/p\u003e",
          "module": "Control.Monad.Error",
          "name": "catchError",
          "package": "mtl",
          "signature": "m a -\u003e (e -\u003e m a) -\u003e m a",
          "source": "src/Control-Monad-Error-Class.html#catchError",
          "type": "method"
        },
        "index": {
          "description": "handler function to handle previous errors and return to normal execution common idiom is do action1 action2 action3 catchError handler where the action functions can call throwError Note that handler and the do-block must have the same return type",
          "hierarchy": "Control Monad Error",
          "module": "Control.Monad.Error",
          "name": "catchError",
          "normalized": "a b-\u003e(c-\u003ea b)-\u003ea b",
          "package": "mtl",
          "partial": "Error",
          "signature": "m a-\u003e(e-\u003em a)-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Error.html#v:catchError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap the unwrapped computation using the given function.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunErrorT\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003emapErrorT\u003c/a\u003e\u003c/code\u003e f m) = f (\u003ccode\u003e\u003ca\u003erunErrorT\u003c/a\u003e\u003c/code\u003e m)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.Monad.Error",
          "name": "mapErrorT",
          "package": "mtl",
          "signature": "(m (Either e a) -\u003e n (Either e' b)) -\u003e ErrorT e m a -\u003e ErrorT e' n b",
          "type": "function"
        },
        "index": {
          "description": "Map the unwrapped computation using the given function runErrorT mapErrorT runErrorT",
          "hierarchy": "Control Monad Error",
          "module": "Control.Monad.Error",
          "name": "mapErrorT",
          "normalized": "(a(Either b c)-\u003ed(Either e f))-\u003eErrorT b a c-\u003eErrorT e d f",
          "package": "mtl",
          "partial": "Error",
          "signature": "(m(Either e a)-\u003en(Either e' b))-\u003eErrorT e m a-\u003eErrorT e' n b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Error.html#v:mapErrorT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates an exception without a message.\n The default implementation is \u003ccode\u003e\u003ccode\u003e\u003ca\u003estrMsg\u003c/a\u003e\u003c/code\u003e \"\"\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Error",
          "name": "noMsg",
          "package": "mtl",
          "signature": "a",
          "type": "method"
        },
        "index": {
          "description": "Creates an exception without message The default implementation is strMsg",
          "hierarchy": "Control Monad Error",
          "module": "Control.Monad.Error",
          "name": "noMsg",
          "package": "mtl",
          "partial": "Msg",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Error.html#v:noMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Error",
          "name": "runErrorT",
          "package": "mtl",
          "signature": "m (Either e a)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Error",
          "module": "Control.Monad.Error",
          "name": "runErrorT",
          "package": "mtl",
          "partial": "Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Error.html#v:runErrorT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates an exception with a message.\n The default implementation of \u003ccode\u003e\u003ccode\u003e\u003ca\u003estrMsg\u003c/a\u003e\u003c/code\u003e s\u003c/code\u003e is \u003ccode\u003e\u003ca\u003enoMsg\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Error",
          "name": "strMsg",
          "package": "mtl",
          "signature": "String -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "Creates an exception with message The default implementation of strMsg is noMsg",
          "hierarchy": "Control Monad Error",
          "module": "Control.Monad.Error",
          "name": "strMsg",
          "normalized": "String-\u003ea",
          "package": "mtl",
          "partial": "Msg",
          "signature": "String-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Error.html#v:strMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs used within a monadic computation to begin exception processing.\n\u003c/p\u003e",
          "module": "Control.Monad.Error",
          "name": "throwError",
          "package": "mtl",
          "signature": "e -\u003e m a",
          "source": "src/Control-Monad-Error-Class.html#throwError",
          "type": "method"
        },
        "index": {
          "description": "Is used within monadic computation to begin exception processing",
          "hierarchy": "Control Monad Error",
          "module": "Control.Monad.Error",
          "name": "throwError",
          "normalized": "a-\u003eb c",
          "package": "mtl",
          "partial": "Error",
          "signature": "e-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Error.html#v:throwError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003eComputation type:\u003c/dt\u003e\u003cdd\u003e Simple function application.\n\u003c/dd\u003e\u003cdt\u003eBinding strategy:\u003c/dt\u003e\u003cdd\u003e The bound function is applied to the input value.\n\u003ccode\u003e\u003ccode\u003e\u003ca\u003eIdentity\u003c/a\u003e\u003c/code\u003e x \u003e\u003e= f == \u003ccode\u003e\u003ca\u003eIdentity\u003c/a\u003e\u003c/code\u003e (f x)\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003eUseful for:\u003c/dt\u003e\u003cdd\u003e Monads can be derived from monad transformers applied to the\n\u003ccode\u003e\u003ca\u003eIdentity\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/dd\u003e\u003cdt\u003eZero and plus:\u003c/dt\u003e\u003cdd\u003e None.\n\u003c/dd\u003e\u003cdt\u003eExample type:\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIdentity\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eThe \u003ccode\u003eIdentity\u003c/code\u003e monad is a monad that does not embody any computational strategy.\nIt simply applies the bound function to its input without any modification.\nComputationally, there is no reason to use the \u003ccode\u003eIdentity\u003c/code\u003e monad\ninstead of the much simpler act of simply applying functions to their arguments.\nThe purpose of the \u003ccode\u003eIdentity\u003c/code\u003e monad is its fundamental role in the theory\nof monad transformers.\nAny monad transformer applied to the \u003ccode\u003eIdentity\u003c/code\u003e monad yields a non-transformer\nversion of that monad.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Identity",
          "name": "Identity",
          "package": "mtl",
          "source": "src/Control-Monad-Identity.html",
          "type": "module"
        },
        "index": {
          "description": "Computation type Simple function application Binding strategy The bound function is applied to the input value Identity Identity Useful for Monads can be derived from monad transformers applied to the Identity monad Zero and plus None Example type Identity The Identity monad is monad that does not embody any computational strategy It simply applies the bound function to its input without any modification Computationally there is no reason to use the Identity monad instead of the much simpler act of simply applying functions to their arguments The purpose of the Identity monad is its fundamental role in the theory of monad transformers Any monad transformer applied to the Identity monad yields non-transformer version of that monad",
          "hierarchy": "Control Monad Identity",
          "module": "Control.Monad.Identity",
          "name": "Identity",
          "package": "mtl",
          "partial": "Identity",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Identity.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe List monad.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.List",
          "name": "List",
          "package": "mtl",
          "source": "src/Control-Monad-List.html",
          "type": "module"
        },
        "index": {
          "description": "The List monad",
          "hierarchy": "Control Monad List",
          "module": "Control.Monad.List",
          "name": "List",
          "package": "mtl",
          "partial": "List",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-List.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParameterizable list monad, with an inner monad.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote:\u003c/em\u003e this does not yield a monad unless the argument monad is commutative.\n\u003c/p\u003e",
          "module": "Control.Monad.List",
          "name": "ListT",
          "package": "mtl",
          "type": "newtype"
        },
        "index": {
          "description": "Parameterizable list monad with an inner monad Note this does not yield monad unless the argument monad is commutative",
          "hierarchy": "Control Monad List",
          "module": "Control.Monad.List",
          "name": "ListT",
          "package": "mtl",
          "partial": "List",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-List.html#t:ListT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.List",
          "name": "ListT",
          "package": "mtl",
          "signature": "ListT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad List",
          "module": "Control.Monad.List",
          "name": "ListT",
          "package": "mtl",
          "partial": "List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-List.html#v:ListT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap between \u003ccode\u003e\u003ca\u003eListT\u003c/a\u003e\u003c/code\u003e computations.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunListT\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003emapListT\u003c/a\u003e\u003c/code\u003e f m) = f (\u003ccode\u003e\u003ca\u003erunListT\u003c/a\u003e\u003c/code\u003e m)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.Monad.List",
          "name": "mapListT",
          "package": "mtl",
          "signature": "(m [a] -\u003e n [b]) -\u003e ListT m a -\u003e ListT n b",
          "type": "function"
        },
        "index": {
          "description": "Map between ListT computations runListT mapListT runListT",
          "hierarchy": "Control Monad List",
          "module": "Control.Monad.List",
          "name": "mapListT",
          "normalized": "(a[b]-\u003ec[d])-\u003eListT a b-\u003eListT c d",
          "package": "mtl",
          "partial": "List",
          "signature": "(m[a]-\u003en[b])-\u003eListT m a-\u003eListT n b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-List.html#v:mapListT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.List",
          "name": "runListT",
          "package": "mtl",
          "signature": "m [a]",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad List",
          "module": "Control.Monad.List",
          "name": "runListT",
          "normalized": "a[b]",
          "package": "mtl",
          "partial": "List",
          "signature": "m[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-List.html#v:runListT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDeclaration of the MonadRWS class.\n\u003c/p\u003e\u003cp\u003eInspired by the paper\n      \u003cem\u003eFunctional Programming with Overloading and Higher-Order Polymorphism\u003c/em\u003e,\n        Mark P Jones (\u003ca\u003ehttp://web.cecs.pdx.edu/~mpj/\u003c/a\u003e)\n          Advanced School of Functional Programming, 1995.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.RWS.Class",
          "name": "Class",
          "package": "mtl",
          "source": "src/Control-Monad-RWS-Class.html",
          "type": "module"
        },
        "index": {
          "description": "Declaration of the MonadRWS class Inspired by the paper Functional Programming with Overloading and Higher-Order Polymorphism Mark Jones http web.cecs.pdx.edu mpj Advanced School of Functional Programming",
          "hierarchy": "Control Monad RWS Class",
          "module": "Control.Monad.RWS.Class",
          "name": "Class",
          "package": "mtl",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-RWS-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.RWS.Class",
          "name": "MonadRWS",
          "package": "mtl",
          "source": "src/Control-Monad-RWS-Class.html#MonadRWS",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Monad RWS Class",
          "module": "Control.Monad.RWS.Class",
          "name": "MonadRWS",
          "package": "mtl",
          "partial": "Monad RWS",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-RWS-Class.html#t:MonadRWS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLazy RWS monad.\n\u003c/p\u003e\u003cp\u003eInspired by the paper\n      \u003cem\u003eFunctional Programming with Overloading and Higher-Order Polymorphism\u003c/em\u003e,\n        Mark P Jones (\u003ca\u003ehttp://web.cecs.pdx.edu/~mpj/\u003c/a\u003e)\n          Advanced School of Functional Programming, 1995.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.RWS.Lazy",
          "name": "Lazy",
          "package": "mtl",
          "source": "src/Control-Monad-RWS-Lazy.html",
          "type": "module"
        },
        "index": {
          "description": "Lazy RWS monad Inspired by the paper Functional Programming with Overloading and Higher-Order Polymorphism Mark Jones http web.cecs.pdx.edu mpj Advanced School of Functional Programming",
          "hierarchy": "Control Monad RWS Lazy",
          "module": "Control.Monad.RWS.Lazy",
          "name": "Lazy",
          "package": "mtl",
          "partial": "Lazy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-RWS-Lazy.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monad containing an environment of type \u003ccode\u003er\u003c/code\u003e, output of type \u003ccode\u003ew\u003c/code\u003e\n and an updatable state of type \u003ccode\u003es\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.RWS.Lazy",
          "name": "RWS",
          "package": "mtl",
          "type": "type"
        },
        "index": {
          "description": "monad containing an environment of type output of type and an updatable state of type",
          "hierarchy": "Control Monad RWS Lazy",
          "module": "Control.Monad.RWS.Lazy",
          "name": "RWS",
          "package": "mtl",
          "partial": "RWS",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-RWS-Lazy.html#t:RWS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monad transformer adding reading an environment of type \u003ccode\u003er\u003c/code\u003e,\n collecting an output of type \u003ccode\u003ew\u003c/code\u003e and updating a state of type \u003ccode\u003es\u003c/code\u003e\n to an inner monad \u003ccode\u003em\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.RWS.Lazy",
          "name": "RWST",
          "package": "mtl",
          "type": "newtype"
        },
        "index": {
          "description": "monad transformer adding reading an environment of type collecting an output of type and updating state of type to an inner monad",
          "hierarchy": "Control Monad RWS Lazy",
          "module": "Control.Monad.RWS.Lazy",
          "name": "RWST",
          "package": "mtl",
          "partial": "RWST",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-RWS-Lazy.html#t:RWST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Control.Monad.RWS.Lazy\",\"Control.Monad.RWS.Strict\"]",
          "name": "RWST",
          "package": "mtl",
          "signature": "RWST",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mtl/docs/Control-Monad-RWS-Lazy.html#v:RWST\",\"http://hackage.haskell.org/package/mtl/docs/Control-Monad-RWS-Strict.html#v:RWST\"]"
        },
        "index": {
          "hierarchy": "Control Monad RWS Lazy",
          "module": "Control.Monad.RWS.Lazy",
          "name": "RWST",
          "package": "mtl",
          "partial": "RWST",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-RWS-Lazy.html#v:RWST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate a computation with the given initial state and environment,\n returning the final value and output, discarding the final state.\n\u003c/p\u003e",
          "module": "[\"Control.Monad.RWS.Lazy\",\"Control.Monad.RWS.Strict\"]",
          "name": "evalRWS",
          "package": "mtl",
          "signature": "RWS r w s a-\u003e r-\u003e s-\u003e (a, w)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mtl/docs/Control-Monad-RWS-Lazy.html#v:evalRWS\",\"http://hackage.haskell.org/package/mtl/docs/Control-Monad-RWS-Strict.html#v:evalRWS\"]"
        },
        "index": {
          "description": "Evaluate computation with the given initial state and environment returning the final value and output discarding the final state",
          "hierarchy": "Control Monad RWS Lazy",
          "module": "Control.Monad.RWS.Lazy",
          "name": "evalRWS",
          "normalized": "RWS a b c d-\u003ea-\u003ec-\u003e(d,b)",
          "package": "mtl",
          "partial": "RWS",
          "signature": "RWS r w s a-\u003er-\u003es-\u003e(a,w)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-RWS-Lazy.html#v:evalRWS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate a computation with the given initial state and environment,\n returning the final value and output, discarding the final state.\n\u003c/p\u003e",
          "module": "[\"Control.Monad.RWS.Lazy\",\"Control.Monad.RWS.Strict\"]",
          "name": "evalRWST",
          "package": "mtl",
          "signature": "RWST r w s m a-\u003e r-\u003e s-\u003e m (a, w)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mtl/docs/Control-Monad-RWS-Lazy.html#v:evalRWST\",\"http://hackage.haskell.org/package/mtl/docs/Control-Monad-RWS-Strict.html#v:evalRWST\"]"
        },
        "index": {
          "description": "Evaluate computation with the given initial state and environment returning the final value and output discarding the final state",
          "hierarchy": "Control Monad RWS Lazy",
          "module": "Control.Monad.RWS.Lazy",
          "name": "evalRWST",
          "normalized": "RWST a b c d e-\u003ea-\u003ec-\u003ed(e,b)",
          "package": "mtl",
          "partial": "RWST",
          "signature": "RWST r w s m a-\u003er-\u003es-\u003em(a,w)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-RWS-Lazy.html#v:evalRWST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate a computation with the given initial state and environment,\n returning the final state and output, discarding the final value.\n\u003c/p\u003e",
          "module": "[\"Control.Monad.RWS.Lazy\",\"Control.Monad.RWS.Strict\"]",
          "name": "execRWS",
          "package": "mtl",
          "signature": "RWS r w s a-\u003e r-\u003e s-\u003e (s, w)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mtl/docs/Control-Monad-RWS-Lazy.html#v:execRWS\",\"http://hackage.haskell.org/package/mtl/docs/Control-Monad-RWS-Strict.html#v:execRWS\"]"
        },
        "index": {
          "description": "Evaluate computation with the given initial state and environment returning the final state and output discarding the final value",
          "hierarchy": "Control Monad RWS Lazy",
          "module": "Control.Monad.RWS.Lazy",
          "name": "execRWS",
          "normalized": "RWS a b c d-\u003ea-\u003ec-\u003e(c,b)",
          "package": "mtl",
          "partial": "RWS",
          "signature": "RWS r w s a-\u003er-\u003es-\u003e(s,w)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-RWS-Lazy.html#v:execRWS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate a computation with the given initial state and environment,\n returning the final state and output, discarding the final value.\n\u003c/p\u003e",
          "module": "[\"Control.Monad.RWS.Lazy\",\"Control.Monad.RWS.Strict\"]",
          "name": "execRWST",
          "package": "mtl",
          "signature": "RWST r w s m a-\u003e r-\u003e s-\u003e m (s, w)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mtl/docs/Control-Monad-RWS-Lazy.html#v:execRWST\",\"http://hackage.haskell.org/package/mtl/docs/Control-Monad-RWS-Strict.html#v:execRWST\"]"
        },
        "index": {
          "description": "Evaluate computation with the given initial state and environment returning the final state and output discarding the final value",
          "hierarchy": "Control Monad RWS Lazy",
          "module": "Control.Monad.RWS.Lazy",
          "name": "execRWST",
          "normalized": "RWST a b c d e-\u003ea-\u003ec-\u003ed(c,b)",
          "package": "mtl",
          "partial": "RWST",
          "signature": "RWST r w s m a-\u003er-\u003es-\u003em(s,w)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-RWS-Lazy.html#v:execRWST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap the return value, final state and output of a computation using\n the given function.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunRWS\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003emapRWS\u003c/a\u003e\u003c/code\u003e f m) r s = f (\u003ccode\u003e\u003ca\u003erunRWS\u003c/a\u003e\u003c/code\u003e m r s)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "[\"Control.Monad.RWS.Lazy\",\"Control.Monad.RWS.Strict\"]",
          "name": "mapRWS",
          "package": "mtl",
          "signature": "((a, s, w) -\u003e (b, s, w')) -\u003e RWS r w s a -\u003e RWS r w' s b",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mtl/docs/Control-Monad-RWS-Lazy.html#v:mapRWS\",\"http://hackage.haskell.org/package/mtl/docs/Control-Monad-RWS-Strict.html#v:mapRWS\"]"
        },
        "index": {
          "description": "Map the return value final state and output of computation using the given function runRWS mapRWS runRWS",
          "hierarchy": "Control Monad RWS Lazy",
          "module": "Control.Monad.RWS.Lazy",
          "name": "mapRWS",
          "normalized": "((a,b,c)-\u003e(d,b,e))-\u003eRWS f c b a-\u003eRWS f e b d",
          "package": "mtl",
          "partial": "RWS",
          "signature": "((a,s,w)-\u003e(b,s,w'))-\u003eRWS r w s a-\u003eRWS r w' s b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-RWS-Lazy.html#v:mapRWS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap the inner computation using the given function.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunRWST\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003emapRWST\u003c/a\u003e\u003c/code\u003e f m) r s = f (\u003ccode\u003e\u003ca\u003erunRWST\u003c/a\u003e\u003c/code\u003e m r s)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "[\"Control.Monad.RWS.Lazy\",\"Control.Monad.RWS.Strict\"]",
          "name": "mapRWST",
          "package": "mtl",
          "signature": "(m (a, s, w) -\u003e n (b, s, w')) -\u003e RWST r w s m a -\u003e RWST r w' s n b",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mtl/docs/Control-Monad-RWS-Lazy.html#v:mapRWST\",\"http://hackage.haskell.org/package/mtl/docs/Control-Monad-RWS-Strict.html#v:mapRWST\"]"
        },
        "index": {
          "description": "Map the inner computation using the given function runRWST mapRWST runRWST",
          "hierarchy": "Control Monad RWS Lazy",
          "module": "Control.Monad.RWS.Lazy",
          "name": "mapRWST",
          "normalized": "(a(b,c,d)-\u003ee(f,c,g))-\u003eRWST h d c a b-\u003eRWST h g c e f",
          "package": "mtl",
          "partial": "RWST",
          "signature": "(m(a,s,w)-\u003en(b,s,w'))-\u003eRWST r w s m a-\u003eRWST r w' s n b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-RWS-Lazy.html#v:mapRWST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnwrap an RWS computation as a function.\n (The inverse of \u003ccode\u003e\u003ca\u003erws\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e",
          "module": "[\"Control.Monad.RWS.Lazy\",\"Control.Monad.RWS.Strict\"]",
          "name": "runRWS",
          "package": "mtl",
          "signature": "RWS r w s a -\u003e r -\u003e s -\u003e (a, s, w)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mtl/docs/Control-Monad-RWS-Lazy.html#v:runRWS\",\"http://hackage.haskell.org/package/mtl/docs/Control-Monad-RWS-Strict.html#v:runRWS\"]"
        },
        "index": {
          "description": "Unwrap an RWS computation as function The inverse of rws",
          "hierarchy": "Control Monad RWS Lazy",
          "module": "Control.Monad.RWS.Lazy",
          "name": "runRWS",
          "normalized": "RWS a b c d-\u003ea-\u003ec-\u003e(d,c,b)",
          "package": "mtl",
          "partial": "RWS",
          "signature": "RWS r w s a-\u003er-\u003es-\u003e(a,s,w)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-RWS-Lazy.html#v:runRWS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Control.Monad.RWS.Lazy\",\"Control.Monad.RWS.Strict\"]",
          "name": "runRWST",
          "package": "mtl",
          "signature": "r -\u003e s -\u003e m (a, s, w)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mtl/docs/Control-Monad-RWS-Lazy.html#v:runRWST\",\"http://hackage.haskell.org/package/mtl/docs/Control-Monad-RWS-Strict.html#v:runRWST\"]"
        },
        "index": {
          "hierarchy": "Control Monad RWS Lazy",
          "module": "Control.Monad.RWS.Lazy",
          "name": "runRWST",
          "normalized": "a-\u003eb-\u003ec(d,b,e)",
          "package": "mtl",
          "partial": "RWST",
          "signature": "r-\u003es-\u003em(a,s,w)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-RWS-Lazy.html#v:runRWST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct an RWS computation from a function.\n (The inverse of \u003ccode\u003e\u003ca\u003erunRWS\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e",
          "module": "[\"Control.Monad.RWS.Lazy\",\"Control.Monad.RWS.Strict\"]",
          "name": "rws",
          "package": "mtl",
          "signature": "(r -\u003e s -\u003e (a, s, w)) -\u003e RWS r w s a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mtl/docs/Control-Monad-RWS-Lazy.html#v:rws\",\"http://hackage.haskell.org/package/mtl/docs/Control-Monad-RWS-Strict.html#v:rws\"]"
        },
        "index": {
          "description": "Construct an RWS computation from function The inverse of runRWS",
          "hierarchy": "Control Monad RWS Lazy",
          "module": "Control.Monad.RWS.Lazy",
          "name": "rws",
          "normalized": "(a-\u003eb-\u003e(c,b,d))-\u003eRWS a d b c",
          "package": "mtl",
          "signature": "(r-\u003es-\u003e(a,s,w))-\u003eRWS r w s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-RWS-Lazy.html#v:rws"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ewithRWS\u003c/a\u003e\u003c/code\u003e f m\u003c/code\u003e executes action \u003ccode\u003em\u003c/code\u003e with an initial environment\n and state modified by applying \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunRWS\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003ewithRWS\u003c/a\u003e\u003c/code\u003e f m) r s = \u003ccode\u003e\u003ca\u003euncurry\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003erunRWS\u003c/a\u003e\u003c/code\u003e m) (f r s)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "[\"Control.Monad.RWS.Lazy\",\"Control.Monad.RWS.Strict\"]",
          "name": "withRWS",
          "package": "mtl",
          "signature": "(r' -\u003e s -\u003e (r, s)) -\u003e RWS r w s a -\u003e RWS r' w s a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mtl/docs/Control-Monad-RWS-Lazy.html#v:withRWS\",\"http://hackage.haskell.org/package/mtl/docs/Control-Monad-RWS-Strict.html#v:withRWS\"]"
        },
        "index": {
          "description": "withRWS executes action with an initial environment and state modified by applying runRWS withRWS uncurry runRWS",
          "hierarchy": "Control Monad RWS Lazy",
          "module": "Control.Monad.RWS.Lazy",
          "name": "withRWS",
          "normalized": "(a-\u003eb-\u003e(c,b))-\u003eRWS c d b e-\u003eRWS a d b e",
          "package": "mtl",
          "partial": "RWS",
          "signature": "(r'-\u003es-\u003e(r,s))-\u003eRWS r w s a-\u003eRWS r' w s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-RWS-Lazy.html#v:withRWS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ewithRWST\u003c/a\u003e\u003c/code\u003e f m\u003c/code\u003e executes action \u003ccode\u003em\u003c/code\u003e with an initial environment\n and state modified by applying \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunRWST\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003ewithRWST\u003c/a\u003e\u003c/code\u003e f m) r s = \u003ccode\u003e\u003ca\u003euncurry\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003erunRWST\u003c/a\u003e\u003c/code\u003e m) (f r s)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "[\"Control.Monad.RWS.Lazy\",\"Control.Monad.RWS.Strict\"]",
          "name": "withRWST",
          "package": "mtl",
          "signature": "(r' -\u003e s -\u003e (r, s)) -\u003e RWST r w s m a -\u003e RWST r' w s m a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mtl/docs/Control-Monad-RWS-Lazy.html#v:withRWST\",\"http://hackage.haskell.org/package/mtl/docs/Control-Monad-RWS-Strict.html#v:withRWST\"]"
        },
        "index": {
          "description": "withRWST executes action with an initial environment and state modified by applying runRWST withRWST uncurry runRWST",
          "hierarchy": "Control Monad RWS Lazy",
          "module": "Control.Monad.RWS.Lazy",
          "name": "withRWST",
          "normalized": "(a-\u003eb-\u003e(c,b))-\u003eRWST c d b e f-\u003eRWST a d b e f",
          "package": "mtl",
          "partial": "RWST",
          "signature": "(r'-\u003es-\u003e(r,s))-\u003eRWST r w s m a-\u003eRWST r' w s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-RWS-Lazy.html#v:withRWST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eStrict RWS monad.\n\u003c/p\u003e\u003cp\u003eInspired by the paper\n      \u003cem\u003eFunctional Programming with Overloading and Higher-Order Polymorphism\u003c/em\u003e,\n        Mark P Jones (\u003ca\u003ehttp://web.cecs.pdx.edu/~mpj/\u003c/a\u003e)\n          Advanced School of Functional Programming, 1995.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.RWS.Strict",
          "name": "Strict",
          "package": "mtl",
          "source": "src/Control-Monad-RWS-Strict.html",
          "type": "module"
        },
        "index": {
          "description": "Strict RWS monad Inspired by the paper Functional Programming with Overloading and Higher-Order Polymorphism Mark Jones http web.cecs.pdx.edu mpj Advanced School of Functional Programming",
          "hierarchy": "Control Monad RWS Strict",
          "module": "Control.Monad.RWS.Strict",
          "name": "Strict",
          "package": "mtl",
          "partial": "Strict",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-RWS-Strict.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monad containing an environment of type \u003ccode\u003er\u003c/code\u003e, output of type \u003ccode\u003ew\u003c/code\u003e\n and an updatable state of type \u003ccode\u003es\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.RWS.Strict",
          "name": "RWS",
          "package": "mtl",
          "type": "type"
        },
        "index": {
          "description": "monad containing an environment of type output of type and an updatable state of type",
          "hierarchy": "Control Monad RWS Strict",
          "module": "Control.Monad.RWS.Strict",
          "name": "RWS",
          "package": "mtl",
          "partial": "RWS",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-RWS-Strict.html#t:RWS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monad transformer adding reading an environment of type \u003ccode\u003er\u003c/code\u003e,\n collecting an output of type \u003ccode\u003ew\u003c/code\u003e and updating a state of type \u003ccode\u003es\u003c/code\u003e\n to an inner monad \u003ccode\u003em\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.RWS.Strict",
          "name": "RWST",
          "package": "mtl",
          "type": "newtype"
        },
        "index": {
          "description": "monad transformer adding reading an environment of type collecting an output of type and updating state of type to an inner monad",
          "hierarchy": "Control Monad RWS Strict",
          "module": "Control.Monad.RWS.Strict",
          "name": "RWST",
          "package": "mtl",
          "partial": "RWST",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-RWS-Strict.html#t:RWST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDeclaration of the MonadRWS class.\n\u003c/p\u003e\u003cp\u003eInspired by the paper\n      \u003cem\u003eFunctional Programming with Overloading and Higher-Order Polymorphism\u003c/em\u003e,\n        Mark P Jones (\u003ca\u003ehttp://web.cecs.pdx.edu/~mpj/\u003c/a\u003e)\n          Advanced School of Functional Programming, 1995.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.RWS",
          "name": "RWS",
          "package": "mtl",
          "source": "src/Control-Monad-RWS.html",
          "type": "module"
        },
        "index": {
          "description": "Declaration of the MonadRWS class Inspired by the paper Functional Programming with Overloading and Higher-Order Polymorphism Mark Jones http web.cecs.pdx.edu mpj Advanced School of Functional Programming",
          "hierarchy": "Control Monad RWS",
          "module": "Control.Monad.RWS",
          "name": "RWS",
          "package": "mtl",
          "partial": "RWS",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-RWS.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003eComputation type:\u003c/dt\u003e\u003cdd\u003e Computations which read values from a shared environment.\n\u003c/dd\u003e\u003cdt\u003eBinding strategy:\u003c/dt\u003e\u003cdd\u003e Monad values are functions from the environment to a value.\nThe bound function is applied to the bound value, and both have access\nto the shared environment.\n\u003c/dd\u003e\u003cdt\u003eUseful for:\u003c/dt\u003e\u003cdd\u003e Maintaining variable bindings, or other shared environment.\n\u003c/dd\u003e\u003cdt\u003eZero and plus:\u003c/dt\u003e\u003cdd\u003e None.\n\u003c/dd\u003e\u003cdt\u003eExample type:\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003e\u003ccode\u003eReader\u003c/code\u003e [(String,Value)] a\u003c/code\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eThe \u003ccode\u003eReader\u003c/code\u003e monad (also called the Environment monad).\nRepresents a computation, which can read values from\na shared environment, pass values from function to function,\nand execute sub-computations in a modified environment.\nUsing \u003ccode\u003eReader\u003c/code\u003e monad for such computations is often clearer and easier\nthan using the \u003ccode\u003e\u003ca\u003eState\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e\u003cp\u003eInspired by the paper\n  \u003cem\u003eFunctional Programming with Overloading and Higher-Order Polymorphism\u003c/em\u003e,\n    Mark P Jones (\u003ca\u003ehttp://web.cecs.pdx.edu/~mpj/\u003c/a\u003e)\n    Advanced School of Functional Programming, 1995.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Reader.Class",
          "name": "Class",
          "package": "mtl",
          "source": "src/Control-Monad-Reader-Class.html",
          "type": "module"
        },
        "index": {
          "description": "Computation type Computations which read values from shared environment Binding strategy Monad values are functions from the environment to value The bound function is applied to the bound value and both have access to the shared environment Useful for Maintaining variable bindings or other shared environment Zero and plus None Example type Reader String Value The Reader monad also called the Environment monad Represents computation which can read values from shared environment pass values from function to function and execute sub-computations in modified environment Using Reader monad for such computations is often clearer and easier than using the State monad Inspired by the paper Functional Programming with Overloading and Higher-Order Polymorphism Mark Jones http web.cecs.pdx.edu mpj Advanced School of Functional Programming",
          "hierarchy": "Control Monad Reader Class",
          "module": "Control.Monad.Reader.Class",
          "name": "Class",
          "package": "mtl",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Reader-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee examples in \u003ca\u003eControl.Monad.Reader\u003c/a\u003e.\n Note, the partially applied function type \u003ccode\u003e(-\u003e) r\u003c/code\u003e is a simple reader monad.\n See the \u003ccode\u003einstance\u003c/code\u003e declaration below.\n\u003c/p\u003e",
          "module": "Control.Monad.Reader.Class",
          "name": "MonadReader",
          "package": "mtl",
          "source": "src/Control-Monad-Reader-Class.html#MonadReader",
          "type": "class"
        },
        "index": {
          "description": "See examples in Control.Monad.Reader Note the partially applied function type is simple reader monad See the instance declaration below",
          "hierarchy": "Control Monad Reader Class",
          "module": "Control.Monad.Reader.Class",
          "name": "MonadReader",
          "package": "mtl",
          "partial": "Monad Reader",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Reader-Class.html#t:MonadReader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieves the monad environment.\n\u003c/p\u003e",
          "module": "Control.Monad.Reader.Class",
          "name": "ask",
          "package": "mtl",
          "signature": "m r",
          "source": "src/Control-Monad-Reader-Class.html#ask",
          "type": "method"
        },
        "index": {
          "description": "Retrieves the monad environment",
          "hierarchy": "Control Monad Reader Class",
          "module": "Control.Monad.Reader.Class",
          "name": "ask",
          "package": "mtl",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Reader-Class.html#v:ask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieves a function of the current environment.\n\u003c/p\u003e",
          "module": "[\"Control.Monad.Reader.Class\",\"Control.Monad.Reader\"]",
          "name": "asks",
          "package": "mtl",
          "signature": "(r -\u003e a)-\u003e m a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mtl/docs/Control-Monad-Reader-Class.html#v:asks\",\"http://hackage.haskell.org/package/mtl/docs/Control-Monad-Reader.html#v:asks\"]"
        },
        "index": {
          "description": "Retrieves function of the current environment",
          "hierarchy": "Control Monad Reader Class",
          "module": "Control.Monad.Reader.Class",
          "name": "asks",
          "normalized": "(a-\u003eb)-\u003ec b",
          "package": "mtl",
          "signature": "(r-\u003ea)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Reader-Class.html#v:asks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecutes a computation in a modified environment.\n\u003c/p\u003e",
          "module": "Control.Monad.Reader.Class",
          "name": "local",
          "package": "mtl",
          "signature": "local",
          "source": "src/Control-Monad-Reader-Class.html#local",
          "type": "method"
        },
        "index": {
          "description": "Executes computation in modified environment",
          "hierarchy": "Control Monad Reader Class",
          "module": "Control.Monad.Reader.Class",
          "name": "local",
          "package": "mtl",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Reader-Class.html#v:local"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieves a function of the current environment.\n\u003c/p\u003e",
          "module": "Control.Monad.Reader.Class",
          "name": "reader",
          "package": "mtl",
          "signature": "reader",
          "source": "src/Control-Monad-Reader-Class.html#reader",
          "type": "method"
        },
        "index": {
          "description": "Retrieves function of the current environment",
          "hierarchy": "Control Monad Reader Class",
          "module": "Control.Monad.Reader.Class",
          "name": "reader",
          "package": "mtl",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Reader-Class.html#v:reader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003eComputation type:\u003c/dt\u003e\u003cdd\u003e Computations which read values from a shared environment.\n\u003c/dd\u003e\u003cdt\u003eBinding strategy:\u003c/dt\u003e\u003cdd\u003e Monad values are functions from the environment to a value.\nThe bound function is applied to the bound value, and both have access\nto the shared environment.\n\u003c/dd\u003e\u003cdt\u003eUseful for:\u003c/dt\u003e\u003cdd\u003e Maintaining variable bindings, or other shared environment.\n\u003c/dd\u003e\u003cdt\u003eZero and plus:\u003c/dt\u003e\u003cdd\u003e None.\n\u003c/dd\u003e\u003cdt\u003eExample type:\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003eReader\u003c/a\u003e\u003c/code\u003e [(String,Value)] a\u003c/code\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eReader\u003c/a\u003e\u003c/code\u003e monad (also called the Environment monad).\nRepresents a computation, which can read values from\na shared environment, pass values from function to function,\nand execute sub-computations in a modified environment.\nUsing \u003ccode\u003e\u003ca\u003eReader\u003c/a\u003e\u003c/code\u003e monad for such computations is often clearer and easier\nthan using the \u003ccode\u003e\u003ca\u003eState\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e\u003cp\u003eInspired by the paper\n  \u003cem\u003eFunctional Programming with Overloading and Higher-Order Polymorphism\u003c/em\u003e,\n    Mark P Jones (\u003ca\u003ehttp://web.cecs.pdx.edu/~mpj/\u003c/a\u003e)\n    Advanced School of Functional Programming, 1995.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Reader",
          "name": "Reader",
          "package": "mtl",
          "source": "src/Control-Monad-Reader.html",
          "type": "module"
        },
        "index": {
          "description": "Computation type Computations which read values from shared environment Binding strategy Monad values are functions from the environment to value The bound function is applied to the bound value and both have access to the shared environment Useful for Maintaining variable bindings or other shared environment Zero and plus None Example type Reader String Value The Reader monad also called the Environment monad Represents computation which can read values from shared environment pass values from function to function and execute sub-computations in modified environment Using Reader monad for such computations is often clearer and easier than using the State monad Inspired by the paper Functional Programming with Overloading and Higher-Order Polymorphism Mark Jones http web.cecs.pdx.edu mpj Advanced School of Functional Programming",
          "hierarchy": "Control Monad Reader",
          "module": "Control.Monad.Reader",
          "name": "Reader",
          "package": "mtl",
          "partial": "Reader",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Reader.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee examples in \u003ca\u003eControl.Monad.Reader\u003c/a\u003e.\n Note, the partially applied function type \u003ccode\u003e(-\u003e) r\u003c/code\u003e is a simple reader monad.\n See the \u003ccode\u003einstance\u003c/code\u003e declaration below.\n\u003c/p\u003e",
          "module": "Control.Monad.Reader",
          "name": "MonadReader",
          "package": "mtl",
          "source": "src/Control-Monad-Reader-Class.html#MonadReader",
          "type": "class"
        },
        "index": {
          "description": "See examples in Control.Monad.Reader Note the partially applied function type is simple reader monad See the instance declaration below",
          "hierarchy": "Control Monad Reader",
          "module": "Control.Monad.Reader",
          "name": "MonadReader",
          "package": "mtl",
          "partial": "Monad Reader",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Reader.html#t:MonadReader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parameterizable reader monad.\n\u003c/p\u003e\u003cp\u003eComputations are functions of a shared environment.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e function ignores the environment, while \u003ccode\u003e\u003e\u003e=\u003c/code\u003e passes\n the inherited environment to both subcomputations.\n\u003c/p\u003e",
          "module": "Control.Monad.Reader",
          "name": "Reader",
          "package": "mtl",
          "type": "type"
        },
        "index": {
          "description": "The parameterizable reader monad Computations are functions of shared environment The return function ignores the environment while passes the inherited environment to both subcomputations",
          "hierarchy": "Control Monad Reader",
          "module": "Control.Monad.Reader",
          "name": "Reader",
          "package": "mtl",
          "partial": "Reader",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Reader.html#t:Reader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe reader monad transformer,\n which adds a read-only environment to the given monad.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e function ignores the environment, while \u003ccode\u003e\u003e\u003e=\u003c/code\u003e passes\n the inherited environment to both subcomputations.\n\u003c/p\u003e",
          "module": "Control.Monad.Reader",
          "name": "ReaderT",
          "package": "mtl",
          "type": "newtype"
        },
        "index": {
          "description": "The reader monad transformer which adds read-only environment to the given monad The return function ignores the environment while passes the inherited environment to both subcomputations",
          "hierarchy": "Control Monad Reader",
          "module": "Control.Monad.Reader",
          "name": "ReaderT",
          "package": "mtl",
          "partial": "Reader",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Reader.html#t:ReaderT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Reader",
          "name": "ReaderT",
          "package": "mtl",
          "signature": "ReaderT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Reader",
          "module": "Control.Monad.Reader",
          "name": "ReaderT",
          "package": "mtl",
          "partial": "Reader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Reader.html#v:ReaderT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieves the monad environment.\n\u003c/p\u003e",
          "module": "Control.Monad.Reader",
          "name": "ask",
          "package": "mtl",
          "signature": "m r",
          "source": "src/Control-Monad-Reader-Class.html#ask",
          "type": "method"
        },
        "index": {
          "description": "Retrieves the monad environment",
          "hierarchy": "Control Monad Reader",
          "module": "Control.Monad.Reader",
          "name": "ask",
          "package": "mtl",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Reader.html#v:ask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecutes a computation in a modified environment.\n\u003c/p\u003e",
          "module": "Control.Monad.Reader",
          "name": "local",
          "package": "mtl",
          "signature": "local",
          "source": "src/Control-Monad-Reader-Class.html#local",
          "type": "method"
        },
        "index": {
          "description": "Executes computation in modified environment",
          "hierarchy": "Control Monad Reader",
          "module": "Control.Monad.Reader",
          "name": "local",
          "package": "mtl",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Reader.html#v:local"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform the value returned by a \u003ccode\u003eReader\u003c/code\u003e.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunReader\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003emapReader\u003c/a\u003e\u003c/code\u003e f m) = f . \u003ccode\u003e\u003ca\u003erunReader\u003c/a\u003e\u003c/code\u003e m\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.Monad.Reader",
          "name": "mapReader",
          "package": "mtl",
          "signature": "(a -\u003e b) -\u003e Reader r a -\u003e Reader r b",
          "type": "function"
        },
        "index": {
          "description": "Transform the value returned by Reader runReader mapReader runReader",
          "hierarchy": "Control Monad Reader",
          "module": "Control.Monad.Reader",
          "name": "mapReader",
          "normalized": "(a-\u003eb)-\u003eReader c a-\u003eReader c b",
          "package": "mtl",
          "partial": "Reader",
          "signature": "(a-\u003eb)-\u003eReader r a-\u003eReader r b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Reader.html#v:mapReader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform the computation inside a \u003ccode\u003eReaderT\u003c/code\u003e.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunReaderT\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003emapReaderT\u003c/a\u003e\u003c/code\u003e f m) = f . \u003ccode\u003e\u003ca\u003erunReaderT\u003c/a\u003e\u003c/code\u003e m\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.Monad.Reader",
          "name": "mapReaderT",
          "package": "mtl",
          "signature": "(m a -\u003e n b) -\u003e ReaderT r m a -\u003e ReaderT r n b",
          "type": "function"
        },
        "index": {
          "description": "Transform the computation inside ReaderT runReaderT mapReaderT runReaderT",
          "hierarchy": "Control Monad Reader",
          "module": "Control.Monad.Reader",
          "name": "mapReaderT",
          "normalized": "(a b-\u003ec d)-\u003eReaderT e a b-\u003eReaderT e c d",
          "package": "mtl",
          "partial": "Reader",
          "signature": "(m a-\u003en b)-\u003eReaderT r m a-\u003eReaderT r n b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Reader.html#v:mapReaderT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieves a function of the current environment.\n\u003c/p\u003e",
          "module": "Control.Monad.Reader",
          "name": "reader",
          "package": "mtl",
          "signature": "reader",
          "source": "src/Control-Monad-Reader-Class.html#reader",
          "type": "method"
        },
        "index": {
          "description": "Retrieves function of the current environment",
          "hierarchy": "Control Monad Reader",
          "module": "Control.Monad.Reader",
          "name": "reader",
          "package": "mtl",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Reader.html#v:reader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns a \u003ccode\u003eReader\u003c/code\u003e and extracts the final value from it.\n (The inverse of \u003ccode\u003e\u003ca\u003ereader\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e",
          "module": "Control.Monad.Reader",
          "name": "runReader",
          "package": "mtl",
          "signature": "Reader r a-\u003e r-\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Runs Reader and extracts the final value from it The inverse of reader",
          "hierarchy": "Control Monad Reader",
          "module": "Control.Monad.Reader",
          "name": "runReader",
          "normalized": "Reader a b-\u003ea-\u003eb",
          "package": "mtl",
          "partial": "Reader",
          "signature": "Reader r a-\u003er-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Reader.html#v:runReader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe underlying computation, as a function of the environment.\n\u003c/p\u003e",
          "module": "Control.Monad.Reader",
          "name": "runReaderT",
          "package": "mtl",
          "signature": "r -\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "The underlying computation as function of the environment",
          "hierarchy": "Control Monad Reader",
          "module": "Control.Monad.Reader",
          "name": "runReaderT",
          "normalized": "a-\u003eb c",
          "package": "mtl",
          "partial": "Reader",
          "signature": "r-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Reader.html#v:runReaderT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute a computation in a modified environment\n (a specialization of \u003ccode\u003e\u003ca\u003ewithReaderT\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunReader\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003ewithReader\u003c/a\u003e\u003c/code\u003e f m) = \u003ccode\u003e\u003ca\u003erunReader\u003c/a\u003e\u003c/code\u003e m . f\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.Monad.Reader",
          "name": "withReader",
          "package": "mtl",
          "signature": "(r' -\u003e r)-\u003e Reader r a-\u003e Reader r' a",
          "type": "function"
        },
        "index": {
          "description": "Execute computation in modified environment specialization of withReaderT runReader withReader runReader",
          "hierarchy": "Control Monad Reader",
          "module": "Control.Monad.Reader",
          "name": "withReader",
          "normalized": "(a-\u003eb)-\u003eReader b c-\u003eReader a c",
          "package": "mtl",
          "partial": "Reader",
          "signature": "(r'-\u003er)-\u003eReader r a-\u003eReader r' a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Reader.html#v:withReader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute a computation in a modified environment\n (a more general version of \u003ccode\u003e\u003ca\u003elocal\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunReaderT\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003ewithReaderT\u003c/a\u003e\u003c/code\u003e f m) = \u003ccode\u003e\u003ca\u003erunReaderT\u003c/a\u003e\u003c/code\u003e m . f\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.Monad.Reader",
          "name": "withReaderT",
          "package": "mtl",
          "signature": "(r' -\u003e r)-\u003e ReaderT r m a-\u003e ReaderT r' m a",
          "type": "function"
        },
        "index": {
          "description": "Execute computation in modified environment more general version of local runReaderT withReaderT runReaderT",
          "hierarchy": "Control Monad Reader",
          "module": "Control.Monad.Reader",
          "name": "withReaderT",
          "normalized": "(a-\u003eb)-\u003eReaderT b c d-\u003eReaderT a c d",
          "package": "mtl",
          "partial": "Reader",
          "signature": "(r'-\u003er)-\u003eReaderT r m a-\u003eReaderT r' m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Reader.html#v:withReaderT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMonadState class.\n\u003c/p\u003e\u003cp\u003eThis module is inspired by the paper\n      \u003cem\u003eFunctional Programming with Overloading and Higher-Order Polymorphism\u003c/em\u003e,\n        Mark P Jones (\u003ca\u003ehttp://web.cecs.pdx.edu/~mpj/\u003c/a\u003e)\n          Advanced School of Functional Programming, 1995.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.State.Class",
          "name": "Class",
          "package": "mtl",
          "source": "src/Control-Monad-State-Class.html",
          "type": "module"
        },
        "index": {
          "description": "MonadState class This module is inspired by the paper Functional Programming with Overloading and Higher-Order Polymorphism Mark Jones http web.cecs.pdx.edu mpj Advanced School of Functional Programming",
          "hierarchy": "Control Monad State Class",
          "module": "Control.Monad.State.Class",
          "name": "Class",
          "package": "mtl",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMinimal definition is either both of \u003ccode\u003eget\u003c/code\u003e and \u003ccode\u003eput\u003c/code\u003e or just \u003ccode\u003estate\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.State.Class",
          "name": "MonadState",
          "package": "mtl",
          "source": "src/Control-Monad-State-Class.html#MonadState",
          "type": "class"
        },
        "index": {
          "description": "Minimal definition is either both of get and put or just state",
          "hierarchy": "Control Monad State Class",
          "module": "Control.Monad.State.Class",
          "name": "MonadState",
          "package": "mtl",
          "partial": "Monad State",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Class.html#t:MonadState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the state from the internals of the monad.\n\u003c/p\u003e",
          "module": "Control.Monad.State.Class",
          "name": "get",
          "package": "mtl",
          "signature": "m s",
          "source": "src/Control-Monad-State-Class.html#get",
          "type": "method"
        },
        "index": {
          "description": "Return the state from the internals of the monad",
          "hierarchy": "Control Monad State Class",
          "module": "Control.Monad.State.Class",
          "name": "get",
          "package": "mtl",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Class.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets specific component of the state, using a projection function\n supplied.\n\u003c/p\u003e",
          "module": "[\"Control.Monad.State.Class\",\"Control.Monad.State.Lazy\",\"Control.Monad.State.Strict\"]",
          "name": "gets",
          "package": "mtl",
          "signature": "(s -\u003e a) -\u003e m a",
          "source": "src/Control-Monad-State-Class.html#gets",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Class.html#v:gets\",\"http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Lazy.html#v:gets\",\"http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Strict.html#v:gets\"]"
        },
        "index": {
          "description": "Gets specific component of the state using projection function supplied",
          "hierarchy": "Control Monad State Class",
          "module": "Control.Monad.State.Class",
          "name": "gets",
          "normalized": "(a-\u003eb)-\u003ec b",
          "package": "mtl",
          "signature": "(s-\u003ea)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Class.html#v:gets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonadic state transformer.\n\u003c/p\u003e\u003cp\u003eMaps an old state to a new state inside a state monad.\n      The old state is thrown away.\n\u003c/p\u003e\u003cpre\u003e      Main\u003e :t modify ((+1) :: Int -\u003e Int)\n      modify (...) :: (MonadState Int a) =\u003e a ()\n\u003c/pre\u003e\u003cp\u003eThis says that \u003ccode\u003emodify (+1)\u003c/code\u003e acts over any\n    Monad that is a member of the \u003ccode\u003eMonadState\u003c/code\u003e class,\n    with an \u003ccode\u003eInt\u003c/code\u003e state.\n\u003c/p\u003e",
          "module": "[\"Control.Monad.State.Class\",\"Control.Monad.State.Lazy\",\"Control.Monad.State.Strict\"]",
          "name": "modify",
          "package": "mtl",
          "signature": "(s -\u003e s) -\u003e m ()",
          "source": "src/Control-Monad-State-Class.html#modify",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Class.html#v:modify\",\"http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Lazy.html#v:modify\",\"http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Strict.html#v:modify\"]"
        },
        "index": {
          "description": "Monadic state transformer Maps an old state to new state inside state monad The old state is thrown away Main modify Int Int modify MonadState Int This says that modify acts over any Monad that is member of the MonadState class with an Int state",
          "hierarchy": "Control Monad State Class",
          "module": "Control.Monad.State.Class",
          "name": "modify",
          "normalized": "(a-\u003ea)-\u003eb()",
          "package": "mtl",
          "signature": "(s-\u003es)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Class.html#v:modify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace the state inside the monad.\n\u003c/p\u003e",
          "module": "Control.Monad.State.Class",
          "name": "put",
          "package": "mtl",
          "signature": "s -\u003e m ()",
          "source": "src/Control-Monad-State-Class.html#put",
          "type": "method"
        },
        "index": {
          "description": "Replace the state inside the monad",
          "hierarchy": "Control Monad State Class",
          "module": "Control.Monad.State.Class",
          "name": "put",
          "normalized": "a-\u003eb()",
          "package": "mtl",
          "signature": "s-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Class.html#v:put"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmbed a simple state action into the monad.\n\u003c/p\u003e",
          "module": "Control.Monad.State.Class",
          "name": "state",
          "package": "mtl",
          "signature": "(s -\u003e (a, s)) -\u003e m a",
          "source": "src/Control-Monad-State-Class.html#state",
          "type": "method"
        },
        "index": {
          "description": "Embed simple state action into the monad",
          "hierarchy": "Control Monad State Class",
          "module": "Control.Monad.State.Class",
          "name": "state",
          "normalized": "(a-\u003e(b,a))-\u003ec b",
          "package": "mtl",
          "signature": "(s-\u003e(a,s))-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Class.html#v:state"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLazy state monads.\n\u003c/p\u003e\u003cp\u003eThis module is inspired by the paper\n      \u003cem\u003eFunctional Programming with Overloading and Higher-Order Polymorphism\u003c/em\u003e,\n        Mark P Jones (\u003ca\u003ehttp://web.cecs.pdx.edu/~mpj/\u003c/a\u003e)\n          Advanced School of Functional Programming, 1995.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.State.Lazy",
          "name": "Lazy",
          "package": "mtl",
          "source": "src/Control-Monad-State-Lazy.html",
          "type": "module"
        },
        "index": {
          "description": "Lazy state monads This module is inspired by the paper Functional Programming with Overloading and Higher-Order Polymorphism Mark Jones http web.cecs.pdx.edu mpj Advanced School of Functional Programming",
          "hierarchy": "Control Monad State Lazy",
          "module": "Control.Monad.State.Lazy",
          "name": "Lazy",
          "package": "mtl",
          "partial": "Lazy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Lazy.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMinimal definition is either both of \u003ccode\u003eget\u003c/code\u003e and \u003ccode\u003eput\u003c/code\u003e or just \u003ccode\u003estate\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.State.Lazy",
          "name": "MonadState",
          "package": "mtl",
          "source": "src/Control-Monad-State-Class.html#MonadState",
          "type": "class"
        },
        "index": {
          "description": "Minimal definition is either both of get and put or just state",
          "hierarchy": "Control Monad State Lazy",
          "module": "Control.Monad.State.Lazy",
          "name": "MonadState",
          "package": "mtl",
          "partial": "Monad State",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Lazy.html#t:MonadState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA state monad parameterized by the type \u003ccode\u003es\u003c/code\u003e of the state to carry.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e function leaves the state unchanged, while \u003ccode\u003e\u003e\u003e=\u003c/code\u003e uses\n the final state of the first computation as the initial state of\n the second.\n\u003c/p\u003e",
          "module": "Control.Monad.State.Lazy",
          "name": "State",
          "package": "mtl",
          "type": "type"
        },
        "index": {
          "description": "state monad parameterized by the type of the state to carry The return function leaves the state unchanged while uses the final state of the first computation as the initial state of the second",
          "hierarchy": "Control Monad State Lazy",
          "module": "Control.Monad.State.Lazy",
          "name": "State",
          "package": "mtl",
          "partial": "State",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Lazy.html#t:State"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA state transformer monad parameterized by:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003es\u003c/code\u003e - The state.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003em\u003c/code\u003e - The inner monad.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e function leaves the state unchanged, while \u003ccode\u003e\u003e\u003e=\u003c/code\u003e uses\n the final state of the first computation as the initial state of\n the second.\n\u003c/p\u003e",
          "module": "Control.Monad.State.Lazy",
          "name": "StateT",
          "package": "mtl",
          "type": "newtype"
        },
        "index": {
          "description": "state transformer monad parameterized by The state The inner monad The return function leaves the state unchanged while uses the final state of the first computation as the initial state of the second",
          "hierarchy": "Control Monad State Lazy",
          "module": "Control.Monad.State.Lazy",
          "name": "StateT",
          "package": "mtl",
          "partial": "State",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Lazy.html#t:StateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Control.Monad.State.Lazy\",\"Control.Monad.State.Strict\"]",
          "name": "StateT",
          "package": "mtl",
          "signature": "StateT",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Lazy.html#v:StateT\",\"http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Strict.html#v:StateT\"]"
        },
        "index": {
          "hierarchy": "Control Monad State Lazy",
          "module": "Control.Monad.State.Lazy",
          "name": "StateT",
          "package": "mtl",
          "partial": "State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Lazy.html#v:StateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate a state computation with the given initial state\n and return the final value, discarding the final state.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eevalState\u003c/a\u003e\u003c/code\u003e m s = \u003ccode\u003e\u003ca\u003efst\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003erunState\u003c/a\u003e\u003c/code\u003e m s)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "[\"Control.Monad.State.Lazy\",\"Control.Monad.State.Strict\"]",
          "name": "evalState",
          "package": "mtl",
          "signature": "State s a-\u003e s-\u003e a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Lazy.html#v:evalState\",\"http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Strict.html#v:evalState\"]"
        },
        "index": {
          "description": "Evaluate state computation with the given initial state and return the final value discarding the final state evalState fst runState",
          "hierarchy": "Control Monad State Lazy",
          "module": "Control.Monad.State.Lazy",
          "name": "evalState",
          "normalized": "State a b-\u003ea-\u003eb",
          "package": "mtl",
          "partial": "State",
          "signature": "State s a-\u003es-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Lazy.html#v:evalState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate a state computation with the given initial state\n and return the final value, discarding the final state.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eevalStateT\u003c/a\u003e\u003c/code\u003e m s = \u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003efst\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003erunStateT\u003c/a\u003e\u003c/code\u003e m s)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "[\"Control.Monad.State.Lazy\",\"Control.Monad.State.Strict\"]",
          "name": "evalStateT",
          "package": "mtl",
          "signature": "StateT s m a -\u003e s -\u003e m a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Lazy.html#v:evalStateT\",\"http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Strict.html#v:evalStateT\"]"
        },
        "index": {
          "description": "Evaluate state computation with the given initial state and return the final value discarding the final state evalStateT liftM fst runStateT",
          "hierarchy": "Control Monad State Lazy",
          "module": "Control.Monad.State.Lazy",
          "name": "evalStateT",
          "normalized": "StateT a b c-\u003ea-\u003eb c",
          "package": "mtl",
          "partial": "State",
          "signature": "StateT s m a-\u003es-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Lazy.html#v:evalStateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate a state computation with the given initial state\n and return the final state, discarding the final value.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eexecState\u003c/a\u003e\u003c/code\u003e m s = \u003ccode\u003e\u003ca\u003esnd\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003erunState\u003c/a\u003e\u003c/code\u003e m s)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "[\"Control.Monad.State.Lazy\",\"Control.Monad.State.Strict\"]",
          "name": "execState",
          "package": "mtl",
          "signature": "State s a-\u003e s-\u003e s",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Lazy.html#v:execState\",\"http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Strict.html#v:execState\"]"
        },
        "index": {
          "description": "Evaluate state computation with the given initial state and return the final state discarding the final value execState snd runState",
          "hierarchy": "Control Monad State Lazy",
          "module": "Control.Monad.State.Lazy",
          "name": "execState",
          "normalized": "State a b-\u003ea-\u003ea",
          "package": "mtl",
          "partial": "State",
          "signature": "State s a-\u003es-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Lazy.html#v:execState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate a state computation with the given initial state\n and return the final state, discarding the final value.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eexecStateT\u003c/a\u003e\u003c/code\u003e m s = \u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003esnd\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003erunStateT\u003c/a\u003e\u003c/code\u003e m s)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "[\"Control.Monad.State.Lazy\",\"Control.Monad.State.Strict\"]",
          "name": "execStateT",
          "package": "mtl",
          "signature": "StateT s m a -\u003e s -\u003e m s",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Lazy.html#v:execStateT\",\"http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Strict.html#v:execStateT\"]"
        },
        "index": {
          "description": "Evaluate state computation with the given initial state and return the final state discarding the final value execStateT liftM snd runStateT",
          "hierarchy": "Control Monad State Lazy",
          "module": "Control.Monad.State.Lazy",
          "name": "execStateT",
          "normalized": "StateT a b c-\u003ea-\u003eb a",
          "package": "mtl",
          "partial": "State",
          "signature": "StateT s m a-\u003es-\u003em s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Lazy.html#v:execStateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the state from the internals of the monad.\n\u003c/p\u003e",
          "module": "Control.Monad.State.Lazy",
          "name": "get",
          "package": "mtl",
          "signature": "m s",
          "source": "src/Control-Monad-State-Class.html#get",
          "type": "method"
        },
        "index": {
          "description": "Return the state from the internals of the monad",
          "hierarchy": "Control Monad State Lazy",
          "module": "Control.Monad.State.Lazy",
          "name": "get",
          "package": "mtl",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Lazy.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap both the return value and final state of a computation using\n the given function.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunState\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003emapState\u003c/a\u003e\u003c/code\u003e f m) = f . \u003ccode\u003e\u003ca\u003erunState\u003c/a\u003e\u003c/code\u003e m\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "[\"Control.Monad.State.Lazy\",\"Control.Monad.State.Strict\"]",
          "name": "mapState",
          "package": "mtl",
          "signature": "((a, s) -\u003e (b, s)) -\u003e State s a -\u003e State s b",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Lazy.html#v:mapState\",\"http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Strict.html#v:mapState\"]"
        },
        "index": {
          "description": "Map both the return value and final state of computation using the given function runState mapState runState",
          "hierarchy": "Control Monad State Lazy",
          "module": "Control.Monad.State.Lazy",
          "name": "mapState",
          "normalized": "((a,b)-\u003e(c,b))-\u003eState b a-\u003eState b c",
          "package": "mtl",
          "partial": "State",
          "signature": "((a,s)-\u003e(b,s))-\u003eState s a-\u003eState s b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Lazy.html#v:mapState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap both the return value and final state of a computation using\n the given function.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunStateT\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003emapStateT\u003c/a\u003e\u003c/code\u003e f m) = f . \u003ccode\u003e\u003ca\u003erunStateT\u003c/a\u003e\u003c/code\u003e m\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "[\"Control.Monad.State.Lazy\",\"Control.Monad.State.Strict\"]",
          "name": "mapStateT",
          "package": "mtl",
          "signature": "(m (a, s) -\u003e n (b, s)) -\u003e StateT s m a -\u003e StateT s n b",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Lazy.html#v:mapStateT\",\"http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Strict.html#v:mapStateT\"]"
        },
        "index": {
          "description": "Map both the return value and final state of computation using the given function runStateT mapStateT runStateT",
          "hierarchy": "Control Monad State Lazy",
          "module": "Control.Monad.State.Lazy",
          "name": "mapStateT",
          "normalized": "(a(b,c)-\u003ed(e,c))-\u003eStateT c a b-\u003eStateT c d e",
          "package": "mtl",
          "partial": "State",
          "signature": "(m(a,s)-\u003en(b,s))-\u003eStateT s m a-\u003eStateT s n b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Lazy.html#v:mapStateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace the state inside the monad.\n\u003c/p\u003e",
          "module": "Control.Monad.State.Lazy",
          "name": "put",
          "package": "mtl",
          "signature": "s -\u003e m ()",
          "source": "src/Control-Monad-State-Class.html#put",
          "type": "method"
        },
        "index": {
          "description": "Replace the state inside the monad",
          "hierarchy": "Control Monad State Lazy",
          "module": "Control.Monad.State.Lazy",
          "name": "put",
          "normalized": "a-\u003eb()",
          "package": "mtl",
          "signature": "s-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Lazy.html#v:put"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnwrap a state monad computation as a function.\n (The inverse of \u003ccode\u003e\u003ca\u003estate\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e",
          "module": "[\"Control.Monad.State.Lazy\",\"Control.Monad.State.Strict\"]",
          "name": "runState",
          "package": "mtl",
          "signature": "State s a-\u003e s-\u003e (a, s)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Lazy.html#v:runState\",\"http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Strict.html#v:runState\"]"
        },
        "index": {
          "description": "Unwrap state monad computation as function The inverse of state",
          "hierarchy": "Control Monad State Lazy",
          "module": "Control.Monad.State.Lazy",
          "name": "runState",
          "normalized": "State a b-\u003ea-\u003e(b,a)",
          "package": "mtl",
          "partial": "State",
          "signature": "State s a-\u003es-\u003e(a,s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Lazy.html#v:runState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Control.Monad.State.Lazy\",\"Control.Monad.State.Strict\"]",
          "name": "runStateT",
          "package": "mtl",
          "signature": "s -\u003e m (a, s)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Lazy.html#v:runStateT\",\"http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Strict.html#v:runStateT\"]"
        },
        "index": {
          "hierarchy": "Control Monad State Lazy",
          "module": "Control.Monad.State.Lazy",
          "name": "runStateT",
          "normalized": "a-\u003eb(c,a)",
          "package": "mtl",
          "partial": "State",
          "signature": "s-\u003em(a,s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Lazy.html#v:runStateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmbed a simple state action into the monad.\n\u003c/p\u003e",
          "module": "Control.Monad.State.Lazy",
          "name": "state",
          "package": "mtl",
          "signature": "(s -\u003e (a, s)) -\u003e m a",
          "source": "src/Control-Monad-State-Class.html#state",
          "type": "method"
        },
        "index": {
          "description": "Embed simple state action into the monad",
          "hierarchy": "Control Monad State Lazy",
          "module": "Control.Monad.State.Lazy",
          "name": "state",
          "normalized": "(a-\u003e(b,a))-\u003ec b",
          "package": "mtl",
          "signature": "(s-\u003e(a,s))-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Lazy.html#v:state"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ewithState\u003c/a\u003e\u003c/code\u003e f m\u003c/code\u003e executes action \u003ccode\u003em\u003c/code\u003e on a state modified by\n applying \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003ewithState\u003c/a\u003e\u003c/code\u003e f m = \u003ccode\u003e\u003ca\u003emodify\u003c/a\u003e\u003c/code\u003e f \u003e\u003e m\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "[\"Control.Monad.State.Lazy\",\"Control.Monad.State.Strict\"]",
          "name": "withState",
          "package": "mtl",
          "signature": "(s -\u003e s) -\u003e State s a -\u003e State s a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Lazy.html#v:withState\",\"http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Strict.html#v:withState\"]"
        },
        "index": {
          "description": "withState executes action on state modified by applying withState modify",
          "hierarchy": "Control Monad State Lazy",
          "module": "Control.Monad.State.Lazy",
          "name": "withState",
          "normalized": "(a-\u003ea)-\u003eState a b-\u003eState a b",
          "package": "mtl",
          "partial": "State",
          "signature": "(s-\u003es)-\u003eState s a-\u003eState s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Lazy.html#v:withState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ewithStateT\u003c/a\u003e\u003c/code\u003e f m\u003c/code\u003e executes action \u003ccode\u003em\u003c/code\u003e on a state modified by\n applying \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003ewithStateT\u003c/a\u003e\u003c/code\u003e f m = \u003ccode\u003e\u003ca\u003emodify\u003c/a\u003e\u003c/code\u003e f \u003e\u003e m\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "[\"Control.Monad.State.Lazy\",\"Control.Monad.State.Strict\"]",
          "name": "withStateT",
          "package": "mtl",
          "signature": "(s -\u003e s) -\u003e StateT s m a -\u003e StateT s m a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Lazy.html#v:withStateT\",\"http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Strict.html#v:withStateT\"]"
        },
        "index": {
          "description": "withStateT executes action on state modified by applying withStateT modify",
          "hierarchy": "Control Monad State Lazy",
          "module": "Control.Monad.State.Lazy",
          "name": "withStateT",
          "normalized": "(a-\u003ea)-\u003eStateT a b c-\u003eStateT a b c",
          "package": "mtl",
          "partial": "State",
          "signature": "(s-\u003es)-\u003eStateT s m a-\u003eStateT s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Lazy.html#v:withStateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eStrict state monads.\n\u003c/p\u003e\u003cp\u003eThis module is inspired by the paper\n      \u003cem\u003eFunctional Programming with Overloading and Higher-Order Polymorphism\u003c/em\u003e,\n        Mark P Jones (\u003ca\u003ehttp://web.cecs.pdx.edu/~mpj/\u003c/a\u003e)\n          Advanced School of Functional Programming, 1995.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.State.Strict",
          "name": "Strict",
          "package": "mtl",
          "source": "src/Control-Monad-State-Strict.html",
          "type": "module"
        },
        "index": {
          "description": "Strict state monads This module is inspired by the paper Functional Programming with Overloading and Higher-Order Polymorphism Mark Jones http web.cecs.pdx.edu mpj Advanced School of Functional Programming",
          "hierarchy": "Control Monad State Strict",
          "module": "Control.Monad.State.Strict",
          "name": "Strict",
          "package": "mtl",
          "partial": "Strict",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Strict.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMinimal definition is either both of \u003ccode\u003eget\u003c/code\u003e and \u003ccode\u003eput\u003c/code\u003e or just \u003ccode\u003estate\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.State.Strict",
          "name": "MonadState",
          "package": "mtl",
          "source": "src/Control-Monad-State-Class.html#MonadState",
          "type": "class"
        },
        "index": {
          "description": "Minimal definition is either both of get and put or just state",
          "hierarchy": "Control Monad State Strict",
          "module": "Control.Monad.State.Strict",
          "name": "MonadState",
          "package": "mtl",
          "partial": "Monad State",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Strict.html#t:MonadState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA state monad parameterized by the type \u003ccode\u003es\u003c/code\u003e of the state to carry.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e function leaves the state unchanged, while \u003ccode\u003e\u003e\u003e=\u003c/code\u003e uses\n the final state of the first computation as the initial state of\n the second.\n\u003c/p\u003e",
          "module": "Control.Monad.State.Strict",
          "name": "State",
          "package": "mtl",
          "type": "type"
        },
        "index": {
          "description": "state monad parameterized by the type of the state to carry The return function leaves the state unchanged while uses the final state of the first computation as the initial state of the second",
          "hierarchy": "Control Monad State Strict",
          "module": "Control.Monad.State.Strict",
          "name": "State",
          "package": "mtl",
          "partial": "State",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Strict.html#t:State"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA state transformer monad parameterized by:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003es\u003c/code\u003e - The state.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003em\u003c/code\u003e - The inner monad.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e function leaves the state unchanged, while \u003ccode\u003e\u003e\u003e=\u003c/code\u003e uses\n the final state of the first computation as the initial state of\n the second.\n\u003c/p\u003e",
          "module": "Control.Monad.State.Strict",
          "name": "StateT",
          "package": "mtl",
          "type": "newtype"
        },
        "index": {
          "description": "state transformer monad parameterized by The state The inner monad The return function leaves the state unchanged while uses the final state of the first computation as the initial state of the second",
          "hierarchy": "Control Monad State Strict",
          "module": "Control.Monad.State.Strict",
          "name": "StateT",
          "package": "mtl",
          "partial": "State",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Strict.html#t:StateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the state from the internals of the monad.\n\u003c/p\u003e",
          "module": "Control.Monad.State.Strict",
          "name": "get",
          "package": "mtl",
          "signature": "m s",
          "source": "src/Control-Monad-State-Class.html#get",
          "type": "method"
        },
        "index": {
          "description": "Return the state from the internals of the monad",
          "hierarchy": "Control Monad State Strict",
          "module": "Control.Monad.State.Strict",
          "name": "get",
          "package": "mtl",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Strict.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace the state inside the monad.\n\u003c/p\u003e",
          "module": "Control.Monad.State.Strict",
          "name": "put",
          "package": "mtl",
          "signature": "s -\u003e m ()",
          "source": "src/Control-Monad-State-Class.html#put",
          "type": "method"
        },
        "index": {
          "description": "Replace the state inside the monad",
          "hierarchy": "Control Monad State Strict",
          "module": "Control.Monad.State.Strict",
          "name": "put",
          "normalized": "a-\u003eb()",
          "package": "mtl",
          "signature": "s-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Strict.html#v:put"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmbed a simple state action into the monad.\n\u003c/p\u003e",
          "module": "Control.Monad.State.Strict",
          "name": "state",
          "package": "mtl",
          "signature": "(s -\u003e (a, s)) -\u003e m a",
          "source": "src/Control-Monad-State-Class.html#state",
          "type": "method"
        },
        "index": {
          "description": "Embed simple state action into the monad",
          "hierarchy": "Control Monad State Strict",
          "module": "Control.Monad.State.Strict",
          "name": "state",
          "normalized": "(a-\u003e(b,a))-\u003ec b",
          "package": "mtl",
          "signature": "(s-\u003e(a,s))-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Strict.html#v:state"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eState monads.\n\u003c/p\u003e\u003cp\u003eThis module is inspired by the paper\n      \u003cem\u003eFunctional Programming with Overloading and Higher-Order Polymorphism\u003c/em\u003e,\n        Mark P Jones (\u003ca\u003ehttp://web.cecs.pdx.edu/~mpj/\u003c/a\u003e)\n          Advanced School of Functional Programming, 1995.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.State",
          "name": "State",
          "package": "mtl",
          "source": "src/Control-Monad-State.html",
          "type": "module"
        },
        "index": {
          "description": "State monads This module is inspired by the paper Functional Programming with Overloading and Higher-Order Polymorphism Mark Jones http web.cecs.pdx.edu mpj Advanced School of Functional Programming",
          "hierarchy": "Control Monad State",
          "module": "Control.Monad.State",
          "name": "State",
          "package": "mtl",
          "partial": "State",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-State.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eClasses for monad transformers.\n\u003c/p\u003e\u003cp\u003eA monad transformer makes new monad out of an existing monad, such\n that computations of the old monad may be embedded in the new one.\n To construct a monad with a desired set of features, one typically\n starts with a base monad, such as \u003ccode\u003eIdentity\u003c/code\u003e, \u003ccode\u003e[]\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e, and\n applies a sequence of monad transformers.\n\u003c/p\u003e\u003cp\u003eMost monad transformer modules include the special case of applying the\n transformer to \u003ccode\u003eIdentity\u003c/code\u003e.  For example, \u003ccode\u003eState s\u003c/code\u003e is an abbreviation\n for \u003ccode\u003eStateT s Identity\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eEach monad transformer also comes with an operation \u003ccode\u003erun\u003c/code\u003e\u003cem\u003eXXX\u003c/em\u003e to\n unwrap the transformer, exposing a computation of the inner monad.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Trans",
          "name": "Trans",
          "package": "mtl",
          "source": "src/Control-Monad-Trans.html",
          "type": "module"
        },
        "index": {
          "description": "Classes for monad transformers monad transformer makes new monad out of an existing monad such that computations of the old monad may be embedded in the new one To construct monad with desired set of features one typically starts with base monad such as Identity or IO and applies sequence of monad transformers Most monad transformer modules include the special case of applying the transformer to Identity For example State is an abbreviation for StateT Identity Each monad transformer also comes with an operation run XXX to unwrap the transformer exposing computation of the inner monad",
          "hierarchy": "Control Monad Trans",
          "module": "Control.Monad.Trans",
          "name": "Trans",
          "package": "mtl",
          "partial": "Trans",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Trans.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe MonadWriter class.\n\u003c/p\u003e\u003cp\u003eInspired by the paper\n      \u003cem\u003eFunctional Programming with Overloading and Higher-Order Polymorphism\u003c/em\u003e,\n        Mark P Jones (\u003ca\u003ehttp://web.cecs.pdx.edu/~mpj/pubs/springschool.html\u003c/a\u003e)\n          Advanced School of Functional Programming, 1995.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Writer.Class",
          "name": "Class",
          "package": "mtl",
          "source": "src/Control-Monad-Writer-Class.html",
          "type": "module"
        },
        "index": {
          "description": "The MonadWriter class Inspired by the paper Functional Programming with Overloading and Higher-Order Polymorphism Mark Jones http web.cecs.pdx.edu mpj pubs springschool.html Advanced School of Functional Programming",
          "hierarchy": "Control Monad Writer Class",
          "module": "Control.Monad.Writer.Class",
          "name": "Class",
          "package": "mtl",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Writer.Class",
          "name": "MonadWriter",
          "package": "mtl",
          "source": "src/Control-Monad-Writer-Class.html#MonadWriter",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Monad Writer Class",
          "module": "Control.Monad.Writer.Class",
          "name": "MonadWriter",
          "package": "mtl",
          "partial": "Monad Writer",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Class.html#t:MonadWriter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ecensor\u003c/a\u003e\u003c/code\u003e f m\u003c/code\u003e is an action that executes the action \u003ccode\u003em\u003c/code\u003e and\n applies the function \u003ccode\u003ef\u003c/code\u003e to its output, leaving the return value\n unchanged.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003ecensor\u003c/a\u003e\u003c/code\u003e f m = \u003ccode\u003e\u003ca\u003epass\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e (\\x -\u003e (x,f)) m)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "[\"Control.Monad.Writer.Class\",\"Control.Monad.Writer.Lazy\",\"Control.Monad.Writer.Strict\"]",
          "name": "censor",
          "package": "mtl",
          "signature": "(w -\u003e w) -\u003e m a -\u003e m a",
          "source": "src/Control-Monad-Writer-Class.html#censor",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Class.html#v:censor\",\"http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Lazy.html#v:censor\",\"http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Strict.html#v:censor\"]"
        },
        "index": {
          "description": "censor is an action that executes the action and applies the function to its output leaving the return value unchanged censor pass liftM",
          "hierarchy": "Control Monad Writer Class",
          "module": "Control.Monad.Writer.Class",
          "name": "censor",
          "normalized": "(a-\u003ea)-\u003eb c-\u003eb c",
          "package": "mtl",
          "signature": "(w-\u003ew)-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Class.html#v:censor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003elisten\u003c/a\u003e\u003c/code\u003e m\u003c/code\u003e is an action that executes the action \u003ccode\u003em\u003c/code\u003e and adds\n its output to the value of the computation.\n\u003c/p\u003e",
          "module": "Control.Monad.Writer.Class",
          "name": "listen",
          "package": "mtl",
          "signature": "m a -\u003e m (a, w)",
          "source": "src/Control-Monad-Writer-Class.html#listen",
          "type": "method"
        },
        "index": {
          "description": "listen is an action that executes the action and adds its output to the value of the computation",
          "hierarchy": "Control Monad Writer Class",
          "module": "Control.Monad.Writer.Class",
          "name": "listen",
          "normalized": "a b-\u003ea(b,c)",
          "package": "mtl",
          "signature": "m a-\u003em(a,w)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Class.html#v:listen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003elistens\u003c/a\u003e\u003c/code\u003e f m\u003c/code\u003e is an action that executes the action \u003ccode\u003em\u003c/code\u003e and adds\n the result of applying \u003ccode\u003ef\u003c/code\u003e to the output to the value of the computation.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003elistens\u003c/a\u003e\u003c/code\u003e f m = \u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e (id *** f) (\u003ccode\u003e\u003ca\u003elisten\u003c/a\u003e\u003c/code\u003e m)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "[\"Control.Monad.Writer.Class\",\"Control.Monad.Writer.Lazy\",\"Control.Monad.Writer.Strict\"]",
          "name": "listens",
          "package": "mtl",
          "signature": "(w -\u003e b) -\u003e m a -\u003e m (a, b)",
          "source": "src/Control-Monad-Writer-Class.html#listens",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Class.html#v:listens\",\"http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Lazy.html#v:listens\",\"http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Strict.html#v:listens\"]"
        },
        "index": {
          "description": "listens is an action that executes the action and adds the result of applying to the output to the value of the computation listens liftM id listen",
          "hierarchy": "Control Monad Writer Class",
          "module": "Control.Monad.Writer.Class",
          "name": "listens",
          "normalized": "(a-\u003eb)-\u003ec d-\u003ec(d,b)",
          "package": "mtl",
          "signature": "(w-\u003eb)-\u003em a-\u003em(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Class.html#v:listens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003epass\u003c/a\u003e\u003c/code\u003e m\u003c/code\u003e is an action that executes the action \u003ccode\u003em\u003c/code\u003e, which\n returns a value and a function, and returns the value, applying\n the function to the output.\n\u003c/p\u003e",
          "module": "Control.Monad.Writer.Class",
          "name": "pass",
          "package": "mtl",
          "signature": "m (a, w -\u003e w) -\u003e m a",
          "source": "src/Control-Monad-Writer-Class.html#pass",
          "type": "method"
        },
        "index": {
          "description": "pass is an action that executes the action which returns value and function and returns the value applying the function to the output",
          "hierarchy": "Control Monad Writer Class",
          "module": "Control.Monad.Writer.Class",
          "name": "pass",
          "normalized": "a(b,c-\u003ec)-\u003ea b",
          "package": "mtl",
          "signature": "m(a,w-\u003ew)-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Class.html#v:pass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003etell\u003c/a\u003e\u003c/code\u003e w\u003c/code\u003e is an action that produces the output \u003ccode\u003ew\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Writer.Class",
          "name": "tell",
          "package": "mtl",
          "signature": "w -\u003e m ()",
          "source": "src/Control-Monad-Writer-Class.html#tell",
          "type": "method"
        },
        "index": {
          "description": "tell is an action that produces the output",
          "hierarchy": "Control Monad Writer Class",
          "module": "Control.Monad.Writer.Class",
          "name": "tell",
          "normalized": "a-\u003eb()",
          "package": "mtl",
          "signature": "w-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Class.html#v:tell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ewriter\u003c/a\u003e\u003c/code\u003e (a,w)\u003c/code\u003e embeds a simple writer action.\n\u003c/p\u003e",
          "module": "Control.Monad.Writer.Class",
          "name": "writer",
          "package": "mtl",
          "signature": "(a, w) -\u003e m a",
          "source": "src/Control-Monad-Writer-Class.html#writer",
          "type": "method"
        },
        "index": {
          "description": "writer embeds simple writer action",
          "hierarchy": "Control Monad Writer Class",
          "module": "Control.Monad.Writer.Class",
          "name": "writer",
          "normalized": "(a,b)-\u003ec a",
          "package": "mtl",
          "signature": "(a,w)-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Class.html#v:writer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLazy writer monads.\n\u003c/p\u003e\u003cp\u003eInspired by the paper\n      \u003cem\u003eFunctional Programming with Overloading and Higher-Order Polymorphism\u003c/em\u003e,\n        Mark P Jones (\u003ca\u003ehttp://web.cecs.pdx.edu/~mpj/pubs/springschool.html\u003c/a\u003e)\n          Advanced School of Functional Programming, 1995.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Writer.Lazy",
          "name": "Lazy",
          "package": "mtl",
          "source": "src/Control-Monad-Writer-Lazy.html",
          "type": "module"
        },
        "index": {
          "description": "Lazy writer monads Inspired by the paper Functional Programming with Overloading and Higher-Order Polymorphism Mark Jones http web.cecs.pdx.edu mpj pubs springschool.html Advanced School of Functional Programming",
          "hierarchy": "Control Monad Writer Lazy",
          "module": "Control.Monad.Writer.Lazy",
          "name": "Lazy",
          "package": "mtl",
          "partial": "Lazy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Lazy.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Writer.Lazy",
          "name": "MonadWriter",
          "package": "mtl",
          "source": "src/Control-Monad-Writer-Class.html#MonadWriter",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Monad Writer Lazy",
          "module": "Control.Monad.Writer.Lazy",
          "name": "MonadWriter",
          "package": "mtl",
          "partial": "Monad Writer",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Lazy.html#t:MonadWriter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA writer monad parameterized by the type \u003ccode\u003ew\u003c/code\u003e of output to accumulate.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e function produces the output \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e, while \u003ccode\u003e\u003e\u003e=\u003c/code\u003e\n combines the outputs of the subcomputations using \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Writer.Lazy",
          "name": "Writer",
          "package": "mtl",
          "type": "type"
        },
        "index": {
          "description": "writer monad parameterized by the type of output to accumulate The return function produces the output mempty while combines the outputs of the subcomputations using mappend",
          "hierarchy": "Control Monad Writer Lazy",
          "module": "Control.Monad.Writer.Lazy",
          "name": "Writer",
          "package": "mtl",
          "partial": "Writer",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Lazy.html#t:Writer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA writer monad parameterized by:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003ew\u003c/code\u003e - the output to accumulate.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003em\u003c/code\u003e - The inner monad.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e function produces the output \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e, while \u003ccode\u003e\u003e\u003e=\u003c/code\u003e\n combines the outputs of the subcomputations using \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Writer.Lazy",
          "name": "WriterT",
          "package": "mtl",
          "type": "newtype"
        },
        "index": {
          "description": "writer monad parameterized by the output to accumulate The inner monad The return function produces the output mempty while combines the outputs of the subcomputations using mappend",
          "hierarchy": "Control Monad Writer Lazy",
          "module": "Control.Monad.Writer.Lazy",
          "name": "WriterT",
          "package": "mtl",
          "partial": "Writer",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Lazy.html#t:WriterT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Control.Monad.Writer.Lazy\",\"Control.Monad.Writer.Strict\"]",
          "name": "WriterT",
          "package": "mtl",
          "signature": "WriterT",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Lazy.html#v:WriterT\",\"http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Strict.html#v:WriterT\"]"
        },
        "index": {
          "hierarchy": "Control Monad Writer Lazy",
          "module": "Control.Monad.Writer.Lazy",
          "name": "WriterT",
          "package": "mtl",
          "partial": "Writer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Lazy.html#v:WriterT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the output from a writer computation.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eexecWriter\u003c/a\u003e\u003c/code\u003e m = \u003ccode\u003e\u003ca\u003esnd\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003erunWriter\u003c/a\u003e\u003c/code\u003e m)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "[\"Control.Monad.Writer.Lazy\",\"Control.Monad.Writer.Strict\"]",
          "name": "execWriter",
          "package": "mtl",
          "signature": "Writer w a -\u003e w",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Lazy.html#v:execWriter\",\"http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Strict.html#v:execWriter\"]"
        },
        "index": {
          "description": "Extract the output from writer computation execWriter snd runWriter",
          "hierarchy": "Control Monad Writer Lazy",
          "module": "Control.Monad.Writer.Lazy",
          "name": "execWriter",
          "normalized": "Writer a b-\u003ea",
          "package": "mtl",
          "partial": "Writer",
          "signature": "Writer w a-\u003ew",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Lazy.html#v:execWriter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the output from a writer computation.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eexecWriterT\u003c/a\u003e\u003c/code\u003e m = \u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003esnd\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003erunWriterT\u003c/a\u003e\u003c/code\u003e m)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "[\"Control.Monad.Writer.Lazy\",\"Control.Monad.Writer.Strict\"]",
          "name": "execWriterT",
          "package": "mtl",
          "signature": "WriterT w m a -\u003e m w",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Lazy.html#v:execWriterT\",\"http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Strict.html#v:execWriterT\"]"
        },
        "index": {
          "description": "Extract the output from writer computation execWriterT liftM snd runWriterT",
          "hierarchy": "Control Monad Writer Lazy",
          "module": "Control.Monad.Writer.Lazy",
          "name": "execWriterT",
          "normalized": "WriterT a b c-\u003eb a",
          "package": "mtl",
          "partial": "Writer",
          "signature": "WriterT w m a-\u003em w",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Lazy.html#v:execWriterT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003elisten\u003c/a\u003e\u003c/code\u003e m\u003c/code\u003e is an action that executes the action \u003ccode\u003em\u003c/code\u003e and adds\n its output to the value of the computation.\n\u003c/p\u003e",
          "module": "Control.Monad.Writer.Lazy",
          "name": "listen",
          "package": "mtl",
          "signature": "m a -\u003e m (a, w)",
          "source": "src/Control-Monad-Writer-Class.html#listen",
          "type": "method"
        },
        "index": {
          "description": "listen is an action that executes the action and adds its output to the value of the computation",
          "hierarchy": "Control Monad Writer Lazy",
          "module": "Control.Monad.Writer.Lazy",
          "name": "listen",
          "normalized": "a b-\u003ea(b,c)",
          "package": "mtl",
          "signature": "m a-\u003em(a,w)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Lazy.html#v:listen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap both the return value and output of a computation using\n the given function.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunWriter\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003emapWriter\u003c/a\u003e\u003c/code\u003e f m) = f (\u003ccode\u003e\u003ca\u003erunWriter\u003c/a\u003e\u003c/code\u003e m)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "[\"Control.Monad.Writer.Lazy\",\"Control.Monad.Writer.Strict\"]",
          "name": "mapWriter",
          "package": "mtl",
          "signature": "((a, w) -\u003e (b, w')) -\u003e Writer w a -\u003e Writer w' b",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Lazy.html#v:mapWriter\",\"http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Strict.html#v:mapWriter\"]"
        },
        "index": {
          "description": "Map both the return value and output of computation using the given function runWriter mapWriter runWriter",
          "hierarchy": "Control Monad Writer Lazy",
          "module": "Control.Monad.Writer.Lazy",
          "name": "mapWriter",
          "normalized": "((a,b)-\u003e(c,d))-\u003eWriter b a-\u003eWriter d c",
          "package": "mtl",
          "partial": "Writer",
          "signature": "((a,w)-\u003e(b,w'))-\u003eWriter w a-\u003eWriter w' b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Lazy.html#v:mapWriter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap both the return value and output of a computation using\n the given function.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunWriterT\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003emapWriterT\u003c/a\u003e\u003c/code\u003e f m) = f (\u003ccode\u003e\u003ca\u003erunWriterT\u003c/a\u003e\u003c/code\u003e m)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "[\"Control.Monad.Writer.Lazy\",\"Control.Monad.Writer.Strict\"]",
          "name": "mapWriterT",
          "package": "mtl",
          "signature": "(m (a, w) -\u003e n (b, w')) -\u003e WriterT w m a -\u003e WriterT w' n b",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Lazy.html#v:mapWriterT\",\"http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Strict.html#v:mapWriterT\"]"
        },
        "index": {
          "description": "Map both the return value and output of computation using the given function runWriterT mapWriterT runWriterT",
          "hierarchy": "Control Monad Writer Lazy",
          "module": "Control.Monad.Writer.Lazy",
          "name": "mapWriterT",
          "normalized": "(a(b,c)-\u003ed(e,f))-\u003eWriterT c a b-\u003eWriterT f d e",
          "package": "mtl",
          "partial": "Writer",
          "signature": "(m(a,w)-\u003en(b,w'))-\u003eWriterT w m a-\u003eWriterT w' n b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Lazy.html#v:mapWriterT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003epass\u003c/a\u003e\u003c/code\u003e m\u003c/code\u003e is an action that executes the action \u003ccode\u003em\u003c/code\u003e, which\n returns a value and a function, and returns the value, applying\n the function to the output.\n\u003c/p\u003e",
          "module": "Control.Monad.Writer.Lazy",
          "name": "pass",
          "package": "mtl",
          "signature": "m (a, w -\u003e w) -\u003e m a",
          "source": "src/Control-Monad-Writer-Class.html#pass",
          "type": "method"
        },
        "index": {
          "description": "pass is an action that executes the action which returns value and function and returns the value applying the function to the output",
          "hierarchy": "Control Monad Writer Lazy",
          "module": "Control.Monad.Writer.Lazy",
          "name": "pass",
          "normalized": "a(b,c-\u003ec)-\u003ea b",
          "package": "mtl",
          "signature": "m(a,w-\u003ew)-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Lazy.html#v:pass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnwrap a writer computation as a (result, output) pair.\n (The inverse of \u003ccode\u003e\u003ca\u003ewriter\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e",
          "module": "[\"Control.Monad.Writer.Lazy\",\"Control.Monad.Writer.Strict\"]",
          "name": "runWriter",
          "package": "mtl",
          "signature": "Writer w a -\u003e (a, w)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Lazy.html#v:runWriter\",\"http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Strict.html#v:runWriter\"]"
        },
        "index": {
          "description": "Unwrap writer computation as result output pair The inverse of writer",
          "hierarchy": "Control Monad Writer Lazy",
          "module": "Control.Monad.Writer.Lazy",
          "name": "runWriter",
          "normalized": "Writer a b-\u003e(b,a)",
          "package": "mtl",
          "partial": "Writer",
          "signature": "Writer w a-\u003e(a,w)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Lazy.html#v:runWriter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Control.Monad.Writer.Lazy\",\"Control.Monad.Writer.Strict\"]",
          "name": "runWriterT",
          "package": "mtl",
          "signature": "m (a, w)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Lazy.html#v:runWriterT\",\"http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Strict.html#v:runWriterT\"]"
        },
        "index": {
          "hierarchy": "Control Monad Writer Lazy",
          "module": "Control.Monad.Writer.Lazy",
          "name": "runWriterT",
          "normalized": "a(b,c)",
          "package": "mtl",
          "partial": "Writer",
          "signature": "m(a,w)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Lazy.html#v:runWriterT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003etell\u003c/a\u003e\u003c/code\u003e w\u003c/code\u003e is an action that produces the output \u003ccode\u003ew\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Writer.Lazy",
          "name": "tell",
          "package": "mtl",
          "signature": "w -\u003e m ()",
          "source": "src/Control-Monad-Writer-Class.html#tell",
          "type": "method"
        },
        "index": {
          "description": "tell is an action that produces the output",
          "hierarchy": "Control Monad Writer Lazy",
          "module": "Control.Monad.Writer.Lazy",
          "name": "tell",
          "normalized": "a-\u003eb()",
          "package": "mtl",
          "signature": "w-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Lazy.html#v:tell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ewriter\u003c/a\u003e\u003c/code\u003e (a,w)\u003c/code\u003e embeds a simple writer action.\n\u003c/p\u003e",
          "module": "Control.Monad.Writer.Lazy",
          "name": "writer",
          "package": "mtl",
          "signature": "(a, w) -\u003e m a",
          "source": "src/Control-Monad-Writer-Class.html#writer",
          "type": "method"
        },
        "index": {
          "description": "writer embeds simple writer action",
          "hierarchy": "Control Monad Writer Lazy",
          "module": "Control.Monad.Writer.Lazy",
          "name": "writer",
          "normalized": "(a,b)-\u003ec a",
          "package": "mtl",
          "signature": "(a,w)-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Lazy.html#v:writer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eStrict writer monads.\n\u003c/p\u003e\u003cp\u003eInspired by the paper\n      \u003cem\u003eFunctional Programming with Overloading and Higher-Order Polymorphism\u003c/em\u003e,\n        Mark P Jones (\u003ca\u003ehttp://web.cecs.pdx.edu/~mpj/pubs/springschool.html\u003c/a\u003e)\n          Advanced School of Functional Programming, 1995.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Writer.Strict",
          "name": "Strict",
          "package": "mtl",
          "source": "src/Control-Monad-Writer-Strict.html",
          "type": "module"
        },
        "index": {
          "description": "Strict writer monads Inspired by the paper Functional Programming with Overloading and Higher-Order Polymorphism Mark Jones http web.cecs.pdx.edu mpj pubs springschool.html Advanced School of Functional Programming",
          "hierarchy": "Control Monad Writer Strict",
          "module": "Control.Monad.Writer.Strict",
          "name": "Strict",
          "package": "mtl",
          "partial": "Strict",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Strict.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Writer.Strict",
          "name": "MonadWriter",
          "package": "mtl",
          "source": "src/Control-Monad-Writer-Class.html#MonadWriter",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Monad Writer Strict",
          "module": "Control.Monad.Writer.Strict",
          "name": "MonadWriter",
          "package": "mtl",
          "partial": "Monad Writer",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Strict.html#t:MonadWriter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA writer monad parameterized by the type \u003ccode\u003ew\u003c/code\u003e of output to accumulate.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e function produces the output \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e, while \u003ccode\u003e\u003e\u003e=\u003c/code\u003e\n combines the outputs of the subcomputations using \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Writer.Strict",
          "name": "Writer",
          "package": "mtl",
          "type": "type"
        },
        "index": {
          "description": "writer monad parameterized by the type of output to accumulate The return function produces the output mempty while combines the outputs of the subcomputations using mappend",
          "hierarchy": "Control Monad Writer Strict",
          "module": "Control.Monad.Writer.Strict",
          "name": "Writer",
          "package": "mtl",
          "partial": "Writer",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Strict.html#t:Writer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA writer monad parameterized by:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003ew\u003c/code\u003e - the output to accumulate.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003em\u003c/code\u003e - The inner monad.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e function produces the output \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e, while \u003ccode\u003e\u003e\u003e=\u003c/code\u003e\n combines the outputs of the subcomputations using \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Writer.Strict",
          "name": "WriterT",
          "package": "mtl",
          "type": "newtype"
        },
        "index": {
          "description": "writer monad parameterized by the output to accumulate The inner monad The return function produces the output mempty while combines the outputs of the subcomputations using mappend",
          "hierarchy": "Control Monad Writer Strict",
          "module": "Control.Monad.Writer.Strict",
          "name": "WriterT",
          "package": "mtl",
          "partial": "Writer",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Strict.html#t:WriterT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003elisten\u003c/a\u003e\u003c/code\u003e m\u003c/code\u003e is an action that executes the action \u003ccode\u003em\u003c/code\u003e and adds\n its output to the value of the computation.\n\u003c/p\u003e",
          "module": "Control.Monad.Writer.Strict",
          "name": "listen",
          "package": "mtl",
          "signature": "m a -\u003e m (a, w)",
          "source": "src/Control-Monad-Writer-Class.html#listen",
          "type": "method"
        },
        "index": {
          "description": "listen is an action that executes the action and adds its output to the value of the computation",
          "hierarchy": "Control Monad Writer Strict",
          "module": "Control.Monad.Writer.Strict",
          "name": "listen",
          "normalized": "a b-\u003ea(b,c)",
          "package": "mtl",
          "signature": "m a-\u003em(a,w)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Strict.html#v:listen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003epass\u003c/a\u003e\u003c/code\u003e m\u003c/code\u003e is an action that executes the action \u003ccode\u003em\u003c/code\u003e, which\n returns a value and a function, and returns the value, applying\n the function to the output.\n\u003c/p\u003e",
          "module": "Control.Monad.Writer.Strict",
          "name": "pass",
          "package": "mtl",
          "signature": "m (a, w -\u003e w) -\u003e m a",
          "source": "src/Control-Monad-Writer-Class.html#pass",
          "type": "method"
        },
        "index": {
          "description": "pass is an action that executes the action which returns value and function and returns the value applying the function to the output",
          "hierarchy": "Control Monad Writer Strict",
          "module": "Control.Monad.Writer.Strict",
          "name": "pass",
          "normalized": "a(b,c-\u003ec)-\u003ea b",
          "package": "mtl",
          "signature": "m(a,w-\u003ew)-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Strict.html#v:pass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003etell\u003c/a\u003e\u003c/code\u003e w\u003c/code\u003e is an action that produces the output \u003ccode\u003ew\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Writer.Strict",
          "name": "tell",
          "package": "mtl",
          "signature": "w -\u003e m ()",
          "source": "src/Control-Monad-Writer-Class.html#tell",
          "type": "method"
        },
        "index": {
          "description": "tell is an action that produces the output",
          "hierarchy": "Control Monad Writer Strict",
          "module": "Control.Monad.Writer.Strict",
          "name": "tell",
          "normalized": "a-\u003eb()",
          "package": "mtl",
          "signature": "w-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Strict.html#v:tell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ewriter\u003c/a\u003e\u003c/code\u003e (a,w)\u003c/code\u003e embeds a simple writer action.\n\u003c/p\u003e",
          "module": "Control.Monad.Writer.Strict",
          "name": "writer",
          "package": "mtl",
          "signature": "(a, w) -\u003e m a",
          "source": "src/Control-Monad-Writer-Class.html#writer",
          "type": "method"
        },
        "index": {
          "description": "writer embeds simple writer action",
          "hierarchy": "Control Monad Writer Strict",
          "module": "Control.Monad.Writer.Strict",
          "name": "writer",
          "normalized": "(a,b)-\u003ec a",
          "package": "mtl",
          "signature": "(a,w)-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Strict.html#v:writer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe MonadWriter class.\n\u003c/p\u003e\u003cp\u003eInspired by the paper\n      \u003cem\u003eFunctional Programming with Overloading and Higher-Order Polymorphism\u003c/em\u003e,\n        Mark P Jones (\u003ca\u003ehttp://web.cecs.pdx.edu/~mpj/pubs/springschool.html\u003c/a\u003e)\n          Advanced School of Functional Programming, 1995.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Writer",
          "name": "Writer",
          "package": "mtl",
          "source": "src/Control-Monad-Writer.html",
          "type": "module"
        },
        "index": {
          "description": "The MonadWriter class Inspired by the paper Functional Programming with Overloading and Higher-Order Polymorphism Mark Jones http web.cecs.pdx.edu mpj pubs springschool.html Advanced School of Functional Programming",
          "hierarchy": "Control Monad Writer",
          "module": "Control.Monad.Writer",
          "name": "Writer",
          "package": "mtl",
          "partial": "Writer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer.html#"
      }
    }
  ]
]