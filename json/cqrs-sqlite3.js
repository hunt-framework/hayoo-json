[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cqrs-sqlite3/docs/Data-CQRS-EventStore-Backend-Sqlite3.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImplementation of an SQLite3-based event store. \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.CQRS.EventStore.Backend.Sqlite3",
        "fct-package": "cqrs-sqlite3",
        "fct-signature": "module",
        "fct-source": "src/Data-CQRS-EventStore-Backend-Sqlite3.html",
        "fct-type": "module",
        "title": "Sqlite3"
      },
      "index": {
        "description": "Implementation of an SQLite3-based event store",
        "hierarchy": "Data CQRS EventStore Backend Sqlite3",
        "module": "Data.CQRS.EventStore.Backend.Sqlite3",
        "name": "Sqlite3",
        "normalized": "",
        "package": "cqrs-sqlite3",
        "partial": "Sqlite",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cqrs-sqlite3/docs/Data-CQRS-EventStore-Backend-Sqlite3.html#t:SQLite3EventStoreBackend",
      "description": {
        "fct-descr": "\u003cp\u003eSQLite3 event store backend type alias.\n\u003c/p\u003e",
        "fct-module": "Data.CQRS.EventStore.Backend.Sqlite3",
        "fct-package": "cqrs-sqlite3",
        "fct-signature": "data",
        "fct-source": "src/Data-CQRS-EventStore-Backend-Sqlite3.html#SQLite3EventStoreBackend",
        "fct-type": "data",
        "title": "SQLite3EventStoreBackend"
      },
      "index": {
        "description": "SQLite3 event store backend type alias",
        "hierarchy": "Data CQRS EventStore Backend Sqlite3",
        "module": "Data.CQRS.EventStore.Backend.Sqlite3",
        "name": "SQLite3EventStoreBackend",
        "normalized": "",
        "package": "cqrs-sqlite3",
        "partial": "SQLite Event Store Backend",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cqrs-sqlite3/docs/Data-CQRS-EventStore-Backend-Sqlite3.html#v:createBackendPool",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a pool of SQLite3-based event store backends.\n\u003c/p\u003e",
        "fct-module": "Data.CQRS.EventStore.Backend.Sqlite3",
        "fct-package": "cqrs-sqlite3",
        "fct-signature": "Int -\u003e Text -\u003e IO (Pool SQLite3EventStoreBackend)",
        "fct-source": "src/Data-CQRS-EventStore-Backend-Sqlite3.html#createBackendPool",
        "fct-type": "function",
        "title": "createBackendPool"
      },
      "index": {
        "description": "Create pool of SQLite3-based event store backends",
        "hierarchy": "Data CQRS EventStore Backend Sqlite3",
        "module": "Data.CQRS.EventStore.Backend.Sqlite3",
        "name": "createBackendPool",
        "normalized": "Int-\u003eText-\u003eIO(Pool SQLite EventStoreBackend)",
        "package": "cqrs-sqlite3",
        "partial": "Backend Pool",
        "signature": "Int-\u003eText-\u003eIO(Pool SQLite EventStoreBackend)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cqrs-sqlite3/docs/Data-CQRS-EventStore-Backend-Sqlite3Utils.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImplementation of an SQLite3-based event store. \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.CQRS.EventStore.Backend.Sqlite3Utils",
        "fct-package": "cqrs-sqlite3",
        "fct-signature": "module",
        "fct-source": "src/Data-CQRS-EventStore-Backend-Sqlite3Utils.html",
        "fct-type": "module",
        "title": "Sqlite3Utils"
      },
      "index": {
        "description": "Implementation of an SQLite3-based event store",
        "hierarchy": "Data CQRS EventStore Backend Sqlite3Utils",
        "module": "Data.CQRS.EventStore.Backend.Sqlite3Utils",
        "name": "Sqlite3Utils",
        "normalized": "",
        "package": "cqrs-sqlite3",
        "partial": "Sqlite Utils",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cqrs-sqlite3/docs/Data-CQRS-EventStore-Backend-Sqlite3Utils.html#v:execSql",
      "description": {
        "fct-descr": "\u003cp\u003eExecute an SQL statement for which no result is expected.\n\u003c/p\u003e",
        "fct-module": "Data.CQRS.EventStore.Backend.Sqlite3Utils",
        "fct-package": "cqrs-sqlite3",
        "fct-signature": "Database -\u003e Text -\u003e [SQLData] -\u003e IO ()",
        "fct-source": "src/Data-CQRS-EventStore-Backend-Sqlite3Utils.html#execSql",
        "fct-type": "function",
        "title": "execSql"
      },
      "index": {
        "description": "Execute an SQL statement for which no result is expected",
        "hierarchy": "Data CQRS EventStore Backend Sqlite3Utils",
        "module": "Data.CQRS.EventStore.Backend.Sqlite3Utils",
        "name": "execSql",
        "normalized": "Database-\u003eText-\u003e[SQLData]-\u003eIO()",
        "package": "cqrs-sqlite3",
        "partial": "Sql",
        "signature": "Database-\u003eText-\u003e[SQLData]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cqrs-sqlite3/docs/Data-CQRS-EventStore-Backend-Sqlite3Utils.html#v:sourceQuery",
      "description": {
        "fct-module": "Data.CQRS.EventStore.Backend.Sqlite3Utils",
        "fct-package": "cqrs-sqlite3",
        "fct-signature": "Database -\u003e Text -\u003e [SQLData] -\u003e Source (ResourceT IO) [SQLData]",
        "fct-source": "src/Data-CQRS-EventStore-Backend-Sqlite3Utils.html#sourceQuery",
        "fct-type": "function",
        "title": "sourceQuery"
      },
      "index": {
        "description": "",
        "hierarchy": "Data CQRS EventStore Backend Sqlite3Utils",
        "module": "Data.CQRS.EventStore.Backend.Sqlite3Utils",
        "name": "sourceQuery",
        "normalized": "Database-\u003eText-\u003e[SQLData]-\u003eSource(ResourceT IO)[SQLData]",
        "package": "cqrs-sqlite3",
        "partial": "Query",
        "signature": "Database-\u003eText-\u003e[SQLData]-\u003eSource(ResourceT IO)[SQLData]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cqrs-sqlite3/docs/Data-CQRS-EventStore-Backend-Sqlite3Utils.html#v:withTransaction",
      "description": {
        "fct-descr": "\u003cp\u003eExecute an IO action with an active transaction.\n\u003c/p\u003e",
        "fct-module": "Data.CQRS.EventStore.Backend.Sqlite3Utils",
        "fct-package": "cqrs-sqlite3",
        "fct-signature": "Database -\u003e IO a -\u003e IO a",
        "fct-source": "src/Data-CQRS-EventStore-Backend-Sqlite3Utils.html#withTransaction",
        "fct-type": "function",
        "title": "withTransaction"
      },
      "index": {
        "description": "Execute an IO action with an active transaction",
        "hierarchy": "Data CQRS EventStore Backend Sqlite3Utils",
        "module": "Data.CQRS.EventStore.Backend.Sqlite3Utils",
        "name": "withTransaction",
        "normalized": "Database-\u003eIO a-\u003eIO a",
        "package": "cqrs-sqlite3",
        "partial": "Transaction",
        "signature": "Database-\u003eIO a-\u003eIO a"
      }
    }
  }
]