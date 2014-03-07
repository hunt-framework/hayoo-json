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
        "word": "artery"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Artery",
          "name": "Artery",
          "package": "artery",
          "source": "src/Control-Artery.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Artery",
          "module": "Control.Artery",
          "name": "Artery",
          "package": "artery",
          "partial": "Artery",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/artery/docs/Control-Artery.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eArtery\u003c/a\u003e\u003c/code\u003e is a device that produces a value from the input every beat.\n\u003c/p\u003e",
          "module": "Control.Artery",
          "name": "Artery",
          "package": "artery",
          "source": "src/Control-Artery.html#Artery",
          "type": "newtype"
        },
        "index": {
          "description": "Artery is device that produces value from the input every beat",
          "hierarchy": "Control Artery",
          "module": "Control.Artery",
          "name": "Artery",
          "package": "artery",
          "partial": "Artery",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/artery/docs/Control-Artery.html#t:Artery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Artery",
          "name": "Artery",
          "package": "artery",
          "signature": "Artery",
          "source": "src/Control-Artery.html#Artery",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Artery",
          "module": "Control.Artery",
          "name": "Artery",
          "package": "artery",
          "partial": "Artery",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/artery/docs/Control-Artery.html#v:Artery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'delay n' propagates a signal n beat behind. \n\u003c/p\u003e",
          "module": "Control.Artery",
          "name": "delay",
          "package": "artery",
          "signature": "Int -\u003e a -\u003e Artery m a a",
          "source": "src/Control-Artery.html#delay",
          "type": "function"
        },
        "index": {
          "description": "delay propagates signal beat behind",
          "hierarchy": "Control Artery",
          "module": "Control.Artery",
          "name": "delay",
          "normalized": "Int-\u003ea-\u003eArtery b a a",
          "package": "artery",
          "signature": "Int-\u003ea-\u003eArtery m a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/artery/docs/Control-Artery.html#v:delay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelay a beat. The first argument is the default value for the output.\n\u003c/p\u003e",
          "module": "Control.Artery",
          "name": "delay1",
          "package": "artery",
          "signature": "a -\u003e Artery m a a",
          "source": "src/Control-Artery.html#delay1",
          "type": "function"
        },
        "index": {
          "description": "Delay beat The first argument is the default value for the output",
          "hierarchy": "Control Artery",
          "module": "Control.Artery",
          "name": "delay1",
          "normalized": "a-\u003eArtery b a a",
          "package": "artery",
          "signature": "a-\u003eArtery m a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/artery/docs/Control-Artery.html#v:delay1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the given action every beat.\n\u003c/p\u003e",
          "module": "Control.Artery",
          "name": "effectful",
          "package": "artery",
          "signature": "(i -\u003e m o) -\u003e Artery m i o",
          "source": "src/Control-Artery.html#effectful",
          "type": "function"
        },
        "index": {
          "description": "Run the given action every beat",
          "hierarchy": "Control Artery",
          "module": "Control.Artery",
          "name": "effectful",
          "normalized": "(a-\u003eb c)-\u003eArtery b a c",
          "package": "artery",
          "signature": "(i-\u003em o)-\u003eArtery m i o",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/artery/docs/Control-Artery.html#v:effectful"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003eloop\u003c/a\u003e\u003c/code\u003e, but the feedback will be delayed a beat.\n\u003c/p\u003e",
          "module": "Control.Artery",
          "name": "feedback",
          "package": "artery",
          "signature": "r -\u003e Artery m (i, r) (o, r) -\u003e Artery m i o",
          "source": "src/Control-Artery.html#feedback",
          "type": "function"
        },
        "index": {
          "description": "Analogous to loop but the feedback will be delayed beat",
          "hierarchy": "Control Artery",
          "module": "Control.Artery",
          "name": "feedback",
          "normalized": "a-\u003eArtery b(c,a)(d,a)-\u003eArtery b c d",
          "package": "artery",
          "signature": "r-\u003eArtery m(i,r)(o,r)-\u003eArtery m i o",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/artery/docs/Control-Artery.html#v:feedback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Artery",
          "name": "fromList",
          "package": "artery",
          "signature": "[a] -\u003e Artery m b a",
          "source": "src/Control-Artery.html#fromList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Artery",
          "module": "Control.Artery",
          "name": "fromList",
          "normalized": "[a]-\u003eArtery b c a",
          "package": "artery",
          "partial": "List",
          "signature": "[a]-\u003eArtery m b a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/artery/docs/Control-Artery.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePump up the \u003ccode\u003e\u003ca\u003eArtery\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Artery",
          "name": "runArtery",
          "package": "artery",
          "signature": "Artery m i o -\u003e i -\u003e m (o, Artery m i o)",
          "source": "src/Control-Artery.html#runArtery",
          "type": "function"
        },
        "index": {
          "description": "Pump up the Artery",
          "hierarchy": "Control Artery",
          "module": "Control.Artery",
          "name": "runArtery",
          "normalized": "Artery a b c-\u003eb-\u003ea(c,Artery a b c)",
          "package": "artery",
          "partial": "Artery",
          "signature": "Artery m i o-\u003ei-\u003em(o,Artery m i o)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/artery/docs/Control-Artery.html#v:runArtery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Artery",
          "name": "runList",
          "package": "artery",
          "signature": "Artery m a b -\u003e [a] -\u003e m [b]",
          "source": "src/Control-Artery.html#runList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Artery",
          "module": "Control.Artery",
          "name": "runList",
          "normalized": "Artery a b c-\u003e[b]-\u003ea[c]",
          "package": "artery",
          "partial": "List",
          "signature": "Artery m a b-\u003e[a]-\u003em[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/artery/docs/Control-Artery.html#v:runList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduce values by accumulating inputs.\n\u003c/p\u003e",
          "module": "Control.Artery",
          "name": "scan",
          "package": "artery",
          "signature": "(i -\u003e a -\u003e a) -\u003e a -\u003e Artery m i a",
          "source": "src/Control-Artery.html#scan",
          "type": "function"
        },
        "index": {
          "description": "Produce values by accumulating inputs",
          "hierarchy": "Control Artery",
          "module": "Control.Artery",
          "name": "scan",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eArtery c a b",
          "package": "artery",
          "signature": "(i-\u003ea-\u003ea)-\u003ea-\u003eArtery m i a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/artery/docs/Control-Artery.html#v:scan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003escan\u003c/a\u003e\u003c/code\u003e, but it allows monadic accumulators.\n\u003c/p\u003e",
          "module": "Control.Artery",
          "name": "scanM",
          "package": "artery",
          "signature": "(i -\u003e a -\u003e m a) -\u003e a -\u003e Artery m i a",
          "source": "src/Control-Artery.html#scanM",
          "type": "function"
        },
        "index": {
          "description": "Analogous to scan but it allows monadic accumulators",
          "hierarchy": "Control Artery",
          "module": "Control.Artery",
          "name": "scanM",
          "normalized": "(a-\u003eb-\u003ec b)-\u003eb-\u003eArtery c a b",
          "package": "artery",
          "signature": "(i-\u003ea-\u003em a)-\u003ea-\u003eArtery m i a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/artery/docs/Control-Artery.html#v:scanM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the given stateful action every beat.\n\u003c/p\u003e",
          "module": "Control.Artery",
          "name": "stateful",
          "package": "artery",
          "signature": "(i -\u003e StateT s m o) -\u003e s -\u003e Artery m i o",
          "source": "src/Control-Artery.html#stateful",
          "type": "function"
        },
        "index": {
          "description": "Run the given stateful action every beat",
          "hierarchy": "Control Artery",
          "module": "Control.Artery",
          "name": "stateful",
          "normalized": "(a-\u003eStateT b c d)-\u003eb-\u003eArtery c a d",
          "package": "artery",
          "signature": "(i-\u003eStateT s m o)-\u003es-\u003eArtery m i o",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/artery/docs/Control-Artery.html#v:stateful"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Artery",
          "name": "unArtery",
          "package": "artery",
          "signature": "forall r.  i -\u003e (o -\u003e Artery m i o -\u003e m r) -\u003e m r",
          "source": "src/Control-Artery.html#Artery",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Artery",
          "module": "Control.Artery",
          "name": "unArtery",
          "normalized": "a b c-\u003e(d-\u003eArtery e c d-\u003ee f)-\u003ee f",
          "package": "artery",
          "partial": "Artery",
          "signature": "forall r. i-\u003e(o-\u003eArtery m i o-\u003em r)-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/artery/docs/Control-Artery.html#v:unArtery"
      }
    }
  ]
]