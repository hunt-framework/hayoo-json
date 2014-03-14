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
        "word": "cqrs"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule to import for the \u003ca\u003eCommand\u003c/a\u003e side of the application. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.CQRS.Command",
          "name": "Command",
          "package": "cqrs",
          "source": "src/Data-CQRS-Command.html",
          "type": "module"
        },
        "index": {
          "description": "Module to import for the Command side of the application",
          "hierarchy": "Data CQRS Command",
          "module": "Data.CQRS.Command",
          "name": "Command",
          "package": "cqrs",
          "partial": "Command",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cqrs/docs/Data-CQRS-Command.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType class for aggregates.\n\u003c/p\u003e",
          "module": "Data.CQRS.Command",
          "name": "Aggregate",
          "package": "cqrs",
          "type": "class"
        },
        "index": {
          "description": "Type class for aggregates",
          "hierarchy": "Data CQRS Command",
          "module": "Data.CQRS.Command",
          "name": "Aggregate",
          "package": "cqrs",
          "partial": "Aggregate",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/cqrs/docs/Data-CQRS-Command.html#t:Aggregate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAggregate root reference.\n\u003c/p\u003e",
          "module": "Data.CQRS.Command",
          "name": "AggregateRef",
          "package": "cqrs",
          "source": "src/Data-CQRS-Internal-AggregateRef.html#AggregateRef",
          "type": "data"
        },
        "index": {
          "description": "Aggregate root reference",
          "hierarchy": "Data CQRS Command",
          "module": "Data.CQRS.Command",
          "name": "AggregateRef",
          "package": "cqrs",
          "partial": "Aggregate Ref",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cqrs/docs/Data-CQRS-Command.html#t:AggregateRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvent stores are the backend used for reading and storing all the\n information about recorded events.\n\u003c/p\u003e",
          "module": "Data.CQRS.Command",
          "name": "EventStoreBackend",
          "package": "cqrs",
          "type": "class"
        },
        "index": {
          "description": "Event stores are the backend used for reading and storing all the information about recorded events",
          "hierarchy": "Data CQRS Command",
          "module": "Data.CQRS.Command",
          "name": "EventStoreBackend",
          "package": "cqrs",
          "partial": "Event Store Backend",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/cqrs/docs/Data-CQRS-Command.html#t:EventStoreBackend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType class for applying events to aggregates.\n\u003c/p\u003e",
          "module": "Data.CQRS.Command",
          "name": "Eventable",
          "package": "cqrs",
          "type": "class"
        },
        "index": {
          "description": "Type class for applying events to aggregates",
          "hierarchy": "Data CQRS Command",
          "module": "Data.CQRS.Command",
          "name": "Eventable",
          "package": "cqrs",
          "partial": "Eventable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/cqrs/docs/Data-CQRS-Command.html#t:Eventable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Globally Unique IDentifier.\n\u003c/p\u003e",
          "module": "Data.CQRS.Command",
          "name": "GUID",
          "package": "cqrs",
          "type": "data"
        },
        "index": {
          "description": "Globally Unique IDentifier",
          "hierarchy": "Data CQRS Command",
          "module": "Data.CQRS.Command",
          "name": "GUID",
          "package": "cqrs",
          "partial": "GUID",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cqrs/docs/Data-CQRS-Command.html#t:GUID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepository consisting of an event store and an event bus.\n\u003c/p\u003e",
          "module": "Data.CQRS.Command",
          "name": "Repository",
          "package": "cqrs",
          "source": "src/Data-CQRS-Internal-Repository.html#Repository",
          "type": "data"
        },
        "index": {
          "description": "Repository consisting of an event store and an event bus",
          "hierarchy": "Data CQRS Command",
          "module": "Data.CQRS.Command",
          "name": "Repository",
          "package": "cqrs",
          "partial": "Repository",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cqrs/docs/Data-CQRS-Command.html#t:Repository"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnitOfWork monad transformer.\n\u003c/p\u003e",
          "module": "Data.CQRS.Command",
          "name": "UnitOfWorkT",
          "package": "cqrs",
          "source": "src/Data-CQRS-Internal-UnitOfWork.html#UnitOfWorkT",
          "type": "data"
        },
        "index": {
          "description": "UnitOfWork monad transformer",
          "hierarchy": "Data CQRS Command",
          "module": "Data.CQRS.Command",
          "name": "UnitOfWorkT",
          "package": "cqrs",
          "partial": "Unit Of Work",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cqrs/docs/Data-CQRS-Command.html#t:UnitOfWorkT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply an event to the aggregate and return the updated aggregate.\n\u003c/p\u003e",
          "module": "Data.CQRS.Command",
          "name": "applyEvent",
          "package": "cqrs",
          "signature": "Maybe a -\u003e e -\u003e Maybe a",
          "type": "method"
        },
        "index": {
          "description": "Apply an event to the aggregate and return the updated aggregate",
          "hierarchy": "Data CQRS Command",
          "module": "Data.CQRS.Command",
          "name": "applyEvent",
          "normalized": "Maybe a-\u003eb-\u003eMaybe a",
          "package": "cqrs",
          "partial": "Event",
          "signature": "Maybe a-\u003ee-\u003eMaybe a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/cqrs/docs/Data-CQRS-Command.html#v:applyEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd aggregate root. The aggregate root will be created upon\n transaction commit.\n\u003c/p\u003e",
          "module": "Data.CQRS.Command",
          "name": "createAggregate",
          "package": "cqrs",
          "signature": "GUID -\u003e UnitOfWorkT e IO (AggregateRef a e)",
          "source": "src/Data-CQRS-Internal-UnitOfWork.html#createAggregate",
          "type": "function"
        },
        "index": {
          "description": "Add aggregate root The aggregate root will be created upon transaction commit",
          "hierarchy": "Data CQRS Command",
          "module": "Data.CQRS.Command",
          "name": "createAggregate",
          "normalized": "GUID-\u003eUnitOfWorkT a IO(AggregateRef b a)",
          "package": "cqrs",
          "partial": "Aggregate",
          "signature": "GUID-\u003eUnitOfWorkT e IO(AggregateRef a e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cqrs/docs/Data-CQRS-Command.html#v:createAggregate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate or load aggregate. The aggregate root will be created (if necessary)\n upon transaction commit.\n\u003c/p\u003e",
          "module": "Data.CQRS.Command",
          "name": "createOrLoadAggregate",
          "package": "cqrs",
          "signature": "GUID -\u003e UnitOfWorkT e IO (AggregateRef a e)",
          "source": "src/Data-CQRS-Internal-UnitOfWork.html#createOrLoadAggregate",
          "type": "function"
        },
        "index": {
          "description": "Create or load aggregate The aggregate root will be created if necessary upon transaction commit",
          "hierarchy": "Data CQRS Command",
          "module": "Data.CQRS.Command",
          "name": "createOrLoadAggregate",
          "normalized": "GUID-\u003eUnitOfWorkT a IO(AggregateRef b a)",
          "package": "cqrs",
          "partial": "Or Load Aggregate",
          "signature": "GUID-\u003eUnitOfWorkT e IO(AggregateRef a e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cqrs/docs/Data-CQRS-Command.html#v:createOrLoadAggregate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind aggregate root.\n\u003c/p\u003e",
          "module": "Data.CQRS.Command",
          "name": "findAggregate",
          "package": "cqrs",
          "signature": "GUID -\u003e UnitOfWorkT e IO (Maybe (AggregateRef a e, a))",
          "source": "src/Data-CQRS-Internal-UnitOfWork.html#findAggregate",
          "type": "function"
        },
        "index": {
          "description": "Find aggregate root",
          "hierarchy": "Data CQRS Command",
          "module": "Data.CQRS.Command",
          "name": "findAggregate",
          "normalized": "GUID-\u003eUnitOfWorkT a IO(Maybe(AggregateRef b a,b))",
          "package": "cqrs",
          "partial": "Aggregate",
          "signature": "GUID-\u003eUnitOfWorkT e IO(Maybe(AggregateRef a e,a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cqrs/docs/Data-CQRS-Command.html#v:findAggregate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad aggregate root. The aggregate root must exist.\n\u003c/p\u003e",
          "module": "Data.CQRS.Command",
          "name": "loadAggregate",
          "package": "cqrs",
          "signature": "GUID -\u003e UnitOfWorkT e IO (AggregateRef a e, a)",
          "source": "src/Data-CQRS-Internal-UnitOfWork.html#loadAggregate",
          "type": "function"
        },
        "index": {
          "description": "Load aggregate root The aggregate root must exist",
          "hierarchy": "Data CQRS Command",
          "module": "Data.CQRS.Command",
          "name": "loadAggregate",
          "normalized": "GUID-\u003eUnitOfWorkT a IO(AggregateRef b a,b)",
          "package": "cqrs",
          "partial": "Aggregate",
          "signature": "GUID-\u003eUnitOfWorkT e IO(AggregateRef a e,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cqrs/docs/Data-CQRS-Command.html#v:loadAggregate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new random GUID.\n\u003c/p\u003e",
          "module": "Data.CQRS.Command",
          "name": "newGUID",
          "package": "cqrs",
          "signature": "IO GUID",
          "type": "function"
        },
        "index": {
          "description": "Create new random GUID",
          "hierarchy": "Data CQRS Command",
          "module": "Data.CQRS.Command",
          "name": "newGUID",
          "package": "cqrs",
          "partial": "GUID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cqrs/docs/Data-CQRS-Command.html#v:newGUID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePublish event for an aggregate root.\n\u003c/p\u003e",
          "module": "Data.CQRS.Command",
          "name": "publishEvent",
          "package": "cqrs",
          "signature": "AggregateRef a e -\u003e e -\u003e UnitOfWorkT e m ()",
          "source": "src/Data-CQRS-Internal-UnitOfWork.html#publishEvent",
          "type": "function"
        },
        "index": {
          "description": "Publish event for an aggregate root",
          "hierarchy": "Data CQRS Command",
          "module": "Data.CQRS.Command",
          "name": "publishEvent",
          "normalized": "AggregateRef a b-\u003eb-\u003eUnitOfWorkT b c()",
          "package": "cqrs",
          "partial": "Event",
          "signature": "AggregateRef a e-\u003ee-\u003eUnitOfWorkT e m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cqrs/docs/Data-CQRS-Command.html#v:publishEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun transaction against an event store.\n\u003c/p\u003e",
          "module": "Data.CQRS.Command",
          "name": "runUnitOfWorkT",
          "package": "cqrs",
          "signature": "Repository e b -\u003e UnitOfWorkT e IO c -\u003e IO c",
          "source": "src/Data-CQRS-Internal-UnitOfWork.html#runUnitOfWorkT",
          "type": "function"
        },
        "index": {
          "description": "Run transaction against an event store",
          "hierarchy": "Data CQRS Command",
          "module": "Data.CQRS.Command",
          "name": "runUnitOfWorkT",
          "normalized": "Repository a b-\u003eUnitOfWorkT a IO c-\u003eIO c",
          "package": "cqrs",
          "partial": "Unit Of Work",
          "signature": "Repository e b-\u003eUnitOfWorkT e IO c-\u003eIO c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cqrs/docs/Data-CQRS-Command.html#v:runUnitOfWorkT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMemory-based event store backend. Used primarily\n for testing.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.CQRS.EventStore.Backend.Memory",
          "name": "Memory",
          "package": "cqrs",
          "source": "src/Data-CQRS-EventStore-Backend-Memory.html",
          "type": "module"
        },
        "index": {
          "description": "Memory-based event store backend Used primarily for testing",
          "hierarchy": "Data CQRS EventStore Backend Memory",
          "module": "Data.CQRS.EventStore.Backend.Memory",
          "name": "Memory",
          "package": "cqrs",
          "partial": "Memory",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cqrs/docs/Data-CQRS-EventStore-Backend-Memory.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMemory-based event store backend.\n\u003c/p\u003e",
          "module": "Data.CQRS.EventStore.Backend.Memory",
          "name": "MemoryEventStoreBackend",
          "package": "cqrs",
          "source": "src/Data-CQRS-EventStore-Backend-Memory.html#MemoryEventStoreBackend",
          "type": "data"
        },
        "index": {
          "description": "Memory-based event store backend",
          "hierarchy": "Data CQRS EventStore Backend Memory",
          "module": "Data.CQRS.EventStore.Backend.Memory",
          "name": "MemoryEventStoreBackend",
          "package": "cqrs",
          "partial": "Memory Event Store Backend",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cqrs/docs/Data-CQRS-EventStore-Backend-Memory.html#t:MemoryEventStoreBackend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePool of memory event store backends.\n\u003c/p\u003e",
          "module": "Data.CQRS.EventStore.Backend.Memory",
          "name": "createBackendPool",
          "package": "cqrs",
          "signature": "Int -\u003e IO (Pool MemoryEventStoreBackend)",
          "source": "src/Data-CQRS-EventStore-Backend-Memory.html#createBackendPool",
          "type": "function"
        },
        "index": {
          "description": "Pool of memory event store backends",
          "hierarchy": "Data CQRS EventStore Backend Memory",
          "module": "Data.CQRS.EventStore.Backend.Memory",
          "name": "createBackendPool",
          "normalized": "Int-\u003eIO(Pool MemoryEventStoreBackend)",
          "package": "cqrs",
          "partial": "Backend Pool",
          "signature": "Int-\u003eIO(Pool MemoryEventStoreBackend)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cqrs/docs/Data-CQRS-EventStore-Backend-Memory.html#v:createBackendPool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CQRS.GUID",
          "name": "GUID",
          "package": "cqrs",
          "source": "src/Data-CQRS-GUID.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data CQRS GUID",
          "module": "Data.CQRS.GUID",
          "name": "GUID",
          "package": "cqrs",
          "partial": "GUID",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cqrs/docs/Data-CQRS-GUID.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CQRS.Query",
          "name": "Query",
          "package": "cqrs",
          "source": "src/Data-CQRS-Query.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data CQRS Query",
          "module": "Data.CQRS.Query",
          "name": "Query",
          "package": "cqrs",
          "partial": "Query",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cqrs/docs/Data-CQRS-Query.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvent stores are the backend used for reading and storing all the\n information about recorded events.\n\u003c/p\u003e",
          "module": "Data.CQRS.Query",
          "name": "EventStoreBackend",
          "package": "cqrs",
          "type": "class"
        },
        "index": {
          "description": "Event stores are the backend used for reading and storing all the information about recorded events",
          "hierarchy": "Data CQRS Query",
          "module": "Data.CQRS.Query",
          "name": "EventStoreBackend",
          "package": "cqrs",
          "partial": "Event Store Backend",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/cqrs/docs/Data-CQRS-Query.html#t:EventStoreBackend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Globally Unique IDentifier.\n\u003c/p\u003e",
          "module": "Data.CQRS.Query",
          "name": "GUID",
          "package": "cqrs",
          "type": "data"
        },
        "index": {
          "description": "Globally Unique IDentifier",
          "hierarchy": "Data CQRS Query",
          "module": "Data.CQRS.Query",
          "name": "GUID",
          "package": "cqrs",
          "partial": "GUID",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cqrs/docs/Data-CQRS-Query.html#t:GUID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePersisted Event.\n\u003c/p\u003e",
          "module": "Data.CQRS.Query",
          "name": "PersistedEvent",
          "package": "cqrs",
          "type": "data"
        },
        "index": {
          "description": "Persisted Event",
          "hierarchy": "Data CQRS Query",
          "module": "Data.CQRS.Query",
          "name": "PersistedEvent",
          "package": "cqrs",
          "partial": "Persisted Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cqrs/docs/Data-CQRS-Query.html#t:PersistedEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepository consisting of an event store and an event bus.\n\u003c/p\u003e",
          "module": "Data.CQRS.Query",
          "name": "Repository",
          "package": "cqrs",
          "source": "src/Data-CQRS-Internal-Repository.html#Repository",
          "type": "data"
        },
        "index": {
          "description": "Repository consisting of an event store and an event bus",
          "hierarchy": "Data CQRS Query",
          "module": "Data.CQRS.Query",
          "name": "Repository",
          "package": "cqrs",
          "partial": "Repository",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cqrs/docs/Data-CQRS-Query.html#t:Repository"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CQRS.Query",
          "name": "PersistedEvent",
          "package": "cqrs",
          "signature": "PersistedEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CQRS Query",
          "module": "Data.CQRS.Query",
          "name": "PersistedEvent",
          "package": "cqrs",
          "partial": "Persisted Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cqrs/docs/Data-CQRS-Query.html#v:PersistedEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnumerate all events which satisfy criteria and stream\n all new events from repository. All events which arrive\n while enumerating are buffered until enumeration completes.\n\u003c/p\u003e",
          "module": "Data.CQRS.Query",
          "name": "enumerateAndStreamEvents",
          "package": "cqrs",
          "signature": "Repository e b -\u003e Source (ResourceT IO) [PersistedEvent e]",
          "source": "src/Data-CQRS-Internal-Repository.html#enumerateAndStreamEvents",
          "type": "function"
        },
        "index": {
          "description": "Enumerate all events which satisfy criteria and stream all new events from repository All events which arrive while enumerating are buffered until enumeration completes",
          "hierarchy": "Data CQRS Query",
          "module": "Data.CQRS.Query",
          "name": "enumerateAndStreamEvents",
          "normalized": "Repository a b-\u003eSource(ResourceT IO)[PersistedEvent a]",
          "package": "cqrs",
          "partial": "And Stream Events",
          "signature": "Repository e b-\u003eSource(ResourceT IO)[PersistedEvent e]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cqrs/docs/Data-CQRS-Query.html#v:enumerateAndStreamEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnumerate all events which satisfy certain criteria from event\n store associated with repository.\n\u003c/p\u003e",
          "module": "Data.CQRS.Query",
          "name": "enumerateEventStore",
          "package": "cqrs",
          "signature": "Repository e b -\u003e Source (ResourceT IO) [PersistedEvent e]",
          "source": "src/Data-CQRS-Internal-Repository.html#enumerateEventStore",
          "type": "function"
        },
        "index": {
          "description": "Enumerate all events which satisfy certain criteria from event store associated with repository",
          "hierarchy": "Data CQRS Query",
          "module": "Data.CQRS.Query",
          "name": "enumerateEventStore",
          "normalized": "Repository a b-\u003eSource(ResourceT IO)[PersistedEvent a]",
          "package": "cqrs",
          "partial": "Event Store",
          "signature": "Repository e b-\u003eSource(ResourceT IO)[PersistedEvent e]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cqrs/docs/Data-CQRS-Query.html#v:enumerateEventStore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGUID of the aggregate.\n\u003c/p\u003e",
          "module": "Data.CQRS.Query",
          "name": "peAggregateGUID",
          "package": "cqrs",
          "signature": "GUID",
          "type": "function"
        },
        "index": {
          "description": "GUID of the aggregate",
          "hierarchy": "Data CQRS Query",
          "module": "Data.CQRS.Query",
          "name": "peAggregateGUID",
          "package": "cqrs",
          "partial": "Aggregate GUID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cqrs/docs/Data-CQRS-Query.html#v:peAggregateGUID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvent.\n\u003c/p\u003e",
          "module": "Data.CQRS.Query",
          "name": "peEvent",
          "package": "cqrs",
          "signature": "e",
          "type": "function"
        },
        "index": {
          "description": "Event",
          "hierarchy": "Data CQRS Query",
          "module": "Data.CQRS.Query",
          "name": "peEvent",
          "package": "cqrs",
          "partial": "Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cqrs/docs/Data-CQRS-Query.html#v:peEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequence number within the aggregate.\n\u003c/p\u003e",
          "module": "Data.CQRS.Query",
          "name": "peSequenceNumber",
          "package": "cqrs",
          "signature": "Int",
          "type": "function"
        },
        "index": {
          "description": "Sequence number within the aggregate",
          "hierarchy": "Data CQRS Query",
          "module": "Data.CQRS.Query",
          "name": "peSequenceNumber",
          "package": "cqrs",
          "partial": "Sequence Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cqrs/docs/Data-CQRS-Query.html#v:peSequenceNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CQRS.Repository",
          "name": "Repository",
          "package": "cqrs",
          "source": "src/Data-CQRS-Repository.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data CQRS Repository",
          "module": "Data.CQRS.Repository",
          "name": "Repository",
          "package": "cqrs",
          "partial": "Repository",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cqrs/docs/Data-CQRS-Repository.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepository consisting of an event store and an event bus.\n\u003c/p\u003e",
          "module": "Data.CQRS.Repository",
          "name": "Repository",
          "package": "cqrs",
          "source": "src/Data-CQRS-Internal-Repository.html#Repository",
          "type": "data"
        },
        "index": {
          "description": "Repository consisting of an event store and an event bus",
          "hierarchy": "Data CQRS Repository",
          "module": "Data.CQRS.Repository",
          "name": "Repository",
          "package": "cqrs",
          "partial": "Repository",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cqrs/docs/Data-CQRS-Repository.html#t:Repository"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepository settings\n\u003c/p\u003e",
          "module": "Data.CQRS.Repository",
          "name": "Settings",
          "package": "cqrs",
          "source": "src/Data-CQRS-Internal-Repository.html#Settings",
          "type": "data"
        },
        "index": {
          "description": "Repository settings",
          "hierarchy": "Data CQRS Repository",
          "module": "Data.CQRS.Repository",
          "name": "Settings",
          "package": "cqrs",
          "partial": "Settings",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cqrs/docs/Data-CQRS-Repository.html#t:Settings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault repository settings.\n\u003c/p\u003e",
          "module": "Data.CQRS.Repository",
          "name": "defaultSettings",
          "package": "cqrs",
          "signature": "Settings",
          "source": "src/Data-CQRS-Internal-Repository.html#defaultSettings",
          "type": "function"
        },
        "index": {
          "description": "Default repository settings",
          "hierarchy": "Data CQRS Repository",
          "module": "Data.CQRS.Repository",
          "name": "defaultSettings",
          "package": "cqrs",
          "partial": "Settings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cqrs/docs/Data-CQRS-Repository.html#v:defaultSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a repository from a pool of event store backends.\n\u003c/p\u003e",
          "module": "Data.CQRS.Repository",
          "name": "newRepository",
          "package": "cqrs",
          "signature": "Settings -\u003e Pool b -\u003e IO (Repository e b)",
          "source": "src/Data-CQRS-Internal-Repository.html#newRepository",
          "type": "function"
        },
        "index": {
          "description": "Create repository from pool of event store backends",
          "hierarchy": "Data CQRS Repository",
          "module": "Data.CQRS.Repository",
          "name": "newRepository",
          "normalized": "Settings-\u003ePool a-\u003eIO(Repository b a)",
          "package": "cqrs",
          "partial": "Repository",
          "signature": "Settings-\u003ePool b-\u003eIO(Repository e b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cqrs/docs/Data-CQRS-Repository.html#v:newRepository"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CQRS.Repository",
          "name": "settingsSnapshotFrequency",
          "package": "cqrs",
          "signature": "Settings -\u003e Maybe Int",
          "source": "src/Data-CQRS-Internal-Repository.html#settingsSnapshotFrequency",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CQRS Repository",
          "module": "Data.CQRS.Repository",
          "name": "settingsSnapshotFrequency",
          "normalized": "Settings-\u003eMaybe Int",
          "package": "cqrs",
          "partial": "Snapshot Frequency",
          "signature": "Settings-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cqrs/docs/Data-CQRS-Repository.html#v:settingsSnapshotFrequency"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CQRS.Serializable",
          "name": "Serializable",
          "package": "cqrs",
          "source": "src/Data-CQRS-Serializable.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data CQRS Serializable",
          "module": "Data.CQRS.Serializable",
          "name": "Serializable",
          "package": "cqrs",
          "partial": "Serializable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cqrs/docs/Data-CQRS-Serializable.html#"
      }
    }
  ]
]