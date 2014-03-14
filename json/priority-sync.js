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
        "word": "priority-sync"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PrioritySync.Internal.ClaimContext",
          "name": "ClaimContext",
          "package": "priority-sync",
          "source": "src/PrioritySync-Internal-ClaimContext.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "PrioritySync Internal ClaimContext",
          "module": "PrioritySync.Internal.ClaimContext",
          "name": "ClaimContext",
          "package": "priority-sync",
          "partial": "Claim Context",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-ClaimContext.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRules for calling \u003ccode\u003eclaim_\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "PrioritySync.Internal.ClaimContext",
          "name": "ClaimContext",
          "package": "priority-sync",
          "source": "src/PrioritySync-Internal-ClaimContext.html#ClaimContext",
          "type": "class"
        },
        "index": {
          "description": "Rules for calling claim",
          "hierarchy": "PrioritySync Internal ClaimContext",
          "module": "PrioritySync.Internal.ClaimContext",
          "name": "ClaimContext",
          "package": "priority-sync",
          "partial": "Claim Context",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-ClaimContext.html#t:ClaimContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShould approve a some claims before entering a critical section, as described by \u003ccode\u003eclaim_\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "PrioritySync.Internal.ClaimContext",
          "name": "approveClaimsEntering",
          "package": "priority-sync",
          "signature": "c -\u003e [Claim (UserData c)] -\u003e STM (ClaimHandle c)",
          "source": "src/PrioritySync-Internal-ClaimContext.html#approveClaimsEntering",
          "type": "method"
        },
        "index": {
          "description": "Should approve some claims before entering critical section as described by claim",
          "hierarchy": "PrioritySync Internal ClaimContext",
          "module": "PrioritySync.Internal.ClaimContext",
          "name": "approveClaimsEntering",
          "normalized": "a-\u003e[Claim(UserData a)]-\u003eSTM(ClaimHandle a)",
          "package": "priority-sync",
          "partial": "Claims Entering",
          "signature": "c-\u003e[Claim(UserData c)]-\u003eSTM(ClaimHandle c)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-ClaimContext.html#v:approveClaimsEntering"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShould approve a some claims before exiting a critical section, as described by \u003ccode\u003eclaim_\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "PrioritySync.Internal.ClaimContext",
          "name": "approveClaimsExiting",
          "package": "priority-sync",
          "signature": "c -\u003e [Claim (UserData c)] -\u003e STM (ClaimHandle c)",
          "source": "src/PrioritySync-Internal-ClaimContext.html#approveClaimsExiting",
          "type": "method"
        },
        "index": {
          "description": "Should approve some claims before exiting critical section as described by claim",
          "hierarchy": "PrioritySync Internal ClaimContext",
          "module": "PrioritySync.Internal.ClaimContext",
          "name": "approveClaimsExiting",
          "normalized": "a-\u003e[Claim(UserData a)]-\u003eSTM(ClaimHandle a)",
          "package": "priority-sync",
          "partial": "Claims Exiting",
          "signature": "c-\u003e[Claim(UserData c)]-\u003eSTM(ClaimHandle c)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-ClaimContext.html#v:approveClaimsExiting"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA waiting transaction, as described by \u003ccode\u003eclaim_\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "PrioritySync.Internal.ClaimContext",
          "name": "waitingAction",
          "package": "priority-sync",
          "signature": "c -\u003e ClaimHandle c -\u003e STM ()",
          "source": "src/PrioritySync-Internal-ClaimContext.html#waitingAction",
          "type": "method"
        },
        "index": {
          "description": "waiting transaction as described by claim",
          "hierarchy": "PrioritySync Internal ClaimContext",
          "module": "PrioritySync.Internal.ClaimContext",
          "name": "waitingAction",
          "normalized": "a-\u003eClaimHandle a-\u003eSTM()",
          "package": "priority-sync",
          "partial": "Action",
          "signature": "c-\u003eClaimHandle c-\u003eSTM()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-ClaimContext.html#v:waitingAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PrioritySync.Internal.Constrained",
          "name": "Constrained",
          "package": "priority-sync",
          "source": "src/PrioritySync-Internal-Constrained.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "PrioritySync Internal Constrained",
          "module": "PrioritySync.Internal.Constrained",
          "name": "Constrained",
          "package": "priority-sync",
          "partial": "Constrained",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Constrained.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequire that all \u003ccode\u003e\u003ca\u003eRoomConstraint\u003c/a\u003e\u003c/code\u003es be satisfied when acquiring a \u003ccode\u003e\u003ca\u003eRoom\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "PrioritySync.Internal.Constrained",
          "name": "Constrained",
          "package": "priority-sync",
          "source": "src/PrioritySync-Internal-Constrained.html#Constrained",
          "type": "data"
        },
        "index": {
          "description": "Require that all RoomConstraint be satisfied when acquiring Room",
          "hierarchy": "PrioritySync Internal Constrained",
          "module": "PrioritySync.Internal.Constrained",
          "name": "Constrained",
          "package": "priority-sync",
          "partial": "Constrained",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Constrained.html#t:Constrained"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"PrioritySync.Internal.Constrained\",\"PrioritySync.PrioritySync\"]",
          "name": "Constrained",
          "package": "priority-sync",
          "signature": "Constrained",
          "source": "src/PrioritySync-Internal-Constrained.html#Constrained",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Constrained.html#v:Constrained\",\"http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-PrioritySync.html#v:Constrained\"]"
        },
        "index": {
          "hierarchy": "PrioritySync Internal Constrained",
          "module": "PrioritySync.Internal.Constrained",
          "name": "Constrained",
          "package": "priority-sync",
          "partial": "Constrained",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Constrained.html#v:Constrained"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PrioritySync.Internal.Dispatch",
          "name": "Dispatch",
          "package": "priority-sync",
          "source": "src/PrioritySync-Internal-Dispatch.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "PrioritySync Internal Dispatch",
          "module": "PrioritySync.Internal.Dispatch",
          "name": "Dispatch",
          "package": "priority-sync",
          "partial": "Dispatch",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Dispatch.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PrioritySync.Internal.Dispatch",
          "name": "TaskHandle",
          "package": "priority-sync",
          "source": "src/PrioritySync-Internal-Dispatch.html#TaskHandle",
          "type": "data"
        },
        "index": {
          "hierarchy": "PrioritySync Internal Dispatch",
          "module": "PrioritySync.Internal.Dispatch",
          "name": "TaskHandle",
          "package": "priority-sync",
          "partial": "Task Handle",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Dispatch.html#t:TaskHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform a task on another thread.  This task can be reprioritized and canceled.\n\u003c/p\u003e",
          "module": "[\"PrioritySync.Internal.Dispatch\",\"PrioritySync.PrioritySync\"]",
          "name": "dispatch",
          "package": "priority-sync",
          "signature": "c -\u003e IO a -\u003e IO (TaskHandle (Priority (ClaimHandle c)) a)",
          "source": "src/PrioritySync-Internal-Dispatch.html#dispatch",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Dispatch.html#v:dispatch\",\"http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-PrioritySync.html#v:dispatch\"]"
        },
        "index": {
          "description": "Perform task on another thread This task can be reprioritized and canceled",
          "hierarchy": "PrioritySync Internal Dispatch",
          "module": "PrioritySync.Internal.Dispatch",
          "name": "dispatch",
          "normalized": "a-\u003eIO b-\u003eIO(TaskHandle(Priority(ClaimHandle a))b)",
          "package": "priority-sync",
          "signature": "c-\u003eIO a-\u003eIO(TaskHandle(Priority(ClaimHandle c))a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Dispatch.html#v:dispatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWait for the result from this task.\n\u003c/p\u003e",
          "module": "PrioritySync.Internal.Dispatch",
          "name": "getResult",
          "package": "priority-sync",
          "signature": "TaskHandle p a -\u003e STM a",
          "source": "src/PrioritySync-Internal-Dispatch.html#getResult",
          "type": "function"
        },
        "index": {
          "description": "Wait for the result from this task",
          "hierarchy": "PrioritySync Internal Dispatch",
          "module": "PrioritySync.Internal.Dispatch",
          "name": "getResult",
          "normalized": "TaskHandle a b-\u003eSTM b",
          "package": "priority-sync",
          "partial": "Result",
          "signature": "TaskHandle p a-\u003eSTM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Dispatch.html#v:getResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PrioritySync.Internal.Dispatch",
          "name": "reprioritize",
          "package": "priority-sync",
          "signature": "p -\u003e (Priority p -\u003e Priority p) -\u003e STM ()",
          "source": "src/PrioritySync-Internal-Prioritized.html#reprioritize",
          "type": "function"
        },
        "index": {
          "hierarchy": "PrioritySync Internal Dispatch",
          "module": "PrioritySync.Internal.Dispatch",
          "name": "reprioritize",
          "normalized": "a-\u003e(Priority a-\u003ePriority a)-\u003eSTM()",
          "package": "priority-sync",
          "signature": "p-\u003e(Priority p-\u003ePriority p)-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Dispatch.html#v:reprioritize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNon-blocking version of \u003ccode\u003e\u003ca\u003egetResult\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "PrioritySync.Internal.Dispatch",
          "name": "tryGetResult",
          "package": "priority-sync",
          "signature": "TaskHandle p a -\u003e STM (Maybe a)",
          "source": "src/PrioritySync-Internal-Dispatch.html#tryGetResult",
          "type": "function"
        },
        "index": {
          "description": "Non-blocking version of getResult",
          "hierarchy": "PrioritySync Internal Dispatch",
          "module": "PrioritySync.Internal.Dispatch",
          "name": "tryGetResult",
          "normalized": "TaskHandle a b-\u003eSTM(Maybe b)",
          "package": "priority-sync",
          "partial": "Get Result",
          "signature": "TaskHandle p a-\u003eSTM(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Dispatch.html#v:tryGetResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PrioritySync.Internal.Prioritized",
          "name": "Prioritized",
          "package": "priority-sync",
          "source": "src/PrioritySync-Internal-Prioritized.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "PrioritySync Internal Prioritized",
          "module": "PrioritySync.Internal.Prioritized",
          "name": "Prioritized",
          "package": "priority-sync",
          "partial": "Prioritized",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Prioritized.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReprioritize a task.  This has no effect on a target that has already left the queue.\n\u003c/p\u003e",
          "module": "PrioritySync.Internal.Prioritized",
          "name": "Prioritized",
          "package": "priority-sync",
          "source": "src/PrioritySync-Internal-Prioritized.html#Prioritized",
          "type": "class"
        },
        "index": {
          "description": "Reprioritize task This has no effect on target that has already left the queue",
          "hierarchy": "PrioritySync Internal Prioritized",
          "module": "PrioritySync.Internal.Prioritized",
          "name": "Prioritized",
          "package": "priority-sync",
          "partial": "Prioritized",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Prioritized.html#t:Prioritized"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PrioritySync.Internal.Prioritized",
          "name": "reprioritize",
          "package": "priority-sync",
          "signature": "p -\u003e (Priority p -\u003e Priority p) -\u003e STM ()",
          "source": "src/PrioritySync-Internal-Prioritized.html#reprioritize",
          "type": "method"
        },
        "index": {
          "hierarchy": "PrioritySync Internal Prioritized",
          "module": "PrioritySync.Internal.Prioritized",
          "name": "reprioritize",
          "normalized": "a-\u003e(Priority a-\u003ePriority a)-\u003eSTM()",
          "package": "priority-sync",
          "signature": "p-\u003e(Priority p-\u003ePriority p)-\u003eSTM()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Prioritized.html#v:reprioritize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PrioritySync.Internal.Queue",
          "name": "Queue",
          "package": "priority-sync",
          "source": "src/PrioritySync-Internal-Queue.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "PrioritySync Internal Queue",
          "module": "PrioritySync.Internal.Queue",
          "name": "Queue",
          "package": "priority-sync",
          "partial": "Queue",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Queue.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA prioritized \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003e.  Prioritization is least-first, i.e. larger values are nicer.\n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003e is not associated with any working thread, therefore, it is the client's responsibility to make sure that every pushed\n task is also pulled, or the \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003e will stall.  There are several ways to accomplish this:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Call \u003ccode\u003e\u003ca\u003epullTask\u003c/a\u003e\u003c/code\u003e at least once for every call to \u003ccode\u003e\u003ca\u003eputTask\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e Use \u003ccode\u003e\u003ca\u003edispatchTasks\u003c/a\u003e\u003c/code\u003e to push every task.\n\u003c/li\u003e\u003cli\u003e Use \u003ccode\u003e\u003ca\u003eflushQueue\u003c/a\u003e\u003c/code\u003e whenever the \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003e is not empty.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "PrioritySync.Internal.Queue",
          "name": "Queue",
          "package": "priority-sync",
          "source": "src/PrioritySync-Internal-Queue.html#Queue",
          "type": "data"
        },
        "index": {
          "description": "prioritized Queue Prioritization is least-first i.e larger values are nicer Queue is not associated with any working thread therefore it is the client responsibility to make sure that every pushed task is also pulled or the Queue will stall There are several ways to accomplish this Call pullTask at least once for every call to putTask Use dispatchTasks to push every task Use flushQueue whenever the Queue is not empty",
          "hierarchy": "PrioritySync Internal Queue",
          "module": "PrioritySync.Internal.Queue",
          "name": "Queue",
          "package": "priority-sync",
          "partial": "Queue",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Queue.html#t:Queue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConfiguration options for a \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003e.  A \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003e blocks on a number of predicates when dispatching a job.  Generally, \u003ccode\u003e\u003ca\u003efair_queue_configuration\u003c/a\u003e\u003c/code\u003e\n should work well.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e A single STM predicate for the entire \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003e.  This blocks the entire \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003e until the predicate is satisfied.\n\u003c/li\u003e\u003cli\u003e A STM predicate parameterized by priority.  This blocks a single priority level, and the \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003e will skip all tasks at that priority.\n\u003c/li\u003e\u003cli\u003e Each task is itself an STM transaction, and can block itself.\n\u003c/li\u003e\u003cli\u003e Pure constraints on priority and ordering inversion.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eIf a task is blocked for any reason, the task is skipped and the next task attempted, in priority order.\n\u003c/p\u003e",
          "module": "PrioritySync.Internal.Queue",
          "name": "QueueConfigurationRecord",
          "package": "priority-sync",
          "source": "src/PrioritySync-Internal-Queue.html#QueueConfigurationRecord",
          "type": "data"
        },
        "index": {
          "description": "Configuration options for Queue Queue blocks on number of predicates when dispatching job Generally fair queue configuration should work well single STM predicate for the entire Queue This blocks the entire Queue until the predicate is satisfied STM predicate parameterized by priority This blocks single priority level and the Queue will skip all tasks at that priority Each task is itself an STM transaction and can block itself Pure constraints on priority and ordering inversion If task is blocked for any reason the task is skipped and the next task attempted in priority order",
          "hierarchy": "PrioritySync Internal Queue",
          "module": "PrioritySync.Internal.Queue",
          "name": "QueueConfigurationRecord",
          "package": "priority-sync",
          "partial": "Queue Configuration Record",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Queue.html#t:QueueConfigurationRecord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PrioritySync.Internal.Queue",
          "name": "QueueOrder",
          "package": "priority-sync",
          "source": "src/PrioritySync-Internal-Queue.html#QueueOrder",
          "type": "data"
        },
        "index": {
          "hierarchy": "PrioritySync Internal Queue",
          "module": "PrioritySync.Internal.Queue",
          "name": "QueueOrder",
          "package": "priority-sync",
          "partial": "Queue Order",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Queue.html#t:QueueOrder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PrioritySync.Internal.Queue",
          "name": "TaskHandle",
          "package": "priority-sync",
          "source": "src/PrioritySync-Internal-Queue.html#TaskHandle",
          "type": "data"
        },
        "index": {
          "hierarchy": "PrioritySync Internal Queue",
          "module": "PrioritySync.Internal.Queue",
          "name": "TaskHandle",
          "package": "priority-sync",
          "partial": "Task Handle",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Queue.html#t:TaskHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"PrioritySync.Internal.Queue\",\"PrioritySync.PrioritySync\"]",
          "name": "FIFO",
          "package": "priority-sync",
          "signature": "FIFO",
          "source": "src/PrioritySync-Internal-Queue.html#QueueOrder",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Queue.html#v:FIFO\",\"http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-PrioritySync.html#v:FIFO\"]"
        },
        "index": {
          "hierarchy": "PrioritySync Internal Queue",
          "module": "PrioritySync.Internal.Queue",
          "name": "FIFO",
          "package": "priority-sync",
          "partial": "FIFO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Queue.html#v:FIFO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"PrioritySync.Internal.Queue\",\"PrioritySync.PrioritySync\"]",
          "name": "FILO",
          "package": "priority-sync",
          "signature": "FILO",
          "source": "src/PrioritySync-Internal-Queue.html#QueueOrder",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Queue.html#v:FILO\",\"http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-PrioritySync.html#v:FILO\"]"
        },
        "index": {
          "hierarchy": "PrioritySync Internal Queue",
          "module": "PrioritySync.Internal.Queue",
          "name": "FILO",
          "package": "priority-sync",
          "partial": "FILO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Queue.html#v:FILO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"PrioritySync.Internal.Queue\",\"PrioritySync.PrioritySync\"]",
          "name": "QueueConfigurationRecord",
          "package": "priority-sync",
          "signature": "QueueConfigurationRecord",
          "source": "src/PrioritySync-Internal-Queue.html#QueueConfigurationRecord",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Queue.html#v:QueueConfigurationRecord\",\"http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-PrioritySync.html#v:QueueConfigurationRecord\"]"
        },
        "index": {
          "hierarchy": "PrioritySync Internal Queue",
          "module": "PrioritySync.Internal.Queue",
          "name": "QueueConfigurationRecord",
          "package": "priority-sync",
          "partial": "Queue Configuration Record",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Queue.html#v:QueueConfigurationRecord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe greatest allowed difference between the ideal prioritized FILO/FIFO ordering of tasks and the actual ordering of tasks.\n Setting this too high can introduce a lot of overhead in the presence of a lot of short-running tasks.\n Setting this to zero turns off the predicate failover feature, i.e. only the top of queue task will ever be pulled.\n\u003c/p\u003e",
          "module": "[\"PrioritySync.Internal.Queue\",\"PrioritySync.PrioritySync\"]",
          "name": "allowed_ordering_inversion",
          "package": "priority-sync",
          "signature": "Int",
          "source": "src/PrioritySync-Internal-Queue.html#QueueConfigurationRecord",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Queue.html#v:allowed_ordering_inversion\",\"http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-PrioritySync.html#v:allowed_ordering_inversion\"]"
        },
        "index": {
          "description": "The greatest allowed difference between the ideal prioritized FILO FIFO ordering of tasks and the actual ordering of tasks Setting this too high can introduce lot of overhead in the presence of lot of short-running tasks Setting this to zero turns off the predicate failover feature i.e only the top of queue task will ever be pulled",
          "hierarchy": "PrioritySync Internal Queue",
          "module": "PrioritySync.Internal.Queue",
          "name": "allowed_ordering_inversion",
          "package": "priority-sync",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Queue.html#v:allowed_ordering_inversion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstrains the greatest allowed difference between the priority of the top-of-queue task and the priority of a task to be pulled.\n\u003c/p\u003e",
          "module": "[\"PrioritySync.Internal.Queue\",\"PrioritySync.PrioritySync\"]",
          "name": "allowed_priority_inversion",
          "package": "priority-sync",
          "signature": "a -\u003e a -\u003e Bool",
          "source": "src/PrioritySync-Internal-Queue.html#QueueConfigurationRecord",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Queue.html#v:allowed_priority_inversion\",\"http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-PrioritySync.html#v:allowed_priority_inversion\"]"
        },
        "index": {
          "description": "Constrains the greatest allowed difference between the priority of the top-of-queue task and the priority of task to be pulled",
          "hierarchy": "PrioritySync Internal Queue",
          "module": "PrioritySync.Internal.Queue",
          "name": "allowed_priority_inversion",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "priority-sync",
          "signature": "a-\u003ea-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Queue.html#v:allowed_priority_inversion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\"Fire and forget\" some tasks on a separate thread.\n\u003c/p\u003e",
          "module": "PrioritySync.Internal.Queue",
          "name": "dispatchTasks",
          "package": "priority-sync",
          "signature": "[(Queue a, a, STM ())] -\u003e IO [TaskHandle a]",
          "source": "src/PrioritySync-Internal-Queue.html#dispatchTasks",
          "type": "function"
        },
        "index": {
          "description": "Fire and forget some tasks on separate thread",
          "hierarchy": "PrioritySync Internal Queue",
          "module": "PrioritySync.Internal.Queue",
          "name": "dispatchTasks",
          "normalized": "[(Queue a,a,STM())]-\u003eIO[TaskHandle a]",
          "package": "priority-sync",
          "partial": "Tasks",
          "signature": "[(Queue a,a,STM())]-\u003eIO[TaskHandle a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Queue.html#v:dispatchTasks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA queue tuned for high throughput and fairness when processing moderate to long running tasks.\n\u003c/p\u003e",
          "module": "[\"PrioritySync.Internal.Queue\",\"PrioritySync.PrioritySync\"]",
          "name": "fair_queue_configuration",
          "package": "priority-sync",
          "signature": "QueueConfigurationRecord a",
          "source": "src/PrioritySync-Internal-Queue.html#fair_queue_configuration",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Queue.html#v:fair_queue_configuration\",\"http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-PrioritySync.html#v:fair_queue_configuration\"]"
        },
        "index": {
          "description": "queue tuned for high throughput and fairness when processing moderate to long running tasks",
          "hierarchy": "PrioritySync Internal Queue",
          "module": "PrioritySync.Internal.Queue",
          "name": "fair_queue_configuration",
          "package": "priority-sync",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Queue.html#v:fair_queue_configuration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA queue tuned for high responsiveness and low priority inversion, but may have poorer long-term throughput and potential to starve some tasks compared to \u003ccode\u003e\u003ca\u003efair_queue_configuration\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"PrioritySync.Internal.Queue\",\"PrioritySync.PrioritySync\"]",
          "name": "fast_queue_configuration",
          "package": "priority-sync",
          "signature": "QueueConfigurationRecord a",
          "source": "src/PrioritySync-Internal-Queue.html#fast_queue_configuration",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Queue.html#v:fast_queue_configuration\",\"http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-PrioritySync.html#v:fast_queue_configuration\"]"
        },
        "index": {
          "description": "queue tuned for high responsiveness and low priority inversion but may have poorer long-term throughput and potential to starve some tasks compared to fair queue configuration",
          "hierarchy": "PrioritySync Internal Queue",
          "module": "PrioritySync.Internal.Queue",
          "name": "fast_queue_configuration",
          "package": "priority-sync",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Queue.html#v:fast_queue_configuration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProcess a \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003e until it is empty.\n\u003c/p\u003e",
          "module": "PrioritySync.Internal.Queue",
          "name": "flushQueue",
          "package": "priority-sync",
          "signature": "Queue a -\u003e IO ()",
          "source": "src/PrioritySync-Internal-Queue.html#flushQueue",
          "type": "function"
        },
        "index": {
          "description": "Process Queue until it is empty",
          "hierarchy": "PrioritySync Internal Queue",
          "module": "PrioritySync.Internal.Queue",
          "name": "flushQueue",
          "normalized": "Queue a-\u003eIO()",
          "package": "priority-sync",
          "partial": "Queue",
          "signature": "Queue a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Queue.html#v:flushQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PrioritySync.Internal.Queue",
          "name": "hasCompleted",
          "package": "priority-sync",
          "signature": "TaskHandle a -\u003e STM Bool",
          "source": "src/PrioritySync-Internal-Queue.html#hasCompleted",
          "type": "function"
        },
        "index": {
          "hierarchy": "PrioritySync Internal Queue",
          "module": "PrioritySync.Internal.Queue",
          "name": "hasCompleted",
          "normalized": "TaskHandle a-\u003eSTM Bool",
          "package": "priority-sync",
          "partial": "Completed",
          "signature": "TaskHandle a-\u003eSTM Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Queue.html#v:hasCompleted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue iff this Queue is empty.\n\u003c/p\u003e",
          "module": "PrioritySync.Internal.Queue",
          "name": "isEmpty",
          "package": "priority-sync",
          "signature": "Queue a -\u003e STM Bool",
          "source": "src/PrioritySync-Internal-Queue.html#isEmpty",
          "type": "function"
        },
        "index": {
          "description": "True iff this Queue is empty",
          "hierarchy": "PrioritySync Internal Queue",
          "module": "PrioritySync.Internal.Queue",
          "name": "isEmpty",
          "normalized": "Queue a-\u003eSTM Bool",
          "package": "priority-sync",
          "partial": "Empty",
          "signature": "Queue a-\u003eSTM Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Queue.html#v:isEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue iff this task is poised at the top of it's \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "PrioritySync.Internal.Queue",
          "name": "isTopOfQueue",
          "package": "priority-sync",
          "signature": "TaskHandle a -\u003e STM Bool",
          "source": "src/PrioritySync-Internal-Queue.html#isTopOfQueue",
          "type": "function"
        },
        "index": {
          "description": "True iff this task is poised at the top of it Queue",
          "hierarchy": "PrioritySync Internal Queue",
          "module": "PrioritySync.Internal.Queue",
          "name": "isTopOfQueue",
          "normalized": "TaskHandle a-\u003eSTM Bool",
          "package": "priority-sync",
          "partial": "Top Of Queue",
          "signature": "TaskHandle a-\u003eSTM Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Queue.html#v:isTopOfQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number of tasks pending on this Queue.\n\u003c/p\u003e",
          "module": "PrioritySync.Internal.Queue",
          "name": "load",
          "package": "priority-sync",
          "signature": "Queue a -\u003e STM Int",
          "source": "src/PrioritySync-Internal-Queue.html#load",
          "type": "function"
        },
        "index": {
          "description": "The number of tasks pending on this Queue",
          "hierarchy": "PrioritySync Internal Queue",
          "module": "PrioritySync.Internal.Queue",
          "name": "load",
          "normalized": "Queue a-\u003eSTM Int",
          "package": "priority-sync",
          "signature": "Queue a-\u003eSTM Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Queue.html#v:load"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003e.  \n\u003c/p\u003e",
          "module": "PrioritySync.Internal.Queue",
          "name": "newQueue",
          "package": "priority-sync",
          "signature": "QueueConfigurationRecord a -\u003e IO (Queue a)",
          "source": "src/PrioritySync-Internal-Queue.html#newQueue",
          "type": "function"
        },
        "index": {
          "description": "Create new Queue",
          "hierarchy": "PrioritySync Internal Queue",
          "module": "PrioritySync.Internal.Queue",
          "name": "newQueue",
          "normalized": "QueueConfigurationRecord a-\u003eIO(Queue a)",
          "package": "priority-sync",
          "partial": "Queue",
          "signature": "QueueConfigurationRecord a-\u003eIO(Queue a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Queue.html#v:newQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PrioritySync.Internal.Queue",
          "name": "pendingTasks",
          "package": "priority-sync",
          "signature": "Queue a -\u003e STM [TaskHandle a]",
          "source": "src/PrioritySync-Internal-Queue.html#pendingTasks",
          "type": "function"
        },
        "index": {
          "hierarchy": "PrioritySync Internal Queue",
          "module": "PrioritySync.Internal.Queue",
          "name": "pendingTasks",
          "normalized": "Queue a-\u003eSTM[TaskHandle a]",
          "package": "priority-sync",
          "partial": "Tasks",
          "signature": "Queue a-\u003eSTM[TaskHandle a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Queue.html#v:pendingTasks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA predicate that must hold before any priority level may be pulled from a \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"PrioritySync.Internal.Queue\",\"PrioritySync.PrioritySync\"]",
          "name": "priority_indexed_predicate",
          "package": "priority-sync",
          "signature": "a -\u003e STM ()",
          "source": "src/PrioritySync-Internal-Queue.html#QueueConfigurationRecord",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Queue.html#v:priority_indexed_predicate\",\"http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-PrioritySync.html#v:priority_indexed_predicate\"]"
        },
        "index": {
          "description": "predicate that must hold before any priority level may be pulled from Queue",
          "hierarchy": "PrioritySync Internal Queue",
          "module": "PrioritySync.Internal.Queue",
          "name": "priority_indexed_predicate",
          "normalized": "a-\u003eSTM()",
          "package": "priority-sync",
          "signature": "a-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Queue.html#v:priority_indexed_predicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePull this task from the top of a \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003e, if it is already there.\n If this task is top-of-queue, but it's predicates fail, then \u003ccode\u003e\u003ca\u003epullFromTop\u003c/a\u003e\u003c/code\u003e may instead pull a lower-priority \u003ccode\u003e\u003ca\u003eTaskHandle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "PrioritySync.Internal.Queue",
          "name": "pullFromTop",
          "package": "priority-sync",
          "signature": "TaskHandle a -\u003e STM (TaskHandle a)",
          "source": "src/PrioritySync-Internal-Queue.html#pullFromTop",
          "type": "function"
        },
        "index": {
          "description": "Pull this task from the top of Queue if it is already there If this task is top-of-queue but it predicates fail then pullFromTop may instead pull lower-priority TaskHandle",
          "hierarchy": "PrioritySync Internal Queue",
          "module": "PrioritySync.Internal.Queue",
          "name": "pullFromTop",
          "normalized": "TaskHandle a-\u003eSTM(TaskHandle a)",
          "package": "priority-sync",
          "partial": "From Top",
          "signature": "TaskHandle a-\u003eSTM(TaskHandle a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Queue.html#v:pullFromTop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDon't return until the given \u003ccode\u003e\u003ca\u003eTaskHandle\u003c/a\u003e\u003c/code\u003es have been pulled from their associated \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003es.\n This doesn't guarantee that the \u003ccode\u003e\u003ca\u003eTaskHandle\u003c/a\u003e\u003c/code\u003e will ever be pulled, even when the \u003ccode\u003e\u003ca\u003eTaskHandle\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003e are both viable.\n You must concurrently arrange for every other \u003ccode\u003e\u003ca\u003eTaskHandle\u003c/a\u003e\u003c/code\u003e associated with the same \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003e to be pulled, or the \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003e will stall.\n \u003ccode\u003e\u003ca\u003epullSpecificTasks\u003c/a\u003e\u003c/code\u003e can handle lists \u003ccode\u003e\u003ca\u003eTaskHandle\u003c/a\u003e\u003c/code\u003es that are distributed among several \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003es, as well as a \u003ccode\u003e\u003ca\u003eTaskHandle\u003c/a\u003e\u003c/code\u003es that have\n already completed or complete concurrently from another thread.\n\u003c/p\u003e",
          "module": "PrioritySync.Internal.Queue",
          "name": "pullSpecificTasks",
          "package": "priority-sync",
          "signature": "[TaskHandle a] -\u003e IO ()",
          "source": "src/PrioritySync-Internal-Queue.html#pullSpecificTasks",
          "type": "function"
        },
        "index": {
          "description": "Don return until the given TaskHandle have been pulled from their associated Queue This doesn guarantee that the TaskHandle will ever be pulled even when the TaskHandle and Queue are both viable You must concurrently arrange for every other TaskHandle associated with the same Queue to be pulled or the Queue will stall pullSpecificTasks can handle lists TaskHandle that are distributed among several Queue as well as TaskHandle that have already completed or complete concurrently from another thread",
          "hierarchy": "PrioritySync Internal Queue",
          "module": "PrioritySync.Internal.Queue",
          "name": "pullSpecificTasks",
          "normalized": "[TaskHandle a]-\u003eIO()",
          "package": "priority-sync",
          "partial": "Specific Tasks",
          "signature": "[TaskHandle a]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Queue.html#v:pullSpecificTasks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePull and commit a task from this \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "PrioritySync.Internal.Queue",
          "name": "pullTask",
          "package": "priority-sync",
          "signature": "Queue a -\u003e STM (TaskHandle a)",
          "source": "src/PrioritySync-Internal-Queue.html#pullTask",
          "type": "function"
        },
        "index": {
          "description": "Pull and commit task from this Queue",
          "hierarchy": "PrioritySync Internal Queue",
          "module": "PrioritySync.Internal.Queue",
          "name": "pullTask",
          "normalized": "Queue a-\u003eSTM(TaskHandle a)",
          "package": "priority-sync",
          "partial": "Task",
          "signature": "Queue a-\u003eSTM(TaskHandle a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Queue.html#v:pullTask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePut a task with it's priority value onto this queue.  Returns a handle to the task.\n\u003c/p\u003e",
          "module": "PrioritySync.Internal.Queue",
          "name": "putTask",
          "package": "priority-sync",
          "signature": "Queue a -\u003e a -\u003e STM () -\u003e STM (TaskHandle a)",
          "source": "src/PrioritySync-Internal-Queue.html#putTask",
          "type": "function"
        },
        "index": {
          "description": "Put task with it priority value onto this queue Returns handle to the task",
          "hierarchy": "PrioritySync Internal Queue",
          "module": "PrioritySync.Internal.Queue",
          "name": "putTask",
          "normalized": "Queue a-\u003ea-\u003eSTM()-\u003eSTM(TaskHandle a)",
          "package": "priority-sync",
          "partial": "Task",
          "signature": "Queue a-\u003ea-\u003eSTM()-\u003eSTM(TaskHandle a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Queue.html#v:putTask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShould the \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003e run in FILO or FIFO order.  Ordering takes place after prioritization, and won't have much effect if priorities are very fine-grained.\n\u003c/p\u003e",
          "module": "[\"PrioritySync.Internal.Queue\",\"PrioritySync.PrioritySync\"]",
          "name": "queue_order",
          "package": "priority-sync",
          "signature": "QueueOrder",
          "source": "src/PrioritySync-Internal-Queue.html#QueueConfigurationRecord",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Queue.html#v:queue_order\",\"http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-PrioritySync.html#v:queue_order\"]"
        },
        "index": {
          "description": "Should the Queue run in FILO or FIFO order Ordering takes place after prioritization and won have much effect if priorities are very fine-grained",
          "hierarchy": "PrioritySync Internal Queue",
          "module": "PrioritySync.Internal.Queue",
          "name": "queue_order",
          "package": "priority-sync",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Queue.html#v:queue_order"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA predicate that must hold before any task may be pulled from a \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"PrioritySync.Internal.Queue\",\"PrioritySync.PrioritySync\"]",
          "name": "queue_predicate",
          "package": "priority-sync",
          "signature": "STM ()",
          "source": "src/PrioritySync-Internal-Queue.html#QueueConfigurationRecord",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Queue.html#v:queue_predicate\",\"http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-PrioritySync.html#v:queue_predicate\"]"
        },
        "index": {
          "description": "predicate that must hold before any task may be pulled from Queue",
          "hierarchy": "PrioritySync Internal Queue",
          "module": "PrioritySync.Internal.Queue",
          "name": "queue_predicate",
          "normalized": "STM()",
          "package": "priority-sync",
          "signature": "STM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Queue.html#v:queue_predicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the priority of this task, which only exists if the task is still enqueued.\n\u003c/p\u003e",
          "module": "PrioritySync.Internal.Queue",
          "name": "taskPriority",
          "package": "priority-sync",
          "signature": "TaskHandle a -\u003e STM (Maybe a)",
          "source": "src/PrioritySync-Internal-Queue.html#taskPriority",
          "type": "function"
        },
        "index": {
          "description": "Get the priority of this task which only exists if the task is still enqueued",
          "hierarchy": "PrioritySync Internal Queue",
          "module": "PrioritySync.Internal.Queue",
          "name": "taskPriority",
          "normalized": "TaskHandle a-\u003eSTM(Maybe a)",
          "package": "priority-sync",
          "partial": "Priority",
          "signature": "TaskHandle a-\u003eSTM(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Queue.html#v:taskPriority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003e associated with this task.\n\u003c/p\u003e",
          "module": "PrioritySync.Internal.Queue",
          "name": "taskQueue",
          "package": "priority-sync",
          "signature": "TaskHandle a -\u003e Queue a",
          "source": "src/PrioritySync-Internal-Queue.html#taskQueue",
          "type": "function"
        },
        "index": {
          "description": "Get the Queue associated with this task",
          "hierarchy": "PrioritySync Internal Queue",
          "module": "PrioritySync.Internal.Queue",
          "name": "taskQueue",
          "normalized": "TaskHandle a-\u003eQueue a",
          "package": "priority-sync",
          "partial": "Queue",
          "signature": "TaskHandle a-\u003eQueue a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Queue.html#v:taskQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PrioritySync.Internal.Receipt",
          "name": "Receipt",
          "package": "priority-sync",
          "source": "src/PrioritySync-Internal-Receipt.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "PrioritySync Internal Receipt",
          "module": "PrioritySync.Internal.Receipt",
          "name": "Receipt",
          "package": "priority-sync",
          "partial": "Receipt",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Receipt.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a notification when a claim is approved or scheduled.\n\u003c/p\u003e",
          "module": "PrioritySync.Internal.Receipt",
          "name": "Receipt",
          "package": "priority-sync",
          "source": "src/PrioritySync-Internal-Receipt.html#Receipt",
          "type": "data"
        },
        "index": {
          "description": "Get notification when claim is approved or scheduled",
          "hierarchy": "PrioritySync Internal Receipt",
          "module": "PrioritySync.Internal.Receipt",
          "name": "Receipt",
          "package": "priority-sync",
          "partial": "Receipt",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Receipt.html#t:Receipt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PrioritySync.Internal.Receipt",
          "name": "Receipt",
          "package": "priority-sync",
          "signature": "Receipt",
          "source": "src/PrioritySync-Internal-Receipt.html#Receipt",
          "type": "function"
        },
        "index": {
          "hierarchy": "PrioritySync Internal Receipt",
          "module": "PrioritySync.Internal.Receipt",
          "name": "Receipt",
          "package": "priority-sync",
          "partial": "Receipt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Receipt.html#v:Receipt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PrioritySync.Internal.Receipt",
          "name": "receipt_base_context",
          "package": "priority-sync",
          "signature": "c",
          "source": "src/PrioritySync-Internal-Receipt.html#Receipt",
          "type": "function"
        },
        "index": {
          "hierarchy": "PrioritySync Internal Receipt",
          "module": "PrioritySync.Internal.Receipt",
          "name": "receipt_base_context",
          "package": "priority-sync",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Receipt.html#v:receipt_base_context"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PrioritySync.Internal.Receipt",
          "name": "receipt_entering_callback",
          "package": "priority-sync",
          "signature": "ClaimHandle c -\u003e STM ()",
          "source": "src/PrioritySync-Internal-Receipt.html#Receipt",
          "type": "function"
        },
        "index": {
          "hierarchy": "PrioritySync Internal Receipt",
          "module": "PrioritySync.Internal.Receipt",
          "name": "receipt_entering_callback",
          "normalized": "ClaimHandle a-\u003eSTM()",
          "package": "priority-sync",
          "signature": "ClaimHandle c-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Receipt.html#v:receipt_entering_callback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PrioritySync.Internal.Receipt",
          "name": "receipt_exiting_callback",
          "package": "priority-sync",
          "signature": "ClaimHandle c -\u003e STM ()",
          "source": "src/PrioritySync-Internal-Receipt.html#Receipt",
          "type": "function"
        },
        "index": {
          "hierarchy": "PrioritySync Internal Receipt",
          "module": "PrioritySync.Internal.Receipt",
          "name": "receipt_exiting_callback",
          "normalized": "ClaimHandle a-\u003eSTM()",
          "package": "priority-sync",
          "signature": "ClaimHandle c-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Receipt.html#v:receipt_exiting_callback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PrioritySync.Internal.Room",
          "name": "Room",
          "package": "priority-sync",
          "source": "src/PrioritySync-Internal-Room.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "PrioritySync Internal Room",
          "module": "PrioritySync.Internal.Room",
          "name": "Room",
          "package": "priority-sync",
          "partial": "Room",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Room.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eClaim\u003c/a\u003e\u003c/code\u003e, or attempt to acquire or release a \u003ccode\u003e\u003ca\u003eRoom\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "PrioritySync.Internal.Room",
          "name": "Claim",
          "package": "priority-sync",
          "source": "src/PrioritySync-Internal-RoomCore.html#Claim",
          "type": "data"
        },
        "index": {
          "description": "Claim or attempt to acquire or release Room",
          "hierarchy": "PrioritySync Internal Room",
          "module": "PrioritySync.Internal.Room",
          "name": "Claim",
          "package": "priority-sync",
          "partial": "Claim",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Room.html#t:Claim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PrioritySync.Internal.Room",
          "name": "ClaimMode",
          "package": "priority-sync",
          "source": "src/PrioritySync-Internal-RoomCore.html#ClaimMode",
          "type": "data"
        },
        "index": {
          "hierarchy": "PrioritySync Internal Room",
          "module": "PrioritySync.Internal.Room",
          "name": "ClaimMode",
          "package": "priority-sync",
          "partial": "Claim Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Room.html#t:ClaimMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA resource pool, parameterized against arbitrary user data.\n\u003c/p\u003e",
          "module": "PrioritySync.Internal.Room",
          "name": "Room",
          "package": "priority-sync",
          "source": "src/PrioritySync-Internal-RoomCore.html#Room",
          "type": "data"
        },
        "index": {
          "description": "resource pool parameterized against arbitrary user data",
          "hierarchy": "PrioritySync Internal Room",
          "module": "PrioritySync.Internal.Room",
          "name": "Room",
          "package": "priority-sync",
          "partial": "Room",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Room.html#t:Room"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"PrioritySync.Internal.Room\",\"PrioritySync.PrioritySync\"]",
          "name": "Acquire",
          "package": "priority-sync",
          "signature": "Acquire",
          "source": "src/PrioritySync-Internal-RoomCore.html#ClaimMode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Room.html#v:Acquire\",\"http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-PrioritySync.html#v:Acquire\"]"
        },
        "index": {
          "hierarchy": "PrioritySync Internal Room",
          "module": "PrioritySync.Internal.Room",
          "name": "Acquire",
          "package": "priority-sync",
          "partial": "Acquire",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Room.html#v:Acquire"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"PrioritySync.Internal.Room\",\"PrioritySync.PrioritySync\"]",
          "name": "Release",
          "package": "priority-sync",
          "signature": "Release",
          "source": "src/PrioritySync-Internal-RoomCore.html#ClaimMode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Room.html#v:Release\",\"http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-PrioritySync.html#v:Release\"]"
        },
        "index": {
          "hierarchy": "PrioritySync Internal Room",
          "module": "PrioritySync.Internal.Room",
          "name": "Release",
          "package": "priority-sync",
          "partial": "Release",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Room.html#v:Release"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApprove a claim.  This actually acquires or releases a \u003ccode\u003e\u003ca\u003eRoom\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "PrioritySync.Internal.Room",
          "name": "approve",
          "package": "priority-sync",
          "signature": "Claim u -\u003e STM ()",
          "source": "src/PrioritySync-Internal-RoomCore.html#approve",
          "type": "function"
        },
        "index": {
          "description": "Approve claim This actually acquires or releases Room",
          "hierarchy": "PrioritySync Internal Room",
          "module": "PrioritySync.Internal.Room",
          "name": "approve",
          "normalized": "Claim a-\u003eSTM()",
          "package": "priority-sync",
          "signature": "Claim u-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Room.html#v:approve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eapprove\u003c/a\u003e\u003c/code\u003e some claims according to their constraints.\n\u003c/p\u003e",
          "module": "[\"PrioritySync.Internal.Room\",\"PrioritySync.Internal.RoomConstraint\"]",
          "name": "approveClaims",
          "package": "priority-sync",
          "signature": "[Claim u] -\u003e STM ()",
          "source": "src/PrioritySync-Internal-RoomConstraint.html#approveClaims",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Room.html#v:approveClaims\",\"http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-RoomConstraint.html#v:approveClaims\"]"
        },
        "index": {
          "description": "approve some claims according to their constraints",
          "hierarchy": "PrioritySync Internal Room",
          "module": "PrioritySync.Internal.Room",
          "name": "approveClaims",
          "normalized": "[Claim a]-\u003eSTM()",
          "package": "priority-sync",
          "partial": "Claims",
          "signature": "[Claim u]-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Room.html#v:approveClaims"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTemporarily \u003ccode\u003e\u003ca\u003eAcquire\u003c/a\u003e\u003c/code\u003e, and then release, or \u003ccode\u003e\u003ca\u003eRelease\u003c/a\u003e\u003c/code\u003e, and then acquire, some \u003ccode\u003e\u003ca\u003eRoom\u003c/a\u003e\u003c/code\u003es for the duration of a critical section.\n A simple example where a room might be used to prevent interleaving of \u003ccode\u003estdout\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e room \u003c- newRoom (MaxThreads 1)\n forkIO $ claim Acquire (Default,room) $ putStrLn \"Hello World!\"\n forkIO $ claim Acquire (Default,room) $ putStrLn \"Foo!  Bar!\"\n\u003c/pre\u003e",
          "module": "[\"PrioritySync.Internal.Room\",\"PrioritySync.PrioritySync\"]",
          "name": "claim",
          "package": "priority-sync",
          "signature": "ClaimMode -\u003e c -\u003e IO a -\u003e IO a",
          "source": "src/PrioritySync-Internal-Room.html#claim",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Room.html#v:claim\",\"http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-PrioritySync.html#v:claim\"]"
        },
        "index": {
          "description": "Temporarily Acquire and then release or Release and then acquire some Room for the duration of critical section simple example where room might be used to prevent interleaving of stdout room newRoom MaxThreads forkIO claim Acquire Default room putStrLn Hello World forkIO claim Acquire Default room putStrLn Foo Bar",
          "hierarchy": "PrioritySync Internal Room",
          "module": "PrioritySync.Internal.Room",
          "name": "claim",
          "normalized": "ClaimMode-\u003ea-\u003eIO b-\u003eIO b",
          "package": "priority-sync",
          "signature": "ClaimMode-\u003ec-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Room.html#v:claim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the \u003ccode\u003e\u003ca\u003eRoom\u003c/a\u003e\u003c/code\u003e target of a \u003ccode\u003e\u003ca\u003eClaim\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "PrioritySync.Internal.Room",
          "name": "claimedRoom",
          "package": "priority-sync",
          "signature": "Claim u -\u003e Room u",
          "source": "src/PrioritySync-Internal-RoomCore.html#claimedRoom",
          "type": "function"
        },
        "index": {
          "description": "Get the Room target of Claim",
          "hierarchy": "PrioritySync Internal Room",
          "module": "PrioritySync.Internal.Room",
          "name": "claimedRoom",
          "normalized": "Claim a-\u003eRoom a",
          "package": "priority-sync",
          "partial": "Room",
          "signature": "Claim u-\u003eRoom u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Room.html#v:claimedRoom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the thread attempting a \u003ccode\u003e\u003ca\u003eClaim\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "PrioritySync.Internal.Room",
          "name": "claimedThread",
          "package": "priority-sync",
          "signature": "Claim u -\u003e ThreadId",
          "source": "src/PrioritySync-Internal-RoomCore.html#claimedThread",
          "type": "function"
        },
        "index": {
          "description": "Get the thread attempting Claim",
          "hierarchy": "PrioritySync Internal Room",
          "module": "PrioritySync.Internal.Room",
          "name": "claimedThread",
          "normalized": "Claim a-\u003eThreadId",
          "package": "priority-sync",
          "partial": "Thread",
          "signature": "Claim u-\u003eThreadId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Room.html#v:claimedThread"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet all \u003ccode\u003e\u003ca\u003eThreadId\u003c/a\u003e\u003c/code\u003es that are currently claiming this \u003ccode\u003e\u003ca\u003eRoom\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "PrioritySync.Internal.Room",
          "name": "inUse",
          "package": "priority-sync",
          "signature": "Room u -\u003e STM (Set ThreadId)",
          "source": "src/PrioritySync-Internal-RoomCore.html#inUse",
          "type": "function"
        },
        "index": {
          "description": "Get all ThreadId that are currently claiming this Room",
          "hierarchy": "PrioritySync Internal Room",
          "module": "PrioritySync.Internal.Room",
          "name": "inUse",
          "normalized": "Room a-\u003eSTM(Set ThreadId)",
          "package": "priority-sync",
          "partial": "Use",
          "signature": "Room u-\u003eSTM(Set ThreadId)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Room.html#v:inUse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue iff a Room is empty.\n\u003c/p\u003e",
          "module": "PrioritySync.Internal.Room",
          "name": "isEmpty",
          "package": "priority-sync",
          "signature": "Room u -\u003e STM Bool",
          "source": "src/PrioritySync-Internal-RoomCore.html#isEmpty",
          "type": "function"
        },
        "index": {
          "description": "True iff Room is empty",
          "hierarchy": "PrioritySync Internal Room",
          "module": "PrioritySync.Internal.Room",
          "name": "isEmpty",
          "normalized": "Room a-\u003eSTM Bool",
          "package": "priority-sync",
          "partial": "Empty",
          "signature": "Room u-\u003eSTM Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Room.html#v:isEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new Room with some arbitrary user data.\n\u003c/p\u003e",
          "module": "[\"PrioritySync.Internal.Room\",\"PrioritySync.PrioritySync\"]",
          "name": "newRoom",
          "package": "priority-sync",
          "signature": "u -\u003e IO (Room u)",
          "source": "src/PrioritySync-Internal-RoomCore.html#newRoom",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Room.html#v:newRoom\",\"http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-PrioritySync.html#v:newRoom\"]"
        },
        "index": {
          "description": "Create new Room with some arbitrary user data",
          "hierarchy": "PrioritySync Internal Room",
          "module": "PrioritySync.Internal.Room",
          "name": "newRoom",
          "normalized": "a-\u003eIO(Room a)",
          "package": "priority-sync",
          "partial": "Room",
          "signature": "u-\u003eIO(Room u)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Room.html#v:newRoom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the user data associated with a \u003ccode\u003e\u003ca\u003eRoom\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"PrioritySync.Internal.Room\",\"PrioritySync.PrioritySync\"]",
          "name": "userData",
          "package": "priority-sync",
          "signature": "Room u -\u003e u",
          "source": "src/PrioritySync-Internal-RoomCore.html#userData",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Room.html#v:userData\",\"http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-PrioritySync.html#v:userData\"]"
        },
        "index": {
          "description": "Get the user data associated with Room",
          "hierarchy": "PrioritySync Internal Room",
          "module": "PrioritySync.Internal.Room",
          "name": "userData",
          "normalized": "Room a-\u003ea",
          "package": "priority-sync",
          "partial": "Data",
          "signature": "Room u-\u003eu",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Room.html#v:userData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PrioritySync.Internal.RoomConstraint",
          "name": "RoomConstraint",
          "package": "priority-sync",
          "source": "src/PrioritySync-Internal-RoomConstraint.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "PrioritySync Internal RoomConstraint",
          "module": "PrioritySync.Internal.RoomConstraint",
          "name": "RoomConstraint",
          "package": "priority-sync",
          "partial": "Room Constraint",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-RoomConstraint.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA maximum limit on the number of threads allowed to claim a room.\n\u003c/p\u003e",
          "module": "PrioritySync.Internal.RoomConstraint",
          "name": "MaxThreads",
          "package": "priority-sync",
          "source": "src/PrioritySync-Internal-RoomConstraint.html#MaxThreads",
          "type": "newtype"
        },
        "index": {
          "description": "maximum limit on the number of threads allowed to claim room",
          "hierarchy": "PrioritySync Internal RoomConstraint",
          "module": "PrioritySync.Internal.RoomConstraint",
          "name": "MaxThreads",
          "package": "priority-sync",
          "partial": "Max Threads",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-RoomConstraint.html#t:MaxThreads"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PrioritySync.Internal.RoomConstraint",
          "name": "RoomConstraint",
          "package": "priority-sync",
          "source": "src/PrioritySync-Internal-RoomConstraint.html#RoomConstraint",
          "type": "class"
        },
        "index": {
          "hierarchy": "PrioritySync Internal RoomConstraint",
          "module": "PrioritySync.Internal.RoomConstraint",
          "name": "RoomConstraint",
          "package": "priority-sync",
          "partial": "Room Constraint",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-RoomConstraint.html#t:RoomConstraint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"PrioritySync.Internal.RoomConstraint\",\"PrioritySync.PrioritySync\"]",
          "name": "MaxThreads",
          "package": "priority-sync",
          "signature": "MaxThreads Int",
          "source": "src/PrioritySync-Internal-RoomConstraint.html#MaxThreads",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-RoomConstraint.html#v:MaxThreads\",\"http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-PrioritySync.html#v:MaxThreads\"]"
        },
        "index": {
          "hierarchy": "PrioritySync Internal RoomConstraint",
          "module": "PrioritySync.Internal.RoomConstraint",
          "name": "MaxThreads",
          "package": "priority-sync",
          "partial": "Max Threads",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-RoomConstraint.html#v:MaxThreads"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShould either \u003ccode\u003e\u003ca\u003eapprove\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eretry\u003c/a\u003e\u003c/code\u003e each claim.\n\u003c/p\u003e",
          "module": "PrioritySync.Internal.RoomConstraint",
          "name": "approveConstraint",
          "package": "priority-sync",
          "signature": "Claim a -\u003e u -\u003e STM ()",
          "source": "src/PrioritySync-Internal-RoomConstraint.html#approveConstraint",
          "type": "method"
        },
        "index": {
          "description": "Should either approve or retry each claim",
          "hierarchy": "PrioritySync Internal RoomConstraint",
          "module": "PrioritySync.Internal.RoomConstraint",
          "name": "approveConstraint",
          "normalized": "Claim a-\u003eb-\u003eSTM()",
          "package": "priority-sync",
          "partial": "Constraint",
          "signature": "Claim a-\u003eu-\u003eSTM()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-RoomConstraint.html#v:approveConstraint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PrioritySync.Internal.RoomGroup",
          "name": "RoomGroup",
          "package": "priority-sync",
          "source": "src/PrioritySync-Internal-RoomGroup.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "PrioritySync Internal RoomGroup",
          "module": "PrioritySync.Internal.RoomGroup",
          "name": "RoomGroup",
          "package": "priority-sync",
          "partial": "Room Group",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-RoomGroup.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PrioritySync.Internal.RoomGroup",
          "name": "RoomGroup",
          "package": "priority-sync",
          "source": "src/PrioritySync-Internal-RoomGroup.html#RoomGroup",
          "type": "class"
        },
        "index": {
          "hierarchy": "PrioritySync Internal RoomGroup",
          "module": "PrioritySync.Internal.RoomGroup",
          "name": "RoomGroup",
          "package": "priority-sync",
          "partial": "Room Group",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-RoomGroup.html#t:RoomGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PrioritySync.Internal.RoomGroup",
          "name": "roomsOf",
          "package": "priority-sync",
          "signature": "m -\u003e [Room (UserData m)]",
          "source": "src/PrioritySync-Internal-RoomGroup.html#roomsOf",
          "type": "method"
        },
        "index": {
          "hierarchy": "PrioritySync Internal RoomGroup",
          "module": "PrioritySync.Internal.RoomGroup",
          "name": "roomsOf",
          "normalized": "a-\u003e[Room(UserData a)]",
          "package": "priority-sync",
          "partial": "Of",
          "signature": "m-\u003e[Room(UserData m)]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-RoomGroup.html#v:roomsOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PrioritySync.Internal.Schedule",
          "name": "Schedule",
          "package": "priority-sync",
          "source": "src/PrioritySync-Internal-Schedule.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "PrioritySync Internal Schedule",
          "module": "PrioritySync.Internal.Schedule",
          "name": "Schedule",
          "package": "priority-sync",
          "partial": "Schedule",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Schedule.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSchedule a task to run from a prioritized \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003e.  The task will wait until it arrives at (or, with failover, near) the top of queue.  Typical usage:\n\u003c/p\u003e\u003cpre\u003e Schedule q 2 room1\n\u003c/pre\u003e\u003cp\u003eOnly the rooms inside the \u003ccode\u003e\u003ca\u003eSchedule\u003c/a\u003e\u003c/code\u003e declaration are claimed with scheduling.  If access to a room doesn't need to be prioritized, it can be set outside\n the schedule:\n\u003c/p\u003e\u003cpre\u003e (Schedule q 2 room1,room2)\n\u003c/pre\u003e",
          "module": "PrioritySync.Internal.Schedule",
          "name": "Schedule",
          "package": "priority-sync",
          "source": "src/PrioritySync-Internal-Schedule.html#Schedule",
          "type": "data"
        },
        "index": {
          "description": "Schedule task to run from prioritized Queue The task will wait until it arrives at or with failover near the top of queue Typical usage Schedule room1 Only the rooms inside the Schedule declaration are claimed with scheduling If access to room doesn need to be prioritized it can be set outside the schedule Schedule room1 room2",
          "hierarchy": "PrioritySync Internal Schedule",
          "module": "PrioritySync.Internal.Schedule",
          "name": "Schedule",
          "package": "priority-sync",
          "partial": "Schedule",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Schedule.html#t:Schedule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PrioritySync.Internal.Schedule",
          "name": "Schedule",
          "package": "priority-sync",
          "signature": "Schedule (Queue p) p c",
          "source": "src/PrioritySync-Internal-Schedule.html#Schedule",
          "type": "function"
        },
        "index": {
          "hierarchy": "PrioritySync Internal Schedule",
          "module": "PrioritySync.Internal.Schedule",
          "name": "Schedule",
          "package": "priority-sync",
          "partial": "Schedule",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Schedule.html#v:Schedule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA prioritized TaskPool.  This consists of a \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003e, which prioritizes tasks, and a \u003ccode\u003e\u003ca\u003eRoom\u003c/a\u003e\u003c/code\u003e which restricts the number of tasks that may execute at one time.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "PrioritySync.Internal.TaskPool",
          "name": "TaskPool",
          "package": "priority-sync",
          "source": "src/PrioritySync-Internal-TaskPool.html",
          "type": "module"
        },
        "index": {
          "description": "prioritized TaskPool This consists of Queue which prioritizes tasks and Room which restricts the number of tasks that may execute at one time",
          "hierarchy": "PrioritySync Internal TaskPool",
          "module": "PrioritySync.Internal.TaskPool",
          "name": "TaskPool",
          "package": "priority-sync",
          "partial": "Task Pool",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-TaskPool.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PrioritySync.Internal.TaskPool",
          "name": "TaskPool",
          "package": "priority-sync",
          "source": "src/PrioritySync-Internal-TaskPool.html#TaskPool",
          "type": "data"
        },
        "index": {
          "hierarchy": "PrioritySync Internal TaskPool",
          "module": "PrioritySync.Internal.TaskPool",
          "name": "TaskPool",
          "package": "priority-sync",
          "partial": "Task Pool",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-TaskPool.html#t:TaskPool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue iff this \u003ccode\u003e\u003ca\u003eTaskPool\u003c/a\u003e\u003c/code\u003e is entirely empty and inactive.\n\u003c/p\u003e",
          "module": "PrioritySync.Internal.TaskPool",
          "name": "isEmpty",
          "package": "priority-sync",
          "signature": "TaskPool p u -\u003e STM Bool",
          "source": "src/PrioritySync-Internal-TaskPool.html#isEmpty",
          "type": "function"
        },
        "index": {
          "description": "True iff this TaskPool is entirely empty and inactive",
          "hierarchy": "PrioritySync Internal TaskPool",
          "module": "PrioritySync.Internal.TaskPool",
          "name": "isEmpty",
          "normalized": "TaskPool a b-\u003eSTM Bool",
          "package": "priority-sync",
          "partial": "Empty",
          "signature": "TaskPool p u-\u003eSTM Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-TaskPool.html#v:isEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eTaskPool\u003c/a\u003e\u003c/code\u003e.  \u003ccode\u003e\u003ca\u003eTaskPool\u003c/a\u003e\u003c/code\u003es begin stopped, use \u003ccode\u003e\u003ca\u003estartQueue\u003c/a\u003e\u003c/code\u003e to start.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e A \u003ccode\u003e\u003ca\u003eQueueConfigurationRecord\u003c/a\u003e\u003c/code\u003e for the backing \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003e.  A typical value is \u003ccode\u003e\u003ca\u003efair_queue_configuration\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e The allowed number of threads that can access the \u003ccode\u003e\u003ca\u003eTaskPool\u003c/a\u003e\u003c/code\u003e simultaneously.\n\u003c/li\u003e\u003cli\u003e The user data for the backing \u003ccode\u003e\u003ca\u003eRoom\u003c/a\u003e\u003c/code\u003e.  This can be \u003ccode\u003e()\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eConsider using \u003ccode\u003e\u003ca\u003esimpleTaskPool\u003c/a\u003e\u003c/code\u003e if you have no special needs.\n\u003c/p\u003e",
          "module": "[\"PrioritySync.Internal.TaskPool\",\"PrioritySync.PrioritySync\"]",
          "name": "newTaskPool",
          "package": "priority-sync",
          "signature": "QueueConfigurationRecord p -\u003e Int -\u003e u -\u003e IO (TaskPool p u)",
          "source": "src/PrioritySync-Internal-TaskPool.html#newTaskPool",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-TaskPool.html#v:newTaskPool\",\"http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-PrioritySync.html#v:newTaskPool\"]"
        },
        "index": {
          "description": "Create new TaskPool TaskPool begin stopped use startQueue to start QueueConfigurationRecord for the backing Queue typical value is fair queue configuration The allowed number of threads that can access the TaskPool simultaneously The user data for the backing Room This can be Consider using simpleTaskPool if you have no special needs",
          "hierarchy": "PrioritySync Internal TaskPool",
          "module": "PrioritySync.Internal.TaskPool",
          "name": "newTaskPool",
          "normalized": "QueueConfigurationRecord a-\u003eInt-\u003eb-\u003eIO(TaskPool a b)",
          "package": "priority-sync",
          "partial": "Task Pool",
          "signature": "QueueConfigurationRecord p-\u003eInt-\u003eu-\u003eIO(TaskPool p u)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-TaskPool.html#v:newTaskPool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003e that admits new tasks to this \u003ccode\u003e\u003ca\u003eTaskPool\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "PrioritySync.Internal.TaskPool",
          "name": "poolQueue",
          "package": "priority-sync",
          "signature": "TaskPool p u -\u003e Queue p",
          "source": "src/PrioritySync-Internal-TaskPool.html#poolQueue",
          "type": "function"
        },
        "index": {
          "description": "Get the Queue that admits new tasks to this TaskPool",
          "hierarchy": "PrioritySync Internal TaskPool",
          "module": "PrioritySync.Internal.TaskPool",
          "name": "poolQueue",
          "normalized": "TaskPool a b-\u003eQueue a",
          "package": "priority-sync",
          "partial": "Queue",
          "signature": "TaskPool p u-\u003eQueue p",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-TaskPool.html#v:poolQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the \u003ccode\u003e\u003ca\u003eRoom\u003c/a\u003e\u003c/code\u003e that primarily constrains this \u003ccode\u003e\u003ca\u003eTaskPool\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "PrioritySync.Internal.TaskPool",
          "name": "poolRoom",
          "package": "priority-sync",
          "signature": "TaskPool p u -\u003e Room (TaskPoolConstraint u)",
          "source": "src/PrioritySync-Internal-TaskPool.html#poolRoom",
          "type": "function"
        },
        "index": {
          "description": "Get the Room that primarily constrains this TaskPool",
          "hierarchy": "PrioritySync Internal TaskPool",
          "module": "PrioritySync.Internal.TaskPool",
          "name": "poolRoom",
          "normalized": "TaskPool a b-\u003eRoom(TaskPoolConstraint b)",
          "package": "priority-sync",
          "partial": "Room",
          "signature": "TaskPool p u-\u003eRoom(TaskPoolConstraint u)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-TaskPool.html#v:poolRoom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA prioritized \u003ccode\u003eClaimContext\u003c/code\u003e for a task pool.\n\u003c/p\u003e",
          "module": "[\"PrioritySync.Internal.TaskPool\",\"PrioritySync.PrioritySync\"]",
          "name": "schedule",
          "package": "priority-sync",
          "signature": "TaskPool p u -\u003e p -\u003e Schedule p (Constrained (TaskPoolConstraint u), Room (TaskPoolConstraint u))",
          "source": "src/PrioritySync-Internal-TaskPool.html#schedule",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-TaskPool.html#v:schedule\",\"http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-PrioritySync.html#v:schedule\"]"
        },
        "index": {
          "description": "prioritized ClaimContext for task pool",
          "hierarchy": "PrioritySync Internal TaskPool",
          "module": "PrioritySync.Internal.TaskPool",
          "name": "schedule",
          "normalized": "TaskPool a b-\u003ea-\u003eSchedule a(Constrained(TaskPoolConstraint b),Room(TaskPoolConstraint b))",
          "package": "priority-sync",
          "signature": "TaskPool p u-\u003ep-\u003eSchedule p(Constrained(TaskPoolConstraint u),Room(TaskPoolConstraint u))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-TaskPool.html#v:schedule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJust create a new \u003ccode\u003e\u003ca\u003eTaskPool\u003c/a\u003e\u003c/code\u003e.  The task pool is constrained by the number of capabilities indicated by \u003ccode\u003e\u003ca\u003enumCapabilities\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"PrioritySync.Internal.TaskPool\",\"PrioritySync.PrioritySync\"]",
          "name": "simpleTaskPool",
          "package": "priority-sync",
          "signature": "IO (TaskPool p ())",
          "source": "src/PrioritySync-Internal-TaskPool.html#simpleTaskPool",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-TaskPool.html#v:simpleTaskPool\",\"http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-PrioritySync.html#v:simpleTaskPool\"]"
        },
        "index": {
          "description": "Just create new TaskPool The task pool is constrained by the number of capabilities indicated by numCapabilities",
          "hierarchy": "PrioritySync Internal TaskPool",
          "module": "PrioritySync.Internal.TaskPool",
          "name": "simpleTaskPool",
          "normalized": "IO(TaskPool a())",
          "package": "priority-sync",
          "partial": "Task Pool",
          "signature": "IO(TaskPool p())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-TaskPool.html#v:simpleTaskPool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStart the \u003ccode\u003e\u003ca\u003eTaskPool\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "PrioritySync.Internal.TaskPool",
          "name": "startQueue",
          "package": "priority-sync",
          "signature": "TaskPool p u -\u003e STM ()",
          "source": "src/PrioritySync-Internal-TaskPool.html#startQueue",
          "type": "function"
        },
        "index": {
          "description": "Start the TaskPool",
          "hierarchy": "PrioritySync Internal TaskPool",
          "module": "PrioritySync.Internal.TaskPool",
          "name": "startQueue",
          "normalized": "TaskPool a b-\u003eSTM()",
          "package": "priority-sync",
          "partial": "Queue",
          "signature": "TaskPool p u-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-TaskPool.html#v:startQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStop all activity on this \u003ccode\u003e\u003ca\u003eTaskPool\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "PrioritySync.Internal.TaskPool",
          "name": "stopQueue",
          "package": "priority-sync",
          "signature": "TaskPool p u -\u003e STM ()",
          "source": "src/PrioritySync-Internal-TaskPool.html#stopQueue",
          "type": "function"
        },
        "index": {
          "description": "Stop all activity on this TaskPool",
          "hierarchy": "PrioritySync Internal TaskPool",
          "module": "PrioritySync.Internal.TaskPool",
          "name": "stopQueue",
          "normalized": "TaskPool a b-\u003eSTM()",
          "package": "priority-sync",
          "partial": "Queue",
          "signature": "TaskPool p u-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-TaskPool.html#v:stopQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWait until a queue is finished.\n\u003c/p\u003e",
          "module": "[\"PrioritySync.Internal.TaskPool\",\"PrioritySync.PrioritySync\"]",
          "name": "waitUntilFinished",
          "package": "priority-sync",
          "signature": "TaskPool p u -\u003e IO ()",
          "source": "src/PrioritySync-Internal-TaskPool.html#waitUntilFinished",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-TaskPool.html#v:waitUntilFinished\",\"http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-PrioritySync.html#v:waitUntilFinished\"]"
        },
        "index": {
          "description": "Wait until queue is finished",
          "hierarchy": "PrioritySync Internal TaskPool",
          "module": "PrioritySync.Internal.TaskPool",
          "name": "waitUntilFinished",
          "normalized": "TaskPool a b-\u003eIO()",
          "package": "priority-sync",
          "partial": "Until Finished",
          "signature": "TaskPool p u-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-TaskPool.html#v:waitUntilFinished"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PrioritySync.Internal.Unconstrained",
          "name": "Unconstrained",
          "package": "priority-sync",
          "source": "src/PrioritySync-Internal-Unconstrained.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "PrioritySync Internal Unconstrained",
          "module": "PrioritySync.Internal.Unconstrained",
          "name": "Unconstrained",
          "package": "priority-sync",
          "partial": "Unconstrained",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Unconstrained.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDon't check any \u003ccode\u003eRoomConstraint\u003c/code\u003es when acquiring a \u003ccode\u003e\u003ca\u003eRoom\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "PrioritySync.Internal.Unconstrained",
          "name": "Unconstrained",
          "package": "priority-sync",
          "source": "src/PrioritySync-Internal-Unconstrained.html#Unconstrained",
          "type": "data"
        },
        "index": {
          "description": "Don check any RoomConstraint when acquiring Room",
          "hierarchy": "PrioritySync Internal Unconstrained",
          "module": "PrioritySync.Internal.Unconstrained",
          "name": "Unconstrained",
          "package": "priority-sync",
          "partial": "Unconstrained",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Unconstrained.html#t:Unconstrained"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"PrioritySync.Internal.Unconstrained\",\"PrioritySync.PrioritySync\"]",
          "name": "Unconstrained",
          "package": "priority-sync",
          "signature": "Unconstrained",
          "source": "src/PrioritySync-Internal-Unconstrained.html#Unconstrained",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Unconstrained.html#v:Unconstrained\",\"http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-PrioritySync.html#v:Unconstrained\"]"
        },
        "index": {
          "hierarchy": "PrioritySync Internal Unconstrained",
          "module": "PrioritySync.Internal.Unconstrained",
          "name": "Unconstrained",
          "package": "priority-sync",
          "partial": "Unconstrained",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-Unconstrained.html#v:Unconstrained"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PrioritySync.Internal.UserData",
          "name": "UserData",
          "package": "priority-sync",
          "source": "src/PrioritySync-Internal-UserData.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "PrioritySync Internal UserData",
          "module": "PrioritySync.Internal.UserData",
          "name": "UserData",
          "package": "priority-sync",
          "partial": "User Data",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-UserData.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PrioritySync.Internal.UserData",
          "name": "UserData",
          "package": "priority-sync",
          "signature": "UserData",
          "type": "function"
        },
        "index": {
          "hierarchy": "PrioritySync Internal UserData",
          "module": "PrioritySync.Internal.UserData",
          "name": "UserData",
          "package": "priority-sync",
          "partial": "User Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-Internal-UserData.html#t:UserData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PrioritySync.PrioritySync",
          "name": "PrioritySync",
          "package": "priority-sync",
          "source": "src/PrioritySync-PrioritySync.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "PrioritySync PrioritySync",
          "module": "PrioritySync.PrioritySync",
          "name": "PrioritySync",
          "package": "priority-sync",
          "partial": "Priority Sync",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-PrioritySync.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PrioritySync.PrioritySync",
          "name": "ClaimMode",
          "package": "priority-sync",
          "source": "src/PrioritySync-Internal-RoomCore.html#ClaimMode",
          "type": "data"
        },
        "index": {
          "hierarchy": "PrioritySync PrioritySync",
          "module": "PrioritySync.PrioritySync",
          "name": "ClaimMode",
          "package": "priority-sync",
          "partial": "Claim Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-PrioritySync.html#t:ClaimMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequire that all \u003ccode\u003e\u003ca\u003eRoomConstraint\u003c/a\u003e\u003c/code\u003es be satisfied when acquiring a \u003ccode\u003e\u003ca\u003eRoom\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "PrioritySync.PrioritySync",
          "name": "Constrained",
          "package": "priority-sync",
          "source": "src/PrioritySync-Internal-Constrained.html#Constrained",
          "type": "data"
        },
        "index": {
          "description": "Require that all RoomConstraint be satisfied when acquiring Room",
          "hierarchy": "PrioritySync PrioritySync",
          "module": "PrioritySync.PrioritySync",
          "name": "Constrained",
          "package": "priority-sync",
          "partial": "Constrained",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-PrioritySync.html#t:Constrained"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA maximum limit on the number of threads allowed to claim a room.\n\u003c/p\u003e",
          "module": "PrioritySync.PrioritySync",
          "name": "MaxThreads",
          "package": "priority-sync",
          "source": "src/PrioritySync-Internal-RoomConstraint.html#MaxThreads",
          "type": "newtype"
        },
        "index": {
          "description": "maximum limit on the number of threads allowed to claim room",
          "hierarchy": "PrioritySync PrioritySync",
          "module": "PrioritySync.PrioritySync",
          "name": "MaxThreads",
          "package": "priority-sync",
          "partial": "Max Threads",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-PrioritySync.html#t:MaxThreads"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA convenience class to observe the currently running occupants of a \u003ccode\u003eRoom\u003c/code\u003e or \u003ccode\u003eTaskPool\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "PrioritySync.PrioritySync",
          "name": "Occupancy",
          "package": "priority-sync",
          "source": "src/PrioritySync-PrioritySync.html#Occupancy",
          "type": "class"
        },
        "index": {
          "description": "convenience class to observe the currently running occupants of Room or TaskPool",
          "hierarchy": "PrioritySync PrioritySync",
          "module": "PrioritySync.PrioritySync",
          "name": "Occupancy",
          "package": "priority-sync",
          "partial": "Occupancy",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-PrioritySync.html#t:Occupancy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReprioritize a task.  This has no effect on a target that has already left the queue.\n\u003c/p\u003e",
          "module": "PrioritySync.PrioritySync",
          "name": "Prioritized",
          "package": "priority-sync",
          "source": "src/PrioritySync-Internal-Prioritized.html#Prioritized",
          "type": "class"
        },
        "index": {
          "description": "Reprioritize task This has no effect on target that has already left the queue",
          "hierarchy": "PrioritySync PrioritySync",
          "module": "PrioritySync.PrioritySync",
          "name": "Prioritized",
          "package": "priority-sync",
          "partial": "Prioritized",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-PrioritySync.html#t:Prioritized"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConfiguration options for a \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003e.  A \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003e blocks on a number of predicates when dispatching a job.  Generally, \u003ccode\u003e\u003ca\u003efair_queue_configuration\u003c/a\u003e\u003c/code\u003e\n should work well.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e A single STM predicate for the entire \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003e.  This blocks the entire \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003e until the predicate is satisfied.\n\u003c/li\u003e\u003cli\u003e A STM predicate parameterized by priority.  This blocks a single priority level, and the \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003e will skip all tasks at that priority.\n\u003c/li\u003e\u003cli\u003e Each task is itself an STM transaction, and can block itself.\n\u003c/li\u003e\u003cli\u003e Pure constraints on priority and ordering inversion.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eIf a task is blocked for any reason, the task is skipped and the next task attempted, in priority order.\n\u003c/p\u003e",
          "module": "PrioritySync.PrioritySync",
          "name": "QueueConfigurationRecord",
          "package": "priority-sync",
          "source": "src/PrioritySync-Internal-Queue.html#QueueConfigurationRecord",
          "type": "data"
        },
        "index": {
          "description": "Configuration options for Queue Queue blocks on number of predicates when dispatching job Generally fair queue configuration should work well single STM predicate for the entire Queue This blocks the entire Queue until the predicate is satisfied STM predicate parameterized by priority This blocks single priority level and the Queue will skip all tasks at that priority Each task is itself an STM transaction and can block itself Pure constraints on priority and ordering inversion If task is blocked for any reason the task is skipped and the next task attempted in priority order",
          "hierarchy": "PrioritySync PrioritySync",
          "module": "PrioritySync.PrioritySync",
          "name": "QueueConfigurationRecord",
          "package": "priority-sync",
          "partial": "Queue Configuration Record",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-PrioritySync.html#t:QueueConfigurationRecord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PrioritySync.PrioritySync",
          "name": "QueueOrder",
          "package": "priority-sync",
          "source": "src/PrioritySync-Internal-Queue.html#QueueOrder",
          "type": "data"
        },
        "index": {
          "hierarchy": "PrioritySync PrioritySync",
          "module": "PrioritySync.PrioritySync",
          "name": "QueueOrder",
          "package": "priority-sync",
          "partial": "Queue Order",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-PrioritySync.html#t:QueueOrder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA resource pool, parameterized against arbitrary user data.\n\u003c/p\u003e",
          "module": "PrioritySync.PrioritySync",
          "name": "Room",
          "package": "priority-sync",
          "source": "src/PrioritySync-Internal-RoomCore.html#Room",
          "type": "data"
        },
        "index": {
          "description": "resource pool parameterized against arbitrary user data",
          "hierarchy": "PrioritySync PrioritySync",
          "module": "PrioritySync.PrioritySync",
          "name": "Room",
          "package": "priority-sync",
          "partial": "Room",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-PrioritySync.html#t:Room"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PrioritySync.PrioritySync",
          "name": "TaskHandle",
          "package": "priority-sync",
          "source": "src/PrioritySync-Internal-Dispatch.html#TaskHandle",
          "type": "data"
        },
        "index": {
          "hierarchy": "PrioritySync PrioritySync",
          "module": "PrioritySync.PrioritySync",
          "name": "TaskHandle",
          "package": "priority-sync",
          "partial": "Task Handle",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-PrioritySync.html#t:TaskHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PrioritySync.PrioritySync",
          "name": "TaskPool",
          "package": "priority-sync",
          "source": "src/PrioritySync-Internal-TaskPool.html#TaskPool",
          "type": "data"
        },
        "index": {
          "hierarchy": "PrioritySync PrioritySync",
          "module": "PrioritySync.PrioritySync",
          "name": "TaskPool",
          "package": "priority-sync",
          "partial": "Task Pool",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-PrioritySync.html#t:TaskPool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDon't check any \u003ccode\u003eRoomConstraint\u003c/code\u003es when acquiring a \u003ccode\u003e\u003ca\u003eRoom\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "PrioritySync.PrioritySync",
          "name": "Unconstrained",
          "package": "priority-sync",
          "source": "src/PrioritySync-Internal-Unconstrained.html#Unconstrained",
          "type": "data"
        },
        "index": {
          "description": "Don check any RoomConstraint when acquiring Room",
          "hierarchy": "PrioritySync PrioritySync",
          "module": "PrioritySync.PrioritySync",
          "name": "Unconstrained",
          "package": "priority-sync",
          "partial": "Unconstrained",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-PrioritySync.html#t:Unconstrained"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PrioritySync.PrioritySync",
          "name": "getResult",
          "package": "priority-sync",
          "signature": "TaskHandle p a -\u003e IO a",
          "source": "src/PrioritySync-PrioritySync.html#getResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "PrioritySync PrioritySync",
          "module": "PrioritySync.PrioritySync",
          "name": "getResult",
          "normalized": "TaskHandle a b-\u003eIO b",
          "package": "priority-sync",
          "partial": "Result",
          "signature": "TaskHandle p a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-PrioritySync.html#v:getResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PrioritySync.PrioritySync",
          "name": "inUse",
          "package": "priority-sync",
          "signature": "o -\u003e IO (Set ThreadId)",
          "source": "src/PrioritySync-PrioritySync.html#inUse",
          "type": "method"
        },
        "index": {
          "hierarchy": "PrioritySync PrioritySync",
          "module": "PrioritySync.PrioritySync",
          "name": "inUse",
          "normalized": "a-\u003eIO(Set ThreadId)",
          "package": "priority-sync",
          "partial": "Use",
          "signature": "o-\u003eIO(Set ThreadId)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-PrioritySync.html#v:inUse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PrioritySync.PrioritySync",
          "name": "isEmpty",
          "package": "priority-sync",
          "signature": "o -\u003e IO Bool",
          "source": "src/PrioritySync-PrioritySync.html#isEmpty",
          "type": "method"
        },
        "index": {
          "hierarchy": "PrioritySync PrioritySync",
          "module": "PrioritySync.PrioritySync",
          "name": "isEmpty",
          "normalized": "a-\u003eIO Bool",
          "package": "priority-sync",
          "partial": "Empty",
          "signature": "o-\u003eIO Bool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-PrioritySync.html#v:isEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number of tasks waiting on this \u003ccode\u003eTaskPool\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "PrioritySync.PrioritySync",
          "name": "load",
          "package": "priority-sync",
          "signature": "TaskPool p u -\u003e IO Int",
          "source": "src/PrioritySync-PrioritySync.html#load",
          "type": "function"
        },
        "index": {
          "description": "The number of tasks waiting on this TaskPool",
          "hierarchy": "PrioritySync PrioritySync",
          "module": "PrioritySync.PrioritySync",
          "name": "load",
          "normalized": "TaskPool a b-\u003eIO Int",
          "package": "priority-sync",
          "signature": "TaskPool p u-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-PrioritySync.html#v:load"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PrioritySync.PrioritySync",
          "name": "reprioritize",
          "package": "priority-sync",
          "signature": "TaskHandle p a -\u003e (p -\u003e p) -\u003e IO ()",
          "source": "src/PrioritySync-PrioritySync.html#reprioritize",
          "type": "function"
        },
        "index": {
          "hierarchy": "PrioritySync PrioritySync",
          "module": "PrioritySync.PrioritySync",
          "name": "reprioritize",
          "normalized": "TaskHandle a b-\u003e(a-\u003ea)-\u003eIO()",
          "package": "priority-sync",
          "signature": "TaskHandle p a-\u003e(p-\u003ep)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-PrioritySync.html#v:reprioritize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PrioritySync.PrioritySync",
          "name": "startQueue",
          "package": "priority-sync",
          "signature": "TaskPool p a -\u003e IO ()",
          "source": "src/PrioritySync-PrioritySync.html#startQueue",
          "type": "function"
        },
        "index": {
          "hierarchy": "PrioritySync PrioritySync",
          "module": "PrioritySync.PrioritySync",
          "name": "startQueue",
          "normalized": "TaskPool a b-\u003eIO()",
          "package": "priority-sync",
          "partial": "Queue",
          "signature": "TaskPool p a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-PrioritySync.html#v:startQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PrioritySync.PrioritySync",
          "name": "stopQueue",
          "package": "priority-sync",
          "signature": "TaskPool p a -\u003e IO ()",
          "source": "src/PrioritySync-PrioritySync.html#stopQueue",
          "type": "function"
        },
        "index": {
          "hierarchy": "PrioritySync PrioritySync",
          "module": "PrioritySync.PrioritySync",
          "name": "stopQueue",
          "normalized": "TaskPool a b-\u003eIO()",
          "package": "priority-sync",
          "partial": "Queue",
          "signature": "TaskPool p a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-PrioritySync.html#v:stopQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PrioritySync.PrioritySync",
          "name": "tryGetResult",
          "package": "priority-sync",
          "signature": "TaskHandle p a -\u003e IO (Maybe a)",
          "source": "src/PrioritySync-PrioritySync.html#tryGetResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "PrioritySync PrioritySync",
          "module": "PrioritySync.PrioritySync",
          "name": "tryGetResult",
          "normalized": "TaskHandle a b-\u003eIO(Maybe b)",
          "package": "priority-sync",
          "partial": "Get Result",
          "signature": "TaskHandle p a-\u003eIO(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/priority-sync/docs/PrioritySync-PrioritySync.html#v:tryGetResult"
      }
    }
  ]
]