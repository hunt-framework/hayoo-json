[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff-Choose.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eNondeterministic choice effect\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Eff.Choose",
        "fct-package": "extensible-effects",
        "fct-signature": "module",
        "fct-source": "src/Control-Eff-Choose.html",
        "fct-type": "module",
        "title": "Choose"
      },
      "index": {
        "description": "Nondeterministic choice effect",
        "hierarchy": "Control Eff Choose",
        "module": "Control.Eff.Choose",
        "name": "Choose",
        "normalized": "",
        "package": "extensible-effects",
        "partial": "Choose",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff-Choose.html#t:Choose",
      "description": {
        "fct-descr": "\u003cp\u003eNondeterministic choice\n\u003c/p\u003e",
        "fct-module": "Control.Eff.Choose",
        "fct-package": "extensible-effects",
        "fct-signature": "data",
        "fct-source": "src/Control-Eff-Choose.html#Choose",
        "fct-type": "data",
        "title": "Choose"
      },
      "index": {
        "description": "Nondeterministic choice",
        "hierarchy": "Control Eff Choose",
        "module": "Control.Eff.Choose",
        "name": "Choose",
        "normalized": "",
        "package": "extensible-effects",
        "partial": "Choose",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff-Choose.html#v:Choose",
      "description": {
        "fct-module": "Control.Eff.Choose",
        "fct-package": "extensible-effects",
        "fct-signature": "forall a . Choose [a] (a -\u003e v)",
        "fct-source": "src/Control-Eff-Choose.html#Choose",
        "fct-type": "function",
        "title": "Choose"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Eff Choose",
        "module": "Control.Eff.Choose",
        "name": "Choose",
        "normalized": "a b Choose[b](b-\u003ec)",
        "package": "extensible-effects",
        "partial": "Choose",
        "signature": "forall a Choose[a](a-\u003ev)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff-Choose.html#v:choose",
      "description": {
        "fct-descr": "\u003cp\u003echoose lst non-deterministically chooses one value from the lst\n choose [] thus corresponds to failure\n\u003c/p\u003e",
        "fct-module": "Control.Eff.Choose",
        "fct-package": "extensible-effects",
        "fct-signature": "[a] -\u003e Eff r a",
        "fct-source": "src/Control-Eff-Choose.html#choose",
        "fct-type": "function",
        "title": "choose"
      },
      "index": {
        "description": "choose lst non-deterministically chooses one value from the lst choose thus corresponds to failure",
        "hierarchy": "Control Eff Choose",
        "module": "Control.Eff.Choose",
        "name": "choose",
        "normalized": "[a]-\u003eEff b a",
        "package": "extensible-effects",
        "partial": "",
        "signature": "[a]-\u003eEff r a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff-Choose.html#v:mplus-39-",
      "description": {
        "fct-descr": "\u003cp\u003eMonadPlus-like operators are expressible via choose\n\u003c/p\u003e",
        "fct-module": "Control.Eff.Choose",
        "fct-package": "extensible-effects",
        "fct-signature": "Eff r a -\u003e Eff r a -\u003e Eff r a",
        "fct-source": "src/Control-Eff-Choose.html#mplus%27",
        "fct-type": "function",
        "title": "mplus'"
      },
      "index": {
        "description": "MonadPlus-like operators are expressible via choose",
        "hierarchy": "Control Eff Choose",
        "module": "Control.Eff.Choose",
        "name": "mplus'",
        "normalized": "Eff a b-\u003eEff a b-\u003eEff a b",
        "package": "extensible-effects",
        "partial": "",
        "signature": "Eff r a-\u003eEff r a-\u003eEff r a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff-Choose.html#v:mzero-39-",
      "description": {
        "fct-descr": "\u003cp\u003eMonadPlus-like operators are expressible via choose\n\u003c/p\u003e",
        "fct-module": "Control.Eff.Choose",
        "fct-package": "extensible-effects",
        "fct-signature": "Eff r a",
        "fct-source": "src/Control-Eff-Choose.html#mzero%27",
        "fct-type": "function",
        "title": "mzero'"
      },
      "index": {
        "description": "MonadPlus-like operators are expressible via choose",
        "hierarchy": "Control Eff Choose",
        "module": "Control.Eff.Choose",
        "name": "mzero'",
        "normalized": "",
        "package": "extensible-effects",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff-Choose.html#v:runChoice",
      "description": {
        "fct-descr": "\u003cp\u003eRun a nondeterministic effect, returning all values.\n\u003c/p\u003e",
        "fct-module": "Control.Eff.Choose",
        "fct-package": "extensible-effects",
        "fct-signature": "forall a r.  Eff (Choose :\u003e r) a -\u003e Eff r [a]",
        "fct-source": "src/Control-Eff-Choose.html#runChoice",
        "fct-type": "function",
        "title": "runChoice"
      },
      "index": {
        "description": "Run nondeterministic effect returning all values",
        "hierarchy": "Control Eff Choose",
        "module": "Control.Eff.Choose",
        "name": "runChoice",
        "normalized": "a b c Eff(Choose d)b-\u003eEff d[b]",
        "package": "extensible-effects",
        "partial": "Choice",
        "signature": "forall a r. Eff(Choose r)a-\u003eEff r[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff-Coroutine.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCoroutines implemented with extensible effects\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Eff.Coroutine",
        "fct-package": "extensible-effects",
        "fct-signature": "module",
        "fct-source": "src/Control-Eff-Coroutine.html",
        "fct-type": "module",
        "title": "Coroutine"
      },
      "index": {
        "description": "Coroutines implemented with extensible effects",
        "hierarchy": "Control Eff Coroutine",
        "module": "Control.Eff.Coroutine",
        "name": "Coroutine",
        "normalized": "",
        "package": "extensible-effects",
        "partial": "Coroutine",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff-Coroutine.html#t:Y",
      "description": {
        "fct-descr": "\u003cp\u003eStatus of a thread: done or reporting the value of the type a\n   (For simplicity, a co-routine reports a value but accepts unit)\n\u003c/p\u003e\u003cp\u003eType parameter \u003ccode\u003er\u003c/code\u003e is the effect we're yielding from.\n\u003c/p\u003e\u003cp\u003eType parameter \u003ccode\u003ea\u003c/code\u003e is the type that is yielded.\n\u003c/p\u003e\u003cp\u003eType parameter \u003ccode\u003ew\u003c/code\u003e is the type of the value returned from the\n   coroutine when it has completed.\n\u003c/p\u003e",
        "fct-module": "Control.Eff.Coroutine",
        "fct-package": "extensible-effects",
        "fct-signature": "data",
        "fct-source": "src/Control-Eff-Coroutine.html#Y",
        "fct-type": "data",
        "title": "Y"
      },
      "index": {
        "description": "Status of thread done or reporting the value of the type For simplicity co-routine reports value but accepts unit Type parameter is the effect we re yielding from Type parameter is the type that is yielded Type parameter is the type of the value returned from the coroutine when it has completed",
        "hierarchy": "Control Eff Coroutine",
        "module": "Control.Eff.Coroutine",
        "name": "Y",
        "normalized": "",
        "package": "extensible-effects",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff-Coroutine.html#t:Yield",
      "description": {
        "fct-descr": "\u003cp\u003eThe yield request: reporting a value of type e and suspending\n the coroutine. For readability, a coroutine accepts a unit to produce\n its value.\n\u003c/p\u003e",
        "fct-module": "Control.Eff.Coroutine",
        "fct-package": "extensible-effects",
        "fct-signature": "data",
        "fct-source": "src/Control-Eff-Coroutine.html#Yield",
        "fct-type": "data",
        "title": "Yield"
      },
      "index": {
        "description": "The yield request reporting value of type and suspending the coroutine For readability coroutine accepts unit to produce its value",
        "hierarchy": "Control Eff Coroutine",
        "module": "Control.Eff.Coroutine",
        "name": "Yield",
        "normalized": "",
        "package": "extensible-effects",
        "partial": "Yield",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff-Coroutine.html#v:Done",
      "description": {
        "fct-module": "Control.Eff.Coroutine",
        "fct-package": "extensible-effects",
        "fct-signature": "Done w",
        "fct-source": "src/Control-Eff-Coroutine.html#Y",
        "fct-type": "function",
        "title": "Done"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Eff Coroutine",
        "module": "Control.Eff.Coroutine",
        "name": "Done",
        "normalized": "",
        "package": "extensible-effects",
        "partial": "Done",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff-Coroutine.html#v:Y",
      "description": {
        "fct-module": "Control.Eff.Coroutine",
        "fct-package": "extensible-effects",
        "fct-signature": "Y a (() -\u003e Eff r (Y r a w))",
        "fct-source": "src/Control-Eff-Coroutine.html#Y",
        "fct-type": "function",
        "title": "Y"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Eff Coroutine",
        "module": "Control.Eff.Coroutine",
        "name": "Y",
        "normalized": "Y a(()-\u003eEff b(Y b a c))",
        "package": "extensible-effects",
        "partial": "",
        "signature": "Y a(()-\u003eEff r(Y r a w))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff-Coroutine.html#v:runC",
      "description": {
        "fct-descr": "\u003cp\u003eLaunch a thread and report its status.\n\u003c/p\u003e",
        "fct-module": "Control.Eff.Coroutine",
        "fct-package": "extensible-effects",
        "fct-signature": "Eff (Yield a :\u003e r) w -\u003e Eff r (Y r a w)",
        "fct-source": "src/Control-Eff-Coroutine.html#runC",
        "fct-type": "function",
        "title": "runC"
      },
      "index": {
        "description": "Launch thread and report its status",
        "hierarchy": "Control Eff Coroutine",
        "module": "Control.Eff.Coroutine",
        "name": "runC",
        "normalized": "Eff(Yield a b)c-\u003eEff b(Y b a c)",
        "package": "extensible-effects",
        "partial": "",
        "signature": "Eff(Yield a r)w-\u003eEff r(Y r a w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff-Coroutine.html#v:yield",
      "description": {
        "fct-descr": "\u003cp\u003eYield a value of type a and suspend the coroutine.\n\u003c/p\u003e",
        "fct-module": "Control.Eff.Coroutine",
        "fct-package": "extensible-effects",
        "fct-signature": "a -\u003e Eff r ()",
        "fct-source": "src/Control-Eff-Coroutine.html#yield",
        "fct-type": "function",
        "title": "yield"
      },
      "index": {
        "description": "Yield value of type and suspend the coroutine",
        "hierarchy": "Control Eff Coroutine",
        "module": "Control.Eff.Coroutine",
        "name": "yield",
        "normalized": "a-\u003eEff b()",
        "package": "extensible-effects",
        "partial": "",
        "signature": "a-\u003eEff r()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff-Cut.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn example of non-trivial interaction of effects, handling of two\n effects together\n Non-determinism with control (cut)\n For the explanation of cut, see Section 5 of Hinze ICFP 2000 paper.\n Hinze suggests expressing cut in terms of cutfalse:\n\u003c/p\u003e\u003cpre\u003e = return () `mplus` cutfalse\n where\n  cutfalse :: m a\n\u003c/pre\u003e\u003cp\u003esatisfies the following laws:\n\u003c/p\u003e\u003cpre\u003e  cutfalse \u003e\u003e= k  = cutfalse              (F1)\n  cutfalse | m    = cutfalse              (F2)\n\u003c/pre\u003e\u003cp\u003e(note: \u003ccode\u003em `\u003ccode\u003emplus\u003c/code\u003e` cutfalse\u003c/code\u003e is different from \u003ccode\u003ecutfalse `\u003ccode\u003emplus\u003c/code\u003e` m\u003c/code\u003e)\n In other words, cutfalse is the left zero of both bind and mplus.\n\u003c/p\u003e\u003cp\u003eHinze also introduces the operation \u003ccode\u003e\u003ccode\u003e\u003ca\u003ecall\u003c/a\u003e\u003c/code\u003e :: m a -\u003e m a\u003c/code\u003e that\n delimits the effect of cut: \u003ccode\u003e\u003ccode\u003e\u003ca\u003ecall\u003c/a\u003e\u003c/code\u003e m\u003c/code\u003e executes m. If the cut is\n invoked in m, it discards only the choices made since m was called.\n Hinze postulates the axioms of \u003ccode\u003e\u003ca\u003ecall\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e  call false = false                          (C1)\n  call (return a | m) = return a | call m     (C2)\n  call (m | cutfalse) = call m                (C3)\n  call (lift m \u003e\u003e= k) = lift m \u003e\u003e= (call . k) (C4)\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ecall\u003c/a\u003e\u003c/code\u003e m\u003c/code\u003e behaves like \u003ccode\u003em\u003c/code\u003e except any cut inside \u003ccode\u003em\u003c/code\u003e has only a local effect,\n he says.\n\u003c/p\u003e\u003cp\u003eHinze noted a problem with the \"mechanical\" derivation of backtracing\n monad transformer with cut: no axiom specifying the interaction of\n call with bind; no way to simplify nested invocations of call.\n\u003c/p\u003e\u003cp\u003eWe use exceptions for cutfalse\n Therefore, the law \u003ccode\u003ecutfalse \u003e\u003e= k = cutfalse\u003c/code\u003e\n is satisfied automatically since all exceptions have the above property.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Eff.Cut",
        "fct-package": "extensible-effects",
        "fct-signature": "module",
        "fct-source": "src/Control-Eff-Cut.html",
        "fct-type": "module",
        "title": "Cut"
      },
      "index": {
        "description": "An example of non-trivial interaction of effects handling of two effects together Non-determinism with control cut For the explanation of cut see Section of Hinze ICFP paper Hinze suggests expressing cut in terms of cutfalse return mplus cutfalse where cutfalse satisfies the following laws cutfalse cutfalse F1 cutfalse cutfalse F2 note mplus cutfalse is different from cutfalse mplus In other words cutfalse is the left zero of both bind and mplus Hinze also introduces the operation call that delimits the effect of cut call executes If the cut is invoked in it discards only the choices made since was called Hinze postulates the axioms of call call false false C1 call return return call C2 call cutfalse call C3 call lift lift call C4 call behaves like except any cut inside has only local effect he says Hinze noted problem with the mechanical derivation of backtracing monad transformer with cut no axiom specifying the interaction of call with bind no way to simplify nested invocations of call We use exceptions for cutfalse Therefore the law cutfalse cutfalse is satisfied automatically since all exceptions have the above property",
        "hierarchy": "Control Eff Cut",
        "module": "Control.Eff.Cut",
        "name": "Cut",
        "normalized": "",
        "package": "extensible-effects",
        "partial": "Cut",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff-Cut.html#t:CutFalse",
      "description": {
        "fct-module": "Control.Eff.Cut",
        "fct-package": "extensible-effects",
        "fct-signature": "data",
        "fct-source": "src/Control-Eff-Cut.html#CutFalse",
        "fct-type": "data",
        "title": "CutFalse"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Eff Cut",
        "module": "Control.Eff.Cut",
        "name": "CutFalse",
        "normalized": "",
        "package": "extensible-effects",
        "partial": "Cut False",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff-Cut.html#v:call",
      "description": {
        "fct-descr": "\u003cp\u003eThe interpreter -- it is like reify . reflect with a twist\n Compare this implementation with the huge implementation of call\n in Hinze 2000 (Figure 9)\n Each clause corresponds to the axiom of call or cutfalse.\n All axioms are covered.\n The code clearly expresses the intuition that call watches the choice points\n of its argument computation. When it encounteres a cutfalse request,\n it discards the remaining choicepoints.\n It completely handles CutFalse effects but not non-determinism.\n\u003c/p\u003e",
        "fct-module": "Control.Eff.Cut",
        "fct-package": "extensible-effects",
        "fct-signature": "Eff (Exc CutFalse :\u003e r) a -\u003e Eff r a",
        "fct-source": "src/Control-Eff-Cut.html#call",
        "fct-type": "function",
        "title": "call"
      },
      "index": {
        "description": "The interpreter it is like reify reflect with twist Compare this implementation with the huge implementation of call in Hinze Figure Each clause corresponds to the axiom of call or cutfalse All axioms are covered The code clearly expresses the intuition that call watches the choice points of its argument computation When it encounteres cutfalse request it discards the remaining choicepoints It completely handles CutFalse effects but not non-determinism",
        "hierarchy": "Control Eff Cut",
        "module": "Control.Eff.Cut",
        "name": "call",
        "normalized": "Eff(Exc CutFalse a)b-\u003eEff a b",
        "package": "extensible-effects",
        "partial": "",
        "signature": "Eff(Exc CutFalse r)a-\u003eEff r a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff-Cut.html#v:cutfalse",
      "description": {
        "fct-module": "Control.Eff.Cut",
        "fct-package": "extensible-effects",
        "fct-signature": "Eff r a",
        "fct-source": "src/Control-Eff-Cut.html#cutfalse",
        "fct-type": "function",
        "title": "cutfalse"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Eff Cut",
        "module": "Control.Eff.Cut",
        "name": "cutfalse",
        "normalized": "",
        "package": "extensible-effects",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff-Exception.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eException-producing and exception-handling effects\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Eff.Exception",
        "fct-package": "extensible-effects",
        "fct-signature": "module",
        "fct-source": "src/Control-Eff-Exception.html",
        "fct-type": "module",
        "title": "Exception"
      },
      "index": {
        "description": "Exception-producing and exception-handling effects",
        "hierarchy": "Control Eff Exception",
        "module": "Control.Eff.Exception",
        "name": "Exception",
        "normalized": "",
        "package": "extensible-effects",
        "partial": "Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff-Exception.html#t:Exc",
      "description": {
        "fct-descr": "\u003cp\u003eThese are exceptions of the type e. This is akin to the error monad.\n\u003c/p\u003e",
        "fct-module": "Control.Eff.Exception",
        "fct-package": "extensible-effects",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Eff-Exception.html#Exc",
        "fct-type": "newtype",
        "title": "Exc"
      },
      "index": {
        "description": "These are exceptions of the type This is akin to the error monad",
        "hierarchy": "Control Eff Exception",
        "module": "Control.Eff.Exception",
        "name": "Exc",
        "normalized": "",
        "package": "extensible-effects",
        "partial": "Exc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff-Exception.html#v:Exc",
      "description": {
        "fct-module": "Control.Eff.Exception",
        "fct-package": "extensible-effects",
        "fct-signature": "Exc e",
        "fct-source": "src/Control-Eff-Exception.html#Exc",
        "fct-type": "function",
        "title": "Exc"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Eff Exception",
        "module": "Control.Eff.Exception",
        "name": "Exc",
        "normalized": "",
        "package": "extensible-effects",
        "partial": "Exc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff-Exception.html#v:catchExc",
      "description": {
        "fct-descr": "\u003cp\u003eRun a computation that might produce exceptions,\n and give it a way to deal with the exceptions that come up.\n\u003c/p\u003e",
        "fct-module": "Control.Eff.Exception",
        "fct-package": "extensible-effects",
        "fct-signature": "Eff r a -\u003e (e -\u003e Eff r a) -\u003e Eff r a",
        "fct-source": "src/Control-Eff-Exception.html#catchExc",
        "fct-type": "function",
        "title": "catchExc"
      },
      "index": {
        "description": "Run computation that might produce exceptions and give it way to deal with the exceptions that come up",
        "hierarchy": "Control Eff Exception",
        "module": "Control.Eff.Exception",
        "name": "catchExc",
        "normalized": "Eff a b-\u003e(c-\u003eEff a b)-\u003eEff a b",
        "package": "extensible-effects",
        "partial": "Exc",
        "signature": "Eff r a-\u003e(e-\u003eEff r a)-\u003eEff r a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff-Exception.html#v:runExc",
      "description": {
        "fct-descr": "\u003cp\u003eRun a computation that might produce an exception.\n\u003c/p\u003e",
        "fct-module": "Control.Eff.Exception",
        "fct-package": "extensible-effects",
        "fct-signature": "Eff (Exc e :\u003e r) a -\u003e Eff r (Either e a)",
        "fct-source": "src/Control-Eff-Exception.html#runExc",
        "fct-type": "function",
        "title": "runExc"
      },
      "index": {
        "description": "Run computation that might produce an exception",
        "hierarchy": "Control Eff Exception",
        "module": "Control.Eff.Exception",
        "name": "runExc",
        "normalized": "Eff(Exc a b)c-\u003eEff b(Either a c)",
        "package": "extensible-effects",
        "partial": "Exc",
        "signature": "Eff(Exc e r)a-\u003eEff r(Either e a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff-Exception.html#v:throwExc",
      "description": {
        "fct-descr": "\u003cp\u003eThrow an exception in an effectful computation.\n\u003c/p\u003e",
        "fct-module": "Control.Eff.Exception",
        "fct-package": "extensible-effects",
        "fct-signature": "e -\u003e Eff r a",
        "fct-source": "src/Control-Eff-Exception.html#throwExc",
        "fct-type": "function",
        "title": "throwExc"
      },
      "index": {
        "description": "Throw an exception in an effectful computation",
        "hierarchy": "Control Eff Exception",
        "module": "Control.Eff.Exception",
        "name": "throwExc",
        "normalized": "a-\u003eEff b c",
        "package": "extensible-effects",
        "partial": "Exc",
        "signature": "e-\u003eEff r a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff-Fail.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEffects which fail.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Eff.Fail",
        "fct-package": "extensible-effects",
        "fct-signature": "module",
        "fct-source": "src/Control-Eff-Fail.html",
        "fct-type": "module",
        "title": "Fail"
      },
      "index": {
        "description": "Effects which fail",
        "hierarchy": "Control Eff Fail",
        "module": "Control.Eff.Fail",
        "name": "Fail",
        "normalized": "",
        "package": "extensible-effects",
        "partial": "Fail",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff-Fail.html#t:Fail",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eFail\u003c/a\u003e\u003c/code\u003e represents effects which can fail. This is akin to the Maybe monad.\n\u003c/p\u003e",
        "fct-module": "Control.Eff.Fail",
        "fct-package": "extensible-effects",
        "fct-signature": "data",
        "fct-source": "src/Control-Eff-Fail.html#Fail",
        "fct-type": "data",
        "title": "Fail"
      },
      "index": {
        "description": "Fail represents effects which can fail This is akin to the Maybe monad",
        "hierarchy": "Control Eff Fail",
        "module": "Control.Eff.Fail",
        "name": "Fail",
        "normalized": "",
        "package": "extensible-effects",
        "partial": "Fail",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff-Fail.html#v:die",
      "description": {
        "fct-descr": "\u003cp\u003eMakes an effect fail, preventing future effects from happening.\n\u003c/p\u003e",
        "fct-module": "Control.Eff.Fail",
        "fct-package": "extensible-effects",
        "fct-signature": "Eff r ()",
        "fct-source": "src/Control-Eff-Fail.html#die",
        "fct-type": "function",
        "title": "die"
      },
      "index": {
        "description": "Makes an effect fail preventing future effects from happening",
        "hierarchy": "Control Eff Fail",
        "module": "Control.Eff.Fail",
        "name": "die",
        "normalized": "Eff a()",
        "package": "extensible-effects",
        "partial": "",
        "signature": "Eff r()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff-Fail.html#v:ignoreFail",
      "description": {
        "fct-descr": "\u003cp\u003eIgnores a failure event. Since the event can fail, you cannot inspect its\n   return type, because it has none on failure. To inspect it, use \u003ccode\u003e\u003ca\u003erunFail\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Eff.Fail",
        "fct-package": "extensible-effects",
        "fct-signature": "Eff (Fail :\u003e r) a -\u003e Eff r ()",
        "fct-source": "src/Control-Eff-Fail.html#ignoreFail",
        "fct-type": "function",
        "title": "ignoreFail"
      },
      "index": {
        "description": "Ignores failure event Since the event can fail you cannot inspect its return type because it has none on failure To inspect it use runFail",
        "hierarchy": "Control Eff Fail",
        "module": "Control.Eff.Fail",
        "name": "ignoreFail",
        "normalized": "Eff(Fail a)b-\u003eEff a()",
        "package": "extensible-effects",
        "partial": "Fail",
        "signature": "Eff(Fail r)a-\u003eEff r()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff-Fail.html#v:onFail",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a computation to run on failure, and a computation that can fail,\n   this function runs the computation that can fail, and if it fails, gets\n   the return value from the other computation. This hides the fact that a\n   failure even happened, and returns a default value for when it does.\n\u003c/p\u003e",
        "fct-module": "Control.Eff.Fail",
        "fct-package": "extensible-effects",
        "fct-signature": "Eff r a-\u003e Eff (Fail :\u003e r) a-\u003e Eff r a",
        "fct-type": "function",
        "title": "onFail"
      },
      "index": {
        "description": "Given computation to run on failure and computation that can fail this function runs the computation that can fail and if it fails gets the return value from the other computation This hides the fact that failure even happened and returns default value for when it does",
        "hierarchy": "Control Eff Fail",
        "module": "Control.Eff.Fail",
        "name": "onFail",
        "normalized": "Eff a b-\u003eEff(Fail a)b-\u003eEff a b",
        "package": "extensible-effects",
        "partial": "Fail",
        "signature": "Eff r a-\u003eEff(Fail r)a-\u003eEff r a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff-Fail.html#v:runFail",
      "description": {
        "fct-descr": "\u003cp\u003eRuns a failable effect, such that failed computation return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, and\n   \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the return value on success.\n\u003c/p\u003e",
        "fct-module": "Control.Eff.Fail",
        "fct-package": "extensible-effects",
        "fct-signature": "Eff (Fail :\u003e r) a -\u003e Eff r (Maybe a)",
        "fct-source": "src/Control-Eff-Fail.html#runFail",
        "fct-type": "function",
        "title": "runFail"
      },
      "index": {
        "description": "Runs failable effect such that failed computation return Nothing and Just the return value on success",
        "hierarchy": "Control Eff Fail",
        "module": "Control.Eff.Fail",
        "name": "runFail",
        "normalized": "Eff(Fail a)b-\u003eEff a(Maybe b)",
        "package": "extensible-effects",
        "partial": "Fail",
        "signature": "Eff(Fail r)a-\u003eEff r(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff-Fresh.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCreate unique Enumerable values.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Eff.Fresh",
        "fct-package": "extensible-effects",
        "fct-signature": "module",
        "fct-source": "src/Control-Eff-Fresh.html",
        "fct-type": "module",
        "title": "Fresh"
      },
      "index": {
        "description": "Create unique Enumerable values",
        "hierarchy": "Control Eff Fresh",
        "module": "Control.Eff.Fresh",
        "name": "Fresh",
        "normalized": "",
        "package": "extensible-effects",
        "partial": "Fresh",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff-Fresh.html#t:Fresh",
      "description": {
        "fct-descr": "\u003cp\u003eCreate unique Enumerable values.\n\u003c/p\u003e",
        "fct-module": "Control.Eff.Fresh",
        "fct-package": "extensible-effects",
        "fct-signature": "data",
        "fct-source": "src/Control-Eff-Fresh.html#Fresh",
        "fct-type": "data",
        "title": "Fresh"
      },
      "index": {
        "description": "Create unique Enumerable values",
        "hierarchy": "Control Eff Fresh",
        "module": "Control.Eff.Fresh",
        "name": "Fresh",
        "normalized": "",
        "package": "extensible-effects",
        "partial": "Fresh",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff-Fresh.html#v:fresh",
      "description": {
        "fct-descr": "\u003cp\u003eProduce a value that has not been previously produced.\n\u003c/p\u003e",
        "fct-module": "Control.Eff.Fresh",
        "fct-package": "extensible-effects",
        "fct-signature": "Eff r i",
        "fct-source": "src/Control-Eff-Fresh.html#fresh",
        "fct-type": "function",
        "title": "fresh"
      },
      "index": {
        "description": "Produce value that has not been previously produced",
        "hierarchy": "Control Eff Fresh",
        "module": "Control.Eff.Fresh",
        "name": "fresh",
        "normalized": "",
        "package": "extensible-effects",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff-Fresh.html#v:runFresh",
      "description": {
        "fct-descr": "\u003cp\u003eRun an effect requiring unique values.\n\u003c/p\u003e",
        "fct-module": "Control.Eff.Fresh",
        "fct-package": "extensible-effects",
        "fct-signature": "Eff (Fresh i :\u003e r) w -\u003e i -\u003e Eff r w",
        "fct-source": "src/Control-Eff-Fresh.html#runFresh",
        "fct-type": "function",
        "title": "runFresh"
      },
      "index": {
        "description": "Run an effect requiring unique values",
        "hierarchy": "Control Eff Fresh",
        "module": "Control.Eff.Fresh",
        "name": "runFresh",
        "normalized": "Eff(Fresh a b)c-\u003ea-\u003eEff b c",
        "package": "extensible-effects",
        "partial": "Fresh",
        "signature": "Eff(Fresh i r)w-\u003ei-\u003eEff r w"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff-Lift.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLifting primitive Monad types to effectful computations.\n We only allow a single Lifted Monad because Monads aren't commutative\n (e.g. Maybe (IO a) is functionally distinct from IO (Maybe a)).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Eff.Lift",
        "fct-package": "extensible-effects",
        "fct-signature": "module",
        "fct-source": "src/Control-Eff-Lift.html",
        "fct-type": "module",
        "title": "Lift"
      },
      "index": {
        "description": "Lifting primitive Monad types to effectful computations We only allow single Lifted Monad because Monads aren commutative e.g Maybe IO is functionally distinct from IO Maybe",
        "hierarchy": "Control Eff Lift",
        "module": "Control.Eff.Lift",
        "name": "Lift",
        "normalized": "",
        "package": "extensible-effects",
        "partial": "Lift",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff-Lift.html#t:Lift",
      "description": {
        "fct-descr": "\u003cp\u003eLift a Monad m to an effect.\n\u003c/p\u003e",
        "fct-module": "Control.Eff.Lift",
        "fct-package": "extensible-effects",
        "fct-signature": "data",
        "fct-source": "src/Control-Eff-Lift.html#Lift",
        "fct-type": "data",
        "title": "Lift"
      },
      "index": {
        "description": "Lift Monad to an effect",
        "hierarchy": "Control Eff Lift",
        "module": "Control.Eff.Lift",
        "name": "Lift",
        "normalized": "",
        "package": "extensible-effects",
        "partial": "Lift",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff-Lift.html#v:lift",
      "description": {
        "fct-descr": "\u003cp\u003eLift a Monad to an Effect.\n\u003c/p\u003e",
        "fct-module": "Control.Eff.Lift",
        "fct-package": "extensible-effects",
        "fct-signature": "m a -\u003e Eff r a",
        "fct-source": "src/Control-Eff-Lift.html#lift",
        "fct-type": "function",
        "title": "lift"
      },
      "index": {
        "description": "Lift Monad to an Effect",
        "hierarchy": "Control Eff Lift",
        "module": "Control.Eff.Lift",
        "name": "lift",
        "normalized": "a b-\u003eEff c b",
        "package": "extensible-effects",
        "partial": "",
        "signature": "m a-\u003eEff r a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff-Lift.html#v:runLift",
      "description": {
        "fct-descr": "\u003cp\u003eThe handler of Lift requests. It is meant to be terminal:\n we only allow a single Lifted Monad.\n\u003c/p\u003e",
        "fct-module": "Control.Eff.Lift",
        "fct-package": "extensible-effects",
        "fct-signature": "Eff (Lift m :\u003e ()) w -\u003e m w",
        "fct-source": "src/Control-Eff-Lift.html#runLift",
        "fct-type": "function",
        "title": "runLift"
      },
      "index": {
        "description": "The handler of Lift requests It is meant to be terminal we only allow single Lifted Monad",
        "hierarchy": "Control Eff Lift",
        "module": "Control.Eff.Lift",
        "name": "runLift",
        "normalized": "Eff(Lift a())b-\u003ea b",
        "package": "extensible-effects",
        "partial": "Lift",
        "signature": "Eff(Lift m())w-\u003em w"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff-Reader-Lazy.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLazy read-only state\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Eff.Reader.Lazy",
        "fct-package": "extensible-effects",
        "fct-signature": "module",
        "fct-source": "src/Control-Eff-Reader-Lazy.html",
        "fct-type": "module",
        "title": "Lazy"
      },
      "index": {
        "description": "Lazy read-only state",
        "hierarchy": "Control Eff Reader Lazy",
        "module": "Control.Eff.Reader.Lazy",
        "name": "Lazy",
        "normalized": "",
        "package": "extensible-effects",
        "partial": "Lazy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff-Reader-Lazy.html#t:Reader",
      "description": {
        "fct-descr": "\u003cp\u003eThe request for a value of type e from the current environment.\n This environment is analogous to a parameter of type e.\n\u003c/p\u003e",
        "fct-module": "Control.Eff.Reader.Lazy",
        "fct-package": "extensible-effects",
        "fct-signature": "data",
        "fct-source": "src/Control-Eff-Reader-Lazy.html#Reader",
        "fct-type": "data",
        "title": "Reader"
      },
      "index": {
        "description": "The request for value of type from the current environment This environment is analogous to parameter of type",
        "hierarchy": "Control Eff Reader Lazy",
        "module": "Control.Eff.Reader.Lazy",
        "name": "Reader",
        "normalized": "",
        "package": "extensible-effects",
        "partial": "Reader",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff-Reader-Lazy.html#v:ask",
      "description": {
        "fct-descr": "\u003cp\u003eGet the current value from a Reader.\n\u003c/p\u003e",
        "fct-module": "Control.Eff.Reader.Lazy",
        "fct-package": "extensible-effects",
        "fct-signature": "Eff r e",
        "fct-source": "src/Control-Eff-Reader-Lazy.html#ask",
        "fct-type": "function",
        "title": "ask"
      },
      "index": {
        "description": "Get the current value from Reader",
        "hierarchy": "Control Eff Reader Lazy",
        "module": "Control.Eff.Reader.Lazy",
        "name": "ask",
        "normalized": "",
        "package": "extensible-effects",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff-Reader-Lazy.html#v:local",
      "description": {
        "fct-descr": "\u003cp\u003eLocally rebind the value in the dynamic environment.\n This function both requests and admins Reader requests.\n\u003c/p\u003e",
        "fct-module": "Control.Eff.Reader.Lazy",
        "fct-package": "extensible-effects",
        "fct-signature": "(e -\u003e e) -\u003e Eff r a -\u003e Eff r a",
        "fct-source": "src/Control-Eff-Reader-Lazy.html#local",
        "fct-type": "function",
        "title": "local"
      },
      "index": {
        "description": "Locally rebind the value in the dynamic environment This function both requests and admins Reader requests",
        "hierarchy": "Control Eff Reader Lazy",
        "module": "Control.Eff.Reader.Lazy",
        "name": "local",
        "normalized": "(a-\u003ea)-\u003eEff b c-\u003eEff b c",
        "package": "extensible-effects",
        "partial": "",
        "signature": "(e-\u003ee)-\u003eEff r a-\u003eEff r a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff-Reader-Lazy.html#v:reader",
      "description": {
        "fct-descr": "\u003cp\u003eRequest the environment value using a transformation function.\n\u003c/p\u003e",
        "fct-module": "Control.Eff.Reader.Lazy",
        "fct-package": "extensible-effects",
        "fct-signature": "(e -\u003e a) -\u003e Eff r a",
        "fct-source": "src/Control-Eff-Reader-Lazy.html#reader",
        "fct-type": "function",
        "title": "reader"
      },
      "index": {
        "description": "Request the environment value using transformation function",
        "hierarchy": "Control Eff Reader Lazy",
        "module": "Control.Eff.Reader.Lazy",
        "name": "reader",
        "normalized": "(a-\u003eb)-\u003eEff c b",
        "package": "extensible-effects",
        "partial": "",
        "signature": "(e-\u003ea)-\u003eEff r a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff-Reader-Lazy.html#v:runReader",
      "description": {
        "fct-descr": "\u003cp\u003eThe handler of Reader requests. The return type shows that\n all Reader requests are fully handled.\n\u003c/p\u003e",
        "fct-module": "Control.Eff.Reader.Lazy",
        "fct-package": "extensible-effects",
        "fct-signature": "Eff (Reader e :\u003e r) w -\u003e e -\u003e Eff r w",
        "fct-source": "src/Control-Eff-Reader-Lazy.html#runReader",
        "fct-type": "function",
        "title": "runReader"
      },
      "index": {
        "description": "The handler of Reader requests The return type shows that all Reader requests are fully handled",
        "hierarchy": "Control Eff Reader Lazy",
        "module": "Control.Eff.Reader.Lazy",
        "name": "runReader",
        "normalized": "Eff(Reader a b)c-\u003ea-\u003eEff b c",
        "package": "extensible-effects",
        "partial": "Reader",
        "signature": "Eff(Reader e r)w-\u003ee-\u003eEff r w"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff-Reader-Strict.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eStrict read-only state\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Eff.Reader.Strict",
        "fct-package": "extensible-effects",
        "fct-signature": "module",
        "fct-source": "src/Control-Eff-Reader-Strict.html",
        "fct-type": "module",
        "title": "Strict"
      },
      "index": {
        "description": "Strict read-only state",
        "hierarchy": "Control Eff Reader Strict",
        "module": "Control.Eff.Reader.Strict",
        "name": "Strict",
        "normalized": "",
        "package": "extensible-effects",
        "partial": "Strict",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff-Reader-Strict.html#t:Reader",
      "description": {
        "fct-descr": "\u003cp\u003eThe request for a value of type e from the current environment.\n This environment is analogous to a parameter of type e.\n\u003c/p\u003e",
        "fct-module": "Control.Eff.Reader.Strict",
        "fct-package": "extensible-effects",
        "fct-signature": "data",
        "fct-source": "src/Control-Eff-Reader-Strict.html#Reader",
        "fct-type": "data",
        "title": "Reader"
      },
      "index": {
        "description": "The request for value of type from the current environment This environment is analogous to parameter of type",
        "hierarchy": "Control Eff Reader Strict",
        "module": "Control.Eff.Reader.Strict",
        "name": "Reader",
        "normalized": "",
        "package": "extensible-effects",
        "partial": "Reader",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff-Reader-Strict.html#v:ask",
      "description": {
        "fct-descr": "\u003cp\u003eGet the current value from a Reader.\n\u003c/p\u003e",
        "fct-module": "Control.Eff.Reader.Strict",
        "fct-package": "extensible-effects",
        "fct-signature": "Eff r e",
        "fct-source": "src/Control-Eff-Reader-Strict.html#ask",
        "fct-type": "function",
        "title": "ask"
      },
      "index": {
        "description": "Get the current value from Reader",
        "hierarchy": "Control Eff Reader Strict",
        "module": "Control.Eff.Reader.Strict",
        "name": "ask",
        "normalized": "",
        "package": "extensible-effects",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff-Reader-Strict.html#v:local",
      "description": {
        "fct-descr": "\u003cp\u003eLocally rebind the value in the dynamic environment.\n This function both requests and admins Reader requests.\n\u003c/p\u003e",
        "fct-module": "Control.Eff.Reader.Strict",
        "fct-package": "extensible-effects",
        "fct-signature": "(e -\u003e e) -\u003e Eff r a -\u003e Eff r a",
        "fct-source": "src/Control-Eff-Reader-Strict.html#local",
        "fct-type": "function",
        "title": "local"
      },
      "index": {
        "description": "Locally rebind the value in the dynamic environment This function both requests and admins Reader requests",
        "hierarchy": "Control Eff Reader Strict",
        "module": "Control.Eff.Reader.Strict",
        "name": "local",
        "normalized": "(a-\u003ea)-\u003eEff b c-\u003eEff b c",
        "package": "extensible-effects",
        "partial": "",
        "signature": "(e-\u003ee)-\u003eEff r a-\u003eEff r a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff-Reader-Strict.html#v:reader",
      "description": {
        "fct-descr": "\u003cp\u003eRequest the environment value using a transformation function.\n\u003c/p\u003e",
        "fct-module": "Control.Eff.Reader.Strict",
        "fct-package": "extensible-effects",
        "fct-signature": "(e -\u003e a) -\u003e Eff r a",
        "fct-source": "src/Control-Eff-Reader-Strict.html#reader",
        "fct-type": "function",
        "title": "reader"
      },
      "index": {
        "description": "Request the environment value using transformation function",
        "hierarchy": "Control Eff Reader Strict",
        "module": "Control.Eff.Reader.Strict",
        "name": "reader",
        "normalized": "(a-\u003eb)-\u003eEff c b",
        "package": "extensible-effects",
        "partial": "",
        "signature": "(e-\u003ea)-\u003eEff r a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff-Reader-Strict.html#v:runReader",
      "description": {
        "fct-descr": "\u003cp\u003eThe handler of Reader requests. The return type shows that\n all Reader requests are fully handled.\n\u003c/p\u003e",
        "fct-module": "Control.Eff.Reader.Strict",
        "fct-package": "extensible-effects",
        "fct-signature": "Eff (Reader e :\u003e r) w -\u003e e -\u003e Eff r w",
        "fct-source": "src/Control-Eff-Reader-Strict.html#runReader",
        "fct-type": "function",
        "title": "runReader"
      },
      "index": {
        "description": "The handler of Reader requests The return type shows that all Reader requests are fully handled",
        "hierarchy": "Control Eff Reader Strict",
        "module": "Control.Eff.Reader.Strict",
        "name": "runReader",
        "normalized": "Eff(Reader a b)c-\u003ea-\u003eEff b c",
        "package": "extensible-effects",
        "partial": "Reader",
        "signature": "Eff(Reader e r)w-\u003ee-\u003eEff r w"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff-State-Lazy.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLazy state effect\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Eff.State.Lazy",
        "fct-package": "extensible-effects",
        "fct-signature": "module",
        "fct-source": "src/Control-Eff-State-Lazy.html",
        "fct-type": "module",
        "title": "Lazy"
      },
      "index": {
        "description": "Lazy state effect",
        "hierarchy": "Control Eff State Lazy",
        "module": "Control.Eff.State.Lazy",
        "name": "Lazy",
        "normalized": "",
        "package": "extensible-effects",
        "partial": "Lazy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff-State-Lazy.html#t:State",
      "description": {
        "fct-descr": "\u003cp\u003eStrict state effect\n\u003c/p\u003e",
        "fct-module": "Control.Eff.State.Lazy",
        "fct-package": "extensible-effects",
        "fct-signature": "data",
        "fct-source": "src/Control-Eff-State-Lazy.html#State",
        "fct-type": "data",
        "title": "State"
      },
      "index": {
        "description": "Strict state effect",
        "hierarchy": "Control Eff State Lazy",
        "module": "Control.Eff.State.Lazy",
        "name": "State",
        "normalized": "",
        "package": "extensible-effects",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff-State-Lazy.html#v:evalState",
      "description": {
        "fct-descr": "\u003cp\u003eRun a State effect, discarding the final state.\n\u003c/p\u003e",
        "fct-module": "Control.Eff.State.Lazy",
        "fct-package": "extensible-effects",
        "fct-signature": "s -\u003e Eff (State s :\u003e r) w -\u003e Eff r w",
        "fct-source": "src/Control-Eff-State-Lazy.html#evalState",
        "fct-type": "function",
        "title": "evalState"
      },
      "index": {
        "description": "Run State effect discarding the final state",
        "hierarchy": "Control Eff State Lazy",
        "module": "Control.Eff.State.Lazy",
        "name": "evalState",
        "normalized": "a-\u003eEff(State a b)c-\u003eEff b c",
        "package": "extensible-effects",
        "partial": "State",
        "signature": "s-\u003eEff(State s r)w-\u003eEff r w"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff-State-Lazy.html#v:execState",
      "description": {
        "fct-descr": "\u003cp\u003eRun a State effect and return the final state.\n\u003c/p\u003e",
        "fct-module": "Control.Eff.State.Lazy",
        "fct-package": "extensible-effects",
        "fct-signature": "s -\u003e Eff (State s :\u003e r) w -\u003e Eff r s",
        "fct-source": "src/Control-Eff-State-Lazy.html#execState",
        "fct-type": "function",
        "title": "execState"
      },
      "index": {
        "description": "Run State effect and return the final state",
        "hierarchy": "Control Eff State Lazy",
        "module": "Control.Eff.State.Lazy",
        "name": "execState",
        "normalized": "a-\u003eEff(State a b)c-\u003eEff b a",
        "package": "extensible-effects",
        "partial": "State",
        "signature": "s-\u003eEff(State s r)w-\u003eEff r s"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff-State-Lazy.html#v:get",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the current value of the state.\n\u003c/p\u003e",
        "fct-module": "Control.Eff.State.Lazy",
        "fct-package": "extensible-effects",
        "fct-signature": "Eff r e",
        "fct-source": "src/Control-Eff-State-Lazy.html#get",
        "fct-type": "function",
        "title": "get"
      },
      "index": {
        "description": "Return the current value of the state",
        "hierarchy": "Control Eff State Lazy",
        "module": "Control.Eff.State.Lazy",
        "name": "get",
        "normalized": "",
        "package": "extensible-effects",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff-State-Lazy.html#v:modify",
      "description": {
        "fct-descr": "\u003cp\u003eTransform the state with a function.\n\u003c/p\u003e",
        "fct-module": "Control.Eff.State.Lazy",
        "fct-package": "extensible-effects",
        "fct-signature": "(s -\u003e s) -\u003e Eff r ()",
        "fct-source": "src/Control-Eff-State-Lazy.html#modify",
        "fct-type": "function",
        "title": "modify"
      },
      "index": {
        "description": "Transform the state with function",
        "hierarchy": "Control Eff State Lazy",
        "module": "Control.Eff.State.Lazy",
        "name": "modify",
        "normalized": "(a-\u003ea)-\u003eEff b()",
        "package": "extensible-effects",
        "partial": "",
        "signature": "(s-\u003es)-\u003eEff r()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff-State-Lazy.html#v:put",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a new value of the state.\n\u003c/p\u003e",
        "fct-module": "Control.Eff.State.Lazy",
        "fct-package": "extensible-effects",
        "fct-signature": "e -\u003e Eff r ()",
        "fct-source": "src/Control-Eff-State-Lazy.html#put",
        "fct-type": "function",
        "title": "put"
      },
      "index": {
        "description": "Write new value of the state",
        "hierarchy": "Control Eff State Lazy",
        "module": "Control.Eff.State.Lazy",
        "name": "put",
        "normalized": "a-\u003eEff b()",
        "package": "extensible-effects",
        "partial": "",
        "signature": "e-\u003eEff r()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff-State-Lazy.html#v:runState",
      "description": {
        "fct-descr": "\u003cp\u003eRun a State effect.\n\u003c/p\u003e",
        "fct-module": "Control.Eff.State.Lazy",
        "fct-package": "extensible-effects",
        "fct-signature": "s-\u003e Eff (State s :\u003e r) w-\u003e Eff r (s, w)",
        "fct-type": "function",
        "title": "runState"
      },
      "index": {
        "description": "Run State effect",
        "hierarchy": "Control Eff State Lazy",
        "module": "Control.Eff.State.Lazy",
        "name": "runState",
        "normalized": "a-\u003eEff(State a b)c-\u003eEff b(a,c)",
        "package": "extensible-effects",
        "partial": "State",
        "signature": "s-\u003eEff(State s r)w-\u003eEff r(s,w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff-State-Strict.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eStrict state effect\n\u003c/p\u003e\u003cp\u003eExample: implementing \u003ccode\u003e\u003ca\u003eFresh\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e runFresh' :: (Typeable i, Enum i, Num i) =\u003e Eff (Fresh i :\u003e r) w -\u003e i -\u003e Eff r w\n runFresh' m s = fst \u003c$\u003e runState s (loop $ admin m)\n  where\n   loop (Val x) = return x\n   loop (E u)   = case decomp u of\n     Right (Fresh k) -\u003e do\n                       n \u003c- get\n                       put (n + 1)\n                       loop (k n)\n     Left u' -\u003e send (\\k -\u003e unsafeReUnion $ k \u003c$\u003e u') \u003e\u003e= loop\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Control.Eff.State.Strict",
        "fct-package": "extensible-effects",
        "fct-signature": "module",
        "fct-source": "src/Control-Eff-State-Strict.html",
        "fct-type": "module",
        "title": "Strict"
      },
      "index": {
        "description": "Strict state effect Example implementing Fresh runFresh Typeable Enum Num Eff Fresh Eff runFresh fst runState loop admin where loop Val return loop case decomp of Right Fresh do get put loop Left send unsafeReUnion loop",
        "hierarchy": "Control Eff State Strict",
        "module": "Control.Eff.State.Strict",
        "name": "Strict",
        "normalized": "",
        "package": "extensible-effects",
        "partial": "Strict",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff-State-Strict.html#t:State",
      "description": {
        "fct-descr": "\u003cp\u003eStrict state effect\n\u003c/p\u003e",
        "fct-module": "Control.Eff.State.Strict",
        "fct-package": "extensible-effects",
        "fct-signature": "data",
        "fct-source": "src/Control-Eff-State-Strict.html#State",
        "fct-type": "data",
        "title": "State"
      },
      "index": {
        "description": "Strict state effect",
        "hierarchy": "Control Eff State Strict",
        "module": "Control.Eff.State.Strict",
        "name": "State",
        "normalized": "",
        "package": "extensible-effects",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff-State-Strict.html#v:evalState",
      "description": {
        "fct-descr": "\u003cp\u003eRun a State effect, discarding the final state.\n\u003c/p\u003e",
        "fct-module": "Control.Eff.State.Strict",
        "fct-package": "extensible-effects",
        "fct-signature": "s -\u003e Eff (State s :\u003e r) w -\u003e Eff r w",
        "fct-source": "src/Control-Eff-State-Strict.html#evalState",
        "fct-type": "function",
        "title": "evalState"
      },
      "index": {
        "description": "Run State effect discarding the final state",
        "hierarchy": "Control Eff State Strict",
        "module": "Control.Eff.State.Strict",
        "name": "evalState",
        "normalized": "a-\u003eEff(State a b)c-\u003eEff b c",
        "package": "extensible-effects",
        "partial": "State",
        "signature": "s-\u003eEff(State s r)w-\u003eEff r w"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff-State-Strict.html#v:execState",
      "description": {
        "fct-descr": "\u003cp\u003eRun a State effect and return the final state.\n\u003c/p\u003e",
        "fct-module": "Control.Eff.State.Strict",
        "fct-package": "extensible-effects",
        "fct-signature": "s -\u003e Eff (State s :\u003e r) w -\u003e Eff r s",
        "fct-source": "src/Control-Eff-State-Strict.html#execState",
        "fct-type": "function",
        "title": "execState"
      },
      "index": {
        "description": "Run State effect and return the final state",
        "hierarchy": "Control Eff State Strict",
        "module": "Control.Eff.State.Strict",
        "name": "execState",
        "normalized": "a-\u003eEff(State a b)c-\u003eEff b a",
        "package": "extensible-effects",
        "partial": "State",
        "signature": "s-\u003eEff(State s r)w-\u003eEff r s"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff-State-Strict.html#v:get",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the current value of the state.\n\u003c/p\u003e",
        "fct-module": "Control.Eff.State.Strict",
        "fct-package": "extensible-effects",
        "fct-signature": "Eff r e",
        "fct-source": "src/Control-Eff-State-Strict.html#get",
        "fct-type": "function",
        "title": "get"
      },
      "index": {
        "description": "Return the current value of the state",
        "hierarchy": "Control Eff State Strict",
        "module": "Control.Eff.State.Strict",
        "name": "get",
        "normalized": "",
        "package": "extensible-effects",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff-State-Strict.html#v:modify",
      "description": {
        "fct-descr": "\u003cp\u003eTransform the state with a function.\n\u003c/p\u003e",
        "fct-module": "Control.Eff.State.Strict",
        "fct-package": "extensible-effects",
        "fct-signature": "(s -\u003e s) -\u003e Eff r ()",
        "fct-source": "src/Control-Eff-State-Strict.html#modify",
        "fct-type": "function",
        "title": "modify"
      },
      "index": {
        "description": "Transform the state with function",
        "hierarchy": "Control Eff State Strict",
        "module": "Control.Eff.State.Strict",
        "name": "modify",
        "normalized": "(a-\u003ea)-\u003eEff b()",
        "package": "extensible-effects",
        "partial": "",
        "signature": "(s-\u003es)-\u003eEff r()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff-State-Strict.html#v:put",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a new value of the state.\n\u003c/p\u003e",
        "fct-module": "Control.Eff.State.Strict",
        "fct-package": "extensible-effects",
        "fct-signature": "e -\u003e Eff r ()",
        "fct-source": "src/Control-Eff-State-Strict.html#put",
        "fct-type": "function",
        "title": "put"
      },
      "index": {
        "description": "Write new value of the state",
        "hierarchy": "Control Eff State Strict",
        "module": "Control.Eff.State.Strict",
        "name": "put",
        "normalized": "a-\u003eEff b()",
        "package": "extensible-effects",
        "partial": "",
        "signature": "e-\u003eEff r()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff-State-Strict.html#v:runState",
      "description": {
        "fct-descr": "\u003cp\u003eRun a State effect.\n\u003c/p\u003e",
        "fct-module": "Control.Eff.State.Strict",
        "fct-package": "extensible-effects",
        "fct-signature": "s-\u003e Eff (State s :\u003e r) w-\u003e Eff r (s, w)",
        "fct-type": "function",
        "title": "runState"
      },
      "index": {
        "description": "Run State effect",
        "hierarchy": "Control Eff State Strict",
        "module": "Control.Eff.State.Strict",
        "name": "runState",
        "normalized": "a-\u003eEff(State a b)c-\u003eEff b(a,c)",
        "package": "extensible-effects",
        "partial": "State",
        "signature": "s-\u003eEff(State s r)w-\u003eEff r(s,w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff-Trace.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA Trace effect for debugging\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Eff.Trace",
        "fct-package": "extensible-effects",
        "fct-signature": "module",
        "fct-source": "src/Control-Eff-Trace.html",
        "fct-type": "module",
        "title": "Trace"
      },
      "index": {
        "description": "Trace effect for debugging",
        "hierarchy": "Control Eff Trace",
        "module": "Control.Eff.Trace",
        "name": "Trace",
        "normalized": "",
        "package": "extensible-effects",
        "partial": "Trace",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff-Trace.html#t:Trace",
      "description": {
        "fct-descr": "\u003cp\u003eTrace effect for debugging\n\u003c/p\u003e",
        "fct-module": "Control.Eff.Trace",
        "fct-package": "extensible-effects",
        "fct-signature": "data",
        "fct-source": "src/Control-Eff-Trace.html#Trace",
        "fct-type": "data",
        "title": "Trace"
      },
      "index": {
        "description": "Trace effect for debugging",
        "hierarchy": "Control Eff Trace",
        "module": "Control.Eff.Trace",
        "name": "Trace",
        "normalized": "",
        "package": "extensible-effects",
        "partial": "Trace",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff-Trace.html#v:runTrace",
      "description": {
        "fct-descr": "\u003cp\u003eRun a computation producing Traces.\n\u003c/p\u003e",
        "fct-module": "Control.Eff.Trace",
        "fct-package": "extensible-effects",
        "fct-signature": "Eff (Trace :\u003e ()) w -\u003e IO w",
        "fct-source": "src/Control-Eff-Trace.html#runTrace",
        "fct-type": "function",
        "title": "runTrace"
      },
      "index": {
        "description": "Run computation producing Traces",
        "hierarchy": "Control Eff Trace",
        "module": "Control.Eff.Trace",
        "name": "runTrace",
        "normalized": "Eff(Trace())a-\u003eIO a",
        "package": "extensible-effects",
        "partial": "Trace",
        "signature": "Eff(Trace())w-\u003eIO w"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff-Trace.html#v:trace",
      "description": {
        "fct-descr": "\u003cp\u003ePrint a string as a trace.\n\u003c/p\u003e",
        "fct-module": "Control.Eff.Trace",
        "fct-package": "extensible-effects",
        "fct-signature": "String -\u003e Eff r ()",
        "fct-source": "src/Control-Eff-Trace.html#trace",
        "fct-type": "function",
        "title": "trace"
      },
      "index": {
        "description": "Print string as trace",
        "hierarchy": "Control Eff Trace",
        "module": "Control.Eff.Trace",
        "name": "trace",
        "normalized": "String-\u003eEff a()",
        "package": "extensible-effects",
        "partial": "",
        "signature": "String-\u003eEff r()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff-Writer-Lazy.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLazy write-only state.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Eff.Writer.Lazy",
        "fct-package": "extensible-effects",
        "fct-signature": "module",
        "fct-source": "src/Control-Eff-Writer-Lazy.html",
        "fct-type": "module",
        "title": "Lazy"
      },
      "index": {
        "description": "Lazy write-only state",
        "hierarchy": "Control Eff Writer Lazy",
        "module": "Control.Eff.Writer.Lazy",
        "name": "Lazy",
        "normalized": "",
        "package": "extensible-effects",
        "partial": "Lazy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff-Writer-Lazy.html#t:Writer",
      "description": {
        "fct-descr": "\u003cp\u003eThe request to remember a value of type w in the current environment\n\u003c/p\u003e",
        "fct-module": "Control.Eff.Writer.Lazy",
        "fct-package": "extensible-effects",
        "fct-signature": "data",
        "fct-source": "src/Control-Eff-Writer-Lazy.html#Writer",
        "fct-type": "data",
        "title": "Writer"
      },
      "index": {
        "description": "The request to remember value of type in the current environment",
        "hierarchy": "Control Eff Writer Lazy",
        "module": "Control.Eff.Writer.Lazy",
        "name": "Writer",
        "normalized": "",
        "package": "extensible-effects",
        "partial": "Writer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff-Writer-Lazy.html#v:censor",
      "description": {
        "fct-descr": "\u003cp\u003eTransform the state being produced.\n\u003c/p\u003e",
        "fct-module": "Control.Eff.Writer.Lazy",
        "fct-package": "extensible-effects",
        "fct-signature": "(w -\u003e w) -\u003e Eff r a -\u003e Eff r a",
        "fct-source": "src/Control-Eff-Writer-Lazy.html#censor",
        "fct-type": "function",
        "title": "censor"
      },
      "index": {
        "description": "Transform the state being produced",
        "hierarchy": "Control Eff Writer Lazy",
        "module": "Control.Eff.Writer.Lazy",
        "name": "censor",
        "normalized": "(a-\u003ea)-\u003eEff b c-\u003eEff b c",
        "package": "extensible-effects",
        "partial": "",
        "signature": "(w-\u003ew)-\u003eEff r a-\u003eEff r a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff-Writer-Lazy.html#v:runFirstWriter",
      "description": {
        "fct-descr": "\u003cp\u003eHandle Writer requests by taking the first value provided.\n\u003c/p\u003e",
        "fct-module": "Control.Eff.Writer.Lazy",
        "fct-package": "extensible-effects",
        "fct-signature": "Eff (Writer w :\u003e r) a -\u003e Eff r (Maybe w, a)",
        "fct-source": "src/Control-Eff-Writer-Lazy.html#runFirstWriter",
        "fct-type": "function",
        "title": "runFirstWriter"
      },
      "index": {
        "description": "Handle Writer requests by taking the first value provided",
        "hierarchy": "Control Eff Writer Lazy",
        "module": "Control.Eff.Writer.Lazy",
        "name": "runFirstWriter",
        "normalized": "Eff(Writer a b)c-\u003eEff b(Maybe a,c)",
        "package": "extensible-effects",
        "partial": "First Writer",
        "signature": "Eff(Writer w r)a-\u003eEff r(Maybe w,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff-Writer-Lazy.html#v:runLastWriter",
      "description": {
        "fct-descr": "\u003cp\u003eHandle Writer requests by overwriting previous values.\n\u003c/p\u003e",
        "fct-module": "Control.Eff.Writer.Lazy",
        "fct-package": "extensible-effects",
        "fct-signature": "Eff (Writer w :\u003e r) a -\u003e Eff r (Maybe w, a)",
        "fct-source": "src/Control-Eff-Writer-Lazy.html#runLastWriter",
        "fct-type": "function",
        "title": "runLastWriter"
      },
      "index": {
        "description": "Handle Writer requests by overwriting previous values",
        "hierarchy": "Control Eff Writer Lazy",
        "module": "Control.Eff.Writer.Lazy",
        "name": "runLastWriter",
        "normalized": "Eff(Writer a b)c-\u003eEff b(Maybe a,c)",
        "package": "extensible-effects",
        "partial": "Last Writer",
        "signature": "Eff(Writer w r)a-\u003eEff r(Maybe w,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff-Writer-Lazy.html#v:runMonoidWriter",
      "description": {
        "fct-descr": "\u003cp\u003eHandle Writer requests, using a Monoid instance to accumulate values.\n\u003c/p\u003e",
        "fct-module": "Control.Eff.Writer.Lazy",
        "fct-package": "extensible-effects",
        "fct-signature": "Eff (Writer w :\u003e r) a -\u003e Eff r (w, a)",
        "fct-source": "src/Control-Eff-Writer-Lazy.html#runMonoidWriter",
        "fct-type": "function",
        "title": "runMonoidWriter"
      },
      "index": {
        "description": "Handle Writer requests using Monoid instance to accumulate values",
        "hierarchy": "Control Eff Writer Lazy",
        "module": "Control.Eff.Writer.Lazy",
        "name": "runMonoidWriter",
        "normalized": "Eff(Writer a b)c-\u003eEff b(a,c)",
        "package": "extensible-effects",
        "partial": "Monoid Writer",
        "signature": "Eff(Writer w r)a-\u003eEff r(w,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff-Writer-Lazy.html#v:runWriter",
      "description": {
        "fct-descr": "\u003cp\u003eHandle Writer requests, using a user-provided function to accumulate values.\n\u003c/p\u003e",
        "fct-module": "Control.Eff.Writer.Lazy",
        "fct-package": "extensible-effects",
        "fct-signature": "(w -\u003e b -\u003e b) -\u003e b -\u003e Eff (Writer w :\u003e r) a -\u003e Eff r (b, a)",
        "fct-source": "src/Control-Eff-Writer-Lazy.html#runWriter",
        "fct-type": "function",
        "title": "runWriter"
      },
      "index": {
        "description": "Handle Writer requests using user-provided function to accumulate values",
        "hierarchy": "Control Eff Writer Lazy",
        "module": "Control.Eff.Writer.Lazy",
        "name": "runWriter",
        "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eEff(Writer a c)d-\u003eEff c(b,d)",
        "package": "extensible-effects",
        "partial": "Writer",
        "signature": "(w-\u003eb-\u003eb)-\u003eb-\u003eEff(Writer w r)a-\u003eEff r(b,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff-Writer-Lazy.html#v:tell",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a new value.\n\u003c/p\u003e",
        "fct-module": "Control.Eff.Writer.Lazy",
        "fct-package": "extensible-effects",
        "fct-signature": "w -\u003e Eff r ()",
        "fct-source": "src/Control-Eff-Writer-Lazy.html#tell",
        "fct-type": "function",
        "title": "tell"
      },
      "index": {
        "description": "Write new value",
        "hierarchy": "Control Eff Writer Lazy",
        "module": "Control.Eff.Writer.Lazy",
        "name": "tell",
        "normalized": "a-\u003eEff b()",
        "package": "extensible-effects",
        "partial": "",
        "signature": "w-\u003eEff r()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff-Writer-Strict.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eStrict write-only state.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Eff.Writer.Strict",
        "fct-package": "extensible-effects",
        "fct-signature": "module",
        "fct-source": "src/Control-Eff-Writer-Strict.html",
        "fct-type": "module",
        "title": "Strict"
      },
      "index": {
        "description": "Strict write-only state",
        "hierarchy": "Control Eff Writer Strict",
        "module": "Control.Eff.Writer.Strict",
        "name": "Strict",
        "normalized": "",
        "package": "extensible-effects",
        "partial": "Strict",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff-Writer-Strict.html#t:Writer",
      "description": {
        "fct-descr": "\u003cp\u003eThe request to remember a value of type w in the current environment\n\u003c/p\u003e",
        "fct-module": "Control.Eff.Writer.Strict",
        "fct-package": "extensible-effects",
        "fct-signature": "data",
        "fct-source": "src/Control-Eff-Writer-Strict.html#Writer",
        "fct-type": "data",
        "title": "Writer"
      },
      "index": {
        "description": "The request to remember value of type in the current environment",
        "hierarchy": "Control Eff Writer Strict",
        "module": "Control.Eff.Writer.Strict",
        "name": "Writer",
        "normalized": "",
        "package": "extensible-effects",
        "partial": "Writer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff-Writer-Strict.html#v:censor",
      "description": {
        "fct-descr": "\u003cp\u003eTransform the state being produced.\n\u003c/p\u003e",
        "fct-module": "Control.Eff.Writer.Strict",
        "fct-package": "extensible-effects",
        "fct-signature": "(w -\u003e w) -\u003e Eff r a -\u003e Eff r a",
        "fct-source": "src/Control-Eff-Writer-Strict.html#censor",
        "fct-type": "function",
        "title": "censor"
      },
      "index": {
        "description": "Transform the state being produced",
        "hierarchy": "Control Eff Writer Strict",
        "module": "Control.Eff.Writer.Strict",
        "name": "censor",
        "normalized": "(a-\u003ea)-\u003eEff b c-\u003eEff b c",
        "package": "extensible-effects",
        "partial": "",
        "signature": "(w-\u003ew)-\u003eEff r a-\u003eEff r a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff-Writer-Strict.html#v:runFirstWriter",
      "description": {
        "fct-descr": "\u003cp\u003eHandle Writer requests by taking the first value provided.\n\u003c/p\u003e",
        "fct-module": "Control.Eff.Writer.Strict",
        "fct-package": "extensible-effects",
        "fct-signature": "Eff (Writer w :\u003e r) a -\u003e Eff r (Maybe w, a)",
        "fct-source": "src/Control-Eff-Writer-Strict.html#runFirstWriter",
        "fct-type": "function",
        "title": "runFirstWriter"
      },
      "index": {
        "description": "Handle Writer requests by taking the first value provided",
        "hierarchy": "Control Eff Writer Strict",
        "module": "Control.Eff.Writer.Strict",
        "name": "runFirstWriter",
        "normalized": "Eff(Writer a b)c-\u003eEff b(Maybe a,c)",
        "package": "extensible-effects",
        "partial": "First Writer",
        "signature": "Eff(Writer w r)a-\u003eEff r(Maybe w,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff-Writer-Strict.html#v:runLastWriter",
      "description": {
        "fct-descr": "\u003cp\u003eHandle Writer requests by overwriting previous values.\n\u003c/p\u003e",
        "fct-module": "Control.Eff.Writer.Strict",
        "fct-package": "extensible-effects",
        "fct-signature": "Eff (Writer w :\u003e r) a -\u003e Eff r (Maybe w, a)",
        "fct-source": "src/Control-Eff-Writer-Strict.html#runLastWriter",
        "fct-type": "function",
        "title": "runLastWriter"
      },
      "index": {
        "description": "Handle Writer requests by overwriting previous values",
        "hierarchy": "Control Eff Writer Strict",
        "module": "Control.Eff.Writer.Strict",
        "name": "runLastWriter",
        "normalized": "Eff(Writer a b)c-\u003eEff b(Maybe a,c)",
        "package": "extensible-effects",
        "partial": "Last Writer",
        "signature": "Eff(Writer w r)a-\u003eEff r(Maybe w,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff-Writer-Strict.html#v:runMonoidWriter",
      "description": {
        "fct-descr": "\u003cp\u003eHandle Writer requests, using a Monoid instance to accumulate values.\n\u003c/p\u003e",
        "fct-module": "Control.Eff.Writer.Strict",
        "fct-package": "extensible-effects",
        "fct-signature": "Eff (Writer w :\u003e r) a -\u003e Eff r (w, a)",
        "fct-source": "src/Control-Eff-Writer-Strict.html#runMonoidWriter",
        "fct-type": "function",
        "title": "runMonoidWriter"
      },
      "index": {
        "description": "Handle Writer requests using Monoid instance to accumulate values",
        "hierarchy": "Control Eff Writer Strict",
        "module": "Control.Eff.Writer.Strict",
        "name": "runMonoidWriter",
        "normalized": "Eff(Writer a b)c-\u003eEff b(a,c)",
        "package": "extensible-effects",
        "partial": "Monoid Writer",
        "signature": "Eff(Writer w r)a-\u003eEff r(w,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff-Writer-Strict.html#v:runWriter",
      "description": {
        "fct-descr": "\u003cp\u003eHandle Writer requests, using a user-provided function to accumulate values.\n\u003c/p\u003e",
        "fct-module": "Control.Eff.Writer.Strict",
        "fct-package": "extensible-effects",
        "fct-signature": "(w -\u003e b -\u003e b) -\u003e b -\u003e Eff (Writer w :\u003e r) a -\u003e Eff r (b, a)",
        "fct-source": "src/Control-Eff-Writer-Strict.html#runWriter",
        "fct-type": "function",
        "title": "runWriter"
      },
      "index": {
        "description": "Handle Writer requests using user-provided function to accumulate values",
        "hierarchy": "Control Eff Writer Strict",
        "module": "Control.Eff.Writer.Strict",
        "name": "runWriter",
        "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eEff(Writer a c)d-\u003eEff c(b,d)",
        "package": "extensible-effects",
        "partial": "Writer",
        "signature": "(w-\u003eb-\u003eb)-\u003eb-\u003eEff(Writer w r)a-\u003eEff r(b,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff-Writer-Strict.html#v:tell",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a new value.\n\u003c/p\u003e",
        "fct-module": "Control.Eff.Writer.Strict",
        "fct-package": "extensible-effects",
        "fct-signature": "w -\u003e Eff r ()",
        "fct-source": "src/Control-Eff-Writer-Strict.html#tell",
        "fct-type": "function",
        "title": "tell"
      },
      "index": {
        "description": "Write new value",
        "hierarchy": "Control Eff Writer Strict",
        "module": "Control.Eff.Writer.Strict",
        "name": "tell",
        "normalized": "a-\u003eEff b()",
        "package": "extensible-effects",
        "partial": "",
        "signature": "w-\u003eEff r()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eOriginal work available at \u003ca\u003ehttp://okmij.org/ftp/Hgetell/extensible/Eff.hs\u003c/a\u003e.\n This module implements extensible effects as an alternative to monad transformers,\n as described in \u003ca\u003ehttp://okmij.org/ftp/Hgetell/extensible/exteff.pdf\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eExtensible Effects are implemented as typeclass constraints on an Eff[ect] datatype.\n A contrived example is:\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE FlexibleContexts #-}\n import Control.Eff\n import Control.Eff.Lift\n import Control.Eff.State\n import Control.Monad (void)\n import Data.Typeable\n\n -- Write the elements of a list of numbers, in order.\n writeAll :: (Typeable a, Member (Writer a) e)\n          =\u003e [a]\n          -\u003e Eff e ()\n writeAll = mapM_ putWriter\n\n -- Add a list of numbers to the current state.\n sumAll :: (Typeable a, Num a, Member (State a) e)\n        =\u003e [a]\n        -\u003e Eff e ()\n sumAll = mapM_ (onState . (+))\n\n -- Write a list of numbers and add them to the current state.\n writeAndAdd :: (Member (Writer Integer) e, Member (State Integer) e)\n             =\u003e [Integer]\n             -\u003e Eff e ()\n writeAndAdd l = do\n     writeAll l\n     sumAll l\n\n -- Sum a list of numbers.\n sumEff :: (Num a, Typeable a) =\u003e [a] -\u003e a\n sumEff l = let (s, ()) = run $ runState 0 $ sumAll l\n            in s\n\n -- Safely get the last element of a list.\n -- Nothing for empty lists; Just the last element otherwise.\n lastEff :: Typeable a =\u003e [a] -\u003e Maybe a\n lastEff l = let (a, ()) = run $ runWriter $ writeAll l\n             in a\n\n -- Get the last element and sum of a list\n lastAndSum :: (Typeable a, Num a) =\u003e [a] -\u003e (Maybe a, a)\n lastAndSum l = let (lst, (total, ())) = run $ runWriter $ runState 0 $ writeAndAdd l\n                in (lst, total)\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Control.Eff",
        "fct-package": "extensible-effects",
        "fct-signature": "module",
        "fct-source": "src/Control-Eff.html",
        "fct-type": "module",
        "title": "Eff"
      },
      "index": {
        "description": "Original work available at http okmij.org ftp Hgetell extensible Eff.hs This module implements extensible effects as an alternative to monad transformers as described in http okmij.org ftp Hgetell extensible exteff.pdf Extensible Effects are implemented as typeclass constraints on an Eff ect datatype contrived example is LANGUAGE FlexibleContexts import Control.Eff import Control.Eff.Lift import Control.Eff.State import Control.Monad void import Data.Typeable Write the elements of list of numbers in order writeAll Typeable Member Writer Eff writeAll mapM putWriter Add list of numbers to the current state sumAll Typeable Num Member State Eff sumAll mapM onState Write list of numbers and add them to the current state writeAndAdd Member Writer Integer Member State Integer Integer Eff writeAndAdd do writeAll sumAll Sum list of numbers sumEff Num Typeable sumEff let run runState sumAll in Safely get the last element of list Nothing for empty lists Just the last element otherwise lastEff Typeable Maybe lastEff let run runWriter writeAll in Get the last element and sum of list lastAndSum Typeable Num Maybe lastAndSum let lst total run runWriter runState writeAndAdd in lst total",
        "hierarchy": "Control Eff",
        "module": "Control.Eff",
        "name": "Eff",
        "normalized": "",
        "package": "extensible-effects",
        "partial": "Eff",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff.html#t::-62-",
      "description": {
        "fct-descr": "\u003cp\u003eA sum data type, for composing effects\n\u003c/p\u003e",
        "fct-module": "Control.Eff",
        "fct-package": "extensible-effects",
        "fct-signature": "data",
        "fct-source": "src/Data-OpenUnion1.html#%3A%3E",
        "fct-type": "data",
        "title": ":\u003e"
      },
      "index": {
        "description": "sum data type for composing effects",
        "hierarchy": "Control Eff",
        "module": "Control.Eff",
        "name": ":\u003e",
        "normalized": "",
        "package": "extensible-effects",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff.html#t:Eff",
      "description": {
        "fct-descr": "\u003cp\u003eBasic datatype returned by all computations with extensible effects.\n The type \u003ccode\u003er\u003c/code\u003e is the type of effects that can be handled,\n and \u003ccode\u003ea\u003c/code\u003e is the type of value that is returned.\n\u003c/p\u003e",
        "fct-module": "Control.Eff",
        "fct-package": "extensible-effects",
        "fct-signature": "data",
        "fct-source": "src/Control-Eff.html#Eff",
        "fct-type": "data",
        "title": "Eff"
      },
      "index": {
        "description": "Basic datatype returned by all computations with extensible effects The type is the type of effects that can be handled and is the type of value that is returned",
        "hierarchy": "Control Eff",
        "module": "Control.Eff",
        "name": "Eff",
        "normalized": "",
        "package": "extensible-effects",
        "partial": "Eff",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff.html#t:Member",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ccode\u003e\u003ca\u003eMember\u003c/a\u003e\u003c/code\u003e t r\u003c/code\u003e determines whether \u003ccode\u003et\u003c/code\u003e is anywhere in the sum type \u003ccode\u003er\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Eff",
        "fct-package": "extensible-effects",
        "fct-signature": "class",
        "fct-source": "src/Data-OpenUnion1.html#Member",
        "fct-type": "class",
        "title": "Member"
      },
      "index": {
        "description": "The Member determines whether is anywhere in the sum type",
        "hierarchy": "Control Eff",
        "module": "Control.Eff",
        "name": "Member",
        "normalized": "",
        "package": "extensible-effects",
        "partial": "Member",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff.html#t:SetMember",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eSetMember\u003c/a\u003e\u003c/code\u003e is similar to \u003ccode\u003e\u003ca\u003eMember\u003c/a\u003e\u003c/code\u003e, but it allows types to belong to a\n \"set\". For every set, only one member can be in \u003ccode\u003er\u003c/code\u003e at any given time.\n This allows us to specify exclusivity and uniqueness among arbitrary effects:\n\u003c/p\u003e\u003cpre\u003e -- Terminal effects (effects which must be run last)\n data Terminal\n\n -- Make Lifts part of the Terminal effects set.\n -- The fundep assures that there can only be one Terminal effect for any r.\n instance Member (Lift m) r =\u003e SetMember Terminal (Lift m) r\n\n -- Only allow a single unique Lift effect, by making a \"Lift\" set.\n instance Member (Lift m) r =\u003e SetMember Lift (Lift m) r\n\u003c/pre\u003e",
        "fct-module": "Control.Eff",
        "fct-package": "extensible-effects",
        "fct-signature": "class",
        "fct-source": "src/Data-OpenUnion1.html#SetMember",
        "fct-type": "class",
        "title": "SetMember"
      },
      "index": {
        "description": "SetMember is similar to Member but it allows types to belong to set For every set only one member can be in at any given time This allows us to specify exclusivity and uniqueness among arbitrary effects Terminal effects effects which must be run last data Terminal Make Lifts part of the Terminal effects set The fundep assures that there can only be one Terminal effect for any instance Member Lift SetMember Terminal Lift Only allow single unique Lift effect by making Lift set instance Member Lift SetMember Lift Lift",
        "hierarchy": "Control Eff",
        "module": "Control.Eff",
        "name": "SetMember",
        "normalized": "",
        "package": "extensible-effects",
        "partial": "Set Member",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff.html#t:Union",
      "description": {
        "fct-descr": "\u003cp\u003eWhere \u003ccode\u003er\u003c/code\u003e is \u003ccode\u003et1 :\u003e t2 ... :\u003e tn\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003eUnion\u003c/a\u003e\u003c/code\u003e r v\u003c/code\u003e can be constructed with a\n value of type \u003ccode\u003eti v\u003c/code\u003e.\n Ideally, we should be be able to add the constraint \u003ccode\u003e\u003ccode\u003e\u003ca\u003eMember\u003c/a\u003e\u003c/code\u003e t r\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Eff",
        "fct-package": "extensible-effects",
        "fct-signature": "data",
        "fct-source": "src/Data-OpenUnion1.html#Union",
        "fct-type": "data",
        "title": "Union"
      },
      "index": {
        "description": "Where is t1 t2 tn Union can be constructed with value of type ti Ideally we should be be able to add the constraint Member",
        "hierarchy": "Control Eff",
        "module": "Control.Eff",
        "name": "Union",
        "normalized": "",
        "package": "extensible-effects",
        "partial": "Union",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff.html#t:VE",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eVE\u003c/a\u003e\u003c/code\u003e is either a value, or an effect of type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eUnion\u003c/a\u003e\u003c/code\u003e r\u003c/code\u003e producing another \u003ccode\u003e\u003ca\u003eVE\u003c/a\u003e\u003c/code\u003e.\n The result is that a \u003ccode\u003e\u003ca\u003eVE\u003c/a\u003e\u003c/code\u003e can produce an arbitrarily long chain of \u003ccode\u003e\u003ccode\u003e\u003ca\u003eUnion\u003c/a\u003e\u003c/code\u003e r\u003c/code\u003e\n effects, terminated with a pure value.\n\u003c/p\u003e",
        "fct-module": "Control.Eff",
        "fct-package": "extensible-effects",
        "fct-signature": "data",
        "fct-source": "src/Control-Eff.html#VE",
        "fct-type": "data",
        "title": "VE"
      },
      "index": {
        "description": "VE is either value or an effect of type Union producing another VE The result is that VE can produce an arbitrarily long chain of Union effects terminated with pure value",
        "hierarchy": "Control Eff",
        "module": "Control.Eff",
        "name": "VE",
        "normalized": "",
        "package": "extensible-effects",
        "partial": "VE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff.html#v:E",
      "description": {
        "fct-module": "Control.Eff",
        "fct-package": "extensible-effects",
        "fct-signature": "E !(Union r (VE w r))",
        "fct-source": "src/Control-Eff.html#VE",
        "fct-type": "function",
        "title": "E"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Eff",
        "module": "Control.Eff",
        "name": "E",
        "normalized": "",
        "package": "extensible-effects",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff.html#v:Val",
      "description": {
        "fct-module": "Control.Eff",
        "fct-package": "extensible-effects",
        "fct-signature": "Val w",
        "fct-source": "src/Control-Eff.html#VE",
        "fct-type": "function",
        "title": "Val"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Eff",
        "module": "Control.Eff",
        "name": "Val",
        "normalized": "",
        "package": "extensible-effects",
        "partial": "Val",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff.html#v:admin",
      "description": {
        "fct-descr": "\u003cp\u003eTell an effectful computation that you're ready to start running effects\n and return a value.\n\u003c/p\u003e",
        "fct-module": "Control.Eff",
        "fct-package": "extensible-effects",
        "fct-signature": "Eff r w -\u003e VE w r",
        "fct-source": "src/Control-Eff.html#admin",
        "fct-type": "function",
        "title": "admin"
      },
      "index": {
        "description": "Tell an effectful computation that you re ready to start running effects and return value",
        "hierarchy": "Control Eff",
        "module": "Control.Eff",
        "name": "admin",
        "normalized": "Eff a b-\u003eVE b a",
        "package": "extensible-effects",
        "partial": "",
        "signature": "Eff r w-\u003eVE w r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff.html#v:decomp",
      "description": {
        "fct-descr": "\u003cp\u003eTry extracting the contents of a Union as a given type.\n If we can't, return a reduced Union that excludes the type we just checked.\n\u003c/p\u003e",
        "fct-module": "Control.Eff",
        "fct-package": "extensible-effects",
        "fct-signature": "Union (t :\u003e r) v -\u003e Either (Union r v) (t v)",
        "fct-source": "src/Data-OpenUnion1.html#decomp",
        "fct-type": "function",
        "title": "decomp"
      },
      "index": {
        "description": "Try extracting the contents of Union as given type If we can return reduced Union that excludes the type we just checked",
        "hierarchy": "Control Eff",
        "module": "Control.Eff",
        "name": "decomp",
        "normalized": "Union(a b)c-\u003eEither(Union b c)(a c)",
        "package": "extensible-effects",
        "partial": "",
        "signature": "Union(t r)v-\u003eEither(Union r v)(t v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff.html#v:handleRelay",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a request, either handle it or relay it.\n\u003c/p\u003e",
        "fct-module": "Control.Eff",
        "fct-package": "extensible-effects",
        "fct-signature": "Union (t :\u003e r) v-\u003e (v -\u003e Eff r a)-\u003e (t v -\u003e Eff r a)-\u003e Eff r a",
        "fct-type": "function",
        "title": "handleRelay"
      },
      "index": {
        "description": "Given request either handle it or relay it",
        "hierarchy": "Control Eff",
        "module": "Control.Eff",
        "name": "handleRelay",
        "normalized": "Union(a b)c-\u003e(c-\u003eEff b d)-\u003e(a c-\u003eEff b d)-\u003eEff b d",
        "package": "extensible-effects",
        "partial": "Relay",
        "signature": "Union(t r)v-\u003e(v-\u003eEff r a)-\u003e(t v-\u003eEff r a)-\u003eEff r a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff.html#v:inj",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a Union.\n\u003c/p\u003e",
        "fct-module": "Control.Eff",
        "fct-package": "extensible-effects",
        "fct-signature": "t v -\u003e Union r v",
        "fct-source": "src/Data-OpenUnion1.html#inj",
        "fct-type": "function",
        "title": "inj"
      },
      "index": {
        "description": "Construct Union",
        "hierarchy": "Control Eff",
        "module": "Control.Eff",
        "name": "inj",
        "normalized": "a b-\u003eUnion c b",
        "package": "extensible-effects",
        "partial": "",
        "signature": "t v-\u003eUnion r v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff.html#v:interpose",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a request, either handle it or relay it. Both the handler\n and the relay can produce the same type of request that was handled.\n\u003c/p\u003e",
        "fct-module": "Control.Eff",
        "fct-package": "extensible-effects",
        "fct-signature": "Union r v -\u003e (v -\u003e Eff r a) -\u003e (t v -\u003e Eff r a) -\u003e Eff r a",
        "fct-source": "src/Control-Eff.html#interpose",
        "fct-type": "function",
        "title": "interpose"
      },
      "index": {
        "description": "Given request either handle it or relay it Both the handler and the relay can produce the same type of request that was handled",
        "hierarchy": "Control Eff",
        "module": "Control.Eff",
        "name": "interpose",
        "normalized": "Union a b-\u003e(b-\u003eEff a c)-\u003e(d b-\u003eEff a c)-\u003eEff a c",
        "package": "extensible-effects",
        "partial": "",
        "signature": "Union r v-\u003e(v-\u003eEff r a)-\u003e(t v-\u003eEff r a)-\u003eEff r a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff.html#v:prj",
      "description": {
        "fct-descr": "\u003cp\u003eTry extracting the contents of a Union as a given type.\n\u003c/p\u003e",
        "fct-module": "Control.Eff",
        "fct-package": "extensible-effects",
        "fct-signature": "Union r v -\u003e Maybe (t v)",
        "fct-source": "src/Data-OpenUnion1.html#prj",
        "fct-type": "function",
        "title": "prj"
      },
      "index": {
        "description": "Try extracting the contents of Union as given type",
        "hierarchy": "Control Eff",
        "module": "Control.Eff",
        "name": "prj",
        "normalized": "Union a b-\u003eMaybe(c b)",
        "package": "extensible-effects",
        "partial": "",
        "signature": "Union r v-\u003eMaybe(t v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff.html#v:prjForce",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the contents of a Union as a given type.\n If the Union isn't of that type, a runtime error occurs.\n\u003c/p\u003e",
        "fct-module": "Control.Eff",
        "fct-package": "extensible-effects",
        "fct-signature": "Union r v -\u003e (t v -\u003e a) -\u003e a",
        "fct-source": "src/Data-OpenUnion1.html#prjForce",
        "fct-type": "function",
        "title": "prjForce"
      },
      "index": {
        "description": "Extract the contents of Union as given type If the Union isn of that type runtime error occurs",
        "hierarchy": "Control Eff",
        "module": "Control.Eff",
        "name": "prjForce",
        "normalized": "Union a b-\u003e(c b-\u003ed)-\u003ed",
        "package": "extensible-effects",
        "partial": "Force",
        "signature": "Union r v-\u003e(t v-\u003ea)-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff.html#v:run",
      "description": {
        "fct-descr": "\u003cp\u003eGet the result from a pure computation.\n\u003c/p\u003e",
        "fct-module": "Control.Eff",
        "fct-package": "extensible-effects",
        "fct-signature": "Eff () w -\u003e w",
        "fct-source": "src/Control-Eff.html#run",
        "fct-type": "function",
        "title": "run"
      },
      "index": {
        "description": "Get the result from pure computation",
        "hierarchy": "Control Eff",
        "module": "Control.Eff",
        "name": "run",
        "normalized": "Eff()a-\u003ea",
        "package": "extensible-effects",
        "partial": "",
        "signature": "Eff()w-\u003ew"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff.html#v:send",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a method of turning requests into results,\n we produce an effectful computation.\n\u003c/p\u003e",
        "fct-module": "Control.Eff",
        "fct-package": "extensible-effects",
        "fct-signature": "(forall w.  (a -\u003e VE w r) -\u003e Union r (VE w r)) -\u003e Eff r a",
        "fct-source": "src/Control-Eff.html#send",
        "fct-type": "function",
        "title": "send"
      },
      "index": {
        "description": "Given method of turning requests into results we produce an effectful computation",
        "hierarchy": "Control Eff",
        "module": "Control.Eff",
        "name": "send",
        "normalized": "(a b(c-\u003eVE d e)-\u003eUnion e(VE d e))-\u003eEff e c",
        "package": "extensible-effects",
        "partial": "",
        "signature": "(forall w.(a-\u003eVE w r)-\u003eUnion r(VE w r))-\u003eEff r a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/extensible-effects/docs/Control-Eff.html#v:unsafeReUnion",
      "description": {
        "fct-descr": "\u003cp\u003eJuggle types for a Union. Use cautiously.\n\u003c/p\u003e",
        "fct-module": "Control.Eff",
        "fct-package": "extensible-effects",
        "fct-signature": "Union r w -\u003e Union t w",
        "fct-source": "src/Data-OpenUnion1.html#unsafeReUnion",
        "fct-type": "function",
        "title": "unsafeReUnion"
      },
      "index": {
        "description": "Juggle types for Union Use cautiously",
        "hierarchy": "Control Eff",
        "module": "Control.Eff",
        "name": "unsafeReUnion",
        "normalized": "Union a b-\u003eUnion c b",
        "package": "extensible-effects",
        "partial": "Re Union",
        "signature": "Union r w-\u003eUnion t w"
      }
    }
  }
]