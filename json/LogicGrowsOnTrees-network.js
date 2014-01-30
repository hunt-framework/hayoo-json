[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis adapter implements parallelism by allowing multiple workers to connect\n    to a supervisor over the network.  For this adapter, workers are started\n    separately from the supervisor, so the number of workers is not set by the\n    controller but by the number of workers that connect to supervisor.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "fct-package": "LogicGrowsOnTrees-network",
        "fct-signature": "module",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Adapter-Network.html",
        "fct-type": "module",
        "title": "Network"
      },
      "index": {
        "description": "This adapter implements parallelism by allowing multiple workers to connect to supervisor over the network For this adapter workers are started separately from the supervisor so the number of workers is not set by the controller but by the number of workers that connect to supervisor",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "name": "Network",
        "normalized": "",
        "package": "LogicGrowsOnTrees-network",
        "partial": "Network",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#t:Network",
      "description": {
        "fct-descr": "\u003cp\u003eThis monad exists due to the quirk that on Windows one needs to initialize\n    the network system before using it via. \u003ccode\u003e\u003ca\u003ewithSocketsDo\u003c/a\u003e\u003c/code\u003e; to ensure that this\n    happens, all computations that use the network are run in the \u003ccode\u003e\u003ca\u003eNetwork\u003c/a\u003e\u003c/code\u003e\n    monad which itself is then run using the \u003ccode\u003e\u003ca\u003erunNetwork\u003c/a\u003e\u003c/code\u003e function that is\n    equivalent to calling \u003ccode\u003e\u003ca\u003ewithSocketsDo\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "fct-package": "LogicGrowsOnTrees-network",
        "fct-signature": "newtype",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Adapter-Network.html#Network",
        "fct-type": "newtype",
        "title": "Network"
      },
      "index": {
        "description": "This monad exists due to the quirk that on Windows one needs to initialize the network system before using it via withSocketsDo to ensure that this happens all computations that use the network are run in the Network monad which itself is then run using the runNetwork function that is equivalent to calling withSocketsDo",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "name": "Network",
        "normalized": "",
        "package": "LogicGrowsOnTrees-network",
        "partial": "Network",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#t:NetworkCallbacks",
      "description": {
        "fct-descr": "\u003cp\u003eCallbacks used to to notify when a worker has conneted or disconnected. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "fct-package": "LogicGrowsOnTrees-network",
        "fct-signature": "data",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Adapter-Network.html#NetworkCallbacks",
        "fct-type": "data",
        "title": "NetworkCallbacks"
      },
      "index": {
        "description": "Callbacks used to to notify when worker has conneted or disconnected",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "name": "NetworkCallbacks",
        "normalized": "",
        "package": "LogicGrowsOnTrees-network",
        "partial": "Network Callbacks",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#t:NetworkConfiguration",
      "description": {
        "fct-descr": "\u003cp\u003eConfiguration information that indicates whether a process should be run in\n    supervisor or worker mode.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "fct-package": "LogicGrowsOnTrees-network",
        "fct-signature": "data",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Adapter-Network.html#NetworkConfiguration",
        "fct-type": "data",
        "title": "NetworkConfiguration"
      },
      "index": {
        "description": "Configuration information that indicates whether process should be run in supervisor or worker mode",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "name": "NetworkConfiguration",
        "normalized": "",
        "package": "LogicGrowsOnTrees-network",
        "partial": "Network Configuration",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#t:NetworkControllerMonad",
      "description": {
        "fct-descr": "\u003cp\u003eThis is the monad in which the network controller will run. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "fct-package": "LogicGrowsOnTrees-network",
        "fct-signature": "data",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Adapter-Network.html#NetworkControllerMonad",
        "fct-type": "data",
        "title": "NetworkControllerMonad"
      },
      "index": {
        "description": "This is the monad in which the network controller will run",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "name": "NetworkControllerMonad",
        "normalized": "",
        "package": "LogicGrowsOnTrees-network",
        "partial": "Network Controller Monad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#t:NetworkRequestQueueMonad",
      "description": {
        "fct-descr": "\u003cp\u003eThis class extends \u003ccode\u003e\u003ca\u003eRequestQueueMonad\u003c/a\u003e\u003c/code\u003e with the ability to forcibly\n    disconnect a worker.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "fct-package": "LogicGrowsOnTrees-network",
        "fct-signature": "class",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Adapter-Network.html#NetworkRequestQueueMonad",
        "fct-type": "class",
        "title": "NetworkRequestQueueMonad"
      },
      "index": {
        "description": "This class extends RequestQueueMonad with the ability to forcibly disconnect worker",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "name": "NetworkRequestQueueMonad",
        "normalized": "",
        "package": "LogicGrowsOnTrees-network",
        "partial": "Network Request Queue Monad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#t:RunOutcome",
      "description": {
        "fct-descr": "\u003cp\u003eA type that represents the outcome of a run. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "fct-package": "LogicGrowsOnTrees-network",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "RunOutcome"
      },
      "index": {
        "description": "type that represents the outcome of run",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "name": "RunOutcome",
        "normalized": "",
        "package": "LogicGrowsOnTrees-network",
        "partial": "Run Outcome",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#t:RunStatistics",
      "description": {
        "fct-descr": "\u003cp\u003eStatistics gathered about the run. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "fct-package": "LogicGrowsOnTrees-network",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "RunStatistics"
      },
      "index": {
        "description": "Statistics gathered about the run",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "name": "RunStatistics",
        "normalized": "",
        "package": "LogicGrowsOnTrees-network",
        "partial": "Run Statistics",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#t:TerminationReason",
      "description": {
        "fct-descr": "\u003cp\u003eA type that represents the reason why a run terminated. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "fct-package": "LogicGrowsOnTrees-network",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "TerminationReason"
      },
      "index": {
        "description": "type that represents the reason why run terminated",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "name": "TerminationReason",
        "normalized": "",
        "package": "LogicGrowsOnTrees-network",
        "partial": "Termination Reason",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#t:WorkerId",
      "description": {
        "fct-descr": "\u003cp\u003eThe ID of a worker. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "fct-package": "LogicGrowsOnTrees-network",
        "fct-signature": "data",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Adapter-Network.html#WorkerId",
        "fct-type": "data",
        "title": "WorkerId"
      },
      "index": {
        "description": "The ID of worker",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "name": "WorkerId",
        "normalized": "",
        "package": "LogicGrowsOnTrees-network",
        "partial": "Worker Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#t:WrappedPortID",
      "description": {
        "fct-descr": "\u003cp\u003eA newtype wrapper around PortID in order to provide an instance of \u003ccode\u003e\u003ca\u003eArgVal\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "fct-package": "LogicGrowsOnTrees-network",
        "fct-signature": "newtype",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Adapter-Network.html#WrappedPortID",
        "fct-type": "newtype",
        "title": "WrappedPortID"
      },
      "index": {
        "description": "newtype wrapper around PortID in order to provide an instance of ArgVal",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "name": "WrappedPortID",
        "normalized": "",
        "package": "LogicGrowsOnTrees-network",
        "partial": "Wrapped Port ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:Aborted",
      "description": {
        "fct-descr": "\u003cp\u003ethe run was aborted with the given progress \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "fct-package": "LogicGrowsOnTrees-network",
        "fct-signature": "Aborted progress",
        "fct-type": "function",
        "title": "Aborted"
      },
      "index": {
        "description": "the run was aborted with the given progress",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "name": "Aborted",
        "normalized": "",
        "package": "LogicGrowsOnTrees-network",
        "partial": "Aborted",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:Completed",
      "description": {
        "fct-descr": "\u003cp\u003ethe run completed with the given final result \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "fct-package": "LogicGrowsOnTrees-network",
        "fct-signature": "Completed final_result",
        "fct-type": "function",
        "title": "Completed"
      },
      "index": {
        "description": "the run completed with the given final result",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "name": "Completed",
        "normalized": "",
        "package": "LogicGrowsOnTrees-network",
        "partial": "Completed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:Failure",
      "description": {
        "fct-descr": "\u003cp\u003ethe run failed with the given progress for the given reason \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "fct-package": "LogicGrowsOnTrees-network",
        "fct-signature": "Failure progress String",
        "fct-type": "function",
        "title": "Failure"
      },
      "index": {
        "description": "the run failed with the given progress for the given reason",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "name": "Failure",
        "normalized": "",
        "package": "LogicGrowsOnTrees-network",
        "partial": "Failure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:Network",
      "description": {
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "fct-package": "LogicGrowsOnTrees-network",
        "fct-signature": "Network",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Adapter-Network.html#Network",
        "fct-type": "function",
        "title": "Network"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "name": "Network",
        "normalized": "",
        "package": "LogicGrowsOnTrees-network",
        "partial": "Network",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:NetworkCallbacks",
      "description": {
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "fct-package": "LogicGrowsOnTrees-network",
        "fct-signature": "NetworkCallbacks",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Adapter-Network.html#NetworkCallbacks",
        "fct-type": "function",
        "title": "NetworkCallbacks"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "name": "NetworkCallbacks",
        "normalized": "",
        "package": "LogicGrowsOnTrees-network",
        "partial": "Network Callbacks",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:RunOutcome",
      "description": {
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "fct-package": "LogicGrowsOnTrees-network",
        "fct-signature": "RunOutcome",
        "fct-type": "function",
        "title": "RunOutcome"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "name": "RunOutcome",
        "normalized": "",
        "package": "LogicGrowsOnTrees-network",
        "partial": "Run Outcome",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:RunStatistics",
      "description": {
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "fct-package": "LogicGrowsOnTrees-network",
        "fct-signature": "RunStatistics",
        "fct-type": "function",
        "title": "RunStatistics"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "name": "RunStatistics",
        "normalized": "",
        "package": "LogicGrowsOnTrees-network",
        "partial": "Run Statistics",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:SupervisorConfiguration",
      "description": {
        "fct-descr": "\u003cp\u003eThis constructor indicates that the process should run in supervisor mode. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "fct-package": "LogicGrowsOnTrees-network",
        "fct-signature": "SupervisorConfiguration",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Adapter-Network.html#NetworkConfiguration",
        "fct-type": "function",
        "title": "SupervisorConfiguration"
      },
      "index": {
        "description": "This constructor indicates that the process should run in supervisor mode",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "name": "SupervisorConfiguration",
        "normalized": "",
        "package": "LogicGrowsOnTrees-network",
        "partial": "Supervisor Configuration",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:WorkerConfiguration",
      "description": {
        "fct-descr": "\u003cp\u003eThis constructor indicates that the process should be run in worker mode. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "fct-package": "LogicGrowsOnTrees-network",
        "fct-signature": "WorkerConfiguration",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Adapter-Network.html#NetworkConfiguration",
        "fct-type": "function",
        "title": "WorkerConfiguration"
      },
      "index": {
        "description": "This constructor indicates that the process should be run in worker mode",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "name": "WorkerConfiguration",
        "normalized": "",
        "package": "LogicGrowsOnTrees-network",
        "partial": "Worker Configuration",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:WorkerId",
      "description": {
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "fct-package": "LogicGrowsOnTrees-network",
        "fct-signature": "WorkerId",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Adapter-Network.html#WorkerId",
        "fct-type": "function",
        "title": "WorkerId"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "name": "WorkerId",
        "normalized": "",
        "package": "LogicGrowsOnTrees-network",
        "partial": "Worker Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:WrappedPortID",
      "description": {
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "fct-package": "LogicGrowsOnTrees-network",
        "fct-signature": "WrappedPortID",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Adapter-Network.html#WrappedPortID",
        "fct-type": "function",
        "title": "WrappedPortID"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "name": "WrappedPortID",
        "normalized": "",
        "package": "LogicGrowsOnTrees-network",
        "partial": "Wrapped Port ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:abort",
      "description": {
        "fct-descr": "\u003cp\u003eAbort the supervisor. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "fct-package": "LogicGrowsOnTrees-network",
        "fct-signature": "m ()",
        "fct-type": "function",
        "title": "abort"
      },
      "index": {
        "description": "Abort the supervisor",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "name": "abort",
        "normalized": "a()",
        "package": "LogicGrowsOnTrees-network",
        "partial": "",
        "signature": "m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:default_network_callbacks",
      "description": {
        "fct-descr": "\u003cp\u003eA default set of callbacks for when you don't care about being notified of connections and disconnections. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "fct-package": "LogicGrowsOnTrees-network",
        "fct-signature": "NetworkCallbacks",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Adapter-Network.html#default_network_callbacks",
        "fct-type": "function",
        "title": "default_network_callbacks"
      },
      "index": {
        "description": "default set of callbacks for when you don care about being notified of connections and disconnections",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "name": "default_network_callbacks",
        "normalized": "",
        "package": "LogicGrowsOnTrees-network",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:disconnectWorker",
      "description": {
        "fct-descr": "\u003cp\u003eForcibly disconnects the given worker; calling this function with the\n        \u003ccode\u003e\u003ca\u003eWorkerId\u003c/a\u003e\u003c/code\u003e of a worker that is no longer connected to the system is\n        *not* an error; in that case, nothing will happen.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "fct-package": "LogicGrowsOnTrees-network",
        "fct-signature": "WorkerId -\u003e m ()",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Adapter-Network.html#disconnectWorker",
        "fct-type": "method",
        "title": "disconnectWorker"
      },
      "index": {
        "description": "Forcibly disconnects the given worker calling this function with the WorkerId of worker that is no longer connected to the system is not an error in that case nothing will happen",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "name": "disconnectWorker",
        "normalized": "WorkerId-\u003ea()",
        "package": "LogicGrowsOnTrees-network",
        "partial": "Worker",
        "signature": "WorkerId-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:driver",
      "description": {
        "fct-descr": "\u003cp\u003eThis is the driver for the network adapter;  it consists of a supervisor\n    that listens for connections and multiple workers that connect to the\n    supervisor, where the same executable is used for both the supervisor and\n    the worker. To start the supervisor, run the executable with \u003ca\u003esupervisor\u003c/a\u003e as\n    the first argument and \u003ca\u003e-p PORTID\u003c/a\u003e to specify the port id. To start a\n    worker, run the executable with \u003ca\u003eworker\u003c/a\u003e as the first argument, the address\n    of the supervisor as the second, and the port id as the third.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "fct-package": "LogicGrowsOnTrees-network",
        "fct-signature": "Driver IO shared_configuration supervisor_configuration m n exploration_mode",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Adapter-Network.html#driver",
        "fct-type": "function",
        "title": "driver"
      },
      "index": {
        "description": "This is the driver for the network adapter it consists of supervisor that listens for connections and multiple workers that connect to the supervisor where the same executable is used for both the supervisor and the worker To start the supervisor run the executable with supervisor as the first argument and PORTID to specify the port id To start worker run the executable with worker as the first argument the address of the supervisor as the second and the port id as the third",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "name": "driver",
        "normalized": "",
        "package": "LogicGrowsOnTrees-network",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:driverNetwork",
      "description": {
        "fct-descr": "\u003cp\u003eThis is the same as \u003ccode\u003e\u003ca\u003edriver\u003c/a\u003e\u003c/code\u003e, but runs in the \u003ccode\u003e\u003ca\u003eNetwork\u003c/a\u003e\u003c/code\u003e monad.  Use this\n    driver if you want to do other things with the network (such as starting\n    a subseqent parallel exploration) after the run completes.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "fct-package": "LogicGrowsOnTrees-network",
        "fct-signature": "Driver Network shared_configuration supervisor_configuration m n exploration_mode",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Adapter-Network.html#driverNetwork",
        "fct-type": "function",
        "title": "driverNetwork"
      },
      "index": {
        "description": "This is the same as driver but runs in the Network monad Use this driver if you want to do other things with the network such as starting subseqent parallel exploration after the run completes",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "name": "driverNetwork",
        "normalized": "",
        "package": "LogicGrowsOnTrees-network",
        "partial": "Network",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:fork",
      "description": {
        "fct-descr": "\u003cp\u003eFork a new thread running in this monad;  all controller threads are automnatically killed when the run is finished. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "fct-package": "LogicGrowsOnTrees-network",
        "fct-signature": "m () -\u003e m ThreadId",
        "fct-type": "function",
        "title": "fork"
      },
      "index": {
        "description": "Fork new thread running in this monad all controller threads are automnatically killed when the run is finished",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "name": "fork",
        "normalized": "a()-\u003ea ThreadId",
        "package": "LogicGrowsOnTrees-network",
        "partial": "",
        "signature": "m()-\u003em ThreadId"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:getConfiguration",
      "description": {
        "fct-descr": "\u003cp\u003eProcesses the command line and returns the network configuration;  it uses\n    the first argument to determine whether the configuration should be for a\n    supervisor or for a worker.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "fct-package": "LogicGrowsOnTrees-network",
        "fct-signature": "Term shared_configuration-\u003e Term supervisor_configuration-\u003e TermInfo-\u003e IO (NetworkConfiguration shared_configuration supervisor_configuration)",
        "fct-type": "function",
        "title": "getConfiguration"
      },
      "index": {
        "description": "Processes the command line and returns the network configuration it uses the first argument to determine whether the configuration should be for supervisor or for worker",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "name": "getConfiguration",
        "normalized": "Term a-\u003eTerm b-\u003eTermInfo-\u003eIO(NetworkConfiguration a b)",
        "package": "LogicGrowsOnTrees-network",
        "partial": "Configuration",
        "signature": "Term shared_configuration-\u003eTerm supervisor_configuration-\u003eTermInfo-\u003eIO(NetworkConfiguration shared_configuration supervisor_configuration)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:getCurrentProgress",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003egetCurrentProgressAsync\u003c/a\u003e\u003c/code\u003e, but blocks until the result is ready. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "fct-package": "LogicGrowsOnTrees-network",
        "fct-signature": "m (ProgressFor (ExplorationModeFor m))",
        "fct-type": "function",
        "title": "getCurrentProgress"
      },
      "index": {
        "description": "Like getCurrentProgressAsync but blocks until the result is ready",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "name": "getCurrentProgress",
        "normalized": "",
        "package": "LogicGrowsOnTrees-network",
        "partial": "Current Progress",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:getCurrentProgressAsync",
      "description": {
        "fct-descr": "\u003cp\u003eRequest the current progress, invoking the given callback with the result;  see \u003ccode\u003e\u003ca\u003egetCurrentProgress\u003c/a\u003e\u003c/code\u003e for the synchronous version. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "fct-package": "LogicGrowsOnTrees-network",
        "fct-signature": "(ProgressFor (ExplorationModeFor m) -\u003e IO ()) -\u003e m ()",
        "fct-type": "function",
        "title": "getCurrentProgressAsync"
      },
      "index": {
        "description": "Request the current progress invoking the given callback with the result see getCurrentProgress for the synchronous version",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "name": "getCurrentProgressAsync",
        "normalized": "(ProgressFor(ExplorationModeFor a)-\u003eIO())-\u003ea()",
        "package": "LogicGrowsOnTrees-network",
        "partial": "Current Progress Async",
        "signature": "(ProgressFor(ExplorationModeFor m)-\u003eIO())-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:getNumberOfWorkers",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003egetNumberOfWorkersAsync\u003c/a\u003e\u003c/code\u003e, but blocks until the result is ready. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "fct-package": "LogicGrowsOnTrees-network",
        "fct-signature": "m Int",
        "fct-type": "function",
        "title": "getNumberOfWorkers"
      },
      "index": {
        "description": "Like getNumberOfWorkersAsync but blocks until the result is ready",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "name": "getNumberOfWorkers",
        "normalized": "",
        "package": "LogicGrowsOnTrees-network",
        "partial": "Number Of Workers",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:getNumberOfWorkersAsync",
      "description": {
        "fct-descr": "\u003cp\u003eRequest the number of workers, invoking the given callback with the result;  see \u003ccode\u003e\u003ca\u003egetNumberOfWorkers\u003c/a\u003e\u003c/code\u003e for the synchronous version. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "fct-package": "LogicGrowsOnTrees-network",
        "fct-signature": "(Int -\u003e IO ()) -\u003e m ()",
        "fct-type": "function",
        "title": "getNumberOfWorkersAsync"
      },
      "index": {
        "description": "Request the number of workers invoking the given callback with the result see getNumberOfWorkers for the synchronous version",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "name": "getNumberOfWorkersAsync",
        "normalized": "(Int-\u003eIO())-\u003ea()",
        "package": "LogicGrowsOnTrees-network",
        "partial": "Number Of Workers Async",
        "signature": "(Int-\u003eIO())-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:notifyConnected",
      "description": {
        "fct-descr": "\u003cp\u003ecallback used to notify that a worker is about to connect;\n                return \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e to allow the connection to proceed and \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e\n                to veto it\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "fct-package": "LogicGrowsOnTrees-network",
        "fct-signature": "WorkerId -\u003e IO Bool",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Adapter-Network.html#NetworkCallbacks",
        "fct-type": "function",
        "title": "notifyConnected"
      },
      "index": {
        "description": "callback used to notify that worker is about to connect return True to allow the connection to proceed and False to veto it",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "name": "notifyConnected",
        "normalized": "WorkerId-\u003eIO Bool",
        "package": "LogicGrowsOnTrees-network",
        "partial": "Connected",
        "signature": "WorkerId-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:notifyDisconnected",
      "description": {
        "fct-descr": "\u003cp\u003ecallback used to notify that a worker has disconnected \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "fct-package": "LogicGrowsOnTrees-network",
        "fct-signature": "WorkerId -\u003e IO ()",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Adapter-Network.html#NetworkCallbacks",
        "fct-type": "function",
        "title": "notifyDisconnected"
      },
      "index": {
        "description": "callback used to notify that worker has disconnected",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "name": "notifyDisconnected",
        "normalized": "WorkerId-\u003eIO()",
        "package": "LogicGrowsOnTrees-network",
        "partial": "Disconnected",
        "signature": "WorkerId-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:requestProgressUpdate",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003erequestProgressUpdateAsync\u003c/a\u003e\u003c/code\u003e, but blocks until the progress update has completed. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "fct-package": "LogicGrowsOnTrees-network",
        "fct-signature": "m (ProgressFor (ExplorationModeFor m))",
        "fct-type": "function",
        "title": "requestProgressUpdate"
      },
      "index": {
        "description": "Like requestProgressUpdateAsync but blocks until the progress update has completed",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "name": "requestProgressUpdate",
        "normalized": "",
        "package": "LogicGrowsOnTrees-network",
        "partial": "Progress Update",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:requestProgressUpdateAsync",
      "description": {
        "fct-descr": "\u003cp\u003eRequest that a global progress update be performed, invoking the given callback with the result;  see \u003ccode\u003e\u003ca\u003erequestProgressUpdate\u003c/a\u003e\u003c/code\u003e for the synchronous version. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "fct-package": "LogicGrowsOnTrees-network",
        "fct-signature": "(ProgressFor (ExplorationModeFor m) -\u003e IO ()) -\u003e m ()",
        "fct-type": "function",
        "title": "requestProgressUpdateAsync"
      },
      "index": {
        "description": "Request that global progress update be performed invoking the given callback with the result see requestProgressUpdate for the synchronous version",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "name": "requestProgressUpdateAsync",
        "normalized": "(ProgressFor(ExplorationModeFor a)-\u003eIO())-\u003ea()",
        "package": "LogicGrowsOnTrees-network",
        "partial": "Progress Update Async",
        "signature": "(ProgressFor(ExplorationModeFor m)-\u003eIO())-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:runAvailableWorkloadStatistics",
      "description": {
        "fct-descr": "\u003cp\u003estatistics for the number of available workloads waiting for a worker \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "fct-package": "LogicGrowsOnTrees-network",
        "fct-signature": "!(FunctionOfTimeStatistics Int)",
        "fct-type": "function",
        "title": "runAvailableWorkloadStatistics"
      },
      "index": {
        "description": "statistics for the number of available workloads waiting for worker",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "name": "runAvailableWorkloadStatistics",
        "normalized": "",
        "package": "LogicGrowsOnTrees-network",
        "partial": "Available Workload Statistics",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:runAverageTimePerCall",
      "description": {
        "fct-descr": "\u003cp\u003ethe average amount of time per call made to functions in \u003ca\u003eLogicGrowsOnTrees.Parallel.Common.Supervisor\u003c/a\u003e \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "fct-package": "LogicGrowsOnTrees-network",
        "fct-signature": "!Float",
        "fct-type": "function",
        "title": "runAverageTimePerCall"
      },
      "index": {
        "description": "the average amount of time per call made to functions in LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "name": "runAverageTimePerCall",
        "normalized": "",
        "package": "LogicGrowsOnTrees-network",
        "partial": "Average Time Per Call",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:runEndTime",
      "description": {
        "fct-descr": "\u003cp\u003ethe end time of the run \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "fct-package": "LogicGrowsOnTrees-network",
        "fct-signature": "!UTCTime",
        "fct-type": "function",
        "title": "runEndTime"
      },
      "index": {
        "description": "the end time of the run",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "name": "runEndTime",
        "normalized": "",
        "package": "LogicGrowsOnTrees-network",
        "partial": "End Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:runExplorer",
      "description": {
        "fct-descr": "\u003cp\u003eExplores the given tree using multiple processes to achieve parallelism.\n\u003c/p\u003e\u003cp\u003eThis function grants access to all of the functionality of this adapter,\n    rather than having to go through the more restricted driver interface. The\n    signature of this function is very complicated because it is meant to be\n    used in both the supervisor and worker.  The configuration information is\n    used to determine whether the program is being run in supervisor mode or in\n    worker mode;  in the former case, the configuration is further split into\n    configuration information that is shared between the supervisor and the\n    worker and configuration information that is specific to the supervisor.\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "fct-package": "LogicGrowsOnTrees-network",
        "fct-signature": "(shared_configuration -\u003e ExplorationMode exploration_mode)-\u003e Purity m n-\u003e IO (NetworkConfiguration shared_configuration supervisor_configuration)-\u003e (shared_configuration -\u003e IO ())-\u003e (shared_configuration -\u003e TreeT m (ResultFor exploration_mode))-\u003e (shared_configuration -\u003e supervisor_configuration -\u003e IO (ProgressFor exploration_mode))-\u003e (shared_configuration -\u003e supervisor_configuration -\u003e NetworkControllerMonad exploration_mode ())-\u003e Network (Maybe ((shared_configuration, supervisor_configuration), RunOutcomeFor exploration_mode))",
        "fct-type": "function",
        "title": "runExplorer"
      },
      "index": {
        "description": "Explores the given tree using multiple processes to achieve parallelism This function grants access to all of the functionality of this adapter rather than having to go through the more restricted driver interface The signature of this function is very complicated because it is meant to be used in both the supervisor and worker The configuration information is used to determine whether the program is being run in supervisor mode or in worker mode in the former case the configuration is further split into configuration information that is shared between the supervisor and the worker and configuration information that is specific to the supervisor",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "name": "runExplorer",
        "normalized": "(a-\u003eExplorationMode b)-\u003ePurity c d-\u003eIO(NetworkConfiguration a e)-\u003e(a-\u003eIO())-\u003e(a-\u003eTreeT c(ResultFor b))-\u003e(a-\u003ee-\u003eIO(ProgressFor b))-\u003e(a-\u003ee-\u003eNetworkControllerMonad b())-\u003eNetwork(Maybe((a,e),RunOutcomeFor b))",
        "package": "LogicGrowsOnTrees-network",
        "partial": "Explorer",
        "signature": "(shared_configuration-\u003eExplorationMode exploration_mode)-\u003ePurity m n-\u003eIO(NetworkConfiguration shared_configuration supervisor_configuration)-\u003e(shared_configuration-\u003eIO())-\u003e(shared_configuration-\u003eTreeT m(ResultFor exploration_mode))-\u003e(shared_configuration-\u003esupervisor_configuration-\u003eIO(ProgressFor exploration_mode))-\u003e(shared_configuration-\u003esupervisor_configuration-\u003eNetworkControllerMonad exploration_mode())-\u003eNetwork(Maybe((shared_configuration,supervisor_configuration),RunOutcomeFor exploration_mode))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:runInstantaneousWorkloadRequestRateStatistics",
      "description": {
        "fct-descr": "\u003cp\u003estatistics for the instantaneous rate at which workloads were requested (using an exponentially decaying sum) \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "fct-package": "LogicGrowsOnTrees-network",
        "fct-signature": "!(FunctionOfTimeStatistics Float)",
        "fct-type": "function",
        "title": "runInstantaneousWorkloadRequestRateStatistics"
      },
      "index": {
        "description": "statistics for the instantaneous rate at which workloads were requested using an exponentially decaying sum",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "name": "runInstantaneousWorkloadRequestRateStatistics",
        "normalized": "",
        "package": "LogicGrowsOnTrees-network",
        "partial": "Instantaneous Workload Request Rate Statistics",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:runInstantaneousWorkloadStealTimeStatistics",
      "description": {
        "fct-descr": "\u003cp\u003estatistics for the instantaneous time needed for workloads to be stolen (using an exponentially decaying weighted average) \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "fct-package": "LogicGrowsOnTrees-network",
        "fct-signature": "!(FunctionOfTimeStatistics Float)",
        "fct-type": "function",
        "title": "runInstantaneousWorkloadStealTimeStatistics"
      },
      "index": {
        "description": "statistics for the instantaneous time needed for workloads to be stolen using an exponentially decaying weighted average",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "name": "runInstantaneousWorkloadStealTimeStatistics",
        "normalized": "",
        "package": "LogicGrowsOnTrees-network",
        "partial": "Instantaneous Workload Steal Time Statistics",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:runNetwork",
      "description": {
        "fct-descr": "\u003cp\u003eInitializes the network subsystem where required (e.g., on Windows). \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "fct-package": "LogicGrowsOnTrees-network",
        "fct-signature": "Network α -\u003e IO α",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Adapter-Network.html#runNetwork",
        "fct-type": "function",
        "title": "runNetwork"
      },
      "index": {
        "description": "Initializes the network subsystem where required e.g on Windows",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "name": "runNetwork",
        "normalized": "Network a-\u003eIO a",
        "package": "LogicGrowsOnTrees-network",
        "partial": "Network",
        "signature": "Network α-\u003eIO α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:runNumberOfCalls",
      "description": {
        "fct-descr": "\u003cp\u003ethe number of calls made to functions in \u003ca\u003eLogicGrowsOnTrees.Parallel.Common.Supervisor\u003c/a\u003e \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "fct-package": "LogicGrowsOnTrees-network",
        "fct-signature": "!Int",
        "fct-type": "function",
        "title": "runNumberOfCalls"
      },
      "index": {
        "description": "the number of calls made to functions in LogicGrowsOnTrees.Parallel.Common.Supervisor",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "name": "runNumberOfCalls",
        "normalized": "",
        "package": "LogicGrowsOnTrees-network",
        "partial": "Number Of Calls",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:runStartTime",
      "description": {
        "fct-descr": "\u003cp\u003ethe start time of the run \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "fct-package": "LogicGrowsOnTrees-network",
        "fct-signature": "!UTCTime",
        "fct-type": "function",
        "title": "runStartTime"
      },
      "index": {
        "description": "the start time of the run",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "name": "runStartTime",
        "normalized": "",
        "package": "LogicGrowsOnTrees-network",
        "partial": "Start Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:runStatistics",
      "description": {
        "fct-descr": "\u003cp\u003estatistics gathered during the run, useful if the system is not scaling with the number of workers as it should \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "fct-package": "LogicGrowsOnTrees-network",
        "fct-signature": "RunStatistics",
        "fct-type": "function",
        "title": "runStatistics"
      },
      "index": {
        "description": "statistics gathered during the run useful if the system is not scaling with the number of workers as it should",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "name": "runStatistics",
        "normalized": "",
        "package": "LogicGrowsOnTrees-network",
        "partial": "Statistics",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:runStealWaitTimes",
      "description": {
        "fct-descr": "\u003cp\u003estatistics for the time needed to steal a workload from a worker \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "fct-package": "LogicGrowsOnTrees-network",
        "fct-signature": "!IndependentMeasurementsStatistics",
        "fct-type": "function",
        "title": "runStealWaitTimes"
      },
      "index": {
        "description": "statistics for the time needed to steal workload from worker",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "name": "runStealWaitTimes",
        "normalized": "",
        "package": "LogicGrowsOnTrees-network",
        "partial": "Steal Wait Times",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:runSupervisor",
      "description": {
        "fct-descr": "\u003cp\u003eThis runs the supervisor, which will listen for connecting workers. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "fct-package": "LogicGrowsOnTrees-network",
        "fct-signature": "ExplorationMode exploration_mode-\u003e (Handle -\u003e IO ())-\u003e NetworkCallbacks-\u003e PortID-\u003e ProgressFor exploration_mode-\u003e NetworkControllerMonad exploration_mode ()-\u003e Network (RunOutcomeFor exploration_mode)",
        "fct-type": "function",
        "title": "runSupervisor"
      },
      "index": {
        "description": "This runs the supervisor which will listen for connecting workers",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "name": "runSupervisor",
        "normalized": "ExplorationMode a-\u003e(Handle-\u003eIO())-\u003eNetworkCallbacks-\u003ePortID-\u003eProgressFor a-\u003eNetworkControllerMonad a()-\u003eNetwork(RunOutcomeFor a)",
        "package": "LogicGrowsOnTrees-network",
        "partial": "Supervisor",
        "signature": "ExplorationMode exploration_mode-\u003e(Handle-\u003eIO())-\u003eNetworkCallbacks-\u003ePortID-\u003eProgressFor exploration_mode-\u003eNetworkControllerMonad exploration_mode()-\u003eNetwork(RunOutcomeFor exploration_mode)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:runSupervisorMonadOccupation",
      "description": {
        "fct-descr": "\u003cp\u003ethe fraction of the time the supervisor spent processing events while inside the \u003ccode\u003eSupervisorMonad\u003c/code\u003e \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "fct-package": "LogicGrowsOnTrees-network",
        "fct-signature": "!Float",
        "fct-type": "function",
        "title": "runSupervisorMonadOccupation"
      },
      "index": {
        "description": "the fraction of the time the supervisor spent processing events while inside the SupervisorMonad",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "name": "runSupervisorMonadOccupation",
        "normalized": "",
        "package": "LogicGrowsOnTrees-network",
        "partial": "Supervisor Monad Occupation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:runSupervisorOccupation",
      "description": {
        "fct-descr": "\u003cp\u003ethe fraction of the time the supervisor spent processing events \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "fct-package": "LogicGrowsOnTrees-network",
        "fct-signature": "!Float",
        "fct-type": "function",
        "title": "runSupervisorOccupation"
      },
      "index": {
        "description": "the fraction of the time the supervisor spent processing events",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "name": "runSupervisorOccupation",
        "normalized": "",
        "package": "LogicGrowsOnTrees-network",
        "partial": "Supervisor Occupation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:runTerminationReason",
      "description": {
        "fct-descr": "\u003cp\u003ethe reason why the run terminated \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "fct-package": "LogicGrowsOnTrees-network",
        "fct-signature": "TerminationReason progress final_result",
        "fct-type": "function",
        "title": "runTerminationReason"
      },
      "index": {
        "description": "the reason why the run terminated",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "name": "runTerminationReason",
        "normalized": "",
        "package": "LogicGrowsOnTrees-network",
        "partial": "Termination Reason",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:runWaitingWorkerStatistics",
      "description": {
        "fct-descr": "\u003cp\u003estatistics for the number of workers waiting for a workload \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "fct-package": "LogicGrowsOnTrees-network",
        "fct-signature": "!(FunctionOfTimeStatistics Int)",
        "fct-type": "function",
        "title": "runWaitingWorkerStatistics"
      },
      "index": {
        "description": "statistics for the number of workers waiting for workload",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "name": "runWaitingWorkerStatistics",
        "normalized": "",
        "package": "LogicGrowsOnTrees-network",
        "partial": "Waiting Worker Statistics",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:runWallTime",
      "description": {
        "fct-descr": "\u003cp\u003ethe wall time of the run \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "fct-package": "LogicGrowsOnTrees-network",
        "fct-signature": "!NominalDiffTime",
        "fct-type": "function",
        "title": "runWallTime"
      },
      "index": {
        "description": "the wall time of the run",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "name": "runWallTime",
        "normalized": "",
        "package": "LogicGrowsOnTrees-network",
        "partial": "Wall Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:runWorker",
      "description": {
        "fct-descr": "\u003cp\u003eRuns a worker that connects to the supervisor via. the given address and port id. \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "fct-package": "LogicGrowsOnTrees-network",
        "fct-signature": "ExplorationMode exploration_mode-\u003e Purity m n-\u003e TreeT m (ResultFor exploration_mode)-\u003e HostName-\u003e PortID-\u003e Network ()",
        "fct-type": "function",
        "title": "runWorker"
      },
      "index": {
        "description": "Runs worker that connects to the supervisor via the given address and port id",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "name": "runWorker",
        "normalized": "ExplorationMode a-\u003ePurity b c-\u003eTreeT b(ResultFor a)-\u003eHostName-\u003ePortID-\u003eNetwork()",
        "package": "LogicGrowsOnTrees-network",
        "partial": "Worker",
        "signature": "ExplorationMode exploration_mode-\u003ePurity m n-\u003eTreeT m(ResultFor exploration_mode)-\u003eHostName-\u003ePortID-\u003eNetwork()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:runWorkerOccupation",
      "description": {
        "fct-descr": "\u003cp\u003ethe fraction of the total time that workers were occupied \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "fct-package": "LogicGrowsOnTrees-network",
        "fct-signature": "!Float",
        "fct-type": "function",
        "title": "runWorkerOccupation"
      },
      "index": {
        "description": "the fraction of the total time that workers were occupied",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "name": "runWorkerOccupation",
        "normalized": "",
        "package": "LogicGrowsOnTrees-network",
        "partial": "Worker Occupation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:runWorkerWaitTimes",
      "description": {
        "fct-descr": "\u003cp\u003estatistics for how long it took for workers to obtain a workload \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "fct-package": "LogicGrowsOnTrees-network",
        "fct-signature": "!(FunctionOfTimeStatistics NominalDiffTime)",
        "fct-type": "function",
        "title": "runWorkerWaitTimes"
      },
      "index": {
        "description": "statistics for how long it took for workers to obtain workload",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "name": "runWorkerWaitTimes",
        "normalized": "",
        "package": "LogicGrowsOnTrees-network",
        "partial": "Worker Wait Times",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:setWorkloadBufferSize",
      "description": {
        "fct-descr": "\u003cp\u003eSets the size of the workload buffer;  for more information, see \u003ccode\u003e\u003ca\u003esetWorkloadBufferSize\u003c/a\u003e\u003c/code\u003e (which links to the \u003ca\u003eLogicGrowsOnTrees.Parallel.Common.Supervisor\u003c/a\u003e module). \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "fct-package": "LogicGrowsOnTrees-network",
        "fct-signature": "Int -\u003e m ()",
        "fct-type": "function",
        "title": "setWorkloadBufferSize"
      },
      "index": {
        "description": "Sets the size of the workload buffer for more information see setWorkloadBufferSize which links to the LogicGrowsOnTrees.Parallel.Common.Supervisor module",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "name": "setWorkloadBufferSize",
        "normalized": "Int-\u003ea()",
        "package": "LogicGrowsOnTrees-network",
        "partial": "Workload Buffer Size",
        "signature": "Int-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:shared_configuration",
      "description": {
        "fct-descr": "\u003cp\u003econfiguration information shared between the supervisor and the worker \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "fct-package": "LogicGrowsOnTrees-network",
        "fct-signature": "shared_configuration",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Adapter-Network.html#NetworkConfiguration",
        "fct-type": "function",
        "title": "shared_configuration"
      },
      "index": {
        "description": "configuration information shared between the supervisor and the worker",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "name": "shared_configuration",
        "normalized": "",
        "package": "LogicGrowsOnTrees-network",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:showPortID",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs a string representation of a port id.  (This function is needed\n    if using an older version of the \u003ccode\u003eNetwork\u003c/code\u003e package that doesn't have a\n    \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e instance for \u003ccode\u003e\u003ca\u003ePortID\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "fct-package": "LogicGrowsOnTrees-network",
        "fct-signature": "PortID -\u003e String",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Adapter-Network.html#showPortID",
        "fct-type": "function",
        "title": "showPortID"
      },
      "index": {
        "description": "Constructs string representation of port id This function is needed if using an older version of the Network package that doesn have Show instance for PortID",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "name": "showPortID",
        "normalized": "PortID-\u003eString",
        "package": "LogicGrowsOnTrees-network",
        "partial": "Port ID",
        "signature": "PortID-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:supervisor_configuration",
      "description": {
        "fct-descr": "\u003cp\u003econfiguration information specific to the supervisor \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "fct-package": "LogicGrowsOnTrees-network",
        "fct-signature": "supervisor_configuration",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Adapter-Network.html#NetworkConfiguration",
        "fct-type": "function",
        "title": "supervisor_configuration"
      },
      "index": {
        "description": "configuration information specific to the supervisor",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "name": "supervisor_configuration",
        "normalized": "",
        "package": "LogicGrowsOnTrees-network",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:supervisor_host_name",
      "description": {
        "fct-descr": "\u003cp\u003ethe address of the supervisor to which this worker should connect \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "fct-package": "LogicGrowsOnTrees-network",
        "fct-signature": "HostName",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Adapter-Network.html#NetworkConfiguration",
        "fct-type": "function",
        "title": "supervisor_host_name"
      },
      "index": {
        "description": "the address of the supervisor to which this worker should connect",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "name": "supervisor_host_name",
        "normalized": "",
        "package": "LogicGrowsOnTrees-network",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:supervisor_port",
      "description": {
        "fct-descr": "\u003cul\u003e\u003cli\u003e for the worker, the port to which to connect \n\u003c/li\u003e\u003c/ul\u003e\u003cul\u003e\u003cli\u003e for the supervisor, the port on which to listen \n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "fct-package": "LogicGrowsOnTrees-network",
        "fct-signature": "WrappedPortID",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Adapter-Network.html#NetworkConfiguration",
        "fct-type": "function",
        "title": "supervisor_port"
      },
      "index": {
        "description": "for the worker the port to which to connect for the supervisor the port on which to listen",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "name": "supervisor_port",
        "normalized": "",
        "package": "LogicGrowsOnTrees-network",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:unsafeRunNetwork",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "fct-package": "LogicGrowsOnTrees-network",
        "fct-signature": "IO α",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Adapter-Network.html#Network",
        "fct-type": "function",
        "title": "unsafeRunNetwork"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "name": "unsafeRunNetwork",
        "normalized": "",
        "package": "LogicGrowsOnTrees-network",
        "partial": "Run Network",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:unwrapPortID",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "fct-package": "LogicGrowsOnTrees-network",
        "fct-signature": "PortID",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Adapter-Network.html#WrappedPortID",
        "fct-type": "function",
        "title": "unwrapPortID"
      },
      "index": {
        "description": "",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "name": "unwrapPortID",
        "normalized": "",
        "package": "LogicGrowsOnTrees-network",
        "partial": "Port ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:workerHostName",
      "description": {
        "fct-descr": "\u003cp\u003ethe address of the worker \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "fct-package": "LogicGrowsOnTrees-network",
        "fct-signature": "HostName",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Adapter-Network.html#WorkerId",
        "fct-type": "function",
        "title": "workerHostName"
      },
      "index": {
        "description": "the address of the worker",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "name": "workerHostName",
        "normalized": "",
        "package": "LogicGrowsOnTrees-network",
        "partial": "Host Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:workerPortNumber",
      "description": {
        "fct-descr": "\u003cp\u003ethe port number of the worker \n\u003c/p\u003e",
        "fct-module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "fct-package": "LogicGrowsOnTrees-network",
        "fct-signature": "PortNumber",
        "fct-source": "src/LogicGrowsOnTrees-Parallel-Adapter-Network.html#WorkerId",
        "fct-type": "function",
        "title": "workerPortNumber"
      },
      "index": {
        "description": "the port number of the worker",
        "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
        "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
        "name": "workerPortNumber",
        "normalized": "",
        "package": "LogicGrowsOnTrees-network",
        "partial": "Port Number",
        "signature": ""
      }
    }
  }
]