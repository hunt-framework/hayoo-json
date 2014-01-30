[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hydra-print/docs/Scripting-Parallel-ThreadPool.html#",
      "description": {
        "fct-module": "Scripting.Parallel.ThreadPool",
        "fct-package": "hydra-print",
        "fct-signature": "module",
        "fct-source": "src/Scripting-Parallel-ThreadPool.html",
        "fct-type": "module",
        "title": "ThreadPool"
      },
      "index": {
        "description": "",
        "hierarchy": "Scripting Parallel ThreadPool",
        "module": "Scripting.Parallel.ThreadPool",
        "name": "ThreadPool",
        "normalized": "",
        "package": "hydra-print",
        "partial": "Thread Pool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hydra-print/docs/Scripting-Parallel-ThreadPool.html#v:parForM",
      "description": {
        "fct-descr": "\u003cp\u003eA helper for parallel scripting.  Run work items in parallel on N worker threads\n (a thread pool), creating only ONE output stream per worker, not one per parallel\n task.  Specifically, each invocation of the user's function is given an\n OutputStream that it holds a \u003ca\u003elock\u003c/a\u003e on -- it is the only thread accessing that\n output stream.\n\u003c/p\u003e\u003cp\u003eThis function returns immediately with\n   (1) a list of input streams that will carry results on the fly, as they are produced, and\n   (2) a barrier action that waits for all parallel work to be finished and yields the final results.\n The first list is \u003ccode\u003enumWorkers\u003c/code\u003e long, and the second is \u003ccode\u003enumTasks\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAdditional contracts: \n\u003c/p\u003e",
        "fct-module": "Scripting.Parallel.ThreadPool",
        "fct-package": "hydra-print",
        "fct-signature": "Int -\u003e [a] -\u003e (OutputStream c -\u003e a -\u003e IO b) -\u003e IO ([InputStream c], IO [b])",
        "fct-source": "src/Scripting-Parallel-ThreadPool.html#parForM",
        "fct-type": "function",
        "title": "parForM"
      },
      "index": {
        "description": "helper for parallel scripting Run work items in parallel on worker threads thread pool creating only ONE output stream per worker not one per parallel task Specifically each invocation of the user function is given an OutputStream that it holds lock on it is the only thread accessing that output stream This function returns immediately with list of input streams that will carry results on the fly as they are produced and barrier action that waits for all parallel work to be finished and yields the final results The first list is numWorkers long and the second is numTasks Additional contracts",
        "hierarchy": "Scripting Parallel ThreadPool",
        "module": "Scripting.Parallel.ThreadPool",
        "name": "parForM",
        "normalized": "Int-\u003e[a]-\u003e(OutputStream b-\u003ea-\u003eIO c)-\u003eIO([InputStream b],IO[c])",
        "package": "hydra-print",
        "partial": "For",
        "signature": "Int-\u003e[a]-\u003e(OutputStream c-\u003ea-\u003eIO b)-\u003eIO([InputStream c],IO[b])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hydra-print/docs/UI-HydraPrint.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simple utility to multiplex of *dynamic* collection of text streams.  As the\n number of streams varies, the multiplexing of the terminal output does too.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "UI.HydraPrint",
        "fct-package": "hydra-print",
        "fct-signature": "module",
        "fct-source": "src/UI-HydraPrint.html",
        "fct-type": "module",
        "title": "HydraPrint"
      },
      "index": {
        "description": "simple utility to multiplex of dynamic collection of text streams As the number of streams varies the multiplexing of the terminal output does too",
        "hierarchy": "UI HydraPrint",
        "module": "UI.HydraPrint",
        "name": "HydraPrint",
        "normalized": "",
        "package": "hydra-print",
        "partial": "Hydra Print",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hydra-print/docs/UI-HydraPrint.html#t:DeleteWinWhen",
      "description": {
        "fct-descr": "\u003cp\u003eHow long should we wait after a stream goes dry to close the window associated\n with it?  If \u003ccode\u003e\u003ca\u003eNever\u003c/a\u003e\u003c/code\u003e is selected, then the window will stay until a new stream\n causes the screen to reconfigure, or hydraPrint exits.\n\u003c/p\u003e",
        "fct-module": "UI.HydraPrint",
        "fct-package": "hydra-print",
        "fct-signature": "data",
        "fct-source": "src/UI-HydraPrint.html#DeleteWinWhen",
        "fct-type": "data",
        "title": "DeleteWinWhen"
      },
      "index": {
        "description": "How long should we wait after stream goes dry to close the window associated with it If Never is selected then the window will stay until new stream causes the screen to reconfigure or hydraPrint exits",
        "hierarchy": "UI HydraPrint",
        "module": "UI.HydraPrint",
        "name": "DeleteWinWhen",
        "normalized": "",
        "package": "hydra-print",
        "partial": "Delete Win When",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hydra-print/docs/UI-HydraPrint.html#t:HydraConf",
      "description": {
        "fct-module": "UI.HydraPrint",
        "fct-package": "hydra-print",
        "fct-signature": "data",
        "fct-source": "src/UI-HydraPrint.html#HydraConf",
        "fct-type": "data",
        "title": "HydraConf"
      },
      "index": {
        "description": "",
        "hierarchy": "UI HydraPrint",
        "module": "UI.HydraPrint",
        "name": "HydraConf",
        "normalized": "",
        "package": "hydra-print",
        "partial": "Hydra Conf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hydra-print/docs/UI-HydraPrint.html#v:After",
      "description": {
        "fct-module": "UI.HydraPrint",
        "fct-package": "hydra-print",
        "fct-signature": "After Seconds",
        "fct-source": "src/UI-HydraPrint.html#DeleteWinWhen",
        "fct-type": "function",
        "title": "After"
      },
      "index": {
        "description": "",
        "hierarchy": "UI HydraPrint",
        "module": "UI.HydraPrint",
        "name": "After",
        "normalized": "",
        "package": "hydra-print",
        "partial": "After",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hydra-print/docs/UI-HydraPrint.html#v:HydraConf",
      "description": {
        "fct-module": "UI.HydraPrint",
        "fct-package": "hydra-print",
        "fct-signature": "HydraConf",
        "fct-source": "src/UI-HydraPrint.html#HydraConf",
        "fct-type": "function",
        "title": "HydraConf"
      },
      "index": {
        "description": "",
        "hierarchy": "UI HydraPrint",
        "module": "UI.HydraPrint",
        "name": "HydraConf",
        "normalized": "",
        "package": "hydra-print",
        "partial": "Hydra Conf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hydra-print/docs/UI-HydraPrint.html#v:Immediately",
      "description": {
        "fct-module": "UI.HydraPrint",
        "fct-package": "hydra-print",
        "fct-signature": "Immediately",
        "fct-source": "src/UI-HydraPrint.html#DeleteWinWhen",
        "fct-type": "function",
        "title": "Immediately"
      },
      "index": {
        "description": "",
        "hierarchy": "UI HydraPrint",
        "module": "UI.HydraPrint",
        "name": "Immediately",
        "normalized": "",
        "package": "hydra-print",
        "partial": "Immediately",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hydra-print/docs/UI-HydraPrint.html#v:Never",
      "description": {
        "fct-module": "UI.HydraPrint",
        "fct-package": "hydra-print",
        "fct-signature": "Never",
        "fct-source": "src/UI-HydraPrint.html#DeleteWinWhen",
        "fct-type": "function",
        "title": "Never"
      },
      "index": {
        "description": "",
        "hierarchy": "UI HydraPrint",
        "module": "UI.HydraPrint",
        "name": "Never",
        "normalized": "",
        "package": "hydra-print",
        "partial": "Never",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hydra-print/docs/UI-HydraPrint.html#v:dbgLogLn",
      "description": {
        "fct-module": "UI.HydraPrint",
        "fct-package": "hydra-print",
        "fct-signature": "String -\u003e IO ()",
        "fct-source": "src/UI-HydraPrint.html#dbgLogLn",
        "fct-type": "function",
        "title": "dbgLogLn"
      },
      "index": {
        "description": "",
        "hierarchy": "UI HydraPrint",
        "module": "UI.HydraPrint",
        "name": "dbgLogLn",
        "normalized": "String-\u003eIO()",
        "package": "hydra-print",
        "partial": "Log Ln",
        "signature": "String-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hydra-print/docs/UI-HydraPrint.html#v:defaultHydraConf",
      "description": {
        "fct-descr": "\u003cp\u003eLike the name says, a default set of options for passing to \u003ccode\u003e\u003ca\u003ehydraPrint\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "UI.HydraPrint",
        "fct-package": "hydra-print",
        "fct-signature": "HydraConf",
        "fct-source": "src/UI-HydraPrint.html#defaultHydraConf",
        "fct-type": "function",
        "title": "defaultHydraConf"
      },
      "index": {
        "description": "Like the name says default set of options for passing to hydraPrint",
        "hierarchy": "UI HydraPrint",
        "module": "UI.HydraPrint",
        "name": "defaultHydraConf",
        "normalized": "",
        "package": "hydra-print",
        "partial": "Hydra Conf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hydra-print/docs/UI-HydraPrint.html#v:deleteWhen",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "UI.HydraPrint",
        "fct-package": "hydra-print",
        "fct-signature": "DeleteWinWhen",
        "fct-source": "src/UI-HydraPrint.html#HydraConf",
        "fct-type": "function",
        "title": "deleteWhen"
      },
      "index": {
        "description": "",
        "hierarchy": "UI HydraPrint",
        "module": "UI.HydraPrint",
        "name": "deleteWhen",
        "normalized": "",
        "package": "hydra-print",
        "partial": "When",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hydra-print/docs/UI-HydraPrint.html#v:hydraPrint",
      "description": {
        "fct-descr": "\u003cp\u003eTakes a \u003cem\u003esource\u003c/em\u003e of input streams, which may be added dynamically.  A stream\n that joins dynamically, exits once it issues an end-of-stream.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003ehydraPrint\u003c/a\u003e\u003c/code\u003e is a blocking call that doesn't return until ALL streams that\n appear produce an end-of-stream, AND the stream-source itself reaches\n end-of-stream.\n\u003c/p\u003e",
        "fct-module": "UI.HydraPrint",
        "fct-package": "hydra-print",
        "fct-signature": "HydraConf -\u003e InputStream (String, InputStream ByteString) -\u003e IO ()",
        "fct-source": "src/UI-HydraPrint.html#hydraPrint",
        "fct-type": "function",
        "title": "hydraPrint"
      },
      "index": {
        "description": "Takes source of input streams which may be added dynamically stream that joins dynamically exits once it issues an end-of-stream hydraPrint is blocking call that doesn return until ALL streams that appear produce an end-of-stream AND the stream-source itself reaches end-of-stream",
        "hierarchy": "UI HydraPrint",
        "module": "UI.HydraPrint",
        "name": "hydraPrint",
        "normalized": "HydraConf-\u003eInputStream(String,InputStream ByteString)-\u003eIO()",
        "package": "hydra-print",
        "partial": "Print",
        "signature": "HydraConf-\u003eInputStream(String,InputStream ByteString)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hydra-print/docs/UI-HydraPrint.html#v:hydraPrintStatic",
      "description": {
        "fct-descr": "\u003cp\u003eTake a fixed list of input streams.  This variant preemptively splits the screen\n into exactly one panel per stream.\n\u003c/p\u003e",
        "fct-module": "UI.HydraPrint",
        "fct-package": "hydra-print",
        "fct-signature": "HydraConf -\u003e [(String, InputStream ByteString)] -\u003e IO ()",
        "fct-source": "src/UI-HydraPrint.html#hydraPrintStatic",
        "fct-type": "function",
        "title": "hydraPrintStatic"
      },
      "index": {
        "description": "Take fixed list of input streams This variant preemptively splits the screen into exactly one panel per stream",
        "hierarchy": "UI HydraPrint",
        "module": "UI.HydraPrint",
        "name": "hydraPrintStatic",
        "normalized": "HydraConf-\u003e[(String,InputStream ByteString)]-\u003eIO()",
        "package": "hydra-print",
        "partial": "Print Static",
        "signature": "HydraConf-\u003e[(String,InputStream ByteString)]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hydra-print/docs/UI-HydraPrint.html#v:useColor",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "UI.HydraPrint",
        "fct-package": "hydra-print",
        "fct-signature": "Bool",
        "fct-source": "src/UI-HydraPrint.html#HydraConf",
        "fct-type": "function",
        "title": "useColor"
      },
      "index": {
        "description": "",
        "hierarchy": "UI HydraPrint",
        "module": "UI.HydraPrint",
        "name": "useColor",
        "normalized": "",
        "package": "hydra-print",
        "partial": "Color",
        "signature": ""
      }
    }
  }
]