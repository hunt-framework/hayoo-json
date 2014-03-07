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
        "word": "strictly"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTurn a function lazy in its arguments\n into a function strict in its arguments.\n\u003c/p\u003e\u003cp\u003eIt should be noted that this does nothing to change\n the internals of a function. If the function is lazy\n on the inside, these combinators cannot fix that.\n They only change the external entry point to the function:\n the indicated number of arguments will be forced\n before attempting to evaluate the function.\n\u003c/p\u003e\u003cp\u003eFor finer control over evaluation strategies,\n use the \u003ccode\u003eparallel\u003c/code\u003e package.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Strictly",
          "name": "Strictly",
          "package": "strictly",
          "source": "src/Control-Strictly.html",
          "type": "module"
        },
        "index": {
          "description": "Turn function lazy in its arguments into function strict in its arguments It should be noted that this does nothing to change the internals of function If the function is lazy on the inside these combinators cannot fix that They only change the external entry point to the function the indicated number of arguments will be forced before attempting to evaluate the function For finer control over evaluation strategies use the parallel package",
          "hierarchy": "Control Strictly",
          "module": "Control.Strictly",
          "name": "Strictly",
          "package": "strictly",
          "partial": "Strictly",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/strictly/docs/Control-Strictly.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEquivalent to \u003ccode\u003e$!\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003estrictly1\u003c/code\u003e is idempotent.\n\u003c/p\u003e\u003cpre\u003e strictly1 (strictly1 f) x &#8801; strictly1 f x\n\u003c/pre\u003e",
          "module": "Control.Strictly",
          "name": "strictly1",
          "package": "strictly",
          "signature": "(a -\u003e b) -\u003e a -\u003e b",
          "source": "src/Control-Strictly.html#strictly1",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to strictly1 is idempotent strictly1 strictly1 strictly1",
          "hierarchy": "Control Strictly",
          "module": "Control.Strictly",
          "name": "strictly1",
          "normalized": "(a-\u003eb)-\u003ea-\u003eb",
          "package": "strictly",
          "signature": "(a-\u003eb)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strictly/docs/Control-Strictly.html#v:strictly1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Strictly",
          "name": "strictly2",
          "package": "strictly",
          "signature": "(a -\u003e b -\u003e c) -\u003e a -\u003e b -\u003e c",
          "source": "src/Control-Strictly.html#strictly2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Strictly",
          "module": "Control.Strictly",
          "name": "strictly2",
          "normalized": "(a-\u003eb-\u003ec)-\u003ea-\u003eb-\u003ec",
          "package": "strictly",
          "signature": "(a-\u003eb-\u003ec)-\u003ea-\u003eb-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strictly/docs/Control-Strictly.html#v:strictly2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Strictly",
          "name": "strictly3",
          "package": "strictly",
          "signature": "(a -\u003e b -\u003e c -\u003e d) -\u003e a -\u003e b -\u003e c -\u003e d",
          "source": "src/Control-Strictly.html#strictly3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Strictly",
          "module": "Control.Strictly",
          "name": "strictly3",
          "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003ea-\u003eb-\u003ec-\u003ed",
          "package": "strictly",
          "signature": "(a-\u003eb-\u003ec-\u003ed)-\u003ea-\u003eb-\u003ec-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strictly/docs/Control-Strictly.html#v:strictly3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEquivalent to \u003ccode\u003e$!!\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003everyStrictly1\u003c/code\u003e is idempotent.\n\u003c/p\u003e\u003cpre\u003e veryStrictly1 (veryStrictly1 f) x &#8801; veryStrictly1 f x\n\u003c/pre\u003e",
          "module": "Control.Strictly",
          "name": "veryStrictly1",
          "package": "strictly",
          "signature": "(a -\u003e b) -\u003e a -\u003e b",
          "source": "src/Control-Strictly.html#veryStrictly1",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to veryStrictly1 is idempotent veryStrictly1 veryStrictly1 veryStrictly1",
          "hierarchy": "Control Strictly",
          "module": "Control.Strictly",
          "name": "veryStrictly1",
          "normalized": "(a-\u003eb)-\u003ea-\u003eb",
          "package": "strictly",
          "partial": "Strictly",
          "signature": "(a-\u003eb)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strictly/docs/Control-Strictly.html#v:veryStrictly1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Strictly",
          "name": "veryStrictly2",
          "package": "strictly",
          "signature": "(a -\u003e b -\u003e c) -\u003e a -\u003e b -\u003e c",
          "source": "src/Control-Strictly.html#veryStrictly2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Strictly",
          "module": "Control.Strictly",
          "name": "veryStrictly2",
          "normalized": "(a-\u003eb-\u003ec)-\u003ea-\u003eb-\u003ec",
          "package": "strictly",
          "partial": "Strictly",
          "signature": "(a-\u003eb-\u003ec)-\u003ea-\u003eb-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strictly/docs/Control-Strictly.html#v:veryStrictly2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Strictly",
          "name": "veryStrictly3",
          "package": "strictly",
          "signature": "(a -\u003e b -\u003e c -\u003e d) -\u003e a -\u003e b -\u003e c -\u003e d",
          "source": "src/Control-Strictly.html#veryStrictly3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Strictly",
          "module": "Control.Strictly",
          "name": "veryStrictly3",
          "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003ea-\u003eb-\u003ec-\u003ed",
          "package": "strictly",
          "partial": "Strictly",
          "signature": "(a-\u003eb-\u003ec-\u003ed)-\u003ea-\u003eb-\u003ec-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strictly/docs/Control-Strictly.html#v:veryStrictly3"
      }
    }
  ]
]