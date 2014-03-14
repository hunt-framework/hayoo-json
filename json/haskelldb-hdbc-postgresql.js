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
        "word": "haskelldb-hdbc-postgresql"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.HDBC.PostgreSQL",
          "name": "PostgreSQL",
          "package": "haskelldb-hdbc-postgresql",
          "source": "src/Database-HaskellDB-HDBC-PostgreSQL.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Database HaskellDB HDBC PostgreSQL",
          "module": "Database.HaskellDB.HDBC.PostgreSQL",
          "name": "PostgreSQL",
          "package": "haskelldb-hdbc-postgresql",
          "partial": "Postgre SQL",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb-hdbc-postgresql/docs/Database-HaskellDB-HDBC-PostgreSQL.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterface which drivers should implement.\n   The \u003ccode\u003e\u003ca\u003econnect\u003c/a\u003e\u003c/code\u003e function takes some driver specific name, value pairs\n   use to setup the database connection, and a database action to run.\n   \u003ccode\u003e\u003ca\u003erequiredOptions\u003c/a\u003e\u003c/code\u003e lists all required options with a short description,\n   that is printed as help in the DBDirect program.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.HDBC.PostgreSQL",
          "name": "DriverInterface",
          "package": "haskelldb-hdbc-postgresql",
          "type": "data"
        },
        "index": {
          "description": "Interface which drivers should implement The connect function takes some driver specific name value pairs use to setup the database connection and database action to run requiredOptions lists all required options with short description that is printed as help in the DBDirect program",
          "hierarchy": "Database HaskellDB HDBC PostgreSQL",
          "module": "Database.HaskellDB.HDBC.PostgreSQL",
          "name": "DriverInterface",
          "package": "haskelldb-hdbc-postgresql",
          "partial": "Driver Interface",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb-hdbc-postgresql/docs/Database-HaskellDB-HDBC-PostgreSQL.html#t:DriverInterface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.HDBC.PostgreSQL",
          "name": "DriverInterface",
          "package": "haskelldb-hdbc-postgresql",
          "signature": "DriverInterface",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB HDBC PostgreSQL",
          "module": "Database.HaskellDB.HDBC.PostgreSQL",
          "name": "DriverInterface",
          "package": "haskelldb-hdbc-postgresql",
          "partial": "Driver Interface",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb-hdbc-postgresql/docs/Database-HaskellDB-HDBC-PostgreSQL.html#v:DriverInterface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.HDBC.PostgreSQL",
          "name": "connect",
          "package": "haskelldb-hdbc-postgresql",
          "signature": "[(String, String)] -\u003e (Database -\u003e m a) -\u003e m a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB HDBC PostgreSQL",
          "module": "Database.HaskellDB.HDBC.PostgreSQL",
          "name": "connect",
          "normalized": "[(String,String)]-\u003e(Database-\u003ea b)-\u003ea b",
          "package": "haskelldb-hdbc-postgresql",
          "signature": "[(String,String)]-\u003e(Database-\u003em a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb-hdbc-postgresql/docs/Database-HaskellDB-HDBC-PostgreSQL.html#v:connect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis driver passes its options through to HDBC.\n HDBC refers to\n \u003ca\u003ehttp://www.postgresql.org/docs/8.1/static/libpq.html#LIBPQ-CONNECT\u003c/a\u003e\n for the meaning of the options.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.HDBC.PostgreSQL",
          "name": "driver",
          "package": "haskelldb-hdbc-postgresql",
          "signature": "DriverInterface",
          "source": "src/Database-HaskellDB-HDBC-PostgreSQL.html#driver",
          "type": "function"
        },
        "index": {
          "description": "This driver passes its options through to HDBC HDBC refers to http www.postgresql.org docs static libpq.html LIBPQ-CONNECT for the meaning of the options",
          "hierarchy": "Database HaskellDB HDBC PostgreSQL",
          "module": "Database.HaskellDB.HDBC.PostgreSQL",
          "name": "driver",
          "package": "haskelldb-hdbc-postgresql",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb-hdbc-postgresql/docs/Database-HaskellDB-HDBC-PostgreSQL.html#v:driver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.HDBC.PostgreSQL",
          "name": "postgresqlConnect",
          "package": "haskelldb-hdbc-postgresql",
          "signature": "[(String, String)] -\u003e (Database -\u003e m a) -\u003e m a",
          "source": "src/Database-HaskellDB-HDBC-PostgreSQL.html#postgresqlConnect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB HDBC PostgreSQL",
          "module": "Database.HaskellDB.HDBC.PostgreSQL",
          "name": "postgresqlConnect",
          "normalized": "[(String,String)]-\u003e(Database-\u003ea b)-\u003ea b",
          "package": "haskelldb-hdbc-postgresql",
          "partial": "Connect",
          "signature": "[(String,String)]-\u003e(Database-\u003em a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb-hdbc-postgresql/docs/Database-HaskellDB-HDBC-PostgreSQL.html#v:postgresqlConnect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.HDBC.PostgreSQL",
          "name": "requiredOptions",
          "package": "haskelldb-hdbc-postgresql",
          "signature": "[(String, String)]",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB HDBC PostgreSQL",
          "module": "Database.HaskellDB.HDBC.PostgreSQL",
          "name": "requiredOptions",
          "normalized": "[(String,String)]",
          "package": "haskelldb-hdbc-postgresql",
          "partial": "Options",
          "signature": "[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb-hdbc-postgresql/docs/Database-HaskellDB-HDBC-PostgreSQL.html#v:requiredOptions"
      }
    }
  ]
]