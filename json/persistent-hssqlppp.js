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
        "word": "persistent-hssqlppp"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.HsSqlPpp",
          "name": "HsSqlPpp",
          "package": "persistent-hssqlppp",
          "source": "src/Database-Persist-HsSqlPpp.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Database Persist HsSqlPpp",
          "module": "Database.Persist.HsSqlPpp",
          "name": "HsSqlPpp",
          "package": "persistent-hssqlppp",
          "partial": "Hs Sql Ppp",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/persistent-hssqlppp/docs/Database-Persist-HsSqlPpp.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(SQL query text, entity definition)\n\u003c/p\u003e",
          "module": "Database.Persist.HsSqlPpp",
          "name": "Query",
          "package": "persistent-hssqlppp",
          "source": "src/Database-Persist-HsSqlPpp.html#Query",
          "type": "type"
        },
        "index": {
          "description": "SQL query text entity definition",
          "hierarchy": "Database Persist HsSqlPpp",
          "module": "Database.Persist.HsSqlPpp",
          "name": "Query",
          "package": "persistent-hssqlppp",
          "partial": "Query",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/persistent-hssqlppp/docs/Database-Persist-HsSqlPpp.html#t:Query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if given SQL query is safe SELECT query\n\u003c/p\u003e",
          "module": "Database.Persist.HsSqlPpp",
          "name": "checkSQL",
          "package": "persistent-hssqlppp",
          "signature": "[String]-\u003e String-\u003e Either String QueryExpr",
          "type": "function"
        },
        "index": {
          "description": "Check if given SQL query is safe SELECT query",
          "hierarchy": "Database Persist HsSqlPpp",
          "module": "Database.Persist.HsSqlPpp",
          "name": "checkSQL",
          "normalized": "[String]-\u003eString-\u003eEither String QueryExpr",
          "package": "persistent-hssqlppp",
          "partial": "SQL",
          "signature": "[String]-\u003eString-\u003eEither String QueryExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-hssqlppp/docs/Database-Persist-HsSqlPpp.html#v:checkSQL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse SQL entity declaration\n\u003c/p\u003e",
          "module": "Database.Persist.HsSqlPpp",
          "name": "parseEntity",
          "package": "persistent-hssqlppp",
          "signature": "FilePath-\u003e String-\u003e Either String Query",
          "type": "function"
        },
        "index": {
          "description": "Parse SQL entity declaration",
          "hierarchy": "Database Persist HsSqlPpp",
          "module": "Database.Persist.HsSqlPpp",
          "name": "parseEntity",
          "normalized": "FilePath-\u003eString-\u003eEither String Query",
          "package": "persistent-hssqlppp",
          "partial": "Entity",
          "signature": "FilePath-\u003eString-\u003eEither String Query",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-hssqlppp/docs/Database-Persist-HsSqlPpp.html#v:parseEntity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad entity declaration from file containing SQL query\n\u003c/p\u003e",
          "module": "Database.Persist.HsSqlPpp",
          "name": "parseEntityFromFile",
          "package": "persistent-hssqlppp",
          "signature": "FilePath -\u003e IO (Either String Query)",
          "source": "src/Database-Persist-HsSqlPpp.html#parseEntityFromFile",
          "type": "function"
        },
        "index": {
          "description": "Load entity declaration from file containing SQL query",
          "hierarchy": "Database Persist HsSqlPpp",
          "module": "Database.Persist.HsSqlPpp",
          "name": "parseEntityFromFile",
          "normalized": "FilePath-\u003eIO(Either String Query)",
          "package": "persistent-hssqlppp",
          "partial": "Entity From File",
          "signature": "FilePath-\u003eIO(Either String Query)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-hssqlppp/docs/Database-Persist-HsSqlPpp.html#v:parseEntityFromFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuasi-quoter which parses SQL SELECT queries.\n Example input:\n\u003c/p\u003e\u003cpre\u003e\n   SELECT family, salary FROM employee;\n   --------------------\n   family String\n   salary Int\n\u003c/pre\u003e\u003cp\u003eNB: entity name will be \"Undefined\", so\n you'll need to use record update syntax to\n set name your want, e.g. entity {entityName = \"Query\"}.\n\u003c/p\u003e",
          "module": "Database.Persist.HsSqlPpp",
          "name": "persistSql",
          "package": "persistent-hssqlppp",
          "signature": "QuasiQuoter",
          "source": "src/Database-Persist-HsSqlPpp.html#persistSql",
          "type": "function"
        },
        "index": {
          "description": "Quasi-quoter which parses SQL SELECT queries Example input SELECT family salary FROM employee family String salary Int NB entity name will be Undefined so you ll need to use record update syntax to set name your want e.g entity entityName Query",
          "hierarchy": "Database Persist HsSqlPpp",
          "module": "Database.Persist.HsSqlPpp",
          "name": "persistSql",
          "package": "persistent-hssqlppp",
          "partial": "Sql",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-hssqlppp/docs/Database-Persist-HsSqlPpp.html#v:persistSql"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad entity declaration from file containing SQL query.\n TH version.\n\u003c/p\u003e",
          "module": "Database.Persist.HsSqlPpp",
          "name": "persistSqlFile",
          "package": "persistent-hssqlppp",
          "signature": "FilePath -\u003e Q [Exp]",
          "source": "src/Database-Persist-HsSqlPpp.html#persistSqlFile",
          "type": "function"
        },
        "index": {
          "description": "Load entity declaration from file containing SQL query TH version",
          "hierarchy": "Database Persist HsSqlPpp",
          "module": "Database.Persist.HsSqlPpp",
          "name": "persistSqlFile",
          "normalized": "FilePath-\u003eQ[Exp]",
          "package": "persistent-hssqlppp",
          "partial": "Sql File",
          "signature": "FilePath-\u003eQ[Exp]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-hssqlppp/docs/Database-Persist-HsSqlPpp.html#v:persistSqlFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect list of records from DB using given SQL query\n\u003c/p\u003e",
          "module": "Database.Persist.HsSqlPpp",
          "name": "selectFromQuery",
          "package": "persistent-hssqlppp",
          "signature": "QueryExpr-\u003e [Filter a]-\u003e SqlPersist m (Either String [a])",
          "type": "function"
        },
        "index": {
          "description": "Select list of records from DB using given SQL query",
          "hierarchy": "Database Persist HsSqlPpp",
          "module": "Database.Persist.HsSqlPpp",
          "name": "selectFromQuery",
          "normalized": "QueryExpr-\u003e[Filter a]-\u003eSqlPersist b(Either String[a])",
          "package": "persistent-hssqlppp",
          "partial": "From Query",
          "signature": "QueryExpr-\u003e[Filter a]-\u003eSqlPersist m(Either String[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-hssqlppp/docs/Database-Persist-HsSqlPpp.html#v:selectFromQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect list of records from DB using given SQL SELECT query.\n Query is checked for safety (arbitrary function calls,\n complex expressions, etc are not permitted).\n Each row will be represented as [PersistValue].\n\u003c/p\u003e",
          "module": "Database.Persist.HsSqlPpp",
          "name": "selectFromQuery'",
          "package": "persistent-hssqlppp",
          "signature": "[String]-\u003e String-\u003e SqlPersist m (Either String ([ColumnName], [[PersistValue]]))",
          "type": "function"
        },
        "index": {
          "description": "Select list of records from DB using given SQL SELECT query Query is checked for safety arbitrary function calls complex expressions etc are not permitted Each row will be represented as PersistValue",
          "hierarchy": "Database Persist HsSqlPpp",
          "module": "Database.Persist.HsSqlPpp",
          "name": "selectFromQuery'",
          "normalized": "[String]-\u003eString-\u003eSqlPersist a(Either String([ColumnName],[[PersistValue]]))",
          "package": "persistent-hssqlppp",
          "partial": "From Query'",
          "signature": "[String]-\u003eString-\u003eSqlPersist m(Either String([ColumnName],[[PersistValue]]))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-hssqlppp/docs/Database-Persist-HsSqlPpp.html#v:selectFromQuery-39-"
      }
    }
  ]
]