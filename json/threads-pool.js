[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threads-pool/docs/Control-Concurrent-Pool.html#",
      "description": {
        "fct-module": "Control.Concurrent.Pool",
        "fct-package": "threads-pool",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-Pool.html",
        "fct-type": "module",
        "title": "Pool"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Pool",
        "module": "Control.Concurrent.Pool",
        "name": "Pool",
        "normalized": "",
        "package": "threads-pool",
        "partial": "Pool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threads-pool/docs/Control-Concurrent-Pool.html#t:Pool",
      "description": {
        "fct-descr": "\u003cp\u003eThis stores all pool-related states\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Pool",
        "fct-package": "threads-pool",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-Pool.html#Pool",
        "fct-type": "data",
        "title": "Pool"
      },
      "index": {
        "description": "This stores all pool-related states",
        "hierarchy": "Control Concurrent Pool",
        "module": "Control.Concurrent.Pool",
        "name": "Pool",
        "normalized": "",
        "package": "threads-pool",
        "partial": "Pool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threads-pool/docs/Control-Concurrent-Pool.html#t:Task",
      "description": {
        "fct-descr": "\u003cp\u003eAny monadic computation that can be turned to IO\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Pool",
        "fct-package": "threads-pool",
        "fct-signature": "class",
        "fct-source": "src/Control-Concurrent-Pool.html#Task",
        "fct-type": "class",
        "title": "Task"
      },
      "index": {
        "description": "Any monadic computation that can be turned to IO",
        "hierarchy": "Control Concurrent Pool",
        "module": "Control.Concurrent.Pool",
        "name": "Task",
        "normalized": "",
        "package": "threads-pool",
        "partial": "Task",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threads-pool/docs/Control-Concurrent-Pool.html#v:isPoolWaiting",
      "description": {
        "fct-descr": "\u003cp\u003eCheck if pool is waiting for new tasks\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Pool",
        "fct-package": "threads-pool",
        "fct-signature": "Pool m a r-\u003e IO Bool",
        "fct-type": "function",
        "title": "isPoolWaiting"
      },
      "index": {
        "description": "Check if pool is waiting for new tasks",
        "hierarchy": "Control Concurrent Pool",
        "module": "Control.Concurrent.Pool",
        "name": "isPoolWaiting",
        "normalized": "Pool a b c-\u003eIO Bool",
        "package": "threads-pool",
        "partial": "Pool Waiting",
        "signature": "Pool m a r-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threads-pool/docs/Control-Concurrent-Pool.html#v:newPool",
      "description": {
        "fct-descr": "\u003cp\u003eCreate new threads pool\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Pool",
        "fct-package": "threads-pool",
        "fct-signature": "Int-\u003e Bool-\u003e m (Pool m a r)",
        "fct-type": "function",
        "title": "newPool"
      },
      "index": {
        "description": "Create new threads pool",
        "hierarchy": "Control Concurrent Pool",
        "module": "Control.Concurrent.Pool",
        "name": "newPool",
        "normalized": "Int-\u003eBool-\u003ea(Pool a b c)",
        "package": "threads-pool",
        "partial": "Pool",
        "signature": "Int-\u003eBool-\u003em(Pool m a r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threads-pool/docs/Control-Concurrent-Pool.html#v:newPoolIO",
      "description": {
        "fct-descr": "\u003cp\u003eCreate new threads pool in IO monad\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Pool",
        "fct-package": "threads-pool",
        "fct-signature": "Int-\u003e Bool-\u003e IO (Pool m a r)",
        "fct-type": "function",
        "title": "newPoolIO"
      },
      "index": {
        "description": "Create new threads pool in IO monad",
        "hierarchy": "Control Concurrent Pool",
        "module": "Control.Concurrent.Pool",
        "name": "newPoolIO",
        "normalized": "Int-\u003eBool-\u003eIO(Pool a b c)",
        "package": "threads-pool",
        "partial": "Pool IO",
        "signature": "Int-\u003eBool-\u003eIO(Pool m a r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threads-pool/docs/Control-Concurrent-Pool.html#v:noMoreTasks",
      "description": {
        "fct-descr": "\u003cp\u003eTell to the pool that there will no new tasks\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Pool",
        "fct-package": "threads-pool",
        "fct-signature": "Pool m a r -\u003e m ()",
        "fct-source": "src/Control-Concurrent-Pool.html#noMoreTasks",
        "fct-type": "function",
        "title": "noMoreTasks"
      },
      "index": {
        "description": "Tell to the pool that there will no new tasks",
        "hierarchy": "Control Concurrent Pool",
        "module": "Control.Concurrent.Pool",
        "name": "noMoreTasks",
        "normalized": "Pool a b c-\u003ea()",
        "package": "threads-pool",
        "partial": "More Tasks",
        "signature": "Pool m a r-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threads-pool/docs/Control-Concurrent-Pool.html#v:noMoreTasksIO",
      "description": {
        "fct-descr": "\u003cp\u003eTell to the pool that there will no new tasks, in IO monad\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Pool",
        "fct-package": "threads-pool",
        "fct-signature": "Pool m a r -\u003e IO ()",
        "fct-source": "src/Control-Concurrent-Pool.html#noMoreTasksIO",
        "fct-type": "function",
        "title": "noMoreTasksIO"
      },
      "index": {
        "description": "Tell to the pool that there will no new tasks in IO monad",
        "hierarchy": "Control Concurrent Pool",
        "module": "Control.Concurrent.Pool",
        "name": "noMoreTasksIO",
        "normalized": "Pool a b c-\u003eIO()",
        "package": "threads-pool",
        "partial": "More Tasks IO",
        "signature": "Pool m a r-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threads-pool/docs/Control-Concurrent-Pool.html#v:queue",
      "description": {
        "fct-descr": "\u003cp\u003ePut the new task into queue\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Pool",
        "fct-package": "threads-pool",
        "fct-signature": "Pool m a r-\u003e m r-\u003e a-\u003e m Integer",
        "fct-type": "function",
        "title": "queue"
      },
      "index": {
        "description": "Put the new task into queue",
        "hierarchy": "Control Concurrent Pool",
        "module": "Control.Concurrent.Pool",
        "name": "queue",
        "normalized": "Pool a b c-\u003ea c-\u003eb-\u003ea Integer",
        "package": "threads-pool",
        "partial": "",
        "signature": "Pool m a r-\u003em r-\u003ea-\u003em Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threads-pool/docs/Control-Concurrent-Pool.html#v:readResult",
      "description": {
        "fct-descr": "\u003cp\u003eRead next result from the pool.\n This makes sense only if for pool which returns results.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Pool",
        "fct-package": "threads-pool",
        "fct-signature": "Pool m a r-\u003e m (Integer, r)",
        "fct-type": "function",
        "title": "readResult"
      },
      "index": {
        "description": "Read next result from the pool This makes sense only if for pool which returns results",
        "hierarchy": "Control Concurrent Pool",
        "module": "Control.Concurrent.Pool",
        "name": "readResult",
        "normalized": "Pool a b c-\u003ea(Integer,c)",
        "package": "threads-pool",
        "partial": "Result",
        "signature": "Pool m a r-\u003em(Integer,r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threads-pool/docs/Control-Concurrent-Pool.html#v:resultsReader",
      "description": {
        "fct-descr": "\u003cp\u003eRead all results from pool and run given computation with each.\n Probably you will run this in the separate thread (using forkIO).\n This makes sense only if for pool which returns results.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Pool",
        "fct-package": "threads-pool",
        "fct-signature": "Pool m a r -\u003e (Integer -\u003e r -\u003e IO b) -\u003e IO ()",
        "fct-source": "src/Control-Concurrent-Pool.html#resultsReader",
        "fct-type": "function",
        "title": "resultsReader"
      },
      "index": {
        "description": "Read all results from pool and run given computation with each Probably you will run this in the separate thread using forkIO This makes sense only if for pool which returns results",
        "hierarchy": "Control Concurrent Pool",
        "module": "Control.Concurrent.Pool",
        "name": "resultsReader",
        "normalized": "Pool a b c-\u003e(Integer-\u003ec-\u003eIO d)-\u003eIO()",
        "package": "threads-pool",
        "partial": "Reader",
        "signature": "Pool m a r-\u003e(Integer-\u003er-\u003eIO b)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threads-pool/docs/Control-Concurrent-Pool.html#v:runTask",
      "description": {
        "fct-descr": "\u003cp\u003eRun the task with given argument\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Pool",
        "fct-package": "threads-pool",
        "fct-signature": "m r -\u003e a -\u003e IO r",
        "fct-source": "src/Control-Concurrent-Pool.html#runTask",
        "fct-type": "method",
        "title": "runTask"
      },
      "index": {
        "description": "Run the task with given argument",
        "hierarchy": "Control Concurrent Pool",
        "module": "Control.Concurrent.Pool",
        "name": "runTask",
        "normalized": "a b-\u003ec-\u003eIO b",
        "package": "threads-pool",
        "partial": "Task",
        "signature": "m r-\u003ea-\u003eIO r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threads-pool/docs/Control-Concurrent-Pool.html#v:terminatePool",
      "description": {
        "fct-descr": "\u003cp\u003eTerminate all threads in the pool\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Pool",
        "fct-package": "threads-pool",
        "fct-signature": "Pool m a r -\u003e m ()",
        "fct-source": "src/Control-Concurrent-Pool.html#terminatePool",
        "fct-type": "function",
        "title": "terminatePool"
      },
      "index": {
        "description": "Terminate all threads in the pool",
        "hierarchy": "Control Concurrent Pool",
        "module": "Control.Concurrent.Pool",
        "name": "terminatePool",
        "normalized": "Pool a b c-\u003ea()",
        "package": "threads-pool",
        "partial": "Pool",
        "signature": "Pool m a r-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threads-pool/docs/Control-Concurrent-Pool.html#v:terminatePoolIO",
      "description": {
        "fct-descr": "\u003cp\u003eTerminate all threads in the pool, in IO monad\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Pool",
        "fct-package": "threads-pool",
        "fct-signature": "Pool m a r -\u003e IO ()",
        "fct-source": "src/Control-Concurrent-Pool.html#terminatePoolIO",
        "fct-type": "function",
        "title": "terminatePoolIO"
      },
      "index": {
        "description": "Terminate all threads in the pool in IO monad",
        "hierarchy": "Control Concurrent Pool",
        "module": "Control.Concurrent.Pool",
        "name": "terminatePoolIO",
        "normalized": "Pool a b c-\u003eIO()",
        "package": "threads-pool",
        "partial": "Pool IO",
        "signature": "Pool m a r-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threads-pool/docs/Control-Concurrent-Pool.html#v:waitFor",
      "description": {
        "fct-descr": "\u003cp\u003eWait until all tasks will end\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Pool",
        "fct-package": "threads-pool",
        "fct-signature": "Pool m a r -\u003e m ()",
        "fct-source": "src/Control-Concurrent-Pool.html#waitFor",
        "fct-type": "function",
        "title": "waitFor"
      },
      "index": {
        "description": "Wait until all tasks will end",
        "hierarchy": "Control Concurrent Pool",
        "module": "Control.Concurrent.Pool",
        "name": "waitFor",
        "normalized": "Pool a b c-\u003ea()",
        "package": "threads-pool",
        "partial": "For",
        "signature": "Pool m a r-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threads-pool/docs/Control-Concurrent-Pool.html#v:waitForIO",
      "description": {
        "fct-descr": "\u003cp\u003eWait until all tasks will end, in IO monad\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Pool",
        "fct-package": "threads-pool",
        "fct-signature": "Pool m a r -\u003e IO ()",
        "fct-source": "src/Control-Concurrent-Pool.html#waitForIO",
        "fct-type": "function",
        "title": "waitForIO"
      },
      "index": {
        "description": "Wait until all tasks will end in IO monad",
        "hierarchy": "Control Concurrent Pool",
        "module": "Control.Concurrent.Pool",
        "name": "waitForIO",
        "normalized": "Pool a b c-\u003eIO()",
        "package": "threads-pool",
        "partial": "For IO",
        "signature": "Pool m a r-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threads-pool/docs/Control-Concurrent-Pool.html#v:waitForTasks",
      "description": {
        "fct-module": "Control.Concurrent.Pool",
        "fct-package": "threads-pool",
        "fct-signature": "Pool m a r -\u003e [Integer] -\u003e m ()",
        "fct-source": "src/Control-Concurrent-Pool.html#waitForTasks",
        "fct-type": "function",
        "title": "waitForTasks"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Pool",
        "module": "Control.Concurrent.Pool",
        "name": "waitForTasks",
        "normalized": "Pool a b c-\u003e[Integer]-\u003ea()",
        "package": "threads-pool",
        "partial": "For Tasks",
        "signature": "Pool m a r-\u003e[Integer]-\u003em()"
      }
    }
  }
]