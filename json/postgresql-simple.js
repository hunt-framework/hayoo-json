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
        "word": "postgresql-simple"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA Postgres array parser and pretty-printer.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.PostgreSQL.Simple.Arrays",
          "name": "Arrays",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-Arrays.html",
          "type": "module"
        },
        "index": {
          "description": "Postgres array parser and pretty-printer",
          "hierarchy": "Database PostgreSQL Simple Arrays",
          "module": "Database.PostgreSQL.Simple.Arrays",
          "name": "Arrays",
          "package": "postgresql-simple",
          "partial": "Arrays",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Arrays.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Arrays",
          "name": "ArrayFormat",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-Arrays.html#ArrayFormat",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Arrays",
          "module": "Database.PostgreSQL.Simple.Arrays",
          "name": "ArrayFormat",
          "package": "postgresql-simple",
          "partial": "Array Format",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Arrays.html#t:ArrayFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Arrays",
          "name": "Array",
          "package": "postgresql-simple",
          "signature": "Array [ArrayFormat]",
          "source": "src/Database-PostgreSQL-Simple-Arrays.html#ArrayFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Arrays",
          "module": "Database.PostgreSQL.Simple.Arrays",
          "name": "Array",
          "normalized": "Array[ArrayFormat]",
          "package": "postgresql-simple",
          "partial": "Array",
          "signature": "Array[ArrayFormat]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Arrays.html#v:Array"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Arrays",
          "name": "Plain",
          "package": "postgresql-simple",
          "signature": "Plain ByteString",
          "source": "src/Database-PostgreSQL-Simple-Arrays.html#ArrayFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Arrays",
          "module": "Database.PostgreSQL.Simple.Arrays",
          "name": "Plain",
          "package": "postgresql-simple",
          "partial": "Plain",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Arrays.html#v:Plain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Arrays",
          "name": "Quoted",
          "package": "postgresql-simple",
          "signature": "Quoted ByteString",
          "source": "src/Database-PostgreSQL-Simple-Arrays.html#ArrayFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Arrays",
          "module": "Database.PostgreSQL.Simple.Arrays",
          "name": "Quoted",
          "package": "postgresql-simple",
          "partial": "Quoted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Arrays.html#v:Quoted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Arrays",
          "name": "array",
          "package": "postgresql-simple",
          "signature": "Char -\u003e Parser [ArrayFormat]",
          "source": "src/Database-PostgreSQL-Simple-Arrays.html#array",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Arrays",
          "module": "Database.PostgreSQL.Simple.Arrays",
          "name": "array",
          "normalized": "Char-\u003eParser[ArrayFormat]",
          "package": "postgresql-simple",
          "signature": "Char-\u003eParser[ArrayFormat]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Arrays.html#v:array"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse one of three primitive field formats: array, quoted and plain.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple.Arrays",
          "name": "arrayFormat",
          "package": "postgresql-simple",
          "signature": "Char -\u003e Parser ArrayFormat",
          "source": "src/Database-PostgreSQL-Simple-Arrays.html#arrayFormat",
          "type": "function"
        },
        "index": {
          "description": "Parse one of three primitive field formats array quoted and plain",
          "hierarchy": "Database PostgreSQL Simple Arrays",
          "module": "Database.PostgreSQL.Simple.Arrays",
          "name": "arrayFormat",
          "normalized": "Char-\u003eParser ArrayFormat",
          "package": "postgresql-simple",
          "partial": "Format",
          "signature": "Char-\u003eParser ArrayFormat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Arrays.html#v:arrayFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormat a list of array format items, inserting the appropriate delimiter\n   between them. When the items are arrays, they will be delimited with\n   commas; otherwise, they are delimited with the passed-in-delimiter.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple.Arrays",
          "name": "delimit",
          "package": "postgresql-simple",
          "signature": "Char -\u003e [ArrayFormat] -\u003e ByteString",
          "source": "src/Database-PostgreSQL-Simple-Arrays.html#delimit",
          "type": "function"
        },
        "index": {
          "description": "Format list of array format items inserting the appropriate delimiter between them When the items are arrays they will be delimited with commas otherwise they are delimited with the passed-in-delimiter",
          "hierarchy": "Database PostgreSQL Simple Arrays",
          "module": "Database.PostgreSQL.Simple.Arrays",
          "name": "delimit",
          "normalized": "Char-\u003e[ArrayFormat]-\u003eByteString",
          "package": "postgresql-simple",
          "signature": "Char-\u003e[ArrayFormat]-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Arrays.html#v:delimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEscape a string according to Postgres double-quoted string format.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple.Arrays",
          "name": "esc",
          "package": "postgresql-simple",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Database-PostgreSQL-Simple-Arrays.html#esc",
          "type": "function"
        },
        "index": {
          "description": "Escape string according to Postgres double-quoted string format",
          "hierarchy": "Database PostgreSQL Simple Arrays",
          "module": "Database.PostgreSQL.Simple.Arrays",
          "name": "esc",
          "normalized": "ByteString-\u003eByteString",
          "package": "postgresql-simple",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Arrays.html#v:esc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormat an array format item, using the delimiter character if the item is\n   itself an array.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple.Arrays",
          "name": "fmt",
          "package": "postgresql-simple",
          "signature": "Char -\u003e ArrayFormat -\u003e ByteString",
          "source": "src/Database-PostgreSQL-Simple-Arrays.html#fmt",
          "type": "function"
        },
        "index": {
          "description": "Format an array format item using the delimiter character if the item is itself an array",
          "hierarchy": "Database PostgreSQL Simple Arrays",
          "module": "Database.PostgreSQL.Simple.Arrays",
          "name": "fmt",
          "normalized": "Char-\u003eArrayFormat-\u003eByteString",
          "package": "postgresql-simple",
          "signature": "Char-\u003eArrayFormat-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Arrays.html#v:fmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormat an array format item, using the delimiter character if the item is\n   itself an array, optionally applying quoting rules. Creates copies for\n   safety when used in \u003ccode\u003eFromField\u003c/code\u003e instances.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple.Arrays",
          "name": "fmt'",
          "package": "postgresql-simple",
          "signature": "Bool -\u003e Char -\u003e ArrayFormat -\u003e ByteString",
          "source": "src/Database-PostgreSQL-Simple-Arrays.html#fmt%27",
          "type": "function"
        },
        "index": {
          "description": "Format an array format item using the delimiter character if the item is itself an array optionally applying quoting rules Creates copies for safety when used in FromField instances",
          "hierarchy": "Database PostgreSQL Simple Arrays",
          "module": "Database.PostgreSQL.Simple.Arrays",
          "name": "fmt'",
          "normalized": "Bool-\u003eChar-\u003eArrayFormat-\u003eByteString",
          "package": "postgresql-simple",
          "signature": "Bool-\u003eChar-\u003eArrayFormat-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Arrays.html#v:fmt-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecognizes a plain string literal, not containing quotes or brackets and\n   not containing the delimiter character.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple.Arrays",
          "name": "plain",
          "package": "postgresql-simple",
          "signature": "Char -\u003e Parser ByteString",
          "source": "src/Database-PostgreSQL-Simple-Arrays.html#plain",
          "type": "function"
        },
        "index": {
          "description": "Recognizes plain string literal not containing quotes or brackets and not containing the delimiter character",
          "hierarchy": "Database PostgreSQL Simple Arrays",
          "module": "Database.PostgreSQL.Simple.Arrays",
          "name": "plain",
          "normalized": "Char-\u003eParser ByteString",
          "package": "postgresql-simple",
          "signature": "Char-\u003eParser ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Arrays.html#v:plain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecognizes a quoted string.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple.Arrays",
          "name": "quoted",
          "package": "postgresql-simple",
          "signature": "Parser ByteString",
          "source": "src/Database-PostgreSQL-Simple-Arrays.html#quoted",
          "type": "function"
        },
        "index": {
          "description": "Recognizes quoted string",
          "hierarchy": "Database PostgreSQL Simple Arrays",
          "module": "Database.PostgreSQL.Simple.Arrays",
          "name": "quoted",
          "package": "postgresql-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Arrays.html#v:quoted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use TypeInfo instead\n\u003c/p\u003e\u003c/div\u003e\u003c/div\u003e",
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "BuiltinTypes",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html",
          "type": "module"
        },
        "index": {
          "description": "Deprecated Use TypeInfo instead",
          "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "BuiltinTypes",
          "package": "postgresql-simple",
          "partial": "Builtin Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "BuiltinType",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "BuiltinType",
          "package": "postgresql-simple",
          "partial": "Builtin Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#t:BuiltinType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "AbsTime",
          "package": "postgresql-simple",
          "signature": "AbsTime",
          "source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "AbsTime",
          "package": "postgresql-simple",
          "partial": "Abs Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:AbsTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "Bit",
          "package": "postgresql-simple",
          "signature": "Bit",
          "source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "Bit",
          "package": "postgresql-simple",
          "partial": "Bit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:Bit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "Bool",
          "package": "postgresql-simple",
          "signature": "Bool",
          "source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "Bool",
          "package": "postgresql-simple",
          "partial": "Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:Bool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "Box",
          "package": "postgresql-simple",
          "signature": "Box",
          "source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "Box",
          "package": "postgresql-simple",
          "partial": "Box",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:Box"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "BpChar",
          "package": "postgresql-simple",
          "signature": "BpChar",
          "source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "BpChar",
          "package": "postgresql-simple",
          "partial": "Bp Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:BpChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "ByteA",
          "package": "postgresql-simple",
          "signature": "ByteA",
          "source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "ByteA",
          "package": "postgresql-simple",
          "partial": "Byte",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:ByteA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "Char",
          "package": "postgresql-simple",
          "signature": "Char",
          "source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "Char",
          "package": "postgresql-simple",
          "partial": "Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:Char"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "Cid",
          "package": "postgresql-simple",
          "signature": "Cid",
          "source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "Cid",
          "package": "postgresql-simple",
          "partial": "Cid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:Cid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "Cidr",
          "package": "postgresql-simple",
          "signature": "Cidr",
          "source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "Cidr",
          "package": "postgresql-simple",
          "partial": "Cidr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:Cidr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "Circle",
          "package": "postgresql-simple",
          "signature": "Circle",
          "source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "Circle",
          "package": "postgresql-simple",
          "partial": "Circle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:Circle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "Date",
          "package": "postgresql-simple",
          "signature": "Date",
          "source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "Date",
          "package": "postgresql-simple",
          "partial": "Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:Date"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "Float4",
          "package": "postgresql-simple",
          "signature": "Float4",
          "source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "Float4",
          "package": "postgresql-simple",
          "partial": "Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:Float4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "Float8",
          "package": "postgresql-simple",
          "signature": "Float8",
          "source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "Float8",
          "package": "postgresql-simple",
          "partial": "Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:Float8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "Inet",
          "package": "postgresql-simple",
          "signature": "Inet",
          "source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "Inet",
          "package": "postgresql-simple",
          "partial": "Inet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:Inet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "Int2",
          "package": "postgresql-simple",
          "signature": "Int2",
          "source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "Int2",
          "package": "postgresql-simple",
          "partial": "Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:Int2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "Int4",
          "package": "postgresql-simple",
          "signature": "Int4",
          "source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "Int4",
          "package": "postgresql-simple",
          "partial": "Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:Int4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "Int8",
          "package": "postgresql-simple",
          "signature": "Int8",
          "source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "Int8",
          "package": "postgresql-simple",
          "partial": "Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:Int8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "Interval",
          "package": "postgresql-simple",
          "signature": "Interval",
          "source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "Interval",
          "package": "postgresql-simple",
          "partial": "Interval",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:Interval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "JSON",
          "package": "postgresql-simple",
          "signature": "JSON",
          "source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "JSON",
          "package": "postgresql-simple",
          "partial": "JSON",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:JSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "LSeg",
          "package": "postgresql-simple",
          "signature": "LSeg",
          "source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "LSeg",
          "package": "postgresql-simple",
          "partial": "LSeg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:LSeg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "Line",
          "package": "postgresql-simple",
          "signature": "Line",
          "source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "Line",
          "package": "postgresql-simple",
          "partial": "Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:Line"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "MacAddr",
          "package": "postgresql-simple",
          "signature": "MacAddr",
          "source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "MacAddr",
          "package": "postgresql-simple",
          "partial": "Mac Addr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:MacAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "Money",
          "package": "postgresql-simple",
          "signature": "Money",
          "source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "Money",
          "package": "postgresql-simple",
          "partial": "Money",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:Money"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "Name",
          "package": "postgresql-simple",
          "signature": "Name",
          "source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "Name",
          "package": "postgresql-simple",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:Name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "Numeric",
          "package": "postgresql-simple",
          "signature": "Numeric",
          "source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "Numeric",
          "package": "postgresql-simple",
          "partial": "Numeric",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:Numeric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "Oid",
          "package": "postgresql-simple",
          "signature": "Oid",
          "source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "Oid",
          "package": "postgresql-simple",
          "partial": "Oid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:Oid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "Path",
          "package": "postgresql-simple",
          "signature": "Path",
          "source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "Path",
          "package": "postgresql-simple",
          "partial": "Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:Path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "Point",
          "package": "postgresql-simple",
          "signature": "Point",
          "source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "Point",
          "package": "postgresql-simple",
          "partial": "Point",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:Point"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "Polygon",
          "package": "postgresql-simple",
          "signature": "Polygon",
          "source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "Polygon",
          "package": "postgresql-simple",
          "partial": "Polygon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:Polygon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "Record",
          "package": "postgresql-simple",
          "signature": "Record",
          "source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "Record",
          "package": "postgresql-simple",
          "partial": "Record",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:Record"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "RefCursor",
          "package": "postgresql-simple",
          "signature": "RefCursor",
          "source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "RefCursor",
          "package": "postgresql-simple",
          "partial": "Ref Cursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:RefCursor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "RegProc",
          "package": "postgresql-simple",
          "signature": "RegProc",
          "source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "RegProc",
          "package": "postgresql-simple",
          "partial": "Reg Proc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:RegProc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "RelTime",
          "package": "postgresql-simple",
          "signature": "RelTime",
          "source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "RelTime",
          "package": "postgresql-simple",
          "partial": "Rel Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:RelTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "TInterval",
          "package": "postgresql-simple",
          "signature": "TInterval",
          "source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "TInterval",
          "package": "postgresql-simple",
          "partial": "TInterval",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:TInterval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "Text",
          "package": "postgresql-simple",
          "signature": "Text",
          "source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "Text",
          "package": "postgresql-simple",
          "partial": "Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:Text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "Tid",
          "package": "postgresql-simple",
          "signature": "Tid",
          "source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "Tid",
          "package": "postgresql-simple",
          "partial": "Tid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:Tid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "Time",
          "package": "postgresql-simple",
          "signature": "Time",
          "source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "Time",
          "package": "postgresql-simple",
          "partial": "Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:Time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "TimeTZ",
          "package": "postgresql-simple",
          "signature": "TimeTZ",
          "source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "TimeTZ",
          "package": "postgresql-simple",
          "partial": "Time TZ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:TimeTZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "Timestamp",
          "package": "postgresql-simple",
          "signature": "Timestamp",
          "source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "Timestamp",
          "package": "postgresql-simple",
          "partial": "Timestamp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:Timestamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "TimestampTZ",
          "package": "postgresql-simple",
          "signature": "TimestampTZ",
          "source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "TimestampTZ",
          "package": "postgresql-simple",
          "partial": "Timestamp TZ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:TimestampTZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "UUID",
          "package": "postgresql-simple",
          "signature": "UUID",
          "source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "UUID",
          "package": "postgresql-simple",
          "partial": "UUID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:UUID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "Unknown",
          "package": "postgresql-simple",
          "signature": "Unknown",
          "source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "Unknown",
          "package": "postgresql-simple",
          "partial": "Unknown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:Unknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "VarBit",
          "package": "postgresql-simple",
          "signature": "VarBit",
          "source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "VarBit",
          "package": "postgresql-simple",
          "partial": "Var Bit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:VarBit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "VarChar",
          "package": "postgresql-simple",
          "signature": "VarChar",
          "source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "VarChar",
          "package": "postgresql-simple",
          "partial": "Var Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:VarChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "Void",
          "package": "postgresql-simple",
          "signature": "Void",
          "source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "Void",
          "package": "postgresql-simple",
          "partial": "Void",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:Void"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "Xid",
          "package": "postgresql-simple",
          "signature": "Xid",
          "source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "Xid",
          "package": "postgresql-simple",
          "partial": "Xid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:Xid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "Xml",
          "package": "postgresql-simple",
          "signature": "Xml",
          "source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "Xml",
          "package": "postgresql-simple",
          "partial": "Xml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:Xml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "builtin2oid",
          "package": "postgresql-simple",
          "signature": "BuiltinType -\u003e Oid",
          "source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#builtin2oid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "builtin2oid",
          "normalized": "BuiltinType-\u003eOid",
          "package": "postgresql-simple",
          "signature": "BuiltinType-\u003eOid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:builtin2oid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "builtin2typname",
          "package": "postgresql-simple",
          "signature": "BuiltinType -\u003e ByteString",
          "source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#builtin2typname",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "builtin2typname",
          "normalized": "BuiltinType-\u003eByteString",
          "package": "postgresql-simple",
          "signature": "BuiltinType-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:builtin2typname"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "oid2builtin",
          "package": "postgresql-simple",
          "signature": "Oid -\u003e Maybe BuiltinType",
          "source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#oid2builtin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "oid2builtin",
          "normalized": "Oid-\u003eMaybe BuiltinType",
          "package": "postgresql-simple",
          "signature": "Oid-\u003eMaybe BuiltinType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:oid2builtin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "oid2typname",
          "package": "postgresql-simple",
          "signature": "Oid -\u003e Maybe ByteString",
          "source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#oid2typname",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
          "module": "Database.PostgreSQL.Simple.BuiltinTypes",
          "name": "oid2typname",
          "normalized": "Oid-\u003eMaybe ByteString",
          "package": "postgresql-simple",
          "signature": "Oid-\u003eMaybe ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:oid2typname"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003emid-level support for COPY IN and COPY OUT.   See\n \u003ca\u003ehttp://www.postgresql.org/docs/9.2/static/sql-copy.html\u003c/a\u003e for\n more information.\n\u003c/p\u003e\u003cp\u003eTo use this binding,  first call \u003ccode\u003e\u003ca\u003ecopy\u003c/a\u003e\u003c/code\u003e with an appropriate\n query as documented in the link above.  Then, in the case of a\n \u003ccode\u003eCOPY TO STDOUT\u003c/code\u003e query,  call \u003ccode\u003e\u003ca\u003egetCopyData\u003c/a\u003e\u003c/code\u003e repeatedly until it\n returns \u003ccode\u003e\u003ca\u003eCopyOutDone\u003c/a\u003e\u003c/code\u003e.   In the case of a \u003ccode\u003eCOPY FROM STDIN\u003c/code\u003e\n query,  call \u003ccode\u003e\u003ca\u003eputCopyData\u003c/a\u003e\u003c/code\u003e repeatedly and then finish by calling\n either \u003ccode\u003e\u003ca\u003eputCopyEnd\u003c/a\u003e\u003c/code\u003e to proceed or \u003ccode\u003e\u003ca\u003eputCopyError\u003c/a\u003e\u003c/code\u003e to abort.\n\u003c/p\u003e\u003cp\u003eYou cannot issue another query on the same connection while a copy\n is ongoing; this will result in an exception.   It is harmless to\n concurrently call \u003ccode\u003egetNotification\u003c/code\u003e on a connection while it is in\n a \u003ccode\u003eCopyIn\u003c/code\u003e or \u003ccode\u003eCopyOut\u003c/code\u003e state,  however be aware that current versions\n of the PostgreSQL backend will not deliver notifications to a client\n while a transaction is ongoing.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.PostgreSQL.Simple.Copy",
          "name": "Copy",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-Copy.html",
          "type": "module"
        },
        "index": {
          "description": "mid-level support for COPY IN and COPY OUT See http www.postgresql.org docs static sql-copy.html for more information To use this binding first call copy with an appropriate query as documented in the link above Then in the case of COPY TO STDOUT query call getCopyData repeatedly until it returns CopyOutDone In the case of COPY FROM STDIN query call putCopyData repeatedly and then finish by calling either putCopyEnd to proceed or putCopyError to abort You cannot issue another query on the same connection while copy is ongoing this will result in an exception It is harmless to concurrently call getNotification on connection while it is in CopyIn or CopyOut state however be aware that current versions of the PostgreSQL backend will not deliver notifications to client while transaction is ongoing",
          "hierarchy": "Database PostgreSQL Simple Copy",
          "module": "Database.PostgreSQL.Simple.Copy",
          "name": "Copy",
          "package": "postgresql-simple",
          "partial": "Copy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Copy.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Copy",
          "name": "CopyOutResult",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-Copy.html#CopyOutResult",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Copy",
          "module": "Database.PostgreSQL.Simple.Copy",
          "name": "CopyOutResult",
          "package": "postgresql-simple",
          "partial": "Copy Out Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Copy.html#t:CopyOutResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNo more rows, and a count of the\n   number of rows returned.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple.Copy",
          "name": "CopyOutDone",
          "package": "postgresql-simple",
          "signature": "CopyOutDone !Int64",
          "source": "src/Database-PostgreSQL-Simple-Copy.html#CopyOutResult",
          "type": "function"
        },
        "index": {
          "description": "No more rows and count of the number of rows returned",
          "hierarchy": "Database PostgreSQL Simple Copy",
          "module": "Database.PostgreSQL.Simple.Copy",
          "name": "CopyOutDone",
          "package": "postgresql-simple",
          "partial": "Copy Out Done",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Copy.html#v:CopyOutDone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData representing either exactly\n   one row of the result,  or header\n   or footer data depending on format.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple.Copy",
          "name": "CopyOutRow",
          "package": "postgresql-simple",
          "signature": "CopyOutRow !ByteString",
          "source": "src/Database-PostgreSQL-Simple-Copy.html#CopyOutResult",
          "type": "function"
        },
        "index": {
          "description": "Data representing either exactly one row of the result or header or footer data depending on format",
          "hierarchy": "Database PostgreSQL Simple Copy",
          "module": "Database.PostgreSQL.Simple.Copy",
          "name": "CopyOutRow",
          "package": "postgresql-simple",
          "partial": "Copy Out Row",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Copy.html#v:CopyOutRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIssue a \u003ccode\u003eCOPY FROM STDIN\u003c/code\u003e or \u003ccode\u003eCOPY TO STDOUT\u003c/code\u003e query.   In the former\n   case, the connection's state will change to \u003ccode\u003eCopyIn\u003c/code\u003e;  in the latter,\n   \u003ccode\u003eCopyOut\u003c/code\u003e.  The connection must be in the ready state in order\n   to call this function.  Performs parameter subsitution.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple.Copy",
          "name": "copy",
          "package": "postgresql-simple",
          "signature": "Connection -\u003e Query -\u003e params -\u003e IO ()",
          "source": "src/Database-PostgreSQL-Simple-Copy.html#copy",
          "type": "function"
        },
        "index": {
          "description": "Issue COPY FROM STDIN or COPY TO STDOUT query In the former case the connection state will change to CopyIn in the latter CopyOut The connection must be in the ready state in order to call this function Performs parameter subsitution",
          "hierarchy": "Database PostgreSQL Simple Copy",
          "module": "Database.PostgreSQL.Simple.Copy",
          "name": "copy",
          "normalized": "Connection-\u003eQuery-\u003ea-\u003eIO()",
          "package": "postgresql-simple",
          "signature": "Connection-\u003eQuery-\u003eparams-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Copy.html#v:copy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIssue a \u003ccode\u003eCOPY FROM STDIN\u003c/code\u003e or \u003ccode\u003eCOPY TO STDOUT\u003c/code\u003e query.   In the former\n   case, the connection's state will change to \u003ccode\u003eCopyIn\u003c/code\u003e;  in the latter,\n   \u003ccode\u003eCopyOut\u003c/code\u003e.  The connection must be in the ready state in order\n   to call this function.  Does not perform parameter subsitution.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple.Copy",
          "name": "copy_",
          "package": "postgresql-simple",
          "signature": "Connection -\u003e Query -\u003e IO ()",
          "source": "src/Database-PostgreSQL-Simple-Copy.html#copy_",
          "type": "function"
        },
        "index": {
          "description": "Issue COPY FROM STDIN or COPY TO STDOUT query In the former case the connection state will change to CopyIn in the latter CopyOut The connection must be in the ready state in order to call this function Does not perform parameter subsitution",
          "hierarchy": "Database PostgreSQL Simple Copy",
          "module": "Database.PostgreSQL.Simple.Copy",
          "name": "copy_",
          "normalized": "Connection-\u003eQuery-\u003eIO()",
          "package": "postgresql-simple",
          "signature": "Connection-\u003eQuery-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Copy.html#v:copy_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve some data from a \u003ccode\u003eCOPY TO STDOUT\u003c/code\u003e query.   A connection\n   must be in the \u003ccode\u003eCopyOut\u003c/code\u003e state in order to call this function.  If this\n   returns a \u003ccode\u003e\u003ca\u003eCopyOutRow\u003c/a\u003e\u003c/code\u003e, the connection remains in the \u003ccode\u003eCopyOut\u003c/code\u003e state,\n   if it returns \u003ccode\u003e\u003ca\u003eCopyOutDone\u003c/a\u003e\u003c/code\u003e, then the connection has reverted to the\n   ready state.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple.Copy",
          "name": "getCopyData",
          "package": "postgresql-simple",
          "signature": "Connection -\u003e IO CopyOutResult",
          "source": "src/Database-PostgreSQL-Simple-Copy.html#getCopyData",
          "type": "function"
        },
        "index": {
          "description": "Retrieve some data from COPY TO STDOUT query connection must be in the CopyOut state in order to call this function If this returns CopyOutRow the connection remains in the CopyOut state if it returns CopyOutDone then the connection has reverted to the ready state",
          "hierarchy": "Database PostgreSQL Simple Copy",
          "module": "Database.PostgreSQL.Simple.Copy",
          "name": "getCopyData",
          "normalized": "Connection-\u003eIO CopyOutResult",
          "package": "postgresql-simple",
          "partial": "Copy Data",
          "signature": "Connection-\u003eIO CopyOutResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Copy.html#v:getCopyData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFeed some data to a \u003ccode\u003eCOPY FROM STDIN\u003c/code\u003e query.  Note that\n   the data does not need to represent a single row,  or even an\n   integral number of rows.  The net result of\n   \u003ccode\u003eputCopyData conn a \u003e\u003e putCopyData conn b\u003c/code\u003e\n   is the same as \u003ccode\u003eputCopyData conn c\u003c/code\u003e whenever \u003ccode\u003ec == BS.append a b\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eA connection must be in the \u003ccode\u003eCopyIn\u003c/code\u003e state in order to call this\n   function,  otherwise a \u003ccode\u003e\u003ca\u003eSqlError\u003c/a\u003e\u003c/code\u003e exception will result.  The\n   connection remains in the \u003ccode\u003eCopyIn\u003c/code\u003e state after this function\n   is called.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple.Copy",
          "name": "putCopyData",
          "package": "postgresql-simple",
          "signature": "Connection -\u003e ByteString -\u003e IO ()",
          "source": "src/Database-PostgreSQL-Simple-Copy.html#putCopyData",
          "type": "function"
        },
        "index": {
          "description": "Feed some data to COPY FROM STDIN query Note that the data does not need to represent single row or even an integral number of rows The net result of putCopyData conn putCopyData conn is the same as putCopyData conn whenever BS.append connection must be in the CopyIn state in order to call this function otherwise SqlError exception will result The connection remains in the CopyIn state after this function is called",
          "hierarchy": "Database PostgreSQL Simple Copy",
          "module": "Database.PostgreSQL.Simple.Copy",
          "name": "putCopyData",
          "normalized": "Connection-\u003eByteString-\u003eIO()",
          "package": "postgresql-simple",
          "partial": "Copy Data",
          "signature": "Connection-\u003eByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Copy.html#v:putCopyData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompletes a \u003ccode\u003eCOPY FROM STDIN\u003c/code\u003e query.  Returns the number of rows\n   processed.\n\u003c/p\u003e\u003cp\u003eA connection must be in the \u003ccode\u003eCopyIn\u003c/code\u003e state in order to call this\n   function,  otherwise a \u003ccode\u003e\u003ca\u003eSqlError\u003c/a\u003e\u003c/code\u003e exception will result.  The\n   connection's state changes back to ready after this function\n   is called.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple.Copy",
          "name": "putCopyEnd",
          "package": "postgresql-simple",
          "signature": "Connection -\u003e IO Int64",
          "source": "src/Database-PostgreSQL-Simple-Copy.html#putCopyEnd",
          "type": "function"
        },
        "index": {
          "description": "Completes COPY FROM STDIN query Returns the number of rows processed connection must be in the CopyIn state in order to call this function otherwise SqlError exception will result The connection state changes back to ready after this function is called",
          "hierarchy": "Database PostgreSQL Simple Copy",
          "module": "Database.PostgreSQL.Simple.Copy",
          "name": "putCopyEnd",
          "normalized": "Connection-\u003eIO Int",
          "package": "postgresql-simple",
          "partial": "Copy End",
          "signature": "Connection-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Copy.html#v:putCopyEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAborts a \u003ccode\u003eCOPY FROM STDIN\u003c/code\u003e query.  The string parameter is simply\n   an arbitrary error message that may show up in the PostgreSQL\n   server's log.\n\u003c/p\u003e\u003cp\u003eA connection must be in the \u003ccode\u003eCopyIn\u003c/code\u003e state in order to call this\n   function,  otherwise a \u003ccode\u003e\u003ca\u003eSqlError\u003c/a\u003e\u003c/code\u003e exception will result.  The\n   connection's state changes back to ready after this function\n   is called.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple.Copy",
          "name": "putCopyError",
          "package": "postgresql-simple",
          "signature": "Connection -\u003e ByteString -\u003e IO ()",
          "source": "src/Database-PostgreSQL-Simple-Copy.html#putCopyError",
          "type": "function"
        },
        "index": {
          "description": "Aborts COPY FROM STDIN query The string parameter is simply an arbitrary error message that may show up in the PostgreSQL server log connection must be in the CopyIn state in order to call this function otherwise SqlError exception will result The connection state changes back to ready after this function is called",
          "hierarchy": "Database PostgreSQL Simple Copy",
          "module": "Database.PostgreSQL.Simple.Copy",
          "name": "putCopyError",
          "normalized": "Connection-\u003eByteString-\u003eIO()",
          "package": "postgresql-simple",
          "partial": "Copy Error",
          "signature": "Connection-\u003eByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Copy.html#v:putCopyError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e| Module for parsing errors from postgresql error messages.\n  Currently only parses integrity violation errors (class 23).\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote: Success of parsing may depend on language settings.\u003c/em\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.PostgreSQL.Simple.Errors",
          "name": "Errors",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-Errors.html",
          "type": "module"
        },
        "index": {
          "description": "Module for parsing errors from postgresql error messages Currently only parses integrity violation errors class Note Success of parsing may depend on language settings",
          "hierarchy": "Database PostgreSQL Simple Errors",
          "module": "Database.PostgreSQL.Simple.Errors",
          "name": "Errors",
          "package": "postgresql-simple",
          "partial": "Errors",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Errors.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Errors",
          "name": "ConstraintViolation",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-Errors.html#ConstraintViolation",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Errors",
          "module": "Database.PostgreSQL.Simple.Errors",
          "name": "ConstraintViolation",
          "package": "postgresql-simple",
          "partial": "Constraint Violation",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Errors.html#t:ConstraintViolation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRelation name (usually table), constraint name\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple.Errors",
          "name": "CheckViolation",
          "package": "postgresql-simple",
          "signature": "CheckViolation ByteString ByteString",
          "source": "src/Database-PostgreSQL-Simple-Errors.html#ConstraintViolation",
          "type": "function"
        },
        "index": {
          "description": "Relation name usually table constraint name",
          "hierarchy": "Database PostgreSQL Simple Errors",
          "module": "Database.PostgreSQL.Simple.Errors",
          "name": "CheckViolation",
          "package": "postgresql-simple",
          "partial": "Check Violation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Errors.html#v:CheckViolation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTable name and name of violated constraint\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple.Errors",
          "name": "ForeignKeyViolation",
          "package": "postgresql-simple",
          "signature": "ForeignKeyViolation ByteString ByteString",
          "source": "src/Database-PostgreSQL-Simple-Errors.html#ConstraintViolation",
          "type": "function"
        },
        "index": {
          "description": "Table name and name of violated constraint",
          "hierarchy": "Database PostgreSQL Simple Errors",
          "module": "Database.PostgreSQL.Simple.Errors",
          "name": "ForeignKeyViolation",
          "package": "postgresql-simple",
          "partial": "Foreign Key Violation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Errors.html#v:ForeignKeyViolation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe field is a column name\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple.Errors",
          "name": "NotNullViolation",
          "package": "postgresql-simple",
          "signature": "NotNullViolation ByteString",
          "source": "src/Database-PostgreSQL-Simple-Errors.html#ConstraintViolation",
          "type": "function"
        },
        "index": {
          "description": "The field is column name",
          "hierarchy": "Database PostgreSQL Simple Errors",
          "module": "Database.PostgreSQL.Simple.Errors",
          "name": "NotNullViolation",
          "package": "postgresql-simple",
          "partial": "Not Null Violation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Errors.html#v:NotNullViolation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eName of violated constraint\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple.Errors",
          "name": "UniqueViolation",
          "package": "postgresql-simple",
          "signature": "UniqueViolation ByteString",
          "source": "src/Database-PostgreSQL-Simple-Errors.html#ConstraintViolation",
          "type": "function"
        },
        "index": {
          "description": "Name of violated constraint",
          "hierarchy": "Database PostgreSQL Simple Errors",
          "module": "Database.PostgreSQL.Simple.Errors",
          "name": "UniqueViolation",
          "package": "postgresql-simple",
          "partial": "Unique Violation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Errors.html#v:UniqueViolation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCatches SqlError, tries to convert to ConstraintViolation, re-throws\n on fail. Provides alternative interface to catchJust\n\u003c/p\u003e\u003cpre\u003e createUser = catchViolation catcher $ execute conn ...\n   where\n     catcher _ (UniqueViolation \"user_login_key\") = ...\n     catcher e _ = throwIO e\n\u003c/pre\u003e",
          "module": "Database.PostgreSQL.Simple.Errors",
          "name": "catchViolation",
          "package": "postgresql-simple",
          "signature": "(SqlError -\u003e ConstraintViolation -\u003e IO a) -\u003e IO a -\u003e IO a",
          "source": "src/Database-PostgreSQL-Simple-Errors.html#catchViolation",
          "type": "function"
        },
        "index": {
          "description": "Catches SqlError tries to convert to ConstraintViolation re-throws on fail Provides alternative interface to catchJust createUser catchViolation catcher execute conn where catcher UniqueViolation user login key catcher throwIO",
          "hierarchy": "Database PostgreSQL Simple Errors",
          "module": "Database.PostgreSQL.Simple.Errors",
          "name": "catchViolation",
          "normalized": "(SqlError-\u003eConstraintViolation-\u003eIO a)-\u003eIO a-\u003eIO a",
          "package": "postgresql-simple",
          "partial": "Violation",
          "signature": "(SqlError-\u003eConstraintViolation-\u003eIO a)-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Errors.html#v:catchViolation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTries to convert \u003ccode\u003e\u003ca\u003eSqlError\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003eConstrainViolation\u003c/code\u003e, checks sqlState and\n succeedes only if able to parse sqlErrorMsg.\n\u003c/p\u003e\u003cpre\u003e createUser = catchJust constraintViolation catcher $ execute conn ...\n   where\n     catcher UniqueViolation \"user_login_key\" = ...\n     catcher _ = ...\n\u003c/pre\u003e",
          "module": "Database.PostgreSQL.Simple.Errors",
          "name": "constraintViolation",
          "package": "postgresql-simple",
          "signature": "SqlError -\u003e Maybe ConstraintViolation",
          "source": "src/Database-PostgreSQL-Simple-Errors.html#constraintViolation",
          "type": "function"
        },
        "index": {
          "description": "Tries to convert SqlError to ConstrainViolation checks sqlState and succeedes only if able to parse sqlErrorMsg createUser catchJust constraintViolation catcher execute conn where catcher UniqueViolation user login key catcher",
          "hierarchy": "Database PostgreSQL Simple Errors",
          "module": "Database.PostgreSQL.Simple.Errors",
          "name": "constraintViolation",
          "normalized": "SqlError-\u003eMaybe ConstraintViolation",
          "package": "postgresql-simple",
          "partial": "Violation",
          "signature": "SqlError-\u003eMaybe ConstraintViolation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Errors.html#v:constraintViolation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike constraintViolation, but also packs original SqlError.\n\u003c/p\u003e\u003cpre\u003e createUser = catchJust constraintViolationE catcher $ execute conn ...\n   where\n     catcher (_, UniqueViolation \"user_login_key\") = ...\n     catcher (e, _) = throwIO e\n\u003c/pre\u003e",
          "module": "Database.PostgreSQL.Simple.Errors",
          "name": "constraintViolationE",
          "package": "postgresql-simple",
          "signature": "SqlError -\u003e Maybe (SqlError, ConstraintViolation)",
          "source": "src/Database-PostgreSQL-Simple-Errors.html#constraintViolationE",
          "type": "function"
        },
        "index": {
          "description": "Like constraintViolation but also packs original SqlError createUser catchJust constraintViolationE catcher execute conn where catcher UniqueViolation user login key catcher throwIO",
          "hierarchy": "Database PostgreSQL Simple Errors",
          "module": "Database.PostgreSQL.Simple.Errors",
          "name": "constraintViolationE",
          "normalized": "SqlError-\u003eMaybe(SqlError,ConstraintViolation)",
          "package": "postgresql-simple",
          "partial": "Violation",
          "signature": "SqlError-\u003eMaybe(SqlError,ConstraintViolation)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Errors.html#v:constraintViolationE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.PostgreSQL.Simple.Errors\",\"Database.PostgreSQL.Simple.Transaction\"]",
          "name": "isFailedTransactionError",
          "package": "postgresql-simple",
          "signature": "SqlError -\u003e Bool",
          "source": "src/Database-PostgreSQL-Simple-Errors.html#isFailedTransactionError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Errors.html#v:isFailedTransactionError\",\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Transaction.html#v:isFailedTransactionError\"]"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Errors",
          "module": "Database.PostgreSQL.Simple.Errors",
          "name": "isFailedTransactionError",
          "normalized": "SqlError-\u003eBool",
          "package": "postgresql-simple",
          "partial": "Failed Transaction Error",
          "signature": "SqlError-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Errors.html#v:isFailedTransactionError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.PostgreSQL.Simple.Errors\",\"Database.PostgreSQL.Simple.Transaction\"]",
          "name": "isNoActiveTransactionError",
          "package": "postgresql-simple",
          "signature": "SqlError -\u003e Bool",
          "source": "src/Database-PostgreSQL-Simple-Errors.html#isNoActiveTransactionError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Errors.html#v:isNoActiveTransactionError\",\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Transaction.html#v:isNoActiveTransactionError\"]"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Errors",
          "module": "Database.PostgreSQL.Simple.Errors",
          "name": "isNoActiveTransactionError",
          "normalized": "SqlError-\u003eBool",
          "package": "postgresql-simple",
          "partial": "No Active Transaction Error",
          "signature": "SqlError-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Errors.html#v:isNoActiveTransactionError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.PostgreSQL.Simple.Errors\",\"Database.PostgreSQL.Simple.Transaction\"]",
          "name": "isSerializationError",
          "package": "postgresql-simple",
          "signature": "SqlError -\u003e Bool",
          "source": "src/Database-PostgreSQL-Simple-Errors.html#isSerializationError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Errors.html#v:isSerializationError\",\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Transaction.html#v:isSerializationError\"]"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Errors",
          "module": "Database.PostgreSQL.Simple.Errors",
          "name": "isSerializationError",
          "normalized": "SqlError-\u003eBool",
          "package": "postgresql-simple",
          "partial": "Serialization Error",
          "signature": "SqlError-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Errors.html#v:isSerializationError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eFromField\u003c/a\u003e\u003c/code\u003e typeclass, for converting a single value in a row\nreturned by a SQL query into a more useful Haskell representation.\nNote that each instance of \u003ccode\u003e\u003ca\u003eFromField\u003c/a\u003e\u003c/code\u003e is documented by a list of\ncompatible postgresql types.\n\u003c/p\u003e\u003cp\u003eA Haskell numeric type is considered to be compatible with all\nPostgreSQL numeric types that are less accurate than it. For instance,\nthe Haskell \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e type is compatible with the PostgreSQL's 32-bit\n\u003ccode\u003eint\u003c/code\u003e type because it can represent a \u003ccode\u003eint\u003c/code\u003e exactly.  On the other hand,\nsince a \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e might lose precision if representing PostgreSQL's 64-bit\n\u003ccode\u003ebigint\u003c/code\u003e, the two are \u003cem\u003enot\u003c/em\u003e considered compatible.\n\u003c/p\u003e\u003cp\u003eBecause \u003ccode\u003e\u003ca\u003eFromField\u003c/a\u003e\u003c/code\u003e is a typeclass,  one may provide conversions to\nadditional Haskell types without modifying postgresql-simple.  This is\nparticularly useful for supporting PostgreSQL types that postgresql-simple\ndoes not support out-of-box.  Here's an example of what such an instance\nmight look like for a UUID type that implements the \u003ccode\u003eRead\u003c/code\u003e class:\n\u003c/p\u003e\u003cpre\u003e\nimport Data.UUID ( UUID )\nimport Database.PostgreSQL.Simple.FromField\n       ( FromField (fromField) , typeOid, returnError, ResultError (..) )\nimport Database.PostgreSQL.Simple.TypeInfo.Static (typoid, uuid)\nimport qualified Data.ByteString.Char8 as B\n\ninstance FromField UUID where\n   fromField f mdata =\n      if typeOid f /= typoid uuid\n        then returnError Incompatible f \"\"\n        else case B.unpack `fmap` mdata of\n               Nothing  -\u003e returnError UnexpectedNull f \"\"\n               Just dat -\u003e\n                  case [ x | (x,t) \u003c- reads dat, (\"\",\"\") \u003c- lex t ] of\n                    [x] -\u003e return x\n                    _   -\u003e returnError ConversionFailed f dat\n\u003c/pre\u003e\u003cp\u003eNote that because PostgreSQL's \u003ccode\u003euuid\u003c/code\u003e type is built into postgres and is\nnot provided by an extension,  the \u003ccode\u003e\u003ca\u003etypeOid\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003euuid\u003c/code\u003e does not change and\nthus we can examine it directly.  One could hard-code the type oid,  or\nobtain it by other means, but in this case we simply pull it out of the\nstatic table provided by postgresql-simple.\n\u003c/p\u003e\u003cp\u003eOn the other hand if the type is provided by an extension,  such as\n\u003ccode\u003ePostGIS\u003c/code\u003e or \u003ccode\u003ehstore\u003c/code\u003e,  then the \u003ccode\u003e\u003ca\u003etypeOid\u003c/a\u003e\u003c/code\u003e is not stable and can vary from\ndatabase to database. In this case it is recommended that FromField\ninstances use \u003ccode\u003e\u003ca\u003etypename\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.PostgreSQL.Simple.FromField",
          "name": "FromField",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-FromField.html",
          "type": "module"
        },
        "index": {
          "description": "The FromField typeclass for converting single value in row returned by SQL query into more useful Haskell representation Note that each instance of FromField is documented by list of compatible postgresql types Haskell numeric type is considered to be compatible with all PostgreSQL numeric types that are less accurate than it For instance the Haskell Double type is compatible with the PostgreSQL bit int type because it can represent int exactly On the other hand since Double might lose precision if representing PostgreSQL bit bigint the two are not considered compatible Because FromField is typeclass one may provide conversions to additional Haskell types without modifying postgresql-simple This is particularly useful for supporting PostgreSQL types that postgresql-simple does not support out-of-box Here an example of what such an instance might look like for UUID type that implements the Read class import Data.UUID UUID import Database.PostgreSQL.Simple.FromField FromField fromField typeOid returnError ResultError import Database.PostgreSQL.Simple.TypeInfo.Static typoid uuid import qualified Data.ByteString.Char8 as instance FromField UUID where fromField mdata if typeOid typoid uuid then returnError Incompatible else case B.unpack fmap mdata of Nothing returnError UnexpectedNull Just dat case reads dat lex of return returnError ConversionFailed dat Note that because PostgreSQL uuid type is built into postgres and is not provided by an extension the typeOid of uuid does not change and thus we can examine it directly One could hard-code the type oid or obtain it by other means but in this case we simply pull it out of the static table provided by postgresql-simple On the other hand if the type is provided by an extension such as PostGIS or hstore then the typeOid is not stable and can vary from database to database In this case it is recommended that FromField instances use typename instead",
          "hierarchy": "Database PostgreSQL Simple FromField",
          "module": "Database.PostgreSQL.Simple.FromField",
          "name": "FromField",
          "package": "postgresql-simple",
          "partial": "From Field",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.FromField",
          "name": "Attribute",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-TypeInfo-Types.html#Attribute",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple FromField",
          "module": "Database.PostgreSQL.Simple.FromField",
          "name": "Attribute",
          "package": "postgresql-simple",
          "partial": "Attribute",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#t:Attribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.FromField",
          "name": "Conversion",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-Internal.html#Conversion",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple FromField",
          "module": "Database.PostgreSQL.Simple.FromField",
          "name": "Conversion",
          "package": "postgresql-simple",
          "partial": "Conversion",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#t:Conversion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Field represents metadata about a particular field\n\u003c/p\u003e\u003cp\u003eYou don't particularly want to retain these structures for a long\n period of time,  as they will retain the entire query result,  not\n just the field metadata\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple.FromField",
          "name": "Field",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-Internal.html#Field",
          "type": "data"
        },
        "index": {
          "description": "Field represents metadata about particular field You don particularly want to retain these structures for long period of time as they will retain the entire query result not just the field metadata",
          "hierarchy": "Database PostgreSQL Simple FromField",
          "module": "Database.PostgreSQL.Simple.FromField",
          "name": "Field",
          "package": "postgresql-simple",
          "partial": "Field",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#t:Field"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.FromField",
          "name": "FieldParser",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-FromField.html#FieldParser",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple FromField",
          "module": "Database.PostgreSQL.Simple.FromField",
          "name": "FieldParser",
          "package": "postgresql-simple",
          "partial": "Field Parser",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#t:FieldParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.FromField",
          "name": "Format",
          "package": "postgresql-simple",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple FromField",
          "module": "Database.PostgreSQL.Simple.FromField",
          "name": "Format",
          "package": "postgresql-simple",
          "partial": "Format",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#t:Format"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type that may be converted from a SQL type.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple.FromField",
          "name": "FromField",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-FromField.html#FromField",
          "type": "class"
        },
        "index": {
          "description": "type that may be converted from SQL type",
          "hierarchy": "Database PostgreSQL Simple FromField",
          "module": "Database.PostgreSQL.Simple.FromField",
          "name": "FromField",
          "package": "postgresql-simple",
          "partial": "From Field",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#t:FromField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.FromField",
          "name": "Oid",
          "package": "postgresql-simple",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple FromField",
          "module": "Database.PostgreSQL.Simple.FromField",
          "name": "Oid",
          "package": "postgresql-simple",
          "partial": "Oid",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#t:Oid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eException thrown if conversion from a SQL value to a Haskell\n value fails.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple.FromField",
          "name": "ResultError",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-FromField.html#ResultError",
          "type": "data"
        },
        "index": {
          "description": "Exception thrown if conversion from SQL value to Haskell value fails",
          "hierarchy": "Database PostgreSQL Simple FromField",
          "module": "Database.PostgreSQL.Simple.FromField",
          "name": "ResultError",
          "package": "postgresql-simple",
          "partial": "Result Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#t:ResultError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA structure representing some of the metadata regarding a PostgreSQL\n   type,  mostly taken from the \u003ccode\u003epg_type\u003c/code\u003e table.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple.FromField",
          "name": "TypeInfo",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-TypeInfo-Types.html#TypeInfo",
          "type": "data"
        },
        "index": {
          "description": "structure representing some of the metadata regarding PostgreSQL type mostly taken from the pg type table",
          "hierarchy": "Database PostgreSQL Simple FromField",
          "module": "Database.PostgreSQL.Simple.FromField",
          "name": "TypeInfo",
          "package": "postgresql-simple",
          "partial": "Type Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#t:TypeInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.PostgreSQL.Simple.FromField\",\"Database.PostgreSQL.Simple.TypeInfo.Static\",\"Database.PostgreSQL.Simple.TypeInfo\"]",
          "name": "Array",
          "package": "postgresql-simple",
          "signature": "Array",
          "source": "src/Database-PostgreSQL-Simple-TypeInfo-Types.html#TypeInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:Array\",\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:Array\",\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo.html#v:Array\"]"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple FromField",
          "module": "Database.PostgreSQL.Simple.FromField",
          "name": "Array",
          "package": "postgresql-simple",
          "partial": "Array",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:Array"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.PostgreSQL.Simple.FromField\",\"Database.PostgreSQL.Simple.TypeInfo\"]",
          "name": "Attribute",
          "package": "postgresql-simple",
          "signature": "Attribute",
          "source": "src/Database-PostgreSQL-Simple-TypeInfo-Types.html#Attribute",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:Attribute\",\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo.html#v:Attribute\"]"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple FromField",
          "module": "Database.PostgreSQL.Simple.FromField",
          "name": "Attribute",
          "package": "postgresql-simple",
          "partial": "Attribute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:Attribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.PostgreSQL.Simple.FromField\",\"Database.PostgreSQL.Simple.TypeInfo.Static\",\"Database.PostgreSQL.Simple.TypeInfo\"]",
          "name": "Basic",
          "package": "postgresql-simple",
          "signature": "Basic",
          "source": "src/Database-PostgreSQL-Simple-TypeInfo-Types.html#TypeInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:Basic\",\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:Basic\",\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo.html#v:Basic\"]"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple FromField",
          "module": "Database.PostgreSQL.Simple.FromField",
          "name": "Basic",
          "package": "postgresql-simple",
          "partial": "Basic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:Basic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.FromField",
          "name": "Binary",
          "package": "postgresql-simple",
          "signature": "Binary",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple FromField",
          "module": "Database.PostgreSQL.Simple.FromField",
          "name": "Binary",
          "package": "postgresql-simple",
          "partial": "Binary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:Binary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.PostgreSQL.Simple.FromField\",\"Database.PostgreSQL.Simple.TypeInfo.Static\",\"Database.PostgreSQL.Simple.TypeInfo\"]",
          "name": "Composite",
          "package": "postgresql-simple",
          "signature": "Composite",
          "source": "src/Database-PostgreSQL-Simple-TypeInfo-Types.html#TypeInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:Composite\",\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:Composite\",\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo.html#v:Composite\"]"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple FromField",
          "module": "Database.PostgreSQL.Simple.FromField",
          "name": "Composite",
          "package": "postgresql-simple",
          "partial": "Composite",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:Composite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe SQL value could not be parsed, or could not\n be represented as a valid Haskell value, or an\n unexpected low-level error occurred (e.g. mismatch\n between metadata and actual data in a row).\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple.FromField",
          "name": "ConversionFailed",
          "package": "postgresql-simple",
          "signature": "ConversionFailed",
          "source": "src/Database-PostgreSQL-Simple-FromField.html#ResultError",
          "type": "function"
        },
        "index": {
          "description": "The SQL value could not be parsed or could not be represented as valid Haskell value or an unexpected low-level error occurred e.g mismatch between metadata and actual data in row",
          "hierarchy": "Database PostgreSQL Simple FromField",
          "module": "Database.PostgreSQL.Simple.FromField",
          "name": "ConversionFailed",
          "package": "postgresql-simple",
          "partial": "Conversion Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:ConversionFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe SQL and Haskell types are not compatible.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple.FromField",
          "name": "Incompatible",
          "package": "postgresql-simple",
          "signature": "Incompatible",
          "source": "src/Database-PostgreSQL-Simple-FromField.html#ResultError",
          "type": "function"
        },
        "index": {
          "description": "The SQL and Haskell types are not compatible",
          "hierarchy": "Database PostgreSQL Simple FromField",
          "module": "Database.PostgreSQL.Simple.FromField",
          "name": "Incompatible",
          "package": "postgresql-simple",
          "partial": "Incompatible",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:Incompatible"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.PostgreSQL.Simple.FromField\",\"Database.PostgreSQL.Simple.LargeObjects\",\"Database.PostgreSQL.Simple.Types\"]",
          "name": "Oid",
          "package": "postgresql-simple",
          "signature": "Oid CUInt",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:Oid\",\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-LargeObjects.html#v:Oid\",\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Types.html#v:Oid\"]"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple FromField",
          "module": "Database.PostgreSQL.Simple.FromField",
          "name": "Oid",
          "package": "postgresql-simple",
          "partial": "Oid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:Oid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.PostgreSQL.Simple.FromField\",\"Database.PostgreSQL.Simple.TypeInfo.Static\",\"Database.PostgreSQL.Simple.TypeInfo\"]",
          "name": "Range",
          "package": "postgresql-simple",
          "signature": "Range",
          "source": "src/Database-PostgreSQL-Simple-TypeInfo-Types.html#TypeInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:Range\",\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:Range\",\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo.html#v:Range\"]"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple FromField",
          "module": "Database.PostgreSQL.Simple.FromField",
          "name": "Range",
          "package": "postgresql-simple",
          "partial": "Range",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:Range"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.FromField",
          "name": "Text",
          "package": "postgresql-simple",
          "signature": "Text",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple FromField",
          "module": "Database.PostgreSQL.Simple.FromField",
          "name": "Text",
          "package": "postgresql-simple",
          "partial": "Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:Text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA SQL \u003ccode\u003eNULL\u003c/code\u003e was encountered when the Haskell\n type did not permit it.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple.FromField",
          "name": "UnexpectedNull",
          "package": "postgresql-simple",
          "signature": "UnexpectedNull",
          "source": "src/Database-PostgreSQL-Simple-FromField.html#ResultError",
          "type": "function"
        },
        "index": {
          "description": "SQL NULL was encountered when the Haskell type did not permit it",
          "hierarchy": "Database PostgreSQL Simple FromField",
          "module": "Database.PostgreSQL.Simple.FromField",
          "name": "UnexpectedNull",
          "package": "postgresql-simple",
          "partial": "Unexpected Null",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:UnexpectedNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.PostgreSQL.Simple.FromField\",\"Database.PostgreSQL.Simple.TypeInfo\"]",
          "name": "attname",
          "package": "postgresql-simple",
          "signature": "ByteString",
          "source": "src/Database-PostgreSQL-Simple-TypeInfo-Types.html#Attribute",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:attname\",\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo.html#v:attname\"]"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple FromField",
          "module": "Database.PostgreSQL.Simple.FromField",
          "name": "attname",
          "package": "postgresql-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:attname"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.PostgreSQL.Simple.FromField\",\"Database.PostgreSQL.Simple.TypeInfo.Static\",\"Database.PostgreSQL.Simple.TypeInfo\"]",
          "name": "attributes",
          "package": "postgresql-simple",
          "signature": "(Vector Attribute)",
          "source": "src/Database-PostgreSQL-Simple-TypeInfo-Types.html#TypeInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:attributes\",\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:attributes\",\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo.html#v:attributes\"]"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple FromField",
          "module": "Database.PostgreSQL.Simple.FromField",
          "name": "attributes",
          "package": "postgresql-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:attributes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.PostgreSQL.Simple.FromField\",\"Database.PostgreSQL.Simple.TypeInfo\"]",
          "name": "atttype",
          "package": "postgresql-simple",
          "signature": "TypeInfo",
          "source": "src/Database-PostgreSQL-Simple-TypeInfo-Types.html#Attribute",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:atttype\",\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo.html#v:atttype\"]"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple FromField",
          "module": "Database.PostgreSQL.Simple.FromField",
          "name": "atttype",
          "package": "postgresql-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:atttype"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.PostgreSQL.Simple.FromField\",\"Database.PostgreSQL.Simple.Internal\"]",
          "name": "conversionError",
          "package": "postgresql-simple",
          "signature": "err -\u003e Conversion a",
          "source": "src/Database-PostgreSQL-Simple-Internal.html#conversionError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:conversionError\",\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:conversionError\"]"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple FromField",
          "module": "Database.PostgreSQL.Simple.FromField",
          "name": "conversionError",
          "normalized": "a-\u003eConversion b",
          "package": "postgresql-simple",
          "partial": "Error",
          "signature": "err-\u003eConversion a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:conversionError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.PostgreSQL.Simple.FromField\",\"Database.PostgreSQL.Simple.Internal\"]",
          "name": "conversionMap",
          "package": "postgresql-simple",
          "signature": "(Ok a -\u003e Ok b) -\u003e Conversion a -\u003e Conversion b",
          "source": "src/Database-PostgreSQL-Simple-Internal.html#conversionMap",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:conversionMap\",\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:conversionMap\"]"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple FromField",
          "module": "Database.PostgreSQL.Simple.FromField",
          "name": "conversionMap",
          "normalized": "(Ok a-\u003eOk b)-\u003eConversion a-\u003eConversion b",
          "package": "postgresql-simple",
          "partial": "Map",
          "signature": "(Ok a-\u003eOk b)-\u003eConversion a-\u003eConversion b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:conversionMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.FromField",
          "name": "errHaskellType",
          "package": "postgresql-simple",
          "signature": "String",
          "source": "src/Database-PostgreSQL-Simple-FromField.html#ResultError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple FromField",
          "module": "Database.PostgreSQL.Simple.FromField",
          "name": "errHaskellType",
          "package": "postgresql-simple",
          "partial": "Haskell Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:errHaskellType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.FromField",
          "name": "errMessage",
          "package": "postgresql-simple",
          "signature": "String",
          "source": "src/Database-PostgreSQL-Simple-FromField.html#ResultError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple FromField",
          "module": "Database.PostgreSQL.Simple.FromField",
          "name": "errMessage",
          "package": "postgresql-simple",
          "partial": "Message",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:errMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.FromField",
          "name": "errSQLField",
          "package": "postgresql-simple",
          "signature": "String",
          "source": "src/Database-PostgreSQL-Simple-FromField.html#ResultError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple FromField",
          "module": "Database.PostgreSQL.Simple.FromField",
          "name": "errSQLField",
          "package": "postgresql-simple",
          "partial": "SQLField",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:errSQLField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.FromField",
          "name": "errSQLTableOid",
          "package": "postgresql-simple",
          "signature": "Maybe Oid",
          "source": "src/Database-PostgreSQL-Simple-FromField.html#ResultError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple FromField",
          "module": "Database.PostgreSQL.Simple.FromField",
          "name": "errSQLTableOid",
          "package": "postgresql-simple",
          "partial": "SQLTable Oid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:errSQLTableOid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.FromField",
          "name": "errSQLType",
          "package": "postgresql-simple",
          "signature": "String",
          "source": "src/Database-PostgreSQL-Simple-FromField.html#ResultError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple FromField",
          "module": "Database.PostgreSQL.Simple.FromField",
          "name": "errSQLType",
          "package": "postgresql-simple",
          "partial": "SQLType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:errSQLType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis returns whether the data was returned in a binary or textual format.\n   Analogous to libpq's \u003ccode\u003ePQfformat\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple.FromField",
          "name": "format",
          "package": "postgresql-simple",
          "signature": "Field -\u003e Format",
          "source": "src/Database-PostgreSQL-Simple-FromField.html#format",
          "type": "function"
        },
        "index": {
          "description": "This returns whether the data was returned in binary or textual format Analogous to libpq PQfformat",
          "hierarchy": "Database PostgreSQL Simple FromField",
          "module": "Database.PostgreSQL.Simple.FromField",
          "name": "format",
          "normalized": "Field-\u003eFormat",
          "package": "postgresql-simple",
          "signature": "Field-\u003eFormat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:format"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a SQL value to a Haskell value.\n\u003c/p\u003e\u003cp\u003eReturns a list of exceptions if the conversion fails.  In the case of\n library instances,  this will usually be a single \u003ccode\u003e\u003ca\u003eResultError\u003c/a\u003e\u003c/code\u003e,  but\n may be a \u003ccode\u003eUnicodeException\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that retaining any reference to the \u003ccode\u003e\u003ca\u003eField\u003c/a\u003e\u003c/code\u003e argument causes\n the entire \u003ccode\u003eLibPQ.\u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e to be retained.  Thus, implementations\n of \u003ccode\u003e\u003ca\u003efromField\u003c/a\u003e\u003c/code\u003e should return results that do not refer to this value\n after the result have been evaluated to WHNF.\n\u003c/p\u003e\u003cp\u003eNote that as of \u003ccode\u003epostgresql-simple-0.4.0.0\u003c/code\u003e,  the \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e value\n has already been copied out of the \u003ccode\u003eLibPQ.\u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e before it has\n been passed to \u003ccode\u003e\u003ca\u003efromField\u003c/a\u003e\u003c/code\u003e.  This is because for short strings, it's\n cheaper to copy the string than to set up a finalizer.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple.FromField",
          "name": "fromField",
          "package": "postgresql-simple",
          "signature": "FieldParser a",
          "source": "src/Database-PostgreSQL-Simple-FromField.html#fromField",
          "type": "method"
        },
        "index": {
          "description": "Convert SQL value to Haskell value Returns list of exceptions if the conversion fails In the case of library instances this will usually be single ResultError but may be UnicodeException Note that retaining any reference to the Field argument causes the entire LibPQ Result to be retained Thus implementations of fromField should return results that do not refer to this value after the result have been evaluated to WHNF Note that as of postgresql-simple-0.4.0.0 the ByteString value has already been copied out of the LibPQ Result before it has been passed to fromField This is because for short strings it cheaper to copy the string than to set up finalizer",
          "hierarchy": "Database PostgreSQL Simple FromField",
          "module": "Database.PostgreSQL.Simple.FromField",
          "name": "fromField",
          "package": "postgresql-simple",
          "partial": "Field",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:fromField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a field to a JSON \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e and convert that into a\n Haskell value using \u003ccode\u003e\u003ca\u003efromJSON\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis can be used as the default implementation for the \u003ccode\u003e\u003ca\u003efromField\u003c/a\u003e\u003c/code\u003e\n method for Haskell types that have a JSON representation in\n PostgreSQL.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eTypeable\u003c/a\u003e\u003c/code\u003e constraint is required to show more informative\n error messages when parsing fails.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple.FromField",
          "name": "fromJSONField",
          "package": "postgresql-simple",
          "signature": "FieldParser a",
          "source": "src/Database-PostgreSQL-Simple-FromField.html#fromJSONField",
          "type": "function"
        },
        "index": {
          "description": "Parse field to JSON Value and convert that into Haskell value using fromJSON This can be used as the default implementation for the fromField method for Haskell types that have JSON representation in PostgreSQL The Typeable constraint is required to show more informative error messages when parsing fails",
          "hierarchy": "Database PostgreSQL Simple FromField",
          "module": "Database.PostgreSQL.Simple.FromField",
          "name": "fromJSONField",
          "package": "postgresql-simple",
          "partial": "JSONField",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:fromJSONField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the name of the column.  This is often determined by a table\n   definition,  but it can be set using an \u003ccode\u003eas\u003c/code\u003e clause.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple.FromField",
          "name": "name",
          "package": "postgresql-simple",
          "signature": "Field -\u003e Maybe ByteString",
          "source": "src/Database-PostgreSQL-Simple-FromField.html#name",
          "type": "function"
        },
        "index": {
          "description": "Returns the name of the column This is often determined by table definition but it can be set using an as clause",
          "hierarchy": "Database PostgreSQL Simple FromField",
          "module": "Database.PostgreSQL.Simple.FromField",
          "name": "name",
          "normalized": "Field-\u003eMaybe ByteString",
          "package": "postgresql-simple",
          "signature": "Field-\u003eMaybe ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven one of the constructors from \u003ccode\u003e\u003ca\u003eResultError\u003c/a\u003e\u003c/code\u003e,  the field,\n   and an \u003ccode\u003e\u003ca\u003eerrMessage\u003c/a\u003e\u003c/code\u003e,  this fills in the other fields in the\n   exception value and returns it in a 'Left . SomeException'\n   constructor.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple.FromField",
          "name": "returnError",
          "package": "postgresql-simple",
          "signature": "(String -\u003e Maybe Oid -\u003e String -\u003e String -\u003e String -\u003e err) -\u003e Field -\u003e String -\u003e Conversion a",
          "source": "src/Database-PostgreSQL-Simple-FromField.html#returnError",
          "type": "function"
        },
        "index": {
          "description": "Given one of the constructors from ResultError the field and an errMessage this fills in the other fields in the exception value and returns it in Left SomeException constructor",
          "hierarchy": "Database PostgreSQL Simple FromField",
          "module": "Database.PostgreSQL.Simple.FromField",
          "name": "returnError",
          "normalized": "(String-\u003eMaybe Oid-\u003eString-\u003eString-\u003eString-\u003ea)-\u003eField-\u003eString-\u003eConversion b",
          "package": "postgresql-simple",
          "partial": "Error",
          "signature": "(String-\u003eMaybe Oid-\u003eString-\u003eString-\u003eString-\u003eerr)-\u003eField-\u003eString-\u003eConversion a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:returnError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.PostgreSQL.Simple.FromField\",\"Database.PostgreSQL.Simple.TypeInfo.Static\",\"Database.PostgreSQL.Simple.TypeInfo\"]",
          "name": "rngsubtype",
          "package": "postgresql-simple",
          "signature": "TypeInfo",
          "source": "src/Database-PostgreSQL-Simple-TypeInfo-Types.html#TypeInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:rngsubtype\",\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:rngsubtype\",\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo.html#v:rngsubtype\"]"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple FromField",
          "module": "Database.PostgreSQL.Simple.FromField",
          "name": "rngsubtype",
          "package": "postgresql-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:rngsubtype"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.FromField",
          "name": "runConversion",
          "package": "postgresql-simple",
          "signature": "Conversion a -\u003e Connection -\u003e IO (Ok a)",
          "source": "src/Database-PostgreSQL-Simple-Internal.html#runConversion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple FromField",
          "module": "Database.PostgreSQL.Simple.FromField",
          "name": "runConversion",
          "normalized": "Conversion a-\u003eConnection-\u003eIO(Ok a)",
          "package": "postgresql-simple",
          "partial": "Conversion",
          "signature": "Conversion a-\u003eConnection-\u003eIO(Ok a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:runConversion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf the column has a table associated with it,  this returns the number\n   off the associated table column.   Numbering starts from 0.  Analogous\n   to libpq's \u003ccode\u003ePQftablecol\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple.FromField",
          "name": "tableColumn",
          "package": "postgresql-simple",
          "signature": "Field -\u003e Int",
          "source": "src/Database-PostgreSQL-Simple-FromField.html#tableColumn",
          "type": "function"
        },
        "index": {
          "description": "If the column has table associated with it this returns the number off the associated table column Numbering starts from Analogous to libpq PQftablecol",
          "hierarchy": "Database PostgreSQL Simple FromField",
          "module": "Database.PostgreSQL.Simple.FromField",
          "name": "tableColumn",
          "normalized": "Field-\u003eInt",
          "package": "postgresql-simple",
          "partial": "Column",
          "signature": "Field-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:tableColumn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the name of the object id of the \u003ccode\u003etable\u003c/code\u003e associated with the\n   column,  if any.  Returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e when there is no such table;\n   for example a computed column does not have a table associated with it.\n   Analogous to libpq's \u003ccode\u003ePQftable\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple.FromField",
          "name": "tableOid",
          "package": "postgresql-simple",
          "signature": "Field -\u003e Maybe Oid",
          "source": "src/Database-PostgreSQL-Simple-FromField.html#tableOid",
          "type": "function"
        },
        "index": {
          "description": "Returns the name of the object id of the table associated with the column if any Returns Nothing when there is no such table for example computed column does not have table associated with it Analogous to libpq PQftable",
          "hierarchy": "Database PostgreSQL Simple FromField",
          "module": "Database.PostgreSQL.Simple.FromField",
          "name": "tableOid",
          "normalized": "Field-\u003eMaybe Oid",
          "package": "postgresql-simple",
          "partial": "Oid",
          "signature": "Field-\u003eMaybe Oid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:tableOid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.PostgreSQL.Simple.FromField\",\"Database.PostgreSQL.Simple.TypeInfo.Static\",\"Database.PostgreSQL.Simple.TypeInfo\"]",
          "name": "typcategory",
          "package": "postgresql-simple",
          "signature": "Char",
          "source": "src/Database-PostgreSQL-Simple-TypeInfo-Types.html#TypeInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:typcategory\",\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:typcategory\",\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo.html#v:typcategory\"]"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple FromField",
          "module": "Database.PostgreSQL.Simple.FromField",
          "name": "typcategory",
          "package": "postgresql-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:typcategory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.PostgreSQL.Simple.FromField\",\"Database.PostgreSQL.Simple.TypeInfo.Static\",\"Database.PostgreSQL.Simple.TypeInfo\"]",
          "name": "typdelim",
          "package": "postgresql-simple",
          "signature": "Char",
          "source": "src/Database-PostgreSQL-Simple-TypeInfo-Types.html#TypeInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:typdelim\",\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:typdelim\",\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo.html#v:typdelim\"]"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple FromField",
          "module": "Database.PostgreSQL.Simple.FromField",
          "name": "typdelim",
          "package": "postgresql-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:typdelim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.FromField",
          "name": "typeInfo",
          "package": "postgresql-simple",
          "signature": "Field -\u003e Conversion TypeInfo",
          "source": "src/Database-PostgreSQL-Simple-FromField.html#typeInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple FromField",
          "module": "Database.PostgreSQL.Simple.FromField",
          "name": "typeInfo",
          "normalized": "Field-\u003eConversion TypeInfo",
          "package": "postgresql-simple",
          "partial": "Info",
          "signature": "Field-\u003eConversion TypeInfo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:typeInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.FromField",
          "name": "typeInfoByOid",
          "package": "postgresql-simple",
          "signature": "Oid -\u003e Conversion TypeInfo",
          "source": "src/Database-PostgreSQL-Simple-FromField.html#typeInfoByOid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple FromField",
          "module": "Database.PostgreSQL.Simple.FromField",
          "name": "typeInfoByOid",
          "normalized": "Oid-\u003eConversion TypeInfo",
          "package": "postgresql-simple",
          "partial": "Info By Oid",
          "signature": "Oid-\u003eConversion TypeInfo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:typeInfoByOid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis returns the type oid associated with the column.  Analogous\n   to libpq's \u003ccode\u003ePQftype\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple.FromField",
          "name": "typeOid",
          "package": "postgresql-simple",
          "signature": "Field -\u003e Oid",
          "source": "src/Database-PostgreSQL-Simple-Internal.html#typeOid",
          "type": "function"
        },
        "index": {
          "description": "This returns the type oid associated with the column Analogous to libpq PQftype",
          "hierarchy": "Database PostgreSQL Simple FromField",
          "module": "Database.PostgreSQL.Simple.FromField",
          "name": "typeOid",
          "normalized": "Field-\u003eOid",
          "package": "postgresql-simple",
          "partial": "Oid",
          "signature": "Field-\u003eOid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:typeOid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.PostgreSQL.Simple.FromField\",\"Database.PostgreSQL.Simple.TypeInfo.Static\",\"Database.PostgreSQL.Simple.TypeInfo\"]",
          "name": "typelem",
          "package": "postgresql-simple",
          "signature": "TypeInfo",
          "source": "src/Database-PostgreSQL-Simple-TypeInfo-Types.html#TypeInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:typelem\",\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:typelem\",\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo.html#v:typelem\"]"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple FromField",
          "module": "Database.PostgreSQL.Simple.FromField",
          "name": "typelem",
          "package": "postgresql-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:typelem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the data type name.  This is the preferred way of identifying\n   types that do not have a stable type oid, such as types provided by\n   extensions to PostgreSQL.\n\u003c/p\u003e\u003cp\u003eMore concretely,  it returns the \u003ccode\u003etypname\u003c/code\u003e column associated with the\n   type oid in the \u003ccode\u003epg_type\u003c/code\u003e table.  First, postgresql-simple will check\n   the built-in, static table.   If the type oid is not there,\n   postgresql-simple will check a per-connection cache,  and then\n   finally query the database's meta-schema.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple.FromField",
          "name": "typename",
          "package": "postgresql-simple",
          "signature": "Field -\u003e Conversion ByteString",
          "source": "src/Database-PostgreSQL-Simple-FromField.html#typename",
          "type": "function"
        },
        "index": {
          "description": "Returns the data type name This is the preferred way of identifying types that do not have stable type oid such as types provided by extensions to PostgreSQL More concretely it returns the typname column associated with the type oid in the pg type table First postgresql-simple will check the built-in static table If the type oid is not there postgresql-simple will check per-connection cache and then finally query the database meta-schema",
          "hierarchy": "Database PostgreSQL Simple FromField",
          "module": "Database.PostgreSQL.Simple.FromField",
          "name": "typename",
          "normalized": "Field-\u003eConversion ByteString",
          "package": "postgresql-simple",
          "signature": "Field-\u003eConversion ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:typename"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.PostgreSQL.Simple.FromField\",\"Database.PostgreSQL.Simple.TypeInfo.Static\",\"Database.PostgreSQL.Simple.TypeInfo\"]",
          "name": "typname",
          "package": "postgresql-simple",
          "signature": "ByteString",
          "source": "src/Database-PostgreSQL-Simple-TypeInfo-Types.html#TypeInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:typname\",\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:typname\",\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo.html#v:typname\"]"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple FromField",
          "module": "Database.PostgreSQL.Simple.FromField",
          "name": "typname",
          "package": "postgresql-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:typname"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.PostgreSQL.Simple.FromField\",\"Database.PostgreSQL.Simple.TypeInfo.Static\",\"Database.PostgreSQL.Simple.TypeInfo\"]",
          "name": "typoid",
          "package": "postgresql-simple",
          "signature": "Oid",
          "source": "src/Database-PostgreSQL-Simple-TypeInfo-Types.html#TypeInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:typoid\",\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:typoid\",\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo.html#v:typoid\"]"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple FromField",
          "module": "Database.PostgreSQL.Simple.FromField",
          "name": "typoid",
          "package": "postgresql-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:typoid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.PostgreSQL.Simple.FromField\",\"Database.PostgreSQL.Simple.TypeInfo.Static\",\"Database.PostgreSQL.Simple.TypeInfo\"]",
          "name": "typrelid",
          "package": "postgresql-simple",
          "signature": "Oid",
          "source": "src/Database-PostgreSQL-Simple-TypeInfo-Types.html#TypeInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:typrelid\",\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:typrelid\",\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo.html#v:typrelid\"]"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple FromField",
          "module": "Database.PostgreSQL.Simple.FromField",
          "name": "typrelid",
          "package": "postgresql-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:typrelid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eFromRow\u003c/a\u003e\u003c/code\u003e typeclass, for converting a row of results\n returned by a SQL query into a more useful Haskell representation.\n\u003c/p\u003e\u003cp\u003ePredefined instances are provided for tuples containing up to ten\n elements.  The instances for \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e types return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if all\n the columns that would have been otherwise consumed are null,  otherwise\n it attempts a regular conversion.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.PostgreSQL.Simple.FromRow",
          "name": "FromRow",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-FromRow.html",
          "type": "module"
        },
        "index": {
          "description": "The FromRow typeclass for converting row of results returned by SQL query into more useful Haskell representation Predefined instances are provided for tuples containing up to ten elements The instances for Maybe types return Nothing if all the columns that would have been otherwise consumed are null otherwise it attempts regular conversion",
          "hierarchy": "Database PostgreSQL Simple FromRow",
          "module": "Database.PostgreSQL.Simple.FromRow",
          "name": "FromRow",
          "package": "postgresql-simple",
          "partial": "From Row",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromRow.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA collection type that can be converted from a sequence of fields.\n Instances are provided for tuples up to 10 elements and lists of any length.\n\u003c/p\u003e\u003cp\u003eNote that instances can be defined outside of postgresql-simple,  which is\n often useful.   For example, here's an instance for a user-defined pair:\n\u003c/p\u003e\u003cpre\u003edata User = User { name :: String, fileQuota :: Int }\n\ninstance \u003ccode\u003e\u003ca\u003eFromRow\u003c/a\u003e\u003c/code\u003e User where\n     fromRow = User \u003c$\u003e \u003ccode\u003e\u003ca\u003efield\u003c/a\u003e\u003c/code\u003e \u003c*\u003e \u003ccode\u003e\u003ca\u003efield\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e\u003cp\u003eThe number of calls to \u003ccode\u003e\u003ca\u003efield\u003c/a\u003e\u003c/code\u003e must match the number of fields returned\n in a single row of the query result.  Otherwise,  a \u003ccode\u003e\u003ca\u003eConversionFailed\u003c/a\u003e\u003c/code\u003e\n exception will be thrown.\n\u003c/p\u003e\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003efield\u003c/a\u003e\u003c/code\u003e evaluates it's result to WHNF, so the caveats listed in\n mysql-simple and very early versions of postgresql-simple no longer apply.\n Instead, look at the caveats associated with user-defined implementations\n of \u003ccode\u003e\u003ca\u003efromField\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple.FromRow",
          "name": "FromRow",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-FromRow.html#FromRow",
          "type": "class"
        },
        "index": {
          "description": "collection type that can be converted from sequence of fields Instances are provided for tuples up to elements and lists of any length Note that instances can be defined outside of postgresql-simple which is often useful For example here an instance for user-defined pair data User User name String fileQuota Int instance FromRow User where fromRow User field field The number of calls to field must match the number of fields returned in single row of the query result Otherwise ConversionFailed exception will be thrown Note that field evaluates it result to WHNF so the caveats listed in mysql-simple and very early versions of postgresql-simple no longer apply Instead look at the caveats associated with user-defined implementations of fromField",
          "hierarchy": "Database PostgreSQL Simple FromRow",
          "module": "Database.PostgreSQL.Simple.FromRow",
          "name": "FromRow",
          "package": "postgresql-simple",
          "partial": "From Row",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromRow.html#t:FromRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.FromRow",
          "name": "RowParser",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-Internal.html#RowParser",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple FromRow",
          "module": "Database.PostgreSQL.Simple.FromRow",
          "name": "RowParser",
          "package": "postgresql-simple",
          "partial": "Row Parser",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromRow.html#t:RowParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.FromRow",
          "name": "field",
          "package": "postgresql-simple",
          "signature": "RowParser a",
          "source": "src/Database-PostgreSQL-Simple-FromRow.html#field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple FromRow",
          "module": "Database.PostgreSQL.Simple.FromRow",
          "name": "field",
          "package": "postgresql-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromRow.html#v:field"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.FromRow",
          "name": "fieldWith",
          "package": "postgresql-simple",
          "signature": "FieldParser a -\u003e RowParser a",
          "source": "src/Database-PostgreSQL-Simple-FromRow.html#fieldWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple FromRow",
          "module": "Database.PostgreSQL.Simple.FromRow",
          "name": "fieldWith",
          "normalized": "FieldParser a-\u003eRowParser a",
          "package": "postgresql-simple",
          "partial": "With",
          "signature": "FieldParser a-\u003eRowParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromRow.html#v:fieldWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.FromRow",
          "name": "fromRow",
          "package": "postgresql-simple",
          "signature": "RowParser a",
          "source": "src/Database-PostgreSQL-Simple-FromRow.html#fromRow",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple FromRow",
          "module": "Database.PostgreSQL.Simple.FromRow",
          "name": "fromRow",
          "package": "postgresql-simple",
          "partial": "Row",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromRow.html#v:fromRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.FromRow",
          "name": "numFieldsRemaining",
          "package": "postgresql-simple",
          "signature": "RowParser Int",
          "source": "src/Database-PostgreSQL-Simple-FromRow.html#numFieldsRemaining",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple FromRow",
          "module": "Database.PostgreSQL.Simple.FromRow",
          "name": "numFieldsRemaining",
          "package": "postgresql-simple",
          "partial": "Fields Remaining",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromRow.html#v:numFieldsRemaining"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParsers and printers for hstore,  a extended type bundled with\n PostgreSQL providing finite maps from text strings to text strings.\n See \u003ca\u003ehttp://www.postgresql.org/docs/9.2/static/hstore.html\u003c/a\u003e for more\n information.\n\u003c/p\u003e\u003cp\u003eNote that in order to use this type,  a database superuser must\n install it by running a sql script in the share directory.  This\n can be done on PostgreSQL 9.1 and later with the command\n \u003ccode\u003eCREATE EXTENSION hstore\u003c/code\u003e.  See\n \u003ca\u003ehttp://www.postgresql.org/docs/9.2/static/contrib.html\u003c/a\u003e for more\n information.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.PostgreSQL.Simple.HStore",
          "name": "HStore",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-HStore.html",
          "type": "module"
        },
        "index": {
          "description": "Parsers and printers for hstore extended type bundled with PostgreSQL providing finite maps from text strings to text strings See http www.postgresql.org docs static hstore.html for more information Note that in order to use this type database superuser must install it by running sql script in the share directory This can be done on PostgreSQL and later with the command CREATE EXTENSION hstore See http www.postgresql.org docs static contrib.html for more information",
          "hierarchy": "Database PostgreSQL Simple HStore",
          "module": "Database.PostgreSQL.Simple.HStore",
          "name": "HStore",
          "package": "postgresql-simple",
          "partial": "HStore",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-HStore.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents valid hstore syntax.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple.HStore",
          "name": "HStoreBuilder",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-HStore-Implementation.html#HStoreBuilder",
          "type": "data"
        },
        "index": {
          "description": "Represents valid hstore syntax",
          "hierarchy": "Database PostgreSQL Simple HStore",
          "module": "Database.PostgreSQL.Simple.HStore",
          "name": "HStoreBuilder",
          "package": "postgresql-simple",
          "partial": "HStore Builder",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-HStore.html#t:HStoreBuilder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.HStore",
          "name": "HStoreList",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-HStore-Implementation.html#HStoreList",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple HStore",
          "module": "Database.PostgreSQL.Simple.HStore",
          "name": "HStoreList",
          "package": "postgresql-simple",
          "partial": "HStore List",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-HStore.html#t:HStoreList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.HStore",
          "name": "HStoreMap",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-HStore-Implementation.html#HStoreMap",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple HStore",
          "module": "Database.PostgreSQL.Simple.HStore",
          "name": "HStoreMap",
          "package": "postgresql-simple",
          "partial": "HStore Map",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-HStore.html#t:HStoreMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents escape text, ready to be the key or value to a hstore value\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple.HStore",
          "name": "HStoreText",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-HStore-Implementation.html#HStoreText",
          "type": "data"
        },
        "index": {
          "description": "Represents escape text ready to be the key or value to hstore value",
          "hierarchy": "Database PostgreSQL Simple HStore",
          "module": "Database.PostgreSQL.Simple.HStore",
          "name": "HStoreText",
          "package": "postgresql-simple",
          "partial": "HStore Text",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-HStore.html#t:HStoreText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.HStore",
          "name": "ToHStore",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-HStore-Implementation.html#ToHStore",
          "type": "class"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple HStore",
          "module": "Database.PostgreSQL.Simple.HStore",
          "name": "ToHStore",
          "package": "postgresql-simple",
          "partial": "To HStore",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-HStore.html#t:ToHStore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.HStore",
          "name": "ToHStoreText",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-HStore-Implementation.html#ToHStoreText",
          "type": "class"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple HStore",
          "module": "Database.PostgreSQL.Simple.HStore",
          "name": "ToHStoreText",
          "package": "postgresql-simple",
          "partial": "To HStore Text",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-HStore.html#t:ToHStoreText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.HStore",
          "name": "HStoreList",
          "package": "postgresql-simple",
          "signature": "HStoreList",
          "source": "src/Database-PostgreSQL-Simple-HStore-Implementation.html#HStoreList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple HStore",
          "module": "Database.PostgreSQL.Simple.HStore",
          "name": "HStoreList",
          "package": "postgresql-simple",
          "partial": "HStore List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-HStore.html#v:HStoreList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.HStore",
          "name": "HStoreMap",
          "package": "postgresql-simple",
          "signature": "HStoreMap",
          "source": "src/Database-PostgreSQL-Simple-HStore-Implementation.html#HStoreMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple HStore",
          "module": "Database.PostgreSQL.Simple.HStore",
          "name": "HStoreMap",
          "package": "postgresql-simple",
          "partial": "HStore Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-HStore.html#v:HStoreMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.HStore",
          "name": "fromHStoreList",
          "package": "postgresql-simple",
          "signature": "[(Text, Text)]",
          "source": "src/Database-PostgreSQL-Simple-HStore-Implementation.html#HStoreList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple HStore",
          "module": "Database.PostgreSQL.Simple.HStore",
          "name": "fromHStoreList",
          "normalized": "[(Text,Text)]",
          "package": "postgresql-simple",
          "partial": "HStore List",
          "signature": "[(Text,Text)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-HStore.html#v:fromHStoreList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.HStore",
          "name": "fromHStoreMap",
          "package": "postgresql-simple",
          "signature": "Map Text Text",
          "source": "src/Database-PostgreSQL-Simple-HStore-Implementation.html#HStoreMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple HStore",
          "module": "Database.PostgreSQL.Simple.HStore",
          "name": "fromHStoreMap",
          "package": "postgresql-simple",
          "partial": "HStore Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-HStore.html#v:fromHStoreMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.HStore",
          "name": "hstore",
          "package": "postgresql-simple",
          "signature": "a -\u003e b -\u003e HStoreBuilder",
          "source": "src/Database-PostgreSQL-Simple-HStore-Implementation.html#hstore",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple HStore",
          "module": "Database.PostgreSQL.Simple.HStore",
          "name": "hstore",
          "normalized": "a-\u003eb-\u003eHStoreBuilder",
          "package": "postgresql-simple",
          "signature": "a-\u003eb-\u003eHStoreBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-HStore.html#v:hstore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.HStore",
          "name": "toBuilder",
          "package": "postgresql-simple",
          "signature": "HStoreBuilder -\u003e Builder",
          "source": "src/Database-PostgreSQL-Simple-HStore-Implementation.html#toBuilder",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple HStore",
          "module": "Database.PostgreSQL.Simple.HStore",
          "name": "toBuilder",
          "normalized": "HStoreBuilder-\u003eBuilder",
          "package": "postgresql-simple",
          "partial": "Builder",
          "signature": "HStoreBuilder-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-HStore.html#v:toBuilder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.HStore",
          "name": "toHStore",
          "package": "postgresql-simple",
          "signature": "a -\u003e HStoreBuilder",
          "source": "src/Database-PostgreSQL-Simple-HStore-Implementation.html#toHStore",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple HStore",
          "module": "Database.PostgreSQL.Simple.HStore",
          "name": "toHStore",
          "normalized": "a-\u003eHStoreBuilder",
          "package": "postgresql-simple",
          "partial": "HStore",
          "signature": "a-\u003eHStoreBuilder",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-HStore.html#v:toHStore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.HStore",
          "name": "toHStoreText",
          "package": "postgresql-simple",
          "signature": "a -\u003e HStoreText",
          "source": "src/Database-PostgreSQL-Simple-HStore-Implementation.html#toHStoreText",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple HStore",
          "module": "Database.PostgreSQL.Simple.HStore",
          "name": "toHStoreText",
          "normalized": "a-\u003eHStoreText",
          "package": "postgresql-simple",
          "partial": "HStore Text",
          "signature": "a-\u003eHStoreText",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-HStore.html#v:toHStoreText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.HStore",
          "name": "toLazyByteString",
          "package": "postgresql-simple",
          "signature": "HStoreBuilder -\u003e ByteString",
          "source": "src/Database-PostgreSQL-Simple-HStore-Implementation.html#toLazyByteString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple HStore",
          "module": "Database.PostgreSQL.Simple.HStore",
          "name": "toLazyByteString",
          "normalized": "HStoreBuilder-\u003eByteString",
          "package": "postgresql-simple",
          "partial": "Lazy Byte String",
          "signature": "HStoreBuilder-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-HStore.html#v:toLazyByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInternal bits.  This interface is less stable and can change at any time.\n In particular this means that while the rest of the postgresql-simple\n package endeavors to follow the package versioning policy,  this module\n does not.  Also, at the moment there are things in here that aren't\n particularly internal and are exported elsewhere;  these will eventually\n disappear from this module.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "Internal",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-Internal.html",
          "type": "module"
        },
        "index": {
          "description": "Internal bits This interface is less stable and can change at any time In particular this means that while the rest of the postgresql-simple package endeavors to follow the package versioning policy this module does not Also at the moment there are things in here that aren particularly internal and are exported elsewhere these will eventually disappear from this module",
          "hierarchy": "Database PostgreSQL Simple Internal",
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "Internal",
          "package": "postgresql-simple",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "ConnectInfo",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-Internal.html#ConnectInfo",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Internal",
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "ConnectInfo",
          "package": "postgresql-simple",
          "partial": "Connect Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#t:ConnectInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "Connection",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-Internal.html#Connection",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Internal",
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "Connection",
          "package": "postgresql-simple",
          "partial": "Connection",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#t:Connection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "Conversion",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-Internal.html#Conversion",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Internal",
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "Conversion",
          "package": "postgresql-simple",
          "partial": "Conversion",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#t:Conversion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Field represents metadata about a particular field\n\u003c/p\u003e\u003cp\u003eYou don't particularly want to retain these structures for a long\n period of time,  as they will retain the entire query result,  not\n just the field metadata\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "Field",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-Internal.html#Field",
          "type": "data"
        },
        "index": {
          "description": "Field represents metadata about particular field You don particularly want to retain these structures for long period of time as they will retain the entire query result not just the field metadata",
          "hierarchy": "Database PostgreSQL Simple Internal",
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "Field",
          "package": "postgresql-simple",
          "partial": "Field",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#t:Field"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eException thrown if \u003ccode\u003equery\u003c/code\u003e is used to perform an \u003ccode\u003eINSERT\u003c/code\u003e-like\n operation, or \u003ccode\u003eexecute\u003c/code\u003e is used to perform a \u003ccode\u003eSELECT\u003c/code\u003e-like operation.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "QueryError",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-Internal.html#QueryError",
          "type": "data"
        },
        "index": {
          "description": "Exception thrown if query is used to perform an INSERT like operation or execute is used to perform SELECT like operation",
          "hierarchy": "Database PostgreSQL Simple Internal",
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "QueryError",
          "package": "postgresql-simple",
          "partial": "Query Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#t:QueryError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "Row",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-Internal.html#Row",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Internal",
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "Row",
          "package": "postgresql-simple",
          "partial": "Row",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#t:Row"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "RowParser",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-Internal.html#RowParser",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Internal",
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "RowParser",
          "package": "postgresql-simple",
          "partial": "Row Parser",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#t:RowParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "SqlError",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-Internal.html#SqlError",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Internal",
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "SqlError",
          "package": "postgresql-simple",
          "partial": "Sql Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#t:SqlError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "TypeInfoCache",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-Internal.html#TypeInfoCache",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Internal",
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "TypeInfoCache",
          "package": "postgresql-simple",
          "partial": "Type Info Cache",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#t:TypeInfoCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.PostgreSQL.Simple.Internal\",\"Database.PostgreSQL.Simple\"]",
          "name": "ConnectInfo",
          "package": "postgresql-simple",
          "signature": "ConnectInfo",
          "source": "src/Database-PostgreSQL-Simple-Internal.html#ConnectInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:ConnectInfo\",\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:ConnectInfo\"]"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Internal",
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "ConnectInfo",
          "package": "postgresql-simple",
          "partial": "Connect Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:ConnectInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "Connection",
          "package": "postgresql-simple",
          "signature": "Connection",
          "source": "src/Database-PostgreSQL-Simple-Internal.html#Connection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Internal",
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "Connection",
          "package": "postgresql-simple",
          "partial": "Connection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:Connection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "Conversion",
          "package": "postgresql-simple",
          "signature": "Conversion",
          "source": "src/Database-PostgreSQL-Simple-Internal.html#Conversion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Internal",
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "Conversion",
          "package": "postgresql-simple",
          "partial": "Conversion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:Conversion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "Field",
          "package": "postgresql-simple",
          "signature": "Field",
          "source": "src/Database-PostgreSQL-Simple-Internal.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Internal",
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "Field",
          "package": "postgresql-simple",
          "partial": "Field",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:Field"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "QueryError",
          "package": "postgresql-simple",
          "signature": "QueryError",
          "source": "src/Database-PostgreSQL-Simple-Internal.html#QueryError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Internal",
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "QueryError",
          "package": "postgresql-simple",
          "partial": "Query Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:QueryError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "RP",
          "package": "postgresql-simple",
          "signature": "RP",
          "source": "src/Database-PostgreSQL-Simple-Internal.html#RowParser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Internal",
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "RP",
          "package": "postgresql-simple",
          "partial": "RP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:RP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "Row",
          "package": "postgresql-simple",
          "signature": "Row",
          "source": "src/Database-PostgreSQL-Simple-Internal.html#Row",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Internal",
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "Row",
          "package": "postgresql-simple",
          "partial": "Row",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:Row"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.PostgreSQL.Simple.Internal\",\"Database.PostgreSQL.Simple\"]",
          "name": "SqlError",
          "package": "postgresql-simple",
          "signature": "SqlError",
          "source": "src/Database-PostgreSQL-Simple-Internal.html#SqlError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:SqlError\",\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:SqlError\"]"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Internal",
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "SqlError",
          "package": "postgresql-simple",
          "partial": "Sql Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:SqlError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.PostgreSQL.Simple.Internal\",\"Database.PostgreSQL.Simple\"]",
          "name": "close",
          "package": "postgresql-simple",
          "signature": "Connection -\u003e IO ()",
          "source": "src/Database-PostgreSQL-Simple-Internal.html#close",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:close\",\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:close\"]"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Internal",
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "close",
          "normalized": "Connection-\u003eIO()",
          "package": "postgresql-simple",
          "signature": "Connection-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:close"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "column",
          "package": "postgresql-simple",
          "signature": "Column",
          "source": "src/Database-PostgreSQL-Simple-Internal.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Internal",
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "column",
          "package": "postgresql-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:column"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConnect with the given username to the given database. Will throw\n   an exception if it cannot connect.\n\u003c/p\u003e",
          "module": "[\"Database.PostgreSQL.Simple.Internal\",\"Database.PostgreSQL.Simple\"]",
          "name": "connect",
          "package": "postgresql-simple",
          "signature": "ConnectInfo -\u003e IO Connection",
          "source": "src/Database-PostgreSQL-Simple-Internal.html#connect",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:connect\",\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:connect\"]"
        },
        "index": {
          "description": "Connect with the given username to the given database Will throw an exception if it cannot connect",
          "hierarchy": "Database PostgreSQL Simple Internal",
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "connect",
          "normalized": "ConnectInfo-\u003eIO Connection",
          "package": "postgresql-simple",
          "signature": "ConnectInfo-\u003eIO Connection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:connect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.PostgreSQL.Simple.Internal\",\"Database.PostgreSQL.Simple\"]",
          "name": "connectDatabase",
          "package": "postgresql-simple",
          "signature": "String",
          "source": "src/Database-PostgreSQL-Simple-Internal.html#ConnectInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:connectDatabase\",\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:connectDatabase\"]"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Internal",
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "connectDatabase",
          "package": "postgresql-simple",
          "partial": "Database",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:connectDatabase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.PostgreSQL.Simple.Internal\",\"Database.PostgreSQL.Simple\"]",
          "name": "connectHost",
          "package": "postgresql-simple",
          "signature": "String",
          "source": "src/Database-PostgreSQL-Simple-Internal.html#ConnectInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:connectHost\",\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:connectHost\"]"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Internal",
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "connectHost",
          "package": "postgresql-simple",
          "partial": "Host",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:connectHost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.PostgreSQL.Simple.Internal\",\"Database.PostgreSQL.Simple\"]",
          "name": "connectPassword",
          "package": "postgresql-simple",
          "signature": "String",
          "source": "src/Database-PostgreSQL-Simple-Internal.html#ConnectInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:connectPassword\",\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:connectPassword\"]"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Internal",
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "connectPassword",
          "package": "postgresql-simple",
          "partial": "Password",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:connectPassword"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.PostgreSQL.Simple.Internal\",\"Database.PostgreSQL.Simple\"]",
          "name": "connectPort",
          "package": "postgresql-simple",
          "signature": "Word16",
          "source": "src/Database-PostgreSQL-Simple-Internal.html#ConnectInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:connectPort\",\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:connectPort\"]"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Internal",
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "connectPort",
          "package": "postgresql-simple",
          "partial": "Port",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:connectPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempt to make a connection based on a libpq connection string.\n   See \u003ca\u003ehttp://www.postgresql.org/docs/9.1/static/libpq-connect.html\u003c/a\u003e\n   for more information.\n\u003c/p\u003e",
          "module": "[\"Database.PostgreSQL.Simple.Internal\",\"Database.PostgreSQL.Simple\"]",
          "name": "connectPostgreSQL",
          "package": "postgresql-simple",
          "signature": "ByteString -\u003e IO Connection",
          "source": "src/Database-PostgreSQL-Simple-Internal.html#connectPostgreSQL",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:connectPostgreSQL\",\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:connectPostgreSQL\"]"
        },
        "index": {
          "description": "Attempt to make connection based on libpq connection string See http www.postgresql.org docs static libpq-connect.html for more information",
          "hierarchy": "Database PostgreSQL Simple Internal",
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "connectPostgreSQL",
          "normalized": "ByteString-\u003eIO Connection",
          "package": "postgresql-simple",
          "partial": "Postgre SQL",
          "signature": "ByteString-\u003eIO Connection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:connectPostgreSQL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.PostgreSQL.Simple.Internal\",\"Database.PostgreSQL.Simple\"]",
          "name": "connectUser",
          "package": "postgresql-simple",
          "signature": "String",
          "source": "src/Database-PostgreSQL-Simple-Internal.html#ConnectInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:connectUser\",\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:connectUser\"]"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Internal",
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "connectUser",
          "package": "postgresql-simple",
          "partial": "User",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:connectUser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "connectionHandle",
          "package": "postgresql-simple",
          "signature": "(MVar Connection)",
          "source": "src/Database-PostgreSQL-Simple-Internal.html#Connection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Internal",
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "connectionHandle",
          "package": "postgresql-simple",
          "partial": "Handle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:connectionHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "connectionObjects",
          "package": "postgresql-simple",
          "signature": "(MVar TypeInfoCache)",
          "source": "src/Database-PostgreSQL-Simple-Internal.html#Connection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Internal",
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "connectionObjects",
          "package": "postgresql-simple",
          "partial": "Objects",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:connectionObjects"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "connectionTempNameCounter",
          "package": "postgresql-simple",
          "signature": "(IORef Int64)",
          "source": "src/Database-PostgreSQL-Simple-Internal.html#Connection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Internal",
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "connectionTempNameCounter",
          "package": "postgresql-simple",
          "partial": "Temp Name Counter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:connectionTempNameCounter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault information for setting up a connection.\n\u003c/p\u003e\u003cp\u003eDefaults are as follows:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Server on \u003ccode\u003elocalhost\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e Port on \u003ccode\u003e5432\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e User \u003ccode\u003epostgres\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e No password\n\u003c/li\u003e\u003cli\u003e Database \u003ccode\u003epostgres\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eUse as in the following example:\n\u003c/p\u003e\u003cpre\u003e connect defaultConnectInfo { connectHost = \"db.example.com\" }\n\u003c/pre\u003e",
          "module": "[\"Database.PostgreSQL.Simple.Internal\",\"Database.PostgreSQL.Simple\"]",
          "name": "defaultConnectInfo",
          "package": "postgresql-simple",
          "signature": "ConnectInfo",
          "source": "src/Database-PostgreSQL-Simple-Internal.html#defaultConnectInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:defaultConnectInfo\",\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:defaultConnectInfo\"]"
        },
        "index": {
          "description": "Default information for setting up connection Defaults are as follows Server on localhost Port on User postgres No password Database postgres Use as in the following example connect defaultConnectInfo connectHost db.example.com",
          "hierarchy": "Database PostgreSQL Simple Internal",
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "defaultConnectInfo",
          "package": "postgresql-simple",
          "partial": "Connect Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:defaultConnectInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "disconnectedError",
          "package": "postgresql-simple",
          "signature": "SqlError",
          "source": "src/Database-PostgreSQL-Simple-Internal.html#disconnectedError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Internal",
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "disconnectedError",
          "package": "postgresql-simple",
          "partial": "Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:disconnectedError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "exec",
          "package": "postgresql-simple",
          "signature": "Connection -\u003e ByteString -\u003e IO Result",
          "source": "src/Database-PostgreSQL-Simple-Internal.html#exec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Internal",
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "exec",
          "normalized": "Connection-\u003eByteString-\u003eIO Result",
          "package": "postgresql-simple",
          "signature": "Connection-\u003eByteString-\u003eIO Result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:exec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003eexecute\u003c/code\u003e that does not perform query substitution.\n\u003c/p\u003e",
          "module": "[\"Database.PostgreSQL.Simple.Internal\",\"Database.PostgreSQL.Simple\"]",
          "name": "execute_",
          "package": "postgresql-simple",
          "signature": "Connection -\u003e Query -\u003e IO Int64",
          "source": "src/Database-PostgreSQL-Simple-Internal.html#execute_",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:execute_\",\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:execute_\"]"
        },
        "index": {
          "description": "version of execute that does not perform query substitution",
          "hierarchy": "Database PostgreSQL Simple Internal",
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "execute_",
          "normalized": "Connection-\u003eQuery-\u003eIO Int",
          "package": "postgresql-simple",
          "signature": "Connection-\u003eQuery-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:execute_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "fatalError",
          "package": "postgresql-simple",
          "signature": "ByteString -\u003e SqlError",
          "source": "src/Database-PostgreSQL-Simple-Internal.html#fatalError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Internal",
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "fatalError",
          "normalized": "ByteString-\u003eSqlError",
          "package": "postgresql-simple",
          "partial": "Error",
          "signature": "ByteString-\u003eSqlError",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:fatalError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "fdError",
          "package": "postgresql-simple",
          "signature": "ByteString -\u003e IOError",
          "source": "src/Database-PostgreSQL-Simple-Internal.html#fdError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Internal",
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "fdError",
          "normalized": "ByteString-\u003eIOError",
          "package": "postgresql-simple",
          "partial": "Error",
          "signature": "ByteString-\u003eIOError",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:fdError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "finishExecute",
          "package": "postgresql-simple",
          "signature": "Connection -\u003e Query -\u003e Result -\u003e IO Int64",
          "source": "src/Database-PostgreSQL-Simple-Internal.html#finishExecute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Internal",
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "finishExecute",
          "normalized": "Connection-\u003eQuery-\u003eResult-\u003eIO Int",
          "package": "postgresql-simple",
          "partial": "Execute",
          "signature": "Connection-\u003eQuery-\u003eResult-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:finishExecute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "liftConversion",
          "package": "postgresql-simple",
          "signature": "IO a -\u003e Conversion a",
          "source": "src/Database-PostgreSQL-Simple-Internal.html#liftConversion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Internal",
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "liftConversion",
          "normalized": "IO a-\u003eConversion a",
          "package": "postgresql-simple",
          "partial": "Conversion",
          "signature": "IO a-\u003eConversion a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:liftConversion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "liftRowParser",
          "package": "postgresql-simple",
          "signature": "IO a -\u003e RowParser a",
          "source": "src/Database-PostgreSQL-Simple-Internal.html#liftRowParser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Internal",
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "liftRowParser",
          "normalized": "IO a-\u003eRowParser a",
          "package": "postgresql-simple",
          "partial": "Row Parser",
          "signature": "IO a-\u003eRowParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:liftRowParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "newNullConnection",
          "package": "postgresql-simple",
          "signature": "IO Connection",
          "source": "src/Database-PostgreSQL-Simple-Internal.html#newNullConnection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Internal",
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "newNullConnection",
          "package": "postgresql-simple",
          "partial": "Null Connection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:newNullConnection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "newTempName",
          "package": "postgresql-simple",
          "signature": "Connection -\u003e IO Query",
          "source": "src/Database-PostgreSQL-Simple-Internal.html#newTempName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Internal",
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "newTempName",
          "normalized": "Connection-\u003eIO Query",
          "package": "postgresql-simple",
          "partial": "Temp Name",
          "signature": "Connection-\u003eIO Query",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:newTempName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "oid2int",
          "package": "postgresql-simple",
          "signature": "Oid -\u003e Int",
          "source": "src/Database-PostgreSQL-Simple-Internal.html#oid2int",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Internal",
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "oid2int",
          "normalized": "Oid-\u003eInt",
          "package": "postgresql-simple",
          "signature": "Oid-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:oid2int"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurns a \u003ccode\u003e\u003ca\u003eConnectInfo\u003c/a\u003e\u003c/code\u003e data structure into a libpq connection string.\n\u003c/p\u003e",
          "module": "[\"Database.PostgreSQL.Simple.Internal\",\"Database.PostgreSQL.Simple\"]",
          "name": "postgreSQLConnectionString",
          "package": "postgresql-simple",
          "signature": "ConnectInfo -\u003e ByteString",
          "source": "src/Database-PostgreSQL-Simple-Internal.html#postgreSQLConnectionString",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:postgreSQLConnectionString\",\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:postgreSQLConnectionString\"]"
        },
        "index": {
          "description": "Turns ConnectInfo data structure into libpq connection string",
          "hierarchy": "Database PostgreSQL Simple Internal",
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "postgreSQLConnectionString",
          "normalized": "ConnectInfo-\u003eByteString",
          "package": "postgresql-simple",
          "partial": "SQLConnection String",
          "signature": "ConnectInfo-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:postgreSQLConnectionString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "qeMessage",
          "package": "postgresql-simple",
          "signature": "String",
          "source": "src/Database-PostgreSQL-Simple-Internal.html#QueryError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Internal",
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "qeMessage",
          "package": "postgresql-simple",
          "partial": "Message",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:qeMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "qeQuery",
          "package": "postgresql-simple",
          "signature": "Query",
          "source": "src/Database-PostgreSQL-Simple-Internal.html#QueryError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Internal",
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "qeQuery",
          "package": "postgresql-simple",
          "partial": "Query",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:qeQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "result",
          "package": "postgresql-simple",
          "signature": "Result",
          "source": "src/Database-PostgreSQL-Simple-Internal.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Internal",
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "result",
          "package": "postgresql-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "row",
          "package": "postgresql-simple",
          "signature": "Row",
          "source": "src/Database-PostgreSQL-Simple-Internal.html#Row",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Internal",
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "row",
          "package": "postgresql-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:row"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "rowresult",
          "package": "postgresql-simple",
          "signature": "Result",
          "source": "src/Database-PostgreSQL-Simple-Internal.html#Row",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Internal",
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "rowresult",
          "package": "postgresql-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:rowresult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "runConversion",
          "package": "postgresql-simple",
          "signature": "Connection -\u003e IO (Ok a)",
          "source": "src/Database-PostgreSQL-Simple-Internal.html#Conversion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Internal",
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "runConversion",
          "normalized": "Connection-\u003eIO(Ok a)",
          "package": "postgresql-simple",
          "partial": "Conversion",
          "signature": "Connection-\u003eIO(Ok a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:runConversion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.PostgreSQL.Simple.Internal\",\"Database.PostgreSQL.Simple\"]",
          "name": "sqlErrorDetail",
          "package": "postgresql-simple",
          "signature": "ByteString",
          "source": "src/Database-PostgreSQL-Simple-Internal.html#SqlError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:sqlErrorDetail\",\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:sqlErrorDetail\"]"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Internal",
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "sqlErrorDetail",
          "package": "postgresql-simple",
          "partial": "Error Detail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:sqlErrorDetail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.PostgreSQL.Simple.Internal\",\"Database.PostgreSQL.Simple\"]",
          "name": "sqlErrorHint",
          "package": "postgresql-simple",
          "signature": "ByteString",
          "source": "src/Database-PostgreSQL-Simple-Internal.html#SqlError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:sqlErrorHint\",\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:sqlErrorHint\"]"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Internal",
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "sqlErrorHint",
          "package": "postgresql-simple",
          "partial": "Error Hint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:sqlErrorHint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.PostgreSQL.Simple.Internal\",\"Database.PostgreSQL.Simple\"]",
          "name": "sqlErrorMsg",
          "package": "postgresql-simple",
          "signature": "ByteString",
          "source": "src/Database-PostgreSQL-Simple-Internal.html#SqlError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:sqlErrorMsg\",\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:sqlErrorMsg\"]"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Internal",
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "sqlErrorMsg",
          "package": "postgresql-simple",
          "partial": "Error Msg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:sqlErrorMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.PostgreSQL.Simple.Internal\",\"Database.PostgreSQL.Simple\"]",
          "name": "sqlExecStatus",
          "package": "postgresql-simple",
          "signature": "ExecStatus",
          "source": "src/Database-PostgreSQL-Simple-Internal.html#SqlError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:sqlExecStatus\",\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:sqlExecStatus\"]"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Internal",
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "sqlExecStatus",
          "package": "postgresql-simple",
          "partial": "Exec Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:sqlExecStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.PostgreSQL.Simple.Internal\",\"Database.PostgreSQL.Simple\"]",
          "name": "sqlState",
          "package": "postgresql-simple",
          "signature": "ByteString",
          "source": "src/Database-PostgreSQL-Simple-Internal.html#SqlError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:sqlState\",\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:sqlState\"]"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Internal",
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "sqlState",
          "package": "postgresql-simple",
          "partial": "State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:sqlState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "throwResultError",
          "package": "postgresql-simple",
          "signature": "ByteString -\u003e Result -\u003e ExecStatus -\u003e IO a",
          "source": "src/Database-PostgreSQL-Simple-Internal.html#throwResultError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Internal",
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "throwResultError",
          "normalized": "ByteString-\u003eResult-\u003eExecStatus-\u003eIO a",
          "package": "postgresql-simple",
          "partial": "Result Error",
          "signature": "ByteString-\u003eResult-\u003eExecStatus-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:throwResultError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis returns the type oid associated with the column.  Analogous\n   to libpq's \u003ccode\u003ePQftype\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "typeOid",
          "package": "postgresql-simple",
          "signature": "Oid",
          "source": "src/Database-PostgreSQL-Simple-Internal.html#Field",
          "type": "function"
        },
        "index": {
          "description": "This returns the type oid associated with the column Analogous to libpq PQftype",
          "hierarchy": "Database PostgreSQL Simple Internal",
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "typeOid",
          "package": "postgresql-simple",
          "partial": "Oid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:typeOid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "unRP",
          "package": "postgresql-simple",
          "signature": "ReaderT Row (StateT Column Conversion) a",
          "source": "src/Database-PostgreSQL-Simple-Internal.html#RowParser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Internal",
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "unRP",
          "package": "postgresql-simple",
          "partial": "RP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:unRP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAtomically perform an action with the database handle, if there is one.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "withConnection",
          "package": "postgresql-simple",
          "signature": "Connection -\u003e (Connection -\u003e IO a) -\u003e IO a",
          "source": "src/Database-PostgreSQL-Simple-Internal.html#withConnection",
          "type": "function"
        },
        "index": {
          "description": "Atomically perform an action with the database handle if there is one",
          "hierarchy": "Database PostgreSQL Simple Internal",
          "module": "Database.PostgreSQL.Simple.Internal",
          "name": "withConnection",
          "normalized": "Connection-\u003e(Connection-\u003eIO a)-\u003eIO a",
          "package": "postgresql-simple",
          "partial": "Connection",
          "signature": "Connection-\u003e(Connection-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:withConnection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSupport for PostgreSQL's Large Objects;  see\n \u003ca\u003ehttp://www.postgresql.org/docs/9.1/static/largeobjects.html\u003c/a\u003e for more\n information.\n\u003c/p\u003e\u003cp\u003eNote that Large Object File Descriptors are only valid within a single\n database transaction,  so if you are interested in using anything beyond\n \u003ccode\u003e\u003ca\u003eloCreat\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eloCreate\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eloUnlink\u003c/a\u003e\u003c/code\u003e,  you will need to run the entire\n sequence of functions in a transaction.   As \u003ccode\u003e\u003ca\u003eloImport\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eloExport\u003c/a\u003e\u003c/code\u003e\n are simply C functions that call \u003ccode\u003e\u003ca\u003eloCreat\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eloOpen\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eloRead\u003c/a\u003e\u003c/code\u003e, and \n \u003ccode\u003e\u003ca\u003eloWrite\u003c/a\u003e\u003c/code\u003e,  and do not perform any transaction handling themselves,\n they also need to be wrapped in an explicit transaction.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.PostgreSQL.Simple.LargeObjects",
          "name": "LargeObjects",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-LargeObjects.html",
          "type": "module"
        },
        "index": {
          "description": "Support for PostgreSQL Large Objects see http www.postgresql.org docs static largeobjects.html for more information Note that Large Object File Descriptors are only valid within single database transaction so if you are interested in using anything beyond loCreat loCreate and loUnlink you will need to run the entire sequence of functions in transaction As loImport and loExport are simply functions that call loCreat loOpen loRead and loWrite and do not perform any transaction handling themselves they also need to be wrapped in an explicit transaction",
          "hierarchy": "Database PostgreSQL Simple LargeObjects",
          "module": "Database.PostgreSQL.Simple.LargeObjects",
          "name": "LargeObjects",
          "package": "postgresql-simple",
          "partial": "Large Objects",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-LargeObjects.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eopenFile\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple.LargeObjects",
          "name": "IOMode",
          "package": "postgresql-simple",
          "type": "data"
        },
        "index": {
          "description": "See openFile",
          "hierarchy": "Database PostgreSQL Simple LargeObjects",
          "module": "Database.PostgreSQL.Simple.LargeObjects",
          "name": "IOMode",
          "package": "postgresql-simple",
          "partial": "IOMode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-LargeObjects.html#t:IOMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoFd is a Large Object (pseudo) File Descriptor.  It is understood by\n libpq but not by operating system calls.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple.LargeObjects",
          "name": "LoFd",
          "package": "postgresql-simple",
          "type": "data"
        },
        "index": {
          "description": "LoFd is Large Object pseudo File Descriptor It is understood by libpq but not by operating system calls",
          "hierarchy": "Database PostgreSQL Simple LargeObjects",
          "module": "Database.PostgreSQL.Simple.LargeObjects",
          "name": "LoFd",
          "package": "postgresql-simple",
          "partial": "Lo Fd",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-LargeObjects.html#t:LoFd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.LargeObjects",
          "name": "Oid",
          "package": "postgresql-simple",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple LargeObjects",
          "module": "Database.PostgreSQL.Simple.LargeObjects",
          "name": "Oid",
          "package": "postgresql-simple",
          "partial": "Oid",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-LargeObjects.html#t:Oid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA mode that determines the effect of \u003ccode\u003ehSeek\u003c/code\u003e \u003ccode\u003ehdl mode i\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple.LargeObjects",
          "name": "SeekMode",
          "package": "postgresql-simple",
          "type": "data"
        },
        "index": {
          "description": "mode that determines the effect of hSeek hdl mode",
          "hierarchy": "Database PostgreSQL Simple LargeObjects",
          "module": "Database.PostgreSQL.Simple.LargeObjects",
          "name": "SeekMode",
          "package": "postgresql-simple",
          "partial": "Seek Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-LargeObjects.html#t:SeekMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe position of \u003ccode\u003ehdl\u003c/code\u003e is set to \u003ccode\u003ei\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple.LargeObjects",
          "name": "AbsoluteSeek",
          "package": "postgresql-simple",
          "signature": "AbsoluteSeek",
          "type": "function"
        },
        "index": {
          "description": "the position of hdl is set to",
          "hierarchy": "Database PostgreSQL Simple LargeObjects",
          "module": "Database.PostgreSQL.Simple.LargeObjects",
          "name": "AbsoluteSeek",
          "package": "postgresql-simple",
          "partial": "Absolute Seek",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-LargeObjects.html#v:AbsoluteSeek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.LargeObjects",
          "name": "AppendMode",
          "package": "postgresql-simple",
          "signature": "AppendMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple LargeObjects",
          "module": "Database.PostgreSQL.Simple.LargeObjects",
          "name": "AppendMode",
          "package": "postgresql-simple",
          "partial": "Append Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-LargeObjects.html#v:AppendMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.LargeObjects",
          "name": "ReadMode",
          "package": "postgresql-simple",
          "signature": "ReadMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple LargeObjects",
          "module": "Database.PostgreSQL.Simple.LargeObjects",
          "name": "ReadMode",
          "package": "postgresql-simple",
          "partial": "Read Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-LargeObjects.html#v:ReadMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.LargeObjects",
          "name": "ReadWriteMode",
          "package": "postgresql-simple",
          "signature": "ReadWriteMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple LargeObjects",
          "module": "Database.PostgreSQL.Simple.LargeObjects",
          "name": "ReadWriteMode",
          "package": "postgresql-simple",
          "partial": "Read Write Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-LargeObjects.html#v:ReadWriteMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe position of \u003ccode\u003ehdl\u003c/code\u003e is set to offset \u003ccode\u003ei\u003c/code\u003e\n from the current position.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple.LargeObjects",
          "name": "RelativeSeek",
          "package": "postgresql-simple",
          "signature": "RelativeSeek",
          "type": "function"
        },
        "index": {
          "description": "the position of hdl is set to offset from the current position",
          "hierarchy": "Database PostgreSQL Simple LargeObjects",
          "module": "Database.PostgreSQL.Simple.LargeObjects",
          "name": "RelativeSeek",
          "package": "postgresql-simple",
          "partial": "Relative Seek",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-LargeObjects.html#v:RelativeSeek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe position of \u003ccode\u003ehdl\u003c/code\u003e is set to offset \u003ccode\u003ei\u003c/code\u003e\n from the end of the file.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple.LargeObjects",
          "name": "SeekFromEnd",
          "package": "postgresql-simple",
          "signature": "SeekFromEnd",
          "type": "function"
        },
        "index": {
          "description": "the position of hdl is set to offset from the end of the file",
          "hierarchy": "Database PostgreSQL Simple LargeObjects",
          "module": "Database.PostgreSQL.Simple.LargeObjects",
          "name": "SeekFromEnd",
          "package": "postgresql-simple",
          "partial": "Seek From End",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-LargeObjects.html#v:SeekFromEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.LargeObjects",
          "name": "WriteMode",
          "package": "postgresql-simple",
          "signature": "WriteMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple LargeObjects",
          "module": "Database.PostgreSQL.Simple.LargeObjects",
          "name": "WriteMode",
          "package": "postgresql-simple",
          "partial": "Write Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-LargeObjects.html#v:WriteMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.LargeObjects",
          "name": "loClose",
          "package": "postgresql-simple",
          "signature": "Connection -\u003e LoFd -\u003e IO ()",
          "source": "src/Database-PostgreSQL-Simple-LargeObjects.html#loClose",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple LargeObjects",
          "module": "Database.PostgreSQL.Simple.LargeObjects",
          "name": "loClose",
          "normalized": "Connection-\u003eLoFd-\u003eIO()",
          "package": "postgresql-simple",
          "partial": "Close",
          "signature": "Connection-\u003eLoFd-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-LargeObjects.html#v:loClose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.LargeObjects",
          "name": "loCreat",
          "package": "postgresql-simple",
          "signature": "Connection -\u003e IO Oid",
          "source": "src/Database-PostgreSQL-Simple-LargeObjects.html#loCreat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple LargeObjects",
          "module": "Database.PostgreSQL.Simple.LargeObjects",
          "name": "loCreat",
          "normalized": "Connection-\u003eIO Oid",
          "package": "postgresql-simple",
          "partial": "Creat",
          "signature": "Connection-\u003eIO Oid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-LargeObjects.html#v:loCreat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.LargeObjects",
          "name": "loCreate",
          "package": "postgresql-simple",
          "signature": "Connection -\u003e Oid -\u003e IO Oid",
          "source": "src/Database-PostgreSQL-Simple-LargeObjects.html#loCreate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple LargeObjects",
          "module": "Database.PostgreSQL.Simple.LargeObjects",
          "name": "loCreate",
          "normalized": "Connection-\u003eOid-\u003eIO Oid",
          "package": "postgresql-simple",
          "partial": "Create",
          "signature": "Connection-\u003eOid-\u003eIO Oid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-LargeObjects.html#v:loCreate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.LargeObjects",
          "name": "loExport",
          "package": "postgresql-simple",
          "signature": "Connection -\u003e Oid -\u003e FilePath -\u003e IO ()",
          "source": "src/Database-PostgreSQL-Simple-LargeObjects.html#loExport",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple LargeObjects",
          "module": "Database.PostgreSQL.Simple.LargeObjects",
          "name": "loExport",
          "normalized": "Connection-\u003eOid-\u003eFilePath-\u003eIO()",
          "package": "postgresql-simple",
          "partial": "Export",
          "signature": "Connection-\u003eOid-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-LargeObjects.html#v:loExport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.LargeObjects",
          "name": "loImport",
          "package": "postgresql-simple",
          "signature": "Connection -\u003e FilePath -\u003e IO Oid",
          "source": "src/Database-PostgreSQL-Simple-LargeObjects.html#loImport",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple LargeObjects",
          "module": "Database.PostgreSQL.Simple.LargeObjects",
          "name": "loImport",
          "normalized": "Connection-\u003eFilePath-\u003eIO Oid",
          "package": "postgresql-simple",
          "partial": "Import",
          "signature": "Connection-\u003eFilePath-\u003eIO Oid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-LargeObjects.html#v:loImport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.LargeObjects",
          "name": "loImportWithOid",
          "package": "postgresql-simple",
          "signature": "Connection -\u003e FilePath -\u003e Oid -\u003e IO Oid",
          "source": "src/Database-PostgreSQL-Simple-LargeObjects.html#loImportWithOid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple LargeObjects",
          "module": "Database.PostgreSQL.Simple.LargeObjects",
          "name": "loImportWithOid",
          "normalized": "Connection-\u003eFilePath-\u003eOid-\u003eIO Oid",
          "package": "postgresql-simple",
          "partial": "Import With Oid",
          "signature": "Connection-\u003eFilePath-\u003eOid-\u003eIO Oid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-LargeObjects.html#v:loImportWithOid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.LargeObjects",
          "name": "loOpen",
          "package": "postgresql-simple",
          "signature": "Connection -\u003e Oid -\u003e IOMode -\u003e IO LoFd",
          "source": "src/Database-PostgreSQL-Simple-LargeObjects.html#loOpen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple LargeObjects",
          "module": "Database.PostgreSQL.Simple.LargeObjects",
          "name": "loOpen",
          "normalized": "Connection-\u003eOid-\u003eIOMode-\u003eIO LoFd",
          "package": "postgresql-simple",
          "partial": "Open",
          "signature": "Connection-\u003eOid-\u003eIOMode-\u003eIO LoFd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-LargeObjects.html#v:loOpen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.LargeObjects",
          "name": "loRead",
          "package": "postgresql-simple",
          "signature": "Connection -\u003e LoFd -\u003e Int -\u003e IO ByteString",
          "source": "src/Database-PostgreSQL-Simple-LargeObjects.html#loRead",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple LargeObjects",
          "module": "Database.PostgreSQL.Simple.LargeObjects",
          "name": "loRead",
          "normalized": "Connection-\u003eLoFd-\u003eInt-\u003eIO ByteString",
          "package": "postgresql-simple",
          "partial": "Read",
          "signature": "Connection-\u003eLoFd-\u003eInt-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-LargeObjects.html#v:loRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.LargeObjects",
          "name": "loSeek",
          "package": "postgresql-simple",
          "signature": "Connection -\u003e LoFd -\u003e SeekMode -\u003e Int -\u003e IO Int",
          "source": "src/Database-PostgreSQL-Simple-LargeObjects.html#loSeek",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple LargeObjects",
          "module": "Database.PostgreSQL.Simple.LargeObjects",
          "name": "loSeek",
          "normalized": "Connection-\u003eLoFd-\u003eSeekMode-\u003eInt-\u003eIO Int",
          "package": "postgresql-simple",
          "partial": "Seek",
          "signature": "Connection-\u003eLoFd-\u003eSeekMode-\u003eInt-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-LargeObjects.html#v:loSeek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.LargeObjects",
          "name": "loTell",
          "package": "postgresql-simple",
          "signature": "Connection -\u003e LoFd -\u003e IO Int",
          "source": "src/Database-PostgreSQL-Simple-LargeObjects.html#loTell",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple LargeObjects",
          "module": "Database.PostgreSQL.Simple.LargeObjects",
          "name": "loTell",
          "normalized": "Connection-\u003eLoFd-\u003eIO Int",
          "package": "postgresql-simple",
          "partial": "Tell",
          "signature": "Connection-\u003eLoFd-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-LargeObjects.html#v:loTell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.LargeObjects",
          "name": "loTruncate",
          "package": "postgresql-simple",
          "signature": "Connection -\u003e LoFd -\u003e Int -\u003e IO ()",
          "source": "src/Database-PostgreSQL-Simple-LargeObjects.html#loTruncate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple LargeObjects",
          "module": "Database.PostgreSQL.Simple.LargeObjects",
          "name": "loTruncate",
          "normalized": "Connection-\u003eLoFd-\u003eInt-\u003eIO()",
          "package": "postgresql-simple",
          "partial": "Truncate",
          "signature": "Connection-\u003eLoFd-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-LargeObjects.html#v:loTruncate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.LargeObjects",
          "name": "loUnlink",
          "package": "postgresql-simple",
          "signature": "Connection -\u003e Oid -\u003e IO ()",
          "source": "src/Database-PostgreSQL-Simple-LargeObjects.html#loUnlink",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple LargeObjects",
          "module": "Database.PostgreSQL.Simple.LargeObjects",
          "name": "loUnlink",
          "normalized": "Connection-\u003eOid-\u003eIO()",
          "package": "postgresql-simple",
          "partial": "Unlink",
          "signature": "Connection-\u003eOid-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-LargeObjects.html#v:loUnlink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.LargeObjects",
          "name": "loWrite",
          "package": "postgresql-simple",
          "signature": "Connection -\u003e LoFd -\u003e ByteString -\u003e IO Int",
          "source": "src/Database-PostgreSQL-Simple-LargeObjects.html#loWrite",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple LargeObjects",
          "module": "Database.PostgreSQL.Simple.LargeObjects",
          "name": "loWrite",
          "normalized": "Connection-\u003eLoFd-\u003eByteString-\u003eIO Int",
          "package": "postgresql-simple",
          "partial": "Write",
          "signature": "Connection-\u003eLoFd-\u003eByteString-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-LargeObjects.html#v:loWrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSupport for receiving asynchronous notifications via PostgreSQL's\n Listen/Notify mechanism.  See\n \u003ca\u003ehttp://www.postgresql.org/docs/9.1/static/sql-notify.html\u003c/a\u003e for more\n information.\n\u003c/p\u003e\u003cp\u003eNote that on Windows,  \u003ccode\u003egetNotification\u003c/code\u003e currently uses a polling loop\n of 1 second to check for more notifications,  due to some inadequacies\n in GHC's IO implementation and interface on that platform.   See GHC\n issue #7353 for more information.  While this workaround is less than\n ideal,  notifications are still better than polling the database directly.\n Notifications do not create any extra work for the backend,  and are\n likely cheaper on the client side as well.\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://hackage.haskell.org/trac/ghc/ticket/7353\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.PostgreSQL.Simple.Notification",
          "name": "Notification",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-Notification.html",
          "type": "module"
        },
        "index": {
          "description": "Support for receiving asynchronous notifications via PostgreSQL Listen Notify mechanism See http www.postgresql.org docs static sql-notify.html for more information Note that on Windows getNotification currently uses polling loop of second to check for more notifications due to some inadequacies in GHC IO implementation and interface on that platform See GHC issue for more information While this workaround is less than ideal notifications are still better than polling the database directly Notifications do not create any extra work for the backend and are likely cheaper on the client side as well http hackage.haskell.org trac ghc ticket",
          "hierarchy": "Database PostgreSQL Simple Notification",
          "module": "Database.PostgreSQL.Simple.Notification",
          "name": "Notification",
          "package": "postgresql-simple",
          "partial": "Notification",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Notification.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Notification",
          "name": "Notification",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-Notification.html#Notification",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Notification",
          "module": "Database.PostgreSQL.Simple.Notification",
          "name": "Notification",
          "package": "postgresql-simple",
          "partial": "Notification",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Notification.html#t:Notification"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Notification",
          "name": "Notification",
          "package": "postgresql-simple",
          "signature": "Notification",
          "source": "src/Database-PostgreSQL-Simple-Notification.html#Notification",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Notification",
          "module": "Database.PostgreSQL.Simple.Notification",
          "name": "Notification",
          "package": "postgresql-simple",
          "partial": "Notification",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Notification.html#v:Notification"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the process \u003ccode\u003e\u003ca\u003eCPid\u003c/a\u003e\u003c/code\u003e of the backend server process\n handling this connection.\n\u003c/p\u003e\u003cp\u003eThe backend PID is useful for debugging purposes and for comparison\n to NOTIFY messages (which include the PID of the notifying backend\n process). Note that the PID belongs to a process executing on the\n database server host, not the local host!\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple.Notification",
          "name": "getBackendPID",
          "package": "postgresql-simple",
          "signature": "Connection -\u003e IO CPid",
          "source": "src/Database-PostgreSQL-Simple-Notification.html#getBackendPID",
          "type": "function"
        },
        "index": {
          "description": "Returns the process CPid of the backend server process handling this connection The backend PID is useful for debugging purposes and for comparison to NOTIFY messages which include the PID of the notifying backend process Note that the PID belongs to process executing on the database server host not the local host",
          "hierarchy": "Database PostgreSQL Simple Notification",
          "module": "Database.PostgreSQL.Simple.Notification",
          "name": "getBackendPID",
          "normalized": "Connection-\u003eIO CPid",
          "package": "postgresql-simple",
          "partial": "Backend PID",
          "signature": "Connection-\u003eIO CPid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Notification.html#v:getBackendPID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a single notification.   If no notifications are available,\n   \u003ccode\u003e\u003ca\u003egetNotification\u003c/a\u003e\u003c/code\u003e blocks until one arrives.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple.Notification",
          "name": "getNotification",
          "package": "postgresql-simple",
          "signature": "Connection -\u003e IO Notification",
          "source": "src/Database-PostgreSQL-Simple-Notification.html#getNotification",
          "type": "function"
        },
        "index": {
          "description": "Returns single notification If no notifications are available getNotification blocks until one arrives",
          "hierarchy": "Database PostgreSQL Simple Notification",
          "module": "Database.PostgreSQL.Simple.Notification",
          "name": "getNotification",
          "normalized": "Connection-\u003eIO Notification",
          "package": "postgresql-simple",
          "partial": "Notification",
          "signature": "Connection-\u003eIO Notification",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Notification.html#v:getNotification"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNon-blocking variant of \u003ccode\u003e\u003ca\u003egetNotification\u003c/a\u003e\u003c/code\u003e.   Returns a single notification,\n if available.   If no notifications are available,  returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple.Notification",
          "name": "getNotificationNonBlocking",
          "package": "postgresql-simple",
          "signature": "Connection -\u003e IO (Maybe Notification)",
          "source": "src/Database-PostgreSQL-Simple-Notification.html#getNotificationNonBlocking",
          "type": "function"
        },
        "index": {
          "description": "Non-blocking variant of getNotification Returns single notification if available If no notifications are available returns Nothing",
          "hierarchy": "Database PostgreSQL Simple Notification",
          "module": "Database.PostgreSQL.Simple.Notification",
          "name": "getNotificationNonBlocking",
          "normalized": "Connection-\u003eIO(Maybe Notification)",
          "package": "postgresql-simple",
          "partial": "Notification Non Blocking",
          "signature": "Connection-\u003eIO(Maybe Notification)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Notification.html#v:getNotificationNonBlocking"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Notification",
          "name": "notificationChannel",
          "package": "postgresql-simple",
          "signature": "ByteString",
          "source": "src/Database-PostgreSQL-Simple-Notification.html#Notification",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Notification",
          "module": "Database.PostgreSQL.Simple.Notification",
          "name": "notificationChannel",
          "package": "postgresql-simple",
          "partial": "Channel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Notification.html#v:notificationChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Notification",
          "name": "notificationData",
          "package": "postgresql-simple",
          "signature": "ByteString",
          "source": "src/Database-PostgreSQL-Simple-Notification.html#Notification",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Notification",
          "module": "Database.PostgreSQL.Simple.Notification",
          "name": "notificationData",
          "package": "postgresql-simple",
          "partial": "Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Notification.html#v:notificationData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Notification",
          "name": "notificationPid",
          "package": "postgresql-simple",
          "signature": "CPid",
          "source": "src/Database-PostgreSQL-Simple-Notification.html#Notification",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Notification",
          "module": "Database.PostgreSQL.Simple.Notification",
          "name": "notificationPid",
          "package": "postgresql-simple",
          "partial": "Pid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Notification.html#v:notificationPid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eOk\u003c/a\u003e\u003c/code\u003e type is a simple error handler,  basically equivalent to\n \u003ccode\u003eEither [SomeException]\u003c/code\u003e.   This type (without the list) was used to\n handle conversion errors in early versions of postgresql-simple.\n\u003c/p\u003e\u003cp\u003eOne of the primary reasons why this type  was introduced is that\n \u003ccode\u003eEither SomeException\u003c/code\u003e had not been provided an instance for \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e,\n and it would have been a bad idea to provide an orphaned instance for a\n commonly-used type and typeclass included in \u003ccode\u003ebase\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExtending the failure case to a list of \u003ccode\u003e\u003ca\u003eSomeException\u003c/a\u003e\u003c/code\u003es enables a\n more sensible \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e instance definitions:   \u003ccode\u003e\u003ca\u003e\u003c|\u003e\u003c/a\u003e\u003c/code\u003e concatinates\n the list of exceptions when both cases fail,  and \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e is defined as\n 'Errors []'.   Though \u003ccode\u003e\u003ca\u003e\u003c|\u003e\u003c/a\u003e\u003c/code\u003e one could pick one of two exceptions, and\n throw away the other,  and have \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e provide a generic exception,\n this avoids cases where \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e overrides a more informative exception\n and allows you to see all the different ways your computation has failed.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.PostgreSQL.Simple.Ok",
          "name": "Ok",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-Ok.html",
          "type": "module"
        },
        "index": {
          "description": "The Ok type is simple error handler basically equivalent to Either SomeException This type without the list was used to handle conversion errors in early versions of postgresql-simple One of the primary reasons why this type was introduced is that Either SomeException had not been provided an instance for Alternative and it would have been bad idea to provide an orphaned instance for commonly-used type and typeclass included in base Extending the failure case to list of SomeException enables more sensible Alternative instance definitions concatinates the list of exceptions when both cases fail and empty is defined as Errors Though one could pick one of two exceptions and throw away the other and have empty provide generic exception this avoids cases where empty overrides more informative exception and allows you to see all the different ways your computation has failed",
          "hierarchy": "Database PostgreSQL Simple Ok",
          "module": "Database.PostgreSQL.Simple.Ok",
          "name": "Ok",
          "package": "postgresql-simple",
          "partial": "Ok",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Ok.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea way to reify a list of exceptions into a single exception\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple.Ok",
          "name": "ManyErrors",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-Ok.html#ManyErrors",
          "type": "newtype"
        },
        "index": {
          "description": "way to reify list of exceptions into single exception",
          "hierarchy": "Database PostgreSQL Simple Ok",
          "module": "Database.PostgreSQL.Simple.Ok",
          "name": "ManyErrors",
          "package": "postgresql-simple",
          "partial": "Many Errors",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Ok.html#t:ManyErrors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Ok",
          "name": "Ok",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-Ok.html#Ok",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Ok",
          "module": "Database.PostgreSQL.Simple.Ok",
          "name": "Ok",
          "package": "postgresql-simple",
          "partial": "Ok",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Ok.html#t:Ok"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Ok",
          "name": "Errors",
          "package": "postgresql-simple",
          "signature": "Errors [SomeException]",
          "source": "src/Database-PostgreSQL-Simple-Ok.html#Ok",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Ok",
          "module": "Database.PostgreSQL.Simple.Ok",
          "name": "Errors",
          "normalized": "Errors[SomeException]",
          "package": "postgresql-simple",
          "partial": "Errors",
          "signature": "Errors[SomeException]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Ok.html#v:Errors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Ok",
          "name": "ManyErrors",
          "package": "postgresql-simple",
          "signature": "ManyErrors [SomeException]",
          "source": "src/Database-PostgreSQL-Simple-Ok.html#ManyErrors",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Ok",
          "module": "Database.PostgreSQL.Simple.Ok",
          "name": "ManyErrors",
          "normalized": "ManyErrors[SomeException]",
          "package": "postgresql-simple",
          "partial": "Many Errors",
          "signature": "ManyErrors[SomeException]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Ok.html#v:ManyErrors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Ok",
          "name": "Ok",
          "package": "postgresql-simple",
          "signature": "Ok !a",
          "source": "src/Database-PostgreSQL-Simple-Ok.html#Ok",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Ok",
          "module": "Database.PostgreSQL.Simple.Ok",
          "name": "Ok",
          "package": "postgresql-simple",
          "partial": "Ok",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Ok.html#v:Ok"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.SqlQQ",
          "name": "SqlQQ",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-SqlQQ.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple SqlQQ",
          "module": "Database.PostgreSQL.Simple.SqlQQ",
          "name": "SqlQQ",
          "package": "postgresql-simple",
          "partial": "Sql QQ",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-SqlQQ.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esql\u003c/a\u003e\u003c/code\u003e is a quasiquoter that eases the syntactic burden\n of writing big sql statements in Haskell source code.  For example:\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE QuasiQuotes #-}\n\n query conn [sql| SELECT column_a, column_b\n                    FROM table1 NATURAL JOIN table2\n                   WHERE ? \u003c= time AND time \u003c ?\n                     AND name LIKE ?\n                   ORDER BY size DESC\n                   LIMIT 100                        |]\n            (beginTime,endTime,string)\n\u003c/pre\u003e\u003cp\u003eThis quasiquoter attempts to mimimize whitespace;  otherwise the\n above query would consist of approximately half whitespace when sent\n to the database backend.  It also recognizes and strips out standard\n sql comments \u003ca\u003e--\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThe implementation of the whitespace reducer is currently incomplete.\n Thus it can mess up your syntax in cases where whitespace should be\n preserved as-is.  It does preserve whitespace inside standard SQL string\n literals.  But it can get confused by the non-standard PostgreSQL string\n literal syntax (which is the default setting in PostgreSQL 8 and below),\n the extended escape string syntax,  quoted identifiers,  and other similar\n constructs.\n\u003c/p\u003e\u003cp\u003eOf course, this caveat only applies to text written inside the SQL\n quasiquoter; whitespace reduction is a compile-time computation and\n thus will not touch the \u003ccode\u003estring\u003c/code\u003e parameter above,  which is a run-time\n value.\n\u003c/p\u003e\u003cp\u003eAlso note that this will not work if the substring \u003ccode\u003e|]\u003c/code\u003e is contained\n in the query.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple.SqlQQ",
          "name": "sql",
          "package": "postgresql-simple",
          "signature": "QuasiQuoter",
          "source": "src/Database-PostgreSQL-Simple-SqlQQ.html#sql",
          "type": "function"
        },
        "index": {
          "description": "sql is quasiquoter that eases the syntactic burden of writing big sql statements in Haskell source code For example LANGUAGE QuasiQuotes query conn sql SELECT column column FROM table1 NATURAL JOIN table2 WHERE time AND time AND name LIKE ORDER BY size DESC LIMIT beginTime endTime string This quasiquoter attempts to mimimize whitespace otherwise the above query would consist of approximately half whitespace when sent to the database backend It also recognizes and strips out standard sql comments The implementation of the whitespace reducer is currently incomplete Thus it can mess up your syntax in cases where whitespace should be preserved as-is It does preserve whitespace inside standard SQL string literals But it can get confused by the non-standard PostgreSQL string literal syntax which is the default setting in PostgreSQL and below the extended escape string syntax quoted identifiers and other similar constructs Of course this caveat only applies to text written inside the SQL quasiquoter whitespace reduction is compile-time computation and thus will not touch the string parameter above which is run-time value Also note that this will not work if the substring is contained in the query",
          "hierarchy": "Database PostgreSQL Simple SqlQQ",
          "module": "Database.PostgreSQL.Simple.SqlQQ",
          "name": "sql",
          "package": "postgresql-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-SqlQQ.html#v:sql"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Time.Internal",
          "name": "Internal",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-Time-Internal.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Time Internal",
          "module": "Database.PostgreSQL.Simple.Time.Internal",
          "name": "Internal",
          "package": "postgresql-simple",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Time-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Time.Internal",
          "name": "getDate",
          "package": "postgresql-simple",
          "signature": "Parser Date",
          "source": "src/Database-PostgreSQL-Simple-Time-Implementation.html#getDate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Time Internal",
          "module": "Database.PostgreSQL.Simple.Time.Internal",
          "name": "getDate",
          "package": "postgresql-simple",
          "partial": "Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Time-Internal.html#v:getDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Time.Internal",
          "name": "getDay",
          "package": "postgresql-simple",
          "signature": "Parser Day",
          "source": "src/Database-PostgreSQL-Simple-Time-Implementation.html#getDay",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Time Internal",
          "module": "Database.PostgreSQL.Simple.Time.Internal",
          "name": "getDay",
          "package": "postgresql-simple",
          "partial": "Day",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Time-Internal.html#v:getDay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Time.Internal",
          "name": "getLocalTime",
          "package": "postgresql-simple",
          "signature": "Parser LocalTime",
          "source": "src/Database-PostgreSQL-Simple-Time-Implementation.html#getLocalTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Time Internal",
          "module": "Database.PostgreSQL.Simple.Time.Internal",
          "name": "getLocalTime",
          "package": "postgresql-simple",
          "partial": "Local Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Time-Internal.html#v:getLocalTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Time.Internal",
          "name": "getLocalTimestamp",
          "package": "postgresql-simple",
          "signature": "Parser LocalTimestamp",
          "source": "src/Database-PostgreSQL-Simple-Time-Implementation.html#getLocalTimestamp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Time Internal",
          "module": "Database.PostgreSQL.Simple.Time.Internal",
          "name": "getLocalTimestamp",
          "package": "postgresql-simple",
          "partial": "Local Timestamp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Time-Internal.html#v:getLocalTimestamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Time.Internal",
          "name": "getTimeOfDay",
          "package": "postgresql-simple",
          "signature": "Parser TimeOfDay",
          "source": "src/Database-PostgreSQL-Simple-Time-Implementation.html#getTimeOfDay",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Time Internal",
          "module": "Database.PostgreSQL.Simple.Time.Internal",
          "name": "getTimeOfDay",
          "package": "postgresql-simple",
          "partial": "Time Of Day",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Time-Internal.html#v:getTimeOfDay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Time.Internal",
          "name": "getTimeZone",
          "package": "postgresql-simple",
          "signature": "Parser TimeZone",
          "source": "src/Database-PostgreSQL-Simple-Time-Implementation.html#getTimeZone",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Time Internal",
          "module": "Database.PostgreSQL.Simple.Time.Internal",
          "name": "getTimeZone",
          "package": "postgresql-simple",
          "partial": "Time Zone",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Time-Internal.html#v:getTimeZone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Time.Internal",
          "name": "getUTCTime",
          "package": "postgresql-simple",
          "signature": "Parser UTCTime",
          "source": "src/Database-PostgreSQL-Simple-Time-Implementation.html#getUTCTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Time Internal",
          "module": "Database.PostgreSQL.Simple.Time.Internal",
          "name": "getUTCTime",
          "package": "postgresql-simple",
          "partial": "UTCTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Time-Internal.html#v:getUTCTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Time.Internal",
          "name": "getUTCTimestamp",
          "package": "postgresql-simple",
          "signature": "Parser UTCTimestamp",
          "source": "src/Database-PostgreSQL-Simple-Time-Implementation.html#getUTCTimestamp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Time Internal",
          "module": "Database.PostgreSQL.Simple.Time.Internal",
          "name": "getUTCTimestamp",
          "package": "postgresql-simple",
          "partial": "UTCTimestamp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Time-Internal.html#v:getUTCTimestamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Time.Internal",
          "name": "getZonedTime",
          "package": "postgresql-simple",
          "signature": "Parser ZonedTime",
          "source": "src/Database-PostgreSQL-Simple-Time-Implementation.html#getZonedTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Time Internal",
          "module": "Database.PostgreSQL.Simple.Time.Internal",
          "name": "getZonedTime",
          "package": "postgresql-simple",
          "partial": "Zoned Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Time-Internal.html#v:getZonedTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Time.Internal",
          "name": "getZonedTimestamp",
          "package": "postgresql-simple",
          "signature": "Parser ZonedTimestamp",
          "source": "src/Database-PostgreSQL-Simple-Time-Implementation.html#getZonedTimestamp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Time Internal",
          "module": "Database.PostgreSQL.Simple.Time.Internal",
          "name": "getZonedTimestamp",
          "package": "postgresql-simple",
          "partial": "Zoned Timestamp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Time-Internal.html#v:getZonedTimestamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTime types that supports positive and negative infinity.   Also includes\n new time parsers and printers with better performance than GHC's time\n package.\n\u003c/p\u003e\u003cp\u003eThe parsers only understand the specific variant of ISO 8601 that\n PostgreSQL emits,  and the printers attempt to duplicate this syntax.\n Thus the \u003ccode\u003edatestyle\u003c/code\u003e parameter for the connection must be set to \u003ccode\u003eISO\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThese parsers and printers likely have problems and shortcomings.  Some\n that I know of:\n\u003c/p\u003e\u003cp\u003e1  \u003ccode\u003eTimestampTZ\u003c/code\u003es before a timezone-dependent point in time cannot be\n    parsed,  because the parsers can only handle timezone offsets of a\n    integer number of minutes.  However, PostgreSQL will include seconds\n    in the offset, depending on the historical time standards for the city\n    identifying the time zone.\n\u003c/p\u003e\u003cp\u003eThis boundary point often marks an event of some interest.  In the US\n    for example,  \u003ccode\u003etimestamptz\u003c/code\u003es before \u003ccode\u003e1883-Nov-18 12:00:00\u003c/code\u003e local time\n    cannot be parsed.  This is the moment Standard Railway Time went live.\n    Concretely, PostgreSQL will emit \u003ccode\u003e1883-11-18 12:03:57-04:56:02\u003c/code\u003e\n    instead of \u003ccode\u003e1883-11-18 11:59:59-05\u003c/code\u003e when the \u003ccode\u003etimezone\u003c/code\u003e parameter\n    for the connection is set to \u003ccode\u003eAmerica/New_York\u003c/code\u003e.\n\u003c/p\u003e\u003col\u003e\u003cli\u003e Dates and times surrounding \u003ccode\u003e1582-Feb-24\u003c/code\u003e,  the date the Gregorian\n    Calendar was introduced,  should be investigated for conversion errors.\n\u003c/li\u003e\u003cli\u003e Points in time Before Christ are not also not supported.  For example,\n    PostgreSQL will emit \u003ccode\u003e0045-01-01 BC\u003c/code\u003e for a value of a \u003ccode\u003edate\u003c/code\u003e type.\n    This is the year that the Julian Calendar was adopted.\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eHowever, it should be noted that the old parsers also had issues 1 and 3.\n Also, the new parsers now correctly handle time zones that include minutes\n in their offset.  Most notably, this includes all of India and parts of\n Canada and Australia.\n\u003c/p\u003e\u003cp\u003ePostgreSQL uses the zoneinfo database for its time zone information.\n You can read more about PostgreSQL's date and time types at\n \u003ca\u003ehttp://www.postgresql.org/docs/9.1/static/datatype-datetime.html\u003c/a\u003e,\n and zoneinfo at \u003ca\u003ehttp://en.wikipedia.org/wiki/Tz_database\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.PostgreSQL.Simple.Time",
          "name": "Time",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-Time.html",
          "type": "module"
        },
        "index": {
          "description": "Time types that supports positive and negative infinity Also includes new time parsers and printers with better performance than GHC time package The parsers only understand the specific variant of ISO that PostgreSQL emits and the printers attempt to duplicate this syntax Thus the datestyle parameter for the connection must be set to ISO These parsers and printers likely have problems and shortcomings Some that know of TimestampTZ before timezone-dependent point in time cannot be parsed because the parsers can only handle timezone offsets of integer number of minutes However PostgreSQL will include seconds in the offset depending on the historical time standards for the city identifying the time zone This boundary point often marks an event of some interest In the US for example timestamptz before Nov-18 local time cannot be parsed This is the moment Standard Railway Time went live Concretely PostgreSQL will emit instead of when the timezone parameter for the connection is set to America New York Dates and times surrounding Feb-24 the date the Gregorian Calendar was introduced should be investigated for conversion errors Points in time Before Christ are not also not supported For example PostgreSQL will emit BC for value of date type This is the year that the Julian Calendar was adopted However it should be noted that the old parsers also had issues and Also the new parsers now correctly handle time zones that include minutes in their offset Most notably this includes all of India and parts of Canada and Australia PostgreSQL uses the zoneinfo database for its time zone information You can read more about PostgreSQL date and time types at http www.postgresql.org docs static datatype-datetime.html and zoneinfo at http en.wikipedia.org wiki Tz database",
          "hierarchy": "Database PostgreSQL Simple Time",
          "module": "Database.PostgreSQL.Simple.Time",
          "name": "Time",
          "package": "postgresql-simple",
          "partial": "Time",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Time.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Time",
          "name": "Date",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-Time-Implementation.html#Date",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Time",
          "module": "Database.PostgreSQL.Simple.Time",
          "name": "Date",
          "package": "postgresql-simple",
          "partial": "Date",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Time.html#t:Date"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Time",
          "name": "LocalTimestamp",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-Time-Implementation.html#LocalTimestamp",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Time",
          "module": "Database.PostgreSQL.Simple.Time",
          "name": "LocalTimestamp",
          "package": "postgresql-simple",
          "partial": "Local Timestamp",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Time.html#t:LocalTimestamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Time",
          "name": "UTCTimestamp",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-Time-Implementation.html#UTCTimestamp",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Time",
          "module": "Database.PostgreSQL.Simple.Time",
          "name": "UTCTimestamp",
          "package": "postgresql-simple",
          "partial": "UTCTimestamp",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Time.html#t:UTCTimestamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Time",
          "name": "Unbounded",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-Time-Implementation.html#Unbounded",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Time",
          "module": "Database.PostgreSQL.Simple.Time",
          "name": "Unbounded",
          "package": "postgresql-simple",
          "partial": "Unbounded",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Time.html#t:Unbounded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Time",
          "name": "ZonedTimestamp",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-Time-Implementation.html#ZonedTimestamp",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Time",
          "module": "Database.PostgreSQL.Simple.Time",
          "name": "ZonedTimestamp",
          "package": "postgresql-simple",
          "partial": "Zoned Timestamp",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Time.html#t:ZonedTimestamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Time",
          "name": "Finite",
          "package": "postgresql-simple",
          "signature": "Finite !a",
          "source": "src/Database-PostgreSQL-Simple-Time-Implementation.html#Unbounded",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Time",
          "module": "Database.PostgreSQL.Simple.Time",
          "name": "Finite",
          "package": "postgresql-simple",
          "partial": "Finite",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Time.html#v:Finite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Time",
          "name": "NegInfinity",
          "package": "postgresql-simple",
          "signature": "NegInfinity",
          "source": "src/Database-PostgreSQL-Simple-Time-Implementation.html#Unbounded",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Time",
          "module": "Database.PostgreSQL.Simple.Time",
          "name": "NegInfinity",
          "package": "postgresql-simple",
          "partial": "Neg Infinity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Time.html#v:NegInfinity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Time",
          "name": "PosInfinity",
          "package": "postgresql-simple",
          "signature": "PosInfinity",
          "source": "src/Database-PostgreSQL-Simple-Time-Implementation.html#Unbounded",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Time",
          "module": "Database.PostgreSQL.Simple.Time",
          "name": "PosInfinity",
          "package": "postgresql-simple",
          "partial": "Pos Infinity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Time.html#v:PosInfinity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Time",
          "name": "dateToBuilder",
          "package": "postgresql-simple",
          "signature": "Date -\u003e Builder",
          "source": "src/Database-PostgreSQL-Simple-Time-Implementation.html#dateToBuilder",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Time",
          "module": "Database.PostgreSQL.Simple.Time",
          "name": "dateToBuilder",
          "normalized": "Date-\u003eBuilder",
          "package": "postgresql-simple",
          "partial": "To Builder",
          "signature": "Date-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Time.html#v:dateToBuilder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Time",
          "name": "dayToBuilder",
          "package": "postgresql-simple",
          "signature": "Day -\u003e Builder",
          "source": "src/Database-PostgreSQL-Simple-Time-Implementation.html#dayToBuilder",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Time",
          "module": "Database.PostgreSQL.Simple.Time",
          "name": "dayToBuilder",
          "normalized": "Day-\u003eBuilder",
          "package": "postgresql-simple",
          "partial": "To Builder",
          "signature": "Day-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Time.html#v:dayToBuilder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Time",
          "name": "localTimeToBuilder",
          "package": "postgresql-simple",
          "signature": "LocalTime -\u003e Builder",
          "source": "src/Database-PostgreSQL-Simple-Time-Implementation.html#localTimeToBuilder",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Time",
          "module": "Database.PostgreSQL.Simple.Time",
          "name": "localTimeToBuilder",
          "normalized": "LocalTime-\u003eBuilder",
          "package": "postgresql-simple",
          "partial": "Time To Builder",
          "signature": "LocalTime-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Time.html#v:localTimeToBuilder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Time",
          "name": "localTimestampToBuilder",
          "package": "postgresql-simple",
          "signature": "LocalTimestamp -\u003e Builder",
          "source": "src/Database-PostgreSQL-Simple-Time-Implementation.html#localTimestampToBuilder",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Time",
          "module": "Database.PostgreSQL.Simple.Time",
          "name": "localTimestampToBuilder",
          "normalized": "LocalTimestamp-\u003eBuilder",
          "package": "postgresql-simple",
          "partial": "Timestamp To Builder",
          "signature": "LocalTimestamp-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Time.html#v:localTimestampToBuilder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Time",
          "name": "parseDate",
          "package": "postgresql-simple",
          "signature": "ByteString -\u003e Either String Date",
          "source": "src/Database-PostgreSQL-Simple-Time-Implementation.html#parseDate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Time",
          "module": "Database.PostgreSQL.Simple.Time",
          "name": "parseDate",
          "normalized": "ByteString-\u003eEither String Date",
          "package": "postgresql-simple",
          "partial": "Date",
          "signature": "ByteString-\u003eEither String Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Time.html#v:parseDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Time",
          "name": "parseDay",
          "package": "postgresql-simple",
          "signature": "ByteString -\u003e Either String Day",
          "source": "src/Database-PostgreSQL-Simple-Time-Implementation.html#parseDay",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Time",
          "module": "Database.PostgreSQL.Simple.Time",
          "name": "parseDay",
          "normalized": "ByteString-\u003eEither String Day",
          "package": "postgresql-simple",
          "partial": "Day",
          "signature": "ByteString-\u003eEither String Day",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Time.html#v:parseDay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Time",
          "name": "parseLocalTime",
          "package": "postgresql-simple",
          "signature": "ByteString -\u003e Either String LocalTime",
          "source": "src/Database-PostgreSQL-Simple-Time-Implementation.html#parseLocalTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Time",
          "module": "Database.PostgreSQL.Simple.Time",
          "name": "parseLocalTime",
          "normalized": "ByteString-\u003eEither String LocalTime",
          "package": "postgresql-simple",
          "partial": "Local Time",
          "signature": "ByteString-\u003eEither String LocalTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Time.html#v:parseLocalTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Time",
          "name": "parseLocalTimestamp",
          "package": "postgresql-simple",
          "signature": "ByteString -\u003e Either String LocalTimestamp",
          "source": "src/Database-PostgreSQL-Simple-Time-Implementation.html#parseLocalTimestamp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Time",
          "module": "Database.PostgreSQL.Simple.Time",
          "name": "parseLocalTimestamp",
          "normalized": "ByteString-\u003eEither String LocalTimestamp",
          "package": "postgresql-simple",
          "partial": "Local Timestamp",
          "signature": "ByteString-\u003eEither String LocalTimestamp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Time.html#v:parseLocalTimestamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Time",
          "name": "parseTimeOfDay",
          "package": "postgresql-simple",
          "signature": "ByteString -\u003e Either String TimeOfDay",
          "source": "src/Database-PostgreSQL-Simple-Time-Implementation.html#parseTimeOfDay",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Time",
          "module": "Database.PostgreSQL.Simple.Time",
          "name": "parseTimeOfDay",
          "normalized": "ByteString-\u003eEither String TimeOfDay",
          "package": "postgresql-simple",
          "partial": "Time Of Day",
          "signature": "ByteString-\u003eEither String TimeOfDay",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Time.html#v:parseTimeOfDay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Time",
          "name": "parseUTCTime",
          "package": "postgresql-simple",
          "signature": "ByteString -\u003e Either String UTCTime",
          "source": "src/Database-PostgreSQL-Simple-Time-Implementation.html#parseUTCTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Time",
          "module": "Database.PostgreSQL.Simple.Time",
          "name": "parseUTCTime",
          "normalized": "ByteString-\u003eEither String UTCTime",
          "package": "postgresql-simple",
          "partial": "UTCTime",
          "signature": "ByteString-\u003eEither String UTCTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Time.html#v:parseUTCTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Time",
          "name": "parseUTCTimestamp",
          "package": "postgresql-simple",
          "signature": "ByteString -\u003e Either String UTCTimestamp",
          "source": "src/Database-PostgreSQL-Simple-Time-Implementation.html#parseUTCTimestamp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Time",
          "module": "Database.PostgreSQL.Simple.Time",
          "name": "parseUTCTimestamp",
          "normalized": "ByteString-\u003eEither String UTCTimestamp",
          "package": "postgresql-simple",
          "partial": "UTCTimestamp",
          "signature": "ByteString-\u003eEither String UTCTimestamp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Time.html#v:parseUTCTimestamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Time",
          "name": "parseZonedTime",
          "package": "postgresql-simple",
          "signature": "ByteString -\u003e Either String ZonedTime",
          "source": "src/Database-PostgreSQL-Simple-Time-Implementation.html#parseZonedTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Time",
          "module": "Database.PostgreSQL.Simple.Time",
          "name": "parseZonedTime",
          "normalized": "ByteString-\u003eEither String ZonedTime",
          "package": "postgresql-simple",
          "partial": "Zoned Time",
          "signature": "ByteString-\u003eEither String ZonedTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Time.html#v:parseZonedTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Time",
          "name": "parseZonedTimestamp",
          "package": "postgresql-simple",
          "signature": "ByteString -\u003e Either String ZonedTimestamp",
          "source": "src/Database-PostgreSQL-Simple-Time-Implementation.html#parseZonedTimestamp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Time",
          "module": "Database.PostgreSQL.Simple.Time",
          "name": "parseZonedTimestamp",
          "normalized": "ByteString-\u003eEither String ZonedTimestamp",
          "package": "postgresql-simple",
          "partial": "Zoned Timestamp",
          "signature": "ByteString-\u003eEither String ZonedTimestamp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Time.html#v:parseZonedTimestamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Time",
          "name": "timeOfDayToBuilder",
          "package": "postgresql-simple",
          "signature": "TimeOfDay -\u003e Builder",
          "source": "src/Database-PostgreSQL-Simple-Time-Implementation.html#timeOfDayToBuilder",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Time",
          "module": "Database.PostgreSQL.Simple.Time",
          "name": "timeOfDayToBuilder",
          "normalized": "TimeOfDay-\u003eBuilder",
          "package": "postgresql-simple",
          "partial": "Of Day To Builder",
          "signature": "TimeOfDay-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Time.html#v:timeOfDayToBuilder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Time",
          "name": "timeZoneToBuilder",
          "package": "postgresql-simple",
          "signature": "TimeZone -\u003e Builder",
          "source": "src/Database-PostgreSQL-Simple-Time-Implementation.html#timeZoneToBuilder",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Time",
          "module": "Database.PostgreSQL.Simple.Time",
          "name": "timeZoneToBuilder",
          "normalized": "TimeZone-\u003eBuilder",
          "package": "postgresql-simple",
          "partial": "Zone To Builder",
          "signature": "TimeZone-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Time.html#v:timeZoneToBuilder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Time",
          "name": "unboundedToBuilder",
          "package": "postgresql-simple",
          "signature": "(a -\u003e Builder) -\u003e Unbounded a -\u003e Builder",
          "source": "src/Database-PostgreSQL-Simple-Time-Implementation.html#unboundedToBuilder",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Time",
          "module": "Database.PostgreSQL.Simple.Time",
          "name": "unboundedToBuilder",
          "normalized": "(a-\u003eBuilder)-\u003eUnbounded a-\u003eBuilder",
          "package": "postgresql-simple",
          "partial": "To Builder",
          "signature": "(a-\u003eBuilder)-\u003eUnbounded a-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Time.html#v:unboundedToBuilder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Time",
          "name": "utcTimeToBuilder",
          "package": "postgresql-simple",
          "signature": "UTCTime -\u003e Builder",
          "source": "src/Database-PostgreSQL-Simple-Time-Implementation.html#utcTimeToBuilder",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Time",
          "module": "Database.PostgreSQL.Simple.Time",
          "name": "utcTimeToBuilder",
          "normalized": "UTCTime-\u003eBuilder",
          "package": "postgresql-simple",
          "partial": "Time To Builder",
          "signature": "UTCTime-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Time.html#v:utcTimeToBuilder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Time",
          "name": "utcTimestampToBuilder",
          "package": "postgresql-simple",
          "signature": "UTCTimestamp -\u003e Builder",
          "source": "src/Database-PostgreSQL-Simple-Time-Implementation.html#utcTimestampToBuilder",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Time",
          "module": "Database.PostgreSQL.Simple.Time",
          "name": "utcTimestampToBuilder",
          "normalized": "UTCTimestamp-\u003eBuilder",
          "package": "postgresql-simple",
          "partial": "Timestamp To Builder",
          "signature": "UTCTimestamp-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Time.html#v:utcTimestampToBuilder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Time",
          "name": "zonedTimeToBuilder",
          "package": "postgresql-simple",
          "signature": "ZonedTime -\u003e Builder",
          "source": "src/Database-PostgreSQL-Simple-Time-Implementation.html#zonedTimeToBuilder",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Time",
          "module": "Database.PostgreSQL.Simple.Time",
          "name": "zonedTimeToBuilder",
          "normalized": "ZonedTime-\u003eBuilder",
          "package": "postgresql-simple",
          "partial": "Time To Builder",
          "signature": "ZonedTime-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Time.html#v:zonedTimeToBuilder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Time",
          "name": "zonedTimestampToBuilder",
          "package": "postgresql-simple",
          "signature": "ZonedTimestamp -\u003e Builder",
          "source": "src/Database-PostgreSQL-Simple-Time-Implementation.html#zonedTimestampToBuilder",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Time",
          "module": "Database.PostgreSQL.Simple.Time",
          "name": "zonedTimestampToBuilder",
          "normalized": "ZonedTimestamp-\u003eBuilder",
          "package": "postgresql-simple",
          "partial": "Timestamp To Builder",
          "signature": "ZonedTimestamp-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Time.html#v:zonedTimestampToBuilder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eToField\u003c/a\u003e\u003c/code\u003e typeclass, for rendering a parameter to a SQL query.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.PostgreSQL.Simple.ToField",
          "name": "ToField",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-ToField.html",
          "type": "module"
        },
        "index": {
          "description": "The ToField typeclass for rendering parameter to SQL query",
          "hierarchy": "Database PostgreSQL Simple ToField",
          "module": "Database.PostgreSQL.Simple.ToField",
          "name": "ToField",
          "package": "postgresql-simple",
          "partial": "To Field",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-ToField.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow to render an element when substituting it into a query.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple.ToField",
          "name": "Action",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-ToField.html#Action",
          "type": "data"
        },
        "index": {
          "description": "How to render an element when substituting it into query",
          "hierarchy": "Database PostgreSQL Simple ToField",
          "module": "Database.PostgreSQL.Simple.ToField",
          "name": "Action",
          "package": "postgresql-simple",
          "partial": "Action",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-ToField.html#t:Action"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type that may be used as a single parameter to a SQL query.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple.ToField",
          "name": "ToField",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-ToField.html#ToField",
          "type": "class"
        },
        "index": {
          "description": "type that may be used as single parameter to SQL query",
          "hierarchy": "Database PostgreSQL Simple ToField",
          "module": "Database.PostgreSQL.Simple.ToField",
          "name": "ToField",
          "package": "postgresql-simple",
          "partial": "To Field",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-ToField.html#t:ToField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEscape and enclose in quotes before substituting. Use for all\n text-like types, and anything else that may contain unsafe\n characters when rendered.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple.ToField",
          "name": "Escape",
          "package": "postgresql-simple",
          "signature": "Escape ByteString",
          "source": "src/Database-PostgreSQL-Simple-ToField.html#Action",
          "type": "function"
        },
        "index": {
          "description": "Escape and enclose in quotes before substituting Use for all text-like types and anything else that may contain unsafe characters when rendered",
          "hierarchy": "Database PostgreSQL Simple ToField",
          "module": "Database.PostgreSQL.Simple.ToField",
          "name": "Escape",
          "package": "postgresql-simple",
          "partial": "Escape",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-ToField.html#v:Escape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEscape binary data for use as a \u003ccode\u003ebytea\u003c/code\u003e literal.  Include surrounding\n quotes.  This is used by the \u003ccode\u003e\u003ca\u003eBinary\u003c/a\u003e\u003c/code\u003e newtype wrapper.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple.ToField",
          "name": "EscapeByteA",
          "package": "postgresql-simple",
          "signature": "EscapeByteA ByteString",
          "source": "src/Database-PostgreSQL-Simple-ToField.html#Action",
          "type": "function"
        },
        "index": {
          "description": "Escape binary data for use as bytea literal Include surrounding quotes This is used by the Binary newtype wrapper",
          "hierarchy": "Database PostgreSQL Simple ToField",
          "module": "Database.PostgreSQL.Simple.ToField",
          "name": "EscapeByteA",
          "package": "postgresql-simple",
          "partial": "Escape Byte",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-ToField.html#v:EscapeByteA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConcatenate a series of rendering actions.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple.ToField",
          "name": "Many",
          "package": "postgresql-simple",
          "signature": "Many [Action]",
          "source": "src/Database-PostgreSQL-Simple-ToField.html#Action",
          "type": "function"
        },
        "index": {
          "description": "Concatenate series of rendering actions",
          "hierarchy": "Database PostgreSQL Simple ToField",
          "module": "Database.PostgreSQL.Simple.ToField",
          "name": "Many",
          "normalized": "Many[Action]",
          "package": "postgresql-simple",
          "partial": "Many",
          "signature": "Many[Action]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-ToField.html#v:Many"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender without escaping or quoting. Use for non-text types\n such as numbers, when you are \u003cem\u003ecertain\u003c/em\u003e that they will not\n introduce formatting vulnerabilities via use of characters such\n as spaces or \"\u003ccode\u003e'\u003c/code\u003e\".\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple.ToField",
          "name": "Plain",
          "package": "postgresql-simple",
          "signature": "Plain Builder",
          "source": "src/Database-PostgreSQL-Simple-ToField.html#Action",
          "type": "function"
        },
        "index": {
          "description": "Render without escaping or quoting Use for non-text types such as numbers when you are certain that they will not introduce formatting vulnerabilities via use of characters such as spaces or",
          "hierarchy": "Database PostgreSQL Simple ToField",
          "module": "Database.PostgreSQL.Simple.ToField",
          "name": "Plain",
          "package": "postgresql-simple",
          "partial": "Plain",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-ToField.html#v:Plain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSurround a string with single-quote characters: \"\u003ccode\u003e'\u003c/code\u003e\"\n\u003c/p\u003e\u003cp\u003eThis function \u003cem\u003edoes not\u003c/em\u003e perform any other escaping.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple.ToField",
          "name": "inQuotes",
          "package": "postgresql-simple",
          "signature": "Builder -\u003e Builder",
          "source": "src/Database-PostgreSQL-Simple-ToField.html#inQuotes",
          "type": "function"
        },
        "index": {
          "description": "Surround string with single-quote characters This function does not perform any other escaping",
          "hierarchy": "Database PostgreSQL Simple ToField",
          "module": "Database.PostgreSQL.Simple.ToField",
          "name": "inQuotes",
          "normalized": "Builder-\u003eBuilder",
          "package": "postgresql-simple",
          "partial": "Quotes",
          "signature": "Builder-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-ToField.html#v:inQuotes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrepare a value for substitution into a query string.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple.ToField",
          "name": "toField",
          "package": "postgresql-simple",
          "signature": "a -\u003e Action",
          "source": "src/Database-PostgreSQL-Simple-ToField.html#toField",
          "type": "method"
        },
        "index": {
          "description": "Prepare value for substitution into query string",
          "hierarchy": "Database PostgreSQL Simple ToField",
          "module": "Database.PostgreSQL.Simple.ToField",
          "name": "toField",
          "normalized": "a-\u003eAction",
          "package": "postgresql-simple",
          "partial": "Field",
          "signature": "a-\u003eAction",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-ToField.html#v:toField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a Haskell value to a JSON \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e using\n \u003ccode\u003e\u003ca\u003etoJSON\u003c/a\u003e\u003c/code\u003e and convert that to a field using \u003ccode\u003e\u003ca\u003etoField\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis can be used as the default implementation for the \u003ccode\u003e\u003ca\u003etoField\u003c/a\u003e\u003c/code\u003e\n method for Haskell types that have a JSON representation in\n PostgreSQL.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple.ToField",
          "name": "toJSONField",
          "package": "postgresql-simple",
          "signature": "a -\u003e Action",
          "source": "src/Database-PostgreSQL-Simple-ToField.html#toJSONField",
          "type": "function"
        },
        "index": {
          "description": "Convert Haskell value to JSON Value using toJSON and convert that to field using toField This can be used as the default implementation for the toField method for Haskell types that have JSON representation in PostgreSQL",
          "hierarchy": "Database PostgreSQL Simple ToField",
          "module": "Database.PostgreSQL.Simple.ToField",
          "name": "toJSONField",
          "normalized": "a-\u003eAction",
          "package": "postgresql-simple",
          "partial": "JSONField",
          "signature": "a-\u003eAction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-ToField.html#v:toJSONField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eToRow\u003c/a\u003e\u003c/code\u003e typeclass, for rendering a collection of\n parameters to a SQL query.\n\u003c/p\u003e\u003cp\u003ePredefined instances are provided for tuples containing up to ten\n elements.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.PostgreSQL.Simple.ToRow",
          "name": "ToRow",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-ToRow.html",
          "type": "module"
        },
        "index": {
          "description": "The ToRow typeclass for rendering collection of parameters to SQL query Predefined instances are provided for tuples containing up to ten elements",
          "hierarchy": "Database PostgreSQL Simple ToRow",
          "module": "Database.PostgreSQL.Simple.ToRow",
          "name": "ToRow",
          "package": "postgresql-simple",
          "partial": "To Row",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-ToRow.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA collection type that can be turned into a list of rendering\n \u003ccode\u003e\u003ca\u003eAction\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003cp\u003eInstances should use the \u003ccode\u003erender\u003c/code\u003e method of the \u003ccode\u003eParam\u003c/code\u003e class\n to perform conversion of each element of the collection.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple.ToRow",
          "name": "ToRow",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-ToRow.html#ToRow",
          "type": "class"
        },
        "index": {
          "description": "collection type that can be turned into list of rendering Action Instances should use the render method of the Param class to perform conversion of each element of the collection",
          "hierarchy": "Database PostgreSQL Simple ToRow",
          "module": "Database.PostgreSQL.Simple.ToRow",
          "name": "ToRow",
          "package": "postgresql-simple",
          "partial": "To Row",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-ToRow.html#t:ToRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eToField a collection of values.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple.ToRow",
          "name": "toRow",
          "package": "postgresql-simple",
          "signature": "a -\u003e [Action]",
          "source": "src/Database-PostgreSQL-Simple-ToRow.html#toRow",
          "type": "method"
        },
        "index": {
          "description": "ToField collection of values",
          "hierarchy": "Database PostgreSQL Simple ToRow",
          "module": "Database.PostgreSQL.Simple.ToRow",
          "name": "toRow",
          "normalized": "a-\u003e[Action]",
          "package": "postgresql-simple",
          "partial": "Row",
          "signature": "a-\u003e[Action]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-ToRow.html#v:toRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Transaction",
          "name": "Transaction",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-Transaction.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Transaction",
          "module": "Database.PostgreSQL.Simple.Transaction",
          "name": "Transaction",
          "package": "postgresql-simple",
          "partial": "Transaction",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Transaction.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOf the four isolation levels defined by the SQL standard,\n these are the three levels distinguished by PostgreSQL as of version 9.0.\n See \u003ca\u003ehttp://www.postgresql.org/docs/9.1/static/transaction-iso.html\u003c/a\u003e\n for more information.   Note that prior to PostgreSQL 9.0, \u003ccode\u003e\u003ca\u003eRepeatableRead\u003c/a\u003e\u003c/code\u003e\n was equivalent to \u003ccode\u003e\u003ca\u003eSerializable\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple.Transaction",
          "name": "IsolationLevel",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-Transaction.html#IsolationLevel",
          "type": "data"
        },
        "index": {
          "description": "Of the four isolation levels defined by the SQL standard these are the three levels distinguished by PostgreSQL as of version See http www.postgresql.org docs static transaction-iso.html for more information Note that prior to PostgreSQL RepeatableRead was equivalent to Serializable",
          "hierarchy": "Database PostgreSQL Simple Transaction",
          "module": "Database.PostgreSQL.Simple.Transaction",
          "name": "IsolationLevel",
          "package": "postgresql-simple",
          "partial": "Isolation Level",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Transaction.html#t:IsolationLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Transaction",
          "name": "ReadWriteMode",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-Transaction.html#ReadWriteMode",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Transaction",
          "module": "Database.PostgreSQL.Simple.Transaction",
          "name": "ReadWriteMode",
          "package": "postgresql-simple",
          "partial": "Read Write Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Transaction.html#t:ReadWriteMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Transaction",
          "name": "Savepoint",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-Types.html#Savepoint",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Transaction",
          "module": "Database.PostgreSQL.Simple.Transaction",
          "name": "Savepoint",
          "package": "postgresql-simple",
          "partial": "Savepoint",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Transaction.html#t:Savepoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Transaction",
          "name": "TransactionMode",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-Transaction.html#TransactionMode",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Transaction",
          "module": "Database.PostgreSQL.Simple.Transaction",
          "name": "TransactionMode",
          "package": "postgresql-simple",
          "partial": "Transaction Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Transaction.html#t:TransactionMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe isolation level will be taken from\n   PostgreSQL's per-connection\n   \u003ccode\u003edefault_transaction_isolation\u003c/code\u003e variable,\n   which is initialized according to the\n   server's config.  The default configuration\n   is \u003ccode\u003e\u003ca\u003eReadCommitted\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple.Transaction",
          "name": "DefaultIsolationLevel",
          "package": "postgresql-simple",
          "signature": "DefaultIsolationLevel",
          "source": "src/Database-PostgreSQL-Simple-Transaction.html#IsolationLevel",
          "type": "function"
        },
        "index": {
          "description": "the isolation level will be taken from PostgreSQL per-connection default transaction isolation variable which is initialized according to the server config The default configuration is ReadCommitted",
          "hierarchy": "Database PostgreSQL Simple Transaction",
          "module": "Database.PostgreSQL.Simple.Transaction",
          "name": "DefaultIsolationLevel",
          "package": "postgresql-simple",
          "partial": "Default Isolation Level",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Transaction.html#v:DefaultIsolationLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe read-write mode will be taken from\n   PostgreSQL's per-connection\n   \u003ccode\u003edefault_transaction_read_only\u003c/code\u003e variable,\n   which is initialized according to the\n   server's config.  The default configuration\n   is \u003ccode\u003e\u003ca\u003eReadWrite\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple.Transaction",
          "name": "DefaultReadWriteMode",
          "package": "postgresql-simple",
          "signature": "DefaultReadWriteMode",
          "source": "src/Database-PostgreSQL-Simple-Transaction.html#ReadWriteMode",
          "type": "function"
        },
        "index": {
          "description": "the read-write mode will be taken from PostgreSQL per-connection default transaction read only variable which is initialized according to the server config The default configuration is ReadWrite",
          "hierarchy": "Database PostgreSQL Simple Transaction",
          "module": "Database.PostgreSQL.Simple.Transaction",
          "name": "DefaultReadWriteMode",
          "package": "postgresql-simple",
          "partial": "Default Read Write Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Transaction.html#v:DefaultReadWriteMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Transaction",
          "name": "ReadCommitted",
          "package": "postgresql-simple",
          "signature": "ReadCommitted",
          "source": "src/Database-PostgreSQL-Simple-Transaction.html#IsolationLevel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Transaction",
          "module": "Database.PostgreSQL.Simple.Transaction",
          "name": "ReadCommitted",
          "package": "postgresql-simple",
          "partial": "Read Committed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Transaction.html#v:ReadCommitted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Transaction",
          "name": "ReadOnly",
          "package": "postgresql-simple",
          "signature": "ReadOnly",
          "source": "src/Database-PostgreSQL-Simple-Transaction.html#ReadWriteMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Transaction",
          "module": "Database.PostgreSQL.Simple.Transaction",
          "name": "ReadOnly",
          "package": "postgresql-simple",
          "partial": "Read Only",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Transaction.html#v:ReadOnly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Transaction",
          "name": "ReadWrite",
          "package": "postgresql-simple",
          "signature": "ReadWrite",
          "source": "src/Database-PostgreSQL-Simple-Transaction.html#ReadWriteMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Transaction",
          "module": "Database.PostgreSQL.Simple.Transaction",
          "name": "ReadWrite",
          "package": "postgresql-simple",
          "partial": "Read Write",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Transaction.html#v:ReadWrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Transaction",
          "name": "RepeatableRead",
          "package": "postgresql-simple",
          "signature": "RepeatableRead",
          "source": "src/Database-PostgreSQL-Simple-Transaction.html#IsolationLevel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Transaction",
          "module": "Database.PostgreSQL.Simple.Transaction",
          "name": "RepeatableRead",
          "package": "postgresql-simple",
          "partial": "Repeatable Read",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Transaction.html#v:RepeatableRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Transaction",
          "name": "Serializable",
          "package": "postgresql-simple",
          "signature": "Serializable",
          "source": "src/Database-PostgreSQL-Simple-Transaction.html#IsolationLevel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Transaction",
          "module": "Database.PostgreSQL.Simple.Transaction",
          "name": "Serializable",
          "package": "postgresql-simple",
          "partial": "Serializable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Transaction.html#v:Serializable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Transaction",
          "name": "TransactionMode",
          "package": "postgresql-simple",
          "signature": "TransactionMode",
          "source": "src/Database-PostgreSQL-Simple-Transaction.html#TransactionMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Transaction",
          "module": "Database.PostgreSQL.Simple.Transaction",
          "name": "TransactionMode",
          "package": "postgresql-simple",
          "partial": "Transaction Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Transaction.html#v:TransactionMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBegin a transaction.\n\u003c/p\u003e",
          "module": "[\"Database.PostgreSQL.Simple.Transaction\",\"Database.PostgreSQL.Simple\"]",
          "name": "begin",
          "package": "postgresql-simple",
          "signature": "Connection -\u003e IO ()",
          "source": "src/Database-PostgreSQL-Simple-Transaction.html#begin",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Transaction.html#v:begin\",\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:begin\"]"
        },
        "index": {
          "description": "Begin transaction",
          "hierarchy": "Database PostgreSQL Simple Transaction",
          "module": "Database.PostgreSQL.Simple.Transaction",
          "name": "begin",
          "normalized": "Connection-\u003eIO()",
          "package": "postgresql-simple",
          "signature": "Connection-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Transaction.html#v:begin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBegin a transaction with a given isolation level\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple.Transaction",
          "name": "beginLevel",
          "package": "postgresql-simple",
          "signature": "IsolationLevel -\u003e Connection -\u003e IO ()",
          "source": "src/Database-PostgreSQL-Simple-Transaction.html#beginLevel",
          "type": "function"
        },
        "index": {
          "description": "Begin transaction with given isolation level",
          "hierarchy": "Database PostgreSQL Simple Transaction",
          "module": "Database.PostgreSQL.Simple.Transaction",
          "name": "beginLevel",
          "normalized": "IsolationLevel-\u003eConnection-\u003eIO()",
          "package": "postgresql-simple",
          "partial": "Level",
          "signature": "IsolationLevel-\u003eConnection-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Transaction.html#v:beginLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBegin a transaction with a given transaction mode\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple.Transaction",
          "name": "beginMode",
          "package": "postgresql-simple",
          "signature": "TransactionMode -\u003e Connection -\u003e IO ()",
          "source": "src/Database-PostgreSQL-Simple-Transaction.html#beginMode",
          "type": "function"
        },
        "index": {
          "description": "Begin transaction with given transaction mode",
          "hierarchy": "Database PostgreSQL Simple Transaction",
          "module": "Database.PostgreSQL.Simple.Transaction",
          "name": "beginMode",
          "normalized": "TransactionMode-\u003eConnection-\u003eIO()",
          "package": "postgresql-simple",
          "partial": "Mode",
          "signature": "TransactionMode-\u003eConnection-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Transaction.html#v:beginMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCommit a transaction.\n\u003c/p\u003e",
          "module": "[\"Database.PostgreSQL.Simple.Transaction\",\"Database.PostgreSQL.Simple\"]",
          "name": "commit",
          "package": "postgresql-simple",
          "signature": "Connection -\u003e IO ()",
          "source": "src/Database-PostgreSQL-Simple-Transaction.html#commit",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Transaction.html#v:commit\",\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:commit\"]"
        },
        "index": {
          "description": "Commit transaction",
          "hierarchy": "Database PostgreSQL Simple Transaction",
          "module": "Database.PostgreSQL.Simple.Transaction",
          "name": "commit",
          "normalized": "Connection-\u003eIO()",
          "package": "postgresql-simple",
          "signature": "Connection-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Transaction.html#v:commit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Transaction",
          "name": "defaultIsolationLevel",
          "package": "postgresql-simple",
          "signature": "IsolationLevel",
          "source": "src/Database-PostgreSQL-Simple-Transaction.html#defaultIsolationLevel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Transaction",
          "module": "Database.PostgreSQL.Simple.Transaction",
          "name": "defaultIsolationLevel",
          "package": "postgresql-simple",
          "partial": "Isolation Level",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Transaction.html#v:defaultIsolationLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Transaction",
          "name": "defaultReadWriteMode",
          "package": "postgresql-simple",
          "signature": "ReadWriteMode",
          "source": "src/Database-PostgreSQL-Simple-Transaction.html#defaultReadWriteMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Transaction",
          "module": "Database.PostgreSQL.Simple.Transaction",
          "name": "defaultReadWriteMode",
          "package": "postgresql-simple",
          "partial": "Read Write Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Transaction.html#v:defaultReadWriteMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Transaction",
          "name": "defaultTransactionMode",
          "package": "postgresql-simple",
          "signature": "TransactionMode",
          "source": "src/Database-PostgreSQL-Simple-Transaction.html#defaultTransactionMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Transaction",
          "module": "Database.PostgreSQL.Simple.Transaction",
          "name": "defaultTransactionMode",
          "package": "postgresql-simple",
          "partial": "Transaction Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Transaction.html#v:defaultTransactionMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Transaction",
          "name": "isolationLevel",
          "package": "postgresql-simple",
          "signature": "IsolationLevel",
          "source": "src/Database-PostgreSQL-Simple-Transaction.html#TransactionMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Transaction",
          "module": "Database.PostgreSQL.Simple.Transaction",
          "name": "isolationLevel",
          "package": "postgresql-simple",
          "partial": "Level",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Transaction.html#v:isolationLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new savepoint.  This may only be used inside of a transaction.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple.Transaction",
          "name": "newSavepoint",
          "package": "postgresql-simple",
          "signature": "Connection -\u003e IO Savepoint",
          "source": "src/Database-PostgreSQL-Simple-Transaction.html#newSavepoint",
          "type": "function"
        },
        "index": {
          "description": "Create new savepoint This may only be used inside of transaction",
          "hierarchy": "Database PostgreSQL Simple Transaction",
          "module": "Database.PostgreSQL.Simple.Transaction",
          "name": "newSavepoint",
          "normalized": "Connection-\u003eIO Savepoint",
          "package": "postgresql-simple",
          "partial": "Savepoint",
          "signature": "Connection-\u003eIO Savepoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Transaction.html#v:newSavepoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Transaction",
          "name": "readWriteMode",
          "package": "postgresql-simple",
          "signature": "ReadWriteMode",
          "source": "src/Database-PostgreSQL-Simple-Transaction.html#TransactionMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Transaction",
          "module": "Database.PostgreSQL.Simple.Transaction",
          "name": "readWriteMode",
          "package": "postgresql-simple",
          "partial": "Write Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Transaction.html#v:readWriteMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDestroy a savepoint, but retain its effects.\n\u003c/p\u003e\u003cp\u003eWarning: this will throw a \u003ccode\u003e\u003ca\u003eSqlError\u003c/a\u003e\u003c/code\u003e matching \u003ccode\u003e\u003ca\u003eisFailedTransactionError\u003c/a\u003e\u003c/code\u003e if\n the transaction is aborted due to an error.  \u003ccode\u003e\u003ca\u003ecommit\u003c/a\u003e\u003c/code\u003e would merely warn and\n roll back.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple.Transaction",
          "name": "releaseSavepoint",
          "package": "postgresql-simple",
          "signature": "Connection -\u003e Savepoint -\u003e IO ()",
          "source": "src/Database-PostgreSQL-Simple-Transaction.html#releaseSavepoint",
          "type": "function"
        },
        "index": {
          "description": "Destroy savepoint but retain its effects Warning this will throw SqlError matching isFailedTransactionError if the transaction is aborted due to an error commit would merely warn and roll back",
          "hierarchy": "Database PostgreSQL Simple Transaction",
          "module": "Database.PostgreSQL.Simple.Transaction",
          "name": "releaseSavepoint",
          "normalized": "Connection-\u003eSavepoint-\u003eIO()",
          "package": "postgresql-simple",
          "partial": "Savepoint",
          "signature": "Connection-\u003eSavepoint-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Transaction.html#v:releaseSavepoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRollback a transaction.\n\u003c/p\u003e",
          "module": "[\"Database.PostgreSQL.Simple.Transaction\",\"Database.PostgreSQL.Simple\"]",
          "name": "rollback",
          "package": "postgresql-simple",
          "signature": "Connection -\u003e IO ()",
          "source": "src/Database-PostgreSQL-Simple-Transaction.html#rollback",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Transaction.html#v:rollback\",\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:rollback\"]"
        },
        "index": {
          "description": "Rollback transaction",
          "hierarchy": "Database PostgreSQL Simple Transaction",
          "module": "Database.PostgreSQL.Simple.Transaction",
          "name": "rollback",
          "normalized": "Connection-\u003eIO()",
          "package": "postgresql-simple",
          "signature": "Connection-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Transaction.html#v:rollback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRoll back to a savepoint and release it.  This is like calling\n \u003ccode\u003e\u003ca\u003erollbackToSavepoint\u003c/a\u003e\u003c/code\u003e followed by \u003ccode\u003e\u003ca\u003ereleaseSavepoint\u003c/a\u003e\u003c/code\u003e, but avoids a\n round trip to the database server.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple.Transaction",
          "name": "rollbackToAndReleaseSavepoint",
          "package": "postgresql-simple",
          "signature": "Connection -\u003e Savepoint -\u003e IO ()",
          "source": "src/Database-PostgreSQL-Simple-Transaction.html#rollbackToAndReleaseSavepoint",
          "type": "function"
        },
        "index": {
          "description": "Roll back to savepoint and release it This is like calling rollbackToSavepoint followed by releaseSavepoint but avoids round trip to the database server",
          "hierarchy": "Database PostgreSQL Simple Transaction",
          "module": "Database.PostgreSQL.Simple.Transaction",
          "name": "rollbackToAndReleaseSavepoint",
          "normalized": "Connection-\u003eSavepoint-\u003eIO()",
          "package": "postgresql-simple",
          "partial": "To And Release Savepoint",
          "signature": "Connection-\u003eSavepoint-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Transaction.html#v:rollbackToAndReleaseSavepoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRoll back to a savepoint.  This will not release the savepoint.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple.Transaction",
          "name": "rollbackToSavepoint",
          "package": "postgresql-simple",
          "signature": "Connection -\u003e Savepoint -\u003e IO ()",
          "source": "src/Database-PostgreSQL-Simple-Transaction.html#rollbackToSavepoint",
          "type": "function"
        },
        "index": {
          "description": "Roll back to savepoint This will not release the savepoint",
          "hierarchy": "Database PostgreSQL Simple Transaction",
          "module": "Database.PostgreSQL.Simple.Transaction",
          "name": "rollbackToSavepoint",
          "normalized": "Connection-\u003eSavepoint-\u003eIO()",
          "package": "postgresql-simple",
          "partial": "To Savepoint",
          "signature": "Connection-\u003eSavepoint-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Transaction.html#v:rollbackToSavepoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a savepoint, and roll back to it if an error occurs.  This may only\n be used inside of a transaction, and provides a sort of\n \"nested transaction\".\n\u003c/p\u003e\u003cp\u003eSee \u003ca\u003ehttp://www.postgresql.org/docs/current/static/sql-savepoint.html\u003c/a\u003e\n\u003c/p\u003e",
          "module": "[\"Database.PostgreSQL.Simple.Transaction\",\"Database.PostgreSQL.Simple\"]",
          "name": "withSavepoint",
          "package": "postgresql-simple",
          "signature": "Connection -\u003e IO a -\u003e IO a",
          "source": "src/Database-PostgreSQL-Simple-Transaction.html#withSavepoint",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Transaction.html#v:withSavepoint\",\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:withSavepoint\"]"
        },
        "index": {
          "description": "Create savepoint and roll back to it if an error occurs This may only be used inside of transaction and provides sort of nested transaction See http www.postgresql.org docs current static sql-savepoint.html",
          "hierarchy": "Database PostgreSQL Simple Transaction",
          "module": "Database.PostgreSQL.Simple.Transaction",
          "name": "withSavepoint",
          "normalized": "Connection-\u003eIO a-\u003eIO a",
          "package": "postgresql-simple",
          "partial": "Savepoint",
          "signature": "Connection-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Transaction.html#v:withSavepoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute an action inside a SQL transaction.\n\u003c/p\u003e\u003cp\u003eThis function initiates a transaction with a \"\u003ccode\u003ebegin\n transaction\u003c/code\u003e\" statement, then executes the supplied action.  If\n the action succeeds, the transaction will be completed with\n \u003ccode\u003e\u003ca\u003ecommit\u003c/a\u003e\u003c/code\u003e before this function returns.\n\u003c/p\u003e\u003cp\u003eIf the action throws \u003cem\u003eany\u003c/em\u003e kind of exception (not just a\n PostgreSQL-related exception), the transaction will be rolled back using\n \u003ccode\u003e\u003ca\u003erollback\u003c/a\u003e\u003c/code\u003e, then the exception will be rethrown.\n\u003c/p\u003e\u003cp\u003eFor nesting transactions, see \u003ccode\u003e\u003ca\u003ewithSavepoint\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Database.PostgreSQL.Simple.Transaction\",\"Database.PostgreSQL.Simple\"]",
          "name": "withTransaction",
          "package": "postgresql-simple",
          "signature": "Connection -\u003e IO a -\u003e IO a",
          "source": "src/Database-PostgreSQL-Simple-Transaction.html#withTransaction",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Transaction.html#v:withTransaction\",\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:withTransaction\"]"
        },
        "index": {
          "description": "Execute an action inside SQL transaction This function initiates transaction with begin transaction statement then executes the supplied action If the action succeeds the transaction will be completed with commit before this function returns If the action throws any kind of exception not just PostgreSQL-related exception the transaction will be rolled back using rollback then the exception will be rethrown For nesting transactions see withSavepoint",
          "hierarchy": "Database PostgreSQL Simple Transaction",
          "module": "Database.PostgreSQL.Simple.Transaction",
          "name": "withTransaction",
          "normalized": "Connection-\u003eIO a-\u003eIO a",
          "package": "postgresql-simple",
          "partial": "Transaction",
          "signature": "Connection-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Transaction.html#v:withTransaction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute an action inside a SQL transaction with a given isolation level.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple.Transaction",
          "name": "withTransactionLevel",
          "package": "postgresql-simple",
          "signature": "IsolationLevel -\u003e Connection -\u003e IO a -\u003e IO a",
          "source": "src/Database-PostgreSQL-Simple-Transaction.html#withTransactionLevel",
          "type": "function"
        },
        "index": {
          "description": "Execute an action inside SQL transaction with given isolation level",
          "hierarchy": "Database PostgreSQL Simple Transaction",
          "module": "Database.PostgreSQL.Simple.Transaction",
          "name": "withTransactionLevel",
          "normalized": "IsolationLevel-\u003eConnection-\u003eIO a-\u003eIO a",
          "package": "postgresql-simple",
          "partial": "Transaction Level",
          "signature": "IsolationLevel-\u003eConnection-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Transaction.html#v:withTransactionLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute an action inside a SQL transaction with a given transaction mode.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple.Transaction",
          "name": "withTransactionMode",
          "package": "postgresql-simple",
          "signature": "TransactionMode -\u003e Connection -\u003e IO a -\u003e IO a",
          "source": "src/Database-PostgreSQL-Simple-Transaction.html#withTransactionMode",
          "type": "function"
        },
        "index": {
          "description": "Execute an action inside SQL transaction with given transaction mode",
          "hierarchy": "Database PostgreSQL Simple Transaction",
          "module": "Database.PostgreSQL.Simple.Transaction",
          "name": "withTransactionMode",
          "normalized": "TransactionMode-\u003eConnection-\u003eIO a-\u003eIO a",
          "package": "postgresql-simple",
          "partial": "Transaction Mode",
          "signature": "TransactionMode-\u003eConnection-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Transaction.html#v:withTransactionMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ewithTransactionMode\u003c/a\u003e\u003c/code\u003e, but also takes a custom callback to\n determine if a transaction should be retried if an \u003ccode\u003e\u003ca\u003eSqlError\u003c/a\u003e\u003c/code\u003e occurs.\n If the callback returns True, then the transaction will be retried.\n If the callback returns False, or an exception other than an \u003ccode\u003e\u003ca\u003eSqlError\u003c/a\u003e\u003c/code\u003e\n occurs then the transaction will be rolled back and the exception rethrown.\n\u003c/p\u003e\u003cp\u003eThis is used to implement \u003ccode\u003e\u003ca\u003ewithTransactionSerializable\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple.Transaction",
          "name": "withTransactionModeRetry",
          "package": "postgresql-simple",
          "signature": "TransactionMode -\u003e (SqlError -\u003e Bool) -\u003e Connection -\u003e IO a -\u003e IO a",
          "source": "src/Database-PostgreSQL-Simple-Transaction.html#withTransactionModeRetry",
          "type": "function"
        },
        "index": {
          "description": "Like withTransactionMode but also takes custom callback to determine if transaction should be retried if an SqlError occurs If the callback returns True then the transaction will be retried If the callback returns False or an exception other than an SqlError occurs then the transaction will be rolled back and the exception rethrown This is used to implement withTransactionSerializable",
          "hierarchy": "Database PostgreSQL Simple Transaction",
          "module": "Database.PostgreSQL.Simple.Transaction",
          "name": "withTransactionModeRetry",
          "normalized": "TransactionMode-\u003e(SqlError-\u003eBool)-\u003eConnection-\u003eIO a-\u003eIO a",
          "package": "postgresql-simple",
          "partial": "Transaction Mode Retry",
          "signature": "TransactionMode-\u003e(SqlError-\u003eBool)-\u003eConnection-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Transaction.html#v:withTransactionModeRetry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute an action inside of a \u003ccode\u003e\u003ca\u003eSerializable\u003c/a\u003e\u003c/code\u003e transaction.  If a\n serialization failure occurs, roll back the transaction and try again.\n Be warned that this may execute the IO action multiple times.\n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eSerializable\u003c/a\u003e\u003c/code\u003e transaction creates the illusion that your program has\n exclusive access to the database.  This means that, even in a concurrent\n setting, you can perform queries in sequence without having to worry about\n what might happen between one statement and the next.\n\u003c/p\u003e\u003cp\u003eThink of it as STM, but without \u003ccode\u003eretry\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple.Transaction",
          "name": "withTransactionSerializable",
          "package": "postgresql-simple",
          "signature": "Connection -\u003e IO a -\u003e IO a",
          "source": "src/Database-PostgreSQL-Simple-Transaction.html#withTransactionSerializable",
          "type": "function"
        },
        "index": {
          "description": "Execute an action inside of Serializable transaction If serialization failure occurs roll back the transaction and try again Be warned that this may execute the IO action multiple times Serializable transaction creates the illusion that your program has exclusive access to the database This means that even in concurrent setting you can perform queries in sequence without having to worry about what might happen between one statement and the next Think of it as STM but without retry",
          "hierarchy": "Database PostgreSQL Simple Transaction",
          "module": "Database.PostgreSQL.Simple.Transaction",
          "name": "withTransactionSerializable",
          "normalized": "Connection-\u003eIO a-\u003eIO a",
          "package": "postgresql-simple",
          "partial": "Transaction Serializable",
          "signature": "Connection-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Transaction.html#v:withTransactionSerializable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA Template Haskell macro for efficiently checking membership in\n a set of type oids.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.PostgreSQL.Simple.TypeInfo.Macro",
          "name": "Macro",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-TypeInfo-Macro.html",
          "type": "module"
        },
        "index": {
          "description": "Template Haskell macro for efficiently checking membership in set of type oids",
          "hierarchy": "Database PostgreSQL Simple TypeInfo Macro",
          "module": "Database.PostgreSQL.Simple.TypeInfo.Macro",
          "name": "Macro",
          "package": "postgresql-simple",
          "partial": "Macro",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Macro.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLiterally substitute the \u003ccode\u003e\u003ca\u003etypoid\u003c/a\u003e\u003c/code\u003e of a \u003ccode\u003e\u003ca\u003eTypeInfo\u003c/a\u003e\u003c/code\u003e expression.\n   Returns an expression of type \u003ccode\u003e\u003ca\u003eOid\u003c/a\u003e\u003c/code\u003e.  Useful because GHC tends\n   not to fold constants.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple.TypeInfo.Macro",
          "name": "inlineTypoid",
          "package": "postgresql-simple",
          "signature": "TypeInfo -\u003e ExpQ",
          "source": "src/Database-PostgreSQL-Simple-TypeInfo-Macro.html#inlineTypoid",
          "type": "function"
        },
        "index": {
          "description": "Literally substitute the typoid of TypeInfo expression Returns an expression of type Oid Useful because GHC tends not to fold constants",
          "hierarchy": "Database PostgreSQL Simple TypeInfo Macro",
          "module": "Database.PostgreSQL.Simple.TypeInfo.Macro",
          "name": "inlineTypoid",
          "normalized": "TypeInfo-\u003eExpQ",
          "package": "postgresql-simple",
          "partial": "Typoid",
          "signature": "TypeInfo-\u003eExpQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Macro.html#v:inlineTypoid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns an expression that has type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eOid\u003c/a\u003e\u003c/code\u003e -\u003e \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e,  true if the\n   oid is equal to any one of the \u003ccode\u003e\u003ca\u003etypoid\u003c/a\u003e\u003c/code\u003es of the given \u003ccode\u003e\u003ca\u003eTypeInfo\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple.TypeInfo.Macro",
          "name": "mkCompats",
          "package": "postgresql-simple",
          "signature": "[TypeInfo] -\u003e ExpQ",
          "source": "src/Database-PostgreSQL-Simple-TypeInfo-Macro.html#mkCompats",
          "type": "function"
        },
        "index": {
          "description": "Returns an expression that has type Oid Bool true if the oid is equal to any one of the typoid of the given TypeInfo",
          "hierarchy": "Database PostgreSQL Simple TypeInfo Macro",
          "module": "Database.PostgreSQL.Simple.TypeInfo.Macro",
          "name": "mkCompats",
          "normalized": "[TypeInfo]-\u003eExpQ",
          "package": "postgresql-simple",
          "partial": "Compats",
          "signature": "[TypeInfo]-\u003eExpQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Macro.html#v:mkCompats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains portions of the \u003ccode\u003epg_type\u003c/code\u003e table that are relevant\n to postgresql-simple and are believed to not change between PostgreSQL\n versions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "Static",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains portions of the pg type table that are relevant to postgresql-simple and are believed to not change between PostgreSQL versions",
          "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "Static",
          "package": "postgresql-simple",
          "partial": "Static",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA structure representing some of the metadata regarding a PostgreSQL\n   type,  mostly taken from the \u003ccode\u003epg_type\u003c/code\u003e table.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "TypeInfo",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-TypeInfo-Types.html#TypeInfo",
          "type": "data"
        },
        "index": {
          "description": "structure representing some of the metadata regarding PostgreSQL type mostly taken from the pg type table",
          "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "TypeInfo",
          "package": "postgresql-simple",
          "partial": "Type Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#t:TypeInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "abstime",
          "package": "postgresql-simple",
          "signature": "TypeInfo",
          "source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#abstime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "abstime",
          "package": "postgresql-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:abstime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "bit",
          "package": "postgresql-simple",
          "signature": "TypeInfo",
          "source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#bit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "bit",
          "package": "postgresql-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:bit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "bool",
          "package": "postgresql-simple",
          "signature": "TypeInfo",
          "source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#bool",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "bool",
          "package": "postgresql-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:bool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "box",
          "package": "postgresql-simple",
          "signature": "TypeInfo",
          "source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#box",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "box",
          "package": "postgresql-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:box"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "bpchar",
          "package": "postgresql-simple",
          "signature": "TypeInfo",
          "source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#bpchar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "bpchar",
          "package": "postgresql-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:bpchar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "bytea",
          "package": "postgresql-simple",
          "signature": "TypeInfo",
          "source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#bytea",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "bytea",
          "package": "postgresql-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:bytea"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "char",
          "package": "postgresql-simple",
          "signature": "TypeInfo",
          "source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#char",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "char",
          "package": "postgresql-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:char"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "cid",
          "package": "postgresql-simple",
          "signature": "TypeInfo",
          "source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#cid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "cid",
          "package": "postgresql-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:cid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "cidr",
          "package": "postgresql-simple",
          "signature": "TypeInfo",
          "source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#cidr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "cidr",
          "package": "postgresql-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:cidr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "circle",
          "package": "postgresql-simple",
          "signature": "TypeInfo",
          "source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#circle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "circle",
          "package": "postgresql-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:circle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "date",
          "package": "postgresql-simple",
          "signature": "TypeInfo",
          "source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#date",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "date",
          "package": "postgresql-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:date"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "float4",
          "package": "postgresql-simple",
          "signature": "TypeInfo",
          "source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#float4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "float4",
          "package": "postgresql-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:float4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "float8",
          "package": "postgresql-simple",
          "signature": "TypeInfo",
          "source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#float8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "float8",
          "package": "postgresql-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:float8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "inet",
          "package": "postgresql-simple",
          "signature": "TypeInfo",
          "source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#inet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "inet",
          "package": "postgresql-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:inet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "int2",
          "package": "postgresql-simple",
          "signature": "TypeInfo",
          "source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#int2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "int2",
          "package": "postgresql-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:int2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "int4",
          "package": "postgresql-simple",
          "signature": "TypeInfo",
          "source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#int4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "int4",
          "package": "postgresql-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:int4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "int8",
          "package": "postgresql-simple",
          "signature": "TypeInfo",
          "source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#int8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "int8",
          "package": "postgresql-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:int8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "interval",
          "package": "postgresql-simple",
          "signature": "TypeInfo",
          "source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#interval",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "interval",
          "package": "postgresql-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:interval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "json",
          "package": "postgresql-simple",
          "signature": "TypeInfo",
          "source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#json",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "json",
          "package": "postgresql-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:json"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "line",
          "package": "postgresql-simple",
          "signature": "TypeInfo",
          "source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#line",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "line",
          "package": "postgresql-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:line"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "lseg",
          "package": "postgresql-simple",
          "signature": "TypeInfo",
          "source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#lseg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "lseg",
          "package": "postgresql-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:lseg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "macaddr",
          "package": "postgresql-simple",
          "signature": "TypeInfo",
          "source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#macaddr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "macaddr",
          "package": "postgresql-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:macaddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "money",
          "package": "postgresql-simple",
          "signature": "TypeInfo",
          "source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#money",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "money",
          "package": "postgresql-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:money"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "name",
          "package": "postgresql-simple",
          "signature": "TypeInfo",
          "source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#name",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "name",
          "package": "postgresql-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "numeric",
          "package": "postgresql-simple",
          "signature": "TypeInfo",
          "source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#numeric",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "numeric",
          "package": "postgresql-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:numeric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "oid",
          "package": "postgresql-simple",
          "signature": "TypeInfo",
          "source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#oid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "oid",
          "package": "postgresql-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:oid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "path",
          "package": "postgresql-simple",
          "signature": "TypeInfo",
          "source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#path",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "path",
          "package": "postgresql-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "point",
          "package": "postgresql-simple",
          "signature": "TypeInfo",
          "source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#point",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "point",
          "package": "postgresql-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:point"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "polygon",
          "package": "postgresql-simple",
          "signature": "TypeInfo",
          "source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#polygon",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "polygon",
          "package": "postgresql-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:polygon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "record",
          "package": "postgresql-simple",
          "signature": "TypeInfo",
          "source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#record",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "record",
          "package": "postgresql-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:record"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "refcursor",
          "package": "postgresql-simple",
          "signature": "TypeInfo",
          "source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#refcursor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "refcursor",
          "package": "postgresql-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:refcursor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "regproc",
          "package": "postgresql-simple",
          "signature": "TypeInfo",
          "source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#regproc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "regproc",
          "package": "postgresql-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:regproc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "reltime",
          "package": "postgresql-simple",
          "signature": "TypeInfo",
          "source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#reltime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "reltime",
          "package": "postgresql-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:reltime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "staticTypeInfo",
          "package": "postgresql-simple",
          "signature": "Oid -\u003e Maybe TypeInfo",
          "source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#staticTypeInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "staticTypeInfo",
          "normalized": "Oid-\u003eMaybe TypeInfo",
          "package": "postgresql-simple",
          "partial": "Type Info",
          "signature": "Oid-\u003eMaybe TypeInfo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:staticTypeInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "text",
          "package": "postgresql-simple",
          "signature": "TypeInfo",
          "source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#text",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "text",
          "package": "postgresql-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "tid",
          "package": "postgresql-simple",
          "signature": "TypeInfo",
          "source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#tid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "tid",
          "package": "postgresql-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:tid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "time",
          "package": "postgresql-simple",
          "signature": "TypeInfo",
          "source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#time",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "time",
          "package": "postgresql-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "timestamp",
          "package": "postgresql-simple",
          "signature": "TypeInfo",
          "source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#timestamp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "timestamp",
          "package": "postgresql-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:timestamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "timestamptz",
          "package": "postgresql-simple",
          "signature": "TypeInfo",
          "source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#timestamptz",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "timestamptz",
          "package": "postgresql-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:timestamptz"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "timetz",
          "package": "postgresql-simple",
          "signature": "TypeInfo",
          "source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#timetz",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "timetz",
          "package": "postgresql-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:timetz"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "tinterval",
          "package": "postgresql-simple",
          "signature": "TypeInfo",
          "source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#tinterval",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "tinterval",
          "package": "postgresql-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:tinterval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "unknown",
          "package": "postgresql-simple",
          "signature": "TypeInfo",
          "source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#unknown",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "unknown",
          "package": "postgresql-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:unknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "uuid",
          "package": "postgresql-simple",
          "signature": "TypeInfo",
          "source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#uuid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "uuid",
          "package": "postgresql-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:uuid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "varbit",
          "package": "postgresql-simple",
          "signature": "TypeInfo",
          "source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#varbit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "varbit",
          "package": "postgresql-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:varbit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "varchar",
          "package": "postgresql-simple",
          "signature": "TypeInfo",
          "source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#varchar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "varchar",
          "package": "postgresql-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:varchar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "void",
          "package": "postgresql-simple",
          "signature": "TypeInfo",
          "source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#void",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "void",
          "package": "postgresql-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:void"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "xid",
          "package": "postgresql-simple",
          "signature": "TypeInfo",
          "source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#xid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "xid",
          "package": "postgresql-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:xid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "xml",
          "package": "postgresql-simple",
          "signature": "TypeInfo",
          "source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#xml",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
          "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
          "name": "xml",
          "package": "postgresql-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:xml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides convenient and efficient access to parts of the\n \u003ccode\u003epg_type\u003c/code\u003e metatable.  At the moment, this requires PostgreSQL 8.4 if\n you need to work with types that do not appear in\n \u003ccode\u003e\u003ca\u003eStatic\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe current scheme could be more efficient, especially for some use\n cases.  In particular,  connection pools that use many user-added\n types and connect to a set of servers with identical (or at least\n compatible) \u003ccode\u003epg_type\u003c/code\u003e and associated tables could share a common\n typeinfo cache,  thus saving memory and communication between the\n client and server.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.PostgreSQL.Simple.TypeInfo",
          "name": "TypeInfo",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-TypeInfo.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides convenient and efficient access to parts of the pg type metatable At the moment this requires PostgreSQL if you need to work with types that do not appear in Static The current scheme could be more efficient especially for some use cases In particular connection pools that use many user-added types and connect to set of servers with identical or at least compatible pg type and associated tables could share common typeinfo cache thus saving memory and communication between the client and server",
          "hierarchy": "Database PostgreSQL Simple TypeInfo",
          "module": "Database.PostgreSQL.Simple.TypeInfo",
          "name": "TypeInfo",
          "package": "postgresql-simple",
          "partial": "Type Info",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.TypeInfo",
          "name": "Attribute",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-TypeInfo-Types.html#Attribute",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple TypeInfo",
          "module": "Database.PostgreSQL.Simple.TypeInfo",
          "name": "Attribute",
          "package": "postgresql-simple",
          "partial": "Attribute",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo.html#t:Attribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA structure representing some of the metadata regarding a PostgreSQL\n   type,  mostly taken from the \u003ccode\u003epg_type\u003c/code\u003e table.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple.TypeInfo",
          "name": "TypeInfo",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-TypeInfo-Types.html#TypeInfo",
          "type": "data"
        },
        "index": {
          "description": "structure representing some of the metadata regarding PostgreSQL type mostly taken from the pg type table",
          "hierarchy": "Database PostgreSQL Simple TypeInfo",
          "module": "Database.PostgreSQL.Simple.TypeInfo",
          "name": "TypeInfo",
          "package": "postgresql-simple",
          "partial": "Type Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo.html#t:TypeInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the metadata of the type with a particular oid.  To find\n   this data, \u003ccode\u003e\u003ca\u003egetTypeInfo\u003c/a\u003e\u003c/code\u003e first consults postgresql-simple's\n   built-in \u003ccode\u003e\u003ca\u003estaticTypeInfo\u003c/a\u003e\u003c/code\u003e table,  then checks  the connection's\n   typeinfo cache.   Finally,  the database's \u003ccode\u003epg_type\u003c/code\u003e table will\n   be queried only if necessary,  and the result will be stored\n   in the connections's cache.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple.TypeInfo",
          "name": "getTypeInfo",
          "package": "postgresql-simple",
          "signature": "Connection -\u003e Oid -\u003e IO TypeInfo",
          "source": "src/Database-PostgreSQL-Simple-TypeInfo.html#getTypeInfo",
          "type": "function"
        },
        "index": {
          "description": "Returns the metadata of the type with particular oid To find this data getTypeInfo first consults postgresql-simple built-in staticTypeInfo table then checks the connection typeinfo cache Finally the database pg type table will be queried only if necessary and the result will be stored in the connections cache",
          "hierarchy": "Database PostgreSQL Simple TypeInfo",
          "module": "Database.PostgreSQL.Simple.TypeInfo",
          "name": "getTypeInfo",
          "normalized": "Connection-\u003eOid-\u003eIO TypeInfo",
          "package": "postgresql-simple",
          "partial": "Type Info",
          "signature": "Connection-\u003eOid-\u003eIO TypeInfo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo.html#v:getTypeInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBasic types.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.PostgreSQL.Simple.Types",
          "name": "Types",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-Types.html",
          "type": "module"
        },
        "index": {
          "description": "Basic types",
          "hierarchy": "Database PostgreSQL Simple Types",
          "module": "Database.PostgreSQL.Simple.Types",
          "name": "Types",
          "package": "postgresql-simple",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA composite type to parse your custom data structures without\n having to define dummy newtype wrappers every time.\n\u003c/p\u003e\u003cpre\u003e instance FromRow MyData where ...\n\u003c/pre\u003e\u003cpre\u003e instance FromRow MyData2 where ...\n\u003c/pre\u003e\u003cp\u003ethen I can do the following for free:\n\u003c/p\u003e\u003cpre\u003e\n res \u003c- query' c \u003ca\u003e...\u003c/a\u003e\n forM res $ \\(MyData{..} :. MyData2{..}) -\u003e do\n   ....\n\u003c/pre\u003e",
          "module": "Database.PostgreSQL.Simple.Types",
          "name": ":.",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-Types.html#%3A.",
          "type": "data"
        },
        "index": {
          "description": "composite type to parse your custom data structures without having to define dummy newtype wrappers every time instance FromRow MyData where instance FromRow MyData2 where then can do the following for free res query forM res MyData MyData2 do",
          "hierarchy": "Database PostgreSQL Simple Types",
          "module": "Database.PostgreSQL.Simple.Types",
          "name": ":.",
          "package": "postgresql-simple",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Types.html#t::."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap binary data for use as a \u003ccode\u003ebytea\u003c/code\u003e value.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple.Types",
          "name": "Binary",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-Types.html#Binary",
          "type": "newtype"
        },
        "index": {
          "description": "Wrap binary data for use as bytea value",
          "hierarchy": "Database PostgreSQL Simple Types",
          "module": "Database.PostgreSQL.Simple.Types",
          "name": "Binary",
          "package": "postgresql-simple",
          "partial": "Binary",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Types.html#t:Binary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA placeholder for the PostgreSQL \u003ccode\u003eDEFAULT\u003c/code\u003e value.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple.Types",
          "name": "Default",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-Types.html#Default",
          "type": "data"
        },
        "index": {
          "description": "placeholder for the PostgreSQL DEFAULT value",
          "hierarchy": "Database PostgreSQL Simple Types",
          "module": "Database.PostgreSQL.Simple.Types",
          "name": "Default",
          "package": "postgresql-simple",
          "partial": "Default",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Types.html#t:Default"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap a list of values for use in an \u003ccode\u003eIN\u003c/code\u003e clause.  Replaces a\n single \"\u003ccode\u003e?\u003c/code\u003e\" character with a parenthesized list of rendered\n values.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e query c \"select * from whatever where id in ?\" (Only (In [3,4,5]))\n\u003c/pre\u003e",
          "module": "Database.PostgreSQL.Simple.Types",
          "name": "In",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-Types.html#In",
          "type": "newtype"
        },
        "index": {
          "description": "Wrap list of values for use in an IN clause Replaces single character with parenthesized list of rendered values Example query select from whatever where id in Only In",
          "hierarchy": "Database PostgreSQL Simple Types",
          "module": "Database.PostgreSQL.Simple.Types",
          "name": "In",
          "package": "postgresql-simple",
          "partial": "In",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Types.html#t:In"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA placeholder for the SQL \u003ccode\u003eNULL\u003c/code\u003e value.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple.Types",
          "name": "Null",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-Types.html#Null",
          "type": "data"
        },
        "index": {
          "description": "placeholder for the SQL NULL value",
          "hierarchy": "Database PostgreSQL Simple Types",
          "module": "Database.PostgreSQL.Simple.Types",
          "name": "Null",
          "package": "postgresql-simple",
          "partial": "Null",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Types.html#t:Null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Types",
          "name": "Oid",
          "package": "postgresql-simple",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Types",
          "module": "Database.PostgreSQL.Simple.Types",
          "name": "Oid",
          "package": "postgresql-simple",
          "partial": "Oid",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Types.html#t:Oid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA single-value \"collection\".\n\u003c/p\u003e\u003cp\u003eThis is useful if you need to supply a single parameter to a SQL\n query, or extract a single column from a SQL result.\n\u003c/p\u003e\u003cp\u003eParameter example:\n\u003c/p\u003e\u003cpre\u003equery c \"select x from scores where x \u003e ?\" (\u003ccode\u003e\u003ca\u003eOnly\u003c/a\u003e\u003c/code\u003e (42::Int))\u003c/pre\u003e\u003cp\u003eResult example:\n\u003c/p\u003e\u003cpre\u003exs \u003c- query_ c \"select id from users\"\nforM_ xs $ \\(\u003ccode\u003e\u003ca\u003eOnly\u003c/a\u003e\u003c/code\u003e id) -\u003e {- ... -}\u003c/pre\u003e",
          "module": "Database.PostgreSQL.Simple.Types",
          "name": "Only",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-Types.html#Only",
          "type": "newtype"
        },
        "index": {
          "description": "single-value collection This is useful if you need to supply single parameter to SQL query or extract single column from SQL result Parameter example query select from scores where Only Int Result example xs query select id from users forM xs Only id",
          "hierarchy": "Database PostgreSQL Simple Types",
          "module": "Database.PostgreSQL.Simple.Types",
          "name": "Only",
          "package": "postgresql-simple",
          "partial": "Only",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Types.html#t:Only"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap a list for use as a PostgreSQL array.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple.Types",
          "name": "PGArray",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-Types.html#PGArray",
          "type": "newtype"
        },
        "index": {
          "description": "Wrap list for use as PostgreSQL array",
          "hierarchy": "Database PostgreSQL Simple Types",
          "module": "Database.PostgreSQL.Simple.Types",
          "name": "PGArray",
          "package": "postgresql-simple",
          "partial": "PGArray",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Types.html#t:PGArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA query string. This type is intended to make it difficult to\n construct a SQL query by concatenating string fragments, as that is\n an extremely common way to accidentally introduce SQL injection\n vulnerabilities into an application.\n\u003c/p\u003e\u003cp\u003eThis type is an instance of \u003ccode\u003e\u003ca\u003eIsString\u003c/a\u003e\u003c/code\u003e, so the easiest way to\n construct a query is to enable the \u003ccode\u003eOverloadedStrings\u003c/code\u003e language\n extension and then simply write the query in double quotes.\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE OverloadedStrings #-}\n\n import Database.PostgreSQL.Simple\n\n q :: Query\n q = \"select ?\"\n\u003c/pre\u003e\u003cp\u003eThe underlying type is a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e, and literal Haskell strings\n that contain Unicode characters will be correctly transformed to\n UTF-8.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple.Types",
          "name": "Query",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-Types.html#Query",
          "type": "newtype"
        },
        "index": {
          "description": "query string This type is intended to make it difficult to construct SQL query by concatenating string fragments as that is an extremely common way to accidentally introduce SQL injection vulnerabilities into an application This type is an instance of IsString so the easiest way to construct query is to enable the OverloadedStrings language extension and then simply write the query in double quotes LANGUAGE OverloadedStrings import Database.PostgreSQL.Simple Query select The underlying type is ByteString and literal Haskell strings that contain Unicode characters will be correctly transformed to UTF-8",
          "hierarchy": "Database PostgreSQL Simple Types",
          "module": "Database.PostgreSQL.Simple.Types",
          "name": "Query",
          "package": "postgresql-simple",
          "partial": "Query",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Types.html#t:Query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Types",
          "name": "Savepoint",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-Types.html#Savepoint",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Types",
          "module": "Database.PostgreSQL.Simple.Types",
          "name": "Savepoint",
          "package": "postgresql-simple",
          "partial": "Savepoint",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Types.html#t:Savepoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.PostgreSQL.Simple.Types\",\"Database.PostgreSQL.Simple\"]",
          "name": ":.",
          "package": "postgresql-simple",
          "signature": "h :. t",
          "source": "src/Database-PostgreSQL-Simple-Types.html#%3A.",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Types.html#v::.\",\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v::.\"]"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Types",
          "module": "Database.PostgreSQL.Simple.Types",
          "name": ":.",
          "package": "postgresql-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Types.html#v::."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.PostgreSQL.Simple.Types\",\"Database.PostgreSQL.Simple\"]",
          "name": "Binary",
          "package": "postgresql-simple",
          "signature": "Binary",
          "source": "src/Database-PostgreSQL-Simple-Types.html#Binary",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Types.html#v:Binary\",\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:Binary\"]"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Types",
          "module": "Database.PostgreSQL.Simple.Types",
          "name": "Binary",
          "package": "postgresql-simple",
          "partial": "Binary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Types.html#v:Binary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Types",
          "name": "Default",
          "package": "postgresql-simple",
          "signature": "Default",
          "source": "src/Database-PostgreSQL-Simple-Types.html#Default",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Types",
          "module": "Database.PostgreSQL.Simple.Types",
          "name": "Default",
          "package": "postgresql-simple",
          "partial": "Default",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Types.html#v:Default"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.PostgreSQL.Simple.Types\",\"Database.PostgreSQL.Simple\"]",
          "name": "In",
          "package": "postgresql-simple",
          "signature": "In a",
          "source": "src/Database-PostgreSQL-Simple-Types.html#In",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Types.html#v:In\",\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:In\"]"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Types",
          "module": "Database.PostgreSQL.Simple.Types",
          "name": "In",
          "package": "postgresql-simple",
          "partial": "In",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Types.html#v:In"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Types",
          "name": "Null",
          "package": "postgresql-simple",
          "signature": "Null",
          "source": "src/Database-PostgreSQL-Simple-Types.html#Null",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Types",
          "module": "Database.PostgreSQL.Simple.Types",
          "name": "Null",
          "package": "postgresql-simple",
          "partial": "Null",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Types.html#v:Null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.PostgreSQL.Simple.Types\",\"Database.PostgreSQL.Simple\"]",
          "name": "Only",
          "package": "postgresql-simple",
          "signature": "Only",
          "source": "src/Database-PostgreSQL-Simple-Types.html#Only",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Types.html#v:Only\",\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:Only\"]"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Types",
          "module": "Database.PostgreSQL.Simple.Types",
          "name": "Only",
          "package": "postgresql-simple",
          "partial": "Only",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Types.html#v:Only"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Types",
          "name": "PGArray",
          "package": "postgresql-simple",
          "signature": "PGArray",
          "source": "src/Database-PostgreSQL-Simple-Types.html#PGArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Types",
          "module": "Database.PostgreSQL.Simple.Types",
          "name": "PGArray",
          "package": "postgresql-simple",
          "partial": "PGArray",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Types.html#v:PGArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Types",
          "name": "Query",
          "package": "postgresql-simple",
          "signature": "Query",
          "source": "src/Database-PostgreSQL-Simple-Types.html#Query",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Types",
          "module": "Database.PostgreSQL.Simple.Types",
          "name": "Query",
          "package": "postgresql-simple",
          "partial": "Query",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Types.html#v:Query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Types",
          "name": "Savepoint",
          "package": "postgresql-simple",
          "signature": "Savepoint Query",
          "source": "src/Database-PostgreSQL-Simple-Types.html#Savepoint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Types",
          "module": "Database.PostgreSQL.Simple.Types",
          "name": "Savepoint",
          "package": "postgresql-simple",
          "partial": "Savepoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Types.html#v:Savepoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.PostgreSQL.Simple.Types\",\"Database.PostgreSQL.Simple\"]",
          "name": "fromBinary",
          "package": "postgresql-simple",
          "signature": "a",
          "source": "src/Database-PostgreSQL-Simple-Types.html#Binary",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Types.html#v:fromBinary\",\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:fromBinary\"]"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Types",
          "module": "Database.PostgreSQL.Simple.Types",
          "name": "fromBinary",
          "package": "postgresql-simple",
          "partial": "Binary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Types.html#v:fromBinary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.PostgreSQL.Simple.Types\",\"Database.PostgreSQL.Simple\"]",
          "name": "fromOnly",
          "package": "postgresql-simple",
          "signature": "a",
          "source": "src/Database-PostgreSQL-Simple-Types.html#Only",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Types.html#v:fromOnly\",\"http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:fromOnly\"]"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Types",
          "module": "Database.PostgreSQL.Simple.Types",
          "name": "fromOnly",
          "package": "postgresql-simple",
          "partial": "Only",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Types.html#v:fromOnly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Types",
          "name": "fromPGArray",
          "package": "postgresql-simple",
          "signature": "[a]",
          "source": "src/Database-PostgreSQL-Simple-Types.html#PGArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Types",
          "module": "Database.PostgreSQL.Simple.Types",
          "name": "fromPGArray",
          "normalized": "[a]",
          "package": "postgresql-simple",
          "partial": "PGArray",
          "signature": "[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Types.html#v:fromPGArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple.Types",
          "name": "fromQuery",
          "package": "postgresql-simple",
          "signature": "ByteString",
          "source": "src/Database-PostgreSQL-Simple-Types.html#Query",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple Types",
          "module": "Database.PostgreSQL.Simple.Types",
          "name": "fromQuery",
          "package": "postgresql-simple",
          "partial": "Query",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Types.html#v:fromQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA mid-level client library for the PostgreSQL database, aimed at ease of\n use and high performance.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.PostgreSQL.Simple",
          "name": "Simple",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple.html",
          "type": "module"
        },
        "index": {
          "description": "mid-level client library for the PostgreSQL database aimed at ease of use and high performance",
          "hierarchy": "Database PostgreSQL Simple",
          "module": "Database.PostgreSQL.Simple",
          "name": "Simple",
          "package": "postgresql-simple",
          "partial": "Simple",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA composite type to parse your custom data structures without\n having to define dummy newtype wrappers every time.\n\u003c/p\u003e\u003cpre\u003e instance FromRow MyData where ...\n\u003c/pre\u003e\u003cpre\u003e instance FromRow MyData2 where ...\n\u003c/pre\u003e\u003cp\u003ethen I can do the following for free:\n\u003c/p\u003e\u003cpre\u003e\n res \u003c- query' c \u003ca\u003e...\u003c/a\u003e\n forM res $ \\(MyData{..} :. MyData2{..}) -\u003e do\n   ....\n\u003c/pre\u003e",
          "module": "Database.PostgreSQL.Simple",
          "name": ":.",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-Types.html#%3A.",
          "type": "data"
        },
        "index": {
          "description": "composite type to parse your custom data structures without having to define dummy newtype wrappers every time instance FromRow MyData where instance FromRow MyData2 where then can do the following for free res query forM res MyData MyData2 do",
          "hierarchy": "Database PostgreSQL Simple",
          "module": "Database.PostgreSQL.Simple",
          "name": ":.",
          "package": "postgresql-simple",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#t::."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap binary data for use as a \u003ccode\u003ebytea\u003c/code\u003e value.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple",
          "name": "Binary",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-Types.html#Binary",
          "type": "newtype"
        },
        "index": {
          "description": "Wrap binary data for use as bytea value",
          "hierarchy": "Database PostgreSQL Simple",
          "module": "Database.PostgreSQL.Simple",
          "name": "Binary",
          "package": "postgresql-simple",
          "partial": "Binary",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#t:Binary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple",
          "name": "ConnectInfo",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-Internal.html#ConnectInfo",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple",
          "module": "Database.PostgreSQL.Simple",
          "name": "ConnectInfo",
          "package": "postgresql-simple",
          "partial": "Connect Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#t:ConnectInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple",
          "name": "Connection",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-Internal.html#Connection",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple",
          "module": "Database.PostgreSQL.Simple",
          "name": "Connection",
          "package": "postgresql-simple",
          "partial": "Connection",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#t:Connection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple",
          "name": "ExecStatus",
          "package": "postgresql-simple",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple",
          "module": "Database.PostgreSQL.Simple",
          "name": "ExecStatus",
          "package": "postgresql-simple",
          "partial": "Exec Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#t:ExecStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple",
          "name": "FetchQuantity",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple.html#FetchQuantity",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple",
          "module": "Database.PostgreSQL.Simple",
          "name": "FetchQuantity",
          "package": "postgresql-simple",
          "partial": "Fetch Quantity",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#t:FetchQuantity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple",
          "name": "FoldOptions",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple.html#FoldOptions",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple",
          "module": "Database.PostgreSQL.Simple",
          "name": "FoldOptions",
          "package": "postgresql-simple",
          "partial": "Fold Options",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#t:FoldOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eException thrown if a \u003ccode\u003e\u003ca\u003eQuery\u003c/a\u003e\u003c/code\u003e could not be formatted correctly.\n This may occur if the number of '\u003ccode\u003e?\u003c/code\u003e' characters in the query\n string does not match the number of parameters provided.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple",
          "name": "FormatError",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple.html#FormatError",
          "type": "data"
        },
        "index": {
          "description": "Exception thrown if Query could not be formatted correctly This may occur if the number of characters in the query string does not match the number of parameters provided",
          "hierarchy": "Database PostgreSQL Simple",
          "module": "Database.PostgreSQL.Simple",
          "name": "FormatError",
          "package": "postgresql-simple",
          "partial": "Format Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#t:FormatError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA collection type that can be converted from a sequence of fields.\n Instances are provided for tuples up to 10 elements and lists of any length.\n\u003c/p\u003e\u003cp\u003eNote that instances can be defined outside of postgresql-simple,  which is\n often useful.   For example, here's an instance for a user-defined pair:\n\u003c/p\u003e\u003cpre\u003edata User = User { name :: String, fileQuota :: Int }\n\ninstance \u003ccode\u003e\u003ca\u003eFromRow\u003c/a\u003e\u003c/code\u003e User where\n     fromRow = User \u003c$\u003e \u003ccode\u003e\u003ca\u003efield\u003c/a\u003e\u003c/code\u003e \u003c*\u003e \u003ccode\u003e\u003ca\u003efield\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e\u003cp\u003eThe number of calls to \u003ccode\u003e\u003ca\u003efield\u003c/a\u003e\u003c/code\u003e must match the number of fields returned\n in a single row of the query result.  Otherwise,  a \u003ccode\u003e\u003ca\u003eConversionFailed\u003c/a\u003e\u003c/code\u003e\n exception will be thrown.\n\u003c/p\u003e\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003efield\u003c/a\u003e\u003c/code\u003e evaluates it's result to WHNF, so the caveats listed in\n mysql-simple and very early versions of postgresql-simple no longer apply.\n Instead, look at the caveats associated with user-defined implementations\n of \u003ccode\u003e\u003ca\u003efromField\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple",
          "name": "FromRow",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-FromRow.html#FromRow",
          "type": "class"
        },
        "index": {
          "description": "collection type that can be converted from sequence of fields Instances are provided for tuples up to elements and lists of any length Note that instances can be defined outside of postgresql-simple which is often useful For example here an instance for user-defined pair data User User name String fileQuota Int instance FromRow User where fromRow User field field The number of calls to field must match the number of fields returned in single row of the query result Otherwise ConversionFailed exception will be thrown Note that field evaluates it result to WHNF so the caveats listed in mysql-simple and very early versions of postgresql-simple no longer apply Instead look at the caveats associated with user-defined implementations of fromField",
          "hierarchy": "Database PostgreSQL Simple",
          "module": "Database.PostgreSQL.Simple",
          "name": "FromRow",
          "package": "postgresql-simple",
          "partial": "From Row",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#t:FromRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap a list of values for use in an \u003ccode\u003eIN\u003c/code\u003e clause.  Replaces a\n single \"\u003ccode\u003e?\u003c/code\u003e\" character with a parenthesized list of rendered\n values.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e query c \"select * from whatever where id in ?\" (Only (In [3,4,5]))\n\u003c/pre\u003e",
          "module": "Database.PostgreSQL.Simple",
          "name": "In",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-Types.html#In",
          "type": "newtype"
        },
        "index": {
          "description": "Wrap list of values for use in an IN clause Replaces single character with parenthesized list of rendered values Example query select from whatever where id in Only In",
          "hierarchy": "Database PostgreSQL Simple",
          "module": "Database.PostgreSQL.Simple",
          "name": "In",
          "package": "postgresql-simple",
          "partial": "In",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#t:In"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA single-value \"collection\".\n\u003c/p\u003e\u003cp\u003eThis is useful if you need to supply a single parameter to a SQL\n query, or extract a single column from a SQL result.\n\u003c/p\u003e\u003cp\u003eParameter example:\n\u003c/p\u003e\u003cpre\u003equery c \"select x from scores where x \u003e ?\" (\u003ccode\u003e\u003ca\u003eOnly\u003c/a\u003e\u003c/code\u003e (42::Int))\u003c/pre\u003e\u003cp\u003eResult example:\n\u003c/p\u003e\u003cpre\u003exs \u003c- query_ c \"select id from users\"\nforM_ xs $ \\(\u003ccode\u003e\u003ca\u003eOnly\u003c/a\u003e\u003c/code\u003e id) -\u003e {- ... -}\u003c/pre\u003e",
          "module": "Database.PostgreSQL.Simple",
          "name": "Only",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-Types.html#Only",
          "type": "newtype"
        },
        "index": {
          "description": "single-value collection This is useful if you need to supply single parameter to SQL query or extract single column from SQL result Parameter example query select from scores where Only Int Result example xs query select id from users forM xs Only id",
          "hierarchy": "Database PostgreSQL Simple",
          "module": "Database.PostgreSQL.Simple",
          "name": "Only",
          "package": "postgresql-simple",
          "partial": "Only",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#t:Only"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA query string. This type is intended to make it difficult to\n construct a SQL query by concatenating string fragments, as that is\n an extremely common way to accidentally introduce SQL injection\n vulnerabilities into an application.\n\u003c/p\u003e\u003cp\u003eThis type is an instance of \u003ccode\u003e\u003ca\u003eIsString\u003c/a\u003e\u003c/code\u003e, so the easiest way to\n construct a query is to enable the \u003ccode\u003eOverloadedStrings\u003c/code\u003e language\n extension and then simply write the query in double quotes.\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE OverloadedStrings #-}\n\n import Database.PostgreSQL.Simple\n\n q :: Query\n q = \"select ?\"\n\u003c/pre\u003e\u003cp\u003eThe underlying type is a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e, and literal Haskell strings\n that contain Unicode characters will be correctly transformed to\n UTF-8.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple",
          "name": "Query",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-Types.html#Query",
          "type": "data"
        },
        "index": {
          "description": "query string This type is intended to make it difficult to construct SQL query by concatenating string fragments as that is an extremely common way to accidentally introduce SQL injection vulnerabilities into an application This type is an instance of IsString so the easiest way to construct query is to enable the OverloadedStrings language extension and then simply write the query in double quotes LANGUAGE OverloadedStrings import Database.PostgreSQL.Simple Query select The underlying type is ByteString and literal Haskell strings that contain Unicode characters will be correctly transformed to UTF-8",
          "hierarchy": "Database PostgreSQL Simple",
          "module": "Database.PostgreSQL.Simple",
          "name": "Query",
          "package": "postgresql-simple",
          "partial": "Query",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#t:Query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eException thrown if \u003ccode\u003equery\u003c/code\u003e is used to perform an \u003ccode\u003eINSERT\u003c/code\u003e-like\n operation, or \u003ccode\u003eexecute\u003c/code\u003e is used to perform a \u003ccode\u003eSELECT\u003c/code\u003e-like operation.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple",
          "name": "QueryError",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-Internal.html#QueryError",
          "type": "data"
        },
        "index": {
          "description": "Exception thrown if query is used to perform an INSERT like operation or execute is used to perform SELECT like operation",
          "hierarchy": "Database PostgreSQL Simple",
          "module": "Database.PostgreSQL.Simple",
          "name": "QueryError",
          "package": "postgresql-simple",
          "partial": "Query Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#t:QueryError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eException thrown if conversion from a SQL value to a Haskell\n value fails.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple",
          "name": "ResultError",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-FromField.html#ResultError",
          "type": "data"
        },
        "index": {
          "description": "Exception thrown if conversion from SQL value to Haskell value fails",
          "hierarchy": "Database PostgreSQL Simple",
          "module": "Database.PostgreSQL.Simple",
          "name": "ResultError",
          "package": "postgresql-simple",
          "partial": "Result Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#t:ResultError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple",
          "name": "SqlError",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-Internal.html#SqlError",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple",
          "module": "Database.PostgreSQL.Simple",
          "name": "SqlError",
          "package": "postgresql-simple",
          "partial": "Sql Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#t:SqlError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA collection type that can be turned into a list of rendering\n \u003ccode\u003e\u003ca\u003eAction\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003cp\u003eInstances should use the \u003ccode\u003erender\u003c/code\u003e method of the \u003ccode\u003eParam\u003c/code\u003e class\n to perform conversion of each element of the collection.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple",
          "name": "ToRow",
          "package": "postgresql-simple",
          "source": "src/Database-PostgreSQL-Simple-ToRow.html#ToRow",
          "type": "class"
        },
        "index": {
          "description": "collection type that can be turned into list of rendering Action Instances should use the render method of the Param class to perform conversion of each element of the collection",
          "hierarchy": "Database PostgreSQL Simple",
          "module": "Database.PostgreSQL.Simple",
          "name": "ToRow",
          "package": "postgresql-simple",
          "partial": "To Row",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#t:ToRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple",
          "name": "Automatic",
          "package": "postgresql-simple",
          "signature": "Automatic",
          "source": "src/Database-PostgreSQL-Simple.html#FetchQuantity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple",
          "module": "Database.PostgreSQL.Simple",
          "name": "Automatic",
          "package": "postgresql-simple",
          "partial": "Automatic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:Automatic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe server's response was not understood.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple",
          "name": "BadResponse",
          "package": "postgresql-simple",
          "signature": "BadResponse",
          "type": "function"
        },
        "index": {
          "description": "The server response was not understood",
          "hierarchy": "Database PostgreSQL Simple",
          "module": "Database.PostgreSQL.Simple",
          "name": "BadResponse",
          "package": "postgresql-simple",
          "partial": "Bad Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:BadResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSuccessful completion of a\n command returning no data.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple",
          "name": "CommandOk",
          "package": "postgresql-simple",
          "signature": "CommandOk",
          "type": "function"
        },
        "index": {
          "description": "Successful completion of command returning no data",
          "hierarchy": "Database PostgreSQL Simple",
          "module": "Database.PostgreSQL.Simple",
          "name": "CommandOk",
          "package": "postgresql-simple",
          "partial": "Command Ok",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:CommandOk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopy In (to server) data transfer\n started.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple",
          "name": "CopyIn",
          "package": "postgresql-simple",
          "signature": "CopyIn",
          "type": "function"
        },
        "index": {
          "description": "Copy In to server data transfer started",
          "hierarchy": "Database PostgreSQL Simple",
          "module": "Database.PostgreSQL.Simple",
          "name": "CopyIn",
          "package": "postgresql-simple",
          "partial": "Copy In",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:CopyIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopy Out (from server) data\n transfer started.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple",
          "name": "CopyOut",
          "package": "postgresql-simple",
          "signature": "CopyOut",
          "type": "function"
        },
        "index": {
          "description": "Copy Out from server data transfer started",
          "hierarchy": "Database PostgreSQL Simple",
          "module": "Database.PostgreSQL.Simple",
          "name": "CopyOut",
          "package": "postgresql-simple",
          "partial": "Copy Out",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:CopyOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe string sent to the server was empty.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple",
          "name": "EmptyQuery",
          "package": "postgresql-simple",
          "signature": "EmptyQuery",
          "type": "function"
        },
        "index": {
          "description": "The string sent to the server was empty",
          "hierarchy": "Database PostgreSQL Simple",
          "module": "Database.PostgreSQL.Simple",
          "name": "EmptyQuery",
          "package": "postgresql-simple",
          "partial": "Empty Query",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:EmptyQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA fatal error occurred.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple",
          "name": "FatalError",
          "package": "postgresql-simple",
          "signature": "FatalError",
          "type": "function"
        },
        "index": {
          "description": "fatal error occurred",
          "hierarchy": "Database PostgreSQL Simple",
          "module": "Database.PostgreSQL.Simple",
          "name": "FatalError",
          "package": "postgresql-simple",
          "partial": "Fatal Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:FatalError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple",
          "name": "Fixed",
          "package": "postgresql-simple",
          "signature": "Fixed !Int",
          "source": "src/Database-PostgreSQL-Simple.html#FetchQuantity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple",
          "module": "Database.PostgreSQL.Simple",
          "name": "Fixed",
          "package": "postgresql-simple",
          "partial": "Fixed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:Fixed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple",
          "name": "FoldOptions",
          "package": "postgresql-simple",
          "signature": "FoldOptions",
          "source": "src/Database-PostgreSQL-Simple.html#FoldOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple",
          "module": "Database.PostgreSQL.Simple",
          "name": "FoldOptions",
          "package": "postgresql-simple",
          "partial": "Fold Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:FoldOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA nonfatal error (a notice or\n warning) occurred.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple",
          "name": "NonfatalError",
          "package": "postgresql-simple",
          "signature": "NonfatalError",
          "type": "function"
        },
        "index": {
          "description": "nonfatal error notice or warning occurred",
          "hierarchy": "Database PostgreSQL Simple",
          "module": "Database.PostgreSQL.Simple",
          "name": "NonfatalError",
          "package": "postgresql-simple",
          "partial": "Nonfatal Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:NonfatalError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSuccessful completion of a\n command returning data (such as a\n SELECT or SHOW).\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple",
          "name": "TuplesOk",
          "package": "postgresql-simple",
          "signature": "TuplesOk",
          "type": "function"
        },
        "index": {
          "description": "Successful completion of command returning data such as SELECT or SHOW",
          "hierarchy": "Database PostgreSQL Simple",
          "module": "Database.PostgreSQL.Simple",
          "name": "TuplesOk",
          "package": "postgresql-simple",
          "partial": "Tuples Ok",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:TuplesOk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple",
          "name": "defaultFoldOptions",
          "package": "postgresql-simple",
          "signature": "FoldOptions",
          "source": "src/Database-PostgreSQL-Simple.html#defaultFoldOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple",
          "module": "Database.PostgreSQL.Simple",
          "name": "defaultFoldOptions",
          "package": "postgresql-simple",
          "partial": "Fold Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:defaultFoldOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute an \u003ccode\u003eINSERT\u003c/code\u003e, \u003ccode\u003eUPDATE\u003c/code\u003e, or other SQL query that is not\n expected to return results.\n\u003c/p\u003e\u003cp\u003eReturns the number of rows affected.\n\u003c/p\u003e\u003cp\u003eThrows \u003ccode\u003e\u003ca\u003eFormatError\u003c/a\u003e\u003c/code\u003e if the query could not be formatted correctly.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple",
          "name": "execute",
          "package": "postgresql-simple",
          "signature": "Connection -\u003e Query -\u003e q -\u003e IO Int64",
          "source": "src/Database-PostgreSQL-Simple.html#execute",
          "type": "function"
        },
        "index": {
          "description": "Execute an INSERT UPDATE or other SQL query that is not expected to return results Returns the number of rows affected Throws FormatError if the query could not be formatted correctly",
          "hierarchy": "Database PostgreSQL Simple",
          "module": "Database.PostgreSQL.Simple",
          "name": "execute",
          "normalized": "Connection-\u003eQuery-\u003ea-\u003eIO Int",
          "package": "postgresql-simple",
          "signature": "Connection-\u003eQuery-\u003eq-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:execute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute a multi-row \u003ccode\u003eINSERT\u003c/code\u003e, \u003ccode\u003eUPDATE\u003c/code\u003e, or other SQL query that is not\n expected to return results.\n\u003c/p\u003e\u003cp\u003eReturns the number of rows affected.\n\u003c/p\u003e\u003cp\u003eThrows \u003ccode\u003e\u003ca\u003eFormatError\u003c/a\u003e\u003c/code\u003e if the query could not be formatted correctly.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple",
          "name": "executeMany",
          "package": "postgresql-simple",
          "signature": "Connection -\u003e Query -\u003e [q] -\u003e IO Int64",
          "source": "src/Database-PostgreSQL-Simple.html#executeMany",
          "type": "function"
        },
        "index": {
          "description": "Execute multi-row INSERT UPDATE or other SQL query that is not expected to return results Returns the number of rows affected Throws FormatError if the query could not be formatted correctly",
          "hierarchy": "Database PostgreSQL Simple",
          "module": "Database.PostgreSQL.Simple",
          "name": "executeMany",
          "normalized": "Connection-\u003eQuery-\u003e[a]-\u003eIO Int",
          "package": "postgresql-simple",
          "partial": "Many",
          "signature": "Connection-\u003eQuery-\u003e[q]-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:executeMany"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple",
          "name": "fetchQuantity",
          "package": "postgresql-simple",
          "signature": "FetchQuantity",
          "source": "src/Database-PostgreSQL-Simple.html#FoldOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple",
          "module": "Database.PostgreSQL.Simple",
          "name": "fetchQuantity",
          "package": "postgresql-simple",
          "partial": "Quantity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:fetchQuantity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform a \u003ccode\u003eSELECT\u003c/code\u003e or other SQL query that is expected to return\n results. Results are streamed incrementally from the server, and\n consumed via a left fold.\n\u003c/p\u003e\u003cp\u003eWhen dealing with small results, it may be simpler (and perhaps\n faster) to use \u003ccode\u003e\u003ca\u003equery\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e\u003cp\u003eThis fold is \u003cem\u003enot\u003c/em\u003e strict. The stream consumer is responsible for\n forcing the evaluation of its result to avoid space leaks.\n\u003c/p\u003e\u003cp\u003eExceptions that may be thrown:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eFormatError\u003c/a\u003e\u003c/code\u003e: the query string could not be formatted correctly.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eQueryError\u003c/a\u003e\u003c/code\u003e: the result contains no columns (i.e. you should be\n   using \u003ccode\u003e\u003ca\u003eexecute\u003c/a\u003e\u003c/code\u003e instead of \u003ccode\u003e\u003ca\u003equery\u003c/a\u003e\u003c/code\u003e).\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eResultError\u003c/a\u003e\u003c/code\u003e: result conversion failed.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Database.PostgreSQL.Simple",
          "name": "fold",
          "package": "postgresql-simple",
          "signature": "Connection -\u003e Query -\u003e params -\u003e a -\u003e (a -\u003e row -\u003e IO a) -\u003e IO a",
          "source": "src/Database-PostgreSQL-Simple.html#fold",
          "type": "function"
        },
        "index": {
          "description": "Perform SELECT or other SQL query that is expected to return results Results are streamed incrementally from the server and consumed via left fold When dealing with small results it may be simpler and perhaps faster to use query instead This fold is not strict The stream consumer is responsible for forcing the evaluation of its result to avoid space leaks Exceptions that may be thrown FormatError the query string could not be formatted correctly QueryError the result contains no columns i.e you should be using execute instead of query ResultError result conversion failed",
          "hierarchy": "Database PostgreSQL Simple",
          "module": "Database.PostgreSQL.Simple",
          "name": "fold",
          "normalized": "Connection-\u003eQuery-\u003ea-\u003eb-\u003e(b-\u003ec-\u003eIO b)-\u003eIO b",
          "package": "postgresql-simple",
          "signature": "Connection-\u003eQuery-\u003eparams-\u003ea-\u003e(a-\u003erow-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:fold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple",
          "name": "foldWithOptions",
          "package": "postgresql-simple",
          "signature": "FoldOptions -\u003e Connection -\u003e Query -\u003e params -\u003e a -\u003e (a -\u003e row -\u003e IO a) -\u003e IO a",
          "source": "src/Database-PostgreSQL-Simple.html#foldWithOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple",
          "module": "Database.PostgreSQL.Simple",
          "name": "foldWithOptions",
          "normalized": "FoldOptions-\u003eConnection-\u003eQuery-\u003ea-\u003eb-\u003e(b-\u003ec-\u003eIO b)-\u003eIO b",
          "package": "postgresql-simple",
          "partial": "With Options",
          "signature": "FoldOptions-\u003eConnection-\u003eQuery-\u003eparams-\u003ea-\u003e(a-\u003erow-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:foldWithOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple",
          "name": "foldWithOptions_",
          "package": "postgresql-simple",
          "signature": "FoldOptions-\u003e Connection-\u003e Query-\u003e a-\u003e (a -\u003e r -\u003e IO a)-\u003e IO a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple",
          "module": "Database.PostgreSQL.Simple",
          "name": "foldWithOptions_",
          "normalized": "FoldOptions-\u003eConnection-\u003eQuery-\u003ea-\u003e(a-\u003eb-\u003eIO a)-\u003eIO a",
          "package": "postgresql-simple",
          "partial": "With Options",
          "signature": "FoldOptions-\u003eConnection-\u003eQuery-\u003ea-\u003e(a-\u003er-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:foldWithOptions_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e that does not perform query substitution.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple",
          "name": "fold_",
          "package": "postgresql-simple",
          "signature": "Connection-\u003e Query-\u003e a-\u003e (a -\u003e r -\u003e IO a)-\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "version of fold that does not perform query substitution",
          "hierarchy": "Database PostgreSQL Simple",
          "module": "Database.PostgreSQL.Simple",
          "name": "fold_",
          "normalized": "Connection-\u003eQuery-\u003ea-\u003e(a-\u003eb-\u003eIO a)-\u003eIO a",
          "package": "postgresql-simple",
          "signature": "Connection-\u003eQuery-\u003ea-\u003e(a-\u003er-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:fold_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e that does not transform a state value.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple",
          "name": "forEach",
          "package": "postgresql-simple",
          "signature": "Connection-\u003e Query-\u003e q-\u003e (r -\u003e IO ())-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "version of fold that does not transform state value",
          "hierarchy": "Database PostgreSQL Simple",
          "module": "Database.PostgreSQL.Simple",
          "name": "forEach",
          "normalized": "Connection-\u003eQuery-\u003ea-\u003e(b-\u003eIO())-\u003eIO()",
          "package": "postgresql-simple",
          "partial": "Each",
          "signature": "Connection-\u003eQuery-\u003eq-\u003e(r-\u003eIO())-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:forEach"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003eforEach\u003c/a\u003e\u003c/code\u003e that does not perform query substitution.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple",
          "name": "forEach_",
          "package": "postgresql-simple",
          "signature": "Connection-\u003e Query-\u003e (r -\u003e IO ())-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "version of forEach that does not perform query substitution",
          "hierarchy": "Database PostgreSQL Simple",
          "module": "Database.PostgreSQL.Simple",
          "name": "forEach_",
          "normalized": "Connection-\u003eQuery-\u003e(a-\u003eIO())-\u003eIO()",
          "package": "postgresql-simple",
          "partial": "Each",
          "signature": "Connection-\u003eQuery-\u003e(r-\u003eIO())-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:forEach_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormat a query string with a variable number of rows.\n\u003c/p\u003e\u003cp\u003eThis function is exposed to help with debugging and logging. Do not\n use it to prepare queries for execution.\n\u003c/p\u003e\u003cp\u003eThe query string must contain exactly one substitution group,\n identified by the SQL keyword \"\u003ccode\u003eVALUES\u003c/code\u003e\" (case insensitive)\n followed by an \"\u003ccode\u003e(\u003c/code\u003e\" character, a series of one or more \"\u003ccode\u003e?\u003c/code\u003e\"\n characters separated by commas, and a \"\u003ccode\u003e)\u003c/code\u003e\" character. White\n space in a substitution group is permitted.\n\u003c/p\u003e\u003cp\u003eThrows \u003ccode\u003e\u003ca\u003eFormatError\u003c/a\u003e\u003c/code\u003e if the query string could not be formatted\n correctly.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple",
          "name": "formatMany",
          "package": "postgresql-simple",
          "signature": "Connection -\u003e Query -\u003e [q] -\u003e IO ByteString",
          "source": "src/Database-PostgreSQL-Simple.html#formatMany",
          "type": "function"
        },
        "index": {
          "description": "Format query string with variable number of rows This function is exposed to help with debugging and logging Do not use it to prepare queries for execution The query string must contain exactly one substitution group identified by the SQL keyword VALUES case insensitive followed by an character series of one or more characters separated by commas and character White space in substitution group is permitted Throws FormatError if the query string could not be formatted correctly",
          "hierarchy": "Database PostgreSQL Simple",
          "module": "Database.PostgreSQL.Simple",
          "name": "formatMany",
          "normalized": "Connection-\u003eQuery-\u003e[a]-\u003eIO ByteString",
          "package": "postgresql-simple",
          "partial": "Many",
          "signature": "Connection-\u003eQuery-\u003e[q]-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:formatMany"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormat a query string.\n\u003c/p\u003e\u003cp\u003eThis function is exposed to help with debugging and logging. Do not\n use it to prepare queries for execution.\n\u003c/p\u003e\u003cp\u003eString parameters are escaped according to the character set in use\n on the \u003ccode\u003e\u003ca\u003eConnection\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThrows \u003ccode\u003e\u003ca\u003eFormatError\u003c/a\u003e\u003c/code\u003e if the query string could not be formatted\n correctly.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple",
          "name": "formatQuery",
          "package": "postgresql-simple",
          "signature": "Connection -\u003e Query -\u003e q -\u003e IO ByteString",
          "source": "src/Database-PostgreSQL-Simple.html#formatQuery",
          "type": "function"
        },
        "index": {
          "description": "Format query string This function is exposed to help with debugging and logging Do not use it to prepare queries for execution String parameters are escaped according to the character set in use on the Connection Throws FormatError if the query string could not be formatted correctly",
          "hierarchy": "Database PostgreSQL Simple",
          "module": "Database.PostgreSQL.Simple",
          "name": "formatQuery",
          "normalized": "Connection-\u003eQuery-\u003ea-\u003eIO ByteString",
          "package": "postgresql-simple",
          "partial": "Query",
          "signature": "Connection-\u003eQuery-\u003eq-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:formatQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform a \u003ccode\u003eSELECT\u003c/code\u003e or other SQL query that is expected to return\n results. All results are retrieved and converted before this\n function returns.\n\u003c/p\u003e\u003cp\u003eWhen processing large results, this function will consume a lot of\n client-side memory.  Consider using \u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e\u003cp\u003eExceptions that may be thrown:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eFormatError\u003c/a\u003e\u003c/code\u003e: the query string could not be formatted correctly.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eQueryError\u003c/a\u003e\u003c/code\u003e: the result contains no columns (i.e. you should be\n   using \u003ccode\u003e\u003ca\u003eexecute\u003c/a\u003e\u003c/code\u003e instead of \u003ccode\u003e\u003ca\u003equery\u003c/a\u003e\u003c/code\u003e).\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eResultError\u003c/a\u003e\u003c/code\u003e: result conversion failed.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Database.PostgreSQL.Simple",
          "name": "query",
          "package": "postgresql-simple",
          "signature": "Connection -\u003e Query -\u003e q -\u003e IO [r]",
          "source": "src/Database-PostgreSQL-Simple.html#query",
          "type": "function"
        },
        "index": {
          "description": "Perform SELECT or other SQL query that is expected to return results All results are retrieved and converted before this function returns When processing large results this function will consume lot of client-side memory Consider using fold instead Exceptions that may be thrown FormatError the query string could not be formatted correctly QueryError the result contains no columns i.e you should be using execute instead of query ResultError result conversion failed",
          "hierarchy": "Database PostgreSQL Simple",
          "module": "Database.PostgreSQL.Simple",
          "name": "query",
          "normalized": "Connection-\u003eQuery-\u003ea-\u003eIO[b]",
          "package": "postgresql-simple",
          "signature": "Connection-\u003eQuery-\u003eq-\u003eIO[r]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003equery\u003c/a\u003e\u003c/code\u003e taking parser as argument\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple",
          "name": "queryWith",
          "package": "postgresql-simple",
          "signature": "RowParser r -\u003e Connection -\u003e Query -\u003e q -\u003e IO [r]",
          "source": "src/Database-PostgreSQL-Simple.html#queryWith",
          "type": "function"
        },
        "index": {
          "description": "version of query taking parser as argument",
          "hierarchy": "Database PostgreSQL Simple",
          "module": "Database.PostgreSQL.Simple",
          "name": "queryWith",
          "normalized": "RowParser a-\u003eConnection-\u003eQuery-\u003eb-\u003eIO[a]",
          "package": "postgresql-simple",
          "partial": "With",
          "signature": "RowParser r-\u003eConnection-\u003eQuery-\u003eq-\u003eIO[r]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:queryWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003equery_\u003c/a\u003e\u003c/code\u003e taking parser as argument\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple",
          "name": "queryWith_",
          "package": "postgresql-simple",
          "signature": "RowParser r -\u003e Connection -\u003e Query -\u003e IO [r]",
          "source": "src/Database-PostgreSQL-Simple.html#queryWith_",
          "type": "function"
        },
        "index": {
          "description": "version of query taking parser as argument",
          "hierarchy": "Database PostgreSQL Simple",
          "module": "Database.PostgreSQL.Simple",
          "name": "queryWith_",
          "normalized": "RowParser a-\u003eConnection-\u003eQuery-\u003eIO[a]",
          "package": "postgresql-simple",
          "partial": "With",
          "signature": "RowParser r-\u003eConnection-\u003eQuery-\u003eIO[r]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:queryWith_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003equery\u003c/a\u003e\u003c/code\u003e that does not perform query substitution.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple",
          "name": "query_",
          "package": "postgresql-simple",
          "signature": "Connection -\u003e Query -\u003e IO [r]",
          "source": "src/Database-PostgreSQL-Simple.html#query_",
          "type": "function"
        },
        "index": {
          "description": "version of query that does not perform query substitution",
          "hierarchy": "Database PostgreSQL Simple",
          "module": "Database.PostgreSQL.Simple",
          "name": "query_",
          "normalized": "Connection-\u003eQuery-\u003eIO[a]",
          "package": "postgresql-simple",
          "signature": "Connection-\u003eQuery-\u003eIO[r]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:query_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute \u003ccode\u003eINSERT ... RETURNING\u003c/code\u003e, \u003ccode\u003eUPDATE ... RETURNING\u003c/code\u003e, or other SQL\n query that accepts multi-row input and is expected to return results.\n Note that it is possible to write\n    \u003ccode\u003e\u003ccode\u003e\u003ca\u003equery\u003c/a\u003e\u003c/code\u003e conn \u003ca\u003eINSERT ... RETURNING ...\u003c/a\u003e ...\u003c/code\u003e\n in cases where you are only inserting a single row,  and do not need\n functionality analogous to \u003ccode\u003e\u003ca\u003eexecuteMany\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThrows \u003ccode\u003e\u003ca\u003eFormatError\u003c/a\u003e\u003c/code\u003e if the query could not be formatted correctly.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.Simple",
          "name": "returning",
          "package": "postgresql-simple",
          "signature": "Connection -\u003e Query -\u003e [q] -\u003e IO [r]",
          "source": "src/Database-PostgreSQL-Simple.html#returning",
          "type": "function"
        },
        "index": {
          "description": "Execute INSERT RETURNING UPDATE RETURNING or other SQL query that accepts multi-row input and is expected to return results Note that it is possible to write query conn INSERT RETURNING in cases where you are only inserting single row and do not need functionality analogous to executeMany Throws FormatError if the query could not be formatted correctly",
          "hierarchy": "Database PostgreSQL Simple",
          "module": "Database.PostgreSQL.Simple",
          "name": "returning",
          "normalized": "Connection-\u003eQuery-\u003e[a]-\u003eIO[b]",
          "package": "postgresql-simple",
          "signature": "Connection-\u003eQuery-\u003e[q]-\u003eIO[r]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:returning"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.Simple",
          "name": "transactionMode",
          "package": "postgresql-simple",
          "signature": "TransactionMode",
          "source": "src/Database-PostgreSQL-Simple.html#FoldOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL Simple",
          "module": "Database.PostgreSQL.Simple",
          "name": "transactionMode",
          "package": "postgresql-simple",
          "partial": "Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:transactionMode"
      }
    }
  ]
]