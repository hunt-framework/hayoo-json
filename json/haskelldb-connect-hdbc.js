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
        "word": "haskelldb-connect-hdbc"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBracketed HaskellDB session with \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.HaskellDB.Connect.HDBC.Simple",
          "name": "Simple",
          "package": "haskelldb-connect-hdbc",
          "source": "src/Database-HaskellDB-Connect-HDBC-Simple.html",
          "type": "module"
        },
        "index": {
          "description": "Bracketed HaskellDB session with IO",
          "hierarchy": "Database HaskellDB Connect HDBC Simple",
          "module": "Database.HaskellDB.Connect.HDBC.Simple",
          "name": "Simple",
          "package": "haskelldb-connect-hdbc",
          "partial": "Simple",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb-connect-hdbc/docs/Database-HaskellDB-Connect-HDBC-Simple.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun an action on a HDBC \u003ccode\u003e\u003ca\u003eIConnection\u003c/a\u003e\u003c/code\u003e and close the connection.\n   Simple \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e version.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.Connect.HDBC.Simple",
          "name": "hdbcSession",
          "package": "haskelldb-connect-hdbc",
          "signature": "SqlGenerator-\u003e IO conn-\u003e (conn -\u003e Database -\u003e IO a)-\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "Run an action on HDBC IConnection and close the connection Simple IO version",
          "hierarchy": "Database HaskellDB Connect HDBC Simple",
          "module": "Database.HaskellDB.Connect.HDBC.Simple",
          "name": "hdbcSession",
          "normalized": "SqlGenerator-\u003eIO a-\u003e(a-\u003eDatabase-\u003eIO b)-\u003eIO b",
          "package": "haskelldb-connect-hdbc",
          "partial": "Session",
          "signature": "SqlGenerator-\u003eIO conn-\u003e(conn-\u003eDatabase-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb-connect-hdbc/docs/Database-HaskellDB-Connect-HDBC-Simple.html#v:hdbcSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBracketed session for HaskellDB with HDBC\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.HaskellDB.Connect.HDBC",
          "name": "HDBC",
          "package": "haskelldb-connect-hdbc",
          "source": "src/Database-HaskellDB-Connect-HDBC.html",
          "type": "module"
        },
        "index": {
          "description": "Bracketed session for HaskellDB with HDBC",
          "hierarchy": "Database HaskellDB Connect HDBC",
          "module": "Database.HaskellDB.Connect.HDBC",
          "name": "HDBC",
          "package": "haskelldb-connect-hdbc",
          "partial": "HDBC",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb-connect-hdbc/docs/Database-HaskellDB-Connect-HDBC.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun an action on a HDBC IConnection and close the connection.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.Connect.HDBC",
          "name": "makeHDBCSession",
          "package": "haskelldb-connect-hdbc",
          "signature": "(m conn -\u003e (conn -\u003e m ()) -\u003e (conn -\u003e m a) -\u003e m a)-\u003e (forall b.  IO b -\u003e m b)-\u003e SqlGenerator-\u003e IO conn-\u003e (conn -\u003e Database -\u003e m a)-\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "Run an action on HDBC IConnection and close the connection",
          "hierarchy": "Database HaskellDB Connect HDBC",
          "module": "Database.HaskellDB.Connect.HDBC",
          "name": "makeHDBCSession",
          "normalized": "(a b-\u003e(b-\u003ea())-\u003e(b-\u003ea c)-\u003ea c)-\u003e(d e IO f-\u003ea f)-\u003eSqlGenerator-\u003eIO b-\u003e(b-\u003eDatabase-\u003ea c)-\u003ea c",
          "package": "haskelldb-connect-hdbc",
          "partial": "HDBCSession",
          "signature": "(m conn-\u003e(conn-\u003em())-\u003e(conn-\u003em a)-\u003em a)-\u003e(forall b. IO b-\u003em b)-\u003eSqlGenerator-\u003eIO conn-\u003e(conn-\u003eDatabase-\u003em a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb-connect-hdbc/docs/Database-HaskellDB-Connect-HDBC.html#v:makeHDBCSession"
      }
    }
  ]
]