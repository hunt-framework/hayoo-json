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
        "word": "ghc-events"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events.Analysis.Capability",
          "name": "Capability",
          "package": "ghc-events",
          "source": "src/GHC-RTS-Events-Analysis-Capability.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "GHC RTS Events Analysis Capability",
          "module": "GHC.RTS.Events.Analysis.Capability",
          "name": "Capability",
          "package": "ghc-events",
          "partial": "Capability",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis-Capability.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis state machine tracks Haskell tasks (represented by the KernelThreadId\n of their OS thread) residing on capabilities and additionally\n tracks the (immutable) assignment of OS thread ids (KernelThreadId)\n to tasks ids (TaskId).\n Each Haskell task can only reside on one capability, but can be migrated\n between them.\n\u003c/p\u003e\u003cp\u003eInvariant for the \u003ccode\u003e(Map KernelThreadId Int, Map TaskId KernelThreadId)\u003c/code\u003e \n type: the second map is an injection (verified by the machine \n in \u003ccode\u003einsertTaskOS\u003c/code\u003e) and the following sets are equal: \n keys of the fist map and values of the second\n (follows from the construction of the maps by the machine).\n\u003c/p\u003e\u003cp\u003eThe machine verifies as much as \u003ccode\u003e\u003ca\u003ecapabilityTaskPoolMachine\u003c/a\u003e\u003c/code\u003e and additionally\n the data invariant, and offers a richer verification profile.\n\u003c/p\u003e",
          "module": "GHC.RTS.Events.Analysis.Capability",
          "name": "capabilityTaskOSMachine",
          "package": "ghc-events",
          "signature": "Machine (Map KernelThreadId Int, Map TaskId KernelThreadId) CapEvent",
          "source": "src/GHC-RTS-Events-Analysis-Capability.html#capabilityTaskOSMachine",
          "type": "function"
        },
        "index": {
          "description": "This state machine tracks Haskell tasks represented by the KernelThreadId of their OS thread residing on capabilities and additionally tracks the immutable assignment of OS thread ids KernelThreadId to tasks ids TaskId Each Haskell task can only reside on one capability but can be migrated between them Invariant for the Map KernelThreadId Int Map TaskId KernelThreadId type the second map is an injection verified by the machine in insertTaskOS and the following sets are equal keys of the fist map and values of the second follows from the construction of the maps by the machine The machine verifies as much as capabilityTaskPoolMachine and additionally the data invariant and offers richer verification profile",
          "hierarchy": "GHC RTS Events Analysis Capability",
          "module": "GHC.RTS.Events.Analysis.Capability",
          "name": "capabilityTaskOSMachine",
          "normalized": "Machine(Map KernelThreadId Int,Map TaskId KernelThreadId)CapEvent",
          "package": "ghc-events",
          "partial": "Task OSMachine",
          "signature": "Machine(Map KernelThreadId Int,Map TaskId KernelThreadId)CapEvent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis-Capability.html#v:capabilityTaskOSMachine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis state machine tracks Haskell tasks, represented by TaskId,\n residing on capabilities.\n Each Haskell task can only reside on one capability, but can be migrated\n between them.\n\u003c/p\u003e",
          "module": "GHC.RTS.Events.Analysis.Capability",
          "name": "capabilityTaskPoolMachine",
          "package": "ghc-events",
          "signature": "Machine (Map TaskId Int) CapEvent",
          "source": "src/GHC-RTS-Events-Analysis-Capability.html#capabilityTaskPoolMachine",
          "type": "function"
        },
        "index": {
          "description": "This state machine tracks Haskell tasks represented by TaskId residing on capabilities Each Haskell task can only reside on one capability but can be migrated between them",
          "hierarchy": "GHC RTS Events Analysis Capability",
          "module": "GHC.RTS.Events.Analysis.Capability",
          "name": "capabilityTaskPoolMachine",
          "package": "ghc-events",
          "partial": "Task Pool Machine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis-Capability.html#v:capabilityTaskPoolMachine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events.Analysis.Capability",
          "name": "capabilityThreadIndexer",
          "package": "ghc-events",
          "signature": "Map Int ThreadId -\u003e CapEvent -\u003e Maybe ThreadId",
          "source": "src/GHC-RTS-Events-Analysis-Capability.html#capabilityThreadIndexer",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events Analysis Capability",
          "module": "GHC.RTS.Events.Analysis.Capability",
          "name": "capabilityThreadIndexer",
          "normalized": "Map Int ThreadId-\u003eCapEvent-\u003eMaybe ThreadId",
          "package": "ghc-events",
          "partial": "Thread Indexer",
          "signature": "Map Int ThreadId-\u003eCapEvent-\u003eMaybe ThreadId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis-Capability.html#v:capabilityThreadIndexer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis state machine tracks threads residing on capabilities.\n Each thread can only reside on one capability, but can be migrated between\n them.\n\u003c/p\u003e",
          "module": "GHC.RTS.Events.Analysis.Capability",
          "name": "capabilityThreadPoolMachine",
          "package": "ghc-events",
          "signature": "Machine (Map ThreadId Int) CapEvent",
          "source": "src/GHC-RTS-Events-Analysis-Capability.html#capabilityThreadPoolMachine",
          "type": "function"
        },
        "index": {
          "description": "This state machine tracks threads residing on capabilities Each thread can only reside on one capability but can be migrated between them",
          "hierarchy": "GHC RTS Events Analysis Capability",
          "module": "GHC.RTS.Events.Analysis.Capability",
          "name": "capabilityThreadPoolMachine",
          "package": "ghc-events",
          "partial": "Thread Pool Machine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis-Capability.html#v:capabilityThreadPoolMachine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis state machine tracks threads running on capabilities, only one thread\n may run on a capability at a time.\n\u003c/p\u003e",
          "module": "GHC.RTS.Events.Analysis.Capability",
          "name": "capabilityThreadRunMachine",
          "package": "ghc-events",
          "signature": "Machine (Map Int ThreadId) CapEvent",
          "source": "src/GHC-RTS-Events-Analysis-Capability.html#capabilityThreadRunMachine",
          "type": "function"
        },
        "index": {
          "description": "This state machine tracks threads running on capabilities only one thread may run on capability at time",
          "hierarchy": "GHC RTS Events Analysis Capability",
          "module": "GHC.RTS.Events.Analysis.Capability",
          "name": "capabilityThreadRunMachine",
          "package": "ghc-events",
          "partial": "Thread Run Machine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis-Capability.html#v:capabilityThreadRunMachine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events.Analysis.SparkThread",
          "name": "SparkThread",
          "package": "ghc-events",
          "source": "src/GHC-RTS-Events-Analysis-SparkThread.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "GHC RTS Events Analysis SparkThread",
          "module": "GHC.RTS.Events.Analysis.SparkThread",
          "name": "SparkThread",
          "package": "ghc-events",
          "partial": "Spark Thread",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis-SparkThread.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events.Analysis.SparkThread",
          "name": "SparkThreadState",
          "package": "ghc-events",
          "source": "src/GHC-RTS-Events-Analysis-SparkThread.html#SparkThreadState",
          "type": "data"
        },
        "index": {
          "hierarchy": "GHC RTS Events Analysis SparkThread",
          "module": "GHC.RTS.Events.Analysis.SparkThread",
          "name": "SparkThreadState",
          "package": "ghc-events",
          "partial": "Spark Thread State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis-SparkThread.html#t:SparkThreadState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events.Analysis.SparkThread",
          "name": "SparkThreadCreated",
          "package": "ghc-events",
          "signature": "SparkThreadCreated",
          "source": "src/GHC-RTS-Events-Analysis-SparkThread.html#SparkThreadState",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events Analysis SparkThread",
          "module": "GHC.RTS.Events.Analysis.SparkThread",
          "name": "SparkThreadCreated",
          "package": "ghc-events",
          "partial": "Spark Thread Created",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis-SparkThread.html#v:SparkThreadCreated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events.Analysis.SparkThread",
          "name": "SparkThreadFinal",
          "package": "ghc-events",
          "signature": "SparkThreadFinal",
          "source": "src/GHC-RTS-Events-Analysis-SparkThread.html#SparkThreadState",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events Analysis SparkThread",
          "module": "GHC.RTS.Events.Analysis.SparkThread",
          "name": "SparkThreadFinal",
          "package": "ghc-events",
          "partial": "Spark Thread Final",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis-SparkThread.html#v:SparkThreadFinal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events.Analysis.SparkThread",
          "name": "SparkThreadInitial",
          "package": "ghc-events",
          "signature": "SparkThreadInitial",
          "source": "src/GHC-RTS-Events-Analysis-SparkThread.html#SparkThreadState",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events Analysis SparkThread",
          "module": "GHC.RTS.Events.Analysis.SparkThread",
          "name": "SparkThreadInitial",
          "package": "ghc-events",
          "partial": "Spark Thread Initial",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis-SparkThread.html#v:SparkThreadInitial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events.Analysis.SparkThread",
          "name": "SparkThreadPaused",
          "package": "ghc-events",
          "signature": "SparkThreadPaused Int",
          "source": "src/GHC-RTS-Events-Analysis-SparkThread.html#SparkThreadState",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events Analysis SparkThread",
          "module": "GHC.RTS.Events.Analysis.SparkThread",
          "name": "SparkThreadPaused",
          "package": "ghc-events",
          "partial": "Spark Thread Paused",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis-SparkThread.html#v:SparkThreadPaused"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events.Analysis.SparkThread",
          "name": "SparkThreadRunning",
          "package": "ghc-events",
          "signature": "SparkThreadRunning Int",
          "source": "src/GHC-RTS-Events-Analysis-SparkThread.html#SparkThreadState",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events Analysis SparkThread",
          "module": "GHC.RTS.Events.Analysis.SparkThread",
          "name": "SparkThreadRunning",
          "package": "ghc-events",
          "partial": "Spark Thread Running",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis-SparkThread.html#v:SparkThreadRunning"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events.Analysis.SparkThread",
          "name": "capabilitySparkThreadIndexer",
          "package": "ghc-events",
          "signature": "(Map Int ThreadId, Set ThreadId) -\u003e CapEvent -\u003e Maybe ThreadId",
          "source": "src/GHC-RTS-Events-Analysis-SparkThread.html#capabilitySparkThreadIndexer",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events Analysis SparkThread",
          "module": "GHC.RTS.Events.Analysis.SparkThread",
          "name": "capabilitySparkThreadIndexer",
          "normalized": "(Map Int ThreadId,Set ThreadId)-\u003eCapEvent-\u003eMaybe ThreadId",
          "package": "ghc-events",
          "partial": "Spark Thread Indexer",
          "signature": "(Map Int ThreadId,Set ThreadId)-\u003eCapEvent-\u003eMaybe ThreadId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis-SparkThread.html#v:capabilitySparkThreadIndexer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events.Analysis.SparkThread",
          "name": "capabilitySparkThreadMachine",
          "package": "ghc-events",
          "signature": "Machine (Map Int ThreadId, Set ThreadId) CapEvent",
          "source": "src/GHC-RTS-Events-Analysis-SparkThread.html#capabilitySparkThreadMachine",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events Analysis SparkThread",
          "module": "GHC.RTS.Events.Analysis.SparkThread",
          "name": "capabilitySparkThreadMachine",
          "normalized": "Machine(Map Int ThreadId,Set ThreadId)CapEvent",
          "package": "ghc-events",
          "partial": "Spark Thread Machine",
          "signature": "Machine(Map Int ThreadId,Set ThreadId)CapEvent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis-SparkThread.html#v:capabilitySparkThreadMachine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events.Analysis.SparkThread",
          "name": "sparkThreadMachine",
          "package": "ghc-events",
          "signature": "Machine SparkThreadState EventInfo",
          "source": "src/GHC-RTS-Events-Analysis-SparkThread.html#sparkThreadMachine",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events Analysis SparkThread",
          "module": "GHC.RTS.Events.Analysis.SparkThread",
          "name": "sparkThreadMachine",
          "package": "ghc-events",
          "partial": "Thread Machine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis-SparkThread.html#v:sparkThreadMachine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events.Analysis.Thread",
          "name": "Thread",
          "package": "ghc-events",
          "source": "src/GHC-RTS-Events-Analysis-Thread.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "GHC RTS Events Analysis Thread",
          "module": "GHC.RTS.Events.Analysis.Thread",
          "name": "Thread",
          "package": "ghc-events",
          "partial": "Thread",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis-Thread.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis datatype defines the state machine for a single thread.\n\u003c/p\u003e",
          "module": "GHC.RTS.Events.Analysis.Thread",
          "name": "ThreadState",
          "package": "ghc-events",
          "source": "src/GHC-RTS-Events-Analysis-Thread.html#ThreadState",
          "type": "data"
        },
        "index": {
          "description": "This datatype defines the state machine for single thread",
          "hierarchy": "GHC RTS Events Analysis Thread",
          "module": "GHC.RTS.Events.Analysis.Thread",
          "name": "ThreadState",
          "package": "ghc-events",
          "partial": "Thread State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis-Thread.html#t:ThreadState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events.Analysis.Thread",
          "name": "ThreadFinal",
          "package": "ghc-events",
          "signature": "ThreadFinal",
          "source": "src/GHC-RTS-Events-Analysis-Thread.html#ThreadState",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events Analysis Thread",
          "module": "GHC.RTS.Events.Analysis.Thread",
          "name": "ThreadFinal",
          "package": "ghc-events",
          "partial": "Thread Final",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis-Thread.html#v:ThreadFinal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events.Analysis.Thread",
          "name": "ThreadInitial",
          "package": "ghc-events",
          "signature": "ThreadInitial",
          "source": "src/GHC-RTS-Events-Analysis-Thread.html#ThreadState",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events Analysis Thread",
          "module": "GHC.RTS.Events.Analysis.Thread",
          "name": "ThreadInitial",
          "package": "ghc-events",
          "partial": "Thread Initial",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis-Thread.html#v:ThreadInitial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events.Analysis.Thread",
          "name": "ThreadQueued",
          "package": "ghc-events",
          "signature": "ThreadQueued",
          "source": "src/GHC-RTS-Events-Analysis-Thread.html#ThreadState",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events Analysis Thread",
          "module": "GHC.RTS.Events.Analysis.Thread",
          "name": "ThreadQueued",
          "package": "ghc-events",
          "partial": "Thread Queued",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis-Thread.html#v:ThreadQueued"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events.Analysis.Thread",
          "name": "ThreadRunning",
          "package": "ghc-events",
          "signature": "ThreadRunning",
          "source": "src/GHC-RTS-Events-Analysis-Thread.html#ThreadState",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events Analysis Thread",
          "module": "GHC.RTS.Events.Analysis.Thread",
          "name": "ThreadRunning",
          "package": "ghc-events",
          "partial": "Thread Running",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis-Thread.html#v:ThreadRunning"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events.Analysis.Thread",
          "name": "ThreadStopped",
          "package": "ghc-events",
          "signature": "ThreadStopped",
          "source": "src/GHC-RTS-Events-Analysis-Thread.html#ThreadState",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events Analysis Thread",
          "module": "GHC.RTS.Events.Analysis.Thread",
          "name": "ThreadStopped",
          "package": "ghc-events",
          "partial": "Thread Stopped",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis-Thread.html#v:ThreadStopped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis state machine tracks the events processed by a thread.\n\u003c/p\u003e",
          "module": "GHC.RTS.Events.Analysis.Thread",
          "name": "threadMachine",
          "package": "ghc-events",
          "signature": "Machine ThreadState EventInfo",
          "source": "src/GHC-RTS-Events-Analysis-Thread.html#threadMachine",
          "type": "function"
        },
        "index": {
          "description": "This state machine tracks the events processed by thread",
          "hierarchy": "GHC RTS Events Analysis Thread",
          "module": "GHC.RTS.Events.Analysis.Thread",
          "name": "threadMachine",
          "package": "ghc-events",
          "partial": "Machine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis-Thread.html#v:threadMachine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events.Analysis",
          "name": "Analysis",
          "package": "ghc-events",
          "source": "src/GHC-RTS-Events-Analysis.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "GHC RTS Events Analysis",
          "module": "GHC.RTS.Events.Analysis",
          "name": "Analysis",
          "package": "ghc-events",
          "partial": "Analysis",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is based on a simple finite state machine hence the names \u003ccode\u003e\u003ca\u003edelta\u003c/a\u003e\u003c/code\u003e\n for the state transition function.\n Since states might be more than simple pattern matched constructors, we\n use `finals :: state -\u003e Bool`, rather than `Set state`, to indicate that\n the machine is in some final state. Similarly for \u003ccode\u003e\u003ca\u003ealpha\u003c/a\u003e\u003c/code\u003e, which\n indicates the alphabet of inputs to a machine.\n The function \u003ccode\u003e\u003ca\u003edelta\u003c/a\u003e\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e values, where \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n indicates that no valid transition is possible: ie, there has been an\n error.\n\u003c/p\u003e",
          "module": "GHC.RTS.Events.Analysis",
          "name": "Machine",
          "package": "ghc-events",
          "source": "src/GHC-RTS-Events-Analysis.html#Machine",
          "type": "data"
        },
        "index": {
          "description": "This is based on simple finite state machine hence the names delta for the state transition function Since states might be more than simple pattern matched constructors we use finals state Bool rather than Set state to indicate that the machine is in some final state Similarly for alpha which indicates the alphabet of inputs to machine The function delta returns Maybe values where Nothing indicates that no valid transition is possible ie there has been an error",
          "hierarchy": "GHC RTS Events Analysis",
          "module": "GHC.RTS.Events.Analysis",
          "name": "Machine",
          "package": "ghc-events",
          "partial": "Machine",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis.html#t:Machine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events.Analysis",
          "name": "Process",
          "package": "ghc-events",
          "source": "src/GHC-RTS-Events-Analysis.html#Process",
          "type": "data"
        },
        "index": {
          "hierarchy": "GHC RTS Events Analysis",
          "module": "GHC.RTS.Events.Analysis",
          "name": "Process",
          "package": "ghc-events",
          "partial": "Process",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis.html#t:Process"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA state augmented by Timestamp information is held in \u003ccode\u003e\u003ca\u003eprofileState\u003c/a\u003e\u003c/code\u003e.\n When the state changes, \u003ccode\u003eprofileMap\u003c/code\u003e stores a map between each state\n and its cumulative time.\n\u003c/p\u003e",
          "module": "GHC.RTS.Events.Analysis",
          "name": "Profile",
          "package": "ghc-events",
          "source": "src/GHC-RTS-Events-Analysis.html#Profile",
          "type": "data"
        },
        "index": {
          "description": "state augmented by Timestamp information is held in profileState When the state changes profileMap stores map between each state and its cumulative time",
          "hierarchy": "GHC RTS Events Analysis",
          "module": "GHC.RTS.Events.Analysis",
          "name": "Profile",
          "package": "ghc-events",
          "partial": "Profile",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis.html#t:Profile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events.Analysis",
          "name": "Done",
          "package": "ghc-events",
          "signature": "Done",
          "source": "src/GHC-RTS-Events-Analysis.html#Process",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events Analysis",
          "module": "GHC.RTS.Events.Analysis",
          "name": "Done",
          "package": "ghc-events",
          "partial": "Done",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis.html#v:Done"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events.Analysis",
          "name": "Fail",
          "package": "ghc-events",
          "signature": "Fail e",
          "source": "src/GHC-RTS-Events-Analysis.html#Process",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events Analysis",
          "module": "GHC.RTS.Events.Analysis",
          "name": "Fail",
          "package": "ghc-events",
          "partial": "Fail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis.html#v:Fail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events.Analysis",
          "name": "Machine",
          "package": "ghc-events",
          "signature": "Machine",
          "source": "src/GHC-RTS-Events-Analysis.html#Machine",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events Analysis",
          "module": "GHC.RTS.Events.Analysis",
          "name": "Machine",
          "package": "ghc-events",
          "partial": "Machine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis.html#v:Machine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events.Analysis",
          "name": "Prod",
          "package": "ghc-events",
          "signature": "Prod a (Process e a)",
          "source": "src/GHC-RTS-Events-Analysis.html#Process",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events Analysis",
          "module": "GHC.RTS.Events.Analysis",
          "name": "Prod",
          "package": "ghc-events",
          "partial": "Prod",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis.html#v:Prod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events.Analysis",
          "name": "Profile",
          "package": "ghc-events",
          "signature": "Profile",
          "source": "src/GHC-RTS-Events-Analysis.html#Profile",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events Analysis",
          "module": "GHC.RTS.Events.Analysis",
          "name": "Profile",
          "package": "ghc-events",
          "partial": "Profile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis.html#v:Profile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValid input alphabet\n\u003c/p\u003e",
          "module": "GHC.RTS.Events.Analysis",
          "name": "alpha",
          "package": "ghc-events",
          "signature": "i -\u003e Bool",
          "source": "src/GHC-RTS-Events-Analysis.html#Machine",
          "type": "function"
        },
        "index": {
          "description": "Valid input alphabet",
          "hierarchy": "GHC RTS Events Analysis",
          "module": "GHC.RTS.Events.Analysis",
          "name": "alpha",
          "normalized": "a-\u003eBool",
          "package": "ghc-events",
          "signature": "i-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis.html#v:alpha"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eState transition function\n\u003c/p\u003e",
          "module": "GHC.RTS.Events.Analysis",
          "name": "delta",
          "package": "ghc-events",
          "signature": "s -\u003e i -\u003e Maybe s",
          "source": "src/GHC-RTS-Events-Analysis.html#Machine",
          "type": "function"
        },
        "index": {
          "description": "State transition function",
          "hierarchy": "GHC RTS Events Analysis",
          "module": "GHC.RTS.Events.Analysis",
          "name": "delta",
          "normalized": "a-\u003eb-\u003eMaybe a",
          "package": "ghc-events",
          "signature": "s-\u003ei-\u003eMaybe s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis.html#v:delta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events.Analysis",
          "name": "extractIndexed",
          "package": "ghc-events",
          "signature": "(s -\u003e i -\u003e Maybe o) -\u003e (i -\u003e Maybe k) -\u003e Map k s -\u003e i -\u003e Maybe (k, o)",
          "source": "src/GHC-RTS-Events-Analysis.html#extractIndexed",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events Analysis",
          "module": "GHC.RTS.Events.Analysis",
          "name": "extractIndexed",
          "normalized": "(a-\u003eb-\u003eMaybe c)-\u003e(b-\u003eMaybe d)-\u003eMap d a-\u003eb-\u003eMaybe(d,c)",
          "package": "ghc-events",
          "partial": "Indexed",
          "signature": "(s-\u003ei-\u003eMaybe o)-\u003e(i-\u003eMaybe k)-\u003eMap k s-\u003ei-\u003eMaybe(k,o)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis.html#v:extractIndexed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValid final states\n\u003c/p\u003e",
          "module": "GHC.RTS.Events.Analysis",
          "name": "final",
          "package": "ghc-events",
          "signature": "s -\u003e Bool",
          "source": "src/GHC-RTS-Events-Analysis.html#Machine",
          "type": "function"
        },
        "index": {
          "description": "Valid final states",
          "hierarchy": "GHC RTS Events Analysis",
          "module": "GHC.RTS.Events.Analysis",
          "name": "final",
          "normalized": "a-\u003eBool",
          "package": "ghc-events",
          "signature": "s-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis.html#v:final"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn indexed machine takes a function that multiplexes the input to a key\n and then takes a machine description to an indexed machine.\n\u003c/p\u003e",
          "module": "GHC.RTS.Events.Analysis",
          "name": "indexM",
          "package": "ghc-events",
          "signature": "(i -\u003e Maybe k)-\u003e Machine s i-\u003e Machine (Map k s) i",
          "type": "function"
        },
        "index": {
          "description": "An indexed machine takes function that multiplexes the input to key and then takes machine description to an indexed machine",
          "hierarchy": "GHC RTS Events Analysis",
          "module": "GHC.RTS.Events.Analysis",
          "name": "indexM",
          "normalized": "(a-\u003eMaybe b)-\u003eMachine c a-\u003eMachine(Map b c)a",
          "package": "ghc-events",
          "signature": "(i-\u003eMaybe k)-\u003eMachine s i-\u003eMachine(Map k s)i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis.html#v:indexM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitial state\n\u003c/p\u003e",
          "module": "GHC.RTS.Events.Analysis",
          "name": "initial",
          "package": "ghc-events",
          "signature": "s",
          "source": "src/GHC-RTS-Events-Analysis.html#Machine",
          "type": "function"
        },
        "index": {
          "description": "Initial state",
          "hierarchy": "GHC RTS Events Analysis",
          "module": "GHC.RTS.Events.Analysis",
          "name": "initial",
          "package": "ghc-events",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis.html#v:initial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events.Analysis",
          "name": "profile",
          "package": "ghc-events",
          "signature": "Machine s i-\u003e (i -\u003e Timestamp)-\u003e [i]-\u003e Process (Profile s, i) (s, Timestamp, Timestamp)",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events Analysis",
          "module": "GHC.RTS.Events.Analysis",
          "name": "profile",
          "normalized": "Machine a b-\u003e(b-\u003eTimestamp)-\u003e[b]-\u003eProcess(Profile a,b)(a,Timestamp,Timestamp)",
          "package": "ghc-events",
          "signature": "Machine s i-\u003e(i-\u003eTimestamp)-\u003e[i]-\u003eProcess(Profile s,i)(s,Timestamp,Timestamp)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis.html#v:profile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events.Analysis",
          "name": "profileIndexed",
          "package": "ghc-events",
          "signature": "Machine s i -\u003e (i -\u003e Maybe k) -\u003e (i -\u003e Timestamp) -\u003e [i] -\u003e Process (Map k (Profile s), i) (k, (s, Timestamp, Timestamp))",
          "source": "src/GHC-RTS-Events-Analysis.html#profileIndexed",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events Analysis",
          "module": "GHC.RTS.Events.Analysis",
          "name": "profileIndexed",
          "normalized": "Machine a b-\u003e(b-\u003eMaybe c)-\u003e(b-\u003eTimestamp)-\u003e[b]-\u003eProcess(Map c(Profile a),b)(c,(a,Timestamp,Timestamp))",
          "package": "ghc-events",
          "partial": "Indexed",
          "signature": "Machine s i-\u003e(i-\u003eMaybe k)-\u003e(i-\u003eTimestamp)-\u003e[i]-\u003eProcess(Map k(Profile s),i)(k,(s,Timestamp,Timestamp))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis.html#v:profileIndexed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function takes a machine and profiles its state.\n\u003c/p\u003e",
          "module": "GHC.RTS.Events.Analysis",
          "name": "profileM",
          "package": "ghc-events",
          "signature": "(i -\u003e Timestamp) -\u003e Machine s i -\u003e Machine (Profile s) i",
          "source": "src/GHC-RTS-Events-Analysis.html#profileM",
          "type": "function"
        },
        "index": {
          "description": "This function takes machine and profiles its state",
          "hierarchy": "GHC RTS Events Analysis",
          "module": "GHC.RTS.Events.Analysis",
          "name": "profileM",
          "normalized": "(a-\u003eTimestamp)-\u003eMachine b a-\u003eMachine(Profile b)a",
          "package": "ghc-events",
          "signature": "(i-\u003eTimestamp)-\u003eMachine s i-\u003eMachine(Profile s)i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis.html#v:profileM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events.Analysis",
          "name": "profileRouted",
          "package": "ghc-events",
          "signature": "Machine s i -\u003e Machine r i -\u003e (r -\u003e i -\u003e Maybe k) -\u003e (i -\u003e Timestamp) -\u003e [i] -\u003e Process ((Map k (Profile s), r), i) (k, (s, Timestamp, Timestamp))",
          "source": "src/GHC-RTS-Events-Analysis.html#profileRouted",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events Analysis",
          "module": "GHC.RTS.Events.Analysis",
          "name": "profileRouted",
          "normalized": "Machine a b-\u003eMachine c b-\u003e(c-\u003eb-\u003eMaybe d)-\u003e(b-\u003eTimestamp)-\u003e[b]-\u003eProcess((Map d(Profile a),c),b)(d,(a,Timestamp,Timestamp))",
          "package": "ghc-events",
          "partial": "Routed",
          "signature": "Machine s i-\u003eMachine r i-\u003e(r-\u003ei-\u003eMaybe k)-\u003e(i-\u003eTimestamp)-\u003e[i]-\u003eProcess((Map k(Profile s),r),i)(k,(s,Timestamp,Timestamp))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis.html#v:profileRouted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe current state\n\u003c/p\u003e",
          "module": "GHC.RTS.Events.Analysis",
          "name": "profileState",
          "package": "ghc-events",
          "signature": "s",
          "source": "src/GHC-RTS-Events-Analysis.html#Profile",
          "type": "function"
        },
        "index": {
          "description": "The current state",
          "hierarchy": "GHC RTS Events Analysis",
          "module": "GHC.RTS.Events.Analysis",
          "name": "profileState",
          "package": "ghc-events",
          "partial": "State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis.html#v:profileState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe entry time of the state\n\u003c/p\u003e",
          "module": "GHC.RTS.Events.Analysis",
          "name": "profileTime",
          "package": "ghc-events",
          "signature": "Timestamp",
          "source": "src/GHC-RTS-Events-Analysis.html#Profile",
          "type": "function"
        },
        "index": {
          "description": "The entry time of the state",
          "hierarchy": "GHC RTS Events Analysis",
          "module": "GHC.RTS.Events.Analysis",
          "name": "profileTime",
          "package": "ghc-events",
          "partial": "Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis.html#v:profileTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMachines sometimes need to operate on coarser input than they are defined\n for. This function takes a function that refines input and a machine that\n works on refined input, and produces a machine that can work on coarse input.\n\u003c/p\u003e",
          "module": "GHC.RTS.Events.Analysis",
          "name": "refineM",
          "package": "ghc-events",
          "signature": "(i -\u003e j) -\u003e Machine s j -\u003e Machine s i",
          "source": "src/GHC-RTS-Events-Analysis.html#refineM",
          "type": "function"
        },
        "index": {
          "description": "Machines sometimes need to operate on coarser input than they are defined for This function takes function that refines input and machine that works on refined input and produces machine that can work on coarse input",
          "hierarchy": "GHC RTS Events Analysis",
          "module": "GHC.RTS.Events.Analysis",
          "name": "refineM",
          "normalized": "(a-\u003eb)-\u003eMachine c b-\u003eMachine c a",
          "package": "ghc-events",
          "signature": "(i-\u003ej)-\u003eMachine s j-\u003eMachine s i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis.html#v:refineM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA machine can be indexed not only by the inputs, but also by the state\n of an intermediary routing machine. This is a generalisation of indexM.\n\u003c/p\u003e",
          "module": "GHC.RTS.Events.Analysis",
          "name": "routeM",
          "package": "ghc-events",
          "signature": "Machine r i -\u003e (r -\u003e i -\u003e Maybe k) -\u003e Machine s i -\u003e Machine (Map k s, r) i",
          "source": "src/GHC-RTS-Events-Analysis.html#routeM",
          "type": "function"
        },
        "index": {
          "description": "machine can be indexed not only by the inputs but also by the state of an intermediary routing machine This is generalisation of indexM",
          "hierarchy": "GHC RTS Events Analysis",
          "module": "GHC.RTS.Events.Analysis",
          "name": "routeM",
          "normalized": "Machine a b-\u003e(a-\u003eb-\u003eMaybe c)-\u003eMachine d b-\u003eMachine(Map c d,a)b",
          "package": "ghc-events",
          "signature": "Machine r i-\u003e(r-\u003ei-\u003eMaybe k)-\u003eMachine s i-\u003eMachine(Map k s,r)i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis.html#v:routeM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function produces a process that outputs all the states that a\n machine goes through.\n\u003c/p\u003e",
          "module": "GHC.RTS.Events.Analysis",
          "name": "simulate",
          "package": "ghc-events",
          "signature": "Machine s i -\u003e [i] -\u003e Process (s, i) (s, i)",
          "source": "src/GHC-RTS-Events-Analysis.html#simulate",
          "type": "function"
        },
        "index": {
          "description": "This function produces process that outputs all the states that machine goes through",
          "hierarchy": "GHC RTS Events Analysis",
          "module": "GHC.RTS.Events.Analysis",
          "name": "simulate",
          "normalized": "Machine a b-\u003e[b]-\u003eProcess(a,b)(a,b)",
          "package": "ghc-events",
          "signature": "Machine s i-\u003e[i]-\u003eProcess(s,i)(s,i)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis.html#v:simulate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events.Analysis",
          "name": "toList",
          "package": "ghc-events",
          "signature": "Process e a -\u003e [a]",
          "source": "src/GHC-RTS-Events-Analysis.html#toList",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events Analysis",
          "module": "GHC.RTS.Events.Analysis",
          "name": "toList",
          "normalized": "Process a b-\u003e[b]",
          "package": "ghc-events",
          "partial": "List",
          "signature": "Process e a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events.Analysis",
          "name": "toMaybe",
          "package": "ghc-events",
          "signature": "Process e a -\u003e Maybe e",
          "source": "src/GHC-RTS-Events-Analysis.html#toMaybe",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events Analysis",
          "module": "GHC.RTS.Events.Analysis",
          "name": "toMaybe",
          "normalized": "Process a b-\u003eMaybe a",
          "package": "ghc-events",
          "partial": "Maybe",
          "signature": "Process e a-\u003eMaybe e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis.html#v:toMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003evalidate\u003c/a\u003e\u003c/code\u003e function takes a machine and a list of inputs. The machine\n is started from its initial state and run against the inputs in turn.\n It returns the state and input on failure, and just the state on success.\n\u003c/p\u003e",
          "module": "GHC.RTS.Events.Analysis",
          "name": "validate",
          "package": "ghc-events",
          "signature": "Machine s i -\u003e [i] -\u003e Either (s, i) s",
          "source": "src/GHC-RTS-Events-Analysis.html#validate",
          "type": "function"
        },
        "index": {
          "description": "The validate function takes machine and list of inputs The machine is started from its initial state and run against the inputs in turn It returns the state and input on failure and just the state on success",
          "hierarchy": "GHC RTS Events Analysis",
          "module": "GHC.RTS.Events.Analysis",
          "name": "validate",
          "normalized": "Machine a b-\u003e[b]-\u003eEither(a,b)a",
          "package": "ghc-events",
          "signature": "Machine s i-\u003e[i]-\u003eEither(s,i)s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis.html#v:validate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function is similar to \u003ccode\u003e\u003ca\u003evalidate\u003c/a\u003e\u003c/code\u003e, but outputs each intermediary\n state as well. For an incremental version, use \u003ccode\u003e\u003ca\u003esimulate\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "GHC.RTS.Events.Analysis",
          "name": "validates",
          "package": "ghc-events",
          "signature": "Machine s i -\u003e [i] -\u003e [Either (s, i) s]",
          "source": "src/GHC-RTS-Events-Analysis.html#validates",
          "type": "function"
        },
        "index": {
          "description": "This function is similar to validate but outputs each intermediary state as well For an incremental version use simulate",
          "hierarchy": "GHC RTS Events Analysis",
          "module": "GHC.RTS.Events.Analysis",
          "name": "validates",
          "normalized": "Machine a b-\u003e[b]-\u003e[Either(a,b)a]",
          "package": "ghc-events",
          "signature": "Machine s i-\u003e[i]-\u003e[Either(s,i)s]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis.html#v:validates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events.Merge",
          "name": "Merge",
          "package": "ghc-events",
          "source": "src/GHC-RTS-Events-Merge.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "GHC RTS Events Merge",
          "module": "GHC.RTS.Events.Merge",
          "name": "Merge",
          "package": "ghc-events",
          "partial": "Merge",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Merge.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events.Merge",
          "name": "mergeEventLogs",
          "package": "ghc-events",
          "signature": "EventLog -\u003e EventLog -\u003e EventLog",
          "source": "src/GHC-RTS-Events-Merge.html#mergeEventLogs",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events Merge",
          "module": "GHC.RTS.Events.Merge",
          "name": "mergeEventLogs",
          "normalized": "EventLog-\u003eEventLog-\u003eEventLog",
          "package": "ghc-events",
          "partial": "Event Logs",
          "signature": "EventLog-\u003eEventLog-\u003eEventLog",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Merge.html#v:mergeEventLogs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "Events",
          "package": "ghc-events",
          "source": "src/GHC-RTS-Events.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "Events",
          "package": "ghc-events",
          "partial": "Events",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn event annotated with the Capability that generated it, if any\n\u003c/p\u003e",
          "module": "GHC.RTS.Events",
          "name": "CapEvent",
          "package": "ghc-events",
          "source": "src/GHC-RTS-EventTypes.html#CapEvent",
          "type": "data"
        },
        "index": {
          "description": "An event annotated with the Capability that generated it if any",
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "CapEvent",
          "package": "ghc-events",
          "partial": "Cap Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#t:CapEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "CapsetType",
          "package": "ghc-events",
          "source": "src/GHC-RTS-EventTypes.html#CapsetType",
          "type": "data"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "CapsetType",
          "package": "ghc-events",
          "partial": "Capset Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#t:CapsetType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "Data",
          "package": "ghc-events",
          "source": "src/GHC-RTS-EventTypes.html#Data",
          "type": "data"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "Data",
          "package": "ghc-events",
          "partial": "Data",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#t:Data"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "Event",
          "package": "ghc-events",
          "source": "src/GHC-RTS-EventTypes.html#Event",
          "type": "data"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "Event",
          "package": "ghc-events",
          "partial": "Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#t:Event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "EventInfo",
          "package": "ghc-events",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "data"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "EventInfo",
          "package": "ghc-events",
          "partial": "Event Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#t:EventInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "EventLog",
          "package": "ghc-events",
          "source": "src/GHC-RTS-EventTypes.html#EventLog",
          "type": "data"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "EventLog",
          "package": "ghc-events",
          "partial": "Event Log",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#t:EventLog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "EventType",
          "package": "ghc-events",
          "source": "src/GHC-RTS-EventTypes.html#EventType",
          "type": "data"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "EventType",
          "package": "ghc-events",
          "partial": "Event Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#t:EventType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "Header",
          "package": "ghc-events",
          "source": "src/GHC-RTS-EventTypes.html#Header",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "Header",
          "package": "ghc-events",
          "partial": "Header",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#t:Header"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "KernelThreadId",
          "package": "ghc-events",
          "source": "src/GHC-RTS-EventTypes.html#KernelThreadId",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "KernelThreadId",
          "package": "ghc-events",
          "partial": "Kernel Thread Id",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#t:KernelThreadId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "TaskId",
          "package": "ghc-events",
          "source": "src/GHC-RTS-EventTypes.html#TaskId",
          "type": "type"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "TaskId",
          "package": "ghc-events",
          "partial": "Task Id",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#t:TaskId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "ThreadId",
          "package": "ghc-events",
          "source": "src/GHC-RTS-EventTypes.html#ThreadId",
          "type": "type"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "ThreadId",
          "package": "ghc-events",
          "partial": "Thread Id",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#t:ThreadId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "ThreadStopStatus",
          "package": "ghc-events",
          "source": "src/GHC-RTS-EventTypes.html#ThreadStopStatus",
          "type": "data"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "ThreadStopStatus",
          "package": "ghc-events",
          "partial": "Thread Stop Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#t:ThreadStopStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "Timestamp",
          "package": "ghc-events",
          "source": "src/GHC-RTS-EventTypes.html#Timestamp",
          "type": "type"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "Timestamp",
          "package": "ghc-events",
          "partial": "Timestamp",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#t:Timestamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "BlockedOnBlackHole",
          "package": "ghc-events",
          "signature": "BlockedOnBlackHole",
          "source": "src/GHC-RTS-EventTypes.html#ThreadStopStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "BlockedOnBlackHole",
          "package": "ghc-events",
          "partial": "Blocked On Black Hole",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:BlockedOnBlackHole"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "BlockedOnBlackHoleOwnedBy",
          "package": "ghc-events",
          "signature": "BlockedOnBlackHoleOwnedBy !ThreadId",
          "source": "src/GHC-RTS-EventTypes.html#ThreadStopStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "BlockedOnBlackHoleOwnedBy",
          "package": "ghc-events",
          "partial": "Blocked On Black Hole Owned By",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:BlockedOnBlackHoleOwnedBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "BlockedOnCCall",
          "package": "ghc-events",
          "signature": "BlockedOnCCall",
          "source": "src/GHC-RTS-EventTypes.html#ThreadStopStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "BlockedOnCCall",
          "package": "ghc-events",
          "partial": "Blocked On CCall",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:BlockedOnCCall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "BlockedOnCCall_NoUnblockExc",
          "package": "ghc-events",
          "signature": "BlockedOnCCall_NoUnblockExc",
          "source": "src/GHC-RTS-EventTypes.html#ThreadStopStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "BlockedOnCCall_NoUnblockExc",
          "package": "ghc-events",
          "partial": "Blocked On CCall No Unblock Exc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:BlockedOnCCall_NoUnblockExc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "BlockedOnDelay",
          "package": "ghc-events",
          "signature": "BlockedOnDelay",
          "source": "src/GHC-RTS-EventTypes.html#ThreadStopStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "BlockedOnDelay",
          "package": "ghc-events",
          "partial": "Blocked On Delay",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:BlockedOnDelay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "BlockedOnDoProc",
          "package": "ghc-events",
          "signature": "BlockedOnDoProc",
          "source": "src/GHC-RTS-EventTypes.html#ThreadStopStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "BlockedOnDoProc",
          "package": "ghc-events",
          "partial": "Blocked On Do Proc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:BlockedOnDoProc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "BlockedOnMVar",
          "package": "ghc-events",
          "signature": "BlockedOnMVar",
          "source": "src/GHC-RTS-EventTypes.html#ThreadStopStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "BlockedOnMVar",
          "package": "ghc-events",
          "partial": "Blocked On MVar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:BlockedOnMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "BlockedOnMsgGlobalise",
          "package": "ghc-events",
          "signature": "BlockedOnMsgGlobalise",
          "source": "src/GHC-RTS-EventTypes.html#ThreadStopStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "BlockedOnMsgGlobalise",
          "package": "ghc-events",
          "partial": "Blocked On Msg Globalise",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:BlockedOnMsgGlobalise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "BlockedOnMsgThrowTo",
          "package": "ghc-events",
          "signature": "BlockedOnMsgThrowTo",
          "source": "src/GHC-RTS-EventTypes.html#ThreadStopStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "BlockedOnMsgThrowTo",
          "package": "ghc-events",
          "partial": "Blocked On Msg Throw To",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:BlockedOnMsgThrowTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "BlockedOnRead",
          "package": "ghc-events",
          "signature": "BlockedOnRead",
          "source": "src/GHC-RTS-EventTypes.html#ThreadStopStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "BlockedOnRead",
          "package": "ghc-events",
          "partial": "Blocked On Read",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:BlockedOnRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "BlockedOnSTM",
          "package": "ghc-events",
          "signature": "BlockedOnSTM",
          "source": "src/GHC-RTS-EventTypes.html#ThreadStopStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "BlockedOnSTM",
          "package": "ghc-events",
          "partial": "Blocked On STM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:BlockedOnSTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "BlockedOnWrite",
          "package": "ghc-events",
          "signature": "BlockedOnWrite",
          "source": "src/GHC-RTS-EventTypes.html#ThreadStopStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "BlockedOnWrite",
          "package": "ghc-events",
          "partial": "Blocked On Write",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:BlockedOnWrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "CapCreate",
          "package": "ghc-events",
          "signature": "CapCreate",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "CapCreate",
          "package": "ghc-events",
          "partial": "Cap Create",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:CapCreate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "CapDelete",
          "package": "ghc-events",
          "signature": "CapDelete",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "CapDelete",
          "package": "ghc-events",
          "partial": "Cap Delete",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:CapDelete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "CapDisable",
          "package": "ghc-events",
          "signature": "CapDisable",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "CapDisable",
          "package": "ghc-events",
          "partial": "Cap Disable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:CapDisable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "CapEnable",
          "package": "ghc-events",
          "signature": "CapEnable",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "CapEnable",
          "package": "ghc-events",
          "partial": "Cap Enable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:CapEnable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "CapEvent",
          "package": "ghc-events",
          "signature": "CapEvent",
          "source": "src/GHC-RTS-EventTypes.html#CapEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "CapEvent",
          "package": "ghc-events",
          "partial": "Cap Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:CapEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "CapsetAssignCap",
          "package": "ghc-events",
          "signature": "CapsetAssignCap",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "CapsetAssignCap",
          "package": "ghc-events",
          "partial": "Capset Assign Cap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:CapsetAssignCap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "CapsetClockDomain",
          "package": "ghc-events",
          "signature": "CapsetClockDomain",
          "source": "src/GHC-RTS-EventTypes.html#CapsetType",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "CapsetClockDomain",
          "package": "ghc-events",
          "partial": "Capset Clock Domain",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:CapsetClockDomain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "CapsetCreate",
          "package": "ghc-events",
          "signature": "CapsetCreate",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "CapsetCreate",
          "package": "ghc-events",
          "partial": "Capset Create",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:CapsetCreate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "CapsetCustom",
          "package": "ghc-events",
          "signature": "CapsetCustom",
          "source": "src/GHC-RTS-EventTypes.html#CapsetType",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "CapsetCustom",
          "package": "ghc-events",
          "partial": "Capset Custom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:CapsetCustom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "CapsetDelete",
          "package": "ghc-events",
          "signature": "CapsetDelete",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "CapsetDelete",
          "package": "ghc-events",
          "partial": "Capset Delete",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:CapsetDelete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "CapsetOsProcess",
          "package": "ghc-events",
          "signature": "CapsetOsProcess",
          "source": "src/GHC-RTS-EventTypes.html#CapsetType",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "CapsetOsProcess",
          "package": "ghc-events",
          "partial": "Capset Os Process",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:CapsetOsProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "CapsetRemoveCap",
          "package": "ghc-events",
          "signature": "CapsetRemoveCap",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "CapsetRemoveCap",
          "package": "ghc-events",
          "partial": "Capset Remove Cap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:CapsetRemoveCap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "CapsetUnknown",
          "package": "ghc-events",
          "signature": "CapsetUnknown",
          "source": "src/GHC-RTS-EventTypes.html#CapsetType",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "CapsetUnknown",
          "package": "ghc-events",
          "partial": "Capset Unknown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:CapsetUnknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "CreateSparkThread",
          "package": "ghc-events",
          "signature": "CreateSparkThread",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "CreateSparkThread",
          "package": "ghc-events",
          "partial": "Create Spark Thread",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:CreateSparkThread"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "CreateThread",
          "package": "ghc-events",
          "signature": "CreateThread",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "CreateThread",
          "package": "ghc-events",
          "partial": "Create Thread",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:CreateThread"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "Data",
          "package": "ghc-events",
          "signature": "Data",
          "source": "src/GHC-RTS-EventTypes.html#Data",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "Data",
          "package": "ghc-events",
          "partial": "Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:Data"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "EndGC",
          "package": "ghc-events",
          "signature": "EndGC",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "EndGC",
          "package": "ghc-events",
          "partial": "End GC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:EndGC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "Event",
          "package": "ghc-events",
          "signature": "Event",
          "source": "src/GHC-RTS-EventTypes.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "Event",
          "package": "ghc-events",
          "partial": "Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:Event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "EventBlock",
          "package": "ghc-events",
          "signature": "EventBlock",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "EventBlock",
          "package": "ghc-events",
          "partial": "Event Block",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:EventBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "EventLog",
          "package": "ghc-events",
          "signature": "EventLog",
          "source": "src/GHC-RTS-EventTypes.html#EventLog",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "EventLog",
          "package": "ghc-events",
          "partial": "Event Log",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:EventLog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "EventType",
          "package": "ghc-events",
          "signature": "EventType",
          "source": "src/GHC-RTS-EventTypes.html#EventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "EventType",
          "package": "ghc-events",
          "partial": "Event Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:EventType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "ForeignCall",
          "package": "ghc-events",
          "signature": "ForeignCall",
          "source": "src/GHC-RTS-EventTypes.html#ThreadStopStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "ForeignCall",
          "package": "ghc-events",
          "partial": "Foreign Call",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:ForeignCall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "GCDone",
          "package": "ghc-events",
          "signature": "GCDone",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "GCDone",
          "package": "ghc-events",
          "partial": "GCDone",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:GCDone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "GCIdle",
          "package": "ghc-events",
          "signature": "GCIdle",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "GCIdle",
          "package": "ghc-events",
          "partial": "GCIdle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:GCIdle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "GCStatsGHC",
          "package": "ghc-events",
          "signature": "GCStatsGHC",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "GCStatsGHC",
          "package": "ghc-events",
          "partial": "GCStats GHC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:GCStatsGHC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "GCWork",
          "package": "ghc-events",
          "signature": "GCWork",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "GCWork",
          "package": "ghc-events",
          "partial": "GCWork",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:GCWork"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "GlobalSyncGC",
          "package": "ghc-events",
          "signature": "GlobalSyncGC",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "GlobalSyncGC",
          "package": "ghc-events",
          "partial": "Global Sync GC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:GlobalSyncGC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "Header",
          "package": "ghc-events",
          "signature": "Header",
          "source": "src/GHC-RTS-EventTypes.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "Header",
          "package": "ghc-events",
          "partial": "Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:Header"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "HeapAllocated",
          "package": "ghc-events",
          "signature": "HeapAllocated",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "HeapAllocated",
          "package": "ghc-events",
          "partial": "Heap Allocated",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:HeapAllocated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "HeapInfoGHC",
          "package": "ghc-events",
          "signature": "HeapInfoGHC",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "HeapInfoGHC",
          "package": "ghc-events",
          "partial": "Heap Info GHC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:HeapInfoGHC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "HeapLive",
          "package": "ghc-events",
          "signature": "HeapLive",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "HeapLive",
          "package": "ghc-events",
          "partial": "Heap Live",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:HeapLive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "HeapOverflow",
          "package": "ghc-events",
          "signature": "HeapOverflow",
          "source": "src/GHC-RTS-EventTypes.html#ThreadStopStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "HeapOverflow",
          "package": "ghc-events",
          "partial": "Heap Overflow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:HeapOverflow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "HeapSize",
          "package": "ghc-events",
          "signature": "HeapSize",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "HeapSize",
          "package": "ghc-events",
          "partial": "Heap Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:HeapSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "InternString",
          "package": "ghc-events",
          "signature": "InternString",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "InternString",
          "package": "ghc-events",
          "partial": "Intern String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:InternString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "KernelThreadId",
          "package": "ghc-events",
          "signature": "KernelThreadId",
          "source": "src/GHC-RTS-EventTypes.html#KernelThreadId",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "KernelThreadId",
          "package": "ghc-events",
          "partial": "Kernel Thread Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:KernelThreadId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "MerCallingMain",
          "package": "ghc-events",
          "signature": "MerCallingMain",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "MerCallingMain",
          "package": "ghc-events",
          "partial": "Mer Calling Main",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:MerCallingMain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "MerCapSleeping",
          "package": "ghc-events",
          "signature": "MerCapSleeping",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "MerCapSleeping",
          "package": "ghc-events",
          "partial": "Mer Cap Sleeping",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:MerCapSleeping"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "MerCreateSpark",
          "package": "ghc-events",
          "signature": "MerCreateSpark",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "MerCreateSpark",
          "package": "ghc-events",
          "partial": "Mer Create Spark",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:MerCreateSpark"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "MerEndParConjunct",
          "package": "ghc-events",
          "signature": "MerEndParConjunct",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "MerEndParConjunct",
          "package": "ghc-events",
          "partial": "Mer End Par Conjunct",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:MerEndParConjunct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "MerEndParConjunction",
          "package": "ghc-events",
          "signature": "MerEndParConjunction",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "MerEndParConjunction",
          "package": "ghc-events",
          "partial": "Mer End Par Conjunction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:MerEndParConjunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "MerFutureCreate",
          "package": "ghc-events",
          "signature": "MerFutureCreate",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "MerFutureCreate",
          "package": "ghc-events",
          "partial": "Mer Future Create",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:MerFutureCreate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "MerFutureSignal",
          "package": "ghc-events",
          "signature": "MerFutureSignal",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "MerFutureSignal",
          "package": "ghc-events",
          "partial": "Mer Future Signal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:MerFutureSignal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "MerFutureWaitNosuspend",
          "package": "ghc-events",
          "signature": "MerFutureWaitNosuspend",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "MerFutureWaitNosuspend",
          "package": "ghc-events",
          "partial": "Mer Future Wait Nosuspend",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:MerFutureWaitNosuspend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "MerFutureWaitSuspended",
          "package": "ghc-events",
          "signature": "MerFutureWaitSuspended",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "MerFutureWaitSuspended",
          "package": "ghc-events",
          "partial": "Mer Future Wait Suspended",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:MerFutureWaitSuspended"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "MerLookingForGlobalThread",
          "package": "ghc-events",
          "signature": "MerLookingForGlobalThread",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "MerLookingForGlobalThread",
          "package": "ghc-events",
          "partial": "Mer Looking For Global Thread",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:MerLookingForGlobalThread"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "MerLookingForLocalSpark",
          "package": "ghc-events",
          "signature": "MerLookingForLocalSpark",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "MerLookingForLocalSpark",
          "package": "ghc-events",
          "partial": "Mer Looking For Local Spark",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:MerLookingForLocalSpark"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "MerReleaseThread",
          "package": "ghc-events",
          "signature": "MerReleaseThread",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "MerReleaseThread",
          "package": "ghc-events",
          "partial": "Mer Release Thread",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:MerReleaseThread"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "MerStartParConjunction",
          "package": "ghc-events",
          "signature": "MerStartParConjunction",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "MerStartParConjunction",
          "package": "ghc-events",
          "partial": "Mer Start Par Conjunction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:MerStartParConjunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "MerWorkStealing",
          "package": "ghc-events",
          "signature": "MerWorkStealing",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "MerWorkStealing",
          "package": "ghc-events",
          "partial": "Mer Work Stealing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:MerWorkStealing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "Message",
          "package": "ghc-events",
          "signature": "Message",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "Message",
          "package": "ghc-events",
          "partial": "Message",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:Message"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "MigrateThread",
          "package": "ghc-events",
          "signature": "MigrateThread",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "MigrateThread",
          "package": "ghc-events",
          "partial": "Migrate Thread",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:MigrateThread"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "NoStatus",
          "package": "ghc-events",
          "signature": "NoStatus",
          "source": "src/GHC-RTS-EventTypes.html#ThreadStopStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "NoStatus",
          "package": "ghc-events",
          "partial": "No Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:NoStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "OsProcessParentPid",
          "package": "ghc-events",
          "signature": "OsProcessParentPid",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "OsProcessParentPid",
          "package": "ghc-events",
          "partial": "Os Process Parent Pid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:OsProcessParentPid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "OsProcessPid",
          "package": "ghc-events",
          "signature": "OsProcessPid",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "OsProcessPid",
          "package": "ghc-events",
          "partial": "Os Process Pid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:OsProcessPid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "PerfCounter",
          "package": "ghc-events",
          "signature": "PerfCounter",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "PerfCounter",
          "package": "ghc-events",
          "partial": "Perf Counter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:PerfCounter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "PerfName",
          "package": "ghc-events",
          "signature": "PerfName",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "PerfName",
          "package": "ghc-events",
          "partial": "Perf Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:PerfName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "PerfTracepoint",
          "package": "ghc-events",
          "signature": "PerfTracepoint",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "PerfTracepoint",
          "package": "ghc-events",
          "partial": "Perf Tracepoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:PerfTracepoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "ProgramArgs",
          "package": "ghc-events",
          "signature": "ProgramArgs",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "ProgramArgs",
          "package": "ghc-events",
          "partial": "Program Args",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:ProgramArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "ProgramEnv",
          "package": "ghc-events",
          "signature": "ProgramEnv",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "ProgramEnv",
          "package": "ghc-events",
          "partial": "Program Env",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:ProgramEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "RequestParGC",
          "package": "ghc-events",
          "signature": "RequestParGC",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "RequestParGC",
          "package": "ghc-events",
          "partial": "Request Par GC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:RequestParGC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "RequestSeqGC",
          "package": "ghc-events",
          "signature": "RequestSeqGC",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "RequestSeqGC",
          "package": "ghc-events",
          "partial": "Request Seq GC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:RequestSeqGC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "RtsIdentifier",
          "package": "ghc-events",
          "signature": "RtsIdentifier",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "RtsIdentifier",
          "package": "ghc-events",
          "partial": "Rts Identifier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:RtsIdentifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "RunThread",
          "package": "ghc-events",
          "signature": "RunThread",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "RunThread",
          "package": "ghc-events",
          "partial": "Run Thread",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:RunThread"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "Shutdown",
          "package": "ghc-events",
          "signature": "Shutdown",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "Shutdown",
          "package": "ghc-events",
          "partial": "Shutdown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:Shutdown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "SparkCounters",
          "package": "ghc-events",
          "signature": "SparkCounters",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "SparkCounters",
          "package": "ghc-events",
          "partial": "Spark Counters",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:SparkCounters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "SparkCreate",
          "package": "ghc-events",
          "signature": "SparkCreate",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "SparkCreate",
          "package": "ghc-events",
          "partial": "Spark Create",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:SparkCreate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "SparkDud",
          "package": "ghc-events",
          "signature": "SparkDud",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "SparkDud",
          "package": "ghc-events",
          "partial": "Spark Dud",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:SparkDud"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "SparkFizzle",
          "package": "ghc-events",
          "signature": "SparkFizzle",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "SparkFizzle",
          "package": "ghc-events",
          "partial": "Spark Fizzle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:SparkFizzle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "SparkGC",
          "package": "ghc-events",
          "signature": "SparkGC",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "SparkGC",
          "package": "ghc-events",
          "partial": "Spark GC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:SparkGC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "SparkOverflow",
          "package": "ghc-events",
          "signature": "SparkOverflow",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "SparkOverflow",
          "package": "ghc-events",
          "partial": "Spark Overflow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:SparkOverflow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "SparkRun",
          "package": "ghc-events",
          "signature": "SparkRun",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "SparkRun",
          "package": "ghc-events",
          "partial": "Spark Run",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:SparkRun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "SparkSteal",
          "package": "ghc-events",
          "signature": "SparkSteal",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "SparkSteal",
          "package": "ghc-events",
          "partial": "Spark Steal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:SparkSteal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "StackOverflow",
          "package": "ghc-events",
          "signature": "StackOverflow",
          "source": "src/GHC-RTS-EventTypes.html#ThreadStopStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "StackOverflow",
          "package": "ghc-events",
          "partial": "Stack Overflow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:StackOverflow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "StartGC",
          "package": "ghc-events",
          "signature": "StartGC",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "StartGC",
          "package": "ghc-events",
          "partial": "Start GC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:StartGC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "Startup",
          "package": "ghc-events",
          "signature": "Startup",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "Startup",
          "package": "ghc-events",
          "partial": "Startup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:Startup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "StopThread",
          "package": "ghc-events",
          "signature": "StopThread",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "StopThread",
          "package": "ghc-events",
          "partial": "Stop Thread",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:StopThread"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "TaskCreate",
          "package": "ghc-events",
          "signature": "TaskCreate",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "TaskCreate",
          "package": "ghc-events",
          "partial": "Task Create",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:TaskCreate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "TaskDelete",
          "package": "ghc-events",
          "signature": "TaskDelete",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "TaskDelete",
          "package": "ghc-events",
          "partial": "Task Delete",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:TaskDelete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "TaskMigrate",
          "package": "ghc-events",
          "signature": "TaskMigrate",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "TaskMigrate",
          "package": "ghc-events",
          "partial": "Task Migrate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:TaskMigrate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "ThreadBlocked",
          "package": "ghc-events",
          "signature": "ThreadBlocked",
          "source": "src/GHC-RTS-EventTypes.html#ThreadStopStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "ThreadBlocked",
          "package": "ghc-events",
          "partial": "Thread Blocked",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:ThreadBlocked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "ThreadFinished",
          "package": "ghc-events",
          "signature": "ThreadFinished",
          "source": "src/GHC-RTS-EventTypes.html#ThreadStopStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "ThreadFinished",
          "package": "ghc-events",
          "partial": "Thread Finished",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:ThreadFinished"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "ThreadLabel",
          "package": "ghc-events",
          "signature": "ThreadLabel",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "ThreadLabel",
          "package": "ghc-events",
          "partial": "Thread Label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:ThreadLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "ThreadMigrating",
          "package": "ghc-events",
          "signature": "ThreadMigrating",
          "source": "src/GHC-RTS-EventTypes.html#ThreadStopStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "ThreadMigrating",
          "package": "ghc-events",
          "partial": "Thread Migrating",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:ThreadMigrating"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "ThreadRunnable",
          "package": "ghc-events",
          "signature": "ThreadRunnable",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "ThreadRunnable",
          "package": "ghc-events",
          "partial": "Thread Runnable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:ThreadRunnable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "ThreadYielding",
          "package": "ghc-events",
          "signature": "ThreadYielding",
          "source": "src/GHC-RTS-EventTypes.html#ThreadStopStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "ThreadYielding",
          "package": "ghc-events",
          "partial": "Thread Yielding",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:ThreadYielding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "UnknownEvent",
          "package": "ghc-events",
          "signature": "UnknownEvent",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "UnknownEvent",
          "package": "ghc-events",
          "partial": "Unknown Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:UnknownEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "UserMarker",
          "package": "ghc-events",
          "signature": "UserMarker",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "UserMarker",
          "package": "ghc-events",
          "partial": "User Marker",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:UserMarker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "UserMessage",
          "package": "ghc-events",
          "signature": "UserMessage",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "UserMessage",
          "package": "ghc-events",
          "partial": "User Message",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:UserMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "WakeupThread",
          "package": "ghc-events",
          "signature": "WakeupThread",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "WakeupThread",
          "package": "ghc-events",
          "partial": "Wakeup Thread",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:WakeupThread"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "WallClockTime",
          "package": "ghc-events",
          "signature": "WallClockTime",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "WallClockTime",
          "package": "ghc-events",
          "partial": "Wall Clock Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:WallClockTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "allocAreaSize",
          "package": "ghc-events",
          "signature": "Word64",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "allocAreaSize",
          "package": "ghc-events",
          "partial": "Area Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:allocAreaSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "allocBytes",
          "package": "ghc-events",
          "signature": "Word64",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "allocBytes",
          "package": "ghc-events",
          "partial": "Bytes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:allocBytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "args",
          "package": "ghc-events",
          "signature": "[String]",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "args",
          "normalized": "[String]",
          "package": "ghc-events",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:args"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "blockSize",
          "package": "ghc-events",
          "signature": "Word64",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "blockSize",
          "package": "ghc-events",
          "partial": "Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:blockSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "block_events",
          "package": "ghc-events",
          "signature": "[Event]",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "block_events",
          "normalized": "[Event]",
          "package": "ghc-events",
          "signature": "[Event]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:block_events"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "buildEventTypeMap",
          "package": "ghc-events",
          "signature": "[EventType] -\u003e IntMap EventType",
          "source": "src/GHC-RTS-Events.html#buildEventTypeMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "buildEventTypeMap",
          "normalized": "[EventType]-\u003eIntMap EventType",
          "package": "ghc-events",
          "partial": "Event Type Map",
          "signature": "[EventType]-\u003eIntMap EventType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:buildEventTypeMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "cap",
          "package": "ghc-events",
          "signature": "Int",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "cap",
          "package": "ghc-events",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:cap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "capset",
          "package": "ghc-events",
          "signature": "Capset",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "capset",
          "package": "ghc-events",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:capset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "capsetType",
          "package": "ghc-events",
          "signature": "CapsetType",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "capsetType",
          "package": "ghc-events",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:capsetType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "ce_cap",
          "package": "ghc-events",
          "signature": "Maybe Int",
          "source": "src/GHC-RTS-EventTypes.html#CapEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "ce_cap",
          "package": "ghc-events",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:ce_cap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "ce_event",
          "package": "ghc-events",
          "signature": "Event",
          "source": "src/GHC-RTS-EventTypes.html#CapEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "ce_event",
          "package": "ghc-events",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:ce_event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "copied",
          "package": "ghc-events",
          "signature": "Word64",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "copied",
          "package": "ghc-events",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:copied"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "dat",
          "package": "ghc-events",
          "signature": "Data",
          "source": "src/GHC-RTS-EventTypes.html#EventLog",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "dat",
          "package": "ghc-events",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:dat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "desc",
          "package": "ghc-events",
          "signature": "EventTypeDesc",
          "source": "src/GHC-RTS-EventTypes.html#EventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "desc",
          "package": "ghc-events",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:desc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "dyn_id",
          "package": "ghc-events",
          "signature": "ParConjDynId",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "dyn_id",
          "package": "ghc-events",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:dyn_id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "end_time",
          "package": "ghc-events",
          "signature": "Timestamp",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "end_time",
          "package": "ghc-events",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:end_time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "env",
          "package": "ghc-events",
          "signature": "[String]",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "env",
          "normalized": "[String]",
          "package": "ghc-events",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:env"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "eventTypes",
          "package": "ghc-events",
          "signature": "[EventType]",
          "source": "src/GHC-RTS-EventTypes.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "eventTypes",
          "normalized": "[EventType]",
          "package": "ghc-events",
          "partial": "Types",
          "signature": "[EventType]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:eventTypes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "events",
          "package": "ghc-events",
          "signature": "[Event]",
          "source": "src/GHC-RTS-EventTypes.html#Data",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "events",
          "normalized": "[Event]",
          "package": "ghc-events",
          "signature": "[Event]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:events"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "frag",
          "package": "ghc-events",
          "signature": "Word64",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "frag",
          "package": "ghc-events",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:frag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "future_id",
          "package": "ghc-events",
          "signature": "FutureId",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "future_id",
          "package": "ghc-events",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:future_id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "gen",
          "package": "ghc-events",
          "signature": "Int",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "gen",
          "package": "ghc-events",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:gen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "gens",
          "package": "ghc-events",
          "signature": "Int",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "gens",
          "package": "ghc-events",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:gens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "groupEvents",
          "package": "ghc-events",
          "signature": "[Event] -\u003e [(Maybe Int, [Event])]",
          "source": "src/GHC-RTS-Events.html#groupEvents",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "groupEvents",
          "normalized": "[Event]-\u003e[(Maybe Int,[Event])]",
          "package": "ghc-events",
          "partial": "Events",
          "signature": "[Event]-\u003e[(Maybe Int,[Event])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:groupEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "header",
          "package": "ghc-events",
          "signature": "Header",
          "source": "src/GHC-RTS-EventTypes.html#EventLog",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "header",
          "package": "ghc-events",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:header"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "heapCapset",
          "package": "ghc-events",
          "signature": "Capset",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "heapCapset",
          "package": "ghc-events",
          "partial": "Capset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:heapCapset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "kernelThreadId",
          "package": "ghc-events",
          "signature": "Word64",
          "source": "src/GHC-RTS-EventTypes.html#KernelThreadId",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "kernelThreadId",
          "package": "ghc-events",
          "partial": "Thread Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:kernelThreadId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "liveBytes",
          "package": "ghc-events",
          "signature": "Word64",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "liveBytes",
          "package": "ghc-events",
          "partial": "Bytes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:liveBytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "markername",
          "package": "ghc-events",
          "signature": "String",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "markername",
          "package": "ghc-events",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:markername"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "maxHeapSize",
          "package": "ghc-events",
          "signature": "Word64",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "maxHeapSize",
          "package": "ghc-events",
          "partial": "Heap Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:maxHeapSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "mblockSize",
          "package": "ghc-events",
          "signature": "Word64",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "mblockSize",
          "package": "ghc-events",
          "partial": "Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:mblockSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "msg",
          "package": "ghc-events",
          "signature": "String",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "msg",
          "package": "ghc-events",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:msg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "nEVENT_PERF_COUNTER",
          "package": "ghc-events",
          "signature": "EventTypeNum",
          "source": "src/GHC-RTS-Events.html#nEVENT_PERF_COUNTER",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "nEVENT_PERF_COUNTER",
          "package": "ghc-events",
          "partial": "EVENT PERF COUNTER",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:nEVENT_PERF_COUNTER"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "nEVENT_PERF_NAME",
          "package": "ghc-events",
          "signature": "EventTypeNum",
          "source": "src/GHC-RTS-Events.html#nEVENT_PERF_NAME",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "nEVENT_PERF_NAME",
          "package": "ghc-events",
          "partial": "EVENT PERF NAME",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:nEVENT_PERF_NAME"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "nEVENT_PERF_TRACEPOINT",
          "package": "ghc-events",
          "signature": "EventTypeNum",
          "source": "src/GHC-RTS-Events.html#nEVENT_PERF_TRACEPOINT",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "nEVENT_PERF_TRACEPOINT",
          "package": "ghc-events",
          "partial": "EVENT PERF TRACEPOINT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:nEVENT_PERF_TRACEPOINT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "n_caps",
          "package": "ghc-events",
          "signature": "Int",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "n_caps",
          "package": "ghc-events",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:n_caps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "name",
          "package": "ghc-events",
          "signature": "String",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "name",
          "package": "ghc-events",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "name_id",
          "package": "ghc-events",
          "signature": "StringId",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "name_id",
          "package": "ghc-events",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:name_id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "newCap",
          "package": "ghc-events",
          "signature": "Int",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "newCap",
          "package": "ghc-events",
          "partial": "Cap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:newCap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "new_cap",
          "package": "ghc-events",
          "signature": "Int",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "new_cap",
          "package": "ghc-events",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:new_cap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "nsec",
          "package": "ghc-events",
          "signature": "Word32",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "nsec",
          "package": "ghc-events",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:nsec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "num",
          "package": "ghc-events",
          "signature": "EventTypeNum",
          "source": "src/GHC-RTS-EventTypes.html#EventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "num",
          "package": "ghc-events",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:num"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "otherCap",
          "package": "ghc-events",
          "signature": "Int",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "otherCap",
          "package": "ghc-events",
          "partial": "Cap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:otherCap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "parMaxCopied",
          "package": "ghc-events",
          "signature": "Word64",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "parMaxCopied",
          "package": "ghc-events",
          "partial": "Max Copied",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:parMaxCopied"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "parNThreads",
          "package": "ghc-events",
          "signature": "Int",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "parNThreads",
          "package": "ghc-events",
          "partial": "NThreads",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:parNThreads"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "parTotCopied",
          "package": "ghc-events",
          "signature": "Word64",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "parTotCopied",
          "package": "ghc-events",
          "partial": "Tot Copied",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:parTotCopied"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "perfNum",
          "package": "ghc-events",
          "signature": "PerfEventTypeNum",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "perfNum",
          "package": "ghc-events",
          "partial": "Num",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:perfNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "period",
          "package": "ghc-events",
          "signature": "Word64",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "period",
          "package": "ghc-events",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:period"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "pid",
          "package": "ghc-events",
          "signature": "PID",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "pid",
          "package": "ghc-events",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:pid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "ppEvent",
          "package": "ghc-events",
          "signature": "IntMap EventType -\u003e CapEvent -\u003e String",
          "source": "src/GHC-RTS-Events.html#ppEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "ppEvent",
          "normalized": "IntMap EventType-\u003eCapEvent-\u003eString",
          "package": "ghc-events",
          "partial": "Event",
          "signature": "IntMap EventType-\u003eCapEvent-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:ppEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "ppEventLog",
          "package": "ghc-events",
          "signature": "EventLog -\u003e String",
          "source": "src/GHC-RTS-Events.html#ppEventLog",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "ppEventLog",
          "normalized": "EventLog-\u003eString",
          "package": "ghc-events",
          "partial": "Event Log",
          "signature": "EventLog-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:ppEventLog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "ppEventType",
          "package": "ghc-events",
          "signature": "EventType -\u003e String",
          "source": "src/GHC-RTS-Events.html#ppEventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "ppEventType",
          "normalized": "EventType-\u003eString",
          "package": "ghc-events",
          "partial": "Event Type",
          "signature": "EventType-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:ppEventType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "ppid",
          "package": "ghc-events",
          "signature": "PID",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "ppid",
          "package": "ghc-events",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:ppid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "readEventLogFromFile",
          "package": "ghc-events",
          "signature": "FilePath -\u003e IO (Either String EventLog)",
          "source": "src/GHC-RTS-Events.html#readEventLogFromFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "readEventLogFromFile",
          "normalized": "FilePath-\u003eIO(Either String EventLog)",
          "package": "ghc-events",
          "partial": "Event Log From File",
          "signature": "FilePath-\u003eIO(Either String EventLog)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:readEventLogFromFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "ref",
          "package": "ghc-events",
          "signature": "EventTypeNum",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "ref",
          "package": "ghc-events",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:ref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "rtsident",
          "package": "ghc-events",
          "signature": "String",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "rtsident",
          "package": "ghc-events",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:rtsident"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "sId",
          "package": "ghc-events",
          "signature": "StringId",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "sId",
          "package": "ghc-events",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:sId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "sec",
          "package": "ghc-events",
          "signature": "Word64",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "sec",
          "package": "ghc-events",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:sec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "showEventInfo",
          "package": "ghc-events",
          "signature": "EventInfo -\u003e String",
          "source": "src/GHC-RTS-Events.html#showEventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "showEventInfo",
          "normalized": "EventInfo-\u003eString",
          "package": "ghc-events",
          "partial": "Event Info",
          "signature": "EventInfo-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:showEventInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "showThreadStopStatus",
          "package": "ghc-events",
          "signature": "ThreadStopStatus -\u003e String",
          "source": "src/GHC-RTS-Events.html#showThreadStopStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "showThreadStopStatus",
          "normalized": "ThreadStopStatus-\u003eString",
          "package": "ghc-events",
          "partial": "Thread Stop Status",
          "signature": "ThreadStopStatus-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:showThreadStopStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e indicates variable size\n\u003c/p\u003e",
          "module": "GHC.RTS.Events",
          "name": "size",
          "package": "ghc-events",
          "signature": "Maybe EventTypeSize",
          "source": "src/GHC-RTS-EventTypes.html#EventType",
          "type": "function"
        },
        "index": {
          "description": "Nothing indicates variable size",
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "size",
          "package": "ghc-events",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "sizeBytes",
          "package": "ghc-events",
          "signature": "Word64",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "sizeBytes",
          "package": "ghc-events",
          "partial": "Bytes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:sizeBytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "slop",
          "package": "ghc-events",
          "signature": "Word64",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "slop",
          "package": "ghc-events",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:slop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "sortEvents",
          "package": "ghc-events",
          "signature": "[Event] -\u003e [CapEvent]",
          "source": "src/GHC-RTS-Events.html#sortEvents",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "sortEvents",
          "normalized": "[Event]-\u003e[CapEvent]",
          "package": "ghc-events",
          "partial": "Events",
          "signature": "[Event]-\u003e[CapEvent]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:sortEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSort the raw event stream by time, annotating each event with the\n capability that generated it.\n\u003c/p\u003e",
          "module": "GHC.RTS.Events",
          "name": "sortGroups",
          "package": "ghc-events",
          "signature": "[(Maybe Int, [Event])] -\u003e [CapEvent]",
          "source": "src/GHC-RTS-Events.html#sortGroups",
          "type": "function"
        },
        "index": {
          "description": "Sort the raw event stream by time annotating each event with the capability that generated it",
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "sortGroups",
          "normalized": "[(Maybe Int,[Event])]-\u003e[CapEvent]",
          "package": "ghc-events",
          "partial": "Groups",
          "signature": "[(Maybe Int,[Event])]-\u003e[CapEvent]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:sortGroups"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "sparkThread",
          "package": "ghc-events",
          "signature": "ThreadId",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "sparkThread",
          "package": "ghc-events",
          "partial": "Thread",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:sparkThread"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "spark_id",
          "package": "ghc-events",
          "signature": "SparkId",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "spark_id",
          "package": "ghc-events",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:spark_id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "sparksConverted",
          "package": "ghc-events",
          "signature": "Word64",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "sparksConverted",
          "package": "ghc-events",
          "partial": "Converted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:sparksConverted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "sparksCreated",
          "package": "ghc-events",
          "signature": "Word64",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "sparksCreated",
          "package": "ghc-events",
          "partial": "Created",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:sparksCreated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "sparksDud",
          "package": "ghc-events",
          "signature": "Word64",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "sparksDud",
          "package": "ghc-events",
          "partial": "Dud",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:sparksDud"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "sparksFizzled",
          "package": "ghc-events",
          "signature": "Word64",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "sparksFizzled",
          "package": "ghc-events",
          "partial": "Fizzled",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:sparksFizzled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "sparksGCd",
          "package": "ghc-events",
          "signature": "Word64",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "sparksGCd",
          "package": "ghc-events",
          "partial": "GCd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:sparksGCd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "sparksOverflowed",
          "package": "ghc-events",
          "signature": "Word64",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "sparksOverflowed",
          "package": "ghc-events",
          "partial": "Overflowed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:sparksOverflowed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "sparksRemaining",
          "package": "ghc-events",
          "signature": "Word64",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "sparksRemaining",
          "package": "ghc-events",
          "partial": "Remaining",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:sparksRemaining"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "spec",
          "package": "ghc-events",
          "signature": "EventInfo",
          "source": "src/GHC-RTS-EventTypes.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "spec",
          "package": "ghc-events",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:spec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "static_id",
          "package": "ghc-events",
          "signature": "ParConjStaticId",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "static_id",
          "package": "ghc-events",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:static_id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "status",
          "package": "ghc-events",
          "signature": "ThreadStopStatus",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "status",
          "package": "ghc-events",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:status"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "str",
          "package": "ghc-events",
          "signature": "String",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "str",
          "package": "ghc-events",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:str"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "sz_kernel_tid",
          "package": "ghc-events",
          "signature": "EventTypeSize",
          "source": "src/GHC-RTS-EventTypes.html#sz_kernel_tid",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "sz_kernel_tid",
          "package": "ghc-events",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:sz_kernel_tid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "sz_perf_num",
          "package": "ghc-events",
          "signature": "EventTypeSize",
          "source": "src/GHC-RTS-EventTypes.html#sz_perf_num",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "sz_perf_num",
          "package": "ghc-events",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:sz_perf_num"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "taskId",
          "package": "ghc-events",
          "signature": "TaskId",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "taskId",
          "package": "ghc-events",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:taskId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "thread",
          "package": "ghc-events",
          "signature": "ThreadId",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "thread",
          "package": "ghc-events",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:thread"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "thread_id",
          "package": "ghc-events",
          "signature": "ThreadId",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "thread_id",
          "package": "ghc-events",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:thread_id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "threadlabel",
          "package": "ghc-events",
          "signature": "String",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "threadlabel",
          "package": "ghc-events",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:threadlabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "tid",
          "package": "ghc-events",
          "signature": "KernelThreadId",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "tid",
          "package": "ghc-events",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:tid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "time",
          "package": "ghc-events",
          "signature": "Timestamp",
          "source": "src/GHC-RTS-EventTypes.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "time",
          "package": "ghc-events",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "victimCap",
          "package": "ghc-events",
          "signature": "Int",
          "source": "src/GHC-RTS-EventTypes.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "victimCap",
          "package": "ghc-events",
          "partial": "Cap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:victimCap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.Events",
          "name": "writeEventLogToFile",
          "package": "ghc-events",
          "signature": "FilePath -\u003e EventLog -\u003e IO ()",
          "source": "src/GHC-RTS-Events.html#writeEventLogToFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS Events",
          "module": "GHC.RTS.Events",
          "name": "writeEventLogToFile",
          "normalized": "FilePath-\u003eEventLog-\u003eIO()",
          "package": "ghc-events",
          "partial": "Event Log To File",
          "signature": "FilePath-\u003eEventLog-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:writeEventLogToFile"
      }
    }
  ]
]