[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashmap/docs/Data-HashMap.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePersistent \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e based on hashing, which is defined as\n\u003c/p\u003e\u003cpre\u003e\n   data \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e k v = \u003ccode\u003e\u003ca\u003eIntMap\u003c/a\u003e\u003c/code\u003e (Some k v)\n\u003c/pre\u003e\u003cp\u003eis an \u003ccode\u003e\u003ca\u003eIntMap\u003c/a\u003e\u003c/code\u003e indexed by hash values of keys,\n containing a value of \u003ccode\u003eSome e\u003c/code\u003e. That contains either one\n \u003ccode\u003e(\u003ccode\u003ek\u003c/code\u003e, \u003ccode\u003ev\u003c/code\u003e)\u003c/code\u003e pair or a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e k v\u003c/code\u003e with keys of the same hash values.\n\u003c/p\u003e\u003cp\u003eThe interface of a \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e is a suitable subset of \u003ccode\u003e\u003ca\u003eIntMap\u003c/a\u003e\u003c/code\u003e\n and can be used as a drop-in replacement of \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe complexity of operations is determined by the complexities of\n \u003ccode\u003e\u003ca\u003eIntMap\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e operations. See the sources of\n \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e to see which operations from \u003ccode\u003econtainers\u003c/code\u003e package are used.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.HashMap",
        "fct-package": "hashmap",
        "fct-signature": "module",
        "fct-source": "src/Data-HashMap.html",
        "fct-type": "module",
        "title": "HashMap"
      },
      "index": {
        "description": "Persistent Map based on hashing which is defined as data Map IntMap Some is an IntMap indexed by hash values of keys containing value of Some That contains either one pair or Map with keys of the same hash values The interface of Map is suitable subset of IntMap and can be used as drop-in replacement of Map The complexity of operations is determined by the complexities of IntMap and Map operations See the sources of Map to see which operations from containers package are used",
        "hierarchy": "Data HashMap",
        "module": "Data.HashMap",
        "name": "HashMap",
        "normalized": "",
        "package": "hashmap",
        "partial": "Hash Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashmap/docs/Data-HashMap.html#t:HashMap",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003eHashMap\u003c/code\u003e is a type synonym for \u003ccode\u003eMap\u003c/code\u003e for backward compatibility.\n It is deprecated and will be removed in furture releases.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap",
        "fct-package": "hashmap",
        "fct-signature": "type",
        "fct-source": "src/Data-HashMap.html#HashMap",
        "fct-type": "type",
        "title": "HashMap"
      },
      "index": {
        "description": "The HashMap is type synonym for Map for backward compatibility It is deprecated and will be removed in furture releases",
        "hierarchy": "Data HashMap",
        "module": "Data.HashMap",
        "name": "HashMap",
        "normalized": "",
        "package": "hashmap",
        "partial": "Hash Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashmap/docs/Data-HashMap.html#t:Map",
      "description": {
        "fct-descr": "\u003cp\u003eThe abstract type of a \u003ccode\u003eMap\u003c/code\u003e. Its interface is a suitable\n subset of \u003ccode\u003e\u003ca\u003eIntMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap",
        "fct-package": "hashmap",
        "fct-signature": "data",
        "fct-source": "src/Data-HashMap.html#Map",
        "fct-type": "data",
        "title": "Map"
      },
      "index": {
        "description": "The abstract type of Map Its interface is suitable subset of IntMap",
        "hierarchy": "Data HashMap",
        "module": "Data.HashMap",
        "name": "Map",
        "normalized": "",
        "package": "hashmap",
        "partial": "Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashmap/docs/Data-HashMap.html#v:-33-",
      "description": {
        "fct-descr": "\u003cp\u003eFind the value at a key.\n Calls \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e when the element can not be found.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap",
        "fct-package": "hashmap",
        "fct-signature": "Map k a -\u003e k -\u003e a",
        "fct-source": "src/Data-HashMap.html#%21",
        "fct-type": "function",
        "title": "(!)"
      },
      "index": {
        "description": "Find the value at key Calls error when the element can not be found",
        "hierarchy": "Data HashMap",
        "module": "Data.HashMap",
        "name": "(!) !",
        "normalized": "Map a b-\u003ea-\u003eb",
        "package": "hashmap",
        "partial": "",
        "signature": "Map k a-\u003ek-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashmap/docs/Data-HashMap.html#v:-92--92-",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003edifference\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap",
        "fct-package": "hashmap",
        "fct-signature": "Map k a -\u003e Map k b -\u003e Map k a",
        "fct-source": "src/Data-HashMap.html#%5C%5C",
        "fct-type": "function",
        "title": "(\\\\)"
      },
      "index": {
        "description": "Same as difference",
        "hierarchy": "Data HashMap",
        "module": "Data.HashMap",
        "name": "(\\\\) \\\\",
        "normalized": "Map a b-\u003eMap a c-\u003eMap a b",
        "package": "hashmap",
        "partial": "",
        "signature": "Map k a-\u003eMap k b-\u003eMap k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashmap/docs/Data-HashMap.html#v:adjust",
      "description": {
        "fct-descr": "\u003cp\u003eAdjust a value at a specific key. When the key is not a member of the map,\n the original map is returned.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap",
        "fct-package": "hashmap",
        "fct-signature": "(a -\u003e a) -\u003e k -\u003e Map k a -\u003e Map k a",
        "fct-source": "src/Data-HashMap.html#adjust",
        "fct-type": "function",
        "title": "adjust"
      },
      "index": {
        "description": "Adjust value at specific key When the key is not member of the map the original map is returned",
        "hierarchy": "Data HashMap",
        "module": "Data.HashMap",
        "name": "adjust",
        "normalized": "(a-\u003ea)-\u003eb-\u003eMap b a-\u003eMap b a",
        "package": "hashmap",
        "partial": "",
        "signature": "(a-\u003ea)-\u003ek-\u003eMap k a-\u003eMap k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashmap/docs/Data-HashMap.html#v:adjustWithKey",
      "description": {
        "fct-descr": "\u003cp\u003eAdjust a value at a specific key. When the key is not a member of the map,\n the original map is returned.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap",
        "fct-package": "hashmap",
        "fct-signature": "(k -\u003e a -\u003e a) -\u003e k -\u003e Map k a -\u003e Map k a",
        "fct-source": "src/Data-HashMap.html#adjustWithKey",
        "fct-type": "function",
        "title": "adjustWithKey"
      },
      "index": {
        "description": "Adjust value at specific key When the key is not member of the map the original map is returned",
        "hierarchy": "Data HashMap",
        "module": "Data.HashMap",
        "name": "adjustWithKey",
        "normalized": "(a-\u003eb-\u003eb)-\u003ea-\u003eMap a b-\u003eMap a b",
        "package": "hashmap",
        "partial": "With Key",
        "signature": "(k-\u003ea-\u003ea)-\u003ek-\u003eMap k a-\u003eMap k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashmap/docs/Data-HashMap.html#v:alter",
      "description": {
        "fct-descr": "\u003cp\u003eThe expression (\u003ccode\u003e\u003ccode\u003e\u003ca\u003ealter\u003c/a\u003e\u003c/code\u003e f k map\u003c/code\u003e) alters the value \u003ccode\u003ex\u003c/code\u003e at \u003ccode\u003ek\u003c/code\u003e, or absence\n thereof.  \u003ccode\u003e\u003ca\u003ealter\u003c/a\u003e\u003c/code\u003e can be used to insert, delete, or update a value in an\n \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap",
        "fct-package": "hashmap",
        "fct-signature": "(Maybe a -\u003e Maybe a) -\u003e k -\u003e Map k a -\u003e Map k a",
        "fct-source": "src/Data-HashMap.html#alter",
        "fct-type": "function",
        "title": "alter"
      },
      "index": {
        "description": "The expression alter map alters the value at or absence thereof alter can be used to insert delete or update value in an Map",
        "hierarchy": "Data HashMap",
        "module": "Data.HashMap",
        "name": "alter",
        "normalized": "(Maybe a-\u003eMaybe a)-\u003eb-\u003eMap b a-\u003eMap b a",
        "package": "hashmap",
        "partial": "",
        "signature": "(Maybe a-\u003eMaybe a)-\u003ek-\u003eMap k a-\u003eMap k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashmap/docs/Data-HashMap.html#v:assocs",
      "description": {
        "fct-descr": "\u003cp\u003eReturn all key/value pairs in the map in arbitrary key order.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap",
        "fct-package": "hashmap",
        "fct-signature": "Map k a -\u003e [(k, a)]",
        "fct-source": "src/Data-HashMap.html#assocs",
        "fct-type": "function",
        "title": "assocs"
      },
      "index": {
        "description": "Return all key value pairs in the map in arbitrary key order",
        "hierarchy": "Data HashMap",
        "module": "Data.HashMap",
        "name": "assocs",
        "normalized": "Map a b-\u003e[(a,b)]",
        "package": "hashmap",
        "partial": "",
        "signature": "Map k a-\u003e[(k,a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashmap/docs/Data-HashMap.html#v:delete",
      "description": {
        "fct-descr": "\u003cp\u003eDelete a key and its value from the map. When the key is not\n a member of the map, the original map is returned.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap",
        "fct-package": "hashmap",
        "fct-signature": "k -\u003e Map k a -\u003e Map k a",
        "fct-source": "src/Data-HashMap.html#delete",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "Delete key and its value from the map When the key is not member of the map the original map is returned",
        "hierarchy": "Data HashMap",
        "module": "Data.HashMap",
        "name": "delete",
        "normalized": "a-\u003eMap a b-\u003eMap a b",
        "package": "hashmap",
        "partial": "",
        "signature": "k-\u003eMap k a-\u003eMap k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashmap/docs/Data-HashMap.html#v:difference",
      "description": {
        "fct-descr": "\u003cp\u003eDifference between two maps (based on keys).\n\u003c/p\u003e",
        "fct-module": "Data.HashMap",
        "fct-package": "hashmap",
        "fct-signature": "Map k a -\u003e Map k b -\u003e Map k a",
        "fct-source": "src/Data-HashMap.html#difference",
        "fct-type": "function",
        "title": "difference"
      },
      "index": {
        "description": "Difference between two maps based on keys",
        "hierarchy": "Data HashMap",
        "module": "Data.HashMap",
        "name": "difference",
        "normalized": "Map a b-\u003eMap a c-\u003eMap a b",
        "package": "hashmap",
        "partial": "",
        "signature": "Map k a-\u003eMap k b-\u003eMap k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashmap/docs/Data-HashMap.html#v:differenceWith",
      "description": {
        "fct-descr": "\u003cp\u003eDifference with a combining function.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap",
        "fct-package": "hashmap",
        "fct-signature": "(a -\u003e b -\u003e Maybe a) -\u003e Map k a -\u003e Map k b -\u003e Map k a",
        "fct-source": "src/Data-HashMap.html#differenceWith",
        "fct-type": "function",
        "title": "differenceWith"
      },
      "index": {
        "description": "Difference with combining function",
        "hierarchy": "Data HashMap",
        "module": "Data.HashMap",
        "name": "differenceWith",
        "normalized": "(a-\u003eb-\u003eMaybe a)-\u003eMap c a-\u003eMap c b-\u003eMap c a",
        "package": "hashmap",
        "partial": "With",
        "signature": "(a-\u003eb-\u003eMaybe a)-\u003eMap k a-\u003eMap k b-\u003eMap k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashmap/docs/Data-HashMap.html#v:differenceWithKey",
      "description": {
        "fct-descr": "\u003cp\u003eDifference with a combining function. When two equal keys are\n encountered, the combining function is applied to the key and both values.\n If it returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, the element is discarded (proper set difference).\n If it returns (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e y\u003c/code\u003e), the element is updated with a new value \u003ccode\u003ey\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap",
        "fct-package": "hashmap",
        "fct-signature": "(k -\u003e a -\u003e b -\u003e Maybe a) -\u003e Map k a -\u003e Map k b -\u003e Map k a",
        "fct-source": "src/Data-HashMap.html#differenceWithKey",
        "fct-type": "function",
        "title": "differenceWithKey"
      },
      "index": {
        "description": "Difference with combining function When two equal keys are encountered the combining function is applied to the key and both values If it returns Nothing the element is discarded proper set difference If it returns Just the element is updated with new value",
        "hierarchy": "Data HashMap",
        "module": "Data.HashMap",
        "name": "differenceWithKey",
        "normalized": "(a-\u003eb-\u003ec-\u003eMaybe b)-\u003eMap a b-\u003eMap a c-\u003eMap a b",
        "package": "hashmap",
        "partial": "With Key",
        "signature": "(k-\u003ea-\u003eb-\u003eMaybe a)-\u003eMap k a-\u003eMap k b-\u003eMap k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashmap/docs/Data-HashMap.html#v:elems",
      "description": {
        "fct-descr": "\u003cp\u003eReturn all elements of the map in arbitrary order of their keys.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap",
        "fct-package": "hashmap",
        "fct-signature": "Map k a -\u003e [a]",
        "fct-source": "src/Data-HashMap.html#elems",
        "fct-type": "function",
        "title": "elems"
      },
      "index": {
        "description": "Return all elements of the map in arbitrary order of their keys",
        "hierarchy": "Data HashMap",
        "module": "Data.HashMap",
        "name": "elems",
        "normalized": "Map a b-\u003e[b]",
        "package": "hashmap",
        "partial": "",
        "signature": "Map k a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashmap/docs/Data-HashMap.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003eThe empty map.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap",
        "fct-package": "hashmap",
        "fct-signature": "Map k a",
        "fct-source": "src/Data-HashMap.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "The empty map",
        "hierarchy": "Data HashMap",
        "module": "Data.HashMap",
        "name": "empty",
        "normalized": "",
        "package": "hashmap",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashmap/docs/Data-HashMap.html#v:filter",
      "description": {
        "fct-descr": "\u003cp\u003eFilter all values that satisfy some predicate.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap",
        "fct-package": "hashmap",
        "fct-signature": "(a -\u003e Bool) -\u003e Map k a -\u003e Map k a",
        "fct-source": "src/Data-HashMap.html#filter",
        "fct-type": "function",
        "title": "filter"
      },
      "index": {
        "description": "Filter all values that satisfy some predicate",
        "hierarchy": "Data HashMap",
        "module": "Data.HashMap",
        "name": "filter",
        "normalized": "(a-\u003eBool)-\u003eMap b a-\u003eMap b a",
        "package": "hashmap",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eMap k a-\u003eMap k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashmap/docs/Data-HashMap.html#v:filterWithKey",
      "description": {
        "fct-descr": "\u003cp\u003eFilter all keys/values that satisfy some predicate.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap",
        "fct-package": "hashmap",
        "fct-signature": "(k -\u003e a -\u003e Bool) -\u003e Map k a -\u003e Map k a",
        "fct-source": "src/Data-HashMap.html#filterWithKey",
        "fct-type": "function",
        "title": "filterWithKey"
      },
      "index": {
        "description": "Filter all keys values that satisfy some predicate",
        "hierarchy": "Data HashMap",
        "module": "Data.HashMap",
        "name": "filterWithKey",
        "normalized": "(a-\u003eb-\u003eBool)-\u003eMap a b-\u003eMap a b",
        "package": "hashmap",
        "partial": "With Key",
        "signature": "(k-\u003ea-\u003eBool)-\u003eMap k a-\u003eMap k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashmap/docs/Data-HashMap.html#v:findWithDefault",
      "description": {
        "fct-descr": "\u003cp\u003eThe expression \u003ccode\u003e(\u003ccode\u003e\u003ca\u003efindWithDefault\u003c/a\u003e\u003c/code\u003e def k map)\u003c/code\u003e returns the value at key\n \u003ccode\u003ek\u003c/code\u003e or returns \u003ccode\u003edef\u003c/code\u003e when the key is not an element of the map.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap",
        "fct-package": "hashmap",
        "fct-signature": "a -\u003e k -\u003e Map k a -\u003e a",
        "fct-source": "src/Data-HashMap.html#findWithDefault",
        "fct-type": "function",
        "title": "findWithDefault"
      },
      "index": {
        "description": "The expression findWithDefault def map returns the value at key or returns def when the key is not an element of the map",
        "hierarchy": "Data HashMap",
        "module": "Data.HashMap",
        "name": "findWithDefault",
        "normalized": "a-\u003eb-\u003eMap b a-\u003ea",
        "package": "hashmap",
        "partial": "With Default",
        "signature": "a-\u003ek-\u003eMap k a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashmap/docs/Data-HashMap.html#v:fold",
      "description": {
        "fct-descr": "\u003cp\u003eFold the values in the map, such that \u003ccode\u003e\u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e f z == \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e\n f z . \u003ccode\u003e\u003ca\u003eelems\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap",
        "fct-package": "hashmap",
        "fct-signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e Map k a -\u003e b",
        "fct-source": "src/Data-HashMap.html#fold",
        "fct-type": "function",
        "title": "fold"
      },
      "index": {
        "description": "Fold the values in the map such that fold foldr elems",
        "hierarchy": "Data HashMap",
        "module": "Data.HashMap",
        "name": "fold",
        "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eMap c a-\u003eb",
        "package": "hashmap",
        "partial": "",
        "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eMap k a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashmap/docs/Data-HashMap.html#v:foldWithKey",
      "description": {
        "fct-descr": "\u003cp\u003eFold the keys and values in the map, such that \u003ccode\u003e\u003ccode\u003e\u003ca\u003efoldWithKey\u003c/a\u003e\u003c/code\u003e f z ==\n \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003euncurry\u003c/a\u003e\u003c/code\u003e f) z . \u003ccode\u003etoAscList\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap",
        "fct-package": "hashmap",
        "fct-signature": "(k -\u003e a -\u003e b -\u003e b) -\u003e b -\u003e Map k a -\u003e b",
        "fct-source": "src/Data-HashMap.html#foldWithKey",
        "fct-type": "function",
        "title": "foldWithKey"
      },
      "index": {
        "description": "Fold the keys and values in the map such that foldWithKey foldr uncurry toAscList",
        "hierarchy": "Data HashMap",
        "module": "Data.HashMap",
        "name": "foldWithKey",
        "normalized": "(a-\u003eb-\u003ec-\u003ec)-\u003ec-\u003eMap a b-\u003ec",
        "package": "hashmap",
        "partial": "With Key",
        "signature": "(k-\u003ea-\u003eb-\u003eb)-\u003eb-\u003eMap k a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashmap/docs/Data-HashMap.html#v:fromList",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a map from a list of key/value pairs.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap",
        "fct-package": "hashmap",
        "fct-signature": "[(k, a)] -\u003e Map k a",
        "fct-source": "src/Data-HashMap.html#fromList",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "Create map from list of key value pairs",
        "hierarchy": "Data HashMap",
        "module": "Data.HashMap",
        "name": "fromList",
        "normalized": "[(a,b)]-\u003eMap a b",
        "package": "hashmap",
        "partial": "List",
        "signature": "[(k,a)]-\u003eMap k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashmap/docs/Data-HashMap.html#v:fromListWith",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a map from a list of key/value pairs with a combining function.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap",
        "fct-package": "hashmap",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e [(k, a)] -\u003e Map k a",
        "fct-source": "src/Data-HashMap.html#fromListWith",
        "fct-type": "function",
        "title": "fromListWith"
      },
      "index": {
        "description": "Create map from list of key value pairs with combining function",
        "hierarchy": "Data HashMap",
        "module": "Data.HashMap",
        "name": "fromListWith",
        "normalized": "(a-\u003ea-\u003ea)-\u003e[(b,a)]-\u003eMap b a",
        "package": "hashmap",
        "partial": "List With",
        "signature": "(a-\u003ea-\u003ea)-\u003e[(k,a)]-\u003eMap k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashmap/docs/Data-HashMap.html#v:fromListWithKey",
      "description": {
        "fct-descr": "\u003cp\u003eBuild a map from a list of key/value pairs with a combining function.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap",
        "fct-package": "hashmap",
        "fct-signature": "(k -\u003e a -\u003e a -\u003e a) -\u003e [(k, a)] -\u003e Map k a",
        "fct-source": "src/Data-HashMap.html#fromListWithKey",
        "fct-type": "function",
        "title": "fromListWithKey"
      },
      "index": {
        "description": "Build map from list of key value pairs with combining function",
        "hierarchy": "Data HashMap",
        "module": "Data.HashMap",
        "name": "fromListWithKey",
        "normalized": "(a-\u003eb-\u003eb-\u003eb)-\u003e[(a,b)]-\u003eMap a b",
        "package": "hashmap",
        "partial": "List With Key",
        "signature": "(k-\u003ea-\u003ea-\u003ea)-\u003e[(k,a)]-\u003eMap k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashmap/docs/Data-HashMap.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003eInsert a new key/value pair in the map.  If the key is already present in\n the map, the associated value is replaced with the supplied value, i.e.\n \u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e is equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003einsertWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap",
        "fct-package": "hashmap",
        "fct-signature": "k -\u003e a -\u003e Map k a -\u003e Map k a",
        "fct-source": "src/Data-HashMap.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "Insert new key value pair in the map If the key is already present in the map the associated value is replaced with the supplied value i.e insert is equivalent to insertWith const",
        "hierarchy": "Data HashMap",
        "module": "Data.HashMap",
        "name": "insert",
        "normalized": "a-\u003eb-\u003eMap a b-\u003eMap a b",
        "package": "hashmap",
        "partial": "",
        "signature": "k-\u003ea-\u003eMap k a-\u003eMap k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashmap/docs/Data-HashMap.html#v:insertLookupWithKey",
      "description": {
        "fct-descr": "\u003cp\u003eThe expression (\u003ccode\u003e\u003ccode\u003e\u003ca\u003einsertLookupWithKey\u003c/a\u003e\u003c/code\u003e f k x map\u003c/code\u003e) is a pair where the\n first element is equal to (\u003ccode\u003e\u003ccode\u003e\u003ca\u003elookup\u003c/a\u003e\u003c/code\u003e k map\u003c/code\u003e) and the second element equal to\n (\u003ccode\u003e\u003ccode\u003e\u003ca\u003einsertWithKey\u003c/a\u003e\u003c/code\u003e f k x map\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Data.HashMap",
        "fct-package": "hashmap",
        "fct-signature": "(k -\u003e a -\u003e a -\u003e a) -\u003e k -\u003e a -\u003e Map k a -\u003e (Maybe a, Map k a)",
        "fct-source": "src/Data-HashMap.html#insertLookupWithKey",
        "fct-type": "function",
        "title": "insertLookupWithKey"
      },
      "index": {
        "description": "The expression insertLookupWithKey map is pair where the first element is equal to lookup map and the second element equal to insertWithKey map",
        "hierarchy": "Data HashMap",
        "module": "Data.HashMap",
        "name": "insertLookupWithKey",
        "normalized": "(a-\u003eb-\u003eb-\u003eb)-\u003ea-\u003eb-\u003eMap a b-\u003e(Maybe b,Map a b)",
        "package": "hashmap",
        "partial": "Lookup With Key",
        "signature": "(k-\u003ea-\u003ea-\u003ea)-\u003ek-\u003ea-\u003eMap k a-\u003e(Maybe a,Map k a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashmap/docs/Data-HashMap.html#v:insertWith",
      "description": {
        "fct-descr": "\u003cp\u003eInsert with a combining function.  \u003ccode\u003e\u003ccode\u003e\u003ca\u003einsertWith\u003c/a\u003e\u003c/code\u003e f key value mp\u003c/code\u003e will\n insert the pair (key, value) into \u003ccode\u003emp\u003c/code\u003e if key does not exist in the map. If\n the key does exist, the function will insert \u003ccode\u003ef new_value old_value\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap",
        "fct-package": "hashmap",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e k -\u003e a -\u003e Map k a -\u003e Map k a",
        "fct-source": "src/Data-HashMap.html#insertWith",
        "fct-type": "function",
        "title": "insertWith"
      },
      "index": {
        "description": "Insert with combining function insertWith key value mp will insert the pair key value into mp if key does not exist in the map If the key does exist the function will insert new value old value",
        "hierarchy": "Data HashMap",
        "module": "Data.HashMap",
        "name": "insertWith",
        "normalized": "(a-\u003ea-\u003ea)-\u003eb-\u003ea-\u003eMap b a-\u003eMap b a",
        "package": "hashmap",
        "partial": "With",
        "signature": "(a-\u003ea-\u003ea)-\u003ek-\u003ea-\u003eMap k a-\u003eMap k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashmap/docs/Data-HashMap.html#v:insertWithKey",
      "description": {
        "fct-descr": "\u003cp\u003eInsert with a combining function.  \u003ccode\u003e\u003ccode\u003e\u003ca\u003einsertWithKey\u003c/a\u003e\u003c/code\u003e f key value mp\u003c/code\u003e will\n insert the pair (key, value) into \u003ccode\u003emp\u003c/code\u003e if key does not exist in the map. If\n the key does exist, the function will insert \u003ccode\u003ef key new_value old_value\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap",
        "fct-package": "hashmap",
        "fct-signature": "(k -\u003e a -\u003e a -\u003e a) -\u003e k -\u003e a -\u003e Map k a -\u003e Map k a",
        "fct-source": "src/Data-HashMap.html#insertWithKey",
        "fct-type": "function",
        "title": "insertWithKey"
      },
      "index": {
        "description": "Insert with combining function insertWithKey key value mp will insert the pair key value into mp if key does not exist in the map If the key does exist the function will insert key new value old value",
        "hierarchy": "Data HashMap",
        "module": "Data.HashMap",
        "name": "insertWithKey",
        "normalized": "(a-\u003eb-\u003eb-\u003eb)-\u003ea-\u003eb-\u003eMap a b-\u003eMap a b",
        "package": "hashmap",
        "partial": "With Key",
        "signature": "(k-\u003ea-\u003ea-\u003ea)-\u003ek-\u003ea-\u003eMap k a-\u003eMap k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashmap/docs/Data-HashMap.html#v:intersection",
      "description": {
        "fct-descr": "\u003cp\u003eThe (left-biased) intersection of two maps (based on keys).\n\u003c/p\u003e",
        "fct-module": "Data.HashMap",
        "fct-package": "hashmap",
        "fct-signature": "Map k a -\u003e Map k b -\u003e Map k a",
        "fct-source": "src/Data-HashMap.html#intersection",
        "fct-type": "function",
        "title": "intersection"
      },
      "index": {
        "description": "The left-biased intersection of two maps based on keys",
        "hierarchy": "Data HashMap",
        "module": "Data.HashMap",
        "name": "intersection",
        "normalized": "Map a b-\u003eMap a c-\u003eMap a b",
        "package": "hashmap",
        "partial": "",
        "signature": "Map k a-\u003eMap k b-\u003eMap k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashmap/docs/Data-HashMap.html#v:intersectionWith",
      "description": {
        "fct-descr": "\u003cp\u003eThe intersection with a combining function.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap",
        "fct-package": "hashmap",
        "fct-signature": "(a -\u003e b -\u003e c) -\u003e Map k a -\u003e Map k b -\u003e Map k c",
        "fct-source": "src/Data-HashMap.html#intersectionWith",
        "fct-type": "function",
        "title": "intersectionWith"
      },
      "index": {
        "description": "The intersection with combining function",
        "hierarchy": "Data HashMap",
        "module": "Data.HashMap",
        "name": "intersectionWith",
        "normalized": "(a-\u003eb-\u003ec)-\u003eMap d a-\u003eMap d b-\u003eMap d c",
        "package": "hashmap",
        "partial": "With",
        "signature": "(a-\u003eb-\u003ec)-\u003eMap k a-\u003eMap k b-\u003eMap k c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashmap/docs/Data-HashMap.html#v:intersectionWithKey",
      "description": {
        "fct-descr": "\u003cp\u003eThe intersection with a combining function.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap",
        "fct-package": "hashmap",
        "fct-signature": "(k -\u003e a -\u003e b -\u003e c) -\u003e Map k a -\u003e Map k b -\u003e Map k c",
        "fct-source": "src/Data-HashMap.html#intersectionWithKey",
        "fct-type": "function",
        "title": "intersectionWithKey"
      },
      "index": {
        "description": "The intersection with combining function",
        "hierarchy": "Data HashMap",
        "module": "Data.HashMap",
        "name": "intersectionWithKey",
        "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003eMap a b-\u003eMap a c-\u003eMap a d",
        "package": "hashmap",
        "partial": "With Key",
        "signature": "(k-\u003ea-\u003eb-\u003ec)-\u003eMap k a-\u003eMap k b-\u003eMap k c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashmap/docs/Data-HashMap.html#v:isProperSubmapOf",
      "description": {
        "fct-descr": "\u003cp\u003eIs this a proper submap? (ie. a submap but not equal).\n\u003c/p\u003e",
        "fct-module": "Data.HashMap",
        "fct-package": "hashmap",
        "fct-signature": "Map k a -\u003e Map k a -\u003e Bool",
        "fct-source": "src/Data-HashMap.html#isProperSubmapOf",
        "fct-type": "function",
        "title": "isProperSubmapOf"
      },
      "index": {
        "description": "Is this proper submap ie submap but not equal",
        "hierarchy": "Data HashMap",
        "module": "Data.HashMap",
        "name": "isProperSubmapOf",
        "normalized": "Map a b-\u003eMap a b-\u003eBool",
        "package": "hashmap",
        "partial": "Proper Submap Of",
        "signature": "Map k a-\u003eMap k a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashmap/docs/Data-HashMap.html#v:isProperSubmapOfBy",
      "description": {
        "fct-descr": "\u003cp\u003eIs this a proper submap? (ie. a submap but not equal).  The expression\n (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eisProperSubmapOfBy\u003c/a\u003e\u003c/code\u003e f m1 m2\u003c/code\u003e) returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e when \u003ccode\u003em1\u003c/code\u003e and \u003ccode\u003em2\u003c/code\u003e are not\n equal, all keys in \u003ccode\u003em1\u003c/code\u003e are in \u003ccode\u003em2\u003c/code\u003e, and when \u003ccode\u003ef\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e when\n applied to their respective values.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap",
        "fct-package": "hashmap",
        "fct-signature": "(a -\u003e b -\u003e Bool) -\u003e Map k a -\u003e Map k b -\u003e Bool",
        "fct-source": "src/Data-HashMap.html#isProperSubmapOfBy",
        "fct-type": "function",
        "title": "isProperSubmapOfBy"
      },
      "index": {
        "description": "Is this proper submap ie submap but not equal The expression isProperSubmapOfBy m1 m2 returns True when m1 and m2 are not equal all keys in m1 are in m2 and when returns True when applied to their respective values",
        "hierarchy": "Data HashMap",
        "module": "Data.HashMap",
        "name": "isProperSubmapOfBy",
        "normalized": "(a-\u003eb-\u003eBool)-\u003eMap c a-\u003eMap c b-\u003eBool",
        "package": "hashmap",
        "partial": "Proper Submap Of By",
        "signature": "(a-\u003eb-\u003eBool)-\u003eMap k a-\u003eMap k b-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashmap/docs/Data-HashMap.html#v:isSubmapOf",
      "description": {
        "fct-descr": "\u003cp\u003eIs this a submap?\n\u003c/p\u003e",
        "fct-module": "Data.HashMap",
        "fct-package": "hashmap",
        "fct-signature": "Map k a -\u003e Map k a -\u003e Bool",
        "fct-source": "src/Data-HashMap.html#isSubmapOf",
        "fct-type": "function",
        "title": "isSubmapOf"
      },
      "index": {
        "description": "Is this submap",
        "hierarchy": "Data HashMap",
        "module": "Data.HashMap",
        "name": "isSubmapOf",
        "normalized": "Map a b-\u003eMap a b-\u003eBool",
        "package": "hashmap",
        "partial": "Submap Of",
        "signature": "Map k a-\u003eMap k a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashmap/docs/Data-HashMap.html#v:isSubmapOfBy",
      "description": {
        "fct-descr": "\u003cp\u003eThe expression (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eisSubmapOfBy\u003c/a\u003e\u003c/code\u003e f m1 m2\u003c/code\u003e) returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if all keys in\n \u003ccode\u003em1\u003c/code\u003e are in \u003ccode\u003em2\u003c/code\u003e, and when \u003ccode\u003ef\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e when applied to their\n respective values.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap",
        "fct-package": "hashmap",
        "fct-signature": "(a -\u003e b -\u003e Bool) -\u003e Map k a -\u003e Map k b -\u003e Bool",
        "fct-source": "src/Data-HashMap.html#isSubmapOfBy",
        "fct-type": "function",
        "title": "isSubmapOfBy"
      },
      "index": {
        "description": "The expression isSubmapOfBy m1 m2 returns True if all keys in m1 are in m2 and when returns True when applied to their respective values",
        "hierarchy": "Data HashMap",
        "module": "Data.HashMap",
        "name": "isSubmapOfBy",
        "normalized": "(a-\u003eb-\u003eBool)-\u003eMap c a-\u003eMap c b-\u003eBool",
        "package": "hashmap",
        "partial": "Submap Of By",
        "signature": "(a-\u003eb-\u003eBool)-\u003eMap k a-\u003eMap k b-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashmap/docs/Data-HashMap.html#v:keys",
      "description": {
        "fct-descr": "\u003cp\u003eReturn all keys of the map in arbitrary order.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap",
        "fct-package": "hashmap",
        "fct-signature": "Map k a -\u003e [k]",
        "fct-source": "src/Data-HashMap.html#keys",
        "fct-type": "function",
        "title": "keys"
      },
      "index": {
        "description": "Return all keys of the map in arbitrary order",
        "hierarchy": "Data HashMap",
        "module": "Data.HashMap",
        "name": "keys",
        "normalized": "Map a b-\u003e[a]",
        "package": "hashmap",
        "partial": "",
        "signature": "Map k a-\u003e[k]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashmap/docs/Data-HashMap.html#v:keysSet",
      "description": {
        "fct-descr": "\u003cp\u003eThe set of all keys of the map.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap",
        "fct-package": "hashmap",
        "fct-signature": "Map k a -\u003e Set k",
        "fct-source": "src/Data-HashMap.html#keysSet",
        "fct-type": "function",
        "title": "keysSet"
      },
      "index": {
        "description": "The set of all keys of the map",
        "hierarchy": "Data HashMap",
        "module": "Data.HashMap",
        "name": "keysSet",
        "normalized": "Map a b-\u003eSet a",
        "package": "hashmap",
        "partial": "Set",
        "signature": "Map k a-\u003eSet k"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashmap/docs/Data-HashMap.html#v:lookup",
      "description": {
        "fct-descr": "\u003cp\u003eLookup the value at a key in the map.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap",
        "fct-package": "hashmap",
        "fct-signature": "k -\u003e Map k a -\u003e Maybe a",
        "fct-source": "src/Data-HashMap.html#lookup",
        "fct-type": "function",
        "title": "lookup"
      },
      "index": {
        "description": "Lookup the value at key in the map",
        "hierarchy": "Data HashMap",
        "module": "Data.HashMap",
        "name": "lookup",
        "normalized": "a-\u003eMap a b-\u003eMaybe b",
        "package": "hashmap",
        "partial": "",
        "signature": "k-\u003eMap k a-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashmap/docs/Data-HashMap.html#v:map",
      "description": {
        "fct-descr": "\u003cp\u003eMap a function over all values in the map.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap",
        "fct-package": "hashmap",
        "fct-signature": "(a -\u003e b) -\u003e Map k a -\u003e Map k b",
        "fct-source": "src/Data-HashMap.html#map",
        "fct-type": "function",
        "title": "map"
      },
      "index": {
        "description": "Map function over all values in the map",
        "hierarchy": "Data HashMap",
        "module": "Data.HashMap",
        "name": "map",
        "normalized": "(a-\u003eb)-\u003eMap c a-\u003eMap c b",
        "package": "hashmap",
        "partial": "",
        "signature": "(a-\u003eb)-\u003eMap k a-\u003eMap k b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashmap/docs/Data-HashMap.html#v:mapAccum",
      "description": {
        "fct-descr": "\u003cp\u003eThe function \u003ccode\u003e\u003ccode\u003e\u003ca\u003emapAccum\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e threads an accumulating argument through the map\n in unspecified order of keys.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap",
        "fct-package": "hashmap",
        "fct-signature": "(a -\u003e b -\u003e (a, c)) -\u003e a -\u003e Map k b -\u003e (a, Map k c)",
        "fct-source": "src/Data-HashMap.html#mapAccum",
        "fct-type": "function",
        "title": "mapAccum"
      },
      "index": {
        "description": "The function mapAccum threads an accumulating argument through the map in unspecified order of keys",
        "hierarchy": "Data HashMap",
        "module": "Data.HashMap",
        "name": "mapAccum",
        "normalized": "(a-\u003eb-\u003e(a,c))-\u003ea-\u003eMap d b-\u003e(a,Map d c)",
        "package": "hashmap",
        "partial": "Accum",
        "signature": "(a-\u003eb-\u003e(a,c))-\u003ea-\u003eMap k b-\u003e(a,Map k c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashmap/docs/Data-HashMap.html#v:mapAccumWithKey",
      "description": {
        "fct-descr": "\u003cp\u003eThe function \u003ccode\u003e\u003ccode\u003e\u003ca\u003emapAccumWithKey\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e threads an accumulating argument through\n the map in unspecified order of keys.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap",
        "fct-package": "hashmap",
        "fct-signature": "(a -\u003e k -\u003e b -\u003e (a, c)) -\u003e a -\u003e Map k b -\u003e (a, Map k c)",
        "fct-source": "src/Data-HashMap.html#mapAccumWithKey",
        "fct-type": "function",
        "title": "mapAccumWithKey"
      },
      "index": {
        "description": "The function mapAccumWithKey threads an accumulating argument through the map in unspecified order of keys",
        "hierarchy": "Data HashMap",
        "module": "Data.HashMap",
        "name": "mapAccumWithKey",
        "normalized": "(a-\u003eb-\u003ec-\u003e(a,d))-\u003ea-\u003eMap b c-\u003e(a,Map b d)",
        "package": "hashmap",
        "partial": "Accum With Key",
        "signature": "(a-\u003ek-\u003eb-\u003e(a,c))-\u003ea-\u003eMap k b-\u003e(a,Map k c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashmap/docs/Data-HashMap.html#v:mapEither",
      "description": {
        "fct-descr": "\u003cp\u003eMap values and separate the \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e results.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap",
        "fct-package": "hashmap",
        "fct-signature": "(a -\u003e Either b c) -\u003e Map k a -\u003e (Map k b, Map k c)",
        "fct-source": "src/Data-HashMap.html#mapEither",
        "fct-type": "function",
        "title": "mapEither"
      },
      "index": {
        "description": "Map values and separate the Left and Right results",
        "hierarchy": "Data HashMap",
        "module": "Data.HashMap",
        "name": "mapEither",
        "normalized": "(a-\u003eEither b c)-\u003eMap d a-\u003e(Map d b,Map d c)",
        "package": "hashmap",
        "partial": "Either",
        "signature": "(a-\u003eEither b c)-\u003eMap k a-\u003e(Map k b,Map k c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashmap/docs/Data-HashMap.html#v:mapEitherWithKey",
      "description": {
        "fct-descr": "\u003cp\u003eMap keys/values and separate the \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e results.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap",
        "fct-package": "hashmap",
        "fct-signature": "(k -\u003e a -\u003e Either b c) -\u003e Map k a -\u003e (Map k b, Map k c)",
        "fct-source": "src/Data-HashMap.html#mapEitherWithKey",
        "fct-type": "function",
        "title": "mapEitherWithKey"
      },
      "index": {
        "description": "Map keys values and separate the Left and Right results",
        "hierarchy": "Data HashMap",
        "module": "Data.HashMap",
        "name": "mapEitherWithKey",
        "normalized": "(a-\u003eb-\u003eEither c d)-\u003eMap a b-\u003e(Map a c,Map a d)",
        "package": "hashmap",
        "partial": "Either With Key",
        "signature": "(k-\u003ea-\u003eEither b c)-\u003eMap k a-\u003e(Map k b,Map k c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashmap/docs/Data-HashMap.html#v:mapMaybe",
      "description": {
        "fct-descr": "\u003cp\u003eMap values and collect the \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e results.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap",
        "fct-package": "hashmap",
        "fct-signature": "(a -\u003e Maybe b) -\u003e Map k a -\u003e Map k b",
        "fct-source": "src/Data-HashMap.html#mapMaybe",
        "fct-type": "function",
        "title": "mapMaybe"
      },
      "index": {
        "description": "Map values and collect the Just results",
        "hierarchy": "Data HashMap",
        "module": "Data.HashMap",
        "name": "mapMaybe",
        "normalized": "(a-\u003eMaybe b)-\u003eMap c a-\u003eMap c b",
        "package": "hashmap",
        "partial": "Maybe",
        "signature": "(a-\u003eMaybe b)-\u003eMap k a-\u003eMap k b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashmap/docs/Data-HashMap.html#v:mapMaybeWithKey",
      "description": {
        "fct-descr": "\u003cp\u003eMap keys/values and collect the \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e results.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap",
        "fct-package": "hashmap",
        "fct-signature": "(k -\u003e a -\u003e Maybe b) -\u003e Map k a -\u003e Map k b",
        "fct-source": "src/Data-HashMap.html#mapMaybeWithKey",
        "fct-type": "function",
        "title": "mapMaybeWithKey"
      },
      "index": {
        "description": "Map keys values and collect the Just results",
        "hierarchy": "Data HashMap",
        "module": "Data.HashMap",
        "name": "mapMaybeWithKey",
        "normalized": "(a-\u003eb-\u003eMaybe c)-\u003eMap a b-\u003eMap a c",
        "package": "hashmap",
        "partial": "Maybe With Key",
        "signature": "(k-\u003ea-\u003eMaybe b)-\u003eMap k a-\u003eMap k b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashmap/docs/Data-HashMap.html#v:mapWithKey",
      "description": {
        "fct-descr": "\u003cp\u003eMap a function over all values in the map.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap",
        "fct-package": "hashmap",
        "fct-signature": "(k -\u003e a -\u003e b) -\u003e Map k a -\u003e Map k b",
        "fct-source": "src/Data-HashMap.html#mapWithKey",
        "fct-type": "function",
        "title": "mapWithKey"
      },
      "index": {
        "description": "Map function over all values in the map",
        "hierarchy": "Data HashMap",
        "module": "Data.HashMap",
        "name": "mapWithKey",
        "normalized": "(a-\u003eb-\u003ec)-\u003eMap a b-\u003eMap a c",
        "package": "hashmap",
        "partial": "With Key",
        "signature": "(k-\u003ea-\u003eb)-\u003eMap k a-\u003eMap k b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashmap/docs/Data-HashMap.html#v:member",
      "description": {
        "fct-descr": "\u003cp\u003eIs the key a member of the map?\n\u003c/p\u003e",
        "fct-module": "Data.HashMap",
        "fct-package": "hashmap",
        "fct-signature": "k -\u003e Map k a -\u003e Bool",
        "fct-source": "src/Data-HashMap.html#member",
        "fct-type": "function",
        "title": "member"
      },
      "index": {
        "description": "Is the key member of the map",
        "hierarchy": "Data HashMap",
        "module": "Data.HashMap",
        "name": "member",
        "normalized": "a-\u003eMap a b-\u003eBool",
        "package": "hashmap",
        "partial": "",
        "signature": "k-\u003eMap k a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashmap/docs/Data-HashMap.html#v:notMember",
      "description": {
        "fct-descr": "\u003cp\u003eIs the key not a member of the map?\n\u003c/p\u003e",
        "fct-module": "Data.HashMap",
        "fct-package": "hashmap",
        "fct-signature": "k -\u003e Map k a -\u003e Bool",
        "fct-source": "src/Data-HashMap.html#notMember",
        "fct-type": "function",
        "title": "notMember"
      },
      "index": {
        "description": "Is the key not member of the map",
        "hierarchy": "Data HashMap",
        "module": "Data.HashMap",
        "name": "notMember",
        "normalized": "a-\u003eMap a b-\u003eBool",
        "package": "hashmap",
        "partial": "Member",
        "signature": "k-\u003eMap k a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashmap/docs/Data-HashMap.html#v:null",
      "description": {
        "fct-descr": "\u003cp\u003eIs the map empty?\n\u003c/p\u003e",
        "fct-module": "Data.HashMap",
        "fct-package": "hashmap",
        "fct-signature": "Map k a -\u003e Bool",
        "fct-source": "src/Data-HashMap.html#null",
        "fct-type": "function",
        "title": "null"
      },
      "index": {
        "description": "Is the map empty",
        "hierarchy": "Data HashMap",
        "module": "Data.HashMap",
        "name": "null",
        "normalized": "Map a b-\u003eBool",
        "package": "hashmap",
        "partial": "",
        "signature": "Map k a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashmap/docs/Data-HashMap.html#v:partition",
      "description": {
        "fct-descr": "\u003cp\u003ePartition the map according to some predicate. The first map contains all\n elements that satisfy the predicate, the second all elements that fail the\n predicate.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap",
        "fct-package": "hashmap",
        "fct-signature": "(a -\u003e Bool) -\u003e Map k a -\u003e (Map k a, Map k a)",
        "fct-source": "src/Data-HashMap.html#partition",
        "fct-type": "function",
        "title": "partition"
      },
      "index": {
        "description": "Partition the map according to some predicate The first map contains all elements that satisfy the predicate the second all elements that fail the predicate",
        "hierarchy": "Data HashMap",
        "module": "Data.HashMap",
        "name": "partition",
        "normalized": "(a-\u003eBool)-\u003eMap b a-\u003e(Map b a,Map b a)",
        "package": "hashmap",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eMap k a-\u003e(Map k a,Map k a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashmap/docs/Data-HashMap.html#v:partitionWithKey",
      "description": {
        "fct-descr": "\u003cp\u003ePartition the map according to some predicate. The first map contains all\n elements that satisfy the predicate, the second all elements that fail the\n predicate.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap",
        "fct-package": "hashmap",
        "fct-signature": "(k -\u003e a -\u003e Bool) -\u003e Map k a -\u003e (Map k a, Map k a)",
        "fct-source": "src/Data-HashMap.html#partitionWithKey",
        "fct-type": "function",
        "title": "partitionWithKey"
      },
      "index": {
        "description": "Partition the map according to some predicate The first map contains all elements that satisfy the predicate the second all elements that fail the predicate",
        "hierarchy": "Data HashMap",
        "module": "Data.HashMap",
        "name": "partitionWithKey",
        "normalized": "(a-\u003eb-\u003eBool)-\u003eMap a b-\u003e(Map a b,Map a b)",
        "package": "hashmap",
        "partial": "With Key",
        "signature": "(k-\u003ea-\u003eBool)-\u003eMap k a-\u003e(Map k a,Map k a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashmap/docs/Data-HashMap.html#v:singleton",
      "description": {
        "fct-descr": "\u003cp\u003eA map of one element.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap",
        "fct-package": "hashmap",
        "fct-signature": "k -\u003e a -\u003e Map k a",
        "fct-source": "src/Data-HashMap.html#singleton",
        "fct-type": "function",
        "title": "singleton"
      },
      "index": {
        "description": "map of one element",
        "hierarchy": "Data HashMap",
        "module": "Data.HashMap",
        "name": "singleton",
        "normalized": "a-\u003eb-\u003eMap a b",
        "package": "hashmap",
        "partial": "",
        "signature": "k-\u003ea-\u003eMap k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashmap/docs/Data-HashMap.html#v:size",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of elements in the map.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap",
        "fct-package": "hashmap",
        "fct-signature": "Map k a -\u003e Int",
        "fct-source": "src/Data-HashMap.html#size",
        "fct-type": "function",
        "title": "size"
      },
      "index": {
        "description": "Number of elements in the map",
        "hierarchy": "Data HashMap",
        "module": "Data.HashMap",
        "name": "size",
        "normalized": "Map a b-\u003eInt",
        "package": "hashmap",
        "partial": "",
        "signature": "Map k a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashmap/docs/Data-HashMap.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003eConvert the map to a list of key/value pairs.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap",
        "fct-package": "hashmap",
        "fct-signature": "Map k a -\u003e [(k, a)]",
        "fct-source": "src/Data-HashMap.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "Convert the map to list of key value pairs",
        "hierarchy": "Data HashMap",
        "module": "Data.HashMap",
        "name": "toList",
        "normalized": "Map a b-\u003e[(a,b)]",
        "package": "hashmap",
        "partial": "List",
        "signature": "Map k a-\u003e[(k,a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashmap/docs/Data-HashMap.html#v:union",
      "description": {
        "fct-descr": "\u003cp\u003eThe (left-biased) union of two maps.\n It prefers the first map when duplicate keys are encountered,\n i.e. (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e == \u003ccode\u003e\u003ca\u003eunionWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Data.HashMap",
        "fct-package": "hashmap",
        "fct-signature": "Map k a -\u003e Map k a -\u003e Map k a",
        "fct-source": "src/Data-HashMap.html#union",
        "fct-type": "function",
        "title": "union"
      },
      "index": {
        "description": "The left-biased union of two maps It prefers the first map when duplicate keys are encountered i.e union unionWith const",
        "hierarchy": "Data HashMap",
        "module": "Data.HashMap",
        "name": "union",
        "normalized": "Map a b-\u003eMap a b-\u003eMap a b",
        "package": "hashmap",
        "partial": "",
        "signature": "Map k a-\u003eMap k a-\u003eMap k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashmap/docs/Data-HashMap.html#v:unionWith",
      "description": {
        "fct-descr": "\u003cp\u003eThe union with a combining function.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap",
        "fct-package": "hashmap",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e Map k a -\u003e Map k a -\u003e Map k a",
        "fct-source": "src/Data-HashMap.html#unionWith",
        "fct-type": "function",
        "title": "unionWith"
      },
      "index": {
        "description": "The union with combining function",
        "hierarchy": "Data HashMap",
        "module": "Data.HashMap",
        "name": "unionWith",
        "normalized": "(a-\u003ea-\u003ea)-\u003eMap b a-\u003eMap b a-\u003eMap b a",
        "package": "hashmap",
        "partial": "With",
        "signature": "(a-\u003ea-\u003ea)-\u003eMap k a-\u003eMap k a-\u003eMap k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashmap/docs/Data-HashMap.html#v:unionWithKey",
      "description": {
        "fct-descr": "\u003cp\u003eThe union with a combining function.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap",
        "fct-package": "hashmap",
        "fct-signature": "(k -\u003e a -\u003e a -\u003e a) -\u003e Map k a -\u003e Map k a -\u003e Map k a",
        "fct-source": "src/Data-HashMap.html#unionWithKey",
        "fct-type": "function",
        "title": "unionWithKey"
      },
      "index": {
        "description": "The union with combining function",
        "hierarchy": "Data HashMap",
        "module": "Data.HashMap",
        "name": "unionWithKey",
        "normalized": "(a-\u003eb-\u003eb-\u003eb)-\u003eMap a b-\u003eMap a b-\u003eMap a b",
        "package": "hashmap",
        "partial": "With Key",
        "signature": "(k-\u003ea-\u003ea-\u003ea)-\u003eMap k a-\u003eMap k a-\u003eMap k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashmap/docs/Data-HashMap.html#v:unions",
      "description": {
        "fct-descr": "\u003cp\u003eThe union of a list of maps.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap",
        "fct-package": "hashmap",
        "fct-signature": "[Map k a] -\u003e Map k a",
        "fct-source": "src/Data-HashMap.html#unions",
        "fct-type": "function",
        "title": "unions"
      },
      "index": {
        "description": "The union of list of maps",
        "hierarchy": "Data HashMap",
        "module": "Data.HashMap",
        "name": "unions",
        "normalized": "[Map a b]-\u003eMap a b",
        "package": "hashmap",
        "partial": "",
        "signature": "[Map k a]-\u003eMap k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashmap/docs/Data-HashMap.html#v:unionsWith",
      "description": {
        "fct-descr": "\u003cp\u003eThe union of a list of maps, with a combining operation.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap",
        "fct-package": "hashmap",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e [Map k a] -\u003e Map k a",
        "fct-source": "src/Data-HashMap.html#unionsWith",
        "fct-type": "function",
        "title": "unionsWith"
      },
      "index": {
        "description": "The union of list of maps with combining operation",
        "hierarchy": "Data HashMap",
        "module": "Data.HashMap",
        "name": "unionsWith",
        "normalized": "(a-\u003ea-\u003ea)-\u003e[Map b a]-\u003eMap b a",
        "package": "hashmap",
        "partial": "With",
        "signature": "(a-\u003ea-\u003ea)-\u003e[Map k a]-\u003eMap k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashmap/docs/Data-HashMap.html#v:update",
      "description": {
        "fct-descr": "\u003cp\u003eThe expression (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eupdate\u003c/a\u003e\u003c/code\u003e f k map\u003c/code\u003e) updates the value \u003ccode\u003ex\u003c/code\u003e at \u003ccode\u003ek\u003c/code\u003e (if it is\n in the map). If (\u003ccode\u003ef x\u003c/code\u003e) is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, the element is deleted. If it is\n (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e y\u003c/code\u003e), the key \u003ccode\u003ek\u003c/code\u003e is bound to the new value \u003ccode\u003ey\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap",
        "fct-package": "hashmap",
        "fct-signature": "(a -\u003e Maybe a) -\u003e k -\u003e Map k a -\u003e Map k a",
        "fct-source": "src/Data-HashMap.html#update",
        "fct-type": "function",
        "title": "update"
      },
      "index": {
        "description": "The expression update map updates the value at if it is in the map If is Nothing the element is deleted If it is Just the key is bound to the new value",
        "hierarchy": "Data HashMap",
        "module": "Data.HashMap",
        "name": "update",
        "normalized": "(a-\u003eMaybe a)-\u003eb-\u003eMap b a-\u003eMap b a",
        "package": "hashmap",
        "partial": "",
        "signature": "(a-\u003eMaybe a)-\u003ek-\u003eMap k a-\u003eMap k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashmap/docs/Data-HashMap.html#v:updateLookupWithKey",
      "description": {
        "fct-descr": "\u003cp\u003eLookup and update.  The function returns original value, if it is updated.\n This is different behavior than \u003ccode\u003e\u003ca\u003eupdateLookupWithKey\u003c/a\u003e\u003c/code\u003e.  Returns the\n original key value if the map entry is deleted.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap",
        "fct-package": "hashmap",
        "fct-signature": "(k -\u003e a -\u003e Maybe a) -\u003e k -\u003e Map k a -\u003e (Maybe a, Map k a)",
        "fct-source": "src/Data-HashMap.html#updateLookupWithKey",
        "fct-type": "function",
        "title": "updateLookupWithKey"
      },
      "index": {
        "description": "Lookup and update The function returns original value if it is updated This is different behavior than updateLookupWithKey Returns the original key value if the map entry is deleted",
        "hierarchy": "Data HashMap",
        "module": "Data.HashMap",
        "name": "updateLookupWithKey",
        "normalized": "(a-\u003eb-\u003eMaybe b)-\u003ea-\u003eMap a b-\u003e(Maybe b,Map a b)",
        "package": "hashmap",
        "partial": "Lookup With Key",
        "signature": "(k-\u003ea-\u003eMaybe a)-\u003ek-\u003eMap k a-\u003e(Maybe a,Map k a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashmap/docs/Data-HashMap.html#v:updateWithKey",
      "description": {
        "fct-descr": "\u003cp\u003eThe expression (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eupdate\u003c/a\u003e\u003c/code\u003e f k map\u003c/code\u003e) updates the value \u003ccode\u003ex\u003c/code\u003e at \u003ccode\u003ek\u003c/code\u003e (if it is\n in the map). If (\u003ccode\u003ef k x\u003c/code\u003e) is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, the element is deleted. If it is\n (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e y\u003c/code\u003e), the key \u003ccode\u003ek\u003c/code\u003e is bound to the new value \u003ccode\u003ey\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap",
        "fct-package": "hashmap",
        "fct-signature": "(k -\u003e a -\u003e Maybe a) -\u003e k -\u003e Map k a -\u003e Map k a",
        "fct-source": "src/Data-HashMap.html#updateWithKey",
        "fct-type": "function",
        "title": "updateWithKey"
      },
      "index": {
        "description": "The expression update map updates the value at if it is in the map If is Nothing the element is deleted If it is Just the key is bound to the new value",
        "hierarchy": "Data HashMap",
        "module": "Data.HashMap",
        "name": "updateWithKey",
        "normalized": "(a-\u003eb-\u003eMaybe b)-\u003ea-\u003eMap a b-\u003eMap a b",
        "package": "hashmap",
        "partial": "With Key",
        "signature": "(k-\u003ea-\u003eMaybe a)-\u003ek-\u003eMap k a-\u003eMap k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashmap/docs/Data-HashSet.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePersistent \u003ccode\u003e\u003ca\u003eSet\u003c/a\u003e\u003c/code\u003e based on hashing, which is defined as\n\u003c/p\u003e\u003cpre\u003e\n   data \u003ccode\u003e\u003ca\u003eSet\u003c/a\u003e\u003c/code\u003e e = \u003ccode\u003e\u003ca\u003eIntMap\u003c/a\u003e\u003c/code\u003e (Some e)\n\u003c/pre\u003e\u003cp\u003eis an \u003ccode\u003e\u003ca\u003eIntMap\u003c/a\u003e\u003c/code\u003e indexed by hash values of elements,\n containing a value of \u003ccode\u003eSome e\u003c/code\u003e. That contains either one \u003ccode\u003ee\u003c/code\u003e\n or a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eSet\u003c/a\u003e\u003c/code\u003e e\u003c/code\u003e with elements of the same hash values.\n\u003c/p\u003e\u003cp\u003eThe interface of a \u003ccode\u003e\u003ca\u003eSet\u003c/a\u003e\u003c/code\u003e is a suitable subset of \u003ccode\u003e\u003ca\u003eIntSet\u003c/a\u003e\u003c/code\u003e\n and can be used as a drop-in replacement of \u003ccode\u003e\u003ca\u003eSet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe complexity of operations is determined by the complexities of\n \u003ccode\u003e\u003ca\u003eIntMap\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eSet\u003c/a\u003e\u003c/code\u003e operations. See the sources of\n \u003ccode\u003e\u003ca\u003eSet\u003c/a\u003e\u003c/code\u003e to see which operations from \u003ccode\u003econtainers\u003c/code\u003e package are used.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.HashSet",
        "fct-package": "hashmap",
        "fct-signature": "module",
        "fct-source": "src/Data-HashSet.html",
        "fct-type": "module",
        "title": "HashSet"
      },
      "index": {
        "description": "Persistent Set based on hashing which is defined as data Set IntMap Some is an IntMap indexed by hash values of elements containing value of Some That contains either one or Set with elements of the same hash values The interface of Set is suitable subset of IntSet and can be used as drop-in replacement of Set The complexity of operations is determined by the complexities of IntMap and Set operations See the sources of Set to see which operations from containers package are used",
        "hierarchy": "Data HashSet",
        "module": "Data.HashSet",
        "name": "HashSet",
        "normalized": "",
        "package": "hashmap",
        "partial": "Hash Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashmap/docs/Data-HashSet.html#t:HashSet",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003eHashSet\u003c/code\u003e is a type synonym for \u003ccode\u003eSet\u003c/code\u003e for backward compatibility.\n It is deprecated and will be removed in furture releases.\n\u003c/p\u003e",
        "fct-module": "Data.HashSet",
        "fct-package": "hashmap",
        "fct-signature": "type",
        "fct-source": "src/Data-HashSet.html#HashSet",
        "fct-type": "type",
        "title": "HashSet"
      },
      "index": {
        "description": "The HashSet is type synonym for Set for backward compatibility It is deprecated and will be removed in furture releases",
        "hierarchy": "Data HashSet",
        "module": "Data.HashSet",
        "name": "HashSet",
        "normalized": "",
        "package": "hashmap",
        "partial": "Hash Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashmap/docs/Data-HashSet.html#t:Set",
      "description": {
        "fct-descr": "\u003cp\u003eThe abstract type of a \u003ccode\u003eSet\u003c/code\u003e. Its interface is a suitable\n subset of \u003ccode\u003e\u003ca\u003eIntSet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.HashSet",
        "fct-package": "hashmap",
        "fct-signature": "data",
        "fct-source": "src/Data-HashSet.html#Set",
        "fct-type": "data",
        "title": "Set"
      },
      "index": {
        "description": "The abstract type of Set Its interface is suitable subset of IntSet",
        "hierarchy": "Data HashSet",
        "module": "Data.HashSet",
        "name": "Set",
        "normalized": "",
        "package": "hashmap",
        "partial": "Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashmap/docs/Data-HashSet.html#v:-92--92-",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003edifference\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.HashSet",
        "fct-package": "hashmap",
        "fct-signature": "Set a -\u003e Set a -\u003e Set a",
        "fct-source": "src/Data-HashSet.html#%5C%5C",
        "fct-type": "function",
        "title": "(\\\\)"
      },
      "index": {
        "description": "Same as difference",
        "hierarchy": "Data HashSet",
        "module": "Data.HashSet",
        "name": "(\\\\) \\\\",
        "normalized": "Set a-\u003eSet a-\u003eSet a",
        "package": "hashmap",
        "partial": "",
        "signature": "Set a-\u003eSet a-\u003eSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashmap/docs/Data-HashSet.html#v:delete",
      "description": {
        "fct-descr": "\u003cp\u003eDelete a value in the set. Returns the original set when the value was not\n present.\n\u003c/p\u003e",
        "fct-module": "Data.HashSet",
        "fct-package": "hashmap",
        "fct-signature": "a -\u003e Set a -\u003e Set a",
        "fct-source": "src/Data-HashSet.html#delete",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "Delete value in the set Returns the original set when the value was not present",
        "hierarchy": "Data HashSet",
        "module": "Data.HashSet",
        "name": "delete",
        "normalized": "a-\u003eSet a-\u003eSet a",
        "package": "hashmap",
        "partial": "",
        "signature": "a-\u003eSet a-\u003eSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashmap/docs/Data-HashSet.html#v:difference",
      "description": {
        "fct-descr": "\u003cp\u003eDifference between two sets.\n\u003c/p\u003e",
        "fct-module": "Data.HashSet",
        "fct-package": "hashmap",
        "fct-signature": "Set a -\u003e Set a -\u003e Set a",
        "fct-source": "src/Data-HashSet.html#difference",
        "fct-type": "function",
        "title": "difference"
      },
      "index": {
        "description": "Difference between two sets",
        "hierarchy": "Data HashSet",
        "module": "Data.HashSet",
        "name": "difference",
        "normalized": "Set a-\u003eSet a-\u003eSet a",
        "package": "hashmap",
        "partial": "",
        "signature": "Set a-\u003eSet a-\u003eSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashmap/docs/Data-HashSet.html#v:elems",
      "description": {
        "fct-descr": "\u003cp\u003eThe elements of a set. (For sets, this is equivalent to toList).\n\u003c/p\u003e",
        "fct-module": "Data.HashSet",
        "fct-package": "hashmap",
        "fct-signature": "Set a -\u003e [a]",
        "fct-source": "src/Data-HashSet.html#elems",
        "fct-type": "function",
        "title": "elems"
      },
      "index": {
        "description": "The elements of set For sets this is equivalent to toList",
        "hierarchy": "Data HashSet",
        "module": "Data.HashSet",
        "name": "elems",
        "normalized": "Set a-\u003e[a]",
        "package": "hashmap",
        "partial": "",
        "signature": "Set a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashmap/docs/Data-HashSet.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003eThe empty set.\n\u003c/p\u003e",
        "fct-module": "Data.HashSet",
        "fct-package": "hashmap",
        "fct-signature": "Set a",
        "fct-source": "src/Data-HashSet.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "The empty set",
        "hierarchy": "Data HashSet",
        "module": "Data.HashSet",
        "name": "empty",
        "normalized": "",
        "package": "hashmap",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashmap/docs/Data-HashSet.html#v:filter",
      "description": {
        "fct-descr": "\u003cp\u003eFilter all elements that satisfy some predicate.\n\u003c/p\u003e",
        "fct-module": "Data.HashSet",
        "fct-package": "hashmap",
        "fct-signature": "(a -\u003e Bool) -\u003e Set a -\u003e Set a",
        "fct-source": "src/Data-HashSet.html#filter",
        "fct-type": "function",
        "title": "filter"
      },
      "index": {
        "description": "Filter all elements that satisfy some predicate",
        "hierarchy": "Data HashSet",
        "module": "Data.HashSet",
        "name": "filter",
        "normalized": "(a-\u003eBool)-\u003eSet a-\u003eSet a",
        "package": "hashmap",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eSet a-\u003eSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashmap/docs/Data-HashSet.html#v:fold",
      "description": {
        "fct-descr": "\u003cp\u003eFold over the elements of a set in an unspecified order.\n\u003c/p\u003e",
        "fct-module": "Data.HashSet",
        "fct-package": "hashmap",
        "fct-signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e Set a -\u003e b",
        "fct-source": "src/Data-HashSet.html#fold",
        "fct-type": "function",
        "title": "fold"
      },
      "index": {
        "description": "Fold over the elements of set in an unspecified order",
        "hierarchy": "Data HashSet",
        "module": "Data.HashSet",
        "name": "fold",
        "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eSet a-\u003eb",
        "package": "hashmap",
        "partial": "",
        "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eSet a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashmap/docs/Data-HashSet.html#v:fromList",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a set from a list of elements.\n\u003c/p\u003e",
        "fct-module": "Data.HashSet",
        "fct-package": "hashmap",
        "fct-signature": "[a] -\u003e Set a",
        "fct-source": "src/Data-HashSet.html#fromList",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "Create set from list of elements",
        "hierarchy": "Data HashSet",
        "module": "Data.HashSet",
        "name": "fromList",
        "normalized": "[a]-\u003eSet a",
        "package": "hashmap",
        "partial": "List",
        "signature": "[a]-\u003eSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashmap/docs/Data-HashSet.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a value to the set. When the value is already an element of the set,\n it is replaced by the new one, ie. \u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e is left-biased.\n\u003c/p\u003e",
        "fct-module": "Data.HashSet",
        "fct-package": "hashmap",
        "fct-signature": "a -\u003e Set a -\u003e Set a",
        "fct-source": "src/Data-HashSet.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "Add value to the set When the value is already an element of the set it is replaced by the new one ie insert is left-biased",
        "hierarchy": "Data HashSet",
        "module": "Data.HashSet",
        "name": "insert",
        "normalized": "a-\u003eSet a-\u003eSet a",
        "package": "hashmap",
        "partial": "",
        "signature": "a-\u003eSet a-\u003eSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashmap/docs/Data-HashSet.html#v:intersection",
      "description": {
        "fct-descr": "\u003cp\u003eThe intersection of two sets.\n\u003c/p\u003e",
        "fct-module": "Data.HashSet",
        "fct-package": "hashmap",
        "fct-signature": "Set a -\u003e Set a -\u003e Set a",
        "fct-source": "src/Data-HashSet.html#intersection",
        "fct-type": "function",
        "title": "intersection"
      },
      "index": {
        "description": "The intersection of two sets",
        "hierarchy": "Data HashSet",
        "module": "Data.HashSet",
        "name": "intersection",
        "normalized": "Set a-\u003eSet a-\u003eSet a",
        "package": "hashmap",
        "partial": "",
        "signature": "Set a-\u003eSet a-\u003eSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashmap/docs/Data-HashSet.html#v:isProperSubsetOf",
      "description": {
        "fct-descr": "\u003cp\u003eIs this a proper subset? (ie. a subset but not equal).\n\u003c/p\u003e",
        "fct-module": "Data.HashSet",
        "fct-package": "hashmap",
        "fct-signature": "Set a -\u003e Set a -\u003e Bool",
        "fct-source": "src/Data-HashSet.html#isProperSubsetOf",
        "fct-type": "function",
        "title": "isProperSubsetOf"
      },
      "index": {
        "description": "Is this proper subset ie subset but not equal",
        "hierarchy": "Data HashSet",
        "module": "Data.HashSet",
        "name": "isProperSubsetOf",
        "normalized": "Set a-\u003eSet a-\u003eBool",
        "package": "hashmap",
        "partial": "Proper Subset Of",
        "signature": "Set a-\u003eSet a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashmap/docs/Data-HashSet.html#v:isSubsetOf",
      "description": {
        "fct-descr": "\u003cp\u003eIs this a subset?\n\u003c/p\u003e",
        "fct-module": "Data.HashSet",
        "fct-package": "hashmap",
        "fct-signature": "Set a -\u003e Set a -\u003e Bool",
        "fct-source": "src/Data-HashSet.html#isSubsetOf",
        "fct-type": "function",
        "title": "isSubsetOf"
      },
      "index": {
        "description": "Is this subset",
        "hierarchy": "Data HashSet",
        "module": "Data.HashSet",
        "name": "isSubsetOf",
        "normalized": "Set a-\u003eSet a-\u003eBool",
        "package": "hashmap",
        "partial": "Subset Of",
        "signature": "Set a-\u003eSet a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashmap/docs/Data-HashSet.html#v:map",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e f s\u003c/code\u003e is the set obtained by applying \u003ccode\u003ef\u003c/code\u003e to each element of \u003ccode\u003es\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIt's worth noting that the size of the result may be smaller if, for some\n \u003ccode\u003e(x,y)\u003c/code\u003e, \u003ccode\u003ex /= y && f x == f y\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.HashSet",
        "fct-package": "hashmap",
        "fct-signature": "(a -\u003e b) -\u003e Set a -\u003e Set b",
        "fct-source": "src/Data-HashSet.html#map",
        "fct-type": "function",
        "title": "map"
      },
      "index": {
        "description": "map is the set obtained by applying to each element of It worth noting that the size of the result may be smaller if for some",
        "hierarchy": "Data HashSet",
        "module": "Data.HashSet",
        "name": "map",
        "normalized": "(a-\u003eb)-\u003eSet a-\u003eSet b",
        "package": "hashmap",
        "partial": "",
        "signature": "(a-\u003eb)-\u003eSet a-\u003eSet b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashmap/docs/Data-HashSet.html#v:member",
      "description": {
        "fct-descr": "\u003cp\u003eIs the element a member of the set?\n\u003c/p\u003e",
        "fct-module": "Data.HashSet",
        "fct-package": "hashmap",
        "fct-signature": "a -\u003e Set a -\u003e Bool",
        "fct-source": "src/Data-HashSet.html#member",
        "fct-type": "function",
        "title": "member"
      },
      "index": {
        "description": "Is the element member of the set",
        "hierarchy": "Data HashSet",
        "module": "Data.HashSet",
        "name": "member",
        "normalized": "a-\u003eSet a-\u003eBool",
        "package": "hashmap",
        "partial": "",
        "signature": "a-\u003eSet a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashmap/docs/Data-HashSet.html#v:notMember",
      "description": {
        "fct-descr": "\u003cp\u003eIs the element not a member of the set?\n\u003c/p\u003e",
        "fct-module": "Data.HashSet",
        "fct-package": "hashmap",
        "fct-signature": "a -\u003e Set a -\u003e Bool",
        "fct-source": "src/Data-HashSet.html#notMember",
        "fct-type": "function",
        "title": "notMember"
      },
      "index": {
        "description": "Is the element not member of the set",
        "hierarchy": "Data HashSet",
        "module": "Data.HashSet",
        "name": "notMember",
        "normalized": "a-\u003eSet a-\u003eBool",
        "package": "hashmap",
        "partial": "Member",
        "signature": "a-\u003eSet a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashmap/docs/Data-HashSet.html#v:null",
      "description": {
        "fct-descr": "\u003cp\u003eIs the set empty?\n\u003c/p\u003e",
        "fct-module": "Data.HashSet",
        "fct-package": "hashmap",
        "fct-signature": "Set a -\u003e Bool",
        "fct-source": "src/Data-HashSet.html#null",
        "fct-type": "function",
        "title": "null"
      },
      "index": {
        "description": "Is the set empty",
        "hierarchy": "Data HashSet",
        "module": "Data.HashSet",
        "name": "null",
        "normalized": "Set a-\u003eBool",
        "package": "hashmap",
        "partial": "",
        "signature": "Set a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashmap/docs/Data-HashSet.html#v:partition",
      "description": {
        "fct-descr": "\u003cp\u003ePartition the set according to some predicate. The first set contains all\n elements that satisfy the predicate, the second all elements that fail the\n predicate.\n\u003c/p\u003e",
        "fct-module": "Data.HashSet",
        "fct-package": "hashmap",
        "fct-signature": "(a -\u003e Bool) -\u003e Set a -\u003e (Set a, Set a)",
        "fct-source": "src/Data-HashSet.html#partition",
        "fct-type": "function",
        "title": "partition"
      },
      "index": {
        "description": "Partition the set according to some predicate The first set contains all elements that satisfy the predicate the second all elements that fail the predicate",
        "hierarchy": "Data HashSet",
        "module": "Data.HashSet",
        "name": "partition",
        "normalized": "(a-\u003eBool)-\u003eSet a-\u003e(Set a,Set a)",
        "package": "hashmap",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eSet a-\u003e(Set a,Set a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashmap/docs/Data-HashSet.html#v:singleton",
      "description": {
        "fct-descr": "\u003cp\u003eA set of one element.\n\u003c/p\u003e",
        "fct-module": "Data.HashSet",
        "fct-package": "hashmap",
        "fct-signature": "a -\u003e Set a",
        "fct-source": "src/Data-HashSet.html#singleton",
        "fct-type": "function",
        "title": "singleton"
      },
      "index": {
        "description": "set of one element",
        "hierarchy": "Data HashSet",
        "module": "Data.HashSet",
        "name": "singleton",
        "normalized": "a-\u003eSet a",
        "package": "hashmap",
        "partial": "",
        "signature": "a-\u003eSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashmap/docs/Data-HashSet.html#v:size",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of elements in the set.\n\u003c/p\u003e",
        "fct-module": "Data.HashSet",
        "fct-package": "hashmap",
        "fct-signature": "Set a -\u003e Int",
        "fct-source": "src/Data-HashSet.html#size",
        "fct-type": "function",
        "title": "size"
      },
      "index": {
        "description": "Number of elements in the set",
        "hierarchy": "Data HashSet",
        "module": "Data.HashSet",
        "name": "size",
        "normalized": "Set a-\u003eInt",
        "package": "hashmap",
        "partial": "",
        "signature": "Set a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashmap/docs/Data-HashSet.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003eConvert the set to a list of elements.\n\u003c/p\u003e",
        "fct-module": "Data.HashSet",
        "fct-package": "hashmap",
        "fct-signature": "Set a -\u003e [a]",
        "fct-source": "src/Data-HashSet.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "Convert the set to list of elements",
        "hierarchy": "Data HashSet",
        "module": "Data.HashSet",
        "name": "toList",
        "normalized": "Set a-\u003e[a]",
        "package": "hashmap",
        "partial": "List",
        "signature": "Set a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashmap/docs/Data-HashSet.html#v:union",
      "description": {
        "fct-descr": "\u003cp\u003eThe union of two sets.\n\u003c/p\u003e",
        "fct-module": "Data.HashSet",
        "fct-package": "hashmap",
        "fct-signature": "Set a -\u003e Set a -\u003e Set a",
        "fct-source": "src/Data-HashSet.html#union",
        "fct-type": "function",
        "title": "union"
      },
      "index": {
        "description": "The union of two sets",
        "hierarchy": "Data HashSet",
        "module": "Data.HashSet",
        "name": "union",
        "normalized": "Set a-\u003eSet a-\u003eSet a",
        "package": "hashmap",
        "partial": "",
        "signature": "Set a-\u003eSet a-\u003eSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashmap/docs/Data-HashSet.html#v:unions",
      "description": {
        "fct-descr": "\u003cp\u003eThe union of a list of sets.\n\u003c/p\u003e",
        "fct-module": "Data.HashSet",
        "fct-package": "hashmap",
        "fct-signature": "[Set a] -\u003e Set a",
        "fct-source": "src/Data-HashSet.html#unions",
        "fct-type": "function",
        "title": "unions"
      },
      "index": {
        "description": "The union of list of sets",
        "hierarchy": "Data HashSet",
        "module": "Data.HashSet",
        "name": "unions",
        "normalized": "[Set a]-\u003eSet a",
        "package": "hashmap",
        "partial": "",
        "signature": "[Set a]-\u003eSet a"
      }
    }
  }
]