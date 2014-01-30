[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TraceUtils/docs/Debug-TraceUtils.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exposes some useful tracing functions that should\n have been exported by Debug.Trace.\n\u003c/p\u003e\u003cp\u003eFeel free to copy&paste these functions into modules that need\n them, that may be easier to remove/clean up than adding a cabal\n dependency.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Debug.TraceUtils",
        "fct-package": "TraceUtils",
        "fct-signature": "module",
        "fct-source": "src/Debug-TraceUtils.html",
        "fct-type": "module",
        "title": "TraceUtils"
      },
      "index": {
        "description": "This module exposes some useful tracing functions that should have been exported by Debug.Trace Feel free to copy paste these functions into modules that need them that may be easier to remove clean up than adding cabal dependency",
        "hierarchy": "Debug TraceUtils",
        "module": "Debug.TraceUtils",
        "name": "TraceUtils",
        "normalized": "",
        "package": "TraceUtils",
        "partial": "Trace Utils",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TraceUtils/docs/Debug-TraceUtils.html#v:trace",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003etrace\u003c/a\u003e\u003c/code\u003e function outputs the trace message given as its first argument,\nbefore returning the second argument as its result.\n\u003c/p\u003e\u003cp\u003eFor example, this returns the value of \u003ccode\u003ef x\u003c/code\u003e but first outputs the message.\n\u003c/p\u003e\u003cpre\u003e trace (\"calling f with x = \" ++ show x) (f x)\n\u003c/pre\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003etrace\u003c/a\u003e\u003c/code\u003e function should \u003cem\u003eonly\u003c/em\u003e be used for debugging, or for monitoring\nexecution. The function is not referentially transparent: its type indicates\nthat it is a pure function but it has the side effect of outputting the\ntrace message.\n\u003c/p\u003e",
        "fct-module": "Debug.TraceUtils",
        "fct-package": "TraceUtils",
        "fct-signature": "String -\u003e a -\u003e a",
        "fct-type": "function",
        "title": "trace"
      },
      "index": {
        "description": "The trace function outputs the trace message given as its first argument before returning the second argument as its result For example this returns the value of but first outputs the message trace calling with show The trace function should only be used for debugging or for monitoring execution The function is not referentially transparent its type indicates that it is pure function but it has the side effect of outputting the trace message",
        "hierarchy": "Debug TraceUtils",
        "module": "Debug.TraceUtils",
        "name": "trace",
        "normalized": "String-\u003ea-\u003ea",
        "package": "TraceUtils",
        "partial": "",
        "signature": "String-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TraceUtils/docs/Debug-TraceUtils.html#v:traceAround",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a pure function to one that also has a side effect of\n tracing the value of the input and output values that pass through\n the function.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cp\u003etraceAround \"filterEntries\" filterEntries entries\n\u003c/p\u003e",
        "fct-module": "Debug.TraceUtils",
        "fct-package": "TraceUtils",
        "fct-signature": "String -\u003e (i -\u003e o) -\u003e i -\u003e o",
        "fct-source": "src/Debug-TraceUtils.html#traceAround",
        "fct-type": "function",
        "title": "traceAround"
      },
      "index": {
        "description": "Convert pure function to one that also has side effect of tracing the value of the input and output values that pass through the function Examples traceAround filterEntries filterEntries entries",
        "hierarchy": "Debug TraceUtils",
        "module": "Debug.TraceUtils",
        "name": "traceAround",
        "normalized": "String-\u003e(a-\u003eb)-\u003ea-\u003eb",
        "package": "TraceUtils",
        "partial": "Around",
        "signature": "String-\u003e(i-\u003eo)-\u003ei-\u003eo"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TraceUtils/docs/Debug-TraceUtils.html#v:traceId",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate an identity function that has the side-effect of showing\n the value that passes through it.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cp\u003etraceId \"x,y = \" (x, y)\n\u003c/p\u003e",
        "fct-module": "Debug.TraceUtils",
        "fct-package": "TraceUtils",
        "fct-signature": "String-\u003e a-\u003e a",
        "fct-type": "function",
        "title": "traceId"
      },
      "index": {
        "description": "Generate an identity function that has the side-effect of showing the value that passes through it Examples traceId",
        "hierarchy": "Debug TraceUtils",
        "module": "Debug.TraceUtils",
        "name": "traceId",
        "normalized": "String-\u003ea-\u003ea",
        "package": "TraceUtils",
        "partial": "Id",
        "signature": "String-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TraceUtils/docs/Debug-TraceUtils.html#v:traceIdVia",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate an identity function that has the side-effect of tracing\n the value that passes through it by first processing it and then\n showing the result.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cp\u003etraceIdVia (take 5) \"First 5 sorted elements of: \" result\n\u003c/p\u003e\u003cp\u003efmap (traceIdVia objName \"The object we got\") . receiveObject\n\u003c/p\u003e",
        "fct-module": "Debug.TraceUtils",
        "fct-package": "TraceUtils",
        "fct-signature": "(a -\u003e b)-\u003e String-\u003e a-\u003e a",
        "fct-type": "function",
        "title": "traceIdVia"
      },
      "index": {
        "description": "Generate an identity function that has the side-effect of tracing the value that passes through it by first processing it and then showing the result Examples traceIdVia take First sorted elements of result fmap traceIdVia objName The object we got receiveObject",
        "hierarchy": "Debug TraceUtils",
        "module": "Debug.TraceUtils",
        "name": "traceIdVia",
        "normalized": "(a-\u003eb)-\u003eString-\u003ea-\u003ea",
        "package": "TraceUtils",
        "partial": "Id Via",
        "signature": "(a-\u003eb)-\u003eString-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TraceUtils/docs/Debug-TraceUtils.html#v:tracePrint",
      "description": {
        "fct-module": "Debug.TraceUtils",
        "fct-package": "TraceUtils",
        "fct-signature": "a -\u003e m ()",
        "fct-source": "src/Debug-TraceUtils.html#tracePrint",
        "fct-type": "function",
        "title": "tracePrint"
      },
      "index": {
        "description": "",
        "hierarchy": "Debug TraceUtils",
        "module": "Debug.TraceUtils",
        "name": "tracePrint",
        "normalized": "a-\u003eb()",
        "package": "TraceUtils",
        "partial": "Print",
        "signature": "a-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TraceUtils/docs/Debug-TraceUtils.html#v:tracePutStrLn",
      "description": {
        "fct-module": "Debug.TraceUtils",
        "fct-package": "TraceUtils",
        "fct-signature": "String -\u003e m ()",
        "fct-source": "src/Debug-TraceUtils.html#tracePutStrLn",
        "fct-type": "function",
        "title": "tracePutStrLn"
      },
      "index": {
        "description": "",
        "hierarchy": "Debug TraceUtils",
        "module": "Debug.TraceUtils",
        "name": "tracePutStrLn",
        "normalized": "String-\u003ea()",
        "package": "TraceUtils",
        "partial": "Put Str Ln",
        "signature": "String-\u003em()"
      }
    }
  }
]