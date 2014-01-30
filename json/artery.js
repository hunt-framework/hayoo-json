[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/artery/docs/Control-Artery.html#",
      "description": {
        "fct-module": "Control.Artery",
        "fct-package": "artery",
        "fct-signature": "module",
        "fct-source": "src/Control-Artery.html",
        "fct-type": "module",
        "title": "Artery"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Artery",
        "module": "Control.Artery",
        "name": "Artery",
        "normalized": "",
        "package": "artery",
        "partial": "Artery",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/artery/docs/Control-Artery.html#t:Artery",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eArtery\u003c/a\u003e\u003c/code\u003e is a device that produces a value from the input every beat.\n\u003c/p\u003e",
        "fct-module": "Control.Artery",
        "fct-package": "artery",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Artery.html#Artery",
        "fct-type": "newtype",
        "title": "Artery"
      },
      "index": {
        "description": "Artery is device that produces value from the input every beat",
        "hierarchy": "Control Artery",
        "module": "Control.Artery",
        "name": "Artery",
        "normalized": "",
        "package": "artery",
        "partial": "Artery",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/artery/docs/Control-Artery.html#v:Artery",
      "description": {
        "fct-module": "Control.Artery",
        "fct-package": "artery",
        "fct-signature": "Artery",
        "fct-source": "src/Control-Artery.html#Artery",
        "fct-type": "function",
        "title": "Artery"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Artery",
        "module": "Control.Artery",
        "name": "Artery",
        "normalized": "",
        "package": "artery",
        "partial": "Artery",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/artery/docs/Control-Artery.html#v:delay",
      "description": {
        "fct-descr": "\u003cp\u003e'delay n' propagates a signal n beat behind. \n\u003c/p\u003e",
        "fct-module": "Control.Artery",
        "fct-package": "artery",
        "fct-signature": "Int -\u003e a -\u003e Artery m a a",
        "fct-source": "src/Control-Artery.html#delay",
        "fct-type": "function",
        "title": "delay"
      },
      "index": {
        "description": "delay propagates signal beat behind",
        "hierarchy": "Control Artery",
        "module": "Control.Artery",
        "name": "delay",
        "normalized": "Int-\u003ea-\u003eArtery b a a",
        "package": "artery",
        "partial": "",
        "signature": "Int-\u003ea-\u003eArtery m a a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/artery/docs/Control-Artery.html#v:delay1",
      "description": {
        "fct-descr": "\u003cp\u003eDelay a beat. The first argument is the default value for the output.\n\u003c/p\u003e",
        "fct-module": "Control.Artery",
        "fct-package": "artery",
        "fct-signature": "a -\u003e Artery m a a",
        "fct-source": "src/Control-Artery.html#delay1",
        "fct-type": "function",
        "title": "delay1"
      },
      "index": {
        "description": "Delay beat The first argument is the default value for the output",
        "hierarchy": "Control Artery",
        "module": "Control.Artery",
        "name": "delay1",
        "normalized": "a-\u003eArtery b a a",
        "package": "artery",
        "partial": "",
        "signature": "a-\u003eArtery m a a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/artery/docs/Control-Artery.html#v:effectful",
      "description": {
        "fct-descr": "\u003cp\u003eRun the given action every beat.\n\u003c/p\u003e",
        "fct-module": "Control.Artery",
        "fct-package": "artery",
        "fct-signature": "(i -\u003e m o) -\u003e Artery m i o",
        "fct-source": "src/Control-Artery.html#effectful",
        "fct-type": "function",
        "title": "effectful"
      },
      "index": {
        "description": "Run the given action every beat",
        "hierarchy": "Control Artery",
        "module": "Control.Artery",
        "name": "effectful",
        "normalized": "(a-\u003eb c)-\u003eArtery b a c",
        "package": "artery",
        "partial": "",
        "signature": "(i-\u003em o)-\u003eArtery m i o"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/artery/docs/Control-Artery.html#v:feedback",
      "description": {
        "fct-descr": "\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003eloop\u003c/a\u003e\u003c/code\u003e, but the feedback will be delayed a beat.\n\u003c/p\u003e",
        "fct-module": "Control.Artery",
        "fct-package": "artery",
        "fct-signature": "r -\u003e Artery m (i, r) (o, r) -\u003e Artery m i o",
        "fct-source": "src/Control-Artery.html#feedback",
        "fct-type": "function",
        "title": "feedback"
      },
      "index": {
        "description": "Analogous to loop but the feedback will be delayed beat",
        "hierarchy": "Control Artery",
        "module": "Control.Artery",
        "name": "feedback",
        "normalized": "a-\u003eArtery b(c,a)(d,a)-\u003eArtery b c d",
        "package": "artery",
        "partial": "",
        "signature": "r-\u003eArtery m(i,r)(o,r)-\u003eArtery m i o"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/artery/docs/Control-Artery.html#v:fromList",
      "description": {
        "fct-module": "Control.Artery",
        "fct-package": "artery",
        "fct-signature": "[a] -\u003e Artery m b a",
        "fct-source": "src/Control-Artery.html#fromList",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Artery",
        "module": "Control.Artery",
        "name": "fromList",
        "normalized": "[a]-\u003eArtery b c a",
        "package": "artery",
        "partial": "List",
        "signature": "[a]-\u003eArtery m b a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/artery/docs/Control-Artery.html#v:runArtery",
      "description": {
        "fct-descr": "\u003cp\u003ePump up the \u003ccode\u003e\u003ca\u003eArtery\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Artery",
        "fct-package": "artery",
        "fct-signature": "Artery m i o -\u003e i -\u003e m (o, Artery m i o)",
        "fct-source": "src/Control-Artery.html#runArtery",
        "fct-type": "function",
        "title": "runArtery"
      },
      "index": {
        "description": "Pump up the Artery",
        "hierarchy": "Control Artery",
        "module": "Control.Artery",
        "name": "runArtery",
        "normalized": "Artery a b c-\u003eb-\u003ea(c,Artery a b c)",
        "package": "artery",
        "partial": "Artery",
        "signature": "Artery m i o-\u003ei-\u003em(o,Artery m i o)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/artery/docs/Control-Artery.html#v:runList",
      "description": {
        "fct-module": "Control.Artery",
        "fct-package": "artery",
        "fct-signature": "Artery m a b -\u003e [a] -\u003e m [b]",
        "fct-source": "src/Control-Artery.html#runList",
        "fct-type": "function",
        "title": "runList"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Artery",
        "module": "Control.Artery",
        "name": "runList",
        "normalized": "Artery a b c-\u003e[b]-\u003ea[c]",
        "package": "artery",
        "partial": "List",
        "signature": "Artery m a b-\u003e[a]-\u003em[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/artery/docs/Control-Artery.html#v:scan",
      "description": {
        "fct-descr": "\u003cp\u003eProduce values by accumulating inputs.\n\u003c/p\u003e",
        "fct-module": "Control.Artery",
        "fct-package": "artery",
        "fct-signature": "(i -\u003e a -\u003e a) -\u003e a -\u003e Artery m i a",
        "fct-source": "src/Control-Artery.html#scan",
        "fct-type": "function",
        "title": "scan"
      },
      "index": {
        "description": "Produce values by accumulating inputs",
        "hierarchy": "Control Artery",
        "module": "Control.Artery",
        "name": "scan",
        "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eArtery c a b",
        "package": "artery",
        "partial": "",
        "signature": "(i-\u003ea-\u003ea)-\u003ea-\u003eArtery m i a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/artery/docs/Control-Artery.html#v:scanM",
      "description": {
        "fct-descr": "\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003escan\u003c/a\u003e\u003c/code\u003e, but it allows monadic accumulators.\n\u003c/p\u003e",
        "fct-module": "Control.Artery",
        "fct-package": "artery",
        "fct-signature": "(i -\u003e a -\u003e m a) -\u003e a -\u003e Artery m i a",
        "fct-source": "src/Control-Artery.html#scanM",
        "fct-type": "function",
        "title": "scanM"
      },
      "index": {
        "description": "Analogous to scan but it allows monadic accumulators",
        "hierarchy": "Control Artery",
        "module": "Control.Artery",
        "name": "scanM",
        "normalized": "(a-\u003eb-\u003ec b)-\u003eb-\u003eArtery c a b",
        "package": "artery",
        "partial": "",
        "signature": "(i-\u003ea-\u003em a)-\u003ea-\u003eArtery m i a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/artery/docs/Control-Artery.html#v:stateful",
      "description": {
        "fct-descr": "\u003cp\u003eRun the given stateful action every beat.\n\u003c/p\u003e",
        "fct-module": "Control.Artery",
        "fct-package": "artery",
        "fct-signature": "(i -\u003e StateT s m o) -\u003e s -\u003e Artery m i o",
        "fct-source": "src/Control-Artery.html#stateful",
        "fct-type": "function",
        "title": "stateful"
      },
      "index": {
        "description": "Run the given stateful action every beat",
        "hierarchy": "Control Artery",
        "module": "Control.Artery",
        "name": "stateful",
        "normalized": "(a-\u003eStateT b c d)-\u003eb-\u003eArtery c a d",
        "package": "artery",
        "partial": "",
        "signature": "(i-\u003eStateT s m o)-\u003es-\u003eArtery m i o"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/artery/docs/Control-Artery.html#v:unArtery",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Artery",
        "fct-package": "artery",
        "fct-signature": "forall r.  i -\u003e (o -\u003e Artery m i o -\u003e m r) -\u003e m r",
        "fct-source": "src/Control-Artery.html#Artery",
        "fct-type": "function",
        "title": "unArtery"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Artery",
        "module": "Control.Artery",
        "name": "unArtery",
        "normalized": "a b c-\u003e(d-\u003eArtery e c d-\u003ee f)-\u003ee f",
        "package": "artery",
        "partial": "Artery",
        "signature": "forall r. i-\u003e(o-\u003eArtery m i o-\u003em r)-\u003em r"
      }
    }
  }
]