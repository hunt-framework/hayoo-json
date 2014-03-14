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
        "word": "MonadRandom"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA type class for random number generation monads.  See\n\u003ca\u003ehttp://www.haskell.org/haskellwiki/NewMonads/MonadRandom\u003c/a\u003e for the original\nversion of this code.\n\u003c/p\u003e\u003cp\u003eInstances of this type class include \u003ccode\u003e\u003ca\u003eRand\u003c/a\u003e\u003c/code\u003e and\nmonads created using \u003ccode\u003e\u003ca\u003eRandT\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Random.Class",
          "name": "Class",
          "package": "MonadRandom",
          "source": "src/Control-Monad-Random-Class.html",
          "type": "module"
        },
        "index": {
          "description": "type class for random number generation monads See http www.haskell.org haskellwiki NewMonads MonadRandom for the original version of this code Instances of this type class include Rand and monads created using RandT",
          "hierarchy": "Control Monad Random Class",
          "module": "Control.Monad.Random.Class",
          "name": "Class",
          "package": "MonadRandom",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MonadRandom/docs/Control-Monad-Random-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn interface to random number generation monads.\n\u003c/p\u003e",
          "module": "Control.Monad.Random.Class",
          "name": "MonadRandom",
          "package": "MonadRandom",
          "source": "src/Control-Monad-Random-Class.html#MonadRandom",
          "type": "class"
        },
        "index": {
          "description": "An interface to random number generation monads",
          "hierarchy": "Control Monad Random Class",
          "module": "Control.Monad.Random.Class",
          "name": "MonadRandom",
          "package": "MonadRandom",
          "partial": "Monad Random",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/MonadRandom/docs/Control-Monad-Random-Class.html#t:MonadRandom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn interface to monads with splittable state (as most random number generation monads will have).\n The intention is that the \u003ccode\u003e\u003ca\u003egetSplit\u003c/a\u003e\u003c/code\u003e action splits the state, returning one half of the result, and\n setting the new state to the other.\n\u003c/p\u003e",
          "module": "Control.Monad.Random.Class",
          "name": "MonadSplit",
          "package": "MonadRandom",
          "source": "src/Control-Monad-Random-Class.html#MonadSplit",
          "type": "class"
        },
        "index": {
          "description": "An interface to monads with splittable state as most random number generation monads will have The intention is that the getSplit action splits the state returning one half of the result and setting the new state to the other",
          "hierarchy": "Control Monad Random Class",
          "module": "Control.Monad.Random.Class",
          "name": "MonadSplit",
          "package": "MonadRandom",
          "partial": "Monad Split",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/MonadRandom/docs/Control-Monad-Random-Class.html#t:MonadSplit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a randomly-selected value of type \u003ccode\u003ea\u003c/code\u003e.  See\n \u003ccode\u003e\u003ca\u003erandom\u003c/a\u003e\u003c/code\u003e for details.\n\u003c/p\u003e",
          "module": "Control.Monad.Random.Class",
          "name": "getRandom",
          "package": "MonadRandom",
          "signature": "m a",
          "source": "src/Control-Monad-Random-Class.html#getRandom",
          "type": "method"
        },
        "index": {
          "description": "Return randomly-selected value of type See random for details",
          "hierarchy": "Control Monad Random Class",
          "module": "Control.Monad.Random.Class",
          "name": "getRandom",
          "package": "MonadRandom",
          "partial": "Random",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MonadRandom/docs/Control-Monad-Random-Class.html#v:getRandom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a randomly-selected value of type \u003ccode\u003ea\u003c/code\u003e in the range\n \u003cem\u003e(lo,hi)\u003c/em\u003e.  See \u003ccode\u003e\u003ca\u003erandomR\u003c/a\u003e\u003c/code\u003e for details.\n\u003c/p\u003e",
          "module": "Control.Monad.Random.Class",
          "name": "getRandomR",
          "package": "MonadRandom",
          "signature": "(a, a) -\u003e m a",
          "source": "src/Control-Monad-Random-Class.html#getRandomR",
          "type": "method"
        },
        "index": {
          "description": "Return randomly-selected value of type in the range lo hi See randomR for details",
          "hierarchy": "Control Monad Random Class",
          "module": "Control.Monad.Random.Class",
          "name": "getRandomR",
          "normalized": "(a,a)-\u003eb a",
          "package": "MonadRandom",
          "partial": "Random",
          "signature": "(a,a)-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MonadRandom/docs/Control-Monad-Random-Class.html#v:getRandomR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn an infinite stream of randomly-selected value of type \u003ccode\u003ea\u003c/code\u003e\n in the range \u003cem\u003e(lo,hi)\u003c/em\u003e.  See \u003ccode\u003e\u003ca\u003erandomRs\u003c/a\u003e\u003c/code\u003e for details.\n\u003c/p\u003e",
          "module": "Control.Monad.Random.Class",
          "name": "getRandomRs",
          "package": "MonadRandom",
          "signature": "(a, a) -\u003e m [a]",
          "source": "src/Control-Monad-Random-Class.html#getRandomRs",
          "type": "method"
        },
        "index": {
          "description": "Return an infinite stream of randomly-selected value of type in the range lo hi See randomRs for details",
          "hierarchy": "Control Monad Random Class",
          "module": "Control.Monad.Random.Class",
          "name": "getRandomRs",
          "normalized": "(a,a)-\u003eb[a]",
          "package": "MonadRandom",
          "partial": "Random Rs",
          "signature": "(a,a)-\u003em[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MonadRandom/docs/Control-Monad-Random-Class.html#v:getRandomRs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn an infinite stream of random values of type \u003ccode\u003ea\u003c/code\u003e.  See\n \u003ccode\u003e\u003ca\u003erandoms\u003c/a\u003e\u003c/code\u003e for details.\n\u003c/p\u003e",
          "module": "Control.Monad.Random.Class",
          "name": "getRandoms",
          "package": "MonadRandom",
          "signature": "m [a]",
          "source": "src/Control-Monad-Random-Class.html#getRandoms",
          "type": "method"
        },
        "index": {
          "description": "Return an infinite stream of random values of type See randoms for details",
          "hierarchy": "Control Monad Random Class",
          "module": "Control.Monad.Random.Class",
          "name": "getRandoms",
          "normalized": "a[b]",
          "package": "MonadRandom",
          "partial": "Randoms",
          "signature": "m[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MonadRandom/docs/Control-Monad-Random-Class.html#v:getRandoms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Random.Class",
          "name": "getSplit",
          "package": "MonadRandom",
          "signature": "m s",
          "source": "src/Control-Monad-Random-Class.html#getSplit",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Random Class",
          "module": "Control.Monad.Random.Class",
          "name": "getSplit",
          "package": "MonadRandom",
          "partial": "Split",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MonadRandom/docs/Control-Monad-Random-Class.html#v:getSplit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA random number generation monad.  See\n\u003ca\u003ehttp://www.haskell.org/haskellwiki/NewMonads/MonadRandom\u003c/a\u003e for the original\nversion of this code.\n\u003c/p\u003e\u003cp\u003eThe actual interface is defined by\n\u003ccode\u003e\u003ca\u003eMonadRandom\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003eComputation type:\u003c/dt\u003e\u003cdd\u003e Computations which consume random values.\n\u003c/dd\u003e\u003cdt\u003eBinding strategy:\u003c/dt\u003e\u003cdd\u003e The computation proceeds in the same fashion as the\nidentity monad, but it carries a random number generator that may be\nqueried to generate random values.\n\u003c/dd\u003e\u003cdt\u003eUseful for:\u003c/dt\u003e\u003cdd\u003e Monte Carlo algorithms and simulating random processes.\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "Control.Monad.Random",
          "name": "Random",
          "package": "MonadRandom",
          "source": "src/Control-Monad-Random.html",
          "type": "module"
        },
        "index": {
          "description": "random number generation monad See http www.haskell.org haskellwiki NewMonads MonadRandom for the original version of this code The actual interface is defined by MonadRandom Computation type Computations which consume random values Binding strategy The computation proceeds in the same fashion as the identity monad but it carries random number generator that may be queried to generate random values Useful for Monte Carlo algorithms and simulating random processes",
          "hierarchy": "Control Monad Random",
          "module": "Control.Monad.Random",
          "name": "Random",
          "package": "MonadRandom",
          "partial": "Random",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MonadRandom/docs/Control-Monad-Random.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA basic random monad.\n\u003c/p\u003e",
          "module": "Control.Monad.Random",
          "name": "Rand",
          "package": "MonadRandom",
          "source": "src/Control-Monad-Random.html#Rand",
          "type": "data"
        },
        "index": {
          "description": "basic random monad",
          "hierarchy": "Control Monad Random",
          "module": "Control.Monad.Random",
          "name": "Rand",
          "package": "MonadRandom",
          "partial": "Rand",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/MonadRandom/docs/Control-Monad-Random.html#t:Rand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monad transformer which adds a random number generator to an\n existing monad.\n\u003c/p\u003e",
          "module": "Control.Monad.Random",
          "name": "RandT",
          "package": "MonadRandom",
          "source": "src/Control-Monad-Random.html#RandT",
          "type": "data"
        },
        "index": {
          "description": "monad transformer which adds random number generator to an existing monad",
          "hierarchy": "Control Monad Random",
          "module": "Control.Monad.Random",
          "name": "RandT",
          "package": "MonadRandom",
          "partial": "Rand",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/MonadRandom/docs/Control-Monad-Random.html#t:RandT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate a random computation using the generator \u003ccode\u003eg\u003c/code\u003e.  Note that the\n generator \u003ccode\u003eg\u003c/code\u003e is not returned, so there's no way to recover the\n updated version of \u003ccode\u003eg\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Random",
          "name": "evalRand",
          "package": "MonadRandom",
          "signature": "Rand g a -\u003e g -\u003e a",
          "source": "src/Control-Monad-Random.html#evalRand",
          "type": "function"
        },
        "index": {
          "description": "Evaluate random computation using the generator Note that the generator is not returned so there no way to recover the updated version of",
          "hierarchy": "Control Monad Random",
          "module": "Control.Monad.Random",
          "name": "evalRand",
          "normalized": "Rand a b-\u003ea-\u003eb",
          "package": "MonadRandom",
          "partial": "Rand",
          "signature": "Rand g a-\u003eg-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MonadRandom/docs/Control-Monad-Random.html#v:evalRand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate a random computation in the IO monad, splitting the global standard generator to get a new one for the computation.\n\u003c/p\u003e",
          "module": "Control.Monad.Random",
          "name": "evalRandIO",
          "package": "MonadRandom",
          "signature": "Rand StdGen a -\u003e IO a",
          "source": "src/Control-Monad-Random.html#evalRandIO",
          "type": "function"
        },
        "index": {
          "description": "Evaluate random computation in the IO monad splitting the global standard generator to get new one for the computation",
          "hierarchy": "Control Monad Random",
          "module": "Control.Monad.Random",
          "name": "evalRandIO",
          "normalized": "Rand StdGen a-\u003eIO a",
          "package": "MonadRandom",
          "partial": "Rand IO",
          "signature": "Rand StdGen a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MonadRandom/docs/Control-Monad-Random.html#v:evalRandIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate a RandT computation using the generator \u003ccode\u003eg\u003c/code\u003e.  Note that the\n generator \u003ccode\u003eg\u003c/code\u003e is not returned, so there's no way to recover the\n updated version of \u003ccode\u003eg\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Random",
          "name": "evalRandT",
          "package": "MonadRandom",
          "signature": "RandT g m a -\u003e g -\u003e m a",
          "source": "src/Control-Monad-Random.html#evalRandT",
          "type": "function"
        },
        "index": {
          "description": "Evaluate RandT computation using the generator Note that the generator is not returned so there no way to recover the updated version of",
          "hierarchy": "Control Monad Random",
          "module": "Control.Monad.Random",
          "name": "evalRandT",
          "normalized": "RandT a b c-\u003ea-\u003eb c",
          "package": "MonadRandom",
          "partial": "Rand",
          "signature": "RandT g m a-\u003eg-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MonadRandom/docs/Control-Monad-Random.html#v:evalRandT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSample a random value from a weighted list.  The total weight of all\n elements must not be 0.\n\u003c/p\u003e",
          "module": "Control.Monad.Random",
          "name": "fromList",
          "package": "MonadRandom",
          "signature": "[(a, Rational)] -\u003e m a",
          "source": "src/Control-Monad-Random.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Sample random value from weighted list The total weight of all elements must not be",
          "hierarchy": "Control Monad Random",
          "module": "Control.Monad.Random",
          "name": "fromList",
          "normalized": "[(a,Rational)]-\u003eb a",
          "package": "MonadRandom",
          "partial": "List",
          "signature": "[(a,Rational)]-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MonadRandom/docs/Control-Monad-Random.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift arbitrary action to Rand\n\u003c/p\u003e",
          "module": "Control.Monad.Random",
          "name": "liftRand",
          "package": "MonadRandom",
          "signature": "(g -\u003e (a, g))-\u003e Rand g a",
          "type": "function"
        },
        "index": {
          "description": "Lift arbitrary action to Rand",
          "hierarchy": "Control Monad Random",
          "module": "Control.Monad.Random",
          "name": "liftRand",
          "normalized": "(a-\u003e(b,a))-\u003eRand a b",
          "package": "MonadRandom",
          "partial": "Rand",
          "signature": "(g-\u003e(a,g))-\u003eRand g a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MonadRandom/docs/Control-Monad-Random.html#v:liftRand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift arbitrary action to RandT\n\u003c/p\u003e",
          "module": "Control.Monad.Random",
          "name": "liftRandT",
          "package": "MonadRandom",
          "signature": "(g -\u003e m (a, g))-\u003e RandT g m a",
          "type": "function"
        },
        "index": {
          "description": "Lift arbitrary action to RandT",
          "hierarchy": "Control Monad Random",
          "module": "Control.Monad.Random",
          "name": "liftRandT",
          "normalized": "(a-\u003eb(c,a))-\u003eRandT a b c",
          "package": "MonadRandom",
          "partial": "Rand",
          "signature": "(g-\u003em(a,g))-\u003eRandT g m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MonadRandom/docs/Control-Monad-Random.html#v:liftRandT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a random computation using the generator \u003ccode\u003eg\u003c/code\u003e, returning the result\n and the updated generator.\n\u003c/p\u003e",
          "module": "Control.Monad.Random",
          "name": "runRand",
          "package": "MonadRandom",
          "signature": "Rand g a -\u003e g -\u003e (a, g)",
          "source": "src/Control-Monad-Random.html#runRand",
          "type": "function"
        },
        "index": {
          "description": "Run random computation using the generator returning the result and the updated generator",
          "hierarchy": "Control Monad Random",
          "module": "Control.Monad.Random",
          "name": "runRand",
          "normalized": "Rand a b-\u003ea-\u003e(b,a)",
          "package": "MonadRandom",
          "partial": "Rand",
          "signature": "Rand g a-\u003eg-\u003e(a,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MonadRandom/docs/Control-Monad-Random.html#v:runRand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a RandT computation using the generator \u003ccode\u003eg\u003c/code\u003e, returning the result and\n the updated generator.\n\u003c/p\u003e",
          "module": "Control.Monad.Random",
          "name": "runRandT",
          "package": "MonadRandom",
          "signature": "RandT g m a -\u003e g -\u003e m (a, g)",
          "source": "src/Control-Monad-Random.html#runRandT",
          "type": "function"
        },
        "index": {
          "description": "Run RandT computation using the generator returning the result and the updated generator",
          "hierarchy": "Control Monad Random",
          "module": "Control.Monad.Random",
          "name": "runRandT",
          "normalized": "RandT a b c-\u003ea-\u003eb(c,a)",
          "package": "MonadRandom",
          "partial": "Rand",
          "signature": "RandT g m a-\u003eg-\u003em(a,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MonadRandom/docs/Control-Monad-Random.html#v:runRandT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSample a value from a uniform distribution of a list of elements.\n\u003c/p\u003e",
          "module": "Control.Monad.Random",
          "name": "uniform",
          "package": "MonadRandom",
          "signature": "[a] -\u003e m a",
          "source": "src/Control-Monad-Random.html#uniform",
          "type": "function"
        },
        "index": {
          "description": "Sample value from uniform distribution of list of elements",
          "hierarchy": "Control Monad Random",
          "module": "Control.Monad.Random",
          "name": "uniform",
          "normalized": "[a]-\u003eb a",
          "package": "MonadRandom",
          "signature": "[a]-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MonadRandom/docs/Control-Monad-Random.html#v:uniform"
      }
    }
  ]
]