[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/clocked/docs/Clocked.html#",
      "description": {
        "fct-module": "Clocked",
        "fct-package": "clocked",
        "fct-signature": "module",
        "fct-source": "src/Clocked.html",
        "fct-type": "module",
        "title": "Clocked"
      },
      "index": {
        "description": "",
        "hierarchy": "Clocked",
        "module": "Clocked",
        "name": "Clocked",
        "normalized": "",
        "package": "clocked",
        "partial": "Clocked",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/clocked/docs/Clocked.html#t:Timer",
      "description": {
        "fct-module": "Clocked",
        "fct-package": "clocked",
        "fct-signature": "data",
        "fct-source": "src/Clocked.html#Timer",
        "fct-type": "data",
        "title": "Timer"
      },
      "index": {
        "description": "",
        "hierarchy": "Clocked",
        "module": "Clocked",
        "name": "Timer",
        "normalized": "",
        "package": "clocked",
        "partial": "Timer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/clocked/docs/Clocked.html#v:getTimeDouble",
      "description": {
        "fct-descr": "\u003cp\u003ereturns a monotonic time in seconds\n\u003c/p\u003e",
        "fct-module": "Clocked",
        "fct-package": "clocked",
        "fct-signature": "IO Double",
        "fct-source": "src/Clocked-Common.html#getTimeDouble",
        "fct-type": "function",
        "title": "getTimeDouble"
      },
      "index": {
        "description": "returns monotonic time in seconds",
        "hierarchy": "Clocked",
        "module": "Clocked",
        "name": "getTimeDouble",
        "normalized": "",
        "package": "clocked",
        "partial": "Time Double",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/clocked/docs/Clocked.html#v:waitTimer",
      "description": {
        "fct-descr": "\u003cp\u003eWaits the given amount of seconds minus the elapsed time\n since the last call to \u003ccode\u003e\u003ca\u003ewaitTimer\u003c/a\u003e\u003c/code\u003e (or the initialisation of the timer).\n\u003c/p\u003e",
        "fct-module": "Clocked",
        "fct-package": "clocked",
        "fct-signature": "Timer -\u003e Double -\u003e IO ()",
        "fct-source": "src/Clocked.html#waitTimer",
        "fct-type": "function",
        "title": "waitTimer"
      },
      "index": {
        "description": "Waits the given amount of seconds minus the elapsed time since the last call to waitTimer or the initialisation of the timer",
        "hierarchy": "Clocked",
        "module": "Clocked",
        "name": "waitTimer",
        "normalized": "Timer-\u003eDouble-\u003eIO()",
        "package": "clocked",
        "partial": "Timer",
        "signature": "Timer-\u003eDouble-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/clocked/docs/Clocked.html#v:withTimer",
      "description": {
        "fct-descr": "\u003cp\u003eRun a monadic action with a \u003ccode\u003e\u003ca\u003eTimer\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Clocked",
        "fct-package": "clocked",
        "fct-signature": "(Timer -\u003e m a) -\u003e m a",
        "fct-source": "src/Clocked.html#withTimer",
        "fct-type": "function",
        "title": "withTimer"
      },
      "index": {
        "description": "Run monadic action with Timer",
        "hierarchy": "Clocked",
        "module": "Clocked",
        "name": "withTimer",
        "normalized": "(Timer-\u003ea b)-\u003ea b",
        "package": "clocked",
        "partial": "Timer",
        "signature": "(Timer-\u003em a)-\u003em a"
      }
    }
  }
]