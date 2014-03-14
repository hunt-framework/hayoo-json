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
        "word": "threads-pool"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Pool",
          "name": "Pool",
          "package": "threads-pool",
          "source": "src/Control-Concurrent-Pool.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Concurrent Pool",
          "module": "Control.Concurrent.Pool",
          "name": "Pool",
          "package": "threads-pool",
          "partial": "Pool",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/threads-pool/docs/Control-Concurrent-Pool.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis stores all pool-related states\n\u003c/p\u003e",
          "module": "Control.Concurrent.Pool",
          "name": "Pool",
          "package": "threads-pool",
          "source": "src/Control-Concurrent-Pool.html#Pool",
          "type": "data"
        },
        "index": {
          "description": "This stores all pool-related states",
          "hierarchy": "Control Concurrent Pool",
          "module": "Control.Concurrent.Pool",
          "name": "Pool",
          "package": "threads-pool",
          "partial": "Pool",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/threads-pool/docs/Control-Concurrent-Pool.html#t:Pool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAny monadic computation that can be turned to IO\n\u003c/p\u003e",
          "module": "Control.Concurrent.Pool",
          "name": "Task",
          "package": "threads-pool",
          "source": "src/Control-Concurrent-Pool.html#Task",
          "type": "class"
        },
        "index": {
          "description": "Any monadic computation that can be turned to IO",
          "hierarchy": "Control Concurrent Pool",
          "module": "Control.Concurrent.Pool",
          "name": "Task",
          "package": "threads-pool",
          "partial": "Task",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/threads-pool/docs/Control-Concurrent-Pool.html#t:Task"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if pool is waiting for new tasks\n\u003c/p\u003e",
          "module": "Control.Concurrent.Pool",
          "name": "isPoolWaiting",
          "package": "threads-pool",
          "signature": "Pool m a r-\u003e IO Bool",
          "type": "function"
        },
        "index": {
          "description": "Check if pool is waiting for new tasks",
          "hierarchy": "Control Concurrent Pool",
          "module": "Control.Concurrent.Pool",
          "name": "isPoolWaiting",
          "normalized": "Pool a b c-\u003eIO Bool",
          "package": "threads-pool",
          "partial": "Pool Waiting",
          "signature": "Pool m a r-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threads-pool/docs/Control-Concurrent-Pool.html#v:isPoolWaiting"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate new threads pool\n\u003c/p\u003e",
          "module": "Control.Concurrent.Pool",
          "name": "newPool",
          "package": "threads-pool",
          "signature": "Int-\u003e Bool-\u003e m (Pool m a r)",
          "type": "function"
        },
        "index": {
          "description": "Create new threads pool",
          "hierarchy": "Control Concurrent Pool",
          "module": "Control.Concurrent.Pool",
          "name": "newPool",
          "normalized": "Int-\u003eBool-\u003ea(Pool a b c)",
          "package": "threads-pool",
          "partial": "Pool",
          "signature": "Int-\u003eBool-\u003em(Pool m a r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threads-pool/docs/Control-Concurrent-Pool.html#v:newPool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate new threads pool in IO monad\n\u003c/p\u003e",
          "module": "Control.Concurrent.Pool",
          "name": "newPoolIO",
          "package": "threads-pool",
          "signature": "Int-\u003e Bool-\u003e IO (Pool m a r)",
          "type": "function"
        },
        "index": {
          "description": "Create new threads pool in IO monad",
          "hierarchy": "Control Concurrent Pool",
          "module": "Control.Concurrent.Pool",
          "name": "newPoolIO",
          "normalized": "Int-\u003eBool-\u003eIO(Pool a b c)",
          "package": "threads-pool",
          "partial": "Pool IO",
          "signature": "Int-\u003eBool-\u003eIO(Pool m a r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threads-pool/docs/Control-Concurrent-Pool.html#v:newPoolIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTell to the pool that there will no new tasks\n\u003c/p\u003e",
          "module": "Control.Concurrent.Pool",
          "name": "noMoreTasks",
          "package": "threads-pool",
          "signature": "Pool m a r -\u003e m ()",
          "source": "src/Control-Concurrent-Pool.html#noMoreTasks",
          "type": "function"
        },
        "index": {
          "description": "Tell to the pool that there will no new tasks",
          "hierarchy": "Control Concurrent Pool",
          "module": "Control.Concurrent.Pool",
          "name": "noMoreTasks",
          "normalized": "Pool a b c-\u003ea()",
          "package": "threads-pool",
          "partial": "More Tasks",
          "signature": "Pool m a r-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threads-pool/docs/Control-Concurrent-Pool.html#v:noMoreTasks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTell to the pool that there will no new tasks, in IO monad\n\u003c/p\u003e",
          "module": "Control.Concurrent.Pool",
          "name": "noMoreTasksIO",
          "package": "threads-pool",
          "signature": "Pool m a r -\u003e IO ()",
          "source": "src/Control-Concurrent-Pool.html#noMoreTasksIO",
          "type": "function"
        },
        "index": {
          "description": "Tell to the pool that there will no new tasks in IO monad",
          "hierarchy": "Control Concurrent Pool",
          "module": "Control.Concurrent.Pool",
          "name": "noMoreTasksIO",
          "normalized": "Pool a b c-\u003eIO()",
          "package": "threads-pool",
          "partial": "More Tasks IO",
          "signature": "Pool m a r-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threads-pool/docs/Control-Concurrent-Pool.html#v:noMoreTasksIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePut the new task into queue\n\u003c/p\u003e",
          "module": "Control.Concurrent.Pool",
          "name": "queue",
          "package": "threads-pool",
          "signature": "Pool m a r-\u003e m r-\u003e a-\u003e m Integer",
          "type": "function"
        },
        "index": {
          "description": "Put the new task into queue",
          "hierarchy": "Control Concurrent Pool",
          "module": "Control.Concurrent.Pool",
          "name": "queue",
          "normalized": "Pool a b c-\u003ea c-\u003eb-\u003ea Integer",
          "package": "threads-pool",
          "signature": "Pool m a r-\u003em r-\u003ea-\u003em Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threads-pool/docs/Control-Concurrent-Pool.html#v:queue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead next result from the pool.\n This makes sense only if for pool which returns results.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Pool",
          "name": "readResult",
          "package": "threads-pool",
          "signature": "Pool m a r-\u003e m (Integer, r)",
          "type": "function"
        },
        "index": {
          "description": "Read next result from the pool This makes sense only if for pool which returns results",
          "hierarchy": "Control Concurrent Pool",
          "module": "Control.Concurrent.Pool",
          "name": "readResult",
          "normalized": "Pool a b c-\u003ea(Integer,c)",
          "package": "threads-pool",
          "partial": "Result",
          "signature": "Pool m a r-\u003em(Integer,r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threads-pool/docs/Control-Concurrent-Pool.html#v:readResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead all results from pool and run given computation with each.\n Probably you will run this in the separate thread (using forkIO).\n This makes sense only if for pool which returns results.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Pool",
          "name": "resultsReader",
          "package": "threads-pool",
          "signature": "Pool m a r -\u003e (Integer -\u003e r -\u003e IO b) -\u003e IO ()",
          "source": "src/Control-Concurrent-Pool.html#resultsReader",
          "type": "function"
        },
        "index": {
          "description": "Read all results from pool and run given computation with each Probably you will run this in the separate thread using forkIO This makes sense only if for pool which returns results",
          "hierarchy": "Control Concurrent Pool",
          "module": "Control.Concurrent.Pool",
          "name": "resultsReader",
          "normalized": "Pool a b c-\u003e(Integer-\u003ec-\u003eIO d)-\u003eIO()",
          "package": "threads-pool",
          "partial": "Reader",
          "signature": "Pool m a r-\u003e(Integer-\u003er-\u003eIO b)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threads-pool/docs/Control-Concurrent-Pool.html#v:resultsReader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the task with given argument\n\u003c/p\u003e",
          "module": "Control.Concurrent.Pool",
          "name": "runTask",
          "package": "threads-pool",
          "signature": "m r -\u003e a -\u003e IO r",
          "source": "src/Control-Concurrent-Pool.html#runTask",
          "type": "method"
        },
        "index": {
          "description": "Run the task with given argument",
          "hierarchy": "Control Concurrent Pool",
          "module": "Control.Concurrent.Pool",
          "name": "runTask",
          "normalized": "a b-\u003ec-\u003eIO b",
          "package": "threads-pool",
          "partial": "Task",
          "signature": "m r-\u003ea-\u003eIO r",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/threads-pool/docs/Control-Concurrent-Pool.html#v:runTask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTerminate all threads in the pool\n\u003c/p\u003e",
          "module": "Control.Concurrent.Pool",
          "name": "terminatePool",
          "package": "threads-pool",
          "signature": "Pool m a r -\u003e m ()",
          "source": "src/Control-Concurrent-Pool.html#terminatePool",
          "type": "function"
        },
        "index": {
          "description": "Terminate all threads in the pool",
          "hierarchy": "Control Concurrent Pool",
          "module": "Control.Concurrent.Pool",
          "name": "terminatePool",
          "normalized": "Pool a b c-\u003ea()",
          "package": "threads-pool",
          "partial": "Pool",
          "signature": "Pool m a r-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threads-pool/docs/Control-Concurrent-Pool.html#v:terminatePool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTerminate all threads in the pool, in IO monad\n\u003c/p\u003e",
          "module": "Control.Concurrent.Pool",
          "name": "terminatePoolIO",
          "package": "threads-pool",
          "signature": "Pool m a r -\u003e IO ()",
          "source": "src/Control-Concurrent-Pool.html#terminatePoolIO",
          "type": "function"
        },
        "index": {
          "description": "Terminate all threads in the pool in IO monad",
          "hierarchy": "Control Concurrent Pool",
          "module": "Control.Concurrent.Pool",
          "name": "terminatePoolIO",
          "normalized": "Pool a b c-\u003eIO()",
          "package": "threads-pool",
          "partial": "Pool IO",
          "signature": "Pool m a r-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threads-pool/docs/Control-Concurrent-Pool.html#v:terminatePoolIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWait until all tasks will end\n\u003c/p\u003e",
          "module": "Control.Concurrent.Pool",
          "name": "waitFor",
          "package": "threads-pool",
          "signature": "Pool m a r -\u003e m ()",
          "source": "src/Control-Concurrent-Pool.html#waitFor",
          "type": "function"
        },
        "index": {
          "description": "Wait until all tasks will end",
          "hierarchy": "Control Concurrent Pool",
          "module": "Control.Concurrent.Pool",
          "name": "waitFor",
          "normalized": "Pool a b c-\u003ea()",
          "package": "threads-pool",
          "partial": "For",
          "signature": "Pool m a r-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threads-pool/docs/Control-Concurrent-Pool.html#v:waitFor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWait until all tasks will end, in IO monad\n\u003c/p\u003e",
          "module": "Control.Concurrent.Pool",
          "name": "waitForIO",
          "package": "threads-pool",
          "signature": "Pool m a r -\u003e IO ()",
          "source": "src/Control-Concurrent-Pool.html#waitForIO",
          "type": "function"
        },
        "index": {
          "description": "Wait until all tasks will end in IO monad",
          "hierarchy": "Control Concurrent Pool",
          "module": "Control.Concurrent.Pool",
          "name": "waitForIO",
          "normalized": "Pool a b c-\u003eIO()",
          "package": "threads-pool",
          "partial": "For IO",
          "signature": "Pool m a r-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threads-pool/docs/Control-Concurrent-Pool.html#v:waitForIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Pool",
          "name": "waitForTasks",
          "package": "threads-pool",
          "signature": "Pool m a r -\u003e [Integer] -\u003e m ()",
          "source": "src/Control-Concurrent-Pool.html#waitForTasks",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Pool",
          "module": "Control.Concurrent.Pool",
          "name": "waitForTasks",
          "normalized": "Pool a b c-\u003e[Integer]-\u003ea()",
          "package": "threads-pool",
          "partial": "For Tasks",
          "signature": "Pool m a r-\u003e[Integer]-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threads-pool/docs/Control-Concurrent-Pool.html#v:waitForTasks"
      }
    }
  ]
]