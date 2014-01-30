[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis-Capability.html#",
      "description": {
        "fct-module": "GHC.RTS.Events.Analysis.Capability",
        "fct-package": "ghc-events",
        "fct-signature": "module",
        "fct-source": "src/GHC-RTS-Events-Analysis-Capability.html",
        "fct-type": "module",
        "title": "Capability"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events Analysis Capability",
        "module": "GHC.RTS.Events.Analysis.Capability",
        "name": "Capability",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Capability",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis-Capability.html#v:capabilityTaskOSMachine",
      "description": {
        "fct-descr": "\u003cp\u003eThis state machine tracks Haskell tasks (represented by the KernelThreadId\n of their OS thread) residing on capabilities and additionally\n tracks the (immutable) assignment of OS thread ids (KernelThreadId)\n to tasks ids (TaskId).\n Each Haskell task can only reside on one capability, but can be migrated\n between them.\n\u003c/p\u003e\u003cp\u003eInvariant for the \u003ccode\u003e(Map KernelThreadId Int, Map TaskId KernelThreadId)\u003c/code\u003e \n type: the second map is an injection (verified by the machine \n in \u003ccode\u003einsertTaskOS\u003c/code\u003e) and the following sets are equal: \n keys of the fist map and values of the second\n (follows from the construction of the maps by the machine).\n\u003c/p\u003e\u003cp\u003eThe machine verifies as much as \u003ccode\u003e\u003ca\u003ecapabilityTaskPoolMachine\u003c/a\u003e\u003c/code\u003e and additionally\n the data invariant, and offers a richer verification profile.\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.Events.Analysis.Capability",
        "fct-package": "ghc-events",
        "fct-signature": "Machine (Map KernelThreadId Int, Map TaskId KernelThreadId) CapEvent",
        "fct-source": "src/GHC-RTS-Events-Analysis-Capability.html#capabilityTaskOSMachine",
        "fct-type": "function",
        "title": "capabilityTaskOSMachine"
      },
      "index": {
        "description": "This state machine tracks Haskell tasks represented by the KernelThreadId of their OS thread residing on capabilities and additionally tracks the immutable assignment of OS thread ids KernelThreadId to tasks ids TaskId Each Haskell task can only reside on one capability but can be migrated between them Invariant for the Map KernelThreadId Int Map TaskId KernelThreadId type the second map is an injection verified by the machine in insertTaskOS and the following sets are equal keys of the fist map and values of the second follows from the construction of the maps by the machine The machine verifies as much as capabilityTaskPoolMachine and additionally the data invariant and offers richer verification profile",
        "hierarchy": "GHC RTS Events Analysis Capability",
        "module": "GHC.RTS.Events.Analysis.Capability",
        "name": "capabilityTaskOSMachine",
        "normalized": "Machine(Map KernelThreadId Int,Map TaskId KernelThreadId)CapEvent",
        "package": "ghc-events",
        "partial": "Task OSMachine",
        "signature": "Machine(Map KernelThreadId Int,Map TaskId KernelThreadId)CapEvent"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis-Capability.html#v:capabilityTaskPoolMachine",
      "description": {
        "fct-descr": "\u003cp\u003eThis state machine tracks Haskell tasks, represented by TaskId,\n residing on capabilities.\n Each Haskell task can only reside on one capability, but can be migrated\n between them.\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.Events.Analysis.Capability",
        "fct-package": "ghc-events",
        "fct-signature": "Machine (Map TaskId Int) CapEvent",
        "fct-source": "src/GHC-RTS-Events-Analysis-Capability.html#capabilityTaskPoolMachine",
        "fct-type": "function",
        "title": "capabilityTaskPoolMachine"
      },
      "index": {
        "description": "This state machine tracks Haskell tasks represented by TaskId residing on capabilities Each Haskell task can only reside on one capability but can be migrated between them",
        "hierarchy": "GHC RTS Events Analysis Capability",
        "module": "GHC.RTS.Events.Analysis.Capability",
        "name": "capabilityTaskPoolMachine",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Task Pool Machine",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis-Capability.html#v:capabilityThreadIndexer",
      "description": {
        "fct-module": "GHC.RTS.Events.Analysis.Capability",
        "fct-package": "ghc-events",
        "fct-signature": "Map Int ThreadId -\u003e CapEvent -\u003e Maybe ThreadId",
        "fct-source": "src/GHC-RTS-Events-Analysis-Capability.html#capabilityThreadIndexer",
        "fct-type": "function",
        "title": "capabilityThreadIndexer"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events Analysis Capability",
        "module": "GHC.RTS.Events.Analysis.Capability",
        "name": "capabilityThreadIndexer",
        "normalized": "Map Int ThreadId-\u003eCapEvent-\u003eMaybe ThreadId",
        "package": "ghc-events",
        "partial": "Thread Indexer",
        "signature": "Map Int ThreadId-\u003eCapEvent-\u003eMaybe ThreadId"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis-Capability.html#v:capabilityThreadPoolMachine",
      "description": {
        "fct-descr": "\u003cp\u003eThis state machine tracks threads residing on capabilities.\n Each thread can only reside on one capability, but can be migrated between\n them.\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.Events.Analysis.Capability",
        "fct-package": "ghc-events",
        "fct-signature": "Machine (Map ThreadId Int) CapEvent",
        "fct-source": "src/GHC-RTS-Events-Analysis-Capability.html#capabilityThreadPoolMachine",
        "fct-type": "function",
        "title": "capabilityThreadPoolMachine"
      },
      "index": {
        "description": "This state machine tracks threads residing on capabilities Each thread can only reside on one capability but can be migrated between them",
        "hierarchy": "GHC RTS Events Analysis Capability",
        "module": "GHC.RTS.Events.Analysis.Capability",
        "name": "capabilityThreadPoolMachine",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Thread Pool Machine",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis-Capability.html#v:capabilityThreadRunMachine",
      "description": {
        "fct-descr": "\u003cp\u003eThis state machine tracks threads running on capabilities, only one thread\n may run on a capability at a time.\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.Events.Analysis.Capability",
        "fct-package": "ghc-events",
        "fct-signature": "Machine (Map Int ThreadId) CapEvent",
        "fct-source": "src/GHC-RTS-Events-Analysis-Capability.html#capabilityThreadRunMachine",
        "fct-type": "function",
        "title": "capabilityThreadRunMachine"
      },
      "index": {
        "description": "This state machine tracks threads running on capabilities only one thread may run on capability at time",
        "hierarchy": "GHC RTS Events Analysis Capability",
        "module": "GHC.RTS.Events.Analysis.Capability",
        "name": "capabilityThreadRunMachine",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Thread Run Machine",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis-SparkThread.html#",
      "description": {
        "fct-module": "GHC.RTS.Events.Analysis.SparkThread",
        "fct-package": "ghc-events",
        "fct-signature": "module",
        "fct-source": "src/GHC-RTS-Events-Analysis-SparkThread.html",
        "fct-type": "module",
        "title": "SparkThread"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events Analysis SparkThread",
        "module": "GHC.RTS.Events.Analysis.SparkThread",
        "name": "SparkThread",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Spark Thread",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis-SparkThread.html#t:SparkThreadState",
      "description": {
        "fct-module": "GHC.RTS.Events.Analysis.SparkThread",
        "fct-package": "ghc-events",
        "fct-signature": "data",
        "fct-source": "src/GHC-RTS-Events-Analysis-SparkThread.html#SparkThreadState",
        "fct-type": "data",
        "title": "SparkThreadState"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events Analysis SparkThread",
        "module": "GHC.RTS.Events.Analysis.SparkThread",
        "name": "SparkThreadState",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Spark Thread State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis-SparkThread.html#v:SparkThreadCreated",
      "description": {
        "fct-module": "GHC.RTS.Events.Analysis.SparkThread",
        "fct-package": "ghc-events",
        "fct-signature": "SparkThreadCreated",
        "fct-source": "src/GHC-RTS-Events-Analysis-SparkThread.html#SparkThreadState",
        "fct-type": "function",
        "title": "SparkThreadCreated"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events Analysis SparkThread",
        "module": "GHC.RTS.Events.Analysis.SparkThread",
        "name": "SparkThreadCreated",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Spark Thread Created",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis-SparkThread.html#v:SparkThreadFinal",
      "description": {
        "fct-module": "GHC.RTS.Events.Analysis.SparkThread",
        "fct-package": "ghc-events",
        "fct-signature": "SparkThreadFinal",
        "fct-source": "src/GHC-RTS-Events-Analysis-SparkThread.html#SparkThreadState",
        "fct-type": "function",
        "title": "SparkThreadFinal"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events Analysis SparkThread",
        "module": "GHC.RTS.Events.Analysis.SparkThread",
        "name": "SparkThreadFinal",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Spark Thread Final",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis-SparkThread.html#v:SparkThreadInitial",
      "description": {
        "fct-module": "GHC.RTS.Events.Analysis.SparkThread",
        "fct-package": "ghc-events",
        "fct-signature": "SparkThreadInitial",
        "fct-source": "src/GHC-RTS-Events-Analysis-SparkThread.html#SparkThreadState",
        "fct-type": "function",
        "title": "SparkThreadInitial"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events Analysis SparkThread",
        "module": "GHC.RTS.Events.Analysis.SparkThread",
        "name": "SparkThreadInitial",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Spark Thread Initial",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis-SparkThread.html#v:SparkThreadPaused",
      "description": {
        "fct-module": "GHC.RTS.Events.Analysis.SparkThread",
        "fct-package": "ghc-events",
        "fct-signature": "SparkThreadPaused Int",
        "fct-source": "src/GHC-RTS-Events-Analysis-SparkThread.html#SparkThreadState",
        "fct-type": "function",
        "title": "SparkThreadPaused"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events Analysis SparkThread",
        "module": "GHC.RTS.Events.Analysis.SparkThread",
        "name": "SparkThreadPaused",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Spark Thread Paused",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis-SparkThread.html#v:SparkThreadRunning",
      "description": {
        "fct-module": "GHC.RTS.Events.Analysis.SparkThread",
        "fct-package": "ghc-events",
        "fct-signature": "SparkThreadRunning Int",
        "fct-source": "src/GHC-RTS-Events-Analysis-SparkThread.html#SparkThreadState",
        "fct-type": "function",
        "title": "SparkThreadRunning"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events Analysis SparkThread",
        "module": "GHC.RTS.Events.Analysis.SparkThread",
        "name": "SparkThreadRunning",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Spark Thread Running",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis-SparkThread.html#v:capabilitySparkThreadIndexer",
      "description": {
        "fct-module": "GHC.RTS.Events.Analysis.SparkThread",
        "fct-package": "ghc-events",
        "fct-signature": "(Map Int ThreadId, Set ThreadId) -\u003e CapEvent -\u003e Maybe ThreadId",
        "fct-source": "src/GHC-RTS-Events-Analysis-SparkThread.html#capabilitySparkThreadIndexer",
        "fct-type": "function",
        "title": "capabilitySparkThreadIndexer"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events Analysis SparkThread",
        "module": "GHC.RTS.Events.Analysis.SparkThread",
        "name": "capabilitySparkThreadIndexer",
        "normalized": "(Map Int ThreadId,Set ThreadId)-\u003eCapEvent-\u003eMaybe ThreadId",
        "package": "ghc-events",
        "partial": "Spark Thread Indexer",
        "signature": "(Map Int ThreadId,Set ThreadId)-\u003eCapEvent-\u003eMaybe ThreadId"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis-SparkThread.html#v:capabilitySparkThreadMachine",
      "description": {
        "fct-module": "GHC.RTS.Events.Analysis.SparkThread",
        "fct-package": "ghc-events",
        "fct-signature": "Machine (Map Int ThreadId, Set ThreadId) CapEvent",
        "fct-source": "src/GHC-RTS-Events-Analysis-SparkThread.html#capabilitySparkThreadMachine",
        "fct-type": "function",
        "title": "capabilitySparkThreadMachine"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events Analysis SparkThread",
        "module": "GHC.RTS.Events.Analysis.SparkThread",
        "name": "capabilitySparkThreadMachine",
        "normalized": "Machine(Map Int ThreadId,Set ThreadId)CapEvent",
        "package": "ghc-events",
        "partial": "Spark Thread Machine",
        "signature": "Machine(Map Int ThreadId,Set ThreadId)CapEvent"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis-SparkThread.html#v:sparkThreadMachine",
      "description": {
        "fct-module": "GHC.RTS.Events.Analysis.SparkThread",
        "fct-package": "ghc-events",
        "fct-signature": "Machine SparkThreadState EventInfo",
        "fct-source": "src/GHC-RTS-Events-Analysis-SparkThread.html#sparkThreadMachine",
        "fct-type": "function",
        "title": "sparkThreadMachine"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events Analysis SparkThread",
        "module": "GHC.RTS.Events.Analysis.SparkThread",
        "name": "sparkThreadMachine",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Thread Machine",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis-Thread.html#",
      "description": {
        "fct-module": "GHC.RTS.Events.Analysis.Thread",
        "fct-package": "ghc-events",
        "fct-signature": "module",
        "fct-source": "src/GHC-RTS-Events-Analysis-Thread.html",
        "fct-type": "module",
        "title": "Thread"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events Analysis Thread",
        "module": "GHC.RTS.Events.Analysis.Thread",
        "name": "Thread",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Thread",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis-Thread.html#t:ThreadState",
      "description": {
        "fct-descr": "\u003cp\u003eThis datatype defines the state machine for a single thread.\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.Events.Analysis.Thread",
        "fct-package": "ghc-events",
        "fct-signature": "data",
        "fct-source": "src/GHC-RTS-Events-Analysis-Thread.html#ThreadState",
        "fct-type": "data",
        "title": "ThreadState"
      },
      "index": {
        "description": "This datatype defines the state machine for single thread",
        "hierarchy": "GHC RTS Events Analysis Thread",
        "module": "GHC.RTS.Events.Analysis.Thread",
        "name": "ThreadState",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Thread State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis-Thread.html#v:ThreadFinal",
      "description": {
        "fct-module": "GHC.RTS.Events.Analysis.Thread",
        "fct-package": "ghc-events",
        "fct-signature": "ThreadFinal",
        "fct-source": "src/GHC-RTS-Events-Analysis-Thread.html#ThreadState",
        "fct-type": "function",
        "title": "ThreadFinal"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events Analysis Thread",
        "module": "GHC.RTS.Events.Analysis.Thread",
        "name": "ThreadFinal",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Thread Final",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis-Thread.html#v:ThreadInitial",
      "description": {
        "fct-module": "GHC.RTS.Events.Analysis.Thread",
        "fct-package": "ghc-events",
        "fct-signature": "ThreadInitial",
        "fct-source": "src/GHC-RTS-Events-Analysis-Thread.html#ThreadState",
        "fct-type": "function",
        "title": "ThreadInitial"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events Analysis Thread",
        "module": "GHC.RTS.Events.Analysis.Thread",
        "name": "ThreadInitial",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Thread Initial",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis-Thread.html#v:ThreadQueued",
      "description": {
        "fct-module": "GHC.RTS.Events.Analysis.Thread",
        "fct-package": "ghc-events",
        "fct-signature": "ThreadQueued",
        "fct-source": "src/GHC-RTS-Events-Analysis-Thread.html#ThreadState",
        "fct-type": "function",
        "title": "ThreadQueued"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events Analysis Thread",
        "module": "GHC.RTS.Events.Analysis.Thread",
        "name": "ThreadQueued",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Thread Queued",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis-Thread.html#v:ThreadRunning",
      "description": {
        "fct-module": "GHC.RTS.Events.Analysis.Thread",
        "fct-package": "ghc-events",
        "fct-signature": "ThreadRunning",
        "fct-source": "src/GHC-RTS-Events-Analysis-Thread.html#ThreadState",
        "fct-type": "function",
        "title": "ThreadRunning"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events Analysis Thread",
        "module": "GHC.RTS.Events.Analysis.Thread",
        "name": "ThreadRunning",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Thread Running",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis-Thread.html#v:ThreadStopped",
      "description": {
        "fct-module": "GHC.RTS.Events.Analysis.Thread",
        "fct-package": "ghc-events",
        "fct-signature": "ThreadStopped",
        "fct-source": "src/GHC-RTS-Events-Analysis-Thread.html#ThreadState",
        "fct-type": "function",
        "title": "ThreadStopped"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events Analysis Thread",
        "module": "GHC.RTS.Events.Analysis.Thread",
        "name": "ThreadStopped",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Thread Stopped",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis-Thread.html#v:threadMachine",
      "description": {
        "fct-descr": "\u003cp\u003eThis state machine tracks the events processed by a thread.\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.Events.Analysis.Thread",
        "fct-package": "ghc-events",
        "fct-signature": "Machine ThreadState EventInfo",
        "fct-source": "src/GHC-RTS-Events-Analysis-Thread.html#threadMachine",
        "fct-type": "function",
        "title": "threadMachine"
      },
      "index": {
        "description": "This state machine tracks the events processed by thread",
        "hierarchy": "GHC RTS Events Analysis Thread",
        "module": "GHC.RTS.Events.Analysis.Thread",
        "name": "threadMachine",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Machine",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis.html#",
      "description": {
        "fct-module": "GHC.RTS.Events.Analysis",
        "fct-package": "ghc-events",
        "fct-signature": "module",
        "fct-source": "src/GHC-RTS-Events-Analysis.html",
        "fct-type": "module",
        "title": "Analysis"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events Analysis",
        "module": "GHC.RTS.Events.Analysis",
        "name": "Analysis",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Analysis",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis.html#t:Machine",
      "description": {
        "fct-descr": "\u003cp\u003eThis is based on a simple finite state machine hence the names \u003ccode\u003e\u003ca\u003edelta\u003c/a\u003e\u003c/code\u003e\n for the state transition function.\n Since states might be more than simple pattern matched constructors, we\n use `finals :: state -\u003e Bool`, rather than `Set state`, to indicate that\n the machine is in some final state. Similarly for \u003ccode\u003e\u003ca\u003ealpha\u003c/a\u003e\u003c/code\u003e, which\n indicates the alphabet of inputs to a machine.\n The function \u003ccode\u003e\u003ca\u003edelta\u003c/a\u003e\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e values, where \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n indicates that no valid transition is possible: ie, there has been an\n error.\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.Events.Analysis",
        "fct-package": "ghc-events",
        "fct-signature": "data",
        "fct-source": "src/GHC-RTS-Events-Analysis.html#Machine",
        "fct-type": "data",
        "title": "Machine"
      },
      "index": {
        "description": "This is based on simple finite state machine hence the names delta for the state transition function Since states might be more than simple pattern matched constructors we use finals state Bool rather than Set state to indicate that the machine is in some final state Similarly for alpha which indicates the alphabet of inputs to machine The function delta returns Maybe values where Nothing indicates that no valid transition is possible ie there has been an error",
        "hierarchy": "GHC RTS Events Analysis",
        "module": "GHC.RTS.Events.Analysis",
        "name": "Machine",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Machine",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis.html#t:Process",
      "description": {
        "fct-module": "GHC.RTS.Events.Analysis",
        "fct-package": "ghc-events",
        "fct-signature": "data",
        "fct-source": "src/GHC-RTS-Events-Analysis.html#Process",
        "fct-type": "data",
        "title": "Process"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events Analysis",
        "module": "GHC.RTS.Events.Analysis",
        "name": "Process",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Process",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis.html#t:Profile",
      "description": {
        "fct-descr": "\u003cp\u003eA state augmented by Timestamp information is held in \u003ccode\u003e\u003ca\u003eprofileState\u003c/a\u003e\u003c/code\u003e.\n When the state changes, \u003ccode\u003eprofileMap\u003c/code\u003e stores a map between each state\n and its cumulative time.\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.Events.Analysis",
        "fct-package": "ghc-events",
        "fct-signature": "data",
        "fct-source": "src/GHC-RTS-Events-Analysis.html#Profile",
        "fct-type": "data",
        "title": "Profile"
      },
      "index": {
        "description": "state augmented by Timestamp information is held in profileState When the state changes profileMap stores map between each state and its cumulative time",
        "hierarchy": "GHC RTS Events Analysis",
        "module": "GHC.RTS.Events.Analysis",
        "name": "Profile",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Profile",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis.html#v:Done",
      "description": {
        "fct-module": "GHC.RTS.Events.Analysis",
        "fct-package": "ghc-events",
        "fct-signature": "Done",
        "fct-source": "src/GHC-RTS-Events-Analysis.html#Process",
        "fct-type": "function",
        "title": "Done"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events Analysis",
        "module": "GHC.RTS.Events.Analysis",
        "name": "Done",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Done",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis.html#v:Fail",
      "description": {
        "fct-module": "GHC.RTS.Events.Analysis",
        "fct-package": "ghc-events",
        "fct-signature": "Fail e",
        "fct-source": "src/GHC-RTS-Events-Analysis.html#Process",
        "fct-type": "function",
        "title": "Fail"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events Analysis",
        "module": "GHC.RTS.Events.Analysis",
        "name": "Fail",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Fail",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis.html#v:Machine",
      "description": {
        "fct-module": "GHC.RTS.Events.Analysis",
        "fct-package": "ghc-events",
        "fct-signature": "Machine",
        "fct-source": "src/GHC-RTS-Events-Analysis.html#Machine",
        "fct-type": "function",
        "title": "Machine"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events Analysis",
        "module": "GHC.RTS.Events.Analysis",
        "name": "Machine",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Machine",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis.html#v:Prod",
      "description": {
        "fct-module": "GHC.RTS.Events.Analysis",
        "fct-package": "ghc-events",
        "fct-signature": "Prod a (Process e a)",
        "fct-source": "src/GHC-RTS-Events-Analysis.html#Process",
        "fct-type": "function",
        "title": "Prod"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events Analysis",
        "module": "GHC.RTS.Events.Analysis",
        "name": "Prod",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Prod",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis.html#v:Profile",
      "description": {
        "fct-module": "GHC.RTS.Events.Analysis",
        "fct-package": "ghc-events",
        "fct-signature": "Profile",
        "fct-source": "src/GHC-RTS-Events-Analysis.html#Profile",
        "fct-type": "function",
        "title": "Profile"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events Analysis",
        "module": "GHC.RTS.Events.Analysis",
        "name": "Profile",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Profile",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis.html#v:alpha",
      "description": {
        "fct-descr": "\u003cp\u003eValid input alphabet\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.Events.Analysis",
        "fct-package": "ghc-events",
        "fct-signature": "i -\u003e Bool",
        "fct-source": "src/GHC-RTS-Events-Analysis.html#Machine",
        "fct-type": "function",
        "title": "alpha"
      },
      "index": {
        "description": "Valid input alphabet",
        "hierarchy": "GHC RTS Events Analysis",
        "module": "GHC.RTS.Events.Analysis",
        "name": "alpha",
        "normalized": "a-\u003eBool",
        "package": "ghc-events",
        "partial": "",
        "signature": "i-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis.html#v:delta",
      "description": {
        "fct-descr": "\u003cp\u003eState transition function\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.Events.Analysis",
        "fct-package": "ghc-events",
        "fct-signature": "s -\u003e i -\u003e Maybe s",
        "fct-source": "src/GHC-RTS-Events-Analysis.html#Machine",
        "fct-type": "function",
        "title": "delta"
      },
      "index": {
        "description": "State transition function",
        "hierarchy": "GHC RTS Events Analysis",
        "module": "GHC.RTS.Events.Analysis",
        "name": "delta",
        "normalized": "a-\u003eb-\u003eMaybe a",
        "package": "ghc-events",
        "partial": "",
        "signature": "s-\u003ei-\u003eMaybe s"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis.html#v:extractIndexed",
      "description": {
        "fct-module": "GHC.RTS.Events.Analysis",
        "fct-package": "ghc-events",
        "fct-signature": "(s -\u003e i -\u003e Maybe o) -\u003e (i -\u003e Maybe k) -\u003e Map k s -\u003e i -\u003e Maybe (k, o)",
        "fct-source": "src/GHC-RTS-Events-Analysis.html#extractIndexed",
        "fct-type": "function",
        "title": "extractIndexed"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events Analysis",
        "module": "GHC.RTS.Events.Analysis",
        "name": "extractIndexed",
        "normalized": "(a-\u003eb-\u003eMaybe c)-\u003e(b-\u003eMaybe d)-\u003eMap d a-\u003eb-\u003eMaybe(d,c)",
        "package": "ghc-events",
        "partial": "Indexed",
        "signature": "(s-\u003ei-\u003eMaybe o)-\u003e(i-\u003eMaybe k)-\u003eMap k s-\u003ei-\u003eMaybe(k,o)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis.html#v:final",
      "description": {
        "fct-descr": "\u003cp\u003eValid final states\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.Events.Analysis",
        "fct-package": "ghc-events",
        "fct-signature": "s -\u003e Bool",
        "fct-source": "src/GHC-RTS-Events-Analysis.html#Machine",
        "fct-type": "function",
        "title": "final"
      },
      "index": {
        "description": "Valid final states",
        "hierarchy": "GHC RTS Events Analysis",
        "module": "GHC.RTS.Events.Analysis",
        "name": "final",
        "normalized": "a-\u003eBool",
        "package": "ghc-events",
        "partial": "",
        "signature": "s-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis.html#v:indexM",
      "description": {
        "fct-descr": "\u003cp\u003eAn indexed machine takes a function that multiplexes the input to a key\n and then takes a machine description to an indexed machine.\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.Events.Analysis",
        "fct-package": "ghc-events",
        "fct-signature": "(i -\u003e Maybe k)-\u003e Machine s i-\u003e Machine (Map k s) i",
        "fct-type": "function",
        "title": "indexM"
      },
      "index": {
        "description": "An indexed machine takes function that multiplexes the input to key and then takes machine description to an indexed machine",
        "hierarchy": "GHC RTS Events Analysis",
        "module": "GHC.RTS.Events.Analysis",
        "name": "indexM",
        "normalized": "(a-\u003eMaybe b)-\u003eMachine c a-\u003eMachine(Map b c)a",
        "package": "ghc-events",
        "partial": "",
        "signature": "(i-\u003eMaybe k)-\u003eMachine s i-\u003eMachine(Map k s)i"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis.html#v:initial",
      "description": {
        "fct-descr": "\u003cp\u003eInitial state\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.Events.Analysis",
        "fct-package": "ghc-events",
        "fct-signature": "s",
        "fct-source": "src/GHC-RTS-Events-Analysis.html#Machine",
        "fct-type": "function",
        "title": "initial"
      },
      "index": {
        "description": "Initial state",
        "hierarchy": "GHC RTS Events Analysis",
        "module": "GHC.RTS.Events.Analysis",
        "name": "initial",
        "normalized": "",
        "package": "ghc-events",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis.html#v:profile",
      "description": {
        "fct-module": "GHC.RTS.Events.Analysis",
        "fct-package": "ghc-events",
        "fct-signature": "Machine s i-\u003e (i -\u003e Timestamp)-\u003e [i]-\u003e Process (Profile s, i) (s, Timestamp, Timestamp)",
        "fct-type": "function",
        "title": "profile"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events Analysis",
        "module": "GHC.RTS.Events.Analysis",
        "name": "profile",
        "normalized": "Machine a b-\u003e(b-\u003eTimestamp)-\u003e[b]-\u003eProcess(Profile a,b)(a,Timestamp,Timestamp)",
        "package": "ghc-events",
        "partial": "",
        "signature": "Machine s i-\u003e(i-\u003eTimestamp)-\u003e[i]-\u003eProcess(Profile s,i)(s,Timestamp,Timestamp)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis.html#v:profileIndexed",
      "description": {
        "fct-module": "GHC.RTS.Events.Analysis",
        "fct-package": "ghc-events",
        "fct-signature": "Machine s i -\u003e (i -\u003e Maybe k) -\u003e (i -\u003e Timestamp) -\u003e [i] -\u003e Process (Map k (Profile s), i) (k, (s, Timestamp, Timestamp))",
        "fct-source": "src/GHC-RTS-Events-Analysis.html#profileIndexed",
        "fct-type": "function",
        "title": "profileIndexed"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events Analysis",
        "module": "GHC.RTS.Events.Analysis",
        "name": "profileIndexed",
        "normalized": "Machine a b-\u003e(b-\u003eMaybe c)-\u003e(b-\u003eTimestamp)-\u003e[b]-\u003eProcess(Map c(Profile a),b)(c,(a,Timestamp,Timestamp))",
        "package": "ghc-events",
        "partial": "Indexed",
        "signature": "Machine s i-\u003e(i-\u003eMaybe k)-\u003e(i-\u003eTimestamp)-\u003e[i]-\u003eProcess(Map k(Profile s),i)(k,(s,Timestamp,Timestamp))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis.html#v:profileM",
      "description": {
        "fct-descr": "\u003cp\u003eThis function takes a machine and profiles its state.\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.Events.Analysis",
        "fct-package": "ghc-events",
        "fct-signature": "(i -\u003e Timestamp) -\u003e Machine s i -\u003e Machine (Profile s) i",
        "fct-source": "src/GHC-RTS-Events-Analysis.html#profileM",
        "fct-type": "function",
        "title": "profileM"
      },
      "index": {
        "description": "This function takes machine and profiles its state",
        "hierarchy": "GHC RTS Events Analysis",
        "module": "GHC.RTS.Events.Analysis",
        "name": "profileM",
        "normalized": "(a-\u003eTimestamp)-\u003eMachine b a-\u003eMachine(Profile b)a",
        "package": "ghc-events",
        "partial": "",
        "signature": "(i-\u003eTimestamp)-\u003eMachine s i-\u003eMachine(Profile s)i"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis.html#v:profileRouted",
      "description": {
        "fct-module": "GHC.RTS.Events.Analysis",
        "fct-package": "ghc-events",
        "fct-signature": "Machine s i -\u003e Machine r i -\u003e (r -\u003e i -\u003e Maybe k) -\u003e (i -\u003e Timestamp) -\u003e [i] -\u003e Process ((Map k (Profile s), r), i) (k, (s, Timestamp, Timestamp))",
        "fct-source": "src/GHC-RTS-Events-Analysis.html#profileRouted",
        "fct-type": "function",
        "title": "profileRouted"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events Analysis",
        "module": "GHC.RTS.Events.Analysis",
        "name": "profileRouted",
        "normalized": "Machine a b-\u003eMachine c b-\u003e(c-\u003eb-\u003eMaybe d)-\u003e(b-\u003eTimestamp)-\u003e[b]-\u003eProcess((Map d(Profile a),c),b)(d,(a,Timestamp,Timestamp))",
        "package": "ghc-events",
        "partial": "Routed",
        "signature": "Machine s i-\u003eMachine r i-\u003e(r-\u003ei-\u003eMaybe k)-\u003e(i-\u003eTimestamp)-\u003e[i]-\u003eProcess((Map k(Profile s),r),i)(k,(s,Timestamp,Timestamp))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis.html#v:profileState",
      "description": {
        "fct-descr": "\u003cp\u003eThe current state\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.Events.Analysis",
        "fct-package": "ghc-events",
        "fct-signature": "s",
        "fct-source": "src/GHC-RTS-Events-Analysis.html#Profile",
        "fct-type": "function",
        "title": "profileState"
      },
      "index": {
        "description": "The current state",
        "hierarchy": "GHC RTS Events Analysis",
        "module": "GHC.RTS.Events.Analysis",
        "name": "profileState",
        "normalized": "",
        "package": "ghc-events",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis.html#v:profileTime",
      "description": {
        "fct-descr": "\u003cp\u003eThe entry time of the state\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.Events.Analysis",
        "fct-package": "ghc-events",
        "fct-signature": "Timestamp",
        "fct-source": "src/GHC-RTS-Events-Analysis.html#Profile",
        "fct-type": "function",
        "title": "profileTime"
      },
      "index": {
        "description": "The entry time of the state",
        "hierarchy": "GHC RTS Events Analysis",
        "module": "GHC.RTS.Events.Analysis",
        "name": "profileTime",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis.html#v:refineM",
      "description": {
        "fct-descr": "\u003cp\u003eMachines sometimes need to operate on coarser input than they are defined\n for. This function takes a function that refines input and a machine that\n works on refined input, and produces a machine that can work on coarse input.\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.Events.Analysis",
        "fct-package": "ghc-events",
        "fct-signature": "(i -\u003e j) -\u003e Machine s j -\u003e Machine s i",
        "fct-source": "src/GHC-RTS-Events-Analysis.html#refineM",
        "fct-type": "function",
        "title": "refineM"
      },
      "index": {
        "description": "Machines sometimes need to operate on coarser input than they are defined for This function takes function that refines input and machine that works on refined input and produces machine that can work on coarse input",
        "hierarchy": "GHC RTS Events Analysis",
        "module": "GHC.RTS.Events.Analysis",
        "name": "refineM",
        "normalized": "(a-\u003eb)-\u003eMachine c b-\u003eMachine c a",
        "package": "ghc-events",
        "partial": "",
        "signature": "(i-\u003ej)-\u003eMachine s j-\u003eMachine s i"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis.html#v:routeM",
      "description": {
        "fct-descr": "\u003cp\u003eA machine can be indexed not only by the inputs, but also by the state\n of an intermediary routing machine. This is a generalisation of indexM.\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.Events.Analysis",
        "fct-package": "ghc-events",
        "fct-signature": "Machine r i -\u003e (r -\u003e i -\u003e Maybe k) -\u003e Machine s i -\u003e Machine (Map k s, r) i",
        "fct-source": "src/GHC-RTS-Events-Analysis.html#routeM",
        "fct-type": "function",
        "title": "routeM"
      },
      "index": {
        "description": "machine can be indexed not only by the inputs but also by the state of an intermediary routing machine This is generalisation of indexM",
        "hierarchy": "GHC RTS Events Analysis",
        "module": "GHC.RTS.Events.Analysis",
        "name": "routeM",
        "normalized": "Machine a b-\u003e(a-\u003eb-\u003eMaybe c)-\u003eMachine d b-\u003eMachine(Map c d,a)b",
        "package": "ghc-events",
        "partial": "",
        "signature": "Machine r i-\u003e(r-\u003ei-\u003eMaybe k)-\u003eMachine s i-\u003eMachine(Map k s,r)i"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis.html#v:simulate",
      "description": {
        "fct-descr": "\u003cp\u003eThis function produces a process that outputs all the states that a\n machine goes through.\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.Events.Analysis",
        "fct-package": "ghc-events",
        "fct-signature": "Machine s i -\u003e [i] -\u003e Process (s, i) (s, i)",
        "fct-source": "src/GHC-RTS-Events-Analysis.html#simulate",
        "fct-type": "function",
        "title": "simulate"
      },
      "index": {
        "description": "This function produces process that outputs all the states that machine goes through",
        "hierarchy": "GHC RTS Events Analysis",
        "module": "GHC.RTS.Events.Analysis",
        "name": "simulate",
        "normalized": "Machine a b-\u003e[b]-\u003eProcess(a,b)(a,b)",
        "package": "ghc-events",
        "partial": "",
        "signature": "Machine s i-\u003e[i]-\u003eProcess(s,i)(s,i)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis.html#v:toList",
      "description": {
        "fct-module": "GHC.RTS.Events.Analysis",
        "fct-package": "ghc-events",
        "fct-signature": "Process e a -\u003e [a]",
        "fct-source": "src/GHC-RTS-Events-Analysis.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events Analysis",
        "module": "GHC.RTS.Events.Analysis",
        "name": "toList",
        "normalized": "Process a b-\u003e[b]",
        "package": "ghc-events",
        "partial": "List",
        "signature": "Process e a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis.html#v:toMaybe",
      "description": {
        "fct-module": "GHC.RTS.Events.Analysis",
        "fct-package": "ghc-events",
        "fct-signature": "Process e a -\u003e Maybe e",
        "fct-source": "src/GHC-RTS-Events-Analysis.html#toMaybe",
        "fct-type": "function",
        "title": "toMaybe"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events Analysis",
        "module": "GHC.RTS.Events.Analysis",
        "name": "toMaybe",
        "normalized": "Process a b-\u003eMaybe a",
        "package": "ghc-events",
        "partial": "Maybe",
        "signature": "Process e a-\u003eMaybe e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis.html#v:validate",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003evalidate\u003c/a\u003e\u003c/code\u003e function takes a machine and a list of inputs. The machine\n is started from its initial state and run against the inputs in turn.\n It returns the state and input on failure, and just the state on success.\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.Events.Analysis",
        "fct-package": "ghc-events",
        "fct-signature": "Machine s i -\u003e [i] -\u003e Either (s, i) s",
        "fct-source": "src/GHC-RTS-Events-Analysis.html#validate",
        "fct-type": "function",
        "title": "validate"
      },
      "index": {
        "description": "The validate function takes machine and list of inputs The machine is started from its initial state and run against the inputs in turn It returns the state and input on failure and just the state on success",
        "hierarchy": "GHC RTS Events Analysis",
        "module": "GHC.RTS.Events.Analysis",
        "name": "validate",
        "normalized": "Machine a b-\u003e[b]-\u003eEither(a,b)a",
        "package": "ghc-events",
        "partial": "",
        "signature": "Machine s i-\u003e[i]-\u003eEither(s,i)s"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Analysis.html#v:validates",
      "description": {
        "fct-descr": "\u003cp\u003eThis function is similar to \u003ccode\u003e\u003ca\u003evalidate\u003c/a\u003e\u003c/code\u003e, but outputs each intermediary\n state as well. For an incremental version, use \u003ccode\u003e\u003ca\u003esimulate\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.Events.Analysis",
        "fct-package": "ghc-events",
        "fct-signature": "Machine s i -\u003e [i] -\u003e [Either (s, i) s]",
        "fct-source": "src/GHC-RTS-Events-Analysis.html#validates",
        "fct-type": "function",
        "title": "validates"
      },
      "index": {
        "description": "This function is similar to validate but outputs each intermediary state as well For an incremental version use simulate",
        "hierarchy": "GHC RTS Events Analysis",
        "module": "GHC.RTS.Events.Analysis",
        "name": "validates",
        "normalized": "Machine a b-\u003e[b]-\u003e[Either(a,b)a]",
        "package": "ghc-events",
        "partial": "",
        "signature": "Machine s i-\u003e[i]-\u003e[Either(s,i)s]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Merge.html#",
      "description": {
        "fct-module": "GHC.RTS.Events.Merge",
        "fct-package": "ghc-events",
        "fct-signature": "module",
        "fct-source": "src/GHC-RTS-Events-Merge.html",
        "fct-type": "module",
        "title": "Merge"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events Merge",
        "module": "GHC.RTS.Events.Merge",
        "name": "Merge",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Merge",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events-Merge.html#v:mergeEventLogs",
      "description": {
        "fct-module": "GHC.RTS.Events.Merge",
        "fct-package": "ghc-events",
        "fct-signature": "EventLog -\u003e EventLog -\u003e EventLog",
        "fct-source": "src/GHC-RTS-Events-Merge.html#mergeEventLogs",
        "fct-type": "function",
        "title": "mergeEventLogs"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events Merge",
        "module": "GHC.RTS.Events.Merge",
        "name": "mergeEventLogs",
        "normalized": "EventLog-\u003eEventLog-\u003eEventLog",
        "package": "ghc-events",
        "partial": "Event Logs",
        "signature": "EventLog-\u003eEventLog-\u003eEventLog"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "module",
        "fct-source": "src/GHC-RTS-Events.html",
        "fct-type": "module",
        "title": "Events"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "Events",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Events",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#t:CapEvent",
      "description": {
        "fct-descr": "\u003cp\u003eAn event annotated with the Capability that generated it, if any\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "data",
        "fct-source": "src/GHC-RTS-EventTypes.html#CapEvent",
        "fct-type": "data",
        "title": "CapEvent"
      },
      "index": {
        "description": "An event annotated with the Capability that generated it if any",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "CapEvent",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Cap Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#t:CapsetType",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "data",
        "fct-source": "src/GHC-RTS-EventTypes.html#CapsetType",
        "fct-type": "data",
        "title": "CapsetType"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "CapsetType",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Capset Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#t:Data",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "data",
        "fct-source": "src/GHC-RTS-EventTypes.html#Data",
        "fct-type": "data",
        "title": "Data"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "Data",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#t:Event",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "data",
        "fct-source": "src/GHC-RTS-EventTypes.html#Event",
        "fct-type": "data",
        "title": "Event"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "Event",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#t:EventInfo",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "data",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "data",
        "title": "EventInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "EventInfo",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Event Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#t:EventLog",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "data",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventLog",
        "fct-type": "data",
        "title": "EventLog"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "EventLog",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Event Log",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#t:EventType",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "data",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventType",
        "fct-type": "data",
        "title": "EventType"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "EventType",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Event Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#t:Header",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "newtype",
        "fct-source": "src/GHC-RTS-EventTypes.html#Header",
        "fct-type": "newtype",
        "title": "Header"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "Header",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Header",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#t:KernelThreadId",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "newtype",
        "fct-source": "src/GHC-RTS-EventTypes.html#KernelThreadId",
        "fct-type": "newtype",
        "title": "KernelThreadId"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "KernelThreadId",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Kernel Thread Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#t:TaskId",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "type",
        "fct-source": "src/GHC-RTS-EventTypes.html#TaskId",
        "fct-type": "type",
        "title": "TaskId"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "TaskId",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Task Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#t:ThreadId",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "type",
        "fct-source": "src/GHC-RTS-EventTypes.html#ThreadId",
        "fct-type": "type",
        "title": "ThreadId"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "ThreadId",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Thread Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#t:ThreadStopStatus",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "data",
        "fct-source": "src/GHC-RTS-EventTypes.html#ThreadStopStatus",
        "fct-type": "data",
        "title": "ThreadStopStatus"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "ThreadStopStatus",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Thread Stop Status",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#t:Timestamp",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "type",
        "fct-source": "src/GHC-RTS-EventTypes.html#Timestamp",
        "fct-type": "type",
        "title": "Timestamp"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "Timestamp",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Timestamp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:BlockedOnBlackHole",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "BlockedOnBlackHole",
        "fct-source": "src/GHC-RTS-EventTypes.html#ThreadStopStatus",
        "fct-type": "function",
        "title": "BlockedOnBlackHole"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "BlockedOnBlackHole",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Blocked On Black Hole",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:BlockedOnBlackHoleOwnedBy",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "BlockedOnBlackHoleOwnedBy !ThreadId",
        "fct-source": "src/GHC-RTS-EventTypes.html#ThreadStopStatus",
        "fct-type": "function",
        "title": "BlockedOnBlackHoleOwnedBy"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "BlockedOnBlackHoleOwnedBy",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Blocked On Black Hole Owned By",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:BlockedOnCCall",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "BlockedOnCCall",
        "fct-source": "src/GHC-RTS-EventTypes.html#ThreadStopStatus",
        "fct-type": "function",
        "title": "BlockedOnCCall"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "BlockedOnCCall",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Blocked On CCall",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:BlockedOnCCall_NoUnblockExc",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "BlockedOnCCall_NoUnblockExc",
        "fct-source": "src/GHC-RTS-EventTypes.html#ThreadStopStatus",
        "fct-type": "function",
        "title": "BlockedOnCCall_NoUnblockExc"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "BlockedOnCCall_NoUnblockExc",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Blocked On CCall No Unblock Exc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:BlockedOnDelay",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "BlockedOnDelay",
        "fct-source": "src/GHC-RTS-EventTypes.html#ThreadStopStatus",
        "fct-type": "function",
        "title": "BlockedOnDelay"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "BlockedOnDelay",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Blocked On Delay",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:BlockedOnDoProc",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "BlockedOnDoProc",
        "fct-source": "src/GHC-RTS-EventTypes.html#ThreadStopStatus",
        "fct-type": "function",
        "title": "BlockedOnDoProc"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "BlockedOnDoProc",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Blocked On Do Proc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:BlockedOnMVar",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "BlockedOnMVar",
        "fct-source": "src/GHC-RTS-EventTypes.html#ThreadStopStatus",
        "fct-type": "function",
        "title": "BlockedOnMVar"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "BlockedOnMVar",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Blocked On MVar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:BlockedOnMsgGlobalise",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "BlockedOnMsgGlobalise",
        "fct-source": "src/GHC-RTS-EventTypes.html#ThreadStopStatus",
        "fct-type": "function",
        "title": "BlockedOnMsgGlobalise"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "BlockedOnMsgGlobalise",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Blocked On Msg Globalise",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:BlockedOnMsgThrowTo",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "BlockedOnMsgThrowTo",
        "fct-source": "src/GHC-RTS-EventTypes.html#ThreadStopStatus",
        "fct-type": "function",
        "title": "BlockedOnMsgThrowTo"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "BlockedOnMsgThrowTo",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Blocked On Msg Throw To",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:BlockedOnRead",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "BlockedOnRead",
        "fct-source": "src/GHC-RTS-EventTypes.html#ThreadStopStatus",
        "fct-type": "function",
        "title": "BlockedOnRead"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "BlockedOnRead",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Blocked On Read",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:BlockedOnSTM",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "BlockedOnSTM",
        "fct-source": "src/GHC-RTS-EventTypes.html#ThreadStopStatus",
        "fct-type": "function",
        "title": "BlockedOnSTM"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "BlockedOnSTM",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Blocked On STM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:BlockedOnWrite",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "BlockedOnWrite",
        "fct-source": "src/GHC-RTS-EventTypes.html#ThreadStopStatus",
        "fct-type": "function",
        "title": "BlockedOnWrite"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "BlockedOnWrite",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Blocked On Write",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:CapCreate",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "CapCreate",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "CapCreate"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "CapCreate",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Cap Create",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:CapDelete",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "CapDelete",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "CapDelete"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "CapDelete",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Cap Delete",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:CapDisable",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "CapDisable",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "CapDisable"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "CapDisable",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Cap Disable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:CapEnable",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "CapEnable",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "CapEnable"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "CapEnable",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Cap Enable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:CapEvent",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "CapEvent",
        "fct-source": "src/GHC-RTS-EventTypes.html#CapEvent",
        "fct-type": "function",
        "title": "CapEvent"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "CapEvent",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Cap Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:CapsetAssignCap",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "CapsetAssignCap",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "CapsetAssignCap"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "CapsetAssignCap",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Capset Assign Cap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:CapsetClockDomain",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "CapsetClockDomain",
        "fct-source": "src/GHC-RTS-EventTypes.html#CapsetType",
        "fct-type": "function",
        "title": "CapsetClockDomain"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "CapsetClockDomain",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Capset Clock Domain",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:CapsetCreate",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "CapsetCreate",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "CapsetCreate"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "CapsetCreate",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Capset Create",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:CapsetCustom",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "CapsetCustom",
        "fct-source": "src/GHC-RTS-EventTypes.html#CapsetType",
        "fct-type": "function",
        "title": "CapsetCustom"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "CapsetCustom",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Capset Custom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:CapsetDelete",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "CapsetDelete",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "CapsetDelete"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "CapsetDelete",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Capset Delete",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:CapsetOsProcess",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "CapsetOsProcess",
        "fct-source": "src/GHC-RTS-EventTypes.html#CapsetType",
        "fct-type": "function",
        "title": "CapsetOsProcess"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "CapsetOsProcess",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Capset Os Process",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:CapsetRemoveCap",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "CapsetRemoveCap",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "CapsetRemoveCap"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "CapsetRemoveCap",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Capset Remove Cap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:CapsetUnknown",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "CapsetUnknown",
        "fct-source": "src/GHC-RTS-EventTypes.html#CapsetType",
        "fct-type": "function",
        "title": "CapsetUnknown"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "CapsetUnknown",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Capset Unknown",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:CreateSparkThread",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "CreateSparkThread",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "CreateSparkThread"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "CreateSparkThread",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Create Spark Thread",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:CreateThread",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "CreateThread",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "CreateThread"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "CreateThread",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Create Thread",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:Data",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "Data",
        "fct-source": "src/GHC-RTS-EventTypes.html#Data",
        "fct-type": "function",
        "title": "Data"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "Data",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:EndGC",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "EndGC",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "EndGC"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "EndGC",
        "normalized": "",
        "package": "ghc-events",
        "partial": "End GC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:Event",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "Event",
        "fct-source": "src/GHC-RTS-EventTypes.html#Event",
        "fct-type": "function",
        "title": "Event"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "Event",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:EventBlock",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "EventBlock",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "EventBlock"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "EventBlock",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Event Block",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:EventLog",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "EventLog",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventLog",
        "fct-type": "function",
        "title": "EventLog"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "EventLog",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Event Log",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:EventType",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "EventType",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventType",
        "fct-type": "function",
        "title": "EventType"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "EventType",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Event Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:ForeignCall",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "ForeignCall",
        "fct-source": "src/GHC-RTS-EventTypes.html#ThreadStopStatus",
        "fct-type": "function",
        "title": "ForeignCall"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "ForeignCall",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Foreign Call",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:GCDone",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "GCDone",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "GCDone"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "GCDone",
        "normalized": "",
        "package": "ghc-events",
        "partial": "GCDone",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:GCIdle",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "GCIdle",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "GCIdle"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "GCIdle",
        "normalized": "",
        "package": "ghc-events",
        "partial": "GCIdle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:GCStatsGHC",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "GCStatsGHC",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "GCStatsGHC"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "GCStatsGHC",
        "normalized": "",
        "package": "ghc-events",
        "partial": "GCStats GHC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:GCWork",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "GCWork",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "GCWork"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "GCWork",
        "normalized": "",
        "package": "ghc-events",
        "partial": "GCWork",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:GlobalSyncGC",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "GlobalSyncGC",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "GlobalSyncGC"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "GlobalSyncGC",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Global Sync GC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:Header",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "Header",
        "fct-source": "src/GHC-RTS-EventTypes.html#Header",
        "fct-type": "function",
        "title": "Header"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "Header",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Header",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:HeapAllocated",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "HeapAllocated",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "HeapAllocated"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "HeapAllocated",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Heap Allocated",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:HeapInfoGHC",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "HeapInfoGHC",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "HeapInfoGHC"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "HeapInfoGHC",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Heap Info GHC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:HeapLive",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "HeapLive",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "HeapLive"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "HeapLive",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Heap Live",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:HeapOverflow",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "HeapOverflow",
        "fct-source": "src/GHC-RTS-EventTypes.html#ThreadStopStatus",
        "fct-type": "function",
        "title": "HeapOverflow"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "HeapOverflow",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Heap Overflow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:HeapSize",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "HeapSize",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "HeapSize"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "HeapSize",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Heap Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:InternString",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "InternString",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "InternString"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "InternString",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Intern String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:KernelThreadId",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "KernelThreadId",
        "fct-source": "src/GHC-RTS-EventTypes.html#KernelThreadId",
        "fct-type": "function",
        "title": "KernelThreadId"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "KernelThreadId",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Kernel Thread Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:MerCallingMain",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "MerCallingMain",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "MerCallingMain"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "MerCallingMain",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Mer Calling Main",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:MerCapSleeping",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "MerCapSleeping",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "MerCapSleeping"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "MerCapSleeping",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Mer Cap Sleeping",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:MerCreateSpark",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "MerCreateSpark",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "MerCreateSpark"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "MerCreateSpark",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Mer Create Spark",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:MerEndParConjunct",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "MerEndParConjunct",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "MerEndParConjunct"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "MerEndParConjunct",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Mer End Par Conjunct",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:MerEndParConjunction",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "MerEndParConjunction",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "MerEndParConjunction"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "MerEndParConjunction",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Mer End Par Conjunction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:MerFutureCreate",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "MerFutureCreate",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "MerFutureCreate"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "MerFutureCreate",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Mer Future Create",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:MerFutureSignal",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "MerFutureSignal",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "MerFutureSignal"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "MerFutureSignal",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Mer Future Signal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:MerFutureWaitNosuspend",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "MerFutureWaitNosuspend",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "MerFutureWaitNosuspend"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "MerFutureWaitNosuspend",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Mer Future Wait Nosuspend",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:MerFutureWaitSuspended",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "MerFutureWaitSuspended",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "MerFutureWaitSuspended"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "MerFutureWaitSuspended",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Mer Future Wait Suspended",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:MerLookingForGlobalThread",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "MerLookingForGlobalThread",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "MerLookingForGlobalThread"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "MerLookingForGlobalThread",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Mer Looking For Global Thread",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:MerLookingForLocalSpark",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "MerLookingForLocalSpark",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "MerLookingForLocalSpark"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "MerLookingForLocalSpark",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Mer Looking For Local Spark",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:MerReleaseThread",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "MerReleaseThread",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "MerReleaseThread"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "MerReleaseThread",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Mer Release Thread",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:MerStartParConjunction",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "MerStartParConjunction",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "MerStartParConjunction"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "MerStartParConjunction",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Mer Start Par Conjunction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:MerWorkStealing",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "MerWorkStealing",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "MerWorkStealing"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "MerWorkStealing",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Mer Work Stealing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:Message",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "Message",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "Message"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "Message",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Message",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:MigrateThread",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "MigrateThread",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "MigrateThread"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "MigrateThread",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Migrate Thread",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:NoStatus",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "NoStatus",
        "fct-source": "src/GHC-RTS-EventTypes.html#ThreadStopStatus",
        "fct-type": "function",
        "title": "NoStatus"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "NoStatus",
        "normalized": "",
        "package": "ghc-events",
        "partial": "No Status",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:OsProcessParentPid",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "OsProcessParentPid",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "OsProcessParentPid"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "OsProcessParentPid",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Os Process Parent Pid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:OsProcessPid",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "OsProcessPid",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "OsProcessPid"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "OsProcessPid",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Os Process Pid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:PerfCounter",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "PerfCounter",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "PerfCounter"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "PerfCounter",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Perf Counter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:PerfName",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "PerfName",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "PerfName"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "PerfName",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Perf Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:PerfTracepoint",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "PerfTracepoint",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "PerfTracepoint"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "PerfTracepoint",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Perf Tracepoint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:ProgramArgs",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "ProgramArgs",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "ProgramArgs"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "ProgramArgs",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Program Args",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:ProgramEnv",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "ProgramEnv",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "ProgramEnv"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "ProgramEnv",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Program Env",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:RequestParGC",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "RequestParGC",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "RequestParGC"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "RequestParGC",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Request Par GC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:RequestSeqGC",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "RequestSeqGC",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "RequestSeqGC"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "RequestSeqGC",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Request Seq GC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:RtsIdentifier",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "RtsIdentifier",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "RtsIdentifier"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "RtsIdentifier",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Rts Identifier",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:RunThread",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "RunThread",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "RunThread"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "RunThread",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Run Thread",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:Shutdown",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "Shutdown",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "Shutdown"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "Shutdown",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Shutdown",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:SparkCounters",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "SparkCounters",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "SparkCounters"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "SparkCounters",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Spark Counters",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:SparkCreate",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "SparkCreate",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "SparkCreate"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "SparkCreate",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Spark Create",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:SparkDud",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "SparkDud",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "SparkDud"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "SparkDud",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Spark Dud",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:SparkFizzle",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "SparkFizzle",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "SparkFizzle"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "SparkFizzle",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Spark Fizzle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:SparkGC",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "SparkGC",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "SparkGC"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "SparkGC",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Spark GC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:SparkOverflow",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "SparkOverflow",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "SparkOverflow"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "SparkOverflow",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Spark Overflow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:SparkRun",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "SparkRun",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "SparkRun"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "SparkRun",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Spark Run",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:SparkSteal",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "SparkSteal",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "SparkSteal"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "SparkSteal",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Spark Steal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:StackOverflow",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "StackOverflow",
        "fct-source": "src/GHC-RTS-EventTypes.html#ThreadStopStatus",
        "fct-type": "function",
        "title": "StackOverflow"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "StackOverflow",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Stack Overflow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:StartGC",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "StartGC",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "StartGC"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "StartGC",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Start GC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:Startup",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "Startup",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "Startup"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "Startup",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Startup",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:StopThread",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "StopThread",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "StopThread"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "StopThread",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Stop Thread",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:TaskCreate",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "TaskCreate",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "TaskCreate"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "TaskCreate",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Task Create",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:TaskDelete",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "TaskDelete",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "TaskDelete"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "TaskDelete",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Task Delete",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:TaskMigrate",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "TaskMigrate",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "TaskMigrate"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "TaskMigrate",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Task Migrate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:ThreadBlocked",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "ThreadBlocked",
        "fct-source": "src/GHC-RTS-EventTypes.html#ThreadStopStatus",
        "fct-type": "function",
        "title": "ThreadBlocked"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "ThreadBlocked",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Thread Blocked",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:ThreadFinished",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "ThreadFinished",
        "fct-source": "src/GHC-RTS-EventTypes.html#ThreadStopStatus",
        "fct-type": "function",
        "title": "ThreadFinished"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "ThreadFinished",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Thread Finished",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:ThreadLabel",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "ThreadLabel",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "ThreadLabel"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "ThreadLabel",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Thread Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:ThreadMigrating",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "ThreadMigrating",
        "fct-source": "src/GHC-RTS-EventTypes.html#ThreadStopStatus",
        "fct-type": "function",
        "title": "ThreadMigrating"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "ThreadMigrating",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Thread Migrating",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:ThreadRunnable",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "ThreadRunnable",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "ThreadRunnable"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "ThreadRunnable",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Thread Runnable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:ThreadYielding",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "ThreadYielding",
        "fct-source": "src/GHC-RTS-EventTypes.html#ThreadStopStatus",
        "fct-type": "function",
        "title": "ThreadYielding"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "ThreadYielding",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Thread Yielding",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:UnknownEvent",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "UnknownEvent",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "UnknownEvent"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "UnknownEvent",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Unknown Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:UserMarker",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "UserMarker",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "UserMarker"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "UserMarker",
        "normalized": "",
        "package": "ghc-events",
        "partial": "User Marker",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:UserMessage",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "UserMessage",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "UserMessage"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "UserMessage",
        "normalized": "",
        "package": "ghc-events",
        "partial": "User Message",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:WakeupThread",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "WakeupThread",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "WakeupThread"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "WakeupThread",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Wakeup Thread",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:WallClockTime",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "WallClockTime",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "WallClockTime"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "WallClockTime",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Wall Clock Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:allocAreaSize",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "!Word64",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "allocAreaSize"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "allocAreaSize",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Area Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:allocBytes",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "!Word64",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "allocBytes"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "allocBytes",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Bytes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:args",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "[String]",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "args"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "args",
        "normalized": "[String]",
        "package": "ghc-events",
        "partial": "",
        "signature": "[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:blockSize",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "!Word64",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "blockSize"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "blockSize",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:block_events",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "[Event]",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "block_events"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "block_events",
        "normalized": "[Event]",
        "package": "ghc-events",
        "partial": "",
        "signature": "[Event]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:buildEventTypeMap",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "[EventType] -\u003e IntMap EventType",
        "fct-source": "src/GHC-RTS-Events.html#buildEventTypeMap",
        "fct-type": "function",
        "title": "buildEventTypeMap"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "buildEventTypeMap",
        "normalized": "[EventType]-\u003eIntMap EventType",
        "package": "ghc-events",
        "partial": "Event Type Map",
        "signature": "[EventType]-\u003eIntMap EventType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:cap",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "!Int",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "cap"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "cap",
        "normalized": "",
        "package": "ghc-events",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:capset",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "!Capset",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "capset"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "capset",
        "normalized": "",
        "package": "ghc-events",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:capsetType",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "CapsetType",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "capsetType"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "capsetType",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:ce_cap",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "Maybe Int",
        "fct-source": "src/GHC-RTS-EventTypes.html#CapEvent",
        "fct-type": "function",
        "title": "ce_cap"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "ce_cap",
        "normalized": "",
        "package": "ghc-events",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:ce_event",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "Event",
        "fct-source": "src/GHC-RTS-EventTypes.html#CapEvent",
        "fct-type": "function",
        "title": "ce_event"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "ce_event",
        "normalized": "",
        "package": "ghc-events",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:copied",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "!Word64",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "copied"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "copied",
        "normalized": "",
        "package": "ghc-events",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:dat",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "Data",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventLog",
        "fct-type": "function",
        "title": "dat"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "dat",
        "normalized": "",
        "package": "ghc-events",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:desc",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "EventTypeDesc",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventType",
        "fct-type": "function",
        "title": "desc"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "desc",
        "normalized": "",
        "package": "ghc-events",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:dyn_id",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "!ParConjDynId",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "dyn_id"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "dyn_id",
        "normalized": "",
        "package": "ghc-events",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:end_time",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "Timestamp",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "end_time"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "end_time",
        "normalized": "",
        "package": "ghc-events",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:env",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "[String]",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "env"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "env",
        "normalized": "[String]",
        "package": "ghc-events",
        "partial": "",
        "signature": "[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:eventTypes",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "[EventType]",
        "fct-source": "src/GHC-RTS-EventTypes.html#Header",
        "fct-type": "function",
        "title": "eventTypes"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "eventTypes",
        "normalized": "[EventType]",
        "package": "ghc-events",
        "partial": "Types",
        "signature": "[EventType]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:events",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "[Event]",
        "fct-source": "src/GHC-RTS-EventTypes.html#Data",
        "fct-type": "function",
        "title": "events"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "events",
        "normalized": "[Event]",
        "package": "ghc-events",
        "partial": "",
        "signature": "[Event]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:frag",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "!Word64",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "frag"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "frag",
        "normalized": "",
        "package": "ghc-events",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:future_id",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "!FutureId",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "future_id"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "future_id",
        "normalized": "",
        "package": "ghc-events",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:gen",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "!Int",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "gen"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "gen",
        "normalized": "",
        "package": "ghc-events",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:gens",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "!Int",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "gens"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "gens",
        "normalized": "",
        "package": "ghc-events",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:groupEvents",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "[Event] -\u003e [(Maybe Int, [Event])]",
        "fct-source": "src/GHC-RTS-Events.html#groupEvents",
        "fct-type": "function",
        "title": "groupEvents"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "groupEvents",
        "normalized": "[Event]-\u003e[(Maybe Int,[Event])]",
        "package": "ghc-events",
        "partial": "Events",
        "signature": "[Event]-\u003e[(Maybe Int,[Event])]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:header",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "Header",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventLog",
        "fct-type": "function",
        "title": "header"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "header",
        "normalized": "",
        "package": "ghc-events",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:heapCapset",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "!Capset",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "heapCapset"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "heapCapset",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Capset",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:kernelThreadId",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "Word64",
        "fct-source": "src/GHC-RTS-EventTypes.html#KernelThreadId",
        "fct-type": "function",
        "title": "kernelThreadId"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "kernelThreadId",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Thread Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:liveBytes",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "!Word64",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "liveBytes"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "liveBytes",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Bytes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:markername",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "String",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "markername"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "markername",
        "normalized": "",
        "package": "ghc-events",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:maxHeapSize",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "!Word64",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "maxHeapSize"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "maxHeapSize",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Heap Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:mblockSize",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "!Word64",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "mblockSize"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "mblockSize",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:msg",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "String",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "msg"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "msg",
        "normalized": "",
        "package": "ghc-events",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:nEVENT_PERF_COUNTER",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "EventTypeNum",
        "fct-source": "src/GHC-RTS-Events.html#nEVENT_PERF_COUNTER",
        "fct-type": "function",
        "title": "nEVENT_PERF_COUNTER"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "nEVENT_PERF_COUNTER",
        "normalized": "",
        "package": "ghc-events",
        "partial": "EVENT PERF COUNTER",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:nEVENT_PERF_NAME",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "EventTypeNum",
        "fct-source": "src/GHC-RTS-Events.html#nEVENT_PERF_NAME",
        "fct-type": "function",
        "title": "nEVENT_PERF_NAME"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "nEVENT_PERF_NAME",
        "normalized": "",
        "package": "ghc-events",
        "partial": "EVENT PERF NAME",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:nEVENT_PERF_TRACEPOINT",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "EventTypeNum",
        "fct-source": "src/GHC-RTS-Events.html#nEVENT_PERF_TRACEPOINT",
        "fct-type": "function",
        "title": "nEVENT_PERF_TRACEPOINT"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "nEVENT_PERF_TRACEPOINT",
        "normalized": "",
        "package": "ghc-events",
        "partial": "EVENT PERF TRACEPOINT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:n_caps",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "Int",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "n_caps"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "n_caps",
        "normalized": "",
        "package": "ghc-events",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:name",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "String",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "name"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "name",
        "normalized": "",
        "package": "ghc-events",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:name_id",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "!StringId",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "name_id"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "name_id",
        "normalized": "",
        "package": "ghc-events",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:newCap",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "!Int",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "newCap"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "newCap",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Cap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:new_cap",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "!Int",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "new_cap"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "new_cap",
        "normalized": "",
        "package": "ghc-events",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:nsec",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "!Word32",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "nsec"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "nsec",
        "normalized": "",
        "package": "ghc-events",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:num",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "EventTypeNum",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventType",
        "fct-type": "function",
        "title": "num"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "num",
        "normalized": "",
        "package": "ghc-events",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:otherCap",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "!Int",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "otherCap"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "otherCap",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Cap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:parMaxCopied",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "!Word64",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "parMaxCopied"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "parMaxCopied",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Max Copied",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:parNThreads",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "!Int",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "parNThreads"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "parNThreads",
        "normalized": "",
        "package": "ghc-events",
        "partial": "NThreads",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:parTotCopied",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "!Word64",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "parTotCopied"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "parTotCopied",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Tot Copied",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:perfNum",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "!PerfEventTypeNum",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "perfNum"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "perfNum",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Num",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:period",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "!Word64",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "period"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "period",
        "normalized": "",
        "package": "ghc-events",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:pid",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "!PID",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "pid"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "pid",
        "normalized": "",
        "package": "ghc-events",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:ppEvent",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "IntMap EventType -\u003e CapEvent -\u003e String",
        "fct-source": "src/GHC-RTS-Events.html#ppEvent",
        "fct-type": "function",
        "title": "ppEvent"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "ppEvent",
        "normalized": "IntMap EventType-\u003eCapEvent-\u003eString",
        "package": "ghc-events",
        "partial": "Event",
        "signature": "IntMap EventType-\u003eCapEvent-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:ppEventLog",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "EventLog -\u003e String",
        "fct-source": "src/GHC-RTS-Events.html#ppEventLog",
        "fct-type": "function",
        "title": "ppEventLog"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "ppEventLog",
        "normalized": "EventLog-\u003eString",
        "package": "ghc-events",
        "partial": "Event Log",
        "signature": "EventLog-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:ppEventType",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "EventType -\u003e String",
        "fct-source": "src/GHC-RTS-Events.html#ppEventType",
        "fct-type": "function",
        "title": "ppEventType"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "ppEventType",
        "normalized": "EventType-\u003eString",
        "package": "ghc-events",
        "partial": "Event Type",
        "signature": "EventType-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:ppid",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "!PID",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "ppid"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "ppid",
        "normalized": "",
        "package": "ghc-events",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:readEventLogFromFile",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "FilePath -\u003e IO (Either String EventLog)",
        "fct-source": "src/GHC-RTS-Events.html#readEventLogFromFile",
        "fct-type": "function",
        "title": "readEventLogFromFile"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "readEventLogFromFile",
        "normalized": "FilePath-\u003eIO(Either String EventLog)",
        "package": "ghc-events",
        "partial": "Event Log From File",
        "signature": "FilePath-\u003eIO(Either String EventLog)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:ref",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "!EventTypeNum",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "ref"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "ref",
        "normalized": "",
        "package": "ghc-events",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:rtsident",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "String",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "rtsident"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "rtsident",
        "normalized": "",
        "package": "ghc-events",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:sId",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "!StringId",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "sId"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "sId",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:sec",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "!Word64",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "sec"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "sec",
        "normalized": "",
        "package": "ghc-events",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:showEventInfo",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "EventInfo -\u003e String",
        "fct-source": "src/GHC-RTS-Events.html#showEventInfo",
        "fct-type": "function",
        "title": "showEventInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "showEventInfo",
        "normalized": "EventInfo-\u003eString",
        "package": "ghc-events",
        "partial": "Event Info",
        "signature": "EventInfo-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:showThreadStopStatus",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "ThreadStopStatus -\u003e String",
        "fct-source": "src/GHC-RTS-Events.html#showThreadStopStatus",
        "fct-type": "function",
        "title": "showThreadStopStatus"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "showThreadStopStatus",
        "normalized": "ThreadStopStatus-\u003eString",
        "package": "ghc-events",
        "partial": "Thread Stop Status",
        "signature": "ThreadStopStatus-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:size",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e indicates variable size\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "Maybe EventTypeSize",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventType",
        "fct-type": "function",
        "title": "size"
      },
      "index": {
        "description": "Nothing indicates variable size",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "size",
        "normalized": "",
        "package": "ghc-events",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:sizeBytes",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "!Word64",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "sizeBytes"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "sizeBytes",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Bytes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:slop",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "!Word64",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "slop"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "slop",
        "normalized": "",
        "package": "ghc-events",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:sortEvents",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "[Event] -\u003e [CapEvent]",
        "fct-source": "src/GHC-RTS-Events.html#sortEvents",
        "fct-type": "function",
        "title": "sortEvents"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "sortEvents",
        "normalized": "[Event]-\u003e[CapEvent]",
        "package": "ghc-events",
        "partial": "Events",
        "signature": "[Event]-\u003e[CapEvent]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:sortGroups",
      "description": {
        "fct-descr": "\u003cp\u003eSort the raw event stream by time, annotating each event with the\n capability that generated it.\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "[(Maybe Int, [Event])] -\u003e [CapEvent]",
        "fct-source": "src/GHC-RTS-Events.html#sortGroups",
        "fct-type": "function",
        "title": "sortGroups"
      },
      "index": {
        "description": "Sort the raw event stream by time annotating each event with the capability that generated it",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "sortGroups",
        "normalized": "[(Maybe Int,[Event])]-\u003e[CapEvent]",
        "package": "ghc-events",
        "partial": "Groups",
        "signature": "[(Maybe Int,[Event])]-\u003e[CapEvent]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:sparkThread",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "!ThreadId",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "sparkThread"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "sparkThread",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Thread",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:spark_id",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "!SparkId",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "spark_id"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "spark_id",
        "normalized": "",
        "package": "ghc-events",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:sparksConverted",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "!Word64",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "sparksConverted"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "sparksConverted",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Converted",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:sparksCreated",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "!Word64",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "sparksCreated"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "sparksCreated",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Created",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:sparksDud",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "!Word64",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "sparksDud"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "sparksDud",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Dud",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:sparksFizzled",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "!Word64",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "sparksFizzled"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "sparksFizzled",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Fizzled",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:sparksGCd",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "!Word64",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "sparksGCd"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "sparksGCd",
        "normalized": "",
        "package": "ghc-events",
        "partial": "GCd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:sparksOverflowed",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "!Word64",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "sparksOverflowed"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "sparksOverflowed",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Overflowed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:sparksRemaining",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "!Word64",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "sparksRemaining"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "sparksRemaining",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Remaining",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:spec",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "EventInfo",
        "fct-source": "src/GHC-RTS-EventTypes.html#Event",
        "fct-type": "function",
        "title": "spec"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "spec",
        "normalized": "",
        "package": "ghc-events",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:static_id",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "!ParConjStaticId",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "static_id"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "static_id",
        "normalized": "",
        "package": "ghc-events",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:status",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "ThreadStopStatus",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "status"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "status",
        "normalized": "",
        "package": "ghc-events",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:str",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "String",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "str"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "str",
        "normalized": "",
        "package": "ghc-events",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:sz_kernel_tid",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "EventTypeSize",
        "fct-source": "src/GHC-RTS-EventTypes.html#sz_kernel_tid",
        "fct-type": "function",
        "title": "sz_kernel_tid"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "sz_kernel_tid",
        "normalized": "",
        "package": "ghc-events",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:sz_perf_num",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "EventTypeSize",
        "fct-source": "src/GHC-RTS-EventTypes.html#sz_perf_num",
        "fct-type": "function",
        "title": "sz_perf_num"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "sz_perf_num",
        "normalized": "",
        "package": "ghc-events",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:taskId",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "TaskId",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "taskId"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "taskId",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:thread",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "!ThreadId",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "thread"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "thread",
        "normalized": "",
        "package": "ghc-events",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:thread_id",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "!ThreadId",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "thread_id"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "thread_id",
        "normalized": "",
        "package": "ghc-events",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:threadlabel",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "String",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "threadlabel"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "threadlabel",
        "normalized": "",
        "package": "ghc-events",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:tid",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "!KernelThreadId",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "tid"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "tid",
        "normalized": "",
        "package": "ghc-events",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:time",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "!Timestamp",
        "fct-source": "src/GHC-RTS-EventTypes.html#Event",
        "fct-type": "function",
        "title": "time"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "time",
        "normalized": "",
        "package": "ghc-events",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:victimCap",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "!Int",
        "fct-source": "src/GHC-RTS-EventTypes.html#EventInfo",
        "fct-type": "function",
        "title": "victimCap"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "victimCap",
        "normalized": "",
        "package": "ghc-events",
        "partial": "Cap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-events/docs/GHC-RTS-Events.html#v:writeEventLogToFile",
      "description": {
        "fct-module": "GHC.RTS.Events",
        "fct-package": "ghc-events",
        "fct-signature": "FilePath -\u003e EventLog -\u003e IO ()",
        "fct-source": "src/GHC-RTS-Events.html#writeEventLogToFile",
        "fct-type": "function",
        "title": "writeEventLogToFile"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS Events",
        "module": "GHC.RTS.Events",
        "name": "writeEventLogToFile",
        "normalized": "FilePath-\u003eEventLog-\u003eIO()",
        "package": "ghc-events",
        "partial": "Event Log To File",
        "signature": "FilePath-\u003eEventLog-\u003eIO()"
      }
    }
  }
]