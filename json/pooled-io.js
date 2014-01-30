[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pooled-io/docs/Control-Concurrent-PooledIO-Final.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements something similar to\n\u003ca\u003eControl.Concurrent.PooledIO.InOrder\u003c/a\u003e,\nbut since it is restricted to an \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e interface\nwe can implement it without \u003ccode\u003eunsafeInterleaveIO\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.PooledIO.Final",
        "fct-package": "pooled-io",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-PooledIO-Final.html",
        "fct-type": "module",
        "title": "Final"
      },
      "index": {
        "description": "This module implements something similar to Control.Concurrent.PooledIO.InOrder but since it is restricted to an Applicative interface we can implement it without unsafeInterleaveIO",
        "hierarchy": "Control Concurrent PooledIO Final",
        "module": "Control.Concurrent.PooledIO.Final",
        "name": "Final",
        "normalized": "",
        "package": "pooled-io",
        "partial": "Final",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pooled-io/docs/Control-Concurrent-PooledIO-Final.html#t:T",
      "description": {
        "fct-module": "Control.Concurrent.PooledIO.Final",
        "fct-package": "pooled-io",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-PooledIO-Final.html#T",
        "fct-type": "data",
        "title": "T"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent PooledIO Final",
        "module": "Control.Concurrent.PooledIO.Final",
        "name": "T",
        "normalized": "",
        "package": "pooled-io",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pooled-io/docs/Control-Concurrent-PooledIO-Final.html#v:fork",
      "description": {
        "fct-descr": "\u003cp\u003eThis runs an action parallelly to the starting thread.\nSince it is an Applicative Functor and not a Monad,\nthere are no data dependencies between the actions\nand thus all actions in a \u003ccode\u003e\u003ca\u003eT\u003c/a\u003e\u003c/code\u003e can be run parallelly.\nOnly the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e actions are parallelised\nbut not the combining function passed to \u003ccode\u003eliftA2\u003c/code\u003e et.al.\nThat is, the main work must be done in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e actions\nin order to benefit from parallelisation.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.PooledIO.Final",
        "fct-package": "pooled-io",
        "fct-signature": "IO a -\u003e T a",
        "fct-source": "src/Control-Concurrent-PooledIO-Final.html#fork",
        "fct-type": "function",
        "title": "fork"
      },
      "index": {
        "description": "This runs an action parallelly to the starting thread Since it is an Applicative Functor and not Monad there are no data dependencies between the actions and thus all actions in can be run parallelly Only the IO actions are parallelised but not the combining function passed to liftA2 et.al That is the main work must be done in the IO actions in order to benefit from parallelisation",
        "hierarchy": "Control Concurrent PooledIO Final",
        "module": "Control.Concurrent.PooledIO.Final",
        "name": "fork",
        "normalized": "IO a-\u003eT a",
        "package": "pooled-io",
        "partial": "",
        "signature": "IO a-\u003eT a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pooled-io/docs/Control-Concurrent-PooledIO-Final.html#v:run",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003erunLimited\u003c/a\u003e\u003c/code\u003e with a maximum of \u003ccode\u003enumCapabilites\u003c/code\u003e threads.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.PooledIO.Final",
        "fct-package": "pooled-io",
        "fct-signature": "T a -\u003e IO a",
        "fct-source": "src/Control-Concurrent-PooledIO-Final.html#run",
        "fct-type": "function",
        "title": "run"
      },
      "index": {
        "description": "runLimited with maximum of numCapabilites threads",
        "hierarchy": "Control Concurrent PooledIO Final",
        "module": "Control.Concurrent.PooledIO.Final",
        "name": "run",
        "normalized": "T a-\u003eIO a",
        "package": "pooled-io",
        "partial": "",
        "signature": "T a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pooled-io/docs/Control-Concurrent-PooledIO-Final.html#v:runLimited",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003erunLimited n\u003c/code\u003e runs several actions in a pool with at most \u003ccode\u003en\u003c/code\u003e threads.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.PooledIO.Final",
        "fct-package": "pooled-io",
        "fct-signature": "Int -\u003e T a -\u003e IO a",
        "fct-source": "src/Control-Concurrent-PooledIO-Final.html#runLimited",
        "fct-type": "function",
        "title": "runLimited"
      },
      "index": {
        "description": "runLimited runs several actions in pool with at most threads",
        "hierarchy": "Control Concurrent PooledIO Final",
        "module": "Control.Concurrent.PooledIO.Final",
        "name": "runLimited",
        "normalized": "Int-\u003eT a-\u003eIO a",
        "package": "pooled-io",
        "partial": "Limited",
        "signature": "Int-\u003eT a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pooled-io/docs/Control-Concurrent-PooledIO-InOrder.html#",
      "description": {
        "fct-module": "Control.Concurrent.PooledIO.InOrder",
        "fct-package": "pooled-io",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-PooledIO-InOrder.html",
        "fct-type": "module",
        "title": "InOrder"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent PooledIO InOrder",
        "module": "Control.Concurrent.PooledIO.InOrder",
        "name": "InOrder",
        "normalized": "",
        "package": "pooled-io",
        "partial": "In Order",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pooled-io/docs/Control-Concurrent-PooledIO-InOrder.html#t:T",
      "description": {
        "fct-module": "Control.Concurrent.PooledIO.InOrder",
        "fct-package": "pooled-io",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-PooledIO-InOrder.html#T",
        "fct-type": "data",
        "title": "T"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent PooledIO InOrder",
        "module": "Control.Concurrent.PooledIO.InOrder",
        "name": "T",
        "normalized": "",
        "package": "pooled-io",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pooled-io/docs/Control-Concurrent-PooledIO-InOrder.html#v:fork",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efork\u003c/a\u003e\u003c/code\u003e runs an IO action in parallel\nwhile respecting a maximum number of threads.\nEvaluating the result of \u003ccode\u003e\u003ca\u003eT\u003c/a\u003e\u003c/code\u003e\nwaits for the termination of the according thread.\n\u003c/p\u003e\u003cp\u003eUnfortunately, this means that sometimes threads are bored:\n\u003c/p\u003e\u003cpre\u003e foo a b = do\n    c \u003c- fork $ f a\n    d \u003c- fork $ g c\n    e \u003c- fork $ h b\n\u003c/pre\u003e\u003cp\u003eHere the execution of \u003ccode\u003eg c\u003c/code\u003e reserves a thread\nbut starts with waiting for the evaluation of \u003ccode\u003ec\u003c/code\u003e.\nIt would be certainly better to execute \u003ccode\u003eh b\u003c/code\u003e first.\nYou may relax this problem by moving dependent actions\naway from another as much as possible.\nIt would be optimal to have an \u003ccode\u003eOutOfOrder\u003c/code\u003e monad,\nbut this is more difficult to implement.\n\u003c/p\u003e\u003cp\u003eAlthough we fork all actions in order,\nthe fork itself might re-order the actions.\nThus the actions must not rely on a particular order\nother than the order imposed by data dependencies.\nWe enforce with the \u003ccode\u003e\u003ca\u003eNFData\u003c/a\u003e\u003c/code\u003e constraint\nthat the computation is actually completed\nwhen the thread terminates.\n\u003c/p\u003e\u003cp\u003eCurrently the monad does not handle exceptions.\nIt's certainly best to use a package with explicit exception handling\nlike \u003ccode\u003eexplicit-exception\u003c/code\u003e in order to tunnel exception information\nfrom the forked action to the main thread.\n\u003c/p\u003e\u003cp\u003eAlthough \u003ccode\u003e\u003ca\u003efork\u003c/a\u003e\u003c/code\u003e has almost the same type signature as \u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e\nwe do not define \u003ccode\u003einstance MonadIO InOrder.T\u003c/code\u003e\nsince this definition would not satisfy the laws required by the \u003ccode\u003e\u003ca\u003eMonadIO\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.PooledIO.InOrder",
        "fct-package": "pooled-io",
        "fct-signature": "IO a -\u003e T a",
        "fct-source": "src/Control-Concurrent-PooledIO-InOrder.html#fork",
        "fct-type": "function",
        "title": "fork"
      },
      "index": {
        "description": "fork runs an IO action in parallel while respecting maximum number of threads Evaluating the result of waits for the termination of the according thread Unfortunately this means that sometimes threads are bored foo do fork fork fork Here the execution of reserves thread but starts with waiting for the evaluation of It would be certainly better to execute first You may relax this problem by moving dependent actions away from another as much as possible It would be optimal to have an OutOfOrder monad but this is more difficult to implement Although we fork all actions in order the fork itself might re-order the actions Thus the actions must not rely on particular order other than the order imposed by data dependencies We enforce with the NFData constraint that the computation is actually completed when the thread terminates Currently the monad does not handle exceptions It certainly best to use package with explicit exception handling like explicit-exception in order to tunnel exception information from the forked action to the main thread Although fork has almost the same type signature as liftIO we do not define instance MonadIO InOrder.T since this definition would not satisfy the laws required by the MonadIO class",
        "hierarchy": "Control Concurrent PooledIO InOrder",
        "module": "Control.Concurrent.PooledIO.InOrder",
        "name": "fork",
        "normalized": "IO a-\u003eT a",
        "package": "pooled-io",
        "partial": "",
        "signature": "IO a-\u003eT a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pooled-io/docs/Control-Concurrent-PooledIO-InOrder.html#v:run",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003erunLimited\u003c/a\u003e\u003c/code\u003e with a maximum of \u003ccode\u003enumCapabilites\u003c/code\u003e threads.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.PooledIO.InOrder",
        "fct-package": "pooled-io",
        "fct-signature": "T a -\u003e IO a",
        "fct-source": "src/Control-Concurrent-PooledIO-InOrder.html#run",
        "fct-type": "function",
        "title": "run"
      },
      "index": {
        "description": "runLimited with maximum of numCapabilites threads",
        "hierarchy": "Control Concurrent PooledIO InOrder",
        "module": "Control.Concurrent.PooledIO.InOrder",
        "name": "run",
        "normalized": "T a-\u003eIO a",
        "package": "pooled-io",
        "partial": "",
        "signature": "T a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pooled-io/docs/Control-Concurrent-PooledIO-InOrder.html#v:runLimited",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003erunLimited n\u003c/code\u003e runs several actions in a pool with at most \u003ccode\u003en\u003c/code\u003e threads.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.PooledIO.InOrder",
        "fct-package": "pooled-io",
        "fct-signature": "Int -\u003e T a -\u003e IO a",
        "fct-source": "src/Control-Concurrent-PooledIO-InOrder.html#runLimited",
        "fct-type": "function",
        "title": "runLimited"
      },
      "index": {
        "description": "runLimited runs several actions in pool with at most threads",
        "hierarchy": "Control Concurrent PooledIO InOrder",
        "module": "Control.Concurrent.PooledIO.InOrder",
        "name": "runLimited",
        "normalized": "Int-\u003eT a-\u003eIO a",
        "package": "pooled-io",
        "partial": "Limited",
        "signature": "Int-\u003eT a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pooled-io/docs/Control-Concurrent-PooledIO-Independent.html#",
      "description": {
        "fct-module": "Control.Concurrent.PooledIO.Independent",
        "fct-package": "pooled-io",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-PooledIO-Independent.html",
        "fct-type": "module",
        "title": "Independent"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent PooledIO Independent",
        "module": "Control.Concurrent.PooledIO.Independent",
        "name": "Independent",
        "normalized": "",
        "package": "pooled-io",
        "partial": "Independent",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pooled-io/docs/Control-Concurrent-PooledIO-Independent.html#v:run",
      "description": {
        "fct-descr": "\u003cp\u003eExecute all actions parallelly\nbut run at most \u003ccode\u003enumCapabilities\u003c/code\u003e threads at once.\nStop when all actions are finished.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.PooledIO.Independent",
        "fct-package": "pooled-io",
        "fct-signature": "[IO ()] -\u003e IO ()",
        "fct-source": "src/Control-Concurrent-PooledIO-Independent.html#run",
        "fct-type": "function",
        "title": "run"
      },
      "index": {
        "description": "Execute all actions parallelly but run at most numCapabilities threads at once Stop when all actions are finished",
        "hierarchy": "Control Concurrent PooledIO Independent",
        "module": "Control.Concurrent.PooledIO.Independent",
        "name": "run",
        "normalized": "[IO()]-\u003eIO()",
        "package": "pooled-io",
        "partial": "",
        "signature": "[IO()]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pooled-io/docs/Control-Concurrent-PooledIO-Independent.html#v:runLimited",
      "description": {
        "fct-module": "Control.Concurrent.PooledIO.Independent",
        "fct-package": "pooled-io",
        "fct-signature": "Int -\u003e [IO ()] -\u003e IO ()",
        "fct-source": "src/Control-Concurrent-PooledIO-Independent.html#runLimited",
        "fct-type": "function",
        "title": "runLimited"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent PooledIO Independent",
        "module": "Control.Concurrent.PooledIO.Independent",
        "name": "runLimited",
        "normalized": "Int-\u003e[IO()]-\u003eIO()",
        "package": "pooled-io",
        "partial": "Limited",
        "signature": "Int-\u003e[IO()]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pooled-io/docs/Control-Concurrent-PooledIO-Independent.html#v:runUnlimited",
      "description": {
        "fct-descr": "\u003cp\u003eExecute all actions parallelly without a bound an the number of threads.\nStop when all actions are finished.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.PooledIO.Independent",
        "fct-package": "pooled-io",
        "fct-signature": "[IO ()] -\u003e IO ()",
        "fct-source": "src/Control-Concurrent-PooledIO-Independent.html#runUnlimited",
        "fct-type": "function",
        "title": "runUnlimited"
      },
      "index": {
        "description": "Execute all actions parallelly without bound an the number of threads Stop when all actions are finished",
        "hierarchy": "Control Concurrent PooledIO Independent",
        "module": "Control.Concurrent.PooledIO.Independent",
        "name": "runUnlimited",
        "normalized": "[IO()]-\u003eIO()",
        "package": "pooled-io",
        "partial": "Unlimited",
        "signature": "[IO()]-\u003eIO()"
      }
    }
  }
]