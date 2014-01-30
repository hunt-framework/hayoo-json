[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-parallel/docs/Control-Monad-Parallel.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines classes of monads that can perform multiple computations in parallel and, more importantly,\n combine the results of those parallel computations.\n\u003c/p\u003e\u003cp\u003eThere are two classes exported by this module, \u003ccode\u003e\u003ca\u003eMonadParallel\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eMonadFork\u003c/a\u003e\u003c/code\u003e. The former is more generic, but the\n latter is easier to use: when invoking any expensive computation that could be performed in parallel, simply wrap the\n call in \u003ccode\u003e\u003ca\u003eforkExec\u003c/a\u003e\u003c/code\u003e. The function immediately returns a handle to the running computation. The handle can be used to\n obtain the result of the computation when needed:\n\u003c/p\u003e\u003cpre\u003e\n   do child \u003c- forkExec expensive\n      otherStuff\n      result \u003c- child\n\u003c/pre\u003e\u003cp\u003eIn this example, the computations \u003cem\u003eexpensive\u003c/em\u003e and \u003cem\u003eotherStuff\u003c/em\u003e would be performed in parallel. When using the\n \u003ccode\u003e\u003ca\u003eMonadParallel\u003c/a\u003e\u003c/code\u003e class, both parallel computations must be specified at once:\n\u003c/p\u003e\u003cpre\u003e\n   bindM2 (\\ childResult otherResult -\u003e ...) expensive otherStuff\n\u003c/pre\u003e\u003cp\u003eIn either case, for best results the costs of the two computations should be roughly equal.\n\u003c/p\u003e\u003cp\u003eAny monad that is an instance of the \u003ccode\u003e\u003ca\u003eMonadFork\u003c/a\u003e\u003c/code\u003e class is also an instance of the \u003ccode\u003e\u003ca\u003eMonadParallel\u003c/a\u003e\u003c/code\u003e class, and the\n following law should hold:\n\u003c/p\u003e\u003cpre\u003e bindM2 f ma mb = do {a' \u003c- forkExec ma; b \u003c- mb; a \u003c- a'; f a b}\u003c/pre\u003e\u003cp\u003eWhen operating with monads free of side-effects, such as \u003ccode\u003e\u003ca\u003eIdentity\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eforkExec\u003c/a\u003e\u003c/code\u003e is equivalent to \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e\n and \u003ccode\u003e\u003ca\u003ebindM2\u003c/a\u003e\u003c/code\u003e is equivalent to \u003ccode\u003e \\ f ma mb -\u003e do {a \u003c- ma; b \u003c- mb; f a b} \u003c/code\u003e &#8212; the only difference is in the\n resource utilisation. With the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad, on the other hand, there may be visible difference in the results because\n the side effects of \u003cem\u003ema\u003c/em\u003e and \u003cem\u003emb\u003c/em\u003e may be arbitrarily reordered.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Parallel",
        "fct-package": "monad-parallel",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Parallel.html",
        "fct-type": "module",
        "title": "Parallel"
      },
      "index": {
        "description": "This module defines classes of monads that can perform multiple computations in parallel and more importantly combine the results of those parallel computations There are two classes exported by this module MonadParallel and MonadFork The former is more generic but the latter is easier to use when invoking any expensive computation that could be performed in parallel simply wrap the call in forkExec The function immediately returns handle to the running computation The handle can be used to obtain the result of the computation when needed do child forkExec expensive otherStuff result child In this example the computations expensive and otherStuff would be performed in parallel When using the MonadParallel class both parallel computations must be specified at once bindM2 childResult otherResult expensive otherStuff In either case for best results the costs of the two computations should be roughly equal Any monad that is an instance of the MonadFork class is also an instance of the MonadParallel class and the following law should hold bindM2 ma mb do forkExec ma mb When operating with monads free of side-effects such as Identity or Maybe forkExec is equivalent to return and bindM2 is equivalent to ma mb do ma mb the only difference is in the resource utilisation With the IO monad on the other hand there may be visible difference in the results because the side effects of ma and mb may be arbitrarily reordered",
        "hierarchy": "Control Monad Parallel",
        "module": "Control.Monad.Parallel",
        "name": "Parallel",
        "normalized": "",
        "package": "monad-parallel",
        "partial": "Parallel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-parallel/docs/Control-Monad-Parallel.html#t:MonadFork",
      "description": {
        "fct-descr": "\u003cp\u003eClass of monads that can fork a parallel computation.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Parallel",
        "fct-package": "monad-parallel",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Parallel.html#MonadFork",
        "fct-type": "class",
        "title": "MonadFork"
      },
      "index": {
        "description": "Class of monads that can fork parallel computation",
        "hierarchy": "Control Monad Parallel",
        "module": "Control.Monad.Parallel",
        "name": "MonadFork",
        "normalized": "",
        "package": "monad-parallel",
        "partial": "Monad Fork",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-parallel/docs/Control-Monad-Parallel.html#t:MonadParallel",
      "description": {
        "fct-descr": "\u003cp\u003eClass of monads that can perform two computations in parallel and bind their results together.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Parallel",
        "fct-package": "monad-parallel",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Parallel.html#MonadParallel",
        "fct-type": "class",
        "title": "MonadParallel"
      },
      "index": {
        "description": "Class of monads that can perform two computations in parallel and bind their results together",
        "hierarchy": "Control Monad Parallel",
        "module": "Control.Monad.Parallel",
        "name": "MonadParallel",
        "normalized": "",
        "package": "monad-parallel",
        "partial": "Monad Parallel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-parallel/docs/Control-Monad-Parallel.html#v:ap",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eap\u003c/a\u003e\u003c/code\u003e, but evaluating the function and its argument in parallel.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Parallel",
        "fct-package": "monad-parallel",
        "fct-signature": "m (a -\u003e b) -\u003e m a -\u003e m b",
        "fct-source": "src/Control-Monad-Parallel.html#ap",
        "fct-type": "function",
        "title": "ap"
      },
      "index": {
        "description": "Like ap but evaluating the function and its argument in parallel",
        "hierarchy": "Control Monad Parallel",
        "module": "Control.Monad.Parallel",
        "name": "ap",
        "normalized": "a(b-\u003ec)-\u003ea b-\u003ea c",
        "package": "monad-parallel",
        "partial": "",
        "signature": "m(a-\u003eb)-\u003em a-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-parallel/docs/Control-Monad-Parallel.html#v:bindM2",
      "description": {
        "fct-descr": "\u003cp\u003ePerform two monadic computations in parallel; when they are both finished, pass the results to the function.\n Apart from the possible ordering of side effects, this function is equivalent to\n \u003ccode\u003e\\f ma mb-\u003e do {a \u003c- ma; b \u003c- mb; f a b}\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Parallel",
        "fct-package": "monad-parallel",
        "fct-signature": "(a -\u003e b -\u003e m c) -\u003e m a -\u003e m b -\u003e m c",
        "fct-source": "src/Control-Monad-Parallel.html#bindM2",
        "fct-type": "method",
        "title": "bindM2"
      },
      "index": {
        "description": "Perform two monadic computations in parallel when they are both finished pass the results to the function Apart from the possible ordering of side effects this function is equivalent to ma mb do ma mb",
        "hierarchy": "Control Monad Parallel",
        "module": "Control.Monad.Parallel",
        "name": "bindM2",
        "normalized": "(a-\u003eb-\u003ec d)-\u003ec a-\u003ec b-\u003ec d",
        "package": "monad-parallel",
        "partial": "",
        "signature": "(a-\u003eb-\u003em c)-\u003em a-\u003em b-\u003em c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-parallel/docs/Control-Monad-Parallel.html#v:bindM3",
      "description": {
        "fct-descr": "\u003cp\u003ePerform three monadic computations in parallel; when they are all finished, pass their results to the function.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Parallel",
        "fct-package": "monad-parallel",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e m d) -\u003e m a -\u003e m b -\u003e m c -\u003e m d",
        "fct-source": "src/Control-Monad-Parallel.html#bindM3",
        "fct-type": "function",
        "title": "bindM3"
      },
      "index": {
        "description": "Perform three monadic computations in parallel when they are all finished pass their results to the function",
        "hierarchy": "Control Monad Parallel",
        "module": "Control.Monad.Parallel",
        "name": "bindM3",
        "normalized": "(a-\u003eb-\u003ec-\u003ed e)-\u003ed a-\u003ed b-\u003ed c-\u003ed e",
        "package": "monad-parallel",
        "partial": "",
        "signature": "(a-\u003eb-\u003ec-\u003em d)-\u003em a-\u003em b-\u003em c-\u003em d"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-parallel/docs/Control-Monad-Parallel.html#v:forkExec",
      "description": {
        "fct-descr": "\u003cp\u003eFork a child monadic computation to be performed in parallel with the current one.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Parallel",
        "fct-package": "monad-parallel",
        "fct-signature": "m a -\u003e m (m a)",
        "fct-source": "src/Control-Monad-Parallel.html#forkExec",
        "fct-type": "method",
        "title": "forkExec"
      },
      "index": {
        "description": "Fork child monadic computation to be performed in parallel with the current one",
        "hierarchy": "Control Monad Parallel",
        "module": "Control.Monad.Parallel",
        "name": "forkExec",
        "normalized": "a b-\u003ea(a b)",
        "package": "monad-parallel",
        "partial": "Exec",
        "signature": "m a-\u003em(m a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-parallel/docs/Control-Monad-Parallel.html#v:liftM2",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eliftM2\u003c/a\u003e\u003c/code\u003e, but evaluating its two monadic arguments in parallel.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Parallel",
        "fct-package": "monad-parallel",
        "fct-signature": "(a -\u003e b -\u003e c) -\u003e m a -\u003e m b -\u003e m c",
        "fct-source": "src/Control-Monad-Parallel.html#liftM2",
        "fct-type": "function",
        "title": "liftM2"
      },
      "index": {
        "description": "Like liftM2 but evaluating its two monadic arguments in parallel",
        "hierarchy": "Control Monad Parallel",
        "module": "Control.Monad.Parallel",
        "name": "liftM2",
        "normalized": "(a-\u003eb-\u003ec)-\u003ed a-\u003ed b-\u003ed c",
        "package": "monad-parallel",
        "partial": "",
        "signature": "(a-\u003eb-\u003ec)-\u003em a-\u003em b-\u003em c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-parallel/docs/Control-Monad-Parallel.html#v:liftM3",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eliftM3\u003c/a\u003e\u003c/code\u003e, but evaluating its three monadic arguments in parallel.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Parallel",
        "fct-package": "monad-parallel",
        "fct-signature": "(a1 -\u003e a2 -\u003e a3 -\u003e r) -\u003e m a1 -\u003e m a2 -\u003e m a3 -\u003e m r",
        "fct-source": "src/Control-Monad-Parallel.html#liftM3",
        "fct-type": "function",
        "title": "liftM3"
      },
      "index": {
        "description": "Like liftM3 but evaluating its three monadic arguments in parallel",
        "hierarchy": "Control Monad Parallel",
        "module": "Control.Monad.Parallel",
        "name": "liftM3",
        "normalized": "(a-\u003ea-\u003ea-\u003eb)-\u003ec a-\u003ec a-\u003ec a-\u003ec b",
        "package": "monad-parallel",
        "partial": "",
        "signature": "(a-\u003ea-\u003ea-\u003er)-\u003em a-\u003em a-\u003em a-\u003em r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-parallel/docs/Control-Monad-Parallel.html#v:mapM",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003emapM\u003c/a\u003e\u003c/code\u003e, but applying the function to the individual list items in parallel.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Parallel",
        "fct-package": "monad-parallel",
        "fct-signature": "(a -\u003e m b) -\u003e [a] -\u003e m [b]",
        "fct-source": "src/Control-Monad-Parallel.html#mapM",
        "fct-type": "function",
        "title": "mapM"
      },
      "index": {
        "description": "Like mapM but applying the function to the individual list items in parallel",
        "hierarchy": "Control Monad Parallel",
        "module": "Control.Monad.Parallel",
        "name": "mapM",
        "normalized": "(a-\u003eb c)-\u003e[a]-\u003eb[c]",
        "package": "monad-parallel",
        "partial": "",
        "signature": "(a-\u003em b)-\u003e[a]-\u003em[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-parallel/docs/Control-Monad-Parallel.html#v:replicateM",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ereplicateM\u003c/a\u003e\u003c/code\u003e, but executing the action multiple times in parallel.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Parallel",
        "fct-package": "monad-parallel",
        "fct-signature": "Int -\u003e m a -\u003e m [a]",
        "fct-source": "src/Control-Monad-Parallel.html#replicateM",
        "fct-type": "function",
        "title": "replicateM"
      },
      "index": {
        "description": "Like replicateM but executing the action multiple times in parallel",
        "hierarchy": "Control Monad Parallel",
        "module": "Control.Monad.Parallel",
        "name": "replicateM",
        "normalized": "Int-\u003ea b-\u003ea[b]",
        "package": "monad-parallel",
        "partial": "",
        "signature": "Int-\u003em a-\u003em[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-parallel/docs/Control-Monad-Parallel.html#v:replicateM_",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ereplicateM_\u003c/a\u003e\u003c/code\u003e, but executing the action multiple times in parallel.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Parallel",
        "fct-package": "monad-parallel",
        "fct-signature": "Int -\u003e m a -\u003e m ()",
        "fct-source": "src/Control-Monad-Parallel.html#replicateM_",
        "fct-type": "function",
        "title": "replicateM_"
      },
      "index": {
        "description": "Like replicateM but executing the action multiple times in parallel",
        "hierarchy": "Control Monad Parallel",
        "module": "Control.Monad.Parallel",
        "name": "replicateM_",
        "normalized": "Int-\u003ea b-\u003ea()",
        "package": "monad-parallel",
        "partial": "",
        "signature": "Int-\u003em a-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-parallel/docs/Control-Monad-Parallel.html#v:sequence",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003esequence\u003c/a\u003e\u003c/code\u003e, but executing the actions in parallel.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Parallel",
        "fct-package": "monad-parallel",
        "fct-signature": "[m a] -\u003e m [a]",
        "fct-source": "src/Control-Monad-Parallel.html#sequence",
        "fct-type": "function",
        "title": "sequence"
      },
      "index": {
        "description": "Like sequence but executing the actions in parallel",
        "hierarchy": "Control Monad Parallel",
        "module": "Control.Monad.Parallel",
        "name": "sequence",
        "normalized": "[a b]-\u003ea[b]",
        "package": "monad-parallel",
        "partial": "",
        "signature": "[m a]-\u003em[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-parallel/docs/Control-Monad-Parallel.html#v:sequence_",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003esequence_\u003c/a\u003e\u003c/code\u003e, but executing the actions in parallel.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Parallel",
        "fct-package": "monad-parallel",
        "fct-signature": "[m a] -\u003e m ()",
        "fct-source": "src/Control-Monad-Parallel.html#sequence_",
        "fct-type": "function",
        "title": "sequence_"
      },
      "index": {
        "description": "Like sequence but executing the actions in parallel",
        "hierarchy": "Control Monad Parallel",
        "module": "Control.Monad.Parallel",
        "name": "sequence_",
        "normalized": "[a b]-\u003ea()",
        "package": "monad-parallel",
        "partial": "",
        "signature": "[m a]-\u003em()"
      }
    }
  }
]