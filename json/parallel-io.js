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
        "word": "parallel-io"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParallelism combinators with an implicit global thread-pool.\n\u003c/p\u003e\u003cp\u003eThe most basic example of usage is:\n\u003c/p\u003e\u003cpre\u003e main = parallel_ [putStrLn \"Echo\", putStrLn \" in parallel\"] \u003e\u003e stopGlobalPool\n\u003c/pre\u003e\u003cp\u003eMake sure that you compile with \u003ccode\u003e-threaded\u003c/code\u003e and supply \u003ccode\u003e+RTS -N2 -RTS\u003c/code\u003e\n to  the generated Haskell executable, or you won't get any parallelism.\n\u003c/p\u003e\u003cp\u003eIf you plan to allow your worker items to block, then you should read the documentation for \u003ccode\u003e\u003ca\u003eextraWorkerWhileBlocked\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ca\u003eControl.Concurrent.ParallelIO.Local\u003c/a\u003e module provides a more general\n interface which allows explicit passing of pools and control of their size.\n This module is implemented on top of that one by maintaining a shared global thread\n pool with one thread per capability.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.ParallelIO.Global",
          "name": "Global",
          "package": "parallel-io",
          "source": "src/Control-Concurrent-ParallelIO-Global.html",
          "type": "module"
        },
        "index": {
          "description": "Parallelism combinators with an implicit global thread-pool The most basic example of usage is main parallel putStrLn Echo putStrLn in parallel stopGlobalPool Make sure that you compile with threaded and supply RTS N2 RTS to the generated Haskell executable or you won get any parallelism If you plan to allow your worker items to block then you should read the documentation for extraWorkerWhileBlocked The Control.Concurrent.ParallelIO.Local module provides more general interface which allows explicit passing of pools and control of their size This module is implemented on top of that one by maintaining shared global thread pool with one thread per capability",
          "hierarchy": "Control Concurrent ParallelIO Global",
          "module": "Control.Concurrent.ParallelIO.Global",
          "name": "Global",
          "package": "parallel-io",
          "partial": "Global",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/parallel-io/docs/Control-Concurrent-ParallelIO-Global.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap any IO action used from your worker threads that may block with this method:\n it temporarily spawns another worker thread to make up for the loss of the old blocked\n worker.\n\u003c/p\u003e\u003cp\u003eSee also \u003ccode\u003e\u003ca\u003eextraWorkerWhileBlocked\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.ParallelIO.Global",
          "name": "extraWorkerWhileBlocked",
          "package": "parallel-io",
          "signature": "IO a -\u003e IO a",
          "source": "src/Control-Concurrent-ParallelIO-Global.html#extraWorkerWhileBlocked",
          "type": "function"
        },
        "index": {
          "description": "Wrap any IO action used from your worker threads that may block with this method it temporarily spawns another worker thread to make up for the loss of the old blocked worker See also extraWorkerWhileBlocked",
          "hierarchy": "Control Concurrent ParallelIO Global",
          "module": "Control.Concurrent.ParallelIO.Global",
          "name": "extraWorkerWhileBlocked",
          "normalized": "IO a-\u003eIO a",
          "package": "parallel-io",
          "partial": "Worker While Blocked",
          "signature": "IO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel-io/docs/Control-Concurrent-ParallelIO-Global.html#v:extraWorkerWhileBlocked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe global thread pool. Contains as many threads as there are capabilities.\n\u003c/p\u003e\u003cp\u003eUsers of the global pool must call \u003ccode\u003e\u003ca\u003estopGlobalPool\u003c/a\u003e\u003c/code\u003e from the main thread at the end of their program.\n\u003c/p\u003e",
          "module": "Control.Concurrent.ParallelIO.Global",
          "name": "globalPool",
          "package": "parallel-io",
          "signature": "Pool",
          "source": "src/Control-Concurrent-ParallelIO-Global.html#globalPool",
          "type": "function"
        },
        "index": {
          "description": "The global thread pool Contains as many threads as there are capabilities Users of the global pool must call stopGlobalPool from the main thread at the end of their program",
          "hierarchy": "Control Concurrent ParallelIO Global",
          "module": "Control.Concurrent.ParallelIO.Global",
          "name": "globalPool",
          "package": "parallel-io",
          "partial": "Pool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel-io/docs/Control-Concurrent-ParallelIO-Global.html#v:globalPool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInternal method for removing threads from a pool after one of the threads on the pool\n becomes newly unblocked. Unrestricted use of this is unsafe, so we reccomend that you use\n the \u003ccode\u003e\u003ca\u003eextraWorkerWhileBlocked\u003c/a\u003e\u003c/code\u003e function instead if possible.\n\u003c/p\u003e\u003cp\u003eSee also \u003ccode\u003e\u003ca\u003ekillPoolWorkerFor\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.ParallelIO.Global",
          "name": "killPoolWorker",
          "package": "parallel-io",
          "signature": "IO ()",
          "source": "src/Control-Concurrent-ParallelIO-Global.html#killPoolWorker",
          "type": "function"
        },
        "index": {
          "description": "Internal method for removing threads from pool after one of the threads on the pool becomes newly unblocked Unrestricted use of this is unsafe so we reccomend that you use the extraWorkerWhileBlocked function instead if possible See also killPoolWorkerFor",
          "hierarchy": "Control Concurrent ParallelIO Global",
          "module": "Control.Concurrent.ParallelIO.Global",
          "name": "killPoolWorker",
          "normalized": "IO()",
          "package": "parallel-io",
          "partial": "Pool Worker",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel-io/docs/Control-Concurrent-ParallelIO-Global.html#v:killPoolWorker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute the given actions in parallel on the global thread pool,\n returning the results in the same order as the corresponding actions.\n\u003c/p\u003e\u003cp\u003eUsers of the global pool must call \u003ccode\u003e\u003ca\u003estopGlobalPool\u003c/a\u003e\u003c/code\u003e from the main thread at the end of their program.\n\u003c/p\u003e\u003cp\u003eSee also \u003ccode\u003e\u003ca\u003eparallel\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.ParallelIO.Global",
          "name": "parallel",
          "package": "parallel-io",
          "signature": "[IO a] -\u003e IO [a]",
          "source": "src/Control-Concurrent-ParallelIO-Global.html#parallel",
          "type": "function"
        },
        "index": {
          "description": "Execute the given actions in parallel on the global thread pool returning the results in the same order as the corresponding actions Users of the global pool must call stopGlobalPool from the main thread at the end of their program See also parallel",
          "hierarchy": "Control Concurrent ParallelIO Global",
          "module": "Control.Concurrent.ParallelIO.Global",
          "name": "parallel",
          "normalized": "[IO a]-\u003eIO[a]",
          "package": "parallel-io",
          "signature": "[IO a]-\u003eIO[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel-io/docs/Control-Concurrent-ParallelIO-Global.html#v:parallel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute the given actions in parallel on the global thread pool,\n returning the results in the same order as the corresponding actions and reporting exceptions explicitly.\n\u003c/p\u003e\u003cp\u003eUsers of the global pool must call \u003ccode\u003e\u003ca\u003estopGlobalPool\u003c/a\u003e\u003c/code\u003e from the main thread at the end of their program.\n\u003c/p\u003e\u003cp\u003eSee also \u003ccode\u003e\u003ca\u003eparallelE\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.ParallelIO.Global",
          "name": "parallelE",
          "package": "parallel-io",
          "signature": "[IO a] -\u003e IO [Either SomeException a]",
          "source": "src/Control-Concurrent-ParallelIO-Global.html#parallelE",
          "type": "function"
        },
        "index": {
          "description": "Execute the given actions in parallel on the global thread pool returning the results in the same order as the corresponding actions and reporting exceptions explicitly Users of the global pool must call stopGlobalPool from the main thread at the end of their program See also parallelE",
          "hierarchy": "Control Concurrent ParallelIO Global",
          "module": "Control.Concurrent.ParallelIO.Global",
          "name": "parallelE",
          "normalized": "[IO a]-\u003eIO[Either SomeException a]",
          "package": "parallel-io",
          "signature": "[IO a]-\u003eIO[Either SomeException a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel-io/docs/Control-Concurrent-ParallelIO-Global.html#v:parallelE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute the given actions in parallel on the global thread pool, reporting exceptions explicitly.\n\u003c/p\u003e\u003cp\u003eUsers of the global pool must call \u003ccode\u003e\u003ca\u003estopGlobalPool\u003c/a\u003e\u003c/code\u003e from the main thread at the end of their program.\n\u003c/p\u003e\u003cp\u003eSee also \u003ccode\u003e\u003ca\u003eparallelE_\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.ParallelIO.Global",
          "name": "parallelE_",
          "package": "parallel-io",
          "signature": "[IO a] -\u003e IO [Maybe SomeException]",
          "source": "src/Control-Concurrent-ParallelIO-Global.html#parallelE_",
          "type": "function"
        },
        "index": {
          "description": "Execute the given actions in parallel on the global thread pool reporting exceptions explicitly Users of the global pool must call stopGlobalPool from the main thread at the end of their program See also parallelE",
          "hierarchy": "Control Concurrent ParallelIO Global",
          "module": "Control.Concurrent.ParallelIO.Global",
          "name": "parallelE_",
          "normalized": "[IO a]-\u003eIO[Maybe SomeException]",
          "package": "parallel-io",
          "signature": "[IO a]-\u003eIO[Maybe SomeException]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel-io/docs/Control-Concurrent-ParallelIO-Global.html#v:parallelE_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the list of computations in parallel, returning the result of the first\n thread that completes with (Just x), if any.\n\u003c/p\u003e\u003cp\u003eUsers of the global pool must call \u003ccode\u003e\u003ca\u003estopGlobalPool\u003c/a\u003e\u003c/code\u003e from the main thread at the end of their program.\n\u003c/p\u003e\u003cp\u003eSee also \u003ccode\u003e\u003ca\u003eparallelFirst\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.ParallelIO.Global",
          "name": "parallelFirst",
          "package": "parallel-io",
          "signature": "[IO (Maybe a)] -\u003e IO (Maybe a)",
          "source": "src/Control-Concurrent-ParallelIO-Global.html#parallelFirst",
          "type": "function"
        },
        "index": {
          "description": "Run the list of computations in parallel returning the result of the first thread that completes with Just if any Users of the global pool must call stopGlobalPool from the main thread at the end of their program See also parallelFirst",
          "hierarchy": "Control Concurrent ParallelIO Global",
          "module": "Control.Concurrent.ParallelIO.Global",
          "name": "parallelFirst",
          "normalized": "[IO(Maybe a)]-\u003eIO(Maybe a)",
          "package": "parallel-io",
          "partial": "First",
          "signature": "[IO(Maybe a)]-\u003eIO(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel-io/docs/Control-Concurrent-ParallelIO-Global.html#v:parallelFirst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the list of computations in parallel, returning the result of the first\n thread that completes with (Just x), if any, and reporting any exception explicitly.\n\u003c/p\u003e\u003cp\u003eUsers of the global pool must call \u003ccode\u003e\u003ca\u003estopGlobalPool\u003c/a\u003e\u003c/code\u003e from the main thread at the end of their program.\n\u003c/p\u003e\u003cp\u003eSee also \u003ccode\u003e\u003ca\u003eparallelFirstE\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.ParallelIO.Global",
          "name": "parallelFirstE",
          "package": "parallel-io",
          "signature": "[IO (Maybe a)] -\u003e IO (Maybe (Either SomeException a))",
          "source": "src/Control-Concurrent-ParallelIO-Global.html#parallelFirstE",
          "type": "function"
        },
        "index": {
          "description": "Run the list of computations in parallel returning the result of the first thread that completes with Just if any and reporting any exception explicitly Users of the global pool must call stopGlobalPool from the main thread at the end of their program See also parallelFirstE",
          "hierarchy": "Control Concurrent ParallelIO Global",
          "module": "Control.Concurrent.ParallelIO.Global",
          "name": "parallelFirstE",
          "normalized": "[IO(Maybe a)]-\u003eIO(Maybe(Either SomeException a))",
          "package": "parallel-io",
          "partial": "First",
          "signature": "[IO(Maybe a)]-\u003eIO(Maybe(Either SomeException a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel-io/docs/Control-Concurrent-ParallelIO-Global.html#v:parallelFirstE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute the given actions in parallel on the global thread pool,\n returning the results in the approximate order of completion.\n\u003c/p\u003e\u003cp\u003eUsers of the global pool must call \u003ccode\u003e\u003ca\u003estopGlobalPool\u003c/a\u003e\u003c/code\u003e from the main thread at the end of their program.\n\u003c/p\u003e\u003cp\u003eSee also \u003ccode\u003e\u003ca\u003eparallelInterleaved\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.ParallelIO.Global",
          "name": "parallelInterleaved",
          "package": "parallel-io",
          "signature": "[IO a] -\u003e IO [a]",
          "source": "src/Control-Concurrent-ParallelIO-Global.html#parallelInterleaved",
          "type": "function"
        },
        "index": {
          "description": "Execute the given actions in parallel on the global thread pool returning the results in the approximate order of completion Users of the global pool must call stopGlobalPool from the main thread at the end of their program See also parallelInterleaved",
          "hierarchy": "Control Concurrent ParallelIO Global",
          "module": "Control.Concurrent.ParallelIO.Global",
          "name": "parallelInterleaved",
          "normalized": "[IO a]-\u003eIO[a]",
          "package": "parallel-io",
          "partial": "Interleaved",
          "signature": "[IO a]-\u003eIO[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel-io/docs/Control-Concurrent-ParallelIO-Global.html#v:parallelInterleaved"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute the given actions in parallel on the global thread pool,\n returning the results in the approximate order of completion and reporting exceptions explicitly.\n\u003c/p\u003e\u003cp\u003eUsers of the global pool must call \u003ccode\u003e\u003ca\u003estopGlobalPool\u003c/a\u003e\u003c/code\u003e from the main thread at the end of their program.\n\u003c/p\u003e\u003cp\u003eSee also \u003ccode\u003e\u003ca\u003eparallelInterleavedE\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.ParallelIO.Global",
          "name": "parallelInterleavedE",
          "package": "parallel-io",
          "signature": "[IO a] -\u003e IO [Either SomeException a]",
          "source": "src/Control-Concurrent-ParallelIO-Global.html#parallelInterleavedE",
          "type": "function"
        },
        "index": {
          "description": "Execute the given actions in parallel on the global thread pool returning the results in the approximate order of completion and reporting exceptions explicitly Users of the global pool must call stopGlobalPool from the main thread at the end of their program See also parallelInterleavedE",
          "hierarchy": "Control Concurrent ParallelIO Global",
          "module": "Control.Concurrent.ParallelIO.Global",
          "name": "parallelInterleavedE",
          "normalized": "[IO a]-\u003eIO[Either SomeException a]",
          "package": "parallel-io",
          "partial": "Interleaved",
          "signature": "[IO a]-\u003eIO[Either SomeException a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel-io/docs/Control-Concurrent-ParallelIO-Global.html#v:parallelInterleavedE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute the given actions in parallel on the global thread pool.\n\u003c/p\u003e\u003cp\u003eUsers of the global pool must call \u003ccode\u003e\u003ca\u003estopGlobalPool\u003c/a\u003e\u003c/code\u003e from the main thread at the end of their program.\n\u003c/p\u003e\u003cp\u003eSee also \u003ccode\u003e\u003ca\u003eparallel_\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.ParallelIO.Global",
          "name": "parallel_",
          "package": "parallel-io",
          "signature": "[IO a] -\u003e IO ()",
          "source": "src/Control-Concurrent-ParallelIO-Global.html#parallel_",
          "type": "function"
        },
        "index": {
          "description": "Execute the given actions in parallel on the global thread pool Users of the global pool must call stopGlobalPool from the main thread at the end of their program See also parallel",
          "hierarchy": "Control Concurrent ParallelIO Global",
          "module": "Control.Concurrent.ParallelIO.Global",
          "name": "parallel_",
          "normalized": "[IO a]-\u003eIO()",
          "package": "parallel-io",
          "signature": "[IO a]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel-io/docs/Control-Concurrent-ParallelIO-Global.html#v:parallel_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInternal method for adding extra unblocked threads to a pool if one of the current\n worker threads is going to be temporarily blocked. Unrestricted use of this is unsafe,\n so we reccomend that you use the \u003ccode\u003e\u003ca\u003eextraWorkerWhileBlocked\u003c/a\u003e\u003c/code\u003e function instead if possible.\n\u003c/p\u003e\u003cp\u003eSee also \u003ccode\u003e\u003ca\u003espawnPoolWorkerFor\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.ParallelIO.Global",
          "name": "spawnPoolWorker",
          "package": "parallel-io",
          "signature": "IO ()",
          "source": "src/Control-Concurrent-ParallelIO-Global.html#spawnPoolWorker",
          "type": "function"
        },
        "index": {
          "description": "Internal method for adding extra unblocked threads to pool if one of the current worker threads is going to be temporarily blocked Unrestricted use of this is unsafe so we reccomend that you use the extraWorkerWhileBlocked function instead if possible See also spawnPoolWorkerFor",
          "hierarchy": "Control Concurrent ParallelIO Global",
          "module": "Control.Concurrent.ParallelIO.Global",
          "name": "spawnPoolWorker",
          "normalized": "IO()",
          "package": "parallel-io",
          "partial": "Pool Worker",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel-io/docs/Control-Concurrent-ParallelIO-Global.html#v:spawnPoolWorker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIn order to reliably make use of the global parallelism combinators,\n you must invoke this function after all calls to those combinators have\n finished. A good choice might be at the end of \u003ccode\u003emain\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSee also \u003ccode\u003e\u003ca\u003estopPool\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.ParallelIO.Global",
          "name": "stopGlobalPool",
          "package": "parallel-io",
          "signature": "IO ()",
          "source": "src/Control-Concurrent-ParallelIO-Global.html#stopGlobalPool",
          "type": "function"
        },
        "index": {
          "description": "In order to reliably make use of the global parallelism combinators you must invoke this function after all calls to those combinators have finished good choice might be at the end of main See also stopPool",
          "hierarchy": "Control Concurrent ParallelIO Global",
          "module": "Control.Concurrent.ParallelIO.Global",
          "name": "stopGlobalPool",
          "normalized": "IO()",
          "package": "parallel-io",
          "partial": "Global Pool",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel-io/docs/Control-Concurrent-ParallelIO-Global.html#v:stopGlobalPool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParallelism combinators with explicit thread-pool creation and\n passing.\n\u003c/p\u003e\u003cp\u003eThe most basic example of usage is:\n\u003c/p\u003e\u003cpre\u003e main = withPool 2 $ \\pool -\u003e parallel_ pool [putStrLn \"Echo\", putStrLn \" in parallel\"]\n\u003c/pre\u003e\u003cp\u003eMake sure that you compile with \u003ccode\u003e-threaded\u003c/code\u003e and supply \u003ccode\u003e+RTS -N2 -RTS\u003c/code\u003e\n to  the generated Haskell executable, or you won't get any parallelism.\n\u003c/p\u003e\u003cp\u003eIf you plan to allow your worker items to block, then you should read the documentation for \u003ccode\u003e\u003ca\u003eextraWorkerWhileBlocked\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ca\u003eControl.Concurrent.ParallelIO.Global\u003c/a\u003e module is implemented\n on top of this one by maintaining a shared global thread pool\n with one thread per capability.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.ParallelIO.Local",
          "name": "Local",
          "package": "parallel-io",
          "source": "src/Control-Concurrent-ParallelIO-Local.html",
          "type": "module"
        },
        "index": {
          "description": "Parallelism combinators with explicit thread-pool creation and passing The most basic example of usage is main withPool pool parallel pool putStrLn Echo putStrLn in parallel Make sure that you compile with threaded and supply RTS N2 RTS to the generated Haskell executable or you won get any parallelism If you plan to allow your worker items to block then you should read the documentation for extraWorkerWhileBlocked The Control.Concurrent.ParallelIO.Global module is implemented on top of this one by maintaining shared global thread pool with one thread per capability",
          "hierarchy": "Control Concurrent ParallelIO Local",
          "module": "Control.Concurrent.ParallelIO.Local",
          "name": "Local",
          "package": "parallel-io",
          "partial": "Local",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/parallel-io/docs/Control-Concurrent-ParallelIO-Local.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA thread pool, containing a maximum number of threads. The best way to\n construct one of these is using \u003ccode\u003e\u003ca\u003ewithPool\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.ParallelIO.Local",
          "name": "Pool",
          "package": "parallel-io",
          "source": "src/Control-Concurrent-ParallelIO-Local.html#Pool",
          "type": "data"
        },
        "index": {
          "description": "thread pool containing maximum number of threads The best way to construct one of these is using withPool",
          "hierarchy": "Control Concurrent ParallelIO Local",
          "module": "Control.Concurrent.ParallelIO.Local",
          "name": "Pool",
          "package": "parallel-io",
          "partial": "Pool",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/parallel-io/docs/Control-Concurrent-ParallelIO-Local.html#t:Pool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYou should wrap any IO action used from your worker threads that may block with this method.\n It temporarily spawns another worker thread to make up for the loss of the old blocked\n worker.\n\u003c/p\u003e\u003cp\u003eThis is particularly important if the unblocking is dependent on worker threads actually doing\n work. If you have this situation, and you don't use this method to wrap blocking actions, then\n you may get a deadlock if all your worker threads get blocked on work that they assume will be\n done by other worker threads.\n\u003c/p\u003e\u003cp\u003eAn example where something goes wrong if you don't use this to wrap blocking actions is the following example:\n\u003c/p\u003e\u003cpre\u003e newEmptyMVar \u003e\u003e= \\mvar -\u003e parallel_ pool [readMVar mvar, putMVar mvar ()]\n\u003c/pre\u003e\u003cp\u003eIf we only have one thread, we will sometimes get a schedule where the \u003ccode\u003e\u003ca\u003ereadMVar\u003c/a\u003e\u003c/code\u003e action is run\n before the \u003ccode\u003e\u003ca\u003eputMVar\u003c/a\u003e\u003c/code\u003e. Unless we wrap the read with \u003ccode\u003e\u003ca\u003eextraWorkerWhileBlocked\u003c/a\u003e\u003c/code\u003e, if the pool has a\n single thread our program to deadlock, because the worker will become blocked and no other thread\n will be available to execute the \u003ccode\u003e\u003ca\u003eputMVar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe correct code is:\n\u003c/p\u003e\u003cpre\u003e newEmptyMVar \u003e\u003e= \\mvar -\u003e parallel_ pool [extraWorkerWhileBlocked pool (readMVar mvar), putMVar mvar ()]\n\u003c/pre\u003e",
          "module": "Control.Concurrent.ParallelIO.Local",
          "name": "extraWorkerWhileBlocked",
          "package": "parallel-io",
          "signature": "Pool -\u003e IO a -\u003e IO a",
          "source": "src/Control-Concurrent-ParallelIO-Local.html#extraWorkerWhileBlocked",
          "type": "function"
        },
        "index": {
          "description": "You should wrap any IO action used from your worker threads that may block with this method It temporarily spawns another worker thread to make up for the loss of the old blocked worker This is particularly important if the unblocking is dependent on worker threads actually doing work If you have this situation and you don use this method to wrap blocking actions then you may get deadlock if all your worker threads get blocked on work that they assume will be done by other worker threads An example where something goes wrong if you don use this to wrap blocking actions is the following example newEmptyMVar mvar parallel pool readMVar mvar putMVar mvar If we only have one thread we will sometimes get schedule where the readMVar action is run before the putMVar Unless we wrap the read with extraWorkerWhileBlocked if the pool has single thread our program to deadlock because the worker will become blocked and no other thread will be available to execute the putMVar The correct code is newEmptyMVar mvar parallel pool extraWorkerWhileBlocked pool readMVar mvar putMVar mvar",
          "hierarchy": "Control Concurrent ParallelIO Local",
          "module": "Control.Concurrent.ParallelIO.Local",
          "name": "extraWorkerWhileBlocked",
          "normalized": "Pool-\u003eIO a-\u003eIO a",
          "package": "parallel-io",
          "partial": "Worker While Blocked",
          "signature": "Pool-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel-io/docs/Control-Concurrent-ParallelIO-Local.html#v:extraWorkerWhileBlocked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInternal method for removing threads from a pool after one of the threads on the pool\n becomes newly unblocked. Unrestricted use of this is unsafe, so we reccomend that you use\n the \u003ccode\u003e\u003ca\u003eextraWorkerWhileBlocked\u003c/a\u003e\u003c/code\u003e function instead if possible.\n\u003c/p\u003e",
          "module": "Control.Concurrent.ParallelIO.Local",
          "name": "killPoolWorkerFor",
          "package": "parallel-io",
          "signature": "Pool -\u003e IO ()",
          "source": "src/Control-Concurrent-ParallelIO-Local.html#killPoolWorkerFor",
          "type": "function"
        },
        "index": {
          "description": "Internal method for removing threads from pool after one of the threads on the pool becomes newly unblocked Unrestricted use of this is unsafe so we reccomend that you use the extraWorkerWhileBlocked function instead if possible",
          "hierarchy": "Control Concurrent ParallelIO Local",
          "module": "Control.Concurrent.ParallelIO.Local",
          "name": "killPoolWorkerFor",
          "normalized": "Pool-\u003eIO()",
          "package": "parallel-io",
          "partial": "Pool Worker For",
          "signature": "Pool-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel-io/docs/Control-Concurrent-ParallelIO-Local.html#v:killPoolWorkerFor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the list of computations in parallel, returning the results in the\n same order as the corresponding actions.\n\u003c/p\u003e\u003cp\u003eHas the following properties:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e Never creates more or less unblocked threads than are specified to\n     live in the pool. NB: this count includes the thread executing \u003ccode\u003e\u003ca\u003eparallel\u003c/a\u003e\u003c/code\u003e.\n     This should minimize contention and hence pre-emption, while also preventing\n     starvation.\n\u003c/li\u003e\u003cli\u003e On return all actions have been performed.\n\u003c/li\u003e\u003cli\u003e The function returns in a timely manner as soon as all actions have\n     been performed.\n\u003c/li\u003e\u003cli\u003e The above properties are true even if \u003ccode\u003e\u003ca\u003eparallel\u003c/a\u003e\u003c/code\u003e is used by an\n     action which is itself being executed by one of the parallel combinators.\n\u003c/li\u003e\u003cli\u003e If any of the IO actions throws an exception this does not prevent any of the\n     other actions from being performed.\n\u003c/li\u003e\u003cli\u003e If any of the IO actions throws an exception, the exception thrown by the first\n     failing action in the input list will be thrown by \u003ccode\u003e\u003ca\u003eparallel\u003c/a\u003e\u003c/code\u003e. Importantly, at the\n     time the exception is thrown there is no guarantee that the other parallel actions\n     have completed.\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eThe motivation for this choice is that waiting for the all threads to either return\n     or throw before throwing the first exception will almost always cause GHC to show the\n     \u003ca\u003eBlocked indefinitely in MVar operation\u003c/a\u003e exception rather than the exception you care about.\n\u003c/p\u003e\u003cp\u003eThe reason for this behaviour can be seen by considering this machine state:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e The main thread has used the parallel combinators to spawn two threads, thread 1 and thread 2.\n          It is blocked on both of them waiting for them to return either a result or an exception via an MVar.\n\u003c/li\u003e\u003cli\u003e Thread 1 and thread 2 share another (empty) MVar, the \u003ca\u003ewait handle\u003c/a\u003e. Thread 2 is waiting on the handle,\n          while thread 2 will eventually put into the handle.\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eConsider what happens when thread 1 is buggy and throws an exception before putting into the handle. Now\n     thread 2 is blocked indefinitely, and so the main thread is also blocked indefinetly waiting for the result\n     of thread 2. GHC has no choice but to throw the uninformative exception. However, what we really wanted to\n     see was the original exception thrown in thread 1!\n\u003c/p\u003e\u003cp\u003eBy having the main thread abandon its wait for the results of the spawned threads as soon as the first exception\n     comes in, we give this exception a chance to actually be displayed.\n\u003c/p\u003e",
          "module": "Control.Concurrent.ParallelIO.Local",
          "name": "parallel",
          "package": "parallel-io",
          "signature": "Pool -\u003e [IO a] -\u003e IO [a]",
          "source": "src/Control-Concurrent-ParallelIO-Local.html#parallel",
          "type": "function"
        },
        "index": {
          "description": "Run the list of computations in parallel returning the results in the same order as the corresponding actions Has the following properties Never creates more or less unblocked threads than are specified to live in the pool NB this count includes the thread executing parallel This should minimize contention and hence pre-emption while also preventing starvation On return all actions have been performed The function returns in timely manner as soon as all actions have been performed The above properties are true even if parallel is used by an action which is itself being executed by one of the parallel combinators If any of the IO actions throws an exception this does not prevent any of the other actions from being performed If any of the IO actions throws an exception the exception thrown by the first failing action in the input list will be thrown by parallel Importantly at the time the exception is thrown there is no guarantee that the other parallel actions have completed The motivation for this choice is that waiting for the all threads to either return or throw before throwing the first exception will almost always cause GHC to show the Blocked indefinitely in MVar operation exception rather than the exception you care about The reason for this behaviour can be seen by considering this machine state The main thread has used the parallel combinators to spawn two threads thread and thread It is blocked on both of them waiting for them to return either result or an exception via an MVar Thread and thread share another empty MVar the wait handle Thread is waiting on the handle while thread will eventually put into the handle Consider what happens when thread is buggy and throws an exception before putting into the handle Now thread is blocked indefinitely and so the main thread is also blocked indefinetly waiting for the result of thread GHC has no choice but to throw the uninformative exception However what we really wanted to see was the original exception thrown in thread By having the main thread abandon its wait for the results of the spawned threads as soon as the first exception comes in we give this exception chance to actually be displayed",
          "hierarchy": "Control Concurrent ParallelIO Local",
          "module": "Control.Concurrent.ParallelIO.Local",
          "name": "parallel",
          "normalized": "Pool-\u003e[IO a]-\u003eIO[a]",
          "package": "parallel-io",
          "signature": "Pool-\u003e[IO a]-\u003eIO[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel-io/docs/Control-Concurrent-ParallelIO-Local.html#v:parallel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs \u003ccode\u003e\u003ca\u003eparallel\u003c/a\u003e\u003c/code\u003e, but instead of throwing exceptions that are thrown by subcomputations,\n they are returned in a data structure.\n\u003c/p\u003e\u003cp\u003eAs a result, property 6 of \u003ccode\u003e\u003ca\u003eparallel\u003c/a\u003e\u003c/code\u003e is not preserved, and therefore if your IO actions can depend on each other\n and may throw exceptions your program may die with \u003ca\u003eblocked indefinitely\u003c/a\u003e exceptions rather than informative messages.\n\u003c/p\u003e",
          "module": "Control.Concurrent.ParallelIO.Local",
          "name": "parallelE",
          "package": "parallel-io",
          "signature": "Pool -\u003e [IO a] -\u003e IO [Either SomeException a]",
          "source": "src/Control-Concurrent-ParallelIO-Local.html#parallelE",
          "type": "function"
        },
        "index": {
          "description": "As parallel but instead of throwing exceptions that are thrown by subcomputations they are returned in data structure As result property of parallel is not preserved and therefore if your IO actions can depend on each other and may throw exceptions your program may die with blocked indefinitely exceptions rather than informative messages",
          "hierarchy": "Control Concurrent ParallelIO Local",
          "module": "Control.Concurrent.ParallelIO.Local",
          "name": "parallelE",
          "normalized": "Pool-\u003e[IO a]-\u003eIO[Either SomeException a]",
          "package": "parallel-io",
          "signature": "Pool-\u003e[IO a]-\u003eIO[Either SomeException a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel-io/docs/Control-Concurrent-ParallelIO-Local.html#v:parallelE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs \u003ccode\u003e\u003ca\u003eparallel_\u003c/a\u003e\u003c/code\u003e, but instead of throwing exceptions that are thrown by subcomputations,\n they are returned in a data structure.\n\u003c/p\u003e\u003cp\u003eAs a result, property 6 of \u003ccode\u003e\u003ca\u003eparallel_\u003c/a\u003e\u003c/code\u003e is not preserved, and therefore if your IO actions can depend on each other\n and may throw exceptions your program may die with \u003ca\u003eblocked indefinitely\u003c/a\u003e exceptions rather than informative messages.\n\u003c/p\u003e",
          "module": "Control.Concurrent.ParallelIO.Local",
          "name": "parallelE_",
          "package": "parallel-io",
          "signature": "Pool -\u003e [IO a] -\u003e IO [Maybe SomeException]",
          "source": "src/Control-Concurrent-ParallelIO-Local.html#parallelE_",
          "type": "function"
        },
        "index": {
          "description": "As parallel but instead of throwing exceptions that are thrown by subcomputations they are returned in data structure As result property of parallel is not preserved and therefore if your IO actions can depend on each other and may throw exceptions your program may die with blocked indefinitely exceptions rather than informative messages",
          "hierarchy": "Control Concurrent ParallelIO Local",
          "module": "Control.Concurrent.ParallelIO.Local",
          "name": "parallelE_",
          "normalized": "Pool-\u003e[IO a]-\u003eIO[Maybe SomeException]",
          "package": "parallel-io",
          "signature": "Pool-\u003e[IO a]-\u003eIO[Maybe SomeException]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel-io/docs/Control-Concurrent-ParallelIO-Local.html#v:parallelE_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the list of computations in parallel, returning the result of the first\n thread that completes with (Just x), if any\n\u003c/p\u003e\u003cp\u003eHas the following properties:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e Never creates more or less unblocked threads than are specified to\n     live in the pool. NB: this count includes the thread executing \u003ccode\u003e\u003ca\u003eparallelInterleaved\u003c/a\u003e\u003c/code\u003e.\n     This should minimize contention and hence pre-emption, while also preventing\n     starvation.\n\u003c/li\u003e\u003cli\u003e On return all actions have either been performed or cancelled (with ThreadKilled exceptions).\n\u003c/li\u003e\u003cli\u003e The above properties are true even if \u003ccode\u003e\u003ca\u003eparallelFirst\u003c/a\u003e\u003c/code\u003e is used by an\n     action which is itself being executed by one of the parallel combinators.\n\u003c/li\u003e\u003cli\u003e If any of the IO actions throws an exception, the exception thrown by the first\n     throwing action in the input list will be thrown by \u003ccode\u003e\u003ca\u003eparallelFirst\u003c/a\u003e\u003c/code\u003e. Importantly, at the\n     time the exception is thrown there is no guarantee that the other parallel actions\n     have been completed or cancelled.\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eThe motivation for this choice is that waiting for the all threads to either return\n     or throw before throwing the first exception will almost always cause GHC to show the\n     \u003ca\u003eBlocked indefinitely in MVar operation\u003c/a\u003e exception rather than the exception you care about.\n\u003c/p\u003e\u003cp\u003eThe reason for this behaviour can be seen by considering this machine state:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e The main thread has used the parallel combinators to spawn two threads, thread 1 and thread 2.\n          It is blocked on both of them waiting for them to return either a result or an exception via an MVar.\n\u003c/li\u003e\u003cli\u003e Thread 1 and thread 2 share another (empty) MVar, the \u003ca\u003ewait handle\u003c/a\u003e. Thread 2 is waiting on the handle,\n          while thread 1 will eventually put into the handle.\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eConsider what happens when thread 1 is buggy and throws an exception before putting into the handle. Now\n     thread 2 is blocked indefinitely, and so the main thread is also blocked indefinetly waiting for the result\n     of thread 2. GHC has no choice but to throw the uninformative exception. However, what we really wanted to\n     see was the original exception thrown in thread 1!\n\u003c/p\u003e\u003cp\u003eBy having the main thread abandon its wait for the results of the spawned threads as soon as the first exception\n     comes in, we give this exception a chance to actually be displayed.\n\u003c/p\u003e",
          "module": "Control.Concurrent.ParallelIO.Local",
          "name": "parallelFirst",
          "package": "parallel-io",
          "signature": "Pool -\u003e [IO (Maybe a)] -\u003e IO (Maybe a)",
          "source": "src/Control-Concurrent-ParallelIO-Local.html#parallelFirst",
          "type": "function"
        },
        "index": {
          "description": "Run the list of computations in parallel returning the result of the first thread that completes with Just if any Has the following properties Never creates more or less unblocked threads than are specified to live in the pool NB this count includes the thread executing parallelInterleaved This should minimize contention and hence pre-emption while also preventing starvation On return all actions have either been performed or cancelled with ThreadKilled exceptions The above properties are true even if parallelFirst is used by an action which is itself being executed by one of the parallel combinators If any of the IO actions throws an exception the exception thrown by the first throwing action in the input list will be thrown by parallelFirst Importantly at the time the exception is thrown there is no guarantee that the other parallel actions have been completed or cancelled The motivation for this choice is that waiting for the all threads to either return or throw before throwing the first exception will almost always cause GHC to show the Blocked indefinitely in MVar operation exception rather than the exception you care about The reason for this behaviour can be seen by considering this machine state The main thread has used the parallel combinators to spawn two threads thread and thread It is blocked on both of them waiting for them to return either result or an exception via an MVar Thread and thread share another empty MVar the wait handle Thread is waiting on the handle while thread will eventually put into the handle Consider what happens when thread is buggy and throws an exception before putting into the handle Now thread is blocked indefinitely and so the main thread is also blocked indefinetly waiting for the result of thread GHC has no choice but to throw the uninformative exception However what we really wanted to see was the original exception thrown in thread By having the main thread abandon its wait for the results of the spawned threads as soon as the first exception comes in we give this exception chance to actually be displayed",
          "hierarchy": "Control Concurrent ParallelIO Local",
          "module": "Control.Concurrent.ParallelIO.Local",
          "name": "parallelFirst",
          "normalized": "Pool-\u003e[IO(Maybe a)]-\u003eIO(Maybe a)",
          "package": "parallel-io",
          "partial": "First",
          "signature": "Pool-\u003e[IO(Maybe a)]-\u003eIO(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel-io/docs/Control-Concurrent-ParallelIO-Local.html#v:parallelFirst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs \u003ccode\u003e\u003ca\u003eparallelFirst\u003c/a\u003e\u003c/code\u003e, but instead of throwing exceptions that are thrown by subcomputations,\n they are returned in a data structure.\n\u003c/p\u003e\u003cp\u003eAs a result, property 4 of \u003ccode\u003e\u003ca\u003eparallelFirst\u003c/a\u003e\u003c/code\u003e is not preserved, and therefore if your IO actions can depend on each other\n and may throw exceptions your program may die with \u003ca\u003eblocked indefinitely\u003c/a\u003e exceptions rather than informative messages.\n\u003c/p\u003e",
          "module": "Control.Concurrent.ParallelIO.Local",
          "name": "parallelFirstE",
          "package": "parallel-io",
          "signature": "Pool -\u003e [IO (Maybe a)] -\u003e IO (Maybe (Either SomeException a))",
          "source": "src/Control-Concurrent-ParallelIO-Local.html#parallelFirstE",
          "type": "function"
        },
        "index": {
          "description": "As parallelFirst but instead of throwing exceptions that are thrown by subcomputations they are returned in data structure As result property of parallelFirst is not preserved and therefore if your IO actions can depend on each other and may throw exceptions your program may die with blocked indefinitely exceptions rather than informative messages",
          "hierarchy": "Control Concurrent ParallelIO Local",
          "module": "Control.Concurrent.ParallelIO.Local",
          "name": "parallelFirstE",
          "normalized": "Pool-\u003e[IO(Maybe a)]-\u003eIO(Maybe(Either SomeException a))",
          "package": "parallel-io",
          "partial": "First",
          "signature": "Pool-\u003e[IO(Maybe a)]-\u003eIO(Maybe(Either SomeException a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel-io/docs/Control-Concurrent-ParallelIO-Local.html#v:parallelFirstE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the list of computations in parallel, returning the results in the\n approximate order of completion.\n\u003c/p\u003e\u003cp\u003eHas the following properties:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e Never creates more or less unblocked threads than are specified to\n     live in the pool. NB: this count includes the thread executing \u003ccode\u003e\u003ca\u003eparallelInterleaved\u003c/a\u003e\u003c/code\u003e.\n     This should minimize contention and hence pre-emption, while also preventing\n     starvation.\n\u003c/li\u003e\u003cli\u003e On return all actions have been performed.\n\u003c/li\u003e\u003cli\u003e The result of running actions appear in the list in undefined order, but which\n     is likely to be very similar to the order of completion.\n\u003c/li\u003e\u003cli\u003e The above properties are true even if \u003ccode\u003e\u003ca\u003eparallelInterleaved\u003c/a\u003e\u003c/code\u003e is used by an\n     action which is itself being executed by one of the parallel combinators.\n\u003c/li\u003e\u003cli\u003e If any of the IO actions throws an exception this does not prevent any of the\n     other actions from being performed.\n\u003c/li\u003e\u003cli\u003e If any of the IO actions throws an exception, the exception thrown by the first\n     failing action in the input list will be thrown by \u003ccode\u003e\u003ca\u003eparallelInterleaved\u003c/a\u003e\u003c/code\u003e. Importantly, at the\n     time the exception is thrown there is no guarantee that the other parallel actions\n     have completed.\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eThe motivation for this choice is that waiting for the all threads to either return\n     or throw before throwing the first exception will almost always cause GHC to show the\n     \u003ca\u003eBlocked indefinitely in MVar operation\u003c/a\u003e exception rather than the exception you care about.\n\u003c/p\u003e\u003cp\u003eThe reason for this behaviour can be seen by considering this machine state:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e The main thread has used the parallel combinators to spawn two threads, thread 1 and thread 2.\n          It is blocked on both of them waiting for them to return either a result or an exception via an MVar.\n\u003c/li\u003e\u003cli\u003e Thread 1 and thread 2 share another (empty) MVar, the \u003ca\u003ewait handle\u003c/a\u003e. Thread 2 is waiting on the handle,\n          while thread 1 will eventually put into the handle.\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eConsider what happens when thread 1 is buggy and throws an exception before putting into the handle. Now\n     thread 2 is blocked indefinitely, and so the main thread is also blocked indefinetly waiting for the result\n     of thread 2. GHC has no choice but to throw the uninformative exception. However, what we really wanted to\n     see was the original exception thrown in thread 1!\n\u003c/p\u003e\u003cp\u003eBy having the main thread abandon its wait for the results of the spawned threads as soon as the first exception\n     comes in, we give this exception a chance to actually be displayed.\n\u003c/p\u003e",
          "module": "Control.Concurrent.ParallelIO.Local",
          "name": "parallelInterleaved",
          "package": "parallel-io",
          "signature": "Pool -\u003e [IO a] -\u003e IO [a]",
          "source": "src/Control-Concurrent-ParallelIO-Local.html#parallelInterleaved",
          "type": "function"
        },
        "index": {
          "description": "Run the list of computations in parallel returning the results in the approximate order of completion Has the following properties Never creates more or less unblocked threads than are specified to live in the pool NB this count includes the thread executing parallelInterleaved This should minimize contention and hence pre-emption while also preventing starvation On return all actions have been performed The result of running actions appear in the list in undefined order but which is likely to be very similar to the order of completion The above properties are true even if parallelInterleaved is used by an action which is itself being executed by one of the parallel combinators If any of the IO actions throws an exception this does not prevent any of the other actions from being performed If any of the IO actions throws an exception the exception thrown by the first failing action in the input list will be thrown by parallelInterleaved Importantly at the time the exception is thrown there is no guarantee that the other parallel actions have completed The motivation for this choice is that waiting for the all threads to either return or throw before throwing the first exception will almost always cause GHC to show the Blocked indefinitely in MVar operation exception rather than the exception you care about The reason for this behaviour can be seen by considering this machine state The main thread has used the parallel combinators to spawn two threads thread and thread It is blocked on both of them waiting for them to return either result or an exception via an MVar Thread and thread share another empty MVar the wait handle Thread is waiting on the handle while thread will eventually put into the handle Consider what happens when thread is buggy and throws an exception before putting into the handle Now thread is blocked indefinitely and so the main thread is also blocked indefinetly waiting for the result of thread GHC has no choice but to throw the uninformative exception However what we really wanted to see was the original exception thrown in thread By having the main thread abandon its wait for the results of the spawned threads as soon as the first exception comes in we give this exception chance to actually be displayed",
          "hierarchy": "Control Concurrent ParallelIO Local",
          "module": "Control.Concurrent.ParallelIO.Local",
          "name": "parallelInterleaved",
          "normalized": "Pool-\u003e[IO a]-\u003eIO[a]",
          "package": "parallel-io",
          "partial": "Interleaved",
          "signature": "Pool-\u003e[IO a]-\u003eIO[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel-io/docs/Control-Concurrent-ParallelIO-Local.html#v:parallelInterleaved"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs \u003ccode\u003e\u003ca\u003eparallelInterleaved\u003c/a\u003e\u003c/code\u003e, but instead of throwing exceptions that are thrown by subcomputations,\n they are returned in a data structure.\n\u003c/p\u003e\u003cp\u003eAs a result, property 6 of \u003ccode\u003e\u003ca\u003eparallelInterleaved\u003c/a\u003e\u003c/code\u003e is not preserved, and therefore if your IO actions can depend on each other\n and may throw exceptions your program may die with \u003ca\u003eblocked indefinitely\u003c/a\u003e exceptions rather than informative messages.\n\u003c/p\u003e",
          "module": "Control.Concurrent.ParallelIO.Local",
          "name": "parallelInterleavedE",
          "package": "parallel-io",
          "signature": "Pool -\u003e [IO a] -\u003e IO [Either SomeException a]",
          "source": "src/Control-Concurrent-ParallelIO-Local.html#parallelInterleavedE",
          "type": "function"
        },
        "index": {
          "description": "As parallelInterleaved but instead of throwing exceptions that are thrown by subcomputations they are returned in data structure As result property of parallelInterleaved is not preserved and therefore if your IO actions can depend on each other and may throw exceptions your program may die with blocked indefinitely exceptions rather than informative messages",
          "hierarchy": "Control Concurrent ParallelIO Local",
          "module": "Control.Concurrent.ParallelIO.Local",
          "name": "parallelInterleavedE",
          "normalized": "Pool-\u003e[IO a]-\u003eIO[Either SomeException a]",
          "package": "parallel-io",
          "partial": "Interleaved",
          "signature": "Pool-\u003e[IO a]-\u003eIO[Either SomeException a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel-io/docs/Control-Concurrent-ParallelIO-Local.html#v:parallelInterleavedE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the list of computations in parallel.\n\u003c/p\u003e\u003cp\u003eHas the following properties:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e Never creates more or less unblocked threads than are specified to\n     live in the pool. NB: this count includes the thread executing \u003ccode\u003e\u003ca\u003eparallel_\u003c/a\u003e\u003c/code\u003e.\n     This should minimize contention and hence pre-emption, while also preventing\n     starvation.\n\u003c/li\u003e\u003cli\u003e On return all actions have been performed.\n\u003c/li\u003e\u003cli\u003e The function returns in a timely manner as soon as all actions have\n     been performed.\n\u003c/li\u003e\u003cli\u003e The above properties are true even if \u003ccode\u003e\u003ca\u003eparallel_\u003c/a\u003e\u003c/code\u003e is used by an\n     action which is itself being executed by one of the parallel combinators.\n\u003c/li\u003e\u003cli\u003e If any of the IO actions throws an exception this does not prevent any of the\n     other actions from being performed.\n\u003c/li\u003e\u003cli\u003e If any of the IO actions throws an exception, the exception thrown by the first\n     failing action in the input list will be thrown by \u003ccode\u003e\u003ca\u003eparallel_\u003c/a\u003e\u003c/code\u003e. Importantly, at the\n     time the exception is thrown there is no guarantee that the other parallel actions\n     have completed.\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eThe motivation for this choice is that waiting for the all threads to either return\n     or throw before throwing the first exception will almost always cause GHC to show the\n     \u003ca\u003eBlocked indefinitely in MVar operation\u003c/a\u003e exception rather than the exception you care about.\n\u003c/p\u003e\u003cp\u003eThe reason for this behaviour can be seen by considering this machine state:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e The main thread has used the parallel combinators to spawn two threads, thread 1 and thread 2.\n          It is blocked on both of them waiting for them to return either a result or an exception via an MVar.\n\u003c/li\u003e\u003cli\u003e Thread 1 and thread 2 share another (empty) MVar, the \u003ca\u003ewait handle\u003c/a\u003e. Thread 2 is waiting on the handle,\n          while thread 2 will eventually put into the handle.\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eConsider what happens when thread 1 is buggy and throws an exception before putting into the handle. Now\n     thread 2 is blocked indefinitely, and so the main thread is also blocked indefinetly waiting for the result\n     of thread 2. GHC has no choice but to throw the uninformative exception. However, what we really wanted to\n     see was the original exception thrown in thread 1!\n\u003c/p\u003e\u003cp\u003eBy having the main thread abandon its wait for the results of the spawned threads as soon as the first exception\n     comes in, we give this exception a chance to actually be displayed.\n\u003c/p\u003e",
          "module": "Control.Concurrent.ParallelIO.Local",
          "name": "parallel_",
          "package": "parallel-io",
          "signature": "Pool -\u003e [IO a] -\u003e IO ()",
          "source": "src/Control-Concurrent-ParallelIO-Local.html#parallel_",
          "type": "function"
        },
        "index": {
          "description": "Run the list of computations in parallel Has the following properties Never creates more or less unblocked threads than are specified to live in the pool NB this count includes the thread executing parallel This should minimize contention and hence pre-emption while also preventing starvation On return all actions have been performed The function returns in timely manner as soon as all actions have been performed The above properties are true even if parallel is used by an action which is itself being executed by one of the parallel combinators If any of the IO actions throws an exception this does not prevent any of the other actions from being performed If any of the IO actions throws an exception the exception thrown by the first failing action in the input list will be thrown by parallel Importantly at the time the exception is thrown there is no guarantee that the other parallel actions have completed The motivation for this choice is that waiting for the all threads to either return or throw before throwing the first exception will almost always cause GHC to show the Blocked indefinitely in MVar operation exception rather than the exception you care about The reason for this behaviour can be seen by considering this machine state The main thread has used the parallel combinators to spawn two threads thread and thread It is blocked on both of them waiting for them to return either result or an exception via an MVar Thread and thread share another empty MVar the wait handle Thread is waiting on the handle while thread will eventually put into the handle Consider what happens when thread is buggy and throws an exception before putting into the handle Now thread is blocked indefinitely and so the main thread is also blocked indefinetly waiting for the result of thread GHC has no choice but to throw the uninformative exception However what we really wanted to see was the original exception thrown in thread By having the main thread abandon its wait for the results of the spawned threads as soon as the first exception comes in we give this exception chance to actually be displayed",
          "hierarchy": "Control Concurrent ParallelIO Local",
          "module": "Control.Concurrent.ParallelIO.Local",
          "name": "parallel_",
          "normalized": "Pool-\u003e[IO a]-\u003eIO()",
          "package": "parallel-io",
          "signature": "Pool-\u003e[IO a]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel-io/docs/Control-Concurrent-ParallelIO-Local.html#v:parallel_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInternal method for adding extra unblocked threads to a pool if one of the current\n worker threads is going to be temporarily blocked. Unrestricted use of this is unsafe,\n so we recommend that you use the \u003ccode\u003e\u003ca\u003eextraWorkerWhileBlocked\u003c/a\u003e\u003c/code\u003e function instead if possible.\n\u003c/p\u003e",
          "module": "Control.Concurrent.ParallelIO.Local",
          "name": "spawnPoolWorkerFor",
          "package": "parallel-io",
          "signature": "Pool -\u003e IO ()",
          "source": "src/Control-Concurrent-ParallelIO-Local.html#spawnPoolWorkerFor",
          "type": "function"
        },
        "index": {
          "description": "Internal method for adding extra unblocked threads to pool if one of the current worker threads is going to be temporarily blocked Unrestricted use of this is unsafe so we recommend that you use the extraWorkerWhileBlocked function instead if possible",
          "hierarchy": "Control Concurrent ParallelIO Local",
          "module": "Control.Concurrent.ParallelIO.Local",
          "name": "spawnPoolWorkerFor",
          "normalized": "Pool-\u003eIO()",
          "package": "parallel-io",
          "partial": "Pool Worker For",
          "signature": "Pool-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel-io/docs/Control-Concurrent-ParallelIO-Local.html#v:spawnPoolWorkerFor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA slightly unsafe way to construct a pool. Make a pool from the maximum\n number of threads you wish it to execute (including the main thread\n in the count).\n\u003c/p\u003e\u003cp\u003eIf you use this variant then ensure that you insert a call to \u003ccode\u003e\u003ca\u003estopPool\u003c/a\u003e\u003c/code\u003e\n somewhere in your program after all users of that pool have finished.\n\u003c/p\u003e\u003cp\u003eA better alternative is to see if you can use the \u003ccode\u003e\u003ca\u003ewithPool\u003c/a\u003e\u003c/code\u003e variant.\n\u003c/p\u003e",
          "module": "Control.Concurrent.ParallelIO.Local",
          "name": "startPool",
          "package": "parallel-io",
          "signature": "Int -\u003e IO Pool",
          "source": "src/Control-Concurrent-ParallelIO-Local.html#startPool",
          "type": "function"
        },
        "index": {
          "description": "slightly unsafe way to construct pool Make pool from the maximum number of threads you wish it to execute including the main thread in the count If you use this variant then ensure that you insert call to stopPool somewhere in your program after all users of that pool have finished better alternative is to see if you can use the withPool variant",
          "hierarchy": "Control Concurrent ParallelIO Local",
          "module": "Control.Concurrent.ParallelIO.Local",
          "name": "startPool",
          "normalized": "Int-\u003eIO Pool",
          "package": "parallel-io",
          "partial": "Pool",
          "signature": "Int-\u003eIO Pool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel-io/docs/Control-Concurrent-ParallelIO-Local.html#v:startPool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClean up a thread pool. If you don't call this from the main thread then no one holds the queue,\n the queue gets GC'd, the threads find themselves blocked indefinitely, and you get exceptions.\n\u003c/p\u003e\u003cp\u003eThis cleanly shuts down the threads so the queue isn't important and you don't get\n exceptions.\n\u003c/p\u003e\u003cp\u003eOnly call this \u003cem\u003eafter\u003c/em\u003e all users of the pool have completed, or your program may\n block indefinitely.\n\u003c/p\u003e",
          "module": "Control.Concurrent.ParallelIO.Local",
          "name": "stopPool",
          "package": "parallel-io",
          "signature": "Pool -\u003e IO ()",
          "source": "src/Control-Concurrent-ParallelIO-Local.html#stopPool",
          "type": "function"
        },
        "index": {
          "description": "Clean up thread pool If you don call this from the main thread then no one holds the queue the queue gets GC the threads find themselves blocked indefinitely and you get exceptions This cleanly shuts down the threads so the queue isn important and you don get exceptions Only call this after all users of the pool have completed or your program may block indefinitely",
          "hierarchy": "Control Concurrent ParallelIO Local",
          "module": "Control.Concurrent.ParallelIO.Local",
          "name": "stopPool",
          "normalized": "Pool-\u003eIO()",
          "package": "parallel-io",
          "partial": "Pool",
          "signature": "Pool-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel-io/docs/Control-Concurrent-ParallelIO-Local.html#v:stopPool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA safe wrapper around \u003ccode\u003e\u003ca\u003estartPool\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003estopPool\u003c/a\u003e\u003c/code\u003e. Executes an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action using a newly-created\n pool with the specified number of threads and cleans it up at the end.\n\u003c/p\u003e",
          "module": "Control.Concurrent.ParallelIO.Local",
          "name": "withPool",
          "package": "parallel-io",
          "signature": "Int -\u003e (Pool -\u003e IO a) -\u003e IO a",
          "source": "src/Control-Concurrent-ParallelIO-Local.html#withPool",
          "type": "function"
        },
        "index": {
          "description": "safe wrapper around startPool and stopPool Executes an IO action using newly-created pool with the specified number of threads and cleans it up at the end",
          "hierarchy": "Control Concurrent ParallelIO Local",
          "module": "Control.Concurrent.ParallelIO.Local",
          "name": "withPool",
          "normalized": "Int-\u003e(Pool-\u003eIO a)-\u003eIO a",
          "package": "parallel-io",
          "partial": "Pool",
          "signature": "Int-\u003e(Pool-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel-io/docs/Control-Concurrent-ParallelIO-Local.html#v:withPool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCombinators for executing IO actions in parallel on a thread pool.\n\u003c/p\u003e\u003cp\u003eThis module just reexports \u003ca\u003eControl.Concurrent.ParallelIO.Global\u003c/a\u003e: this contains versions of\n the combinators that make use of a single global thread pool with as many threads as there are\n capabilities.\n\u003c/p\u003e\u003cp\u003eFor finer-grained control, you can use \u003ca\u003eControl.Concurrent.ParallelIO.Local\u003c/a\u003e instead, which\n gives you control over the creation of the pool.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.ParallelIO",
          "name": "ParallelIO",
          "package": "parallel-io",
          "source": "src/Control-Concurrent-ParallelIO.html",
          "type": "module"
        },
        "index": {
          "description": "Combinators for executing IO actions in parallel on thread pool This module just reexports Control.Concurrent.ParallelIO.Global this contains versions of the combinators that make use of single global thread pool with as many threads as there are capabilities For finer-grained control you can use Control.Concurrent.ParallelIO.Local instead which gives you control over the creation of the pool",
          "hierarchy": "Control Concurrent ParallelIO",
          "module": "Control.Concurrent.ParallelIO",
          "name": "ParallelIO",
          "package": "parallel-io",
          "partial": "Parallel IO",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/parallel-io/docs/Control-Concurrent-ParallelIO.html#"
      }
    }
  ]
]