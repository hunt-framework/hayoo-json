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
        "word": "postgresql-copy-escape"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Copy.Escape",
          "name": "Escape",
          "package": "postgresql-copy-escape",
          "source": "src/Database-PostgreSQL-Copy-Escape.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Copy Escape",
          "module": "Database.PostgreSQL.Copy.Escape",
          "name": "Escape",
          "package": "postgresql-copy-escape",
          "partial": "Escape",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-copy-escape/docs/Database-PostgreSQL-Copy-Escape.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Copy.Escape",
          "name": "EscapeCopyValue",
          "package": "postgresql-copy-escape",
          "source": "src/Database-PostgreSQL-Copy-Escape.html#EscapeCopyValue",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Copy Escape",
          "module": "Database.PostgreSQL.Copy.Escape",
          "name": "EscapeCopyValue",
          "package": "postgresql-copy-escape",
          "partial": "Escape Copy Value",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-copy-escape/docs/Database-PostgreSQL-Copy-Escape.html#t:EscapeCopyValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRaw binary data destined for storage in a \u003ccode\u003eBYTEA\u003c/code\u003e column.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Copy.Escape",
          "name": "EscapeCopyBytea",
          "package": "postgresql-copy-escape",
          "signature": "EscapeCopyBytea !ByteString",
          "source": "src/Database-PostgreSQL-Copy-Escape.html#EscapeCopyValue",
          "type": "function"
        },
        "index": {
          "description": "Raw binary data destined for storage in BYTEA column",
          "hierarchy": "Database PostgreSQL Copy Escape",
          "module": "Database.PostgreSQL.Copy.Escape",
          "name": "EscapeCopyBytea",
          "package": "postgresql-copy-escape",
          "partial": "Escape Copy Bytea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-copy-escape/docs/Database-PostgreSQL-Copy-Escape.html#v:EscapeCopyBytea"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Copy.Escape",
          "name": "EscapeCopyNull",
          "package": "postgresql-copy-escape",
          "signature": "EscapeCopyNull",
          "source": "src/Database-PostgreSQL-Copy-Escape.html#EscapeCopyValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Copy Escape",
          "module": "Database.PostgreSQL.Copy.Escape",
          "name": "EscapeCopyNull",
          "package": "postgresql-copy-escape",
          "partial": "Escape Copy Null",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-copy-escape/docs/Database-PostgreSQL-Copy-Escape.html#v:EscapeCopyNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA PostgreSQL datum in its text representation.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Copy.Escape",
          "name": "EscapeCopyText",
          "package": "postgresql-copy-escape",
          "signature": "EscapeCopyText !ByteString",
          "source": "src/Database-PostgreSQL-Copy-Escape.html#EscapeCopyValue",
          "type": "function"
        },
        "index": {
          "description": "PostgreSQL datum in its text representation",
          "hierarchy": "Database PostgreSQL Copy Escape",
          "module": "Database.PostgreSQL.Copy.Escape",
          "name": "EscapeCopyText",
          "package": "postgresql-copy-escape",
          "partial": "Escape Copy Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-copy-escape/docs/Database-PostgreSQL-Copy-Escape.html#v:EscapeCopyText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEscape a row of data for use with a COPY FROM statement.\n Include a trailing newline at the end.\n\u003c/p\u003e\u003cp\u003eThis assumes text format (rather than BINARY or CSV) with the default\n delimiter (tab) and default null string (\\N).  A suitable query looks like:\n\u003c/p\u003e\u003cpre\u003eCOPY tablename (id, col1, col2) FROM stdin;\n\u003c/pre\u003e",
          "module": "Database.PostgreSQL.Copy.Escape",
          "name": "escapeCopyRow",
          "package": "postgresql-copy-escape",
          "signature": "[EscapeCopyValue] -\u003e ByteString",
          "source": "src/Database-PostgreSQL-Copy-Escape.html#escapeCopyRow",
          "type": "function"
        },
        "index": {
          "description": "Escape row of data for use with COPY FROM statement Include trailing newline at the end This assumes text format rather than BINARY or CSV with the default delimiter tab and default null string suitable query looks like COPY tablename id col1 col2 FROM stdin",
          "hierarchy": "Database PostgreSQL Copy Escape",
          "module": "Database.PostgreSQL.Copy.Escape",
          "name": "escapeCopyRow",
          "normalized": "[EscapeCopyValue]-\u003eByteString",
          "package": "postgresql-copy-escape",
          "partial": "Copy Row",
          "signature": "[EscapeCopyValue]-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-copy-escape/docs/Database-PostgreSQL-Copy-Escape.html#v:escapeCopyRow"
      }
    }
  ]
]