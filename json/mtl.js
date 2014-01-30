[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Cont-Class.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003eComputation type:\u003c/dt\u003e\u003cdd\u003e Computations which can be interrupted and resumed.\n\u003c/dd\u003e\u003cdt\u003eBinding strategy:\u003c/dt\u003e\u003cdd\u003e Binding a function to a monadic value creates\na new continuation which uses the function as the continuation of the monadic\ncomputation.\n\u003c/dd\u003e\u003cdt\u003eUseful for:\u003c/dt\u003e\u003cdd\u003e Complex control structures, error handling,\nand creating co-routines.\n\u003c/dd\u003e\u003cdt\u003eZero and plus:\u003c/dt\u003e\u003cdd\u003e None.\n\u003c/dd\u003e\u003cdt\u003eExample type:\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003e\u003ccode\u003eCont\u003c/code\u003e r a\u003c/code\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eThe Continuation monad represents computations in continuation-passing style\n(CPS).\nIn continuation-passing style function result is not returned,\nbut instead is passed to another function,\nreceived as a parameter (continuation).\nComputations are built up from sequences\nof nested continuations, terminated by a final continuation (often \u003ccode\u003eid\u003c/code\u003e)\nwhich produces the final result.\nSince continuations are functions which represent the future of a computation,\nmanipulation of the continuation functions can achieve complex manipulations\nof the future of the computation,\nsuch as interrupting a computation in the middle, aborting a portion\nof a computation, restarting a computation, and interleaving execution of\ncomputations.\nThe Continuation monad adapts CPS to the structure of a monad.\n\u003c/p\u003e\u003cp\u003eBefore using the Continuation monad, be sure that you have\na firm understanding of continuation-passing style\nand that continuations represent the best solution to your particular\ndesign problem.\nMany algorithms which require continuations in other languages do not require\nthem in Haskell, due to Haskell's lazy semantics.\nAbuse of the Continuation monad can produce code that is impossible\nto understand and maintain.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Cont.Class",
        "fct-package": "mtl",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Cont-Class.html",
        "fct-type": "module",
        "title": "Class"
      },
      "index": {
        "description": "Computation type Computations which can be interrupted and resumed Binding strategy Binding function to monadic value creates new continuation which uses the function as the continuation of the monadic computation Useful for Complex control structures error handling and creating co-routines Zero and plus None Example type Cont The Continuation monad represents computations in continuation-passing style CPS In continuation-passing style function result is not returned but instead is passed to another function received as parameter continuation Computations are built up from sequences of nested continuations terminated by final continuation often id which produces the final result Since continuations are functions which represent the future of computation manipulation of the continuation functions can achieve complex manipulations of the future of the computation such as interrupting computation in the middle aborting portion of computation restarting computation and interleaving execution of computations The Continuation monad adapts CPS to the structure of monad Before using the Continuation monad be sure that you have firm understanding of continuation-passing style and that continuations represent the best solution to your particular design problem Many algorithms which require continuations in other languages do not require them in Haskell due to Haskell lazy semantics Abuse of the Continuation monad can produce code that is impossible to understand and maintain",
        "hierarchy": "Control Monad Cont Class",
        "module": "Control.Monad.Cont.Class",
        "name": "Class",
        "normalized": "",
        "package": "mtl",
        "partial": "Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Cont-Class.html#t:MonadCont",
      "description": {
        "fct-module": "Control.Monad.Cont.Class",
        "fct-package": "mtl",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Cont-Class.html#MonadCont",
        "fct-type": "class",
        "title": "MonadCont"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Cont Class",
        "module": "Control.Monad.Cont.Class",
        "name": "MonadCont",
        "normalized": "",
        "package": "mtl",
        "partial": "Monad Cont",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Cont-Class.html#v:callCC",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ecallCC\u003c/code\u003e (call-with-current-continuation)\n    calls a function with the current continuation as its argument.\n    Provides an escape continuation mechanism for use with Continuation monads.\n    Escape continuations allow to abort the current computation and return\n    a value immediately.\n    They achieve a similar effect to \u003ccode\u003e\u003ca\u003ethrowError\u003c/a\u003e\u003c/code\u003e\n    and \u003ccode\u003e\u003ca\u003ecatchError\u003c/a\u003e\u003c/code\u003e\n    within an \u003ccode\u003e\u003ca\u003eError\u003c/a\u003e\u003c/code\u003e monad.\n    Advantage of this function over calling \u003ccode\u003ereturn\u003c/code\u003e is that it makes\n    the continuation explicit,\n    allowing more flexibility and better control\n    (see examples in \u003ca\u003eControl.Monad.Cont\u003c/a\u003e).\n\u003c/p\u003e\u003cp\u003eThe standard idiom used with \u003ccode\u003ecallCC\u003c/code\u003e is to provide a lambda-expression\n    to name the continuation. Then calling the named continuation anywhere\n    within its scope will escape from the computation,\n    even if it is many layers deep within nested computations.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Cont.Class",
        "fct-package": "mtl",
        "fct-signature": "((a -\u003e m b) -\u003e m a) -\u003e m a",
        "fct-source": "src/Control-Monad-Cont-Class.html#callCC",
        "fct-type": "method",
        "title": "callCC"
      },
      "index": {
        "description": "callCC call-with-current-continuation calls function with the current continuation as its argument Provides an escape continuation mechanism for use with Continuation monads Escape continuations allow to abort the current computation and return value immediately They achieve similar effect to throwError and catchError within an Error monad Advantage of this function over calling return is that it makes the continuation explicit allowing more flexibility and better control see examples in Control.Monad.Cont The standard idiom used with callCC is to provide lambda-expression to name the continuation Then calling the named continuation anywhere within its scope will escape from the computation even if it is many layers deep within nested computations",
        "hierarchy": "Control Monad Cont Class",
        "module": "Control.Monad.Cont.Class",
        "name": "callCC",
        "normalized": "((a-\u003eb c)-\u003eb a)-\u003eb a",
        "package": "mtl",
        "partial": "CC",
        "signature": "((a-\u003em b)-\u003em a)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Cont.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003eComputation type:\u003c/dt\u003e\u003cdd\u003e Computations which can be interrupted and resumed.\n\u003c/dd\u003e\u003cdt\u003eBinding strategy:\u003c/dt\u003e\u003cdd\u003e Binding a function to a monadic value creates\na new continuation which uses the function as the continuation of the monadic\ncomputation.\n\u003c/dd\u003e\u003cdt\u003eUseful for:\u003c/dt\u003e\u003cdd\u003e Complex control structures, error handling,\nand creating co-routines.\n\u003c/dd\u003e\u003cdt\u003eZero and plus:\u003c/dt\u003e\u003cdd\u003e None.\n\u003c/dd\u003e\u003cdt\u003eExample type:\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003eCont\u003c/a\u003e\u003c/code\u003e r a\u003c/code\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eThe Continuation monad represents computations in continuation-passing style\n(CPS).\nIn continuation-passing style function result is not returned,\nbut instead is passed to another function,\nreceived as a parameter (continuation).\nComputations are built up from sequences\nof nested continuations, terminated by a final continuation (often \u003ccode\u003eid\u003c/code\u003e)\nwhich produces the final result.\nSince continuations are functions which represent the future of a computation,\nmanipulation of the continuation functions can achieve complex manipulations\nof the future of the computation,\nsuch as interrupting a computation in the middle, aborting a portion\nof a computation, restarting a computation, and interleaving execution of\ncomputations.\nThe Continuation monad adapts CPS to the structure of a monad.\n\u003c/p\u003e\u003cp\u003eBefore using the Continuation monad, be sure that you have\na firm understanding of continuation-passing style\nand that continuations represent the best solution to your particular\ndesign problem.\nMany algorithms which require continuations in other languages do not require\nthem in Haskell, due to Haskell's lazy semantics.\nAbuse of the Continuation monad can produce code that is impossible\nto understand and maintain.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Cont",
        "fct-package": "mtl",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Cont.html",
        "fct-type": "module",
        "title": "Cont"
      },
      "index": {
        "description": "Computation type Computations which can be interrupted and resumed Binding strategy Binding function to monadic value creates new continuation which uses the function as the continuation of the monadic computation Useful for Complex control structures error handling and creating co-routines Zero and plus None Example type Cont The Continuation monad represents computations in continuation-passing style CPS In continuation-passing style function result is not returned but instead is passed to another function received as parameter continuation Computations are built up from sequences of nested continuations terminated by final continuation often id which produces the final result Since continuations are functions which represent the future of computation manipulation of the continuation functions can achieve complex manipulations of the future of the computation such as interrupting computation in the middle aborting portion of computation restarting computation and interleaving execution of computations The Continuation monad adapts CPS to the structure of monad Before using the Continuation monad be sure that you have firm understanding of continuation-passing style and that continuations represent the best solution to your particular design problem Many algorithms which require continuations in other languages do not require them in Haskell due to Haskell lazy semantics Abuse of the Continuation monad can produce code that is impossible to understand and maintain",
        "hierarchy": "Control Monad Cont",
        "module": "Control.Monad.Cont",
        "name": "Cont",
        "normalized": "",
        "package": "mtl",
        "partial": "Cont",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Cont.html#t:Cont",
      "description": {
        "fct-descr": "\u003cp\u003eContinuation monad.\n\u003ccode\u003eCont r a\u003c/code\u003e is a CPS computation that produces an intermediate result\nof type \u003ccode\u003ea\u003c/code\u003e within a CPS computation whose final result type is \u003ccode\u003er\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003ereturn\u003c/code\u003e function simply creates a continuation which passes the value on.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003e\u003e=\u003c/code\u003e operator adds the bound function into the continuation chain.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Cont",
        "fct-package": "mtl",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "Cont"
      },
      "index": {
        "description": "Continuation monad Cont is CPS computation that produces an intermediate result of type within CPS computation whose final result type is The return function simply creates continuation which passes the value on The operator adds the bound function into the continuation chain",
        "hierarchy": "Control Monad Cont",
        "module": "Control.Monad.Cont",
        "name": "Cont",
        "normalized": "",
        "package": "mtl",
        "partial": "Cont",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Cont.html#t:ContT",
      "description": {
        "fct-descr": "\u003cp\u003eThe continuation monad transformer.\nCan be used to add continuation handling to other monads.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Cont",
        "fct-package": "mtl",
        "fct-signature": "newtype",
        "fct-type": "newtype",
        "title": "ContT"
      },
      "index": {
        "description": "The continuation monad transformer Can be used to add continuation handling to other monads",
        "hierarchy": "Control Monad Cont",
        "module": "Control.Monad.Cont",
        "name": "ContT",
        "normalized": "",
        "package": "mtl",
        "partial": "Cont",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Cont.html#t:MonadCont",
      "description": {
        "fct-module": "Control.Monad.Cont",
        "fct-package": "mtl",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Cont-Class.html#MonadCont",
        "fct-type": "class",
        "title": "MonadCont"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Cont",
        "module": "Control.Monad.Cont",
        "name": "MonadCont",
        "normalized": "",
        "package": "mtl",
        "partial": "Monad Cont",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Cont.html#v:ContT",
      "description": {
        "fct-module": "Control.Monad.Cont",
        "fct-package": "mtl",
        "fct-signature": "ContT",
        "fct-type": "function",
        "title": "ContT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Cont",
        "module": "Control.Monad.Cont",
        "name": "ContT",
        "normalized": "",
        "package": "mtl",
        "partial": "Cont",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Cont.html#v:callCC",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ecallCC\u003c/code\u003e (call-with-current-continuation)\n    calls a function with the current continuation as its argument.\n    Provides an escape continuation mechanism for use with Continuation monads.\n    Escape continuations allow to abort the current computation and return\n    a value immediately.\n    They achieve a similar effect to \u003ccode\u003e\u003ca\u003ethrowError\u003c/a\u003e\u003c/code\u003e\n    and \u003ccode\u003e\u003ca\u003ecatchError\u003c/a\u003e\u003c/code\u003e\n    within an \u003ccode\u003e\u003ca\u003eError\u003c/a\u003e\u003c/code\u003e monad.\n    Advantage of this function over calling \u003ccode\u003ereturn\u003c/code\u003e is that it makes\n    the continuation explicit,\n    allowing more flexibility and better control\n    (see examples in \u003ca\u003eControl.Monad.Cont\u003c/a\u003e).\n\u003c/p\u003e\u003cp\u003eThe standard idiom used with \u003ccode\u003ecallCC\u003c/code\u003e is to provide a lambda-expression\n    to name the continuation. Then calling the named continuation anywhere\n    within its scope will escape from the computation,\n    even if it is many layers deep within nested computations.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Cont",
        "fct-package": "mtl",
        "fct-signature": "((a -\u003e m b) -\u003e m a) -\u003e m a",
        "fct-source": "src/Control-Monad-Cont-Class.html#callCC",
        "fct-type": "method",
        "title": "callCC"
      },
      "index": {
        "description": "callCC call-with-current-continuation calls function with the current continuation as its argument Provides an escape continuation mechanism for use with Continuation monads Escape continuations allow to abort the current computation and return value immediately They achieve similar effect to throwError and catchError within an Error monad Advantage of this function over calling return is that it makes the continuation explicit allowing more flexibility and better control see examples in Control.Monad.Cont The standard idiom used with callCC is to provide lambda-expression to name the continuation Then calling the named continuation anywhere within its scope will escape from the computation even if it is many layers deep within nested computations",
        "hierarchy": "Control Monad Cont",
        "module": "Control.Monad.Cont",
        "name": "callCC",
        "normalized": "((a-\u003eb c)-\u003eb a)-\u003eb a",
        "package": "mtl",
        "partial": "CC",
        "signature": "((a-\u003em b)-\u003em a)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Cont.html#v:cont",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a continuation-passing computation from a function.\n (The inverse of \u003ccode\u003e\u003ca\u003erunCont\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Cont",
        "fct-package": "mtl",
        "fct-signature": "((a -\u003e r) -\u003e r) -\u003e Cont r a",
        "fct-type": "function",
        "title": "cont"
      },
      "index": {
        "description": "Construct continuation-passing computation from function The inverse of runCont",
        "hierarchy": "Control Monad Cont",
        "module": "Control.Monad.Cont",
        "name": "cont",
        "normalized": "((a-\u003eb)-\u003eb)-\u003eCont b a",
        "package": "mtl",
        "partial": "",
        "signature": "((a-\u003er)-\u003er)-\u003eCont r a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Cont.html#v:mapCont",
      "description": {
        "fct-descr": "\u003cp\u003eApply a function to transform the result of a continuation-passing\n computation.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunCont\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003emapCont\u003c/a\u003e\u003c/code\u003e f m) = f . \u003ccode\u003e\u003ca\u003erunCont\u003c/a\u003e\u003c/code\u003e m\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Cont",
        "fct-package": "mtl",
        "fct-signature": "(r -\u003e r) -\u003e Cont r a -\u003e Cont r a",
        "fct-type": "function",
        "title": "mapCont"
      },
      "index": {
        "description": "Apply function to transform the result of continuation-passing computation runCont mapCont runCont",
        "hierarchy": "Control Monad Cont",
        "module": "Control.Monad.Cont",
        "name": "mapCont",
        "normalized": "(a-\u003ea)-\u003eCont a b-\u003eCont a b",
        "package": "mtl",
        "partial": "Cont",
        "signature": "(r-\u003er)-\u003eCont r a-\u003eCont r a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Cont.html#v:mapContT",
      "description": {
        "fct-descr": "\u003cp\u003eApply a function to transform the result of a continuation-passing\n computation.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunContT\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003emapContT\u003c/a\u003e\u003c/code\u003e f m) = f . \u003ccode\u003e\u003ca\u003erunContT\u003c/a\u003e\u003c/code\u003e m\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Cont",
        "fct-package": "mtl",
        "fct-signature": "(m r -\u003e m r) -\u003e ContT r m a -\u003e ContT r m a",
        "fct-type": "function",
        "title": "mapContT"
      },
      "index": {
        "description": "Apply function to transform the result of continuation-passing computation runContT mapContT runContT",
        "hierarchy": "Control Monad Cont",
        "module": "Control.Monad.Cont",
        "name": "mapContT",
        "normalized": "(a b-\u003ea b)-\u003eContT b a c-\u003eContT b a c",
        "package": "mtl",
        "partial": "Cont",
        "signature": "(m r-\u003em r)-\u003eContT r m a-\u003eContT r m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Cont.html#v:runCont",
      "description": {
        "fct-descr": "\u003cp\u003eRuns a CPS computation, returns its result after applying the final\n continuation to it.\n (The inverse of \u003ccode\u003e\u003ca\u003econt\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Cont",
        "fct-package": "mtl",
        "fct-signature": "Cont r a-\u003e (a -\u003e r)-\u003e r",
        "fct-type": "function",
        "title": "runCont"
      },
      "index": {
        "description": "Runs CPS computation returns its result after applying the final continuation to it The inverse of cont",
        "hierarchy": "Control Monad Cont",
        "module": "Control.Monad.Cont",
        "name": "runCont",
        "normalized": "Cont a b-\u003e(b-\u003ea)-\u003ea",
        "package": "mtl",
        "partial": "Cont",
        "signature": "Cont r a-\u003e(a-\u003er)-\u003er"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Cont.html#v:runContT",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Cont",
        "fct-package": "mtl",
        "fct-signature": "(a -\u003e m r) -\u003e m r",
        "fct-type": "function",
        "title": "runContT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Cont",
        "module": "Control.Monad.Cont",
        "name": "runContT",
        "normalized": "(a-\u003eb c)-\u003eb c",
        "package": "mtl",
        "partial": "Cont",
        "signature": "(a-\u003em r)-\u003em r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Cont.html#v:withCont",
      "description": {
        "fct-descr": "\u003cp\u003eApply a function to transform the continuation passed to a CPS\n computation.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunCont\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003ewithCont\u003c/a\u003e\u003c/code\u003e f m) = \u003ccode\u003e\u003ca\u003erunCont\u003c/a\u003e\u003c/code\u003e m . f\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Cont",
        "fct-package": "mtl",
        "fct-signature": "((b -\u003e r) -\u003e a -\u003e r) -\u003e Cont r a -\u003e Cont r b",
        "fct-type": "function",
        "title": "withCont"
      },
      "index": {
        "description": "Apply function to transform the continuation passed to CPS computation runCont withCont runCont",
        "hierarchy": "Control Monad Cont",
        "module": "Control.Monad.Cont",
        "name": "withCont",
        "normalized": "((a-\u003eb)-\u003ec-\u003eb)-\u003eCont b c-\u003eCont b a",
        "package": "mtl",
        "partial": "Cont",
        "signature": "((b-\u003er)-\u003ea-\u003er)-\u003eCont r a-\u003eCont r b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Cont.html#v:withContT",
      "description": {
        "fct-descr": "\u003cp\u003eApply a function to transform the continuation passed to a CPS\n computation.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunContT\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003ewithContT\u003c/a\u003e\u003c/code\u003e f m) = \u003ccode\u003e\u003ca\u003erunContT\u003c/a\u003e\u003c/code\u003e m . f\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Cont",
        "fct-package": "mtl",
        "fct-signature": "((b -\u003e m r) -\u003e a -\u003e m r) -\u003e ContT r m a -\u003e ContT r m b",
        "fct-type": "function",
        "title": "withContT"
      },
      "index": {
        "description": "Apply function to transform the continuation passed to CPS computation runContT withContT runContT",
        "hierarchy": "Control Monad Cont",
        "module": "Control.Monad.Cont",
        "name": "withContT",
        "normalized": "((a-\u003eb c)-\u003ed-\u003eb c)-\u003eContT c b d-\u003eContT c b a",
        "package": "mtl",
        "partial": "Cont",
        "signature": "((b-\u003em r)-\u003ea-\u003em r)-\u003eContT r m a-\u003eContT r m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Error-Class.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003eComputation type:\u003c/dt\u003e\u003cdd\u003e Computations which may fail or throw exceptions.\n\u003c/dd\u003e\u003cdt\u003eBinding strategy:\u003c/dt\u003e\u003cdd\u003e Failure records information about the cause/location\nof the failure. Failure values bypass the bound function,\nother values are used as inputs to the bound function.\n\u003c/dd\u003e\u003cdt\u003eUseful for:\u003c/dt\u003e\u003cdd\u003e Building computations from sequences of functions that may fail\nor using exception handling to structure error handling.\n\u003c/dd\u003e\u003cdt\u003eZero and plus:\u003c/dt\u003e\u003cdd\u003e Zero is represented by an empty error and the plus operation\nexecutes its second argument if the first fails.\n\u003c/dd\u003e\u003cdt\u003eExample type:\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eString\u003c/code\u003e a\u003c/code\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eThe Error monad (also called the Exception monad).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Error.Class",
        "fct-package": "mtl",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Error-Class.html",
        "fct-type": "module",
        "title": "Class"
      },
      "index": {
        "description": "Computation type Computations which may fail or throw exceptions Binding strategy Failure records information about the cause location of the failure Failure values bypass the bound function other values are used as inputs to the bound function Useful for Building computations from sequences of functions that may fail or using exception handling to structure error handling Zero and plus Zero is represented by an empty error and the plus operation executes its second argument if the first fails Example type Either String The Error monad also called the Exception monad",
        "hierarchy": "Control Monad Error Class",
        "module": "Control.Monad.Error.Class",
        "name": "Class",
        "normalized": "",
        "package": "mtl",
        "partial": "Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Error-Class.html#t:Error",
      "description": {
        "fct-descr": "\u003cp\u003eAn exception to be thrown.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003enoMsg\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003estrMsg\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Error.Class",
        "fct-package": "mtl",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "Error"
      },
      "index": {
        "description": "An exception to be thrown Minimal complete definition noMsg or strMsg",
        "hierarchy": "Control Monad Error Class",
        "module": "Control.Monad.Error.Class",
        "name": "Error",
        "normalized": "",
        "package": "mtl",
        "partial": "Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Error-Class.html#t:MonadError",
      "description": {
        "fct-descr": "\u003cp\u003eThe strategy of combining computations that can throw exceptions\nby bypassing bound functions\nfrom the point an exception is thrown to the point that it is handled.\n\u003c/p\u003e\u003cp\u003eIs parameterized over the type of error information and\nthe monad type constructor.\nIt is common to use \u003ccode\u003e\u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e String\u003c/code\u003e as the monad type constructor\nfor an error monad in which error descriptions take the form of strings.\nIn that case and many other common cases the resulting monad is already defined\nas an instance of the \u003ccode\u003e\u003ca\u003eMonadError\u003c/a\u003e\u003c/code\u003e class.\nYou can also define your own error type and/or use a monad type constructor\nother than \u003ccode\u003e\u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eString\u003c/code\u003e\u003c/code\u003e or \u003ccode\u003e\u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eIOError\u003c/code\u003e\u003c/code\u003e.\nIn these cases you will have to explicitly define instances of the \u003ccode\u003e\u003ca\u003eError\u003c/a\u003e\u003c/code\u003e\nand/or \u003ccode\u003e\u003ca\u003eMonadError\u003c/a\u003e\u003c/code\u003e classes.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Error.Class",
        "fct-package": "mtl",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Error-Class.html#MonadError",
        "fct-type": "class",
        "title": "MonadError"
      },
      "index": {
        "description": "The strategy of combining computations that can throw exceptions by bypassing bound functions from the point an exception is thrown to the point that it is handled Is parameterized over the type of error information and the monad type constructor It is common to use Either String as the monad type constructor for an error monad in which error descriptions take the form of strings In that case and many other common cases the resulting monad is already defined as an instance of the MonadError class You can also define your own error type and or use monad type constructor other than Either String or Either IOError In these cases you will have to explicitly define instances of the Error and or MonadError classes",
        "hierarchy": "Control Monad Error Class",
        "module": "Control.Monad.Error.Class",
        "name": "MonadError",
        "normalized": "",
        "package": "mtl",
        "partial": "Monad Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Error-Class.html#v:catchError",
      "description": {
        "fct-descr": "\u003cp\u003eA handler function to handle previous errors and return to normal execution.\n    A common idiom is:\n\u003c/p\u003e\u003cpre\u003e do { action1; action2; action3 } `catchError` handler\n\u003c/pre\u003e\u003cp\u003ewhere the \u003ccode\u003eaction\u003c/code\u003e functions can call \u003ccode\u003e\u003ca\u003ethrowError\u003c/a\u003e\u003c/code\u003e.\n    Note that \u003ccode\u003ehandler\u003c/code\u003e and the do-block must have the same return type.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Error.Class",
        "fct-package": "mtl",
        "fct-signature": "m a -\u003e (e -\u003e m a) -\u003e m a",
        "fct-source": "src/Control-Monad-Error-Class.html#catchError",
        "fct-type": "method",
        "title": "catchError"
      },
      "index": {
        "description": "handler function to handle previous errors and return to normal execution common idiom is do action1 action2 action3 catchError handler where the action functions can call throwError Note that handler and the do-block must have the same return type",
        "hierarchy": "Control Monad Error Class",
        "module": "Control.Monad.Error.Class",
        "name": "catchError",
        "normalized": "a b-\u003e(c-\u003ea b)-\u003ea b",
        "package": "mtl",
        "partial": "Error",
        "signature": "m a-\u003e(e-\u003em a)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Error-Class.html#v:noMsg",
      "description": {
        "fct-descr": "\u003cp\u003eCreates an exception without a message.\n The default implementation is \u003ccode\u003e\u003ccode\u003e\u003ca\u003estrMsg\u003c/a\u003e\u003c/code\u003e \"\"\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Error.Class",
        "fct-package": "mtl",
        "fct-signature": "a",
        "fct-type": "method",
        "title": "noMsg"
      },
      "index": {
        "description": "Creates an exception without message The default implementation is strMsg",
        "hierarchy": "Control Monad Error Class",
        "module": "Control.Monad.Error.Class",
        "name": "noMsg",
        "normalized": "",
        "package": "mtl",
        "partial": "Msg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Error-Class.html#v:strMsg",
      "description": {
        "fct-descr": "\u003cp\u003eCreates an exception with a message.\n The default implementation of \u003ccode\u003e\u003ccode\u003e\u003ca\u003estrMsg\u003c/a\u003e\u003c/code\u003e s\u003c/code\u003e is \u003ccode\u003e\u003ca\u003enoMsg\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Error.Class",
        "fct-package": "mtl",
        "fct-signature": "String -\u003e a",
        "fct-type": "method",
        "title": "strMsg"
      },
      "index": {
        "description": "Creates an exception with message The default implementation of strMsg is noMsg",
        "hierarchy": "Control Monad Error Class",
        "module": "Control.Monad.Error.Class",
        "name": "strMsg",
        "normalized": "String-\u003ea",
        "package": "mtl",
        "partial": "Msg",
        "signature": "String-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Error-Class.html#v:throwError",
      "description": {
        "fct-descr": "\u003cp\u003eIs used within a monadic computation to begin exception processing.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Error.Class",
        "fct-package": "mtl",
        "fct-signature": "e -\u003e m a",
        "fct-source": "src/Control-Monad-Error-Class.html#throwError",
        "fct-type": "method",
        "title": "throwError"
      },
      "index": {
        "description": "Is used within monadic computation to begin exception processing",
        "hierarchy": "Control Monad Error Class",
        "module": "Control.Monad.Error.Class",
        "name": "throwError",
        "normalized": "a-\u003eb c",
        "package": "mtl",
        "partial": "Error",
        "signature": "e-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Error.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003eComputation type:\u003c/dt\u003e\u003cdd\u003e Computations which may fail or throw exceptions.\n\u003c/dd\u003e\u003cdt\u003eBinding strategy:\u003c/dt\u003e\u003cdd\u003e Failure records information about the cause/location\nof the failure. Failure values bypass the bound function,\nother values are used as inputs to the bound function.\n\u003c/dd\u003e\u003cdt\u003eUseful for:\u003c/dt\u003e\u003cdd\u003e Building computations from sequences of functions that may fail\nor using exception handling to structure error handling.\n\u003c/dd\u003e\u003cdt\u003eZero and plus:\u003c/dt\u003e\u003cdd\u003e Zero is represented by an empty error and the plus operation\nexecutes its second argument if the first fails.\n\u003c/dd\u003e\u003cdt\u003eExample type:\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e String a\u003c/code\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eThe Error monad (also called the Exception monad).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Error",
        "fct-package": "mtl",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Error.html",
        "fct-type": "module",
        "title": "Error"
      },
      "index": {
        "description": "Computation type Computations which may fail or throw exceptions Binding strategy Failure records information about the cause location of the failure Failure values bypass the bound function other values are used as inputs to the bound function Useful for Building computations from sequences of functions that may fail or using exception handling to structure error handling Zero and plus Zero is represented by an empty error and the plus operation executes its second argument if the first fails Example type Either String The Error monad also called the Exception monad",
        "hierarchy": "Control Monad Error",
        "module": "Control.Monad.Error",
        "name": "Error",
        "normalized": "",
        "package": "mtl",
        "partial": "Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Error.html#t:Error",
      "description": {
        "fct-descr": "\u003cp\u003eAn exception to be thrown.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003enoMsg\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003estrMsg\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Error",
        "fct-package": "mtl",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "Error"
      },
      "index": {
        "description": "An exception to be thrown Minimal complete definition noMsg or strMsg",
        "hierarchy": "Control Monad Error",
        "module": "Control.Monad.Error",
        "name": "Error",
        "normalized": "",
        "package": "mtl",
        "partial": "Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Error.html#t:ErrorT",
      "description": {
        "fct-descr": "\u003cp\u003eThe error monad transformer. It can be used to add error handling\n to other monads.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003eErrorT\u003c/code\u003e Monad structure is parameterized over two things:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e e - The error type.\n\u003c/li\u003e\u003cli\u003e m - The inner monad.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e function yields a successful computation, while \u003ccode\u003e\u003e\u003e=\u003c/code\u003e\n sequences two subcomputations, failing on the first error.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Error",
        "fct-package": "mtl",
        "fct-signature": "newtype",
        "fct-type": "newtype",
        "title": "ErrorT"
      },
      "index": {
        "description": "The error monad transformer It can be used to add error handling to other monads The ErrorT Monad structure is parameterized over two things The error type The inner monad The return function yields successful computation while sequences two subcomputations failing on the first error",
        "hierarchy": "Control Monad Error",
        "module": "Control.Monad.Error",
        "name": "ErrorT",
        "normalized": "",
        "package": "mtl",
        "partial": "Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Error.html#t:MonadError",
      "description": {
        "fct-descr": "\u003cp\u003eThe strategy of combining computations that can throw exceptions\nby bypassing bound functions\nfrom the point an exception is thrown to the point that it is handled.\n\u003c/p\u003e\u003cp\u003eIs parameterized over the type of error information and\nthe monad type constructor.\nIt is common to use \u003ccode\u003e\u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e String\u003c/code\u003e as the monad type constructor\nfor an error monad in which error descriptions take the form of strings.\nIn that case and many other common cases the resulting monad is already defined\nas an instance of the \u003ccode\u003e\u003ca\u003eMonadError\u003c/a\u003e\u003c/code\u003e class.\nYou can also define your own error type and/or use a monad type constructor\nother than \u003ccode\u003e\u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eString\u003c/code\u003e\u003c/code\u003e or \u003ccode\u003e\u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eIOError\u003c/code\u003e\u003c/code\u003e.\nIn these cases you will have to explicitly define instances of the \u003ccode\u003e\u003ca\u003eError\u003c/a\u003e\u003c/code\u003e\nand/or \u003ccode\u003e\u003ca\u003eMonadError\u003c/a\u003e\u003c/code\u003e classes.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Error",
        "fct-package": "mtl",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Error-Class.html#MonadError",
        "fct-type": "class",
        "title": "MonadError"
      },
      "index": {
        "description": "The strategy of combining computations that can throw exceptions by bypassing bound functions from the point an exception is thrown to the point that it is handled Is parameterized over the type of error information and the monad type constructor It is common to use Either String as the monad type constructor for an error monad in which error descriptions take the form of strings In that case and many other common cases the resulting monad is already defined as an instance of the MonadError class You can also define your own error type and or use monad type constructor other than Either String or Either IOError In these cases you will have to explicitly define instances of the Error and or MonadError classes",
        "hierarchy": "Control Monad Error",
        "module": "Control.Monad.Error",
        "name": "MonadError",
        "normalized": "",
        "package": "mtl",
        "partial": "Monad Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Error.html#v:ErrorT",
      "description": {
        "fct-module": "Control.Monad.Error",
        "fct-package": "mtl",
        "fct-signature": "ErrorT",
        "fct-type": "function",
        "title": "ErrorT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Error",
        "module": "Control.Monad.Error",
        "name": "ErrorT",
        "normalized": "",
        "package": "mtl",
        "partial": "Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Error.html#v:catchError",
      "description": {
        "fct-descr": "\u003cp\u003eA handler function to handle previous errors and return to normal execution.\n    A common idiom is:\n\u003c/p\u003e\u003cpre\u003e do { action1; action2; action3 } `catchError` handler\n\u003c/pre\u003e\u003cp\u003ewhere the \u003ccode\u003eaction\u003c/code\u003e functions can call \u003ccode\u003e\u003ca\u003ethrowError\u003c/a\u003e\u003c/code\u003e.\n    Note that \u003ccode\u003ehandler\u003c/code\u003e and the do-block must have the same return type.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Error",
        "fct-package": "mtl",
        "fct-signature": "m a -\u003e (e -\u003e m a) -\u003e m a",
        "fct-source": "src/Control-Monad-Error-Class.html#catchError",
        "fct-type": "method",
        "title": "catchError"
      },
      "index": {
        "description": "handler function to handle previous errors and return to normal execution common idiom is do action1 action2 action3 catchError handler where the action functions can call throwError Note that handler and the do-block must have the same return type",
        "hierarchy": "Control Monad Error",
        "module": "Control.Monad.Error",
        "name": "catchError",
        "normalized": "a b-\u003e(c-\u003ea b)-\u003ea b",
        "package": "mtl",
        "partial": "Error",
        "signature": "m a-\u003e(e-\u003em a)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Error.html#v:mapErrorT",
      "description": {
        "fct-descr": "\u003cp\u003eMap the unwrapped computation using the given function.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunErrorT\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003emapErrorT\u003c/a\u003e\u003c/code\u003e f m) = f (\u003ccode\u003e\u003ca\u003erunErrorT\u003c/a\u003e\u003c/code\u003e m)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Error",
        "fct-package": "mtl",
        "fct-signature": "(m (Either e a) -\u003e n (Either e' b)) -\u003e ErrorT e m a -\u003e ErrorT e' n b",
        "fct-type": "function",
        "title": "mapErrorT"
      },
      "index": {
        "description": "Map the unwrapped computation using the given function runErrorT mapErrorT runErrorT",
        "hierarchy": "Control Monad Error",
        "module": "Control.Monad.Error",
        "name": "mapErrorT",
        "normalized": "(a(Either b c)-\u003ed(Either e f))-\u003eErrorT b a c-\u003eErrorT e d f",
        "package": "mtl",
        "partial": "Error",
        "signature": "(m(Either e a)-\u003en(Either e' b))-\u003eErrorT e m a-\u003eErrorT e' n b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Error.html#v:noMsg",
      "description": {
        "fct-descr": "\u003cp\u003eCreates an exception without a message.\n The default implementation is \u003ccode\u003e\u003ccode\u003e\u003ca\u003estrMsg\u003c/a\u003e\u003c/code\u003e \"\"\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Error",
        "fct-package": "mtl",
        "fct-signature": "a",
        "fct-type": "method",
        "title": "noMsg"
      },
      "index": {
        "description": "Creates an exception without message The default implementation is strMsg",
        "hierarchy": "Control Monad Error",
        "module": "Control.Monad.Error",
        "name": "noMsg",
        "normalized": "",
        "package": "mtl",
        "partial": "Msg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Error.html#v:runErrorT",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Error",
        "fct-package": "mtl",
        "fct-signature": "m (Either e a)",
        "fct-type": "function",
        "title": "runErrorT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Error",
        "module": "Control.Monad.Error",
        "name": "runErrorT",
        "normalized": "",
        "package": "mtl",
        "partial": "Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Error.html#v:strMsg",
      "description": {
        "fct-descr": "\u003cp\u003eCreates an exception with a message.\n The default implementation of \u003ccode\u003e\u003ccode\u003e\u003ca\u003estrMsg\u003c/a\u003e\u003c/code\u003e s\u003c/code\u003e is \u003ccode\u003e\u003ca\u003enoMsg\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Error",
        "fct-package": "mtl",
        "fct-signature": "String -\u003e a",
        "fct-type": "method",
        "title": "strMsg"
      },
      "index": {
        "description": "Creates an exception with message The default implementation of strMsg is noMsg",
        "hierarchy": "Control Monad Error",
        "module": "Control.Monad.Error",
        "name": "strMsg",
        "normalized": "String-\u003ea",
        "package": "mtl",
        "partial": "Msg",
        "signature": "String-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Error.html#v:throwError",
      "description": {
        "fct-descr": "\u003cp\u003eIs used within a monadic computation to begin exception processing.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Error",
        "fct-package": "mtl",
        "fct-signature": "e -\u003e m a",
        "fct-source": "src/Control-Monad-Error-Class.html#throwError",
        "fct-type": "method",
        "title": "throwError"
      },
      "index": {
        "description": "Is used within monadic computation to begin exception processing",
        "hierarchy": "Control Monad Error",
        "module": "Control.Monad.Error",
        "name": "throwError",
        "normalized": "a-\u003eb c",
        "package": "mtl",
        "partial": "Error",
        "signature": "e-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Identity.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003eComputation type:\u003c/dt\u003e\u003cdd\u003e Simple function application.\n\u003c/dd\u003e\u003cdt\u003eBinding strategy:\u003c/dt\u003e\u003cdd\u003e The bound function is applied to the input value.\n\u003ccode\u003e\u003ccode\u003e\u003ca\u003eIdentity\u003c/a\u003e\u003c/code\u003e x \u003e\u003e= f == \u003ccode\u003e\u003ca\u003eIdentity\u003c/a\u003e\u003c/code\u003e (f x)\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003eUseful for:\u003c/dt\u003e\u003cdd\u003e Monads can be derived from monad transformers applied to the\n\u003ccode\u003e\u003ca\u003eIdentity\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/dd\u003e\u003cdt\u003eZero and plus:\u003c/dt\u003e\u003cdd\u003e None.\n\u003c/dd\u003e\u003cdt\u003eExample type:\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIdentity\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eThe \u003ccode\u003eIdentity\u003c/code\u003e monad is a monad that does not embody any computational strategy.\nIt simply applies the bound function to its input without any modification.\nComputationally, there is no reason to use the \u003ccode\u003eIdentity\u003c/code\u003e monad\ninstead of the much simpler act of simply applying functions to their arguments.\nThe purpose of the \u003ccode\u003eIdentity\u003c/code\u003e monad is its fundamental role in the theory\nof monad transformers.\nAny monad transformer applied to the \u003ccode\u003eIdentity\u003c/code\u003e monad yields a non-transformer\nversion of that monad.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Identity",
        "fct-package": "mtl",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Identity.html",
        "fct-type": "module",
        "title": "Identity"
      },
      "index": {
        "description": "Computation type Simple function application Binding strategy The bound function is applied to the input value Identity Identity Useful for Monads can be derived from monad transformers applied to the Identity monad Zero and plus None Example type Identity The Identity monad is monad that does not embody any computational strategy It simply applies the bound function to its input without any modification Computationally there is no reason to use the Identity monad instead of the much simpler act of simply applying functions to their arguments The purpose of the Identity monad is its fundamental role in the theory of monad transformers Any monad transformer applied to the Identity monad yields non-transformer version of that monad",
        "hierarchy": "Control Monad Identity",
        "module": "Control.Monad.Identity",
        "name": "Identity",
        "normalized": "",
        "package": "mtl",
        "partial": "Identity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-List.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe List monad.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.List",
        "fct-package": "mtl",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-List.html",
        "fct-type": "module",
        "title": "List"
      },
      "index": {
        "description": "The List monad",
        "hierarchy": "Control Monad List",
        "module": "Control.Monad.List",
        "name": "List",
        "normalized": "",
        "package": "mtl",
        "partial": "List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-List.html#t:ListT",
      "description": {
        "fct-descr": "\u003cp\u003eParameterizable list monad, with an inner monad.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote:\u003c/em\u003e this does not yield a monad unless the argument monad is commutative.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.List",
        "fct-package": "mtl",
        "fct-signature": "newtype",
        "fct-type": "newtype",
        "title": "ListT"
      },
      "index": {
        "description": "Parameterizable list monad with an inner monad Note this does not yield monad unless the argument monad is commutative",
        "hierarchy": "Control Monad List",
        "module": "Control.Monad.List",
        "name": "ListT",
        "normalized": "",
        "package": "mtl",
        "partial": "List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-List.html#v:ListT",
      "description": {
        "fct-module": "Control.Monad.List",
        "fct-package": "mtl",
        "fct-signature": "ListT",
        "fct-type": "function",
        "title": "ListT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad List",
        "module": "Control.Monad.List",
        "name": "ListT",
        "normalized": "",
        "package": "mtl",
        "partial": "List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-List.html#v:mapListT",
      "description": {
        "fct-descr": "\u003cp\u003eMap between \u003ccode\u003e\u003ca\u003eListT\u003c/a\u003e\u003c/code\u003e computations.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunListT\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003emapListT\u003c/a\u003e\u003c/code\u003e f m) = f (\u003ccode\u003e\u003ca\u003erunListT\u003c/a\u003e\u003c/code\u003e m)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.List",
        "fct-package": "mtl",
        "fct-signature": "(m [a] -\u003e n [b]) -\u003e ListT m a -\u003e ListT n b",
        "fct-type": "function",
        "title": "mapListT"
      },
      "index": {
        "description": "Map between ListT computations runListT mapListT runListT",
        "hierarchy": "Control Monad List",
        "module": "Control.Monad.List",
        "name": "mapListT",
        "normalized": "(a[b]-\u003ec[d])-\u003eListT a b-\u003eListT c d",
        "package": "mtl",
        "partial": "List",
        "signature": "(m[a]-\u003en[b])-\u003eListT m a-\u003eListT n b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-List.html#v:runListT",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.List",
        "fct-package": "mtl",
        "fct-signature": "m [a]",
        "fct-type": "function",
        "title": "runListT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad List",
        "module": "Control.Monad.List",
        "name": "runListT",
        "normalized": "a[b]",
        "package": "mtl",
        "partial": "List",
        "signature": "m[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-RWS-Class.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDeclaration of the MonadRWS class.\n\u003c/p\u003e\u003cp\u003eInspired by the paper\n      \u003cem\u003eFunctional Programming with Overloading and Higher-Order Polymorphism\u003c/em\u003e,\n        Mark P Jones (\u003ca\u003ehttp://web.cecs.pdx.edu/~mpj/\u003c/a\u003e)\n          Advanced School of Functional Programming, 1995.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.RWS.Class",
        "fct-package": "mtl",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-RWS-Class.html",
        "fct-type": "module",
        "title": "Class"
      },
      "index": {
        "description": "Declaration of the MonadRWS class Inspired by the paper Functional Programming with Overloading and Higher-Order Polymorphism Mark Jones http web.cecs.pdx.edu mpj Advanced School of Functional Programming",
        "hierarchy": "Control Monad RWS Class",
        "module": "Control.Monad.RWS.Class",
        "name": "Class",
        "normalized": "",
        "package": "mtl",
        "partial": "Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-RWS-Class.html#t:MonadRWS",
      "description": {
        "fct-module": "Control.Monad.RWS.Class",
        "fct-package": "mtl",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-RWS-Class.html#MonadRWS",
        "fct-type": "class",
        "title": "MonadRWS"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad RWS Class",
        "module": "Control.Monad.RWS.Class",
        "name": "MonadRWS",
        "normalized": "",
        "package": "mtl",
        "partial": "Monad RWS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-RWS-Lazy.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLazy RWS monad.\n\u003c/p\u003e\u003cp\u003eInspired by the paper\n      \u003cem\u003eFunctional Programming with Overloading and Higher-Order Polymorphism\u003c/em\u003e,\n        Mark P Jones (\u003ca\u003ehttp://web.cecs.pdx.edu/~mpj/\u003c/a\u003e)\n          Advanced School of Functional Programming, 1995.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.RWS.Lazy",
        "fct-package": "mtl",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-RWS-Lazy.html",
        "fct-type": "module",
        "title": "Lazy"
      },
      "index": {
        "description": "Lazy RWS monad Inspired by the paper Functional Programming with Overloading and Higher-Order Polymorphism Mark Jones http web.cecs.pdx.edu mpj Advanced School of Functional Programming",
        "hierarchy": "Control Monad RWS Lazy",
        "module": "Control.Monad.RWS.Lazy",
        "name": "Lazy",
        "normalized": "",
        "package": "mtl",
        "partial": "Lazy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-RWS-Lazy.html#t:RWS",
      "description": {
        "fct-descr": "\u003cp\u003eA monad containing an environment of type \u003ccode\u003er\u003c/code\u003e, output of type \u003ccode\u003ew\u003c/code\u003e\n and an updatable state of type \u003ccode\u003es\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.RWS.Lazy",
        "fct-package": "mtl",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "RWS"
      },
      "index": {
        "description": "monad containing an environment of type output of type and an updatable state of type",
        "hierarchy": "Control Monad RWS Lazy",
        "module": "Control.Monad.RWS.Lazy",
        "name": "RWS",
        "normalized": "",
        "package": "mtl",
        "partial": "RWS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-RWS-Lazy.html#t:RWST",
      "description": {
        "fct-descr": "\u003cp\u003eA monad transformer adding reading an environment of type \u003ccode\u003er\u003c/code\u003e,\n collecting an output of type \u003ccode\u003ew\u003c/code\u003e and updating a state of type \u003ccode\u003es\u003c/code\u003e\n to an inner monad \u003ccode\u003em\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.RWS.Lazy",
        "fct-package": "mtl",
        "fct-signature": "newtype",
        "fct-type": "newtype",
        "title": "RWST"
      },
      "index": {
        "description": "monad transformer adding reading an environment of type collecting an output of type and updating state of type to an inner monad",
        "hierarchy": "Control Monad RWS Lazy",
        "module": "Control.Monad.RWS.Lazy",
        "name": "RWST",
        "normalized": "",
        "package": "mtl",
        "partial": "RWST",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-RWS-Lazy.html#v:RWST",
      "description": {
        "fct-module": "Control.Monad.RWS.Lazy",
        "fct-package": "mtl",
        "fct-signature": "RWST",
        "fct-type": "function",
        "title": "RWST"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad RWS Lazy",
        "module": "Control.Monad.RWS.Lazy",
        "name": "RWST",
        "normalized": "",
        "package": "mtl",
        "partial": "RWST",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-RWS-Lazy.html#v:evalRWS",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate a computation with the given initial state and environment,\n returning the final value and output, discarding the final state.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.RWS.Lazy",
        "fct-package": "mtl",
        "fct-signature": "RWS r w s a-\u003e r-\u003e s-\u003e (a, w)",
        "fct-type": "function",
        "title": "evalRWS"
      },
      "index": {
        "description": "Evaluate computation with the given initial state and environment returning the final value and output discarding the final state",
        "hierarchy": "Control Monad RWS Lazy",
        "module": "Control.Monad.RWS.Lazy",
        "name": "evalRWS",
        "normalized": "RWS a b c d-\u003ea-\u003ec-\u003e(d,b)",
        "package": "mtl",
        "partial": "RWS",
        "signature": "RWS r w s a-\u003er-\u003es-\u003e(a,w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-RWS-Lazy.html#v:evalRWST",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate a computation with the given initial state and environment,\n returning the final value and output, discarding the final state.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.RWS.Lazy",
        "fct-package": "mtl",
        "fct-signature": "RWST r w s m a-\u003e r-\u003e s-\u003e m (a, w)",
        "fct-type": "function",
        "title": "evalRWST"
      },
      "index": {
        "description": "Evaluate computation with the given initial state and environment returning the final value and output discarding the final state",
        "hierarchy": "Control Monad RWS Lazy",
        "module": "Control.Monad.RWS.Lazy",
        "name": "evalRWST",
        "normalized": "RWST a b c d e-\u003ea-\u003ec-\u003ed(e,b)",
        "package": "mtl",
        "partial": "RWST",
        "signature": "RWST r w s m a-\u003er-\u003es-\u003em(a,w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-RWS-Lazy.html#v:execRWS",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate a computation with the given initial state and environment,\n returning the final state and output, discarding the final value.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.RWS.Lazy",
        "fct-package": "mtl",
        "fct-signature": "RWS r w s a-\u003e r-\u003e s-\u003e (s, w)",
        "fct-type": "function",
        "title": "execRWS"
      },
      "index": {
        "description": "Evaluate computation with the given initial state and environment returning the final state and output discarding the final value",
        "hierarchy": "Control Monad RWS Lazy",
        "module": "Control.Monad.RWS.Lazy",
        "name": "execRWS",
        "normalized": "RWS a b c d-\u003ea-\u003ec-\u003e(c,b)",
        "package": "mtl",
        "partial": "RWS",
        "signature": "RWS r w s a-\u003er-\u003es-\u003e(s,w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-RWS-Lazy.html#v:execRWST",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate a computation with the given initial state and environment,\n returning the final state and output, discarding the final value.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.RWS.Lazy",
        "fct-package": "mtl",
        "fct-signature": "RWST r w s m a-\u003e r-\u003e s-\u003e m (s, w)",
        "fct-type": "function",
        "title": "execRWST"
      },
      "index": {
        "description": "Evaluate computation with the given initial state and environment returning the final state and output discarding the final value",
        "hierarchy": "Control Monad RWS Lazy",
        "module": "Control.Monad.RWS.Lazy",
        "name": "execRWST",
        "normalized": "RWST a b c d e-\u003ea-\u003ec-\u003ed(c,b)",
        "package": "mtl",
        "partial": "RWST",
        "signature": "RWST r w s m a-\u003er-\u003es-\u003em(s,w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-RWS-Lazy.html#v:mapRWS",
      "description": {
        "fct-descr": "\u003cp\u003eMap the return value, final state and output of a computation using\n the given function.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunRWS\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003emapRWS\u003c/a\u003e\u003c/code\u003e f m) r s = f (\u003ccode\u003e\u003ca\u003erunRWS\u003c/a\u003e\u003c/code\u003e m r s)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.RWS.Lazy",
        "fct-package": "mtl",
        "fct-signature": "((a, s, w) -\u003e (b, s, w')) -\u003e RWS r w s a -\u003e RWS r w' s b",
        "fct-type": "function",
        "title": "mapRWS"
      },
      "index": {
        "description": "Map the return value final state and output of computation using the given function runRWS mapRWS runRWS",
        "hierarchy": "Control Monad RWS Lazy",
        "module": "Control.Monad.RWS.Lazy",
        "name": "mapRWS",
        "normalized": "((a,b,c)-\u003e(d,b,e))-\u003eRWS f c b a-\u003eRWS f e b d",
        "package": "mtl",
        "partial": "RWS",
        "signature": "((a,s,w)-\u003e(b,s,w'))-\u003eRWS r w s a-\u003eRWS r w' s b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-RWS-Lazy.html#v:mapRWST",
      "description": {
        "fct-descr": "\u003cp\u003eMap the inner computation using the given function.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunRWST\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003emapRWST\u003c/a\u003e\u003c/code\u003e f m) r s = f (\u003ccode\u003e\u003ca\u003erunRWST\u003c/a\u003e\u003c/code\u003e m r s)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.RWS.Lazy",
        "fct-package": "mtl",
        "fct-signature": "(m (a, s, w) -\u003e n (b, s, w')) -\u003e RWST r w s m a -\u003e RWST r w' s n b",
        "fct-type": "function",
        "title": "mapRWST"
      },
      "index": {
        "description": "Map the inner computation using the given function runRWST mapRWST runRWST",
        "hierarchy": "Control Monad RWS Lazy",
        "module": "Control.Monad.RWS.Lazy",
        "name": "mapRWST",
        "normalized": "(a(b,c,d)-\u003ee(f,c,g))-\u003eRWST h d c a b-\u003eRWST h g c e f",
        "package": "mtl",
        "partial": "RWST",
        "signature": "(m(a,s,w)-\u003en(b,s,w'))-\u003eRWST r w s m a-\u003eRWST r w' s n b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-RWS-Lazy.html#v:runRWS",
      "description": {
        "fct-descr": "\u003cp\u003eUnwrap an RWS computation as a function.\n (The inverse of \u003ccode\u003e\u003ca\u003erws\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e",
        "fct-module": "Control.Monad.RWS.Lazy",
        "fct-package": "mtl",
        "fct-signature": "RWS r w s a -\u003e r -\u003e s -\u003e (a, s, w)",
        "fct-type": "function",
        "title": "runRWS"
      },
      "index": {
        "description": "Unwrap an RWS computation as function The inverse of rws",
        "hierarchy": "Control Monad RWS Lazy",
        "module": "Control.Monad.RWS.Lazy",
        "name": "runRWS",
        "normalized": "RWS a b c d-\u003ea-\u003ec-\u003e(d,c,b)",
        "package": "mtl",
        "partial": "RWS",
        "signature": "RWS r w s a-\u003er-\u003es-\u003e(a,s,w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-RWS-Lazy.html#v:runRWST",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.RWS.Lazy",
        "fct-package": "mtl",
        "fct-signature": "r -\u003e s -\u003e m (a, s, w)",
        "fct-type": "function",
        "title": "runRWST"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad RWS Lazy",
        "module": "Control.Monad.RWS.Lazy",
        "name": "runRWST",
        "normalized": "a-\u003eb-\u003ec(d,b,e)",
        "package": "mtl",
        "partial": "RWST",
        "signature": "r-\u003es-\u003em(a,s,w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-RWS-Lazy.html#v:rws",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct an RWS computation from a function.\n (The inverse of \u003ccode\u003e\u003ca\u003erunRWS\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e",
        "fct-module": "Control.Monad.RWS.Lazy",
        "fct-package": "mtl",
        "fct-signature": "(r -\u003e s -\u003e (a, s, w)) -\u003e RWS r w s a",
        "fct-type": "function",
        "title": "rws"
      },
      "index": {
        "description": "Construct an RWS computation from function The inverse of runRWS",
        "hierarchy": "Control Monad RWS Lazy",
        "module": "Control.Monad.RWS.Lazy",
        "name": "rws",
        "normalized": "(a-\u003eb-\u003e(c,b,d))-\u003eRWS a d b c",
        "package": "mtl",
        "partial": "",
        "signature": "(r-\u003es-\u003e(a,s,w))-\u003eRWS r w s a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-RWS-Lazy.html#v:withRWS",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ewithRWS\u003c/a\u003e\u003c/code\u003e f m\u003c/code\u003e executes action \u003ccode\u003em\u003c/code\u003e with an initial environment\n and state modified by applying \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunRWS\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003ewithRWS\u003c/a\u003e\u003c/code\u003e f m) r s = \u003ccode\u003e\u003ca\u003euncurry\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003erunRWS\u003c/a\u003e\u003c/code\u003e m) (f r s)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.RWS.Lazy",
        "fct-package": "mtl",
        "fct-signature": "(r' -\u003e s -\u003e (r, s)) -\u003e RWS r w s a -\u003e RWS r' w s a",
        "fct-type": "function",
        "title": "withRWS"
      },
      "index": {
        "description": "withRWS executes action with an initial environment and state modified by applying runRWS withRWS uncurry runRWS",
        "hierarchy": "Control Monad RWS Lazy",
        "module": "Control.Monad.RWS.Lazy",
        "name": "withRWS",
        "normalized": "(a-\u003eb-\u003e(c,b))-\u003eRWS c d b e-\u003eRWS a d b e",
        "package": "mtl",
        "partial": "RWS",
        "signature": "(r'-\u003es-\u003e(r,s))-\u003eRWS r w s a-\u003eRWS r' w s a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-RWS-Lazy.html#v:withRWST",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ewithRWST\u003c/a\u003e\u003c/code\u003e f m\u003c/code\u003e executes action \u003ccode\u003em\u003c/code\u003e with an initial environment\n and state modified by applying \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunRWST\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003ewithRWST\u003c/a\u003e\u003c/code\u003e f m) r s = \u003ccode\u003e\u003ca\u003euncurry\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003erunRWST\u003c/a\u003e\u003c/code\u003e m) (f r s)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.RWS.Lazy",
        "fct-package": "mtl",
        "fct-signature": "(r' -\u003e s -\u003e (r, s)) -\u003e RWST r w s m a -\u003e RWST r' w s m a",
        "fct-type": "function",
        "title": "withRWST"
      },
      "index": {
        "description": "withRWST executes action with an initial environment and state modified by applying runRWST withRWST uncurry runRWST",
        "hierarchy": "Control Monad RWS Lazy",
        "module": "Control.Monad.RWS.Lazy",
        "name": "withRWST",
        "normalized": "(a-\u003eb-\u003e(c,b))-\u003eRWST c d b e f-\u003eRWST a d b e f",
        "package": "mtl",
        "partial": "RWST",
        "signature": "(r'-\u003es-\u003e(r,s))-\u003eRWST r w s m a-\u003eRWST r' w s m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-RWS-Strict.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eStrict RWS monad.\n\u003c/p\u003e\u003cp\u003eInspired by the paper\n      \u003cem\u003eFunctional Programming with Overloading and Higher-Order Polymorphism\u003c/em\u003e,\n        Mark P Jones (\u003ca\u003ehttp://web.cecs.pdx.edu/~mpj/\u003c/a\u003e)\n          Advanced School of Functional Programming, 1995.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.RWS.Strict",
        "fct-package": "mtl",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-RWS-Strict.html",
        "fct-type": "module",
        "title": "Strict"
      },
      "index": {
        "description": "Strict RWS monad Inspired by the paper Functional Programming with Overloading and Higher-Order Polymorphism Mark Jones http web.cecs.pdx.edu mpj Advanced School of Functional Programming",
        "hierarchy": "Control Monad RWS Strict",
        "module": "Control.Monad.RWS.Strict",
        "name": "Strict",
        "normalized": "",
        "package": "mtl",
        "partial": "Strict",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-RWS-Strict.html#t:RWS",
      "description": {
        "fct-descr": "\u003cp\u003eA monad containing an environment of type \u003ccode\u003er\u003c/code\u003e, output of type \u003ccode\u003ew\u003c/code\u003e\n and an updatable state of type \u003ccode\u003es\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.RWS.Strict",
        "fct-package": "mtl",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "RWS"
      },
      "index": {
        "description": "monad containing an environment of type output of type and an updatable state of type",
        "hierarchy": "Control Monad RWS Strict",
        "module": "Control.Monad.RWS.Strict",
        "name": "RWS",
        "normalized": "",
        "package": "mtl",
        "partial": "RWS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-RWS-Strict.html#t:RWST",
      "description": {
        "fct-descr": "\u003cp\u003eA monad transformer adding reading an environment of type \u003ccode\u003er\u003c/code\u003e,\n collecting an output of type \u003ccode\u003ew\u003c/code\u003e and updating a state of type \u003ccode\u003es\u003c/code\u003e\n to an inner monad \u003ccode\u003em\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.RWS.Strict",
        "fct-package": "mtl",
        "fct-signature": "newtype",
        "fct-type": "newtype",
        "title": "RWST"
      },
      "index": {
        "description": "monad transformer adding reading an environment of type collecting an output of type and updating state of type to an inner monad",
        "hierarchy": "Control Monad RWS Strict",
        "module": "Control.Monad.RWS.Strict",
        "name": "RWST",
        "normalized": "",
        "package": "mtl",
        "partial": "RWST",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-RWS-Strict.html#v:RWST",
      "description": {
        "fct-module": "Control.Monad.RWS.Strict",
        "fct-package": "mtl",
        "fct-signature": "RWST",
        "fct-type": "function",
        "title": "RWST"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad RWS Strict",
        "module": "Control.Monad.RWS.Strict",
        "name": "RWST",
        "normalized": "",
        "package": "mtl",
        "partial": "RWST",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-RWS-Strict.html#v:evalRWS",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate a computation with the given initial state and environment,\n returning the final value and output, discarding the final state.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.RWS.Strict",
        "fct-package": "mtl",
        "fct-signature": "RWS r w s a-\u003e r-\u003e s-\u003e (a, w)",
        "fct-type": "function",
        "title": "evalRWS"
      },
      "index": {
        "description": "Evaluate computation with the given initial state and environment returning the final value and output discarding the final state",
        "hierarchy": "Control Monad RWS Strict",
        "module": "Control.Monad.RWS.Strict",
        "name": "evalRWS",
        "normalized": "RWS a b c d-\u003ea-\u003ec-\u003e(d,b)",
        "package": "mtl",
        "partial": "RWS",
        "signature": "RWS r w s a-\u003er-\u003es-\u003e(a,w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-RWS-Strict.html#v:evalRWST",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate a computation with the given initial state and environment,\n returning the final value and output, discarding the final state.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.RWS.Strict",
        "fct-package": "mtl",
        "fct-signature": "RWST r w s m a-\u003e r-\u003e s-\u003e m (a, w)",
        "fct-type": "function",
        "title": "evalRWST"
      },
      "index": {
        "description": "Evaluate computation with the given initial state and environment returning the final value and output discarding the final state",
        "hierarchy": "Control Monad RWS Strict",
        "module": "Control.Monad.RWS.Strict",
        "name": "evalRWST",
        "normalized": "RWST a b c d e-\u003ea-\u003ec-\u003ed(e,b)",
        "package": "mtl",
        "partial": "RWST",
        "signature": "RWST r w s m a-\u003er-\u003es-\u003em(a,w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-RWS-Strict.html#v:execRWS",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate a computation with the given initial state and environment,\n returning the final state and output, discarding the final value.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.RWS.Strict",
        "fct-package": "mtl",
        "fct-signature": "RWS r w s a-\u003e r-\u003e s-\u003e (s, w)",
        "fct-type": "function",
        "title": "execRWS"
      },
      "index": {
        "description": "Evaluate computation with the given initial state and environment returning the final state and output discarding the final value",
        "hierarchy": "Control Monad RWS Strict",
        "module": "Control.Monad.RWS.Strict",
        "name": "execRWS",
        "normalized": "RWS a b c d-\u003ea-\u003ec-\u003e(c,b)",
        "package": "mtl",
        "partial": "RWS",
        "signature": "RWS r w s a-\u003er-\u003es-\u003e(s,w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-RWS-Strict.html#v:execRWST",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate a computation with the given initial state and environment,\n returning the final state and output, discarding the final value.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.RWS.Strict",
        "fct-package": "mtl",
        "fct-signature": "RWST r w s m a-\u003e r-\u003e s-\u003e m (s, w)",
        "fct-type": "function",
        "title": "execRWST"
      },
      "index": {
        "description": "Evaluate computation with the given initial state and environment returning the final state and output discarding the final value",
        "hierarchy": "Control Monad RWS Strict",
        "module": "Control.Monad.RWS.Strict",
        "name": "execRWST",
        "normalized": "RWST a b c d e-\u003ea-\u003ec-\u003ed(c,b)",
        "package": "mtl",
        "partial": "RWST",
        "signature": "RWST r w s m a-\u003er-\u003es-\u003em(s,w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-RWS-Strict.html#v:mapRWS",
      "description": {
        "fct-descr": "\u003cp\u003eMap the return value, final state and output of a computation using\n the given function.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunRWS\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003emapRWS\u003c/a\u003e\u003c/code\u003e f m) r s = f (\u003ccode\u003e\u003ca\u003erunRWS\u003c/a\u003e\u003c/code\u003e m r s)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.RWS.Strict",
        "fct-package": "mtl",
        "fct-signature": "((a, s, w) -\u003e (b, s, w')) -\u003e RWS r w s a -\u003e RWS r w' s b",
        "fct-type": "function",
        "title": "mapRWS"
      },
      "index": {
        "description": "Map the return value final state and output of computation using the given function runRWS mapRWS runRWS",
        "hierarchy": "Control Monad RWS Strict",
        "module": "Control.Monad.RWS.Strict",
        "name": "mapRWS",
        "normalized": "((a,b,c)-\u003e(d,b,e))-\u003eRWS f c b a-\u003eRWS f e b d",
        "package": "mtl",
        "partial": "RWS",
        "signature": "((a,s,w)-\u003e(b,s,w'))-\u003eRWS r w s a-\u003eRWS r w' s b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-RWS-Strict.html#v:mapRWST",
      "description": {
        "fct-descr": "\u003cp\u003eMap the inner computation using the given function.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunRWST\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003emapRWST\u003c/a\u003e\u003c/code\u003e f m) r s = f (\u003ccode\u003e\u003ca\u003erunRWST\u003c/a\u003e\u003c/code\u003e m r s)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.RWS.Strict",
        "fct-package": "mtl",
        "fct-signature": "(m (a, s, w) -\u003e n (b, s, w')) -\u003e RWST r w s m a -\u003e RWST r w' s n b",
        "fct-type": "function",
        "title": "mapRWST"
      },
      "index": {
        "description": "Map the inner computation using the given function runRWST mapRWST runRWST",
        "hierarchy": "Control Monad RWS Strict",
        "module": "Control.Monad.RWS.Strict",
        "name": "mapRWST",
        "normalized": "(a(b,c,d)-\u003ee(f,c,g))-\u003eRWST h d c a b-\u003eRWST h g c e f",
        "package": "mtl",
        "partial": "RWST",
        "signature": "(m(a,s,w)-\u003en(b,s,w'))-\u003eRWST r w s m a-\u003eRWST r w' s n b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-RWS-Strict.html#v:runRWS",
      "description": {
        "fct-descr": "\u003cp\u003eUnwrap an RWS computation as a function.\n (The inverse of \u003ccode\u003e\u003ca\u003erws\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e",
        "fct-module": "Control.Monad.RWS.Strict",
        "fct-package": "mtl",
        "fct-signature": "RWS r w s a -\u003e r -\u003e s -\u003e (a, s, w)",
        "fct-type": "function",
        "title": "runRWS"
      },
      "index": {
        "description": "Unwrap an RWS computation as function The inverse of rws",
        "hierarchy": "Control Monad RWS Strict",
        "module": "Control.Monad.RWS.Strict",
        "name": "runRWS",
        "normalized": "RWS a b c d-\u003ea-\u003ec-\u003e(d,c,b)",
        "package": "mtl",
        "partial": "RWS",
        "signature": "RWS r w s a-\u003er-\u003es-\u003e(a,s,w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-RWS-Strict.html#v:runRWST",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.RWS.Strict",
        "fct-package": "mtl",
        "fct-signature": "r -\u003e s -\u003e m (a, s, w)",
        "fct-type": "function",
        "title": "runRWST"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad RWS Strict",
        "module": "Control.Monad.RWS.Strict",
        "name": "runRWST",
        "normalized": "a-\u003eb-\u003ec(d,b,e)",
        "package": "mtl",
        "partial": "RWST",
        "signature": "r-\u003es-\u003em(a,s,w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-RWS-Strict.html#v:rws",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct an RWS computation from a function.\n (The inverse of \u003ccode\u003e\u003ca\u003erunRWS\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e",
        "fct-module": "Control.Monad.RWS.Strict",
        "fct-package": "mtl",
        "fct-signature": "(r -\u003e s -\u003e (a, s, w)) -\u003e RWS r w s a",
        "fct-type": "function",
        "title": "rws"
      },
      "index": {
        "description": "Construct an RWS computation from function The inverse of runRWS",
        "hierarchy": "Control Monad RWS Strict",
        "module": "Control.Monad.RWS.Strict",
        "name": "rws",
        "normalized": "(a-\u003eb-\u003e(c,b,d))-\u003eRWS a d b c",
        "package": "mtl",
        "partial": "",
        "signature": "(r-\u003es-\u003e(a,s,w))-\u003eRWS r w s a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-RWS-Strict.html#v:withRWS",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ewithRWS\u003c/a\u003e\u003c/code\u003e f m\u003c/code\u003e executes action \u003ccode\u003em\u003c/code\u003e with an initial environment\n and state modified by applying \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunRWS\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003ewithRWS\u003c/a\u003e\u003c/code\u003e f m) r s = \u003ccode\u003e\u003ca\u003euncurry\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003erunRWS\u003c/a\u003e\u003c/code\u003e m) (f r s)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.RWS.Strict",
        "fct-package": "mtl",
        "fct-signature": "(r' -\u003e s -\u003e (r, s)) -\u003e RWS r w s a -\u003e RWS r' w s a",
        "fct-type": "function",
        "title": "withRWS"
      },
      "index": {
        "description": "withRWS executes action with an initial environment and state modified by applying runRWS withRWS uncurry runRWS",
        "hierarchy": "Control Monad RWS Strict",
        "module": "Control.Monad.RWS.Strict",
        "name": "withRWS",
        "normalized": "(a-\u003eb-\u003e(c,b))-\u003eRWS c d b e-\u003eRWS a d b e",
        "package": "mtl",
        "partial": "RWS",
        "signature": "(r'-\u003es-\u003e(r,s))-\u003eRWS r w s a-\u003eRWS r' w s a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-RWS-Strict.html#v:withRWST",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ewithRWST\u003c/a\u003e\u003c/code\u003e f m\u003c/code\u003e executes action \u003ccode\u003em\u003c/code\u003e with an initial environment\n and state modified by applying \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunRWST\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003ewithRWST\u003c/a\u003e\u003c/code\u003e f m) r s = \u003ccode\u003e\u003ca\u003euncurry\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003erunRWST\u003c/a\u003e\u003c/code\u003e m) (f r s)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.RWS.Strict",
        "fct-package": "mtl",
        "fct-signature": "(r' -\u003e s -\u003e (r, s)) -\u003e RWST r w s m a -\u003e RWST r' w s m a",
        "fct-type": "function",
        "title": "withRWST"
      },
      "index": {
        "description": "withRWST executes action with an initial environment and state modified by applying runRWST withRWST uncurry runRWST",
        "hierarchy": "Control Monad RWS Strict",
        "module": "Control.Monad.RWS.Strict",
        "name": "withRWST",
        "normalized": "(a-\u003eb-\u003e(c,b))-\u003eRWST c d b e f-\u003eRWST a d b e f",
        "package": "mtl",
        "partial": "RWST",
        "signature": "(r'-\u003es-\u003e(r,s))-\u003eRWST r w s m a-\u003eRWST r' w s m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-RWS.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDeclaration of the MonadRWS class.\n\u003c/p\u003e\u003cp\u003eInspired by the paper\n      \u003cem\u003eFunctional Programming with Overloading and Higher-Order Polymorphism\u003c/em\u003e,\n        Mark P Jones (\u003ca\u003ehttp://web.cecs.pdx.edu/~mpj/\u003c/a\u003e)\n          Advanced School of Functional Programming, 1995.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.RWS",
        "fct-package": "mtl",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-RWS.html",
        "fct-type": "module",
        "title": "RWS"
      },
      "index": {
        "description": "Declaration of the MonadRWS class Inspired by the paper Functional Programming with Overloading and Higher-Order Polymorphism Mark Jones http web.cecs.pdx.edu mpj Advanced School of Functional Programming",
        "hierarchy": "Control Monad RWS",
        "module": "Control.Monad.RWS",
        "name": "RWS",
        "normalized": "",
        "package": "mtl",
        "partial": "RWS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Reader-Class.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003eComputation type:\u003c/dt\u003e\u003cdd\u003e Computations which read values from a shared environment.\n\u003c/dd\u003e\u003cdt\u003eBinding strategy:\u003c/dt\u003e\u003cdd\u003e Monad values are functions from the environment to a value.\nThe bound function is applied to the bound value, and both have access\nto the shared environment.\n\u003c/dd\u003e\u003cdt\u003eUseful for:\u003c/dt\u003e\u003cdd\u003e Maintaining variable bindings, or other shared environment.\n\u003c/dd\u003e\u003cdt\u003eZero and plus:\u003c/dt\u003e\u003cdd\u003e None.\n\u003c/dd\u003e\u003cdt\u003eExample type:\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003e\u003ccode\u003eReader\u003c/code\u003e [(String,Value)] a\u003c/code\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eThe \u003ccode\u003eReader\u003c/code\u003e monad (also called the Environment monad).\nRepresents a computation, which can read values from\na shared environment, pass values from function to function,\nand execute sub-computations in a modified environment.\nUsing \u003ccode\u003eReader\u003c/code\u003e monad for such computations is often clearer and easier\nthan using the \u003ccode\u003e\u003ca\u003eState\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e\u003cp\u003eInspired by the paper\n  \u003cem\u003eFunctional Programming with Overloading and Higher-Order Polymorphism\u003c/em\u003e,\n    Mark P Jones (\u003ca\u003ehttp://web.cecs.pdx.edu/~mpj/\u003c/a\u003e)\n    Advanced School of Functional Programming, 1995.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Reader.Class",
        "fct-package": "mtl",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Reader-Class.html",
        "fct-type": "module",
        "title": "Class"
      },
      "index": {
        "description": "Computation type Computations which read values from shared environment Binding strategy Monad values are functions from the environment to value The bound function is applied to the bound value and both have access to the shared environment Useful for Maintaining variable bindings or other shared environment Zero and plus None Example type Reader String Value The Reader monad also called the Environment monad Represents computation which can read values from shared environment pass values from function to function and execute sub-computations in modified environment Using Reader monad for such computations is often clearer and easier than using the State monad Inspired by the paper Functional Programming with Overloading and Higher-Order Polymorphism Mark Jones http web.cecs.pdx.edu mpj Advanced School of Functional Programming",
        "hierarchy": "Control Monad Reader Class",
        "module": "Control.Monad.Reader.Class",
        "name": "Class",
        "normalized": "",
        "package": "mtl",
        "partial": "Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Reader-Class.html#t:MonadReader",
      "description": {
        "fct-descr": "\u003cp\u003eSee examples in \u003ca\u003eControl.Monad.Reader\u003c/a\u003e.\n Note, the partially applied function type \u003ccode\u003e(-\u003e) r\u003c/code\u003e is a simple reader monad.\n See the \u003ccode\u003einstance\u003c/code\u003e declaration below.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Reader.Class",
        "fct-package": "mtl",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Reader-Class.html#MonadReader",
        "fct-type": "class",
        "title": "MonadReader"
      },
      "index": {
        "description": "See examples in Control.Monad.Reader Note the partially applied function type is simple reader monad See the instance declaration below",
        "hierarchy": "Control Monad Reader Class",
        "module": "Control.Monad.Reader.Class",
        "name": "MonadReader",
        "normalized": "",
        "package": "mtl",
        "partial": "Monad Reader",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Reader-Class.html#v:ask",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieves the monad environment.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Reader.Class",
        "fct-package": "mtl",
        "fct-signature": "m r",
        "fct-source": "src/Control-Monad-Reader-Class.html#ask",
        "fct-type": "method",
        "title": "ask"
      },
      "index": {
        "description": "Retrieves the monad environment",
        "hierarchy": "Control Monad Reader Class",
        "module": "Control.Monad.Reader.Class",
        "name": "ask",
        "normalized": "",
        "package": "mtl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Reader-Class.html#v:asks",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieves a function of the current environment.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Reader.Class",
        "fct-package": "mtl",
        "fct-signature": "(r -\u003e a)-\u003e m a",
        "fct-type": "function",
        "title": "asks"
      },
      "index": {
        "description": "Retrieves function of the current environment",
        "hierarchy": "Control Monad Reader Class",
        "module": "Control.Monad.Reader.Class",
        "name": "asks",
        "normalized": "(a-\u003eb)-\u003ec b",
        "package": "mtl",
        "partial": "",
        "signature": "(r-\u003ea)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Reader-Class.html#v:local",
      "description": {
        "fct-descr": "\u003cp\u003eExecutes a computation in a modified environment.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Reader.Class",
        "fct-package": "mtl",
        "fct-signature": "local",
        "fct-source": "src/Control-Monad-Reader-Class.html#local",
        "fct-type": "method",
        "title": "local"
      },
      "index": {
        "description": "Executes computation in modified environment",
        "hierarchy": "Control Monad Reader Class",
        "module": "Control.Monad.Reader.Class",
        "name": "local",
        "normalized": "",
        "package": "mtl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Reader-Class.html#v:reader",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieves a function of the current environment.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Reader.Class",
        "fct-package": "mtl",
        "fct-signature": "reader",
        "fct-source": "src/Control-Monad-Reader-Class.html#reader",
        "fct-type": "method",
        "title": "reader"
      },
      "index": {
        "description": "Retrieves function of the current environment",
        "hierarchy": "Control Monad Reader Class",
        "module": "Control.Monad.Reader.Class",
        "name": "reader",
        "normalized": "",
        "package": "mtl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Reader.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003eComputation type:\u003c/dt\u003e\u003cdd\u003e Computations which read values from a shared environment.\n\u003c/dd\u003e\u003cdt\u003eBinding strategy:\u003c/dt\u003e\u003cdd\u003e Monad values are functions from the environment to a value.\nThe bound function is applied to the bound value, and both have access\nto the shared environment.\n\u003c/dd\u003e\u003cdt\u003eUseful for:\u003c/dt\u003e\u003cdd\u003e Maintaining variable bindings, or other shared environment.\n\u003c/dd\u003e\u003cdt\u003eZero and plus:\u003c/dt\u003e\u003cdd\u003e None.\n\u003c/dd\u003e\u003cdt\u003eExample type:\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003eReader\u003c/a\u003e\u003c/code\u003e [(String,Value)] a\u003c/code\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eReader\u003c/a\u003e\u003c/code\u003e monad (also called the Environment monad).\nRepresents a computation, which can read values from\na shared environment, pass values from function to function,\nand execute sub-computations in a modified environment.\nUsing \u003ccode\u003e\u003ca\u003eReader\u003c/a\u003e\u003c/code\u003e monad for such computations is often clearer and easier\nthan using the \u003ccode\u003e\u003ca\u003eState\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e\u003cp\u003eInspired by the paper\n  \u003cem\u003eFunctional Programming with Overloading and Higher-Order Polymorphism\u003c/em\u003e,\n    Mark P Jones (\u003ca\u003ehttp://web.cecs.pdx.edu/~mpj/\u003c/a\u003e)\n    Advanced School of Functional Programming, 1995.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Reader",
        "fct-package": "mtl",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Reader.html",
        "fct-type": "module",
        "title": "Reader"
      },
      "index": {
        "description": "Computation type Computations which read values from shared environment Binding strategy Monad values are functions from the environment to value The bound function is applied to the bound value and both have access to the shared environment Useful for Maintaining variable bindings or other shared environment Zero and plus None Example type Reader String Value The Reader monad also called the Environment monad Represents computation which can read values from shared environment pass values from function to function and execute sub-computations in modified environment Using Reader monad for such computations is often clearer and easier than using the State monad Inspired by the paper Functional Programming with Overloading and Higher-Order Polymorphism Mark Jones http web.cecs.pdx.edu mpj Advanced School of Functional Programming",
        "hierarchy": "Control Monad Reader",
        "module": "Control.Monad.Reader",
        "name": "Reader",
        "normalized": "",
        "package": "mtl",
        "partial": "Reader",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Reader.html#t:MonadReader",
      "description": {
        "fct-descr": "\u003cp\u003eSee examples in \u003ca\u003eControl.Monad.Reader\u003c/a\u003e.\n Note, the partially applied function type \u003ccode\u003e(-\u003e) r\u003c/code\u003e is a simple reader monad.\n See the \u003ccode\u003einstance\u003c/code\u003e declaration below.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Reader",
        "fct-package": "mtl",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Reader-Class.html#MonadReader",
        "fct-type": "class",
        "title": "MonadReader"
      },
      "index": {
        "description": "See examples in Control.Monad.Reader Note the partially applied function type is simple reader monad See the instance declaration below",
        "hierarchy": "Control Monad Reader",
        "module": "Control.Monad.Reader",
        "name": "MonadReader",
        "normalized": "",
        "package": "mtl",
        "partial": "Monad Reader",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Reader.html#t:Reader",
      "description": {
        "fct-descr": "\u003cp\u003eThe parameterizable reader monad.\n\u003c/p\u003e\u003cp\u003eComputations are functions of a shared environment.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e function ignores the environment, while \u003ccode\u003e\u003e\u003e=\u003c/code\u003e passes\n the inherited environment to both subcomputations.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Reader",
        "fct-package": "mtl",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "Reader"
      },
      "index": {
        "description": "The parameterizable reader monad Computations are functions of shared environment The return function ignores the environment while passes the inherited environment to both subcomputations",
        "hierarchy": "Control Monad Reader",
        "module": "Control.Monad.Reader",
        "name": "Reader",
        "normalized": "",
        "package": "mtl",
        "partial": "Reader",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Reader.html#t:ReaderT",
      "description": {
        "fct-descr": "\u003cp\u003eThe reader monad transformer,\n which adds a read-only environment to the given monad.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e function ignores the environment, while \u003ccode\u003e\u003e\u003e=\u003c/code\u003e passes\n the inherited environment to both subcomputations.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Reader",
        "fct-package": "mtl",
        "fct-signature": "newtype",
        "fct-type": "newtype",
        "title": "ReaderT"
      },
      "index": {
        "description": "The reader monad transformer which adds read-only environment to the given monad The return function ignores the environment while passes the inherited environment to both subcomputations",
        "hierarchy": "Control Monad Reader",
        "module": "Control.Monad.Reader",
        "name": "ReaderT",
        "normalized": "",
        "package": "mtl",
        "partial": "Reader",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Reader.html#v:ReaderT",
      "description": {
        "fct-module": "Control.Monad.Reader",
        "fct-package": "mtl",
        "fct-signature": "ReaderT",
        "fct-type": "function",
        "title": "ReaderT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Reader",
        "module": "Control.Monad.Reader",
        "name": "ReaderT",
        "normalized": "",
        "package": "mtl",
        "partial": "Reader",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Reader.html#v:ask",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieves the monad environment.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Reader",
        "fct-package": "mtl",
        "fct-signature": "m r",
        "fct-source": "src/Control-Monad-Reader-Class.html#ask",
        "fct-type": "method",
        "title": "ask"
      },
      "index": {
        "description": "Retrieves the monad environment",
        "hierarchy": "Control Monad Reader",
        "module": "Control.Monad.Reader",
        "name": "ask",
        "normalized": "",
        "package": "mtl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Reader.html#v:asks",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieves a function of the current environment.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Reader",
        "fct-package": "mtl",
        "fct-signature": "(r -\u003e a)-\u003e m a",
        "fct-type": "function",
        "title": "asks"
      },
      "index": {
        "description": "Retrieves function of the current environment",
        "hierarchy": "Control Monad Reader",
        "module": "Control.Monad.Reader",
        "name": "asks",
        "normalized": "(a-\u003eb)-\u003ec b",
        "package": "mtl",
        "partial": "",
        "signature": "(r-\u003ea)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Reader.html#v:local",
      "description": {
        "fct-descr": "\u003cp\u003eExecutes a computation in a modified environment.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Reader",
        "fct-package": "mtl",
        "fct-signature": "local",
        "fct-source": "src/Control-Monad-Reader-Class.html#local",
        "fct-type": "method",
        "title": "local"
      },
      "index": {
        "description": "Executes computation in modified environment",
        "hierarchy": "Control Monad Reader",
        "module": "Control.Monad.Reader",
        "name": "local",
        "normalized": "",
        "package": "mtl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Reader.html#v:mapReader",
      "description": {
        "fct-descr": "\u003cp\u003eTransform the value returned by a \u003ccode\u003eReader\u003c/code\u003e.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunReader\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003emapReader\u003c/a\u003e\u003c/code\u003e f m) = f . \u003ccode\u003e\u003ca\u003erunReader\u003c/a\u003e\u003c/code\u003e m\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Reader",
        "fct-package": "mtl",
        "fct-signature": "(a -\u003e b) -\u003e Reader r a -\u003e Reader r b",
        "fct-type": "function",
        "title": "mapReader"
      },
      "index": {
        "description": "Transform the value returned by Reader runReader mapReader runReader",
        "hierarchy": "Control Monad Reader",
        "module": "Control.Monad.Reader",
        "name": "mapReader",
        "normalized": "(a-\u003eb)-\u003eReader c a-\u003eReader c b",
        "package": "mtl",
        "partial": "Reader",
        "signature": "(a-\u003eb)-\u003eReader r a-\u003eReader r b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Reader.html#v:mapReaderT",
      "description": {
        "fct-descr": "\u003cp\u003eTransform the computation inside a \u003ccode\u003eReaderT\u003c/code\u003e.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunReaderT\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003emapReaderT\u003c/a\u003e\u003c/code\u003e f m) = f . \u003ccode\u003e\u003ca\u003erunReaderT\u003c/a\u003e\u003c/code\u003e m\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Reader",
        "fct-package": "mtl",
        "fct-signature": "(m a -\u003e n b) -\u003e ReaderT r m a -\u003e ReaderT r n b",
        "fct-type": "function",
        "title": "mapReaderT"
      },
      "index": {
        "description": "Transform the computation inside ReaderT runReaderT mapReaderT runReaderT",
        "hierarchy": "Control Monad Reader",
        "module": "Control.Monad.Reader",
        "name": "mapReaderT",
        "normalized": "(a b-\u003ec d)-\u003eReaderT e a b-\u003eReaderT e c d",
        "package": "mtl",
        "partial": "Reader",
        "signature": "(m a-\u003en b)-\u003eReaderT r m a-\u003eReaderT r n b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Reader.html#v:reader",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieves a function of the current environment.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Reader",
        "fct-package": "mtl",
        "fct-signature": "reader",
        "fct-source": "src/Control-Monad-Reader-Class.html#reader",
        "fct-type": "method",
        "title": "reader"
      },
      "index": {
        "description": "Retrieves function of the current environment",
        "hierarchy": "Control Monad Reader",
        "module": "Control.Monad.Reader",
        "name": "reader",
        "normalized": "",
        "package": "mtl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Reader.html#v:runReader",
      "description": {
        "fct-descr": "\u003cp\u003eRuns a \u003ccode\u003eReader\u003c/code\u003e and extracts the final value from it.\n (The inverse of \u003ccode\u003e\u003ca\u003ereader\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Reader",
        "fct-package": "mtl",
        "fct-signature": "Reader r a-\u003e r-\u003e a",
        "fct-type": "function",
        "title": "runReader"
      },
      "index": {
        "description": "Runs Reader and extracts the final value from it The inverse of reader",
        "hierarchy": "Control Monad Reader",
        "module": "Control.Monad.Reader",
        "name": "runReader",
        "normalized": "Reader a b-\u003ea-\u003eb",
        "package": "mtl",
        "partial": "Reader",
        "signature": "Reader r a-\u003er-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Reader.html#v:runReaderT",
      "description": {
        "fct-descr": "\u003cp\u003eThe underlying computation, as a function of the environment.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Reader",
        "fct-package": "mtl",
        "fct-signature": "r -\u003e m a",
        "fct-type": "function",
        "title": "runReaderT"
      },
      "index": {
        "description": "The underlying computation as function of the environment",
        "hierarchy": "Control Monad Reader",
        "module": "Control.Monad.Reader",
        "name": "runReaderT",
        "normalized": "a-\u003eb c",
        "package": "mtl",
        "partial": "Reader",
        "signature": "r-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Reader.html#v:withReader",
      "description": {
        "fct-descr": "\u003cp\u003eExecute a computation in a modified environment\n (a specialization of \u003ccode\u003e\u003ca\u003ewithReaderT\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunReader\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003ewithReader\u003c/a\u003e\u003c/code\u003e f m) = \u003ccode\u003e\u003ca\u003erunReader\u003c/a\u003e\u003c/code\u003e m . f\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Reader",
        "fct-package": "mtl",
        "fct-signature": "(r' -\u003e r)-\u003e Reader r a-\u003e Reader r' a",
        "fct-type": "function",
        "title": "withReader"
      },
      "index": {
        "description": "Execute computation in modified environment specialization of withReaderT runReader withReader runReader",
        "hierarchy": "Control Monad Reader",
        "module": "Control.Monad.Reader",
        "name": "withReader",
        "normalized": "(a-\u003eb)-\u003eReader b c-\u003eReader a c",
        "package": "mtl",
        "partial": "Reader",
        "signature": "(r'-\u003er)-\u003eReader r a-\u003eReader r' a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Reader.html#v:withReaderT",
      "description": {
        "fct-descr": "\u003cp\u003eExecute a computation in a modified environment\n (a more general version of \u003ccode\u003e\u003ca\u003elocal\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunReaderT\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003ewithReaderT\u003c/a\u003e\u003c/code\u003e f m) = \u003ccode\u003e\u003ca\u003erunReaderT\u003c/a\u003e\u003c/code\u003e m . f\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Reader",
        "fct-package": "mtl",
        "fct-signature": "(r' -\u003e r)-\u003e ReaderT r m a-\u003e ReaderT r' m a",
        "fct-type": "function",
        "title": "withReaderT"
      },
      "index": {
        "description": "Execute computation in modified environment more general version of local runReaderT withReaderT runReaderT",
        "hierarchy": "Control Monad Reader",
        "module": "Control.Monad.Reader",
        "name": "withReaderT",
        "normalized": "(a-\u003eb)-\u003eReaderT b c d-\u003eReaderT a c d",
        "package": "mtl",
        "partial": "Reader",
        "signature": "(r'-\u003er)-\u003eReaderT r m a-\u003eReaderT r' m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Class.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMonadState class.\n\u003c/p\u003e\u003cp\u003eThis module is inspired by the paper\n      \u003cem\u003eFunctional Programming with Overloading and Higher-Order Polymorphism\u003c/em\u003e,\n        Mark P Jones (\u003ca\u003ehttp://web.cecs.pdx.edu/~mpj/\u003c/a\u003e)\n          Advanced School of Functional Programming, 1995.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.State.Class",
        "fct-package": "mtl",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-State-Class.html",
        "fct-type": "module",
        "title": "Class"
      },
      "index": {
        "description": "MonadState class This module is inspired by the paper Functional Programming with Overloading and Higher-Order Polymorphism Mark Jones http web.cecs.pdx.edu mpj Advanced School of Functional Programming",
        "hierarchy": "Control Monad State Class",
        "module": "Control.Monad.State.Class",
        "name": "Class",
        "normalized": "",
        "package": "mtl",
        "partial": "Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Class.html#t:MonadState",
      "description": {
        "fct-descr": "\u003cp\u003eMinimal definition is either both of \u003ccode\u003eget\u003c/code\u003e and \u003ccode\u003eput\u003c/code\u003e or just \u003ccode\u003estate\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Monad.State.Class",
        "fct-package": "mtl",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-State-Class.html#MonadState",
        "fct-type": "class",
        "title": "MonadState"
      },
      "index": {
        "description": "Minimal definition is either both of get and put or just state",
        "hierarchy": "Control Monad State Class",
        "module": "Control.Monad.State.Class",
        "name": "MonadState",
        "normalized": "",
        "package": "mtl",
        "partial": "Monad State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Class.html#v:get",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the state from the internals of the monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.State.Class",
        "fct-package": "mtl",
        "fct-signature": "m s",
        "fct-source": "src/Control-Monad-State-Class.html#get",
        "fct-type": "method",
        "title": "get"
      },
      "index": {
        "description": "Return the state from the internals of the monad",
        "hierarchy": "Control Monad State Class",
        "module": "Control.Monad.State.Class",
        "name": "get",
        "normalized": "",
        "package": "mtl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Class.html#v:gets",
      "description": {
        "fct-descr": "\u003cp\u003eGets specific component of the state, using a projection function\n supplied.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.State.Class",
        "fct-package": "mtl",
        "fct-signature": "(s -\u003e a) -\u003e m a",
        "fct-source": "src/Control-Monad-State-Class.html#gets",
        "fct-type": "function",
        "title": "gets"
      },
      "index": {
        "description": "Gets specific component of the state using projection function supplied",
        "hierarchy": "Control Monad State Class",
        "module": "Control.Monad.State.Class",
        "name": "gets",
        "normalized": "(a-\u003eb)-\u003ec b",
        "package": "mtl",
        "partial": "",
        "signature": "(s-\u003ea)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Class.html#v:modify",
      "description": {
        "fct-descr": "\u003cp\u003eMonadic state transformer.\n\u003c/p\u003e\u003cp\u003eMaps an old state to a new state inside a state monad.\n      The old state is thrown away.\n\u003c/p\u003e\u003cpre\u003e      Main\u003e :t modify ((+1) :: Int -\u003e Int)\n      modify (...) :: (MonadState Int a) =\u003e a ()\n\u003c/pre\u003e\u003cp\u003eThis says that \u003ccode\u003emodify (+1)\u003c/code\u003e acts over any\n    Monad that is a member of the \u003ccode\u003eMonadState\u003c/code\u003e class,\n    with an \u003ccode\u003eInt\u003c/code\u003e state.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.State.Class",
        "fct-package": "mtl",
        "fct-signature": "(s -\u003e s) -\u003e m ()",
        "fct-source": "src/Control-Monad-State-Class.html#modify",
        "fct-type": "function",
        "title": "modify"
      },
      "index": {
        "description": "Monadic state transformer Maps an old state to new state inside state monad The old state is thrown away Main modify Int Int modify MonadState Int This says that modify acts over any Monad that is member of the MonadState class with an Int state",
        "hierarchy": "Control Monad State Class",
        "module": "Control.Monad.State.Class",
        "name": "modify",
        "normalized": "(a-\u003ea)-\u003eb()",
        "package": "mtl",
        "partial": "",
        "signature": "(s-\u003es)-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Class.html#v:put",
      "description": {
        "fct-descr": "\u003cp\u003eReplace the state inside the monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.State.Class",
        "fct-package": "mtl",
        "fct-signature": "s -\u003e m ()",
        "fct-source": "src/Control-Monad-State-Class.html#put",
        "fct-type": "method",
        "title": "put"
      },
      "index": {
        "description": "Replace the state inside the monad",
        "hierarchy": "Control Monad State Class",
        "module": "Control.Monad.State.Class",
        "name": "put",
        "normalized": "a-\u003eb()",
        "package": "mtl",
        "partial": "",
        "signature": "s-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Class.html#v:state",
      "description": {
        "fct-descr": "\u003cp\u003eEmbed a simple state action into the monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.State.Class",
        "fct-package": "mtl",
        "fct-signature": "(s -\u003e (a, s)) -\u003e m a",
        "fct-source": "src/Control-Monad-State-Class.html#state",
        "fct-type": "method",
        "title": "state"
      },
      "index": {
        "description": "Embed simple state action into the monad",
        "hierarchy": "Control Monad State Class",
        "module": "Control.Monad.State.Class",
        "name": "state",
        "normalized": "(a-\u003e(b,a))-\u003ec b",
        "package": "mtl",
        "partial": "",
        "signature": "(s-\u003e(a,s))-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Lazy.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLazy state monads.\n\u003c/p\u003e\u003cp\u003eThis module is inspired by the paper\n      \u003cem\u003eFunctional Programming with Overloading and Higher-Order Polymorphism\u003c/em\u003e,\n        Mark P Jones (\u003ca\u003ehttp://web.cecs.pdx.edu/~mpj/\u003c/a\u003e)\n          Advanced School of Functional Programming, 1995.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.State.Lazy",
        "fct-package": "mtl",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-State-Lazy.html",
        "fct-type": "module",
        "title": "Lazy"
      },
      "index": {
        "description": "Lazy state monads This module is inspired by the paper Functional Programming with Overloading and Higher-Order Polymorphism Mark Jones http web.cecs.pdx.edu mpj Advanced School of Functional Programming",
        "hierarchy": "Control Monad State Lazy",
        "module": "Control.Monad.State.Lazy",
        "name": "Lazy",
        "normalized": "",
        "package": "mtl",
        "partial": "Lazy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Lazy.html#t:MonadState",
      "description": {
        "fct-descr": "\u003cp\u003eMinimal definition is either both of \u003ccode\u003eget\u003c/code\u003e and \u003ccode\u003eput\u003c/code\u003e or just \u003ccode\u003estate\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Monad.State.Lazy",
        "fct-package": "mtl",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-State-Class.html#MonadState",
        "fct-type": "class",
        "title": "MonadState"
      },
      "index": {
        "description": "Minimal definition is either both of get and put or just state",
        "hierarchy": "Control Monad State Lazy",
        "module": "Control.Monad.State.Lazy",
        "name": "MonadState",
        "normalized": "",
        "package": "mtl",
        "partial": "Monad State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Lazy.html#t:State",
      "description": {
        "fct-descr": "\u003cp\u003eA state monad parameterized by the type \u003ccode\u003es\u003c/code\u003e of the state to carry.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e function leaves the state unchanged, while \u003ccode\u003e\u003e\u003e=\u003c/code\u003e uses\n the final state of the first computation as the initial state of\n the second.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.State.Lazy",
        "fct-package": "mtl",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "State"
      },
      "index": {
        "description": "state monad parameterized by the type of the state to carry The return function leaves the state unchanged while uses the final state of the first computation as the initial state of the second",
        "hierarchy": "Control Monad State Lazy",
        "module": "Control.Monad.State.Lazy",
        "name": "State",
        "normalized": "",
        "package": "mtl",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Lazy.html#t:StateT",
      "description": {
        "fct-descr": "\u003cp\u003eA state transformer monad parameterized by:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003es\u003c/code\u003e - The state.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003em\u003c/code\u003e - The inner monad.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e function leaves the state unchanged, while \u003ccode\u003e\u003e\u003e=\u003c/code\u003e uses\n the final state of the first computation as the initial state of\n the second.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.State.Lazy",
        "fct-package": "mtl",
        "fct-signature": "newtype",
        "fct-type": "newtype",
        "title": "StateT"
      },
      "index": {
        "description": "state transformer monad parameterized by The state The inner monad The return function leaves the state unchanged while uses the final state of the first computation as the initial state of the second",
        "hierarchy": "Control Monad State Lazy",
        "module": "Control.Monad.State.Lazy",
        "name": "StateT",
        "normalized": "",
        "package": "mtl",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Lazy.html#v:StateT",
      "description": {
        "fct-module": "Control.Monad.State.Lazy",
        "fct-package": "mtl",
        "fct-signature": "StateT",
        "fct-type": "function",
        "title": "StateT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad State Lazy",
        "module": "Control.Monad.State.Lazy",
        "name": "StateT",
        "normalized": "",
        "package": "mtl",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Lazy.html#v:evalState",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate a state computation with the given initial state\n and return the final value, discarding the final state.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eevalState\u003c/a\u003e\u003c/code\u003e m s = \u003ccode\u003e\u003ca\u003efst\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003erunState\u003c/a\u003e\u003c/code\u003e m s)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.State.Lazy",
        "fct-package": "mtl",
        "fct-signature": "State s a-\u003e s-\u003e a",
        "fct-type": "function",
        "title": "evalState"
      },
      "index": {
        "description": "Evaluate state computation with the given initial state and return the final value discarding the final state evalState fst runState",
        "hierarchy": "Control Monad State Lazy",
        "module": "Control.Monad.State.Lazy",
        "name": "evalState",
        "normalized": "State a b-\u003ea-\u003eb",
        "package": "mtl",
        "partial": "State",
        "signature": "State s a-\u003es-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Lazy.html#v:evalStateT",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate a state computation with the given initial state\n and return the final value, discarding the final state.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eevalStateT\u003c/a\u003e\u003c/code\u003e m s = \u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003efst\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003erunStateT\u003c/a\u003e\u003c/code\u003e m s)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.State.Lazy",
        "fct-package": "mtl",
        "fct-signature": "StateT s m a -\u003e s -\u003e m a",
        "fct-type": "function",
        "title": "evalStateT"
      },
      "index": {
        "description": "Evaluate state computation with the given initial state and return the final value discarding the final state evalStateT liftM fst runStateT",
        "hierarchy": "Control Monad State Lazy",
        "module": "Control.Monad.State.Lazy",
        "name": "evalStateT",
        "normalized": "StateT a b c-\u003ea-\u003eb c",
        "package": "mtl",
        "partial": "State",
        "signature": "StateT s m a-\u003es-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Lazy.html#v:execState",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate a state computation with the given initial state\n and return the final state, discarding the final value.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eexecState\u003c/a\u003e\u003c/code\u003e m s = \u003ccode\u003e\u003ca\u003esnd\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003erunState\u003c/a\u003e\u003c/code\u003e m s)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.State.Lazy",
        "fct-package": "mtl",
        "fct-signature": "State s a-\u003e s-\u003e s",
        "fct-type": "function",
        "title": "execState"
      },
      "index": {
        "description": "Evaluate state computation with the given initial state and return the final state discarding the final value execState snd runState",
        "hierarchy": "Control Monad State Lazy",
        "module": "Control.Monad.State.Lazy",
        "name": "execState",
        "normalized": "State a b-\u003ea-\u003ea",
        "package": "mtl",
        "partial": "State",
        "signature": "State s a-\u003es-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Lazy.html#v:execStateT",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate a state computation with the given initial state\n and return the final state, discarding the final value.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eexecStateT\u003c/a\u003e\u003c/code\u003e m s = \u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003esnd\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003erunStateT\u003c/a\u003e\u003c/code\u003e m s)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.State.Lazy",
        "fct-package": "mtl",
        "fct-signature": "StateT s m a -\u003e s -\u003e m s",
        "fct-type": "function",
        "title": "execStateT"
      },
      "index": {
        "description": "Evaluate state computation with the given initial state and return the final state discarding the final value execStateT liftM snd runStateT",
        "hierarchy": "Control Monad State Lazy",
        "module": "Control.Monad.State.Lazy",
        "name": "execStateT",
        "normalized": "StateT a b c-\u003ea-\u003eb a",
        "package": "mtl",
        "partial": "State",
        "signature": "StateT s m a-\u003es-\u003em s"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Lazy.html#v:get",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the state from the internals of the monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.State.Lazy",
        "fct-package": "mtl",
        "fct-signature": "m s",
        "fct-source": "src/Control-Monad-State-Class.html#get",
        "fct-type": "method",
        "title": "get"
      },
      "index": {
        "description": "Return the state from the internals of the monad",
        "hierarchy": "Control Monad State Lazy",
        "module": "Control.Monad.State.Lazy",
        "name": "get",
        "normalized": "",
        "package": "mtl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Lazy.html#v:gets",
      "description": {
        "fct-descr": "\u003cp\u003eGets specific component of the state, using a projection function\n supplied.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.State.Lazy",
        "fct-package": "mtl",
        "fct-signature": "(s -\u003e a) -\u003e m a",
        "fct-source": "src/Control-Monad-State-Class.html#gets",
        "fct-type": "function",
        "title": "gets"
      },
      "index": {
        "description": "Gets specific component of the state using projection function supplied",
        "hierarchy": "Control Monad State Lazy",
        "module": "Control.Monad.State.Lazy",
        "name": "gets",
        "normalized": "(a-\u003eb)-\u003ec b",
        "package": "mtl",
        "partial": "",
        "signature": "(s-\u003ea)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Lazy.html#v:mapState",
      "description": {
        "fct-descr": "\u003cp\u003eMap both the return value and final state of a computation using\n the given function.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunState\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003emapState\u003c/a\u003e\u003c/code\u003e f m) = f . \u003ccode\u003e\u003ca\u003erunState\u003c/a\u003e\u003c/code\u003e m\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.State.Lazy",
        "fct-package": "mtl",
        "fct-signature": "((a, s) -\u003e (b, s)) -\u003e State s a -\u003e State s b",
        "fct-type": "function",
        "title": "mapState"
      },
      "index": {
        "description": "Map both the return value and final state of computation using the given function runState mapState runState",
        "hierarchy": "Control Monad State Lazy",
        "module": "Control.Monad.State.Lazy",
        "name": "mapState",
        "normalized": "((a,b)-\u003e(c,b))-\u003eState b a-\u003eState b c",
        "package": "mtl",
        "partial": "State",
        "signature": "((a,s)-\u003e(b,s))-\u003eState s a-\u003eState s b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Lazy.html#v:mapStateT",
      "description": {
        "fct-descr": "\u003cp\u003eMap both the return value and final state of a computation using\n the given function.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunStateT\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003emapStateT\u003c/a\u003e\u003c/code\u003e f m) = f . \u003ccode\u003e\u003ca\u003erunStateT\u003c/a\u003e\u003c/code\u003e m\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.State.Lazy",
        "fct-package": "mtl",
        "fct-signature": "(m (a, s) -\u003e n (b, s)) -\u003e StateT s m a -\u003e StateT s n b",
        "fct-type": "function",
        "title": "mapStateT"
      },
      "index": {
        "description": "Map both the return value and final state of computation using the given function runStateT mapStateT runStateT",
        "hierarchy": "Control Monad State Lazy",
        "module": "Control.Monad.State.Lazy",
        "name": "mapStateT",
        "normalized": "(a(b,c)-\u003ed(e,c))-\u003eStateT c a b-\u003eStateT c d e",
        "package": "mtl",
        "partial": "State",
        "signature": "(m(a,s)-\u003en(b,s))-\u003eStateT s m a-\u003eStateT s n b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Lazy.html#v:modify",
      "description": {
        "fct-descr": "\u003cp\u003eMonadic state transformer.\n\u003c/p\u003e\u003cp\u003eMaps an old state to a new state inside a state monad.\n      The old state is thrown away.\n\u003c/p\u003e\u003cpre\u003e      Main\u003e :t modify ((+1) :: Int -\u003e Int)\n      modify (...) :: (MonadState Int a) =\u003e a ()\n\u003c/pre\u003e\u003cp\u003eThis says that \u003ccode\u003emodify (+1)\u003c/code\u003e acts over any\n    Monad that is a member of the \u003ccode\u003eMonadState\u003c/code\u003e class,\n    with an \u003ccode\u003eInt\u003c/code\u003e state.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.State.Lazy",
        "fct-package": "mtl",
        "fct-signature": "(s -\u003e s) -\u003e m ()",
        "fct-source": "src/Control-Monad-State-Class.html#modify",
        "fct-type": "function",
        "title": "modify"
      },
      "index": {
        "description": "Monadic state transformer Maps an old state to new state inside state monad The old state is thrown away Main modify Int Int modify MonadState Int This says that modify acts over any Monad that is member of the MonadState class with an Int state",
        "hierarchy": "Control Monad State Lazy",
        "module": "Control.Monad.State.Lazy",
        "name": "modify",
        "normalized": "(a-\u003ea)-\u003eb()",
        "package": "mtl",
        "partial": "",
        "signature": "(s-\u003es)-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Lazy.html#v:put",
      "description": {
        "fct-descr": "\u003cp\u003eReplace the state inside the monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.State.Lazy",
        "fct-package": "mtl",
        "fct-signature": "s -\u003e m ()",
        "fct-source": "src/Control-Monad-State-Class.html#put",
        "fct-type": "method",
        "title": "put"
      },
      "index": {
        "description": "Replace the state inside the monad",
        "hierarchy": "Control Monad State Lazy",
        "module": "Control.Monad.State.Lazy",
        "name": "put",
        "normalized": "a-\u003eb()",
        "package": "mtl",
        "partial": "",
        "signature": "s-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Lazy.html#v:runState",
      "description": {
        "fct-descr": "\u003cp\u003eUnwrap a state monad computation as a function.\n (The inverse of \u003ccode\u003e\u003ca\u003estate\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e",
        "fct-module": "Control.Monad.State.Lazy",
        "fct-package": "mtl",
        "fct-signature": "State s a-\u003e s-\u003e (a, s)",
        "fct-type": "function",
        "title": "runState"
      },
      "index": {
        "description": "Unwrap state monad computation as function The inverse of state",
        "hierarchy": "Control Monad State Lazy",
        "module": "Control.Monad.State.Lazy",
        "name": "runState",
        "normalized": "State a b-\u003ea-\u003e(b,a)",
        "package": "mtl",
        "partial": "State",
        "signature": "State s a-\u003es-\u003e(a,s)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Lazy.html#v:runStateT",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.State.Lazy",
        "fct-package": "mtl",
        "fct-signature": "s -\u003e m (a, s)",
        "fct-type": "function",
        "title": "runStateT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad State Lazy",
        "module": "Control.Monad.State.Lazy",
        "name": "runStateT",
        "normalized": "a-\u003eb(c,a)",
        "package": "mtl",
        "partial": "State",
        "signature": "s-\u003em(a,s)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Lazy.html#v:state",
      "description": {
        "fct-descr": "\u003cp\u003eEmbed a simple state action into the monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.State.Lazy",
        "fct-package": "mtl",
        "fct-signature": "(s -\u003e (a, s)) -\u003e m a",
        "fct-source": "src/Control-Monad-State-Class.html#state",
        "fct-type": "method",
        "title": "state"
      },
      "index": {
        "description": "Embed simple state action into the monad",
        "hierarchy": "Control Monad State Lazy",
        "module": "Control.Monad.State.Lazy",
        "name": "state",
        "normalized": "(a-\u003e(b,a))-\u003ec b",
        "package": "mtl",
        "partial": "",
        "signature": "(s-\u003e(a,s))-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Lazy.html#v:withState",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ewithState\u003c/a\u003e\u003c/code\u003e f m\u003c/code\u003e executes action \u003ccode\u003em\u003c/code\u003e on a state modified by\n applying \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003ewithState\u003c/a\u003e\u003c/code\u003e f m = \u003ccode\u003e\u003ca\u003emodify\u003c/a\u003e\u003c/code\u003e f \u003e\u003e m\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.State.Lazy",
        "fct-package": "mtl",
        "fct-signature": "(s -\u003e s) -\u003e State s a -\u003e State s a",
        "fct-type": "function",
        "title": "withState"
      },
      "index": {
        "description": "withState executes action on state modified by applying withState modify",
        "hierarchy": "Control Monad State Lazy",
        "module": "Control.Monad.State.Lazy",
        "name": "withState",
        "normalized": "(a-\u003ea)-\u003eState a b-\u003eState a b",
        "package": "mtl",
        "partial": "State",
        "signature": "(s-\u003es)-\u003eState s a-\u003eState s a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Lazy.html#v:withStateT",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ewithStateT\u003c/a\u003e\u003c/code\u003e f m\u003c/code\u003e executes action \u003ccode\u003em\u003c/code\u003e on a state modified by\n applying \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003ewithStateT\u003c/a\u003e\u003c/code\u003e f m = \u003ccode\u003e\u003ca\u003emodify\u003c/a\u003e\u003c/code\u003e f \u003e\u003e m\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.State.Lazy",
        "fct-package": "mtl",
        "fct-signature": "(s -\u003e s) -\u003e StateT s m a -\u003e StateT s m a",
        "fct-type": "function",
        "title": "withStateT"
      },
      "index": {
        "description": "withStateT executes action on state modified by applying withStateT modify",
        "hierarchy": "Control Monad State Lazy",
        "module": "Control.Monad.State.Lazy",
        "name": "withStateT",
        "normalized": "(a-\u003ea)-\u003eStateT a b c-\u003eStateT a b c",
        "package": "mtl",
        "partial": "State",
        "signature": "(s-\u003es)-\u003eStateT s m a-\u003eStateT s m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Strict.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eStrict state monads.\n\u003c/p\u003e\u003cp\u003eThis module is inspired by the paper\n      \u003cem\u003eFunctional Programming with Overloading and Higher-Order Polymorphism\u003c/em\u003e,\n        Mark P Jones (\u003ca\u003ehttp://web.cecs.pdx.edu/~mpj/\u003c/a\u003e)\n          Advanced School of Functional Programming, 1995.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.State.Strict",
        "fct-package": "mtl",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-State-Strict.html",
        "fct-type": "module",
        "title": "Strict"
      },
      "index": {
        "description": "Strict state monads This module is inspired by the paper Functional Programming with Overloading and Higher-Order Polymorphism Mark Jones http web.cecs.pdx.edu mpj Advanced School of Functional Programming",
        "hierarchy": "Control Monad State Strict",
        "module": "Control.Monad.State.Strict",
        "name": "Strict",
        "normalized": "",
        "package": "mtl",
        "partial": "Strict",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Strict.html#t:MonadState",
      "description": {
        "fct-descr": "\u003cp\u003eMinimal definition is either both of \u003ccode\u003eget\u003c/code\u003e and \u003ccode\u003eput\u003c/code\u003e or just \u003ccode\u003estate\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Monad.State.Strict",
        "fct-package": "mtl",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-State-Class.html#MonadState",
        "fct-type": "class",
        "title": "MonadState"
      },
      "index": {
        "description": "Minimal definition is either both of get and put or just state",
        "hierarchy": "Control Monad State Strict",
        "module": "Control.Monad.State.Strict",
        "name": "MonadState",
        "normalized": "",
        "package": "mtl",
        "partial": "Monad State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Strict.html#t:State",
      "description": {
        "fct-descr": "\u003cp\u003eA state monad parameterized by the type \u003ccode\u003es\u003c/code\u003e of the state to carry.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e function leaves the state unchanged, while \u003ccode\u003e\u003e\u003e=\u003c/code\u003e uses\n the final state of the first computation as the initial state of\n the second.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.State.Strict",
        "fct-package": "mtl",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "State"
      },
      "index": {
        "description": "state monad parameterized by the type of the state to carry The return function leaves the state unchanged while uses the final state of the first computation as the initial state of the second",
        "hierarchy": "Control Monad State Strict",
        "module": "Control.Monad.State.Strict",
        "name": "State",
        "normalized": "",
        "package": "mtl",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Strict.html#t:StateT",
      "description": {
        "fct-descr": "\u003cp\u003eA state transformer monad parameterized by:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003es\u003c/code\u003e - The state.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003em\u003c/code\u003e - The inner monad.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e function leaves the state unchanged, while \u003ccode\u003e\u003e\u003e=\u003c/code\u003e uses\n the final state of the first computation as the initial state of\n the second.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.State.Strict",
        "fct-package": "mtl",
        "fct-signature": "newtype",
        "fct-type": "newtype",
        "title": "StateT"
      },
      "index": {
        "description": "state transformer monad parameterized by The state The inner monad The return function leaves the state unchanged while uses the final state of the first computation as the initial state of the second",
        "hierarchy": "Control Monad State Strict",
        "module": "Control.Monad.State.Strict",
        "name": "StateT",
        "normalized": "",
        "package": "mtl",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Strict.html#v:StateT",
      "description": {
        "fct-module": "Control.Monad.State.Strict",
        "fct-package": "mtl",
        "fct-signature": "StateT",
        "fct-type": "function",
        "title": "StateT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad State Strict",
        "module": "Control.Monad.State.Strict",
        "name": "StateT",
        "normalized": "",
        "package": "mtl",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Strict.html#v:evalState",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate a state computation with the given initial state\n and return the final value, discarding the final state.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eevalState\u003c/a\u003e\u003c/code\u003e m s = \u003ccode\u003e\u003ca\u003efst\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003erunState\u003c/a\u003e\u003c/code\u003e m s)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.State.Strict",
        "fct-package": "mtl",
        "fct-signature": "State s a-\u003e s-\u003e a",
        "fct-type": "function",
        "title": "evalState"
      },
      "index": {
        "description": "Evaluate state computation with the given initial state and return the final value discarding the final state evalState fst runState",
        "hierarchy": "Control Monad State Strict",
        "module": "Control.Monad.State.Strict",
        "name": "evalState",
        "normalized": "State a b-\u003ea-\u003eb",
        "package": "mtl",
        "partial": "State",
        "signature": "State s a-\u003es-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Strict.html#v:evalStateT",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate a state computation with the given initial state\n and return the final value, discarding the final state.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eevalStateT\u003c/a\u003e\u003c/code\u003e m s = \u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003efst\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003erunStateT\u003c/a\u003e\u003c/code\u003e m s)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.State.Strict",
        "fct-package": "mtl",
        "fct-signature": "StateT s m a -\u003e s -\u003e m a",
        "fct-type": "function",
        "title": "evalStateT"
      },
      "index": {
        "description": "Evaluate state computation with the given initial state and return the final value discarding the final state evalStateT liftM fst runStateT",
        "hierarchy": "Control Monad State Strict",
        "module": "Control.Monad.State.Strict",
        "name": "evalStateT",
        "normalized": "StateT a b c-\u003ea-\u003eb c",
        "package": "mtl",
        "partial": "State",
        "signature": "StateT s m a-\u003es-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Strict.html#v:execState",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate a state computation with the given initial state\n and return the final state, discarding the final value.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eexecState\u003c/a\u003e\u003c/code\u003e m s = \u003ccode\u003e\u003ca\u003esnd\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003erunState\u003c/a\u003e\u003c/code\u003e m s)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.State.Strict",
        "fct-package": "mtl",
        "fct-signature": "State s a-\u003e s-\u003e s",
        "fct-type": "function",
        "title": "execState"
      },
      "index": {
        "description": "Evaluate state computation with the given initial state and return the final state discarding the final value execState snd runState",
        "hierarchy": "Control Monad State Strict",
        "module": "Control.Monad.State.Strict",
        "name": "execState",
        "normalized": "State a b-\u003ea-\u003ea",
        "package": "mtl",
        "partial": "State",
        "signature": "State s a-\u003es-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Strict.html#v:execStateT",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate a state computation with the given initial state\n and return the final state, discarding the final value.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eexecStateT\u003c/a\u003e\u003c/code\u003e m s = \u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003esnd\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003erunStateT\u003c/a\u003e\u003c/code\u003e m s)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.State.Strict",
        "fct-package": "mtl",
        "fct-signature": "StateT s m a -\u003e s -\u003e m s",
        "fct-type": "function",
        "title": "execStateT"
      },
      "index": {
        "description": "Evaluate state computation with the given initial state and return the final state discarding the final value execStateT liftM snd runStateT",
        "hierarchy": "Control Monad State Strict",
        "module": "Control.Monad.State.Strict",
        "name": "execStateT",
        "normalized": "StateT a b c-\u003ea-\u003eb a",
        "package": "mtl",
        "partial": "State",
        "signature": "StateT s m a-\u003es-\u003em s"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Strict.html#v:get",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the state from the internals of the monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.State.Strict",
        "fct-package": "mtl",
        "fct-signature": "m s",
        "fct-source": "src/Control-Monad-State-Class.html#get",
        "fct-type": "method",
        "title": "get"
      },
      "index": {
        "description": "Return the state from the internals of the monad",
        "hierarchy": "Control Monad State Strict",
        "module": "Control.Monad.State.Strict",
        "name": "get",
        "normalized": "",
        "package": "mtl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Strict.html#v:gets",
      "description": {
        "fct-descr": "\u003cp\u003eGets specific component of the state, using a projection function\n supplied.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.State.Strict",
        "fct-package": "mtl",
        "fct-signature": "(s -\u003e a) -\u003e m a",
        "fct-source": "src/Control-Monad-State-Class.html#gets",
        "fct-type": "function",
        "title": "gets"
      },
      "index": {
        "description": "Gets specific component of the state using projection function supplied",
        "hierarchy": "Control Monad State Strict",
        "module": "Control.Monad.State.Strict",
        "name": "gets",
        "normalized": "(a-\u003eb)-\u003ec b",
        "package": "mtl",
        "partial": "",
        "signature": "(s-\u003ea)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Strict.html#v:mapState",
      "description": {
        "fct-descr": "\u003cp\u003eMap both the return value and final state of a computation using\n the given function.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunState\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003emapState\u003c/a\u003e\u003c/code\u003e f m) = f . \u003ccode\u003e\u003ca\u003erunState\u003c/a\u003e\u003c/code\u003e m\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.State.Strict",
        "fct-package": "mtl",
        "fct-signature": "((a, s) -\u003e (b, s)) -\u003e State s a -\u003e State s b",
        "fct-type": "function",
        "title": "mapState"
      },
      "index": {
        "description": "Map both the return value and final state of computation using the given function runState mapState runState",
        "hierarchy": "Control Monad State Strict",
        "module": "Control.Monad.State.Strict",
        "name": "mapState",
        "normalized": "((a,b)-\u003e(c,b))-\u003eState b a-\u003eState b c",
        "package": "mtl",
        "partial": "State",
        "signature": "((a,s)-\u003e(b,s))-\u003eState s a-\u003eState s b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Strict.html#v:mapStateT",
      "description": {
        "fct-descr": "\u003cp\u003eMap both the return value and final state of a computation using\n the given function.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunStateT\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003emapStateT\u003c/a\u003e\u003c/code\u003e f m) = f . \u003ccode\u003e\u003ca\u003erunStateT\u003c/a\u003e\u003c/code\u003e m\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.State.Strict",
        "fct-package": "mtl",
        "fct-signature": "(m (a, s) -\u003e n (b, s)) -\u003e StateT s m a -\u003e StateT s n b",
        "fct-type": "function",
        "title": "mapStateT"
      },
      "index": {
        "description": "Map both the return value and final state of computation using the given function runStateT mapStateT runStateT",
        "hierarchy": "Control Monad State Strict",
        "module": "Control.Monad.State.Strict",
        "name": "mapStateT",
        "normalized": "(a(b,c)-\u003ed(e,c))-\u003eStateT c a b-\u003eStateT c d e",
        "package": "mtl",
        "partial": "State",
        "signature": "(m(a,s)-\u003en(b,s))-\u003eStateT s m a-\u003eStateT s n b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Strict.html#v:modify",
      "description": {
        "fct-descr": "\u003cp\u003eMonadic state transformer.\n\u003c/p\u003e\u003cp\u003eMaps an old state to a new state inside a state monad.\n      The old state is thrown away.\n\u003c/p\u003e\u003cpre\u003e      Main\u003e :t modify ((+1) :: Int -\u003e Int)\n      modify (...) :: (MonadState Int a) =\u003e a ()\n\u003c/pre\u003e\u003cp\u003eThis says that \u003ccode\u003emodify (+1)\u003c/code\u003e acts over any\n    Monad that is a member of the \u003ccode\u003eMonadState\u003c/code\u003e class,\n    with an \u003ccode\u003eInt\u003c/code\u003e state.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.State.Strict",
        "fct-package": "mtl",
        "fct-signature": "(s -\u003e s) -\u003e m ()",
        "fct-source": "src/Control-Monad-State-Class.html#modify",
        "fct-type": "function",
        "title": "modify"
      },
      "index": {
        "description": "Monadic state transformer Maps an old state to new state inside state monad The old state is thrown away Main modify Int Int modify MonadState Int This says that modify acts over any Monad that is member of the MonadState class with an Int state",
        "hierarchy": "Control Monad State Strict",
        "module": "Control.Monad.State.Strict",
        "name": "modify",
        "normalized": "(a-\u003ea)-\u003eb()",
        "package": "mtl",
        "partial": "",
        "signature": "(s-\u003es)-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Strict.html#v:put",
      "description": {
        "fct-descr": "\u003cp\u003eReplace the state inside the monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.State.Strict",
        "fct-package": "mtl",
        "fct-signature": "s -\u003e m ()",
        "fct-source": "src/Control-Monad-State-Class.html#put",
        "fct-type": "method",
        "title": "put"
      },
      "index": {
        "description": "Replace the state inside the monad",
        "hierarchy": "Control Monad State Strict",
        "module": "Control.Monad.State.Strict",
        "name": "put",
        "normalized": "a-\u003eb()",
        "package": "mtl",
        "partial": "",
        "signature": "s-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Strict.html#v:runState",
      "description": {
        "fct-descr": "\u003cp\u003eUnwrap a state monad computation as a function.\n (The inverse of \u003ccode\u003e\u003ca\u003estate\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e",
        "fct-module": "Control.Monad.State.Strict",
        "fct-package": "mtl",
        "fct-signature": "State s a-\u003e s-\u003e (a, s)",
        "fct-type": "function",
        "title": "runState"
      },
      "index": {
        "description": "Unwrap state monad computation as function The inverse of state",
        "hierarchy": "Control Monad State Strict",
        "module": "Control.Monad.State.Strict",
        "name": "runState",
        "normalized": "State a b-\u003ea-\u003e(b,a)",
        "package": "mtl",
        "partial": "State",
        "signature": "State s a-\u003es-\u003e(a,s)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Strict.html#v:runStateT",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.State.Strict",
        "fct-package": "mtl",
        "fct-signature": "s -\u003e m (a, s)",
        "fct-type": "function",
        "title": "runStateT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad State Strict",
        "module": "Control.Monad.State.Strict",
        "name": "runStateT",
        "normalized": "a-\u003eb(c,a)",
        "package": "mtl",
        "partial": "State",
        "signature": "s-\u003em(a,s)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Strict.html#v:state",
      "description": {
        "fct-descr": "\u003cp\u003eEmbed a simple state action into the monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.State.Strict",
        "fct-package": "mtl",
        "fct-signature": "(s -\u003e (a, s)) -\u003e m a",
        "fct-source": "src/Control-Monad-State-Class.html#state",
        "fct-type": "method",
        "title": "state"
      },
      "index": {
        "description": "Embed simple state action into the monad",
        "hierarchy": "Control Monad State Strict",
        "module": "Control.Monad.State.Strict",
        "name": "state",
        "normalized": "(a-\u003e(b,a))-\u003ec b",
        "package": "mtl",
        "partial": "",
        "signature": "(s-\u003e(a,s))-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Strict.html#v:withState",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ewithState\u003c/a\u003e\u003c/code\u003e f m\u003c/code\u003e executes action \u003ccode\u003em\u003c/code\u003e on a state modified by\n applying \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003ewithState\u003c/a\u003e\u003c/code\u003e f m = \u003ccode\u003e\u003ca\u003emodify\u003c/a\u003e\u003c/code\u003e f \u003e\u003e m\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.State.Strict",
        "fct-package": "mtl",
        "fct-signature": "(s -\u003e s) -\u003e State s a -\u003e State s a",
        "fct-type": "function",
        "title": "withState"
      },
      "index": {
        "description": "withState executes action on state modified by applying withState modify",
        "hierarchy": "Control Monad State Strict",
        "module": "Control.Monad.State.Strict",
        "name": "withState",
        "normalized": "(a-\u003ea)-\u003eState a b-\u003eState a b",
        "package": "mtl",
        "partial": "State",
        "signature": "(s-\u003es)-\u003eState s a-\u003eState s a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-State-Strict.html#v:withStateT",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ewithStateT\u003c/a\u003e\u003c/code\u003e f m\u003c/code\u003e executes action \u003ccode\u003em\u003c/code\u003e on a state modified by\n applying \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003ewithStateT\u003c/a\u003e\u003c/code\u003e f m = \u003ccode\u003e\u003ca\u003emodify\u003c/a\u003e\u003c/code\u003e f \u003e\u003e m\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.State.Strict",
        "fct-package": "mtl",
        "fct-signature": "(s -\u003e s) -\u003e StateT s m a -\u003e StateT s m a",
        "fct-type": "function",
        "title": "withStateT"
      },
      "index": {
        "description": "withStateT executes action on state modified by applying withStateT modify",
        "hierarchy": "Control Monad State Strict",
        "module": "Control.Monad.State.Strict",
        "name": "withStateT",
        "normalized": "(a-\u003ea)-\u003eStateT a b c-\u003eStateT a b c",
        "package": "mtl",
        "partial": "State",
        "signature": "(s-\u003es)-\u003eStateT s m a-\u003eStateT s m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-State.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eState monads.\n\u003c/p\u003e\u003cp\u003eThis module is inspired by the paper\n      \u003cem\u003eFunctional Programming with Overloading and Higher-Order Polymorphism\u003c/em\u003e,\n        Mark P Jones (\u003ca\u003ehttp://web.cecs.pdx.edu/~mpj/\u003c/a\u003e)\n          Advanced School of Functional Programming, 1995.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.State",
        "fct-package": "mtl",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-State.html",
        "fct-type": "module",
        "title": "State"
      },
      "index": {
        "description": "State monads This module is inspired by the paper Functional Programming with Overloading and Higher-Order Polymorphism Mark Jones http web.cecs.pdx.edu mpj Advanced School of Functional Programming",
        "hierarchy": "Control Monad State",
        "module": "Control.Monad.State",
        "name": "State",
        "normalized": "",
        "package": "mtl",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Trans.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eClasses for monad transformers.\n\u003c/p\u003e\u003cp\u003eA monad transformer makes new monad out of an existing monad, such\n that computations of the old monad may be embedded in the new one.\n To construct a monad with a desired set of features, one typically\n starts with a base monad, such as \u003ccode\u003eIdentity\u003c/code\u003e, \u003ccode\u003e[]\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e, and\n applies a sequence of monad transformers.\n\u003c/p\u003e\u003cp\u003eMost monad transformer modules include the special case of applying the\n transformer to \u003ccode\u003eIdentity\u003c/code\u003e.  For example, \u003ccode\u003eState s\u003c/code\u003e is an abbreviation\n for \u003ccode\u003eStateT s Identity\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eEach monad transformer also comes with an operation \u003ccode\u003erun\u003c/code\u003e\u003cem\u003eXXX\u003c/em\u003e to\n unwrap the transformer, exposing a computation of the inner monad.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Trans",
        "fct-package": "mtl",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Trans.html",
        "fct-type": "module",
        "title": "Trans"
      },
      "index": {
        "description": "Classes for monad transformers monad transformer makes new monad out of an existing monad such that computations of the old monad may be embedded in the new one To construct monad with desired set of features one typically starts with base monad such as Identity or IO and applies sequence of monad transformers Most monad transformer modules include the special case of applying the transformer to Identity For example State is an abbreviation for StateT Identity Each monad transformer also comes with an operation run XXX to unwrap the transformer exposing computation of the inner monad",
        "hierarchy": "Control Monad Trans",
        "module": "Control.Monad.Trans",
        "name": "Trans",
        "normalized": "",
        "package": "mtl",
        "partial": "Trans",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Class.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe MonadWriter class.\n\u003c/p\u003e\u003cp\u003eInspired by the paper\n      \u003cem\u003eFunctional Programming with Overloading and Higher-Order Polymorphism\u003c/em\u003e,\n        Mark P Jones (\u003ca\u003ehttp://web.cecs.pdx.edu/~mpj/pubs/springschool.html\u003c/a\u003e)\n          Advanced School of Functional Programming, 1995.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Writer.Class",
        "fct-package": "mtl",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Writer-Class.html",
        "fct-type": "module",
        "title": "Class"
      },
      "index": {
        "description": "The MonadWriter class Inspired by the paper Functional Programming with Overloading and Higher-Order Polymorphism Mark Jones http web.cecs.pdx.edu mpj pubs springschool.html Advanced School of Functional Programming",
        "hierarchy": "Control Monad Writer Class",
        "module": "Control.Monad.Writer.Class",
        "name": "Class",
        "normalized": "",
        "package": "mtl",
        "partial": "Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Class.html#t:MonadWriter",
      "description": {
        "fct-module": "Control.Monad.Writer.Class",
        "fct-package": "mtl",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Writer-Class.html#MonadWriter",
        "fct-type": "class",
        "title": "MonadWriter"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Writer Class",
        "module": "Control.Monad.Writer.Class",
        "name": "MonadWriter",
        "normalized": "",
        "package": "mtl",
        "partial": "Monad Writer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Class.html#v:censor",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ecensor\u003c/a\u003e\u003c/code\u003e f m\u003c/code\u003e is an action that executes the action \u003ccode\u003em\u003c/code\u003e and\n applies the function \u003ccode\u003ef\u003c/code\u003e to its output, leaving the return value\n unchanged.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003ecensor\u003c/a\u003e\u003c/code\u003e f m = \u003ccode\u003e\u003ca\u003epass\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e (\\x -\u003e (x,f)) m)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Writer.Class",
        "fct-package": "mtl",
        "fct-signature": "(w -\u003e w) -\u003e m a -\u003e m a",
        "fct-source": "src/Control-Monad-Writer-Class.html#censor",
        "fct-type": "function",
        "title": "censor"
      },
      "index": {
        "description": "censor is an action that executes the action and applies the function to its output leaving the return value unchanged censor pass liftM",
        "hierarchy": "Control Monad Writer Class",
        "module": "Control.Monad.Writer.Class",
        "name": "censor",
        "normalized": "(a-\u003ea)-\u003eb c-\u003eb c",
        "package": "mtl",
        "partial": "",
        "signature": "(w-\u003ew)-\u003em a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Class.html#v:listen",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003elisten\u003c/a\u003e\u003c/code\u003e m\u003c/code\u003e is an action that executes the action \u003ccode\u003em\u003c/code\u003e and adds\n its output to the value of the computation.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Writer.Class",
        "fct-package": "mtl",
        "fct-signature": "m a -\u003e m (a, w)",
        "fct-source": "src/Control-Monad-Writer-Class.html#listen",
        "fct-type": "method",
        "title": "listen"
      },
      "index": {
        "description": "listen is an action that executes the action and adds its output to the value of the computation",
        "hierarchy": "Control Monad Writer Class",
        "module": "Control.Monad.Writer.Class",
        "name": "listen",
        "normalized": "a b-\u003ea(b,c)",
        "package": "mtl",
        "partial": "",
        "signature": "m a-\u003em(a,w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Class.html#v:listens",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003elistens\u003c/a\u003e\u003c/code\u003e f m\u003c/code\u003e is an action that executes the action \u003ccode\u003em\u003c/code\u003e and adds\n the result of applying \u003ccode\u003ef\u003c/code\u003e to the output to the value of the computation.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003elistens\u003c/a\u003e\u003c/code\u003e f m = \u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e (id *** f) (\u003ccode\u003e\u003ca\u003elisten\u003c/a\u003e\u003c/code\u003e m)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Writer.Class",
        "fct-package": "mtl",
        "fct-signature": "(w -\u003e b) -\u003e m a -\u003e m (a, b)",
        "fct-source": "src/Control-Monad-Writer-Class.html#listens",
        "fct-type": "function",
        "title": "listens"
      },
      "index": {
        "description": "listens is an action that executes the action and adds the result of applying to the output to the value of the computation listens liftM id listen",
        "hierarchy": "Control Monad Writer Class",
        "module": "Control.Monad.Writer.Class",
        "name": "listens",
        "normalized": "(a-\u003eb)-\u003ec d-\u003ec(d,b)",
        "package": "mtl",
        "partial": "",
        "signature": "(w-\u003eb)-\u003em a-\u003em(a,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Class.html#v:pass",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003epass\u003c/a\u003e\u003c/code\u003e m\u003c/code\u003e is an action that executes the action \u003ccode\u003em\u003c/code\u003e, which\n returns a value and a function, and returns the value, applying\n the function to the output.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Writer.Class",
        "fct-package": "mtl",
        "fct-signature": "m (a, w -\u003e w) -\u003e m a",
        "fct-source": "src/Control-Monad-Writer-Class.html#pass",
        "fct-type": "method",
        "title": "pass"
      },
      "index": {
        "description": "pass is an action that executes the action which returns value and function and returns the value applying the function to the output",
        "hierarchy": "Control Monad Writer Class",
        "module": "Control.Monad.Writer.Class",
        "name": "pass",
        "normalized": "a(b,c-\u003ec)-\u003ea b",
        "package": "mtl",
        "partial": "",
        "signature": "m(a,w-\u003ew)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Class.html#v:tell",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003etell\u003c/a\u003e\u003c/code\u003e w\u003c/code\u003e is an action that produces the output \u003ccode\u003ew\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Writer.Class",
        "fct-package": "mtl",
        "fct-signature": "w -\u003e m ()",
        "fct-source": "src/Control-Monad-Writer-Class.html#tell",
        "fct-type": "method",
        "title": "tell"
      },
      "index": {
        "description": "tell is an action that produces the output",
        "hierarchy": "Control Monad Writer Class",
        "module": "Control.Monad.Writer.Class",
        "name": "tell",
        "normalized": "a-\u003eb()",
        "package": "mtl",
        "partial": "",
        "signature": "w-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Class.html#v:writer",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ewriter\u003c/a\u003e\u003c/code\u003e (a,w)\u003c/code\u003e embeds a simple writer action.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Writer.Class",
        "fct-package": "mtl",
        "fct-signature": "(a, w) -\u003e m a",
        "fct-source": "src/Control-Monad-Writer-Class.html#writer",
        "fct-type": "method",
        "title": "writer"
      },
      "index": {
        "description": "writer embeds simple writer action",
        "hierarchy": "Control Monad Writer Class",
        "module": "Control.Monad.Writer.Class",
        "name": "writer",
        "normalized": "(a,b)-\u003ec a",
        "package": "mtl",
        "partial": "",
        "signature": "(a,w)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Lazy.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLazy writer monads.\n\u003c/p\u003e\u003cp\u003eInspired by the paper\n      \u003cem\u003eFunctional Programming with Overloading and Higher-Order Polymorphism\u003c/em\u003e,\n        Mark P Jones (\u003ca\u003ehttp://web.cecs.pdx.edu/~mpj/pubs/springschool.html\u003c/a\u003e)\n          Advanced School of Functional Programming, 1995.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Writer.Lazy",
        "fct-package": "mtl",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Writer-Lazy.html",
        "fct-type": "module",
        "title": "Lazy"
      },
      "index": {
        "description": "Lazy writer monads Inspired by the paper Functional Programming with Overloading and Higher-Order Polymorphism Mark Jones http web.cecs.pdx.edu mpj pubs springschool.html Advanced School of Functional Programming",
        "hierarchy": "Control Monad Writer Lazy",
        "module": "Control.Monad.Writer.Lazy",
        "name": "Lazy",
        "normalized": "",
        "package": "mtl",
        "partial": "Lazy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Lazy.html#t:MonadWriter",
      "description": {
        "fct-module": "Control.Monad.Writer.Lazy",
        "fct-package": "mtl",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Writer-Class.html#MonadWriter",
        "fct-type": "class",
        "title": "MonadWriter"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Writer Lazy",
        "module": "Control.Monad.Writer.Lazy",
        "name": "MonadWriter",
        "normalized": "",
        "package": "mtl",
        "partial": "Monad Writer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Lazy.html#t:Writer",
      "description": {
        "fct-descr": "\u003cp\u003eA writer monad parameterized by the type \u003ccode\u003ew\u003c/code\u003e of output to accumulate.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e function produces the output \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e, while \u003ccode\u003e\u003e\u003e=\u003c/code\u003e\n combines the outputs of the subcomputations using \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Writer.Lazy",
        "fct-package": "mtl",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "Writer"
      },
      "index": {
        "description": "writer monad parameterized by the type of output to accumulate The return function produces the output mempty while combines the outputs of the subcomputations using mappend",
        "hierarchy": "Control Monad Writer Lazy",
        "module": "Control.Monad.Writer.Lazy",
        "name": "Writer",
        "normalized": "",
        "package": "mtl",
        "partial": "Writer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Lazy.html#t:WriterT",
      "description": {
        "fct-descr": "\u003cp\u003eA writer monad parameterized by:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003ew\u003c/code\u003e - the output to accumulate.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003em\u003c/code\u003e - The inner monad.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e function produces the output \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e, while \u003ccode\u003e\u003e\u003e=\u003c/code\u003e\n combines the outputs of the subcomputations using \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Writer.Lazy",
        "fct-package": "mtl",
        "fct-signature": "newtype",
        "fct-type": "newtype",
        "title": "WriterT"
      },
      "index": {
        "description": "writer monad parameterized by the output to accumulate The inner monad The return function produces the output mempty while combines the outputs of the subcomputations using mappend",
        "hierarchy": "Control Monad Writer Lazy",
        "module": "Control.Monad.Writer.Lazy",
        "name": "WriterT",
        "normalized": "",
        "package": "mtl",
        "partial": "Writer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Lazy.html#v:WriterT",
      "description": {
        "fct-module": "Control.Monad.Writer.Lazy",
        "fct-package": "mtl",
        "fct-signature": "WriterT",
        "fct-type": "function",
        "title": "WriterT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Writer Lazy",
        "module": "Control.Monad.Writer.Lazy",
        "name": "WriterT",
        "normalized": "",
        "package": "mtl",
        "partial": "Writer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Lazy.html#v:censor",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ecensor\u003c/a\u003e\u003c/code\u003e f m\u003c/code\u003e is an action that executes the action \u003ccode\u003em\u003c/code\u003e and\n applies the function \u003ccode\u003ef\u003c/code\u003e to its output, leaving the return value\n unchanged.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003ecensor\u003c/a\u003e\u003c/code\u003e f m = \u003ccode\u003e\u003ca\u003epass\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e (\\x -\u003e (x,f)) m)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Writer.Lazy",
        "fct-package": "mtl",
        "fct-signature": "(w -\u003e w) -\u003e m a -\u003e m a",
        "fct-source": "src/Control-Monad-Writer-Class.html#censor",
        "fct-type": "function",
        "title": "censor"
      },
      "index": {
        "description": "censor is an action that executes the action and applies the function to its output leaving the return value unchanged censor pass liftM",
        "hierarchy": "Control Monad Writer Lazy",
        "module": "Control.Monad.Writer.Lazy",
        "name": "censor",
        "normalized": "(a-\u003ea)-\u003eb c-\u003eb c",
        "package": "mtl",
        "partial": "",
        "signature": "(w-\u003ew)-\u003em a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Lazy.html#v:execWriter",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the output from a writer computation.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eexecWriter\u003c/a\u003e\u003c/code\u003e m = \u003ccode\u003e\u003ca\u003esnd\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003erunWriter\u003c/a\u003e\u003c/code\u003e m)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Writer.Lazy",
        "fct-package": "mtl",
        "fct-signature": "Writer w a -\u003e w",
        "fct-type": "function",
        "title": "execWriter"
      },
      "index": {
        "description": "Extract the output from writer computation execWriter snd runWriter",
        "hierarchy": "Control Monad Writer Lazy",
        "module": "Control.Monad.Writer.Lazy",
        "name": "execWriter",
        "normalized": "Writer a b-\u003ea",
        "package": "mtl",
        "partial": "Writer",
        "signature": "Writer w a-\u003ew"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Lazy.html#v:execWriterT",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the output from a writer computation.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eexecWriterT\u003c/a\u003e\u003c/code\u003e m = \u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003esnd\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003erunWriterT\u003c/a\u003e\u003c/code\u003e m)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Writer.Lazy",
        "fct-package": "mtl",
        "fct-signature": "WriterT w m a -\u003e m w",
        "fct-type": "function",
        "title": "execWriterT"
      },
      "index": {
        "description": "Extract the output from writer computation execWriterT liftM snd runWriterT",
        "hierarchy": "Control Monad Writer Lazy",
        "module": "Control.Monad.Writer.Lazy",
        "name": "execWriterT",
        "normalized": "WriterT a b c-\u003eb a",
        "package": "mtl",
        "partial": "Writer",
        "signature": "WriterT w m a-\u003em w"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Lazy.html#v:listen",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003elisten\u003c/a\u003e\u003c/code\u003e m\u003c/code\u003e is an action that executes the action \u003ccode\u003em\u003c/code\u003e and adds\n its output to the value of the computation.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Writer.Lazy",
        "fct-package": "mtl",
        "fct-signature": "m a -\u003e m (a, w)",
        "fct-source": "src/Control-Monad-Writer-Class.html#listen",
        "fct-type": "method",
        "title": "listen"
      },
      "index": {
        "description": "listen is an action that executes the action and adds its output to the value of the computation",
        "hierarchy": "Control Monad Writer Lazy",
        "module": "Control.Monad.Writer.Lazy",
        "name": "listen",
        "normalized": "a b-\u003ea(b,c)",
        "package": "mtl",
        "partial": "",
        "signature": "m a-\u003em(a,w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Lazy.html#v:listens",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003elistens\u003c/a\u003e\u003c/code\u003e f m\u003c/code\u003e is an action that executes the action \u003ccode\u003em\u003c/code\u003e and adds\n the result of applying \u003ccode\u003ef\u003c/code\u003e to the output to the value of the computation.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003elistens\u003c/a\u003e\u003c/code\u003e f m = \u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e (id *** f) (\u003ccode\u003e\u003ca\u003elisten\u003c/a\u003e\u003c/code\u003e m)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Writer.Lazy",
        "fct-package": "mtl",
        "fct-signature": "(w -\u003e b) -\u003e m a -\u003e m (a, b)",
        "fct-source": "src/Control-Monad-Writer-Class.html#listens",
        "fct-type": "function",
        "title": "listens"
      },
      "index": {
        "description": "listens is an action that executes the action and adds the result of applying to the output to the value of the computation listens liftM id listen",
        "hierarchy": "Control Monad Writer Lazy",
        "module": "Control.Monad.Writer.Lazy",
        "name": "listens",
        "normalized": "(a-\u003eb)-\u003ec d-\u003ec(d,b)",
        "package": "mtl",
        "partial": "",
        "signature": "(w-\u003eb)-\u003em a-\u003em(a,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Lazy.html#v:mapWriter",
      "description": {
        "fct-descr": "\u003cp\u003eMap both the return value and output of a computation using\n the given function.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunWriter\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003emapWriter\u003c/a\u003e\u003c/code\u003e f m) = f (\u003ccode\u003e\u003ca\u003erunWriter\u003c/a\u003e\u003c/code\u003e m)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Writer.Lazy",
        "fct-package": "mtl",
        "fct-signature": "((a, w) -\u003e (b, w')) -\u003e Writer w a -\u003e Writer w' b",
        "fct-type": "function",
        "title": "mapWriter"
      },
      "index": {
        "description": "Map both the return value and output of computation using the given function runWriter mapWriter runWriter",
        "hierarchy": "Control Monad Writer Lazy",
        "module": "Control.Monad.Writer.Lazy",
        "name": "mapWriter",
        "normalized": "((a,b)-\u003e(c,d))-\u003eWriter b a-\u003eWriter d c",
        "package": "mtl",
        "partial": "Writer",
        "signature": "((a,w)-\u003e(b,w'))-\u003eWriter w a-\u003eWriter w' b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Lazy.html#v:mapWriterT",
      "description": {
        "fct-descr": "\u003cp\u003eMap both the return value and output of a computation using\n the given function.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunWriterT\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003emapWriterT\u003c/a\u003e\u003c/code\u003e f m) = f (\u003ccode\u003e\u003ca\u003erunWriterT\u003c/a\u003e\u003c/code\u003e m)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Writer.Lazy",
        "fct-package": "mtl",
        "fct-signature": "(m (a, w) -\u003e n (b, w')) -\u003e WriterT w m a -\u003e WriterT w' n b",
        "fct-type": "function",
        "title": "mapWriterT"
      },
      "index": {
        "description": "Map both the return value and output of computation using the given function runWriterT mapWriterT runWriterT",
        "hierarchy": "Control Monad Writer Lazy",
        "module": "Control.Monad.Writer.Lazy",
        "name": "mapWriterT",
        "normalized": "(a(b,c)-\u003ed(e,f))-\u003eWriterT c a b-\u003eWriterT f d e",
        "package": "mtl",
        "partial": "Writer",
        "signature": "(m(a,w)-\u003en(b,w'))-\u003eWriterT w m a-\u003eWriterT w' n b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Lazy.html#v:pass",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003epass\u003c/a\u003e\u003c/code\u003e m\u003c/code\u003e is an action that executes the action \u003ccode\u003em\u003c/code\u003e, which\n returns a value and a function, and returns the value, applying\n the function to the output.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Writer.Lazy",
        "fct-package": "mtl",
        "fct-signature": "m (a, w -\u003e w) -\u003e m a",
        "fct-source": "src/Control-Monad-Writer-Class.html#pass",
        "fct-type": "method",
        "title": "pass"
      },
      "index": {
        "description": "pass is an action that executes the action which returns value and function and returns the value applying the function to the output",
        "hierarchy": "Control Monad Writer Lazy",
        "module": "Control.Monad.Writer.Lazy",
        "name": "pass",
        "normalized": "a(b,c-\u003ec)-\u003ea b",
        "package": "mtl",
        "partial": "",
        "signature": "m(a,w-\u003ew)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Lazy.html#v:runWriter",
      "description": {
        "fct-descr": "\u003cp\u003eUnwrap a writer computation as a (result, output) pair.\n (The inverse of \u003ccode\u003e\u003ca\u003ewriter\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Writer.Lazy",
        "fct-package": "mtl",
        "fct-signature": "Writer w a -\u003e (a, w)",
        "fct-type": "function",
        "title": "runWriter"
      },
      "index": {
        "description": "Unwrap writer computation as result output pair The inverse of writer",
        "hierarchy": "Control Monad Writer Lazy",
        "module": "Control.Monad.Writer.Lazy",
        "name": "runWriter",
        "normalized": "Writer a b-\u003e(b,a)",
        "package": "mtl",
        "partial": "Writer",
        "signature": "Writer w a-\u003e(a,w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Lazy.html#v:runWriterT",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Writer.Lazy",
        "fct-package": "mtl",
        "fct-signature": "m (a, w)",
        "fct-type": "function",
        "title": "runWriterT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Writer Lazy",
        "module": "Control.Monad.Writer.Lazy",
        "name": "runWriterT",
        "normalized": "a(b,c)",
        "package": "mtl",
        "partial": "Writer",
        "signature": "m(a,w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Lazy.html#v:tell",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003etell\u003c/a\u003e\u003c/code\u003e w\u003c/code\u003e is an action that produces the output \u003ccode\u003ew\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Writer.Lazy",
        "fct-package": "mtl",
        "fct-signature": "w -\u003e m ()",
        "fct-source": "src/Control-Monad-Writer-Class.html#tell",
        "fct-type": "method",
        "title": "tell"
      },
      "index": {
        "description": "tell is an action that produces the output",
        "hierarchy": "Control Monad Writer Lazy",
        "module": "Control.Monad.Writer.Lazy",
        "name": "tell",
        "normalized": "a-\u003eb()",
        "package": "mtl",
        "partial": "",
        "signature": "w-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Lazy.html#v:writer",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ewriter\u003c/a\u003e\u003c/code\u003e (a,w)\u003c/code\u003e embeds a simple writer action.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Writer.Lazy",
        "fct-package": "mtl",
        "fct-signature": "(a, w) -\u003e m a",
        "fct-source": "src/Control-Monad-Writer-Class.html#writer",
        "fct-type": "method",
        "title": "writer"
      },
      "index": {
        "description": "writer embeds simple writer action",
        "hierarchy": "Control Monad Writer Lazy",
        "module": "Control.Monad.Writer.Lazy",
        "name": "writer",
        "normalized": "(a,b)-\u003ec a",
        "package": "mtl",
        "partial": "",
        "signature": "(a,w)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Strict.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eStrict writer monads.\n\u003c/p\u003e\u003cp\u003eInspired by the paper\n      \u003cem\u003eFunctional Programming with Overloading and Higher-Order Polymorphism\u003c/em\u003e,\n        Mark P Jones (\u003ca\u003ehttp://web.cecs.pdx.edu/~mpj/pubs/springschool.html\u003c/a\u003e)\n          Advanced School of Functional Programming, 1995.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Writer.Strict",
        "fct-package": "mtl",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Writer-Strict.html",
        "fct-type": "module",
        "title": "Strict"
      },
      "index": {
        "description": "Strict writer monads Inspired by the paper Functional Programming with Overloading and Higher-Order Polymorphism Mark Jones http web.cecs.pdx.edu mpj pubs springschool.html Advanced School of Functional Programming",
        "hierarchy": "Control Monad Writer Strict",
        "module": "Control.Monad.Writer.Strict",
        "name": "Strict",
        "normalized": "",
        "package": "mtl",
        "partial": "Strict",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Strict.html#t:MonadWriter",
      "description": {
        "fct-module": "Control.Monad.Writer.Strict",
        "fct-package": "mtl",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Writer-Class.html#MonadWriter",
        "fct-type": "class",
        "title": "MonadWriter"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Writer Strict",
        "module": "Control.Monad.Writer.Strict",
        "name": "MonadWriter",
        "normalized": "",
        "package": "mtl",
        "partial": "Monad Writer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Strict.html#t:Writer",
      "description": {
        "fct-descr": "\u003cp\u003eA writer monad parameterized by the type \u003ccode\u003ew\u003c/code\u003e of output to accumulate.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e function produces the output \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e, while \u003ccode\u003e\u003e\u003e=\u003c/code\u003e\n combines the outputs of the subcomputations using \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Writer.Strict",
        "fct-package": "mtl",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "Writer"
      },
      "index": {
        "description": "writer monad parameterized by the type of output to accumulate The return function produces the output mempty while combines the outputs of the subcomputations using mappend",
        "hierarchy": "Control Monad Writer Strict",
        "module": "Control.Monad.Writer.Strict",
        "name": "Writer",
        "normalized": "",
        "package": "mtl",
        "partial": "Writer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Strict.html#t:WriterT",
      "description": {
        "fct-descr": "\u003cp\u003eA writer monad parameterized by:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003ew\u003c/code\u003e - the output to accumulate.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003em\u003c/code\u003e - The inner monad.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e function produces the output \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e, while \u003ccode\u003e\u003e\u003e=\u003c/code\u003e\n combines the outputs of the subcomputations using \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Writer.Strict",
        "fct-package": "mtl",
        "fct-signature": "newtype",
        "fct-type": "newtype",
        "title": "WriterT"
      },
      "index": {
        "description": "writer monad parameterized by the output to accumulate The inner monad The return function produces the output mempty while combines the outputs of the subcomputations using mappend",
        "hierarchy": "Control Monad Writer Strict",
        "module": "Control.Monad.Writer.Strict",
        "name": "WriterT",
        "normalized": "",
        "package": "mtl",
        "partial": "Writer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Strict.html#v:WriterT",
      "description": {
        "fct-module": "Control.Monad.Writer.Strict",
        "fct-package": "mtl",
        "fct-signature": "WriterT",
        "fct-type": "function",
        "title": "WriterT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Writer Strict",
        "module": "Control.Monad.Writer.Strict",
        "name": "WriterT",
        "normalized": "",
        "package": "mtl",
        "partial": "Writer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Strict.html#v:censor",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ecensor\u003c/a\u003e\u003c/code\u003e f m\u003c/code\u003e is an action that executes the action \u003ccode\u003em\u003c/code\u003e and\n applies the function \u003ccode\u003ef\u003c/code\u003e to its output, leaving the return value\n unchanged.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003ecensor\u003c/a\u003e\u003c/code\u003e f m = \u003ccode\u003e\u003ca\u003epass\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e (\\x -\u003e (x,f)) m)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Writer.Strict",
        "fct-package": "mtl",
        "fct-signature": "(w -\u003e w) -\u003e m a -\u003e m a",
        "fct-source": "src/Control-Monad-Writer-Class.html#censor",
        "fct-type": "function",
        "title": "censor"
      },
      "index": {
        "description": "censor is an action that executes the action and applies the function to its output leaving the return value unchanged censor pass liftM",
        "hierarchy": "Control Monad Writer Strict",
        "module": "Control.Monad.Writer.Strict",
        "name": "censor",
        "normalized": "(a-\u003ea)-\u003eb c-\u003eb c",
        "package": "mtl",
        "partial": "",
        "signature": "(w-\u003ew)-\u003em a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Strict.html#v:execWriter",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the output from a writer computation.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eexecWriter\u003c/a\u003e\u003c/code\u003e m = \u003ccode\u003e\u003ca\u003esnd\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003erunWriter\u003c/a\u003e\u003c/code\u003e m)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Writer.Strict",
        "fct-package": "mtl",
        "fct-signature": "Writer w a -\u003e w",
        "fct-type": "function",
        "title": "execWriter"
      },
      "index": {
        "description": "Extract the output from writer computation execWriter snd runWriter",
        "hierarchy": "Control Monad Writer Strict",
        "module": "Control.Monad.Writer.Strict",
        "name": "execWriter",
        "normalized": "Writer a b-\u003ea",
        "package": "mtl",
        "partial": "Writer",
        "signature": "Writer w a-\u003ew"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Strict.html#v:execWriterT",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the output from a writer computation.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eexecWriterT\u003c/a\u003e\u003c/code\u003e m = \u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003esnd\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003erunWriterT\u003c/a\u003e\u003c/code\u003e m)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Writer.Strict",
        "fct-package": "mtl",
        "fct-signature": "WriterT w m a -\u003e m w",
        "fct-type": "function",
        "title": "execWriterT"
      },
      "index": {
        "description": "Extract the output from writer computation execWriterT liftM snd runWriterT",
        "hierarchy": "Control Monad Writer Strict",
        "module": "Control.Monad.Writer.Strict",
        "name": "execWriterT",
        "normalized": "WriterT a b c-\u003eb a",
        "package": "mtl",
        "partial": "Writer",
        "signature": "WriterT w m a-\u003em w"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Strict.html#v:listen",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003elisten\u003c/a\u003e\u003c/code\u003e m\u003c/code\u003e is an action that executes the action \u003ccode\u003em\u003c/code\u003e and adds\n its output to the value of the computation.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Writer.Strict",
        "fct-package": "mtl",
        "fct-signature": "m a -\u003e m (a, w)",
        "fct-source": "src/Control-Monad-Writer-Class.html#listen",
        "fct-type": "method",
        "title": "listen"
      },
      "index": {
        "description": "listen is an action that executes the action and adds its output to the value of the computation",
        "hierarchy": "Control Monad Writer Strict",
        "module": "Control.Monad.Writer.Strict",
        "name": "listen",
        "normalized": "a b-\u003ea(b,c)",
        "package": "mtl",
        "partial": "",
        "signature": "m a-\u003em(a,w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Strict.html#v:listens",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003elistens\u003c/a\u003e\u003c/code\u003e f m\u003c/code\u003e is an action that executes the action \u003ccode\u003em\u003c/code\u003e and adds\n the result of applying \u003ccode\u003ef\u003c/code\u003e to the output to the value of the computation.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003elistens\u003c/a\u003e\u003c/code\u003e f m = \u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e (id *** f) (\u003ccode\u003e\u003ca\u003elisten\u003c/a\u003e\u003c/code\u003e m)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Writer.Strict",
        "fct-package": "mtl",
        "fct-signature": "(w -\u003e b) -\u003e m a -\u003e m (a, b)",
        "fct-source": "src/Control-Monad-Writer-Class.html#listens",
        "fct-type": "function",
        "title": "listens"
      },
      "index": {
        "description": "listens is an action that executes the action and adds the result of applying to the output to the value of the computation listens liftM id listen",
        "hierarchy": "Control Monad Writer Strict",
        "module": "Control.Monad.Writer.Strict",
        "name": "listens",
        "normalized": "(a-\u003eb)-\u003ec d-\u003ec(d,b)",
        "package": "mtl",
        "partial": "",
        "signature": "(w-\u003eb)-\u003em a-\u003em(a,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Strict.html#v:mapWriter",
      "description": {
        "fct-descr": "\u003cp\u003eMap both the return value and output of a computation using\n the given function.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunWriter\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003emapWriter\u003c/a\u003e\u003c/code\u003e f m) = f (\u003ccode\u003e\u003ca\u003erunWriter\u003c/a\u003e\u003c/code\u003e m)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Writer.Strict",
        "fct-package": "mtl",
        "fct-signature": "((a, w) -\u003e (b, w')) -\u003e Writer w a -\u003e Writer w' b",
        "fct-type": "function",
        "title": "mapWriter"
      },
      "index": {
        "description": "Map both the return value and output of computation using the given function runWriter mapWriter runWriter",
        "hierarchy": "Control Monad Writer Strict",
        "module": "Control.Monad.Writer.Strict",
        "name": "mapWriter",
        "normalized": "((a,b)-\u003e(c,d))-\u003eWriter b a-\u003eWriter d c",
        "package": "mtl",
        "partial": "Writer",
        "signature": "((a,w)-\u003e(b,w'))-\u003eWriter w a-\u003eWriter w' b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Strict.html#v:mapWriterT",
      "description": {
        "fct-descr": "\u003cp\u003eMap both the return value and output of a computation using\n the given function.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunWriterT\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003emapWriterT\u003c/a\u003e\u003c/code\u003e f m) = f (\u003ccode\u003e\u003ca\u003erunWriterT\u003c/a\u003e\u003c/code\u003e m)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Writer.Strict",
        "fct-package": "mtl",
        "fct-signature": "(m (a, w) -\u003e n (b, w')) -\u003e WriterT w m a -\u003e WriterT w' n b",
        "fct-type": "function",
        "title": "mapWriterT"
      },
      "index": {
        "description": "Map both the return value and output of computation using the given function runWriterT mapWriterT runWriterT",
        "hierarchy": "Control Monad Writer Strict",
        "module": "Control.Monad.Writer.Strict",
        "name": "mapWriterT",
        "normalized": "(a(b,c)-\u003ed(e,f))-\u003eWriterT c a b-\u003eWriterT f d e",
        "package": "mtl",
        "partial": "Writer",
        "signature": "(m(a,w)-\u003en(b,w'))-\u003eWriterT w m a-\u003eWriterT w' n b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Strict.html#v:pass",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003epass\u003c/a\u003e\u003c/code\u003e m\u003c/code\u003e is an action that executes the action \u003ccode\u003em\u003c/code\u003e, which\n returns a value and a function, and returns the value, applying\n the function to the output.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Writer.Strict",
        "fct-package": "mtl",
        "fct-signature": "m (a, w -\u003e w) -\u003e m a",
        "fct-source": "src/Control-Monad-Writer-Class.html#pass",
        "fct-type": "method",
        "title": "pass"
      },
      "index": {
        "description": "pass is an action that executes the action which returns value and function and returns the value applying the function to the output",
        "hierarchy": "Control Monad Writer Strict",
        "module": "Control.Monad.Writer.Strict",
        "name": "pass",
        "normalized": "a(b,c-\u003ec)-\u003ea b",
        "package": "mtl",
        "partial": "",
        "signature": "m(a,w-\u003ew)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Strict.html#v:runWriter",
      "description": {
        "fct-descr": "\u003cp\u003eUnwrap a writer computation as a (result, output) pair.\n (The inverse of \u003ccode\u003e\u003ca\u003ewriter\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Writer.Strict",
        "fct-package": "mtl",
        "fct-signature": "Writer w a -\u003e (a, w)",
        "fct-type": "function",
        "title": "runWriter"
      },
      "index": {
        "description": "Unwrap writer computation as result output pair The inverse of writer",
        "hierarchy": "Control Monad Writer Strict",
        "module": "Control.Monad.Writer.Strict",
        "name": "runWriter",
        "normalized": "Writer a b-\u003e(b,a)",
        "package": "mtl",
        "partial": "Writer",
        "signature": "Writer w a-\u003e(a,w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Strict.html#v:runWriterT",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Writer.Strict",
        "fct-package": "mtl",
        "fct-signature": "m (a, w)",
        "fct-type": "function",
        "title": "runWriterT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Writer Strict",
        "module": "Control.Monad.Writer.Strict",
        "name": "runWriterT",
        "normalized": "a(b,c)",
        "package": "mtl",
        "partial": "Writer",
        "signature": "m(a,w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Strict.html#v:tell",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003etell\u003c/a\u003e\u003c/code\u003e w\u003c/code\u003e is an action that produces the output \u003ccode\u003ew\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Writer.Strict",
        "fct-package": "mtl",
        "fct-signature": "w -\u003e m ()",
        "fct-source": "src/Control-Monad-Writer-Class.html#tell",
        "fct-type": "method",
        "title": "tell"
      },
      "index": {
        "description": "tell is an action that produces the output",
        "hierarchy": "Control Monad Writer Strict",
        "module": "Control.Monad.Writer.Strict",
        "name": "tell",
        "normalized": "a-\u003eb()",
        "package": "mtl",
        "partial": "",
        "signature": "w-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer-Strict.html#v:writer",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ewriter\u003c/a\u003e\u003c/code\u003e (a,w)\u003c/code\u003e embeds a simple writer action.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Writer.Strict",
        "fct-package": "mtl",
        "fct-signature": "(a, w) -\u003e m a",
        "fct-source": "src/Control-Monad-Writer-Class.html#writer",
        "fct-type": "method",
        "title": "writer"
      },
      "index": {
        "description": "writer embeds simple writer action",
        "hierarchy": "Control Monad Writer Strict",
        "module": "Control.Monad.Writer.Strict",
        "name": "writer",
        "normalized": "(a,b)-\u003ec a",
        "package": "mtl",
        "partial": "",
        "signature": "(a,w)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mtl/docs/Control-Monad-Writer.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe MonadWriter class.\n\u003c/p\u003e\u003cp\u003eInspired by the paper\n      \u003cem\u003eFunctional Programming with Overloading and Higher-Order Polymorphism\u003c/em\u003e,\n        Mark P Jones (\u003ca\u003ehttp://web.cecs.pdx.edu/~mpj/pubs/springschool.html\u003c/a\u003e)\n          Advanced School of Functional Programming, 1995.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Writer",
        "fct-package": "mtl",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Writer.html",
        "fct-type": "module",
        "title": "Writer"
      },
      "index": {
        "description": "The MonadWriter class Inspired by the paper Functional Programming with Overloading and Higher-Order Polymorphism Mark Jones http web.cecs.pdx.edu mpj pubs springschool.html Advanced School of Functional Programming",
        "hierarchy": "Control Monad Writer",
        "module": "Control.Monad.Writer",
        "name": "Writer",
        "normalized": "",
        "package": "mtl",
        "partial": "Writer",
        "signature": ""
      }
    }
  }
]