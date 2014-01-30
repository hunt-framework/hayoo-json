[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/memo-sqlite/docs/Data-Memo-Sqlite.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMemoize functions in a SQLite3 database.\n\u003c/p\u003e\u003cp\u003eThe functions memoized while having type \u003ccode\u003ef :: k -\u003e IO v\u003c/code\u003e must result in\nthe same output given the same input, otherwise all kinds of wrongness\nwill result.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003ecleanup\u003c/code\u003e action returned by the memoizers must not be called if you\nare going to use the memoized function again; beware.\n\u003c/p\u003e\u003cp\u003eAn example program (included in the examples directory) might look like:\n\u003c/p\u003e\u003cpre\u003e -- fib.hs\n import Data.Memo.Sqlite (memoRec', readShow, table)\n\n import Control.Monad (liftM2)\n import System.Environment (getArgs)\n\n fib :: (Integer -\u003e IO Integer) -\u003e Integer -\u003e IO Integer\n fib _fib' n@0 = print n \u003e\u003e return 0\n fib _fib' n@1 = print n \u003e\u003e return 1\n fib  fib' n   = print n \u003e\u003e liftM2 (+) (fib' (n - 1)) (fib' (n - 2))\n\n main :: IO ()\n main = do\n   [file, ts, ns] \u003c- getArgs\n   let Just t = table ts\n       n = read ns\n   (cleanup, fib') \u003c- memoRec' readShow file t fib\n   fib' n \u003e\u003e= \\nth -\u003e putStrLn $ \"fib(\" ++ show n ++ \") = \" ++ show nth\n   cleanup\n\u003c/pre\u003e\u003cp\u003eExample usage:\n\u003c/p\u003e\u003cpre\u003e ghc --make fib.hs\n ./fib fibs.sqlite3 fibs 10\n ./fib fibs.sqlite3 fibs 10\n ./fib fibs.sqlite3 fibs 100\n ./fib fibs.sqlite3 fibs 100\n\u003c/pre\u003e\u003cp\u003eSee also:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e the \u003ccode\u003edata-memocombinators\u003c/code\u003e package for pure in-memory memoization.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "Data.Memo.Sqlite",
        "fct-package": "memo-sqlite",
        "fct-signature": "module",
        "fct-source": "src/Data-Memo-Sqlite.html",
        "fct-type": "module",
        "title": "Sqlite"
      },
      "index": {
        "description": "Memoize functions in SQLite3 database The functions memoized while having type IO must result in the same output given the same input otherwise all kinds of wrongness will result The cleanup action returned by the memoizers must not be called if you are going to use the memoized function again beware An example program included in the examples directory might look like fib.hs import Data.Memo.Sqlite memoRec readShow table import Control.Monad liftM2 import System.Environment getArgs fib Integer IO Integer Integer IO Integer fib fib n@0 print return fib fib n@1 print return fib fib print liftM2 fib fib main IO main do file ts ns getArgs let Just table ts read ns cleanup fib memoRec readShow file fib fib nth putStrLn fib show show nth cleanup Example usage ghc make fib.hs fib fibs.sqlite3 fibs fib fibs.sqlite3 fibs fib fibs.sqlite3 fibs fib fibs.sqlite3 fibs See also the data-memocombinators package for pure in-memory memoization",
        "hierarchy": "Data Memo Sqlite",
        "module": "Data.Memo.Sqlite",
        "name": "Sqlite",
        "normalized": "",
        "package": "memo-sqlite",
        "partial": "Sqlite",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/memo-sqlite/docs/Data-Memo-Sqlite.html#t:Memo",
      "description": {
        "fct-module": "Data.Memo.Sqlite",
        "fct-package": "memo-sqlite",
        "fct-signature": "type",
        "fct-source": "src/Data-Memo-Sqlite.html#Memo",
        "fct-type": "type",
        "title": "Memo"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Memo Sqlite",
        "module": "Data.Memo.Sqlite",
        "name": "Memo",
        "normalized": "",
        "package": "memo-sqlite",
        "partial": "Memo",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/memo-sqlite/docs/Data-Memo-Sqlite.html#t:MemoRec",
      "description": {
        "fct-module": "Data.Memo.Sqlite",
        "fct-package": "memo-sqlite",
        "fct-signature": "type",
        "fct-source": "src/Data-Memo-Sqlite.html#MemoRec",
        "fct-type": "type",
        "title": "MemoRec"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Memo Sqlite",
        "module": "Data.Memo.Sqlite",
        "name": "MemoRec",
        "normalized": "",
        "package": "memo-sqlite",
        "partial": "Memo Rec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/memo-sqlite/docs/Data-Memo-Sqlite.html#t:MkMemo",
      "description": {
        "fct-module": "Data.Memo.Sqlite",
        "fct-package": "memo-sqlite",
        "fct-signature": "type",
        "fct-source": "src/Data-Memo-Sqlite.html#MkMemo",
        "fct-type": "type",
        "title": "MkMemo"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Memo Sqlite",
        "module": "Data.Memo.Sqlite",
        "name": "MkMemo",
        "normalized": "",
        "package": "memo-sqlite",
        "partial": "Mk Memo",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/memo-sqlite/docs/Data-Memo-Sqlite.html#t:MkMemoRec",
      "description": {
        "fct-module": "Data.Memo.Sqlite",
        "fct-package": "memo-sqlite",
        "fct-signature": "type",
        "fct-source": "src/Data-Memo-Sqlite.html#MkMemoRec",
        "fct-type": "type",
        "title": "MkMemoRec"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Memo Sqlite",
        "module": "Data.Memo.Sqlite",
        "name": "MkMemoRec",
        "normalized": "",
        "package": "memo-sqlite",
        "partial": "Mk Memo Rec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/memo-sqlite/docs/Data-Memo-Sqlite.html#t:ReadShow",
      "description": {
        "fct-descr": "\u003cp\u003eUse Read and Show for database (de)serialization.\n\u003c/p\u003e",
        "fct-module": "Data.Memo.Sqlite",
        "fct-package": "memo-sqlite",
        "fct-signature": "data",
        "fct-source": "src/Data-Memo-Sqlite.html#ReadShow",
        "fct-type": "data",
        "title": "ReadShow"
      },
      "index": {
        "description": "Use Read and Show for database de serialization",
        "hierarchy": "Data Memo Sqlite",
        "module": "Data.Memo.Sqlite",
        "name": "ReadShow",
        "normalized": "",
        "package": "memo-sqlite",
        "partial": "Read Show",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/memo-sqlite/docs/Data-Memo-Sqlite.html#t:SQLData",
      "description": {
        "fct-module": "Data.Memo.Sqlite",
        "fct-package": "memo-sqlite",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "SQLData"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Memo Sqlite",
        "module": "Data.Memo.Sqlite",
        "name": "SQLData",
        "normalized": "",
        "package": "memo-sqlite",
        "partial": "SQLData",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/memo-sqlite/docs/Data-Memo-Sqlite.html#t:Sqlite",
      "description": {
        "fct-descr": "\u003cp\u003eDatabase (de)serialization\n\u003c/p\u003e",
        "fct-module": "Data.Memo.Sqlite",
        "fct-package": "memo-sqlite",
        "fct-signature": "class",
        "fct-source": "src/Data-Memo-Sqlite.html#Sqlite",
        "fct-type": "class",
        "title": "Sqlite"
      },
      "index": {
        "description": "Database de serialization",
        "hierarchy": "Data Memo Sqlite",
        "module": "Data.Memo.Sqlite",
        "name": "Sqlite",
        "normalized": "",
        "package": "memo-sqlite",
        "partial": "Sqlite",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/memo-sqlite/docs/Data-Memo-Sqlite.html#t:Table",
      "description": {
        "fct-descr": "\u003cp\u003eA valid SQLite3 table name.\n\u003c/p\u003e",
        "fct-module": "Data.Memo.Sqlite",
        "fct-package": "memo-sqlite",
        "fct-signature": "data",
        "fct-source": "src/Data-Memo-Sqlite.html#Table",
        "fct-type": "data",
        "title": "Table"
      },
      "index": {
        "description": "valid SQLite3 table name",
        "hierarchy": "Data Memo Sqlite",
        "module": "Data.Memo.Sqlite",
        "name": "Table",
        "normalized": "",
        "package": "memo-sqlite",
        "partial": "Table",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/memo-sqlite/docs/Data-Memo-Sqlite.html#t:Unwrap",
      "description": {
        "fct-module": "Data.Memo.Sqlite",
        "fct-package": "memo-sqlite",
        "fct-signature": "type",
        "fct-source": "src/Data-Memo-Sqlite.html#Unwrap",
        "fct-type": "type",
        "title": "Unwrap"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Memo Sqlite",
        "module": "Data.Memo.Sqlite",
        "name": "Unwrap",
        "normalized": "",
        "package": "memo-sqlite",
        "partial": "Unwrap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/memo-sqlite/docs/Data-Memo-Sqlite.html#t:Wrap",
      "description": {
        "fct-module": "Data.Memo.Sqlite",
        "fct-package": "memo-sqlite",
        "fct-signature": "type",
        "fct-source": "src/Data-Memo-Sqlite.html#Wrap",
        "fct-type": "type",
        "title": "Wrap"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Memo Sqlite",
        "module": "Data.Memo.Sqlite",
        "name": "Wrap",
        "normalized": "",
        "package": "memo-sqlite",
        "partial": "Wrap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/memo-sqlite/docs/Data-Memo-Sqlite.html#t:Wrapper",
      "description": {
        "fct-module": "Data.Memo.Sqlite",
        "fct-package": "memo-sqlite",
        "fct-signature": "type",
        "fct-source": "src/Data-Memo-Sqlite.html#Wrapper",
        "fct-type": "type",
        "title": "Wrapper"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Memo Sqlite",
        "module": "Data.Memo.Sqlite",
        "name": "Wrapper",
        "normalized": "",
        "package": "memo-sqlite",
        "partial": "Wrapper",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/memo-sqlite/docs/Data-Memo-Sqlite.html#v:SQLBlob",
      "description": {
        "fct-module": "Data.Memo.Sqlite",
        "fct-package": "memo-sqlite",
        "fct-signature": "SQLBlob ByteString",
        "fct-type": "function",
        "title": "SQLBlob"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Memo Sqlite",
        "module": "Data.Memo.Sqlite",
        "name": "SQLBlob",
        "normalized": "",
        "package": "memo-sqlite",
        "partial": "SQLBlob",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/memo-sqlite/docs/Data-Memo-Sqlite.html#v:SQLFloat",
      "description": {
        "fct-module": "Data.Memo.Sqlite",
        "fct-package": "memo-sqlite",
        "fct-signature": "SQLFloat Double",
        "fct-type": "function",
        "title": "SQLFloat"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Memo Sqlite",
        "module": "Data.Memo.Sqlite",
        "name": "SQLFloat",
        "normalized": "",
        "package": "memo-sqlite",
        "partial": "SQLFloat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/memo-sqlite/docs/Data-Memo-Sqlite.html#v:SQLInteger",
      "description": {
        "fct-module": "Data.Memo.Sqlite",
        "fct-package": "memo-sqlite",
        "fct-signature": "SQLInteger Int64",
        "fct-type": "function",
        "title": "SQLInteger"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Memo Sqlite",
        "module": "Data.Memo.Sqlite",
        "name": "SQLInteger",
        "normalized": "",
        "package": "memo-sqlite",
        "partial": "SQLInteger",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/memo-sqlite/docs/Data-Memo-Sqlite.html#v:SQLNull",
      "description": {
        "fct-module": "Data.Memo.Sqlite",
        "fct-package": "memo-sqlite",
        "fct-signature": "SQLNull",
        "fct-type": "function",
        "title": "SQLNull"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Memo Sqlite",
        "module": "Data.Memo.Sqlite",
        "name": "SQLNull",
        "normalized": "",
        "package": "memo-sqlite",
        "partial": "SQLNull",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/memo-sqlite/docs/Data-Memo-Sqlite.html#v:SQLText",
      "description": {
        "fct-module": "Data.Memo.Sqlite",
        "fct-package": "memo-sqlite",
        "fct-signature": "SQLText String",
        "fct-type": "function",
        "title": "SQLText"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Memo Sqlite",
        "module": "Data.Memo.Sqlite",
        "name": "SQLText",
        "normalized": "",
        "package": "memo-sqlite",
        "partial": "SQLText",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/memo-sqlite/docs/Data-Memo-Sqlite.html#v:fromSqlite",
      "description": {
        "fct-descr": "\u003cp\u003eDeserialize from SQLite3 data.\n\u003c/p\u003e",
        "fct-module": "Data.Memo.Sqlite",
        "fct-package": "memo-sqlite",
        "fct-signature": "SQLData -\u003e t",
        "fct-source": "src/Data-Memo-Sqlite.html#fromSqlite",
        "fct-type": "method",
        "title": "fromSqlite"
      },
      "index": {
        "description": "Deserialize from SQLite3 data",
        "hierarchy": "Data Memo Sqlite",
        "module": "Data.Memo.Sqlite",
        "name": "fromSqlite",
        "normalized": "SQLData-\u003ea",
        "package": "memo-sqlite",
        "partial": "Sqlite",
        "signature": "SQLData-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/memo-sqlite/docs/Data-Memo-Sqlite.html#v:memo",
      "description": {
        "fct-descr": "\u003cp\u003eMemoize a function using an SQLite3 database.\n\u003c/p\u003e",
        "fct-module": "Data.Memo.Sqlite",
        "fct-package": "memo-sqlite",
        "fct-signature": "MkMemo k v",
        "fct-source": "src/Data-Memo-Sqlite.html#memo",
        "fct-type": "function",
        "title": "memo"
      },
      "index": {
        "description": "Memoize function using an SQLite3 database",
        "hierarchy": "Data Memo Sqlite",
        "module": "Data.Memo.Sqlite",
        "name": "memo",
        "normalized": "",
        "package": "memo-sqlite",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/memo-sqlite/docs/Data-Memo-Sqlite.html#v:memo-39-",
      "description": {
        "fct-descr": "\u003cp\u003eMemoize a function using an SQLite3 database, using the supplied wrapper for control of (de)serialization.\n\u003c/p\u003e",
        "fct-module": "Data.Memo.Sqlite",
        "fct-package": "memo-sqlite",
        "fct-signature": "Wrapper s t k v -\u003e MkMemo k v",
        "fct-source": "src/Data-Memo-Sqlite.html#memo%27",
        "fct-type": "function",
        "title": "memo'"
      },
      "index": {
        "description": "Memoize function using an SQLite3 database using the supplied wrapper for control of de serialization",
        "hierarchy": "Data Memo Sqlite",
        "module": "Data.Memo.Sqlite",
        "name": "memo'",
        "normalized": "Wrapper a b c d-\u003eMkMemo c d",
        "package": "memo-sqlite",
        "partial": "",
        "signature": "Wrapper s t k v-\u003eMkMemo k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/memo-sqlite/docs/Data-Memo-Sqlite.html#v:memoRec",
      "description": {
        "fct-descr": "\u003cp\u003eMemoize a recursive function using an SQLite3 database.\n\u003c/p\u003e",
        "fct-module": "Data.Memo.Sqlite",
        "fct-package": "memo-sqlite",
        "fct-signature": "MkMemoRec k v",
        "fct-source": "src/Data-Memo-Sqlite.html#memoRec",
        "fct-type": "function",
        "title": "memoRec"
      },
      "index": {
        "description": "Memoize recursive function using an SQLite3 database",
        "hierarchy": "Data Memo Sqlite",
        "module": "Data.Memo.Sqlite",
        "name": "memoRec",
        "normalized": "",
        "package": "memo-sqlite",
        "partial": "Rec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/memo-sqlite/docs/Data-Memo-Sqlite.html#v:memoRec-39-",
      "description": {
        "fct-descr": "\u003cp\u003eMemoize a recursive function using an SQLite3 database, using the supplied wrapper for control of (de)serialization.\n\u003c/p\u003e",
        "fct-module": "Data.Memo.Sqlite",
        "fct-package": "memo-sqlite",
        "fct-signature": "Wrapper s t k v -\u003e MkMemoRec k v",
        "fct-source": "src/Data-Memo-Sqlite.html#memoRec%27",
        "fct-type": "function",
        "title": "memoRec'"
      },
      "index": {
        "description": "Memoize recursive function using an SQLite3 database using the supplied wrapper for control of de serialization",
        "hierarchy": "Data Memo Sqlite",
        "module": "Data.Memo.Sqlite",
        "name": "memoRec'",
        "normalized": "Wrapper a b c d-\u003eMkMemoRec c d",
        "package": "memo-sqlite",
        "partial": "Rec'",
        "signature": "Wrapper s t k v-\u003eMkMemoRec k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/memo-sqlite/docs/Data-Memo-Sqlite.html#v:readShow",
      "description": {
        "fct-descr": "\u003cp\u003eWrapper using Read and Show for (de)serialization of both keys and values.\n\u003c/p\u003e",
        "fct-module": "Data.Memo.Sqlite",
        "fct-package": "memo-sqlite",
        "fct-signature": "Wrapper ReadShow ReadShow k v",
        "fct-source": "src/Data-Memo-Sqlite.html#readShow",
        "fct-type": "function",
        "title": "readShow"
      },
      "index": {
        "description": "Wrapper using Read and Show for de serialization of both keys and values",
        "hierarchy": "Data Memo Sqlite",
        "module": "Data.Memo.Sqlite",
        "name": "readShow",
        "normalized": "",
        "package": "memo-sqlite",
        "partial": "Show",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/memo-sqlite/docs/Data-Memo-Sqlite.html#v:table",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a table name.\n\u003c/p\u003e",
        "fct-module": "Data.Memo.Sqlite",
        "fct-package": "memo-sqlite",
        "fct-signature": "String -\u003e Maybe Table",
        "fct-source": "src/Data-Memo-Sqlite.html#table",
        "fct-type": "function",
        "title": "table"
      },
      "index": {
        "description": "Construct table name",
        "hierarchy": "Data Memo Sqlite",
        "module": "Data.Memo.Sqlite",
        "name": "table",
        "normalized": "String-\u003eMaybe Table",
        "package": "memo-sqlite",
        "partial": "",
        "signature": "String-\u003eMaybe Table"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/memo-sqlite/docs/Data-Memo-Sqlite.html#v:toSqlite",
      "description": {
        "fct-descr": "\u003cp\u003eSerialize to SQLite3 data.\n\u003c/p\u003e",
        "fct-module": "Data.Memo.Sqlite",
        "fct-package": "memo-sqlite",
        "fct-signature": "t -\u003e SQLData",
        "fct-source": "src/Data-Memo-Sqlite.html#toSqlite",
        "fct-type": "method",
        "title": "toSqlite"
      },
      "index": {
        "description": "Serialize to SQLite3 data",
        "hierarchy": "Data Memo Sqlite",
        "module": "Data.Memo.Sqlite",
        "name": "toSqlite",
        "normalized": "a-\u003eSQLData",
        "package": "memo-sqlite",
        "partial": "Sqlite",
        "signature": "t-\u003eSQLData"
      }
    }
  }
]