[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/persistent-hssqlppp/docs/Database-Persist-HsSqlPpp.html#",
      "description": {
        "fct-module": "Database.Persist.HsSqlPpp",
        "fct-package": "persistent-hssqlppp",
        "fct-signature": "module",
        "fct-source": "src/Database-Persist-HsSqlPpp.html",
        "fct-type": "module",
        "title": "HsSqlPpp"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Persist HsSqlPpp",
        "module": "Database.Persist.HsSqlPpp",
        "name": "HsSqlPpp",
        "normalized": "",
        "package": "persistent-hssqlppp",
        "partial": "Hs Sql Ppp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/persistent-hssqlppp/docs/Database-Persist-HsSqlPpp.html#t:Query",
      "description": {
        "fct-descr": "\u003cp\u003e(SQL query text, entity definition)\n\u003c/p\u003e",
        "fct-module": "Database.Persist.HsSqlPpp",
        "fct-package": "persistent-hssqlppp",
        "fct-signature": "type",
        "fct-source": "src/Database-Persist-HsSqlPpp.html#Query",
        "fct-type": "type",
        "title": "Query"
      },
      "index": {
        "description": "SQL query text entity definition",
        "hierarchy": "Database Persist HsSqlPpp",
        "module": "Database.Persist.HsSqlPpp",
        "name": "Query",
        "normalized": "",
        "package": "persistent-hssqlppp",
        "partial": "Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/persistent-hssqlppp/docs/Database-Persist-HsSqlPpp.html#v:checkSQL",
      "description": {
        "fct-descr": "\u003cp\u003eCheck if given SQL query is safe SELECT query\n\u003c/p\u003e",
        "fct-module": "Database.Persist.HsSqlPpp",
        "fct-package": "persistent-hssqlppp",
        "fct-signature": "[String]-\u003e String-\u003e Either String QueryExpr",
        "fct-type": "function",
        "title": "checkSQL"
      },
      "index": {
        "description": "Check if given SQL query is safe SELECT query",
        "hierarchy": "Database Persist HsSqlPpp",
        "module": "Database.Persist.HsSqlPpp",
        "name": "checkSQL",
        "normalized": "[String]-\u003eString-\u003eEither String QueryExpr",
        "package": "persistent-hssqlppp",
        "partial": "SQL",
        "signature": "[String]-\u003eString-\u003eEither String QueryExpr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/persistent-hssqlppp/docs/Database-Persist-HsSqlPpp.html#v:parseEntity",
      "description": {
        "fct-descr": "\u003cp\u003eParse SQL entity declaration\n\u003c/p\u003e",
        "fct-module": "Database.Persist.HsSqlPpp",
        "fct-package": "persistent-hssqlppp",
        "fct-signature": "FilePath-\u003e String-\u003e Either String Query",
        "fct-type": "function",
        "title": "parseEntity"
      },
      "index": {
        "description": "Parse SQL entity declaration",
        "hierarchy": "Database Persist HsSqlPpp",
        "module": "Database.Persist.HsSqlPpp",
        "name": "parseEntity",
        "normalized": "FilePath-\u003eString-\u003eEither String Query",
        "package": "persistent-hssqlppp",
        "partial": "Entity",
        "signature": "FilePath-\u003eString-\u003eEither String Query"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/persistent-hssqlppp/docs/Database-Persist-HsSqlPpp.html#v:parseEntityFromFile",
      "description": {
        "fct-descr": "\u003cp\u003eLoad entity declaration from file containing SQL query\n\u003c/p\u003e",
        "fct-module": "Database.Persist.HsSqlPpp",
        "fct-package": "persistent-hssqlppp",
        "fct-signature": "FilePath -\u003e IO (Either String Query)",
        "fct-source": "src/Database-Persist-HsSqlPpp.html#parseEntityFromFile",
        "fct-type": "function",
        "title": "parseEntityFromFile"
      },
      "index": {
        "description": "Load entity declaration from file containing SQL query",
        "hierarchy": "Database Persist HsSqlPpp",
        "module": "Database.Persist.HsSqlPpp",
        "name": "parseEntityFromFile",
        "normalized": "FilePath-\u003eIO(Either String Query)",
        "package": "persistent-hssqlppp",
        "partial": "Entity From File",
        "signature": "FilePath-\u003eIO(Either String Query)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/persistent-hssqlppp/docs/Database-Persist-HsSqlPpp.html#v:persistSql",
      "description": {
        "fct-descr": "\u003cp\u003eQuasi-quoter which parses SQL SELECT queries.\n Example input:\n\u003c/p\u003e\u003cpre\u003e\n   SELECT family, salary FROM employee;\n   --------------------\n   family String\n   salary Int\n\u003c/pre\u003e\u003cp\u003eNB: entity name will be \"Undefined\", so\n you'll need to use record update syntax to\n set name your want, e.g. entity {entityName = \"Query\"}.\n\u003c/p\u003e",
        "fct-module": "Database.Persist.HsSqlPpp",
        "fct-package": "persistent-hssqlppp",
        "fct-signature": "QuasiQuoter",
        "fct-source": "src/Database-Persist-HsSqlPpp.html#persistSql",
        "fct-type": "function",
        "title": "persistSql"
      },
      "index": {
        "description": "Quasi-quoter which parses SQL SELECT queries Example input SELECT family salary FROM employee family String salary Int NB entity name will be Undefined so you ll need to use record update syntax to set name your want e.g entity entityName Query",
        "hierarchy": "Database Persist HsSqlPpp",
        "module": "Database.Persist.HsSqlPpp",
        "name": "persistSql",
        "normalized": "",
        "package": "persistent-hssqlppp",
        "partial": "Sql",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/persistent-hssqlppp/docs/Database-Persist-HsSqlPpp.html#v:persistSqlFile",
      "description": {
        "fct-descr": "\u003cp\u003eLoad entity declaration from file containing SQL query.\n TH version.\n\u003c/p\u003e",
        "fct-module": "Database.Persist.HsSqlPpp",
        "fct-package": "persistent-hssqlppp",
        "fct-signature": "FilePath -\u003e Q [Exp]",
        "fct-source": "src/Database-Persist-HsSqlPpp.html#persistSqlFile",
        "fct-type": "function",
        "title": "persistSqlFile"
      },
      "index": {
        "description": "Load entity declaration from file containing SQL query TH version",
        "hierarchy": "Database Persist HsSqlPpp",
        "module": "Database.Persist.HsSqlPpp",
        "name": "persistSqlFile",
        "normalized": "FilePath-\u003eQ[Exp]",
        "package": "persistent-hssqlppp",
        "partial": "Sql File",
        "signature": "FilePath-\u003eQ[Exp]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/persistent-hssqlppp/docs/Database-Persist-HsSqlPpp.html#v:selectFromQuery",
      "description": {
        "fct-descr": "\u003cp\u003eSelect list of records from DB using given SQL query\n\u003c/p\u003e",
        "fct-module": "Database.Persist.HsSqlPpp",
        "fct-package": "persistent-hssqlppp",
        "fct-signature": "QueryExpr-\u003e [Filter a]-\u003e SqlPersist m (Either String [a])",
        "fct-type": "function",
        "title": "selectFromQuery"
      },
      "index": {
        "description": "Select list of records from DB using given SQL query",
        "hierarchy": "Database Persist HsSqlPpp",
        "module": "Database.Persist.HsSqlPpp",
        "name": "selectFromQuery",
        "normalized": "QueryExpr-\u003e[Filter a]-\u003eSqlPersist b(Either String[a])",
        "package": "persistent-hssqlppp",
        "partial": "From Query",
        "signature": "QueryExpr-\u003e[Filter a]-\u003eSqlPersist m(Either String[a])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/persistent-hssqlppp/docs/Database-Persist-HsSqlPpp.html#v:selectFromQuery-39-",
      "description": {
        "fct-descr": "\u003cp\u003eSelect list of records from DB using given SQL SELECT query.\n Query is checked for safety (arbitrary function calls,\n complex expressions, etc are not permitted).\n Each row will be represented as [PersistValue].\n\u003c/p\u003e",
        "fct-module": "Database.Persist.HsSqlPpp",
        "fct-package": "persistent-hssqlppp",
        "fct-signature": "[String]-\u003e String-\u003e SqlPersist m (Either String ([ColumnName], [[PersistValue]]))",
        "fct-type": "function",
        "title": "selectFromQuery'"
      },
      "index": {
        "description": "Select list of records from DB using given SQL SELECT query Query is checked for safety arbitrary function calls complex expressions etc are not permitted Each row will be represented as PersistValue",
        "hierarchy": "Database Persist HsSqlPpp",
        "module": "Database.Persist.HsSqlPpp",
        "name": "selectFromQuery'",
        "normalized": "[String]-\u003eString-\u003eSqlPersist a(Either String([ColumnName],[[PersistValue]]))",
        "package": "persistent-hssqlppp",
        "partial": "From Query'",
        "signature": "[String]-\u003eString-\u003eSqlPersist m(Either String([ColumnName],[[PersistValue]]))"
      }
    }
  }
]