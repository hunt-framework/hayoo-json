[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/berkeleydb/docs/Data-BerkeleyDB.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn efficient implementation of maps from keys to values (dictionaries).\n\u003c/p\u003e\u003cp\u003eSince many function names (but not the type name) clash with\n \u003ca\u003ePrelude\u003c/a\u003e names, this module is usually imported \u003ccode\u003equalified\u003c/code\u003e, e.g.\n\u003c/p\u003e\u003cpre\u003e  import Data.BerkeleyDB (DB)\n  import qualified Data.BerkeleyDB as DB\n\u003c/pre\u003e\u003cp\u003eThe implementation of \u003ccode\u003e\u003ca\u003eDb\u003c/a\u003e\u003c/code\u003e uses the berkeley db library. See\n    \u003ca\u003ehttp://en.wikipedia.org/wiki/Berkeley_DB\u003c/a\u003e and\n    \u003ca\u003ehttp://www.oracle.com/technology/products/berkeley-db/index.html\u003c/a\u003e  \n\u003c/p\u003e\u003cp\u003eNote that this implementation behaves exactly like a \u003ccode\u003eData.Map.Map ByteString ByteString\u003c/code\u003e,\n with the key and value encoded by \u003ccode\u003eData.Binary.encode/Data.Binary.decode\u003c/code\u003e.\n This means that keys aren't sorted according to Ord. Affected functions are:\n \u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eassocs\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eelems\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.BerkeleyDB",
        "fct-package": "berkeleydb",
        "fct-signature": "module",
        "fct-source": "src/Data-BerkeleyDB.html",
        "fct-type": "module",
        "title": "BerkeleyDB"
      },
      "index": {
        "description": "An efficient implementation of maps from keys to values dictionaries Since many function names but not the type name clash with Prelude names this module is usually imported qualified e.g import Data.BerkeleyDB DB import qualified Data.BerkeleyDB as DB The implementation of Db uses the berkeley db library See http en.wikipedia.org wiki Berkeley DB and http www.oracle.com technology products berkeley-db index.html Note that this implementation behaves exactly like Data.Map.Map ByteString ByteString with the key and value encoded by Data.Binary.encode Data.Binary.decode This means that keys aren sorted according to Ord Affected functions are toList assocs elems",
        "hierarchy": "Data BerkeleyDB",
        "module": "Data.BerkeleyDB",
        "name": "BerkeleyDB",
        "normalized": "",
        "package": "berkeleydb",
        "partial": "Berkeley DB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/berkeleydb/docs/Data-BerkeleyDB.html#t:Db",
      "description": {
        "fct-module": "Data.BerkeleyDB",
        "fct-package": "berkeleydb",
        "fct-signature": "data",
        "fct-source": "src/Data-BerkeleyDB.html#Db",
        "fct-type": "data",
        "title": "Db"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BerkeleyDB",
        "module": "Data.BerkeleyDB",
        "name": "Db",
        "normalized": "",
        "package": "berkeleydb",
        "partial": "Db",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/berkeleydb/docs/Data-BerkeleyDB.html#v:-33-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Find the value at a key.\n Calls \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e when the element can not be found.\n\u003c/p\u003e",
        "fct-module": "Data.BerkeleyDB",
        "fct-package": "berkeleydb",
        "fct-signature": "Db k v -\u003e k -\u003e v",
        "fct-source": "src/Data-BerkeleyDB.html#%21",
        "fct-type": "function",
        "title": "(!)"
      },
      "index": {
        "description": "log Find the value at key Calls error when the element can not be found",
        "hierarchy": "Data BerkeleyDB",
        "module": "Data.BerkeleyDB",
        "name": "(!) !",
        "normalized": "Db a b-\u003ea-\u003eb",
        "package": "berkeleydb",
        "partial": "",
        "signature": "Db k v-\u003ek-\u003ev"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/berkeleydb/docs/Data-BerkeleyDB.html#v:adjust",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Adjust a value at a specific key. When the key is not\n a member of the map, the original map is returned.\n\u003c/p\u003e",
        "fct-module": "Data.BerkeleyDB",
        "fct-package": "berkeleydb",
        "fct-signature": "(a -\u003e a) -\u003e k -\u003e Db k a -\u003e Db k a",
        "fct-source": "src/Data-BerkeleyDB.html#adjust",
        "fct-type": "function",
        "title": "adjust"
      },
      "index": {
        "description": "log Adjust value at specific key When the key is not member of the map the original map is returned",
        "hierarchy": "Data BerkeleyDB",
        "module": "Data.BerkeleyDB",
        "name": "adjust",
        "normalized": "(a-\u003ea)-\u003eb-\u003eDb b a-\u003eDb b a",
        "package": "berkeleydb",
        "partial": "",
        "signature": "(a-\u003ea)-\u003ek-\u003eDb k a-\u003eDb k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/berkeleydb/docs/Data-BerkeleyDB.html#v:adjustWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Adjust a value at a specific key. When the key is not\n a member of the map, the original map is returned.\n\u003c/p\u003e",
        "fct-module": "Data.BerkeleyDB",
        "fct-package": "berkeleydb",
        "fct-signature": "(k -\u003e a -\u003e a) -\u003e k -\u003e Db k a -\u003e Db k a",
        "fct-source": "src/Data-BerkeleyDB.html#adjustWithKey",
        "fct-type": "function",
        "title": "adjustWithKey"
      },
      "index": {
        "description": "log Adjust value at specific key When the key is not member of the map the original map is returned",
        "hierarchy": "Data BerkeleyDB",
        "module": "Data.BerkeleyDB",
        "name": "adjustWithKey",
        "normalized": "(a-\u003eb-\u003eb)-\u003ea-\u003eDb a b-\u003eDb a b",
        "package": "berkeleydb",
        "partial": "With Key",
        "signature": "(k-\u003ea-\u003ea)-\u003ek-\u003eDb k a-\u003eDb k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/berkeleydb/docs/Data-BerkeleyDB.html#v:alter",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. The expression (\u003ccode\u003e\u003ccode\u003e\u003ca\u003ealter\u003c/a\u003e\u003c/code\u003e f k db\u003c/code\u003e) alters the value \u003ccode\u003ex\u003c/code\u003e at \u003ccode\u003ek\u003c/code\u003e, or absence thereof.\n \u003ccode\u003e\u003ca\u003ealter\u003c/a\u003e\u003c/code\u003e can be used to insert, delete, or update a value in a \u003ccode\u003e\u003ca\u003eDb\u003c/a\u003e\u003c/code\u003e.\n In short : \u003ccode\u003e\u003ccode\u003e\u003ca\u003elookup\u003c/a\u003e\u003c/code\u003e k (\u003ccode\u003e\u003ca\u003ealter\u003c/a\u003e\u003c/code\u003e f k m) = f (\u003ccode\u003e\u003ca\u003elookup\u003c/a\u003e\u003c/code\u003e k m)\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.BerkeleyDB",
        "fct-package": "berkeleydb",
        "fct-signature": "(Maybe a -\u003e Maybe a) -\u003e k -\u003e Db k a -\u003e Db k a",
        "fct-source": "src/Data-BerkeleyDB.html#alter",
        "fct-type": "function",
        "title": "alter"
      },
      "index": {
        "description": "log The expression alter db alters the value at or absence thereof alter can be used to insert delete or update value in Db In short lookup alter lookup",
        "hierarchy": "Data BerkeleyDB",
        "module": "Data.BerkeleyDB",
        "name": "alter",
        "normalized": "(Maybe a-\u003eMaybe a)-\u003eb-\u003eDb b a-\u003eDb b a",
        "package": "berkeleydb",
        "partial": "",
        "signature": "(Maybe a-\u003eMaybe a)-\u003ek-\u003eDb k a-\u003eDb k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/berkeleydb/docs/Data-BerkeleyDB.html#v:assocs",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Return all key/value pairs in the map in ascending key order.\n\u003c/p\u003e",
        "fct-module": "Data.BerkeleyDB",
        "fct-package": "berkeleydb",
        "fct-signature": "Db key value -\u003e [(key, value)]",
        "fct-source": "src/Data-BerkeleyDB.html#assocs",
        "fct-type": "function",
        "title": "assocs"
      },
      "index": {
        "description": "Return all key value pairs in the map in ascending key order",
        "hierarchy": "Data BerkeleyDB",
        "module": "Data.BerkeleyDB",
        "name": "assocs",
        "normalized": "Db a b-\u003e[(a,b)]",
        "package": "berkeleydb",
        "partial": "",
        "signature": "Db key value-\u003e[(key,value)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/berkeleydb/docs/Data-BerkeleyDB.html#v:delete",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Delete a key and its value from the database. When the key is not\n a member of the database, the original database is returned.\n\u003c/p\u003e",
        "fct-module": "Data.BerkeleyDB",
        "fct-package": "berkeleydb",
        "fct-signature": "key -\u003e Db key value -\u003e Db key value",
        "fct-source": "src/Data-BerkeleyDB.html#delete",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "log Delete key and its value from the database When the key is not member of the database the original database is returned",
        "hierarchy": "Data BerkeleyDB",
        "module": "Data.BerkeleyDB",
        "name": "delete",
        "normalized": "a-\u003eDb a b-\u003eDb a b",
        "package": "berkeleydb",
        "partial": "",
        "signature": "key-\u003eDb key value-\u003eDb key value"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/berkeleydb/docs/Data-BerkeleyDB.html#v:elems",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.\n Return all elements of the database in the ascending order of their keys\n sorted by their binary representation.\n\u003c/p\u003e",
        "fct-module": "Data.BerkeleyDB",
        "fct-package": "berkeleydb",
        "fct-signature": "Db key value -\u003e [value]",
        "fct-source": "src/Data-BerkeleyDB.html#elems",
        "fct-type": "function",
        "title": "elems"
      },
      "index": {
        "description": "Return all elements of the database in the ascending order of their keys sorted by their binary representation",
        "hierarchy": "Data BerkeleyDB",
        "module": "Data.BerkeleyDB",
        "name": "elems",
        "normalized": "Db a b-\u003e[b]",
        "package": "berkeleydb",
        "partial": "",
        "signature": "Db key value-\u003e[value]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/berkeleydb/docs/Data-BerkeleyDB.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. The empty database.\n\u003c/p\u003e",
        "fct-module": "Data.BerkeleyDB",
        "fct-package": "berkeleydb",
        "fct-signature": "Db key value",
        "fct-source": "src/Data-BerkeleyDB.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "The empty database",
        "hierarchy": "Data BerkeleyDB",
        "module": "Data.BerkeleyDB",
        "name": "empty",
        "normalized": "",
        "package": "berkeleydb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/berkeleydb/docs/Data-BerkeleyDB.html#v:filter",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Filter all values that satisfy the predicate.\n\u003c/p\u003e",
        "fct-module": "Data.BerkeleyDB",
        "fct-package": "berkeleydb",
        "fct-signature": "(a -\u003e Bool) -\u003e Db k a -\u003e Db k a",
        "fct-source": "src/Data-BerkeleyDB.html#filter",
        "fct-type": "function",
        "title": "filter"
      },
      "index": {
        "description": "Filter all values that satisfy the predicate",
        "hierarchy": "Data BerkeleyDB",
        "module": "Data.BerkeleyDB",
        "name": "filter",
        "normalized": "(a-\u003eBool)-\u003eDb b a-\u003eDb b a",
        "package": "berkeleydb",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eDb k a-\u003eDb k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/berkeleydb/docs/Data-BerkeleyDB.html#v:filterWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Filter all keys/values that satisfy the predicate.\n\u003c/p\u003e",
        "fct-module": "Data.BerkeleyDB",
        "fct-package": "berkeleydb",
        "fct-signature": "(k -\u003e a -\u003e Bool) -\u003e Db k a -\u003e Db k a",
        "fct-source": "src/Data-BerkeleyDB.html#filterWithKey",
        "fct-type": "function",
        "title": "filterWithKey"
      },
      "index": {
        "description": "Filter all keys values that satisfy the predicate",
        "hierarchy": "Data BerkeleyDB",
        "module": "Data.BerkeleyDB",
        "name": "filterWithKey",
        "normalized": "(a-\u003eb-\u003eBool)-\u003eDb a b-\u003eDb a b",
        "package": "berkeleydb",
        "partial": "With Key",
        "signature": "(k-\u003ea-\u003eBool)-\u003eDb k a-\u003eDb k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/berkeleydb/docs/Data-BerkeleyDB.html#v:findWithDefault",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. The expression \u003ccode\u003e(\u003ccode\u003e\u003ca\u003efindWithDefault\u003c/a\u003e\u003c/code\u003e def k db)\u003c/code\u003e returns\n the value at key \u003ccode\u003ek\u003c/code\u003e or returns \u003ccode\u003edef\u003c/code\u003e when the key is not in the database.\n\u003c/p\u003e",
        "fct-module": "Data.BerkeleyDB",
        "fct-package": "berkeleydb",
        "fct-signature": "a -\u003e k -\u003e Db k a -\u003e a",
        "fct-source": "src/Data-BerkeleyDB.html#findWithDefault",
        "fct-type": "function",
        "title": "findWithDefault"
      },
      "index": {
        "description": "log The expression findWithDefault def db returns the value at key or returns def when the key is not in the database",
        "hierarchy": "Data BerkeleyDB",
        "module": "Data.BerkeleyDB",
        "name": "findWithDefault",
        "normalized": "a-\u003eb-\u003eDb b a-\u003ea",
        "package": "berkeleydb",
        "partial": "With Default",
        "signature": "a-\u003ek-\u003eDb k a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/berkeleydb/docs/Data-BerkeleyDB.html#v:fold",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Fold the values in the map, such that\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e f z == \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e f z . \u003ccode\u003e\u003ca\u003eelems\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n For example,\n\u003c/p\u003e\u003cpre\u003e elems map = fold (:) [] map\n\u003c/pre\u003e",
        "fct-module": "Data.BerkeleyDB",
        "fct-package": "berkeleydb",
        "fct-signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e Db k a -\u003e b",
        "fct-source": "src/Data-BerkeleyDB.html#fold",
        "fct-type": "function",
        "title": "fold"
      },
      "index": {
        "description": "Fold the values in the map such that fold foldr elems For example elems map fold map",
        "hierarchy": "Data BerkeleyDB",
        "module": "Data.BerkeleyDB",
        "name": "fold",
        "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eDb c a-\u003eb",
        "package": "berkeleydb",
        "partial": "",
        "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eDb k a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/berkeleydb/docs/Data-BerkeleyDB.html#v:fromList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n*log n)\u003c/em\u003e. Build a database from a list of key/value pairs. See also \u003ccode\u003efromAscList\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.BerkeleyDB",
        "fct-package": "berkeleydb",
        "fct-signature": "[(key, value)] -\u003e Db key value",
        "fct-source": "src/Data-BerkeleyDB.html#fromList",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "log Build database from list of key value pairs See also fromAscList",
        "hierarchy": "Data BerkeleyDB",
        "module": "Data.BerkeleyDB",
        "name": "fromList",
        "normalized": "[(a,b)]-\u003eDb a b",
        "package": "berkeleydb",
        "partial": "List",
        "signature": "[(key,value)]-\u003eDb key value"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/berkeleydb/docs/Data-BerkeleyDB.html#v:fromListWith",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n*log n)\u003c/em\u003e. Build a database from a list of key/value pairs with a combining function.\n\u003c/p\u003e",
        "fct-module": "Data.BerkeleyDB",
        "fct-package": "berkeleydb",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e [(k, a)] -\u003e Db k a",
        "fct-source": "src/Data-BerkeleyDB.html#fromListWith",
        "fct-type": "function",
        "title": "fromListWith"
      },
      "index": {
        "description": "log Build database from list of key value pairs with combining function",
        "hierarchy": "Data BerkeleyDB",
        "module": "Data.BerkeleyDB",
        "name": "fromListWith",
        "normalized": "(a-\u003ea-\u003ea)-\u003e[(b,a)]-\u003eDb b a",
        "package": "berkeleydb",
        "partial": "List With",
        "signature": "(a-\u003ea-\u003ea)-\u003e[(k,a)]-\u003eDb k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/berkeleydb/docs/Data-BerkeleyDB.html#v:fromListWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n*log n)\u003c/em\u003e. Build a database from a list of key/value pairs with a combining function.\n\u003c/p\u003e",
        "fct-module": "Data.BerkeleyDB",
        "fct-package": "berkeleydb",
        "fct-signature": "(k -\u003e a -\u003e a -\u003e a) -\u003e [(k, a)] -\u003e Db k a",
        "fct-source": "src/Data-BerkeleyDB.html#fromListWithKey",
        "fct-type": "function",
        "title": "fromListWithKey"
      },
      "index": {
        "description": "log Build database from list of key value pairs with combining function",
        "hierarchy": "Data BerkeleyDB",
        "module": "Data.BerkeleyDB",
        "name": "fromListWithKey",
        "normalized": "(a-\u003eb-\u003eb-\u003eb)-\u003e[(a,b)]-\u003eDb a b",
        "package": "berkeleydb",
        "partial": "List With Key",
        "signature": "(k-\u003ea-\u003ea-\u003ea)-\u003e[(k,a)]-\u003eDb k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/berkeleydb/docs/Data-BerkeleyDB.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Insert a new key and value in the database.\n If the key is already present in the database, the associated value is\n replaced with the supplied value, i.e. \u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e is equivalent to\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003einsertWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.BerkeleyDB",
        "fct-package": "berkeleydb",
        "fct-signature": "key -\u003e value -\u003e Db key value -\u003e Db key value",
        "fct-source": "src/Data-BerkeleyDB.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "log Insert new key and value in the database If the key is already present in the database the associated value is replaced with the supplied value i.e insert is equivalent to insertWith const",
        "hierarchy": "Data BerkeleyDB",
        "module": "Data.BerkeleyDB",
        "name": "insert",
        "normalized": "a-\u003eb-\u003eDb a b-\u003eDb a b",
        "package": "berkeleydb",
        "partial": "",
        "signature": "key-\u003evalue-\u003eDb key value-\u003eDb key value"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/berkeleydb/docs/Data-BerkeleyDB.html#v:insertWith",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Insert with a combining function.\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003einsertWith\u003c/a\u003e\u003c/code\u003e f key value db\u003c/code\u003e \n will insert the pair (key, value) into \u003ccode\u003edb\u003c/code\u003e if key does\n not exist in the database. If the key does exist, the function will\n insert the pair \u003ccode\u003e(key, f new_value old_value)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.BerkeleyDB",
        "fct-package": "berkeleydb",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e k -\u003e a -\u003e Db k a -\u003e Db k a",
        "fct-source": "src/Data-BerkeleyDB.html#insertWith",
        "fct-type": "function",
        "title": "insertWith"
      },
      "index": {
        "description": "log Insert with combining function insertWith key value db will insert the pair key value into db if key does not exist in the database If the key does exist the function will insert the pair key new value old value",
        "hierarchy": "Data BerkeleyDB",
        "module": "Data.BerkeleyDB",
        "name": "insertWith",
        "normalized": "(a-\u003ea-\u003ea)-\u003eb-\u003ea-\u003eDb b a-\u003eDb b a",
        "package": "berkeleydb",
        "partial": "With",
        "signature": "(a-\u003ea-\u003ea)-\u003ek-\u003ea-\u003eDb k a-\u003eDb k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/berkeleydb/docs/Data-BerkeleyDB.html#v:insertWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Insert with a combining function.\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003einsertWithKey\u003c/a\u003e\u003c/code\u003e f key value db\u003c/code\u003e \n will insert the pair (key, value) into \u003ccode\u003edb\u003c/code\u003e if key does\n not exist in the database. If the key does exist, the function will\n insert the pair \u003ccode\u003e(key,f key new_value old_value)\u003c/code\u003e.\n Note that the key passed to f is the same key passed to \u003ccode\u003e\u003ca\u003einsertWithKey\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.BerkeleyDB",
        "fct-package": "berkeleydb",
        "fct-signature": "(k -\u003e a -\u003e a -\u003e a) -\u003e k -\u003e a -\u003e Db k a -\u003e Db k a",
        "fct-source": "src/Data-BerkeleyDB.html#insertWithKey",
        "fct-type": "function",
        "title": "insertWithKey"
      },
      "index": {
        "description": "log Insert with combining function insertWithKey key value db will insert the pair key value into db if key does not exist in the database If the key does exist the function will insert the pair key key new value old value Note that the key passed to is the same key passed to insertWithKey",
        "hierarchy": "Data BerkeleyDB",
        "module": "Data.BerkeleyDB",
        "name": "insertWithKey",
        "normalized": "(a-\u003eb-\u003eb-\u003eb)-\u003ea-\u003eb-\u003eDb a b-\u003eDb a b",
        "package": "berkeleydb",
        "partial": "With Key",
        "signature": "(k-\u003ea-\u003ea-\u003ea)-\u003ek-\u003ea-\u003eDb k a-\u003eDb k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/berkeleydb/docs/Data-BerkeleyDB.html#v:keys",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Return all keys of the database in ascending order\n sorted by their binary representation.\n\u003c/p\u003e",
        "fct-module": "Data.BerkeleyDB",
        "fct-package": "berkeleydb",
        "fct-signature": "Db key value -\u003e [key]",
        "fct-source": "src/Data-BerkeleyDB.html#keys",
        "fct-type": "function",
        "title": "keys"
      },
      "index": {
        "description": "Return all keys of the database in ascending order sorted by their binary representation",
        "hierarchy": "Data BerkeleyDB",
        "module": "Data.BerkeleyDB",
        "name": "keys",
        "normalized": "Db a b-\u003e[a]",
        "package": "berkeleydb",
        "partial": "",
        "signature": "Db key value-\u003e[key]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/berkeleydb/docs/Data-BerkeleyDB.html#v:lookup",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Lookup the value at a key in the database.\n\u003c/p\u003e\u003cp\u003eThe function will\n \u003ccode\u003ereturn\u003c/code\u003e the result in the monad or \u003ccode\u003efail\u003c/code\u003e in it the key isn't in the\n database. Often, the monad to use is \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e, so you get either\n \u003ccode\u003e(\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e result)\u003c/code\u003e or \u003ccode\u003e\u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.BerkeleyDB",
        "fct-package": "berkeleydb",
        "fct-signature": "key -\u003e Db key value -\u003e m value",
        "fct-source": "src/Data-BerkeleyDB.html#lookup",
        "fct-type": "function",
        "title": "lookup"
      },
      "index": {
        "description": "log Lookup the value at key in the database The function will return the result in the monad or fail in it the key isn in the database Often the monad to use is Maybe so you get either Just result or Nothing",
        "hierarchy": "Data BerkeleyDB",
        "module": "Data.BerkeleyDB",
        "name": "lookup",
        "normalized": "a-\u003eDb a b-\u003ec b",
        "package": "berkeleydb",
        "partial": "",
        "signature": "key-\u003eDb key value-\u003em value"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/berkeleydb/docs/Data-BerkeleyDB.html#v:map",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Map a function over all values in the database.\n\u003c/p\u003e",
        "fct-module": "Data.BerkeleyDB",
        "fct-package": "berkeleydb",
        "fct-signature": "(a -\u003e b) -\u003e Db k a -\u003e Db k b",
        "fct-source": "src/Data-BerkeleyDB.html#map",
        "fct-type": "function",
        "title": "map"
      },
      "index": {
        "description": "Map function over all values in the database",
        "hierarchy": "Data BerkeleyDB",
        "module": "Data.BerkeleyDB",
        "name": "map",
        "normalized": "(a-\u003eb)-\u003eDb c a-\u003eDb c b",
        "package": "berkeleydb",
        "partial": "",
        "signature": "(a-\u003eb)-\u003eDb k a-\u003eDb k b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/berkeleydb/docs/Data-BerkeleyDB.html#v:mapWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Map a function over all values in the database.\n\u003c/p\u003e",
        "fct-module": "Data.BerkeleyDB",
        "fct-package": "berkeleydb",
        "fct-signature": "(k -\u003e a -\u003e b) -\u003e Db k a -\u003e Db k b",
        "fct-source": "src/Data-BerkeleyDB.html#mapWithKey",
        "fct-type": "function",
        "title": "mapWithKey"
      },
      "index": {
        "description": "Map function over all values in the database",
        "hierarchy": "Data BerkeleyDB",
        "module": "Data.BerkeleyDB",
        "name": "mapWithKey",
        "normalized": "(a-\u003eb-\u003ec)-\u003eDb a b-\u003eDb a c",
        "package": "berkeleydb",
        "partial": "With Key",
        "signature": "(k-\u003ea-\u003eb)-\u003eDb k a-\u003eDb k b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/berkeleydb/docs/Data-BerkeleyDB.html#v:member",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Is the key a member of the map?\n\u003c/p\u003e",
        "fct-module": "Data.BerkeleyDB",
        "fct-package": "berkeleydb",
        "fct-signature": "key -\u003e Db key value -\u003e Bool",
        "fct-source": "src/Data-BerkeleyDB.html#member",
        "fct-type": "function",
        "title": "member"
      },
      "index": {
        "description": "log Is the key member of the map",
        "hierarchy": "Data BerkeleyDB",
        "module": "Data.BerkeleyDB",
        "name": "member",
        "normalized": "a-\u003eDb a b-\u003eBool",
        "package": "berkeleydb",
        "partial": "",
        "signature": "key-\u003eDb key value-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/berkeleydb/docs/Data-BerkeleyDB.html#v:notMember",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Is the key not a member of the map?\n\u003c/p\u003e",
        "fct-module": "Data.BerkeleyDB",
        "fct-package": "berkeleydb",
        "fct-signature": "key -\u003e Db key value -\u003e Bool",
        "fct-source": "src/Data-BerkeleyDB.html#notMember",
        "fct-type": "function",
        "title": "notMember"
      },
      "index": {
        "description": "log Is the key not member of the map",
        "hierarchy": "Data BerkeleyDB",
        "module": "Data.BerkeleyDB",
        "name": "notMember",
        "normalized": "a-\u003eDb a b-\u003eBool",
        "package": "berkeleydb",
        "partial": "Member",
        "signature": "key-\u003eDb key value-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/berkeleydb/docs/Data-BerkeleyDB.html#v:null",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Is the map empty?\n\u003c/p\u003e",
        "fct-module": "Data.BerkeleyDB",
        "fct-package": "berkeleydb",
        "fct-signature": "Db key value -\u003e Bool",
        "fct-source": "src/Data-BerkeleyDB.html#null",
        "fct-type": "function",
        "title": "null"
      },
      "index": {
        "description": "Is the map empty",
        "hierarchy": "Data BerkeleyDB",
        "module": "Data.BerkeleyDB",
        "name": "null",
        "normalized": "Db a b-\u003eBool",
        "package": "berkeleydb",
        "partial": "",
        "signature": "Db key value-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/berkeleydb/docs/Data-BerkeleyDB.html#v:singleton",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. A map with a single element.\n\u003c/p\u003e",
        "fct-module": "Data.BerkeleyDB",
        "fct-package": "berkeleydb",
        "fct-signature": "k -\u003e a -\u003e Db k a",
        "fct-source": "src/Data-BerkeleyDB.html#singleton",
        "fct-type": "function",
        "title": "singleton"
      },
      "index": {
        "description": "map with single element",
        "hierarchy": "Data BerkeleyDB",
        "module": "Data.BerkeleyDB",
        "name": "singleton",
        "normalized": "a-\u003eb-\u003eDb a b",
        "package": "berkeleydb",
        "partial": "",
        "signature": "k-\u003ea-\u003eDb k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/berkeleydb/docs/Data-BerkeleyDB.html#v:size",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. The number of elements in the map.\n\u003c/p\u003e",
        "fct-module": "Data.BerkeleyDB",
        "fct-package": "berkeleydb",
        "fct-signature": "Db key value -\u003e Int",
        "fct-source": "src/Data-BerkeleyDB.html#size",
        "fct-type": "function",
        "title": "size"
      },
      "index": {
        "description": "The number of elements in the map",
        "hierarchy": "Data BerkeleyDB",
        "module": "Data.BerkeleyDB",
        "name": "size",
        "normalized": "Db a b-\u003eInt",
        "package": "berkeleydb",
        "partial": "",
        "signature": "Db key value-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/berkeleydb/docs/Data-BerkeleyDB.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Convert to a list of key/value pairs.\n\u003c/p\u003e",
        "fct-module": "Data.BerkeleyDB",
        "fct-package": "berkeleydb",
        "fct-signature": "Db key value -\u003e [(key, value)]",
        "fct-source": "src/Data-BerkeleyDB.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "Convert to list of key value pairs",
        "hierarchy": "Data BerkeleyDB",
        "module": "Data.BerkeleyDB",
        "name": "toList",
        "normalized": "Db a b-\u003e[(a,b)]",
        "package": "berkeleydb",
        "partial": "List",
        "signature": "Db key value-\u003e[(key,value)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/berkeleydb/docs/Data-BerkeleyDB.html#v:union",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n*m)\u003c/em\u003e.\n The expression (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e t1 t2\u003c/code\u003e) takes the left-biased union of \u003ccode\u003et1\u003c/code\u003e and \u003ccode\u003et2\u003c/code\u003e. \n It prefers \u003ccode\u003et1\u003c/code\u003e when duplicate keys are encountered,\n i.e. (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e == \u003ccode\u003e\u003ca\u003eunionWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Data.BerkeleyDB",
        "fct-package": "berkeleydb",
        "fct-signature": "Db key value -\u003e Db key value -\u003e Db key value",
        "fct-source": "src/Data-BerkeleyDB.html#union",
        "fct-type": "function",
        "title": "union"
      },
      "index": {
        "description": "log The expression union t1 t2 takes the left-biased union of t1 and t2 It prefers t1 when duplicate keys are encountered i.e union unionWith const",
        "hierarchy": "Data BerkeleyDB",
        "module": "Data.BerkeleyDB",
        "name": "union",
        "normalized": "Db a b-\u003eDb a b-\u003eDb a b",
        "package": "berkeleydb",
        "partial": "",
        "signature": "Db key value-\u003eDb key value-\u003eDb key value"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/berkeleydb/docs/Data-BerkeleyDB.html#v:unionWith",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n*m)\u003c/em\u003e. Union with a combining function.\n\u003c/p\u003e",
        "fct-module": "Data.BerkeleyDB",
        "fct-package": "berkeleydb",
        "fct-signature": "(value -\u003e value -\u003e value) -\u003e Db key value -\u003e Db key value -\u003e Db key value",
        "fct-source": "src/Data-BerkeleyDB.html#unionWith",
        "fct-type": "function",
        "title": "unionWith"
      },
      "index": {
        "description": "log Union with combining function",
        "hierarchy": "Data BerkeleyDB",
        "module": "Data.BerkeleyDB",
        "name": "unionWith",
        "normalized": "(a-\u003ea-\u003ea)-\u003eDb b a-\u003eDb b a-\u003eDb b a",
        "package": "berkeleydb",
        "partial": "With",
        "signature": "(value-\u003evalue-\u003evalue)-\u003eDb key value-\u003eDb key value-\u003eDb key value"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/berkeleydb/docs/Data-BerkeleyDB.html#v:unionWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n*m))\u003c/em\u003e.\n Union with a combining function. This function is most efficient on (bigset \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e smallset).\n\u003c/p\u003e",
        "fct-module": "Data.BerkeleyDB",
        "fct-package": "berkeleydb",
        "fct-signature": "(key -\u003e value -\u003e value -\u003e value) -\u003e Db key value -\u003e Db key value -\u003e Db key value",
        "fct-source": "src/Data-BerkeleyDB.html#unionWithKey",
        "fct-type": "function",
        "title": "unionWithKey"
      },
      "index": {
        "description": "log Union with combining function This function is most efficient on bigset union smallset",
        "hierarchy": "Data BerkeleyDB",
        "module": "Data.BerkeleyDB",
        "name": "unionWithKey",
        "normalized": "(a-\u003eb-\u003eb-\u003eb)-\u003eDb a b-\u003eDb a b-\u003eDb a b",
        "package": "berkeleydb",
        "partial": "With Key",
        "signature": "(key-\u003evalue-\u003evalue-\u003evalue)-\u003eDb key value-\u003eDb key value-\u003eDb key value"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/berkeleydb/docs/Data-BerkeleyDB.html#v:unions",
      "description": {
        "fct-descr": "\u003cp\u003eThe union of a list of databases:\n   (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eunions\u003c/a\u003e\u003c/code\u003e == \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Data.BerkeleyDB",
        "fct-package": "berkeleydb",
        "fct-signature": "[Db k a] -\u003e Db k a",
        "fct-source": "src/Data-BerkeleyDB.html#unions",
        "fct-type": "function",
        "title": "unions"
      },
      "index": {
        "description": "The union of list of databases unions foldl union empty",
        "hierarchy": "Data BerkeleyDB",
        "module": "Data.BerkeleyDB",
        "name": "unions",
        "normalized": "[Db a b]-\u003eDb a b",
        "package": "berkeleydb",
        "partial": "",
        "signature": "[Db k a]-\u003eDb k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/berkeleydb/docs/Data-BerkeleyDB.html#v:unionsWith",
      "description": {
        "fct-descr": "\u003cp\u003eThe union of a list of databases, with a combining operation:\n   (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eunionsWith\u003c/a\u003e\u003c/code\u003e f == \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eunionWith\u003c/a\u003e\u003c/code\u003e f) \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Data.BerkeleyDB",
        "fct-package": "berkeleydb",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e [Db k a] -\u003e Db k a",
        "fct-source": "src/Data-BerkeleyDB.html#unionsWith",
        "fct-type": "function",
        "title": "unionsWith"
      },
      "index": {
        "description": "The union of list of databases with combining operation unionsWith foldl unionWith empty",
        "hierarchy": "Data BerkeleyDB",
        "module": "Data.BerkeleyDB",
        "name": "unionsWith",
        "normalized": "(a-\u003ea-\u003ea)-\u003e[Db b a]-\u003eDb b a",
        "package": "berkeleydb",
        "partial": "With",
        "signature": "(a-\u003ea-\u003ea)-\u003e[Db k a]-\u003eDb k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/berkeleydb/docs/Data-BerkeleyDB.html#v:update",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. The expression (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eupdate\u003c/a\u003e\u003c/code\u003e f k map\u003c/code\u003e) updates the value \u003ccode\u003ex\u003c/code\u003e\n at \u003ccode\u003ek\u003c/code\u003e (if it is in the map). If (\u003ccode\u003ef x\u003c/code\u003e) is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, the element is\n deleted. If it is (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e y\u003c/code\u003e), the key \u003ccode\u003ek\u003c/code\u003e is bound to the new value \u003ccode\u003ey\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.BerkeleyDB",
        "fct-package": "berkeleydb",
        "fct-signature": "(a -\u003e Maybe a) -\u003e k -\u003e Db k a -\u003e Db k a",
        "fct-source": "src/Data-BerkeleyDB.html#update",
        "fct-type": "function",
        "title": "update"
      },
      "index": {
        "description": "log The expression update map updates the value at if it is in the map If is Nothing the element is deleted If it is Just the key is bound to the new value",
        "hierarchy": "Data BerkeleyDB",
        "module": "Data.BerkeleyDB",
        "name": "update",
        "normalized": "(a-\u003eMaybe a)-\u003eb-\u003eDb b a-\u003eDb b a",
        "package": "berkeleydb",
        "partial": "",
        "signature": "(a-\u003eMaybe a)-\u003ek-\u003eDb k a-\u003eDb k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/berkeleydb/docs/Data-BerkeleyDB.html#v:updateLookupWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. The expression (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eupdateWithKey\u003c/a\u003e\u003c/code\u003e f k db\u003c/code\u003e) updates the\n value \u003ccode\u003ex\u003c/code\u003e at \u003ccode\u003ek\u003c/code\u003e (if it is in the database). If (\u003ccode\u003ef k x\u003c/code\u003e) is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e,\n the element is deleted. If it is (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e y\u003c/code\u003e), the key \u003ccode\u003ek\u003c/code\u003e is bound\n to the new value \u003ccode\u003ey\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.BerkeleyDB",
        "fct-package": "berkeleydb",
        "fct-signature": "(k -\u003e a -\u003e Maybe a) -\u003e k -\u003e Db k a -\u003e (Maybe a, Db k a)",
        "fct-source": "src/Data-BerkeleyDB.html#updateLookupWithKey",
        "fct-type": "function",
        "title": "updateLookupWithKey"
      },
      "index": {
        "description": "log The expression updateWithKey db updates the value at if it is in the database If is Nothing the element is deleted If it is Just the key is bound to the new value",
        "hierarchy": "Data BerkeleyDB",
        "module": "Data.BerkeleyDB",
        "name": "updateLookupWithKey",
        "normalized": "(a-\u003eb-\u003eMaybe b)-\u003ea-\u003eDb a b-\u003e(Maybe b,Db a b)",
        "package": "berkeleydb",
        "partial": "Lookup With Key",
        "signature": "(k-\u003ea-\u003eMaybe a)-\u003ek-\u003eDb k a-\u003e(Maybe a,Db k a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/berkeleydb/docs/Data-BerkeleyDB.html#v:updateWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. The expression (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eupdateWithKey\u003c/a\u003e\u003c/code\u003e f k db\u003c/code\u003e) updates the\n value \u003ccode\u003ex\u003c/code\u003e at \u003ccode\u003ek\u003c/code\u003e (if it is in the database). If (\u003ccode\u003ef k x\u003c/code\u003e) is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e,\n the element is deleted. If it is (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e y\u003c/code\u003e), the key \u003ccode\u003ek\u003c/code\u003e is bound\n to the new value \u003ccode\u003ey\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.BerkeleyDB",
        "fct-package": "berkeleydb",
        "fct-signature": "(k -\u003e a -\u003e Maybe a) -\u003e k -\u003e Db k a -\u003e Db k a",
        "fct-source": "src/Data-BerkeleyDB.html#updateWithKey",
        "fct-type": "function",
        "title": "updateWithKey"
      },
      "index": {
        "description": "log The expression updateWithKey db updates the value at if it is in the database If is Nothing the element is deleted If it is Just the key is bound to the new value",
        "hierarchy": "Data BerkeleyDB",
        "module": "Data.BerkeleyDB",
        "name": "updateWithKey",
        "normalized": "(a-\u003eb-\u003eMaybe b)-\u003ea-\u003eDb a b-\u003eDb a b",
        "package": "berkeleydb",
        "partial": "With Key",
        "signature": "(k-\u003ea-\u003eMaybe a)-\u003ek-\u003eDb k a-\u003eDb k a"
      }
    }
  }
]