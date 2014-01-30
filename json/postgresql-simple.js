[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Arrays.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA Postgres array parser and pretty-printer.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.PostgreSQL.Simple.Arrays",
        "fct-package": "postgresql-simple",
        "fct-signature": "module",
        "fct-source": "src/Database-PostgreSQL-Simple-Arrays.html",
        "fct-type": "module",
        "title": "Arrays"
      },
      "index": {
        "description": "Postgres array parser and pretty-printer",
        "hierarchy": "Database PostgreSQL Simple Arrays",
        "module": "Database.PostgreSQL.Simple.Arrays",
        "name": "Arrays",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Arrays",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Arrays.html#t:ArrayFormat",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Arrays",
        "fct-package": "postgresql-simple",
        "fct-signature": "data",
        "fct-source": "src/Database-PostgreSQL-Simple-Arrays.html#ArrayFormat",
        "fct-type": "data",
        "title": "ArrayFormat"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Arrays",
        "module": "Database.PostgreSQL.Simple.Arrays",
        "name": "ArrayFormat",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Array Format",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Arrays.html#v:Array",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Arrays",
        "fct-package": "postgresql-simple",
        "fct-signature": "Array [ArrayFormat]",
        "fct-source": "src/Database-PostgreSQL-Simple-Arrays.html#ArrayFormat",
        "fct-type": "function",
        "title": "Array"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Arrays",
        "module": "Database.PostgreSQL.Simple.Arrays",
        "name": "Array",
        "normalized": "Array[ArrayFormat]",
        "package": "postgresql-simple",
        "partial": "Array",
        "signature": "Array[ArrayFormat]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Arrays.html#v:Plain",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Arrays",
        "fct-package": "postgresql-simple",
        "fct-signature": "Plain ByteString",
        "fct-source": "src/Database-PostgreSQL-Simple-Arrays.html#ArrayFormat",
        "fct-type": "function",
        "title": "Plain"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Arrays",
        "module": "Database.PostgreSQL.Simple.Arrays",
        "name": "Plain",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Plain",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Arrays.html#v:Quoted",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Arrays",
        "fct-package": "postgresql-simple",
        "fct-signature": "Quoted ByteString",
        "fct-source": "src/Database-PostgreSQL-Simple-Arrays.html#ArrayFormat",
        "fct-type": "function",
        "title": "Quoted"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Arrays",
        "module": "Database.PostgreSQL.Simple.Arrays",
        "name": "Quoted",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Quoted",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Arrays.html#v:array",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Arrays",
        "fct-package": "postgresql-simple",
        "fct-signature": "Char -\u003e Parser [ArrayFormat]",
        "fct-source": "src/Database-PostgreSQL-Simple-Arrays.html#array",
        "fct-type": "function",
        "title": "array"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Arrays",
        "module": "Database.PostgreSQL.Simple.Arrays",
        "name": "array",
        "normalized": "Char-\u003eParser[ArrayFormat]",
        "package": "postgresql-simple",
        "partial": "",
        "signature": "Char-\u003eParser[ArrayFormat]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Arrays.html#v:arrayFormat",
      "description": {
        "fct-descr": "\u003cp\u003eParse one of three primitive field formats: array, quoted and plain.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.Arrays",
        "fct-package": "postgresql-simple",
        "fct-signature": "Char -\u003e Parser ArrayFormat",
        "fct-source": "src/Database-PostgreSQL-Simple-Arrays.html#arrayFormat",
        "fct-type": "function",
        "title": "arrayFormat"
      },
      "index": {
        "description": "Parse one of three primitive field formats array quoted and plain",
        "hierarchy": "Database PostgreSQL Simple Arrays",
        "module": "Database.PostgreSQL.Simple.Arrays",
        "name": "arrayFormat",
        "normalized": "Char-\u003eParser ArrayFormat",
        "package": "postgresql-simple",
        "partial": "Format",
        "signature": "Char-\u003eParser ArrayFormat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Arrays.html#v:delimit",
      "description": {
        "fct-descr": "\u003cp\u003eFormat a list of array format items, inserting the appropriate delimiter\n   between them. When the items are arrays, they will be delimited with\n   commas; otherwise, they are delimited with the passed-in-delimiter.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.Arrays",
        "fct-package": "postgresql-simple",
        "fct-signature": "Char -\u003e [ArrayFormat] -\u003e ByteString",
        "fct-source": "src/Database-PostgreSQL-Simple-Arrays.html#delimit",
        "fct-type": "function",
        "title": "delimit"
      },
      "index": {
        "description": "Format list of array format items inserting the appropriate delimiter between them When the items are arrays they will be delimited with commas otherwise they are delimited with the passed-in-delimiter",
        "hierarchy": "Database PostgreSQL Simple Arrays",
        "module": "Database.PostgreSQL.Simple.Arrays",
        "name": "delimit",
        "normalized": "Char-\u003e[ArrayFormat]-\u003eByteString",
        "package": "postgresql-simple",
        "partial": "",
        "signature": "Char-\u003e[ArrayFormat]-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Arrays.html#v:esc",
      "description": {
        "fct-descr": "\u003cp\u003eEscape a string according to Postgres double-quoted string format.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.Arrays",
        "fct-package": "postgresql-simple",
        "fct-signature": "ByteString -\u003e ByteString",
        "fct-source": "src/Database-PostgreSQL-Simple-Arrays.html#esc",
        "fct-type": "function",
        "title": "esc"
      },
      "index": {
        "description": "Escape string according to Postgres double-quoted string format",
        "hierarchy": "Database PostgreSQL Simple Arrays",
        "module": "Database.PostgreSQL.Simple.Arrays",
        "name": "esc",
        "normalized": "ByteString-\u003eByteString",
        "package": "postgresql-simple",
        "partial": "",
        "signature": "ByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Arrays.html#v:fmt",
      "description": {
        "fct-descr": "\u003cp\u003eFormat an array format item, using the delimiter character if the item is\n   itself an array.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.Arrays",
        "fct-package": "postgresql-simple",
        "fct-signature": "Char -\u003e ArrayFormat -\u003e ByteString",
        "fct-source": "src/Database-PostgreSQL-Simple-Arrays.html#fmt",
        "fct-type": "function",
        "title": "fmt"
      },
      "index": {
        "description": "Format an array format item using the delimiter character if the item is itself an array",
        "hierarchy": "Database PostgreSQL Simple Arrays",
        "module": "Database.PostgreSQL.Simple.Arrays",
        "name": "fmt",
        "normalized": "Char-\u003eArrayFormat-\u003eByteString",
        "package": "postgresql-simple",
        "partial": "",
        "signature": "Char-\u003eArrayFormat-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Arrays.html#v:fmt-39-",
      "description": {
        "fct-descr": "\u003cp\u003eFormat an array format item, using the delimiter character if the item is\n   itself an array, optionally applying quoting rules. Creates copies for\n   safety when used in \u003ccode\u003eFromField\u003c/code\u003e instances.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.Arrays",
        "fct-package": "postgresql-simple",
        "fct-signature": "Bool -\u003e Char -\u003e ArrayFormat -\u003e ByteString",
        "fct-source": "src/Database-PostgreSQL-Simple-Arrays.html#fmt%27",
        "fct-type": "function",
        "title": "fmt'"
      },
      "index": {
        "description": "Format an array format item using the delimiter character if the item is itself an array optionally applying quoting rules Creates copies for safety when used in FromField instances",
        "hierarchy": "Database PostgreSQL Simple Arrays",
        "module": "Database.PostgreSQL.Simple.Arrays",
        "name": "fmt'",
        "normalized": "Bool-\u003eChar-\u003eArrayFormat-\u003eByteString",
        "package": "postgresql-simple",
        "partial": "",
        "signature": "Bool-\u003eChar-\u003eArrayFormat-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Arrays.html#v:plain",
      "description": {
        "fct-descr": "\u003cp\u003eRecognizes a plain string literal, not containing quotes or brackets and\n   not containing the delimiter character.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.Arrays",
        "fct-package": "postgresql-simple",
        "fct-signature": "Char -\u003e Parser ByteString",
        "fct-source": "src/Database-PostgreSQL-Simple-Arrays.html#plain",
        "fct-type": "function",
        "title": "plain"
      },
      "index": {
        "description": "Recognizes plain string literal not containing quotes or brackets and not containing the delimiter character",
        "hierarchy": "Database PostgreSQL Simple Arrays",
        "module": "Database.PostgreSQL.Simple.Arrays",
        "name": "plain",
        "normalized": "Char-\u003eParser ByteString",
        "package": "postgresql-simple",
        "partial": "",
        "signature": "Char-\u003eParser ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Arrays.html#v:quoted",
      "description": {
        "fct-descr": "\u003cp\u003eRecognizes a quoted string.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.Arrays",
        "fct-package": "postgresql-simple",
        "fct-signature": "Parser ByteString",
        "fct-source": "src/Database-PostgreSQL-Simple-Arrays.html#quoted",
        "fct-type": "function",
        "title": "quoted"
      },
      "index": {
        "description": "Recognizes quoted string",
        "hierarchy": "Database PostgreSQL Simple Arrays",
        "module": "Database.PostgreSQL.Simple.Arrays",
        "name": "quoted",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use TypeInfo instead\n\u003c/p\u003e\u003c/div\u003e\u003c/div\u003e",
        "fct-module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "fct-package": "postgresql-simple",
        "fct-signature": "module",
        "fct-source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html",
        "fct-type": "module",
        "title": "BuiltinTypes"
      },
      "index": {
        "description": "Deprecated Use TypeInfo instead",
        "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
        "module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "name": "BuiltinTypes",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Builtin Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#t:BuiltinType",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "fct-package": "postgresql-simple",
        "fct-signature": "data",
        "fct-source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
        "fct-type": "data",
        "title": "BuiltinType"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
        "module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "name": "BuiltinType",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Builtin Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:AbsTime",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "fct-package": "postgresql-simple",
        "fct-signature": "AbsTime",
        "fct-source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
        "fct-type": "function",
        "title": "AbsTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
        "module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "name": "AbsTime",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Abs Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:Bit",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "fct-package": "postgresql-simple",
        "fct-signature": "Bit",
        "fct-source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
        "fct-type": "function",
        "title": "Bit"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
        "module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "name": "Bit",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Bit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:Bool",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "fct-package": "postgresql-simple",
        "fct-signature": "Bool",
        "fct-source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
        "fct-type": "function",
        "title": "Bool"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
        "module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "name": "Bool",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Bool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:Box",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "fct-package": "postgresql-simple",
        "fct-signature": "Box",
        "fct-source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
        "fct-type": "function",
        "title": "Box"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
        "module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "name": "Box",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Box",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:BpChar",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "fct-package": "postgresql-simple",
        "fct-signature": "BpChar",
        "fct-source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
        "fct-type": "function",
        "title": "BpChar"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
        "module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "name": "BpChar",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Bp Char",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:ByteA",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "fct-package": "postgresql-simple",
        "fct-signature": "ByteA",
        "fct-source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
        "fct-type": "function",
        "title": "ByteA"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
        "module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "name": "ByteA",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Byte",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:Char",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "fct-package": "postgresql-simple",
        "fct-signature": "Char",
        "fct-source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
        "fct-type": "function",
        "title": "Char"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
        "module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "name": "Char",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Char",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:Cid",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "fct-package": "postgresql-simple",
        "fct-signature": "Cid",
        "fct-source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
        "fct-type": "function",
        "title": "Cid"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
        "module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "name": "Cid",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Cid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:Cidr",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "fct-package": "postgresql-simple",
        "fct-signature": "Cidr",
        "fct-source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
        "fct-type": "function",
        "title": "Cidr"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
        "module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "name": "Cidr",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Cidr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:Circle",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "fct-package": "postgresql-simple",
        "fct-signature": "Circle",
        "fct-source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
        "fct-type": "function",
        "title": "Circle"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
        "module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "name": "Circle",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Circle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:Date",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "fct-package": "postgresql-simple",
        "fct-signature": "Date",
        "fct-source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
        "fct-type": "function",
        "title": "Date"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
        "module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "name": "Date",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Date",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:Float4",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "fct-package": "postgresql-simple",
        "fct-signature": "Float4",
        "fct-source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
        "fct-type": "function",
        "title": "Float4"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
        "module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "name": "Float4",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Float",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:Float8",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "fct-package": "postgresql-simple",
        "fct-signature": "Float8",
        "fct-source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
        "fct-type": "function",
        "title": "Float8"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
        "module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "name": "Float8",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Float",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:Inet",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "fct-package": "postgresql-simple",
        "fct-signature": "Inet",
        "fct-source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
        "fct-type": "function",
        "title": "Inet"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
        "module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "name": "Inet",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Inet",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:Int2",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "fct-package": "postgresql-simple",
        "fct-signature": "Int2",
        "fct-source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
        "fct-type": "function",
        "title": "Int2"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
        "module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "name": "Int2",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:Int4",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "fct-package": "postgresql-simple",
        "fct-signature": "Int4",
        "fct-source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
        "fct-type": "function",
        "title": "Int4"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
        "module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "name": "Int4",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:Int8",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "fct-package": "postgresql-simple",
        "fct-signature": "Int8",
        "fct-source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
        "fct-type": "function",
        "title": "Int8"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
        "module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "name": "Int8",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:Interval",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "fct-package": "postgresql-simple",
        "fct-signature": "Interval",
        "fct-source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
        "fct-type": "function",
        "title": "Interval"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
        "module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "name": "Interval",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Interval",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:JSON",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "fct-package": "postgresql-simple",
        "fct-signature": "JSON",
        "fct-source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
        "fct-type": "function",
        "title": "JSON"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
        "module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "name": "JSON",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "JSON",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:LSeg",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "fct-package": "postgresql-simple",
        "fct-signature": "LSeg",
        "fct-source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
        "fct-type": "function",
        "title": "LSeg"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
        "module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "name": "LSeg",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "LSeg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:Line",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "fct-package": "postgresql-simple",
        "fct-signature": "Line",
        "fct-source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
        "fct-type": "function",
        "title": "Line"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
        "module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "name": "Line",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Line",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:MacAddr",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "fct-package": "postgresql-simple",
        "fct-signature": "MacAddr",
        "fct-source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
        "fct-type": "function",
        "title": "MacAddr"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
        "module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "name": "MacAddr",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Mac Addr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:Money",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "fct-package": "postgresql-simple",
        "fct-signature": "Money",
        "fct-source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
        "fct-type": "function",
        "title": "Money"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
        "module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "name": "Money",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Money",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:Name",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "fct-package": "postgresql-simple",
        "fct-signature": "Name",
        "fct-source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
        "fct-type": "function",
        "title": "Name"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
        "module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "name": "Name",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:Numeric",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "fct-package": "postgresql-simple",
        "fct-signature": "Numeric",
        "fct-source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
        "fct-type": "function",
        "title": "Numeric"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
        "module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "name": "Numeric",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Numeric",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:Oid",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "fct-package": "postgresql-simple",
        "fct-signature": "Oid",
        "fct-source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
        "fct-type": "function",
        "title": "Oid"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
        "module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "name": "Oid",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Oid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:Path",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "fct-package": "postgresql-simple",
        "fct-signature": "Path",
        "fct-source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
        "fct-type": "function",
        "title": "Path"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
        "module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "name": "Path",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:Point",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "fct-package": "postgresql-simple",
        "fct-signature": "Point",
        "fct-source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
        "fct-type": "function",
        "title": "Point"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
        "module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "name": "Point",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Point",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:Polygon",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "fct-package": "postgresql-simple",
        "fct-signature": "Polygon",
        "fct-source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
        "fct-type": "function",
        "title": "Polygon"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
        "module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "name": "Polygon",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Polygon",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:Record",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "fct-package": "postgresql-simple",
        "fct-signature": "Record",
        "fct-source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
        "fct-type": "function",
        "title": "Record"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
        "module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "name": "Record",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Record",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:RefCursor",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "fct-package": "postgresql-simple",
        "fct-signature": "RefCursor",
        "fct-source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
        "fct-type": "function",
        "title": "RefCursor"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
        "module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "name": "RefCursor",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Ref Cursor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:RegProc",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "fct-package": "postgresql-simple",
        "fct-signature": "RegProc",
        "fct-source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
        "fct-type": "function",
        "title": "RegProc"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
        "module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "name": "RegProc",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Reg Proc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:RelTime",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "fct-package": "postgresql-simple",
        "fct-signature": "RelTime",
        "fct-source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
        "fct-type": "function",
        "title": "RelTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
        "module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "name": "RelTime",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Rel Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:TInterval",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "fct-package": "postgresql-simple",
        "fct-signature": "TInterval",
        "fct-source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
        "fct-type": "function",
        "title": "TInterval"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
        "module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "name": "TInterval",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "TInterval",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:Text",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "fct-package": "postgresql-simple",
        "fct-signature": "Text",
        "fct-source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
        "fct-type": "function",
        "title": "Text"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
        "module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "name": "Text",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Text",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:Tid",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "fct-package": "postgresql-simple",
        "fct-signature": "Tid",
        "fct-source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
        "fct-type": "function",
        "title": "Tid"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
        "module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "name": "Tid",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Tid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:Time",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "fct-package": "postgresql-simple",
        "fct-signature": "Time",
        "fct-source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
        "fct-type": "function",
        "title": "Time"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
        "module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "name": "Time",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:TimeTZ",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "fct-package": "postgresql-simple",
        "fct-signature": "TimeTZ",
        "fct-source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
        "fct-type": "function",
        "title": "TimeTZ"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
        "module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "name": "TimeTZ",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Time TZ",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:Timestamp",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "fct-package": "postgresql-simple",
        "fct-signature": "Timestamp",
        "fct-source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
        "fct-type": "function",
        "title": "Timestamp"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
        "module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "name": "Timestamp",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Timestamp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:TimestampTZ",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "fct-package": "postgresql-simple",
        "fct-signature": "TimestampTZ",
        "fct-source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
        "fct-type": "function",
        "title": "TimestampTZ"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
        "module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "name": "TimestampTZ",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Timestamp TZ",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:UUID",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "fct-package": "postgresql-simple",
        "fct-signature": "UUID",
        "fct-source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
        "fct-type": "function",
        "title": "UUID"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
        "module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "name": "UUID",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "UUID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:Unknown",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "fct-package": "postgresql-simple",
        "fct-signature": "Unknown",
        "fct-source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
        "fct-type": "function",
        "title": "Unknown"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
        "module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "name": "Unknown",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Unknown",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:VarBit",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "fct-package": "postgresql-simple",
        "fct-signature": "VarBit",
        "fct-source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
        "fct-type": "function",
        "title": "VarBit"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
        "module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "name": "VarBit",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Var Bit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:VarChar",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "fct-package": "postgresql-simple",
        "fct-signature": "VarChar",
        "fct-source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
        "fct-type": "function",
        "title": "VarChar"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
        "module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "name": "VarChar",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Var Char",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:Void",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "fct-package": "postgresql-simple",
        "fct-signature": "Void",
        "fct-source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
        "fct-type": "function",
        "title": "Void"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
        "module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "name": "Void",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Void",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:Xid",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "fct-package": "postgresql-simple",
        "fct-signature": "Xid",
        "fct-source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
        "fct-type": "function",
        "title": "Xid"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
        "module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "name": "Xid",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Xid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:Xml",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "fct-package": "postgresql-simple",
        "fct-signature": "Xml",
        "fct-source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#BuiltinType",
        "fct-type": "function",
        "title": "Xml"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
        "module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "name": "Xml",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Xml",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:builtin2oid",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "fct-package": "postgresql-simple",
        "fct-signature": "BuiltinType -\u003e Oid",
        "fct-source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#builtin2oid",
        "fct-type": "function",
        "title": "builtin2oid"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
        "module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "name": "builtin2oid",
        "normalized": "BuiltinType-\u003eOid",
        "package": "postgresql-simple",
        "partial": "",
        "signature": "BuiltinType-\u003eOid"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:builtin2typname",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "fct-package": "postgresql-simple",
        "fct-signature": "BuiltinType -\u003e ByteString",
        "fct-source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#builtin2typname",
        "fct-type": "function",
        "title": "builtin2typname"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
        "module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "name": "builtin2typname",
        "normalized": "BuiltinType-\u003eByteString",
        "package": "postgresql-simple",
        "partial": "",
        "signature": "BuiltinType-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:oid2builtin",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "fct-package": "postgresql-simple",
        "fct-signature": "Oid -\u003e Maybe BuiltinType",
        "fct-source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#oid2builtin",
        "fct-type": "function",
        "title": "oid2builtin"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
        "module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "name": "oid2builtin",
        "normalized": "Oid-\u003eMaybe BuiltinType",
        "package": "postgresql-simple",
        "partial": "",
        "signature": "Oid-\u003eMaybe BuiltinType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-BuiltinTypes.html#v:oid2typname",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "fct-package": "postgresql-simple",
        "fct-signature": "Oid -\u003e Maybe ByteString",
        "fct-source": "src/Database-PostgreSQL-Simple-BuiltinTypes.html#oid2typname",
        "fct-type": "function",
        "title": "oid2typname"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple BuiltinTypes",
        "module": "Database.PostgreSQL.Simple.BuiltinTypes",
        "name": "oid2typname",
        "normalized": "Oid-\u003eMaybe ByteString",
        "package": "postgresql-simple",
        "partial": "",
        "signature": "Oid-\u003eMaybe ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Copy.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003emid-level support for COPY IN and COPY OUT.   See\n \u003ca\u003ehttp://www.postgresql.org/docs/9.2/static/sql-copy.html\u003c/a\u003e for\n more information.\n\u003c/p\u003e\u003cp\u003eTo use this binding,  first call \u003ccode\u003e\u003ca\u003ecopy\u003c/a\u003e\u003c/code\u003e with an appropriate\n query as documented in the link above.  Then, in the case of a\n \u003ccode\u003eCOPY TO STDOUT\u003c/code\u003e query,  call \u003ccode\u003e\u003ca\u003egetCopyData\u003c/a\u003e\u003c/code\u003e repeatedly until it\n returns \u003ccode\u003e\u003ca\u003eCopyOutDone\u003c/a\u003e\u003c/code\u003e.   In the case of a \u003ccode\u003eCOPY FROM STDIN\u003c/code\u003e\n query,  call \u003ccode\u003e\u003ca\u003eputCopyData\u003c/a\u003e\u003c/code\u003e repeatedly and then finish by calling\n either \u003ccode\u003e\u003ca\u003eputCopyEnd\u003c/a\u003e\u003c/code\u003e to proceed or \u003ccode\u003e\u003ca\u003eputCopyError\u003c/a\u003e\u003c/code\u003e to abort.\n\u003c/p\u003e\u003cp\u003eYou cannot issue another query on the same connection while a copy\n is ongoing; this will result in an exception.   It is harmless to\n concurrently call \u003ccode\u003egetNotification\u003c/code\u003e on a connection while it is in\n a \u003ccode\u003eCopyIn\u003c/code\u003e or \u003ccode\u003eCopyOut\u003c/code\u003e state,  however be aware that current versions\n of the PostgreSQL backend will not deliver notifications to a client\n while a transaction is ongoing.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.PostgreSQL.Simple.Copy",
        "fct-package": "postgresql-simple",
        "fct-signature": "module",
        "fct-source": "src/Database-PostgreSQL-Simple-Copy.html",
        "fct-type": "module",
        "title": "Copy"
      },
      "index": {
        "description": "mid-level support for COPY IN and COPY OUT See http www.postgresql.org docs static sql-copy.html for more information To use this binding first call copy with an appropriate query as documented in the link above Then in the case of COPY TO STDOUT query call getCopyData repeatedly until it returns CopyOutDone In the case of COPY FROM STDIN query call putCopyData repeatedly and then finish by calling either putCopyEnd to proceed or putCopyError to abort You cannot issue another query on the same connection while copy is ongoing this will result in an exception It is harmless to concurrently call getNotification on connection while it is in CopyIn or CopyOut state however be aware that current versions of the PostgreSQL backend will not deliver notifications to client while transaction is ongoing",
        "hierarchy": "Database PostgreSQL Simple Copy",
        "module": "Database.PostgreSQL.Simple.Copy",
        "name": "Copy",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Copy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Copy.html#t:CopyOutResult",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Copy",
        "fct-package": "postgresql-simple",
        "fct-signature": "data",
        "fct-source": "src/Database-PostgreSQL-Simple-Copy.html#CopyOutResult",
        "fct-type": "data",
        "title": "CopyOutResult"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Copy",
        "module": "Database.PostgreSQL.Simple.Copy",
        "name": "CopyOutResult",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Copy Out Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Copy.html#v:CopyOutDone",
      "description": {
        "fct-descr": "\u003cp\u003eNo more rows, and a count of the\n   number of rows returned.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.Copy",
        "fct-package": "postgresql-simple",
        "fct-signature": "CopyOutDone !Int64",
        "fct-source": "src/Database-PostgreSQL-Simple-Copy.html#CopyOutResult",
        "fct-type": "function",
        "title": "CopyOutDone"
      },
      "index": {
        "description": "No more rows and count of the number of rows returned",
        "hierarchy": "Database PostgreSQL Simple Copy",
        "module": "Database.PostgreSQL.Simple.Copy",
        "name": "CopyOutDone",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Copy Out Done",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Copy.html#v:CopyOutRow",
      "description": {
        "fct-descr": "\u003cp\u003eData representing either exactly\n   one row of the result,  or header\n   or footer data depending on format.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.Copy",
        "fct-package": "postgresql-simple",
        "fct-signature": "CopyOutRow !ByteString",
        "fct-source": "src/Database-PostgreSQL-Simple-Copy.html#CopyOutResult",
        "fct-type": "function",
        "title": "CopyOutRow"
      },
      "index": {
        "description": "Data representing either exactly one row of the result or header or footer data depending on format",
        "hierarchy": "Database PostgreSQL Simple Copy",
        "module": "Database.PostgreSQL.Simple.Copy",
        "name": "CopyOutRow",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Copy Out Row",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Copy.html#v:copy",
      "description": {
        "fct-descr": "\u003cp\u003eIssue a \u003ccode\u003eCOPY FROM STDIN\u003c/code\u003e or \u003ccode\u003eCOPY TO STDOUT\u003c/code\u003e query.   In the former\n   case, the connection's state will change to \u003ccode\u003eCopyIn\u003c/code\u003e;  in the latter,\n   \u003ccode\u003eCopyOut\u003c/code\u003e.  The connection must be in the ready state in order\n   to call this function.  Performs parameter subsitution.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.Copy",
        "fct-package": "postgresql-simple",
        "fct-signature": "Connection -\u003e Query -\u003e params -\u003e IO ()",
        "fct-source": "src/Database-PostgreSQL-Simple-Copy.html#copy",
        "fct-type": "function",
        "title": "copy"
      },
      "index": {
        "description": "Issue COPY FROM STDIN or COPY TO STDOUT query In the former case the connection state will change to CopyIn in the latter CopyOut The connection must be in the ready state in order to call this function Performs parameter subsitution",
        "hierarchy": "Database PostgreSQL Simple Copy",
        "module": "Database.PostgreSQL.Simple.Copy",
        "name": "copy",
        "normalized": "Connection-\u003eQuery-\u003ea-\u003eIO()",
        "package": "postgresql-simple",
        "partial": "",
        "signature": "Connection-\u003eQuery-\u003eparams-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Copy.html#v:copy_",
      "description": {
        "fct-descr": "\u003cp\u003eIssue a \u003ccode\u003eCOPY FROM STDIN\u003c/code\u003e or \u003ccode\u003eCOPY TO STDOUT\u003c/code\u003e query.   In the former\n   case, the connection's state will change to \u003ccode\u003eCopyIn\u003c/code\u003e;  in the latter,\n   \u003ccode\u003eCopyOut\u003c/code\u003e.  The connection must be in the ready state in order\n   to call this function.  Does not perform parameter subsitution.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.Copy",
        "fct-package": "postgresql-simple",
        "fct-signature": "Connection -\u003e Query -\u003e IO ()",
        "fct-source": "src/Database-PostgreSQL-Simple-Copy.html#copy_",
        "fct-type": "function",
        "title": "copy_"
      },
      "index": {
        "description": "Issue COPY FROM STDIN or COPY TO STDOUT query In the former case the connection state will change to CopyIn in the latter CopyOut The connection must be in the ready state in order to call this function Does not perform parameter subsitution",
        "hierarchy": "Database PostgreSQL Simple Copy",
        "module": "Database.PostgreSQL.Simple.Copy",
        "name": "copy_",
        "normalized": "Connection-\u003eQuery-\u003eIO()",
        "package": "postgresql-simple",
        "partial": "",
        "signature": "Connection-\u003eQuery-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Copy.html#v:getCopyData",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve some data from a \u003ccode\u003eCOPY TO STDOUT\u003c/code\u003e query.   A connection\n   must be in the \u003ccode\u003eCopyOut\u003c/code\u003e state in order to call this function.  If this\n   returns a \u003ccode\u003e\u003ca\u003eCopyOutRow\u003c/a\u003e\u003c/code\u003e, the connection remains in the \u003ccode\u003eCopyOut\u003c/code\u003e state,\n   if it returns \u003ccode\u003e\u003ca\u003eCopyOutDone\u003c/a\u003e\u003c/code\u003e, then the connection has reverted to the\n   ready state.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.Copy",
        "fct-package": "postgresql-simple",
        "fct-signature": "Connection -\u003e IO CopyOutResult",
        "fct-source": "src/Database-PostgreSQL-Simple-Copy.html#getCopyData",
        "fct-type": "function",
        "title": "getCopyData"
      },
      "index": {
        "description": "Retrieve some data from COPY TO STDOUT query connection must be in the CopyOut state in order to call this function If this returns CopyOutRow the connection remains in the CopyOut state if it returns CopyOutDone then the connection has reverted to the ready state",
        "hierarchy": "Database PostgreSQL Simple Copy",
        "module": "Database.PostgreSQL.Simple.Copy",
        "name": "getCopyData",
        "normalized": "Connection-\u003eIO CopyOutResult",
        "package": "postgresql-simple",
        "partial": "Copy Data",
        "signature": "Connection-\u003eIO CopyOutResult"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Copy.html#v:putCopyData",
      "description": {
        "fct-descr": "\u003cp\u003eFeed some data to a \u003ccode\u003eCOPY FROM STDIN\u003c/code\u003e query.  Note that\n   the data does not need to represent a single row,  or even an\n   integral number of rows.  The net result of\n   \u003ccode\u003eputCopyData conn a \u003e\u003e putCopyData conn b\u003c/code\u003e\n   is the same as \u003ccode\u003eputCopyData conn c\u003c/code\u003e whenever \u003ccode\u003ec == BS.append a b\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eA connection must be in the \u003ccode\u003eCopyIn\u003c/code\u003e state in order to call this\n   function,  otherwise a \u003ccode\u003e\u003ca\u003eSqlError\u003c/a\u003e\u003c/code\u003e exception will result.  The\n   connection remains in the \u003ccode\u003eCopyIn\u003c/code\u003e state after this function\n   is called.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.Copy",
        "fct-package": "postgresql-simple",
        "fct-signature": "Connection -\u003e ByteString -\u003e IO ()",
        "fct-source": "src/Database-PostgreSQL-Simple-Copy.html#putCopyData",
        "fct-type": "function",
        "title": "putCopyData"
      },
      "index": {
        "description": "Feed some data to COPY FROM STDIN query Note that the data does not need to represent single row or even an integral number of rows The net result of putCopyData conn putCopyData conn is the same as putCopyData conn whenever BS.append connection must be in the CopyIn state in order to call this function otherwise SqlError exception will result The connection remains in the CopyIn state after this function is called",
        "hierarchy": "Database PostgreSQL Simple Copy",
        "module": "Database.PostgreSQL.Simple.Copy",
        "name": "putCopyData",
        "normalized": "Connection-\u003eByteString-\u003eIO()",
        "package": "postgresql-simple",
        "partial": "Copy Data",
        "signature": "Connection-\u003eByteString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Copy.html#v:putCopyEnd",
      "description": {
        "fct-descr": "\u003cp\u003eCompletes a \u003ccode\u003eCOPY FROM STDIN\u003c/code\u003e query.  Returns the number of rows\n   processed.\n\u003c/p\u003e\u003cp\u003eA connection must be in the \u003ccode\u003eCopyIn\u003c/code\u003e state in order to call this\n   function,  otherwise a \u003ccode\u003e\u003ca\u003eSqlError\u003c/a\u003e\u003c/code\u003e exception will result.  The\n   connection's state changes back to ready after this function\n   is called.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.Copy",
        "fct-package": "postgresql-simple",
        "fct-signature": "Connection -\u003e IO Int64",
        "fct-source": "src/Database-PostgreSQL-Simple-Copy.html#putCopyEnd",
        "fct-type": "function",
        "title": "putCopyEnd"
      },
      "index": {
        "description": "Completes COPY FROM STDIN query Returns the number of rows processed connection must be in the CopyIn state in order to call this function otherwise SqlError exception will result The connection state changes back to ready after this function is called",
        "hierarchy": "Database PostgreSQL Simple Copy",
        "module": "Database.PostgreSQL.Simple.Copy",
        "name": "putCopyEnd",
        "normalized": "Connection-\u003eIO Int",
        "package": "postgresql-simple",
        "partial": "Copy End",
        "signature": "Connection-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Copy.html#v:putCopyError",
      "description": {
        "fct-descr": "\u003cp\u003eAborts a \u003ccode\u003eCOPY FROM STDIN\u003c/code\u003e query.  The string parameter is simply\n   an arbitrary error message that may show up in the PostgreSQL\n   server's log.\n\u003c/p\u003e\u003cp\u003eA connection must be in the \u003ccode\u003eCopyIn\u003c/code\u003e state in order to call this\n   function,  otherwise a \u003ccode\u003e\u003ca\u003eSqlError\u003c/a\u003e\u003c/code\u003e exception will result.  The\n   connection's state changes back to ready after this function\n   is called.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.Copy",
        "fct-package": "postgresql-simple",
        "fct-signature": "Connection -\u003e ByteString -\u003e IO ()",
        "fct-source": "src/Database-PostgreSQL-Simple-Copy.html#putCopyError",
        "fct-type": "function",
        "title": "putCopyError"
      },
      "index": {
        "description": "Aborts COPY FROM STDIN query The string parameter is simply an arbitrary error message that may show up in the PostgreSQL server log connection must be in the CopyIn state in order to call this function otherwise SqlError exception will result The connection state changes back to ready after this function is called",
        "hierarchy": "Database PostgreSQL Simple Copy",
        "module": "Database.PostgreSQL.Simple.Copy",
        "name": "putCopyError",
        "normalized": "Connection-\u003eByteString-\u003eIO()",
        "package": "postgresql-simple",
        "partial": "Copy Error",
        "signature": "Connection-\u003eByteString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Errors.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e| Module for parsing errors from postgresql error messages.\n  Currently only parses integrity violation errors (class 23).\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote: Success of parsing may depend on language settings.\u003c/em\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.PostgreSQL.Simple.Errors",
        "fct-package": "postgresql-simple",
        "fct-signature": "module",
        "fct-source": "src/Database-PostgreSQL-Simple-Errors.html",
        "fct-type": "module",
        "title": "Errors"
      },
      "index": {
        "description": "Module for parsing errors from postgresql error messages Currently only parses integrity violation errors class Note Success of parsing may depend on language settings",
        "hierarchy": "Database PostgreSQL Simple Errors",
        "module": "Database.PostgreSQL.Simple.Errors",
        "name": "Errors",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Errors",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Errors.html#t:ConstraintViolation",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Errors",
        "fct-package": "postgresql-simple",
        "fct-signature": "data",
        "fct-source": "src/Database-PostgreSQL-Simple-Errors.html#ConstraintViolation",
        "fct-type": "data",
        "title": "ConstraintViolation"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Errors",
        "module": "Database.PostgreSQL.Simple.Errors",
        "name": "ConstraintViolation",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Constraint Violation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Errors.html#v:CheckViolation",
      "description": {
        "fct-descr": "\u003cp\u003eRelation name (usually table), constraint name\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.Errors",
        "fct-package": "postgresql-simple",
        "fct-signature": "CheckViolation ByteString ByteString",
        "fct-source": "src/Database-PostgreSQL-Simple-Errors.html#ConstraintViolation",
        "fct-type": "function",
        "title": "CheckViolation"
      },
      "index": {
        "description": "Relation name usually table constraint name",
        "hierarchy": "Database PostgreSQL Simple Errors",
        "module": "Database.PostgreSQL.Simple.Errors",
        "name": "CheckViolation",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Check Violation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Errors.html#v:ForeignKeyViolation",
      "description": {
        "fct-descr": "\u003cp\u003eTable name and name of violated constraint\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.Errors",
        "fct-package": "postgresql-simple",
        "fct-signature": "ForeignKeyViolation ByteString ByteString",
        "fct-source": "src/Database-PostgreSQL-Simple-Errors.html#ConstraintViolation",
        "fct-type": "function",
        "title": "ForeignKeyViolation"
      },
      "index": {
        "description": "Table name and name of violated constraint",
        "hierarchy": "Database PostgreSQL Simple Errors",
        "module": "Database.PostgreSQL.Simple.Errors",
        "name": "ForeignKeyViolation",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Foreign Key Violation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Errors.html#v:NotNullViolation",
      "description": {
        "fct-descr": "\u003cp\u003eThe field is a column name\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.Errors",
        "fct-package": "postgresql-simple",
        "fct-signature": "NotNullViolation ByteString",
        "fct-source": "src/Database-PostgreSQL-Simple-Errors.html#ConstraintViolation",
        "fct-type": "function",
        "title": "NotNullViolation"
      },
      "index": {
        "description": "The field is column name",
        "hierarchy": "Database PostgreSQL Simple Errors",
        "module": "Database.PostgreSQL.Simple.Errors",
        "name": "NotNullViolation",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Not Null Violation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Errors.html#v:UniqueViolation",
      "description": {
        "fct-descr": "\u003cp\u003eName of violated constraint\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.Errors",
        "fct-package": "postgresql-simple",
        "fct-signature": "UniqueViolation ByteString",
        "fct-source": "src/Database-PostgreSQL-Simple-Errors.html#ConstraintViolation",
        "fct-type": "function",
        "title": "UniqueViolation"
      },
      "index": {
        "description": "Name of violated constraint",
        "hierarchy": "Database PostgreSQL Simple Errors",
        "module": "Database.PostgreSQL.Simple.Errors",
        "name": "UniqueViolation",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Unique Violation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Errors.html#v:catchViolation",
      "description": {
        "fct-descr": "\u003cp\u003eCatches SqlError, tries to convert to ConstraintViolation, re-throws\n on fail. Provides alternative interface to catchJust\n\u003c/p\u003e\u003cpre\u003e createUser = catchViolation catcher $ execute conn ...\n   where\n     catcher _ (UniqueViolation \"user_login_key\") = ...\n     catcher e _ = throwIO e\n\u003c/pre\u003e",
        "fct-module": "Database.PostgreSQL.Simple.Errors",
        "fct-package": "postgresql-simple",
        "fct-signature": "(SqlError -\u003e ConstraintViolation -\u003e IO a) -\u003e IO a -\u003e IO a",
        "fct-source": "src/Database-PostgreSQL-Simple-Errors.html#catchViolation",
        "fct-type": "function",
        "title": "catchViolation"
      },
      "index": {
        "description": "Catches SqlError tries to convert to ConstraintViolation re-throws on fail Provides alternative interface to catchJust createUser catchViolation catcher execute conn where catcher UniqueViolation user login key catcher throwIO",
        "hierarchy": "Database PostgreSQL Simple Errors",
        "module": "Database.PostgreSQL.Simple.Errors",
        "name": "catchViolation",
        "normalized": "(SqlError-\u003eConstraintViolation-\u003eIO a)-\u003eIO a-\u003eIO a",
        "package": "postgresql-simple",
        "partial": "Violation",
        "signature": "(SqlError-\u003eConstraintViolation-\u003eIO a)-\u003eIO a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Errors.html#v:constraintViolation",
      "description": {
        "fct-descr": "\u003cp\u003eTries to convert \u003ccode\u003e\u003ca\u003eSqlError\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003eConstrainViolation\u003c/code\u003e, checks sqlState and\n succeedes only if able to parse sqlErrorMsg.\n\u003c/p\u003e\u003cpre\u003e createUser = catchJust constraintViolation catcher $ execute conn ...\n   where\n     catcher UniqueViolation \"user_login_key\" = ...\n     catcher _ = ...\n\u003c/pre\u003e",
        "fct-module": "Database.PostgreSQL.Simple.Errors",
        "fct-package": "postgresql-simple",
        "fct-signature": "SqlError -\u003e Maybe ConstraintViolation",
        "fct-source": "src/Database-PostgreSQL-Simple-Errors.html#constraintViolation",
        "fct-type": "function",
        "title": "constraintViolation"
      },
      "index": {
        "description": "Tries to convert SqlError to ConstrainViolation checks sqlState and succeedes only if able to parse sqlErrorMsg createUser catchJust constraintViolation catcher execute conn where catcher UniqueViolation user login key catcher",
        "hierarchy": "Database PostgreSQL Simple Errors",
        "module": "Database.PostgreSQL.Simple.Errors",
        "name": "constraintViolation",
        "normalized": "SqlError-\u003eMaybe ConstraintViolation",
        "package": "postgresql-simple",
        "partial": "Violation",
        "signature": "SqlError-\u003eMaybe ConstraintViolation"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Errors.html#v:constraintViolationE",
      "description": {
        "fct-descr": "\u003cp\u003eLike constraintViolation, but also packs original SqlError.\n\u003c/p\u003e\u003cpre\u003e createUser = catchJust constraintViolationE catcher $ execute conn ...\n   where\n     catcher (_, UniqueViolation \"user_login_key\") = ...\n     catcher (e, _) = throwIO e\n\u003c/pre\u003e",
        "fct-module": "Database.PostgreSQL.Simple.Errors",
        "fct-package": "postgresql-simple",
        "fct-signature": "SqlError -\u003e Maybe (SqlError, ConstraintViolation)",
        "fct-source": "src/Database-PostgreSQL-Simple-Errors.html#constraintViolationE",
        "fct-type": "function",
        "title": "constraintViolationE"
      },
      "index": {
        "description": "Like constraintViolation but also packs original SqlError createUser catchJust constraintViolationE catcher execute conn where catcher UniqueViolation user login key catcher throwIO",
        "hierarchy": "Database PostgreSQL Simple Errors",
        "module": "Database.PostgreSQL.Simple.Errors",
        "name": "constraintViolationE",
        "normalized": "SqlError-\u003eMaybe(SqlError,ConstraintViolation)",
        "package": "postgresql-simple",
        "partial": "Violation",
        "signature": "SqlError-\u003eMaybe(SqlError,ConstraintViolation)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Errors.html#v:isFailedTransactionError",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Errors",
        "fct-package": "postgresql-simple",
        "fct-signature": "SqlError -\u003e Bool",
        "fct-source": "src/Database-PostgreSQL-Simple-Errors.html#isFailedTransactionError",
        "fct-type": "function",
        "title": "isFailedTransactionError"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Errors",
        "module": "Database.PostgreSQL.Simple.Errors",
        "name": "isFailedTransactionError",
        "normalized": "SqlError-\u003eBool",
        "package": "postgresql-simple",
        "partial": "Failed Transaction Error",
        "signature": "SqlError-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Errors.html#v:isNoActiveTransactionError",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Errors",
        "fct-package": "postgresql-simple",
        "fct-signature": "SqlError -\u003e Bool",
        "fct-source": "src/Database-PostgreSQL-Simple-Errors.html#isNoActiveTransactionError",
        "fct-type": "function",
        "title": "isNoActiveTransactionError"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Errors",
        "module": "Database.PostgreSQL.Simple.Errors",
        "name": "isNoActiveTransactionError",
        "normalized": "SqlError-\u003eBool",
        "package": "postgresql-simple",
        "partial": "No Active Transaction Error",
        "signature": "SqlError-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Errors.html#v:isSerializationError",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Errors",
        "fct-package": "postgresql-simple",
        "fct-signature": "SqlError -\u003e Bool",
        "fct-source": "src/Database-PostgreSQL-Simple-Errors.html#isSerializationError",
        "fct-type": "function",
        "title": "isSerializationError"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Errors",
        "module": "Database.PostgreSQL.Simple.Errors",
        "name": "isSerializationError",
        "normalized": "SqlError-\u003eBool",
        "package": "postgresql-simple",
        "partial": "Serialization Error",
        "signature": "SqlError-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eFromField\u003c/a\u003e\u003c/code\u003e typeclass, for converting a single value in a row\nreturned by a SQL query into a more useful Haskell representation.\nNote that each instance of \u003ccode\u003e\u003ca\u003eFromField\u003c/a\u003e\u003c/code\u003e is documented by a list of\ncompatible postgresql types.\n\u003c/p\u003e\u003cp\u003eA Haskell numeric type is considered to be compatible with all\nPostgreSQL numeric types that are less accurate than it. For instance,\nthe Haskell \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e type is compatible with the PostgreSQL's 32-bit\n\u003ccode\u003eint\u003c/code\u003e type because it can represent a \u003ccode\u003eint\u003c/code\u003e exactly.  On the other hand,\nsince a \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e might lose precision if representing PostgreSQL's 64-bit\n\u003ccode\u003ebigint\u003c/code\u003e, the two are \u003cem\u003enot\u003c/em\u003e considered compatible.\n\u003c/p\u003e\u003cp\u003eBecause \u003ccode\u003e\u003ca\u003eFromField\u003c/a\u003e\u003c/code\u003e is a typeclass,  one may provide conversions to\nadditional Haskell types without modifying postgresql-simple.  This is\nparticularly useful for supporting PostgreSQL types that postgresql-simple\ndoes not support out-of-box.  Here's an example of what such an instance\nmight look like for a UUID type that implements the \u003ccode\u003eRead\u003c/code\u003e class:\n\u003c/p\u003e\u003cpre\u003e\nimport Data.UUID ( UUID )\nimport Database.PostgreSQL.Simple.FromField\n       ( FromField (fromField) , typeOid, returnError, ResultError (..) )\nimport Database.PostgreSQL.Simple.TypeInfo.Static (typoid, uuid)\nimport qualified Data.ByteString.Char8 as B\n\ninstance FromField UUID where\n   fromField f mdata =\n      if typeOid f /= typoid uuid\n        then returnError Incompatible f \"\"\n        else case B.unpack `fmap` mdata of\n               Nothing  -\u003e returnError UnexpectedNull f \"\"\n               Just dat -\u003e\n                  case [ x | (x,t) \u003c- reads dat, (\"\",\"\") \u003c- lex t ] of\n                    [x] -\u003e return x\n                    _   -\u003e returnError ConversionFailed f dat\n\u003c/pre\u003e\u003cp\u003eNote that because PostgreSQL's \u003ccode\u003euuid\u003c/code\u003e type is built into postgres and is\nnot provided by an extension,  the \u003ccode\u003e\u003ca\u003etypeOid\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003euuid\u003c/code\u003e does not change and\nthus we can examine it directly.  One could hard-code the type oid,  or\nobtain it by other means, but in this case we simply pull it out of the\nstatic table provided by postgresql-simple.\n\u003c/p\u003e\u003cp\u003eOn the other hand if the type is provided by an extension,  such as\n\u003ccode\u003ePostGIS\u003c/code\u003e or \u003ccode\u003ehstore\u003c/code\u003e,  then the \u003ccode\u003e\u003ca\u003etypeOid\u003c/a\u003e\u003c/code\u003e is not stable and can vary from\ndatabase to database. In this case it is recommended that FromField\ninstances use \u003ccode\u003e\u003ca\u003etypename\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.PostgreSQL.Simple.FromField",
        "fct-package": "postgresql-simple",
        "fct-signature": "module",
        "fct-source": "src/Database-PostgreSQL-Simple-FromField.html",
        "fct-type": "module",
        "title": "FromField"
      },
      "index": {
        "description": "The FromField typeclass for converting single value in row returned by SQL query into more useful Haskell representation Note that each instance of FromField is documented by list of compatible postgresql types Haskell numeric type is considered to be compatible with all PostgreSQL numeric types that are less accurate than it For instance the Haskell Double type is compatible with the PostgreSQL bit int type because it can represent int exactly On the other hand since Double might lose precision if representing PostgreSQL bit bigint the two are not considered compatible Because FromField is typeclass one may provide conversions to additional Haskell types without modifying postgresql-simple This is particularly useful for supporting PostgreSQL types that postgresql-simple does not support out-of-box Here an example of what such an instance might look like for UUID type that implements the Read class import Data.UUID UUID import Database.PostgreSQL.Simple.FromField FromField fromField typeOid returnError ResultError import Database.PostgreSQL.Simple.TypeInfo.Static typoid uuid import qualified Data.ByteString.Char8 as instance FromField UUID where fromField mdata if typeOid typoid uuid then returnError Incompatible else case B.unpack fmap mdata of Nothing returnError UnexpectedNull Just dat case reads dat lex of return returnError ConversionFailed dat Note that because PostgreSQL uuid type is built into postgres and is not provided by an extension the typeOid of uuid does not change and thus we can examine it directly One could hard-code the type oid or obtain it by other means but in this case we simply pull it out of the static table provided by postgresql-simple On the other hand if the type is provided by an extension such as PostGIS or hstore then the typeOid is not stable and can vary from database to database In this case it is recommended that FromField instances use typename instead",
        "hierarchy": "Database PostgreSQL Simple FromField",
        "module": "Database.PostgreSQL.Simple.FromField",
        "name": "FromField",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "From Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#t:Attribute",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.FromField",
        "fct-package": "postgresql-simple",
        "fct-signature": "data",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Types.html#Attribute",
        "fct-type": "data",
        "title": "Attribute"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple FromField",
        "module": "Database.PostgreSQL.Simple.FromField",
        "name": "Attribute",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Attribute",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#t:Conversion",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.FromField",
        "fct-package": "postgresql-simple",
        "fct-signature": "data",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#Conversion",
        "fct-type": "data",
        "title": "Conversion"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple FromField",
        "module": "Database.PostgreSQL.Simple.FromField",
        "name": "Conversion",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Conversion",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#t:Field",
      "description": {
        "fct-descr": "\u003cp\u003eA Field represents metadata about a particular field\n\u003c/p\u003e\u003cp\u003eYou don't particularly want to retain these structures for a long\n period of time,  as they will retain the entire query result,  not\n just the field metadata\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.FromField",
        "fct-package": "postgresql-simple",
        "fct-signature": "data",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#Field",
        "fct-type": "data",
        "title": "Field"
      },
      "index": {
        "description": "Field represents metadata about particular field You don particularly want to retain these structures for long period of time as they will retain the entire query result not just the field metadata",
        "hierarchy": "Database PostgreSQL Simple FromField",
        "module": "Database.PostgreSQL.Simple.FromField",
        "name": "Field",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#t:FieldParser",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.FromField",
        "fct-package": "postgresql-simple",
        "fct-signature": "type",
        "fct-source": "src/Database-PostgreSQL-Simple-FromField.html#FieldParser",
        "fct-type": "type",
        "title": "FieldParser"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple FromField",
        "module": "Database.PostgreSQL.Simple.FromField",
        "name": "FieldParser",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Field Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#t:Format",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.FromField",
        "fct-package": "postgresql-simple",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Format"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple FromField",
        "module": "Database.PostgreSQL.Simple.FromField",
        "name": "Format",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Format",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#t:FromField",
      "description": {
        "fct-descr": "\u003cp\u003eA type that may be converted from a SQL type.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.FromField",
        "fct-package": "postgresql-simple",
        "fct-signature": "class",
        "fct-source": "src/Database-PostgreSQL-Simple-FromField.html#FromField",
        "fct-type": "class",
        "title": "FromField"
      },
      "index": {
        "description": "type that may be converted from SQL type",
        "hierarchy": "Database PostgreSQL Simple FromField",
        "module": "Database.PostgreSQL.Simple.FromField",
        "name": "FromField",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "From Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#t:Oid",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.FromField",
        "fct-package": "postgresql-simple",
        "fct-signature": "newtype",
        "fct-type": "newtype",
        "title": "Oid"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple FromField",
        "module": "Database.PostgreSQL.Simple.FromField",
        "name": "Oid",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Oid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#t:ResultError",
      "description": {
        "fct-descr": "\u003cp\u003eException thrown if conversion from a SQL value to a Haskell\n value fails.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.FromField",
        "fct-package": "postgresql-simple",
        "fct-signature": "data",
        "fct-source": "src/Database-PostgreSQL-Simple-FromField.html#ResultError",
        "fct-type": "data",
        "title": "ResultError"
      },
      "index": {
        "description": "Exception thrown if conversion from SQL value to Haskell value fails",
        "hierarchy": "Database PostgreSQL Simple FromField",
        "module": "Database.PostgreSQL.Simple.FromField",
        "name": "ResultError",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Result Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#t:TypeInfo",
      "description": {
        "fct-descr": "\u003cp\u003eA structure representing some of the metadata regarding a PostgreSQL\n   type,  mostly taken from the \u003ccode\u003epg_type\u003c/code\u003e table.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.FromField",
        "fct-package": "postgresql-simple",
        "fct-signature": "data",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Types.html#TypeInfo",
        "fct-type": "data",
        "title": "TypeInfo"
      },
      "index": {
        "description": "structure representing some of the metadata regarding PostgreSQL type mostly taken from the pg type table",
        "hierarchy": "Database PostgreSQL Simple FromField",
        "module": "Database.PostgreSQL.Simple.FromField",
        "name": "TypeInfo",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Type Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:Array",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.FromField",
        "fct-package": "postgresql-simple",
        "fct-signature": "Array",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Types.html#TypeInfo",
        "fct-type": "function",
        "title": "Array"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple FromField",
        "module": "Database.PostgreSQL.Simple.FromField",
        "name": "Array",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Array",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:Attribute",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.FromField",
        "fct-package": "postgresql-simple",
        "fct-signature": "Attribute",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Types.html#Attribute",
        "fct-type": "function",
        "title": "Attribute"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple FromField",
        "module": "Database.PostgreSQL.Simple.FromField",
        "name": "Attribute",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Attribute",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:Basic",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.FromField",
        "fct-package": "postgresql-simple",
        "fct-signature": "Basic",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Types.html#TypeInfo",
        "fct-type": "function",
        "title": "Basic"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple FromField",
        "module": "Database.PostgreSQL.Simple.FromField",
        "name": "Basic",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Basic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:Binary",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.FromField",
        "fct-package": "postgresql-simple",
        "fct-signature": "Binary",
        "fct-type": "function",
        "title": "Binary"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple FromField",
        "module": "Database.PostgreSQL.Simple.FromField",
        "name": "Binary",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Binary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:Composite",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.FromField",
        "fct-package": "postgresql-simple",
        "fct-signature": "Composite",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Types.html#TypeInfo",
        "fct-type": "function",
        "title": "Composite"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple FromField",
        "module": "Database.PostgreSQL.Simple.FromField",
        "name": "Composite",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Composite",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:ConversionFailed",
      "description": {
        "fct-descr": "\u003cp\u003eThe SQL value could not be parsed, or could not\n be represented as a valid Haskell value, or an\n unexpected low-level error occurred (e.g. mismatch\n between metadata and actual data in a row).\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.FromField",
        "fct-package": "postgresql-simple",
        "fct-signature": "ConversionFailed",
        "fct-source": "src/Database-PostgreSQL-Simple-FromField.html#ResultError",
        "fct-type": "function",
        "title": "ConversionFailed"
      },
      "index": {
        "description": "The SQL value could not be parsed or could not be represented as valid Haskell value or an unexpected low-level error occurred e.g mismatch between metadata and actual data in row",
        "hierarchy": "Database PostgreSQL Simple FromField",
        "module": "Database.PostgreSQL.Simple.FromField",
        "name": "ConversionFailed",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Conversion Failed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:Incompatible",
      "description": {
        "fct-descr": "\u003cp\u003eThe SQL and Haskell types are not compatible.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.FromField",
        "fct-package": "postgresql-simple",
        "fct-signature": "Incompatible",
        "fct-source": "src/Database-PostgreSQL-Simple-FromField.html#ResultError",
        "fct-type": "function",
        "title": "Incompatible"
      },
      "index": {
        "description": "The SQL and Haskell types are not compatible",
        "hierarchy": "Database PostgreSQL Simple FromField",
        "module": "Database.PostgreSQL.Simple.FromField",
        "name": "Incompatible",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Incompatible",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:Oid",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.FromField",
        "fct-package": "postgresql-simple",
        "fct-signature": "Oid CUInt",
        "fct-type": "function",
        "title": "Oid"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple FromField",
        "module": "Database.PostgreSQL.Simple.FromField",
        "name": "Oid",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Oid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:Range",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.FromField",
        "fct-package": "postgresql-simple",
        "fct-signature": "Range",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Types.html#TypeInfo",
        "fct-type": "function",
        "title": "Range"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple FromField",
        "module": "Database.PostgreSQL.Simple.FromField",
        "name": "Range",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Range",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:Text",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.FromField",
        "fct-package": "postgresql-simple",
        "fct-signature": "Text",
        "fct-type": "function",
        "title": "Text"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple FromField",
        "module": "Database.PostgreSQL.Simple.FromField",
        "name": "Text",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Text",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:UnexpectedNull",
      "description": {
        "fct-descr": "\u003cp\u003eA SQL \u003ccode\u003eNULL\u003c/code\u003e was encountered when the Haskell\n type did not permit it.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.FromField",
        "fct-package": "postgresql-simple",
        "fct-signature": "UnexpectedNull",
        "fct-source": "src/Database-PostgreSQL-Simple-FromField.html#ResultError",
        "fct-type": "function",
        "title": "UnexpectedNull"
      },
      "index": {
        "description": "SQL NULL was encountered when the Haskell type did not permit it",
        "hierarchy": "Database PostgreSQL Simple FromField",
        "module": "Database.PostgreSQL.Simple.FromField",
        "name": "UnexpectedNull",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Unexpected Null",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:attname",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.Simple.FromField",
        "fct-package": "postgresql-simple",
        "fct-signature": "!ByteString",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Types.html#Attribute",
        "fct-type": "function",
        "title": "attname"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple FromField",
        "module": "Database.PostgreSQL.Simple.FromField",
        "name": "attname",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:attributes",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.Simple.FromField",
        "fct-package": "postgresql-simple",
        "fct-signature": "!(Vector Attribute)",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Types.html#TypeInfo",
        "fct-type": "function",
        "title": "attributes"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple FromField",
        "module": "Database.PostgreSQL.Simple.FromField",
        "name": "attributes",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:atttype",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.Simple.FromField",
        "fct-package": "postgresql-simple",
        "fct-signature": "!TypeInfo",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Types.html#Attribute",
        "fct-type": "function",
        "title": "atttype"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple FromField",
        "module": "Database.PostgreSQL.Simple.FromField",
        "name": "atttype",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:conversionError",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.FromField",
        "fct-package": "postgresql-simple",
        "fct-signature": "err -\u003e Conversion a",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#conversionError",
        "fct-type": "function",
        "title": "conversionError"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple FromField",
        "module": "Database.PostgreSQL.Simple.FromField",
        "name": "conversionError",
        "normalized": "a-\u003eConversion b",
        "package": "postgresql-simple",
        "partial": "Error",
        "signature": "err-\u003eConversion a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:conversionMap",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.FromField",
        "fct-package": "postgresql-simple",
        "fct-signature": "(Ok a -\u003e Ok b) -\u003e Conversion a -\u003e Conversion b",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#conversionMap",
        "fct-type": "function",
        "title": "conversionMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple FromField",
        "module": "Database.PostgreSQL.Simple.FromField",
        "name": "conversionMap",
        "normalized": "(Ok a-\u003eOk b)-\u003eConversion a-\u003eConversion b",
        "package": "postgresql-simple",
        "partial": "Map",
        "signature": "(Ok a-\u003eOk b)-\u003eConversion a-\u003eConversion b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:errHaskellType",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.Simple.FromField",
        "fct-package": "postgresql-simple",
        "fct-signature": "String",
        "fct-source": "src/Database-PostgreSQL-Simple-FromField.html#ResultError",
        "fct-type": "function",
        "title": "errHaskellType"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple FromField",
        "module": "Database.PostgreSQL.Simple.FromField",
        "name": "errHaskellType",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Haskell Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:errMessage",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.Simple.FromField",
        "fct-package": "postgresql-simple",
        "fct-signature": "String",
        "fct-source": "src/Database-PostgreSQL-Simple-FromField.html#ResultError",
        "fct-type": "function",
        "title": "errMessage"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple FromField",
        "module": "Database.PostgreSQL.Simple.FromField",
        "name": "errMessage",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Message",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:errSQLField",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.Simple.FromField",
        "fct-package": "postgresql-simple",
        "fct-signature": "String",
        "fct-source": "src/Database-PostgreSQL-Simple-FromField.html#ResultError",
        "fct-type": "function",
        "title": "errSQLField"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple FromField",
        "module": "Database.PostgreSQL.Simple.FromField",
        "name": "errSQLField",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "SQLField",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:errSQLTableOid",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.Simple.FromField",
        "fct-package": "postgresql-simple",
        "fct-signature": "Maybe Oid",
        "fct-source": "src/Database-PostgreSQL-Simple-FromField.html#ResultError",
        "fct-type": "function",
        "title": "errSQLTableOid"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple FromField",
        "module": "Database.PostgreSQL.Simple.FromField",
        "name": "errSQLTableOid",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "SQLTable Oid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:errSQLType",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.Simple.FromField",
        "fct-package": "postgresql-simple",
        "fct-signature": "String",
        "fct-source": "src/Database-PostgreSQL-Simple-FromField.html#ResultError",
        "fct-type": "function",
        "title": "errSQLType"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple FromField",
        "module": "Database.PostgreSQL.Simple.FromField",
        "name": "errSQLType",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "SQLType",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:format",
      "description": {
        "fct-descr": "\u003cp\u003eThis returns whether the data was returned in a binary or textual format.\n   Analogous to libpq's \u003ccode\u003ePQfformat\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.FromField",
        "fct-package": "postgresql-simple",
        "fct-signature": "Field -\u003e Format",
        "fct-source": "src/Database-PostgreSQL-Simple-FromField.html#format",
        "fct-type": "function",
        "title": "format"
      },
      "index": {
        "description": "This returns whether the data was returned in binary or textual format Analogous to libpq PQfformat",
        "hierarchy": "Database PostgreSQL Simple FromField",
        "module": "Database.PostgreSQL.Simple.FromField",
        "name": "format",
        "normalized": "Field-\u003eFormat",
        "package": "postgresql-simple",
        "partial": "",
        "signature": "Field-\u003eFormat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:fromField",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a SQL value to a Haskell value.\n\u003c/p\u003e\u003cp\u003eReturns a list of exceptions if the conversion fails.  In the case of\n library instances,  this will usually be a single \u003ccode\u003e\u003ca\u003eResultError\u003c/a\u003e\u003c/code\u003e,  but\n may be a \u003ccode\u003eUnicodeException\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that retaining any reference to the \u003ccode\u003e\u003ca\u003eField\u003c/a\u003e\u003c/code\u003e argument causes\n the entire \u003ccode\u003eLibPQ.\u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e to be retained.  Thus, implementations\n of \u003ccode\u003e\u003ca\u003efromField\u003c/a\u003e\u003c/code\u003e should return results that do not refer to this value\n after the result have been evaluated to WHNF.\n\u003c/p\u003e\u003cp\u003eNote that as of \u003ccode\u003epostgresql-simple-0.4.0.0\u003c/code\u003e,  the \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e value\n has already been copied out of the \u003ccode\u003eLibPQ.\u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e before it has\n been passed to \u003ccode\u003e\u003ca\u003efromField\u003c/a\u003e\u003c/code\u003e.  This is because for short strings, it's\n cheaper to copy the string than to set up a finalizer.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.FromField",
        "fct-package": "postgresql-simple",
        "fct-signature": "FieldParser a",
        "fct-source": "src/Database-PostgreSQL-Simple-FromField.html#fromField",
        "fct-type": "method",
        "title": "fromField"
      },
      "index": {
        "description": "Convert SQL value to Haskell value Returns list of exceptions if the conversion fails In the case of library instances this will usually be single ResultError but may be UnicodeException Note that retaining any reference to the Field argument causes the entire LibPQ Result to be retained Thus implementations of fromField should return results that do not refer to this value after the result have been evaluated to WHNF Note that as of postgresql-simple-0.4.0.0 the ByteString value has already been copied out of the LibPQ Result before it has been passed to fromField This is because for short strings it cheaper to copy the string than to set up finalizer",
        "hierarchy": "Database PostgreSQL Simple FromField",
        "module": "Database.PostgreSQL.Simple.FromField",
        "name": "fromField",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:fromJSONField",
      "description": {
        "fct-descr": "\u003cp\u003eParse a field to a JSON \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e and convert that into a\n Haskell value using \u003ccode\u003e\u003ca\u003efromJSON\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis can be used as the default implementation for the \u003ccode\u003e\u003ca\u003efromField\u003c/a\u003e\u003c/code\u003e\n method for Haskell types that have a JSON representation in\n PostgreSQL.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eTypeable\u003c/a\u003e\u003c/code\u003e constraint is required to show more informative\n error messages when parsing fails.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.FromField",
        "fct-package": "postgresql-simple",
        "fct-signature": "FieldParser a",
        "fct-source": "src/Database-PostgreSQL-Simple-FromField.html#fromJSONField",
        "fct-type": "function",
        "title": "fromJSONField"
      },
      "index": {
        "description": "Parse field to JSON Value and convert that into Haskell value using fromJSON This can be used as the default implementation for the fromField method for Haskell types that have JSON representation in PostgreSQL The Typeable constraint is required to show more informative error messages when parsing fails",
        "hierarchy": "Database PostgreSQL Simple FromField",
        "module": "Database.PostgreSQL.Simple.FromField",
        "name": "fromJSONField",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "JSONField",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:name",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the name of the column.  This is often determined by a table\n   definition,  but it can be set using an \u003ccode\u003eas\u003c/code\u003e clause.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.FromField",
        "fct-package": "postgresql-simple",
        "fct-signature": "Field -\u003e Maybe ByteString",
        "fct-source": "src/Database-PostgreSQL-Simple-FromField.html#name",
        "fct-type": "function",
        "title": "name"
      },
      "index": {
        "description": "Returns the name of the column This is often determined by table definition but it can be set using an as clause",
        "hierarchy": "Database PostgreSQL Simple FromField",
        "module": "Database.PostgreSQL.Simple.FromField",
        "name": "name",
        "normalized": "Field-\u003eMaybe ByteString",
        "package": "postgresql-simple",
        "partial": "",
        "signature": "Field-\u003eMaybe ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:returnError",
      "description": {
        "fct-descr": "\u003cp\u003eGiven one of the constructors from \u003ccode\u003e\u003ca\u003eResultError\u003c/a\u003e\u003c/code\u003e,  the field,\n   and an \u003ccode\u003e\u003ca\u003eerrMessage\u003c/a\u003e\u003c/code\u003e,  this fills in the other fields in the\n   exception value and returns it in a 'Left . SomeException'\n   constructor.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.FromField",
        "fct-package": "postgresql-simple",
        "fct-signature": "(String -\u003e Maybe Oid -\u003e String -\u003e String -\u003e String -\u003e err) -\u003e Field -\u003e String -\u003e Conversion a",
        "fct-source": "src/Database-PostgreSQL-Simple-FromField.html#returnError",
        "fct-type": "function",
        "title": "returnError"
      },
      "index": {
        "description": "Given one of the constructors from ResultError the field and an errMessage this fills in the other fields in the exception value and returns it in Left SomeException constructor",
        "hierarchy": "Database PostgreSQL Simple FromField",
        "module": "Database.PostgreSQL.Simple.FromField",
        "name": "returnError",
        "normalized": "(String-\u003eMaybe Oid-\u003eString-\u003eString-\u003eString-\u003ea)-\u003eField-\u003eString-\u003eConversion b",
        "package": "postgresql-simple",
        "partial": "Error",
        "signature": "(String-\u003eMaybe Oid-\u003eString-\u003eString-\u003eString-\u003eerr)-\u003eField-\u003eString-\u003eConversion a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:rngsubtype",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.Simple.FromField",
        "fct-package": "postgresql-simple",
        "fct-signature": "!TypeInfo",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Types.html#TypeInfo",
        "fct-type": "function",
        "title": "rngsubtype"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple FromField",
        "module": "Database.PostgreSQL.Simple.FromField",
        "name": "rngsubtype",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:runConversion",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.FromField",
        "fct-package": "postgresql-simple",
        "fct-signature": "Conversion a -\u003e Connection -\u003e IO (Ok a)",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#runConversion",
        "fct-type": "function",
        "title": "runConversion"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple FromField",
        "module": "Database.PostgreSQL.Simple.FromField",
        "name": "runConversion",
        "normalized": "Conversion a-\u003eConnection-\u003eIO(Ok a)",
        "package": "postgresql-simple",
        "partial": "Conversion",
        "signature": "Conversion a-\u003eConnection-\u003eIO(Ok a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:tableColumn",
      "description": {
        "fct-descr": "\u003cp\u003eIf the column has a table associated with it,  this returns the number\n   off the associated table column.   Numbering starts from 0.  Analogous\n   to libpq's \u003ccode\u003ePQftablecol\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.FromField",
        "fct-package": "postgresql-simple",
        "fct-signature": "Field -\u003e Int",
        "fct-source": "src/Database-PostgreSQL-Simple-FromField.html#tableColumn",
        "fct-type": "function",
        "title": "tableColumn"
      },
      "index": {
        "description": "If the column has table associated with it this returns the number off the associated table column Numbering starts from Analogous to libpq PQftablecol",
        "hierarchy": "Database PostgreSQL Simple FromField",
        "module": "Database.PostgreSQL.Simple.FromField",
        "name": "tableColumn",
        "normalized": "Field-\u003eInt",
        "package": "postgresql-simple",
        "partial": "Column",
        "signature": "Field-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:tableOid",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the name of the object id of the \u003ccode\u003etable\u003c/code\u003e associated with the\n   column,  if any.  Returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e when there is no such table;\n   for example a computed column does not have a table associated with it.\n   Analogous to libpq's \u003ccode\u003ePQftable\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.FromField",
        "fct-package": "postgresql-simple",
        "fct-signature": "Field -\u003e Maybe Oid",
        "fct-source": "src/Database-PostgreSQL-Simple-FromField.html#tableOid",
        "fct-type": "function",
        "title": "tableOid"
      },
      "index": {
        "description": "Returns the name of the object id of the table associated with the column if any Returns Nothing when there is no such table for example computed column does not have table associated with it Analogous to libpq PQftable",
        "hierarchy": "Database PostgreSQL Simple FromField",
        "module": "Database.PostgreSQL.Simple.FromField",
        "name": "tableOid",
        "normalized": "Field-\u003eMaybe Oid",
        "package": "postgresql-simple",
        "partial": "Oid",
        "signature": "Field-\u003eMaybe Oid"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:typcategory",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.Simple.FromField",
        "fct-package": "postgresql-simple",
        "fct-signature": "!Char",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Types.html#TypeInfo",
        "fct-type": "function",
        "title": "typcategory"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple FromField",
        "module": "Database.PostgreSQL.Simple.FromField",
        "name": "typcategory",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:typdelim",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.Simple.FromField",
        "fct-package": "postgresql-simple",
        "fct-signature": "!Char",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Types.html#TypeInfo",
        "fct-type": "function",
        "title": "typdelim"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple FromField",
        "module": "Database.PostgreSQL.Simple.FromField",
        "name": "typdelim",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:typeInfo",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.FromField",
        "fct-package": "postgresql-simple",
        "fct-signature": "Field -\u003e Conversion TypeInfo",
        "fct-source": "src/Database-PostgreSQL-Simple-FromField.html#typeInfo",
        "fct-type": "function",
        "title": "typeInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple FromField",
        "module": "Database.PostgreSQL.Simple.FromField",
        "name": "typeInfo",
        "normalized": "Field-\u003eConversion TypeInfo",
        "package": "postgresql-simple",
        "partial": "Info",
        "signature": "Field-\u003eConversion TypeInfo"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:typeInfoByOid",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.FromField",
        "fct-package": "postgresql-simple",
        "fct-signature": "Oid -\u003e Conversion TypeInfo",
        "fct-source": "src/Database-PostgreSQL-Simple-FromField.html#typeInfoByOid",
        "fct-type": "function",
        "title": "typeInfoByOid"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple FromField",
        "module": "Database.PostgreSQL.Simple.FromField",
        "name": "typeInfoByOid",
        "normalized": "Oid-\u003eConversion TypeInfo",
        "package": "postgresql-simple",
        "partial": "Info By Oid",
        "signature": "Oid-\u003eConversion TypeInfo"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:typeOid",
      "description": {
        "fct-descr": "\u003cp\u003eThis returns the type oid associated with the column.  Analogous\n   to libpq's \u003ccode\u003ePQftype\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.FromField",
        "fct-package": "postgresql-simple",
        "fct-signature": "Field -\u003e Oid",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#typeOid",
        "fct-type": "function",
        "title": "typeOid"
      },
      "index": {
        "description": "This returns the type oid associated with the column Analogous to libpq PQftype",
        "hierarchy": "Database PostgreSQL Simple FromField",
        "module": "Database.PostgreSQL.Simple.FromField",
        "name": "typeOid",
        "normalized": "Field-\u003eOid",
        "package": "postgresql-simple",
        "partial": "Oid",
        "signature": "Field-\u003eOid"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:typelem",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.Simple.FromField",
        "fct-package": "postgresql-simple",
        "fct-signature": "!TypeInfo",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Types.html#TypeInfo",
        "fct-type": "function",
        "title": "typelem"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple FromField",
        "module": "Database.PostgreSQL.Simple.FromField",
        "name": "typelem",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:typename",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the data type name.  This is the preferred way of identifying\n   types that do not have a stable type oid, such as types provided by\n   extensions to PostgreSQL.\n\u003c/p\u003e\u003cp\u003eMore concretely,  it returns the \u003ccode\u003etypname\u003c/code\u003e column associated with the\n   type oid in the \u003ccode\u003epg_type\u003c/code\u003e table.  First, postgresql-simple will check\n   the built-in, static table.   If the type oid is not there,\n   postgresql-simple will check a per-connection cache,  and then\n   finally query the database's meta-schema.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.FromField",
        "fct-package": "postgresql-simple",
        "fct-signature": "Field -\u003e Conversion ByteString",
        "fct-source": "src/Database-PostgreSQL-Simple-FromField.html#typename",
        "fct-type": "function",
        "title": "typename"
      },
      "index": {
        "description": "Returns the data type name This is the preferred way of identifying types that do not have stable type oid such as types provided by extensions to PostgreSQL More concretely it returns the typname column associated with the type oid in the pg type table First postgresql-simple will check the built-in static table If the type oid is not there postgresql-simple will check per-connection cache and then finally query the database meta-schema",
        "hierarchy": "Database PostgreSQL Simple FromField",
        "module": "Database.PostgreSQL.Simple.FromField",
        "name": "typename",
        "normalized": "Field-\u003eConversion ByteString",
        "package": "postgresql-simple",
        "partial": "",
        "signature": "Field-\u003eConversion ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:typname",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.Simple.FromField",
        "fct-package": "postgresql-simple",
        "fct-signature": "!ByteString",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Types.html#TypeInfo",
        "fct-type": "function",
        "title": "typname"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple FromField",
        "module": "Database.PostgreSQL.Simple.FromField",
        "name": "typname",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:typoid",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.Simple.FromField",
        "fct-package": "postgresql-simple",
        "fct-signature": "!Oid",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Types.html#TypeInfo",
        "fct-type": "function",
        "title": "typoid"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple FromField",
        "module": "Database.PostgreSQL.Simple.FromField",
        "name": "typoid",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromField.html#v:typrelid",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.Simple.FromField",
        "fct-package": "postgresql-simple",
        "fct-signature": "!Oid",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Types.html#TypeInfo",
        "fct-type": "function",
        "title": "typrelid"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple FromField",
        "module": "Database.PostgreSQL.Simple.FromField",
        "name": "typrelid",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromRow.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eFromRow\u003c/a\u003e\u003c/code\u003e typeclass, for converting a row of results\n returned by a SQL query into a more useful Haskell representation.\n\u003c/p\u003e\u003cp\u003ePredefined instances are provided for tuples containing up to ten\n elements.  The instances for \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e types return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if all\n the columns that would have been otherwise consumed are null,  otherwise\n it attempts a regular conversion.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.PostgreSQL.Simple.FromRow",
        "fct-package": "postgresql-simple",
        "fct-signature": "module",
        "fct-source": "src/Database-PostgreSQL-Simple-FromRow.html",
        "fct-type": "module",
        "title": "FromRow"
      },
      "index": {
        "description": "The FromRow typeclass for converting row of results returned by SQL query into more useful Haskell representation Predefined instances are provided for tuples containing up to ten elements The instances for Maybe types return Nothing if all the columns that would have been otherwise consumed are null otherwise it attempts regular conversion",
        "hierarchy": "Database PostgreSQL Simple FromRow",
        "module": "Database.PostgreSQL.Simple.FromRow",
        "name": "FromRow",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "From Row",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromRow.html#t:FromRow",
      "description": {
        "fct-descr": "\u003cp\u003eA collection type that can be converted from a sequence of fields.\n Instances are provided for tuples up to 10 elements and lists of any length.\n\u003c/p\u003e\u003cp\u003eNote that instances can be defined outside of postgresql-simple,  which is\n often useful.   For example, here's an instance for a user-defined pair:\n\u003c/p\u003e\u003cpre\u003edata User = User { name :: String, fileQuota :: Int }\n\ninstance \u003ccode\u003e\u003ca\u003eFromRow\u003c/a\u003e\u003c/code\u003e User where\n     fromRow = User \u003c$\u003e \u003ccode\u003e\u003ca\u003efield\u003c/a\u003e\u003c/code\u003e \u003c*\u003e \u003ccode\u003e\u003ca\u003efield\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e\u003cp\u003eThe number of calls to \u003ccode\u003e\u003ca\u003efield\u003c/a\u003e\u003c/code\u003e must match the number of fields returned\n in a single row of the query result.  Otherwise,  a \u003ccode\u003e\u003ca\u003eConversionFailed\u003c/a\u003e\u003c/code\u003e\n exception will be thrown.\n\u003c/p\u003e\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003efield\u003c/a\u003e\u003c/code\u003e evaluates it's result to WHNF, so the caveats listed in\n mysql-simple and very early versions of postgresql-simple no longer apply.\n Instead, look at the caveats associated with user-defined implementations\n of \u003ccode\u003e\u003ca\u003efromField\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.FromRow",
        "fct-package": "postgresql-simple",
        "fct-signature": "class",
        "fct-source": "src/Database-PostgreSQL-Simple-FromRow.html#FromRow",
        "fct-type": "class",
        "title": "FromRow"
      },
      "index": {
        "description": "collection type that can be converted from sequence of fields Instances are provided for tuples up to elements and lists of any length Note that instances can be defined outside of postgresql-simple which is often useful For example here an instance for user-defined pair data User User name String fileQuota Int instance FromRow User where fromRow User field field The number of calls to field must match the number of fields returned in single row of the query result Otherwise ConversionFailed exception will be thrown Note that field evaluates it result to WHNF so the caveats listed in mysql-simple and very early versions of postgresql-simple no longer apply Instead look at the caveats associated with user-defined implementations of fromField",
        "hierarchy": "Database PostgreSQL Simple FromRow",
        "module": "Database.PostgreSQL.Simple.FromRow",
        "name": "FromRow",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "From Row",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromRow.html#t:RowParser",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.FromRow",
        "fct-package": "postgresql-simple",
        "fct-signature": "data",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#RowParser",
        "fct-type": "data",
        "title": "RowParser"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple FromRow",
        "module": "Database.PostgreSQL.Simple.FromRow",
        "name": "RowParser",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Row Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromRow.html#v:field",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.FromRow",
        "fct-package": "postgresql-simple",
        "fct-signature": "RowParser a",
        "fct-source": "src/Database-PostgreSQL-Simple-FromRow.html#field",
        "fct-type": "function",
        "title": "field"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple FromRow",
        "module": "Database.PostgreSQL.Simple.FromRow",
        "name": "field",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromRow.html#v:fieldWith",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.FromRow",
        "fct-package": "postgresql-simple",
        "fct-signature": "FieldParser a -\u003e RowParser a",
        "fct-source": "src/Database-PostgreSQL-Simple-FromRow.html#fieldWith",
        "fct-type": "function",
        "title": "fieldWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple FromRow",
        "module": "Database.PostgreSQL.Simple.FromRow",
        "name": "fieldWith",
        "normalized": "FieldParser a-\u003eRowParser a",
        "package": "postgresql-simple",
        "partial": "With",
        "signature": "FieldParser a-\u003eRowParser a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromRow.html#v:fromRow",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.FromRow",
        "fct-package": "postgresql-simple",
        "fct-signature": "RowParser a",
        "fct-source": "src/Database-PostgreSQL-Simple-FromRow.html#fromRow",
        "fct-type": "method",
        "title": "fromRow"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple FromRow",
        "module": "Database.PostgreSQL.Simple.FromRow",
        "name": "fromRow",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Row",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-FromRow.html#v:numFieldsRemaining",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.FromRow",
        "fct-package": "postgresql-simple",
        "fct-signature": "RowParser Int",
        "fct-source": "src/Database-PostgreSQL-Simple-FromRow.html#numFieldsRemaining",
        "fct-type": "function",
        "title": "numFieldsRemaining"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple FromRow",
        "module": "Database.PostgreSQL.Simple.FromRow",
        "name": "numFieldsRemaining",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Fields Remaining",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-HStore.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParsers and printers for hstore,  a extended type bundled with\n PostgreSQL providing finite maps from text strings to text strings.\n See \u003ca\u003ehttp://www.postgresql.org/docs/9.2/static/hstore.html\u003c/a\u003e for more\n information.\n\u003c/p\u003e\u003cp\u003eNote that in order to use this type,  a database superuser must\n install it by running a sql script in the share directory.  This\n can be done on PostgreSQL 9.1 and later with the command\n \u003ccode\u003eCREATE EXTENSION hstore\u003c/code\u003e.  See\n \u003ca\u003ehttp://www.postgresql.org/docs/9.2/static/contrib.html\u003c/a\u003e for more\n information.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.PostgreSQL.Simple.HStore",
        "fct-package": "postgresql-simple",
        "fct-signature": "module",
        "fct-source": "src/Database-PostgreSQL-Simple-HStore.html",
        "fct-type": "module",
        "title": "HStore"
      },
      "index": {
        "description": "Parsers and printers for hstore extended type bundled with PostgreSQL providing finite maps from text strings to text strings See http www.postgresql.org docs static hstore.html for more information Note that in order to use this type database superuser must install it by running sql script in the share directory This can be done on PostgreSQL and later with the command CREATE EXTENSION hstore See http www.postgresql.org docs static contrib.html for more information",
        "hierarchy": "Database PostgreSQL Simple HStore",
        "module": "Database.PostgreSQL.Simple.HStore",
        "name": "HStore",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "HStore",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-HStore.html#t:HStoreBuilder",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents valid hstore syntax.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.HStore",
        "fct-package": "postgresql-simple",
        "fct-signature": "data",
        "fct-source": "src/Database-PostgreSQL-Simple-HStore-Implementation.html#HStoreBuilder",
        "fct-type": "data",
        "title": "HStoreBuilder"
      },
      "index": {
        "description": "Represents valid hstore syntax",
        "hierarchy": "Database PostgreSQL Simple HStore",
        "module": "Database.PostgreSQL.Simple.HStore",
        "name": "HStoreBuilder",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "HStore Builder",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-HStore.html#t:HStoreList",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.HStore",
        "fct-package": "postgresql-simple",
        "fct-signature": "newtype",
        "fct-source": "src/Database-PostgreSQL-Simple-HStore-Implementation.html#HStoreList",
        "fct-type": "newtype",
        "title": "HStoreList"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple HStore",
        "module": "Database.PostgreSQL.Simple.HStore",
        "name": "HStoreList",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "HStore List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-HStore.html#t:HStoreMap",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.HStore",
        "fct-package": "postgresql-simple",
        "fct-signature": "newtype",
        "fct-source": "src/Database-PostgreSQL-Simple-HStore-Implementation.html#HStoreMap",
        "fct-type": "newtype",
        "title": "HStoreMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple HStore",
        "module": "Database.PostgreSQL.Simple.HStore",
        "name": "HStoreMap",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "HStore Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-HStore.html#t:HStoreText",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents escape text, ready to be the key or value to a hstore value\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.HStore",
        "fct-package": "postgresql-simple",
        "fct-signature": "data",
        "fct-source": "src/Database-PostgreSQL-Simple-HStore-Implementation.html#HStoreText",
        "fct-type": "data",
        "title": "HStoreText"
      },
      "index": {
        "description": "Represents escape text ready to be the key or value to hstore value",
        "hierarchy": "Database PostgreSQL Simple HStore",
        "module": "Database.PostgreSQL.Simple.HStore",
        "name": "HStoreText",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "HStore Text",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-HStore.html#t:ToHStore",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.HStore",
        "fct-package": "postgresql-simple",
        "fct-signature": "class",
        "fct-source": "src/Database-PostgreSQL-Simple-HStore-Implementation.html#ToHStore",
        "fct-type": "class",
        "title": "ToHStore"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple HStore",
        "module": "Database.PostgreSQL.Simple.HStore",
        "name": "ToHStore",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "To HStore",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-HStore.html#t:ToHStoreText",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.HStore",
        "fct-package": "postgresql-simple",
        "fct-signature": "class",
        "fct-source": "src/Database-PostgreSQL-Simple-HStore-Implementation.html#ToHStoreText",
        "fct-type": "class",
        "title": "ToHStoreText"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple HStore",
        "module": "Database.PostgreSQL.Simple.HStore",
        "name": "ToHStoreText",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "To HStore Text",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-HStore.html#v:HStoreList",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.HStore",
        "fct-package": "postgresql-simple",
        "fct-signature": "HStoreList",
        "fct-source": "src/Database-PostgreSQL-Simple-HStore-Implementation.html#HStoreList",
        "fct-type": "function",
        "title": "HStoreList"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple HStore",
        "module": "Database.PostgreSQL.Simple.HStore",
        "name": "HStoreList",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "HStore List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-HStore.html#v:HStoreMap",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.HStore",
        "fct-package": "postgresql-simple",
        "fct-signature": "HStoreMap",
        "fct-source": "src/Database-PostgreSQL-Simple-HStore-Implementation.html#HStoreMap",
        "fct-type": "function",
        "title": "HStoreMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple HStore",
        "module": "Database.PostgreSQL.Simple.HStore",
        "name": "HStoreMap",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "HStore Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-HStore.html#v:fromHStoreList",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.Simple.HStore",
        "fct-package": "postgresql-simple",
        "fct-signature": "[(Text, Text)]",
        "fct-source": "src/Database-PostgreSQL-Simple-HStore-Implementation.html#HStoreList",
        "fct-type": "function",
        "title": "fromHStoreList"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple HStore",
        "module": "Database.PostgreSQL.Simple.HStore",
        "name": "fromHStoreList",
        "normalized": "[(Text,Text)]",
        "package": "postgresql-simple",
        "partial": "HStore List",
        "signature": "[(Text,Text)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-HStore.html#v:fromHStoreMap",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.Simple.HStore",
        "fct-package": "postgresql-simple",
        "fct-signature": "Map Text Text",
        "fct-source": "src/Database-PostgreSQL-Simple-HStore-Implementation.html#HStoreMap",
        "fct-type": "function",
        "title": "fromHStoreMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple HStore",
        "module": "Database.PostgreSQL.Simple.HStore",
        "name": "fromHStoreMap",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "HStore Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-HStore.html#v:hstore",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.HStore",
        "fct-package": "postgresql-simple",
        "fct-signature": "a -\u003e b -\u003e HStoreBuilder",
        "fct-source": "src/Database-PostgreSQL-Simple-HStore-Implementation.html#hstore",
        "fct-type": "function",
        "title": "hstore"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple HStore",
        "module": "Database.PostgreSQL.Simple.HStore",
        "name": "hstore",
        "normalized": "a-\u003eb-\u003eHStoreBuilder",
        "package": "postgresql-simple",
        "partial": "",
        "signature": "a-\u003eb-\u003eHStoreBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-HStore.html#v:toBuilder",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.HStore",
        "fct-package": "postgresql-simple",
        "fct-signature": "HStoreBuilder -\u003e Builder",
        "fct-source": "src/Database-PostgreSQL-Simple-HStore-Implementation.html#toBuilder",
        "fct-type": "function",
        "title": "toBuilder"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple HStore",
        "module": "Database.PostgreSQL.Simple.HStore",
        "name": "toBuilder",
        "normalized": "HStoreBuilder-\u003eBuilder",
        "package": "postgresql-simple",
        "partial": "Builder",
        "signature": "HStoreBuilder-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-HStore.html#v:toHStore",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.HStore",
        "fct-package": "postgresql-simple",
        "fct-signature": "a -\u003e HStoreBuilder",
        "fct-source": "src/Database-PostgreSQL-Simple-HStore-Implementation.html#toHStore",
        "fct-type": "method",
        "title": "toHStore"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple HStore",
        "module": "Database.PostgreSQL.Simple.HStore",
        "name": "toHStore",
        "normalized": "a-\u003eHStoreBuilder",
        "package": "postgresql-simple",
        "partial": "HStore",
        "signature": "a-\u003eHStoreBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-HStore.html#v:toHStoreText",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.HStore",
        "fct-package": "postgresql-simple",
        "fct-signature": "a -\u003e HStoreText",
        "fct-source": "src/Database-PostgreSQL-Simple-HStore-Implementation.html#toHStoreText",
        "fct-type": "method",
        "title": "toHStoreText"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple HStore",
        "module": "Database.PostgreSQL.Simple.HStore",
        "name": "toHStoreText",
        "normalized": "a-\u003eHStoreText",
        "package": "postgresql-simple",
        "partial": "HStore Text",
        "signature": "a-\u003eHStoreText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-HStore.html#v:toLazyByteString",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.HStore",
        "fct-package": "postgresql-simple",
        "fct-signature": "HStoreBuilder -\u003e ByteString",
        "fct-source": "src/Database-PostgreSQL-Simple-HStore-Implementation.html#toLazyByteString",
        "fct-type": "function",
        "title": "toLazyByteString"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple HStore",
        "module": "Database.PostgreSQL.Simple.HStore",
        "name": "toLazyByteString",
        "normalized": "HStoreBuilder-\u003eByteString",
        "package": "postgresql-simple",
        "partial": "Lazy Byte String",
        "signature": "HStoreBuilder-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInternal bits.  This interface is less stable and can change at any time.\n In particular this means that while the rest of the postgresql-simple\n package endeavors to follow the package versioning policy,  this module\n does not.  Also, at the moment there are things in here that aren't\n particularly internal and are exported elsewhere;  these will eventually\n disappear from this module.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.PostgreSQL.Simple.Internal",
        "fct-package": "postgresql-simple",
        "fct-signature": "module",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html",
        "fct-type": "module",
        "title": "Internal"
      },
      "index": {
        "description": "Internal bits This interface is less stable and can change at any time In particular this means that while the rest of the postgresql-simple package endeavors to follow the package versioning policy this module does not Also at the moment there are things in here that aren particularly internal and are exported elsewhere these will eventually disappear from this module",
        "hierarchy": "Database PostgreSQL Simple Internal",
        "module": "Database.PostgreSQL.Simple.Internal",
        "name": "Internal",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Internal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#t:ConnectInfo",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Internal",
        "fct-package": "postgresql-simple",
        "fct-signature": "data",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#ConnectInfo",
        "fct-type": "data",
        "title": "ConnectInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Internal",
        "module": "Database.PostgreSQL.Simple.Internal",
        "name": "ConnectInfo",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Connect Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#t:Connection",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Internal",
        "fct-package": "postgresql-simple",
        "fct-signature": "data",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#Connection",
        "fct-type": "data",
        "title": "Connection"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Internal",
        "module": "Database.PostgreSQL.Simple.Internal",
        "name": "Connection",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Connection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#t:Conversion",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Internal",
        "fct-package": "postgresql-simple",
        "fct-signature": "newtype",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#Conversion",
        "fct-type": "newtype",
        "title": "Conversion"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Internal",
        "module": "Database.PostgreSQL.Simple.Internal",
        "name": "Conversion",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Conversion",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#t:Field",
      "description": {
        "fct-descr": "\u003cp\u003eA Field represents metadata about a particular field\n\u003c/p\u003e\u003cp\u003eYou don't particularly want to retain these structures for a long\n period of time,  as they will retain the entire query result,  not\n just the field metadata\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.Internal",
        "fct-package": "postgresql-simple",
        "fct-signature": "data",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#Field",
        "fct-type": "data",
        "title": "Field"
      },
      "index": {
        "description": "Field represents metadata about particular field You don particularly want to retain these structures for long period of time as they will retain the entire query result not just the field metadata",
        "hierarchy": "Database PostgreSQL Simple Internal",
        "module": "Database.PostgreSQL.Simple.Internal",
        "name": "Field",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#t:QueryError",
      "description": {
        "fct-descr": "\u003cp\u003eException thrown if \u003ccode\u003equery\u003c/code\u003e is used to perform an \u003ccode\u003eINSERT\u003c/code\u003e-like\n operation, or \u003ccode\u003eexecute\u003c/code\u003e is used to perform a \u003ccode\u003eSELECT\u003c/code\u003e-like operation.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.Internal",
        "fct-package": "postgresql-simple",
        "fct-signature": "data",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#QueryError",
        "fct-type": "data",
        "title": "QueryError"
      },
      "index": {
        "description": "Exception thrown if query is used to perform an INSERT like operation or execute is used to perform SELECT like operation",
        "hierarchy": "Database PostgreSQL Simple Internal",
        "module": "Database.PostgreSQL.Simple.Internal",
        "name": "QueryError",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Query Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#t:Row",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Internal",
        "fct-package": "postgresql-simple",
        "fct-signature": "data",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#Row",
        "fct-type": "data",
        "title": "Row"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Internal",
        "module": "Database.PostgreSQL.Simple.Internal",
        "name": "Row",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Row",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#t:RowParser",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Internal",
        "fct-package": "postgresql-simple",
        "fct-signature": "newtype",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#RowParser",
        "fct-type": "newtype",
        "title": "RowParser"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Internal",
        "module": "Database.PostgreSQL.Simple.Internal",
        "name": "RowParser",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Row Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#t:SqlError",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Internal",
        "fct-package": "postgresql-simple",
        "fct-signature": "data",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#SqlError",
        "fct-type": "data",
        "title": "SqlError"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Internal",
        "module": "Database.PostgreSQL.Simple.Internal",
        "name": "SqlError",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Sql Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#t:TypeInfoCache",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Internal",
        "fct-package": "postgresql-simple",
        "fct-signature": "type",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#TypeInfoCache",
        "fct-type": "type",
        "title": "TypeInfoCache"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Internal",
        "module": "Database.PostgreSQL.Simple.Internal",
        "name": "TypeInfoCache",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Type Info Cache",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:ConnectInfo",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Internal",
        "fct-package": "postgresql-simple",
        "fct-signature": "ConnectInfo",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#ConnectInfo",
        "fct-type": "function",
        "title": "ConnectInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Internal",
        "module": "Database.PostgreSQL.Simple.Internal",
        "name": "ConnectInfo",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Connect Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:Connection",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Internal",
        "fct-package": "postgresql-simple",
        "fct-signature": "Connection",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#Connection",
        "fct-type": "function",
        "title": "Connection"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Internal",
        "module": "Database.PostgreSQL.Simple.Internal",
        "name": "Connection",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Connection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:Conversion",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Internal",
        "fct-package": "postgresql-simple",
        "fct-signature": "Conversion",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#Conversion",
        "fct-type": "function",
        "title": "Conversion"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Internal",
        "module": "Database.PostgreSQL.Simple.Internal",
        "name": "Conversion",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Conversion",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:Field",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Internal",
        "fct-package": "postgresql-simple",
        "fct-signature": "Field",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#Field",
        "fct-type": "function",
        "title": "Field"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Internal",
        "module": "Database.PostgreSQL.Simple.Internal",
        "name": "Field",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:QueryError",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Internal",
        "fct-package": "postgresql-simple",
        "fct-signature": "QueryError",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#QueryError",
        "fct-type": "function",
        "title": "QueryError"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Internal",
        "module": "Database.PostgreSQL.Simple.Internal",
        "name": "QueryError",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Query Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:RP",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Internal",
        "fct-package": "postgresql-simple",
        "fct-signature": "RP",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#RowParser",
        "fct-type": "function",
        "title": "RP"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Internal",
        "module": "Database.PostgreSQL.Simple.Internal",
        "name": "RP",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "RP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:Row",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Internal",
        "fct-package": "postgresql-simple",
        "fct-signature": "Row",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#Row",
        "fct-type": "function",
        "title": "Row"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Internal",
        "module": "Database.PostgreSQL.Simple.Internal",
        "name": "Row",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Row",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:SqlError",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Internal",
        "fct-package": "postgresql-simple",
        "fct-signature": "SqlError",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#SqlError",
        "fct-type": "function",
        "title": "SqlError"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Internal",
        "module": "Database.PostgreSQL.Simple.Internal",
        "name": "SqlError",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Sql Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:close",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Internal",
        "fct-package": "postgresql-simple",
        "fct-signature": "Connection -\u003e IO ()",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#close",
        "fct-type": "function",
        "title": "close"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Internal",
        "module": "Database.PostgreSQL.Simple.Internal",
        "name": "close",
        "normalized": "Connection-\u003eIO()",
        "package": "postgresql-simple",
        "partial": "",
        "signature": "Connection-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:column",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.Simple.Internal",
        "fct-package": "postgresql-simple",
        "fct-signature": "!Column",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#Field",
        "fct-type": "function",
        "title": "column"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Internal",
        "module": "Database.PostgreSQL.Simple.Internal",
        "name": "column",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:connect",
      "description": {
        "fct-descr": "\u003cp\u003eConnect with the given username to the given database. Will throw\n   an exception if it cannot connect.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.Internal",
        "fct-package": "postgresql-simple",
        "fct-signature": "ConnectInfo -\u003e IO Connection",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#connect",
        "fct-type": "function",
        "title": "connect"
      },
      "index": {
        "description": "Connect with the given username to the given database Will throw an exception if it cannot connect",
        "hierarchy": "Database PostgreSQL Simple Internal",
        "module": "Database.PostgreSQL.Simple.Internal",
        "name": "connect",
        "normalized": "ConnectInfo-\u003eIO Connection",
        "package": "postgresql-simple",
        "partial": "",
        "signature": "ConnectInfo-\u003eIO Connection"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:connectDatabase",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.Simple.Internal",
        "fct-package": "postgresql-simple",
        "fct-signature": "String",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#ConnectInfo",
        "fct-type": "function",
        "title": "connectDatabase"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Internal",
        "module": "Database.PostgreSQL.Simple.Internal",
        "name": "connectDatabase",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Database",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:connectHost",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.Simple.Internal",
        "fct-package": "postgresql-simple",
        "fct-signature": "String",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#ConnectInfo",
        "fct-type": "function",
        "title": "connectHost"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Internal",
        "module": "Database.PostgreSQL.Simple.Internal",
        "name": "connectHost",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Host",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:connectPassword",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.Simple.Internal",
        "fct-package": "postgresql-simple",
        "fct-signature": "String",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#ConnectInfo",
        "fct-type": "function",
        "title": "connectPassword"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Internal",
        "module": "Database.PostgreSQL.Simple.Internal",
        "name": "connectPassword",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Password",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:connectPort",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.Simple.Internal",
        "fct-package": "postgresql-simple",
        "fct-signature": "Word16",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#ConnectInfo",
        "fct-type": "function",
        "title": "connectPort"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Internal",
        "module": "Database.PostgreSQL.Simple.Internal",
        "name": "connectPort",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:connectPostgreSQL",
      "description": {
        "fct-descr": "\u003cp\u003eAttempt to make a connection based on a libpq connection string.\n   See \u003ca\u003ehttp://www.postgresql.org/docs/9.1/static/libpq-connect.html\u003c/a\u003e\n   for more information.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.Internal",
        "fct-package": "postgresql-simple",
        "fct-signature": "ByteString -\u003e IO Connection",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#connectPostgreSQL",
        "fct-type": "function",
        "title": "connectPostgreSQL"
      },
      "index": {
        "description": "Attempt to make connection based on libpq connection string See http www.postgresql.org docs static libpq-connect.html for more information",
        "hierarchy": "Database PostgreSQL Simple Internal",
        "module": "Database.PostgreSQL.Simple.Internal",
        "name": "connectPostgreSQL",
        "normalized": "ByteString-\u003eIO Connection",
        "package": "postgresql-simple",
        "partial": "Postgre SQL",
        "signature": "ByteString-\u003eIO Connection"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:connectUser",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.Simple.Internal",
        "fct-package": "postgresql-simple",
        "fct-signature": "String",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#ConnectInfo",
        "fct-type": "function",
        "title": "connectUser"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Internal",
        "module": "Database.PostgreSQL.Simple.Internal",
        "name": "connectUser",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "User",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:connectionHandle",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.Simple.Internal",
        "fct-package": "postgresql-simple",
        "fct-signature": "!(MVar Connection)",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#Connection",
        "fct-type": "function",
        "title": "connectionHandle"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Internal",
        "module": "Database.PostgreSQL.Simple.Internal",
        "name": "connectionHandle",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Handle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:connectionObjects",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.Simple.Internal",
        "fct-package": "postgresql-simple",
        "fct-signature": "!(MVar TypeInfoCache)",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#Connection",
        "fct-type": "function",
        "title": "connectionObjects"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Internal",
        "module": "Database.PostgreSQL.Simple.Internal",
        "name": "connectionObjects",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Objects",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:connectionTempNameCounter",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.Simple.Internal",
        "fct-package": "postgresql-simple",
        "fct-signature": "!(IORef Int64)",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#Connection",
        "fct-type": "function",
        "title": "connectionTempNameCounter"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Internal",
        "module": "Database.PostgreSQL.Simple.Internal",
        "name": "connectionTempNameCounter",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Temp Name Counter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:conversionError",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Internal",
        "fct-package": "postgresql-simple",
        "fct-signature": "err -\u003e Conversion a",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#conversionError",
        "fct-type": "function",
        "title": "conversionError"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Internal",
        "module": "Database.PostgreSQL.Simple.Internal",
        "name": "conversionError",
        "normalized": "a-\u003eConversion b",
        "package": "postgresql-simple",
        "partial": "Error",
        "signature": "err-\u003eConversion a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:conversionMap",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Internal",
        "fct-package": "postgresql-simple",
        "fct-signature": "(Ok a -\u003e Ok b) -\u003e Conversion a -\u003e Conversion b",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#conversionMap",
        "fct-type": "function",
        "title": "conversionMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Internal",
        "module": "Database.PostgreSQL.Simple.Internal",
        "name": "conversionMap",
        "normalized": "(Ok a-\u003eOk b)-\u003eConversion a-\u003eConversion b",
        "package": "postgresql-simple",
        "partial": "Map",
        "signature": "(Ok a-\u003eOk b)-\u003eConversion a-\u003eConversion b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:defaultConnectInfo",
      "description": {
        "fct-descr": "\u003cp\u003eDefault information for setting up a connection.\n\u003c/p\u003e\u003cp\u003eDefaults are as follows:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Server on \u003ccode\u003elocalhost\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e Port on \u003ccode\u003e5432\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e User \u003ccode\u003epostgres\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e No password\n\u003c/li\u003e\u003cli\u003e Database \u003ccode\u003epostgres\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eUse as in the following example:\n\u003c/p\u003e\u003cpre\u003e connect defaultConnectInfo { connectHost = \"db.example.com\" }\n\u003c/pre\u003e",
        "fct-module": "Database.PostgreSQL.Simple.Internal",
        "fct-package": "postgresql-simple",
        "fct-signature": "ConnectInfo",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#defaultConnectInfo",
        "fct-type": "function",
        "title": "defaultConnectInfo"
      },
      "index": {
        "description": "Default information for setting up connection Defaults are as follows Server on localhost Port on User postgres No password Database postgres Use as in the following example connect defaultConnectInfo connectHost db.example.com",
        "hierarchy": "Database PostgreSQL Simple Internal",
        "module": "Database.PostgreSQL.Simple.Internal",
        "name": "defaultConnectInfo",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Connect Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:disconnectedError",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Internal",
        "fct-package": "postgresql-simple",
        "fct-signature": "SqlError",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#disconnectedError",
        "fct-type": "function",
        "title": "disconnectedError"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Internal",
        "module": "Database.PostgreSQL.Simple.Internal",
        "name": "disconnectedError",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:exec",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Internal",
        "fct-package": "postgresql-simple",
        "fct-signature": "Connection -\u003e ByteString -\u003e IO Result",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#exec",
        "fct-type": "function",
        "title": "exec"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Internal",
        "module": "Database.PostgreSQL.Simple.Internal",
        "name": "exec",
        "normalized": "Connection-\u003eByteString-\u003eIO Result",
        "package": "postgresql-simple",
        "partial": "",
        "signature": "Connection-\u003eByteString-\u003eIO Result"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:execute_",
      "description": {
        "fct-descr": "\u003cp\u003eA version of \u003ccode\u003eexecute\u003c/code\u003e that does not perform query substitution.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.Internal",
        "fct-package": "postgresql-simple",
        "fct-signature": "Connection -\u003e Query -\u003e IO Int64",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#execute_",
        "fct-type": "function",
        "title": "execute_"
      },
      "index": {
        "description": "version of execute that does not perform query substitution",
        "hierarchy": "Database PostgreSQL Simple Internal",
        "module": "Database.PostgreSQL.Simple.Internal",
        "name": "execute_",
        "normalized": "Connection-\u003eQuery-\u003eIO Int",
        "package": "postgresql-simple",
        "partial": "",
        "signature": "Connection-\u003eQuery-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:fatalError",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Internal",
        "fct-package": "postgresql-simple",
        "fct-signature": "ByteString -\u003e SqlError",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#fatalError",
        "fct-type": "function",
        "title": "fatalError"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Internal",
        "module": "Database.PostgreSQL.Simple.Internal",
        "name": "fatalError",
        "normalized": "ByteString-\u003eSqlError",
        "package": "postgresql-simple",
        "partial": "Error",
        "signature": "ByteString-\u003eSqlError"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:fdError",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Internal",
        "fct-package": "postgresql-simple",
        "fct-signature": "ByteString -\u003e IOError",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#fdError",
        "fct-type": "function",
        "title": "fdError"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Internal",
        "module": "Database.PostgreSQL.Simple.Internal",
        "name": "fdError",
        "normalized": "ByteString-\u003eIOError",
        "package": "postgresql-simple",
        "partial": "Error",
        "signature": "ByteString-\u003eIOError"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:finishExecute",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Internal",
        "fct-package": "postgresql-simple",
        "fct-signature": "Connection -\u003e Query -\u003e Result -\u003e IO Int64",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#finishExecute",
        "fct-type": "function",
        "title": "finishExecute"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Internal",
        "module": "Database.PostgreSQL.Simple.Internal",
        "name": "finishExecute",
        "normalized": "Connection-\u003eQuery-\u003eResult-\u003eIO Int",
        "package": "postgresql-simple",
        "partial": "Execute",
        "signature": "Connection-\u003eQuery-\u003eResult-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:liftConversion",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Internal",
        "fct-package": "postgresql-simple",
        "fct-signature": "IO a -\u003e Conversion a",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#liftConversion",
        "fct-type": "function",
        "title": "liftConversion"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Internal",
        "module": "Database.PostgreSQL.Simple.Internal",
        "name": "liftConversion",
        "normalized": "IO a-\u003eConversion a",
        "package": "postgresql-simple",
        "partial": "Conversion",
        "signature": "IO a-\u003eConversion a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:liftRowParser",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Internal",
        "fct-package": "postgresql-simple",
        "fct-signature": "IO a -\u003e RowParser a",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#liftRowParser",
        "fct-type": "function",
        "title": "liftRowParser"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Internal",
        "module": "Database.PostgreSQL.Simple.Internal",
        "name": "liftRowParser",
        "normalized": "IO a-\u003eRowParser a",
        "package": "postgresql-simple",
        "partial": "Row Parser",
        "signature": "IO a-\u003eRowParser a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:newNullConnection",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Internal",
        "fct-package": "postgresql-simple",
        "fct-signature": "IO Connection",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#newNullConnection",
        "fct-type": "function",
        "title": "newNullConnection"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Internal",
        "module": "Database.PostgreSQL.Simple.Internal",
        "name": "newNullConnection",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Null Connection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:newTempName",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Internal",
        "fct-package": "postgresql-simple",
        "fct-signature": "Connection -\u003e IO Query",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#newTempName",
        "fct-type": "function",
        "title": "newTempName"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Internal",
        "module": "Database.PostgreSQL.Simple.Internal",
        "name": "newTempName",
        "normalized": "Connection-\u003eIO Query",
        "package": "postgresql-simple",
        "partial": "Temp Name",
        "signature": "Connection-\u003eIO Query"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:oid2int",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Internal",
        "fct-package": "postgresql-simple",
        "fct-signature": "Oid -\u003e Int",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#oid2int",
        "fct-type": "function",
        "title": "oid2int"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Internal",
        "module": "Database.PostgreSQL.Simple.Internal",
        "name": "oid2int",
        "normalized": "Oid-\u003eInt",
        "package": "postgresql-simple",
        "partial": "",
        "signature": "Oid-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:postgreSQLConnectionString",
      "description": {
        "fct-descr": "\u003cp\u003eTurns a \u003ccode\u003e\u003ca\u003eConnectInfo\u003c/a\u003e\u003c/code\u003e data structure into a libpq connection string.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.Internal",
        "fct-package": "postgresql-simple",
        "fct-signature": "ConnectInfo -\u003e ByteString",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#postgreSQLConnectionString",
        "fct-type": "function",
        "title": "postgreSQLConnectionString"
      },
      "index": {
        "description": "Turns ConnectInfo data structure into libpq connection string",
        "hierarchy": "Database PostgreSQL Simple Internal",
        "module": "Database.PostgreSQL.Simple.Internal",
        "name": "postgreSQLConnectionString",
        "normalized": "ConnectInfo-\u003eByteString",
        "package": "postgresql-simple",
        "partial": "SQLConnection String",
        "signature": "ConnectInfo-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:qeMessage",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.Simple.Internal",
        "fct-package": "postgresql-simple",
        "fct-signature": "String",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#QueryError",
        "fct-type": "function",
        "title": "qeMessage"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Internal",
        "module": "Database.PostgreSQL.Simple.Internal",
        "name": "qeMessage",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Message",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:qeQuery",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.Simple.Internal",
        "fct-package": "postgresql-simple",
        "fct-signature": "Query",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#QueryError",
        "fct-type": "function",
        "title": "qeQuery"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Internal",
        "module": "Database.PostgreSQL.Simple.Internal",
        "name": "qeQuery",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:result",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.Simple.Internal",
        "fct-package": "postgresql-simple",
        "fct-signature": "!Result",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#Field",
        "fct-type": "function",
        "title": "result"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Internal",
        "module": "Database.PostgreSQL.Simple.Internal",
        "name": "result",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:row",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.Simple.Internal",
        "fct-package": "postgresql-simple",
        "fct-signature": "!Row",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#Row",
        "fct-type": "function",
        "title": "row"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Internal",
        "module": "Database.PostgreSQL.Simple.Internal",
        "name": "row",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:rowresult",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.Simple.Internal",
        "fct-package": "postgresql-simple",
        "fct-signature": "!Result",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#Row",
        "fct-type": "function",
        "title": "rowresult"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Internal",
        "module": "Database.PostgreSQL.Simple.Internal",
        "name": "rowresult",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:runConversion",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.Simple.Internal",
        "fct-package": "postgresql-simple",
        "fct-signature": "Connection -\u003e IO (Ok a)",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#Conversion",
        "fct-type": "function",
        "title": "runConversion"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Internal",
        "module": "Database.PostgreSQL.Simple.Internal",
        "name": "runConversion",
        "normalized": "Connection-\u003eIO(Ok a)",
        "package": "postgresql-simple",
        "partial": "Conversion",
        "signature": "Connection-\u003eIO(Ok a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:sqlErrorDetail",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.Simple.Internal",
        "fct-package": "postgresql-simple",
        "fct-signature": "ByteString",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#SqlError",
        "fct-type": "function",
        "title": "sqlErrorDetail"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Internal",
        "module": "Database.PostgreSQL.Simple.Internal",
        "name": "sqlErrorDetail",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Error Detail",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:sqlErrorHint",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.Simple.Internal",
        "fct-package": "postgresql-simple",
        "fct-signature": "ByteString",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#SqlError",
        "fct-type": "function",
        "title": "sqlErrorHint"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Internal",
        "module": "Database.PostgreSQL.Simple.Internal",
        "name": "sqlErrorHint",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Error Hint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:sqlErrorMsg",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.Simple.Internal",
        "fct-package": "postgresql-simple",
        "fct-signature": "ByteString",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#SqlError",
        "fct-type": "function",
        "title": "sqlErrorMsg"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Internal",
        "module": "Database.PostgreSQL.Simple.Internal",
        "name": "sqlErrorMsg",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Error Msg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:sqlExecStatus",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.Simple.Internal",
        "fct-package": "postgresql-simple",
        "fct-signature": "ExecStatus",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#SqlError",
        "fct-type": "function",
        "title": "sqlExecStatus"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Internal",
        "module": "Database.PostgreSQL.Simple.Internal",
        "name": "sqlExecStatus",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Exec Status",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:sqlState",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.Simple.Internal",
        "fct-package": "postgresql-simple",
        "fct-signature": "ByteString",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#SqlError",
        "fct-type": "function",
        "title": "sqlState"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Internal",
        "module": "Database.PostgreSQL.Simple.Internal",
        "name": "sqlState",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:throwResultError",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Internal",
        "fct-package": "postgresql-simple",
        "fct-signature": "ByteString -\u003e Result -\u003e ExecStatus -\u003e IO a",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#throwResultError",
        "fct-type": "function",
        "title": "throwResultError"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Internal",
        "module": "Database.PostgreSQL.Simple.Internal",
        "name": "throwResultError",
        "normalized": "ByteString-\u003eResult-\u003eExecStatus-\u003eIO a",
        "package": "postgresql-simple",
        "partial": "Result Error",
        "signature": "ByteString-\u003eResult-\u003eExecStatus-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:typeOid",
      "description": {
        "fct-descr": "\u003cp\u003eThis returns the type oid associated with the column.  Analogous\n   to libpq's \u003ccode\u003ePQftype\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.Internal",
        "fct-package": "postgresql-simple",
        "fct-signature": "!Oid",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#Field",
        "fct-type": "function",
        "title": "typeOid"
      },
      "index": {
        "description": "This returns the type oid associated with the column Analogous to libpq PQftype",
        "hierarchy": "Database PostgreSQL Simple Internal",
        "module": "Database.PostgreSQL.Simple.Internal",
        "name": "typeOid",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Oid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:unRP",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.Simple.Internal",
        "fct-package": "postgresql-simple",
        "fct-signature": "ReaderT Row (StateT Column Conversion) a",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#RowParser",
        "fct-type": "function",
        "title": "unRP"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Internal",
        "module": "Database.PostgreSQL.Simple.Internal",
        "name": "unRP",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "RP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Internal.html#v:withConnection",
      "description": {
        "fct-descr": "\u003cp\u003eAtomically perform an action with the database handle, if there is one.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.Internal",
        "fct-package": "postgresql-simple",
        "fct-signature": "Connection -\u003e (Connection -\u003e IO a) -\u003e IO a",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#withConnection",
        "fct-type": "function",
        "title": "withConnection"
      },
      "index": {
        "description": "Atomically perform an action with the database handle if there is one",
        "hierarchy": "Database PostgreSQL Simple Internal",
        "module": "Database.PostgreSQL.Simple.Internal",
        "name": "withConnection",
        "normalized": "Connection-\u003e(Connection-\u003eIO a)-\u003eIO a",
        "package": "postgresql-simple",
        "partial": "Connection",
        "signature": "Connection-\u003e(Connection-\u003eIO a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-LargeObjects.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSupport for PostgreSQL's Large Objects;  see\n \u003ca\u003ehttp://www.postgresql.org/docs/9.1/static/largeobjects.html\u003c/a\u003e for more\n information.\n\u003c/p\u003e\u003cp\u003eNote that Large Object File Descriptors are only valid within a single\n database transaction,  so if you are interested in using anything beyond\n \u003ccode\u003e\u003ca\u003eloCreat\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eloCreate\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eloUnlink\u003c/a\u003e\u003c/code\u003e,  you will need to run the entire\n sequence of functions in a transaction.   As \u003ccode\u003e\u003ca\u003eloImport\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eloExport\u003c/a\u003e\u003c/code\u003e\n are simply C functions that call \u003ccode\u003e\u003ca\u003eloCreat\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eloOpen\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eloRead\u003c/a\u003e\u003c/code\u003e, and \n \u003ccode\u003e\u003ca\u003eloWrite\u003c/a\u003e\u003c/code\u003e,  and do not perform any transaction handling themselves,\n they also need to be wrapped in an explicit transaction.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.PostgreSQL.Simple.LargeObjects",
        "fct-package": "postgresql-simple",
        "fct-signature": "module",
        "fct-source": "src/Database-PostgreSQL-Simple-LargeObjects.html",
        "fct-type": "module",
        "title": "LargeObjects"
      },
      "index": {
        "description": "Support for PostgreSQL Large Objects see http www.postgresql.org docs static largeobjects.html for more information Note that Large Object File Descriptors are only valid within single database transaction so if you are interested in using anything beyond loCreat loCreate and loUnlink you will need to run the entire sequence of functions in transaction As loImport and loExport are simply functions that call loCreat loOpen loRead and loWrite and do not perform any transaction handling themselves they also need to be wrapped in an explicit transaction",
        "hierarchy": "Database PostgreSQL Simple LargeObjects",
        "module": "Database.PostgreSQL.Simple.LargeObjects",
        "name": "LargeObjects",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Large Objects",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-LargeObjects.html#t:IOMode",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eopenFile\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.LargeObjects",
        "fct-package": "postgresql-simple",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "IOMode"
      },
      "index": {
        "description": "See openFile",
        "hierarchy": "Database PostgreSQL Simple LargeObjects",
        "module": "Database.PostgreSQL.Simple.LargeObjects",
        "name": "IOMode",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "IOMode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-LargeObjects.html#t:LoFd",
      "description": {
        "fct-descr": "\u003cp\u003eLoFd is a Large Object (pseudo) File Descriptor.  It is understood by\n libpq but not by operating system calls.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.LargeObjects",
        "fct-package": "postgresql-simple",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "LoFd"
      },
      "index": {
        "description": "LoFd is Large Object pseudo File Descriptor It is understood by libpq but not by operating system calls",
        "hierarchy": "Database PostgreSQL Simple LargeObjects",
        "module": "Database.PostgreSQL.Simple.LargeObjects",
        "name": "LoFd",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Lo Fd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-LargeObjects.html#t:Oid",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.LargeObjects",
        "fct-package": "postgresql-simple",
        "fct-signature": "newtype",
        "fct-type": "newtype",
        "title": "Oid"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple LargeObjects",
        "module": "Database.PostgreSQL.Simple.LargeObjects",
        "name": "Oid",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Oid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-LargeObjects.html#t:SeekMode",
      "description": {
        "fct-descr": "\u003cp\u003eA mode that determines the effect of \u003ccode\u003ehSeek\u003c/code\u003e \u003ccode\u003ehdl mode i\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.LargeObjects",
        "fct-package": "postgresql-simple",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "SeekMode"
      },
      "index": {
        "description": "mode that determines the effect of hSeek hdl mode",
        "hierarchy": "Database PostgreSQL Simple LargeObjects",
        "module": "Database.PostgreSQL.Simple.LargeObjects",
        "name": "SeekMode",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Seek Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-LargeObjects.html#v:AbsoluteSeek",
      "description": {
        "fct-descr": "\u003cp\u003ethe position of \u003ccode\u003ehdl\u003c/code\u003e is set to \u003ccode\u003ei\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.LargeObjects",
        "fct-package": "postgresql-simple",
        "fct-signature": "AbsoluteSeek",
        "fct-type": "function",
        "title": "AbsoluteSeek"
      },
      "index": {
        "description": "the position of hdl is set to",
        "hierarchy": "Database PostgreSQL Simple LargeObjects",
        "module": "Database.PostgreSQL.Simple.LargeObjects",
        "name": "AbsoluteSeek",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Absolute Seek",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-LargeObjects.html#v:AppendMode",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.LargeObjects",
        "fct-package": "postgresql-simple",
        "fct-signature": "AppendMode",
        "fct-type": "function",
        "title": "AppendMode"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple LargeObjects",
        "module": "Database.PostgreSQL.Simple.LargeObjects",
        "name": "AppendMode",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Append Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-LargeObjects.html#v:Oid",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.LargeObjects",
        "fct-package": "postgresql-simple",
        "fct-signature": "Oid CUInt",
        "fct-type": "function",
        "title": "Oid"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple LargeObjects",
        "module": "Database.PostgreSQL.Simple.LargeObjects",
        "name": "Oid",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Oid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-LargeObjects.html#v:ReadMode",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.LargeObjects",
        "fct-package": "postgresql-simple",
        "fct-signature": "ReadMode",
        "fct-type": "function",
        "title": "ReadMode"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple LargeObjects",
        "module": "Database.PostgreSQL.Simple.LargeObjects",
        "name": "ReadMode",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Read Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-LargeObjects.html#v:ReadWriteMode",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.LargeObjects",
        "fct-package": "postgresql-simple",
        "fct-signature": "ReadWriteMode",
        "fct-type": "function",
        "title": "ReadWriteMode"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple LargeObjects",
        "module": "Database.PostgreSQL.Simple.LargeObjects",
        "name": "ReadWriteMode",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Read Write Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-LargeObjects.html#v:RelativeSeek",
      "description": {
        "fct-descr": "\u003cp\u003ethe position of \u003ccode\u003ehdl\u003c/code\u003e is set to offset \u003ccode\u003ei\u003c/code\u003e\n from the current position.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.LargeObjects",
        "fct-package": "postgresql-simple",
        "fct-signature": "RelativeSeek",
        "fct-type": "function",
        "title": "RelativeSeek"
      },
      "index": {
        "description": "the position of hdl is set to offset from the current position",
        "hierarchy": "Database PostgreSQL Simple LargeObjects",
        "module": "Database.PostgreSQL.Simple.LargeObjects",
        "name": "RelativeSeek",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Relative Seek",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-LargeObjects.html#v:SeekFromEnd",
      "description": {
        "fct-descr": "\u003cp\u003ethe position of \u003ccode\u003ehdl\u003c/code\u003e is set to offset \u003ccode\u003ei\u003c/code\u003e\n from the end of the file.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.LargeObjects",
        "fct-package": "postgresql-simple",
        "fct-signature": "SeekFromEnd",
        "fct-type": "function",
        "title": "SeekFromEnd"
      },
      "index": {
        "description": "the position of hdl is set to offset from the end of the file",
        "hierarchy": "Database PostgreSQL Simple LargeObjects",
        "module": "Database.PostgreSQL.Simple.LargeObjects",
        "name": "SeekFromEnd",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Seek From End",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-LargeObjects.html#v:WriteMode",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.LargeObjects",
        "fct-package": "postgresql-simple",
        "fct-signature": "WriteMode",
        "fct-type": "function",
        "title": "WriteMode"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple LargeObjects",
        "module": "Database.PostgreSQL.Simple.LargeObjects",
        "name": "WriteMode",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Write Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-LargeObjects.html#v:loClose",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.LargeObjects",
        "fct-package": "postgresql-simple",
        "fct-signature": "Connection -\u003e LoFd -\u003e IO ()",
        "fct-source": "src/Database-PostgreSQL-Simple-LargeObjects.html#loClose",
        "fct-type": "function",
        "title": "loClose"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple LargeObjects",
        "module": "Database.PostgreSQL.Simple.LargeObjects",
        "name": "loClose",
        "normalized": "Connection-\u003eLoFd-\u003eIO()",
        "package": "postgresql-simple",
        "partial": "Close",
        "signature": "Connection-\u003eLoFd-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-LargeObjects.html#v:loCreat",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.LargeObjects",
        "fct-package": "postgresql-simple",
        "fct-signature": "Connection -\u003e IO Oid",
        "fct-source": "src/Database-PostgreSQL-Simple-LargeObjects.html#loCreat",
        "fct-type": "function",
        "title": "loCreat"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple LargeObjects",
        "module": "Database.PostgreSQL.Simple.LargeObjects",
        "name": "loCreat",
        "normalized": "Connection-\u003eIO Oid",
        "package": "postgresql-simple",
        "partial": "Creat",
        "signature": "Connection-\u003eIO Oid"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-LargeObjects.html#v:loCreate",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.LargeObjects",
        "fct-package": "postgresql-simple",
        "fct-signature": "Connection -\u003e Oid -\u003e IO Oid",
        "fct-source": "src/Database-PostgreSQL-Simple-LargeObjects.html#loCreate",
        "fct-type": "function",
        "title": "loCreate"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple LargeObjects",
        "module": "Database.PostgreSQL.Simple.LargeObjects",
        "name": "loCreate",
        "normalized": "Connection-\u003eOid-\u003eIO Oid",
        "package": "postgresql-simple",
        "partial": "Create",
        "signature": "Connection-\u003eOid-\u003eIO Oid"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-LargeObjects.html#v:loExport",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.LargeObjects",
        "fct-package": "postgresql-simple",
        "fct-signature": "Connection -\u003e Oid -\u003e FilePath -\u003e IO ()",
        "fct-source": "src/Database-PostgreSQL-Simple-LargeObjects.html#loExport",
        "fct-type": "function",
        "title": "loExport"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple LargeObjects",
        "module": "Database.PostgreSQL.Simple.LargeObjects",
        "name": "loExport",
        "normalized": "Connection-\u003eOid-\u003eFilePath-\u003eIO()",
        "package": "postgresql-simple",
        "partial": "Export",
        "signature": "Connection-\u003eOid-\u003eFilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-LargeObjects.html#v:loImport",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.LargeObjects",
        "fct-package": "postgresql-simple",
        "fct-signature": "Connection -\u003e FilePath -\u003e IO Oid",
        "fct-source": "src/Database-PostgreSQL-Simple-LargeObjects.html#loImport",
        "fct-type": "function",
        "title": "loImport"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple LargeObjects",
        "module": "Database.PostgreSQL.Simple.LargeObjects",
        "name": "loImport",
        "normalized": "Connection-\u003eFilePath-\u003eIO Oid",
        "package": "postgresql-simple",
        "partial": "Import",
        "signature": "Connection-\u003eFilePath-\u003eIO Oid"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-LargeObjects.html#v:loImportWithOid",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.LargeObjects",
        "fct-package": "postgresql-simple",
        "fct-signature": "Connection -\u003e FilePath -\u003e Oid -\u003e IO Oid",
        "fct-source": "src/Database-PostgreSQL-Simple-LargeObjects.html#loImportWithOid",
        "fct-type": "function",
        "title": "loImportWithOid"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple LargeObjects",
        "module": "Database.PostgreSQL.Simple.LargeObjects",
        "name": "loImportWithOid",
        "normalized": "Connection-\u003eFilePath-\u003eOid-\u003eIO Oid",
        "package": "postgresql-simple",
        "partial": "Import With Oid",
        "signature": "Connection-\u003eFilePath-\u003eOid-\u003eIO Oid"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-LargeObjects.html#v:loOpen",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.LargeObjects",
        "fct-package": "postgresql-simple",
        "fct-signature": "Connection -\u003e Oid -\u003e IOMode -\u003e IO LoFd",
        "fct-source": "src/Database-PostgreSQL-Simple-LargeObjects.html#loOpen",
        "fct-type": "function",
        "title": "loOpen"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple LargeObjects",
        "module": "Database.PostgreSQL.Simple.LargeObjects",
        "name": "loOpen",
        "normalized": "Connection-\u003eOid-\u003eIOMode-\u003eIO LoFd",
        "package": "postgresql-simple",
        "partial": "Open",
        "signature": "Connection-\u003eOid-\u003eIOMode-\u003eIO LoFd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-LargeObjects.html#v:loRead",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.LargeObjects",
        "fct-package": "postgresql-simple",
        "fct-signature": "Connection -\u003e LoFd -\u003e Int -\u003e IO ByteString",
        "fct-source": "src/Database-PostgreSQL-Simple-LargeObjects.html#loRead",
        "fct-type": "function",
        "title": "loRead"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple LargeObjects",
        "module": "Database.PostgreSQL.Simple.LargeObjects",
        "name": "loRead",
        "normalized": "Connection-\u003eLoFd-\u003eInt-\u003eIO ByteString",
        "package": "postgresql-simple",
        "partial": "Read",
        "signature": "Connection-\u003eLoFd-\u003eInt-\u003eIO ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-LargeObjects.html#v:loSeek",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.LargeObjects",
        "fct-package": "postgresql-simple",
        "fct-signature": "Connection -\u003e LoFd -\u003e SeekMode -\u003e Int -\u003e IO Int",
        "fct-source": "src/Database-PostgreSQL-Simple-LargeObjects.html#loSeek",
        "fct-type": "function",
        "title": "loSeek"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple LargeObjects",
        "module": "Database.PostgreSQL.Simple.LargeObjects",
        "name": "loSeek",
        "normalized": "Connection-\u003eLoFd-\u003eSeekMode-\u003eInt-\u003eIO Int",
        "package": "postgresql-simple",
        "partial": "Seek",
        "signature": "Connection-\u003eLoFd-\u003eSeekMode-\u003eInt-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-LargeObjects.html#v:loTell",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.LargeObjects",
        "fct-package": "postgresql-simple",
        "fct-signature": "Connection -\u003e LoFd -\u003e IO Int",
        "fct-source": "src/Database-PostgreSQL-Simple-LargeObjects.html#loTell",
        "fct-type": "function",
        "title": "loTell"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple LargeObjects",
        "module": "Database.PostgreSQL.Simple.LargeObjects",
        "name": "loTell",
        "normalized": "Connection-\u003eLoFd-\u003eIO Int",
        "package": "postgresql-simple",
        "partial": "Tell",
        "signature": "Connection-\u003eLoFd-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-LargeObjects.html#v:loTruncate",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.LargeObjects",
        "fct-package": "postgresql-simple",
        "fct-signature": "Connection -\u003e LoFd -\u003e Int -\u003e IO ()",
        "fct-source": "src/Database-PostgreSQL-Simple-LargeObjects.html#loTruncate",
        "fct-type": "function",
        "title": "loTruncate"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple LargeObjects",
        "module": "Database.PostgreSQL.Simple.LargeObjects",
        "name": "loTruncate",
        "normalized": "Connection-\u003eLoFd-\u003eInt-\u003eIO()",
        "package": "postgresql-simple",
        "partial": "Truncate",
        "signature": "Connection-\u003eLoFd-\u003eInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-LargeObjects.html#v:loUnlink",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.LargeObjects",
        "fct-package": "postgresql-simple",
        "fct-signature": "Connection -\u003e Oid -\u003e IO ()",
        "fct-source": "src/Database-PostgreSQL-Simple-LargeObjects.html#loUnlink",
        "fct-type": "function",
        "title": "loUnlink"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple LargeObjects",
        "module": "Database.PostgreSQL.Simple.LargeObjects",
        "name": "loUnlink",
        "normalized": "Connection-\u003eOid-\u003eIO()",
        "package": "postgresql-simple",
        "partial": "Unlink",
        "signature": "Connection-\u003eOid-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-LargeObjects.html#v:loWrite",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.LargeObjects",
        "fct-package": "postgresql-simple",
        "fct-signature": "Connection -\u003e LoFd -\u003e ByteString -\u003e IO Int",
        "fct-source": "src/Database-PostgreSQL-Simple-LargeObjects.html#loWrite",
        "fct-type": "function",
        "title": "loWrite"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple LargeObjects",
        "module": "Database.PostgreSQL.Simple.LargeObjects",
        "name": "loWrite",
        "normalized": "Connection-\u003eLoFd-\u003eByteString-\u003eIO Int",
        "package": "postgresql-simple",
        "partial": "Write",
        "signature": "Connection-\u003eLoFd-\u003eByteString-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Notification.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSupport for receiving asynchronous notifications via PostgreSQL's\n Listen/Notify mechanism.  See\n \u003ca\u003ehttp://www.postgresql.org/docs/9.1/static/sql-notify.html\u003c/a\u003e for more\n information.\n\u003c/p\u003e\u003cp\u003eNote that on Windows,  \u003ccode\u003egetNotification\u003c/code\u003e currently uses a polling loop\n of 1 second to check for more notifications,  due to some inadequacies\n in GHC's IO implementation and interface on that platform.   See GHC\n issue #7353 for more information.  While this workaround is less than\n ideal,  notifications are still better than polling the database directly.\n Notifications do not create any extra work for the backend,  and are\n likely cheaper on the client side as well.\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://hackage.haskell.org/trac/ghc/ticket/7353\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.PostgreSQL.Simple.Notification",
        "fct-package": "postgresql-simple",
        "fct-signature": "module",
        "fct-source": "src/Database-PostgreSQL-Simple-Notification.html",
        "fct-type": "module",
        "title": "Notification"
      },
      "index": {
        "description": "Support for receiving asynchronous notifications via PostgreSQL Listen Notify mechanism See http www.postgresql.org docs static sql-notify.html for more information Note that on Windows getNotification currently uses polling loop of second to check for more notifications due to some inadequacies in GHC IO implementation and interface on that platform See GHC issue for more information While this workaround is less than ideal notifications are still better than polling the database directly Notifications do not create any extra work for the backend and are likely cheaper on the client side as well http hackage.haskell.org trac ghc ticket",
        "hierarchy": "Database PostgreSQL Simple Notification",
        "module": "Database.PostgreSQL.Simple.Notification",
        "name": "Notification",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Notification",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Notification.html#t:Notification",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Notification",
        "fct-package": "postgresql-simple",
        "fct-signature": "data",
        "fct-source": "src/Database-PostgreSQL-Simple-Notification.html#Notification",
        "fct-type": "data",
        "title": "Notification"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Notification",
        "module": "Database.PostgreSQL.Simple.Notification",
        "name": "Notification",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Notification",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Notification.html#v:Notification",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Notification",
        "fct-package": "postgresql-simple",
        "fct-signature": "Notification",
        "fct-source": "src/Database-PostgreSQL-Simple-Notification.html#Notification",
        "fct-type": "function",
        "title": "Notification"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Notification",
        "module": "Database.PostgreSQL.Simple.Notification",
        "name": "Notification",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Notification",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Notification.html#v:getBackendPID",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the process \u003ccode\u003e\u003ca\u003eCPid\u003c/a\u003e\u003c/code\u003e of the backend server process\n handling this connection.\n\u003c/p\u003e\u003cp\u003eThe backend PID is useful for debugging purposes and for comparison\n to NOTIFY messages (which include the PID of the notifying backend\n process). Note that the PID belongs to a process executing on the\n database server host, not the local host!\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.Notification",
        "fct-package": "postgresql-simple",
        "fct-signature": "Connection -\u003e IO CPid",
        "fct-source": "src/Database-PostgreSQL-Simple-Notification.html#getBackendPID",
        "fct-type": "function",
        "title": "getBackendPID"
      },
      "index": {
        "description": "Returns the process CPid of the backend server process handling this connection The backend PID is useful for debugging purposes and for comparison to NOTIFY messages which include the PID of the notifying backend process Note that the PID belongs to process executing on the database server host not the local host",
        "hierarchy": "Database PostgreSQL Simple Notification",
        "module": "Database.PostgreSQL.Simple.Notification",
        "name": "getBackendPID",
        "normalized": "Connection-\u003eIO CPid",
        "package": "postgresql-simple",
        "partial": "Backend PID",
        "signature": "Connection-\u003eIO CPid"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Notification.html#v:getNotification",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a single notification.   If no notifications are available,\n   \u003ccode\u003e\u003ca\u003egetNotification\u003c/a\u003e\u003c/code\u003e blocks until one arrives.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.Notification",
        "fct-package": "postgresql-simple",
        "fct-signature": "Connection -\u003e IO Notification",
        "fct-source": "src/Database-PostgreSQL-Simple-Notification.html#getNotification",
        "fct-type": "function",
        "title": "getNotification"
      },
      "index": {
        "description": "Returns single notification If no notifications are available getNotification blocks until one arrives",
        "hierarchy": "Database PostgreSQL Simple Notification",
        "module": "Database.PostgreSQL.Simple.Notification",
        "name": "getNotification",
        "normalized": "Connection-\u003eIO Notification",
        "package": "postgresql-simple",
        "partial": "Notification",
        "signature": "Connection-\u003eIO Notification"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Notification.html#v:getNotificationNonBlocking",
      "description": {
        "fct-descr": "\u003cp\u003eNon-blocking variant of \u003ccode\u003e\u003ca\u003egetNotification\u003c/a\u003e\u003c/code\u003e.   Returns a single notification,\n if available.   If no notifications are available,  returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.Notification",
        "fct-package": "postgresql-simple",
        "fct-signature": "Connection -\u003e IO (Maybe Notification)",
        "fct-source": "src/Database-PostgreSQL-Simple-Notification.html#getNotificationNonBlocking",
        "fct-type": "function",
        "title": "getNotificationNonBlocking"
      },
      "index": {
        "description": "Non-blocking variant of getNotification Returns single notification if available If no notifications are available returns Nothing",
        "hierarchy": "Database PostgreSQL Simple Notification",
        "module": "Database.PostgreSQL.Simple.Notification",
        "name": "getNotificationNonBlocking",
        "normalized": "Connection-\u003eIO(Maybe Notification)",
        "package": "postgresql-simple",
        "partial": "Notification Non Blocking",
        "signature": "Connection-\u003eIO(Maybe Notification)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Notification.html#v:notificationChannel",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.Simple.Notification",
        "fct-package": "postgresql-simple",
        "fct-signature": "!ByteString",
        "fct-source": "src/Database-PostgreSQL-Simple-Notification.html#Notification",
        "fct-type": "function",
        "title": "notificationChannel"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Notification",
        "module": "Database.PostgreSQL.Simple.Notification",
        "name": "notificationChannel",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Channel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Notification.html#v:notificationData",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.Simple.Notification",
        "fct-package": "postgresql-simple",
        "fct-signature": "!ByteString",
        "fct-source": "src/Database-PostgreSQL-Simple-Notification.html#Notification",
        "fct-type": "function",
        "title": "notificationData"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Notification",
        "module": "Database.PostgreSQL.Simple.Notification",
        "name": "notificationData",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Notification.html#v:notificationPid",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.Simple.Notification",
        "fct-package": "postgresql-simple",
        "fct-signature": "!CPid",
        "fct-source": "src/Database-PostgreSQL-Simple-Notification.html#Notification",
        "fct-type": "function",
        "title": "notificationPid"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Notification",
        "module": "Database.PostgreSQL.Simple.Notification",
        "name": "notificationPid",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Pid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Ok.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eOk\u003c/a\u003e\u003c/code\u003e type is a simple error handler,  basically equivalent to\n \u003ccode\u003eEither [SomeException]\u003c/code\u003e.   This type (without the list) was used to\n handle conversion errors in early versions of postgresql-simple.\n\u003c/p\u003e\u003cp\u003eOne of the primary reasons why this type  was introduced is that\n \u003ccode\u003eEither SomeException\u003c/code\u003e had not been provided an instance for \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e,\n and it would have been a bad idea to provide an orphaned instance for a\n commonly-used type and typeclass included in \u003ccode\u003ebase\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExtending the failure case to a list of \u003ccode\u003e\u003ca\u003eSomeException\u003c/a\u003e\u003c/code\u003es enables a\n more sensible \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e instance definitions:   \u003ccode\u003e\u003ca\u003e\u003c|\u003e\u003c/a\u003e\u003c/code\u003e concatinates\n the list of exceptions when both cases fail,  and \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e is defined as\n 'Errors []'.   Though \u003ccode\u003e\u003ca\u003e\u003c|\u003e\u003c/a\u003e\u003c/code\u003e one could pick one of two exceptions, and\n throw away the other,  and have \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e provide a generic exception,\n this avoids cases where \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e overrides a more informative exception\n and allows you to see all the different ways your computation has failed.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.PostgreSQL.Simple.Ok",
        "fct-package": "postgresql-simple",
        "fct-signature": "module",
        "fct-source": "src/Database-PostgreSQL-Simple-Ok.html",
        "fct-type": "module",
        "title": "Ok"
      },
      "index": {
        "description": "The Ok type is simple error handler basically equivalent to Either SomeException This type without the list was used to handle conversion errors in early versions of postgresql-simple One of the primary reasons why this type was introduced is that Either SomeException had not been provided an instance for Alternative and it would have been bad idea to provide an orphaned instance for commonly-used type and typeclass included in base Extending the failure case to list of SomeException enables more sensible Alternative instance definitions concatinates the list of exceptions when both cases fail and empty is defined as Errors Though one could pick one of two exceptions and throw away the other and have empty provide generic exception this avoids cases where empty overrides more informative exception and allows you to see all the different ways your computation has failed",
        "hierarchy": "Database PostgreSQL Simple Ok",
        "module": "Database.PostgreSQL.Simple.Ok",
        "name": "Ok",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Ok",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Ok.html#t:ManyErrors",
      "description": {
        "fct-descr": "\u003cp\u003ea way to reify a list of exceptions into a single exception\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.Ok",
        "fct-package": "postgresql-simple",
        "fct-signature": "newtype",
        "fct-source": "src/Database-PostgreSQL-Simple-Ok.html#ManyErrors",
        "fct-type": "newtype",
        "title": "ManyErrors"
      },
      "index": {
        "description": "way to reify list of exceptions into single exception",
        "hierarchy": "Database PostgreSQL Simple Ok",
        "module": "Database.PostgreSQL.Simple.Ok",
        "name": "ManyErrors",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Many Errors",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Ok.html#t:Ok",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Ok",
        "fct-package": "postgresql-simple",
        "fct-signature": "data",
        "fct-source": "src/Database-PostgreSQL-Simple-Ok.html#Ok",
        "fct-type": "data",
        "title": "Ok"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Ok",
        "module": "Database.PostgreSQL.Simple.Ok",
        "name": "Ok",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Ok",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Ok.html#v:Errors",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Ok",
        "fct-package": "postgresql-simple",
        "fct-signature": "Errors [SomeException]",
        "fct-source": "src/Database-PostgreSQL-Simple-Ok.html#Ok",
        "fct-type": "function",
        "title": "Errors"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Ok",
        "module": "Database.PostgreSQL.Simple.Ok",
        "name": "Errors",
        "normalized": "Errors[SomeException]",
        "package": "postgresql-simple",
        "partial": "Errors",
        "signature": "Errors[SomeException]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Ok.html#v:ManyErrors",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Ok",
        "fct-package": "postgresql-simple",
        "fct-signature": "ManyErrors [SomeException]",
        "fct-source": "src/Database-PostgreSQL-Simple-Ok.html#ManyErrors",
        "fct-type": "function",
        "title": "ManyErrors"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Ok",
        "module": "Database.PostgreSQL.Simple.Ok",
        "name": "ManyErrors",
        "normalized": "ManyErrors[SomeException]",
        "package": "postgresql-simple",
        "partial": "Many Errors",
        "signature": "ManyErrors[SomeException]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Ok.html#v:Ok",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Ok",
        "fct-package": "postgresql-simple",
        "fct-signature": "Ok !a",
        "fct-source": "src/Database-PostgreSQL-Simple-Ok.html#Ok",
        "fct-type": "function",
        "title": "Ok"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Ok",
        "module": "Database.PostgreSQL.Simple.Ok",
        "name": "Ok",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Ok",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-SqlQQ.html#",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.SqlQQ",
        "fct-package": "postgresql-simple",
        "fct-signature": "module",
        "fct-source": "src/Database-PostgreSQL-Simple-SqlQQ.html",
        "fct-type": "module",
        "title": "SqlQQ"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple SqlQQ",
        "module": "Database.PostgreSQL.Simple.SqlQQ",
        "name": "SqlQQ",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Sql QQ",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-SqlQQ.html#v:sql",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esql\u003c/a\u003e\u003c/code\u003e is a quasiquoter that eases the syntactic burden\n of writing big sql statements in Haskell source code.  For example:\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE QuasiQuotes #-}\n\n query conn [sql| SELECT column_a, column_b\n                    FROM table1 NATURAL JOIN table2\n                   WHERE ? \u003c= time AND time \u003c ?\n                     AND name LIKE ?\n                   ORDER BY size DESC\n                   LIMIT 100                        |]\n            (beginTime,endTime,string)\n\u003c/pre\u003e\u003cp\u003eThis quasiquoter attempts to mimimize whitespace;  otherwise the\n above query would consist of approximately half whitespace when sent\n to the database backend.  It also recognizes and strips out standard\n sql comments \u003ca\u003e--\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThe implementation of the whitespace reducer is currently incomplete.\n Thus it can mess up your syntax in cases where whitespace should be\n preserved as-is.  It does preserve whitespace inside standard SQL string\n literals.  But it can get confused by the non-standard PostgreSQL string\n literal syntax (which is the default setting in PostgreSQL 8 and below),\n the extended escape string syntax,  quoted identifiers,  and other similar\n constructs.\n\u003c/p\u003e\u003cp\u003eOf course, this caveat only applies to text written inside the SQL\n quasiquoter; whitespace reduction is a compile-time computation and\n thus will not touch the \u003ccode\u003estring\u003c/code\u003e parameter above,  which is a run-time\n value.\n\u003c/p\u003e\u003cp\u003eAlso note that this will not work if the substring \u003ccode\u003e|]\u003c/code\u003e is contained\n in the query.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.SqlQQ",
        "fct-package": "postgresql-simple",
        "fct-signature": "QuasiQuoter",
        "fct-source": "src/Database-PostgreSQL-Simple-SqlQQ.html#sql",
        "fct-type": "function",
        "title": "sql"
      },
      "index": {
        "description": "sql is quasiquoter that eases the syntactic burden of writing big sql statements in Haskell source code For example LANGUAGE QuasiQuotes query conn sql SELECT column column FROM table1 NATURAL JOIN table2 WHERE time AND time AND name LIKE ORDER BY size DESC LIMIT beginTime endTime string This quasiquoter attempts to mimimize whitespace otherwise the above query would consist of approximately half whitespace when sent to the database backend It also recognizes and strips out standard sql comments The implementation of the whitespace reducer is currently incomplete Thus it can mess up your syntax in cases where whitespace should be preserved as-is It does preserve whitespace inside standard SQL string literals But it can get confused by the non-standard PostgreSQL string literal syntax which is the default setting in PostgreSQL and below the extended escape string syntax quoted identifiers and other similar constructs Of course this caveat only applies to text written inside the SQL quasiquoter whitespace reduction is compile-time computation and thus will not touch the string parameter above which is run-time value Also note that this will not work if the substring is contained in the query",
        "hierarchy": "Database PostgreSQL Simple SqlQQ",
        "module": "Database.PostgreSQL.Simple.SqlQQ",
        "name": "sql",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Time-Internal.html#",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Time.Internal",
        "fct-package": "postgresql-simple",
        "fct-signature": "module",
        "fct-source": "src/Database-PostgreSQL-Simple-Time-Internal.html",
        "fct-type": "module",
        "title": "Internal"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Time Internal",
        "module": "Database.PostgreSQL.Simple.Time.Internal",
        "name": "Internal",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Internal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Time-Internal.html#v:getDate",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Time.Internal",
        "fct-package": "postgresql-simple",
        "fct-signature": "Parser Date",
        "fct-source": "src/Database-PostgreSQL-Simple-Time-Implementation.html#getDate",
        "fct-type": "function",
        "title": "getDate"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Time Internal",
        "module": "Database.PostgreSQL.Simple.Time.Internal",
        "name": "getDate",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Date",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Time-Internal.html#v:getDay",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Time.Internal",
        "fct-package": "postgresql-simple",
        "fct-signature": "Parser Day",
        "fct-source": "src/Database-PostgreSQL-Simple-Time-Implementation.html#getDay",
        "fct-type": "function",
        "title": "getDay"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Time Internal",
        "module": "Database.PostgreSQL.Simple.Time.Internal",
        "name": "getDay",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Day",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Time-Internal.html#v:getLocalTime",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Time.Internal",
        "fct-package": "postgresql-simple",
        "fct-signature": "Parser LocalTime",
        "fct-source": "src/Database-PostgreSQL-Simple-Time-Implementation.html#getLocalTime",
        "fct-type": "function",
        "title": "getLocalTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Time Internal",
        "module": "Database.PostgreSQL.Simple.Time.Internal",
        "name": "getLocalTime",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Local Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Time-Internal.html#v:getLocalTimestamp",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Time.Internal",
        "fct-package": "postgresql-simple",
        "fct-signature": "Parser LocalTimestamp",
        "fct-source": "src/Database-PostgreSQL-Simple-Time-Implementation.html#getLocalTimestamp",
        "fct-type": "function",
        "title": "getLocalTimestamp"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Time Internal",
        "module": "Database.PostgreSQL.Simple.Time.Internal",
        "name": "getLocalTimestamp",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Local Timestamp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Time-Internal.html#v:getTimeOfDay",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Time.Internal",
        "fct-package": "postgresql-simple",
        "fct-signature": "Parser TimeOfDay",
        "fct-source": "src/Database-PostgreSQL-Simple-Time-Implementation.html#getTimeOfDay",
        "fct-type": "function",
        "title": "getTimeOfDay"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Time Internal",
        "module": "Database.PostgreSQL.Simple.Time.Internal",
        "name": "getTimeOfDay",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Time Of Day",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Time-Internal.html#v:getTimeZone",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Time.Internal",
        "fct-package": "postgresql-simple",
        "fct-signature": "Parser TimeZone",
        "fct-source": "src/Database-PostgreSQL-Simple-Time-Implementation.html#getTimeZone",
        "fct-type": "function",
        "title": "getTimeZone"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Time Internal",
        "module": "Database.PostgreSQL.Simple.Time.Internal",
        "name": "getTimeZone",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Time Zone",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Time-Internal.html#v:getUTCTime",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Time.Internal",
        "fct-package": "postgresql-simple",
        "fct-signature": "Parser UTCTime",
        "fct-source": "src/Database-PostgreSQL-Simple-Time-Implementation.html#getUTCTime",
        "fct-type": "function",
        "title": "getUTCTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Time Internal",
        "module": "Database.PostgreSQL.Simple.Time.Internal",
        "name": "getUTCTime",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "UTCTime",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Time-Internal.html#v:getUTCTimestamp",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Time.Internal",
        "fct-package": "postgresql-simple",
        "fct-signature": "Parser UTCTimestamp",
        "fct-source": "src/Database-PostgreSQL-Simple-Time-Implementation.html#getUTCTimestamp",
        "fct-type": "function",
        "title": "getUTCTimestamp"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Time Internal",
        "module": "Database.PostgreSQL.Simple.Time.Internal",
        "name": "getUTCTimestamp",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "UTCTimestamp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Time-Internal.html#v:getZonedTime",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Time.Internal",
        "fct-package": "postgresql-simple",
        "fct-signature": "Parser ZonedTime",
        "fct-source": "src/Database-PostgreSQL-Simple-Time-Implementation.html#getZonedTime",
        "fct-type": "function",
        "title": "getZonedTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Time Internal",
        "module": "Database.PostgreSQL.Simple.Time.Internal",
        "name": "getZonedTime",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Zoned Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Time-Internal.html#v:getZonedTimestamp",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Time.Internal",
        "fct-package": "postgresql-simple",
        "fct-signature": "Parser ZonedTimestamp",
        "fct-source": "src/Database-PostgreSQL-Simple-Time-Implementation.html#getZonedTimestamp",
        "fct-type": "function",
        "title": "getZonedTimestamp"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Time Internal",
        "module": "Database.PostgreSQL.Simple.Time.Internal",
        "name": "getZonedTimestamp",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Zoned Timestamp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Time.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTime types that supports positive and negative infinity.   Also includes\n new time parsers and printers with better performance than GHC's time\n package.\n\u003c/p\u003e\u003cp\u003eThe parsers only understand the specific variant of ISO 8601 that\n PostgreSQL emits,  and the printers attempt to duplicate this syntax.\n Thus the \u003ccode\u003edatestyle\u003c/code\u003e parameter for the connection must be set to \u003ccode\u003eISO\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThese parsers and printers likely have problems and shortcomings.  Some\n that I know of:\n\u003c/p\u003e\u003cp\u003e1  \u003ccode\u003eTimestampTZ\u003c/code\u003es before a timezone-dependent point in time cannot be\n    parsed,  because the parsers can only handle timezone offsets of a\n    integer number of minutes.  However, PostgreSQL will include seconds\n    in the offset, depending on the historical time standards for the city\n    identifying the time zone.\n\u003c/p\u003e\u003cp\u003eThis boundary point often marks an event of some interest.  In the US\n    for example,  \u003ccode\u003etimestamptz\u003c/code\u003es before \u003ccode\u003e1883-Nov-18 12:00:00\u003c/code\u003e local time\n    cannot be parsed.  This is the moment Standard Railway Time went live.\n    Concretely, PostgreSQL will emit \u003ccode\u003e1883-11-18 12:03:57-04:56:02\u003c/code\u003e\n    instead of \u003ccode\u003e1883-11-18 11:59:59-05\u003c/code\u003e when the \u003ccode\u003etimezone\u003c/code\u003e parameter\n    for the connection is set to \u003ccode\u003eAmerica/New_York\u003c/code\u003e.\n\u003c/p\u003e\u003col\u003e\u003cli\u003e Dates and times surrounding \u003ccode\u003e1582-Feb-24\u003c/code\u003e,  the date the Gregorian\n    Calendar was introduced,  should be investigated for conversion errors.\n\u003c/li\u003e\u003cli\u003e Points in time Before Christ are not also not supported.  For example,\n    PostgreSQL will emit \u003ccode\u003e0045-01-01 BC\u003c/code\u003e for a value of a \u003ccode\u003edate\u003c/code\u003e type.\n    This is the year that the Julian Calendar was adopted.\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eHowever, it should be noted that the old parsers also had issues 1 and 3.\n Also, the new parsers now correctly handle time zones that include minutes\n in their offset.  Most notably, this includes all of India and parts of\n Canada and Australia.\n\u003c/p\u003e\u003cp\u003ePostgreSQL uses the zoneinfo database for its time zone information.\n You can read more about PostgreSQL's date and time types at\n \u003ca\u003ehttp://www.postgresql.org/docs/9.1/static/datatype-datetime.html\u003c/a\u003e,\n and zoneinfo at \u003ca\u003ehttp://en.wikipedia.org/wiki/Tz_database\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.PostgreSQL.Simple.Time",
        "fct-package": "postgresql-simple",
        "fct-signature": "module",
        "fct-source": "src/Database-PostgreSQL-Simple-Time.html",
        "fct-type": "module",
        "title": "Time"
      },
      "index": {
        "description": "Time types that supports positive and negative infinity Also includes new time parsers and printers with better performance than GHC time package The parsers only understand the specific variant of ISO that PostgreSQL emits and the printers attempt to duplicate this syntax Thus the datestyle parameter for the connection must be set to ISO These parsers and printers likely have problems and shortcomings Some that know of TimestampTZ before timezone-dependent point in time cannot be parsed because the parsers can only handle timezone offsets of integer number of minutes However PostgreSQL will include seconds in the offset depending on the historical time standards for the city identifying the time zone This boundary point often marks an event of some interest In the US for example timestamptz before Nov-18 local time cannot be parsed This is the moment Standard Railway Time went live Concretely PostgreSQL will emit instead of when the timezone parameter for the connection is set to America New York Dates and times surrounding Feb-24 the date the Gregorian Calendar was introduced should be investigated for conversion errors Points in time Before Christ are not also not supported For example PostgreSQL will emit BC for value of date type This is the year that the Julian Calendar was adopted However it should be noted that the old parsers also had issues and Also the new parsers now correctly handle time zones that include minutes in their offset Most notably this includes all of India and parts of Canada and Australia PostgreSQL uses the zoneinfo database for its time zone information You can read more about PostgreSQL date and time types at http www.postgresql.org docs static datatype-datetime.html and zoneinfo at http en.wikipedia.org wiki Tz database",
        "hierarchy": "Database PostgreSQL Simple Time",
        "module": "Database.PostgreSQL.Simple.Time",
        "name": "Time",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Time.html#t:Date",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Time",
        "fct-package": "postgresql-simple",
        "fct-signature": "type",
        "fct-source": "src/Database-PostgreSQL-Simple-Time-Implementation.html#Date",
        "fct-type": "type",
        "title": "Date"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Time",
        "module": "Database.PostgreSQL.Simple.Time",
        "name": "Date",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Date",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Time.html#t:LocalTimestamp",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Time",
        "fct-package": "postgresql-simple",
        "fct-signature": "type",
        "fct-source": "src/Database-PostgreSQL-Simple-Time-Implementation.html#LocalTimestamp",
        "fct-type": "type",
        "title": "LocalTimestamp"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Time",
        "module": "Database.PostgreSQL.Simple.Time",
        "name": "LocalTimestamp",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Local Timestamp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Time.html#t:UTCTimestamp",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Time",
        "fct-package": "postgresql-simple",
        "fct-signature": "type",
        "fct-source": "src/Database-PostgreSQL-Simple-Time-Implementation.html#UTCTimestamp",
        "fct-type": "type",
        "title": "UTCTimestamp"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Time",
        "module": "Database.PostgreSQL.Simple.Time",
        "name": "UTCTimestamp",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "UTCTimestamp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Time.html#t:Unbounded",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Time",
        "fct-package": "postgresql-simple",
        "fct-signature": "data",
        "fct-source": "src/Database-PostgreSQL-Simple-Time-Implementation.html#Unbounded",
        "fct-type": "data",
        "title": "Unbounded"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Time",
        "module": "Database.PostgreSQL.Simple.Time",
        "name": "Unbounded",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Unbounded",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Time.html#t:ZonedTimestamp",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Time",
        "fct-package": "postgresql-simple",
        "fct-signature": "type",
        "fct-source": "src/Database-PostgreSQL-Simple-Time-Implementation.html#ZonedTimestamp",
        "fct-type": "type",
        "title": "ZonedTimestamp"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Time",
        "module": "Database.PostgreSQL.Simple.Time",
        "name": "ZonedTimestamp",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Zoned Timestamp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Time.html#v:Finite",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Time",
        "fct-package": "postgresql-simple",
        "fct-signature": "Finite !a",
        "fct-source": "src/Database-PostgreSQL-Simple-Time-Implementation.html#Unbounded",
        "fct-type": "function",
        "title": "Finite"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Time",
        "module": "Database.PostgreSQL.Simple.Time",
        "name": "Finite",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Finite",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Time.html#v:NegInfinity",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Time",
        "fct-package": "postgresql-simple",
        "fct-signature": "NegInfinity",
        "fct-source": "src/Database-PostgreSQL-Simple-Time-Implementation.html#Unbounded",
        "fct-type": "function",
        "title": "NegInfinity"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Time",
        "module": "Database.PostgreSQL.Simple.Time",
        "name": "NegInfinity",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Neg Infinity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Time.html#v:PosInfinity",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Time",
        "fct-package": "postgresql-simple",
        "fct-signature": "PosInfinity",
        "fct-source": "src/Database-PostgreSQL-Simple-Time-Implementation.html#Unbounded",
        "fct-type": "function",
        "title": "PosInfinity"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Time",
        "module": "Database.PostgreSQL.Simple.Time",
        "name": "PosInfinity",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Pos Infinity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Time.html#v:dateToBuilder",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Time",
        "fct-package": "postgresql-simple",
        "fct-signature": "Date -\u003e Builder",
        "fct-source": "src/Database-PostgreSQL-Simple-Time-Implementation.html#dateToBuilder",
        "fct-type": "function",
        "title": "dateToBuilder"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Time",
        "module": "Database.PostgreSQL.Simple.Time",
        "name": "dateToBuilder",
        "normalized": "Date-\u003eBuilder",
        "package": "postgresql-simple",
        "partial": "To Builder",
        "signature": "Date-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Time.html#v:dayToBuilder",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Time",
        "fct-package": "postgresql-simple",
        "fct-signature": "Day -\u003e Builder",
        "fct-source": "src/Database-PostgreSQL-Simple-Time-Implementation.html#dayToBuilder",
        "fct-type": "function",
        "title": "dayToBuilder"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Time",
        "module": "Database.PostgreSQL.Simple.Time",
        "name": "dayToBuilder",
        "normalized": "Day-\u003eBuilder",
        "package": "postgresql-simple",
        "partial": "To Builder",
        "signature": "Day-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Time.html#v:localTimeToBuilder",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Time",
        "fct-package": "postgresql-simple",
        "fct-signature": "LocalTime -\u003e Builder",
        "fct-source": "src/Database-PostgreSQL-Simple-Time-Implementation.html#localTimeToBuilder",
        "fct-type": "function",
        "title": "localTimeToBuilder"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Time",
        "module": "Database.PostgreSQL.Simple.Time",
        "name": "localTimeToBuilder",
        "normalized": "LocalTime-\u003eBuilder",
        "package": "postgresql-simple",
        "partial": "Time To Builder",
        "signature": "LocalTime-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Time.html#v:localTimestampToBuilder",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Time",
        "fct-package": "postgresql-simple",
        "fct-signature": "LocalTimestamp -\u003e Builder",
        "fct-source": "src/Database-PostgreSQL-Simple-Time-Implementation.html#localTimestampToBuilder",
        "fct-type": "function",
        "title": "localTimestampToBuilder"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Time",
        "module": "Database.PostgreSQL.Simple.Time",
        "name": "localTimestampToBuilder",
        "normalized": "LocalTimestamp-\u003eBuilder",
        "package": "postgresql-simple",
        "partial": "Timestamp To Builder",
        "signature": "LocalTimestamp-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Time.html#v:parseDate",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Time",
        "fct-package": "postgresql-simple",
        "fct-signature": "ByteString -\u003e Either String Date",
        "fct-source": "src/Database-PostgreSQL-Simple-Time-Implementation.html#parseDate",
        "fct-type": "function",
        "title": "parseDate"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Time",
        "module": "Database.PostgreSQL.Simple.Time",
        "name": "parseDate",
        "normalized": "ByteString-\u003eEither String Date",
        "package": "postgresql-simple",
        "partial": "Date",
        "signature": "ByteString-\u003eEither String Date"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Time.html#v:parseDay",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Time",
        "fct-package": "postgresql-simple",
        "fct-signature": "ByteString -\u003e Either String Day",
        "fct-source": "src/Database-PostgreSQL-Simple-Time-Implementation.html#parseDay",
        "fct-type": "function",
        "title": "parseDay"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Time",
        "module": "Database.PostgreSQL.Simple.Time",
        "name": "parseDay",
        "normalized": "ByteString-\u003eEither String Day",
        "package": "postgresql-simple",
        "partial": "Day",
        "signature": "ByteString-\u003eEither String Day"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Time.html#v:parseLocalTime",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Time",
        "fct-package": "postgresql-simple",
        "fct-signature": "ByteString -\u003e Either String LocalTime",
        "fct-source": "src/Database-PostgreSQL-Simple-Time-Implementation.html#parseLocalTime",
        "fct-type": "function",
        "title": "parseLocalTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Time",
        "module": "Database.PostgreSQL.Simple.Time",
        "name": "parseLocalTime",
        "normalized": "ByteString-\u003eEither String LocalTime",
        "package": "postgresql-simple",
        "partial": "Local Time",
        "signature": "ByteString-\u003eEither String LocalTime"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Time.html#v:parseLocalTimestamp",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Time",
        "fct-package": "postgresql-simple",
        "fct-signature": "ByteString -\u003e Either String LocalTimestamp",
        "fct-source": "src/Database-PostgreSQL-Simple-Time-Implementation.html#parseLocalTimestamp",
        "fct-type": "function",
        "title": "parseLocalTimestamp"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Time",
        "module": "Database.PostgreSQL.Simple.Time",
        "name": "parseLocalTimestamp",
        "normalized": "ByteString-\u003eEither String LocalTimestamp",
        "package": "postgresql-simple",
        "partial": "Local Timestamp",
        "signature": "ByteString-\u003eEither String LocalTimestamp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Time.html#v:parseTimeOfDay",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Time",
        "fct-package": "postgresql-simple",
        "fct-signature": "ByteString -\u003e Either String TimeOfDay",
        "fct-source": "src/Database-PostgreSQL-Simple-Time-Implementation.html#parseTimeOfDay",
        "fct-type": "function",
        "title": "parseTimeOfDay"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Time",
        "module": "Database.PostgreSQL.Simple.Time",
        "name": "parseTimeOfDay",
        "normalized": "ByteString-\u003eEither String TimeOfDay",
        "package": "postgresql-simple",
        "partial": "Time Of Day",
        "signature": "ByteString-\u003eEither String TimeOfDay"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Time.html#v:parseUTCTime",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Time",
        "fct-package": "postgresql-simple",
        "fct-signature": "ByteString -\u003e Either String UTCTime",
        "fct-source": "src/Database-PostgreSQL-Simple-Time-Implementation.html#parseUTCTime",
        "fct-type": "function",
        "title": "parseUTCTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Time",
        "module": "Database.PostgreSQL.Simple.Time",
        "name": "parseUTCTime",
        "normalized": "ByteString-\u003eEither String UTCTime",
        "package": "postgresql-simple",
        "partial": "UTCTime",
        "signature": "ByteString-\u003eEither String UTCTime"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Time.html#v:parseUTCTimestamp",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Time",
        "fct-package": "postgresql-simple",
        "fct-signature": "ByteString -\u003e Either String UTCTimestamp",
        "fct-source": "src/Database-PostgreSQL-Simple-Time-Implementation.html#parseUTCTimestamp",
        "fct-type": "function",
        "title": "parseUTCTimestamp"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Time",
        "module": "Database.PostgreSQL.Simple.Time",
        "name": "parseUTCTimestamp",
        "normalized": "ByteString-\u003eEither String UTCTimestamp",
        "package": "postgresql-simple",
        "partial": "UTCTimestamp",
        "signature": "ByteString-\u003eEither String UTCTimestamp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Time.html#v:parseZonedTime",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Time",
        "fct-package": "postgresql-simple",
        "fct-signature": "ByteString -\u003e Either String ZonedTime",
        "fct-source": "src/Database-PostgreSQL-Simple-Time-Implementation.html#parseZonedTime",
        "fct-type": "function",
        "title": "parseZonedTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Time",
        "module": "Database.PostgreSQL.Simple.Time",
        "name": "parseZonedTime",
        "normalized": "ByteString-\u003eEither String ZonedTime",
        "package": "postgresql-simple",
        "partial": "Zoned Time",
        "signature": "ByteString-\u003eEither String ZonedTime"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Time.html#v:parseZonedTimestamp",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Time",
        "fct-package": "postgresql-simple",
        "fct-signature": "ByteString -\u003e Either String ZonedTimestamp",
        "fct-source": "src/Database-PostgreSQL-Simple-Time-Implementation.html#parseZonedTimestamp",
        "fct-type": "function",
        "title": "parseZonedTimestamp"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Time",
        "module": "Database.PostgreSQL.Simple.Time",
        "name": "parseZonedTimestamp",
        "normalized": "ByteString-\u003eEither String ZonedTimestamp",
        "package": "postgresql-simple",
        "partial": "Zoned Timestamp",
        "signature": "ByteString-\u003eEither String ZonedTimestamp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Time.html#v:timeOfDayToBuilder",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Time",
        "fct-package": "postgresql-simple",
        "fct-signature": "TimeOfDay -\u003e Builder",
        "fct-source": "src/Database-PostgreSQL-Simple-Time-Implementation.html#timeOfDayToBuilder",
        "fct-type": "function",
        "title": "timeOfDayToBuilder"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Time",
        "module": "Database.PostgreSQL.Simple.Time",
        "name": "timeOfDayToBuilder",
        "normalized": "TimeOfDay-\u003eBuilder",
        "package": "postgresql-simple",
        "partial": "Of Day To Builder",
        "signature": "TimeOfDay-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Time.html#v:timeZoneToBuilder",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Time",
        "fct-package": "postgresql-simple",
        "fct-signature": "TimeZone -\u003e Builder",
        "fct-source": "src/Database-PostgreSQL-Simple-Time-Implementation.html#timeZoneToBuilder",
        "fct-type": "function",
        "title": "timeZoneToBuilder"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Time",
        "module": "Database.PostgreSQL.Simple.Time",
        "name": "timeZoneToBuilder",
        "normalized": "TimeZone-\u003eBuilder",
        "package": "postgresql-simple",
        "partial": "Zone To Builder",
        "signature": "TimeZone-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Time.html#v:unboundedToBuilder",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Time",
        "fct-package": "postgresql-simple",
        "fct-signature": "(a -\u003e Builder) -\u003e Unbounded a -\u003e Builder",
        "fct-source": "src/Database-PostgreSQL-Simple-Time-Implementation.html#unboundedToBuilder",
        "fct-type": "function",
        "title": "unboundedToBuilder"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Time",
        "module": "Database.PostgreSQL.Simple.Time",
        "name": "unboundedToBuilder",
        "normalized": "(a-\u003eBuilder)-\u003eUnbounded a-\u003eBuilder",
        "package": "postgresql-simple",
        "partial": "To Builder",
        "signature": "(a-\u003eBuilder)-\u003eUnbounded a-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Time.html#v:utcTimeToBuilder",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Time",
        "fct-package": "postgresql-simple",
        "fct-signature": "UTCTime -\u003e Builder",
        "fct-source": "src/Database-PostgreSQL-Simple-Time-Implementation.html#utcTimeToBuilder",
        "fct-type": "function",
        "title": "utcTimeToBuilder"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Time",
        "module": "Database.PostgreSQL.Simple.Time",
        "name": "utcTimeToBuilder",
        "normalized": "UTCTime-\u003eBuilder",
        "package": "postgresql-simple",
        "partial": "Time To Builder",
        "signature": "UTCTime-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Time.html#v:utcTimestampToBuilder",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Time",
        "fct-package": "postgresql-simple",
        "fct-signature": "UTCTimestamp -\u003e Builder",
        "fct-source": "src/Database-PostgreSQL-Simple-Time-Implementation.html#utcTimestampToBuilder",
        "fct-type": "function",
        "title": "utcTimestampToBuilder"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Time",
        "module": "Database.PostgreSQL.Simple.Time",
        "name": "utcTimestampToBuilder",
        "normalized": "UTCTimestamp-\u003eBuilder",
        "package": "postgresql-simple",
        "partial": "Timestamp To Builder",
        "signature": "UTCTimestamp-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Time.html#v:zonedTimeToBuilder",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Time",
        "fct-package": "postgresql-simple",
        "fct-signature": "ZonedTime -\u003e Builder",
        "fct-source": "src/Database-PostgreSQL-Simple-Time-Implementation.html#zonedTimeToBuilder",
        "fct-type": "function",
        "title": "zonedTimeToBuilder"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Time",
        "module": "Database.PostgreSQL.Simple.Time",
        "name": "zonedTimeToBuilder",
        "normalized": "ZonedTime-\u003eBuilder",
        "package": "postgresql-simple",
        "partial": "Time To Builder",
        "signature": "ZonedTime-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Time.html#v:zonedTimestampToBuilder",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Time",
        "fct-package": "postgresql-simple",
        "fct-signature": "ZonedTimestamp -\u003e Builder",
        "fct-source": "src/Database-PostgreSQL-Simple-Time-Implementation.html#zonedTimestampToBuilder",
        "fct-type": "function",
        "title": "zonedTimestampToBuilder"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Time",
        "module": "Database.PostgreSQL.Simple.Time",
        "name": "zonedTimestampToBuilder",
        "normalized": "ZonedTimestamp-\u003eBuilder",
        "package": "postgresql-simple",
        "partial": "Timestamp To Builder",
        "signature": "ZonedTimestamp-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-ToField.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eToField\u003c/a\u003e\u003c/code\u003e typeclass, for rendering a parameter to a SQL query.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.PostgreSQL.Simple.ToField",
        "fct-package": "postgresql-simple",
        "fct-signature": "module",
        "fct-source": "src/Database-PostgreSQL-Simple-ToField.html",
        "fct-type": "module",
        "title": "ToField"
      },
      "index": {
        "description": "The ToField typeclass for rendering parameter to SQL query",
        "hierarchy": "Database PostgreSQL Simple ToField",
        "module": "Database.PostgreSQL.Simple.ToField",
        "name": "ToField",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "To Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-ToField.html#t:Action",
      "description": {
        "fct-descr": "\u003cp\u003eHow to render an element when substituting it into a query.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.ToField",
        "fct-package": "postgresql-simple",
        "fct-signature": "data",
        "fct-source": "src/Database-PostgreSQL-Simple-ToField.html#Action",
        "fct-type": "data",
        "title": "Action"
      },
      "index": {
        "description": "How to render an element when substituting it into query",
        "hierarchy": "Database PostgreSQL Simple ToField",
        "module": "Database.PostgreSQL.Simple.ToField",
        "name": "Action",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Action",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-ToField.html#t:ToField",
      "description": {
        "fct-descr": "\u003cp\u003eA type that may be used as a single parameter to a SQL query.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.ToField",
        "fct-package": "postgresql-simple",
        "fct-signature": "class",
        "fct-source": "src/Database-PostgreSQL-Simple-ToField.html#ToField",
        "fct-type": "class",
        "title": "ToField"
      },
      "index": {
        "description": "type that may be used as single parameter to SQL query",
        "hierarchy": "Database PostgreSQL Simple ToField",
        "module": "Database.PostgreSQL.Simple.ToField",
        "name": "ToField",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "To Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-ToField.html#v:Escape",
      "description": {
        "fct-descr": "\u003cp\u003eEscape and enclose in quotes before substituting. Use for all\n text-like types, and anything else that may contain unsafe\n characters when rendered.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.ToField",
        "fct-package": "postgresql-simple",
        "fct-signature": "Escape ByteString",
        "fct-source": "src/Database-PostgreSQL-Simple-ToField.html#Action",
        "fct-type": "function",
        "title": "Escape"
      },
      "index": {
        "description": "Escape and enclose in quotes before substituting Use for all text-like types and anything else that may contain unsafe characters when rendered",
        "hierarchy": "Database PostgreSQL Simple ToField",
        "module": "Database.PostgreSQL.Simple.ToField",
        "name": "Escape",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Escape",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-ToField.html#v:EscapeByteA",
      "description": {
        "fct-descr": "\u003cp\u003eEscape binary data for use as a \u003ccode\u003ebytea\u003c/code\u003e literal.  Include surrounding\n quotes.  This is used by the \u003ccode\u003e\u003ca\u003eBinary\u003c/a\u003e\u003c/code\u003e newtype wrapper.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.ToField",
        "fct-package": "postgresql-simple",
        "fct-signature": "EscapeByteA ByteString",
        "fct-source": "src/Database-PostgreSQL-Simple-ToField.html#Action",
        "fct-type": "function",
        "title": "EscapeByteA"
      },
      "index": {
        "description": "Escape binary data for use as bytea literal Include surrounding quotes This is used by the Binary newtype wrapper",
        "hierarchy": "Database PostgreSQL Simple ToField",
        "module": "Database.PostgreSQL.Simple.ToField",
        "name": "EscapeByteA",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Escape Byte",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-ToField.html#v:Many",
      "description": {
        "fct-descr": "\u003cp\u003eConcatenate a series of rendering actions.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.ToField",
        "fct-package": "postgresql-simple",
        "fct-signature": "Many [Action]",
        "fct-source": "src/Database-PostgreSQL-Simple-ToField.html#Action",
        "fct-type": "function",
        "title": "Many"
      },
      "index": {
        "description": "Concatenate series of rendering actions",
        "hierarchy": "Database PostgreSQL Simple ToField",
        "module": "Database.PostgreSQL.Simple.ToField",
        "name": "Many",
        "normalized": "Many[Action]",
        "package": "postgresql-simple",
        "partial": "Many",
        "signature": "Many[Action]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-ToField.html#v:Plain",
      "description": {
        "fct-descr": "\u003cp\u003eRender without escaping or quoting. Use for non-text types\n such as numbers, when you are \u003cem\u003ecertain\u003c/em\u003e that they will not\n introduce formatting vulnerabilities via use of characters such\n as spaces or \"\u003ccode\u003e'\u003c/code\u003e\".\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.ToField",
        "fct-package": "postgresql-simple",
        "fct-signature": "Plain Builder",
        "fct-source": "src/Database-PostgreSQL-Simple-ToField.html#Action",
        "fct-type": "function",
        "title": "Plain"
      },
      "index": {
        "description": "Render without escaping or quoting Use for non-text types such as numbers when you are certain that they will not introduce formatting vulnerabilities via use of characters such as spaces or",
        "hierarchy": "Database PostgreSQL Simple ToField",
        "module": "Database.PostgreSQL.Simple.ToField",
        "name": "Plain",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Plain",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-ToField.html#v:inQuotes",
      "description": {
        "fct-descr": "\u003cp\u003eSurround a string with single-quote characters: \"\u003ccode\u003e'\u003c/code\u003e\"\n\u003c/p\u003e\u003cp\u003eThis function \u003cem\u003edoes not\u003c/em\u003e perform any other escaping.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.ToField",
        "fct-package": "postgresql-simple",
        "fct-signature": "Builder -\u003e Builder",
        "fct-source": "src/Database-PostgreSQL-Simple-ToField.html#inQuotes",
        "fct-type": "function",
        "title": "inQuotes"
      },
      "index": {
        "description": "Surround string with single-quote characters This function does not perform any other escaping",
        "hierarchy": "Database PostgreSQL Simple ToField",
        "module": "Database.PostgreSQL.Simple.ToField",
        "name": "inQuotes",
        "normalized": "Builder-\u003eBuilder",
        "package": "postgresql-simple",
        "partial": "Quotes",
        "signature": "Builder-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-ToField.html#v:toField",
      "description": {
        "fct-descr": "\u003cp\u003ePrepare a value for substitution into a query string.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.ToField",
        "fct-package": "postgresql-simple",
        "fct-signature": "a -\u003e Action",
        "fct-source": "src/Database-PostgreSQL-Simple-ToField.html#toField",
        "fct-type": "method",
        "title": "toField"
      },
      "index": {
        "description": "Prepare value for substitution into query string",
        "hierarchy": "Database PostgreSQL Simple ToField",
        "module": "Database.PostgreSQL.Simple.ToField",
        "name": "toField",
        "normalized": "a-\u003eAction",
        "package": "postgresql-simple",
        "partial": "Field",
        "signature": "a-\u003eAction"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-ToField.html#v:toJSONField",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a Haskell value to a JSON \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e using\n \u003ccode\u003e\u003ca\u003etoJSON\u003c/a\u003e\u003c/code\u003e and convert that to a field using \u003ccode\u003e\u003ca\u003etoField\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis can be used as the default implementation for the \u003ccode\u003e\u003ca\u003etoField\u003c/a\u003e\u003c/code\u003e\n method for Haskell types that have a JSON representation in\n PostgreSQL.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.ToField",
        "fct-package": "postgresql-simple",
        "fct-signature": "a -\u003e Action",
        "fct-source": "src/Database-PostgreSQL-Simple-ToField.html#toJSONField",
        "fct-type": "function",
        "title": "toJSONField"
      },
      "index": {
        "description": "Convert Haskell value to JSON Value using toJSON and convert that to field using toField This can be used as the default implementation for the toField method for Haskell types that have JSON representation in PostgreSQL",
        "hierarchy": "Database PostgreSQL Simple ToField",
        "module": "Database.PostgreSQL.Simple.ToField",
        "name": "toJSONField",
        "normalized": "a-\u003eAction",
        "package": "postgresql-simple",
        "partial": "JSONField",
        "signature": "a-\u003eAction"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-ToRow.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eToRow\u003c/a\u003e\u003c/code\u003e typeclass, for rendering a collection of\n parameters to a SQL query.\n\u003c/p\u003e\u003cp\u003ePredefined instances are provided for tuples containing up to ten\n elements.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.PostgreSQL.Simple.ToRow",
        "fct-package": "postgresql-simple",
        "fct-signature": "module",
        "fct-source": "src/Database-PostgreSQL-Simple-ToRow.html",
        "fct-type": "module",
        "title": "ToRow"
      },
      "index": {
        "description": "The ToRow typeclass for rendering collection of parameters to SQL query Predefined instances are provided for tuples containing up to ten elements",
        "hierarchy": "Database PostgreSQL Simple ToRow",
        "module": "Database.PostgreSQL.Simple.ToRow",
        "name": "ToRow",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "To Row",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-ToRow.html#t:ToRow",
      "description": {
        "fct-descr": "\u003cp\u003eA collection type that can be turned into a list of rendering\n \u003ccode\u003e\u003ca\u003eAction\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003cp\u003eInstances should use the \u003ccode\u003erender\u003c/code\u003e method of the \u003ccode\u003eParam\u003c/code\u003e class\n to perform conversion of each element of the collection.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.ToRow",
        "fct-package": "postgresql-simple",
        "fct-signature": "class",
        "fct-source": "src/Database-PostgreSQL-Simple-ToRow.html#ToRow",
        "fct-type": "class",
        "title": "ToRow"
      },
      "index": {
        "description": "collection type that can be turned into list of rendering Action Instances should use the render method of the Param class to perform conversion of each element of the collection",
        "hierarchy": "Database PostgreSQL Simple ToRow",
        "module": "Database.PostgreSQL.Simple.ToRow",
        "name": "ToRow",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "To Row",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-ToRow.html#v:toRow",
      "description": {
        "fct-descr": "\u003cp\u003eToField a collection of values.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.ToRow",
        "fct-package": "postgresql-simple",
        "fct-signature": "a -\u003e [Action]",
        "fct-source": "src/Database-PostgreSQL-Simple-ToRow.html#toRow",
        "fct-type": "method",
        "title": "toRow"
      },
      "index": {
        "description": "ToField collection of values",
        "hierarchy": "Database PostgreSQL Simple ToRow",
        "module": "Database.PostgreSQL.Simple.ToRow",
        "name": "toRow",
        "normalized": "a-\u003e[Action]",
        "package": "postgresql-simple",
        "partial": "Row",
        "signature": "a-\u003e[Action]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Transaction.html#",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Transaction",
        "fct-package": "postgresql-simple",
        "fct-signature": "module",
        "fct-source": "src/Database-PostgreSQL-Simple-Transaction.html",
        "fct-type": "module",
        "title": "Transaction"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Transaction",
        "module": "Database.PostgreSQL.Simple.Transaction",
        "name": "Transaction",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Transaction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Transaction.html#t:IsolationLevel",
      "description": {
        "fct-descr": "\u003cp\u003eOf the four isolation levels defined by the SQL standard,\n these are the three levels distinguished by PostgreSQL as of version 9.0.\n See \u003ca\u003ehttp://www.postgresql.org/docs/9.1/static/transaction-iso.html\u003c/a\u003e\n for more information.   Note that prior to PostgreSQL 9.0, \u003ccode\u003e\u003ca\u003eRepeatableRead\u003c/a\u003e\u003c/code\u003e\n was equivalent to \u003ccode\u003e\u003ca\u003eSerializable\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.Transaction",
        "fct-package": "postgresql-simple",
        "fct-signature": "data",
        "fct-source": "src/Database-PostgreSQL-Simple-Transaction.html#IsolationLevel",
        "fct-type": "data",
        "title": "IsolationLevel"
      },
      "index": {
        "description": "Of the four isolation levels defined by the SQL standard these are the three levels distinguished by PostgreSQL as of version See http www.postgresql.org docs static transaction-iso.html for more information Note that prior to PostgreSQL RepeatableRead was equivalent to Serializable",
        "hierarchy": "Database PostgreSQL Simple Transaction",
        "module": "Database.PostgreSQL.Simple.Transaction",
        "name": "IsolationLevel",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Isolation Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Transaction.html#t:ReadWriteMode",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Transaction",
        "fct-package": "postgresql-simple",
        "fct-signature": "data",
        "fct-source": "src/Database-PostgreSQL-Simple-Transaction.html#ReadWriteMode",
        "fct-type": "data",
        "title": "ReadWriteMode"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Transaction",
        "module": "Database.PostgreSQL.Simple.Transaction",
        "name": "ReadWriteMode",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Read Write Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Transaction.html#t:Savepoint",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Transaction",
        "fct-package": "postgresql-simple",
        "fct-signature": "data",
        "fct-source": "src/Database-PostgreSQL-Simple-Types.html#Savepoint",
        "fct-type": "data",
        "title": "Savepoint"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Transaction",
        "module": "Database.PostgreSQL.Simple.Transaction",
        "name": "Savepoint",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Savepoint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Transaction.html#t:TransactionMode",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Transaction",
        "fct-package": "postgresql-simple",
        "fct-signature": "data",
        "fct-source": "src/Database-PostgreSQL-Simple-Transaction.html#TransactionMode",
        "fct-type": "data",
        "title": "TransactionMode"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Transaction",
        "module": "Database.PostgreSQL.Simple.Transaction",
        "name": "TransactionMode",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Transaction Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Transaction.html#v:DefaultIsolationLevel",
      "description": {
        "fct-descr": "\u003cp\u003ethe isolation level will be taken from\n   PostgreSQL's per-connection\n   \u003ccode\u003edefault_transaction_isolation\u003c/code\u003e variable,\n   which is initialized according to the\n   server's config.  The default configuration\n   is \u003ccode\u003e\u003ca\u003eReadCommitted\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.Transaction",
        "fct-package": "postgresql-simple",
        "fct-signature": "DefaultIsolationLevel",
        "fct-source": "src/Database-PostgreSQL-Simple-Transaction.html#IsolationLevel",
        "fct-type": "function",
        "title": "DefaultIsolationLevel"
      },
      "index": {
        "description": "the isolation level will be taken from PostgreSQL per-connection default transaction isolation variable which is initialized according to the server config The default configuration is ReadCommitted",
        "hierarchy": "Database PostgreSQL Simple Transaction",
        "module": "Database.PostgreSQL.Simple.Transaction",
        "name": "DefaultIsolationLevel",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Default Isolation Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Transaction.html#v:DefaultReadWriteMode",
      "description": {
        "fct-descr": "\u003cp\u003ethe read-write mode will be taken from\n   PostgreSQL's per-connection\n   \u003ccode\u003edefault_transaction_read_only\u003c/code\u003e variable,\n   which is initialized according to the\n   server's config.  The default configuration\n   is \u003ccode\u003e\u003ca\u003eReadWrite\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.Transaction",
        "fct-package": "postgresql-simple",
        "fct-signature": "DefaultReadWriteMode",
        "fct-source": "src/Database-PostgreSQL-Simple-Transaction.html#ReadWriteMode",
        "fct-type": "function",
        "title": "DefaultReadWriteMode"
      },
      "index": {
        "description": "the read-write mode will be taken from PostgreSQL per-connection default transaction read only variable which is initialized according to the server config The default configuration is ReadWrite",
        "hierarchy": "Database PostgreSQL Simple Transaction",
        "module": "Database.PostgreSQL.Simple.Transaction",
        "name": "DefaultReadWriteMode",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Default Read Write Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Transaction.html#v:ReadCommitted",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Transaction",
        "fct-package": "postgresql-simple",
        "fct-signature": "ReadCommitted",
        "fct-source": "src/Database-PostgreSQL-Simple-Transaction.html#IsolationLevel",
        "fct-type": "function",
        "title": "ReadCommitted"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Transaction",
        "module": "Database.PostgreSQL.Simple.Transaction",
        "name": "ReadCommitted",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Read Committed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Transaction.html#v:ReadOnly",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Transaction",
        "fct-package": "postgresql-simple",
        "fct-signature": "ReadOnly",
        "fct-source": "src/Database-PostgreSQL-Simple-Transaction.html#ReadWriteMode",
        "fct-type": "function",
        "title": "ReadOnly"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Transaction",
        "module": "Database.PostgreSQL.Simple.Transaction",
        "name": "ReadOnly",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Read Only",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Transaction.html#v:ReadWrite",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Transaction",
        "fct-package": "postgresql-simple",
        "fct-signature": "ReadWrite",
        "fct-source": "src/Database-PostgreSQL-Simple-Transaction.html#ReadWriteMode",
        "fct-type": "function",
        "title": "ReadWrite"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Transaction",
        "module": "Database.PostgreSQL.Simple.Transaction",
        "name": "ReadWrite",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Read Write",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Transaction.html#v:RepeatableRead",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Transaction",
        "fct-package": "postgresql-simple",
        "fct-signature": "RepeatableRead",
        "fct-source": "src/Database-PostgreSQL-Simple-Transaction.html#IsolationLevel",
        "fct-type": "function",
        "title": "RepeatableRead"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Transaction",
        "module": "Database.PostgreSQL.Simple.Transaction",
        "name": "RepeatableRead",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Repeatable Read",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Transaction.html#v:Serializable",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Transaction",
        "fct-package": "postgresql-simple",
        "fct-signature": "Serializable",
        "fct-source": "src/Database-PostgreSQL-Simple-Transaction.html#IsolationLevel",
        "fct-type": "function",
        "title": "Serializable"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Transaction",
        "module": "Database.PostgreSQL.Simple.Transaction",
        "name": "Serializable",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Serializable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Transaction.html#v:TransactionMode",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Transaction",
        "fct-package": "postgresql-simple",
        "fct-signature": "TransactionMode",
        "fct-source": "src/Database-PostgreSQL-Simple-Transaction.html#TransactionMode",
        "fct-type": "function",
        "title": "TransactionMode"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Transaction",
        "module": "Database.PostgreSQL.Simple.Transaction",
        "name": "TransactionMode",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Transaction Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Transaction.html#v:begin",
      "description": {
        "fct-descr": "\u003cp\u003eBegin a transaction.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.Transaction",
        "fct-package": "postgresql-simple",
        "fct-signature": "Connection -\u003e IO ()",
        "fct-source": "src/Database-PostgreSQL-Simple-Transaction.html#begin",
        "fct-type": "function",
        "title": "begin"
      },
      "index": {
        "description": "Begin transaction",
        "hierarchy": "Database PostgreSQL Simple Transaction",
        "module": "Database.PostgreSQL.Simple.Transaction",
        "name": "begin",
        "normalized": "Connection-\u003eIO()",
        "package": "postgresql-simple",
        "partial": "",
        "signature": "Connection-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Transaction.html#v:beginLevel",
      "description": {
        "fct-descr": "\u003cp\u003eBegin a transaction with a given isolation level\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.Transaction",
        "fct-package": "postgresql-simple",
        "fct-signature": "IsolationLevel -\u003e Connection -\u003e IO ()",
        "fct-source": "src/Database-PostgreSQL-Simple-Transaction.html#beginLevel",
        "fct-type": "function",
        "title": "beginLevel"
      },
      "index": {
        "description": "Begin transaction with given isolation level",
        "hierarchy": "Database PostgreSQL Simple Transaction",
        "module": "Database.PostgreSQL.Simple.Transaction",
        "name": "beginLevel",
        "normalized": "IsolationLevel-\u003eConnection-\u003eIO()",
        "package": "postgresql-simple",
        "partial": "Level",
        "signature": "IsolationLevel-\u003eConnection-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Transaction.html#v:beginMode",
      "description": {
        "fct-descr": "\u003cp\u003eBegin a transaction with a given transaction mode\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.Transaction",
        "fct-package": "postgresql-simple",
        "fct-signature": "TransactionMode -\u003e Connection -\u003e IO ()",
        "fct-source": "src/Database-PostgreSQL-Simple-Transaction.html#beginMode",
        "fct-type": "function",
        "title": "beginMode"
      },
      "index": {
        "description": "Begin transaction with given transaction mode",
        "hierarchy": "Database PostgreSQL Simple Transaction",
        "module": "Database.PostgreSQL.Simple.Transaction",
        "name": "beginMode",
        "normalized": "TransactionMode-\u003eConnection-\u003eIO()",
        "package": "postgresql-simple",
        "partial": "Mode",
        "signature": "TransactionMode-\u003eConnection-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Transaction.html#v:commit",
      "description": {
        "fct-descr": "\u003cp\u003eCommit a transaction.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.Transaction",
        "fct-package": "postgresql-simple",
        "fct-signature": "Connection -\u003e IO ()",
        "fct-source": "src/Database-PostgreSQL-Simple-Transaction.html#commit",
        "fct-type": "function",
        "title": "commit"
      },
      "index": {
        "description": "Commit transaction",
        "hierarchy": "Database PostgreSQL Simple Transaction",
        "module": "Database.PostgreSQL.Simple.Transaction",
        "name": "commit",
        "normalized": "Connection-\u003eIO()",
        "package": "postgresql-simple",
        "partial": "",
        "signature": "Connection-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Transaction.html#v:defaultIsolationLevel",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Transaction",
        "fct-package": "postgresql-simple",
        "fct-signature": "IsolationLevel",
        "fct-source": "src/Database-PostgreSQL-Simple-Transaction.html#defaultIsolationLevel",
        "fct-type": "function",
        "title": "defaultIsolationLevel"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Transaction",
        "module": "Database.PostgreSQL.Simple.Transaction",
        "name": "defaultIsolationLevel",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Isolation Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Transaction.html#v:defaultReadWriteMode",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Transaction",
        "fct-package": "postgresql-simple",
        "fct-signature": "ReadWriteMode",
        "fct-source": "src/Database-PostgreSQL-Simple-Transaction.html#defaultReadWriteMode",
        "fct-type": "function",
        "title": "defaultReadWriteMode"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Transaction",
        "module": "Database.PostgreSQL.Simple.Transaction",
        "name": "defaultReadWriteMode",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Read Write Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Transaction.html#v:defaultTransactionMode",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Transaction",
        "fct-package": "postgresql-simple",
        "fct-signature": "TransactionMode",
        "fct-source": "src/Database-PostgreSQL-Simple-Transaction.html#defaultTransactionMode",
        "fct-type": "function",
        "title": "defaultTransactionMode"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Transaction",
        "module": "Database.PostgreSQL.Simple.Transaction",
        "name": "defaultTransactionMode",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Transaction Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Transaction.html#v:isFailedTransactionError",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Transaction",
        "fct-package": "postgresql-simple",
        "fct-signature": "SqlError -\u003e Bool",
        "fct-source": "src/Database-PostgreSQL-Simple-Errors.html#isFailedTransactionError",
        "fct-type": "function",
        "title": "isFailedTransactionError"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Transaction",
        "module": "Database.PostgreSQL.Simple.Transaction",
        "name": "isFailedTransactionError",
        "normalized": "SqlError-\u003eBool",
        "package": "postgresql-simple",
        "partial": "Failed Transaction Error",
        "signature": "SqlError-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Transaction.html#v:isNoActiveTransactionError",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Transaction",
        "fct-package": "postgresql-simple",
        "fct-signature": "SqlError -\u003e Bool",
        "fct-source": "src/Database-PostgreSQL-Simple-Errors.html#isNoActiveTransactionError",
        "fct-type": "function",
        "title": "isNoActiveTransactionError"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Transaction",
        "module": "Database.PostgreSQL.Simple.Transaction",
        "name": "isNoActiveTransactionError",
        "normalized": "SqlError-\u003eBool",
        "package": "postgresql-simple",
        "partial": "No Active Transaction Error",
        "signature": "SqlError-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Transaction.html#v:isSerializationError",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Transaction",
        "fct-package": "postgresql-simple",
        "fct-signature": "SqlError -\u003e Bool",
        "fct-source": "src/Database-PostgreSQL-Simple-Errors.html#isSerializationError",
        "fct-type": "function",
        "title": "isSerializationError"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Transaction",
        "module": "Database.PostgreSQL.Simple.Transaction",
        "name": "isSerializationError",
        "normalized": "SqlError-\u003eBool",
        "package": "postgresql-simple",
        "partial": "Serialization Error",
        "signature": "SqlError-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Transaction.html#v:isolationLevel",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.Simple.Transaction",
        "fct-package": "postgresql-simple",
        "fct-signature": "!IsolationLevel",
        "fct-source": "src/Database-PostgreSQL-Simple-Transaction.html#TransactionMode",
        "fct-type": "function",
        "title": "isolationLevel"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Transaction",
        "module": "Database.PostgreSQL.Simple.Transaction",
        "name": "isolationLevel",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Transaction.html#v:newSavepoint",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new savepoint.  This may only be used inside of a transaction.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.Transaction",
        "fct-package": "postgresql-simple",
        "fct-signature": "Connection -\u003e IO Savepoint",
        "fct-source": "src/Database-PostgreSQL-Simple-Transaction.html#newSavepoint",
        "fct-type": "function",
        "title": "newSavepoint"
      },
      "index": {
        "description": "Create new savepoint This may only be used inside of transaction",
        "hierarchy": "Database PostgreSQL Simple Transaction",
        "module": "Database.PostgreSQL.Simple.Transaction",
        "name": "newSavepoint",
        "normalized": "Connection-\u003eIO Savepoint",
        "package": "postgresql-simple",
        "partial": "Savepoint",
        "signature": "Connection-\u003eIO Savepoint"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Transaction.html#v:readWriteMode",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.Simple.Transaction",
        "fct-package": "postgresql-simple",
        "fct-signature": "!ReadWriteMode",
        "fct-source": "src/Database-PostgreSQL-Simple-Transaction.html#TransactionMode",
        "fct-type": "function",
        "title": "readWriteMode"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Transaction",
        "module": "Database.PostgreSQL.Simple.Transaction",
        "name": "readWriteMode",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Write Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Transaction.html#v:releaseSavepoint",
      "description": {
        "fct-descr": "\u003cp\u003eDestroy a savepoint, but retain its effects.\n\u003c/p\u003e\u003cp\u003eWarning: this will throw a \u003ccode\u003e\u003ca\u003eSqlError\u003c/a\u003e\u003c/code\u003e matching \u003ccode\u003e\u003ca\u003eisFailedTransactionError\u003c/a\u003e\u003c/code\u003e if\n the transaction is aborted due to an error.  \u003ccode\u003e\u003ca\u003ecommit\u003c/a\u003e\u003c/code\u003e would merely warn and\n roll back.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.Transaction",
        "fct-package": "postgresql-simple",
        "fct-signature": "Connection -\u003e Savepoint -\u003e IO ()",
        "fct-source": "src/Database-PostgreSQL-Simple-Transaction.html#releaseSavepoint",
        "fct-type": "function",
        "title": "releaseSavepoint"
      },
      "index": {
        "description": "Destroy savepoint but retain its effects Warning this will throw SqlError matching isFailedTransactionError if the transaction is aborted due to an error commit would merely warn and roll back",
        "hierarchy": "Database PostgreSQL Simple Transaction",
        "module": "Database.PostgreSQL.Simple.Transaction",
        "name": "releaseSavepoint",
        "normalized": "Connection-\u003eSavepoint-\u003eIO()",
        "package": "postgresql-simple",
        "partial": "Savepoint",
        "signature": "Connection-\u003eSavepoint-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Transaction.html#v:rollback",
      "description": {
        "fct-descr": "\u003cp\u003eRollback a transaction.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.Transaction",
        "fct-package": "postgresql-simple",
        "fct-signature": "Connection -\u003e IO ()",
        "fct-source": "src/Database-PostgreSQL-Simple-Transaction.html#rollback",
        "fct-type": "function",
        "title": "rollback"
      },
      "index": {
        "description": "Rollback transaction",
        "hierarchy": "Database PostgreSQL Simple Transaction",
        "module": "Database.PostgreSQL.Simple.Transaction",
        "name": "rollback",
        "normalized": "Connection-\u003eIO()",
        "package": "postgresql-simple",
        "partial": "",
        "signature": "Connection-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Transaction.html#v:rollbackToAndReleaseSavepoint",
      "description": {
        "fct-descr": "\u003cp\u003eRoll back to a savepoint and release it.  This is like calling\n \u003ccode\u003e\u003ca\u003erollbackToSavepoint\u003c/a\u003e\u003c/code\u003e followed by \u003ccode\u003e\u003ca\u003ereleaseSavepoint\u003c/a\u003e\u003c/code\u003e, but avoids a\n round trip to the database server.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.Transaction",
        "fct-package": "postgresql-simple",
        "fct-signature": "Connection -\u003e Savepoint -\u003e IO ()",
        "fct-source": "src/Database-PostgreSQL-Simple-Transaction.html#rollbackToAndReleaseSavepoint",
        "fct-type": "function",
        "title": "rollbackToAndReleaseSavepoint"
      },
      "index": {
        "description": "Roll back to savepoint and release it This is like calling rollbackToSavepoint followed by releaseSavepoint but avoids round trip to the database server",
        "hierarchy": "Database PostgreSQL Simple Transaction",
        "module": "Database.PostgreSQL.Simple.Transaction",
        "name": "rollbackToAndReleaseSavepoint",
        "normalized": "Connection-\u003eSavepoint-\u003eIO()",
        "package": "postgresql-simple",
        "partial": "To And Release Savepoint",
        "signature": "Connection-\u003eSavepoint-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Transaction.html#v:rollbackToSavepoint",
      "description": {
        "fct-descr": "\u003cp\u003eRoll back to a savepoint.  This will not release the savepoint.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.Transaction",
        "fct-package": "postgresql-simple",
        "fct-signature": "Connection -\u003e Savepoint -\u003e IO ()",
        "fct-source": "src/Database-PostgreSQL-Simple-Transaction.html#rollbackToSavepoint",
        "fct-type": "function",
        "title": "rollbackToSavepoint"
      },
      "index": {
        "description": "Roll back to savepoint This will not release the savepoint",
        "hierarchy": "Database PostgreSQL Simple Transaction",
        "module": "Database.PostgreSQL.Simple.Transaction",
        "name": "rollbackToSavepoint",
        "normalized": "Connection-\u003eSavepoint-\u003eIO()",
        "package": "postgresql-simple",
        "partial": "To Savepoint",
        "signature": "Connection-\u003eSavepoint-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Transaction.html#v:withSavepoint",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a savepoint, and roll back to it if an error occurs.  This may only\n be used inside of a transaction, and provides a sort of\n \"nested transaction\".\n\u003c/p\u003e\u003cp\u003eSee \u003ca\u003ehttp://www.postgresql.org/docs/current/static/sql-savepoint.html\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.Transaction",
        "fct-package": "postgresql-simple",
        "fct-signature": "Connection -\u003e IO a -\u003e IO a",
        "fct-source": "src/Database-PostgreSQL-Simple-Transaction.html#withSavepoint",
        "fct-type": "function",
        "title": "withSavepoint"
      },
      "index": {
        "description": "Create savepoint and roll back to it if an error occurs This may only be used inside of transaction and provides sort of nested transaction See http www.postgresql.org docs current static sql-savepoint.html",
        "hierarchy": "Database PostgreSQL Simple Transaction",
        "module": "Database.PostgreSQL.Simple.Transaction",
        "name": "withSavepoint",
        "normalized": "Connection-\u003eIO a-\u003eIO a",
        "package": "postgresql-simple",
        "partial": "Savepoint",
        "signature": "Connection-\u003eIO a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Transaction.html#v:withTransaction",
      "description": {
        "fct-descr": "\u003cp\u003eExecute an action inside a SQL transaction.\n\u003c/p\u003e\u003cp\u003eThis function initiates a transaction with a \"\u003ccode\u003ebegin\n transaction\u003c/code\u003e\" statement, then executes the supplied action.  If\n the action succeeds, the transaction will be completed with\n \u003ccode\u003e\u003ca\u003ecommit\u003c/a\u003e\u003c/code\u003e before this function returns.\n\u003c/p\u003e\u003cp\u003eIf the action throws \u003cem\u003eany\u003c/em\u003e kind of exception (not just a\n PostgreSQL-related exception), the transaction will be rolled back using\n \u003ccode\u003e\u003ca\u003erollback\u003c/a\u003e\u003c/code\u003e, then the exception will be rethrown.\n\u003c/p\u003e\u003cp\u003eFor nesting transactions, see \u003ccode\u003e\u003ca\u003ewithSavepoint\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.Transaction",
        "fct-package": "postgresql-simple",
        "fct-signature": "Connection -\u003e IO a -\u003e IO a",
        "fct-source": "src/Database-PostgreSQL-Simple-Transaction.html#withTransaction",
        "fct-type": "function",
        "title": "withTransaction"
      },
      "index": {
        "description": "Execute an action inside SQL transaction This function initiates transaction with begin transaction statement then executes the supplied action If the action succeeds the transaction will be completed with commit before this function returns If the action throws any kind of exception not just PostgreSQL-related exception the transaction will be rolled back using rollback then the exception will be rethrown For nesting transactions see withSavepoint",
        "hierarchy": "Database PostgreSQL Simple Transaction",
        "module": "Database.PostgreSQL.Simple.Transaction",
        "name": "withTransaction",
        "normalized": "Connection-\u003eIO a-\u003eIO a",
        "package": "postgresql-simple",
        "partial": "Transaction",
        "signature": "Connection-\u003eIO a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Transaction.html#v:withTransactionLevel",
      "description": {
        "fct-descr": "\u003cp\u003eExecute an action inside a SQL transaction with a given isolation level.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.Transaction",
        "fct-package": "postgresql-simple",
        "fct-signature": "IsolationLevel -\u003e Connection -\u003e IO a -\u003e IO a",
        "fct-source": "src/Database-PostgreSQL-Simple-Transaction.html#withTransactionLevel",
        "fct-type": "function",
        "title": "withTransactionLevel"
      },
      "index": {
        "description": "Execute an action inside SQL transaction with given isolation level",
        "hierarchy": "Database PostgreSQL Simple Transaction",
        "module": "Database.PostgreSQL.Simple.Transaction",
        "name": "withTransactionLevel",
        "normalized": "IsolationLevel-\u003eConnection-\u003eIO a-\u003eIO a",
        "package": "postgresql-simple",
        "partial": "Transaction Level",
        "signature": "IsolationLevel-\u003eConnection-\u003eIO a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Transaction.html#v:withTransactionMode",
      "description": {
        "fct-descr": "\u003cp\u003eExecute an action inside a SQL transaction with a given transaction mode.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.Transaction",
        "fct-package": "postgresql-simple",
        "fct-signature": "TransactionMode -\u003e Connection -\u003e IO a -\u003e IO a",
        "fct-source": "src/Database-PostgreSQL-Simple-Transaction.html#withTransactionMode",
        "fct-type": "function",
        "title": "withTransactionMode"
      },
      "index": {
        "description": "Execute an action inside SQL transaction with given transaction mode",
        "hierarchy": "Database PostgreSQL Simple Transaction",
        "module": "Database.PostgreSQL.Simple.Transaction",
        "name": "withTransactionMode",
        "normalized": "TransactionMode-\u003eConnection-\u003eIO a-\u003eIO a",
        "package": "postgresql-simple",
        "partial": "Transaction Mode",
        "signature": "TransactionMode-\u003eConnection-\u003eIO a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Transaction.html#v:withTransactionModeRetry",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ewithTransactionMode\u003c/a\u003e\u003c/code\u003e, but also takes a custom callback to\n determine if a transaction should be retried if an \u003ccode\u003e\u003ca\u003eSqlError\u003c/a\u003e\u003c/code\u003e occurs.\n If the callback returns True, then the transaction will be retried.\n If the callback returns False, or an exception other than an \u003ccode\u003e\u003ca\u003eSqlError\u003c/a\u003e\u003c/code\u003e\n occurs then the transaction will be rolled back and the exception rethrown.\n\u003c/p\u003e\u003cp\u003eThis is used to implement \u003ccode\u003e\u003ca\u003ewithTransactionSerializable\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.Transaction",
        "fct-package": "postgresql-simple",
        "fct-signature": "TransactionMode -\u003e (SqlError -\u003e Bool) -\u003e Connection -\u003e IO a -\u003e IO a",
        "fct-source": "src/Database-PostgreSQL-Simple-Transaction.html#withTransactionModeRetry",
        "fct-type": "function",
        "title": "withTransactionModeRetry"
      },
      "index": {
        "description": "Like withTransactionMode but also takes custom callback to determine if transaction should be retried if an SqlError occurs If the callback returns True then the transaction will be retried If the callback returns False or an exception other than an SqlError occurs then the transaction will be rolled back and the exception rethrown This is used to implement withTransactionSerializable",
        "hierarchy": "Database PostgreSQL Simple Transaction",
        "module": "Database.PostgreSQL.Simple.Transaction",
        "name": "withTransactionModeRetry",
        "normalized": "TransactionMode-\u003e(SqlError-\u003eBool)-\u003eConnection-\u003eIO a-\u003eIO a",
        "package": "postgresql-simple",
        "partial": "Transaction Mode Retry",
        "signature": "TransactionMode-\u003e(SqlError-\u003eBool)-\u003eConnection-\u003eIO a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Transaction.html#v:withTransactionSerializable",
      "description": {
        "fct-descr": "\u003cp\u003eExecute an action inside of a \u003ccode\u003e\u003ca\u003eSerializable\u003c/a\u003e\u003c/code\u003e transaction.  If a\n serialization failure occurs, roll back the transaction and try again.\n Be warned that this may execute the IO action multiple times.\n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eSerializable\u003c/a\u003e\u003c/code\u003e transaction creates the illusion that your program has\n exclusive access to the database.  This means that, even in a concurrent\n setting, you can perform queries in sequence without having to worry about\n what might happen between one statement and the next.\n\u003c/p\u003e\u003cp\u003eThink of it as STM, but without \u003ccode\u003eretry\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.Transaction",
        "fct-package": "postgresql-simple",
        "fct-signature": "Connection -\u003e IO a -\u003e IO a",
        "fct-source": "src/Database-PostgreSQL-Simple-Transaction.html#withTransactionSerializable",
        "fct-type": "function",
        "title": "withTransactionSerializable"
      },
      "index": {
        "description": "Execute an action inside of Serializable transaction If serialization failure occurs roll back the transaction and try again Be warned that this may execute the IO action multiple times Serializable transaction creates the illusion that your program has exclusive access to the database This means that even in concurrent setting you can perform queries in sequence without having to worry about what might happen between one statement and the next Think of it as STM but without retry",
        "hierarchy": "Database PostgreSQL Simple Transaction",
        "module": "Database.PostgreSQL.Simple.Transaction",
        "name": "withTransactionSerializable",
        "normalized": "Connection-\u003eIO a-\u003eIO a",
        "package": "postgresql-simple",
        "partial": "Transaction Serializable",
        "signature": "Connection-\u003eIO a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Macro.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA Template Haskell macro for efficiently checking membership in\n a set of type oids.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.PostgreSQL.Simple.TypeInfo.Macro",
        "fct-package": "postgresql-simple",
        "fct-signature": "module",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Macro.html",
        "fct-type": "module",
        "title": "Macro"
      },
      "index": {
        "description": "Template Haskell macro for efficiently checking membership in set of type oids",
        "hierarchy": "Database PostgreSQL Simple TypeInfo Macro",
        "module": "Database.PostgreSQL.Simple.TypeInfo.Macro",
        "name": "Macro",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Macro",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Macro.html#v:inlineTypoid",
      "description": {
        "fct-descr": "\u003cp\u003eLiterally substitute the \u003ccode\u003e\u003ca\u003etypoid\u003c/a\u003e\u003c/code\u003e of a \u003ccode\u003e\u003ca\u003eTypeInfo\u003c/a\u003e\u003c/code\u003e expression.\n   Returns an expression of type \u003ccode\u003e\u003ca\u003eOid\u003c/a\u003e\u003c/code\u003e.  Useful because GHC tends\n   not to fold constants.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.TypeInfo.Macro",
        "fct-package": "postgresql-simple",
        "fct-signature": "TypeInfo -\u003e ExpQ",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Macro.html#inlineTypoid",
        "fct-type": "function",
        "title": "inlineTypoid"
      },
      "index": {
        "description": "Literally substitute the typoid of TypeInfo expression Returns an expression of type Oid Useful because GHC tends not to fold constants",
        "hierarchy": "Database PostgreSQL Simple TypeInfo Macro",
        "module": "Database.PostgreSQL.Simple.TypeInfo.Macro",
        "name": "inlineTypoid",
        "normalized": "TypeInfo-\u003eExpQ",
        "package": "postgresql-simple",
        "partial": "Typoid",
        "signature": "TypeInfo-\u003eExpQ"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Macro.html#v:mkCompats",
      "description": {
        "fct-descr": "\u003cp\u003eReturns an expression that has type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eOid\u003c/a\u003e\u003c/code\u003e -\u003e \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e,  true if the\n   oid is equal to any one of the \u003ccode\u003e\u003ca\u003etypoid\u003c/a\u003e\u003c/code\u003es of the given \u003ccode\u003e\u003ca\u003eTypeInfo\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.TypeInfo.Macro",
        "fct-package": "postgresql-simple",
        "fct-signature": "[TypeInfo] -\u003e ExpQ",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Macro.html#mkCompats",
        "fct-type": "function",
        "title": "mkCompats"
      },
      "index": {
        "description": "Returns an expression that has type Oid Bool true if the oid is equal to any one of the typoid of the given TypeInfo",
        "hierarchy": "Database PostgreSQL Simple TypeInfo Macro",
        "module": "Database.PostgreSQL.Simple.TypeInfo.Macro",
        "name": "mkCompats",
        "normalized": "[TypeInfo]-\u003eExpQ",
        "package": "postgresql-simple",
        "partial": "Compats",
        "signature": "[TypeInfo]-\u003eExpQ"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains portions of the \u003ccode\u003epg_type\u003c/code\u003e table that are relevant\n to postgresql-simple and are believed to not change between PostgreSQL\n versions.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "fct-package": "postgresql-simple",
        "fct-signature": "module",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html",
        "fct-type": "module",
        "title": "Static"
      },
      "index": {
        "description": "This module contains portions of the pg type table that are relevant to postgresql-simple and are believed to not change between PostgreSQL versions",
        "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
        "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "name": "Static",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Static",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#t:TypeInfo",
      "description": {
        "fct-descr": "\u003cp\u003eA structure representing some of the metadata regarding a PostgreSQL\n   type,  mostly taken from the \u003ccode\u003epg_type\u003c/code\u003e table.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "fct-package": "postgresql-simple",
        "fct-signature": "data",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Types.html#TypeInfo",
        "fct-type": "data",
        "title": "TypeInfo"
      },
      "index": {
        "description": "structure representing some of the metadata regarding PostgreSQL type mostly taken from the pg type table",
        "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
        "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "name": "TypeInfo",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Type Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:Array",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "fct-package": "postgresql-simple",
        "fct-signature": "Array",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Types.html#TypeInfo",
        "fct-type": "function",
        "title": "Array"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
        "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "name": "Array",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Array",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:Basic",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "fct-package": "postgresql-simple",
        "fct-signature": "Basic",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Types.html#TypeInfo",
        "fct-type": "function",
        "title": "Basic"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
        "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "name": "Basic",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Basic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:Composite",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "fct-package": "postgresql-simple",
        "fct-signature": "Composite",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Types.html#TypeInfo",
        "fct-type": "function",
        "title": "Composite"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
        "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "name": "Composite",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Composite",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:Range",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "fct-package": "postgresql-simple",
        "fct-signature": "Range",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Types.html#TypeInfo",
        "fct-type": "function",
        "title": "Range"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
        "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "name": "Range",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Range",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:abstime",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "fct-package": "postgresql-simple",
        "fct-signature": "TypeInfo",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#abstime",
        "fct-type": "function",
        "title": "abstime"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
        "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "name": "abstime",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:attributes",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "fct-package": "postgresql-simple",
        "fct-signature": "!(Vector Attribute)",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Types.html#TypeInfo",
        "fct-type": "function",
        "title": "attributes"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
        "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "name": "attributes",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:bit",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "fct-package": "postgresql-simple",
        "fct-signature": "TypeInfo",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#bit",
        "fct-type": "function",
        "title": "bit"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
        "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "name": "bit",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:bool",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "fct-package": "postgresql-simple",
        "fct-signature": "TypeInfo",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#bool",
        "fct-type": "function",
        "title": "bool"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
        "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "name": "bool",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:box",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "fct-package": "postgresql-simple",
        "fct-signature": "TypeInfo",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#box",
        "fct-type": "function",
        "title": "box"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
        "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "name": "box",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:bpchar",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "fct-package": "postgresql-simple",
        "fct-signature": "TypeInfo",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#bpchar",
        "fct-type": "function",
        "title": "bpchar"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
        "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "name": "bpchar",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:bytea",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "fct-package": "postgresql-simple",
        "fct-signature": "TypeInfo",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#bytea",
        "fct-type": "function",
        "title": "bytea"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
        "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "name": "bytea",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:char",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "fct-package": "postgresql-simple",
        "fct-signature": "TypeInfo",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#char",
        "fct-type": "function",
        "title": "char"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
        "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "name": "char",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:cid",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "fct-package": "postgresql-simple",
        "fct-signature": "TypeInfo",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#cid",
        "fct-type": "function",
        "title": "cid"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
        "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "name": "cid",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:cidr",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "fct-package": "postgresql-simple",
        "fct-signature": "TypeInfo",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#cidr",
        "fct-type": "function",
        "title": "cidr"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
        "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "name": "cidr",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:circle",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "fct-package": "postgresql-simple",
        "fct-signature": "TypeInfo",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#circle",
        "fct-type": "function",
        "title": "circle"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
        "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "name": "circle",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:date",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "fct-package": "postgresql-simple",
        "fct-signature": "TypeInfo",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#date",
        "fct-type": "function",
        "title": "date"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
        "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "name": "date",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:float4",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "fct-package": "postgresql-simple",
        "fct-signature": "TypeInfo",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#float4",
        "fct-type": "function",
        "title": "float4"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
        "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "name": "float4",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:float8",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "fct-package": "postgresql-simple",
        "fct-signature": "TypeInfo",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#float8",
        "fct-type": "function",
        "title": "float8"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
        "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "name": "float8",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:inet",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "fct-package": "postgresql-simple",
        "fct-signature": "TypeInfo",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#inet",
        "fct-type": "function",
        "title": "inet"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
        "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "name": "inet",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:int2",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "fct-package": "postgresql-simple",
        "fct-signature": "TypeInfo",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#int2",
        "fct-type": "function",
        "title": "int2"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
        "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "name": "int2",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:int4",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "fct-package": "postgresql-simple",
        "fct-signature": "TypeInfo",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#int4",
        "fct-type": "function",
        "title": "int4"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
        "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "name": "int4",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:int8",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "fct-package": "postgresql-simple",
        "fct-signature": "TypeInfo",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#int8",
        "fct-type": "function",
        "title": "int8"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
        "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "name": "int8",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:interval",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "fct-package": "postgresql-simple",
        "fct-signature": "TypeInfo",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#interval",
        "fct-type": "function",
        "title": "interval"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
        "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "name": "interval",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:json",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "fct-package": "postgresql-simple",
        "fct-signature": "TypeInfo",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#json",
        "fct-type": "function",
        "title": "json"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
        "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "name": "json",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:line",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "fct-package": "postgresql-simple",
        "fct-signature": "TypeInfo",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#line",
        "fct-type": "function",
        "title": "line"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
        "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "name": "line",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:lseg",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "fct-package": "postgresql-simple",
        "fct-signature": "TypeInfo",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#lseg",
        "fct-type": "function",
        "title": "lseg"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
        "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "name": "lseg",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:macaddr",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "fct-package": "postgresql-simple",
        "fct-signature": "TypeInfo",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#macaddr",
        "fct-type": "function",
        "title": "macaddr"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
        "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "name": "macaddr",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:money",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "fct-package": "postgresql-simple",
        "fct-signature": "TypeInfo",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#money",
        "fct-type": "function",
        "title": "money"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
        "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "name": "money",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:name",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "fct-package": "postgresql-simple",
        "fct-signature": "TypeInfo",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#name",
        "fct-type": "function",
        "title": "name"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
        "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "name": "name",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:numeric",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "fct-package": "postgresql-simple",
        "fct-signature": "TypeInfo",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#numeric",
        "fct-type": "function",
        "title": "numeric"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
        "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "name": "numeric",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:oid",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "fct-package": "postgresql-simple",
        "fct-signature": "TypeInfo",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#oid",
        "fct-type": "function",
        "title": "oid"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
        "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "name": "oid",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:path",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "fct-package": "postgresql-simple",
        "fct-signature": "TypeInfo",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#path",
        "fct-type": "function",
        "title": "path"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
        "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "name": "path",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:point",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "fct-package": "postgresql-simple",
        "fct-signature": "TypeInfo",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#point",
        "fct-type": "function",
        "title": "point"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
        "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "name": "point",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:polygon",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "fct-package": "postgresql-simple",
        "fct-signature": "TypeInfo",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#polygon",
        "fct-type": "function",
        "title": "polygon"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
        "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "name": "polygon",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:record",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "fct-package": "postgresql-simple",
        "fct-signature": "TypeInfo",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#record",
        "fct-type": "function",
        "title": "record"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
        "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "name": "record",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:refcursor",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "fct-package": "postgresql-simple",
        "fct-signature": "TypeInfo",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#refcursor",
        "fct-type": "function",
        "title": "refcursor"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
        "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "name": "refcursor",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:regproc",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "fct-package": "postgresql-simple",
        "fct-signature": "TypeInfo",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#regproc",
        "fct-type": "function",
        "title": "regproc"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
        "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "name": "regproc",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:reltime",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "fct-package": "postgresql-simple",
        "fct-signature": "TypeInfo",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#reltime",
        "fct-type": "function",
        "title": "reltime"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
        "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "name": "reltime",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:rngsubtype",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "fct-package": "postgresql-simple",
        "fct-signature": "!TypeInfo",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Types.html#TypeInfo",
        "fct-type": "function",
        "title": "rngsubtype"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
        "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "name": "rngsubtype",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:staticTypeInfo",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "fct-package": "postgresql-simple",
        "fct-signature": "Oid -\u003e Maybe TypeInfo",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#staticTypeInfo",
        "fct-type": "function",
        "title": "staticTypeInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
        "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "name": "staticTypeInfo",
        "normalized": "Oid-\u003eMaybe TypeInfo",
        "package": "postgresql-simple",
        "partial": "Type Info",
        "signature": "Oid-\u003eMaybe TypeInfo"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:text",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "fct-package": "postgresql-simple",
        "fct-signature": "TypeInfo",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#text",
        "fct-type": "function",
        "title": "text"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
        "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "name": "text",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:tid",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "fct-package": "postgresql-simple",
        "fct-signature": "TypeInfo",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#tid",
        "fct-type": "function",
        "title": "tid"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
        "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "name": "tid",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:time",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "fct-package": "postgresql-simple",
        "fct-signature": "TypeInfo",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#time",
        "fct-type": "function",
        "title": "time"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
        "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "name": "time",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:timestamp",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "fct-package": "postgresql-simple",
        "fct-signature": "TypeInfo",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#timestamp",
        "fct-type": "function",
        "title": "timestamp"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
        "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "name": "timestamp",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:timestamptz",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "fct-package": "postgresql-simple",
        "fct-signature": "TypeInfo",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#timestamptz",
        "fct-type": "function",
        "title": "timestamptz"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
        "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "name": "timestamptz",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:timetz",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "fct-package": "postgresql-simple",
        "fct-signature": "TypeInfo",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#timetz",
        "fct-type": "function",
        "title": "timetz"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
        "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "name": "timetz",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:tinterval",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "fct-package": "postgresql-simple",
        "fct-signature": "TypeInfo",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#tinterval",
        "fct-type": "function",
        "title": "tinterval"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
        "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "name": "tinterval",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:typcategory",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "fct-package": "postgresql-simple",
        "fct-signature": "!Char",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Types.html#TypeInfo",
        "fct-type": "function",
        "title": "typcategory"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
        "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "name": "typcategory",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:typdelim",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "fct-package": "postgresql-simple",
        "fct-signature": "!Char",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Types.html#TypeInfo",
        "fct-type": "function",
        "title": "typdelim"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
        "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "name": "typdelim",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:typelem",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "fct-package": "postgresql-simple",
        "fct-signature": "!TypeInfo",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Types.html#TypeInfo",
        "fct-type": "function",
        "title": "typelem"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
        "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "name": "typelem",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:typname",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "fct-package": "postgresql-simple",
        "fct-signature": "!ByteString",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Types.html#TypeInfo",
        "fct-type": "function",
        "title": "typname"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
        "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "name": "typname",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:typoid",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "fct-package": "postgresql-simple",
        "fct-signature": "!Oid",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Types.html#TypeInfo",
        "fct-type": "function",
        "title": "typoid"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
        "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "name": "typoid",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:typrelid",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "fct-package": "postgresql-simple",
        "fct-signature": "!Oid",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Types.html#TypeInfo",
        "fct-type": "function",
        "title": "typrelid"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
        "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "name": "typrelid",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:unknown",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "fct-package": "postgresql-simple",
        "fct-signature": "TypeInfo",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#unknown",
        "fct-type": "function",
        "title": "unknown"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
        "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "name": "unknown",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:uuid",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "fct-package": "postgresql-simple",
        "fct-signature": "TypeInfo",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#uuid",
        "fct-type": "function",
        "title": "uuid"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
        "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "name": "uuid",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:varbit",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "fct-package": "postgresql-simple",
        "fct-signature": "TypeInfo",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#varbit",
        "fct-type": "function",
        "title": "varbit"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
        "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "name": "varbit",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:varchar",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "fct-package": "postgresql-simple",
        "fct-signature": "TypeInfo",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#varchar",
        "fct-type": "function",
        "title": "varchar"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
        "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "name": "varchar",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:void",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "fct-package": "postgresql-simple",
        "fct-signature": "TypeInfo",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#void",
        "fct-type": "function",
        "title": "void"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
        "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "name": "void",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:xid",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "fct-package": "postgresql-simple",
        "fct-signature": "TypeInfo",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#xid",
        "fct-type": "function",
        "title": "xid"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
        "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "name": "xid",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo-Static.html#v:xml",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "fct-package": "postgresql-simple",
        "fct-signature": "TypeInfo",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Static.html#xml",
        "fct-type": "function",
        "title": "xml"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple TypeInfo Static",
        "module": "Database.PostgreSQL.Simple.TypeInfo.Static",
        "name": "xml",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides convenient and efficient access to parts of the\n \u003ccode\u003epg_type\u003c/code\u003e metatable.  At the moment, this requires PostgreSQL 8.4 if\n you need to work with types that do not appear in\n \u003ccode\u003e\u003ca\u003eStatic\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe current scheme could be more efficient, especially for some use\n cases.  In particular,  connection pools that use many user-added\n types and connect to a set of servers with identical (or at least\n compatible) \u003ccode\u003epg_type\u003c/code\u003e and associated tables could share a common\n typeinfo cache,  thus saving memory and communication between the\n client and server.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.PostgreSQL.Simple.TypeInfo",
        "fct-package": "postgresql-simple",
        "fct-signature": "module",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo.html",
        "fct-type": "module",
        "title": "TypeInfo"
      },
      "index": {
        "description": "This module provides convenient and efficient access to parts of the pg type metatable At the moment this requires PostgreSQL if you need to work with types that do not appear in Static The current scheme could be more efficient especially for some use cases In particular connection pools that use many user-added types and connect to set of servers with identical or at least compatible pg type and associated tables could share common typeinfo cache thus saving memory and communication between the client and server",
        "hierarchy": "Database PostgreSQL Simple TypeInfo",
        "module": "Database.PostgreSQL.Simple.TypeInfo",
        "name": "TypeInfo",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Type Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo.html#t:Attribute",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.TypeInfo",
        "fct-package": "postgresql-simple",
        "fct-signature": "data",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Types.html#Attribute",
        "fct-type": "data",
        "title": "Attribute"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple TypeInfo",
        "module": "Database.PostgreSQL.Simple.TypeInfo",
        "name": "Attribute",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Attribute",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo.html#t:TypeInfo",
      "description": {
        "fct-descr": "\u003cp\u003eA structure representing some of the metadata regarding a PostgreSQL\n   type,  mostly taken from the \u003ccode\u003epg_type\u003c/code\u003e table.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.TypeInfo",
        "fct-package": "postgresql-simple",
        "fct-signature": "data",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Types.html#TypeInfo",
        "fct-type": "data",
        "title": "TypeInfo"
      },
      "index": {
        "description": "structure representing some of the metadata regarding PostgreSQL type mostly taken from the pg type table",
        "hierarchy": "Database PostgreSQL Simple TypeInfo",
        "module": "Database.PostgreSQL.Simple.TypeInfo",
        "name": "TypeInfo",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Type Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo.html#v:Array",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.TypeInfo",
        "fct-package": "postgresql-simple",
        "fct-signature": "Array",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Types.html#TypeInfo",
        "fct-type": "function",
        "title": "Array"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple TypeInfo",
        "module": "Database.PostgreSQL.Simple.TypeInfo",
        "name": "Array",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Array",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo.html#v:Attribute",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.TypeInfo",
        "fct-package": "postgresql-simple",
        "fct-signature": "Attribute",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Types.html#Attribute",
        "fct-type": "function",
        "title": "Attribute"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple TypeInfo",
        "module": "Database.PostgreSQL.Simple.TypeInfo",
        "name": "Attribute",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Attribute",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo.html#v:Basic",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.TypeInfo",
        "fct-package": "postgresql-simple",
        "fct-signature": "Basic",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Types.html#TypeInfo",
        "fct-type": "function",
        "title": "Basic"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple TypeInfo",
        "module": "Database.PostgreSQL.Simple.TypeInfo",
        "name": "Basic",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Basic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo.html#v:Composite",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.TypeInfo",
        "fct-package": "postgresql-simple",
        "fct-signature": "Composite",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Types.html#TypeInfo",
        "fct-type": "function",
        "title": "Composite"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple TypeInfo",
        "module": "Database.PostgreSQL.Simple.TypeInfo",
        "name": "Composite",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Composite",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo.html#v:Range",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.TypeInfo",
        "fct-package": "postgresql-simple",
        "fct-signature": "Range",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Types.html#TypeInfo",
        "fct-type": "function",
        "title": "Range"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple TypeInfo",
        "module": "Database.PostgreSQL.Simple.TypeInfo",
        "name": "Range",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Range",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo.html#v:attname",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.Simple.TypeInfo",
        "fct-package": "postgresql-simple",
        "fct-signature": "!ByteString",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Types.html#Attribute",
        "fct-type": "function",
        "title": "attname"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple TypeInfo",
        "module": "Database.PostgreSQL.Simple.TypeInfo",
        "name": "attname",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo.html#v:attributes",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.Simple.TypeInfo",
        "fct-package": "postgresql-simple",
        "fct-signature": "!(Vector Attribute)",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Types.html#TypeInfo",
        "fct-type": "function",
        "title": "attributes"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple TypeInfo",
        "module": "Database.PostgreSQL.Simple.TypeInfo",
        "name": "attributes",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo.html#v:atttype",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.Simple.TypeInfo",
        "fct-package": "postgresql-simple",
        "fct-signature": "!TypeInfo",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Types.html#Attribute",
        "fct-type": "function",
        "title": "atttype"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple TypeInfo",
        "module": "Database.PostgreSQL.Simple.TypeInfo",
        "name": "atttype",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo.html#v:getTypeInfo",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the metadata of the type with a particular oid.  To find\n   this data, \u003ccode\u003e\u003ca\u003egetTypeInfo\u003c/a\u003e\u003c/code\u003e first consults postgresql-simple's\n   built-in \u003ccode\u003e\u003ca\u003estaticTypeInfo\u003c/a\u003e\u003c/code\u003e table,  then checks  the connection's\n   typeinfo cache.   Finally,  the database's \u003ccode\u003epg_type\u003c/code\u003e table will\n   be queried only if necessary,  and the result will be stored\n   in the connections's cache.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.TypeInfo",
        "fct-package": "postgresql-simple",
        "fct-signature": "Connection -\u003e Oid -\u003e IO TypeInfo",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo.html#getTypeInfo",
        "fct-type": "function",
        "title": "getTypeInfo"
      },
      "index": {
        "description": "Returns the metadata of the type with particular oid To find this data getTypeInfo first consults postgresql-simple built-in staticTypeInfo table then checks the connection typeinfo cache Finally the database pg type table will be queried only if necessary and the result will be stored in the connections cache",
        "hierarchy": "Database PostgreSQL Simple TypeInfo",
        "module": "Database.PostgreSQL.Simple.TypeInfo",
        "name": "getTypeInfo",
        "normalized": "Connection-\u003eOid-\u003eIO TypeInfo",
        "package": "postgresql-simple",
        "partial": "Type Info",
        "signature": "Connection-\u003eOid-\u003eIO TypeInfo"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo.html#v:rngsubtype",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.Simple.TypeInfo",
        "fct-package": "postgresql-simple",
        "fct-signature": "!TypeInfo",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Types.html#TypeInfo",
        "fct-type": "function",
        "title": "rngsubtype"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple TypeInfo",
        "module": "Database.PostgreSQL.Simple.TypeInfo",
        "name": "rngsubtype",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo.html#v:typcategory",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.Simple.TypeInfo",
        "fct-package": "postgresql-simple",
        "fct-signature": "!Char",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Types.html#TypeInfo",
        "fct-type": "function",
        "title": "typcategory"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple TypeInfo",
        "module": "Database.PostgreSQL.Simple.TypeInfo",
        "name": "typcategory",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo.html#v:typdelim",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.Simple.TypeInfo",
        "fct-package": "postgresql-simple",
        "fct-signature": "!Char",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Types.html#TypeInfo",
        "fct-type": "function",
        "title": "typdelim"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple TypeInfo",
        "module": "Database.PostgreSQL.Simple.TypeInfo",
        "name": "typdelim",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo.html#v:typelem",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.Simple.TypeInfo",
        "fct-package": "postgresql-simple",
        "fct-signature": "!TypeInfo",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Types.html#TypeInfo",
        "fct-type": "function",
        "title": "typelem"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple TypeInfo",
        "module": "Database.PostgreSQL.Simple.TypeInfo",
        "name": "typelem",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo.html#v:typname",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.Simple.TypeInfo",
        "fct-package": "postgresql-simple",
        "fct-signature": "!ByteString",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Types.html#TypeInfo",
        "fct-type": "function",
        "title": "typname"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple TypeInfo",
        "module": "Database.PostgreSQL.Simple.TypeInfo",
        "name": "typname",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo.html#v:typoid",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.Simple.TypeInfo",
        "fct-package": "postgresql-simple",
        "fct-signature": "!Oid",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Types.html#TypeInfo",
        "fct-type": "function",
        "title": "typoid"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple TypeInfo",
        "module": "Database.PostgreSQL.Simple.TypeInfo",
        "name": "typoid",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-TypeInfo.html#v:typrelid",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.Simple.TypeInfo",
        "fct-package": "postgresql-simple",
        "fct-signature": "!Oid",
        "fct-source": "src/Database-PostgreSQL-Simple-TypeInfo-Types.html#TypeInfo",
        "fct-type": "function",
        "title": "typrelid"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple TypeInfo",
        "module": "Database.PostgreSQL.Simple.TypeInfo",
        "name": "typrelid",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Types.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBasic types.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.PostgreSQL.Simple.Types",
        "fct-package": "postgresql-simple",
        "fct-signature": "module",
        "fct-source": "src/Database-PostgreSQL-Simple-Types.html",
        "fct-type": "module",
        "title": "Types"
      },
      "index": {
        "description": "Basic types",
        "hierarchy": "Database PostgreSQL Simple Types",
        "module": "Database.PostgreSQL.Simple.Types",
        "name": "Types",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Types.html#t::.",
      "description": {
        "fct-descr": "\u003cp\u003eA composite type to parse your custom data structures without\n having to define dummy newtype wrappers every time.\n\u003c/p\u003e\u003cpre\u003e instance FromRow MyData where ...\n\u003c/pre\u003e\u003cpre\u003e instance FromRow MyData2 where ...\n\u003c/pre\u003e\u003cp\u003ethen I can do the following for free:\n\u003c/p\u003e\u003cpre\u003e\n res \u003c- query' c \u003ca\u003e...\u003c/a\u003e\n forM res $ \\(MyData{..} :. MyData2{..}) -\u003e do\n   ....\n\u003c/pre\u003e",
        "fct-module": "Database.PostgreSQL.Simple.Types",
        "fct-package": "postgresql-simple",
        "fct-signature": "data",
        "fct-source": "src/Database-PostgreSQL-Simple-Types.html#%3A.",
        "fct-type": "data",
        "title": ":."
      },
      "index": {
        "description": "composite type to parse your custom data structures without having to define dummy newtype wrappers every time instance FromRow MyData where instance FromRow MyData2 where then can do the following for free res query forM res MyData MyData2 do",
        "hierarchy": "Database PostgreSQL Simple Types",
        "module": "Database.PostgreSQL.Simple.Types",
        "name": ":.",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Types.html#t:Binary",
      "description": {
        "fct-descr": "\u003cp\u003eWrap binary data for use as a \u003ccode\u003ebytea\u003c/code\u003e value.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.Types",
        "fct-package": "postgresql-simple",
        "fct-signature": "newtype",
        "fct-source": "src/Database-PostgreSQL-Simple-Types.html#Binary",
        "fct-type": "newtype",
        "title": "Binary"
      },
      "index": {
        "description": "Wrap binary data for use as bytea value",
        "hierarchy": "Database PostgreSQL Simple Types",
        "module": "Database.PostgreSQL.Simple.Types",
        "name": "Binary",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Binary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Types.html#t:Default",
      "description": {
        "fct-descr": "\u003cp\u003eA placeholder for the PostgreSQL \u003ccode\u003eDEFAULT\u003c/code\u003e value.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.Types",
        "fct-package": "postgresql-simple",
        "fct-signature": "data",
        "fct-source": "src/Database-PostgreSQL-Simple-Types.html#Default",
        "fct-type": "data",
        "title": "Default"
      },
      "index": {
        "description": "placeholder for the PostgreSQL DEFAULT value",
        "hierarchy": "Database PostgreSQL Simple Types",
        "module": "Database.PostgreSQL.Simple.Types",
        "name": "Default",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Default",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Types.html#t:In",
      "description": {
        "fct-descr": "\u003cp\u003eWrap a list of values for use in an \u003ccode\u003eIN\u003c/code\u003e clause.  Replaces a\n single \"\u003ccode\u003e?\u003c/code\u003e\" character with a parenthesized list of rendered\n values.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e query c \"select * from whatever where id in ?\" (Only (In [3,4,5]))\n\u003c/pre\u003e",
        "fct-module": "Database.PostgreSQL.Simple.Types",
        "fct-package": "postgresql-simple",
        "fct-signature": "newtype",
        "fct-source": "src/Database-PostgreSQL-Simple-Types.html#In",
        "fct-type": "newtype",
        "title": "In"
      },
      "index": {
        "description": "Wrap list of values for use in an IN clause Replaces single character with parenthesized list of rendered values Example query select from whatever where id in Only In",
        "hierarchy": "Database PostgreSQL Simple Types",
        "module": "Database.PostgreSQL.Simple.Types",
        "name": "In",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "In",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Types.html#t:Null",
      "description": {
        "fct-descr": "\u003cp\u003eA placeholder for the SQL \u003ccode\u003eNULL\u003c/code\u003e value.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.Types",
        "fct-package": "postgresql-simple",
        "fct-signature": "data",
        "fct-source": "src/Database-PostgreSQL-Simple-Types.html#Null",
        "fct-type": "data",
        "title": "Null"
      },
      "index": {
        "description": "placeholder for the SQL NULL value",
        "hierarchy": "Database PostgreSQL Simple Types",
        "module": "Database.PostgreSQL.Simple.Types",
        "name": "Null",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Null",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Types.html#t:Oid",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Types",
        "fct-package": "postgresql-simple",
        "fct-signature": "newtype",
        "fct-type": "newtype",
        "title": "Oid"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Types",
        "module": "Database.PostgreSQL.Simple.Types",
        "name": "Oid",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Oid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Types.html#t:Only",
      "description": {
        "fct-descr": "\u003cp\u003eA single-value \"collection\".\n\u003c/p\u003e\u003cp\u003eThis is useful if you need to supply a single parameter to a SQL\n query, or extract a single column from a SQL result.\n\u003c/p\u003e\u003cp\u003eParameter example:\n\u003c/p\u003e\u003cpre\u003equery c \"select x from scores where x \u003e ?\" (\u003ccode\u003e\u003ca\u003eOnly\u003c/a\u003e\u003c/code\u003e (42::Int))\u003c/pre\u003e\u003cp\u003eResult example:\n\u003c/p\u003e\u003cpre\u003exs \u003c- query_ c \"select id from users\"\nforM_ xs $ \\(\u003ccode\u003e\u003ca\u003eOnly\u003c/a\u003e\u003c/code\u003e id) -\u003e {- ... -}\u003c/pre\u003e",
        "fct-module": "Database.PostgreSQL.Simple.Types",
        "fct-package": "postgresql-simple",
        "fct-signature": "newtype",
        "fct-source": "src/Database-PostgreSQL-Simple-Types.html#Only",
        "fct-type": "newtype",
        "title": "Only"
      },
      "index": {
        "description": "single-value collection This is useful if you need to supply single parameter to SQL query or extract single column from SQL result Parameter example query select from scores where Only Int Result example xs query select id from users forM xs Only id",
        "hierarchy": "Database PostgreSQL Simple Types",
        "module": "Database.PostgreSQL.Simple.Types",
        "name": "Only",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Only",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Types.html#t:PGArray",
      "description": {
        "fct-descr": "\u003cp\u003eWrap a list for use as a PostgreSQL array.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.Types",
        "fct-package": "postgresql-simple",
        "fct-signature": "newtype",
        "fct-source": "src/Database-PostgreSQL-Simple-Types.html#PGArray",
        "fct-type": "newtype",
        "title": "PGArray"
      },
      "index": {
        "description": "Wrap list for use as PostgreSQL array",
        "hierarchy": "Database PostgreSQL Simple Types",
        "module": "Database.PostgreSQL.Simple.Types",
        "name": "PGArray",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "PGArray",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Types.html#t:Query",
      "description": {
        "fct-descr": "\u003cp\u003eA query string. This type is intended to make it difficult to\n construct a SQL query by concatenating string fragments, as that is\n an extremely common way to accidentally introduce SQL injection\n vulnerabilities into an application.\n\u003c/p\u003e\u003cp\u003eThis type is an instance of \u003ccode\u003e\u003ca\u003eIsString\u003c/a\u003e\u003c/code\u003e, so the easiest way to\n construct a query is to enable the \u003ccode\u003eOverloadedStrings\u003c/code\u003e language\n extension and then simply write the query in double quotes.\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE OverloadedStrings #-}\n\n import Database.PostgreSQL.Simple\n\n q :: Query\n q = \"select ?\"\n\u003c/pre\u003e\u003cp\u003eThe underlying type is a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e, and literal Haskell strings\n that contain Unicode characters will be correctly transformed to\n UTF-8.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple.Types",
        "fct-package": "postgresql-simple",
        "fct-signature": "newtype",
        "fct-source": "src/Database-PostgreSQL-Simple-Types.html#Query",
        "fct-type": "newtype",
        "title": "Query"
      },
      "index": {
        "description": "query string This type is intended to make it difficult to construct SQL query by concatenating string fragments as that is an extremely common way to accidentally introduce SQL injection vulnerabilities into an application This type is an instance of IsString so the easiest way to construct query is to enable the OverloadedStrings language extension and then simply write the query in double quotes LANGUAGE OverloadedStrings import Database.PostgreSQL.Simple Query select The underlying type is ByteString and literal Haskell strings that contain Unicode characters will be correctly transformed to UTF-8",
        "hierarchy": "Database PostgreSQL Simple Types",
        "module": "Database.PostgreSQL.Simple.Types",
        "name": "Query",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Types.html#t:Savepoint",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Types",
        "fct-package": "postgresql-simple",
        "fct-signature": "newtype",
        "fct-source": "src/Database-PostgreSQL-Simple-Types.html#Savepoint",
        "fct-type": "newtype",
        "title": "Savepoint"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Types",
        "module": "Database.PostgreSQL.Simple.Types",
        "name": "Savepoint",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Savepoint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Types.html#v::.",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Types",
        "fct-package": "postgresql-simple",
        "fct-signature": "h :. t",
        "fct-source": "src/Database-PostgreSQL-Simple-Types.html#%3A.",
        "fct-type": "function",
        "title": ":."
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Types",
        "module": "Database.PostgreSQL.Simple.Types",
        "name": ":.",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Types.html#v:Binary",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Types",
        "fct-package": "postgresql-simple",
        "fct-signature": "Binary",
        "fct-source": "src/Database-PostgreSQL-Simple-Types.html#Binary",
        "fct-type": "function",
        "title": "Binary"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Types",
        "module": "Database.PostgreSQL.Simple.Types",
        "name": "Binary",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Binary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Types.html#v:Default",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Types",
        "fct-package": "postgresql-simple",
        "fct-signature": "Default",
        "fct-source": "src/Database-PostgreSQL-Simple-Types.html#Default",
        "fct-type": "function",
        "title": "Default"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Types",
        "module": "Database.PostgreSQL.Simple.Types",
        "name": "Default",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Default",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Types.html#v:In",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Types",
        "fct-package": "postgresql-simple",
        "fct-signature": "In a",
        "fct-source": "src/Database-PostgreSQL-Simple-Types.html#In",
        "fct-type": "function",
        "title": "In"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Types",
        "module": "Database.PostgreSQL.Simple.Types",
        "name": "In",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "In",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Types.html#v:Null",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Types",
        "fct-package": "postgresql-simple",
        "fct-signature": "Null",
        "fct-source": "src/Database-PostgreSQL-Simple-Types.html#Null",
        "fct-type": "function",
        "title": "Null"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Types",
        "module": "Database.PostgreSQL.Simple.Types",
        "name": "Null",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Null",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Types.html#v:Oid",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Types",
        "fct-package": "postgresql-simple",
        "fct-signature": "Oid CUInt",
        "fct-type": "function",
        "title": "Oid"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Types",
        "module": "Database.PostgreSQL.Simple.Types",
        "name": "Oid",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Oid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Types.html#v:Only",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Types",
        "fct-package": "postgresql-simple",
        "fct-signature": "Only",
        "fct-source": "src/Database-PostgreSQL-Simple-Types.html#Only",
        "fct-type": "function",
        "title": "Only"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Types",
        "module": "Database.PostgreSQL.Simple.Types",
        "name": "Only",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Only",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Types.html#v:PGArray",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Types",
        "fct-package": "postgresql-simple",
        "fct-signature": "PGArray",
        "fct-source": "src/Database-PostgreSQL-Simple-Types.html#PGArray",
        "fct-type": "function",
        "title": "PGArray"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Types",
        "module": "Database.PostgreSQL.Simple.Types",
        "name": "PGArray",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "PGArray",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Types.html#v:Query",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Types",
        "fct-package": "postgresql-simple",
        "fct-signature": "Query",
        "fct-source": "src/Database-PostgreSQL-Simple-Types.html#Query",
        "fct-type": "function",
        "title": "Query"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Types",
        "module": "Database.PostgreSQL.Simple.Types",
        "name": "Query",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Types.html#v:Savepoint",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple.Types",
        "fct-package": "postgresql-simple",
        "fct-signature": "Savepoint Query",
        "fct-source": "src/Database-PostgreSQL-Simple-Types.html#Savepoint",
        "fct-type": "function",
        "title": "Savepoint"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Types",
        "module": "Database.PostgreSQL.Simple.Types",
        "name": "Savepoint",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Savepoint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Types.html#v:fromBinary",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.Simple.Types",
        "fct-package": "postgresql-simple",
        "fct-signature": "a",
        "fct-source": "src/Database-PostgreSQL-Simple-Types.html#Binary",
        "fct-type": "function",
        "title": "fromBinary"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Types",
        "module": "Database.PostgreSQL.Simple.Types",
        "name": "fromBinary",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Binary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Types.html#v:fromOnly",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.Simple.Types",
        "fct-package": "postgresql-simple",
        "fct-signature": "a",
        "fct-source": "src/Database-PostgreSQL-Simple-Types.html#Only",
        "fct-type": "function",
        "title": "fromOnly"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Types",
        "module": "Database.PostgreSQL.Simple.Types",
        "name": "fromOnly",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Only",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Types.html#v:fromPGArray",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.Simple.Types",
        "fct-package": "postgresql-simple",
        "fct-signature": "[a]",
        "fct-source": "src/Database-PostgreSQL-Simple-Types.html#PGArray",
        "fct-type": "function",
        "title": "fromPGArray"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Types",
        "module": "Database.PostgreSQL.Simple.Types",
        "name": "fromPGArray",
        "normalized": "[a]",
        "package": "postgresql-simple",
        "partial": "PGArray",
        "signature": "[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple-Types.html#v:fromQuery",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.Simple.Types",
        "fct-package": "postgresql-simple",
        "fct-signature": "ByteString",
        "fct-source": "src/Database-PostgreSQL-Simple-Types.html#Query",
        "fct-type": "function",
        "title": "fromQuery"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple Types",
        "module": "Database.PostgreSQL.Simple.Types",
        "name": "fromQuery",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA mid-level client library for the PostgreSQL database, aimed at ease of\n use and high performance.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.PostgreSQL.Simple",
        "fct-package": "postgresql-simple",
        "fct-signature": "module",
        "fct-source": "src/Database-PostgreSQL-Simple.html",
        "fct-type": "module",
        "title": "Simple"
      },
      "index": {
        "description": "mid-level client library for the PostgreSQL database aimed at ease of use and high performance",
        "hierarchy": "Database PostgreSQL Simple",
        "module": "Database.PostgreSQL.Simple",
        "name": "Simple",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Simple",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#t::.",
      "description": {
        "fct-descr": "\u003cp\u003eA composite type to parse your custom data structures without\n having to define dummy newtype wrappers every time.\n\u003c/p\u003e\u003cpre\u003e instance FromRow MyData where ...\n\u003c/pre\u003e\u003cpre\u003e instance FromRow MyData2 where ...\n\u003c/pre\u003e\u003cp\u003ethen I can do the following for free:\n\u003c/p\u003e\u003cpre\u003e\n res \u003c- query' c \u003ca\u003e...\u003c/a\u003e\n forM res $ \\(MyData{..} :. MyData2{..}) -\u003e do\n   ....\n\u003c/pre\u003e",
        "fct-module": "Database.PostgreSQL.Simple",
        "fct-package": "postgresql-simple",
        "fct-signature": "data",
        "fct-source": "src/Database-PostgreSQL-Simple-Types.html#%3A.",
        "fct-type": "data",
        "title": ":."
      },
      "index": {
        "description": "composite type to parse your custom data structures without having to define dummy newtype wrappers every time instance FromRow MyData where instance FromRow MyData2 where then can do the following for free res query forM res MyData MyData2 do",
        "hierarchy": "Database PostgreSQL Simple",
        "module": "Database.PostgreSQL.Simple",
        "name": ":.",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#t:Binary",
      "description": {
        "fct-descr": "\u003cp\u003eWrap binary data for use as a \u003ccode\u003ebytea\u003c/code\u003e value.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple",
        "fct-package": "postgresql-simple",
        "fct-signature": "newtype",
        "fct-source": "src/Database-PostgreSQL-Simple-Types.html#Binary",
        "fct-type": "newtype",
        "title": "Binary"
      },
      "index": {
        "description": "Wrap binary data for use as bytea value",
        "hierarchy": "Database PostgreSQL Simple",
        "module": "Database.PostgreSQL.Simple",
        "name": "Binary",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Binary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#t:ConnectInfo",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple",
        "fct-package": "postgresql-simple",
        "fct-signature": "data",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#ConnectInfo",
        "fct-type": "data",
        "title": "ConnectInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple",
        "module": "Database.PostgreSQL.Simple",
        "name": "ConnectInfo",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Connect Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#t:Connection",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple",
        "fct-package": "postgresql-simple",
        "fct-signature": "data",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#Connection",
        "fct-type": "data",
        "title": "Connection"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple",
        "module": "Database.PostgreSQL.Simple",
        "name": "Connection",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Connection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#t:ExecStatus",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple",
        "fct-package": "postgresql-simple",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "ExecStatus"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple",
        "module": "Database.PostgreSQL.Simple",
        "name": "ExecStatus",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Exec Status",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#t:FetchQuantity",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple",
        "fct-package": "postgresql-simple",
        "fct-signature": "data",
        "fct-source": "src/Database-PostgreSQL-Simple.html#FetchQuantity",
        "fct-type": "data",
        "title": "FetchQuantity"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple",
        "module": "Database.PostgreSQL.Simple",
        "name": "FetchQuantity",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Fetch Quantity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#t:FoldOptions",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple",
        "fct-package": "postgresql-simple",
        "fct-signature": "data",
        "fct-source": "src/Database-PostgreSQL-Simple.html#FoldOptions",
        "fct-type": "data",
        "title": "FoldOptions"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple",
        "module": "Database.PostgreSQL.Simple",
        "name": "FoldOptions",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Fold Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#t:FormatError",
      "description": {
        "fct-descr": "\u003cp\u003eException thrown if a \u003ccode\u003e\u003ca\u003eQuery\u003c/a\u003e\u003c/code\u003e could not be formatted correctly.\n This may occur if the number of '\u003ccode\u003e?\u003c/code\u003e' characters in the query\n string does not match the number of parameters provided.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple",
        "fct-package": "postgresql-simple",
        "fct-signature": "data",
        "fct-source": "src/Database-PostgreSQL-Simple.html#FormatError",
        "fct-type": "data",
        "title": "FormatError"
      },
      "index": {
        "description": "Exception thrown if Query could not be formatted correctly This may occur if the number of characters in the query string does not match the number of parameters provided",
        "hierarchy": "Database PostgreSQL Simple",
        "module": "Database.PostgreSQL.Simple",
        "name": "FormatError",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Format Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#t:FromRow",
      "description": {
        "fct-descr": "\u003cp\u003eA collection type that can be converted from a sequence of fields.\n Instances are provided for tuples up to 10 elements and lists of any length.\n\u003c/p\u003e\u003cp\u003eNote that instances can be defined outside of postgresql-simple,  which is\n often useful.   For example, here's an instance for a user-defined pair:\n\u003c/p\u003e\u003cpre\u003edata User = User { name :: String, fileQuota :: Int }\n\ninstance \u003ccode\u003e\u003ca\u003eFromRow\u003c/a\u003e\u003c/code\u003e User where\n     fromRow = User \u003c$\u003e \u003ccode\u003e\u003ca\u003efield\u003c/a\u003e\u003c/code\u003e \u003c*\u003e \u003ccode\u003e\u003ca\u003efield\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e\u003cp\u003eThe number of calls to \u003ccode\u003e\u003ca\u003efield\u003c/a\u003e\u003c/code\u003e must match the number of fields returned\n in a single row of the query result.  Otherwise,  a \u003ccode\u003e\u003ca\u003eConversionFailed\u003c/a\u003e\u003c/code\u003e\n exception will be thrown.\n\u003c/p\u003e\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003efield\u003c/a\u003e\u003c/code\u003e evaluates it's result to WHNF, so the caveats listed in\n mysql-simple and very early versions of postgresql-simple no longer apply.\n Instead, look at the caveats associated with user-defined implementations\n of \u003ccode\u003e\u003ca\u003efromField\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple",
        "fct-package": "postgresql-simple",
        "fct-signature": "class",
        "fct-source": "src/Database-PostgreSQL-Simple-FromRow.html#FromRow",
        "fct-type": "class",
        "title": "FromRow"
      },
      "index": {
        "description": "collection type that can be converted from sequence of fields Instances are provided for tuples up to elements and lists of any length Note that instances can be defined outside of postgresql-simple which is often useful For example here an instance for user-defined pair data User User name String fileQuota Int instance FromRow User where fromRow User field field The number of calls to field must match the number of fields returned in single row of the query result Otherwise ConversionFailed exception will be thrown Note that field evaluates it result to WHNF so the caveats listed in mysql-simple and very early versions of postgresql-simple no longer apply Instead look at the caveats associated with user-defined implementations of fromField",
        "hierarchy": "Database PostgreSQL Simple",
        "module": "Database.PostgreSQL.Simple",
        "name": "FromRow",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "From Row",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#t:In",
      "description": {
        "fct-descr": "\u003cp\u003eWrap a list of values for use in an \u003ccode\u003eIN\u003c/code\u003e clause.  Replaces a\n single \"\u003ccode\u003e?\u003c/code\u003e\" character with a parenthesized list of rendered\n values.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e query c \"select * from whatever where id in ?\" (Only (In [3,4,5]))\n\u003c/pre\u003e",
        "fct-module": "Database.PostgreSQL.Simple",
        "fct-package": "postgresql-simple",
        "fct-signature": "newtype",
        "fct-source": "src/Database-PostgreSQL-Simple-Types.html#In",
        "fct-type": "newtype",
        "title": "In"
      },
      "index": {
        "description": "Wrap list of values for use in an IN clause Replaces single character with parenthesized list of rendered values Example query select from whatever where id in Only In",
        "hierarchy": "Database PostgreSQL Simple",
        "module": "Database.PostgreSQL.Simple",
        "name": "In",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "In",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#t:Only",
      "description": {
        "fct-descr": "\u003cp\u003eA single-value \"collection\".\n\u003c/p\u003e\u003cp\u003eThis is useful if you need to supply a single parameter to a SQL\n query, or extract a single column from a SQL result.\n\u003c/p\u003e\u003cp\u003eParameter example:\n\u003c/p\u003e\u003cpre\u003equery c \"select x from scores where x \u003e ?\" (\u003ccode\u003e\u003ca\u003eOnly\u003c/a\u003e\u003c/code\u003e (42::Int))\u003c/pre\u003e\u003cp\u003eResult example:\n\u003c/p\u003e\u003cpre\u003exs \u003c- query_ c \"select id from users\"\nforM_ xs $ \\(\u003ccode\u003e\u003ca\u003eOnly\u003c/a\u003e\u003c/code\u003e id) -\u003e {- ... -}\u003c/pre\u003e",
        "fct-module": "Database.PostgreSQL.Simple",
        "fct-package": "postgresql-simple",
        "fct-signature": "newtype",
        "fct-source": "src/Database-PostgreSQL-Simple-Types.html#Only",
        "fct-type": "newtype",
        "title": "Only"
      },
      "index": {
        "description": "single-value collection This is useful if you need to supply single parameter to SQL query or extract single column from SQL result Parameter example query select from scores where Only Int Result example xs query select id from users forM xs Only id",
        "hierarchy": "Database PostgreSQL Simple",
        "module": "Database.PostgreSQL.Simple",
        "name": "Only",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Only",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#t:Query",
      "description": {
        "fct-descr": "\u003cp\u003eA query string. This type is intended to make it difficult to\n construct a SQL query by concatenating string fragments, as that is\n an extremely common way to accidentally introduce SQL injection\n vulnerabilities into an application.\n\u003c/p\u003e\u003cp\u003eThis type is an instance of \u003ccode\u003e\u003ca\u003eIsString\u003c/a\u003e\u003c/code\u003e, so the easiest way to\n construct a query is to enable the \u003ccode\u003eOverloadedStrings\u003c/code\u003e language\n extension and then simply write the query in double quotes.\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE OverloadedStrings #-}\n\n import Database.PostgreSQL.Simple\n\n q :: Query\n q = \"select ?\"\n\u003c/pre\u003e\u003cp\u003eThe underlying type is a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e, and literal Haskell strings\n that contain Unicode characters will be correctly transformed to\n UTF-8.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple",
        "fct-package": "postgresql-simple",
        "fct-signature": "data",
        "fct-source": "src/Database-PostgreSQL-Simple-Types.html#Query",
        "fct-type": "data",
        "title": "Query"
      },
      "index": {
        "description": "query string This type is intended to make it difficult to construct SQL query by concatenating string fragments as that is an extremely common way to accidentally introduce SQL injection vulnerabilities into an application This type is an instance of IsString so the easiest way to construct query is to enable the OverloadedStrings language extension and then simply write the query in double quotes LANGUAGE OverloadedStrings import Database.PostgreSQL.Simple Query select The underlying type is ByteString and literal Haskell strings that contain Unicode characters will be correctly transformed to UTF-8",
        "hierarchy": "Database PostgreSQL Simple",
        "module": "Database.PostgreSQL.Simple",
        "name": "Query",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#t:QueryError",
      "description": {
        "fct-descr": "\u003cp\u003eException thrown if \u003ccode\u003equery\u003c/code\u003e is used to perform an \u003ccode\u003eINSERT\u003c/code\u003e-like\n operation, or \u003ccode\u003eexecute\u003c/code\u003e is used to perform a \u003ccode\u003eSELECT\u003c/code\u003e-like operation.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple",
        "fct-package": "postgresql-simple",
        "fct-signature": "data",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#QueryError",
        "fct-type": "data",
        "title": "QueryError"
      },
      "index": {
        "description": "Exception thrown if query is used to perform an INSERT like operation or execute is used to perform SELECT like operation",
        "hierarchy": "Database PostgreSQL Simple",
        "module": "Database.PostgreSQL.Simple",
        "name": "QueryError",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Query Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#t:ResultError",
      "description": {
        "fct-descr": "\u003cp\u003eException thrown if conversion from a SQL value to a Haskell\n value fails.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple",
        "fct-package": "postgresql-simple",
        "fct-signature": "data",
        "fct-source": "src/Database-PostgreSQL-Simple-FromField.html#ResultError",
        "fct-type": "data",
        "title": "ResultError"
      },
      "index": {
        "description": "Exception thrown if conversion from SQL value to Haskell value fails",
        "hierarchy": "Database PostgreSQL Simple",
        "module": "Database.PostgreSQL.Simple",
        "name": "ResultError",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Result Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#t:SqlError",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple",
        "fct-package": "postgresql-simple",
        "fct-signature": "data",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#SqlError",
        "fct-type": "data",
        "title": "SqlError"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple",
        "module": "Database.PostgreSQL.Simple",
        "name": "SqlError",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Sql Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#t:ToRow",
      "description": {
        "fct-descr": "\u003cp\u003eA collection type that can be turned into a list of rendering\n \u003ccode\u003e\u003ca\u003eAction\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003cp\u003eInstances should use the \u003ccode\u003erender\u003c/code\u003e method of the \u003ccode\u003eParam\u003c/code\u003e class\n to perform conversion of each element of the collection.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple",
        "fct-package": "postgresql-simple",
        "fct-signature": "class",
        "fct-source": "src/Database-PostgreSQL-Simple-ToRow.html#ToRow",
        "fct-type": "class",
        "title": "ToRow"
      },
      "index": {
        "description": "collection type that can be turned into list of rendering Action Instances should use the render method of the Param class to perform conversion of each element of the collection",
        "hierarchy": "Database PostgreSQL Simple",
        "module": "Database.PostgreSQL.Simple",
        "name": "ToRow",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "To Row",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v::.",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple",
        "fct-package": "postgresql-simple",
        "fct-signature": "h :. t",
        "fct-source": "src/Database-PostgreSQL-Simple-Types.html#%3A.",
        "fct-type": "function",
        "title": ":."
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple",
        "module": "Database.PostgreSQL.Simple",
        "name": ":.",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:Automatic",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple",
        "fct-package": "postgresql-simple",
        "fct-signature": "Automatic",
        "fct-source": "src/Database-PostgreSQL-Simple.html#FetchQuantity",
        "fct-type": "function",
        "title": "Automatic"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple",
        "module": "Database.PostgreSQL.Simple",
        "name": "Automatic",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Automatic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:BadResponse",
      "description": {
        "fct-descr": "\u003cp\u003eThe server's response was not understood.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple",
        "fct-package": "postgresql-simple",
        "fct-signature": "BadResponse",
        "fct-type": "function",
        "title": "BadResponse"
      },
      "index": {
        "description": "The server response was not understood",
        "hierarchy": "Database PostgreSQL Simple",
        "module": "Database.PostgreSQL.Simple",
        "name": "BadResponse",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Bad Response",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:Binary",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple",
        "fct-package": "postgresql-simple",
        "fct-signature": "Binary",
        "fct-source": "src/Database-PostgreSQL-Simple-Types.html#Binary",
        "fct-type": "function",
        "title": "Binary"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple",
        "module": "Database.PostgreSQL.Simple",
        "name": "Binary",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Binary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:CommandOk",
      "description": {
        "fct-descr": "\u003cp\u003eSuccessful completion of a\n command returning no data.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple",
        "fct-package": "postgresql-simple",
        "fct-signature": "CommandOk",
        "fct-type": "function",
        "title": "CommandOk"
      },
      "index": {
        "description": "Successful completion of command returning no data",
        "hierarchy": "Database PostgreSQL Simple",
        "module": "Database.PostgreSQL.Simple",
        "name": "CommandOk",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Command Ok",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:ConnectInfo",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple",
        "fct-package": "postgresql-simple",
        "fct-signature": "ConnectInfo",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#ConnectInfo",
        "fct-type": "function",
        "title": "ConnectInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple",
        "module": "Database.PostgreSQL.Simple",
        "name": "ConnectInfo",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Connect Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:CopyIn",
      "description": {
        "fct-descr": "\u003cp\u003eCopy In (to server) data transfer\n started.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple",
        "fct-package": "postgresql-simple",
        "fct-signature": "CopyIn",
        "fct-type": "function",
        "title": "CopyIn"
      },
      "index": {
        "description": "Copy In to server data transfer started",
        "hierarchy": "Database PostgreSQL Simple",
        "module": "Database.PostgreSQL.Simple",
        "name": "CopyIn",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Copy In",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:CopyOut",
      "description": {
        "fct-descr": "\u003cp\u003eCopy Out (from server) data\n transfer started.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple",
        "fct-package": "postgresql-simple",
        "fct-signature": "CopyOut",
        "fct-type": "function",
        "title": "CopyOut"
      },
      "index": {
        "description": "Copy Out from server data transfer started",
        "hierarchy": "Database PostgreSQL Simple",
        "module": "Database.PostgreSQL.Simple",
        "name": "CopyOut",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Copy Out",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:EmptyQuery",
      "description": {
        "fct-descr": "\u003cp\u003eThe string sent to the server was empty.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple",
        "fct-package": "postgresql-simple",
        "fct-signature": "EmptyQuery",
        "fct-type": "function",
        "title": "EmptyQuery"
      },
      "index": {
        "description": "The string sent to the server was empty",
        "hierarchy": "Database PostgreSQL Simple",
        "module": "Database.PostgreSQL.Simple",
        "name": "EmptyQuery",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Empty Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:FatalError",
      "description": {
        "fct-descr": "\u003cp\u003eA fatal error occurred.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple",
        "fct-package": "postgresql-simple",
        "fct-signature": "FatalError",
        "fct-type": "function",
        "title": "FatalError"
      },
      "index": {
        "description": "fatal error occurred",
        "hierarchy": "Database PostgreSQL Simple",
        "module": "Database.PostgreSQL.Simple",
        "name": "FatalError",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Fatal Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:Fixed",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple",
        "fct-package": "postgresql-simple",
        "fct-signature": "Fixed !Int",
        "fct-source": "src/Database-PostgreSQL-Simple.html#FetchQuantity",
        "fct-type": "function",
        "title": "Fixed"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple",
        "module": "Database.PostgreSQL.Simple",
        "name": "Fixed",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Fixed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:FoldOptions",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple",
        "fct-package": "postgresql-simple",
        "fct-signature": "FoldOptions",
        "fct-source": "src/Database-PostgreSQL-Simple.html#FoldOptions",
        "fct-type": "function",
        "title": "FoldOptions"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple",
        "module": "Database.PostgreSQL.Simple",
        "name": "FoldOptions",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Fold Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:In",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple",
        "fct-package": "postgresql-simple",
        "fct-signature": "In a",
        "fct-source": "src/Database-PostgreSQL-Simple-Types.html#In",
        "fct-type": "function",
        "title": "In"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple",
        "module": "Database.PostgreSQL.Simple",
        "name": "In",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "In",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:NonfatalError",
      "description": {
        "fct-descr": "\u003cp\u003eA nonfatal error (a notice or\n warning) occurred.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple",
        "fct-package": "postgresql-simple",
        "fct-signature": "NonfatalError",
        "fct-type": "function",
        "title": "NonfatalError"
      },
      "index": {
        "description": "nonfatal error notice or warning occurred",
        "hierarchy": "Database PostgreSQL Simple",
        "module": "Database.PostgreSQL.Simple",
        "name": "NonfatalError",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Nonfatal Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:Only",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple",
        "fct-package": "postgresql-simple",
        "fct-signature": "Only",
        "fct-source": "src/Database-PostgreSQL-Simple-Types.html#Only",
        "fct-type": "function",
        "title": "Only"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple",
        "module": "Database.PostgreSQL.Simple",
        "name": "Only",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Only",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:SqlError",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple",
        "fct-package": "postgresql-simple",
        "fct-signature": "SqlError",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#SqlError",
        "fct-type": "function",
        "title": "SqlError"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple",
        "module": "Database.PostgreSQL.Simple",
        "name": "SqlError",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Sql Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:TuplesOk",
      "description": {
        "fct-descr": "\u003cp\u003eSuccessful completion of a\n command returning data (such as a\n SELECT or SHOW).\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple",
        "fct-package": "postgresql-simple",
        "fct-signature": "TuplesOk",
        "fct-type": "function",
        "title": "TuplesOk"
      },
      "index": {
        "description": "Successful completion of command returning data such as SELECT or SHOW",
        "hierarchy": "Database PostgreSQL Simple",
        "module": "Database.PostgreSQL.Simple",
        "name": "TuplesOk",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Tuples Ok",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:begin",
      "description": {
        "fct-descr": "\u003cp\u003eBegin a transaction.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple",
        "fct-package": "postgresql-simple",
        "fct-signature": "Connection -\u003e IO ()",
        "fct-source": "src/Database-PostgreSQL-Simple-Transaction.html#begin",
        "fct-type": "function",
        "title": "begin"
      },
      "index": {
        "description": "Begin transaction",
        "hierarchy": "Database PostgreSQL Simple",
        "module": "Database.PostgreSQL.Simple",
        "name": "begin",
        "normalized": "Connection-\u003eIO()",
        "package": "postgresql-simple",
        "partial": "",
        "signature": "Connection-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:close",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple",
        "fct-package": "postgresql-simple",
        "fct-signature": "Connection -\u003e IO ()",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#close",
        "fct-type": "function",
        "title": "close"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple",
        "module": "Database.PostgreSQL.Simple",
        "name": "close",
        "normalized": "Connection-\u003eIO()",
        "package": "postgresql-simple",
        "partial": "",
        "signature": "Connection-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:commit",
      "description": {
        "fct-descr": "\u003cp\u003eCommit a transaction.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple",
        "fct-package": "postgresql-simple",
        "fct-signature": "Connection -\u003e IO ()",
        "fct-source": "src/Database-PostgreSQL-Simple-Transaction.html#commit",
        "fct-type": "function",
        "title": "commit"
      },
      "index": {
        "description": "Commit transaction",
        "hierarchy": "Database PostgreSQL Simple",
        "module": "Database.PostgreSQL.Simple",
        "name": "commit",
        "normalized": "Connection-\u003eIO()",
        "package": "postgresql-simple",
        "partial": "",
        "signature": "Connection-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:connect",
      "description": {
        "fct-descr": "\u003cp\u003eConnect with the given username to the given database. Will throw\n   an exception if it cannot connect.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple",
        "fct-package": "postgresql-simple",
        "fct-signature": "ConnectInfo -\u003e IO Connection",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#connect",
        "fct-type": "function",
        "title": "connect"
      },
      "index": {
        "description": "Connect with the given username to the given database Will throw an exception if it cannot connect",
        "hierarchy": "Database PostgreSQL Simple",
        "module": "Database.PostgreSQL.Simple",
        "name": "connect",
        "normalized": "ConnectInfo-\u003eIO Connection",
        "package": "postgresql-simple",
        "partial": "",
        "signature": "ConnectInfo-\u003eIO Connection"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:connectDatabase",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.Simple",
        "fct-package": "postgresql-simple",
        "fct-signature": "String",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#ConnectInfo",
        "fct-type": "function",
        "title": "connectDatabase"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple",
        "module": "Database.PostgreSQL.Simple",
        "name": "connectDatabase",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Database",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:connectHost",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.Simple",
        "fct-package": "postgresql-simple",
        "fct-signature": "String",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#ConnectInfo",
        "fct-type": "function",
        "title": "connectHost"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple",
        "module": "Database.PostgreSQL.Simple",
        "name": "connectHost",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Host",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:connectPassword",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.Simple",
        "fct-package": "postgresql-simple",
        "fct-signature": "String",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#ConnectInfo",
        "fct-type": "function",
        "title": "connectPassword"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple",
        "module": "Database.PostgreSQL.Simple",
        "name": "connectPassword",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Password",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:connectPort",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.Simple",
        "fct-package": "postgresql-simple",
        "fct-signature": "Word16",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#ConnectInfo",
        "fct-type": "function",
        "title": "connectPort"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple",
        "module": "Database.PostgreSQL.Simple",
        "name": "connectPort",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:connectPostgreSQL",
      "description": {
        "fct-descr": "\u003cp\u003eAttempt to make a connection based on a libpq connection string.\n   See \u003ca\u003ehttp://www.postgresql.org/docs/9.1/static/libpq-connect.html\u003c/a\u003e\n   for more information.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple",
        "fct-package": "postgresql-simple",
        "fct-signature": "ByteString -\u003e IO Connection",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#connectPostgreSQL",
        "fct-type": "function",
        "title": "connectPostgreSQL"
      },
      "index": {
        "description": "Attempt to make connection based on libpq connection string See http www.postgresql.org docs static libpq-connect.html for more information",
        "hierarchy": "Database PostgreSQL Simple",
        "module": "Database.PostgreSQL.Simple",
        "name": "connectPostgreSQL",
        "normalized": "ByteString-\u003eIO Connection",
        "package": "postgresql-simple",
        "partial": "Postgre SQL",
        "signature": "ByteString-\u003eIO Connection"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:connectUser",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.Simple",
        "fct-package": "postgresql-simple",
        "fct-signature": "String",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#ConnectInfo",
        "fct-type": "function",
        "title": "connectUser"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple",
        "module": "Database.PostgreSQL.Simple",
        "name": "connectUser",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "User",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:defaultConnectInfo",
      "description": {
        "fct-descr": "\u003cp\u003eDefault information for setting up a connection.\n\u003c/p\u003e\u003cp\u003eDefaults are as follows:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Server on \u003ccode\u003elocalhost\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e Port on \u003ccode\u003e5432\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e User \u003ccode\u003epostgres\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e No password\n\u003c/li\u003e\u003cli\u003e Database \u003ccode\u003epostgres\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eUse as in the following example:\n\u003c/p\u003e\u003cpre\u003e connect defaultConnectInfo { connectHost = \"db.example.com\" }\n\u003c/pre\u003e",
        "fct-module": "Database.PostgreSQL.Simple",
        "fct-package": "postgresql-simple",
        "fct-signature": "ConnectInfo",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#defaultConnectInfo",
        "fct-type": "function",
        "title": "defaultConnectInfo"
      },
      "index": {
        "description": "Default information for setting up connection Defaults are as follows Server on localhost Port on User postgres No password Database postgres Use as in the following example connect defaultConnectInfo connectHost db.example.com",
        "hierarchy": "Database PostgreSQL Simple",
        "module": "Database.PostgreSQL.Simple",
        "name": "defaultConnectInfo",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Connect Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:defaultFoldOptions",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple",
        "fct-package": "postgresql-simple",
        "fct-signature": "FoldOptions",
        "fct-source": "src/Database-PostgreSQL-Simple.html#defaultFoldOptions",
        "fct-type": "function",
        "title": "defaultFoldOptions"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple",
        "module": "Database.PostgreSQL.Simple",
        "name": "defaultFoldOptions",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Fold Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:execute",
      "description": {
        "fct-descr": "\u003cp\u003eExecute an \u003ccode\u003eINSERT\u003c/code\u003e, \u003ccode\u003eUPDATE\u003c/code\u003e, or other SQL query that is not\n expected to return results.\n\u003c/p\u003e\u003cp\u003eReturns the number of rows affected.\n\u003c/p\u003e\u003cp\u003eThrows \u003ccode\u003e\u003ca\u003eFormatError\u003c/a\u003e\u003c/code\u003e if the query could not be formatted correctly.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple",
        "fct-package": "postgresql-simple",
        "fct-signature": "Connection -\u003e Query -\u003e q -\u003e IO Int64",
        "fct-source": "src/Database-PostgreSQL-Simple.html#execute",
        "fct-type": "function",
        "title": "execute"
      },
      "index": {
        "description": "Execute an INSERT UPDATE or other SQL query that is not expected to return results Returns the number of rows affected Throws FormatError if the query could not be formatted correctly",
        "hierarchy": "Database PostgreSQL Simple",
        "module": "Database.PostgreSQL.Simple",
        "name": "execute",
        "normalized": "Connection-\u003eQuery-\u003ea-\u003eIO Int",
        "package": "postgresql-simple",
        "partial": "",
        "signature": "Connection-\u003eQuery-\u003eq-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:executeMany",
      "description": {
        "fct-descr": "\u003cp\u003eExecute a multi-row \u003ccode\u003eINSERT\u003c/code\u003e, \u003ccode\u003eUPDATE\u003c/code\u003e, or other SQL query that is not\n expected to return results.\n\u003c/p\u003e\u003cp\u003eReturns the number of rows affected.\n\u003c/p\u003e\u003cp\u003eThrows \u003ccode\u003e\u003ca\u003eFormatError\u003c/a\u003e\u003c/code\u003e if the query could not be formatted correctly.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple",
        "fct-package": "postgresql-simple",
        "fct-signature": "Connection -\u003e Query -\u003e [q] -\u003e IO Int64",
        "fct-source": "src/Database-PostgreSQL-Simple.html#executeMany",
        "fct-type": "function",
        "title": "executeMany"
      },
      "index": {
        "description": "Execute multi-row INSERT UPDATE or other SQL query that is not expected to return results Returns the number of rows affected Throws FormatError if the query could not be formatted correctly",
        "hierarchy": "Database PostgreSQL Simple",
        "module": "Database.PostgreSQL.Simple",
        "name": "executeMany",
        "normalized": "Connection-\u003eQuery-\u003e[a]-\u003eIO Int",
        "package": "postgresql-simple",
        "partial": "Many",
        "signature": "Connection-\u003eQuery-\u003e[q]-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:execute_",
      "description": {
        "fct-descr": "\u003cp\u003eA version of \u003ccode\u003eexecute\u003c/code\u003e that does not perform query substitution.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple",
        "fct-package": "postgresql-simple",
        "fct-signature": "Connection -\u003e Query -\u003e IO Int64",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#execute_",
        "fct-type": "function",
        "title": "execute_"
      },
      "index": {
        "description": "version of execute that does not perform query substitution",
        "hierarchy": "Database PostgreSQL Simple",
        "module": "Database.PostgreSQL.Simple",
        "name": "execute_",
        "normalized": "Connection-\u003eQuery-\u003eIO Int",
        "package": "postgresql-simple",
        "partial": "",
        "signature": "Connection-\u003eQuery-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:fetchQuantity",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.Simple",
        "fct-package": "postgresql-simple",
        "fct-signature": "!FetchQuantity",
        "fct-source": "src/Database-PostgreSQL-Simple.html#FoldOptions",
        "fct-type": "function",
        "title": "fetchQuantity"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple",
        "module": "Database.PostgreSQL.Simple",
        "name": "fetchQuantity",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Quantity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:fold",
      "description": {
        "fct-descr": "\u003cp\u003ePerform a \u003ccode\u003eSELECT\u003c/code\u003e or other SQL query that is expected to return\n results. Results are streamed incrementally from the server, and\n consumed via a left fold.\n\u003c/p\u003e\u003cp\u003eWhen dealing with small results, it may be simpler (and perhaps\n faster) to use \u003ccode\u003e\u003ca\u003equery\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e\u003cp\u003eThis fold is \u003cem\u003enot\u003c/em\u003e strict. The stream consumer is responsible for\n forcing the evaluation of its result to avoid space leaks.\n\u003c/p\u003e\u003cp\u003eExceptions that may be thrown:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eFormatError\u003c/a\u003e\u003c/code\u003e: the query string could not be formatted correctly.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eQueryError\u003c/a\u003e\u003c/code\u003e: the result contains no columns (i.e. you should be\n   using \u003ccode\u003e\u003ca\u003eexecute\u003c/a\u003e\u003c/code\u003e instead of \u003ccode\u003e\u003ca\u003equery\u003c/a\u003e\u003c/code\u003e).\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eResultError\u003c/a\u003e\u003c/code\u003e: result conversion failed.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Database.PostgreSQL.Simple",
        "fct-package": "postgresql-simple",
        "fct-signature": "Connection -\u003e Query -\u003e params -\u003e a -\u003e (a -\u003e row -\u003e IO a) -\u003e IO a",
        "fct-source": "src/Database-PostgreSQL-Simple.html#fold",
        "fct-type": "function",
        "title": "fold"
      },
      "index": {
        "description": "Perform SELECT or other SQL query that is expected to return results Results are streamed incrementally from the server and consumed via left fold When dealing with small results it may be simpler and perhaps faster to use query instead This fold is not strict The stream consumer is responsible for forcing the evaluation of its result to avoid space leaks Exceptions that may be thrown FormatError the query string could not be formatted correctly QueryError the result contains no columns i.e you should be using execute instead of query ResultError result conversion failed",
        "hierarchy": "Database PostgreSQL Simple",
        "module": "Database.PostgreSQL.Simple",
        "name": "fold",
        "normalized": "Connection-\u003eQuery-\u003ea-\u003eb-\u003e(b-\u003ec-\u003eIO b)-\u003eIO b",
        "package": "postgresql-simple",
        "partial": "",
        "signature": "Connection-\u003eQuery-\u003eparams-\u003ea-\u003e(a-\u003erow-\u003eIO a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:foldWithOptions",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple",
        "fct-package": "postgresql-simple",
        "fct-signature": "FoldOptions -\u003e Connection -\u003e Query -\u003e params -\u003e a -\u003e (a -\u003e row -\u003e IO a) -\u003e IO a",
        "fct-source": "src/Database-PostgreSQL-Simple.html#foldWithOptions",
        "fct-type": "function",
        "title": "foldWithOptions"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple",
        "module": "Database.PostgreSQL.Simple",
        "name": "foldWithOptions",
        "normalized": "FoldOptions-\u003eConnection-\u003eQuery-\u003ea-\u003eb-\u003e(b-\u003ec-\u003eIO b)-\u003eIO b",
        "package": "postgresql-simple",
        "partial": "With Options",
        "signature": "FoldOptions-\u003eConnection-\u003eQuery-\u003eparams-\u003ea-\u003e(a-\u003erow-\u003eIO a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:foldWithOptions_",
      "description": {
        "fct-module": "Database.PostgreSQL.Simple",
        "fct-package": "postgresql-simple",
        "fct-signature": "FoldOptions-\u003e Connection-\u003e Query-\u003e a-\u003e (a -\u003e r -\u003e IO a)-\u003e IO a",
        "fct-type": "function",
        "title": "foldWithOptions_"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple",
        "module": "Database.PostgreSQL.Simple",
        "name": "foldWithOptions_",
        "normalized": "FoldOptions-\u003eConnection-\u003eQuery-\u003ea-\u003e(a-\u003eb-\u003eIO a)-\u003eIO a",
        "package": "postgresql-simple",
        "partial": "With Options",
        "signature": "FoldOptions-\u003eConnection-\u003eQuery-\u003ea-\u003e(a-\u003er-\u003eIO a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:fold_",
      "description": {
        "fct-descr": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e that does not perform query substitution.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple",
        "fct-package": "postgresql-simple",
        "fct-signature": "Connection-\u003e Query-\u003e a-\u003e (a -\u003e r -\u003e IO a)-\u003e IO a",
        "fct-type": "function",
        "title": "fold_"
      },
      "index": {
        "description": "version of fold that does not perform query substitution",
        "hierarchy": "Database PostgreSQL Simple",
        "module": "Database.PostgreSQL.Simple",
        "name": "fold_",
        "normalized": "Connection-\u003eQuery-\u003ea-\u003e(a-\u003eb-\u003eIO a)-\u003eIO a",
        "package": "postgresql-simple",
        "partial": "",
        "signature": "Connection-\u003eQuery-\u003ea-\u003e(a-\u003er-\u003eIO a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:forEach",
      "description": {
        "fct-descr": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e that does not transform a state value.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple",
        "fct-package": "postgresql-simple",
        "fct-signature": "Connection-\u003e Query-\u003e q-\u003e (r -\u003e IO ())-\u003e IO ()",
        "fct-type": "function",
        "title": "forEach"
      },
      "index": {
        "description": "version of fold that does not transform state value",
        "hierarchy": "Database PostgreSQL Simple",
        "module": "Database.PostgreSQL.Simple",
        "name": "forEach",
        "normalized": "Connection-\u003eQuery-\u003ea-\u003e(b-\u003eIO())-\u003eIO()",
        "package": "postgresql-simple",
        "partial": "Each",
        "signature": "Connection-\u003eQuery-\u003eq-\u003e(r-\u003eIO())-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:forEach_",
      "description": {
        "fct-descr": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003eforEach\u003c/a\u003e\u003c/code\u003e that does not perform query substitution.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple",
        "fct-package": "postgresql-simple",
        "fct-signature": "Connection-\u003e Query-\u003e (r -\u003e IO ())-\u003e IO ()",
        "fct-type": "function",
        "title": "forEach_"
      },
      "index": {
        "description": "version of forEach that does not perform query substitution",
        "hierarchy": "Database PostgreSQL Simple",
        "module": "Database.PostgreSQL.Simple",
        "name": "forEach_",
        "normalized": "Connection-\u003eQuery-\u003e(a-\u003eIO())-\u003eIO()",
        "package": "postgresql-simple",
        "partial": "Each",
        "signature": "Connection-\u003eQuery-\u003e(r-\u003eIO())-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:formatMany",
      "description": {
        "fct-descr": "\u003cp\u003eFormat a query string with a variable number of rows.\n\u003c/p\u003e\u003cp\u003eThis function is exposed to help with debugging and logging. Do not\n use it to prepare queries for execution.\n\u003c/p\u003e\u003cp\u003eThe query string must contain exactly one substitution group,\n identified by the SQL keyword \"\u003ccode\u003eVALUES\u003c/code\u003e\" (case insensitive)\n followed by an \"\u003ccode\u003e(\u003c/code\u003e\" character, a series of one or more \"\u003ccode\u003e?\u003c/code\u003e\"\n characters separated by commas, and a \"\u003ccode\u003e)\u003c/code\u003e\" character. White\n space in a substitution group is permitted.\n\u003c/p\u003e\u003cp\u003eThrows \u003ccode\u003e\u003ca\u003eFormatError\u003c/a\u003e\u003c/code\u003e if the query string could not be formatted\n correctly.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple",
        "fct-package": "postgresql-simple",
        "fct-signature": "Connection -\u003e Query -\u003e [q] -\u003e IO ByteString",
        "fct-source": "src/Database-PostgreSQL-Simple.html#formatMany",
        "fct-type": "function",
        "title": "formatMany"
      },
      "index": {
        "description": "Format query string with variable number of rows This function is exposed to help with debugging and logging Do not use it to prepare queries for execution The query string must contain exactly one substitution group identified by the SQL keyword VALUES case insensitive followed by an character series of one or more characters separated by commas and character White space in substitution group is permitted Throws FormatError if the query string could not be formatted correctly",
        "hierarchy": "Database PostgreSQL Simple",
        "module": "Database.PostgreSQL.Simple",
        "name": "formatMany",
        "normalized": "Connection-\u003eQuery-\u003e[a]-\u003eIO ByteString",
        "package": "postgresql-simple",
        "partial": "Many",
        "signature": "Connection-\u003eQuery-\u003e[q]-\u003eIO ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:formatQuery",
      "description": {
        "fct-descr": "\u003cp\u003eFormat a query string.\n\u003c/p\u003e\u003cp\u003eThis function is exposed to help with debugging and logging. Do not\n use it to prepare queries for execution.\n\u003c/p\u003e\u003cp\u003eString parameters are escaped according to the character set in use\n on the \u003ccode\u003e\u003ca\u003eConnection\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThrows \u003ccode\u003e\u003ca\u003eFormatError\u003c/a\u003e\u003c/code\u003e if the query string could not be formatted\n correctly.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple",
        "fct-package": "postgresql-simple",
        "fct-signature": "Connection -\u003e Query -\u003e q -\u003e IO ByteString",
        "fct-source": "src/Database-PostgreSQL-Simple.html#formatQuery",
        "fct-type": "function",
        "title": "formatQuery"
      },
      "index": {
        "description": "Format query string This function is exposed to help with debugging and logging Do not use it to prepare queries for execution String parameters are escaped according to the character set in use on the Connection Throws FormatError if the query string could not be formatted correctly",
        "hierarchy": "Database PostgreSQL Simple",
        "module": "Database.PostgreSQL.Simple",
        "name": "formatQuery",
        "normalized": "Connection-\u003eQuery-\u003ea-\u003eIO ByteString",
        "package": "postgresql-simple",
        "partial": "Query",
        "signature": "Connection-\u003eQuery-\u003eq-\u003eIO ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:fromBinary",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.Simple",
        "fct-package": "postgresql-simple",
        "fct-signature": "a",
        "fct-source": "src/Database-PostgreSQL-Simple-Types.html#Binary",
        "fct-type": "function",
        "title": "fromBinary"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple",
        "module": "Database.PostgreSQL.Simple",
        "name": "fromBinary",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Binary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:fromOnly",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.Simple",
        "fct-package": "postgresql-simple",
        "fct-signature": "a",
        "fct-source": "src/Database-PostgreSQL-Simple-Types.html#Only",
        "fct-type": "function",
        "title": "fromOnly"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple",
        "module": "Database.PostgreSQL.Simple",
        "name": "fromOnly",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Only",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:postgreSQLConnectionString",
      "description": {
        "fct-descr": "\u003cp\u003eTurns a \u003ccode\u003e\u003ca\u003eConnectInfo\u003c/a\u003e\u003c/code\u003e data structure into a libpq connection string.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple",
        "fct-package": "postgresql-simple",
        "fct-signature": "ConnectInfo -\u003e ByteString",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#postgreSQLConnectionString",
        "fct-type": "function",
        "title": "postgreSQLConnectionString"
      },
      "index": {
        "description": "Turns ConnectInfo data structure into libpq connection string",
        "hierarchy": "Database PostgreSQL Simple",
        "module": "Database.PostgreSQL.Simple",
        "name": "postgreSQLConnectionString",
        "normalized": "ConnectInfo-\u003eByteString",
        "package": "postgresql-simple",
        "partial": "SQLConnection String",
        "signature": "ConnectInfo-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:query",
      "description": {
        "fct-descr": "\u003cp\u003ePerform a \u003ccode\u003eSELECT\u003c/code\u003e or other SQL query that is expected to return\n results. All results are retrieved and converted before this\n function returns.\n\u003c/p\u003e\u003cp\u003eWhen processing large results, this function will consume a lot of\n client-side memory.  Consider using \u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e\u003cp\u003eExceptions that may be thrown:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eFormatError\u003c/a\u003e\u003c/code\u003e: the query string could not be formatted correctly.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eQueryError\u003c/a\u003e\u003c/code\u003e: the result contains no columns (i.e. you should be\n   using \u003ccode\u003e\u003ca\u003eexecute\u003c/a\u003e\u003c/code\u003e instead of \u003ccode\u003e\u003ca\u003equery\u003c/a\u003e\u003c/code\u003e).\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eResultError\u003c/a\u003e\u003c/code\u003e: result conversion failed.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Database.PostgreSQL.Simple",
        "fct-package": "postgresql-simple",
        "fct-signature": "Connection -\u003e Query -\u003e q -\u003e IO [r]",
        "fct-source": "src/Database-PostgreSQL-Simple.html#query",
        "fct-type": "function",
        "title": "query"
      },
      "index": {
        "description": "Perform SELECT or other SQL query that is expected to return results All results are retrieved and converted before this function returns When processing large results this function will consume lot of client-side memory Consider using fold instead Exceptions that may be thrown FormatError the query string could not be formatted correctly QueryError the result contains no columns i.e you should be using execute instead of query ResultError result conversion failed",
        "hierarchy": "Database PostgreSQL Simple",
        "module": "Database.PostgreSQL.Simple",
        "name": "query",
        "normalized": "Connection-\u003eQuery-\u003ea-\u003eIO[b]",
        "package": "postgresql-simple",
        "partial": "",
        "signature": "Connection-\u003eQuery-\u003eq-\u003eIO[r]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:queryWith",
      "description": {
        "fct-descr": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003equery\u003c/a\u003e\u003c/code\u003e taking parser as argument\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple",
        "fct-package": "postgresql-simple",
        "fct-signature": "RowParser r -\u003e Connection -\u003e Query -\u003e q -\u003e IO [r]",
        "fct-source": "src/Database-PostgreSQL-Simple.html#queryWith",
        "fct-type": "function",
        "title": "queryWith"
      },
      "index": {
        "description": "version of query taking parser as argument",
        "hierarchy": "Database PostgreSQL Simple",
        "module": "Database.PostgreSQL.Simple",
        "name": "queryWith",
        "normalized": "RowParser a-\u003eConnection-\u003eQuery-\u003eb-\u003eIO[a]",
        "package": "postgresql-simple",
        "partial": "With",
        "signature": "RowParser r-\u003eConnection-\u003eQuery-\u003eq-\u003eIO[r]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:queryWith_",
      "description": {
        "fct-descr": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003equery_\u003c/a\u003e\u003c/code\u003e taking parser as argument\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple",
        "fct-package": "postgresql-simple",
        "fct-signature": "RowParser r -\u003e Connection -\u003e Query -\u003e IO [r]",
        "fct-source": "src/Database-PostgreSQL-Simple.html#queryWith_",
        "fct-type": "function",
        "title": "queryWith_"
      },
      "index": {
        "description": "version of query taking parser as argument",
        "hierarchy": "Database PostgreSQL Simple",
        "module": "Database.PostgreSQL.Simple",
        "name": "queryWith_",
        "normalized": "RowParser a-\u003eConnection-\u003eQuery-\u003eIO[a]",
        "package": "postgresql-simple",
        "partial": "With",
        "signature": "RowParser r-\u003eConnection-\u003eQuery-\u003eIO[r]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:query_",
      "description": {
        "fct-descr": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003equery\u003c/a\u003e\u003c/code\u003e that does not perform query substitution.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple",
        "fct-package": "postgresql-simple",
        "fct-signature": "Connection -\u003e Query -\u003e IO [r]",
        "fct-source": "src/Database-PostgreSQL-Simple.html#query_",
        "fct-type": "function",
        "title": "query_"
      },
      "index": {
        "description": "version of query that does not perform query substitution",
        "hierarchy": "Database PostgreSQL Simple",
        "module": "Database.PostgreSQL.Simple",
        "name": "query_",
        "normalized": "Connection-\u003eQuery-\u003eIO[a]",
        "package": "postgresql-simple",
        "partial": "",
        "signature": "Connection-\u003eQuery-\u003eIO[r]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:returning",
      "description": {
        "fct-descr": "\u003cp\u003eExecute \u003ccode\u003eINSERT ... RETURNING\u003c/code\u003e, \u003ccode\u003eUPDATE ... RETURNING\u003c/code\u003e, or other SQL\n query that accepts multi-row input and is expected to return results.\n Note that it is possible to write\n    \u003ccode\u003e\u003ccode\u003e\u003ca\u003equery\u003c/a\u003e\u003c/code\u003e conn \u003ca\u003eINSERT ... RETURNING ...\u003c/a\u003e ...\u003c/code\u003e\n in cases where you are only inserting a single row,  and do not need\n functionality analogous to \u003ccode\u003e\u003ca\u003eexecuteMany\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThrows \u003ccode\u003e\u003ca\u003eFormatError\u003c/a\u003e\u003c/code\u003e if the query could not be formatted correctly.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple",
        "fct-package": "postgresql-simple",
        "fct-signature": "Connection -\u003e Query -\u003e [q] -\u003e IO [r]",
        "fct-source": "src/Database-PostgreSQL-Simple.html#returning",
        "fct-type": "function",
        "title": "returning"
      },
      "index": {
        "description": "Execute INSERT RETURNING UPDATE RETURNING or other SQL query that accepts multi-row input and is expected to return results Note that it is possible to write query conn INSERT RETURNING in cases where you are only inserting single row and do not need functionality analogous to executeMany Throws FormatError if the query could not be formatted correctly",
        "hierarchy": "Database PostgreSQL Simple",
        "module": "Database.PostgreSQL.Simple",
        "name": "returning",
        "normalized": "Connection-\u003eQuery-\u003e[a]-\u003eIO[b]",
        "package": "postgresql-simple",
        "partial": "",
        "signature": "Connection-\u003eQuery-\u003e[q]-\u003eIO[r]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:rollback",
      "description": {
        "fct-descr": "\u003cp\u003eRollback a transaction.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple",
        "fct-package": "postgresql-simple",
        "fct-signature": "Connection -\u003e IO ()",
        "fct-source": "src/Database-PostgreSQL-Simple-Transaction.html#rollback",
        "fct-type": "function",
        "title": "rollback"
      },
      "index": {
        "description": "Rollback transaction",
        "hierarchy": "Database PostgreSQL Simple",
        "module": "Database.PostgreSQL.Simple",
        "name": "rollback",
        "normalized": "Connection-\u003eIO()",
        "package": "postgresql-simple",
        "partial": "",
        "signature": "Connection-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:sqlErrorDetail",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.Simple",
        "fct-package": "postgresql-simple",
        "fct-signature": "ByteString",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#SqlError",
        "fct-type": "function",
        "title": "sqlErrorDetail"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple",
        "module": "Database.PostgreSQL.Simple",
        "name": "sqlErrorDetail",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Error Detail",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:sqlErrorHint",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.Simple",
        "fct-package": "postgresql-simple",
        "fct-signature": "ByteString",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#SqlError",
        "fct-type": "function",
        "title": "sqlErrorHint"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple",
        "module": "Database.PostgreSQL.Simple",
        "name": "sqlErrorHint",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Error Hint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:sqlErrorMsg",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.Simple",
        "fct-package": "postgresql-simple",
        "fct-signature": "ByteString",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#SqlError",
        "fct-type": "function",
        "title": "sqlErrorMsg"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple",
        "module": "Database.PostgreSQL.Simple",
        "name": "sqlErrorMsg",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Error Msg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:sqlExecStatus",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.Simple",
        "fct-package": "postgresql-simple",
        "fct-signature": "ExecStatus",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#SqlError",
        "fct-type": "function",
        "title": "sqlExecStatus"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple",
        "module": "Database.PostgreSQL.Simple",
        "name": "sqlExecStatus",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Exec Status",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:sqlState",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.Simple",
        "fct-package": "postgresql-simple",
        "fct-signature": "ByteString",
        "fct-source": "src/Database-PostgreSQL-Simple-Internal.html#SqlError",
        "fct-type": "function",
        "title": "sqlState"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple",
        "module": "Database.PostgreSQL.Simple",
        "name": "sqlState",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:transactionMode",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.Simple",
        "fct-package": "postgresql-simple",
        "fct-signature": "!TransactionMode",
        "fct-source": "src/Database-PostgreSQL-Simple.html#FoldOptions",
        "fct-type": "function",
        "title": "transactionMode"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Simple",
        "module": "Database.PostgreSQL.Simple",
        "name": "transactionMode",
        "normalized": "",
        "package": "postgresql-simple",
        "partial": "Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:withSavepoint",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a savepoint, and roll back to it if an error occurs.  This may only\n be used inside of a transaction, and provides a sort of\n \"nested transaction\".\n\u003c/p\u003e\u003cp\u003eSee \u003ca\u003ehttp://www.postgresql.org/docs/current/static/sql-savepoint.html\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple",
        "fct-package": "postgresql-simple",
        "fct-signature": "Connection -\u003e IO a -\u003e IO a",
        "fct-source": "src/Database-PostgreSQL-Simple-Transaction.html#withSavepoint",
        "fct-type": "function",
        "title": "withSavepoint"
      },
      "index": {
        "description": "Create savepoint and roll back to it if an error occurs This may only be used inside of transaction and provides sort of nested transaction See http www.postgresql.org docs current static sql-savepoint.html",
        "hierarchy": "Database PostgreSQL Simple",
        "module": "Database.PostgreSQL.Simple",
        "name": "withSavepoint",
        "normalized": "Connection-\u003eIO a-\u003eIO a",
        "package": "postgresql-simple",
        "partial": "Savepoint",
        "signature": "Connection-\u003eIO a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-simple/docs/Database-PostgreSQL-Simple.html#v:withTransaction",
      "description": {
        "fct-descr": "\u003cp\u003eExecute an action inside a SQL transaction.\n\u003c/p\u003e\u003cp\u003eThis function initiates a transaction with a \"\u003ccode\u003ebegin\n transaction\u003c/code\u003e\" statement, then executes the supplied action.  If\n the action succeeds, the transaction will be completed with\n \u003ccode\u003e\u003ca\u003ecommit\u003c/a\u003e\u003c/code\u003e before this function returns.\n\u003c/p\u003e\u003cp\u003eIf the action throws \u003cem\u003eany\u003c/em\u003e kind of exception (not just a\n PostgreSQL-related exception), the transaction will be rolled back using\n \u003ccode\u003e\u003ca\u003erollback\u003c/a\u003e\u003c/code\u003e, then the exception will be rethrown.\n\u003c/p\u003e\u003cp\u003eFor nesting transactions, see \u003ccode\u003e\u003ca\u003ewithSavepoint\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Simple",
        "fct-package": "postgresql-simple",
        "fct-signature": "Connection -\u003e IO a -\u003e IO a",
        "fct-source": "src/Database-PostgreSQL-Simple-Transaction.html#withTransaction",
        "fct-type": "function",
        "title": "withTransaction"
      },
      "index": {
        "description": "Execute an action inside SQL transaction This function initiates transaction with begin transaction statement then executes the supplied action If the action succeeds the transaction will be completed with commit before this function returns If the action throws any kind of exception not just PostgreSQL-related exception the transaction will be rolled back using rollback then the exception will be rethrown For nesting transactions see withSavepoint",
        "hierarchy": "Database PostgreSQL Simple",
        "module": "Database.PostgreSQL.Simple",
        "name": "withTransaction",
        "normalized": "Connection-\u003eIO a-\u003eIO a",
        "package": "postgresql-simple",
        "partial": "Transaction",
        "signature": "Connection-\u003eIO a-\u003eIO a"
      }
    }
  }
]