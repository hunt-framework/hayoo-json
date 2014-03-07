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
        "word": "hsql-postgresql"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.PG.Core",
          "name": "Core",
          "package": "hsql-postgresql",
          "source": "src/DB-HSQL-PG-Core.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "DB HSQL PG Core",
          "module": "DB.HSQL.PG.Core",
          "name": "Core",
          "package": "hsql-postgresql",
          "partial": "Core",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsql-postgresql/docs/DB-HSQL-PG-Core.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.PG.Core",
          "name": "execute",
          "package": "hsql-postgresql",
          "signature": "PGconn -\u003e String -\u003e IO ()",
          "source": "src/DB-HSQL-PG-Core.html#execute",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL PG Core",
          "module": "DB.HSQL.PG.Core",
          "name": "execute",
          "normalized": "PGconn-\u003eString-\u003eIO()",
          "package": "hsql-postgresql",
          "signature": "PGconn-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-postgresql/docs/DB-HSQL-PG-Core.html#v:execute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.PG.Core",
          "name": "fetch",
          "package": "hsql-postgresql",
          "signature": "MVar Int -\u003e Int -\u003e IO Bool",
          "source": "src/DB-HSQL-PG-Core.html#fetch",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL PG Core",
          "module": "DB.HSQL.PG.Core",
          "name": "fetch",
          "normalized": "MVar Int-\u003eInt-\u003eIO Bool",
          "package": "hsql-postgresql",
          "signature": "MVar Int-\u003eInt-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-postgresql/docs/DB-HSQL-PG-Core.html#v:fetch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.PG.Core",
          "name": "getColValue",
          "package": "hsql-postgresql",
          "signature": "PGresult -\u003e MVar Int -\u003e Int -\u003e Int -\u003e ColDef -\u003e (ColDef -\u003e CString -\u003e Int -\u003e IO a) -\u003e IO a",
          "source": "src/DB-HSQL-PG-Core.html#getColValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL PG Core",
          "module": "DB.HSQL.PG.Core",
          "name": "getColValue",
          "normalized": "PGresult-\u003eMVar Int-\u003eInt-\u003eInt-\u003eColDef-\u003e(ColDef-\u003eCString-\u003eInt-\u003eIO a)-\u003eIO a",
          "package": "hsql-postgresql",
          "partial": "Col Value",
          "signature": "PGresult-\u003eMVar Int-\u003eInt-\u003eInt-\u003eColDef-\u003e(ColDef-\u003eCString-\u003eInt-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-postgresql/docs/DB-HSQL-PG-Core.html#v:getColValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert string by newCString, if provided, else return of nullPtr\n\u003c/p\u003e",
          "module": "DB.HSQL.PG.Core",
          "name": "newCStringElseNullPtr",
          "package": "hsql-postgresql",
          "signature": "Maybe String -\u003e IO CString",
          "source": "src/DB-HSQL-PG-Core.html#newCStringElseNullPtr",
          "type": "function"
        },
        "index": {
          "description": "Convert string by newCString if provided else return of nullPtr",
          "hierarchy": "DB HSQL PG Core",
          "module": "DB.HSQL.PG.Core",
          "name": "newCStringElseNullPtr",
          "normalized": "Maybe String-\u003eIO CString",
          "package": "hsql-postgresql",
          "partial": "CString Else Null Ptr",
          "signature": "Maybe String-\u003eIO CString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-postgresql/docs/DB-HSQL-PG-Core.html#v:newCStringElseNullPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.PG.Core",
          "name": "query",
          "package": "hsql-postgresql",
          "signature": "Connection -\u003e PGconn -\u003e String -\u003e IO Statement",
          "source": "src/DB-HSQL-PG-Core.html#query",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL PG Core",
          "module": "DB.HSQL.PG.Core",
          "name": "query",
          "normalized": "Connection-\u003ePGconn-\u003eString-\u003eIO Statement",
          "package": "hsql-postgresql",
          "signature": "Connection-\u003ePGconn-\u003eString-\u003eIO Statement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-postgresql/docs/DB-HSQL-PG-Core.html#v:query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInterface to the functions of the the foreign code environment.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DB.HSQL.PG.Functions",
          "name": "Functions",
          "package": "hsql-postgresql",
          "source": "src/DB-HSQL-PG-Functions.html",
          "type": "module"
        },
        "index": {
          "description": "Interface to the functions of the the foreign code environment",
          "hierarchy": "DB HSQL PG Functions",
          "module": "DB.HSQL.PG.Functions",
          "name": "Functions",
          "package": "hsql-postgresql",
          "partial": "Functions",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsql-postgresql/docs/DB-HSQL-PG-Functions.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.PG.Functions",
          "name": "PGconn",
          "package": "hsql-postgresql",
          "source": "src/DB-HSQL-PG-Functions.html#PGconn",
          "type": "type"
        },
        "index": {
          "hierarchy": "DB HSQL PG Functions",
          "module": "DB.HSQL.PG.Functions",
          "name": "PGconn",
          "package": "hsql-postgresql",
          "partial": "PGconn",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsql-postgresql/docs/DB-HSQL-PG-Functions.html#t:PGconn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.PG.Functions",
          "name": "PGresult",
          "package": "hsql-postgresql",
          "source": "src/DB-HSQL-PG-Functions.html#PGresult",
          "type": "type"
        },
        "index": {
          "hierarchy": "DB HSQL PG Functions",
          "module": "DB.HSQL.PG.Functions",
          "name": "PGresult",
          "package": "hsql-postgresql",
          "partial": "PGresult",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsql-postgresql/docs/DB-HSQL-PG-Functions.html#t:PGresult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.PG.Functions",
          "name": "pgFName",
          "package": "hsql-postgresql",
          "signature": "PGresult -\u003e Int -\u003e IO CString",
          "source": "src/DB-HSQL-PG-Functions.html#pgFName",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL PG Functions",
          "module": "DB.HSQL.PG.Functions",
          "name": "pgFName",
          "normalized": "PGresult-\u003eInt-\u003eIO CString",
          "package": "hsql-postgresql",
          "partial": "FName",
          "signature": "PGresult-\u003eInt-\u003eIO CString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-postgresql/docs/DB-HSQL-PG-Functions.html#v:pgFName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.PG.Functions",
          "name": "pgNFields",
          "package": "hsql-postgresql",
          "signature": "PGresult -\u003e IO Int",
          "source": "src/DB-HSQL-PG-Functions.html#pgNFields",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL PG Functions",
          "module": "DB.HSQL.PG.Functions",
          "name": "pgNFields",
          "normalized": "PGresult-\u003eIO Int",
          "package": "hsql-postgresql",
          "partial": "NFields",
          "signature": "PGresult-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-postgresql/docs/DB-HSQL-PG-Functions.html#v:pgNFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.PG.Functions",
          "name": "pqErrorMessage",
          "package": "hsql-postgresql",
          "signature": "PGconn -\u003e IO CString",
          "source": "src/DB-HSQL-PG-Functions.html#pqErrorMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL PG Functions",
          "module": "DB.HSQL.PG.Functions",
          "name": "pqErrorMessage",
          "normalized": "PGconn-\u003eIO CString",
          "package": "hsql-postgresql",
          "partial": "Error Message",
          "signature": "PGconn-\u003eIO CString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-postgresql/docs/DB-HSQL-PG-Functions.html#v:pqErrorMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.PG.Functions",
          "name": "pqExec",
          "package": "hsql-postgresql",
          "signature": "PGconn -\u003e CString -\u003e IO PGresult",
          "source": "src/DB-HSQL-PG-Functions.html#pqExec",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL PG Functions",
          "module": "DB.HSQL.PG.Functions",
          "name": "pqExec",
          "normalized": "PGconn-\u003eCString-\u003eIO PGresult",
          "package": "hsql-postgresql",
          "partial": "Exec",
          "signature": "PGconn-\u003eCString-\u003eIO PGresult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-postgresql/docs/DB-HSQL-PG-Functions.html#v:pqExec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.PG.Functions",
          "name": "pqFMod",
          "package": "hsql-postgresql",
          "signature": "PGresult -\u003e Int -\u003e IO Int",
          "source": "src/DB-HSQL-PG-Functions.html#pqFMod",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL PG Functions",
          "module": "DB.HSQL.PG.Functions",
          "name": "pqFMod",
          "normalized": "PGresult-\u003eInt-\u003eIO Int",
          "package": "hsql-postgresql",
          "partial": "FMod",
          "signature": "PGresult-\u003eInt-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-postgresql/docs/DB-HSQL-PG-Functions.html#v:pqFMod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.PG.Functions",
          "name": "pqFNumber",
          "package": "hsql-postgresql",
          "signature": "PGresult -\u003e CString -\u003e IO Int",
          "source": "src/DB-HSQL-PG-Functions.html#pqFNumber",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL PG Functions",
          "module": "DB.HSQL.PG.Functions",
          "name": "pqFNumber",
          "normalized": "PGresult-\u003eCString-\u003eIO Int",
          "package": "hsql-postgresql",
          "partial": "FNumber",
          "signature": "PGresult-\u003eCString-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-postgresql/docs/DB-HSQL-PG-Functions.html#v:pqFNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.PG.Functions",
          "name": "pqFType",
          "package": "hsql-postgresql",
          "signature": "PGresult -\u003e Int -\u003e IO Oid",
          "source": "src/DB-HSQL-PG-Functions.html#pqFType",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL PG Functions",
          "module": "DB.HSQL.PG.Functions",
          "name": "pqFType",
          "normalized": "PGresult-\u003eInt-\u003eIO Oid",
          "package": "hsql-postgresql",
          "partial": "FType",
          "signature": "PGresult-\u003eInt-\u003eIO Oid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-postgresql/docs/DB-HSQL-PG-Functions.html#v:pqFType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.PG.Functions",
          "name": "pqFinish",
          "package": "hsql-postgresql",
          "signature": "PGconn -\u003e IO ()",
          "source": "src/DB-HSQL-PG-Functions.html#pqFinish",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL PG Functions",
          "module": "DB.HSQL.PG.Functions",
          "name": "pqFinish",
          "normalized": "PGconn-\u003eIO()",
          "package": "hsql-postgresql",
          "partial": "Finish",
          "signature": "PGconn-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-postgresql/docs/DB-HSQL-PG-Functions.html#v:pqFinish"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.PG.Functions",
          "name": "pqGetisnull",
          "package": "hsql-postgresql",
          "signature": "PGresult -\u003e Int -\u003e Int -\u003e IO Int",
          "source": "src/DB-HSQL-PG-Functions.html#pqGetisnull",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL PG Functions",
          "module": "DB.HSQL.PG.Functions",
          "name": "pqGetisnull",
          "normalized": "PGresult-\u003eInt-\u003eInt-\u003eIO Int",
          "package": "hsql-postgresql",
          "partial": "Getisnull",
          "signature": "PGresult-\u003eInt-\u003eInt-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-postgresql/docs/DB-HSQL-PG-Functions.html#v:pqGetisnull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.PG.Functions",
          "name": "pqGetvalue",
          "package": "hsql-postgresql",
          "signature": "PGresult -\u003e Int -\u003e Int -\u003e IO CString",
          "source": "src/DB-HSQL-PG-Functions.html#pqGetvalue",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL PG Functions",
          "module": "DB.HSQL.PG.Functions",
          "name": "pqGetvalue",
          "normalized": "PGresult-\u003eInt-\u003eInt-\u003eIO CString",
          "package": "hsql-postgresql",
          "partial": "Getvalue",
          "signature": "PGresult-\u003eInt-\u003eInt-\u003eIO CString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-postgresql/docs/DB-HSQL-PG-Functions.html#v:pqGetvalue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.PG.Functions",
          "name": "pqNTuples",
          "package": "hsql-postgresql",
          "signature": "PGresult -\u003e IO Int",
          "source": "src/DB-HSQL-PG-Functions.html#pqNTuples",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL PG Functions",
          "module": "DB.HSQL.PG.Functions",
          "name": "pqNTuples",
          "normalized": "PGresult-\u003eIO Int",
          "package": "hsql-postgresql",
          "partial": "NTuples",
          "signature": "PGresult-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-postgresql/docs/DB-HSQL-PG-Functions.html#v:pqNTuples"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.PG.Functions",
          "name": "pqResStatus",
          "package": "hsql-postgresql",
          "signature": "ExecStatusType -\u003e IO CString",
          "source": "src/DB-HSQL-PG-Functions.html#pqResStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL PG Functions",
          "module": "DB.HSQL.PG.Functions",
          "name": "pqResStatus",
          "normalized": "ExecStatusType-\u003eIO CString",
          "package": "hsql-postgresql",
          "partial": "Res Status",
          "signature": "ExecStatusType-\u003eIO CString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-postgresql/docs/DB-HSQL-PG-Functions.html#v:pqResStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.PG.Functions",
          "name": "pqResultErrorMessage",
          "package": "hsql-postgresql",
          "signature": "PGresult -\u003e IO CString",
          "source": "src/DB-HSQL-PG-Functions.html#pqResultErrorMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL PG Functions",
          "module": "DB.HSQL.PG.Functions",
          "name": "pqResultErrorMessage",
          "normalized": "PGresult-\u003eIO CString",
          "package": "hsql-postgresql",
          "partial": "Result Error Message",
          "signature": "PGresult-\u003eIO CString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-postgresql/docs/DB-HSQL-PG-Functions.html#v:pqResultErrorMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.PG.Functions",
          "name": "pqResultStatus",
          "package": "hsql-postgresql",
          "signature": "PGresult -\u003e IO ExecStatusType",
          "source": "src/DB-HSQL-PG-Functions.html#pqResultStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL PG Functions",
          "module": "DB.HSQL.PG.Functions",
          "name": "pqResultStatus",
          "normalized": "PGresult-\u003eIO ExecStatusType",
          "package": "hsql-postgresql",
          "partial": "Result Status",
          "signature": "PGresult-\u003eIO ExecStatusType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-postgresql/docs/DB-HSQL-PG-Functions.html#v:pqResultStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRefer to PostgreSQL manual, chapter 30, `libpq - C library' \n    (e.g. http:\u003cem/\u003ewww.postgresql.org\u003cem\u003edocs\u003c/em\u003e8.3\u003cem\u003einteractive\u003c/em\u003elibpq.html)\n\u003c/p\u003e",
          "module": "DB.HSQL.PG.Functions",
          "name": "pqSetdbLogin",
          "package": "hsql-postgresql",
          "signature": "CString -\u003e CString -\u003e CString -\u003e CString -\u003e CString -\u003e CString -\u003e CString -\u003e IO PGconn",
          "source": "src/DB-HSQL-PG-Functions.html#pqSetdbLogin",
          "type": "function"
        },
        "index": {
          "description": "Refer to PostgreSQL manual chapter libpq library e.g http www.postgresql.org docs interactive libpq.html",
          "hierarchy": "DB HSQL PG Functions",
          "module": "DB.HSQL.PG.Functions",
          "name": "pqSetdbLogin",
          "normalized": "CString-\u003eCString-\u003eCString-\u003eCString-\u003eCString-\u003eCString-\u003eCString-\u003eIO PGconn",
          "package": "hsql-postgresql",
          "partial": "Setdb Login",
          "signature": "CString-\u003eCString-\u003eCString-\u003eCString-\u003eCString-\u003eCString-\u003eCString-\u003eIO PGconn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-postgresql/docs/DB-HSQL-PG-Functions.html#v:pqSetdbLogin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.PG.Functions",
          "name": "pqStatus",
          "package": "hsql-postgresql",
          "signature": "PGconn -\u003e IO ConnStatusType",
          "source": "src/DB-HSQL-PG-Functions.html#pqStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL PG Functions",
          "module": "DB.HSQL.PG.Functions",
          "name": "pqStatus",
          "normalized": "PGconn-\u003eIO ConnStatusType",
          "package": "hsql-postgresql",
          "partial": "Status",
          "signature": "PGconn-\u003eIO ConnStatusType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-postgresql/docs/DB-HSQL-PG-Functions.html#v:pqStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.PG.Functions",
          "name": "strlen",
          "package": "hsql-postgresql",
          "signature": "CString -\u003e IO Int",
          "source": "src/DB-HSQL-PG-Functions.html#strlen",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL PG Functions",
          "module": "DB.HSQL.PG.Functions",
          "name": "strlen",
          "normalized": "CString-\u003eIO Int",
          "package": "hsql-postgresql",
          "signature": "CString-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-postgresql/docs/DB-HSQL-PG-Functions.html#v:strlen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSQL queries.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DB.HSQL.PG.Sql",
          "name": "Sql",
          "package": "hsql-postgresql",
          "source": "src/DB-HSQL-PG-Sql.html",
          "type": "module"
        },
        "index": {
          "description": "SQL queries",
          "hierarchy": "DB HSQL PG Sql",
          "module": "DB.HSQL.PG.Sql",
          "name": "Sql",
          "package": "hsql-postgresql",
          "partial": "Sql",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsql-postgresql/docs/DB-HSQL-PG-Sql.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eretrieval of the field defs for a table name\n\u003c/p\u003e",
          "module": "DB.HSQL.PG.Sql",
          "name": "sqlAllFieldDefsForTableName",
          "package": "hsql-postgresql",
          "signature": "t -\u003e String",
          "source": "src/DB-HSQL-PG-Sql.html#sqlAllFieldDefsForTableName",
          "type": "function"
        },
        "index": {
          "description": "retrieval of the field defs for table name",
          "hierarchy": "DB HSQL PG Sql",
          "module": "DB.HSQL.PG.Sql",
          "name": "sqlAllFieldDefsForTableName",
          "normalized": "a-\u003eString",
          "package": "hsql-postgresql",
          "partial": "All Field Defs For Table Name",
          "signature": "t-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-postgresql/docs/DB-HSQL-PG-Sql.html#v:sqlAllFieldDefsForTableName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eretrieval of the names of all tables\n\u003c/p\u003e",
          "module": "DB.HSQL.PG.Sql",
          "name": "sqlAllTableNames",
          "package": "hsql-postgresql",
          "signature": "String",
          "source": "src/DB-HSQL-PG-Sql.html#sqlAllTableNames",
          "type": "function"
        },
        "index": {
          "description": "retrieval of the names of all tables",
          "hierarchy": "DB HSQL PG Sql",
          "module": "DB.HSQL.PG.Sql",
          "name": "sqlAllTableNames",
          "package": "hsql-postgresql",
          "partial": "All Table Names",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-postgresql/docs/DB-HSQL-PG-Sql.html#v:sqlAllTableNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.PG.Status",
          "name": "Status",
          "package": "hsql-postgresql",
          "source": "src/DB-HSQL-PG-Status.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "DB HSQL PG Status",
          "module": "DB.HSQL.PG.Status",
          "name": "Status",
          "package": "hsql-postgresql",
          "partial": "Status",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsql-postgresql/docs/DB-HSQL-PG-Status.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.PG.Status",
          "name": "ConnStatusType",
          "package": "hsql-postgresql",
          "source": "src/DB-HSQL-PG-Status.html#ConnStatusType",
          "type": "type"
        },
        "index": {
          "hierarchy": "DB HSQL PG Status",
          "module": "DB.HSQL.PG.Status",
          "name": "ConnStatusType",
          "package": "hsql-postgresql",
          "partial": "Conn Status Type",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsql-postgresql/docs/DB-HSQL-PG-Status.html#t:ConnStatusType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.PG.Status",
          "name": "ExecStatusType",
          "package": "hsql-postgresql",
          "source": "src/DB-HSQL-PG-Status.html#ExecStatusType",
          "type": "type"
        },
        "index": {
          "hierarchy": "DB HSQL PG Status",
          "module": "DB.HSQL.PG.Status",
          "name": "ExecStatusType",
          "package": "hsql-postgresql",
          "partial": "Exec Status Type",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsql-postgresql/docs/DB-HSQL-PG-Status.html#t:ExecStatusType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.PG.Status",
          "name": "connectionOk",
          "package": "hsql-postgresql",
          "signature": "ConnStatusType",
          "source": "src/DB-HSQL-PG-Status.html#connectionOk",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL PG Status",
          "module": "DB.HSQL.PG.Status",
          "name": "connectionOk",
          "package": "hsql-postgresql",
          "partial": "Ok",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-postgresql/docs/DB-HSQL-PG-Status.html#v:connectionOk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.PG.Status",
          "name": "pgCommandOk",
          "package": "hsql-postgresql",
          "signature": "ExecStatusType",
          "source": "src/DB-HSQL-PG-Status.html#pgCommandOk",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL PG Status",
          "module": "DB.HSQL.PG.Status",
          "name": "pgCommandOk",
          "package": "hsql-postgresql",
          "partial": "Command Ok",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-postgresql/docs/DB-HSQL-PG-Status.html#v:pgCommandOk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.PG.Status",
          "name": "pgFatalError",
          "package": "hsql-postgresql",
          "signature": "ExecStatusType",
          "source": "src/DB-HSQL-PG-Status.html#pgFatalError",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL PG Status",
          "module": "DB.HSQL.PG.Status",
          "name": "pgFatalError",
          "package": "hsql-postgresql",
          "partial": "Fatal Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-postgresql/docs/DB-HSQL-PG-Status.html#v:pgFatalError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.PG.Status",
          "name": "pgTuplesOk",
          "package": "hsql-postgresql",
          "signature": "ExecStatusType",
          "source": "src/DB-HSQL-PG-Status.html#pgTuplesOk",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL PG Status",
          "module": "DB.HSQL.PG.Status",
          "name": "pgTuplesOk",
          "package": "hsql-postgresql",
          "partial": "Tuples Ok",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-postgresql/docs/DB-HSQL-PG-Status.html#v:pgTuplesOk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.PG.Type",
          "name": "Type",
          "package": "hsql-postgresql",
          "source": "src/DB-HSQL-PG-Type.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "DB HSQL PG Type",
          "module": "DB.HSQL.PG.Type",
          "name": "Type",
          "package": "hsql-postgresql",
          "partial": "Type",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsql-postgresql/docs/DB-HSQL-PG-Type.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.PG.Type",
          "name": "Oid",
          "package": "hsql-postgresql",
          "source": "src/DB-HSQL-PG-Type.html#Oid",
          "type": "type"
        },
        "index": {
          "hierarchy": "DB HSQL PG Type",
          "module": "DB.HSQL.PG.Type",
          "name": "Oid",
          "package": "hsql-postgresql",
          "partial": "Oid",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsql-postgresql/docs/DB-HSQL-PG-Type.html#t:Oid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DB.HSQL.PG.Type",
          "name": "mkSqlType",
          "package": "hsql-postgresql",
          "signature": "Oid -\u003e Int -\u003e SqlType",
          "source": "src/DB-HSQL-PG-Type.html#mkSqlType",
          "type": "function"
        },
        "index": {
          "hierarchy": "DB HSQL PG Type",
          "module": "DB.HSQL.PG.Type",
          "name": "mkSqlType",
          "normalized": "Oid-\u003eInt-\u003eSqlType",
          "package": "hsql-postgresql",
          "partial": "Sql Type",
          "signature": "Oid-\u003eInt-\u003eSqlType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-postgresql/docs/DB-HSQL-PG-Type.html#v:mkSqlType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HSQL.PostgreSQL",
          "name": "PostgreSQL",
          "package": "hsql-postgresql",
          "source": "src/Database-HSQL-PostgreSQL.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Database HSQL PostgreSQL",
          "module": "Database.HSQL.PostgreSQL",
          "name": "PostgreSQL",
          "package": "hsql-postgresql",
          "partial": "Postgre SQL",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsql-postgresql/docs/Database-HSQL-PostgreSQL.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMakes a new connection to the database server\n\u003c/p\u003e",
          "module": "Database.HSQL.PostgreSQL",
          "name": "connect",
          "package": "hsql-postgresql",
          "signature": "String-\u003e String-\u003e String-\u003e String-\u003e IO Connection",
          "type": "function"
        },
        "index": {
          "description": "Makes new connection to the database server",
          "hierarchy": "Database HSQL PostgreSQL",
          "module": "Database.HSQL.PostgreSQL",
          "name": "connect",
          "normalized": "String-\u003eString-\u003eString-\u003eString-\u003eIO Connection",
          "package": "hsql-postgresql",
          "signature": "String-\u003eString-\u003eString-\u003eString-\u003eIO Connection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-postgresql/docs/Database-HSQL-PostgreSQL.html#v:connect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMakes a new connection to the database server,\n with specification of port, options & tty\n\u003c/p\u003e",
          "module": "Database.HSQL.PostgreSQL",
          "name": "connectWithOptions",
          "package": "hsql-postgresql",
          "signature": "String-\u003e Maybe String-\u003e Maybe String-\u003e Maybe String-\u003e String-\u003e String-\u003e String-\u003e IO Connection",
          "type": "function"
        },
        "index": {
          "description": "Makes new connection to the database server with specification of port options tty",
          "hierarchy": "Database HSQL PostgreSQL",
          "module": "Database.HSQL.PostgreSQL",
          "name": "connectWithOptions",
          "normalized": "String-\u003eMaybe String-\u003eMaybe String-\u003eMaybe String-\u003eString-\u003eString-\u003eString-\u003eIO Connection",
          "package": "hsql-postgresql",
          "partial": "With Options",
          "signature": "String-\u003eMaybe String-\u003eMaybe String-\u003eMaybe String-\u003eString-\u003eString-\u003eString-\u003eIO Connection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsql-postgresql/docs/Database-HSQL-PostgreSQL.html#v:connectWithOptions"
      }
    }
  ]
]