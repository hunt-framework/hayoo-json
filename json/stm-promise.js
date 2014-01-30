[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-DTVar.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTVars with a dirty bit that allows for one listener\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.STM.DTVar",
        "fct-package": "stm-promise",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-STM-DTVar.html",
        "fct-type": "module",
        "title": "DTVar"
      },
      "index": {
        "description": "TVars with dirty bit that allows for one listener",
        "hierarchy": "Control Concurrent STM DTVar",
        "module": "Control.Concurrent.STM.DTVar",
        "name": "DTVar",
        "normalized": "",
        "package": "stm-promise",
        "partial": "DTVar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-DTVar.html#t:DTVar",
      "description": {
        "fct-descr": "\u003cp\u003eTVars with a dirty bit which allows for one listener.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.DTVar",
        "fct-package": "stm-promise",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-STM-DTVar.html#DTVar",
        "fct-type": "data",
        "title": "DTVar"
      },
      "index": {
        "description": "TVars with dirty bit which allows for one listener",
        "hierarchy": "Control Concurrent STM DTVar",
        "module": "Control.Concurrent.STM.DTVar",
        "name": "DTVar",
        "normalized": "",
        "package": "stm-promise",
        "partial": "DTVar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-DTVar.html#v:listenDTVar",
      "description": {
        "fct-descr": "\u003cp\u003eListens until the dirty bit is true, then removes the dirty bit and\n   returns the read element\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.DTVar",
        "fct-package": "stm-promise",
        "fct-signature": "DTVar a -\u003e STM a",
        "fct-source": "src/Control-Concurrent-STM-DTVar.html#listenDTVar",
        "fct-type": "function",
        "title": "listenDTVar"
      },
      "index": {
        "description": "Listens until the dirty bit is true then removes the dirty bit and returns the read element",
        "hierarchy": "Control Concurrent STM DTVar",
        "module": "Control.Concurrent.STM.DTVar",
        "name": "listenDTVar",
        "normalized": "DTVar a-\u003eSTM a",
        "package": "stm-promise",
        "partial": "DTVar",
        "signature": "DTVar a-\u003eSTM a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-DTVar.html#v:listenDTVarIO",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003elistenDTVar\u003c/a\u003e\u003c/code\u003e in \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.DTVar",
        "fct-package": "stm-promise",
        "fct-signature": "DTVar a -\u003e IO a",
        "fct-source": "src/Control-Concurrent-STM-DTVar.html#listenDTVarIO",
        "fct-type": "function",
        "title": "listenDTVarIO"
      },
      "index": {
        "description": "listenDTVar in IO",
        "hierarchy": "Control Concurrent STM DTVar",
        "module": "Control.Concurrent.STM.DTVar",
        "name": "listenDTVarIO",
        "normalized": "DTVar a-\u003eIO a",
        "package": "stm-promise",
        "partial": "DTVar IO",
        "signature": "DTVar a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-DTVar.html#v:listenDTVars",
      "description": {
        "fct-descr": "\u003cp\u003eListen until any of the dirty bits are true, then removes all dirty bits\n   and returns all \u003ccode\u003e\u003ca\u003eDTVar\u003c/a\u003e\u003c/code\u003e's values, in order.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.DTVar",
        "fct-package": "stm-promise",
        "fct-signature": "[DTVar a] -\u003e STM [a]",
        "fct-source": "src/Control-Concurrent-STM-DTVar.html#listenDTVars",
        "fct-type": "function",
        "title": "listenDTVars"
      },
      "index": {
        "description": "Listen until any of the dirty bits are true then removes all dirty bits and returns all DTVar values in order",
        "hierarchy": "Control Concurrent STM DTVar",
        "module": "Control.Concurrent.STM.DTVar",
        "name": "listenDTVars",
        "normalized": "[DTVar a]-\u003eSTM[a]",
        "package": "stm-promise",
        "partial": "DTVars",
        "signature": "[DTVar a]-\u003eSTM[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-DTVar.html#v:listenDTVarsIO",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003elistenDTVars\u003c/a\u003e\u003c/code\u003e in \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.DTVar",
        "fct-package": "stm-promise",
        "fct-signature": "[DTVar a] -\u003e IO [a]",
        "fct-source": "src/Control-Concurrent-STM-DTVar.html#listenDTVarsIO",
        "fct-type": "function",
        "title": "listenDTVarsIO"
      },
      "index": {
        "description": "listenDTVars in IO",
        "hierarchy": "Control Concurrent STM DTVar",
        "module": "Control.Concurrent.STM.DTVar",
        "name": "listenDTVarsIO",
        "normalized": "[DTVar a]-\u003eIO[a]",
        "package": "stm-promise",
        "partial": "DTVars IO",
        "signature": "[DTVar a]-\u003eIO[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-DTVar.html#v:modifyDTVar",
      "description": {
        "fct-descr": "\u003cp\u003eModify a DTVar, making it dirty.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.DTVar",
        "fct-package": "stm-promise",
        "fct-signature": "DTVar a -\u003e (a -\u003e a) -\u003e STM ()",
        "fct-source": "src/Control-Concurrent-STM-DTVar.html#modifyDTVar",
        "fct-type": "function",
        "title": "modifyDTVar"
      },
      "index": {
        "description": "Modify DTVar making it dirty",
        "hierarchy": "Control Concurrent STM DTVar",
        "module": "Control.Concurrent.STM.DTVar",
        "name": "modifyDTVar",
        "normalized": "DTVar a-\u003e(a-\u003ea)-\u003eSTM()",
        "package": "stm-promise",
        "partial": "DTVar",
        "signature": "DTVar a-\u003e(a-\u003ea)-\u003eSTM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-DTVar.html#v:newDTVar",
      "description": {
        "fct-descr": "\u003cp\u003eNew DTVar which starts dirty\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.DTVar",
        "fct-package": "stm-promise",
        "fct-signature": "a -\u003e STM (DTVar a)",
        "fct-source": "src/Control-Concurrent-STM-DTVar.html#newDTVar",
        "fct-type": "function",
        "title": "newDTVar"
      },
      "index": {
        "description": "New DTVar which starts dirty",
        "hierarchy": "Control Concurrent STM DTVar",
        "module": "Control.Concurrent.STM.DTVar",
        "name": "newDTVar",
        "normalized": "a-\u003eSTM(DTVar a)",
        "package": "stm-promise",
        "partial": "DTVar",
        "signature": "a-\u003eSTM(DTVar a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-DTVar.html#v:newDTVarIO",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003enewDTVar\u003c/a\u003e\u003c/code\u003e in \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.DTVar",
        "fct-package": "stm-promise",
        "fct-signature": "a -\u003e IO (DTVar a)",
        "fct-source": "src/Control-Concurrent-STM-DTVar.html#newDTVarIO",
        "fct-type": "function",
        "title": "newDTVarIO"
      },
      "index": {
        "description": "newDTVar in IO",
        "hierarchy": "Control Concurrent STM DTVar",
        "module": "Control.Concurrent.STM.DTVar",
        "name": "newDTVarIO",
        "normalized": "a-\u003eIO(DTVar a)",
        "package": "stm-promise",
        "partial": "DTVar IO",
        "signature": "a-\u003eIO(DTVar a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-DTVar.html#v:readDTVar",
      "description": {
        "fct-descr": "\u003cp\u003eReads a DTVar \u003cem\u003ewithout\u003c/em\u003e changing the dirty bit\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.DTVar",
        "fct-package": "stm-promise",
        "fct-signature": "DTVar a -\u003e STM a",
        "fct-source": "src/Control-Concurrent-STM-DTVar.html#readDTVar",
        "fct-type": "function",
        "title": "readDTVar"
      },
      "index": {
        "description": "Reads DTVar without changing the dirty bit",
        "hierarchy": "Control Concurrent STM DTVar",
        "module": "Control.Concurrent.STM.DTVar",
        "name": "readDTVar",
        "normalized": "DTVar a-\u003eSTM a",
        "package": "stm-promise",
        "partial": "DTVar",
        "signature": "DTVar a-\u003eSTM a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-DTVar.html#v:readDTVarIO",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ereadDTVar\u003c/a\u003e\u003c/code\u003e in \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.DTVar",
        "fct-package": "stm-promise",
        "fct-signature": "DTVar a -\u003e IO a",
        "fct-source": "src/Control-Concurrent-STM-DTVar.html#readDTVarIO",
        "fct-type": "function",
        "title": "readDTVarIO"
      },
      "index": {
        "description": "readDTVar in IO",
        "hierarchy": "Control Concurrent STM DTVar",
        "module": "Control.Concurrent.STM.DTVar",
        "name": "readDTVarIO",
        "normalized": "DTVar a-\u003eIO a",
        "package": "stm-promise",
        "partial": "DTVar IO",
        "signature": "DTVar a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-DTVar.html#v:writeDTVar",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a value to a DTVar, making it dirty\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.DTVar",
        "fct-package": "stm-promise",
        "fct-signature": "DTVar a -\u003e a -\u003e STM ()",
        "fct-source": "src/Control-Concurrent-STM-DTVar.html#writeDTVar",
        "fct-type": "function",
        "title": "writeDTVar"
      },
      "index": {
        "description": "Write value to DTVar making it dirty",
        "hierarchy": "Control Concurrent STM DTVar",
        "module": "Control.Concurrent.STM.DTVar",
        "name": "writeDTVar",
        "normalized": "DTVar a-\u003ea-\u003eSTM()",
        "package": "stm-promise",
        "partial": "DTVar",
        "signature": "DTVar a-\u003ea-\u003eSTM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-DTVar.html#v:writeDTVarIO",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ewriteDTVar\u003c/a\u003e\u003c/code\u003e in \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.DTVar",
        "fct-package": "stm-promise",
        "fct-signature": "DTVar a -\u003e a -\u003e IO ()",
        "fct-source": "src/Control-Concurrent-STM-DTVar.html#writeDTVarIO",
        "fct-type": "function",
        "title": "writeDTVarIO"
      },
      "index": {
        "description": "writeDTVar in IO",
        "hierarchy": "Control Concurrent STM DTVar",
        "module": "Control.Concurrent.STM.DTVar",
        "name": "writeDTVarIO",
        "normalized": "DTVar a-\u003ea-\u003eIO()",
        "package": "stm-promise",
        "partial": "DTVar IO",
        "signature": "DTVar a-\u003ea-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise-Process.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePromises for processes\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.STM.Promise.Process",
        "fct-package": "stm-promise",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-STM-Promise-Process.html",
        "fct-type": "module",
        "title": "Process"
      },
      "index": {
        "description": "Promises for processes",
        "hierarchy": "Control Concurrent STM Promise Process",
        "module": "Control.Concurrent.STM.Promise.Process",
        "name": "Process",
        "normalized": "",
        "package": "stm-promise",
        "partial": "Process",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise-Process.html#t:ExitCode",
      "description": {
        "fct-descr": "\u003cp\u003eDefines the exit codes that a program can return.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Promise.Process",
        "fct-package": "stm-promise",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "ExitCode"
      },
      "index": {
        "description": "Defines the exit codes that program can return",
        "hierarchy": "Control Concurrent STM Promise Process",
        "module": "Control.Concurrent.STM.Promise.Process",
        "name": "ExitCode",
        "normalized": "",
        "package": "stm-promise",
        "partial": "Exit Code",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise-Process.html#t:ProcessResult",
      "description": {
        "fct-descr": "\u003cp\u003eThe result from a process\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Promise.Process",
        "fct-package": "stm-promise",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-STM-Promise-Process.html#ProcessResult",
        "fct-type": "data",
        "title": "ProcessResult"
      },
      "index": {
        "description": "The result from process",
        "hierarchy": "Control Concurrent STM Promise Process",
        "module": "Control.Concurrent.STM.Promise.Process",
        "name": "ProcessResult",
        "normalized": "",
        "package": "stm-promise",
        "partial": "Process Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise-Process.html#v:ExitFailure",
      "description": {
        "fct-descr": "\u003cp\u003eindicates program failure with an exit code.\n The exact interpretation of the code is\n operating-system dependent.  In particular, some values\n may be prohibited (e.g. 0 on a POSIX-compliant system).\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Promise.Process",
        "fct-package": "stm-promise",
        "fct-signature": "ExitFailure Int",
        "fct-type": "function",
        "title": "ExitFailure"
      },
      "index": {
        "description": "indicates program failure with an exit code The exact interpretation of the code is operating-system dependent In particular some values may be prohibited e.g on POSIX-compliant system",
        "hierarchy": "Control Concurrent STM Promise Process",
        "module": "Control.Concurrent.STM.Promise.Process",
        "name": "ExitFailure",
        "normalized": "",
        "package": "stm-promise",
        "partial": "Exit Failure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise-Process.html#v:ExitSuccess",
      "description": {
        "fct-descr": "\u003cp\u003eindicates successful termination;\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Promise.Process",
        "fct-package": "stm-promise",
        "fct-signature": "ExitSuccess",
        "fct-type": "function",
        "title": "ExitSuccess"
      },
      "index": {
        "description": "indicates successful termination",
        "hierarchy": "Control Concurrent STM Promise Process",
        "module": "Control.Concurrent.STM.Promise.Process",
        "name": "ExitSuccess",
        "normalized": "",
        "package": "stm-promise",
        "partial": "Exit Success",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise-Process.html#v:ProcessResult",
      "description": {
        "fct-module": "Control.Concurrent.STM.Promise.Process",
        "fct-package": "stm-promise",
        "fct-signature": "ProcessResult",
        "fct-source": "src/Control-Concurrent-STM-Promise-Process.html#ProcessResult",
        "fct-type": "function",
        "title": "ProcessResult"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent STM Promise Process",
        "module": "Control.Concurrent.STM.Promise.Process",
        "name": "ProcessResult",
        "normalized": "",
        "package": "stm-promise",
        "partial": "Process Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise-Process.html#v:excode",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Concurrent.STM.Promise.Process",
        "fct-package": "stm-promise",
        "fct-signature": "ExitCode",
        "fct-source": "src/Control-Concurrent-STM-Promise-Process.html#ProcessResult",
        "fct-type": "function",
        "title": "excode"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent STM Promise Process",
        "module": "Control.Concurrent.STM.Promise.Process",
        "name": "excode",
        "normalized": "",
        "package": "stm-promise",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise-Process.html#v:processPromise",
      "description": {
        "fct-descr": "\u003cp\u003eMake a \u003ccode\u003e\u003ca\u003ePromise\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Promise.Process",
        "fct-package": "stm-promise",
        "fct-signature": "FilePath-\u003e [String]-\u003e String-\u003e IO (Promise ProcessResult)",
        "fct-type": "function",
        "title": "processPromise"
      },
      "index": {
        "description": "Make Promise",
        "hierarchy": "Control Concurrent STM Promise Process",
        "module": "Control.Concurrent.STM.Promise.Process",
        "name": "processPromise",
        "normalized": "FilePath-\u003e[String]-\u003eString-\u003eIO(Promise ProcessResult)",
        "package": "stm-promise",
        "partial": "Promise",
        "signature": "FilePath-\u003e[String]-\u003eString-\u003eIO(Promise ProcessResult)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise-Process.html#v:processPromiseCallback",
      "description": {
        "fct-descr": "\u003cp\u003eMake a \u003ccode\u003e\u003ca\u003ePromise\u003c/a\u003e\u003c/code\u003e, but add a callback that will\n   be run when the process finishes nicely.\n   This hook is mainly intended for logging.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Promise.Process",
        "fct-package": "stm-promise",
        "fct-signature": "(ProcessResult -\u003e IO ())-\u003e FilePath-\u003e [String]-\u003e String-\u003e IO (Promise ProcessResult)",
        "fct-type": "function",
        "title": "processPromiseCallback"
      },
      "index": {
        "description": "Make Promise but add callback that will be run when the process finishes nicely This hook is mainly intended for logging",
        "hierarchy": "Control Concurrent STM Promise Process",
        "module": "Control.Concurrent.STM.Promise.Process",
        "name": "processPromiseCallback",
        "normalized": "(ProcessResult-\u003eIO())-\u003eFilePath-\u003e[String]-\u003eString-\u003eIO(Promise ProcessResult)",
        "package": "stm-promise",
        "partial": "Promise Callback",
        "signature": "(ProcessResult-\u003eIO())-\u003eFilePath-\u003e[String]-\u003eString-\u003eIO(Promise ProcessResult)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise-Process.html#v:stderr",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Concurrent.STM.Promise.Process",
        "fct-package": "stm-promise",
        "fct-signature": "String",
        "fct-source": "src/Control-Concurrent-STM-Promise-Process.html#ProcessResult",
        "fct-type": "function",
        "title": "stderr"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent STM Promise Process",
        "module": "Control.Concurrent.STM.Promise.Process",
        "name": "stderr",
        "normalized": "",
        "package": "stm-promise",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise-Process.html#v:stdout",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Concurrent.STM.Promise.Process",
        "fct-package": "stm-promise",
        "fct-signature": "String",
        "fct-source": "src/Control-Concurrent-STM-Promise-Process.html#ProcessResult",
        "fct-type": "function",
        "title": "stdout"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent STM Promise Process",
        "module": "Control.Concurrent.STM.Promise.Process",
        "name": "stdout",
        "normalized": "",
        "package": "stm-promise",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise-Tree.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA tree of computation\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.STM.Promise.Tree",
        "fct-package": "stm-promise",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-STM-Promise-Tree.html",
        "fct-type": "module",
        "title": "Tree"
      },
      "index": {
        "description": "tree of computation",
        "hierarchy": "Control Concurrent STM Promise Tree",
        "module": "Control.Concurrent.STM.Promise.Tree",
        "name": "Tree",
        "normalized": "",
        "package": "stm-promise",
        "partial": "Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise-Tree.html#t:Label",
      "description": {
        "fct-descr": "\u003cp\u003eBoth/Either labels\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Promise.Tree",
        "fct-package": "stm-promise",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-STM-Promise-Tree.html#Label",
        "fct-type": "data",
        "title": "Label"
      },
      "index": {
        "description": "Both Either labels",
        "hierarchy": "Control Concurrent STM Promise Tree",
        "module": "Control.Concurrent.STM.Promise.Tree",
        "name": "Label",
        "normalized": "",
        "package": "stm-promise",
        "partial": "Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise-Tree.html#t:Tree",
      "description": {
        "fct-descr": "\u003cp\u003eBoth/Either-trees\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Promise.Tree",
        "fct-package": "stm-promise",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-STM-Promise-Tree.html#Tree",
        "fct-type": "data",
        "title": "Tree"
      },
      "index": {
        "description": "Both Either-trees",
        "hierarchy": "Control Concurrent STM Promise Tree",
        "module": "Control.Concurrent.STM.Promise.Tree",
        "name": "Tree",
        "normalized": "",
        "package": "stm-promise",
        "partial": "Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise-Tree.html#v:Both",
      "description": {
        "fct-descr": "\u003cp\u003eBoth of these must succeed with an An\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Promise.Tree",
        "fct-package": "stm-promise",
        "fct-signature": "Both",
        "fct-source": "src/Control-Concurrent-STM-Promise-Tree.html#Label",
        "fct-type": "function",
        "title": "Both"
      },
      "index": {
        "description": "Both of these must succeed with an An",
        "hierarchy": "Control Concurrent STM Promise Tree",
        "module": "Control.Concurrent.STM.Promise.Tree",
        "name": "Both",
        "normalized": "",
        "package": "stm-promise",
        "partial": "Both",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise-Tree.html#v:Either",
      "description": {
        "fct-descr": "\u003cp\u003eEither of these must succeed with an An, and that one is returned\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Promise.Tree",
        "fct-package": "stm-promise",
        "fct-signature": "Either",
        "fct-source": "src/Control-Concurrent-STM-Promise-Tree.html#Label",
        "fct-type": "function",
        "title": "Either"
      },
      "index": {
        "description": "Either of these must succeed with an An and that one is returned",
        "hierarchy": "Control Concurrent STM Promise Tree",
        "module": "Control.Concurrent.STM.Promise.Tree",
        "name": "Either",
        "normalized": "",
        "package": "stm-promise",
        "partial": "Either",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise-Tree.html#v:Leaf",
      "description": {
        "fct-descr": "\u003cp\u003eA computation\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Promise.Tree",
        "fct-package": "stm-promise",
        "fct-signature": "Leaf a",
        "fct-source": "src/Control-Concurrent-STM-Promise-Tree.html#Tree",
        "fct-type": "function",
        "title": "Leaf"
      },
      "index": {
        "description": "computation",
        "hierarchy": "Control Concurrent STM Promise Tree",
        "module": "Control.Concurrent.STM.Promise.Tree",
        "name": "Leaf",
        "normalized": "",
        "package": "stm-promise",
        "partial": "Leaf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise-Tree.html#v:Node",
      "description": {
        "fct-descr": "\u003cp\u003eCombine two trees with the semantics of \u003ccode\u003e\u003ca\u003eLabel\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Promise.Tree",
        "fct-package": "stm-promise",
        "fct-signature": "Node Label (Tree a) (Tree a)",
        "fct-source": "src/Control-Concurrent-STM-Promise-Tree.html#Tree",
        "fct-type": "function",
        "title": "Node"
      },
      "index": {
        "description": "Combine two trees with the semantics of Label",
        "hierarchy": "Control Concurrent STM Promise Tree",
        "module": "Control.Concurrent.STM.Promise.Tree",
        "name": "Node",
        "normalized": "",
        "package": "stm-promise",
        "partial": "Node",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise-Tree.html#v:Recoverable",
      "description": {
        "fct-descr": "\u003cp\u003eThere is a mean of recovering this computation, by returning mempty\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Promise.Tree",
        "fct-package": "stm-promise",
        "fct-signature": "Recoverable (Tree a)",
        "fct-source": "src/Control-Concurrent-STM-Promise-Tree.html#Tree",
        "fct-type": "function",
        "title": "Recoverable"
      },
      "index": {
        "description": "There is mean of recovering this computation by returning mempty",
        "hierarchy": "Control Concurrent STM Promise Tree",
        "module": "Control.Concurrent.STM.Promise.Tree",
        "name": "Recoverable",
        "normalized": "",
        "package": "stm-promise",
        "partial": "Recoverable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise-Tree.html#v:evalTree",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluates a tree of promises, cutting of unnecessary branches, given that\n   some other thread(s) evaluates the promises.\n\u003c/p\u003e\u003cp\u003eThe first result is the failures, then the actual result comes\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Promise.Tree",
        "fct-package": "stm-promise",
        "fct-signature": "(a -\u003e Bool) -\u003e Tree (Promise a) -\u003e IO (a, a)",
        "fct-source": "src/Control-Concurrent-STM-Promise-Tree.html#evalTree",
        "fct-type": "function",
        "title": "evalTree"
      },
      "index": {
        "description": "Evaluates tree of promises cutting of unnecessary branches given that some other thread evaluates the promises The first result is the failures then the actual result comes",
        "hierarchy": "Control Concurrent STM Promise Tree",
        "module": "Control.Concurrent.STM.Promise.Tree",
        "name": "evalTree",
        "normalized": "(a-\u003eBool)-\u003eTree(Promise a)-\u003eIO(a,a)",
        "package": "stm-promise",
        "partial": "Tree",
        "signature": "(a-\u003eBool)-\u003eTree(Promise a)-\u003eIO(a,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise-Tree.html#v:interleave",
      "description": {
        "fct-descr": "\u003cp\u003eA simple scheduling (see \u003ccode\u003e\u003ca\u003eworkers\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Promise.Tree",
        "fct-package": "stm-promise",
        "fct-signature": "Tree a -\u003e [a]",
        "fct-source": "src/Control-Concurrent-STM-Promise-Tree.html#interleave",
        "fct-type": "function",
        "title": "interleave"
      },
      "index": {
        "description": "simple scheduling see workers",
        "hierarchy": "Control Concurrent STM Promise Tree",
        "module": "Control.Concurrent.STM.Promise.Tree",
        "name": "interleave",
        "normalized": "Tree a-\u003e[a]",
        "package": "stm-promise",
        "partial": "",
        "signature": "Tree a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise-Tree.html#v:requireAll",
      "description": {
        "fct-descr": "\u003cp\u003eAll of these must succeed\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Promise.Tree",
        "fct-package": "stm-promise",
        "fct-signature": "[Tree a] -\u003e Tree a",
        "fct-source": "src/Control-Concurrent-STM-Promise-Tree.html#requireAll",
        "fct-type": "function",
        "title": "requireAll"
      },
      "index": {
        "description": "All of these must succeed",
        "hierarchy": "Control Concurrent STM Promise Tree",
        "module": "Control.Concurrent.STM.Promise.Tree",
        "name": "requireAll",
        "normalized": "[Tree a]-\u003eTree a",
        "package": "stm-promise",
        "partial": "All",
        "signature": "[Tree a]-\u003eTree a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise-Tree.html#v:requireAny",
      "description": {
        "fct-descr": "\u003cp\u003eAny of these must succeed\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Promise.Tree",
        "fct-package": "stm-promise",
        "fct-signature": "[Tree a] -\u003e Tree a",
        "fct-source": "src/Control-Concurrent-STM-Promise-Tree.html#requireAny",
        "fct-type": "function",
        "title": "requireAny"
      },
      "index": {
        "description": "Any of these must succeed",
        "hierarchy": "Control Concurrent STM Promise Tree",
        "module": "Control.Concurrent.STM.Promise.Tree",
        "name": "requireAny",
        "normalized": "[Tree a]-\u003eTree a",
        "package": "stm-promise",
        "partial": "Any",
        "signature": "[Tree a]-\u003eTree a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise-Tree.html#v:showTree",
      "description": {
        "fct-descr": "\u003cp\u003eShows a tree\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Promise.Tree",
        "fct-package": "stm-promise",
        "fct-signature": "Tree a -\u003e String",
        "fct-source": "src/Control-Concurrent-STM-Promise-Tree.html#showTree",
        "fct-type": "function",
        "title": "showTree"
      },
      "index": {
        "description": "Shows tree",
        "hierarchy": "Control Concurrent STM Promise Tree",
        "module": "Control.Concurrent.STM.Promise.Tree",
        "name": "showTree",
        "normalized": "Tree a-\u003eString",
        "package": "stm-promise",
        "partial": "Tree",
        "signature": "Tree a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise-Tree.html#v:tryAll",
      "description": {
        "fct-descr": "\u003cp\u003eAs many as possible should succeed, try all.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Promise.Tree",
        "fct-package": "stm-promise",
        "fct-signature": "[Tree a] -\u003e Tree a",
        "fct-source": "src/Control-Concurrent-STM-Promise-Tree.html#tryAll",
        "fct-type": "function",
        "title": "tryAll"
      },
      "index": {
        "description": "As many as possible should succeed try all",
        "hierarchy": "Control Concurrent STM Promise Tree",
        "module": "Control.Concurrent.STM.Promise.Tree",
        "name": "tryAll",
        "normalized": "[Tree a]-\u003eTree a",
        "package": "stm-promise",
        "partial": "All",
        "signature": "[Tree a]-\u003eTree a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise-Tree.html#v:watchTree",
      "description": {
        "fct-descr": "\u003cp\u003eAssuming some other thread(s) evaluate the promises in the tree, this gives\n   a live view of the progress, and cancels unnecessary subtrees (due to \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eThe first argument is a way to deem promises with results as failures. `(== mempty)` or\n   (const False) could be good alternatives. These failures are sent to the TChan.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Promise.Tree",
        "fct-package": "stm-promise",
        "fct-signature": "(a -\u003e Bool) -\u003e Tree (Promise a) -\u003e IO (TChan a, DTVar (Tree (PromiseResult a)))",
        "fct-source": "src/Control-Concurrent-STM-Promise-Tree.html#watchTree",
        "fct-type": "function",
        "title": "watchTree"
      },
      "index": {
        "description": "Assuming some other thread evaluate the promises in the tree this gives live view of the progress and cancels unnecessary subtrees due to Either The first argument is way to deem promises with results as failures mempty or const False could be good alternatives These failures are sent to the TChan",
        "hierarchy": "Control Concurrent STM Promise Tree",
        "module": "Control.Concurrent.STM.Promise.Tree",
        "name": "watchTree",
        "normalized": "(a-\u003eBool)-\u003eTree(Promise a)-\u003eIO(TChan a,DTVar(Tree(PromiseResult a)))",
        "package": "stm-promise",
        "partial": "Tree",
        "signature": "(a-\u003eBool)-\u003eTree(Promise a)-\u003eIO(TChan a,DTVar(Tree(PromiseResult a)))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise-Workers.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEvaluating promises in parallel\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.STM.Promise.Workers",
        "fct-package": "stm-promise",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-STM-Promise-Workers.html",
        "fct-type": "module",
        "title": "Workers"
      },
      "index": {
        "description": "Evaluating promises in parallel",
        "hierarchy": "Control Concurrent STM Promise Workers",
        "module": "Control.Concurrent.STM.Promise.Workers",
        "name": "Workers",
        "normalized": "",
        "package": "stm-promise",
        "partial": "Workers",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise-Workers.html#v:evaluatePromise",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluates a single promise (in the calling thread),\n   maybe using a timeout in microseconds.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Promise.Workers",
        "fct-package": "stm-promise",
        "fct-signature": "Maybe Int -\u003e Promise a -\u003e IO ()",
        "fct-source": "src/Control-Concurrent-STM-Promise-Workers.html#evaluatePromise",
        "fct-type": "function",
        "title": "evaluatePromise"
      },
      "index": {
        "description": "Evaluates single promise in the calling thread maybe using timeout in microseconds",
        "hierarchy": "Control Concurrent STM Promise Workers",
        "module": "Control.Concurrent.STM.Promise.Workers",
        "name": "evaluatePromise",
        "normalized": "Maybe Int-\u003ePromise a-\u003eIO()",
        "package": "stm-promise",
        "partial": "Promise",
        "signature": "Maybe Int-\u003ePromise a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise-Workers.html#v:worker",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluates a channel of promises, maybe using a timeout in microseconds.\n   Stops when the channel is empty.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Promise.Workers",
        "fct-package": "stm-promise",
        "fct-signature": "Maybe Int -\u003e TChan (Promise a) -\u003e IO ()",
        "fct-source": "src/Control-Concurrent-STM-Promise-Workers.html#worker",
        "fct-type": "function",
        "title": "worker"
      },
      "index": {
        "description": "Evaluates channel of promises maybe using timeout in microseconds Stops when the channel is empty",
        "hierarchy": "Control Concurrent STM Promise Workers",
        "module": "Control.Concurrent.STM.Promise.Workers",
        "name": "worker",
        "normalized": "Maybe Int-\u003eTChan(Promise a)-\u003eIO()",
        "package": "stm-promise",
        "partial": "",
        "signature": "Maybe Int-\u003eTChan(Promise a)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise-Workers.html#v:workers",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate these promises on n processors, maybe using a timeout in microseconds.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Promise.Workers",
        "fct-package": "stm-promise",
        "fct-signature": "Maybe Int -\u003e Int -\u003e [Promise a] -\u003e IO ()",
        "fct-source": "src/Control-Concurrent-STM-Promise-Workers.html#workers",
        "fct-type": "function",
        "title": "workers"
      },
      "index": {
        "description": "Evaluate these promises on processors maybe using timeout in microseconds",
        "hierarchy": "Control Concurrent STM Promise Workers",
        "module": "Control.Concurrent.STM.Promise.Workers",
        "name": "workers",
        "normalized": "Maybe Int-\u003eInt-\u003e[Promise a]-\u003eIO()",
        "package": "stm-promise",
        "partial": "",
        "signature": "Maybe Int-\u003eInt-\u003e[Promise a]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePromises that allow spawning and cancelling in \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e, and an \u003ccode\u003e\u003ca\u003eSTM\u003c/a\u003e\u003c/code\u003e result\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.STM.Promise",
        "fct-package": "stm-promise",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-STM-Promise.html",
        "fct-type": "module",
        "title": "Promise"
      },
      "index": {
        "description": "Promises that allow spawning and cancelling in IO and an STM result",
        "hierarchy": "Control Concurrent STM Promise",
        "module": "Control.Concurrent.STM.Promise",
        "name": "Promise",
        "normalized": "",
        "package": "stm-promise",
        "partial": "Promise",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise.html#t:Promise",
      "description": {
        "fct-descr": "\u003cp\u003eA promise\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Promise",
        "fct-package": "stm-promise",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-STM-Promise.html#Promise",
        "fct-type": "data",
        "title": "Promise"
      },
      "index": {
        "description": "promise",
        "hierarchy": "Control Concurrent STM Promise",
        "module": "Control.Concurrent.STM.Promise",
        "name": "Promise",
        "normalized": "",
        "package": "stm-promise",
        "partial": "Promise",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise.html#t:PromiseResult",
      "description": {
        "fct-descr": "\u003cp\u003eThe result of the promise\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Promise",
        "fct-package": "stm-promise",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-STM-Promise.html#PromiseResult",
        "fct-type": "data",
        "title": "PromiseResult"
      },
      "index": {
        "description": "The result of the promise",
        "hierarchy": "Control Concurrent STM Promise",
        "module": "Control.Concurrent.STM.Promise",
        "name": "PromiseResult",
        "normalized": "",
        "package": "stm-promise",
        "partial": "Promise Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise.html#v:An",
      "description": {
        "fct-descr": "\u003cp\u003eA result\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Promise",
        "fct-package": "stm-promise",
        "fct-signature": "An a",
        "fct-source": "src/Control-Concurrent-STM-Promise.html#PromiseResult",
        "fct-type": "function",
        "title": "An"
      },
      "index": {
        "description": "result",
        "hierarchy": "Control Concurrent STM Promise",
        "module": "Control.Concurrent.STM.Promise",
        "name": "An",
        "normalized": "",
        "package": "stm-promise",
        "partial": "An",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise.html#v:Cancelled",
      "description": {
        "fct-descr": "\u003cp\u003eCancelled\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Promise",
        "fct-package": "stm-promise",
        "fct-signature": "Cancelled",
        "fct-source": "src/Control-Concurrent-STM-Promise.html#PromiseResult",
        "fct-type": "function",
        "title": "Cancelled"
      },
      "index": {
        "description": "Cancelled",
        "hierarchy": "Control Concurrent STM Promise",
        "module": "Control.Concurrent.STM.Promise",
        "name": "Cancelled",
        "normalized": "",
        "package": "stm-promise",
        "partial": "Cancelled",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise.html#v:Promise",
      "description": {
        "fct-module": "Control.Concurrent.STM.Promise",
        "fct-package": "stm-promise",
        "fct-signature": "Promise",
        "fct-source": "src/Control-Concurrent-STM-Promise.html#Promise",
        "fct-type": "function",
        "title": "Promise"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent STM Promise",
        "module": "Control.Concurrent.STM.Promise",
        "name": "Promise",
        "normalized": "",
        "package": "stm-promise",
        "partial": "Promise",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise.html#v:Unfinished",
      "description": {
        "fct-descr": "\u003cp\u003eNot finished yet (or not even spawned yet))\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Promise",
        "fct-package": "stm-promise",
        "fct-signature": "Unfinished",
        "fct-source": "src/Control-Concurrent-STM-Promise.html#PromiseResult",
        "fct-type": "function",
        "title": "Unfinished"
      },
      "index": {
        "description": "Not finished yet or not even spawned yet",
        "hierarchy": "Control Concurrent STM Promise",
        "module": "Control.Concurrent.STM.Promise",
        "name": "Unfinished",
        "normalized": "",
        "package": "stm-promise",
        "partial": "Unfinished",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise.html#v:an",
      "description": {
        "fct-descr": "\u003cp\u003eGets the result (partial function)\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Promise",
        "fct-package": "stm-promise",
        "fct-signature": "PromiseResult a -\u003e a",
        "fct-source": "src/Control-Concurrent-STM-Promise.html#an",
        "fct-type": "function",
        "title": "an"
      },
      "index": {
        "description": "Gets the result partial function",
        "hierarchy": "Control Concurrent STM Promise",
        "module": "Control.Concurrent.STM.Promise",
        "name": "an",
        "normalized": "PromiseResult a-\u003ea",
        "package": "stm-promise",
        "partial": "",
        "signature": "PromiseResult a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise.html#v:bothResults",
      "description": {
        "fct-descr": "\u003cp\u003eIf both are finished (\u003ccode\u003e\u003ca\u003eAn\u003c/a\u003e\u003c/code\u003e), return them in a tuple.\n\u003c/p\u003e\u003cp\u003eIf either is \u003ccode\u003e\u003ca\u003eCancelled\u003c/a\u003e\u003c/code\u003e, this is also \u003ccode\u003e\u003ca\u003eCancelled\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eOtherwise, both are \u003ccode\u003e\u003ca\u003eUnfinished\u003c/a\u003e\u003c/code\u003e and so is this.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Promise",
        "fct-package": "stm-promise",
        "fct-signature": "PromiseResult a -\u003e PromiseResult b -\u003e PromiseResult (a, b)",
        "fct-source": "src/Control-Concurrent-STM-Promise.html#bothResults",
        "fct-type": "function",
        "title": "bothResults"
      },
      "index": {
        "description": "If both are finished An return them in tuple If either is Cancelled this is also Cancelled Otherwise both are Unfinished and so is this",
        "hierarchy": "Control Concurrent STM Promise",
        "module": "Control.Concurrent.STM.Promise",
        "name": "bothResults",
        "normalized": "PromiseResult a-\u003ePromiseResult b-\u003ePromiseResult(a,b)",
        "package": "stm-promise",
        "partial": "Results",
        "signature": "PromiseResult a-\u003ePromiseResult b-\u003ePromiseResult(a,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise.html#v:cancel",
      "description": {
        "fct-descr": "\u003cp\u003eInstruction for cancelling\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Promise",
        "fct-package": "stm-promise",
        "fct-signature": "IO ()",
        "fct-source": "src/Control-Concurrent-STM-Promise.html#Promise",
        "fct-type": "function",
        "title": "cancel"
      },
      "index": {
        "description": "Instruction for cancelling",
        "hierarchy": "Control Concurrent STM Promise",
        "module": "Control.Concurrent.STM.Promise",
        "name": "cancel",
        "normalized": "IO()",
        "package": "stm-promise",
        "partial": "",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise.html#v:eitherResult",
      "description": {
        "fct-descr": "\u003cp\u003eIf either is finished (\u003ccode\u003e\u003ca\u003eAn\u003c/a\u003e\u003c/code\u003e), return one of them (favor the first one)\n\u003c/p\u003e\u003cp\u003eIf either is \u003ccode\u003e\u003ca\u003eUnfinished\u003c/a\u003e\u003c/code\u003e, this is also \u003ccode\u003e\u003ca\u003eUnfinished\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eOtherwise, both are \u003ccode\u003e\u003ca\u003eCancelled\u003c/a\u003e\u003c/code\u003e and so is this.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Promise",
        "fct-package": "stm-promise",
        "fct-signature": "PromiseResult a -\u003e PromiseResult a -\u003e PromiseResult a",
        "fct-source": "src/Control-Concurrent-STM-Promise.html#eitherResult",
        "fct-type": "function",
        "title": "eitherResult"
      },
      "index": {
        "description": "If either is finished An return one of them favor the first one If either is Unfinished this is also Unfinished Otherwise both are Cancelled and so is this",
        "hierarchy": "Control Concurrent STM Promise",
        "module": "Control.Concurrent.STM.Promise",
        "name": "eitherResult",
        "normalized": "PromiseResult a-\u003ePromiseResult a-\u003ePromiseResult a",
        "package": "stm-promise",
        "partial": "Result",
        "signature": "PromiseResult a-\u003ePromiseResult a-\u003ePromiseResult a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise.html#v:isAn",
      "description": {
        "fct-descr": "\u003cp\u003eIs this a result?\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Promise",
        "fct-package": "stm-promise",
        "fct-signature": "PromiseResult a -\u003e Bool",
        "fct-source": "src/Control-Concurrent-STM-Promise.html#isAn",
        "fct-type": "function",
        "title": "isAn"
      },
      "index": {
        "description": "Is this result",
        "hierarchy": "Control Concurrent STM Promise",
        "module": "Control.Concurrent.STM.Promise",
        "name": "isAn",
        "normalized": "PromiseResult a-\u003eBool",
        "package": "stm-promise",
        "partial": "An",
        "signature": "PromiseResult a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise.html#v:isCancelled",
      "description": {
        "fct-descr": "\u003cp\u003eIs this cancelled?\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Promise",
        "fct-package": "stm-promise",
        "fct-signature": "PromiseResult a -\u003e Bool",
        "fct-source": "src/Control-Concurrent-STM-Promise.html#isCancelled",
        "fct-type": "function",
        "title": "isCancelled"
      },
      "index": {
        "description": "Is this cancelled",
        "hierarchy": "Control Concurrent STM Promise",
        "module": "Control.Concurrent.STM.Promise",
        "name": "isCancelled",
        "normalized": "PromiseResult a-\u003eBool",
        "package": "stm-promise",
        "partial": "Cancelled",
        "signature": "PromiseResult a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise.html#v:isUnfinished",
      "description": {
        "fct-descr": "\u003cp\u003eIs this unfinished?\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Promise",
        "fct-package": "stm-promise",
        "fct-signature": "PromiseResult a -\u003e Bool",
        "fct-source": "src/Control-Concurrent-STM-Promise.html#isUnfinished",
        "fct-type": "function",
        "title": "isUnfinished"
      },
      "index": {
        "description": "Is this unfinished",
        "hierarchy": "Control Concurrent STM Promise",
        "module": "Control.Concurrent.STM.Promise",
        "name": "isUnfinished",
        "normalized": "PromiseResult a-\u003eBool",
        "package": "stm-promise",
        "partial": "Unfinished",
        "signature": "PromiseResult a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise.html#v:result",
      "description": {
        "fct-descr": "\u003cp\u003eThe result of a computation\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Promise",
        "fct-package": "stm-promise",
        "fct-signature": "STM (PromiseResult a)",
        "fct-source": "src/Control-Concurrent-STM-Promise.html#Promise",
        "fct-type": "function",
        "title": "result"
      },
      "index": {
        "description": "The result of computation",
        "hierarchy": "Control Concurrent STM Promise",
        "module": "Control.Concurrent.STM.Promise",
        "name": "result",
        "normalized": "",
        "package": "stm-promise",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-promise/docs/Control-Concurrent-STM-Promise.html#v:spawn",
      "description": {
        "fct-descr": "\u003cp\u003eInstruction for spawning\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Promise",
        "fct-package": "stm-promise",
        "fct-signature": "IO ()",
        "fct-source": "src/Control-Concurrent-STM-Promise.html#Promise",
        "fct-type": "function",
        "title": "spawn"
      },
      "index": {
        "description": "Instruction for spawning",
        "hierarchy": "Control Concurrent STM Promise",
        "module": "Control.Concurrent.STM.Promise",
        "name": "spawn",
        "normalized": "IO()",
        "package": "stm-promise",
        "partial": "",
        "signature": "IO()"
      }
    }
  }
]