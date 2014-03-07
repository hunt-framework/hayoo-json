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
        "word": "hydra-print"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scripting.Parallel.ThreadPool",
          "name": "ThreadPool",
          "package": "hydra-print",
          "source": "src/Scripting-Parallel-ThreadPool.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Scripting Parallel ThreadPool",
          "module": "Scripting.Parallel.ThreadPool",
          "name": "ThreadPool",
          "package": "hydra-print",
          "partial": "Thread Pool",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hydra-print/docs/Scripting-Parallel-ThreadPool.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA helper for parallel scripting.  Run work items in parallel on N worker threads\n (a thread pool), creating only ONE output stream per worker, not one per parallel\n task.  Specifically, each invocation of the user's function is given an\n OutputStream that it holds a \u003ca\u003elock\u003c/a\u003e on -- it is the only thread accessing that\n output stream.\n\u003c/p\u003e\u003cp\u003eThis function returns immediately with\n   (1) a list of input streams that will carry results on the fly, as they are produced, and\n   (2) a barrier action that waits for all parallel work to be finished and yields the final results.\n The first list is \u003ccode\u003enumWorkers\u003c/code\u003e long, and the second is \u003ccode\u003enumTasks\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAdditional contracts: \n\u003c/p\u003e",
          "module": "Scripting.Parallel.ThreadPool",
          "name": "parForM",
          "package": "hydra-print",
          "signature": "Int -\u003e [a] -\u003e (OutputStream c -\u003e a -\u003e IO b) -\u003e IO ([InputStream c], IO [b])",
          "source": "src/Scripting-Parallel-ThreadPool.html#parForM",
          "type": "function"
        },
        "index": {
          "description": "helper for parallel scripting Run work items in parallel on worker threads thread pool creating only ONE output stream per worker not one per parallel task Specifically each invocation of the user function is given an OutputStream that it holds lock on it is the only thread accessing that output stream This function returns immediately with list of input streams that will carry results on the fly as they are produced and barrier action that waits for all parallel work to be finished and yields the final results The first list is numWorkers long and the second is numTasks Additional contracts",
          "hierarchy": "Scripting Parallel ThreadPool",
          "module": "Scripting.Parallel.ThreadPool",
          "name": "parForM",
          "normalized": "Int-\u003e[a]-\u003e(OutputStream b-\u003ea-\u003eIO c)-\u003eIO([InputStream b],IO[c])",
          "package": "hydra-print",
          "partial": "For",
          "signature": "Int-\u003e[a]-\u003e(OutputStream c-\u003ea-\u003eIO b)-\u003eIO([InputStream c],IO[b])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hydra-print/docs/Scripting-Parallel-ThreadPool.html#v:parForM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simple utility to multiplex of *dynamic* collection of text streams.  As the\n number of streams varies, the multiplexing of the terminal output does too.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "UI.HydraPrint",
          "name": "HydraPrint",
          "package": "hydra-print",
          "source": "src/UI-HydraPrint.html",
          "type": "module"
        },
        "index": {
          "description": "simple utility to multiplex of dynamic collection of text streams As the number of streams varies the multiplexing of the terminal output does too",
          "hierarchy": "UI HydraPrint",
          "module": "UI.HydraPrint",
          "name": "HydraPrint",
          "package": "hydra-print",
          "partial": "Hydra Print",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hydra-print/docs/UI-HydraPrint.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow long should we wait after a stream goes dry to close the window associated\n with it?  If \u003ccode\u003e\u003ca\u003eNever\u003c/a\u003e\u003c/code\u003e is selected, then the window will stay until a new stream\n causes the screen to reconfigure, or hydraPrint exits.\n\u003c/p\u003e",
          "module": "UI.HydraPrint",
          "name": "DeleteWinWhen",
          "package": "hydra-print",
          "source": "src/UI-HydraPrint.html#DeleteWinWhen",
          "type": "data"
        },
        "index": {
          "description": "How long should we wait after stream goes dry to close the window associated with it If Never is selected then the window will stay until new stream causes the screen to reconfigure or hydraPrint exits",
          "hierarchy": "UI HydraPrint",
          "module": "UI.HydraPrint",
          "name": "DeleteWinWhen",
          "package": "hydra-print",
          "partial": "Delete Win When",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hydra-print/docs/UI-HydraPrint.html#t:DeleteWinWhen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UI.HydraPrint",
          "name": "HydraConf",
          "package": "hydra-print",
          "source": "src/UI-HydraPrint.html#HydraConf",
          "type": "data"
        },
        "index": {
          "hierarchy": "UI HydraPrint",
          "module": "UI.HydraPrint",
          "name": "HydraConf",
          "package": "hydra-print",
          "partial": "Hydra Conf",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hydra-print/docs/UI-HydraPrint.html#t:HydraConf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UI.HydraPrint",
          "name": "After",
          "package": "hydra-print",
          "signature": "After Seconds",
          "source": "src/UI-HydraPrint.html#DeleteWinWhen",
          "type": "function"
        },
        "index": {
          "hierarchy": "UI HydraPrint",
          "module": "UI.HydraPrint",
          "name": "After",
          "package": "hydra-print",
          "partial": "After",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hydra-print/docs/UI-HydraPrint.html#v:After"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UI.HydraPrint",
          "name": "HydraConf",
          "package": "hydra-print",
          "signature": "HydraConf",
          "source": "src/UI-HydraPrint.html#HydraConf",
          "type": "function"
        },
        "index": {
          "hierarchy": "UI HydraPrint",
          "module": "UI.HydraPrint",
          "name": "HydraConf",
          "package": "hydra-print",
          "partial": "Hydra Conf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hydra-print/docs/UI-HydraPrint.html#v:HydraConf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UI.HydraPrint",
          "name": "Immediately",
          "package": "hydra-print",
          "signature": "Immediately",
          "source": "src/UI-HydraPrint.html#DeleteWinWhen",
          "type": "function"
        },
        "index": {
          "hierarchy": "UI HydraPrint",
          "module": "UI.HydraPrint",
          "name": "Immediately",
          "package": "hydra-print",
          "partial": "Immediately",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hydra-print/docs/UI-HydraPrint.html#v:Immediately"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UI.HydraPrint",
          "name": "Never",
          "package": "hydra-print",
          "signature": "Never",
          "source": "src/UI-HydraPrint.html#DeleteWinWhen",
          "type": "function"
        },
        "index": {
          "hierarchy": "UI HydraPrint",
          "module": "UI.HydraPrint",
          "name": "Never",
          "package": "hydra-print",
          "partial": "Never",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hydra-print/docs/UI-HydraPrint.html#v:Never"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UI.HydraPrint",
          "name": "dbgLogLn",
          "package": "hydra-print",
          "signature": "String -\u003e IO ()",
          "source": "src/UI-HydraPrint.html#dbgLogLn",
          "type": "function"
        },
        "index": {
          "hierarchy": "UI HydraPrint",
          "module": "UI.HydraPrint",
          "name": "dbgLogLn",
          "normalized": "String-\u003eIO()",
          "package": "hydra-print",
          "partial": "Log Ln",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hydra-print/docs/UI-HydraPrint.html#v:dbgLogLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike the name says, a default set of options for passing to \u003ccode\u003e\u003ca\u003ehydraPrint\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "UI.HydraPrint",
          "name": "defaultHydraConf",
          "package": "hydra-print",
          "signature": "HydraConf",
          "source": "src/UI-HydraPrint.html#defaultHydraConf",
          "type": "function"
        },
        "index": {
          "description": "Like the name says default set of options for passing to hydraPrint",
          "hierarchy": "UI HydraPrint",
          "module": "UI.HydraPrint",
          "name": "defaultHydraConf",
          "package": "hydra-print",
          "partial": "Hydra Conf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hydra-print/docs/UI-HydraPrint.html#v:defaultHydraConf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UI.HydraPrint",
          "name": "deleteWhen",
          "package": "hydra-print",
          "signature": "DeleteWinWhen",
          "source": "src/UI-HydraPrint.html#HydraConf",
          "type": "function"
        },
        "index": {
          "hierarchy": "UI HydraPrint",
          "module": "UI.HydraPrint",
          "name": "deleteWhen",
          "package": "hydra-print",
          "partial": "When",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hydra-print/docs/UI-HydraPrint.html#v:deleteWhen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes a \u003cem\u003esource\u003c/em\u003e of input streams, which may be added dynamically.  A stream\n that joins dynamically, exits once it issues an end-of-stream.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003ehydraPrint\u003c/a\u003e\u003c/code\u003e is a blocking call that doesn't return until ALL streams that\n appear produce an end-of-stream, AND the stream-source itself reaches\n end-of-stream.\n\u003c/p\u003e",
          "module": "UI.HydraPrint",
          "name": "hydraPrint",
          "package": "hydra-print",
          "signature": "HydraConf -\u003e InputStream (String, InputStream ByteString) -\u003e IO ()",
          "source": "src/UI-HydraPrint.html#hydraPrint",
          "type": "function"
        },
        "index": {
          "description": "Takes source of input streams which may be added dynamically stream that joins dynamically exits once it issues an end-of-stream hydraPrint is blocking call that doesn return until ALL streams that appear produce an end-of-stream AND the stream-source itself reaches end-of-stream",
          "hierarchy": "UI HydraPrint",
          "module": "UI.HydraPrint",
          "name": "hydraPrint",
          "normalized": "HydraConf-\u003eInputStream(String,InputStream ByteString)-\u003eIO()",
          "package": "hydra-print",
          "partial": "Print",
          "signature": "HydraConf-\u003eInputStream(String,InputStream ByteString)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hydra-print/docs/UI-HydraPrint.html#v:hydraPrint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a fixed list of input streams.  This variant preemptively splits the screen\n into exactly one panel per stream.\n\u003c/p\u003e",
          "module": "UI.HydraPrint",
          "name": "hydraPrintStatic",
          "package": "hydra-print",
          "signature": "HydraConf -\u003e [(String, InputStream ByteString)] -\u003e IO ()",
          "source": "src/UI-HydraPrint.html#hydraPrintStatic",
          "type": "function"
        },
        "index": {
          "description": "Take fixed list of input streams This variant preemptively splits the screen into exactly one panel per stream",
          "hierarchy": "UI HydraPrint",
          "module": "UI.HydraPrint",
          "name": "hydraPrintStatic",
          "normalized": "HydraConf-\u003e[(String,InputStream ByteString)]-\u003eIO()",
          "package": "hydra-print",
          "partial": "Print Static",
          "signature": "HydraConf-\u003e[(String,InputStream ByteString)]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hydra-print/docs/UI-HydraPrint.html#v:hydraPrintStatic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UI.HydraPrint",
          "name": "useColor",
          "package": "hydra-print",
          "signature": "Bool",
          "source": "src/UI-HydraPrint.html#HydraConf",
          "type": "function"
        },
        "index": {
          "hierarchy": "UI HydraPrint",
          "module": "UI.HydraPrint",
          "name": "useColor",
          "package": "hydra-print",
          "partial": "Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hydra-print/docs/UI-HydraPrint.html#v:useColor"
      }
    }
  ]
]