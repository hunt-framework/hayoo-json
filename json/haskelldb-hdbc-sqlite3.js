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
        "word": "haskelldb-hdbc-sqlite3"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInterface to the HDBC sqlite3 back-end.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.HaskellDB.HDBC.SQLite3",
          "name": "SQLite3",
          "package": "haskelldb-hdbc-sqlite3",
          "source": "src/Database-HaskellDB-HDBC-SQLite3.html",
          "type": "module"
        },
        "index": {
          "description": "Interface to the HDBC sqlite3 back-end",
          "hierarchy": "Database HaskellDB HDBC SQLite3",
          "module": "Database.HaskellDB.HDBC.SQLite3",
          "name": "SQLite3",
          "package": "haskelldb-hdbc-sqlite3",
          "partial": "SQLite",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb-hdbc-sqlite3/docs/Database-HaskellDB-HDBC-SQLite3.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterface which drivers should implement.\n   The \u003ccode\u003e\u003ca\u003econnect\u003c/a\u003e\u003c/code\u003e function takes some driver specific name, value pairs\n   use to setup the database connection, and a database action to run.\n   \u003ccode\u003e\u003ca\u003erequiredOptions\u003c/a\u003e\u003c/code\u003e lists all required options with a short description,\n   that is printed as help in the DBDirect program.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.HDBC.SQLite3",
          "name": "DriverInterface",
          "package": "haskelldb-hdbc-sqlite3",
          "type": "data"
        },
        "index": {
          "description": "Interface which drivers should implement The connect function takes some driver specific name value pairs use to setup the database connection and database action to run requiredOptions lists all required options with short description that is printed as help in the DBDirect program",
          "hierarchy": "Database HaskellDB HDBC SQLite3",
          "module": "Database.HaskellDB.HDBC.SQLite3",
          "name": "DriverInterface",
          "package": "haskelldb-hdbc-sqlite3",
          "partial": "Driver Interface",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb-hdbc-sqlite3/docs/Database-HaskellDB-HDBC-SQLite3.html#t:DriverInterface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.HDBC.SQLite3",
          "name": "SQLiteOptions",
          "package": "haskelldb-hdbc-sqlite3",
          "source": "src/Database-HaskellDB-HDBC-SQLite3.html#SQLiteOptions",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB HDBC SQLite3",
          "module": "Database.HaskellDB.HDBC.SQLite3",
          "name": "SQLiteOptions",
          "package": "haskelldb-hdbc-sqlite3",
          "partial": "SQLite Options",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb-hdbc-sqlite3/docs/Database-HaskellDB-HDBC-SQLite3.html#t:SQLiteOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.HDBC.SQLite3",
          "name": "DriverInterface",
          "package": "haskelldb-hdbc-sqlite3",
          "signature": "DriverInterface",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB HDBC SQLite3",
          "module": "Database.HaskellDB.HDBC.SQLite3",
          "name": "DriverInterface",
          "package": "haskelldb-hdbc-sqlite3",
          "partial": "Driver Interface",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb-hdbc-sqlite3/docs/Database-HaskellDB-HDBC-SQLite3.html#v:DriverInterface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.HDBC.SQLite3",
          "name": "SQLiteOptions",
          "package": "haskelldb-hdbc-sqlite3",
          "signature": "SQLiteOptions",
          "source": "src/Database-HaskellDB-HDBC-SQLite3.html#SQLiteOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB HDBC SQLite3",
          "module": "Database.HaskellDB.HDBC.SQLite3",
          "name": "SQLiteOptions",
          "package": "haskelldb-hdbc-sqlite3",
          "partial": "SQLite Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb-hdbc-sqlite3/docs/Database-HaskellDB-HDBC-SQLite3.html#v:SQLiteOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.HDBC.SQLite3",
          "name": "connect",
          "package": "haskelldb-hdbc-sqlite3",
          "signature": "[(String, String)] -\u003e (Database -\u003e m a) -\u003e m a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB HDBC SQLite3",
          "module": "Database.HaskellDB.HDBC.SQLite3",
          "name": "connect",
          "normalized": "[(String,String)]-\u003e(Database-\u003ea b)-\u003ea b",
          "package": "haskelldb-hdbc-sqlite3",
          "signature": "[(String,String)]-\u003e(Database-\u003em a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb-hdbc-sqlite3/docs/Database-HaskellDB-HDBC-SQLite3.html#v:connect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis driver requires the following options: \n   \u003ca\u003efilepath\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Database.HaskellDB.HDBC.SQLite3",
          "name": "driver",
          "package": "haskelldb-hdbc-sqlite3",
          "signature": "DriverInterface",
          "source": "src/Database-HaskellDB-HDBC-SQLite3.html#driver",
          "type": "function"
        },
        "index": {
          "description": "This driver requires the following options filepath",
          "hierarchy": "Database HaskellDB HDBC SQLite3",
          "module": "Database.HaskellDB.HDBC.SQLite3",
          "name": "driver",
          "package": "haskelldb-hdbc-sqlite3",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb-hdbc-sqlite3/docs/Database-HaskellDB-HDBC-SQLite3.html#v:driver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.HDBC.SQLite3",
          "name": "filepath",
          "package": "haskelldb-hdbc-sqlite3",
          "signature": "FilePath",
          "source": "src/Database-HaskellDB-HDBC-SQLite3.html#SQLiteOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB HDBC SQLite3",
          "module": "Database.HaskellDB.HDBC.SQLite3",
          "name": "filepath",
          "package": "haskelldb-hdbc-sqlite3",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb-hdbc-sqlite3/docs/Database-HaskellDB-HDBC-SQLite3.html#v:filepath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.HDBC.SQLite3",
          "name": "requiredOptions",
          "package": "haskelldb-hdbc-sqlite3",
          "signature": "[(String, String)]",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB HDBC SQLite3",
          "module": "Database.HaskellDB.HDBC.SQLite3",
          "name": "requiredOptions",
          "normalized": "[(String,String)]",
          "package": "haskelldb-hdbc-sqlite3",
          "partial": "Options",
          "signature": "[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb-hdbc-sqlite3/docs/Database-HaskellDB-HDBC-SQLite3.html#v:requiredOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.HDBC.SQLite3",
          "name": "sqliteConnect",
          "package": "haskelldb-hdbc-sqlite3",
          "signature": "FilePath -\u003e (Database -\u003e m a) -\u003e m a",
          "source": "src/Database-HaskellDB-HDBC-SQLite3.html#sqliteConnect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB HDBC SQLite3",
          "module": "Database.HaskellDB.HDBC.SQLite3",
          "name": "sqliteConnect",
          "normalized": "FilePath-\u003e(Database-\u003ea b)-\u003ea b",
          "package": "haskelldb-hdbc-sqlite3",
          "partial": "Connect",
          "signature": "FilePath-\u003e(Database-\u003em a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb-hdbc-sqlite3/docs/Database-HaskellDB-HDBC-SQLite3.html#v:sqliteConnect"
      }
    }
  ]
]