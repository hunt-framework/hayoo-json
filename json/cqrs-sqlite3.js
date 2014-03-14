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
        "word": "cqrs-sqlite3"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImplementation of an SQLite3-based event store. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.CQRS.EventStore.Backend.Sqlite3",
          "name": "Sqlite3",
          "package": "cqrs-sqlite3",
          "source": "src/Data-CQRS-EventStore-Backend-Sqlite3.html",
          "type": "module"
        },
        "index": {
          "description": "Implementation of an SQLite3-based event store",
          "hierarchy": "Data CQRS EventStore Backend Sqlite3",
          "module": "Data.CQRS.EventStore.Backend.Sqlite3",
          "name": "Sqlite3",
          "package": "cqrs-sqlite3",
          "partial": "Sqlite",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cqrs-sqlite3/docs/Data-CQRS-EventStore-Backend-Sqlite3.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSQLite3 event store backend type alias.\n\u003c/p\u003e",
          "module": "Data.CQRS.EventStore.Backend.Sqlite3",
          "name": "SQLite3EventStoreBackend",
          "package": "cqrs-sqlite3",
          "source": "src/Data-CQRS-EventStore-Backend-Sqlite3.html#SQLite3EventStoreBackend",
          "type": "data"
        },
        "index": {
          "description": "SQLite3 event store backend type alias",
          "hierarchy": "Data CQRS EventStore Backend Sqlite3",
          "module": "Data.CQRS.EventStore.Backend.Sqlite3",
          "name": "SQLite3EventStoreBackend",
          "package": "cqrs-sqlite3",
          "partial": "SQLite Event Store Backend",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cqrs-sqlite3/docs/Data-CQRS-EventStore-Backend-Sqlite3.html#t:SQLite3EventStoreBackend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a pool of SQLite3-based event store backends.\n\u003c/p\u003e",
          "module": "Data.CQRS.EventStore.Backend.Sqlite3",
          "name": "createBackendPool",
          "package": "cqrs-sqlite3",
          "signature": "Int -\u003e Text -\u003e IO (Pool SQLite3EventStoreBackend)",
          "source": "src/Data-CQRS-EventStore-Backend-Sqlite3.html#createBackendPool",
          "type": "function"
        },
        "index": {
          "description": "Create pool of SQLite3-based event store backends",
          "hierarchy": "Data CQRS EventStore Backend Sqlite3",
          "module": "Data.CQRS.EventStore.Backend.Sqlite3",
          "name": "createBackendPool",
          "normalized": "Int-\u003eText-\u003eIO(Pool SQLite EventStoreBackend)",
          "package": "cqrs-sqlite3",
          "partial": "Backend Pool",
          "signature": "Int-\u003eText-\u003eIO(Pool SQLite EventStoreBackend)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cqrs-sqlite3/docs/Data-CQRS-EventStore-Backend-Sqlite3.html#v:createBackendPool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImplementation of an SQLite3-based event store. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.CQRS.EventStore.Backend.Sqlite3Utils",
          "name": "Sqlite3Utils",
          "package": "cqrs-sqlite3",
          "source": "src/Data-CQRS-EventStore-Backend-Sqlite3Utils.html",
          "type": "module"
        },
        "index": {
          "description": "Implementation of an SQLite3-based event store",
          "hierarchy": "Data CQRS EventStore Backend Sqlite3Utils",
          "module": "Data.CQRS.EventStore.Backend.Sqlite3Utils",
          "name": "Sqlite3Utils",
          "package": "cqrs-sqlite3",
          "partial": "Sqlite Utils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cqrs-sqlite3/docs/Data-CQRS-EventStore-Backend-Sqlite3Utils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute an SQL statement for which no result is expected.\n\u003c/p\u003e",
          "module": "Data.CQRS.EventStore.Backend.Sqlite3Utils",
          "name": "execSql",
          "package": "cqrs-sqlite3",
          "signature": "Database -\u003e Text -\u003e [SQLData] -\u003e IO ()",
          "source": "src/Data-CQRS-EventStore-Backend-Sqlite3Utils.html#execSql",
          "type": "function"
        },
        "index": {
          "description": "Execute an SQL statement for which no result is expected",
          "hierarchy": "Data CQRS EventStore Backend Sqlite3Utils",
          "module": "Data.CQRS.EventStore.Backend.Sqlite3Utils",
          "name": "execSql",
          "normalized": "Database-\u003eText-\u003e[SQLData]-\u003eIO()",
          "package": "cqrs-sqlite3",
          "partial": "Sql",
          "signature": "Database-\u003eText-\u003e[SQLData]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cqrs-sqlite3/docs/Data-CQRS-EventStore-Backend-Sqlite3Utils.html#v:execSql"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CQRS.EventStore.Backend.Sqlite3Utils",
          "name": "sourceQuery",
          "package": "cqrs-sqlite3",
          "signature": "Database -\u003e Text -\u003e [SQLData] -\u003e Source (ResourceT IO) [SQLData]",
          "source": "src/Data-CQRS-EventStore-Backend-Sqlite3Utils.html#sourceQuery",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CQRS EventStore Backend Sqlite3Utils",
          "module": "Data.CQRS.EventStore.Backend.Sqlite3Utils",
          "name": "sourceQuery",
          "normalized": "Database-\u003eText-\u003e[SQLData]-\u003eSource(ResourceT IO)[SQLData]",
          "package": "cqrs-sqlite3",
          "partial": "Query",
          "signature": "Database-\u003eText-\u003e[SQLData]-\u003eSource(ResourceT IO)[SQLData]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cqrs-sqlite3/docs/Data-CQRS-EventStore-Backend-Sqlite3Utils.html#v:sourceQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute an IO action with an active transaction.\n\u003c/p\u003e",
          "module": "Data.CQRS.EventStore.Backend.Sqlite3Utils",
          "name": "withTransaction",
          "package": "cqrs-sqlite3",
          "signature": "Database -\u003e IO a -\u003e IO a",
          "source": "src/Data-CQRS-EventStore-Backend-Sqlite3Utils.html#withTransaction",
          "type": "function"
        },
        "index": {
          "description": "Execute an IO action with an active transaction",
          "hierarchy": "Data CQRS EventStore Backend Sqlite3Utils",
          "module": "Data.CQRS.EventStore.Backend.Sqlite3Utils",
          "name": "withTransaction",
          "normalized": "Database-\u003eIO a-\u003eIO a",
          "package": "cqrs-sqlite3",
          "partial": "Transaction",
          "signature": "Database-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cqrs-sqlite3/docs/Data-CQRS-EventStore-Backend-Sqlite3Utils.html#v:withTransaction"
      }
    }
  ]
]