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
        "word": "persistent-sqlite"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA sqlite backend for persistent.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.Persist.Sqlite",
          "name": "Sqlite",
          "package": "persistent-sqlite",
          "source": "src/Database-Persist-Sqlite.html",
          "type": "module"
        },
        "index": {
          "description": "sqlite backend for persistent",
          "hierarchy": "Database Persist Sqlite",
          "module": "Database.Persist.Sqlite",
          "name": "Sqlite",
          "package": "persistent-sqlite",
          "partial": "Sqlite",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/persistent-sqlite/docs/Database-Persist-Sqlite.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInformation required to connect to a sqlite database\n\u003c/p\u003e",
          "module": "Database.Persist.Sqlite",
          "name": "SqliteConf",
          "package": "persistent-sqlite",
          "source": "src/Database-Persist-Sqlite.html#SqliteConf",
          "type": "data"
        },
        "index": {
          "description": "Information required to connect to sqlite database",
          "hierarchy": "Database Persist Sqlite",
          "module": "Database.Persist.Sqlite",
          "name": "SqliteConf",
          "package": "persistent-sqlite",
          "partial": "Sqlite Conf",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/persistent-sqlite/docs/Database-Persist-Sqlite.html#t:SqliteConf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Sqlite",
          "name": "SqliteConf",
          "package": "persistent-sqlite",
          "signature": "SqliteConf",
          "source": "src/Database-Persist-Sqlite.html#SqliteConf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Sqlite",
          "module": "Database.Persist.Sqlite",
          "name": "SqliteConf",
          "package": "persistent-sqlite",
          "partial": "Sqlite Conf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-sqlite/docs/Database-Persist-Sqlite.html#v:SqliteConf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Sqlite",
          "name": "createSqlitePool",
          "package": "persistent-sqlite",
          "signature": "Text -\u003e Int -\u003e m ConnectionPool",
          "source": "src/Database-Persist-Sqlite.html#createSqlitePool",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Sqlite",
          "module": "Database.Persist.Sqlite",
          "name": "createSqlitePool",
          "normalized": "Text-\u003eInt-\u003ea ConnectionPool",
          "package": "persistent-sqlite",
          "partial": "Sqlite Pool",
          "signature": "Text-\u003eInt-\u003em ConnectionPool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-sqlite/docs/Database-Persist-Sqlite.html#v:createSqlitePool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA convenience helper which creates a new database connection and runs the\n given block, handling \u003ccode\u003eMonadResource\u003c/code\u003e and \u003ccode\u003eMonadLogger\u003c/code\u003e requirements. Note\n that all log messages are discarded.\n\u003c/p\u003e\u003cp\u003eSince 1.1.4\n\u003c/p\u003e",
          "module": "Database.Persist.Sqlite",
          "name": "runSqlite",
          "package": "persistent-sqlite",
          "signature": "Text-\u003e SqlPersistT (NoLoggingT (ResourceT m)) a-\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "convenience helper which creates new database connection and runs the given block handling MonadResource and MonadLogger requirements Note that all log messages are discarded Since",
          "hierarchy": "Database Persist Sqlite",
          "module": "Database.Persist.Sqlite",
          "name": "runSqlite",
          "normalized": "Text-\u003eSqlPersistT(NoLoggingT(ResourceT a))b-\u003ea b",
          "package": "persistent-sqlite",
          "partial": "Sqlite",
          "signature": "Text-\u003eSqlPersistT(NoLoggingT(ResourceT m))a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-sqlite/docs/Database-Persist-Sqlite.html#v:runSqlite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Sqlite",
          "name": "sqlDatabase",
          "package": "persistent-sqlite",
          "signature": "Text",
          "source": "src/Database-Persist-Sqlite.html#SqliteConf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Sqlite",
          "module": "Database.Persist.Sqlite",
          "name": "sqlDatabase",
          "package": "persistent-sqlite",
          "partial": "Database",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-sqlite/docs/Database-Persist-Sqlite.html#v:sqlDatabase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Sqlite",
          "name": "sqlPoolSize",
          "package": "persistent-sqlite",
          "signature": "Int",
          "source": "src/Database-Persist-Sqlite.html#SqliteConf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Sqlite",
          "module": "Database.Persist.Sqlite",
          "name": "sqlPoolSize",
          "package": "persistent-sqlite",
          "partial": "Pool Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-sqlite/docs/Database-Persist-Sqlite.html#v:sqlPoolSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Sqlite",
          "name": "withSqliteConn",
          "package": "persistent-sqlite",
          "signature": "Text -\u003e (Connection -\u003e m a) -\u003e m a",
          "source": "src/Database-Persist-Sqlite.html#withSqliteConn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Sqlite",
          "module": "Database.Persist.Sqlite",
          "name": "withSqliteConn",
          "normalized": "Text-\u003e(Connection-\u003ea b)-\u003ea b",
          "package": "persistent-sqlite",
          "partial": "Sqlite Conn",
          "signature": "Text-\u003e(Connection-\u003em a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-sqlite/docs/Database-Persist-Sqlite.html#v:withSqliteConn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Sqlite",
          "name": "withSqlitePool",
          "package": "persistent-sqlite",
          "signature": "Text-\u003e Int-\u003e (ConnectionPool -\u003e m a)-\u003e m a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Sqlite",
          "module": "Database.Persist.Sqlite",
          "name": "withSqlitePool",
          "normalized": "Text-\u003eInt-\u003e(ConnectionPool-\u003ea b)-\u003ea b",
          "package": "persistent-sqlite",
          "partial": "Sqlite Pool",
          "signature": "Text-\u003eInt-\u003e(ConnectionPool-\u003em a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-sqlite/docs/Database-Persist-Sqlite.html#v:withSqlitePool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap up a raw \u003ccode\u003e\u003ca\u003eConnection\u003c/a\u003e\u003c/code\u003e as a Persistent SQL \u003ccode\u003e\u003ca\u003eConnection\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 1.1.5\n\u003c/p\u003e",
          "module": "Database.Persist.Sqlite",
          "name": "wrapConnection",
          "package": "persistent-sqlite",
          "signature": "Connection -\u003e IO Connection",
          "source": "src/Database-Persist-Sqlite.html#wrapConnection",
          "type": "function"
        },
        "index": {
          "description": "Wrap up raw Connection as Persistent SQL Connection Since",
          "hierarchy": "Database Persist Sqlite",
          "module": "Database.Persist.Sqlite",
          "name": "wrapConnection",
          "normalized": "Connection-\u003eIO Connection",
          "package": "persistent-sqlite",
          "partial": "Connection",
          "signature": "Connection-\u003eIO Connection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-sqlite/docs/Database-Persist-Sqlite.html#v:wrapConnection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA port of the direct-sqlite package for dealing directly with\n \u003ccode\u003e\u003ca\u003ePersistValue\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.Sqlite",
          "name": "Sqlite",
          "package": "persistent-sqlite",
          "source": "src/Database-Sqlite.html",
          "type": "module"
        },
        "index": {
          "description": "port of the direct-sqlite package for dealing directly with PersistValue",
          "hierarchy": "Database Sqlite",
          "module": "Database.Sqlite",
          "name": "Sqlite",
          "package": "persistent-sqlite",
          "partial": "Sqlite",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/persistent-sqlite/docs/Database-Sqlite.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sqlite",
          "name": "Connection",
          "package": "persistent-sqlite",
          "source": "src/Database-Sqlite.html#Connection",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Sqlite",
          "module": "Database.Sqlite",
          "name": "Connection",
          "package": "persistent-sqlite",
          "partial": "Connection",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/persistent-sqlite/docs/Database-Sqlite.html#t:Connection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sqlite",
          "name": "Error",
          "package": "persistent-sqlite",
          "source": "src/Database-Sqlite.html#Error",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Sqlite",
          "module": "Database.Sqlite",
          "name": "Error",
          "package": "persistent-sqlite",
          "partial": "Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/persistent-sqlite/docs/Database-Sqlite.html#t:Error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sqlite",
          "name": "Statement",
          "package": "persistent-sqlite",
          "source": "src/Database-Sqlite.html#Statement",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Sqlite",
          "module": "Database.Sqlite",
          "name": "Statement",
          "package": "persistent-sqlite",
          "partial": "Statement",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/persistent-sqlite/docs/Database-Sqlite.html#t:Statement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sqlite",
          "name": "StepResult",
          "package": "persistent-sqlite",
          "source": "src/Database-Sqlite.html#StepResult",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Sqlite",
          "module": "Database.Sqlite",
          "name": "StepResult",
          "package": "persistent-sqlite",
          "partial": "Step Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/persistent-sqlite/docs/Database-Sqlite.html#t:StepResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sqlite",
          "name": "Done",
          "package": "persistent-sqlite",
          "signature": "Done",
          "source": "src/Database-Sqlite.html#StepResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sqlite",
          "module": "Database.Sqlite",
          "name": "Done",
          "package": "persistent-sqlite",
          "partial": "Done",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-sqlite/docs/Database-Sqlite.html#v:Done"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sqlite",
          "name": "ErrorAbort",
          "package": "persistent-sqlite",
          "signature": "ErrorAbort",
          "source": "src/Database-Sqlite.html#Error",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sqlite",
          "module": "Database.Sqlite",
          "name": "ErrorAbort",
          "package": "persistent-sqlite",
          "partial": "Error Abort",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-sqlite/docs/Database-Sqlite.html#v:ErrorAbort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sqlite",
          "name": "ErrorAuthorization",
          "package": "persistent-sqlite",
          "signature": "ErrorAuthorization",
          "source": "src/Database-Sqlite.html#Error",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sqlite",
          "module": "Database.Sqlite",
          "name": "ErrorAuthorization",
          "package": "persistent-sqlite",
          "partial": "Error Authorization",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-sqlite/docs/Database-Sqlite.html#v:ErrorAuthorization"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sqlite",
          "name": "ErrorBusy",
          "package": "persistent-sqlite",
          "signature": "ErrorBusy",
          "source": "src/Database-Sqlite.html#Error",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sqlite",
          "module": "Database.Sqlite",
          "name": "ErrorBusy",
          "package": "persistent-sqlite",
          "partial": "Error Busy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-sqlite/docs/Database-Sqlite.html#v:ErrorBusy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sqlite",
          "name": "ErrorCan'tOpen",
          "package": "persistent-sqlite",
          "signature": "ErrorCan'tOpen",
          "source": "src/Database-Sqlite.html#Error",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sqlite",
          "module": "Database.Sqlite",
          "name": "ErrorCan'tOpen",
          "package": "persistent-sqlite",
          "partial": "Error Can't Open",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-sqlite/docs/Database-Sqlite.html#v:ErrorCan-39-tOpen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sqlite",
          "name": "ErrorConstraint",
          "package": "persistent-sqlite",
          "signature": "ErrorConstraint",
          "source": "src/Database-Sqlite.html#Error",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sqlite",
          "module": "Database.Sqlite",
          "name": "ErrorConstraint",
          "package": "persistent-sqlite",
          "partial": "Error Constraint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-sqlite/docs/Database-Sqlite.html#v:ErrorConstraint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sqlite",
          "name": "ErrorCorrupt",
          "package": "persistent-sqlite",
          "signature": "ErrorCorrupt",
          "source": "src/Database-Sqlite.html#Error",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sqlite",
          "module": "Database.Sqlite",
          "name": "ErrorCorrupt",
          "package": "persistent-sqlite",
          "partial": "Error Corrupt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-sqlite/docs/Database-Sqlite.html#v:ErrorCorrupt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sqlite",
          "name": "ErrorDone",
          "package": "persistent-sqlite",
          "signature": "ErrorDone",
          "source": "src/Database-Sqlite.html#Error",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sqlite",
          "module": "Database.Sqlite",
          "name": "ErrorDone",
          "package": "persistent-sqlite",
          "partial": "Error Done",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-sqlite/docs/Database-Sqlite.html#v:ErrorDone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sqlite",
          "name": "ErrorEmpty",
          "package": "persistent-sqlite",
          "signature": "ErrorEmpty",
          "source": "src/Database-Sqlite.html#Error",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sqlite",
          "module": "Database.Sqlite",
          "name": "ErrorEmpty",
          "package": "persistent-sqlite",
          "partial": "Error Empty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-sqlite/docs/Database-Sqlite.html#v:ErrorEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sqlite",
          "name": "ErrorError",
          "package": "persistent-sqlite",
          "signature": "ErrorError",
          "source": "src/Database-Sqlite.html#Error",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sqlite",
          "module": "Database.Sqlite",
          "name": "ErrorError",
          "package": "persistent-sqlite",
          "partial": "Error Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-sqlite/docs/Database-Sqlite.html#v:ErrorError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sqlite",
          "name": "ErrorFormat",
          "package": "persistent-sqlite",
          "signature": "ErrorFormat",
          "source": "src/Database-Sqlite.html#Error",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sqlite",
          "module": "Database.Sqlite",
          "name": "ErrorFormat",
          "package": "persistent-sqlite",
          "partial": "Error Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-sqlite/docs/Database-Sqlite.html#v:ErrorFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sqlite",
          "name": "ErrorFull",
          "package": "persistent-sqlite",
          "signature": "ErrorFull",
          "source": "src/Database-Sqlite.html#Error",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sqlite",
          "module": "Database.Sqlite",
          "name": "ErrorFull",
          "package": "persistent-sqlite",
          "partial": "Error Full",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-sqlite/docs/Database-Sqlite.html#v:ErrorFull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sqlite",
          "name": "ErrorIO",
          "package": "persistent-sqlite",
          "signature": "ErrorIO",
          "source": "src/Database-Sqlite.html#Error",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sqlite",
          "module": "Database.Sqlite",
          "name": "ErrorIO",
          "package": "persistent-sqlite",
          "partial": "Error IO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-sqlite/docs/Database-Sqlite.html#v:ErrorIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sqlite",
          "name": "ErrorInternal",
          "package": "persistent-sqlite",
          "signature": "ErrorInternal",
          "source": "src/Database-Sqlite.html#Error",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sqlite",
          "module": "Database.Sqlite",
          "name": "ErrorInternal",
          "package": "persistent-sqlite",
          "partial": "Error Internal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-sqlite/docs/Database-Sqlite.html#v:ErrorInternal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sqlite",
          "name": "ErrorInterrupt",
          "package": "persistent-sqlite",
          "signature": "ErrorInterrupt",
          "source": "src/Database-Sqlite.html#Error",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sqlite",
          "module": "Database.Sqlite",
          "name": "ErrorInterrupt",
          "package": "persistent-sqlite",
          "partial": "Error Interrupt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-sqlite/docs/Database-Sqlite.html#v:ErrorInterrupt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sqlite",
          "name": "ErrorLocked",
          "package": "persistent-sqlite",
          "signature": "ErrorLocked",
          "source": "src/Database-Sqlite.html#Error",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sqlite",
          "module": "Database.Sqlite",
          "name": "ErrorLocked",
          "package": "persistent-sqlite",
          "partial": "Error Locked",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-sqlite/docs/Database-Sqlite.html#v:ErrorLocked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sqlite",
          "name": "ErrorMismatch",
          "package": "persistent-sqlite",
          "signature": "ErrorMismatch",
          "source": "src/Database-Sqlite.html#Error",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sqlite",
          "module": "Database.Sqlite",
          "name": "ErrorMismatch",
          "package": "persistent-sqlite",
          "partial": "Error Mismatch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-sqlite/docs/Database-Sqlite.html#v:ErrorMismatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sqlite",
          "name": "ErrorMisuse",
          "package": "persistent-sqlite",
          "signature": "ErrorMisuse",
          "source": "src/Database-Sqlite.html#Error",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sqlite",
          "module": "Database.Sqlite",
          "name": "ErrorMisuse",
          "package": "persistent-sqlite",
          "partial": "Error Misuse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-sqlite/docs/Database-Sqlite.html#v:ErrorMisuse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sqlite",
          "name": "ErrorNoLargeFileSupport",
          "package": "persistent-sqlite",
          "signature": "ErrorNoLargeFileSupport",
          "source": "src/Database-Sqlite.html#Error",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sqlite",
          "module": "Database.Sqlite",
          "name": "ErrorNoLargeFileSupport",
          "package": "persistent-sqlite",
          "partial": "Error No Large File Support",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-sqlite/docs/Database-Sqlite.html#v:ErrorNoLargeFileSupport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sqlite",
          "name": "ErrorNoMemory",
          "package": "persistent-sqlite",
          "signature": "ErrorNoMemory",
          "source": "src/Database-Sqlite.html#Error",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sqlite",
          "module": "Database.Sqlite",
          "name": "ErrorNoMemory",
          "package": "persistent-sqlite",
          "partial": "Error No Memory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-sqlite/docs/Database-Sqlite.html#v:ErrorNoMemory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sqlite",
          "name": "ErrorNotAConnection",
          "package": "persistent-sqlite",
          "signature": "ErrorNotAConnection",
          "source": "src/Database-Sqlite.html#Error",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sqlite",
          "module": "Database.Sqlite",
          "name": "ErrorNotAConnection",
          "package": "persistent-sqlite",
          "partial": "Error Not AConnection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-sqlite/docs/Database-Sqlite.html#v:ErrorNotAConnection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sqlite",
          "name": "ErrorNotFound",
          "package": "persistent-sqlite",
          "signature": "ErrorNotFound",
          "source": "src/Database-Sqlite.html#Error",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sqlite",
          "module": "Database.Sqlite",
          "name": "ErrorNotFound",
          "package": "persistent-sqlite",
          "partial": "Error Not Found",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-sqlite/docs/Database-Sqlite.html#v:ErrorNotFound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sqlite",
          "name": "ErrorOK",
          "package": "persistent-sqlite",
          "signature": "ErrorOK",
          "source": "src/Database-Sqlite.html#Error",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sqlite",
          "module": "Database.Sqlite",
          "name": "ErrorOK",
          "package": "persistent-sqlite",
          "partial": "Error OK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-sqlite/docs/Database-Sqlite.html#v:ErrorOK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sqlite",
          "name": "ErrorPermission",
          "package": "persistent-sqlite",
          "signature": "ErrorPermission",
          "source": "src/Database-Sqlite.html#Error",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sqlite",
          "module": "Database.Sqlite",
          "name": "ErrorPermission",
          "package": "persistent-sqlite",
          "partial": "Error Permission",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-sqlite/docs/Database-Sqlite.html#v:ErrorPermission"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sqlite",
          "name": "ErrorProtocol",
          "package": "persistent-sqlite",
          "signature": "ErrorProtocol",
          "source": "src/Database-Sqlite.html#Error",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sqlite",
          "module": "Database.Sqlite",
          "name": "ErrorProtocol",
          "package": "persistent-sqlite",
          "partial": "Error Protocol",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-sqlite/docs/Database-Sqlite.html#v:ErrorProtocol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sqlite",
          "name": "ErrorRange",
          "package": "persistent-sqlite",
          "signature": "ErrorRange",
          "source": "src/Database-Sqlite.html#Error",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sqlite",
          "module": "Database.Sqlite",
          "name": "ErrorRange",
          "package": "persistent-sqlite",
          "partial": "Error Range",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-sqlite/docs/Database-Sqlite.html#v:ErrorRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sqlite",
          "name": "ErrorReadOnly",
          "package": "persistent-sqlite",
          "signature": "ErrorReadOnly",
          "source": "src/Database-Sqlite.html#Error",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sqlite",
          "module": "Database.Sqlite",
          "name": "ErrorReadOnly",
          "package": "persistent-sqlite",
          "partial": "Error Read Only",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-sqlite/docs/Database-Sqlite.html#v:ErrorReadOnly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sqlite",
          "name": "ErrorRow",
          "package": "persistent-sqlite",
          "signature": "ErrorRow",
          "source": "src/Database-Sqlite.html#Error",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sqlite",
          "module": "Database.Sqlite",
          "name": "ErrorRow",
          "package": "persistent-sqlite",
          "partial": "Error Row",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-sqlite/docs/Database-Sqlite.html#v:ErrorRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sqlite",
          "name": "ErrorSchema",
          "package": "persistent-sqlite",
          "signature": "ErrorSchema",
          "source": "src/Database-Sqlite.html#Error",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sqlite",
          "module": "Database.Sqlite",
          "name": "ErrorSchema",
          "package": "persistent-sqlite",
          "partial": "Error Schema",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-sqlite/docs/Database-Sqlite.html#v:ErrorSchema"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sqlite",
          "name": "ErrorTooBig",
          "package": "persistent-sqlite",
          "signature": "ErrorTooBig",
          "source": "src/Database-Sqlite.html#Error",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sqlite",
          "module": "Database.Sqlite",
          "name": "ErrorTooBig",
          "package": "persistent-sqlite",
          "partial": "Error Too Big",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-sqlite/docs/Database-Sqlite.html#v:ErrorTooBig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sqlite",
          "name": "Row",
          "package": "persistent-sqlite",
          "signature": "Row",
          "source": "src/Database-Sqlite.html#StepResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sqlite",
          "module": "Database.Sqlite",
          "name": "Row",
          "package": "persistent-sqlite",
          "partial": "Row",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-sqlite/docs/Database-Sqlite.html#v:Row"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sqlite",
          "name": "bind",
          "package": "persistent-sqlite",
          "signature": "Statement -\u003e [PersistValue] -\u003e IO ()",
          "source": "src/Database-Sqlite.html#bind",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sqlite",
          "module": "Database.Sqlite",
          "name": "bind",
          "normalized": "Statement-\u003e[PersistValue]-\u003eIO()",
          "package": "persistent-sqlite",
          "signature": "Statement-\u003e[PersistValue]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-sqlite/docs/Database-Sqlite.html#v:bind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sqlite",
          "name": "bindBlob",
          "package": "persistent-sqlite",
          "signature": "Statement -\u003e Int -\u003e ByteString -\u003e IO ()",
          "source": "src/Database-Sqlite.html#bindBlob",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sqlite",
          "module": "Database.Sqlite",
          "name": "bindBlob",
          "normalized": "Statement-\u003eInt-\u003eByteString-\u003eIO()",
          "package": "persistent-sqlite",
          "partial": "Blob",
          "signature": "Statement-\u003eInt-\u003eByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-sqlite/docs/Database-Sqlite.html#v:bindBlob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sqlite",
          "name": "bindDouble",
          "package": "persistent-sqlite",
          "signature": "Statement -\u003e Int -\u003e Double -\u003e IO ()",
          "source": "src/Database-Sqlite.html#bindDouble",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sqlite",
          "module": "Database.Sqlite",
          "name": "bindDouble",
          "normalized": "Statement-\u003eInt-\u003eDouble-\u003eIO()",
          "package": "persistent-sqlite",
          "partial": "Double",
          "signature": "Statement-\u003eInt-\u003eDouble-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-sqlite/docs/Database-Sqlite.html#v:bindDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sqlite",
          "name": "bindInt",
          "package": "persistent-sqlite",
          "signature": "Statement -\u003e Int -\u003e Int -\u003e IO ()",
          "source": "src/Database-Sqlite.html#bindInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sqlite",
          "module": "Database.Sqlite",
          "name": "bindInt",
          "normalized": "Statement-\u003eInt-\u003eInt-\u003eIO()",
          "package": "persistent-sqlite",
          "partial": "Int",
          "signature": "Statement-\u003eInt-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-sqlite/docs/Database-Sqlite.html#v:bindInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sqlite",
          "name": "bindInt64",
          "package": "persistent-sqlite",
          "signature": "Statement -\u003e Int -\u003e Int64 -\u003e IO ()",
          "source": "src/Database-Sqlite.html#bindInt64",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sqlite",
          "module": "Database.Sqlite",
          "name": "bindInt64",
          "normalized": "Statement-\u003eInt-\u003eInt-\u003eIO()",
          "package": "persistent-sqlite",
          "partial": "Int",
          "signature": "Statement-\u003eInt-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-sqlite/docs/Database-Sqlite.html#v:bindInt64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sqlite",
          "name": "bindNull",
          "package": "persistent-sqlite",
          "signature": "Statement -\u003e Int -\u003e IO ()",
          "source": "src/Database-Sqlite.html#bindNull",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sqlite",
          "module": "Database.Sqlite",
          "name": "bindNull",
          "normalized": "Statement-\u003eInt-\u003eIO()",
          "package": "persistent-sqlite",
          "partial": "Null",
          "signature": "Statement-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-sqlite/docs/Database-Sqlite.html#v:bindNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sqlite",
          "name": "bindText",
          "package": "persistent-sqlite",
          "signature": "Statement -\u003e Int -\u003e Text -\u003e IO ()",
          "source": "src/Database-Sqlite.html#bindText",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sqlite",
          "module": "Database.Sqlite",
          "name": "bindText",
          "normalized": "Statement-\u003eInt-\u003eText-\u003eIO()",
          "package": "persistent-sqlite",
          "partial": "Text",
          "signature": "Statement-\u003eInt-\u003eText-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-sqlite/docs/Database-Sqlite.html#v:bindText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sqlite",
          "name": "changes",
          "package": "persistent-sqlite",
          "signature": "Connection -\u003e IO Int64",
          "source": "src/Database-Sqlite.html#changes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sqlite",
          "module": "Database.Sqlite",
          "name": "changes",
          "normalized": "Connection-\u003eIO Int",
          "package": "persistent-sqlite",
          "signature": "Connection-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-sqlite/docs/Database-Sqlite.html#v:changes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sqlite",
          "name": "close",
          "package": "persistent-sqlite",
          "signature": "Connection -\u003e IO ()",
          "source": "src/Database-Sqlite.html#close",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sqlite",
          "module": "Database.Sqlite",
          "name": "close",
          "normalized": "Connection-\u003eIO()",
          "package": "persistent-sqlite",
          "signature": "Connection-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-sqlite/docs/Database-Sqlite.html#v:close"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sqlite",
          "name": "column",
          "package": "persistent-sqlite",
          "signature": "Statement -\u003e Int -\u003e IO PersistValue",
          "source": "src/Database-Sqlite.html#column",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sqlite",
          "module": "Database.Sqlite",
          "name": "column",
          "normalized": "Statement-\u003eInt-\u003eIO PersistValue",
          "package": "persistent-sqlite",
          "signature": "Statement-\u003eInt-\u003eIO PersistValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-sqlite/docs/Database-Sqlite.html#v:column"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sqlite",
          "name": "columns",
          "package": "persistent-sqlite",
          "signature": "Statement -\u003e IO [PersistValue]",
          "source": "src/Database-Sqlite.html#columns",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sqlite",
          "module": "Database.Sqlite",
          "name": "columns",
          "normalized": "Statement-\u003eIO[PersistValue]",
          "package": "persistent-sqlite",
          "signature": "Statement-\u003eIO[PersistValue]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-sqlite/docs/Database-Sqlite.html#v:columns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sqlite",
          "name": "finalize",
          "package": "persistent-sqlite",
          "signature": "Statement -\u003e IO ()",
          "source": "src/Database-Sqlite.html#finalize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sqlite",
          "module": "Database.Sqlite",
          "name": "finalize",
          "normalized": "Statement-\u003eIO()",
          "package": "persistent-sqlite",
          "signature": "Statement-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-sqlite/docs/Database-Sqlite.html#v:finalize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sqlite",
          "name": "open",
          "package": "persistent-sqlite",
          "signature": "Text -\u003e IO Connection",
          "source": "src/Database-Sqlite.html#open",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sqlite",
          "module": "Database.Sqlite",
          "name": "open",
          "normalized": "Text-\u003eIO Connection",
          "package": "persistent-sqlite",
          "signature": "Text-\u003eIO Connection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-sqlite/docs/Database-Sqlite.html#v:open"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sqlite",
          "name": "prepare",
          "package": "persistent-sqlite",
          "signature": "Connection -\u003e Text -\u003e IO Statement",
          "source": "src/Database-Sqlite.html#prepare",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sqlite",
          "module": "Database.Sqlite",
          "name": "prepare",
          "normalized": "Connection-\u003eText-\u003eIO Statement",
          "package": "persistent-sqlite",
          "signature": "Connection-\u003eText-\u003eIO Statement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-sqlite/docs/Database-Sqlite.html#v:prepare"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sqlite",
          "name": "reset",
          "package": "persistent-sqlite",
          "signature": "Connection -\u003e Statement -\u003e IO ()",
          "source": "src/Database-Sqlite.html#reset",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sqlite",
          "module": "Database.Sqlite",
          "name": "reset",
          "normalized": "Connection-\u003eStatement-\u003eIO()",
          "package": "persistent-sqlite",
          "signature": "Connection-\u003eStatement-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-sqlite/docs/Database-Sqlite.html#v:reset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sqlite",
          "name": "step",
          "package": "persistent-sqlite",
          "signature": "Statement -\u003e IO StepResult",
          "source": "src/Database-Sqlite.html#step",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sqlite",
          "module": "Database.Sqlite",
          "name": "step",
          "normalized": "Statement-\u003eIO StepResult",
          "package": "persistent-sqlite",
          "signature": "Statement-\u003eIO StepResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-sqlite/docs/Database-Sqlite.html#v:step"
      }
    }
  ]
]