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
        "word": "persistent-protobuf"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003ederivePersistFieldPB\u003c/a\u003e\u003c/code\u003e uses Template Haskell to produce\n   \u003ccode\u003e\u003ca\u003ePersistField\u003c/a\u003e\u003c/code\u003e instances for types with\n   \u003ccode\u003e\u003ca\u003eReflectDescriptor\u003c/a\u003e\u003c/code\u003e and\n   \u003ccode\u003e\u003ca\u003eWire\u003c/a\u003e\u003c/code\u003e instances just as\n   \u003ccode\u003e\u003ca\u003ederivePersistField\u003c/a\u003e\u003c/code\u003e produces\n   \u003ccode\u003e\u003ca\u003ePersistField\u003c/a\u003e\u003c/code\u003e instances for types with \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e\n   instances.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.Persist.TH.ProtocolBuffers",
          "name": "ProtocolBuffers",
          "package": "persistent-protobuf",
          "source": "src/Database-Persist-TH-ProtocolBuffers.html",
          "type": "module"
        },
        "index": {
          "description": "derivePersistFieldPB uses Template Haskell to produce PersistField instances for types with ReflectDescriptor and Wire instances just as derivePersistField produces PersistField instances for types with Read and Show instances",
          "hierarchy": "Database Persist TH ProtocolBuffers",
          "module": "Database.Persist.TH.ProtocolBuffers",
          "name": "ProtocolBuffers",
          "package": "persistent-protobuf",
          "partial": "Protocol Buffers",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/persistent-protobuf/docs/Database-Persist-TH-ProtocolBuffers.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDerive \u003ccode\u003e\u003ca\u003ePersistField\u003c/a\u003e\u003c/code\u003e instances for \u003ccode\u003etypName\u003c/code\u003e. \u003ccode\u003etypName\u003c/code\u003e\n   should be an instance of the\n   \u003ccode\u003e\u003ca\u003eReflectDescriptor\u003c/a\u003e\u003c/code\u003e and\n   \u003ccode\u003e\u003ca\u003eWire\u003c/a\u003e\u003c/code\u003e classes.\n\u003c/p\u003e",
          "module": "Database.Persist.TH.ProtocolBuffers",
          "name": "derivePersistFieldPB",
          "package": "persistent-protobuf",
          "signature": "String-\u003e Q [Dec]",
          "type": "function"
        },
        "index": {
          "description": "Derive PersistField instances for typName typName should be an instance of the ReflectDescriptor and Wire classes",
          "hierarchy": "Database Persist TH ProtocolBuffers",
          "module": "Database.Persist.TH.ProtocolBuffers",
          "name": "derivePersistFieldPB",
          "normalized": "String-\u003eQ[Dec]",
          "package": "persistent-protobuf",
          "partial": "Persist Field PB",
          "signature": "String-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-protobuf/docs/Database-Persist-TH-ProtocolBuffers.html#v:derivePersistFieldPB"
      }
    }
  ]
]