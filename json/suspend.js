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
        "word": "suspend"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Suspend.Lifted",
          "name": "Lifted",
          "package": "suspend",
          "source": "src/Control-Concurrent-Suspend-Lifted.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Concurrent Suspend Lifted",
          "module": "Control.Concurrent.Suspend.Lifted",
          "name": "Lifted",
          "package": "suspend",
          "partial": "Lifted",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/suspend/docs/Control-Concurrent-Suspend-Lifted.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDELAY\n\u003c/p\u003e\u003cp\u003eTODO:\n * Add overflow checks.\n\u003c/p\u003e\u003cp\u003eType representing delay in microseconds.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Suspend.Lifted",
          "name": "Delay",
          "package": "suspend",
          "source": "src/Control-Concurrent-Delay.html#Delay",
          "type": "data"
        },
        "index": {
          "description": "DELAY TODO Add overflow checks Type representing delay in microseconds",
          "hierarchy": "Control Concurrent Suspend Lifted",
          "module": "Control.Concurrent.Suspend.Lifted",
          "name": "Delay",
          "package": "suspend",
          "partial": "Delay",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/suspend/docs/Control-Concurrent-Suspend-Lifted.html#t:Delay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSums two delays.\n\u003c/p\u003e",
          "module": "[\"Control.Concurrent.Suspend.Lifted\",\"Control.Concurrent.Suspend\"]",
          "name": "(.+.)",
          "package": "suspend",
          "signature": "Delay -\u003e Delay -\u003e Delay",
          "source": "src/Control-Concurrent-Delay.html#.%2B.",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/suspend/docs/Control-Concurrent-Suspend-Lifted.html#v:.-43-.\",\"http://hackage.haskell.org/package/suspend/docs/Control-Concurrent-Suspend.html#v:.-43-.\"]"
        },
        "index": {
          "description": "Sums two delays",
          "hierarchy": "Control Concurrent Suspend Lifted",
          "module": "Control.Concurrent.Suspend.Lifted",
          "name": "(.+.) .+.",
          "normalized": "Delay-\u003eDelay-\u003eDelay",
          "package": "suspend",
          "signature": "Delay-\u003eDelay-\u003eDelay",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/suspend/docs/Control-Concurrent-Suspend-Lifted.html#v:.-43-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelay in hours.\n\u003c/p\u003e",
          "module": "[\"Control.Concurrent.Suspend.Lifted\",\"Control.Concurrent.Suspend\"]",
          "name": "hDelay",
          "package": "suspend",
          "signature": "Int64 -\u003e Delay",
          "source": "src/Control-Concurrent-Delay.html#hDelay",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/suspend/docs/Control-Concurrent-Suspend-Lifted.html#v:hDelay\",\"http://hackage.haskell.org/package/suspend/docs/Control-Concurrent-Suspend.html#v:hDelay\"]"
        },
        "index": {
          "description": "Delay in hours",
          "hierarchy": "Control Concurrent Suspend Lifted",
          "module": "Control.Concurrent.Suspend.Lifted",
          "name": "hDelay",
          "normalized": "Int-\u003eDelay",
          "package": "suspend",
          "partial": "Delay",
          "signature": "Int-\u003eDelay",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/suspend/docs/Control-Concurrent-Suspend-Lifted.html#v:hDelay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelay in minutes.\n\u003c/p\u003e",
          "module": "[\"Control.Concurrent.Suspend.Lifted\",\"Control.Concurrent.Suspend\"]",
          "name": "mDelay",
          "package": "suspend",
          "signature": "Int64 -\u003e Delay",
          "source": "src/Control-Concurrent-Delay.html#mDelay",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/suspend/docs/Control-Concurrent-Suspend-Lifted.html#v:mDelay\",\"http://hackage.haskell.org/package/suspend/docs/Control-Concurrent-Suspend.html#v:mDelay\"]"
        },
        "index": {
          "description": "Delay in minutes",
          "hierarchy": "Control Concurrent Suspend Lifted",
          "module": "Control.Concurrent.Suspend.Lifted",
          "name": "mDelay",
          "normalized": "Int-\u003eDelay",
          "package": "suspend",
          "partial": "Delay",
          "signature": "Int-\u003eDelay",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/suspend/docs/Control-Concurrent-Suspend-Lifted.html#v:mDelay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelay in milliseconds.\n\u003c/p\u003e",
          "module": "[\"Control.Concurrent.Suspend.Lifted\",\"Control.Concurrent.Suspend\"]",
          "name": "msDelay",
          "package": "suspend",
          "signature": "Int64 -\u003e Delay",
          "source": "src/Control-Concurrent-Delay.html#msDelay",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/suspend/docs/Control-Concurrent-Suspend-Lifted.html#v:msDelay\",\"http://hackage.haskell.org/package/suspend/docs/Control-Concurrent-Suspend.html#v:msDelay\"]"
        },
        "index": {
          "description": "Delay in milliseconds",
          "hierarchy": "Control Concurrent Suspend Lifted",
          "module": "Control.Concurrent.Suspend.Lifted",
          "name": "msDelay",
          "normalized": "Int-\u003eDelay",
          "package": "suspend",
          "partial": "Delay",
          "signature": "Int-\u003eDelay",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/suspend/docs/Control-Concurrent-Suspend-Lifted.html#v:msDelay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelay in seconds.\n\u003c/p\u003e",
          "module": "[\"Control.Concurrent.Suspend.Lifted\",\"Control.Concurrent.Suspend\"]",
          "name": "sDelay",
          "package": "suspend",
          "signature": "Int64 -\u003e Delay",
          "source": "src/Control-Concurrent-Delay.html#sDelay",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/suspend/docs/Control-Concurrent-Suspend-Lifted.html#v:sDelay\",\"http://hackage.haskell.org/package/suspend/docs/Control-Concurrent-Suspend.html#v:sDelay\"]"
        },
        "index": {
          "description": "Delay in seconds",
          "hierarchy": "Control Concurrent Suspend Lifted",
          "module": "Control.Concurrent.Suspend.Lifted",
          "name": "sDelay",
          "normalized": "Int-\u003eDelay",
          "package": "suspend",
          "partial": "Delay",
          "signature": "Int-\u003eDelay",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/suspend/docs/Control-Concurrent-Suspend-Lifted.html#v:sDelay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnalogy of \u003ccode\u003e\u003ca\u003ethreadDelay\u003c/a\u003e\u003c/code\u003e that allows for longer delays.\n\u003c/p\u003e\u003cp\u003eSuspends the current thread for the given delay (GHC only).\n\u003c/p\u003e\u003cp\u003eThere is no guarantee that the thread will be rescheduled promptly when the\n delay has expired, but the thread will never continue to run earlier than specified.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Suspend.Lifted",
          "name": "suspend",
          "package": "suspend",
          "signature": "Delay -\u003e m ()",
          "source": "src/Control-Concurrent-Suspend-Lifted.html#suspend",
          "type": "function"
        },
        "index": {
          "description": "Analogy of threadDelay that allows for longer delays Suspends the current thread for the given delay GHC only There is no guarantee that the thread will be rescheduled promptly when the delay has expired but the thread will never continue to run earlier than specified",
          "hierarchy": "Control Concurrent Suspend Lifted",
          "module": "Control.Concurrent.Suspend.Lifted",
          "name": "suspend",
          "normalized": "Delay-\u003ea()",
          "package": "suspend",
          "signature": "Delay-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/suspend/docs/Control-Concurrent-Suspend-Lifted.html#v:suspend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelay in microseconds.\n\u003c/p\u003e",
          "module": "[\"Control.Concurrent.Suspend.Lifted\",\"Control.Concurrent.Suspend\"]",
          "name": "usDelay",
          "package": "suspend",
          "signature": "Int64 -\u003e Delay",
          "source": "src/Control-Concurrent-Delay.html#usDelay",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/suspend/docs/Control-Concurrent-Suspend-Lifted.html#v:usDelay\",\"http://hackage.haskell.org/package/suspend/docs/Control-Concurrent-Suspend.html#v:usDelay\"]"
        },
        "index": {
          "description": "Delay in microseconds",
          "hierarchy": "Control Concurrent Suspend Lifted",
          "module": "Control.Concurrent.Suspend.Lifted",
          "name": "usDelay",
          "normalized": "Int-\u003eDelay",
          "package": "suspend",
          "partial": "Delay",
          "signature": "Int-\u003eDelay",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/suspend/docs/Control-Concurrent-Suspend-Lifted.html#v:usDelay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Suspend",
          "name": "Suspend",
          "package": "suspend",
          "source": "src/Control-Concurrent-Suspend.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Concurrent Suspend",
          "module": "Control.Concurrent.Suspend",
          "name": "Suspend",
          "package": "suspend",
          "partial": "Suspend",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/suspend/docs/Control-Concurrent-Suspend.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDELAY\n\u003c/p\u003e\u003cp\u003eTODO:\n * Add overflow checks.\n\u003c/p\u003e\u003cp\u003eType representing delay in microseconds.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Suspend",
          "name": "Delay",
          "package": "suspend",
          "source": "src/Control-Concurrent-Delay.html#Delay",
          "type": "data"
        },
        "index": {
          "description": "DELAY TODO Add overflow checks Type representing delay in microseconds",
          "hierarchy": "Control Concurrent Suspend",
          "module": "Control.Concurrent.Suspend",
          "name": "Delay",
          "package": "suspend",
          "partial": "Delay",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/suspend/docs/Control-Concurrent-Suspend.html#t:Delay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnalogy of \u003ccode\u003e\u003ca\u003ethreadDelay\u003c/a\u003e\u003c/code\u003e that allows for longer delays.\n\u003c/p\u003e\u003cp\u003eSuspends the current thread for the given delay (GHC only).\n\u003c/p\u003e\u003cp\u003eThere is no guarantee that the thread will be rescheduled promptly when the\n delay has expired, but the thread will never continue to run earlier than specified.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Suspend",
          "name": "suspend",
          "package": "suspend",
          "signature": "Delay -\u003e IO ()",
          "source": "src/Control-Concurrent-Suspend.html#suspend",
          "type": "function"
        },
        "index": {
          "description": "Analogy of threadDelay that allows for longer delays Suspends the current thread for the given delay GHC only There is no guarantee that the thread will be rescheduled promptly when the delay has expired but the thread will never continue to run earlier than specified",
          "hierarchy": "Control Concurrent Suspend",
          "module": "Control.Concurrent.Suspend",
          "name": "suspend",
          "normalized": "Delay-\u003eIO()",
          "package": "suspend",
          "signature": "Delay-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/suspend/docs/Control-Concurrent-Suspend.html#v:suspend"
      }
    }
  ]
]