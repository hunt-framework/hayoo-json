[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-sa/docs/Control-Concurrent-Annealer.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe traditional simulated annealing is to maintain a current state,\n and repeatedly perturb it, keeping or discarding the perturbed state\n depending on the difference in an energy function and a \u003ca\u003etemperature,\u003c/a\u003e\n which changes as a function of time.  This concurrent\n SA implementation maintains a population of current states which are\n perturbed, and lower-ranked states are deleted according to a temperature\n function.  It is intended as a lightweight approach to parallelizing\n optimization problems.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.Annealer",
        "fct-package": "concurrent-sa",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-Annealer.html",
        "fct-type": "module",
        "title": "Annealer"
      },
      "index": {
        "description": "The traditional simulated annealing is to maintain current state and repeatedly perturb it keeping or discarding the perturbed state depending on the difference in an energy function and temperature which changes as function of time This concurrent SA implementation maintains population of current states which are perturbed and lower-ranked states are deleted according to temperature function It is intended as lightweight approach to parallelizing optimization problems",
        "hierarchy": "Control Concurrent Annealer",
        "module": "Control.Concurrent.Annealer",
        "name": "Annealer",
        "normalized": "",
        "package": "concurrent-sa",
        "partial": "Annealer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-sa/docs/Control-Concurrent-Annealer.html#t:Annealer",
      "description": {
        "fct-descr": "\u003cp\u003eAn annealer.  Maintains a population of states and a perturbation function.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Annealer",
        "fct-package": "concurrent-sa",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-Annealer.html#Annealer",
        "fct-type": "data",
        "title": "Annealer"
      },
      "index": {
        "description": "An annealer Maintains population of states and perturbation function",
        "hierarchy": "Control Concurrent Annealer",
        "module": "Control.Concurrent.Annealer",
        "name": "Annealer",
        "normalized": "",
        "package": "concurrent-sa",
        "partial": "Annealer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-sa/docs/Control-Concurrent-Annealer.html#v:annealForTime",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eannealForTime\u003c/a\u003e\u003c/code\u003e nThreads microTime annealer\u003c/code\u003e runs \u003ccode\u003enThreads\u003c/code\u003e annealing threads for the specified length of time.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Annealer",
        "fct-package": "concurrent-sa",
        "fct-signature": "Int -\u003e Int -\u003e Annealer s e -\u003e IO s",
        "fct-source": "src/Control-Concurrent-Annealer.html#annealForTime",
        "fct-type": "function",
        "title": "annealForTime"
      },
      "index": {
        "description": "annealForTime nThreads microTime annealer runs nThreads annealing threads for the specified length of time",
        "hierarchy": "Control Concurrent Annealer",
        "module": "Control.Concurrent.Annealer",
        "name": "annealForTime",
        "normalized": "Int-\u003eInt-\u003eAnnealer a b-\u003eIO a",
        "package": "concurrent-sa",
        "partial": "For Time",
        "signature": "Int-\u003eInt-\u003eAnnealer s e-\u003eIO s"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-sa/docs/Control-Concurrent-Annealer.html#v:getBestState",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the current best state in the annealer.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Annealer",
        "fct-package": "concurrent-sa",
        "fct-signature": "Annealer s e -\u003e IO s",
        "fct-source": "src/Control-Concurrent-Annealer.html#getBestState",
        "fct-type": "function",
        "title": "getBestState"
      },
      "index": {
        "description": "Returns the current best state in the annealer",
        "hierarchy": "Control Concurrent Annealer",
        "module": "Control.Concurrent.Annealer",
        "name": "getBestState",
        "normalized": "Annealer a b-\u003eIO a",
        "package": "concurrent-sa",
        "partial": "Best State",
        "signature": "Annealer s e-\u003eIO s"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-sa/docs/Control-Concurrent-Annealer.html#v:initAnnealer",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003einitAnnealer\u003c/a\u003e\u003c/code\u003e initPop energyFunc popSize perturb\u003c/code\u003e initializes an annealer.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Annealer",
        "fct-package": "concurrent-sa",
        "fct-signature": "[s] -\u003e (s -\u003e e) -\u003e Int -\u003e (s -\u003e IO s) -\u003e IO (Annealer s e)",
        "fct-source": "src/Control-Concurrent-Annealer.html#initAnnealer",
        "fct-type": "function",
        "title": "initAnnealer"
      },
      "index": {
        "description": "initAnnealer initPop energyFunc popSize perturb initializes an annealer",
        "hierarchy": "Control Concurrent Annealer",
        "module": "Control.Concurrent.Annealer",
        "name": "initAnnealer",
        "normalized": "[a]-\u003e(a-\u003eb)-\u003eInt-\u003e(a-\u003eIO a)-\u003eIO(Annealer a b)",
        "package": "concurrent-sa",
        "partial": "Annealer",
        "signature": "[s]-\u003e(s-\u003ee)-\u003eInt-\u003e(s-\u003eIO s)-\u003eIO(Annealer s e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-sa/docs/Control-Concurrent-Annealer.html#v:offerState",
      "description": {
        "fct-descr": "\u003cp\u003eOffer a state to the annealer.  Depending on the current\n population, the state may or may not be kept.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Annealer",
        "fct-package": "concurrent-sa",
        "fct-signature": "s -\u003e Annealer s e -\u003e IO ()",
        "fct-source": "src/Control-Concurrent-Annealer.html#offerState",
        "fct-type": "function",
        "title": "offerState"
      },
      "index": {
        "description": "Offer state to the annealer Depending on the current population the state may or may not be kept",
        "hierarchy": "Control Concurrent Annealer",
        "module": "Control.Concurrent.Annealer",
        "name": "offerState",
        "normalized": "a-\u003eAnnealer a b-\u003eIO()",
        "package": "concurrent-sa",
        "partial": "State",
        "signature": "s-\u003eAnnealer s e-\u003eIO()"
      }
    }
  }
]