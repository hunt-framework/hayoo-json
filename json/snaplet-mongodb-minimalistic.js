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
        "word": "snaplet-mongodb-minimalistic"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIn this module you can find the Snaplet's data type, type class and initializer.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Snap.Snaplet.MongoDB.Core",
          "name": "Core",
          "package": "snaplet-mongodb-minimalistic",
          "source": "src/Snap-Snaplet-MongoDB-Core.html",
          "type": "module"
        },
        "index": {
          "description": "In this module you can find the Snaplet data type type class and initializer",
          "hierarchy": "Snap Snaplet MongoDB Core",
          "module": "Snap.Snaplet.MongoDB.Core",
          "name": "Core",
          "package": "snaplet-mongodb-minimalistic",
          "partial": "Core",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-mongodb-minimalistic/docs/Snap-Snaplet-MongoDB-Core.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSnaplet's type-class.\n\u003c/p\u003e\u003cp\u003eUsage:\n\u003c/p\u003e\u003cpre\u003e instance HasMongoDB App where\n     getMongoDB app = view snapletValue (view database app)\n\u003c/pre\u003e",
          "module": "Snap.Snaplet.MongoDB.Core",
          "name": "HasMongoDB",
          "package": "snaplet-mongodb-minimalistic",
          "source": "src/Snap-Snaplet-MongoDB-Core.html#HasMongoDB",
          "type": "class"
        },
        "index": {
          "description": "Snaplet type-class Usage instance HasMongoDB App where getMongoDB app view snapletValue view database app",
          "hierarchy": "Snap Snaplet MongoDB Core",
          "module": "Snap.Snaplet.MongoDB.Core",
          "name": "HasMongoDB",
          "package": "snaplet-mongodb-minimalistic",
          "partial": "Has Mongo DB",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-mongodb-minimalistic/docs/Snap-Snaplet-MongoDB-Core.html#t:HasMongoDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSnaplet's data type.\n\u003c/p\u003e\u003cp\u003eUsage:\n\u003c/p\u003e\u003cpre\u003e data App = App\n     { _heist :: Snaplet (Heist App)\n     , _database :: Snaplet MongoDB\n     }\n\u003c/pre\u003e",
          "module": "Snap.Snaplet.MongoDB.Core",
          "name": "MongoDB",
          "package": "snaplet-mongodb-minimalistic",
          "source": "src/Snap-Snaplet-MongoDB-Core.html#MongoDB",
          "type": "data"
        },
        "index": {
          "description": "Snaplet data type Usage data App App heist Snaplet Heist App database Snaplet MongoDB",
          "hierarchy": "Snap Snaplet MongoDB Core",
          "module": "Snap.Snaplet.MongoDB.Core",
          "name": "MongoDB",
          "package": "snaplet-mongodb-minimalistic",
          "partial": "Mongo DB",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-mongodb-minimalistic/docs/Snap-Snaplet-MongoDB-Core.html#t:MongoDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMongoDB Pool type\n\u003c/p\u003e",
          "module": "Snap.Snaplet.MongoDB.Core",
          "name": "MongoDBPool",
          "package": "snaplet-mongodb-minimalistic",
          "source": "src/Snap-Snaplet-MongoDB-Core.html#MongoDBPool",
          "type": "type"
        },
        "index": {
          "description": "MongoDB Pool type",
          "hierarchy": "Snap Snaplet MongoDB Core",
          "module": "Snap.Snaplet.MongoDB.Core",
          "name": "MongoDBPool",
          "package": "snaplet-mongodb-minimalistic",
          "partial": "Mongo DBPool",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-mongodb-minimalistic/docs/Snap-Snaplet-MongoDB-Core.html#t:MongoDBPool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.MongoDB.Core",
          "name": "MongoDB",
          "package": "snaplet-mongodb-minimalistic",
          "signature": "MongoDB",
          "source": "src/Snap-Snaplet-MongoDB-Core.html#MongoDB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet MongoDB Core",
          "module": "Snap.Snaplet.MongoDB.Core",
          "name": "MongoDB",
          "package": "snaplet-mongodb-minimalistic",
          "partial": "Mongo DB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-mongodb-minimalistic/docs/Snap-Snaplet-MongoDB-Core.html#v:MongoDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.MongoDB.Core",
          "name": "getMongoDB",
          "package": "snaplet-mongodb-minimalistic",
          "signature": "a -\u003e MongoDB",
          "source": "src/Snap-Snaplet-MongoDB-Core.html#getMongoDB",
          "type": "method"
        },
        "index": {
          "hierarchy": "Snap Snaplet MongoDB Core",
          "module": "Snap.Snaplet.MongoDB.Core",
          "name": "getMongoDB",
          "normalized": "a-\u003eMongoDB",
          "package": "snaplet-mongodb-minimalistic",
          "partial": "Mongo DB",
          "signature": "a-\u003eMongoDB",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-mongodb-minimalistic/docs/Snap-Snaplet-MongoDB-Core.html#v:getMongoDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.MongoDB.Core",
          "name": "mongoAccessMode",
          "package": "snaplet-mongodb-minimalistic",
          "signature": "AccessMode",
          "source": "src/Snap-Snaplet-MongoDB-Core.html#MongoDB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet MongoDB Core",
          "module": "Snap.Snaplet.MongoDB.Core",
          "name": "mongoAccessMode",
          "package": "snaplet-mongodb-minimalistic",
          "partial": "Access Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-mongodb-minimalistic/docs/Snap-Snaplet-MongoDB-Core.html#v:mongoAccessMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitializer function.\n\u003c/p\u003e\u003cp\u003eUsage:\n\u003c/p\u003e\u003cpre\u003e app :: SnapletInit App App\n app = makeSnaplet \"app\" \"Example application.\" Nothing $ do\n     h \u003c- nestSnaplet \"heist\" heist $ heistInit \"resources/templates\"\n     d \u003c- nestSnaplet \"database\" database $ mongoDBInit 10 (host \"127.0.0.1\") \"Snaplet-MongoDB\"\n     return $ App h d\n\u003c/pre\u003e",
          "module": "Snap.Snaplet.MongoDB.Core",
          "name": "mongoDBInit",
          "package": "snaplet-mongodb-minimalistic",
          "signature": "Int-\u003e Host-\u003e Database-\u003e SnapletInit app MongoDB",
          "type": "function"
        },
        "index": {
          "description": "Initializer function Usage app SnapletInit App App app makeSnaplet app Example application Nothing do nestSnaplet heist heist heistInit resources templates nestSnaplet database database mongoDBInit host Snaplet-MongoDB return App",
          "hierarchy": "Snap Snaplet MongoDB Core",
          "module": "Snap.Snaplet.MongoDB.Core",
          "name": "mongoDBInit",
          "normalized": "Int-\u003eHost-\u003eDatabase-\u003eSnapletInit a MongoDB",
          "package": "snaplet-mongodb-minimalistic",
          "partial": "DBInit",
          "signature": "Int-\u003eHost-\u003eDatabase-\u003eSnapletInit app MongoDB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-mongodb-minimalistic/docs/Snap-Snaplet-MongoDB-Core.html#v:mongoDBInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitializer function.\n\u003c/p\u003e\u003cp\u003eUsage:\n\u003c/p\u003e\u003cpre\u003e app :: SnapletInit App App\n app = makeSnaplet \"app\" \"Example application.\" Nothing $ do\n     h \u003c- nestSnaplet \"heist\" heist $ heistInit \"resources/templates\"\n     d \u003c- nestSnaplet \"database\" database $ mongoDBInit 10 (host \"127.0.0.1\") \"Snaplet-MongoDB\"\n     return $ App h d\n\u003c/pre\u003e",
          "module": "Snap.Snaplet.MongoDB.Core",
          "name": "mongoDBInit'",
          "package": "snaplet-mongodb-minimalistic",
          "signature": "Int-\u003e Host-\u003e Database-\u003e AccessMode-\u003e SnapletInit app MongoDB",
          "type": "function"
        },
        "index": {
          "description": "Initializer function Usage app SnapletInit App App app makeSnaplet app Example application Nothing do nestSnaplet heist heist heistInit resources templates nestSnaplet database database mongoDBInit host Snaplet-MongoDB return App",
          "hierarchy": "Snap Snaplet MongoDB Core",
          "module": "Snap.Snaplet.MongoDB.Core",
          "name": "mongoDBInit'",
          "normalized": "Int-\u003eHost-\u003eDatabase-\u003eAccessMode-\u003eSnapletInit a MongoDB",
          "package": "snaplet-mongodb-minimalistic",
          "partial": "DBInit'",
          "signature": "Int-\u003eHost-\u003eDatabase-\u003eAccessMode-\u003eSnapletInit app MongoDB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-mongodb-minimalistic/docs/Snap-Snaplet-MongoDB-Core.html#v:mongoDBInit-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.MongoDB.Core",
          "name": "mongoDatabase",
          "package": "snaplet-mongodb-minimalistic",
          "signature": "Database",
          "source": "src/Snap-Snaplet-MongoDB-Core.html#MongoDB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet MongoDB Core",
          "module": "Snap.Snaplet.MongoDB.Core",
          "name": "mongoDatabase",
          "package": "snaplet-mongodb-minimalistic",
          "partial": "Database",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-mongodb-minimalistic/docs/Snap-Snaplet-MongoDB-Core.html#v:mongoDatabase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.MongoDB.Core",
          "name": "mongoPool",
          "package": "snaplet-mongodb-minimalistic",
          "signature": "Pool IOError Pipe",
          "source": "src/Snap-Snaplet-MongoDB-Core.html#MongoDB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet MongoDB Core",
          "module": "Snap.Snaplet.MongoDB.Core",
          "name": "mongoPool",
          "package": "snaplet-mongodb-minimalistic",
          "partial": "Pool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-mongodb-minimalistic/docs/Snap-Snaplet-MongoDB-Core.html#v:mongoPool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIn this module you can find variations of \u003ccode\u003ewithDB\u003c/code\u003e functions.\n\u003c/p\u003e\u003cp\u003eFunctions from this module are to be used when you have multiple MongoDB snaplets (databases) in your application.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Snap.Snaplet.MongoDB.Functions.M",
          "name": "M",
          "package": "snaplet-mongodb-minimalistic",
          "source": "src/Snap-Snaplet-MongoDB-Functions-M.html",
          "type": "module"
        },
        "index": {
          "description": "In this module you can find variations of withDB functions Functions from this module are to be used when you have multiple MongoDB snaplets databases in your application",
          "hierarchy": "Snap Snaplet MongoDB Functions M",
          "module": "Snap.Snaplet.MongoDB.Functions.M",
          "name": "M",
          "package": "snaplet-mongodb-minimalistic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-mongodb-minimalistic/docs/Snap-Snaplet-MongoDB-Functions-M.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDatabase access function.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e eitherWithDB accountDB $ insert \"test-collection\" [ \"some_field\" = \"something\" ]\n\u003c/pre\u003e",
          "module": "Snap.Snaplet.MongoDB.Functions.M",
          "name": "eitherWithDB",
          "package": "snaplet-mongodb-minimalistic",
          "signature": "SnapletLens app MongoDB-\u003e Action IO a-\u003e m (Either Failure a)",
          "type": "function"
        },
        "index": {
          "description": "Database access function Example eitherWithDB accountDB insert test-collection some field something",
          "hierarchy": "Snap Snaplet MongoDB Functions M",
          "module": "Snap.Snaplet.MongoDB.Functions.M",
          "name": "eitherWithDB",
          "normalized": "SnapletLens a MongoDB-\u003eAction IO b-\u003ec(Either Failure b)",
          "package": "snaplet-mongodb-minimalistic",
          "partial": "With DB",
          "signature": "SnapletLens app MongoDB-\u003eAction IO a-\u003em(Either Failure a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-mongodb-minimalistic/docs/Snap-Snaplet-MongoDB-Functions-M.html#v:eitherWithDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDatabase access function.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e eitherWithDB' accountDB UnconfirmedWrites $ insert \"test-collection\" [ \"some_field\" = \"something\" ]\n\u003c/pre\u003e",
          "module": "Snap.Snaplet.MongoDB.Functions.M",
          "name": "eitherWithDB'",
          "package": "snaplet-mongodb-minimalistic",
          "signature": "SnapletLens app MongoDB-\u003e AccessMode-\u003e Action IO a-\u003e m (Either Failure a)",
          "type": "function"
        },
        "index": {
          "description": "Database access function Example eitherWithDB accountDB UnconfirmedWrites insert test-collection some field something",
          "hierarchy": "Snap Snaplet MongoDB Functions M",
          "module": "Snap.Snaplet.MongoDB.Functions.M",
          "name": "eitherWithDB'",
          "normalized": "SnapletLens a MongoDB-\u003eAccessMode-\u003eAction IO b-\u003ec(Either Failure b)",
          "package": "snaplet-mongodb-minimalistic",
          "partial": "With DB'",
          "signature": "SnapletLens app MongoDB-\u003eAccessMode-\u003eAction IO a-\u003em(Either Failure a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-mongodb-minimalistic/docs/Snap-Snaplet-MongoDB-Functions-M.html#v:eitherWithDB-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDatabase access function.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e maybeWithDB accountDB $ insert \"test-collection\" [ \"some_field\" = \"something\" ]\n\u003c/pre\u003e",
          "module": "Snap.Snaplet.MongoDB.Functions.M",
          "name": "maybeWithDB",
          "package": "snaplet-mongodb-minimalistic",
          "signature": "SnapletLens app MongoDB-\u003e Action IO a-\u003e m (Maybe a)",
          "type": "function"
        },
        "index": {
          "description": "Database access function Example maybeWithDB accountDB insert test-collection some field something",
          "hierarchy": "Snap Snaplet MongoDB Functions M",
          "module": "Snap.Snaplet.MongoDB.Functions.M",
          "name": "maybeWithDB",
          "normalized": "SnapletLens a MongoDB-\u003eAction IO b-\u003ec(Maybe b)",
          "package": "snaplet-mongodb-minimalistic",
          "partial": "With DB",
          "signature": "SnapletLens app MongoDB-\u003eAction IO a-\u003em(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-mongodb-minimalistic/docs/Snap-Snaplet-MongoDB-Functions-M.html#v:maybeWithDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDatabase access function.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e maybeWithDB' accountDB UnconfirmedWrites $ insert \"test-collection\" [ \"some_field\" = \"something\" ]\n\u003c/pre\u003e",
          "module": "Snap.Snaplet.MongoDB.Functions.M",
          "name": "maybeWithDB'",
          "package": "snaplet-mongodb-minimalistic",
          "signature": "SnapletLens app MongoDB-\u003e AccessMode-\u003e Action IO a-\u003e m (Maybe a)",
          "type": "function"
        },
        "index": {
          "description": "Database access function Example maybeWithDB accountDB UnconfirmedWrites insert test-collection some field something",
          "hierarchy": "Snap Snaplet MongoDB Functions M",
          "module": "Snap.Snaplet.MongoDB.Functions.M",
          "name": "maybeWithDB'",
          "normalized": "SnapletLens a MongoDB-\u003eAccessMode-\u003eAction IO b-\u003ec(Maybe b)",
          "package": "snaplet-mongodb-minimalistic",
          "partial": "With DB'",
          "signature": "SnapletLens app MongoDB-\u003eAccessMode-\u003eAction IO a-\u003em(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-mongodb-minimalistic/docs/Snap-Snaplet-MongoDB-Functions-M.html#v:maybeWithDB-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDatabase access function.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e unsafeWithDB accountDB $ insert \"test-collection\" [ \"some_field\" = \"something\" ]\n\u003c/pre\u003e",
          "module": "Snap.Snaplet.MongoDB.Functions.M",
          "name": "unsafeWithDB",
          "package": "snaplet-mongodb-minimalistic",
          "signature": "SnapletLens app MongoDB-\u003e Action IO a-\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "Database access function Example unsafeWithDB accountDB insert test-collection some field something",
          "hierarchy": "Snap Snaplet MongoDB Functions M",
          "module": "Snap.Snaplet.MongoDB.Functions.M",
          "name": "unsafeWithDB",
          "normalized": "SnapletLens a MongoDB-\u003eAction IO b-\u003ec b",
          "package": "snaplet-mongodb-minimalistic",
          "partial": "With DB",
          "signature": "SnapletLens app MongoDB-\u003eAction IO a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-mongodb-minimalistic/docs/Snap-Snaplet-MongoDB-Functions-M.html#v:unsafeWithDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDatabase access function.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e unsafeWithDB' accountDB UnconfirmedWrites $ insert \"test-collection\" [ \"some_field\" = \"something\" ]\n\u003c/pre\u003e",
          "module": "Snap.Snaplet.MongoDB.Functions.M",
          "name": "unsafeWithDB'",
          "package": "snaplet-mongodb-minimalistic",
          "signature": "SnapletLens app MongoDB-\u003e AccessMode-\u003e Action IO a-\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "Database access function Example unsafeWithDB accountDB UnconfirmedWrites insert test-collection some field something",
          "hierarchy": "Snap Snaplet MongoDB Functions M",
          "module": "Snap.Snaplet.MongoDB.Functions.M",
          "name": "unsafeWithDB'",
          "normalized": "SnapletLens a MongoDB-\u003eAccessMode-\u003eAction IO b-\u003ec b",
          "package": "snaplet-mongodb-minimalistic",
          "partial": "With DB'",
          "signature": "SnapletLens app MongoDB-\u003eAccessMode-\u003eAction IO a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-mongodb-minimalistic/docs/Snap-Snaplet-MongoDB-Functions-M.html#v:unsafeWithDB-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIn this module you can find variations of \u003ccode\u003ewithDB\u003c/code\u003e functions.\n\u003c/p\u003e\u003cp\u003eFunctions from this module are to be used when you have single MongoDB snaplet in your application and your application is an instance of HasMongoDB.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Snap.Snaplet.MongoDB.Functions.S",
          "name": "S",
          "package": "snaplet-mongodb-minimalistic",
          "source": "src/Snap-Snaplet-MongoDB-Functions-S.html",
          "type": "module"
        },
        "index": {
          "description": "In this module you can find variations of withDB functions Functions from this module are to be used when you have single MongoDB snaplet in your application and your application is an instance of HasMongoDB",
          "hierarchy": "Snap Snaplet MongoDB Functions S",
          "module": "Snap.Snaplet.MongoDB.Functions.S",
          "name": "S",
          "package": "snaplet-mongodb-minimalistic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-mongodb-minimalistic/docs/Snap-Snaplet-MongoDB-Functions-S.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDatabase access function.\n\u003c/p\u003e\u003cp\u003eUsage:\n\u003c/p\u003e\u003cpre\u003e eitherWithDB $ insert \"test-collection\" [ \"some_field\" = \"something\" ]\n\u003c/pre\u003e",
          "module": "Snap.Snaplet.MongoDB.Functions.S",
          "name": "eitherWithDB",
          "package": "snaplet-mongodb-minimalistic",
          "signature": "Action IO a-\u003e m (Either Failure a)",
          "type": "function"
        },
        "index": {
          "description": "Database access function Usage eitherWithDB insert test-collection some field something",
          "hierarchy": "Snap Snaplet MongoDB Functions S",
          "module": "Snap.Snaplet.MongoDB.Functions.S",
          "name": "eitherWithDB",
          "normalized": "Action IO a-\u003eb(Either Failure a)",
          "package": "snaplet-mongodb-minimalistic",
          "partial": "With DB",
          "signature": "Action IO a-\u003em(Either Failure a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-mongodb-minimalistic/docs/Snap-Snaplet-MongoDB-Functions-S.html#v:eitherWithDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDatabase access function.\n\u003c/p\u003e\u003cp\u003eUsage:\n\u003c/p\u003e\u003cpre\u003e eitherWithDB' UnconfirmedWrites $ insert \"test-collection\" [ \"some_field\" = \"something\" ]\n\u003c/pre\u003e",
          "module": "Snap.Snaplet.MongoDB.Functions.S",
          "name": "eitherWithDB'",
          "package": "snaplet-mongodb-minimalistic",
          "signature": "AccessMode-\u003e Action IO a-\u003e m (Either Failure a)",
          "type": "function"
        },
        "index": {
          "description": "Database access function Usage eitherWithDB UnconfirmedWrites insert test-collection some field something",
          "hierarchy": "Snap Snaplet MongoDB Functions S",
          "module": "Snap.Snaplet.MongoDB.Functions.S",
          "name": "eitherWithDB'",
          "normalized": "AccessMode-\u003eAction IO a-\u003eb(Either Failure a)",
          "package": "snaplet-mongodb-minimalistic",
          "partial": "With DB'",
          "signature": "AccessMode-\u003eAction IO a-\u003em(Either Failure a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-mongodb-minimalistic/docs/Snap-Snaplet-MongoDB-Functions-S.html#v:eitherWithDB-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDatabase access function.\n\u003c/p\u003e\u003cp\u003eUsage:\n\u003c/p\u003e\u003cpre\u003e maybeWithDB $ insert \"test-collection\" [ \"some_field\" = \"something\" ]\n\u003c/pre\u003e",
          "module": "Snap.Snaplet.MongoDB.Functions.S",
          "name": "maybeWithDB",
          "package": "snaplet-mongodb-minimalistic",
          "signature": "Action IO a-\u003e m (Maybe a)",
          "type": "function"
        },
        "index": {
          "description": "Database access function Usage maybeWithDB insert test-collection some field something",
          "hierarchy": "Snap Snaplet MongoDB Functions S",
          "module": "Snap.Snaplet.MongoDB.Functions.S",
          "name": "maybeWithDB",
          "normalized": "Action IO a-\u003eb(Maybe a)",
          "package": "snaplet-mongodb-minimalistic",
          "partial": "With DB",
          "signature": "Action IO a-\u003em(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-mongodb-minimalistic/docs/Snap-Snaplet-MongoDB-Functions-S.html#v:maybeWithDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDatabase access function.\n\u003c/p\u003e\u003cp\u003eUsage:\n\u003c/p\u003e\u003cpre\u003e maybeWithDB' UnconfirmedWrites $ insert \"test-collection\" [ \"some_field\" = \"something\" ]\n\u003c/pre\u003e",
          "module": "Snap.Snaplet.MongoDB.Functions.S",
          "name": "maybeWithDB'",
          "package": "snaplet-mongodb-minimalistic",
          "signature": "AccessMode-\u003e Action IO a-\u003e m (Maybe a)",
          "type": "function"
        },
        "index": {
          "description": "Database access function Usage maybeWithDB UnconfirmedWrites insert test-collection some field something",
          "hierarchy": "Snap Snaplet MongoDB Functions S",
          "module": "Snap.Snaplet.MongoDB.Functions.S",
          "name": "maybeWithDB'",
          "normalized": "AccessMode-\u003eAction IO a-\u003eb(Maybe a)",
          "package": "snaplet-mongodb-minimalistic",
          "partial": "With DB'",
          "signature": "AccessMode-\u003eAction IO a-\u003em(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-mongodb-minimalistic/docs/Snap-Snaplet-MongoDB-Functions-S.html#v:maybeWithDB-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDatabase access function.\n\u003c/p\u003e\u003cp\u003eUsage:\n\u003c/p\u003e\u003cpre\u003e unsafeWithDB $ insert \"test-collection\" [ \"some_field\" = \"something\" ]\n\u003c/pre\u003e",
          "module": "Snap.Snaplet.MongoDB.Functions.S",
          "name": "unsafeWithDB",
          "package": "snaplet-mongodb-minimalistic",
          "signature": "Action IO a-\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "Database access function Usage unsafeWithDB insert test-collection some field something",
          "hierarchy": "Snap Snaplet MongoDB Functions S",
          "module": "Snap.Snaplet.MongoDB.Functions.S",
          "name": "unsafeWithDB",
          "normalized": "Action IO a-\u003eb a",
          "package": "snaplet-mongodb-minimalistic",
          "partial": "With DB",
          "signature": "Action IO a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-mongodb-minimalistic/docs/Snap-Snaplet-MongoDB-Functions-S.html#v:unsafeWithDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDatabase access function.\n\u003c/p\u003e\u003cp\u003eUsage:\n\u003c/p\u003e\u003cpre\u003e unsafeWithDB' UnconfirmedWrites $ insert \"test-collection\" [ \"some_field\" = \"something\" ]\n\u003c/pre\u003e",
          "module": "Snap.Snaplet.MongoDB.Functions.S",
          "name": "unsafeWithDB'",
          "package": "snaplet-mongodb-minimalistic",
          "signature": "AccessMode-\u003e Action IO a-\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "Database access function Usage unsafeWithDB UnconfirmedWrites insert test-collection some field something",
          "hierarchy": "Snap Snaplet MongoDB Functions S",
          "module": "Snap.Snaplet.MongoDB.Functions.S",
          "name": "unsafeWithDB'",
          "normalized": "AccessMode-\u003eAction IO a-\u003eb a",
          "package": "snaplet-mongodb-minimalistic",
          "partial": "With DB'",
          "signature": "AccessMode-\u003eAction IO a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-mongodb-minimalistic/docs/Snap-Snaplet-MongoDB-Functions-S.html#v:unsafeWithDB-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.MongoDB.Functions",
          "name": "Functions",
          "package": "snaplet-mongodb-minimalistic",
          "source": "src/Snap-Snaplet-MongoDB-Functions.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Snap Snaplet MongoDB Functions",
          "module": "Snap.Snaplet.MongoDB.Functions",
          "name": "Functions",
          "package": "snaplet-mongodb-minimalistic",
          "partial": "Functions",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-mongodb-minimalistic/docs/Snap-Snaplet-MongoDB-Functions.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.MongoDB",
          "name": "MongoDB",
          "package": "snaplet-mongodb-minimalistic",
          "source": "src/Snap-Snaplet-MongoDB.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Snap Snaplet MongoDB",
          "module": "Snap.Snaplet.MongoDB",
          "name": "MongoDB",
          "package": "snaplet-mongodb-minimalistic",
          "partial": "Mongo DB",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-mongodb-minimalistic/docs/Snap-Snaplet-MongoDB.html#"
      }
    }
  ]
]