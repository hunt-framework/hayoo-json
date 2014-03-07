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
        "word": "pipes-postgresql-simple"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pipes.PostgreSQL.Simple.SafeT",
          "name": "SafeT",
          "package": "pipes-postgresql-simple",
          "source": "src/Pipes-PostgreSQL-Simple-SafeT.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Pipes PostgreSQL Simple SafeT",
          "module": "Pipes.PostgreSQL.Simple.SafeT",
          "name": "SafeT",
          "package": "pipes-postgresql-simple",
          "partial": "Safe",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pipes-postgresql-simple/docs/Pipes-PostgreSQL-Simple-SafeT.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe PostgreSQL file format, used by the \u003ccode\u003eCOPY\u003c/code\u003e command\n\u003c/p\u003e",
          "module": "Pipes.PostgreSQL.Simple.SafeT",
          "name": "Format",
          "package": "pipes-postgresql-simple",
          "source": "src/Pipes-PostgreSQL-Simple-SafeT.html#Format",
          "type": "data"
        },
        "index": {
          "description": "The PostgreSQL file format used by the COPY command",
          "hierarchy": "Pipes PostgreSQL Simple SafeT",
          "module": "Pipes.PostgreSQL.Simple.SafeT",
          "name": "Format",
          "package": "pipes-postgresql-simple",
          "partial": "Format",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pipes-postgresql-simple/docs/Pipes-PostgreSQL-Simple-SafeT.html#t:Format"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Pipes.PostgreSQL.Simple.SafeT\",\"Pipes.PostgreSQL.Simple\"]",
          "name": "Binary",
          "package": "pipes-postgresql-simple",
          "signature": "Binary",
          "source": "src/Pipes-PostgreSQL-Simple-SafeT.html#Format",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pipes-postgresql-simple/docs/Pipes-PostgreSQL-Simple-SafeT.html#v:Binary\",\"http://hackage.haskell.org/package/pipes-postgresql-simple/docs/Pipes-PostgreSQL-Simple.html#v:Binary\"]"
        },
        "index": {
          "hierarchy": "Pipes PostgreSQL Simple SafeT",
          "module": "Pipes.PostgreSQL.Simple.SafeT",
          "name": "Binary",
          "package": "pipes-postgresql-simple",
          "partial": "Binary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-postgresql-simple/docs/Pipes-PostgreSQL-Simple-SafeT.html#v:Binary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Pipes.PostgreSQL.Simple.SafeT\",\"Pipes.PostgreSQL.Simple\"]",
          "name": "CSV",
          "package": "pipes-postgresql-simple",
          "signature": "CSV",
          "source": "src/Pipes-PostgreSQL-Simple-SafeT.html#Format",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pipes-postgresql-simple/docs/Pipes-PostgreSQL-Simple-SafeT.html#v:CSV\",\"http://hackage.haskell.org/package/pipes-postgresql-simple/docs/Pipes-PostgreSQL-Simple.html#v:CSV\"]"
        },
        "index": {
          "hierarchy": "Pipes PostgreSQL Simple SafeT",
          "module": "Pipes.PostgreSQL.Simple.SafeT",
          "name": "CSV",
          "package": "pipes-postgresql-simple",
          "partial": "CSV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-postgresql-simple/docs/Pipes-PostgreSQL-Simple-SafeT.html#v:CSV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Pipes.PostgreSQL.Simple.SafeT\",\"Pipes.PostgreSQL.Simple\"]",
          "name": "Text",
          "package": "pipes-postgresql-simple",
          "signature": "Text",
          "source": "src/Pipes-PostgreSQL-Simple-SafeT.html#Format",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pipes-postgresql-simple/docs/Pipes-PostgreSQL-Simple-SafeT.html#v:Text\",\"http://hackage.haskell.org/package/pipes-postgresql-simple/docs/Pipes-PostgreSQL-Simple.html#v:Text\"]"
        },
        "index": {
          "hierarchy": "Pipes PostgreSQL Simple SafeT",
          "module": "Pipes.PostgreSQL.Simple.SafeT",
          "name": "Text",
          "package": "pipes-postgresql-simple",
          "partial": "Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-postgresql-simple/docs/Pipes-PostgreSQL-Simple-SafeT.html#v:Text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pipes.PostgreSQL.Simple.SafeT",
          "name": "toTable",
          "package": "pipes-postgresql-simple",
          "signature": "Connection -\u003e Format -\u003e String -\u003e Consumer ByteString m a",
          "source": "src/Pipes-PostgreSQL-Simple-SafeT.html#toTable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Pipes PostgreSQL Simple SafeT",
          "module": "Pipes.PostgreSQL.Simple.SafeT",
          "name": "toTable",
          "normalized": "Connection-\u003eFormat-\u003eString-\u003eConsumer ByteString a b",
          "package": "pipes-postgresql-simple",
          "partial": "Table",
          "signature": "Connection-\u003eFormat-\u003eString-\u003eConsumer ByteString m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-postgresql-simple/docs/Pipes-PostgreSQL-Simple-SafeT.html#v:toTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePipes utilities built on top of \u003ccode\u003epostgresql-simple\u003c/code\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Pipes.PostgreSQL.Simple",
          "name": "Simple",
          "package": "pipes-postgresql-simple",
          "source": "src/Pipes-PostgreSQL-Simple.html",
          "type": "module"
        },
        "index": {
          "description": "Pipes utilities built on top of postgresql-simple",
          "hierarchy": "Pipes PostgreSQL Simple",
          "module": "Pipes.PostgreSQL.Simple",
          "name": "Simple",
          "package": "pipes-postgresql-simple",
          "partial": "Simple",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pipes-postgresql-simple/docs/Pipes-PostgreSQL-Simple.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe PostgreSQL file format, used by the \u003ccode\u003eCOPY\u003c/code\u003e command\n\u003c/p\u003e",
          "module": "Pipes.PostgreSQL.Simple",
          "name": "Format",
          "package": "pipes-postgresql-simple",
          "source": "src/Pipes-PostgreSQL-Simple-SafeT.html#Format",
          "type": "data"
        },
        "index": {
          "description": "The PostgreSQL file format used by the COPY command",
          "hierarchy": "Pipes PostgreSQL Simple",
          "module": "Pipes.PostgreSQL.Simple",
          "name": "Format",
          "package": "pipes-postgresql-simple",
          "partial": "Format",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pipes-postgresql-simple/docs/Pipes-PostgreSQL-Simple.html#t:Format"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a table to a byte stream. This is equivilent to a PostgreSQL\n \u003ccode\u003eCOPY ... TO\u003c/code\u003e statement.\n\u003c/p\u003e\u003cp\u003eReturns the number of rows processed.\n\u003c/p\u003e",
          "module": "Pipes.PostgreSQL.Simple",
          "name": "fromTable",
          "package": "pipes-postgresql-simple",
          "signature": "Connection -\u003e Format -\u003e String -\u003e Producer ByteString m Int64",
          "source": "src/Pipes-PostgreSQL-Simple.html#fromTable",
          "type": "function"
        },
        "index": {
          "description": "Convert table to byte stream This is equivilent to PostgreSQL COPY TO statement Returns the number of rows processed",
          "hierarchy": "Pipes PostgreSQL Simple",
          "module": "Pipes.PostgreSQL.Simple",
          "name": "fromTable",
          "normalized": "Connection-\u003eFormat-\u003eString-\u003eProducer ByteString a Int",
          "package": "pipes-postgresql-simple",
          "partial": "Table",
          "signature": "Connection-\u003eFormat-\u003eString-\u003eProducer ByteString m Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-postgresql-simple/docs/Pipes-PostgreSQL-Simple.html#v:fromTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a query to a \u003ccode\u003eProducer\u003c/code\u003e of rows.\n\u003c/p\u003e\u003cp\u003eFor example,\n\u003c/p\u003e\u003cpre\u003e pg \u003c- connectToPostgresql\n query pg \"SELECT * FROM widgets WHERE ID = ?\" (Only widgetId) \u003e-\u003e print\n\u003c/pre\u003e\u003cp\u003eWill select all widgets for a given \u003ccode\u003ewidgetId\u003c/code\u003e, and then print each row to\n standard output.\n\u003c/p\u003e",
          "module": "Pipes.PostgreSQL.Simple",
          "name": "query",
          "package": "pipes-postgresql-simple",
          "signature": "Connection -\u003e Query -\u003e params -\u003e Producer r m ()",
          "source": "src/Pipes-PostgreSQL-Simple.html#query",
          "type": "function"
        },
        "index": {
          "description": "Convert query to Producer of rows For example pg connectToPostgresql query pg SELECT FROM widgets WHERE ID Only widgetId print Will select all widgets for given widgetId and then print each row to standard output",
          "hierarchy": "Pipes PostgreSQL Simple",
          "module": "Pipes.PostgreSQL.Simple",
          "name": "query",
          "normalized": "Connection-\u003eQuery-\u003ea-\u003eProducer b c()",
          "package": "pipes-postgresql-simple",
          "signature": "Connection-\u003eQuery-\u003eparams-\u003eProducer r m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-postgresql-simple/docs/Pipes-PostgreSQL-Simple.html#v:query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003equery\u003c/a\u003e\u003c/code\u003e, but it doesn't perform any query parameter substitution.\n\u003c/p\u003e",
          "module": "Pipes.PostgreSQL.Simple",
          "name": "query_",
          "package": "pipes-postgresql-simple",
          "signature": "Connection -\u003e Query -\u003e Producer r m ()",
          "source": "src/Pipes-PostgreSQL-Simple.html#query_",
          "type": "function"
        },
        "index": {
          "description": "Like query but it doesn perform any query parameter substitution",
          "hierarchy": "Pipes PostgreSQL Simple",
          "module": "Pipes.PostgreSQL.Simple",
          "name": "query_",
          "normalized": "Connection-\u003eQuery-\u003eProducer a b()",
          "package": "pipes-postgresql-simple",
          "signature": "Connection-\u003eQuery-\u003eProducer r m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-postgresql-simple/docs/Pipes-PostgreSQL-Simple.html#v:query_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a byte stream to a table. This is equivilent to a PostgreSQL\n \u003ccode\u003eCOPY ... FROM\u003c/code\u003e statement.\n\u003c/p\u003e\u003cp\u003eReturns the number of rows processed\n\u003c/p\u003e",
          "module": "Pipes.PostgreSQL.Simple",
          "name": "toTable",
          "package": "pipes-postgresql-simple",
          "signature": "Connection -\u003e Format -\u003e String -\u003e Producer ByteString m () -\u003e m Int64",
          "source": "src/Pipes-PostgreSQL-Simple.html#toTable",
          "type": "function"
        },
        "index": {
          "description": "Convert byte stream to table This is equivilent to PostgreSQL COPY FROM statement Returns the number of rows processed",
          "hierarchy": "Pipes PostgreSQL Simple",
          "module": "Pipes.PostgreSQL.Simple",
          "name": "toTable",
          "normalized": "Connection-\u003eFormat-\u003eString-\u003eProducer ByteString a()-\u003ea Int",
          "package": "pipes-postgresql-simple",
          "partial": "Table",
          "signature": "Connection-\u003eFormat-\u003eString-\u003eProducer ByteString m()-\u003em Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-postgresql-simple/docs/Pipes-PostgreSQL-Simple.html#v:toTable"
      }
    }
  ]
]