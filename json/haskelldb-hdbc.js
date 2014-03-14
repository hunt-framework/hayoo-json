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
        "word": "haskelldb-hdbc"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHDBC interface for HaskellDB\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.HaskellDB.HDBC",
          "name": "HDBC",
          "package": "haskelldb-hdbc",
          "source": "src/Database-HaskellDB-HDBC.html",
          "type": "module"
        },
        "index": {
          "description": "HDBC interface for HaskellDB",
          "hierarchy": "Database HaskellDB HDBC",
          "module": "Database.HaskellDB.HDBC",
          "name": "HDBC",
          "package": "haskelldb-hdbc",
          "partial": "HDBC",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb-hdbc/docs/Database-HaskellDB-HDBC.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun an action on a HDBC IConnection and close the connection.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.HDBC",
          "name": "hdbcConnect",
          "package": "haskelldb-hdbc",
          "signature": "SqlGenerator-\u003e IO conn-\u003e (Database -\u003e m a)-\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "Run an action on HDBC IConnection and close the connection",
          "hierarchy": "Database HaskellDB HDBC",
          "module": "Database.HaskellDB.HDBC",
          "name": "hdbcConnect",
          "normalized": "SqlGenerator-\u003eIO a-\u003e(Database-\u003eb c)-\u003eb c",
          "package": "haskelldb-hdbc",
          "partial": "Connect",
          "signature": "SqlGenerator-\u003eIO conn-\u003e(Database-\u003em a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb-hdbc/docs/Database-HaskellDB-HDBC.html#v:hdbcConnect"
      }
    }
  ]
]