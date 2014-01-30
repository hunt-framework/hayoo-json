[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog-sqlite/docs/Database-Groundhog-Sqlite.html#",
      "description": {
        "fct-module": "Database.Groundhog.Sqlite",
        "fct-package": "groundhog-sqlite",
        "fct-signature": "module",
        "fct-source": "src/Database-Groundhog-Sqlite.html",
        "fct-type": "module",
        "title": "Sqlite"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Sqlite",
        "module": "Database.Groundhog.Sqlite",
        "name": "Sqlite",
        "normalized": "",
        "package": "groundhog-sqlite",
        "partial": "Sqlite",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog-sqlite/docs/Database-Groundhog-Sqlite.html#t:Sqlite",
      "description": {
        "fct-module": "Database.Groundhog.Sqlite",
        "fct-package": "groundhog-sqlite",
        "fct-signature": "data",
        "fct-source": "src/Database-Groundhog-Sqlite.html#Sqlite",
        "fct-type": "data",
        "title": "Sqlite"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Sqlite",
        "module": "Database.Groundhog.Sqlite",
        "name": "Sqlite",
        "normalized": "",
        "package": "groundhog-sqlite",
        "partial": "Sqlite",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog-sqlite/docs/Database-Groundhog-Sqlite.html#v:Sqlite",
      "description": {
        "fct-module": "Database.Groundhog.Sqlite",
        "fct-package": "groundhog-sqlite",
        "fct-signature": "Sqlite Database (IORef (HashMap ByteString Statement))",
        "fct-source": "src/Database-Groundhog-Sqlite.html#Sqlite",
        "fct-type": "function",
        "title": "Sqlite"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Sqlite",
        "module": "Database.Groundhog.Sqlite",
        "name": "Sqlite",
        "normalized": "",
        "package": "groundhog-sqlite",
        "partial": "Sqlite",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog-sqlite/docs/Database-Groundhog-Sqlite.html#v:createSqlitePool",
      "description": {
        "fct-module": "Database.Groundhog.Sqlite",
        "fct-package": "groundhog-sqlite",
        "fct-signature": "String-\u003e Int-\u003e m (Pool Sqlite)",
        "fct-type": "function",
        "title": "createSqlitePool"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Sqlite",
        "module": "Database.Groundhog.Sqlite",
        "name": "createSqlitePool",
        "normalized": "String-\u003eInt-\u003ea(Pool Sqlite)",
        "package": "groundhog-sqlite",
        "partial": "Sqlite Pool",
        "signature": "String-\u003eInt-\u003em(Pool Sqlite)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog-sqlite/docs/Database-Groundhog-Sqlite.html#v:runDbConn",
      "description": {
        "fct-descr": "\u003cp\u003eRuns action within connection. It can handle a simple connection, a pool of them, etc.\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Sqlite",
        "fct-package": "groundhog-sqlite",
        "fct-signature": "DbPersist conn (NoLoggingT m) a -\u003e cm -\u003e m a",
        "fct-type": "function",
        "title": "runDbConn"
      },
      "index": {
        "description": "Runs action within connection It can handle simple connection pool of them etc",
        "hierarchy": "Database Groundhog Sqlite",
        "module": "Database.Groundhog.Sqlite",
        "name": "runDbConn",
        "normalized": "DbPersist a(NoLoggingT b)c-\u003ed-\u003eb c",
        "package": "groundhog-sqlite",
        "partial": "Db Conn",
        "signature": "DbPersist conn(NoLoggingT m)a-\u003ecm-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog-sqlite/docs/Database-Groundhog-Sqlite.html#v:withSqliteConn",
      "description": {
        "fct-module": "Database.Groundhog.Sqlite",
        "fct-package": "groundhog-sqlite",
        "fct-signature": "String-\u003e (Sqlite -\u003e m a)-\u003e m a",
        "fct-type": "function",
        "title": "withSqliteConn"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Sqlite",
        "module": "Database.Groundhog.Sqlite",
        "name": "withSqliteConn",
        "normalized": "String-\u003e(Sqlite-\u003ea b)-\u003ea b",
        "package": "groundhog-sqlite",
        "partial": "Sqlite Conn",
        "signature": "String-\u003e(Sqlite-\u003em a)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog-sqlite/docs/Database-Groundhog-Sqlite.html#v:withSqlitePool",
      "description": {
        "fct-module": "Database.Groundhog.Sqlite",
        "fct-package": "groundhog-sqlite",
        "fct-signature": "String-\u003e Int-\u003e (Pool Sqlite -\u003e m a)-\u003e m a",
        "fct-type": "function",
        "title": "withSqlitePool"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Sqlite",
        "module": "Database.Groundhog.Sqlite",
        "name": "withSqlitePool",
        "normalized": "String-\u003eInt-\u003e(Pool Sqlite-\u003ea b)-\u003ea b",
        "package": "groundhog-sqlite",
        "partial": "Sqlite Pool",
        "signature": "String-\u003eInt-\u003e(Pool Sqlite-\u003em a)-\u003em a"
      }
    }
  }
]