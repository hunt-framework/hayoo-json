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
        "word": "memo-sqlite"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMemoize functions in a SQLite3 database.\n\u003c/p\u003e\u003cp\u003eThe functions memoized while having type \u003ccode\u003ef :: k -\u003e IO v\u003c/code\u003e must result in\nthe same output given the same input, otherwise all kinds of wrongness\nwill result.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003ecleanup\u003c/code\u003e action returned by the memoizers must not be called if you\nare going to use the memoized function again; beware.\n\u003c/p\u003e\u003cp\u003eAn example program (included in the examples directory) might look like:\n\u003c/p\u003e\u003cpre\u003e -- fib.hs\n import Data.Memo.Sqlite (memoRec', readShow, table)\n\n import Control.Monad (liftM2)\n import System.Environment (getArgs)\n\n fib :: (Integer -\u003e IO Integer) -\u003e Integer -\u003e IO Integer\n fib _fib' n@0 = print n \u003e\u003e return 0\n fib _fib' n@1 = print n \u003e\u003e return 1\n fib  fib' n   = print n \u003e\u003e liftM2 (+) (fib' (n - 1)) (fib' (n - 2))\n\n main :: IO ()\n main = do\n   [file, ts, ns] \u003c- getArgs\n   let Just t = table ts\n       n = read ns\n   (cleanup, fib') \u003c- memoRec' readShow file t fib\n   fib' n \u003e\u003e= \\nth -\u003e putStrLn $ \"fib(\" ++ show n ++ \") = \" ++ show nth\n   cleanup\n\u003c/pre\u003e\u003cp\u003eExample usage:\n\u003c/p\u003e\u003cpre\u003e ghc --make fib.hs\n ./fib fibs.sqlite3 fibs 10\n ./fib fibs.sqlite3 fibs 10\n ./fib fibs.sqlite3 fibs 100\n ./fib fibs.sqlite3 fibs 100\n\u003c/pre\u003e\u003cp\u003eSee also:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e the \u003ccode\u003edata-memocombinators\u003c/code\u003e package for pure in-memory memoization.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Data.Memo.Sqlite",
          "name": "Sqlite",
          "package": "memo-sqlite",
          "source": "src/Data-Memo-Sqlite.html",
          "type": "module"
        },
        "index": {
          "description": "Memoize functions in SQLite3 database The functions memoized while having type IO must result in the same output given the same input otherwise all kinds of wrongness will result The cleanup action returned by the memoizers must not be called if you are going to use the memoized function again beware An example program included in the examples directory might look like fib.hs import Data.Memo.Sqlite memoRec readShow table import Control.Monad liftM2 import System.Environment getArgs fib Integer IO Integer Integer IO Integer fib fib n@0 print return fib fib n@1 print return fib fib print liftM2 fib fib main IO main do file ts ns getArgs let Just table ts read ns cleanup fib memoRec readShow file fib fib nth putStrLn fib show show nth cleanup Example usage ghc make fib.hs fib fibs.sqlite3 fibs fib fibs.sqlite3 fibs fib fibs.sqlite3 fibs fib fibs.sqlite3 fibs See also the data-memocombinators package for pure in-memory memoization",
          "hierarchy": "Data Memo Sqlite",
          "module": "Data.Memo.Sqlite",
          "name": "Sqlite",
          "package": "memo-sqlite",
          "partial": "Sqlite",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/memo-sqlite/docs/Data-Memo-Sqlite.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Memo.Sqlite",
          "name": "Memo",
          "package": "memo-sqlite",
          "source": "src/Data-Memo-Sqlite.html#Memo",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Memo Sqlite",
          "module": "Data.Memo.Sqlite",
          "name": "Memo",
          "package": "memo-sqlite",
          "partial": "Memo",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/memo-sqlite/docs/Data-Memo-Sqlite.html#t:Memo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Memo.Sqlite",
          "name": "MemoRec",
          "package": "memo-sqlite",
          "source": "src/Data-Memo-Sqlite.html#MemoRec",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Memo Sqlite",
          "module": "Data.Memo.Sqlite",
          "name": "MemoRec",
          "package": "memo-sqlite",
          "partial": "Memo Rec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/memo-sqlite/docs/Data-Memo-Sqlite.html#t:MemoRec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Memo.Sqlite",
          "name": "MkMemo",
          "package": "memo-sqlite",
          "source": "src/Data-Memo-Sqlite.html#MkMemo",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Memo Sqlite",
          "module": "Data.Memo.Sqlite",
          "name": "MkMemo",
          "package": "memo-sqlite",
          "partial": "Mk Memo",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/memo-sqlite/docs/Data-Memo-Sqlite.html#t:MkMemo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Memo.Sqlite",
          "name": "MkMemoRec",
          "package": "memo-sqlite",
          "source": "src/Data-Memo-Sqlite.html#MkMemoRec",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Memo Sqlite",
          "module": "Data.Memo.Sqlite",
          "name": "MkMemoRec",
          "package": "memo-sqlite",
          "partial": "Mk Memo Rec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/memo-sqlite/docs/Data-Memo-Sqlite.html#t:MkMemoRec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse Read and Show for database (de)serialization.\n\u003c/p\u003e",
          "module": "Data.Memo.Sqlite",
          "name": "ReadShow",
          "package": "memo-sqlite",
          "source": "src/Data-Memo-Sqlite.html#ReadShow",
          "type": "data"
        },
        "index": {
          "description": "Use Read and Show for database de serialization",
          "hierarchy": "Data Memo Sqlite",
          "module": "Data.Memo.Sqlite",
          "name": "ReadShow",
          "package": "memo-sqlite",
          "partial": "Read Show",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/memo-sqlite/docs/Data-Memo-Sqlite.html#t:ReadShow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Memo.Sqlite",
          "name": "SQLData",
          "package": "memo-sqlite",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Memo Sqlite",
          "module": "Data.Memo.Sqlite",
          "name": "SQLData",
          "package": "memo-sqlite",
          "partial": "SQLData",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/memo-sqlite/docs/Data-Memo-Sqlite.html#t:SQLData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDatabase (de)serialization\n\u003c/p\u003e",
          "module": "Data.Memo.Sqlite",
          "name": "Sqlite",
          "package": "memo-sqlite",
          "source": "src/Data-Memo-Sqlite.html#Sqlite",
          "type": "class"
        },
        "index": {
          "description": "Database de serialization",
          "hierarchy": "Data Memo Sqlite",
          "module": "Data.Memo.Sqlite",
          "name": "Sqlite",
          "package": "memo-sqlite",
          "partial": "Sqlite",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/memo-sqlite/docs/Data-Memo-Sqlite.html#t:Sqlite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA valid SQLite3 table name.\n\u003c/p\u003e",
          "module": "Data.Memo.Sqlite",
          "name": "Table",
          "package": "memo-sqlite",
          "source": "src/Data-Memo-Sqlite.html#Table",
          "type": "data"
        },
        "index": {
          "description": "valid SQLite3 table name",
          "hierarchy": "Data Memo Sqlite",
          "module": "Data.Memo.Sqlite",
          "name": "Table",
          "package": "memo-sqlite",
          "partial": "Table",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/memo-sqlite/docs/Data-Memo-Sqlite.html#t:Table"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Memo.Sqlite",
          "name": "Unwrap",
          "package": "memo-sqlite",
          "source": "src/Data-Memo-Sqlite.html#Unwrap",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Memo Sqlite",
          "module": "Data.Memo.Sqlite",
          "name": "Unwrap",
          "package": "memo-sqlite",
          "partial": "Unwrap",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/memo-sqlite/docs/Data-Memo-Sqlite.html#t:Unwrap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Memo.Sqlite",
          "name": "Wrap",
          "package": "memo-sqlite",
          "source": "src/Data-Memo-Sqlite.html#Wrap",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Memo Sqlite",
          "module": "Data.Memo.Sqlite",
          "name": "Wrap",
          "package": "memo-sqlite",
          "partial": "Wrap",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/memo-sqlite/docs/Data-Memo-Sqlite.html#t:Wrap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Memo.Sqlite",
          "name": "Wrapper",
          "package": "memo-sqlite",
          "source": "src/Data-Memo-Sqlite.html#Wrapper",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Memo Sqlite",
          "module": "Data.Memo.Sqlite",
          "name": "Wrapper",
          "package": "memo-sqlite",
          "partial": "Wrapper",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/memo-sqlite/docs/Data-Memo-Sqlite.html#t:Wrapper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Memo.Sqlite",
          "name": "SQLBlob",
          "package": "memo-sqlite",
          "signature": "SQLBlob ByteString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Memo Sqlite",
          "module": "Data.Memo.Sqlite",
          "name": "SQLBlob",
          "package": "memo-sqlite",
          "partial": "SQLBlob",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/memo-sqlite/docs/Data-Memo-Sqlite.html#v:SQLBlob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Memo.Sqlite",
          "name": "SQLFloat",
          "package": "memo-sqlite",
          "signature": "SQLFloat Double",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Memo Sqlite",
          "module": "Data.Memo.Sqlite",
          "name": "SQLFloat",
          "package": "memo-sqlite",
          "partial": "SQLFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/memo-sqlite/docs/Data-Memo-Sqlite.html#v:SQLFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Memo.Sqlite",
          "name": "SQLInteger",
          "package": "memo-sqlite",
          "signature": "SQLInteger Int64",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Memo Sqlite",
          "module": "Data.Memo.Sqlite",
          "name": "SQLInteger",
          "package": "memo-sqlite",
          "partial": "SQLInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/memo-sqlite/docs/Data-Memo-Sqlite.html#v:SQLInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Memo.Sqlite",
          "name": "SQLNull",
          "package": "memo-sqlite",
          "signature": "SQLNull",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Memo Sqlite",
          "module": "Data.Memo.Sqlite",
          "name": "SQLNull",
          "package": "memo-sqlite",
          "partial": "SQLNull",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/memo-sqlite/docs/Data-Memo-Sqlite.html#v:SQLNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Memo.Sqlite",
          "name": "SQLText",
          "package": "memo-sqlite",
          "signature": "SQLText String",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Memo Sqlite",
          "module": "Data.Memo.Sqlite",
          "name": "SQLText",
          "package": "memo-sqlite",
          "partial": "SQLText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/memo-sqlite/docs/Data-Memo-Sqlite.html#v:SQLText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeserialize from SQLite3 data.\n\u003c/p\u003e",
          "module": "Data.Memo.Sqlite",
          "name": "fromSqlite",
          "package": "memo-sqlite",
          "signature": "SQLData -\u003e t",
          "source": "src/Data-Memo-Sqlite.html#fromSqlite",
          "type": "method"
        },
        "index": {
          "description": "Deserialize from SQLite3 data",
          "hierarchy": "Data Memo Sqlite",
          "module": "Data.Memo.Sqlite",
          "name": "fromSqlite",
          "normalized": "SQLData-\u003ea",
          "package": "memo-sqlite",
          "partial": "Sqlite",
          "signature": "SQLData-\u003et",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/memo-sqlite/docs/Data-Memo-Sqlite.html#v:fromSqlite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMemoize a function using an SQLite3 database.\n\u003c/p\u003e",
          "module": "Data.Memo.Sqlite",
          "name": "memo",
          "package": "memo-sqlite",
          "signature": "MkMemo k v",
          "source": "src/Data-Memo-Sqlite.html#memo",
          "type": "function"
        },
        "index": {
          "description": "Memoize function using an SQLite3 database",
          "hierarchy": "Data Memo Sqlite",
          "module": "Data.Memo.Sqlite",
          "name": "memo",
          "package": "memo-sqlite",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/memo-sqlite/docs/Data-Memo-Sqlite.html#v:memo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMemoize a function using an SQLite3 database, using the supplied wrapper for control of (de)serialization.\n\u003c/p\u003e",
          "module": "Data.Memo.Sqlite",
          "name": "memo'",
          "package": "memo-sqlite",
          "signature": "Wrapper s t k v -\u003e MkMemo k v",
          "source": "src/Data-Memo-Sqlite.html#memo%27",
          "type": "function"
        },
        "index": {
          "description": "Memoize function using an SQLite3 database using the supplied wrapper for control of de serialization",
          "hierarchy": "Data Memo Sqlite",
          "module": "Data.Memo.Sqlite",
          "name": "memo'",
          "normalized": "Wrapper a b c d-\u003eMkMemo c d",
          "package": "memo-sqlite",
          "signature": "Wrapper s t k v-\u003eMkMemo k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/memo-sqlite/docs/Data-Memo-Sqlite.html#v:memo-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMemoize a recursive function using an SQLite3 database.\n\u003c/p\u003e",
          "module": "Data.Memo.Sqlite",
          "name": "memoRec",
          "package": "memo-sqlite",
          "signature": "MkMemoRec k v",
          "source": "src/Data-Memo-Sqlite.html#memoRec",
          "type": "function"
        },
        "index": {
          "description": "Memoize recursive function using an SQLite3 database",
          "hierarchy": "Data Memo Sqlite",
          "module": "Data.Memo.Sqlite",
          "name": "memoRec",
          "package": "memo-sqlite",
          "partial": "Rec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/memo-sqlite/docs/Data-Memo-Sqlite.html#v:memoRec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMemoize a recursive function using an SQLite3 database, using the supplied wrapper for control of (de)serialization.\n\u003c/p\u003e",
          "module": "Data.Memo.Sqlite",
          "name": "memoRec'",
          "package": "memo-sqlite",
          "signature": "Wrapper s t k v -\u003e MkMemoRec k v",
          "source": "src/Data-Memo-Sqlite.html#memoRec%27",
          "type": "function"
        },
        "index": {
          "description": "Memoize recursive function using an SQLite3 database using the supplied wrapper for control of de serialization",
          "hierarchy": "Data Memo Sqlite",
          "module": "Data.Memo.Sqlite",
          "name": "memoRec'",
          "normalized": "Wrapper a b c d-\u003eMkMemoRec c d",
          "package": "memo-sqlite",
          "partial": "Rec'",
          "signature": "Wrapper s t k v-\u003eMkMemoRec k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/memo-sqlite/docs/Data-Memo-Sqlite.html#v:memoRec-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapper using Read and Show for (de)serialization of both keys and values.\n\u003c/p\u003e",
          "module": "Data.Memo.Sqlite",
          "name": "readShow",
          "package": "memo-sqlite",
          "signature": "Wrapper ReadShow ReadShow k v",
          "source": "src/Data-Memo-Sqlite.html#readShow",
          "type": "function"
        },
        "index": {
          "description": "Wrapper using Read and Show for de serialization of both keys and values",
          "hierarchy": "Data Memo Sqlite",
          "module": "Data.Memo.Sqlite",
          "name": "readShow",
          "package": "memo-sqlite",
          "partial": "Show",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/memo-sqlite/docs/Data-Memo-Sqlite.html#v:readShow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a table name.\n\u003c/p\u003e",
          "module": "Data.Memo.Sqlite",
          "name": "table",
          "package": "memo-sqlite",
          "signature": "String -\u003e Maybe Table",
          "source": "src/Data-Memo-Sqlite.html#table",
          "type": "function"
        },
        "index": {
          "description": "Construct table name",
          "hierarchy": "Data Memo Sqlite",
          "module": "Data.Memo.Sqlite",
          "name": "table",
          "normalized": "String-\u003eMaybe Table",
          "package": "memo-sqlite",
          "signature": "String-\u003eMaybe Table",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/memo-sqlite/docs/Data-Memo-Sqlite.html#v:table"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSerialize to SQLite3 data.\n\u003c/p\u003e",
          "module": "Data.Memo.Sqlite",
          "name": "toSqlite",
          "package": "memo-sqlite",
          "signature": "t -\u003e SQLData",
          "source": "src/Data-Memo-Sqlite.html#toSqlite",
          "type": "method"
        },
        "index": {
          "description": "Serialize to SQLite3 data",
          "hierarchy": "Data Memo Sqlite",
          "module": "Data.Memo.Sqlite",
          "name": "toSqlite",
          "normalized": "a-\u003eSQLData",
          "package": "memo-sqlite",
          "partial": "Sqlite",
          "signature": "t-\u003eSQLData",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/memo-sqlite/docs/Data-Memo-Sqlite.html#v:toSqlite"
      }
    }
  ]
]