[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/posix-timer/docs/System-Posix-Clock.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePOSIX clocks.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Posix.Clock",
        "fct-package": "posix-timer",
        "fct-signature": "module",
        "fct-source": "src/System-Posix-Clock.html",
        "fct-type": "module",
        "title": "Clock"
      },
      "index": {
        "description": "POSIX clocks",
        "hierarchy": "System Posix Clock",
        "module": "System.Posix.Clock",
        "name": "Clock",
        "normalized": "",
        "package": "posix-timer",
        "partial": "Clock",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/posix-timer/docs/System-Posix-Clock.html#t:Clock",
      "description": {
        "fct-descr": "\u003cp\u003eMirrors \u003cem\u003eclockid_t\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Posix.Clock",
        "fct-package": "posix-timer",
        "fct-signature": "newtype",
        "fct-source": "src/System-Posix-Clock.html#Clock",
        "fct-type": "newtype",
        "title": "Clock"
      },
      "index": {
        "description": "Mirrors clockid",
        "hierarchy": "System Posix Clock",
        "module": "System.Posix.Clock",
        "name": "Clock",
        "normalized": "",
        "package": "posix-timer",
        "partial": "Clock",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/posix-timer/docs/System-Posix-Clock.html#t:TimeSpec",
      "description": {
        "fct-descr": "\u003cp\u003eMirrors \u003cem\u003estruct timespec\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Posix.Clock",
        "fct-package": "posix-timer",
        "fct-signature": "data",
        "fct-source": "src/System-Posix-Clock.html#TimeSpec",
        "fct-type": "data",
        "title": "TimeSpec"
      },
      "index": {
        "description": "Mirrors struct timespec",
        "hierarchy": "System Posix Clock",
        "module": "System.Posix.Clock",
        "name": "TimeSpec",
        "normalized": "",
        "package": "posix-timer",
        "partial": "Time Spec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/posix-timer/docs/System-Posix-Clock.html#v:Clock",
      "description": {
        "fct-module": "System.Posix.Clock",
        "fct-package": "posix-timer",
        "fct-signature": "Clock Int32",
        "fct-source": "src/System-Posix-Clock.html#Clock",
        "fct-type": "function",
        "title": "Clock"
      },
      "index": {
        "description": "",
        "hierarchy": "System Posix Clock",
        "module": "System.Posix.Clock",
        "name": "Clock",
        "normalized": "",
        "package": "posix-timer",
        "partial": "Clock",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/posix-timer/docs/System-Posix-Clock.html#v:clockSleep",
      "description": {
        "fct-descr": "\u003cp\u003eSleep for the specified duration. When interrupted by a signal, returns\n   the amount of time left to sleep. See \u003cem\u003eclock_nanosleep(3)\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Posix.Clock",
        "fct-package": "posix-timer",
        "fct-signature": "Clock -\u003e TimeSpec -\u003e μ TimeSpec",
        "fct-source": "src/System-Posix-Clock.html#clockSleep",
        "fct-type": "function",
        "title": "clockSleep"
      },
      "index": {
        "description": "Sleep for the specified duration When interrupted by signal returns the amount of time left to sleep See clock nanosleep",
        "hierarchy": "System Posix Clock",
        "module": "System.Posix.Clock",
        "name": "clockSleep",
        "normalized": "Clock-\u003eTimeSpec-\u003ea TimeSpec",
        "package": "posix-timer",
        "partial": "Sleep",
        "signature": "Clock-\u003eTimeSpec-\u003eμ TimeSpec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/posix-timer/docs/System-Posix-Clock.html#v:clockSleepAbs",
      "description": {
        "fct-descr": "\u003cp\u003eSleep until the clock time reaches the specified value.\n   See \u003cem\u003eclock_nanosleep(3)\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Posix.Clock",
        "fct-package": "posix-timer",
        "fct-signature": "Clock -\u003e TimeSpec -\u003e μ ()",
        "fct-source": "src/System-Posix-Clock.html#clockSleepAbs",
        "fct-type": "function",
        "title": "clockSleepAbs"
      },
      "index": {
        "description": "Sleep until the clock time reaches the specified value See clock nanosleep",
        "hierarchy": "System Posix Clock",
        "module": "System.Posix.Clock",
        "name": "clockSleepAbs",
        "normalized": "Clock-\u003eTimeSpec-\u003ea()",
        "package": "posix-timer",
        "partial": "Sleep Abs",
        "signature": "Clock-\u003eTimeSpec-\u003eμ()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/posix-timer/docs/System-Posix-Clock.html#v:getClockResolution",
      "description": {
        "fct-descr": "\u003cp\u003eGet the clock resolution. See \u003cem\u003eclock_getres(3)\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Posix.Clock",
        "fct-package": "posix-timer",
        "fct-signature": "Clock -\u003e μ TimeSpec",
        "fct-source": "src/System-Posix-Clock.html#getClockResolution",
        "fct-type": "function",
        "title": "getClockResolution"
      },
      "index": {
        "description": "Get the clock resolution See clock getres",
        "hierarchy": "System Posix Clock",
        "module": "System.Posix.Clock",
        "name": "getClockResolution",
        "normalized": "Clock-\u003ea TimeSpec",
        "package": "posix-timer",
        "partial": "Clock Resolution",
        "signature": "Clock-\u003eμ TimeSpec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/posix-timer/docs/System-Posix-Clock.html#v:getClockTime",
      "description": {
        "fct-descr": "\u003cp\u003eGet the clock time. See \u003cem\u003eclock_gettime(3)\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Posix.Clock",
        "fct-package": "posix-timer",
        "fct-signature": "Clock -\u003e μ TimeSpec",
        "fct-source": "src/System-Posix-Clock.html#getClockTime",
        "fct-type": "function",
        "title": "getClockTime"
      },
      "index": {
        "description": "Get the clock time See clock gettime",
        "hierarchy": "System Posix Clock",
        "module": "System.Posix.Clock",
        "name": "getClockTime",
        "normalized": "Clock-\u003ea TimeSpec",
        "package": "posix-timer",
        "partial": "Clock Time",
        "signature": "Clock-\u003eμ TimeSpec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/posix-timer/docs/System-Posix-Clock.html#v:getProcessClock",
      "description": {
        "fct-descr": "\u003cp\u003eGet the CPU-time clock of the given process.\n   See \u003cem\u003eclock_getcpuclockid(3)\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Posix.Clock",
        "fct-package": "posix-timer",
        "fct-signature": "ProcessID -\u003e μ Clock",
        "fct-source": "src/System-Posix-Clock.html#getProcessClock",
        "fct-type": "function",
        "title": "getProcessClock"
      },
      "index": {
        "description": "Get the CPU-time clock of the given process See clock getcpuclockid",
        "hierarchy": "System Posix Clock",
        "module": "System.Posix.Clock",
        "name": "getProcessClock",
        "normalized": "ProcessID-\u003ea Clock",
        "package": "posix-timer",
        "partial": "Process Clock",
        "signature": "ProcessID-\u003eμ Clock"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/posix-timer/docs/System-Posix-Clock.html#v:mkTimeSpec",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eTimeSpec\u003c/a\u003e\u003c/code\u003e from amounts of seconds and nanoseconds.\n\u003c/p\u003e",
        "fct-module": "System.Posix.Clock",
        "fct-package": "posix-timer",
        "fct-signature": "CTime -\u003e CULong -\u003e TimeSpec",
        "fct-source": "src/System-Posix-Clock.html#mkTimeSpec",
        "fct-type": "function",
        "title": "mkTimeSpec"
      },
      "index": {
        "description": "Create TimeSpec from amounts of seconds and nanoseconds",
        "hierarchy": "System Posix Clock",
        "module": "System.Posix.Clock",
        "name": "mkTimeSpec",
        "normalized": "CTime-\u003eCULong-\u003eTimeSpec",
        "package": "posix-timer",
        "partial": "Time Spec",
        "signature": "CTime-\u003eCULong-\u003eTimeSpec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/posix-timer/docs/System-Posix-Clock.html#v:monotonicClock",
      "description": {
        "fct-module": "System.Posix.Clock",
        "fct-package": "posix-timer",
        "fct-signature": "Clock",
        "fct-source": "src/System-Posix-Clock.html#monotonicClock",
        "fct-type": "function",
        "title": "monotonicClock"
      },
      "index": {
        "description": "",
        "hierarchy": "System Posix Clock",
        "module": "System.Posix.Clock",
        "name": "monotonicClock",
        "normalized": "",
        "package": "posix-timer",
        "partial": "Clock",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/posix-timer/docs/System-Posix-Clock.html#v:processTimeClock",
      "description": {
        "fct-module": "System.Posix.Clock",
        "fct-package": "posix-timer",
        "fct-signature": "Clock",
        "fct-source": "src/System-Posix-Clock.html#processTimeClock",
        "fct-type": "function",
        "title": "processTimeClock"
      },
      "index": {
        "description": "",
        "hierarchy": "System Posix Clock",
        "module": "System.Posix.Clock",
        "name": "processTimeClock",
        "normalized": "",
        "package": "posix-timer",
        "partial": "Time Clock",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/posix-timer/docs/System-Posix-Clock.html#v:realtimeClock",
      "description": {
        "fct-module": "System.Posix.Clock",
        "fct-package": "posix-timer",
        "fct-signature": "Clock",
        "fct-source": "src/System-Posix-Clock.html#realtimeClock",
        "fct-type": "function",
        "title": "realtimeClock"
      },
      "index": {
        "description": "",
        "hierarchy": "System Posix Clock",
        "module": "System.Posix.Clock",
        "name": "realtimeClock",
        "normalized": "",
        "package": "posix-timer",
        "partial": "Clock",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/posix-timer/docs/System-Posix-Clock.html#v:setClockTime",
      "description": {
        "fct-descr": "\u003cp\u003eSet the clock time. See \u003cem\u003eclock_settime(3)\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Posix.Clock",
        "fct-package": "posix-timer",
        "fct-signature": "Clock -\u003e TimeSpec -\u003e μ ()",
        "fct-source": "src/System-Posix-Clock.html#setClockTime",
        "fct-type": "function",
        "title": "setClockTime"
      },
      "index": {
        "description": "Set the clock time See clock settime",
        "hierarchy": "System Posix Clock",
        "module": "System.Posix.Clock",
        "name": "setClockTime",
        "normalized": "Clock-\u003eTimeSpec-\u003ea()",
        "package": "posix-timer",
        "partial": "Clock Time",
        "signature": "Clock-\u003eTimeSpec-\u003eμ()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/posix-timer/docs/System-Posix-Clock.html#v:threadTimeClock",
      "description": {
        "fct-module": "System.Posix.Clock",
        "fct-package": "posix-timer",
        "fct-signature": "Clock",
        "fct-source": "src/System-Posix-Clock.html#threadTimeClock",
        "fct-type": "function",
        "title": "threadTimeClock"
      },
      "index": {
        "description": "",
        "hierarchy": "System Posix Clock",
        "module": "System.Posix.Clock",
        "name": "threadTimeClock",
        "normalized": "",
        "package": "posix-timer",
        "partial": "Time Clock",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/posix-timer/docs/System-Posix-Clock.html#v:timeSpecNanos",
      "description": {
        "fct-module": "System.Posix.Clock",
        "fct-package": "posix-timer",
        "fct-signature": "TimeSpec -\u003e CULong",
        "fct-source": "src/System-Posix-Clock.html#timeSpecNanos",
        "fct-type": "function",
        "title": "timeSpecNanos"
      },
      "index": {
        "description": "",
        "hierarchy": "System Posix Clock",
        "module": "System.Posix.Clock",
        "name": "timeSpecNanos",
        "normalized": "TimeSpec-\u003eCULong",
        "package": "posix-timer",
        "partial": "Spec Nanos",
        "signature": "TimeSpec-\u003eCULong"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/posix-timer/docs/System-Posix-Clock.html#v:timeSpecSeconds",
      "description": {
        "fct-module": "System.Posix.Clock",
        "fct-package": "posix-timer",
        "fct-signature": "TimeSpec -\u003e CTime",
        "fct-source": "src/System-Posix-Clock.html#timeSpecSeconds",
        "fct-type": "function",
        "title": "timeSpecSeconds"
      },
      "index": {
        "description": "",
        "hierarchy": "System Posix Clock",
        "module": "System.Posix.Clock",
        "name": "timeSpecSeconds",
        "normalized": "TimeSpec-\u003eCTime",
        "package": "posix-timer",
        "partial": "Spec Seconds",
        "signature": "TimeSpec-\u003eCTime"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/posix-timer/docs/System-Posix-Clock.html#v:timeSpecToInt64",
      "description": {
        "fct-module": "System.Posix.Clock",
        "fct-package": "posix-timer",
        "fct-signature": "TimeSpec -\u003e Int64",
        "fct-source": "src/System-Posix-Clock.html#timeSpecToInt64",
        "fct-type": "function",
        "title": "timeSpecToInt64"
      },
      "index": {
        "description": "",
        "hierarchy": "System Posix Clock",
        "module": "System.Posix.Clock",
        "name": "timeSpecToInt64",
        "normalized": "TimeSpec-\u003eInt",
        "package": "posix-timer",
        "partial": "Spec To Int",
        "signature": "TimeSpec-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/posix-timer/docs/System-Posix-Clock.html#v:timeSpecV",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eTimeSpec\u003c/a\u003e\u003c/code\u003e to a pair of its components.\n   Useful as a view pattern.\n\u003c/p\u003e",
        "fct-module": "System.Posix.Clock",
        "fct-package": "posix-timer",
        "fct-signature": "TimeSpec -\u003e (CTime, CULong)",
        "fct-source": "src/System-Posix-Clock.html#timeSpecV",
        "fct-type": "function",
        "title": "timeSpecV"
      },
      "index": {
        "description": "Convert TimeSpec to pair of its components Useful as view pattern",
        "hierarchy": "System Posix Clock",
        "module": "System.Posix.Clock",
        "name": "timeSpecV",
        "normalized": "TimeSpec-\u003e(CTime,CULong)",
        "package": "posix-timer",
        "partial": "Spec",
        "signature": "TimeSpec-\u003e(CTime,CULong)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/posix-timer/docs/System-Posix-Timer.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePOSIX timers.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Posix.Timer",
        "fct-package": "posix-timer",
        "fct-signature": "module",
        "fct-source": "src/System-Posix-Timer.html",
        "fct-type": "module",
        "title": "Timer"
      },
      "index": {
        "description": "POSIX timers",
        "hierarchy": "System Posix Timer",
        "module": "System.Posix.Timer",
        "name": "Timer",
        "normalized": "",
        "package": "posix-timer",
        "partial": "Timer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/posix-timer/docs/System-Posix-Timer.html#t:ITimerSpec",
      "description": {
        "fct-descr": "\u003cp\u003eMirrors \u003cem\u003estruct itimerspec\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Posix.Timer",
        "fct-package": "posix-timer",
        "fct-signature": "data",
        "fct-source": "src/System-Posix-Timer.html#ITimerSpec",
        "fct-type": "data",
        "title": "ITimerSpec"
      },
      "index": {
        "description": "Mirrors struct itimerspec",
        "hierarchy": "System Posix Timer",
        "module": "System.Posix.Timer",
        "name": "ITimerSpec",
        "normalized": "",
        "package": "posix-timer",
        "partial": "ITimer Spec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/posix-timer/docs/System-Posix-Timer.html#t:Timer",
      "description": {
        "fct-descr": "\u003cp\u003eMirrors \u003cem\u003etimer_t\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Posix.Timer",
        "fct-package": "posix-timer",
        "fct-signature": "data",
        "fct-source": "src/System-Posix-Timer.html#Timer",
        "fct-type": "data",
        "title": "Timer"
      },
      "index": {
        "description": "Mirrors timer",
        "hierarchy": "System Posix Timer",
        "module": "System.Posix.Timer",
        "name": "Timer",
        "normalized": "",
        "package": "posix-timer",
        "partial": "Timer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/posix-timer/docs/System-Posix-Timer.html#v:ITimerSpec",
      "description": {
        "fct-module": "System.Posix.Timer",
        "fct-package": "posix-timer",
        "fct-signature": "ITimerSpec",
        "fct-source": "src/System-Posix-Timer.html#ITimerSpec",
        "fct-type": "function",
        "title": "ITimerSpec"
      },
      "index": {
        "description": "",
        "hierarchy": "System Posix Timer",
        "module": "System.Posix.Timer",
        "name": "ITimerSpec",
        "normalized": "",
        "package": "posix-timer",
        "partial": "ITimer Spec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/posix-timer/docs/System-Posix-Timer.html#v:configureTimer",
      "description": {
        "fct-descr": "\u003cp\u003eSetup the timer. See \u003cem\u003etimer_settime(3)\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Posix.Timer",
        "fct-package": "posix-timer",
        "fct-signature": "Timer-\u003e Bool-\u003e TimeSpec-\u003e TimeSpec-\u003e μ (TimeSpec, TimeSpec)",
        "fct-type": "function",
        "title": "configureTimer"
      },
      "index": {
        "description": "Setup the timer See timer settime",
        "hierarchy": "System Posix Timer",
        "module": "System.Posix.Timer",
        "name": "configureTimer",
        "normalized": "Timer-\u003eBool-\u003eTimeSpec-\u003eTimeSpec-\u003ea(TimeSpec,TimeSpec)",
        "package": "posix-timer",
        "partial": "Timer",
        "signature": "Timer-\u003eBool-\u003eTimeSpec-\u003eTimeSpec-\u003eμ(TimeSpec,TimeSpec)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/posix-timer/docs/System-Posix-Timer.html#v:createTimer",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a timer. See \u003cem\u003etimer_create(3)\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Posix.Timer",
        "fct-package": "posix-timer",
        "fct-signature": "Clock-\u003e Maybe (Signal, WordPtr)-\u003e μ Timer",
        "fct-type": "function",
        "title": "createTimer"
      },
      "index": {
        "description": "Create timer See timer create",
        "hierarchy": "System Posix Timer",
        "module": "System.Posix.Timer",
        "name": "createTimer",
        "normalized": "Clock-\u003eMaybe(Signal,WordPtr)-\u003ea Timer",
        "package": "posix-timer",
        "partial": "Timer",
        "signature": "Clock-\u003eMaybe(Signal,WordPtr)-\u003eμ Timer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/posix-timer/docs/System-Posix-Timer.html#v:destroyTimer",
      "description": {
        "fct-descr": "\u003cp\u003eDestroy the timer. See \u003cem\u003etimer_delete(3)\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Posix.Timer",
        "fct-package": "posix-timer",
        "fct-signature": "Timer -\u003e μ ()",
        "fct-source": "src/System-Posix-Timer.html#destroyTimer",
        "fct-type": "function",
        "title": "destroyTimer"
      },
      "index": {
        "description": "Destroy the timer See timer delete",
        "hierarchy": "System Posix Timer",
        "module": "System.Posix.Timer",
        "name": "destroyTimer",
        "normalized": "Timer-\u003ea()",
        "package": "posix-timer",
        "partial": "Timer",
        "signature": "Timer-\u003eμ()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/posix-timer/docs/System-Posix-Timer.html#v:iTimerSpecInterval",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Posix.Timer",
        "fct-package": "posix-timer",
        "fct-signature": "!TimeSpec",
        "fct-source": "src/System-Posix-Timer.html#ITimerSpec",
        "fct-type": "function",
        "title": "iTimerSpecInterval"
      },
      "index": {
        "description": "",
        "hierarchy": "System Posix Timer",
        "module": "System.Posix.Timer",
        "name": "iTimerSpecInterval",
        "normalized": "",
        "package": "posix-timer",
        "partial": "Timer Spec Interval",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/posix-timer/docs/System-Posix-Timer.html#v:iTimerSpecValue",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Posix.Timer",
        "fct-package": "posix-timer",
        "fct-signature": "!TimeSpec",
        "fct-source": "src/System-Posix-Timer.html#ITimerSpec",
        "fct-type": "function",
        "title": "iTimerSpecValue"
      },
      "index": {
        "description": "",
        "hierarchy": "System Posix Timer",
        "module": "System.Posix.Timer",
        "name": "iTimerSpecValue",
        "normalized": "",
        "package": "posix-timer",
        "partial": "Timer Spec Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/posix-timer/docs/System-Posix-Timer.html#v:timerOverrunCnt",
      "description": {
        "fct-descr": "\u003cp\u003eGet the timer overrun count. See \u003cem\u003etimer_getoverrun(3)\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Posix.Timer",
        "fct-package": "posix-timer",
        "fct-signature": "Timer -\u003e μ CInt",
        "fct-source": "src/System-Posix-Timer.html#timerOverrunCnt",
        "fct-type": "function",
        "title": "timerOverrunCnt"
      },
      "index": {
        "description": "Get the timer overrun count See timer getoverrun",
        "hierarchy": "System Posix Timer",
        "module": "System.Posix.Timer",
        "name": "timerOverrunCnt",
        "normalized": "Timer-\u003ea CInt",
        "package": "posix-timer",
        "partial": "Overrun Cnt",
        "signature": "Timer-\u003eμ CInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/posix-timer/docs/System-Posix-Timer.html#v:timerTimeLeft",
      "description": {
        "fct-descr": "\u003cp\u003eGet the amount of time left until the next expiration and the interval\n   between the subsequent expirations. See \u003cem\u003etimer_gettime(3)\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Posix.Timer",
        "fct-package": "posix-timer",
        "fct-signature": "Timer -\u003e μ (TimeSpec, TimeSpec)",
        "fct-source": "src/System-Posix-Timer.html#timerTimeLeft",
        "fct-type": "function",
        "title": "timerTimeLeft"
      },
      "index": {
        "description": "Get the amount of time left until the next expiration and the interval between the subsequent expirations See timer gettime",
        "hierarchy": "System Posix Timer",
        "module": "System.Posix.Timer",
        "name": "timerTimeLeft",
        "normalized": "Timer-\u003ea(TimeSpec,TimeSpec)",
        "package": "posix-timer",
        "partial": "Time Left",
        "signature": "Timer-\u003eμ(TimeSpec,TimeSpec)"
      }
    }
  }
]