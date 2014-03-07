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
        "word": "persistent-postgresql"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA postgresql backend for persistent.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.Persist.Postgresql",
          "name": "Postgresql",
          "package": "persistent-postgresql",
          "source": "src/Database-Persist-Postgresql.html",
          "type": "module"
        },
        "index": {
          "description": "postgresql backend for persistent",
          "hierarchy": "Database Persist Postgresql",
          "module": "Database.Persist.Postgresql",
          "name": "Postgresql",
          "package": "persistent-postgresql",
          "partial": "Postgresql",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/persistent-postgresql/docs/Database-Persist-Postgresql.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003elibpq\u003c/code\u003e connection string.  A simple example of connection\n string would be \u003ccode\u003e\"host=localhost port=5432 user=test\n dbname=test password=test\"\u003c/code\u003e.  Please read libpq's\n documentation at\n \u003ca\u003ehttp://www.postgresql.org/docs/9.1/static/libpq-connect.html\u003c/a\u003e\n for more details on how to create such strings.\n\u003c/p\u003e",
          "module": "Database.Persist.Postgresql",
          "name": "ConnectionString",
          "package": "persistent-postgresql",
          "source": "src/Database-Persist-Postgresql.html#ConnectionString",
          "type": "type"
        },
        "index": {
          "description": "libpq connection string simple example of connection string would be host localhost port user test dbname test password test Please read libpq documentation at http www.postgresql.org docs static libpq-connect.html for more details on how to create such strings",
          "hierarchy": "Database Persist Postgresql",
          "module": "Database.Persist.Postgresql",
          "name": "ConnectionString",
          "package": "persistent-postgresql",
          "partial": "Connection String",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/persistent-postgresql/docs/Database-Persist-Postgresql.html#t:ConnectionString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInformation required to connect to a PostgreSQL database\n using \u003ccode\u003epersistent\u003c/code\u003e's generic facilities.  These values are the\n same that are given to \u003ccode\u003e\u003ca\u003ewithPostgresqlPool\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.Persist.Postgresql",
          "name": "PostgresConf",
          "package": "persistent-postgresql",
          "source": "src/Database-Persist-Postgresql.html#PostgresConf",
          "type": "data"
        },
        "index": {
          "description": "Information required to connect to PostgreSQL database using persistent generic facilities These values are the same that are given to withPostgresqlPool",
          "hierarchy": "Database Persist Postgresql",
          "module": "Database.Persist.Postgresql",
          "name": "PostgresConf",
          "package": "persistent-postgresql",
          "partial": "Postgres Conf",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/persistent-postgresql/docs/Database-Persist-Postgresql.html#t:PostgresConf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Postgresql",
          "name": "PostgresConf",
          "package": "persistent-postgresql",
          "signature": "PostgresConf",
          "source": "src/Database-Persist-Postgresql.html#PostgresConf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Postgresql",
          "module": "Database.Persist.Postgresql",
          "name": "PostgresConf",
          "package": "persistent-postgresql",
          "partial": "Postgres Conf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-postgresql/docs/Database-Persist-Postgresql.html#v:PostgresConf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a PostgreSQL connection pool.  Note that it's your\n responsability to properly close the connection pool when\n unneeded.  Use \u003ccode\u003e\u003ca\u003ewithPostgresqlPool\u003c/a\u003e\u003c/code\u003e for an automatic resource\n control.\n\u003c/p\u003e",
          "module": "Database.Persist.Postgresql",
          "name": "createPostgresqlPool",
          "package": "persistent-postgresql",
          "signature": "ConnectionString-\u003e Int-\u003e m ConnectionPool",
          "type": "function"
        },
        "index": {
          "description": "Create PostgreSQL connection pool Note that it your responsability to properly close the connection pool when unneeded Use withPostgresqlPool for an automatic resource control",
          "hierarchy": "Database Persist Postgresql",
          "module": "Database.Persist.Postgresql",
          "name": "createPostgresqlPool",
          "normalized": "ConnectionString-\u003eInt-\u003ea ConnectionPool",
          "package": "persistent-postgresql",
          "partial": "Postgresql Pool",
          "signature": "ConnectionString-\u003eInt-\u003em ConnectionPool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-postgresql/docs/Database-Persist-Postgresql.html#v:createPostgresqlPool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a \u003ccode\u003e\u003ca\u003eConnection\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eConnection\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Database.Persist.Postgresql",
          "name": "openSimpleConn",
          "package": "persistent-postgresql",
          "signature": "Connection -\u003e IO Connection",
          "source": "src/Database-Persist-Postgresql.html#openSimpleConn",
          "type": "function"
        },
        "index": {
          "description": "Generate Connection from Connection",
          "hierarchy": "Database Persist Postgresql",
          "module": "Database.Persist.Postgresql",
          "name": "openSimpleConn",
          "normalized": "Connection-\u003eIO Connection",
          "package": "persistent-postgresql",
          "partial": "Simple Conn",
          "signature": "Connection-\u003eIO Connection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-postgresql/docs/Database-Persist-Postgresql.html#v:openSimpleConn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe connection string.\n\u003c/p\u003e",
          "module": "Database.Persist.Postgresql",
          "name": "pgConnStr",
          "package": "persistent-postgresql",
          "signature": "ConnectionString",
          "source": "src/Database-Persist-Postgresql.html#PostgresConf",
          "type": "function"
        },
        "index": {
          "description": "The connection string",
          "hierarchy": "Database Persist Postgresql",
          "module": "Database.Persist.Postgresql",
          "name": "pgConnStr",
          "package": "persistent-postgresql",
          "partial": "Conn Str",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-postgresql/docs/Database-Persist-Postgresql.html#v:pgConnStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow many connections should be held on the connection pool.\n\u003c/p\u003e",
          "module": "Database.Persist.Postgresql",
          "name": "pgPoolSize",
          "package": "persistent-postgresql",
          "signature": "Int",
          "source": "src/Database-Persist-Postgresql.html#PostgresConf",
          "type": "function"
        },
        "index": {
          "description": "How many connections should be held on the connection pool",
          "hierarchy": "Database Persist Postgresql",
          "module": "Database.Persist.Postgresql",
          "name": "pgPoolSize",
          "package": "persistent-postgresql",
          "partial": "Pool Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-postgresql/docs/Database-Persist-Postgresql.html#v:pgPoolSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003ewithPostgresqlPool\u003c/a\u003e\u003c/code\u003e, but instead of opening a pool\n of connections, only one connection is opened.\n\u003c/p\u003e",
          "module": "Database.Persist.Postgresql",
          "name": "withPostgresqlConn",
          "package": "persistent-postgresql",
          "signature": "ConnectionString -\u003e (Connection -\u003e m a) -\u003e m a",
          "source": "src/Database-Persist-Postgresql.html#withPostgresqlConn",
          "type": "function"
        },
        "index": {
          "description": "Same as withPostgresqlPool but instead of opening pool of connections only one connection is opened",
          "hierarchy": "Database Persist Postgresql",
          "module": "Database.Persist.Postgresql",
          "name": "withPostgresqlConn",
          "normalized": "ConnectionString-\u003e(Connection-\u003ea b)-\u003ea b",
          "package": "persistent-postgresql",
          "partial": "Postgresql Conn",
          "signature": "ConnectionString-\u003e(Connection-\u003em a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-postgresql/docs/Database-Persist-Postgresql.html#v:withPostgresqlConn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a PostgreSQL connection pool and run the given\n action.  The pool is properly released after the action\n finishes using it.  Note that you should not use the given\n \u003ccode\u003e\u003ca\u003eConnectionPool\u003c/a\u003e\u003c/code\u003e outside the action since it may be already\n been released.\n\u003c/p\u003e",
          "module": "Database.Persist.Postgresql",
          "name": "withPostgresqlPool",
          "package": "persistent-postgresql",
          "signature": "ConnectionString-\u003e Int-\u003e (ConnectionPool -\u003e m a)-\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "Create PostgreSQL connection pool and run the given action The pool is properly released after the action finishes using it Note that you should not use the given ConnectionPool outside the action since it may be already been released",
          "hierarchy": "Database Persist Postgresql",
          "module": "Database.Persist.Postgresql",
          "name": "withPostgresqlPool",
          "normalized": "ConnectionString-\u003eInt-\u003e(ConnectionPool-\u003ea b)-\u003ea b",
          "package": "persistent-postgresql",
          "partial": "Postgresql Pool",
          "signature": "ConnectionString-\u003eInt-\u003e(ConnectionPool-\u003em a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-postgresql/docs/Database-Persist-Postgresql.html#v:withPostgresqlPool"
      }
    }
  ]
]