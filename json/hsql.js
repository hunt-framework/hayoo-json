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
        "word": "hsql"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eManagement of handles and exception handling. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "DB.HSQL.Core",
          "name": "Core",
          "package": "hsql",
          "source": "src/DB-HSQL-Core.html",
          "type": "module"
        },
        "index": {
          "description": "Management of handles and exception handling",
          "hierarchy": "DB HSQL Core",
          "module": "DB.HSQL.Core",
          "name": "Core",
          "package": "hsql",
          "partial": "Core",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Core.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeprecated: Use \u003ccode\u003e\u003ca\u003ecatch\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e",
          "module": "[\"DB.HSQL.Core\",\"Database.HSQL\"]",
          "name": "catchSql",
          "package": "hsql",
          "signature": "IO a -\u003e (SqlError -\u003e IO a) -\u003e IO a",
          "source": "src/DB-HSQL-Core.html#catchSql",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Core.html#v:catchSql\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:catchSql\"]"
        },
        "index": {
          "description": "Deprecated Use catch instead",
          "hierarchy": "DB HSQL Core",
          "module": "DB.HSQL.Core",
          "name": "catchSql",
          "normalized": "IO a-\u003e(SqlError-\u003eIO a)-\u003eIO a",
          "package": "hsql",
          "partial": "Sql",
          "signature": "IO a-\u003e(SqlError-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Core.html#v:catchSql"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eif closed, throws \u003ccode\u003e\u003ca\u003eSqlClosedHandle\u003c/a\u003e\u003c/code\u003e exception.\n\u003c/p\u003e",
          "module": "DB.HSQL.Core",
          "name": "checkHandle",
          "package": "hsql",
          "signature": "MVar Bool-\u003e IO a-\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "if closed throws SqlClosedHandle exception",
          "hierarchy": "DB HSQL Core",
          "module": "DB.HSQL.Core",
          "name": "checkHandle",
          "normalized": "MVar Bool-\u003eIO a-\u003eIO a",
          "package": "hsql",
          "partial": "Handle",
          "signature": "MVar Bool-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Core.html#v:checkHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eif closed, no action.\n\u003c/p\u003e",
          "module": "DB.HSQL.Core",
          "name": "closeHandle",
          "package": "hsql",
          "signature": "MVar Bool-\u003e IO ()-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "if closed no action",
          "hierarchy": "DB HSQL Core",
          "module": "DB.HSQL.Core",
          "name": "closeHandle",
          "normalized": "MVar Bool-\u003eIO()-\u003eIO()",
          "package": "hsql",
          "partial": "Handle",
          "signature": "MVar Bool-\u003eIO()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Core.html#v:closeHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeprecated: Use \u003ccode\u003e\u003ca\u003ehandle\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e",
          "module": "[\"DB.HSQL.Core\",\"Database.HSQL\"]",
          "name": "handleSql",
          "package": "hsql",
          "signature": "(SqlError -\u003e IO a) -\u003e IO a -\u003e IO a",
          "source": "src/DB-HSQL-Core.html#handleSql",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Core.html#v:handleSql\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:handleSql\"]"
        },
        "index": {
          "description": "Deprecated Use handle instead",
          "hierarchy": "DB HSQL Core",
          "module": "DB.HSQL.Core",
          "name": "handleSql",
          "normalized": "(SqlError-\u003eIO a)-\u003eIO a-\u003eIO a",
          "package": "hsql",
          "partial": "Sql",
          "signature": "(SqlError-\u003eIO a)-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Core.html#v:handleSql"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCasts, if possible, an \u003ccode\u003e\u003ca\u003eException\u003c/a\u003e\u003c/code\u003e to an \u003ccode\u003e\u003ca\u003eSqlError\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"DB.HSQL.Core\",\"Database.HSQL\"]",
          "name": "sqlExceptions",
          "package": "hsql",
          "signature": "x-\u003e Maybe SqlError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Core.html#v:sqlExceptions\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:sqlExceptions\"]"
        },
        "index": {
          "description": "Casts if possible an Exception to an SqlError",
          "hierarchy": "DB HSQL Core",
          "module": "DB.HSQL.Core",
          "name": "sqlExceptions",
          "normalized": "a-\u003eMaybe SqlError",
          "package": "hsql",
          "partial": "Exceptions",
          "signature": "x-\u003eMaybe SqlError",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Core.html#v:sqlExceptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eSqlError\u003c/a\u003e\u003c/code\u003e type for a variety of DB specific error conditions,\nwith appropriate \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eTypeable\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eException\u003c/a\u003e\u003c/code\u003e instances.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DB.HSQL.Error",
          "name": "Error",
          "package": "hsql",
          "source": "src/DB-HSQL-Error.html",
          "type": "module"
        },
        "index": {
          "description": "SqlError type for variety of DB specific error conditions with appropriate Show Typeable and Exception instances",
          "hierarchy": "DB HSQL Error",
          "module": "DB.HSQL.Error",
          "name": "Error",
          "package": "hsql",
          "partial": "Error",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Error.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.Error",
          "name": "SqlError",
          "package": "hsql",
          "source": "src/DB-HSQL-Error.html#SqlError",
          "type": "data"
        },
        "index": {
          "hierarchy": "DB HSQL Error",
          "module": "DB.HSQL.Error",
          "name": "SqlError",
          "package": "hsql",
          "partial": "Sql Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Error.html#t:SqlError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erequested field can't be converted to requested type\n\u003c/p\u003e",
          "module": "[\"DB.HSQL.Error\",\"Database.HSQL.Types\",\"Database.HSQL\"]",
          "name": "SqlBadTypeCast",
          "package": "hsql",
          "signature": "SqlBadTypeCast",
          "source": "src/DB-HSQL-Error.html#SqlError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Error.html#v:SqlBadTypeCast\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlBadTypeCast\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlBadTypeCast\"]"
        },
        "index": {
          "description": "requested field can be converted to requested type",
          "hierarchy": "DB HSQL Error",
          "module": "DB.HSQL.Error",
          "name": "SqlBadTypeCast",
          "package": "hsql",
          "partial": "Sql Bad Type Cast",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Error.html#v:SqlBadTypeCast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereferenced handle is already closed\n\u003c/p\u003e",
          "module": "[\"DB.HSQL.Error\",\"Database.HSQL.Types\",\"Database.HSQL\"]",
          "name": "SqlClosedHandle",
          "package": "hsql",
          "signature": "SqlClosedHandle",
          "source": "src/DB-HSQL-Error.html#SqlError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Error.html#v:SqlClosedHandle\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlClosedHandle\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlClosedHandle\"]"
        },
        "index": {
          "description": "referenced handle is already closed",
          "hierarchy": "DB HSQL Error",
          "module": "DB.HSQL.Error",
          "name": "SqlClosedHandle",
          "package": "hsql",
          "partial": "Sql Closed Handle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Error.html#v:SqlClosedHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egeneric error condition, with further specification\n\u003c/p\u003e",
          "module": "[\"DB.HSQL.Error\",\"Database.HSQL.Types\",\"Database.HSQL\"]",
          "name": "SqlError",
          "package": "hsql",
          "signature": "SqlError",
          "source": "src/DB-HSQL-Error.html#SqlError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Error.html#v:SqlError\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlError\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlError\"]"
        },
        "index": {
          "description": "generic error condition with further specification",
          "hierarchy": "DB HSQL Error",
          "module": "DB.HSQL.Error",
          "name": "SqlError",
          "package": "hsql",
          "partial": "Sql Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Error.html#v:SqlError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erequested field returns NULL\n\u003c/p\u003e",
          "module": "[\"DB.HSQL.Error\",\"Database.HSQL.Types\",\"Database.HSQL\"]",
          "name": "SqlFetchNull",
          "package": "hsql",
          "signature": "SqlFetchNull",
          "source": "src/DB-HSQL-Error.html#SqlError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Error.html#v:SqlFetchNull\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlFetchNull\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlFetchNull\"]"
        },
        "index": {
          "description": "requested field returns NULL",
          "hierarchy": "DB HSQL Error",
          "module": "DB.HSQL.Error",
          "name": "SqlFetchNull",
          "package": "hsql",
          "partial": "Sql Fetch Null",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Error.html#v:SqlFetchNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erequested handle is invalid\n\u003c/p\u003e",
          "module": "[\"DB.HSQL.Error\",\"Database.HSQL.Types\",\"Database.HSQL\"]",
          "name": "SqlInvalidHandle",
          "package": "hsql",
          "signature": "SqlInvalidHandle",
          "source": "src/DB-HSQL-Error.html#SqlError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Error.html#v:SqlInvalidHandle\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlInvalidHandle\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlInvalidHandle\"]"
        },
        "index": {
          "description": "requested handle is invalid",
          "hierarchy": "DB HSQL Error",
          "module": "DB.HSQL.Error",
          "name": "SqlInvalidHandle",
          "package": "hsql",
          "partial": "Sql Invalid Handle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Error.html#v:SqlInvalidHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emore data is needed, e.g. additional connection\n specs\n\u003c/p\u003e",
          "module": "[\"DB.HSQL.Error\",\"Database.HSQL.Types\",\"Database.HSQL\"]",
          "name": "SqlNeedMoreData",
          "package": "hsql",
          "signature": "SqlNeedMoreData",
          "source": "src/DB-HSQL-Error.html#SqlError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Error.html#v:SqlNeedMoreData\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlNeedMoreData\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlNeedMoreData\"]"
        },
        "index": {
          "description": "more data is needed e.g additional connection specs",
          "hierarchy": "DB HSQL Error",
          "module": "DB.HSQL.Error",
          "name": "SqlNeedMoreData",
          "package": "hsql",
          "partial": "Sql Need More Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Error.html#v:SqlNeedMoreData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eno more data was available\n\u003c/p\u003e",
          "module": "[\"DB.HSQL.Error\",\"Database.HSQL.Types\",\"Database.HSQL\"]",
          "name": "SqlNoMoreData",
          "package": "hsql",
          "signature": "SqlNoMoreData",
          "source": "src/DB-HSQL-Error.html#SqlError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Error.html#v:SqlNoMoreData\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlNoMoreData\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlNoMoreData\"]"
        },
        "index": {
          "description": "no more data was available",
          "hierarchy": "DB HSQL Error",
          "module": "DB.HSQL.Error",
          "name": "SqlNoMoreData",
          "package": "hsql",
          "partial": "Sql No More Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Error.html#v:SqlNoMoreData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econnection is blocked by running transaction\n\u003c/p\u003e",
          "module": "[\"DB.HSQL.Error\",\"Database.HSQL.Types\",\"Database.HSQL\"]",
          "name": "SqlStillExecuting",
          "package": "hsql",
          "signature": "SqlStillExecuting",
          "source": "src/DB-HSQL-Error.html#SqlError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Error.html#v:SqlStillExecuting\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlStillExecuting\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlStillExecuting\"]"
        },
        "index": {
          "description": "connection is blocked by running transaction",
          "hierarchy": "DB HSQL Error",
          "module": "DB.HSQL.Error",
          "name": "SqlStillExecuting",
          "package": "hsql",
          "partial": "Sql Still Executing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Error.html#v:SqlStillExecuting"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erequested field isn't known\n\u003c/p\u003e",
          "module": "[\"DB.HSQL.Error\",\"Database.HSQL.Types\",\"Database.HSQL\"]",
          "name": "SqlUnknownField",
          "package": "hsql",
          "signature": "SqlUnknownField",
          "source": "src/DB-HSQL-Error.html#SqlError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Error.html#v:SqlUnknownField\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlUnknownField\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlUnknownField\"]"
        },
        "index": {
          "description": "requested field isn known",
          "hierarchy": "DB HSQL Error",
          "module": "DB.HSQL.Error",
          "name": "SqlUnknownField",
          "package": "hsql",
          "partial": "Sql Unknown Field",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Error.html#v:SqlUnknownField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erequested operation isn't supported\n\u003c/p\u003e",
          "module": "[\"DB.HSQL.Error\",\"Database.HSQL.Types\",\"Database.HSQL\"]",
          "name": "SqlUnsupportedOperation",
          "package": "hsql",
          "signature": "SqlUnsupportedOperation",
          "source": "src/DB-HSQL-Error.html#SqlError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Error.html#v:SqlUnsupportedOperation\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlUnsupportedOperation\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlUnsupportedOperation\"]"
        },
        "index": {
          "description": "requested operation isn supported",
          "hierarchy": "DB HSQL Error",
          "module": "DB.HSQL.Error",
          "name": "SqlUnsupportedOperation",
          "package": "hsql",
          "partial": "Sql Unsupported Operation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Error.html#v:SqlUnsupportedOperation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DB.HSQL.Error\",\"Database.HSQL.Types\",\"Database.HSQL\"]",
          "name": "seErrorMsg",
          "package": "hsql",
          "signature": "String",
          "source": "src/DB-HSQL-Error.html#SqlError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Error.html#v:seErrorMsg\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:seErrorMsg\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:seErrorMsg\"]"
        },
        "index": {
          "hierarchy": "DB HSQL Error",
          "module": "DB.HSQL.Error",
          "name": "seErrorMsg",
          "package": "hsql",
          "partial": "Error Msg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Error.html#v:seErrorMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DB.HSQL.Error\",\"Database.HSQL.Types\",\"Database.HSQL\"]",
          "name": "seFieldName",
          "package": "hsql",
          "signature": "String",
          "source": "src/DB-HSQL-Error.html#SqlError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Error.html#v:seFieldName\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:seFieldName\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:seFieldName\"]"
        },
        "index": {
          "hierarchy": "DB HSQL Error",
          "module": "DB.HSQL.Error",
          "name": "seFieldName",
          "package": "hsql",
          "partial": "Field Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Error.html#v:seFieldName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DB.HSQL.Error\",\"Database.HSQL.Types\",\"Database.HSQL\"]",
          "name": "seFieldType",
          "package": "hsql",
          "signature": "SqlType",
          "source": "src/DB-HSQL-Error.html#SqlError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Error.html#v:seFieldType\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:seFieldType\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:seFieldType\"]"
        },
        "index": {
          "hierarchy": "DB HSQL Error",
          "module": "DB.HSQL.Error",
          "name": "seFieldType",
          "package": "hsql",
          "partial": "Field Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Error.html#v:seFieldType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DB.HSQL.Error\",\"Database.HSQL.Types\",\"Database.HSQL\"]",
          "name": "seNativeError",
          "package": "hsql",
          "signature": "Int",
          "source": "src/DB-HSQL-Error.html#SqlError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Error.html#v:seNativeError\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:seNativeError\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:seNativeError\"]"
        },
        "index": {
          "hierarchy": "DB HSQL Error",
          "module": "DB.HSQL.Error",
          "name": "seNativeError",
          "package": "hsql",
          "partial": "Native Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Error.html#v:seNativeError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DB.HSQL.Error\",\"Database.HSQL.Types\",\"Database.HSQL\"]",
          "name": "seState",
          "package": "hsql",
          "signature": "String",
          "source": "src/DB-HSQL-Error.html#SqlError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Error.html#v:seState\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:seState\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:seState\"]"
        },
        "index": {
          "hierarchy": "DB HSQL Error",
          "module": "DB.HSQL.Error",
          "name": "seState",
          "package": "hsql",
          "partial": "State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Error.html#v:seState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eSqlBind\u003c/a\u003e\u003c/code\u003e instances for \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DB.HSQL.Type.Diverse",
          "name": "Diverse",
          "package": "hsql",
          "source": "src/DB-HSQL-Type-Diverse.html",
          "type": "module"
        },
        "index": {
          "description": "SqlBind instances for String Bool and Maybe",
          "hierarchy": "DB HSQL Type Diverse",
          "module": "DB.HSQL.Type.Diverse",
          "name": "Diverse",
          "package": "hsql",
          "partial": "Diverse",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-Diverse.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeometric 2D types, equipped with \u003ccode\u003e\u003ca\u003eSqlBind\u003c/a\u003e\u003c/code\u003e instances.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DB.HSQL.Type.Geometric",
          "name": "Geometric",
          "package": "hsql",
          "source": "src/DB-HSQL-Type-Geometric.html",
          "type": "module"
        },
        "index": {
          "description": "Geometric types equipped with SqlBind instances",
          "hierarchy": "DB HSQL Type Geometric",
          "module": "DB.HSQL.Type.Geometric",
          "name": "Geometric",
          "package": "hsql",
          "partial": "Geometric",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-Geometric.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA 2D rectangle.\n\u003c/p\u003e",
          "module": "DB.HSQL.Type.Geometric",
          "name": "Box",
          "package": "hsql",
          "source": "src/DB-HSQL-Type-Geometric.html#Box",
          "type": "data"
        },
        "index": {
          "description": "rectangle",
          "hierarchy": "DB HSQL Type Geometric",
          "module": "DB.HSQL.Type.Geometric",
          "name": "Box",
          "package": "hsql",
          "partial": "Box",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-Geometric.html#t:Box"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA 2D circle\n\u003c/p\u003e",
          "module": "DB.HSQL.Type.Geometric",
          "name": "Circle",
          "package": "hsql",
          "source": "src/DB-HSQL-Type-Geometric.html#Circle",
          "type": "data"
        },
        "index": {
          "description": "circle",
          "hierarchy": "DB HSQL Type Geometric",
          "module": "DB.HSQL.Type.Geometric",
          "name": "Circle",
          "package": "hsql",
          "partial": "Circle",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-Geometric.html#t:Circle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA 2D straight line.\n\u003c/p\u003e",
          "module": "DB.HSQL.Type.Geometric",
          "name": "Line",
          "package": "hsql",
          "source": "src/DB-HSQL-Type-Geometric.html#Line",
          "type": "data"
        },
        "index": {
          "description": "straight line",
          "hierarchy": "DB HSQL Type Geometric",
          "module": "DB.HSQL.Type.Geometric",
          "name": "Line",
          "package": "hsql",
          "partial": "Line",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-Geometric.html#t:Line"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA 2D path, either open, or closed (looping). \n\u003c/p\u003e",
          "module": "DB.HSQL.Type.Geometric",
          "name": "Path",
          "package": "hsql",
          "source": "src/DB-HSQL-Type-Geometric.html#Path",
          "type": "data"
        },
        "index": {
          "description": "path either open or closed looping",
          "hierarchy": "DB HSQL Type Geometric",
          "module": "DB.HSQL.Type.Geometric",
          "name": "Path",
          "package": "hsql",
          "partial": "Path",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-Geometric.html#t:Path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA 2D point.\n\u003c/p\u003e",
          "module": "DB.HSQL.Type.Geometric",
          "name": "Point",
          "package": "hsql",
          "source": "src/DB-HSQL-Type-Geometric.html#Point",
          "type": "data"
        },
        "index": {
          "description": "point",
          "hierarchy": "DB HSQL Type Geometric",
          "module": "DB.HSQL.Type.Geometric",
          "name": "Point",
          "package": "hsql",
          "partial": "Point",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-Geometric.html#t:Point"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA 2D polygon (without holes).\n\u003c/p\u003e",
          "module": "DB.HSQL.Type.Geometric",
          "name": "Polygon",
          "package": "hsql",
          "source": "src/DB-HSQL-Type-Geometric.html#Polygon",
          "type": "data"
        },
        "index": {
          "description": "polygon without holes",
          "hierarchy": "DB HSQL Type Geometric",
          "module": "DB.HSQL.Type.Geometric",
          "name": "Polygon",
          "package": "hsql",
          "partial": "Polygon",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-Geometric.html#t:Polygon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DB.HSQL.Type.Geometric\",\"Database.HSQL\"]",
          "name": "Box",
          "package": "hsql",
          "signature": "Box",
          "source": "src/DB-HSQL-Type-Geometric.html#Box",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-Geometric.html#v:Box\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:Box\"]"
        },
        "index": {
          "hierarchy": "DB HSQL Type Geometric",
          "module": "DB.HSQL.Type.Geometric",
          "name": "Box",
          "package": "hsql",
          "partial": "Box",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-Geometric.html#v:Box"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DB.HSQL.Type.Geometric\",\"Database.HSQL\"]",
          "name": "Circle",
          "package": "hsql",
          "signature": "Circle",
          "source": "src/DB-HSQL-Type-Geometric.html#Circle",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-Geometric.html#v:Circle\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:Circle\"]"
        },
        "index": {
          "hierarchy": "DB HSQL Type Geometric",
          "module": "DB.HSQL.Type.Geometric",
          "name": "Circle",
          "package": "hsql",
          "partial": "Circle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-Geometric.html#v:Circle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA looping path\n\u003c/p\u003e",
          "module": "[\"DB.HSQL.Type.Geometric\",\"Database.HSQL\"]",
          "name": "ClosedPath",
          "package": "hsql",
          "signature": "ClosedPath",
          "source": "src/DB-HSQL-Type-Geometric.html#Path",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-Geometric.html#v:ClosedPath\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:ClosedPath\"]"
        },
        "index": {
          "description": "looping path",
          "hierarchy": "DB HSQL Type Geometric",
          "module": "DB.HSQL.Type.Geometric",
          "name": "ClosedPath",
          "package": "hsql",
          "partial": "Closed Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-Geometric.html#v:ClosedPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DB.HSQL.Type.Geometric\",\"Database.HSQL\"]",
          "name": "Line",
          "package": "hsql",
          "signature": "Line",
          "source": "src/DB-HSQL-Type-Geometric.html#Line",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-Geometric.html#v:Line\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:Line\"]"
        },
        "index": {
          "hierarchy": "DB HSQL Type Geometric",
          "module": "DB.HSQL.Type.Geometric",
          "name": "Line",
          "package": "hsql",
          "partial": "Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-Geometric.html#v:Line"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn open path\n\u003c/p\u003e",
          "module": "[\"DB.HSQL.Type.Geometric\",\"Database.HSQL\"]",
          "name": "OpenPath",
          "package": "hsql",
          "signature": "OpenPath",
          "source": "src/DB-HSQL-Type-Geometric.html#Path",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-Geometric.html#v:OpenPath\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:OpenPath\"]"
        },
        "index": {
          "description": "An open path",
          "hierarchy": "DB HSQL Type Geometric",
          "module": "DB.HSQL.Type.Geometric",
          "name": "OpenPath",
          "package": "hsql",
          "partial": "Open Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-Geometric.html#v:OpenPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DB.HSQL.Type.Geometric\",\"Database.HSQL\"]",
          "name": "Point",
          "package": "hsql",
          "signature": "Point",
          "source": "src/DB-HSQL-Type-Geometric.html#Point",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-Geometric.html#v:Point\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:Point\"]"
        },
        "index": {
          "hierarchy": "DB HSQL Type Geometric",
          "module": "DB.HSQL.Type.Geometric",
          "name": "Point",
          "package": "hsql",
          "partial": "Point",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-Geometric.html#v:Point"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DB.HSQL.Type.Geometric\",\"Database.HSQL\"]",
          "name": "Polygon",
          "package": "hsql",
          "signature": "Polygon",
          "source": "src/DB-HSQL-Type-Geometric.html#Polygon",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-Geometric.html#v:Polygon\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:Polygon\"]"
        },
        "index": {
          "hierarchy": "DB HSQL Type Geometric",
          "module": "DB.HSQL.Type.Geometric",
          "name": "Polygon",
          "package": "hsql",
          "partial": "Polygon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-Geometric.html#v:Polygon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DB.HSQL.Type.Geometric\",\"Database.HSQL\"]",
          "name": "boxX1",
          "package": "hsql",
          "signature": "Double",
          "source": "src/DB-HSQL-Type-Geometric.html#Box",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-Geometric.html#v:boxX1\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:boxX1\"]"
        },
        "index": {
          "hierarchy": "DB HSQL Type Geometric",
          "module": "DB.HSQL.Type.Geometric",
          "name": "boxX1",
          "package": "hsql",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-Geometric.html#v:boxX1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DB.HSQL.Type.Geometric\",\"Database.HSQL\"]",
          "name": "boxX2",
          "package": "hsql",
          "signature": "Double",
          "source": "src/DB-HSQL-Type-Geometric.html#Box",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-Geometric.html#v:boxX2\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:boxX2\"]"
        },
        "index": {
          "hierarchy": "DB HSQL Type Geometric",
          "module": "DB.HSQL.Type.Geometric",
          "name": "boxX2",
          "package": "hsql",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-Geometric.html#v:boxX2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DB.HSQL.Type.Geometric\",\"Database.HSQL\"]",
          "name": "boxY1",
          "package": "hsql",
          "signature": "Double",
          "source": "src/DB-HSQL-Type-Geometric.html#Box",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-Geometric.html#v:boxY1\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:boxY1\"]"
        },
        "index": {
          "hierarchy": "DB HSQL Type Geometric",
          "module": "DB.HSQL.Type.Geometric",
          "name": "boxY1",
          "package": "hsql",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-Geometric.html#v:boxY1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DB.HSQL.Type.Geometric\",\"Database.HSQL\"]",
          "name": "boxY2",
          "package": "hsql",
          "signature": "Double",
          "source": "src/DB-HSQL-Type-Geometric.html#Box",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-Geometric.html#v:boxY2\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:boxY2\"]"
        },
        "index": {
          "hierarchy": "DB HSQL Type Geometric",
          "module": "DB.HSQL.Type.Geometric",
          "name": "boxY2",
          "package": "hsql",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-Geometric.html#v:boxY2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DB.HSQL.Type.Geometric\",\"Database.HSQL\"]",
          "name": "circleCenter",
          "package": "hsql",
          "signature": "Point",
          "source": "src/DB-HSQL-Type-Geometric.html#Circle",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-Geometric.html#v:circleCenter\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:circleCenter\"]"
        },
        "index": {
          "hierarchy": "DB HSQL Type Geometric",
          "module": "DB.HSQL.Type.Geometric",
          "name": "circleCenter",
          "package": "hsql",
          "partial": "Center",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-Geometric.html#v:circleCenter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DB.HSQL.Type.Geometric\",\"Database.HSQL\"]",
          "name": "circleRadius",
          "package": "hsql",
          "signature": "Double",
          "source": "src/DB-HSQL-Type-Geometric.html#Circle",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-Geometric.html#v:circleRadius\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:circleRadius\"]"
        },
        "index": {
          "hierarchy": "DB HSQL Type Geometric",
          "module": "DB.HSQL.Type.Geometric",
          "name": "circleRadius",
          "package": "hsql",
          "partial": "Radius",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-Geometric.html#v:circleRadius"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DB.HSQL.Type.Geometric\",\"Database.HSQL\"]",
          "name": "lineBegin",
          "package": "hsql",
          "signature": "Point",
          "source": "src/DB-HSQL-Type-Geometric.html#Line",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-Geometric.html#v:lineBegin\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:lineBegin\"]"
        },
        "index": {
          "hierarchy": "DB HSQL Type Geometric",
          "module": "DB.HSQL.Type.Geometric",
          "name": "lineBegin",
          "package": "hsql",
          "partial": "Begin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-Geometric.html#v:lineBegin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DB.HSQL.Type.Geometric\",\"Database.HSQL\"]",
          "name": "lineEnd",
          "package": "hsql",
          "signature": "Point",
          "source": "src/DB-HSQL-Type-Geometric.html#Line",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-Geometric.html#v:lineEnd\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:lineEnd\"]"
        },
        "index": {
          "hierarchy": "DB HSQL Type Geometric",
          "module": "DB.HSQL.Type.Geometric",
          "name": "lineEnd",
          "package": "hsql",
          "partial": "End",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-Geometric.html#v:lineEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DB.HSQL.Type.Geometric\",\"Database.HSQL\"]",
          "name": "pathPoints",
          "package": "hsql",
          "signature": "[Point]",
          "source": "src/DB-HSQL-Type-Geometric.html#Path",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-Geometric.html#v:pathPoints\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:pathPoints\"]"
        },
        "index": {
          "hierarchy": "DB HSQL Type Geometric",
          "module": "DB.HSQL.Type.Geometric",
          "name": "pathPoints",
          "normalized": "[Point]",
          "package": "hsql",
          "partial": "Points",
          "signature": "[Point]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-Geometric.html#v:pathPoints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DB.HSQL.Type.Geometric\",\"Database.HSQL\"]",
          "name": "pointX",
          "package": "hsql",
          "signature": "Double",
          "source": "src/DB-HSQL-Type-Geometric.html#Point",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-Geometric.html#v:pointX\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:pointX\"]"
        },
        "index": {
          "hierarchy": "DB HSQL Type Geometric",
          "module": "DB.HSQL.Type.Geometric",
          "name": "pointX",
          "package": "hsql",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-Geometric.html#v:pointX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DB.HSQL.Type.Geometric\",\"Database.HSQL\"]",
          "name": "pointY",
          "package": "hsql",
          "signature": "Double",
          "source": "src/DB-HSQL-Type-Geometric.html#Point",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-Geometric.html#v:pointY\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:pointY\"]"
        },
        "index": {
          "hierarchy": "DB HSQL Type Geometric",
          "module": "DB.HSQL.Type.Geometric",
          "name": "pointY",
          "package": "hsql",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-Geometric.html#v:pointY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DB.HSQL.Type.Geometric\",\"Database.HSQL\"]",
          "name": "polygonPoints",
          "package": "hsql",
          "signature": "[Point]",
          "source": "src/DB-HSQL-Type-Geometric.html#Polygon",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-Geometric.html#v:polygonPoints\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:polygonPoints\"]"
        },
        "index": {
          "hierarchy": "DB HSQL Type Geometric",
          "module": "DB.HSQL.Type.Geometric",
          "name": "polygonPoints",
          "normalized": "[Point]",
          "package": "hsql",
          "partial": "Points",
          "signature": "[Point]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-Geometric.html#v:polygonPoints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eNetwork addresses, equipped with \u003ccode\u003e\u003ca\u003eSqlBind\u003c/a\u003e\u003c/code\u003e instances.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DB.HSQL.Type.NetAddress",
          "name": "NetAddress",
          "package": "hsql",
          "source": "src/DB-HSQL-Type-NetAddress.html",
          "type": "module"
        },
        "index": {
          "description": "Network addresses equipped with SqlBind instances",
          "hierarchy": "DB HSQL Type NetAddress",
          "module": "DB.HSQL.Type.NetAddress",
          "name": "NetAddress",
          "package": "hsql",
          "partial": "Net Address",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-NetAddress.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn IP4 address with netmask in CIDR notation.\n\u003c/p\u003e",
          "module": "DB.HSQL.Type.NetAddress",
          "name": "INetAddr",
          "package": "hsql",
          "source": "src/DB-HSQL-Type-NetAddress.html#INetAddr",
          "type": "data"
        },
        "index": {
          "description": "An IP4 address with netmask in CIDR notation",
          "hierarchy": "DB HSQL Type NetAddress",
          "module": "DB.HSQL.Type.NetAddress",
          "name": "INetAddr",
          "package": "hsql",
          "partial": "INet Addr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-NetAddress.html#t:INetAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA MAC network address.\n\u003c/p\u003e",
          "module": "DB.HSQL.Type.NetAddress",
          "name": "MacAddr",
          "package": "hsql",
          "source": "src/DB-HSQL-Type-NetAddress.html#MacAddr",
          "type": "data"
        },
        "index": {
          "description": "MAC network address",
          "hierarchy": "DB HSQL Type NetAddress",
          "module": "DB.HSQL.Type.NetAddress",
          "name": "MacAddr",
          "package": "hsql",
          "partial": "Mac Addr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-NetAddress.html#t:MacAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DB.HSQL.Type.NetAddress\",\"Database.HSQL\"]",
          "name": "INetAddr",
          "package": "hsql",
          "signature": "INetAddr",
          "source": "src/DB-HSQL-Type-NetAddress.html#INetAddr",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-NetAddress.html#v:INetAddr\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:INetAddr\"]"
        },
        "index": {
          "hierarchy": "DB HSQL Type NetAddress",
          "module": "DB.HSQL.Type.NetAddress",
          "name": "INetAddr",
          "package": "hsql",
          "partial": "INet Addr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-NetAddress.html#v:INetAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DB.HSQL.Type.NetAddress\",\"Database.HSQL\"]",
          "name": "MacAddr",
          "package": "hsql",
          "signature": "MacAddr",
          "source": "src/DB-HSQL-Type-NetAddress.html#MacAddr",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-NetAddress.html#v:MacAddr\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:MacAddr\"]"
        },
        "index": {
          "hierarchy": "DB HSQL Type NetAddress",
          "module": "DB.HSQL.Type.NetAddress",
          "name": "MacAddr",
          "package": "hsql",
          "partial": "Mac Addr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-NetAddress.html#v:MacAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DB.HSQL.Type.NetAddress\",\"Database.HSQL\"]",
          "name": "cidrMaskBits",
          "package": "hsql",
          "signature": "Int",
          "source": "src/DB-HSQL-Type-NetAddress.html#INetAddr",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-NetAddress.html#v:cidrMaskBits\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:cidrMaskBits\"]"
        },
        "index": {
          "hierarchy": "DB HSQL Type NetAddress",
          "module": "DB.HSQL.Type.NetAddress",
          "name": "cidrMaskBits",
          "package": "hsql",
          "partial": "Mask Bits",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-NetAddress.html#v:cidrMaskBits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DB.HSQL.Type.NetAddress\",\"Database.HSQL\"]",
          "name": "ip4Octet1",
          "package": "hsql",
          "signature": "Int",
          "source": "src/DB-HSQL-Type-NetAddress.html#INetAddr",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-NetAddress.html#v:ip4Octet1\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:ip4Octet1\"]"
        },
        "index": {
          "hierarchy": "DB HSQL Type NetAddress",
          "module": "DB.HSQL.Type.NetAddress",
          "name": "ip4Octet1",
          "package": "hsql",
          "partial": "Octet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-NetAddress.html#v:ip4Octet1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DB.HSQL.Type.NetAddress\",\"Database.HSQL\"]",
          "name": "ip4Octet2",
          "package": "hsql",
          "signature": "Int",
          "source": "src/DB-HSQL-Type-NetAddress.html#INetAddr",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-NetAddress.html#v:ip4Octet2\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:ip4Octet2\"]"
        },
        "index": {
          "hierarchy": "DB HSQL Type NetAddress",
          "module": "DB.HSQL.Type.NetAddress",
          "name": "ip4Octet2",
          "package": "hsql",
          "partial": "Octet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-NetAddress.html#v:ip4Octet2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DB.HSQL.Type.NetAddress\",\"Database.HSQL\"]",
          "name": "ip4Octet3",
          "package": "hsql",
          "signature": "Int",
          "source": "src/DB-HSQL-Type-NetAddress.html#INetAddr",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-NetAddress.html#v:ip4Octet3\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:ip4Octet3\"]"
        },
        "index": {
          "hierarchy": "DB HSQL Type NetAddress",
          "module": "DB.HSQL.Type.NetAddress",
          "name": "ip4Octet3",
          "package": "hsql",
          "partial": "Octet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-NetAddress.html#v:ip4Octet3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DB.HSQL.Type.NetAddress\",\"Database.HSQL\"]",
          "name": "ip4Octet4",
          "package": "hsql",
          "signature": "Int",
          "source": "src/DB-HSQL-Type-NetAddress.html#INetAddr",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-NetAddress.html#v:ip4Octet4\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:ip4Octet4\"]"
        },
        "index": {
          "hierarchy": "DB HSQL Type NetAddress",
          "module": "DB.HSQL.Type.NetAddress",
          "name": "ip4Octet4",
          "package": "hsql",
          "partial": "Octet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-NetAddress.html#v:ip4Octet4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DB.HSQL.Type.NetAddress\",\"Database.HSQL\"]",
          "name": "macOctet1",
          "package": "hsql",
          "signature": "Int",
          "source": "src/DB-HSQL-Type-NetAddress.html#MacAddr",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-NetAddress.html#v:macOctet1\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:macOctet1\"]"
        },
        "index": {
          "hierarchy": "DB HSQL Type NetAddress",
          "module": "DB.HSQL.Type.NetAddress",
          "name": "macOctet1",
          "package": "hsql",
          "partial": "Octet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-NetAddress.html#v:macOctet1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DB.HSQL.Type.NetAddress\",\"Database.HSQL\"]",
          "name": "macOctet2",
          "package": "hsql",
          "signature": "Int",
          "source": "src/DB-HSQL-Type-NetAddress.html#MacAddr",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-NetAddress.html#v:macOctet2\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:macOctet2\"]"
        },
        "index": {
          "hierarchy": "DB HSQL Type NetAddress",
          "module": "DB.HSQL.Type.NetAddress",
          "name": "macOctet2",
          "package": "hsql",
          "partial": "Octet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-NetAddress.html#v:macOctet2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DB.HSQL.Type.NetAddress\",\"Database.HSQL\"]",
          "name": "macOctet3",
          "package": "hsql",
          "signature": "Int",
          "source": "src/DB-HSQL-Type-NetAddress.html#MacAddr",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-NetAddress.html#v:macOctet3\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:macOctet3\"]"
        },
        "index": {
          "hierarchy": "DB HSQL Type NetAddress",
          "module": "DB.HSQL.Type.NetAddress",
          "name": "macOctet3",
          "package": "hsql",
          "partial": "Octet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-NetAddress.html#v:macOctet3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DB.HSQL.Type.NetAddress\",\"Database.HSQL\"]",
          "name": "macOctet4",
          "package": "hsql",
          "signature": "Int",
          "source": "src/DB-HSQL-Type-NetAddress.html#MacAddr",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-NetAddress.html#v:macOctet4\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:macOctet4\"]"
        },
        "index": {
          "hierarchy": "DB HSQL Type NetAddress",
          "module": "DB.HSQL.Type.NetAddress",
          "name": "macOctet4",
          "package": "hsql",
          "partial": "Octet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-NetAddress.html#v:macOctet4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DB.HSQL.Type.NetAddress\",\"Database.HSQL\"]",
          "name": "macOctet5",
          "package": "hsql",
          "signature": "Int",
          "source": "src/DB-HSQL-Type-NetAddress.html#MacAddr",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-NetAddress.html#v:macOctet5\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:macOctet5\"]"
        },
        "index": {
          "hierarchy": "DB HSQL Type NetAddress",
          "module": "DB.HSQL.Type.NetAddress",
          "name": "macOctet5",
          "package": "hsql",
          "partial": "Octet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-NetAddress.html#v:macOctet5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DB.HSQL.Type.NetAddress\",\"Database.HSQL\"]",
          "name": "macOctet6",
          "package": "hsql",
          "signature": "Int",
          "source": "src/DB-HSQL-Type-NetAddress.html#MacAddr",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-NetAddress.html#v:macOctet6\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:macOctet6\"]"
        },
        "index": {
          "hierarchy": "DB HSQL Type NetAddress",
          "module": "DB.HSQL.Type.NetAddress",
          "name": "macOctet6",
          "package": "hsql",
          "partial": "Octet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-NetAddress.html#v:macOctet6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eSqlBind\u003c/a\u003e\u003c/code\u003e instances for \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eInt64\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DB.HSQL.Type.Numeric",
          "name": "Numeric",
          "package": "hsql",
          "source": "src/DB-HSQL-Type-Numeric.html",
          "type": "module"
        },
        "index": {
          "description": "SqlBind instances for Int Int64 Integer Double and Float",
          "hierarchy": "DB HSQL Type Numeric",
          "module": "DB.HSQL.Type.Numeric",
          "name": "Numeric",
          "package": "hsql",
          "partial": "Numeric",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-Numeric.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eSqlBind\u003c/a\u003e\u003c/code\u003e instance for \u003ccode\u003e\u003ca\u003eClockTime\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DB.HSQL.Type.Time",
          "name": "Time",
          "package": "hsql",
          "source": "src/DB-HSQL-Type-Time.html",
          "type": "module"
        },
        "index": {
          "description": "SqlBind instance for ClockTime",
          "hierarchy": "DB HSQL Type Time",
          "module": "DB.HSQL.Type.Time",
          "name": "Time",
          "package": "hsql",
          "partial": "Time",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-Time.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.Type",
          "name": "Type",
          "package": "hsql",
          "source": "src/DB-HSQL-Type.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "DB HSQL Type",
          "module": "DB.HSQL.Type",
          "name": "Type",
          "package": "hsql",
          "partial": "Type",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariety of common data types used in databases.\n\u003c/p\u003e",
          "module": "DB.HSQL.Type",
          "name": "SqlType",
          "package": "hsql",
          "source": "src/DB-HSQL-Type.html#SqlType",
          "type": "data"
        },
        "index": {
          "description": "Variety of common data types used in databases",
          "hierarchy": "DB HSQL Type",
          "module": "DB.HSQL.Type",
          "name": "SqlType",
          "package": "hsql",
          "partial": "Sql Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#t:SqlType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DB.HSQL.Type\",\"Database.HSQL.Types\",\"Database.HSQL\"]",
          "name": "SqlAbsTime",
          "package": "hsql",
          "signature": "SqlAbsTime",
          "source": "src/DB-HSQL-Type.html#SqlType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlAbsTime\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlAbsTime\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlAbsTime\"]"
        },
        "index": {
          "hierarchy": "DB HSQL Type",
          "module": "DB.HSQL.Type",
          "name": "SqlAbsTime",
          "package": "hsql",
          "partial": "Sql Abs Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlAbsTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DB.HSQL.Type\",\"Database.HSQL.Types\",\"Database.HSQL\"]",
          "name": "SqlAbsTimeInterval",
          "package": "hsql",
          "signature": "SqlAbsTimeInterval",
          "source": "src/DB-HSQL-Type.html#SqlType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlAbsTimeInterval\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlAbsTimeInterval\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlAbsTimeInterval\"]"
        },
        "index": {
          "hierarchy": "DB HSQL Type",
          "module": "DB.HSQL.Type",
          "name": "SqlAbsTimeInterval",
          "package": "hsql",
          "partial": "Sql Abs Time Interval",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlAbsTimeInterval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DB.HSQL.Type\",\"Database.HSQL.Types\",\"Database.HSQL\"]",
          "name": "SqlBLOB",
          "package": "hsql",
          "signature": "SqlBLOB",
          "source": "src/DB-HSQL-Type.html#SqlType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlBLOB\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlBLOB\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlBLOB\"]"
        },
        "index": {
          "hierarchy": "DB HSQL Type",
          "module": "DB.HSQL.Type",
          "name": "SqlBLOB",
          "package": "hsql",
          "partial": "Sql BLOB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlBLOB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DB.HSQL.Type\",\"Database.HSQL.Types\",\"Database.HSQL\"]",
          "name": "SqlBigInt",
          "package": "hsql",
          "signature": "SqlBigInt",
          "source": "src/DB-HSQL-Type.html#SqlType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlBigInt\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlBigInt\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlBigInt\"]"
        },
        "index": {
          "hierarchy": "DB HSQL Type",
          "module": "DB.HSQL.Type",
          "name": "SqlBigInt",
          "package": "hsql",
          "partial": "Sql Big Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlBigInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DB.HSQL.Type\",\"Database.HSQL.Types\",\"Database.HSQL\"]",
          "name": "SqlBinary",
          "package": "hsql",
          "signature": "SqlBinary",
          "source": "src/DB-HSQL-Type.html#SqlType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlBinary\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlBinary\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlBinary\"]"
        },
        "index": {
          "hierarchy": "DB HSQL Type",
          "module": "DB.HSQL.Type",
          "name": "SqlBinary",
          "package": "hsql",
          "partial": "Sql Binary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlBinary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DB.HSQL.Type\",\"Database.HSQL.Types\",\"Database.HSQL\"]",
          "name": "SqlBit",
          "package": "hsql",
          "signature": "SqlBit",
          "source": "src/DB-HSQL-Type.html#SqlType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlBit\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlBit\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlBit\"]"
        },
        "index": {
          "hierarchy": "DB HSQL Type",
          "module": "DB.HSQL.Type",
          "name": "SqlBit",
          "package": "hsql",
          "partial": "Sql Bit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlBit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DB.HSQL.Type\",\"Database.HSQL.Types\",\"Database.HSQL\"]",
          "name": "SqlBox",
          "package": "hsql",
          "signature": "SqlBox",
          "source": "src/DB-HSQL-Type.html#SqlType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlBox\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlBox\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlBox\"]"
        },
        "index": {
          "hierarchy": "DB HSQL Type",
          "module": "DB.HSQL.Type",
          "name": "SqlBox",
          "package": "hsql",
          "partial": "Sql Box",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlBox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DB.HSQL.Type\",\"Database.HSQL.Types\",\"Database.HSQL\"]",
          "name": "SqlCIDRAddr",
          "package": "hsql",
          "signature": "SqlCIDRAddr",
          "source": "src/DB-HSQL-Type.html#SqlType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlCIDRAddr\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlCIDRAddr\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlCIDRAddr\"]"
        },
        "index": {
          "hierarchy": "DB HSQL Type",
          "module": "DB.HSQL.Type",
          "name": "SqlCIDRAddr",
          "package": "hsql",
          "partial": "Sql CIDRAddr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlCIDRAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DB.HSQL.Type\",\"Database.HSQL.Types\",\"Database.HSQL\"]",
          "name": "SqlChar",
          "package": "hsql",
          "signature": "SqlChar",
          "source": "src/DB-HSQL-Type.html#SqlType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlChar\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlChar\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlChar\"]"
        },
        "index": {
          "hierarchy": "DB HSQL Type",
          "module": "DB.HSQL.Type",
          "name": "SqlChar",
          "package": "hsql",
          "partial": "Sql Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DB.HSQL.Type\",\"Database.HSQL.Types\",\"Database.HSQL\"]",
          "name": "SqlCircle",
          "package": "hsql",
          "signature": "SqlCircle",
          "source": "src/DB-HSQL-Type.html#SqlType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlCircle\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlCircle\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlCircle\"]"
        },
        "index": {
          "hierarchy": "DB HSQL Type",
          "module": "DB.HSQL.Type",
          "name": "SqlCircle",
          "package": "hsql",
          "partial": "Sql Circle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlCircle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DB.HSQL.Type\",\"Database.HSQL.Types\",\"Database.HSQL\"]",
          "name": "SqlDate",
          "package": "hsql",
          "signature": "SqlDate",
          "source": "src/DB-HSQL-Type.html#SqlType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlDate\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlDate\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlDate\"]"
        },
        "index": {
          "hierarchy": "DB HSQL Type",
          "module": "DB.HSQL.Type",
          "name": "SqlDate",
          "package": "hsql",
          "partial": "Sql Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DB.HSQL.Type\",\"Database.HSQL.Types\",\"Database.HSQL\"]",
          "name": "SqlDateTime",
          "package": "hsql",
          "signature": "SqlDateTime",
          "source": "src/DB-HSQL-Type.html#SqlType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlDateTime\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlDateTime\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlDateTime\"]"
        },
        "index": {
          "hierarchy": "DB HSQL Type",
          "module": "DB.HSQL.Type",
          "name": "SqlDateTime",
          "package": "hsql",
          "partial": "Sql Date Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlDateTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DB.HSQL.Type\",\"Database.HSQL.Types\",\"Database.HSQL\"]",
          "name": "SqlDateTimeTZ",
          "package": "hsql",
          "signature": "SqlDateTimeTZ",
          "source": "src/DB-HSQL-Type.html#SqlType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlDateTimeTZ\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlDateTimeTZ\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlDateTimeTZ\"]"
        },
        "index": {
          "hierarchy": "DB HSQL Type",
          "module": "DB.HSQL.Type",
          "name": "SqlDateTimeTZ",
          "package": "hsql",
          "partial": "Sql Date Time TZ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlDateTimeTZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DB.HSQL.Type\",\"Database.HSQL.Types\",\"Database.HSQL\"]",
          "name": "SqlDecimal",
          "package": "hsql",
          "signature": "SqlDecimal",
          "source": "src/DB-HSQL-Type.html#SqlType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlDecimal\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlDecimal\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlDecimal\"]"
        },
        "index": {
          "hierarchy": "DB HSQL Type",
          "module": "DB.HSQL.Type",
          "name": "SqlDecimal",
          "package": "hsql",
          "partial": "Sql Decimal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlDecimal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DB.HSQL.Type\",\"Database.HSQL.Types\",\"Database.HSQL\"]",
          "name": "SqlDouble",
          "package": "hsql",
          "signature": "SqlDouble",
          "source": "src/DB-HSQL-Type.html#SqlType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlDouble\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlDouble\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlDouble\"]"
        },
        "index": {
          "hierarchy": "DB HSQL Type",
          "module": "DB.HSQL.Type",
          "name": "SqlDouble",
          "package": "hsql",
          "partial": "Sql Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DB.HSQL.Type\",\"Database.HSQL.Types\",\"Database.HSQL\"]",
          "name": "SqlENUM",
          "package": "hsql",
          "signature": "SqlENUM",
          "source": "src/DB-HSQL-Type.html#SqlType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlENUM\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlENUM\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlENUM\"]"
        },
        "index": {
          "hierarchy": "DB HSQL Type",
          "module": "DB.HSQL.Type",
          "name": "SqlENUM",
          "package": "hsql",
          "partial": "Sql ENUM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlENUM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DB.HSQL.Type\",\"Database.HSQL.Types\",\"Database.HSQL\"]",
          "name": "SqlFloat",
          "package": "hsql",
          "signature": "SqlFloat",
          "source": "src/DB-HSQL-Type.html#SqlType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlFloat\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlFloat\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlFloat\"]"
        },
        "index": {
          "hierarchy": "DB HSQL Type",
          "module": "DB.HSQL.Type",
          "name": "SqlFloat",
          "package": "hsql",
          "partial": "Sql Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DB.HSQL.Type\",\"Database.HSQL.Types\",\"Database.HSQL\"]",
          "name": "SqlINetAddr",
          "package": "hsql",
          "signature": "SqlINetAddr",
          "source": "src/DB-HSQL-Type.html#SqlType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlINetAddr\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlINetAddr\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlINetAddr\"]"
        },
        "index": {
          "hierarchy": "DB HSQL Type",
          "module": "DB.HSQL.Type",
          "name": "SqlINetAddr",
          "package": "hsql",
          "partial": "Sql INet Addr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlINetAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DB.HSQL.Type\",\"Database.HSQL.Types\",\"Database.HSQL\"]",
          "name": "SqlInteger",
          "package": "hsql",
          "signature": "SqlInteger",
          "source": "src/DB-HSQL-Type.html#SqlType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlInteger\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlInteger\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlInteger\"]"
        },
        "index": {
          "hierarchy": "DB HSQL Type",
          "module": "DB.HSQL.Type",
          "name": "SqlInteger",
          "package": "hsql",
          "partial": "Sql Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DB.HSQL.Type\",\"Database.HSQL.Types\",\"Database.HSQL\"]",
          "name": "SqlLSeg",
          "package": "hsql",
          "signature": "SqlLSeg",
          "source": "src/DB-HSQL-Type.html#SqlType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlLSeg\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlLSeg\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlLSeg\"]"
        },
        "index": {
          "hierarchy": "DB HSQL Type",
          "module": "DB.HSQL.Type",
          "name": "SqlLSeg",
          "package": "hsql",
          "partial": "Sql LSeg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlLSeg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DB.HSQL.Type\",\"Database.HSQL.Types\",\"Database.HSQL\"]",
          "name": "SqlLine",
          "package": "hsql",
          "signature": "SqlLine",
          "source": "src/DB-HSQL-Type.html#SqlType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlLine\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlLine\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlLine\"]"
        },
        "index": {
          "hierarchy": "DB HSQL Type",
          "module": "DB.HSQL.Type",
          "name": "SqlLine",
          "package": "hsql",
          "partial": "Sql Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DB.HSQL.Type\",\"Database.HSQL.Types\",\"Database.HSQL\"]",
          "name": "SqlLongVarBinary",
          "package": "hsql",
          "signature": "SqlLongVarBinary",
          "source": "src/DB-HSQL-Type.html#SqlType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlLongVarBinary\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlLongVarBinary\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlLongVarBinary\"]"
        },
        "index": {
          "hierarchy": "DB HSQL Type",
          "module": "DB.HSQL.Type",
          "name": "SqlLongVarBinary",
          "package": "hsql",
          "partial": "Sql Long Var Binary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlLongVarBinary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DB.HSQL.Type\",\"Database.HSQL.Types\",\"Database.HSQL\"]",
          "name": "SqlLongVarChar",
          "package": "hsql",
          "signature": "SqlLongVarChar",
          "source": "src/DB-HSQL-Type.html#SqlType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlLongVarChar\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlLongVarChar\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlLongVarChar\"]"
        },
        "index": {
          "hierarchy": "DB HSQL Type",
          "module": "DB.HSQL.Type",
          "name": "SqlLongVarChar",
          "package": "hsql",
          "partial": "Sql Long Var Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlLongVarChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DB.HSQL.Type\",\"Database.HSQL.Types\",\"Database.HSQL\"]",
          "name": "SqlMacAddr",
          "package": "hsql",
          "signature": "SqlMacAddr",
          "source": "src/DB-HSQL-Type.html#SqlType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlMacAddr\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlMacAddr\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlMacAddr\"]"
        },
        "index": {
          "hierarchy": "DB HSQL Type",
          "module": "DB.HSQL.Type",
          "name": "SqlMacAddr",
          "package": "hsql",
          "partial": "Sql Mac Addr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlMacAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DB.HSQL.Type\",\"Database.HSQL.Types\",\"Database.HSQL\"]",
          "name": "SqlMedInt",
          "package": "hsql",
          "signature": "SqlMedInt",
          "source": "src/DB-HSQL-Type.html#SqlType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlMedInt\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlMedInt\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlMedInt\"]"
        },
        "index": {
          "hierarchy": "DB HSQL Type",
          "module": "DB.HSQL.Type",
          "name": "SqlMedInt",
          "package": "hsql",
          "partial": "Sql Med Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlMedInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DB.HSQL.Type\",\"Database.HSQL.Types\",\"Database.HSQL\"]",
          "name": "SqlMoney",
          "package": "hsql",
          "signature": "SqlMoney",
          "source": "src/DB-HSQL-Type.html#SqlType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlMoney\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlMoney\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlMoney\"]"
        },
        "index": {
          "hierarchy": "DB HSQL Type",
          "module": "DB.HSQL.Type",
          "name": "SqlMoney",
          "package": "hsql",
          "partial": "Sql Money",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlMoney"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DB.HSQL.Type\",\"Database.HSQL.Types\",\"Database.HSQL\"]",
          "name": "SqlNumeric",
          "package": "hsql",
          "signature": "SqlNumeric",
          "source": "src/DB-HSQL-Type.html#SqlType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlNumeric\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlNumeric\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlNumeric\"]"
        },
        "index": {
          "hierarchy": "DB HSQL Type",
          "module": "DB.HSQL.Type",
          "name": "SqlNumeric",
          "package": "hsql",
          "partial": "Sql Numeric",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlNumeric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DB.HSQL.Type\",\"Database.HSQL.Types\",\"Database.HSQL\"]",
          "name": "SqlPath",
          "package": "hsql",
          "signature": "SqlPath",
          "source": "src/DB-HSQL-Type.html#SqlType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlPath\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlPath\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlPath\"]"
        },
        "index": {
          "hierarchy": "DB HSQL Type",
          "module": "DB.HSQL.Type",
          "name": "SqlPath",
          "package": "hsql",
          "partial": "Sql Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DB.HSQL.Type\",\"Database.HSQL.Types\",\"Database.HSQL\"]",
          "name": "SqlPoint",
          "package": "hsql",
          "signature": "SqlPoint",
          "source": "src/DB-HSQL-Type.html#SqlType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlPoint\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlPoint\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlPoint\"]"
        },
        "index": {
          "hierarchy": "DB HSQL Type",
          "module": "DB.HSQL.Type",
          "name": "SqlPoint",
          "package": "hsql",
          "partial": "Sql Point",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlPoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DB.HSQL.Type\",\"Database.HSQL.Types\",\"Database.HSQL\"]",
          "name": "SqlPolygon",
          "package": "hsql",
          "signature": "SqlPolygon",
          "source": "src/DB-HSQL-Type.html#SqlType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlPolygon\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlPolygon\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlPolygon\"]"
        },
        "index": {
          "hierarchy": "DB HSQL Type",
          "module": "DB.HSQL.Type",
          "name": "SqlPolygon",
          "package": "hsql",
          "partial": "Sql Polygon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlPolygon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DB.HSQL.Type\",\"Database.HSQL.Types\",\"Database.HSQL\"]",
          "name": "SqlReal",
          "package": "hsql",
          "signature": "SqlReal",
          "source": "src/DB-HSQL-Type.html#SqlType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlReal\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlReal\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlReal\"]"
        },
        "index": {
          "hierarchy": "DB HSQL Type",
          "module": "DB.HSQL.Type",
          "name": "SqlReal",
          "package": "hsql",
          "partial": "Sql Real",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlReal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DB.HSQL.Type\",\"Database.HSQL.Types\",\"Database.HSQL\"]",
          "name": "SqlRelTime",
          "package": "hsql",
          "signature": "SqlRelTime",
          "source": "src/DB-HSQL-Type.html#SqlType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlRelTime\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlRelTime\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlRelTime\"]"
        },
        "index": {
          "hierarchy": "DB HSQL Type",
          "module": "DB.HSQL.Type",
          "name": "SqlRelTime",
          "package": "hsql",
          "partial": "Sql Rel Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlRelTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DB.HSQL.Type\",\"Database.HSQL.Types\",\"Database.HSQL\"]",
          "name": "SqlSET",
          "package": "hsql",
          "signature": "SqlSET",
          "source": "src/DB-HSQL-Type.html#SqlType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlSET\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlSET\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlSET\"]"
        },
        "index": {
          "hierarchy": "DB HSQL Type",
          "module": "DB.HSQL.Type",
          "name": "SqlSET",
          "package": "hsql",
          "partial": "Sql SET",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlSET"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DB.HSQL.Type\",\"Database.HSQL.Types\",\"Database.HSQL\"]",
          "name": "SqlSmallInt",
          "package": "hsql",
          "signature": "SqlSmallInt",
          "source": "src/DB-HSQL-Type.html#SqlType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlSmallInt\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlSmallInt\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlSmallInt\"]"
        },
        "index": {
          "hierarchy": "DB HSQL Type",
          "module": "DB.HSQL.Type",
          "name": "SqlSmallInt",
          "package": "hsql",
          "partial": "Sql Small Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlSmallInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DB.HSQL.Type\",\"Database.HSQL.Types\",\"Database.HSQL\"]",
          "name": "SqlText",
          "package": "hsql",
          "signature": "SqlText",
          "source": "src/DB-HSQL-Type.html#SqlType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlText\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlText\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlText\"]"
        },
        "index": {
          "hierarchy": "DB HSQL Type",
          "module": "DB.HSQL.Type",
          "name": "SqlText",
          "package": "hsql",
          "partial": "Sql Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DB.HSQL.Type\",\"Database.HSQL.Types\",\"Database.HSQL\"]",
          "name": "SqlTime",
          "package": "hsql",
          "signature": "SqlTime",
          "source": "src/DB-HSQL-Type.html#SqlType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlTime\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlTime\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlTime\"]"
        },
        "index": {
          "hierarchy": "DB HSQL Type",
          "module": "DB.HSQL.Type",
          "name": "SqlTime",
          "package": "hsql",
          "partial": "Sql Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DB.HSQL.Type\",\"Database.HSQL.Types\",\"Database.HSQL\"]",
          "name": "SqlTimeInterval",
          "package": "hsql",
          "signature": "SqlTimeInterval",
          "source": "src/DB-HSQL-Type.html#SqlType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlTimeInterval\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlTimeInterval\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlTimeInterval\"]"
        },
        "index": {
          "hierarchy": "DB HSQL Type",
          "module": "DB.HSQL.Type",
          "name": "SqlTimeInterval",
          "package": "hsql",
          "partial": "Sql Time Interval",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlTimeInterval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DB.HSQL.Type\",\"Database.HSQL.Types\",\"Database.HSQL\"]",
          "name": "SqlTimeStamp",
          "package": "hsql",
          "signature": "SqlTimeStamp",
          "source": "src/DB-HSQL-Type.html#SqlType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlTimeStamp\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlTimeStamp\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlTimeStamp\"]"
        },
        "index": {
          "hierarchy": "DB HSQL Type",
          "module": "DB.HSQL.Type",
          "name": "SqlTimeStamp",
          "package": "hsql",
          "partial": "Sql Time Stamp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlTimeStamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DB.HSQL.Type\",\"Database.HSQL.Types\",\"Database.HSQL\"]",
          "name": "SqlTimeTZ",
          "package": "hsql",
          "signature": "SqlTimeTZ",
          "source": "src/DB-HSQL-Type.html#SqlType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlTimeTZ\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlTimeTZ\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlTimeTZ\"]"
        },
        "index": {
          "hierarchy": "DB HSQL Type",
          "module": "DB.HSQL.Type",
          "name": "SqlTimeTZ",
          "package": "hsql",
          "partial": "Sql Time TZ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlTimeTZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DB.HSQL.Type\",\"Database.HSQL.Types\",\"Database.HSQL\"]",
          "name": "SqlTinyInt",
          "package": "hsql",
          "signature": "SqlTinyInt",
          "source": "src/DB-HSQL-Type.html#SqlType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlTinyInt\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlTinyInt\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlTinyInt\"]"
        },
        "index": {
          "hierarchy": "DB HSQL Type",
          "module": "DB.HSQL.Type",
          "name": "SqlTinyInt",
          "package": "hsql",
          "partial": "Sql Tiny Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlTinyInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHSQL returns \u003ccode\u003e\u003ca\u003eSqlUnknown\u003c/a\u003e\u003c/code\u003e for all\n columns for which it cannot determine\n the right type. The \u003ccode\u003ebackendTypeCode\u003c/code\u003e here is the\n internal type code returned from the\n backend library\n\u003c/p\u003e",
          "module": "[\"DB.HSQL.Type\",\"Database.HSQL.Types\",\"Database.HSQL\"]",
          "name": "SqlUnknown",
          "package": "hsql",
          "signature": "SqlUnknown",
          "source": "src/DB-HSQL-Type.html#SqlType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlUnknown\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlUnknown\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlUnknown\"]"
        },
        "index": {
          "description": "HSQL returns SqlUnknown for all columns for which it cannot determine the right type The backendTypeCode here is the internal type code returned from the backend library",
          "hierarchy": "DB HSQL Type",
          "module": "DB.HSQL.Type",
          "name": "SqlUnknown",
          "package": "hsql",
          "partial": "Sql Unknown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlUnknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DB.HSQL.Type\",\"Database.HSQL.Types\",\"Database.HSQL\"]",
          "name": "SqlVarBinary",
          "package": "hsql",
          "signature": "SqlVarBinary",
          "source": "src/DB-HSQL-Type.html#SqlType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlVarBinary\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlVarBinary\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlVarBinary\"]"
        },
        "index": {
          "hierarchy": "DB HSQL Type",
          "module": "DB.HSQL.Type",
          "name": "SqlVarBinary",
          "package": "hsql",
          "partial": "Sql Var Binary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlVarBinary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DB.HSQL.Type\",\"Database.HSQL.Types\",\"Database.HSQL\"]",
          "name": "SqlVarChar",
          "package": "hsql",
          "signature": "SqlVarChar",
          "source": "src/DB-HSQL-Type.html#SqlType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlVarChar\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlVarChar\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlVarChar\"]"
        },
        "index": {
          "hierarchy": "DB HSQL Type",
          "module": "DB.HSQL.Type",
          "name": "SqlVarChar",
          "package": "hsql",
          "partial": "Sql Var Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlVarChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DB.HSQL.Type\",\"Database.HSQL.Types\",\"Database.HSQL\"]",
          "name": "SqlWChar",
          "package": "hsql",
          "signature": "SqlWChar",
          "source": "src/DB-HSQL-Type.html#SqlType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlWChar\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlWChar\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlWChar\"]"
        },
        "index": {
          "hierarchy": "DB HSQL Type",
          "module": "DB.HSQL.Type",
          "name": "SqlWChar",
          "package": "hsql",
          "partial": "Sql WChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlWChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DB.HSQL.Type\",\"Database.HSQL.Types\",\"Database.HSQL\"]",
          "name": "SqlWLongVarChar",
          "package": "hsql",
          "signature": "SqlWLongVarChar",
          "source": "src/DB-HSQL-Type.html#SqlType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlWLongVarChar\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlWLongVarChar\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlWLongVarChar\"]"
        },
        "index": {
          "hierarchy": "DB HSQL Type",
          "module": "DB.HSQL.Type",
          "name": "SqlWLongVarChar",
          "package": "hsql",
          "partial": "Sql WLong Var Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlWLongVarChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DB.HSQL.Type\",\"Database.HSQL.Types\",\"Database.HSQL\"]",
          "name": "SqlWVarChar",
          "package": "hsql",
          "signature": "SqlWVarChar",
          "source": "src/DB-HSQL-Type.html#SqlType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlWVarChar\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlWVarChar\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlWVarChar\"]"
        },
        "index": {
          "hierarchy": "DB HSQL Type",
          "module": "DB.HSQL.Type",
          "name": "SqlWVarChar",
          "package": "hsql",
          "partial": "Sql WVar Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlWVarChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DB.HSQL.Type\",\"Database.HSQL.Types\",\"Database.HSQL\"]",
          "name": "SqlYear",
          "package": "hsql",
          "signature": "SqlYear",
          "source": "src/DB-HSQL-Type.html#SqlType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlYear\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlYear\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlYear\"]"
        },
        "index": {
          "hierarchy": "DB HSQL Type",
          "module": "DB.HSQL.Type",
          "name": "SqlYear",
          "package": "hsql",
          "partial": "Sql Year",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlYear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DB.HSQL.Type\",\"Database.HSQL.Types\",\"Database.HSQL\"]",
          "name": "typeCode",
          "package": "hsql",
          "signature": "Int",
          "source": "src/DB-HSQL-Type.html#SqlType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:typeCode\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:typeCode\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:typeCode\"]"
        },
        "index": {
          "hierarchy": "DB HSQL Type",
          "module": "DB.HSQL.Type",
          "name": "typeCode",
          "package": "hsql",
          "partial": "Code",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:typeCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DB.HSQL.Type\",\"Database.HSQL.Types\",\"Database.HSQL\"]",
          "name": "typeDecimals",
          "package": "hsql",
          "signature": "Int",
          "source": "src/DB-HSQL-Type.html#SqlType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:typeDecimals\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:typeDecimals\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:typeDecimals\"]"
        },
        "index": {
          "hierarchy": "DB HSQL Type",
          "module": "DB.HSQL.Type",
          "name": "typeDecimals",
          "package": "hsql",
          "partial": "Decimals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:typeDecimals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DB.HSQL.Type\",\"Database.HSQL.Types\",\"Database.HSQL\"]",
          "name": "typeSize",
          "package": "hsql",
          "signature": "Int",
          "source": "src/DB-HSQL-Type.html#SqlType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:typeSize\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:typeSize\",\"http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:typeSize\"]"
        },
        "index": {
          "hierarchy": "DB HSQL Type",
          "module": "DB.HSQL.Type",
          "name": "typeSize",
          "package": "hsql",
          "partial": "Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:typeSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBasic type class & type definitions for DB interfacing.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.HSQL.Types",
          "name": "Types",
          "package": "hsql",
          "source": "src/Database-HSQL-Types.html",
          "type": "module"
        },
        "index": {
          "description": "Basic type class type definitions for DB interfacing",
          "hierarchy": "Database HSQL Types",
          "module": "Database.HSQL.Types",
          "name": "Types",
          "package": "hsql",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescription of the properties of a table column.\n\u003c/p\u003e",
          "module": "Database.HSQL.Types",
          "name": "ColDef",
          "package": "hsql",
          "source": "src/Database-HSQL-Types.html#ColDef",
          "type": "type"
        },
        "index": {
          "description": "Description of the properties of table column",
          "hierarchy": "Database HSQL Types",
          "module": "Database.HSQL.Types",
          "name": "ColDef",
          "package": "hsql",
          "partial": "Col Def",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#t:ColDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA table column ID.\n\u003c/p\u003e",
          "module": "Database.HSQL.Types",
          "name": "ColId",
          "package": "hsql",
          "source": "src/Database-HSQL-Types.html#ColId",
          "type": "type"
        },
        "index": {
          "description": "table column ID",
          "hierarchy": "Database HSQL Types",
          "module": "Database.HSQL.Types",
          "name": "ColId",
          "package": "hsql",
          "partial": "Col Id",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#t:ColId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eConnection\u003c/a\u003e\u003c/code\u003e type represents a connection to a database,\n through which you can operate on the it.\n In order to create the connection you need to use the \u003ccode\u003econnect\u003c/code\u003e function\n from the module for your prefered backend.\n\u003c/p\u003e",
          "module": "Database.HSQL.Types",
          "name": "Connection",
          "package": "hsql",
          "source": "src/Database-HSQL-Types.html#Connection",
          "type": "data"
        },
        "index": {
          "description": "Connection type represents connection to database through which you can operate on the it In order to create the connection you need to use the connect function from the module for your prefered backend",
          "hierarchy": "Database HSQL Types",
          "module": "Database.HSQL.Types",
          "name": "Connection",
          "package": "hsql",
          "partial": "Connection",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#t:Connection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA DB generic field extraction function, specifiable by \n field definition, receiving the content code and its length.\n\u003c/p\u003e",
          "module": "Database.HSQL.Types",
          "name": "FieldReader",
          "package": "hsql",
          "source": "src/Database-HSQL-Types.html#FieldReader",
          "type": "type"
        },
        "index": {
          "description": "DB generic field extraction function specifiable by field definition receiving the content code and its length",
          "hierarchy": "Database HSQL Types",
          "module": "Database.HSQL.Types",
          "name": "FieldReader",
          "package": "hsql",
          "partial": "Field Reader",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#t:FieldReader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn extraction of a field of type to be specified by requester,\n from a row index with source \u003ccode\u003e\u003ca\u003eColDef\u003c/a\u003e\u003c/code\u003e, applying an appropriate \n \u003ccode\u003e\u003ca\u003eFieldReader\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.HSQL.Types",
          "name": "FieldReading",
          "package": "hsql",
          "source": "src/Database-HSQL-Types.html#FieldReading",
          "type": "type"
        },
        "index": {
          "description": "An extraction of field of type to be specified by requester from row index with source ColDef applying an appropriate FieldReader",
          "hierarchy": "Database HSQL Types",
          "module": "Database.HSQL.Types",
          "name": "FieldReading",
          "package": "hsql",
          "partial": "Field Reading",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#t:FieldReading"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhether fields of a table col may be NULL.\n\u003c/p\u003e",
          "module": "Database.HSQL.Types",
          "name": "Nullability",
          "package": "hsql",
          "source": "src/Database-HSQL-Types.html#Nullability",
          "type": "type"
        },
        "index": {
          "description": "Whether fields of table col may be NULL",
          "hierarchy": "Database HSQL Types",
          "module": "Database.HSQL.Types",
          "name": "Nullability",
          "package": "hsql",
          "partial": "Nullability",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#t:Nullability"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn SQL Query.\n\u003c/p\u003e",
          "module": "Database.HSQL.Types",
          "name": "SQL",
          "package": "hsql",
          "source": "src/Database-HSQL-Types.html#SQL",
          "type": "type"
        },
        "index": {
          "description": "An SQL Query",
          "hierarchy": "Database HSQL Types",
          "module": "Database.HSQL.Types",
          "name": "SQL",
          "package": "hsql",
          "partial": "SQL",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#t:SQL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEquivalent to Show and Read adapted to SQL expressions.\n\u003c/p\u003e",
          "module": "Database.HSQL.Types",
          "name": "SqlBind",
          "package": "hsql",
          "source": "src/Database-HSQL-Types.html#SqlBind",
          "type": "class"
        },
        "index": {
          "description": "Equivalent to Show and Read adapted to SQL expressions",
          "hierarchy": "Database HSQL Types",
          "module": "Database.HSQL.Types",
          "name": "SqlBind",
          "package": "hsql",
          "partial": "Sql Bind",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#t:SqlBind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HSQL.Types",
          "name": "SqlError",
          "package": "hsql",
          "source": "src/DB-HSQL-Error.html#SqlError",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HSQL Types",
          "module": "Database.HSQL.Types",
          "name": "SqlError",
          "package": "hsql",
          "partial": "Sql Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#t:SqlError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariety of common data types used in databases.\n\u003c/p\u003e",
          "module": "Database.HSQL.Types",
          "name": "SqlType",
          "package": "hsql",
          "source": "src/DB-HSQL-Type.html#SqlType",
          "type": "data"
        },
        "index": {
          "description": "Variety of common data types used in databases",
          "hierarchy": "Database HSQL Types",
          "module": "Database.HSQL.Types",
          "name": "SqlType",
          "package": "hsql",
          "partial": "Sql Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#t:SqlType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eStatement\u003c/a\u003e\u003c/code\u003e type represents a result from the execution of given\n SQL query.\n\u003c/p\u003e",
          "module": "Database.HSQL.Types",
          "name": "Statement",
          "package": "hsql",
          "source": "src/Database-HSQL-Types.html#Statement",
          "type": "data"
        },
        "index": {
          "description": "The Statement type represents result from the execution of given SQL query",
          "hierarchy": "Database HSQL Types",
          "module": "Database.HSQL.Types",
          "name": "Statement",
          "package": "hsql",
          "partial": "Statement",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#t:Statement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA table ID.\n\u003c/p\u003e",
          "module": "Database.HSQL.Types",
          "name": "TableId",
          "package": "hsql",
          "source": "src/Database-HSQL-Types.html#TableId",
          "type": "type"
        },
        "index": {
          "description": "table ID",
          "hierarchy": "Database HSQL Types",
          "module": "Database.HSQL.Types",
          "name": "TableId",
          "package": "hsql",
          "partial": "Table Id",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#t:TableId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HSQL.Types",
          "name": "Connection",
          "package": "hsql",
          "signature": "Connection",
          "source": "src/Database-HSQL-Types.html#Connection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HSQL Types",
          "module": "Database.HSQL.Types",
          "name": "Connection",
          "package": "hsql",
          "partial": "Connection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:Connection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HSQL.Types",
          "name": "Statement",
          "package": "hsql",
          "signature": "Statement",
          "source": "src/Database-HSQL-Types.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HSQL Types",
          "module": "Database.HSQL.Types",
          "name": "Statement",
          "package": "hsql",
          "partial": "Statement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:Statement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ebegin of a transaction\n\u003c/p\u003e",
          "module": "Database.HSQL.Types",
          "name": "connBeginTransaction",
          "package": "hsql",
          "signature": "IO ()",
          "source": "src/Database-HSQL-Types.html#Connection",
          "type": "function"
        },
        "index": {
          "description": "begin of transaction",
          "hierarchy": "Database HSQL Types",
          "module": "Database.HSQL.Types",
          "name": "connBeginTransaction",
          "normalized": "IO()",
          "package": "hsql",
          "partial": "Begin Transaction",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:connBeginTransaction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eclosing state of the connection\n\u003c/p\u003e",
          "module": "Database.HSQL.Types",
          "name": "connClosed",
          "package": "hsql",
          "signature": "MVar Bool",
          "source": "src/Database-HSQL-Types.html#Connection",
          "type": "function"
        },
        "index": {
          "description": "closing state of the connection",
          "hierarchy": "Database HSQL Types",
          "module": "Database.HSQL.Types",
          "name": "connClosed",
          "package": "hsql",
          "partial": "Closed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:connClosed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecommit of a pending transaction\n\u003c/p\u003e",
          "module": "Database.HSQL.Types",
          "name": "connCommitTransaction",
          "package": "hsql",
          "signature": "IO ()",
          "source": "src/Database-HSQL-Types.html#Connection",
          "type": "function"
        },
        "index": {
          "description": "commit of pending transaction",
          "hierarchy": "Database HSQL Types",
          "module": "Database.HSQL.Types",
          "name": "connCommitTransaction",
          "normalized": "IO()",
          "package": "hsql",
          "partial": "Commit Transaction",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:connCommitTransaction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eretrieval of the field defs of a table\n\u003c/p\u003e",
          "module": "Database.HSQL.Types",
          "name": "connDescribe",
          "package": "hsql",
          "signature": "TableId -\u003e IO [ColDef]",
          "source": "src/Database-HSQL-Types.html#Connection",
          "type": "function"
        },
        "index": {
          "description": "retrieval of the field defs of table",
          "hierarchy": "Database HSQL Types",
          "module": "Database.HSQL.Types",
          "name": "connDescribe",
          "normalized": "TableId-\u003eIO[ColDef]",
          "package": "hsql",
          "partial": "Describe",
          "signature": "TableId-\u003eIO[ColDef]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:connDescribe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edisconnect action\n\u003c/p\u003e",
          "module": "Database.HSQL.Types",
          "name": "connDisconnect",
          "package": "hsql",
          "signature": "IO ()",
          "source": "src/Database-HSQL-Types.html#Connection",
          "type": "function"
        },
        "index": {
          "description": "disconnect action",
          "hierarchy": "Database HSQL Types",
          "module": "Database.HSQL.Types",
          "name": "connDisconnect",
          "normalized": "IO()",
          "package": "hsql",
          "partial": "Disconnect",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:connDisconnect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003equery execution action (without return value)\n\u003c/p\u003e",
          "module": "Database.HSQL.Types",
          "name": "connExecute",
          "package": "hsql",
          "signature": "SQL -\u003e IO ()",
          "source": "src/Database-HSQL-Types.html#Connection",
          "type": "function"
        },
        "index": {
          "description": "query execution action without return value",
          "hierarchy": "Database HSQL Types",
          "module": "Database.HSQL.Types",
          "name": "connExecute",
          "normalized": "SQL-\u003eIO()",
          "package": "hsql",
          "partial": "Execute",
          "signature": "SQL-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:connExecute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003equery action with return value\n\u003c/p\u003e",
          "module": "Database.HSQL.Types",
          "name": "connQuery",
          "package": "hsql",
          "signature": "SQL -\u003e IO Statement",
          "source": "src/Database-HSQL-Types.html#Connection",
          "type": "function"
        },
        "index": {
          "description": "query action with return value",
          "hierarchy": "Database HSQL Types",
          "module": "Database.HSQL.Types",
          "name": "connQuery",
          "normalized": "SQL-\u003eIO Statement",
          "package": "hsql",
          "partial": "Query",
          "signature": "SQL-\u003eIO Statement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:connQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erollback of a pending transaction\n\u003c/p\u003e",
          "module": "Database.HSQL.Types",
          "name": "connRollbackTransaction",
          "package": "hsql",
          "signature": "IO ()",
          "source": "src/Database-HSQL-Types.html#Connection",
          "type": "function"
        },
        "index": {
          "description": "rollback of pending transaction",
          "hierarchy": "Database HSQL Types",
          "module": "Database.HSQL.Types",
          "name": "connRollbackTransaction",
          "normalized": "IO()",
          "package": "hsql",
          "partial": "Rollback Transaction",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:connRollbackTransaction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eretrieval of the names of the tables in reach\n\u003c/p\u003e",
          "module": "Database.HSQL.Types",
          "name": "connTables",
          "package": "hsql",
          "signature": "IO [TableId]",
          "source": "src/Database-HSQL-Types.html#Connection",
          "type": "function"
        },
        "index": {
          "description": "retrieval of the names of the tables in reach",
          "hierarchy": "Database HSQL Types",
          "module": "Database.HSQL.Types",
          "name": "connTables",
          "normalized": "IO[TableId]",
          "package": "hsql",
          "partial": "Tables",
          "signature": "IO[TableId]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:connTables"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eread from SQL expression in binary representation,\n by support of its \u003ccode\u003e\u003ca\u003eColDef\u003c/a\u003e\u003c/code\u003e and code size info.\n This allows for faster conversion for e.g. integral numeric types,\n etc.\n\u003c/p\u003e",
          "module": "Database.HSQL.Types",
          "name": "fromSqlCStringLen",
          "package": "hsql",
          "signature": "fromSqlCStringLen",
          "source": "src/Database-HSQL-Types.html#fromSqlCStringLen",
          "type": "method"
        },
        "index": {
          "description": "read from SQL expression in binary representation by support of its ColDef and code size info This allows for faster conversion for e.g integral numeric types etc",
          "hierarchy": "Database HSQL Types",
          "module": "Database.HSQL.Types",
          "name": "fromSqlCStringLen",
          "package": "hsql",
          "partial": "Sql CString Len",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:fromSqlCStringLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eread from an SQL expression in text representation, \n by support of its \u003ccode\u003e\u003ca\u003eSqlType\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Database.HSQL.Types",
          "name": "fromSqlValue",
          "package": "hsql",
          "signature": "SqlType -\u003e SQL -\u003e Maybe a",
          "source": "src/Database-HSQL-Types.html#fromSqlValue",
          "type": "method"
        },
        "index": {
          "description": "read from an SQL expression in text representation by support of its SqlType",
          "hierarchy": "Database HSQL Types",
          "module": "Database.HSQL.Types",
          "name": "fromSqlValue",
          "normalized": "SqlType-\u003eSQL-\u003eMaybe a",
          "package": "hsql",
          "partial": "Sql Value",
          "signature": "SqlType-\u003eSQL-\u003eMaybe a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:fromSqlValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eclose action\n\u003c/p\u003e",
          "module": "Database.HSQL.Types",
          "name": "stmtClose",
          "package": "hsql",
          "signature": "IO ()",
          "source": "src/Database-HSQL-Types.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "close action",
          "hierarchy": "Database HSQL Types",
          "module": "Database.HSQL.Types",
          "name": "stmtClose",
          "normalized": "IO()",
          "package": "hsql",
          "partial": "Close",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:stmtClose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003echeck whether the statement is closed\n\u003c/p\u003e",
          "module": "Database.HSQL.Types",
          "name": "stmtClosed",
          "package": "hsql",
          "signature": "MVar Bool",
          "source": "src/Database-HSQL-Types.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "check whether the statement is closed",
          "hierarchy": "Database HSQL Types",
          "module": "Database.HSQL.Types",
          "name": "stmtClosed",
          "package": "hsql",
          "partial": "Closed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:stmtClosed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDB connection the statement depends on\n\u003c/p\u003e",
          "module": "Database.HSQL.Types",
          "name": "stmtConn",
          "package": "hsql",
          "signature": "Connection",
          "source": "src/Database-HSQL-Types.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "DB connection the statement depends on",
          "hierarchy": "Database HSQL Types",
          "module": "Database.HSQL.Types",
          "name": "stmtConn",
          "package": "hsql",
          "partial": "Conn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:stmtConn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eincrementation of the row pointer and indication\n whether this is still in range of available rows\n\u003c/p\u003e",
          "module": "Database.HSQL.Types",
          "name": "stmtFetch",
          "package": "hsql",
          "signature": "IO Bool",
          "source": "src/Database-HSQL-Types.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "incrementation of the row pointer and indication whether this is still in range of available rows",
          "hierarchy": "Database HSQL Types",
          "module": "Database.HSQL.Types",
          "name": "stmtFetch",
          "package": "hsql",
          "partial": "Fetch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:stmtFetch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efield descriptors for each result table column\n\u003c/p\u003e",
          "module": "Database.HSQL.Types",
          "name": "stmtFields",
          "package": "hsql",
          "signature": "[ColDef]",
          "source": "src/Database-HSQL-Types.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "field descriptors for each result table column",
          "hierarchy": "Database HSQL Types",
          "module": "Database.HSQL.Types",
          "name": "stmtFields",
          "normalized": "[ColDef]",
          "package": "hsql",
          "partial": "Fields",
          "signature": "[ColDef]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:stmtFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea \u003ccode\u003e\u003ca\u003eFieldReading\u003c/a\u003e\u003c/code\u003e function applicable for each row\n\u003c/p\u003e",
          "module": "Database.HSQL.Types",
          "name": "stmtGetCol",
          "package": "hsql",
          "signature": "FieldReading",
          "source": "src/Database-HSQL-Types.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "FieldReading function applicable for each row",
          "hierarchy": "Database HSQL Types",
          "module": "Database.HSQL.Types",
          "name": "stmtGetCol",
          "package": "hsql",
          "partial": "Get Col",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:stmtGetCol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eshow as an SQL expression\n\u003c/p\u003e",
          "module": "Database.HSQL.Types",
          "name": "toSqlValue",
          "package": "hsql",
          "signature": "a -\u003e SQL",
          "source": "src/Database-HSQL-Types.html#toSqlValue",
          "type": "method"
        },
        "index": {
          "description": "show as an SQL expression",
          "hierarchy": "Database HSQL Types",
          "module": "Database.HSQL.Types",
          "name": "toSqlValue",
          "normalized": "a-\u003eSQL",
          "package": "hsql",
          "partial": "Sql Value",
          "signature": "a-\u003eSQL",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:toSqlValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HSQL",
          "name": "HSQL",
          "package": "hsql",
          "source": "src/Database-HSQL.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Database HSQL",
          "module": "Database.HSQL",
          "name": "HSQL",
          "package": "hsql",
          "partial": "HSQL",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA 2D rectangle.\n\u003c/p\u003e",
          "module": "Database.HSQL",
          "name": "Box",
          "package": "hsql",
          "source": "src/DB-HSQL-Type-Geometric.html#Box",
          "type": "data"
        },
        "index": {
          "description": "rectangle",
          "hierarchy": "Database HSQL",
          "module": "Database.HSQL",
          "name": "Box",
          "package": "hsql",
          "partial": "Box",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#t:Box"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA 2D circle\n\u003c/p\u003e",
          "module": "Database.HSQL",
          "name": "Circle",
          "package": "hsql",
          "source": "src/DB-HSQL-Type-Geometric.html#Circle",
          "type": "data"
        },
        "index": {
          "description": "circle",
          "hierarchy": "Database HSQL",
          "module": "Database.HSQL",
          "name": "Circle",
          "package": "hsql",
          "partial": "Circle",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#t:Circle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescription of the properties of a table column.\n\u003c/p\u003e",
          "module": "Database.HSQL",
          "name": "ColDef",
          "package": "hsql",
          "source": "src/Database-HSQL-Types.html#ColDef",
          "type": "type"
        },
        "index": {
          "description": "Description of the properties of table column",
          "hierarchy": "Database HSQL",
          "module": "Database.HSQL",
          "name": "ColDef",
          "package": "hsql",
          "partial": "Col Def",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#t:ColDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eConnection\u003c/a\u003e\u003c/code\u003e type represents a connection to a database,\n through which you can operate on the it.\n In order to create the connection you need to use the \u003ccode\u003econnect\u003c/code\u003e function\n from the module for your prefered backend.\n\u003c/p\u003e",
          "module": "Database.HSQL",
          "name": "Connection",
          "package": "hsql",
          "source": "src/Database-HSQL-Types.html#Connection",
          "type": "data"
        },
        "index": {
          "description": "Connection type represents connection to database through which you can operate on the it In order to create the connection you need to use the connect function from the module for your prefered backend",
          "hierarchy": "Database HSQL",
          "module": "Database.HSQL",
          "name": "Connection",
          "package": "hsql",
          "partial": "Connection",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#t:Connection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn IP4 address with netmask in CIDR notation.\n\u003c/p\u003e",
          "module": "Database.HSQL",
          "name": "INetAddr",
          "package": "hsql",
          "source": "src/DB-HSQL-Type-NetAddress.html#INetAddr",
          "type": "data"
        },
        "index": {
          "description": "An IP4 address with netmask in CIDR notation",
          "hierarchy": "Database HSQL",
          "module": "Database.HSQL",
          "name": "INetAddr",
          "package": "hsql",
          "partial": "INet Addr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#t:INetAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA 2D straight line.\n\u003c/p\u003e",
          "module": "Database.HSQL",
          "name": "Line",
          "package": "hsql",
          "source": "src/DB-HSQL-Type-Geometric.html#Line",
          "type": "data"
        },
        "index": {
          "description": "straight line",
          "hierarchy": "Database HSQL",
          "module": "Database.HSQL",
          "name": "Line",
          "package": "hsql",
          "partial": "Line",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#t:Line"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA MAC network address.\n\u003c/p\u003e",
          "module": "Database.HSQL",
          "name": "MacAddr",
          "package": "hsql",
          "source": "src/DB-HSQL-Type-NetAddress.html#MacAddr",
          "type": "data"
        },
        "index": {
          "description": "MAC network address",
          "hierarchy": "Database HSQL",
          "module": "Database.HSQL",
          "name": "MacAddr",
          "package": "hsql",
          "partial": "Mac Addr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#t:MacAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA 2D path, either open, or closed (looping). \n\u003c/p\u003e",
          "module": "Database.HSQL",
          "name": "Path",
          "package": "hsql",
          "source": "src/DB-HSQL-Type-Geometric.html#Path",
          "type": "data"
        },
        "index": {
          "description": "path either open or closed looping",
          "hierarchy": "Database HSQL",
          "module": "Database.HSQL",
          "name": "Path",
          "package": "hsql",
          "partial": "Path",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#t:Path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA 2D point.\n\u003c/p\u003e",
          "module": "Database.HSQL",
          "name": "Point",
          "package": "hsql",
          "source": "src/DB-HSQL-Type-Geometric.html#Point",
          "type": "data"
        },
        "index": {
          "description": "point",
          "hierarchy": "Database HSQL",
          "module": "Database.HSQL",
          "name": "Point",
          "package": "hsql",
          "partial": "Point",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#t:Point"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA 2D polygon (without holes).\n\u003c/p\u003e",
          "module": "Database.HSQL",
          "name": "Polygon",
          "package": "hsql",
          "source": "src/DB-HSQL-Type-Geometric.html#Polygon",
          "type": "data"
        },
        "index": {
          "description": "polygon without holes",
          "hierarchy": "Database HSQL",
          "module": "Database.HSQL",
          "name": "Polygon",
          "package": "hsql",
          "partial": "Polygon",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#t:Polygon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn SQL Query.\n\u003c/p\u003e",
          "module": "Database.HSQL",
          "name": "SQL",
          "package": "hsql",
          "source": "src/Database-HSQL-Types.html#SQL",
          "type": "type"
        },
        "index": {
          "description": "An SQL Query",
          "hierarchy": "Database HSQL",
          "module": "Database.HSQL",
          "name": "SQL",
          "package": "hsql",
          "partial": "SQL",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#t:SQL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEquivalent to Show and Read adapted to SQL expressions.\n\u003c/p\u003e",
          "module": "Database.HSQL",
          "name": "SqlBind",
          "package": "hsql",
          "source": "src/Database-HSQL-Types.html#SqlBind",
          "type": "class"
        },
        "index": {
          "description": "Equivalent to Show and Read adapted to SQL expressions",
          "hierarchy": "Database HSQL",
          "module": "Database.HSQL",
          "name": "SqlBind",
          "package": "hsql",
          "partial": "Sql Bind",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#t:SqlBind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HSQL",
          "name": "SqlError",
          "package": "hsql",
          "source": "src/DB-HSQL-Error.html#SqlError",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HSQL",
          "module": "Database.HSQL",
          "name": "SqlError",
          "package": "hsql",
          "partial": "Sql Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#t:SqlError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariety of common data types used in databases.\n\u003c/p\u003e",
          "module": "Database.HSQL",
          "name": "SqlType",
          "package": "hsql",
          "source": "src/DB-HSQL-Type.html#SqlType",
          "type": "data"
        },
        "index": {
          "description": "Variety of common data types used in databases",
          "hierarchy": "Database HSQL",
          "module": "Database.HSQL",
          "name": "SqlType",
          "package": "hsql",
          "partial": "Sql Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#t:SqlType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eStatement\u003c/a\u003e\u003c/code\u003e type represents a result from the execution of given\n SQL query.\n\u003c/p\u003e",
          "module": "Database.HSQL",
          "name": "Statement",
          "package": "hsql",
          "source": "src/Database-HSQL-Types.html#Statement",
          "type": "data"
        },
        "index": {
          "description": "The Statement type represents result from the execution of given SQL query",
          "hierarchy": "Database HSQL",
          "module": "Database.HSQL",
          "name": "Statement",
          "package": "hsql",
          "partial": "Statement",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#t:Statement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ecloseStatement\u003c/a\u003e\u003c/code\u003e stops processing associated with a specific statement,\n closes any open cursors associated with the statement, discards pending\n results, and frees all resources associated with the statement.\n Performing \u003ccode\u003e\u003ca\u003ecloseStatement\u003c/a\u003e\u003c/code\u003e on a statement that has already been closed\n has no effect. All other operations on a closed statement will fail.\n\u003c/p\u003e",
          "module": "Database.HSQL",
          "name": "closeStatement",
          "package": "hsql",
          "signature": "Statement -\u003e IO ()",
          "source": "src/Database-HSQL.html#closeStatement",
          "type": "function"
        },
        "index": {
          "description": "closeStatement stops processing associated with specific statement closes any open cursors associated with the statement discards pending results and frees all resources associated with the statement Performing closeStatement on statement that has already been closed has no effect All other operations on closed statement will fail",
          "hierarchy": "Database HSQL",
          "module": "Database.HSQL",
          "name": "closeStatement",
          "normalized": "Statement-\u003eIO()",
          "package": "hsql",
          "partial": "Statement",
          "signature": "Statement-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:closeStatement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ecollectRows\u003c/a\u003e\u003c/code\u003e function iterates through the result set in \u003ccode\u003e\u003ca\u003eStatement\u003c/a\u003e\u003c/code\u003e\n and executes the given action for each row in the set. The values returned\n from action are collected and returned as list. The function closes the\n \u003ccode\u003e\u003ca\u003eStatement\u003c/a\u003e\u003c/code\u003e after the last row processing or if the given action raises an\n exception.\n\u003c/p\u003e",
          "module": "Database.HSQL",
          "name": "collectRows",
          "package": "hsql",
          "signature": "(Statement -\u003e IO a) -\u003e Statement -\u003e IO [a]",
          "source": "src/Database-HSQL.html#collectRows",
          "type": "function"
        },
        "index": {
          "description": "The collectRows function iterates through the result set in Statement and executes the given action for each row in the set The values returned from action are collected and returned as list The function closes the Statement after the last row processing or if the given action raises an exception",
          "hierarchy": "Database HSQL",
          "module": "Database.HSQL",
          "name": "collectRows",
          "normalized": "(Statement-\u003eIO a)-\u003eStatement-\u003eIO[a]",
          "package": "hsql",
          "partial": "Rows",
          "signature": "(Statement-\u003eIO a)-\u003eStatement-\u003eIO[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:collectRows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList all columns in a table along with their types and \u003ccode\u003enullable\u003c/code\u003e flags\n\u003c/p\u003e",
          "module": "Database.HSQL",
          "name": "describe",
          "package": "hsql",
          "signature": "Connection-\u003e TableId-\u003e IO [ColDef]",
          "type": "function"
        },
        "index": {
          "description": "List all columns in table along with their types and nullable flags",
          "hierarchy": "Database HSQL",
          "module": "Database.HSQL",
          "name": "describe",
          "normalized": "Connection-\u003eTableId-\u003eIO[ColDef]",
          "package": "hsql",
          "signature": "Connection-\u003eTableId-\u003eIO[ColDef]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:describe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCloses the connection. Performing \u003ccode\u003e\u003ca\u003edisconnect\u003c/a\u003e\u003c/code\u003e on a connection that has\n already been closed has no effect.\n All other operations on a closed connection will fail.\n\u003c/p\u003e",
          "module": "Database.HSQL",
          "name": "disconnect",
          "package": "hsql",
          "signature": "Connection -\u003e IO ()",
          "source": "src/Database-HSQL.html#disconnect",
          "type": "function"
        },
        "index": {
          "description": "Closes the connection Performing disconnect on connection that has already been closed has no effect All other operations on closed connection will fail",
          "hierarchy": "Database HSQL",
          "module": "Database.HSQL",
          "name": "disconnect",
          "normalized": "Connection-\u003eIO()",
          "package": "hsql",
          "signature": "Connection-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:disconnect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubmits a command to the database.\n\u003c/p\u003e",
          "module": "Database.HSQL",
          "name": "execute",
          "package": "hsql",
          "signature": "Connection-\u003e SQL-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Submits command to the database",
          "hierarchy": "Database HSQL",
          "module": "Database.HSQL",
          "name": "execute",
          "normalized": "Connection-\u003eSQL-\u003eIO()",
          "package": "hsql",
          "signature": "Connection-\u003eSQL-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:execute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efetch\u003c/a\u003e\u003c/code\u003e fetches the next rowset of data from the result set.\n The values from columns can be retrieved with \u003ccode\u003e\u003ca\u003egetFieldValue\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Database.HSQL",
          "name": "fetch",
          "package": "hsql",
          "signature": "Statement -\u003e IO Bool",
          "source": "src/Database-HSQL.html#fetch",
          "type": "function"
        },
        "index": {
          "description": "fetch fetches the next rowset of data from the result set The values from columns can be retrieved with getFieldValue function",
          "hierarchy": "Database HSQL",
          "module": "Database.HSQL",
          "name": "fetch",
          "normalized": "Statement-\u003eIO Bool",
          "package": "hsql",
          "signature": "Statement-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:fetch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eforEachRow\u003c/a\u003e\u003c/code\u003e function iterates through the result set in \u003ccode\u003e\u003ca\u003eStatement\u003c/a\u003e\u003c/code\u003e\n and executes the given action for each row in the set.\n The function closes the \u003ccode\u003e\u003ca\u003eStatement\u003c/a\u003e\u003c/code\u003e after the last row processing or if\n the given action raises an exception.\n\u003c/p\u003e",
          "module": "Database.HSQL",
          "name": "forEachRow",
          "package": "hsql",
          "signature": "(Statement -\u003e s -\u003e IO s)-\u003e Statement-\u003e s-\u003e IO s",
          "type": "function"
        },
        "index": {
          "description": "The forEachRow function iterates through the result set in Statement and executes the given action for each row in the set The function closes the Statement after the last row processing or if the given action raises an exception",
          "hierarchy": "Database HSQL",
          "module": "Database.HSQL",
          "name": "forEachRow",
          "normalized": "(Statement-\u003ea-\u003eIO a)-\u003eStatement-\u003ea-\u003eIO a",
          "package": "hsql",
          "partial": "Each Row",
          "signature": "(Statement-\u003es-\u003eIO s)-\u003eStatement-\u003es-\u003eIO s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:forEachRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe 'forEachRow\\'' function is analogous to \u003ccode\u003e\u003ca\u003eforEachRow\u003c/a\u003e\u003c/code\u003e but doesn't\n provide state.\n The function closes the \u003ccode\u003e\u003ca\u003eStatement\u003c/a\u003e\u003c/code\u003e after the last row processing or if the\n given action raises an exception.\n\u003c/p\u003e",
          "module": "Database.HSQL",
          "name": "forEachRow'",
          "package": "hsql",
          "signature": "(Statement -\u003e IO ()) -\u003e Statement -\u003e IO ()",
          "source": "src/Database-HSQL.html#forEachRow%27",
          "type": "function"
        },
        "index": {
          "description": "The forEachRow function is analogous to forEachRow but doesn provide state The function closes the Statement after the last row processing or if the given action raises an exception",
          "hierarchy": "Database HSQL",
          "module": "Database.HSQL",
          "name": "forEachRow'",
          "normalized": "(Statement-\u003eIO())-\u003eStatement-\u003eIO()",
          "package": "hsql",
          "partial": "Each Row'",
          "signature": "(Statement-\u003eIO())-\u003eStatement-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:forEachRow-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eread from SQL expression in binary representation,\n by support of its \u003ccode\u003e\u003ca\u003eColDef\u003c/a\u003e\u003c/code\u003e and code size info.\n This allows for faster conversion for e.g. integral numeric types,\n etc.\n\u003c/p\u003e",
          "module": "Database.HSQL",
          "name": "fromSqlCStringLen",
          "package": "hsql",
          "signature": "fromSqlCStringLen",
          "source": "src/Database-HSQL-Types.html#fromSqlCStringLen",
          "type": "method"
        },
        "index": {
          "description": "read from SQL expression in binary representation by support of its ColDef and code size info This allows for faster conversion for e.g integral numeric types etc",
          "hierarchy": "Database HSQL",
          "module": "Database.HSQL",
          "name": "fromSqlCStringLen",
          "package": "hsql",
          "partial": "Sql CString Len",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:fromSqlCStringLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieves the value of field with the specified name.\n\u003c/p\u003e",
          "module": "Database.HSQL",
          "name": "getFieldValue",
          "package": "hsql",
          "signature": "Statement-\u003e String-\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "Retrieves the value of field with the specified name",
          "hierarchy": "Database HSQL",
          "module": "Database.HSQL",
          "name": "getFieldValue",
          "normalized": "Statement-\u003eString-\u003eIO a",
          "package": "hsql",
          "partial": "Field Value",
          "signature": "Statement-\u003eString-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:getFieldValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieves the value of field with the specified name.\n If the field value is \u003ccode\u003enull\u003c/code\u003e then the function will return the default value.\n\u003c/p\u003e",
          "module": "Database.HSQL",
          "name": "getFieldValue'",
          "package": "hsql",
          "signature": "Statement-\u003e String-\u003e a-\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "Retrieves the value of field with the specified name If the field value is null then the function will return the default value",
          "hierarchy": "Database HSQL",
          "module": "Database.HSQL",
          "name": "getFieldValue'",
          "normalized": "Statement-\u003eString-\u003ea-\u003eIO a",
          "package": "hsql",
          "partial": "Field Value'",
          "signature": "Statement-\u003eString-\u003ea-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:getFieldValue-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HSQL",
          "name": "getFieldValueMB",
          "package": "hsql",
          "signature": "Statement -\u003e String -\u003e IO (Maybe a)",
          "source": "src/Database-HSQL.html#getFieldValueMB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HSQL",
          "module": "Database.HSQL",
          "name": "getFieldValueMB",
          "normalized": "Statement-\u003eString-\u003eIO(Maybe a)",
          "package": "hsql",
          "partial": "Field Value MB",
          "signature": "Statement-\u003eString-\u003eIO(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:getFieldValueMB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the type and the \u003ccode\u003enullable\u003c/code\u003e flag for field with specified name\n\u003c/p\u003e",
          "module": "Database.HSQL",
          "name": "getFieldValueType",
          "package": "hsql",
          "signature": "Statement -\u003e String -\u003e (SqlType, Bool)",
          "source": "src/Database-HSQL.html#getFieldValueType",
          "type": "function"
        },
        "index": {
          "description": "Returns the type and the nullable flag for field with specified name",
          "hierarchy": "Database HSQL",
          "module": "Database.HSQL",
          "name": "getFieldValueType",
          "normalized": "Statement-\u003eString-\u003e(SqlType,Bool)",
          "package": "hsql",
          "partial": "Field Value Type",
          "signature": "Statement-\u003eString-\u003e(SqlType,Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:getFieldValueType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the list of fields with their types and \u003ccode\u003enullable\u003c/code\u003e flags\n\u003c/p\u003e",
          "module": "Database.HSQL",
          "name": "getFieldsTypes",
          "package": "hsql",
          "signature": "Statement -\u003e [(String, SqlType, Bool)]",
          "source": "src/Database-HSQL.html#getFieldsTypes",
          "type": "function"
        },
        "index": {
          "description": "Returns the list of fields with their types and nullable flags",
          "hierarchy": "Database HSQL",
          "module": "Database.HSQL",
          "name": "getFieldsTypes",
          "normalized": "Statement-\u003e[(String,SqlType,Bool)]",
          "package": "hsql",
          "partial": "Fields Types",
          "signature": "Statement-\u003e[(String,SqlType,Bool)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:getFieldsTypes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003einTransaction\u003c/a\u003e\u003c/code\u003e function executes the specified action in transaction\n  mode.\n If the action completes successfully then the transaction will be commited.\n If the action completes with an exception then the transaction will be\n rolled back and the exception will be throw again.\n A transaction is to catch ANY exception, so \u003ccode\u003e\u003ca\u003eSomeException\u003c/a\u003e\u003c/code\u003e is adequate.\n\u003c/p\u003e",
          "module": "Database.HSQL",
          "name": "inTransaction",
          "package": "hsql",
          "signature": "Connection-\u003e (Connection -\u003e IO a)-\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "The inTransaction function executes the specified action in transaction mode If the action completes successfully then the transaction will be commited If the action completes with an exception then the transaction will be rolled back and the exception will be throw again transaction is to catch ANY exception so SomeException is adequate",
          "hierarchy": "Database HSQL",
          "module": "Database.HSQL",
          "name": "inTransaction",
          "normalized": "Connection-\u003e(Connection-\u003eIO a)-\u003eIO a",
          "package": "hsql",
          "partial": "Transaction",
          "signature": "Connection-\u003e(Connection-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:inTransaction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecutes a query and returns a result set\n\u003c/p\u003e",
          "module": "Database.HSQL",
          "name": "query",
          "package": "hsql",
          "signature": "Connection-\u003e SQL-\u003e IO Statement",
          "type": "function"
        },
        "index": {
          "description": "Executes query and returns result set",
          "hierarchy": "Database HSQL",
          "module": "Database.HSQL",
          "name": "query",
          "normalized": "Connection-\u003eSQL-\u003eIO Statement",
          "package": "hsql",
          "signature": "Connection-\u003eSQL-\u003eIO Statement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList all tables in the database.\n\u003c/p\u003e",
          "module": "Database.HSQL",
          "name": "tables",
          "package": "hsql",
          "signature": "Connection-\u003e IO [TableId]",
          "type": "function"
        },
        "index": {
          "description": "List all tables in the database",
          "hierarchy": "Database HSQL",
          "module": "Database.HSQL",
          "name": "tables",
          "normalized": "Connection-\u003eIO[TableId]",
          "package": "hsql",
          "signature": "Connection-\u003eIO[TableId]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:tables"
      }
    }
  ]
]