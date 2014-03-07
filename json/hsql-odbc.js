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
        "word": "hsql-odbc"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Core",
          "name": "Core",
          "package": "hsql-odbc",
          "source": "src/DB-HSQL-ODBC-Core.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Core",
          "module": "DB.HSQL.ODBC.Core",
          "name": "Core",
          "package": "hsql-odbc",
          "partial": "Core",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Core.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Core",
          "name": "handleSqlResult",
          "package": "hsql-odbc",
          "signature": "SQLSMALLINT -\u003e SQLHANDLE -\u003e SQLRETURN -\u003e IO ()",
          "source": "src/DB-HSQL-ODBC-Core.html#handleSqlResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Core",
          "module": "DB.HSQL.ODBC.Core",
          "name": "handleSqlResult",
          "normalized": "SQLSMALLINT-\u003eSQLHANDLE-\u003eSQLRETURN-\u003eIO()",
          "package": "hsql-odbc",
          "partial": "Sql Result",
          "signature": "SQLSMALLINT-\u003eSQLHANDLE-\u003eSQLRETURN-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Core.html#v:handleSqlResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Core",
          "name": "withStatement",
          "package": "hsql-odbc",
          "signature": "Connection -\u003e HDBC -\u003e (HSTMT -\u003e IO SQLRETURN) -\u003e IO Statement",
          "source": "src/DB-HSQL-ODBC-Core.html#withStatement",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Core",
          "module": "DB.HSQL.ODBC.Core",
          "name": "withStatement",
          "normalized": "Connection-\u003eHDBC-\u003e(HSTMT-\u003eIO SQLRETURN)-\u003eIO Statement",
          "package": "hsql-odbc",
          "partial": "Statement",
          "signature": "Connection-\u003eHDBC-\u003e(HSTMT-\u003eIO SQLRETURN)-\u003eIO Statement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Core.html#v:withStatement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Functions",
          "name": "Functions",
          "package": "hsql-odbc",
          "source": "src/DB-HSQL-ODBC-Functions.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Functions",
          "module": "DB.HSQL.ODBC.Functions",
          "name": "Functions",
          "package": "hsql-odbc",
          "partial": "Functions",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Functions.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Functions",
          "name": "fieldNameLength",
          "package": "hsql-odbc",
          "signature": "SQLSMALLINT",
          "source": "src/DB-HSQL-ODBC-Functions.html#fieldNameLength",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Functions",
          "module": "DB.HSQL.ODBC.Functions",
          "name": "fieldNameLength",
          "package": "hsql-odbc",
          "partial": "Name Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Functions.html#v:fieldNameLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Functions",
          "name": "sizeOfField",
          "package": "hsql-odbc",
          "signature": "Int",
          "source": "src/DB-HSQL-ODBC-Functions.html#sizeOfField",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Functions",
          "module": "DB.HSQL.ODBC.Functions",
          "name": "sizeOfField",
          "package": "hsql-odbc",
          "partial": "Of Field",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Functions.html#v:sizeOfField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Functions",
          "name": "sizeOfHStmt",
          "package": "hsql-odbc",
          "signature": "Int",
          "source": "src/DB-HSQL-ODBC-Functions.html#sizeOfHStmt",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Functions",
          "module": "DB.HSQL.ODBC.Functions",
          "name": "sizeOfHStmt",
          "package": "hsql-odbc",
          "partial": "Of HStmt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Functions.html#v:sizeOfHStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Functions",
          "name": "sqlAllocConnect",
          "package": "hsql-odbc",
          "signature": "HENV -\u003e Ptr HDBC -\u003e IO SQLRETURN",
          "source": "src/DB-HSQL-ODBC-Functions.html#sqlAllocConnect",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Functions",
          "module": "DB.HSQL.ODBC.Functions",
          "name": "sqlAllocConnect",
          "normalized": "HENV-\u003ePtr HDBC-\u003eIO SQLRETURN",
          "package": "hsql-odbc",
          "partial": "Alloc Connect",
          "signature": "HENV-\u003ePtr HDBC-\u003eIO SQLRETURN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Functions.html#v:sqlAllocConnect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Functions",
          "name": "sqlAllocEnv",
          "package": "hsql-odbc",
          "signature": "Ptr HENV -\u003e IO SQLRETURN",
          "source": "src/DB-HSQL-ODBC-Functions.html#sqlAllocEnv",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Functions",
          "module": "DB.HSQL.ODBC.Functions",
          "name": "sqlAllocEnv",
          "normalized": "Ptr HENV-\u003eIO SQLRETURN",
          "package": "hsql-odbc",
          "partial": "Alloc Env",
          "signature": "Ptr HENV-\u003eIO SQLRETURN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Functions.html#v:sqlAllocEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Functions",
          "name": "sqlAllocStmt",
          "package": "hsql-odbc",
          "signature": "HDBC -\u003e Ptr HSTMT -\u003e IO SQLRETURN",
          "source": "src/DB-HSQL-ODBC-Functions.html#sqlAllocStmt",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Functions",
          "module": "DB.HSQL.ODBC.Functions",
          "name": "sqlAllocStmt",
          "normalized": "HDBC-\u003ePtr HSTMT-\u003eIO SQLRETURN",
          "package": "hsql-odbc",
          "partial": "Alloc Stmt",
          "signature": "HDBC-\u003ePtr HSTMT-\u003eIO SQLRETURN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Functions.html#v:sqlAllocStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Functions",
          "name": "sqlAttrCursorType",
          "package": "hsql-odbc",
          "signature": "Integer",
          "source": "src/DB-HSQL-ODBC-Functions.html#sqlAttrCursorType",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Functions",
          "module": "DB.HSQL.ODBC.Functions",
          "name": "sqlAttrCursorType",
          "package": "hsql-odbc",
          "partial": "Attr Cursor Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Functions.html#v:sqlAttrCursorType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Functions",
          "name": "sqlAttrRowArraySize",
          "package": "hsql-odbc",
          "signature": "Integer",
          "source": "src/DB-HSQL-ODBC-Functions.html#sqlAttrRowArraySize",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Functions",
          "module": "DB.HSQL.ODBC.Functions",
          "name": "sqlAttrRowArraySize",
          "package": "hsql-odbc",
          "partial": "Attr Row Array Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Functions.html#v:sqlAttrRowArraySize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Functions",
          "name": "sqlAutoCommit",
          "package": "hsql-odbc",
          "signature": "SQLUSMALLINT",
          "source": "src/DB-HSQL-ODBC-Functions.html#sqlAutoCommit",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Functions",
          "module": "DB.HSQL.ODBC.Functions",
          "name": "sqlAutoCommit",
          "package": "hsql-odbc",
          "partial": "Auto Commit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Functions.html#v:sqlAutoCommit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Functions",
          "name": "sqlAutoCommitOff",
          "package": "hsql-odbc",
          "signature": "SQLULEN",
          "source": "src/DB-HSQL-ODBC-Functions.html#sqlAutoCommitOff",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Functions",
          "module": "DB.HSQL.ODBC.Functions",
          "name": "sqlAutoCommitOff",
          "package": "hsql-odbc",
          "partial": "Auto Commit Off",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Functions.html#v:sqlAutoCommitOff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Functions",
          "name": "sqlAutoCommitOn",
          "package": "hsql-odbc",
          "signature": "SQLULEN",
          "source": "src/DB-HSQL-ODBC-Functions.html#sqlAutoCommitOn",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Functions",
          "module": "DB.HSQL.ODBC.Functions",
          "name": "sqlAutoCommitOn",
          "package": "hsql-odbc",
          "partial": "Auto Commit On",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Functions.html#v:sqlAutoCommitOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Functions",
          "name": "sqlBindCol",
          "package": "hsql-odbc",
          "signature": "HSTMT -\u003e SQLUSMALLINT -\u003e SQLSMALLINT -\u003e Ptr a -\u003e SQLLEN -\u003e Ptr SQLINTEGER -\u003e IO SQLRETURN",
          "source": "src/DB-HSQL-ODBC-Functions.html#sqlBindCol",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Functions",
          "module": "DB.HSQL.ODBC.Functions",
          "name": "sqlBindCol",
          "normalized": "HSTMT-\u003eSQLUSMALLINT-\u003eSQLSMALLINT-\u003ePtr a-\u003eSQLLEN-\u003ePtr SQLINTEGER-\u003eIO SQLRETURN",
          "package": "hsql-odbc",
          "partial": "Bind Col",
          "signature": "HSTMT-\u003eSQLUSMALLINT-\u003eSQLSMALLINT-\u003ePtr a-\u003eSQLLEN-\u003ePtr SQLINTEGER-\u003eIO SQLRETURN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Functions.html#v:sqlBindCol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Functions",
          "name": "sqlCChar",
          "package": "hsql-odbc",
          "signature": "SQLSMALLINT",
          "source": "src/DB-HSQL-ODBC-Functions.html#sqlCChar",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Functions",
          "module": "DB.HSQL.ODBC.Functions",
          "name": "sqlCChar",
          "package": "hsql-odbc",
          "partial": "CChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Functions.html#v:sqlCChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Functions",
          "name": "sqlColumns",
          "package": "hsql-odbc",
          "signature": "HSTMT -\u003e CString -\u003e SQLSMALLINT -\u003e CString -\u003e SQLSMALLINT -\u003e CString -\u003e SQLSMALLINT -\u003e CString -\u003e SQLSMALLINT -\u003e IO SQLRETURN",
          "source": "src/DB-HSQL-ODBC-Functions.html#sqlColumns",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Functions",
          "module": "DB.HSQL.ODBC.Functions",
          "name": "sqlColumns",
          "normalized": "HSTMT-\u003eCString-\u003eSQLSMALLINT-\u003eCString-\u003eSQLSMALLINT-\u003eCString-\u003eSQLSMALLINT-\u003eCString-\u003eSQLSMALLINT-\u003eIO SQLRETURN",
          "package": "hsql-odbc",
          "partial": "Columns",
          "signature": "HSTMT-\u003eCString-\u003eSQLSMALLINT-\u003eCString-\u003eSQLSMALLINT-\u003eCString-\u003eSQLSMALLINT-\u003eCString-\u003eSQLSMALLINT-\u003eIO SQLRETURN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Functions.html#v:sqlColumns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Functions",
          "name": "sqlCommit",
          "package": "hsql-odbc",
          "signature": "SQLUSMALLINT",
          "source": "src/DB-HSQL-ODBC-Functions.html#sqlCommit",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Functions",
          "module": "DB.HSQL.ODBC.Functions",
          "name": "sqlCommit",
          "package": "hsql-odbc",
          "partial": "Commit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Functions.html#v:sqlCommit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Functions",
          "name": "sqlConnect",
          "package": "hsql-odbc",
          "signature": "HDBC -\u003e CString -\u003e Int -\u003e CString -\u003e Int -\u003e CString -\u003e Int -\u003e IO SQLRETURN",
          "source": "src/DB-HSQL-ODBC-Functions.html#sqlConnect",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Functions",
          "module": "DB.HSQL.ODBC.Functions",
          "name": "sqlConnect",
          "normalized": "HDBC-\u003eCString-\u003eInt-\u003eCString-\u003eInt-\u003eCString-\u003eInt-\u003eIO SQLRETURN",
          "package": "hsql-odbc",
          "partial": "Connect",
          "signature": "HDBC-\u003eCString-\u003eInt-\u003eCString-\u003eInt-\u003eCString-\u003eInt-\u003eIO SQLRETURN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Functions.html#v:sqlConnect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Functions",
          "name": "sqlCursorStatic",
          "package": "hsql-odbc",
          "signature": "Integer",
          "source": "src/DB-HSQL-ODBC-Functions.html#sqlCursorStatic",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Functions",
          "module": "DB.HSQL.ODBC.Functions",
          "name": "sqlCursorStatic",
          "package": "hsql-odbc",
          "partial": "Cursor Static",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Functions.html#v:sqlCursorStatic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Functions",
          "name": "sqlDescribeCol",
          "package": "hsql-odbc",
          "signature": "HSTMT -\u003e SQLUSMALLINT -\u003e CString -\u003e SQLSMALLINT -\u003e Ptr SQLSMALLINT -\u003e Ptr SQLSMALLINT -\u003e Ptr SQLULEN -\u003e Ptr SQLSMALLINT -\u003e Ptr SQLSMALLINT -\u003e IO SQLRETURN",
          "source": "src/DB-HSQL-ODBC-Functions.html#sqlDescribeCol",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Functions",
          "module": "DB.HSQL.ODBC.Functions",
          "name": "sqlDescribeCol",
          "normalized": "HSTMT-\u003eSQLUSMALLINT-\u003eCString-\u003eSQLSMALLINT-\u003ePtr SQLSMALLINT-\u003ePtr SQLSMALLINT-\u003ePtr SQLULEN-\u003ePtr SQLSMALLINT-\u003ePtr SQLSMALLINT-\u003eIO SQLRETURN",
          "package": "hsql-odbc",
          "partial": "Describe Col",
          "signature": "HSTMT-\u003eSQLUSMALLINT-\u003eCString-\u003eSQLSMALLINT-\u003ePtr SQLSMALLINT-\u003ePtr SQLSMALLINT-\u003ePtr SQLULEN-\u003ePtr SQLSMALLINT-\u003ePtr SQLSMALLINT-\u003eIO SQLRETURN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Functions.html#v:sqlDescribeCol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Functions",
          "name": "sqlDisconnect",
          "package": "hsql-odbc",
          "signature": "HDBC -\u003e IO SQLRETURN",
          "source": "src/DB-HSQL-ODBC-Functions.html#sqlDisconnect",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Functions",
          "module": "DB.HSQL.ODBC.Functions",
          "name": "sqlDisconnect",
          "normalized": "HDBC-\u003eIO SQLRETURN",
          "package": "hsql-odbc",
          "partial": "Disconnect",
          "signature": "HDBC-\u003eIO SQLRETURN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Functions.html#v:sqlDisconnect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Functions",
          "name": "sqlDriverConnect",
          "package": "hsql-odbc",
          "signature": "HDBC -\u003e Ptr () -\u003e CString -\u003e SQLSMALLINT -\u003e CString -\u003e SQLSMALLINT -\u003e Ptr SQLSMALLINT -\u003e SQLUSMALLINT -\u003e IO SQLRETURN",
          "source": "src/DB-HSQL-ODBC-Functions.html#sqlDriverConnect",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Functions",
          "module": "DB.HSQL.ODBC.Functions",
          "name": "sqlDriverConnect",
          "normalized": "HDBC-\u003ePtr()-\u003eCString-\u003eSQLSMALLINT-\u003eCString-\u003eSQLSMALLINT-\u003ePtr SQLSMALLINT-\u003eSQLUSMALLINT-\u003eIO SQLRETURN",
          "package": "hsql-odbc",
          "partial": "Driver Connect",
          "signature": "HDBC-\u003ePtr()-\u003eCString-\u003eSQLSMALLINT-\u003eCString-\u003eSQLSMALLINT-\u003ePtr SQLSMALLINT-\u003eSQLUSMALLINT-\u003eIO SQLRETURN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Functions.html#v:sqlDriverConnect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Functions",
          "name": "sqlDriverNoPrompt",
          "package": "hsql-odbc",
          "signature": "SQLUSMALLINT",
          "source": "src/DB-HSQL-ODBC-Functions.html#sqlDriverNoPrompt",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Functions",
          "module": "DB.HSQL.ODBC.Functions",
          "name": "sqlDriverNoPrompt",
          "package": "hsql-odbc",
          "partial": "Driver No Prompt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Functions.html#v:sqlDriverNoPrompt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Functions",
          "name": "sqlDrop",
          "package": "hsql-odbc",
          "signature": "SQLUSMALLINT",
          "source": "src/DB-HSQL-ODBC-Functions.html#sqlDrop",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Functions",
          "module": "DB.HSQL.ODBC.Functions",
          "name": "sqlDrop",
          "package": "hsql-odbc",
          "partial": "Drop",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Functions.html#v:sqlDrop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Functions",
          "name": "sqlExecDirect",
          "package": "hsql-odbc",
          "signature": "HSTMT -\u003e CString -\u003e Int -\u003e IO SQLRETURN",
          "source": "src/DB-HSQL-ODBC-Functions.html#sqlExecDirect",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Functions",
          "module": "DB.HSQL.ODBC.Functions",
          "name": "sqlExecDirect",
          "normalized": "HSTMT-\u003eCString-\u003eInt-\u003eIO SQLRETURN",
          "package": "hsql-odbc",
          "partial": "Exec Direct",
          "signature": "HSTMT-\u003eCString-\u003eInt-\u003eIO SQLRETURN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Functions.html#v:sqlExecDirect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Functions",
          "name": "sqlFetch",
          "package": "hsql-odbc",
          "signature": "HSTMT -\u003e IO SQLRETURN",
          "source": "src/DB-HSQL-ODBC-Functions.html#sqlFetch",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Functions",
          "module": "DB.HSQL.ODBC.Functions",
          "name": "sqlFetch",
          "normalized": "HSTMT-\u003eIO SQLRETURN",
          "package": "hsql-odbc",
          "partial": "Fetch",
          "signature": "HSTMT-\u003eIO SQLRETURN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Functions.html#v:sqlFetch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Functions",
          "name": "sqlFreeConnect",
          "package": "hsql-odbc",
          "signature": "HDBC -\u003e IO SQLRETURN",
          "source": "src/DB-HSQL-ODBC-Functions.html#sqlFreeConnect",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Functions",
          "module": "DB.HSQL.ODBC.Functions",
          "name": "sqlFreeConnect",
          "normalized": "HDBC-\u003eIO SQLRETURN",
          "package": "hsql-odbc",
          "partial": "Free Connect",
          "signature": "HDBC-\u003eIO SQLRETURN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Functions.html#v:sqlFreeConnect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Functions",
          "name": "sqlFreeEnv_p",
          "package": "hsql-odbc",
          "signature": "FunPtr (HENV -\u003e IO ())",
          "source": "src/DB-HSQL-ODBC-Functions.html#sqlFreeEnv_p",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Functions",
          "module": "DB.HSQL.ODBC.Functions",
          "name": "sqlFreeEnv_p",
          "normalized": "FunPtr(HENV-\u003eIO())",
          "package": "hsql-odbc",
          "partial": "Free Env",
          "signature": "FunPtr(HENV-\u003eIO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Functions.html#v:sqlFreeEnv_p"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Functions",
          "name": "sqlFreeStmt",
          "package": "hsql-odbc",
          "signature": "HSTMT -\u003e SQLUSMALLINT -\u003e IO SQLRETURN",
          "source": "src/DB-HSQL-ODBC-Functions.html#sqlFreeStmt",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Functions",
          "module": "DB.HSQL.ODBC.Functions",
          "name": "sqlFreeStmt",
          "normalized": "HSTMT-\u003eSQLUSMALLINT-\u003eIO SQLRETURN",
          "package": "hsql-odbc",
          "partial": "Free Stmt",
          "signature": "HSTMT-\u003eSQLUSMALLINT-\u003eIO SQLRETURN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Functions.html#v:sqlFreeStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Functions",
          "name": "sqlGetData",
          "package": "hsql-odbc",
          "signature": "HSTMT -\u003e SQLUSMALLINT -\u003e SQLSMALLINT -\u003e Ptr () -\u003e SQLINTEGER -\u003e Ptr SQLINTEGER -\u003e IO SQLRETURN",
          "source": "src/DB-HSQL-ODBC-Functions.html#sqlGetData",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Functions",
          "module": "DB.HSQL.ODBC.Functions",
          "name": "sqlGetData",
          "normalized": "HSTMT-\u003eSQLUSMALLINT-\u003eSQLSMALLINT-\u003ePtr()-\u003eSQLINTEGER-\u003ePtr SQLINTEGER-\u003eIO SQLRETURN",
          "package": "hsql-odbc",
          "partial": "Get Data",
          "signature": "HSTMT-\u003eSQLUSMALLINT-\u003eSQLSMALLINT-\u003ePtr()-\u003eSQLINTEGER-\u003ePtr SQLINTEGER-\u003eIO SQLRETURN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Functions.html#v:sqlGetData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Functions",
          "name": "sqlGetDiagRec",
          "package": "hsql-odbc",
          "signature": "SQLSMALLINT -\u003e SQLHANDLE -\u003e SQLSMALLINT -\u003e CString -\u003e Ptr SQLINTEGER -\u003e CString -\u003e SQLSMALLINT -\u003e Ptr SQLSMALLINT -\u003e IO SQLRETURN",
          "source": "src/DB-HSQL-ODBC-Functions.html#sqlGetDiagRec",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Functions",
          "module": "DB.HSQL.ODBC.Functions",
          "name": "sqlGetDiagRec",
          "normalized": "SQLSMALLINT-\u003eSQLHANDLE-\u003eSQLSMALLINT-\u003eCString-\u003ePtr SQLINTEGER-\u003eCString-\u003eSQLSMALLINT-\u003ePtr SQLSMALLINT-\u003eIO SQLRETURN",
          "package": "hsql-odbc",
          "partial": "Get Diag Rec",
          "signature": "SQLSMALLINT-\u003eSQLHANDLE-\u003eSQLSMALLINT-\u003eCString-\u003ePtr SQLINTEGER-\u003eCString-\u003eSQLSMALLINT-\u003ePtr SQLSMALLINT-\u003eIO SQLRETURN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Functions.html#v:sqlGetDiagRec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Functions",
          "name": "sqlHandleDbc",
          "package": "hsql-odbc",
          "signature": "SQLSMALLINT",
          "source": "src/DB-HSQL-ODBC-Functions.html#sqlHandleDbc",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Functions",
          "module": "DB.HSQL.ODBC.Functions",
          "name": "sqlHandleDbc",
          "package": "hsql-odbc",
          "partial": "Handle Dbc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Functions.html#v:sqlHandleDbc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Functions",
          "name": "sqlHandleEnv",
          "package": "hsql-odbc",
          "signature": "SQLSMALLINT",
          "source": "src/DB-HSQL-ODBC-Functions.html#sqlHandleEnv",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Functions",
          "module": "DB.HSQL.ODBC.Functions",
          "name": "sqlHandleEnv",
          "package": "hsql-odbc",
          "partial": "Handle Env",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Functions.html#v:sqlHandleEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Functions",
          "name": "sqlHandleStmt",
          "package": "hsql-odbc",
          "signature": "SQLSMALLINT",
          "source": "src/DB-HSQL-ODBC-Functions.html#sqlHandleStmt",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Functions",
          "module": "DB.HSQL.ODBC.Functions",
          "name": "sqlHandleStmt",
          "package": "hsql-odbc",
          "partial": "Handle Stmt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Functions.html#v:sqlHandleStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Functions",
          "name": "sqlIsInteger",
          "package": "hsql-odbc",
          "signature": "Integer",
          "source": "src/DB-HSQL-ODBC-Functions.html#sqlIsInteger",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Functions",
          "module": "DB.HSQL.ODBC.Functions",
          "name": "sqlIsInteger",
          "package": "hsql-odbc",
          "partial": "Is Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Functions.html#v:sqlIsInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Functions",
          "name": "sqlMoreResults",
          "package": "hsql-odbc",
          "signature": "HSTMT -\u003e IO SQLRETURN",
          "source": "src/DB-HSQL-ODBC-Functions.html#sqlMoreResults",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Functions",
          "module": "DB.HSQL.ODBC.Functions",
          "name": "sqlMoreResults",
          "normalized": "HSTMT-\u003eIO SQLRETURN",
          "package": "hsql-odbc",
          "partial": "More Results",
          "signature": "HSTMT-\u003eIO SQLRETURN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Functions.html#v:sqlMoreResults"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Functions",
          "name": "sqlNts",
          "package": "hsql-odbc",
          "signature": "SQLSMALLINT",
          "source": "src/DB-HSQL-ODBC-Functions.html#sqlNts",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Functions",
          "module": "DB.HSQL.ODBC.Functions",
          "name": "sqlNts",
          "package": "hsql-odbc",
          "partial": "Nts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Functions.html#v:sqlNts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Functions",
          "name": "sqlNullData",
          "package": "hsql-odbc",
          "signature": "SQLINTEGER",
          "source": "src/DB-HSQL-ODBC-Functions.html#sqlNullData",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Functions",
          "module": "DB.HSQL.ODBC.Functions",
          "name": "sqlNullData",
          "package": "hsql-odbc",
          "partial": "Null Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Functions.html#v:sqlNullData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Functions",
          "name": "sqlNumResultCols",
          "package": "hsql-odbc",
          "signature": "HSTMT -\u003e Ptr SQLUSMALLINT -\u003e IO SQLRETURN",
          "source": "src/DB-HSQL-ODBC-Functions.html#sqlNumResultCols",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Functions",
          "module": "DB.HSQL.ODBC.Functions",
          "name": "sqlNumResultCols",
          "normalized": "HSTMT-\u003ePtr SQLUSMALLINT-\u003eIO SQLRETURN",
          "package": "hsql-odbc",
          "partial": "Num Result Cols",
          "signature": "HSTMT-\u003ePtr SQLUSMALLINT-\u003eIO SQLRETURN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Functions.html#v:sqlNumResultCols"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Functions",
          "name": "sqlRollback",
          "package": "hsql-odbc",
          "signature": "SQLUSMALLINT",
          "source": "src/DB-HSQL-ODBC-Functions.html#sqlRollback",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Functions",
          "module": "DB.HSQL.ODBC.Functions",
          "name": "sqlRollback",
          "package": "hsql-odbc",
          "partial": "Rollback",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Functions.html#v:sqlRollback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Functions",
          "name": "sqlSetConnectOption",
          "package": "hsql-odbc",
          "signature": "HDBC -\u003e SQLUSMALLINT -\u003e SQLULEN -\u003e IO SQLRETURN",
          "source": "src/DB-HSQL-ODBC-Functions.html#sqlSetConnectOption",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Functions",
          "module": "DB.HSQL.ODBC.Functions",
          "name": "sqlSetConnectOption",
          "normalized": "HDBC-\u003eSQLUSMALLINT-\u003eSQLULEN-\u003eIO SQLRETURN",
          "package": "hsql-odbc",
          "partial": "Set Connect Option",
          "signature": "HDBC-\u003eSQLUSMALLINT-\u003eSQLULEN-\u003eIO SQLRETURN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Functions.html#v:sqlSetConnectOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Functions",
          "name": "sqlTables",
          "package": "hsql-odbc",
          "signature": "HSTMT -\u003e CString -\u003e SQLSMALLINT -\u003e CString -\u003e SQLSMALLINT -\u003e CString -\u003e SQLSMALLINT -\u003e CString -\u003e SQLSMALLINT -\u003e IO SQLRETURN",
          "source": "src/DB-HSQL-ODBC-Functions.html#sqlTables",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Functions",
          "module": "DB.HSQL.ODBC.Functions",
          "name": "sqlTables",
          "normalized": "HSTMT-\u003eCString-\u003eSQLSMALLINT-\u003eCString-\u003eSQLSMALLINT-\u003eCString-\u003eSQLSMALLINT-\u003eCString-\u003eSQLSMALLINT-\u003eIO SQLRETURN",
          "package": "hsql-odbc",
          "partial": "Tables",
          "signature": "HSTMT-\u003eCString-\u003eSQLSMALLINT-\u003eCString-\u003eSQLSMALLINT-\u003eCString-\u003eSQLSMALLINT-\u003eCString-\u003eSQLSMALLINT-\u003eIO SQLRETURN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Functions.html#v:sqlTables"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Functions",
          "name": "sqlTransact",
          "package": "hsql-odbc",
          "signature": "HENV -\u003e HDBC -\u003e SQLUSMALLINT -\u003e IO SQLRETURN",
          "source": "src/DB-HSQL-ODBC-Functions.html#sqlTransact",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Functions",
          "module": "DB.HSQL.ODBC.Functions",
          "name": "sqlTransact",
          "normalized": "HENV-\u003eHDBC-\u003eSQLUSMALLINT-\u003eIO SQLRETURN",
          "package": "hsql-odbc",
          "partial": "Transact",
          "signature": "HENV-\u003eHDBC-\u003eSQLUSMALLINT-\u003eIO SQLRETURN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Functions.html#v:sqlTransact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Status",
          "name": "Status",
          "package": "hsql-odbc",
          "source": "src/DB-HSQL-ODBC-Status.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Status",
          "module": "DB.HSQL.ODBC.Status",
          "name": "Status",
          "package": "hsql-odbc",
          "partial": "Status",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Status.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Status",
          "name": "sqlError",
          "package": "hsql-odbc",
          "signature": "SQLRETURN",
          "source": "src/DB-HSQL-ODBC-Status.html#sqlError",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Status",
          "module": "DB.HSQL.ODBC.Status",
          "name": "sqlError",
          "package": "hsql-odbc",
          "partial": "Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Status.html#v:sqlError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Status",
          "name": "sqlInvalidHandle",
          "package": "hsql-odbc",
          "signature": "SQLRETURN",
          "source": "src/DB-HSQL-ODBC-Status.html#sqlInvalidHandle",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Status",
          "module": "DB.HSQL.ODBC.Status",
          "name": "sqlInvalidHandle",
          "package": "hsql-odbc",
          "partial": "Invalid Handle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Status.html#v:sqlInvalidHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Status",
          "name": "sqlNeedData",
          "package": "hsql-odbc",
          "signature": "SQLRETURN",
          "source": "src/DB-HSQL-ODBC-Status.html#sqlNeedData",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Status",
          "module": "DB.HSQL.ODBC.Status",
          "name": "sqlNeedData",
          "package": "hsql-odbc",
          "partial": "Need Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Status.html#v:sqlNeedData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Status",
          "name": "sqlNoData",
          "package": "hsql-odbc",
          "signature": "SQLRETURN",
          "source": "src/DB-HSQL-ODBC-Status.html#sqlNoData",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Status",
          "module": "DB.HSQL.ODBC.Status",
          "name": "sqlNoData",
          "package": "hsql-odbc",
          "partial": "No Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Status.html#v:sqlNoData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Status",
          "name": "sqlStillExecuting",
          "package": "hsql-odbc",
          "signature": "SQLRETURN",
          "source": "src/DB-HSQL-ODBC-Status.html#sqlStillExecuting",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Status",
          "module": "DB.HSQL.ODBC.Status",
          "name": "sqlStillExecuting",
          "package": "hsql-odbc",
          "partial": "Still Executing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Status.html#v:sqlStillExecuting"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Status",
          "name": "sqlSuccess",
          "package": "hsql-odbc",
          "signature": "SQLRETURN",
          "source": "src/DB-HSQL-ODBC-Status.html#sqlSuccess",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Status",
          "module": "DB.HSQL.ODBC.Status",
          "name": "sqlSuccess",
          "package": "hsql-odbc",
          "partial": "Success",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Status.html#v:sqlSuccess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Status",
          "name": "sqlSuccessWithInfo",
          "package": "hsql-odbc",
          "signature": "SQLRETURN",
          "source": "src/DB-HSQL-ODBC-Status.html#sqlSuccessWithInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Status",
          "module": "DB.HSQL.ODBC.Status",
          "name": "sqlSuccessWithInfo",
          "package": "hsql-odbc",
          "partial": "Success With Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Status.html#v:sqlSuccessWithInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Type",
          "name": "Type",
          "package": "hsql-odbc",
          "source": "src/DB-HSQL-ODBC-Type.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Type",
          "module": "DB.HSQL.ODBC.Type",
          "name": "Type",
          "package": "hsql-odbc",
          "partial": "Type",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Type.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Type",
          "name": "HDBC",
          "package": "hsql-odbc",
          "source": "src/DB-HSQL-ODBC-Type.html#HDBC",
          "type": "type"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Type",
          "module": "DB.HSQL.ODBC.Type",
          "name": "HDBC",
          "package": "hsql-odbc",
          "partial": "HDBC",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Type.html#t:HDBC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Type",
          "name": "HENV",
          "package": "hsql-odbc",
          "source": "src/DB-HSQL-ODBC-Type.html#HENV",
          "type": "type"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Type",
          "module": "DB.HSQL.ODBC.Type",
          "name": "HENV",
          "package": "hsql-odbc",
          "partial": "HENV",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Type.html#t:HENV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Type",
          "name": "HENVRef",
          "package": "hsql-odbc",
          "source": "src/DB-HSQL-ODBC-Type.html#HENVRef",
          "type": "type"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Type",
          "module": "DB.HSQL.ODBC.Type",
          "name": "HENVRef",
          "package": "hsql-odbc",
          "partial": "HENVRef",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Type.html#t:HENVRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Type",
          "name": "HSTMT",
          "package": "hsql-odbc",
          "source": "src/DB-HSQL-ODBC-Type.html#HSTMT",
          "type": "type"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Type",
          "module": "DB.HSQL.ODBC.Type",
          "name": "HSTMT",
          "package": "hsql-odbc",
          "partial": "HSTMT",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Type.html#t:HSTMT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Type",
          "name": "SQLHANDLE",
          "package": "hsql-odbc",
          "source": "src/DB-HSQL-ODBC-Type.html#SQLHANDLE",
          "type": "type"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Type",
          "module": "DB.HSQL.ODBC.Type",
          "name": "SQLHANDLE",
          "package": "hsql-odbc",
          "partial": "SQLHANDLE",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Type.html#t:SQLHANDLE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Type",
          "name": "SQLINTEGER",
          "package": "hsql-odbc",
          "source": "src/DB-HSQL-ODBC-Type.html#SQLINTEGER",
          "type": "type"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Type",
          "module": "DB.HSQL.ODBC.Type",
          "name": "SQLINTEGER",
          "package": "hsql-odbc",
          "partial": "SQLINTEGER",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Type.html#t:SQLINTEGER"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Type",
          "name": "SQLLEN",
          "package": "hsql-odbc",
          "source": "src/DB-HSQL-ODBC-Type.html#SQLLEN",
          "type": "type"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Type",
          "module": "DB.HSQL.ODBC.Type",
          "name": "SQLLEN",
          "package": "hsql-odbc",
          "partial": "SQLLEN",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Type.html#t:SQLLEN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Type",
          "name": "SQLRETURN",
          "package": "hsql-odbc",
          "source": "src/DB-HSQL-ODBC-Type.html#SQLRETURN",
          "type": "type"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Type",
          "module": "DB.HSQL.ODBC.Type",
          "name": "SQLRETURN",
          "package": "hsql-odbc",
          "partial": "SQLRETURN",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Type.html#t:SQLRETURN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Type",
          "name": "SQLSMALLINT",
          "package": "hsql-odbc",
          "source": "src/DB-HSQL-ODBC-Type.html#SQLSMALLINT",
          "type": "type"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Type",
          "module": "DB.HSQL.ODBC.Type",
          "name": "SQLSMALLINT",
          "package": "hsql-odbc",
          "partial": "SQLSMALLINT",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Type.html#t:SQLSMALLINT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Type",
          "name": "SQLUINTEGER",
          "package": "hsql-odbc",
          "source": "src/DB-HSQL-ODBC-Type.html#SQLUINTEGER",
          "type": "type"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Type",
          "module": "DB.HSQL.ODBC.Type",
          "name": "SQLUINTEGER",
          "package": "hsql-odbc",
          "partial": "SQLUINTEGER",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Type.html#t:SQLUINTEGER"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Type",
          "name": "SQLULEN",
          "package": "hsql-odbc",
          "source": "src/DB-HSQL-ODBC-Type.html#SQLULEN",
          "type": "type"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Type",
          "module": "DB.HSQL.ODBC.Type",
          "name": "SQLULEN",
          "package": "hsql-odbc",
          "partial": "SQLULEN",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Type.html#t:SQLULEN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Type",
          "name": "SQLUSMALLINT",
          "package": "hsql-odbc",
          "source": "src/DB-HSQL-ODBC-Type.html#SQLUSMALLINT",
          "type": "type"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Type",
          "module": "DB.HSQL.ODBC.Type",
          "name": "SQLUSMALLINT",
          "package": "hsql-odbc",
          "partial": "SQLUSMALLINT",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Type.html#t:SQLUSMALLINT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Type",
          "name": "mkSqlType",
          "package": "hsql-odbc",
          "signature": "SQLSMALLINT -\u003e SQLULEN -\u003e SQLSMALLINT -\u003e SqlType",
          "source": "src/DB-HSQL-ODBC-Type.html#mkSqlType",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Type",
          "module": "DB.HSQL.ODBC.Type",
          "name": "mkSqlType",
          "normalized": "SQLSMALLINT-\u003eSQLULEN-\u003eSQLSMALLINT-\u003eSqlType",
          "package": "hsql-odbc",
          "partial": "Sql Type",
          "signature": "SQLSMALLINT-\u003eSQLULEN-\u003eSQLSMALLINT-\u003eSqlType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Type.html#v:mkSqlType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Type",
          "name": "sqlBigint",
          "package": "hsql-odbc",
          "signature": "Integer",
          "source": "src/DB-HSQL-ODBC-Type.html#sqlBigint",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Type",
          "module": "DB.HSQL.ODBC.Type",
          "name": "sqlBigint",
          "package": "hsql-odbc",
          "partial": "Bigint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Type.html#v:sqlBigint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Type",
          "name": "sqlBinary",
          "package": "hsql-odbc",
          "signature": "Integer",
          "source": "src/DB-HSQL-ODBC-Type.html#sqlBinary",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Type",
          "module": "DB.HSQL.ODBC.Type",
          "name": "sqlBinary",
          "package": "hsql-odbc",
          "partial": "Binary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Type.html#v:sqlBinary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Type",
          "name": "sqlBit",
          "package": "hsql-odbc",
          "signature": "Integer",
          "source": "src/DB-HSQL-ODBC-Type.html#sqlBit",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Type",
          "module": "DB.HSQL.ODBC.Type",
          "name": "sqlBit",
          "package": "hsql-odbc",
          "partial": "Bit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Type.html#v:sqlBit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e#const\n\u003c/p\u003e",
          "module": "DB.HSQL.ODBC.Type",
          "name": "sqlChar",
          "package": "hsql-odbc",
          "signature": "Integer",
          "source": "src/DB-HSQL-ODBC-Type.html#sqlChar",
          "type": "function"
        },
        "index": {
          "description": "const",
          "hierarchy": "DB HSQL ODBC Type",
          "module": "DB.HSQL.ODBC.Type",
          "name": "sqlChar",
          "package": "hsql-odbc",
          "partial": "Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Type.html#v:sqlChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Type",
          "name": "sqlDate",
          "package": "hsql-odbc",
          "signature": "Integer",
          "source": "src/DB-HSQL-ODBC-Type.html#sqlDate",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Type",
          "module": "DB.HSQL.ODBC.Type",
          "name": "sqlDate",
          "package": "hsql-odbc",
          "partial": "Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Type.html#v:sqlDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Type",
          "name": "sqlDecimal",
          "package": "hsql-odbc",
          "signature": "Integer",
          "source": "src/DB-HSQL-ODBC-Type.html#sqlDecimal",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Type",
          "module": "DB.HSQL.ODBC.Type",
          "name": "sqlDecimal",
          "package": "hsql-odbc",
          "partial": "Decimal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Type.html#v:sqlDecimal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Type",
          "name": "sqlDouble",
          "package": "hsql-odbc",
          "signature": "Integer",
          "source": "src/DB-HSQL-ODBC-Type.html#sqlDouble",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Type",
          "module": "DB.HSQL.ODBC.Type",
          "name": "sqlDouble",
          "package": "hsql-odbc",
          "partial": "Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Type.html#v:sqlDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Type",
          "name": "sqlFloat",
          "package": "hsql-odbc",
          "signature": "Integer",
          "source": "src/DB-HSQL-ODBC-Type.html#sqlFloat",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Type",
          "module": "DB.HSQL.ODBC.Type",
          "name": "sqlFloat",
          "package": "hsql-odbc",
          "partial": "Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Type.html#v:sqlFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Type",
          "name": "sqlInteger",
          "package": "hsql-odbc",
          "signature": "Integer",
          "source": "src/DB-HSQL-ODBC-Type.html#sqlInteger",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Type",
          "module": "DB.HSQL.ODBC.Type",
          "name": "sqlInteger",
          "package": "hsql-odbc",
          "partial": "Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Type.html#v:sqlInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Type",
          "name": "sqlLongVarBinary",
          "package": "hsql-odbc",
          "signature": "Integer",
          "source": "src/DB-HSQL-ODBC-Type.html#sqlLongVarBinary",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Type",
          "module": "DB.HSQL.ODBC.Type",
          "name": "sqlLongVarBinary",
          "package": "hsql-odbc",
          "partial": "Long Var Binary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Type.html#v:sqlLongVarBinary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Type",
          "name": "sqlLongVarChar",
          "package": "hsql-odbc",
          "signature": "Integer",
          "source": "src/DB-HSQL-ODBC-Type.html#sqlLongVarChar",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Type",
          "module": "DB.HSQL.ODBC.Type",
          "name": "sqlLongVarChar",
          "package": "hsql-odbc",
          "partial": "Long Var Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Type.html#v:sqlLongVarChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Type",
          "name": "sqlNumeric",
          "package": "hsql-odbc",
          "signature": "Integer",
          "source": "src/DB-HSQL-ODBC-Type.html#sqlNumeric",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Type",
          "module": "DB.HSQL.ODBC.Type",
          "name": "sqlNumeric",
          "package": "hsql-odbc",
          "partial": "Numeric",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Type.html#v:sqlNumeric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Type",
          "name": "sqlReal",
          "package": "hsql-odbc",
          "signature": "Integer",
          "source": "src/DB-HSQL-ODBC-Type.html#sqlReal",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Type",
          "module": "DB.HSQL.ODBC.Type",
          "name": "sqlReal",
          "package": "hsql-odbc",
          "partial": "Real",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Type.html#v:sqlReal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Type",
          "name": "sqlSmallint",
          "package": "hsql-odbc",
          "signature": "Integer",
          "source": "src/DB-HSQL-ODBC-Type.html#sqlSmallint",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Type",
          "module": "DB.HSQL.ODBC.Type",
          "name": "sqlSmallint",
          "package": "hsql-odbc",
          "partial": "Smallint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Type.html#v:sqlSmallint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Type",
          "name": "sqlTime",
          "package": "hsql-odbc",
          "signature": "Integer",
          "source": "src/DB-HSQL-ODBC-Type.html#sqlTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Type",
          "module": "DB.HSQL.ODBC.Type",
          "name": "sqlTime",
          "package": "hsql-odbc",
          "partial": "Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Type.html#v:sqlTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Type",
          "name": "sqlTimestamp",
          "package": "hsql-odbc",
          "signature": "Integer",
          "source": "src/DB-HSQL-ODBC-Type.html#sqlTimestamp",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Type",
          "module": "DB.HSQL.ODBC.Type",
          "name": "sqlTimestamp",
          "package": "hsql-odbc",
          "partial": "Timestamp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Type.html#v:sqlTimestamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Type",
          "name": "sqlTinyInt",
          "package": "hsql-odbc",
          "signature": "Integer",
          "source": "src/DB-HSQL-ODBC-Type.html#sqlTinyInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Type",
          "module": "DB.HSQL.ODBC.Type",
          "name": "sqlTinyInt",
          "package": "hsql-odbc",
          "partial": "Tiny Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Type.html#v:sqlTinyInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Type",
          "name": "sqlVarBinary",
          "package": "hsql-odbc",
          "signature": "Integer",
          "source": "src/DB-HSQL-ODBC-Type.html#sqlVarBinary",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Type",
          "module": "DB.HSQL.ODBC.Type",
          "name": "sqlVarBinary",
          "package": "hsql-odbc",
          "partial": "Var Binary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Type.html#v:sqlVarBinary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Type",
          "name": "sqlVarChar",
          "package": "hsql-odbc",
          "signature": "Integer",
          "source": "src/DB-HSQL-ODBC-Type.html#sqlVarChar",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Type",
          "module": "DB.HSQL.ODBC.Type",
          "name": "sqlVarChar",
          "package": "hsql-odbc",
          "partial": "Var Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Type.html#v:sqlVarChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Type",
          "name": "sqlWChar",
          "package": "hsql-odbc",
          "signature": "Integer",
          "source": "src/DB-HSQL-ODBC-Type.html#sqlWChar",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Type",
          "module": "DB.HSQL.ODBC.Type",
          "name": "sqlWChar",
          "package": "hsql-odbc",
          "partial": "WChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Type.html#v:sqlWChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Type",
          "name": "sqlWLongVarChar",
          "package": "hsql-odbc",
          "signature": "Integer",
          "source": "src/DB-HSQL-ODBC-Type.html#sqlWLongVarChar",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Type",
          "module": "DB.HSQL.ODBC.Type",
          "name": "sqlWLongVarChar",
          "package": "hsql-odbc",
          "partial": "WLong Var Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Type.html#v:sqlWLongVarChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.ODBC.Type",
          "name": "sqlWVarChar",
          "package": "hsql-odbc",
          "signature": "Integer",
          "source": "src/DB-HSQL-ODBC-Type.html#sqlWVarChar",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL ODBC Type",
          "module": "DB.HSQL.ODBC.Type",
          "name": "sqlWVarChar",
          "package": "hsql-odbc",
          "partial": "WVar Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/DB-HSQL-ODBC-Type.html#v:sqlWVarChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HSQL.ODBC",
          "name": "ODBC",
          "package": "hsql-odbc",
          "source": "src/Database-HSQL-ODBC.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Database HSQL ODBC",
          "module": "Database.HSQL.ODBC",
          "name": "ODBC",
          "package": "hsql-odbc",
          "partial": "ODBC",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/Database-HSQL-ODBC.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMakes a new connection to the ODBC data source\n\u003c/p\u003e",
          "module": "Database.HSQL.ODBC",
          "name": "connect",
          "package": "hsql-odbc",
          "signature": "String-\u003e String-\u003e String-\u003e IO Connection",
          "type": "function"
        },
        "index": {
          "description": "Makes new connection to the ODBC data source",
          "hierarchy": "Database HSQL ODBC",
          "module": "Database.HSQL.ODBC",
          "name": "connect",
          "normalized": "String-\u003eString-\u003eString-\u003eIO Connection",
          "package": "hsql-odbc",
          "signature": "String-\u003eString-\u003eString-\u003eIO Connection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/Database-HSQL-ODBC.html#v:connect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edriverConnect\u003c/a\u003e\u003c/code\u003e is an alternative to \u003ccode\u003e\u003ca\u003econnect\u003c/a\u003e\u003c/code\u003e. It supports data sources\n that require more connection information than the three arguments in\n \u003ccode\u003e\u003ca\u003econnect\u003c/a\u003e\u003c/code\u003e and data sources that are not defined in the system information.\n\u003c/p\u003e",
          "module": "Database.HSQL.ODBC",
          "name": "driverConnect",
          "package": "hsql-odbc",
          "signature": "String-\u003e IO Connection",
          "type": "function"
        },
        "index": {
          "description": "driverConnect is an alternative to connect It supports data sources that require more connection information than the three arguments in connect and data sources that are not defined in the system information",
          "hierarchy": "Database HSQL ODBC",
          "module": "Database.HSQL.ODBC",
          "name": "driverConnect",
          "normalized": "String-\u003eIO Connection",
          "package": "hsql-odbc",
          "partial": "Connect",
          "signature": "String-\u003eIO Connection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-odbc/docs/Database-HSQL-ODBC.html#v:driverConnect"
      }
    }
  ]
]