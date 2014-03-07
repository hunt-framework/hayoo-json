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
        "word": "clocked"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clocked",
          "name": "Clocked",
          "package": "clocked",
          "source": "src/Clocked.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Clocked",
          "module": "Clocked",
          "name": "Clocked",
          "package": "clocked",
          "partial": "Clocked",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/clocked/docs/Clocked.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clocked",
          "name": "Timer",
          "package": "clocked",
          "source": "src/Clocked.html#Timer",
          "type": "data"
        },
        "index": {
          "hierarchy": "Clocked",
          "module": "Clocked",
          "name": "Timer",
          "package": "clocked",
          "partial": "Timer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/clocked/docs/Clocked.html#t:Timer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereturns a monotonic time in seconds\n\u003c/p\u003e",
          "module": "Clocked",
          "name": "getTimeDouble",
          "package": "clocked",
          "signature": "IO Double",
          "source": "src/Clocked-Common.html#getTimeDouble",
          "type": "function"
        },
        "index": {
          "description": "returns monotonic time in seconds",
          "hierarchy": "Clocked",
          "module": "Clocked",
          "name": "getTimeDouble",
          "package": "clocked",
          "partial": "Time Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clocked/docs/Clocked.html#v:getTimeDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWaits the given amount of seconds minus the elapsed time\n since the last call to \u003ccode\u003e\u003ca\u003ewaitTimer\u003c/a\u003e\u003c/code\u003e (or the initialisation of the timer).\n\u003c/p\u003e",
          "module": "Clocked",
          "name": "waitTimer",
          "package": "clocked",
          "signature": "Timer -\u003e Double -\u003e IO ()",
          "source": "src/Clocked.html#waitTimer",
          "type": "function"
        },
        "index": {
          "description": "Waits the given amount of seconds minus the elapsed time since the last call to waitTimer or the initialisation of the timer",
          "hierarchy": "Clocked",
          "module": "Clocked",
          "name": "waitTimer",
          "normalized": "Timer-\u003eDouble-\u003eIO()",
          "package": "clocked",
          "partial": "Timer",
          "signature": "Timer-\u003eDouble-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clocked/docs/Clocked.html#v:waitTimer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a monadic action with a \u003ccode\u003e\u003ca\u003eTimer\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Clocked",
          "name": "withTimer",
          "package": "clocked",
          "signature": "(Timer -\u003e m a) -\u003e m a",
          "source": "src/Clocked.html#withTimer",
          "type": "function"
        },
        "index": {
          "description": "Run monadic action with Timer",
          "hierarchy": "Clocked",
          "module": "Clocked",
          "name": "withTimer",
          "normalized": "(Timer-\u003ea b)-\u003ea b",
          "package": "clocked",
          "partial": "Timer",
          "signature": "(Timer-\u003em a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clocked/docs/Clocked.html#v:withTimer"
      }
    }
  ]
]