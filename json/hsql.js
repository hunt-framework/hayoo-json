[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Core.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eManagement of handles and exception handling. \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "DB.HSQL.Core",
        "fct-package": "hsql",
        "fct-signature": "module",
        "fct-source": "src/DB-HSQL-Core.html",
        "fct-type": "module",
        "title": "Core"
      },
      "index": {
        "description": "Management of handles and exception handling",
        "hierarchy": "DB HSQL Core",
        "module": "DB.HSQL.Core",
        "name": "Core",
        "normalized": "",
        "package": "hsql",
        "partial": "Core",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Core.html#v:catchSql",
      "description": {
        "fct-descr": "\u003cp\u003eDeprecated: Use \u003ccode\u003e\u003ca\u003ecatch\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e",
        "fct-module": "DB.HSQL.Core",
        "fct-package": "hsql",
        "fct-signature": "IO a -\u003e (SqlError -\u003e IO a) -\u003e IO a",
        "fct-source": "src/DB-HSQL-Core.html#catchSql",
        "fct-type": "function",
        "title": "catchSql"
      },
      "index": {
        "description": "Deprecated Use catch instead",
        "hierarchy": "DB HSQL Core",
        "module": "DB.HSQL.Core",
        "name": "catchSql",
        "normalized": "IO a-\u003e(SqlError-\u003eIO a)-\u003eIO a",
        "package": "hsql",
        "partial": "Sql",
        "signature": "IO a-\u003e(SqlError-\u003eIO a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Core.html#v:checkHandle",
      "description": {
        "fct-descr": "\u003cp\u003eif closed, throws \u003ccode\u003e\u003ca\u003eSqlClosedHandle\u003c/a\u003e\u003c/code\u003e exception.\n\u003c/p\u003e",
        "fct-module": "DB.HSQL.Core",
        "fct-package": "hsql",
        "fct-signature": "MVar Bool-\u003e IO a-\u003e IO a",
        "fct-type": "function",
        "title": "checkHandle"
      },
      "index": {
        "description": "if closed throws SqlClosedHandle exception",
        "hierarchy": "DB HSQL Core",
        "module": "DB.HSQL.Core",
        "name": "checkHandle",
        "normalized": "MVar Bool-\u003eIO a-\u003eIO a",
        "package": "hsql",
        "partial": "Handle",
        "signature": "MVar Bool-\u003eIO a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Core.html#v:closeHandle",
      "description": {
        "fct-descr": "\u003cp\u003eif closed, no action.\n\u003c/p\u003e",
        "fct-module": "DB.HSQL.Core",
        "fct-package": "hsql",
        "fct-signature": "MVar Bool-\u003e IO ()-\u003e IO ()",
        "fct-type": "function",
        "title": "closeHandle"
      },
      "index": {
        "description": "if closed no action",
        "hierarchy": "DB HSQL Core",
        "module": "DB.HSQL.Core",
        "name": "closeHandle",
        "normalized": "MVar Bool-\u003eIO()-\u003eIO()",
        "package": "hsql",
        "partial": "Handle",
        "signature": "MVar Bool-\u003eIO()-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Core.html#v:handleSql",
      "description": {
        "fct-descr": "\u003cp\u003eDeprecated: Use \u003ccode\u003e\u003ca\u003ehandle\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e",
        "fct-module": "DB.HSQL.Core",
        "fct-package": "hsql",
        "fct-signature": "(SqlError -\u003e IO a) -\u003e IO a -\u003e IO a",
        "fct-source": "src/DB-HSQL-Core.html#handleSql",
        "fct-type": "function",
        "title": "handleSql"
      },
      "index": {
        "description": "Deprecated Use handle instead",
        "hierarchy": "DB HSQL Core",
        "module": "DB.HSQL.Core",
        "name": "handleSql",
        "normalized": "(SqlError-\u003eIO a)-\u003eIO a-\u003eIO a",
        "package": "hsql",
        "partial": "Sql",
        "signature": "(SqlError-\u003eIO a)-\u003eIO a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Core.html#v:sqlExceptions",
      "description": {
        "fct-descr": "\u003cp\u003eCasts, if possible, an \u003ccode\u003e\u003ca\u003eException\u003c/a\u003e\u003c/code\u003e to an \u003ccode\u003e\u003ca\u003eSqlError\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "DB.HSQL.Core",
        "fct-package": "hsql",
        "fct-signature": "x-\u003e Maybe SqlError",
        "fct-type": "function",
        "title": "sqlExceptions"
      },
      "index": {
        "description": "Casts if possible an Exception to an SqlError",
        "hierarchy": "DB HSQL Core",
        "module": "DB.HSQL.Core",
        "name": "sqlExceptions",
        "normalized": "a-\u003eMaybe SqlError",
        "package": "hsql",
        "partial": "Exceptions",
        "signature": "x-\u003eMaybe SqlError"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Error.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eSqlError\u003c/a\u003e\u003c/code\u003e type for a variety of DB specific error conditions,\nwith appropriate \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eTypeable\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eException\u003c/a\u003e\u003c/code\u003e instances.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "DB.HSQL.Error",
        "fct-package": "hsql",
        "fct-signature": "module",
        "fct-source": "src/DB-HSQL-Error.html",
        "fct-type": "module",
        "title": "Error"
      },
      "index": {
        "description": "SqlError type for variety of DB specific error conditions with appropriate Show Typeable and Exception instances",
        "hierarchy": "DB HSQL Error",
        "module": "DB.HSQL.Error",
        "name": "Error",
        "normalized": "",
        "package": "hsql",
        "partial": "Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Error.html#t:SqlError",
      "description": {
        "fct-module": "DB.HSQL.Error",
        "fct-package": "hsql",
        "fct-signature": "data",
        "fct-source": "src/DB-HSQL-Error.html#SqlError",
        "fct-type": "data",
        "title": "SqlError"
      },
      "index": {
        "description": "",
        "hierarchy": "DB HSQL Error",
        "module": "DB.HSQL.Error",
        "name": "SqlError",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Error.html#v:SqlBadTypeCast",
      "description": {
        "fct-descr": "\u003cp\u003erequested field can't be converted to requested type\n\u003c/p\u003e",
        "fct-module": "DB.HSQL.Error",
        "fct-package": "hsql",
        "fct-signature": "SqlBadTypeCast",
        "fct-source": "src/DB-HSQL-Error.html#SqlError",
        "fct-type": "function",
        "title": "SqlBadTypeCast"
      },
      "index": {
        "description": "requested field can be converted to requested type",
        "hierarchy": "DB HSQL Error",
        "module": "DB.HSQL.Error",
        "name": "SqlBadTypeCast",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Bad Type Cast",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Error.html#v:SqlClosedHandle",
      "description": {
        "fct-descr": "\u003cp\u003ereferenced handle is already closed\n\u003c/p\u003e",
        "fct-module": "DB.HSQL.Error",
        "fct-package": "hsql",
        "fct-signature": "SqlClosedHandle",
        "fct-source": "src/DB-HSQL-Error.html#SqlError",
        "fct-type": "function",
        "title": "SqlClosedHandle"
      },
      "index": {
        "description": "referenced handle is already closed",
        "hierarchy": "DB HSQL Error",
        "module": "DB.HSQL.Error",
        "name": "SqlClosedHandle",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Closed Handle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Error.html#v:SqlError",
      "description": {
        "fct-descr": "\u003cp\u003egeneric error condition, with further specification\n\u003c/p\u003e",
        "fct-module": "DB.HSQL.Error",
        "fct-package": "hsql",
        "fct-signature": "SqlError",
        "fct-source": "src/DB-HSQL-Error.html#SqlError",
        "fct-type": "function",
        "title": "SqlError"
      },
      "index": {
        "description": "generic error condition with further specification",
        "hierarchy": "DB HSQL Error",
        "module": "DB.HSQL.Error",
        "name": "SqlError",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Error.html#v:SqlFetchNull",
      "description": {
        "fct-descr": "\u003cp\u003erequested field returns NULL\n\u003c/p\u003e",
        "fct-module": "DB.HSQL.Error",
        "fct-package": "hsql",
        "fct-signature": "SqlFetchNull",
        "fct-source": "src/DB-HSQL-Error.html#SqlError",
        "fct-type": "function",
        "title": "SqlFetchNull"
      },
      "index": {
        "description": "requested field returns NULL",
        "hierarchy": "DB HSQL Error",
        "module": "DB.HSQL.Error",
        "name": "SqlFetchNull",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Fetch Null",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Error.html#v:SqlInvalidHandle",
      "description": {
        "fct-descr": "\u003cp\u003erequested handle is invalid\n\u003c/p\u003e",
        "fct-module": "DB.HSQL.Error",
        "fct-package": "hsql",
        "fct-signature": "SqlInvalidHandle",
        "fct-source": "src/DB-HSQL-Error.html#SqlError",
        "fct-type": "function",
        "title": "SqlInvalidHandle"
      },
      "index": {
        "description": "requested handle is invalid",
        "hierarchy": "DB HSQL Error",
        "module": "DB.HSQL.Error",
        "name": "SqlInvalidHandle",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Invalid Handle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Error.html#v:SqlNeedMoreData",
      "description": {
        "fct-descr": "\u003cp\u003emore data is needed, e.g. additional connection\n specs\n\u003c/p\u003e",
        "fct-module": "DB.HSQL.Error",
        "fct-package": "hsql",
        "fct-signature": "SqlNeedMoreData",
        "fct-source": "src/DB-HSQL-Error.html#SqlError",
        "fct-type": "function",
        "title": "SqlNeedMoreData"
      },
      "index": {
        "description": "more data is needed e.g additional connection specs",
        "hierarchy": "DB HSQL Error",
        "module": "DB.HSQL.Error",
        "name": "SqlNeedMoreData",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Need More Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Error.html#v:SqlNoMoreData",
      "description": {
        "fct-descr": "\u003cp\u003eno more data was available\n\u003c/p\u003e",
        "fct-module": "DB.HSQL.Error",
        "fct-package": "hsql",
        "fct-signature": "SqlNoMoreData",
        "fct-source": "src/DB-HSQL-Error.html#SqlError",
        "fct-type": "function",
        "title": "SqlNoMoreData"
      },
      "index": {
        "description": "no more data was available",
        "hierarchy": "DB HSQL Error",
        "module": "DB.HSQL.Error",
        "name": "SqlNoMoreData",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql No More Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Error.html#v:SqlStillExecuting",
      "description": {
        "fct-descr": "\u003cp\u003econnection is blocked by running transaction\n\u003c/p\u003e",
        "fct-module": "DB.HSQL.Error",
        "fct-package": "hsql",
        "fct-signature": "SqlStillExecuting",
        "fct-source": "src/DB-HSQL-Error.html#SqlError",
        "fct-type": "function",
        "title": "SqlStillExecuting"
      },
      "index": {
        "description": "connection is blocked by running transaction",
        "hierarchy": "DB HSQL Error",
        "module": "DB.HSQL.Error",
        "name": "SqlStillExecuting",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Still Executing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Error.html#v:SqlUnknownField",
      "description": {
        "fct-descr": "\u003cp\u003erequested field isn't known\n\u003c/p\u003e",
        "fct-module": "DB.HSQL.Error",
        "fct-package": "hsql",
        "fct-signature": "SqlUnknownField",
        "fct-source": "src/DB-HSQL-Error.html#SqlError",
        "fct-type": "function",
        "title": "SqlUnknownField"
      },
      "index": {
        "description": "requested field isn known",
        "hierarchy": "DB HSQL Error",
        "module": "DB.HSQL.Error",
        "name": "SqlUnknownField",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Unknown Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Error.html#v:SqlUnsupportedOperation",
      "description": {
        "fct-descr": "\u003cp\u003erequested operation isn't supported\n\u003c/p\u003e",
        "fct-module": "DB.HSQL.Error",
        "fct-package": "hsql",
        "fct-signature": "SqlUnsupportedOperation",
        "fct-source": "src/DB-HSQL-Error.html#SqlError",
        "fct-type": "function",
        "title": "SqlUnsupportedOperation"
      },
      "index": {
        "description": "requested operation isn supported",
        "hierarchy": "DB HSQL Error",
        "module": "DB.HSQL.Error",
        "name": "SqlUnsupportedOperation",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Unsupported Operation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Error.html#v:seErrorMsg",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "DB.HSQL.Error",
        "fct-package": "hsql",
        "fct-signature": "String",
        "fct-source": "src/DB-HSQL-Error.html#SqlError",
        "fct-type": "function",
        "title": "seErrorMsg"
      },
      "index": {
        "description": "",
        "hierarchy": "DB HSQL Error",
        "module": "DB.HSQL.Error",
        "name": "seErrorMsg",
        "normalized": "",
        "package": "hsql",
        "partial": "Error Msg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Error.html#v:seFieldName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "DB.HSQL.Error",
        "fct-package": "hsql",
        "fct-signature": "String",
        "fct-source": "src/DB-HSQL-Error.html#SqlError",
        "fct-type": "function",
        "title": "seFieldName"
      },
      "index": {
        "description": "",
        "hierarchy": "DB HSQL Error",
        "module": "DB.HSQL.Error",
        "name": "seFieldName",
        "normalized": "",
        "package": "hsql",
        "partial": "Field Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Error.html#v:seFieldType",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "DB.HSQL.Error",
        "fct-package": "hsql",
        "fct-signature": "SqlType",
        "fct-source": "src/DB-HSQL-Error.html#SqlError",
        "fct-type": "function",
        "title": "seFieldType"
      },
      "index": {
        "description": "",
        "hierarchy": "DB HSQL Error",
        "module": "DB.HSQL.Error",
        "name": "seFieldType",
        "normalized": "",
        "package": "hsql",
        "partial": "Field Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Error.html#v:seNativeError",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "DB.HSQL.Error",
        "fct-package": "hsql",
        "fct-signature": "Int",
        "fct-source": "src/DB-HSQL-Error.html#SqlError",
        "fct-type": "function",
        "title": "seNativeError"
      },
      "index": {
        "description": "",
        "hierarchy": "DB HSQL Error",
        "module": "DB.HSQL.Error",
        "name": "seNativeError",
        "normalized": "",
        "package": "hsql",
        "partial": "Native Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Error.html#v:seState",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "DB.HSQL.Error",
        "fct-package": "hsql",
        "fct-signature": "String",
        "fct-source": "src/DB-HSQL-Error.html#SqlError",
        "fct-type": "function",
        "title": "seState"
      },
      "index": {
        "description": "",
        "hierarchy": "DB HSQL Error",
        "module": "DB.HSQL.Error",
        "name": "seState",
        "normalized": "",
        "package": "hsql",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-Diverse.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eSqlBind\u003c/a\u003e\u003c/code\u003e instances for \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "DB.HSQL.Type.Diverse",
        "fct-package": "hsql",
        "fct-signature": "module",
        "fct-source": "src/DB-HSQL-Type-Diverse.html",
        "fct-type": "module",
        "title": "Diverse"
      },
      "index": {
        "description": "SqlBind instances for String Bool and Maybe",
        "hierarchy": "DB HSQL Type Diverse",
        "module": "DB.HSQL.Type.Diverse",
        "name": "Diverse",
        "normalized": "",
        "package": "hsql",
        "partial": "Diverse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-Geometric.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeometric 2D types, equipped with \u003ccode\u003e\u003ca\u003eSqlBind\u003c/a\u003e\u003c/code\u003e instances.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "DB.HSQL.Type.Geometric",
        "fct-package": "hsql",
        "fct-signature": "module",
        "fct-source": "src/DB-HSQL-Type-Geometric.html",
        "fct-type": "module",
        "title": "Geometric"
      },
      "index": {
        "description": "Geometric types equipped with SqlBind instances",
        "hierarchy": "DB HSQL Type Geometric",
        "module": "DB.HSQL.Type.Geometric",
        "name": "Geometric",
        "normalized": "",
        "package": "hsql",
        "partial": "Geometric",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-Geometric.html#t:Box",
      "description": {
        "fct-descr": "\u003cp\u003eA 2D rectangle.\n\u003c/p\u003e",
        "fct-module": "DB.HSQL.Type.Geometric",
        "fct-package": "hsql",
        "fct-signature": "data",
        "fct-source": "src/DB-HSQL-Type-Geometric.html#Box",
        "fct-type": "data",
        "title": "Box"
      },
      "index": {
        "description": "rectangle",
        "hierarchy": "DB HSQL Type Geometric",
        "module": "DB.HSQL.Type.Geometric",
        "name": "Box",
        "normalized": "",
        "package": "hsql",
        "partial": "Box",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-Geometric.html#t:Circle",
      "description": {
        "fct-descr": "\u003cp\u003eA 2D circle\n\u003c/p\u003e",
        "fct-module": "DB.HSQL.Type.Geometric",
        "fct-package": "hsql",
        "fct-signature": "data",
        "fct-source": "src/DB-HSQL-Type-Geometric.html#Circle",
        "fct-type": "data",
        "title": "Circle"
      },
      "index": {
        "description": "circle",
        "hierarchy": "DB HSQL Type Geometric",
        "module": "DB.HSQL.Type.Geometric",
        "name": "Circle",
        "normalized": "",
        "package": "hsql",
        "partial": "Circle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-Geometric.html#t:Line",
      "description": {
        "fct-descr": "\u003cp\u003eA 2D straight line.\n\u003c/p\u003e",
        "fct-module": "DB.HSQL.Type.Geometric",
        "fct-package": "hsql",
        "fct-signature": "data",
        "fct-source": "src/DB-HSQL-Type-Geometric.html#Line",
        "fct-type": "data",
        "title": "Line"
      },
      "index": {
        "description": "straight line",
        "hierarchy": "DB HSQL Type Geometric",
        "module": "DB.HSQL.Type.Geometric",
        "name": "Line",
        "normalized": "",
        "package": "hsql",
        "partial": "Line",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-Geometric.html#t:Path",
      "description": {
        "fct-descr": "\u003cp\u003eA 2D path, either open, or closed (looping). \n\u003c/p\u003e",
        "fct-module": "DB.HSQL.Type.Geometric",
        "fct-package": "hsql",
        "fct-signature": "data",
        "fct-source": "src/DB-HSQL-Type-Geometric.html#Path",
        "fct-type": "data",
        "title": "Path"
      },
      "index": {
        "description": "path either open or closed looping",
        "hierarchy": "DB HSQL Type Geometric",
        "module": "DB.HSQL.Type.Geometric",
        "name": "Path",
        "normalized": "",
        "package": "hsql",
        "partial": "Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-Geometric.html#t:Point",
      "description": {
        "fct-descr": "\u003cp\u003eA 2D point.\n\u003c/p\u003e",
        "fct-module": "DB.HSQL.Type.Geometric",
        "fct-package": "hsql",
        "fct-signature": "data",
        "fct-source": "src/DB-HSQL-Type-Geometric.html#Point",
        "fct-type": "data",
        "title": "Point"
      },
      "index": {
        "description": "point",
        "hierarchy": "DB HSQL Type Geometric",
        "module": "DB.HSQL.Type.Geometric",
        "name": "Point",
        "normalized": "",
        "package": "hsql",
        "partial": "Point",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-Geometric.html#t:Polygon",
      "description": {
        "fct-descr": "\u003cp\u003eA 2D polygon (without holes).\n\u003c/p\u003e",
        "fct-module": "DB.HSQL.Type.Geometric",
        "fct-package": "hsql",
        "fct-signature": "data",
        "fct-source": "src/DB-HSQL-Type-Geometric.html#Polygon",
        "fct-type": "data",
        "title": "Polygon"
      },
      "index": {
        "description": "polygon without holes",
        "hierarchy": "DB HSQL Type Geometric",
        "module": "DB.HSQL.Type.Geometric",
        "name": "Polygon",
        "normalized": "",
        "package": "hsql",
        "partial": "Polygon",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-Geometric.html#v:Box",
      "description": {
        "fct-module": "DB.HSQL.Type.Geometric",
        "fct-package": "hsql",
        "fct-signature": "Box",
        "fct-source": "src/DB-HSQL-Type-Geometric.html#Box",
        "fct-type": "function",
        "title": "Box"
      },
      "index": {
        "description": "",
        "hierarchy": "DB HSQL Type Geometric",
        "module": "DB.HSQL.Type.Geometric",
        "name": "Box",
        "normalized": "",
        "package": "hsql",
        "partial": "Box",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-Geometric.html#v:Circle",
      "description": {
        "fct-module": "DB.HSQL.Type.Geometric",
        "fct-package": "hsql",
        "fct-signature": "Circle",
        "fct-source": "src/DB-HSQL-Type-Geometric.html#Circle",
        "fct-type": "function",
        "title": "Circle"
      },
      "index": {
        "description": "",
        "hierarchy": "DB HSQL Type Geometric",
        "module": "DB.HSQL.Type.Geometric",
        "name": "Circle",
        "normalized": "",
        "package": "hsql",
        "partial": "Circle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-Geometric.html#v:ClosedPath",
      "description": {
        "fct-descr": "\u003cp\u003eA looping path\n\u003c/p\u003e",
        "fct-module": "DB.HSQL.Type.Geometric",
        "fct-package": "hsql",
        "fct-signature": "ClosedPath",
        "fct-source": "src/DB-HSQL-Type-Geometric.html#Path",
        "fct-type": "function",
        "title": "ClosedPath"
      },
      "index": {
        "description": "looping path",
        "hierarchy": "DB HSQL Type Geometric",
        "module": "DB.HSQL.Type.Geometric",
        "name": "ClosedPath",
        "normalized": "",
        "package": "hsql",
        "partial": "Closed Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-Geometric.html#v:Line",
      "description": {
        "fct-module": "DB.HSQL.Type.Geometric",
        "fct-package": "hsql",
        "fct-signature": "Line",
        "fct-source": "src/DB-HSQL-Type-Geometric.html#Line",
        "fct-type": "function",
        "title": "Line"
      },
      "index": {
        "description": "",
        "hierarchy": "DB HSQL Type Geometric",
        "module": "DB.HSQL.Type.Geometric",
        "name": "Line",
        "normalized": "",
        "package": "hsql",
        "partial": "Line",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-Geometric.html#v:OpenPath",
      "description": {
        "fct-descr": "\u003cp\u003eAn open path\n\u003c/p\u003e",
        "fct-module": "DB.HSQL.Type.Geometric",
        "fct-package": "hsql",
        "fct-signature": "OpenPath",
        "fct-source": "src/DB-HSQL-Type-Geometric.html#Path",
        "fct-type": "function",
        "title": "OpenPath"
      },
      "index": {
        "description": "An open path",
        "hierarchy": "DB HSQL Type Geometric",
        "module": "DB.HSQL.Type.Geometric",
        "name": "OpenPath",
        "normalized": "",
        "package": "hsql",
        "partial": "Open Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-Geometric.html#v:Point",
      "description": {
        "fct-module": "DB.HSQL.Type.Geometric",
        "fct-package": "hsql",
        "fct-signature": "Point",
        "fct-source": "src/DB-HSQL-Type-Geometric.html#Point",
        "fct-type": "function",
        "title": "Point"
      },
      "index": {
        "description": "",
        "hierarchy": "DB HSQL Type Geometric",
        "module": "DB.HSQL.Type.Geometric",
        "name": "Point",
        "normalized": "",
        "package": "hsql",
        "partial": "Point",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-Geometric.html#v:Polygon",
      "description": {
        "fct-module": "DB.HSQL.Type.Geometric",
        "fct-package": "hsql",
        "fct-signature": "Polygon",
        "fct-source": "src/DB-HSQL-Type-Geometric.html#Polygon",
        "fct-type": "function",
        "title": "Polygon"
      },
      "index": {
        "description": "",
        "hierarchy": "DB HSQL Type Geometric",
        "module": "DB.HSQL.Type.Geometric",
        "name": "Polygon",
        "normalized": "",
        "package": "hsql",
        "partial": "Polygon",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-Geometric.html#v:boxX1",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "DB.HSQL.Type.Geometric",
        "fct-package": "hsql",
        "fct-signature": "Double",
        "fct-source": "src/DB-HSQL-Type-Geometric.html#Box",
        "fct-type": "function",
        "title": "boxX1"
      },
      "index": {
        "description": "",
        "hierarchy": "DB HSQL Type Geometric",
        "module": "DB.HSQL.Type.Geometric",
        "name": "boxX1",
        "normalized": "",
        "package": "hsql",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-Geometric.html#v:boxX2",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "DB.HSQL.Type.Geometric",
        "fct-package": "hsql",
        "fct-signature": "Double",
        "fct-source": "src/DB-HSQL-Type-Geometric.html#Box",
        "fct-type": "function",
        "title": "boxX2"
      },
      "index": {
        "description": "",
        "hierarchy": "DB HSQL Type Geometric",
        "module": "DB.HSQL.Type.Geometric",
        "name": "boxX2",
        "normalized": "",
        "package": "hsql",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-Geometric.html#v:boxY1",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "DB.HSQL.Type.Geometric",
        "fct-package": "hsql",
        "fct-signature": "Double",
        "fct-source": "src/DB-HSQL-Type-Geometric.html#Box",
        "fct-type": "function",
        "title": "boxY1"
      },
      "index": {
        "description": "",
        "hierarchy": "DB HSQL Type Geometric",
        "module": "DB.HSQL.Type.Geometric",
        "name": "boxY1",
        "normalized": "",
        "package": "hsql",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-Geometric.html#v:boxY2",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "DB.HSQL.Type.Geometric",
        "fct-package": "hsql",
        "fct-signature": "Double",
        "fct-source": "src/DB-HSQL-Type-Geometric.html#Box",
        "fct-type": "function",
        "title": "boxY2"
      },
      "index": {
        "description": "",
        "hierarchy": "DB HSQL Type Geometric",
        "module": "DB.HSQL.Type.Geometric",
        "name": "boxY2",
        "normalized": "",
        "package": "hsql",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-Geometric.html#v:circleCenter",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "DB.HSQL.Type.Geometric",
        "fct-package": "hsql",
        "fct-signature": "Point",
        "fct-source": "src/DB-HSQL-Type-Geometric.html#Circle",
        "fct-type": "function",
        "title": "circleCenter"
      },
      "index": {
        "description": "",
        "hierarchy": "DB HSQL Type Geometric",
        "module": "DB.HSQL.Type.Geometric",
        "name": "circleCenter",
        "normalized": "",
        "package": "hsql",
        "partial": "Center",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-Geometric.html#v:circleRadius",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "DB.HSQL.Type.Geometric",
        "fct-package": "hsql",
        "fct-signature": "Double",
        "fct-source": "src/DB-HSQL-Type-Geometric.html#Circle",
        "fct-type": "function",
        "title": "circleRadius"
      },
      "index": {
        "description": "",
        "hierarchy": "DB HSQL Type Geometric",
        "module": "DB.HSQL.Type.Geometric",
        "name": "circleRadius",
        "normalized": "",
        "package": "hsql",
        "partial": "Radius",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-Geometric.html#v:lineBegin",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "DB.HSQL.Type.Geometric",
        "fct-package": "hsql",
        "fct-signature": "Point",
        "fct-source": "src/DB-HSQL-Type-Geometric.html#Line",
        "fct-type": "function",
        "title": "lineBegin"
      },
      "index": {
        "description": "",
        "hierarchy": "DB HSQL Type Geometric",
        "module": "DB.HSQL.Type.Geometric",
        "name": "lineBegin",
        "normalized": "",
        "package": "hsql",
        "partial": "Begin",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-Geometric.html#v:lineEnd",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "DB.HSQL.Type.Geometric",
        "fct-package": "hsql",
        "fct-signature": "Point",
        "fct-source": "src/DB-HSQL-Type-Geometric.html#Line",
        "fct-type": "function",
        "title": "lineEnd"
      },
      "index": {
        "description": "",
        "hierarchy": "DB HSQL Type Geometric",
        "module": "DB.HSQL.Type.Geometric",
        "name": "lineEnd",
        "normalized": "",
        "package": "hsql",
        "partial": "End",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-Geometric.html#v:pathPoints",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "DB.HSQL.Type.Geometric",
        "fct-package": "hsql",
        "fct-signature": "[Point]",
        "fct-source": "src/DB-HSQL-Type-Geometric.html#Path",
        "fct-type": "function",
        "title": "pathPoints"
      },
      "index": {
        "description": "",
        "hierarchy": "DB HSQL Type Geometric",
        "module": "DB.HSQL.Type.Geometric",
        "name": "pathPoints",
        "normalized": "[Point]",
        "package": "hsql",
        "partial": "Points",
        "signature": "[Point]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-Geometric.html#v:pointX",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "DB.HSQL.Type.Geometric",
        "fct-package": "hsql",
        "fct-signature": "Double",
        "fct-source": "src/DB-HSQL-Type-Geometric.html#Point",
        "fct-type": "function",
        "title": "pointX"
      },
      "index": {
        "description": "",
        "hierarchy": "DB HSQL Type Geometric",
        "module": "DB.HSQL.Type.Geometric",
        "name": "pointX",
        "normalized": "",
        "package": "hsql",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-Geometric.html#v:pointY",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "DB.HSQL.Type.Geometric",
        "fct-package": "hsql",
        "fct-signature": "Double",
        "fct-source": "src/DB-HSQL-Type-Geometric.html#Point",
        "fct-type": "function",
        "title": "pointY"
      },
      "index": {
        "description": "",
        "hierarchy": "DB HSQL Type Geometric",
        "module": "DB.HSQL.Type.Geometric",
        "name": "pointY",
        "normalized": "",
        "package": "hsql",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-Geometric.html#v:polygonPoints",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "DB.HSQL.Type.Geometric",
        "fct-package": "hsql",
        "fct-signature": "[Point]",
        "fct-source": "src/DB-HSQL-Type-Geometric.html#Polygon",
        "fct-type": "function",
        "title": "polygonPoints"
      },
      "index": {
        "description": "",
        "hierarchy": "DB HSQL Type Geometric",
        "module": "DB.HSQL.Type.Geometric",
        "name": "polygonPoints",
        "normalized": "[Point]",
        "package": "hsql",
        "partial": "Points",
        "signature": "[Point]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-NetAddress.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eNetwork addresses, equipped with \u003ccode\u003e\u003ca\u003eSqlBind\u003c/a\u003e\u003c/code\u003e instances.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "DB.HSQL.Type.NetAddress",
        "fct-package": "hsql",
        "fct-signature": "module",
        "fct-source": "src/DB-HSQL-Type-NetAddress.html",
        "fct-type": "module",
        "title": "NetAddress"
      },
      "index": {
        "description": "Network addresses equipped with SqlBind instances",
        "hierarchy": "DB HSQL Type NetAddress",
        "module": "DB.HSQL.Type.NetAddress",
        "name": "NetAddress",
        "normalized": "",
        "package": "hsql",
        "partial": "Net Address",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-NetAddress.html#t:INetAddr",
      "description": {
        "fct-descr": "\u003cp\u003eAn IP4 address with netmask in CIDR notation.\n\u003c/p\u003e",
        "fct-module": "DB.HSQL.Type.NetAddress",
        "fct-package": "hsql",
        "fct-signature": "data",
        "fct-source": "src/DB-HSQL-Type-NetAddress.html#INetAddr",
        "fct-type": "data",
        "title": "INetAddr"
      },
      "index": {
        "description": "An IP4 address with netmask in CIDR notation",
        "hierarchy": "DB HSQL Type NetAddress",
        "module": "DB.HSQL.Type.NetAddress",
        "name": "INetAddr",
        "normalized": "",
        "package": "hsql",
        "partial": "INet Addr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-NetAddress.html#t:MacAddr",
      "description": {
        "fct-descr": "\u003cp\u003eA MAC network address.\n\u003c/p\u003e",
        "fct-module": "DB.HSQL.Type.NetAddress",
        "fct-package": "hsql",
        "fct-signature": "data",
        "fct-source": "src/DB-HSQL-Type-NetAddress.html#MacAddr",
        "fct-type": "data",
        "title": "MacAddr"
      },
      "index": {
        "description": "MAC network address",
        "hierarchy": "DB HSQL Type NetAddress",
        "module": "DB.HSQL.Type.NetAddress",
        "name": "MacAddr",
        "normalized": "",
        "package": "hsql",
        "partial": "Mac Addr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-NetAddress.html#v:INetAddr",
      "description": {
        "fct-module": "DB.HSQL.Type.NetAddress",
        "fct-package": "hsql",
        "fct-signature": "INetAddr",
        "fct-source": "src/DB-HSQL-Type-NetAddress.html#INetAddr",
        "fct-type": "function",
        "title": "INetAddr"
      },
      "index": {
        "description": "",
        "hierarchy": "DB HSQL Type NetAddress",
        "module": "DB.HSQL.Type.NetAddress",
        "name": "INetAddr",
        "normalized": "",
        "package": "hsql",
        "partial": "INet Addr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-NetAddress.html#v:MacAddr",
      "description": {
        "fct-module": "DB.HSQL.Type.NetAddress",
        "fct-package": "hsql",
        "fct-signature": "MacAddr",
        "fct-source": "src/DB-HSQL-Type-NetAddress.html#MacAddr",
        "fct-type": "function",
        "title": "MacAddr"
      },
      "index": {
        "description": "",
        "hierarchy": "DB HSQL Type NetAddress",
        "module": "DB.HSQL.Type.NetAddress",
        "name": "MacAddr",
        "normalized": "",
        "package": "hsql",
        "partial": "Mac Addr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-NetAddress.html#v:cidrMaskBits",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "DB.HSQL.Type.NetAddress",
        "fct-package": "hsql",
        "fct-signature": "Int",
        "fct-source": "src/DB-HSQL-Type-NetAddress.html#INetAddr",
        "fct-type": "function",
        "title": "cidrMaskBits"
      },
      "index": {
        "description": "",
        "hierarchy": "DB HSQL Type NetAddress",
        "module": "DB.HSQL.Type.NetAddress",
        "name": "cidrMaskBits",
        "normalized": "",
        "package": "hsql",
        "partial": "Mask Bits",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-NetAddress.html#v:ip4Octet1",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "DB.HSQL.Type.NetAddress",
        "fct-package": "hsql",
        "fct-signature": "Int",
        "fct-source": "src/DB-HSQL-Type-NetAddress.html#INetAddr",
        "fct-type": "function",
        "title": "ip4Octet1"
      },
      "index": {
        "description": "",
        "hierarchy": "DB HSQL Type NetAddress",
        "module": "DB.HSQL.Type.NetAddress",
        "name": "ip4Octet1",
        "normalized": "",
        "package": "hsql",
        "partial": "Octet",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-NetAddress.html#v:ip4Octet2",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "DB.HSQL.Type.NetAddress",
        "fct-package": "hsql",
        "fct-signature": "Int",
        "fct-source": "src/DB-HSQL-Type-NetAddress.html#INetAddr",
        "fct-type": "function",
        "title": "ip4Octet2"
      },
      "index": {
        "description": "",
        "hierarchy": "DB HSQL Type NetAddress",
        "module": "DB.HSQL.Type.NetAddress",
        "name": "ip4Octet2",
        "normalized": "",
        "package": "hsql",
        "partial": "Octet",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-NetAddress.html#v:ip4Octet3",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "DB.HSQL.Type.NetAddress",
        "fct-package": "hsql",
        "fct-signature": "Int",
        "fct-source": "src/DB-HSQL-Type-NetAddress.html#INetAddr",
        "fct-type": "function",
        "title": "ip4Octet3"
      },
      "index": {
        "description": "",
        "hierarchy": "DB HSQL Type NetAddress",
        "module": "DB.HSQL.Type.NetAddress",
        "name": "ip4Octet3",
        "normalized": "",
        "package": "hsql",
        "partial": "Octet",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-NetAddress.html#v:ip4Octet4",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "DB.HSQL.Type.NetAddress",
        "fct-package": "hsql",
        "fct-signature": "Int",
        "fct-source": "src/DB-HSQL-Type-NetAddress.html#INetAddr",
        "fct-type": "function",
        "title": "ip4Octet4"
      },
      "index": {
        "description": "",
        "hierarchy": "DB HSQL Type NetAddress",
        "module": "DB.HSQL.Type.NetAddress",
        "name": "ip4Octet4",
        "normalized": "",
        "package": "hsql",
        "partial": "Octet",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-NetAddress.html#v:macOctet1",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "DB.HSQL.Type.NetAddress",
        "fct-package": "hsql",
        "fct-signature": "Int",
        "fct-source": "src/DB-HSQL-Type-NetAddress.html#MacAddr",
        "fct-type": "function",
        "title": "macOctet1"
      },
      "index": {
        "description": "",
        "hierarchy": "DB HSQL Type NetAddress",
        "module": "DB.HSQL.Type.NetAddress",
        "name": "macOctet1",
        "normalized": "",
        "package": "hsql",
        "partial": "Octet",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-NetAddress.html#v:macOctet2",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "DB.HSQL.Type.NetAddress",
        "fct-package": "hsql",
        "fct-signature": "Int",
        "fct-source": "src/DB-HSQL-Type-NetAddress.html#MacAddr",
        "fct-type": "function",
        "title": "macOctet2"
      },
      "index": {
        "description": "",
        "hierarchy": "DB HSQL Type NetAddress",
        "module": "DB.HSQL.Type.NetAddress",
        "name": "macOctet2",
        "normalized": "",
        "package": "hsql",
        "partial": "Octet",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-NetAddress.html#v:macOctet3",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "DB.HSQL.Type.NetAddress",
        "fct-package": "hsql",
        "fct-signature": "Int",
        "fct-source": "src/DB-HSQL-Type-NetAddress.html#MacAddr",
        "fct-type": "function",
        "title": "macOctet3"
      },
      "index": {
        "description": "",
        "hierarchy": "DB HSQL Type NetAddress",
        "module": "DB.HSQL.Type.NetAddress",
        "name": "macOctet3",
        "normalized": "",
        "package": "hsql",
        "partial": "Octet",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-NetAddress.html#v:macOctet4",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "DB.HSQL.Type.NetAddress",
        "fct-package": "hsql",
        "fct-signature": "Int",
        "fct-source": "src/DB-HSQL-Type-NetAddress.html#MacAddr",
        "fct-type": "function",
        "title": "macOctet4"
      },
      "index": {
        "description": "",
        "hierarchy": "DB HSQL Type NetAddress",
        "module": "DB.HSQL.Type.NetAddress",
        "name": "macOctet4",
        "normalized": "",
        "package": "hsql",
        "partial": "Octet",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-NetAddress.html#v:macOctet5",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "DB.HSQL.Type.NetAddress",
        "fct-package": "hsql",
        "fct-signature": "Int",
        "fct-source": "src/DB-HSQL-Type-NetAddress.html#MacAddr",
        "fct-type": "function",
        "title": "macOctet5"
      },
      "index": {
        "description": "",
        "hierarchy": "DB HSQL Type NetAddress",
        "module": "DB.HSQL.Type.NetAddress",
        "name": "macOctet5",
        "normalized": "",
        "package": "hsql",
        "partial": "Octet",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-NetAddress.html#v:macOctet6",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "DB.HSQL.Type.NetAddress",
        "fct-package": "hsql",
        "fct-signature": "Int",
        "fct-source": "src/DB-HSQL-Type-NetAddress.html#MacAddr",
        "fct-type": "function",
        "title": "macOctet6"
      },
      "index": {
        "description": "",
        "hierarchy": "DB HSQL Type NetAddress",
        "module": "DB.HSQL.Type.NetAddress",
        "name": "macOctet6",
        "normalized": "",
        "package": "hsql",
        "partial": "Octet",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-Numeric.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eSqlBind\u003c/a\u003e\u003c/code\u003e instances for \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eInt64\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "DB.HSQL.Type.Numeric",
        "fct-package": "hsql",
        "fct-signature": "module",
        "fct-source": "src/DB-HSQL-Type-Numeric.html",
        "fct-type": "module",
        "title": "Numeric"
      },
      "index": {
        "description": "SqlBind instances for Int Int64 Integer Double and Float",
        "hierarchy": "DB HSQL Type Numeric",
        "module": "DB.HSQL.Type.Numeric",
        "name": "Numeric",
        "normalized": "",
        "package": "hsql",
        "partial": "Numeric",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type-Time.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eSqlBind\u003c/a\u003e\u003c/code\u003e instance for \u003ccode\u003e\u003ca\u003eClockTime\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "DB.HSQL.Type.Time",
        "fct-package": "hsql",
        "fct-signature": "module",
        "fct-source": "src/DB-HSQL-Type-Time.html",
        "fct-type": "module",
        "title": "Time"
      },
      "index": {
        "description": "SqlBind instance for ClockTime",
        "hierarchy": "DB HSQL Type Time",
        "module": "DB.HSQL.Type.Time",
        "name": "Time",
        "normalized": "",
        "package": "hsql",
        "partial": "Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#",
      "description": {
        "fct-module": "DB.HSQL.Type",
        "fct-package": "hsql",
        "fct-signature": "module",
        "fct-source": "src/DB-HSQL-Type.html",
        "fct-type": "module",
        "title": "Type"
      },
      "index": {
        "description": "",
        "hierarchy": "DB HSQL Type",
        "module": "DB.HSQL.Type",
        "name": "Type",
        "normalized": "",
        "package": "hsql",
        "partial": "Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#t:SqlType",
      "description": {
        "fct-descr": "\u003cp\u003eVariety of common data types used in databases.\n\u003c/p\u003e",
        "fct-module": "DB.HSQL.Type",
        "fct-package": "hsql",
        "fct-signature": "data",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "data",
        "title": "SqlType"
      },
      "index": {
        "description": "Variety of common data types used in databases",
        "hierarchy": "DB HSQL Type",
        "module": "DB.HSQL.Type",
        "name": "SqlType",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlAbsTime",
      "description": {
        "fct-module": "DB.HSQL.Type",
        "fct-package": "hsql",
        "fct-signature": "SqlAbsTime",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlAbsTime"
      },
      "index": {
        "description": "",
        "hierarchy": "DB HSQL Type",
        "module": "DB.HSQL.Type",
        "name": "SqlAbsTime",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Abs Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlAbsTimeInterval",
      "description": {
        "fct-module": "DB.HSQL.Type",
        "fct-package": "hsql",
        "fct-signature": "SqlAbsTimeInterval",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlAbsTimeInterval"
      },
      "index": {
        "description": "",
        "hierarchy": "DB HSQL Type",
        "module": "DB.HSQL.Type",
        "name": "SqlAbsTimeInterval",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Abs Time Interval",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlBLOB",
      "description": {
        "fct-module": "DB.HSQL.Type",
        "fct-package": "hsql",
        "fct-signature": "SqlBLOB",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlBLOB"
      },
      "index": {
        "description": "",
        "hierarchy": "DB HSQL Type",
        "module": "DB.HSQL.Type",
        "name": "SqlBLOB",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql BLOB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlBigInt",
      "description": {
        "fct-module": "DB.HSQL.Type",
        "fct-package": "hsql",
        "fct-signature": "SqlBigInt",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlBigInt"
      },
      "index": {
        "description": "",
        "hierarchy": "DB HSQL Type",
        "module": "DB.HSQL.Type",
        "name": "SqlBigInt",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Big Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlBinary",
      "description": {
        "fct-module": "DB.HSQL.Type",
        "fct-package": "hsql",
        "fct-signature": "SqlBinary",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlBinary"
      },
      "index": {
        "description": "",
        "hierarchy": "DB HSQL Type",
        "module": "DB.HSQL.Type",
        "name": "SqlBinary",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Binary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlBit",
      "description": {
        "fct-module": "DB.HSQL.Type",
        "fct-package": "hsql",
        "fct-signature": "SqlBit",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlBit"
      },
      "index": {
        "description": "",
        "hierarchy": "DB HSQL Type",
        "module": "DB.HSQL.Type",
        "name": "SqlBit",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Bit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlBox",
      "description": {
        "fct-module": "DB.HSQL.Type",
        "fct-package": "hsql",
        "fct-signature": "SqlBox",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlBox"
      },
      "index": {
        "description": "",
        "hierarchy": "DB HSQL Type",
        "module": "DB.HSQL.Type",
        "name": "SqlBox",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Box",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlCIDRAddr",
      "description": {
        "fct-module": "DB.HSQL.Type",
        "fct-package": "hsql",
        "fct-signature": "SqlCIDRAddr",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlCIDRAddr"
      },
      "index": {
        "description": "",
        "hierarchy": "DB HSQL Type",
        "module": "DB.HSQL.Type",
        "name": "SqlCIDRAddr",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql CIDRAddr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlChar",
      "description": {
        "fct-module": "DB.HSQL.Type",
        "fct-package": "hsql",
        "fct-signature": "SqlChar",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlChar"
      },
      "index": {
        "description": "",
        "hierarchy": "DB HSQL Type",
        "module": "DB.HSQL.Type",
        "name": "SqlChar",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Char",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlCircle",
      "description": {
        "fct-module": "DB.HSQL.Type",
        "fct-package": "hsql",
        "fct-signature": "SqlCircle",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlCircle"
      },
      "index": {
        "description": "",
        "hierarchy": "DB HSQL Type",
        "module": "DB.HSQL.Type",
        "name": "SqlCircle",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Circle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlDate",
      "description": {
        "fct-module": "DB.HSQL.Type",
        "fct-package": "hsql",
        "fct-signature": "SqlDate",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlDate"
      },
      "index": {
        "description": "",
        "hierarchy": "DB HSQL Type",
        "module": "DB.HSQL.Type",
        "name": "SqlDate",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Date",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlDateTime",
      "description": {
        "fct-module": "DB.HSQL.Type",
        "fct-package": "hsql",
        "fct-signature": "SqlDateTime",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlDateTime"
      },
      "index": {
        "description": "",
        "hierarchy": "DB HSQL Type",
        "module": "DB.HSQL.Type",
        "name": "SqlDateTime",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Date Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlDateTimeTZ",
      "description": {
        "fct-module": "DB.HSQL.Type",
        "fct-package": "hsql",
        "fct-signature": "SqlDateTimeTZ",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlDateTimeTZ"
      },
      "index": {
        "description": "",
        "hierarchy": "DB HSQL Type",
        "module": "DB.HSQL.Type",
        "name": "SqlDateTimeTZ",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Date Time TZ",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlDecimal",
      "description": {
        "fct-module": "DB.HSQL.Type",
        "fct-package": "hsql",
        "fct-signature": "SqlDecimal",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlDecimal"
      },
      "index": {
        "description": "",
        "hierarchy": "DB HSQL Type",
        "module": "DB.HSQL.Type",
        "name": "SqlDecimal",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Decimal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlDouble",
      "description": {
        "fct-module": "DB.HSQL.Type",
        "fct-package": "hsql",
        "fct-signature": "SqlDouble",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlDouble"
      },
      "index": {
        "description": "",
        "hierarchy": "DB HSQL Type",
        "module": "DB.HSQL.Type",
        "name": "SqlDouble",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Double",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlENUM",
      "description": {
        "fct-module": "DB.HSQL.Type",
        "fct-package": "hsql",
        "fct-signature": "SqlENUM",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlENUM"
      },
      "index": {
        "description": "",
        "hierarchy": "DB HSQL Type",
        "module": "DB.HSQL.Type",
        "name": "SqlENUM",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql ENUM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlFloat",
      "description": {
        "fct-module": "DB.HSQL.Type",
        "fct-package": "hsql",
        "fct-signature": "SqlFloat",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlFloat"
      },
      "index": {
        "description": "",
        "hierarchy": "DB HSQL Type",
        "module": "DB.HSQL.Type",
        "name": "SqlFloat",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Float",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlINetAddr",
      "description": {
        "fct-module": "DB.HSQL.Type",
        "fct-package": "hsql",
        "fct-signature": "SqlINetAddr",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlINetAddr"
      },
      "index": {
        "description": "",
        "hierarchy": "DB HSQL Type",
        "module": "DB.HSQL.Type",
        "name": "SqlINetAddr",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql INet Addr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlInteger",
      "description": {
        "fct-module": "DB.HSQL.Type",
        "fct-package": "hsql",
        "fct-signature": "SqlInteger",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlInteger"
      },
      "index": {
        "description": "",
        "hierarchy": "DB HSQL Type",
        "module": "DB.HSQL.Type",
        "name": "SqlInteger",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Integer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlLSeg",
      "description": {
        "fct-module": "DB.HSQL.Type",
        "fct-package": "hsql",
        "fct-signature": "SqlLSeg",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlLSeg"
      },
      "index": {
        "description": "",
        "hierarchy": "DB HSQL Type",
        "module": "DB.HSQL.Type",
        "name": "SqlLSeg",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql LSeg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlLine",
      "description": {
        "fct-module": "DB.HSQL.Type",
        "fct-package": "hsql",
        "fct-signature": "SqlLine",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlLine"
      },
      "index": {
        "description": "",
        "hierarchy": "DB HSQL Type",
        "module": "DB.HSQL.Type",
        "name": "SqlLine",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Line",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlLongVarBinary",
      "description": {
        "fct-module": "DB.HSQL.Type",
        "fct-package": "hsql",
        "fct-signature": "SqlLongVarBinary",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlLongVarBinary"
      },
      "index": {
        "description": "",
        "hierarchy": "DB HSQL Type",
        "module": "DB.HSQL.Type",
        "name": "SqlLongVarBinary",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Long Var Binary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlLongVarChar",
      "description": {
        "fct-module": "DB.HSQL.Type",
        "fct-package": "hsql",
        "fct-signature": "SqlLongVarChar",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlLongVarChar"
      },
      "index": {
        "description": "",
        "hierarchy": "DB HSQL Type",
        "module": "DB.HSQL.Type",
        "name": "SqlLongVarChar",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Long Var Char",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlMacAddr",
      "description": {
        "fct-module": "DB.HSQL.Type",
        "fct-package": "hsql",
        "fct-signature": "SqlMacAddr",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlMacAddr"
      },
      "index": {
        "description": "",
        "hierarchy": "DB HSQL Type",
        "module": "DB.HSQL.Type",
        "name": "SqlMacAddr",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Mac Addr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlMedInt",
      "description": {
        "fct-module": "DB.HSQL.Type",
        "fct-package": "hsql",
        "fct-signature": "SqlMedInt",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlMedInt"
      },
      "index": {
        "description": "",
        "hierarchy": "DB HSQL Type",
        "module": "DB.HSQL.Type",
        "name": "SqlMedInt",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Med Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlMoney",
      "description": {
        "fct-module": "DB.HSQL.Type",
        "fct-package": "hsql",
        "fct-signature": "SqlMoney",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlMoney"
      },
      "index": {
        "description": "",
        "hierarchy": "DB HSQL Type",
        "module": "DB.HSQL.Type",
        "name": "SqlMoney",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Money",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlNumeric",
      "description": {
        "fct-module": "DB.HSQL.Type",
        "fct-package": "hsql",
        "fct-signature": "SqlNumeric",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlNumeric"
      },
      "index": {
        "description": "",
        "hierarchy": "DB HSQL Type",
        "module": "DB.HSQL.Type",
        "name": "SqlNumeric",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Numeric",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlPath",
      "description": {
        "fct-module": "DB.HSQL.Type",
        "fct-package": "hsql",
        "fct-signature": "SqlPath",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlPath"
      },
      "index": {
        "description": "",
        "hierarchy": "DB HSQL Type",
        "module": "DB.HSQL.Type",
        "name": "SqlPath",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlPoint",
      "description": {
        "fct-module": "DB.HSQL.Type",
        "fct-package": "hsql",
        "fct-signature": "SqlPoint",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlPoint"
      },
      "index": {
        "description": "",
        "hierarchy": "DB HSQL Type",
        "module": "DB.HSQL.Type",
        "name": "SqlPoint",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Point",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlPolygon",
      "description": {
        "fct-module": "DB.HSQL.Type",
        "fct-package": "hsql",
        "fct-signature": "SqlPolygon",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlPolygon"
      },
      "index": {
        "description": "",
        "hierarchy": "DB HSQL Type",
        "module": "DB.HSQL.Type",
        "name": "SqlPolygon",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Polygon",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlReal",
      "description": {
        "fct-module": "DB.HSQL.Type",
        "fct-package": "hsql",
        "fct-signature": "SqlReal",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlReal"
      },
      "index": {
        "description": "",
        "hierarchy": "DB HSQL Type",
        "module": "DB.HSQL.Type",
        "name": "SqlReal",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Real",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlRelTime",
      "description": {
        "fct-module": "DB.HSQL.Type",
        "fct-package": "hsql",
        "fct-signature": "SqlRelTime",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlRelTime"
      },
      "index": {
        "description": "",
        "hierarchy": "DB HSQL Type",
        "module": "DB.HSQL.Type",
        "name": "SqlRelTime",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Rel Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlSET",
      "description": {
        "fct-module": "DB.HSQL.Type",
        "fct-package": "hsql",
        "fct-signature": "SqlSET",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlSET"
      },
      "index": {
        "description": "",
        "hierarchy": "DB HSQL Type",
        "module": "DB.HSQL.Type",
        "name": "SqlSET",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql SET",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlSmallInt",
      "description": {
        "fct-module": "DB.HSQL.Type",
        "fct-package": "hsql",
        "fct-signature": "SqlSmallInt",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlSmallInt"
      },
      "index": {
        "description": "",
        "hierarchy": "DB HSQL Type",
        "module": "DB.HSQL.Type",
        "name": "SqlSmallInt",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Small Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlText",
      "description": {
        "fct-module": "DB.HSQL.Type",
        "fct-package": "hsql",
        "fct-signature": "SqlText",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlText"
      },
      "index": {
        "description": "",
        "hierarchy": "DB HSQL Type",
        "module": "DB.HSQL.Type",
        "name": "SqlText",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Text",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlTime",
      "description": {
        "fct-module": "DB.HSQL.Type",
        "fct-package": "hsql",
        "fct-signature": "SqlTime",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlTime"
      },
      "index": {
        "description": "",
        "hierarchy": "DB HSQL Type",
        "module": "DB.HSQL.Type",
        "name": "SqlTime",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlTimeInterval",
      "description": {
        "fct-module": "DB.HSQL.Type",
        "fct-package": "hsql",
        "fct-signature": "SqlTimeInterval",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlTimeInterval"
      },
      "index": {
        "description": "",
        "hierarchy": "DB HSQL Type",
        "module": "DB.HSQL.Type",
        "name": "SqlTimeInterval",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Time Interval",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlTimeStamp",
      "description": {
        "fct-module": "DB.HSQL.Type",
        "fct-package": "hsql",
        "fct-signature": "SqlTimeStamp",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlTimeStamp"
      },
      "index": {
        "description": "",
        "hierarchy": "DB HSQL Type",
        "module": "DB.HSQL.Type",
        "name": "SqlTimeStamp",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Time Stamp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlTimeTZ",
      "description": {
        "fct-module": "DB.HSQL.Type",
        "fct-package": "hsql",
        "fct-signature": "SqlTimeTZ",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlTimeTZ"
      },
      "index": {
        "description": "",
        "hierarchy": "DB HSQL Type",
        "module": "DB.HSQL.Type",
        "name": "SqlTimeTZ",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Time TZ",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlTinyInt",
      "description": {
        "fct-module": "DB.HSQL.Type",
        "fct-package": "hsql",
        "fct-signature": "SqlTinyInt",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlTinyInt"
      },
      "index": {
        "description": "",
        "hierarchy": "DB HSQL Type",
        "module": "DB.HSQL.Type",
        "name": "SqlTinyInt",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Tiny Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlUnknown",
      "description": {
        "fct-descr": "\u003cp\u003eHSQL returns \u003ccode\u003e\u003ca\u003eSqlUnknown\u003c/a\u003e\u003c/code\u003e for all\n columns for which it cannot determine\n the right type. The \u003ccode\u003ebackendTypeCode\u003c/code\u003e here is the\n internal type code returned from the\n backend library\n\u003c/p\u003e",
        "fct-module": "DB.HSQL.Type",
        "fct-package": "hsql",
        "fct-signature": "SqlUnknown",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlUnknown"
      },
      "index": {
        "description": "HSQL returns SqlUnknown for all columns for which it cannot determine the right type The backendTypeCode here is the internal type code returned from the backend library",
        "hierarchy": "DB HSQL Type",
        "module": "DB.HSQL.Type",
        "name": "SqlUnknown",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Unknown",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlVarBinary",
      "description": {
        "fct-module": "DB.HSQL.Type",
        "fct-package": "hsql",
        "fct-signature": "SqlVarBinary",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlVarBinary"
      },
      "index": {
        "description": "",
        "hierarchy": "DB HSQL Type",
        "module": "DB.HSQL.Type",
        "name": "SqlVarBinary",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Var Binary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlVarChar",
      "description": {
        "fct-module": "DB.HSQL.Type",
        "fct-package": "hsql",
        "fct-signature": "SqlVarChar",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlVarChar"
      },
      "index": {
        "description": "",
        "hierarchy": "DB HSQL Type",
        "module": "DB.HSQL.Type",
        "name": "SqlVarChar",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Var Char",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlWChar",
      "description": {
        "fct-module": "DB.HSQL.Type",
        "fct-package": "hsql",
        "fct-signature": "SqlWChar",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlWChar"
      },
      "index": {
        "description": "",
        "hierarchy": "DB HSQL Type",
        "module": "DB.HSQL.Type",
        "name": "SqlWChar",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql WChar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlWLongVarChar",
      "description": {
        "fct-module": "DB.HSQL.Type",
        "fct-package": "hsql",
        "fct-signature": "SqlWLongVarChar",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlWLongVarChar"
      },
      "index": {
        "description": "",
        "hierarchy": "DB HSQL Type",
        "module": "DB.HSQL.Type",
        "name": "SqlWLongVarChar",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql WLong Var Char",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlWVarChar",
      "description": {
        "fct-module": "DB.HSQL.Type",
        "fct-package": "hsql",
        "fct-signature": "SqlWVarChar",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlWVarChar"
      },
      "index": {
        "description": "",
        "hierarchy": "DB HSQL Type",
        "module": "DB.HSQL.Type",
        "name": "SqlWVarChar",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql WVar Char",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:SqlYear",
      "description": {
        "fct-module": "DB.HSQL.Type",
        "fct-package": "hsql",
        "fct-signature": "SqlYear",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlYear"
      },
      "index": {
        "description": "",
        "hierarchy": "DB HSQL Type",
        "module": "DB.HSQL.Type",
        "name": "SqlYear",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Year",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:typeCode",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "DB.HSQL.Type",
        "fct-package": "hsql",
        "fct-signature": "Int",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "typeCode"
      },
      "index": {
        "description": "",
        "hierarchy": "DB HSQL Type",
        "module": "DB.HSQL.Type",
        "name": "typeCode",
        "normalized": "",
        "package": "hsql",
        "partial": "Code",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:typeDecimals",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "DB.HSQL.Type",
        "fct-package": "hsql",
        "fct-signature": "Int",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "typeDecimals"
      },
      "index": {
        "description": "",
        "hierarchy": "DB HSQL Type",
        "module": "DB.HSQL.Type",
        "name": "typeDecimals",
        "normalized": "",
        "package": "hsql",
        "partial": "Decimals",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/DB-HSQL-Type.html#v:typeSize",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "DB.HSQL.Type",
        "fct-package": "hsql",
        "fct-signature": "Int",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "typeSize"
      },
      "index": {
        "description": "",
        "hierarchy": "DB HSQL Type",
        "module": "DB.HSQL.Type",
        "name": "typeSize",
        "normalized": "",
        "package": "hsql",
        "partial": "Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBasic type class & type definitions for DB interfacing.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "module",
        "fct-source": "src/Database-HSQL-Types.html",
        "fct-type": "module",
        "title": "Types"
      },
      "index": {
        "description": "Basic type class type definitions for DB interfacing",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "Types",
        "normalized": "",
        "package": "hsql",
        "partial": "Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#t:ColDef",
      "description": {
        "fct-descr": "\u003cp\u003eDescription of the properties of a table column.\n\u003c/p\u003e",
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "type",
        "fct-source": "src/Database-HSQL-Types.html#ColDef",
        "fct-type": "type",
        "title": "ColDef"
      },
      "index": {
        "description": "Description of the properties of table column",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "ColDef",
        "normalized": "",
        "package": "hsql",
        "partial": "Col Def",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#t:ColId",
      "description": {
        "fct-descr": "\u003cp\u003eA table column ID.\n\u003c/p\u003e",
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "type",
        "fct-source": "src/Database-HSQL-Types.html#ColId",
        "fct-type": "type",
        "title": "ColId"
      },
      "index": {
        "description": "table column ID",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "ColId",
        "normalized": "",
        "package": "hsql",
        "partial": "Col Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#t:Connection",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eConnection\u003c/a\u003e\u003c/code\u003e type represents a connection to a database,\n through which you can operate on the it.\n In order to create the connection you need to use the \u003ccode\u003econnect\u003c/code\u003e function\n from the module for your prefered backend.\n\u003c/p\u003e",
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "data",
        "fct-source": "src/Database-HSQL-Types.html#Connection",
        "fct-type": "data",
        "title": "Connection"
      },
      "index": {
        "description": "Connection type represents connection to database through which you can operate on the it In order to create the connection you need to use the connect function from the module for your prefered backend",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "Connection",
        "normalized": "",
        "package": "hsql",
        "partial": "Connection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#t:FieldReader",
      "description": {
        "fct-descr": "\u003cp\u003eA DB generic field extraction function, specifiable by \n field definition, receiving the content code and its length.\n\u003c/p\u003e",
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "type",
        "fct-source": "src/Database-HSQL-Types.html#FieldReader",
        "fct-type": "type",
        "title": "FieldReader"
      },
      "index": {
        "description": "DB generic field extraction function specifiable by field definition receiving the content code and its length",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "FieldReader",
        "normalized": "",
        "package": "hsql",
        "partial": "Field Reader",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#t:FieldReading",
      "description": {
        "fct-descr": "\u003cp\u003eAn extraction of a field of type to be specified by requester,\n from a row index with source \u003ccode\u003e\u003ca\u003eColDef\u003c/a\u003e\u003c/code\u003e, applying an appropriate \n \u003ccode\u003e\u003ca\u003eFieldReader\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "type",
        "fct-source": "src/Database-HSQL-Types.html#FieldReading",
        "fct-type": "type",
        "title": "FieldReading"
      },
      "index": {
        "description": "An extraction of field of type to be specified by requester from row index with source ColDef applying an appropriate FieldReader",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "FieldReading",
        "normalized": "",
        "package": "hsql",
        "partial": "Field Reading",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#t:Nullability",
      "description": {
        "fct-descr": "\u003cp\u003eWhether fields of a table col may be NULL.\n\u003c/p\u003e",
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "type",
        "fct-source": "src/Database-HSQL-Types.html#Nullability",
        "fct-type": "type",
        "title": "Nullability"
      },
      "index": {
        "description": "Whether fields of table col may be NULL",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "Nullability",
        "normalized": "",
        "package": "hsql",
        "partial": "Nullability",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#t:SQL",
      "description": {
        "fct-descr": "\u003cp\u003eAn SQL Query.\n\u003c/p\u003e",
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "type",
        "fct-source": "src/Database-HSQL-Types.html#SQL",
        "fct-type": "type",
        "title": "SQL"
      },
      "index": {
        "description": "An SQL Query",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "SQL",
        "normalized": "",
        "package": "hsql",
        "partial": "SQL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#t:SqlBind",
      "description": {
        "fct-descr": "\u003cp\u003eEquivalent to Show and Read adapted to SQL expressions.\n\u003c/p\u003e",
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "class",
        "fct-source": "src/Database-HSQL-Types.html#SqlBind",
        "fct-type": "class",
        "title": "SqlBind"
      },
      "index": {
        "description": "Equivalent to Show and Read adapted to SQL expressions",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "SqlBind",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Bind",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#t:SqlError",
      "description": {
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "data",
        "fct-source": "src/DB-HSQL-Error.html#SqlError",
        "fct-type": "data",
        "title": "SqlError"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "SqlError",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#t:SqlType",
      "description": {
        "fct-descr": "\u003cp\u003eVariety of common data types used in databases.\n\u003c/p\u003e",
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "data",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "data",
        "title": "SqlType"
      },
      "index": {
        "description": "Variety of common data types used in databases",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "SqlType",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#t:Statement",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eStatement\u003c/a\u003e\u003c/code\u003e type represents a result from the execution of given\n SQL query.\n\u003c/p\u003e",
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "data",
        "fct-source": "src/Database-HSQL-Types.html#Statement",
        "fct-type": "data",
        "title": "Statement"
      },
      "index": {
        "description": "The Statement type represents result from the execution of given SQL query",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "Statement",
        "normalized": "",
        "package": "hsql",
        "partial": "Statement",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#t:TableId",
      "description": {
        "fct-descr": "\u003cp\u003eA table ID.\n\u003c/p\u003e",
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "type",
        "fct-source": "src/Database-HSQL-Types.html#TableId",
        "fct-type": "type",
        "title": "TableId"
      },
      "index": {
        "description": "table ID",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "TableId",
        "normalized": "",
        "package": "hsql",
        "partial": "Table Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:Connection",
      "description": {
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "Connection",
        "fct-source": "src/Database-HSQL-Types.html#Connection",
        "fct-type": "function",
        "title": "Connection"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "Connection",
        "normalized": "",
        "package": "hsql",
        "partial": "Connection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlAbsTime",
      "description": {
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "SqlAbsTime",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlAbsTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "SqlAbsTime",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Abs Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlAbsTimeInterval",
      "description": {
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "SqlAbsTimeInterval",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlAbsTimeInterval"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "SqlAbsTimeInterval",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Abs Time Interval",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlBLOB",
      "description": {
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "SqlBLOB",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlBLOB"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "SqlBLOB",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql BLOB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlBadTypeCast",
      "description": {
        "fct-descr": "\u003cp\u003erequested field can't be converted to requested type\n\u003c/p\u003e",
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "SqlBadTypeCast",
        "fct-source": "src/DB-HSQL-Error.html#SqlError",
        "fct-type": "function",
        "title": "SqlBadTypeCast"
      },
      "index": {
        "description": "requested field can be converted to requested type",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "SqlBadTypeCast",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Bad Type Cast",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlBigInt",
      "description": {
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "SqlBigInt",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlBigInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "SqlBigInt",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Big Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlBinary",
      "description": {
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "SqlBinary",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlBinary"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "SqlBinary",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Binary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlBit",
      "description": {
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "SqlBit",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlBit"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "SqlBit",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Bit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlBox",
      "description": {
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "SqlBox",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlBox"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "SqlBox",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Box",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlCIDRAddr",
      "description": {
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "SqlCIDRAddr",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlCIDRAddr"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "SqlCIDRAddr",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql CIDRAddr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlChar",
      "description": {
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "SqlChar",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlChar"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "SqlChar",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Char",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlCircle",
      "description": {
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "SqlCircle",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlCircle"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "SqlCircle",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Circle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlClosedHandle",
      "description": {
        "fct-descr": "\u003cp\u003ereferenced handle is already closed\n\u003c/p\u003e",
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "SqlClosedHandle",
        "fct-source": "src/DB-HSQL-Error.html#SqlError",
        "fct-type": "function",
        "title": "SqlClosedHandle"
      },
      "index": {
        "description": "referenced handle is already closed",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "SqlClosedHandle",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Closed Handle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlDate",
      "description": {
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "SqlDate",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlDate"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "SqlDate",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Date",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlDateTime",
      "description": {
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "SqlDateTime",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlDateTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "SqlDateTime",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Date Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlDateTimeTZ",
      "description": {
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "SqlDateTimeTZ",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlDateTimeTZ"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "SqlDateTimeTZ",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Date Time TZ",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlDecimal",
      "description": {
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "SqlDecimal",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlDecimal"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "SqlDecimal",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Decimal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlDouble",
      "description": {
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "SqlDouble",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlDouble"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "SqlDouble",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Double",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlENUM",
      "description": {
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "SqlENUM",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlENUM"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "SqlENUM",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql ENUM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlError",
      "description": {
        "fct-descr": "\u003cp\u003egeneric error condition, with further specification\n\u003c/p\u003e",
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "SqlError",
        "fct-source": "src/DB-HSQL-Error.html#SqlError",
        "fct-type": "function",
        "title": "SqlError"
      },
      "index": {
        "description": "generic error condition with further specification",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "SqlError",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlFetchNull",
      "description": {
        "fct-descr": "\u003cp\u003erequested field returns NULL\n\u003c/p\u003e",
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "SqlFetchNull",
        "fct-source": "src/DB-HSQL-Error.html#SqlError",
        "fct-type": "function",
        "title": "SqlFetchNull"
      },
      "index": {
        "description": "requested field returns NULL",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "SqlFetchNull",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Fetch Null",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlFloat",
      "description": {
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "SqlFloat",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlFloat"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "SqlFloat",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Float",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlINetAddr",
      "description": {
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "SqlINetAddr",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlINetAddr"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "SqlINetAddr",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql INet Addr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlInteger",
      "description": {
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "SqlInteger",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlInteger"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "SqlInteger",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Integer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlInvalidHandle",
      "description": {
        "fct-descr": "\u003cp\u003erequested handle is invalid\n\u003c/p\u003e",
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "SqlInvalidHandle",
        "fct-source": "src/DB-HSQL-Error.html#SqlError",
        "fct-type": "function",
        "title": "SqlInvalidHandle"
      },
      "index": {
        "description": "requested handle is invalid",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "SqlInvalidHandle",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Invalid Handle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlLSeg",
      "description": {
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "SqlLSeg",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlLSeg"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "SqlLSeg",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql LSeg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlLine",
      "description": {
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "SqlLine",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlLine"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "SqlLine",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Line",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlLongVarBinary",
      "description": {
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "SqlLongVarBinary",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlLongVarBinary"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "SqlLongVarBinary",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Long Var Binary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlLongVarChar",
      "description": {
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "SqlLongVarChar",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlLongVarChar"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "SqlLongVarChar",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Long Var Char",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlMacAddr",
      "description": {
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "SqlMacAddr",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlMacAddr"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "SqlMacAddr",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Mac Addr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlMedInt",
      "description": {
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "SqlMedInt",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlMedInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "SqlMedInt",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Med Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlMoney",
      "description": {
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "SqlMoney",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlMoney"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "SqlMoney",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Money",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlNeedMoreData",
      "description": {
        "fct-descr": "\u003cp\u003emore data is needed, e.g. additional connection\n specs\n\u003c/p\u003e",
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "SqlNeedMoreData",
        "fct-source": "src/DB-HSQL-Error.html#SqlError",
        "fct-type": "function",
        "title": "SqlNeedMoreData"
      },
      "index": {
        "description": "more data is needed e.g additional connection specs",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "SqlNeedMoreData",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Need More Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlNoMoreData",
      "description": {
        "fct-descr": "\u003cp\u003eno more data was available\n\u003c/p\u003e",
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "SqlNoMoreData",
        "fct-source": "src/DB-HSQL-Error.html#SqlError",
        "fct-type": "function",
        "title": "SqlNoMoreData"
      },
      "index": {
        "description": "no more data was available",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "SqlNoMoreData",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql No More Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlNumeric",
      "description": {
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "SqlNumeric",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlNumeric"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "SqlNumeric",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Numeric",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlPath",
      "description": {
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "SqlPath",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlPath"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "SqlPath",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlPoint",
      "description": {
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "SqlPoint",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlPoint"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "SqlPoint",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Point",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlPolygon",
      "description": {
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "SqlPolygon",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlPolygon"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "SqlPolygon",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Polygon",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlReal",
      "description": {
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "SqlReal",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlReal"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "SqlReal",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Real",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlRelTime",
      "description": {
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "SqlRelTime",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlRelTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "SqlRelTime",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Rel Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlSET",
      "description": {
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "SqlSET",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlSET"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "SqlSET",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql SET",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlSmallInt",
      "description": {
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "SqlSmallInt",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlSmallInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "SqlSmallInt",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Small Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlStillExecuting",
      "description": {
        "fct-descr": "\u003cp\u003econnection is blocked by running transaction\n\u003c/p\u003e",
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "SqlStillExecuting",
        "fct-source": "src/DB-HSQL-Error.html#SqlError",
        "fct-type": "function",
        "title": "SqlStillExecuting"
      },
      "index": {
        "description": "connection is blocked by running transaction",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "SqlStillExecuting",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Still Executing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlText",
      "description": {
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "SqlText",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlText"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "SqlText",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Text",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlTime",
      "description": {
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "SqlTime",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "SqlTime",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlTimeInterval",
      "description": {
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "SqlTimeInterval",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlTimeInterval"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "SqlTimeInterval",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Time Interval",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlTimeStamp",
      "description": {
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "SqlTimeStamp",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlTimeStamp"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "SqlTimeStamp",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Time Stamp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlTimeTZ",
      "description": {
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "SqlTimeTZ",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlTimeTZ"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "SqlTimeTZ",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Time TZ",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlTinyInt",
      "description": {
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "SqlTinyInt",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlTinyInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "SqlTinyInt",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Tiny Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlUnknown",
      "description": {
        "fct-descr": "\u003cp\u003eHSQL returns \u003ccode\u003e\u003ca\u003eSqlUnknown\u003c/a\u003e\u003c/code\u003e for all\n columns for which it cannot determine\n the right type. The \u003ccode\u003ebackendTypeCode\u003c/code\u003e here is the\n internal type code returned from the\n backend library\n\u003c/p\u003e",
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "SqlUnknown",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlUnknown"
      },
      "index": {
        "description": "HSQL returns SqlUnknown for all columns for which it cannot determine the right type The backendTypeCode here is the internal type code returned from the backend library",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "SqlUnknown",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Unknown",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlUnknownField",
      "description": {
        "fct-descr": "\u003cp\u003erequested field isn't known\n\u003c/p\u003e",
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "SqlUnknownField",
        "fct-source": "src/DB-HSQL-Error.html#SqlError",
        "fct-type": "function",
        "title": "SqlUnknownField"
      },
      "index": {
        "description": "requested field isn known",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "SqlUnknownField",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Unknown Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlUnsupportedOperation",
      "description": {
        "fct-descr": "\u003cp\u003erequested operation isn't supported\n\u003c/p\u003e",
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "SqlUnsupportedOperation",
        "fct-source": "src/DB-HSQL-Error.html#SqlError",
        "fct-type": "function",
        "title": "SqlUnsupportedOperation"
      },
      "index": {
        "description": "requested operation isn supported",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "SqlUnsupportedOperation",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Unsupported Operation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlVarBinary",
      "description": {
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "SqlVarBinary",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlVarBinary"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "SqlVarBinary",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Var Binary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlVarChar",
      "description": {
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "SqlVarChar",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlVarChar"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "SqlVarChar",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Var Char",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlWChar",
      "description": {
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "SqlWChar",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlWChar"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "SqlWChar",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql WChar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlWLongVarChar",
      "description": {
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "SqlWLongVarChar",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlWLongVarChar"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "SqlWLongVarChar",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql WLong Var Char",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlWVarChar",
      "description": {
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "SqlWVarChar",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlWVarChar"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "SqlWVarChar",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql WVar Char",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:SqlYear",
      "description": {
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "SqlYear",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlYear"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "SqlYear",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Year",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:Statement",
      "description": {
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "Statement",
        "fct-source": "src/Database-HSQL-Types.html#Statement",
        "fct-type": "function",
        "title": "Statement"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "Statement",
        "normalized": "",
        "package": "hsql",
        "partial": "Statement",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:connBeginTransaction",
      "description": {
        "fct-descr": "\u003cp\u003ebegin of a transaction\n\u003c/p\u003e",
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "IO ()",
        "fct-source": "src/Database-HSQL-Types.html#Connection",
        "fct-type": "function",
        "title": "connBeginTransaction"
      },
      "index": {
        "description": "begin of transaction",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "connBeginTransaction",
        "normalized": "IO()",
        "package": "hsql",
        "partial": "Begin Transaction",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:connClosed",
      "description": {
        "fct-descr": "\u003cp\u003eclosing state of the connection\n\u003c/p\u003e",
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "MVar Bool",
        "fct-source": "src/Database-HSQL-Types.html#Connection",
        "fct-type": "function",
        "title": "connClosed"
      },
      "index": {
        "description": "closing state of the connection",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "connClosed",
        "normalized": "",
        "package": "hsql",
        "partial": "Closed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:connCommitTransaction",
      "description": {
        "fct-descr": "\u003cp\u003ecommit of a pending transaction\n\u003c/p\u003e",
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "IO ()",
        "fct-source": "src/Database-HSQL-Types.html#Connection",
        "fct-type": "function",
        "title": "connCommitTransaction"
      },
      "index": {
        "description": "commit of pending transaction",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "connCommitTransaction",
        "normalized": "IO()",
        "package": "hsql",
        "partial": "Commit Transaction",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:connDescribe",
      "description": {
        "fct-descr": "\u003cp\u003eretrieval of the field defs of a table\n\u003c/p\u003e",
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "TableId -\u003e IO [ColDef]",
        "fct-source": "src/Database-HSQL-Types.html#Connection",
        "fct-type": "function",
        "title": "connDescribe"
      },
      "index": {
        "description": "retrieval of the field defs of table",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "connDescribe",
        "normalized": "TableId-\u003eIO[ColDef]",
        "package": "hsql",
        "partial": "Describe",
        "signature": "TableId-\u003eIO[ColDef]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:connDisconnect",
      "description": {
        "fct-descr": "\u003cp\u003edisconnect action\n\u003c/p\u003e",
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "IO ()",
        "fct-source": "src/Database-HSQL-Types.html#Connection",
        "fct-type": "function",
        "title": "connDisconnect"
      },
      "index": {
        "description": "disconnect action",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "connDisconnect",
        "normalized": "IO()",
        "package": "hsql",
        "partial": "Disconnect",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:connExecute",
      "description": {
        "fct-descr": "\u003cp\u003equery execution action (without return value)\n\u003c/p\u003e",
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "SQL -\u003e IO ()",
        "fct-source": "src/Database-HSQL-Types.html#Connection",
        "fct-type": "function",
        "title": "connExecute"
      },
      "index": {
        "description": "query execution action without return value",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "connExecute",
        "normalized": "SQL-\u003eIO()",
        "package": "hsql",
        "partial": "Execute",
        "signature": "SQL-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:connQuery",
      "description": {
        "fct-descr": "\u003cp\u003equery action with return value\n\u003c/p\u003e",
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "SQL -\u003e IO Statement",
        "fct-source": "src/Database-HSQL-Types.html#Connection",
        "fct-type": "function",
        "title": "connQuery"
      },
      "index": {
        "description": "query action with return value",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "connQuery",
        "normalized": "SQL-\u003eIO Statement",
        "package": "hsql",
        "partial": "Query",
        "signature": "SQL-\u003eIO Statement"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:connRollbackTransaction",
      "description": {
        "fct-descr": "\u003cp\u003erollback of a pending transaction\n\u003c/p\u003e",
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "IO ()",
        "fct-source": "src/Database-HSQL-Types.html#Connection",
        "fct-type": "function",
        "title": "connRollbackTransaction"
      },
      "index": {
        "description": "rollback of pending transaction",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "connRollbackTransaction",
        "normalized": "IO()",
        "package": "hsql",
        "partial": "Rollback Transaction",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:connTables",
      "description": {
        "fct-descr": "\u003cp\u003eretrieval of the names of the tables in reach\n\u003c/p\u003e",
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "IO [TableId]",
        "fct-source": "src/Database-HSQL-Types.html#Connection",
        "fct-type": "function",
        "title": "connTables"
      },
      "index": {
        "description": "retrieval of the names of the tables in reach",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "connTables",
        "normalized": "IO[TableId]",
        "package": "hsql",
        "partial": "Tables",
        "signature": "IO[TableId]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:fromSqlCStringLen",
      "description": {
        "fct-descr": "\u003cp\u003eread from SQL expression in binary representation,\n by support of its \u003ccode\u003e\u003ca\u003eColDef\u003c/a\u003e\u003c/code\u003e and code size info.\n This allows for faster conversion for e.g. integral numeric types,\n etc.\n\u003c/p\u003e",
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "fromSqlCStringLen",
        "fct-source": "src/Database-HSQL-Types.html#fromSqlCStringLen",
        "fct-type": "method",
        "title": "fromSqlCStringLen"
      },
      "index": {
        "description": "read from SQL expression in binary representation by support of its ColDef and code size info This allows for faster conversion for e.g integral numeric types etc",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "fromSqlCStringLen",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql CString Len",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:fromSqlValue",
      "description": {
        "fct-descr": "\u003cp\u003eread from an SQL expression in text representation, \n by support of its \u003ccode\u003e\u003ca\u003eSqlType\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "SqlType -\u003e SQL -\u003e Maybe a",
        "fct-source": "src/Database-HSQL-Types.html#fromSqlValue",
        "fct-type": "method",
        "title": "fromSqlValue"
      },
      "index": {
        "description": "read from an SQL expression in text representation by support of its SqlType",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "fromSqlValue",
        "normalized": "SqlType-\u003eSQL-\u003eMaybe a",
        "package": "hsql",
        "partial": "Sql Value",
        "signature": "SqlType-\u003eSQL-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:seErrorMsg",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "String",
        "fct-source": "src/DB-HSQL-Error.html#SqlError",
        "fct-type": "function",
        "title": "seErrorMsg"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "seErrorMsg",
        "normalized": "",
        "package": "hsql",
        "partial": "Error Msg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:seFieldName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "String",
        "fct-source": "src/DB-HSQL-Error.html#SqlError",
        "fct-type": "function",
        "title": "seFieldName"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "seFieldName",
        "normalized": "",
        "package": "hsql",
        "partial": "Field Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:seFieldType",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "SqlType",
        "fct-source": "src/DB-HSQL-Error.html#SqlError",
        "fct-type": "function",
        "title": "seFieldType"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "seFieldType",
        "normalized": "",
        "package": "hsql",
        "partial": "Field Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:seNativeError",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "Int",
        "fct-source": "src/DB-HSQL-Error.html#SqlError",
        "fct-type": "function",
        "title": "seNativeError"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "seNativeError",
        "normalized": "",
        "package": "hsql",
        "partial": "Native Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:seState",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "String",
        "fct-source": "src/DB-HSQL-Error.html#SqlError",
        "fct-type": "function",
        "title": "seState"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "seState",
        "normalized": "",
        "package": "hsql",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:stmtClose",
      "description": {
        "fct-descr": "\u003cp\u003eclose action\n\u003c/p\u003e",
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "IO ()",
        "fct-source": "src/Database-HSQL-Types.html#Statement",
        "fct-type": "function",
        "title": "stmtClose"
      },
      "index": {
        "description": "close action",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "stmtClose",
        "normalized": "IO()",
        "package": "hsql",
        "partial": "Close",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:stmtClosed",
      "description": {
        "fct-descr": "\u003cp\u003echeck whether the statement is closed\n\u003c/p\u003e",
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "MVar Bool",
        "fct-source": "src/Database-HSQL-Types.html#Statement",
        "fct-type": "function",
        "title": "stmtClosed"
      },
      "index": {
        "description": "check whether the statement is closed",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "stmtClosed",
        "normalized": "",
        "package": "hsql",
        "partial": "Closed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:stmtConn",
      "description": {
        "fct-descr": "\u003cp\u003eDB connection the statement depends on\n\u003c/p\u003e",
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "Connection",
        "fct-source": "src/Database-HSQL-Types.html#Statement",
        "fct-type": "function",
        "title": "stmtConn"
      },
      "index": {
        "description": "DB connection the statement depends on",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "stmtConn",
        "normalized": "",
        "package": "hsql",
        "partial": "Conn",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:stmtFetch",
      "description": {
        "fct-descr": "\u003cp\u003eincrementation of the row pointer and indication\n whether this is still in range of available rows\n\u003c/p\u003e",
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "IO Bool",
        "fct-source": "src/Database-HSQL-Types.html#Statement",
        "fct-type": "function",
        "title": "stmtFetch"
      },
      "index": {
        "description": "incrementation of the row pointer and indication whether this is still in range of available rows",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "stmtFetch",
        "normalized": "",
        "package": "hsql",
        "partial": "Fetch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:stmtFields",
      "description": {
        "fct-descr": "\u003cp\u003efield descriptors for each result table column\n\u003c/p\u003e",
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "[ColDef]",
        "fct-source": "src/Database-HSQL-Types.html#Statement",
        "fct-type": "function",
        "title": "stmtFields"
      },
      "index": {
        "description": "field descriptors for each result table column",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "stmtFields",
        "normalized": "[ColDef]",
        "package": "hsql",
        "partial": "Fields",
        "signature": "[ColDef]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:stmtGetCol",
      "description": {
        "fct-descr": "\u003cp\u003ea \u003ccode\u003e\u003ca\u003eFieldReading\u003c/a\u003e\u003c/code\u003e function applicable for each row\n\u003c/p\u003e",
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "FieldReading",
        "fct-source": "src/Database-HSQL-Types.html#Statement",
        "fct-type": "function",
        "title": "stmtGetCol"
      },
      "index": {
        "description": "FieldReading function applicable for each row",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "stmtGetCol",
        "normalized": "",
        "package": "hsql",
        "partial": "Get Col",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:toSqlValue",
      "description": {
        "fct-descr": "\u003cp\u003eshow as an SQL expression\n\u003c/p\u003e",
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "a -\u003e SQL",
        "fct-source": "src/Database-HSQL-Types.html#toSqlValue",
        "fct-type": "method",
        "title": "toSqlValue"
      },
      "index": {
        "description": "show as an SQL expression",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "toSqlValue",
        "normalized": "a-\u003eSQL",
        "package": "hsql",
        "partial": "Sql Value",
        "signature": "a-\u003eSQL"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:typeCode",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "Int",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "typeCode"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "typeCode",
        "normalized": "",
        "package": "hsql",
        "partial": "Code",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:typeDecimals",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "Int",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "typeDecimals"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "typeDecimals",
        "normalized": "",
        "package": "hsql",
        "partial": "Decimals",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL-Types.html#v:typeSize",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HSQL.Types",
        "fct-package": "hsql",
        "fct-signature": "Int",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "typeSize"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL Types",
        "module": "Database.HSQL.Types",
        "name": "typeSize",
        "normalized": "",
        "package": "hsql",
        "partial": "Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#",
      "description": {
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "module",
        "fct-source": "src/Database-HSQL.html",
        "fct-type": "module",
        "title": "HSQL"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "HSQL",
        "normalized": "",
        "package": "hsql",
        "partial": "HSQL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#t:Box",
      "description": {
        "fct-descr": "\u003cp\u003eA 2D rectangle.\n\u003c/p\u003e",
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "data",
        "fct-source": "src/DB-HSQL-Type-Geometric.html#Box",
        "fct-type": "data",
        "title": "Box"
      },
      "index": {
        "description": "rectangle",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "Box",
        "normalized": "",
        "package": "hsql",
        "partial": "Box",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#t:Circle",
      "description": {
        "fct-descr": "\u003cp\u003eA 2D circle\n\u003c/p\u003e",
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "data",
        "fct-source": "src/DB-HSQL-Type-Geometric.html#Circle",
        "fct-type": "data",
        "title": "Circle"
      },
      "index": {
        "description": "circle",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "Circle",
        "normalized": "",
        "package": "hsql",
        "partial": "Circle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#t:ColDef",
      "description": {
        "fct-descr": "\u003cp\u003eDescription of the properties of a table column.\n\u003c/p\u003e",
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "type",
        "fct-source": "src/Database-HSQL-Types.html#ColDef",
        "fct-type": "type",
        "title": "ColDef"
      },
      "index": {
        "description": "Description of the properties of table column",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "ColDef",
        "normalized": "",
        "package": "hsql",
        "partial": "Col Def",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#t:Connection",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eConnection\u003c/a\u003e\u003c/code\u003e type represents a connection to a database,\n through which you can operate on the it.\n In order to create the connection you need to use the \u003ccode\u003econnect\u003c/code\u003e function\n from the module for your prefered backend.\n\u003c/p\u003e",
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "data",
        "fct-source": "src/Database-HSQL-Types.html#Connection",
        "fct-type": "data",
        "title": "Connection"
      },
      "index": {
        "description": "Connection type represents connection to database through which you can operate on the it In order to create the connection you need to use the connect function from the module for your prefered backend",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "Connection",
        "normalized": "",
        "package": "hsql",
        "partial": "Connection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#t:INetAddr",
      "description": {
        "fct-descr": "\u003cp\u003eAn IP4 address with netmask in CIDR notation.\n\u003c/p\u003e",
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "data",
        "fct-source": "src/DB-HSQL-Type-NetAddress.html#INetAddr",
        "fct-type": "data",
        "title": "INetAddr"
      },
      "index": {
        "description": "An IP4 address with netmask in CIDR notation",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "INetAddr",
        "normalized": "",
        "package": "hsql",
        "partial": "INet Addr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#t:Line",
      "description": {
        "fct-descr": "\u003cp\u003eA 2D straight line.\n\u003c/p\u003e",
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "data",
        "fct-source": "src/DB-HSQL-Type-Geometric.html#Line",
        "fct-type": "data",
        "title": "Line"
      },
      "index": {
        "description": "straight line",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "Line",
        "normalized": "",
        "package": "hsql",
        "partial": "Line",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#t:MacAddr",
      "description": {
        "fct-descr": "\u003cp\u003eA MAC network address.\n\u003c/p\u003e",
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "data",
        "fct-source": "src/DB-HSQL-Type-NetAddress.html#MacAddr",
        "fct-type": "data",
        "title": "MacAddr"
      },
      "index": {
        "description": "MAC network address",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "MacAddr",
        "normalized": "",
        "package": "hsql",
        "partial": "Mac Addr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#t:Path",
      "description": {
        "fct-descr": "\u003cp\u003eA 2D path, either open, or closed (looping). \n\u003c/p\u003e",
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "data",
        "fct-source": "src/DB-HSQL-Type-Geometric.html#Path",
        "fct-type": "data",
        "title": "Path"
      },
      "index": {
        "description": "path either open or closed looping",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "Path",
        "normalized": "",
        "package": "hsql",
        "partial": "Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#t:Point",
      "description": {
        "fct-descr": "\u003cp\u003eA 2D point.\n\u003c/p\u003e",
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "data",
        "fct-source": "src/DB-HSQL-Type-Geometric.html#Point",
        "fct-type": "data",
        "title": "Point"
      },
      "index": {
        "description": "point",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "Point",
        "normalized": "",
        "package": "hsql",
        "partial": "Point",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#t:Polygon",
      "description": {
        "fct-descr": "\u003cp\u003eA 2D polygon (without holes).\n\u003c/p\u003e",
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "data",
        "fct-source": "src/DB-HSQL-Type-Geometric.html#Polygon",
        "fct-type": "data",
        "title": "Polygon"
      },
      "index": {
        "description": "polygon without holes",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "Polygon",
        "normalized": "",
        "package": "hsql",
        "partial": "Polygon",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#t:SQL",
      "description": {
        "fct-descr": "\u003cp\u003eAn SQL Query.\n\u003c/p\u003e",
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "type",
        "fct-source": "src/Database-HSQL-Types.html#SQL",
        "fct-type": "type",
        "title": "SQL"
      },
      "index": {
        "description": "An SQL Query",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "SQL",
        "normalized": "",
        "package": "hsql",
        "partial": "SQL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#t:SqlBind",
      "description": {
        "fct-descr": "\u003cp\u003eEquivalent to Show and Read adapted to SQL expressions.\n\u003c/p\u003e",
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "class",
        "fct-source": "src/Database-HSQL-Types.html#SqlBind",
        "fct-type": "class",
        "title": "SqlBind"
      },
      "index": {
        "description": "Equivalent to Show and Read adapted to SQL expressions",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "SqlBind",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Bind",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#t:SqlError",
      "description": {
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "data",
        "fct-source": "src/DB-HSQL-Error.html#SqlError",
        "fct-type": "data",
        "title": "SqlError"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "SqlError",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#t:SqlType",
      "description": {
        "fct-descr": "\u003cp\u003eVariety of common data types used in databases.\n\u003c/p\u003e",
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "data",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "data",
        "title": "SqlType"
      },
      "index": {
        "description": "Variety of common data types used in databases",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "SqlType",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#t:Statement",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eStatement\u003c/a\u003e\u003c/code\u003e type represents a result from the execution of given\n SQL query.\n\u003c/p\u003e",
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "data",
        "fct-source": "src/Database-HSQL-Types.html#Statement",
        "fct-type": "data",
        "title": "Statement"
      },
      "index": {
        "description": "The Statement type represents result from the execution of given SQL query",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "Statement",
        "normalized": "",
        "package": "hsql",
        "partial": "Statement",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:Box",
      "description": {
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "Box",
        "fct-source": "src/DB-HSQL-Type-Geometric.html#Box",
        "fct-type": "function",
        "title": "Box"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "Box",
        "normalized": "",
        "package": "hsql",
        "partial": "Box",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:Circle",
      "description": {
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "Circle",
        "fct-source": "src/DB-HSQL-Type-Geometric.html#Circle",
        "fct-type": "function",
        "title": "Circle"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "Circle",
        "normalized": "",
        "package": "hsql",
        "partial": "Circle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:ClosedPath",
      "description": {
        "fct-descr": "\u003cp\u003eA looping path\n\u003c/p\u003e",
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "ClosedPath",
        "fct-source": "src/DB-HSQL-Type-Geometric.html#Path",
        "fct-type": "function",
        "title": "ClosedPath"
      },
      "index": {
        "description": "looping path",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "ClosedPath",
        "normalized": "",
        "package": "hsql",
        "partial": "Closed Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:INetAddr",
      "description": {
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "INetAddr",
        "fct-source": "src/DB-HSQL-Type-NetAddress.html#INetAddr",
        "fct-type": "function",
        "title": "INetAddr"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "INetAddr",
        "normalized": "",
        "package": "hsql",
        "partial": "INet Addr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:Line",
      "description": {
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "Line",
        "fct-source": "src/DB-HSQL-Type-Geometric.html#Line",
        "fct-type": "function",
        "title": "Line"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "Line",
        "normalized": "",
        "package": "hsql",
        "partial": "Line",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:MacAddr",
      "description": {
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "MacAddr",
        "fct-source": "src/DB-HSQL-Type-NetAddress.html#MacAddr",
        "fct-type": "function",
        "title": "MacAddr"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "MacAddr",
        "normalized": "",
        "package": "hsql",
        "partial": "Mac Addr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:OpenPath",
      "description": {
        "fct-descr": "\u003cp\u003eAn open path\n\u003c/p\u003e",
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "OpenPath",
        "fct-source": "src/DB-HSQL-Type-Geometric.html#Path",
        "fct-type": "function",
        "title": "OpenPath"
      },
      "index": {
        "description": "An open path",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "OpenPath",
        "normalized": "",
        "package": "hsql",
        "partial": "Open Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:Point",
      "description": {
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "Point",
        "fct-source": "src/DB-HSQL-Type-Geometric.html#Point",
        "fct-type": "function",
        "title": "Point"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "Point",
        "normalized": "",
        "package": "hsql",
        "partial": "Point",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:Polygon",
      "description": {
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "Polygon",
        "fct-source": "src/DB-HSQL-Type-Geometric.html#Polygon",
        "fct-type": "function",
        "title": "Polygon"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "Polygon",
        "normalized": "",
        "package": "hsql",
        "partial": "Polygon",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlAbsTime",
      "description": {
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "SqlAbsTime",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlAbsTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "SqlAbsTime",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Abs Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlAbsTimeInterval",
      "description": {
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "SqlAbsTimeInterval",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlAbsTimeInterval"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "SqlAbsTimeInterval",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Abs Time Interval",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlBLOB",
      "description": {
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "SqlBLOB",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlBLOB"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "SqlBLOB",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql BLOB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlBadTypeCast",
      "description": {
        "fct-descr": "\u003cp\u003erequested field can't be converted to requested type\n\u003c/p\u003e",
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "SqlBadTypeCast",
        "fct-source": "src/DB-HSQL-Error.html#SqlError",
        "fct-type": "function",
        "title": "SqlBadTypeCast"
      },
      "index": {
        "description": "requested field can be converted to requested type",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "SqlBadTypeCast",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Bad Type Cast",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlBigInt",
      "description": {
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "SqlBigInt",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlBigInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "SqlBigInt",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Big Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlBinary",
      "description": {
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "SqlBinary",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlBinary"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "SqlBinary",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Binary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlBit",
      "description": {
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "SqlBit",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlBit"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "SqlBit",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Bit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlBox",
      "description": {
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "SqlBox",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlBox"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "SqlBox",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Box",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlCIDRAddr",
      "description": {
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "SqlCIDRAddr",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlCIDRAddr"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "SqlCIDRAddr",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql CIDRAddr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlChar",
      "description": {
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "SqlChar",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlChar"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "SqlChar",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Char",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlCircle",
      "description": {
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "SqlCircle",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlCircle"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "SqlCircle",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Circle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlClosedHandle",
      "description": {
        "fct-descr": "\u003cp\u003ereferenced handle is already closed\n\u003c/p\u003e",
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "SqlClosedHandle",
        "fct-source": "src/DB-HSQL-Error.html#SqlError",
        "fct-type": "function",
        "title": "SqlClosedHandle"
      },
      "index": {
        "description": "referenced handle is already closed",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "SqlClosedHandle",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Closed Handle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlDate",
      "description": {
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "SqlDate",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlDate"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "SqlDate",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Date",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlDateTime",
      "description": {
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "SqlDateTime",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlDateTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "SqlDateTime",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Date Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlDateTimeTZ",
      "description": {
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "SqlDateTimeTZ",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlDateTimeTZ"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "SqlDateTimeTZ",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Date Time TZ",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlDecimal",
      "description": {
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "SqlDecimal",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlDecimal"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "SqlDecimal",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Decimal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlDouble",
      "description": {
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "SqlDouble",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlDouble"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "SqlDouble",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Double",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlENUM",
      "description": {
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "SqlENUM",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlENUM"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "SqlENUM",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql ENUM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlError",
      "description": {
        "fct-descr": "\u003cp\u003egeneric error condition, with further specification\n\u003c/p\u003e",
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "SqlError",
        "fct-source": "src/DB-HSQL-Error.html#SqlError",
        "fct-type": "function",
        "title": "SqlError"
      },
      "index": {
        "description": "generic error condition with further specification",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "SqlError",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlFetchNull",
      "description": {
        "fct-descr": "\u003cp\u003erequested field returns NULL\n\u003c/p\u003e",
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "SqlFetchNull",
        "fct-source": "src/DB-HSQL-Error.html#SqlError",
        "fct-type": "function",
        "title": "SqlFetchNull"
      },
      "index": {
        "description": "requested field returns NULL",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "SqlFetchNull",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Fetch Null",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlFloat",
      "description": {
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "SqlFloat",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlFloat"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "SqlFloat",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Float",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlINetAddr",
      "description": {
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "SqlINetAddr",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlINetAddr"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "SqlINetAddr",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql INet Addr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlInteger",
      "description": {
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "SqlInteger",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlInteger"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "SqlInteger",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Integer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlInvalidHandle",
      "description": {
        "fct-descr": "\u003cp\u003erequested handle is invalid\n\u003c/p\u003e",
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "SqlInvalidHandle",
        "fct-source": "src/DB-HSQL-Error.html#SqlError",
        "fct-type": "function",
        "title": "SqlInvalidHandle"
      },
      "index": {
        "description": "requested handle is invalid",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "SqlInvalidHandle",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Invalid Handle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlLSeg",
      "description": {
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "SqlLSeg",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlLSeg"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "SqlLSeg",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql LSeg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlLine",
      "description": {
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "SqlLine",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlLine"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "SqlLine",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Line",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlLongVarBinary",
      "description": {
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "SqlLongVarBinary",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlLongVarBinary"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "SqlLongVarBinary",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Long Var Binary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlLongVarChar",
      "description": {
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "SqlLongVarChar",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlLongVarChar"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "SqlLongVarChar",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Long Var Char",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlMacAddr",
      "description": {
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "SqlMacAddr",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlMacAddr"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "SqlMacAddr",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Mac Addr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlMedInt",
      "description": {
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "SqlMedInt",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlMedInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "SqlMedInt",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Med Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlMoney",
      "description": {
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "SqlMoney",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlMoney"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "SqlMoney",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Money",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlNeedMoreData",
      "description": {
        "fct-descr": "\u003cp\u003emore data is needed, e.g. additional connection\n specs\n\u003c/p\u003e",
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "SqlNeedMoreData",
        "fct-source": "src/DB-HSQL-Error.html#SqlError",
        "fct-type": "function",
        "title": "SqlNeedMoreData"
      },
      "index": {
        "description": "more data is needed e.g additional connection specs",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "SqlNeedMoreData",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Need More Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlNoMoreData",
      "description": {
        "fct-descr": "\u003cp\u003eno more data was available\n\u003c/p\u003e",
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "SqlNoMoreData",
        "fct-source": "src/DB-HSQL-Error.html#SqlError",
        "fct-type": "function",
        "title": "SqlNoMoreData"
      },
      "index": {
        "description": "no more data was available",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "SqlNoMoreData",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql No More Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlNumeric",
      "description": {
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "SqlNumeric",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlNumeric"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "SqlNumeric",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Numeric",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlPath",
      "description": {
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "SqlPath",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlPath"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "SqlPath",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlPoint",
      "description": {
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "SqlPoint",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlPoint"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "SqlPoint",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Point",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlPolygon",
      "description": {
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "SqlPolygon",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlPolygon"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "SqlPolygon",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Polygon",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlReal",
      "description": {
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "SqlReal",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlReal"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "SqlReal",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Real",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlRelTime",
      "description": {
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "SqlRelTime",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlRelTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "SqlRelTime",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Rel Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlSET",
      "description": {
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "SqlSET",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlSET"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "SqlSET",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql SET",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlSmallInt",
      "description": {
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "SqlSmallInt",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlSmallInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "SqlSmallInt",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Small Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlStillExecuting",
      "description": {
        "fct-descr": "\u003cp\u003econnection is blocked by running transaction\n\u003c/p\u003e",
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "SqlStillExecuting",
        "fct-source": "src/DB-HSQL-Error.html#SqlError",
        "fct-type": "function",
        "title": "SqlStillExecuting"
      },
      "index": {
        "description": "connection is blocked by running transaction",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "SqlStillExecuting",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Still Executing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlText",
      "description": {
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "SqlText",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlText"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "SqlText",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Text",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlTime",
      "description": {
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "SqlTime",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "SqlTime",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlTimeInterval",
      "description": {
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "SqlTimeInterval",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlTimeInterval"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "SqlTimeInterval",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Time Interval",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlTimeStamp",
      "description": {
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "SqlTimeStamp",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlTimeStamp"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "SqlTimeStamp",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Time Stamp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlTimeTZ",
      "description": {
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "SqlTimeTZ",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlTimeTZ"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "SqlTimeTZ",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Time TZ",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlTinyInt",
      "description": {
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "SqlTinyInt",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlTinyInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "SqlTinyInt",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Tiny Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlUnknown",
      "description": {
        "fct-descr": "\u003cp\u003eHSQL returns \u003ccode\u003e\u003ca\u003eSqlUnknown\u003c/a\u003e\u003c/code\u003e for all\n columns for which it cannot determine\n the right type. The \u003ccode\u003ebackendTypeCode\u003c/code\u003e here is the\n internal type code returned from the\n backend library\n\u003c/p\u003e",
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "SqlUnknown",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlUnknown"
      },
      "index": {
        "description": "HSQL returns SqlUnknown for all columns for which it cannot determine the right type The backendTypeCode here is the internal type code returned from the backend library",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "SqlUnknown",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Unknown",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlUnknownField",
      "description": {
        "fct-descr": "\u003cp\u003erequested field isn't known\n\u003c/p\u003e",
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "SqlUnknownField",
        "fct-source": "src/DB-HSQL-Error.html#SqlError",
        "fct-type": "function",
        "title": "SqlUnknownField"
      },
      "index": {
        "description": "requested field isn known",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "SqlUnknownField",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Unknown Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlUnsupportedOperation",
      "description": {
        "fct-descr": "\u003cp\u003erequested operation isn't supported\n\u003c/p\u003e",
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "SqlUnsupportedOperation",
        "fct-source": "src/DB-HSQL-Error.html#SqlError",
        "fct-type": "function",
        "title": "SqlUnsupportedOperation"
      },
      "index": {
        "description": "requested operation isn supported",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "SqlUnsupportedOperation",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Unsupported Operation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlVarBinary",
      "description": {
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "SqlVarBinary",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlVarBinary"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "SqlVarBinary",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Var Binary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlVarChar",
      "description": {
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "SqlVarChar",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlVarChar"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "SqlVarChar",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Var Char",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlWChar",
      "description": {
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "SqlWChar",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlWChar"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "SqlWChar",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql WChar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlWLongVarChar",
      "description": {
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "SqlWLongVarChar",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlWLongVarChar"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "SqlWLongVarChar",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql WLong Var Char",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlWVarChar",
      "description": {
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "SqlWVarChar",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlWVarChar"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "SqlWVarChar",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql WVar Char",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:SqlYear",
      "description": {
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "SqlYear",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "SqlYear"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "SqlYear",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql Year",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:boxX1",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "Double",
        "fct-source": "src/DB-HSQL-Type-Geometric.html#Box",
        "fct-type": "function",
        "title": "boxX1"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "boxX1",
        "normalized": "",
        "package": "hsql",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:boxX2",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "Double",
        "fct-source": "src/DB-HSQL-Type-Geometric.html#Box",
        "fct-type": "function",
        "title": "boxX2"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "boxX2",
        "normalized": "",
        "package": "hsql",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:boxY1",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "Double",
        "fct-source": "src/DB-HSQL-Type-Geometric.html#Box",
        "fct-type": "function",
        "title": "boxY1"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "boxY1",
        "normalized": "",
        "package": "hsql",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:boxY2",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "Double",
        "fct-source": "src/DB-HSQL-Type-Geometric.html#Box",
        "fct-type": "function",
        "title": "boxY2"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "boxY2",
        "normalized": "",
        "package": "hsql",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:catchSql",
      "description": {
        "fct-descr": "\u003cp\u003eDeprecated: Use \u003ccode\u003e\u003ca\u003ecatch\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e",
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "IO a -\u003e (SqlError -\u003e IO a) -\u003e IO a",
        "fct-source": "src/DB-HSQL-Core.html#catchSql",
        "fct-type": "function",
        "title": "catchSql"
      },
      "index": {
        "description": "Deprecated Use catch instead",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "catchSql",
        "normalized": "IO a-\u003e(SqlError-\u003eIO a)-\u003eIO a",
        "package": "hsql",
        "partial": "Sql",
        "signature": "IO a-\u003e(SqlError-\u003eIO a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:cidrMaskBits",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "Int",
        "fct-source": "src/DB-HSQL-Type-NetAddress.html#INetAddr",
        "fct-type": "function",
        "title": "cidrMaskBits"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "cidrMaskBits",
        "normalized": "",
        "package": "hsql",
        "partial": "Mask Bits",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:circleCenter",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "Point",
        "fct-source": "src/DB-HSQL-Type-Geometric.html#Circle",
        "fct-type": "function",
        "title": "circleCenter"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "circleCenter",
        "normalized": "",
        "package": "hsql",
        "partial": "Center",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:circleRadius",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "Double",
        "fct-source": "src/DB-HSQL-Type-Geometric.html#Circle",
        "fct-type": "function",
        "title": "circleRadius"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "circleRadius",
        "normalized": "",
        "package": "hsql",
        "partial": "Radius",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:closeStatement",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ecloseStatement\u003c/a\u003e\u003c/code\u003e stops processing associated with a specific statement,\n closes any open cursors associated with the statement, discards pending\n results, and frees all resources associated with the statement.\n Performing \u003ccode\u003e\u003ca\u003ecloseStatement\u003c/a\u003e\u003c/code\u003e on a statement that has already been closed\n has no effect. All other operations on a closed statement will fail.\n\u003c/p\u003e",
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "Statement -\u003e IO ()",
        "fct-source": "src/Database-HSQL.html#closeStatement",
        "fct-type": "function",
        "title": "closeStatement"
      },
      "index": {
        "description": "closeStatement stops processing associated with specific statement closes any open cursors associated with the statement discards pending results and frees all resources associated with the statement Performing closeStatement on statement that has already been closed has no effect All other operations on closed statement will fail",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "closeStatement",
        "normalized": "Statement-\u003eIO()",
        "package": "hsql",
        "partial": "Statement",
        "signature": "Statement-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:collectRows",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ecollectRows\u003c/a\u003e\u003c/code\u003e function iterates through the result set in \u003ccode\u003e\u003ca\u003eStatement\u003c/a\u003e\u003c/code\u003e\n and executes the given action for each row in the set. The values returned\n from action are collected and returned as list. The function closes the\n \u003ccode\u003e\u003ca\u003eStatement\u003c/a\u003e\u003c/code\u003e after the last row processing or if the given action raises an\n exception.\n\u003c/p\u003e",
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "(Statement -\u003e IO a) -\u003e Statement -\u003e IO [a]",
        "fct-source": "src/Database-HSQL.html#collectRows",
        "fct-type": "function",
        "title": "collectRows"
      },
      "index": {
        "description": "The collectRows function iterates through the result set in Statement and executes the given action for each row in the set The values returned from action are collected and returned as list The function closes the Statement after the last row processing or if the given action raises an exception",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "collectRows",
        "normalized": "(Statement-\u003eIO a)-\u003eStatement-\u003eIO[a]",
        "package": "hsql",
        "partial": "Rows",
        "signature": "(Statement-\u003eIO a)-\u003eStatement-\u003eIO[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:describe",
      "description": {
        "fct-descr": "\u003cp\u003eList all columns in a table along with their types and \u003ccode\u003enullable\u003c/code\u003e flags\n\u003c/p\u003e",
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "Connection-\u003e TableId-\u003e IO [ColDef]",
        "fct-type": "function",
        "title": "describe"
      },
      "index": {
        "description": "List all columns in table along with their types and nullable flags",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "describe",
        "normalized": "Connection-\u003eTableId-\u003eIO[ColDef]",
        "package": "hsql",
        "partial": "",
        "signature": "Connection-\u003eTableId-\u003eIO[ColDef]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:disconnect",
      "description": {
        "fct-descr": "\u003cp\u003eCloses the connection. Performing \u003ccode\u003e\u003ca\u003edisconnect\u003c/a\u003e\u003c/code\u003e on a connection that has\n already been closed has no effect.\n All other operations on a closed connection will fail.\n\u003c/p\u003e",
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "Connection -\u003e IO ()",
        "fct-source": "src/Database-HSQL.html#disconnect",
        "fct-type": "function",
        "title": "disconnect"
      },
      "index": {
        "description": "Closes the connection Performing disconnect on connection that has already been closed has no effect All other operations on closed connection will fail",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "disconnect",
        "normalized": "Connection-\u003eIO()",
        "package": "hsql",
        "partial": "",
        "signature": "Connection-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:execute",
      "description": {
        "fct-descr": "\u003cp\u003eSubmits a command to the database.\n\u003c/p\u003e",
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "Connection-\u003e SQL-\u003e IO ()",
        "fct-type": "function",
        "title": "execute"
      },
      "index": {
        "description": "Submits command to the database",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "execute",
        "normalized": "Connection-\u003eSQL-\u003eIO()",
        "package": "hsql",
        "partial": "",
        "signature": "Connection-\u003eSQL-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:fetch",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efetch\u003c/a\u003e\u003c/code\u003e fetches the next rowset of data from the result set.\n The values from columns can be retrieved with \u003ccode\u003e\u003ca\u003egetFieldValue\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "Statement -\u003e IO Bool",
        "fct-source": "src/Database-HSQL.html#fetch",
        "fct-type": "function",
        "title": "fetch"
      },
      "index": {
        "description": "fetch fetches the next rowset of data from the result set The values from columns can be retrieved with getFieldValue function",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "fetch",
        "normalized": "Statement-\u003eIO Bool",
        "package": "hsql",
        "partial": "",
        "signature": "Statement-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:forEachRow",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eforEachRow\u003c/a\u003e\u003c/code\u003e function iterates through the result set in \u003ccode\u003e\u003ca\u003eStatement\u003c/a\u003e\u003c/code\u003e\n and executes the given action for each row in the set.\n The function closes the \u003ccode\u003e\u003ca\u003eStatement\u003c/a\u003e\u003c/code\u003e after the last row processing or if\n the given action raises an exception.\n\u003c/p\u003e",
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "(Statement -\u003e s -\u003e IO s)-\u003e Statement-\u003e s-\u003e IO s",
        "fct-type": "function",
        "title": "forEachRow"
      },
      "index": {
        "description": "The forEachRow function iterates through the result set in Statement and executes the given action for each row in the set The function closes the Statement after the last row processing or if the given action raises an exception",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "forEachRow",
        "normalized": "(Statement-\u003ea-\u003eIO a)-\u003eStatement-\u003ea-\u003eIO a",
        "package": "hsql",
        "partial": "Each Row",
        "signature": "(Statement-\u003es-\u003eIO s)-\u003eStatement-\u003es-\u003eIO s"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:forEachRow-39-",
      "description": {
        "fct-descr": "\u003cp\u003eThe 'forEachRow\\'' function is analogous to \u003ccode\u003e\u003ca\u003eforEachRow\u003c/a\u003e\u003c/code\u003e but doesn't\n provide state.\n The function closes the \u003ccode\u003e\u003ca\u003eStatement\u003c/a\u003e\u003c/code\u003e after the last row processing or if the\n given action raises an exception.\n\u003c/p\u003e",
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "(Statement -\u003e IO ()) -\u003e Statement -\u003e IO ()",
        "fct-source": "src/Database-HSQL.html#forEachRow%27",
        "fct-type": "function",
        "title": "forEachRow'"
      },
      "index": {
        "description": "The forEachRow function is analogous to forEachRow but doesn provide state The function closes the Statement after the last row processing or if the given action raises an exception",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "forEachRow'",
        "normalized": "(Statement-\u003eIO())-\u003eStatement-\u003eIO()",
        "package": "hsql",
        "partial": "Each Row'",
        "signature": "(Statement-\u003eIO())-\u003eStatement-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:fromSqlCStringLen",
      "description": {
        "fct-descr": "\u003cp\u003eread from SQL expression in binary representation,\n by support of its \u003ccode\u003e\u003ca\u003eColDef\u003c/a\u003e\u003c/code\u003e and code size info.\n This allows for faster conversion for e.g. integral numeric types,\n etc.\n\u003c/p\u003e",
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "fromSqlCStringLen",
        "fct-source": "src/Database-HSQL-Types.html#fromSqlCStringLen",
        "fct-type": "method",
        "title": "fromSqlCStringLen"
      },
      "index": {
        "description": "read from SQL expression in binary representation by support of its ColDef and code size info This allows for faster conversion for e.g integral numeric types etc",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "fromSqlCStringLen",
        "normalized": "",
        "package": "hsql",
        "partial": "Sql CString Len",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:getFieldValue",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieves the value of field with the specified name.\n\u003c/p\u003e",
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "Statement-\u003e String-\u003e IO a",
        "fct-type": "function",
        "title": "getFieldValue"
      },
      "index": {
        "description": "Retrieves the value of field with the specified name",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "getFieldValue",
        "normalized": "Statement-\u003eString-\u003eIO a",
        "package": "hsql",
        "partial": "Field Value",
        "signature": "Statement-\u003eString-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:getFieldValue-39-",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieves the value of field with the specified name.\n If the field value is \u003ccode\u003enull\u003c/code\u003e then the function will return the default value.\n\u003c/p\u003e",
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "Statement-\u003e String-\u003e a-\u003e IO a",
        "fct-type": "function",
        "title": "getFieldValue'"
      },
      "index": {
        "description": "Retrieves the value of field with the specified name If the field value is null then the function will return the default value",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "getFieldValue'",
        "normalized": "Statement-\u003eString-\u003ea-\u003eIO a",
        "package": "hsql",
        "partial": "Field Value'",
        "signature": "Statement-\u003eString-\u003ea-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:getFieldValueMB",
      "description": {
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "Statement -\u003e String -\u003e IO (Maybe a)",
        "fct-source": "src/Database-HSQL.html#getFieldValueMB",
        "fct-type": "function",
        "title": "getFieldValueMB"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "getFieldValueMB",
        "normalized": "Statement-\u003eString-\u003eIO(Maybe a)",
        "package": "hsql",
        "partial": "Field Value MB",
        "signature": "Statement-\u003eString-\u003eIO(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:getFieldValueType",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the type and the \u003ccode\u003enullable\u003c/code\u003e flag for field with specified name\n\u003c/p\u003e",
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "Statement -\u003e String -\u003e (SqlType, Bool)",
        "fct-source": "src/Database-HSQL.html#getFieldValueType",
        "fct-type": "function",
        "title": "getFieldValueType"
      },
      "index": {
        "description": "Returns the type and the nullable flag for field with specified name",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "getFieldValueType",
        "normalized": "Statement-\u003eString-\u003e(SqlType,Bool)",
        "package": "hsql",
        "partial": "Field Value Type",
        "signature": "Statement-\u003eString-\u003e(SqlType,Bool)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:getFieldsTypes",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the list of fields with their types and \u003ccode\u003enullable\u003c/code\u003e flags\n\u003c/p\u003e",
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "Statement -\u003e [(String, SqlType, Bool)]",
        "fct-source": "src/Database-HSQL.html#getFieldsTypes",
        "fct-type": "function",
        "title": "getFieldsTypes"
      },
      "index": {
        "description": "Returns the list of fields with their types and nullable flags",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "getFieldsTypes",
        "normalized": "Statement-\u003e[(String,SqlType,Bool)]",
        "package": "hsql",
        "partial": "Fields Types",
        "signature": "Statement-\u003e[(String,SqlType,Bool)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:handleSql",
      "description": {
        "fct-descr": "\u003cp\u003eDeprecated: Use \u003ccode\u003e\u003ca\u003ehandle\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e",
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "(SqlError -\u003e IO a) -\u003e IO a -\u003e IO a",
        "fct-source": "src/DB-HSQL-Core.html#handleSql",
        "fct-type": "function",
        "title": "handleSql"
      },
      "index": {
        "description": "Deprecated Use handle instead",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "handleSql",
        "normalized": "(SqlError-\u003eIO a)-\u003eIO a-\u003eIO a",
        "package": "hsql",
        "partial": "Sql",
        "signature": "(SqlError-\u003eIO a)-\u003eIO a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:inTransaction",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003einTransaction\u003c/a\u003e\u003c/code\u003e function executes the specified action in transaction\n  mode.\n If the action completes successfully then the transaction will be commited.\n If the action completes with an exception then the transaction will be\n rolled back and the exception will be throw again.\n A transaction is to catch ANY exception, so \u003ccode\u003e\u003ca\u003eSomeException\u003c/a\u003e\u003c/code\u003e is adequate.\n\u003c/p\u003e",
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "Connection-\u003e (Connection -\u003e IO a)-\u003e IO a",
        "fct-type": "function",
        "title": "inTransaction"
      },
      "index": {
        "description": "The inTransaction function executes the specified action in transaction mode If the action completes successfully then the transaction will be commited If the action completes with an exception then the transaction will be rolled back and the exception will be throw again transaction is to catch ANY exception so SomeException is adequate",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "inTransaction",
        "normalized": "Connection-\u003e(Connection-\u003eIO a)-\u003eIO a",
        "package": "hsql",
        "partial": "Transaction",
        "signature": "Connection-\u003e(Connection-\u003eIO a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:ip4Octet1",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "Int",
        "fct-source": "src/DB-HSQL-Type-NetAddress.html#INetAddr",
        "fct-type": "function",
        "title": "ip4Octet1"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "ip4Octet1",
        "normalized": "",
        "package": "hsql",
        "partial": "Octet",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:ip4Octet2",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "Int",
        "fct-source": "src/DB-HSQL-Type-NetAddress.html#INetAddr",
        "fct-type": "function",
        "title": "ip4Octet2"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "ip4Octet2",
        "normalized": "",
        "package": "hsql",
        "partial": "Octet",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:ip4Octet3",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "Int",
        "fct-source": "src/DB-HSQL-Type-NetAddress.html#INetAddr",
        "fct-type": "function",
        "title": "ip4Octet3"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "ip4Octet3",
        "normalized": "",
        "package": "hsql",
        "partial": "Octet",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:ip4Octet4",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "Int",
        "fct-source": "src/DB-HSQL-Type-NetAddress.html#INetAddr",
        "fct-type": "function",
        "title": "ip4Octet4"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "ip4Octet4",
        "normalized": "",
        "package": "hsql",
        "partial": "Octet",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:lineBegin",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "Point",
        "fct-source": "src/DB-HSQL-Type-Geometric.html#Line",
        "fct-type": "function",
        "title": "lineBegin"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "lineBegin",
        "normalized": "",
        "package": "hsql",
        "partial": "Begin",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:lineEnd",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "Point",
        "fct-source": "src/DB-HSQL-Type-Geometric.html#Line",
        "fct-type": "function",
        "title": "lineEnd"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "lineEnd",
        "normalized": "",
        "package": "hsql",
        "partial": "End",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:macOctet1",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "Int",
        "fct-source": "src/DB-HSQL-Type-NetAddress.html#MacAddr",
        "fct-type": "function",
        "title": "macOctet1"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "macOctet1",
        "normalized": "",
        "package": "hsql",
        "partial": "Octet",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:macOctet2",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "Int",
        "fct-source": "src/DB-HSQL-Type-NetAddress.html#MacAddr",
        "fct-type": "function",
        "title": "macOctet2"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "macOctet2",
        "normalized": "",
        "package": "hsql",
        "partial": "Octet",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:macOctet3",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "Int",
        "fct-source": "src/DB-HSQL-Type-NetAddress.html#MacAddr",
        "fct-type": "function",
        "title": "macOctet3"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "macOctet3",
        "normalized": "",
        "package": "hsql",
        "partial": "Octet",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:macOctet4",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "Int",
        "fct-source": "src/DB-HSQL-Type-NetAddress.html#MacAddr",
        "fct-type": "function",
        "title": "macOctet4"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "macOctet4",
        "normalized": "",
        "package": "hsql",
        "partial": "Octet",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:macOctet5",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "Int",
        "fct-source": "src/DB-HSQL-Type-NetAddress.html#MacAddr",
        "fct-type": "function",
        "title": "macOctet5"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "macOctet5",
        "normalized": "",
        "package": "hsql",
        "partial": "Octet",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:macOctet6",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "Int",
        "fct-source": "src/DB-HSQL-Type-NetAddress.html#MacAddr",
        "fct-type": "function",
        "title": "macOctet6"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "macOctet6",
        "normalized": "",
        "package": "hsql",
        "partial": "Octet",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:pathPoints",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "[Point]",
        "fct-source": "src/DB-HSQL-Type-Geometric.html#Path",
        "fct-type": "function",
        "title": "pathPoints"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "pathPoints",
        "normalized": "[Point]",
        "package": "hsql",
        "partial": "Points",
        "signature": "[Point]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:pointX",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "Double",
        "fct-source": "src/DB-HSQL-Type-Geometric.html#Point",
        "fct-type": "function",
        "title": "pointX"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "pointX",
        "normalized": "",
        "package": "hsql",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:pointY",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "Double",
        "fct-source": "src/DB-HSQL-Type-Geometric.html#Point",
        "fct-type": "function",
        "title": "pointY"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "pointY",
        "normalized": "",
        "package": "hsql",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:polygonPoints",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "[Point]",
        "fct-source": "src/DB-HSQL-Type-Geometric.html#Polygon",
        "fct-type": "function",
        "title": "polygonPoints"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "polygonPoints",
        "normalized": "[Point]",
        "package": "hsql",
        "partial": "Points",
        "signature": "[Point]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:query",
      "description": {
        "fct-descr": "\u003cp\u003eExecutes a query and returns a result set\n\u003c/p\u003e",
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "Connection-\u003e SQL-\u003e IO Statement",
        "fct-type": "function",
        "title": "query"
      },
      "index": {
        "description": "Executes query and returns result set",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "query",
        "normalized": "Connection-\u003eSQL-\u003eIO Statement",
        "package": "hsql",
        "partial": "",
        "signature": "Connection-\u003eSQL-\u003eIO Statement"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:seErrorMsg",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "String",
        "fct-source": "src/DB-HSQL-Error.html#SqlError",
        "fct-type": "function",
        "title": "seErrorMsg"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "seErrorMsg",
        "normalized": "",
        "package": "hsql",
        "partial": "Error Msg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:seFieldName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "String",
        "fct-source": "src/DB-HSQL-Error.html#SqlError",
        "fct-type": "function",
        "title": "seFieldName"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "seFieldName",
        "normalized": "",
        "package": "hsql",
        "partial": "Field Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:seFieldType",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "SqlType",
        "fct-source": "src/DB-HSQL-Error.html#SqlError",
        "fct-type": "function",
        "title": "seFieldType"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "seFieldType",
        "normalized": "",
        "package": "hsql",
        "partial": "Field Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:seNativeError",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "Int",
        "fct-source": "src/DB-HSQL-Error.html#SqlError",
        "fct-type": "function",
        "title": "seNativeError"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "seNativeError",
        "normalized": "",
        "package": "hsql",
        "partial": "Native Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:seState",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "String",
        "fct-source": "src/DB-HSQL-Error.html#SqlError",
        "fct-type": "function",
        "title": "seState"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "seState",
        "normalized": "",
        "package": "hsql",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:sqlExceptions",
      "description": {
        "fct-descr": "\u003cp\u003eCasts, if possible, an \u003ccode\u003e\u003ca\u003eException\u003c/a\u003e\u003c/code\u003e to an \u003ccode\u003e\u003ca\u003eSqlError\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "x-\u003e Maybe SqlError",
        "fct-type": "function",
        "title": "sqlExceptions"
      },
      "index": {
        "description": "Casts if possible an Exception to an SqlError",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "sqlExceptions",
        "normalized": "a-\u003eMaybe SqlError",
        "package": "hsql",
        "partial": "Exceptions",
        "signature": "x-\u003eMaybe SqlError"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:tables",
      "description": {
        "fct-descr": "\u003cp\u003eList all tables in the database.\n\u003c/p\u003e",
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "Connection-\u003e IO [TableId]",
        "fct-type": "function",
        "title": "tables"
      },
      "index": {
        "description": "List all tables in the database",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "tables",
        "normalized": "Connection-\u003eIO[TableId]",
        "package": "hsql",
        "partial": "",
        "signature": "Connection-\u003eIO[TableId]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:typeCode",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "Int",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "typeCode"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "typeCode",
        "normalized": "",
        "package": "hsql",
        "partial": "Code",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:typeDecimals",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "Int",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "typeDecimals"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "typeDecimals",
        "normalized": "",
        "package": "hsql",
        "partial": "Decimals",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsql/docs/Database-HSQL.html#v:typeSize",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HSQL",
        "fct-package": "hsql",
        "fct-signature": "Int",
        "fct-source": "src/DB-HSQL-Type.html#SqlType",
        "fct-type": "function",
        "title": "typeSize"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSQL",
        "module": "Database.HSQL",
        "name": "typeSize",
        "normalized": "",
        "package": "hsql",
        "partial": "Size",
        "signature": ""
      }
    }
  }
]