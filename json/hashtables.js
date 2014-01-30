[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashtables/docs/Data-HashTable-Class.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains a \u003ccode\u003e\u003ca\u003eHashTable\u003c/a\u003e\u003c/code\u003e typeclass for the hash table\n implementations in this package. This allows you to provide functions which\n will work for any hash table implementation in this collection.\n\u003c/p\u003e\u003cp\u003eIt is recommended to create a concrete type alias in your code when using this\n package, i.e.:\n\u003c/p\u003e\u003cpre\u003e import qualified Data.HashTable.IO as H\n\n type HashTable k v = H.BasicHashTable k v\n\n foo :: IO (HashTable Int Int)\n foo = do\n     ht \u003c- H.new\n     H.insert ht 1 1\n     return ht\n\u003c/pre\u003e\u003cp\u003eor\n\u003c/p\u003e\u003cpre\u003e import qualified Data.HashTable.ST.Cuckoo as C\n import qualified Data.HashTable.Class as H\n\n type HashTable s k v = C.HashTable s k v\n\n foo :: ST s (HashTable s k v)\n foo = do\n     ht \u003c- H.new\n     H.insert ht 1 1\n     return ht\n\u003c/pre\u003e\u003cp\u003eFirstly, this makes it easy to switch to a different hash table\n implementation, and secondly, using a concrete type rather than leaving your\n functions abstract in the \u003ccode\u003e\u003ca\u003eHashTable\u003c/a\u003e\u003c/code\u003e class should allow GHC to optimize\n away the typeclass dictionaries.\n\u003c/p\u003e\u003cp\u003eNote that the functions in this typeclass are in the \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e monad; if you want\n hash tables in \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e, use the convenience wrappers in \u003ca\u003eData.HashTable.IO\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.HashTable.Class",
        "fct-package": "hashtables",
        "fct-signature": "module",
        "fct-source": "src/Data-HashTable-Class.html",
        "fct-type": "module",
        "title": "Class"
      },
      "index": {
        "description": "This module contains HashTable typeclass for the hash table implementations in this package This allows you to provide functions which will work for any hash table implementation in this collection It is recommended to create concrete type alias in your code when using this package i.e import qualified Data.HashTable.IO as type HashTable H.BasicHashTable foo IO HashTable Int Int foo do ht H.new H.insert ht return ht or import qualified Data.HashTable.ST.Cuckoo as import qualified Data.HashTable.Class as type HashTable C.HashTable foo ST HashTable foo do ht H.new H.insert ht return ht Firstly this makes it easy to switch to different hash table implementation and secondly using concrete type rather than leaving your functions abstract in the HashTable class should allow GHC to optimize away the typeclass dictionaries Note that the functions in this typeclass are in the ST monad if you want hash tables in IO use the convenience wrappers in Data.HashTable.IO",
        "hierarchy": "Data HashTable Class",
        "module": "Data.HashTable.Class",
        "name": "Class",
        "normalized": "",
        "package": "hashtables",
        "partial": "Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashtables/docs/Data-HashTable-Class.html#t:HashTable",
      "description": {
        "fct-descr": "\u003cp\u003eA typeclass for hash tables in the \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e monad. The operations on these\n hash tables are typically both key- and value-strict.\n\u003c/p\u003e",
        "fct-module": "Data.HashTable.Class",
        "fct-package": "hashtables",
        "fct-signature": "class",
        "fct-source": "src/Data-HashTable-Class.html#HashTable",
        "fct-type": "class",
        "title": "HashTable"
      },
      "index": {
        "description": "typeclass for hash tables in the ST monad The operations on these hash tables are typically both key and value-strict",
        "hierarchy": "Data HashTable Class",
        "module": "Data.HashTable.Class",
        "name": "HashTable",
        "normalized": "",
        "package": "hashtables",
        "partial": "Hash Table",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashtables/docs/Data-HashTable-Class.html#v:computeOverhead",
      "description": {
        "fct-descr": "\u003cp\u003eComputes the overhead (in words) per key-value mapping. Used for\n debugging, etc; time complexity depends on the underlying hash table\n implementation. \u003cem\u003eO(n)\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.HashTable.Class",
        "fct-package": "hashtables",
        "fct-signature": "h s k v -\u003e ST s Double",
        "fct-source": "src/Data-HashTable-Class.html#computeOverhead",
        "fct-type": "method",
        "title": "computeOverhead"
      },
      "index": {
        "description": "Computes the overhead in words per key-value mapping Used for debugging etc time complexity depends on the underlying hash table implementation",
        "hierarchy": "Data HashTable Class",
        "module": "Data.HashTable.Class",
        "name": "computeOverhead",
        "normalized": "a b c d-\u003eST b Double",
        "package": "hashtables",
        "partial": "Overhead",
        "signature": "h s k v-\u003eST s Double"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashtables/docs/Data-HashTable-Class.html#v:delete",
      "description": {
        "fct-descr": "\u003cp\u003eDeletes a key-value mapping from a hash table. \u003cem\u003eO(n)\u003c/em\u003e worst case,\n \u003cem\u003eO(1)\u003c/em\u003e amortized.\n\u003c/p\u003e",
        "fct-module": "Data.HashTable.Class",
        "fct-package": "hashtables",
        "fct-signature": "h s k v -\u003e k -\u003e ST s ()",
        "fct-source": "src/Data-HashTable-Class.html#delete",
        "fct-type": "method",
        "title": "delete"
      },
      "index": {
        "description": "Deletes key-value mapping from hash table worst case amortized",
        "hierarchy": "Data HashTable Class",
        "module": "Data.HashTable.Class",
        "name": "delete",
        "normalized": "a b c d-\u003ec-\u003eST b()",
        "package": "hashtables",
        "partial": "",
        "signature": "h s k v-\u003ek-\u003eST s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashtables/docs/Data-HashTable-Class.html#v:foldM",
      "description": {
        "fct-descr": "\u003cp\u003eA strict fold over the key-value records of a hash table in the \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e\n monad. \u003cem\u003eO(n)\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.HashTable.Class",
        "fct-package": "hashtables",
        "fct-signature": "(a -\u003e (k, v) -\u003e ST s a) -\u003e a -\u003e h s k v -\u003e ST s a",
        "fct-source": "src/Data-HashTable-Class.html#foldM",
        "fct-type": "method",
        "title": "foldM"
      },
      "index": {
        "description": "strict fold over the key-value records of hash table in the ST monad",
        "hierarchy": "Data HashTable Class",
        "module": "Data.HashTable.Class",
        "name": "foldM",
        "normalized": "(a-\u003e(b,c)-\u003eST d a)-\u003ea-\u003ee d b c-\u003eST d a",
        "package": "hashtables",
        "partial": "",
        "signature": "(a-\u003e(k,v)-\u003eST s a)-\u003ea-\u003eh s k v-\u003eST s a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashtables/docs/Data-HashTable-Class.html#v:fromList",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a hash table from a list of key-value pairs. \u003cem\u003eO(n)\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.HashTable.Class",
        "fct-package": "hashtables",
        "fct-signature": "[(k, v)] -\u003e ST s (h s k v)",
        "fct-source": "src/Data-HashTable-Class.html#fromList",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "Create hash table from list of key-value pairs",
        "hierarchy": "Data HashTable Class",
        "module": "Data.HashTable.Class",
        "name": "fromList",
        "normalized": "[(a,b)]-\u003eST c(d c a b)",
        "package": "hashtables",
        "partial": "List",
        "signature": "[(k,v)]-\u003eST s(h s k v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashtables/docs/Data-HashTable-Class.html#v:fromListWithSizeHint",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a hash table from a list of key-value pairs, with a size hint. \u003cem\u003eO(n)\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.HashTable.Class",
        "fct-package": "hashtables",
        "fct-signature": "Int -\u003e [(k, v)] -\u003e ST s (h s k v)",
        "fct-source": "src/Data-HashTable-Class.html#fromListWithSizeHint",
        "fct-type": "function",
        "title": "fromListWithSizeHint"
      },
      "index": {
        "description": "Create hash table from list of key-value pairs with size hint",
        "hierarchy": "Data HashTable Class",
        "module": "Data.HashTable.Class",
        "name": "fromListWithSizeHint",
        "normalized": "Int-\u003e[(a,b)]-\u003eST c(d c a b)",
        "package": "hashtables",
        "partial": "List With Size Hint",
        "signature": "Int-\u003e[(k,v)]-\u003eST s(h s k v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashtables/docs/Data-HashTable-Class.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003eInserts a key/value mapping into a hash table, replacing any existing\n mapping for that key.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e worst case, \u003cem\u003eO(1)\u003c/em\u003e amortized.\n\u003c/p\u003e",
        "fct-module": "Data.HashTable.Class",
        "fct-package": "hashtables",
        "fct-signature": "h s k v -\u003e k -\u003e v -\u003e ST s ()",
        "fct-source": "src/Data-HashTable-Class.html#insert",
        "fct-type": "method",
        "title": "insert"
      },
      "index": {
        "description": "Inserts key value mapping into hash table replacing any existing mapping for that key worst case amortized",
        "hierarchy": "Data HashTable Class",
        "module": "Data.HashTable.Class",
        "name": "insert",
        "normalized": "a b c d-\u003ec-\u003ed-\u003eST b()",
        "package": "hashtables",
        "partial": "",
        "signature": "h s k v-\u003ek-\u003ev-\u003eST s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashtables/docs/Data-HashTable-Class.html#v:lookup",
      "description": {
        "fct-descr": "\u003cp\u003eLooks up a key-value mapping in a hash table. \u003cem\u003eO(n)\u003c/em\u003e worst case,\n (\u003cem\u003eO(1)\u003c/em\u003e for cuckoo hash), \u003cem\u003eO(1)\u003c/em\u003e amortized.\n\u003c/p\u003e",
        "fct-module": "Data.HashTable.Class",
        "fct-package": "hashtables",
        "fct-signature": "h s k v -\u003e k -\u003e ST s (Maybe v)",
        "fct-source": "src/Data-HashTable-Class.html#lookup",
        "fct-type": "method",
        "title": "lookup"
      },
      "index": {
        "description": "Looks up key-value mapping in hash table worst case for cuckoo hash amortized",
        "hierarchy": "Data HashTable Class",
        "module": "Data.HashTable.Class",
        "name": "lookup",
        "normalized": "a b c d-\u003ec-\u003eST b(Maybe d)",
        "package": "hashtables",
        "partial": "",
        "signature": "h s k v-\u003ek-\u003eST s(Maybe v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashtables/docs/Data-HashTable-Class.html#v:mapM_",
      "description": {
        "fct-descr": "\u003cp\u003eA side-effecting map over the key-value records of a hash\n table. \u003cem\u003eO(n)\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.HashTable.Class",
        "fct-package": "hashtables",
        "fct-signature": "((k, v) -\u003e ST s b) -\u003e h s k v -\u003e ST s ()",
        "fct-source": "src/Data-HashTable-Class.html#mapM_",
        "fct-type": "method",
        "title": "mapM_"
      },
      "index": {
        "description": "side-effecting map over the key-value records of hash table",
        "hierarchy": "Data HashTable Class",
        "module": "Data.HashTable.Class",
        "name": "mapM_",
        "normalized": "((a,b)-\u003eST c d)-\u003ee c a b-\u003eST c()",
        "package": "hashtables",
        "partial": "",
        "signature": "((k,v)-\u003eST s b)-\u003eh s k v-\u003eST s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashtables/docs/Data-HashTable-Class.html#v:new",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a new, default-sized hash table. \u003cem\u003eO(1)\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.HashTable.Class",
        "fct-package": "hashtables",
        "fct-signature": "ST s (h s k v)",
        "fct-source": "src/Data-HashTable-Class.html#new",
        "fct-type": "method",
        "title": "new"
      },
      "index": {
        "description": "Creates new default-sized hash table",
        "hierarchy": "Data HashTable Class",
        "module": "Data.HashTable.Class",
        "name": "new",
        "normalized": "",
        "package": "hashtables",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashtables/docs/Data-HashTable-Class.html#v:newSized",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a new hash table sized to hold \u003ccode\u003en\u003c/code\u003e elements. \u003cem\u003eO(n)\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.HashTable.Class",
        "fct-package": "hashtables",
        "fct-signature": "Int -\u003e ST s (h s k v)",
        "fct-source": "src/Data-HashTable-Class.html#newSized",
        "fct-type": "method",
        "title": "newSized"
      },
      "index": {
        "description": "Creates new hash table sized to hold elements",
        "hierarchy": "Data HashTable Class",
        "module": "Data.HashTable.Class",
        "name": "newSized",
        "normalized": "Int-\u003eST a(b a c d)",
        "package": "hashtables",
        "partial": "Sized",
        "signature": "Int-\u003eST s(h s k v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashtables/docs/Data-HashTable-Class.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a hash table, produce a list of key-value pairs. \u003cem\u003eO(n)\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.HashTable.Class",
        "fct-package": "hashtables",
        "fct-signature": "h s k v -\u003e ST s [(k, v)]",
        "fct-source": "src/Data-HashTable-Class.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "Given hash table produce list of key-value pairs",
        "hierarchy": "Data HashTable Class",
        "module": "Data.HashTable.Class",
        "name": "toList",
        "normalized": "a b c d-\u003eST b[(c,d)]",
        "package": "hashtables",
        "partial": "List",
        "signature": "h s k v-\u003eST s[(k,v)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashtables/docs/Data-HashTable-IO.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides wrappers in \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e around the functions from\n \u003ca\u003eData.HashTable.Class\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThis module exports three concrete hash table types, one for each hash table\n implementation in this package:\n\u003c/p\u003e\u003cpre\u003e type BasicHashTable  k v = IOHashTable (B.HashTable)  k v\n type CuckooHashTable k v = IOHashTable (Cu.HashTable) k v\n type LinearHashTable k v = IOHashTable (L.HashTable)  k v\n\u003c/pre\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eIOHashTable\u003c/a\u003e\u003c/code\u003e type can be thought of as a wrapper around a concrete\n hashtable type, which sets the \u003ccode\u003eST\u003c/code\u003e monad state type to \u003ccode\u003e\u003ca\u003ePrimState\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e,\n a.k.a. \u003ccode\u003eRealWorld\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e type IOHashTable tabletype k v = tabletype (PrimState IO) k v\n\u003c/pre\u003e\u003cp\u003eThis module provides \u003ccode\u003e\u003ca\u003estToIO\u003c/a\u003e\u003c/code\u003e wrappers around the hashtable functions (which\n are in \u003ccode\u003eST\u003c/code\u003e) to make it convenient to use them in \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e. It is intended to be\n imported qualified and used with a user-defined type alias, i.e.:\n\u003c/p\u003e\u003cpre\u003e import qualified Data.HashTable.IO as H\n\n type HashTable k v = H.CuckooHashTable k v\n\n foo :: IO (HashTable Int Int)\n foo = do\n     ht \u003c- H.new\n     H.insert ht 1 1\n     return ht\n\u003c/pre\u003e\u003cp\u003eEssentially, anywhere you see \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIOHashTable\u003c/a\u003e\u003c/code\u003e h k v\u003c/code\u003e in the type signatures\n below, you can plug in any of \u003ccode\u003e\u003ccode\u003e\u003ca\u003eBasicHashTable\u003c/a\u003e\u003c/code\u003e k v\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003eCuckooHashTable\u003c/a\u003e\u003c/code\u003e k\n v\u003c/code\u003e, or \u003ccode\u003e\u003ccode\u003e\u003ca\u003eLinearHashTable\u003c/a\u003e\u003c/code\u003e k v\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.HashTable.IO",
        "fct-package": "hashtables",
        "fct-signature": "module",
        "fct-source": "src/Data-HashTable-IO.html",
        "fct-type": "module",
        "title": "IO"
      },
      "index": {
        "description": "This module provides wrappers in IO around the functions from Data.HashTable.Class This module exports three concrete hash table types one for each hash table implementation in this package type BasicHashTable IOHashTable B.HashTable type CuckooHashTable IOHashTable Cu.HashTable type LinearHashTable IOHashTable L.HashTable The IOHashTable type can be thought of as wrapper around concrete hashtable type which sets the ST monad state type to PrimState IO a.k.a RealWorld type IOHashTable tabletype tabletype PrimState IO This module provides stToIO wrappers around the hashtable functions which are in ST to make it convenient to use them in IO It is intended to be imported qualified and used with user-defined type alias i.e import qualified Data.HashTable.IO as type HashTable H.CuckooHashTable foo IO HashTable Int Int foo do ht H.new H.insert ht return ht Essentially anywhere you see IOHashTable in the type signatures below you can plug in any of BasicHashTable CuckooHashTable or LinearHashTable",
        "hierarchy": "Data HashTable IO",
        "module": "Data.HashTable.IO",
        "name": "IO",
        "normalized": "",
        "package": "hashtables",
        "partial": "IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashtables/docs/Data-HashTable-IO.html#t:BasicHashTable",
      "description": {
        "fct-descr": "\u003cp\u003eA type alias for a basic open addressing hash table using linear\n probing. See \u003ca\u003eData.HashTable.ST.Basic\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.HashTable.IO",
        "fct-package": "hashtables",
        "fct-signature": "type",
        "fct-source": "src/Data-HashTable-IO.html#BasicHashTable",
        "fct-type": "type",
        "title": "BasicHashTable"
      },
      "index": {
        "description": "type alias for basic open addressing hash table using linear probing See Data.HashTable.ST.Basic",
        "hierarchy": "Data HashTable IO",
        "module": "Data.HashTable.IO",
        "name": "BasicHashTable",
        "normalized": "",
        "package": "hashtables",
        "partial": "Basic Hash Table",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashtables/docs/Data-HashTable-IO.html#t:CuckooHashTable",
      "description": {
        "fct-descr": "\u003cp\u003eA type alias for the cuckoo hash table. See \u003ca\u003eData.HashTable.ST.Cuckoo\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.HashTable.IO",
        "fct-package": "hashtables",
        "fct-signature": "type",
        "fct-source": "src/Data-HashTable-IO.html#CuckooHashTable",
        "fct-type": "type",
        "title": "CuckooHashTable"
      },
      "index": {
        "description": "type alias for the cuckoo hash table See Data.HashTable.ST.Cuckoo",
        "hierarchy": "Data HashTable IO",
        "module": "Data.HashTable.IO",
        "name": "CuckooHashTable",
        "normalized": "",
        "package": "hashtables",
        "partial": "Cuckoo Hash Table",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashtables/docs/Data-HashTable-IO.html#t:IOHashTable",
      "description": {
        "fct-descr": "\u003cp\u003eA type alias for our hash tables, which run in \u003ccode\u003eST\u003c/code\u003e, to set the state\n token type to \u003ccode\u003e\u003ca\u003ePrimState\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e (aka \u003ccode\u003eRealWorld\u003c/code\u003e) so that we can use them in\n \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.HashTable.IO",
        "fct-package": "hashtables",
        "fct-signature": "type",
        "fct-source": "src/Data-HashTable-IO.html#IOHashTable",
        "fct-type": "type",
        "title": "IOHashTable"
      },
      "index": {
        "description": "type alias for our hash tables which run in ST to set the state token type to PrimState IO aka RealWorld so that we can use them in IO",
        "hierarchy": "Data HashTable IO",
        "module": "Data.HashTable.IO",
        "name": "IOHashTable",
        "normalized": "",
        "package": "hashtables",
        "partial": "IOHash Table",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashtables/docs/Data-HashTable-IO.html#t:LinearHashTable",
      "description": {
        "fct-descr": "\u003cp\u003eA type alias for the linear hash table. See \u003ca\u003eData.HashTable.ST.Linear\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.HashTable.IO",
        "fct-package": "hashtables",
        "fct-signature": "type",
        "fct-source": "src/Data-HashTable-IO.html#LinearHashTable",
        "fct-type": "type",
        "title": "LinearHashTable"
      },
      "index": {
        "description": "type alias for the linear hash table See Data.HashTable.ST.Linear",
        "hierarchy": "Data HashTable IO",
        "module": "Data.HashTable.IO",
        "name": "LinearHashTable",
        "normalized": "",
        "package": "hashtables",
        "partial": "Linear Hash Table",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashtables/docs/Data-HashTable-IO.html#v:computeOverhead",
      "description": {
        "fct-descr": "\u003cp\u003eSee the documentation for this function in\n \u003ca\u003eData.HashTable.Class\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.HashTable.IO",
        "fct-package": "hashtables",
        "fct-signature": "IOHashTable h k v -\u003e IO Double",
        "fct-source": "src/Data-HashTable-IO.html#computeOverhead",
        "fct-type": "function",
        "title": "computeOverhead"
      },
      "index": {
        "description": "See the documentation for this function in Data.HashTable.Class",
        "hierarchy": "Data HashTable IO",
        "module": "Data.HashTable.IO",
        "name": "computeOverhead",
        "normalized": "IOHashTable a b c-\u003eIO Double",
        "package": "hashtables",
        "partial": "Overhead",
        "signature": "IOHashTable h k v-\u003eIO Double"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashtables/docs/Data-HashTable-IO.html#v:delete",
      "description": {
        "fct-descr": "\u003cp\u003eSee the documentation for this function in \u003ca\u003eData.HashTable.Class\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.HashTable.IO",
        "fct-package": "hashtables",
        "fct-signature": "IOHashTable h k v -\u003e k -\u003e IO ()",
        "fct-source": "src/Data-HashTable-IO.html#delete",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "See the documentation for this function in Data.HashTable.Class",
        "hierarchy": "Data HashTable IO",
        "module": "Data.HashTable.IO",
        "name": "delete",
        "normalized": "IOHashTable a b c-\u003eb-\u003eIO()",
        "package": "hashtables",
        "partial": "",
        "signature": "IOHashTable h k v-\u003ek-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashtables/docs/Data-HashTable-IO.html#v:foldM",
      "description": {
        "fct-descr": "\u003cp\u003eSee the documentation for this function in \u003ca\u003eData.HashTable.Class\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.HashTable.IO",
        "fct-package": "hashtables",
        "fct-signature": "(a -\u003e (k, v) -\u003e IO a) -\u003e a -\u003e IOHashTable h k v -\u003e IO a",
        "fct-source": "src/Data-HashTable-IO.html#foldM",
        "fct-type": "function",
        "title": "foldM"
      },
      "index": {
        "description": "See the documentation for this function in Data.HashTable.Class",
        "hierarchy": "Data HashTable IO",
        "module": "Data.HashTable.IO",
        "name": "foldM",
        "normalized": "(a-\u003e(b,c)-\u003eIO a)-\u003ea-\u003eIOHashTable d b c-\u003eIO a",
        "package": "hashtables",
        "partial": "",
        "signature": "(a-\u003e(k,v)-\u003eIO a)-\u003ea-\u003eIOHashTable h k v-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashtables/docs/Data-HashTable-IO.html#v:fromList",
      "description": {
        "fct-descr": "\u003cp\u003eSee the documentation for this function in\n \u003ca\u003eData.HashTable.Class\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.HashTable.IO",
        "fct-package": "hashtables",
        "fct-signature": "[(k, v)] -\u003e IO (IOHashTable h k v)",
        "fct-source": "src/Data-HashTable-IO.html#fromList",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "See the documentation for this function in Data.HashTable.Class",
        "hierarchy": "Data HashTable IO",
        "module": "Data.HashTable.IO",
        "name": "fromList",
        "normalized": "[(a,b)]-\u003eIO(IOHashTable c a b)",
        "package": "hashtables",
        "partial": "List",
        "signature": "[(k,v)]-\u003eIO(IOHashTable h k v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashtables/docs/Data-HashTable-IO.html#v:fromListWithSizeHint",
      "description": {
        "fct-descr": "\u003cp\u003eSee the documentation for this function in\n \u003ca\u003eData.HashTable.Class\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.HashTable.IO",
        "fct-package": "hashtables",
        "fct-signature": "Int -\u003e [(k, v)] -\u003e IO (IOHashTable h k v)",
        "fct-source": "src/Data-HashTable-IO.html#fromListWithSizeHint",
        "fct-type": "function",
        "title": "fromListWithSizeHint"
      },
      "index": {
        "description": "See the documentation for this function in Data.HashTable.Class",
        "hierarchy": "Data HashTable IO",
        "module": "Data.HashTable.IO",
        "name": "fromListWithSizeHint",
        "normalized": "Int-\u003e[(a,b)]-\u003eIO(IOHashTable c a b)",
        "package": "hashtables",
        "partial": "List With Size Hint",
        "signature": "Int-\u003e[(k,v)]-\u003eIO(IOHashTable h k v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashtables/docs/Data-HashTable-IO.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003eSee the documentation for this function in \u003ca\u003eData.HashTable.Class\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.HashTable.IO",
        "fct-package": "hashtables",
        "fct-signature": "IOHashTable h k v -\u003e k -\u003e v -\u003e IO ()",
        "fct-source": "src/Data-HashTable-IO.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "See the documentation for this function in Data.HashTable.Class",
        "hierarchy": "Data HashTable IO",
        "module": "Data.HashTable.IO",
        "name": "insert",
        "normalized": "IOHashTable a b c-\u003eb-\u003ec-\u003eIO()",
        "package": "hashtables",
        "partial": "",
        "signature": "IOHashTable h k v-\u003ek-\u003ev-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashtables/docs/Data-HashTable-IO.html#v:lookup",
      "description": {
        "fct-descr": "\u003cp\u003eSee the documentation for this function in \u003ca\u003eData.HashTable.Class\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.HashTable.IO",
        "fct-package": "hashtables",
        "fct-signature": "IOHashTable h k v -\u003e k -\u003e IO (Maybe v)",
        "fct-source": "src/Data-HashTable-IO.html#lookup",
        "fct-type": "function",
        "title": "lookup"
      },
      "index": {
        "description": "See the documentation for this function in Data.HashTable.Class",
        "hierarchy": "Data HashTable IO",
        "module": "Data.HashTable.IO",
        "name": "lookup",
        "normalized": "IOHashTable a b c-\u003eb-\u003eIO(Maybe c)",
        "package": "hashtables",
        "partial": "",
        "signature": "IOHashTable h k v-\u003ek-\u003eIO(Maybe v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashtables/docs/Data-HashTable-IO.html#v:mapM_",
      "description": {
        "fct-descr": "\u003cp\u003eSee the documentation for this function in \u003ca\u003eData.HashTable.Class\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.HashTable.IO",
        "fct-package": "hashtables",
        "fct-signature": "((k, v) -\u003e IO a) -\u003e IOHashTable h k v -\u003e IO ()",
        "fct-source": "src/Data-HashTable-IO.html#mapM_",
        "fct-type": "function",
        "title": "mapM_"
      },
      "index": {
        "description": "See the documentation for this function in Data.HashTable.Class",
        "hierarchy": "Data HashTable IO",
        "module": "Data.HashTable.IO",
        "name": "mapM_",
        "normalized": "((a,b)-\u003eIO c)-\u003eIOHashTable d a b-\u003eIO()",
        "package": "hashtables",
        "partial": "",
        "signature": "((k,v)-\u003eIO a)-\u003eIOHashTable h k v-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashtables/docs/Data-HashTable-IO.html#v:new",
      "description": {
        "fct-descr": "\u003cp\u003eSee the documentation for this function in \u003ca\u003eData.HashTable.Class\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.HashTable.IO",
        "fct-package": "hashtables",
        "fct-signature": "IO (IOHashTable h k v)",
        "fct-source": "src/Data-HashTable-IO.html#new",
        "fct-type": "function",
        "title": "new"
      },
      "index": {
        "description": "See the documentation for this function in Data.HashTable.Class",
        "hierarchy": "Data HashTable IO",
        "module": "Data.HashTable.IO",
        "name": "new",
        "normalized": "",
        "package": "hashtables",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashtables/docs/Data-HashTable-IO.html#v:newSized",
      "description": {
        "fct-descr": "\u003cp\u003eSee the documentation for this function in\n \u003ca\u003eData.HashTable.Class\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.HashTable.IO",
        "fct-package": "hashtables",
        "fct-signature": "Int -\u003e IO (IOHashTable h k v)",
        "fct-source": "src/Data-HashTable-IO.html#newSized",
        "fct-type": "function",
        "title": "newSized"
      },
      "index": {
        "description": "See the documentation for this function in Data.HashTable.Class",
        "hierarchy": "Data HashTable IO",
        "module": "Data.HashTable.IO",
        "name": "newSized",
        "normalized": "Int-\u003eIO(IOHashTable a b c)",
        "package": "hashtables",
        "partial": "Sized",
        "signature": "Int-\u003eIO(IOHashTable h k v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashtables/docs/Data-HashTable-IO.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003eSee the documentation for this function in \u003ca\u003eData.HashTable.Class\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.HashTable.IO",
        "fct-package": "hashtables",
        "fct-signature": "IOHashTable h k v -\u003e IO [(k, v)]",
        "fct-source": "src/Data-HashTable-IO.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "See the documentation for this function in Data.HashTable.Class",
        "hierarchy": "Data HashTable IO",
        "module": "Data.HashTable.IO",
        "name": "toList",
        "normalized": "IOHashTable a b c-\u003eIO[(b,c)]",
        "package": "hashtables",
        "partial": "List",
        "signature": "IOHashTable h k v-\u003eIO[(k,v)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashtables/docs/Data-HashTable-ST-Basic.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA basic open-addressing hash table using linear probing. Use this hash table if\nyou...\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e want the fastest possible lookups, and very fast inserts.\n\u003c/li\u003e\u003cli\u003e don't care about wasting a little bit of memory to get it.\n\u003c/li\u003e\u003cli\u003e don't care that a table resize might pause for a long time to rehash all\n    of the key-value mappings.\n\u003c/li\u003e\u003cli\u003e have a workload which is not heavy with deletes; deletes clutter the table\n    with deleted markers and force the table to be completely rehashed fairly\n    often.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003cem\u003eDetails:\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eOf the hash tables in this collection, this hash table has the best insert and\nlookup performance, with the following caveats.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eSpace overhead\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eThis table is not especially memory-efficient; firstly, the table has a maximum\nload factor of 0.83 and will be resized if load exceeds this value. Secondly,\nto improve insert and lookup performance, we store the hash code for each key\nin the table.\n\u003c/p\u003e\u003cp\u003eEach hash table entry requires three words, two for the pointers to the key and\nvalue and one for the hash code. We don't count key and value pointers as\noverhead, because they have to be there -- so the overhead for a full slot is\none word -- but empty slots in the hash table count for a full three words of\noverhead. Define \u003ccode\u003em\u003c/code\u003e as the number of slots in the table and \u003ccode\u003en\u003c/code\u003e as the number\nof key value mappings. If the load factor is \u003ccode\u003ek=n/m\u003c/code\u003e, the amount of space\nwasted is:\n\u003c/p\u003e\u003cpre\u003e\nw(n) = 1*n + 3(m-n)\n\u003c/pre\u003e\u003cp\u003eSince \u003ccode\u003em=n/k\u003c/code\u003e,\n\u003c/p\u003e\u003cpre\u003e\nw(n) = n + 3(n/k - n)\n= n (3/k-2)\n\u003c/pre\u003e\u003cp\u003eSolving for \u003ccode\u003ek=0.83\u003c/code\u003e, the maximum load factor, gives a \u003cem\u003eminimum\u003c/em\u003e overhead of 2\nwords per mapping. If \u003ccode\u003ek=0.5\u003c/code\u003e, under normal usage the \u003cem\u003emaximum\u003c/em\u003e overhead\nsituation, then the overhead would be 4 words per mapping.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eSpace overhead: experimental results\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eIn randomized testing (see \u003ccode\u003etest/compute-overhead/ComputeOverhead.hs\u003c/code\u003e in the\nsource distribution), mean overhead (that is, the number of words needed to\nstore the key-value mapping over and above the two words necessary for the key\nand the value pointers) is approximately 2.29 machine words per key-value\nmapping with a standard deviation of about 0.44 words, and 3.14 words per\nmapping at the 95th percentile.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eExpensive resizes\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eIf enough elements are inserted into the table to make it exceed the maximum\nload factor, the table is resized. A resize involves a complete rehash of all\nthe elements in the table, which means that any given call to \u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e might\ntake \u003cem\u003eO(n)\u003c/em\u003e time in the size of the table, with a large constant factor. If a\nlong pause waiting for the table to resize is unacceptable for your\napplication, you should choose the included linear hash table instead.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eReferences:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Knuth, Donald E. \u003cem\u003eThe Art of Computer Programming\u003c/em\u003e, vol. 3 Sorting and\n    Searching. Addison-Wesley Publishing Company, 1973.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "Data.HashTable.ST.Basic",
        "fct-package": "hashtables",
        "fct-signature": "module",
        "fct-source": "src/Data-HashTable-ST-Basic.html",
        "fct-type": "module",
        "title": "Basic"
      },
      "index": {
        "description": "basic open-addressing hash table using linear probing Use this hash table if you want the fastest possible lookups and very fast inserts don care about wasting little bit of memory to get it don care that table resize might pause for long time to rehash all of the key-value mappings have workload which is not heavy with deletes deletes clutter the table with deleted markers and force the table to be completely rehashed fairly often Details Of the hash tables in this collection this hash table has the best insert and lookup performance with the following caveats Space overhead This table is not especially memory-efficient firstly the table has maximum load factor of and will be resized if load exceeds this value Secondly to improve insert and lookup performance we store the hash code for each key in the table Each hash table entry requires three words two for the pointers to the key and value and one for the hash code We don count key and value pointers as overhead because they have to be there so the overhead for full slot is one word but empty slots in the hash table count for full three words of overhead Define as the number of slots in the table and as the number of key value mappings If the load factor is the amount of space wasted is m-n Since k-2 Solving for the maximum load factor gives minimum overhead of words per mapping If under normal usage the maximum overhead situation then the overhead would be words per mapping Space overhead experimental results In randomized testing see test compute-overhead ComputeOverhead.hs in the source distribution mean overhead that is the number of words needed to store the key-value mapping over and above the two words necessary for the key and the value pointers is approximately machine words per key-value mapping with standard deviation of about words and words per mapping at the th percentile Expensive resizes If enough elements are inserted into the table to make it exceed the maximum load factor the table is resized resize involves complete rehash of all the elements in the table which means that any given call to insert might take time in the size of the table with large constant factor If long pause waiting for the table to resize is unacceptable for your application you should choose the included linear hash table instead References Knuth Donald The Art of Computer Programming vol Sorting and Searching Addison-Wesley Publishing Company",
        "hierarchy": "Data HashTable ST Basic",
        "module": "Data.HashTable.ST.Basic",
        "name": "Basic",
        "normalized": "",
        "package": "hashtables",
        "partial": "Basic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashtables/docs/Data-HashTable-ST-Basic.html#t:HashTable",
      "description": {
        "fct-descr": "\u003cp\u003eAn open addressing hash table using linear probing.\n\u003c/p\u003e",
        "fct-module": "Data.HashTable.ST.Basic",
        "fct-package": "hashtables",
        "fct-signature": "data",
        "fct-source": "src/Data-HashTable-ST-Basic.html#HashTable",
        "fct-type": "data",
        "title": "HashTable"
      },
      "index": {
        "description": "An open addressing hash table using linear probing",
        "hierarchy": "Data HashTable ST Basic",
        "module": "Data.HashTable.ST.Basic",
        "name": "HashTable",
        "normalized": "",
        "package": "hashtables",
        "partial": "Hash Table",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashtables/docs/Data-HashTable-ST-Basic.html#v:computeOverhead",
      "description": {
        "fct-descr": "\u003cp\u003eSee the documentation for this function in\n \u003ca\u003eData.HashTable.Class\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.HashTable.ST.Basic",
        "fct-package": "hashtables",
        "fct-signature": "HashTable s k v -\u003e ST s Double",
        "fct-source": "src/Data-HashTable-ST-Basic.html#computeOverhead",
        "fct-type": "function",
        "title": "computeOverhead"
      },
      "index": {
        "description": "See the documentation for this function in Data.HashTable.Class",
        "hierarchy": "Data HashTable ST Basic",
        "module": "Data.HashTable.ST.Basic",
        "name": "computeOverhead",
        "normalized": "HashTable a b c-\u003eST a Double",
        "package": "hashtables",
        "partial": "Overhead",
        "signature": "HashTable s k v-\u003eST s Double"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashtables/docs/Data-HashTable-ST-Basic.html#v:delete",
      "description": {
        "fct-descr": "\u003cp\u003eSee the documentation for this function in\n \u003ca\u003eData.HashTable.Class\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.HashTable.ST.Basic",
        "fct-package": "hashtables",
        "fct-signature": "HashTable s k v -\u003e k -\u003e ST s ()",
        "fct-source": "src/Data-HashTable-ST-Basic.html#delete",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "See the documentation for this function in Data.HashTable.Class",
        "hierarchy": "Data HashTable ST Basic",
        "module": "Data.HashTable.ST.Basic",
        "name": "delete",
        "normalized": "HashTable a b c-\u003eb-\u003eST a()",
        "package": "hashtables",
        "partial": "",
        "signature": "HashTable s k v-\u003ek-\u003eST s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashtables/docs/Data-HashTable-ST-Basic.html#v:foldM",
      "description": {
        "fct-descr": "\u003cp\u003eSee the documentation for this function in\n \u003ca\u003eData.HashTable.Class\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.HashTable.ST.Basic",
        "fct-package": "hashtables",
        "fct-signature": "(a -\u003e (k, v) -\u003e ST s a) -\u003e a -\u003e HashTable s k v -\u003e ST s a",
        "fct-source": "src/Data-HashTable-ST-Basic.html#foldM",
        "fct-type": "function",
        "title": "foldM"
      },
      "index": {
        "description": "See the documentation for this function in Data.HashTable.Class",
        "hierarchy": "Data HashTable ST Basic",
        "module": "Data.HashTable.ST.Basic",
        "name": "foldM",
        "normalized": "(a-\u003e(b,c)-\u003eST d a)-\u003ea-\u003eHashTable d b c-\u003eST d a",
        "package": "hashtables",
        "partial": "",
        "signature": "(a-\u003e(k,v)-\u003eST s a)-\u003ea-\u003eHashTable s k v-\u003eST s a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashtables/docs/Data-HashTable-ST-Basic.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003eSee the documentation for this function in\n \u003ca\u003eData.HashTable.Class\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.HashTable.ST.Basic",
        "fct-package": "hashtables",
        "fct-signature": "HashTable s k v -\u003e k -\u003e v -\u003e ST s ()",
        "fct-source": "src/Data-HashTable-ST-Basic.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "See the documentation for this function in Data.HashTable.Class",
        "hierarchy": "Data HashTable ST Basic",
        "module": "Data.HashTable.ST.Basic",
        "name": "insert",
        "normalized": "HashTable a b c-\u003eb-\u003ec-\u003eST a()",
        "package": "hashtables",
        "partial": "",
        "signature": "HashTable s k v-\u003ek-\u003ev-\u003eST s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashtables/docs/Data-HashTable-ST-Basic.html#v:lookup",
      "description": {
        "fct-descr": "\u003cp\u003eSee the documentation for this function in\n \u003ca\u003eData.HashTable.Class\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.HashTable.ST.Basic",
        "fct-package": "hashtables",
        "fct-signature": "HashTable s k v -\u003e k -\u003e ST s (Maybe v)",
        "fct-source": "src/Data-HashTable-ST-Basic.html#lookup",
        "fct-type": "function",
        "title": "lookup"
      },
      "index": {
        "description": "See the documentation for this function in Data.HashTable.Class",
        "hierarchy": "Data HashTable ST Basic",
        "module": "Data.HashTable.ST.Basic",
        "name": "lookup",
        "normalized": "HashTable a b c-\u003eb-\u003eST a(Maybe c)",
        "package": "hashtables",
        "partial": "",
        "signature": "HashTable s k v-\u003ek-\u003eST s(Maybe v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashtables/docs/Data-HashTable-ST-Basic.html#v:mapM_",
      "description": {
        "fct-descr": "\u003cp\u003eSee the documentation for this function in\n \u003ca\u003eData.HashTable.Class\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.HashTable.ST.Basic",
        "fct-package": "hashtables",
        "fct-signature": "((k, v) -\u003e ST s b) -\u003e HashTable s k v -\u003e ST s ()",
        "fct-source": "src/Data-HashTable-ST-Basic.html#mapM_",
        "fct-type": "function",
        "title": "mapM_"
      },
      "index": {
        "description": "See the documentation for this function in Data.HashTable.Class",
        "hierarchy": "Data HashTable ST Basic",
        "module": "Data.HashTable.ST.Basic",
        "name": "mapM_",
        "normalized": "((a,b)-\u003eST c d)-\u003eHashTable c a b-\u003eST c()",
        "package": "hashtables",
        "partial": "",
        "signature": "((k,v)-\u003eST s b)-\u003eHashTable s k v-\u003eST s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashtables/docs/Data-HashTable-ST-Basic.html#v:new",
      "description": {
        "fct-descr": "\u003cp\u003eSee the documentation for this function in\n \u003ca\u003eData.HashTable.Class\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.HashTable.ST.Basic",
        "fct-package": "hashtables",
        "fct-signature": "ST s (HashTable s k v)",
        "fct-source": "src/Data-HashTable-ST-Basic.html#new",
        "fct-type": "function",
        "title": "new"
      },
      "index": {
        "description": "See the documentation for this function in Data.HashTable.Class",
        "hierarchy": "Data HashTable ST Basic",
        "module": "Data.HashTable.ST.Basic",
        "name": "new",
        "normalized": "",
        "package": "hashtables",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashtables/docs/Data-HashTable-ST-Basic.html#v:newSized",
      "description": {
        "fct-descr": "\u003cp\u003eSee the documentation for this function in\n \u003ca\u003eData.HashTable.Class\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.HashTable.ST.Basic",
        "fct-package": "hashtables",
        "fct-signature": "Int -\u003e ST s (HashTable s k v)",
        "fct-source": "src/Data-HashTable-ST-Basic.html#newSized",
        "fct-type": "function",
        "title": "newSized"
      },
      "index": {
        "description": "See the documentation for this function in Data.HashTable.Class",
        "hierarchy": "Data HashTable ST Basic",
        "module": "Data.HashTable.ST.Basic",
        "name": "newSized",
        "normalized": "Int-\u003eST a(HashTable a b c)",
        "package": "hashtables",
        "partial": "Sized",
        "signature": "Int-\u003eST s(HashTable s k v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashtables/docs/Data-HashTable-ST-Cuckoo.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA hash table using the cuckoo strategy. (See\n\u003ca\u003ehttp://en.wikipedia.org/wiki/Cuckoo_hashing\u003c/a\u003e). Use this hash table if you...\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e want the fastest possible inserts, and very fast lookups.\n\u003c/li\u003e\u003cli\u003e are conscious of memory usage; this table has less space overhead than\n    \u003ca\u003eData.HashTable.ST.Basic\u003c/a\u003e, but more than \u003ca\u003eData.HashTable.ST.Linear\u003c/a\u003e.\n\u003c/li\u003e\u003cli\u003e don't care that a table resize might pause for a long time to rehash all\n    of the key-value mappings.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003cem\u003eDetails:\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eThe basic idea of cuckoo hashing, first introduced by Pagh and Rodler in 2001,\nis to use \u003cem\u003ed\u003c/em\u003e hash functions instead of only one; in this implementation d=2\nand the strategy we use is to split up a flat array of slots into \u003ccode\u003ek\u003c/code\u003e buckets,\neach cache-line-sized:\n\u003c/p\u003e\u003cpre\u003e\n+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+----------+\n|x0|x1|x2|x3|x4|x5|x6|x7|y0|y1|y2|y3|y4|y5|y6|y7|z0|z1|z2........|\n+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+----------+\n[  ^^^  bucket 0  ^^^  ][  ^^^  bucket 1  ^^^  ]...\n\u003c/pre\u003e\u003cp\u003eThere are actually three parallel arrays: one unboxed array of \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003es for hash\ncodes, one boxed array for keys, and one boxed array for values. When looking\nup a key-value mapping, we hash the key using two hash functions and look in\nboth buckets in the hash code array for the key. Each bucket is cache-line\nsized, with its keys in no particular order. Because the hash code array is\nunboxed, we can search it for the key using a highly-efficient branchless\nstrategy in C code, using SSE instructions if available.\n\u003c/p\u003e\u003cp\u003eOn insert, if both buckets are full, we knock out a randomly-selected entry\nfrom one of the buckets (using a random walk ensures that \"key cycles\" are\nbroken with maximum probability) and try to repeat the insert procedure. This\nprocess may not succeed; if all items have not successfully found a home after\nsome number of tries, we give up and rehash all of the elements into a larger\ntable.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eSpace overhead: experimental results\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eThe implementation of cuckoo hash given here is almost as fast for lookups as\nthe basic open-addressing hash table using linear probing, and on average is\nmore space-efficient: in randomized testing on my 64-bit machine (see\n\u003ccode\u003etest/compute-overhead/ComputeOverhead.hs\u003c/code\u003e in the source distribution), mean\noverhead is 1.71 machine words per key-value mapping, with a standard deviation\nof 0.30 words, and 2.46 words per mapping at the 95th percentile.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eReferences:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e A. Pagh and F. Rodler. Cuckoo hashing. In /Proceedings of the 9th\n    Annual European Symposium on Algorithms/, pp. 121-133, 2001.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "Data.HashTable.ST.Cuckoo",
        "fct-package": "hashtables",
        "fct-signature": "module",
        "fct-source": "src/Data-HashTable-ST-Cuckoo.html",
        "fct-type": "module",
        "title": "Cuckoo"
      },
      "index": {
        "description": "hash table using the cuckoo strategy See http en.wikipedia.org wiki Cuckoo hashing Use this hash table if you want the fastest possible inserts and very fast lookups are conscious of memory usage this table has less space overhead than Data.HashTable.ST.Basic but more than Data.HashTable.ST.Linear don care that table resize might pause for long time to rehash all of the key-value mappings Details The basic idea of cuckoo hashing first introduced by Pagh and Rodler in is to use hash functions instead of only one in this implementation and the strategy we use is to split up flat array of slots into buckets each cache-line-sized x0 x1 x2 x3 x4 x5 x6 x7 y0 y1 y2 y3 y4 y5 y6 y7 z0 z1 z2 bucket bucket There are actually three parallel arrays one unboxed array of Int for hash codes one boxed array for keys and one boxed array for values When looking up key-value mapping we hash the key using two hash functions and look in both buckets in the hash code array for the key Each bucket is cache-line sized with its keys in no particular order Because the hash code array is unboxed we can search it for the key using highly-efficient branchless strategy in code using SSE instructions if available On insert if both buckets are full we knock out randomly-selected entry from one of the buckets using random walk ensures that key cycles are broken with maximum probability and try to repeat the insert procedure This process may not succeed if all items have not successfully found home after some number of tries we give up and rehash all of the elements into larger table Space overhead experimental results The implementation of cuckoo hash given here is almost as fast for lookups as the basic open-addressing hash table using linear probing and on average is more space-efficient in randomized testing on my bit machine see test compute-overhead ComputeOverhead.hs in the source distribution mean overhead is machine words per key-value mapping with standard deviation of words and words per mapping at the th percentile References Pagh and Rodler Cuckoo hashing In Proceedings of the th Annual European Symposium on Algorithms pp",
        "hierarchy": "Data HashTable ST Cuckoo",
        "module": "Data.HashTable.ST.Cuckoo",
        "name": "Cuckoo",
        "normalized": "",
        "package": "hashtables",
        "partial": "Cuckoo",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashtables/docs/Data-HashTable-ST-Cuckoo.html#t:HashTable",
      "description": {
        "fct-descr": "\u003cp\u003eA cuckoo hash table.\n\u003c/p\u003e",
        "fct-module": "Data.HashTable.ST.Cuckoo",
        "fct-package": "hashtables",
        "fct-signature": "data",
        "fct-source": "src/Data-HashTable-ST-Cuckoo.html#HashTable",
        "fct-type": "data",
        "title": "HashTable"
      },
      "index": {
        "description": "cuckoo hash table",
        "hierarchy": "Data HashTable ST Cuckoo",
        "module": "Data.HashTable.ST.Cuckoo",
        "name": "HashTable",
        "normalized": "",
        "package": "hashtables",
        "partial": "Hash Table",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashtables/docs/Data-HashTable-ST-Cuckoo.html#v:delete",
      "description": {
        "fct-descr": "\u003cp\u003eSee the documentation for this function in\n \u003ca\u003eData.HashTable.Class\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.HashTable.ST.Cuckoo",
        "fct-package": "hashtables",
        "fct-signature": "HashTable s k v -\u003e k -\u003e ST s ()",
        "fct-source": "src/Data-HashTable-ST-Cuckoo.html#delete",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "See the documentation for this function in Data.HashTable.Class",
        "hierarchy": "Data HashTable ST Cuckoo",
        "module": "Data.HashTable.ST.Cuckoo",
        "name": "delete",
        "normalized": "HashTable a b c-\u003eb-\u003eST a()",
        "package": "hashtables",
        "partial": "",
        "signature": "HashTable s k v-\u003ek-\u003eST s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashtables/docs/Data-HashTable-ST-Cuckoo.html#v:foldM",
      "description": {
        "fct-descr": "\u003cp\u003eSee the documentation for this function in\n \u003ca\u003eData.HashTable.Class\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.HashTable.ST.Cuckoo",
        "fct-package": "hashtables",
        "fct-signature": "(a -\u003e (k, v) -\u003e ST s a) -\u003e a -\u003e HashTable s k v -\u003e ST s a",
        "fct-source": "src/Data-HashTable-ST-Cuckoo.html#foldM",
        "fct-type": "function",
        "title": "foldM"
      },
      "index": {
        "description": "See the documentation for this function in Data.HashTable.Class",
        "hierarchy": "Data HashTable ST Cuckoo",
        "module": "Data.HashTable.ST.Cuckoo",
        "name": "foldM",
        "normalized": "(a-\u003e(b,c)-\u003eST d a)-\u003ea-\u003eHashTable d b c-\u003eST d a",
        "package": "hashtables",
        "partial": "",
        "signature": "(a-\u003e(k,v)-\u003eST s a)-\u003ea-\u003eHashTable s k v-\u003eST s a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashtables/docs/Data-HashTable-ST-Cuckoo.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003eSee the documentation for this function in\n \u003ca\u003eData.HashTable.Class\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.HashTable.ST.Cuckoo",
        "fct-package": "hashtables",
        "fct-signature": "HashTable s k v -\u003e k -\u003e v -\u003e ST s ()",
        "fct-source": "src/Data-HashTable-ST-Cuckoo.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "See the documentation for this function in Data.HashTable.Class",
        "hierarchy": "Data HashTable ST Cuckoo",
        "module": "Data.HashTable.ST.Cuckoo",
        "name": "insert",
        "normalized": "HashTable a b c-\u003eb-\u003ec-\u003eST a()",
        "package": "hashtables",
        "partial": "",
        "signature": "HashTable s k v-\u003ek-\u003ev-\u003eST s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashtables/docs/Data-HashTable-ST-Cuckoo.html#v:lookup",
      "description": {
        "fct-descr": "\u003cp\u003eSee the documentation for this function in\n \u003ca\u003eData.HashTable.Class\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.HashTable.ST.Cuckoo",
        "fct-package": "hashtables",
        "fct-signature": "HashTable s k v -\u003e k -\u003e ST s (Maybe v)",
        "fct-source": "src/Data-HashTable-ST-Cuckoo.html#lookup",
        "fct-type": "function",
        "title": "lookup"
      },
      "index": {
        "description": "See the documentation for this function in Data.HashTable.Class",
        "hierarchy": "Data HashTable ST Cuckoo",
        "module": "Data.HashTable.ST.Cuckoo",
        "name": "lookup",
        "normalized": "HashTable a b c-\u003eb-\u003eST a(Maybe c)",
        "package": "hashtables",
        "partial": "",
        "signature": "HashTable s k v-\u003ek-\u003eST s(Maybe v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashtables/docs/Data-HashTable-ST-Cuckoo.html#v:mapM_",
      "description": {
        "fct-descr": "\u003cp\u003eSee the documentation for this function in\n \u003ca\u003eData.HashTable.Class\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.HashTable.ST.Cuckoo",
        "fct-package": "hashtables",
        "fct-signature": "((k, v) -\u003e ST s a) -\u003e HashTable s k v -\u003e ST s ()",
        "fct-source": "src/Data-HashTable-ST-Cuckoo.html#mapM_",
        "fct-type": "function",
        "title": "mapM_"
      },
      "index": {
        "description": "See the documentation for this function in Data.HashTable.Class",
        "hierarchy": "Data HashTable ST Cuckoo",
        "module": "Data.HashTable.ST.Cuckoo",
        "name": "mapM_",
        "normalized": "((a,b)-\u003eST c d)-\u003eHashTable c a b-\u003eST c()",
        "package": "hashtables",
        "partial": "",
        "signature": "((k,v)-\u003eST s a)-\u003eHashTable s k v-\u003eST s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashtables/docs/Data-HashTable-ST-Cuckoo.html#v:new",
      "description": {
        "fct-descr": "\u003cp\u003eSee the documentation for this function in\n \u003ca\u003eData.HashTable.Class\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.HashTable.ST.Cuckoo",
        "fct-package": "hashtables",
        "fct-signature": "ST s (HashTable s k v)",
        "fct-source": "src/Data-HashTable-ST-Cuckoo.html#new",
        "fct-type": "function",
        "title": "new"
      },
      "index": {
        "description": "See the documentation for this function in Data.HashTable.Class",
        "hierarchy": "Data HashTable ST Cuckoo",
        "module": "Data.HashTable.ST.Cuckoo",
        "name": "new",
        "normalized": "",
        "package": "hashtables",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashtables/docs/Data-HashTable-ST-Cuckoo.html#v:newSized",
      "description": {
        "fct-descr": "\u003cp\u003eSee the documentation for this function in\n \u003ca\u003eData.HashTable.Class\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.HashTable.ST.Cuckoo",
        "fct-package": "hashtables",
        "fct-signature": "Int -\u003e ST s (HashTable s k v)",
        "fct-source": "src/Data-HashTable-ST-Cuckoo.html#newSized",
        "fct-type": "function",
        "title": "newSized"
      },
      "index": {
        "description": "See the documentation for this function in Data.HashTable.Class",
        "hierarchy": "Data HashTable ST Cuckoo",
        "module": "Data.HashTable.ST.Cuckoo",
        "name": "newSized",
        "normalized": "Int-\u003eST a(HashTable a b c)",
        "package": "hashtables",
        "partial": "Sized",
        "signature": "Int-\u003eST s(HashTable s k v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashtables/docs/Data-HashTable-ST-Linear.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn implementation of linear hash tables. (See\n\u003ca\u003ehttp://en.wikipedia.org/wiki/Linear_hashing\u003c/a\u003e). Use this hash table if you...\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e care a lot about fitting your data set into memory; of the hash tables\n    included in this collection, this one has the lowest space overhead\n\u003c/li\u003e\u003cli\u003e don't care that inserts and lookups are slower than the other hash table\n    implementations in this collection (this one is slightly faster than\n    \u003ccode\u003eData.HashTable\u003c/code\u003e from the base library in most cases)\n\u003c/li\u003e\u003cli\u003e have a soft real-time or interactive application for which the risk of\n    introducing a long pause on insert while all of the keys are rehashed is\n    unacceptable.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003cem\u003eDetails:\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eLinear hashing allows for the expansion of the hash table one slot at a time,\nby moving a \"split\" pointer across an array of pointers to buckets. The\nnumber of buckets is always a power of two, and the bucket to look in is\ndefined as:\n\u003c/p\u003e\u003cpre\u003e\nbucket(level,key) = hash(key) mod (2^level)\n\u003c/pre\u003e\u003cp\u003eThe \"split pointer\" controls the expansion of the hash table. If the hash\ntable is at level \u003ccode\u003ek\u003c/code\u003e (i.e. \u003ccode\u003e2^k\u003c/code\u003e buckets have been allocated), we first\ncalculate \u003ccode\u003eb=bucket(level-1,key)\u003c/code\u003e. If \u003ccode\u003eb \u003c splitptr\u003c/code\u003e, the destination bucket is\ncalculated as \u003ccode\u003eb'=bucket(level,key)\u003c/code\u003e, otherwise the original value \u003ccode\u003eb\u003c/code\u003e is used.\n\u003c/p\u003e\u003cp\u003eThe split pointer is incremented once an insert causes some bucket to become\nfuller than some predetermined threshold; the bucket at the split pointer\n(*not* the bucket which triggered the split!) is then rehashed, and half of its\nkeys can be expected to be rehashed into the upper half of the table.\n\u003c/p\u003e\u003cp\u003eWhen the split pointer reaches the middle of the bucket array, the size of the\nbucket array is doubled, the level increases, and the split pointer is reset to\nzero.\n\u003c/p\u003e\u003cp\u003eLinear hashing, although not quite as fast for inserts or lookups as the\nimplementation of linear probing included in this package, is well suited for\ninteractive applications because it has much better worst case behaviour on\ninserts. Other hash table implementations can suffer from long pauses, because\nit is occasionally necessary to rehash all of the keys when the table grows.\nLinear hashing, on the other hand, only ever rehashes a bounded (effectively\nconstant) number of keys when an insert forces a bucket split.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eSpace overhead: experimental results\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eIn randomized testing (see \u003ccode\u003etest/compute-overhead/ComputeOverhead.hs\u003c/code\u003e in the\nsource distribution), mean overhead is approximately 1.51 machine words per\nkey-value mapping with a very low standard deviation of about 0.06 words, 1.60\nwords per mapping at the 95th percentile.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eUnsafe tricks\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eThen the \u003ccode\u003eunsafe-tricks\u003c/code\u003e flag is on when this package is built (and it is on by\ndefault), we use some unsafe tricks (namely \u003ccode\u003eunsafeCoerce#\u003c/code\u003e and\n\u003ccode\u003ereallyUnsafePtrEquality#\u003c/code\u003e) to save indirections in this table. These\ntechniques rely on assumptions about the behaviour of the GHC runtime system\nand, although they've been tested and should be safe under normal conditions,\nare slightly dangerous. Caveat emptor. In particular, these techniques are\nincompatible with HPC code coverage reports.\n\u003c/p\u003e\u003cp\u003eReferences:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e W. Litwin. Linear hashing: a new tool for file and table addressing. In\n    \u003cem\u003eProc. 6th International Conference on Very Large Data Bases, Volume 6\u003c/em\u003e,\n    pp. 212-223, 1980.\n\u003c/li\u003e\u003cli\u003e P-A. Larson. Dynamic hash tables. \u003cem\u003eCommunications of the ACM\u003c/em\u003e 31:\n    446-457, 1988.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "Data.HashTable.ST.Linear",
        "fct-package": "hashtables",
        "fct-signature": "module",
        "fct-source": "src/Data-HashTable-ST-Linear.html",
        "fct-type": "module",
        "title": "Linear"
      },
      "index": {
        "description": "An implementation of linear hash tables See http en.wikipedia.org wiki Linear hashing Use this hash table if you care lot about fitting your data set into memory of the hash tables included in this collection this one has the lowest space overhead don care that inserts and lookups are slower than the other hash table implementations in this collection this one is slightly faster than Data.HashTable from the base library in most cases have soft real-time or interactive application for which the risk of introducing long pause on insert while all of the keys are rehashed is unacceptable Details Linear hashing allows for the expansion of the hash table one slot at time by moving split pointer across an array of pointers to buckets The number of buckets is always power of two and the bucket to look in is defined as bucket level key hash key mod level The split pointer controls the expansion of the hash table If the hash table is at level i.e buckets have been allocated we first calculate bucket level-1 key If splitptr the destination bucket is calculated as bucket level key otherwise the original value is used The split pointer is incremented once an insert causes some bucket to become fuller than some predetermined threshold the bucket at the split pointer not the bucket which triggered the split is then rehashed and half of its keys can be expected to be rehashed into the upper half of the table When the split pointer reaches the middle of the bucket array the size of the bucket array is doubled the level increases and the split pointer is reset to zero Linear hashing although not quite as fast for inserts or lookups as the implementation of linear probing included in this package is well suited for interactive applications because it has much better worst case behaviour on inserts Other hash table implementations can suffer from long pauses because it is occasionally necessary to rehash all of the keys when the table grows Linear hashing on the other hand only ever rehashes bounded effectively constant number of keys when an insert forces bucket split Space overhead experimental results In randomized testing see test compute-overhead ComputeOverhead.hs in the source distribution mean overhead is approximately machine words per key-value mapping with very low standard deviation of about words words per mapping at the th percentile Unsafe tricks Then the unsafe-tricks flag is on when this package is built and it is on by default we use some unsafe tricks namely unsafeCoerce and reallyUnsafePtrEquality to save indirections in this table These techniques rely on assumptions about the behaviour of the GHC runtime system and although they ve been tested and should be safe under normal conditions are slightly dangerous Caveat emptor In particular these techniques are incompatible with HPC code coverage reports References Litwin Linear hashing new tool for file and table addressing In Proc th International Conference on Very Large Data Bases Volume pp P-A Larson Dynamic hash tables Communications of the ACM",
        "hierarchy": "Data HashTable ST Linear",
        "module": "Data.HashTable.ST.Linear",
        "name": "Linear",
        "normalized": "",
        "package": "hashtables",
        "partial": "Linear",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashtables/docs/Data-HashTable-ST-Linear.html#t:HashTable",
      "description": {
        "fct-descr": "\u003cp\u003eA linear hash table.\n\u003c/p\u003e",
        "fct-module": "Data.HashTable.ST.Linear",
        "fct-package": "hashtables",
        "fct-signature": "data",
        "fct-source": "src/Data-HashTable-ST-Linear.html#HashTable",
        "fct-type": "data",
        "title": "HashTable"
      },
      "index": {
        "description": "linear hash table",
        "hierarchy": "Data HashTable ST Linear",
        "module": "Data.HashTable.ST.Linear",
        "name": "HashTable",
        "normalized": "",
        "package": "hashtables",
        "partial": "Hash Table",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashtables/docs/Data-HashTable-ST-Linear.html#v:computeOverhead",
      "description": {
        "fct-descr": "\u003cp\u003eSee the documentation for this function in\n \u003ca\u003eData.HashTable.Class\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.HashTable.ST.Linear",
        "fct-package": "hashtables",
        "fct-signature": "HashTable s k v -\u003e ST s Double",
        "fct-source": "src/Data-HashTable-ST-Linear.html#computeOverhead",
        "fct-type": "function",
        "title": "computeOverhead"
      },
      "index": {
        "description": "See the documentation for this function in Data.HashTable.Class",
        "hierarchy": "Data HashTable ST Linear",
        "module": "Data.HashTable.ST.Linear",
        "name": "computeOverhead",
        "normalized": "HashTable a b c-\u003eST a Double",
        "package": "hashtables",
        "partial": "Overhead",
        "signature": "HashTable s k v-\u003eST s Double"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashtables/docs/Data-HashTable-ST-Linear.html#v:delete",
      "description": {
        "fct-descr": "\u003cp\u003eSee the documentation for this function in\n \u003ca\u003eData.HashTable.Class\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.HashTable.ST.Linear",
        "fct-package": "hashtables",
        "fct-signature": "HashTable s k v -\u003e k -\u003e ST s ()",
        "fct-source": "src/Data-HashTable-ST-Linear.html#delete",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "See the documentation for this function in Data.HashTable.Class",
        "hierarchy": "Data HashTable ST Linear",
        "module": "Data.HashTable.ST.Linear",
        "name": "delete",
        "normalized": "HashTable a b c-\u003eb-\u003eST a()",
        "package": "hashtables",
        "partial": "",
        "signature": "HashTable s k v-\u003ek-\u003eST s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashtables/docs/Data-HashTable-ST-Linear.html#v:foldM",
      "description": {
        "fct-descr": "\u003cp\u003eSee the documentation for this function in\n \u003ca\u003eData.HashTable.Class\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.HashTable.ST.Linear",
        "fct-package": "hashtables",
        "fct-signature": "(a -\u003e (k, v) -\u003e ST s a) -\u003e a -\u003e HashTable s k v -\u003e ST s a",
        "fct-source": "src/Data-HashTable-ST-Linear.html#foldM",
        "fct-type": "function",
        "title": "foldM"
      },
      "index": {
        "description": "See the documentation for this function in Data.HashTable.Class",
        "hierarchy": "Data HashTable ST Linear",
        "module": "Data.HashTable.ST.Linear",
        "name": "foldM",
        "normalized": "(a-\u003e(b,c)-\u003eST d a)-\u003ea-\u003eHashTable d b c-\u003eST d a",
        "package": "hashtables",
        "partial": "",
        "signature": "(a-\u003e(k,v)-\u003eST s a)-\u003ea-\u003eHashTable s k v-\u003eST s a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashtables/docs/Data-HashTable-ST-Linear.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003eSee the documentation for this function in\n \u003ca\u003eData.HashTable.Class\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.HashTable.ST.Linear",
        "fct-package": "hashtables",
        "fct-signature": "HashTable s k v -\u003e k -\u003e v -\u003e ST s ()",
        "fct-source": "src/Data-HashTable-ST-Linear.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "See the documentation for this function in Data.HashTable.Class",
        "hierarchy": "Data HashTable ST Linear",
        "module": "Data.HashTable.ST.Linear",
        "name": "insert",
        "normalized": "HashTable a b c-\u003eb-\u003ec-\u003eST a()",
        "package": "hashtables",
        "partial": "",
        "signature": "HashTable s k v-\u003ek-\u003ev-\u003eST s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashtables/docs/Data-HashTable-ST-Linear.html#v:lookup",
      "description": {
        "fct-descr": "\u003cp\u003eSee the documentation for this function in\n \u003ca\u003eData.HashTable.Class\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.HashTable.ST.Linear",
        "fct-package": "hashtables",
        "fct-signature": "HashTable s k v -\u003e k -\u003e ST s (Maybe v)",
        "fct-source": "src/Data-HashTable-ST-Linear.html#lookup",
        "fct-type": "function",
        "title": "lookup"
      },
      "index": {
        "description": "See the documentation for this function in Data.HashTable.Class",
        "hierarchy": "Data HashTable ST Linear",
        "module": "Data.HashTable.ST.Linear",
        "name": "lookup",
        "normalized": "HashTable a b c-\u003eb-\u003eST a(Maybe c)",
        "package": "hashtables",
        "partial": "",
        "signature": "HashTable s k v-\u003ek-\u003eST s(Maybe v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashtables/docs/Data-HashTable-ST-Linear.html#v:mapM_",
      "description": {
        "fct-descr": "\u003cp\u003eSee the documentation for this function in\n \u003ca\u003eData.HashTable.Class\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.HashTable.ST.Linear",
        "fct-package": "hashtables",
        "fct-signature": "((k, v) -\u003e ST s b) -\u003e HashTable s k v -\u003e ST s ()",
        "fct-source": "src/Data-HashTable-ST-Linear.html#mapM_",
        "fct-type": "function",
        "title": "mapM_"
      },
      "index": {
        "description": "See the documentation for this function in Data.HashTable.Class",
        "hierarchy": "Data HashTable ST Linear",
        "module": "Data.HashTable.ST.Linear",
        "name": "mapM_",
        "normalized": "((a,b)-\u003eST c d)-\u003eHashTable c a b-\u003eST c()",
        "package": "hashtables",
        "partial": "",
        "signature": "((k,v)-\u003eST s b)-\u003eHashTable s k v-\u003eST s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashtables/docs/Data-HashTable-ST-Linear.html#v:new",
      "description": {
        "fct-descr": "\u003cp\u003eSee the documentation for this function in\n \u003ca\u003eData.HashTable.Class\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.HashTable.ST.Linear",
        "fct-package": "hashtables",
        "fct-signature": "ST s (HashTable s k v)",
        "fct-source": "src/Data-HashTable-ST-Linear.html#new",
        "fct-type": "function",
        "title": "new"
      },
      "index": {
        "description": "See the documentation for this function in Data.HashTable.Class",
        "hierarchy": "Data HashTable ST Linear",
        "module": "Data.HashTable.ST.Linear",
        "name": "new",
        "normalized": "",
        "package": "hashtables",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashtables/docs/Data-HashTable-ST-Linear.html#v:newSized",
      "description": {
        "fct-descr": "\u003cp\u003eSee the documentation for this function in\n \u003ca\u003eData.HashTable.Class\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.HashTable.ST.Linear",
        "fct-package": "hashtables",
        "fct-signature": "Int -\u003e ST s (HashTable s k v)",
        "fct-source": "src/Data-HashTable-ST-Linear.html#newSized",
        "fct-type": "function",
        "title": "newSized"
      },
      "index": {
        "description": "See the documentation for this function in Data.HashTable.Class",
        "hierarchy": "Data HashTable ST Linear",
        "module": "Data.HashTable.ST.Linear",
        "name": "newSized",
        "normalized": "Int-\u003eST a(HashTable a b c)",
        "package": "hashtables",
        "partial": "Sized",
        "signature": "Int-\u003eST s(HashTable s k v)"
      }
    }
  }
]