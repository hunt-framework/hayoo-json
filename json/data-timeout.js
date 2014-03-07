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
        "word": "data-timeout"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Timeout",
          "name": "Timeout",
          "package": "data-timeout",
          "source": "src/Control-Concurrent-Timeout.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Concurrent Timeout",
          "module": "Control.Concurrent.Timeout",
          "name": "Timeout",
          "package": "data-timeout",
          "partial": "Timeout",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-timeout/docs/Control-Concurrent-Timeout.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003ethreadDelay\u003c/a\u003e\u003c/code\u003e that takes \u003ccode\u003e\u003ca\u003eTimeout\u003c/a\u003e\u003c/code\u003e instead of number of\n   microseconds.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Timeout",
          "name": "threadDelay",
          "package": "data-timeout",
          "signature": "Timeout -\u003e μ ()",
          "source": "src/Control-Concurrent-Timeout.html#threadDelay",
          "type": "function"
        },
        "index": {
          "description": "version of threadDelay that takes Timeout instead of number of microseconds",
          "hierarchy": "Control Concurrent Timeout",
          "module": "Control.Concurrent.Timeout",
          "name": "threadDelay",
          "normalized": "Timeout-\u003ea()",
          "package": "data-timeout",
          "partial": "Delay",
          "signature": "Timeout-\u003eμ()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-timeout/docs/Control-Concurrent-Timeout.html#v:threadDelay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003etimeout\u003c/a\u003e\u003c/code\u003e that takes \u003ccode\u003e\u003ca\u003eTimeout\u003c/a\u003e\u003c/code\u003e instead of number of\n   microseconds.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Timeout",
          "name": "timeout",
          "package": "data-timeout",
          "signature": "Timeout -\u003e IO α -\u003e μ (Maybe α)",
          "source": "src/Control-Concurrent-Timeout.html#timeout",
          "type": "function"
        },
        "index": {
          "description": "version of timeout that takes Timeout instead of number of microseconds",
          "hierarchy": "Control Concurrent Timeout",
          "module": "Control.Concurrent.Timeout",
          "name": "timeout",
          "normalized": "Timeout-\u003eIO a-\u003eb(Maybe a)",
          "package": "data-timeout",
          "signature": "Timeout-\u003eIO α-\u003eμ(Maybe α)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-timeout/docs/Control-Concurrent-Timeout.html#v:timeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Timeout",
          "name": "Timeout",
          "package": "data-timeout",
          "source": "src/Data-Timeout.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Timeout",
          "module": "Data.Timeout",
          "name": "Timeout",
          "package": "data-timeout",
          "partial": "Timeout",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-timeout/docs/Data-Timeout.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eException that is raised when an operation times out.\n   Not used by the package itself, it is here so that users don't need to\n   roll their own exception type every time.\n\u003c/p\u003e",
          "module": "Data.Timeout",
          "name": "TimedOut",
          "package": "data-timeout",
          "source": "src/Data-Timeout.html#TimedOut",
          "type": "data"
        },
        "index": {
          "description": "Exception that is raised when an operation times out Not used by the package itself it is here so that users don need to roll their own exception type every time",
          "hierarchy": "Data Timeout",
          "module": "Data.Timeout",
          "name": "TimedOut",
          "package": "data-timeout",
          "partial": "Timed Out",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-timeout/docs/Data-Timeout.html#t:TimedOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTimeout in nanoseconds. The \u003ccode\u003e\u003ca\u003ePrintable\u003c/a\u003e\u003c/code\u003e instance renders timeouts as\n   series of \u003cem\u003eAmount\u003c/em\u003e\u003ccode\u003eUnit\u003c/code\u003e tokens, e.g.\n\u003c/p\u003e\u003cpre\u003e\n      \u003ccode\u003e\u003ca\u003etoString\u003c/a\u003e\u003c/code\u003e (\u003cem\u003e1\u003c/em\u003e # \u003ccode\u003e\u003ca\u003eDay\u003c/a\u003e\u003c/code\u003e + \u003cem\u003e1500\u003c/em\u003e # \u003ccode\u003e\u003ca\u003eMilliSecond\u003c/a\u003e\u003c/code\u003e) = \u003cem\u003e\"1d1s500ms\"\u003c/em\u003e\n\u003c/pre\u003e\u003cp\u003eThe full list of timeout unit abbreviations:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eNanoSecond\u003c/a\u003e\u003c/code\u003e - \u003cem\u003ens\u003c/em\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eMicroSecond\u003c/a\u003e\u003c/code\u003e - \u003cem\u003eus\u003c/em\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eMilliSecond\u003c/a\u003e\u003c/code\u003e - \u003cem\u003ems\u003c/em\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eSecond\u003c/a\u003e\u003c/code\u003e - \u003cem\u003es\u003c/em\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eMinute\u003c/a\u003e\u003c/code\u003e - \u003cem\u003em\u003c/em\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eHour\u003c/a\u003e\u003c/code\u003e - \u003cem\u003eh\u003c/em\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eDay\u003c/a\u003e\u003c/code\u003e - \u003cem\u003ed\u003c/em\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eWeek\u003c/a\u003e\u003c/code\u003e - \u003cem\u003ew\u003c/em\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eTextual\u003c/a\u003e\u003c/code\u003e instance accepts this syntax and allows decimal\n   fractions to be used as amounts:\n\u003c/p\u003e\u003cpre\u003e\n     \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003etoString\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003efromStringAs\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eaTimeout\u003c/a\u003e\u003c/code\u003e \u003cem\u003e\"1m1.5s0.2us\"\u003c/em\u003e) = \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e \u003cem\u003e\"1m1s500ms200ns\"\u003c/em\u003e\n\u003c/pre\u003e",
          "module": "Data.Timeout",
          "name": "Timeout",
          "package": "data-timeout",
          "source": "src/Data-Timeout.html#Timeout",
          "type": "newtype"
        },
        "index": {
          "description": "Timeout in nanoseconds The Printable instance renders timeouts as series of Amount Unit tokens e.g toString Day MilliSecond d1s500ms The full list of timeout unit abbreviations NanoSecond ns MicroSecond us MilliSecond ms Second Minute Hour Day Week The Textual instance accepts this syntax and allows decimal fractions to be used as amounts fmap toString fromStringAs aTimeout m1.5s0.2us Just m1s500ms200ns",
          "hierarchy": "Data Timeout",
          "module": "Data.Timeout",
          "name": "Timeout",
          "package": "data-timeout",
          "partial": "Timeout",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/data-timeout/docs/Data-Timeout.html#t:Timeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTimeout unit.\n\u003c/p\u003e",
          "module": "Data.Timeout",
          "name": "TimeoutUnit",
          "package": "data-timeout",
          "source": "src/Data-Timeout.html#TimeoutUnit",
          "type": "data"
        },
        "index": {
          "description": "Timeout unit",
          "hierarchy": "Data Timeout",
          "module": "Data.Timeout",
          "name": "TimeoutUnit",
          "package": "data-timeout",
          "partial": "Timeout Unit",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-timeout/docs/Data-Timeout.html#t:TimeoutUnit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert the given number of timeout units to \u003ccode\u003e\u003ca\u003eTimeout\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Timeout",
          "name": "(#)",
          "package": "data-timeout",
          "signature": "Word64 -\u003e TimeoutUnit -\u003e Timeout",
          "source": "src/Data-Timeout.html#%23",
          "type": "function"
        },
        "index": {
          "description": "Convert the given number of timeout units to Timeout",
          "hierarchy": "Data Timeout",
          "module": "Data.Timeout",
          "name": "(#) #",
          "normalized": "Word-\u003eTimeoutUnit-\u003eTimeout",
          "package": "data-timeout",
          "signature": "Word-\u003eTimeoutUnit-\u003eTimeout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-timeout/docs/Data-Timeout.html#v:-35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract number of units (rounding down).\n\u003c/p\u003e",
          "module": "Data.Timeout",
          "name": "(#\u003c)",
          "package": "data-timeout",
          "signature": "Timeout -\u003e TimeoutUnit -\u003e Word64",
          "source": "src/Data-Timeout.html#%23%3C",
          "type": "function"
        },
        "index": {
          "description": "Extract number of units rounding down",
          "hierarchy": "Data Timeout",
          "module": "Data.Timeout",
          "name": "(#\u003c) #\u003c",
          "normalized": "Timeout-\u003eTimeoutUnit-\u003eWord",
          "package": "data-timeout",
          "signature": "Timeout-\u003eTimeoutUnit-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-timeout/docs/Data-Timeout.html#v:-35--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract number of units (rounding up).\n\u003c/p\u003e",
          "module": "Data.Timeout",
          "name": "(#\u003e)",
          "package": "data-timeout",
          "signature": "Timeout -\u003e TimeoutUnit -\u003e Word64",
          "source": "src/Data-Timeout.html#%23%3E",
          "type": "function"
        },
        "index": {
          "description": "Extract number of units rounding up",
          "hierarchy": "Data Timeout",
          "module": "Data.Timeout",
          "name": "(#\u003e) #\u003e",
          "normalized": "Timeout-\u003eTimeoutUnit-\u003eWord",
          "package": "data-timeout",
          "signature": "Timeout-\u003eTimeoutUnit-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-timeout/docs/Data-Timeout.html#v:-35--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Timeout",
          "name": "Day",
          "package": "data-timeout",
          "signature": "Day",
          "source": "src/Data-Timeout.html#TimeoutUnit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Timeout",
          "module": "Data.Timeout",
          "name": "Day",
          "package": "data-timeout",
          "partial": "Day",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-timeout/docs/Data-Timeout.html#v:Day"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Timeout",
          "name": "Hour",
          "package": "data-timeout",
          "signature": "Hour",
          "source": "src/Data-Timeout.html#TimeoutUnit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Timeout",
          "module": "Data.Timeout",
          "name": "Hour",
          "package": "data-timeout",
          "partial": "Hour",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-timeout/docs/Data-Timeout.html#v:Hour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Timeout",
          "name": "MicroSecond",
          "package": "data-timeout",
          "signature": "MicroSecond",
          "source": "src/Data-Timeout.html#TimeoutUnit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Timeout",
          "module": "Data.Timeout",
          "name": "MicroSecond",
          "package": "data-timeout",
          "partial": "Micro Second",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-timeout/docs/Data-Timeout.html#v:MicroSecond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Timeout",
          "name": "MilliSecond",
          "package": "data-timeout",
          "signature": "MilliSecond",
          "source": "src/Data-Timeout.html#TimeoutUnit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Timeout",
          "module": "Data.Timeout",
          "name": "MilliSecond",
          "package": "data-timeout",
          "partial": "Milli Second",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-timeout/docs/Data-Timeout.html#v:MilliSecond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Timeout",
          "name": "Minute",
          "package": "data-timeout",
          "signature": "Minute",
          "source": "src/Data-Timeout.html#TimeoutUnit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Timeout",
          "module": "Data.Timeout",
          "name": "Minute",
          "package": "data-timeout",
          "partial": "Minute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-timeout/docs/Data-Timeout.html#v:Minute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Timeout",
          "name": "NanoSecond",
          "package": "data-timeout",
          "signature": "NanoSecond",
          "source": "src/Data-Timeout.html#TimeoutUnit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Timeout",
          "module": "Data.Timeout",
          "name": "NanoSecond",
          "package": "data-timeout",
          "partial": "Nano Second",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-timeout/docs/Data-Timeout.html#v:NanoSecond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Timeout",
          "name": "Second",
          "package": "data-timeout",
          "signature": "Second",
          "source": "src/Data-Timeout.html#TimeoutUnit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Timeout",
          "module": "Data.Timeout",
          "name": "Second",
          "package": "data-timeout",
          "partial": "Second",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-timeout/docs/Data-Timeout.html#v:Second"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Timeout",
          "name": "TimedOut",
          "package": "data-timeout",
          "signature": "TimedOut",
          "source": "src/Data-Timeout.html#TimedOut",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Timeout",
          "module": "Data.Timeout",
          "name": "TimedOut",
          "package": "data-timeout",
          "partial": "Timed Out",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-timeout/docs/Data-Timeout.html#v:TimedOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Timeout",
          "name": "Timeout",
          "package": "data-timeout",
          "signature": "Timeout Word64",
          "source": "src/Data-Timeout.html#Timeout",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Timeout",
          "module": "Data.Timeout",
          "name": "Timeout",
          "package": "data-timeout",
          "partial": "Timeout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-timeout/docs/Data-Timeout.html#v:Timeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Timeout",
          "name": "Week",
          "package": "data-timeout",
          "signature": "Week",
          "source": "src/Data-Timeout.html#TimeoutUnit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Timeout",
          "module": "Data.Timeout",
          "name": "Week",
          "package": "data-timeout",
          "partial": "Week",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-timeout/docs/Data-Timeout.html#v:Week"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTimeout\u003c/a\u003e\u003c/code\u003e proxy value.\n\u003c/p\u003e",
          "module": "Data.Timeout",
          "name": "aTimeout",
          "package": "data-timeout",
          "signature": "Proxy Timeout",
          "source": "src/Data-Timeout.html#aTimeout",
          "type": "function"
        },
        "index": {
          "description": "Timeout proxy value",
          "hierarchy": "Data Timeout",
          "module": "Data.Timeout",
          "name": "aTimeout",
          "package": "data-timeout",
          "partial": "Timeout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-timeout/docs/Data-Timeout.html#v:aTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTimeoutUnit\u003c/a\u003e\u003c/code\u003e proxy value.\n\u003c/p\u003e",
          "module": "Data.Timeout",
          "name": "aTimeoutUnit",
          "package": "data-timeout",
          "signature": "Proxy TimeoutUnit",
          "source": "src/Data-Timeout.html#aTimeoutUnit",
          "type": "function"
        },
        "index": {
          "description": "TimeoutUnit proxy value",
          "hierarchy": "Data Timeout",
          "module": "Data.Timeout",
          "name": "aTimeoutUnit",
          "package": "data-timeout",
          "partial": "Timeout Unit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-timeout/docs/Data-Timeout.html#v:aTimeoutUnit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZero timeout. The event in question should occur immediately.\n\u003c/p\u003e",
          "module": "Data.Timeout",
          "name": "instantly",
          "package": "data-timeout",
          "signature": "Timeout",
          "source": "src/Data-Timeout.html#instantly",
          "type": "function"
        },
        "index": {
          "description": "Zero timeout The event in question should occur immediately",
          "hierarchy": "Data Timeout",
          "module": "Data.Timeout",
          "name": "instantly",
          "package": "data-timeout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-timeout/docs/Data-Timeout.html#v:instantly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAmount of nanoseconds in a timeout unit.\n\u003c/p\u003e",
          "module": "Data.Timeout",
          "name": "timeoutUnitNanos",
          "package": "data-timeout",
          "signature": "TimeoutUnit -\u003e Word64",
          "source": "src/Data-Timeout.html#timeoutUnitNanos",
          "type": "function"
        },
        "index": {
          "description": "Amount of nanoseconds in timeout unit",
          "hierarchy": "Data Timeout",
          "module": "Data.Timeout",
          "name": "timeoutUnitNanos",
          "normalized": "TimeoutUnit-\u003eWord",
          "package": "data-timeout",
          "partial": "Unit Nanos",
          "signature": "TimeoutUnit-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-timeout/docs/Data-Timeout.html#v:timeoutUnitNanos"
      }
    }
  ]
]