[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC-mysql/docs/Database-HDBC-MySQL.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a MySQL driver for the HDBC database interface.\nTo use it, invoke the \u003ccode\u003e\u003ca\u003econnectMySQL\u003c/a\u003e\u003c/code\u003e method to create an\n\u003ccode\u003eDatabase.HDBC.IConnection\u003c/code\u003e that you can use to interact with a MySQL\ndatabase.  Use the \u003ccode\u003e\u003ca\u003edefaultMySQLConnectInfo\u003c/a\u003e\u003c/code\u003e, overriding the default\nvalues as necessary.\n\u003c/p\u003e\u003cpre\u003e\nimport Control.Monad\nimport Database.HDBC\nimport Database.HDBC.MySQL\n\nmain = do\n  rows \u003c- \u003ccode\u003e\u003ca\u003ewithRTSSignalsBlocked\u003c/a\u003e\u003c/code\u003e $ do\n    conn \u003c- \u003ccode\u003e\u003ca\u003econnectMySQL\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003edefaultMySQLConnectInfo\u003c/a\u003e\u003c/code\u003e {\n              \u003ccode\u003e\u003ca\u003emysqlHost\u003c/a\u003e\u003c/code\u003e     = \"db1.example.com\",\n              \u003ccode\u003e\u003ca\u003emysqlUser\u003c/a\u003e\u003c/code\u003e     = \"scott\",\n              \u003ccode\u003e\u003ca\u003emysqlPassword\u003c/a\u003e\u003c/code\u003e = \"tiger\"\n            }\n    \u003ccode\u003equickQuery'\u003c/code\u003e conn \"SELECT 1 + 1\" []\n  forM_ rows $ \\row -\u003e putStrLn $ show row\n\u003c/pre\u003e\u003cp\u003eThere are some important caveats to note about this driver.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e RTS signals.  If you are writing an application that links against GHC's\n  threaded runtime (as most server-side applications do), you must use\n  \u003ccode\u003e\u003ca\u003ewithRTSSignalsBlocked\u003c/a\u003e\u003c/code\u003e to defend the \u003ccode\u003emysqlclient\u003c/code\u003e library against the\n  signals the RTS uses, or you may experience crashes.\n\u003c/li\u003e\u003cli\u003e Transaction support.  The MySQL server supports a\n  variety of backend \"engines\", only some of which support\n  transactional access (e.g., InnoDB).  This driver will report that the\n  database supports transactions.  Should you decide to make use of the\n  transactional support in the HDBC API,\n  \u003cem\u003eit is up to you to make sure that you use a MySQL engine that supports transactions\u003c/em\u003e.\n\u003c/li\u003e\u003cli\u003e Dates and times.  MySQL does not store time zone\n  information in \u003ccode\u003eDATETIME\u003c/code\u003e or \u003ccode\u003eTIMESTAMP\u003c/code\u003e columns: instead, it assumes\n  that all dates are stored in the \"server's time zone\".  At some\n  point in the future, this driver may query for the server's time zone\n  and apply appropriate time zone conversion to these datatypes. For\n  now, it simply treats all times as UTC; i.e., it assumes the server's\n  time zone is UTC.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "Database.HDBC.MySQL",
        "fct-package": "HDBC-mysql",
        "fct-signature": "module",
        "fct-source": "src/Database-HDBC-MySQL.html",
        "fct-type": "module",
        "title": "MySQL"
      },
      "index": {
        "description": "This module provides MySQL driver for the HDBC database interface To use it invoke the connectMySQL method to create an Database.HDBC.IConnection that you can use to interact with MySQL database Use the defaultMySQLConnectInfo overriding the default values as necessary import Control.Monad import Database.HDBC import Database.HDBC.MySQL main do rows withRTSSignalsBlocked do conn connectMySQL defaultMySQLConnectInfo mysqlHost db1.example.com mysqlUser scott mysqlPassword tiger quickQuery conn SELECT forM rows row putStrLn show row There are some important caveats to note about this driver RTS signals If you are writing an application that links against GHC threaded runtime as most server-side applications do you must use withRTSSignalsBlocked to defend the mysqlclient library against the signals the RTS uses or you may experience crashes Transaction support The MySQL server supports variety of backend engines only some of which support transactional access e.g InnoDB This driver will report that the database supports transactions Should you decide to make use of the transactional support in the HDBC API it is up to you to make sure that you use MySQL engine that supports transactions Dates and times MySQL does not store time zone information in DATETIME or TIMESTAMP columns instead it assumes that all dates are stored in the server time zone At some point in the future this driver may query for the server time zone and apply appropriate time zone conversion to these datatypes For now it simply treats all times as UTC i.e it assumes the server time zone is UTC",
        "hierarchy": "Database HDBC MySQL",
        "module": "Database.HDBC.MySQL",
        "name": "MySQL",
        "normalized": "",
        "package": "HDBC-mysql",
        "partial": "My SQL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC-mysql/docs/Database-HDBC-MySQL.html#t:Connection",
      "description": {
        "fct-module": "Database.HDBC.MySQL",
        "fct-package": "HDBC-mysql",
        "fct-signature": "data",
        "fct-source": "src/Database-HDBC-MySQL-Connection.html#Connection",
        "fct-type": "data",
        "title": "Connection"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBC MySQL",
        "module": "Database.HDBC.MySQL",
        "name": "Connection",
        "normalized": "",
        "package": "HDBC-mysql",
        "partial": "Connection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC-mysql/docs/Database-HDBC-MySQL.html#t:MySQLConnectInfo",
      "description": {
        "fct-descr": "\u003cp\u003eConnection information to use with connectMySQL.\n\u003c/p\u003e\u003cp\u003eYou must either supply a host and port, or the full path to a\n     Unix socket.\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.MySQL",
        "fct-package": "HDBC-mysql",
        "fct-signature": "data",
        "fct-source": "src/Database-HDBC-MySQL-Connection.html#MySQLConnectInfo",
        "fct-type": "data",
        "title": "MySQLConnectInfo"
      },
      "index": {
        "description": "Connection information to use with connectMySQL You must either supply host and port or the full path to Unix socket",
        "hierarchy": "Database HDBC MySQL",
        "module": "Database.HDBC.MySQL",
        "name": "MySQLConnectInfo",
        "normalized": "",
        "package": "HDBC-mysql",
        "partial": "My SQLConnect Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC-mysql/docs/Database-HDBC-MySQL.html#v:MySQLConnectInfo",
      "description": {
        "fct-module": "Database.HDBC.MySQL",
        "fct-package": "HDBC-mysql",
        "fct-signature": "MySQLConnectInfo",
        "fct-source": "src/Database-HDBC-MySQL-Connection.html#MySQLConnectInfo",
        "fct-type": "function",
        "title": "MySQLConnectInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBC MySQL",
        "module": "Database.HDBC.MySQL",
        "name": "MySQLConnectInfo",
        "normalized": "",
        "package": "HDBC-mysql",
        "partial": "My SQLConnect Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC-mysql/docs/Database-HDBC-MySQL.html#v:connectMySQL",
      "description": {
        "fct-descr": "\u003cp\u003eConnects to a MySQL database using the specified\n     connection information. \n\u003c/p\u003e",
        "fct-module": "Database.HDBC.MySQL",
        "fct-package": "HDBC-mysql",
        "fct-signature": "MySQLConnectInfo -\u003e IO Connection",
        "fct-source": "src/Database-HDBC-MySQL-Connection.html#connectMySQL",
        "fct-type": "function",
        "title": "connectMySQL"
      },
      "index": {
        "description": "Connects to MySQL database using the specified connection information",
        "hierarchy": "Database HDBC MySQL",
        "module": "Database.HDBC.MySQL",
        "name": "connectMySQL",
        "normalized": "MySQLConnectInfo-\u003eIO Connection",
        "package": "HDBC-mysql",
        "partial": "My SQL",
        "signature": "MySQLConnectInfo-\u003eIO Connection"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC-mysql/docs/Database-HDBC-MySQL.html#v:defaultMySQLConnectInfo",
      "description": {
        "fct-descr": "\u003cp\u003eTypical connection information, meant to be overridden partially,\n     for example:\n\u003c/p\u003e\u003cpre\u003e connectMySQL defaultMySQLConnectInfo { mysqlHost = \"db1\" }\n\u003c/pre\u003e\u003cp\u003eIn particular, the default values are \u003ccode\u003e\"127.0.0.1\"\u003c/code\u003e as the\n     host, \u003ccode\u003e3306\u003c/code\u003e as the port, \u003ccode\u003e\"root\"\u003c/code\u003e as the user, no password,\n     and \u003ccode\u003e\"test\"\u003c/code\u003e as the default database.\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.MySQL",
        "fct-package": "HDBC-mysql",
        "fct-signature": "MySQLConnectInfo",
        "fct-source": "src/Database-HDBC-MySQL-Connection.html#defaultMySQLConnectInfo",
        "fct-type": "function",
        "title": "defaultMySQLConnectInfo"
      },
      "index": {
        "description": "Typical connection information meant to be overridden partially for example connectMySQL defaultMySQLConnectInfo mysqlHost db1 In particular the default values are as the host as the port root as the user no password and test as the default database",
        "hierarchy": "Database HDBC MySQL",
        "module": "Database.HDBC.MySQL",
        "name": "defaultMySQLConnectInfo",
        "normalized": "",
        "package": "HDBC-mysql",
        "partial": "My SQLConnect Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC-mysql/docs/Database-HDBC-MySQL.html#v:mysqlDatabase",
      "description": {
        "fct-descr": "\u003cp\u003ethe \"default\" database name; e.g., \u003ccode\u003e\"emp\"\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.MySQL",
        "fct-package": "HDBC-mysql",
        "fct-signature": "String",
        "fct-source": "src/Database-HDBC-MySQL-Connection.html#MySQLConnectInfo",
        "fct-type": "function",
        "title": "mysqlDatabase"
      },
      "index": {
        "description": "the default database name e.g emp",
        "hierarchy": "Database HDBC MySQL",
        "module": "Database.HDBC.MySQL",
        "name": "mysqlDatabase",
        "normalized": "",
        "package": "HDBC-mysql",
        "partial": "Database",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC-mysql/docs/Database-HDBC-MySQL.html#v:mysqlGroup",
      "description": {
        "fct-descr": "\u003cp\u003eThe group name in my.cnf from which it reads options; e.g., \u003ccode\u003e\"test\"\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.MySQL",
        "fct-package": "HDBC-mysql",
        "fct-signature": "Maybe String",
        "fct-source": "src/Database-HDBC-MySQL-Connection.html#MySQLConnectInfo",
        "fct-type": "function",
        "title": "mysqlGroup"
      },
      "index": {
        "description": "The group name in my.cnf from which it reads options e.g test",
        "hierarchy": "Database HDBC MySQL",
        "module": "Database.HDBC.MySQL",
        "name": "mysqlGroup",
        "normalized": "",
        "package": "HDBC-mysql",
        "partial": "Group",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC-mysql/docs/Database-HDBC-MySQL.html#v:mysqlHost",
      "description": {
        "fct-descr": "\u003cp\u003eThe server's hostname; e.g., \u003ccode\u003e\"db1.example.com\"\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.MySQL",
        "fct-package": "HDBC-mysql",
        "fct-signature": "String",
        "fct-source": "src/Database-HDBC-MySQL-Connection.html#MySQLConnectInfo",
        "fct-type": "function",
        "title": "mysqlHost"
      },
      "index": {
        "description": "The server hostname e.g db1.example.com",
        "hierarchy": "Database HDBC MySQL",
        "module": "Database.HDBC.MySQL",
        "name": "mysqlHost",
        "normalized": "",
        "package": "HDBC-mysql",
        "partial": "Host",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC-mysql/docs/Database-HDBC-MySQL.html#v:mysqlPassword",
      "description": {
        "fct-descr": "\u003cp\u003eThe MySQL password to use for login; e.g., \u003ccode\u003e\"tiger\"\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.MySQL",
        "fct-package": "HDBC-mysql",
        "fct-signature": "String",
        "fct-source": "src/Database-HDBC-MySQL-Connection.html#MySQLConnectInfo",
        "fct-type": "function",
        "title": "mysqlPassword"
      },
      "index": {
        "description": "The MySQL password to use for login e.g tiger",
        "hierarchy": "Database HDBC MySQL",
        "module": "Database.HDBC.MySQL",
        "name": "mysqlPassword",
        "normalized": "",
        "package": "HDBC-mysql",
        "partial": "Password",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC-mysql/docs/Database-HDBC-MySQL.html#v:mysqlPort",
      "description": {
        "fct-descr": "\u003cp\u003eThe port on which to connect to the server; e.g., \u003ccode\u003e3306\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.MySQL",
        "fct-package": "HDBC-mysql",
        "fct-signature": "Int",
        "fct-source": "src/Database-HDBC-MySQL-Connection.html#MySQLConnectInfo",
        "fct-type": "function",
        "title": "mysqlPort"
      },
      "index": {
        "description": "The port on which to connect to the server e.g",
        "hierarchy": "Database HDBC MySQL",
        "module": "Database.HDBC.MySQL",
        "name": "mysqlPort",
        "normalized": "",
        "package": "HDBC-mysql",
        "partial": "Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC-mysql/docs/Database-HDBC-MySQL.html#v:mysqlUnixSocket",
      "description": {
        "fct-descr": "\u003cp\u003eThe absolute path of the server's Unix socket; e.g., \u003ccode\u003e\"/var/lib/mysql.sock\"\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.MySQL",
        "fct-package": "HDBC-mysql",
        "fct-signature": "String",
        "fct-source": "src/Database-HDBC-MySQL-Connection.html#MySQLConnectInfo",
        "fct-type": "function",
        "title": "mysqlUnixSocket"
      },
      "index": {
        "description": "The absolute path of the server Unix socket e.g var lib mysql.sock",
        "hierarchy": "Database HDBC MySQL",
        "module": "Database.HDBC.MySQL",
        "name": "mysqlUnixSocket",
        "normalized": "",
        "package": "HDBC-mysql",
        "partial": "Unix Socket",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC-mysql/docs/Database-HDBC-MySQL.html#v:mysqlUser",
      "description": {
        "fct-descr": "\u003cp\u003eThe MySQL username to use for login; e.g., \u003ccode\u003e\"scott\"\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.MySQL",
        "fct-package": "HDBC-mysql",
        "fct-signature": "String",
        "fct-source": "src/Database-HDBC-MySQL-Connection.html#MySQLConnectInfo",
        "fct-type": "function",
        "title": "mysqlUser"
      },
      "index": {
        "description": "The MySQL username to use for login e.g scott",
        "hierarchy": "Database HDBC MySQL",
        "module": "Database.HDBC.MySQL",
        "name": "mysqlUser",
        "normalized": "",
        "package": "HDBC-mysql",
        "partial": "User",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC-mysql/docs/Database-HDBC-MySQL.html#v:withRTSSignalsBlocked",
      "description": {
        "fct-descr": "\u003cp\u003eExecute an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action with signals used by GHC's runtime signals\n blocked.  The \u003ccode\u003emysqlclient\u003c/code\u003e C library does not correctly restart\n system calls if they are interrupted by signals, so many MySQL API\n calls can unexpectedly fail when called from a Haskell application.\n This is most likely to occur if you are linking against GHC's\n threaded runtime (using the \u003ccode\u003e-threaded\u003c/code\u003e option).\n\u003c/p\u003e\u003cp\u003eThis function blocks \u003ccode\u003eSIGALRM\u003c/code\u003e and \u003ccode\u003eSIGVTALRM\u003c/code\u003e, runs your action,\n then unblocks those signals.  If you have a series of HDBC calls\n that may block for a period of time, it may be wise to wrap them in\n this action.  Blocking and unblocking signals is cheap, but not\n free.\n\u003c/p\u003e\u003cp\u003eHere is an example of an exception that could be avoided by\n temporarily blocking GHC's runtime signals:\n\u003c/p\u003e\u003cpre\u003e  SqlError {\n    seState = \"\", \n    seNativeError = 2003, \n    seErrorMsg = \"Can't connect to MySQL server on 'localhost' (4)\"\n  }\n\u003c/pre\u003e",
        "fct-module": "Database.HDBC.MySQL",
        "fct-package": "HDBC-mysql",
        "fct-signature": "IO a -\u003e IO a",
        "fct-source": "src/Database-HDBC-MySQL-RTS.html#withRTSSignalsBlocked",
        "fct-type": "function",
        "title": "withRTSSignalsBlocked"
      },
      "index": {
        "description": "Execute an IO action with signals used by GHC runtime signals blocked The mysqlclient library does not correctly restart system calls if they are interrupted by signals so many MySQL API calls can unexpectedly fail when called from Haskell application This is most likely to occur if you are linking against GHC threaded runtime using the threaded option This function blocks SIGALRM and SIGVTALRM runs your action then unblocks those signals If you have series of HDBC calls that may block for period of time it may be wise to wrap them in this action Blocking and unblocking signals is cheap but not free Here is an example of an exception that could be avoided by temporarily blocking GHC runtime signals SqlError seState seNativeError seErrorMsg Can connect to MySQL server on localhost",
        "hierarchy": "Database HDBC MySQL",
        "module": "Database.HDBC.MySQL",
        "name": "withRTSSignalsBlocked",
        "normalized": "IO a-\u003eIO a",
        "package": "HDBC-mysql",
        "partial": "RTSSignals Blocked",
        "signature": "IO a-\u003eIO a"
      }
    }
  }
]