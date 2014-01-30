[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/persistent-postgresql/docs/Database-Persist-Postgresql.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA postgresql backend for persistent.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.Persist.Postgresql",
        "fct-package": "persistent-postgresql",
        "fct-signature": "module",
        "fct-source": "src/Database-Persist-Postgresql.html",
        "fct-type": "module",
        "title": "Postgresql"
      },
      "index": {
        "description": "postgresql backend for persistent",
        "hierarchy": "Database Persist Postgresql",
        "module": "Database.Persist.Postgresql",
        "name": "Postgresql",
        "normalized": "",
        "package": "persistent-postgresql",
        "partial": "Postgresql",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/persistent-postgresql/docs/Database-Persist-Postgresql.html#t:ConnectionString",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003elibpq\u003c/code\u003e connection string.  A simple example of connection\n string would be \u003ccode\u003e\"host=localhost port=5432 user=test\n dbname=test password=test\"\u003c/code\u003e.  Please read libpq's\n documentation at\n \u003ca\u003ehttp://www.postgresql.org/docs/9.1/static/libpq-connect.html\u003c/a\u003e\n for more details on how to create such strings.\n\u003c/p\u003e",
        "fct-module": "Database.Persist.Postgresql",
        "fct-package": "persistent-postgresql",
        "fct-signature": "type",
        "fct-source": "src/Database-Persist-Postgresql.html#ConnectionString",
        "fct-type": "type",
        "title": "ConnectionString"
      },
      "index": {
        "description": "libpq connection string simple example of connection string would be host localhost port user test dbname test password test Please read libpq documentation at http www.postgresql.org docs static libpq-connect.html for more details on how to create such strings",
        "hierarchy": "Database Persist Postgresql",
        "module": "Database.Persist.Postgresql",
        "name": "ConnectionString",
        "normalized": "",
        "package": "persistent-postgresql",
        "partial": "Connection String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/persistent-postgresql/docs/Database-Persist-Postgresql.html#t:PostgresConf",
      "description": {
        "fct-descr": "\u003cp\u003eInformation required to connect to a PostgreSQL database\n using \u003ccode\u003epersistent\u003c/code\u003e's generic facilities.  These values are the\n same that are given to \u003ccode\u003e\u003ca\u003ewithPostgresqlPool\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.Persist.Postgresql",
        "fct-package": "persistent-postgresql",
        "fct-signature": "data",
        "fct-source": "src/Database-Persist-Postgresql.html#PostgresConf",
        "fct-type": "data",
        "title": "PostgresConf"
      },
      "index": {
        "description": "Information required to connect to PostgreSQL database using persistent generic facilities These values are the same that are given to withPostgresqlPool",
        "hierarchy": "Database Persist Postgresql",
        "module": "Database.Persist.Postgresql",
        "name": "PostgresConf",
        "normalized": "",
        "package": "persistent-postgresql",
        "partial": "Postgres Conf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/persistent-postgresql/docs/Database-Persist-Postgresql.html#v:PostgresConf",
      "description": {
        "fct-module": "Database.Persist.Postgresql",
        "fct-package": "persistent-postgresql",
        "fct-signature": "PostgresConf",
        "fct-source": "src/Database-Persist-Postgresql.html#PostgresConf",
        "fct-type": "function",
        "title": "PostgresConf"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Persist Postgresql",
        "module": "Database.Persist.Postgresql",
        "name": "PostgresConf",
        "normalized": "",
        "package": "persistent-postgresql",
        "partial": "Postgres Conf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/persistent-postgresql/docs/Database-Persist-Postgresql.html#v:createPostgresqlPool",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a PostgreSQL connection pool.  Note that it's your\n responsability to properly close the connection pool when\n unneeded.  Use \u003ccode\u003e\u003ca\u003ewithPostgresqlPool\u003c/a\u003e\u003c/code\u003e for an automatic resource\n control.\n\u003c/p\u003e",
        "fct-module": "Database.Persist.Postgresql",
        "fct-package": "persistent-postgresql",
        "fct-signature": "ConnectionString-\u003e Int-\u003e m ConnectionPool",
        "fct-type": "function",
        "title": "createPostgresqlPool"
      },
      "index": {
        "description": "Create PostgreSQL connection pool Note that it your responsability to properly close the connection pool when unneeded Use withPostgresqlPool for an automatic resource control",
        "hierarchy": "Database Persist Postgresql",
        "module": "Database.Persist.Postgresql",
        "name": "createPostgresqlPool",
        "normalized": "ConnectionString-\u003eInt-\u003ea ConnectionPool",
        "package": "persistent-postgresql",
        "partial": "Postgresql Pool",
        "signature": "ConnectionString-\u003eInt-\u003em ConnectionPool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/persistent-postgresql/docs/Database-Persist-Postgresql.html#v:openSimpleConn",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a \u003ccode\u003e\u003ca\u003eConnection\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eConnection\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Database.Persist.Postgresql",
        "fct-package": "persistent-postgresql",
        "fct-signature": "Connection -\u003e IO Connection",
        "fct-source": "src/Database-Persist-Postgresql.html#openSimpleConn",
        "fct-type": "function",
        "title": "openSimpleConn"
      },
      "index": {
        "description": "Generate Connection from Connection",
        "hierarchy": "Database Persist Postgresql",
        "module": "Database.Persist.Postgresql",
        "name": "openSimpleConn",
        "normalized": "Connection-\u003eIO Connection",
        "package": "persistent-postgresql",
        "partial": "Simple Conn",
        "signature": "Connection-\u003eIO Connection"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/persistent-postgresql/docs/Database-Persist-Postgresql.html#v:pgConnStr",
      "description": {
        "fct-descr": "\u003cp\u003eThe connection string.\n\u003c/p\u003e",
        "fct-module": "Database.Persist.Postgresql",
        "fct-package": "persistent-postgresql",
        "fct-signature": "ConnectionString",
        "fct-source": "src/Database-Persist-Postgresql.html#PostgresConf",
        "fct-type": "function",
        "title": "pgConnStr"
      },
      "index": {
        "description": "The connection string",
        "hierarchy": "Database Persist Postgresql",
        "module": "Database.Persist.Postgresql",
        "name": "pgConnStr",
        "normalized": "",
        "package": "persistent-postgresql",
        "partial": "Conn Str",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/persistent-postgresql/docs/Database-Persist-Postgresql.html#v:pgPoolSize",
      "description": {
        "fct-descr": "\u003cp\u003eHow many connections should be held on the connection pool.\n\u003c/p\u003e",
        "fct-module": "Database.Persist.Postgresql",
        "fct-package": "persistent-postgresql",
        "fct-signature": "Int",
        "fct-source": "src/Database-Persist-Postgresql.html#PostgresConf",
        "fct-type": "function",
        "title": "pgPoolSize"
      },
      "index": {
        "description": "How many connections should be held on the connection pool",
        "hierarchy": "Database Persist Postgresql",
        "module": "Database.Persist.Postgresql",
        "name": "pgPoolSize",
        "normalized": "",
        "package": "persistent-postgresql",
        "partial": "Pool Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/persistent-postgresql/docs/Database-Persist-Postgresql.html#v:withPostgresqlConn",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003ewithPostgresqlPool\u003c/a\u003e\u003c/code\u003e, but instead of opening a pool\n of connections, only one connection is opened.\n\u003c/p\u003e",
        "fct-module": "Database.Persist.Postgresql",
        "fct-package": "persistent-postgresql",
        "fct-signature": "ConnectionString -\u003e (Connection -\u003e m a) -\u003e m a",
        "fct-source": "src/Database-Persist-Postgresql.html#withPostgresqlConn",
        "fct-type": "function",
        "title": "withPostgresqlConn"
      },
      "index": {
        "description": "Same as withPostgresqlPool but instead of opening pool of connections only one connection is opened",
        "hierarchy": "Database Persist Postgresql",
        "module": "Database.Persist.Postgresql",
        "name": "withPostgresqlConn",
        "normalized": "ConnectionString-\u003e(Connection-\u003ea b)-\u003ea b",
        "package": "persistent-postgresql",
        "partial": "Postgresql Conn",
        "signature": "ConnectionString-\u003e(Connection-\u003em a)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/persistent-postgresql/docs/Database-Persist-Postgresql.html#v:withPostgresqlPool",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a PostgreSQL connection pool and run the given\n action.  The pool is properly released after the action\n finishes using it.  Note that you should not use the given\n \u003ccode\u003e\u003ca\u003eConnectionPool\u003c/a\u003e\u003c/code\u003e outside the action since it may be already\n been released.\n\u003c/p\u003e",
        "fct-module": "Database.Persist.Postgresql",
        "fct-package": "persistent-postgresql",
        "fct-signature": "ConnectionString-\u003e Int-\u003e (ConnectionPool -\u003e m a)-\u003e m a",
        "fct-type": "function",
        "title": "withPostgresqlPool"
      },
      "index": {
        "description": "Create PostgreSQL connection pool and run the given action The pool is properly released after the action finishes using it Note that you should not use the given ConnectionPool outside the action since it may be already been released",
        "hierarchy": "Database Persist Postgresql",
        "module": "Database.Persist.Postgresql",
        "name": "withPostgresqlPool",
        "normalized": "ConnectionString-\u003eInt-\u003e(ConnectionPool-\u003ea b)-\u003ea b",
        "package": "persistent-postgresql",
        "partial": "Postgresql Pool",
        "signature": "ConnectionString-\u003eInt-\u003e(ConnectionPool-\u003em a)-\u003em a"
      }
    }
  }
]