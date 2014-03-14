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
        "word": "hs-cdb"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.CDB.Packable",
          "name": "Packable",
          "package": "hs-cdb",
          "source": "src/Database-CDB-Packable.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Database CDB Packable",
          "module": "Database.CDB.Packable",
          "name": "Packable",
          "package": "hs-cdb",
          "partial": "Packable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hs-cdb/docs/Database-CDB-Packable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn instance of \u003ccode\u003e\u003ca\u003ePackable\u003c/a\u003e\u003c/code\u003e can be losslessly transformed into a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.CDB.Packable",
          "name": "Packable",
          "package": "hs-cdb",
          "source": "src/Database-CDB-Packable.html#Packable",
          "type": "class"
        },
        "index": {
          "description": "An instance of Packable can be losslessly transformed into ByteString",
          "hierarchy": "Database CDB Packable",
          "module": "Database.CDB.Packable",
          "name": "Packable",
          "package": "hs-cdb",
          "partial": "Packable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hs-cdb/docs/Database-CDB-Packable.html#t:Packable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn instance of \u003ccode\u003e\u003ca\u003eUnpackable\u003c/a\u003e\u003c/code\u003e can be losslessly transformed from a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.CDB.Packable",
          "name": "Unpackable",
          "package": "hs-cdb",
          "source": "src/Database-CDB-Packable.html#Unpackable",
          "type": "class"
        },
        "index": {
          "description": "An instance of Unpackable can be losslessly transformed from ByteString",
          "hierarchy": "Database CDB Packable",
          "module": "Database.CDB.Packable",
          "name": "Unpackable",
          "package": "hs-cdb",
          "partial": "Unpackable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hs-cdb/docs/Database-CDB-Packable.html#t:Unpackable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.CDB.Packable",
          "name": "pack",
          "package": "hs-cdb",
          "signature": "k -\u003e ByteString",
          "source": "src/Database-CDB-Packable.html#pack",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database CDB Packable",
          "module": "Database.CDB.Packable",
          "name": "pack",
          "normalized": "a-\u003eByteString",
          "package": "hs-cdb",
          "signature": "k-\u003eByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hs-cdb/docs/Database-CDB-Packable.html#v:pack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.CDB.Packable",
          "name": "unpack",
          "package": "hs-cdb",
          "signature": "ByteString -\u003e v",
          "source": "src/Database-CDB-Packable.html#unpack",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database CDB Packable",
          "module": "Database.CDB.Packable",
          "name": "unpack",
          "normalized": "ByteString-\u003ea",
          "package": "hs-cdb",
          "signature": "ByteString-\u003ev",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hs-cdb/docs/Database-CDB-Packable.html#v:unpack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.CDB.Read",
          "name": "Read",
          "package": "hs-cdb",
          "source": "src/Database-CDB-Read.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Database CDB Read",
          "module": "Database.CDB.Read",
          "name": "Read",
          "package": "hs-cdb",
          "partial": "Read",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hs-cdb/docs/Database-CDB-Read.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInternal representation of a CDB file on disk.\n\u003c/p\u003e",
          "module": "Database.CDB.Read",
          "name": "CDB",
          "package": "hs-cdb",
          "source": "src/Database-CDB-Read.html#CDB",
          "type": "data"
        },
        "index": {
          "description": "Internal representation of CDB file on disk",
          "hierarchy": "Database CDB Read",
          "module": "Database.CDB.Read",
          "name": "CDB",
          "package": "hs-cdb",
          "partial": "CDB",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-cdb/docs/Database-CDB-Read.html#t:CDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the number of values a CDB has for a given key.\n\u003c/p\u003e",
          "module": "[\"Database.CDB.Read\",\"Database.CDB\"]",
          "name": "cdbCount",
          "package": "hs-cdb",
          "signature": "CDB -\u003e k -\u003e Int",
          "source": "src/Database-CDB-Read.html#cdbCount",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hs-cdb/docs/Database-CDB-Read.html#v:cdbCount\",\"http://hackage.haskell.org/package/hs-cdb/docs/Database-CDB.html#v:cdbCount\"]"
        },
        "index": {
          "description": "Returns the number of values CDB has for given key",
          "hierarchy": "Database CDB Read",
          "module": "Database.CDB.Read",
          "name": "cdbCount",
          "normalized": "CDB-\u003ea-\u003eInt",
          "package": "hs-cdb",
          "partial": "Count",
          "signature": "CDB-\u003ek-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-cdb/docs/Database-CDB-Read.html#v:cdbCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinds the first entry associated with a key in a CDB.\n\u003c/p\u003e",
          "module": "[\"Database.CDB.Read\",\"Database.CDB\"]",
          "name": "cdbGet",
          "package": "hs-cdb",
          "signature": "CDB -\u003e k -\u003e Maybe v",
          "source": "src/Database-CDB-Read.html#cdbGet",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hs-cdb/docs/Database-CDB-Read.html#v:cdbGet\",\"http://hackage.haskell.org/package/hs-cdb/docs/Database-CDB.html#v:cdbGet\"]"
        },
        "index": {
          "description": "Finds the first entry associated with key in CDB",
          "hierarchy": "Database CDB Read",
          "module": "Database.CDB.Read",
          "name": "cdbGet",
          "normalized": "CDB-\u003ea-\u003eMaybe b",
          "package": "hs-cdb",
          "partial": "Get",
          "signature": "CDB-\u003ek-\u003eMaybe v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-cdb/docs/Database-CDB-Read.html#v:cdbGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinds all entries associated with a key in a CDB.\n\u003c/p\u003e",
          "module": "[\"Database.CDB.Read\",\"Database.CDB\"]",
          "name": "cdbGetAll",
          "package": "hs-cdb",
          "signature": "CDB -\u003e k -\u003e [v]",
          "source": "src/Database-CDB-Read.html#cdbGetAll",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hs-cdb/docs/Database-CDB-Read.html#v:cdbGetAll\",\"http://hackage.haskell.org/package/hs-cdb/docs/Database-CDB.html#v:cdbGetAll\"]"
        },
        "index": {
          "description": "Finds all entries associated with key in CDB",
          "hierarchy": "Database CDB Read",
          "module": "Database.CDB.Read",
          "name": "cdbGetAll",
          "normalized": "CDB-\u003ea-\u003e[b]",
          "package": "hs-cdb",
          "partial": "Get All",
          "signature": "CDB-\u003ek-\u003e[v]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-cdb/docs/Database-CDB-Read.html#v:cdbGetAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns True if the CDB has a value associated with the given key.\n\u003c/p\u003e",
          "module": "[\"Database.CDB.Read\",\"Database.CDB\"]",
          "name": "cdbHasKey",
          "package": "hs-cdb",
          "signature": "CDB -\u003e k -\u003e Bool",
          "source": "src/Database-CDB-Read.html#cdbHasKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hs-cdb/docs/Database-CDB-Read.html#v:cdbHasKey\",\"http://hackage.haskell.org/package/hs-cdb/docs/Database-CDB.html#v:cdbHasKey\"]"
        },
        "index": {
          "description": "Returns True if the CDB has value associated with the given key",
          "hierarchy": "Database CDB Read",
          "module": "Database.CDB.Read",
          "name": "cdbHasKey",
          "normalized": "CDB-\u003ea-\u003eBool",
          "package": "hs-cdb",
          "partial": "Has Key",
          "signature": "CDB-\u003ek-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-cdb/docs/Database-CDB-Read.html#v:cdbHasKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoads a CDB from a file.\n\u003c/p\u003e",
          "module": "[\"Database.CDB.Read\",\"Database.CDB\"]",
          "name": "cdbInit",
          "package": "hs-cdb",
          "signature": "FilePath -\u003e IO CDB",
          "source": "src/Database-CDB-Read.html#cdbInit",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hs-cdb/docs/Database-CDB-Read.html#v:cdbInit\",\"http://hackage.haskell.org/package/hs-cdb/docs/Database-CDB.html#v:cdbInit\"]"
        },
        "index": {
          "description": "Loads CDB from file",
          "hierarchy": "Database CDB Read",
          "module": "Database.CDB.Read",
          "name": "cdbInit",
          "normalized": "FilePath-\u003eIO CDB",
          "package": "hs-cdb",
          "partial": "Init",
          "signature": "FilePath-\u003eIO CDB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-cdb/docs/Database-CDB-Read.html#v:cdbInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.CDB.Util",
          "name": "Util",
          "package": "hs-cdb",
          "source": "src/Database-CDB-Util.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Database CDB Util",
          "module": "Database.CDB.Util",
          "name": "Util",
          "package": "hs-cdb",
          "partial": "Util",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hs-cdb/docs/Database-CDB-Util.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.CDB.Util",
          "name": "cdbHash",
          "package": "hs-cdb",
          "signature": "ByteString -\u003e Word32",
          "source": "src/Database-CDB-Util.html#cdbHash",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database CDB Util",
          "module": "Database.CDB.Util",
          "name": "cdbHash",
          "normalized": "ByteString-\u003eWord",
          "package": "hs-cdb",
          "partial": "Hash",
          "signature": "ByteString-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-cdb/docs/Database-CDB-Util.html#v:cdbHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.CDB.Write",
          "name": "Write",
          "package": "hs-cdb",
          "source": "src/Database-CDB-Write.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Database CDB Write",
          "module": "Database.CDB.Write",
          "name": "Write",
          "package": "hs-cdb",
          "partial": "Write",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hs-cdb/docs/Database-CDB-Write.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.CDB.Write",
          "name": "CDBMake",
          "package": "hs-cdb",
          "source": "src/Database-CDB-Write.html#CDBMake",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database CDB Write",
          "module": "Database.CDB.Write",
          "name": "CDBMake",
          "package": "hs-cdb",
          "partial": "CDBMake",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hs-cdb/docs/Database-CDB-Write.html#t:CDBMake"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds a given key-value pair to the CDB being built.\n\u003c/p\u003e",
          "module": "[\"Database.CDB.Write\",\"Database.CDB\"]",
          "name": "cdbAdd",
          "package": "hs-cdb",
          "signature": "k -\u003e v -\u003e CDBMake",
          "source": "src/Database-CDB-Write.html#cdbAdd",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hs-cdb/docs/Database-CDB-Write.html#v:cdbAdd\",\"http://hackage.haskell.org/package/hs-cdb/docs/Database-CDB.html#v:cdbAdd\"]"
        },
        "index": {
          "description": "Adds given key-value pair to the CDB being built",
          "hierarchy": "Database CDB Write",
          "module": "Database.CDB.Write",
          "name": "cdbAdd",
          "normalized": "a-\u003eb-\u003eCDBMake",
          "package": "hs-cdb",
          "partial": "Add",
          "signature": "k-\u003ev-\u003eCDBMake",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-cdb/docs/Database-CDB-Write.html#v:cdbAdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a list of key-value pairs to the CDB being built.\n\u003c/p\u003e",
          "module": "[\"Database.CDB.Write\",\"Database.CDB\"]",
          "name": "cdbAddMany",
          "package": "hs-cdb",
          "signature": "[(k, v)] -\u003e CDBMake",
          "source": "src/Database-CDB-Write.html#cdbAddMany",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hs-cdb/docs/Database-CDB-Write.html#v:cdbAddMany\",\"http://hackage.haskell.org/package/hs-cdb/docs/Database-CDB.html#v:cdbAddMany\"]"
        },
        "index": {
          "description": "Add list of key-value pairs to the CDB being built",
          "hierarchy": "Database CDB Write",
          "module": "Database.CDB.Write",
          "name": "cdbAddMany",
          "normalized": "[(a,b)]-\u003eCDBMake",
          "package": "hs-cdb",
          "partial": "Add Many",
          "signature": "[(k,v)]-\u003eCDBMake",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-cdb/docs/Database-CDB-Write.html#v:cdbAddMany"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a CDB as described inside the supplied CDBMake computation.\n  During construction, it will be written to a temporary file and then\n  moved over top of the given file atomically.\n\u003c/p\u003e",
          "module": "[\"Database.CDB.Write\",\"Database.CDB\"]",
          "name": "cdbMake",
          "package": "hs-cdb",
          "signature": "FilePath -\u003e CDBMake -\u003e IO ()",
          "source": "src/Database-CDB-Write.html#cdbMake",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hs-cdb/docs/Database-CDB-Write.html#v:cdbMake\",\"http://hackage.haskell.org/package/hs-cdb/docs/Database-CDB.html#v:cdbMake\"]"
        },
        "index": {
          "description": "Construct CDB as described inside the supplied CDBMake computation During construction it will be written to temporary file and then moved over top of the given file atomically",
          "hierarchy": "Database CDB Write",
          "module": "Database.CDB.Write",
          "name": "cdbMake",
          "normalized": "FilePath-\u003eCDBMake-\u003eIO()",
          "package": "hs-cdb",
          "partial": "Make",
          "signature": "FilePath-\u003eCDBMake-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-cdb/docs/Database-CDB-Write.html#v:cdbMake"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA library for reading and writing CDB (Constant Database) files.\n\u003c/p\u003e\u003cp\u003eCDB files are immutable key-value stores, designed for extremely fast and\n memory-efficient construction and lookup. They can be as large as 4GB, and\n at no point in their construction or use must all data be loaded into\n memory. CDB files can contain multiple values for a given key.\n\u003c/p\u003e\u003cp\u003eFor more information on the CDB file format, please see:\n     \u003ca\u003ehttp://cr.yp.to/cdb.html\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eUsing \u003ccode\u003ehs-cdb\u003c/code\u003e should be fairly straightforward. Here's a simple example:\n\u003c/p\u003e\u003cpre\u003e    printStuff :: IO ()\n    printStuff = do\n      cdb \u003c- cdbInit \"my.cdb\"\n      let foo = cdbGet cdb \"foo\"\n      let bars = cdbGetAll cdb \"bar\"\n      maybe (putStrLn \"Not found\") putStrLn foo\n      mapM_ putStrLn bars\n\u003c/pre\u003e\u003cp\u003eThe CDB will be automatically cleaned up by the garbage collector after use.\n\u003c/p\u003e\u003cp\u003eThe only sticking point may be the use of the \u003ccode\u003e\u003ca\u003ePackable\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eUnpackable\u003c/a\u003e\u003c/code\u003e\n classes. This allows the \u003ccode\u003ehs-cdb\u003c/code\u003e interface to be both generic (so your CDB\n can store effectively any kind of data) but also convenient in the common\n case of plaintext data. Internally, \u003ccode\u003ehs-cdb\u003c/code\u003e uses \u003ccode\u003eByteString\u003c/code\u003es, but it will\n automatically pack and unpack keys and values to suit the types you're using\n in your program. In particular, in an instance is provided for \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e, so\n \u003ccode\u003ehs-cdb\u003c/code\u003e can use \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es as keys and values transparently.\n\u003c/p\u003e\u003cp\u003eWriting a CDB is just as straightforward:\n\u003c/p\u003e\u003cpre\u003e    makeCDB :: IO ()\n    makeCDB = cdbMake \"my.cdb\" $ do\n      cdbAdd \"foo\" \"this is the data associated with foo\"\n      cdbAddMany [(\"bar1\", \"bar1data\"), (\"bar2\", \"bar2data\")]\n\u003c/pre\u003e\u003cp\u003eAgain, \u003ccode\u003ehs-cdb\u003c/code\u003e automatically closes the files after use. Moreover, in CDB\n tradition, \u003ccode\u003ehs-cdb\u003c/code\u003e actually creates a CDB named \u003ccode\u003efile.cdb\u003c/code\u003e by first writing \n it to \u003ccode\u003efile.cdb.tmp\u003c/code\u003e, and then atomically renaming it over \u003ccode\u003efile.cdb\u003c/code\u003e. This\n means that readers never need to pause when you're regenerating a CDB.\n\u003c/p\u003e\u003cp\u003eNote that the CDBMake monad is nothing more than a State wrapper around the\n IO monad, so you can use IO commands with liftIO from Control.Monad.State.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.CDB",
          "name": "CDB",
          "package": "hs-cdb",
          "source": "src/Database-CDB.html",
          "type": "module"
        },
        "index": {
          "description": "library for reading and writing CDB Constant Database files CDB files are immutable key-value stores designed for extremely fast and memory-efficient construction and lookup They can be as large as GB and at no point in their construction or use must all data be loaded into memory CDB files can contain multiple values for given key For more information on the CDB file format please see http cr.yp.to cdb.html Using hs-cdb should be fairly straightforward Here simple example printStuff IO printStuff do cdb cdbInit my.cdb let foo cdbGet cdb foo let bars cdbGetAll cdb bar maybe putStrLn Not found putStrLn foo mapM putStrLn bars The CDB will be automatically cleaned up by the garbage collector after use The only sticking point may be the use of the Packable and Unpackable classes This allows the hs-cdb interface to be both generic so your CDB can store effectively any kind of data but also convenient in the common case of plaintext data Internally hs-cdb uses ByteString but it will automatically pack and unpack keys and values to suit the types you re using in your program In particular in an instance is provided for String so hs-cdb can use String as keys and values transparently Writing CDB is just as straightforward makeCDB IO makeCDB cdbMake my.cdb do cdbAdd foo this is the data associated with foo cdbAddMany bar1 bar1data bar2 bar2data Again hs-cdb automatically closes the files after use Moreover in CDB tradition hs-cdb actually creates CDB named file.cdb by first writing it to file.cdb.tmp and then atomically renaming it over file.cdb This means that readers never need to pause when you re regenerating CDB Note that the CDBMake monad is nothing more than State wrapper around the IO monad so you can use IO commands with liftIO from Control.Monad.State",
          "hierarchy": "Database CDB",
          "module": "Database.CDB",
          "name": "CDB",
          "package": "hs-cdb",
          "partial": "CDB",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hs-cdb/docs/Database-CDB.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInternal representation of a CDB file on disk.\n\u003c/p\u003e",
          "module": "Database.CDB",
          "name": "CDB",
          "package": "hs-cdb",
          "source": "src/Database-CDB-Read.html#CDB",
          "type": "data"
        },
        "index": {
          "description": "Internal representation of CDB file on disk",
          "hierarchy": "Database CDB",
          "module": "Database.CDB",
          "name": "CDB",
          "package": "hs-cdb",
          "partial": "CDB",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-cdb/docs/Database-CDB.html#t:CDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn instance of \u003ccode\u003e\u003ca\u003ePackable\u003c/a\u003e\u003c/code\u003e can be losslessly transformed into a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.CDB",
          "name": "Packable",
          "package": "hs-cdb",
          "source": "src/Database-CDB-Packable.html#Packable",
          "type": "class"
        },
        "index": {
          "description": "An instance of Packable can be losslessly transformed into ByteString",
          "hierarchy": "Database CDB",
          "module": "Database.CDB",
          "name": "Packable",
          "package": "hs-cdb",
          "partial": "Packable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hs-cdb/docs/Database-CDB.html#t:Packable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn instance of \u003ccode\u003e\u003ca\u003eUnpackable\u003c/a\u003e\u003c/code\u003e can be losslessly transformed from a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.CDB",
          "name": "Unpackable",
          "package": "hs-cdb",
          "source": "src/Database-CDB-Packable.html#Unpackable",
          "type": "class"
        },
        "index": {
          "description": "An instance of Unpackable can be losslessly transformed from ByteString",
          "hierarchy": "Database CDB",
          "module": "Database.CDB",
          "name": "Unpackable",
          "package": "hs-cdb",
          "partial": "Unpackable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hs-cdb/docs/Database-CDB.html#t:Unpackable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.CDB",
          "name": "pack",
          "package": "hs-cdb",
          "signature": "k -\u003e ByteString",
          "source": "src/Database-CDB-Packable.html#pack",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database CDB",
          "module": "Database.CDB",
          "name": "pack",
          "normalized": "a-\u003eByteString",
          "package": "hs-cdb",
          "signature": "k-\u003eByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hs-cdb/docs/Database-CDB.html#v:pack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.CDB",
          "name": "unpack",
          "package": "hs-cdb",
          "signature": "ByteString -\u003e v",
          "source": "src/Database-CDB-Packable.html#unpack",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database CDB",
          "module": "Database.CDB",
          "name": "unpack",
          "normalized": "ByteString-\u003ea",
          "package": "hs-cdb",
          "signature": "ByteString-\u003ev",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hs-cdb/docs/Database-CDB.html#v:unpack"
      }
    }
  ]
]