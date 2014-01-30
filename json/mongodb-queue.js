[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mongodb-queue/docs/Database-MongoDB-Queue.html#",
      "description": {
        "fct-module": "Database.MongoDB.Queue",
        "fct-package": "mongodb-queue",
        "fct-signature": "module",
        "fct-source": "src/Database-MongoDB-Queue.html",
        "fct-type": "module",
        "title": "Queue"
      },
      "index": {
        "description": "",
        "hierarchy": "Database MongoDB Queue",
        "module": "Database.MongoDB.Queue",
        "name": "Queue",
        "normalized": "",
        "package": "mongodb-queue",
        "partial": "Queue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mongodb-queue/docs/Database-MongoDB-Queue.html#t:EmitterOpts",
      "description": {
        "fct-module": "Database.MongoDB.Queue",
        "fct-package": "mongodb-queue",
        "fct-signature": "data",
        "fct-source": "src/Database-MongoDB-Queue.html#EmitterOpts",
        "fct-type": "data",
        "title": "EmitterOpts"
      },
      "index": {
        "description": "",
        "hierarchy": "Database MongoDB Queue",
        "module": "Database.MongoDB.Queue",
        "name": "EmitterOpts",
        "normalized": "",
        "package": "mongodb-queue",
        "partial": "Emitter Opts",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mongodb-queue/docs/Database-MongoDB-Queue.html#t:WorkerOpts",
      "description": {
        "fct-module": "Database.MongoDB.Queue",
        "fct-package": "mongodb-queue",
        "fct-signature": "data",
        "fct-source": "src/Database-MongoDB-Queue.html#WorkerOpts",
        "fct-type": "data",
        "title": "WorkerOpts"
      },
      "index": {
        "description": "",
        "hierarchy": "Database MongoDB Queue",
        "module": "Database.MongoDB.Queue",
        "name": "WorkerOpts",
        "normalized": "",
        "package": "mongodb-queue",
        "partial": "Worker Opts",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mongodb-queue/docs/Database-MongoDB-Queue.html#v:EmitterOpts",
      "description": {
        "fct-module": "Database.MongoDB.Queue",
        "fct-package": "mongodb-queue",
        "fct-signature": "EmitterOpts",
        "fct-source": "src/Database-MongoDB-Queue.html#EmitterOpts",
        "fct-type": "function",
        "title": "EmitterOpts"
      },
      "index": {
        "description": "",
        "hierarchy": "Database MongoDB Queue",
        "module": "Database.MongoDB.Queue",
        "name": "EmitterOpts",
        "normalized": "",
        "package": "mongodb-queue",
        "partial": "Emitter Opts",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mongodb-queue/docs/Database-MongoDB-Queue.html#v:WorkerOpts",
      "description": {
        "fct-module": "Database.MongoDB.Queue",
        "fct-package": "mongodb-queue",
        "fct-signature": "WorkerOpts",
        "fct-source": "src/Database-MongoDB-Queue.html#WorkerOpts",
        "fct-type": "function",
        "title": "WorkerOpts"
      },
      "index": {
        "description": "",
        "hierarchy": "Database MongoDB Queue",
        "module": "Database.MongoDB.Queue",
        "name": "WorkerOpts",
        "normalized": "",
        "package": "mongodb-queue",
        "partial": "Worker Opts",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mongodb-queue/docs/Database-MongoDB-Queue.html#v:createEmitter",
      "description": {
        "fct-descr": "\u003cp\u003ecreate a QueueEmitter\n\u003c/p\u003e",
        "fct-module": "Database.MongoDB.Queue",
        "fct-package": "mongodb-queue",
        "fct-signature": "Action m QueueEmitter",
        "fct-source": "src/Database-MongoDB-Queue.html#createEmitter",
        "fct-type": "function",
        "title": "createEmitter"
      },
      "index": {
        "description": "create QueueEmitter",
        "hierarchy": "Database MongoDB Queue",
        "module": "Database.MongoDB.Queue",
        "name": "createEmitter",
        "normalized": "",
        "package": "mongodb-queue",
        "partial": "Emitter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mongodb-queue/docs/Database-MongoDB-Queue.html#v:createPollBroker",
      "description": {
        "fct-descr": "\u003cp\u003esame as createTailBroker, but uses a polling technique instead of tailable cursors\n Use default settings and poll with a 10 ms delay\n\u003c/p\u003e",
        "fct-module": "Database.MongoDB.Queue",
        "fct-package": "mongodb-queue",
        "fct-signature": "Action m PollBroker",
        "fct-source": "src/Database-MongoDB-Queue.html#createPollBroker",
        "fct-type": "function",
        "title": "createPollBroker"
      },
      "index": {
        "description": "same as createTailBroker but uses polling technique instead of tailable cursors Use default settings and poll with ms delay",
        "hierarchy": "Database MongoDB Queue",
        "module": "Database.MongoDB.Queue",
        "name": "createPollBroker",
        "normalized": "",
        "package": "mongodb-queue",
        "partial": "Poll Broker",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mongodb-queue/docs/Database-MongoDB-Queue.html#v:createTailBroker",
      "description": {
        "fct-descr": "\u003cp\u003ecreates a TailBroker\n create a single TailBroker per process (per queue collection)\n call nextFromQueueTail with the TailBroker to get the next message\n\u003c/p\u003e\u003cp\u003eTailBroker is designed to have 1 instance per process (and 1 process per machine)\n To handle multiple messages at once immediately hand off messages from nextFromQueueTail to worker threads (this library does not help you create worker threads)\n\u003c/p\u003e",
        "fct-module": "Database.MongoDB.Queue",
        "fct-package": "mongodb-queue",
        "fct-signature": "Action m TailBroker",
        "fct-source": "src/Database-MongoDB-Queue.html#createTailBroker",
        "fct-type": "function",
        "title": "createTailBroker"
      },
      "index": {
        "description": "creates TailBroker create single TailBroker per process per queue collection call nextFromQueueTail with the TailBroker to get the next message TailBroker is designed to have instance per process and process per machine To handle multiple messages at once immediately hand off messages from nextFromQueueTail to worker threads this library does not help you create worker threads",
        "hierarchy": "Database MongoDB Queue",
        "module": "Database.MongoDB.Queue",
        "name": "createTailBroker",
        "normalized": "",
        "package": "mongodb-queue",
        "partial": "Tail Broker",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mongodb-queue/docs/Database-MongoDB-Queue.html#v:emit",
      "description": {
        "fct-descr": "\u003cp\u003eemit a message for a worker\n\u003c/p\u003e",
        "fct-module": "Database.MongoDB.Queue",
        "fct-package": "mongodb-queue",
        "fct-signature": "QueueEmitter -\u003e Document -\u003e Action m ()",
        "fct-source": "src/Database-MongoDB-Queue.html#emit",
        "fct-type": "function",
        "title": "emit"
      },
      "index": {
        "description": "emit message for worker",
        "hierarchy": "Database MongoDB Queue",
        "module": "Database.MongoDB.Queue",
        "name": "emit",
        "normalized": "QueueEmitter-\u003eDocument-\u003eAction a()",
        "package": "mongodb-queue",
        "partial": "",
        "signature": "QueueEmitter-\u003eDocument-\u003eAction m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mongodb-queue/docs/Database-MongoDB-Queue.html#v:emitterCollection",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.MongoDB.Queue",
        "fct-package": "mongodb-queue",
        "fct-signature": "Collection",
        "fct-source": "src/Database-MongoDB-Queue.html#EmitterOpts",
        "fct-type": "function",
        "title": "emitterCollection"
      },
      "index": {
        "description": "",
        "hierarchy": "Database MongoDB Queue",
        "module": "Database.MongoDB.Queue",
        "name": "emitterCollection",
        "normalized": "",
        "package": "mongodb-queue",
        "partial": "Collection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mongodb-queue/docs/Database-MongoDB-Queue.html#v:emitterMaxByteSize",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.MongoDB.Queue",
        "fct-package": "mongodb-queue",
        "fct-signature": "Int",
        "fct-source": "src/Database-MongoDB-Queue.html#EmitterOpts",
        "fct-type": "function",
        "title": "emitterMaxByteSize"
      },
      "index": {
        "description": "",
        "hierarchy": "Database MongoDB Queue",
        "module": "Database.MongoDB.Queue",
        "name": "emitterMaxByteSize",
        "normalized": "",
        "package": "mongodb-queue",
        "partial": "Max Byte Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mongodb-queue/docs/Database-MongoDB-Queue.html#v:emitterVersion",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.MongoDB.Queue",
        "fct-package": "mongodb-queue",
        "fct-signature": "Int",
        "fct-source": "src/Database-MongoDB-Queue.html#EmitterOpts",
        "fct-type": "function",
        "title": "emitterVersion"
      },
      "index": {
        "description": "",
        "hierarchy": "Database MongoDB Queue",
        "module": "Database.MongoDB.Queue",
        "name": "emitterVersion",
        "normalized": "",
        "package": "mongodb-queue",
        "partial": "Version",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mongodb-queue/docs/Database-MongoDB-Queue.html#v:mkEmitter",
      "description": {
        "fct-descr": "\u003cp\u003ecreate an emitter with non-default configuration\n\u003c/p\u003e",
        "fct-module": "Database.MongoDB.Queue",
        "fct-package": "mongodb-queue",
        "fct-signature": "EmitterOpts -\u003e Action m QueueEmitter",
        "fct-source": "src/Database-MongoDB-Queue.html#mkEmitter",
        "fct-type": "function",
        "title": "mkEmitter"
      },
      "index": {
        "description": "create an emitter with non-default configuration",
        "hierarchy": "Database MongoDB Queue",
        "module": "Database.MongoDB.Queue",
        "name": "mkEmitter",
        "normalized": "EmitterOpts-\u003eAction a QueueEmitter",
        "package": "mongodb-queue",
        "partial": "Emitter",
        "signature": "EmitterOpts-\u003eAction m QueueEmitter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mongodb-queue/docs/Database-MongoDB-Queue.html#v:mkPollBroker",
      "description": {
        "fct-descr": "\u003cp\u003ecreate an worker with non-default configuration\n\u003c/p\u003e",
        "fct-module": "Database.MongoDB.Queue",
        "fct-package": "mongodb-queue",
        "fct-signature": "WorkerOpts-\u003e Int-\u003e Action m PollBroker",
        "fct-type": "function",
        "title": "mkPollBroker"
      },
      "index": {
        "description": "create an worker with non-default configuration",
        "hierarchy": "Database MongoDB Queue",
        "module": "Database.MongoDB.Queue",
        "name": "mkPollBroker",
        "normalized": "WorkerOpts-\u003eInt-\u003eAction a PollBroker",
        "package": "mongodb-queue",
        "partial": "Poll Broker",
        "signature": "WorkerOpts-\u003eInt-\u003eAction m PollBroker"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mongodb-queue/docs/Database-MongoDB-Queue.html#v:mkTailBroker",
      "description": {
        "fct-descr": "\u003cp\u003ecreate a tailable cursor worker with non-default configuration\n\u003c/p\u003e",
        "fct-module": "Database.MongoDB.Queue",
        "fct-package": "mongodb-queue",
        "fct-signature": "WorkerOpts -\u003e Action m TailBroker",
        "fct-source": "src/Database-MongoDB-Queue.html#mkTailBroker",
        "fct-type": "function",
        "title": "mkTailBroker"
      },
      "index": {
        "description": "create tailable cursor worker with non-default configuration",
        "hierarchy": "Database MongoDB Queue",
        "module": "Database.MongoDB.Queue",
        "name": "mkTailBroker",
        "normalized": "WorkerOpts-\u003eAction a TailBroker",
        "package": "mongodb-queue",
        "partial": "Tail Broker",
        "signature": "WorkerOpts-\u003eAction m TailBroker"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mongodb-queue/docs/Database-MongoDB-Queue.html#v:nextFromQueuePoll",
      "description": {
        "fct-descr": "\u003cp\u003eGet the next message from the queue.\n First marks the message as handled.\n\u003c/p\u003e\u003cp\u003eUses polling rather than a tailable cursor\n\u003c/p\u003e\u003cp\u003eDo not call this from multiple threads against the same PollBroker\n\u003c/p\u003e",
        "fct-module": "Database.MongoDB.Queue",
        "fct-package": "mongodb-queue",
        "fct-signature": "PollBroker -\u003e Action m Document",
        "fct-source": "src/Database-MongoDB-Queue.html#nextFromQueuePoll",
        "fct-type": "function",
        "title": "nextFromQueuePoll"
      },
      "index": {
        "description": "Get the next message from the queue First marks the message as handled Uses polling rather than tailable cursor Do not call this from multiple threads against the same PollBroker",
        "hierarchy": "Database MongoDB Queue",
        "module": "Database.MongoDB.Queue",
        "name": "nextFromQueuePoll",
        "normalized": "PollBroker-\u003eAction a Document",
        "package": "mongodb-queue",
        "partial": "From Queue Poll",
        "signature": "PollBroker-\u003eAction m Document"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mongodb-queue/docs/Database-MongoDB-Queue.html#v:nextFromQueueTail",
      "description": {
        "fct-descr": "\u003cp\u003eGet the next message from the queue.\n First marks the message as handled.\n\u003c/p\u003e\u003cp\u003eUses a tailable cursor rather than polling\n\u003c/p\u003e\u003cp\u003eDo not call this from multiple threads against the same TailBroker\n\u003c/p\u003e",
        "fct-module": "Database.MongoDB.Queue",
        "fct-package": "mongodb-queue",
        "fct-signature": "TailBroker -\u003e Action m Document",
        "fct-source": "src/Database-MongoDB-Queue.html#nextFromQueueTail",
        "fct-type": "function",
        "title": "nextFromQueueTail"
      },
      "index": {
        "description": "Get the next message from the queue First marks the message as handled Uses tailable cursor rather than polling Do not call this from multiple threads against the same TailBroker",
        "hierarchy": "Database MongoDB Queue",
        "module": "Database.MongoDB.Queue",
        "name": "nextFromQueueTail",
        "normalized": "TailBroker-\u003eAction a Document",
        "package": "mongodb-queue",
        "partial": "From Queue Tail",
        "signature": "TailBroker-\u003eAction m Document"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mongodb-queue/docs/Database-MongoDB-Queue.html#v:workerCollection",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.MongoDB.Queue",
        "fct-package": "mongodb-queue",
        "fct-signature": "Collection",
        "fct-source": "src/Database-MongoDB-Queue.html#WorkerOpts",
        "fct-type": "function",
        "title": "workerCollection"
      },
      "index": {
        "description": "",
        "hierarchy": "Database MongoDB Queue",
        "module": "Database.MongoDB.Queue",
        "name": "workerCollection",
        "normalized": "",
        "package": "mongodb-queue",
        "partial": "Collection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mongodb-queue/docs/Database-MongoDB-Queue.html#v:workerMaxByteSize",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.MongoDB.Queue",
        "fct-package": "mongodb-queue",
        "fct-signature": "Int",
        "fct-source": "src/Database-MongoDB-Queue.html#WorkerOpts",
        "fct-type": "function",
        "title": "workerMaxByteSize"
      },
      "index": {
        "description": "",
        "hierarchy": "Database MongoDB Queue",
        "module": "Database.MongoDB.Queue",
        "name": "workerMaxByteSize",
        "normalized": "",
        "package": "mongodb-queue",
        "partial": "Max Byte Size",
        "signature": ""
      }
    }
  }
]