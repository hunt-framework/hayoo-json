[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MonadRandomLazy/docs/Control-Monad-LazyRandom.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLicense : BSD3\n\u003c/p\u003e\u003cp\u003eA lazy monad for random-number generation.  This monad allows, for example,\ncomputation of infinite random lists.\n\u003c/p\u003e\u003cp\u003eThis monad respects the interface defined by \n\u003ccode\u003e\u003ca\u003eMonadRandom\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eA monadic computation is one that consumes random values.\nThe bind operation works like the \u003ccode\u003eGen\u003c/code\u003e monad in \u003ccode\u003e\u003ca\u003eQuickCheck\u003c/a\u003e\u003c/code\u003e:\nit does not thread the random seed; instead it *splits* the random seed.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.LazyRandom",
        "fct-package": "MonadRandomLazy",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-LazyRandom.html",
        "fct-type": "module",
        "title": "LazyRandom"
      },
      "index": {
        "description": "License BSD3 lazy monad for random-number generation This monad allows for example computation of infinite random lists This monad respects the interface defined by MonadRandom monadic computation is one that consumes random values The bind operation works like the Gen monad in QuickCheck it does not thread the random seed instead it splits the random seed",
        "hierarchy": "Control Monad LazyRandom",
        "module": "Control.Monad.LazyRandom",
        "name": "LazyRandom",
        "normalized": "",
        "package": "MonadRandomLazy",
        "partial": "Lazy Random",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MonadRandomLazy/docs/Control-Monad-LazyRandom.html#t:Rand",
      "description": {
        "fct-module": "Control.Monad.LazyRandom",
        "fct-package": "MonadRandomLazy",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-LazyRandom.html#Rand",
        "fct-type": "data",
        "title": "Rand"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad LazyRandom",
        "module": "Control.Monad.LazyRandom",
        "name": "Rand",
        "normalized": "",
        "package": "MonadRandomLazy",
        "partial": "Rand",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MonadRandomLazy/docs/Control-Monad-LazyRandom.html#v:evalRand",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate a random computation using the generator \u003ccode\u003eg\u003c/code\u003e.  The\n new \u003ccode\u003eg\u003c/code\u003e is discarded.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.LazyRandom",
        "fct-package": "MonadRandomLazy",
        "fct-signature": "Rand g a -\u003e g -\u003e a",
        "fct-source": "src/Control-Monad-LazyRandom.html#evalRand",
        "fct-type": "function",
        "title": "evalRand"
      },
      "index": {
        "description": "Evaluate random computation using the generator The new is discarded",
        "hierarchy": "Control Monad LazyRandom",
        "module": "Control.Monad.LazyRandom",
        "name": "evalRand",
        "normalized": "Rand a b-\u003ea-\u003eb",
        "package": "MonadRandomLazy",
        "partial": "Rand",
        "signature": "Rand g a-\u003eg-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MonadRandomLazy/docs/Control-Monad-LazyRandom.html#v:evalRandIO",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate a random computation in the IO monad, using the random number\n generator supplied by \u003ccode\u003e\u003ca\u003egetStdRandom\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.LazyRandom",
        "fct-package": "MonadRandomLazy",
        "fct-signature": "Rand StdGen a -\u003e IO a",
        "fct-source": "src/Control-Monad-LazyRandom.html#evalRandIO",
        "fct-type": "function",
        "title": "evalRandIO"
      },
      "index": {
        "description": "Evaluate random computation in the IO monad using the random number generator supplied by getStdRandom",
        "hierarchy": "Control Monad LazyRandom",
        "module": "Control.Monad.LazyRandom",
        "name": "evalRandIO",
        "normalized": "Rand StdGen a-\u003eIO a",
        "package": "MonadRandomLazy",
        "partial": "Rand IO",
        "signature": "Rand StdGen a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MonadRandomLazy/docs/Control-Monad-LazyRandom.html#v:runRand",
      "description": {
        "fct-descr": "\u003cp\u003eRun a random computation using the generator \u003ccode\u003eg\u003c/code\u003e, returning the result\n and a new generator.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.LazyRandom",
        "fct-package": "MonadRandomLazy",
        "fct-signature": "Rand g a -\u003e g -\u003e (a, g)",
        "fct-source": "src/Control-Monad-LazyRandom.html#runRand",
        "fct-type": "function",
        "title": "runRand"
      },
      "index": {
        "description": "Run random computation using the generator returning the result and new generator",
        "hierarchy": "Control Monad LazyRandom",
        "module": "Control.Monad.LazyRandom",
        "name": "runRand",
        "normalized": "Rand a b-\u003ea-\u003e(b,a)",
        "package": "MonadRandomLazy",
        "partial": "Rand",
        "signature": "Rand g a-\u003eg-\u003e(a,g)"
      }
    }
  }
]