[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strictly/docs/Control-Strictly.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTurn a function lazy in its arguments\n into a function strict in its arguments.\n\u003c/p\u003e\u003cp\u003eIt should be noted that this does nothing to change\n the internals of a function. If the function is lazy\n on the inside, these combinators cannot fix that.\n They only change the external entry point to the function:\n the indicated number of arguments will be forced\n before attempting to evaluate the function.\n\u003c/p\u003e\u003cp\u003eFor finer control over evaluation strategies,\n use the \u003ccode\u003eparallel\u003c/code\u003e package.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Strictly",
        "fct-package": "strictly",
        "fct-signature": "module",
        "fct-source": "src/Control-Strictly.html",
        "fct-type": "module",
        "title": "Strictly"
      },
      "index": {
        "description": "Turn function lazy in its arguments into function strict in its arguments It should be noted that this does nothing to change the internals of function If the function is lazy on the inside these combinators cannot fix that They only change the external entry point to the function the indicated number of arguments will be forced before attempting to evaluate the function For finer control over evaluation strategies use the parallel package",
        "hierarchy": "Control Strictly",
        "module": "Control.Strictly",
        "name": "Strictly",
        "normalized": "",
        "package": "strictly",
        "partial": "Strictly",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strictly/docs/Control-Strictly.html#v:strictly1",
      "description": {
        "fct-descr": "\u003cp\u003eEquivalent to \u003ccode\u003e$!\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003estrictly1\u003c/code\u003e is idempotent.\n\u003c/p\u003e\u003cpre\u003e strictly1 (strictly1 f) x &#8801; strictly1 f x\n\u003c/pre\u003e",
        "fct-module": "Control.Strictly",
        "fct-package": "strictly",
        "fct-signature": "(a -\u003e b) -\u003e a -\u003e b",
        "fct-source": "src/Control-Strictly.html#strictly1",
        "fct-type": "function",
        "title": "strictly1"
      },
      "index": {
        "description": "Equivalent to strictly1 is idempotent strictly1 strictly1 strictly1",
        "hierarchy": "Control Strictly",
        "module": "Control.Strictly",
        "name": "strictly1",
        "normalized": "(a-\u003eb)-\u003ea-\u003eb",
        "package": "strictly",
        "partial": "",
        "signature": "(a-\u003eb)-\u003ea-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strictly/docs/Control-Strictly.html#v:strictly2",
      "description": {
        "fct-module": "Control.Strictly",
        "fct-package": "strictly",
        "fct-signature": "(a -\u003e b -\u003e c) -\u003e a -\u003e b -\u003e c",
        "fct-source": "src/Control-Strictly.html#strictly2",
        "fct-type": "function",
        "title": "strictly2"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Strictly",
        "module": "Control.Strictly",
        "name": "strictly2",
        "normalized": "(a-\u003eb-\u003ec)-\u003ea-\u003eb-\u003ec",
        "package": "strictly",
        "partial": "",
        "signature": "(a-\u003eb-\u003ec)-\u003ea-\u003eb-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strictly/docs/Control-Strictly.html#v:strictly3",
      "description": {
        "fct-module": "Control.Strictly",
        "fct-package": "strictly",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e d) -\u003e a -\u003e b -\u003e c -\u003e d",
        "fct-source": "src/Control-Strictly.html#strictly3",
        "fct-type": "function",
        "title": "strictly3"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Strictly",
        "module": "Control.Strictly",
        "name": "strictly3",
        "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003ea-\u003eb-\u003ec-\u003ed",
        "package": "strictly",
        "partial": "",
        "signature": "(a-\u003eb-\u003ec-\u003ed)-\u003ea-\u003eb-\u003ec-\u003ed"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strictly/docs/Control-Strictly.html#v:veryStrictly1",
      "description": {
        "fct-descr": "\u003cp\u003eEquivalent to \u003ccode\u003e$!!\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003everyStrictly1\u003c/code\u003e is idempotent.\n\u003c/p\u003e\u003cpre\u003e veryStrictly1 (veryStrictly1 f) x &#8801; veryStrictly1 f x\n\u003c/pre\u003e",
        "fct-module": "Control.Strictly",
        "fct-package": "strictly",
        "fct-signature": "(a -\u003e b) -\u003e a -\u003e b",
        "fct-source": "src/Control-Strictly.html#veryStrictly1",
        "fct-type": "function",
        "title": "veryStrictly1"
      },
      "index": {
        "description": "Equivalent to veryStrictly1 is idempotent veryStrictly1 veryStrictly1 veryStrictly1",
        "hierarchy": "Control Strictly",
        "module": "Control.Strictly",
        "name": "veryStrictly1",
        "normalized": "(a-\u003eb)-\u003ea-\u003eb",
        "package": "strictly",
        "partial": "Strictly",
        "signature": "(a-\u003eb)-\u003ea-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strictly/docs/Control-Strictly.html#v:veryStrictly2",
      "description": {
        "fct-module": "Control.Strictly",
        "fct-package": "strictly",
        "fct-signature": "(a -\u003e b -\u003e c) -\u003e a -\u003e b -\u003e c",
        "fct-source": "src/Control-Strictly.html#veryStrictly2",
        "fct-type": "function",
        "title": "veryStrictly2"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Strictly",
        "module": "Control.Strictly",
        "name": "veryStrictly2",
        "normalized": "(a-\u003eb-\u003ec)-\u003ea-\u003eb-\u003ec",
        "package": "strictly",
        "partial": "Strictly",
        "signature": "(a-\u003eb-\u003ec)-\u003ea-\u003eb-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strictly/docs/Control-Strictly.html#v:veryStrictly3",
      "description": {
        "fct-module": "Control.Strictly",
        "fct-package": "strictly",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e d) -\u003e a -\u003e b -\u003e c -\u003e d",
        "fct-source": "src/Control-Strictly.html#veryStrictly3",
        "fct-type": "function",
        "title": "veryStrictly3"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Strictly",
        "module": "Control.Strictly",
        "name": "veryStrictly3",
        "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003ea-\u003eb-\u003ec-\u003ed",
        "package": "strictly",
        "partial": "Strictly",
        "signature": "(a-\u003eb-\u003ec-\u003ed)-\u003ea-\u003eb-\u003ec-\u003ed"
      }
    }
  }
]