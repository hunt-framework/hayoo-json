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
        "word": "mongodb-queue"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MongoDB.Queue",
          "name": "Queue",
          "package": "mongodb-queue",
          "source": "src/Database-MongoDB-Queue.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Database MongoDB Queue",
          "module": "Database.MongoDB.Queue",
          "name": "Queue",
          "package": "mongodb-queue",
          "partial": "Queue",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/mongodb-queue/docs/Database-MongoDB-Queue.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MongoDB.Queue",
          "name": "EmitterOpts",
          "package": "mongodb-queue",
          "source": "src/Database-MongoDB-Queue.html#EmitterOpts",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database MongoDB Queue",
          "module": "Database.MongoDB.Queue",
          "name": "EmitterOpts",
          "package": "mongodb-queue",
          "partial": "Emitter Opts",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/mongodb-queue/docs/Database-MongoDB-Queue.html#t:EmitterOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MongoDB.Queue",
          "name": "WorkerOpts",
          "package": "mongodb-queue",
          "source": "src/Database-MongoDB-Queue.html#WorkerOpts",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database MongoDB Queue",
          "module": "Database.MongoDB.Queue",
          "name": "WorkerOpts",
          "package": "mongodb-queue",
          "partial": "Worker Opts",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/mongodb-queue/docs/Database-MongoDB-Queue.html#t:WorkerOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MongoDB.Queue",
          "name": "EmitterOpts",
          "package": "mongodb-queue",
          "signature": "EmitterOpts",
          "source": "src/Database-MongoDB-Queue.html#EmitterOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MongoDB Queue",
          "module": "Database.MongoDB.Queue",
          "name": "EmitterOpts",
          "package": "mongodb-queue",
          "partial": "Emitter Opts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mongodb-queue/docs/Database-MongoDB-Queue.html#v:EmitterOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MongoDB.Queue",
          "name": "WorkerOpts",
          "package": "mongodb-queue",
          "signature": "WorkerOpts",
          "source": "src/Database-MongoDB-Queue.html#WorkerOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MongoDB Queue",
          "module": "Database.MongoDB.Queue",
          "name": "WorkerOpts",
          "package": "mongodb-queue",
          "partial": "Worker Opts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mongodb-queue/docs/Database-MongoDB-Queue.html#v:WorkerOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreate a QueueEmitter\n\u003c/p\u003e",
          "module": "Database.MongoDB.Queue",
          "name": "createEmitter",
          "package": "mongodb-queue",
          "signature": "Action m QueueEmitter",
          "source": "src/Database-MongoDB-Queue.html#createEmitter",
          "type": "function"
        },
        "index": {
          "description": "create QueueEmitter",
          "hierarchy": "Database MongoDB Queue",
          "module": "Database.MongoDB.Queue",
          "name": "createEmitter",
          "package": "mongodb-queue",
          "partial": "Emitter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mongodb-queue/docs/Database-MongoDB-Queue.html#v:createEmitter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esame as createTailBroker, but uses a polling technique instead of tailable cursors\n Use default settings and poll with a 10 ms delay\n\u003c/p\u003e",
          "module": "Database.MongoDB.Queue",
          "name": "createPollBroker",
          "package": "mongodb-queue",
          "signature": "Action m PollBroker",
          "source": "src/Database-MongoDB-Queue.html#createPollBroker",
          "type": "function"
        },
        "index": {
          "description": "same as createTailBroker but uses polling technique instead of tailable cursors Use default settings and poll with ms delay",
          "hierarchy": "Database MongoDB Queue",
          "module": "Database.MongoDB.Queue",
          "name": "createPollBroker",
          "package": "mongodb-queue",
          "partial": "Poll Broker",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mongodb-queue/docs/Database-MongoDB-Queue.html#v:createPollBroker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreates a TailBroker\n create a single TailBroker per process (per queue collection)\n call nextFromQueueTail with the TailBroker to get the next message\n\u003c/p\u003e\u003cp\u003eTailBroker is designed to have 1 instance per process (and 1 process per machine)\n To handle multiple messages at once immediately hand off messages from nextFromQueueTail to worker threads (this library does not help you create worker threads)\n\u003c/p\u003e",
          "module": "Database.MongoDB.Queue",
          "name": "createTailBroker",
          "package": "mongodb-queue",
          "signature": "Action m TailBroker",
          "source": "src/Database-MongoDB-Queue.html#createTailBroker",
          "type": "function"
        },
        "index": {
          "description": "creates TailBroker create single TailBroker per process per queue collection call nextFromQueueTail with the TailBroker to get the next message TailBroker is designed to have instance per process and process per machine To handle multiple messages at once immediately hand off messages from nextFromQueueTail to worker threads this library does not help you create worker threads",
          "hierarchy": "Database MongoDB Queue",
          "module": "Database.MongoDB.Queue",
          "name": "createTailBroker",
          "package": "mongodb-queue",
          "partial": "Tail Broker",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mongodb-queue/docs/Database-MongoDB-Queue.html#v:createTailBroker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eemit a message for a worker\n\u003c/p\u003e",
          "module": "Database.MongoDB.Queue",
          "name": "emit",
          "package": "mongodb-queue",
          "signature": "QueueEmitter -\u003e Document -\u003e Action m ()",
          "source": "src/Database-MongoDB-Queue.html#emit",
          "type": "function"
        },
        "index": {
          "description": "emit message for worker",
          "hierarchy": "Database MongoDB Queue",
          "module": "Database.MongoDB.Queue",
          "name": "emit",
          "normalized": "QueueEmitter-\u003eDocument-\u003eAction a()",
          "package": "mongodb-queue",
          "signature": "QueueEmitter-\u003eDocument-\u003eAction m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mongodb-queue/docs/Database-MongoDB-Queue.html#v:emit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MongoDB.Queue",
          "name": "emitterCollection",
          "package": "mongodb-queue",
          "signature": "Collection",
          "source": "src/Database-MongoDB-Queue.html#EmitterOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MongoDB Queue",
          "module": "Database.MongoDB.Queue",
          "name": "emitterCollection",
          "package": "mongodb-queue",
          "partial": "Collection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mongodb-queue/docs/Database-MongoDB-Queue.html#v:emitterCollection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MongoDB.Queue",
          "name": "emitterMaxByteSize",
          "package": "mongodb-queue",
          "signature": "Int",
          "source": "src/Database-MongoDB-Queue.html#EmitterOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MongoDB Queue",
          "module": "Database.MongoDB.Queue",
          "name": "emitterMaxByteSize",
          "package": "mongodb-queue",
          "partial": "Max Byte Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mongodb-queue/docs/Database-MongoDB-Queue.html#v:emitterMaxByteSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MongoDB.Queue",
          "name": "emitterVersion",
          "package": "mongodb-queue",
          "signature": "Int",
          "source": "src/Database-MongoDB-Queue.html#EmitterOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MongoDB Queue",
          "module": "Database.MongoDB.Queue",
          "name": "emitterVersion",
          "package": "mongodb-queue",
          "partial": "Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mongodb-queue/docs/Database-MongoDB-Queue.html#v:emitterVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreate an emitter with non-default configuration\n\u003c/p\u003e",
          "module": "Database.MongoDB.Queue",
          "name": "mkEmitter",
          "package": "mongodb-queue",
          "signature": "EmitterOpts -\u003e Action m QueueEmitter",
          "source": "src/Database-MongoDB-Queue.html#mkEmitter",
          "type": "function"
        },
        "index": {
          "description": "create an emitter with non-default configuration",
          "hierarchy": "Database MongoDB Queue",
          "module": "Database.MongoDB.Queue",
          "name": "mkEmitter",
          "normalized": "EmitterOpts-\u003eAction a QueueEmitter",
          "package": "mongodb-queue",
          "partial": "Emitter",
          "signature": "EmitterOpts-\u003eAction m QueueEmitter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mongodb-queue/docs/Database-MongoDB-Queue.html#v:mkEmitter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreate an worker with non-default configuration\n\u003c/p\u003e",
          "module": "Database.MongoDB.Queue",
          "name": "mkPollBroker",
          "package": "mongodb-queue",
          "signature": "WorkerOpts-\u003e Int-\u003e Action m PollBroker",
          "type": "function"
        },
        "index": {
          "description": "create an worker with non-default configuration",
          "hierarchy": "Database MongoDB Queue",
          "module": "Database.MongoDB.Queue",
          "name": "mkPollBroker",
          "normalized": "WorkerOpts-\u003eInt-\u003eAction a PollBroker",
          "package": "mongodb-queue",
          "partial": "Poll Broker",
          "signature": "WorkerOpts-\u003eInt-\u003eAction m PollBroker",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mongodb-queue/docs/Database-MongoDB-Queue.html#v:mkPollBroker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreate a tailable cursor worker with non-default configuration\n\u003c/p\u003e",
          "module": "Database.MongoDB.Queue",
          "name": "mkTailBroker",
          "package": "mongodb-queue",
          "signature": "WorkerOpts -\u003e Action m TailBroker",
          "source": "src/Database-MongoDB-Queue.html#mkTailBroker",
          "type": "function"
        },
        "index": {
          "description": "create tailable cursor worker with non-default configuration",
          "hierarchy": "Database MongoDB Queue",
          "module": "Database.MongoDB.Queue",
          "name": "mkTailBroker",
          "normalized": "WorkerOpts-\u003eAction a TailBroker",
          "package": "mongodb-queue",
          "partial": "Tail Broker",
          "signature": "WorkerOpts-\u003eAction m TailBroker",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mongodb-queue/docs/Database-MongoDB-Queue.html#v:mkTailBroker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the next message from the queue.\n First marks the message as handled.\n\u003c/p\u003e\u003cp\u003eUses polling rather than a tailable cursor\n\u003c/p\u003e\u003cp\u003eDo not call this from multiple threads against the same PollBroker\n\u003c/p\u003e",
          "module": "Database.MongoDB.Queue",
          "name": "nextFromQueuePoll",
          "package": "mongodb-queue",
          "signature": "PollBroker -\u003e Action m Document",
          "source": "src/Database-MongoDB-Queue.html#nextFromQueuePoll",
          "type": "function"
        },
        "index": {
          "description": "Get the next message from the queue First marks the message as handled Uses polling rather than tailable cursor Do not call this from multiple threads against the same PollBroker",
          "hierarchy": "Database MongoDB Queue",
          "module": "Database.MongoDB.Queue",
          "name": "nextFromQueuePoll",
          "normalized": "PollBroker-\u003eAction a Document",
          "package": "mongodb-queue",
          "partial": "From Queue Poll",
          "signature": "PollBroker-\u003eAction m Document",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mongodb-queue/docs/Database-MongoDB-Queue.html#v:nextFromQueuePoll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the next message from the queue.\n First marks the message as handled.\n\u003c/p\u003e\u003cp\u003eUses a tailable cursor rather than polling\n\u003c/p\u003e\u003cp\u003eDo not call this from multiple threads against the same TailBroker\n\u003c/p\u003e",
          "module": "Database.MongoDB.Queue",
          "name": "nextFromQueueTail",
          "package": "mongodb-queue",
          "signature": "TailBroker -\u003e Action m Document",
          "source": "src/Database-MongoDB-Queue.html#nextFromQueueTail",
          "type": "function"
        },
        "index": {
          "description": "Get the next message from the queue First marks the message as handled Uses tailable cursor rather than polling Do not call this from multiple threads against the same TailBroker",
          "hierarchy": "Database MongoDB Queue",
          "module": "Database.MongoDB.Queue",
          "name": "nextFromQueueTail",
          "normalized": "TailBroker-\u003eAction a Document",
          "package": "mongodb-queue",
          "partial": "From Queue Tail",
          "signature": "TailBroker-\u003eAction m Document",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mongodb-queue/docs/Database-MongoDB-Queue.html#v:nextFromQueueTail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MongoDB.Queue",
          "name": "workerCollection",
          "package": "mongodb-queue",
          "signature": "Collection",
          "source": "src/Database-MongoDB-Queue.html#WorkerOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MongoDB Queue",
          "module": "Database.MongoDB.Queue",
          "name": "workerCollection",
          "package": "mongodb-queue",
          "partial": "Collection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mongodb-queue/docs/Database-MongoDB-Queue.html#v:workerCollection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MongoDB.Queue",
          "name": "workerMaxByteSize",
          "package": "mongodb-queue",
          "signature": "Int",
          "source": "src/Database-MongoDB-Queue.html#WorkerOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MongoDB Queue",
          "module": "Database.MongoDB.Queue",
          "name": "workerMaxByteSize",
          "package": "mongodb-queue",
          "partial": "Max Byte Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mongodb-queue/docs/Database-MongoDB-Queue.html#v:workerMaxByteSize"
      }
    }
  ]
]