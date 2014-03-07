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
        "word": "templatepg"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Protocol module allows for direct, low-level communication with a\n  PostgreSQL server over TCP/IP. You probably don't want to use this module\n  directly.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.TemplatePG.Protocol",
          "name": "Protocol",
          "package": "templatepg",
          "source": "src/Database-TemplatePG-Protocol.html",
          "type": "module"
        },
        "index": {
          "description": "The Protocol module allows for direct low-level communication with PostgreSQL server over TCP IP You probably don want to use this module directly",
          "hierarchy": "Database TemplatePG Protocol",
          "module": "Database.TemplatePG.Protocol",
          "name": "Protocol",
          "package": "templatepg",
          "partial": "Protocol",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/templatepg/docs/Database-TemplatePG-Protocol.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePGException is thrown upon encountering an \u003ccode\u003eErrorResponse\u003c/code\u003e with severity of\n  ERROR, FATAL, or PANIC. It holds the SQLSTATE and message of the error.\n\u003c/p\u003e",
          "module": "Database.TemplatePG.Protocol",
          "name": "PGException",
          "package": "templatepg",
          "source": "src/Database-TemplatePG-Protocol.html#PGException",
          "type": "data"
        },
        "index": {
          "description": "PGException is thrown upon encountering an ErrorResponse with severity of ERROR FATAL or PANIC It holds the SQLSTATE and message of the error",
          "hierarchy": "Database TemplatePG Protocol",
          "module": "Database.TemplatePG.Protocol",
          "name": "PGException",
          "package": "templatepg",
          "partial": "PGException",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/templatepg/docs/Database-TemplatePG-Protocol.html#t:PGException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.TemplatePG.Protocol\",\"Database.TemplatePG\"]",
          "name": "PGException",
          "package": "templatepg",
          "signature": "PGException String String",
          "source": "src/Database-TemplatePG-Protocol.html#PGException",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/templatepg/docs/Database-TemplatePG-Protocol.html#v:PGException\",\"http://hackage.haskell.org/package/templatepg/docs/Database-TemplatePG.html#v:PGException\"]"
        },
        "index": {
          "hierarchy": "Database TemplatePG Protocol",
          "module": "Database.TemplatePG.Protocol",
          "name": "PGException",
          "package": "templatepg",
          "partial": "PGException",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/templatepg/docs/Database-TemplatePG-Protocol.html#v:PGException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescribe a SQL statement/query. A statement description consists of 0 or\n more parameter descriptions (a PostgreSQL type) and zero or more result\n field descriptions (for queries) (consist of the name of the field, the\n type of the field, and a nullability indicator).\n\u003c/p\u003e",
          "module": "Database.TemplatePG.Protocol",
          "name": "describeStatement",
          "package": "templatepg",
          "signature": "Handle-\u003e String-\u003e IO ([PGType], [(String, PGType, Bool)])",
          "type": "function"
        },
        "index": {
          "description": "Describe SQL statement query statement description consists of or more parameter descriptions PostgreSQL type and zero or more result field descriptions for queries consist of the name of the field the type of the field and nullability indicator",
          "hierarchy": "Database TemplatePG Protocol",
          "module": "Database.TemplatePG.Protocol",
          "name": "describeStatement",
          "normalized": "Handle-\u003eString-\u003eIO([PGType],[(String,PGType,Bool)])",
          "package": "templatepg",
          "partial": "Statement",
          "signature": "Handle-\u003eString-\u003eIO([PGType],[(String,PGType,Bool)])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/templatepg/docs/Database-TemplatePG-Protocol.html#v:describeStatement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple query is one which requires sending only a single \u003ccode\u003eSimpleQuery\u003c/code\u003e\n message to the PostgreSQL server. The query is sent as a single string; you\n cannot bind parameters. Note that queries can return 0 results (an empty\n list).\n\u003c/p\u003e",
          "module": "Database.TemplatePG.Protocol",
          "name": "executeSimpleQuery",
          "package": "templatepg",
          "signature": "String-\u003e Handle-\u003e IO [[Maybe ByteString]]",
          "type": "function"
        },
        "index": {
          "description": "simple query is one which requires sending only single SimpleQuery message to the PostgreSQL server The query is sent as single string you cannot bind parameters Note that queries can return results an empty list",
          "hierarchy": "Database TemplatePG Protocol",
          "module": "Database.TemplatePG.Protocol",
          "name": "executeSimpleQuery",
          "normalized": "String-\u003eHandle-\u003eIO[[Maybe ByteString]]",
          "package": "templatepg",
          "partial": "Simple Query",
          "signature": "String-\u003eHandle-\u003eIO[[Maybe ByteString]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/templatepg/docs/Database-TemplatePG-Protocol.html#v:executeSimpleQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhile not strictly necessary, this can make code a little bit clearer. It\n executes a \u003ccode\u003eSimpleQuery\u003c/code\u003e but doesn't look for results.\n\u003c/p\u003e",
          "module": "Database.TemplatePG.Protocol",
          "name": "executeSimpleStatement",
          "package": "templatepg",
          "signature": "String-\u003e Handle-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "While not strictly necessary this can make code little bit clearer It executes SimpleQuery but doesn look for results",
          "hierarchy": "Database TemplatePG Protocol",
          "module": "Database.TemplatePG.Protocol",
          "name": "executeSimpleStatement",
          "normalized": "String-\u003eHandle-\u003eIO()",
          "package": "templatepg",
          "partial": "Simple Statement",
          "signature": "String-\u003eHandle-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/templatepg/docs/Database-TemplatePG-Protocol.html#v:executeSimpleStatement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConnect to a PostgreSQL server.\n\u003c/p\u003e",
          "module": "[\"Database.TemplatePG.Protocol\",\"Database.TemplatePG\"]",
          "name": "pgConnect",
          "package": "templatepg",
          "signature": "HostName-\u003e PortID-\u003e String-\u003e String-\u003e String-\u003e IO Handle",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/templatepg/docs/Database-TemplatePG-Protocol.html#v:pgConnect\",\"http://hackage.haskell.org/package/templatepg/docs/Database-TemplatePG.html#v:pgConnect\"]"
        },
        "index": {
          "description": "Connect to PostgreSQL server",
          "hierarchy": "Database TemplatePG Protocol",
          "module": "Database.TemplatePG.Protocol",
          "name": "pgConnect",
          "normalized": "HostName-\u003ePortID-\u003eString-\u003eString-\u003eString-\u003eIO Handle",
          "package": "templatepg",
          "partial": "Connect",
          "signature": "HostName-\u003ePortID-\u003eString-\u003eString-\u003eString-\u003eIO Handle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/templatepg/docs/Database-TemplatePG-Protocol.html#v:pgConnect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisconnect from a PostgreSQL server. Note that this currently doesn't send\n a close message.\n\u003c/p\u003e",
          "module": "[\"Database.TemplatePG.Protocol\",\"Database.TemplatePG\"]",
          "name": "pgDisconnect",
          "package": "templatepg",
          "signature": "Handle-\u003e IO ()",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/templatepg/docs/Database-TemplatePG-Protocol.html#v:pgDisconnect\",\"http://hackage.haskell.org/package/templatepg/docs/Database-TemplatePG.html#v:pgDisconnect\"]"
        },
        "index": {
          "description": "Disconnect from PostgreSQL server Note that this currently doesn send close message",
          "hierarchy": "Database TemplatePG Protocol",
          "module": "Database.TemplatePG.Protocol",
          "name": "pgDisconnect",
          "normalized": "Handle-\u003eIO()",
          "package": "templatepg",
          "partial": "Disconnect",
          "signature": "Handle-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/templatepg/docs/Database-TemplatePG-Protocol.html#v:pgDisconnect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exposes the high-level Template Haskell interface for querying\n and manipulating the PostgreSQL server.\n\u003c/p\u003e\u003cp\u003eAll SQL string arguments support expression interpolation. Just enclose your\n expression in \u003ccode\u003e{}\u003c/code\u003e in the SQL string.\n\u003c/p\u003e\u003cp\u003eNote that transactions are messy and untested. Attempt to use them at your\n own risk.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.TemplatePG.SQL",
          "name": "SQL",
          "package": "templatepg",
          "source": "src/Database-TemplatePG-SQL.html",
          "type": "module"
        },
        "index": {
          "description": "This module exposes the high-level Template Haskell interface for querying and manipulating the PostgreSQL server All SQL string arguments support expression interpolation Just enclose your expression in in the SQL string Note that transactions are messy and untested Attempt to use them at your own risk",
          "hierarchy": "Database TemplatePG SQL",
          "module": "Database.TemplatePG.SQL",
          "name": "SQL",
          "package": "templatepg",
          "partial": "SQL",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/templatepg/docs/Database-TemplatePG-SQL.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003eexecute :: String -\u003e (Handle -\u003e IO ())\u003c/pre\u003e\u003cp\u003eConvenience function to execute a statement on the PostgreSQL server.\n\u003c/p\u003e\u003cp\u003eExample (where \u003ccode\u003eh\u003c/code\u003e is a handle from \u003ccode\u003e\u003ca\u003epgConnect\u003c/a\u003e\u003c/code\u003e):\n\u003c/p\u003e\u003cpre\u003elet rolename = \"BOfH\"\n\n$(execute \"CREATE ROLE {rolename}\") h\n\u003c/pre\u003e",
          "module": "[\"Database.TemplatePG.SQL\",\"Database.TemplatePG\"]",
          "name": "execute",
          "package": "templatepg",
          "signature": "String -\u003e Q Exp",
          "source": "src/Database-TemplatePG-SQL.html#execute",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/templatepg/docs/Database-TemplatePG-SQL.html#v:execute\",\"http://hackage.haskell.org/package/templatepg/docs/Database-TemplatePG.html#v:execute\"]"
        },
        "index": {
          "description": "execute String Handle IO Convenience function to execute statement on the PostgreSQL server Example where is handle from pgConnect let rolename BOfH execute CREATE ROLE rolename",
          "hierarchy": "Database TemplatePG SQL",
          "module": "Database.TemplatePG.SQL",
          "name": "execute",
          "normalized": "String-\u003eQ Exp",
          "package": "templatepg",
          "signature": "String-\u003eQ Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/templatepg/docs/Database-TemplatePG-SQL.html#v:execute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIgnore duplicate key errors. This is also limited to the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e Monad.\n\u003c/p\u003e",
          "module": "[\"Database.TemplatePG.SQL\",\"Database.TemplatePG\"]",
          "name": "insertIgnore",
          "package": "templatepg",
          "signature": "IO () -\u003e IO ()",
          "source": "src/Database-TemplatePG-SQL.html#insertIgnore",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/templatepg/docs/Database-TemplatePG-SQL.html#v:insertIgnore\",\"http://hackage.haskell.org/package/templatepg/docs/Database-TemplatePG.html#v:insertIgnore\"]"
        },
        "index": {
          "description": "Ignore duplicate key errors This is also limited to the IO Monad",
          "hierarchy": "Database TemplatePG SQL",
          "module": "Database.TemplatePG.SQL",
          "name": "insertIgnore",
          "normalized": "IO()-\u003eIO()",
          "package": "templatepg",
          "partial": "Ignore",
          "signature": "IO()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/templatepg/docs/Database-TemplatePG-SQL.html#v:insertIgnore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003equeryTuple :: String -\u003e (Handle -\u003e IO (Maybe (column1, column2, ...)))\u003c/pre\u003e\u003cp\u003eConvenience function to query a PostgreSQL server and return the first\n result as a tuple. If the query produces no results, return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExample (where \u003ccode\u003eh\u003c/code\u003e is a handle from \u003ccode\u003e\u003ca\u003epgConnect\u003c/a\u003e\u003c/code\u003e):\n\u003c/p\u003e\u003cpre\u003elet sysid = 10::Integer;\n\n$(queryTuple \"SELECT usesysid, usename FROM pg_user WHERE usesysid = {sysid}\") h\n\n=\u003e IO (Maybe (Maybe String, Maybe Integer))\n\u003c/pre\u003e",
          "module": "[\"Database.TemplatePG.SQL\",\"Database.TemplatePG\"]",
          "name": "queryTuple",
          "package": "templatepg",
          "signature": "String -\u003e Q Exp",
          "source": "src/Database-TemplatePG-SQL.html#queryTuple",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/templatepg/docs/Database-TemplatePG-SQL.html#v:queryTuple\",\"http://hackage.haskell.org/package/templatepg/docs/Database-TemplatePG.html#v:queryTuple\"]"
        },
        "index": {
          "description": "queryTuple String Handle IO Maybe column1 column2 Convenience function to query PostgreSQL server and return the first result as tuple If the query produces no results return Nothing Example where is handle from pgConnect let sysid Integer queryTuple SELECT usesysid usename FROM pg user WHERE usesysid sysid IO Maybe Maybe String Maybe Integer",
          "hierarchy": "Database TemplatePG SQL",
          "module": "Database.TemplatePG.SQL",
          "name": "queryTuple",
          "normalized": "String-\u003eQ Exp",
          "package": "templatepg",
          "partial": "Tuple",
          "signature": "String-\u003eQ Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/templatepg/docs/Database-TemplatePG-SQL.html#v:queryTuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003equeryTuples :: String -\u003e (Handle -\u003e IO [(column1, column2, ...)])\u003c/pre\u003e\u003cp\u003eQuery a PostgreSQL server and return the results as a list of tuples.\n\u003c/p\u003e\u003cp\u003eExample (where \u003ccode\u003eh\u003c/code\u003e is a handle from \u003ccode\u003e\u003ca\u003epgConnect\u003c/a\u003e\u003c/code\u003e):\n\u003c/p\u003e\u003cpre\u003e$(queryTuples \"SELECT usesysid, usename FROM pg_user\") h\n\n=\u003e IO [(Maybe String, Maybe Integer)]\n\u003c/pre\u003e",
          "module": "[\"Database.TemplatePG.SQL\",\"Database.TemplatePG\"]",
          "name": "queryTuples",
          "package": "templatepg",
          "signature": "String -\u003e Q Exp",
          "source": "src/Database-TemplatePG-SQL.html#queryTuples",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/templatepg/docs/Database-TemplatePG-SQL.html#v:queryTuples\",\"http://hackage.haskell.org/package/templatepg/docs/Database-TemplatePG.html#v:queryTuples\"]"
        },
        "index": {
          "description": "queryTuples String Handle IO column1 column2 Query PostgreSQL server and return the results as list of tuples Example where is handle from pgConnect queryTuples SELECT usesysid usename FROM pg user IO Maybe String Maybe Integer",
          "hierarchy": "Database TemplatePG SQL",
          "module": "Database.TemplatePG.SQL",
          "name": "queryTuples",
          "normalized": "String-\u003eQ Exp",
          "package": "templatepg",
          "partial": "Tuples",
          "signature": "String-\u003eQ Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/templatepg/docs/Database-TemplatePG-SQL.html#v:queryTuples"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRoll back a transaction.\n\u003c/p\u003e",
          "module": "[\"Database.TemplatePG.SQL\",\"Database.TemplatePG\"]",
          "name": "rollback",
          "package": "templatepg",
          "signature": "Handle -\u003e IO ()",
          "source": "src/Database-TemplatePG-SQL.html#rollback",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/templatepg/docs/Database-TemplatePG-SQL.html#v:rollback\",\"http://hackage.haskell.org/package/templatepg/docs/Database-TemplatePG.html#v:rollback\"]"
        },
        "index": {
          "description": "Roll back transaction",
          "hierarchy": "Database TemplatePG SQL",
          "module": "Database.TemplatePG.SQL",
          "name": "rollback",
          "normalized": "Handle-\u003eIO()",
          "package": "templatepg",
          "signature": "Handle-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/templatepg/docs/Database-TemplatePG-SQL.html#v:rollback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGrab a PostgreSQL connection for compile time. We do so through the\n environment variables: \u003ccode\u003eTPG_DB\u003c/code\u003e, \u003ccode\u003eTPG_HOST\u003c/code\u003e, \u003ccode\u003eTPG_PORT\u003c/code\u003e, \u003ccode\u003eTPG_USER\u003c/code\u003e, and\n \u003ccode\u003eTPG_PASS\u003c/code\u003e. Only TPG_DB is required.\n\u003c/p\u003e",
          "module": "Database.TemplatePG.SQL",
          "name": "thConnection",
          "package": "templatepg",
          "signature": "IO Handle",
          "source": "src/Database-TemplatePG-SQL.html#thConnection",
          "type": "function"
        },
        "index": {
          "description": "Grab PostgreSQL connection for compile time We do so through the environment variables TPG DB TPG HOST TPG PORT TPG USER and TPG PASS Only TPG DB is required",
          "hierarchy": "Database TemplatePG SQL",
          "module": "Database.TemplatePG.SQL",
          "name": "thConnection",
          "package": "templatepg",
          "partial": "Connection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/templatepg/docs/Database-TemplatePG-SQL.html#v:thConnection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a sequence of IO actions (presumably SQL statements) wrapped in a\n transaction. Unfortunately you're restricted to using this in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e\n Monad for now due to the use of \u003ccode\u003e\u003ca\u003eonException\u003c/a\u003e\u003c/code\u003e. I'm debating adding a\n \u003ccode\u003eMonadPeelIO\u003c/code\u003e version.\n\u003c/p\u003e",
          "module": "[\"Database.TemplatePG.SQL\",\"Database.TemplatePG\"]",
          "name": "withTransaction",
          "package": "templatepg",
          "signature": "Handle -\u003e IO a -\u003e IO a",
          "source": "src/Database-TemplatePG-SQL.html#withTransaction",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/templatepg/docs/Database-TemplatePG-SQL.html#v:withTransaction\",\"http://hackage.haskell.org/package/templatepg/docs/Database-TemplatePG.html#v:withTransaction\"]"
        },
        "index": {
          "description": "Run sequence of IO actions presumably SQL statements wrapped in transaction Unfortunately you re restricted to using this in the IO Monad for now due to the use of onException debating adding MonadPeelIO version",
          "hierarchy": "Database TemplatePG SQL",
          "module": "Database.TemplatePG.SQL",
          "name": "withTransaction",
          "normalized": "Handle-\u003eIO a-\u003eIO a",
          "package": "templatepg",
          "partial": "Transaction",
          "signature": "Handle-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/templatepg/docs/Database-TemplatePG-SQL.html#v:withTransaction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAll type conversion to and from the PostgreSQL server is handled here.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.TemplatePG.Types",
          "name": "Types",
          "package": "templatepg",
          "source": "src/Database-TemplatePG-Types.html",
          "type": "module"
        },
        "index": {
          "description": "All type conversion to and from the PostgreSQL server is handled here",
          "hierarchy": "Database TemplatePG Types",
          "module": "Database.TemplatePG.Types",
          "name": "Types",
          "package": "templatepg",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/templatepg/docs/Database-TemplatePG-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTemplatePG currenly only supports a handful of types. It also doesn't\n distinguish between numeric types with different ranges. More types are the\n most likely feature of future TemplatePG releases.\n\u003c/p\u003e",
          "module": "Database.TemplatePG.Types",
          "name": "PGType",
          "package": "templatepg",
          "source": "src/Database-TemplatePG-Types.html#PGType",
          "type": "data"
        },
        "index": {
          "description": "TemplatePG currenly only supports handful of types It also doesn distinguish between numeric types with different ranges More types are the most likely feature of future TemplatePG releases",
          "hierarchy": "Database TemplatePG Types",
          "module": "Database.TemplatePG.Types",
          "name": "PGType",
          "package": "templatepg",
          "partial": "PGType",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/templatepg/docs/Database-TemplatePG-Types.html#t:PGType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ebool\n\u003c/p\u003e",
          "module": "Database.TemplatePG.Types",
          "name": "PGBoolean",
          "package": "templatepg",
          "signature": "PGBoolean",
          "source": "src/Database-TemplatePG-Types.html#PGType",
          "type": "function"
        },
        "index": {
          "description": "bool",
          "hierarchy": "Database TemplatePG Types",
          "module": "Database.TemplatePG.Types",
          "name": "PGBoolean",
          "package": "templatepg",
          "partial": "PGBoolean",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/templatepg/docs/Database-TemplatePG-Types.html#v:PGBoolean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edate (day without time)\n\u003c/p\u003e",
          "module": "Database.TemplatePG.Types",
          "name": "PGDate",
          "package": "templatepg",
          "signature": "PGDate",
          "source": "src/Database-TemplatePG-Types.html#PGType",
          "type": "function"
        },
        "index": {
          "description": "date day without time",
          "hierarchy": "Database TemplatePG Types",
          "module": "Database.TemplatePG.Types",
          "name": "PGDate",
          "package": "templatepg",
          "partial": "PGDate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/templatepg/docs/Database-TemplatePG-Types.html#v:PGDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einteger\n\u003c/p\u003e",
          "module": "Database.TemplatePG.Types",
          "name": "PGInteger",
          "package": "templatepg",
          "signature": "PGInteger",
          "source": "src/Database-TemplatePG-Types.html#PGType",
          "type": "function"
        },
        "index": {
          "description": "integer",
          "hierarchy": "Database TemplatePG Types",
          "module": "Database.TemplatePG.Types",
          "name": "PGInteger",
          "package": "templatepg",
          "partial": "PGInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/templatepg/docs/Database-TemplatePG-Types.html#v:PGInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einterval (a time interval), send-only\n\u003c/p\u003e",
          "module": "Database.TemplatePG.Types",
          "name": "PGInterval",
          "package": "templatepg",
          "signature": "PGInterval",
          "source": "src/Database-TemplatePG-Types.html#PGType",
          "type": "function"
        },
        "index": {
          "description": "interval time interval send-only",
          "hierarchy": "Database TemplatePG Types",
          "module": "Database.TemplatePG.Types",
          "name": "PGInterval",
          "package": "templatepg",
          "partial": "PGInterval",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/templatepg/docs/Database-TemplatePG-Types.html#v:PGInterval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efloat\n\u003c/p\u003e",
          "module": "Database.TemplatePG.Types",
          "name": "PGReal",
          "package": "templatepg",
          "signature": "PGReal",
          "source": "src/Database-TemplatePG-Types.html#PGType",
          "type": "function"
        },
        "index": {
          "description": "float",
          "hierarchy": "Database TemplatePG Types",
          "module": "Database.TemplatePG.Types",
          "name": "PGReal",
          "package": "templatepg",
          "partial": "PGReal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/templatepg/docs/Database-TemplatePG-Types.html#v:PGReal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etext/varchar\n\u003c/p\u003e",
          "module": "Database.TemplatePG.Types",
          "name": "PGText",
          "package": "templatepg",
          "signature": "PGText",
          "source": "src/Database-TemplatePG-Types.html#PGType",
          "type": "function"
        },
        "index": {
          "description": "text varchar",
          "hierarchy": "Database TemplatePG Types",
          "module": "Database.TemplatePG.Types",
          "name": "PGText",
          "package": "templatepg",
          "partial": "PGText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/templatepg/docs/Database-TemplatePG-Types.html#v:PGText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etimestamptz (timestamp with time zone)\n\u003c/p\u003e",
          "module": "Database.TemplatePG.Types",
          "name": "PGTimestampTZ",
          "package": "templatepg",
          "signature": "PGTimestampTZ",
          "source": "src/Database-TemplatePG-Types.html#PGType",
          "type": "function"
        },
        "index": {
          "description": "timestamptz timestamp with time zone",
          "hierarchy": "Database TemplatePG Types",
          "module": "Database.TemplatePG.Types",
          "name": "PGTimestampTZ",
          "package": "templatepg",
          "partial": "PGTimestamp TZ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/templatepg/docs/Database-TemplatePG-Types.html#v:PGTimestampTZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a string from PostgreSQL of the given type into an appropriate\n Haskell value. Or, more accurately, given a PostgreSQL type, create a\n function for converting a string of that type into a compatible Haskell\n value.\n \u003ccode\u003epgStringToType :: PGType -\u003e (String -\u003e ?)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Database.TemplatePG.Types",
          "name": "pgStringToType",
          "package": "templatepg",
          "signature": "PGType -\u003e Q Exp",
          "source": "src/Database-TemplatePG-Types.html#pgStringToType",
          "type": "function"
        },
        "index": {
          "description": "Convert string from PostgreSQL of the given type into an appropriate Haskell value Or more accurately given PostgreSQL type create function for converting string of that type into compatible Haskell value pgStringToType PGType String",
          "hierarchy": "Database TemplatePG Types",
          "module": "Database.TemplatePG.Types",
          "name": "pgStringToType",
          "normalized": "PGType-\u003eQ Exp",
          "package": "templatepg",
          "partial": "String To Type",
          "signature": "PGType-\u003eQ Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/templatepg/docs/Database-TemplatePG-Types.html#v:pgStringToType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a type OID from PostgreSQL's catalog to a TemplatePG\n representation. To get a list of types: \u003ccode\u003eSELECT typname, oid FROM pg_type\u003c/code\u003e\n Note that I have assumed, but not tested, that type OIDs for these basic\n types are consistent across installations. If not, I'm going to have to\n switch to using the text descriptions\n\u003c/p\u003e",
          "module": "Database.TemplatePG.Types",
          "name": "pgTypeFromOID",
          "package": "templatepg",
          "signature": "Int-\u003e PGType",
          "type": "function"
        },
        "index": {
          "description": "Convert type OID from PostgreSQL catalog to TemplatePG representation To get list of types SELECT typname oid FROM pg type Note that have assumed but not tested that type OIDs for these basic types are consistent across installations If not going to have to switch to using the text descriptions",
          "hierarchy": "Database TemplatePG Types",
          "module": "Database.TemplatePG.Types",
          "name": "pgTypeFromOID",
          "normalized": "Int-\u003ePGType",
          "package": "templatepg",
          "partial": "Type From OID",
          "signature": "Int-\u003ePGType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/templatepg/docs/Database-TemplatePG-Types.html#v:pgTypeFromOID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a Haskell value to a string of the given PostgreSQL type. Or, more\n accurately, given a PostgreSQL type, create a function for converting\n compatible Haskell values into a string of that type.\n \u003ccode\u003epgTypeToString :: PGType -\u003e (? -\u003e String)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Database.TemplatePG.Types",
          "name": "pgTypeToString",
          "package": "templatepg",
          "signature": "PGType -\u003e Q Exp",
          "source": "src/Database-TemplatePG-Types.html#pgTypeToString",
          "type": "function"
        },
        "index": {
          "description": "Convert Haskell value to string of the given PostgreSQL type Or more accurately given PostgreSQL type create function for converting compatible Haskell values into string of that type pgTypeToString PGType String",
          "hierarchy": "Database TemplatePG Types",
          "module": "Database.TemplatePG.Types",
          "name": "pgTypeToString",
          "normalized": "PGType-\u003eQ Exp",
          "package": "templatepg",
          "partial": "Type To String",
          "signature": "PGType-\u003eQ Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/templatepg/docs/Database-TemplatePG-Types.html#v:pgTypeToString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.TemplatePG",
          "name": "TemplatePG",
          "package": "templatepg",
          "source": "src/Database-TemplatePG.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Database TemplatePG",
          "module": "Database.TemplatePG",
          "name": "TemplatePG",
          "package": "templatepg",
          "partial": "Template PG",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/templatepg/docs/Database-TemplatePG.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePGException is thrown upon encountering an \u003ccode\u003eErrorResponse\u003c/code\u003e with severity of\n  ERROR, FATAL, or PANIC. It holds the SQLSTATE and message of the error.\n\u003c/p\u003e",
          "module": "Database.TemplatePG",
          "name": "PGException",
          "package": "templatepg",
          "source": "src/Database-TemplatePG-Protocol.html#PGException",
          "type": "data"
        },
        "index": {
          "description": "PGException is thrown upon encountering an ErrorResponse with severity of ERROR FATAL or PANIC It holds the SQLSTATE and message of the error",
          "hierarchy": "Database TemplatePG",
          "module": "Database.TemplatePG",
          "name": "PGException",
          "package": "templatepg",
          "partial": "PGException",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/templatepg/docs/Database-TemplatePG.html#t:PGException"
      }
    }
  ]
]