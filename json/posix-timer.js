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
        "word": "posix-timer"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePOSIX clocks.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Posix.Clock",
          "name": "Clock",
          "package": "posix-timer",
          "source": "src/System-Posix-Clock.html",
          "type": "module"
        },
        "index": {
          "description": "POSIX clocks",
          "hierarchy": "System Posix Clock",
          "module": "System.Posix.Clock",
          "name": "Clock",
          "package": "posix-timer",
          "partial": "Clock",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/posix-timer/docs/System-Posix-Clock.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMirrors \u003cem\u003eclockid_t\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.Clock",
          "name": "Clock",
          "package": "posix-timer",
          "source": "src/System-Posix-Clock.html#Clock",
          "type": "newtype"
        },
        "index": {
          "description": "Mirrors clockid",
          "hierarchy": "System Posix Clock",
          "module": "System.Posix.Clock",
          "name": "Clock",
          "package": "posix-timer",
          "partial": "Clock",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/posix-timer/docs/System-Posix-Clock.html#t:Clock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMirrors \u003cem\u003estruct timespec\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.Clock",
          "name": "TimeSpec",
          "package": "posix-timer",
          "source": "src/System-Posix-Clock.html#TimeSpec",
          "type": "data"
        },
        "index": {
          "description": "Mirrors struct timespec",
          "hierarchy": "System Posix Clock",
          "module": "System.Posix.Clock",
          "name": "TimeSpec",
          "package": "posix-timer",
          "partial": "Time Spec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/posix-timer/docs/System-Posix-Clock.html#t:TimeSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Clock",
          "name": "Clock",
          "package": "posix-timer",
          "signature": "Clock Int32",
          "source": "src/System-Posix-Clock.html#Clock",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Clock",
          "module": "System.Posix.Clock",
          "name": "Clock",
          "package": "posix-timer",
          "partial": "Clock",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/posix-timer/docs/System-Posix-Clock.html#v:Clock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSleep for the specified duration. When interrupted by a signal, returns\n   the amount of time left to sleep. See \u003cem\u003eclock_nanosleep(3)\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.Clock",
          "name": "clockSleep",
          "package": "posix-timer",
          "signature": "Clock -\u003e TimeSpec -\u003e μ TimeSpec",
          "source": "src/System-Posix-Clock.html#clockSleep",
          "type": "function"
        },
        "index": {
          "description": "Sleep for the specified duration When interrupted by signal returns the amount of time left to sleep See clock nanosleep",
          "hierarchy": "System Posix Clock",
          "module": "System.Posix.Clock",
          "name": "clockSleep",
          "normalized": "Clock-\u003eTimeSpec-\u003ea TimeSpec",
          "package": "posix-timer",
          "partial": "Sleep",
          "signature": "Clock-\u003eTimeSpec-\u003eμ TimeSpec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/posix-timer/docs/System-Posix-Clock.html#v:clockSleep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSleep until the clock time reaches the specified value.\n   See \u003cem\u003eclock_nanosleep(3)\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.Clock",
          "name": "clockSleepAbs",
          "package": "posix-timer",
          "signature": "Clock -\u003e TimeSpec -\u003e μ ()",
          "source": "src/System-Posix-Clock.html#clockSleepAbs",
          "type": "function"
        },
        "index": {
          "description": "Sleep until the clock time reaches the specified value See clock nanosleep",
          "hierarchy": "System Posix Clock",
          "module": "System.Posix.Clock",
          "name": "clockSleepAbs",
          "normalized": "Clock-\u003eTimeSpec-\u003ea()",
          "package": "posix-timer",
          "partial": "Sleep Abs",
          "signature": "Clock-\u003eTimeSpec-\u003eμ()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/posix-timer/docs/System-Posix-Clock.html#v:clockSleepAbs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the clock resolution. See \u003cem\u003eclock_getres(3)\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.Clock",
          "name": "getClockResolution",
          "package": "posix-timer",
          "signature": "Clock -\u003e μ TimeSpec",
          "source": "src/System-Posix-Clock.html#getClockResolution",
          "type": "function"
        },
        "index": {
          "description": "Get the clock resolution See clock getres",
          "hierarchy": "System Posix Clock",
          "module": "System.Posix.Clock",
          "name": "getClockResolution",
          "normalized": "Clock-\u003ea TimeSpec",
          "package": "posix-timer",
          "partial": "Clock Resolution",
          "signature": "Clock-\u003eμ TimeSpec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/posix-timer/docs/System-Posix-Clock.html#v:getClockResolution"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the clock time. See \u003cem\u003eclock_gettime(3)\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.Clock",
          "name": "getClockTime",
          "package": "posix-timer",
          "signature": "Clock -\u003e μ TimeSpec",
          "source": "src/System-Posix-Clock.html#getClockTime",
          "type": "function"
        },
        "index": {
          "description": "Get the clock time See clock gettime",
          "hierarchy": "System Posix Clock",
          "module": "System.Posix.Clock",
          "name": "getClockTime",
          "normalized": "Clock-\u003ea TimeSpec",
          "package": "posix-timer",
          "partial": "Clock Time",
          "signature": "Clock-\u003eμ TimeSpec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/posix-timer/docs/System-Posix-Clock.html#v:getClockTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the CPU-time clock of the given process.\n   See \u003cem\u003eclock_getcpuclockid(3)\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.Clock",
          "name": "getProcessClock",
          "package": "posix-timer",
          "signature": "ProcessID -\u003e μ Clock",
          "source": "src/System-Posix-Clock.html#getProcessClock",
          "type": "function"
        },
        "index": {
          "description": "Get the CPU-time clock of the given process See clock getcpuclockid",
          "hierarchy": "System Posix Clock",
          "module": "System.Posix.Clock",
          "name": "getProcessClock",
          "normalized": "ProcessID-\u003ea Clock",
          "package": "posix-timer",
          "partial": "Process Clock",
          "signature": "ProcessID-\u003eμ Clock",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/posix-timer/docs/System-Posix-Clock.html#v:getProcessClock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eTimeSpec\u003c/a\u003e\u003c/code\u003e from amounts of seconds and nanoseconds.\n\u003c/p\u003e",
          "module": "System.Posix.Clock",
          "name": "mkTimeSpec",
          "package": "posix-timer",
          "signature": "CTime -\u003e CULong -\u003e TimeSpec",
          "source": "src/System-Posix-Clock.html#mkTimeSpec",
          "type": "function"
        },
        "index": {
          "description": "Create TimeSpec from amounts of seconds and nanoseconds",
          "hierarchy": "System Posix Clock",
          "module": "System.Posix.Clock",
          "name": "mkTimeSpec",
          "normalized": "CTime-\u003eCULong-\u003eTimeSpec",
          "package": "posix-timer",
          "partial": "Time Spec",
          "signature": "CTime-\u003eCULong-\u003eTimeSpec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/posix-timer/docs/System-Posix-Clock.html#v:mkTimeSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Clock",
          "name": "monotonicClock",
          "package": "posix-timer",
          "signature": "Clock",
          "source": "src/System-Posix-Clock.html#monotonicClock",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Clock",
          "module": "System.Posix.Clock",
          "name": "monotonicClock",
          "package": "posix-timer",
          "partial": "Clock",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/posix-timer/docs/System-Posix-Clock.html#v:monotonicClock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Clock",
          "name": "processTimeClock",
          "package": "posix-timer",
          "signature": "Clock",
          "source": "src/System-Posix-Clock.html#processTimeClock",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Clock",
          "module": "System.Posix.Clock",
          "name": "processTimeClock",
          "package": "posix-timer",
          "partial": "Time Clock",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/posix-timer/docs/System-Posix-Clock.html#v:processTimeClock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Clock",
          "name": "realtimeClock",
          "package": "posix-timer",
          "signature": "Clock",
          "source": "src/System-Posix-Clock.html#realtimeClock",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Clock",
          "module": "System.Posix.Clock",
          "name": "realtimeClock",
          "package": "posix-timer",
          "partial": "Clock",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/posix-timer/docs/System-Posix-Clock.html#v:realtimeClock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the clock time. See \u003cem\u003eclock_settime(3)\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.Clock",
          "name": "setClockTime",
          "package": "posix-timer",
          "signature": "Clock -\u003e TimeSpec -\u003e μ ()",
          "source": "src/System-Posix-Clock.html#setClockTime",
          "type": "function"
        },
        "index": {
          "description": "Set the clock time See clock settime",
          "hierarchy": "System Posix Clock",
          "module": "System.Posix.Clock",
          "name": "setClockTime",
          "normalized": "Clock-\u003eTimeSpec-\u003ea()",
          "package": "posix-timer",
          "partial": "Clock Time",
          "signature": "Clock-\u003eTimeSpec-\u003eμ()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/posix-timer/docs/System-Posix-Clock.html#v:setClockTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Clock",
          "name": "threadTimeClock",
          "package": "posix-timer",
          "signature": "Clock",
          "source": "src/System-Posix-Clock.html#threadTimeClock",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Clock",
          "module": "System.Posix.Clock",
          "name": "threadTimeClock",
          "package": "posix-timer",
          "partial": "Time Clock",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/posix-timer/docs/System-Posix-Clock.html#v:threadTimeClock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Clock",
          "name": "timeSpecNanos",
          "package": "posix-timer",
          "signature": "TimeSpec -\u003e CULong",
          "source": "src/System-Posix-Clock.html#timeSpecNanos",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Clock",
          "module": "System.Posix.Clock",
          "name": "timeSpecNanos",
          "normalized": "TimeSpec-\u003eCULong",
          "package": "posix-timer",
          "partial": "Spec Nanos",
          "signature": "TimeSpec-\u003eCULong",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/posix-timer/docs/System-Posix-Clock.html#v:timeSpecNanos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Clock",
          "name": "timeSpecSeconds",
          "package": "posix-timer",
          "signature": "TimeSpec -\u003e CTime",
          "source": "src/System-Posix-Clock.html#timeSpecSeconds",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Clock",
          "module": "System.Posix.Clock",
          "name": "timeSpecSeconds",
          "normalized": "TimeSpec-\u003eCTime",
          "package": "posix-timer",
          "partial": "Spec Seconds",
          "signature": "TimeSpec-\u003eCTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/posix-timer/docs/System-Posix-Clock.html#v:timeSpecSeconds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Clock",
          "name": "timeSpecToInt64",
          "package": "posix-timer",
          "signature": "TimeSpec -\u003e Int64",
          "source": "src/System-Posix-Clock.html#timeSpecToInt64",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Clock",
          "module": "System.Posix.Clock",
          "name": "timeSpecToInt64",
          "normalized": "TimeSpec-\u003eInt",
          "package": "posix-timer",
          "partial": "Spec To Int",
          "signature": "TimeSpec-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/posix-timer/docs/System-Posix-Clock.html#v:timeSpecToInt64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eTimeSpec\u003c/a\u003e\u003c/code\u003e to a pair of its components.\n   Useful as a view pattern.\n\u003c/p\u003e",
          "module": "System.Posix.Clock",
          "name": "timeSpecV",
          "package": "posix-timer",
          "signature": "TimeSpec -\u003e (CTime, CULong)",
          "source": "src/System-Posix-Clock.html#timeSpecV",
          "type": "function"
        },
        "index": {
          "description": "Convert TimeSpec to pair of its components Useful as view pattern",
          "hierarchy": "System Posix Clock",
          "module": "System.Posix.Clock",
          "name": "timeSpecV",
          "normalized": "TimeSpec-\u003e(CTime,CULong)",
          "package": "posix-timer",
          "partial": "Spec",
          "signature": "TimeSpec-\u003e(CTime,CULong)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/posix-timer/docs/System-Posix-Clock.html#v:timeSpecV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePOSIX timers.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Posix.Timer",
          "name": "Timer",
          "package": "posix-timer",
          "source": "src/System-Posix-Timer.html",
          "type": "module"
        },
        "index": {
          "description": "POSIX timers",
          "hierarchy": "System Posix Timer",
          "module": "System.Posix.Timer",
          "name": "Timer",
          "package": "posix-timer",
          "partial": "Timer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/posix-timer/docs/System-Posix-Timer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMirrors \u003cem\u003estruct itimerspec\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.Timer",
          "name": "ITimerSpec",
          "package": "posix-timer",
          "source": "src/System-Posix-Timer.html#ITimerSpec",
          "type": "data"
        },
        "index": {
          "description": "Mirrors struct itimerspec",
          "hierarchy": "System Posix Timer",
          "module": "System.Posix.Timer",
          "name": "ITimerSpec",
          "package": "posix-timer",
          "partial": "ITimer Spec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/posix-timer/docs/System-Posix-Timer.html#t:ITimerSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMirrors \u003cem\u003etimer_t\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.Timer",
          "name": "Timer",
          "package": "posix-timer",
          "source": "src/System-Posix-Timer.html#Timer",
          "type": "data"
        },
        "index": {
          "description": "Mirrors timer",
          "hierarchy": "System Posix Timer",
          "module": "System.Posix.Timer",
          "name": "Timer",
          "package": "posix-timer",
          "partial": "Timer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/posix-timer/docs/System-Posix-Timer.html#t:Timer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Timer",
          "name": "ITimerSpec",
          "package": "posix-timer",
          "signature": "ITimerSpec",
          "source": "src/System-Posix-Timer.html#ITimerSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Timer",
          "module": "System.Posix.Timer",
          "name": "ITimerSpec",
          "package": "posix-timer",
          "partial": "ITimer Spec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/posix-timer/docs/System-Posix-Timer.html#v:ITimerSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSetup the timer. See \u003cem\u003etimer_settime(3)\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.Timer",
          "name": "configureTimer",
          "package": "posix-timer",
          "signature": "Timer-\u003e Bool-\u003e TimeSpec-\u003e TimeSpec-\u003e μ (TimeSpec, TimeSpec)",
          "type": "function"
        },
        "index": {
          "description": "Setup the timer See timer settime",
          "hierarchy": "System Posix Timer",
          "module": "System.Posix.Timer",
          "name": "configureTimer",
          "normalized": "Timer-\u003eBool-\u003eTimeSpec-\u003eTimeSpec-\u003ea(TimeSpec,TimeSpec)",
          "package": "posix-timer",
          "partial": "Timer",
          "signature": "Timer-\u003eBool-\u003eTimeSpec-\u003eTimeSpec-\u003eμ(TimeSpec,TimeSpec)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/posix-timer/docs/System-Posix-Timer.html#v:configureTimer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a timer. See \u003cem\u003etimer_create(3)\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.Timer",
          "name": "createTimer",
          "package": "posix-timer",
          "signature": "Clock-\u003e Maybe (Signal, WordPtr)-\u003e μ Timer",
          "type": "function"
        },
        "index": {
          "description": "Create timer See timer create",
          "hierarchy": "System Posix Timer",
          "module": "System.Posix.Timer",
          "name": "createTimer",
          "normalized": "Clock-\u003eMaybe(Signal,WordPtr)-\u003ea Timer",
          "package": "posix-timer",
          "partial": "Timer",
          "signature": "Clock-\u003eMaybe(Signal,WordPtr)-\u003eμ Timer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/posix-timer/docs/System-Posix-Timer.html#v:createTimer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDestroy the timer. See \u003cem\u003etimer_delete(3)\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.Timer",
          "name": "destroyTimer",
          "package": "posix-timer",
          "signature": "Timer -\u003e μ ()",
          "source": "src/System-Posix-Timer.html#destroyTimer",
          "type": "function"
        },
        "index": {
          "description": "Destroy the timer See timer delete",
          "hierarchy": "System Posix Timer",
          "module": "System.Posix.Timer",
          "name": "destroyTimer",
          "normalized": "Timer-\u003ea()",
          "package": "posix-timer",
          "partial": "Timer",
          "signature": "Timer-\u003eμ()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/posix-timer/docs/System-Posix-Timer.html#v:destroyTimer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Timer",
          "name": "iTimerSpecInterval",
          "package": "posix-timer",
          "signature": "TimeSpec",
          "source": "src/System-Posix-Timer.html#ITimerSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Timer",
          "module": "System.Posix.Timer",
          "name": "iTimerSpecInterval",
          "package": "posix-timer",
          "partial": "Timer Spec Interval",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/posix-timer/docs/System-Posix-Timer.html#v:iTimerSpecInterval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Timer",
          "name": "iTimerSpecValue",
          "package": "posix-timer",
          "signature": "TimeSpec",
          "source": "src/System-Posix-Timer.html#ITimerSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Timer",
          "module": "System.Posix.Timer",
          "name": "iTimerSpecValue",
          "package": "posix-timer",
          "partial": "Timer Spec Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/posix-timer/docs/System-Posix-Timer.html#v:iTimerSpecValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the timer overrun count. See \u003cem\u003etimer_getoverrun(3)\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.Timer",
          "name": "timerOverrunCnt",
          "package": "posix-timer",
          "signature": "Timer -\u003e μ CInt",
          "source": "src/System-Posix-Timer.html#timerOverrunCnt",
          "type": "function"
        },
        "index": {
          "description": "Get the timer overrun count See timer getoverrun",
          "hierarchy": "System Posix Timer",
          "module": "System.Posix.Timer",
          "name": "timerOverrunCnt",
          "normalized": "Timer-\u003ea CInt",
          "package": "posix-timer",
          "partial": "Overrun Cnt",
          "signature": "Timer-\u003eμ CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/posix-timer/docs/System-Posix-Timer.html#v:timerOverrunCnt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the amount of time left until the next expiration and the interval\n   between the subsequent expirations. See \u003cem\u003etimer_gettime(3)\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.Timer",
          "name": "timerTimeLeft",
          "package": "posix-timer",
          "signature": "Timer -\u003e μ (TimeSpec, TimeSpec)",
          "source": "src/System-Posix-Timer.html#timerTimeLeft",
          "type": "function"
        },
        "index": {
          "description": "Get the amount of time left until the next expiration and the interval between the subsequent expirations See timer gettime",
          "hierarchy": "System Posix Timer",
          "module": "System.Posix.Timer",
          "name": "timerTimeLeft",
          "normalized": "Timer-\u003ea(TimeSpec,TimeSpec)",
          "package": "posix-timer",
          "partial": "Time Left",
          "signature": "Timer-\u003eμ(TimeSpec,TimeSpec)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/posix-timer/docs/System-Posix-Timer.html#v:timerTimeLeft"
      }
    }
  ]
]