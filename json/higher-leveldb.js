[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/higher-leveldb/docs/Database-LevelDB-Higher.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHigher LevelDB provides a rich monadic API for working with leveldb (\u003ca\u003ehttp://code.google.com/p/leveldb\u003c/a\u003e) databases. It uses\n the leveldb-haskell bindings to the C++ library. The LevelDBT transformer is\n a Reader that maintains a database context with the open database as well as\n default read and write options. It also manages a concept called a KeySpace, which is a bucket\n scheme that provides a low (storage) overhead named identifier to segregate data. Finally it wraps a \u003ccode\u003e\u003ca\u003eResourceT\u003c/a\u003e\u003c/code\u003e\n which is required for use of leveldb-haskell functions.\n\u003c/p\u003e\u003cp\u003eThe other major feature is the scan function and its ScanQuery structure that provides a\n map / fold abstraction over the Iterator exposed by leveldb-haskell.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.LevelDB.Higher",
        "fct-package": "higher-leveldb",
        "fct-signature": "module",
        "fct-type": "module",
        "title": "Higher"
      },
      "index": {
        "description": "Higher LevelDB provides rich monadic API for working with leveldb http code.google.com leveldb databases It uses the leveldb-haskell bindings to the library The LevelDBT transformer is Reader that maintains database context with the open database as well as default read and write options It also manages concept called KeySpace which is bucket scheme that provides low storage overhead named identifier to segregate data Finally it wraps ResourceT which is required for use of leveldb-haskell functions The other major feature is the scan function and its ScanQuery structure that provides map fold abstraction over the Iterator exposed by leveldb-haskell",
        "hierarchy": "Database LevelDB Higher",
        "module": "Database.LevelDB.Higher",
        "name": "Higher",
        "normalized": "",
        "package": "higher-leveldb",
        "partial": "Higher",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/higher-leveldb/docs/Database-LevelDB-Higher.html#t:Item",
      "description": {
        "fct-descr": "\u003cp\u003eThe basic unit of storage is a Key/Value pair.\n\u003c/p\u003e",
        "fct-module": "Database.LevelDB.Higher",
        "fct-package": "higher-leveldb",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "Item"
      },
      "index": {
        "description": "The basic unit of storage is Key Value pair",
        "hierarchy": "Database LevelDB Higher",
        "module": "Database.LevelDB.Higher",
        "name": "Item",
        "normalized": "",
        "package": "higher-leveldb",
        "partial": "Item",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/higher-leveldb/docs/Database-LevelDB-Higher.html#t:Key",
      "description": {
        "fct-module": "Database.LevelDB.Higher",
        "fct-package": "higher-leveldb",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "Key"
      },
      "index": {
        "description": "",
        "hierarchy": "Database LevelDB Higher",
        "module": "Database.LevelDB.Higher",
        "name": "Key",
        "normalized": "",
        "package": "higher-leveldb",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/higher-leveldb/docs/Database-LevelDB-Higher.html#t:KeySpace",
      "description": {
        "fct-descr": "\u003cp\u003eA KeySpace is similar concept to a \"bucket\" in other libraries and database systems.\n The ByteString for KeySpace can be arbitrarily long without performance impact because\n the system maps the KeySpace name to a 4-byte KeySpaceId internally which is preprended to each Key.\n KeySpaces are cheap and plentiful and indeed with this library you cannot escape them\n (you can supply an empty ByteString to use a default KeySpace, but it is still used).\n One intended use case is to use the full\n Key of a \u003ca\u003eparent\u003c/a\u003e as the KeySpace of its children (instance data in a time-series for example).\n This lets you scan over a range-based key without passing over any unneeded items.\n\u003c/p\u003e",
        "fct-module": "Database.LevelDB.Higher",
        "fct-package": "higher-leveldb",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "KeySpace"
      },
      "index": {
        "description": "KeySpace is similar concept to bucket in other libraries and database systems The ByteString for KeySpace can be arbitrarily long without performance impact because the system maps the KeySpace name to byte KeySpaceId internally which is preprended to each Key KeySpaces are cheap and plentiful and indeed with this library you cannot escape them you can supply an empty ByteString to use default KeySpace but it is still used One intended use case is to use the full Key of parent as the KeySpace of its children instance data in time-series for example This lets you scan over range-based key without passing over any unneeded items",
        "hierarchy": "Database LevelDB Higher",
        "module": "Database.LevelDB.Higher",
        "name": "KeySpace",
        "normalized": "",
        "package": "higher-leveldb",
        "partial": "Key Space",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/higher-leveldb/docs/Database-LevelDB-Higher.html#t:KeySpaceId",
      "description": {
        "fct-module": "Database.LevelDB.Higher",
        "fct-package": "higher-leveldb",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "KeySpaceId"
      },
      "index": {
        "description": "",
        "hierarchy": "Database LevelDB Higher",
        "module": "Database.LevelDB.Higher",
        "name": "KeySpaceId",
        "normalized": "",
        "package": "higher-leveldb",
        "partial": "Key Space Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/higher-leveldb/docs/Database-LevelDB-Higher.html#t:LevelDB",
      "description": {
        "fct-descr": "\u003cp\u003ealias for LevelDBT IO - useful if you aren't building a custom stack.\n\u003c/p\u003e",
        "fct-module": "Database.LevelDB.Higher",
        "fct-package": "higher-leveldb",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "LevelDB"
      },
      "index": {
        "description": "alias for LevelDBT IO useful if you aren building custom stack",
        "hierarchy": "Database LevelDB Higher",
        "module": "Database.LevelDB.Higher",
        "name": "LevelDB",
        "normalized": "",
        "package": "higher-leveldb",
        "partial": "Level DB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/higher-leveldb/docs/Database-LevelDB-Higher.html#t:LevelDBT",
      "description": {
        "fct-descr": "\u003cp\u003eLevelDBT Transformer provides a context for database operations\n provided in this module.\n\u003c/p\u003e\u003cp\u003eThis transformer has the same constraints as \u003ccode\u003e\u003ca\u003eResourceT\u003c/a\u003e\u003c/code\u003e as it wraps\n \u003ccode\u003e\u003ca\u003eResourceT\u003c/a\u003e\u003c/code\u003e along with a \u003ccode\u003eDBContext\u003c/code\u003e \u003ccode\u003e\u003ca\u003eReader\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf you aren't building a custom monad stack you can just use the \u003ccode\u003e\u003ca\u003eLevelDB\u003c/a\u003e\u003c/code\u003e alias.\n\u003c/p\u003e",
        "fct-module": "Database.LevelDB.Higher",
        "fct-package": "higher-leveldb",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "LevelDBT"
      },
      "index": {
        "description": "LevelDBT Transformer provides context for database operations provided in this module This transformer has the same constraints as ResourceT as it wraps ResourceT along with DBContext Reader If you aren building custom monad stack you can just use the LevelDB alias",
        "hierarchy": "Database LevelDB Higher",
        "module": "Database.LevelDB.Higher",
        "name": "LevelDBT",
        "normalized": "",
        "package": "higher-leveldb",
        "partial": "Level DBT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/higher-leveldb/docs/Database-LevelDB-Higher.html#t:MonadLevelDB",
      "description": {
        "fct-descr": "\u003cp\u003eMonadLevelDB class used by all the public functions in this module.\n\u003c/p\u003e",
        "fct-module": "Database.LevelDB.Higher",
        "fct-package": "higher-leveldb",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "MonadLevelDB"
      },
      "index": {
        "description": "MonadLevelDB class used by all the public functions in this module",
        "hierarchy": "Database LevelDB Higher",
        "module": "Database.LevelDB.Higher",
        "name": "MonadLevelDB",
        "normalized": "",
        "package": "higher-leveldb",
        "partial": "Monad Level DB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/higher-leveldb/docs/Database-LevelDB-Higher.html#t:MonadResourceBase",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003eMonad\u003c/code\u003e which can be used as a base for a \u003ccode\u003eResourceT\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003eResourceT\u003c/code\u003e has some restrictions on its base monad:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003erunResourceT\u003c/code\u003e requires an instance of \u003ccode\u003eMonadBaseControl IO\u003c/code\u003e.\n * \u003ccode\u003eMonadResource\u003c/code\u003e requires an instance of \u003ccode\u003eMonadThrow\u003c/code\u003e, \u003ccode\u003eMonadUnsafeIO\u003c/code\u003e, \u003ccode\u003eMonadIO\u003c/code\u003e, and \u003ccode\u003eApplicative\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eWhile any instance of \u003ccode\u003eMonadBaseControl IO\u003c/code\u003e should be an instance of the\n other classes, this is not guaranteed by the type system (e.g., you may have\n a transformer in your stack with does not implement \u003ccode\u003eMonadThrow\u003c/code\u003e). Ideally,\n we would like to simply create an alias for the five type classes listed,\n but this is not possible with GHC currently.\n\u003c/p\u003e\u003cp\u003eInstead, this typeclass acts as a proxy for the other five. Its only purpose\n is to make your type signatures shorter.\n\u003c/p\u003e\u003cp\u003eNote that earlier versions of \u003ccode\u003econduit\u003c/code\u003e had a typeclass \u003ccode\u003eResourceIO\u003c/code\u003e. This\n fulfills much the same role.\n\u003c/p\u003e\u003cp\u003eSince 0.3.2\n\u003c/p\u003e",
        "fct-module": "Database.LevelDB.Higher",
        "fct-package": "higher-leveldb",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "MonadResourceBase"
      },
      "index": {
        "description": "Monad which can be used as base for ResourceT ResourceT has some restrictions on its base monad runResourceT requires an instance of MonadBaseControl IO MonadResource requires an instance of MonadThrow MonadUnsafeIO MonadIO and Applicative While any instance of MonadBaseControl IO should be an instance of the other classes this is not guaranteed by the type system e.g you may have transformer in your stack with does not implement MonadThrow Ideally we would like to simply create an alias for the five type classes listed but this is not possible with GHC currently Instead this typeclass acts as proxy for the other five Its only purpose is to make your type signatures shorter Note that earlier versions of conduit had typeclass ResourceIO This fulfills much the same role Since",
        "hierarchy": "Database LevelDB Higher",
        "module": "Database.LevelDB.Higher",
        "name": "MonadResourceBase",
        "normalized": "",
        "package": "higher-leveldb",
        "partial": "Monad Resource Base",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/higher-leveldb/docs/Database-LevelDB-Higher.html#t:MonadThrow",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003eMonad\u003c/code\u003e which can throw exceptions. Note that this does not work in a\n vanilla \u003ccode\u003eST\u003c/code\u003e or \u003ccode\u003eIdentity\u003c/code\u003e monad. Instead, you should use the \u003ccode\u003e\u003ca\u003eExceptionT\u003c/a\u003e\u003c/code\u003e\n transformer in your stack if you are dealing with a non-\u003ccode\u003eIO\u003c/code\u003e base monad.\n\u003c/p\u003e\u003cp\u003eSince 0.3.0\n\u003c/p\u003e",
        "fct-module": "Database.LevelDB.Higher",
        "fct-package": "higher-leveldb",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "MonadThrow"
      },
      "index": {
        "description": "Monad which can throw exceptions Note that this does not work in vanilla ST or Identity monad Instead you should use the ExceptionT transformer in your stack if you are dealing with non IO base monad Since",
        "hierarchy": "Database LevelDB Higher",
        "module": "Database.LevelDB.Higher",
        "name": "MonadThrow",
        "normalized": "",
        "package": "higher-leveldb",
        "partial": "Monad Throw",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/higher-leveldb/docs/Database-LevelDB-Higher.html#t:MonadUnsafeIO",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003eMonad\u003c/code\u003e based on some monad which allows running of some \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e actions,\n via unsafe calls. This applies to \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e, for instance.\n\u003c/p\u003e\u003cp\u003eSince 0.3.0\n\u003c/p\u003e",
        "fct-module": "Database.LevelDB.Higher",
        "fct-package": "higher-leveldb",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "MonadUnsafeIO"
      },
      "index": {
        "description": "Monad based on some monad which allows running of some IO actions via unsafe calls This applies to IO and ST for instance Since",
        "hierarchy": "Database LevelDB Higher",
        "module": "Database.LevelDB.Higher",
        "name": "MonadUnsafeIO",
        "normalized": "",
        "package": "higher-leveldb",
        "partial": "Monad Unsafe IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/higher-leveldb/docs/Database-LevelDB-Higher.html#t:Options",
      "description": {
        "fct-descr": "\u003cp\u003eOptions when opening a database\n\u003c/p\u003e",
        "fct-module": "Database.LevelDB.Higher",
        "fct-package": "higher-leveldb",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Options"
      },
      "index": {
        "description": "Options when opening database",
        "hierarchy": "Database LevelDB Higher",
        "module": "Database.LevelDB.Higher",
        "name": "Options",
        "normalized": "",
        "package": "higher-leveldb",
        "partial": "Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/higher-leveldb/docs/Database-LevelDB-Higher.html#t:RWOptions",
      "description": {
        "fct-module": "Database.LevelDB.Higher",
        "fct-package": "higher-leveldb",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "RWOptions"
      },
      "index": {
        "description": "",
        "hierarchy": "Database LevelDB Higher",
        "module": "Database.LevelDB.Higher",
        "name": "RWOptions",
        "normalized": "",
        "package": "higher-leveldb",
        "partial": "RWOptions",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/higher-leveldb/docs/Database-LevelDB-Higher.html#t:ReadOptions",
      "description": {
        "fct-descr": "\u003cp\u003eOptions for read operations\n\u003c/p\u003e",
        "fct-module": "Database.LevelDB.Higher",
        "fct-package": "higher-leveldb",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "ReadOptions"
      },
      "index": {
        "description": "Options for read operations",
        "hierarchy": "Database LevelDB Higher",
        "module": "Database.LevelDB.Higher",
        "name": "ReadOptions",
        "normalized": "",
        "package": "higher-leveldb",
        "partial": "Read Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/higher-leveldb/docs/Database-LevelDB-Higher.html#t:ScanQuery",
      "description": {
        "fct-descr": "\u003cp\u003eStructure containing functions used within the \u003ccode\u003e\u003ca\u003escan\u003c/a\u003e\u003c/code\u003e function. You may want to start\n with one of the builder/helper funcions such as \u003ccode\u003e\u003ca\u003equeryItems\u003c/a\u003e\u003c/code\u003e, which is defined as:\n\u003c/p\u003e\u003cpre\u003equeryItems = queryBegins { scanInit = []\n                         , scanMap = id\n                         , scanFold = (:)\n                         }\n\u003c/pre\u003e",
        "fct-module": "Database.LevelDB.Higher",
        "fct-package": "higher-leveldb",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "ScanQuery"
      },
      "index": {
        "description": "Structure containing functions used within the scan function You may want to start with one of the builder helper funcions such as queryItems which is defined as queryItems queryBegins scanInit scanMap id scanFold",
        "hierarchy": "Database LevelDB Higher",
        "module": "Database.LevelDB.Higher",
        "name": "ScanQuery",
        "normalized": "",
        "package": "higher-leveldb",
        "partial": "Scan Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/higher-leveldb/docs/Database-LevelDB-Higher.html#t:Value",
      "description": {
        "fct-module": "Database.LevelDB.Higher",
        "fct-package": "higher-leveldb",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "Value"
      },
      "index": {
        "description": "",
        "hierarchy": "Database LevelDB Higher",
        "module": "Database.LevelDB.Higher",
        "name": "Value",
        "normalized": "",
        "package": "higher-leveldb",
        "partial": "Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/higher-leveldb/docs/Database-LevelDB-Higher.html#t:WriteBatch",
      "description": {
        "fct-module": "Database.LevelDB.Higher",
        "fct-package": "higher-leveldb",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "WriteBatch"
      },
      "index": {
        "description": "",
        "hierarchy": "Database LevelDB Higher",
        "module": "Database.LevelDB.Higher",
        "name": "WriteBatch",
        "normalized": "",
        "package": "higher-leveldb",
        "partial": "Write Batch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/higher-leveldb/docs/Database-LevelDB-Higher.html#t:WriteOptions",
      "description": {
        "fct-descr": "\u003cp\u003eOptions for write operations\n\u003c/p\u003e",
        "fct-module": "Database.LevelDB.Higher",
        "fct-package": "higher-leveldb",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "WriteOptions"
      },
      "index": {
        "description": "Options for write operations",
        "hierarchy": "Database LevelDB Higher",
        "module": "Database.LevelDB.Higher",
        "name": "WriteOptions",
        "normalized": "",
        "package": "higher-leveldb",
        "partial": "Write Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/higher-leveldb/docs/Database-LevelDB-Higher.html#v:Options",
      "description": {
        "fct-module": "Database.LevelDB.Higher",
        "fct-package": "higher-leveldb",
        "fct-signature": "Options",
        "fct-type": "function",
        "title": "Options"
      },
      "index": {
        "description": "",
        "hierarchy": "Database LevelDB Higher",
        "module": "Database.LevelDB.Higher",
        "name": "Options",
        "normalized": "",
        "package": "higher-leveldb",
        "partial": "Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/higher-leveldb/docs/Database-LevelDB-Higher.html#v:ReadOptions",
      "description": {
        "fct-module": "Database.LevelDB.Higher",
        "fct-package": "higher-leveldb",
        "fct-signature": "ReadOptions",
        "fct-type": "function",
        "title": "ReadOptions"
      },
      "index": {
        "description": "",
        "hierarchy": "Database LevelDB Higher",
        "module": "Database.LevelDB.Higher",
        "name": "ReadOptions",
        "normalized": "",
        "package": "higher-leveldb",
        "partial": "Read Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/higher-leveldb/docs/Database-LevelDB-Higher.html#v:ScanQuery",
      "description": {
        "fct-module": "Database.LevelDB.Higher",
        "fct-package": "higher-leveldb",
        "fct-signature": "ScanQuery",
        "fct-type": "function",
        "title": "ScanQuery"
      },
      "index": {
        "description": "",
        "hierarchy": "Database LevelDB Higher",
        "module": "Database.LevelDB.Higher",
        "name": "ScanQuery",
        "normalized": "",
        "package": "higher-leveldb",
        "partial": "Scan Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/higher-leveldb/docs/Database-LevelDB-Higher.html#v:WriteOptions",
      "description": {
        "fct-module": "Database.LevelDB.Higher",
        "fct-package": "higher-leveldb",
        "fct-signature": "WriteOptions",
        "fct-type": "function",
        "title": "WriteOptions"
      },
      "index": {
        "description": "",
        "hierarchy": "Database LevelDB Higher",
        "module": "Database.LevelDB.Higher",
        "name": "WriteOptions",
        "normalized": "",
        "package": "higher-leveldb",
        "partial": "Write Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/higher-leveldb/docs/Database-LevelDB-Higher.html#v:blockRestartInterval",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of keys between restart points for delta encoding of keys.\n\u003c/p\u003e\u003cp\u003eThis parameter can be changed dynamically. Most clients should leave\n this parameter alone.\n\u003c/p\u003e\u003cp\u003eDefault: 16\n\u003c/p\u003e",
        "fct-module": "Database.LevelDB.Higher",
        "fct-package": "higher-leveldb",
        "fct-signature": "!Int",
        "fct-type": "function",
        "title": "blockRestartInterval"
      },
      "index": {
        "description": "Number of keys between restart points for delta encoding of keys This parameter can be changed dynamically Most clients should leave this parameter alone Default",
        "hierarchy": "Database LevelDB Higher",
        "module": "Database.LevelDB.Higher",
        "name": "blockRestartInterval",
        "normalized": "",
        "package": "higher-leveldb",
        "partial": "Restart Interval",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/higher-leveldb/docs/Database-LevelDB-Higher.html#v:blockSize",
      "description": {
        "fct-descr": "\u003cp\u003eApproximate size of user data packed per block.\n\u003c/p\u003e\u003cp\u003eNote that the block size specified here corresponds to uncompressed\n data. The actual size of the unit read from disk may be smaller if\n compression is enabled.\n\u003c/p\u003e\u003cp\u003eThis parameter can be changed dynamically.\n\u003c/p\u003e\u003cp\u003eDefault: 4k\n\u003c/p\u003e",
        "fct-module": "Database.LevelDB.Higher",
        "fct-package": "higher-leveldb",
        "fct-signature": "!Int",
        "fct-type": "function",
        "title": "blockSize"
      },
      "index": {
        "description": "Approximate size of user data packed per block Note that the block size specified here corresponds to uncompressed data The actual size of the unit read from disk may be smaller if compression is enabled This parameter can be changed dynamically Default",
        "hierarchy": "Database LevelDB Higher",
        "module": "Database.LevelDB.Higher",
        "name": "blockSize",
        "normalized": "",
        "package": "higher-leveldb",
        "partial": "Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/higher-leveldb/docs/Database-LevelDB-Higher.html#v:cacheSize",
      "description": {
        "fct-descr": "\u003cp\u003eControl over blocks (user data is stored in a set of blocks, and a\n block is the unit of reading from disk).\n\u003c/p\u003e\u003cp\u003eIf \u003e 0, use the specified cache (in bytes) for blocks. If 0, leveldb\n will automatically create and use an 8MB internal cache.\n\u003c/p\u003e\u003cp\u003eDefault: 0\n\u003c/p\u003e",
        "fct-module": "Database.LevelDB.Higher",
        "fct-package": "higher-leveldb",
        "fct-signature": "!Int",
        "fct-type": "function",
        "title": "cacheSize"
      },
      "index": {
        "description": "Control over blocks user data is stored in set of blocks and block is the unit of reading from disk If use the specified cache in bytes for blocks If leveldb will automatically create and use an MB internal cache Default",
        "hierarchy": "Database LevelDB Higher",
        "module": "Database.LevelDB.Higher",
        "name": "cacheSize",
        "normalized": "",
        "package": "higher-leveldb",
        "partial": "Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/higher-leveldb/docs/Database-LevelDB-Higher.html#v:comparator",
      "description": {
        "fct-descr": "\u003cp\u003eComparator used to defined the order of keys in the table.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, the default comparator is used, which uses lexicographic\n bytes-wise ordering.\n\u003c/p\u003e\u003cp\u003eNOTE: the client must ensure that the comparator supplied here has the\n same name and orders keys \u003cem\u003eexactly\u003c/em\u003e the same as the comparator provided\n to previous open calls on the same DB.\n\u003c/p\u003e\u003cp\u003eDefault: Nothing\n\u003c/p\u003e",
        "fct-module": "Database.LevelDB.Higher",
        "fct-package": "higher-leveldb",
        "fct-signature": "!(Maybe Comparator)",
        "fct-type": "function",
        "title": "comparator"
      },
      "index": {
        "description": "Comparator used to defined the order of keys in the table If Nothing the default comparator is used which uses lexicographic bytes-wise ordering NOTE the client must ensure that the comparator supplied here has the same name and orders keys exactly the same as the comparator provided to previous open calls on the same DB Default Nothing",
        "hierarchy": "Database LevelDB Higher",
        "module": "Database.LevelDB.Higher",
        "name": "comparator",
        "normalized": "",
        "package": "higher-leveldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/higher-leveldb/docs/Database-LevelDB-Higher.html#v:compression",
      "description": {
        "fct-descr": "\u003cp\u003eCompress blocks using the specified compression algorithm.\n\u003c/p\u003e\u003cp\u003eThis parameter can be changed dynamically.\n\u003c/p\u003e\u003cp\u003eDefault: \u003ccode\u003e\u003ca\u003eSnappy\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Database.LevelDB.Higher",
        "fct-package": "higher-leveldb",
        "fct-signature": "!Compression",
        "fct-type": "function",
        "title": "compression"
      },
      "index": {
        "description": "Compress blocks using the specified compression algorithm This parameter can be changed dynamically Default Snappy",
        "hierarchy": "Database LevelDB Higher",
        "module": "Database.LevelDB.Higher",
        "name": "compression",
        "normalized": "",
        "package": "higher-leveldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/higher-leveldb/docs/Database-LevelDB-Higher.html#v:createIfMissing",
      "description": {
        "fct-descr": "\u003cp\u003eIf true, the database will be created if it is missing.\n\u003c/p\u003e\u003cp\u003eDefault: False\n\u003c/p\u003e",
        "fct-module": "Database.LevelDB.Higher",
        "fct-package": "higher-leveldb",
        "fct-signature": "!Bool",
        "fct-type": "function",
        "title": "createIfMissing"
      },
      "index": {
        "description": "If true the database will be created if it is missing Default False",
        "hierarchy": "Database LevelDB Higher",
        "module": "Database.LevelDB.Higher",
        "name": "createIfMissing",
        "normalized": "",
        "package": "higher-leveldb",
        "partial": "If Missing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/higher-leveldb/docs/Database-LevelDB-Higher.html#v:def",
      "description": {
        "fct-descr": "\u003cp\u003eThe default value for this type.\n\u003c/p\u003e",
        "fct-module": "Database.LevelDB.Higher",
        "fct-package": "higher-leveldb",
        "fct-signature": "a",
        "fct-type": "function",
        "title": "def"
      },
      "index": {
        "description": "The default value for this type",
        "hierarchy": "Database LevelDB Higher",
        "module": "Database.LevelDB.Higher",
        "name": "def",
        "normalized": "",
        "package": "higher-leveldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/higher-leveldb/docs/Database-LevelDB-Higher.html#v:delete",
      "description": {
        "fct-descr": "\u003cp\u003eDelete an entry from the current DB and KeySpace.\n\u003c/p\u003e",
        "fct-module": "Database.LevelDB.Higher",
        "fct-package": "higher-leveldb",
        "fct-signature": "Key -\u003e m ()",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "Delete an entry from the current DB and KeySpace",
        "hierarchy": "Database LevelDB Higher",
        "module": "Database.LevelDB.Higher",
        "name": "delete",
        "normalized": "Key-\u003ea()",
        "package": "higher-leveldb",
        "partial": "",
        "signature": "Key-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/higher-leveldb/docs/Database-LevelDB-Higher.html#v:deleteB",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a \u003ca\u003eDel\u003c/a\u003e operation to a WriteBatch -- for use with \u003ccode\u003e\u003ca\u003erunBatch\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.LevelDB.Higher",
        "fct-package": "higher-leveldb",
        "fct-signature": "Key -\u003e WriterT WriteBatch m ()",
        "fct-type": "function",
        "title": "deleteB"
      },
      "index": {
        "description": "Add Del operation to WriteBatch for use with runBatch",
        "hierarchy": "Database LevelDB Higher",
        "module": "Database.LevelDB.Higher",
        "name": "deleteB",
        "normalized": "Key-\u003eWriterT WriteBatch a()",
        "package": "higher-leveldb",
        "partial": "",
        "signature": "Key-\u003eWriterT WriteBatch m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/higher-leveldb/docs/Database-LevelDB-Higher.html#v:errorIfExists",
      "description": {
        "fct-descr": "\u003cp\u003eIt true, an error is raised if the database already exists.\n\u003c/p\u003e\u003cp\u003eDefault: False\n\u003c/p\u003e",
        "fct-module": "Database.LevelDB.Higher",
        "fct-package": "higher-leveldb",
        "fct-signature": "!Bool",
        "fct-type": "function",
        "title": "errorIfExists"
      },
      "index": {
        "description": "It true an error is raised if the database already exists Default False",
        "hierarchy": "Database LevelDB Higher",
        "module": "Database.LevelDB.Higher",
        "name": "errorIfExists",
        "normalized": "",
        "package": "higher-leveldb",
        "partial": "If Exists",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/higher-leveldb/docs/Database-LevelDB-Higher.html#v:fillCache",
      "description": {
        "fct-descr": "\u003cp\u003eShould the data read for this iteration be cached in memory? Callers\n may with to set this field to false for bulk scans.\n\u003c/p\u003e\u003cp\u003eDefault: True\n\u003c/p\u003e",
        "fct-module": "Database.LevelDB.Higher",
        "fct-package": "higher-leveldb",
        "fct-signature": "!Bool",
        "fct-type": "function",
        "title": "fillCache"
      },
      "index": {
        "description": "Should the data read for this iteration be cached in memory Callers may with to set this field to false for bulk scans Default True",
        "hierarchy": "Database LevelDB Higher",
        "module": "Database.LevelDB.Higher",
        "name": "fillCache",
        "normalized": "",
        "package": "higher-leveldb",
        "partial": "Cache",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/higher-leveldb/docs/Database-LevelDB-Higher.html#v:filterPolicy",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.LevelDB.Higher",
        "fct-package": "higher-leveldb",
        "fct-signature": "!(Maybe (Either BloomFilter FilterPolicy))",
        "fct-type": "function",
        "title": "filterPolicy"
      },
      "index": {
        "description": "",
        "hierarchy": "Database LevelDB Higher",
        "module": "Database.LevelDB.Higher",
        "name": "filterPolicy",
        "normalized": "",
        "package": "higher-leveldb",
        "partial": "Policy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/higher-leveldb/docs/Database-LevelDB-Higher.html#v:forkLevelDB",
      "description": {
        "fct-descr": "\u003cp\u003eFork a LevelDBT IO action and return ThreadId into the current monad.\n This uses \u003ccode\u003e\u003ca\u003eresourceForkIO\u003c/a\u003e\u003c/code\u003e to handle the reference counting and cleanup resources\n when the last thread exits.\n\u003c/p\u003e",
        "fct-module": "Database.LevelDB.Higher",
        "fct-package": "higher-leveldb",
        "fct-signature": "LevelDB () -\u003e m ThreadId",
        "fct-type": "function",
        "title": "forkLevelDB"
      },
      "index": {
        "description": "Fork LevelDBT IO action and return ThreadId into the current monad This uses resourceForkIO to handle the reference counting and cleanup resources when the last thread exits",
        "hierarchy": "Database LevelDB Higher",
        "module": "Database.LevelDB.Higher",
        "name": "forkLevelDB",
        "normalized": "LevelDB()-\u003ea ThreadId",
        "package": "higher-leveldb",
        "partial": "Level DB",
        "signature": "LevelDB()-\u003em ThreadId"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/higher-leveldb/docs/Database-LevelDB-Higher.html#v:get",
      "description": {
        "fct-descr": "\u003cp\u003eGet a value from the current DB and KeySpace.\n\u003c/p\u003e",
        "fct-module": "Database.LevelDB.Higher",
        "fct-package": "higher-leveldb",
        "fct-signature": "Key -\u003e m (Maybe Value)",
        "fct-type": "function",
        "title": "get"
      },
      "index": {
        "description": "Get value from the current DB and KeySpace",
        "hierarchy": "Database LevelDB Higher",
        "module": "Database.LevelDB.Higher",
        "name": "get",
        "normalized": "Key-\u003ea(Maybe Value)",
        "package": "higher-leveldb",
        "partial": "",
        "signature": "Key-\u003em(Maybe Value)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/higher-leveldb/docs/Database-LevelDB-Higher.html#v:liftLevelDB",
      "description": {
        "fct-descr": "\u003cp\u003eLift a LevelDBT IO action into the current monad.\n\u003c/p\u003e",
        "fct-module": "Database.LevelDB.Higher",
        "fct-package": "higher-leveldb",
        "fct-signature": "LevelDBT IO a -\u003e m a",
        "fct-type": "method",
        "title": "liftLevelDB"
      },
      "index": {
        "description": "Lift LevelDBT IO action into the current monad",
        "hierarchy": "Database LevelDB Higher",
        "module": "Database.LevelDB.Higher",
        "name": "liftLevelDB",
        "normalized": "LevelDBT IO a-\u003eb a",
        "package": "higher-leveldb",
        "partial": "Level DB",
        "signature": "LevelDBT IO a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/higher-leveldb/docs/Database-LevelDB-Higher.html#v:mapLevelDBT",
      "description": {
        "fct-descr": "\u003cp\u003eMap/transform the monad below the LevelDBT\n\u003c/p\u003e",
        "fct-module": "Database.LevelDB.Higher",
        "fct-package": "higher-leveldb",
        "fct-signature": "(m a -\u003e n b) -\u003e LevelDBT m a -\u003e LevelDBT n b",
        "fct-type": "function",
        "title": "mapLevelDBT"
      },
      "index": {
        "description": "Map transform the monad below the LevelDBT",
        "hierarchy": "Database LevelDB Higher",
        "module": "Database.LevelDB.Higher",
        "name": "mapLevelDBT",
        "normalized": "(a b-\u003ec d)-\u003eLevelDBT a b-\u003eLevelDBT c d",
        "package": "higher-leveldb",
        "partial": "Level DBT",
        "signature": "(m a-\u003en b)-\u003eLevelDBT m a-\u003eLevelDBT n b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/higher-leveldb/docs/Database-LevelDB-Higher.html#v:maxOpenFiles",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of open files that can be used by the DB.\n\u003c/p\u003e\u003cp\u003eYou may need to increase this if your database has a large working set\n (budget one open file per 2MB of working set).\n\u003c/p\u003e\u003cp\u003eDefault: 1000\n\u003c/p\u003e",
        "fct-module": "Database.LevelDB.Higher",
        "fct-package": "higher-leveldb",
        "fct-signature": "!Int",
        "fct-type": "function",
        "title": "maxOpenFiles"
      },
      "index": {
        "description": "Number of open files that can be used by the DB You may need to increase this if your database has large working set budget one open file per MB of working set Default",
        "hierarchy": "Database LevelDB Higher",
        "module": "Database.LevelDB.Higher",
        "name": "maxOpenFiles",
        "normalized": "",
        "package": "higher-leveldb",
        "partial": "Open Files",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/higher-leveldb/docs/Database-LevelDB-Higher.html#v:paranoidChecks",
      "description": {
        "fct-descr": "\u003cp\u003eIf true, the implementation will do aggressive checking of the data\n it is processing and will stop early if it detects any errors.\n\u003c/p\u003e\u003cp\u003eThis may have unforeseen ramifications: for example, a corruption of\n one DB entry may cause a large number of entries to become unreadable\n or for the entire DB to become unopenable.\n\u003c/p\u003e\u003cp\u003eDefault: False\n\u003c/p\u003e",
        "fct-module": "Database.LevelDB.Higher",
        "fct-package": "higher-leveldb",
        "fct-signature": "!Bool",
        "fct-type": "function",
        "title": "paranoidChecks"
      },
      "index": {
        "description": "If true the implementation will do aggressive checking of the data it is processing and will stop early if it detects any errors This may have unforeseen ramifications for example corruption of one DB entry may cause large number of entries to become unreadable or for the entire DB to become unopenable Default False",
        "hierarchy": "Database LevelDB Higher",
        "module": "Database.LevelDB.Higher",
        "name": "paranoidChecks",
        "normalized": "",
        "package": "higher-leveldb",
        "partial": "Checks",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/higher-leveldb/docs/Database-LevelDB-Higher.html#v:put",
      "description": {
        "fct-descr": "\u003cp\u003ePut a value in the current DB and KeySpace.\n\u003c/p\u003e",
        "fct-module": "Database.LevelDB.Higher",
        "fct-package": "higher-leveldb",
        "fct-signature": "Key -\u003e Value -\u003e m ()",
        "fct-type": "function",
        "title": "put"
      },
      "index": {
        "description": "Put value in the current DB and KeySpace",
        "hierarchy": "Database LevelDB Higher",
        "module": "Database.LevelDB.Higher",
        "name": "put",
        "normalized": "Key-\u003eValue-\u003ea()",
        "package": "higher-leveldb",
        "partial": "",
        "signature": "Key-\u003eValue-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/higher-leveldb/docs/Database-LevelDB-Higher.html#v:putB",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a \u003ca\u003ePut\u003c/a\u003e operation to a WriteBatch -- for use with \u003ccode\u003e\u003ca\u003erunBatch\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.LevelDB.Higher",
        "fct-package": "higher-leveldb",
        "fct-signature": "Key -\u003e Value -\u003e WriterT WriteBatch m ()",
        "fct-type": "function",
        "title": "putB"
      },
      "index": {
        "description": "Add Put operation to WriteBatch for use with runBatch",
        "hierarchy": "Database LevelDB Higher",
        "module": "Database.LevelDB.Higher",
        "name": "putB",
        "normalized": "Key-\u003eValue-\u003eWriterT WriteBatch a()",
        "package": "higher-leveldb",
        "partial": "",
        "signature": "Key-\u003eValue-\u003eWriterT WriteBatch m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/higher-leveldb/docs/Database-LevelDB-Higher.html#v:queryBegins",
      "description": {
        "fct-descr": "\u003cp\u003eA partial ScanQuery helper; this query will find all keys that begin with the Key argument\n supplied to scan.\n\u003c/p\u003e\u003cp\u003eRequires an \u003ccode\u003e\u003ca\u003escanInit\u003c/a\u003e\u003c/code\u003e, a \u003ccode\u003e\u003ca\u003escanMap\u003c/a\u003e\u003c/code\u003e and a \u003ccode\u003e\u003ca\u003escanFold\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
        "fct-module": "Database.LevelDB.Higher",
        "fct-package": "higher-leveldb",
        "fct-signature": "ScanQuery a b",
        "fct-type": "function",
        "title": "queryBegins"
      },
      "index": {
        "description": "partial ScanQuery helper this query will find all keys that begin with the Key argument supplied to scan Requires an scanInit scanMap and scanFold function",
        "hierarchy": "Database LevelDB Higher",
        "module": "Database.LevelDB.Higher",
        "name": "queryBegins",
        "normalized": "",
        "package": "higher-leveldb",
        "partial": "Begins",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/higher-leveldb/docs/Database-LevelDB-Higher.html#v:queryCount",
      "description": {
        "fct-descr": "\u003cp\u003ea ScanQuery helper to count items beginning with Key argument.\n\u003c/p\u003e",
        "fct-module": "Database.LevelDB.Higher",
        "fct-package": "higher-leveldb",
        "fct-signature": "ScanQuery a a",
        "fct-type": "function",
        "title": "queryCount"
      },
      "index": {
        "description": "ScanQuery helper to count items beginning with Key argument",
        "hierarchy": "Database LevelDB Higher",
        "module": "Database.LevelDB.Higher",
        "name": "queryCount",
        "normalized": "",
        "package": "higher-leveldb",
        "partial": "Count",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/higher-leveldb/docs/Database-LevelDB-Higher.html#v:queryItems",
      "description": {
        "fct-descr": "\u003cp\u003eA basic ScanQuery helper; this query will find all keys that begin the Key argument\n supplied to scan, and returns them in a list of \u003ccode\u003e\u003ca\u003eItem\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eDoes not require any function overrides.\n\u003c/p\u003e",
        "fct-module": "Database.LevelDB.Higher",
        "fct-package": "higher-leveldb",
        "fct-signature": "ScanQuery Item [Item]",
        "fct-type": "function",
        "title": "queryItems"
      },
      "index": {
        "description": "basic ScanQuery helper this query will find all keys that begin the Key argument supplied to scan and returns them in list of Item Does not require any function overrides",
        "hierarchy": "Database LevelDB Higher",
        "module": "Database.LevelDB.Higher",
        "name": "queryItems",
        "normalized": "ScanQuery Item[Item]",
        "package": "higher-leveldb",
        "partial": "Items",
        "signature": "ScanQuery Item[Item]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/higher-leveldb/docs/Database-LevelDB-Higher.html#v:queryList",
      "description": {
        "fct-descr": "\u003cp\u003ea ScanQuery helper with defaults for queryBegins and a list result; requires a map function e.g.:\n\u003c/p\u003e\u003cpre\u003e scan \"encoded-values:\" queryList { scanMap = \\(_, v) -\u003e decode v }\n\u003c/pre\u003e",
        "fct-module": "Database.LevelDB.Higher",
        "fct-package": "higher-leveldb",
        "fct-signature": "ScanQuery a [a]",
        "fct-type": "function",
        "title": "queryList"
      },
      "index": {
        "description": "ScanQuery helper with defaults for queryBegins and list result requires map function e.g scan encoded-values queryList scanMap decode",
        "hierarchy": "Database LevelDB Higher",
        "module": "Database.LevelDB.Higher",
        "name": "queryList",
        "normalized": "ScanQuery a[a]",
        "package": "higher-leveldb",
        "partial": "List",
        "signature": "ScanQuery a[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/higher-leveldb/docs/Database-LevelDB-Higher.html#v:runBatch",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a batch of operations - use the \u003ccode\u003ewrite\u003c/code\u003e and \u003ccode\u003e\u003ca\u003edeleteB\u003c/a\u003e\u003c/code\u003e functions to\n add operations to the batch list.\n\u003c/p\u003e",
        "fct-module": "Database.LevelDB.Higher",
        "fct-package": "higher-leveldb",
        "fct-signature": "WriterT WriteBatch m () -\u003e m ()",
        "fct-type": "function",
        "title": "runBatch"
      },
      "index": {
        "description": "Write batch of operations use the write and deleteB functions to add operations to the batch list",
        "hierarchy": "Database LevelDB Higher",
        "module": "Database.LevelDB.Higher",
        "name": "runBatch",
        "normalized": "WriterT WriteBatch a()-\u003ea()",
        "package": "higher-leveldb",
        "partial": "Batch",
        "signature": "WriterT WriteBatch m()-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/higher-leveldb/docs/Database-LevelDB-Higher.html#v:runCreateLevelDB",
      "description": {
        "fct-descr": "\u003cp\u003eA helper for runLevelDB using default \u003ccode\u003e\u003ca\u003eOptions\u003c/a\u003e\u003c/code\u003e except createIfMissing=True\n\u003c/p\u003e",
        "fct-module": "Database.LevelDB.Higher",
        "fct-package": "higher-leveldb",
        "fct-signature": "FilePath-\u003e KeySpace-\u003e LevelDBT m a-\u003e m a",
        "fct-type": "function",
        "title": "runCreateLevelDB"
      },
      "index": {
        "description": "helper for runLevelDB using default Options except createIfMissing True",
        "hierarchy": "Database LevelDB Higher",
        "module": "Database.LevelDB.Higher",
        "name": "runCreateLevelDB",
        "normalized": "FilePath-\u003eKeySpace-\u003eLevelDBT a b-\u003ea b",
        "package": "higher-leveldb",
        "partial": "Create Level DB",
        "signature": "FilePath-\u003eKeySpace-\u003eLevelDBT m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/higher-leveldb/docs/Database-LevelDB-Higher.html#v:runLevelDB",
      "description": {
        "fct-descr": "\u003cp\u003eBuild a context and execute the actions; uses a \u003ccode\u003e\u003ca\u003eResourceT\u003c/a\u003e\u003c/code\u003e internally.\n\u003c/p\u003e\u003cp\u003etip: you can use the Data.Default (def) method to specify default options e.g.\n\u003c/p\u003e\u003cpre\u003e runLevelDB \"/tmp/mydb\" def (def, def{sync = true}) \"My Keyspace\" $ do\n\u003c/pre\u003e",
        "fct-module": "Database.LevelDB.Higher",
        "fct-package": "higher-leveldb",
        "fct-signature": "FilePath-\u003e Options-\u003e RWOptions-\u003e KeySpace-\u003e LevelDBT m a-\u003e m a",
        "fct-type": "function",
        "title": "runLevelDB"
      },
      "index": {
        "description": "Build context and execute the actions uses ResourceT internally tip you can use the Data.Default def method to specify default options e.g runLevelDB tmp mydb def def def sync true My Keyspace do",
        "hierarchy": "Database LevelDB Higher",
        "module": "Database.LevelDB.Higher",
        "name": "runLevelDB",
        "normalized": "FilePath-\u003eOptions-\u003eRWOptions-\u003eKeySpace-\u003eLevelDBT a b-\u003ea b",
        "package": "higher-leveldb",
        "partial": "Level DB",
        "signature": "FilePath-\u003eOptions-\u003eRWOptions-\u003eKeySpace-\u003eLevelDBT m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/higher-leveldb/docs/Database-LevelDB-Higher.html#v:runLevelDB-39-",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003erunLevelDB\u003c/a\u003e\u003c/code\u003e but doesn't call \u003ccode\u003e\u003ca\u003erunResourceT\u003c/a\u003e\u003c/code\u003e. This gives you the option\n to manage that yourself\n\u003c/p\u003e",
        "fct-module": "Database.LevelDB.Higher",
        "fct-package": "higher-leveldb",
        "fct-signature": "FilePath-\u003e Options-\u003e RWOptions-\u003e KeySpace-\u003e LevelDBT m a-\u003e ResourceT m a",
        "fct-type": "function",
        "title": "runLevelDB'"
      },
      "index": {
        "description": "Same as runLevelDB but doesn call runResourceT This gives you the option to manage that yourself",
        "hierarchy": "Database LevelDB Higher",
        "module": "Database.LevelDB.Higher",
        "name": "runLevelDB'",
        "normalized": "FilePath-\u003eOptions-\u003eRWOptions-\u003eKeySpace-\u003eLevelDBT a b-\u003eResourceT a b",
        "package": "higher-leveldb",
        "partial": "Level DB'",
        "signature": "FilePath-\u003eOptions-\u003eRWOptions-\u003eKeySpace-\u003eLevelDBT m a-\u003eResourceT m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/higher-leveldb/docs/Database-LevelDB-Higher.html#v:runResourceT",
      "description": {
        "fct-descr": "\u003cp\u003eUnwrap a \u003ccode\u003e\u003ca\u003eResourceT\u003c/a\u003e\u003c/code\u003e transformer, and call all registered release actions.\n\u003c/p\u003e\u003cp\u003eNote that there is some reference counting involved due to \u003ccode\u003e\u003ca\u003eresourceForkIO\u003c/a\u003e\u003c/code\u003e.\n If multiple threads are sharing the same collection of resources, only the\n last call to \u003ccode\u003erunResourceT\u003c/code\u003e will deallocate the resources.\n\u003c/p\u003e\u003cp\u003eSince 0.3.0\n\u003c/p\u003e",
        "fct-module": "Database.LevelDB.Higher",
        "fct-package": "higher-leveldb",
        "fct-signature": "ResourceT m a -\u003e m a",
        "fct-type": "function",
        "title": "runResourceT"
      },
      "index": {
        "description": "Unwrap ResourceT transformer and call all registered release actions Note that there is some reference counting involved due to resourceForkIO If multiple threads are sharing the same collection of resources only the last call to runResourceT will deallocate the resources Since",
        "hierarchy": "Database LevelDB Higher",
        "module": "Database.LevelDB.Higher",
        "name": "runResourceT",
        "normalized": "ResourceT a b-\u003ea b",
        "package": "higher-leveldb",
        "partial": "Resource",
        "signature": "ResourceT m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/higher-leveldb/docs/Database-LevelDB-Higher.html#v:scan",
      "description": {
        "fct-descr": "\u003cp\u003eScan the keyspace, applying functions and returning results.\n Look at the documentation for \u003ccode\u003e\u003ca\u003eScanQuery\u003c/a\u003e\u003c/code\u003e for more information.\n\u003c/p\u003e\u003cp\u003eThis is essentially a fold left that will run until the \u003ccode\u003e\u003ca\u003escanWhile\u003c/a\u003e\u003c/code\u003e\n condition is met or the iterator is exhausted. All the results will be\n copied into memory before the function returns.\n\u003c/p\u003e",
        "fct-module": "Database.LevelDB.Higher",
        "fct-package": "higher-leveldb",
        "fct-signature": "Key-\u003e ScanQuery a b-\u003e m b",
        "fct-type": "function",
        "title": "scan"
      },
      "index": {
        "description": "Scan the keyspace applying functions and returning results Look at the documentation for ScanQuery for more information This is essentially fold left that will run until the scanWhile condition is met or the iterator is exhausted All the results will be copied into memory before the function returns",
        "hierarchy": "Database LevelDB Higher",
        "module": "Database.LevelDB.Higher",
        "name": "scan",
        "normalized": "Key-\u003eScanQuery a b-\u003ec b",
        "package": "higher-leveldb",
        "partial": "",
        "signature": "Key-\u003eScanQuery a b-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/higher-leveldb/docs/Database-LevelDB-Higher.html#v:scanFilter",
      "description": {
        "fct-descr": "\u003cp\u003efilter function - return \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e to leave\n this \u003ccode\u003e\u003ca\u003eItem\u003c/a\u003e\u003c/code\u003e out of the result\n\u003c/p\u003e",
        "fct-module": "Database.LevelDB.Higher",
        "fct-package": "higher-leveldb",
        "fct-signature": "Item -\u003e Bool",
        "fct-type": "function",
        "title": "scanFilter"
      },
      "index": {
        "description": "filter function return False to leave this Item out of the result",
        "hierarchy": "Database LevelDB Higher",
        "module": "Database.LevelDB.Higher",
        "name": "scanFilter",
        "normalized": "Item-\u003eBool",
        "package": "higher-leveldb",
        "partial": "Filter",
        "signature": "Item-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/higher-leveldb/docs/Database-LevelDB-Higher.html#v:scanFold",
      "description": {
        "fct-descr": "\u003cp\u003eaccumulator/fold function e.g. (:)\n\u003c/p\u003e",
        "fct-module": "Database.LevelDB.Higher",
        "fct-package": "higher-leveldb",
        "fct-signature": "a -\u003e b -\u003e b",
        "fct-type": "function",
        "title": "scanFold"
      },
      "index": {
        "description": "accumulator fold function e.g",
        "hierarchy": "Database LevelDB Higher",
        "module": "Database.LevelDB.Higher",
        "name": "scanFold",
        "normalized": "a-\u003eb-\u003eb",
        "package": "higher-leveldb",
        "partial": "Fold",
        "signature": "a-\u003eb-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/higher-leveldb/docs/Database-LevelDB-Higher.html#v:scanInit",
      "description": {
        "fct-descr": "\u003cp\u003estarting value for fold/reduce\n\u003c/p\u003e",
        "fct-module": "Database.LevelDB.Higher",
        "fct-package": "higher-leveldb",
        "fct-signature": "b",
        "fct-type": "function",
        "title": "scanInit"
      },
      "index": {
        "description": "starting value for fold reduce",
        "hierarchy": "Database LevelDB Higher",
        "module": "Database.LevelDB.Higher",
        "name": "scanInit",
        "normalized": "",
        "package": "higher-leveldb",
        "partial": "Init",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/higher-leveldb/docs/Database-LevelDB-Higher.html#v:scanMap",
      "description": {
        "fct-descr": "\u003cp\u003emap or transform an item before it is reduced/accumulated\n\u003c/p\u003e",
        "fct-module": "Database.LevelDB.Higher",
        "fct-package": "higher-leveldb",
        "fct-signature": "Item -\u003e a",
        "fct-type": "function",
        "title": "scanMap"
      },
      "index": {
        "description": "map or transform an item before it is reduced accumulated",
        "hierarchy": "Database LevelDB Higher",
        "module": "Database.LevelDB.Higher",
        "name": "scanMap",
        "normalized": "Item-\u003ea",
        "package": "higher-leveldb",
        "partial": "Map",
        "signature": "Item-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/higher-leveldb/docs/Database-LevelDB-Higher.html#v:scanWhile",
      "description": {
        "fct-descr": "\u003cp\u003escan will continue until this returns false\n\u003c/p\u003e",
        "fct-module": "Database.LevelDB.Higher",
        "fct-package": "higher-leveldb",
        "fct-signature": "Key -\u003e Item -\u003e b -\u003e Bool",
        "fct-type": "function",
        "title": "scanWhile"
      },
      "index": {
        "description": "scan will continue until this returns false",
        "hierarchy": "Database LevelDB Higher",
        "module": "Database.LevelDB.Higher",
        "name": "scanWhile",
        "normalized": "Key-\u003eItem-\u003ea-\u003eBool",
        "package": "higher-leveldb",
        "partial": "While",
        "signature": "Key-\u003eItem-\u003eb-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/higher-leveldb/docs/Database-LevelDB-Higher.html#v:sync",
      "description": {
        "fct-descr": "\u003cp\u003eIf true, the write will be flushed from the operating system buffer\n cache (by calling WritableFile::Sync()) before the write is considered\n complete. If this flag is true, writes will be slower.\n\u003c/p\u003e\u003cp\u003eIf this flag is false, and the machine crashes, some recent writes may\n be lost. Note that if it is just the process that crashes (i.e., the\n machine does not reboot), no writes will be lost even if sync==false.\n\u003c/p\u003e\u003cp\u003eIn other words, a DB write with sync==false has similar crash semantics\n as the \u003ca\u003ewrite()\u003c/a\u003e system call. A DB write with sync==true has similar\n crash semantics to a \u003ca\u003ewrite()\u003c/a\u003e system call followed by \u003ca\u003efsync()\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eDefault: False\n\u003c/p\u003e",
        "fct-module": "Database.LevelDB.Higher",
        "fct-package": "higher-leveldb",
        "fct-signature": "!Bool",
        "fct-type": "function",
        "title": "sync"
      },
      "index": {
        "description": "If true the write will be flushed from the operating system buffer cache by calling WritableFile Sync before the write is considered complete If this flag is true writes will be slower If this flag is false and the machine crashes some recent writes may be lost Note that if it is just the process that crashes i.e the machine does not reboot no writes will be lost even if sync false In other words DB write with sync false has similar crash semantics as the write system call DB write with sync true has similar crash semantics to write system call followed by fsync Default False",
        "hierarchy": "Database LevelDB Higher",
        "module": "Database.LevelDB.Higher",
        "name": "sync",
        "normalized": "",
        "package": "higher-leveldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/higher-leveldb/docs/Database-LevelDB-Higher.html#v:useSnapshot",
      "description": {
        "fct-descr": "\u003cp\u003eIf \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e, read as of the supplied snapshot (which must belong to the\n DB that is being read and which must not have been released). If\n \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, use an implicit snapshot of the state at the beginning of\n this read operation.\n\u003c/p\u003e\u003cp\u003eDefault: Nothing\n\u003c/p\u003e",
        "fct-module": "Database.LevelDB.Higher",
        "fct-package": "higher-leveldb",
        "fct-signature": "!(Maybe Snapshot)",
        "fct-type": "function",
        "title": "useSnapshot"
      },
      "index": {
        "description": "If Just read as of the supplied snapshot which must belong to the DB that is being read and which must not have been released If Nothing use an implicit snapshot of the state at the beginning of this read operation Default Nothing",
        "hierarchy": "Database LevelDB Higher",
        "module": "Database.LevelDB.Higher",
        "name": "useSnapshot",
        "normalized": "",
        "package": "higher-leveldb",
        "partial": "Snapshot",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/higher-leveldb/docs/Database-LevelDB-Higher.html#v:verifyCheckSums",
      "description": {
        "fct-descr": "\u003cp\u003eIf true, all data read from underlying storage will be verified\n against corresponding checksuyms.\n\u003c/p\u003e\u003cp\u003eDefault: False\n\u003c/p\u003e",
        "fct-module": "Database.LevelDB.Higher",
        "fct-package": "higher-leveldb",
        "fct-signature": "!Bool",
        "fct-type": "function",
        "title": "verifyCheckSums"
      },
      "index": {
        "description": "If true all data read from underlying storage will be verified against corresponding checksuyms Default False",
        "hierarchy": "Database LevelDB Higher",
        "module": "Database.LevelDB.Higher",
        "name": "verifyCheckSums",
        "normalized": "",
        "package": "higher-leveldb",
        "partial": "Check Sums",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/higher-leveldb/docs/Database-LevelDB-Higher.html#v:withDBContext",
      "description": {
        "fct-descr": "\u003cp\u003eOverride context for an action - only usable internally for functions\n like \u003ccode\u003e\u003ca\u003ewithKeySpace\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ewithOptions\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.LevelDB.Higher",
        "fct-package": "higher-leveldb",
        "fct-signature": "(DBContext -\u003e DBContext) -\u003e m a -\u003e m a",
        "fct-type": "method",
        "title": "withDBContext"
      },
      "index": {
        "description": "Override context for an action only usable internally for functions like withKeySpace and withOptions",
        "hierarchy": "Database LevelDB Higher",
        "module": "Database.LevelDB.Higher",
        "name": "withDBContext",
        "normalized": "(DBContext-\u003eDBContext)-\u003ea b-\u003ea b",
        "package": "higher-leveldb",
        "partial": "DBContext",
        "signature": "(DBContext-\u003eDBContext)-\u003em a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/higher-leveldb/docs/Database-LevelDB-Higher.html#v:withKeySpace",
      "description": {
        "fct-descr": "\u003cp\u003eUse a local keyspace for the operation. e.g.:\n\u003c/p\u003e\u003cpre\u003e runCreateLevelDB \"/tmp/mydb\" \"MyKeySpace\" $ do\n    put \"somekey\" \"somevalue\"\n    withKeySpace \"Other KeySpace\" $ do\n        put \"somekey\" \"someother value\"\n    get \"somekey\"\n\n Just \"somevalue\"\n\u003c/pre\u003e",
        "fct-module": "Database.LevelDB.Higher",
        "fct-package": "higher-leveldb",
        "fct-signature": "KeySpace -\u003e m a -\u003e m a",
        "fct-type": "function",
        "title": "withKeySpace"
      },
      "index": {
        "description": "Use local keyspace for the operation e.g runCreateLevelDB tmp mydb MyKeySpace do put somekey somevalue withKeySpace Other KeySpace do put somekey someother value get somekey Just somevalue",
        "hierarchy": "Database LevelDB Higher",
        "module": "Database.LevelDB.Higher",
        "name": "withKeySpace",
        "normalized": "KeySpace-\u003ea b-\u003ea b",
        "package": "higher-leveldb",
        "partial": "Key Space",
        "signature": "KeySpace-\u003em a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/higher-leveldb/docs/Database-LevelDB-Higher.html#v:withOptions",
      "description": {
        "fct-descr": "\u003cp\u003eLocal Read/Write Options for the action.\n\u003c/p\u003e",
        "fct-module": "Database.LevelDB.Higher",
        "fct-package": "higher-leveldb",
        "fct-signature": "RWOptions -\u003e m a -\u003e m a",
        "fct-type": "function",
        "title": "withOptions"
      },
      "index": {
        "description": "Local Read Write Options for the action",
        "hierarchy": "Database LevelDB Higher",
        "module": "Database.LevelDB.Higher",
        "name": "withOptions",
        "normalized": "RWOptions-\u003ea b-\u003ea b",
        "package": "higher-leveldb",
        "partial": "Options",
        "signature": "RWOptions-\u003em a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/higher-leveldb/docs/Database-LevelDB-Higher.html#v:withSnapshot",
      "description": {
        "fct-descr": "\u003cp\u003eRun a block of get operations based on a single snapshot taken at\n the beginning of the action. The snapshot will be automatically\n released when complete.\n\u003c/p\u003e\u003cp\u003eThis means that you can do put operations in the same block, but you will not see\n those changes inside this computation.\n\u003c/p\u003e",
        "fct-module": "Database.LevelDB.Higher",
        "fct-package": "higher-leveldb",
        "fct-signature": "m a -\u003e m a",
        "fct-type": "function",
        "title": "withSnapshot"
      },
      "index": {
        "description": "Run block of get operations based on single snapshot taken at the beginning of the action The snapshot will be automatically released when complete This means that you can do put operations in the same block but you will not see those changes inside this computation",
        "hierarchy": "Database LevelDB Higher",
        "module": "Database.LevelDB.Higher",
        "name": "withSnapshot",
        "normalized": "a b-\u003ea b",
        "package": "higher-leveldb",
        "partial": "Snapshot",
        "signature": "m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/higher-leveldb/docs/Database-LevelDB-Higher.html#v:writeBufferSize",
      "description": {
        "fct-descr": "\u003cp\u003eAmount of data to build up in memory (backed by an unsorted log on\n disk) before converting to a sorted on-disk file.\n\u003c/p\u003e\u003cp\u003eLarger values increase performance, especially during bulk loads. Up to\n to write buffers may be held in memory at the same time, so you may\n with to adjust this parameter to control memory usage. Also, a larger\n write buffer will result in a longer recovery time the next time the\n database is opened.\n\u003c/p\u003e\u003cp\u003eDefault: 4MB\n\u003c/p\u003e",
        "fct-module": "Database.LevelDB.Higher",
        "fct-package": "higher-leveldb",
        "fct-signature": "!Int",
        "fct-type": "function",
        "title": "writeBufferSize"
      },
      "index": {
        "description": "Amount of data to build up in memory backed by an unsorted log on disk before converting to sorted on-disk file Larger values increase performance especially during bulk loads Up to to write buffers may be held in memory at the same time so you may with to adjust this parameter to control memory usage Also larger write buffer will result in longer recovery time the next time the database is opened Default MB",
        "hierarchy": "Database LevelDB Higher",
        "module": "Database.LevelDB.Higher",
        "name": "writeBufferSize",
        "normalized": "",
        "package": "higher-leveldb",
        "partial": "Buffer Size",
        "signature": ""
      }
    }
  }
]