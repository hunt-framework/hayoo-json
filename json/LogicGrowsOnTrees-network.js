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
        "word": "LogicGrowsOnTrees-network"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis adapter implements parallelism by allowing multiple workers to connect\n    to a supervisor over the network.  For this adapter, workers are started\n    separately from the supervisor, so the number of workers is not set by the\n    controller but by the number of workers that connect to supervisor.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "Network",
          "package": "LogicGrowsOnTrees-network",
          "source": "src/LogicGrowsOnTrees-Parallel-Adapter-Network.html",
          "type": "module"
        },
        "index": {
          "description": "This adapter implements parallelism by allowing multiple workers to connect to supervisor over the network For this adapter workers are started separately from the supervisor so the number of workers is not set by the controller but by the number of workers that connect to supervisor",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "Network",
          "package": "LogicGrowsOnTrees-network",
          "partial": "Network",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis constraint exists due to the quirk that on Windows one needs to\n    initialize the network system before using it via. \u003ccode\u003e\u003ca\u003ewithSocketsDo\u003c/a\u003e\u003c/code\u003e; to\n    ensure that this happens, all computations that use the network have the\n    \u003ccode\u003e\u003ca\u003eNetwork\u003c/a\u003e\u003c/code\u003e constrant and must be run by calling \u003ccode\u003e\u003ca\u003ewithNetwork\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "Network",
          "package": "LogicGrowsOnTrees-network",
          "source": "src/LogicGrowsOnTrees-Parallel-Adapter-Network.html#Network",
          "type": "type"
        },
        "index": {
          "description": "This constraint exists due to the quirk that on Windows one needs to initialize the network system before using it via withSocketsDo to ensure that this happens all computations that use the network have the Network constrant and must be run by calling withNetwork",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "Network",
          "package": "LogicGrowsOnTrees-network",
          "partial": "Network",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#t:Network"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCallbacks used to to notify when a worker has conneted or disconnected. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "NetworkCallbacks",
          "package": "LogicGrowsOnTrees-network",
          "source": "src/LogicGrowsOnTrees-Parallel-Adapter-Network.html#NetworkCallbacks",
          "type": "data"
        },
        "index": {
          "description": "Callbacks used to to notify when worker has conneted or disconnected",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "NetworkCallbacks",
          "package": "LogicGrowsOnTrees-network",
          "partial": "Network Callbacks",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#t:NetworkCallbacks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConfiguration information that indicates whether a process should be run in\n    supervisor or worker mode.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "NetworkConfiguration",
          "package": "LogicGrowsOnTrees-network",
          "source": "src/LogicGrowsOnTrees-Parallel-Adapter-Network.html#NetworkConfiguration",
          "type": "data"
        },
        "index": {
          "description": "Configuration information that indicates whether process should be run in supervisor or worker mode",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "NetworkConfiguration",
          "package": "LogicGrowsOnTrees-network",
          "partial": "Network Configuration",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#t:NetworkConfiguration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the monad in which the network controller will run. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "NetworkControllerMonad",
          "package": "LogicGrowsOnTrees-network",
          "source": "src/LogicGrowsOnTrees-Parallel-Adapter-Network.html#NetworkControllerMonad",
          "type": "data"
        },
        "index": {
          "description": "This is the monad in which the network controller will run",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "NetworkControllerMonad",
          "package": "LogicGrowsOnTrees-network",
          "partial": "Network Controller Monad",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#t:NetworkControllerMonad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis class extends \u003ccode\u003e\u003ca\u003eRequestQueueMonad\u003c/a\u003e\u003c/code\u003e with the ability to forcibly\n    disconnect a worker.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "NetworkRequestQueueMonad",
          "package": "LogicGrowsOnTrees-network",
          "source": "src/LogicGrowsOnTrees-Parallel-Adapter-Network.html#NetworkRequestQueueMonad",
          "type": "class"
        },
        "index": {
          "description": "This class extends RequestQueueMonad with the ability to forcibly disconnect worker",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "NetworkRequestQueueMonad",
          "package": "LogicGrowsOnTrees-network",
          "partial": "Network Request Queue Monad",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#t:NetworkRequestQueueMonad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type that represents the outcome of a run. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "RunOutcome",
          "package": "LogicGrowsOnTrees-network",
          "type": "data"
        },
        "index": {
          "description": "type that represents the outcome of run",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "RunOutcome",
          "package": "LogicGrowsOnTrees-network",
          "partial": "Run Outcome",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#t:RunOutcome"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStatistics gathered about the run. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "RunStatistics",
          "package": "LogicGrowsOnTrees-network",
          "type": "data"
        },
        "index": {
          "description": "Statistics gathered about the run",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "RunStatistics",
          "package": "LogicGrowsOnTrees-network",
          "partial": "Run Statistics",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#t:RunStatistics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type that represents the reason why a run terminated. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "TerminationReason",
          "package": "LogicGrowsOnTrees-network",
          "type": "data"
        },
        "index": {
          "description": "type that represents the reason why run terminated",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "TerminationReason",
          "package": "LogicGrowsOnTrees-network",
          "partial": "Termination Reason",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#t:TerminationReason"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe ID of a worker. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "WorkerId",
          "package": "LogicGrowsOnTrees-network",
          "source": "src/LogicGrowsOnTrees-Parallel-Adapter-Network.html#WorkerId",
          "type": "data"
        },
        "index": {
          "description": "The ID of worker",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "WorkerId",
          "package": "LogicGrowsOnTrees-network",
          "partial": "Worker Id",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#t:WorkerId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA newtype wrapper around PortID in order to provide an instance of \u003ccode\u003e\u003ca\u003eArgVal\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "WrappedPortID",
          "package": "LogicGrowsOnTrees-network",
          "source": "src/LogicGrowsOnTrees-Parallel-Adapter-Network.html#WrappedPortID",
          "type": "newtype"
        },
        "index": {
          "description": "newtype wrapper around PortID in order to provide an instance of ArgVal",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "WrappedPortID",
          "package": "LogicGrowsOnTrees-network",
          "partial": "Wrapped Port ID",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#t:WrappedPortID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe run was aborted with the given progress \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "Aborted",
          "package": "LogicGrowsOnTrees-network",
          "signature": "Aborted progress",
          "type": "function"
        },
        "index": {
          "description": "the run was aborted with the given progress",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "Aborted",
          "package": "LogicGrowsOnTrees-network",
          "partial": "Aborted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:Aborted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe run completed with the given final result \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "Completed",
          "package": "LogicGrowsOnTrees-network",
          "signature": "Completed final_result",
          "type": "function"
        },
        "index": {
          "description": "the run completed with the given final result",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "Completed",
          "package": "LogicGrowsOnTrees-network",
          "partial": "Completed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:Completed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe run failed with the given progress for the given reason \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "Failure",
          "package": "LogicGrowsOnTrees-network",
          "signature": "Failure progress String",
          "type": "function"
        },
        "index": {
          "description": "the run failed with the given progress for the given reason",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "Failure",
          "package": "LogicGrowsOnTrees-network",
          "partial": "Failure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:Failure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "NetworkCallbacks",
          "package": "LogicGrowsOnTrees-network",
          "signature": "NetworkCallbacks",
          "source": "src/LogicGrowsOnTrees-Parallel-Adapter-Network.html#NetworkCallbacks",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "NetworkCallbacks",
          "package": "LogicGrowsOnTrees-network",
          "partial": "Network Callbacks",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:NetworkCallbacks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "RunOutcome",
          "package": "LogicGrowsOnTrees-network",
          "signature": "RunOutcome",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "RunOutcome",
          "package": "LogicGrowsOnTrees-network",
          "partial": "Run Outcome",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:RunOutcome"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "RunStatistics",
          "package": "LogicGrowsOnTrees-network",
          "signature": "RunStatistics",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "RunStatistics",
          "package": "LogicGrowsOnTrees-network",
          "partial": "Run Statistics",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:RunStatistics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis constructor indicates that the process should run in supervisor mode. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "SupervisorConfiguration",
          "package": "LogicGrowsOnTrees-network",
          "signature": "SupervisorConfiguration",
          "source": "src/LogicGrowsOnTrees-Parallel-Adapter-Network.html#NetworkConfiguration",
          "type": "function"
        },
        "index": {
          "description": "This constructor indicates that the process should run in supervisor mode",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "SupervisorConfiguration",
          "package": "LogicGrowsOnTrees-network",
          "partial": "Supervisor Configuration",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:SupervisorConfiguration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis constructor indicates that the process should be run in worker mode. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "WorkerConfiguration",
          "package": "LogicGrowsOnTrees-network",
          "signature": "WorkerConfiguration",
          "source": "src/LogicGrowsOnTrees-Parallel-Adapter-Network.html#NetworkConfiguration",
          "type": "function"
        },
        "index": {
          "description": "This constructor indicates that the process should be run in worker mode",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "WorkerConfiguration",
          "package": "LogicGrowsOnTrees-network",
          "partial": "Worker Configuration",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:WorkerConfiguration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "WorkerId",
          "package": "LogicGrowsOnTrees-network",
          "signature": "WorkerId",
          "source": "src/LogicGrowsOnTrees-Parallel-Adapter-Network.html#WorkerId",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "WorkerId",
          "package": "LogicGrowsOnTrees-network",
          "partial": "Worker Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:WorkerId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "WrappedPortID",
          "package": "LogicGrowsOnTrees-network",
          "signature": "WrappedPortID",
          "source": "src/LogicGrowsOnTrees-Parallel-Adapter-Network.html#WrappedPortID",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "WrappedPortID",
          "package": "LogicGrowsOnTrees-network",
          "partial": "Wrapped Port ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:WrappedPortID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbort the supervisor. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "abort",
          "package": "LogicGrowsOnTrees-network",
          "signature": "m ()",
          "type": "function"
        },
        "index": {
          "description": "Abort the supervisor",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "abort",
          "normalized": "a()",
          "package": "LogicGrowsOnTrees-network",
          "signature": "m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:abort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA default set of callbacks for when you don't care about being notified of connections and disconnections. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "default_network_callbacks",
          "package": "LogicGrowsOnTrees-network",
          "signature": "NetworkCallbacks",
          "source": "src/LogicGrowsOnTrees-Parallel-Adapter-Network.html#default_network_callbacks",
          "type": "function"
        },
        "index": {
          "description": "default set of callbacks for when you don care about being notified of connections and disconnections",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "default_network_callbacks",
          "package": "LogicGrowsOnTrees-network",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:default_network_callbacks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForcibly disconnects the given worker; calling this function with the\n        \u003ccode\u003e\u003ca\u003eWorkerId\u003c/a\u003e\u003c/code\u003e of a worker that is no longer connected to the system is\n        *not* an error; in that case, nothing will happen.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "disconnectWorker",
          "package": "LogicGrowsOnTrees-network",
          "signature": "WorkerId -\u003e m ()",
          "source": "src/LogicGrowsOnTrees-Parallel-Adapter-Network.html#disconnectWorker",
          "type": "method"
        },
        "index": {
          "description": "Forcibly disconnects the given worker calling this function with the WorkerId of worker that is no longer connected to the system is not an error in that case nothing will happen",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "disconnectWorker",
          "normalized": "WorkerId-\u003ea()",
          "package": "LogicGrowsOnTrees-network",
          "partial": "Worker",
          "signature": "WorkerId-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:disconnectWorker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the driver for the network adapter;  it consists of a supervisor\n    that listens for connections and multiple workers that connect to the\n    supervisor, where the same executable is used for both the supervisor and\n    the worker. To start the supervisor, run the executable with \u003ca\u003esupervisor\u003c/a\u003e as\n    the first argument and \u003ca\u003e-p PORTID\u003c/a\u003e to specify the port id. To start a\n    worker, run the executable with \u003ca\u003eworker\u003c/a\u003e as the first argument, the address\n    of the supervisor as the second, and the port id as the third.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "driver",
          "package": "LogicGrowsOnTrees-network",
          "signature": "Driver IO shared_configuration supervisor_configuration m n exploration_mode",
          "source": "src/LogicGrowsOnTrees-Parallel-Adapter-Network.html#driver",
          "type": "function"
        },
        "index": {
          "description": "This is the driver for the network adapter it consists of supervisor that listens for connections and multiple workers that connect to the supervisor where the same executable is used for both the supervisor and the worker To start the supervisor run the executable with supervisor as the first argument and PORTID to specify the port id To start worker run the executable with worker as the first argument the address of the supervisor as the second and the port id as the third",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "driver",
          "package": "LogicGrowsOnTrees-network",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:driver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFork a new thread running in this monad;  all controller threads are automnatically killed when the run is finished. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "fork",
          "package": "LogicGrowsOnTrees-network",
          "signature": "m () -\u003e m ThreadId",
          "type": "function"
        },
        "index": {
          "description": "Fork new thread running in this monad all controller threads are automnatically killed when the run is finished",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "fork",
          "normalized": "a()-\u003ea ThreadId",
          "package": "LogicGrowsOnTrees-network",
          "signature": "m()-\u003em ThreadId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:fork"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProcesses the command line and returns the network configuration;  it uses\n    the first argument to determine whether the configuration should be for a\n    supervisor or for a worker.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "getConfiguration",
          "package": "LogicGrowsOnTrees-network",
          "signature": "Term shared_configuration-\u003e Term supervisor_configuration-\u003e TermInfo-\u003e IO (NetworkConfiguration shared_configuration supervisor_configuration)",
          "type": "function"
        },
        "index": {
          "description": "Processes the command line and returns the network configuration it uses the first argument to determine whether the configuration should be for supervisor or for worker",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "getConfiguration",
          "normalized": "Term a-\u003eTerm b-\u003eTermInfo-\u003eIO(NetworkConfiguration a b)",
          "package": "LogicGrowsOnTrees-network",
          "partial": "Configuration",
          "signature": "Term shared_configuration-\u003eTerm supervisor_configuration-\u003eTermInfo-\u003eIO(NetworkConfiguration shared_configuration supervisor_configuration)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:getConfiguration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003egetCurrentProgressAsync\u003c/a\u003e\u003c/code\u003e, but blocks until the result is ready. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "getCurrentProgress",
          "package": "LogicGrowsOnTrees-network",
          "signature": "m (ProgressFor (ExplorationModeFor m))",
          "type": "function"
        },
        "index": {
          "description": "Like getCurrentProgressAsync but blocks until the result is ready",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "getCurrentProgress",
          "package": "LogicGrowsOnTrees-network",
          "partial": "Current Progress",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:getCurrentProgress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequest the current progress, invoking the given callback with the result;  see \u003ccode\u003e\u003ca\u003egetCurrentProgress\u003c/a\u003e\u003c/code\u003e for the synchronous version. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "getCurrentProgressAsync",
          "package": "LogicGrowsOnTrees-network",
          "signature": "(ProgressFor (ExplorationModeFor m) -\u003e IO ()) -\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Request the current progress invoking the given callback with the result see getCurrentProgress for the synchronous version",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "getCurrentProgressAsync",
          "normalized": "(ProgressFor(ExplorationModeFor a)-\u003eIO())-\u003ea()",
          "package": "LogicGrowsOnTrees-network",
          "partial": "Current Progress Async",
          "signature": "(ProgressFor(ExplorationModeFor m)-\u003eIO())-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:getCurrentProgressAsync"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003egetCurrentStatisticsAsync\u003c/a\u003e\u003c/code\u003e, but blocks until the result is ready. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "getCurrentStatistics",
          "package": "LogicGrowsOnTrees-network",
          "signature": "m RunStatistics",
          "type": "function"
        },
        "index": {
          "description": "Like getCurrentStatisticsAsync but blocks until the result is ready",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "getCurrentStatistics",
          "package": "LogicGrowsOnTrees-network",
          "partial": "Current Statistics",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:getCurrentStatistics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the current run statistics. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "getCurrentStatisticsAsync",
          "package": "LogicGrowsOnTrees-network",
          "signature": "(RunStatistics -\u003e IO ()) -\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Get the current run statistics",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "getCurrentStatisticsAsync",
          "normalized": "(RunStatistics-\u003eIO())-\u003ea()",
          "package": "LogicGrowsOnTrees-network",
          "partial": "Current Statistics Async",
          "signature": "(RunStatistics-\u003eIO())-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:getCurrentStatisticsAsync"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003egetNumberOfWorkersAsync\u003c/a\u003e\u003c/code\u003e, but blocks until the result is ready. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "getNumberOfWorkers",
          "package": "LogicGrowsOnTrees-network",
          "signature": "m Int",
          "type": "function"
        },
        "index": {
          "description": "Like getNumberOfWorkersAsync but blocks until the result is ready",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "getNumberOfWorkers",
          "package": "LogicGrowsOnTrees-network",
          "partial": "Number Of Workers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:getNumberOfWorkers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequest the number of workers, invoking the given callback with the result;  see \u003ccode\u003e\u003ca\u003egetNumberOfWorkers\u003c/a\u003e\u003c/code\u003e for the synchronous version. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "getNumberOfWorkersAsync",
          "package": "LogicGrowsOnTrees-network",
          "signature": "(Int -\u003e IO ()) -\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Request the number of workers invoking the given callback with the result see getNumberOfWorkers for the synchronous version",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "getNumberOfWorkersAsync",
          "normalized": "(Int-\u003eIO())-\u003ea()",
          "package": "LogicGrowsOnTrees-network",
          "partial": "Number Of Workers Async",
          "signature": "(Int-\u003eIO())-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:getNumberOfWorkersAsync"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecallback used to notify that a worker is about to connect;\n                return \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e to allow the connection to proceed and \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e\n                to veto it\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "notifyConnected",
          "package": "LogicGrowsOnTrees-network",
          "signature": "WorkerId -\u003e IO Bool",
          "source": "src/LogicGrowsOnTrees-Parallel-Adapter-Network.html#NetworkCallbacks",
          "type": "function"
        },
        "index": {
          "description": "callback used to notify that worker is about to connect return True to allow the connection to proceed and False to veto it",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "notifyConnected",
          "normalized": "WorkerId-\u003eIO Bool",
          "package": "LogicGrowsOnTrees-network",
          "partial": "Connected",
          "signature": "WorkerId-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:notifyConnected"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecallback used to notify that a worker has disconnected \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "notifyDisconnected",
          "package": "LogicGrowsOnTrees-network",
          "signature": "WorkerId -\u003e IO ()",
          "source": "src/LogicGrowsOnTrees-Parallel-Adapter-Network.html#NetworkCallbacks",
          "type": "function"
        },
        "index": {
          "description": "callback used to notify that worker has disconnected",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "notifyDisconnected",
          "normalized": "WorkerId-\u003eIO()",
          "package": "LogicGrowsOnTrees-network",
          "partial": "Disconnected",
          "signature": "WorkerId-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:notifyDisconnected"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003erequestProgressUpdateAsync\u003c/a\u003e\u003c/code\u003e, but blocks until the progress update has completed. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "requestProgressUpdate",
          "package": "LogicGrowsOnTrees-network",
          "signature": "m (ProgressFor (ExplorationModeFor m))",
          "type": "function"
        },
        "index": {
          "description": "Like requestProgressUpdateAsync but blocks until the progress update has completed",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "requestProgressUpdate",
          "package": "LogicGrowsOnTrees-network",
          "partial": "Progress Update",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:requestProgressUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequest that a global progress update be performed, invoking the given callback with the result;  see \u003ccode\u003e\u003ca\u003erequestProgressUpdate\u003c/a\u003e\u003c/code\u003e for the synchronous version. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "requestProgressUpdateAsync",
          "package": "LogicGrowsOnTrees-network",
          "signature": "(ProgressFor (ExplorationModeFor m) -\u003e IO ()) -\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Request that global progress update be performed invoking the given callback with the result see requestProgressUpdate for the synchronous version",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "requestProgressUpdateAsync",
          "normalized": "(ProgressFor(ExplorationModeFor a)-\u003eIO())-\u003ea()",
          "package": "LogicGrowsOnTrees-network",
          "partial": "Progress Update Async",
          "signature": "(ProgressFor(ExplorationModeFor m)-\u003eIO())-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:requestProgressUpdateAsync"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estatistics for the number of available workloads waiting for a worker \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "runAvailableWorkloadStatistics",
          "package": "LogicGrowsOnTrees-network",
          "signature": "(FunctionOfTimeStatistics Int)",
          "type": "function"
        },
        "index": {
          "description": "statistics for the number of available workloads waiting for worker",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "runAvailableWorkloadStatistics",
          "package": "LogicGrowsOnTrees-network",
          "partial": "Available Workload Statistics",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:runAvailableWorkloadStatistics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe average amount of time per call made to functions in \u003ca\u003eLogicGrowsOnTrees.Parallel.Common.Supervisor\u003c/a\u003e \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "runAverageTimePerCall",
          "package": "LogicGrowsOnTrees-network",
          "signature": "Float",
          "type": "function"
        },
        "index": {
          "description": "the average amount of time per call made to functions in LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "runAverageTimePerCall",
          "package": "LogicGrowsOnTrees-network",
          "partial": "Average Time Per Call",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:runAverageTimePerCall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe end time of the run \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "runEndTime",
          "package": "LogicGrowsOnTrees-network",
          "signature": "UTCTime",
          "type": "function"
        },
        "index": {
          "description": "the end time of the run",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "runEndTime",
          "package": "LogicGrowsOnTrees-network",
          "partial": "End Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:runEndTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExplores the given tree using multiple processes to achieve parallelism.\n\u003c/p\u003e\u003cp\u003eThis function grants access to all of the functionality of this adapter,\n    rather than having to go through the more restricted driver interface. The\n    signature of this function is very complicated because it is meant to be\n    used in both the supervisor and worker.  The configuration information is\n    used to determine whether the program is being run in supervisor mode or in\n    worker mode;  in the former case, the configuration is further split into\n    configuration information that is shared between the supervisor and the\n    worker and configuration information that is specific to the supervisor.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "runExplorer",
          "package": "LogicGrowsOnTrees-network",
          "signature": "(shared_configuration -\u003e ExplorationMode exploration_mode)-\u003e Purity m n-\u003e IO (NetworkConfiguration shared_configuration supervisor_configuration)-\u003e (shared_configuration -\u003e IO ())-\u003e (shared_configuration -\u003e TreeT m (ResultFor exploration_mode))-\u003e (shared_configuration -\u003e supervisor_configuration -\u003e IO (ProgressFor exploration_mode))-\u003e (shared_configuration -\u003e supervisor_configuration -\u003e NetworkControllerMonad exploration_mode ())-\u003e IO (Maybe ((shared_configuration, supervisor_configuration), RunOutcomeFor exploration_mode))",
          "type": "function"
        },
        "index": {
          "description": "Explores the given tree using multiple processes to achieve parallelism This function grants access to all of the functionality of this adapter rather than having to go through the more restricted driver interface The signature of this function is very complicated because it is meant to be used in both the supervisor and worker The configuration information is used to determine whether the program is being run in supervisor mode or in worker mode in the former case the configuration is further split into configuration information that is shared between the supervisor and the worker and configuration information that is specific to the supervisor",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "runExplorer",
          "normalized": "(a-\u003eExplorationMode b)-\u003ePurity c d-\u003eIO(NetworkConfiguration a e)-\u003e(a-\u003eIO())-\u003e(a-\u003eTreeT c(ResultFor b))-\u003e(a-\u003ee-\u003eIO(ProgressFor b))-\u003e(a-\u003ee-\u003eNetworkControllerMonad b())-\u003eIO(Maybe((a,e),RunOutcomeFor b))",
          "package": "LogicGrowsOnTrees-network",
          "partial": "Explorer",
          "signature": "(shared_configuration-\u003eExplorationMode exploration_mode)-\u003ePurity m n-\u003eIO(NetworkConfiguration shared_configuration supervisor_configuration)-\u003e(shared_configuration-\u003eIO())-\u003e(shared_configuration-\u003eTreeT m(ResultFor exploration_mode))-\u003e(shared_configuration-\u003esupervisor_configuration-\u003eIO(ProgressFor exploration_mode))-\u003e(shared_configuration-\u003esupervisor_configuration-\u003eNetworkControllerMonad exploration_mode())-\u003eIO(Maybe((shared_configuration,supervisor_configuration),RunOutcomeFor exploration_mode))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:runExplorer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estatistics for the instantaneous rate at which workloads were requested (using an exponentially decaying sum) \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "runInstantaneousWorkloadRequestRateStatistics",
          "package": "LogicGrowsOnTrees-network",
          "signature": "(FunctionOfTimeStatistics Float)",
          "type": "function"
        },
        "index": {
          "description": "statistics for the instantaneous rate at which workloads were requested using an exponentially decaying sum",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "runInstantaneousWorkloadRequestRateStatistics",
          "package": "LogicGrowsOnTrees-network",
          "partial": "Instantaneous Workload Request Rate Statistics",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:runInstantaneousWorkloadRequestRateStatistics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estatistics for the instantaneous time needed for workloads to be stolen (using an exponentially decaying weighted average) \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "runInstantaneousWorkloadStealTimeStatistics",
          "package": "LogicGrowsOnTrees-network",
          "signature": "(FunctionOfTimeStatistics Float)",
          "type": "function"
        },
        "index": {
          "description": "statistics for the instantaneous time needed for workloads to be stolen using an exponentially decaying weighted average",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "runInstantaneousWorkloadStealTimeStatistics",
          "package": "LogicGrowsOnTrees-network",
          "partial": "Instantaneous Workload Steal Time Statistics",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:runInstantaneousWorkloadStealTimeStatistics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe number of calls made to functions in \u003ca\u003eLogicGrowsOnTrees.Parallel.Common.Supervisor\u003c/a\u003e \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "runNumberOfCalls",
          "package": "LogicGrowsOnTrees-network",
          "signature": "Int",
          "type": "function"
        },
        "index": {
          "description": "the number of calls made to functions in LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "runNumberOfCalls",
          "package": "LogicGrowsOnTrees-network",
          "partial": "Number Of Calls",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:runNumberOfCalls"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe start time of the run \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "runStartTime",
          "package": "LogicGrowsOnTrees-network",
          "signature": "UTCTime",
          "type": "function"
        },
        "index": {
          "description": "the start time of the run",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "runStartTime",
          "package": "LogicGrowsOnTrees-network",
          "partial": "Start Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:runStartTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estatistics gathered during the run, useful if the system is not scaling with the number of workers as it should \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "runStatistics",
          "package": "LogicGrowsOnTrees-network",
          "signature": "RunStatistics",
          "type": "function"
        },
        "index": {
          "description": "statistics gathered during the run useful if the system is not scaling with the number of workers as it should",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "runStatistics",
          "package": "LogicGrowsOnTrees-network",
          "partial": "Statistics",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:runStatistics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estatistics for the time needed to steal a workload from a worker \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "runStealWaitTimes",
          "package": "LogicGrowsOnTrees-network",
          "signature": "IndependentMeasurementsStatistics",
          "type": "function"
        },
        "index": {
          "description": "statistics for the time needed to steal workload from worker",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "runStealWaitTimes",
          "package": "LogicGrowsOnTrees-network",
          "partial": "Steal Wait Times",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:runStealWaitTimes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis runs the supervisor, which will listen for connecting workers. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "runSupervisor",
          "package": "LogicGrowsOnTrees-network",
          "signature": "ExplorationMode exploration_mode-\u003e (Handle -\u003e IO ())-\u003e NetworkCallbacks-\u003e PortID-\u003e ProgressFor exploration_mode-\u003e NetworkControllerMonad exploration_mode ()-\u003e IO (RunOutcomeFor exploration_mode)",
          "type": "function"
        },
        "index": {
          "description": "This runs the supervisor which will listen for connecting workers",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "runSupervisor",
          "normalized": "ExplorationMode a-\u003e(Handle-\u003eIO())-\u003eNetworkCallbacks-\u003ePortID-\u003eProgressFor a-\u003eNetworkControllerMonad a()-\u003eIO(RunOutcomeFor a)",
          "package": "LogicGrowsOnTrees-network",
          "partial": "Supervisor",
          "signature": "ExplorationMode exploration_mode-\u003e(Handle-\u003eIO())-\u003eNetworkCallbacks-\u003ePortID-\u003eProgressFor exploration_mode-\u003eNetworkControllerMonad exploration_mode()-\u003eIO(RunOutcomeFor exploration_mode)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:runSupervisor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe fraction of the time the supervisor spent processing events while inside the \u003ccode\u003eSupervisorMonad\u003c/code\u003e \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "runSupervisorMonadOccupation",
          "package": "LogicGrowsOnTrees-network",
          "signature": "Float",
          "type": "function"
        },
        "index": {
          "description": "the fraction of the time the supervisor spent processing events while inside the SupervisorMonad",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "runSupervisorMonadOccupation",
          "package": "LogicGrowsOnTrees-network",
          "partial": "Supervisor Monad Occupation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:runSupervisorMonadOccupation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe fraction of the time the supervisor spent processing events \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "runSupervisorOccupation",
          "package": "LogicGrowsOnTrees-network",
          "signature": "Float",
          "type": "function"
        },
        "index": {
          "description": "the fraction of the time the supervisor spent processing events",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "runSupervisorOccupation",
          "package": "LogicGrowsOnTrees-network",
          "partial": "Supervisor Occupation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:runSupervisorOccupation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe reason why the run terminated \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "runTerminationReason",
          "package": "LogicGrowsOnTrees-network",
          "signature": "TerminationReason progress final_result",
          "type": "function"
        },
        "index": {
          "description": "the reason why the run terminated",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "runTerminationReason",
          "package": "LogicGrowsOnTrees-network",
          "partial": "Termination Reason",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:runTerminationReason"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estatistics for the number of workers waiting for a workload \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "runWaitingWorkerStatistics",
          "package": "LogicGrowsOnTrees-network",
          "signature": "(FunctionOfTimeStatistics Int)",
          "type": "function"
        },
        "index": {
          "description": "statistics for the number of workers waiting for workload",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "runWaitingWorkerStatistics",
          "package": "LogicGrowsOnTrees-network",
          "partial": "Waiting Worker Statistics",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:runWaitingWorkerStatistics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe wall time of the run \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "runWallTime",
          "package": "LogicGrowsOnTrees-network",
          "signature": "NominalDiffTime",
          "type": "function"
        },
        "index": {
          "description": "the wall time of the run",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "runWallTime",
          "package": "LogicGrowsOnTrees-network",
          "partial": "Wall Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:runWallTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns a worker that connects to the supervisor via. the given address and port id. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "runWorker",
          "package": "LogicGrowsOnTrees-network",
          "signature": "ExplorationMode exploration_mode-\u003e Purity m n-\u003e TreeT m (ResultFor exploration_mode)-\u003e HostName-\u003e PortID-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Runs worker that connects to the supervisor via the given address and port id",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "runWorker",
          "normalized": "ExplorationMode a-\u003ePurity b c-\u003eTreeT b(ResultFor a)-\u003eHostName-\u003ePortID-\u003eIO()",
          "package": "LogicGrowsOnTrees-network",
          "partial": "Worker",
          "signature": "ExplorationMode exploration_mode-\u003ePurity m n-\u003eTreeT m(ResultFor exploration_mode)-\u003eHostName-\u003ePortID-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:runWorker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estatistics for the number of workers waiting for a workload \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "runWorkerCountStatistics",
          "package": "LogicGrowsOnTrees-network",
          "signature": "(FunctionOfTimeStatistics Int)",
          "type": "function"
        },
        "index": {
          "description": "statistics for the number of workers waiting for workload",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "runWorkerCountStatistics",
          "package": "LogicGrowsOnTrees-network",
          "partial": "Worker Count Statistics",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:runWorkerCountStatistics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe fraction of the total time that workers were occupied \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "runWorkerOccupation",
          "package": "LogicGrowsOnTrees-network",
          "signature": "Float",
          "type": "function"
        },
        "index": {
          "description": "the fraction of the total time that workers were occupied",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "runWorkerOccupation",
          "package": "LogicGrowsOnTrees-network",
          "partial": "Worker Occupation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:runWorkerOccupation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estatistics for how long it took for workers to obtain a workload \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "runWorkerWaitTimes",
          "package": "LogicGrowsOnTrees-network",
          "signature": "(FunctionOfTimeStatistics NominalDiffTime)",
          "type": "function"
        },
        "index": {
          "description": "statistics for how long it took for workers to obtain workload",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "runWorkerWaitTimes",
          "package": "LogicGrowsOnTrees-network",
          "partial": "Worker Wait Times",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:runWorkerWaitTimes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the size of the workload buffer;  for more information, see \u003ccode\u003e\u003ca\u003esetWorkloadBufferSize\u003c/a\u003e\u003c/code\u003e (which links to the \u003ca\u003eLogicGrowsOnTrees.Parallel.Common.Supervisor\u003c/a\u003e module). \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "setWorkloadBufferSize",
          "package": "LogicGrowsOnTrees-network",
          "signature": "Int -\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Sets the size of the workload buffer for more information see setWorkloadBufferSize which links to the LogicGrowsOnTrees.Parallel.Common.Supervisor module",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "setWorkloadBufferSize",
          "normalized": "Int-\u003ea()",
          "package": "LogicGrowsOnTrees-network",
          "partial": "Workload Buffer Size",
          "signature": "Int-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:setWorkloadBufferSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econfiguration information shared between the supervisor and the worker \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "shared_configuration",
          "package": "LogicGrowsOnTrees-network",
          "signature": "shared_configuration",
          "source": "src/LogicGrowsOnTrees-Parallel-Adapter-Network.html#NetworkConfiguration",
          "type": "function"
        },
        "index": {
          "description": "configuration information shared between the supervisor and the worker",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "shared_configuration",
          "package": "LogicGrowsOnTrees-network",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:shared_configuration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a string representation of a port id.  (This function is needed\n    if using an older version of the \u003ccode\u003eNetwork\u003c/code\u003e package that doesn't have a\n    \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e instance for \u003ccode\u003e\u003ca\u003ePortID\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "showPortID",
          "package": "LogicGrowsOnTrees-network",
          "signature": "PortID -\u003e String",
          "source": "src/LogicGrowsOnTrees-Parallel-Adapter-Network.html#showPortID",
          "type": "function"
        },
        "index": {
          "description": "Constructs string representation of port id This function is needed if using an older version of the Network package that doesn have Show instance for PortID",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "showPortID",
          "normalized": "PortID-\u003eString",
          "package": "LogicGrowsOnTrees-network",
          "partial": "Port ID",
          "signature": "PortID-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:showPortID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econfiguration information specific to the supervisor \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "supervisor_configuration",
          "package": "LogicGrowsOnTrees-network",
          "signature": "supervisor_configuration",
          "source": "src/LogicGrowsOnTrees-Parallel-Adapter-Network.html#NetworkConfiguration",
          "type": "function"
        },
        "index": {
          "description": "configuration information specific to the supervisor",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "supervisor_configuration",
          "package": "LogicGrowsOnTrees-network",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:supervisor_configuration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe address of the supervisor to which this worker should connect \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "supervisor_host_name",
          "package": "LogicGrowsOnTrees-network",
          "signature": "HostName",
          "source": "src/LogicGrowsOnTrees-Parallel-Adapter-Network.html#NetworkConfiguration",
          "type": "function"
        },
        "index": {
          "description": "the address of the supervisor to which this worker should connect",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "supervisor_host_name",
          "package": "LogicGrowsOnTrees-network",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:supervisor_host_name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e for the worker, the port to which to connect \n\u003c/li\u003e\u003c/ul\u003e\u003cul\u003e\u003cli\u003e for the supervisor, the port on which to listen \n\u003c/li\u003e\u003c/ul\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "supervisor_port",
          "package": "LogicGrowsOnTrees-network",
          "signature": "WrappedPortID",
          "source": "src/LogicGrowsOnTrees-Parallel-Adapter-Network.html#NetworkConfiguration",
          "type": "function"
        },
        "index": {
          "description": "for the worker the port to which to connect for the supervisor the port on which to listen",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "supervisor_port",
          "package": "LogicGrowsOnTrees-network",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:supervisor_port"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "unwrapPortID",
          "package": "LogicGrowsOnTrees-network",
          "signature": "PortID",
          "source": "src/LogicGrowsOnTrees-Parallel-Adapter-Network.html#WrappedPortID",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "unwrapPortID",
          "package": "LogicGrowsOnTrees-network",
          "partial": "Port ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:unwrapPortID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitializes the network subsystem where required (e.g., on Windows). \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "withNetwork",
          "package": "LogicGrowsOnTrees-network",
          "signature": "IO α) -\u003e IO α",
          "source": "src/LogicGrowsOnTrees-Parallel-Adapter-Network.html#withNetwork",
          "type": "function"
        },
        "index": {
          "description": "Initializes the network subsystem where required e.g on Windows",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "withNetwork",
          "normalized": "IO a)-\u003eIO a",
          "package": "LogicGrowsOnTrees-network",
          "partial": "Network",
          "signature": "IO α)-\u003eIO α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:withNetwork"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe address of the worker \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "workerHostName",
          "package": "LogicGrowsOnTrees-network",
          "signature": "HostName",
          "source": "src/LogicGrowsOnTrees-Parallel-Adapter-Network.html#WorkerId",
          "type": "function"
        },
        "index": {
          "description": "the address of the worker",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "workerHostName",
          "package": "LogicGrowsOnTrees-network",
          "partial": "Host Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:workerHostName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe port number of the worker \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "workerPortNumber",
          "package": "LogicGrowsOnTrees-network",
          "signature": "PortNumber",
          "source": "src/LogicGrowsOnTrees-Parallel-Adapter-Network.html#WorkerId",
          "type": "function"
        },
        "index": {
          "description": "the port number of the worker",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Network",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Network",
          "name": "workerPortNumber",
          "package": "LogicGrowsOnTrees-network",
          "partial": "Port Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-network/docs/LogicGrowsOnTrees-Parallel-Adapter-Network.html#v:workerPortNumber"
      }
    }
  ]
]