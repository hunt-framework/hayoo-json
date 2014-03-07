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
        "word": "clock"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHigh-resolution, realtime clock and timer functions for Posix\n   systems. This module is being developed according to IEEE Std\n   1003.1-2008: \u003ca\u003ehttp://www.opengroup.org/onlinepubs/9699919799/\u003c/a\u003e,\n   \u003ca\u003ehttp://www.opengroup.org/onlinepubs/9699919799/functions/clock_getres.html#\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Clock",
          "name": "Clock",
          "package": "clock",
          "source": "src/System-Clock.html",
          "type": "module"
        },
        "index": {
          "description": "High-resolution realtime clock and timer functions for Posix systems This module is being developed according to IEEE Std http www.opengroup.org onlinepubs http www.opengroup.org onlinepubs functions clock getres.html",
          "hierarchy": "System Clock",
          "module": "System.Clock",
          "name": "Clock",
          "package": "clock",
          "partial": "Clock",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/clock/docs/System-Clock.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClock types.\n   A clock may be system-wide (that is, visible to all processes)\n   or per-process (measuring time that is meaningful only within\n   a process). All implementations shall support CLOCK_REALTIME.\n\u003c/p\u003e",
          "module": "System.Clock",
          "name": "Clock",
          "package": "clock",
          "source": "src/System-Clock.html#Clock",
          "type": "data"
        },
        "index": {
          "description": "Clock types clock may be system-wide that is visible to all processes or per-process measuring time that is meaningful only within process All implementations shall support CLOCK REALTIME",
          "hierarchy": "System Clock",
          "module": "System.Clock",
          "name": "Clock",
          "package": "clock",
          "partial": "Clock",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/clock/docs/System-Clock.html#t:Clock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTimeSpec structure\n\u003c/p\u003e",
          "module": "System.Clock",
          "name": "TimeSpec",
          "package": "clock",
          "source": "src/System-Clock.html#TimeSpec",
          "type": "data"
        },
        "index": {
          "description": "TimeSpec structure",
          "hierarchy": "System Clock",
          "module": "System.Clock",
          "name": "TimeSpec",
          "package": "clock",
          "partial": "Time Spec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/clock/docs/System-Clock.html#t:TimeSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe identifier for the system-wide monotonic clock, which is defined as a clock measuring real time, whose value cannot be set via clock_settime and which cannot have negative clock jumps. The maximum possible clock jump shall be implementation-defined. For this clock, the value returned by \u003ccode\u003e\u003ca\u003egetTime\u003c/a\u003e\u003c/code\u003e represents the amount of time (in seconds and nanoseconds) since an unspecified point in the past (for example, system start-up time, or the Epoch). This point does not change after system start-up time. Note that the absolute value of the monotonic clock is meaningless (because its origin is arbitrary), and thus there is no need to set it. Furthermore, realtime applications can rely on the fact that the value of this clock is never set.\n\u003c/p\u003e",
          "module": "System.Clock",
          "name": "Monotonic",
          "package": "clock",
          "signature": "Monotonic",
          "source": "src/System-Clock.html#Clock",
          "type": "function"
        },
        "index": {
          "description": "The identifier for the system-wide monotonic clock which is defined as clock measuring real time whose value cannot be set via clock settime and which cannot have negative clock jumps The maximum possible clock jump shall be implementation-defined For this clock the value returned by getTime represents the amount of time in seconds and nanoseconds since an unspecified point in the past for example system start-up time or the Epoch This point does not change after system start-up time Note that the absolute value of the monotonic clock is meaningless because its origin is arbitrary and thus there is no need to set it Furthermore realtime applications can rely on the fact that the value of this clock is never set",
          "hierarchy": "System Clock",
          "module": "System.Clock",
          "name": "Monotonic",
          "package": "clock",
          "partial": "Monotonic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clock/docs/System-Clock.html#v:Monotonic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe identifier of the CPU-time clock associated with the calling process. For this clock, the value returned by getTime represents the amount of execution time of the current process.\n\u003c/p\u003e",
          "module": "System.Clock",
          "name": "ProcessCPUTime",
          "package": "clock",
          "signature": "ProcessCPUTime",
          "source": "src/System-Clock.html#Clock",
          "type": "function"
        },
        "index": {
          "description": "The identifier of the CPU-time clock associated with the calling process For this clock the value returned by getTime represents the amount of execution time of the current process",
          "hierarchy": "System Clock",
          "module": "System.Clock",
          "name": "ProcessCPUTime",
          "package": "clock",
          "partial": "Process CPUTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clock/docs/System-Clock.html#v:ProcessCPUTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe identifier of the system-wide clock measuring real time. For this clock, the value returned by getTime represents the amount of time (in seconds and nanoseconds) since the Epoch.\n\u003c/p\u003e",
          "module": "System.Clock",
          "name": "Realtime",
          "package": "clock",
          "signature": "Realtime",
          "source": "src/System-Clock.html#Clock",
          "type": "function"
        },
        "index": {
          "description": "The identifier of the system-wide clock measuring real time For this clock the value returned by getTime represents the amount of time in seconds and nanoseconds since the Epoch",
          "hierarchy": "System Clock",
          "module": "System.Clock",
          "name": "Realtime",
          "package": "clock",
          "partial": "Realtime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clock/docs/System-Clock.html#v:Realtime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe identifier of the CPU-time clock associated with the calling OS thread. For this clock, the value returned by getTime represents the amount of execution time of the current OS thread.\n\u003c/p\u003e",
          "module": "System.Clock",
          "name": "ThreadCPUTime",
          "package": "clock",
          "signature": "ThreadCPUTime",
          "source": "src/System-Clock.html#Clock",
          "type": "function"
        },
        "index": {
          "description": "The identifier of the CPU-time clock associated with the calling OS thread For this clock the value returned by getTime represents the amount of execution time of the current OS thread",
          "hierarchy": "System Clock",
          "module": "System.Clock",
          "name": "ThreadCPUTime",
          "package": "clock",
          "partial": "Thread CPUTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clock/docs/System-Clock.html#v:ThreadCPUTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Clock",
          "name": "TimeSpec",
          "package": "clock",
          "signature": "TimeSpec !Int !Int",
          "source": "src/System-Clock.html#TimeSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Clock",
          "module": "System.Clock",
          "name": "TimeSpec",
          "package": "clock",
          "partial": "Time Spec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clock/docs/System-Clock.html#v:TimeSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egetRes\u003c/a\u003e\u003c/code\u003e function shall return the resolution of any clock.\n   Clock resolutions are implementation-defined and cannot be set\n   by a process.\n\u003c/p\u003e",
          "module": "System.Clock",
          "name": "getRes",
          "package": "clock",
          "signature": "Clock -\u003e IO TimeSpec",
          "source": "src/System-Clock.html#getRes",
          "type": "function"
        },
        "index": {
          "description": "The getRes function shall return the resolution of any clock Clock resolutions are implementation-defined and cannot be set by process",
          "hierarchy": "System Clock",
          "module": "System.Clock",
          "name": "getRes",
          "normalized": "Clock-\u003eIO TimeSpec",
          "package": "clock",
          "partial": "Res",
          "signature": "Clock-\u003eIO TimeSpec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clock/docs/System-Clock.html#v:getRes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egetTime\u003c/a\u003e\u003c/code\u003e function shall return the current value for the\n   specified clock.\n\u003c/p\u003e",
          "module": "System.Clock",
          "name": "getTime",
          "package": "clock",
          "signature": "Clock -\u003e IO TimeSpec",
          "source": "src/System-Clock.html#getTime",
          "type": "function"
        },
        "index": {
          "description": "The getTime function shall return the current value for the specified clock",
          "hierarchy": "System Clock",
          "module": "System.Clock",
          "name": "getTime",
          "normalized": "Clock-\u003eIO TimeSpec",
          "package": "clock",
          "partial": "Time",
          "signature": "Clock-\u003eIO TimeSpec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clock/docs/System-Clock.html#v:getTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets nanoseconds of a timespec value.\n\u003c/p\u003e",
          "module": "System.Clock",
          "name": "nsec",
          "package": "clock",
          "signature": "TimeSpec -\u003e Int",
          "source": "src/System-Clock.html#nsec",
          "type": "function"
        },
        "index": {
          "description": "Gets nanoseconds of timespec value",
          "hierarchy": "System Clock",
          "module": "System.Clock",
          "name": "nsec",
          "normalized": "TimeSpec-\u003eInt",
          "package": "clock",
          "signature": "TimeSpec-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clock/docs/System-Clock.html#v:nsec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets     seconds of a timespec value.\n\u003c/p\u003e",
          "module": "System.Clock",
          "name": "sec",
          "package": "clock",
          "signature": "TimeSpec -\u003e Int",
          "source": "src/System-Clock.html#sec",
          "type": "function"
        },
        "index": {
          "description": "Gets seconds of timespec value",
          "hierarchy": "System Clock",
          "module": "System.Clock",
          "name": "sec",
          "normalized": "TimeSpec-\u003eInt",
          "package": "clock",
          "signature": "TimeSpec-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clock/docs/System-Clock.html#v:sec"
      }
    }
  ]
]