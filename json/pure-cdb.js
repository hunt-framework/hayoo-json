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
        "word": "pure-cdb"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PureCDB.Internal",
          "name": "Internal",
          "package": "pure-cdb",
          "source": "src/Database-PureCDB-Internal.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Database PureCDB Internal",
          "module": "Database.PureCDB.Internal",
          "name": "Internal",
          "package": "pure-cdb",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pure-cdb/docs/Database-PureCDB-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead handle for the database.\n\u003c/p\u003e",
          "module": "Database.PureCDB.Internal",
          "name": "ReadCDB",
          "package": "pure-cdb",
          "source": "src/Database-PureCDB-Internal.html#ReadCDB",
          "type": "data"
        },
        "index": {
          "description": "Read handle for the database",
          "hierarchy": "Database PureCDB Internal",
          "module": "Database.PureCDB.Internal",
          "name": "ReadCDB",
          "package": "pure-cdb",
          "partial": "Read CDB",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pure-cdb/docs/Database-PureCDB-Internal.html#t:ReadCDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PureCDB.Internal",
          "name": "TOCHash",
          "package": "pure-cdb",
          "source": "src/Database-PureCDB-Internal.html#TOCHash",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database PureCDB Internal",
          "module": "Database.PureCDB.Internal",
          "name": "TOCHash",
          "package": "pure-cdb",
          "partial": "TOCHash",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pure-cdb/docs/Database-PureCDB-Internal.html#t:TOCHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PureCDB.Internal",
          "name": "ReadCDB",
          "package": "pure-cdb",
          "signature": "ReadCDB",
          "source": "src/Database-PureCDB-Internal.html#ReadCDB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PureCDB Internal",
          "module": "Database.PureCDB.Internal",
          "name": "ReadCDB",
          "package": "pure-cdb",
          "partial": "Read CDB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pure-cdb/docs/Database-PureCDB-Internal.html#v:ReadCDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PureCDB.Internal",
          "name": "TOCHash",
          "package": "pure-cdb",
          "signature": "TOCHash",
          "source": "src/Database-PureCDB-Internal.html#TOCHash",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PureCDB Internal",
          "module": "Database.PureCDB.Internal",
          "name": "TOCHash",
          "package": "pure-cdb",
          "partial": "TOCHash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pure-cdb/docs/Database-PureCDB-Internal.html#v:TOCHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PureCDB.Internal",
          "name": "cdbHash",
          "package": "pure-cdb",
          "signature": "ByteString -\u003e Word32",
          "source": "src/Database-PureCDB-Internal.html#cdbHash",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PureCDB Internal",
          "module": "Database.PureCDB.Internal",
          "name": "cdbHash",
          "normalized": "ByteString-\u003eWord",
          "package": "pure-cdb",
          "partial": "Hash",
          "signature": "ByteString-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pure-cdb/docs/Database-PureCDB-Internal.html#v:cdbHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PureCDB.Internal",
          "name": "coalesceHash",
          "package": "pure-cdb",
          "signature": "a -\u003e [(a, b)] -\u003e IntMap [(a, b)]",
          "source": "src/Database-PureCDB-Internal.html#coalesceHash",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PureCDB Internal",
          "module": "Database.PureCDB.Internal",
          "name": "coalesceHash",
          "normalized": "a-\u003e[(a,b)]-\u003eIntMap[(a,b)]",
          "package": "pure-cdb",
          "partial": "Hash",
          "signature": "a-\u003e[(a,b)]-\u003eIntMap[(a,b)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pure-cdb/docs/Database-PureCDB-Internal.html#v:coalesceHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PureCDB.Internal",
          "name": "createHashVector",
          "package": "pure-cdb",
          "signature": "a -\u003e (a, b) -\u003e [(a, b)] -\u003e Vector (a, b)",
          "source": "src/Database-PureCDB-Internal.html#createHashVector",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PureCDB Internal",
          "module": "Database.PureCDB.Internal",
          "name": "createHashVector",
          "normalized": "a-\u003e(a,b)-\u003e[(a,b)]-\u003eVector(a,b)",
          "package": "pure-cdb",
          "partial": "Hash Vector",
          "signature": "a-\u003e(a,b)-\u003e[(a,b)]-\u003eVector(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pure-cdb/docs/Database-PureCDB-Internal.html#v:createHashVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PureCDB.Internal",
          "name": "hLength",
          "package": "pure-cdb",
          "signature": "Word32",
          "source": "src/Database-PureCDB-Internal.html#TOCHash",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PureCDB Internal",
          "module": "Database.PureCDB.Internal",
          "name": "hLength",
          "package": "pure-cdb",
          "partial": "Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pure-cdb/docs/Database-PureCDB-Internal.html#v:hLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PureCDB.Internal",
          "name": "hPosition",
          "package": "pure-cdb",
          "signature": "Word32",
          "source": "src/Database-PureCDB-Internal.html#TOCHash",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PureCDB Internal",
          "module": "Database.PureCDB.Internal",
          "name": "hPosition",
          "package": "pure-cdb",
          "partial": "Position",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pure-cdb/docs/Database-PureCDB-Internal.html#v:hPosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PureCDB.Internal",
          "name": "hashSlot",
          "package": "pure-cdb",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Database-PureCDB-Internal.html#hashSlot",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PureCDB Internal",
          "module": "Database.PureCDB.Internal",
          "name": "hashSlot",
          "normalized": "a-\u003ea-\u003ea",
          "package": "pure-cdb",
          "partial": "Slot",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pure-cdb/docs/Database-PureCDB-Internal.html#v:hashSlot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PureCDB.Internal",
          "name": "layoutHash",
          "package": "pure-cdb",
          "signature": "Int -\u003e IntMap [a] -\u003e Maybe [(Int, a)]",
          "source": "src/Database-PureCDB-Internal.html#layoutHash",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PureCDB Internal",
          "module": "Database.PureCDB.Internal",
          "name": "layoutHash",
          "normalized": "Int-\u003eIntMap[a]-\u003eMaybe[(Int,a)]",
          "package": "pure-cdb",
          "partial": "Hash",
          "signature": "Int-\u003eIntMap[a]-\u003eMaybe[(Int,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pure-cdb/docs/Database-PureCDB-Internal.html#v:layoutHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PureCDB.Internal",
          "name": "rHandle",
          "package": "pure-cdb",
          "signature": "Handle",
          "source": "src/Database-PureCDB-Internal.html#ReadCDB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PureCDB Internal",
          "module": "Database.PureCDB.Internal",
          "name": "rHandle",
          "package": "pure-cdb",
          "partial": "Handle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pure-cdb/docs/Database-PureCDB-Internal.html#v:rHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PureCDB.Internal",
          "name": "rTOC",
          "package": "pure-cdb",
          "signature": "Vector TOCHash",
          "source": "src/Database-PureCDB-Internal.html#ReadCDB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PureCDB Internal",
          "module": "Database.PureCDB.Internal",
          "name": "rTOC",
          "package": "pure-cdb",
          "partial": "TOC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pure-cdb/docs/Database-PureCDB-Internal.html#v:rTOC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PureCDB.Internal",
          "name": "tocFind",
          "package": "pure-cdb",
          "signature": "ReadCDB -\u003e ByteString -\u003e (TOCHash, Word32)",
          "source": "src/Database-PureCDB-Internal.html#tocFind",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PureCDB Internal",
          "module": "Database.PureCDB.Internal",
          "name": "tocFind",
          "normalized": "ReadCDB-\u003eByteString-\u003e(TOCHash,Word)",
          "package": "pure-cdb",
          "partial": "Find",
          "signature": "ReadCDB-\u003eByteString-\u003e(TOCHash,Word)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pure-cdb/docs/Database-PureCDB-Internal.html#v:tocFind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PureCDB.Internal",
          "name": "tocIndex",
          "package": "pure-cdb",
          "signature": "a -\u003e Int",
          "source": "src/Database-PureCDB-Internal.html#tocIndex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PureCDB Internal",
          "module": "Database.PureCDB.Internal",
          "name": "tocIndex",
          "normalized": "a-\u003eInt",
          "package": "pure-cdb",
          "partial": "Index",
          "signature": "a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pure-cdb/docs/Database-PureCDB-Internal.html#v:tocIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA library for reading and writing CDB (Constant Database) files.\n\u003c/p\u003e\u003cp\u003eCDB files are immutable key-value stores, designed for extremely fast and\n memory-efficient construction and lookup. They can be as large as 4GB, and\n at no point in their construction or use must all data be loaded into\n memory. CDB files can contain multiple values for a given key.\n\u003c/p\u003e\u003cp\u003eFor more information on the CDB file format, please see:\n     \u003ca\u003ehttp://cr.yp.to/cdb.html\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eHere's how you make new CDB file:\n\u003c/p\u003e\u003cpre\u003e import qualified Data.ByteString.Char8 as B\n import Database.PureCDB\n\n makeIt :: IO ()\n makeIt = makeCDB (do\n       addBS (B.pack \"foo\") (B.pack \"bar\")\n       addBS (B.pack \"foo\") (B.pack \"baz\")) \"foo.cdb\"\n\u003c/pre\u003e\u003cp\u003eYou can later use it as in:\n\u003c/p\u003e\u003cpre\u003e getIt :: IO [ByteString]\n getIt = do\n       f \u003c- openCDB \"foo.cdb\"\n       getBS f (B.pack \"foo\")\n       closeCDB \"foo.cdb\"\n\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003egetIt\u003c/code\u003e returns [ \"bar\", \"baz\" ] in unspecified order.\n\u003c/p\u003e\u003cp\u003eNote that \u003ccode\u003epure-cdb\u003c/code\u003e works on strict \u003ccode\u003eByteString'\u003c/code\u003es only for now.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.PureCDB",
          "name": "PureCDB",
          "package": "pure-cdb",
          "source": "src/Database-PureCDB.html",
          "type": "module"
        },
        "index": {
          "description": "library for reading and writing CDB Constant Database files CDB files are immutable key-value stores designed for extremely fast and memory-efficient construction and lookup They can be as large as GB and at no point in their construction or use must all data be loaded into memory CDB files can contain multiple values for given key For more information on the CDB file format please see http cr.yp.to cdb.html Here how you make new CDB file import qualified Data.ByteString.Char8 as import Database.PureCDB makeIt IO makeIt makeCDB do addBS B.pack foo B.pack bar addBS B.pack foo B.pack baz foo.cdb You can later use it as in getIt IO ByteString getIt do openCDB foo.cdb getBS B.pack foo closeCDB foo.cdb getIt returns bar baz in unspecified order Note that pure-cdb works on strict ByteString only for now",
          "hierarchy": "Database PureCDB",
          "module": "Database.PureCDB",
          "name": "PureCDB",
          "package": "pure-cdb",
          "partial": "Pure CDB",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pure-cdb/docs/Database-PureCDB.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead handle for the database.\n\u003c/p\u003e",
          "module": "Database.PureCDB",
          "name": "ReadCDB",
          "package": "pure-cdb",
          "source": "src/Database-PureCDB-Internal.html#ReadCDB",
          "type": "data"
        },
        "index": {
          "description": "Read handle for the database",
          "hierarchy": "Database PureCDB",
          "module": "Database.PureCDB",
          "name": "ReadCDB",
          "package": "pure-cdb",
          "partial": "Read CDB",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pure-cdb/docs/Database-PureCDB.html#t:ReadCDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite context monad transformer.\n\u003c/p\u003e",
          "module": "Database.PureCDB",
          "name": "WriteCDB",
          "package": "pure-cdb",
          "source": "src/Database-PureCDB.html#WriteCDB",
          "type": "data"
        },
        "index": {
          "description": "Write context monad transformer",
          "hierarchy": "Database PureCDB",
          "module": "Database.PureCDB",
          "name": "WriteCDB",
          "package": "pure-cdb",
          "partial": "Write CDB",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pure-cdb/docs/Database-PureCDB.html#t:WriteCDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds key and value to the CDB database.\n\u003c/p\u003e",
          "module": "Database.PureCDB",
          "name": "addBS",
          "package": "pure-cdb",
          "signature": "ByteString -\u003e ByteString -\u003e WriteCDB m ()",
          "source": "src/Database-PureCDB.html#addBS",
          "type": "function"
        },
        "index": {
          "description": "Adds key and value to the CDB database",
          "hierarchy": "Database PureCDB",
          "module": "Database.PureCDB",
          "name": "addBS",
          "normalized": "ByteString-\u003eByteString-\u003eWriteCDB a()",
          "package": "pure-cdb",
          "partial": "BS",
          "signature": "ByteString-\u003eByteString-\u003eWriteCDB m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pure-cdb/docs/Database-PureCDB.html#v:addBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCloses the database.\n\u003c/p\u003e",
          "module": "Database.PureCDB",
          "name": "closeCDB",
          "package": "pure-cdb",
          "signature": "ReadCDB -\u003e IO ()",
          "source": "src/Database-PureCDB.html#closeCDB",
          "type": "function"
        },
        "index": {
          "description": "Closes the database",
          "hierarchy": "Database PureCDB",
          "module": "Database.PureCDB",
          "name": "closeCDB",
          "normalized": "ReadCDB-\u003eIO()",
          "package": "pure-cdb",
          "partial": "CDB",
          "signature": "ReadCDB-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pure-cdb/docs/Database-PureCDB.html#v:closeCDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFetches key from the database.\n\u003c/p\u003e",
          "module": "Database.PureCDB",
          "name": "getBS",
          "package": "pure-cdb",
          "signature": "ReadCDB -\u003e ByteString -\u003e IO [ByteString]",
          "source": "src/Database-PureCDB.html#getBS",
          "type": "function"
        },
        "index": {
          "description": "Fetches key from the database",
          "hierarchy": "Database PureCDB",
          "module": "Database.PureCDB",
          "name": "getBS",
          "normalized": "ReadCDB-\u003eByteString-\u003eIO[ByteString]",
          "package": "pure-cdb",
          "partial": "BS",
          "signature": "ReadCDB-\u003eByteString-\u003eIO[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pure-cdb/docs/Database-PureCDB.html#v:getBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns WriteCDB monad transformer to make the database.\n\u003c/p\u003e",
          "module": "Database.PureCDB",
          "name": "makeCDB",
          "package": "pure-cdb",
          "signature": "WriteCDB m a -\u003e FilePath -\u003e m a",
          "source": "src/Database-PureCDB.html#makeCDB",
          "type": "function"
        },
        "index": {
          "description": "Runs WriteCDB monad transformer to make the database",
          "hierarchy": "Database PureCDB",
          "module": "Database.PureCDB",
          "name": "makeCDB",
          "normalized": "WriteCDB a b-\u003eFilePath-\u003ea b",
          "package": "pure-cdb",
          "partial": "CDB",
          "signature": "WriteCDB m a-\u003eFilePath-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pure-cdb/docs/Database-PureCDB.html#v:makeCDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpens CDB database.\n\u003c/p\u003e",
          "module": "Database.PureCDB",
          "name": "openCDB",
          "package": "pure-cdb",
          "signature": "FilePath -\u003e IO ReadCDB",
          "source": "src/Database-PureCDB.html#openCDB",
          "type": "function"
        },
        "index": {
          "description": "Opens CDB database",
          "hierarchy": "Database PureCDB",
          "module": "Database.PureCDB",
          "name": "openCDB",
          "normalized": "FilePath-\u003eIO ReadCDB",
          "package": "pure-cdb",
          "partial": "CDB",
          "signature": "FilePath-\u003eIO ReadCDB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pure-cdb/docs/Database-PureCDB.html#v:openCDB"
      }
    }
  ]
]