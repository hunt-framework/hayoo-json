[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/templatepg/docs/Database-TemplatePG-Protocol.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Protocol module allows for direct, low-level communication with a\n  PostgreSQL server over TCP/IP. You probably don't want to use this module\n  directly.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.TemplatePG.Protocol",
        "fct-package": "templatepg",
        "fct-signature": "module",
        "fct-source": "src/Database-TemplatePG-Protocol.html",
        "fct-type": "module",
        "title": "Protocol"
      },
      "index": {
        "description": "The Protocol module allows for direct low-level communication with PostgreSQL server over TCP IP You probably don want to use this module directly",
        "hierarchy": "Database TemplatePG Protocol",
        "module": "Database.TemplatePG.Protocol",
        "name": "Protocol",
        "normalized": "",
        "package": "templatepg",
        "partial": "Protocol",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/templatepg/docs/Database-TemplatePG-Protocol.html#t:PGException",
      "description": {
        "fct-descr": "\u003cp\u003ePGException is thrown upon encountering an \u003ccode\u003eErrorResponse\u003c/code\u003e with severity of\n  ERROR, FATAL, or PANIC. It holds the SQLSTATE and message of the error.\n\u003c/p\u003e",
        "fct-module": "Database.TemplatePG.Protocol",
        "fct-package": "templatepg",
        "fct-signature": "data",
        "fct-source": "src/Database-TemplatePG-Protocol.html#PGException",
        "fct-type": "data",
        "title": "PGException"
      },
      "index": {
        "description": "PGException is thrown upon encountering an ErrorResponse with severity of ERROR FATAL or PANIC It holds the SQLSTATE and message of the error",
        "hierarchy": "Database TemplatePG Protocol",
        "module": "Database.TemplatePG.Protocol",
        "name": "PGException",
        "normalized": "",
        "package": "templatepg",
        "partial": "PGException",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/templatepg/docs/Database-TemplatePG-Protocol.html#v:PGException",
      "description": {
        "fct-module": "Database.TemplatePG.Protocol",
        "fct-package": "templatepg",
        "fct-signature": "PGException String String",
        "fct-source": "src/Database-TemplatePG-Protocol.html#PGException",
        "fct-type": "function",
        "title": "PGException"
      },
      "index": {
        "description": "",
        "hierarchy": "Database TemplatePG Protocol",
        "module": "Database.TemplatePG.Protocol",
        "name": "PGException",
        "normalized": "",
        "package": "templatepg",
        "partial": "PGException",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/templatepg/docs/Database-TemplatePG-Protocol.html#v:describeStatement",
      "description": {
        "fct-descr": "\u003cp\u003eDescribe a SQL statement/query. A statement description consists of 0 or\n more parameter descriptions (a PostgreSQL type) and zero or more result\n field descriptions (for queries) (consist of the name of the field, the\n type of the field, and a nullability indicator).\n\u003c/p\u003e",
        "fct-module": "Database.TemplatePG.Protocol",
        "fct-package": "templatepg",
        "fct-signature": "Handle-\u003e String-\u003e IO ([PGType], [(String, PGType, Bool)])",
        "fct-type": "function",
        "title": "describeStatement"
      },
      "index": {
        "description": "Describe SQL statement query statement description consists of or more parameter descriptions PostgreSQL type and zero or more result field descriptions for queries consist of the name of the field the type of the field and nullability indicator",
        "hierarchy": "Database TemplatePG Protocol",
        "module": "Database.TemplatePG.Protocol",
        "name": "describeStatement",
        "normalized": "Handle-\u003eString-\u003eIO([PGType],[(String,PGType,Bool)])",
        "package": "templatepg",
        "partial": "Statement",
        "signature": "Handle-\u003eString-\u003eIO([PGType],[(String,PGType,Bool)])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/templatepg/docs/Database-TemplatePG-Protocol.html#v:executeSimpleQuery",
      "description": {
        "fct-descr": "\u003cp\u003eA simple query is one which requires sending only a single \u003ccode\u003eSimpleQuery\u003c/code\u003e\n message to the PostgreSQL server. The query is sent as a single string; you\n cannot bind parameters. Note that queries can return 0 results (an empty\n list).\n\u003c/p\u003e",
        "fct-module": "Database.TemplatePG.Protocol",
        "fct-package": "templatepg",
        "fct-signature": "String-\u003e Handle-\u003e IO [[Maybe ByteString]]",
        "fct-type": "function",
        "title": "executeSimpleQuery"
      },
      "index": {
        "description": "simple query is one which requires sending only single SimpleQuery message to the PostgreSQL server The query is sent as single string you cannot bind parameters Note that queries can return results an empty list",
        "hierarchy": "Database TemplatePG Protocol",
        "module": "Database.TemplatePG.Protocol",
        "name": "executeSimpleQuery",
        "normalized": "String-\u003eHandle-\u003eIO[[Maybe ByteString]]",
        "package": "templatepg",
        "partial": "Simple Query",
        "signature": "String-\u003eHandle-\u003eIO[[Maybe ByteString]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/templatepg/docs/Database-TemplatePG-Protocol.html#v:executeSimpleStatement",
      "description": {
        "fct-descr": "\u003cp\u003eWhile not strictly necessary, this can make code a little bit clearer. It\n executes a \u003ccode\u003eSimpleQuery\u003c/code\u003e but doesn't look for results.\n\u003c/p\u003e",
        "fct-module": "Database.TemplatePG.Protocol",
        "fct-package": "templatepg",
        "fct-signature": "String-\u003e Handle-\u003e IO ()",
        "fct-type": "function",
        "title": "executeSimpleStatement"
      },
      "index": {
        "description": "While not strictly necessary this can make code little bit clearer It executes SimpleQuery but doesn look for results",
        "hierarchy": "Database TemplatePG Protocol",
        "module": "Database.TemplatePG.Protocol",
        "name": "executeSimpleStatement",
        "normalized": "String-\u003eHandle-\u003eIO()",
        "package": "templatepg",
        "partial": "Simple Statement",
        "signature": "String-\u003eHandle-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/templatepg/docs/Database-TemplatePG-Protocol.html#v:pgConnect",
      "description": {
        "fct-descr": "\u003cp\u003eConnect to a PostgreSQL server.\n\u003c/p\u003e",
        "fct-module": "Database.TemplatePG.Protocol",
        "fct-package": "templatepg",
        "fct-signature": "HostName-\u003e PortID-\u003e String-\u003e String-\u003e String-\u003e IO Handle",
        "fct-type": "function",
        "title": "pgConnect"
      },
      "index": {
        "description": "Connect to PostgreSQL server",
        "hierarchy": "Database TemplatePG Protocol",
        "module": "Database.TemplatePG.Protocol",
        "name": "pgConnect",
        "normalized": "HostName-\u003ePortID-\u003eString-\u003eString-\u003eString-\u003eIO Handle",
        "package": "templatepg",
        "partial": "Connect",
        "signature": "HostName-\u003ePortID-\u003eString-\u003eString-\u003eString-\u003eIO Handle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/templatepg/docs/Database-TemplatePG-Protocol.html#v:pgDisconnect",
      "description": {
        "fct-descr": "\u003cp\u003eDisconnect from a PostgreSQL server. Note that this currently doesn't send\n a close message.\n\u003c/p\u003e",
        "fct-module": "Database.TemplatePG.Protocol",
        "fct-package": "templatepg",
        "fct-signature": "Handle-\u003e IO ()",
        "fct-type": "function",
        "title": "pgDisconnect"
      },
      "index": {
        "description": "Disconnect from PostgreSQL server Note that this currently doesn send close message",
        "hierarchy": "Database TemplatePG Protocol",
        "module": "Database.TemplatePG.Protocol",
        "name": "pgDisconnect",
        "normalized": "Handle-\u003eIO()",
        "package": "templatepg",
        "partial": "Disconnect",
        "signature": "Handle-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/templatepg/docs/Database-TemplatePG-SQL.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exposes the high-level Template Haskell interface for querying\n and manipulating the PostgreSQL server.\n\u003c/p\u003e\u003cp\u003eAll SQL string arguments support expression interpolation. Just enclose your\n expression in \u003ccode\u003e{}\u003c/code\u003e in the SQL string.\n\u003c/p\u003e\u003cp\u003eNote that transactions are messy and untested. Attempt to use them at your\n own risk.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.TemplatePG.SQL",
        "fct-package": "templatepg",
        "fct-signature": "module",
        "fct-source": "src/Database-TemplatePG-SQL.html",
        "fct-type": "module",
        "title": "SQL"
      },
      "index": {
        "description": "This module exposes the high-level Template Haskell interface for querying and manipulating the PostgreSQL server All SQL string arguments support expression interpolation Just enclose your expression in in the SQL string Note that transactions are messy and untested Attempt to use them at your own risk",
        "hierarchy": "Database TemplatePG SQL",
        "module": "Database.TemplatePG.SQL",
        "name": "SQL",
        "normalized": "",
        "package": "templatepg",
        "partial": "SQL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/templatepg/docs/Database-TemplatePG-SQL.html#v:execute",
      "description": {
        "fct-descr": "\u003cpre\u003eexecute :: String -\u003e (Handle -\u003e IO ())\u003c/pre\u003e\u003cp\u003eConvenience function to execute a statement on the PostgreSQL server.\n\u003c/p\u003e\u003cp\u003eExample (where \u003ccode\u003eh\u003c/code\u003e is a handle from \u003ccode\u003e\u003ca\u003epgConnect\u003c/a\u003e\u003c/code\u003e):\n\u003c/p\u003e\u003cpre\u003elet rolename = \"BOfH\"\n\n$(execute \"CREATE ROLE {rolename}\") h\n\u003c/pre\u003e",
        "fct-module": "Database.TemplatePG.SQL",
        "fct-package": "templatepg",
        "fct-signature": "String -\u003e Q Exp",
        "fct-source": "src/Database-TemplatePG-SQL.html#execute",
        "fct-type": "function",
        "title": "execute"
      },
      "index": {
        "description": "execute String Handle IO Convenience function to execute statement on the PostgreSQL server Example where is handle from pgConnect let rolename BOfH execute CREATE ROLE rolename",
        "hierarchy": "Database TemplatePG SQL",
        "module": "Database.TemplatePG.SQL",
        "name": "execute",
        "normalized": "String-\u003eQ Exp",
        "package": "templatepg",
        "partial": "",
        "signature": "String-\u003eQ Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/templatepg/docs/Database-TemplatePG-SQL.html#v:insertIgnore",
      "description": {
        "fct-descr": "\u003cp\u003eIgnore duplicate key errors. This is also limited to the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e Monad.\n\u003c/p\u003e",
        "fct-module": "Database.TemplatePG.SQL",
        "fct-package": "templatepg",
        "fct-signature": "IO () -\u003e IO ()",
        "fct-source": "src/Database-TemplatePG-SQL.html#insertIgnore",
        "fct-type": "function",
        "title": "insertIgnore"
      },
      "index": {
        "description": "Ignore duplicate key errors This is also limited to the IO Monad",
        "hierarchy": "Database TemplatePG SQL",
        "module": "Database.TemplatePG.SQL",
        "name": "insertIgnore",
        "normalized": "IO()-\u003eIO()",
        "package": "templatepg",
        "partial": "Ignore",
        "signature": "IO()-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/templatepg/docs/Database-TemplatePG-SQL.html#v:queryTuple",
      "description": {
        "fct-descr": "\u003cpre\u003equeryTuple :: String -\u003e (Handle -\u003e IO (Maybe (column1, column2, ...)))\u003c/pre\u003e\u003cp\u003eConvenience function to query a PostgreSQL server and return the first\n result as a tuple. If the query produces no results, return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExample (where \u003ccode\u003eh\u003c/code\u003e is a handle from \u003ccode\u003e\u003ca\u003epgConnect\u003c/a\u003e\u003c/code\u003e):\n\u003c/p\u003e\u003cpre\u003elet sysid = 10::Integer;\n\n$(queryTuple \"SELECT usesysid, usename FROM pg_user WHERE usesysid = {sysid}\") h\n\n=\u003e IO (Maybe (Maybe String, Maybe Integer))\n\u003c/pre\u003e",
        "fct-module": "Database.TemplatePG.SQL",
        "fct-package": "templatepg",
        "fct-signature": "String -\u003e Q Exp",
        "fct-source": "src/Database-TemplatePG-SQL.html#queryTuple",
        "fct-type": "function",
        "title": "queryTuple"
      },
      "index": {
        "description": "queryTuple String Handle IO Maybe column1 column2 Convenience function to query PostgreSQL server and return the first result as tuple If the query produces no results return Nothing Example where is handle from pgConnect let sysid Integer queryTuple SELECT usesysid usename FROM pg user WHERE usesysid sysid IO Maybe Maybe String Maybe Integer",
        "hierarchy": "Database TemplatePG SQL",
        "module": "Database.TemplatePG.SQL",
        "name": "queryTuple",
        "normalized": "String-\u003eQ Exp",
        "package": "templatepg",
        "partial": "Tuple",
        "signature": "String-\u003eQ Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/templatepg/docs/Database-TemplatePG-SQL.html#v:queryTuples",
      "description": {
        "fct-descr": "\u003cpre\u003equeryTuples :: String -\u003e (Handle -\u003e IO [(column1, column2, ...)])\u003c/pre\u003e\u003cp\u003eQuery a PostgreSQL server and return the results as a list of tuples.\n\u003c/p\u003e\u003cp\u003eExample (where \u003ccode\u003eh\u003c/code\u003e is a handle from \u003ccode\u003e\u003ca\u003epgConnect\u003c/a\u003e\u003c/code\u003e):\n\u003c/p\u003e\u003cpre\u003e$(queryTuples \"SELECT usesysid, usename FROM pg_user\") h\n\n=\u003e IO [(Maybe String, Maybe Integer)]\n\u003c/pre\u003e",
        "fct-module": "Database.TemplatePG.SQL",
        "fct-package": "templatepg",
        "fct-signature": "String -\u003e Q Exp",
        "fct-source": "src/Database-TemplatePG-SQL.html#queryTuples",
        "fct-type": "function",
        "title": "queryTuples"
      },
      "index": {
        "description": "queryTuples String Handle IO column1 column2 Query PostgreSQL server and return the results as list of tuples Example where is handle from pgConnect queryTuples SELECT usesysid usename FROM pg user IO Maybe String Maybe Integer",
        "hierarchy": "Database TemplatePG SQL",
        "module": "Database.TemplatePG.SQL",
        "name": "queryTuples",
        "normalized": "String-\u003eQ Exp",
        "package": "templatepg",
        "partial": "Tuples",
        "signature": "String-\u003eQ Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/templatepg/docs/Database-TemplatePG-SQL.html#v:rollback",
      "description": {
        "fct-descr": "\u003cp\u003eRoll back a transaction.\n\u003c/p\u003e",
        "fct-module": "Database.TemplatePG.SQL",
        "fct-package": "templatepg",
        "fct-signature": "Handle -\u003e IO ()",
        "fct-source": "src/Database-TemplatePG-SQL.html#rollback",
        "fct-type": "function",
        "title": "rollback"
      },
      "index": {
        "description": "Roll back transaction",
        "hierarchy": "Database TemplatePG SQL",
        "module": "Database.TemplatePG.SQL",
        "name": "rollback",
        "normalized": "Handle-\u003eIO()",
        "package": "templatepg",
        "partial": "",
        "signature": "Handle-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/templatepg/docs/Database-TemplatePG-SQL.html#v:thConnection",
      "description": {
        "fct-descr": "\u003cp\u003eGrab a PostgreSQL connection for compile time. We do so through the\n environment variables: \u003ccode\u003eTPG_DB\u003c/code\u003e, \u003ccode\u003eTPG_HOST\u003c/code\u003e, \u003ccode\u003eTPG_PORT\u003c/code\u003e, \u003ccode\u003eTPG_USER\u003c/code\u003e, and\n \u003ccode\u003eTPG_PASS\u003c/code\u003e. Only TPG_DB is required.\n\u003c/p\u003e",
        "fct-module": "Database.TemplatePG.SQL",
        "fct-package": "templatepg",
        "fct-signature": "IO Handle",
        "fct-source": "src/Database-TemplatePG-SQL.html#thConnection",
        "fct-type": "function",
        "title": "thConnection"
      },
      "index": {
        "description": "Grab PostgreSQL connection for compile time We do so through the environment variables TPG DB TPG HOST TPG PORT TPG USER and TPG PASS Only TPG DB is required",
        "hierarchy": "Database TemplatePG SQL",
        "module": "Database.TemplatePG.SQL",
        "name": "thConnection",
        "normalized": "",
        "package": "templatepg",
        "partial": "Connection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/templatepg/docs/Database-TemplatePG-SQL.html#v:withTransaction",
      "description": {
        "fct-descr": "\u003cp\u003eRun a sequence of IO actions (presumably SQL statements) wrapped in a\n transaction. Unfortunately you're restricted to using this in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e\n Monad for now due to the use of \u003ccode\u003e\u003ca\u003eonException\u003c/a\u003e\u003c/code\u003e. I'm debating adding a\n \u003ccode\u003eMonadPeelIO\u003c/code\u003e version.\n\u003c/p\u003e",
        "fct-module": "Database.TemplatePG.SQL",
        "fct-package": "templatepg",
        "fct-signature": "Handle -\u003e IO a -\u003e IO a",
        "fct-source": "src/Database-TemplatePG-SQL.html#withTransaction",
        "fct-type": "function",
        "title": "withTransaction"
      },
      "index": {
        "description": "Run sequence of IO actions presumably SQL statements wrapped in transaction Unfortunately you re restricted to using this in the IO Monad for now due to the use of onException debating adding MonadPeelIO version",
        "hierarchy": "Database TemplatePG SQL",
        "module": "Database.TemplatePG.SQL",
        "name": "withTransaction",
        "normalized": "Handle-\u003eIO a-\u003eIO a",
        "package": "templatepg",
        "partial": "Transaction",
        "signature": "Handle-\u003eIO a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/templatepg/docs/Database-TemplatePG-Types.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAll type conversion to and from the PostgreSQL server is handled here.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.TemplatePG.Types",
        "fct-package": "templatepg",
        "fct-signature": "module",
        "fct-source": "src/Database-TemplatePG-Types.html",
        "fct-type": "module",
        "title": "Types"
      },
      "index": {
        "description": "All type conversion to and from the PostgreSQL server is handled here",
        "hierarchy": "Database TemplatePG Types",
        "module": "Database.TemplatePG.Types",
        "name": "Types",
        "normalized": "",
        "package": "templatepg",
        "partial": "Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/templatepg/docs/Database-TemplatePG-Types.html#t:PGType",
      "description": {
        "fct-descr": "\u003cp\u003eTemplatePG currenly only supports a handful of types. It also doesn't\n distinguish between numeric types with different ranges. More types are the\n most likely feature of future TemplatePG releases.\n\u003c/p\u003e",
        "fct-module": "Database.TemplatePG.Types",
        "fct-package": "templatepg",
        "fct-signature": "data",
        "fct-source": "src/Database-TemplatePG-Types.html#PGType",
        "fct-type": "data",
        "title": "PGType"
      },
      "index": {
        "description": "TemplatePG currenly only supports handful of types It also doesn distinguish between numeric types with different ranges More types are the most likely feature of future TemplatePG releases",
        "hierarchy": "Database TemplatePG Types",
        "module": "Database.TemplatePG.Types",
        "name": "PGType",
        "normalized": "",
        "package": "templatepg",
        "partial": "PGType",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/templatepg/docs/Database-TemplatePG-Types.html#v:PGBoolean",
      "description": {
        "fct-descr": "\u003cp\u003ebool\n\u003c/p\u003e",
        "fct-module": "Database.TemplatePG.Types",
        "fct-package": "templatepg",
        "fct-signature": "PGBoolean",
        "fct-source": "src/Database-TemplatePG-Types.html#PGType",
        "fct-type": "function",
        "title": "PGBoolean"
      },
      "index": {
        "description": "bool",
        "hierarchy": "Database TemplatePG Types",
        "module": "Database.TemplatePG.Types",
        "name": "PGBoolean",
        "normalized": "",
        "package": "templatepg",
        "partial": "PGBoolean",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/templatepg/docs/Database-TemplatePG-Types.html#v:PGDate",
      "description": {
        "fct-descr": "\u003cp\u003edate (day without time)\n\u003c/p\u003e",
        "fct-module": "Database.TemplatePG.Types",
        "fct-package": "templatepg",
        "fct-signature": "PGDate",
        "fct-source": "src/Database-TemplatePG-Types.html#PGType",
        "fct-type": "function",
        "title": "PGDate"
      },
      "index": {
        "description": "date day without time",
        "hierarchy": "Database TemplatePG Types",
        "module": "Database.TemplatePG.Types",
        "name": "PGDate",
        "normalized": "",
        "package": "templatepg",
        "partial": "PGDate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/templatepg/docs/Database-TemplatePG-Types.html#v:PGInteger",
      "description": {
        "fct-descr": "\u003cp\u003einteger\n\u003c/p\u003e",
        "fct-module": "Database.TemplatePG.Types",
        "fct-package": "templatepg",
        "fct-signature": "PGInteger",
        "fct-source": "src/Database-TemplatePG-Types.html#PGType",
        "fct-type": "function",
        "title": "PGInteger"
      },
      "index": {
        "description": "integer",
        "hierarchy": "Database TemplatePG Types",
        "module": "Database.TemplatePG.Types",
        "name": "PGInteger",
        "normalized": "",
        "package": "templatepg",
        "partial": "PGInteger",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/templatepg/docs/Database-TemplatePG-Types.html#v:PGInterval",
      "description": {
        "fct-descr": "\u003cp\u003einterval (a time interval), send-only\n\u003c/p\u003e",
        "fct-module": "Database.TemplatePG.Types",
        "fct-package": "templatepg",
        "fct-signature": "PGInterval",
        "fct-source": "src/Database-TemplatePG-Types.html#PGType",
        "fct-type": "function",
        "title": "PGInterval"
      },
      "index": {
        "description": "interval time interval send-only",
        "hierarchy": "Database TemplatePG Types",
        "module": "Database.TemplatePG.Types",
        "name": "PGInterval",
        "normalized": "",
        "package": "templatepg",
        "partial": "PGInterval",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/templatepg/docs/Database-TemplatePG-Types.html#v:PGReal",
      "description": {
        "fct-descr": "\u003cp\u003efloat\n\u003c/p\u003e",
        "fct-module": "Database.TemplatePG.Types",
        "fct-package": "templatepg",
        "fct-signature": "PGReal",
        "fct-source": "src/Database-TemplatePG-Types.html#PGType",
        "fct-type": "function",
        "title": "PGReal"
      },
      "index": {
        "description": "float",
        "hierarchy": "Database TemplatePG Types",
        "module": "Database.TemplatePG.Types",
        "name": "PGReal",
        "normalized": "",
        "package": "templatepg",
        "partial": "PGReal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/templatepg/docs/Database-TemplatePG-Types.html#v:PGText",
      "description": {
        "fct-descr": "\u003cp\u003etext/varchar\n\u003c/p\u003e",
        "fct-module": "Database.TemplatePG.Types",
        "fct-package": "templatepg",
        "fct-signature": "PGText",
        "fct-source": "src/Database-TemplatePG-Types.html#PGType",
        "fct-type": "function",
        "title": "PGText"
      },
      "index": {
        "description": "text varchar",
        "hierarchy": "Database TemplatePG Types",
        "module": "Database.TemplatePG.Types",
        "name": "PGText",
        "normalized": "",
        "package": "templatepg",
        "partial": "PGText",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/templatepg/docs/Database-TemplatePG-Types.html#v:PGTimestampTZ",
      "description": {
        "fct-descr": "\u003cp\u003etimestamptz (timestamp with time zone)\n\u003c/p\u003e",
        "fct-module": "Database.TemplatePG.Types",
        "fct-package": "templatepg",
        "fct-signature": "PGTimestampTZ",
        "fct-source": "src/Database-TemplatePG-Types.html#PGType",
        "fct-type": "function",
        "title": "PGTimestampTZ"
      },
      "index": {
        "description": "timestamptz timestamp with time zone",
        "hierarchy": "Database TemplatePG Types",
        "module": "Database.TemplatePG.Types",
        "name": "PGTimestampTZ",
        "normalized": "",
        "package": "templatepg",
        "partial": "PGTimestamp TZ",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/templatepg/docs/Database-TemplatePG-Types.html#v:pgStringToType",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a string from PostgreSQL of the given type into an appropriate\n Haskell value. Or, more accurately, given a PostgreSQL type, create a\n function for converting a string of that type into a compatible Haskell\n value.\n \u003ccode\u003epgStringToType :: PGType -\u003e (String -\u003e ?)\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Database.TemplatePG.Types",
        "fct-package": "templatepg",
        "fct-signature": "PGType -\u003e Q Exp",
        "fct-source": "src/Database-TemplatePG-Types.html#pgStringToType",
        "fct-type": "function",
        "title": "pgStringToType"
      },
      "index": {
        "description": "Convert string from PostgreSQL of the given type into an appropriate Haskell value Or more accurately given PostgreSQL type create function for converting string of that type into compatible Haskell value pgStringToType PGType String",
        "hierarchy": "Database TemplatePG Types",
        "module": "Database.TemplatePG.Types",
        "name": "pgStringToType",
        "normalized": "PGType-\u003eQ Exp",
        "package": "templatepg",
        "partial": "String To Type",
        "signature": "PGType-\u003eQ Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/templatepg/docs/Database-TemplatePG-Types.html#v:pgTypeFromOID",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a type OID from PostgreSQL's catalog to a TemplatePG\n representation. To get a list of types: \u003ccode\u003eSELECT typname, oid FROM pg_type\u003c/code\u003e\n Note that I have assumed, but not tested, that type OIDs for these basic\n types are consistent across installations. If not, I'm going to have to\n switch to using the text descriptions\n\u003c/p\u003e",
        "fct-module": "Database.TemplatePG.Types",
        "fct-package": "templatepg",
        "fct-signature": "Int-\u003e PGType",
        "fct-type": "function",
        "title": "pgTypeFromOID"
      },
      "index": {
        "description": "Convert type OID from PostgreSQL catalog to TemplatePG representation To get list of types SELECT typname oid FROM pg type Note that have assumed but not tested that type OIDs for these basic types are consistent across installations If not going to have to switch to using the text descriptions",
        "hierarchy": "Database TemplatePG Types",
        "module": "Database.TemplatePG.Types",
        "name": "pgTypeFromOID",
        "normalized": "Int-\u003ePGType",
        "package": "templatepg",
        "partial": "Type From OID",
        "signature": "Int-\u003ePGType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/templatepg/docs/Database-TemplatePG-Types.html#v:pgTypeToString",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a Haskell value to a string of the given PostgreSQL type. Or, more\n accurately, given a PostgreSQL type, create a function for converting\n compatible Haskell values into a string of that type.\n \u003ccode\u003epgTypeToString :: PGType -\u003e (? -\u003e String)\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Database.TemplatePG.Types",
        "fct-package": "templatepg",
        "fct-signature": "PGType -\u003e Q Exp",
        "fct-source": "src/Database-TemplatePG-Types.html#pgTypeToString",
        "fct-type": "function",
        "title": "pgTypeToString"
      },
      "index": {
        "description": "Convert Haskell value to string of the given PostgreSQL type Or more accurately given PostgreSQL type create function for converting compatible Haskell values into string of that type pgTypeToString PGType String",
        "hierarchy": "Database TemplatePG Types",
        "module": "Database.TemplatePG.Types",
        "name": "pgTypeToString",
        "normalized": "PGType-\u003eQ Exp",
        "package": "templatepg",
        "partial": "Type To String",
        "signature": "PGType-\u003eQ Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/templatepg/docs/Database-TemplatePG.html#",
      "description": {
        "fct-module": "Database.TemplatePG",
        "fct-package": "templatepg",
        "fct-signature": "module",
        "fct-source": "src/Database-TemplatePG.html",
        "fct-type": "module",
        "title": "TemplatePG"
      },
      "index": {
        "description": "",
        "hierarchy": "Database TemplatePG",
        "module": "Database.TemplatePG",
        "name": "TemplatePG",
        "normalized": "",
        "package": "templatepg",
        "partial": "Template PG",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/templatepg/docs/Database-TemplatePG.html#t:PGException",
      "description": {
        "fct-descr": "\u003cp\u003ePGException is thrown upon encountering an \u003ccode\u003eErrorResponse\u003c/code\u003e with severity of\n  ERROR, FATAL, or PANIC. It holds the SQLSTATE and message of the error.\n\u003c/p\u003e",
        "fct-module": "Database.TemplatePG",
        "fct-package": "templatepg",
        "fct-signature": "data",
        "fct-source": "src/Database-TemplatePG-Protocol.html#PGException",
        "fct-type": "data",
        "title": "PGException"
      },
      "index": {
        "description": "PGException is thrown upon encountering an ErrorResponse with severity of ERROR FATAL or PANIC It holds the SQLSTATE and message of the error",
        "hierarchy": "Database TemplatePG",
        "module": "Database.TemplatePG",
        "name": "PGException",
        "normalized": "",
        "package": "templatepg",
        "partial": "PGException",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/templatepg/docs/Database-TemplatePG.html#v:PGException",
      "description": {
        "fct-module": "Database.TemplatePG",
        "fct-package": "templatepg",
        "fct-signature": "PGException String String",
        "fct-source": "src/Database-TemplatePG-Protocol.html#PGException",
        "fct-type": "function",
        "title": "PGException"
      },
      "index": {
        "description": "",
        "hierarchy": "Database TemplatePG",
        "module": "Database.TemplatePG",
        "name": "PGException",
        "normalized": "",
        "package": "templatepg",
        "partial": "PGException",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/templatepg/docs/Database-TemplatePG.html#v:execute",
      "description": {
        "fct-descr": "\u003cpre\u003eexecute :: String -\u003e (Handle -\u003e IO ())\u003c/pre\u003e\u003cp\u003eConvenience function to execute a statement on the PostgreSQL server.\n\u003c/p\u003e\u003cp\u003eExample (where \u003ccode\u003eh\u003c/code\u003e is a handle from \u003ccode\u003e\u003ca\u003epgConnect\u003c/a\u003e\u003c/code\u003e):\n\u003c/p\u003e\u003cpre\u003elet rolename = \"BOfH\"\n\n$(execute \"CREATE ROLE {rolename}\") h\n\u003c/pre\u003e",
        "fct-module": "Database.TemplatePG",
        "fct-package": "templatepg",
        "fct-signature": "String -\u003e Q Exp",
        "fct-source": "src/Database-TemplatePG-SQL.html#execute",
        "fct-type": "function",
        "title": "execute"
      },
      "index": {
        "description": "execute String Handle IO Convenience function to execute statement on the PostgreSQL server Example where is handle from pgConnect let rolename BOfH execute CREATE ROLE rolename",
        "hierarchy": "Database TemplatePG",
        "module": "Database.TemplatePG",
        "name": "execute",
        "normalized": "String-\u003eQ Exp",
        "package": "templatepg",
        "partial": "",
        "signature": "String-\u003eQ Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/templatepg/docs/Database-TemplatePG.html#v:insertIgnore",
      "description": {
        "fct-descr": "\u003cp\u003eIgnore duplicate key errors. This is also limited to the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e Monad.\n\u003c/p\u003e",
        "fct-module": "Database.TemplatePG",
        "fct-package": "templatepg",
        "fct-signature": "IO () -\u003e IO ()",
        "fct-source": "src/Database-TemplatePG-SQL.html#insertIgnore",
        "fct-type": "function",
        "title": "insertIgnore"
      },
      "index": {
        "description": "Ignore duplicate key errors This is also limited to the IO Monad",
        "hierarchy": "Database TemplatePG",
        "module": "Database.TemplatePG",
        "name": "insertIgnore",
        "normalized": "IO()-\u003eIO()",
        "package": "templatepg",
        "partial": "Ignore",
        "signature": "IO()-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/templatepg/docs/Database-TemplatePG.html#v:pgConnect",
      "description": {
        "fct-descr": "\u003cp\u003eConnect to a PostgreSQL server.\n\u003c/p\u003e",
        "fct-module": "Database.TemplatePG",
        "fct-package": "templatepg",
        "fct-signature": "HostName-\u003e PortID-\u003e String-\u003e String-\u003e String-\u003e IO Handle",
        "fct-type": "function",
        "title": "pgConnect"
      },
      "index": {
        "description": "Connect to PostgreSQL server",
        "hierarchy": "Database TemplatePG",
        "module": "Database.TemplatePG",
        "name": "pgConnect",
        "normalized": "HostName-\u003ePortID-\u003eString-\u003eString-\u003eString-\u003eIO Handle",
        "package": "templatepg",
        "partial": "Connect",
        "signature": "HostName-\u003ePortID-\u003eString-\u003eString-\u003eString-\u003eIO Handle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/templatepg/docs/Database-TemplatePG.html#v:pgDisconnect",
      "description": {
        "fct-descr": "\u003cp\u003eDisconnect from a PostgreSQL server. Note that this currently doesn't send\n a close message.\n\u003c/p\u003e",
        "fct-module": "Database.TemplatePG",
        "fct-package": "templatepg",
        "fct-signature": "Handle-\u003e IO ()",
        "fct-type": "function",
        "title": "pgDisconnect"
      },
      "index": {
        "description": "Disconnect from PostgreSQL server Note that this currently doesn send close message",
        "hierarchy": "Database TemplatePG",
        "module": "Database.TemplatePG",
        "name": "pgDisconnect",
        "normalized": "Handle-\u003eIO()",
        "package": "templatepg",
        "partial": "Disconnect",
        "signature": "Handle-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/templatepg/docs/Database-TemplatePG.html#v:queryTuple",
      "description": {
        "fct-descr": "\u003cpre\u003equeryTuple :: String -\u003e (Handle -\u003e IO (Maybe (column1, column2, ...)))\u003c/pre\u003e\u003cp\u003eConvenience function to query a PostgreSQL server and return the first\n result as a tuple. If the query produces no results, return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExample (where \u003ccode\u003eh\u003c/code\u003e is a handle from \u003ccode\u003e\u003ca\u003epgConnect\u003c/a\u003e\u003c/code\u003e):\n\u003c/p\u003e\u003cpre\u003elet sysid = 10::Integer;\n\n$(queryTuple \"SELECT usesysid, usename FROM pg_user WHERE usesysid = {sysid}\") h\n\n=\u003e IO (Maybe (Maybe String, Maybe Integer))\n\u003c/pre\u003e",
        "fct-module": "Database.TemplatePG",
        "fct-package": "templatepg",
        "fct-signature": "String -\u003e Q Exp",
        "fct-source": "src/Database-TemplatePG-SQL.html#queryTuple",
        "fct-type": "function",
        "title": "queryTuple"
      },
      "index": {
        "description": "queryTuple String Handle IO Maybe column1 column2 Convenience function to query PostgreSQL server and return the first result as tuple If the query produces no results return Nothing Example where is handle from pgConnect let sysid Integer queryTuple SELECT usesysid usename FROM pg user WHERE usesysid sysid IO Maybe Maybe String Maybe Integer",
        "hierarchy": "Database TemplatePG",
        "module": "Database.TemplatePG",
        "name": "queryTuple",
        "normalized": "String-\u003eQ Exp",
        "package": "templatepg",
        "partial": "Tuple",
        "signature": "String-\u003eQ Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/templatepg/docs/Database-TemplatePG.html#v:queryTuples",
      "description": {
        "fct-descr": "\u003cpre\u003equeryTuples :: String -\u003e (Handle -\u003e IO [(column1, column2, ...)])\u003c/pre\u003e\u003cp\u003eQuery a PostgreSQL server and return the results as a list of tuples.\n\u003c/p\u003e\u003cp\u003eExample (where \u003ccode\u003eh\u003c/code\u003e is a handle from \u003ccode\u003e\u003ca\u003epgConnect\u003c/a\u003e\u003c/code\u003e):\n\u003c/p\u003e\u003cpre\u003e$(queryTuples \"SELECT usesysid, usename FROM pg_user\") h\n\n=\u003e IO [(Maybe String, Maybe Integer)]\n\u003c/pre\u003e",
        "fct-module": "Database.TemplatePG",
        "fct-package": "templatepg",
        "fct-signature": "String -\u003e Q Exp",
        "fct-source": "src/Database-TemplatePG-SQL.html#queryTuples",
        "fct-type": "function",
        "title": "queryTuples"
      },
      "index": {
        "description": "queryTuples String Handle IO column1 column2 Query PostgreSQL server and return the results as list of tuples Example where is handle from pgConnect queryTuples SELECT usesysid usename FROM pg user IO Maybe String Maybe Integer",
        "hierarchy": "Database TemplatePG",
        "module": "Database.TemplatePG",
        "name": "queryTuples",
        "normalized": "String-\u003eQ Exp",
        "package": "templatepg",
        "partial": "Tuples",
        "signature": "String-\u003eQ Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/templatepg/docs/Database-TemplatePG.html#v:rollback",
      "description": {
        "fct-descr": "\u003cp\u003eRoll back a transaction.\n\u003c/p\u003e",
        "fct-module": "Database.TemplatePG",
        "fct-package": "templatepg",
        "fct-signature": "Handle -\u003e IO ()",
        "fct-source": "src/Database-TemplatePG-SQL.html#rollback",
        "fct-type": "function",
        "title": "rollback"
      },
      "index": {
        "description": "Roll back transaction",
        "hierarchy": "Database TemplatePG",
        "module": "Database.TemplatePG",
        "name": "rollback",
        "normalized": "Handle-\u003eIO()",
        "package": "templatepg",
        "partial": "",
        "signature": "Handle-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/templatepg/docs/Database-TemplatePG.html#v:withTransaction",
      "description": {
        "fct-descr": "\u003cp\u003eRun a sequence of IO actions (presumably SQL statements) wrapped in a\n transaction. Unfortunately you're restricted to using this in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e\n Monad for now due to the use of \u003ccode\u003e\u003ca\u003eonException\u003c/a\u003e\u003c/code\u003e. I'm debating adding a\n \u003ccode\u003eMonadPeelIO\u003c/code\u003e version.\n\u003c/p\u003e",
        "fct-module": "Database.TemplatePG",
        "fct-package": "templatepg",
        "fct-signature": "Handle -\u003e IO a -\u003e IO a",
        "fct-source": "src/Database-TemplatePG-SQL.html#withTransaction",
        "fct-type": "function",
        "title": "withTransaction"
      },
      "index": {
        "description": "Run sequence of IO actions presumably SQL statements wrapped in transaction Unfortunately you re restricted to using this in the IO Monad for now due to the use of onException debating adding MonadPeelIO version",
        "hierarchy": "Database TemplatePG",
        "module": "Database.TemplatePG",
        "name": "withTransaction",
        "normalized": "Handle-\u003eIO a-\u003eIO a",
        "package": "templatepg",
        "partial": "Transaction",
        "signature": "Handle-\u003eIO a-\u003eIO a"
      }
    }
  }
]