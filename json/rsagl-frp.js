[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Accumulation.html#",
      "description": {
        "fct-module": "RSAGL.FRP.Accumulation",
        "fct-package": "rsagl-frp",
        "fct-signature": "module",
        "fct-source": "src/RSAGL-FRP-Accumulation.html",
        "fct-type": "module",
        "title": "Accumulation"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL FRP Accumulation",
        "module": "RSAGL.FRP.Accumulation",
        "name": "Accumulation",
        "normalized": "",
        "package": "rsagl-frp",
        "partial": "Accumulation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Accumulation.html#t:EdgeDetectionMode",
      "description": {
        "fct-descr": "\u003cp\u003eThe edge detection mode.  If \u003ccode\u003e\u003ca\u003eDiscrete\u003c/a\u003e\u003c/code\u003e, detect edge between subsequent frames only.\n If \u003ccode\u003e\u003ca\u003eFuzzy\u003c/a\u003e\u003c/code\u003e detect edge since the most recent previous detected edge.\n If \u003ccode\u003eHashedDiscrete\u003c/code\u003e, the comparison function is itself expensive, and the FRP runtime will compare by \u003ccode\u003eStableName\u003c/code\u003es as a short-circuit optimization.\n\u003c/p\u003e",
        "fct-module": "RSAGL.FRP.Accumulation",
        "fct-package": "rsagl-frp",
        "fct-signature": "data",
        "fct-source": "src/RSAGL-FRP-Accumulation.html#EdgeDetectionMode",
        "fct-type": "data",
        "title": "EdgeDetectionMode"
      },
      "index": {
        "description": "The edge detection mode If Discrete detect edge between subsequent frames only If Fuzzy detect edge since the most recent previous detected edge If HashedDiscrete the comparison function is itself expensive and the FRP runtime will compare by StableName as short-circuit optimization",
        "hierarchy": "RSAGL FRP Accumulation",
        "module": "RSAGL.FRP.Accumulation",
        "name": "EdgeDetectionMode",
        "normalized": "",
        "package": "rsagl-frp",
        "partial": "Edge Detection Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Accumulation.html#v:Discrete",
      "description": {
        "fct-module": "RSAGL.FRP.Accumulation",
        "fct-package": "rsagl-frp",
        "fct-signature": "Discrete",
        "fct-source": "src/RSAGL-FRP-Accumulation.html#EdgeDetectionMode",
        "fct-type": "function",
        "title": "Discrete"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL FRP Accumulation",
        "module": "RSAGL.FRP.Accumulation",
        "name": "Discrete",
        "normalized": "",
        "package": "rsagl-frp",
        "partial": "Discrete",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Accumulation.html#v:Fuzzy",
      "description": {
        "fct-module": "RSAGL.FRP.Accumulation",
        "fct-package": "rsagl-frp",
        "fct-signature": "Fuzzy",
        "fct-source": "src/RSAGL-FRP-Accumulation.html#EdgeDetectionMode",
        "fct-type": "function",
        "title": "Fuzzy"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL FRP Accumulation",
        "module": "RSAGL.FRP.Accumulation",
        "name": "Fuzzy",
        "normalized": "",
        "package": "rsagl-frp",
        "partial": "Fuzzy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Accumulation.html#v:accumulateNumerical",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eaccumulate\u003c/a\u003e\u003c/code\u003e harness for some numerical methods.\n Parameters are: current input, previous output, delta time, absolute time, and number of frames at the specified frequency.\n\u003c/p\u003e",
        "fct-module": "RSAGL.FRP.Accumulation",
        "fct-package": "rsagl-frp",
        "fct-signature": "Frequency -\u003e (i -\u003e o -\u003e Time -\u003e Time -\u003e Integer -\u003e o) -\u003e o -\u003e FRP e m i o",
        "fct-source": "src/RSAGL-FRP-Accumulation.html#accumulateNumerical",
        "fct-type": "function",
        "title": "accumulateNumerical"
      },
      "index": {
        "description": "accumulate harness for some numerical methods Parameters are current input previous output delta time absolute time and number of frames at the specified frequency",
        "hierarchy": "RSAGL FRP Accumulation",
        "module": "RSAGL.FRP.Accumulation",
        "name": "accumulateNumerical",
        "normalized": "Frequency-\u003e(a-\u003eb-\u003eTime-\u003eTime-\u003eInteger-\u003eb)-\u003eb-\u003eFRP c d a b",
        "package": "rsagl-frp",
        "partial": "Numerical",
        "signature": "Frequency-\u003e(i-\u003eo-\u003eTime-\u003eTime-\u003eInteger-\u003eo)-\u003eo-\u003eFRP e m i o"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Accumulation.html#v:changed",
      "description": {
        "fct-descr": "\u003cp\u003eSame as 'edge Discrete'.\n\u003c/p\u003e",
        "fct-module": "RSAGL.FRP.Accumulation",
        "fct-package": "rsagl-frp",
        "fct-signature": "(x -\u003e x -\u003e Bool) -\u003e FRP e m x Bool",
        "fct-source": "src/RSAGL-FRP-Accumulation.html#changed",
        "fct-type": "function",
        "title": "changed"
      },
      "index": {
        "description": "Same as edge Discrete",
        "hierarchy": "RSAGL FRP Accumulation",
        "module": "RSAGL.FRP.Accumulation",
        "name": "changed",
        "normalized": "(a-\u003ea-\u003eBool)-\u003eFRP b c a Bool",
        "package": "rsagl-frp",
        "partial": "",
        "signature": "(x-\u003ex-\u003eBool)-\u003eFRP e m x Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Accumulation.html#v:clingy",
      "description": {
        "fct-descr": "\u003cp\u003eRecalculate a function only at the edges of it's input.\n\u003c/p\u003e",
        "fct-module": "RSAGL.FRP.Accumulation",
        "fct-package": "rsagl-frp",
        "fct-signature": "EdgeDetectionMode -\u003e (j -\u003e j -\u003e Bool) -\u003e (j -\u003e p) -\u003e FRP e m j p",
        "fct-source": "src/RSAGL-FRP-Accumulation.html#clingy",
        "fct-type": "function",
        "title": "clingy"
      },
      "index": {
        "description": "Recalculate function only at the edges of it input",
        "hierarchy": "RSAGL FRP Accumulation",
        "module": "RSAGL.FRP.Accumulation",
        "name": "clingy",
        "normalized": "EdgeDetectionMode-\u003e(a-\u003ea-\u003eBool)-\u003e(a-\u003eb)-\u003eFRP c d a b",
        "package": "rsagl-frp",
        "partial": "",
        "signature": "EdgeDetectionMode-\u003e(j-\u003ej-\u003eBool)-\u003e(j-\u003ep)-\u003eFRP e m j p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Accumulation.html#v:delay",
      "description": {
        "fct-descr": "\u003cp\u003eDelay a piece of data for one frame.\n\u003c/p\u003e",
        "fct-module": "RSAGL.FRP.Accumulation",
        "fct-package": "rsagl-frp",
        "fct-signature": "x -\u003e FRP e m x x",
        "fct-source": "src/RSAGL-FRP-Accumulation.html#delay",
        "fct-type": "function",
        "title": "delay"
      },
      "index": {
        "description": "Delay piece of data for one frame",
        "hierarchy": "RSAGL FRP Accumulation",
        "module": "RSAGL.FRP.Accumulation",
        "name": "delay",
        "normalized": "a-\u003eFRP b c a a",
        "package": "rsagl-frp",
        "partial": "",
        "signature": "x-\u003eFRP e m x x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Accumulation.html#v:derivative",
      "description": {
        "fct-descr": "\u003cp\u003eTake the derivative of a value over time, by simple subtraction between frames.\n\u003c/p\u003e",
        "fct-module": "RSAGL.FRP.Accumulation",
        "fct-package": "rsagl-frp",
        "fct-signature": "FRP e m p (Rate v)",
        "fct-source": "src/RSAGL-FRP-Accumulation.html#derivative",
        "fct-type": "function",
        "title": "derivative"
      },
      "index": {
        "description": "Take the derivative of value over time by simple subtraction between frames",
        "hierarchy": "RSAGL FRP Accumulation",
        "module": "RSAGL.FRP.Accumulation",
        "name": "derivative",
        "normalized": "",
        "package": "rsagl-frp",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Accumulation.html#v:edge",
      "description": {
        "fct-descr": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e only during frames on which the input has changed, based on a user-specified equality predicate.\n The predicate function takes the most recent input as its first parameter.\n\u003c/p\u003e",
        "fct-module": "RSAGL.FRP.Accumulation",
        "fct-package": "rsagl-frp",
        "fct-signature": "EdgeDetectionMode -\u003e (x -\u003e x -\u003e Bool) -\u003e FRP e m x Bool",
        "fct-source": "src/RSAGL-FRP-Accumulation.html#edge",
        "fct-type": "function",
        "title": "edge"
      },
      "index": {
        "description": "Returns True only during frames on which the input has changed based on user-specified equality predicate The predicate function takes the most recent input as its first parameter",
        "hierarchy": "RSAGL FRP Accumulation",
        "module": "RSAGL.FRP.Accumulation",
        "name": "edge",
        "normalized": "EdgeDetectionMode-\u003e(a-\u003ea-\u003eBool)-\u003eFRP b c a Bool",
        "package": "rsagl-frp",
        "partial": "",
        "signature": "EdgeDetectionMode-\u003e(x-\u003ex-\u003eBool)-\u003eFRP e m x Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Accumulation.html#v:initial",
      "description": {
        "fct-descr": "\u003cp\u003eAnswer the first input that ever passes through a function.\n\u003c/p\u003e",
        "fct-module": "RSAGL.FRP.Accumulation",
        "fct-package": "rsagl-frp",
        "fct-signature": "FRP e m x x",
        "fct-source": "src/RSAGL-FRP-Accumulation.html#initial",
        "fct-type": "function",
        "title": "initial"
      },
      "index": {
        "description": "Answer the first input that ever passes through function",
        "hierarchy": "RSAGL FRP Accumulation",
        "module": "RSAGL.FRP.Accumulation",
        "name": "initial",
        "normalized": "",
        "package": "rsagl-frp",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Accumulation.html#v:integral",
      "description": {
        "fct-descr": "\u003cp\u003eTake the integral of a rate over time, using the trapezoidal rule.\n\u003c/p\u003e",
        "fct-module": "RSAGL.FRP.Accumulation",
        "fct-package": "rsagl-frp",
        "fct-signature": "p -\u003e FRP e m (Rate v) p",
        "fct-source": "src/RSAGL-FRP-Accumulation.html#integral",
        "fct-type": "function",
        "title": "integral"
      },
      "index": {
        "description": "Take the integral of rate over time using the trapezoidal rule",
        "hierarchy": "RSAGL FRP Accumulation",
        "module": "RSAGL.FRP.Accumulation",
        "name": "integral",
        "normalized": "a-\u003eFRP b c(Rate d)a",
        "package": "rsagl-frp",
        "partial": "",
        "signature": "p-\u003eFRP e m(Rate v)p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Accumulation.html#v:integralRK4",
      "description": {
        "fct-module": "RSAGL.FRP.Accumulation",
        "fct-package": "rsagl-frp",
        "fct-signature": "Frequency -\u003e (p -\u003e v -\u003e p) -\u003e p -\u003e FRP e m (Time -\u003e p -\u003e Rate v) p",
        "fct-source": "src/RSAGL-FRP-Accumulation.html#integralRK4",
        "fct-type": "function",
        "title": "integralRK4"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL FRP Accumulation",
        "module": "RSAGL.FRP.Accumulation",
        "name": "integralRK4",
        "normalized": "Frequency-\u003e(a-\u003eb-\u003ea)-\u003ea-\u003eFRP c d(Time-\u003ea-\u003eRate b)a",
        "package": "rsagl-frp",
        "partial": "RK",
        "signature": "Frequency-\u003e(p-\u003ev-\u003ep)-\u003ep-\u003eFRP e m(Time-\u003ep-\u003eRate v)p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Accumulation.html#v:integralRK4-39-",
      "description": {
        "fct-module": "RSAGL.FRP.Accumulation",
        "fct-package": "rsagl-frp",
        "fct-signature": "Frequency -\u003e (p -\u003e v -\u003e p) -\u003e (p, Rate v) -\u003e FRP e m (Time -\u003e p -\u003e Rate v -\u003e Acceleration v) (p, Rate v)",
        "fct-source": "src/RSAGL-FRP-Accumulation.html#integralRK4%27",
        "fct-type": "function",
        "title": "integralRK4'"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL FRP Accumulation",
        "module": "RSAGL.FRP.Accumulation",
        "name": "integralRK4'",
        "normalized": "Frequency-\u003e(a-\u003eb-\u003ea)-\u003e(a,Rate b)-\u003eFRP c d(Time-\u003ea-\u003eRate b-\u003eAcceleration b)(a,Rate b)",
        "package": "rsagl-frp",
        "partial": "RK",
        "signature": "Frequency-\u003e(p-\u003ev-\u003ep)-\u003e(p,Rate v)-\u003eFRP e m(Time-\u003ep-\u003eRate v-\u003eAcceleration v)(p,Rate v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Accumulation.html#v:sticky",
      "description": {
        "fct-descr": "\u003cp\u003eAnswer the most recent input that satisfies the predicate.\n Accepts an initial value, which need not itself satisfy the predicate.\n\u003c/p\u003e\u003cp\u003eThis can be a performance optimization, if it prevents unecessary evaluation of an input.\n\u003c/p\u003e",
        "fct-module": "RSAGL.FRP.Accumulation",
        "fct-package": "rsagl-frp",
        "fct-signature": "(x -\u003e Bool) -\u003e x -\u003e FRP e m x x",
        "fct-source": "src/RSAGL-FRP-Accumulation.html#sticky",
        "fct-type": "function",
        "title": "sticky"
      },
      "index": {
        "description": "Answer the most recent input that satisfies the predicate Accepts an initial value which need not itself satisfy the predicate This can be performance optimization if it prevents unecessary evaluation of an input",
        "hierarchy": "RSAGL FRP Accumulation",
        "module": "RSAGL.FRP.Accumulation",
        "name": "sticky",
        "normalized": "(a-\u003eBool)-\u003ea-\u003eFRP b c a a",
        "package": "rsagl-frp",
        "partial": "",
        "signature": "(x-\u003eBool)-\u003ex-\u003eFRP e m x x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Accumulation.html#v:summation",
      "description": {
        "fct-descr": "\u003cp\u003eSum some data frame-by-frame.\n\u003c/p\u003e",
        "fct-module": "RSAGL.FRP.Accumulation",
        "fct-package": "rsagl-frp",
        "fct-signature": "p -\u003e FRP e m v p",
        "fct-source": "src/RSAGL-FRP-Accumulation.html#summation",
        "fct-type": "function",
        "title": "summation"
      },
      "index": {
        "description": "Sum some data frame-by-frame",
        "hierarchy": "RSAGL FRP Accumulation",
        "module": "RSAGL.FRP.Accumulation",
        "name": "summation",
        "normalized": "a-\u003eFRP b c d a",
        "package": "rsagl-frp",
        "partial": "",
        "signature": "p-\u003eFRP e m v p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Accumulation.html#v:threadTime",
      "description": {
        "fct-descr": "\u003cp\u003eElapsed time since the instantiation of this switch or thread.  Reset when a thread switches.\n\u003c/p\u003e",
        "fct-module": "RSAGL.FRP.Accumulation",
        "fct-package": "rsagl-frp",
        "fct-signature": "FRP e m () Time",
        "fct-source": "src/RSAGL-FRP-Accumulation.html#threadTime",
        "fct-type": "function",
        "title": "threadTime"
      },
      "index": {
        "description": "Elapsed time since the instantiation of this switch or thread Reset when thread switches",
        "hierarchy": "RSAGL FRP Accumulation",
        "module": "RSAGL.FRP.Accumulation",
        "name": "threadTime",
        "normalized": "FRP a b()Time",
        "package": "rsagl-frp",
        "partial": "Time",
        "signature": "FRP e m()Time"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRP.html#",
      "description": {
        "fct-module": "RSAGL.FRP.FRP",
        "fct-package": "rsagl-frp",
        "fct-signature": "module",
        "fct-source": "src/RSAGL-FRP-FRP.html",
        "fct-type": "module",
        "title": "FRP"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL FRP FRP",
        "module": "RSAGL.FRP.FRP",
        "name": "FRP",
        "normalized": "",
        "package": "rsagl-frp",
        "partial": "FRP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRP.html#t:FRP",
      "description": {
        "fct-descr": "\u003cp\u003eA switchable automata with timewise numerical methods.\n\u003c/p\u003e",
        "fct-module": "RSAGL.FRP.FRP",
        "fct-package": "rsagl-frp",
        "fct-signature": "data",
        "fct-source": "src/RSAGL-FRP-FRP.html#FRP",
        "fct-type": "data",
        "title": "FRP"
      },
      "index": {
        "description": "switchable automata with timewise numerical methods",
        "hierarchy": "RSAGL FRP FRP",
        "module": "RSAGL.FRP.FRP",
        "name": "FRP",
        "normalized": "",
        "package": "rsagl-frp",
        "partial": "FRP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRP.html#t:FRPProgram",
      "description": {
        "fct-module": "RSAGL.FRP.FRP",
        "fct-package": "rsagl-frp",
        "fct-signature": "type",
        "fct-source": "src/RSAGL-FRP-FRP.html#FRPProgram",
        "fct-type": "type",
        "title": "FRPProgram"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL FRP FRP",
        "module": "RSAGL.FRP.FRP",
        "name": "FRPProgram",
        "normalized": "",
        "package": "rsagl-frp",
        "partial": "FRPProgram",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRP.html#t:StreamFunctor",
      "description": {
        "fct-descr": "\u003cp\u003eAn FRP-embedded functor.\n\u003c/p\u003e",
        "fct-module": "RSAGL.FRP.FRP",
        "fct-package": "rsagl-frp",
        "fct-signature": "class",
        "fct-source": "src/RSAGL-FRP-FRP.html#StreamFunctor",
        "fct-type": "class",
        "title": "StreamFunctor"
      },
      "index": {
        "description": "An FRP-embedded functor",
        "hierarchy": "RSAGL FRP FRP",
        "module": "RSAGL.FRP.FRP",
        "name": "StreamFunctor",
        "normalized": "",
        "package": "rsagl-frp",
        "partial": "Stream Functor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRP.html#t:ThreadIdentityRule",
      "description": {
        "fct-descr": "\u003cp\u003eShould a thread be allowed to spawn?  Typical values are \u003ccode\u003e\u003ca\u003enullaryThreadIdentity\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eforbidDuplicates\u003c/a\u003e\u003c/code\u003e.\n The predicate tests whether or not a particular thread is already running.\n\u003c/p\u003e",
        "fct-module": "RSAGL.FRP.FRP",
        "fct-package": "rsagl-frp",
        "fct-signature": "type",
        "fct-source": "src/RSAGL-FRP-FRP.html#ThreadIdentityRule",
        "fct-type": "type",
        "title": "ThreadIdentityRule"
      },
      "index": {
        "description": "Should thread be allowed to spawn Typical values are nullaryThreadIdentity forbidDuplicates The predicate tests whether or not particular thread is already running",
        "hierarchy": "RSAGL FRP FRP",
        "module": "RSAGL.FRP.FRP",
        "name": "ThreadIdentityRule",
        "normalized": "",
        "package": "rsagl-frp",
        "partial": "Thread Identity Rule",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRP.html#v:absoluteTime",
      "description": {
        "fct-descr": "\u003cp\u003eGet the current absolute time.\n\u003c/p\u003e",
        "fct-module": "RSAGL.FRP.FRP",
        "fct-package": "rsagl-frp",
        "fct-signature": "FRP e m () Time",
        "fct-source": "src/RSAGL-FRP-FRP.html#absoluteTime",
        "fct-type": "function",
        "title": "absoluteTime"
      },
      "index": {
        "description": "Get the current absolute time",
        "hierarchy": "RSAGL FRP FRP",
        "module": "RSAGL.FRP.FRP",
        "name": "absoluteTime",
        "normalized": "FRP a b()Time",
        "package": "rsagl-frp",
        "partial": "Time",
        "signature": "FRP e m()Time"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRP.html#v:accumulate",
      "description": {
        "fct-descr": "\u003cp\u003eFramewise accumulation of signals.\n The embedded function recieves the current input and the previous output.\n\u003c/p\u003e",
        "fct-module": "RSAGL.FRP.FRP",
        "fct-package": "rsagl-frp",
        "fct-signature": "p -\u003e (j -\u003e p -\u003e p) -\u003e FRP e m j p",
        "fct-source": "src/RSAGL-FRP-FRP.html#accumulate",
        "fct-type": "function",
        "title": "accumulate"
      },
      "index": {
        "description": "Framewise accumulation of signals The embedded function recieves the current input and the previous output",
        "hierarchy": "RSAGL FRP FRP",
        "module": "RSAGL.FRP.FRP",
        "name": "accumulate",
        "normalized": "a-\u003e(b-\u003ea-\u003ea)-\u003eFRP c d b a",
        "package": "rsagl-frp",
        "partial": "",
        "signature": "p-\u003e(j-\u003ep-\u003ep)-\u003eFRP e m j p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRP.html#v:allowAnonymous",
      "description": {
        "fct-descr": "\u003cp\u003eAllow unlimited duplicate \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e threads, while restricting all other threads according to the specified rule.\n\u003c/p\u003e",
        "fct-module": "RSAGL.FRP.FRP",
        "fct-package": "rsagl-frp",
        "fct-signature": "ThreadIdentityRule t -\u003e ThreadIdentityRule (Maybe t)",
        "fct-source": "src/RSAGL-FRP-FRP.html#allowAnonymous",
        "fct-type": "function",
        "title": "allowAnonymous"
      },
      "index": {
        "description": "Allow unlimited duplicate Nothing threads while restricting all other threads according to the specified rule",
        "hierarchy": "RSAGL FRP FRP",
        "module": "RSAGL.FRP.FRP",
        "name": "allowAnonymous",
        "normalized": "ThreadIdentityRule a-\u003eThreadIdentityRule(Maybe a)",
        "package": "rsagl-frp",
        "partial": "Anonymous",
        "signature": "ThreadIdentityRule t-\u003eThreadIdentityRule(Maybe t)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRP.html#v:deltaTime",
      "description": {
        "fct-descr": "\u003cp\u003eGet the change in time since the last update.\n\u003c/p\u003e",
        "fct-module": "RSAGL.FRP.FRP",
        "fct-package": "rsagl-frp",
        "fct-signature": "FRP e m () Time",
        "fct-source": "src/RSAGL-FRP-FRP.html#deltaTime",
        "fct-type": "function",
        "title": "deltaTime"
      },
      "index": {
        "description": "Get the change in time since the last update",
        "hierarchy": "RSAGL FRP FRP",
        "module": "RSAGL.FRP.FRP",
        "name": "deltaTime",
        "normalized": "FRP a b()Time",
        "package": "rsagl-frp",
        "partial": "Time",
        "signature": "FRP e m()Time"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRP.html#v:forbidDuplicates",
      "description": {
        "fct-descr": "\u003cp\u003eForbig duplicate threads by equality on the thread identity.\n\u003c/p\u003e",
        "fct-module": "RSAGL.FRP.FRP",
        "fct-package": "rsagl-frp",
        "fct-signature": "ThreadIdentityRule t",
        "fct-source": "src/RSAGL-FRP-FRP.html#forbidDuplicates",
        "fct-type": "function",
        "title": "forbidDuplicates"
      },
      "index": {
        "description": "Forbig duplicate threads by equality on the thread identity",
        "hierarchy": "RSAGL FRP FRP",
        "module": "RSAGL.FRP.FRP",
        "name": "forbidDuplicates",
        "normalized": "",
        "package": "rsagl-frp",
        "partial": "Duplicates",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRP.html#v:frp1Context",
      "description": {
        "fct-descr": "\u003cp\u003eEmbed a single-threaded, bracketed switch inside another running thread.\n\u003c/p\u003e",
        "fct-module": "RSAGL.FRP.FRP",
        "fct-package": "rsagl-frp",
        "fct-signature": "FRP e (FRP1Context j p m) j p -\u003e FRP e m j p",
        "fct-source": "src/RSAGL-FRP-FRP.html#frp1Context",
        "fct-type": "function",
        "title": "frp1Context"
      },
      "index": {
        "description": "Embed single-threaded bracketed switch inside another running thread",
        "hierarchy": "RSAGL FRP FRP",
        "module": "RSAGL.FRP.FRP",
        "name": "frp1Context",
        "normalized": "FRP a(FRP Context b c d)b c-\u003eFRP a d b c",
        "package": "rsagl-frp",
        "partial": "Context",
        "signature": "FRP e(FRP Context j p m)j p-\u003eFRP e m j p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRP.html#v:frpContext",
      "description": {
        "fct-descr": "\u003cp\u003eEmbed some threads inside another running thread, as \u003ccode\u003ethreadGroup\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "RSAGL.FRP.FRP",
        "fct-package": "rsagl-frp",
        "fct-signature": "ThreadIdentityRule t -\u003e [(t, FRP e (FRPContext t j p m) j p)] -\u003e FRP e m j [(t, p)]",
        "fct-source": "src/RSAGL-FRP-FRP.html#frpContext",
        "fct-type": "function",
        "title": "frpContext"
      },
      "index": {
        "description": "Embed some threads inside another running thread as threadGroup",
        "hierarchy": "RSAGL FRP FRP",
        "module": "RSAGL.FRP.FRP",
        "name": "frpContext",
        "normalized": "ThreadIdentityRule a-\u003e[(a,FRP b(FRPContext a c d e)c d)]-\u003eFRP b e c[(a,d)]",
        "package": "rsagl-frp",
        "partial": "Context",
        "signature": "ThreadIdentityRule t-\u003e[(t,FRP e(FRPContext t j p m)j p)]-\u003eFRP e m j[(t,p)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRP.html#v:frpFix",
      "description": {
        "fct-descr": "\u003cp\u003eValue recusion (see fix).\n\u003c/p\u003e",
        "fct-module": "RSAGL.FRP.FRP",
        "fct-package": "rsagl-frp",
        "fct-signature": "FRP e (FRP1Context (j, x) (p, x) m) (j, x) (p, x) -\u003e FRP e m j p",
        "fct-source": "src/RSAGL-FRP-FRP.html#frpFix",
        "fct-type": "function",
        "title": "frpFix"
      },
      "index": {
        "description": "Value recusion see fix",
        "hierarchy": "RSAGL FRP FRP",
        "module": "RSAGL.FRP.FRP",
        "name": "frpFix",
        "normalized": "FRP a(FRP Context(b,c)(d,c)e)(b,c)(d,c)-\u003eFRP a e b d",
        "package": "rsagl-frp",
        "partial": "Fix",
        "signature": "FRP e(FRP Context(j,x)(p,x)m)(j,x)(p,x)-\u003eFRP e m j p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRP.html#v:frpTest",
      "description": {
        "fct-module": "RSAGL.FRP.FRP",
        "fct-package": "rsagl-frp",
        "fct-signature": "(forall e.  [FRP e (FRPX () () i o) i o]) -\u003e [i] -\u003e IO [[o]]",
        "fct-source": "src/RSAGL-FRP-FRP.html#frpTest",
        "fct-type": "function",
        "title": "frpTest"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL FRP FRP",
        "module": "RSAGL.FRP.FRP",
        "name": "frpTest",
        "normalized": "(a b[FRP c(FRPX()()d e)d e])-\u003e[d]-\u003eIO[[e]]",
        "package": "rsagl-frp",
        "partial": "Test",
        "signature": "(forall e.[FRP e(FRPX()()i o)i o])-\u003e[i]-\u003eIO[[o]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRP.html#v:incoming",
      "description": {
        "fct-descr": "\u003cp\u003eReceive tagged information, with memoization.\n\u003c/p\u003e",
        "fct-module": "RSAGL.FRP.FRP",
        "fct-package": "rsagl-frp",
        "fct-signature": "FRP e m (Message j) j",
        "fct-source": "src/RSAGL-FRP-FRP.html#incoming",
        "fct-type": "function",
        "title": "incoming"
      },
      "index": {
        "description": "Receive tagged information with memoization",
        "hierarchy": "RSAGL FRP FRP",
        "module": "RSAGL.FRP.FRP",
        "name": "incoming",
        "normalized": "",
        "package": "rsagl-frp",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRP.html#v:ioAction",
      "description": {
        "fct-descr": "\u003cp\u003ePerform an arbitrary IO action.\n\u003c/p\u003e",
        "fct-module": "RSAGL.FRP.FRP",
        "fct-package": "rsagl-frp",
        "fct-signature": "(j -\u003e IO p) -\u003e FRP e m j p",
        "fct-source": "src/RSAGL-FRP-FRP.html#ioAction",
        "fct-type": "function",
        "title": "ioAction"
      },
      "index": {
        "description": "Perform an arbitrary IO action",
        "hierarchy": "RSAGL FRP FRP",
        "module": "RSAGL.FRP.FRP",
        "name": "ioAction",
        "normalized": "(a-\u003eIO b)-\u003eFRP c d a b",
        "package": "rsagl-frp",
        "partial": "Action",
        "signature": "(j-\u003eIO p)-\u003eFRP e m j p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRP.html#v:ioInit",
      "description": {
        "fct-descr": "\u003cp\u003ePerform an IO action when a stream is first initialized.\n\u003c/p\u003e",
        "fct-module": "RSAGL.FRP.FRP",
        "fct-package": "rsagl-frp",
        "fct-signature": "IO p -\u003e FRP e m () p",
        "fct-source": "src/RSAGL-FRP-FRP.html#ioInit",
        "fct-type": "function",
        "title": "ioInit"
      },
      "index": {
        "description": "Perform an IO action when stream is first initialized",
        "hierarchy": "RSAGL FRP FRP",
        "module": "RSAGL.FRP.FRP",
        "name": "ioInit",
        "normalized": "IO a-\u003eFRP b c()a",
        "package": "rsagl-frp",
        "partial": "Init",
        "signature": "IO p-\u003eFRP e m()p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRP.html#v:killThreadIf",
      "description": {
        "fct-descr": "\u003cp\u003eKill the current thread, only when the given parameter is true.\n\u003c/p\u003e",
        "fct-module": "RSAGL.FRP.FRP",
        "fct-package": "rsagl-frp",
        "fct-signature": "FRP e m Bool ()",
        "fct-source": "src/RSAGL-FRP-FRP.html#killThreadIf",
        "fct-type": "function",
        "title": "killThreadIf"
      },
      "index": {
        "description": "Kill the current thread only when the given parameter is true",
        "hierarchy": "RSAGL FRP FRP",
        "module": "RSAGL.FRP.FRP",
        "name": "killThreadIf",
        "normalized": "FRP a b Bool()",
        "package": "rsagl-frp",
        "partial": "Thread If",
        "signature": "FRP e m Bool()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRP.html#v:newFRP1Program",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a single-threaded FRPProgram.\n\u003c/p\u003e",
        "fct-module": "RSAGL.FRP.FRP",
        "fct-package": "rsagl-frp",
        "fct-signature": "(forall e.  FRP e (FRP1 s i o) i o) -\u003e IO (FRPProgram s i o)",
        "fct-source": "src/RSAGL-FRP-FRP.html#newFRP1Program",
        "fct-type": "function",
        "title": "newFRP1Program"
      },
      "index": {
        "description": "Construct single-threaded FRPProgram",
        "hierarchy": "RSAGL FRP FRP",
        "module": "RSAGL.FRP.FRP",
        "name": "newFRP1Program",
        "normalized": "(a b FRP c(FRP d e f)e f)-\u003eIO(FRPProgram d e f)",
        "package": "rsagl-frp",
        "partial": "FRP Program",
        "signature": "(forall e. FRP e(FRP s i o)i o)-\u003eIO(FRPProgram s i o)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRP.html#v:newFRPProgram",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a multi-threaded FRPProgram.\n\u003c/p\u003e",
        "fct-module": "RSAGL.FRP.FRP",
        "fct-package": "rsagl-frp",
        "fct-signature": "ThreadIdentityRule t -\u003e (forall e.  [(t, FRP e (FRPX t s i o) i o)]) -\u003e IO (FRPProgram s i [(t, o)])",
        "fct-source": "src/RSAGL-FRP-FRP.html#newFRPProgram",
        "fct-type": "function",
        "title": "newFRPProgram"
      },
      "index": {
        "description": "Construct multi-threaded FRPProgram",
        "hierarchy": "RSAGL FRP FRP",
        "module": "RSAGL.FRP.FRP",
        "name": "newFRPProgram",
        "normalized": "ThreadIdentityRule a-\u003e(b c[(a,FRP d(FRPX a e f g)f g)])-\u003eIO(FRPProgram e f[(a,g)])",
        "package": "rsagl-frp",
        "partial": "FRPProgram",
        "signature": "ThreadIdentityRule t-\u003e(forall e.[(t,FRP e(FRPX t s i o)i o)])-\u003eIO(FRPProgram s i[(t,o)])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRP.html#v:nullaryThreadIdentity",
      "description": {
        "fct-descr": "\u003cp\u003eAllow unlimited duplicate threads.\n\u003c/p\u003e",
        "fct-module": "RSAGL.FRP.FRP",
        "fct-package": "rsagl-frp",
        "fct-signature": "ThreadIdentityRule a",
        "fct-source": "src/RSAGL-FRP-FRP.html#nullaryThreadIdentity",
        "fct-type": "function",
        "title": "nullaryThreadIdentity"
      },
      "index": {
        "description": "Allow unlimited duplicate threads",
        "hierarchy": "RSAGL FRP FRP",
        "module": "RSAGL.FRP.FRP",
        "name": "nullaryThreadIdentity",
        "normalized": "",
        "package": "rsagl-frp",
        "partial": "Thread Identity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRP.html#v:outgoing",
      "description": {
        "fct-descr": "\u003cp\u003eSend tagged information.\n\u003c/p\u003e",
        "fct-module": "RSAGL.FRP.FRP",
        "fct-package": "rsagl-frp",
        "fct-signature": "FRP e m j (Message j)",
        "fct-source": "src/RSAGL-FRP-FRP.html#outgoing",
        "fct-type": "function",
        "title": "outgoing"
      },
      "index": {
        "description": "Send tagged information",
        "hierarchy": "RSAGL FRP FRP",
        "module": "RSAGL.FRP.FRP",
        "name": "outgoing",
        "normalized": "",
        "package": "rsagl-frp",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRP.html#v:outgoingBy",
      "description": {
        "fct-descr": "\u003cp\u003eSend tagged information.\n\u003c/p\u003e",
        "fct-module": "RSAGL.FRP.FRP",
        "fct-package": "rsagl-frp",
        "fct-signature": "(j -\u003e j -\u003e Bool)-\u003e FRP e m j (Message j)",
        "fct-type": "function",
        "title": "outgoingBy"
      },
      "index": {
        "description": "Send tagged information",
        "hierarchy": "RSAGL FRP FRP",
        "module": "RSAGL.FRP.FRP",
        "name": "outgoingBy",
        "normalized": "(a-\u003ea-\u003eBool)-\u003eFRP b c a(Message a)",
        "package": "rsagl-frp",
        "partial": "By",
        "signature": "(j-\u003ej-\u003eBool)-\u003eFRP e m j(Message j)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRP.html#v:randomA",
      "description": {
        "fct-descr": "\u003cp\u003eGet a bounded random value, as \u003ccode\u003e\u003ca\u003erandomRIO\u003c/a\u003e\u003c/code\u003e.  A new value is pulled for each\n frame of animation.\n\u003c/p\u003e",
        "fct-module": "RSAGL.FRP.FRP",
        "fct-package": "rsagl-frp",
        "fct-signature": "FRP e m (a, a) a",
        "fct-source": "src/RSAGL-FRP-FRP.html#randomA",
        "fct-type": "function",
        "title": "randomA"
      },
      "index": {
        "description": "Get bounded random value as randomRIO new value is pulled for each frame of animation",
        "hierarchy": "RSAGL FRP FRP",
        "module": "RSAGL.FRP.FRP",
        "name": "randomA",
        "normalized": "FRP a b(c,c)c",
        "package": "rsagl-frp",
        "partial": "",
        "signature": "FRP e m(a,a)a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRP.html#v:spawnThreads",
      "description": {
        "fct-descr": "\u003cp\u003eSpawn new threads once per frame.\n\u003c/p\u003e",
        "fct-module": "RSAGL.FRP.FRP",
        "fct-package": "rsagl-frp",
        "fct-signature": "FRP e m [(ThreadIDOf m, FRP e m (SwitchInputOf m) (SwitchOutputOf m))] ()",
        "fct-source": "src/RSAGL-FRP-FRP.html#spawnThreads",
        "fct-type": "function",
        "title": "spawnThreads"
      },
      "index": {
        "description": "Spawn new threads once per frame",
        "hierarchy": "RSAGL FRP FRP",
        "module": "RSAGL.FRP.FRP",
        "name": "spawnThreads",
        "normalized": "FRP a b[(ThreadIDOf b,FRP a b(SwitchInputOf b)(SwitchOutputOf b))]()",
        "package": "rsagl-frp",
        "partial": "Threads",
        "signature": "FRP e m[(ThreadIDOf m,FRP e m(SwitchInputOf m)(SwitchOutputOf m))]()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRP.html#v:streammap",
      "description": {
        "fct-module": "RSAGL.FRP.FRP",
        "fct-package": "rsagl-frp",
        "fct-signature": "(a -\u003e b) -\u003e FRP e m (s a) (s b)",
        "fct-source": "src/RSAGL-FRP-FRP.html#streammap",
        "fct-type": "method",
        "title": "streammap"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL FRP FRP",
        "module": "RSAGL.FRP.FRP",
        "name": "streammap",
        "normalized": "(a-\u003eb)-\u003eFRP c d(e a)(e b)",
        "package": "rsagl-frp",
        "partial": "",
        "signature": "(a-\u003eb)-\u003eFRP e m(s a)(s b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRP.html#v:streampure",
      "description": {
        "fct-module": "RSAGL.FRP.FRP",
        "fct-package": "rsagl-frp",
        "fct-signature": "a -\u003e FRP e m () (s a)",
        "fct-source": "src/RSAGL-FRP-FRP.html#streampure",
        "fct-type": "method",
        "title": "streampure"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL FRP FRP",
        "module": "RSAGL.FRP.FRP",
        "name": "streampure",
        "normalized": "a-\u003eFRP b c()(d a)",
        "package": "rsagl-frp",
        "partial": "",
        "signature": "a-\u003eFRP e m()(s a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRP.html#v:switchContinue",
      "description": {
        "fct-descr": "\u003cp\u003eWhenever a value is provided, change the presently running switch (or thread) to the specified new value,\n and execute that switch before continuing.  This destroys all state local to the currently running\n switch (or thread).\n This function acts as if the switch were performed at frame begin.\n\u003c/p\u003e",
        "fct-module": "RSAGL.FRP.FRP",
        "fct-package": "rsagl-frp",
        "fct-signature": "FRP e m (Maybe (FRP e m (SwitchInputOf m) (SwitchOutputOf m)), SwitchInputOf m) (SwitchInputOf m)",
        "fct-source": "src/RSAGL-FRP-FRP.html#switchContinue",
        "fct-type": "function",
        "title": "switchContinue"
      },
      "index": {
        "description": "Whenever value is provided change the presently running switch or thread to the specified new value and execute that switch before continuing This destroys all state local to the currently running switch or thread This function acts as if the switch were performed at frame begin",
        "hierarchy": "RSAGL FRP FRP",
        "module": "RSAGL.FRP.FRP",
        "name": "switchContinue",
        "normalized": "FRP a b(Maybe(FRP a b(SwitchInputOf b)(SwitchOutputOf b)),SwitchInputOf b)(SwitchInputOf b)",
        "package": "rsagl-frp",
        "partial": "Continue",
        "signature": "FRP e m(Maybe(FRP e m(SwitchInputOf m)(SwitchOutputOf m)),SwitchInputOf m)(SwitchInputOf m)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRP.html#v:switchTerminate",
      "description": {
        "fct-descr": "\u003cp\u003eWhenever a value is provided, change the presently running switch (or thread) to the specified new value,\n and execute that switch before continuing.  This destroys all state local to the currently running\n switch (or thread).\n This function acts as if the switch were performed at frame end.\n\u003c/p\u003e",
        "fct-module": "RSAGL.FRP.FRP",
        "fct-package": "rsagl-frp",
        "fct-signature": "FRP e m (Maybe (FRP e m (SwitchInputOf m) (SwitchOutputOf m)), SwitchOutputOf m) (SwitchOutputOf m)",
        "fct-source": "src/RSAGL-FRP-FRP.html#switchTerminate",
        "fct-type": "function",
        "title": "switchTerminate"
      },
      "index": {
        "description": "Whenever value is provided change the presently running switch or thread to the specified new value and execute that switch before continuing This destroys all state local to the currently running switch or thread This function acts as if the switch were performed at frame end",
        "hierarchy": "RSAGL FRP FRP",
        "module": "RSAGL.FRP.FRP",
        "name": "switchTerminate",
        "normalized": "FRP a b(Maybe(FRP a b(SwitchInputOf b)(SwitchOutputOf b)),SwitchOutputOf b)(SwitchOutputOf b)",
        "package": "rsagl-frp",
        "partial": "Terminate",
        "signature": "FRP e m(Maybe(FRP e m(SwitchInputOf m)(SwitchOutputOf m)),SwitchOutputOf m)(SwitchOutputOf m)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRP.html#v:threadIdentity",
      "description": {
        "fct-descr": "\u003cp\u003eGet the current thread's identity.\n\u003c/p\u003e",
        "fct-module": "RSAGL.FRP.FRP",
        "fct-package": "rsagl-frp",
        "fct-signature": "FRP e m () (ThreadIDOf m)",
        "fct-source": "src/RSAGL-FRP-FRP.html#threadIdentity",
        "fct-type": "function",
        "title": "threadIdentity"
      },
      "index": {
        "description": "Get the current thread identity",
        "hierarchy": "RSAGL FRP FRP",
        "module": "RSAGL.FRP.FRP",
        "name": "threadIdentity",
        "normalized": "FRP a b()(ThreadIDOf b)",
        "package": "rsagl-frp",
        "partial": "Identity",
        "signature": "FRP e m()(ThreadIDOf m)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRP.html#v:updateFRPProgram",
      "description": {
        "fct-descr": "\u003cp\u003eBring an FRPProgram up-to-date with the current time or a specific time.\n\u003c/p\u003e",
        "fct-module": "RSAGL.FRP.FRP",
        "fct-package": "rsagl-frp",
        "fct-signature": "Maybe Time -\u003e (i, s) -\u003e FRPProgram s i o -\u003e IO (o, s)",
        "fct-source": "src/RSAGL-FRP-FRP.html#updateFRPProgram",
        "fct-type": "function",
        "title": "updateFRPProgram"
      },
      "index": {
        "description": "Bring an FRPProgram up-to-date with the current time or specific time",
        "hierarchy": "RSAGL FRP FRP",
        "module": "RSAGL.FRP.FRP",
        "name": "updateFRPProgram",
        "normalized": "Maybe Time-\u003e(a,b)-\u003eFRPProgram b a c-\u003eIO(c,b)",
        "package": "rsagl-frp",
        "partial": "FRPProgram",
        "signature": "Maybe Time-\u003e(i,s)-\u003eFRPProgram s i o-\u003eIO(o,s)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRP.html#v:whenJust",
      "description": {
        "fct-descr": "\u003cp\u003eRun a computation only when the input is defined.\n\u003c/p\u003e",
        "fct-module": "RSAGL.FRP.FRP",
        "fct-package": "rsagl-frp",
        "fct-signature": "(forall x y.  FRP e (FRP1Context x y m) j p) -\u003e FRP e m (Maybe j) (Maybe p)",
        "fct-source": "src/RSAGL-FRP-FRP.html#whenJust",
        "fct-type": "function",
        "title": "whenJust"
      },
      "index": {
        "description": "Run computation only when the input is defined",
        "hierarchy": "RSAGL FRP FRP",
        "module": "RSAGL.FRP.FRP",
        "name": "whenJust",
        "normalized": "(a b c FRP d(FRP Context b e f)g h)-\u003eFRP d f(Maybe g)(Maybe h)",
        "package": "rsagl-frp",
        "partial": "Just",
        "signature": "(forall x y. FRP e(FRP Context x y m)j p)-\u003eFRP e m(Maybe j)(Maybe p)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRP.html#v:withThreadIdentity",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct an arrow from its thread identity.\n\u003c/p\u003e",
        "fct-module": "RSAGL.FRP.FRP",
        "fct-package": "rsagl-frp",
        "fct-signature": "(ThreadIDOf m -\u003e FRP e m j p) -\u003e FRP e m j p",
        "fct-source": "src/RSAGL-FRP-FRP.html#withThreadIdentity",
        "fct-type": "function",
        "title": "withThreadIdentity"
      },
      "index": {
        "description": "Construct an arrow from its thread identity",
        "hierarchy": "RSAGL FRP FRP",
        "module": "RSAGL.FRP.FRP",
        "name": "withThreadIdentity",
        "normalized": "(ThreadIDOf a-\u003eFRP b a c d)-\u003eFRP b a c d",
        "package": "rsagl-frp",
        "partial": "Thread Identity",
        "signature": "(ThreadIDOf m-\u003eFRP e m j p)-\u003eFRP e m j p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRPModel.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA model of the types used by an FRP program.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "RSAGL.FRP.FRPModel",
        "fct-package": "rsagl-frp",
        "fct-signature": "module",
        "fct-source": "src/RSAGL-FRP-FRPModel.html",
        "fct-type": "module",
        "title": "FRPModel"
      },
      "index": {
        "description": "model of the types used by an FRP program",
        "hierarchy": "RSAGL FRP FRPModel",
        "module": "RSAGL.FRP.FRPModel",
        "name": "FRPModel",
        "normalized": "",
        "package": "rsagl-frp",
        "partial": "FRPModel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRPModel.html#t:Capability",
      "description": {
        "fct-module": "RSAGL.FRP.FRPModel",
        "fct-package": "rsagl-frp",
        "fct-signature": "class",
        "fct-source": "src/RSAGL-FRP-FRPModel.html#Capability",
        "fct-type": "class",
        "title": "Capability"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL FRP FRPModel",
        "module": "RSAGL.FRP.FRPModel",
        "name": "Capability",
        "normalized": "",
        "package": "rsagl-frp",
        "partial": "Capability",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRPModel.html#t:Disabled",
      "description": {
        "fct-module": "RSAGL.FRP.FRPModel",
        "fct-package": "rsagl-frp",
        "fct-signature": "data",
        "fct-source": "src/RSAGL-FRP-FRPModel.html#Disabled",
        "fct-type": "data",
        "title": "Disabled"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL FRP FRPModel",
        "module": "RSAGL.FRP.FRPModel",
        "name": "Disabled",
        "normalized": "",
        "package": "rsagl-frp",
        "partial": "Disabled",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRPModel.html#t:Enabled",
      "description": {
        "fct-module": "RSAGL.FRP.FRPModel",
        "fct-package": "rsagl-frp",
        "fct-signature": "data",
        "fct-source": "src/RSAGL-FRP-FRPModel.html#Enabled",
        "fct-type": "data",
        "title": "Enabled"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL FRP FRPModel",
        "module": "RSAGL.FRP.FRPModel",
        "name": "Enabled",
        "normalized": "",
        "package": "rsagl-frp",
        "partial": "Enabled",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRPModel.html#t:FRP1",
      "description": {
        "fct-descr": "\u003cp\u003eA root-level single-threaded program.\n IO is enabled by default.\n\u003c/p\u003e",
        "fct-module": "RSAGL.FRP.FRPModel",
        "fct-package": "rsagl-frp",
        "fct-signature": "type",
        "fct-source": "src/RSAGL-FRP-FRPModel.html#FRP1",
        "fct-type": "type",
        "title": "FRP1"
      },
      "index": {
        "description": "root-level single-threaded program IO is enabled by default",
        "hierarchy": "RSAGL FRP FRPModel",
        "module": "RSAGL.FRP.FRPModel",
        "name": "FRP1",
        "normalized": "",
        "package": "rsagl-frp",
        "partial": "FRP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRPModel.html#t:FRP1Context",
      "description": {
        "fct-descr": "\u003cp\u003eA single-threaded embedded subprogram.\n\u003c/p\u003e",
        "fct-module": "RSAGL.FRP.FRPModel",
        "fct-package": "rsagl-frp",
        "fct-signature": "type",
        "fct-source": "src/RSAGL-FRP-FRPModel.html#FRP1Context",
        "fct-type": "type",
        "title": "FRP1Context"
      },
      "index": {
        "description": "single-threaded embedded subprogram",
        "hierarchy": "RSAGL FRP FRPModel",
        "module": "RSAGL.FRP.FRPModel",
        "name": "FRP1Context",
        "normalized": "",
        "package": "rsagl-frp",
        "partial": "FRP Context",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRPModel.html#t:FRPContext",
      "description": {
        "fct-descr": "\u003cp\u003eA multi-threaded embedded subprogram.\n\u003c/p\u003e",
        "fct-module": "RSAGL.FRP.FRPModel",
        "fct-package": "rsagl-frp",
        "fct-signature": "type",
        "fct-source": "src/RSAGL-FRP-FRPModel.html#FRPContext",
        "fct-type": "type",
        "title": "FRPContext"
      },
      "index": {
        "description": "multi-threaded embedded subprogram",
        "hierarchy": "RSAGL FRP FRPModel",
        "module": "RSAGL.FRP.FRPModel",
        "name": "FRPContext",
        "normalized": "",
        "package": "rsagl-frp",
        "partial": "FRPContext",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRPModel.html#t:FRPModel",
      "description": {
        "fct-module": "RSAGL.FRP.FRPModel",
        "fct-package": "rsagl-frp",
        "fct-signature": "class",
        "fct-source": "src/RSAGL-FRP-FRPModel.html#FRPModel",
        "fct-type": "class",
        "title": "FRPModel"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL FRP FRPModel",
        "module": "RSAGL.FRP.FRPModel",
        "name": "FRPModel",
        "normalized": "",
        "package": "rsagl-frp",
        "partial": "FRPModel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRPModel.html#t:FRPX",
      "description": {
        "fct-descr": "\u003cp\u003eA root-level multi-threaded program.\n IO is enabled by default.\n\u003c/p\u003e",
        "fct-module": "RSAGL.FRP.FRPModel",
        "fct-package": "rsagl-frp",
        "fct-signature": "type",
        "fct-source": "src/RSAGL-FRP-FRPModel.html#FRPX",
        "fct-type": "type",
        "title": "FRPX"
      },
      "index": {
        "description": "root-level multi-threaded program IO is enabled by default",
        "hierarchy": "RSAGL FRP FRPModel",
        "module": "RSAGL.FRP.FRPModel",
        "name": "FRPX",
        "normalized": "",
        "package": "rsagl-frp",
        "partial": "FRPX",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRPModel.html#t:IODisabled",
      "description": {
        "fct-descr": "\u003cp\u003eA subprogram with IO capabilities disabled.\n\u003c/p\u003e",
        "fct-module": "RSAGL.FRP.FRPModel",
        "fct-package": "rsagl-frp",
        "fct-signature": "type",
        "fct-source": "src/RSAGL-FRP-FRPModel.html#IODisabled",
        "fct-type": "type",
        "title": "IODisabled"
      },
      "index": {
        "description": "subprogram with IO capabilities disabled",
        "hierarchy": "RSAGL FRP FRPModel",
        "module": "RSAGL.FRP.FRPModel",
        "name": "IODisabled",
        "normalized": "",
        "package": "rsagl-frp",
        "partial": "IODisabled",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRPModel.html#t:SimpleSwitch",
      "description": {
        "fct-descr": "\u003cp\u003eA legacy configuration, IO capabilities enabled.\n\u003c/p\u003e",
        "fct-module": "RSAGL.FRP.FRPModel",
        "fct-package": "rsagl-frp",
        "fct-signature": "type",
        "fct-source": "src/RSAGL-FRP-FRPModel.html#SimpleSwitch",
        "fct-type": "type",
        "title": "SimpleSwitch"
      },
      "index": {
        "description": "legacy configuration IO capabilities enabled",
        "hierarchy": "RSAGL FRP FRPModel",
        "module": "RSAGL.FRP.FRPModel",
        "name": "SimpleSwitch",
        "normalized": "",
        "package": "rsagl-frp",
        "partial": "Simple Switch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRPModel.html#t:Switch",
      "description": {
        "fct-descr": "\u003cp\u003eThe FRPModel type that represents a switch.\n Consists of the following type variables.\n\u003c/p\u003e\u003cp\u003eNote: Don't pattern-match against this type directly, as it is a volatile\n interface.  Either use a type synonym, such as \u003ccode\u003e\u003ca\u003eSimpleSwitch\u003c/a\u003e\u003c/code\u003e, or match\n against the type functions in FRPModel.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e k - See, ThreadingOf.\n * t - See, ThreadIDOf.\n * s - See, StateOf.\n * i - See, SwitchInputOf.\n * o - See, SwitchOutputOf.\n * m - A variable that represents switch nesting.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "RSAGL.FRP.FRPModel",
        "fct-package": "rsagl-frp",
        "fct-signature": "data",
        "fct-source": "src/RSAGL-FRP-FRPModel.html#Switch",
        "fct-type": "data",
        "title": "Switch"
      },
      "index": {
        "description": "The FRPModel type that represents switch Consists of the following type variables Note Don pattern-match against this type directly as it is volatile interface Either use type synonym such as SimpleSwitch or match against the type functions in FRPModel See ThreadingOf See ThreadIDOf See StateOf See SwitchInputOf See SwitchOutputOf variable that represents switch nesting",
        "hierarchy": "RSAGL FRP FRPModel",
        "module": "RSAGL.FRP.FRPModel",
        "name": "Switch",
        "normalized": "",
        "package": "rsagl-frp",
        "partial": "Switch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FactoryArrow.html#",
      "description": {
        "fct-module": "RSAGL.FRP.FactoryArrow",
        "fct-package": "rsagl-frp",
        "fct-signature": "module",
        "fct-source": "src/RSAGL-FRP-FactoryArrow.html",
        "fct-type": "module",
        "title": "FactoryArrow"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL FRP FactoryArrow",
        "module": "RSAGL.FRP.FactoryArrow",
        "name": "FactoryArrow",
        "normalized": "",
        "package": "rsagl-frp",
        "partial": "Factory Arrow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FactoryArrow.html#t:FactoryArrow",
      "description": {
        "fct-descr": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eArrow\u003c/a\u003e\u003c/code\u003e that constructs an associated monadic computation.\n\u003c/p\u003e",
        "fct-module": "RSAGL.FRP.FactoryArrow",
        "fct-package": "rsagl-frp",
        "fct-signature": "newtype",
        "fct-source": "src/RSAGL-FRP-FactoryArrow.html#FactoryArrow",
        "fct-type": "newtype",
        "title": "FactoryArrow"
      },
      "index": {
        "description": "An Arrow that constructs an associated monadic computation",
        "hierarchy": "RSAGL FRP FactoryArrow",
        "module": "RSAGL.FRP.FactoryArrow",
        "name": "FactoryArrow",
        "normalized": "",
        "package": "rsagl-frp",
        "partial": "Factory Arrow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FactoryArrow.html#v:FactoryArrow",
      "description": {
        "fct-module": "RSAGL.FRP.FactoryArrow",
        "fct-package": "rsagl-frp",
        "fct-signature": "FactoryArrow",
        "fct-source": "src/RSAGL-FRP-FactoryArrow.html#FactoryArrow",
        "fct-type": "function",
        "title": "FactoryArrow"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL FRP FactoryArrow",
        "module": "RSAGL.FRP.FactoryArrow",
        "name": "FactoryArrow",
        "normalized": "",
        "package": "rsagl-frp",
        "partial": "Factory Arrow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FactoryArrow.html#v:runFactory",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "RSAGL.FRP.FactoryArrow",
        "fct-package": "rsagl-frp",
        "fct-signature": "m (Kleisli n i o)",
        "fct-source": "src/RSAGL-FRP-FactoryArrow.html#FactoryArrow",
        "fct-type": "function",
        "title": "runFactory"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL FRP FactoryArrow",
        "module": "RSAGL.FRP.FactoryArrow",
        "name": "runFactory",
        "normalized": "",
        "package": "rsagl-frp",
        "partial": "Factory",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Message.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA memoization scheme in which a piece of information is tagged with\n a unique identifier for its source.  Messages can be combined,\n and the tagging information indicates the specific combination.\n On the receiving end, we memoize the single most recent incoming\n message, and reuse it if the source information matches.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "RSAGL.FRP.Message",
        "fct-package": "rsagl-frp",
        "fct-signature": "module",
        "fct-source": "src/RSAGL-FRP-Message.html",
        "fct-type": "module",
        "title": "Message"
      },
      "index": {
        "description": "memoization scheme in which piece of information is tagged with unique identifier for its source Messages can be combined and the tagging information indicates the specific combination On the receiving end we memoize the single most recent incoming message and reuse it if the source information matches",
        "hierarchy": "RSAGL FRP Message",
        "module": "RSAGL.FRP.Message",
        "name": "Message",
        "normalized": "",
        "package": "rsagl-frp",
        "partial": "Message",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Message.html#t:Message",
      "description": {
        "fct-descr": "\u003cp\u003eA sourced packet of information.\n\u003c/p\u003e",
        "fct-module": "RSAGL.FRP.Message",
        "fct-package": "rsagl-frp",
        "fct-signature": "data",
        "fct-source": "src/RSAGL-FRP-Message.html#Message",
        "fct-type": "data",
        "title": "Message"
      },
      "index": {
        "description": "sourced packet of information",
        "hierarchy": "RSAGL FRP Message",
        "module": "RSAGL.FRP.Message",
        "name": "Message",
        "normalized": "",
        "package": "rsagl-frp",
        "partial": "Message",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Message.html#t:Receiver",
      "description": {
        "fct-descr": "\u003cp\u003eAn object that can memoize sequentially matching incoming messages.\n\u003c/p\u003e",
        "fct-module": "RSAGL.FRP.Message",
        "fct-package": "rsagl-frp",
        "fct-signature": "data",
        "fct-source": "src/RSAGL-FRP-Message.html#Receiver",
        "fct-type": "data",
        "title": "Receiver"
      },
      "index": {
        "description": "An object that can memoize sequentially matching incoming messages",
        "hierarchy": "RSAGL FRP Message",
        "module": "RSAGL.FRP.Message",
        "name": "Receiver",
        "normalized": "",
        "package": "rsagl-frp",
        "partial": "Receiver",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Message.html#t:Transmitter",
      "description": {
        "fct-descr": "\u003cp\u003eAn object that can memoize matching sequential outgoing messages.\n\u003c/p\u003e",
        "fct-module": "RSAGL.FRP.Message",
        "fct-package": "rsagl-frp",
        "fct-signature": "data",
        "fct-source": "src/RSAGL-FRP-Message.html#Transmitter",
        "fct-type": "data",
        "title": "Transmitter"
      },
      "index": {
        "description": "An object that can memoize matching sequential outgoing messages",
        "hierarchy": "RSAGL FRP Message",
        "module": "RSAGL.FRP.Message",
        "name": "Transmitter",
        "normalized": "",
        "package": "rsagl-frp",
        "partial": "Transmitter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Message.html#v:-60--60--42--62--62-",
      "description": {
        "fct-descr": "\u003cp\u003eBind two messages.\n\u003c/p\u003e",
        "fct-module": "RSAGL.FRP.Message",
        "fct-package": "rsagl-frp",
        "fct-signature": "Message (a -\u003e b) -\u003e Message a -\u003e Message b",
        "fct-source": "src/RSAGL-FRP-Message.html#%3C%3C%2A%3E%3E",
        "fct-type": "function",
        "title": "(\u003c\u003c*\u003e\u003e)"
      },
      "index": {
        "description": "Bind two messages",
        "hierarchy": "RSAGL FRP Message",
        "module": "RSAGL.FRP.Message",
        "name": "(\u003c\u003c*\u003e\u003e) \u003c\u003c*\u003e\u003e",
        "normalized": "Message(a-\u003eb)-\u003eMessage a-\u003eMessage b",
        "package": "rsagl-frp",
        "partial": "",
        "signature": "Message(a-\u003eb)-\u003eMessage a-\u003eMessage b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Message.html#v:consistency",
      "description": {
        "fct-descr": "\u003cp\u003eAn arbitrary ordering scheme on messages.\n\u003c/p\u003e",
        "fct-module": "RSAGL.FRP.Message",
        "fct-package": "rsagl-frp",
        "fct-signature": "Message a -\u003e Message b -\u003e Ordering",
        "fct-source": "src/RSAGL-FRP-Message.html#consistency",
        "fct-type": "function",
        "title": "consistency"
      },
      "index": {
        "description": "An arbitrary ordering scheme on messages",
        "hierarchy": "RSAGL FRP Message",
        "module": "RSAGL.FRP.Message",
        "name": "consistency",
        "normalized": "Message a-\u003eMessage b-\u003eOrdering",
        "package": "rsagl-frp",
        "partial": "",
        "signature": "Message a-\u003eMessage b-\u003eOrdering"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Message.html#v:consistent",
      "description": {
        "fct-descr": "\u003cp\u003eTwo messages are consistent if they arrive from identical sources.\n\u003c/p\u003e",
        "fct-module": "RSAGL.FRP.Message",
        "fct-package": "rsagl-frp",
        "fct-signature": "Message a -\u003e Message b -\u003e Bool",
        "fct-source": "src/RSAGL-FRP-Message.html#consistent",
        "fct-type": "function",
        "title": "consistent"
      },
      "index": {
        "description": "Two messages are consistent if they arrive from identical sources",
        "hierarchy": "RSAGL FRP Message",
        "module": "RSAGL.FRP.Message",
        "name": "consistent",
        "normalized": "Message a-\u003eMessage b-\u003eBool",
        "package": "rsagl-frp",
        "partial": "",
        "signature": "Message a-\u003eMessage b-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Message.html#v:newReceiver",
      "description": {
        "fct-module": "RSAGL.FRP.Message",
        "fct-package": "rsagl-frp",
        "fct-signature": "IO (Receiver a)",
        "fct-source": "src/RSAGL-FRP-Message.html#newReceiver",
        "fct-type": "function",
        "title": "newReceiver"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL FRP Message",
        "module": "RSAGL.FRP.Message",
        "name": "newReceiver",
        "normalized": "",
        "package": "rsagl-frp",
        "partial": "Receiver",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Message.html#v:newTransmitter",
      "description": {
        "fct-descr": "\u003cp\u003eEquivalent to \u003ccode\u003enewTransmitterBy (==)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "RSAGL.FRP.Message",
        "fct-package": "rsagl-frp",
        "fct-signature": "IO (Transmitter a)",
        "fct-source": "src/RSAGL-FRP-Message.html#newTransmitter",
        "fct-type": "function",
        "title": "newTransmitter"
      },
      "index": {
        "description": "Equivalent to newTransmitterBy",
        "hierarchy": "RSAGL FRP Message",
        "module": "RSAGL.FRP.Message",
        "name": "newTransmitter",
        "normalized": "",
        "package": "rsagl-frp",
        "partial": "Transmitter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Message.html#v:newTransmitterBy",
      "description": {
        "fct-module": "RSAGL.FRP.Message",
        "fct-package": "rsagl-frp",
        "fct-signature": "(a -\u003e a -\u003e Bool) -\u003e IO (Transmitter a)",
        "fct-source": "src/RSAGL-FRP-Message.html#newTransmitterBy",
        "fct-type": "function",
        "title": "newTransmitterBy"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL FRP Message",
        "module": "RSAGL.FRP.Message",
        "name": "newTransmitterBy",
        "normalized": "(a-\u003ea-\u003eBool)-\u003eIO(Transmitter a)",
        "package": "rsagl-frp",
        "partial": "Transmitter By",
        "signature": "(a-\u003ea-\u003eBool)-\u003eIO(Transmitter a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Message.html#v:peek",
      "description": {
        "fct-descr": "\u003cp\u003eExamine a message without memoization.\n\u003c/p\u003e",
        "fct-module": "RSAGL.FRP.Message",
        "fct-package": "rsagl-frp",
        "fct-signature": "Message a -\u003e a",
        "fct-source": "src/RSAGL-FRP-Message.html#peek",
        "fct-type": "function",
        "title": "peek"
      },
      "index": {
        "description": "Examine message without memoization",
        "hierarchy": "RSAGL FRP Message",
        "module": "RSAGL.FRP.Message",
        "name": "peek",
        "normalized": "Message a-\u003ea",
        "package": "rsagl-frp",
        "partial": "",
        "signature": "Message a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Message.html#v:receive",
      "description": {
        "fct-descr": "\u003cp\u003eMemoizes an incomming message stream.\n\u003c/p\u003e",
        "fct-module": "RSAGL.FRP.Message",
        "fct-package": "rsagl-frp",
        "fct-signature": "Receiver a -\u003e Message a -\u003e IO a",
        "fct-source": "src/RSAGL-FRP-Message.html#receive",
        "fct-type": "function",
        "title": "receive"
      },
      "index": {
        "description": "Memoizes an incomming message stream",
        "hierarchy": "RSAGL FRP Message",
        "module": "RSAGL.FRP.Message",
        "name": "receive",
        "normalized": "Receiver a-\u003eMessage a-\u003eIO a",
        "package": "rsagl-frp",
        "partial": "",
        "signature": "Receiver a-\u003eMessage a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Message.html#v:send",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a new message from a one-time source.\n\u003c/p\u003e",
        "fct-module": "RSAGL.FRP.Message",
        "fct-package": "rsagl-frp",
        "fct-signature": "a -\u003e IO (Message a)",
        "fct-source": "src/RSAGL-FRP-Message.html#send",
        "fct-type": "function",
        "title": "send"
      },
      "index": {
        "description": "Construct new message from one-time source",
        "hierarchy": "RSAGL FRP Message",
        "module": "RSAGL.FRP.Message",
        "name": "send",
        "normalized": "a-\u003eIO(Message a)",
        "package": "rsagl-frp",
        "partial": "",
        "signature": "a-\u003eIO(Message a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Message.html#v:transmit",
      "description": {
        "fct-descr": "\u003cp\u003eTags an outgoing stream for memoization.\n\u003c/p\u003e",
        "fct-module": "RSAGL.FRP.Message",
        "fct-package": "rsagl-frp",
        "fct-signature": "Transmitter a -\u003e a -\u003e IO (Message a)",
        "fct-source": "src/RSAGL-FRP-Message.html#transmit",
        "fct-type": "function",
        "title": "transmit"
      },
      "index": {
        "description": "Tags an outgoing stream for memoization",
        "hierarchy": "RSAGL FRP Message",
        "module": "RSAGL.FRP.Message",
        "name": "transmit",
        "normalized": "Transmitter a-\u003ea-\u003eIO(Message a)",
        "package": "rsagl-frp",
        "partial": "",
        "signature": "Transmitter a-\u003ea-\u003eIO(Message a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-RK4.html#",
      "description": {
        "fct-module": "RSAGL.FRP.RK4",
        "fct-package": "rsagl-frp",
        "fct-signature": "module",
        "fct-source": "src/RSAGL-FRP-RK4.html",
        "fct-type": "module",
        "title": "RK4"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL FRP RK4",
        "module": "RSAGL.FRP.RK4",
        "name": "RK4",
        "normalized": "",
        "package": "rsagl-frp",
        "partial": "RK",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-RK4.html#v:integrateRK4",
      "description": {
        "fct-descr": "\u003cp\u003eImplementation of RK4 that repeatedly time steps a system in which velocity\n is a function of absolute time and position.\n\u003c/p\u003e",
        "fct-module": "RSAGL.FRP.RK4",
        "fct-package": "rsagl-frp",
        "fct-signature": "(p -\u003e v -\u003e p)-\u003e (Time -\u003e p -\u003e Rate v)-\u003e p-\u003e Time-\u003e Time-\u003e Integer-\u003e p",
        "fct-type": "function",
        "title": "integrateRK4"
      },
      "index": {
        "description": "Implementation of RK4 that repeatedly time steps system in which velocity is function of absolute time and position",
        "hierarchy": "RSAGL FRP RK4",
        "module": "RSAGL.FRP.RK4",
        "name": "integrateRK4",
        "normalized": "(a-\u003eb-\u003ea)-\u003e(Time-\u003ea-\u003eRate b)-\u003ea-\u003eTime-\u003eTime-\u003eInteger-\u003ea",
        "package": "rsagl-frp",
        "partial": "RK",
        "signature": "(p-\u003ev-\u003ep)-\u003e(Time-\u003ep-\u003eRate v)-\u003ep-\u003eTime-\u003eTime-\u003eInteger-\u003ep"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-RK4.html#v:integrateRK4-39-",
      "description": {
        "fct-descr": "\u003cp\u003eImplementation of RK4 that repeatedly time steps a system in which\n acceleration is a function of absolute time, position and velocity.\n\u003c/p\u003e",
        "fct-module": "RSAGL.FRP.RK4",
        "fct-package": "rsagl-frp",
        "fct-signature": "(p -\u003e v -\u003e p)-\u003e (Time -\u003e p -\u003e Rate v -\u003e Acceleration v)-\u003e (p, Rate v)-\u003e Time-\u003e Time-\u003e Integer-\u003e (p, Rate v)",
        "fct-type": "function",
        "title": "integrateRK4'"
      },
      "index": {
        "description": "Implementation of RK4 that repeatedly time steps system in which acceleration is function of absolute time position and velocity",
        "hierarchy": "RSAGL FRP RK4",
        "module": "RSAGL.FRP.RK4",
        "name": "integrateRK4'",
        "normalized": "(a-\u003eb-\u003ea)-\u003e(Time-\u003ea-\u003eRate b-\u003eAcceleration b)-\u003e(a,Rate b)-\u003eTime-\u003eTime-\u003eInteger-\u003e(a,Rate b)",
        "package": "rsagl-frp",
        "partial": "RK",
        "signature": "(p-\u003ev-\u003ep)-\u003e(Time-\u003ep-\u003eRate v-\u003eAcceleration v)-\u003e(p,Rate v)-\u003eTime-\u003eTime-\u003eInteger-\u003e(p,Rate v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-RK4.html#v:rk4",
      "description": {
        "fct-descr": "\u003cp\u003eImplementation of RK4 that time steps a system in which velocity is\n a function of absolute time and position.\n\u003c/p\u003e",
        "fct-module": "RSAGL.FRP.RK4",
        "fct-package": "rsagl-frp",
        "fct-signature": "(p -\u003e v -\u003e p)-\u003e (Time -\u003e p -\u003e Rate v)-\u003e p-\u003e Time-\u003e Time-\u003e p",
        "fct-type": "function",
        "title": "rk4"
      },
      "index": {
        "description": "Implementation of RK4 that time steps system in which velocity is function of absolute time and position",
        "hierarchy": "RSAGL FRP RK4",
        "module": "RSAGL.FRP.RK4",
        "name": "rk4",
        "normalized": "(a-\u003eb-\u003ea)-\u003e(Time-\u003ea-\u003eRate b)-\u003ea-\u003eTime-\u003eTime-\u003ea",
        "package": "rsagl-frp",
        "partial": "",
        "signature": "(p-\u003ev-\u003ep)-\u003e(Time-\u003ep-\u003eRate v)-\u003ep-\u003eTime-\u003eTime-\u003ep"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-RK4.html#v:rk4-39-",
      "description": {
        "fct-descr": "\u003cp\u003eImplementation of RK4 that time steps a system in which acceleration\n is a function of absolute time, position and velocity.\n\u003c/p\u003e",
        "fct-module": "RSAGL.FRP.RK4",
        "fct-package": "rsagl-frp",
        "fct-signature": "(p -\u003e v -\u003e p)-\u003e (Time -\u003e p -\u003e Rate v -\u003e Acceleration v)-\u003e (p, Rate v)-\u003e Time-\u003e Time-\u003e (p, Rate v)",
        "fct-type": "function",
        "title": "rk4'"
      },
      "index": {
        "description": "Implementation of RK4 that time steps system in which acceleration is function of absolute time position and velocity",
        "hierarchy": "RSAGL FRP RK4",
        "module": "RSAGL.FRP.RK4",
        "name": "rk4'",
        "normalized": "(a-\u003eb-\u003ea)-\u003e(Time-\u003ea-\u003eRate b-\u003eAcceleration b)-\u003e(a,Rate b)-\u003eTime-\u003eTime-\u003e(a,Rate b)",
        "package": "rsagl-frp",
        "partial": "",
        "signature": "(p-\u003ev-\u003ep)-\u003e(Time-\u003ep-\u003eRate v-\u003eAcceleration v)-\u003e(p,Rate v)-\u003eTime-\u003eTime-\u003e(p,Rate v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-RecombinantState.html#",
      "description": {
        "fct-module": "RSAGL.FRP.RecombinantState",
        "fct-package": "rsagl-frp",
        "fct-signature": "module",
        "fct-source": "src/RSAGL-FRP-RecombinantState.html",
        "fct-type": "module",
        "title": "RecombinantState"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL FRP RecombinantState",
        "module": "RSAGL.FRP.RecombinantState",
        "name": "RecombinantState",
        "normalized": "",
        "package": "rsagl-frp",
        "partial": "Recombinant State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-RecombinantState.html#t:RecombinantState",
      "description": {
        "fct-descr": "\u003cp\u003eDescribes concurrency-aware state.  The goal is to take some stateful\n information, clone it into a variety of concurrent threads, and then\n recombine using the (possibly modified) state.\n\u003c/p\u003e",
        "fct-module": "RSAGL.FRP.RecombinantState",
        "fct-package": "rsagl-frp",
        "fct-signature": "class",
        "fct-source": "src/RSAGL-FRP-RecombinantState.html#RecombinantState",
        "fct-type": "class",
        "title": "RecombinantState"
      },
      "index": {
        "description": "Describes concurrency-aware state The goal is to take some stateful information clone it into variety of concurrent threads and then recombine using the possibly modified state",
        "hierarchy": "RSAGL FRP RecombinantState",
        "module": "RSAGL.FRP.RecombinantState",
        "name": "RecombinantState",
        "normalized": "",
        "package": "rsagl-frp",
        "partial": "Recombinant State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-RecombinantState.html#v:clone",
      "description": {
        "fct-descr": "\u003cp\u003eA new version of the state, which should carry the context,\n but not the content, of the original.  I.e., the original\n content will be re-merged during the recombination phase.\n\u003c/p\u003e",
        "fct-module": "RSAGL.FRP.RecombinantState",
        "fct-package": "rsagl-frp",
        "fct-signature": "s -\u003e SubState s",
        "fct-source": "src/RSAGL-FRP-RecombinantState.html#clone",
        "fct-type": "method",
        "title": "clone"
      },
      "index": {
        "description": "new version of the state which should carry the context but not the content of the original I.e the original content will be re-merged during the recombination phase",
        "hierarchy": "RSAGL FRP RecombinantState",
        "module": "RSAGL.FRP.RecombinantState",
        "name": "clone",
        "normalized": "a-\u003eSubState a",
        "package": "rsagl-frp",
        "partial": "",
        "signature": "s-\u003eSubState s"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-RecombinantState.html#v:recombine",
      "description": {
        "fct-descr": "\u003cp\u003eRecombine the modified, cloned information with the\n original state.\n\u003c/p\u003e",
        "fct-module": "RSAGL.FRP.RecombinantState",
        "fct-package": "rsagl-frp",
        "fct-signature": "s -\u003e SubState s -\u003e s",
        "fct-source": "src/RSAGL-FRP-RecombinantState.html#recombine",
        "fct-type": "method",
        "title": "recombine"
      },
      "index": {
        "description": "Recombine the modified cloned information with the original state",
        "hierarchy": "RSAGL FRP RecombinantState",
        "module": "RSAGL.FRP.RecombinantState",
        "name": "recombine",
        "normalized": "a-\u003eSubState a-\u003ea",
        "package": "rsagl-frp",
        "partial": "",
        "signature": "s-\u003eSubState s-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Time.html#",
      "description": {
        "fct-module": "RSAGL.FRP.Time",
        "fct-package": "rsagl-frp",
        "fct-signature": "module",
        "fct-source": "src/RSAGL-FRP-Time.html",
        "fct-type": "module",
        "title": "Time"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL FRP Time",
        "module": "RSAGL.FRP.Time",
        "name": "Time",
        "normalized": "",
        "package": "rsagl-frp",
        "partial": "Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Time.html#t:Acceleration",
      "description": {
        "fct-module": "RSAGL.FRP.Time",
        "fct-package": "rsagl-frp",
        "fct-signature": "type",
        "fct-source": "src/RSAGL-FRP-Time.html#Acceleration",
        "fct-type": "type",
        "title": "Acceleration"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL FRP Time",
        "module": "RSAGL.FRP.Time",
        "name": "Acceleration",
        "normalized": "",
        "package": "rsagl-frp",
        "partial": "Acceleration",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Time.html#t:Frequency",
      "description": {
        "fct-module": "RSAGL.FRP.Time",
        "fct-package": "rsagl-frp",
        "fct-signature": "type",
        "fct-source": "src/RSAGL-FRP-Time.html#Frequency",
        "fct-type": "type",
        "title": "Frequency"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL FRP Time",
        "module": "RSAGL.FRP.Time",
        "name": "Frequency",
        "normalized": "",
        "package": "rsagl-frp",
        "partial": "Frequency",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Time.html#t:Rate",
      "description": {
        "fct-module": "RSAGL.FRP.Time",
        "fct-package": "rsagl-frp",
        "fct-signature": "data",
        "fct-source": "src/RSAGL-FRP-Time.html#Rate",
        "fct-type": "data",
        "title": "Rate"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL FRP Time",
        "module": "RSAGL.FRP.Time",
        "name": "Rate",
        "normalized": "",
        "package": "rsagl-frp",
        "partial": "Rate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Time.html#t:Time",
      "description": {
        "fct-module": "RSAGL.FRP.Time",
        "fct-package": "rsagl-frp",
        "fct-signature": "data",
        "fct-source": "src/RSAGL-FRP-Time.html#Time",
        "fct-type": "data",
        "title": "Time"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL FRP Time",
        "module": "RSAGL.FRP.Time",
        "name": "Time",
        "normalized": "",
        "package": "rsagl-frp",
        "partial": "Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Time.html#v:cyclical",
      "description": {
        "fct-module": "RSAGL.FRP.Time",
        "fct-package": "rsagl-frp",
        "fct-signature": "Time -\u003e Time -\u003e Time",
        "fct-source": "src/RSAGL-FRP-Time.html#cyclical",
        "fct-type": "function",
        "title": "cyclical"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL FRP Time",
        "module": "RSAGL.FRP.Time",
        "name": "cyclical",
        "normalized": "Time-\u003eTime-\u003eTime",
        "package": "rsagl-frp",
        "partial": "",
        "signature": "Time-\u003eTime-\u003eTime"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Time.html#v:cyclical-39-",
      "description": {
        "fct-module": "RSAGL.FRP.Time",
        "fct-package": "rsagl-frp",
        "fct-signature": "Time -\u003e Time -\u003e RSdouble",
        "fct-source": "src/RSAGL-FRP-Time.html#cyclical%27",
        "fct-type": "function",
        "title": "cyclical'"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL FRP Time",
        "module": "RSAGL.FRP.Time",
        "name": "cyclical'",
        "normalized": "Time-\u003eTime-\u003eRSdouble",
        "package": "rsagl-frp",
        "partial": "",
        "signature": "Time-\u003eTime-\u003eRSdouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Time.html#v:day",
      "description": {
        "fct-module": "RSAGL.FRP.Time",
        "fct-package": "rsagl-frp",
        "fct-signature": "Time",
        "fct-source": "src/RSAGL-FRP-Time.html#day",
        "fct-type": "function",
        "title": "day"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL FRP Time",
        "module": "RSAGL.FRP.Time",
        "name": "day",
        "normalized": "",
        "package": "rsagl-frp",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Time.html#v:fps120",
      "description": {
        "fct-module": "RSAGL.FRP.Time",
        "fct-package": "rsagl-frp",
        "fct-signature": "Frequency",
        "fct-source": "src/RSAGL-FRP-Time.html#fps120",
        "fct-type": "function",
        "title": "fps120"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL FRP Time",
        "module": "RSAGL.FRP.Time",
        "name": "fps120",
        "normalized": "",
        "package": "rsagl-frp",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Time.html#v:fps30",
      "description": {
        "fct-module": "RSAGL.FRP.Time",
        "fct-package": "rsagl-frp",
        "fct-signature": "Frequency",
        "fct-source": "src/RSAGL-FRP-Time.html#fps30",
        "fct-type": "function",
        "title": "fps30"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL FRP Time",
        "module": "RSAGL.FRP.Time",
        "name": "fps30",
        "normalized": "",
        "package": "rsagl-frp",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Time.html#v:fps60",
      "description": {
        "fct-module": "RSAGL.FRP.Time",
        "fct-package": "rsagl-frp",
        "fct-signature": "Frequency",
        "fct-source": "src/RSAGL-FRP-Time.html#fps60",
        "fct-type": "function",
        "title": "fps60"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL FRP Time",
        "module": "RSAGL.FRP.Time",
        "name": "fps60",
        "normalized": "",
        "package": "rsagl-frp",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Time.html#v:fromSeconds",
      "description": {
        "fct-module": "RSAGL.FRP.Time",
        "fct-package": "rsagl-frp",
        "fct-signature": "RSdouble -\u003e Time",
        "fct-source": "src/RSAGL-FRP-Time.html#fromSeconds",
        "fct-type": "function",
        "title": "fromSeconds"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL FRP Time",
        "module": "RSAGL.FRP.Time",
        "name": "fromSeconds",
        "normalized": "RSdouble-\u003eTime",
        "package": "rsagl-frp",
        "partial": "Seconds",
        "signature": "RSdouble-\u003eTime"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Time.html#v:getTime",
      "description": {
        "fct-module": "RSAGL.FRP.Time",
        "fct-package": "rsagl-frp",
        "fct-signature": "IO Time",
        "fct-source": "src/RSAGL-FRP-Time.html#getTime",
        "fct-type": "function",
        "title": "getTime"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL FRP Time",
        "module": "RSAGL.FRP.Time",
        "name": "getTime",
        "normalized": "",
        "package": "rsagl-frp",
        "partial": "Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Time.html#v:interval",
      "description": {
        "fct-module": "RSAGL.FRP.Time",
        "fct-package": "rsagl-frp",
        "fct-signature": "Frequency -\u003e Time",
        "fct-source": "src/RSAGL-FRP-Time.html#interval",
        "fct-type": "function",
        "title": "interval"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL FRP Time",
        "module": "RSAGL.FRP.Time",
        "name": "interval",
        "normalized": "Frequency-\u003eTime",
        "package": "rsagl-frp",
        "partial": "",
        "signature": "Frequency-\u003eTime"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Time.html#v:minute",
      "description": {
        "fct-module": "RSAGL.FRP.Time",
        "fct-package": "rsagl-frp",
        "fct-signature": "Time",
        "fct-source": "src/RSAGL-FRP-Time.html#minute",
        "fct-type": "function",
        "title": "minute"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL FRP Time",
        "module": "RSAGL.FRP.Time",
        "name": "minute",
        "normalized": "",
        "package": "rsagl-frp",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Time.html#v:month",
      "description": {
        "fct-module": "RSAGL.FRP.Time",
        "fct-package": "rsagl-frp",
        "fct-signature": "Time",
        "fct-source": "src/RSAGL-FRP-Time.html#month",
        "fct-type": "function",
        "title": "month"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL FRP Time",
        "module": "RSAGL.FRP.Time",
        "name": "month",
        "normalized": "",
        "package": "rsagl-frp",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Time.html#v:over",
      "description": {
        "fct-module": "RSAGL.FRP.Time",
        "fct-package": "rsagl-frp",
        "fct-signature": "Rate a -\u003e Time -\u003e a",
        "fct-source": "src/RSAGL-FRP-Time.html#over",
        "fct-type": "function",
        "title": "over"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL FRP Time",
        "module": "RSAGL.FRP.Time",
        "name": "over",
        "normalized": "Rate a-\u003eTime-\u003ea",
        "package": "rsagl-frp",
        "partial": "",
        "signature": "Rate a-\u003eTime-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Time.html#v:pack",
      "description": {
        "fct-module": "RSAGL.FRP.Time",
        "fct-package": "rsagl-frp",
        "fct-signature": "[Rate a] -\u003e Rate [a]",
        "fct-source": "src/RSAGL-FRP-Time.html#pack",
        "fct-type": "function",
        "title": "pack"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL FRP Time",
        "module": "RSAGL.FRP.Time",
        "name": "pack",
        "normalized": "[Rate a]-\u003eRate[a]",
        "package": "rsagl-frp",
        "partial": "",
        "signature": "[Rate a]-\u003eRate[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Time.html#v:packa",
      "description": {
        "fct-module": "RSAGL.FRP.Time",
        "fct-package": "rsagl-frp",
        "fct-signature": "[Acceleration a] -\u003e Acceleration [a]",
        "fct-source": "src/RSAGL-FRP-Time.html#packa",
        "fct-type": "function",
        "title": "packa"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL FRP Time",
        "module": "RSAGL.FRP.Time",
        "name": "packa",
        "normalized": "[Acceleration a]-\u003eAcceleration[a]",
        "package": "rsagl-frp",
        "partial": "",
        "signature": "[Acceleration a]-\u003eAcceleration[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Time.html#v:per",
      "description": {
        "fct-module": "RSAGL.FRP.Time",
        "fct-package": "rsagl-frp",
        "fct-signature": "a -\u003e Time -\u003e Rate a",
        "fct-source": "src/RSAGL-FRP-Time.html#per",
        "fct-type": "function",
        "title": "per"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL FRP Time",
        "module": "RSAGL.FRP.Time",
        "name": "per",
        "normalized": "a-\u003eTime-\u003eRate a",
        "package": "rsagl-frp",
        "partial": "",
        "signature": "a-\u003eTime-\u003eRate a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Time.html#v:perSecond",
      "description": {
        "fct-module": "RSAGL.FRP.Time",
        "fct-package": "rsagl-frp",
        "fct-signature": "a -\u003e Rate a",
        "fct-source": "src/RSAGL-FRP-Time.html#perSecond",
        "fct-type": "function",
        "title": "perSecond"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL FRP Time",
        "module": "RSAGL.FRP.Time",
        "name": "perSecond",
        "normalized": "a-\u003eRate a",
        "package": "rsagl-frp",
        "partial": "Second",
        "signature": "a-\u003eRate a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Time.html#v:rate",
      "description": {
        "fct-module": "RSAGL.FRP.Time",
        "fct-package": "rsagl-frp",
        "fct-signature": "(a, Time) -\u003e (a, Time) -\u003e Rate a",
        "fct-source": "src/RSAGL-FRP-Time.html#rate",
        "fct-type": "function",
        "title": "rate"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL FRP Time",
        "module": "RSAGL.FRP.Time",
        "name": "rate",
        "normalized": "(a,Time)-\u003e(a,Time)-\u003eRate a",
        "package": "rsagl-frp",
        "partial": "",
        "signature": "(a,Time)-\u003e(a,Time)-\u003eRate a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Time.html#v:time",
      "description": {
        "fct-module": "RSAGL.FRP.Time",
        "fct-package": "rsagl-frp",
        "fct-signature": "RSdouble -\u003e Rate RSdouble -\u003e Time",
        "fct-source": "src/RSAGL-FRP-Time.html#time",
        "fct-type": "function",
        "title": "time"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL FRP Time",
        "module": "RSAGL.FRP.Time",
        "name": "time",
        "normalized": "RSdouble-\u003eRate RSdouble-\u003eTime",
        "package": "rsagl-frp",
        "partial": "",
        "signature": "RSdouble-\u003eRate RSdouble-\u003eTime"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Time.html#v:toSeconds",
      "description": {
        "fct-module": "RSAGL.FRP.Time",
        "fct-package": "rsagl-frp",
        "fct-signature": "Time -\u003e RSdouble",
        "fct-source": "src/RSAGL-FRP-Time.html#toSeconds",
        "fct-type": "function",
        "title": "toSeconds"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL FRP Time",
        "module": "RSAGL.FRP.Time",
        "name": "toSeconds",
        "normalized": "Time-\u003eRSdouble",
        "package": "rsagl-frp",
        "partial": "Seconds",
        "signature": "Time-\u003eRSdouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Time.html#v:unpack",
      "description": {
        "fct-module": "RSAGL.FRP.Time",
        "fct-package": "rsagl-frp",
        "fct-signature": "Rate [a] -\u003e [Rate a]",
        "fct-source": "src/RSAGL-FRP-Time.html#unpack",
        "fct-type": "function",
        "title": "unpack"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL FRP Time",
        "module": "RSAGL.FRP.Time",
        "name": "unpack",
        "normalized": "Rate[a]-\u003e[Rate a]",
        "package": "rsagl-frp",
        "partial": "",
        "signature": "Rate[a]-\u003e[Rate a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Time.html#v:unpacka",
      "description": {
        "fct-module": "RSAGL.FRP.Time",
        "fct-package": "rsagl-frp",
        "fct-signature": "Acceleration [a] -\u003e [Acceleration a]",
        "fct-source": "src/RSAGL-FRP-Time.html#unpacka",
        "fct-type": "function",
        "title": "unpacka"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL FRP Time",
        "module": "RSAGL.FRP.Time",
        "name": "unpacka",
        "normalized": "Acceleration[a]-\u003e[Acceleration a]",
        "package": "rsagl-frp",
        "partial": "",
        "signature": "Acceleration[a]-\u003e[Acceleration a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Time.html#v:withTime",
      "description": {
        "fct-module": "RSAGL.FRP.Time",
        "fct-package": "rsagl-frp",
        "fct-signature": "Time -\u003e (a -\u003e b) -\u003e Rate a -\u003e Rate b",
        "fct-source": "src/RSAGL-FRP-Time.html#withTime",
        "fct-type": "function",
        "title": "withTime"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL FRP Time",
        "module": "RSAGL.FRP.Time",
        "name": "withTime",
        "normalized": "Time-\u003e(a-\u003eb)-\u003eRate a-\u003eRate b",
        "package": "rsagl-frp",
        "partial": "Time",
        "signature": "Time-\u003e(a-\u003eb)-\u003eRate a-\u003eRate b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Time.html#v:year",
      "description": {
        "fct-module": "RSAGL.FRP.Time",
        "fct-package": "rsagl-frp",
        "fct-signature": "Time",
        "fct-source": "src/RSAGL-FRP-Time.html#year",
        "fct-type": "function",
        "title": "year"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL FRP Time",
        "module": "RSAGL.FRP.Time",
        "name": "year",
        "normalized": "",
        "package": "rsagl-frp",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP.html#",
      "description": {
        "fct-module": "RSAGL.FRP",
        "fct-package": "rsagl-frp",
        "fct-signature": "module",
        "fct-source": "src/RSAGL-FRP.html",
        "fct-type": "module",
        "title": "FRP"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL FRP",
        "module": "RSAGL.FRP",
        "name": "FRP",
        "normalized": "",
        "package": "rsagl-frp",
        "partial": "FRP",
        "signature": ""
      }
    }
  }
]