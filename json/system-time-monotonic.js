[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-time-monotonic/docs/System-Time-Monotonic-Direct.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides more direct access to the system's monotonic clock,\n but provides less protection against wraparound.\n\u003c/p\u003e\u003cp\u003eMore specifically, in the higher-level \u003ca\u003eSystem.Time.Monotonic\u003c/a\u003e API,\n \u003ccode\u003e\u003ca\u003eClock\u003c/a\u003e\u003c/code\u003e updates its internal disposition every time\n \u003ccode\u003e\u003ca\u003eclockGetTime\u003c/a\u003e\u003c/code\u003e is called.  The only way to get a\n wraparound issue with the higher-level API is to call\n \u003ccode\u003e\u003ca\u003eclockGetTime\u003c/a\u003e\u003c/code\u003e very seldomly (e.g. less than once\n every 24.8 days, if \u003ccode\u003eGetTickCount\u003c/code\u003e is being used).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Time.Monotonic.Direct",
        "fct-package": "system-time-monotonic",
        "fct-signature": "module",
        "fct-source": "src/System-Time-Monotonic-Direct.html",
        "fct-type": "module",
        "title": "Direct"
      },
      "index": {
        "description": "This module provides more direct access to the system monotonic clock but provides less protection against wraparound More specifically in the higher-level System.Time.Monotonic API Clock updates its internal disposition every time clockGetTime is called The only way to get wraparound issue with the higher-level API is to call clockGetTime very seldomly e.g less than once every days if GetTickCount is being used",
        "hierarchy": "System Time Monotonic Direct",
        "module": "System.Time.Monotonic.Direct",
        "name": "Direct",
        "normalized": "",
        "package": "system-time-monotonic",
        "partial": "Direct",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-time-monotonic/docs/System-Time-Monotonic-Direct.html#t:CTimeSpec",
      "description": {
        "fct-module": "System.Time.Monotonic.Direct",
        "fct-package": "system-time-monotonic",
        "fct-signature": "data",
        "fct-source": "src/System-Time-Monotonic-Direct.html#CTimeSpec",
        "fct-type": "data",
        "title": "CTimeSpec"
      },
      "index": {
        "description": "",
        "hierarchy": "System Time Monotonic Direct",
        "module": "System.Time.Monotonic.Direct",
        "name": "CTimeSpec",
        "normalized": "",
        "package": "system-time-monotonic",
        "partial": "CTime Spec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-time-monotonic/docs/System-Time-Monotonic-Direct.html#t:SomeSystemClock",
      "description": {
        "fct-descr": "\u003cp\u003eExistentially-quantified wrapper around \u003ccode\u003e\u003ca\u003eSystemClock\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "System.Time.Monotonic.Direct",
        "fct-package": "system-time-monotonic",
        "fct-signature": "data",
        "fct-source": "src/System-Time-Monotonic-Direct.html#SomeSystemClock",
        "fct-type": "data",
        "title": "SomeSystemClock"
      },
      "index": {
        "description": "Existentially-quantified wrapper around SystemClock",
        "hierarchy": "System Time Monotonic Direct",
        "module": "System.Time.Monotonic.Direct",
        "name": "SomeSystemClock",
        "normalized": "",
        "package": "system-time-monotonic",
        "partial": "Some System Clock",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-time-monotonic/docs/System-Time-Monotonic-Direct.html#t:SystemClock",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eSystemClock\u003c/a\u003e\u003c/code\u003e is a driver module used by \u003ccode\u003e\u003ca\u003eClock\u003c/a\u003e\u003c/code\u003e\n to access a particular implementation of monotonic time support.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003etime\u003c/code\u003e: Type of value returned by the system's time-getting function.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003ecumtime\u003c/code\u003e: Type for accumulating differences between consecutive(-ish)\n    calls to \u003ccode\u003e\u003ca\u003esystemClockGetTime\u003c/a\u003e\u003c/code\u003e, in case \u003ccode\u003etime\u003c/code\u003e wraps around.\n    The reason we don't simply use \u003ccode\u003e\u003ca\u003eDiffTime\u003c/a\u003e\u003c/code\u003e is this: if the implementation\n    has to divide the result by a clock frequency, it could end up with a\n    number that is not an integral number of picoseconds.  Truncating to\n    \u003ccode\u003e\u003ca\u003eDiffTime\u003c/a\u003e\u003c/code\u003e would lose precision, and that precision loss could add up, at\n    least in theory.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "System.Time.Monotonic.Direct",
        "fct-package": "system-time-monotonic",
        "fct-signature": "data",
        "fct-source": "src/System-Time-Monotonic-Direct.html#SystemClock",
        "fct-type": "data",
        "title": "SystemClock"
      },
      "index": {
        "description": "SystemClock is driver module used by Clock to access particular implementation of monotonic time support time Type of value returned by the system time-getting function cumtime Type for accumulating differences between consecutive ish calls to systemClockGetTime in case time wraps around The reason we don simply use DiffTime is this if the implementation has to divide the result by clock frequency it could end up with number that is not an integral number of picoseconds Truncating to DiffTime would lose precision and that precision loss could add up at least in theory",
        "hierarchy": "System Time Monotonic Direct",
        "module": "System.Time.Monotonic.Direct",
        "name": "SystemClock",
        "normalized": "",
        "package": "system-time-monotonic",
        "partial": "System Clock",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-time-monotonic/docs/System-Time-Monotonic-Direct.html#v:SomeSystemClock",
      "description": {
        "fct-module": "System.Time.Monotonic.Direct",
        "fct-package": "system-time-monotonic",
        "fct-signature": "forall time cumtime . SomeSystemClock (SystemClock time cumtime)",
        "fct-source": "src/System-Time-Monotonic-Direct.html#SomeSystemClock",
        "fct-type": "function",
        "title": "SomeSystemClock"
      },
      "index": {
        "description": "",
        "hierarchy": "System Time Monotonic Direct",
        "module": "System.Time.Monotonic.Direct",
        "name": "SomeSystemClock",
        "normalized": "",
        "package": "system-time-monotonic",
        "partial": "Some System Clock",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-time-monotonic/docs/System-Time-Monotonic-Direct.html#v:SystemClock",
      "description": {
        "fct-module": "System.Time.Monotonic.Direct",
        "fct-package": "system-time-monotonic",
        "fct-signature": "SystemClock",
        "fct-source": "src/System-Time-Monotonic-Direct.html#SystemClock",
        "fct-type": "function",
        "title": "SystemClock"
      },
      "index": {
        "description": "",
        "hierarchy": "System Time Monotonic Direct",
        "module": "System.Time.Monotonic.Direct",
        "name": "SystemClock",
        "normalized": "",
        "package": "system-time-monotonic",
        "partial": "System Clock",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-time-monotonic/docs/System-Time-Monotonic-Direct.html#v:getSystemClock",
      "description": {
        "fct-descr": "\u003cp\u003eReturn a module used for accessing the system's monotonic clock.  The\n reason this is an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action, rather than simply a \u003ccode\u003e\u003ca\u003eSystemClock\u003c/a\u003e\u003c/code\u003e value, is\n that the implementation may need to make a system call to determine what\n monotonic time source to use, and how to use it.\n\u003c/p\u003e",
        "fct-module": "System.Time.Monotonic.Direct",
        "fct-package": "system-time-monotonic",
        "fct-signature": "IO SomeSystemClock",
        "fct-source": "src/System-Time-Monotonic-Direct.html#getSystemClock",
        "fct-type": "function",
        "title": "getSystemClock"
      },
      "index": {
        "description": "Return module used for accessing the system monotonic clock The reason this is an IO action rather than simply SystemClock value is that the implementation may need to make system call to determine what monotonic time source to use and how to use it",
        "hierarchy": "System Time Monotonic Direct",
        "module": "System.Time.Monotonic.Direct",
        "name": "getSystemClock",
        "normalized": "",
        "package": "system-time-monotonic",
        "partial": "System Clock",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-time-monotonic/docs/System-Time-Monotonic-Direct.html#v:systemClockAddCumTime",
      "description": {
        "fct-descr": "\u003cp\u003eAdd two \u003ccode\u003ecumtime\u003c/code\u003e values.  This should not overflow or lose\n precision.\n\u003c/p\u003e",
        "fct-module": "System.Time.Monotonic.Direct",
        "fct-package": "system-time-monotonic",
        "fct-signature": "cumtime -\u003e cumtime -\u003e cumtime",
        "fct-source": "src/System-Time-Monotonic-Direct.html#SystemClock",
        "fct-type": "function",
        "title": "systemClockAddCumTime"
      },
      "index": {
        "description": "Add two cumtime values This should not overflow or lose precision",
        "hierarchy": "System Time Monotonic Direct",
        "module": "System.Time.Monotonic.Direct",
        "name": "systemClockAddCumTime",
        "normalized": "a-\u003ea-\u003ea",
        "package": "system-time-monotonic",
        "partial": "Clock Add Cum Time",
        "signature": "cumtime-\u003ecumtime-\u003ecumtime"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-time-monotonic/docs/System-Time-Monotonic-Direct.html#v:systemClockCumToDiff",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a cumulative total of \u003ccode\u003e\u003ca\u003esystemClockDiffTime\u003c/a\u003e\u003c/code\u003e results to\n \u003ccode\u003e\u003ca\u003eDiffTime\u003c/a\u003e\u003c/code\u003e.  This may truncate precision if it needs to.\n\u003c/p\u003e",
        "fct-module": "System.Time.Monotonic.Direct",
        "fct-package": "system-time-monotonic",
        "fct-signature": "cumtime -\u003e DiffTime",
        "fct-source": "src/System-Time-Monotonic-Direct.html#SystemClock",
        "fct-type": "function",
        "title": "systemClockCumToDiff"
      },
      "index": {
        "description": "Convert cumulative total of systemClockDiffTime results to DiffTime This may truncate precision if it needs to",
        "hierarchy": "System Time Monotonic Direct",
        "module": "System.Time.Monotonic.Direct",
        "name": "systemClockCumToDiff",
        "normalized": "a-\u003eDiffTime",
        "package": "system-time-monotonic",
        "partial": "Clock Cum To Diff",
        "signature": "cumtime-\u003eDiffTime"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-time-monotonic/docs/System-Time-Monotonic-Direct.html#v:systemClockDiffTime",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003esystemClockDiffTime new old\u003c/code\u003e returns the amount of time that has\n elapsed between two calls to \u003ccode\u003esystemClockGetTime\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003esystemClockDiffTime new old = new - old\n\u003c/pre\u003e\u003cp\u003eThis function should handle wraparound properly.  Also, bear in mind\n that \u003ccode\u003enew\u003c/code\u003e may be earlier than \u003ccode\u003eold\u003c/code\u003e.  This can happen if multiple\n threads are accessing a \u003ccode\u003e\u003ca\u003eClock\u003c/a\u003e\u003c/code\u003e\n simultaneously.\n\u003c/p\u003e\u003cp\u003eLastly, \u003ccode\u003esystemClockDiffTime\u003c/code\u003e should not truncate precision in\n conversion to cumtime.  Otherwise, repeated calls to\n \u003ccode\u003e\u003ca\u003eclockGetTime\u003c/a\u003e\u003c/code\u003e could degrade accuracy, due to\n lost precision adding up.\n\u003c/p\u003e",
        "fct-module": "System.Time.Monotonic.Direct",
        "fct-package": "system-time-monotonic",
        "fct-signature": "time -\u003e time -\u003e cumtime",
        "fct-source": "src/System-Time-Monotonic-Direct.html#SystemClock",
        "fct-type": "function",
        "title": "systemClockDiffTime"
      },
      "index": {
        "description": "systemClockDiffTime new old returns the amount of time that has elapsed between two calls to systemClockGetTime systemClockDiffTime new old new old This function should handle wraparound properly Also bear in mind that new may be earlier than old This can happen if multiple threads are accessing Clock simultaneously Lastly systemClockDiffTime should not truncate precision in conversion to cumtime Otherwise repeated calls to clockGetTime could degrade accuracy due to lost precision adding up",
        "hierarchy": "System Time Monotonic Direct",
        "module": "System.Time.Monotonic.Direct",
        "name": "systemClockDiffTime",
        "normalized": "a-\u003ea-\u003eb",
        "package": "system-time-monotonic",
        "partial": "Clock Diff Time",
        "signature": "time-\u003etime-\u003ecumtime"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-time-monotonic/docs/System-Time-Monotonic-Direct.html#v:systemClockGetTime",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Time.Monotonic.Direct",
        "fct-package": "system-time-monotonic",
        "fct-signature": "IO time",
        "fct-source": "src/System-Time-Monotonic-Direct.html#SystemClock",
        "fct-type": "function",
        "title": "systemClockGetTime"
      },
      "index": {
        "description": "",
        "hierarchy": "System Time Monotonic Direct",
        "module": "System.Time.Monotonic.Direct",
        "name": "systemClockGetTime",
        "normalized": "",
        "package": "system-time-monotonic",
        "partial": "Clock Get Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-time-monotonic/docs/System-Time-Monotonic-Direct.html#v:systemClockName",
      "description": {
        "fct-descr": "\u003cp\u003eLabel identifying this clock, like\n \u003ccode\u003e\"clock_gettime(CLOCK_MONOTONIC)\"\u003c/code\u003e or\n \u003ccode\u003e\"GetTickCount\"\u003c/code\u003e.  This label is used for the \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e\n instances of \u003ccode\u003e\u003ca\u003eSystemClock\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eSomeSystemClock\u003c/a\u003e\u003c/code\u003e, and for\n \u003ccode\u003e\u003ca\u003eclockDriverName\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Time.Monotonic.Direct",
        "fct-package": "system-time-monotonic",
        "fct-signature": "String",
        "fct-source": "src/System-Time-Monotonic-Direct.html#SystemClock",
        "fct-type": "function",
        "title": "systemClockName"
      },
      "index": {
        "description": "Label identifying this clock like clock gettime CLOCK MONOTONIC or GetTickCount This label is used for the Show instances of SystemClock and SomeSystemClock and for clockDriverName",
        "hierarchy": "System Time Monotonic Direct",
        "module": "System.Time.Monotonic.Direct",
        "name": "systemClockName",
        "normalized": "",
        "package": "system-time-monotonic",
        "partial": "Clock Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-time-monotonic/docs/System-Time-Monotonic-Direct.html#v:systemClockZeroCumTime",
      "description": {
        "fct-descr": "\u003cp\u003eThe number \u003ccode\u003e0\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Time.Monotonic.Direct",
        "fct-package": "system-time-monotonic",
        "fct-signature": "cumtime",
        "fct-source": "src/System-Time-Monotonic-Direct.html#SystemClock",
        "fct-type": "function",
        "title": "systemClockZeroCumTime"
      },
      "index": {
        "description": "The number",
        "hierarchy": "System Time Monotonic Direct",
        "module": "System.Time.Monotonic.Direct",
        "name": "systemClockZeroCumTime",
        "normalized": "",
        "package": "system-time-monotonic",
        "partial": "Clock Zero Cum Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-time-monotonic/docs/System-Time-Monotonic-Direct.html#v:systemClock_MONOTONIC",
      "description": {
        "fct-descr": "\u003cp\u003eUses \u003ccode\u003eclock_gettime\u003c/code\u003e with \u003ccode\u003eCLOCK_MONOTONIC\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eWarning:\u003c/em\u003e on Linux, this clock stops when the computer is suspended.\n See \u003ca\u003ehttp://lwn.net/Articles/434239/\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Time.Monotonic.Direct",
        "fct-package": "system-time-monotonic",
        "fct-signature": "SystemClock CTimeSpec DiffTime",
        "fct-source": "src/System-Time-Monotonic-Direct.html#systemClock_MONOTONIC",
        "fct-type": "function",
        "title": "systemClock_MONOTONIC"
      },
      "index": {
        "description": "Uses clock gettime with CLOCK MONOTONIC Warning on Linux this clock stops when the computer is suspended See http lwn.net Articles",
        "hierarchy": "System Time Monotonic Direct",
        "module": "System.Time.Monotonic.Direct",
        "name": "systemClock_MONOTONIC",
        "normalized": "",
        "package": "system-time-monotonic",
        "partial": "Clock MONOTONIC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-time-monotonic/docs/System-Time-Monotonic.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a platform-independent API for using the system's\n monotonic clock.\n\u003c/p\u003e\u003cp\u003eKnown issues:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e On Windows XP, this uses \u003ccode\u003eGetTickCount\u003c/code\u003e, which has a 49.7 day wraparound.\n    \u003ccode\u003e\u003ca\u003eClock\u003c/a\u003e\u003c/code\u003e works around this problem, but the workaround only works if\n    \u003ccode\u003e\u003ca\u003eclockGetTime\u003c/a\u003e\u003c/code\u003e is called at least once every 24.8 days.\n\u003c/li\u003e\u003cli\u003e On Linux, this uses \u003ccode\u003eclock_gettime\u003c/code\u003e with \u003ccode\u003eCLOCK_MONOTONIC\u003c/code\u003e,\n    which (unfortunately) stops when the computer is suspended.  Thus,\n    \u003ccode\u003e\u003ca\u003eclockGetTime\u003c/a\u003e\u003c/code\u003e will not include time spent sleeping.  Do not rely on this\n    behavior, as it may be fixed in a future version of this library.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "System.Time.Monotonic",
        "fct-package": "system-time-monotonic",
        "fct-signature": "module",
        "fct-source": "src/System-Time-Monotonic.html",
        "fct-type": "module",
        "title": "Monotonic"
      },
      "index": {
        "description": "This module provides platform-independent API for using the system monotonic clock Known issues On Windows XP this uses GetTickCount which has day wraparound Clock works around this problem but the workaround only works if clockGetTime is called at least once every days On Linux this uses clock gettime with CLOCK MONOTONIC which unfortunately stops when the computer is suspended Thus clockGetTime will not include time spent sleeping Do not rely on this behavior as it may be fixed in future version of this library",
        "hierarchy": "System Time Monotonic",
        "module": "System.Time.Monotonic",
        "name": "Monotonic",
        "normalized": "",
        "package": "system-time-monotonic",
        "partial": "Monotonic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-time-monotonic/docs/System-Time-Monotonic.html#t:Clock",
      "description": {
        "fct-module": "System.Time.Monotonic",
        "fct-package": "system-time-monotonic",
        "fct-signature": "data",
        "fct-source": "src/System-Time-Monotonic.html#Clock",
        "fct-type": "data",
        "title": "Clock"
      },
      "index": {
        "description": "",
        "hierarchy": "System Time Monotonic",
        "module": "System.Time.Monotonic",
        "name": "Clock",
        "normalized": "",
        "package": "system-time-monotonic",
        "partial": "Clock",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-time-monotonic/docs/System-Time-Monotonic.html#v:clockDriverName",
      "description": {
        "fct-descr": "\u003cp\u003eReturn a string identifying the time source, such as\n \u003ccode\u003e\"clock_gettime(CLOCK_MONOTONIC)\"\u003c/code\u003e or\n \u003ccode\u003e\"GetTickCount\"\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Time.Monotonic",
        "fct-package": "system-time-monotonic",
        "fct-signature": "Clock -\u003e String",
        "fct-source": "src/System-Time-Monotonic.html#clockDriverName",
        "fct-type": "function",
        "title": "clockDriverName"
      },
      "index": {
        "description": "Return string identifying the time source such as clock gettime CLOCK MONOTONIC or GetTickCount",
        "hierarchy": "System Time Monotonic",
        "module": "System.Time.Monotonic",
        "name": "clockDriverName",
        "normalized": "Clock-\u003eString",
        "package": "system-time-monotonic",
        "partial": "Driver Name",
        "signature": "Clock-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-time-monotonic/docs/System-Time-Monotonic.html#v:clockGetTime",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the amount of time that has elapsed since the clock was created\n with \u003ccode\u003e\u003ca\u003enewClock\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Time.Monotonic",
        "fct-package": "system-time-monotonic",
        "fct-signature": "Clock -\u003e IO DiffTime",
        "fct-source": "src/System-Time-Monotonic.html#clockGetTime",
        "fct-type": "function",
        "title": "clockGetTime"
      },
      "index": {
        "description": "Return the amount of time that has elapsed since the clock was created with newClock",
        "hierarchy": "System Time Monotonic",
        "module": "System.Time.Monotonic",
        "name": "clockGetTime",
        "normalized": "Clock-\u003eIO DiffTime",
        "package": "system-time-monotonic",
        "partial": "Get Time",
        "signature": "Clock-\u003eIO DiffTime"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-time-monotonic/docs/System-Time-Monotonic.html#v:delay",
      "description": {
        "fct-descr": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003ethreadDelay\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003eDiffTime\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Time.Monotonic",
        "fct-package": "system-time-monotonic",
        "fct-signature": "DiffTime -\u003e IO ()",
        "fct-source": "src/System-Time-Monotonic.html#delay",
        "fct-type": "function",
        "title": "delay"
      },
      "index": {
        "description": "Variant of threadDelay for DiffTime",
        "hierarchy": "System Time Monotonic",
        "module": "System.Time.Monotonic",
        "name": "delay",
        "normalized": "DiffTime-\u003eIO()",
        "package": "system-time-monotonic",
        "partial": "",
        "signature": "DiffTime-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-time-monotonic/docs/System-Time-Monotonic.html#v:newClock",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eClock\u003c/a\u003e\u003c/code\u003e.  The result of \u003ccode\u003e\u003ca\u003eclockGetTime\u003c/a\u003e\u003c/code\u003e is based on the time\n \u003ccode\u003e\u003ca\u003enewClock\u003c/a\u003e\u003c/code\u003e was called.\n\u003c/p\u003e",
        "fct-module": "System.Time.Monotonic",
        "fct-package": "system-time-monotonic",
        "fct-signature": "IO Clock",
        "fct-source": "src/System-Time-Monotonic.html#newClock",
        "fct-type": "function",
        "title": "newClock"
      },
      "index": {
        "description": "Create new Clock The result of clockGetTime is based on the time newClock was called",
        "hierarchy": "System Time Monotonic",
        "module": "System.Time.Monotonic",
        "name": "newClock",
        "normalized": "",
        "package": "system-time-monotonic",
        "partial": "Clock",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-time-monotonic/docs/System-Time-Monotonic.html#v:newClockWithDriver",
      "description": {
        "fct-descr": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003enewClock\u003c/a\u003e\u003c/code\u003e that uses the given driver.  This can be used if you\n want to use a different time source than the default.\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003enewClock\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003enewClockWithDriver\u003c/a\u003e\u003c/code\u003e =\u003c\u003c \u003ccode\u003e\u003ca\u003egetSystemClock\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
        "fct-module": "System.Time.Monotonic",
        "fct-package": "system-time-monotonic",
        "fct-signature": "SomeSystemClock -\u003e IO Clock",
        "fct-source": "src/System-Time-Monotonic.html#newClockWithDriver",
        "fct-type": "function",
        "title": "newClockWithDriver"
      },
      "index": {
        "description": "Variant of newClock that uses the given driver This can be used if you want to use different time source than the default newClock newClockWithDriver getSystemClock",
        "hierarchy": "System Time Monotonic",
        "module": "System.Time.Monotonic",
        "name": "newClockWithDriver",
        "normalized": "SomeSystemClock-\u003eIO Clock",
        "package": "system-time-monotonic",
        "partial": "Clock With Driver",
        "signature": "SomeSystemClock-\u003eIO Clock"
      }
    }
  }
]