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
        "word": "stm-promise"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTVars with a dirty bit that allows for one listener\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.STM.DTVar",
          "name": "DTVar",
          "package": "stm-promise",
          "source": "src/Control-Concurrent-STM-DTVar.html",
          "type": "module"
        },
        "index": {
          "description": "TVars with dirty bit that allows for one listener",
          "hierarchy": "Control Concurrent STM DTVar",
          "module": "Control.Concurrent.STM.DTVar",
          "name": "DTVar",
          "package": "stm-promise",
          "partial": "DTVar",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-DTVar.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTVars with a dirty bit which allows for one listener.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.DTVar",
          "name": "DTVar",
          "package": "stm-promise",
          "source": "src/Control-Concurrent-STM-DTVar.html#DTVar",
          "type": "data"
        },
        "index": {
          "description": "TVars with dirty bit which allows for one listener",
          "hierarchy": "Control Concurrent STM DTVar",
          "module": "Control.Concurrent.STM.DTVar",
          "name": "DTVar",
          "package": "stm-promise",
          "partial": "DTVar",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-DTVar.html#t:DTVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eListens until the dirty bit is true, then removes the dirty bit and\n   returns the read element\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.DTVar",
          "name": "listenDTVar",
          "package": "stm-promise",
          "signature": "DTVar a -\u003e STM a",
          "source": "src/Control-Concurrent-STM-DTVar.html#listenDTVar",
          "type": "function"
        },
        "index": {
          "description": "Listens until the dirty bit is true then removes the dirty bit and returns the read element",
          "hierarchy": "Control Concurrent STM DTVar",
          "module": "Control.Concurrent.STM.DTVar",
          "name": "listenDTVar",
          "normalized": "DTVar a-\u003eSTM a",
          "package": "stm-promise",
          "partial": "DTVar",
          "signature": "DTVar a-\u003eSTM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-DTVar.html#v:listenDTVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003elistenDTVar\u003c/a\u003e\u003c/code\u003e in \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.DTVar",
          "name": "listenDTVarIO",
          "package": "stm-promise",
          "signature": "DTVar a -\u003e IO a",
          "source": "src/Control-Concurrent-STM-DTVar.html#listenDTVarIO",
          "type": "function"
        },
        "index": {
          "description": "listenDTVar in IO",
          "hierarchy": "Control Concurrent STM DTVar",
          "module": "Control.Concurrent.STM.DTVar",
          "name": "listenDTVarIO",
          "normalized": "DTVar a-\u003eIO a",
          "package": "stm-promise",
          "partial": "DTVar IO",
          "signature": "DTVar a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-DTVar.html#v:listenDTVarIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eListen until any of the dirty bits are true, then removes all dirty bits\n   and returns all \u003ccode\u003e\u003ca\u003eDTVar\u003c/a\u003e\u003c/code\u003e's values, in order.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.DTVar",
          "name": "listenDTVars",
          "package": "stm-promise",
          "signature": "[DTVar a] -\u003e STM [a]",
          "source": "src/Control-Concurrent-STM-DTVar.html#listenDTVars",
          "type": "function"
        },
        "index": {
          "description": "Listen until any of the dirty bits are true then removes all dirty bits and returns all DTVar values in order",
          "hierarchy": "Control Concurrent STM DTVar",
          "module": "Control.Concurrent.STM.DTVar",
          "name": "listenDTVars",
          "normalized": "[DTVar a]-\u003eSTM[a]",
          "package": "stm-promise",
          "partial": "DTVars",
          "signature": "[DTVar a]-\u003eSTM[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-DTVar.html#v:listenDTVars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003elistenDTVars\u003c/a\u003e\u003c/code\u003e in \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.DTVar",
          "name": "listenDTVarsIO",
          "package": "stm-promise",
          "signature": "[DTVar a] -\u003e IO [a]",
          "source": "src/Control-Concurrent-STM-DTVar.html#listenDTVarsIO",
          "type": "function"
        },
        "index": {
          "description": "listenDTVars in IO",
          "hierarchy": "Control Concurrent STM DTVar",
          "module": "Control.Concurrent.STM.DTVar",
          "name": "listenDTVarsIO",
          "normalized": "[DTVar a]-\u003eIO[a]",
          "package": "stm-promise",
          "partial": "DTVars IO",
          "signature": "[DTVar a]-\u003eIO[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-DTVar.html#v:listenDTVarsIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify a DTVar, making it dirty.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.DTVar",
          "name": "modifyDTVar",
          "package": "stm-promise",
          "signature": "DTVar a -\u003e (a -\u003e a) -\u003e STM ()",
          "source": "src/Control-Concurrent-STM-DTVar.html#modifyDTVar",
          "type": "function"
        },
        "index": {
          "description": "Modify DTVar making it dirty",
          "hierarchy": "Control Concurrent STM DTVar",
          "module": "Control.Concurrent.STM.DTVar",
          "name": "modifyDTVar",
          "normalized": "DTVar a-\u003e(a-\u003ea)-\u003eSTM()",
          "package": "stm-promise",
          "partial": "DTVar",
          "signature": "DTVar a-\u003e(a-\u003ea)-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-DTVar.html#v:modifyDTVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNew DTVar which starts dirty\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.DTVar",
          "name": "newDTVar",
          "package": "stm-promise",
          "signature": "a -\u003e STM (DTVar a)",
          "source": "src/Control-Concurrent-STM-DTVar.html#newDTVar",
          "type": "function"
        },
        "index": {
          "description": "New DTVar which starts dirty",
          "hierarchy": "Control Concurrent STM DTVar",
          "module": "Control.Concurrent.STM.DTVar",
          "name": "newDTVar",
          "normalized": "a-\u003eSTM(DTVar a)",
          "package": "stm-promise",
          "partial": "DTVar",
          "signature": "a-\u003eSTM(DTVar a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-DTVar.html#v:newDTVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003enewDTVar\u003c/a\u003e\u003c/code\u003e in \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.DTVar",
          "name": "newDTVarIO",
          "package": "stm-promise",
          "signature": "a -\u003e IO (DTVar a)",
          "source": "src/Control-Concurrent-STM-DTVar.html#newDTVarIO",
          "type": "function"
        },
        "index": {
          "description": "newDTVar in IO",
          "hierarchy": "Control Concurrent STM DTVar",
          "module": "Control.Concurrent.STM.DTVar",
          "name": "newDTVarIO",
          "normalized": "a-\u003eIO(DTVar a)",
          "package": "stm-promise",
          "partial": "DTVar IO",
          "signature": "a-\u003eIO(DTVar a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-DTVar.html#v:newDTVarIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads a DTVar \u003cem\u003ewithout\u003c/em\u003e changing the dirty bit\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.DTVar",
          "name": "readDTVar",
          "package": "stm-promise",
          "signature": "DTVar a -\u003e STM a",
          "source": "src/Control-Concurrent-STM-DTVar.html#readDTVar",
          "type": "function"
        },
        "index": {
          "description": "Reads DTVar without changing the dirty bit",
          "hierarchy": "Control Concurrent STM DTVar",
          "module": "Control.Concurrent.STM.DTVar",
          "name": "readDTVar",
          "normalized": "DTVar a-\u003eSTM a",
          "package": "stm-promise",
          "partial": "DTVar",
          "signature": "DTVar a-\u003eSTM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-DTVar.html#v:readDTVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ereadDTVar\u003c/a\u003e\u003c/code\u003e in \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.DTVar",
          "name": "readDTVarIO",
          "package": "stm-promise",
          "signature": "DTVar a -\u003e IO a",
          "source": "src/Control-Concurrent-STM-DTVar.html#readDTVarIO",
          "type": "function"
        },
        "index": {
          "description": "readDTVar in IO",
          "hierarchy": "Control Concurrent STM DTVar",
          "module": "Control.Concurrent.STM.DTVar",
          "name": "readDTVarIO",
          "normalized": "DTVar a-\u003eIO a",
          "package": "stm-promise",
          "partial": "DTVar IO",
          "signature": "DTVar a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-DTVar.html#v:readDTVarIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a value to a DTVar, making it dirty\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.DTVar",
          "name": "writeDTVar",
          "package": "stm-promise",
          "signature": "DTVar a -\u003e a -\u003e STM ()",
          "source": "src/Control-Concurrent-STM-DTVar.html#writeDTVar",
          "type": "function"
        },
        "index": {
          "description": "Write value to DTVar making it dirty",
          "hierarchy": "Control Concurrent STM DTVar",
          "module": "Control.Concurrent.STM.DTVar",
          "name": "writeDTVar",
          "normalized": "DTVar a-\u003ea-\u003eSTM()",
          "package": "stm-promise",
          "partial": "DTVar",
          "signature": "DTVar a-\u003ea-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-DTVar.html#v:writeDTVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ewriteDTVar\u003c/a\u003e\u003c/code\u003e in \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.DTVar",
          "name": "writeDTVarIO",
          "package": "stm-promise",
          "signature": "DTVar a -\u003e a -\u003e IO ()",
          "source": "src/Control-Concurrent-STM-DTVar.html#writeDTVarIO",
          "type": "function"
        },
        "index": {
          "description": "writeDTVar in IO",
          "hierarchy": "Control Concurrent STM DTVar",
          "module": "Control.Concurrent.STM.DTVar",
          "name": "writeDTVarIO",
          "normalized": "DTVar a-\u003ea-\u003eIO()",
          "package": "stm-promise",
          "partial": "DTVar IO",
          "signature": "DTVar a-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-DTVar.html#v:writeDTVarIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePromises for processes\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.STM.Promise.Process",
          "name": "Process",
          "package": "stm-promise",
          "source": "src/Control-Concurrent-STM-Promise-Process.html",
          "type": "module"
        },
        "index": {
          "description": "Promises for processes",
          "hierarchy": "Control Concurrent STM Promise Process",
          "module": "Control.Concurrent.STM.Promise.Process",
          "name": "Process",
          "package": "stm-promise",
          "partial": "Process",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise-Process.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines the exit codes that a program can return.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Promise.Process",
          "name": "ExitCode",
          "package": "stm-promise",
          "type": "data"
        },
        "index": {
          "description": "Defines the exit codes that program can return",
          "hierarchy": "Control Concurrent STM Promise Process",
          "module": "Control.Concurrent.STM.Promise.Process",
          "name": "ExitCode",
          "package": "stm-promise",
          "partial": "Exit Code",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise-Process.html#t:ExitCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe result from a process\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Promise.Process",
          "name": "ProcessResult",
          "package": "stm-promise",
          "source": "src/Control-Concurrent-STM-Promise-Process.html#ProcessResult",
          "type": "data"
        },
        "index": {
          "description": "The result from process",
          "hierarchy": "Control Concurrent STM Promise Process",
          "module": "Control.Concurrent.STM.Promise.Process",
          "name": "ProcessResult",
          "package": "stm-promise",
          "partial": "Process Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise-Process.html#t:ProcessResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eindicates program failure with an exit code.\n The exact interpretation of the code is\n operating-system dependent.  In particular, some values\n may be prohibited (e.g. 0 on a POSIX-compliant system).\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Promise.Process",
          "name": "ExitFailure",
          "package": "stm-promise",
          "signature": "ExitFailure Int",
          "type": "function"
        },
        "index": {
          "description": "indicates program failure with an exit code The exact interpretation of the code is operating-system dependent In particular some values may be prohibited e.g on POSIX-compliant system",
          "hierarchy": "Control Concurrent STM Promise Process",
          "module": "Control.Concurrent.STM.Promise.Process",
          "name": "ExitFailure",
          "package": "stm-promise",
          "partial": "Exit Failure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise-Process.html#v:ExitFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eindicates successful termination;\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Promise.Process",
          "name": "ExitSuccess",
          "package": "stm-promise",
          "signature": "ExitSuccess",
          "type": "function"
        },
        "index": {
          "description": "indicates successful termination",
          "hierarchy": "Control Concurrent STM Promise Process",
          "module": "Control.Concurrent.STM.Promise.Process",
          "name": "ExitSuccess",
          "package": "stm-promise",
          "partial": "Exit Success",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise-Process.html#v:ExitSuccess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.Promise.Process",
          "name": "ProcessResult",
          "package": "stm-promise",
          "signature": "ProcessResult",
          "source": "src/Control-Concurrent-STM-Promise-Process.html#ProcessResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM Promise Process",
          "module": "Control.Concurrent.STM.Promise.Process",
          "name": "ProcessResult",
          "package": "stm-promise",
          "partial": "Process Result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise-Process.html#v:ProcessResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.Promise.Process",
          "name": "excode",
          "package": "stm-promise",
          "signature": "ExitCode",
          "source": "src/Control-Concurrent-STM-Promise-Process.html#ProcessResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM Promise Process",
          "module": "Control.Concurrent.STM.Promise.Process",
          "name": "excode",
          "package": "stm-promise",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise-Process.html#v:excode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a \u003ccode\u003e\u003ca\u003ePromise\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Promise.Process",
          "name": "processPromise",
          "package": "stm-promise",
          "signature": "FilePath-\u003e [String]-\u003e String-\u003e IO (Promise ProcessResult)",
          "type": "function"
        },
        "index": {
          "description": "Make Promise",
          "hierarchy": "Control Concurrent STM Promise Process",
          "module": "Control.Concurrent.STM.Promise.Process",
          "name": "processPromise",
          "normalized": "FilePath-\u003e[String]-\u003eString-\u003eIO(Promise ProcessResult)",
          "package": "stm-promise",
          "partial": "Promise",
          "signature": "FilePath-\u003e[String]-\u003eString-\u003eIO(Promise ProcessResult)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise-Process.html#v:processPromise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a \u003ccode\u003e\u003ca\u003ePromise\u003c/a\u003e\u003c/code\u003e, but add a callback that will\n   be run when the process finishes nicely.\n   This hook is mainly intended for logging.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Promise.Process",
          "name": "processPromiseCallback",
          "package": "stm-promise",
          "signature": "(ProcessResult -\u003e IO ())-\u003e FilePath-\u003e [String]-\u003e String-\u003e IO (Promise ProcessResult)",
          "type": "function"
        },
        "index": {
          "description": "Make Promise but add callback that will be run when the process finishes nicely This hook is mainly intended for logging",
          "hierarchy": "Control Concurrent STM Promise Process",
          "module": "Control.Concurrent.STM.Promise.Process",
          "name": "processPromiseCallback",
          "normalized": "(ProcessResult-\u003eIO())-\u003eFilePath-\u003e[String]-\u003eString-\u003eIO(Promise ProcessResult)",
          "package": "stm-promise",
          "partial": "Promise Callback",
          "signature": "(ProcessResult-\u003eIO())-\u003eFilePath-\u003e[String]-\u003eString-\u003eIO(Promise ProcessResult)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise-Process.html#v:processPromiseCallback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.Promise.Process",
          "name": "stderr",
          "package": "stm-promise",
          "signature": "String",
          "source": "src/Control-Concurrent-STM-Promise-Process.html#ProcessResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM Promise Process",
          "module": "Control.Concurrent.STM.Promise.Process",
          "name": "stderr",
          "package": "stm-promise",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise-Process.html#v:stderr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.Promise.Process",
          "name": "stdout",
          "package": "stm-promise",
          "signature": "String",
          "source": "src/Control-Concurrent-STM-Promise-Process.html#ProcessResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM Promise Process",
          "module": "Control.Concurrent.STM.Promise.Process",
          "name": "stdout",
          "package": "stm-promise",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise-Process.html#v:stdout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA tree of computation\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.STM.Promise.Tree",
          "name": "Tree",
          "package": "stm-promise",
          "source": "src/Control-Concurrent-STM-Promise-Tree.html",
          "type": "module"
        },
        "index": {
          "description": "tree of computation",
          "hierarchy": "Control Concurrent STM Promise Tree",
          "module": "Control.Concurrent.STM.Promise.Tree",
          "name": "Tree",
          "package": "stm-promise",
          "partial": "Tree",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise-Tree.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBoth/Either labels\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Promise.Tree",
          "name": "Label",
          "package": "stm-promise",
          "source": "src/Control-Concurrent-STM-Promise-Tree.html#Label",
          "type": "data"
        },
        "index": {
          "description": "Both Either labels",
          "hierarchy": "Control Concurrent STM Promise Tree",
          "module": "Control.Concurrent.STM.Promise.Tree",
          "name": "Label",
          "package": "stm-promise",
          "partial": "Label",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise-Tree.html#t:Label"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBoth/Either-trees\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Promise.Tree",
          "name": "Tree",
          "package": "stm-promise",
          "source": "src/Control-Concurrent-STM-Promise-Tree.html#Tree",
          "type": "data"
        },
        "index": {
          "description": "Both Either-trees",
          "hierarchy": "Control Concurrent STM Promise Tree",
          "module": "Control.Concurrent.STM.Promise.Tree",
          "name": "Tree",
          "package": "stm-promise",
          "partial": "Tree",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise-Tree.html#t:Tree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBoth of these must succeed with an An\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Promise.Tree",
          "name": "Both",
          "package": "stm-promise",
          "signature": "Both",
          "source": "src/Control-Concurrent-STM-Promise-Tree.html#Label",
          "type": "function"
        },
        "index": {
          "description": "Both of these must succeed with an An",
          "hierarchy": "Control Concurrent STM Promise Tree",
          "module": "Control.Concurrent.STM.Promise.Tree",
          "name": "Both",
          "package": "stm-promise",
          "partial": "Both",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise-Tree.html#v:Both"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEither of these must succeed with an An, and that one is returned\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Promise.Tree",
          "name": "Either",
          "package": "stm-promise",
          "signature": "Either",
          "source": "src/Control-Concurrent-STM-Promise-Tree.html#Label",
          "type": "function"
        },
        "index": {
          "description": "Either of these must succeed with an An and that one is returned",
          "hierarchy": "Control Concurrent STM Promise Tree",
          "module": "Control.Concurrent.STM.Promise.Tree",
          "name": "Either",
          "package": "stm-promise",
          "partial": "Either",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise-Tree.html#v:Either"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA computation\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Promise.Tree",
          "name": "Leaf",
          "package": "stm-promise",
          "signature": "Leaf a",
          "source": "src/Control-Concurrent-STM-Promise-Tree.html#Tree",
          "type": "function"
        },
        "index": {
          "description": "computation",
          "hierarchy": "Control Concurrent STM Promise Tree",
          "module": "Control.Concurrent.STM.Promise.Tree",
          "name": "Leaf",
          "package": "stm-promise",
          "partial": "Leaf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise-Tree.html#v:Leaf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine two trees with the semantics of \u003ccode\u003e\u003ca\u003eLabel\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Promise.Tree",
          "name": "Node",
          "package": "stm-promise",
          "signature": "Node Label (Tree a) (Tree a)",
          "source": "src/Control-Concurrent-STM-Promise-Tree.html#Tree",
          "type": "function"
        },
        "index": {
          "description": "Combine two trees with the semantics of Label",
          "hierarchy": "Control Concurrent STM Promise Tree",
          "module": "Control.Concurrent.STM.Promise.Tree",
          "name": "Node",
          "package": "stm-promise",
          "partial": "Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise-Tree.html#v:Node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThere is a mean of recovering this computation, by returning mempty\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Promise.Tree",
          "name": "Recoverable",
          "package": "stm-promise",
          "signature": "Recoverable (Tree a)",
          "source": "src/Control-Concurrent-STM-Promise-Tree.html#Tree",
          "type": "function"
        },
        "index": {
          "description": "There is mean of recovering this computation by returning mempty",
          "hierarchy": "Control Concurrent STM Promise Tree",
          "module": "Control.Concurrent.STM.Promise.Tree",
          "name": "Recoverable",
          "package": "stm-promise",
          "partial": "Recoverable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise-Tree.html#v:Recoverable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluates a tree of promises, cutting of unnecessary branches, given that\n   some other thread(s) evaluates the promises.\n\u003c/p\u003e\u003cp\u003eThe first result is the failures, then the actual result comes\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Promise.Tree",
          "name": "evalTree",
          "package": "stm-promise",
          "signature": "(a -\u003e Bool) -\u003e Tree (Promise a) -\u003e IO (a, a)",
          "source": "src/Control-Concurrent-STM-Promise-Tree.html#evalTree",
          "type": "function"
        },
        "index": {
          "description": "Evaluates tree of promises cutting of unnecessary branches given that some other thread evaluates the promises The first result is the failures then the actual result comes",
          "hierarchy": "Control Concurrent STM Promise Tree",
          "module": "Control.Concurrent.STM.Promise.Tree",
          "name": "evalTree",
          "normalized": "(a-\u003eBool)-\u003eTree(Promise a)-\u003eIO(a,a)",
          "package": "stm-promise",
          "partial": "Tree",
          "signature": "(a-\u003eBool)-\u003eTree(Promise a)-\u003eIO(a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise-Tree.html#v:evalTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple scheduling (see \u003ccode\u003e\u003ca\u003eworkers\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Promise.Tree",
          "name": "interleave",
          "package": "stm-promise",
          "signature": "Tree a -\u003e [a]",
          "source": "src/Control-Concurrent-STM-Promise-Tree.html#interleave",
          "type": "function"
        },
        "index": {
          "description": "simple scheduling see workers",
          "hierarchy": "Control Concurrent STM Promise Tree",
          "module": "Control.Concurrent.STM.Promise.Tree",
          "name": "interleave",
          "normalized": "Tree a-\u003e[a]",
          "package": "stm-promise",
          "signature": "Tree a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise-Tree.html#v:interleave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll of these must succeed\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Promise.Tree",
          "name": "requireAll",
          "package": "stm-promise",
          "signature": "[Tree a] -\u003e Tree a",
          "source": "src/Control-Concurrent-STM-Promise-Tree.html#requireAll",
          "type": "function"
        },
        "index": {
          "description": "All of these must succeed",
          "hierarchy": "Control Concurrent STM Promise Tree",
          "module": "Control.Concurrent.STM.Promise.Tree",
          "name": "requireAll",
          "normalized": "[Tree a]-\u003eTree a",
          "package": "stm-promise",
          "partial": "All",
          "signature": "[Tree a]-\u003eTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise-Tree.html#v:requireAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAny of these must succeed\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Promise.Tree",
          "name": "requireAny",
          "package": "stm-promise",
          "signature": "[Tree a] -\u003e Tree a",
          "source": "src/Control-Concurrent-STM-Promise-Tree.html#requireAny",
          "type": "function"
        },
        "index": {
          "description": "Any of these must succeed",
          "hierarchy": "Control Concurrent STM Promise Tree",
          "module": "Control.Concurrent.STM.Promise.Tree",
          "name": "requireAny",
          "normalized": "[Tree a]-\u003eTree a",
          "package": "stm-promise",
          "partial": "Any",
          "signature": "[Tree a]-\u003eTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise-Tree.html#v:requireAny"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShows a tree\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Promise.Tree",
          "name": "showTree",
          "package": "stm-promise",
          "signature": "Tree a -\u003e String",
          "source": "src/Control-Concurrent-STM-Promise-Tree.html#showTree",
          "type": "function"
        },
        "index": {
          "description": "Shows tree",
          "hierarchy": "Control Concurrent STM Promise Tree",
          "module": "Control.Concurrent.STM.Promise.Tree",
          "name": "showTree",
          "normalized": "Tree a-\u003eString",
          "package": "stm-promise",
          "partial": "Tree",
          "signature": "Tree a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise-Tree.html#v:showTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs many as possible should succeed, try all.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Promise.Tree",
          "name": "tryAll",
          "package": "stm-promise",
          "signature": "[Tree a] -\u003e Tree a",
          "source": "src/Control-Concurrent-STM-Promise-Tree.html#tryAll",
          "type": "function"
        },
        "index": {
          "description": "As many as possible should succeed try all",
          "hierarchy": "Control Concurrent STM Promise Tree",
          "module": "Control.Concurrent.STM.Promise.Tree",
          "name": "tryAll",
          "normalized": "[Tree a]-\u003eTree a",
          "package": "stm-promise",
          "partial": "All",
          "signature": "[Tree a]-\u003eTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise-Tree.html#v:tryAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssuming some other thread(s) evaluate the promises in the tree, this gives\n   a live view of the progress, and cancels unnecessary subtrees (due to \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eThe first argument is a way to deem promises with results as failures. `(== mempty)` or\n   (const False) could be good alternatives. These failures are sent to the TChan.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Promise.Tree",
          "name": "watchTree",
          "package": "stm-promise",
          "signature": "(a -\u003e Bool) -\u003e Tree (Promise a) -\u003e IO (TChan a, DTVar (Tree (PromiseResult a)))",
          "source": "src/Control-Concurrent-STM-Promise-Tree.html#watchTree",
          "type": "function"
        },
        "index": {
          "description": "Assuming some other thread evaluate the promises in the tree this gives live view of the progress and cancels unnecessary subtrees due to Either The first argument is way to deem promises with results as failures mempty or const False could be good alternatives These failures are sent to the TChan",
          "hierarchy": "Control Concurrent STM Promise Tree",
          "module": "Control.Concurrent.STM.Promise.Tree",
          "name": "watchTree",
          "normalized": "(a-\u003eBool)-\u003eTree(Promise a)-\u003eIO(TChan a,DTVar(Tree(PromiseResult a)))",
          "package": "stm-promise",
          "partial": "Tree",
          "signature": "(a-\u003eBool)-\u003eTree(Promise a)-\u003eIO(TChan a,DTVar(Tree(PromiseResult a)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise-Tree.html#v:watchTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEvaluating promises in parallel\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.STM.Promise.Workers",
          "name": "Workers",
          "package": "stm-promise",
          "source": "src/Control-Concurrent-STM-Promise-Workers.html",
          "type": "module"
        },
        "index": {
          "description": "Evaluating promises in parallel",
          "hierarchy": "Control Concurrent STM Promise Workers",
          "module": "Control.Concurrent.STM.Promise.Workers",
          "name": "Workers",
          "package": "stm-promise",
          "partial": "Workers",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise-Workers.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluates a single promise (in the calling thread),\n   maybe using a timeout in microseconds.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Promise.Workers",
          "name": "evaluatePromise",
          "package": "stm-promise",
          "signature": "Maybe Int -\u003e Promise a -\u003e IO ()",
          "source": "src/Control-Concurrent-STM-Promise-Workers.html#evaluatePromise",
          "type": "function"
        },
        "index": {
          "description": "Evaluates single promise in the calling thread maybe using timeout in microseconds",
          "hierarchy": "Control Concurrent STM Promise Workers",
          "module": "Control.Concurrent.STM.Promise.Workers",
          "name": "evaluatePromise",
          "normalized": "Maybe Int-\u003ePromise a-\u003eIO()",
          "package": "stm-promise",
          "partial": "Promise",
          "signature": "Maybe Int-\u003ePromise a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise-Workers.html#v:evaluatePromise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluates a channel of promises, maybe using a timeout in microseconds.\n   Stops when the channel is empty.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Promise.Workers",
          "name": "worker",
          "package": "stm-promise",
          "signature": "Maybe Int -\u003e TChan (Promise a) -\u003e IO ()",
          "source": "src/Control-Concurrent-STM-Promise-Workers.html#worker",
          "type": "function"
        },
        "index": {
          "description": "Evaluates channel of promises maybe using timeout in microseconds Stops when the channel is empty",
          "hierarchy": "Control Concurrent STM Promise Workers",
          "module": "Control.Concurrent.STM.Promise.Workers",
          "name": "worker",
          "normalized": "Maybe Int-\u003eTChan(Promise a)-\u003eIO()",
          "package": "stm-promise",
          "signature": "Maybe Int-\u003eTChan(Promise a)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise-Workers.html#v:worker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate these promises on n processors, maybe using a timeout in microseconds.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Promise.Workers",
          "name": "workers",
          "package": "stm-promise",
          "signature": "Maybe Int -\u003e Int -\u003e [Promise a] -\u003e IO ()",
          "source": "src/Control-Concurrent-STM-Promise-Workers.html#workers",
          "type": "function"
        },
        "index": {
          "description": "Evaluate these promises on processors maybe using timeout in microseconds",
          "hierarchy": "Control Concurrent STM Promise Workers",
          "module": "Control.Concurrent.STM.Promise.Workers",
          "name": "workers",
          "normalized": "Maybe Int-\u003eInt-\u003e[Promise a]-\u003eIO()",
          "package": "stm-promise",
          "signature": "Maybe Int-\u003eInt-\u003e[Promise a]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise-Workers.html#v:workers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePromises that allow spawning and cancelling in \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e, and an \u003ccode\u003e\u003ca\u003eSTM\u003c/a\u003e\u003c/code\u003e result\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.STM.Promise",
          "name": "Promise",
          "package": "stm-promise",
          "source": "src/Control-Concurrent-STM-Promise.html",
          "type": "module"
        },
        "index": {
          "description": "Promises that allow spawning and cancelling in IO and an STM result",
          "hierarchy": "Control Concurrent STM Promise",
          "module": "Control.Concurrent.STM.Promise",
          "name": "Promise",
          "package": "stm-promise",
          "partial": "Promise",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA promise\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Promise",
          "name": "Promise",
          "package": "stm-promise",
          "source": "src/Control-Concurrent-STM-Promise.html#Promise",
          "type": "data"
        },
        "index": {
          "description": "promise",
          "hierarchy": "Control Concurrent STM Promise",
          "module": "Control.Concurrent.STM.Promise",
          "name": "Promise",
          "package": "stm-promise",
          "partial": "Promise",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise.html#t:Promise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe result of the promise\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Promise",
          "name": "PromiseResult",
          "package": "stm-promise",
          "source": "src/Control-Concurrent-STM-Promise.html#PromiseResult",
          "type": "data"
        },
        "index": {
          "description": "The result of the promise",
          "hierarchy": "Control Concurrent STM Promise",
          "module": "Control.Concurrent.STM.Promise",
          "name": "PromiseResult",
          "package": "stm-promise",
          "partial": "Promise Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise.html#t:PromiseResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA result\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Promise",
          "name": "An",
          "package": "stm-promise",
          "signature": "An a",
          "source": "src/Control-Concurrent-STM-Promise.html#PromiseResult",
          "type": "function"
        },
        "index": {
          "description": "result",
          "hierarchy": "Control Concurrent STM Promise",
          "module": "Control.Concurrent.STM.Promise",
          "name": "An",
          "package": "stm-promise",
          "partial": "An",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise.html#v:An"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCancelled\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Promise",
          "name": "Cancelled",
          "package": "stm-promise",
          "signature": "Cancelled",
          "source": "src/Control-Concurrent-STM-Promise.html#PromiseResult",
          "type": "function"
        },
        "index": {
          "description": "Cancelled",
          "hierarchy": "Control Concurrent STM Promise",
          "module": "Control.Concurrent.STM.Promise",
          "name": "Cancelled",
          "package": "stm-promise",
          "partial": "Cancelled",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise.html#v:Cancelled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.Promise",
          "name": "Promise",
          "package": "stm-promise",
          "signature": "Promise",
          "source": "src/Control-Concurrent-STM-Promise.html#Promise",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM Promise",
          "module": "Control.Concurrent.STM.Promise",
          "name": "Promise",
          "package": "stm-promise",
          "partial": "Promise",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise.html#v:Promise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNot finished yet (or not even spawned yet))\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Promise",
          "name": "Unfinished",
          "package": "stm-promise",
          "signature": "Unfinished",
          "source": "src/Control-Concurrent-STM-Promise.html#PromiseResult",
          "type": "function"
        },
        "index": {
          "description": "Not finished yet or not even spawned yet",
          "hierarchy": "Control Concurrent STM Promise",
          "module": "Control.Concurrent.STM.Promise",
          "name": "Unfinished",
          "package": "stm-promise",
          "partial": "Unfinished",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise.html#v:Unfinished"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the result (partial function)\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Promise",
          "name": "an",
          "package": "stm-promise",
          "signature": "PromiseResult a -\u003e a",
          "source": "src/Control-Concurrent-STM-Promise.html#an",
          "type": "function"
        },
        "index": {
          "description": "Gets the result partial function",
          "hierarchy": "Control Concurrent STM Promise",
          "module": "Control.Concurrent.STM.Promise",
          "name": "an",
          "normalized": "PromiseResult a-\u003ea",
          "package": "stm-promise",
          "signature": "PromiseResult a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise.html#v:an"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf both are finished (\u003ccode\u003e\u003ca\u003eAn\u003c/a\u003e\u003c/code\u003e), return them in a tuple.\n\u003c/p\u003e\u003cp\u003eIf either is \u003ccode\u003e\u003ca\u003eCancelled\u003c/a\u003e\u003c/code\u003e, this is also \u003ccode\u003e\u003ca\u003eCancelled\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eOtherwise, both are \u003ccode\u003e\u003ca\u003eUnfinished\u003c/a\u003e\u003c/code\u003e and so is this.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Promise",
          "name": "bothResults",
          "package": "stm-promise",
          "signature": "PromiseResult a -\u003e PromiseResult b -\u003e PromiseResult (a, b)",
          "source": "src/Control-Concurrent-STM-Promise.html#bothResults",
          "type": "function"
        },
        "index": {
          "description": "If both are finished An return them in tuple If either is Cancelled this is also Cancelled Otherwise both are Unfinished and so is this",
          "hierarchy": "Control Concurrent STM Promise",
          "module": "Control.Concurrent.STM.Promise",
          "name": "bothResults",
          "normalized": "PromiseResult a-\u003ePromiseResult b-\u003ePromiseResult(a,b)",
          "package": "stm-promise",
          "partial": "Results",
          "signature": "PromiseResult a-\u003ePromiseResult b-\u003ePromiseResult(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise.html#v:bothResults"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInstruction for cancelling\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Promise",
          "name": "cancel",
          "package": "stm-promise",
          "signature": "IO ()",
          "source": "src/Control-Concurrent-STM-Promise.html#Promise",
          "type": "function"
        },
        "index": {
          "description": "Instruction for cancelling",
          "hierarchy": "Control Concurrent STM Promise",
          "module": "Control.Concurrent.STM.Promise",
          "name": "cancel",
          "normalized": "IO()",
          "package": "stm-promise",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise.html#v:cancel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf either is finished (\u003ccode\u003e\u003ca\u003eAn\u003c/a\u003e\u003c/code\u003e), return one of them (favor the first one)\n\u003c/p\u003e\u003cp\u003eIf either is \u003ccode\u003e\u003ca\u003eUnfinished\u003c/a\u003e\u003c/code\u003e, this is also \u003ccode\u003e\u003ca\u003eUnfinished\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eOtherwise, both are \u003ccode\u003e\u003ca\u003eCancelled\u003c/a\u003e\u003c/code\u003e and so is this.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Promise",
          "name": "eitherResult",
          "package": "stm-promise",
          "signature": "PromiseResult a -\u003e PromiseResult a -\u003e PromiseResult a",
          "source": "src/Control-Concurrent-STM-Promise.html#eitherResult",
          "type": "function"
        },
        "index": {
          "description": "If either is finished An return one of them favor the first one If either is Unfinished this is also Unfinished Otherwise both are Cancelled and so is this",
          "hierarchy": "Control Concurrent STM Promise",
          "module": "Control.Concurrent.STM.Promise",
          "name": "eitherResult",
          "normalized": "PromiseResult a-\u003ePromiseResult a-\u003ePromiseResult a",
          "package": "stm-promise",
          "partial": "Result",
          "signature": "PromiseResult a-\u003ePromiseResult a-\u003ePromiseResult a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise.html#v:eitherResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs this a result?\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Promise",
          "name": "isAn",
          "package": "stm-promise",
          "signature": "PromiseResult a -\u003e Bool",
          "source": "src/Control-Concurrent-STM-Promise.html#isAn",
          "type": "function"
        },
        "index": {
          "description": "Is this result",
          "hierarchy": "Control Concurrent STM Promise",
          "module": "Control.Concurrent.STM.Promise",
          "name": "isAn",
          "normalized": "PromiseResult a-\u003eBool",
          "package": "stm-promise",
          "partial": "An",
          "signature": "PromiseResult a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise.html#v:isAn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs this cancelled?\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Promise",
          "name": "isCancelled",
          "package": "stm-promise",
          "signature": "PromiseResult a -\u003e Bool",
          "source": "src/Control-Concurrent-STM-Promise.html#isCancelled",
          "type": "function"
        },
        "index": {
          "description": "Is this cancelled",
          "hierarchy": "Control Concurrent STM Promise",
          "module": "Control.Concurrent.STM.Promise",
          "name": "isCancelled",
          "normalized": "PromiseResult a-\u003eBool",
          "package": "stm-promise",
          "partial": "Cancelled",
          "signature": "PromiseResult a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise.html#v:isCancelled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs this unfinished?\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Promise",
          "name": "isUnfinished",
          "package": "stm-promise",
          "signature": "PromiseResult a -\u003e Bool",
          "source": "src/Control-Concurrent-STM-Promise.html#isUnfinished",
          "type": "function"
        },
        "index": {
          "description": "Is this unfinished",
          "hierarchy": "Control Concurrent STM Promise",
          "module": "Control.Concurrent.STM.Promise",
          "name": "isUnfinished",
          "normalized": "PromiseResult a-\u003eBool",
          "package": "stm-promise",
          "partial": "Unfinished",
          "signature": "PromiseResult a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise.html#v:isUnfinished"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe result of a computation\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Promise",
          "name": "result",
          "package": "stm-promise",
          "signature": "STM (PromiseResult a)",
          "source": "src/Control-Concurrent-STM-Promise.html#Promise",
          "type": "function"
        },
        "index": {
          "description": "The result of computation",
          "hierarchy": "Control Concurrent STM Promise",
          "module": "Control.Concurrent.STM.Promise",
          "name": "result",
          "package": "stm-promise",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise.html#v:result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInstruction for spawning\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Promise",
          "name": "spawn",
          "package": "stm-promise",
          "signature": "IO ()",
          "source": "src/Control-Concurrent-STM-Promise.html#Promise",
          "type": "function"
        },
        "index": {
          "description": "Instruction for spawning",
          "hierarchy": "Control Concurrent STM Promise",
          "module": "Control.Concurrent.STM.Promise",
          "name": "spawn",
          "normalized": "IO()",
          "package": "stm-promise",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise.html#v:spawn"
      }
    }
  ]
]