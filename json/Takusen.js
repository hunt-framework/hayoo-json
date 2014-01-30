[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Control-Exception-MonadIO.html#",
      "description": {
        "fct-module": "Control.Exception.MonadIO",
        "fct-package": "Takusen",
        "fct-signature": "module",
        "fct-source": "src/Control-Exception-MonadIO.html",
        "fct-type": "module",
        "title": "MonadIO"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Exception MonadIO",
        "module": "Control.Exception.MonadIO",
        "name": "MonadIO",
        "normalized": "",
        "package": "Takusen",
        "partial": "Monad IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Control-Exception-MonadIO.html#t:CaughtMonadIO",
      "description": {
        "fct-module": "Control.Exception.MonadIO",
        "fct-package": "Takusen",
        "fct-signature": "class",
        "fct-source": "src/Control-Exception-MonadIO.html#CaughtMonadIO",
        "fct-type": "class",
        "title": "CaughtMonadIO"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Exception MonadIO",
        "module": "Control.Exception.MonadIO",
        "name": "CaughtMonadIO",
        "normalized": "",
        "package": "Takusen",
        "partial": "Caught Monad IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Control-Exception-MonadIO.html#v:gbracket",
      "description": {
        "fct-module": "Control.Exception.MonadIO",
        "fct-package": "Takusen",
        "fct-signature": "m t -\u003e (t -\u003e m a) -\u003e (t -\u003e m b) -\u003e m b",
        "fct-source": "src/Control-Exception-MonadIO.html#gbracket",
        "fct-type": "function",
        "title": "gbracket"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Exception MonadIO",
        "module": "Control.Exception.MonadIO",
        "name": "gbracket",
        "normalized": "a b-\u003e(b-\u003ea c)-\u003e(b-\u003ea d)-\u003ea d",
        "package": "Takusen",
        "partial": "",
        "signature": "m t-\u003e(t-\u003em a)-\u003e(t-\u003em b)-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Control-Exception-MonadIO.html#v:gcatch",
      "description": {
        "fct-module": "Control.Exception.MonadIO",
        "fct-package": "Takusen",
        "fct-signature": "m a -\u003e (e -\u003e m a) -\u003e m a",
        "fct-source": "src/Control-Exception-MonadIO.html#gcatch",
        "fct-type": "method",
        "title": "gcatch"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Exception MonadIO",
        "module": "Control.Exception.MonadIO",
        "name": "gcatch",
        "normalized": "a b-\u003e(c-\u003ea b)-\u003ea b",
        "package": "Takusen",
        "partial": "",
        "signature": "m a-\u003e(e-\u003em a)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Control-Exception-MonadIO.html#v:gcatchJust",
      "description": {
        "fct-module": "Control.Exception.MonadIO",
        "fct-package": "Takusen",
        "fct-signature": "(e -\u003e Maybe b) -\u003e m a -\u003e (b -\u003e m a) -\u003e m a",
        "fct-source": "src/Control-Exception-MonadIO.html#gcatchJust",
        "fct-type": "method",
        "title": "gcatchJust"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Exception MonadIO",
        "module": "Control.Exception.MonadIO",
        "name": "gcatchJust",
        "normalized": "(a-\u003eMaybe b)-\u003ec d-\u003e(b-\u003ec d)-\u003ec d",
        "package": "Takusen",
        "partial": "Just",
        "signature": "(e-\u003eMaybe b)-\u003em a-\u003e(b-\u003em a)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Control-Exception-MonadIO.html#v:gfinally",
      "description": {
        "fct-module": "Control.Exception.MonadIO",
        "fct-package": "Takusen",
        "fct-signature": "m t -\u003e m a -\u003e m t",
        "fct-source": "src/Control-Exception-MonadIO.html#gfinally",
        "fct-type": "function",
        "title": "gfinally"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Exception MonadIO",
        "module": "Control.Exception.MonadIO",
        "name": "gfinally",
        "normalized": "a b-\u003ea c-\u003ea b",
        "package": "Takusen",
        "partial": "",
        "signature": "m t-\u003em a-\u003em t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Control-Exception-MonadIO.html#v:gtry",
      "description": {
        "fct-module": "Control.Exception.MonadIO",
        "fct-package": "Takusen",
        "fct-signature": "m b -\u003e m (Either e b)",
        "fct-source": "src/Control-Exception-MonadIO.html#gtry",
        "fct-type": "function",
        "title": "gtry"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Exception MonadIO",
        "module": "Control.Exception.MonadIO",
        "name": "gtry",
        "normalized": "a b-\u003ea(Either c b)",
        "package": "Takusen",
        "partial": "",
        "signature": "m b-\u003em(Either e b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Control-Exception-MonadIO.html#v:gtryJust",
      "description": {
        "fct-module": "Control.Exception.MonadIO",
        "fct-package": "Takusen",
        "fct-signature": "(e -\u003e Maybe b) -\u003e m b1 -\u003e m (Either b b1)",
        "fct-source": "src/Control-Exception-MonadIO.html#gtryJust",
        "fct-type": "function",
        "title": "gtryJust"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Exception MonadIO",
        "module": "Control.Exception.MonadIO",
        "name": "gtryJust",
        "normalized": "(a-\u003eMaybe b)-\u003ec b-\u003ec(Either b b)",
        "package": "Takusen",
        "partial": "Just",
        "signature": "(e-\u003eMaybe b)-\u003em b-\u003em(Either b b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Enumerator.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAbstract database interface, providing a left-fold enumerator\n and cursor operations.\n\u003c/p\u003e\u003cp\u003eThere is a stub: \u003ca\u003eDatabase.Stub.Enumerator\u003c/a\u003e.\n This lets you run the test cases without having a working DBMS installation.\n This isn't so valuable now, because it's dead easy to install Sqlite,\n but it's still there if you want to try it.\n\u003c/p\u003e\u003cp\u003eAdditional reading:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003ehttp://pobox.com/~oleg/ftp/Haskell/misc.html#fold-stream\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://pobox.com/~oleg/ftp/papers/LL3-collections-enumerators.txt\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://www.eros-os.org/pipermail/e-lang/2004-March/009643.html\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eNote that there are a few functions that are exported from each DBMS-specific\n implementation which are exposed to the API user, and which are part of\n the Takusen API, but are not (necessarily) in this module.\n They include:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003econnect\u003c/code\u003e (obviously DBMS specific)\n\u003c/li\u003e\u003cli\u003e\u003cpre\u003eprepareQuery, prepareLargeQuery, prepareCommand, sql, sqlbind, prefetch, cmdbind\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThese functions will typically have the same names and intentions,\n but their specific types and usage may differ between DBMS.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.Enumerator",
        "fct-package": "Takusen",
        "fct-signature": "module",
        "fct-source": "src/Database-Enumerator.html",
        "fct-type": "module",
        "title": "Enumerator"
      },
      "index": {
        "description": "Abstract database interface providing left-fold enumerator and cursor operations There is stub Database.Stub.Enumerator This lets you run the test cases without having working DBMS installation This isn so valuable now because it dead easy to install Sqlite but it still there if you want to try it Additional reading http pobox.com oleg ftp Haskell misc.html fold-stream http pobox.com oleg ftp papers LL3-collections-enumerators.txt http www.eros-os.org pipermail e-lang March html Note that there are few functions that are exported from each DBMS-specific implementation which are exposed to the API user and which are part of the Takusen API but are not necessarily in this module They include connect obviously DBMS specific prepareQuery prepareLargeQuery prepareCommand sql sqlbind prefetch cmdbind These functions will typically have the same names and intentions but their specific types and usage may differ between DBMS",
        "hierarchy": "Database Enumerator",
        "module": "Database.Enumerator",
        "name": "Enumerator",
        "normalized": "",
        "package": "Takusen",
        "partial": "Enumerator",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Enumerator.html#t:BindA",
      "description": {
        "fct-descr": "\u003cp\u003eThe binding object (bo) below is very abstract, on purpose.\n It may be |IO a|, it may be String, it may be a function, etc.\n The binding object can hold the result of marshalling,\n or bo can hold the current counter, etc.\n Different databases do things very differently:\n compare PostgreSQL and the Stub (which models Oracle).\n\u003c/p\u003e",
        "fct-module": "Database.Enumerator",
        "fct-package": "Takusen",
        "fct-signature": "data",
        "fct-source": "src/Database-InternalEnumerator.html#BindA",
        "fct-type": "data",
        "title": "BindA"
      },
      "index": {
        "description": "The binding object bo below is very abstract on purpose It may be IO it may be String it may be function etc The binding object can hold the result of marshalling or bo can hold the current counter etc Different databases do things very differently compare PostgreSQL and the Stub which models Oracle",
        "hierarchy": "Database Enumerator",
        "module": "Database.Enumerator",
        "name": "BindA",
        "normalized": "",
        "package": "Takusen",
        "partial": "Bind",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Enumerator.html#t:ColNum",
      "description": {
        "fct-module": "Database.Enumerator",
        "fct-package": "Takusen",
        "fct-signature": "type",
        "fct-source": "src/Database-InternalEnumerator.html#ColNum",
        "fct-type": "type",
        "title": "ColNum"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Enumerator",
        "module": "Database.Enumerator",
        "name": "ColNum",
        "normalized": "",
        "package": "Takusen",
        "partial": "Col Num",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Enumerator.html#t:Command",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eCommand\u003c/a\u003e\u003c/code\u003e is not a query: command deletes or updates rows, creates/drops\n tables, or changes database state.\n \u003ccode\u003eexecuteCommand\u003c/code\u003e returns the number of affected rows (or 0 if DDL i.e. not DML).\n\u003c/p\u003e",
        "fct-module": "Database.Enumerator",
        "fct-package": "Takusen",
        "fct-signature": "class",
        "fct-source": "src/Database-InternalEnumerator.html#Command",
        "fct-type": "class",
        "title": "Command"
      },
      "index": {
        "description": "Command is not query command deletes or updates rows creates drops tables or changes database state executeCommand returns the number of affected rows or if DDL i.e not DML",
        "hierarchy": "Database Enumerator",
        "module": "Database.Enumerator",
        "name": "Command",
        "normalized": "",
        "package": "Takusen",
        "partial": "Command",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Enumerator.html#t:ConnectA",
      "description": {
        "fct-descr": "\u003cp\u003eA wrapper around the action to open the database. That wrapper is not\n exported to the end user. The only reason for the wrapper is to\n guarantee that the only thing to do with the result of\n \u003ccode\u003eDatabase.Enumerator.Sqlite.connect\u003c/code\u003e function is to pass it out\n directly to \u003ccode\u003eDatabase.Enumerator.withSession\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.Enumerator",
        "fct-package": "Takusen",
        "fct-signature": "data",
        "fct-source": "src/Database-InternalEnumerator.html#ConnectA",
        "fct-type": "data",
        "title": "ConnectA"
      },
      "index": {
        "description": "wrapper around the action to open the database That wrapper is not exported to the end user The only reason for the wrapper is to guarantee that the only thing to do with the result of Database.Enumerator.Sqlite.connect function is to pass it out directly to Database.Enumerator.withSession",
        "hierarchy": "Database Enumerator",
        "module": "Database.Enumerator",
        "name": "ConnectA",
        "normalized": "",
        "package": "Takusen",
        "partial": "Connect",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Enumerator.html#t:DBBind",
      "description": {
        "fct-descr": "\u003cp\u003eThe class DBBind is not used by the end-user.\n It is used to tie up low-level database access and the enumerator.\n A database-specific library must provide a set of instances for DBBind.\n The latter are the dual of DBType.\n\u003c/p\u003e",
        "fct-module": "Database.Enumerator",
        "fct-package": "Takusen",
        "fct-signature": "class",
        "fct-source": "src/Database-InternalEnumerator.html#DBBind",
        "fct-type": "class",
        "title": "DBBind"
      },
      "index": {
        "description": "The class DBBind is not used by the end-user It is used to tie up low-level database access and the enumerator database-specific library must provide set of instances for DBBind The latter are the dual of DBType",
        "hierarchy": "Database Enumerator",
        "module": "Database.Enumerator",
        "name": "DBBind",
        "normalized": "",
        "package": "Takusen",
        "partial": "DBBind",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Enumerator.html#t:DBException",
      "description": {
        "fct-module": "Database.Enumerator",
        "fct-package": "Takusen",
        "fct-signature": "data",
        "fct-source": "src/Database-InternalEnumerator.html#DBException",
        "fct-type": "data",
        "title": "DBException"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Enumerator",
        "module": "Database.Enumerator",
        "name": "DBException",
        "normalized": "",
        "package": "Takusen",
        "partial": "DBException",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Enumerator.html#t:DBM",
      "description": {
        "fct-module": "Database.Enumerator",
        "fct-package": "Takusen",
        "fct-signature": "data",
        "fct-source": "src/Database-Enumerator.html#DBM",
        "fct-type": "data",
        "title": "DBM"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Enumerator",
        "module": "Database.Enumerator",
        "name": "DBM",
        "normalized": "",
        "package": "Takusen",
        "partial": "DBM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Enumerator.html#t:DBType",
      "description": {
        "fct-descr": "\u003cp\u003eA 'buffer' means a column buffer: a data structure that points to a\n block of memory allocated for the values of one particular\n column. Since a query normally fetches a row of several columns, we\n typically deal with a list of column buffers. Although the column data\n are typed (e.g., Integer, CalendarDate, etc), column buffers hide that\n type. Think of the column buffer as Dynamics. The class DBType below\n describes marshalling functions, to fetch a typed value out of the\n 'untyped' columnBuffer.\n\u003c/p\u003e\u003cp\u003eDifferent DBMS's (that is, different session objects) have, in\n general, columnBuffers of different types: the type of Column Buffer\n is specific to a database.\n So, ISession (m) uniquely determines the buffer type (b)??\n Or, actually, a query uniquely determines the buffer.\n\u003c/p\u003e\u003cp\u003eThe class DBType is not used by the end-user.\n It is used to tie up low-level database access and the enumerator.\n A database-specific library must provide a set of instances for DBType.\n\u003c/p\u003e",
        "fct-module": "Database.Enumerator",
        "fct-package": "Takusen",
        "fct-signature": "class",
        "fct-source": "src/Database-InternalEnumerator.html#DBType",
        "fct-type": "class",
        "title": "DBType"
      },
      "index": {
        "description": "buffer means column buffer data structure that points to block of memory allocated for the values of one particular column Since query normally fetches row of several columns we typically deal with list of column buffers Although the column data are typed e.g Integer CalendarDate etc column buffers hide that type Think of the column buffer as Dynamics The class DBType below describes marshalling functions to fetch typed value out of the untyped columnBuffer Different DBMS that is different session objects have in general columnBuffers of different types the type of Column Buffer is specific to database So ISession uniquely determines the buffer type Or actually query uniquely determines the buffer The class DBType is not used by the end-user It is used to tie up low-level database access and the enumerator database-specific library must provide set of instances for DBType",
        "hierarchy": "Database Enumerator",
        "module": "Database.Enumerator",
        "name": "DBType",
        "normalized": "",
        "package": "Takusen",
        "partial": "DBType",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Enumerator.html#t:EnvInquiry",
      "description": {
        "fct-module": "Database.Enumerator",
        "fct-package": "Takusen",
        "fct-signature": "class",
        "fct-source": "src/Database-InternalEnumerator.html#EnvInquiry",
        "fct-type": "class",
        "title": "EnvInquiry"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Enumerator",
        "module": "Database.Enumerator",
        "name": "EnvInquiry",
        "normalized": "",
        "package": "Takusen",
        "partial": "Env Inquiry",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Enumerator.html#t:IPrepared",
      "description": {
        "fct-module": "Database.Enumerator",
        "fct-package": "Takusen",
        "fct-signature": "class",
        "fct-source": "src/Database-InternalEnumerator.html#IPrepared",
        "fct-type": "class",
        "title": "IPrepared"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Enumerator",
        "module": "Database.Enumerator",
        "name": "IPrepared",
        "normalized": "",
        "package": "Takusen",
        "partial": "IPrepared",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Enumerator.html#t:IQuery",
      "description": {
        "fct-descr": "\u003cp\u003eThe class IQuery describes the class of query objects. Each\n database (that is, each Session object) has its own Query object. \n We may assume that a Query object includes (at least, conceptually)\n a (pointer to) a Session object, so a Query object determines the\n Session object.\n A back-end provides an instance (or instances) of IQuery.\n The end user never seens the IQuery class (let alone its methods).\n\u003c/p\u003e\u003cp\u003eCan a session have several types of query objects?\n Let's assume that it can: but a statement plus the session uniquely\n determine the query,\n\u003c/p\u003e\u003cp\u003eNote that we explicitly use IO monad because we will have to explicitly\n do FFI.\n\u003c/p\u003e",
        "fct-module": "Database.Enumerator",
        "fct-package": "Takusen",
        "fct-signature": "class",
        "fct-source": "src/Database-InternalEnumerator.html#IQuery",
        "fct-type": "class",
        "title": "IQuery"
      },
      "index": {
        "description": "The class IQuery describes the class of query objects Each database that is each Session object has its own Query object We may assume that Query object includes at least conceptually pointer to Session object so Query object determines the Session object back-end provides an instance or instances of IQuery The end user never seens the IQuery class let alone its methods Can session have several types of query objects Let assume that it can but statement plus the session uniquely determine the query Note that we explicitly use IO monad because we will have to explicitly do FFI",
        "hierarchy": "Database Enumerator",
        "module": "Database.Enumerator",
        "name": "IQuery",
        "normalized": "",
        "package": "Takusen",
        "partial": "IQuery",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Enumerator.html#t:ISession",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eISession\u003c/a\u003e\u003c/code\u003e class describes a database session to a particular\n DBMS.  Oracle has its own Session object, SQLite has its own\n session object (which maintains the connection handle to the database\n engine and other related stuff). Session objects for different databases\n normally have different types -- yet they all belong to the class ISession\n so we can do generic operations like \u003ccode\u003ecommit\u003c/code\u003e, \u003ccode\u003eexecDDL\u003c/code\u003e, etc. \n in a database-independent manner.\n\u003c/p\u003e\u003cp\u003eSession objects per se are created by database connection/login functions.\n\u003c/p\u003e\u003cp\u003eThe class \u003ccode\u003e\u003ca\u003eISession\u003c/a\u003e\u003c/code\u003e is thus an interface between low-level (and\n database-specific) code and the Enumerator, database-independent\n code.\n The \u003ccode\u003e\u003ca\u003eISession\u003c/a\u003e\u003c/code\u003e class is NOT visible to the end user -- neither the class,\n nor any of its methods.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eISession\u003c/a\u003e\u003c/code\u003e class describes the mapping from connection object to\n the session object. The connection object is created by the end user\n (and this is how the end user tells which particular back end he wants).\n The session object is not accessible by the end user in any way.\n Even the type of the session object should be hidden!\n\u003c/p\u003e",
        "fct-module": "Database.Enumerator",
        "fct-package": "Takusen",
        "fct-signature": "class",
        "fct-source": "src/Database-InternalEnumerator.html#ISession",
        "fct-type": "class",
        "title": "ISession"
      },
      "index": {
        "description": "The ISession class describes database session to particular DBMS Oracle has its own Session object SQLite has its own session object which maintains the connection handle to the database engine and other related stuff Session objects for different databases normally have different types yet they all belong to the class ISession so we can do generic operations like commit execDDL etc in database-independent manner Session objects per se are created by database connection login functions The class ISession is thus an interface between low-level and database-specific code and the Enumerator database-independent code The ISession class is NOT visible to the end user neither the class nor any of its methods The ISession class describes the mapping from connection object to the session object The connection object is created by the end user and this is how the end user tells which particular back end he wants The session object is not accessible by the end user in any way Even the type of the session object should be hidden",
        "hierarchy": "Database Enumerator",
        "module": "Database.Enumerator",
        "name": "ISession",
        "normalized": "",
        "package": "Takusen",
        "partial": "ISession",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Enumerator.html#t:IsolationLevel",
      "description": {
        "fct-module": "Database.Enumerator",
        "fct-package": "Takusen",
        "fct-signature": "data",
        "fct-source": "src/Database-InternalEnumerator.html#IsolationLevel",
        "fct-type": "data",
        "title": "IsolationLevel"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Enumerator",
        "module": "Database.Enumerator",
        "name": "IsolationLevel",
        "normalized": "",
        "package": "Takusen",
        "partial": "Isolation Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Enumerator.html#t:IterAct",
      "description": {
        "fct-module": "Database.Enumerator",
        "fct-package": "Takusen",
        "fct-signature": "type",
        "fct-source": "src/Database-Enumerator.html#IterAct",
        "fct-type": "type",
        "title": "IterAct"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Enumerator",
        "module": "Database.Enumerator",
        "name": "IterAct",
        "normalized": "",
        "package": "Takusen",
        "partial": "Iter Act",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Enumerator.html#t:IterResult",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eIterResult\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eIterAct\u003c/a\u003e\u003c/code\u003e give us some type sugar.\n Without them, the types of iteratee functions become\n quite unwieldy.\n\u003c/p\u003e",
        "fct-module": "Database.Enumerator",
        "fct-package": "Takusen",
        "fct-signature": "type",
        "fct-source": "src/Database-Enumerator.html#IterResult",
        "fct-type": "type",
        "title": "IterResult"
      },
      "index": {
        "description": "IterResult and IterAct give us some type sugar Without them the types of iteratee functions become quite unwieldy",
        "hierarchy": "Database Enumerator",
        "module": "Database.Enumerator",
        "name": "IterResult",
        "normalized": "",
        "package": "Takusen",
        "partial": "Iter Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Enumerator.html#t:NextResultSet",
      "description": {
        "fct-module": "Database.Enumerator",
        "fct-package": "Takusen",
        "fct-signature": "data",
        "fct-source": "src/Database-Enumerator.html#NextResultSet",
        "fct-type": "data",
        "title": "NextResultSet"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Enumerator",
        "module": "Database.Enumerator",
        "name": "NextResultSet",
        "normalized": "",
        "package": "Takusen",
        "partial": "Next Result Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Enumerator.html#t:Position",
      "description": {
        "fct-module": "Database.Enumerator",
        "fct-package": "Takusen",
        "fct-signature": "type",
        "fct-source": "src/Database-InternalEnumerator.html#Position",
        "fct-type": "type",
        "title": "Position"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Enumerator",
        "module": "Database.Enumerator",
        "name": "Position",
        "normalized": "",
        "package": "Takusen",
        "partial": "Position",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Enumerator.html#t:PreparationA",
      "description": {
        "fct-descr": "\u003cp\u003eThis type is not visible to the end user (cf. ConnectA). It forms a private\n `communication channel' between Database.Enumerator and a back end.\n\u003c/p\u003e\u003cp\u003eWhy don't we make a user-visible class with a \u003ccode\u003eprepare\u003c/code\u003e method?\n Because it means to standardize the preparation method signature\n across all databases. Some databases need more parameters, some\n fewer. There may be several statement preparation functions within one\n database.  So, instead of standardizing the signature of the\n preparation function, we standardize on the _result_ of that\n function. To be more precise, we standardize on the properties of the\n result: whatever it is, the eventual prepared statement should be\n suitable to be passed to \u003ccode\u003ebindRun\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.Enumerator",
        "fct-package": "Takusen",
        "fct-signature": "data",
        "fct-source": "src/Database-InternalEnumerator.html#PreparationA",
        "fct-type": "data",
        "title": "PreparationA"
      },
      "index": {
        "description": "This type is not visible to the end user cf ConnectA It forms private communication channel between Database.Enumerator and back end Why don we make user-visible class with prepare method Because it means to standardize the preparation method signature across all databases Some databases need more parameters some fewer There may be several statement preparation functions within one database So instead of standardizing the signature of the preparation function we standardize on the result of that function To be more precise we standardize on the properties of the result whatever it is the eventual prepared statement should be suitable to be passed to bindRun",
        "hierarchy": "Database Enumerator",
        "module": "Database.Enumerator",
        "name": "PreparationA",
        "normalized": "",
        "package": "Takusen",
        "partial": "Preparation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Enumerator.html#t:PreparedStmt",
      "description": {
        "fct-module": "Database.Enumerator",
        "fct-package": "Takusen",
        "fct-signature": "data",
        "fct-source": "src/Database-InternalEnumerator.html#PreparedStmt",
        "fct-type": "data",
        "title": "PreparedStmt"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Enumerator",
        "module": "Database.Enumerator",
        "name": "PreparedStmt",
        "normalized": "",
        "package": "Takusen",
        "partial": "Prepared Stmt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Enumerator.html#t:RefCursor",
      "description": {
        "fct-module": "Database.Enumerator",
        "fct-package": "Takusen",
        "fct-signature": "data",
        "fct-source": "src/Database-Enumerator.html#RefCursor",
        "fct-type": "data",
        "title": "RefCursor"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Enumerator",
        "module": "Database.Enumerator",
        "name": "RefCursor",
        "normalized": "",
        "package": "Takusen",
        "partial": "Ref Cursor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Enumerator.html#t:RowNum",
      "description": {
        "fct-module": "Database.Enumerator",
        "fct-package": "Takusen",
        "fct-signature": "type",
        "fct-source": "src/Database-InternalEnumerator.html#RowNum",
        "fct-type": "type",
        "title": "RowNum"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Enumerator",
        "module": "Database.Enumerator",
        "name": "RowNum",
        "normalized": "",
        "package": "Takusen",
        "partial": "Row Num",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Enumerator.html#t:SqlState",
      "description": {
        "fct-module": "Database.Enumerator",
        "fct-package": "Takusen",
        "fct-signature": "type",
        "fct-source": "src/Database-InternalEnumerator.html#SqlState",
        "fct-type": "type",
        "title": "SqlState"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Enumerator",
        "module": "Database.Enumerator",
        "name": "SqlState",
        "normalized": "",
        "package": "Takusen",
        "partial": "Sql State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Enumerator.html#t:SqlStateClass",
      "description": {
        "fct-module": "Database.Enumerator",
        "fct-package": "Takusen",
        "fct-signature": "type",
        "fct-source": "src/Database-InternalEnumerator.html#SqlStateClass",
        "fct-type": "type",
        "title": "SqlStateClass"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Enumerator",
        "module": "Database.Enumerator",
        "name": "SqlStateClass",
        "normalized": "",
        "package": "Takusen",
        "partial": "Sql State Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Enumerator.html#t:SqlStateSubClass",
      "description": {
        "fct-module": "Database.Enumerator",
        "fct-package": "Takusen",
        "fct-signature": "type",
        "fct-source": "src/Database-InternalEnumerator.html#SqlStateSubClass",
        "fct-type": "type",
        "title": "SqlStateSubClass"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Enumerator",
        "module": "Database.Enumerator",
        "name": "SqlStateSubClass",
        "normalized": "",
        "package": "Takusen",
        "partial": "Sql State Sub Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Enumerator.html#t:Statement",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eStatement\u003c/a\u003e\u003c/code\u003e defines the API for query objects i.e.\n which types can be queries.\n\u003c/p\u003e",
        "fct-module": "Database.Enumerator",
        "fct-package": "Takusen",
        "fct-signature": "class",
        "fct-source": "src/Database-InternalEnumerator.html#Statement",
        "fct-type": "class",
        "title": "Statement"
      },
      "index": {
        "description": "Statement defines the API for query objects i.e which types can be queries",
        "hierarchy": "Database Enumerator",
        "module": "Database.Enumerator",
        "name": "Statement",
        "normalized": "",
        "package": "Takusen",
        "partial": "Statement",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Enumerator.html#v:DBError",
      "description": {
        "fct-descr": "\u003cp\u003eDBMS error message.\n\u003c/p\u003e",
        "fct-module": "Database.Enumerator",
        "fct-package": "Takusen",
        "fct-signature": "DBError SqlState Int String",
        "fct-source": "src/Database-InternalEnumerator.html#DBException",
        "fct-type": "function",
        "title": "DBError"
      },
      "index": {
        "description": "DBMS error message",
        "hierarchy": "Database Enumerator",
        "module": "Database.Enumerator",
        "name": "DBError",
        "normalized": "",
        "package": "Takusen",
        "partial": "DBError",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Enumerator.html#v:DBFatal",
      "description": {
        "fct-module": "Database.Enumerator",
        "fct-package": "Takusen",
        "fct-signature": "DBFatal SqlState Int String",
        "fct-source": "src/Database-InternalEnumerator.html#DBException",
        "fct-type": "function",
        "title": "DBFatal"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Enumerator",
        "module": "Database.Enumerator",
        "name": "DBFatal",
        "normalized": "",
        "package": "Takusen",
        "partial": "DBFatal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Enumerator.html#v:DBNoData",
      "description": {
        "fct-descr": "\u003cp\u003eThrown by cursor functions if you try to fetch after the end.\n\u003c/p\u003e",
        "fct-module": "Database.Enumerator",
        "fct-package": "Takusen",
        "fct-signature": "DBNoData",
        "fct-source": "src/Database-InternalEnumerator.html#DBException",
        "fct-type": "function",
        "title": "DBNoData"
      },
      "index": {
        "description": "Thrown by cursor functions if you try to fetch after the end",
        "hierarchy": "Database Enumerator",
        "module": "Database.Enumerator",
        "name": "DBNoData",
        "normalized": "",
        "package": "Takusen",
        "partial": "DBNo Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Enumerator.html#v:DBUnexpectedNull",
      "description": {
        "fct-descr": "\u003cp\u003ethe iteratee function used for queries accepts both nullable (Maybe) and\n non-nullable types. If the query itself returns a null in a column where a\n non-nullable type was specified, we can't handle it, so DBUnexpectedNull is thrown.\n\u003c/p\u003e",
        "fct-module": "Database.Enumerator",
        "fct-package": "Takusen",
        "fct-signature": "DBUnexpectedNull RowNum ColNum",
        "fct-source": "src/Database-InternalEnumerator.html#DBException",
        "fct-type": "function",
        "title": "DBUnexpectedNull"
      },
      "index": {
        "description": "the iteratee function used for queries accepts both nullable Maybe and non-nullable types If the query itself returns null in column where non-nullable type was specified we can handle it so DBUnexpectedNull is thrown",
        "hierarchy": "Database Enumerator",
        "module": "Database.Enumerator",
        "name": "DBUnexpectedNull",
        "normalized": "",
        "package": "Takusen",
        "partial": "DBUnexpected Null",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Enumerator.html#v:NextResultSet",
      "description": {
        "fct-module": "Database.Enumerator",
        "fct-package": "Takusen",
        "fct-signature": "NextResultSet (PreparedStmt mark stmt)",
        "fct-source": "src/Database-Enumerator.html#NextResultSet",
        "fct-type": "function",
        "title": "NextResultSet"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Enumerator",
        "module": "Database.Enumerator",
        "name": "NextResultSet",
        "normalized": "",
        "package": "Takusen",
        "partial": "Next Result Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Enumerator.html#v:ReadCommitted",
      "description": {
        "fct-module": "Database.Enumerator",
        "fct-package": "Takusen",
        "fct-signature": "ReadCommitted",
        "fct-source": "src/Database-InternalEnumerator.html#IsolationLevel",
        "fct-type": "function",
        "title": "ReadCommitted"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Enumerator",
        "module": "Database.Enumerator",
        "name": "ReadCommitted",
        "normalized": "",
        "package": "Takusen",
        "partial": "Read Committed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Enumerator.html#v:ReadUncommitted",
      "description": {
        "fct-module": "Database.Enumerator",
        "fct-package": "Takusen",
        "fct-signature": "ReadUncommitted",
        "fct-source": "src/Database-InternalEnumerator.html#IsolationLevel",
        "fct-type": "function",
        "title": "ReadUncommitted"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Enumerator",
        "module": "Database.Enumerator",
        "name": "ReadUncommitted",
        "normalized": "",
        "package": "Takusen",
        "partial": "Read Uncommitted",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Enumerator.html#v:RefCursor",
      "description": {
        "fct-module": "Database.Enumerator",
        "fct-package": "Takusen",
        "fct-signature": "RefCursor a",
        "fct-source": "src/Database-Enumerator.html#RefCursor",
        "fct-type": "function",
        "title": "RefCursor"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Enumerator",
        "module": "Database.Enumerator",
        "name": "RefCursor",
        "normalized": "",
        "package": "Takusen",
        "partial": "Ref Cursor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Enumerator.html#v:RepeatableRead",
      "description": {
        "fct-module": "Database.Enumerator",
        "fct-package": "Takusen",
        "fct-signature": "RepeatableRead",
        "fct-source": "src/Database-InternalEnumerator.html#IsolationLevel",
        "fct-type": "function",
        "title": "RepeatableRead"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Enumerator",
        "module": "Database.Enumerator",
        "name": "RepeatableRead",
        "normalized": "",
        "package": "Takusen",
        "partial": "Repeatable Read",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Enumerator.html#v:Serialisable",
      "description": {
        "fct-module": "Database.Enumerator",
        "fct-package": "Takusen",
        "fct-signature": "Serialisable",
        "fct-source": "src/Database-InternalEnumerator.html#IsolationLevel",
        "fct-type": "function",
        "title": "Serialisable"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Enumerator",
        "module": "Database.Enumerator",
        "name": "Serialisable",
        "normalized": "",
        "package": "Takusen",
        "partial": "Serialisable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Enumerator.html#v:Serializable",
      "description": {
        "fct-descr": "\u003cp\u003efor alternative spellers\n\u003c/p\u003e",
        "fct-module": "Database.Enumerator",
        "fct-package": "Takusen",
        "fct-signature": "Serializable",
        "fct-source": "src/Database-InternalEnumerator.html#IsolationLevel",
        "fct-type": "function",
        "title": "Serializable"
      },
      "index": {
        "description": "for alternative spellers",
        "hierarchy": "Database Enumerator",
        "module": "Database.Enumerator",
        "name": "Serializable",
        "normalized": "",
        "package": "Takusen",
        "partial": "Serializable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Enumerator.html#v:basicDBExceptionReporter",
      "description": {
        "fct-descr": "\u003cp\u003eThis simple handler reports the error to \u003ccode\u003estdout\u003c/code\u003e and swallows it\n i.e. it doesn't propagate.\n\u003c/p\u003e",
        "fct-module": "Database.Enumerator",
        "fct-package": "Takusen",
        "fct-signature": "DBException -\u003e m ()",
        "fct-source": "src/Database-Enumerator.html#basicDBExceptionReporter",
        "fct-type": "function",
        "title": "basicDBExceptionReporter"
      },
      "index": {
        "description": "This simple handler reports the error to stdout and swallows it i.e it doesn propagate",
        "hierarchy": "Database Enumerator",
        "module": "Database.Enumerator",
        "name": "basicDBExceptionReporter",
        "normalized": "DBException-\u003ea()",
        "package": "Takusen",
        "partial": "DBException Reporter",
        "signature": "DBException-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Enumerator.html#v:beginTransaction",
      "description": {
        "fct-module": "Database.Enumerator",
        "fct-package": "Takusen",
        "fct-signature": "IsolationLevel -\u003e DBM mark s ()",
        "fct-source": "src/Database-Enumerator.html#beginTransaction",
        "fct-type": "function",
        "title": "beginTransaction"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Enumerator",
        "module": "Database.Enumerator",
        "name": "beginTransaction",
        "normalized": "IsolationLevel-\u003eDBM a b()",
        "package": "Takusen",
        "partial": "Transaction",
        "signature": "IsolationLevel-\u003eDBM mark s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Enumerator.html#v:bindP",
      "description": {
        "fct-descr": "\u003cp\u003eThis is really just a wrapper that lets us write lists of\n heterogenous bind values e.g. \u003ccode\u003e[bindP \"string\", bindP (0::Int), ...]\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Database.Enumerator",
        "fct-package": "Takusen",
        "fct-signature": "a -\u003e BindA sess stmt bo",
        "fct-source": "src/Database-InternalEnumerator.html#bindP",
        "fct-type": "method",
        "title": "bindP"
      },
      "index": {
        "description": "This is really just wrapper that lets us write lists of heterogenous bind values e.g bindP string bindP Int",
        "hierarchy": "Database Enumerator",
        "module": "Database.Enumerator",
        "name": "bindP",
        "normalized": "a-\u003eBindA b c d",
        "package": "Takusen",
        "partial": "",
        "signature": "a-\u003eBindA sess stmt bo"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Enumerator.html#v:catchDB",
      "description": {
        "fct-descr": "\u003cp\u003eCatch \u003ccode\u003eDatabase.InteralEnumerator.DBException\u003c/code\u003es thrown in the \u003ccode\u003e\u003ca\u003eDBM\u003c/a\u003e\u003c/code\u003e\n monad.\n\u003c/p\u003e",
        "fct-module": "Database.Enumerator",
        "fct-package": "Takusen",
        "fct-signature": "m a -\u003e (DBException -\u003e m a) -\u003e m a",
        "fct-source": "src/Database-Enumerator.html#catchDB",
        "fct-type": "function",
        "title": "catchDB"
      },
      "index": {
        "description": "Catch Database.InteralEnumerator.DBException thrown in the DBM monad",
        "hierarchy": "Database Enumerator",
        "module": "Database.Enumerator",
        "name": "catchDB",
        "normalized": "a b-\u003e(DBException-\u003ea b)-\u003ea b",
        "package": "Takusen",
        "partial": "DB",
        "signature": "m a-\u003e(DBException-\u003em a)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Enumerator.html#v:catchDBError",
      "description": {
        "fct-descr": "\u003cp\u003eIf you want to trap a specific error number, use this.\n It passes anything else up.\n\u003c/p\u003e",
        "fct-module": "Database.Enumerator",
        "fct-package": "Takusen",
        "fct-signature": "Int -\u003e m a -\u003e (DBException -\u003e m a) -\u003e m a",
        "fct-source": "src/Database-Enumerator.html#catchDBError",
        "fct-type": "function",
        "title": "catchDBError"
      },
      "index": {
        "description": "If you want to trap specific error number use this It passes anything else up",
        "hierarchy": "Database Enumerator",
        "module": "Database.Enumerator",
        "name": "catchDBError",
        "normalized": "Int-\u003ea b-\u003e(DBException-\u003ea b)-\u003ea b",
        "package": "Takusen",
        "partial": "DBError",
        "signature": "Int-\u003em a-\u003e(DBException-\u003em a)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Enumerator.html#v:commit",
      "description": {
        "fct-module": "Database.Enumerator",
        "fct-package": "Takusen",
        "fct-signature": "DBM mark s ()",
        "fct-source": "src/Database-Enumerator.html#commit",
        "fct-type": "function",
        "title": "commit"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Enumerator",
        "module": "Database.Enumerator",
        "name": "commit",
        "normalized": "DBM a b()",
        "package": "Takusen",
        "partial": "",
        "signature": "DBM mark s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Enumerator.html#v:currentRowNum",
      "description": {
        "fct-module": "Database.Enumerator",
        "fct-package": "Takusen",
        "fct-signature": "q -\u003e IO Int",
        "fct-source": "src/Database-InternalEnumerator.html#currentRowNum",
        "fct-type": "method",
        "title": "currentRowNum"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Enumerator",
        "module": "Database.Enumerator",
        "name": "currentRowNum",
        "normalized": "a-\u003eIO Int",
        "package": "Takusen",
        "partial": "Row Num",
        "signature": "q-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Enumerator.html#v:cursorCurrent",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the results fetched so far, processed by iteratee function.\n\u003c/p\u003e",
        "fct-module": "Database.Enumerator",
        "fct-package": "Takusen",
        "fct-signature": "DBCursor mark (DBM mark s) a -\u003e DBM mark s a",
        "fct-source": "src/Database-Enumerator.html#cursorCurrent",
        "fct-type": "function",
        "title": "cursorCurrent"
      },
      "index": {
        "description": "Returns the results fetched so far processed by iteratee function",
        "hierarchy": "Database Enumerator",
        "module": "Database.Enumerator",
        "name": "cursorCurrent",
        "normalized": "DBCursor a(DBM a b)c-\u003eDBM a b c",
        "package": "Takusen",
        "partial": "Current",
        "signature": "DBCursor mark(DBM mark s)a-\u003eDBM mark s a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Enumerator.html#v:cursorIsEOF",
      "description": {
        "fct-descr": "\u003cp\u003ecursorIsEOF's return value tells you if there are any more rows or not.\n If you call \u003ccode\u003e\u003ca\u003ecursorNext\u003c/a\u003e\u003c/code\u003e when there are no more rows,\n a \u003ccode\u003eDBNoData\u003c/code\u003e exception is thrown.\n Cursors are automatically closed and freed when:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e the iteratee returns \u003ccode\u003eLeft a\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e the query result-set is exhausted.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eTo make life easier, we've created a \u003ccode\u003e\u003ca\u003ewithCursor\u003c/a\u003e\u003c/code\u003e function,\n which will clean up if an error (exception) occurs,\n or the code exits early.\n You can nest them to get interleaving, if you desire:\n\u003c/p\u003e\u003cpre\u003e  withCursor query1 iter1 [] $ \\c1 -\u003e do\n    withCursor query2 iter2 [] $ \\c2 -\u003e do\n      r1 \u003c- cursorCurrent c1\n      r2 \u003c- cursorCurrent c2\n      ...\n      return something\n\u003c/pre\u003e",
        "fct-module": "Database.Enumerator",
        "fct-package": "Takusen",
        "fct-signature": "DBCursor mark (DBM mark s) a -\u003e DBM mark s Bool",
        "fct-source": "src/Database-Enumerator.html#cursorIsEOF",
        "fct-type": "function",
        "title": "cursorIsEOF"
      },
      "index": {
        "description": "cursorIsEOF return value tells you if there are any more rows or not If you call cursorNext when there are no more rows DBNoData exception is thrown Cursors are automatically closed and freed when the iteratee returns Left the query result-set is exhausted To make life easier we ve created withCursor function which will clean up if an error exception occurs or the code exits early You can nest them to get interleaving if you desire withCursor query1 iter1 c1 do withCursor query2 iter2 c2 do r1 cursorCurrent c1 r2 cursorCurrent c2 return something",
        "hierarchy": "Database Enumerator",
        "module": "Database.Enumerator",
        "name": "cursorIsEOF",
        "normalized": "DBCursor a(DBM a b)c-\u003eDBM a b Bool",
        "package": "Takusen",
        "partial": "Is EOF",
        "signature": "DBCursor mark(DBM mark s)a-\u003eDBM mark s Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Enumerator.html#v:cursorNext",
      "description": {
        "fct-descr": "\u003cp\u003eAdvance the cursor. Returns the cursor. The return value is usually ignored.\n\u003c/p\u003e",
        "fct-module": "Database.Enumerator",
        "fct-package": "Takusen",
        "fct-signature": "DBCursor mark (DBM mark s) a -\u003e DBM mark s (DBCursor mark (DBM mark s) a)",
        "fct-source": "src/Database-Enumerator.html#cursorNext",
        "fct-type": "function",
        "title": "cursorNext"
      },
      "index": {
        "description": "Advance the cursor Returns the cursor The return value is usually ignored",
        "hierarchy": "Database Enumerator",
        "module": "Database.Enumerator",
        "name": "cursorNext",
        "normalized": "DBCursor a(DBM a b)c-\u003eDBM a b(DBCursor a(DBM a b)c)",
        "package": "Takusen",
        "partial": "Next",
        "signature": "DBCursor mark(DBM mark s)a-\u003eDBM mark s(DBCursor mark(DBM mark s)a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Enumerator.html#v:doQuery",
      "description": {
        "fct-descr": "\u003cp\u003eThe left-fold interface.\n\u003c/p\u003e",
        "fct-module": "Database.Enumerator",
        "fct-package": "Takusen",
        "fct-signature": "stmt-\u003e i-\u003e seed-\u003e DBM mark sess seed",
        "fct-type": "function",
        "title": "doQuery"
      },
      "index": {
        "description": "The left-fold interface",
        "hierarchy": "Database Enumerator",
        "module": "Database.Enumerator",
        "name": "doQuery",
        "normalized": "a-\u003eb-\u003ec-\u003eDBM d e c",
        "package": "Takusen",
        "partial": "Query",
        "signature": "stmt-\u003ei-\u003eseed-\u003eDBM mark sess seed"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Enumerator.html#v:execDDL",
      "description": {
        "fct-descr": "\u003cp\u003eDDL operations don't manipulate data, so we return no information.\n If there is a problem, an exception will be raised.\n\u003c/p\u003e",
        "fct-module": "Database.Enumerator",
        "fct-package": "Takusen",
        "fct-signature": "stmt -\u003e DBM mark s ()",
        "fct-source": "src/Database-Enumerator.html#execDDL",
        "fct-type": "function",
        "title": "execDDL"
      },
      "index": {
        "description": "DDL operations don manipulate data so we return no information If there is problem an exception will be raised",
        "hierarchy": "Database Enumerator",
        "module": "Database.Enumerator",
        "name": "execDDL",
        "normalized": "a-\u003eDBM b c()",
        "package": "Takusen",
        "partial": "DDL",
        "signature": "stmt-\u003eDBM mark s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Enumerator.html#v:execDML",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the number of rows affected.\n\u003c/p\u003e",
        "fct-module": "Database.Enumerator",
        "fct-package": "Takusen",
        "fct-signature": "stmt -\u003e DBM mark s Int",
        "fct-source": "src/Database-Enumerator.html#execDML",
        "fct-type": "function",
        "title": "execDML"
      },
      "index": {
        "description": "Returns the number of rows affected",
        "hierarchy": "Database Enumerator",
        "module": "Database.Enumerator",
        "name": "execDML",
        "normalized": "a-\u003eDBM b c Int",
        "package": "Takusen",
        "partial": "DML",
        "signature": "stmt-\u003eDBM mark s Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Enumerator.html#v:formatDBException",
      "description": {
        "fct-descr": "\u003cp\u003eA show for \u003ccode\u003eDatabase.InteralEnumerator.DBException\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Database.Enumerator",
        "fct-package": "Takusen",
        "fct-signature": "DBException -\u003e String",
        "fct-source": "src/Database-Enumerator.html#formatDBException",
        "fct-type": "function",
        "title": "formatDBException"
      },
      "index": {
        "description": "show for Database.InteralEnumerator.DBException",
        "hierarchy": "Database Enumerator",
        "module": "Database.Enumerator",
        "name": "formatDBException",
        "normalized": "DBException-\u003eString",
        "package": "Takusen",
        "partial": "DBException",
        "signature": "DBException-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Enumerator.html#v:ifNull",
      "description": {
        "fct-descr": "\u003cp\u003eUseful utility function, for SQL weenies.\n\u003c/p\u003e",
        "fct-module": "Database.Enumerator",
        "fct-package": "Takusen",
        "fct-signature": "Maybe a-\u003e a-\u003e a",
        "fct-type": "function",
        "title": "ifNull"
      },
      "index": {
        "description": "Useful utility function for SQL weenies",
        "hierarchy": "Database Enumerator",
        "module": "Database.Enumerator",
        "name": "ifNull",
        "normalized": "Maybe a-\u003ea-\u003ea",
        "package": "Takusen",
        "partial": "Null",
        "signature": "Maybe a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Enumerator.html#v:ignoreDBError",
      "description": {
        "fct-descr": "\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003ecatchDBError\u003c/a\u003e\u003c/code\u003e, but ignores specific errors instead\n (propagates anything else).\n\u003c/p\u003e",
        "fct-module": "Database.Enumerator",
        "fct-package": "Takusen",
        "fct-signature": "Int -\u003e m a -\u003e m a",
        "fct-source": "src/Database-Enumerator.html#ignoreDBError",
        "fct-type": "function",
        "title": "ignoreDBError"
      },
      "index": {
        "description": "Analogous to catchDBError but ignores specific errors instead propagates anything else",
        "hierarchy": "Database Enumerator",
        "module": "Database.Enumerator",
        "name": "ignoreDBError",
        "normalized": "Int-\u003ea b-\u003ea b",
        "package": "Takusen",
        "partial": "DBError",
        "signature": "Int-\u003em a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Enumerator.html#v:inquire",
      "description": {
        "fct-descr": "\u003cp\u003eAllows arbitrary actions to be run the DBM monad.\n The back-end developer must supply instances of EnvInquiry,\n which is hidden away in \u003ca\u003eDatabase.InternalEnumerator\u003c/a\u003e.\n An example of this is \u003ccode\u003eDatabase.Sqlite.Enumerator.LastInsertRowid\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.Enumerator",
        "fct-package": "Takusen",
        "fct-signature": "key -\u003e DBM mark s result",
        "fct-source": "src/Database-Enumerator.html#inquire",
        "fct-type": "function",
        "title": "inquire"
      },
      "index": {
        "description": "Allows arbitrary actions to be run the DBM monad The back-end developer must supply instances of EnvInquiry which is hidden away in Database.InternalEnumerator An example of this is Database.Sqlite.Enumerator.LastInsertRowid",
        "hierarchy": "Database Enumerator",
        "module": "Database.Enumerator",
        "name": "inquire",
        "normalized": "a-\u003eDBM b c d",
        "package": "Takusen",
        "partial": "",
        "signature": "key-\u003eDBM mark s result"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Enumerator.html#v:reportRethrow",
      "description": {
        "fct-descr": "\u003cp\u003eThis handler reports the error and propagates it\n (usually to force the program to halt).\n\u003c/p\u003e",
        "fct-module": "Database.Enumerator",
        "fct-package": "Takusen",
        "fct-signature": "DBException -\u003e m a",
        "fct-source": "src/Database-Enumerator.html#reportRethrow",
        "fct-type": "function",
        "title": "reportRethrow"
      },
      "index": {
        "description": "This handler reports the error and propagates it usually to force the program to halt",
        "hierarchy": "Database Enumerator",
        "module": "Database.Enumerator",
        "name": "reportRethrow",
        "normalized": "DBException-\u003ea b",
        "package": "Takusen",
        "partial": "Rethrow",
        "signature": "DBException-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Enumerator.html#v:reportRethrowMsg",
      "description": {
        "fct-descr": "\u003cp\u003eSame as reportRethrow, but you can prefix some text to the error\n (perhaps to indicate which part of your program raised it).\n\u003c/p\u003e",
        "fct-module": "Database.Enumerator",
        "fct-package": "Takusen",
        "fct-signature": "String -\u003e DBException -\u003e m a",
        "fct-source": "src/Database-Enumerator.html#reportRethrowMsg",
        "fct-type": "function",
        "title": "reportRethrowMsg"
      },
      "index": {
        "description": "Same as reportRethrow but you can prefix some text to the error perhaps to indicate which part of your program raised it",
        "hierarchy": "Database Enumerator",
        "module": "Database.Enumerator",
        "name": "reportRethrowMsg",
        "normalized": "String-\u003eDBException-\u003ea b",
        "package": "Takusen",
        "partial": "Rethrow Msg",
        "signature": "String-\u003eDBException-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Enumerator.html#v:result",
      "description": {
        "fct-descr": "\u003cp\u003eAnother useful utility function.\n Use this to return a value from an iteratee function (the one passed to\n \u003ccode\u003e\u003ca\u003edoQuery\u003c/a\u003e\u003c/code\u003e).\n Note that you should probably nearly always use the strict version.\n\u003c/p\u003e",
        "fct-module": "Database.Enumerator",
        "fct-package": "Takusen",
        "fct-signature": "IterAct m a",
        "fct-source": "src/Database-Enumerator.html#result",
        "fct-type": "function",
        "title": "result"
      },
      "index": {
        "description": "Another useful utility function Use this to return value from an iteratee function the one passed to doQuery Note that you should probably nearly always use the strict version",
        "hierarchy": "Database Enumerator",
        "module": "Database.Enumerator",
        "name": "result",
        "normalized": "",
        "package": "Takusen",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Enumerator.html#v:result-39-",
      "description": {
        "fct-descr": "\u003cp\u003eA strict version. This is recommended unless you have a specific need for laziness,\n as the lazy version will gobble stack and heap.\n If you have a large result-set (in the order of 10-100K rows or more),\n it is likely to exhaust the standard 1M GHC stack.\n Whether or not \u003ccode\u003e\u003ca\u003eresult\u003c/a\u003e\u003c/code\u003e eats memory depends on what \u003ccode\u003ex\u003c/code\u003e does:\n if it's a delayed computation then it almost certainly will.\n This includes consing elements onto a list,\n and arithmetic operations (counting, summing, etc).\n\u003c/p\u003e",
        "fct-module": "Database.Enumerator",
        "fct-package": "Takusen",
        "fct-signature": "IterAct m a",
        "fct-source": "src/Database-Enumerator.html#result%27",
        "fct-type": "function",
        "title": "result'"
      },
      "index": {
        "description": "strict version This is recommended unless you have specific need for laziness as the lazy version will gobble stack and heap If you have large result-set in the order of rows or more it is likely to exhaust the standard GHC stack Whether or not result eats memory depends on what does if it delayed computation then it almost certainly will This includes consing elements onto list and arithmetic operations counting summing etc",
        "hierarchy": "Database Enumerator",
        "module": "Database.Enumerator",
        "name": "result'",
        "normalized": "",
        "package": "Takusen",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Enumerator.html#v:rollback",
      "description": {
        "fct-module": "Database.Enumerator",
        "fct-package": "Takusen",
        "fct-signature": "DBM mark s ()",
        "fct-source": "src/Database-Enumerator.html#rollback",
        "fct-type": "function",
        "title": "rollback"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Enumerator",
        "module": "Database.Enumerator",
        "name": "rollback",
        "normalized": "DBM a b()",
        "package": "Takusen",
        "partial": "",
        "signature": "DBM mark s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Enumerator.html#v:throwDB",
      "description": {
        "fct-descr": "\u003cp\u003eThrow a DBException. It's just a type-specific \u003ccode\u003eControl.Exception.throwDyn\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.Enumerator",
        "fct-package": "Takusen",
        "fct-signature": "DBException -\u003e a",
        "fct-source": "src/Database-InternalEnumerator.html#throwDB",
        "fct-type": "function",
        "title": "throwDB"
      },
      "index": {
        "description": "Throw DBException It just type-specific Control.Exception.throwDyn",
        "hierarchy": "Database Enumerator",
        "module": "Database.Enumerator",
        "name": "throwDB",
        "normalized": "DBException-\u003ea",
        "package": "Takusen",
        "partial": "DB",
        "signature": "DBException-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Enumerator.html#v:withBoundStatement",
      "description": {
        "fct-descr": "\u003cp\u003eApplies a prepared statement to bind variables to get a bound statement,\n which is passed to the provided action.\n Note that by the time it is passed to the action, the query or command\n has usually been executed.\n A bound statement would normally be an instance of\n \u003ccode\u003eDatabase.InternalEnumerator.Statement\u003c/code\u003e, so it can be passed to\n \u003ccode\u003e\u003ca\u003edoQuery\u003c/a\u003e\u003c/code\u003e\n in order to process the result-set, and also an instance of\n \u003ccode\u003eDatabase.InternalEnumerator.Command\u003c/code\u003e, so that we can write\n re-usable DML statements (inserts, updates, deletes).\n\u003c/p\u003e\u003cp\u003eThe Typeable constraint is to prevent the leakage of marked things.\n The type of bound statements should not be exported (and should not be\n in Typeable) so the bound statement can't leak either.\n\u003c/p\u003e",
        "fct-module": "Database.Enumerator",
        "fct-package": "Takusen",
        "fct-signature": "PreparedStmt mark stmt-\u003e [BindA s stmt bo]-\u003e (bstmt -\u003e DBM mark s a)-\u003e DBM mark s a",
        "fct-type": "function",
        "title": "withBoundStatement"
      },
      "index": {
        "description": "Applies prepared statement to bind variables to get bound statement which is passed to the provided action Note that by the time it is passed to the action the query or command has usually been executed bound statement would normally be an instance of Database.InternalEnumerator.Statement so it can be passed to doQuery in order to process the result-set and also an instance of Database.InternalEnumerator.Command so that we can write re-usable DML statements inserts updates deletes The Typeable constraint is to prevent the leakage of marked things The type of bound statements should not be exported and should not be in Typeable so the bound statement can leak either",
        "hierarchy": "Database Enumerator",
        "module": "Database.Enumerator",
        "name": "withBoundStatement",
        "normalized": "PreparedStmt a b-\u003e[BindA c b d]-\u003e(e-\u003eDBM a c f)-\u003eDBM a c f",
        "package": "Takusen",
        "partial": "Bound Statement",
        "signature": "PreparedStmt mark stmt-\u003e[BindA s stmt bo]-\u003e(bstmt-\u003eDBM mark s a)-\u003eDBM mark s a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Enumerator.html#v:withContinuedSession",
      "description": {
        "fct-descr": "\u003cp\u003ePersistent database connections. \n This issue has been brought up by Shanky Surana. The following design\n is inspired by that exchange.\n\u003c/p\u003e\u003cp\u003eOn one hand, implementing persistent connections is easy. One may say we should\n have added them long time ago, to match HSQL, HDBC, and similar\n database interfaces. Alas, implementing persistent connection\n safely is another matter. The simplest design is like the following\n\u003c/p\u003e\u003cpre\u003e withContinuedSession :: (Typeable a, IE.ISession sess) =\u003e \n     IE.ConnectA sess -\u003e (forall mark. DBM mark sess a) -\u003e \n     IO (a, IE.ConnectA sess)\n withContinuedSession (IE.ConnectA connecta) m = do\n     conn \u003c- connecta\n     r \u003c- runReaderT (unDBM m) conn\n     return (r,(return conn))\n\u003c/pre\u003e\u003cp\u003eso that the connection object is returned as the result and can be\n used again with withContinuedSession or withSession. The problem is\n that nothing prevents us from writing:\n\u003c/p\u003e\u003cpre\u003e     (r1,conn) \u003c- withContinuedSession (connect \"...\") query1\n     r2        \u003c- withSession conn query2\n     r3        \u003c- withSession conn query3\n\u003c/pre\u003e\u003cp\u003eThat is, we store the suspended connection and then use it twice.\n But the first withSession closes the connection. So, the second\n withSession gets an invalid session object. Invalid in a sense that\n even memory may be deallocated, so there is no telling what happens\n next. Also, as we can see, it is difficult to handle errors and\n automatically dispose of the connections if the fatal error is\n encountered.\n\u003c/p\u003e\u003cp\u003eAll these problems are present in other interfaces...  In the\n case of a suspended connection, the problem is how to enforce the\n \u003cem\u003elinear\u003c/em\u003e access to a variable. It can be enforced, via a\n state-changing monad. The implementation below makes\n the non-linear use of a suspended connection a run-time checkable\n condition. It will be generic and safe - fatal errors close the\n connection, an attempt to use a closed connection raises an error, and\n we cannot reuse a connection. We have to write:\n\u003c/p\u003e\u003cpre\u003e     (r1, conn1) \u003c- withContinuedSession conn  ...\n     (r2, conn2) \u003c- withContinuedSession conn1 ...\n     (r3, conn3) \u003c- withContinuedSession conn2 ...\n\u003c/pre\u003e\u003cp\u003eetc. If we reuse a suspended connection or use a closed connection,\n we get a run-time (exception). That is of course not very\n satisfactory - and yet better than a segmentation fault. \n\u003c/p\u003e",
        "fct-module": "Database.Enumerator",
        "fct-package": "Takusen",
        "fct-signature": "ConnectA sess -\u003e (forall mark.  DBM mark sess a) -\u003e IO (a, ConnectA sess)",
        "fct-source": "src/Database-Enumerator.html#withContinuedSession",
        "fct-type": "function",
        "title": "withContinuedSession"
      },
      "index": {
        "description": "Persistent database connections This issue has been brought up by Shanky Surana The following design is inspired by that exchange On one hand implementing persistent connections is easy One may say we should have added them long time ago to match HSQL HDBC and similar database interfaces Alas implementing persistent connection safely is another matter The simplest design is like the following withContinuedSession Typeable IE.ISession sess IE.ConnectA sess forall mark DBM mark sess IO IE.ConnectA sess withContinuedSession IE.ConnectA connecta do conn connecta runReaderT unDBM conn return return conn so that the connection object is returned as the result and can be used again with withContinuedSession or withSession The problem is that nothing prevents us from writing r1 conn withContinuedSession connect query1 r2 withSession conn query2 r3 withSession conn query3 That is we store the suspended connection and then use it twice But the first withSession closes the connection So the second withSession gets an invalid session object Invalid in sense that even memory may be deallocated so there is no telling what happens next Also as we can see it is difficult to handle errors and automatically dispose of the connections if the fatal error is encountered All these problems are present in other interfaces In the case of suspended connection the problem is how to enforce the linear access to variable It can be enforced via state-changing monad The implementation below makes the non-linear use of suspended connection run-time checkable condition It will be generic and safe fatal errors close the connection an attempt to use closed connection raises an error and we cannot reuse connection We have to write r1 conn1 withContinuedSession conn r2 conn2 withContinuedSession conn1 r3 conn3 withContinuedSession conn2 etc If we reuse suspended connection or use closed connection we get run-time exception That is of course not very satisfactory and yet better than segmentation fault",
        "hierarchy": "Database Enumerator",
        "module": "Database.Enumerator",
        "name": "withContinuedSession",
        "normalized": "ConnectA a-\u003e(b c DBM d a e)-\u003eIO(e,ConnectA a)",
        "package": "Takusen",
        "partial": "Continued Session",
        "signature": "ConnectA sess-\u003e(forall mark. DBM mark sess a)-\u003eIO(a,ConnectA sess)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Enumerator.html#v:withCursor",
      "description": {
        "fct-descr": "\u003cp\u003eEnsures cursor resource is properly tidied up in exceptional cases.\n Propagates exceptions after closing cursor.\n The Typeable constraint is to prevent cursors and other marked values\n (like cursor computations) from escaping.\n\u003c/p\u003e",
        "fct-module": "Database.Enumerator",
        "fct-package": "Takusen",
        "fct-signature": "stmt-\u003e i-\u003e seed-\u003e (DBCursor mark (DBM mark sess) seed -\u003e DBM mark sess a)-\u003e DBM mark sess a",
        "fct-type": "function",
        "title": "withCursor"
      },
      "index": {
        "description": "Ensures cursor resource is properly tidied up in exceptional cases Propagates exceptions after closing cursor The Typeable constraint is to prevent cursors and other marked values like cursor computations from escaping",
        "hierarchy": "Database Enumerator",
        "module": "Database.Enumerator",
        "name": "withCursor",
        "normalized": "a-\u003eb-\u003ec-\u003e(DBCursor d(DBM d e)c-\u003eDBM d e f)-\u003eDBM d e f",
        "package": "Takusen",
        "partial": "Cursor",
        "signature": "stmt-\u003ei-\u003eseed-\u003e(DBCursor mark(DBM mark sess)seed-\u003eDBM mark sess a)-\u003eDBM mark sess a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Enumerator.html#v:withPreparedStatement",
      "description": {
        "fct-descr": "\u003cp\u003ePrepare a statement and run a DBM action over it.\n This gives us the ability to re-use a statement,\n for example by passing different bind values for each execution.\n\u003c/p\u003e\u003cp\u003eThe Typeable constraint is to prevent the leakage of marked things.\n The type of bound statements should not be exported (and should not be\n in Typeable) so the bound statement can't leak either.\n\u003c/p\u003e",
        "fct-module": "Database.Enumerator",
        "fct-package": "Takusen",
        "fct-signature": "PreparationA sess stmt-\u003e (PreparedStmt mark stmt -\u003e DBM mark sess a)-\u003e DBM mark sess a",
        "fct-type": "function",
        "title": "withPreparedStatement"
      },
      "index": {
        "description": "Prepare statement and run DBM action over it This gives us the ability to re-use statement for example by passing different bind values for each execution The Typeable constraint is to prevent the leakage of marked things The type of bound statements should not be exported and should not be in Typeable so the bound statement can leak either",
        "hierarchy": "Database Enumerator",
        "module": "Database.Enumerator",
        "name": "withPreparedStatement",
        "normalized": "PreparationA a b-\u003e(PreparedStmt c b-\u003eDBM c a d)-\u003eDBM c a d",
        "package": "Takusen",
        "partial": "Prepared Statement",
        "signature": "PreparationA sess stmt-\u003e(PreparedStmt mark stmt-\u003eDBM mark sess a)-\u003eDBM mark sess a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Enumerator.html#v:withSession",
      "description": {
        "fct-descr": "\u003cp\u003eTypeable constraint is to prevent the leakage of Session and other\n marked objects.\n\u003c/p\u003e",
        "fct-module": "Database.Enumerator",
        "fct-package": "Takusen",
        "fct-signature": "ConnectA sess -\u003e (forall mark.  DBM mark sess a) -\u003e IO a",
        "fct-source": "src/Database-Enumerator.html#withSession",
        "fct-type": "function",
        "title": "withSession"
      },
      "index": {
        "description": "Typeable constraint is to prevent the leakage of Session and other marked objects",
        "hierarchy": "Database Enumerator",
        "module": "Database.Enumerator",
        "name": "withSession",
        "normalized": "ConnectA a-\u003e(b c DBM d a e)-\u003eIO e",
        "package": "Takusen",
        "partial": "Session",
        "signature": "ConnectA sess-\u003e(forall mark. DBM mark sess a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Enumerator.html#v:withTransaction",
      "description": {
        "fct-descr": "\u003cp\u003ePerform an action as a transaction: commit afterwards,\n unless there was an exception, in which case rollback.\n\u003c/p\u003e",
        "fct-module": "Database.Enumerator",
        "fct-package": "Takusen",
        "fct-signature": "IsolationLevel -\u003e DBM mark s a -\u003e DBM mark s a",
        "fct-source": "src/Database-Enumerator.html#withTransaction",
        "fct-type": "function",
        "title": "withTransaction"
      },
      "index": {
        "description": "Perform an action as transaction commit afterwards unless there was an exception in which case rollback",
        "hierarchy": "Database Enumerator",
        "module": "Database.Enumerator",
        "name": "withTransaction",
        "normalized": "IsolationLevel-\u003eDBM a b c-\u003eDBM a b c",
        "package": "Takusen",
        "partial": "Transaction",
        "signature": "IsolationLevel-\u003eDBM mark s a-\u003eDBM mark s a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Util.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtility functions. Mostly used in database back-ends, and tests.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.Util",
        "fct-package": "Takusen",
        "fct-signature": "module",
        "fct-source": "src/Database-Util.html",
        "fct-type": "module",
        "title": "Util"
      },
      "index": {
        "description": "Utility functions Mostly used in database back-ends and tests",
        "hierarchy": "Database Util",
        "module": "Database.Util",
        "name": "Util",
        "normalized": "",
        "package": "Takusen",
        "partial": "Util",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Util.html#t:MyShow",
      "description": {
        "fct-module": "Database.Util",
        "fct-package": "Takusen",
        "fct-signature": "class",
        "fct-source": "src/Database-Util.html#MyShow",
        "fct-type": "class",
        "title": "MyShow"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Util",
        "module": "Database.Util",
        "name": "MyShow",
        "normalized": "",
        "package": "Takusen",
        "partial": "My Show",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Util.html#v:calTimeToInt64",
      "description": {
        "fct-module": "Database.Util",
        "fct-package": "Takusen",
        "fct-signature": "CalendarTime -\u003e Int64",
        "fct-source": "src/Database-Util.html#calTimeToInt64",
        "fct-type": "function",
        "title": "calTimeToInt64"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Util",
        "module": "Database.Util",
        "name": "calTimeToInt64",
        "normalized": "CalendarTime-\u003eInt",
        "package": "Takusen",
        "partial": "Time To Int",
        "signature": "CalendarTime-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Util.html#v:calTimeToPGDatetime",
      "description": {
        "fct-descr": "\u003cp\u003eAssumes CalendarTime is also UTC i.e. ignores ctTZ component.\n\u003c/p\u003e",
        "fct-module": "Database.Util",
        "fct-package": "Takusen",
        "fct-signature": "CalendarTime -\u003e String",
        "fct-source": "src/Database-Util.html#calTimeToPGDatetime",
        "fct-type": "function",
        "title": "calTimeToPGDatetime"
      },
      "index": {
        "description": "Assumes CalendarTime is also UTC i.e ignores ctTZ component",
        "hierarchy": "Database Util",
        "module": "Database.Util",
        "name": "calTimeToPGDatetime",
        "normalized": "CalendarTime-\u003eString",
        "package": "Takusen",
        "partial": "Time To PGDatetime",
        "signature": "CalendarTime-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Util.html#v:datePartsToInt64",
      "description": {
        "fct-module": "Database.Util",
        "fct-package": "Takusen",
        "fct-signature": "(a1, a2, a3, a4, a5, a6) -\u003e Int64",
        "fct-source": "src/Database-Util.html#datePartsToInt64",
        "fct-type": "function",
        "title": "datePartsToInt64"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Util",
        "module": "Database.Util",
        "name": "datePartsToInt64",
        "normalized": "(a,a,a,a,a,a)-\u003eInt",
        "package": "Takusen",
        "partial": "Parts To Int",
        "signature": "(a,a,a,a,a,a)-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Util.html#v:int64ToCalTime",
      "description": {
        "fct-module": "Database.Util",
        "fct-package": "Takusen",
        "fct-signature": "Int64 -\u003e CalendarTime",
        "fct-source": "src/Database-Util.html#int64ToCalTime",
        "fct-type": "function",
        "title": "int64ToCalTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Util",
        "module": "Database.Util",
        "name": "int64ToCalTime",
        "normalized": "Int-\u003eCalendarTime",
        "package": "Takusen",
        "partial": "To Cal Time",
        "signature": "Int-\u003eCalendarTime"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Util.html#v:int64ToDateParts",
      "description": {
        "fct-module": "Database.Util",
        "fct-package": "Takusen",
        "fct-signature": "Int64 -\u003e (Int64, Int64, Int64, Int64, Int64, Int64)",
        "fct-source": "src/Database-Util.html#int64ToDateParts",
        "fct-type": "function",
        "title": "int64ToDateParts"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Util",
        "module": "Database.Util",
        "name": "int64ToDateParts",
        "normalized": "Int-\u003e(Int,Int,Int,Int,Int,Int)",
        "package": "Takusen",
        "partial": "To Date Parts",
        "signature": "Int-\u003e(Int,Int,Int,Int,Int,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Util.html#v:int64ToUTCTime",
      "description": {
        "fct-module": "Database.Util",
        "fct-package": "Takusen",
        "fct-signature": "Int64 -\u003e UTCTime",
        "fct-source": "src/Database-Util.html#int64ToUTCTime",
        "fct-type": "function",
        "title": "int64ToUTCTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Util",
        "module": "Database.Util",
        "name": "int64ToUTCTime",
        "normalized": "Int-\u003eUTCTime",
        "package": "Takusen",
        "partial": "To UTCTime",
        "signature": "Int-\u003eUTCTime"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Util.html#v:mkCalTime",
      "description": {
        "fct-module": "Database.Util",
        "fct-package": "Takusen",
        "fct-signature": "a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e CalendarTime",
        "fct-source": "src/Database-Util.html#mkCalTime",
        "fct-type": "function",
        "title": "mkCalTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Util",
        "module": "Database.Util",
        "name": "mkCalTime",
        "normalized": "a-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eCalendarTime",
        "package": "Takusen",
        "partial": "Cal Time",
        "signature": "a-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eCalendarTime"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Util.html#v:mkUTCTime",
      "description": {
        "fct-descr": "\u003cp\u003eConvenience for making UTCTimes. Assumes the time given is already UTC time\n i.e. there's no timezone adjustment.\n\u003c/p\u003e",
        "fct-module": "Database.Util",
        "fct-package": "Takusen",
        "fct-signature": "a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e b -\u003e UTCTime",
        "fct-source": "src/Database-Util.html#mkUTCTime",
        "fct-type": "function",
        "title": "mkUTCTime"
      },
      "index": {
        "description": "Convenience for making UTCTimes Assumes the time given is already UTC time i.e there no timezone adjustment",
        "hierarchy": "Database Util",
        "module": "Database.Util",
        "name": "mkUTCTime",
        "normalized": "a-\u003ea-\u003ea-\u003ea-\u003ea-\u003eb-\u003eUTCTime",
        "package": "Takusen",
        "partial": "UTCTime",
        "signature": "a-\u003ea-\u003ea-\u003ea-\u003ea-\u003eb-\u003eUTCTime"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Util.html#v:pgDatetimeToParts",
      "description": {
        "fct-module": "Database.Util",
        "fct-package": "Takusen",
        "fct-signature": "String -\u003e (Int, Int, Int, Int, Int, Double, Int)",
        "fct-source": "src/Database-Util.html#pgDatetimeToParts",
        "fct-type": "function",
        "title": "pgDatetimeToParts"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Util",
        "module": "Database.Util",
        "name": "pgDatetimeToParts",
        "normalized": "String-\u003e(Int,Int,Int,Int,Int,Double,Int)",
        "package": "Takusen",
        "partial": "Datetime To Parts",
        "signature": "String-\u003e(Int,Int,Int,Int,Int,Double,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Util.html#v:pgDatetimetoCalTime",
      "description": {
        "fct-module": "Database.Util",
        "fct-package": "Takusen",
        "fct-signature": "String -\u003e CalendarTime",
        "fct-source": "src/Database-Util.html#pgDatetimetoCalTime",
        "fct-type": "function",
        "title": "pgDatetimetoCalTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Util",
        "module": "Database.Util",
        "name": "pgDatetimetoCalTime",
        "normalized": "String-\u003eCalendarTime",
        "package": "Takusen",
        "partial": "Datetimeto Cal Time",
        "signature": "String-\u003eCalendarTime"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Util.html#v:pgDatetimetoUTCTime",
      "description": {
        "fct-module": "Database.Util",
        "fct-package": "Takusen",
        "fct-signature": "String -\u003e UTCTime",
        "fct-source": "src/Database-Util.html#pgDatetimetoUTCTime",
        "fct-type": "function",
        "title": "pgDatetimetoUTCTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Util",
        "module": "Database.Util",
        "name": "pgDatetimetoUTCTime",
        "normalized": "String-\u003eUTCTime",
        "package": "Takusen",
        "partial": "Datetimeto UTCTime",
        "signature": "String-\u003eUTCTime"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Util.html#v:positions",
      "description": {
        "fct-module": "Database.Util",
        "fct-package": "Takusen",
        "fct-signature": "[a] -\u003e [a] -\u003e [Int]",
        "fct-source": "src/Database-Util.html#positions",
        "fct-type": "function",
        "title": "positions"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Util",
        "module": "Database.Util",
        "name": "positions",
        "normalized": "[a]-\u003e[a]-\u003e[Int]",
        "package": "Takusen",
        "partial": "",
        "signature": "[a]-\u003e[a]-\u003e[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Util.html#v:printArrayContents",
      "description": {
        "fct-module": "Database.Util",
        "fct-package": "Takusen",
        "fct-signature": "Int -\u003e Ptr Word8 -\u003e IO ()",
        "fct-source": "src/Database-Util.html#printArrayContents",
        "fct-type": "function",
        "title": "printArrayContents"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Util",
        "module": "Database.Util",
        "name": "printArrayContents",
        "normalized": "Int-\u003ePtr Word-\u003eIO()",
        "package": "Takusen",
        "partial": "Array Contents",
        "signature": "Int-\u003ePtr Word-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Util.html#v:print_",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003eSystem.IO.print\u003c/code\u003e, except that Strings are not escaped or quoted.\n\u003c/p\u003e",
        "fct-module": "Database.Util",
        "fct-package": "Takusen",
        "fct-signature": "a -\u003e m ()",
        "fct-source": "src/Database-Util.html#print_",
        "fct-type": "function",
        "title": "print_"
      },
      "index": {
        "description": "Like System.IO.print except that Strings are not escaped or quoted",
        "hierarchy": "Database Util",
        "module": "Database.Util",
        "name": "print_",
        "normalized": "a-\u003eb()",
        "package": "Takusen",
        "partial": "",
        "signature": "a-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Util.html#v:show_",
      "description": {
        "fct-module": "Database.Util",
        "fct-package": "Takusen",
        "fct-signature": "a -\u003e String",
        "fct-source": "src/Database-Util.html#show_",
        "fct-type": "method",
        "title": "show_"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Util",
        "module": "Database.Util",
        "name": "show_",
        "normalized": "a-\u003eString",
        "package": "Takusen",
        "partial": "",
        "signature": "a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Util.html#v:skipNonMatch",
      "description": {
        "fct-module": "Database.Util",
        "fct-package": "Takusen",
        "fct-signature": "(Char -\u003e Bool) -\u003e String -\u003e [String]",
        "fct-source": "src/Database-Util.html#skipNonMatch",
        "fct-type": "function",
        "title": "skipNonMatch"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Util",
        "module": "Database.Util",
        "name": "skipNonMatch",
        "normalized": "(Char-\u003eBool)-\u003eString-\u003e[String]",
        "package": "Takusen",
        "partial": "Non Match",
        "signature": "(Char-\u003eBool)-\u003eString-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Util.html#v:utcTimeToIsoDatetime",
      "description": {
        "fct-module": "Database.Util",
        "fct-package": "Takusen",
        "fct-signature": "UTCTime -\u003e String",
        "fct-source": "src/Database-Util.html#utcTimeToIsoDatetime",
        "fct-type": "function",
        "title": "utcTimeToIsoDatetime"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Util",
        "module": "Database.Util",
        "name": "utcTimeToIsoDatetime",
        "normalized": "UTCTime-\u003eString",
        "package": "Takusen",
        "partial": "Time To Iso Datetime",
        "signature": "UTCTime-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Util.html#v:utcTimeToIsoString",
      "description": {
        "fct-module": "Database.Util",
        "fct-package": "Takusen",
        "fct-signature": "UTCTime -\u003e String -\u003e (a -\u003e a) -\u003e (b -\u003e String) -\u003e String",
        "fct-source": "src/Database-Util.html#utcTimeToIsoString",
        "fct-type": "function",
        "title": "utcTimeToIsoString"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Util",
        "module": "Database.Util",
        "name": "utcTimeToIsoString",
        "normalized": "UTCTime-\u003eString-\u003e(a-\u003ea)-\u003e(b-\u003eString)-\u003eString",
        "package": "Takusen",
        "partial": "Time To Iso String",
        "signature": "UTCTime-\u003eString-\u003e(a-\u003ea)-\u003e(b-\u003eString)-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Util.html#v:utcTimeToOdbcDatetime",
      "description": {
        "fct-module": "Database.Util",
        "fct-package": "Takusen",
        "fct-signature": "UTCTime -\u003e String",
        "fct-source": "src/Database-Util.html#utcTimeToOdbcDatetime",
        "fct-type": "function",
        "title": "utcTimeToOdbcDatetime"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Util",
        "module": "Database.Util",
        "name": "utcTimeToOdbcDatetime",
        "normalized": "UTCTime-\u003eString",
        "package": "Takusen",
        "partial": "Time To Odbc Datetime",
        "signature": "UTCTime-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Util.html#v:utcTimeToPGDatetime",
      "description": {
        "fct-module": "Database.Util",
        "fct-package": "Takusen",
        "fct-signature": "UTCTime -\u003e String",
        "fct-source": "src/Database-Util.html#utcTimeToPGDatetime",
        "fct-type": "function",
        "title": "utcTimeToPGDatetime"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Util",
        "module": "Database.Util",
        "name": "utcTimeToPGDatetime",
        "normalized": "UTCTime-\u003eString",
        "package": "Takusen",
        "partial": "Time To PGDatetime",
        "signature": "UTCTime-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Database-Util.html#v:wordsBy",
      "description": {
        "fct-module": "Database.Util",
        "fct-package": "Takusen",
        "fct-signature": "(Char -\u003e Bool) -\u003e String -\u003e [String]",
        "fct-source": "src/Database-Util.html#wordsBy",
        "fct-type": "function",
        "title": "wordsBy"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Util",
        "module": "Database.Util",
        "name": "wordsBy",
        "normalized": "(Char-\u003eBool)-\u003eString-\u003e[String]",
        "package": "Takusen",
        "partial": "By",
        "signature": "(Char-\u003eBool)-\u003eString-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Foreign-C-UTF8.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMarshall Haskell Strings to and from UTF8-encoded CStrings.\n This module's code is inspired by John Meacham's UTF8 en- & de-coders,\n and also those found in the HXT library (module Text.XML.HXT.DOM.Unicode).\n\u003c/p\u003e\u003cp\u003eNote that the -Len functions all return the length in bytes,\n not Chars (this is more useful, as you are most likely to want\n to pass the length to an FFI function, which is most likely\n expecting the length in bytes). If you want the length in Chars,\n well, you have the original String, so...\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Foreign.C.UTF8",
        "fct-package": "Takusen",
        "fct-signature": "module",
        "fct-source": "src/Foreign-C-UTF8.html",
        "fct-type": "module",
        "title": "UTF8"
      },
      "index": {
        "description": "Marshall Haskell Strings to and from UTF8-encoded CStrings This module code is inspired by John Meacham UTF8 en de-coders and also those found in the HXT library module Text.XML.HXT.DOM.Unicode Note that the Len functions all return the length in bytes not Chars this is more useful as you are most likely to want to pass the length to an FFI function which is most likely expecting the length in bytes If you want the length in Chars well you have the original String so",
        "hierarchy": "Foreign C UTF8",
        "module": "Foreign.C.UTF8",
        "name": "UTF8",
        "normalized": "",
        "package": "Takusen",
        "partial": "UTF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Foreign-C-UTF8.html#v:fromUTF8",
      "description": {
        "fct-descr": "\u003cp\u003eConvert UTF-8 to Unicode.\n\u003c/p\u003e",
        "fct-module": "Foreign.C.UTF8",
        "fct-package": "Takusen",
        "fct-signature": "[Word8] -\u003e String",
        "fct-source": "src/Foreign-C-UTF8.html#fromUTF8",
        "fct-type": "function",
        "title": "fromUTF8"
      },
      "index": {
        "description": "Convert UTF-8 to Unicode",
        "hierarchy": "Foreign C UTF8",
        "module": "Foreign.C.UTF8",
        "name": "fromUTF8",
        "normalized": "[Word]-\u003eString",
        "package": "Takusen",
        "partial": "UTF",
        "signature": "[Word]-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Foreign-C-UTF8.html#v:fromUTF8String",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a String that was marshalled from a CString without\n any decoder applied. This might be useful if the client encoding\n is unknown, and the user code must convert.\n We assume that the UTF8 CString was marshalled as if Latin-1\n i.e. all chars are in the range 0-255.\n\u003c/p\u003e",
        "fct-module": "Foreign.C.UTF8",
        "fct-package": "Takusen",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Foreign-C-UTF8.html#fromUTF8String",
        "fct-type": "function",
        "title": "fromUTF8String"
      },
      "index": {
        "description": "Convert String that was marshalled from CString without any decoder applied This might be useful if the client encoding is unknown and the user code must convert We assume that the UTF8 CString was marshalled as if Latin-1 i.e all chars are in the range",
        "hierarchy": "Foreign C UTF8",
        "module": "Foreign.C.UTF8",
        "name": "fromUTF8String",
        "normalized": "String-\u003eString",
        "package": "Takusen",
        "partial": "UTF String",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Foreign-C-UTF8.html#v:lengthUTF8",
      "description": {
        "fct-module": "Foreign.C.UTF8",
        "fct-package": "Takusen",
        "fct-signature": "String -\u003e Int",
        "fct-source": "src/Foreign-C-UTF8.html#lengthUTF8",
        "fct-type": "function",
        "title": "lengthUTF8"
      },
      "index": {
        "description": "",
        "hierarchy": "Foreign C UTF8",
        "module": "Foreign.C.UTF8",
        "name": "lengthUTF8",
        "normalized": "String-\u003eInt",
        "package": "Takusen",
        "partial": "UTF",
        "signature": "String-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Foreign-C-UTF8.html#v:newUTF8String",
      "description": {
        "fct-descr": "\u003cp\u003eAnalogous to newCString. Creates UTF8 encoded CString.\n\u003c/p\u003e",
        "fct-module": "Foreign.C.UTF8",
        "fct-package": "Takusen",
        "fct-signature": "String -\u003e IO CString",
        "fct-source": "src/Foreign-C-UTF8.html#newUTF8String",
        "fct-type": "function",
        "title": "newUTF8String"
      },
      "index": {
        "description": "Analogous to newCString Creates UTF8 encoded CString",
        "hierarchy": "Foreign C UTF8",
        "module": "Foreign.C.UTF8",
        "name": "newUTF8String",
        "normalized": "String-\u003eIO CString",
        "package": "Takusen",
        "partial": "UTF String",
        "signature": "String-\u003eIO CString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Foreign-C-UTF8.html#v:peekUTF8String",
      "description": {
        "fct-descr": "\u003cp\u003eAnalogous to peekCString. Converts UTF8 CString to String.\n\u003c/p\u003e",
        "fct-module": "Foreign.C.UTF8",
        "fct-package": "Takusen",
        "fct-signature": "CString -\u003e IO String",
        "fct-source": "src/Foreign-C-UTF8.html#peekUTF8String",
        "fct-type": "function",
        "title": "peekUTF8String"
      },
      "index": {
        "description": "Analogous to peekCString Converts UTF8 CString to String",
        "hierarchy": "Foreign C UTF8",
        "module": "Foreign.C.UTF8",
        "name": "peekUTF8String",
        "normalized": "CString-\u003eIO String",
        "package": "Takusen",
        "partial": "UTF String",
        "signature": "CString-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Foreign-C-UTF8.html#v:peekUTF8StringLen",
      "description": {
        "fct-descr": "\u003cp\u003eAnalogous to peekCStringLen. Converts UTF8 CString to String.\n The resulting String will end either when \u003ccode\u003elen\u003c/code\u003e bytes\n have been converted, or when a NULL is found.\n\u003c/p\u003e",
        "fct-module": "Foreign.C.UTF8",
        "fct-package": "Takusen",
        "fct-signature": "CStringLen -\u003e IO String",
        "fct-source": "src/Foreign-C-UTF8.html#peekUTF8StringLen",
        "fct-type": "function",
        "title": "peekUTF8StringLen"
      },
      "index": {
        "description": "Analogous to peekCStringLen Converts UTF8 CString to String The resulting String will end either when len bytes have been converted or when NULL is found",
        "hierarchy": "Foreign C UTF8",
        "module": "Foreign.C.UTF8",
        "name": "peekUTF8StringLen",
        "normalized": "CStringLen-\u003eIO String",
        "package": "Takusen",
        "partial": "UTF String Len",
        "signature": "CStringLen-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Foreign-C-UTF8.html#v:toUTF8",
      "description": {
        "fct-descr": "\u003cp\u003eConvert Unicode characters to UTF-8.\n\u003c/p\u003e",
        "fct-module": "Foreign.C.UTF8",
        "fct-package": "Takusen",
        "fct-signature": "String -\u003e [Word8]",
        "fct-source": "src/Foreign-C-UTF8.html#toUTF8",
        "fct-type": "function",
        "title": "toUTF8"
      },
      "index": {
        "description": "Convert Unicode characters to UTF-8",
        "hierarchy": "Foreign C UTF8",
        "module": "Foreign.C.UTF8",
        "name": "toUTF8",
        "normalized": "String-\u003e[Word]",
        "package": "Takusen",
        "partial": "UTF",
        "signature": "String-\u003e[Word]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Foreign-C-UTF8.html#v:toUTF8String",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a Haskell String into a UTF8 String, where each UTF8 byte\n is represented by its Char equivalent i.e. only chars 0-255 are used.\n The resulting String can be marshalled to CString directly i.e. with\n a Latin-1 encoding.\n\u003c/p\u003e",
        "fct-module": "Foreign.C.UTF8",
        "fct-package": "Takusen",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Foreign-C-UTF8.html#toUTF8String",
        "fct-type": "function",
        "title": "toUTF8String"
      },
      "index": {
        "description": "Convert Haskell String into UTF8 String where each UTF8 byte is represented by its Char equivalent i.e only chars are used The resulting String can be marshalled to CString directly i.e with Latin-1 encoding",
        "hierarchy": "Foreign C UTF8",
        "module": "Foreign.C.UTF8",
        "name": "toUTF8String",
        "normalized": "String-\u003eString",
        "package": "Takusen",
        "partial": "UTF String",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Foreign-C-UTF8.html#v:withUTF8String",
      "description": {
        "fct-descr": "\u003cp\u003eAnalogous to withCString. Creates UTF8 encoded CString.\n\u003c/p\u003e",
        "fct-module": "Foreign.C.UTF8",
        "fct-package": "Takusen",
        "fct-signature": "String -\u003e (CString -\u003e IO a) -\u003e IO a",
        "fct-source": "src/Foreign-C-UTF8.html#withUTF8String",
        "fct-type": "function",
        "title": "withUTF8String"
      },
      "index": {
        "description": "Analogous to withCString Creates UTF8 encoded CString",
        "hierarchy": "Foreign C UTF8",
        "module": "Foreign.C.UTF8",
        "name": "withUTF8String",
        "normalized": "String-\u003e(CString-\u003eIO a)-\u003eIO a",
        "package": "Takusen",
        "partial": "UTF String",
        "signature": "String-\u003e(CString-\u003eIO a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Takusen/docs/Foreign-C-UTF8.html#v:withUTF8StringLen",
      "description": {
        "fct-descr": "\u003cp\u003eAnalogous to withCStringLen.\n The length returned is in bytes (encoding units), not chars.\n\u003c/p\u003e",
        "fct-module": "Foreign.C.UTF8",
        "fct-package": "Takusen",
        "fct-signature": "String -\u003e (CStringLen -\u003e IO a) -\u003e IO a",
        "fct-source": "src/Foreign-C-UTF8.html#withUTF8StringLen",
        "fct-type": "function",
        "title": "withUTF8StringLen"
      },
      "index": {
        "description": "Analogous to withCStringLen The length returned is in bytes encoding units not chars",
        "hierarchy": "Foreign C UTF8",
        "module": "Foreign.C.UTF8",
        "name": "withUTF8StringLen",
        "normalized": "String-\u003e(CStringLen-\u003eIO a)-\u003eIO a",
        "package": "Takusen",
        "partial": "UTF String Len",
        "signature": "String-\u003e(CStringLen-\u003eIO a)-\u003eIO a"
      }
    }
  }
]