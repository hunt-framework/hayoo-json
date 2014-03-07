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
        "word": "sqlvalue-list"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003cem\u003eExample Use:\u003c/em\u003e\n\u003c/p\u003e\u003cpre\u003e\ndata Record = R {who :: String, age :: Int} deriving (Show, Eq)\nderiveSqlValueList ''Record\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Database.HDBC.SqlValue.List.Derive",
          "name": "Derive",
          "package": "sqlvalue-list",
          "source": "src/Database-HDBC-SqlValue-List-Derive.html",
          "type": "module"
        },
        "index": {
          "description": "Example Use data Record who String age Int deriving Show Eq deriveSqlValueList Record",
          "hierarchy": "Database HDBC SqlValue List Derive",
          "module": "Database.HDBC.SqlValue.List.Derive",
          "name": "Derive",
          "package": "sqlvalue-list",
          "partial": "Derive",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sqlvalue-list/docs/Database-HDBC-SqlValue-List-Derive.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HDBC.SqlValue.List.Derive",
          "name": "deriveSqlValueList",
          "package": "sqlvalue-list",
          "signature": "Name -\u003e Q [Dec]",
          "source": "src/Database-HDBC-SqlValue-List-Derive.html#deriveSqlValueList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HDBC SqlValue List Derive",
          "module": "Database.HDBC.SqlValue.List.Derive",
          "name": "deriveSqlValueList",
          "normalized": "Name-\u003eQ[Dec]",
          "package": "sqlvalue-list",
          "partial": "Sql Value List",
          "signature": "Name-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sqlvalue-list/docs/Database-HDBC-SqlValue-List-Derive.html#v:deriveSqlValueList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HDBC.SqlValue.List",
          "name": "List",
          "package": "sqlvalue-list",
          "source": "src/Database-HDBC-SqlValue-List.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Database HDBC SqlValue List",
          "module": "Database.HDBC.SqlValue.List",
          "name": "List",
          "package": "sqlvalue-list",
          "partial": "List",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sqlvalue-list/docs/Database-HDBC-SqlValue-List.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HDBC.SqlValue.List",
          "name": "SqlValueList",
          "package": "sqlvalue-list",
          "source": "src/Database-HDBC-SqlValue-List.html#SqlValueList",
          "type": "class"
        },
        "index": {
          "hierarchy": "Database HDBC SqlValue List",
          "module": "Database.HDBC.SqlValue.List",
          "name": "SqlValueList",
          "package": "sqlvalue-list",
          "partial": "Sql Value List",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/sqlvalue-list/docs/Database-HDBC-SqlValue-List.html#t:SqlValueList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HDBC.SqlValue.List",
          "name": "fromSqlList",
          "package": "sqlvalue-list",
          "signature": "[SqlValue] -\u003e a",
          "source": "src/Database-HDBC-SqlValue-List.html#fromSqlList",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database HDBC SqlValue List",
          "module": "Database.HDBC.SqlValue.List",
          "name": "fromSqlList",
          "normalized": "[SqlValue]-\u003ea",
          "package": "sqlvalue-list",
          "partial": "Sql List",
          "signature": "[SqlValue]-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sqlvalue-list/docs/Database-HDBC-SqlValue-List.html#v:fromSqlList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HDBC.SqlValue.List",
          "name": "toSqlList",
          "package": "sqlvalue-list",
          "signature": "a -\u003e [SqlValue]",
          "source": "src/Database-HDBC-SqlValue-List.html#toSqlList",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database HDBC SqlValue List",
          "module": "Database.HDBC.SqlValue.List",
          "name": "toSqlList",
          "normalized": "a-\u003e[SqlValue]",
          "package": "sqlvalue-list",
          "partial": "Sql List",
          "signature": "a-\u003e[SqlValue]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sqlvalue-list/docs/Database-HDBC-SqlValue-List.html#v:toSqlList"
      }
    }
  ]
]