[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC-sqlite3/docs/Database-HDBC-Sqlite3.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHDBC driver interface for Sqlite 3.x.\n\u003c/p\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.HDBC.Sqlite3",
        "fct-package": "HDBC-sqlite3",
        "fct-signature": "module",
        "fct-source": "src/Database-HDBC-Sqlite3.html",
        "fct-type": "module",
        "title": "Sqlite3"
      },
      "index": {
        "description": "HDBC driver interface for Sqlite Written by John Goerzen jgoerzen@complete.org",
        "hierarchy": "Database HDBC Sqlite3",
        "module": "Database.HDBC.Sqlite3",
        "name": "Sqlite3",
        "normalized": "",
        "package": "HDBC-sqlite3",
        "partial": "Sqlite",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC-sqlite3/docs/Database-HDBC-Sqlite3.html#t:Connection",
      "description": {
        "fct-module": "Database.HDBC.Sqlite3",
        "fct-package": "HDBC-sqlite3",
        "fct-signature": "data",
        "fct-source": "src/Database-HDBC-Sqlite3-ConnectionImpl.html#Connection",
        "fct-type": "data",
        "title": "Connection"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBC Sqlite3",
        "module": "Database.HDBC.Sqlite3",
        "name": "Connection",
        "normalized": "",
        "package": "HDBC-sqlite3",
        "partial": "Connection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC-sqlite3/docs/Database-HDBC-Sqlite3.html#v:connectSqlite3",
      "description": {
        "fct-descr": "\u003cp\u003eConnect to an Sqlite version 3 database.  The only parameter needed is\nthe filename of the database to connect to.\n\u003c/p\u003e\u003cp\u003eAll database accessor functions are provided in the main HDBC module. \n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Sqlite3",
        "fct-package": "HDBC-sqlite3",
        "fct-signature": "FilePath -\u003e IO Connection",
        "fct-source": "src/Database-HDBC-Sqlite3-Connection.html#connectSqlite3",
        "fct-type": "function",
        "title": "connectSqlite3"
      },
      "index": {
        "description": "Connect to an Sqlite version database The only parameter needed is the filename of the database to connect to All database accessor functions are provided in the main HDBC module",
        "hierarchy": "Database HDBC Sqlite3",
        "module": "Database.HDBC.Sqlite3",
        "name": "connectSqlite3",
        "normalized": "FilePath-\u003eIO Connection",
        "package": "HDBC-sqlite3",
        "partial": "Sqlite",
        "signature": "FilePath-\u003eIO Connection"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC-sqlite3/docs/Database-HDBC-Sqlite3.html#v:connectSqlite3Raw",
      "description": {
        "fct-descr": "\u003cp\u003eConnects to a Sqlite v3 database as with \u003ccode\u003e\u003ca\u003econnectSqlite3\u003c/a\u003e\u003c/code\u003e, but\ninstead of converting the supplied \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e to a C String by performing\na conversion to Unicode, instead converts it by simply dropping all bits past\nthe eighth.  This may be useful in rare situations\nif your application or filesystemare not running in Unicode space. \n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Sqlite3",
        "fct-package": "HDBC-sqlite3",
        "fct-signature": "FilePath -\u003e IO Connection",
        "fct-source": "src/Database-HDBC-Sqlite3-Connection.html#connectSqlite3Raw",
        "fct-type": "function",
        "title": "connectSqlite3Raw"
      },
      "index": {
        "description": "Connects to Sqlite v3 database as with connectSqlite3 but instead of converting the supplied FilePath to String by performing conversion to Unicode instead converts it by simply dropping all bits past the eighth This may be useful in rare situations if your application or filesystemare not running in Unicode space",
        "hierarchy": "Database HDBC Sqlite3",
        "module": "Database.HDBC.Sqlite3",
        "name": "connectSqlite3Raw",
        "normalized": "FilePath-\u003eIO Connection",
        "package": "HDBC-sqlite3",
        "partial": "Sqlite Raw",
        "signature": "FilePath-\u003eIO Connection"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC-sqlite3/docs/Database-HDBC-Sqlite3.html#v:setBusyTimeout",
      "description": {
        "fct-descr": "\u003cp\u003eSets the timeout for a lock before returning a busy error.\n Give the time in milliseconds.\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Sqlite3",
        "fct-package": "HDBC-sqlite3",
        "fct-signature": "Connection -\u003e CInt -\u003e IO ()",
        "fct-source": "src/Database-HDBC-Sqlite3-ConnectionImpl.html#setBusyTimeout",
        "fct-type": "function",
        "title": "setBusyTimeout"
      },
      "index": {
        "description": "Sets the timeout for lock before returning busy error Give the time in milliseconds",
        "hierarchy": "Database HDBC Sqlite3",
        "module": "Database.HDBC.Sqlite3",
        "name": "setBusyTimeout",
        "normalized": "Connection-\u003eCInt-\u003eIO()",
        "package": "HDBC-sqlite3",
        "partial": "Busy Timeout",
        "signature": "Connection-\u003eCInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC-sqlite3/docs/Database-HDBC-Sqlite3.html#v:sqlite_ABORT",
      "description": {
        "fct-descr": "\u003cp\u003eCallback routine requested an abort\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Sqlite3",
        "fct-package": "HDBC-sqlite3",
        "fct-signature": "Int",
        "fct-source": "src/Database-HDBC-Sqlite3-Consts.html#sqlite_ABORT",
        "fct-type": "function",
        "title": "sqlite_ABORT"
      },
      "index": {
        "description": "Callback routine requested an abort",
        "hierarchy": "Database HDBC Sqlite3",
        "module": "Database.HDBC.Sqlite3",
        "name": "sqlite_ABORT",
        "normalized": "",
        "package": "HDBC-sqlite3",
        "partial": "ABORT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC-sqlite3/docs/Database-HDBC-Sqlite3.html#v:sqlite_AUTH",
      "description": {
        "fct-descr": "\u003cp\u003eAuthorization denied\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Sqlite3",
        "fct-package": "HDBC-sqlite3",
        "fct-signature": "Int",
        "fct-source": "src/Database-HDBC-Sqlite3-Consts.html#sqlite_AUTH",
        "fct-type": "function",
        "title": "sqlite_AUTH"
      },
      "index": {
        "description": "Authorization denied",
        "hierarchy": "Database HDBC Sqlite3",
        "module": "Database.HDBC.Sqlite3",
        "name": "sqlite_AUTH",
        "normalized": "",
        "package": "HDBC-sqlite3",
        "partial": "AUTH",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC-sqlite3/docs/Database-HDBC-Sqlite3.html#v:sqlite_BUSY",
      "description": {
        "fct-descr": "\u003cp\u003eThe database file is locked\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Sqlite3",
        "fct-package": "HDBC-sqlite3",
        "fct-signature": "Int",
        "fct-source": "src/Database-HDBC-Sqlite3-Consts.html#sqlite_BUSY",
        "fct-type": "function",
        "title": "sqlite_BUSY"
      },
      "index": {
        "description": "The database file is locked",
        "hierarchy": "Database HDBC Sqlite3",
        "module": "Database.HDBC.Sqlite3",
        "name": "sqlite_BUSY",
        "normalized": "",
        "package": "HDBC-sqlite3",
        "partial": "BUSY",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC-sqlite3/docs/Database-HDBC-Sqlite3.html#v:sqlite_CANTOPEN",
      "description": {
        "fct-descr": "\u003cp\u003eUnable to open the database file\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Sqlite3",
        "fct-package": "HDBC-sqlite3",
        "fct-signature": "Int",
        "fct-source": "src/Database-HDBC-Sqlite3-Consts.html#sqlite_CANTOPEN",
        "fct-type": "function",
        "title": "sqlite_CANTOPEN"
      },
      "index": {
        "description": "Unable to open the database file",
        "hierarchy": "Database HDBC Sqlite3",
        "module": "Database.HDBC.Sqlite3",
        "name": "sqlite_CANTOPEN",
        "normalized": "",
        "package": "HDBC-sqlite3",
        "partial": "CANTOPEN",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC-sqlite3/docs/Database-HDBC-Sqlite3.html#v:sqlite_CONSTRAINT",
      "description": {
        "fct-descr": "\u003cp\u003eAbort due to constraint violation\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Sqlite3",
        "fct-package": "HDBC-sqlite3",
        "fct-signature": "Int",
        "fct-source": "src/Database-HDBC-Sqlite3-Consts.html#sqlite_CONSTRAINT",
        "fct-type": "function",
        "title": "sqlite_CONSTRAINT"
      },
      "index": {
        "description": "Abort due to constraint violation",
        "hierarchy": "Database HDBC Sqlite3",
        "module": "Database.HDBC.Sqlite3",
        "name": "sqlite_CONSTRAINT",
        "normalized": "",
        "package": "HDBC-sqlite3",
        "partial": "CONSTRAINT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC-sqlite3/docs/Database-HDBC-Sqlite3.html#v:sqlite_CORRUPT",
      "description": {
        "fct-descr": "\u003cp\u003eThe database disk image is malformed\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Sqlite3",
        "fct-package": "HDBC-sqlite3",
        "fct-signature": "Int",
        "fct-source": "src/Database-HDBC-Sqlite3-Consts.html#sqlite_CORRUPT",
        "fct-type": "function",
        "title": "sqlite_CORRUPT"
      },
      "index": {
        "description": "The database disk image is malformed",
        "hierarchy": "Database HDBC Sqlite3",
        "module": "Database.HDBC.Sqlite3",
        "name": "sqlite_CORRUPT",
        "normalized": "",
        "package": "HDBC-sqlite3",
        "partial": "CORRUPT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC-sqlite3/docs/Database-HDBC-Sqlite3.html#v:sqlite_DONE",
      "description": {
        "fct-descr": "\u003cp\u003esqlite_step() has finished executing\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Sqlite3",
        "fct-package": "HDBC-sqlite3",
        "fct-signature": "Int",
        "fct-source": "src/Database-HDBC-Sqlite3-Consts.html#sqlite_DONE",
        "fct-type": "function",
        "title": "sqlite_DONE"
      },
      "index": {
        "description": "sqlite step has finished executing",
        "hierarchy": "Database HDBC Sqlite3",
        "module": "Database.HDBC.Sqlite3",
        "name": "sqlite_DONE",
        "normalized": "",
        "package": "HDBC-sqlite3",
        "partial": "DONE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC-sqlite3/docs/Database-HDBC-Sqlite3.html#v:sqlite_EMPTY",
      "description": {
        "fct-descr": "\u003cp\u003e(Internal Only) Database table is empty\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Sqlite3",
        "fct-package": "HDBC-sqlite3",
        "fct-signature": "Int",
        "fct-source": "src/Database-HDBC-Sqlite3-Consts.html#sqlite_EMPTY",
        "fct-type": "function",
        "title": "sqlite_EMPTY"
      },
      "index": {
        "description": "Internal Only Database table is empty",
        "hierarchy": "Database HDBC Sqlite3",
        "module": "Database.HDBC.Sqlite3",
        "name": "sqlite_EMPTY",
        "normalized": "",
        "package": "HDBC-sqlite3",
        "partial": "EMPTY",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC-sqlite3/docs/Database-HDBC-Sqlite3.html#v:sqlite_ERROR",
      "description": {
        "fct-descr": "\u003cp\u003eSQL error or missing database\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Sqlite3",
        "fct-package": "HDBC-sqlite3",
        "fct-signature": "Int",
        "fct-source": "src/Database-HDBC-Sqlite3-Consts.html#sqlite_ERROR",
        "fct-type": "function",
        "title": "sqlite_ERROR"
      },
      "index": {
        "description": "SQL error or missing database",
        "hierarchy": "Database HDBC Sqlite3",
        "module": "Database.HDBC.Sqlite3",
        "name": "sqlite_ERROR",
        "normalized": "",
        "package": "HDBC-sqlite3",
        "partial": "ERROR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC-sqlite3/docs/Database-HDBC-Sqlite3.html#v:sqlite_FULL",
      "description": {
        "fct-descr": "\u003cp\u003eInsertion failed because database is full\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Sqlite3",
        "fct-package": "HDBC-sqlite3",
        "fct-signature": "Int",
        "fct-source": "src/Database-HDBC-Sqlite3-Consts.html#sqlite_FULL",
        "fct-type": "function",
        "title": "sqlite_FULL"
      },
      "index": {
        "description": "Insertion failed because database is full",
        "hierarchy": "Database HDBC Sqlite3",
        "module": "Database.HDBC.Sqlite3",
        "name": "sqlite_FULL",
        "normalized": "",
        "package": "HDBC-sqlite3",
        "partial": "FULL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC-sqlite3/docs/Database-HDBC-Sqlite3.html#v:sqlite_INTERNAL",
      "description": {
        "fct-descr": "\u003cp\u003eAn internal logic error in SQLite\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Sqlite3",
        "fct-package": "HDBC-sqlite3",
        "fct-signature": "Int",
        "fct-source": "src/Database-HDBC-Sqlite3-Consts.html#sqlite_INTERNAL",
        "fct-type": "function",
        "title": "sqlite_INTERNAL"
      },
      "index": {
        "description": "An internal logic error in SQLite",
        "hierarchy": "Database HDBC Sqlite3",
        "module": "Database.HDBC.Sqlite3",
        "name": "sqlite_INTERNAL",
        "normalized": "",
        "package": "HDBC-sqlite3",
        "partial": "INTERNAL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC-sqlite3/docs/Database-HDBC-Sqlite3.html#v:sqlite_INTERRUPT",
      "description": {
        "fct-descr": "\u003cp\u003eOperation terminated by sqlite_interrupt()\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Sqlite3",
        "fct-package": "HDBC-sqlite3",
        "fct-signature": "Int",
        "fct-source": "src/Database-HDBC-Sqlite3-Consts.html#sqlite_INTERRUPT",
        "fct-type": "function",
        "title": "sqlite_INTERRUPT"
      },
      "index": {
        "description": "Operation terminated by sqlite interrupt",
        "hierarchy": "Database HDBC Sqlite3",
        "module": "Database.HDBC.Sqlite3",
        "name": "sqlite_INTERRUPT",
        "normalized": "",
        "package": "HDBC-sqlite3",
        "partial": "INTERRUPT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC-sqlite3/docs/Database-HDBC-Sqlite3.html#v:sqlite_IOERR",
      "description": {
        "fct-descr": "\u003cp\u003eSome kind of disk I/O error occurred\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Sqlite3",
        "fct-package": "HDBC-sqlite3",
        "fct-signature": "Int",
        "fct-source": "src/Database-HDBC-Sqlite3-Consts.html#sqlite_IOERR",
        "fct-type": "function",
        "title": "sqlite_IOERR"
      },
      "index": {
        "description": "Some kind of disk error occurred",
        "hierarchy": "Database HDBC Sqlite3",
        "module": "Database.HDBC.Sqlite3",
        "name": "sqlite_IOERR",
        "normalized": "",
        "package": "HDBC-sqlite3",
        "partial": "IOERR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC-sqlite3/docs/Database-HDBC-Sqlite3.html#v:sqlite_LOCKED",
      "description": {
        "fct-descr": "\u003cp\u003eA table in the database is locked\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Sqlite3",
        "fct-package": "HDBC-sqlite3",
        "fct-signature": "Int",
        "fct-source": "src/Database-HDBC-Sqlite3-Consts.html#sqlite_LOCKED",
        "fct-type": "function",
        "title": "sqlite_LOCKED"
      },
      "index": {
        "description": "table in the database is locked",
        "hierarchy": "Database HDBC Sqlite3",
        "module": "Database.HDBC.Sqlite3",
        "name": "sqlite_LOCKED",
        "normalized": "",
        "package": "HDBC-sqlite3",
        "partial": "LOCKED",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC-sqlite3/docs/Database-HDBC-Sqlite3.html#v:sqlite_MISMATCH",
      "description": {
        "fct-descr": "\u003cp\u003eData type mismatch\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Sqlite3",
        "fct-package": "HDBC-sqlite3",
        "fct-signature": "Int",
        "fct-source": "src/Database-HDBC-Sqlite3-Consts.html#sqlite_MISMATCH",
        "fct-type": "function",
        "title": "sqlite_MISMATCH"
      },
      "index": {
        "description": "Data type mismatch",
        "hierarchy": "Database HDBC Sqlite3",
        "module": "Database.HDBC.Sqlite3",
        "name": "sqlite_MISMATCH",
        "normalized": "",
        "package": "HDBC-sqlite3",
        "partial": "MISMATCH",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC-sqlite3/docs/Database-HDBC-Sqlite3.html#v:sqlite_MISUSE",
      "description": {
        "fct-descr": "\u003cp\u003eLibrary used incorrectly\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Sqlite3",
        "fct-package": "HDBC-sqlite3",
        "fct-signature": "Int",
        "fct-source": "src/Database-HDBC-Sqlite3-Consts.html#sqlite_MISUSE",
        "fct-type": "function",
        "title": "sqlite_MISUSE"
      },
      "index": {
        "description": "Library used incorrectly",
        "hierarchy": "Database HDBC Sqlite3",
        "module": "Database.HDBC.Sqlite3",
        "name": "sqlite_MISUSE",
        "normalized": "",
        "package": "HDBC-sqlite3",
        "partial": "MISUSE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC-sqlite3/docs/Database-HDBC-Sqlite3.html#v:sqlite_NOLFS",
      "description": {
        "fct-descr": "\u003cp\u003eUses OS features not supported on host\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Sqlite3",
        "fct-package": "HDBC-sqlite3",
        "fct-signature": "Int",
        "fct-source": "src/Database-HDBC-Sqlite3-Consts.html#sqlite_NOLFS",
        "fct-type": "function",
        "title": "sqlite_NOLFS"
      },
      "index": {
        "description": "Uses OS features not supported on host",
        "hierarchy": "Database HDBC Sqlite3",
        "module": "Database.HDBC.Sqlite3",
        "name": "sqlite_NOLFS",
        "normalized": "",
        "package": "HDBC-sqlite3",
        "partial": "NOLFS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC-sqlite3/docs/Database-HDBC-Sqlite3.html#v:sqlite_NOMEM",
      "description": {
        "fct-descr": "\u003cp\u003eA malloc() failed\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Sqlite3",
        "fct-package": "HDBC-sqlite3",
        "fct-signature": "Int",
        "fct-source": "src/Database-HDBC-Sqlite3-Consts.html#sqlite_NOMEM",
        "fct-type": "function",
        "title": "sqlite_NOMEM"
      },
      "index": {
        "description": "malloc failed",
        "hierarchy": "Database HDBC Sqlite3",
        "module": "Database.HDBC.Sqlite3",
        "name": "sqlite_NOMEM",
        "normalized": "",
        "package": "HDBC-sqlite3",
        "partial": "NOMEM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC-sqlite3/docs/Database-HDBC-Sqlite3.html#v:sqlite_NOTFOUND",
      "description": {
        "fct-descr": "\u003cp\u003e(Internal Only) Table or record not found\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Sqlite3",
        "fct-package": "HDBC-sqlite3",
        "fct-signature": "Int",
        "fct-source": "src/Database-HDBC-Sqlite3-Consts.html#sqlite_NOTFOUND",
        "fct-type": "function",
        "title": "sqlite_NOTFOUND"
      },
      "index": {
        "description": "Internal Only Table or record not found",
        "hierarchy": "Database HDBC Sqlite3",
        "module": "Database.HDBC.Sqlite3",
        "name": "sqlite_NOTFOUND",
        "normalized": "",
        "package": "HDBC-sqlite3",
        "partial": "NOTFOUND",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC-sqlite3/docs/Database-HDBC-Sqlite3.html#v:sqlite_OK",
      "description": {
        "fct-descr": "\u003cp\u003eSuccessful result\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Sqlite3",
        "fct-package": "HDBC-sqlite3",
        "fct-signature": "Int",
        "fct-source": "src/Database-HDBC-Sqlite3-Consts.html#sqlite_OK",
        "fct-type": "function",
        "title": "sqlite_OK"
      },
      "index": {
        "description": "Successful result",
        "hierarchy": "Database HDBC Sqlite3",
        "module": "Database.HDBC.Sqlite3",
        "name": "sqlite_OK",
        "normalized": "",
        "package": "HDBC-sqlite3",
        "partial": "OK",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC-sqlite3/docs/Database-HDBC-Sqlite3.html#v:sqlite_PERM",
      "description": {
        "fct-descr": "\u003cp\u003eAccess permission denied\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Sqlite3",
        "fct-package": "HDBC-sqlite3",
        "fct-signature": "Int",
        "fct-source": "src/Database-HDBC-Sqlite3-Consts.html#sqlite_PERM",
        "fct-type": "function",
        "title": "sqlite_PERM"
      },
      "index": {
        "description": "Access permission denied",
        "hierarchy": "Database HDBC Sqlite3",
        "module": "Database.HDBC.Sqlite3",
        "name": "sqlite_PERM",
        "normalized": "",
        "package": "HDBC-sqlite3",
        "partial": "PERM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC-sqlite3/docs/Database-HDBC-Sqlite3.html#v:sqlite_PROTOCOL",
      "description": {
        "fct-descr": "\u003cp\u003eDatabase lock protocol error\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Sqlite3",
        "fct-package": "HDBC-sqlite3",
        "fct-signature": "Int",
        "fct-source": "src/Database-HDBC-Sqlite3-Consts.html#sqlite_PROTOCOL",
        "fct-type": "function",
        "title": "sqlite_PROTOCOL"
      },
      "index": {
        "description": "Database lock protocol error",
        "hierarchy": "Database HDBC Sqlite3",
        "module": "Database.HDBC.Sqlite3",
        "name": "sqlite_PROTOCOL",
        "normalized": "",
        "package": "HDBC-sqlite3",
        "partial": "PROTOCOL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC-sqlite3/docs/Database-HDBC-Sqlite3.html#v:sqlite_READONLY",
      "description": {
        "fct-descr": "\u003cp\u003eAttempt to write a readonly database\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Sqlite3",
        "fct-package": "HDBC-sqlite3",
        "fct-signature": "Int",
        "fct-source": "src/Database-HDBC-Sqlite3-Consts.html#sqlite_READONLY",
        "fct-type": "function",
        "title": "sqlite_READONLY"
      },
      "index": {
        "description": "Attempt to write readonly database",
        "hierarchy": "Database HDBC Sqlite3",
        "module": "Database.HDBC.Sqlite3",
        "name": "sqlite_READONLY",
        "normalized": "",
        "package": "HDBC-sqlite3",
        "partial": "READONLY",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC-sqlite3/docs/Database-HDBC-Sqlite3.html#v:sqlite_ROW",
      "description": {
        "fct-descr": "\u003cp\u003esqlite_step() has another row ready\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Sqlite3",
        "fct-package": "HDBC-sqlite3",
        "fct-signature": "Int",
        "fct-source": "src/Database-HDBC-Sqlite3-Consts.html#sqlite_ROW",
        "fct-type": "function",
        "title": "sqlite_ROW"
      },
      "index": {
        "description": "sqlite step has another row ready",
        "hierarchy": "Database HDBC Sqlite3",
        "module": "Database.HDBC.Sqlite3",
        "name": "sqlite_ROW",
        "normalized": "",
        "package": "HDBC-sqlite3",
        "partial": "ROW",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC-sqlite3/docs/Database-HDBC-Sqlite3.html#v:sqlite_SCHEMA",
      "description": {
        "fct-descr": "\u003cp\u003eThe database schema changed\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Sqlite3",
        "fct-package": "HDBC-sqlite3",
        "fct-signature": "Int",
        "fct-source": "src/Database-HDBC-Sqlite3-Consts.html#sqlite_SCHEMA",
        "fct-type": "function",
        "title": "sqlite_SCHEMA"
      },
      "index": {
        "description": "The database schema changed",
        "hierarchy": "Database HDBC Sqlite3",
        "module": "Database.HDBC.Sqlite3",
        "name": "sqlite_SCHEMA",
        "normalized": "",
        "package": "HDBC-sqlite3",
        "partial": "SCHEMA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC-sqlite3/docs/Database-HDBC-Sqlite3.html#v:sqlite_TOOBIG",
      "description": {
        "fct-descr": "\u003cp\u003eToo much data for one row of a table\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Sqlite3",
        "fct-package": "HDBC-sqlite3",
        "fct-signature": "Int",
        "fct-source": "src/Database-HDBC-Sqlite3-Consts.html#sqlite_TOOBIG",
        "fct-type": "function",
        "title": "sqlite_TOOBIG"
      },
      "index": {
        "description": "Too much data for one row of table",
        "hierarchy": "Database HDBC Sqlite3",
        "module": "Database.HDBC.Sqlite3",
        "name": "sqlite_TOOBIG",
        "normalized": "",
        "package": "HDBC-sqlite3",
        "partial": "TOOBIG",
        "signature": ""
      }
    }
  }
]