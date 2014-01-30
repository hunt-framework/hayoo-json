[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb-connect-hdbc/docs/Database-HaskellDB-Connect-HDBC-Simple.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBracketed HaskellDB session with \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.HaskellDB.Connect.HDBC.Simple",
        "fct-package": "haskelldb-connect-hdbc",
        "fct-signature": "module",
        "fct-source": "src/Database-HaskellDB-Connect-HDBC-Simple.html",
        "fct-type": "module",
        "title": "Simple"
      },
      "index": {
        "description": "Bracketed HaskellDB session with IO",
        "hierarchy": "Database HaskellDB Connect HDBC Simple",
        "module": "Database.HaskellDB.Connect.HDBC.Simple",
        "name": "Simple",
        "normalized": "",
        "package": "haskelldb-connect-hdbc",
        "partial": "Simple",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb-connect-hdbc/docs/Database-HaskellDB-Connect-HDBC-Simple.html#v:hdbcSession",
      "description": {
        "fct-descr": "\u003cp\u003eRun an action on a HDBC \u003ccode\u003e\u003ca\u003eIConnection\u003c/a\u003e\u003c/code\u003e and close the connection.\n   Simple \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e version.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Connect.HDBC.Simple",
        "fct-package": "haskelldb-connect-hdbc",
        "fct-signature": "SqlGenerator-\u003e IO conn-\u003e (conn -\u003e Database -\u003e IO a)-\u003e IO a",
        "fct-type": "function",
        "title": "hdbcSession"
      },
      "index": {
        "description": "Run an action on HDBC IConnection and close the connection Simple IO version",
        "hierarchy": "Database HaskellDB Connect HDBC Simple",
        "module": "Database.HaskellDB.Connect.HDBC.Simple",
        "name": "hdbcSession",
        "normalized": "SqlGenerator-\u003eIO a-\u003e(a-\u003eDatabase-\u003eIO b)-\u003eIO b",
        "package": "haskelldb-connect-hdbc",
        "partial": "Session",
        "signature": "SqlGenerator-\u003eIO conn-\u003e(conn-\u003eDatabase-\u003eIO a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb-connect-hdbc/docs/Database-HaskellDB-Connect-HDBC.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBracketed session for HaskellDB with HDBC\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.HaskellDB.Connect.HDBC",
        "fct-package": "haskelldb-connect-hdbc",
        "fct-signature": "module",
        "fct-source": "src/Database-HaskellDB-Connect-HDBC.html",
        "fct-type": "module",
        "title": "HDBC"
      },
      "index": {
        "description": "Bracketed session for HaskellDB with HDBC",
        "hierarchy": "Database HaskellDB Connect HDBC",
        "module": "Database.HaskellDB.Connect.HDBC",
        "name": "HDBC",
        "normalized": "",
        "package": "haskelldb-connect-hdbc",
        "partial": "HDBC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb-connect-hdbc/docs/Database-HaskellDB-Connect-HDBC.html#v:makeHDBCSession",
      "description": {
        "fct-descr": "\u003cp\u003eRun an action on a HDBC IConnection and close the connection.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Connect.HDBC",
        "fct-package": "haskelldb-connect-hdbc",
        "fct-signature": "(m conn -\u003e (conn -\u003e m ()) -\u003e (conn -\u003e m a) -\u003e m a)-\u003e (forall b.  IO b -\u003e m b)-\u003e SqlGenerator-\u003e IO conn-\u003e (conn -\u003e Database -\u003e m a)-\u003e m a",
        "fct-type": "function",
        "title": "makeHDBCSession"
      },
      "index": {
        "description": "Run an action on HDBC IConnection and close the connection",
        "hierarchy": "Database HaskellDB Connect HDBC",
        "module": "Database.HaskellDB.Connect.HDBC",
        "name": "makeHDBCSession",
        "normalized": "(a b-\u003e(b-\u003ea())-\u003e(b-\u003ea c)-\u003ea c)-\u003e(d e IO f-\u003ea f)-\u003eSqlGenerator-\u003eIO b-\u003e(b-\u003eDatabase-\u003ea c)-\u003ea c",
        "package": "haskelldb-connect-hdbc",
        "partial": "HDBCSession",
        "signature": "(m conn-\u003e(conn-\u003em())-\u003e(conn-\u003em a)-\u003em a)-\u003e(forall b. IO b-\u003em b)-\u003eSqlGenerator-\u003eIO conn-\u003e(conn-\u003eDatabase-\u003em a)-\u003em a"
      }
    }
  }
]