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
        "word": "rsagl-frp"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.FRP.Accumulation",
          "name": "Accumulation",
          "package": "rsagl-frp",
          "source": "src/RSAGL-FRP-Accumulation.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "RSAGL FRP Accumulation",
          "module": "RSAGL.FRP.Accumulation",
          "name": "Accumulation",
          "package": "rsagl-frp",
          "partial": "Accumulation",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Accumulation.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe edge detection mode.  If \u003ccode\u003e\u003ca\u003eDiscrete\u003c/a\u003e\u003c/code\u003e, detect edge between subsequent frames only.\n If \u003ccode\u003e\u003ca\u003eFuzzy\u003c/a\u003e\u003c/code\u003e detect edge since the most recent previous detected edge.\n If \u003ccode\u003eHashedDiscrete\u003c/code\u003e, the comparison function is itself expensive, and the FRP runtime will compare by \u003ccode\u003eStableName\u003c/code\u003es as a short-circuit optimization.\n\u003c/p\u003e",
          "module": "RSAGL.FRP.Accumulation",
          "name": "EdgeDetectionMode",
          "package": "rsagl-frp",
          "source": "src/RSAGL-FRP-Accumulation.html#EdgeDetectionMode",
          "type": "data"
        },
        "index": {
          "description": "The edge detection mode If Discrete detect edge between subsequent frames only If Fuzzy detect edge since the most recent previous detected edge If HashedDiscrete the comparison function is itself expensive and the FRP runtime will compare by StableName as short-circuit optimization",
          "hierarchy": "RSAGL FRP Accumulation",
          "module": "RSAGL.FRP.Accumulation",
          "name": "EdgeDetectionMode",
          "package": "rsagl-frp",
          "partial": "Edge Detection Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Accumulation.html#t:EdgeDetectionMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.FRP.Accumulation",
          "name": "Discrete",
          "package": "rsagl-frp",
          "signature": "Discrete",
          "source": "src/RSAGL-FRP-Accumulation.html#EdgeDetectionMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL FRP Accumulation",
          "module": "RSAGL.FRP.Accumulation",
          "name": "Discrete",
          "package": "rsagl-frp",
          "partial": "Discrete",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Accumulation.html#v:Discrete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.FRP.Accumulation",
          "name": "Fuzzy",
          "package": "rsagl-frp",
          "signature": "Fuzzy",
          "source": "src/RSAGL-FRP-Accumulation.html#EdgeDetectionMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL FRP Accumulation",
          "module": "RSAGL.FRP.Accumulation",
          "name": "Fuzzy",
          "package": "rsagl-frp",
          "partial": "Fuzzy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Accumulation.html#v:Fuzzy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eaccumulate\u003c/a\u003e\u003c/code\u003e harness for some numerical methods.\n Parameters are: current input, previous output, delta time, absolute time, and number of frames at the specified frequency.\n\u003c/p\u003e",
          "module": "RSAGL.FRP.Accumulation",
          "name": "accumulateNumerical",
          "package": "rsagl-frp",
          "signature": "Frequency -\u003e (i -\u003e o -\u003e Time -\u003e Time -\u003e Integer -\u003e o) -\u003e o -\u003e FRP e m i o",
          "source": "src/RSAGL-FRP-Accumulation.html#accumulateNumerical",
          "type": "function"
        },
        "index": {
          "description": "accumulate harness for some numerical methods Parameters are current input previous output delta time absolute time and number of frames at the specified frequency",
          "hierarchy": "RSAGL FRP Accumulation",
          "module": "RSAGL.FRP.Accumulation",
          "name": "accumulateNumerical",
          "normalized": "Frequency-\u003e(a-\u003eb-\u003eTime-\u003eTime-\u003eInteger-\u003eb)-\u003eb-\u003eFRP c d a b",
          "package": "rsagl-frp",
          "partial": "Numerical",
          "signature": "Frequency-\u003e(i-\u003eo-\u003eTime-\u003eTime-\u003eInteger-\u003eo)-\u003eo-\u003eFRP e m i o",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Accumulation.html#v:accumulateNumerical"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as 'edge Discrete'.\n\u003c/p\u003e",
          "module": "RSAGL.FRP.Accumulation",
          "name": "changed",
          "package": "rsagl-frp",
          "signature": "(x -\u003e x -\u003e Bool) -\u003e FRP e m x Bool",
          "source": "src/RSAGL-FRP-Accumulation.html#changed",
          "type": "function"
        },
        "index": {
          "description": "Same as edge Discrete",
          "hierarchy": "RSAGL FRP Accumulation",
          "module": "RSAGL.FRP.Accumulation",
          "name": "changed",
          "normalized": "(a-\u003ea-\u003eBool)-\u003eFRP b c a Bool",
          "package": "rsagl-frp",
          "signature": "(x-\u003ex-\u003eBool)-\u003eFRP e m x Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Accumulation.html#v:changed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecalculate a function only at the edges of it's input.\n\u003c/p\u003e",
          "module": "RSAGL.FRP.Accumulation",
          "name": "clingy",
          "package": "rsagl-frp",
          "signature": "EdgeDetectionMode -\u003e (j -\u003e j -\u003e Bool) -\u003e (j -\u003e p) -\u003e FRP e m j p",
          "source": "src/RSAGL-FRP-Accumulation.html#clingy",
          "type": "function"
        },
        "index": {
          "description": "Recalculate function only at the edges of it input",
          "hierarchy": "RSAGL FRP Accumulation",
          "module": "RSAGL.FRP.Accumulation",
          "name": "clingy",
          "normalized": "EdgeDetectionMode-\u003e(a-\u003ea-\u003eBool)-\u003e(a-\u003eb)-\u003eFRP c d a b",
          "package": "rsagl-frp",
          "signature": "EdgeDetectionMode-\u003e(j-\u003ej-\u003eBool)-\u003e(j-\u003ep)-\u003eFRP e m j p",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Accumulation.html#v:clingy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelay a piece of data for one frame.\n\u003c/p\u003e",
          "module": "RSAGL.FRP.Accumulation",
          "name": "delay",
          "package": "rsagl-frp",
          "signature": "x -\u003e FRP e m x x",
          "source": "src/RSAGL-FRP-Accumulation.html#delay",
          "type": "function"
        },
        "index": {
          "description": "Delay piece of data for one frame",
          "hierarchy": "RSAGL FRP Accumulation",
          "module": "RSAGL.FRP.Accumulation",
          "name": "delay",
          "normalized": "a-\u003eFRP b c a a",
          "package": "rsagl-frp",
          "signature": "x-\u003eFRP e m x x",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Accumulation.html#v:delay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake the derivative of a value over time, by simple subtraction between frames.\n\u003c/p\u003e",
          "module": "RSAGL.FRP.Accumulation",
          "name": "derivative",
          "package": "rsagl-frp",
          "signature": "FRP e m p (Rate v)",
          "source": "src/RSAGL-FRP-Accumulation.html#derivative",
          "type": "function"
        },
        "index": {
          "description": "Take the derivative of value over time by simple subtraction between frames",
          "hierarchy": "RSAGL FRP Accumulation",
          "module": "RSAGL.FRP.Accumulation",
          "name": "derivative",
          "package": "rsagl-frp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Accumulation.html#v:derivative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e only during frames on which the input has changed, based on a user-specified equality predicate.\n The predicate function takes the most recent input as its first parameter.\n\u003c/p\u003e",
          "module": "RSAGL.FRP.Accumulation",
          "name": "edge",
          "package": "rsagl-frp",
          "signature": "EdgeDetectionMode -\u003e (x -\u003e x -\u003e Bool) -\u003e FRP e m x Bool",
          "source": "src/RSAGL-FRP-Accumulation.html#edge",
          "type": "function"
        },
        "index": {
          "description": "Returns True only during frames on which the input has changed based on user-specified equality predicate The predicate function takes the most recent input as its first parameter",
          "hierarchy": "RSAGL FRP Accumulation",
          "module": "RSAGL.FRP.Accumulation",
          "name": "edge",
          "normalized": "EdgeDetectionMode-\u003e(a-\u003ea-\u003eBool)-\u003eFRP b c a Bool",
          "package": "rsagl-frp",
          "signature": "EdgeDetectionMode-\u003e(x-\u003ex-\u003eBool)-\u003eFRP e m x Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Accumulation.html#v:edge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnswer the first input that ever passes through a function.\n\u003c/p\u003e",
          "module": "RSAGL.FRP.Accumulation",
          "name": "initial",
          "package": "rsagl-frp",
          "signature": "FRP e m x x",
          "source": "src/RSAGL-FRP-Accumulation.html#initial",
          "type": "function"
        },
        "index": {
          "description": "Answer the first input that ever passes through function",
          "hierarchy": "RSAGL FRP Accumulation",
          "module": "RSAGL.FRP.Accumulation",
          "name": "initial",
          "package": "rsagl-frp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Accumulation.html#v:initial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake the integral of a rate over time, using the trapezoidal rule.\n\u003c/p\u003e",
          "module": "RSAGL.FRP.Accumulation",
          "name": "integral",
          "package": "rsagl-frp",
          "signature": "p -\u003e FRP e m (Rate v) p",
          "source": "src/RSAGL-FRP-Accumulation.html#integral",
          "type": "function"
        },
        "index": {
          "description": "Take the integral of rate over time using the trapezoidal rule",
          "hierarchy": "RSAGL FRP Accumulation",
          "module": "RSAGL.FRP.Accumulation",
          "name": "integral",
          "normalized": "a-\u003eFRP b c(Rate d)a",
          "package": "rsagl-frp",
          "signature": "p-\u003eFRP e m(Rate v)p",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Accumulation.html#v:integral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.FRP.Accumulation",
          "name": "integralRK4",
          "package": "rsagl-frp",
          "signature": "Frequency -\u003e (p -\u003e v -\u003e p) -\u003e p -\u003e FRP e m (Time -\u003e p -\u003e Rate v) p",
          "source": "src/RSAGL-FRP-Accumulation.html#integralRK4",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL FRP Accumulation",
          "module": "RSAGL.FRP.Accumulation",
          "name": "integralRK4",
          "normalized": "Frequency-\u003e(a-\u003eb-\u003ea)-\u003ea-\u003eFRP c d(Time-\u003ea-\u003eRate b)a",
          "package": "rsagl-frp",
          "partial": "RK",
          "signature": "Frequency-\u003e(p-\u003ev-\u003ep)-\u003ep-\u003eFRP e m(Time-\u003ep-\u003eRate v)p",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Accumulation.html#v:integralRK4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.FRP.Accumulation",
          "name": "integralRK4'",
          "package": "rsagl-frp",
          "signature": "Frequency -\u003e (p -\u003e v -\u003e p) -\u003e (p, Rate v) -\u003e FRP e m (Time -\u003e p -\u003e Rate v -\u003e Acceleration v) (p, Rate v)",
          "source": "src/RSAGL-FRP-Accumulation.html#integralRK4%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL FRP Accumulation",
          "module": "RSAGL.FRP.Accumulation",
          "name": "integralRK4'",
          "normalized": "Frequency-\u003e(a-\u003eb-\u003ea)-\u003e(a,Rate b)-\u003eFRP c d(Time-\u003ea-\u003eRate b-\u003eAcceleration b)(a,Rate b)",
          "package": "rsagl-frp",
          "partial": "RK",
          "signature": "Frequency-\u003e(p-\u003ev-\u003ep)-\u003e(p,Rate v)-\u003eFRP e m(Time-\u003ep-\u003eRate v-\u003eAcceleration v)(p,Rate v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Accumulation.html#v:integralRK4-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnswer the most recent input that satisfies the predicate.\n Accepts an initial value, which need not itself satisfy the predicate.\n\u003c/p\u003e\u003cp\u003eThis can be a performance optimization, if it prevents unecessary evaluation of an input.\n\u003c/p\u003e",
          "module": "RSAGL.FRP.Accumulation",
          "name": "sticky",
          "package": "rsagl-frp",
          "signature": "(x -\u003e Bool) -\u003e x -\u003e FRP e m x x",
          "source": "src/RSAGL-FRP-Accumulation.html#sticky",
          "type": "function"
        },
        "index": {
          "description": "Answer the most recent input that satisfies the predicate Accepts an initial value which need not itself satisfy the predicate This can be performance optimization if it prevents unecessary evaluation of an input",
          "hierarchy": "RSAGL FRP Accumulation",
          "module": "RSAGL.FRP.Accumulation",
          "name": "sticky",
          "normalized": "(a-\u003eBool)-\u003ea-\u003eFRP b c a a",
          "package": "rsagl-frp",
          "signature": "(x-\u003eBool)-\u003ex-\u003eFRP e m x x",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Accumulation.html#v:sticky"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSum some data frame-by-frame.\n\u003c/p\u003e",
          "module": "RSAGL.FRP.Accumulation",
          "name": "summation",
          "package": "rsagl-frp",
          "signature": "p -\u003e FRP e m v p",
          "source": "src/RSAGL-FRP-Accumulation.html#summation",
          "type": "function"
        },
        "index": {
          "description": "Sum some data frame-by-frame",
          "hierarchy": "RSAGL FRP Accumulation",
          "module": "RSAGL.FRP.Accumulation",
          "name": "summation",
          "normalized": "a-\u003eFRP b c d a",
          "package": "rsagl-frp",
          "signature": "p-\u003eFRP e m v p",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Accumulation.html#v:summation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eElapsed time since the instantiation of this switch or thread.  Reset when a thread switches.\n\u003c/p\u003e",
          "module": "RSAGL.FRP.Accumulation",
          "name": "threadTime",
          "package": "rsagl-frp",
          "signature": "FRP e m () Time",
          "source": "src/RSAGL-FRP-Accumulation.html#threadTime",
          "type": "function"
        },
        "index": {
          "description": "Elapsed time since the instantiation of this switch or thread Reset when thread switches",
          "hierarchy": "RSAGL FRP Accumulation",
          "module": "RSAGL.FRP.Accumulation",
          "name": "threadTime",
          "normalized": "FRP a b()Time",
          "package": "rsagl-frp",
          "partial": "Time",
          "signature": "FRP e m()Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Accumulation.html#v:threadTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.FRP.FRP",
          "name": "FRP",
          "package": "rsagl-frp",
          "source": "src/RSAGL-FRP-FRP.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "RSAGL FRP FRP",
          "module": "RSAGL.FRP.FRP",
          "name": "FRP",
          "package": "rsagl-frp",
          "partial": "FRP",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRP.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA switchable automata with timewise numerical methods.\n\u003c/p\u003e",
          "module": "RSAGL.FRP.FRP",
          "name": "FRP",
          "package": "rsagl-frp",
          "source": "src/RSAGL-FRP-FRP.html#FRP",
          "type": "data"
        },
        "index": {
          "description": "switchable automata with timewise numerical methods",
          "hierarchy": "RSAGL FRP FRP",
          "module": "RSAGL.FRP.FRP",
          "name": "FRP",
          "package": "rsagl-frp",
          "partial": "FRP",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRP.html#t:FRP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.FRP.FRP",
          "name": "FRPProgram",
          "package": "rsagl-frp",
          "source": "src/RSAGL-FRP-FRP.html#FRPProgram",
          "type": "type"
        },
        "index": {
          "hierarchy": "RSAGL FRP FRP",
          "module": "RSAGL.FRP.FRP",
          "name": "FRPProgram",
          "package": "rsagl-frp",
          "partial": "FRPProgram",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRP.html#t:FRPProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn FRP-embedded functor.\n\u003c/p\u003e",
          "module": "RSAGL.FRP.FRP",
          "name": "StreamFunctor",
          "package": "rsagl-frp",
          "source": "src/RSAGL-FRP-FRP.html#StreamFunctor",
          "type": "class"
        },
        "index": {
          "description": "An FRP-embedded functor",
          "hierarchy": "RSAGL FRP FRP",
          "module": "RSAGL.FRP.FRP",
          "name": "StreamFunctor",
          "package": "rsagl-frp",
          "partial": "Stream Functor",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRP.html#t:StreamFunctor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShould a thread be allowed to spawn?  Typical values are \u003ccode\u003e\u003ca\u003enullaryThreadIdentity\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eforbidDuplicates\u003c/a\u003e\u003c/code\u003e.\n The predicate tests whether or not a particular thread is already running.\n\u003c/p\u003e",
          "module": "RSAGL.FRP.FRP",
          "name": "ThreadIdentityRule",
          "package": "rsagl-frp",
          "source": "src/RSAGL-FRP-FRP.html#ThreadIdentityRule",
          "type": "type"
        },
        "index": {
          "description": "Should thread be allowed to spawn Typical values are nullaryThreadIdentity forbidDuplicates The predicate tests whether or not particular thread is already running",
          "hierarchy": "RSAGL FRP FRP",
          "module": "RSAGL.FRP.FRP",
          "name": "ThreadIdentityRule",
          "package": "rsagl-frp",
          "partial": "Thread Identity Rule",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRP.html#t:ThreadIdentityRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the current absolute time.\n\u003c/p\u003e",
          "module": "RSAGL.FRP.FRP",
          "name": "absoluteTime",
          "package": "rsagl-frp",
          "signature": "FRP e m () Time",
          "source": "src/RSAGL-FRP-FRP.html#absoluteTime",
          "type": "function"
        },
        "index": {
          "description": "Get the current absolute time",
          "hierarchy": "RSAGL FRP FRP",
          "module": "RSAGL.FRP.FRP",
          "name": "absoluteTime",
          "normalized": "FRP a b()Time",
          "package": "rsagl-frp",
          "partial": "Time",
          "signature": "FRP e m()Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRP.html#v:absoluteTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFramewise accumulation of signals.\n The embedded function recieves the current input and the previous output.\n\u003c/p\u003e",
          "module": "RSAGL.FRP.FRP",
          "name": "accumulate",
          "package": "rsagl-frp",
          "signature": "p -\u003e (j -\u003e p -\u003e p) -\u003e FRP e m j p",
          "source": "src/RSAGL-FRP-FRP.html#accumulate",
          "type": "function"
        },
        "index": {
          "description": "Framewise accumulation of signals The embedded function recieves the current input and the previous output",
          "hierarchy": "RSAGL FRP FRP",
          "module": "RSAGL.FRP.FRP",
          "name": "accumulate",
          "normalized": "a-\u003e(b-\u003ea-\u003ea)-\u003eFRP c d b a",
          "package": "rsagl-frp",
          "signature": "p-\u003e(j-\u003ep-\u003ep)-\u003eFRP e m j p",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRP.html#v:accumulate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllow unlimited duplicate \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e threads, while restricting all other threads according to the specified rule.\n\u003c/p\u003e",
          "module": "RSAGL.FRP.FRP",
          "name": "allowAnonymous",
          "package": "rsagl-frp",
          "signature": "ThreadIdentityRule t -\u003e ThreadIdentityRule (Maybe t)",
          "source": "src/RSAGL-FRP-FRP.html#allowAnonymous",
          "type": "function"
        },
        "index": {
          "description": "Allow unlimited duplicate Nothing threads while restricting all other threads according to the specified rule",
          "hierarchy": "RSAGL FRP FRP",
          "module": "RSAGL.FRP.FRP",
          "name": "allowAnonymous",
          "normalized": "ThreadIdentityRule a-\u003eThreadIdentityRule(Maybe a)",
          "package": "rsagl-frp",
          "partial": "Anonymous",
          "signature": "ThreadIdentityRule t-\u003eThreadIdentityRule(Maybe t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRP.html#v:allowAnonymous"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the change in time since the last update.\n\u003c/p\u003e",
          "module": "RSAGL.FRP.FRP",
          "name": "deltaTime",
          "package": "rsagl-frp",
          "signature": "FRP e m () Time",
          "source": "src/RSAGL-FRP-FRP.html#deltaTime",
          "type": "function"
        },
        "index": {
          "description": "Get the change in time since the last update",
          "hierarchy": "RSAGL FRP FRP",
          "module": "RSAGL.FRP.FRP",
          "name": "deltaTime",
          "normalized": "FRP a b()Time",
          "package": "rsagl-frp",
          "partial": "Time",
          "signature": "FRP e m()Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRP.html#v:deltaTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForbig duplicate threads by equality on the thread identity.\n\u003c/p\u003e",
          "module": "RSAGL.FRP.FRP",
          "name": "forbidDuplicates",
          "package": "rsagl-frp",
          "signature": "ThreadIdentityRule t",
          "source": "src/RSAGL-FRP-FRP.html#forbidDuplicates",
          "type": "function"
        },
        "index": {
          "description": "Forbig duplicate threads by equality on the thread identity",
          "hierarchy": "RSAGL FRP FRP",
          "module": "RSAGL.FRP.FRP",
          "name": "forbidDuplicates",
          "package": "rsagl-frp",
          "partial": "Duplicates",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRP.html#v:forbidDuplicates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmbed a single-threaded, bracketed switch inside another running thread.\n\u003c/p\u003e",
          "module": "RSAGL.FRP.FRP",
          "name": "frp1Context",
          "package": "rsagl-frp",
          "signature": "FRP e (FRP1Context j p m) j p -\u003e FRP e m j p",
          "source": "src/RSAGL-FRP-FRP.html#frp1Context",
          "type": "function"
        },
        "index": {
          "description": "Embed single-threaded bracketed switch inside another running thread",
          "hierarchy": "RSAGL FRP FRP",
          "module": "RSAGL.FRP.FRP",
          "name": "frp1Context",
          "normalized": "FRP a(FRP Context b c d)b c-\u003eFRP a d b c",
          "package": "rsagl-frp",
          "partial": "Context",
          "signature": "FRP e(FRP Context j p m)j p-\u003eFRP e m j p",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRP.html#v:frp1Context"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmbed some threads inside another running thread, as \u003ccode\u003ethreadGroup\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "RSAGL.FRP.FRP",
          "name": "frpContext",
          "package": "rsagl-frp",
          "signature": "ThreadIdentityRule t -\u003e [(t, FRP e (FRPContext t j p m) j p)] -\u003e FRP e m j [(t, p)]",
          "source": "src/RSAGL-FRP-FRP.html#frpContext",
          "type": "function"
        },
        "index": {
          "description": "Embed some threads inside another running thread as threadGroup",
          "hierarchy": "RSAGL FRP FRP",
          "module": "RSAGL.FRP.FRP",
          "name": "frpContext",
          "normalized": "ThreadIdentityRule a-\u003e[(a,FRP b(FRPContext a c d e)c d)]-\u003eFRP b e c[(a,d)]",
          "package": "rsagl-frp",
          "partial": "Context",
          "signature": "ThreadIdentityRule t-\u003e[(t,FRP e(FRPContext t j p m)j p)]-\u003eFRP e m j[(t,p)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRP.html#v:frpContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValue recusion (see fix).\n\u003c/p\u003e",
          "module": "RSAGL.FRP.FRP",
          "name": "frpFix",
          "package": "rsagl-frp",
          "signature": "FRP e (FRP1Context (j, x) (p, x) m) (j, x) (p, x) -\u003e FRP e m j p",
          "source": "src/RSAGL-FRP-FRP.html#frpFix",
          "type": "function"
        },
        "index": {
          "description": "Value recusion see fix",
          "hierarchy": "RSAGL FRP FRP",
          "module": "RSAGL.FRP.FRP",
          "name": "frpFix",
          "normalized": "FRP a(FRP Context(b,c)(d,c)e)(b,c)(d,c)-\u003eFRP a e b d",
          "package": "rsagl-frp",
          "partial": "Fix",
          "signature": "FRP e(FRP Context(j,x)(p,x)m)(j,x)(p,x)-\u003eFRP e m j p",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRP.html#v:frpFix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.FRP.FRP",
          "name": "frpTest",
          "package": "rsagl-frp",
          "signature": "(forall e.  [FRP e (FRPX () () i o) i o]) -\u003e [i] -\u003e IO [[o]]",
          "source": "src/RSAGL-FRP-FRP.html#frpTest",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL FRP FRP",
          "module": "RSAGL.FRP.FRP",
          "name": "frpTest",
          "normalized": "(a b[FRP c(FRPX()()d e)d e])-\u003e[d]-\u003eIO[[e]]",
          "package": "rsagl-frp",
          "partial": "Test",
          "signature": "(forall e.[FRP e(FRPX()()i o)i o])-\u003e[i]-\u003eIO[[o]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRP.html#v:frpTest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReceive tagged information, with memoization.\n\u003c/p\u003e",
          "module": "RSAGL.FRP.FRP",
          "name": "incoming",
          "package": "rsagl-frp",
          "signature": "FRP e m (Message j) j",
          "source": "src/RSAGL-FRP-FRP.html#incoming",
          "type": "function"
        },
        "index": {
          "description": "Receive tagged information with memoization",
          "hierarchy": "RSAGL FRP FRP",
          "module": "RSAGL.FRP.FRP",
          "name": "incoming",
          "package": "rsagl-frp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRP.html#v:incoming"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform an arbitrary IO action.\n\u003c/p\u003e",
          "module": "RSAGL.FRP.FRP",
          "name": "ioAction",
          "package": "rsagl-frp",
          "signature": "(j -\u003e IO p) -\u003e FRP e m j p",
          "source": "src/RSAGL-FRP-FRP.html#ioAction",
          "type": "function"
        },
        "index": {
          "description": "Perform an arbitrary IO action",
          "hierarchy": "RSAGL FRP FRP",
          "module": "RSAGL.FRP.FRP",
          "name": "ioAction",
          "normalized": "(a-\u003eIO b)-\u003eFRP c d a b",
          "package": "rsagl-frp",
          "partial": "Action",
          "signature": "(j-\u003eIO p)-\u003eFRP e m j p",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRP.html#v:ioAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform an IO action when a stream is first initialized.\n\u003c/p\u003e",
          "module": "RSAGL.FRP.FRP",
          "name": "ioInit",
          "package": "rsagl-frp",
          "signature": "IO p -\u003e FRP e m () p",
          "source": "src/RSAGL-FRP-FRP.html#ioInit",
          "type": "function"
        },
        "index": {
          "description": "Perform an IO action when stream is first initialized",
          "hierarchy": "RSAGL FRP FRP",
          "module": "RSAGL.FRP.FRP",
          "name": "ioInit",
          "normalized": "IO a-\u003eFRP b c()a",
          "package": "rsagl-frp",
          "partial": "Init",
          "signature": "IO p-\u003eFRP e m()p",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRP.html#v:ioInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKill the current thread, only when the given parameter is true.\n\u003c/p\u003e",
          "module": "RSAGL.FRP.FRP",
          "name": "killThreadIf",
          "package": "rsagl-frp",
          "signature": "FRP e m Bool ()",
          "source": "src/RSAGL-FRP-FRP.html#killThreadIf",
          "type": "function"
        },
        "index": {
          "description": "Kill the current thread only when the given parameter is true",
          "hierarchy": "RSAGL FRP FRP",
          "module": "RSAGL.FRP.FRP",
          "name": "killThreadIf",
          "normalized": "FRP a b Bool()",
          "package": "rsagl-frp",
          "partial": "Thread If",
          "signature": "FRP e m Bool()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRP.html#v:killThreadIf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a single-threaded FRPProgram.\n\u003c/p\u003e",
          "module": "RSAGL.FRP.FRP",
          "name": "newFRP1Program",
          "package": "rsagl-frp",
          "signature": "(forall e.  FRP e (FRP1 s i o) i o) -\u003e IO (FRPProgram s i o)",
          "source": "src/RSAGL-FRP-FRP.html#newFRP1Program",
          "type": "function"
        },
        "index": {
          "description": "Construct single-threaded FRPProgram",
          "hierarchy": "RSAGL FRP FRP",
          "module": "RSAGL.FRP.FRP",
          "name": "newFRP1Program",
          "normalized": "(a b FRP c(FRP d e f)e f)-\u003eIO(FRPProgram d e f)",
          "package": "rsagl-frp",
          "partial": "FRP Program",
          "signature": "(forall e. FRP e(FRP s i o)i o)-\u003eIO(FRPProgram s i o)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRP.html#v:newFRP1Program"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a multi-threaded FRPProgram.\n\u003c/p\u003e",
          "module": "RSAGL.FRP.FRP",
          "name": "newFRPProgram",
          "package": "rsagl-frp",
          "signature": "ThreadIdentityRule t -\u003e (forall e.  [(t, FRP e (FRPX t s i o) i o)]) -\u003e IO (FRPProgram s i [(t, o)])",
          "source": "src/RSAGL-FRP-FRP.html#newFRPProgram",
          "type": "function"
        },
        "index": {
          "description": "Construct multi-threaded FRPProgram",
          "hierarchy": "RSAGL FRP FRP",
          "module": "RSAGL.FRP.FRP",
          "name": "newFRPProgram",
          "normalized": "ThreadIdentityRule a-\u003e(b c[(a,FRP d(FRPX a e f g)f g)])-\u003eIO(FRPProgram e f[(a,g)])",
          "package": "rsagl-frp",
          "partial": "FRPProgram",
          "signature": "ThreadIdentityRule t-\u003e(forall e.[(t,FRP e(FRPX t s i o)i o)])-\u003eIO(FRPProgram s i[(t,o)])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRP.html#v:newFRPProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllow unlimited duplicate threads.\n\u003c/p\u003e",
          "module": "RSAGL.FRP.FRP",
          "name": "nullaryThreadIdentity",
          "package": "rsagl-frp",
          "signature": "ThreadIdentityRule a",
          "source": "src/RSAGL-FRP-FRP.html#nullaryThreadIdentity",
          "type": "function"
        },
        "index": {
          "description": "Allow unlimited duplicate threads",
          "hierarchy": "RSAGL FRP FRP",
          "module": "RSAGL.FRP.FRP",
          "name": "nullaryThreadIdentity",
          "package": "rsagl-frp",
          "partial": "Thread Identity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRP.html#v:nullaryThreadIdentity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend tagged information.\n\u003c/p\u003e",
          "module": "RSAGL.FRP.FRP",
          "name": "outgoing",
          "package": "rsagl-frp",
          "signature": "FRP e m j (Message j)",
          "source": "src/RSAGL-FRP-FRP.html#outgoing",
          "type": "function"
        },
        "index": {
          "description": "Send tagged information",
          "hierarchy": "RSAGL FRP FRP",
          "module": "RSAGL.FRP.FRP",
          "name": "outgoing",
          "package": "rsagl-frp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRP.html#v:outgoing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend tagged information.\n\u003c/p\u003e",
          "module": "RSAGL.FRP.FRP",
          "name": "outgoingBy",
          "package": "rsagl-frp",
          "signature": "(j -\u003e j -\u003e Bool)-\u003e FRP e m j (Message j)",
          "type": "function"
        },
        "index": {
          "description": "Send tagged information",
          "hierarchy": "RSAGL FRP FRP",
          "module": "RSAGL.FRP.FRP",
          "name": "outgoingBy",
          "normalized": "(a-\u003ea-\u003eBool)-\u003eFRP b c a(Message a)",
          "package": "rsagl-frp",
          "partial": "By",
          "signature": "(j-\u003ej-\u003eBool)-\u003eFRP e m j(Message j)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRP.html#v:outgoingBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a bounded random value, as \u003ccode\u003e\u003ca\u003erandomRIO\u003c/a\u003e\u003c/code\u003e.  A new value is pulled for each\n frame of animation.\n\u003c/p\u003e",
          "module": "RSAGL.FRP.FRP",
          "name": "randomA",
          "package": "rsagl-frp",
          "signature": "FRP e m (a, a) a",
          "source": "src/RSAGL-FRP-FRP.html#randomA",
          "type": "function"
        },
        "index": {
          "description": "Get bounded random value as randomRIO new value is pulled for each frame of animation",
          "hierarchy": "RSAGL FRP FRP",
          "module": "RSAGL.FRP.FRP",
          "name": "randomA",
          "normalized": "FRP a b(c,c)c",
          "package": "rsagl-frp",
          "signature": "FRP e m(a,a)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRP.html#v:randomA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpawn new threads once per frame.\n\u003c/p\u003e",
          "module": "RSAGL.FRP.FRP",
          "name": "spawnThreads",
          "package": "rsagl-frp",
          "signature": "FRP e m [(ThreadIDOf m, FRP e m (SwitchInputOf m) (SwitchOutputOf m))] ()",
          "source": "src/RSAGL-FRP-FRP.html#spawnThreads",
          "type": "function"
        },
        "index": {
          "description": "Spawn new threads once per frame",
          "hierarchy": "RSAGL FRP FRP",
          "module": "RSAGL.FRP.FRP",
          "name": "spawnThreads",
          "normalized": "FRP a b[(ThreadIDOf b,FRP a b(SwitchInputOf b)(SwitchOutputOf b))]()",
          "package": "rsagl-frp",
          "partial": "Threads",
          "signature": "FRP e m[(ThreadIDOf m,FRP e m(SwitchInputOf m)(SwitchOutputOf m))]()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRP.html#v:spawnThreads"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.FRP.FRP",
          "name": "streammap",
          "package": "rsagl-frp",
          "signature": "(a -\u003e b) -\u003e FRP e m (s a) (s b)",
          "source": "src/RSAGL-FRP-FRP.html#streammap",
          "type": "method"
        },
        "index": {
          "hierarchy": "RSAGL FRP FRP",
          "module": "RSAGL.FRP.FRP",
          "name": "streammap",
          "normalized": "(a-\u003eb)-\u003eFRP c d(e a)(e b)",
          "package": "rsagl-frp",
          "signature": "(a-\u003eb)-\u003eFRP e m(s a)(s b)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRP.html#v:streammap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.FRP.FRP",
          "name": "streampure",
          "package": "rsagl-frp",
          "signature": "a -\u003e FRP e m () (s a)",
          "source": "src/RSAGL-FRP-FRP.html#streampure",
          "type": "method"
        },
        "index": {
          "hierarchy": "RSAGL FRP FRP",
          "module": "RSAGL.FRP.FRP",
          "name": "streampure",
          "normalized": "a-\u003eFRP b c()(d a)",
          "package": "rsagl-frp",
          "signature": "a-\u003eFRP e m()(s a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRP.html#v:streampure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhenever a value is provided, change the presently running switch (or thread) to the specified new value,\n and execute that switch before continuing.  This destroys all state local to the currently running\n switch (or thread).\n This function acts as if the switch were performed at frame begin.\n\u003c/p\u003e",
          "module": "RSAGL.FRP.FRP",
          "name": "switchContinue",
          "package": "rsagl-frp",
          "signature": "FRP e m (Maybe (FRP e m (SwitchInputOf m) (SwitchOutputOf m)), SwitchInputOf m) (SwitchInputOf m)",
          "source": "src/RSAGL-FRP-FRP.html#switchContinue",
          "type": "function"
        },
        "index": {
          "description": "Whenever value is provided change the presently running switch or thread to the specified new value and execute that switch before continuing This destroys all state local to the currently running switch or thread This function acts as if the switch were performed at frame begin",
          "hierarchy": "RSAGL FRP FRP",
          "module": "RSAGL.FRP.FRP",
          "name": "switchContinue",
          "normalized": "FRP a b(Maybe(FRP a b(SwitchInputOf b)(SwitchOutputOf b)),SwitchInputOf b)(SwitchInputOf b)",
          "package": "rsagl-frp",
          "partial": "Continue",
          "signature": "FRP e m(Maybe(FRP e m(SwitchInputOf m)(SwitchOutputOf m)),SwitchInputOf m)(SwitchInputOf m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRP.html#v:switchContinue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhenever a value is provided, change the presently running switch (or thread) to the specified new value,\n and execute that switch before continuing.  This destroys all state local to the currently running\n switch (or thread).\n This function acts as if the switch were performed at frame end.\n\u003c/p\u003e",
          "module": "RSAGL.FRP.FRP",
          "name": "switchTerminate",
          "package": "rsagl-frp",
          "signature": "FRP e m (Maybe (FRP e m (SwitchInputOf m) (SwitchOutputOf m)), SwitchOutputOf m) (SwitchOutputOf m)",
          "source": "src/RSAGL-FRP-FRP.html#switchTerminate",
          "type": "function"
        },
        "index": {
          "description": "Whenever value is provided change the presently running switch or thread to the specified new value and execute that switch before continuing This destroys all state local to the currently running switch or thread This function acts as if the switch were performed at frame end",
          "hierarchy": "RSAGL FRP FRP",
          "module": "RSAGL.FRP.FRP",
          "name": "switchTerminate",
          "normalized": "FRP a b(Maybe(FRP a b(SwitchInputOf b)(SwitchOutputOf b)),SwitchOutputOf b)(SwitchOutputOf b)",
          "package": "rsagl-frp",
          "partial": "Terminate",
          "signature": "FRP e m(Maybe(FRP e m(SwitchInputOf m)(SwitchOutputOf m)),SwitchOutputOf m)(SwitchOutputOf m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRP.html#v:switchTerminate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the current thread's identity.\n\u003c/p\u003e",
          "module": "RSAGL.FRP.FRP",
          "name": "threadIdentity",
          "package": "rsagl-frp",
          "signature": "FRP e m () (ThreadIDOf m)",
          "source": "src/RSAGL-FRP-FRP.html#threadIdentity",
          "type": "function"
        },
        "index": {
          "description": "Get the current thread identity",
          "hierarchy": "RSAGL FRP FRP",
          "module": "RSAGL.FRP.FRP",
          "name": "threadIdentity",
          "normalized": "FRP a b()(ThreadIDOf b)",
          "package": "rsagl-frp",
          "partial": "Identity",
          "signature": "FRP e m()(ThreadIDOf m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRP.html#v:threadIdentity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBring an FRPProgram up-to-date with the current time or a specific time.\n\u003c/p\u003e",
          "module": "RSAGL.FRP.FRP",
          "name": "updateFRPProgram",
          "package": "rsagl-frp",
          "signature": "Maybe Time -\u003e (i, s) -\u003e FRPProgram s i o -\u003e IO (o, s)",
          "source": "src/RSAGL-FRP-FRP.html#updateFRPProgram",
          "type": "function"
        },
        "index": {
          "description": "Bring an FRPProgram up-to-date with the current time or specific time",
          "hierarchy": "RSAGL FRP FRP",
          "module": "RSAGL.FRP.FRP",
          "name": "updateFRPProgram",
          "normalized": "Maybe Time-\u003e(a,b)-\u003eFRPProgram b a c-\u003eIO(c,b)",
          "package": "rsagl-frp",
          "partial": "FRPProgram",
          "signature": "Maybe Time-\u003e(i,s)-\u003eFRPProgram s i o-\u003eIO(o,s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRP.html#v:updateFRPProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a computation only when the input is defined.\n\u003c/p\u003e",
          "module": "RSAGL.FRP.FRP",
          "name": "whenJust",
          "package": "rsagl-frp",
          "signature": "(forall x y.  FRP e (FRP1Context x y m) j p) -\u003e FRP e m (Maybe j) (Maybe p)",
          "source": "src/RSAGL-FRP-FRP.html#whenJust",
          "type": "function"
        },
        "index": {
          "description": "Run computation only when the input is defined",
          "hierarchy": "RSAGL FRP FRP",
          "module": "RSAGL.FRP.FRP",
          "name": "whenJust",
          "normalized": "(a b c FRP d(FRP Context b e f)g h)-\u003eFRP d f(Maybe g)(Maybe h)",
          "package": "rsagl-frp",
          "partial": "Just",
          "signature": "(forall x y. FRP e(FRP Context x y m)j p)-\u003eFRP e m(Maybe j)(Maybe p)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRP.html#v:whenJust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct an arrow from its thread identity.\n\u003c/p\u003e",
          "module": "RSAGL.FRP.FRP",
          "name": "withThreadIdentity",
          "package": "rsagl-frp",
          "signature": "(ThreadIDOf m -\u003e FRP e m j p) -\u003e FRP e m j p",
          "source": "src/RSAGL-FRP-FRP.html#withThreadIdentity",
          "type": "function"
        },
        "index": {
          "description": "Construct an arrow from its thread identity",
          "hierarchy": "RSAGL FRP FRP",
          "module": "RSAGL.FRP.FRP",
          "name": "withThreadIdentity",
          "normalized": "(ThreadIDOf a-\u003eFRP b a c d)-\u003eFRP b a c d",
          "package": "rsagl-frp",
          "partial": "Thread Identity",
          "signature": "(ThreadIDOf m-\u003eFRP e m j p)-\u003eFRP e m j p",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRP.html#v:withThreadIdentity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA model of the types used by an FRP program.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "RSAGL.FRP.FRPModel",
          "name": "FRPModel",
          "package": "rsagl-frp",
          "source": "src/RSAGL-FRP-FRPModel.html",
          "type": "module"
        },
        "index": {
          "description": "model of the types used by an FRP program",
          "hierarchy": "RSAGL FRP FRPModel",
          "module": "RSAGL.FRP.FRPModel",
          "name": "FRPModel",
          "package": "rsagl-frp",
          "partial": "FRPModel",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRPModel.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.FRP.FRPModel",
          "name": "Capability",
          "package": "rsagl-frp",
          "source": "src/RSAGL-FRP-FRPModel.html#Capability",
          "type": "class"
        },
        "index": {
          "hierarchy": "RSAGL FRP FRPModel",
          "module": "RSAGL.FRP.FRPModel",
          "name": "Capability",
          "package": "rsagl-frp",
          "partial": "Capability",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRPModel.html#t:Capability"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.FRP.FRPModel",
          "name": "Disabled",
          "package": "rsagl-frp",
          "source": "src/RSAGL-FRP-FRPModel.html#Disabled",
          "type": "data"
        },
        "index": {
          "hierarchy": "RSAGL FRP FRPModel",
          "module": "RSAGL.FRP.FRPModel",
          "name": "Disabled",
          "package": "rsagl-frp",
          "partial": "Disabled",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRPModel.html#t:Disabled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.FRP.FRPModel",
          "name": "Enabled",
          "package": "rsagl-frp",
          "source": "src/RSAGL-FRP-FRPModel.html#Enabled",
          "type": "data"
        },
        "index": {
          "hierarchy": "RSAGL FRP FRPModel",
          "module": "RSAGL.FRP.FRPModel",
          "name": "Enabled",
          "package": "rsagl-frp",
          "partial": "Enabled",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRPModel.html#t:Enabled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA root-level single-threaded program.\n IO is enabled by default.\n\u003c/p\u003e",
          "module": "RSAGL.FRP.FRPModel",
          "name": "FRP1",
          "package": "rsagl-frp",
          "source": "src/RSAGL-FRP-FRPModel.html#FRP1",
          "type": "type"
        },
        "index": {
          "description": "root-level single-threaded program IO is enabled by default",
          "hierarchy": "RSAGL FRP FRPModel",
          "module": "RSAGL.FRP.FRPModel",
          "name": "FRP1",
          "package": "rsagl-frp",
          "partial": "FRP",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRPModel.html#t:FRP1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA single-threaded embedded subprogram.\n\u003c/p\u003e",
          "module": "RSAGL.FRP.FRPModel",
          "name": "FRP1Context",
          "package": "rsagl-frp",
          "source": "src/RSAGL-FRP-FRPModel.html#FRP1Context",
          "type": "type"
        },
        "index": {
          "description": "single-threaded embedded subprogram",
          "hierarchy": "RSAGL FRP FRPModel",
          "module": "RSAGL.FRP.FRPModel",
          "name": "FRP1Context",
          "package": "rsagl-frp",
          "partial": "FRP Context",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRPModel.html#t:FRP1Context"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA multi-threaded embedded subprogram.\n\u003c/p\u003e",
          "module": "RSAGL.FRP.FRPModel",
          "name": "FRPContext",
          "package": "rsagl-frp",
          "source": "src/RSAGL-FRP-FRPModel.html#FRPContext",
          "type": "type"
        },
        "index": {
          "description": "multi-threaded embedded subprogram",
          "hierarchy": "RSAGL FRP FRPModel",
          "module": "RSAGL.FRP.FRPModel",
          "name": "FRPContext",
          "package": "rsagl-frp",
          "partial": "FRPContext",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRPModel.html#t:FRPContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.FRP.FRPModel",
          "name": "FRPModel",
          "package": "rsagl-frp",
          "source": "src/RSAGL-FRP-FRPModel.html#FRPModel",
          "type": "class"
        },
        "index": {
          "hierarchy": "RSAGL FRP FRPModel",
          "module": "RSAGL.FRP.FRPModel",
          "name": "FRPModel",
          "package": "rsagl-frp",
          "partial": "FRPModel",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRPModel.html#t:FRPModel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA root-level multi-threaded program.\n IO is enabled by default.\n\u003c/p\u003e",
          "module": "RSAGL.FRP.FRPModel",
          "name": "FRPX",
          "package": "rsagl-frp",
          "source": "src/RSAGL-FRP-FRPModel.html#FRPX",
          "type": "type"
        },
        "index": {
          "description": "root-level multi-threaded program IO is enabled by default",
          "hierarchy": "RSAGL FRP FRPModel",
          "module": "RSAGL.FRP.FRPModel",
          "name": "FRPX",
          "package": "rsagl-frp",
          "partial": "FRPX",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRPModel.html#t:FRPX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA subprogram with IO capabilities disabled.\n\u003c/p\u003e",
          "module": "RSAGL.FRP.FRPModel",
          "name": "IODisabled",
          "package": "rsagl-frp",
          "source": "src/RSAGL-FRP-FRPModel.html#IODisabled",
          "type": "type"
        },
        "index": {
          "description": "subprogram with IO capabilities disabled",
          "hierarchy": "RSAGL FRP FRPModel",
          "module": "RSAGL.FRP.FRPModel",
          "name": "IODisabled",
          "package": "rsagl-frp",
          "partial": "IODisabled",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRPModel.html#t:IODisabled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA legacy configuration, IO capabilities enabled.\n\u003c/p\u003e",
          "module": "RSAGL.FRP.FRPModel",
          "name": "SimpleSwitch",
          "package": "rsagl-frp",
          "source": "src/RSAGL-FRP-FRPModel.html#SimpleSwitch",
          "type": "type"
        },
        "index": {
          "description": "legacy configuration IO capabilities enabled",
          "hierarchy": "RSAGL FRP FRPModel",
          "module": "RSAGL.FRP.FRPModel",
          "name": "SimpleSwitch",
          "package": "rsagl-frp",
          "partial": "Simple Switch",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRPModel.html#t:SimpleSwitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe FRPModel type that represents a switch.\n Consists of the following type variables.\n\u003c/p\u003e\u003cp\u003eNote: Don't pattern-match against this type directly, as it is a volatile\n interface.  Either use a type synonym, such as \u003ccode\u003e\u003ca\u003eSimpleSwitch\u003c/a\u003e\u003c/code\u003e, or match\n against the type functions in FRPModel.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e k - See, ThreadingOf.\n * t - See, ThreadIDOf.\n * s - See, StateOf.\n * i - See, SwitchInputOf.\n * o - See, SwitchOutputOf.\n * m - A variable that represents switch nesting.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "RSAGL.FRP.FRPModel",
          "name": "Switch",
          "package": "rsagl-frp",
          "source": "src/RSAGL-FRP-FRPModel.html#Switch",
          "type": "data"
        },
        "index": {
          "description": "The FRPModel type that represents switch Consists of the following type variables Note Don pattern-match against this type directly as it is volatile interface Either use type synonym such as SimpleSwitch or match against the type functions in FRPModel See ThreadingOf See ThreadIDOf See StateOf See SwitchInputOf See SwitchOutputOf variable that represents switch nesting",
          "hierarchy": "RSAGL FRP FRPModel",
          "module": "RSAGL.FRP.FRPModel",
          "name": "Switch",
          "package": "rsagl-frp",
          "partial": "Switch",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FRPModel.html#t:Switch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.FRP.FactoryArrow",
          "name": "FactoryArrow",
          "package": "rsagl-frp",
          "source": "src/RSAGL-FRP-FactoryArrow.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "RSAGL FRP FactoryArrow",
          "module": "RSAGL.FRP.FactoryArrow",
          "name": "FactoryArrow",
          "package": "rsagl-frp",
          "partial": "Factory Arrow",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FactoryArrow.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eArrow\u003c/a\u003e\u003c/code\u003e that constructs an associated monadic computation.\n\u003c/p\u003e",
          "module": "RSAGL.FRP.FactoryArrow",
          "name": "FactoryArrow",
          "package": "rsagl-frp",
          "source": "src/RSAGL-FRP-FactoryArrow.html#FactoryArrow",
          "type": "newtype"
        },
        "index": {
          "description": "An Arrow that constructs an associated monadic computation",
          "hierarchy": "RSAGL FRP FactoryArrow",
          "module": "RSAGL.FRP.FactoryArrow",
          "name": "FactoryArrow",
          "package": "rsagl-frp",
          "partial": "Factory Arrow",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FactoryArrow.html#t:FactoryArrow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.FRP.FactoryArrow",
          "name": "FactoryArrow",
          "package": "rsagl-frp",
          "signature": "FactoryArrow",
          "source": "src/RSAGL-FRP-FactoryArrow.html#FactoryArrow",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL FRP FactoryArrow",
          "module": "RSAGL.FRP.FactoryArrow",
          "name": "FactoryArrow",
          "package": "rsagl-frp",
          "partial": "Factory Arrow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FactoryArrow.html#v:FactoryArrow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.FRP.FactoryArrow",
          "name": "runFactory",
          "package": "rsagl-frp",
          "signature": "m (Kleisli n i o)",
          "source": "src/RSAGL-FRP-FactoryArrow.html#FactoryArrow",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL FRP FactoryArrow",
          "module": "RSAGL.FRP.FactoryArrow",
          "name": "runFactory",
          "package": "rsagl-frp",
          "partial": "Factory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-FactoryArrow.html#v:runFactory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA memoization scheme in which a piece of information is tagged with\n a unique identifier for its source.  Messages can be combined,\n and the tagging information indicates the specific combination.\n On the receiving end, we memoize the single most recent incoming\n message, and reuse it if the source information matches.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "RSAGL.FRP.Message",
          "name": "Message",
          "package": "rsagl-frp",
          "source": "src/RSAGL-FRP-Message.html",
          "type": "module"
        },
        "index": {
          "description": "memoization scheme in which piece of information is tagged with unique identifier for its source Messages can be combined and the tagging information indicates the specific combination On the receiving end we memoize the single most recent incoming message and reuse it if the source information matches",
          "hierarchy": "RSAGL FRP Message",
          "module": "RSAGL.FRP.Message",
          "name": "Message",
          "package": "rsagl-frp",
          "partial": "Message",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Message.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA sourced packet of information.\n\u003c/p\u003e",
          "module": "RSAGL.FRP.Message",
          "name": "Message",
          "package": "rsagl-frp",
          "source": "src/RSAGL-FRP-Message.html#Message",
          "type": "data"
        },
        "index": {
          "description": "sourced packet of information",
          "hierarchy": "RSAGL FRP Message",
          "module": "RSAGL.FRP.Message",
          "name": "Message",
          "package": "rsagl-frp",
          "partial": "Message",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Message.html#t:Message"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn object that can memoize sequentially matching incoming messages.\n\u003c/p\u003e",
          "module": "RSAGL.FRP.Message",
          "name": "Receiver",
          "package": "rsagl-frp",
          "source": "src/RSAGL-FRP-Message.html#Receiver",
          "type": "data"
        },
        "index": {
          "description": "An object that can memoize sequentially matching incoming messages",
          "hierarchy": "RSAGL FRP Message",
          "module": "RSAGL.FRP.Message",
          "name": "Receiver",
          "package": "rsagl-frp",
          "partial": "Receiver",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Message.html#t:Receiver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn object that can memoize matching sequential outgoing messages.\n\u003c/p\u003e",
          "module": "RSAGL.FRP.Message",
          "name": "Transmitter",
          "package": "rsagl-frp",
          "source": "src/RSAGL-FRP-Message.html#Transmitter",
          "type": "data"
        },
        "index": {
          "description": "An object that can memoize matching sequential outgoing messages",
          "hierarchy": "RSAGL FRP Message",
          "module": "RSAGL.FRP.Message",
          "name": "Transmitter",
          "package": "rsagl-frp",
          "partial": "Transmitter",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Message.html#t:Transmitter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBind two messages.\n\u003c/p\u003e",
          "module": "RSAGL.FRP.Message",
          "name": "(\u003c\u003c*\u003e\u003e)",
          "package": "rsagl-frp",
          "signature": "Message (a -\u003e b) -\u003e Message a -\u003e Message b",
          "source": "src/RSAGL-FRP-Message.html#%3C%3C%2A%3E%3E",
          "type": "function"
        },
        "index": {
          "description": "Bind two messages",
          "hierarchy": "RSAGL FRP Message",
          "module": "RSAGL.FRP.Message",
          "name": "(\u003c\u003c*\u003e\u003e) \u003c\u003c*\u003e\u003e",
          "normalized": "Message(a-\u003eb)-\u003eMessage a-\u003eMessage b",
          "package": "rsagl-frp",
          "signature": "Message(a-\u003eb)-\u003eMessage a-\u003eMessage b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Message.html#v:-60--60--42--62--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn arbitrary ordering scheme on messages.\n\u003c/p\u003e",
          "module": "RSAGL.FRP.Message",
          "name": "consistency",
          "package": "rsagl-frp",
          "signature": "Message a -\u003e Message b -\u003e Ordering",
          "source": "src/RSAGL-FRP-Message.html#consistency",
          "type": "function"
        },
        "index": {
          "description": "An arbitrary ordering scheme on messages",
          "hierarchy": "RSAGL FRP Message",
          "module": "RSAGL.FRP.Message",
          "name": "consistency",
          "normalized": "Message a-\u003eMessage b-\u003eOrdering",
          "package": "rsagl-frp",
          "signature": "Message a-\u003eMessage b-\u003eOrdering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Message.html#v:consistency"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTwo messages are consistent if they arrive from identical sources.\n\u003c/p\u003e",
          "module": "RSAGL.FRP.Message",
          "name": "consistent",
          "package": "rsagl-frp",
          "signature": "Message a -\u003e Message b -\u003e Bool",
          "source": "src/RSAGL-FRP-Message.html#consistent",
          "type": "function"
        },
        "index": {
          "description": "Two messages are consistent if they arrive from identical sources",
          "hierarchy": "RSAGL FRP Message",
          "module": "RSAGL.FRP.Message",
          "name": "consistent",
          "normalized": "Message a-\u003eMessage b-\u003eBool",
          "package": "rsagl-frp",
          "signature": "Message a-\u003eMessage b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Message.html#v:consistent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.FRP.Message",
          "name": "newReceiver",
          "package": "rsagl-frp",
          "signature": "IO (Receiver a)",
          "source": "src/RSAGL-FRP-Message.html#newReceiver",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL FRP Message",
          "module": "RSAGL.FRP.Message",
          "name": "newReceiver",
          "package": "rsagl-frp",
          "partial": "Receiver",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Message.html#v:newReceiver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEquivalent to \u003ccode\u003enewTransmitterBy (==)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "RSAGL.FRP.Message",
          "name": "newTransmitter",
          "package": "rsagl-frp",
          "signature": "IO (Transmitter a)",
          "source": "src/RSAGL-FRP-Message.html#newTransmitter",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to newTransmitterBy",
          "hierarchy": "RSAGL FRP Message",
          "module": "RSAGL.FRP.Message",
          "name": "newTransmitter",
          "package": "rsagl-frp",
          "partial": "Transmitter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Message.html#v:newTransmitter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.FRP.Message",
          "name": "newTransmitterBy",
          "package": "rsagl-frp",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e IO (Transmitter a)",
          "source": "src/RSAGL-FRP-Message.html#newTransmitterBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL FRP Message",
          "module": "RSAGL.FRP.Message",
          "name": "newTransmitterBy",
          "normalized": "(a-\u003ea-\u003eBool)-\u003eIO(Transmitter a)",
          "package": "rsagl-frp",
          "partial": "Transmitter By",
          "signature": "(a-\u003ea-\u003eBool)-\u003eIO(Transmitter a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Message.html#v:newTransmitterBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExamine a message without memoization.\n\u003c/p\u003e",
          "module": "RSAGL.FRP.Message",
          "name": "peek",
          "package": "rsagl-frp",
          "signature": "Message a -\u003e a",
          "source": "src/RSAGL-FRP-Message.html#peek",
          "type": "function"
        },
        "index": {
          "description": "Examine message without memoization",
          "hierarchy": "RSAGL FRP Message",
          "module": "RSAGL.FRP.Message",
          "name": "peek",
          "normalized": "Message a-\u003ea",
          "package": "rsagl-frp",
          "signature": "Message a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Message.html#v:peek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMemoizes an incomming message stream.\n\u003c/p\u003e",
          "module": "RSAGL.FRP.Message",
          "name": "receive",
          "package": "rsagl-frp",
          "signature": "Receiver a -\u003e Message a -\u003e IO a",
          "source": "src/RSAGL-FRP-Message.html#receive",
          "type": "function"
        },
        "index": {
          "description": "Memoizes an incomming message stream",
          "hierarchy": "RSAGL FRP Message",
          "module": "RSAGL.FRP.Message",
          "name": "receive",
          "normalized": "Receiver a-\u003eMessage a-\u003eIO a",
          "package": "rsagl-frp",
          "signature": "Receiver a-\u003eMessage a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Message.html#v:receive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a new message from a one-time source.\n\u003c/p\u003e",
          "module": "RSAGL.FRP.Message",
          "name": "send",
          "package": "rsagl-frp",
          "signature": "a -\u003e IO (Message a)",
          "source": "src/RSAGL-FRP-Message.html#send",
          "type": "function"
        },
        "index": {
          "description": "Construct new message from one-time source",
          "hierarchy": "RSAGL FRP Message",
          "module": "RSAGL.FRP.Message",
          "name": "send",
          "normalized": "a-\u003eIO(Message a)",
          "package": "rsagl-frp",
          "signature": "a-\u003eIO(Message a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Message.html#v:send"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTags an outgoing stream for memoization.\n\u003c/p\u003e",
          "module": "RSAGL.FRP.Message",
          "name": "transmit",
          "package": "rsagl-frp",
          "signature": "Transmitter a -\u003e a -\u003e IO (Message a)",
          "source": "src/RSAGL-FRP-Message.html#transmit",
          "type": "function"
        },
        "index": {
          "description": "Tags an outgoing stream for memoization",
          "hierarchy": "RSAGL FRP Message",
          "module": "RSAGL.FRP.Message",
          "name": "transmit",
          "normalized": "Transmitter a-\u003ea-\u003eIO(Message a)",
          "package": "rsagl-frp",
          "signature": "Transmitter a-\u003ea-\u003eIO(Message a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Message.html#v:transmit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.FRP.RK4",
          "name": "RK4",
          "package": "rsagl-frp",
          "source": "src/RSAGL-FRP-RK4.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "RSAGL FRP RK4",
          "module": "RSAGL.FRP.RK4",
          "name": "RK4",
          "package": "rsagl-frp",
          "partial": "RK",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-RK4.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplementation of RK4 that repeatedly time steps a system in which velocity\n is a function of absolute time and position.\n\u003c/p\u003e",
          "module": "RSAGL.FRP.RK4",
          "name": "integrateRK4",
          "package": "rsagl-frp",
          "signature": "(p -\u003e v -\u003e p)-\u003e (Time -\u003e p -\u003e Rate v)-\u003e p-\u003e Time-\u003e Time-\u003e Integer-\u003e p",
          "type": "function"
        },
        "index": {
          "description": "Implementation of RK4 that repeatedly time steps system in which velocity is function of absolute time and position",
          "hierarchy": "RSAGL FRP RK4",
          "module": "RSAGL.FRP.RK4",
          "name": "integrateRK4",
          "normalized": "(a-\u003eb-\u003ea)-\u003e(Time-\u003ea-\u003eRate b)-\u003ea-\u003eTime-\u003eTime-\u003eInteger-\u003ea",
          "package": "rsagl-frp",
          "partial": "RK",
          "signature": "(p-\u003ev-\u003ep)-\u003e(Time-\u003ep-\u003eRate v)-\u003ep-\u003eTime-\u003eTime-\u003eInteger-\u003ep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-RK4.html#v:integrateRK4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplementation of RK4 that repeatedly time steps a system in which\n acceleration is a function of absolute time, position and velocity.\n\u003c/p\u003e",
          "module": "RSAGL.FRP.RK4",
          "name": "integrateRK4'",
          "package": "rsagl-frp",
          "signature": "(p -\u003e v -\u003e p)-\u003e (Time -\u003e p -\u003e Rate v -\u003e Acceleration v)-\u003e (p, Rate v)-\u003e Time-\u003e Time-\u003e Integer-\u003e (p, Rate v)",
          "type": "function"
        },
        "index": {
          "description": "Implementation of RK4 that repeatedly time steps system in which acceleration is function of absolute time position and velocity",
          "hierarchy": "RSAGL FRP RK4",
          "module": "RSAGL.FRP.RK4",
          "name": "integrateRK4'",
          "normalized": "(a-\u003eb-\u003ea)-\u003e(Time-\u003ea-\u003eRate b-\u003eAcceleration b)-\u003e(a,Rate b)-\u003eTime-\u003eTime-\u003eInteger-\u003e(a,Rate b)",
          "package": "rsagl-frp",
          "partial": "RK",
          "signature": "(p-\u003ev-\u003ep)-\u003e(Time-\u003ep-\u003eRate v-\u003eAcceleration v)-\u003e(p,Rate v)-\u003eTime-\u003eTime-\u003eInteger-\u003e(p,Rate v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-RK4.html#v:integrateRK4-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplementation of RK4 that time steps a system in which velocity is\n a function of absolute time and position.\n\u003c/p\u003e",
          "module": "RSAGL.FRP.RK4",
          "name": "rk4",
          "package": "rsagl-frp",
          "signature": "(p -\u003e v -\u003e p)-\u003e (Time -\u003e p -\u003e Rate v)-\u003e p-\u003e Time-\u003e Time-\u003e p",
          "type": "function"
        },
        "index": {
          "description": "Implementation of RK4 that time steps system in which velocity is function of absolute time and position",
          "hierarchy": "RSAGL FRP RK4",
          "module": "RSAGL.FRP.RK4",
          "name": "rk4",
          "normalized": "(a-\u003eb-\u003ea)-\u003e(Time-\u003ea-\u003eRate b)-\u003ea-\u003eTime-\u003eTime-\u003ea",
          "package": "rsagl-frp",
          "signature": "(p-\u003ev-\u003ep)-\u003e(Time-\u003ep-\u003eRate v)-\u003ep-\u003eTime-\u003eTime-\u003ep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-RK4.html#v:rk4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplementation of RK4 that time steps a system in which acceleration\n is a function of absolute time, position and velocity.\n\u003c/p\u003e",
          "module": "RSAGL.FRP.RK4",
          "name": "rk4'",
          "package": "rsagl-frp",
          "signature": "(p -\u003e v -\u003e p)-\u003e (Time -\u003e p -\u003e Rate v -\u003e Acceleration v)-\u003e (p, Rate v)-\u003e Time-\u003e Time-\u003e (p, Rate v)",
          "type": "function"
        },
        "index": {
          "description": "Implementation of RK4 that time steps system in which acceleration is function of absolute time position and velocity",
          "hierarchy": "RSAGL FRP RK4",
          "module": "RSAGL.FRP.RK4",
          "name": "rk4'",
          "normalized": "(a-\u003eb-\u003ea)-\u003e(Time-\u003ea-\u003eRate b-\u003eAcceleration b)-\u003e(a,Rate b)-\u003eTime-\u003eTime-\u003e(a,Rate b)",
          "package": "rsagl-frp",
          "signature": "(p-\u003ev-\u003ep)-\u003e(Time-\u003ep-\u003eRate v-\u003eAcceleration v)-\u003e(p,Rate v)-\u003eTime-\u003eTime-\u003e(p,Rate v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-RK4.html#v:rk4-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.FRP.RecombinantState",
          "name": "RecombinantState",
          "package": "rsagl-frp",
          "source": "src/RSAGL-FRP-RecombinantState.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "RSAGL FRP RecombinantState",
          "module": "RSAGL.FRP.RecombinantState",
          "name": "RecombinantState",
          "package": "rsagl-frp",
          "partial": "Recombinant State",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-RecombinantState.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescribes concurrency-aware state.  The goal is to take some stateful\n information, clone it into a variety of concurrent threads, and then\n recombine using the (possibly modified) state.\n\u003c/p\u003e",
          "module": "RSAGL.FRP.RecombinantState",
          "name": "RecombinantState",
          "package": "rsagl-frp",
          "source": "src/RSAGL-FRP-RecombinantState.html#RecombinantState",
          "type": "class"
        },
        "index": {
          "description": "Describes concurrency-aware state The goal is to take some stateful information clone it into variety of concurrent threads and then recombine using the possibly modified state",
          "hierarchy": "RSAGL FRP RecombinantState",
          "module": "RSAGL.FRP.RecombinantState",
          "name": "RecombinantState",
          "package": "rsagl-frp",
          "partial": "Recombinant State",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-RecombinantState.html#t:RecombinantState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA new version of the state, which should carry the context,\n but not the content, of the original.  I.e., the original\n content will be re-merged during the recombination phase.\n\u003c/p\u003e",
          "module": "RSAGL.FRP.RecombinantState",
          "name": "clone",
          "package": "rsagl-frp",
          "signature": "s -\u003e SubState s",
          "source": "src/RSAGL-FRP-RecombinantState.html#clone",
          "type": "method"
        },
        "index": {
          "description": "new version of the state which should carry the context but not the content of the original I.e the original content will be re-merged during the recombination phase",
          "hierarchy": "RSAGL FRP RecombinantState",
          "module": "RSAGL.FRP.RecombinantState",
          "name": "clone",
          "normalized": "a-\u003eSubState a",
          "package": "rsagl-frp",
          "signature": "s-\u003eSubState s",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-RecombinantState.html#v:clone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecombine the modified, cloned information with the\n original state.\n\u003c/p\u003e",
          "module": "RSAGL.FRP.RecombinantState",
          "name": "recombine",
          "package": "rsagl-frp",
          "signature": "s -\u003e SubState s -\u003e s",
          "source": "src/RSAGL-FRP-RecombinantState.html#recombine",
          "type": "method"
        },
        "index": {
          "description": "Recombine the modified cloned information with the original state",
          "hierarchy": "RSAGL FRP RecombinantState",
          "module": "RSAGL.FRP.RecombinantState",
          "name": "recombine",
          "normalized": "a-\u003eSubState a-\u003ea",
          "package": "rsagl-frp",
          "signature": "s-\u003eSubState s-\u003es",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-RecombinantState.html#v:recombine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.FRP.Time",
          "name": "Time",
          "package": "rsagl-frp",
          "source": "src/RSAGL-FRP-Time.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "RSAGL FRP Time",
          "module": "RSAGL.FRP.Time",
          "name": "Time",
          "package": "rsagl-frp",
          "partial": "Time",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Time.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.FRP.Time",
          "name": "Acceleration",
          "package": "rsagl-frp",
          "source": "src/RSAGL-FRP-Time.html#Acceleration",
          "type": "type"
        },
        "index": {
          "hierarchy": "RSAGL FRP Time",
          "module": "RSAGL.FRP.Time",
          "name": "Acceleration",
          "package": "rsagl-frp",
          "partial": "Acceleration",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Time.html#t:Acceleration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.FRP.Time",
          "name": "Frequency",
          "package": "rsagl-frp",
          "source": "src/RSAGL-FRP-Time.html#Frequency",
          "type": "type"
        },
        "index": {
          "hierarchy": "RSAGL FRP Time",
          "module": "RSAGL.FRP.Time",
          "name": "Frequency",
          "package": "rsagl-frp",
          "partial": "Frequency",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Time.html#t:Frequency"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.FRP.Time",
          "name": "Rate",
          "package": "rsagl-frp",
          "source": "src/RSAGL-FRP-Time.html#Rate",
          "type": "data"
        },
        "index": {
          "hierarchy": "RSAGL FRP Time",
          "module": "RSAGL.FRP.Time",
          "name": "Rate",
          "package": "rsagl-frp",
          "partial": "Rate",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Time.html#t:Rate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.FRP.Time",
          "name": "Time",
          "package": "rsagl-frp",
          "source": "src/RSAGL-FRP-Time.html#Time",
          "type": "data"
        },
        "index": {
          "hierarchy": "RSAGL FRP Time",
          "module": "RSAGL.FRP.Time",
          "name": "Time",
          "package": "rsagl-frp",
          "partial": "Time",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Time.html#t:Time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.FRP.Time",
          "name": "cyclical",
          "package": "rsagl-frp",
          "signature": "Time -\u003e Time -\u003e Time",
          "source": "src/RSAGL-FRP-Time.html#cyclical",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL FRP Time",
          "module": "RSAGL.FRP.Time",
          "name": "cyclical",
          "normalized": "Time-\u003eTime-\u003eTime",
          "package": "rsagl-frp",
          "signature": "Time-\u003eTime-\u003eTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Time.html#v:cyclical"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.FRP.Time",
          "name": "cyclical'",
          "package": "rsagl-frp",
          "signature": "Time -\u003e Time -\u003e RSdouble",
          "source": "src/RSAGL-FRP-Time.html#cyclical%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL FRP Time",
          "module": "RSAGL.FRP.Time",
          "name": "cyclical'",
          "normalized": "Time-\u003eTime-\u003eRSdouble",
          "package": "rsagl-frp",
          "signature": "Time-\u003eTime-\u003eRSdouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Time.html#v:cyclical-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.FRP.Time",
          "name": "day",
          "package": "rsagl-frp",
          "signature": "Time",
          "source": "src/RSAGL-FRP-Time.html#day",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL FRP Time",
          "module": "RSAGL.FRP.Time",
          "name": "day",
          "package": "rsagl-frp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Time.html#v:day"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.FRP.Time",
          "name": "fps120",
          "package": "rsagl-frp",
          "signature": "Frequency",
          "source": "src/RSAGL-FRP-Time.html#fps120",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL FRP Time",
          "module": "RSAGL.FRP.Time",
          "name": "fps120",
          "package": "rsagl-frp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Time.html#v:fps120"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.FRP.Time",
          "name": "fps30",
          "package": "rsagl-frp",
          "signature": "Frequency",
          "source": "src/RSAGL-FRP-Time.html#fps30",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL FRP Time",
          "module": "RSAGL.FRP.Time",
          "name": "fps30",
          "package": "rsagl-frp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Time.html#v:fps30"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.FRP.Time",
          "name": "fps60",
          "package": "rsagl-frp",
          "signature": "Frequency",
          "source": "src/RSAGL-FRP-Time.html#fps60",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL FRP Time",
          "module": "RSAGL.FRP.Time",
          "name": "fps60",
          "package": "rsagl-frp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Time.html#v:fps60"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.FRP.Time",
          "name": "fromSeconds",
          "package": "rsagl-frp",
          "signature": "RSdouble -\u003e Time",
          "source": "src/RSAGL-FRP-Time.html#fromSeconds",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL FRP Time",
          "module": "RSAGL.FRP.Time",
          "name": "fromSeconds",
          "normalized": "RSdouble-\u003eTime",
          "package": "rsagl-frp",
          "partial": "Seconds",
          "signature": "RSdouble-\u003eTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Time.html#v:fromSeconds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.FRP.Time",
          "name": "getTime",
          "package": "rsagl-frp",
          "signature": "IO Time",
          "source": "src/RSAGL-FRP-Time.html#getTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL FRP Time",
          "module": "RSAGL.FRP.Time",
          "name": "getTime",
          "package": "rsagl-frp",
          "partial": "Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Time.html#v:getTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.FRP.Time",
          "name": "interval",
          "package": "rsagl-frp",
          "signature": "Frequency -\u003e Time",
          "source": "src/RSAGL-FRP-Time.html#interval",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL FRP Time",
          "module": "RSAGL.FRP.Time",
          "name": "interval",
          "normalized": "Frequency-\u003eTime",
          "package": "rsagl-frp",
          "signature": "Frequency-\u003eTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Time.html#v:interval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.FRP.Time",
          "name": "minute",
          "package": "rsagl-frp",
          "signature": "Time",
          "source": "src/RSAGL-FRP-Time.html#minute",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL FRP Time",
          "module": "RSAGL.FRP.Time",
          "name": "minute",
          "package": "rsagl-frp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Time.html#v:minute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.FRP.Time",
          "name": "month",
          "package": "rsagl-frp",
          "signature": "Time",
          "source": "src/RSAGL-FRP-Time.html#month",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL FRP Time",
          "module": "RSAGL.FRP.Time",
          "name": "month",
          "package": "rsagl-frp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Time.html#v:month"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.FRP.Time",
          "name": "over",
          "package": "rsagl-frp",
          "signature": "Rate a -\u003e Time -\u003e a",
          "source": "src/RSAGL-FRP-Time.html#over",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL FRP Time",
          "module": "RSAGL.FRP.Time",
          "name": "over",
          "normalized": "Rate a-\u003eTime-\u003ea",
          "package": "rsagl-frp",
          "signature": "Rate a-\u003eTime-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Time.html#v:over"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.FRP.Time",
          "name": "pack",
          "package": "rsagl-frp",
          "signature": "[Rate a] -\u003e Rate [a]",
          "source": "src/RSAGL-FRP-Time.html#pack",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL FRP Time",
          "module": "RSAGL.FRP.Time",
          "name": "pack",
          "normalized": "[Rate a]-\u003eRate[a]",
          "package": "rsagl-frp",
          "signature": "[Rate a]-\u003eRate[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Time.html#v:pack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.FRP.Time",
          "name": "packa",
          "package": "rsagl-frp",
          "signature": "[Acceleration a] -\u003e Acceleration [a]",
          "source": "src/RSAGL-FRP-Time.html#packa",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL FRP Time",
          "module": "RSAGL.FRP.Time",
          "name": "packa",
          "normalized": "[Acceleration a]-\u003eAcceleration[a]",
          "package": "rsagl-frp",
          "signature": "[Acceleration a]-\u003eAcceleration[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Time.html#v:packa"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.FRP.Time",
          "name": "per",
          "package": "rsagl-frp",
          "signature": "a -\u003e Time -\u003e Rate a",
          "source": "src/RSAGL-FRP-Time.html#per",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL FRP Time",
          "module": "RSAGL.FRP.Time",
          "name": "per",
          "normalized": "a-\u003eTime-\u003eRate a",
          "package": "rsagl-frp",
          "signature": "a-\u003eTime-\u003eRate a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Time.html#v:per"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.FRP.Time",
          "name": "perSecond",
          "package": "rsagl-frp",
          "signature": "a -\u003e Rate a",
          "source": "src/RSAGL-FRP-Time.html#perSecond",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL FRP Time",
          "module": "RSAGL.FRP.Time",
          "name": "perSecond",
          "normalized": "a-\u003eRate a",
          "package": "rsagl-frp",
          "partial": "Second",
          "signature": "a-\u003eRate a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Time.html#v:perSecond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.FRP.Time",
          "name": "rate",
          "package": "rsagl-frp",
          "signature": "(a, Time) -\u003e (a, Time) -\u003e Rate a",
          "source": "src/RSAGL-FRP-Time.html#rate",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL FRP Time",
          "module": "RSAGL.FRP.Time",
          "name": "rate",
          "normalized": "(a,Time)-\u003e(a,Time)-\u003eRate a",
          "package": "rsagl-frp",
          "signature": "(a,Time)-\u003e(a,Time)-\u003eRate a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Time.html#v:rate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.FRP.Time",
          "name": "time",
          "package": "rsagl-frp",
          "signature": "RSdouble -\u003e Rate RSdouble -\u003e Time",
          "source": "src/RSAGL-FRP-Time.html#time",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL FRP Time",
          "module": "RSAGL.FRP.Time",
          "name": "time",
          "normalized": "RSdouble-\u003eRate RSdouble-\u003eTime",
          "package": "rsagl-frp",
          "signature": "RSdouble-\u003eRate RSdouble-\u003eTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Time.html#v:time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.FRP.Time",
          "name": "toSeconds",
          "package": "rsagl-frp",
          "signature": "Time -\u003e RSdouble",
          "source": "src/RSAGL-FRP-Time.html#toSeconds",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL FRP Time",
          "module": "RSAGL.FRP.Time",
          "name": "toSeconds",
          "normalized": "Time-\u003eRSdouble",
          "package": "rsagl-frp",
          "partial": "Seconds",
          "signature": "Time-\u003eRSdouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Time.html#v:toSeconds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.FRP.Time",
          "name": "unpack",
          "package": "rsagl-frp",
          "signature": "Rate [a] -\u003e [Rate a]",
          "source": "src/RSAGL-FRP-Time.html#unpack",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL FRP Time",
          "module": "RSAGL.FRP.Time",
          "name": "unpack",
          "normalized": "Rate[a]-\u003e[Rate a]",
          "package": "rsagl-frp",
          "signature": "Rate[a]-\u003e[Rate a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Time.html#v:unpack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.FRP.Time",
          "name": "unpacka",
          "package": "rsagl-frp",
          "signature": "Acceleration [a] -\u003e [Acceleration a]",
          "source": "src/RSAGL-FRP-Time.html#unpacka",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL FRP Time",
          "module": "RSAGL.FRP.Time",
          "name": "unpacka",
          "normalized": "Acceleration[a]-\u003e[Acceleration a]",
          "package": "rsagl-frp",
          "signature": "Acceleration[a]-\u003e[Acceleration a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Time.html#v:unpacka"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.FRP.Time",
          "name": "withTime",
          "package": "rsagl-frp",
          "signature": "Time -\u003e (a -\u003e b) -\u003e Rate a -\u003e Rate b",
          "source": "src/RSAGL-FRP-Time.html#withTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL FRP Time",
          "module": "RSAGL.FRP.Time",
          "name": "withTime",
          "normalized": "Time-\u003e(a-\u003eb)-\u003eRate a-\u003eRate b",
          "package": "rsagl-frp",
          "partial": "Time",
          "signature": "Time-\u003e(a-\u003eb)-\u003eRate a-\u003eRate b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Time.html#v:withTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.FRP.Time",
          "name": "year",
          "package": "rsagl-frp",
          "signature": "Time",
          "source": "src/RSAGL-FRP-Time.html#year",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL FRP Time",
          "module": "RSAGL.FRP.Time",
          "name": "year",
          "package": "rsagl-frp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP-Time.html#v:year"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.FRP",
          "name": "FRP",
          "package": "rsagl-frp",
          "source": "src/RSAGL-FRP.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "RSAGL FRP",
          "module": "RSAGL.FRP",
          "name": "FRP",
          "package": "rsagl-frp",
          "partial": "FRP",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-frp/docs/RSAGL-FRP.html#"
      }
    }
  ]
]