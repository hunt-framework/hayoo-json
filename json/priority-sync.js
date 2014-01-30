[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-ClaimContext.html#",
      "description": {
        "fct-module": "PrioritySync.Internal.ClaimContext",
        "fct-package": "priority-sync",
        "fct-signature": "module",
        "fct-source": "src/PrioritySync-Internal-ClaimContext.html",
        "fct-type": "module",
        "title": "ClaimContext"
      },
      "index": {
        "description": "",
        "hierarchy": "PrioritySync Internal ClaimContext",
        "module": "PrioritySync.Internal.ClaimContext",
        "name": "ClaimContext",
        "normalized": "",
        "package": "priority-sync",
        "partial": "Claim Context",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-ClaimContext.html#t:ClaimContext",
      "description": {
        "fct-descr": "\u003cp\u003eRules for calling \u003ccode\u003eclaim_\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "PrioritySync.Internal.ClaimContext",
        "fct-package": "priority-sync",
        "fct-signature": "class",
        "fct-source": "src/PrioritySync-Internal-ClaimContext.html#ClaimContext",
        "fct-type": "class",
        "title": "ClaimContext"
      },
      "index": {
        "description": "Rules for calling claim",
        "hierarchy": "PrioritySync Internal ClaimContext",
        "module": "PrioritySync.Internal.ClaimContext",
        "name": "ClaimContext",
        "normalized": "",
        "package": "priority-sync",
        "partial": "Claim Context",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-ClaimContext.html#v:approveClaimsEntering",
      "description": {
        "fct-descr": "\u003cp\u003eShould approve a some claims before entering a critical section, as described by \u003ccode\u003eclaim_\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "PrioritySync.Internal.ClaimContext",
        "fct-package": "priority-sync",
        "fct-signature": "c -\u003e [Claim (UserData c)] -\u003e STM (ClaimHandle c)",
        "fct-source": "src/PrioritySync-Internal-ClaimContext.html#approveClaimsEntering",
        "fct-type": "method",
        "title": "approveClaimsEntering"
      },
      "index": {
        "description": "Should approve some claims before entering critical section as described by claim",
        "hierarchy": "PrioritySync Internal ClaimContext",
        "module": "PrioritySync.Internal.ClaimContext",
        "name": "approveClaimsEntering",
        "normalized": "a-\u003e[Claim(UserData a)]-\u003eSTM(ClaimHandle a)",
        "package": "priority-sync",
        "partial": "Claims Entering",
        "signature": "c-\u003e[Claim(UserData c)]-\u003eSTM(ClaimHandle c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-ClaimContext.html#v:approveClaimsExiting",
      "description": {
        "fct-descr": "\u003cp\u003eShould approve a some claims before exiting a critical section, as described by \u003ccode\u003eclaim_\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "PrioritySync.Internal.ClaimContext",
        "fct-package": "priority-sync",
        "fct-signature": "c -\u003e [Claim (UserData c)] -\u003e STM (ClaimHandle c)",
        "fct-source": "src/PrioritySync-Internal-ClaimContext.html#approveClaimsExiting",
        "fct-type": "method",
        "title": "approveClaimsExiting"
      },
      "index": {
        "description": "Should approve some claims before exiting critical section as described by claim",
        "hierarchy": "PrioritySync Internal ClaimContext",
        "module": "PrioritySync.Internal.ClaimContext",
        "name": "approveClaimsExiting",
        "normalized": "a-\u003e[Claim(UserData a)]-\u003eSTM(ClaimHandle a)",
        "package": "priority-sync",
        "partial": "Claims Exiting",
        "signature": "c-\u003e[Claim(UserData c)]-\u003eSTM(ClaimHandle c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-ClaimContext.html#v:waitingAction",
      "description": {
        "fct-descr": "\u003cp\u003eA waiting transaction, as described by \u003ccode\u003eclaim_\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "PrioritySync.Internal.ClaimContext",
        "fct-package": "priority-sync",
        "fct-signature": "c -\u003e ClaimHandle c -\u003e STM ()",
        "fct-source": "src/PrioritySync-Internal-ClaimContext.html#waitingAction",
        "fct-type": "method",
        "title": "waitingAction"
      },
      "index": {
        "description": "waiting transaction as described by claim",
        "hierarchy": "PrioritySync Internal ClaimContext",
        "module": "PrioritySync.Internal.ClaimContext",
        "name": "waitingAction",
        "normalized": "a-\u003eClaimHandle a-\u003eSTM()",
        "package": "priority-sync",
        "partial": "Action",
        "signature": "c-\u003eClaimHandle c-\u003eSTM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Constrained.html#",
      "description": {
        "fct-module": "PrioritySync.Internal.Constrained",
        "fct-package": "priority-sync",
        "fct-signature": "module",
        "fct-source": "src/PrioritySync-Internal-Constrained.html",
        "fct-type": "module",
        "title": "Constrained"
      },
      "index": {
        "description": "",
        "hierarchy": "PrioritySync Internal Constrained",
        "module": "PrioritySync.Internal.Constrained",
        "name": "Constrained",
        "normalized": "",
        "package": "priority-sync",
        "partial": "Constrained",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Constrained.html#t:Constrained",
      "description": {
        "fct-descr": "\u003cp\u003eRequire that all \u003ccode\u003e\u003ca\u003eRoomConstraint\u003c/a\u003e\u003c/code\u003es be satisfied when acquiring a \u003ccode\u003e\u003ca\u003eRoom\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "PrioritySync.Internal.Constrained",
        "fct-package": "priority-sync",
        "fct-signature": "data",
        "fct-source": "src/PrioritySync-Internal-Constrained.html#Constrained",
        "fct-type": "data",
        "title": "Constrained"
      },
      "index": {
        "description": "Require that all RoomConstraint be satisfied when acquiring Room",
        "hierarchy": "PrioritySync Internal Constrained",
        "module": "PrioritySync.Internal.Constrained",
        "name": "Constrained",
        "normalized": "",
        "package": "priority-sync",
        "partial": "Constrained",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Constrained.html#v:Constrained",
      "description": {
        "fct-module": "PrioritySync.Internal.Constrained",
        "fct-package": "priority-sync",
        "fct-signature": "Constrained",
        "fct-source": "src/PrioritySync-Internal-Constrained.html#Constrained",
        "fct-type": "function",
        "title": "Constrained"
      },
      "index": {
        "description": "",
        "hierarchy": "PrioritySync Internal Constrained",
        "module": "PrioritySync.Internal.Constrained",
        "name": "Constrained",
        "normalized": "",
        "package": "priority-sync",
        "partial": "Constrained",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Dispatch.html#",
      "description": {
        "fct-module": "PrioritySync.Internal.Dispatch",
        "fct-package": "priority-sync",
        "fct-signature": "module",
        "fct-source": "src/PrioritySync-Internal-Dispatch.html",
        "fct-type": "module",
        "title": "Dispatch"
      },
      "index": {
        "description": "",
        "hierarchy": "PrioritySync Internal Dispatch",
        "module": "PrioritySync.Internal.Dispatch",
        "name": "Dispatch",
        "normalized": "",
        "package": "priority-sync",
        "partial": "Dispatch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Dispatch.html#t:TaskHandle",
      "description": {
        "fct-module": "PrioritySync.Internal.Dispatch",
        "fct-package": "priority-sync",
        "fct-signature": "data",
        "fct-source": "src/PrioritySync-Internal-Dispatch.html#TaskHandle",
        "fct-type": "data",
        "title": "TaskHandle"
      },
      "index": {
        "description": "",
        "hierarchy": "PrioritySync Internal Dispatch",
        "module": "PrioritySync.Internal.Dispatch",
        "name": "TaskHandle",
        "normalized": "",
        "package": "priority-sync",
        "partial": "Task Handle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Dispatch.html#v:dispatch",
      "description": {
        "fct-descr": "\u003cp\u003ePerform a task on another thread.  This task can be reprioritized and canceled.\n\u003c/p\u003e",
        "fct-module": "PrioritySync.Internal.Dispatch",
        "fct-package": "priority-sync",
        "fct-signature": "c -\u003e IO a -\u003e IO (TaskHandle (Priority (ClaimHandle c)) a)",
        "fct-source": "src/PrioritySync-Internal-Dispatch.html#dispatch",
        "fct-type": "function",
        "title": "dispatch"
      },
      "index": {
        "description": "Perform task on another thread This task can be reprioritized and canceled",
        "hierarchy": "PrioritySync Internal Dispatch",
        "module": "PrioritySync.Internal.Dispatch",
        "name": "dispatch",
        "normalized": "a-\u003eIO b-\u003eIO(TaskHandle(Priority(ClaimHandle a))b)",
        "package": "priority-sync",
        "partial": "",
        "signature": "c-\u003eIO a-\u003eIO(TaskHandle(Priority(ClaimHandle c))a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Dispatch.html#v:getResult",
      "description": {
        "fct-descr": "\u003cp\u003eWait for the result from this task.\n\u003c/p\u003e",
        "fct-module": "PrioritySync.Internal.Dispatch",
        "fct-package": "priority-sync",
        "fct-signature": "TaskHandle p a -\u003e STM a",
        "fct-source": "src/PrioritySync-Internal-Dispatch.html#getResult",
        "fct-type": "function",
        "title": "getResult"
      },
      "index": {
        "description": "Wait for the result from this task",
        "hierarchy": "PrioritySync Internal Dispatch",
        "module": "PrioritySync.Internal.Dispatch",
        "name": "getResult",
        "normalized": "TaskHandle a b-\u003eSTM b",
        "package": "priority-sync",
        "partial": "Result",
        "signature": "TaskHandle p a-\u003eSTM a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Dispatch.html#v:reprioritize",
      "description": {
        "fct-module": "PrioritySync.Internal.Dispatch",
        "fct-package": "priority-sync",
        "fct-signature": "p -\u003e (Priority p -\u003e Priority p) -\u003e STM ()",
        "fct-source": "src/PrioritySync-Internal-Prioritized.html#reprioritize",
        "fct-type": "function",
        "title": "reprioritize"
      },
      "index": {
        "description": "",
        "hierarchy": "PrioritySync Internal Dispatch",
        "module": "PrioritySync.Internal.Dispatch",
        "name": "reprioritize",
        "normalized": "a-\u003e(Priority a-\u003ePriority a)-\u003eSTM()",
        "package": "priority-sync",
        "partial": "",
        "signature": "p-\u003e(Priority p-\u003ePriority p)-\u003eSTM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Dispatch.html#v:tryGetResult",
      "description": {
        "fct-descr": "\u003cp\u003eNon-blocking version of \u003ccode\u003e\u003ca\u003egetResult\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "PrioritySync.Internal.Dispatch",
        "fct-package": "priority-sync",
        "fct-signature": "TaskHandle p a -\u003e STM (Maybe a)",
        "fct-source": "src/PrioritySync-Internal-Dispatch.html#tryGetResult",
        "fct-type": "function",
        "title": "tryGetResult"
      },
      "index": {
        "description": "Non-blocking version of getResult",
        "hierarchy": "PrioritySync Internal Dispatch",
        "module": "PrioritySync.Internal.Dispatch",
        "name": "tryGetResult",
        "normalized": "TaskHandle a b-\u003eSTM(Maybe b)",
        "package": "priority-sync",
        "partial": "Get Result",
        "signature": "TaskHandle p a-\u003eSTM(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Prioritized.html#",
      "description": {
        "fct-module": "PrioritySync.Internal.Prioritized",
        "fct-package": "priority-sync",
        "fct-signature": "module",
        "fct-source": "src/PrioritySync-Internal-Prioritized.html",
        "fct-type": "module",
        "title": "Prioritized"
      },
      "index": {
        "description": "",
        "hierarchy": "PrioritySync Internal Prioritized",
        "module": "PrioritySync.Internal.Prioritized",
        "name": "Prioritized",
        "normalized": "",
        "package": "priority-sync",
        "partial": "Prioritized",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Prioritized.html#t:Prioritized",
      "description": {
        "fct-descr": "\u003cp\u003eReprioritize a task.  This has no effect on a target that has already left the queue.\n\u003c/p\u003e",
        "fct-module": "PrioritySync.Internal.Prioritized",
        "fct-package": "priority-sync",
        "fct-signature": "class",
        "fct-source": "src/PrioritySync-Internal-Prioritized.html#Prioritized",
        "fct-type": "class",
        "title": "Prioritized"
      },
      "index": {
        "description": "Reprioritize task This has no effect on target that has already left the queue",
        "hierarchy": "PrioritySync Internal Prioritized",
        "module": "PrioritySync.Internal.Prioritized",
        "name": "Prioritized",
        "normalized": "",
        "package": "priority-sync",
        "partial": "Prioritized",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Prioritized.html#v:reprioritize",
      "description": {
        "fct-module": "PrioritySync.Internal.Prioritized",
        "fct-package": "priority-sync",
        "fct-signature": "p -\u003e (Priority p -\u003e Priority p) -\u003e STM ()",
        "fct-source": "src/PrioritySync-Internal-Prioritized.html#reprioritize",
        "fct-type": "method",
        "title": "reprioritize"
      },
      "index": {
        "description": "",
        "hierarchy": "PrioritySync Internal Prioritized",
        "module": "PrioritySync.Internal.Prioritized",
        "name": "reprioritize",
        "normalized": "a-\u003e(Priority a-\u003ePriority a)-\u003eSTM()",
        "package": "priority-sync",
        "partial": "",
        "signature": "p-\u003e(Priority p-\u003ePriority p)-\u003eSTM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Queue.html#",
      "description": {
        "fct-module": "PrioritySync.Internal.Queue",
        "fct-package": "priority-sync",
        "fct-signature": "module",
        "fct-source": "src/PrioritySync-Internal-Queue.html",
        "fct-type": "module",
        "title": "Queue"
      },
      "index": {
        "description": "",
        "hierarchy": "PrioritySync Internal Queue",
        "module": "PrioritySync.Internal.Queue",
        "name": "Queue",
        "normalized": "",
        "package": "priority-sync",
        "partial": "Queue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Queue.html#t:Queue",
      "description": {
        "fct-descr": "\u003cp\u003eA prioritized \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003e.  Prioritization is least-first, i.e. larger values are nicer.\n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003e is not associated with any working thread, therefore, it is the client's responsibility to make sure that every pushed\n task is also pulled, or the \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003e will stall.  There are several ways to accomplish this:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Call \u003ccode\u003e\u003ca\u003epullTask\u003c/a\u003e\u003c/code\u003e at least once for every call to \u003ccode\u003e\u003ca\u003eputTask\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e Use \u003ccode\u003e\u003ca\u003edispatchTasks\u003c/a\u003e\u003c/code\u003e to push every task.\n\u003c/li\u003e\u003cli\u003e Use \u003ccode\u003e\u003ca\u003eflushQueue\u003c/a\u003e\u003c/code\u003e whenever the \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003e is not empty.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "PrioritySync.Internal.Queue",
        "fct-package": "priority-sync",
        "fct-signature": "data",
        "fct-source": "src/PrioritySync-Internal-Queue.html#Queue",
        "fct-type": "data",
        "title": "Queue"
      },
      "index": {
        "description": "prioritized Queue Prioritization is least-first i.e larger values are nicer Queue is not associated with any working thread therefore it is the client responsibility to make sure that every pushed task is also pulled or the Queue will stall There are several ways to accomplish this Call pullTask at least once for every call to putTask Use dispatchTasks to push every task Use flushQueue whenever the Queue is not empty",
        "hierarchy": "PrioritySync Internal Queue",
        "module": "PrioritySync.Internal.Queue",
        "name": "Queue",
        "normalized": "",
        "package": "priority-sync",
        "partial": "Queue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Queue.html#t:QueueConfigurationRecord",
      "description": {
        "fct-descr": "\u003cp\u003eConfiguration options for a \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003e.  A \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003e blocks on a number of predicates when dispatching a job.  Generally, \u003ccode\u003e\u003ca\u003efair_queue_configuration\u003c/a\u003e\u003c/code\u003e\n should work well.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e A single STM predicate for the entire \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003e.  This blocks the entire \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003e until the predicate is satisfied.\n\u003c/li\u003e\u003cli\u003e A STM predicate parameterized by priority.  This blocks a single priority level, and the \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003e will skip all tasks at that priority.\n\u003c/li\u003e\u003cli\u003e Each task is itself an STM transaction, and can block itself.\n\u003c/li\u003e\u003cli\u003e Pure constraints on priority and ordering inversion.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eIf a task is blocked for any reason, the task is skipped and the next task attempted, in priority order.\n\u003c/p\u003e",
        "fct-module": "PrioritySync.Internal.Queue",
        "fct-package": "priority-sync",
        "fct-signature": "data",
        "fct-source": "src/PrioritySync-Internal-Queue.html#QueueConfigurationRecord",
        "fct-type": "data",
        "title": "QueueConfigurationRecord"
      },
      "index": {
        "description": "Configuration options for Queue Queue blocks on number of predicates when dispatching job Generally fair queue configuration should work well single STM predicate for the entire Queue This blocks the entire Queue until the predicate is satisfied STM predicate parameterized by priority This blocks single priority level and the Queue will skip all tasks at that priority Each task is itself an STM transaction and can block itself Pure constraints on priority and ordering inversion If task is blocked for any reason the task is skipped and the next task attempted in priority order",
        "hierarchy": "PrioritySync Internal Queue",
        "module": "PrioritySync.Internal.Queue",
        "name": "QueueConfigurationRecord",
        "normalized": "",
        "package": "priority-sync",
        "partial": "Queue Configuration Record",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Queue.html#t:QueueOrder",
      "description": {
        "fct-module": "PrioritySync.Internal.Queue",
        "fct-package": "priority-sync",
        "fct-signature": "data",
        "fct-source": "src/PrioritySync-Internal-Queue.html#QueueOrder",
        "fct-type": "data",
        "title": "QueueOrder"
      },
      "index": {
        "description": "",
        "hierarchy": "PrioritySync Internal Queue",
        "module": "PrioritySync.Internal.Queue",
        "name": "QueueOrder",
        "normalized": "",
        "package": "priority-sync",
        "partial": "Queue Order",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Queue.html#t:TaskHandle",
      "description": {
        "fct-module": "PrioritySync.Internal.Queue",
        "fct-package": "priority-sync",
        "fct-signature": "data",
        "fct-source": "src/PrioritySync-Internal-Queue.html#TaskHandle",
        "fct-type": "data",
        "title": "TaskHandle"
      },
      "index": {
        "description": "",
        "hierarchy": "PrioritySync Internal Queue",
        "module": "PrioritySync.Internal.Queue",
        "name": "TaskHandle",
        "normalized": "",
        "package": "priority-sync",
        "partial": "Task Handle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Queue.html#v:FIFO",
      "description": {
        "fct-module": "PrioritySync.Internal.Queue",
        "fct-package": "priority-sync",
        "fct-signature": "FIFO",
        "fct-source": "src/PrioritySync-Internal-Queue.html#QueueOrder",
        "fct-type": "function",
        "title": "FIFO"
      },
      "index": {
        "description": "",
        "hierarchy": "PrioritySync Internal Queue",
        "module": "PrioritySync.Internal.Queue",
        "name": "FIFO",
        "normalized": "",
        "package": "priority-sync",
        "partial": "FIFO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Queue.html#v:FILO",
      "description": {
        "fct-module": "PrioritySync.Internal.Queue",
        "fct-package": "priority-sync",
        "fct-signature": "FILO",
        "fct-source": "src/PrioritySync-Internal-Queue.html#QueueOrder",
        "fct-type": "function",
        "title": "FILO"
      },
      "index": {
        "description": "",
        "hierarchy": "PrioritySync Internal Queue",
        "module": "PrioritySync.Internal.Queue",
        "name": "FILO",
        "normalized": "",
        "package": "priority-sync",
        "partial": "FILO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Queue.html#v:QueueConfigurationRecord",
      "description": {
        "fct-module": "PrioritySync.Internal.Queue",
        "fct-package": "priority-sync",
        "fct-signature": "QueueConfigurationRecord",
        "fct-source": "src/PrioritySync-Internal-Queue.html#QueueConfigurationRecord",
        "fct-type": "function",
        "title": "QueueConfigurationRecord"
      },
      "index": {
        "description": "",
        "hierarchy": "PrioritySync Internal Queue",
        "module": "PrioritySync.Internal.Queue",
        "name": "QueueConfigurationRecord",
        "normalized": "",
        "package": "priority-sync",
        "partial": "Queue Configuration Record",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Queue.html#v:allowed_ordering_inversion",
      "description": {
        "fct-descr": "\u003cp\u003eThe greatest allowed difference between the ideal prioritized FILO/FIFO ordering of tasks and the actual ordering of tasks.\n Setting this too high can introduce a lot of overhead in the presence of a lot of short-running tasks.\n Setting this to zero turns off the predicate failover feature, i.e. only the top of queue task will ever be pulled.\n\u003c/p\u003e",
        "fct-module": "PrioritySync.Internal.Queue",
        "fct-package": "priority-sync",
        "fct-signature": "Int",
        "fct-source": "src/PrioritySync-Internal-Queue.html#QueueConfigurationRecord",
        "fct-type": "function",
        "title": "allowed_ordering_inversion"
      },
      "index": {
        "description": "The greatest allowed difference between the ideal prioritized FILO FIFO ordering of tasks and the actual ordering of tasks Setting this too high can introduce lot of overhead in the presence of lot of short-running tasks Setting this to zero turns off the predicate failover feature i.e only the top of queue task will ever be pulled",
        "hierarchy": "PrioritySync Internal Queue",
        "module": "PrioritySync.Internal.Queue",
        "name": "allowed_ordering_inversion",
        "normalized": "",
        "package": "priority-sync",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Queue.html#v:allowed_priority_inversion",
      "description": {
        "fct-descr": "\u003cp\u003eConstrains the greatest allowed difference between the priority of the top-of-queue task and the priority of a task to be pulled.\n\u003c/p\u003e",
        "fct-module": "PrioritySync.Internal.Queue",
        "fct-package": "priority-sync",
        "fct-signature": "a -\u003e a -\u003e Bool",
        "fct-source": "src/PrioritySync-Internal-Queue.html#QueueConfigurationRecord",
        "fct-type": "function",
        "title": "allowed_priority_inversion"
      },
      "index": {
        "description": "Constrains the greatest allowed difference between the priority of the top-of-queue task and the priority of task to be pulled",
        "hierarchy": "PrioritySync Internal Queue",
        "module": "PrioritySync.Internal.Queue",
        "name": "allowed_priority_inversion",
        "normalized": "a-\u003ea-\u003eBool",
        "package": "priority-sync",
        "partial": "",
        "signature": "a-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Queue.html#v:dispatchTasks",
      "description": {
        "fct-descr": "\u003cp\u003e\"Fire and forget\" some tasks on a separate thread.\n\u003c/p\u003e",
        "fct-module": "PrioritySync.Internal.Queue",
        "fct-package": "priority-sync",
        "fct-signature": "[(Queue a, a, STM ())] -\u003e IO [TaskHandle a]",
        "fct-source": "src/PrioritySync-Internal-Queue.html#dispatchTasks",
        "fct-type": "function",
        "title": "dispatchTasks"
      },
      "index": {
        "description": "Fire and forget some tasks on separate thread",
        "hierarchy": "PrioritySync Internal Queue",
        "module": "PrioritySync.Internal.Queue",
        "name": "dispatchTasks",
        "normalized": "[(Queue a,a,STM())]-\u003eIO[TaskHandle a]",
        "package": "priority-sync",
        "partial": "Tasks",
        "signature": "[(Queue a,a,STM())]-\u003eIO[TaskHandle a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Queue.html#v:fair_queue_configuration",
      "description": {
        "fct-descr": "\u003cp\u003eA queue tuned for high throughput and fairness when processing moderate to long running tasks.\n\u003c/p\u003e",
        "fct-module": "PrioritySync.Internal.Queue",
        "fct-package": "priority-sync",
        "fct-signature": "QueueConfigurationRecord a",
        "fct-source": "src/PrioritySync-Internal-Queue.html#fair_queue_configuration",
        "fct-type": "function",
        "title": "fair_queue_configuration"
      },
      "index": {
        "description": "queue tuned for high throughput and fairness when processing moderate to long running tasks",
        "hierarchy": "PrioritySync Internal Queue",
        "module": "PrioritySync.Internal.Queue",
        "name": "fair_queue_configuration",
        "normalized": "",
        "package": "priority-sync",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Queue.html#v:fast_queue_configuration",
      "description": {
        "fct-descr": "\u003cp\u003eA queue tuned for high responsiveness and low priority inversion, but may have poorer long-term throughput and potential to starve some tasks compared to \u003ccode\u003e\u003ca\u003efair_queue_configuration\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "PrioritySync.Internal.Queue",
        "fct-package": "priority-sync",
        "fct-signature": "QueueConfigurationRecord a",
        "fct-source": "src/PrioritySync-Internal-Queue.html#fast_queue_configuration",
        "fct-type": "function",
        "title": "fast_queue_configuration"
      },
      "index": {
        "description": "queue tuned for high responsiveness and low priority inversion but may have poorer long-term throughput and potential to starve some tasks compared to fair queue configuration",
        "hierarchy": "PrioritySync Internal Queue",
        "module": "PrioritySync.Internal.Queue",
        "name": "fast_queue_configuration",
        "normalized": "",
        "package": "priority-sync",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Queue.html#v:flushQueue",
      "description": {
        "fct-descr": "\u003cp\u003eProcess a \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003e until it is empty.\n\u003c/p\u003e",
        "fct-module": "PrioritySync.Internal.Queue",
        "fct-package": "priority-sync",
        "fct-signature": "Queue a -\u003e IO ()",
        "fct-source": "src/PrioritySync-Internal-Queue.html#flushQueue",
        "fct-type": "function",
        "title": "flushQueue"
      },
      "index": {
        "description": "Process Queue until it is empty",
        "hierarchy": "PrioritySync Internal Queue",
        "module": "PrioritySync.Internal.Queue",
        "name": "flushQueue",
        "normalized": "Queue a-\u003eIO()",
        "package": "priority-sync",
        "partial": "Queue",
        "signature": "Queue a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Queue.html#v:hasCompleted",
      "description": {
        "fct-module": "PrioritySync.Internal.Queue",
        "fct-package": "priority-sync",
        "fct-signature": "TaskHandle a -\u003e STM Bool",
        "fct-source": "src/PrioritySync-Internal-Queue.html#hasCompleted",
        "fct-type": "function",
        "title": "hasCompleted"
      },
      "index": {
        "description": "",
        "hierarchy": "PrioritySync Internal Queue",
        "module": "PrioritySync.Internal.Queue",
        "name": "hasCompleted",
        "normalized": "TaskHandle a-\u003eSTM Bool",
        "package": "priority-sync",
        "partial": "Completed",
        "signature": "TaskHandle a-\u003eSTM Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Queue.html#v:isEmpty",
      "description": {
        "fct-descr": "\u003cp\u003eTrue iff this Queue is empty.\n\u003c/p\u003e",
        "fct-module": "PrioritySync.Internal.Queue",
        "fct-package": "priority-sync",
        "fct-signature": "Queue a -\u003e STM Bool",
        "fct-source": "src/PrioritySync-Internal-Queue.html#isEmpty",
        "fct-type": "function",
        "title": "isEmpty"
      },
      "index": {
        "description": "True iff this Queue is empty",
        "hierarchy": "PrioritySync Internal Queue",
        "module": "PrioritySync.Internal.Queue",
        "name": "isEmpty",
        "normalized": "Queue a-\u003eSTM Bool",
        "package": "priority-sync",
        "partial": "Empty",
        "signature": "Queue a-\u003eSTM Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Queue.html#v:isTopOfQueue",
      "description": {
        "fct-descr": "\u003cp\u003eTrue iff this task is poised at the top of it's \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "PrioritySync.Internal.Queue",
        "fct-package": "priority-sync",
        "fct-signature": "TaskHandle a -\u003e STM Bool",
        "fct-source": "src/PrioritySync-Internal-Queue.html#isTopOfQueue",
        "fct-type": "function",
        "title": "isTopOfQueue"
      },
      "index": {
        "description": "True iff this task is poised at the top of it Queue",
        "hierarchy": "PrioritySync Internal Queue",
        "module": "PrioritySync.Internal.Queue",
        "name": "isTopOfQueue",
        "normalized": "TaskHandle a-\u003eSTM Bool",
        "package": "priority-sync",
        "partial": "Top Of Queue",
        "signature": "TaskHandle a-\u003eSTM Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Queue.html#v:load",
      "description": {
        "fct-descr": "\u003cp\u003eThe number of tasks pending on this Queue.\n\u003c/p\u003e",
        "fct-module": "PrioritySync.Internal.Queue",
        "fct-package": "priority-sync",
        "fct-signature": "Queue a -\u003e STM Int",
        "fct-source": "src/PrioritySync-Internal-Queue.html#load",
        "fct-type": "function",
        "title": "load"
      },
      "index": {
        "description": "The number of tasks pending on this Queue",
        "hierarchy": "PrioritySync Internal Queue",
        "module": "PrioritySync.Internal.Queue",
        "name": "load",
        "normalized": "Queue a-\u003eSTM Int",
        "package": "priority-sync",
        "partial": "",
        "signature": "Queue a-\u003eSTM Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Queue.html#v:newQueue",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003e.  \n\u003c/p\u003e",
        "fct-module": "PrioritySync.Internal.Queue",
        "fct-package": "priority-sync",
        "fct-signature": "QueueConfigurationRecord a -\u003e IO (Queue a)",
        "fct-source": "src/PrioritySync-Internal-Queue.html#newQueue",
        "fct-type": "function",
        "title": "newQueue"
      },
      "index": {
        "description": "Create new Queue",
        "hierarchy": "PrioritySync Internal Queue",
        "module": "PrioritySync.Internal.Queue",
        "name": "newQueue",
        "normalized": "QueueConfigurationRecord a-\u003eIO(Queue a)",
        "package": "priority-sync",
        "partial": "Queue",
        "signature": "QueueConfigurationRecord a-\u003eIO(Queue a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Queue.html#v:pendingTasks",
      "description": {
        "fct-module": "PrioritySync.Internal.Queue",
        "fct-package": "priority-sync",
        "fct-signature": "Queue a -\u003e STM [TaskHandle a]",
        "fct-source": "src/PrioritySync-Internal-Queue.html#pendingTasks",
        "fct-type": "function",
        "title": "pendingTasks"
      },
      "index": {
        "description": "",
        "hierarchy": "PrioritySync Internal Queue",
        "module": "PrioritySync.Internal.Queue",
        "name": "pendingTasks",
        "normalized": "Queue a-\u003eSTM[TaskHandle a]",
        "package": "priority-sync",
        "partial": "Tasks",
        "signature": "Queue a-\u003eSTM[TaskHandle a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Queue.html#v:priority_indexed_predicate",
      "description": {
        "fct-descr": "\u003cp\u003eA predicate that must hold before any priority level may be pulled from a \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "PrioritySync.Internal.Queue",
        "fct-package": "priority-sync",
        "fct-signature": "a -\u003e STM ()",
        "fct-source": "src/PrioritySync-Internal-Queue.html#QueueConfigurationRecord",
        "fct-type": "function",
        "title": "priority_indexed_predicate"
      },
      "index": {
        "description": "predicate that must hold before any priority level may be pulled from Queue",
        "hierarchy": "PrioritySync Internal Queue",
        "module": "PrioritySync.Internal.Queue",
        "name": "priority_indexed_predicate",
        "normalized": "a-\u003eSTM()",
        "package": "priority-sync",
        "partial": "",
        "signature": "a-\u003eSTM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Queue.html#v:pullFromTop",
      "description": {
        "fct-descr": "\u003cp\u003ePull this task from the top of a \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003e, if it is already there.\n If this task is top-of-queue, but it's predicates fail, then \u003ccode\u003e\u003ca\u003epullFromTop\u003c/a\u003e\u003c/code\u003e may instead pull a lower-priority \u003ccode\u003e\u003ca\u003eTaskHandle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "PrioritySync.Internal.Queue",
        "fct-package": "priority-sync",
        "fct-signature": "TaskHandle a -\u003e STM (TaskHandle a)",
        "fct-source": "src/PrioritySync-Internal-Queue.html#pullFromTop",
        "fct-type": "function",
        "title": "pullFromTop"
      },
      "index": {
        "description": "Pull this task from the top of Queue if it is already there If this task is top-of-queue but it predicates fail then pullFromTop may instead pull lower-priority TaskHandle",
        "hierarchy": "PrioritySync Internal Queue",
        "module": "PrioritySync.Internal.Queue",
        "name": "pullFromTop",
        "normalized": "TaskHandle a-\u003eSTM(TaskHandle a)",
        "package": "priority-sync",
        "partial": "From Top",
        "signature": "TaskHandle a-\u003eSTM(TaskHandle a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Queue.html#v:pullSpecificTasks",
      "description": {
        "fct-descr": "\u003cp\u003eDon't return until the given \u003ccode\u003e\u003ca\u003eTaskHandle\u003c/a\u003e\u003c/code\u003es have been pulled from their associated \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003es.\n This doesn't guarantee that the \u003ccode\u003e\u003ca\u003eTaskHandle\u003c/a\u003e\u003c/code\u003e will ever be pulled, even when the \u003ccode\u003e\u003ca\u003eTaskHandle\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003e are both viable.\n You must concurrently arrange for every other \u003ccode\u003e\u003ca\u003eTaskHandle\u003c/a\u003e\u003c/code\u003e associated with the same \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003e to be pulled, or the \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003e will stall.\n \u003ccode\u003e\u003ca\u003epullSpecificTasks\u003c/a\u003e\u003c/code\u003e can handle lists \u003ccode\u003e\u003ca\u003eTaskHandle\u003c/a\u003e\u003c/code\u003es that are distributed among several \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003es, as well as a \u003ccode\u003e\u003ca\u003eTaskHandle\u003c/a\u003e\u003c/code\u003es that have\n already completed or complete concurrently from another thread.\n\u003c/p\u003e",
        "fct-module": "PrioritySync.Internal.Queue",
        "fct-package": "priority-sync",
        "fct-signature": "[TaskHandle a] -\u003e IO ()",
        "fct-source": "src/PrioritySync-Internal-Queue.html#pullSpecificTasks",
        "fct-type": "function",
        "title": "pullSpecificTasks"
      },
      "index": {
        "description": "Don return until the given TaskHandle have been pulled from their associated Queue This doesn guarantee that the TaskHandle will ever be pulled even when the TaskHandle and Queue are both viable You must concurrently arrange for every other TaskHandle associated with the same Queue to be pulled or the Queue will stall pullSpecificTasks can handle lists TaskHandle that are distributed among several Queue as well as TaskHandle that have already completed or complete concurrently from another thread",
        "hierarchy": "PrioritySync Internal Queue",
        "module": "PrioritySync.Internal.Queue",
        "name": "pullSpecificTasks",
        "normalized": "[TaskHandle a]-\u003eIO()",
        "package": "priority-sync",
        "partial": "Specific Tasks",
        "signature": "[TaskHandle a]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Queue.html#v:pullTask",
      "description": {
        "fct-descr": "\u003cp\u003ePull and commit a task from this \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "PrioritySync.Internal.Queue",
        "fct-package": "priority-sync",
        "fct-signature": "Queue a -\u003e STM (TaskHandle a)",
        "fct-source": "src/PrioritySync-Internal-Queue.html#pullTask",
        "fct-type": "function",
        "title": "pullTask"
      },
      "index": {
        "description": "Pull and commit task from this Queue",
        "hierarchy": "PrioritySync Internal Queue",
        "module": "PrioritySync.Internal.Queue",
        "name": "pullTask",
        "normalized": "Queue a-\u003eSTM(TaskHandle a)",
        "package": "priority-sync",
        "partial": "Task",
        "signature": "Queue a-\u003eSTM(TaskHandle a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Queue.html#v:putTask",
      "description": {
        "fct-descr": "\u003cp\u003ePut a task with it's priority value onto this queue.  Returns a handle to the task.\n\u003c/p\u003e",
        "fct-module": "PrioritySync.Internal.Queue",
        "fct-package": "priority-sync",
        "fct-signature": "Queue a -\u003e a -\u003e STM () -\u003e STM (TaskHandle a)",
        "fct-source": "src/PrioritySync-Internal-Queue.html#putTask",
        "fct-type": "function",
        "title": "putTask"
      },
      "index": {
        "description": "Put task with it priority value onto this queue Returns handle to the task",
        "hierarchy": "PrioritySync Internal Queue",
        "module": "PrioritySync.Internal.Queue",
        "name": "putTask",
        "normalized": "Queue a-\u003ea-\u003eSTM()-\u003eSTM(TaskHandle a)",
        "package": "priority-sync",
        "partial": "Task",
        "signature": "Queue a-\u003ea-\u003eSTM()-\u003eSTM(TaskHandle a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Queue.html#v:queue_order",
      "description": {
        "fct-descr": "\u003cp\u003eShould the \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003e run in FILO or FIFO order.  Ordering takes place after prioritization, and won't have much effect if priorities are very fine-grained.\n\u003c/p\u003e",
        "fct-module": "PrioritySync.Internal.Queue",
        "fct-package": "priority-sync",
        "fct-signature": "!QueueOrder",
        "fct-source": "src/PrioritySync-Internal-Queue.html#QueueConfigurationRecord",
        "fct-type": "function",
        "title": "queue_order"
      },
      "index": {
        "description": "Should the Queue run in FILO or FIFO order Ordering takes place after prioritization and won have much effect if priorities are very fine-grained",
        "hierarchy": "PrioritySync Internal Queue",
        "module": "PrioritySync.Internal.Queue",
        "name": "queue_order",
        "normalized": "",
        "package": "priority-sync",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Queue.html#v:queue_predicate",
      "description": {
        "fct-descr": "\u003cp\u003eA predicate that must hold before any task may be pulled from a \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "PrioritySync.Internal.Queue",
        "fct-package": "priority-sync",
        "fct-signature": "STM ()",
        "fct-source": "src/PrioritySync-Internal-Queue.html#QueueConfigurationRecord",
        "fct-type": "function",
        "title": "queue_predicate"
      },
      "index": {
        "description": "predicate that must hold before any task may be pulled from Queue",
        "hierarchy": "PrioritySync Internal Queue",
        "module": "PrioritySync.Internal.Queue",
        "name": "queue_predicate",
        "normalized": "STM()",
        "package": "priority-sync",
        "partial": "",
        "signature": "STM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Queue.html#v:taskPriority",
      "description": {
        "fct-descr": "\u003cp\u003eGet the priority of this task, which only exists if the task is still enqueued.\n\u003c/p\u003e",
        "fct-module": "PrioritySync.Internal.Queue",
        "fct-package": "priority-sync",
        "fct-signature": "TaskHandle a -\u003e STM (Maybe a)",
        "fct-source": "src/PrioritySync-Internal-Queue.html#taskPriority",
        "fct-type": "function",
        "title": "taskPriority"
      },
      "index": {
        "description": "Get the priority of this task which only exists if the task is still enqueued",
        "hierarchy": "PrioritySync Internal Queue",
        "module": "PrioritySync.Internal.Queue",
        "name": "taskPriority",
        "normalized": "TaskHandle a-\u003eSTM(Maybe a)",
        "package": "priority-sync",
        "partial": "Priority",
        "signature": "TaskHandle a-\u003eSTM(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Queue.html#v:taskQueue",
      "description": {
        "fct-descr": "\u003cp\u003eGet the \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003e associated with this task.\n\u003c/p\u003e",
        "fct-module": "PrioritySync.Internal.Queue",
        "fct-package": "priority-sync",
        "fct-signature": "TaskHandle a -\u003e Queue a",
        "fct-source": "src/PrioritySync-Internal-Queue.html#taskQueue",
        "fct-type": "function",
        "title": "taskQueue"
      },
      "index": {
        "description": "Get the Queue associated with this task",
        "hierarchy": "PrioritySync Internal Queue",
        "module": "PrioritySync.Internal.Queue",
        "name": "taskQueue",
        "normalized": "TaskHandle a-\u003eQueue a",
        "package": "priority-sync",
        "partial": "Queue",
        "signature": "TaskHandle a-\u003eQueue a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Receipt.html#",
      "description": {
        "fct-module": "PrioritySync.Internal.Receipt",
        "fct-package": "priority-sync",
        "fct-signature": "module",
        "fct-source": "src/PrioritySync-Internal-Receipt.html",
        "fct-type": "module",
        "title": "Receipt"
      },
      "index": {
        "description": "",
        "hierarchy": "PrioritySync Internal Receipt",
        "module": "PrioritySync.Internal.Receipt",
        "name": "Receipt",
        "normalized": "",
        "package": "priority-sync",
        "partial": "Receipt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Receipt.html#t:Receipt",
      "description": {
        "fct-descr": "\u003cp\u003eGet a notification when a claim is approved or scheduled.\n\u003c/p\u003e",
        "fct-module": "PrioritySync.Internal.Receipt",
        "fct-package": "priority-sync",
        "fct-signature": "data",
        "fct-source": "src/PrioritySync-Internal-Receipt.html#Receipt",
        "fct-type": "data",
        "title": "Receipt"
      },
      "index": {
        "description": "Get notification when claim is approved or scheduled",
        "hierarchy": "PrioritySync Internal Receipt",
        "module": "PrioritySync.Internal.Receipt",
        "name": "Receipt",
        "normalized": "",
        "package": "priority-sync",
        "partial": "Receipt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Receipt.html#v:Receipt",
      "description": {
        "fct-module": "PrioritySync.Internal.Receipt",
        "fct-package": "priority-sync",
        "fct-signature": "Receipt",
        "fct-source": "src/PrioritySync-Internal-Receipt.html#Receipt",
        "fct-type": "function",
        "title": "Receipt"
      },
      "index": {
        "description": "",
        "hierarchy": "PrioritySync Internal Receipt",
        "module": "PrioritySync.Internal.Receipt",
        "name": "Receipt",
        "normalized": "",
        "package": "priority-sync",
        "partial": "Receipt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Receipt.html#v:receipt_base_context",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "PrioritySync.Internal.Receipt",
        "fct-package": "priority-sync",
        "fct-signature": "c",
        "fct-source": "src/PrioritySync-Internal-Receipt.html#Receipt",
        "fct-type": "function",
        "title": "receipt_base_context"
      },
      "index": {
        "description": "",
        "hierarchy": "PrioritySync Internal Receipt",
        "module": "PrioritySync.Internal.Receipt",
        "name": "receipt_base_context",
        "normalized": "",
        "package": "priority-sync",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Receipt.html#v:receipt_entering_callback",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "PrioritySync.Internal.Receipt",
        "fct-package": "priority-sync",
        "fct-signature": "ClaimHandle c -\u003e STM ()",
        "fct-source": "src/PrioritySync-Internal-Receipt.html#Receipt",
        "fct-type": "function",
        "title": "receipt_entering_callback"
      },
      "index": {
        "description": "",
        "hierarchy": "PrioritySync Internal Receipt",
        "module": "PrioritySync.Internal.Receipt",
        "name": "receipt_entering_callback",
        "normalized": "ClaimHandle a-\u003eSTM()",
        "package": "priority-sync",
        "partial": "",
        "signature": "ClaimHandle c-\u003eSTM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Receipt.html#v:receipt_exiting_callback",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "PrioritySync.Internal.Receipt",
        "fct-package": "priority-sync",
        "fct-signature": "ClaimHandle c -\u003e STM ()",
        "fct-source": "src/PrioritySync-Internal-Receipt.html#Receipt",
        "fct-type": "function",
        "title": "receipt_exiting_callback"
      },
      "index": {
        "description": "",
        "hierarchy": "PrioritySync Internal Receipt",
        "module": "PrioritySync.Internal.Receipt",
        "name": "receipt_exiting_callback",
        "normalized": "ClaimHandle a-\u003eSTM()",
        "package": "priority-sync",
        "partial": "",
        "signature": "ClaimHandle c-\u003eSTM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Room.html#",
      "description": {
        "fct-module": "PrioritySync.Internal.Room",
        "fct-package": "priority-sync",
        "fct-signature": "module",
        "fct-source": "src/PrioritySync-Internal-Room.html",
        "fct-type": "module",
        "title": "Room"
      },
      "index": {
        "description": "",
        "hierarchy": "PrioritySync Internal Room",
        "module": "PrioritySync.Internal.Room",
        "name": "Room",
        "normalized": "",
        "package": "priority-sync",
        "partial": "Room",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Room.html#t:Claim",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eClaim\u003c/a\u003e\u003c/code\u003e, or attempt to acquire or release a \u003ccode\u003e\u003ca\u003eRoom\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "PrioritySync.Internal.Room",
        "fct-package": "priority-sync",
        "fct-signature": "data",
        "fct-source": "src/PrioritySync-Internal-RoomCore.html#Claim",
        "fct-type": "data",
        "title": "Claim"
      },
      "index": {
        "description": "Claim or attempt to acquire or release Room",
        "hierarchy": "PrioritySync Internal Room",
        "module": "PrioritySync.Internal.Room",
        "name": "Claim",
        "normalized": "",
        "package": "priority-sync",
        "partial": "Claim",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Room.html#t:ClaimMode",
      "description": {
        "fct-module": "PrioritySync.Internal.Room",
        "fct-package": "priority-sync",
        "fct-signature": "data",
        "fct-source": "src/PrioritySync-Internal-RoomCore.html#ClaimMode",
        "fct-type": "data",
        "title": "ClaimMode"
      },
      "index": {
        "description": "",
        "hierarchy": "PrioritySync Internal Room",
        "module": "PrioritySync.Internal.Room",
        "name": "ClaimMode",
        "normalized": "",
        "package": "priority-sync",
        "partial": "Claim Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Room.html#t:Room",
      "description": {
        "fct-descr": "\u003cp\u003eA resource pool, parameterized against arbitrary user data.\n\u003c/p\u003e",
        "fct-module": "PrioritySync.Internal.Room",
        "fct-package": "priority-sync",
        "fct-signature": "data",
        "fct-source": "src/PrioritySync-Internal-RoomCore.html#Room",
        "fct-type": "data",
        "title": "Room"
      },
      "index": {
        "description": "resource pool parameterized against arbitrary user data",
        "hierarchy": "PrioritySync Internal Room",
        "module": "PrioritySync.Internal.Room",
        "name": "Room",
        "normalized": "",
        "package": "priority-sync",
        "partial": "Room",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Room.html#v:Acquire",
      "description": {
        "fct-module": "PrioritySync.Internal.Room",
        "fct-package": "priority-sync",
        "fct-signature": "Acquire",
        "fct-source": "src/PrioritySync-Internal-RoomCore.html#ClaimMode",
        "fct-type": "function",
        "title": "Acquire"
      },
      "index": {
        "description": "",
        "hierarchy": "PrioritySync Internal Room",
        "module": "PrioritySync.Internal.Room",
        "name": "Acquire",
        "normalized": "",
        "package": "priority-sync",
        "partial": "Acquire",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Room.html#v:Release",
      "description": {
        "fct-module": "PrioritySync.Internal.Room",
        "fct-package": "priority-sync",
        "fct-signature": "Release",
        "fct-source": "src/PrioritySync-Internal-RoomCore.html#ClaimMode",
        "fct-type": "function",
        "title": "Release"
      },
      "index": {
        "description": "",
        "hierarchy": "PrioritySync Internal Room",
        "module": "PrioritySync.Internal.Room",
        "name": "Release",
        "normalized": "",
        "package": "priority-sync",
        "partial": "Release",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Room.html#v:approve",
      "description": {
        "fct-descr": "\u003cp\u003eApprove a claim.  This actually acquires or releases a \u003ccode\u003e\u003ca\u003eRoom\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "PrioritySync.Internal.Room",
        "fct-package": "priority-sync",
        "fct-signature": "Claim u -\u003e STM ()",
        "fct-source": "src/PrioritySync-Internal-RoomCore.html#approve",
        "fct-type": "function",
        "title": "approve"
      },
      "index": {
        "description": "Approve claim This actually acquires or releases Room",
        "hierarchy": "PrioritySync Internal Room",
        "module": "PrioritySync.Internal.Room",
        "name": "approve",
        "normalized": "Claim a-\u003eSTM()",
        "package": "priority-sync",
        "partial": "",
        "signature": "Claim u-\u003eSTM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Room.html#v:approveClaims",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eapprove\u003c/a\u003e\u003c/code\u003e some claims according to their constraints.\n\u003c/p\u003e",
        "fct-module": "PrioritySync.Internal.Room",
        "fct-package": "priority-sync",
        "fct-signature": "[Claim u] -\u003e STM ()",
        "fct-source": "src/PrioritySync-Internal-RoomConstraint.html#approveClaims",
        "fct-type": "function",
        "title": "approveClaims"
      },
      "index": {
        "description": "approve some claims according to their constraints",
        "hierarchy": "PrioritySync Internal Room",
        "module": "PrioritySync.Internal.Room",
        "name": "approveClaims",
        "normalized": "[Claim a]-\u003eSTM()",
        "package": "priority-sync",
        "partial": "Claims",
        "signature": "[Claim u]-\u003eSTM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Room.html#v:claim",
      "description": {
        "fct-descr": "\u003cp\u003eTemporarily \u003ccode\u003e\u003ca\u003eAcquire\u003c/a\u003e\u003c/code\u003e, and then release, or \u003ccode\u003e\u003ca\u003eRelease\u003c/a\u003e\u003c/code\u003e, and then acquire, some \u003ccode\u003e\u003ca\u003eRoom\u003c/a\u003e\u003c/code\u003es for the duration of a critical section.\n A simple example where a room might be used to prevent interleaving of \u003ccode\u003estdout\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e room \u003c- newRoom (MaxThreads 1)\n forkIO $ claim Acquire (Default,room) $ putStrLn \"Hello World!\"\n forkIO $ claim Acquire (Default,room) $ putStrLn \"Foo!  Bar!\"\n\u003c/pre\u003e",
        "fct-module": "PrioritySync.Internal.Room",
        "fct-package": "priority-sync",
        "fct-signature": "ClaimMode -\u003e c -\u003e IO a -\u003e IO a",
        "fct-source": "src/PrioritySync-Internal-Room.html#claim",
        "fct-type": "function",
        "title": "claim"
      },
      "index": {
        "description": "Temporarily Acquire and then release or Release and then acquire some Room for the duration of critical section simple example where room might be used to prevent interleaving of stdout room newRoom MaxThreads forkIO claim Acquire Default room putStrLn Hello World forkIO claim Acquire Default room putStrLn Foo Bar",
        "hierarchy": "PrioritySync Internal Room",
        "module": "PrioritySync.Internal.Room",
        "name": "claim",
        "normalized": "ClaimMode-\u003ea-\u003eIO b-\u003eIO b",
        "package": "priority-sync",
        "partial": "",
        "signature": "ClaimMode-\u003ec-\u003eIO a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Room.html#v:claimedRoom",
      "description": {
        "fct-descr": "\u003cp\u003eGet the \u003ccode\u003e\u003ca\u003eRoom\u003c/a\u003e\u003c/code\u003e target of a \u003ccode\u003e\u003ca\u003eClaim\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "PrioritySync.Internal.Room",
        "fct-package": "priority-sync",
        "fct-signature": "Claim u -\u003e Room u",
        "fct-source": "src/PrioritySync-Internal-RoomCore.html#claimedRoom",
        "fct-type": "function",
        "title": "claimedRoom"
      },
      "index": {
        "description": "Get the Room target of Claim",
        "hierarchy": "PrioritySync Internal Room",
        "module": "PrioritySync.Internal.Room",
        "name": "claimedRoom",
        "normalized": "Claim a-\u003eRoom a",
        "package": "priority-sync",
        "partial": "Room",
        "signature": "Claim u-\u003eRoom u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Room.html#v:claimedThread",
      "description": {
        "fct-descr": "\u003cp\u003eGet the thread attempting a \u003ccode\u003e\u003ca\u003eClaim\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "PrioritySync.Internal.Room",
        "fct-package": "priority-sync",
        "fct-signature": "Claim u -\u003e ThreadId",
        "fct-source": "src/PrioritySync-Internal-RoomCore.html#claimedThread",
        "fct-type": "function",
        "title": "claimedThread"
      },
      "index": {
        "description": "Get the thread attempting Claim",
        "hierarchy": "PrioritySync Internal Room",
        "module": "PrioritySync.Internal.Room",
        "name": "claimedThread",
        "normalized": "Claim a-\u003eThreadId",
        "package": "priority-sync",
        "partial": "Thread",
        "signature": "Claim u-\u003eThreadId"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Room.html#v:inUse",
      "description": {
        "fct-descr": "\u003cp\u003eGet all \u003ccode\u003e\u003ca\u003eThreadId\u003c/a\u003e\u003c/code\u003es that are currently claiming this \u003ccode\u003e\u003ca\u003eRoom\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "PrioritySync.Internal.Room",
        "fct-package": "priority-sync",
        "fct-signature": "Room u -\u003e STM (Set ThreadId)",
        "fct-source": "src/PrioritySync-Internal-RoomCore.html#inUse",
        "fct-type": "function",
        "title": "inUse"
      },
      "index": {
        "description": "Get all ThreadId that are currently claiming this Room",
        "hierarchy": "PrioritySync Internal Room",
        "module": "PrioritySync.Internal.Room",
        "name": "inUse",
        "normalized": "Room a-\u003eSTM(Set ThreadId)",
        "package": "priority-sync",
        "partial": "Use",
        "signature": "Room u-\u003eSTM(Set ThreadId)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Room.html#v:isEmpty",
      "description": {
        "fct-descr": "\u003cp\u003eTrue iff a Room is empty.\n\u003c/p\u003e",
        "fct-module": "PrioritySync.Internal.Room",
        "fct-package": "priority-sync",
        "fct-signature": "Room u -\u003e STM Bool",
        "fct-source": "src/PrioritySync-Internal-RoomCore.html#isEmpty",
        "fct-type": "function",
        "title": "isEmpty"
      },
      "index": {
        "description": "True iff Room is empty",
        "hierarchy": "PrioritySync Internal Room",
        "module": "PrioritySync.Internal.Room",
        "name": "isEmpty",
        "normalized": "Room a-\u003eSTM Bool",
        "package": "priority-sync",
        "partial": "Empty",
        "signature": "Room u-\u003eSTM Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Room.html#v:newRoom",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new Room with some arbitrary user data.\n\u003c/p\u003e",
        "fct-module": "PrioritySync.Internal.Room",
        "fct-package": "priority-sync",
        "fct-signature": "u -\u003e IO (Room u)",
        "fct-source": "src/PrioritySync-Internal-RoomCore.html#newRoom",
        "fct-type": "function",
        "title": "newRoom"
      },
      "index": {
        "description": "Create new Room with some arbitrary user data",
        "hierarchy": "PrioritySync Internal Room",
        "module": "PrioritySync.Internal.Room",
        "name": "newRoom",
        "normalized": "a-\u003eIO(Room a)",
        "package": "priority-sync",
        "partial": "Room",
        "signature": "u-\u003eIO(Room u)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Room.html#v:userData",
      "description": {
        "fct-descr": "\u003cp\u003eGet the user data associated with a \u003ccode\u003e\u003ca\u003eRoom\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "PrioritySync.Internal.Room",
        "fct-package": "priority-sync",
        "fct-signature": "Room u -\u003e u",
        "fct-source": "src/PrioritySync-Internal-RoomCore.html#userData",
        "fct-type": "function",
        "title": "userData"
      },
      "index": {
        "description": "Get the user data associated with Room",
        "hierarchy": "PrioritySync Internal Room",
        "module": "PrioritySync.Internal.Room",
        "name": "userData",
        "normalized": "Room a-\u003ea",
        "package": "priority-sync",
        "partial": "Data",
        "signature": "Room u-\u003eu"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-RoomConstraint.html#",
      "description": {
        "fct-module": "PrioritySync.Internal.RoomConstraint",
        "fct-package": "priority-sync",
        "fct-signature": "module",
        "fct-source": "src/PrioritySync-Internal-RoomConstraint.html",
        "fct-type": "module",
        "title": "RoomConstraint"
      },
      "index": {
        "description": "",
        "hierarchy": "PrioritySync Internal RoomConstraint",
        "module": "PrioritySync.Internal.RoomConstraint",
        "name": "RoomConstraint",
        "normalized": "",
        "package": "priority-sync",
        "partial": "Room Constraint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-RoomConstraint.html#t:MaxThreads",
      "description": {
        "fct-descr": "\u003cp\u003eA maximum limit on the number of threads allowed to claim a room.\n\u003c/p\u003e",
        "fct-module": "PrioritySync.Internal.RoomConstraint",
        "fct-package": "priority-sync",
        "fct-signature": "newtype",
        "fct-source": "src/PrioritySync-Internal-RoomConstraint.html#MaxThreads",
        "fct-type": "newtype",
        "title": "MaxThreads"
      },
      "index": {
        "description": "maximum limit on the number of threads allowed to claim room",
        "hierarchy": "PrioritySync Internal RoomConstraint",
        "module": "PrioritySync.Internal.RoomConstraint",
        "name": "MaxThreads",
        "normalized": "",
        "package": "priority-sync",
        "partial": "Max Threads",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-RoomConstraint.html#t:RoomConstraint",
      "description": {
        "fct-module": "PrioritySync.Internal.RoomConstraint",
        "fct-package": "priority-sync",
        "fct-signature": "class",
        "fct-source": "src/PrioritySync-Internal-RoomConstraint.html#RoomConstraint",
        "fct-type": "class",
        "title": "RoomConstraint"
      },
      "index": {
        "description": "",
        "hierarchy": "PrioritySync Internal RoomConstraint",
        "module": "PrioritySync.Internal.RoomConstraint",
        "name": "RoomConstraint",
        "normalized": "",
        "package": "priority-sync",
        "partial": "Room Constraint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-RoomConstraint.html#v:MaxThreads",
      "description": {
        "fct-module": "PrioritySync.Internal.RoomConstraint",
        "fct-package": "priority-sync",
        "fct-signature": "MaxThreads Int",
        "fct-source": "src/PrioritySync-Internal-RoomConstraint.html#MaxThreads",
        "fct-type": "function",
        "title": "MaxThreads"
      },
      "index": {
        "description": "",
        "hierarchy": "PrioritySync Internal RoomConstraint",
        "module": "PrioritySync.Internal.RoomConstraint",
        "name": "MaxThreads",
        "normalized": "",
        "package": "priority-sync",
        "partial": "Max Threads",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-RoomConstraint.html#v:approveClaims",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eapprove\u003c/a\u003e\u003c/code\u003e some claims according to their constraints.\n\u003c/p\u003e",
        "fct-module": "PrioritySync.Internal.RoomConstraint",
        "fct-package": "priority-sync",
        "fct-signature": "[Claim u] -\u003e STM ()",
        "fct-source": "src/PrioritySync-Internal-RoomConstraint.html#approveClaims",
        "fct-type": "function",
        "title": "approveClaims"
      },
      "index": {
        "description": "approve some claims according to their constraints",
        "hierarchy": "PrioritySync Internal RoomConstraint",
        "module": "PrioritySync.Internal.RoomConstraint",
        "name": "approveClaims",
        "normalized": "[Claim a]-\u003eSTM()",
        "package": "priority-sync",
        "partial": "Claims",
        "signature": "[Claim u]-\u003eSTM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-RoomConstraint.html#v:approveConstraint",
      "description": {
        "fct-descr": "\u003cp\u003eShould either \u003ccode\u003e\u003ca\u003eapprove\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eretry\u003c/a\u003e\u003c/code\u003e each claim.\n\u003c/p\u003e",
        "fct-module": "PrioritySync.Internal.RoomConstraint",
        "fct-package": "priority-sync",
        "fct-signature": "Claim a -\u003e u -\u003e STM ()",
        "fct-source": "src/PrioritySync-Internal-RoomConstraint.html#approveConstraint",
        "fct-type": "method",
        "title": "approveConstraint"
      },
      "index": {
        "description": "Should either approve or retry each claim",
        "hierarchy": "PrioritySync Internal RoomConstraint",
        "module": "PrioritySync.Internal.RoomConstraint",
        "name": "approveConstraint",
        "normalized": "Claim a-\u003eb-\u003eSTM()",
        "package": "priority-sync",
        "partial": "Constraint",
        "signature": "Claim a-\u003eu-\u003eSTM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-RoomGroup.html#",
      "description": {
        "fct-module": "PrioritySync.Internal.RoomGroup",
        "fct-package": "priority-sync",
        "fct-signature": "module",
        "fct-source": "src/PrioritySync-Internal-RoomGroup.html",
        "fct-type": "module",
        "title": "RoomGroup"
      },
      "index": {
        "description": "",
        "hierarchy": "PrioritySync Internal RoomGroup",
        "module": "PrioritySync.Internal.RoomGroup",
        "name": "RoomGroup",
        "normalized": "",
        "package": "priority-sync",
        "partial": "Room Group",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-RoomGroup.html#t:RoomGroup",
      "description": {
        "fct-module": "PrioritySync.Internal.RoomGroup",
        "fct-package": "priority-sync",
        "fct-signature": "class",
        "fct-source": "src/PrioritySync-Internal-RoomGroup.html#RoomGroup",
        "fct-type": "class",
        "title": "RoomGroup"
      },
      "index": {
        "description": "",
        "hierarchy": "PrioritySync Internal RoomGroup",
        "module": "PrioritySync.Internal.RoomGroup",
        "name": "RoomGroup",
        "normalized": "",
        "package": "priority-sync",
        "partial": "Room Group",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-RoomGroup.html#v:roomsOf",
      "description": {
        "fct-module": "PrioritySync.Internal.RoomGroup",
        "fct-package": "priority-sync",
        "fct-signature": "m -\u003e [Room (UserData m)]",
        "fct-source": "src/PrioritySync-Internal-RoomGroup.html#roomsOf",
        "fct-type": "method",
        "title": "roomsOf"
      },
      "index": {
        "description": "",
        "hierarchy": "PrioritySync Internal RoomGroup",
        "module": "PrioritySync.Internal.RoomGroup",
        "name": "roomsOf",
        "normalized": "a-\u003e[Room(UserData a)]",
        "package": "priority-sync",
        "partial": "Of",
        "signature": "m-\u003e[Room(UserData m)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Schedule.html#",
      "description": {
        "fct-module": "PrioritySync.Internal.Schedule",
        "fct-package": "priority-sync",
        "fct-signature": "module",
        "fct-source": "src/PrioritySync-Internal-Schedule.html",
        "fct-type": "module",
        "title": "Schedule"
      },
      "index": {
        "description": "",
        "hierarchy": "PrioritySync Internal Schedule",
        "module": "PrioritySync.Internal.Schedule",
        "name": "Schedule",
        "normalized": "",
        "package": "priority-sync",
        "partial": "Schedule",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Schedule.html#t:Schedule",
      "description": {
        "fct-descr": "\u003cp\u003eSchedule a task to run from a prioritized \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003e.  The task will wait until it arrives at (or, with failover, near) the top of queue.  Typical usage:\n\u003c/p\u003e\u003cpre\u003e Schedule q 2 room1\n\u003c/pre\u003e\u003cp\u003eOnly the rooms inside the \u003ccode\u003e\u003ca\u003eSchedule\u003c/a\u003e\u003c/code\u003e declaration are claimed with scheduling.  If access to a room doesn't need to be prioritized, it can be set outside\n the schedule:\n\u003c/p\u003e\u003cpre\u003e (Schedule q 2 room1,room2)\n\u003c/pre\u003e",
        "fct-module": "PrioritySync.Internal.Schedule",
        "fct-package": "priority-sync",
        "fct-signature": "data",
        "fct-source": "src/PrioritySync-Internal-Schedule.html#Schedule",
        "fct-type": "data",
        "title": "Schedule"
      },
      "index": {
        "description": "Schedule task to run from prioritized Queue The task will wait until it arrives at or with failover near the top of queue Typical usage Schedule room1 Only the rooms inside the Schedule declaration are claimed with scheduling If access to room doesn need to be prioritized it can be set outside the schedule Schedule room1 room2",
        "hierarchy": "PrioritySync Internal Schedule",
        "module": "PrioritySync.Internal.Schedule",
        "name": "Schedule",
        "normalized": "",
        "package": "priority-sync",
        "partial": "Schedule",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Schedule.html#v:Schedule",
      "description": {
        "fct-module": "PrioritySync.Internal.Schedule",
        "fct-package": "priority-sync",
        "fct-signature": "Schedule (Queue p) p c",
        "fct-source": "src/PrioritySync-Internal-Schedule.html#Schedule",
        "fct-type": "function",
        "title": "Schedule"
      },
      "index": {
        "description": "",
        "hierarchy": "PrioritySync Internal Schedule",
        "module": "PrioritySync.Internal.Schedule",
        "name": "Schedule",
        "normalized": "",
        "package": "priority-sync",
        "partial": "Schedule",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-TaskPool.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA prioritized TaskPool.  This consists of a \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003e, which prioritizes tasks, and a \u003ccode\u003e\u003ca\u003eRoom\u003c/a\u003e\u003c/code\u003e which restricts the number of tasks that may execute at one time.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "PrioritySync.Internal.TaskPool",
        "fct-package": "priority-sync",
        "fct-signature": "module",
        "fct-source": "src/PrioritySync-Internal-TaskPool.html",
        "fct-type": "module",
        "title": "TaskPool"
      },
      "index": {
        "description": "prioritized TaskPool This consists of Queue which prioritizes tasks and Room which restricts the number of tasks that may execute at one time",
        "hierarchy": "PrioritySync Internal TaskPool",
        "module": "PrioritySync.Internal.TaskPool",
        "name": "TaskPool",
        "normalized": "",
        "package": "priority-sync",
        "partial": "Task Pool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-TaskPool.html#t:TaskPool",
      "description": {
        "fct-module": "PrioritySync.Internal.TaskPool",
        "fct-package": "priority-sync",
        "fct-signature": "data",
        "fct-source": "src/PrioritySync-Internal-TaskPool.html#TaskPool",
        "fct-type": "data",
        "title": "TaskPool"
      },
      "index": {
        "description": "",
        "hierarchy": "PrioritySync Internal TaskPool",
        "module": "PrioritySync.Internal.TaskPool",
        "name": "TaskPool",
        "normalized": "",
        "package": "priority-sync",
        "partial": "Task Pool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-TaskPool.html#v:isEmpty",
      "description": {
        "fct-descr": "\u003cp\u003eTrue iff this \u003ccode\u003e\u003ca\u003eTaskPool\u003c/a\u003e\u003c/code\u003e is entirely empty and inactive.\n\u003c/p\u003e",
        "fct-module": "PrioritySync.Internal.TaskPool",
        "fct-package": "priority-sync",
        "fct-signature": "TaskPool p u -\u003e STM Bool",
        "fct-source": "src/PrioritySync-Internal-TaskPool.html#isEmpty",
        "fct-type": "function",
        "title": "isEmpty"
      },
      "index": {
        "description": "True iff this TaskPool is entirely empty and inactive",
        "hierarchy": "PrioritySync Internal TaskPool",
        "module": "PrioritySync.Internal.TaskPool",
        "name": "isEmpty",
        "normalized": "TaskPool a b-\u003eSTM Bool",
        "package": "priority-sync",
        "partial": "Empty",
        "signature": "TaskPool p u-\u003eSTM Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-TaskPool.html#v:newTaskPool",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eTaskPool\u003c/a\u003e\u003c/code\u003e.  \u003ccode\u003e\u003ca\u003eTaskPool\u003c/a\u003e\u003c/code\u003es begin stopped, use \u003ccode\u003e\u003ca\u003estartQueue\u003c/a\u003e\u003c/code\u003e to start.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e A \u003ccode\u003e\u003ca\u003eQueueConfigurationRecord\u003c/a\u003e\u003c/code\u003e for the backing \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003e.  A typical value is \u003ccode\u003e\u003ca\u003efair_queue_configuration\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e The allowed number of threads that can access the \u003ccode\u003e\u003ca\u003eTaskPool\u003c/a\u003e\u003c/code\u003e simultaneously.\n\u003c/li\u003e\u003cli\u003e The user data for the backing \u003ccode\u003e\u003ca\u003eRoom\u003c/a\u003e\u003c/code\u003e.  This can be \u003ccode\u003e()\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eConsider using \u003ccode\u003e\u003ca\u003esimpleTaskPool\u003c/a\u003e\u003c/code\u003e if you have no special needs.\n\u003c/p\u003e",
        "fct-module": "PrioritySync.Internal.TaskPool",
        "fct-package": "priority-sync",
        "fct-signature": "QueueConfigurationRecord p -\u003e Int -\u003e u -\u003e IO (TaskPool p u)",
        "fct-source": "src/PrioritySync-Internal-TaskPool.html#newTaskPool",
        "fct-type": "function",
        "title": "newTaskPool"
      },
      "index": {
        "description": "Create new TaskPool TaskPool begin stopped use startQueue to start QueueConfigurationRecord for the backing Queue typical value is fair queue configuration The allowed number of threads that can access the TaskPool simultaneously The user data for the backing Room This can be Consider using simpleTaskPool if you have no special needs",
        "hierarchy": "PrioritySync Internal TaskPool",
        "module": "PrioritySync.Internal.TaskPool",
        "name": "newTaskPool",
        "normalized": "QueueConfigurationRecord a-\u003eInt-\u003eb-\u003eIO(TaskPool a b)",
        "package": "priority-sync",
        "partial": "Task Pool",
        "signature": "QueueConfigurationRecord p-\u003eInt-\u003eu-\u003eIO(TaskPool p u)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-TaskPool.html#v:poolQueue",
      "description": {
        "fct-descr": "\u003cp\u003eGet the \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003e that admits new tasks to this \u003ccode\u003e\u003ca\u003eTaskPool\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "PrioritySync.Internal.TaskPool",
        "fct-package": "priority-sync",
        "fct-signature": "TaskPool p u -\u003e Queue p",
        "fct-source": "src/PrioritySync-Internal-TaskPool.html#poolQueue",
        "fct-type": "function",
        "title": "poolQueue"
      },
      "index": {
        "description": "Get the Queue that admits new tasks to this TaskPool",
        "hierarchy": "PrioritySync Internal TaskPool",
        "module": "PrioritySync.Internal.TaskPool",
        "name": "poolQueue",
        "normalized": "TaskPool a b-\u003eQueue a",
        "package": "priority-sync",
        "partial": "Queue",
        "signature": "TaskPool p u-\u003eQueue p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-TaskPool.html#v:poolRoom",
      "description": {
        "fct-descr": "\u003cp\u003eGet the \u003ccode\u003e\u003ca\u003eRoom\u003c/a\u003e\u003c/code\u003e that primarily constrains this \u003ccode\u003e\u003ca\u003eTaskPool\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "PrioritySync.Internal.TaskPool",
        "fct-package": "priority-sync",
        "fct-signature": "TaskPool p u -\u003e Room (TaskPoolConstraint u)",
        "fct-source": "src/PrioritySync-Internal-TaskPool.html#poolRoom",
        "fct-type": "function",
        "title": "poolRoom"
      },
      "index": {
        "description": "Get the Room that primarily constrains this TaskPool",
        "hierarchy": "PrioritySync Internal TaskPool",
        "module": "PrioritySync.Internal.TaskPool",
        "name": "poolRoom",
        "normalized": "TaskPool a b-\u003eRoom(TaskPoolConstraint b)",
        "package": "priority-sync",
        "partial": "Room",
        "signature": "TaskPool p u-\u003eRoom(TaskPoolConstraint u)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-TaskPool.html#v:schedule",
      "description": {
        "fct-descr": "\u003cp\u003eA prioritized \u003ccode\u003eClaimContext\u003c/code\u003e for a task pool.\n\u003c/p\u003e",
        "fct-module": "PrioritySync.Internal.TaskPool",
        "fct-package": "priority-sync",
        "fct-signature": "TaskPool p u -\u003e p -\u003e Schedule p (Constrained (TaskPoolConstraint u), Room (TaskPoolConstraint u))",
        "fct-source": "src/PrioritySync-Internal-TaskPool.html#schedule",
        "fct-type": "function",
        "title": "schedule"
      },
      "index": {
        "description": "prioritized ClaimContext for task pool",
        "hierarchy": "PrioritySync Internal TaskPool",
        "module": "PrioritySync.Internal.TaskPool",
        "name": "schedule",
        "normalized": "TaskPool a b-\u003ea-\u003eSchedule a(Constrained(TaskPoolConstraint b),Room(TaskPoolConstraint b))",
        "package": "priority-sync",
        "partial": "",
        "signature": "TaskPool p u-\u003ep-\u003eSchedule p(Constrained(TaskPoolConstraint u),Room(TaskPoolConstraint u))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-TaskPool.html#v:simpleTaskPool",
      "description": {
        "fct-descr": "\u003cp\u003eJust create a new \u003ccode\u003e\u003ca\u003eTaskPool\u003c/a\u003e\u003c/code\u003e.  The task pool is constrained by the number of capabilities indicated by \u003ccode\u003e\u003ca\u003enumCapabilities\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "PrioritySync.Internal.TaskPool",
        "fct-package": "priority-sync",
        "fct-signature": "IO (TaskPool p ())",
        "fct-source": "src/PrioritySync-Internal-TaskPool.html#simpleTaskPool",
        "fct-type": "function",
        "title": "simpleTaskPool"
      },
      "index": {
        "description": "Just create new TaskPool The task pool is constrained by the number of capabilities indicated by numCapabilities",
        "hierarchy": "PrioritySync Internal TaskPool",
        "module": "PrioritySync.Internal.TaskPool",
        "name": "simpleTaskPool",
        "normalized": "IO(TaskPool a())",
        "package": "priority-sync",
        "partial": "Task Pool",
        "signature": "IO(TaskPool p())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-TaskPool.html#v:startQueue",
      "description": {
        "fct-descr": "\u003cp\u003eStart the \u003ccode\u003e\u003ca\u003eTaskPool\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "PrioritySync.Internal.TaskPool",
        "fct-package": "priority-sync",
        "fct-signature": "TaskPool p u -\u003e STM ()",
        "fct-source": "src/PrioritySync-Internal-TaskPool.html#startQueue",
        "fct-type": "function",
        "title": "startQueue"
      },
      "index": {
        "description": "Start the TaskPool",
        "hierarchy": "PrioritySync Internal TaskPool",
        "module": "PrioritySync.Internal.TaskPool",
        "name": "startQueue",
        "normalized": "TaskPool a b-\u003eSTM()",
        "package": "priority-sync",
        "partial": "Queue",
        "signature": "TaskPool p u-\u003eSTM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-TaskPool.html#v:stopQueue",
      "description": {
        "fct-descr": "\u003cp\u003eStop all activity on this \u003ccode\u003e\u003ca\u003eTaskPool\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "PrioritySync.Internal.TaskPool",
        "fct-package": "priority-sync",
        "fct-signature": "TaskPool p u -\u003e STM ()",
        "fct-source": "src/PrioritySync-Internal-TaskPool.html#stopQueue",
        "fct-type": "function",
        "title": "stopQueue"
      },
      "index": {
        "description": "Stop all activity on this TaskPool",
        "hierarchy": "PrioritySync Internal TaskPool",
        "module": "PrioritySync.Internal.TaskPool",
        "name": "stopQueue",
        "normalized": "TaskPool a b-\u003eSTM()",
        "package": "priority-sync",
        "partial": "Queue",
        "signature": "TaskPool p u-\u003eSTM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-TaskPool.html#v:waitUntilFinished",
      "description": {
        "fct-descr": "\u003cp\u003eWait until a queue is finished.\n\u003c/p\u003e",
        "fct-module": "PrioritySync.Internal.TaskPool",
        "fct-package": "priority-sync",
        "fct-signature": "TaskPool p u -\u003e IO ()",
        "fct-source": "src/PrioritySync-Internal-TaskPool.html#waitUntilFinished",
        "fct-type": "function",
        "title": "waitUntilFinished"
      },
      "index": {
        "description": "Wait until queue is finished",
        "hierarchy": "PrioritySync Internal TaskPool",
        "module": "PrioritySync.Internal.TaskPool",
        "name": "waitUntilFinished",
        "normalized": "TaskPool a b-\u003eIO()",
        "package": "priority-sync",
        "partial": "Until Finished",
        "signature": "TaskPool p u-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Unconstrained.html#",
      "description": {
        "fct-module": "PrioritySync.Internal.Unconstrained",
        "fct-package": "priority-sync",
        "fct-signature": "module",
        "fct-source": "src/PrioritySync-Internal-Unconstrained.html",
        "fct-type": "module",
        "title": "Unconstrained"
      },
      "index": {
        "description": "",
        "hierarchy": "PrioritySync Internal Unconstrained",
        "module": "PrioritySync.Internal.Unconstrained",
        "name": "Unconstrained",
        "normalized": "",
        "package": "priority-sync",
        "partial": "Unconstrained",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Unconstrained.html#t:Unconstrained",
      "description": {
        "fct-descr": "\u003cp\u003eDon't check any \u003ccode\u003eRoomConstraint\u003c/code\u003es when acquiring a \u003ccode\u003e\u003ca\u003eRoom\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "PrioritySync.Internal.Unconstrained",
        "fct-package": "priority-sync",
        "fct-signature": "data",
        "fct-source": "src/PrioritySync-Internal-Unconstrained.html#Unconstrained",
        "fct-type": "data",
        "title": "Unconstrained"
      },
      "index": {
        "description": "Don check any RoomConstraint when acquiring Room",
        "hierarchy": "PrioritySync Internal Unconstrained",
        "module": "PrioritySync.Internal.Unconstrained",
        "name": "Unconstrained",
        "normalized": "",
        "package": "priority-sync",
        "partial": "Unconstrained",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Unconstrained.html#v:Unconstrained",
      "description": {
        "fct-module": "PrioritySync.Internal.Unconstrained",
        "fct-package": "priority-sync",
        "fct-signature": "Unconstrained",
        "fct-source": "src/PrioritySync-Internal-Unconstrained.html#Unconstrained",
        "fct-type": "function",
        "title": "Unconstrained"
      },
      "index": {
        "description": "",
        "hierarchy": "PrioritySync Internal Unconstrained",
        "module": "PrioritySync.Internal.Unconstrained",
        "name": "Unconstrained",
        "normalized": "",
        "package": "priority-sync",
        "partial": "Unconstrained",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-UserData.html#",
      "description": {
        "fct-module": "PrioritySync.Internal.UserData",
        "fct-package": "priority-sync",
        "fct-signature": "module",
        "fct-source": "src/PrioritySync-Internal-UserData.html",
        "fct-type": "module",
        "title": "UserData"
      },
      "index": {
        "description": "",
        "hierarchy": "PrioritySync Internal UserData",
        "module": "PrioritySync.Internal.UserData",
        "name": "UserData",
        "normalized": "",
        "package": "priority-sync",
        "partial": "User Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-UserData.html#t:UserData",
      "description": {
        "fct-module": "PrioritySync.Internal.UserData",
        "fct-package": "priority-sync",
        "fct-signature": "UserData",
        "fct-type": "function",
        "title": "UserData"
      },
      "index": {
        "description": "",
        "hierarchy": "PrioritySync Internal UserData",
        "module": "PrioritySync.Internal.UserData",
        "name": "UserData",
        "normalized": "",
        "package": "priority-sync",
        "partial": "User Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-PrioritySync.html#",
      "description": {
        "fct-module": "PrioritySync.PrioritySync",
        "fct-package": "priority-sync",
        "fct-signature": "module",
        "fct-source": "src/PrioritySync-PrioritySync.html",
        "fct-type": "module",
        "title": "PrioritySync"
      },
      "index": {
        "description": "",
        "hierarchy": "PrioritySync PrioritySync",
        "module": "PrioritySync.PrioritySync",
        "name": "PrioritySync",
        "normalized": "",
        "package": "priority-sync",
        "partial": "Priority Sync",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-PrioritySync.html#t:ClaimMode",
      "description": {
        "fct-module": "PrioritySync.PrioritySync",
        "fct-package": "priority-sync",
        "fct-signature": "data",
        "fct-source": "src/PrioritySync-Internal-RoomCore.html#ClaimMode",
        "fct-type": "data",
        "title": "ClaimMode"
      },
      "index": {
        "description": "",
        "hierarchy": "PrioritySync PrioritySync",
        "module": "PrioritySync.PrioritySync",
        "name": "ClaimMode",
        "normalized": "",
        "package": "priority-sync",
        "partial": "Claim Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-PrioritySync.html#t:Constrained",
      "description": {
        "fct-descr": "\u003cp\u003eRequire that all \u003ccode\u003e\u003ca\u003eRoomConstraint\u003c/a\u003e\u003c/code\u003es be satisfied when acquiring a \u003ccode\u003e\u003ca\u003eRoom\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "PrioritySync.PrioritySync",
        "fct-package": "priority-sync",
        "fct-signature": "data",
        "fct-source": "src/PrioritySync-Internal-Constrained.html#Constrained",
        "fct-type": "data",
        "title": "Constrained"
      },
      "index": {
        "description": "Require that all RoomConstraint be satisfied when acquiring Room",
        "hierarchy": "PrioritySync PrioritySync",
        "module": "PrioritySync.PrioritySync",
        "name": "Constrained",
        "normalized": "",
        "package": "priority-sync",
        "partial": "Constrained",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-PrioritySync.html#t:MaxThreads",
      "description": {
        "fct-descr": "\u003cp\u003eA maximum limit on the number of threads allowed to claim a room.\n\u003c/p\u003e",
        "fct-module": "PrioritySync.PrioritySync",
        "fct-package": "priority-sync",
        "fct-signature": "newtype",
        "fct-source": "src/PrioritySync-Internal-RoomConstraint.html#MaxThreads",
        "fct-type": "newtype",
        "title": "MaxThreads"
      },
      "index": {
        "description": "maximum limit on the number of threads allowed to claim room",
        "hierarchy": "PrioritySync PrioritySync",
        "module": "PrioritySync.PrioritySync",
        "name": "MaxThreads",
        "normalized": "",
        "package": "priority-sync",
        "partial": "Max Threads",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-PrioritySync.html#t:Occupancy",
      "description": {
        "fct-descr": "\u003cp\u003eA convenience class to observe the currently running occupants of a \u003ccode\u003eRoom\u003c/code\u003e or \u003ccode\u003eTaskPool\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "PrioritySync.PrioritySync",
        "fct-package": "priority-sync",
        "fct-signature": "class",
        "fct-source": "src/PrioritySync-PrioritySync.html#Occupancy",
        "fct-type": "class",
        "title": "Occupancy"
      },
      "index": {
        "description": "convenience class to observe the currently running occupants of Room or TaskPool",
        "hierarchy": "PrioritySync PrioritySync",
        "module": "PrioritySync.PrioritySync",
        "name": "Occupancy",
        "normalized": "",
        "package": "priority-sync",
        "partial": "Occupancy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-PrioritySync.html#t:Prioritized",
      "description": {
        "fct-descr": "\u003cp\u003eReprioritize a task.  This has no effect on a target that has already left the queue.\n\u003c/p\u003e",
        "fct-module": "PrioritySync.PrioritySync",
        "fct-package": "priority-sync",
        "fct-signature": "class",
        "fct-source": "src/PrioritySync-Internal-Prioritized.html#Prioritized",
        "fct-type": "class",
        "title": "Prioritized"
      },
      "index": {
        "description": "Reprioritize task This has no effect on target that has already left the queue",
        "hierarchy": "PrioritySync PrioritySync",
        "module": "PrioritySync.PrioritySync",
        "name": "Prioritized",
        "normalized": "",
        "package": "priority-sync",
        "partial": "Prioritized",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-PrioritySync.html#t:QueueConfigurationRecord",
      "description": {
        "fct-descr": "\u003cp\u003eConfiguration options for a \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003e.  A \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003e blocks on a number of predicates when dispatching a job.  Generally, \u003ccode\u003e\u003ca\u003efair_queue_configuration\u003c/a\u003e\u003c/code\u003e\n should work well.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e A single STM predicate for the entire \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003e.  This blocks the entire \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003e until the predicate is satisfied.\n\u003c/li\u003e\u003cli\u003e A STM predicate parameterized by priority.  This blocks a single priority level, and the \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003e will skip all tasks at that priority.\n\u003c/li\u003e\u003cli\u003e Each task is itself an STM transaction, and can block itself.\n\u003c/li\u003e\u003cli\u003e Pure constraints on priority and ordering inversion.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eIf a task is blocked for any reason, the task is skipped and the next task attempted, in priority order.\n\u003c/p\u003e",
        "fct-module": "PrioritySync.PrioritySync",
        "fct-package": "priority-sync",
        "fct-signature": "data",
        "fct-source": "src/PrioritySync-Internal-Queue.html#QueueConfigurationRecord",
        "fct-type": "data",
        "title": "QueueConfigurationRecord"
      },
      "index": {
        "description": "Configuration options for Queue Queue blocks on number of predicates when dispatching job Generally fair queue configuration should work well single STM predicate for the entire Queue This blocks the entire Queue until the predicate is satisfied STM predicate parameterized by priority This blocks single priority level and the Queue will skip all tasks at that priority Each task is itself an STM transaction and can block itself Pure constraints on priority and ordering inversion If task is blocked for any reason the task is skipped and the next task attempted in priority order",
        "hierarchy": "PrioritySync PrioritySync",
        "module": "PrioritySync.PrioritySync",
        "name": "QueueConfigurationRecord",
        "normalized": "",
        "package": "priority-sync",
        "partial": "Queue Configuration Record",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-PrioritySync.html#t:QueueOrder",
      "description": {
        "fct-module": "PrioritySync.PrioritySync",
        "fct-package": "priority-sync",
        "fct-signature": "data",
        "fct-source": "src/PrioritySync-Internal-Queue.html#QueueOrder",
        "fct-type": "data",
        "title": "QueueOrder"
      },
      "index": {
        "description": "",
        "hierarchy": "PrioritySync PrioritySync",
        "module": "PrioritySync.PrioritySync",
        "name": "QueueOrder",
        "normalized": "",
        "package": "priority-sync",
        "partial": "Queue Order",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-PrioritySync.html#t:Room",
      "description": {
        "fct-descr": "\u003cp\u003eA resource pool, parameterized against arbitrary user data.\n\u003c/p\u003e",
        "fct-module": "PrioritySync.PrioritySync",
        "fct-package": "priority-sync",
        "fct-signature": "data",
        "fct-source": "src/PrioritySync-Internal-RoomCore.html#Room",
        "fct-type": "data",
        "title": "Room"
      },
      "index": {
        "description": "resource pool parameterized against arbitrary user data",
        "hierarchy": "PrioritySync PrioritySync",
        "module": "PrioritySync.PrioritySync",
        "name": "Room",
        "normalized": "",
        "package": "priority-sync",
        "partial": "Room",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-PrioritySync.html#t:TaskHandle",
      "description": {
        "fct-module": "PrioritySync.PrioritySync",
        "fct-package": "priority-sync",
        "fct-signature": "data",
        "fct-source": "src/PrioritySync-Internal-Dispatch.html#TaskHandle",
        "fct-type": "data",
        "title": "TaskHandle"
      },
      "index": {
        "description": "",
        "hierarchy": "PrioritySync PrioritySync",
        "module": "PrioritySync.PrioritySync",
        "name": "TaskHandle",
        "normalized": "",
        "package": "priority-sync",
        "partial": "Task Handle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-PrioritySync.html#t:TaskPool",
      "description": {
        "fct-module": "PrioritySync.PrioritySync",
        "fct-package": "priority-sync",
        "fct-signature": "data",
        "fct-source": "src/PrioritySync-Internal-TaskPool.html#TaskPool",
        "fct-type": "data",
        "title": "TaskPool"
      },
      "index": {
        "description": "",
        "hierarchy": "PrioritySync PrioritySync",
        "module": "PrioritySync.PrioritySync",
        "name": "TaskPool",
        "normalized": "",
        "package": "priority-sync",
        "partial": "Task Pool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-PrioritySync.html#t:Unconstrained",
      "description": {
        "fct-descr": "\u003cp\u003eDon't check any \u003ccode\u003eRoomConstraint\u003c/code\u003es when acquiring a \u003ccode\u003e\u003ca\u003eRoom\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "PrioritySync.PrioritySync",
        "fct-package": "priority-sync",
        "fct-signature": "data",
        "fct-source": "src/PrioritySync-Internal-Unconstrained.html#Unconstrained",
        "fct-type": "data",
        "title": "Unconstrained"
      },
      "index": {
        "description": "Don check any RoomConstraint when acquiring Room",
        "hierarchy": "PrioritySync PrioritySync",
        "module": "PrioritySync.PrioritySync",
        "name": "Unconstrained",
        "normalized": "",
        "package": "priority-sync",
        "partial": "Unconstrained",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-PrioritySync.html#v:Acquire",
      "description": {
        "fct-module": "PrioritySync.PrioritySync",
        "fct-package": "priority-sync",
        "fct-signature": "Acquire",
        "fct-source": "src/PrioritySync-Internal-RoomCore.html#ClaimMode",
        "fct-type": "function",
        "title": "Acquire"
      },
      "index": {
        "description": "",
        "hierarchy": "PrioritySync PrioritySync",
        "module": "PrioritySync.PrioritySync",
        "name": "Acquire",
        "normalized": "",
        "package": "priority-sync",
        "partial": "Acquire",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-PrioritySync.html#v:Constrained",
      "description": {
        "fct-module": "PrioritySync.PrioritySync",
        "fct-package": "priority-sync",
        "fct-signature": "Constrained",
        "fct-source": "src/PrioritySync-Internal-Constrained.html#Constrained",
        "fct-type": "function",
        "title": "Constrained"
      },
      "index": {
        "description": "",
        "hierarchy": "PrioritySync PrioritySync",
        "module": "PrioritySync.PrioritySync",
        "name": "Constrained",
        "normalized": "",
        "package": "priority-sync",
        "partial": "Constrained",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-PrioritySync.html#v:FIFO",
      "description": {
        "fct-module": "PrioritySync.PrioritySync",
        "fct-package": "priority-sync",
        "fct-signature": "FIFO",
        "fct-source": "src/PrioritySync-Internal-Queue.html#QueueOrder",
        "fct-type": "function",
        "title": "FIFO"
      },
      "index": {
        "description": "",
        "hierarchy": "PrioritySync PrioritySync",
        "module": "PrioritySync.PrioritySync",
        "name": "FIFO",
        "normalized": "",
        "package": "priority-sync",
        "partial": "FIFO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-PrioritySync.html#v:FILO",
      "description": {
        "fct-module": "PrioritySync.PrioritySync",
        "fct-package": "priority-sync",
        "fct-signature": "FILO",
        "fct-source": "src/PrioritySync-Internal-Queue.html#QueueOrder",
        "fct-type": "function",
        "title": "FILO"
      },
      "index": {
        "description": "",
        "hierarchy": "PrioritySync PrioritySync",
        "module": "PrioritySync.PrioritySync",
        "name": "FILO",
        "normalized": "",
        "package": "priority-sync",
        "partial": "FILO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-PrioritySync.html#v:MaxThreads",
      "description": {
        "fct-module": "PrioritySync.PrioritySync",
        "fct-package": "priority-sync",
        "fct-signature": "MaxThreads Int",
        "fct-source": "src/PrioritySync-Internal-RoomConstraint.html#MaxThreads",
        "fct-type": "function",
        "title": "MaxThreads"
      },
      "index": {
        "description": "",
        "hierarchy": "PrioritySync PrioritySync",
        "module": "PrioritySync.PrioritySync",
        "name": "MaxThreads",
        "normalized": "",
        "package": "priority-sync",
        "partial": "Max Threads",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-PrioritySync.html#v:QueueConfigurationRecord",
      "description": {
        "fct-module": "PrioritySync.PrioritySync",
        "fct-package": "priority-sync",
        "fct-signature": "QueueConfigurationRecord",
        "fct-source": "src/PrioritySync-Internal-Queue.html#QueueConfigurationRecord",
        "fct-type": "function",
        "title": "QueueConfigurationRecord"
      },
      "index": {
        "description": "",
        "hierarchy": "PrioritySync PrioritySync",
        "module": "PrioritySync.PrioritySync",
        "name": "QueueConfigurationRecord",
        "normalized": "",
        "package": "priority-sync",
        "partial": "Queue Configuration Record",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-PrioritySync.html#v:Release",
      "description": {
        "fct-module": "PrioritySync.PrioritySync",
        "fct-package": "priority-sync",
        "fct-signature": "Release",
        "fct-source": "src/PrioritySync-Internal-RoomCore.html#ClaimMode",
        "fct-type": "function",
        "title": "Release"
      },
      "index": {
        "description": "",
        "hierarchy": "PrioritySync PrioritySync",
        "module": "PrioritySync.PrioritySync",
        "name": "Release",
        "normalized": "",
        "package": "priority-sync",
        "partial": "Release",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-PrioritySync.html#v:Unconstrained",
      "description": {
        "fct-module": "PrioritySync.PrioritySync",
        "fct-package": "priority-sync",
        "fct-signature": "Unconstrained",
        "fct-source": "src/PrioritySync-Internal-Unconstrained.html#Unconstrained",
        "fct-type": "function",
        "title": "Unconstrained"
      },
      "index": {
        "description": "",
        "hierarchy": "PrioritySync PrioritySync",
        "module": "PrioritySync.PrioritySync",
        "name": "Unconstrained",
        "normalized": "",
        "package": "priority-sync",
        "partial": "Unconstrained",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-PrioritySync.html#v:allowed_ordering_inversion",
      "description": {
        "fct-descr": "\u003cp\u003eThe greatest allowed difference between the ideal prioritized FILO/FIFO ordering of tasks and the actual ordering of tasks.\n Setting this too high can introduce a lot of overhead in the presence of a lot of short-running tasks.\n Setting this to zero turns off the predicate failover feature, i.e. only the top of queue task will ever be pulled.\n\u003c/p\u003e",
        "fct-module": "PrioritySync.PrioritySync",
        "fct-package": "priority-sync",
        "fct-signature": "Int",
        "fct-source": "src/PrioritySync-Internal-Queue.html#QueueConfigurationRecord",
        "fct-type": "function",
        "title": "allowed_ordering_inversion"
      },
      "index": {
        "description": "The greatest allowed difference between the ideal prioritized FILO FIFO ordering of tasks and the actual ordering of tasks Setting this too high can introduce lot of overhead in the presence of lot of short-running tasks Setting this to zero turns off the predicate failover feature i.e only the top of queue task will ever be pulled",
        "hierarchy": "PrioritySync PrioritySync",
        "module": "PrioritySync.PrioritySync",
        "name": "allowed_ordering_inversion",
        "normalized": "",
        "package": "priority-sync",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-PrioritySync.html#v:allowed_priority_inversion",
      "description": {
        "fct-descr": "\u003cp\u003eConstrains the greatest allowed difference between the priority of the top-of-queue task and the priority of a task to be pulled.\n\u003c/p\u003e",
        "fct-module": "PrioritySync.PrioritySync",
        "fct-package": "priority-sync",
        "fct-signature": "a -\u003e a -\u003e Bool",
        "fct-source": "src/PrioritySync-Internal-Queue.html#QueueConfigurationRecord",
        "fct-type": "function",
        "title": "allowed_priority_inversion"
      },
      "index": {
        "description": "Constrains the greatest allowed difference between the priority of the top-of-queue task and the priority of task to be pulled",
        "hierarchy": "PrioritySync PrioritySync",
        "module": "PrioritySync.PrioritySync",
        "name": "allowed_priority_inversion",
        "normalized": "a-\u003ea-\u003eBool",
        "package": "priority-sync",
        "partial": "",
        "signature": "a-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-PrioritySync.html#v:claim",
      "description": {
        "fct-descr": "\u003cp\u003eTemporarily \u003ccode\u003e\u003ca\u003eAcquire\u003c/a\u003e\u003c/code\u003e, and then release, or \u003ccode\u003e\u003ca\u003eRelease\u003c/a\u003e\u003c/code\u003e, and then acquire, some \u003ccode\u003e\u003ca\u003eRoom\u003c/a\u003e\u003c/code\u003es for the duration of a critical section.\n A simple example where a room might be used to prevent interleaving of \u003ccode\u003estdout\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e room \u003c- newRoom (MaxThreads 1)\n forkIO $ claim Acquire (Default,room) $ putStrLn \"Hello World!\"\n forkIO $ claim Acquire (Default,room) $ putStrLn \"Foo!  Bar!\"\n\u003c/pre\u003e",
        "fct-module": "PrioritySync.PrioritySync",
        "fct-package": "priority-sync",
        "fct-signature": "ClaimMode -\u003e c -\u003e IO a -\u003e IO a",
        "fct-source": "src/PrioritySync-Internal-Room.html#claim",
        "fct-type": "function",
        "title": "claim"
      },
      "index": {
        "description": "Temporarily Acquire and then release or Release and then acquire some Room for the duration of critical section simple example where room might be used to prevent interleaving of stdout room newRoom MaxThreads forkIO claim Acquire Default room putStrLn Hello World forkIO claim Acquire Default room putStrLn Foo Bar",
        "hierarchy": "PrioritySync PrioritySync",
        "module": "PrioritySync.PrioritySync",
        "name": "claim",
        "normalized": "ClaimMode-\u003ea-\u003eIO b-\u003eIO b",
        "package": "priority-sync",
        "partial": "",
        "signature": "ClaimMode-\u003ec-\u003eIO a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-PrioritySync.html#v:dispatch",
      "description": {
        "fct-descr": "\u003cp\u003ePerform a task on another thread.  This task can be reprioritized and canceled.\n\u003c/p\u003e",
        "fct-module": "PrioritySync.PrioritySync",
        "fct-package": "priority-sync",
        "fct-signature": "c -\u003e IO a -\u003e IO (TaskHandle (Priority (ClaimHandle c)) a)",
        "fct-source": "src/PrioritySync-Internal-Dispatch.html#dispatch",
        "fct-type": "function",
        "title": "dispatch"
      },
      "index": {
        "description": "Perform task on another thread This task can be reprioritized and canceled",
        "hierarchy": "PrioritySync PrioritySync",
        "module": "PrioritySync.PrioritySync",
        "name": "dispatch",
        "normalized": "a-\u003eIO b-\u003eIO(TaskHandle(Priority(ClaimHandle a))b)",
        "package": "priority-sync",
        "partial": "",
        "signature": "c-\u003eIO a-\u003eIO(TaskHandle(Priority(ClaimHandle c))a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-PrioritySync.html#v:fair_queue_configuration",
      "description": {
        "fct-descr": "\u003cp\u003eA queue tuned for high throughput and fairness when processing moderate to long running tasks.\n\u003c/p\u003e",
        "fct-module": "PrioritySync.PrioritySync",
        "fct-package": "priority-sync",
        "fct-signature": "QueueConfigurationRecord a",
        "fct-source": "src/PrioritySync-Internal-Queue.html#fair_queue_configuration",
        "fct-type": "function",
        "title": "fair_queue_configuration"
      },
      "index": {
        "description": "queue tuned for high throughput and fairness when processing moderate to long running tasks",
        "hierarchy": "PrioritySync PrioritySync",
        "module": "PrioritySync.PrioritySync",
        "name": "fair_queue_configuration",
        "normalized": "",
        "package": "priority-sync",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-PrioritySync.html#v:fast_queue_configuration",
      "description": {
        "fct-descr": "\u003cp\u003eA queue tuned for high responsiveness and low priority inversion, but may have poorer long-term throughput and potential to starve some tasks compared to \u003ccode\u003e\u003ca\u003efair_queue_configuration\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "PrioritySync.PrioritySync",
        "fct-package": "priority-sync",
        "fct-signature": "QueueConfigurationRecord a",
        "fct-source": "src/PrioritySync-Internal-Queue.html#fast_queue_configuration",
        "fct-type": "function",
        "title": "fast_queue_configuration"
      },
      "index": {
        "description": "queue tuned for high responsiveness and low priority inversion but may have poorer long-term throughput and potential to starve some tasks compared to fair queue configuration",
        "hierarchy": "PrioritySync PrioritySync",
        "module": "PrioritySync.PrioritySync",
        "name": "fast_queue_configuration",
        "normalized": "",
        "package": "priority-sync",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-PrioritySync.html#v:getResult",
      "description": {
        "fct-module": "PrioritySync.PrioritySync",
        "fct-package": "priority-sync",
        "fct-signature": "TaskHandle p a -\u003e IO a",
        "fct-source": "src/PrioritySync-PrioritySync.html#getResult",
        "fct-type": "function",
        "title": "getResult"
      },
      "index": {
        "description": "",
        "hierarchy": "PrioritySync PrioritySync",
        "module": "PrioritySync.PrioritySync",
        "name": "getResult",
        "normalized": "TaskHandle a b-\u003eIO b",
        "package": "priority-sync",
        "partial": "Result",
        "signature": "TaskHandle p a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-PrioritySync.html#v:inUse",
      "description": {
        "fct-module": "PrioritySync.PrioritySync",
        "fct-package": "priority-sync",
        "fct-signature": "o -\u003e IO (Set ThreadId)",
        "fct-source": "src/PrioritySync-PrioritySync.html#inUse",
        "fct-type": "method",
        "title": "inUse"
      },
      "index": {
        "description": "",
        "hierarchy": "PrioritySync PrioritySync",
        "module": "PrioritySync.PrioritySync",
        "name": "inUse",
        "normalized": "a-\u003eIO(Set ThreadId)",
        "package": "priority-sync",
        "partial": "Use",
        "signature": "o-\u003eIO(Set ThreadId)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-PrioritySync.html#v:isEmpty",
      "description": {
        "fct-module": "PrioritySync.PrioritySync",
        "fct-package": "priority-sync",
        "fct-signature": "o -\u003e IO Bool",
        "fct-source": "src/PrioritySync-PrioritySync.html#isEmpty",
        "fct-type": "method",
        "title": "isEmpty"
      },
      "index": {
        "description": "",
        "hierarchy": "PrioritySync PrioritySync",
        "module": "PrioritySync.PrioritySync",
        "name": "isEmpty",
        "normalized": "a-\u003eIO Bool",
        "package": "priority-sync",
        "partial": "Empty",
        "signature": "o-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-PrioritySync.html#v:load",
      "description": {
        "fct-descr": "\u003cp\u003eThe number of tasks waiting on this \u003ccode\u003eTaskPool\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "PrioritySync.PrioritySync",
        "fct-package": "priority-sync",
        "fct-signature": "TaskPool p u -\u003e IO Int",
        "fct-source": "src/PrioritySync-PrioritySync.html#load",
        "fct-type": "function",
        "title": "load"
      },
      "index": {
        "description": "The number of tasks waiting on this TaskPool",
        "hierarchy": "PrioritySync PrioritySync",
        "module": "PrioritySync.PrioritySync",
        "name": "load",
        "normalized": "TaskPool a b-\u003eIO Int",
        "package": "priority-sync",
        "partial": "",
        "signature": "TaskPool p u-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-PrioritySync.html#v:newRoom",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new Room with some arbitrary user data.\n\u003c/p\u003e",
        "fct-module": "PrioritySync.PrioritySync",
        "fct-package": "priority-sync",
        "fct-signature": "u -\u003e IO (Room u)",
        "fct-source": "src/PrioritySync-Internal-RoomCore.html#newRoom",
        "fct-type": "function",
        "title": "newRoom"
      },
      "index": {
        "description": "Create new Room with some arbitrary user data",
        "hierarchy": "PrioritySync PrioritySync",
        "module": "PrioritySync.PrioritySync",
        "name": "newRoom",
        "normalized": "a-\u003eIO(Room a)",
        "package": "priority-sync",
        "partial": "Room",
        "signature": "u-\u003eIO(Room u)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-PrioritySync.html#v:newTaskPool",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eTaskPool\u003c/a\u003e\u003c/code\u003e.  \u003ccode\u003e\u003ca\u003eTaskPool\u003c/a\u003e\u003c/code\u003es begin stopped, use \u003ccode\u003e\u003ca\u003estartQueue\u003c/a\u003e\u003c/code\u003e to start.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e A \u003ccode\u003e\u003ca\u003eQueueConfigurationRecord\u003c/a\u003e\u003c/code\u003e for the backing \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003e.  A typical value is \u003ccode\u003e\u003ca\u003efair_queue_configuration\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e The allowed number of threads that can access the \u003ccode\u003e\u003ca\u003eTaskPool\u003c/a\u003e\u003c/code\u003e simultaneously.\n\u003c/li\u003e\u003cli\u003e The user data for the backing \u003ccode\u003e\u003ca\u003eRoom\u003c/a\u003e\u003c/code\u003e.  This can be \u003ccode\u003e()\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eConsider using \u003ccode\u003e\u003ca\u003esimpleTaskPool\u003c/a\u003e\u003c/code\u003e if you have no special needs.\n\u003c/p\u003e",
        "fct-module": "PrioritySync.PrioritySync",
        "fct-package": "priority-sync",
        "fct-signature": "QueueConfigurationRecord p -\u003e Int -\u003e u -\u003e IO (TaskPool p u)",
        "fct-source": "src/PrioritySync-Internal-TaskPool.html#newTaskPool",
        "fct-type": "function",
        "title": "newTaskPool"
      },
      "index": {
        "description": "Create new TaskPool TaskPool begin stopped use startQueue to start QueueConfigurationRecord for the backing Queue typical value is fair queue configuration The allowed number of threads that can access the TaskPool simultaneously The user data for the backing Room This can be Consider using simpleTaskPool if you have no special needs",
        "hierarchy": "PrioritySync PrioritySync",
        "module": "PrioritySync.PrioritySync",
        "name": "newTaskPool",
        "normalized": "QueueConfigurationRecord a-\u003eInt-\u003eb-\u003eIO(TaskPool a b)",
        "package": "priority-sync",
        "partial": "Task Pool",
        "signature": "QueueConfigurationRecord p-\u003eInt-\u003eu-\u003eIO(TaskPool p u)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-PrioritySync.html#v:priority_indexed_predicate",
      "description": {
        "fct-descr": "\u003cp\u003eA predicate that must hold before any priority level may be pulled from a \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "PrioritySync.PrioritySync",
        "fct-package": "priority-sync",
        "fct-signature": "a -\u003e STM ()",
        "fct-source": "src/PrioritySync-Internal-Queue.html#QueueConfigurationRecord",
        "fct-type": "function",
        "title": "priority_indexed_predicate"
      },
      "index": {
        "description": "predicate that must hold before any priority level may be pulled from Queue",
        "hierarchy": "PrioritySync PrioritySync",
        "module": "PrioritySync.PrioritySync",
        "name": "priority_indexed_predicate",
        "normalized": "a-\u003eSTM()",
        "package": "priority-sync",
        "partial": "",
        "signature": "a-\u003eSTM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-PrioritySync.html#v:queue_order",
      "description": {
        "fct-descr": "\u003cp\u003eShould the \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003e run in FILO or FIFO order.  Ordering takes place after prioritization, and won't have much effect if priorities are very fine-grained.\n\u003c/p\u003e",
        "fct-module": "PrioritySync.PrioritySync",
        "fct-package": "priority-sync",
        "fct-signature": "!QueueOrder",
        "fct-source": "src/PrioritySync-Internal-Queue.html#QueueConfigurationRecord",
        "fct-type": "function",
        "title": "queue_order"
      },
      "index": {
        "description": "Should the Queue run in FILO or FIFO order Ordering takes place after prioritization and won have much effect if priorities are very fine-grained",
        "hierarchy": "PrioritySync PrioritySync",
        "module": "PrioritySync.PrioritySync",
        "name": "queue_order",
        "normalized": "",
        "package": "priority-sync",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-PrioritySync.html#v:queue_predicate",
      "description": {
        "fct-descr": "\u003cp\u003eA predicate that must hold before any task may be pulled from a \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "PrioritySync.PrioritySync",
        "fct-package": "priority-sync",
        "fct-signature": "STM ()",
        "fct-source": "src/PrioritySync-Internal-Queue.html#QueueConfigurationRecord",
        "fct-type": "function",
        "title": "queue_predicate"
      },
      "index": {
        "description": "predicate that must hold before any task may be pulled from Queue",
        "hierarchy": "PrioritySync PrioritySync",
        "module": "PrioritySync.PrioritySync",
        "name": "queue_predicate",
        "normalized": "STM()",
        "package": "priority-sync",
        "partial": "",
        "signature": "STM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-PrioritySync.html#v:reprioritize",
      "description": {
        "fct-module": "PrioritySync.PrioritySync",
        "fct-package": "priority-sync",
        "fct-signature": "TaskHandle p a -\u003e (p -\u003e p) -\u003e IO ()",
        "fct-source": "src/PrioritySync-PrioritySync.html#reprioritize",
        "fct-type": "function",
        "title": "reprioritize"
      },
      "index": {
        "description": "",
        "hierarchy": "PrioritySync PrioritySync",
        "module": "PrioritySync.PrioritySync",
        "name": "reprioritize",
        "normalized": "TaskHandle a b-\u003e(a-\u003ea)-\u003eIO()",
        "package": "priority-sync",
        "partial": "",
        "signature": "TaskHandle p a-\u003e(p-\u003ep)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-PrioritySync.html#v:schedule",
      "description": {
        "fct-descr": "\u003cp\u003eA prioritized \u003ccode\u003eClaimContext\u003c/code\u003e for a task pool.\n\u003c/p\u003e",
        "fct-module": "PrioritySync.PrioritySync",
        "fct-package": "priority-sync",
        "fct-signature": "TaskPool p u -\u003e p -\u003e Schedule p (Constrained (TaskPoolConstraint u), Room (TaskPoolConstraint u))",
        "fct-source": "src/PrioritySync-Internal-TaskPool.html#schedule",
        "fct-type": "function",
        "title": "schedule"
      },
      "index": {
        "description": "prioritized ClaimContext for task pool",
        "hierarchy": "PrioritySync PrioritySync",
        "module": "PrioritySync.PrioritySync",
        "name": "schedule",
        "normalized": "TaskPool a b-\u003ea-\u003eSchedule a(Constrained(TaskPoolConstraint b),Room(TaskPoolConstraint b))",
        "package": "priority-sync",
        "partial": "",
        "signature": "TaskPool p u-\u003ep-\u003eSchedule p(Constrained(TaskPoolConstraint u),Room(TaskPoolConstraint u))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-PrioritySync.html#v:simpleTaskPool",
      "description": {
        "fct-descr": "\u003cp\u003eJust create a new \u003ccode\u003e\u003ca\u003eTaskPool\u003c/a\u003e\u003c/code\u003e.  The task pool is constrained by the number of capabilities indicated by \u003ccode\u003e\u003ca\u003enumCapabilities\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "PrioritySync.PrioritySync",
        "fct-package": "priority-sync",
        "fct-signature": "IO (TaskPool p ())",
        "fct-source": "src/PrioritySync-Internal-TaskPool.html#simpleTaskPool",
        "fct-type": "function",
        "title": "simpleTaskPool"
      },
      "index": {
        "description": "Just create new TaskPool The task pool is constrained by the number of capabilities indicated by numCapabilities",
        "hierarchy": "PrioritySync PrioritySync",
        "module": "PrioritySync.PrioritySync",
        "name": "simpleTaskPool",
        "normalized": "IO(TaskPool a())",
        "package": "priority-sync",
        "partial": "Task Pool",
        "signature": "IO(TaskPool p())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-PrioritySync.html#v:startQueue",
      "description": {
        "fct-module": "PrioritySync.PrioritySync",
        "fct-package": "priority-sync",
        "fct-signature": "TaskPool p a -\u003e IO ()",
        "fct-source": "src/PrioritySync-PrioritySync.html#startQueue",
        "fct-type": "function",
        "title": "startQueue"
      },
      "index": {
        "description": "",
        "hierarchy": "PrioritySync PrioritySync",
        "module": "PrioritySync.PrioritySync",
        "name": "startQueue",
        "normalized": "TaskPool a b-\u003eIO()",
        "package": "priority-sync",
        "partial": "Queue",
        "signature": "TaskPool p a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-PrioritySync.html#v:stopQueue",
      "description": {
        "fct-module": "PrioritySync.PrioritySync",
        "fct-package": "priority-sync",
        "fct-signature": "TaskPool p a -\u003e IO ()",
        "fct-source": "src/PrioritySync-PrioritySync.html#stopQueue",
        "fct-type": "function",
        "title": "stopQueue"
      },
      "index": {
        "description": "",
        "hierarchy": "PrioritySync PrioritySync",
        "module": "PrioritySync.PrioritySync",
        "name": "stopQueue",
        "normalized": "TaskPool a b-\u003eIO()",
        "package": "priority-sync",
        "partial": "Queue",
        "signature": "TaskPool p a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-PrioritySync.html#v:tryGetResult",
      "description": {
        "fct-module": "PrioritySync.PrioritySync",
        "fct-package": "priority-sync",
        "fct-signature": "TaskHandle p a -\u003e IO (Maybe a)",
        "fct-source": "src/PrioritySync-PrioritySync.html#tryGetResult",
        "fct-type": "function",
        "title": "tryGetResult"
      },
      "index": {
        "description": "",
        "hierarchy": "PrioritySync PrioritySync",
        "module": "PrioritySync.PrioritySync",
        "name": "tryGetResult",
        "normalized": "TaskHandle a b-\u003eIO(Maybe b)",
        "package": "priority-sync",
        "partial": "Get Result",
        "signature": "TaskHandle p a-\u003eIO(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-PrioritySync.html#v:userData",
      "description": {
        "fct-descr": "\u003cp\u003eGet the user data associated with a \u003ccode\u003e\u003ca\u003eRoom\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "PrioritySync.PrioritySync",
        "fct-package": "priority-sync",
        "fct-signature": "Room u -\u003e u",
        "fct-source": "src/PrioritySync-Internal-RoomCore.html#userData",
        "fct-type": "function",
        "title": "userData"
      },
      "index": {
        "description": "Get the user data associated with Room",
        "hierarchy": "PrioritySync PrioritySync",
        "module": "PrioritySync.PrioritySync",
        "name": "userData",
        "normalized": "Room a-\u003ea",
        "package": "priority-sync",
        "partial": "Data",
        "signature": "Room u-\u003eu"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-PrioritySync.html#v:waitUntilFinished",
      "description": {
        "fct-descr": "\u003cp\u003eWait until a queue is finished.\n\u003c/p\u003e",
        "fct-module": "PrioritySync.PrioritySync",
        "fct-package": "priority-sync",
        "fct-signature": "TaskPool p u -\u003e IO ()",
        "fct-source": "src/PrioritySync-Internal-TaskPool.html#waitUntilFinished",
        "fct-type": "function",
        "title": "waitUntilFinished"
      },
      "index": {
        "description": "Wait until queue is finished",
        "hierarchy": "PrioritySync PrioritySync",
        "module": "PrioritySync.PrioritySync",
        "name": "waitUntilFinished",
        "normalized": "TaskPool a b-\u003eIO()",
        "package": "priority-sync",
        "partial": "Until Finished",
        "signature": "TaskPool p u-\u003eIO()"
      }
    }
  }
]