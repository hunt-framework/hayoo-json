[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bf-cata/docs/Data-BreadthFirstCata-Cata.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSome combinators to express breadth-first evaluation of catamorphisms,\n which allows you to stepwise evaluate the results of children. If,\n during the evaluation of an alternative, a choice needs to be made between taking\n the results of its children, with these combinators, you can stepwise\n evaluate the children in parallel, until a choice can be made.\n Until a choice is made, evaluation proceeds strictly; after a choice\n is made, evaluation proceeds lazily.\n What constitutes to be a step is determined by the callee.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.BreadthFirstCata.Cata",
        "fct-package": "bf-cata",
        "fct-signature": "module",
        "fct-source": "src/Data-BreadthFirstCata-Cata.html",
        "fct-type": "module",
        "title": "Cata"
      },
      "index": {
        "description": "Some combinators to express breadth-first evaluation of catamorphisms which allows you to stepwise evaluate the results of children If during the evaluation of an alternative choice needs to be made between taking the results of its children with these combinators you can stepwise evaluate the children in parallel until choice can be made Until choice is made evaluation proceeds strictly after choice is made evaluation proceeds lazily What constitutes to be step is determined by the callee",
        "hierarchy": "Data BreadthFirstCata Cata",
        "module": "Data.BreadthFirstCata.Cata",
        "name": "Cata",
        "normalized": "",
        "package": "bf-cata",
        "partial": "Cata",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bf-cata/docs/Data-BreadthFirstCata-Cata.html#t:Child",
      "description": {
        "fct-descr": "\u003cp\u003eSemantics of a child of type \u003ccode\u003en\u003c/code\u003e as a function from inherited\n attributes (\u003ccode\u003eInh n\u003c/code\u003e) to a computation \u003ccode\u003eComp i n\u003c/code\u003e of synthesized attributes (\u003ccode\u003eSyn n\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Data.BreadthFirstCata.Cata",
        "fct-package": "bf-cata",
        "fct-signature": "newtype",
        "fct-source": "src/Data-BreadthFirstCata-Cata.html#Child",
        "fct-type": "newtype",
        "title": "Child"
      },
      "index": {
        "description": "Semantics of child of type as function from inherited attributes Inh to computation Comp of synthesized attributes Syn",
        "hierarchy": "Data BreadthFirstCata Cata",
        "module": "Data.BreadthFirstCata.Cata",
        "name": "Child",
        "normalized": "",
        "package": "bf-cata",
        "partial": "Child",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bf-cata/docs/Data-BreadthFirstCata-Cata.html#t:Comp",
      "description": {
        "fct-descr": "\u003cp\u003eComputation of synthesized attributes of nonterminal of type \u003ccode\u003en\u003c/code\u003e.\n It is a trace of \u003ccode\u003eInfo\u003c/code\u003e-effects, that keeps track of the intermediate\n states of the tree (using \u003ccode\u003ePending\u003c/code\u003e), ending ultimately in the\n synthesized values (using \u003ccode\u003eFinal\u003c/code\u003e).\n Operationally, we lift \u003ccode\u003eInfo\u003c/code\u003e-values over \u003ccode\u003ePending\u003c/code\u003e-values, thereby\n gradually rewriting the latter, until it results in a \u003ccode\u003eFinal\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.BreadthFirstCata.Cata",
        "fct-package": "bf-cata",
        "fct-signature": "data",
        "fct-source": "src/Data-BreadthFirstCata-Cata.html#Comp",
        "fct-type": "data",
        "title": "Comp"
      },
      "index": {
        "description": "Computation of synthesized attributes of nonterminal of type It is trace of Info effects that keeps track of the intermediate states of the tree using Pending ending ultimately in the synthesized values using Final Operationally we lift Info values over Pending values thereby gradually rewriting the latter until it results in Final",
        "hierarchy": "Data BreadthFirstCata Cata",
        "module": "Data.BreadthFirstCata.Cata",
        "name": "Comp",
        "normalized": "",
        "package": "bf-cata",
        "partial": "Comp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bf-cata/docs/Data-BreadthFirstCata-Cata.html#t:Inh",
      "description": {
        "fct-module": "Data.BreadthFirstCata.Cata",
        "fct-package": "bf-cata",
        "fct-signature": "Inh",
        "fct-type": "function",
        "title": "Inh"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BreadthFirstCata Cata",
        "module": "Data.BreadthFirstCata.Cata",
        "name": "Inh",
        "normalized": "",
        "package": "bf-cata",
        "partial": "Inh",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bf-cata/docs/Data-BreadthFirstCata-Cata.html#t:Inject",
      "description": {
        "fct-descr": "\u003cp\u003eInjection of steps as conventional call\n\u003c/p\u003e",
        "fct-module": "Data.BreadthFirstCata.Cata",
        "fct-package": "bf-cata",
        "fct-signature": "data",
        "fct-source": "src/Data-BreadthFirstCata-Cata.html#Inject",
        "fct-type": "data",
        "title": "Inject"
      },
      "index": {
        "description": "Injection of steps as conventional call",
        "hierarchy": "Data BreadthFirstCata Cata",
        "module": "Data.BreadthFirstCata.Cata",
        "name": "Inject",
        "normalized": "",
        "package": "bf-cata",
        "partial": "Inject",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bf-cata/docs/Data-BreadthFirstCata-Cata.html#t:Outcome",
      "description": {
        "fct-descr": "\u003cp\u003eResult of one step evaluation: either the final result\n or an updated computation. What constitutes to a step\n depends on the application: evaluation proceeds until\n an outcome can be given.\n\u003c/p\u003e",
        "fct-module": "Data.BreadthFirstCata.Cata",
        "fct-package": "bf-cata",
        "fct-signature": "data",
        "fct-source": "src/Data-BreadthFirstCata-Cata.html#Outcome",
        "fct-type": "data",
        "title": "Outcome"
      },
      "index": {
        "description": "Result of one step evaluation either the final result or an updated computation What constitutes to step depends on the application evaluation proceeds until an outcome can be given",
        "hierarchy": "Data BreadthFirstCata Cata",
        "module": "Data.BreadthFirstCata.Cata",
        "name": "Outcome",
        "normalized": "",
        "package": "bf-cata",
        "partial": "Outcome",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bf-cata/docs/Data-BreadthFirstCata-Cata.html#t:Syn",
      "description": {
        "fct-module": "Data.BreadthFirstCata.Cata",
        "fct-package": "bf-cata",
        "fct-signature": "Syn",
        "fct-type": "function",
        "title": "Syn"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BreadthFirstCata Cata",
        "module": "Data.BreadthFirstCata.Cata",
        "name": "Syn",
        "normalized": "",
        "package": "bf-cata",
        "partial": "Syn",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bf-cata/docs/Data-BreadthFirstCata-Cata.html#v:Child",
      "description": {
        "fct-module": "Data.BreadthFirstCata.Cata",
        "fct-package": "bf-cata",
        "fct-signature": "Child (Inh n -\u003e Comp i n)",
        "fct-source": "src/Data-BreadthFirstCata-Cata.html#Child",
        "fct-type": "function",
        "title": "Child"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BreadthFirstCata Cata",
        "module": "Data.BreadthFirstCata.Cata",
        "name": "Child",
        "normalized": "Child(Inh a-\u003eComp b a)",
        "package": "bf-cata",
        "partial": "Child",
        "signature": "Child(Inh n-\u003eComp i n)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bf-cata/docs/Data-BreadthFirstCata-Cata.html#v:Fin",
      "description": {
        "fct-module": "Data.BreadthFirstCata.Cata",
        "fct-package": "bf-cata",
        "fct-signature": "Fin !(Syn n)",
        "fct-source": "src/Data-BreadthFirstCata-Cata.html#Outcome",
        "fct-type": "function",
        "title": "Fin"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BreadthFirstCata Cata",
        "module": "Data.BreadthFirstCata.Cata",
        "name": "Fin",
        "normalized": "",
        "package": "bf-cata",
        "partial": "Fin",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bf-cata/docs/Data-BreadthFirstCata-Cata.html#v:Step",
      "description": {
        "fct-module": "Data.BreadthFirstCata.Cata",
        "fct-package": "bf-cata",
        "fct-signature": "Step !i (Comp i n)",
        "fct-source": "src/Data-BreadthFirstCata-Cata.html#Outcome",
        "fct-type": "function",
        "title": "Step"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BreadthFirstCata Cata",
        "module": "Data.BreadthFirstCata.Cata",
        "name": "Step",
        "normalized": "",
        "package": "bf-cata",
        "partial": "Step",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bf-cata/docs/Data-BreadthFirstCata-Cata.html#v:final",
      "description": {
        "fct-descr": "\u003cp\u003eWrapper for final result.\n\u003c/p\u003e",
        "fct-module": "Data.BreadthFirstCata.Cata",
        "fct-package": "bf-cata",
        "fct-signature": "Syn n -\u003e Comp i n",
        "fct-source": "src/Data-BreadthFirstCata-Cata.html#final",
        "fct-type": "function",
        "title": "final"
      },
      "index": {
        "description": "Wrapper for final result",
        "hierarchy": "Data BreadthFirstCata Cata",
        "module": "Data.BreadthFirstCata.Cata",
        "name": "final",
        "normalized": "Syn a-\u003eComp b a",
        "package": "bf-cata",
        "partial": "",
        "signature": "Syn n-\u003eComp i n"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bf-cata/docs/Data-BreadthFirstCata-Cata.html#v:info",
      "description": {
        "fct-descr": "\u003cp\u003eWrapper for an effect.\n\u003c/p\u003e",
        "fct-module": "Data.BreadthFirstCata.Cata",
        "fct-package": "bf-cata",
        "fct-signature": "i -\u003e Comp i n -\u003e Comp i n",
        "fct-source": "src/Data-BreadthFirstCata-Cata.html#info",
        "fct-type": "function",
        "title": "info"
      },
      "index": {
        "description": "Wrapper for an effect",
        "hierarchy": "Data BreadthFirstCata Cata",
        "module": "Data.BreadthFirstCata.Cata",
        "name": "info",
        "normalized": "a-\u003eComp a b-\u003eComp a b",
        "package": "bf-cata",
        "partial": "",
        "signature": "i-\u003eComp i n-\u003eComp i n"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bf-cata/docs/Data-BreadthFirstCata-Cata.html#v:inject",
      "description": {
        "fct-module": "Data.BreadthFirstCata.Cata",
        "fct-package": "bf-cata",
        "fct-signature": "i -\u003e Comp i Inject",
        "fct-source": "src/Data-BreadthFirstCata-Cata.html#inject",
        "fct-type": "function",
        "title": "inject"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BreadthFirstCata Cata",
        "module": "Data.BreadthFirstCata.Cata",
        "name": "inject",
        "normalized": "a-\u003eComp a Inject",
        "package": "bf-cata",
        "partial": "",
        "signature": "i-\u003eComp i Inject"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bf-cata/docs/Data-BreadthFirstCata-Cata.html#v:invoke",
      "description": {
        "fct-descr": "\u003cp\u003eUnwraps a \u003ccode\u003eChild\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.BreadthFirstCata.Cata",
        "fct-package": "bf-cata",
        "fct-signature": "Child i n -\u003e Inh n -\u003e Comp i n",
        "fct-source": "src/Data-BreadthFirstCata-Cata.html#invoke",
        "fct-type": "function",
        "title": "invoke"
      },
      "index": {
        "description": "Unwraps Child",
        "hierarchy": "Data BreadthFirstCata Cata",
        "module": "Data.BreadthFirstCata.Cata",
        "name": "invoke",
        "normalized": "Child a b-\u003eInh b-\u003eComp a b",
        "package": "bf-cata",
        "partial": "",
        "signature": "Child i n-\u003eInh n-\u003eComp i n"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bf-cata/docs/Data-BreadthFirstCata-Cata.html#v:lazyEval",
      "description": {
        "fct-descr": "\u003cp\u003eLazy evaluation of a computation.\n Note: we cannot inspect the effect-trace, as it would sequentialize\n the evaluation of children.\n\u003c/p\u003e",
        "fct-module": "Data.BreadthFirstCata.Cata",
        "fct-package": "bf-cata",
        "fct-signature": "Comp i n -\u003e Syn n",
        "fct-source": "src/Data-BreadthFirstCata-Cata.html#lazyEval",
        "fct-type": "function",
        "title": "lazyEval"
      },
      "index": {
        "description": "Lazy evaluation of computation Note we cannot inspect the effect-trace as it would sequentialize the evaluation of children",
        "hierarchy": "Data BreadthFirstCata Cata",
        "module": "Data.BreadthFirstCata.Cata",
        "name": "lazyEval",
        "normalized": "Comp a b-\u003eSyn b",
        "package": "bf-cata",
        "partial": "Eval",
        "signature": "Comp i n-\u003eSyn n"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bf-cata/docs/Data-BreadthFirstCata-Cata.html#v:oneStep",
      "description": {
        "fct-descr": "\u003cp\u003eOne step strict evaluation. Reduction proceeds until\n the computation is either finished or yields an \u003ccode\u003eInfo\u003c/code\u003e-effect.\n\u003c/p\u003e",
        "fct-module": "Data.BreadthFirstCata.Cata",
        "fct-package": "bf-cata",
        "fct-signature": "Comp i n -\u003e Outcome i n",
        "fct-source": "src/Data-BreadthFirstCata-Cata.html#oneStep",
        "fct-type": "function",
        "title": "oneStep"
      },
      "index": {
        "description": "One step strict evaluation Reduction proceeds until the computation is either finished or yields an Info effect",
        "hierarchy": "Data BreadthFirstCata Cata",
        "module": "Data.BreadthFirstCata.Cata",
        "name": "oneStep",
        "normalized": "Comp a b-\u003eOutcome a b",
        "package": "bf-cata",
        "partial": "Step",
        "signature": "Comp i n-\u003eOutcome i n"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bf-cata/docs/Data-BreadthFirstCata-Cata.html#v:resume",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a |Pending| computation that waits for the given computation.\n\u003c/p\u003e",
        "fct-module": "Data.BreadthFirstCata.Cata",
        "fct-package": "bf-cata",
        "fct-signature": "Comp i n' -\u003e (Syn n' -\u003e Comp i n) -\u003e Comp i n",
        "fct-source": "src/Data-BreadthFirstCata-Cata.html#resume",
        "fct-type": "function",
        "title": "resume"
      },
      "index": {
        "description": "Create Pending computation that waits for the given computation",
        "hierarchy": "Data BreadthFirstCata Cata",
        "module": "Data.BreadthFirstCata.Cata",
        "name": "resume",
        "normalized": "Comp a b-\u003e(Syn b-\u003eComp a c)-\u003eComp a c",
        "package": "bf-cata",
        "partial": "",
        "signature": "Comp i n'-\u003e(Syn n'-\u003eComp i n)-\u003eComp i n"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bf-cata/docs/Data-BreadthFirstCata-Cata.html#v:sem_Inject",
      "description": {
        "fct-module": "Data.BreadthFirstCata.Cata",
        "fct-package": "bf-cata",
        "fct-signature": "Child i Inject",
        "fct-source": "src/Data-BreadthFirstCata-Cata.html#sem_Inject",
        "fct-type": "function",
        "title": "sem_Inject"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BreadthFirstCata Cata",
        "module": "Data.BreadthFirstCata.Cata",
        "name": "sem_Inject",
        "normalized": "",
        "package": "bf-cata",
        "partial": "Inject",
        "signature": ""
      }
    }
  }
]