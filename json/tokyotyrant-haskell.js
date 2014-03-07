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
        "word": "tokyotyrant-haskell"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a thin FFI binding to the libtokyotyrant C library\n   shipped with Mikio Hirabayashi's Tokyo\n   Tyrant. (\u003ca\u003ehttp://tokyocabinet.sourceforge.net/tyrantdoc/\u003c/a\u003e)\n\u003c/p\u003e\u003cp\u003eIt's intended to be imported qualified, e.g.:\n   \u003ccode\u003e\n   import qualified Database.TokyoTyrant.FFI as TT\n   \u003c/code\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.TokyoTyrant.FFI",
          "name": "FFI",
          "package": "tokyotyrant-haskell",
          "source": "src/Database-TokyoTyrant-FFI.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides thin FFI binding to the libtokyotyrant library shipped with Mikio Hirabayashi Tokyo Tyrant http tokyocabinet.sourceforge.net tyrantdoc It intended to be imported qualified e.g import qualified Database.TokyoTyrant.FFI as TT",
          "hierarchy": "Database TokyoTyrant FFI",
          "module": "Database.TokyoTyrant.FFI",
          "name": "FFI",
          "package": "tokyotyrant-haskell",
          "partial": "FFI",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tokyotyrant-haskell/docs/Database-TokyoTyrant-FFI.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Tokyo Tyrant connection type. Wraps the \u003ccode\u003eTCRDB\u003c/code\u003e type from the C\n   library.\n\u003c/p\u003e",
          "module": "Database.TokyoTyrant.FFI",
          "name": "Connection",
          "package": "tokyotyrant-haskell",
          "source": "src/Database-TokyoTyrant-FFI.html#Connection",
          "type": "data"
        },
        "index": {
          "description": "Tokyo Tyrant connection type Wraps the TCRDB type from the library",
          "hierarchy": "Database TokyoTyrant FFI",
          "module": "Database.TokyoTyrant.FFI",
          "name": "Connection",
          "package": "tokyotyrant-haskell",
          "partial": "Connection",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tokyotyrant-haskell/docs/Database-TokyoTyrant-FFI.html#t:Connection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClose a connection to Tokyo Tyrant\n\u003c/p\u003e",
          "module": "Database.TokyoTyrant.FFI",
          "name": "close",
          "package": "tokyotyrant-haskell",
          "signature": "Connection -\u003e IO ()",
          "source": "src/Database-TokyoTyrant-FFI.html#close",
          "type": "function"
        },
        "index": {
          "description": "Close connection to Tokyo Tyrant",
          "hierarchy": "Database TokyoTyrant FFI",
          "module": "Database.TokyoTyrant.FFI",
          "name": "close",
          "normalized": "Connection-\u003eIO()",
          "package": "tokyotyrant-haskell",
          "signature": "Connection-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tokyotyrant-haskell/docs/Database-TokyoTyrant-FFI.html#v:close"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete a value from the DB\n\u003c/p\u003e",
          "module": "Database.TokyoTyrant.FFI",
          "name": "delete",
          "package": "tokyotyrant-haskell",
          "signature": "Connection-\u003e ByteString-\u003e IO (Either String ())",
          "type": "function"
        },
        "index": {
          "description": "Delete value from the DB",
          "hierarchy": "Database TokyoTyrant FFI",
          "module": "Database.TokyoTyrant.FFI",
          "name": "delete",
          "normalized": "Connection-\u003eByteString-\u003eIO(Either String())",
          "package": "tokyotyrant-haskell",
          "signature": "Connection-\u003eByteString-\u003eIO(Either String())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tokyotyrant-haskell/docs/Database-TokyoTyrant-FFI.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSearch keys by prefix. Returns a list of matching keys.\n\u003c/p\u003e",
          "module": "Database.TokyoTyrant.FFI",
          "name": "fwmkeys",
          "package": "tokyotyrant-haskell",
          "signature": "Connection-\u003e ByteString-\u003e Int-\u003e IO (Either String [ByteString])",
          "type": "function"
        },
        "index": {
          "description": "Search keys by prefix Returns list of matching keys",
          "hierarchy": "Database TokyoTyrant FFI",
          "module": "Database.TokyoTyrant.FFI",
          "name": "fwmkeys",
          "normalized": "Connection-\u003eByteString-\u003eInt-\u003eIO(Either String[ByteString])",
          "package": "tokyotyrant-haskell",
          "signature": "Connection-\u003eByteString-\u003eInt-\u003eIO(Either String[ByteString])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tokyotyrant-haskell/docs/Database-TokyoTyrant-FFI.html#v:fwmkeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a value from the database\n\u003c/p\u003e",
          "module": "Database.TokyoTyrant.FFI",
          "name": "get",
          "package": "tokyotyrant-haskell",
          "signature": "Connection-\u003e ByteString-\u003e IO (Either String (Maybe ByteString))",
          "type": "function"
        },
        "index": {
          "description": "Get value from the database",
          "hierarchy": "Database TokyoTyrant FFI",
          "module": "Database.TokyoTyrant.FFI",
          "name": "get",
          "normalized": "Connection-\u003eByteString-\u003eIO(Either String(Maybe ByteString))",
          "package": "tokyotyrant-haskell",
          "signature": "Connection-\u003eByteString-\u003eIO(Either String(Maybe ByteString))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tokyotyrant-haskell/docs/Database-TokyoTyrant-FFI.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet multiple values from the database. On success, returns `Right kvps`.\n\u003c/p\u003e",
          "module": "Database.TokyoTyrant.FFI",
          "name": "mget",
          "package": "tokyotyrant-haskell",
          "signature": "Connection-\u003e [ByteString]-\u003e IO (Either String [(ByteString, ByteString)])",
          "type": "function"
        },
        "index": {
          "description": "Get multiple values from the database On success returns Right kvps",
          "hierarchy": "Database TokyoTyrant FFI",
          "module": "Database.TokyoTyrant.FFI",
          "name": "mget",
          "normalized": "Connection-\u003e[ByteString]-\u003eIO(Either String[(ByteString,ByteString)])",
          "package": "tokyotyrant-haskell",
          "signature": "Connection-\u003e[ByteString]-\u003eIO(Either String[(ByteString,ByteString)])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tokyotyrant-haskell/docs/Database-TokyoTyrant-FFI.html#v:mget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePut multiple values to the database.\n\u003c/p\u003e",
          "module": "Database.TokyoTyrant.FFI",
          "name": "mput",
          "package": "tokyotyrant-haskell",
          "signature": "Connection-\u003e [(ByteString, ByteString)]-\u003e IO (Either String ())",
          "type": "function"
        },
        "index": {
          "description": "Put multiple values to the database",
          "hierarchy": "Database TokyoTyrant FFI",
          "module": "Database.TokyoTyrant.FFI",
          "name": "mput",
          "normalized": "Connection-\u003e[(ByteString,ByteString)]-\u003eIO(Either String())",
          "package": "tokyotyrant-haskell",
          "signature": "Connection-\u003e[(ByteString,ByteString)]-\u003eIO(Either String())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tokyotyrant-haskell/docs/Database-TokyoTyrant-FFI.html#v:mput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpen a connection to Tokyo Tyrant.\n\u003c/p\u003e",
          "module": "Database.TokyoTyrant.FFI",
          "name": "open",
          "package": "tokyotyrant-haskell",
          "signature": "ByteString-\u003e Int-\u003e IO (Either String Connection)",
          "type": "function"
        },
        "index": {
          "description": "Open connection to Tokyo Tyrant",
          "hierarchy": "Database TokyoTyrant FFI",
          "module": "Database.TokyoTyrant.FFI",
          "name": "open",
          "normalized": "ByteString-\u003eInt-\u003eIO(Either String Connection)",
          "package": "tokyotyrant-haskell",
          "signature": "ByteString-\u003eInt-\u003eIO(Either String Connection)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tokyotyrant-haskell/docs/Database-TokyoTyrant-FFI.html#v:open"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStore a value in the database (destructive, overwrites any existing\n   value)\n\u003c/p\u003e",
          "module": "Database.TokyoTyrant.FFI",
          "name": "put",
          "package": "tokyotyrant-haskell",
          "signature": "Connection-\u003e ByteString-\u003e ByteString-\u003e IO (Either String ())",
          "type": "function"
        },
        "index": {
          "description": "Store value in the database destructive overwrites any existing value",
          "hierarchy": "Database TokyoTyrant FFI",
          "module": "Database.TokyoTyrant.FFI",
          "name": "put",
          "normalized": "Connection-\u003eByteString-\u003eByteString-\u003eIO(Either String())",
          "package": "tokyotyrant-haskell",
          "signature": "Connection-\u003eByteString-\u003eByteString-\u003eIO(Either String())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tokyotyrant-haskell/docs/Database-TokyoTyrant-FFI.html#v:put"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStore a value in the database (non-destructive, does nothing if the key\n   already exists)\n\u003c/p\u003e",
          "module": "Database.TokyoTyrant.FFI",
          "name": "putKeep",
          "package": "tokyotyrant-haskell",
          "signature": "Connection-\u003e ByteString-\u003e ByteString-\u003e IO (Either String ())",
          "type": "function"
        },
        "index": {
          "description": "Store value in the database non-destructive does nothing if the key already exists",
          "hierarchy": "Database TokyoTyrant FFI",
          "module": "Database.TokyoTyrant.FFI",
          "name": "putKeep",
          "normalized": "Connection-\u003eByteString-\u003eByteString-\u003eIO(Either String())",
          "package": "tokyotyrant-haskell",
          "partial": "Keep",
          "signature": "Connection-\u003eByteString-\u003eByteString-\u003eIO(Either String())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tokyotyrant-haskell/docs/Database-TokyoTyrant-FFI.html#v:putKeep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete all KVPs in the database.\n\u003c/p\u003e",
          "module": "Database.TokyoTyrant.FFI",
          "name": "vanish",
          "package": "tokyotyrant-haskell",
          "signature": "Connection -\u003e IO (Either String ())",
          "source": "src/Database-TokyoTyrant-FFI.html#vanish",
          "type": "function"
        },
        "index": {
          "description": "Delete all KVPs in the database",
          "hierarchy": "Database TokyoTyrant FFI",
          "module": "Database.TokyoTyrant.FFI",
          "name": "vanish",
          "normalized": "Connection-\u003eIO(Either String())",
          "package": "tokyotyrant-haskell",
          "signature": "Connection-\u003eIO(Either String())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tokyotyrant-haskell/docs/Database-TokyoTyrant-FFI.html#v:vanish"
      }
    }
  ]
]