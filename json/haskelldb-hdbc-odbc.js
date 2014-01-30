[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb-hdbc-odbc/docs/Database-HaskellDB-HDBC-ODBC.html#",
      "description": {
        "fct-module": "Database.HaskellDB.HDBC.ODBC",
        "fct-package": "haskelldb-hdbc-odbc",
        "fct-signature": "module",
        "fct-source": "src/Database-HaskellDB-HDBC-ODBC.html",
        "fct-type": "module",
        "title": "ODBC"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB HDBC ODBC",
        "module": "Database.HaskellDB.HDBC.ODBC",
        "name": "ODBC",
        "normalized": "",
        "package": "haskelldb-hdbc-odbc",
        "partial": "ODBC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb-hdbc-odbc/docs/Database-HaskellDB-HDBC-ODBC.html#t:DriverInterface",
      "description": {
        "fct-descr": "\u003cp\u003eInterface which drivers should implement.\n   The \u003ccode\u003e\u003ca\u003econnect\u003c/a\u003e\u003c/code\u003e function takes some driver specific name, value pairs\n   use to setup the database connection, and a database action to run.\n   \u003ccode\u003e\u003ca\u003erequiredOptions\u003c/a\u003e\u003c/code\u003e lists all required options with a short description,\n   that is printed as help in the DBDirect program.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.HDBC.ODBC",
        "fct-package": "haskelldb-hdbc-odbc",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "DriverInterface"
      },
      "index": {
        "description": "Interface which drivers should implement The connect function takes some driver specific name value pairs use to setup the database connection and database action to run requiredOptions lists all required options with short description that is printed as help in the DBDirect program",
        "hierarchy": "Database HaskellDB HDBC ODBC",
        "module": "Database.HaskellDB.HDBC.ODBC",
        "name": "DriverInterface",
        "normalized": "",
        "package": "haskelldb-hdbc-odbc",
        "partial": "Driver Interface",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb-hdbc-odbc/docs/Database-HaskellDB-HDBC-ODBC.html#v:DriverInterface",
      "description": {
        "fct-module": "Database.HaskellDB.HDBC.ODBC",
        "fct-package": "haskelldb-hdbc-odbc",
        "fct-signature": "DriverInterface",
        "fct-type": "function",
        "title": "DriverInterface"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB HDBC ODBC",
        "module": "Database.HaskellDB.HDBC.ODBC",
        "name": "DriverInterface",
        "normalized": "",
        "package": "haskelldb-hdbc-odbc",
        "partial": "Driver Interface",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb-hdbc-odbc/docs/Database-HaskellDB-HDBC-ODBC.html#v:connect",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HaskellDB.HDBC.ODBC",
        "fct-package": "haskelldb-hdbc-odbc",
        "fct-signature": "[(String, String)] -\u003e (Database -\u003e m a) -\u003e m a",
        "fct-type": "function",
        "title": "connect"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB HDBC ODBC",
        "module": "Database.HaskellDB.HDBC.ODBC",
        "name": "connect",
        "normalized": "[(String,String)]-\u003e(Database-\u003ea b)-\u003ea b",
        "package": "haskelldb-hdbc-odbc",
        "partial": "",
        "signature": "[(String,String)]-\u003e(Database-\u003em a)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb-hdbc-odbc/docs/Database-HaskellDB-HDBC-ODBC.html#v:driver",
      "description": {
        "fct-descr": "\u003cp\u003eThis driver passes its options through to HDBC.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.HDBC.ODBC",
        "fct-package": "haskelldb-hdbc-odbc",
        "fct-signature": "DriverInterface",
        "fct-source": "src/Database-HaskellDB-HDBC-ODBC.html#driver",
        "fct-type": "function",
        "title": "driver"
      },
      "index": {
        "description": "This driver passes its options through to HDBC",
        "hierarchy": "Database HaskellDB HDBC ODBC",
        "module": "Database.HaskellDB.HDBC.ODBC",
        "name": "driver",
        "normalized": "",
        "package": "haskelldb-hdbc-odbc",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb-hdbc-odbc/docs/Database-HaskellDB-HDBC-ODBC.html#v:odbcConnect",
      "description": {
        "fct-module": "Database.HaskellDB.HDBC.ODBC",
        "fct-package": "haskelldb-hdbc-odbc",
        "fct-signature": "SqlGenerator -\u003e [(String, String)] -\u003e (Database -\u003e m a) -\u003e m a",
        "fct-source": "src/Database-HaskellDB-HDBC-ODBC.html#odbcConnect",
        "fct-type": "function",
        "title": "odbcConnect"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB HDBC ODBC",
        "module": "Database.HaskellDB.HDBC.ODBC",
        "name": "odbcConnect",
        "normalized": "SqlGenerator-\u003e[(String,String)]-\u003e(Database-\u003ea b)-\u003ea b",
        "package": "haskelldb-hdbc-odbc",
        "partial": "Connect",
        "signature": "SqlGenerator-\u003e[(String,String)]-\u003e(Database-\u003em a)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb-hdbc-odbc/docs/Database-HaskellDB-HDBC-ODBC.html#v:requiredOptions",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HaskellDB.HDBC.ODBC",
        "fct-package": "haskelldb-hdbc-odbc",
        "fct-signature": "[(String, String)]",
        "fct-type": "function",
        "title": "requiredOptions"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB HDBC ODBC",
        "module": "Database.HaskellDB.HDBC.ODBC",
        "name": "requiredOptions",
        "normalized": "[(String,String)]",
        "package": "haskelldb-hdbc-odbc",
        "partial": "Options",
        "signature": "[(String,String)]"
      }
    }
  }
]