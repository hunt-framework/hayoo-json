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
        "word": "berkeleydb"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn efficient implementation of maps from keys to values (dictionaries).\n\u003c/p\u003e\u003cp\u003eSince many function names (but not the type name) clash with\n \u003ca\u003ePrelude\u003c/a\u003e names, this module is usually imported \u003ccode\u003equalified\u003c/code\u003e, e.g.\n\u003c/p\u003e\u003cpre\u003e  import Data.BerkeleyDB (DB)\n  import qualified Data.BerkeleyDB as DB\n\u003c/pre\u003e\u003cp\u003eThe implementation of \u003ccode\u003e\u003ca\u003eDb\u003c/a\u003e\u003c/code\u003e uses the berkeley db library. See\n    \u003ca\u003ehttp://en.wikipedia.org/wiki/Berkeley_DB\u003c/a\u003e and\n    \u003ca\u003ehttp://www.oracle.com/technology/products/berkeley-db/index.html\u003c/a\u003e  \n\u003c/p\u003e\u003cp\u003eNote that this implementation behaves exactly like a \u003ccode\u003eData.Map.Map ByteString ByteString\u003c/code\u003e,\n with the key and value encoded by \u003ccode\u003eData.Binary.encode/Data.Binary.decode\u003c/code\u003e.\n This means that keys aren't sorted according to Ord. Affected functions are:\n \u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eassocs\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eelems\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.BerkeleyDB",
          "name": "BerkeleyDB",
          "package": "berkeleydb",
          "source": "src/Data-BerkeleyDB.html",
          "type": "module"
        },
        "index": {
          "description": "An efficient implementation of maps from keys to values dictionaries Since many function names but not the type name clash with Prelude names this module is usually imported qualified e.g import Data.BerkeleyDB DB import qualified Data.BerkeleyDB as DB The implementation of Db uses the berkeley db library See http en.wikipedia.org wiki Berkeley DB and http www.oracle.com technology products berkeley-db index.html Note that this implementation behaves exactly like Data.Map.Map ByteString ByteString with the key and value encoded by Data.Binary.encode Data.Binary.decode This means that keys aren sorted according to Ord Affected functions are toList assocs elems",
          "hierarchy": "Data BerkeleyDB",
          "module": "Data.BerkeleyDB",
          "name": "BerkeleyDB",
          "package": "berkeleydb",
          "partial": "Berkeley DB",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/berkeleydb/docs/Data-BerkeleyDB.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BerkeleyDB",
          "name": "Db",
          "package": "berkeleydb",
          "source": "src/Data-BerkeleyDB.html#Db",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data BerkeleyDB",
          "module": "Data.BerkeleyDB",
          "name": "Db",
          "package": "berkeleydb",
          "partial": "Db",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/berkeleydb/docs/Data-BerkeleyDB.html#t:Db"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Find the value at a key.\n Calls \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e when the element can not be found.\n\u003c/p\u003e",
          "module": "Data.BerkeleyDB",
          "name": "(!)",
          "package": "berkeleydb",
          "signature": "Db k v -\u003e k -\u003e v",
          "source": "src/Data-BerkeleyDB.html#%21",
          "type": "function"
        },
        "index": {
          "description": "log Find the value at key Calls error when the element can not be found",
          "hierarchy": "Data BerkeleyDB",
          "module": "Data.BerkeleyDB",
          "name": "(!) !",
          "normalized": "Db a b-\u003ea-\u003eb",
          "package": "berkeleydb",
          "signature": "Db k v-\u003ek-\u003ev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berkeleydb/docs/Data-BerkeleyDB.html#v:-33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Adjust a value at a specific key. When the key is not\n a member of the map, the original map is returned.\n\u003c/p\u003e",
          "module": "Data.BerkeleyDB",
          "name": "adjust",
          "package": "berkeleydb",
          "signature": "(a -\u003e a) -\u003e k -\u003e Db k a -\u003e Db k a",
          "source": "src/Data-BerkeleyDB.html#adjust",
          "type": "function"
        },
        "index": {
          "description": "log Adjust value at specific key When the key is not member of the map the original map is returned",
          "hierarchy": "Data BerkeleyDB",
          "module": "Data.BerkeleyDB",
          "name": "adjust",
          "normalized": "(a-\u003ea)-\u003eb-\u003eDb b a-\u003eDb b a",
          "package": "berkeleydb",
          "signature": "(a-\u003ea)-\u003ek-\u003eDb k a-\u003eDb k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berkeleydb/docs/Data-BerkeleyDB.html#v:adjust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Adjust a value at a specific key. When the key is not\n a member of the map, the original map is returned.\n\u003c/p\u003e",
          "module": "Data.BerkeleyDB",
          "name": "adjustWithKey",
          "package": "berkeleydb",
          "signature": "(k -\u003e a -\u003e a) -\u003e k -\u003e Db k a -\u003e Db k a",
          "source": "src/Data-BerkeleyDB.html#adjustWithKey",
          "type": "function"
        },
        "index": {
          "description": "log Adjust value at specific key When the key is not member of the map the original map is returned",
          "hierarchy": "Data BerkeleyDB",
          "module": "Data.BerkeleyDB",
          "name": "adjustWithKey",
          "normalized": "(a-\u003eb-\u003eb)-\u003ea-\u003eDb a b-\u003eDb a b",
          "package": "berkeleydb",
          "partial": "With Key",
          "signature": "(k-\u003ea-\u003ea)-\u003ek-\u003eDb k a-\u003eDb k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berkeleydb/docs/Data-BerkeleyDB.html#v:adjustWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. The expression (\u003ccode\u003e\u003ccode\u003e\u003ca\u003ealter\u003c/a\u003e\u003c/code\u003e f k db\u003c/code\u003e) alters the value \u003ccode\u003ex\u003c/code\u003e at \u003ccode\u003ek\u003c/code\u003e, or absence thereof.\n \u003ccode\u003e\u003ca\u003ealter\u003c/a\u003e\u003c/code\u003e can be used to insert, delete, or update a value in a \u003ccode\u003e\u003ca\u003eDb\u003c/a\u003e\u003c/code\u003e.\n In short : \u003ccode\u003e\u003ccode\u003e\u003ca\u003elookup\u003c/a\u003e\u003c/code\u003e k (\u003ccode\u003e\u003ca\u003ealter\u003c/a\u003e\u003c/code\u003e f k m) = f (\u003ccode\u003e\u003ca\u003elookup\u003c/a\u003e\u003c/code\u003e k m)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.BerkeleyDB",
          "name": "alter",
          "package": "berkeleydb",
          "signature": "(Maybe a -\u003e Maybe a) -\u003e k -\u003e Db k a -\u003e Db k a",
          "source": "src/Data-BerkeleyDB.html#alter",
          "type": "function"
        },
        "index": {
          "description": "log The expression alter db alters the value at or absence thereof alter can be used to insert delete or update value in Db In short lookup alter lookup",
          "hierarchy": "Data BerkeleyDB",
          "module": "Data.BerkeleyDB",
          "name": "alter",
          "normalized": "(Maybe a-\u003eMaybe a)-\u003eb-\u003eDb b a-\u003eDb b a",
          "package": "berkeleydb",
          "signature": "(Maybe a-\u003eMaybe a)-\u003ek-\u003eDb k a-\u003eDb k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berkeleydb/docs/Data-BerkeleyDB.html#v:alter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Return all key/value pairs in the map in ascending key order.\n\u003c/p\u003e",
          "module": "Data.BerkeleyDB",
          "name": "assocs",
          "package": "berkeleydb",
          "signature": "Db key value -\u003e [(key, value)]",
          "source": "src/Data-BerkeleyDB.html#assocs",
          "type": "function"
        },
        "index": {
          "description": "Return all key value pairs in the map in ascending key order",
          "hierarchy": "Data BerkeleyDB",
          "module": "Data.BerkeleyDB",
          "name": "assocs",
          "normalized": "Db a b-\u003e[(a,b)]",
          "package": "berkeleydb",
          "signature": "Db key value-\u003e[(key,value)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berkeleydb/docs/Data-BerkeleyDB.html#v:assocs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Delete a key and its value from the database. When the key is not\n a member of the database, the original database is returned.\n\u003c/p\u003e",
          "module": "Data.BerkeleyDB",
          "name": "delete",
          "package": "berkeleydb",
          "signature": "key -\u003e Db key value -\u003e Db key value",
          "source": "src/Data-BerkeleyDB.html#delete",
          "type": "function"
        },
        "index": {
          "description": "log Delete key and its value from the database When the key is not member of the database the original database is returned",
          "hierarchy": "Data BerkeleyDB",
          "module": "Data.BerkeleyDB",
          "name": "delete",
          "normalized": "a-\u003eDb a b-\u003eDb a b",
          "package": "berkeleydb",
          "signature": "key-\u003eDb key value-\u003eDb key value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berkeleydb/docs/Data-BerkeleyDB.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.\n Return all elements of the database in the ascending order of their keys\n sorted by their binary representation.\n\u003c/p\u003e",
          "module": "Data.BerkeleyDB",
          "name": "elems",
          "package": "berkeleydb",
          "signature": "Db key value -\u003e [value]",
          "source": "src/Data-BerkeleyDB.html#elems",
          "type": "function"
        },
        "index": {
          "description": "Return all elements of the database in the ascending order of their keys sorted by their binary representation",
          "hierarchy": "Data BerkeleyDB",
          "module": "Data.BerkeleyDB",
          "name": "elems",
          "normalized": "Db a b-\u003e[b]",
          "package": "berkeleydb",
          "signature": "Db key value-\u003e[value]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berkeleydb/docs/Data-BerkeleyDB.html#v:elems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. The empty database.\n\u003c/p\u003e",
          "module": "Data.BerkeleyDB",
          "name": "empty",
          "package": "berkeleydb",
          "signature": "Db key value",
          "source": "src/Data-BerkeleyDB.html#empty",
          "type": "function"
        },
        "index": {
          "description": "The empty database",
          "hierarchy": "Data BerkeleyDB",
          "module": "Data.BerkeleyDB",
          "name": "empty",
          "package": "berkeleydb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berkeleydb/docs/Data-BerkeleyDB.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Filter all values that satisfy the predicate.\n\u003c/p\u003e",
          "module": "Data.BerkeleyDB",
          "name": "filter",
          "package": "berkeleydb",
          "signature": "(a -\u003e Bool) -\u003e Db k a -\u003e Db k a",
          "source": "src/Data-BerkeleyDB.html#filter",
          "type": "function"
        },
        "index": {
          "description": "Filter all values that satisfy the predicate",
          "hierarchy": "Data BerkeleyDB",
          "module": "Data.BerkeleyDB",
          "name": "filter",
          "normalized": "(a-\u003eBool)-\u003eDb b a-\u003eDb b a",
          "package": "berkeleydb",
          "signature": "(a-\u003eBool)-\u003eDb k a-\u003eDb k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berkeleydb/docs/Data-BerkeleyDB.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Filter all keys/values that satisfy the predicate.\n\u003c/p\u003e",
          "module": "Data.BerkeleyDB",
          "name": "filterWithKey",
          "package": "berkeleydb",
          "signature": "(k -\u003e a -\u003e Bool) -\u003e Db k a -\u003e Db k a",
          "source": "src/Data-BerkeleyDB.html#filterWithKey",
          "type": "function"
        },
        "index": {
          "description": "Filter all keys values that satisfy the predicate",
          "hierarchy": "Data BerkeleyDB",
          "module": "Data.BerkeleyDB",
          "name": "filterWithKey",
          "normalized": "(a-\u003eb-\u003eBool)-\u003eDb a b-\u003eDb a b",
          "package": "berkeleydb",
          "partial": "With Key",
          "signature": "(k-\u003ea-\u003eBool)-\u003eDb k a-\u003eDb k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berkeleydb/docs/Data-BerkeleyDB.html#v:filterWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. The expression \u003ccode\u003e(\u003ccode\u003e\u003ca\u003efindWithDefault\u003c/a\u003e\u003c/code\u003e def k db)\u003c/code\u003e returns\n the value at key \u003ccode\u003ek\u003c/code\u003e or returns \u003ccode\u003edef\u003c/code\u003e when the key is not in the database.\n\u003c/p\u003e",
          "module": "Data.BerkeleyDB",
          "name": "findWithDefault",
          "package": "berkeleydb",
          "signature": "a -\u003e k -\u003e Db k a -\u003e a",
          "source": "src/Data-BerkeleyDB.html#findWithDefault",
          "type": "function"
        },
        "index": {
          "description": "log The expression findWithDefault def db returns the value at key or returns def when the key is not in the database",
          "hierarchy": "Data BerkeleyDB",
          "module": "Data.BerkeleyDB",
          "name": "findWithDefault",
          "normalized": "a-\u003eb-\u003eDb b a-\u003ea",
          "package": "berkeleydb",
          "partial": "With Default",
          "signature": "a-\u003ek-\u003eDb k a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berkeleydb/docs/Data-BerkeleyDB.html#v:findWithDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Fold the values in the map, such that\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e f z == \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e f z . \u003ccode\u003e\u003ca\u003eelems\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n For example,\n\u003c/p\u003e\u003cpre\u003e elems map = fold (:) [] map\n\u003c/pre\u003e",
          "module": "Data.BerkeleyDB",
          "name": "fold",
          "package": "berkeleydb",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e Db k a -\u003e b",
          "source": "src/Data-BerkeleyDB.html#fold",
          "type": "function"
        },
        "index": {
          "description": "Fold the values in the map such that fold foldr elems For example elems map fold map",
          "hierarchy": "Data BerkeleyDB",
          "module": "Data.BerkeleyDB",
          "name": "fold",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eDb c a-\u003eb",
          "package": "berkeleydb",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eDb k a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berkeleydb/docs/Data-BerkeleyDB.html#v:fold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n*log n)\u003c/em\u003e. Build a database from a list of key/value pairs. See also \u003ccode\u003efromAscList\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.BerkeleyDB",
          "name": "fromList",
          "package": "berkeleydb",
          "signature": "[(key, value)] -\u003e Db key value",
          "source": "src/Data-BerkeleyDB.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "log Build database from list of key value pairs See also fromAscList",
          "hierarchy": "Data BerkeleyDB",
          "module": "Data.BerkeleyDB",
          "name": "fromList",
          "normalized": "[(a,b)]-\u003eDb a b",
          "package": "berkeleydb",
          "partial": "List",
          "signature": "[(key,value)]-\u003eDb key value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berkeleydb/docs/Data-BerkeleyDB.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n*log n)\u003c/em\u003e. Build a database from a list of key/value pairs with a combining function.\n\u003c/p\u003e",
          "module": "Data.BerkeleyDB",
          "name": "fromListWith",
          "package": "berkeleydb",
          "signature": "(a -\u003e a -\u003e a) -\u003e [(k, a)] -\u003e Db k a",
          "source": "src/Data-BerkeleyDB.html#fromListWith",
          "type": "function"
        },
        "index": {
          "description": "log Build database from list of key value pairs with combining function",
          "hierarchy": "Data BerkeleyDB",
          "module": "Data.BerkeleyDB",
          "name": "fromListWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[(b,a)]-\u003eDb b a",
          "package": "berkeleydb",
          "partial": "List With",
          "signature": "(a-\u003ea-\u003ea)-\u003e[(k,a)]-\u003eDb k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berkeleydb/docs/Data-BerkeleyDB.html#v:fromListWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n*log n)\u003c/em\u003e. Build a database from a list of key/value pairs with a combining function.\n\u003c/p\u003e",
          "module": "Data.BerkeleyDB",
          "name": "fromListWithKey",
          "package": "berkeleydb",
          "signature": "(k -\u003e a -\u003e a -\u003e a) -\u003e [(k, a)] -\u003e Db k a",
          "source": "src/Data-BerkeleyDB.html#fromListWithKey",
          "type": "function"
        },
        "index": {
          "description": "log Build database from list of key value pairs with combining function",
          "hierarchy": "Data BerkeleyDB",
          "module": "Data.BerkeleyDB",
          "name": "fromListWithKey",
          "normalized": "(a-\u003eb-\u003eb-\u003eb)-\u003e[(a,b)]-\u003eDb a b",
          "package": "berkeleydb",
          "partial": "List With Key",
          "signature": "(k-\u003ea-\u003ea-\u003ea)-\u003e[(k,a)]-\u003eDb k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berkeleydb/docs/Data-BerkeleyDB.html#v:fromListWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Insert a new key and value in the database.\n If the key is already present in the database, the associated value is\n replaced with the supplied value, i.e. \u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e is equivalent to\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003einsertWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.BerkeleyDB",
          "name": "insert",
          "package": "berkeleydb",
          "signature": "key -\u003e value -\u003e Db key value -\u003e Db key value",
          "source": "src/Data-BerkeleyDB.html#insert",
          "type": "function"
        },
        "index": {
          "description": "log Insert new key and value in the database If the key is already present in the database the associated value is replaced with the supplied value i.e insert is equivalent to insertWith const",
          "hierarchy": "Data BerkeleyDB",
          "module": "Data.BerkeleyDB",
          "name": "insert",
          "normalized": "a-\u003eb-\u003eDb a b-\u003eDb a b",
          "package": "berkeleydb",
          "signature": "key-\u003evalue-\u003eDb key value-\u003eDb key value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berkeleydb/docs/Data-BerkeleyDB.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Insert with a combining function.\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003einsertWith\u003c/a\u003e\u003c/code\u003e f key value db\u003c/code\u003e \n will insert the pair (key, value) into \u003ccode\u003edb\u003c/code\u003e if key does\n not exist in the database. If the key does exist, the function will\n insert the pair \u003ccode\u003e(key, f new_value old_value)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.BerkeleyDB",
          "name": "insertWith",
          "package": "berkeleydb",
          "signature": "(a -\u003e a -\u003e a) -\u003e k -\u003e a -\u003e Db k a -\u003e Db k a",
          "source": "src/Data-BerkeleyDB.html#insertWith",
          "type": "function"
        },
        "index": {
          "description": "log Insert with combining function insertWith key value db will insert the pair key value into db if key does not exist in the database If the key does exist the function will insert the pair key new value old value",
          "hierarchy": "Data BerkeleyDB",
          "module": "Data.BerkeleyDB",
          "name": "insertWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003eb-\u003ea-\u003eDb b a-\u003eDb b a",
          "package": "berkeleydb",
          "partial": "With",
          "signature": "(a-\u003ea-\u003ea)-\u003ek-\u003ea-\u003eDb k a-\u003eDb k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berkeleydb/docs/Data-BerkeleyDB.html#v:insertWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Insert with a combining function.\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003einsertWithKey\u003c/a\u003e\u003c/code\u003e f key value db\u003c/code\u003e \n will insert the pair (key, value) into \u003ccode\u003edb\u003c/code\u003e if key does\n not exist in the database. If the key does exist, the function will\n insert the pair \u003ccode\u003e(key,f key new_value old_value)\u003c/code\u003e.\n Note that the key passed to f is the same key passed to \u003ccode\u003e\u003ca\u003einsertWithKey\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.BerkeleyDB",
          "name": "insertWithKey",
          "package": "berkeleydb",
          "signature": "(k -\u003e a -\u003e a -\u003e a) -\u003e k -\u003e a -\u003e Db k a -\u003e Db k a",
          "source": "src/Data-BerkeleyDB.html#insertWithKey",
          "type": "function"
        },
        "index": {
          "description": "log Insert with combining function insertWithKey key value db will insert the pair key value into db if key does not exist in the database If the key does exist the function will insert the pair key key new value old value Note that the key passed to is the same key passed to insertWithKey",
          "hierarchy": "Data BerkeleyDB",
          "module": "Data.BerkeleyDB",
          "name": "insertWithKey",
          "normalized": "(a-\u003eb-\u003eb-\u003eb)-\u003ea-\u003eb-\u003eDb a b-\u003eDb a b",
          "package": "berkeleydb",
          "partial": "With Key",
          "signature": "(k-\u003ea-\u003ea-\u003ea)-\u003ek-\u003ea-\u003eDb k a-\u003eDb k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berkeleydb/docs/Data-BerkeleyDB.html#v:insertWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Return all keys of the database in ascending order\n sorted by their binary representation.\n\u003c/p\u003e",
          "module": "Data.BerkeleyDB",
          "name": "keys",
          "package": "berkeleydb",
          "signature": "Db key value -\u003e [key]",
          "source": "src/Data-BerkeleyDB.html#keys",
          "type": "function"
        },
        "index": {
          "description": "Return all keys of the database in ascending order sorted by their binary representation",
          "hierarchy": "Data BerkeleyDB",
          "module": "Data.BerkeleyDB",
          "name": "keys",
          "normalized": "Db a b-\u003e[a]",
          "package": "berkeleydb",
          "signature": "Db key value-\u003e[key]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berkeleydb/docs/Data-BerkeleyDB.html#v:keys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Lookup the value at a key in the database.\n\u003c/p\u003e\u003cp\u003eThe function will\n \u003ccode\u003ereturn\u003c/code\u003e the result in the monad or \u003ccode\u003efail\u003c/code\u003e in it the key isn't in the\n database. Often, the monad to use is \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e, so you get either\n \u003ccode\u003e(\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e result)\u003c/code\u003e or \u003ccode\u003e\u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.BerkeleyDB",
          "name": "lookup",
          "package": "berkeleydb",
          "signature": "key -\u003e Db key value -\u003e m value",
          "source": "src/Data-BerkeleyDB.html#lookup",
          "type": "function"
        },
        "index": {
          "description": "log Lookup the value at key in the database The function will return the result in the monad or fail in it the key isn in the database Often the monad to use is Maybe so you get either Just result or Nothing",
          "hierarchy": "Data BerkeleyDB",
          "module": "Data.BerkeleyDB",
          "name": "lookup",
          "normalized": "a-\u003eDb a b-\u003ec b",
          "package": "berkeleydb",
          "signature": "key-\u003eDb key value-\u003em value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berkeleydb/docs/Data-BerkeleyDB.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Map a function over all values in the database.\n\u003c/p\u003e",
          "module": "Data.BerkeleyDB",
          "name": "map",
          "package": "berkeleydb",
          "signature": "(a -\u003e b) -\u003e Db k a -\u003e Db k b",
          "source": "src/Data-BerkeleyDB.html#map",
          "type": "function"
        },
        "index": {
          "description": "Map function over all values in the database",
          "hierarchy": "Data BerkeleyDB",
          "module": "Data.BerkeleyDB",
          "name": "map",
          "normalized": "(a-\u003eb)-\u003eDb c a-\u003eDb c b",
          "package": "berkeleydb",
          "signature": "(a-\u003eb)-\u003eDb k a-\u003eDb k b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berkeleydb/docs/Data-BerkeleyDB.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Map a function over all values in the database.\n\u003c/p\u003e",
          "module": "Data.BerkeleyDB",
          "name": "mapWithKey",
          "package": "berkeleydb",
          "signature": "(k -\u003e a -\u003e b) -\u003e Db k a -\u003e Db k b",
          "source": "src/Data-BerkeleyDB.html#mapWithKey",
          "type": "function"
        },
        "index": {
          "description": "Map function over all values in the database",
          "hierarchy": "Data BerkeleyDB",
          "module": "Data.BerkeleyDB",
          "name": "mapWithKey",
          "normalized": "(a-\u003eb-\u003ec)-\u003eDb a b-\u003eDb a c",
          "package": "berkeleydb",
          "partial": "With Key",
          "signature": "(k-\u003ea-\u003eb)-\u003eDb k a-\u003eDb k b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berkeleydb/docs/Data-BerkeleyDB.html#v:mapWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Is the key a member of the map?\n\u003c/p\u003e",
          "module": "Data.BerkeleyDB",
          "name": "member",
          "package": "berkeleydb",
          "signature": "key -\u003e Db key value -\u003e Bool",
          "source": "src/Data-BerkeleyDB.html#member",
          "type": "function"
        },
        "index": {
          "description": "log Is the key member of the map",
          "hierarchy": "Data BerkeleyDB",
          "module": "Data.BerkeleyDB",
          "name": "member",
          "normalized": "a-\u003eDb a b-\u003eBool",
          "package": "berkeleydb",
          "signature": "key-\u003eDb key value-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berkeleydb/docs/Data-BerkeleyDB.html#v:member"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Is the key not a member of the map?\n\u003c/p\u003e",
          "module": "Data.BerkeleyDB",
          "name": "notMember",
          "package": "berkeleydb",
          "signature": "key -\u003e Db key value -\u003e Bool",
          "source": "src/Data-BerkeleyDB.html#notMember",
          "type": "function"
        },
        "index": {
          "description": "log Is the key not member of the map",
          "hierarchy": "Data BerkeleyDB",
          "module": "Data.BerkeleyDB",
          "name": "notMember",
          "normalized": "a-\u003eDb a b-\u003eBool",
          "package": "berkeleydb",
          "partial": "Member",
          "signature": "key-\u003eDb key value-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berkeleydb/docs/Data-BerkeleyDB.html#v:notMember"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Is the map empty?\n\u003c/p\u003e",
          "module": "Data.BerkeleyDB",
          "name": "null",
          "package": "berkeleydb",
          "signature": "Db key value -\u003e Bool",
          "source": "src/Data-BerkeleyDB.html#null",
          "type": "function"
        },
        "index": {
          "description": "Is the map empty",
          "hierarchy": "Data BerkeleyDB",
          "module": "Data.BerkeleyDB",
          "name": "null",
          "normalized": "Db a b-\u003eBool",
          "package": "berkeleydb",
          "signature": "Db key value-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berkeleydb/docs/Data-BerkeleyDB.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. A map with a single element.\n\u003c/p\u003e",
          "module": "Data.BerkeleyDB",
          "name": "singleton",
          "package": "berkeleydb",
          "signature": "k -\u003e a -\u003e Db k a",
          "source": "src/Data-BerkeleyDB.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "map with single element",
          "hierarchy": "Data BerkeleyDB",
          "module": "Data.BerkeleyDB",
          "name": "singleton",
          "normalized": "a-\u003eb-\u003eDb a b",
          "package": "berkeleydb",
          "signature": "k-\u003ea-\u003eDb k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berkeleydb/docs/Data-BerkeleyDB.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. The number of elements in the map.\n\u003c/p\u003e",
          "module": "Data.BerkeleyDB",
          "name": "size",
          "package": "berkeleydb",
          "signature": "Db key value -\u003e Int",
          "source": "src/Data-BerkeleyDB.html#size",
          "type": "function"
        },
        "index": {
          "description": "The number of elements in the map",
          "hierarchy": "Data BerkeleyDB",
          "module": "Data.BerkeleyDB",
          "name": "size",
          "normalized": "Db a b-\u003eInt",
          "package": "berkeleydb",
          "signature": "Db key value-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berkeleydb/docs/Data-BerkeleyDB.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Convert to a list of key/value pairs.\n\u003c/p\u003e",
          "module": "Data.BerkeleyDB",
          "name": "toList",
          "package": "berkeleydb",
          "signature": "Db key value -\u003e [(key, value)]",
          "source": "src/Data-BerkeleyDB.html#toList",
          "type": "function"
        },
        "index": {
          "description": "Convert to list of key value pairs",
          "hierarchy": "Data BerkeleyDB",
          "module": "Data.BerkeleyDB",
          "name": "toList",
          "normalized": "Db a b-\u003e[(a,b)]",
          "package": "berkeleydb",
          "partial": "List",
          "signature": "Db key value-\u003e[(key,value)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berkeleydb/docs/Data-BerkeleyDB.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n*m)\u003c/em\u003e.\n The expression (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e t1 t2\u003c/code\u003e) takes the left-biased union of \u003ccode\u003et1\u003c/code\u003e and \u003ccode\u003et2\u003c/code\u003e. \n It prefers \u003ccode\u003et1\u003c/code\u003e when duplicate keys are encountered,\n i.e. (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e == \u003ccode\u003e\u003ca\u003eunionWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.BerkeleyDB",
          "name": "union",
          "package": "berkeleydb",
          "signature": "Db key value -\u003e Db key value -\u003e Db key value",
          "source": "src/Data-BerkeleyDB.html#union",
          "type": "function"
        },
        "index": {
          "description": "log The expression union t1 t2 takes the left-biased union of t1 and t2 It prefers t1 when duplicate keys are encountered i.e union unionWith const",
          "hierarchy": "Data BerkeleyDB",
          "module": "Data.BerkeleyDB",
          "name": "union",
          "normalized": "Db a b-\u003eDb a b-\u003eDb a b",
          "package": "berkeleydb",
          "signature": "Db key value-\u003eDb key value-\u003eDb key value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berkeleydb/docs/Data-BerkeleyDB.html#v:union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n*m)\u003c/em\u003e. Union with a combining function.\n\u003c/p\u003e",
          "module": "Data.BerkeleyDB",
          "name": "unionWith",
          "package": "berkeleydb",
          "signature": "(value -\u003e value -\u003e value) -\u003e Db key value -\u003e Db key value -\u003e Db key value",
          "source": "src/Data-BerkeleyDB.html#unionWith",
          "type": "function"
        },
        "index": {
          "description": "log Union with combining function",
          "hierarchy": "Data BerkeleyDB",
          "module": "Data.BerkeleyDB",
          "name": "unionWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003eDb b a-\u003eDb b a-\u003eDb b a",
          "package": "berkeleydb",
          "partial": "With",
          "signature": "(value-\u003evalue-\u003evalue)-\u003eDb key value-\u003eDb key value-\u003eDb key value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berkeleydb/docs/Data-BerkeleyDB.html#v:unionWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n*m))\u003c/em\u003e.\n Union with a combining function. This function is most efficient on (bigset \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e smallset).\n\u003c/p\u003e",
          "module": "Data.BerkeleyDB",
          "name": "unionWithKey",
          "package": "berkeleydb",
          "signature": "(key -\u003e value -\u003e value -\u003e value) -\u003e Db key value -\u003e Db key value -\u003e Db key value",
          "source": "src/Data-BerkeleyDB.html#unionWithKey",
          "type": "function"
        },
        "index": {
          "description": "log Union with combining function This function is most efficient on bigset union smallset",
          "hierarchy": "Data BerkeleyDB",
          "module": "Data.BerkeleyDB",
          "name": "unionWithKey",
          "normalized": "(a-\u003eb-\u003eb-\u003eb)-\u003eDb a b-\u003eDb a b-\u003eDb a b",
          "package": "berkeleydb",
          "partial": "With Key",
          "signature": "(key-\u003evalue-\u003evalue-\u003evalue)-\u003eDb key value-\u003eDb key value-\u003eDb key value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berkeleydb/docs/Data-BerkeleyDB.html#v:unionWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe union of a list of databases:\n   (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eunions\u003c/a\u003e\u003c/code\u003e == \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.BerkeleyDB",
          "name": "unions",
          "package": "berkeleydb",
          "signature": "[Db k a] -\u003e Db k a",
          "source": "src/Data-BerkeleyDB.html#unions",
          "type": "function"
        },
        "index": {
          "description": "The union of list of databases unions foldl union empty",
          "hierarchy": "Data BerkeleyDB",
          "module": "Data.BerkeleyDB",
          "name": "unions",
          "normalized": "[Db a b]-\u003eDb a b",
          "package": "berkeleydb",
          "signature": "[Db k a]-\u003eDb k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berkeleydb/docs/Data-BerkeleyDB.html#v:unions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe union of a list of databases, with a combining operation:\n   (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eunionsWith\u003c/a\u003e\u003c/code\u003e f == \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eunionWith\u003c/a\u003e\u003c/code\u003e f) \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.BerkeleyDB",
          "name": "unionsWith",
          "package": "berkeleydb",
          "signature": "(a -\u003e a -\u003e a) -\u003e [Db k a] -\u003e Db k a",
          "source": "src/Data-BerkeleyDB.html#unionsWith",
          "type": "function"
        },
        "index": {
          "description": "The union of list of databases with combining operation unionsWith foldl unionWith empty",
          "hierarchy": "Data BerkeleyDB",
          "module": "Data.BerkeleyDB",
          "name": "unionsWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[Db b a]-\u003eDb b a",
          "package": "berkeleydb",
          "partial": "With",
          "signature": "(a-\u003ea-\u003ea)-\u003e[Db k a]-\u003eDb k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berkeleydb/docs/Data-BerkeleyDB.html#v:unionsWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. The expression (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eupdate\u003c/a\u003e\u003c/code\u003e f k map\u003c/code\u003e) updates the value \u003ccode\u003ex\u003c/code\u003e\n at \u003ccode\u003ek\u003c/code\u003e (if it is in the map). If (\u003ccode\u003ef x\u003c/code\u003e) is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, the element is\n deleted. If it is (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e y\u003c/code\u003e), the key \u003ccode\u003ek\u003c/code\u003e is bound to the new value \u003ccode\u003ey\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.BerkeleyDB",
          "name": "update",
          "package": "berkeleydb",
          "signature": "(a -\u003e Maybe a) -\u003e k -\u003e Db k a -\u003e Db k a",
          "source": "src/Data-BerkeleyDB.html#update",
          "type": "function"
        },
        "index": {
          "description": "log The expression update map updates the value at if it is in the map If is Nothing the element is deleted If it is Just the key is bound to the new value",
          "hierarchy": "Data BerkeleyDB",
          "module": "Data.BerkeleyDB",
          "name": "update",
          "normalized": "(a-\u003eMaybe a)-\u003eb-\u003eDb b a-\u003eDb b a",
          "package": "berkeleydb",
          "signature": "(a-\u003eMaybe a)-\u003ek-\u003eDb k a-\u003eDb k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berkeleydb/docs/Data-BerkeleyDB.html#v:update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. The expression (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eupdateWithKey\u003c/a\u003e\u003c/code\u003e f k db\u003c/code\u003e) updates the\n value \u003ccode\u003ex\u003c/code\u003e at \u003ccode\u003ek\u003c/code\u003e (if it is in the database). If (\u003ccode\u003ef k x\u003c/code\u003e) is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e,\n the element is deleted. If it is (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e y\u003c/code\u003e), the key \u003ccode\u003ek\u003c/code\u003e is bound\n to the new value \u003ccode\u003ey\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.BerkeleyDB",
          "name": "updateLookupWithKey",
          "package": "berkeleydb",
          "signature": "(k -\u003e a -\u003e Maybe a) -\u003e k -\u003e Db k a -\u003e (Maybe a, Db k a)",
          "source": "src/Data-BerkeleyDB.html#updateLookupWithKey",
          "type": "function"
        },
        "index": {
          "description": "log The expression updateWithKey db updates the value at if it is in the database If is Nothing the element is deleted If it is Just the key is bound to the new value",
          "hierarchy": "Data BerkeleyDB",
          "module": "Data.BerkeleyDB",
          "name": "updateLookupWithKey",
          "normalized": "(a-\u003eb-\u003eMaybe b)-\u003ea-\u003eDb a b-\u003e(Maybe b,Db a b)",
          "package": "berkeleydb",
          "partial": "Lookup With Key",
          "signature": "(k-\u003ea-\u003eMaybe a)-\u003ek-\u003eDb k a-\u003e(Maybe a,Db k a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berkeleydb/docs/Data-BerkeleyDB.html#v:updateLookupWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. The expression (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eupdateWithKey\u003c/a\u003e\u003c/code\u003e f k db\u003c/code\u003e) updates the\n value \u003ccode\u003ex\u003c/code\u003e at \u003ccode\u003ek\u003c/code\u003e (if it is in the database). If (\u003ccode\u003ef k x\u003c/code\u003e) is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e,\n the element is deleted. If it is (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e y\u003c/code\u003e), the key \u003ccode\u003ek\u003c/code\u003e is bound\n to the new value \u003ccode\u003ey\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.BerkeleyDB",
          "name": "updateWithKey",
          "package": "berkeleydb",
          "signature": "(k -\u003e a -\u003e Maybe a) -\u003e k -\u003e Db k a -\u003e Db k a",
          "source": "src/Data-BerkeleyDB.html#updateWithKey",
          "type": "function"
        },
        "index": {
          "description": "log The expression updateWithKey db updates the value at if it is in the database If is Nothing the element is deleted If it is Just the key is bound to the new value",
          "hierarchy": "Data BerkeleyDB",
          "module": "Data.BerkeleyDB",
          "name": "updateWithKey",
          "normalized": "(a-\u003eb-\u003eMaybe b)-\u003ea-\u003eDb a b-\u003eDb a b",
          "package": "berkeleydb",
          "partial": "With Key",
          "signature": "(k-\u003ea-\u003eMaybe a)-\u003ek-\u003eDb k a-\u003eDb k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berkeleydb/docs/Data-BerkeleyDB.html#v:updateWithKey"
      }
    }
  ]
]