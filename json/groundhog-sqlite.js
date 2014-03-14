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
        "word": "groundhog-sqlite"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Sqlite",
          "name": "Sqlite",
          "package": "groundhog-sqlite",
          "source": "src/Database-Groundhog-Sqlite.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Database Groundhog Sqlite",
          "module": "Database.Groundhog.Sqlite",
          "name": "Sqlite",
          "package": "groundhog-sqlite",
          "partial": "Sqlite",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/groundhog-sqlite/docs/Database-Groundhog-Sqlite.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Sqlite",
          "name": "Sqlite",
          "package": "groundhog-sqlite",
          "source": "src/Database-Groundhog-Sqlite.html#Sqlite",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Groundhog Sqlite",
          "module": "Database.Groundhog.Sqlite",
          "name": "Sqlite",
          "package": "groundhog-sqlite",
          "partial": "Sqlite",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/groundhog-sqlite/docs/Database-Groundhog-Sqlite.html#t:Sqlite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Sqlite",
          "name": "Sqlite",
          "package": "groundhog-sqlite",
          "signature": "Sqlite Database (IORef (HashMap ByteString Statement))",
          "source": "src/Database-Groundhog-Sqlite.html#Sqlite",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Sqlite",
          "module": "Database.Groundhog.Sqlite",
          "name": "Sqlite",
          "package": "groundhog-sqlite",
          "partial": "Sqlite",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog-sqlite/docs/Database-Groundhog-Sqlite.html#v:Sqlite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Sqlite",
          "name": "createSqlitePool",
          "package": "groundhog-sqlite",
          "signature": "String-\u003e Int-\u003e m (Pool Sqlite)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Sqlite",
          "module": "Database.Groundhog.Sqlite",
          "name": "createSqlitePool",
          "normalized": "String-\u003eInt-\u003ea(Pool Sqlite)",
          "package": "groundhog-sqlite",
          "partial": "Sqlite Pool",
          "signature": "String-\u003eInt-\u003em(Pool Sqlite)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog-sqlite/docs/Database-Groundhog-Sqlite.html#v:createSqlitePool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns action within connection. It can handle a simple connection, a pool of them, etc.\n\u003c/p\u003e",
          "module": "Database.Groundhog.Sqlite",
          "name": "runDbConn",
          "package": "groundhog-sqlite",
          "signature": "DbPersist conn (NoLoggingT m) a -\u003e cm -\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "Runs action within connection It can handle simple connection pool of them etc",
          "hierarchy": "Database Groundhog Sqlite",
          "module": "Database.Groundhog.Sqlite",
          "name": "runDbConn",
          "normalized": "DbPersist a(NoLoggingT b)c-\u003ed-\u003eb c",
          "package": "groundhog-sqlite",
          "partial": "Db Conn",
          "signature": "DbPersist conn(NoLoggingT m)a-\u003ecm-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog-sqlite/docs/Database-Groundhog-Sqlite.html#v:runDbConn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Sqlite",
          "name": "withSqliteConn",
          "package": "groundhog-sqlite",
          "signature": "String-\u003e (Sqlite -\u003e m a)-\u003e m a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Sqlite",
          "module": "Database.Groundhog.Sqlite",
          "name": "withSqliteConn",
          "normalized": "String-\u003e(Sqlite-\u003ea b)-\u003ea b",
          "package": "groundhog-sqlite",
          "partial": "Sqlite Conn",
          "signature": "String-\u003e(Sqlite-\u003em a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog-sqlite/docs/Database-Groundhog-Sqlite.html#v:withSqliteConn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Sqlite",
          "name": "withSqlitePool",
          "package": "groundhog-sqlite",
          "signature": "String-\u003e Int-\u003e (Pool Sqlite -\u003e m a)-\u003e m a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Sqlite",
          "module": "Database.Groundhog.Sqlite",
          "name": "withSqlitePool",
          "normalized": "String-\u003eInt-\u003e(Pool Sqlite-\u003ea b)-\u003ea b",
          "package": "groundhog-sqlite",
          "partial": "Sqlite Pool",
          "signature": "String-\u003eInt-\u003e(Pool Sqlite-\u003em a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog-sqlite/docs/Database-Groundhog-Sqlite.html#v:withSqlitePool"
      }
    }
  ]
]