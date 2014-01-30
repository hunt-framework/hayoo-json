[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-copy-escape/docs/Database-PostgreSQL-Copy-Escape.html#",
      "description": {
        "fct-module": "Database.PostgreSQL.Copy.Escape",
        "fct-package": "postgresql-copy-escape",
        "fct-signature": "module",
        "fct-source": "src/Database-PostgreSQL-Copy-Escape.html",
        "fct-type": "module",
        "title": "Escape"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Copy Escape",
        "module": "Database.PostgreSQL.Copy.Escape",
        "name": "Escape",
        "normalized": "",
        "package": "postgresql-copy-escape",
        "partial": "Escape",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-copy-escape/docs/Database-PostgreSQL-Copy-Escape.html#t:EscapeCopyValue",
      "description": {
        "fct-module": "Database.PostgreSQL.Copy.Escape",
        "fct-package": "postgresql-copy-escape",
        "fct-signature": "data",
        "fct-source": "src/Database-PostgreSQL-Copy-Escape.html#EscapeCopyValue",
        "fct-type": "data",
        "title": "EscapeCopyValue"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Copy Escape",
        "module": "Database.PostgreSQL.Copy.Escape",
        "name": "EscapeCopyValue",
        "normalized": "",
        "package": "postgresql-copy-escape",
        "partial": "Escape Copy Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-copy-escape/docs/Database-PostgreSQL-Copy-Escape.html#v:EscapeCopyBytea",
      "description": {
        "fct-descr": "\u003cp\u003eRaw binary data destined for storage in a \u003ccode\u003eBYTEA\u003c/code\u003e column.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Copy.Escape",
        "fct-package": "postgresql-copy-escape",
        "fct-signature": "EscapeCopyBytea !ByteString",
        "fct-source": "src/Database-PostgreSQL-Copy-Escape.html#EscapeCopyValue",
        "fct-type": "function",
        "title": "EscapeCopyBytea"
      },
      "index": {
        "description": "Raw binary data destined for storage in BYTEA column",
        "hierarchy": "Database PostgreSQL Copy Escape",
        "module": "Database.PostgreSQL.Copy.Escape",
        "name": "EscapeCopyBytea",
        "normalized": "",
        "package": "postgresql-copy-escape",
        "partial": "Escape Copy Bytea",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-copy-escape/docs/Database-PostgreSQL-Copy-Escape.html#v:EscapeCopyNull",
      "description": {
        "fct-module": "Database.PostgreSQL.Copy.Escape",
        "fct-package": "postgresql-copy-escape",
        "fct-signature": "EscapeCopyNull",
        "fct-source": "src/Database-PostgreSQL-Copy-Escape.html#EscapeCopyValue",
        "fct-type": "function",
        "title": "EscapeCopyNull"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Copy Escape",
        "module": "Database.PostgreSQL.Copy.Escape",
        "name": "EscapeCopyNull",
        "normalized": "",
        "package": "postgresql-copy-escape",
        "partial": "Escape Copy Null",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-copy-escape/docs/Database-PostgreSQL-Copy-Escape.html#v:EscapeCopyText",
      "description": {
        "fct-descr": "\u003cp\u003eA PostgreSQL datum in its text representation.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Copy.Escape",
        "fct-package": "postgresql-copy-escape",
        "fct-signature": "EscapeCopyText !ByteString",
        "fct-source": "src/Database-PostgreSQL-Copy-Escape.html#EscapeCopyValue",
        "fct-type": "function",
        "title": "EscapeCopyText"
      },
      "index": {
        "description": "PostgreSQL datum in its text representation",
        "hierarchy": "Database PostgreSQL Copy Escape",
        "module": "Database.PostgreSQL.Copy.Escape",
        "name": "EscapeCopyText",
        "normalized": "",
        "package": "postgresql-copy-escape",
        "partial": "Escape Copy Text",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-copy-escape/docs/Database-PostgreSQL-Copy-Escape.html#v:escapeCopyRow",
      "description": {
        "fct-descr": "\u003cp\u003eEscape a row of data for use with a COPY FROM statement.\n Include a trailing newline at the end.\n\u003c/p\u003e\u003cp\u003eThis assumes text format (rather than BINARY or CSV) with the default\n delimiter (tab) and default null string (\\N).  A suitable query looks like:\n\u003c/p\u003e\u003cpre\u003eCOPY tablename (id, col1, col2) FROM stdin;\n\u003c/pre\u003e",
        "fct-module": "Database.PostgreSQL.Copy.Escape",
        "fct-package": "postgresql-copy-escape",
        "fct-signature": "[EscapeCopyValue] -\u003e ByteString",
        "fct-source": "src/Database-PostgreSQL-Copy-Escape.html#escapeCopyRow",
        "fct-type": "function",
        "title": "escapeCopyRow"
      },
      "index": {
        "description": "Escape row of data for use with COPY FROM statement Include trailing newline at the end This assumes text format rather than BINARY or CSV with the default delimiter tab and default null string suitable query looks like COPY tablename id col1 col2 FROM stdin",
        "hierarchy": "Database PostgreSQL Copy Escape",
        "module": "Database.PostgreSQL.Copy.Escape",
        "name": "escapeCopyRow",
        "normalized": "[EscapeCopyValue]-\u003eByteString",
        "package": "postgresql-copy-escape",
        "partial": "Copy Row",
        "signature": "[EscapeCopyValue]-\u003eByteString"
      }
    }
  }
]