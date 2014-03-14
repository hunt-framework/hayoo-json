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
        "word": "parallel-tasks"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule with the internal workhorse for the library, \u003ccode\u003e\u003ca\u003eparallelTasks\u003c/a\u003e\u003c/code\u003e.  You only\n need to use this module if you want to alter \u003ccode\u003e\u003ca\u003eExtendedParTaskOpts\u003c/a\u003e\u003c/code\u003e, which allows\n you to redirect the logging output or store information about task timing.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.ParallelTasks.Base",
          "name": "Base",
          "package": "parallel-tasks",
          "source": "src/Control-Concurrent-ParallelTasks-Base.html",
          "type": "module"
        },
        "index": {
          "description": "Module with the internal workhorse for the library parallelTasks You only need to use this module if you want to alter ExtendedParTaskOpts which allows you to redirect the logging output or store information about task timing",
          "hierarchy": "Control Concurrent ParallelTasks Base",
          "module": "Control.Concurrent.ParallelTasks.Base",
          "name": "Base",
          "package": "parallel-tasks",
          "partial": "Base",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/parallel-tasks/docs/Control-Concurrent-ParallelTasks-Base.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdvanced options controlling the behaviour of parallel tasks.  The \u003ccode\u003em\u003c/code\u003e parameter\n is the monad that the tasks execute in, the \u003ccode\u003ea\u003c/code\u003e parameter is the output value of the\n tasks, and the \u003ccode\u003eb\u003c/code\u003e parameter is the type that is stored in the results array.  It is\n common that either \u003ccode\u003eb = a\u003c/code\u003e or \u003ccode\u003eb = Maybe a\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.ParallelTasks.Base",
          "name": "ExtendedParTaskOpts",
          "package": "parallel-tasks",
          "source": "src/Control-Concurrent-ParallelTasks-Base.html#ExtendedParTaskOpts",
          "type": "data"
        },
        "index": {
          "description": "Advanced options controlling the behaviour of parallel tasks The parameter is the monad that the tasks execute in the parameter is the output value of the tasks and the parameter is the type that is stored in the results array It is common that either or Maybe",
          "hierarchy": "Control Concurrent ParallelTasks Base",
          "module": "Control.Concurrent.ParallelTasks.Base",
          "name": "ExtendedParTaskOpts",
          "package": "parallel-tasks",
          "partial": "Extended Par Task Opts",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/parallel-tasks/docs/Control-Concurrent-ParallelTasks-Base.html#t:ExtendedParTaskOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptions controlling the general running of parallel tasks.  The \u003ccode\u003em\u003c/code\u003e parameter is the monad (which must be an instance\n of \u003ccode\u003e\u003ca\u003eMonadIO\u003c/a\u003e\u003c/code\u003e) in which the tasks will be run, and the \u003ccode\u003ea\u003c/code\u003e parameter is the return value of the tasks.\n\u003c/p\u003e",
          "module": "Control.Concurrent.ParallelTasks.Base",
          "name": "ParTaskOpts",
          "package": "parallel-tasks",
          "source": "src/Control-Concurrent-ParallelTasks-Base.html#ParTaskOpts",
          "type": "data"
        },
        "index": {
          "description": "Options controlling the general running of parallel tasks The parameter is the monad which must be an instance of MonadIO in which the tasks will be run and the parameter is the return value of the tasks",
          "hierarchy": "Control Concurrent ParallelTasks Base",
          "module": "Control.Concurrent.ParallelTasks.Base",
          "name": "ParTaskOpts",
          "package": "parallel-tasks",
          "partial": "Par Task Opts",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/parallel-tasks/docs/Control-Concurrent-ParallelTasks-Base.html#t:ParTaskOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.ParallelTasks.Base",
          "name": "SimpleParTaskOpts",
          "package": "parallel-tasks",
          "source": "src/Control-Concurrent-ParallelTasks-Base.html#SimpleParTaskOpts",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Concurrent ParallelTasks Base",
          "module": "Control.Concurrent.ParallelTasks.Base",
          "name": "SimpleParTaskOpts",
          "package": "parallel-tasks",
          "partial": "Simple Par Task Opts",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/parallel-tasks/docs/Control-Concurrent-ParallelTasks-Base.html#t:SimpleParTaskOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValue indicating whether a task successfully completed, or was killed off for taking too long\n\u003c/p\u003e",
          "module": "Control.Concurrent.ParallelTasks.Base",
          "name": "TaskOutcome",
          "package": "parallel-tasks",
          "source": "src/Control-Concurrent-ParallelTasks-Base.html#TaskOutcome",
          "type": "data"
        },
        "index": {
          "description": "Value indicating whether task successfully completed or was killed off for taking too long",
          "hierarchy": "Control Concurrent ParallelTasks Base",
          "module": "Control.Concurrent.ParallelTasks.Base",
          "name": "TaskOutcome",
          "package": "parallel-tasks",
          "partial": "Task Outcome",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/parallel-tasks/docs/Control-Concurrent-ParallelTasks-Base.html#t:TaskOutcome"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.ParallelTasks.Base",
          "name": "ExtendedParTaskOpts",
          "package": "parallel-tasks",
          "signature": "ExtendedParTaskOpts",
          "source": "src/Control-Concurrent-ParallelTasks-Base.html#ExtendedParTaskOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent ParallelTasks Base",
          "module": "Control.Concurrent.ParallelTasks.Base",
          "name": "ExtendedParTaskOpts",
          "package": "parallel-tasks",
          "partial": "Extended Par Task Opts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel-tasks/docs/Control-Concurrent-ParallelTasks-Base.html#v:ExtendedParTaskOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Control.Concurrent.ParallelTasks.Base\",\"Control.Concurrent.ParallelTasks\"]",
          "name": "ParTaskOpts",
          "package": "parallel-tasks",
          "signature": "ParTaskOpts",
          "source": "src/Control-Concurrent-ParallelTasks-Base.html#ParTaskOpts",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parallel-tasks/docs/Control-Concurrent-ParallelTasks-Base.html#v:ParTaskOpts\",\"http://hackage.haskell.org/package/parallel-tasks/docs/Control-Concurrent-ParallelTasks.html#v:ParTaskOpts\"]"
        },
        "index": {
          "hierarchy": "Control Concurrent ParallelTasks Base",
          "module": "Control.Concurrent.ParallelTasks.Base",
          "name": "ParTaskOpts",
          "package": "parallel-tasks",
          "partial": "Par Task Opts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel-tasks/docs/Control-Concurrent-ParallelTasks-Base.html#v:ParTaskOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Control.Concurrent.ParallelTasks.Base\",\"Control.Concurrent.ParallelTasks\"]",
          "name": "SimpleParTaskOpts",
          "package": "parallel-tasks",
          "signature": "SimpleParTaskOpts",
          "source": "src/Control-Concurrent-ParallelTasks-Base.html#SimpleParTaskOpts",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parallel-tasks/docs/Control-Concurrent-ParallelTasks-Base.html#v:SimpleParTaskOpts\",\"http://hackage.haskell.org/package/parallel-tasks/docs/Control-Concurrent-ParallelTasks.html#v:SimpleParTaskOpts\"]"
        },
        "index": {
          "hierarchy": "Control Concurrent ParallelTasks Base",
          "module": "Control.Concurrent.ParallelTasks.Base",
          "name": "SimpleParTaskOpts",
          "package": "parallel-tasks",
          "partial": "Simple Par Task Opts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel-tasks/docs/Control-Concurrent-ParallelTasks-Base.html#v:SimpleParTaskOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.ParallelTasks.Base",
          "name": "Success",
          "package": "parallel-tasks",
          "signature": "Success",
          "source": "src/Control-Concurrent-ParallelTasks-Base.html#TaskOutcome",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent ParallelTasks Base",
          "module": "Control.Concurrent.ParallelTasks.Base",
          "name": "Success",
          "package": "parallel-tasks",
          "partial": "Success",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel-tasks/docs/Control-Concurrent-ParallelTasks-Base.html#v:Success"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.ParallelTasks.Base",
          "name": "TookTooLong",
          "package": "parallel-tasks",
          "signature": "TookTooLong",
          "source": "src/Control-Concurrent-ParallelTasks-Base.html#TaskOutcome",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent ParallelTasks Base",
          "module": "Control.Concurrent.ParallelTasks.Base",
          "name": "TookTooLong",
          "package": "parallel-tasks",
          "partial": "Took Too Long",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel-tasks/docs/Control-Concurrent-ParallelTasks-Base.html#v:TookTooLong"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction used to store the outcome of the task.  Arguments are (in order):\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Time that the task took to complete (in seconds)\n\u003c/li\u003e\u003cli\u003e Index at which to store the result (same as index of the task in the original tasks list)\n\u003c/li\u003e\u003cli\u003e The outcome of the task\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eIf a String is returned, it is logged\n\u003c/p\u003e",
          "module": "Control.Concurrent.ParallelTasks.Base",
          "name": "afterFinish",
          "package": "parallel-tasks",
          "signature": "Double -\u003e Int -\u003e TaskOutcome -\u003e IO (Maybe String)",
          "source": "src/Control-Concurrent-ParallelTasks-Base.html#ExtendedParTaskOpts",
          "type": "function"
        },
        "index": {
          "description": "Function used to store the outcome of the task Arguments are in order Time that the task took to complete in seconds Index at which to store the result same as index of the task in the original tasks list The outcome of the task If String is returned it is logged",
          "hierarchy": "Control Concurrent ParallelTasks Base",
          "module": "Control.Concurrent.ParallelTasks.Base",
          "name": "afterFinish",
          "normalized": "Double-\u003eInt-\u003eTaskOutcome-\u003eIO(Maybe String)",
          "package": "parallel-tasks",
          "partial": "Finish",
          "signature": "Double-\u003eInt-\u003eTaskOutcome-\u003eIO(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel-tasks/docs/Control-Concurrent-ParallelTasks-Base.html#v:afterFinish"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCore options\n\u003c/p\u003e",
          "module": "Control.Concurrent.ParallelTasks.Base",
          "name": "coreOpts",
          "package": "parallel-tasks",
          "signature": "ParTaskOpts m a",
          "source": "src/Control-Concurrent-ParallelTasks-Base.html#ExtendedParTaskOpts",
          "type": "function"
        },
        "index": {
          "description": "Core options",
          "hierarchy": "Control Concurrent ParallelTasks Base",
          "module": "Control.Concurrent.ParallelTasks.Base",
          "name": "coreOpts",
          "package": "parallel-tasks",
          "partial": "Opts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel-tasks/docs/Control-Concurrent-ParallelTasks-Base.html#v:coreOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault extended options.  Prints messages to stderr, and writes a message when a\n task is killed\n\u003c/p\u003e",
          "module": "Control.Concurrent.ParallelTasks.Base",
          "name": "defaultExtendedParTaskOpts",
          "package": "parallel-tasks",
          "signature": "ParTaskOpts m a -\u003e ExtendedParTaskOpts m a",
          "source": "src/Control-Concurrent-ParallelTasks-Base.html#defaultExtendedParTaskOpts",
          "type": "function"
        },
        "index": {
          "description": "Default extended options Prints messages to stderr and writes message when task is killed",
          "hierarchy": "Control Concurrent ParallelTasks Base",
          "module": "Control.Concurrent.ParallelTasks.Base",
          "name": "defaultExtendedParTaskOpts",
          "normalized": "ParTaskOpts a b-\u003eExtendedParTaskOpts a b",
          "package": "parallel-tasks",
          "partial": "Extended Par Task Opts",
          "signature": "ParTaskOpts m a-\u003eExtendedParTaskOpts m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel-tasks/docs/Control-Concurrent-ParallelTasks-Base.html#v:defaultExtendedParTaskOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault parallel task options.  The number of workers defaults to the number of capabilities,\n with no time limit, and printing progress every 50 tasks and an estimated time every 200\n\u003c/p\u003e",
          "module": "[\"Control.Concurrent.ParallelTasks.Base\",\"Control.Concurrent.ParallelTasks\"]",
          "name": "defaultParTaskOpts",
          "package": "parallel-tasks",
          "signature": "ParTaskOpts IO a",
          "source": "src/Control-Concurrent-ParallelTasks-Base.html#defaultParTaskOpts",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parallel-tasks/docs/Control-Concurrent-ParallelTasks-Base.html#v:defaultParTaskOpts\",\"http://hackage.haskell.org/package/parallel-tasks/docs/Control-Concurrent-ParallelTasks.html#v:defaultParTaskOpts\"]"
        },
        "index": {
          "description": "Default parallel task options The number of workers defaults to the number of capabilities with no time limit and printing progress every tasks and an estimated time every",
          "hierarchy": "Control Concurrent ParallelTasks Base",
          "module": "Control.Concurrent.ParallelTasks.Base",
          "name": "defaultParTaskOpts",
          "package": "parallel-tasks",
          "partial": "Par Task Opts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel-tasks/docs/Control-Concurrent-ParallelTasks-Base.html#v:defaultParTaskOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of worker threads to use.  When this is Nothing, defaults to number of capabilities (see \u003ccode\u003enumCapabilities\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "[\"Control.Concurrent.ParallelTasks.Base\",\"Control.Concurrent.ParallelTasks\"]",
          "name": "numberWorkers",
          "package": "parallel-tasks",
          "signature": "Maybe Int",
          "source": "src/Control-Concurrent-ParallelTasks-Base.html#SimpleParTaskOpts",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parallel-tasks/docs/Control-Concurrent-ParallelTasks-Base.html#v:numberWorkers\",\"http://hackage.haskell.org/package/parallel-tasks/docs/Control-Concurrent-ParallelTasks.html#v:numberWorkers\"]"
        },
        "index": {
          "description": "Number of worker threads to use When this is Nothing defaults to number of capabilities see numCapabilities",
          "hierarchy": "Control Concurrent ParallelTasks Base",
          "module": "Control.Concurrent.ParallelTasks.Base",
          "name": "numberWorkers",
          "package": "parallel-tasks",
          "partial": "Workers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel-tasks/docs/Control-Concurrent-ParallelTasks-Base.html#v:numberWorkers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns the given set of computations in parallel, and once they are all finished, returns their results.\n Note that they won't all be run in parallel from the start; rather, a set of\n workers will be spawned that work their way through the (potentially large) set of jobs.\n\u003c/p\u003e",
          "module": "Control.Concurrent.ParallelTasks.Base",
          "name": "parallelTasks",
          "package": "parallel-tasks",
          "signature": "ExtendedParTaskOpts m a -\u003e [m a] -\u003e m (IOVector a)",
          "source": "src/Control-Concurrent-ParallelTasks-Base.html#parallelTasks",
          "type": "function"
        },
        "index": {
          "description": "Runs the given set of computations in parallel and once they are all finished returns their results Note that they won all be run in parallel from the start rather set of workers will be spawned that work their way through the potentially large set of jobs",
          "hierarchy": "Control Concurrent ParallelTasks Base",
          "module": "Control.Concurrent.ParallelTasks.Base",
          "name": "parallelTasks",
          "normalized": "ExtendedParTaskOpts a b-\u003e[a b]-\u003ea(IOVector b)",
          "package": "parallel-tasks",
          "partial": "Tasks",
          "signature": "ExtendedParTaskOpts m a-\u003e[m a]-\u003em(IOVector a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel-tasks/docs/Control-Concurrent-ParallelTasks-Base.html#v:parallelTasks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow often to print an estimate of the estimated completion time.  E.g. when Just 100,\n print an estimate after the completion of every 100 tasks.\n\u003c/p\u003e",
          "module": "[\"Control.Concurrent.ParallelTasks.Base\",\"Control.Concurrent.ParallelTasks\"]",
          "name": "printEstimate",
          "package": "parallel-tasks",
          "signature": "Maybe Int",
          "source": "src/Control-Concurrent-ParallelTasks-Base.html#SimpleParTaskOpts",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parallel-tasks/docs/Control-Concurrent-ParallelTasks-Base.html#v:printEstimate\",\"http://hackage.haskell.org/package/parallel-tasks/docs/Control-Concurrent-ParallelTasks.html#v:printEstimate\"]"
        },
        "index": {
          "description": "How often to print an estimate of the estimated completion time E.g when Just print an estimate after the completion of every tasks",
          "hierarchy": "Control Concurrent ParallelTasks Base",
          "module": "Control.Concurrent.ParallelTasks.Base",
          "name": "printEstimate",
          "package": "parallel-tasks",
          "partial": "Estimate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel-tasks/docs/Control-Concurrent-ParallelTasks-Base.html#v:printEstimate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow often to print the progress of the tasks.  E.g. when Just 100, print a message roughly\n after the completion of every 100 tasks.\n\u003c/p\u003e",
          "module": "[\"Control.Concurrent.ParallelTasks.Base\",\"Control.Concurrent.ParallelTasks\"]",
          "name": "printProgress",
          "package": "parallel-tasks",
          "signature": "Maybe Int",
          "source": "src/Control-Concurrent-ParallelTasks-Base.html#SimpleParTaskOpts",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parallel-tasks/docs/Control-Concurrent-ParallelTasks-Base.html#v:printProgress\",\"http://hackage.haskell.org/package/parallel-tasks/docs/Control-Concurrent-ParallelTasks.html#v:printProgress\"]"
        },
        "index": {
          "description": "How often to print the progress of the tasks E.g when Just print message roughly after the completion of every tasks",
          "hierarchy": "Control Concurrent ParallelTasks Base",
          "module": "Control.Concurrent.ParallelTasks.Base",
          "name": "printProgress",
          "package": "parallel-tasks",
          "partial": "Progress",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel-tasks/docs/Control-Concurrent-ParallelTasks-Base.html#v:printProgress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction that supplies a handle to an inner block to write messages to.\n To use stdout or stderr, you can just supply \u003ccode\u003e($ stdout)\u003c/code\u003e.  To write to a file,\n use \u003ccode\u003ewithFile \"blah\" WriteMode\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.ParallelTasks.Base",
          "name": "printTo",
          "package": "parallel-tasks",
          "signature": "forall r.  (Handle -\u003e IO r) -\u003e IO r",
          "source": "src/Control-Concurrent-ParallelTasks-Base.html#ExtendedParTaskOpts",
          "type": "function"
        },
        "index": {
          "description": "Function that supplies handle to an inner block to write messages to To use stdout or stderr you can just supply stdout To write to file use withFile blah WriteMode",
          "hierarchy": "Control Concurrent ParallelTasks Base",
          "module": "Control.Concurrent.ParallelTasks.Base",
          "name": "printTo",
          "normalized": "a b(Handle-\u003eIO c)-\u003eIO c",
          "package": "parallel-tasks",
          "partial": "To",
          "signature": "forall r.(Handle-\u003eIO r)-\u003eIO r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel-tasks/docs/Control-Concurrent-ParallelTasks-Base.html#v:printTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe simple options.\n\u003c/p\u003e",
          "module": "[\"Control.Concurrent.ParallelTasks.Base\",\"Control.Concurrent.ParallelTasks\"]",
          "name": "simpleOpts",
          "package": "parallel-tasks",
          "signature": "SimpleParTaskOpts",
          "source": "src/Control-Concurrent-ParallelTasks-Base.html#ParTaskOpts",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parallel-tasks/docs/Control-Concurrent-ParallelTasks-Base.html#v:simpleOpts\",\"http://hackage.haskell.org/package/parallel-tasks/docs/Control-Concurrent-ParallelTasks.html#v:simpleOpts\"]"
        },
        "index": {
          "description": "The simple options",
          "hierarchy": "Control Concurrent ParallelTasks Base",
          "module": "Control.Concurrent.ParallelTasks.Base",
          "name": "simpleOpts",
          "package": "parallel-tasks",
          "partial": "Opts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel-tasks/docs/Control-Concurrent-ParallelTasks-Base.html#v:simpleOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen Just, the number of microseconds to let each task run for, before assuming it will\n not complete, and killing it off.  In the case that the task is killed off, the second\n part of the pair is the value that will be stored in the vector.\n\u003c/p\u003e",
          "module": "[\"Control.Concurrent.ParallelTasks.Base\",\"Control.Concurrent.ParallelTasks\"]",
          "name": "timeLimit",
          "package": "parallel-tasks",
          "signature": "Maybe (Integer, a)",
          "source": "src/Control-Concurrent-ParallelTasks-Base.html#ParTaskOpts",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parallel-tasks/docs/Control-Concurrent-ParallelTasks-Base.html#v:timeLimit\",\"http://hackage.haskell.org/package/parallel-tasks/docs/Control-Concurrent-ParallelTasks.html#v:timeLimit\"]"
        },
        "index": {
          "description": "When Just the number of microseconds to let each task run for before assuming it will not complete and killing it off In the case that the task is killed off the second part of the pair is the value that will be stored in the vector",
          "hierarchy": "Control Concurrent ParallelTasks Base",
          "module": "Control.Concurrent.ParallelTasks.Base",
          "name": "timeLimit",
          "normalized": "Maybe(Integer,a)",
          "package": "parallel-tasks",
          "partial": "Limit",
          "signature": "Maybe(Integer,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel-tasks/docs/Control-Concurrent-ParallelTasks-Base.html#v:timeLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction to use to run the \u003ccode\u003em\u003c/code\u003e monad on top of IO.  The returned function is run at least once per worker, so should support \n being run multiple times in parallel, and should clean up after itself.  Suitable instance for IO is simply \u003ccode\u003ereturn id\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Control.Concurrent.ParallelTasks.Base\",\"Control.Concurrent.ParallelTasks\"]",
          "name": "wrapWorker",
          "package": "parallel-tasks",
          "signature": "forall r.  m (m r -\u003e IO r)",
          "source": "src/Control-Concurrent-ParallelTasks-Base.html#ParTaskOpts",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parallel-tasks/docs/Control-Concurrent-ParallelTasks-Base.html#v:wrapWorker\",\"http://hackage.haskell.org/package/parallel-tasks/docs/Control-Concurrent-ParallelTasks.html#v:wrapWorker\"]"
        },
        "index": {
          "description": "Function to use to run the monad on top of IO The returned function is run at least once per worker so should support being run multiple times in parallel and should clean up after itself Suitable instance for IO is simply return id",
          "hierarchy": "Control Concurrent ParallelTasks Base",
          "module": "Control.Concurrent.ParallelTasks.Base",
          "name": "wrapWorker",
          "normalized": "a b c(c d-\u003eIO d)",
          "package": "parallel-tasks",
          "partial": "Worker",
          "signature": "forall r. m(m r-\u003eIO r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel-tasks/docs/Control-Concurrent-ParallelTasks-Base.html#v:wrapWorker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module with a function to support caching the output of your parallel tasks.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.ParallelTasks.Cache",
          "name": "Cache",
          "package": "parallel-tasks",
          "source": "src/Control-Concurrent-ParallelTasks-Cache.html",
          "type": "module"
        },
        "index": {
          "description": "module with function to support caching the output of your parallel tasks",
          "hierarchy": "Control Concurrent ParallelTasks Cache",
          "module": "Control.Concurrent.ParallelTasks.Cache",
          "name": "Cache",
          "package": "parallel-tasks",
          "partial": "Cache",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/parallel-tasks/docs/Control-Concurrent-ParallelTasks-Cache.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA function that performs caching (between runs of the same tasks) to help when running the same analysis task\n many times.\n\u003c/p\u003e\u003cp\u003eImagine that you have a program where you want to some map-reduce work.  The mapping takes a long time, but you\n are working on the reduce part.  You don't want to have to redo the mapping every time you run your program;\n you can use this cache functionality to save the results of the mapping between program runs.  Alternatively, you\n may want to analyse only part of your data at first (for speed) then slowly expand to the rest of the data set.\n Caching allows you to re-use the results you have already calculated.\n\u003c/p\u003e\u003cp\u003eThere are three main concepts in the type signature.  \u003ccode\u003einput\u003c/code\u003e is a type containing all the information needed\n to perform the task and produce the output.  This may involve file handles or functions or whatever.  The \u003ccode\u003ekey\u003c/code\u003e\n type is generally smaller, and is the smallest possible unique identifier for a corresponding output.  This might\n be the primary key of a database record, or an input filename.  (Obviously, in some cases, \u003ccode\u003einput = key\u003c/code\u003e; that\n makes life easy).  The \u003ccode\u003eoutput\u003c/code\u003e type is the output of the task.\n\u003c/p\u003e\u003cp\u003eIn order to serialise the cache to a file, both \u003ccode\u003ekey\u003c/code\u003e and \u003ccode\u003eoutput\u003c/code\u003e have to be instances of \u003ccode\u003eSerialize\u003c/code\u003e.  To allow\n efficient unboxing of a vector, we require an \u003ccode\u003eUnbox\u003c/code\u003e instance for \u003ccode\u003ekey\u003c/code\u003e (contact me if you think this is too onerous),\n and to ensure strict reading from the cache we require \u003ccode\u003eNFData\u003c/code\u003e for output.\n\u003c/p\u003e\u003cp\u003eRemember that \u003ccode\u003eparMapCache\u003c/code\u003e doesn't know when your cache is invalid (e.g. because you've altered the processing algorithm\n that you are passing to this function), and will blindly use it if it finds it.  It's your responsibility to remove\n the cache when it becomes invalid. \n\u003c/p\u003e",
          "module": "Control.Concurrent.ParallelTasks.Cache",
          "name": "parMapCache",
          "package": "parallel-tasks",
          "signature": "ParTaskOpts m output-\u003e FilePath-\u003e (input -\u003e key)-\u003e (input -\u003e m output)-\u003e [input]-\u003e m (IOVector output)",
          "type": "function"
        },
        "index": {
          "description": "function that performs caching between runs of the same tasks to help when running the same analysis task many times Imagine that you have program where you want to some map-reduce work The mapping takes long time but you are working on the reduce part You don want to have to redo the mapping every time you run your program you can use this cache functionality to save the results of the mapping between program runs Alternatively you may want to analyse only part of your data at first for speed then slowly expand to the rest of the data set Caching allows you to re-use the results you have already calculated There are three main concepts in the type signature input is type containing all the information needed to perform the task and produce the output This may involve file handles or functions or whatever The key type is generally smaller and is the smallest possible unique identifier for corresponding output This might be the primary key of database record or an input filename Obviously in some cases input key that makes life easy The output type is the output of the task In order to serialise the cache to file both key and output have to be instances of Serialize To allow efficient unboxing of vector we require an Unbox instance for key contact me if you think this is too onerous and to ensure strict reading from the cache we require NFData for output Remember that parMapCache doesn know when your cache is invalid e.g because you ve altered the processing algorithm that you are passing to this function and will blindly use it if it finds it It your responsibility to remove the cache when it becomes invalid",
          "hierarchy": "Control Concurrent ParallelTasks Cache",
          "module": "Control.Concurrent.ParallelTasks.Cache",
          "name": "parMapCache",
          "normalized": "ParTaskOpts a b-\u003eFilePath-\u003e(c-\u003ed)-\u003e(c-\u003ea b)-\u003e[c]-\u003ea(IOVector b)",
          "package": "parallel-tasks",
          "partial": "Map Cache",
          "signature": "ParTaskOpts m output-\u003eFilePath-\u003e(input-\u003ekey)-\u003e(input-\u003em output)-\u003e[input]-\u003em(IOVector output)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel-tasks/docs/Control-Concurrent-ParallelTasks-Cache.html#v:parMapCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe parallel functions in this module all use the same underlying behaviour.  You supply a list\n of tasks that you wish performed, either in the \u003ccode\u003eIO\u003c/code\u003e monad or some other \u003ccode\u003eMonadIO m =\u003e m\u003c/code\u003e monad.\n This library starts up a limited number of threads (by default, one per capability, i.e. one per\n available processor/core) and then executes the given work queue across the threads.  This is better\n than simply starting all the jobs in parallel and waiting, because in the case where you have\n thousands or millions of jobs, but only say 16 cores, you do not want the overheads of switching\n between all those contending threads.\n\u003c/p\u003e\u003cp\u003eThe default behaviour of these functions is to put useful progress reports onto stderr while\n it is running (number of tasks completed, estimate of final completion time).\n The library is aimed at millions of jobs taking several hours to complete; hence built-in output\n is very useful for you, while you wait.  You can customise this behaviour by using the primed\n version of each of these functions and supplying a customised options record.\n\u003c/p\u003e\u003cp\u003eThe only difference between the functions \u003ccode\u003eparallelList\u003c/code\u003e, \u003ccode\u003eparallelVec\u003c/code\u003e and \u003ccode\u003eparallelIOVec\u003c/code\u003e is the type of the results returned.  The \n closest to the underlying behaviour is \u003ccode\u003eparallelIOVec'\u003c/code\u003e; the other functions are simply convenience wrappers that freeze/convert\n the IOVector into a Vector or list.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: make sure you compile your program with the \u003ccode\u003e-threaded -with-rtsopts=-N\u003c/code\u003e options (e.g. in the ghc-options field in your\n cabal file), or else you will not get any parallel execution in your program!\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.ParallelTasks",
          "name": "ParallelTasks",
          "package": "parallel-tasks",
          "source": "src/Control-Concurrent-ParallelTasks.html",
          "type": "module"
        },
        "index": {
          "description": "The parallel functions in this module all use the same underlying behaviour You supply list of tasks that you wish performed either in the IO monad or some other MonadIO monad This library starts up limited number of threads by default one per capability i.e one per available processor core and then executes the given work queue across the threads This is better than simply starting all the jobs in parallel and waiting because in the case where you have thousands or millions of jobs but only say cores you do not want the overheads of switching between all those contending threads The default behaviour of these functions is to put useful progress reports onto stderr while it is running number of tasks completed estimate of final completion time The library is aimed at millions of jobs taking several hours to complete hence built-in output is very useful for you while you wait You can customise this behaviour by using the primed version of each of these functions and supplying customised options record The only difference between the functions parallelList parallelVec and parallelIOVec is the type of the results returned The closest to the underlying behaviour is parallelIOVec the other functions are simply convenience wrappers that freeze convert the IOVector into Vector or list Note make sure you compile your program with the threaded with-rtsopts options e.g in the ghc-options field in your cabal file or else you will not get any parallel execution in your program",
          "hierarchy": "Control Concurrent ParallelTasks",
          "module": "Control.Concurrent.ParallelTasks",
          "name": "ParallelTasks",
          "package": "parallel-tasks",
          "partial": "Parallel Tasks",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/parallel-tasks/docs/Control-Concurrent-ParallelTasks.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptions controlling the general running of parallel tasks.  The \u003ccode\u003em\u003c/code\u003e parameter is the monad (which must be an instance\n of \u003ccode\u003e\u003ca\u003eMonadIO\u003c/a\u003e\u003c/code\u003e) in which the tasks will be run, and the \u003ccode\u003ea\u003c/code\u003e parameter is the return value of the tasks.\n\u003c/p\u003e",
          "module": "Control.Concurrent.ParallelTasks",
          "name": "ParTaskOpts",
          "package": "parallel-tasks",
          "source": "src/Control-Concurrent-ParallelTasks-Base.html#ParTaskOpts",
          "type": "data"
        },
        "index": {
          "description": "Options controlling the general running of parallel tasks The parameter is the monad which must be an instance of MonadIO in which the tasks will be run and the parameter is the return value of the tasks",
          "hierarchy": "Control Concurrent ParallelTasks",
          "module": "Control.Concurrent.ParallelTasks",
          "name": "ParTaskOpts",
          "package": "parallel-tasks",
          "partial": "Par Task Opts",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/parallel-tasks/docs/Control-Concurrent-ParallelTasks.html#t:ParTaskOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.ParallelTasks",
          "name": "SimpleParTaskOpts",
          "package": "parallel-tasks",
          "source": "src/Control-Concurrent-ParallelTasks-Base.html#SimpleParTaskOpts",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Concurrent ParallelTasks",
          "module": "Control.Concurrent.ParallelTasks",
          "name": "SimpleParTaskOpts",
          "package": "parallel-tasks",
          "partial": "Simple Par Task Opts",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/parallel-tasks/docs/Control-Concurrent-ParallelTasks.html#t:SimpleParTaskOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs \u003ccode\u003e\u003ca\u003eparallelList\u003c/a\u003e\u003c/code\u003e, but returns the results in a mutable IOVector.\n\u003c/p\u003e\u003cp\u003eDefined as \u003ccode\u003eparallelIOVec' defaultParTaskOpts\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Concurrent.ParallelTasks",
          "name": "parallelIOVec",
          "package": "parallel-tasks",
          "signature": "[IO a] -\u003e IO (IOVector a)",
          "source": "src/Control-Concurrent-ParallelTasks.html#parallelIOVec",
          "type": "function"
        },
        "index": {
          "description": "As parallelList but returns the results in mutable IOVector Defined as parallelIOVec defaultParTaskOpts",
          "hierarchy": "Control Concurrent ParallelTasks",
          "module": "Control.Concurrent.ParallelTasks",
          "name": "parallelIOVec",
          "normalized": "[IO a]-\u003eIO(IOVector a)",
          "package": "parallel-tasks",
          "partial": "IOVec",
          "signature": "[IO a]-\u003eIO(IOVector a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel-tasks/docs/Control-Concurrent-ParallelTasks.html#v:parallelIOVec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.ParallelTasks",
          "name": "parallelIOVec'",
          "package": "parallel-tasks",
          "signature": "ParTaskOpts m a -\u003e [m a] -\u003e m (IOVector a)",
          "source": "src/Control-Concurrent-ParallelTasks.html#parallelIOVec%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent ParallelTasks",
          "module": "Control.Concurrent.ParallelTasks",
          "name": "parallelIOVec'",
          "normalized": "ParTaskOpts a b-\u003e[a b]-\u003ea(IOVector b)",
          "package": "parallel-tasks",
          "partial": "IOVec'",
          "signature": "ParTaskOpts m a-\u003e[m a]-\u003em(IOVector a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel-tasks/docs/Control-Concurrent-ParallelTasks.html#v:parallelIOVec-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns the list of tasks in parallel (a few at a time), and returns the results in a list (with the corresponding order to the input list, i.e. the first task produces the first result in the list.)  See the module description for more details.\n\u003c/p\u003e\u003cp\u003eDefined as: \u003ccode\u003eparallelList' defaultParTaskOpts\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Concurrent.ParallelTasks",
          "name": "parallelList",
          "package": "parallel-tasks",
          "signature": "[IO a] -\u003e IO [a]",
          "source": "src/Control-Concurrent-ParallelTasks.html#parallelList",
          "type": "function"
        },
        "index": {
          "description": "Runs the list of tasks in parallel few at time and returns the results in list with the corresponding order to the input list i.e the first task produces the first result in the list See the module description for more details Defined as parallelList defaultParTaskOpts",
          "hierarchy": "Control Concurrent ParallelTasks",
          "module": "Control.Concurrent.ParallelTasks",
          "name": "parallelList",
          "normalized": "[IO a]-\u003eIO[a]",
          "package": "parallel-tasks",
          "partial": "List",
          "signature": "[IO a]-\u003eIO[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel-tasks/docs/Control-Concurrent-ParallelTasks.html#v:parallelList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.ParallelTasks",
          "name": "parallelList'",
          "package": "parallel-tasks",
          "signature": "ParTaskOpts m a -\u003e [m a] -\u003e m [a]",
          "source": "src/Control-Concurrent-ParallelTasks.html#parallelList%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent ParallelTasks",
          "module": "Control.Concurrent.ParallelTasks",
          "name": "parallelList'",
          "normalized": "ParTaskOpts a b-\u003e[a b]-\u003ea[b]",
          "package": "parallel-tasks",
          "partial": "List'",
          "signature": "ParTaskOpts m a-\u003e[m a]-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel-tasks/docs/Control-Concurrent-ParallelTasks.html#v:parallelList-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs \u003ccode\u003e\u003ca\u003eparallelList\u003c/a\u003e\u003c/code\u003e, but returns the results in an immutable Vector.\n\u003c/p\u003e\u003cp\u003eDefined as \u003ccode\u003eparallelVec' defaultParTaskOpts\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Concurrent.ParallelTasks",
          "name": "parallelVec",
          "package": "parallel-tasks",
          "signature": "[IO a] -\u003e IO (Vector a)",
          "source": "src/Control-Concurrent-ParallelTasks.html#parallelVec",
          "type": "function"
        },
        "index": {
          "description": "As parallelList but returns the results in an immutable Vector Defined as parallelVec defaultParTaskOpts",
          "hierarchy": "Control Concurrent ParallelTasks",
          "module": "Control.Concurrent.ParallelTasks",
          "name": "parallelVec",
          "normalized": "[IO a]-\u003eIO(Vector a)",
          "package": "parallel-tasks",
          "partial": "Vec",
          "signature": "[IO a]-\u003eIO(Vector a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel-tasks/docs/Control-Concurrent-ParallelTasks.html#v:parallelVec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.ParallelTasks",
          "name": "parallelVec'",
          "package": "parallel-tasks",
          "signature": "ParTaskOpts m a -\u003e [m a] -\u003e m (Vector a)",
          "source": "src/Control-Concurrent-ParallelTasks.html#parallelVec%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent ParallelTasks",
          "module": "Control.Concurrent.ParallelTasks",
          "name": "parallelVec'",
          "normalized": "ParTaskOpts a b-\u003e[a b]-\u003ea(Vector b)",
          "package": "parallel-tasks",
          "partial": "Vec'",
          "signature": "ParTaskOpts m a-\u003e[m a]-\u003em(Vector a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel-tasks/docs/Control-Concurrent-ParallelTasks.html#v:parallelVec-39-"
      }
    }
  ]
]