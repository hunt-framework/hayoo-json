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
        "word": "NoTrace"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module introduce functions that have identical types with functions in the \u003ca\u003eDebug.Trace\u003c/a\u003e module.\n\u003c/p\u003e\u003cp\u003eYou might write some programs like this:\n\u003c/p\u003e\u003cpre\u003e import Debug.Trace\n\n fib 0 = 1\n fib 1 = 1\n fib n = (\"fib \" ++ show n) `trace` fib (n - 1) + fib (n - 2)\n\u003c/pre\u003e\u003cp\u003eAnd after you finish the debugging process, just change the line\n\u003c/p\u003e\u003cpre\u003e import Debug.Trace\n\u003c/pre\u003e\u003cp\u003einto\n\u003c/p\u003e\u003cpre\u003e import Debug.NoTrace\n\u003c/pre\u003e\u003cp\u003eThen all the tracing functions are silently removed.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Debug.NoTrace",
          "name": "NoTrace",
          "package": "NoTrace",
          "source": "src/Debug-NoTrace.html",
          "type": "module"
        },
        "index": {
          "description": "This module introduce functions that have identical types with functions in the Debug.Trace module You might write some programs like this import Debug.Trace fib fib fib fib show trace fib fib And after you finish the debugging process just change the line import Debug.Trace into import Debug.NoTrace Then all the tracing functions are silently removed",
          "hierarchy": "Debug NoTrace",
          "module": "Debug.NoTrace",
          "name": "NoTrace",
          "package": "NoTrace",
          "partial": "No Trace",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/NoTrace/docs/Debug-NoTrace.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debug.NoTrace",
          "name": "putTraceMsg",
          "package": "NoTrace",
          "signature": "String -\u003e IO ()",
          "source": "src/Debug-NoTrace.html#putTraceMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debug NoTrace",
          "module": "Debug.NoTrace",
          "name": "putTraceMsg",
          "normalized": "String-\u003eIO()",
          "package": "NoTrace",
          "partial": "Trace Msg",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NoTrace/docs/Debug-NoTrace.html#v:putTraceMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debug.NoTrace",
          "name": "trace",
          "package": "NoTrace",
          "signature": "String -\u003e a -\u003e a",
          "source": "src/Debug-NoTrace.html#trace",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debug NoTrace",
          "module": "Debug.NoTrace",
          "name": "trace",
          "normalized": "String-\u003ea-\u003ea",
          "package": "NoTrace",
          "signature": "String-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NoTrace/docs/Debug-NoTrace.html#v:trace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debug.NoTrace",
          "name": "traceEvent",
          "package": "NoTrace",
          "signature": "String -\u003e a -\u003e a",
          "source": "src/Debug-NoTrace.html#traceEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debug NoTrace",
          "module": "Debug.NoTrace",
          "name": "traceEvent",
          "normalized": "String-\u003ea-\u003ea",
          "package": "NoTrace",
          "partial": "Event",
          "signature": "String-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NoTrace/docs/Debug-NoTrace.html#v:traceEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debug.NoTrace",
          "name": "traceEventIO",
          "package": "NoTrace",
          "signature": "String -\u003e IO ()",
          "source": "src/Debug-NoTrace.html#traceEventIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debug NoTrace",
          "module": "Debug.NoTrace",
          "name": "traceEventIO",
          "normalized": "String-\u003eIO()",
          "package": "NoTrace",
          "partial": "Event IO",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NoTrace/docs/Debug-NoTrace.html#v:traceEventIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debug.NoTrace",
          "name": "traceIO",
          "package": "NoTrace",
          "signature": "String -\u003e IO ()",
          "source": "src/Debug-NoTrace.html#traceIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debug NoTrace",
          "module": "Debug.NoTrace",
          "name": "traceIO",
          "normalized": "String-\u003eIO()",
          "package": "NoTrace",
          "partial": "IO",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NoTrace/docs/Debug-NoTrace.html#v:traceIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debug.NoTrace",
          "name": "traceShow",
          "package": "NoTrace",
          "signature": "a -\u003e b -\u003e b",
          "source": "src/Debug-NoTrace.html#traceShow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debug NoTrace",
          "module": "Debug.NoTrace",
          "name": "traceShow",
          "normalized": "a-\u003eb-\u003eb",
          "package": "NoTrace",
          "partial": "Show",
          "signature": "a-\u003eb-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NoTrace/docs/Debug-NoTrace.html#v:traceShow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debug.NoTrace",
          "name": "traceStack",
          "package": "NoTrace",
          "signature": "String -\u003e a -\u003e a",
          "source": "src/Debug-NoTrace.html#traceStack",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debug NoTrace",
          "module": "Debug.NoTrace",
          "name": "traceStack",
          "normalized": "String-\u003ea-\u003ea",
          "package": "NoTrace",
          "partial": "Stack",
          "signature": "String-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NoTrace/docs/Debug-NoTrace.html#v:traceStack"
      }
    }
  ]
]