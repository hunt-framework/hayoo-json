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
        "word": "HDBC-sqlite3"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHDBC driver interface for Sqlite 3.x.\n\u003c/p\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.HDBC.Sqlite3",
          "name": "Sqlite3",
          "package": "HDBC-sqlite3",
          "source": "src/Database-HDBC-Sqlite3.html",
          "type": "module"
        },
        "index": {
          "description": "HDBC driver interface for Sqlite Written by John Goerzen jgoerzen@complete.org",
          "hierarchy": "Database HDBC Sqlite3",
          "module": "Database.HDBC.Sqlite3",
          "name": "Sqlite3",
          "package": "HDBC-sqlite3",
          "partial": "Sqlite",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HDBC-sqlite3/docs/Database-HDBC-Sqlite3.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HDBC.Sqlite3",
          "name": "Connection",
          "package": "HDBC-sqlite3",
          "source": "src/Database-HDBC-Sqlite3-ConnectionImpl.html#Connection",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HDBC Sqlite3",
          "module": "Database.HDBC.Sqlite3",
          "name": "Connection",
          "package": "HDBC-sqlite3",
          "partial": "Connection",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HDBC-sqlite3/docs/Database-HDBC-Sqlite3.html#t:Connection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConnect to an Sqlite version 3 database.  The only parameter needed is\nthe filename of the database to connect to.\n\u003c/p\u003e\u003cp\u003eAll database accessor functions are provided in the main HDBC module. \n\u003c/p\u003e",
          "module": "Database.HDBC.Sqlite3",
          "name": "connectSqlite3",
          "package": "HDBC-sqlite3",
          "signature": "FilePath -\u003e IO Connection",
          "source": "src/Database-HDBC-Sqlite3-Connection.html#connectSqlite3",
          "type": "function"
        },
        "index": {
          "description": "Connect to an Sqlite version database The only parameter needed is the filename of the database to connect to All database accessor functions are provided in the main HDBC module",
          "hierarchy": "Database HDBC Sqlite3",
          "module": "Database.HDBC.Sqlite3",
          "name": "connectSqlite3",
          "normalized": "FilePath-\u003eIO Connection",
          "package": "HDBC-sqlite3",
          "partial": "Sqlite",
          "signature": "FilePath-\u003eIO Connection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HDBC-sqlite3/docs/Database-HDBC-Sqlite3.html#v:connectSqlite3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConnects to a Sqlite v3 database as with \u003ccode\u003e\u003ca\u003econnectSqlite3\u003c/a\u003e\u003c/code\u003e, but\ninstead of converting the supplied \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e to a C String by performing\na conversion to Unicode, instead converts it by simply dropping all bits past\nthe eighth.  This may be useful in rare situations\nif your application or filesystemare not running in Unicode space. \n\u003c/p\u003e",
          "module": "Database.HDBC.Sqlite3",
          "name": "connectSqlite3Raw",
          "package": "HDBC-sqlite3",
          "signature": "FilePath -\u003e IO Connection",
          "source": "src/Database-HDBC-Sqlite3-Connection.html#connectSqlite3Raw",
          "type": "function"
        },
        "index": {
          "description": "Connects to Sqlite v3 database as with connectSqlite3 but instead of converting the supplied FilePath to String by performing conversion to Unicode instead converts it by simply dropping all bits past the eighth This may be useful in rare situations if your application or filesystemare not running in Unicode space",
          "hierarchy": "Database HDBC Sqlite3",
          "module": "Database.HDBC.Sqlite3",
          "name": "connectSqlite3Raw",
          "normalized": "FilePath-\u003eIO Connection",
          "package": "HDBC-sqlite3",
          "partial": "Sqlite Raw",
          "signature": "FilePath-\u003eIO Connection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HDBC-sqlite3/docs/Database-HDBC-Sqlite3.html#v:connectSqlite3Raw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the timeout for a lock before returning a busy error.\n Give the time in milliseconds.\n\u003c/p\u003e",
          "module": "Database.HDBC.Sqlite3",
          "name": "setBusyTimeout",
          "package": "HDBC-sqlite3",
          "signature": "Connection -\u003e CInt -\u003e IO ()",
          "source": "src/Database-HDBC-Sqlite3-ConnectionImpl.html#setBusyTimeout",
          "type": "function"
        },
        "index": {
          "description": "Sets the timeout for lock before returning busy error Give the time in milliseconds",
          "hierarchy": "Database HDBC Sqlite3",
          "module": "Database.HDBC.Sqlite3",
          "name": "setBusyTimeout",
          "normalized": "Connection-\u003eCInt-\u003eIO()",
          "package": "HDBC-sqlite3",
          "partial": "Busy Timeout",
          "signature": "Connection-\u003eCInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HDBC-sqlite3/docs/Database-HDBC-Sqlite3.html#v:setBusyTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCallback routine requested an abort\n\u003c/p\u003e",
          "module": "Database.HDBC.Sqlite3",
          "name": "sqlite_ABORT",
          "package": "HDBC-sqlite3",
          "signature": "Int",
          "source": "src/Database-HDBC-Sqlite3-Consts.html#sqlite_ABORT",
          "type": "function"
        },
        "index": {
          "description": "Callback routine requested an abort",
          "hierarchy": "Database HDBC Sqlite3",
          "module": "Database.HDBC.Sqlite3",
          "name": "sqlite_ABORT",
          "package": "HDBC-sqlite3",
          "partial": "ABORT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HDBC-sqlite3/docs/Database-HDBC-Sqlite3.html#v:sqlite_ABORT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAuthorization denied\n\u003c/p\u003e",
          "module": "Database.HDBC.Sqlite3",
          "name": "sqlite_AUTH",
          "package": "HDBC-sqlite3",
          "signature": "Int",
          "source": "src/Database-HDBC-Sqlite3-Consts.html#sqlite_AUTH",
          "type": "function"
        },
        "index": {
          "description": "Authorization denied",
          "hierarchy": "Database HDBC Sqlite3",
          "module": "Database.HDBC.Sqlite3",
          "name": "sqlite_AUTH",
          "package": "HDBC-sqlite3",
          "partial": "AUTH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HDBC-sqlite3/docs/Database-HDBC-Sqlite3.html#v:sqlite_AUTH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe database file is locked\n\u003c/p\u003e",
          "module": "Database.HDBC.Sqlite3",
          "name": "sqlite_BUSY",
          "package": "HDBC-sqlite3",
          "signature": "Int",
          "source": "src/Database-HDBC-Sqlite3-Consts.html#sqlite_BUSY",
          "type": "function"
        },
        "index": {
          "description": "The database file is locked",
          "hierarchy": "Database HDBC Sqlite3",
          "module": "Database.HDBC.Sqlite3",
          "name": "sqlite_BUSY",
          "package": "HDBC-sqlite3",
          "partial": "BUSY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HDBC-sqlite3/docs/Database-HDBC-Sqlite3.html#v:sqlite_BUSY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnable to open the database file\n\u003c/p\u003e",
          "module": "Database.HDBC.Sqlite3",
          "name": "sqlite_CANTOPEN",
          "package": "HDBC-sqlite3",
          "signature": "Int",
          "source": "src/Database-HDBC-Sqlite3-Consts.html#sqlite_CANTOPEN",
          "type": "function"
        },
        "index": {
          "description": "Unable to open the database file",
          "hierarchy": "Database HDBC Sqlite3",
          "module": "Database.HDBC.Sqlite3",
          "name": "sqlite_CANTOPEN",
          "package": "HDBC-sqlite3",
          "partial": "CANTOPEN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HDBC-sqlite3/docs/Database-HDBC-Sqlite3.html#v:sqlite_CANTOPEN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbort due to constraint violation\n\u003c/p\u003e",
          "module": "Database.HDBC.Sqlite3",
          "name": "sqlite_CONSTRAINT",
          "package": "HDBC-sqlite3",
          "signature": "Int",
          "source": "src/Database-HDBC-Sqlite3-Consts.html#sqlite_CONSTRAINT",
          "type": "function"
        },
        "index": {
          "description": "Abort due to constraint violation",
          "hierarchy": "Database HDBC Sqlite3",
          "module": "Database.HDBC.Sqlite3",
          "name": "sqlite_CONSTRAINT",
          "package": "HDBC-sqlite3",
          "partial": "CONSTRAINT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HDBC-sqlite3/docs/Database-HDBC-Sqlite3.html#v:sqlite_CONSTRAINT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe database disk image is malformed\n\u003c/p\u003e",
          "module": "Database.HDBC.Sqlite3",
          "name": "sqlite_CORRUPT",
          "package": "HDBC-sqlite3",
          "signature": "Int",
          "source": "src/Database-HDBC-Sqlite3-Consts.html#sqlite_CORRUPT",
          "type": "function"
        },
        "index": {
          "description": "The database disk image is malformed",
          "hierarchy": "Database HDBC Sqlite3",
          "module": "Database.HDBC.Sqlite3",
          "name": "sqlite_CORRUPT",
          "package": "HDBC-sqlite3",
          "partial": "CORRUPT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HDBC-sqlite3/docs/Database-HDBC-Sqlite3.html#v:sqlite_CORRUPT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esqlite_step() has finished executing\n\u003c/p\u003e",
          "module": "Database.HDBC.Sqlite3",
          "name": "sqlite_DONE",
          "package": "HDBC-sqlite3",
          "signature": "Int",
          "source": "src/Database-HDBC-Sqlite3-Consts.html#sqlite_DONE",
          "type": "function"
        },
        "index": {
          "description": "sqlite step has finished executing",
          "hierarchy": "Database HDBC Sqlite3",
          "module": "Database.HDBC.Sqlite3",
          "name": "sqlite_DONE",
          "package": "HDBC-sqlite3",
          "partial": "DONE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HDBC-sqlite3/docs/Database-HDBC-Sqlite3.html#v:sqlite_DONE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(Internal Only) Database table is empty\n\u003c/p\u003e",
          "module": "Database.HDBC.Sqlite3",
          "name": "sqlite_EMPTY",
          "package": "HDBC-sqlite3",
          "signature": "Int",
          "source": "src/Database-HDBC-Sqlite3-Consts.html#sqlite_EMPTY",
          "type": "function"
        },
        "index": {
          "description": "Internal Only Database table is empty",
          "hierarchy": "Database HDBC Sqlite3",
          "module": "Database.HDBC.Sqlite3",
          "name": "sqlite_EMPTY",
          "package": "HDBC-sqlite3",
          "partial": "EMPTY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HDBC-sqlite3/docs/Database-HDBC-Sqlite3.html#v:sqlite_EMPTY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSQL error or missing database\n\u003c/p\u003e",
          "module": "Database.HDBC.Sqlite3",
          "name": "sqlite_ERROR",
          "package": "HDBC-sqlite3",
          "signature": "Int",
          "source": "src/Database-HDBC-Sqlite3-Consts.html#sqlite_ERROR",
          "type": "function"
        },
        "index": {
          "description": "SQL error or missing database",
          "hierarchy": "Database HDBC Sqlite3",
          "module": "Database.HDBC.Sqlite3",
          "name": "sqlite_ERROR",
          "package": "HDBC-sqlite3",
          "partial": "ERROR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HDBC-sqlite3/docs/Database-HDBC-Sqlite3.html#v:sqlite_ERROR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsertion failed because database is full\n\u003c/p\u003e",
          "module": "Database.HDBC.Sqlite3",
          "name": "sqlite_FULL",
          "package": "HDBC-sqlite3",
          "signature": "Int",
          "source": "src/Database-HDBC-Sqlite3-Consts.html#sqlite_FULL",
          "type": "function"
        },
        "index": {
          "description": "Insertion failed because database is full",
          "hierarchy": "Database HDBC Sqlite3",
          "module": "Database.HDBC.Sqlite3",
          "name": "sqlite_FULL",
          "package": "HDBC-sqlite3",
          "partial": "FULL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HDBC-sqlite3/docs/Database-HDBC-Sqlite3.html#v:sqlite_FULL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn internal logic error in SQLite\n\u003c/p\u003e",
          "module": "Database.HDBC.Sqlite3",
          "name": "sqlite_INTERNAL",
          "package": "HDBC-sqlite3",
          "signature": "Int",
          "source": "src/Database-HDBC-Sqlite3-Consts.html#sqlite_INTERNAL",
          "type": "function"
        },
        "index": {
          "description": "An internal logic error in SQLite",
          "hierarchy": "Database HDBC Sqlite3",
          "module": "Database.HDBC.Sqlite3",
          "name": "sqlite_INTERNAL",
          "package": "HDBC-sqlite3",
          "partial": "INTERNAL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HDBC-sqlite3/docs/Database-HDBC-Sqlite3.html#v:sqlite_INTERNAL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOperation terminated by sqlite_interrupt()\n\u003c/p\u003e",
          "module": "Database.HDBC.Sqlite3",
          "name": "sqlite_INTERRUPT",
          "package": "HDBC-sqlite3",
          "signature": "Int",
          "source": "src/Database-HDBC-Sqlite3-Consts.html#sqlite_INTERRUPT",
          "type": "function"
        },
        "index": {
          "description": "Operation terminated by sqlite interrupt",
          "hierarchy": "Database HDBC Sqlite3",
          "module": "Database.HDBC.Sqlite3",
          "name": "sqlite_INTERRUPT",
          "package": "HDBC-sqlite3",
          "partial": "INTERRUPT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HDBC-sqlite3/docs/Database-HDBC-Sqlite3.html#v:sqlite_INTERRUPT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSome kind of disk I/O error occurred\n\u003c/p\u003e",
          "module": "Database.HDBC.Sqlite3",
          "name": "sqlite_IOERR",
          "package": "HDBC-sqlite3",
          "signature": "Int",
          "source": "src/Database-HDBC-Sqlite3-Consts.html#sqlite_IOERR",
          "type": "function"
        },
        "index": {
          "description": "Some kind of disk error occurred",
          "hierarchy": "Database HDBC Sqlite3",
          "module": "Database.HDBC.Sqlite3",
          "name": "sqlite_IOERR",
          "package": "HDBC-sqlite3",
          "partial": "IOERR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HDBC-sqlite3/docs/Database-HDBC-Sqlite3.html#v:sqlite_IOERR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA table in the database is locked\n\u003c/p\u003e",
          "module": "Database.HDBC.Sqlite3",
          "name": "sqlite_LOCKED",
          "package": "HDBC-sqlite3",
          "signature": "Int",
          "source": "src/Database-HDBC-Sqlite3-Consts.html#sqlite_LOCKED",
          "type": "function"
        },
        "index": {
          "description": "table in the database is locked",
          "hierarchy": "Database HDBC Sqlite3",
          "module": "Database.HDBC.Sqlite3",
          "name": "sqlite_LOCKED",
          "package": "HDBC-sqlite3",
          "partial": "LOCKED",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HDBC-sqlite3/docs/Database-HDBC-Sqlite3.html#v:sqlite_LOCKED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type mismatch\n\u003c/p\u003e",
          "module": "Database.HDBC.Sqlite3",
          "name": "sqlite_MISMATCH",
          "package": "HDBC-sqlite3",
          "signature": "Int",
          "source": "src/Database-HDBC-Sqlite3-Consts.html#sqlite_MISMATCH",
          "type": "function"
        },
        "index": {
          "description": "Data type mismatch",
          "hierarchy": "Database HDBC Sqlite3",
          "module": "Database.HDBC.Sqlite3",
          "name": "sqlite_MISMATCH",
          "package": "HDBC-sqlite3",
          "partial": "MISMATCH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HDBC-sqlite3/docs/Database-HDBC-Sqlite3.html#v:sqlite_MISMATCH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLibrary used incorrectly\n\u003c/p\u003e",
          "module": "Database.HDBC.Sqlite3",
          "name": "sqlite_MISUSE",
          "package": "HDBC-sqlite3",
          "signature": "Int",
          "source": "src/Database-HDBC-Sqlite3-Consts.html#sqlite_MISUSE",
          "type": "function"
        },
        "index": {
          "description": "Library used incorrectly",
          "hierarchy": "Database HDBC Sqlite3",
          "module": "Database.HDBC.Sqlite3",
          "name": "sqlite_MISUSE",
          "package": "HDBC-sqlite3",
          "partial": "MISUSE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HDBC-sqlite3/docs/Database-HDBC-Sqlite3.html#v:sqlite_MISUSE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUses OS features not supported on host\n\u003c/p\u003e",
          "module": "Database.HDBC.Sqlite3",
          "name": "sqlite_NOLFS",
          "package": "HDBC-sqlite3",
          "signature": "Int",
          "source": "src/Database-HDBC-Sqlite3-Consts.html#sqlite_NOLFS",
          "type": "function"
        },
        "index": {
          "description": "Uses OS features not supported on host",
          "hierarchy": "Database HDBC Sqlite3",
          "module": "Database.HDBC.Sqlite3",
          "name": "sqlite_NOLFS",
          "package": "HDBC-sqlite3",
          "partial": "NOLFS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HDBC-sqlite3/docs/Database-HDBC-Sqlite3.html#v:sqlite_NOLFS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA malloc() failed\n\u003c/p\u003e",
          "module": "Database.HDBC.Sqlite3",
          "name": "sqlite_NOMEM",
          "package": "HDBC-sqlite3",
          "signature": "Int",
          "source": "src/Database-HDBC-Sqlite3-Consts.html#sqlite_NOMEM",
          "type": "function"
        },
        "index": {
          "description": "malloc failed",
          "hierarchy": "Database HDBC Sqlite3",
          "module": "Database.HDBC.Sqlite3",
          "name": "sqlite_NOMEM",
          "package": "HDBC-sqlite3",
          "partial": "NOMEM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HDBC-sqlite3/docs/Database-HDBC-Sqlite3.html#v:sqlite_NOMEM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(Internal Only) Table or record not found\n\u003c/p\u003e",
          "module": "Database.HDBC.Sqlite3",
          "name": "sqlite_NOTFOUND",
          "package": "HDBC-sqlite3",
          "signature": "Int",
          "source": "src/Database-HDBC-Sqlite3-Consts.html#sqlite_NOTFOUND",
          "type": "function"
        },
        "index": {
          "description": "Internal Only Table or record not found",
          "hierarchy": "Database HDBC Sqlite3",
          "module": "Database.HDBC.Sqlite3",
          "name": "sqlite_NOTFOUND",
          "package": "HDBC-sqlite3",
          "partial": "NOTFOUND",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HDBC-sqlite3/docs/Database-HDBC-Sqlite3.html#v:sqlite_NOTFOUND"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSuccessful result\n\u003c/p\u003e",
          "module": "Database.HDBC.Sqlite3",
          "name": "sqlite_OK",
          "package": "HDBC-sqlite3",
          "signature": "Int",
          "source": "src/Database-HDBC-Sqlite3-Consts.html#sqlite_OK",
          "type": "function"
        },
        "index": {
          "description": "Successful result",
          "hierarchy": "Database HDBC Sqlite3",
          "module": "Database.HDBC.Sqlite3",
          "name": "sqlite_OK",
          "package": "HDBC-sqlite3",
          "partial": "OK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HDBC-sqlite3/docs/Database-HDBC-Sqlite3.html#v:sqlite_OK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccess permission denied\n\u003c/p\u003e",
          "module": "Database.HDBC.Sqlite3",
          "name": "sqlite_PERM",
          "package": "HDBC-sqlite3",
          "signature": "Int",
          "source": "src/Database-HDBC-Sqlite3-Consts.html#sqlite_PERM",
          "type": "function"
        },
        "index": {
          "description": "Access permission denied",
          "hierarchy": "Database HDBC Sqlite3",
          "module": "Database.HDBC.Sqlite3",
          "name": "sqlite_PERM",
          "package": "HDBC-sqlite3",
          "partial": "PERM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HDBC-sqlite3/docs/Database-HDBC-Sqlite3.html#v:sqlite_PERM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDatabase lock protocol error\n\u003c/p\u003e",
          "module": "Database.HDBC.Sqlite3",
          "name": "sqlite_PROTOCOL",
          "package": "HDBC-sqlite3",
          "signature": "Int",
          "source": "src/Database-HDBC-Sqlite3-Consts.html#sqlite_PROTOCOL",
          "type": "function"
        },
        "index": {
          "description": "Database lock protocol error",
          "hierarchy": "Database HDBC Sqlite3",
          "module": "Database.HDBC.Sqlite3",
          "name": "sqlite_PROTOCOL",
          "package": "HDBC-sqlite3",
          "partial": "PROTOCOL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HDBC-sqlite3/docs/Database-HDBC-Sqlite3.html#v:sqlite_PROTOCOL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempt to write a readonly database\n\u003c/p\u003e",
          "module": "Database.HDBC.Sqlite3",
          "name": "sqlite_READONLY",
          "package": "HDBC-sqlite3",
          "signature": "Int",
          "source": "src/Database-HDBC-Sqlite3-Consts.html#sqlite_READONLY",
          "type": "function"
        },
        "index": {
          "description": "Attempt to write readonly database",
          "hierarchy": "Database HDBC Sqlite3",
          "module": "Database.HDBC.Sqlite3",
          "name": "sqlite_READONLY",
          "package": "HDBC-sqlite3",
          "partial": "READONLY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HDBC-sqlite3/docs/Database-HDBC-Sqlite3.html#v:sqlite_READONLY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esqlite_step() has another row ready\n\u003c/p\u003e",
          "module": "Database.HDBC.Sqlite3",
          "name": "sqlite_ROW",
          "package": "HDBC-sqlite3",
          "signature": "Int",
          "source": "src/Database-HDBC-Sqlite3-Consts.html#sqlite_ROW",
          "type": "function"
        },
        "index": {
          "description": "sqlite step has another row ready",
          "hierarchy": "Database HDBC Sqlite3",
          "module": "Database.HDBC.Sqlite3",
          "name": "sqlite_ROW",
          "package": "HDBC-sqlite3",
          "partial": "ROW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HDBC-sqlite3/docs/Database-HDBC-Sqlite3.html#v:sqlite_ROW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe database schema changed\n\u003c/p\u003e",
          "module": "Database.HDBC.Sqlite3",
          "name": "sqlite_SCHEMA",
          "package": "HDBC-sqlite3",
          "signature": "Int",
          "source": "src/Database-HDBC-Sqlite3-Consts.html#sqlite_SCHEMA",
          "type": "function"
        },
        "index": {
          "description": "The database schema changed",
          "hierarchy": "Database HDBC Sqlite3",
          "module": "Database.HDBC.Sqlite3",
          "name": "sqlite_SCHEMA",
          "package": "HDBC-sqlite3",
          "partial": "SCHEMA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HDBC-sqlite3/docs/Database-HDBC-Sqlite3.html#v:sqlite_SCHEMA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eToo much data for one row of a table\n\u003c/p\u003e",
          "module": "Database.HDBC.Sqlite3",
          "name": "sqlite_TOOBIG",
          "package": "HDBC-sqlite3",
          "signature": "Int",
          "source": "src/Database-HDBC-Sqlite3-Consts.html#sqlite_TOOBIG",
          "type": "function"
        },
        "index": {
          "description": "Too much data for one row of table",
          "hierarchy": "Database HDBC Sqlite3",
          "module": "Database.HDBC.Sqlite3",
          "name": "sqlite_TOOBIG",
          "package": "HDBC-sqlite3",
          "partial": "TOOBIG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HDBC-sqlite3/docs/Database-HDBC-Sqlite3.html#v:sqlite_TOOBIG"
      }
    }
  ]
]