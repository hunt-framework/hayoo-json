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
        "word": "cqrs-postgresql"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImplementation of a PostgreSQL-based backend pool. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.CQRS.EventStore.Backend.PostgreSQL",
          "name": "PostgreSQL",
          "package": "cqrs-postgresql",
          "source": "src/Data-CQRS-EventStore-Backend-PostgreSQL.html",
          "type": "module"
        },
        "index": {
          "description": "Implementation of PostgreSQL-based backend pool",
          "hierarchy": "Data CQRS EventStore Backend PostgreSQL",
          "module": "Data.CQRS.EventStore.Backend.PostgreSQL",
          "name": "PostgreSQL",
          "package": "cqrs-postgresql",
          "partial": "Postgre SQL",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cqrs-postgresql/docs/Data-CQRS-EventStore-Backend-PostgreSQL.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a pool of PostgreSQL-based event store backends.\n\u003c/p\u003e",
          "module": "Data.CQRS.EventStore.Backend.PostgreSQL",
          "name": "createBackendPool",
          "package": "cqrs-postgresql",
          "signature": "Int -\u003e ByteString -\u003e IO (Pool PostgreSQLEventStoreBackend)",
          "source": "src/Data-CQRS-EventStore-Backend-PostgreSQL.html#createBackendPool",
          "type": "function"
        },
        "index": {
          "description": "Create pool of PostgreSQL-based event store backends",
          "hierarchy": "Data CQRS EventStore Backend PostgreSQL",
          "module": "Data.CQRS.EventStore.Backend.PostgreSQL",
          "name": "createBackendPool",
          "normalized": "Int-\u003eByteString-\u003eIO(Pool PostgreSQLEventStoreBackend)",
          "package": "cqrs-postgresql",
          "partial": "Backend Pool",
          "signature": "Int-\u003eByteString-\u003eIO(Pool PostgreSQLEventStoreBackend)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cqrs-postgresql/docs/Data-CQRS-EventStore-Backend-PostgreSQL.html#v:createBackendPool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImplementation of a PostgreSQL-based event store. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.CQRS.EventStore.Backend.PostgreSQLUtils",
          "name": "PostgreSQLUtils",
          "package": "cqrs-postgresql",
          "source": "src/Data-CQRS-EventStore-Backend-PostgreSQLUtils.html",
          "type": "module"
        },
        "index": {
          "description": "Implementation of PostgreSQL-based event store",
          "hierarchy": "Data CQRS EventStore Backend PostgreSQLUtils",
          "module": "Data.CQRS.EventStore.Backend.PostgreSQLUtils",
          "name": "PostgreSQLUtils",
          "package": "cqrs-postgresql",
          "partial": "Postgre SQLUtils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cqrs-postgresql/docs/Data-CQRS-EventStore-Backend-PostgreSQLUtils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKnown field types.\n\u003c/p\u003e",
          "module": "Data.CQRS.EventStore.Backend.PostgreSQLUtils",
          "name": "SqlValue",
          "package": "cqrs-postgresql",
          "source": "src/Data-CQRS-EventStore-Backend-PostgreSQLUtils.html#SqlValue",
          "type": "data"
        },
        "index": {
          "description": "Known field types",
          "hierarchy": "Data CQRS EventStore Backend PostgreSQLUtils",
          "module": "Data.CQRS.EventStore.Backend.PostgreSQLUtils",
          "name": "SqlValue",
          "package": "cqrs-postgresql",
          "partial": "Sql Value",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cqrs-postgresql/docs/Data-CQRS-EventStore-Backend-PostgreSQLUtils.html#t:SqlValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CQRS.EventStore.Backend.PostgreSQLUtils",
          "name": "SqlBlankPaddedString",
          "package": "cqrs-postgresql",
          "signature": "SqlBlankPaddedString (Maybe ByteString)",
          "source": "src/Data-CQRS-EventStore-Backend-PostgreSQLUtils.html#SqlValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CQRS EventStore Backend PostgreSQLUtils",
          "module": "Data.CQRS.EventStore.Backend.PostgreSQLUtils",
          "name": "SqlBlankPaddedString",
          "package": "cqrs-postgresql",
          "partial": "Sql Blank Padded String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cqrs-postgresql/docs/Data-CQRS-EventStore-Backend-PostgreSQLUtils.html#v:SqlBlankPaddedString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CQRS.EventStore.Backend.PostgreSQLUtils",
          "name": "SqlBool",
          "package": "cqrs-postgresql",
          "signature": "SqlBool (Maybe Bool)",
          "source": "src/Data-CQRS-EventStore-Backend-PostgreSQLUtils.html#SqlValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CQRS EventStore Backend PostgreSQLUtils",
          "module": "Data.CQRS.EventStore.Backend.PostgreSQLUtils",
          "name": "SqlBool",
          "package": "cqrs-postgresql",
          "partial": "Sql Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cqrs-postgresql/docs/Data-CQRS-EventStore-Backend-PostgreSQLUtils.html#v:SqlBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CQRS.EventStore.Backend.PostgreSQLUtils",
          "name": "SqlByteArray",
          "package": "cqrs-postgresql",
          "signature": "SqlByteArray (Maybe ByteString)",
          "source": "src/Data-CQRS-EventStore-Backend-PostgreSQLUtils.html#SqlValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CQRS EventStore Backend PostgreSQLUtils",
          "module": "Data.CQRS.EventStore.Backend.PostgreSQLUtils",
          "name": "SqlByteArray",
          "package": "cqrs-postgresql",
          "partial": "Sql Byte Array",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cqrs-postgresql/docs/Data-CQRS-EventStore-Backend-PostgreSQLUtils.html#v:SqlByteArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CQRS.EventStore.Backend.PostgreSQLUtils",
          "name": "SqlDate",
          "package": "cqrs-postgresql",
          "signature": "SqlDate (Maybe Day)",
          "source": "src/Data-CQRS-EventStore-Backend-PostgreSQLUtils.html#SqlValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CQRS EventStore Backend PostgreSQLUtils",
          "module": "Data.CQRS.EventStore.Backend.PostgreSQLUtils",
          "name": "SqlDate",
          "package": "cqrs-postgresql",
          "partial": "Sql Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cqrs-postgresql/docs/Data-CQRS-EventStore-Backend-PostgreSQLUtils.html#v:SqlDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CQRS.EventStore.Backend.PostgreSQLUtils",
          "name": "SqlFloating",
          "package": "cqrs-postgresql",
          "signature": "SqlFloating (Maybe Double)",
          "source": "src/Data-CQRS-EventStore-Backend-PostgreSQLUtils.html#SqlValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CQRS EventStore Backend PostgreSQLUtils",
          "module": "Data.CQRS.EventStore.Backend.PostgreSQLUtils",
          "name": "SqlFloating",
          "package": "cqrs-postgresql",
          "partial": "Sql Floating",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cqrs-postgresql/docs/Data-CQRS-EventStore-Backend-PostgreSQLUtils.html#v:SqlFloating"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CQRS.EventStore.Backend.PostgreSQLUtils",
          "name": "SqlInt16",
          "package": "cqrs-postgresql",
          "signature": "SqlInt16 (Maybe Int16)",
          "source": "src/Data-CQRS-EventStore-Backend-PostgreSQLUtils.html#SqlValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CQRS EventStore Backend PostgreSQLUtils",
          "module": "Data.CQRS.EventStore.Backend.PostgreSQLUtils",
          "name": "SqlInt16",
          "package": "cqrs-postgresql",
          "partial": "Sql Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cqrs-postgresql/docs/Data-CQRS-EventStore-Backend-PostgreSQLUtils.html#v:SqlInt16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CQRS.EventStore.Backend.PostgreSQLUtils",
          "name": "SqlInt32",
          "package": "cqrs-postgresql",
          "signature": "SqlInt32 (Maybe Int32)",
          "source": "src/Data-CQRS-EventStore-Backend-PostgreSQLUtils.html#SqlValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CQRS EventStore Backend PostgreSQLUtils",
          "module": "Data.CQRS.EventStore.Backend.PostgreSQLUtils",
          "name": "SqlInt32",
          "package": "cqrs-postgresql",
          "partial": "Sql Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cqrs-postgresql/docs/Data-CQRS-EventStore-Backend-PostgreSQLUtils.html#v:SqlInt32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CQRS.EventStore.Backend.PostgreSQLUtils",
          "name": "SqlInt64",
          "package": "cqrs-postgresql",
          "signature": "SqlInt64 (Maybe Int64)",
          "source": "src/Data-CQRS-EventStore-Backend-PostgreSQLUtils.html#SqlValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CQRS EventStore Backend PostgreSQLUtils",
          "module": "Data.CQRS.EventStore.Backend.PostgreSQLUtils",
          "name": "SqlInt64",
          "package": "cqrs-postgresql",
          "partial": "Sql Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cqrs-postgresql/docs/Data-CQRS-EventStore-Backend-PostgreSQLUtils.html#v:SqlInt64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CQRS.EventStore.Backend.PostgreSQLUtils",
          "name": "SqlText",
          "package": "cqrs-postgresql",
          "signature": "SqlText (Maybe Text)",
          "source": "src/Data-CQRS-EventStore-Backend-PostgreSQLUtils.html#SqlValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CQRS EventStore Backend PostgreSQLUtils",
          "module": "Data.CQRS.EventStore.Backend.PostgreSQLUtils",
          "name": "SqlText",
          "package": "cqrs-postgresql",
          "partial": "Sql Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cqrs-postgresql/docs/Data-CQRS-EventStore-Backend-PostgreSQLUtils.html#v:SqlText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CQRS.EventStore.Backend.PostgreSQLUtils",
          "name": "SqlVarChar",
          "package": "cqrs-postgresql",
          "signature": "SqlVarChar (Maybe Text)",
          "source": "src/Data-CQRS-EventStore-Backend-PostgreSQLUtils.html#SqlValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CQRS EventStore Backend PostgreSQLUtils",
          "module": "Data.CQRS.EventStore.Backend.PostgreSQLUtils",
          "name": "SqlVarChar",
          "package": "cqrs-postgresql",
          "partial": "Sql Var Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cqrs-postgresql/docs/Data-CQRS-EventStore-Backend-PostgreSQLUtils.html#v:SqlVarChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CQRS.EventStore.Backend.PostgreSQLUtils",
          "name": "Unmatched",
          "package": "cqrs-postgresql",
          "signature": "Unmatched (Oid, Maybe ByteString)",
          "source": "src/Data-CQRS-EventStore-Backend-PostgreSQLUtils.html#SqlValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CQRS EventStore Backend PostgreSQLUtils",
          "module": "Data.CQRS.EventStore.Backend.PostgreSQLUtils",
          "name": "Unmatched",
          "normalized": "Unmatched(Oid,Maybe ByteString)",
          "package": "cqrs-postgresql",
          "partial": "Unmatched",
          "signature": "Unmatched(Oid,Maybe ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cqrs-postgresql/docs/Data-CQRS-EventStore-Backend-PostgreSQLUtils.html#v:Unmatched"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute a query with no result.\n\u003c/p\u003e",
          "module": "Data.CQRS.EventStore.Backend.PostgreSQLUtils",
          "name": "run",
          "package": "cqrs-postgresql",
          "signature": "Connection -\u003e ByteString -\u003e [SqlValue] -\u003e IO ()",
          "source": "src/Data-CQRS-EventStore-Backend-PostgreSQLUtils.html#run",
          "type": "function"
        },
        "index": {
          "description": "Execute query with no result",
          "hierarchy": "Data CQRS EventStore Backend PostgreSQLUtils",
          "module": "Data.CQRS.EventStore.Backend.PostgreSQLUtils",
          "name": "run",
          "normalized": "Connection-\u003eByteString-\u003e[SqlValue]-\u003eIO()",
          "package": "cqrs-postgresql",
          "signature": "Connection-\u003eByteString-\u003e[SqlValue]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cqrs-postgresql/docs/Data-CQRS-EventStore-Backend-PostgreSQLUtils.html#v:run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSource for traversing all the results of a PostgreSQL query.\n\u003c/p\u003e",
          "module": "Data.CQRS.EventStore.Backend.PostgreSQLUtils",
          "name": "sourceQuery",
          "package": "cqrs-postgresql",
          "signature": "Connection -\u003e ByteString -\u003e [SqlValue] -\u003e Source (ResourceT IO) [SqlValue]",
          "source": "src/Data-CQRS-EventStore-Backend-PostgreSQLUtils.html#sourceQuery",
          "type": "function"
        },
        "index": {
          "description": "Source for traversing all the results of PostgreSQL query",
          "hierarchy": "Data CQRS EventStore Backend PostgreSQLUtils",
          "module": "Data.CQRS.EventStore.Backend.PostgreSQLUtils",
          "name": "sourceQuery",
          "normalized": "Connection-\u003eByteString-\u003e[SqlValue]-\u003eSource(ResourceT IO)[SqlValue]",
          "package": "cqrs-postgresql",
          "partial": "Query",
          "signature": "Connection-\u003eByteString-\u003e[SqlValue]-\u003eSource(ResourceT IO)[SqlValue]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cqrs-postgresql/docs/Data-CQRS-EventStore-Backend-PostgreSQLUtils.html#v:sourceQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute an IO action with an active transaction.\n\u003c/p\u003e",
          "module": "Data.CQRS.EventStore.Backend.PostgreSQLUtils",
          "name": "withTransaction",
          "package": "cqrs-postgresql",
          "signature": "Connection -\u003e IO a -\u003e IO a",
          "source": "src/Data-CQRS-EventStore-Backend-PostgreSQLUtils.html#withTransaction",
          "type": "function"
        },
        "index": {
          "description": "Execute an IO action with an active transaction",
          "hierarchy": "Data CQRS EventStore Backend PostgreSQLUtils",
          "module": "Data.CQRS.EventStore.Backend.PostgreSQLUtils",
          "name": "withTransaction",
          "normalized": "Connection-\u003eIO a-\u003eIO a",
          "package": "cqrs-postgresql",
          "partial": "Transaction",
          "signature": "Connection-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cqrs-postgresql/docs/Data-CQRS-EventStore-Backend-PostgreSQLUtils.html#v:withTransaction"
      }
    }
  ]
]