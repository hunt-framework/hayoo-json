[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-rt/docs/Pipes-RealTime.html#",
      "description": {
        "fct-module": "Pipes.RealTime",
        "fct-package": "pipes-rt",
        "fct-signature": "module",
        "fct-source": "src/Pipes-RealTime.html",
        "fct-type": "module",
        "title": "RealTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Pipes RealTime",
        "module": "Pipes.RealTime",
        "name": "RealTime",
        "normalized": "",
        "package": "pipes-rt",
        "partial": "Real Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-rt/docs/Pipes-RealTime.html#v:catAtRelativeTimes",
      "description": {
        "fct-descr": "\u003cp\u003eYield values at a set of times relative to the first received value.\n   Yield remaining values immediately if the time list becomes empty \n\u003c/p\u003e",
        "fct-module": "Pipes.RealTime",
        "fct-package": "pipes-rt",
        "fct-signature": "[Double] -\u003e Pipe a a m r",
        "fct-source": "src/Pipes-RealTime.html#catAtRelativeTimes",
        "fct-type": "function",
        "title": "catAtRelativeTimes"
      },
      "index": {
        "description": "Yield values at set of times relative to the first received value Yield remaining values immediately if the time list becomes empty",
        "hierarchy": "Pipes RealTime",
        "module": "Pipes.RealTime",
        "name": "catAtRelativeTimes",
        "normalized": "[Double]-\u003ePipe a a b c",
        "package": "pipes-rt",
        "partial": "At Relative Times",
        "signature": "[Double]-\u003ePipe a a m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-rt/docs/Pipes-RealTime.html#v:catAtTimes",
      "description": {
        "fct-descr": "\u003cp\u003eYield values at a set of absolute times.\n   Yield remaining values immediately if the\n   time list becomes empty \n\u003c/p\u003e",
        "fct-module": "Pipes.RealTime",
        "fct-package": "pipes-rt",
        "fct-signature": "[UTCTime] -\u003e Pipe a a m r",
        "fct-source": "src/Pipes-RealTime.html#catAtTimes",
        "fct-type": "function",
        "title": "catAtTimes"
      },
      "index": {
        "description": "Yield values at set of absolute times Yield remaining values immediately if the time list becomes empty",
        "hierarchy": "Pipes RealTime",
        "module": "Pipes.RealTime",
        "name": "catAtTimes",
        "normalized": "[UTCTime]-\u003ePipe a a b c",
        "package": "pipes-rt",
        "partial": "At Times",
        "signature": "[UTCTime]-\u003ePipe a a m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-rt/docs/Pipes-RealTime.html#v:genPoissonCat",
      "description": {
        "fct-descr": "\u003cp\u003eConstant-rate Poisson process yielding values, seeded by you \n\u003c/p\u003e",
        "fct-module": "Pipes.RealTime",
        "fct-package": "pipes-rt",
        "fct-signature": "GenIO -\u003e Double -\u003e Pipe a a m r",
        "fct-source": "src/Pipes-RealTime.html#genPoissonCat",
        "fct-type": "function",
        "title": "genPoissonCat"
      },
      "index": {
        "description": "Constant-rate Poisson process yielding values seeded by you",
        "hierarchy": "Pipes RealTime",
        "module": "Pipes.RealTime",
        "name": "genPoissonCat",
        "normalized": "GenIO-\u003eDouble-\u003ePipe a a b c",
        "package": "pipes-rt",
        "partial": "Poisson Cat",
        "signature": "GenIO-\u003eDouble-\u003ePipe a a m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-rt/docs/Pipes-RealTime.html#v:poissonCat",
      "description": {
        "fct-descr": "\u003cp\u003eConstant-rate Poisson process yielding values, randomized by IO \n\u003c/p\u003e",
        "fct-module": "Pipes.RealTime",
        "fct-package": "pipes-rt",
        "fct-signature": "Double -\u003e Pipe a a m r",
        "fct-source": "src/Pipes-RealTime.html#poissonCat",
        "fct-type": "function",
        "title": "poissonCat"
      },
      "index": {
        "description": "Constant-rate Poisson process yielding values randomized by IO",
        "hierarchy": "Pipes RealTime",
        "module": "Pipes.RealTime",
        "name": "poissonCat",
        "normalized": "Double-\u003ePipe a a b c",
        "package": "pipes-rt",
        "partial": "Cat",
        "signature": "Double-\u003ePipe a a m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-rt/docs/Pipes-RealTime.html#v:poissonCatConst",
      "description": {
        "fct-descr": "\u003cp\u003eConstant-rate Poisson process with a fixed seed -\n    the same random every time \n\u003c/p\u003e",
        "fct-module": "Pipes.RealTime",
        "fct-package": "pipes-rt",
        "fct-signature": "Double -\u003e Pipe a a m r",
        "fct-source": "src/Pipes-RealTime.html#poissonCatConst",
        "fct-type": "function",
        "title": "poissonCatConst"
      },
      "index": {
        "description": "Constant-rate Poisson process with fixed seed the same random every time",
        "hierarchy": "Pipes RealTime",
        "module": "Pipes.RealTime",
        "name": "poissonCatConst",
        "normalized": "Double-\u003ePipe a a b c",
        "package": "pipes-rt",
        "partial": "Cat Const",
        "signature": "Double-\u003ePipe a a m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-rt/docs/Pipes-RealTime.html#v:relativeTimeCat",
      "description": {
        "fct-descr": "\u003cp\u003eYield values some time after the effect is run,\n    according to their relative timestamps.  Assumes that\n    values arrive in ascending time order. Values with\n    negative relative timestamps are discarded \n\u003c/p\u003e",
        "fct-module": "Pipes.RealTime",
        "fct-package": "pipes-rt",
        "fct-signature": "(a -\u003e Double) -\u003e Pipe a a m r",
        "fct-source": "src/Pipes-RealTime.html#relativeTimeCat",
        "fct-type": "function",
        "title": "relativeTimeCat"
      },
      "index": {
        "description": "Yield values some time after the effect is run according to their relative timestamps Assumes that values arrive in ascending time order Values with negative relative timestamps are discarded",
        "hierarchy": "Pipes RealTime",
        "module": "Pipes.RealTime",
        "name": "relativeTimeCat",
        "normalized": "(a-\u003eDouble)-\u003ePipe a a b c",
        "package": "pipes-rt",
        "partial": "Time Cat",
        "signature": "(a-\u003eDouble)-\u003ePipe a a m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-rt/docs/Pipes-RealTime.html#v:relativeTimeCatDelayedBy",
      "description": {
        "fct-descr": "\u003cp\u003eYield values at their timestamps, but delay\n    by some time (given in seconds).  Passing\n    a negative delay advances the generator,\n    discarding events happening before the effect \n\u003c/p\u003e",
        "fct-module": "Pipes.RealTime",
        "fct-package": "pipes-rt",
        "fct-signature": "(a -\u003e Double) -\u003e Double -\u003e Pipe a a m r",
        "fct-source": "src/Pipes-RealTime.html#relativeTimeCatDelayedBy",
        "fct-type": "function",
        "title": "relativeTimeCatDelayedBy"
      },
      "index": {
        "description": "Yield values at their timestamps but delay by some time given in seconds Passing negative delay advances the generator discarding events happening before the effect",
        "hierarchy": "Pipes RealTime",
        "module": "Pipes.RealTime",
        "name": "relativeTimeCatDelayedBy",
        "normalized": "(a-\u003eDouble)-\u003eDouble-\u003ePipe a a b c",
        "package": "pipes-rt",
        "partial": "Time Cat Delayed By",
        "signature": "(a-\u003eDouble)-\u003eDouble-\u003ePipe a a m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-rt/docs/Pipes-RealTime.html#v:steadyCat",
      "description": {
        "fct-descr": "\u003cp\u003eYield values at steady rate (Hz) \n\u003c/p\u003e",
        "fct-module": "Pipes.RealTime",
        "fct-package": "pipes-rt",
        "fct-signature": "Double -\u003e Pipe a a m r",
        "fct-source": "src/Pipes-RealTime.html#steadyCat",
        "fct-type": "function",
        "title": "steadyCat"
      },
      "index": {
        "description": "Yield values at steady rate Hz",
        "hierarchy": "Pipes RealTime",
        "module": "Pipes.RealTime",
        "name": "steadyCat",
        "normalized": "Double-\u003ePipe a a b c",
        "package": "pipes-rt",
        "partial": "Cat",
        "signature": "Double-\u003ePipe a a m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-rt/docs/Pipes-RealTime.html#v:timeCat",
      "description": {
        "fct-descr": "\u003cp\u003eYield values at the absolute times given by their timestamps.\n    Assumes that they arrive in ascending time order. Values with timestamps\n    earlier than the starting time of the effect are discarded \n\u003c/p\u003e",
        "fct-module": "Pipes.RealTime",
        "fct-package": "pipes-rt",
        "fct-signature": "(a -\u003e UTCTime) -\u003e Pipe a a m r",
        "fct-source": "src/Pipes-RealTime.html#timeCat",
        "fct-type": "function",
        "title": "timeCat"
      },
      "index": {
        "description": "Yield values at the absolute times given by their timestamps Assumes that they arrive in ascending time order Values with timestamps earlier than the starting time of the effect are discarded",
        "hierarchy": "Pipes RealTime",
        "module": "Pipes.RealTime",
        "name": "timeCat",
        "normalized": "(a-\u003eUTCTime)-\u003ePipe a a b c",
        "package": "pipes-rt",
        "partial": "Cat",
        "signature": "(a-\u003eUTCTime)-\u003ePipe a a m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-rt/docs/Pipes-RealTime.html#v:timeCatDelayedBy",
      "description": {
        "fct-descr": "\u003cp\u003eYield values at their absolute timesteps, but delay\n    or advance their production by some time (given in\n    seconds).  Values with timestamps less than zero\n    after adjustment are discarded \n\u003c/p\u003e",
        "fct-module": "Pipes.RealTime",
        "fct-package": "pipes-rt",
        "fct-signature": "(a -\u003e UTCTime) -\u003e Double -\u003e Pipe a a m r",
        "fct-source": "src/Pipes-RealTime.html#timeCatDelayedBy",
        "fct-type": "function",
        "title": "timeCatDelayedBy"
      },
      "index": {
        "description": "Yield values at their absolute timesteps but delay or advance their production by some time given in seconds Values with timestamps less than zero after adjustment are discarded",
        "hierarchy": "Pipes RealTime",
        "module": "Pipes.RealTime",
        "name": "timeCatDelayedBy",
        "normalized": "(a-\u003eUTCTime)-\u003eDouble-\u003ePipe a a b c",
        "package": "pipes-rt",
        "partial": "Cat Delayed By",
        "signature": "(a-\u003eUTCTime)-\u003eDouble-\u003ePipe a a m r"
      }
    }
  }
]