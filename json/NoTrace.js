[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NoTrace/docs/Debug-NoTrace.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module introduce functions that have identical types with functions in the \u003ca\u003eDebug.Trace\u003c/a\u003e module.\n\u003c/p\u003e\u003cp\u003eYou might write some programs like this:\n\u003c/p\u003e\u003cpre\u003e import Debug.Trace\n\n fib 0 = 1\n fib 1 = 1\n fib n = (\"fib \" ++ show n) `trace` fib (n - 1) + fib (n - 2)\n\u003c/pre\u003e\u003cp\u003eAnd after you finish the debugging process, just change the line\n\u003c/p\u003e\u003cpre\u003e import Debug.Trace\n\u003c/pre\u003e\u003cp\u003einto\n\u003c/p\u003e\u003cpre\u003e import Debug.NoTrace\n\u003c/pre\u003e\u003cp\u003eThen all the tracing functions are silently removed.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Debug.NoTrace",
        "fct-package": "NoTrace",
        "fct-signature": "module",
        "fct-source": "src/Debug-NoTrace.html",
        "fct-type": "module",
        "title": "NoTrace"
      },
      "index": {
        "description": "This module introduce functions that have identical types with functions in the Debug.Trace module You might write some programs like this import Debug.Trace fib fib fib fib show trace fib fib And after you finish the debugging process just change the line import Debug.Trace into import Debug.NoTrace Then all the tracing functions are silently removed",
        "hierarchy": "Debug NoTrace",
        "module": "Debug.NoTrace",
        "name": "NoTrace",
        "normalized": "",
        "package": "NoTrace",
        "partial": "No Trace",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NoTrace/docs/Debug-NoTrace.html#v:putTraceMsg",
      "description": {
        "fct-module": "Debug.NoTrace",
        "fct-package": "NoTrace",
        "fct-signature": "String -\u003e IO ()",
        "fct-source": "src/Debug-NoTrace.html#putTraceMsg",
        "fct-type": "function",
        "title": "putTraceMsg"
      },
      "index": {
        "description": "",
        "hierarchy": "Debug NoTrace",
        "module": "Debug.NoTrace",
        "name": "putTraceMsg",
        "normalized": "String-\u003eIO()",
        "package": "NoTrace",
        "partial": "Trace Msg",
        "signature": "String-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NoTrace/docs/Debug-NoTrace.html#v:trace",
      "description": {
        "fct-module": "Debug.NoTrace",
        "fct-package": "NoTrace",
        "fct-signature": "String -\u003e a -\u003e a",
        "fct-source": "src/Debug-NoTrace.html#trace",
        "fct-type": "function",
        "title": "trace"
      },
      "index": {
        "description": "",
        "hierarchy": "Debug NoTrace",
        "module": "Debug.NoTrace",
        "name": "trace",
        "normalized": "String-\u003ea-\u003ea",
        "package": "NoTrace",
        "partial": "",
        "signature": "String-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NoTrace/docs/Debug-NoTrace.html#v:traceEvent",
      "description": {
        "fct-module": "Debug.NoTrace",
        "fct-package": "NoTrace",
        "fct-signature": "String -\u003e a -\u003e a",
        "fct-source": "src/Debug-NoTrace.html#traceEvent",
        "fct-type": "function",
        "title": "traceEvent"
      },
      "index": {
        "description": "",
        "hierarchy": "Debug NoTrace",
        "module": "Debug.NoTrace",
        "name": "traceEvent",
        "normalized": "String-\u003ea-\u003ea",
        "package": "NoTrace",
        "partial": "Event",
        "signature": "String-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NoTrace/docs/Debug-NoTrace.html#v:traceEventIO",
      "description": {
        "fct-module": "Debug.NoTrace",
        "fct-package": "NoTrace",
        "fct-signature": "String -\u003e IO ()",
        "fct-source": "src/Debug-NoTrace.html#traceEventIO",
        "fct-type": "function",
        "title": "traceEventIO"
      },
      "index": {
        "description": "",
        "hierarchy": "Debug NoTrace",
        "module": "Debug.NoTrace",
        "name": "traceEventIO",
        "normalized": "String-\u003eIO()",
        "package": "NoTrace",
        "partial": "Event IO",
        "signature": "String-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NoTrace/docs/Debug-NoTrace.html#v:traceIO",
      "description": {
        "fct-module": "Debug.NoTrace",
        "fct-package": "NoTrace",
        "fct-signature": "String -\u003e IO ()",
        "fct-source": "src/Debug-NoTrace.html#traceIO",
        "fct-type": "function",
        "title": "traceIO"
      },
      "index": {
        "description": "",
        "hierarchy": "Debug NoTrace",
        "module": "Debug.NoTrace",
        "name": "traceIO",
        "normalized": "String-\u003eIO()",
        "package": "NoTrace",
        "partial": "IO",
        "signature": "String-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NoTrace/docs/Debug-NoTrace.html#v:traceShow",
      "description": {
        "fct-module": "Debug.NoTrace",
        "fct-package": "NoTrace",
        "fct-signature": "a -\u003e b -\u003e b",
        "fct-source": "src/Debug-NoTrace.html#traceShow",
        "fct-type": "function",
        "title": "traceShow"
      },
      "index": {
        "description": "",
        "hierarchy": "Debug NoTrace",
        "module": "Debug.NoTrace",
        "name": "traceShow",
        "normalized": "a-\u003eb-\u003eb",
        "package": "NoTrace",
        "partial": "Show",
        "signature": "a-\u003eb-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NoTrace/docs/Debug-NoTrace.html#v:traceStack",
      "description": {
        "fct-module": "Debug.NoTrace",
        "fct-package": "NoTrace",
        "fct-signature": "String -\u003e a -\u003e a",
        "fct-source": "src/Debug-NoTrace.html#traceStack",
        "fct-type": "function",
        "title": "traceStack"
      },
      "index": {
        "description": "",
        "hierarchy": "Debug NoTrace",
        "module": "Debug.NoTrace",
        "name": "traceStack",
        "normalized": "String-\u003ea-\u003ea",
        "package": "NoTrace",
        "partial": "Stack",
        "signature": "String-\u003ea-\u003ea"
      }
    }
  }
]