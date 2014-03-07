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
        "word": "haskelldb-hdbc-odbc"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.HDBC.ODBC",
          "name": "ODBC",
          "package": "haskelldb-hdbc-odbc",
          "source": "src/Database-HaskellDB-HDBC-ODBC.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Database HaskellDB HDBC ODBC",
          "module": "Database.HaskellDB.HDBC.ODBC",
          "name": "ODBC",
          "package": "haskelldb-hdbc-odbc",
          "partial": "ODBC",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb-hdbc-odbc/docs/Database-HaskellDB-HDBC-ODBC.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterface which drivers should implement.\n   The \u003ccode\u003e\u003ca\u003econnect\u003c/a\u003e\u003c/code\u003e function takes some driver specific name, value pairs\n   use to setup the database connection, and a database action to run.\n   \u003ccode\u003e\u003ca\u003erequiredOptions\u003c/a\u003e\u003c/code\u003e lists all required options with a short description,\n   that is printed as help in the DBDirect program.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.HDBC.ODBC",
          "name": "DriverInterface",
          "package": "haskelldb-hdbc-odbc",
          "type": "data"
        },
        "index": {
          "description": "Interface which drivers should implement The connect function takes some driver specific name value pairs use to setup the database connection and database action to run requiredOptions lists all required options with short description that is printed as help in the DBDirect program",
          "hierarchy": "Database HaskellDB HDBC ODBC",
          "module": "Database.HaskellDB.HDBC.ODBC",
          "name": "DriverInterface",
          "package": "haskelldb-hdbc-odbc",
          "partial": "Driver Interface",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb-hdbc-odbc/docs/Database-HaskellDB-HDBC-ODBC.html#t:DriverInterface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.HDBC.ODBC",
          "name": "DriverInterface",
          "package": "haskelldb-hdbc-odbc",
          "signature": "DriverInterface",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB HDBC ODBC",
          "module": "Database.HaskellDB.HDBC.ODBC",
          "name": "DriverInterface",
          "package": "haskelldb-hdbc-odbc",
          "partial": "Driver Interface",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb-hdbc-odbc/docs/Database-HaskellDB-HDBC-ODBC.html#v:DriverInterface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.HDBC.ODBC",
          "name": "connect",
          "package": "haskelldb-hdbc-odbc",
          "signature": "[(String, String)] -\u003e (Database -\u003e m a) -\u003e m a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB HDBC ODBC",
          "module": "Database.HaskellDB.HDBC.ODBC",
          "name": "connect",
          "normalized": "[(String,String)]-\u003e(Database-\u003ea b)-\u003ea b",
          "package": "haskelldb-hdbc-odbc",
          "signature": "[(String,String)]-\u003e(Database-\u003em a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb-hdbc-odbc/docs/Database-HaskellDB-HDBC-ODBC.html#v:connect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis driver passes its options through to HDBC.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.HDBC.ODBC",
          "name": "driver",
          "package": "haskelldb-hdbc-odbc",
          "signature": "DriverInterface",
          "source": "src/Database-HaskellDB-HDBC-ODBC.html#driver",
          "type": "function"
        },
        "index": {
          "description": "This driver passes its options through to HDBC",
          "hierarchy": "Database HaskellDB HDBC ODBC",
          "module": "Database.HaskellDB.HDBC.ODBC",
          "name": "driver",
          "package": "haskelldb-hdbc-odbc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb-hdbc-odbc/docs/Database-HaskellDB-HDBC-ODBC.html#v:driver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.HDBC.ODBC",
          "name": "odbcConnect",
          "package": "haskelldb-hdbc-odbc",
          "signature": "SqlGenerator -\u003e [(String, String)] -\u003e (Database -\u003e m a) -\u003e m a",
          "source": "src/Database-HaskellDB-HDBC-ODBC.html#odbcConnect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB HDBC ODBC",
          "module": "Database.HaskellDB.HDBC.ODBC",
          "name": "odbcConnect",
          "normalized": "SqlGenerator-\u003e[(String,String)]-\u003e(Database-\u003ea b)-\u003ea b",
          "package": "haskelldb-hdbc-odbc",
          "partial": "Connect",
          "signature": "SqlGenerator-\u003e[(String,String)]-\u003e(Database-\u003em a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb-hdbc-odbc/docs/Database-HaskellDB-HDBC-ODBC.html#v:odbcConnect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.HDBC.ODBC",
          "name": "requiredOptions",
          "package": "haskelldb-hdbc-odbc",
          "signature": "[(String, String)]",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB HDBC ODBC",
          "module": "Database.HaskellDB.HDBC.ODBC",
          "name": "requiredOptions",
          "normalized": "[(String,String)]",
          "package": "haskelldb-hdbc-odbc",
          "partial": "Options",
          "signature": "[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb-hdbc-odbc/docs/Database-HaskellDB-HDBC-ODBC.html#v:requiredOptions"
      }
    }
  ]
]