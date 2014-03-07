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
        "word": "haskelldb-hdbc-mysql"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.HDBC.MySQL",
          "name": "MySQL",
          "package": "haskelldb-hdbc-mysql",
          "source": "src/Database-HaskellDB-HDBC-MySQL.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Database HaskellDB HDBC MySQL",
          "module": "Database.HaskellDB.HDBC.MySQL",
          "name": "MySQL",
          "package": "haskelldb-hdbc-mysql",
          "partial": "My SQL",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb-hdbc-mysql/docs/Database-HaskellDB-HDBC-MySQL.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterface which drivers should implement.\n   The \u003ccode\u003e\u003ca\u003econnect\u003c/a\u003e\u003c/code\u003e function takes some driver specific name, value pairs\n   use to setup the database connection, and a database action to run.\n   \u003ccode\u003e\u003ca\u003erequiredOptions\u003c/a\u003e\u003c/code\u003e lists all required options with a short description,\n   that is printed as help in the DBDirect program.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.HDBC.MySQL",
          "name": "DriverInterface",
          "package": "haskelldb-hdbc-mysql",
          "type": "data"
        },
        "index": {
          "description": "Interface which drivers should implement The connect function takes some driver specific name value pairs use to setup the database connection and database action to run requiredOptions lists all required options with short description that is printed as help in the DBDirect program",
          "hierarchy": "Database HaskellDB HDBC MySQL",
          "module": "Database.HaskellDB.HDBC.MySQL",
          "name": "DriverInterface",
          "package": "haskelldb-hdbc-mysql",
          "partial": "Driver Interface",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb-hdbc-mysql/docs/Database-HaskellDB-HDBC-MySQL.html#t:DriverInterface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.HDBC.MySQL",
          "name": "DriverInterface",
          "package": "haskelldb-hdbc-mysql",
          "signature": "DriverInterface",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB HDBC MySQL",
          "module": "Database.HaskellDB.HDBC.MySQL",
          "name": "DriverInterface",
          "package": "haskelldb-hdbc-mysql",
          "partial": "Driver Interface",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb-hdbc-mysql/docs/Database-HaskellDB-HDBC-MySQL.html#v:DriverInterface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.HDBC.MySQL",
          "name": "connect",
          "package": "haskelldb-hdbc-mysql",
          "signature": "[(String, String)] -\u003e (Database -\u003e m a) -\u003e m a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB HDBC MySQL",
          "module": "Database.HaskellDB.HDBC.MySQL",
          "name": "connect",
          "normalized": "[(String,String)]-\u003e(Database-\u003ea b)-\u003ea b",
          "package": "haskelldb-hdbc-mysql",
          "signature": "[(String,String)]-\u003e(Database-\u003em a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb-hdbc-mysql/docs/Database-HaskellDB-HDBC-MySQL.html#v:connect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis driver passes its options through to HDBC.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.HDBC.MySQL",
          "name": "driver",
          "package": "haskelldb-hdbc-mysql",
          "signature": "DriverInterface",
          "source": "src/Database-HaskellDB-HDBC-MySQL.html#driver",
          "type": "function"
        },
        "index": {
          "description": "This driver passes its options through to HDBC",
          "hierarchy": "Database HaskellDB HDBC MySQL",
          "module": "Database.HaskellDB.HDBC.MySQL",
          "name": "driver",
          "package": "haskelldb-hdbc-mysql",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb-hdbc-mysql/docs/Database-HaskellDB-HDBC-MySQL.html#v:driver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.HDBC.MySQL",
          "name": "mysqlConnect",
          "package": "haskelldb-hdbc-mysql",
          "signature": "SqlGenerator -\u003e [(String, String)] -\u003e (Database -\u003e m a) -\u003e m a",
          "source": "src/Database-HaskellDB-HDBC-MySQL.html#mysqlConnect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB HDBC MySQL",
          "module": "Database.HaskellDB.HDBC.MySQL",
          "name": "mysqlConnect",
          "normalized": "SqlGenerator-\u003e[(String,String)]-\u003e(Database-\u003ea b)-\u003ea b",
          "package": "haskelldb-hdbc-mysql",
          "partial": "Connect",
          "signature": "SqlGenerator-\u003e[(String,String)]-\u003e(Database-\u003em a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb-hdbc-mysql/docs/Database-HaskellDB-HDBC-MySQL.html#v:mysqlConnect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.HDBC.MySQL",
          "name": "requiredOptions",
          "package": "haskelldb-hdbc-mysql",
          "signature": "[(String, String)]",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB HDBC MySQL",
          "module": "Database.HaskellDB.HDBC.MySQL",
          "name": "requiredOptions",
          "normalized": "[(String,String)]",
          "package": "haskelldb-hdbc-mysql",
          "partial": "Options",
          "signature": "[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb-hdbc-mysql/docs/Database-HaskellDB-HDBC-MySQL.html#v:requiredOptions"
      }
    }
  ]
]