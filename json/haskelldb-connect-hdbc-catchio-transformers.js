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
        "word": "haskelldb-connect-hdbc-catchio-transformers"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBracketed HaskellDB session with \u003ccode\u003e\u003ca\u003eMonadCatchIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.HaskellDB.Connect.HDBC.CatchIO",
          "name": "CatchIO",
          "package": "haskelldb-connect-hdbc-catchio-transformers",
          "source": "src/Database-HaskellDB-Connect-HDBC-CatchIO.html",
          "type": "module"
        },
        "index": {
          "description": "Bracketed HaskellDB session with MonadCatchIO",
          "hierarchy": "Database HaskellDB Connect HDBC CatchIO",
          "module": "Database.HaskellDB.Connect.HDBC.CatchIO",
          "name": "CatchIO",
          "package": "haskelldb-connect-hdbc-catchio-transformers",
          "partial": "Catch IO",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb-connect-hdbc-catchio-transformers/docs/Database-HaskellDB-Connect-HDBC-CatchIO.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun an action on a HDBC IConnection and close the connection.\n   \u003ccode\u003e\u003ca\u003eMonadCatchIO\u003c/a\u003e\u003c/code\u003e version.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.Connect.HDBC.CatchIO",
          "name": "hdbcSession",
          "package": "haskelldb-connect-hdbc-catchio-transformers",
          "signature": "SqlGenerator-\u003e IO conn-\u003e (conn -\u003e Database -\u003e m a)-\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "Run an action on HDBC IConnection and close the connection MonadCatchIO version",
          "hierarchy": "Database HaskellDB Connect HDBC CatchIO",
          "module": "Database.HaskellDB.Connect.HDBC.CatchIO",
          "name": "hdbcSession",
          "normalized": "SqlGenerator-\u003eIO a-\u003e(a-\u003eDatabase-\u003eb c)-\u003eb c",
          "package": "haskelldb-connect-hdbc-catchio-transformers",
          "partial": "Session",
          "signature": "SqlGenerator-\u003eIO conn-\u003e(conn-\u003eDatabase-\u003em a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb-connect-hdbc-catchio-transformers/docs/Database-HaskellDB-Connect-HDBC-CatchIO.html#v:hdbcSession"
      }
    }
  ]
]