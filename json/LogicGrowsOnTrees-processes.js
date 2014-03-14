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
        "word": "LogicGrowsOnTrees-processes"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis adapter implements parallelism by spawning multiple processes.  The\n    number of processes can be changed during the run and even be set to zero.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "Processes",
          "package": "LogicGrowsOnTrees-processes",
          "source": "src/LogicGrowsOnTrees-Parallel-Adapter-Processes.html",
          "type": "module"
        },
        "index": {
          "description": "This adapter implements parallelism by spawning multiple processes The number of processes can be changed during the run and even be set to zero",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Processes",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "Processes",
          "package": "LogicGrowsOnTrees-processes",
          "partial": "Processes",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-processes/docs/LogicGrowsOnTrees-Parallel-Adapter-Processes.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe monad in which the processes controller will run. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "ProcessesControllerMonad",
          "package": "LogicGrowsOnTrees-processes",
          "source": "src/LogicGrowsOnTrees-Parallel-Adapter-Processes.html#ProcessesControllerMonad",
          "type": "data"
        },
        "index": {
          "description": "The monad in which the processes controller will run",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Processes",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "ProcessesControllerMonad",
          "package": "LogicGrowsOnTrees-processes",
          "partial": "Processes Controller Monad",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-processes/docs/LogicGrowsOnTrees-Parallel-Adapter-Processes.html#t:ProcessesControllerMonad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type that represents the outcome of a run. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "RunOutcome",
          "package": "LogicGrowsOnTrees-processes",
          "type": "data"
        },
        "index": {
          "description": "type that represents the outcome of run",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Processes",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "RunOutcome",
          "package": "LogicGrowsOnTrees-processes",
          "partial": "Run Outcome",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-processes/docs/LogicGrowsOnTrees-Parallel-Adapter-Processes.html#t:RunOutcome"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStatistics gathered about the run. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "RunStatistics",
          "package": "LogicGrowsOnTrees-processes",
          "type": "data"
        },
        "index": {
          "description": "Statistics gathered about the run",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Processes",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "RunStatistics",
          "package": "LogicGrowsOnTrees-processes",
          "partial": "Run Statistics",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-processes/docs/LogicGrowsOnTrees-Parallel-Adapter-Processes.html#t:RunStatistics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type that represents the reason why a run terminated. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "TerminationReason",
          "package": "LogicGrowsOnTrees-processes",
          "type": "data"
        },
        "index": {
          "description": "type that represents the reason why run terminated",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Processes",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "TerminationReason",
          "package": "LogicGrowsOnTrees-processes",
          "partial": "Termination Reason",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-processes/docs/LogicGrowsOnTrees-Parallel-Adapter-Processes.html#t:TerminationReason"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe run was aborted with the given progress \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "Aborted",
          "package": "LogicGrowsOnTrees-processes",
          "signature": "Aborted progress",
          "type": "function"
        },
        "index": {
          "description": "the run was aborted with the given progress",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Processes",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "Aborted",
          "package": "LogicGrowsOnTrees-processes",
          "partial": "Aborted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-processes/docs/LogicGrowsOnTrees-Parallel-Adapter-Processes.html#v:Aborted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe run completed with the given final result \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "Completed",
          "package": "LogicGrowsOnTrees-processes",
          "signature": "Completed final_result",
          "type": "function"
        },
        "index": {
          "description": "the run completed with the given final result",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Processes",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "Completed",
          "package": "LogicGrowsOnTrees-processes",
          "partial": "Completed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-processes/docs/LogicGrowsOnTrees-Parallel-Adapter-Processes.html#v:Completed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe run failed with the given progress for the given reason \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "Failure",
          "package": "LogicGrowsOnTrees-processes",
          "signature": "Failure progress String",
          "type": "function"
        },
        "index": {
          "description": "the run failed with the given progress for the given reason",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Processes",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "Failure",
          "package": "LogicGrowsOnTrees-processes",
          "partial": "Failure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-processes/docs/LogicGrowsOnTrees-Parallel-Adapter-Processes.html#v:Failure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "RunStatistics",
          "package": "LogicGrowsOnTrees-processes",
          "signature": "RunStatistics",
          "type": "function"
        },
        "index": {
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Processes",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "RunStatistics",
          "package": "LogicGrowsOnTrees-processes",
          "partial": "Run Statistics",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-processes/docs/LogicGrowsOnTrees-Parallel-Adapter-Processes.html#v:RunStatistics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbort the supervisor. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "abort",
          "package": "LogicGrowsOnTrees-processes",
          "signature": "m ()",
          "type": "function"
        },
        "index": {
          "description": "Abort the supervisor",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Processes",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "abort",
          "normalized": "a()",
          "package": "LogicGrowsOnTrees-processes",
          "signature": "m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-processes/docs/LogicGrowsOnTrees-Parallel-Adapter-Processes.html#v:abort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003echangeNumberOfWorkersAsync\u003c/a\u003e\u003c/code\u003e, but it blocks until the number of workers\n    has been changed and returns the new number of workers.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "changeNumberOfWorkers",
          "package": "LogicGrowsOnTrees-processes",
          "signature": "(Word -\u003e Word) -\u003e m Word",
          "type": "function"
        },
        "index": {
          "description": "Like changeNumberOfWorkersAsync but it blocks until the number of workers has been changed and returns the new number of workers",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Processes",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "changeNumberOfWorkers",
          "normalized": "(Word-\u003eWord)-\u003ea Word",
          "package": "LogicGrowsOnTrees-processes",
          "partial": "Number Of Workers",
          "signature": "(Word-\u003eWord)-\u003em Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-processes/docs/LogicGrowsOnTrees-Parallel-Adapter-Processes.html#v:changeNumberOfWorkers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange the number of workers;  the first argument is a map that computes\n        the new number of workers given the old number of workers, and the\n        second argument is a callback that will be invoked with the new number\n        of workers.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003echangeNumberOfWorkers\u003c/a\u003e\u003c/code\u003e for the synchronous version of this request.\n\u003c/p\u003e\u003cp\u003eIf you just want to set the number of workers to some fixed value, then\n        see \u003ccode\u003e\u003ca\u003esetNumberOfWorkers\u003c/a\u003e\u003c/code\u003e / \u003ccode\u003e\u003ca\u003esetNumberOfWorkersAsync\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "changeNumberOfWorkersAsync",
          "package": "LogicGrowsOnTrees-processes",
          "signature": "(Word -\u003e Word) -\u003e (Word -\u003e IO ()) -\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Change the number of workers the first argument is map that computes the new number of workers given the old number of workers and the second argument is callback that will be invoked with the new number of workers See changeNumberOfWorkers for the synchronous version of this request If you just want to set the number of workers to some fixed value then see setNumberOfWorkers setNumberOfWorkersAsync",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Processes",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "changeNumberOfWorkersAsync",
          "normalized": "(Word-\u003eWord)-\u003e(Word-\u003eIO())-\u003ea()",
          "package": "LogicGrowsOnTrees-processes",
          "partial": "Number Of Workers Async",
          "signature": "(Word-\u003eWord)-\u003e(Word-\u003eIO())-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-processes/docs/LogicGrowsOnTrees-Parallel-Adapter-Processes.html#v:changeNumberOfWorkersAsync"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the driver for the threads adapter; the number of workers is\n    specified via. the (required) command-line option \u003ca\u003e-n\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eNote that there are not seperate drivers for the supervisor process and the\n    worker process; instead, the same executable is used for both the supervisor\n    and the worker, with a sentinel argument (or arguments) determining which\n    role it should run as.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "driver",
          "package": "LogicGrowsOnTrees-processes",
          "signature": "Driver IO shared_configuration supervisor_configuration m n exploration_mode",
          "source": "src/LogicGrowsOnTrees-Parallel-Adapter-Processes.html#driver",
          "type": "function"
        },
        "index": {
          "description": "This is the driver for the threads adapter the number of workers is specified via the required command-line option Note that there are not seperate drivers for the supervisor process and the worker process instead the same executable is used for both the supervisor and the worker with sentinel argument or arguments determining which role it should run as",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Processes",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "driver",
          "package": "LogicGrowsOnTrees-processes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-processes/docs/LogicGrowsOnTrees-Parallel-Adapter-Processes.html#v:driver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFork a new thread running in this monad;  all controller threads are automnatically killed when the run is finished. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "fork",
          "package": "LogicGrowsOnTrees-processes",
          "signature": "m () -\u003e m ThreadId",
          "type": "function"
        },
        "index": {
          "description": "Fork new thread running in this monad all controller threads are automnatically killed when the run is finished",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Processes",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "fork",
          "normalized": "a()-\u003ea ThreadId",
          "package": "LogicGrowsOnTrees-processes",
          "signature": "m()-\u003em ThreadId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-processes/docs/LogicGrowsOnTrees-Parallel-Adapter-Processes.html#v:fork"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003egetCurrentProgressAsync\u003c/a\u003e\u003c/code\u003e, but blocks until the result is ready. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "getCurrentProgress",
          "package": "LogicGrowsOnTrees-processes",
          "signature": "m (ProgressFor (ExplorationModeFor m))",
          "type": "function"
        },
        "index": {
          "description": "Like getCurrentProgressAsync but blocks until the result is ready",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Processes",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "getCurrentProgress",
          "package": "LogicGrowsOnTrees-processes",
          "partial": "Current Progress",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-processes/docs/LogicGrowsOnTrees-Parallel-Adapter-Processes.html#v:getCurrentProgress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequest the current progress, invoking the given callback with the result;  see \u003ccode\u003e\u003ca\u003egetCurrentProgress\u003c/a\u003e\u003c/code\u003e for the synchronous version. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "getCurrentProgressAsync",
          "package": "LogicGrowsOnTrees-processes",
          "signature": "(ProgressFor (ExplorationModeFor m) -\u003e IO ()) -\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Request the current progress invoking the given callback with the result see getCurrentProgress for the synchronous version",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Processes",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "getCurrentProgressAsync",
          "normalized": "(ProgressFor(ExplorationModeFor a)-\u003eIO())-\u003ea()",
          "package": "LogicGrowsOnTrees-processes",
          "partial": "Current Progress Async",
          "signature": "(ProgressFor(ExplorationModeFor m)-\u003eIO())-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-processes/docs/LogicGrowsOnTrees-Parallel-Adapter-Processes.html#v:getCurrentProgressAsync"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003egetCurrentStatisticsAsync\u003c/a\u003e\u003c/code\u003e, but blocks until the result is ready. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "getCurrentStatistics",
          "package": "LogicGrowsOnTrees-processes",
          "signature": "m RunStatistics",
          "type": "function"
        },
        "index": {
          "description": "Like getCurrentStatisticsAsync but blocks until the result is ready",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Processes",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "getCurrentStatistics",
          "package": "LogicGrowsOnTrees-processes",
          "partial": "Current Statistics",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-processes/docs/LogicGrowsOnTrees-Parallel-Adapter-Processes.html#v:getCurrentStatistics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the current run statistics. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "getCurrentStatisticsAsync",
          "package": "LogicGrowsOnTrees-processes",
          "signature": "(RunStatistics -\u003e IO ()) -\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Get the current run statistics",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Processes",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "getCurrentStatisticsAsync",
          "normalized": "(RunStatistics-\u003eIO())-\u003ea()",
          "package": "LogicGrowsOnTrees-processes",
          "partial": "Current Statistics Async",
          "signature": "(RunStatistics-\u003eIO())-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-processes/docs/LogicGrowsOnTrees-Parallel-Adapter-Processes.html#v:getCurrentStatisticsAsync"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003egetNumberOfWorkersAsync\u003c/a\u003e\u003c/code\u003e, but blocks until the result is ready. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "getNumberOfWorkers",
          "package": "LogicGrowsOnTrees-processes",
          "signature": "m Int",
          "type": "function"
        },
        "index": {
          "description": "Like getNumberOfWorkersAsync but blocks until the result is ready",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Processes",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "getNumberOfWorkers",
          "package": "LogicGrowsOnTrees-processes",
          "partial": "Number Of Workers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-processes/docs/LogicGrowsOnTrees-Parallel-Adapter-Processes.html#v:getNumberOfWorkers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequest the number of workers, invoking the given callback with the result;  see \u003ccode\u003e\u003ca\u003egetNumberOfWorkers\u003c/a\u003e\u003c/code\u003e for the synchronous version. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "getNumberOfWorkersAsync",
          "package": "LogicGrowsOnTrees-processes",
          "signature": "(Int -\u003e IO ()) -\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Request the number of workers invoking the given callback with the result see getNumberOfWorkers for the synchronous version",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Processes",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "getNumberOfWorkersAsync",
          "normalized": "(Int-\u003eIO())-\u003ea()",
          "package": "LogicGrowsOnTrees-processes",
          "partial": "Number Of Workers Async",
          "signature": "(Int-\u003eIO())-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-processes/docs/LogicGrowsOnTrees-Parallel-Adapter-Processes.html#v:getNumberOfWorkersAsync"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the full path to this executable. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "getProgFilepath",
          "package": "LogicGrowsOnTrees-processes",
          "signature": "IO String",
          "source": "src/LogicGrowsOnTrees-Parallel-Adapter-Processes.html#getProgFilepath",
          "type": "function"
        },
        "index": {
          "description": "Gets the full path to this executable",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Processes",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "getProgFilepath",
          "package": "LogicGrowsOnTrees-processes",
          "partial": "Prog Filepath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-processes/docs/LogicGrowsOnTrees-Parallel-Adapter-Processes.html#v:getProgFilepath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003erequestProgressUpdateAsync\u003c/a\u003e\u003c/code\u003e, but blocks until the progress update has completed. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "requestProgressUpdate",
          "package": "LogicGrowsOnTrees-processes",
          "signature": "m (ProgressFor (ExplorationModeFor m))",
          "type": "function"
        },
        "index": {
          "description": "Like requestProgressUpdateAsync but blocks until the progress update has completed",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Processes",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "requestProgressUpdate",
          "package": "LogicGrowsOnTrees-processes",
          "partial": "Progress Update",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-processes/docs/LogicGrowsOnTrees-Parallel-Adapter-Processes.html#v:requestProgressUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequest that a global progress update be performed, invoking the given callback with the result;  see \u003ccode\u003e\u003ca\u003erequestProgressUpdate\u003c/a\u003e\u003c/code\u003e for the synchronous version. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "requestProgressUpdateAsync",
          "package": "LogicGrowsOnTrees-processes",
          "signature": "(ProgressFor (ExplorationModeFor m) -\u003e IO ()) -\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Request that global progress update be performed invoking the given callback with the result see requestProgressUpdate for the synchronous version",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Processes",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "requestProgressUpdateAsync",
          "normalized": "(ProgressFor(ExplorationModeFor a)-\u003eIO())-\u003ea()",
          "package": "LogicGrowsOnTrees-processes",
          "partial": "Progress Update Async",
          "signature": "(ProgressFor(ExplorationModeFor m)-\u003eIO())-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-processes/docs/LogicGrowsOnTrees-Parallel-Adapter-Processes.html#v:requestProgressUpdateAsync"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estatistics for the number of available workloads waiting for a worker \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "runAvailableWorkloadStatistics",
          "package": "LogicGrowsOnTrees-processes",
          "signature": "(FunctionOfTimeStatistics Int)",
          "type": "function"
        },
        "index": {
          "description": "statistics for the number of available workloads waiting for worker",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Processes",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "runAvailableWorkloadStatistics",
          "package": "LogicGrowsOnTrees-processes",
          "partial": "Available Workload Statistics",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-processes/docs/LogicGrowsOnTrees-Parallel-Adapter-Processes.html#v:runAvailableWorkloadStatistics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe average amount of time per call made to functions in \u003ca\u003eLogicGrowsOnTrees.Parallel.Common.Supervisor\u003c/a\u003e \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "runAverageTimePerCall",
          "package": "LogicGrowsOnTrees-processes",
          "signature": "Float",
          "type": "function"
        },
        "index": {
          "description": "the average amount of time per call made to functions in LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Processes",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "runAverageTimePerCall",
          "package": "LogicGrowsOnTrees-processes",
          "partial": "Average Time Per Call",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-processes/docs/LogicGrowsOnTrees-Parallel-Adapter-Processes.html#v:runAverageTimePerCall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe end time of the run \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "runEndTime",
          "package": "LogicGrowsOnTrees-processes",
          "signature": "UTCTime",
          "type": "function"
        },
        "index": {
          "description": "the end time of the run",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Processes",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "runEndTime",
          "package": "LogicGrowsOnTrees-processes",
          "partial": "End Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-processes/docs/LogicGrowsOnTrees-Parallel-Adapter-Processes.html#v:runEndTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExplores the given tree using multiple processes to achieve parallelism.\n\u003c/p\u003e\u003cp\u003eThis function grants access to all of the functionality of this adapter,\n    rather than having to go through the more restricted driver interface. The\n    signature of this function is very complicated because it is meant to be\n    used in both the supervisor and worker;  it figures out which role it is\n    supposed to play based on whether the list of command line arguments matches\n    a sentinel.\n\u003c/p\u003e\u003cp\u003eThe configuration information is divided into two parts: information shared\n    between the supervisor and the workers, and information that is specific to\n    the supervisor and not sent to the workers. (Note that only the former needs\n    to be serializable.) An action must be supplied that obtains this\n    configuration information, and most of the arguments are functions that are\n    given all or part of this information.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "runExplorer",
          "package": "LogicGrowsOnTrees-processes",
          "signature": "(shared_configuration -\u003e ExplorationMode exploration_mode)-\u003e Purity m n-\u003e IO (shared_configuration, supervisor_configuration)-\u003e (shared_configuration -\u003e IO ())-\u003e (shared_configuration -\u003e TreeT m (ResultFor exploration_mode))-\u003e (shared_configuration -\u003e supervisor_configuration -\u003e IO (ProgressFor exploration_mode))-\u003e (shared_configuration -\u003e supervisor_configuration -\u003e ProcessesControllerMonad exploration_mode ())-\u003e IO (Maybe ((shared_configuration, supervisor_configuration), RunOutcomeFor exploration_mode))",
          "type": "function"
        },
        "index": {
          "description": "Explores the given tree using multiple processes to achieve parallelism This function grants access to all of the functionality of this adapter rather than having to go through the more restricted driver interface The signature of this function is very complicated because it is meant to be used in both the supervisor and worker it figures out which role it is supposed to play based on whether the list of command line arguments matches sentinel The configuration information is divided into two parts information shared between the supervisor and the workers and information that is specific to the supervisor and not sent to the workers Note that only the former needs to be serializable An action must be supplied that obtains this configuration information and most of the arguments are functions that are given all or part of this information",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Processes",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "runExplorer",
          "normalized": "(a-\u003eExplorationMode b)-\u003ePurity c d-\u003eIO(a,e)-\u003e(a-\u003eIO())-\u003e(a-\u003eTreeT c(ResultFor b))-\u003e(a-\u003ee-\u003eIO(ProgressFor b))-\u003e(a-\u003ee-\u003eProcessesControllerMonad b())-\u003eIO(Maybe((a,e),RunOutcomeFor b))",
          "package": "LogicGrowsOnTrees-processes",
          "partial": "Explorer",
          "signature": "(shared_configuration-\u003eExplorationMode exploration_mode)-\u003ePurity m n-\u003eIO(shared_configuration,supervisor_configuration)-\u003e(shared_configuration-\u003eIO())-\u003e(shared_configuration-\u003eTreeT m(ResultFor exploration_mode))-\u003e(shared_configuration-\u003esupervisor_configuration-\u003eIO(ProgressFor exploration_mode))-\u003e(shared_configuration-\u003esupervisor_configuration-\u003eProcessesControllerMonad exploration_mode())-\u003eIO(Maybe((shared_configuration,supervisor_configuration),RunOutcomeFor exploration_mode))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-processes/docs/LogicGrowsOnTrees-Parallel-Adapter-Processes.html#v:runExplorer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estatistics for the instantaneous rate at which workloads were requested (using an exponentially decaying sum) \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "runInstantaneousWorkloadRequestRateStatistics",
          "package": "LogicGrowsOnTrees-processes",
          "signature": "(FunctionOfTimeStatistics Float)",
          "type": "function"
        },
        "index": {
          "description": "statistics for the instantaneous rate at which workloads were requested using an exponentially decaying sum",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Processes",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "runInstantaneousWorkloadRequestRateStatistics",
          "package": "LogicGrowsOnTrees-processes",
          "partial": "Instantaneous Workload Request Rate Statistics",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-processes/docs/LogicGrowsOnTrees-Parallel-Adapter-Processes.html#v:runInstantaneousWorkloadRequestRateStatistics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estatistics for the instantaneous time needed for workloads to be stolen (using an exponentially decaying weighted average) \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "runInstantaneousWorkloadStealTimeStatistics",
          "package": "LogicGrowsOnTrees-processes",
          "signature": "(FunctionOfTimeStatistics Float)",
          "type": "function"
        },
        "index": {
          "description": "statistics for the instantaneous time needed for workloads to be stolen using an exponentially decaying weighted average",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Processes",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "runInstantaneousWorkloadStealTimeStatistics",
          "package": "LogicGrowsOnTrees-processes",
          "partial": "Instantaneous Workload Steal Time Statistics",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-processes/docs/LogicGrowsOnTrees-Parallel-Adapter-Processes.html#v:runInstantaneousWorkloadStealTimeStatistics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe number of calls made to functions in \u003ca\u003eLogicGrowsOnTrees.Parallel.Common.Supervisor\u003c/a\u003e \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "runNumberOfCalls",
          "package": "LogicGrowsOnTrees-processes",
          "signature": "Int",
          "type": "function"
        },
        "index": {
          "description": "the number of calls made to functions in LogicGrowsOnTrees.Parallel.Common.Supervisor",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Processes",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "runNumberOfCalls",
          "package": "LogicGrowsOnTrees-processes",
          "partial": "Number Of Calls",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-processes/docs/LogicGrowsOnTrees-Parallel-Adapter-Processes.html#v:runNumberOfCalls"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe start time of the run \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "runStartTime",
          "package": "LogicGrowsOnTrees-processes",
          "signature": "UTCTime",
          "type": "function"
        },
        "index": {
          "description": "the start time of the run",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Processes",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "runStartTime",
          "package": "LogicGrowsOnTrees-processes",
          "partial": "Start Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-processes/docs/LogicGrowsOnTrees-Parallel-Adapter-Processes.html#v:runStartTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estatistics for the time needed to steal a workload from a worker \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "runStealWaitTimes",
          "package": "LogicGrowsOnTrees-processes",
          "signature": "IndependentMeasurementsStatistics",
          "type": "function"
        },
        "index": {
          "description": "statistics for the time needed to steal workload from worker",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Processes",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "runStealWaitTimes",
          "package": "LogicGrowsOnTrees-processes",
          "partial": "Steal Wait Times",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-processes/docs/LogicGrowsOnTrees-Parallel-Adapter-Processes.html#v:runStealWaitTimes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis runs the supervisor, which will spawn and kill worker processes as\n    needed so that the total number is equal to the number set by the\n    controller.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "runSupervisor",
          "package": "LogicGrowsOnTrees-processes",
          "signature": "ExplorationMode exploration_mode-\u003e String-\u003e [String]-\u003e (Handle -\u003e IO ())-\u003e ProgressFor exploration_mode-\u003e ProcessesControllerMonad exploration_mode ()-\u003e IO (RunOutcomeFor exploration_mode)",
          "type": "function"
        },
        "index": {
          "description": "This runs the supervisor which will spawn and kill worker processes as needed so that the total number is equal to the number set by the controller",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Processes",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "runSupervisor",
          "normalized": "ExplorationMode a-\u003eString-\u003e[String]-\u003e(Handle-\u003eIO())-\u003eProgressFor a-\u003eProcessesControllerMonad a()-\u003eIO(RunOutcomeFor a)",
          "package": "LogicGrowsOnTrees-processes",
          "partial": "Supervisor",
          "signature": "ExplorationMode exploration_mode-\u003eString-\u003e[String]-\u003e(Handle-\u003eIO())-\u003eProgressFor exploration_mode-\u003eProcessesControllerMonad exploration_mode()-\u003eIO(RunOutcomeFor exploration_mode)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-processes/docs/LogicGrowsOnTrees-Parallel-Adapter-Processes.html#v:runSupervisor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe fraction of the time the supervisor spent processing events while inside the \u003ccode\u003eSupervisorMonad\u003c/code\u003e \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "runSupervisorMonadOccupation",
          "package": "LogicGrowsOnTrees-processes",
          "signature": "Float",
          "type": "function"
        },
        "index": {
          "description": "the fraction of the time the supervisor spent processing events while inside the SupervisorMonad",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Processes",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "runSupervisorMonadOccupation",
          "package": "LogicGrowsOnTrees-processes",
          "partial": "Supervisor Monad Occupation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-processes/docs/LogicGrowsOnTrees-Parallel-Adapter-Processes.html#v:runSupervisorMonadOccupation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe fraction of the time the supervisor spent processing events \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "runSupervisorOccupation",
          "package": "LogicGrowsOnTrees-processes",
          "signature": "Float",
          "type": "function"
        },
        "index": {
          "description": "the fraction of the time the supervisor spent processing events",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Processes",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "runSupervisorOccupation",
          "package": "LogicGrowsOnTrees-processes",
          "partial": "Supervisor Occupation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-processes/docs/LogicGrowsOnTrees-Parallel-Adapter-Processes.html#v:runSupervisorOccupation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estatistics for the number of workers waiting for a workload \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "runWaitingWorkerStatistics",
          "package": "LogicGrowsOnTrees-processes",
          "signature": "(FunctionOfTimeStatistics Int)",
          "type": "function"
        },
        "index": {
          "description": "statistics for the number of workers waiting for workload",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Processes",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "runWaitingWorkerStatistics",
          "package": "LogicGrowsOnTrees-processes",
          "partial": "Waiting Worker Statistics",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-processes/docs/LogicGrowsOnTrees-Parallel-Adapter-Processes.html#v:runWaitingWorkerStatistics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe wall time of the run \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "runWallTime",
          "package": "LogicGrowsOnTrees-processes",
          "signature": "NominalDiffTime",
          "type": "function"
        },
        "index": {
          "description": "the wall time of the run",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Processes",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "runWallTime",
          "package": "LogicGrowsOnTrees-processes",
          "partial": "Wall Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-processes/docs/LogicGrowsOnTrees-Parallel-Adapter-Processes.html#v:runWallTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns a loop that continually fetches and reacts to messages from the\n    supervisor until the worker quits.\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "runWorker",
          "package": "LogicGrowsOnTrees-processes",
          "signature": "ExplorationMode exploration_mode-\u003e Purity m n-\u003e TreeT m (ResultFor exploration_mode)-\u003e IO MessageForWorker-\u003e (MessageForSupervisorFor exploration_mode -\u003e IO ())-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Runs loop that continually fetches and reacts to messages from the supervisor until the worker quits",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Processes",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "runWorker",
          "normalized": "ExplorationMode a-\u003ePurity b c-\u003eTreeT b(ResultFor a)-\u003eIO MessageForWorker-\u003e(MessageForSupervisorFor a-\u003eIO())-\u003eIO()",
          "package": "LogicGrowsOnTrees-processes",
          "partial": "Worker",
          "signature": "ExplorationMode exploration_mode-\u003ePurity m n-\u003eTreeT m(ResultFor exploration_mode)-\u003eIO MessageForWorker-\u003e(MessageForSupervisorFor exploration_mode-\u003eIO())-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-processes/docs/LogicGrowsOnTrees-Parallel-Adapter-Processes.html#v:runWorker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estatistics for the number of workers waiting for a workload \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "runWorkerCountStatistics",
          "package": "LogicGrowsOnTrees-processes",
          "signature": "(FunctionOfTimeStatistics Int)",
          "type": "function"
        },
        "index": {
          "description": "statistics for the number of workers waiting for workload",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Processes",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "runWorkerCountStatistics",
          "package": "LogicGrowsOnTrees-processes",
          "partial": "Worker Count Statistics",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-processes/docs/LogicGrowsOnTrees-Parallel-Adapter-Processes.html#v:runWorkerCountStatistics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe fraction of the total time that workers were occupied \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "runWorkerOccupation",
          "package": "LogicGrowsOnTrees-processes",
          "signature": "Float",
          "type": "function"
        },
        "index": {
          "description": "the fraction of the total time that workers were occupied",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Processes",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "runWorkerOccupation",
          "package": "LogicGrowsOnTrees-processes",
          "partial": "Worker Occupation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-processes/docs/LogicGrowsOnTrees-Parallel-Adapter-Processes.html#v:runWorkerOccupation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe same as \u003ccode\u003e\u003ca\u003erunWorker\u003c/a\u003e\u003c/code\u003e, but it lets you provide handles through which the\n    messages will be sent and received. (Note that the reading and writing\n    handles might be the same.)\n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "runWorkerUsingHandles",
          "package": "LogicGrowsOnTrees-processes",
          "signature": "ExplorationMode exploration_mode-\u003e Purity m n-\u003e TreeT m (ResultFor exploration_mode)-\u003e Handle-\u003e Handle-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "The same as runWorker but it lets you provide handles through which the messages will be sent and received Note that the reading and writing handles might be the same",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Processes",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "runWorkerUsingHandles",
          "normalized": "ExplorationMode a-\u003ePurity b c-\u003eTreeT b(ResultFor a)-\u003eHandle-\u003eHandle-\u003eIO()",
          "package": "LogicGrowsOnTrees-processes",
          "partial": "Worker Using Handles",
          "signature": "ExplorationMode exploration_mode-\u003ePurity m n-\u003eTreeT m(ResultFor exploration_mode)-\u003eHandle-\u003eHandle-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-processes/docs/LogicGrowsOnTrees-Parallel-Adapter-Processes.html#v:runWorkerUsingHandles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estatistics for how long it took for workers to obtain a workload \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "runWorkerWaitTimes",
          "package": "LogicGrowsOnTrees-processes",
          "signature": "(FunctionOfTimeStatistics NominalDiffTime)",
          "type": "function"
        },
        "index": {
          "description": "statistics for how long it took for workers to obtain workload",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Processes",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "runWorkerWaitTimes",
          "package": "LogicGrowsOnTrees-processes",
          "partial": "Worker Wait Times",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-processes/docs/LogicGrowsOnTrees-Parallel-Adapter-Processes.html#v:runWorkerWaitTimes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003esetNumberOfWorkersAsync\u003c/a\u003e\u003c/code\u003e, but blocks until the number of workers has been set to the desired value. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "setNumberOfWorkers",
          "package": "LogicGrowsOnTrees-processes",
          "signature": "Word -\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Like setNumberOfWorkersAsync but blocks until the number of workers has been set to the desired value",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Processes",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "setNumberOfWorkers",
          "normalized": "Word-\u003ea()",
          "package": "LogicGrowsOnTrees-processes",
          "partial": "Number Of Workers",
          "signature": "Word-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-processes/docs/LogicGrowsOnTrees-Parallel-Adapter-Processes.html#v:setNumberOfWorkers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequest that the number of workers be set to the given amount, invoking the given callback when this has been done. \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "setNumberOfWorkersAsync",
          "package": "LogicGrowsOnTrees-processes",
          "signature": "Word -\u003e IO () -\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Request that the number of workers be set to the given amount invoking the given callback when this has been done",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Processes",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "setNumberOfWorkersAsync",
          "normalized": "Word-\u003eIO()-\u003ea()",
          "package": "LogicGrowsOnTrees-processes",
          "partial": "Number Of Workers Async",
          "signature": "Word-\u003eIO()-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-processes/docs/LogicGrowsOnTrees-Parallel-Adapter-Processes.html#v:setNumberOfWorkersAsync"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the size of the workload buffer;  for more information, see \u003ccode\u003e\u003ca\u003esetWorkloadBufferSize\u003c/a\u003e\u003c/code\u003e (which links to the \u003ca\u003eLogicGrowsOnTrees.Parallel.Common.Supervisor\u003c/a\u003e module). \n\u003c/p\u003e",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "setWorkloadBufferSize",
          "package": "LogicGrowsOnTrees-processes",
          "signature": "Int -\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Sets the size of the workload buffer for more information see setWorkloadBufferSize which links to the LogicGrowsOnTrees.Parallel.Common.Supervisor module",
          "hierarchy": "LogicGrowsOnTrees Parallel Adapter Processes",
          "module": "LogicGrowsOnTrees.Parallel.Adapter.Processes",
          "name": "setWorkloadBufferSize",
          "normalized": "Int-\u003ea()",
          "package": "LogicGrowsOnTrees-processes",
          "partial": "Workload Buffer Size",
          "signature": "Int-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LogicGrowsOnTrees-processes/docs/LogicGrowsOnTrees-Parallel-Adapter-Processes.html#v:setWorkloadBufferSize"
      }
    }
  ]
]