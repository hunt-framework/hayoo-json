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
        "word": "cqrs-types"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAggregate type class.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.CQRS.Aggregate",
          "name": "Aggregate",
          "package": "cqrs-types",
          "source": "src/Data-CQRS-Aggregate.html",
          "type": "module"
        },
        "index": {
          "description": "Aggregate type class",
          "hierarchy": "Data CQRS Aggregate",
          "module": "Data.CQRS.Aggregate",
          "name": "Aggregate",
          "package": "cqrs-types",
          "partial": "Aggregate",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cqrs-types/docs/Data-CQRS-Aggregate.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType class for aggregates.\n\u003c/p\u003e",
          "module": "Data.CQRS.Aggregate",
          "name": "Aggregate",
          "package": "cqrs-types",
          "source": "src/Data-CQRS-Aggregate.html#Aggregate",
          "type": "class"
        },
        "index": {
          "description": "Type class for aggregates",
          "hierarchy": "Data CQRS Aggregate",
          "module": "Data.CQRS.Aggregate",
          "name": "Aggregate",
          "package": "cqrs-types",
          "partial": "Aggregate",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/cqrs-types/docs/Data-CQRS-Aggregate.html#t:Aggregate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEvent store backend. You only need to import this\n module if you're planning on implementing a custom\n event store backend.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.CQRS.EventStore.Backend",
          "name": "Backend",
          "package": "cqrs-types",
          "source": "src/Data-CQRS-EventStore-Backend.html",
          "type": "module"
        },
        "index": {
          "description": "Event store backend You only need to import this module if you re planning on implementing custom event store backend",
          "hierarchy": "Data CQRS EventStore Backend",
          "module": "Data.CQRS.EventStore.Backend",
          "name": "Backend",
          "package": "cqrs-types",
          "partial": "Backend",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cqrs-types/docs/Data-CQRS-EventStore-Backend.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvent stores are the backend used for reading and storing all the\n information about recorded events.\n\u003c/p\u003e",
          "module": "Data.CQRS.EventStore.Backend",
          "name": "EventStoreBackend",
          "package": "cqrs-types",
          "source": "src/Data-CQRS-EventStore-Backend.html#EventStoreBackend",
          "type": "class"
        },
        "index": {
          "description": "Event stores are the backend used for reading and storing all the information about recorded events",
          "hierarchy": "Data CQRS EventStore Backend",
          "module": "Data.CQRS.EventStore.Backend",
          "name": "EventStoreBackend",
          "package": "cqrs-types",
          "partial": "Event Store Backend",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/cqrs-types/docs/Data-CQRS-EventStore-Backend.html#t:EventStoreBackend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRaw event type. The data associated with an event is not\n translated in any way.\n\u003c/p\u003e",
          "module": "Data.CQRS.EventStore.Backend",
          "name": "RawEvent",
          "package": "cqrs-types",
          "source": "src/Data-CQRS-EventStore-Backend.html#RawEvent",
          "type": "type"
        },
        "index": {
          "description": "Raw event type The data associated with an event is not translated in any way",
          "hierarchy": "Data CQRS EventStore Backend",
          "module": "Data.CQRS.EventStore.Backend",
          "name": "RawEvent",
          "package": "cqrs-types",
          "partial": "Raw Event",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/cqrs-types/docs/Data-CQRS-EventStore-Backend.html#t:RawEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRaw snapshot.\n\u003c/p\u003e",
          "module": "Data.CQRS.EventStore.Backend",
          "name": "RawSnapshot",
          "package": "cqrs-types",
          "source": "src/Data-CQRS-EventStore-Backend.html#RawSnapshot",
          "type": "data"
        },
        "index": {
          "description": "Raw snapshot",
          "hierarchy": "Data CQRS EventStore Backend",
          "module": "Data.CQRS.EventStore.Backend",
          "name": "RawSnapshot",
          "package": "cqrs-types",
          "partial": "Raw Snapshot",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cqrs-types/docs/Data-CQRS-EventStore-Backend.html#t:RawSnapshot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CQRS.EventStore.Backend",
          "name": "RawSnapshot",
          "package": "cqrs-types",
          "signature": "RawSnapshot",
          "source": "src/Data-CQRS-EventStore-Backend.html#RawSnapshot",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CQRS EventStore Backend",
          "module": "Data.CQRS.EventStore.Backend",
          "name": "RawSnapshot",
          "package": "cqrs-types",
          "partial": "Raw Snapshot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cqrs-types/docs/Data-CQRS-EventStore-Backend.html#v:RawSnapshot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnumerate all events. There is no guarantee on the ordering\n of events \u003cem\u003eexcept\u003c/em\u003e that events for any specific aggregate root\n are returned in order of version number.\n\u003c/p\u003e",
          "module": "Data.CQRS.EventStore.Backend",
          "name": "esbEnumerateAllEvents",
          "package": "cqrs-types",
          "signature": "esb -\u003e Source (ResourceT IO) RawEvent",
          "source": "src/Data-CQRS-EventStore-Backend.html#esbEnumerateAllEvents",
          "type": "method"
        },
        "index": {
          "description": "Enumerate all events There is no guarantee on the ordering of events except that events for any specific aggregate root are returned in order of version number",
          "hierarchy": "Data CQRS EventStore Backend",
          "module": "Data.CQRS.EventStore.Backend",
          "name": "esbEnumerateAllEvents",
          "normalized": "a-\u003eSource(ResourceT IO)RawEvent",
          "package": "cqrs-types",
          "partial": "Enumerate All Events",
          "signature": "esb-\u003eSource(ResourceT IO)RawEvent",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/cqrs-types/docs/Data-CQRS-EventStore-Backend.html#v:esbEnumerateAllEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet latest snapshot of an aggregate identified by GUID.\n Returns the version number of the snapshot in addition to the\n data. An event store which does not support snapshots is\n permitted to return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e in all cases.\n\u003c/p\u003e",
          "module": "Data.CQRS.EventStore.Backend",
          "name": "esbGetLatestSnapshot",
          "package": "cqrs-types",
          "signature": "esb -\u003e GUID -\u003e IO (Maybe RawSnapshot)",
          "source": "src/Data-CQRS-EventStore-Backend.html#esbGetLatestSnapshot",
          "type": "method"
        },
        "index": {
          "description": "Get latest snapshot of an aggregate identified by GUID Returns the version number of the snapshot in addition to the data An event store which does not support snapshots is permitted to return Nothing in all cases",
          "hierarchy": "Data CQRS EventStore Backend",
          "module": "Data.CQRS.EventStore.Backend",
          "name": "esbGetLatestSnapshot",
          "normalized": "a-\u003eGUID-\u003eIO(Maybe RawSnapshot)",
          "package": "cqrs-types",
          "partial": "Get Latest Snapshot",
          "signature": "esb-\u003eGUID-\u003eIO(Maybe RawSnapshot)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/cqrs-types/docs/Data-CQRS-EventStore-Backend.html#v:esbGetLatestSnapshot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the sequence of events associated with the aggregate\n identified by the given GUID. Only events at or after the given\n version number are retrieved. The events are returned in\n increasing order of version number.\n\u003c/p\u003e",
          "module": "Data.CQRS.EventStore.Backend",
          "name": "esbRetrieveEvents",
          "package": "cqrs-types",
          "signature": "esb -\u003e GUID -\u003e Int -\u003e Source (ResourceT IO) RawEvent",
          "source": "src/Data-CQRS-EventStore-Backend.html#esbRetrieveEvents",
          "type": "method"
        },
        "index": {
          "description": "Retrieve the sequence of events associated with the aggregate identified by the given GUID Only events at or after the given version number are retrieved The events are returned in increasing order of version number",
          "hierarchy": "Data CQRS EventStore Backend",
          "module": "Data.CQRS.EventStore.Backend",
          "name": "esbRetrieveEvents",
          "normalized": "a-\u003eGUID-\u003eInt-\u003eSource(ResourceT IO)RawEvent",
          "package": "cqrs-types",
          "partial": "Retrieve Events",
          "signature": "esb-\u003eGUID-\u003eInt-\u003eSource(ResourceT IO)RawEvent",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/cqrs-types/docs/Data-CQRS-EventStore-Backend.html#v:esbRetrieveEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStore a sequence of events for aggregate identified by GUID\n into the event store, starting at the provided version number.\n If the version number does not match the expected value, a\n failure occurs.\n\u003c/p\u003e",
          "module": "Data.CQRS.EventStore.Backend",
          "name": "esbStoreEvents",
          "package": "cqrs-types",
          "signature": "esb -\u003e GUID -\u003e Int -\u003e [RawEvent] -\u003e IO ()",
          "source": "src/Data-CQRS-EventStore-Backend.html#esbStoreEvents",
          "type": "method"
        },
        "index": {
          "description": "Store sequence of events for aggregate identified by GUID into the event store starting at the provided version number If the version number does not match the expected value failure occurs",
          "hierarchy": "Data CQRS EventStore Backend",
          "module": "Data.CQRS.EventStore.Backend",
          "name": "esbStoreEvents",
          "normalized": "a-\u003eGUID-\u003eInt-\u003e[RawEvent]-\u003eIO()",
          "package": "cqrs-types",
          "partial": "Store Events",
          "signature": "esb-\u003eGUID-\u003eInt-\u003e[RawEvent]-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/cqrs-types/docs/Data-CQRS-EventStore-Backend.html#v:esbStoreEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun transaction against the event store. The transaction is\n expected to commit if the supplied IO action runs to completion\n (i.e. doesn't throw an exception) and to rollback otherwise.\n\u003c/p\u003e",
          "module": "Data.CQRS.EventStore.Backend",
          "name": "esbWithTransaction",
          "package": "cqrs-types",
          "signature": "forall a.  esb -\u003e IO a -\u003e IO a",
          "source": "src/Data-CQRS-EventStore-Backend.html#esbWithTransaction",
          "type": "method"
        },
        "index": {
          "description": "Run transaction against the event store The transaction is expected to commit if the supplied IO action runs to completion i.e doesn throw an exception and to rollback otherwise",
          "hierarchy": "Data CQRS EventStore Backend",
          "module": "Data.CQRS.EventStore.Backend",
          "name": "esbWithTransaction",
          "normalized": "a b c-\u003eIO d-\u003eIO d",
          "package": "cqrs-types",
          "partial": "With Transaction",
          "signature": "forall a. esb-\u003eIO a-\u003eIO a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/cqrs-types/docs/Data-CQRS-EventStore-Backend.html#v:esbWithTransaction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite snapshot for aggregate identified by GUID and\n the given version number. The version number is NOT checked\n for validity. If the event store does not support snapshots\n this function may do nothing.\n\u003c/p\u003e",
          "module": "Data.CQRS.EventStore.Backend",
          "name": "esbWriteSnapshot",
          "package": "cqrs-types",
          "signature": "esb -\u003e GUID -\u003e RawSnapshot -\u003e IO ()",
          "source": "src/Data-CQRS-EventStore-Backend.html#esbWriteSnapshot",
          "type": "method"
        },
        "index": {
          "description": "Write snapshot for aggregate identified by GUID and the given version number The version number is NOT checked for validity If the event store does not support snapshots this function may do nothing",
          "hierarchy": "Data CQRS EventStore Backend",
          "module": "Data.CQRS.EventStore.Backend",
          "name": "esbWriteSnapshot",
          "normalized": "a-\u003eGUID-\u003eRawSnapshot-\u003eIO()",
          "package": "cqrs-types",
          "partial": "Write Snapshot",
          "signature": "esb-\u003eGUID-\u003eRawSnapshot-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/cqrs-types/docs/Data-CQRS-EventStore-Backend.html#v:esbWriteSnapshot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CQRS.EventStore.Backend",
          "name": "rsSnapshotData",
          "package": "cqrs-types",
          "signature": "ByteString",
          "source": "src/Data-CQRS-EventStore-Backend.html#RawSnapshot",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CQRS EventStore Backend",
          "module": "Data.CQRS.EventStore.Backend",
          "name": "rsSnapshotData",
          "package": "cqrs-types",
          "partial": "Snapshot Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cqrs-types/docs/Data-CQRS-EventStore-Backend.html#v:rsSnapshotData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CQRS.EventStore.Backend",
          "name": "rsVersion",
          "package": "cqrs-types",
          "signature": "Int",
          "source": "src/Data-CQRS-EventStore-Backend.html#RawSnapshot",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CQRS EventStore Backend",
          "module": "Data.CQRS.EventStore.Backend",
          "name": "rsVersion",
          "package": "cqrs-types",
          "partial": "Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cqrs-types/docs/Data-CQRS-EventStore-Backend.html#v:rsVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEventable type class.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.CQRS.Eventable",
          "name": "Eventable",
          "package": "cqrs-types",
          "source": "src/Data-CQRS-Eventable.html",
          "type": "module"
        },
        "index": {
          "description": "Eventable type class",
          "hierarchy": "Data CQRS Eventable",
          "module": "Data.CQRS.Eventable",
          "name": "Eventable",
          "package": "cqrs-types",
          "partial": "Eventable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cqrs-types/docs/Data-CQRS-Eventable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType class for applying events to aggregates.\n\u003c/p\u003e",
          "module": "Data.CQRS.Eventable",
          "name": "Eventable",
          "package": "cqrs-types",
          "source": "src/Data-CQRS-Eventable.html#Eventable",
          "type": "class"
        },
        "index": {
          "description": "Type class for applying events to aggregates",
          "hierarchy": "Data CQRS Eventable",
          "module": "Data.CQRS.Eventable",
          "name": "Eventable",
          "package": "cqrs-types",
          "partial": "Eventable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/cqrs-types/docs/Data-CQRS-Eventable.html#t:Eventable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply an event to the aggregate and return the updated aggregate.\n\u003c/p\u003e",
          "module": "Data.CQRS.Eventable",
          "name": "applyEvent",
          "package": "cqrs-types",
          "signature": "Maybe a -\u003e e -\u003e Maybe a",
          "source": "src/Data-CQRS-Eventable.html#applyEvent",
          "type": "method"
        },
        "index": {
          "description": "Apply an event to the aggregate and return the updated aggregate",
          "hierarchy": "Data CQRS Eventable",
          "module": "Data.CQRS.Eventable",
          "name": "applyEvent",
          "normalized": "Maybe a-\u003eb-\u003eMaybe a",
          "package": "cqrs-types",
          "partial": "Event",
          "signature": "Maybe a-\u003ee-\u003eMaybe a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/cqrs-types/docs/Data-CQRS-Eventable.html#v:applyEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGlobally Unique IDentifiers.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.CQRS.GUID",
          "name": "GUID",
          "package": "cqrs-types",
          "source": "src/Data-CQRS-GUID.html",
          "type": "module"
        },
        "index": {
          "description": "Globally Unique IDentifiers",
          "hierarchy": "Data CQRS GUID",
          "module": "Data.CQRS.GUID",
          "name": "GUID",
          "package": "cqrs-types",
          "partial": "GUID",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cqrs-types/docs/Data-CQRS-GUID.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Globally Unique IDentifier.\n\u003c/p\u003e",
          "module": "Data.CQRS.GUID",
          "name": "GUID",
          "package": "cqrs-types",
          "source": "src/Data-CQRS-GUID.html#GUID",
          "type": "data"
        },
        "index": {
          "description": "Globally Unique IDentifier",
          "hierarchy": "Data CQRS GUID",
          "module": "Data.CQRS.GUID",
          "name": "GUID",
          "package": "cqrs-types",
          "partial": "GUID",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cqrs-types/docs/Data-CQRS-GUID.html#t:GUID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode a GUID from base64 representation.\n\u003c/p\u003e",
          "module": "Data.CQRS.GUID",
          "name": "base64Decode",
          "package": "cqrs-types",
          "signature": "ByteString -\u003e Maybe GUID",
          "source": "src/Data-CQRS-GUID.html#base64Decode",
          "type": "function"
        },
        "index": {
          "description": "Decode GUID from base64 representation",
          "hierarchy": "Data CQRS GUID",
          "module": "Data.CQRS.GUID",
          "name": "base64Decode",
          "normalized": "ByteString-\u003eMaybe GUID",
          "package": "cqrs-types",
          "partial": "Decode",
          "signature": "ByteString-\u003eMaybe GUID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cqrs-types/docs/Data-CQRS-GUID.html#v:base64Decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBase64 encode a GUID.\n\u003c/p\u003e",
          "module": "Data.CQRS.GUID",
          "name": "base64Encode",
          "package": "cqrs-types",
          "signature": "GUID -\u003e ByteString",
          "source": "src/Data-CQRS-GUID.html#base64Encode",
          "type": "function"
        },
        "index": {
          "description": "Base64 encode GUID",
          "hierarchy": "Data CQRS GUID",
          "module": "Data.CQRS.GUID",
          "name": "base64Encode",
          "normalized": "GUID-\u003eByteString",
          "package": "cqrs-types",
          "partial": "Encode",
          "signature": "GUID-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cqrs-types/docs/Data-CQRS-GUID.html#v:base64Encode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert from ByteString.\n\u003c/p\u003e",
          "module": "Data.CQRS.GUID",
          "name": "fromByteString",
          "package": "cqrs-types",
          "signature": "ByteString -\u003e GUID",
          "source": "src/Data-CQRS-GUID.html#fromByteString",
          "type": "function"
        },
        "index": {
          "description": "Convert from ByteString",
          "hierarchy": "Data CQRS GUID",
          "module": "Data.CQRS.GUID",
          "name": "fromByteString",
          "normalized": "ByteString-\u003eGUID",
          "package": "cqrs-types",
          "partial": "Byte String",
          "signature": "ByteString-\u003eGUID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cqrs-types/docs/Data-CQRS-GUID.html#v:fromByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode a GUID from hex representation.\n\u003c/p\u003e",
          "module": "Data.CQRS.GUID",
          "name": "hexDecode",
          "package": "cqrs-types",
          "signature": "ByteString -\u003e Maybe GUID",
          "source": "src/Data-CQRS-GUID.html#hexDecode",
          "type": "function"
        },
        "index": {
          "description": "Decode GUID from hex representation",
          "hierarchy": "Data CQRS GUID",
          "module": "Data.CQRS.GUID",
          "name": "hexDecode",
          "normalized": "ByteString-\u003eMaybe GUID",
          "package": "cqrs-types",
          "partial": "Decode",
          "signature": "ByteString-\u003eMaybe GUID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cqrs-types/docs/Data-CQRS-GUID.html#v:hexDecode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHex encode a GUID.\n\u003c/p\u003e",
          "module": "Data.CQRS.GUID",
          "name": "hexEncode",
          "package": "cqrs-types",
          "signature": "GUID -\u003e ByteString",
          "source": "src/Data-CQRS-GUID.html#hexEncode",
          "type": "function"
        },
        "index": {
          "description": "Hex encode GUID",
          "hierarchy": "Data CQRS GUID",
          "module": "Data.CQRS.GUID",
          "name": "hexEncode",
          "normalized": "GUID-\u003eByteString",
          "package": "cqrs-types",
          "partial": "Encode",
          "signature": "GUID-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cqrs-types/docs/Data-CQRS-GUID.html#v:hexEncode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new random GUID.\n\u003c/p\u003e",
          "module": "Data.CQRS.GUID",
          "name": "newGUID",
          "package": "cqrs-types",
          "signature": "IO GUID",
          "source": "src/Data-CQRS-GUID.html#newGUID",
          "type": "function"
        },
        "index": {
          "description": "Create new random GUID",
          "hierarchy": "Data CQRS GUID",
          "module": "Data.CQRS.GUID",
          "name": "newGUID",
          "package": "cqrs-types",
          "partial": "GUID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cqrs-types/docs/Data-CQRS-GUID.html#v:newGUID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert to ByteString.\n\u003c/p\u003e",
          "module": "Data.CQRS.GUID",
          "name": "toByteString",
          "package": "cqrs-types",
          "signature": "GUID -\u003e ByteString",
          "source": "src/Data-CQRS-GUID.html#toByteString",
          "type": "function"
        },
        "index": {
          "description": "Convert to ByteString",
          "hierarchy": "Data CQRS GUID",
          "module": "Data.CQRS.GUID",
          "name": "toByteString",
          "normalized": "GUID-\u003eByteString",
          "package": "cqrs-types",
          "partial": "Byte String",
          "signature": "GUID-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cqrs-types/docs/Data-CQRS-GUID.html#v:toByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CQRS.PersistedEvent",
          "name": "PersistedEvent",
          "package": "cqrs-types",
          "source": "src/Data-CQRS-PersistedEvent.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data CQRS PersistedEvent",
          "module": "Data.CQRS.PersistedEvent",
          "name": "PersistedEvent",
          "package": "cqrs-types",
          "partial": "Persisted Event",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cqrs-types/docs/Data-CQRS-PersistedEvent.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePersisted Event.\n\u003c/p\u003e",
          "module": "Data.CQRS.PersistedEvent",
          "name": "PersistedEvent",
          "package": "cqrs-types",
          "source": "src/Data-CQRS-PersistedEvent.html#PersistedEvent",
          "type": "data"
        },
        "index": {
          "description": "Persisted Event",
          "hierarchy": "Data CQRS PersistedEvent",
          "module": "Data.CQRS.PersistedEvent",
          "name": "PersistedEvent",
          "package": "cqrs-types",
          "partial": "Persisted Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cqrs-types/docs/Data-CQRS-PersistedEvent.html#t:PersistedEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CQRS.PersistedEvent",
          "name": "PersistedEvent",
          "package": "cqrs-types",
          "signature": "PersistedEvent",
          "source": "src/Data-CQRS-PersistedEvent.html#PersistedEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CQRS PersistedEvent",
          "module": "Data.CQRS.PersistedEvent",
          "name": "PersistedEvent",
          "package": "cqrs-types",
          "partial": "Persisted Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cqrs-types/docs/Data-CQRS-PersistedEvent.html#v:PersistedEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGUID of the aggregate.\n\u003c/p\u003e",
          "module": "Data.CQRS.PersistedEvent",
          "name": "peAggregateGUID",
          "package": "cqrs-types",
          "signature": "GUID",
          "source": "src/Data-CQRS-PersistedEvent.html#PersistedEvent",
          "type": "function"
        },
        "index": {
          "description": "GUID of the aggregate",
          "hierarchy": "Data CQRS PersistedEvent",
          "module": "Data.CQRS.PersistedEvent",
          "name": "peAggregateGUID",
          "package": "cqrs-types",
          "partial": "Aggregate GUID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cqrs-types/docs/Data-CQRS-PersistedEvent.html#v:peAggregateGUID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvent.\n\u003c/p\u003e",
          "module": "Data.CQRS.PersistedEvent",
          "name": "peEvent",
          "package": "cqrs-types",
          "signature": "e",
          "source": "src/Data-CQRS-PersistedEvent.html#PersistedEvent",
          "type": "function"
        },
        "index": {
          "description": "Event",
          "hierarchy": "Data CQRS PersistedEvent",
          "module": "Data.CQRS.PersistedEvent",
          "name": "peEvent",
          "package": "cqrs-types",
          "partial": "Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cqrs-types/docs/Data-CQRS-PersistedEvent.html#v:peEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequence number within the aggregate.\n\u003c/p\u003e",
          "module": "Data.CQRS.PersistedEvent",
          "name": "peSequenceNumber",
          "package": "cqrs-types",
          "signature": "Int",
          "source": "src/Data-CQRS-PersistedEvent.html#PersistedEvent",
          "type": "function"
        },
        "index": {
          "description": "Sequence number within the aggregate",
          "hierarchy": "Data CQRS PersistedEvent",
          "module": "Data.CQRS.PersistedEvent",
          "name": "peSequenceNumber",
          "package": "cqrs-types",
          "partial": "Sequence Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cqrs-types/docs/Data-CQRS-PersistedEvent.html#v:peSequenceNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSerialization support. This is mainly used for compatibility\n with whatever serialization library you want to use.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.CQRS.Serializable",
          "name": "Serializable",
          "package": "cqrs-types",
          "source": "src/Data-CQRS-Serializable.html",
          "type": "module"
        },
        "index": {
          "description": "Serialization support This is mainly used for compatibility with whatever serialization library you want to use",
          "hierarchy": "Data CQRS Serializable",
          "module": "Data.CQRS.Serializable",
          "name": "Serializable",
          "package": "cqrs-types",
          "partial": "Serializable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cqrs-types/docs/Data-CQRS-Serializable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSerialization support for values of type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CQRS.Serializable",
          "name": "Serializable",
          "package": "cqrs-types",
          "source": "src/Data-CQRS-Serializable.html#Serializable",
          "type": "class"
        },
        "index": {
          "description": "Serialization support for values of type",
          "hierarchy": "Data CQRS Serializable",
          "module": "Data.CQRS.Serializable",
          "name": "Serializable",
          "package": "cqrs-types",
          "partial": "Serializable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/cqrs-types/docs/Data-CQRS-Serializable.html#t:Serializable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDe-serialize a value from a byte string. Should return\n \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if decoding is not possible due to a now-invalid\n representation.\n\u003c/p\u003e",
          "module": "Data.CQRS.Serializable",
          "name": "deserialize",
          "package": "cqrs-types",
          "signature": "ByteString -\u003e Maybe a",
          "source": "src/Data-CQRS-Serializable.html#deserialize",
          "type": "method"
        },
        "index": {
          "description": "De-serialize value from byte string Should return Nothing if decoding is not possible due to now-invalid representation",
          "hierarchy": "Data CQRS Serializable",
          "module": "Data.CQRS.Serializable",
          "name": "deserialize",
          "normalized": "ByteString-\u003eMaybe a",
          "package": "cqrs-types",
          "signature": "ByteString-\u003eMaybe a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/cqrs-types/docs/Data-CQRS-Serializable.html#v:deserialize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSerialize a value. The serialized representation\n should contain some metadata (a UUID for example)\n which can be used to check reliably whether the encoded\n representation is semantically valid upon decoding.\n\u003c/p\u003e",
          "module": "Data.CQRS.Serializable",
          "name": "serialize",
          "package": "cqrs-types",
          "signature": "a -\u003e ByteString",
          "source": "src/Data-CQRS-Serializable.html#serialize",
          "type": "method"
        },
        "index": {
          "description": "Serialize value The serialized representation should contain some metadata UUID for example which can be used to check reliably whether the encoded representation is semantically valid upon decoding",
          "hierarchy": "Data CQRS Serializable",
          "module": "Data.CQRS.Serializable",
          "name": "serialize",
          "normalized": "a-\u003eByteString",
          "package": "cqrs-types",
          "signature": "a-\u003eByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/cqrs-types/docs/Data-CQRS-Serializable.html#v:serialize"
      }
    }
  ]
]