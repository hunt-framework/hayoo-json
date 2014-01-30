[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA map from \u003cem\u003ehashable\u003c/em\u003e keys to values.  A map cannot contain\n duplicate keys; each key can map to at most one value.  A \u003ccode\u003e\u003ca\u003eHashMap\u003c/a\u003e\u003c/code\u003e\n makes no guarantees as to the order of its elements.\n\u003c/p\u003e\u003cp\u003eThe implementation is based on \u003cem\u003ehash array mapped tries\u003c/em\u003e.  A\n \u003ccode\u003e\u003ca\u003eHashMap\u003c/a\u003e\u003c/code\u003e is often faster than other tree-based set types,\n especially when key comparison is expensive, as in the case of\n strings.\n\u003c/p\u003e\u003cp\u003eMany operations have a average-case complexity of \u003cem\u003eO(log n)\u003c/em\u003e.  The\n implementation uses a large base (i.e. 16) so in practice these\n operations are constant time.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.HashMap.Lazy",
        "fct-package": "unordered-containers",
        "fct-signature": "module",
        "fct-source": "src/Data-HashMap-Lazy.html",
        "fct-type": "module",
        "title": "Lazy"
      },
      "index": {
        "description": "map from hashable keys to values map cannot contain duplicate keys each key can map to at most one value HashMap makes no guarantees as to the order of its elements The implementation is based on hash array mapped tries HashMap is often faster than other tree-based set types especially when key comparison is expensive as in the case of strings Many operations have average-case complexity of log The implementation uses large base i.e so in practice these operations are constant time",
        "hierarchy": "Data HashMap Lazy",
        "module": "Data.HashMap.Lazy",
        "name": "Lazy",
        "normalized": "",
        "package": "unordered-containers",
        "partial": "Lazy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#t:HashMap",
      "description": {
        "fct-descr": "\u003cp\u003eA map from keys to values.  A map cannot contain duplicate keys;\n each key can map to at most one value.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap.Lazy",
        "fct-package": "unordered-containers",
        "fct-signature": "data",
        "fct-source": "src/Data-HashMap-Base.html#HashMap",
        "fct-type": "data",
        "title": "HashMap"
      },
      "index": {
        "description": "map from keys to values map cannot contain duplicate keys each key can map to at most one value",
        "hierarchy": "Data HashMap Lazy",
        "module": "Data.HashMap.Lazy",
        "name": "HashMap",
        "normalized": "",
        "package": "unordered-containers",
        "partial": "Hash Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#v:-33-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e Return the value to which the specified key is mapped.\n Calls \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e if this map contains no mapping for the key.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap.Lazy",
        "fct-package": "unordered-containers",
        "fct-signature": "HashMap k v -\u003e k -\u003e v",
        "fct-source": "src/Data-HashMap-Base.html#%21",
        "fct-type": "function",
        "title": "(!)"
      },
      "index": {
        "description": "log Return the value to which the specified key is mapped Calls error if this map contains no mapping for the key",
        "hierarchy": "Data HashMap Lazy",
        "module": "Data.HashMap.Lazy",
        "name": "(!) !",
        "normalized": "HashMap a b-\u003ea-\u003eb",
        "package": "unordered-containers",
        "partial": "",
        "signature": "HashMap k v-\u003ek-\u003ev"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#v:adjust",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e Adjust the value tied to a given key in this map only\n if it is present. Otherwise, leave the map alone.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap.Lazy",
        "fct-package": "unordered-containers",
        "fct-signature": "(v -\u003e v) -\u003e k -\u003e HashMap k v -\u003e HashMap k v",
        "fct-source": "src/Data-HashMap-Base.html#adjust",
        "fct-type": "function",
        "title": "adjust"
      },
      "index": {
        "description": "log Adjust the value tied to given key in this map only if it is present Otherwise leave the map alone",
        "hierarchy": "Data HashMap Lazy",
        "module": "Data.HashMap.Lazy",
        "name": "adjust",
        "normalized": "(a-\u003ea)-\u003eb-\u003eHashMap b a-\u003eHashMap b a",
        "package": "unordered-containers",
        "partial": "",
        "signature": "(v-\u003ev)-\u003ek-\u003eHashMap k v-\u003eHashMap k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#v:delete",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e Remove the mapping for the specified key from this map\n if present.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap.Lazy",
        "fct-package": "unordered-containers",
        "fct-signature": "k -\u003e HashMap k v -\u003e HashMap k v",
        "fct-source": "src/Data-HashMap-Base.html#delete",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "log Remove the mapping for the specified key from this map if present",
        "hierarchy": "Data HashMap Lazy",
        "module": "Data.HashMap.Lazy",
        "name": "delete",
        "normalized": "a-\u003eHashMap a b-\u003eHashMap a b",
        "package": "unordered-containers",
        "partial": "",
        "signature": "k-\u003eHashMap k v-\u003eHashMap k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#v:difference",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n*log m)\u003c/em\u003e Difference of two maps. Return elements of the first map\n not existing in the second.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap.Lazy",
        "fct-package": "unordered-containers",
        "fct-signature": "HashMap k v -\u003e HashMap k w -\u003e HashMap k v",
        "fct-source": "src/Data-HashMap-Base.html#difference",
        "fct-type": "function",
        "title": "difference"
      },
      "index": {
        "description": "log Difference of two maps Return elements of the first map not existing in the second",
        "hierarchy": "Data HashMap Lazy",
        "module": "Data.HashMap.Lazy",
        "name": "difference",
        "normalized": "HashMap a b-\u003eHashMap a c-\u003eHashMap a b",
        "package": "unordered-containers",
        "partial": "",
        "signature": "HashMap k v-\u003eHashMap k w-\u003eHashMap k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#v:elems",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Return a list of this map's values.  The list is produced\n lazily.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap.Lazy",
        "fct-package": "unordered-containers",
        "fct-signature": "HashMap k v -\u003e [v]",
        "fct-source": "src/Data-HashMap-Base.html#elems",
        "fct-type": "function",
        "title": "elems"
      },
      "index": {
        "description": "Return list of this map values The list is produced lazily",
        "hierarchy": "Data HashMap Lazy",
        "module": "Data.HashMap.Lazy",
        "name": "elems",
        "normalized": "HashMap a b-\u003e[b]",
        "package": "unordered-containers",
        "partial": "",
        "signature": "HashMap k v-\u003e[v]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Construct an empty map.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap.Lazy",
        "fct-package": "unordered-containers",
        "fct-signature": "HashMap k v",
        "fct-source": "src/Data-HashMap-Base.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "Construct an empty map",
        "hierarchy": "Data HashMap Lazy",
        "module": "Data.HashMap.Lazy",
        "name": "empty",
        "normalized": "",
        "package": "unordered-containers",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#v:filter",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Filter this map by retaining only elements which values\n satisfy a predicate.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap.Lazy",
        "fct-package": "unordered-containers",
        "fct-signature": "(v -\u003e Bool) -\u003e HashMap k v -\u003e HashMap k v",
        "fct-source": "src/Data-HashMap-Base.html#filter",
        "fct-type": "function",
        "title": "filter"
      },
      "index": {
        "description": "Filter this map by retaining only elements which values satisfy predicate",
        "hierarchy": "Data HashMap Lazy",
        "module": "Data.HashMap.Lazy",
        "name": "filter",
        "normalized": "(a-\u003eBool)-\u003eHashMap b a-\u003eHashMap b a",
        "package": "unordered-containers",
        "partial": "",
        "signature": "(v-\u003eBool)-\u003eHashMap k v-\u003eHashMap k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#v:filterWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Filter this map by retaining only elements satisfying a\n predicate.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap.Lazy",
        "fct-package": "unordered-containers",
        "fct-signature": "(k -\u003e v -\u003e Bool) -\u003e HashMap k v -\u003e HashMap k v",
        "fct-source": "src/Data-HashMap-Base.html#filterWithKey",
        "fct-type": "function",
        "title": "filterWithKey"
      },
      "index": {
        "description": "Filter this map by retaining only elements satisfying predicate",
        "hierarchy": "Data HashMap Lazy",
        "module": "Data.HashMap.Lazy",
        "name": "filterWithKey",
        "normalized": "(a-\u003eb-\u003eBool)-\u003eHashMap a b-\u003eHashMap a b",
        "package": "unordered-containers",
        "partial": "With Key",
        "signature": "(k-\u003ev-\u003eBool)-\u003eHashMap k v-\u003eHashMap k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#v:foldl-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Reduce this map by applying a binary operator to all\n elements, using the given starting value (typically the\n left-identity of the operator).  Each application of the operator\n is evaluated before before using the result in the next\n application.  This function is strict in the starting value.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap.Lazy",
        "fct-package": "unordered-containers",
        "fct-signature": "(a -\u003e v -\u003e a) -\u003e a -\u003e HashMap k v -\u003e a",
        "fct-source": "src/Data-HashMap-Base.html#foldl%27",
        "fct-type": "function",
        "title": "foldl'"
      },
      "index": {
        "description": "Reduce this map by applying binary operator to all elements using the given starting value typically the left-identity of the operator Each application of the operator is evaluated before before using the result in the next application This function is strict in the starting value",
        "hierarchy": "Data HashMap Lazy",
        "module": "Data.HashMap.Lazy",
        "name": "foldl'",
        "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eHashMap c b-\u003ea",
        "package": "unordered-containers",
        "partial": "",
        "signature": "(a-\u003ev-\u003ea)-\u003ea-\u003eHashMap k v-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#v:foldlWithKey-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Reduce this map by applying a binary operator to all\n elements, using the given starting value (typically the\n left-identity of the operator).  Each application of the operator\n is evaluated before before using the result in the next\n application.  This function is strict in the starting value.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap.Lazy",
        "fct-package": "unordered-containers",
        "fct-signature": "(a -\u003e k -\u003e v -\u003e a) -\u003e a -\u003e HashMap k v -\u003e a",
        "fct-source": "src/Data-HashMap-Base.html#foldlWithKey%27",
        "fct-type": "function",
        "title": "foldlWithKey'"
      },
      "index": {
        "description": "Reduce this map by applying binary operator to all elements using the given starting value typically the left-identity of the operator Each application of the operator is evaluated before before using the result in the next application This function is strict in the starting value",
        "hierarchy": "Data HashMap Lazy",
        "module": "Data.HashMap.Lazy",
        "name": "foldlWithKey'",
        "normalized": "(a-\u003eb-\u003ec-\u003ea)-\u003ea-\u003eHashMap b c-\u003ea",
        "package": "unordered-containers",
        "partial": "With Key'",
        "signature": "(a-\u003ek-\u003ev-\u003ea)-\u003ea-\u003eHashMap k v-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#v:foldr",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Reduce this map by applying a binary operator to all\n elements, using the given starting value (typically the\n right-identity of the operator).\n\u003c/p\u003e",
        "fct-module": "Data.HashMap.Lazy",
        "fct-package": "unordered-containers",
        "fct-signature": "(v -\u003e a -\u003e a) -\u003e a -\u003e HashMap k v -\u003e a",
        "fct-source": "src/Data-HashMap-Base.html#foldr",
        "fct-type": "function",
        "title": "foldr"
      },
      "index": {
        "description": "Reduce this map by applying binary operator to all elements using the given starting value typically the right-identity of the operator",
        "hierarchy": "Data HashMap Lazy",
        "module": "Data.HashMap.Lazy",
        "name": "foldr",
        "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eHashMap c a-\u003eb",
        "package": "unordered-containers",
        "partial": "",
        "signature": "(v-\u003ea-\u003ea)-\u003ea-\u003eHashMap k v-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#v:foldrWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Reduce this map by applying a binary operator to all\n elements, using the given starting value (typically the\n right-identity of the operator).\n\u003c/p\u003e",
        "fct-module": "Data.HashMap.Lazy",
        "fct-package": "unordered-containers",
        "fct-signature": "(k -\u003e v -\u003e a -\u003e a) -\u003e a -\u003e HashMap k v -\u003e a",
        "fct-source": "src/Data-HashMap-Base.html#foldrWithKey",
        "fct-type": "function",
        "title": "foldrWithKey"
      },
      "index": {
        "description": "Reduce this map by applying binary operator to all elements using the given starting value typically the right-identity of the operator",
        "hierarchy": "Data HashMap Lazy",
        "module": "Data.HashMap.Lazy",
        "name": "foldrWithKey",
        "normalized": "(a-\u003eb-\u003ec-\u003ec)-\u003ec-\u003eHashMap a b-\u003ec",
        "package": "unordered-containers",
        "partial": "With Key",
        "signature": "(k-\u003ev-\u003ea-\u003ea)-\u003ea-\u003eHashMap k v-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#v:fromList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Construct a map with the supplied mappings.  If the list\n contains duplicate mappings, the later mappings take precedence.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap.Lazy",
        "fct-package": "unordered-containers",
        "fct-signature": "[(k, v)] -\u003e HashMap k v",
        "fct-source": "src/Data-HashMap-Base.html#fromList",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "Construct map with the supplied mappings If the list contains duplicate mappings the later mappings take precedence",
        "hierarchy": "Data HashMap Lazy",
        "module": "Data.HashMap.Lazy",
        "name": "fromList",
        "normalized": "[(a,b)]-\u003eHashMap a b",
        "package": "unordered-containers",
        "partial": "List",
        "signature": "[(k,v)]-\u003eHashMap k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#v:fromListWith",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n*log n)\u003c/em\u003e Construct a map from a list of elements.  Uses\n the provided function to merge duplicate entries.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap.Lazy",
        "fct-package": "unordered-containers",
        "fct-signature": "(v -\u003e v -\u003e v) -\u003e [(k, v)] -\u003e HashMap k v",
        "fct-source": "src/Data-HashMap-Base.html#fromListWith",
        "fct-type": "function",
        "title": "fromListWith"
      },
      "index": {
        "description": "log Construct map from list of elements Uses the provided function to merge duplicate entries",
        "hierarchy": "Data HashMap Lazy",
        "module": "Data.HashMap.Lazy",
        "name": "fromListWith",
        "normalized": "(a-\u003ea-\u003ea)-\u003e[(b,a)]-\u003eHashMap b a",
        "package": "unordered-containers",
        "partial": "List With",
        "signature": "(v-\u003ev-\u003ev)-\u003e[(k,v)]-\u003eHashMap k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e Associate the specified value with the specified\n key in this map.  If this map previously contained a mapping for\n the key, the old value is replaced.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap.Lazy",
        "fct-package": "unordered-containers",
        "fct-signature": "k -\u003e v -\u003e HashMap k v -\u003e HashMap k v",
        "fct-source": "src/Data-HashMap-Base.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "log Associate the specified value with the specified key in this map If this map previously contained mapping for the key the old value is replaced",
        "hierarchy": "Data HashMap Lazy",
        "module": "Data.HashMap.Lazy",
        "name": "insert",
        "normalized": "a-\u003eb-\u003eHashMap a b-\u003eHashMap a b",
        "package": "unordered-containers",
        "partial": "",
        "signature": "k-\u003ev-\u003eHashMap k v-\u003eHashMap k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#v:insertWith",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e Associate the value with the key in this map.  If\n this map previously contained a mapping for the key, the old value\n is replaced by the result of applying the given function to the new\n and old value.  Example:\n\u003c/p\u003e\u003cpre\u003e insertWith f k v map\n   where f new old = new + old\n\u003c/pre\u003e",
        "fct-module": "Data.HashMap.Lazy",
        "fct-package": "unordered-containers",
        "fct-signature": "(v -\u003e v -\u003e v) -\u003e k -\u003e v -\u003e HashMap k v -\u003e HashMap k v",
        "fct-source": "src/Data-HashMap-Base.html#insertWith",
        "fct-type": "function",
        "title": "insertWith"
      },
      "index": {
        "description": "log Associate the value with the key in this map If this map previously contained mapping for the key the old value is replaced by the result of applying the given function to the new and old value Example insertWith map where new old new old",
        "hierarchy": "Data HashMap Lazy",
        "module": "Data.HashMap.Lazy",
        "name": "insertWith",
        "normalized": "(a-\u003ea-\u003ea)-\u003eb-\u003ea-\u003eHashMap b a-\u003eHashMap b a",
        "package": "unordered-containers",
        "partial": "With",
        "signature": "(v-\u003ev-\u003ev)-\u003ek-\u003ev-\u003eHashMap k v-\u003eHashMap k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#v:intersection",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n*log m)\u003c/em\u003e Intersection of two maps. Return elements of the first\n map for keys existing in the second.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap.Lazy",
        "fct-package": "unordered-containers",
        "fct-signature": "HashMap k v -\u003e HashMap k w -\u003e HashMap k v",
        "fct-source": "src/Data-HashMap-Base.html#intersection",
        "fct-type": "function",
        "title": "intersection"
      },
      "index": {
        "description": "log Intersection of two maps Return elements of the first map for keys existing in the second",
        "hierarchy": "Data HashMap Lazy",
        "module": "Data.HashMap.Lazy",
        "name": "intersection",
        "normalized": "HashMap a b-\u003eHashMap a c-\u003eHashMap a b",
        "package": "unordered-containers",
        "partial": "",
        "signature": "HashMap k v-\u003eHashMap k w-\u003eHashMap k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#v:intersectionWith",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e Intersection of two maps. If a key occurs in both maps\n the provided function is used to combine the values from the two\n maps.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap.Lazy",
        "fct-package": "unordered-containers",
        "fct-signature": "(v1 -\u003e v2 -\u003e v3) -\u003e HashMap k v1 -\u003e HashMap k v2 -\u003e HashMap k v3",
        "fct-source": "src/Data-HashMap-Base.html#intersectionWith",
        "fct-type": "function",
        "title": "intersectionWith"
      },
      "index": {
        "description": "Intersection of two maps If key occurs in both maps the provided function is used to combine the values from the two maps",
        "hierarchy": "Data HashMap Lazy",
        "module": "Data.HashMap.Lazy",
        "name": "intersectionWith",
        "normalized": "(a-\u003ea-\u003ea)-\u003eHashMap b a-\u003eHashMap b a-\u003eHashMap b a",
        "package": "unordered-containers",
        "partial": "With",
        "signature": "(v-\u003ev-\u003ev)-\u003eHashMap k v-\u003eHashMap k v-\u003eHashMap k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#v:keys",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Return a list of this map's keys.  The list is produced\n lazily.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap.Lazy",
        "fct-package": "unordered-containers",
        "fct-signature": "HashMap k v -\u003e [k]",
        "fct-source": "src/Data-HashMap-Base.html#keys",
        "fct-type": "function",
        "title": "keys"
      },
      "index": {
        "description": "Return list of this map keys The list is produced lazily",
        "hierarchy": "Data HashMap Lazy",
        "module": "Data.HashMap.Lazy",
        "name": "keys",
        "normalized": "HashMap a b-\u003e[a]",
        "package": "unordered-containers",
        "partial": "",
        "signature": "HashMap k v-\u003e[k]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#v:lookup",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e Return the value to which the specified key is mapped,\n or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if this map contains no mapping for the key.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap.Lazy",
        "fct-package": "unordered-containers",
        "fct-signature": "k -\u003e HashMap k v -\u003e Maybe v",
        "fct-source": "src/Data-HashMap-Base.html#lookup",
        "fct-type": "function",
        "title": "lookup"
      },
      "index": {
        "description": "log Return the value to which the specified key is mapped or Nothing if this map contains no mapping for the key",
        "hierarchy": "Data HashMap Lazy",
        "module": "Data.HashMap.Lazy",
        "name": "lookup",
        "normalized": "a-\u003eHashMap a b-\u003eMaybe b",
        "package": "unordered-containers",
        "partial": "",
        "signature": "k-\u003eHashMap k v-\u003eMaybe v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#v:lookupDefault",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e Return the value to which the specified key is mapped,\n or the default value if this map contains no mapping for the key.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap.Lazy",
        "fct-package": "unordered-containers",
        "fct-signature": "v-\u003e k-\u003e HashMap k v-\u003e v",
        "fct-type": "function",
        "title": "lookupDefault"
      },
      "index": {
        "description": "log Return the value to which the specified key is mapped or the default value if this map contains no mapping for the key",
        "hierarchy": "Data HashMap Lazy",
        "module": "Data.HashMap.Lazy",
        "name": "lookupDefault",
        "normalized": "a-\u003eb-\u003eHashMap b a-\u003ea",
        "package": "unordered-containers",
        "partial": "Default",
        "signature": "v-\u003ek-\u003eHashMap k v-\u003ev"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#v:map",
      "description": {
        "fct-module": "Data.HashMap.Lazy",
        "fct-package": "unordered-containers",
        "fct-signature": "(v1 -\u003e v2) -\u003e HashMap k v1 -\u003e HashMap k v2",
        "fct-source": "src/Data-HashMap-Base.html#map",
        "fct-type": "function",
        "title": "map"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HashMap Lazy",
        "module": "Data.HashMap.Lazy",
        "name": "map",
        "normalized": "(a-\u003ea)-\u003eHashMap b a-\u003eHashMap b a",
        "package": "unordered-containers",
        "partial": "",
        "signature": "(v-\u003ev)-\u003eHashMap k v-\u003eHashMap k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#v:member",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e Return \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the specified key is present in the\n map, \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e otherwise.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap.Lazy",
        "fct-package": "unordered-containers",
        "fct-signature": "k -\u003e HashMap k a -\u003e Bool",
        "fct-source": "src/Data-HashMap-Base.html#member",
        "fct-type": "function",
        "title": "member"
      },
      "index": {
        "description": "log Return True if the specified key is present in the map False otherwise",
        "hierarchy": "Data HashMap Lazy",
        "module": "Data.HashMap.Lazy",
        "name": "member",
        "normalized": "a-\u003eHashMap a b-\u003eBool",
        "package": "unordered-containers",
        "partial": "",
        "signature": "k-\u003eHashMap k a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#v:null",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Return \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if this map is empty, \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e otherwise.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap.Lazy",
        "fct-package": "unordered-containers",
        "fct-signature": "HashMap k v -\u003e Bool",
        "fct-source": "src/Data-HashMap-Base.html#null",
        "fct-type": "function",
        "title": "null"
      },
      "index": {
        "description": "Return True if this map is empty False otherwise",
        "hierarchy": "Data HashMap Lazy",
        "module": "Data.HashMap.Lazy",
        "name": "null",
        "normalized": "HashMap a b-\u003eBool",
        "package": "unordered-containers",
        "partial": "",
        "signature": "HashMap k v-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#v:singleton",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Construct a map with a single element.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap.Lazy",
        "fct-package": "unordered-containers",
        "fct-signature": "k -\u003e v -\u003e HashMap k v",
        "fct-source": "src/Data-HashMap-Base.html#singleton",
        "fct-type": "function",
        "title": "singleton"
      },
      "index": {
        "description": "Construct map with single element",
        "hierarchy": "Data HashMap Lazy",
        "module": "Data.HashMap.Lazy",
        "name": "singleton",
        "normalized": "a-\u003eb-\u003eHashMap a b",
        "package": "unordered-containers",
        "partial": "",
        "signature": "k-\u003ev-\u003eHashMap k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#v:size",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Return the number of key-value mappings in this map.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap.Lazy",
        "fct-package": "unordered-containers",
        "fct-signature": "HashMap k v -\u003e Int",
        "fct-source": "src/Data-HashMap-Base.html#size",
        "fct-type": "function",
        "title": "size"
      },
      "index": {
        "description": "Return the number of key-value mappings in this map",
        "hierarchy": "Data HashMap Lazy",
        "module": "Data.HashMap.Lazy",
        "name": "size",
        "normalized": "HashMap a b-\u003eInt",
        "package": "unordered-containers",
        "partial": "",
        "signature": "HashMap k v-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Return a list of this map's elements.  The list is\n produced lazily.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap.Lazy",
        "fct-package": "unordered-containers",
        "fct-signature": "HashMap k v -\u003e [(k, v)]",
        "fct-source": "src/Data-HashMap-Base.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "Return list of this map elements The list is produced lazily",
        "hierarchy": "Data HashMap Lazy",
        "module": "Data.HashMap.Lazy",
        "name": "toList",
        "normalized": "HashMap a b-\u003e[(a,b)]",
        "package": "unordered-containers",
        "partial": "List",
        "signature": "HashMap k v-\u003e[(k,v)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#v:traverseWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Transform this map by accumulating an Applicative result\n from every value.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap.Lazy",
        "fct-package": "unordered-containers",
        "fct-signature": "(k -\u003e v1 -\u003e f v2) -\u003e HashMap k v1 -\u003e f (HashMap k v2)",
        "fct-source": "src/Data-HashMap-Base.html#traverseWithKey",
        "fct-type": "function",
        "title": "traverseWithKey"
      },
      "index": {
        "description": "Transform this map by accumulating an Applicative result from every value",
        "hierarchy": "Data HashMap Lazy",
        "module": "Data.HashMap.Lazy",
        "name": "traverseWithKey",
        "normalized": "(a-\u003eb-\u003ec b)-\u003eHashMap a b-\u003ec(HashMap a b)",
        "package": "unordered-containers",
        "partial": "With Key",
        "signature": "(k-\u003ev-\u003ef v)-\u003eHashMap k v-\u003ef(HashMap k v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#v:union",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e The union of two maps. If a key occurs in both maps, the\n mapping from the first will be the mapping in the result.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap.Lazy",
        "fct-package": "unordered-containers",
        "fct-signature": "HashMap k v -\u003e HashMap k v -\u003e HashMap k v",
        "fct-source": "src/Data-HashMap-Base.html#union",
        "fct-type": "function",
        "title": "union"
      },
      "index": {
        "description": "The union of two maps If key occurs in both maps the mapping from the first will be the mapping in the result",
        "hierarchy": "Data HashMap Lazy",
        "module": "Data.HashMap.Lazy",
        "name": "union",
        "normalized": "HashMap a b-\u003eHashMap a b-\u003eHashMap a b",
        "package": "unordered-containers",
        "partial": "",
        "signature": "HashMap k v-\u003eHashMap k v-\u003eHashMap k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#v:unionWith",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e The union of two maps.  If a key occurs in both maps,\n the provided function (first argument) will be used to compute the\n result.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap.Lazy",
        "fct-package": "unordered-containers",
        "fct-signature": "(v -\u003e v -\u003e v) -\u003e HashMap k v -\u003e HashMap k v -\u003e HashMap k v",
        "fct-source": "src/Data-HashMap-Base.html#unionWith",
        "fct-type": "function",
        "title": "unionWith"
      },
      "index": {
        "description": "The union of two maps If key occurs in both maps the provided function first argument will be used to compute the result",
        "hierarchy": "Data HashMap Lazy",
        "module": "Data.HashMap.Lazy",
        "name": "unionWith",
        "normalized": "(a-\u003ea-\u003ea)-\u003eHashMap b a-\u003eHashMap b a-\u003eHashMap b a",
        "package": "unordered-containers",
        "partial": "With",
        "signature": "(v-\u003ev-\u003ev)-\u003eHashMap k v-\u003eHashMap k v-\u003eHashMap k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#v:unions",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a set containing all elements from a list of sets.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap.Lazy",
        "fct-package": "unordered-containers",
        "fct-signature": "[HashMap k v] -\u003e HashMap k v",
        "fct-source": "src/Data-HashMap-Base.html#unions",
        "fct-type": "function",
        "title": "unions"
      },
      "index": {
        "description": "Construct set containing all elements from list of sets",
        "hierarchy": "Data HashMap Lazy",
        "module": "Data.HashMap.Lazy",
        "name": "unions",
        "normalized": "[HashMap a b]-\u003eHashMap a b",
        "package": "unordered-containers",
        "partial": "",
        "signature": "[HashMap k v]-\u003eHashMap k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Strict.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA map from \u003cem\u003ehashable\u003c/em\u003e keys to values.  A map cannot contain\n duplicate keys; each key can map to at most one value.  A \u003ccode\u003e\u003ca\u003eHashMap\u003c/a\u003e\u003c/code\u003e\n makes no guarantees as to the order of its elements.\n\u003c/p\u003e\u003cp\u003eThe implementation is based on \u003cem\u003ehash array mapped tries\u003c/em\u003e.  A\n \u003ccode\u003e\u003ca\u003eHashMap\u003c/a\u003e\u003c/code\u003e is often faster than other tree-based set types,\n especially when key comparison is expensive, as in the case of\n strings.\n\u003c/p\u003e\u003cp\u003eMany operations have a average-case complexity of \u003cem\u003eO(log n)\u003c/em\u003e.  The\n implementation uses a large base (i.e. 16) so in practice these\n operations are constant time.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.HashMap.Strict",
        "fct-package": "unordered-containers",
        "fct-signature": "module",
        "fct-source": "src/Data-HashMap-Strict.html",
        "fct-type": "module",
        "title": "Strict"
      },
      "index": {
        "description": "map from hashable keys to values map cannot contain duplicate keys each key can map to at most one value HashMap makes no guarantees as to the order of its elements The implementation is based on hash array mapped tries HashMap is often faster than other tree-based set types especially when key comparison is expensive as in the case of strings Many operations have average-case complexity of log The implementation uses large base i.e so in practice these operations are constant time",
        "hierarchy": "Data HashMap Strict",
        "module": "Data.HashMap.Strict",
        "name": "Strict",
        "normalized": "",
        "package": "unordered-containers",
        "partial": "Strict",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Strict.html#t:HashMap",
      "description": {
        "fct-descr": "\u003cp\u003eA map from keys to values.  A map cannot contain duplicate keys;\n each key can map to at most one value.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap.Strict",
        "fct-package": "unordered-containers",
        "fct-signature": "data",
        "fct-source": "src/Data-HashMap-Base.html#HashMap",
        "fct-type": "data",
        "title": "HashMap"
      },
      "index": {
        "description": "map from keys to values map cannot contain duplicate keys each key can map to at most one value",
        "hierarchy": "Data HashMap Strict",
        "module": "Data.HashMap.Strict",
        "name": "HashMap",
        "normalized": "",
        "package": "unordered-containers",
        "partial": "Hash Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Strict.html#v:-33-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e Return the value to which the specified key is mapped.\n Calls \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e if this map contains no mapping for the key.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap.Strict",
        "fct-package": "unordered-containers",
        "fct-signature": "HashMap k v -\u003e k -\u003e v",
        "fct-source": "src/Data-HashMap-Base.html#%21",
        "fct-type": "function",
        "title": "(!)"
      },
      "index": {
        "description": "log Return the value to which the specified key is mapped Calls error if this map contains no mapping for the key",
        "hierarchy": "Data HashMap Strict",
        "module": "Data.HashMap.Strict",
        "name": "(!) !",
        "normalized": "HashMap a b-\u003ea-\u003eb",
        "package": "unordered-containers",
        "partial": "",
        "signature": "HashMap k v-\u003ek-\u003ev"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Strict.html#v:adjust",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e Adjust the value tied to a given key in this map only\n if it is present. Otherwise, leave the map alone.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap.Strict",
        "fct-package": "unordered-containers",
        "fct-signature": "(v -\u003e v) -\u003e k -\u003e HashMap k v -\u003e HashMap k v",
        "fct-source": "src/Data-HashMap-Strict.html#adjust",
        "fct-type": "function",
        "title": "adjust"
      },
      "index": {
        "description": "log Adjust the value tied to given key in this map only if it is present Otherwise leave the map alone",
        "hierarchy": "Data HashMap Strict",
        "module": "Data.HashMap.Strict",
        "name": "adjust",
        "normalized": "(a-\u003ea)-\u003eb-\u003eHashMap b a-\u003eHashMap b a",
        "package": "unordered-containers",
        "partial": "",
        "signature": "(v-\u003ev)-\u003ek-\u003eHashMap k v-\u003eHashMap k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Strict.html#v:delete",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e Remove the mapping for the specified key from this map\n if present.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap.Strict",
        "fct-package": "unordered-containers",
        "fct-signature": "k -\u003e HashMap k v -\u003e HashMap k v",
        "fct-source": "src/Data-HashMap-Base.html#delete",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "log Remove the mapping for the specified key from this map if present",
        "hierarchy": "Data HashMap Strict",
        "module": "Data.HashMap.Strict",
        "name": "delete",
        "normalized": "a-\u003eHashMap a b-\u003eHashMap a b",
        "package": "unordered-containers",
        "partial": "",
        "signature": "k-\u003eHashMap k v-\u003eHashMap k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Strict.html#v:difference",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n*log m)\u003c/em\u003e Difference of two maps. Return elements of the first map\n not existing in the second.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap.Strict",
        "fct-package": "unordered-containers",
        "fct-signature": "HashMap k v -\u003e HashMap k w -\u003e HashMap k v",
        "fct-source": "src/Data-HashMap-Base.html#difference",
        "fct-type": "function",
        "title": "difference"
      },
      "index": {
        "description": "log Difference of two maps Return elements of the first map not existing in the second",
        "hierarchy": "Data HashMap Strict",
        "module": "Data.HashMap.Strict",
        "name": "difference",
        "normalized": "HashMap a b-\u003eHashMap a c-\u003eHashMap a b",
        "package": "unordered-containers",
        "partial": "",
        "signature": "HashMap k v-\u003eHashMap k w-\u003eHashMap k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Strict.html#v:elems",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Return a list of this map's values.  The list is produced\n lazily.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap.Strict",
        "fct-package": "unordered-containers",
        "fct-signature": "HashMap k v -\u003e [v]",
        "fct-source": "src/Data-HashMap-Base.html#elems",
        "fct-type": "function",
        "title": "elems"
      },
      "index": {
        "description": "Return list of this map values The list is produced lazily",
        "hierarchy": "Data HashMap Strict",
        "module": "Data.HashMap.Strict",
        "name": "elems",
        "normalized": "HashMap a b-\u003e[b]",
        "package": "unordered-containers",
        "partial": "",
        "signature": "HashMap k v-\u003e[v]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Strict.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Construct an empty map.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap.Strict",
        "fct-package": "unordered-containers",
        "fct-signature": "HashMap k v",
        "fct-source": "src/Data-HashMap-Base.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "Construct an empty map",
        "hierarchy": "Data HashMap Strict",
        "module": "Data.HashMap.Strict",
        "name": "empty",
        "normalized": "",
        "package": "unordered-containers",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Strict.html#v:filter",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Filter this map by retaining only elements which values\n satisfy a predicate.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap.Strict",
        "fct-package": "unordered-containers",
        "fct-signature": "(v -\u003e Bool) -\u003e HashMap k v -\u003e HashMap k v",
        "fct-source": "src/Data-HashMap-Base.html#filter",
        "fct-type": "function",
        "title": "filter"
      },
      "index": {
        "description": "Filter this map by retaining only elements which values satisfy predicate",
        "hierarchy": "Data HashMap Strict",
        "module": "Data.HashMap.Strict",
        "name": "filter",
        "normalized": "(a-\u003eBool)-\u003eHashMap b a-\u003eHashMap b a",
        "package": "unordered-containers",
        "partial": "",
        "signature": "(v-\u003eBool)-\u003eHashMap k v-\u003eHashMap k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Strict.html#v:filterWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Filter this map by retaining only elements satisfying a\n predicate.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap.Strict",
        "fct-package": "unordered-containers",
        "fct-signature": "(k -\u003e v -\u003e Bool) -\u003e HashMap k v -\u003e HashMap k v",
        "fct-source": "src/Data-HashMap-Base.html#filterWithKey",
        "fct-type": "function",
        "title": "filterWithKey"
      },
      "index": {
        "description": "Filter this map by retaining only elements satisfying predicate",
        "hierarchy": "Data HashMap Strict",
        "module": "Data.HashMap.Strict",
        "name": "filterWithKey",
        "normalized": "(a-\u003eb-\u003eBool)-\u003eHashMap a b-\u003eHashMap a b",
        "package": "unordered-containers",
        "partial": "With Key",
        "signature": "(k-\u003ev-\u003eBool)-\u003eHashMap k v-\u003eHashMap k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Strict.html#v:foldl-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Reduce this map by applying a binary operator to all\n elements, using the given starting value (typically the\n left-identity of the operator).  Each application of the operator\n is evaluated before before using the result in the next\n application.  This function is strict in the starting value.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap.Strict",
        "fct-package": "unordered-containers",
        "fct-signature": "(a -\u003e v -\u003e a) -\u003e a -\u003e HashMap k v -\u003e a",
        "fct-source": "src/Data-HashMap-Base.html#foldl%27",
        "fct-type": "function",
        "title": "foldl'"
      },
      "index": {
        "description": "Reduce this map by applying binary operator to all elements using the given starting value typically the left-identity of the operator Each application of the operator is evaluated before before using the result in the next application This function is strict in the starting value",
        "hierarchy": "Data HashMap Strict",
        "module": "Data.HashMap.Strict",
        "name": "foldl'",
        "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eHashMap c b-\u003ea",
        "package": "unordered-containers",
        "partial": "",
        "signature": "(a-\u003ev-\u003ea)-\u003ea-\u003eHashMap k v-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Strict.html#v:foldlWithKey-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Reduce this map by applying a binary operator to all\n elements, using the given starting value (typically the\n left-identity of the operator).  Each application of the operator\n is evaluated before before using the result in the next\n application.  This function is strict in the starting value.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap.Strict",
        "fct-package": "unordered-containers",
        "fct-signature": "(a -\u003e k -\u003e v -\u003e a) -\u003e a -\u003e HashMap k v -\u003e a",
        "fct-source": "src/Data-HashMap-Base.html#foldlWithKey%27",
        "fct-type": "function",
        "title": "foldlWithKey'"
      },
      "index": {
        "description": "Reduce this map by applying binary operator to all elements using the given starting value typically the left-identity of the operator Each application of the operator is evaluated before before using the result in the next application This function is strict in the starting value",
        "hierarchy": "Data HashMap Strict",
        "module": "Data.HashMap.Strict",
        "name": "foldlWithKey'",
        "normalized": "(a-\u003eb-\u003ec-\u003ea)-\u003ea-\u003eHashMap b c-\u003ea",
        "package": "unordered-containers",
        "partial": "With Key'",
        "signature": "(a-\u003ek-\u003ev-\u003ea)-\u003ea-\u003eHashMap k v-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Strict.html#v:foldr",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Reduce this map by applying a binary operator to all\n elements, using the given starting value (typically the\n right-identity of the operator).\n\u003c/p\u003e",
        "fct-module": "Data.HashMap.Strict",
        "fct-package": "unordered-containers",
        "fct-signature": "(v -\u003e a -\u003e a) -\u003e a -\u003e HashMap k v -\u003e a",
        "fct-source": "src/Data-HashMap-Base.html#foldr",
        "fct-type": "function",
        "title": "foldr"
      },
      "index": {
        "description": "Reduce this map by applying binary operator to all elements using the given starting value typically the right-identity of the operator",
        "hierarchy": "Data HashMap Strict",
        "module": "Data.HashMap.Strict",
        "name": "foldr",
        "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eHashMap c a-\u003eb",
        "package": "unordered-containers",
        "partial": "",
        "signature": "(v-\u003ea-\u003ea)-\u003ea-\u003eHashMap k v-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Strict.html#v:foldrWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Reduce this map by applying a binary operator to all\n elements, using the given starting value (typically the\n right-identity of the operator).\n\u003c/p\u003e",
        "fct-module": "Data.HashMap.Strict",
        "fct-package": "unordered-containers",
        "fct-signature": "(k -\u003e v -\u003e a -\u003e a) -\u003e a -\u003e HashMap k v -\u003e a",
        "fct-source": "src/Data-HashMap-Base.html#foldrWithKey",
        "fct-type": "function",
        "title": "foldrWithKey"
      },
      "index": {
        "description": "Reduce this map by applying binary operator to all elements using the given starting value typically the right-identity of the operator",
        "hierarchy": "Data HashMap Strict",
        "module": "Data.HashMap.Strict",
        "name": "foldrWithKey",
        "normalized": "(a-\u003eb-\u003ec-\u003ec)-\u003ec-\u003eHashMap a b-\u003ec",
        "package": "unordered-containers",
        "partial": "With Key",
        "signature": "(k-\u003ev-\u003ea-\u003ea)-\u003ea-\u003eHashMap k v-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Strict.html#v:fromList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n*log n)\u003c/em\u003e Construct a map with the supplied mappings.  If the\n list contains duplicate mappings, the later mappings take\n precedence.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap.Strict",
        "fct-package": "unordered-containers",
        "fct-signature": "[(k, v)] -\u003e HashMap k v",
        "fct-source": "src/Data-HashMap-Strict.html#fromList",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "log Construct map with the supplied mappings If the list contains duplicate mappings the later mappings take precedence",
        "hierarchy": "Data HashMap Strict",
        "module": "Data.HashMap.Strict",
        "name": "fromList",
        "normalized": "[(a,b)]-\u003eHashMap a b",
        "package": "unordered-containers",
        "partial": "List",
        "signature": "[(k,v)]-\u003eHashMap k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Strict.html#v:fromListWith",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n*log n)\u003c/em\u003e Construct a map from a list of elements.  Uses\n the provided function to merge duplicate entries.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap.Strict",
        "fct-package": "unordered-containers",
        "fct-signature": "(v -\u003e v -\u003e v) -\u003e [(k, v)] -\u003e HashMap k v",
        "fct-source": "src/Data-HashMap-Strict.html#fromListWith",
        "fct-type": "function",
        "title": "fromListWith"
      },
      "index": {
        "description": "log Construct map from list of elements Uses the provided function to merge duplicate entries",
        "hierarchy": "Data HashMap Strict",
        "module": "Data.HashMap.Strict",
        "name": "fromListWith",
        "normalized": "(a-\u003ea-\u003ea)-\u003e[(b,a)]-\u003eHashMap b a",
        "package": "unordered-containers",
        "partial": "List With",
        "signature": "(v-\u003ev-\u003ev)-\u003e[(k,v)]-\u003eHashMap k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Strict.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e Associate the specified value with the specified\n key in this map.  If this map previously contained a mapping for\n the key, the old value is replaced.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap.Strict",
        "fct-package": "unordered-containers",
        "fct-signature": "k -\u003e v -\u003e HashMap k v -\u003e HashMap k v",
        "fct-source": "src/Data-HashMap-Strict.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "log Associate the specified value with the specified key in this map If this map previously contained mapping for the key the old value is replaced",
        "hierarchy": "Data HashMap Strict",
        "module": "Data.HashMap.Strict",
        "name": "insert",
        "normalized": "a-\u003eb-\u003eHashMap a b-\u003eHashMap a b",
        "package": "unordered-containers",
        "partial": "",
        "signature": "k-\u003ev-\u003eHashMap k v-\u003eHashMap k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Strict.html#v:insertWith",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e Associate the value with the key in this map.  If\n this map previously contained a mapping for the key, the old value\n is replaced by the result of applying the given function to the new\n and old value.  Example:\n\u003c/p\u003e\u003cpre\u003e insertWith f k v map\n   where f new old = new + old\n\u003c/pre\u003e",
        "fct-module": "Data.HashMap.Strict",
        "fct-package": "unordered-containers",
        "fct-signature": "(v -\u003e v -\u003e v) -\u003e k -\u003e v -\u003e HashMap k v -\u003e HashMap k v",
        "fct-source": "src/Data-HashMap-Strict.html#insertWith",
        "fct-type": "function",
        "title": "insertWith"
      },
      "index": {
        "description": "log Associate the value with the key in this map If this map previously contained mapping for the key the old value is replaced by the result of applying the given function to the new and old value Example insertWith map where new old new old",
        "hierarchy": "Data HashMap Strict",
        "module": "Data.HashMap.Strict",
        "name": "insertWith",
        "normalized": "(a-\u003ea-\u003ea)-\u003eb-\u003ea-\u003eHashMap b a-\u003eHashMap b a",
        "package": "unordered-containers",
        "partial": "With",
        "signature": "(v-\u003ev-\u003ev)-\u003ek-\u003ev-\u003eHashMap k v-\u003eHashMap k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Strict.html#v:intersection",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n*log m)\u003c/em\u003e Intersection of two maps. Return elements of the first\n map for keys existing in the second.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap.Strict",
        "fct-package": "unordered-containers",
        "fct-signature": "HashMap k v -\u003e HashMap k w -\u003e HashMap k v",
        "fct-source": "src/Data-HashMap-Base.html#intersection",
        "fct-type": "function",
        "title": "intersection"
      },
      "index": {
        "description": "log Intersection of two maps Return elements of the first map for keys existing in the second",
        "hierarchy": "Data HashMap Strict",
        "module": "Data.HashMap.Strict",
        "name": "intersection",
        "normalized": "HashMap a b-\u003eHashMap a c-\u003eHashMap a b",
        "package": "unordered-containers",
        "partial": "",
        "signature": "HashMap k v-\u003eHashMap k w-\u003eHashMap k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Strict.html#v:intersectionWith",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e Intersection of two maps. If a key occurs in both maps\n the provided function is used to combine the values from the two\n maps.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap.Strict",
        "fct-package": "unordered-containers",
        "fct-signature": "(v1 -\u003e v2 -\u003e v3) -\u003e HashMap k v1 -\u003e HashMap k v2 -\u003e HashMap k v3",
        "fct-source": "src/Data-HashMap-Strict.html#intersectionWith",
        "fct-type": "function",
        "title": "intersectionWith"
      },
      "index": {
        "description": "Intersection of two maps If key occurs in both maps the provided function is used to combine the values from the two maps",
        "hierarchy": "Data HashMap Strict",
        "module": "Data.HashMap.Strict",
        "name": "intersectionWith",
        "normalized": "(a-\u003ea-\u003ea)-\u003eHashMap b a-\u003eHashMap b a-\u003eHashMap b a",
        "package": "unordered-containers",
        "partial": "With",
        "signature": "(v-\u003ev-\u003ev)-\u003eHashMap k v-\u003eHashMap k v-\u003eHashMap k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Strict.html#v:keys",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Return a list of this map's keys.  The list is produced\n lazily.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap.Strict",
        "fct-package": "unordered-containers",
        "fct-signature": "HashMap k v -\u003e [k]",
        "fct-source": "src/Data-HashMap-Base.html#keys",
        "fct-type": "function",
        "title": "keys"
      },
      "index": {
        "description": "Return list of this map keys The list is produced lazily",
        "hierarchy": "Data HashMap Strict",
        "module": "Data.HashMap.Strict",
        "name": "keys",
        "normalized": "HashMap a b-\u003e[a]",
        "package": "unordered-containers",
        "partial": "",
        "signature": "HashMap k v-\u003e[k]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Strict.html#v:lookup",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e Return the value to which the specified key is mapped,\n or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if this map contains no mapping for the key.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap.Strict",
        "fct-package": "unordered-containers",
        "fct-signature": "k -\u003e HashMap k v -\u003e Maybe v",
        "fct-source": "src/Data-HashMap-Base.html#lookup",
        "fct-type": "function",
        "title": "lookup"
      },
      "index": {
        "description": "log Return the value to which the specified key is mapped or Nothing if this map contains no mapping for the key",
        "hierarchy": "Data HashMap Strict",
        "module": "Data.HashMap.Strict",
        "name": "lookup",
        "normalized": "a-\u003eHashMap a b-\u003eMaybe b",
        "package": "unordered-containers",
        "partial": "",
        "signature": "k-\u003eHashMap k v-\u003eMaybe v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Strict.html#v:lookupDefault",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e Return the value to which the specified key is mapped,\n or the default value if this map contains no mapping for the key.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap.Strict",
        "fct-package": "unordered-containers",
        "fct-signature": "v-\u003e k-\u003e HashMap k v-\u003e v",
        "fct-type": "function",
        "title": "lookupDefault"
      },
      "index": {
        "description": "log Return the value to which the specified key is mapped or the default value if this map contains no mapping for the key",
        "hierarchy": "Data HashMap Strict",
        "module": "Data.HashMap.Strict",
        "name": "lookupDefault",
        "normalized": "a-\u003eb-\u003eHashMap b a-\u003ea",
        "package": "unordered-containers",
        "partial": "Default",
        "signature": "v-\u003ek-\u003eHashMap k v-\u003ev"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Strict.html#v:map",
      "description": {
        "fct-module": "Data.HashMap.Strict",
        "fct-package": "unordered-containers",
        "fct-signature": "(v1 -\u003e v2) -\u003e HashMap k v1 -\u003e HashMap k v2",
        "fct-source": "src/Data-HashMap-Strict.html#map",
        "fct-type": "function",
        "title": "map"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HashMap Strict",
        "module": "Data.HashMap.Strict",
        "name": "map",
        "normalized": "(a-\u003ea)-\u003eHashMap b a-\u003eHashMap b a",
        "package": "unordered-containers",
        "partial": "",
        "signature": "(v-\u003ev)-\u003eHashMap k v-\u003eHashMap k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Strict.html#v:member",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e Return \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the specified key is present in the\n map, \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e otherwise.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap.Strict",
        "fct-package": "unordered-containers",
        "fct-signature": "k -\u003e HashMap k a -\u003e Bool",
        "fct-source": "src/Data-HashMap-Base.html#member",
        "fct-type": "function",
        "title": "member"
      },
      "index": {
        "description": "log Return True if the specified key is present in the map False otherwise",
        "hierarchy": "Data HashMap Strict",
        "module": "Data.HashMap.Strict",
        "name": "member",
        "normalized": "a-\u003eHashMap a b-\u003eBool",
        "package": "unordered-containers",
        "partial": "",
        "signature": "k-\u003eHashMap k a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Strict.html#v:null",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Return \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if this map is empty, \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e otherwise.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap.Strict",
        "fct-package": "unordered-containers",
        "fct-signature": "HashMap k v -\u003e Bool",
        "fct-source": "src/Data-HashMap-Base.html#null",
        "fct-type": "function",
        "title": "null"
      },
      "index": {
        "description": "Return True if this map is empty False otherwise",
        "hierarchy": "Data HashMap Strict",
        "module": "Data.HashMap.Strict",
        "name": "null",
        "normalized": "HashMap a b-\u003eBool",
        "package": "unordered-containers",
        "partial": "",
        "signature": "HashMap k v-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Strict.html#v:singleton",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Construct a map with a single element.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap.Strict",
        "fct-package": "unordered-containers",
        "fct-signature": "k -\u003e v -\u003e HashMap k v",
        "fct-source": "src/Data-HashMap-Strict.html#singleton",
        "fct-type": "function",
        "title": "singleton"
      },
      "index": {
        "description": "Construct map with single element",
        "hierarchy": "Data HashMap Strict",
        "module": "Data.HashMap.Strict",
        "name": "singleton",
        "normalized": "a-\u003eb-\u003eHashMap a b",
        "package": "unordered-containers",
        "partial": "",
        "signature": "k-\u003ev-\u003eHashMap k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Strict.html#v:size",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Return the number of key-value mappings in this map.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap.Strict",
        "fct-package": "unordered-containers",
        "fct-signature": "HashMap k v -\u003e Int",
        "fct-source": "src/Data-HashMap-Base.html#size",
        "fct-type": "function",
        "title": "size"
      },
      "index": {
        "description": "Return the number of key-value mappings in this map",
        "hierarchy": "Data HashMap Strict",
        "module": "Data.HashMap.Strict",
        "name": "size",
        "normalized": "HashMap a b-\u003eInt",
        "package": "unordered-containers",
        "partial": "",
        "signature": "HashMap k v-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Strict.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Return a list of this map's elements.  The list is\n produced lazily.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap.Strict",
        "fct-package": "unordered-containers",
        "fct-signature": "HashMap k v -\u003e [(k, v)]",
        "fct-source": "src/Data-HashMap-Base.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "Return list of this map elements The list is produced lazily",
        "hierarchy": "Data HashMap Strict",
        "module": "Data.HashMap.Strict",
        "name": "toList",
        "normalized": "HashMap a b-\u003e[(a,b)]",
        "package": "unordered-containers",
        "partial": "List",
        "signature": "HashMap k v-\u003e[(k,v)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Strict.html#v:traverseWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Transform this map by accumulating an Applicative result\n from every value.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap.Strict",
        "fct-package": "unordered-containers",
        "fct-signature": "(k -\u003e v1 -\u003e f v2) -\u003e HashMap k v1 -\u003e f (HashMap k v2)",
        "fct-source": "src/Data-HashMap-Base.html#traverseWithKey",
        "fct-type": "function",
        "title": "traverseWithKey"
      },
      "index": {
        "description": "Transform this map by accumulating an Applicative result from every value",
        "hierarchy": "Data HashMap Strict",
        "module": "Data.HashMap.Strict",
        "name": "traverseWithKey",
        "normalized": "(a-\u003eb-\u003ec b)-\u003eHashMap a b-\u003ec(HashMap a b)",
        "package": "unordered-containers",
        "partial": "With Key",
        "signature": "(k-\u003ev-\u003ef v)-\u003eHashMap k v-\u003ef(HashMap k v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Strict.html#v:union",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e The union of two maps. If a key occurs in both maps, the\n mapping from the first will be the mapping in the result.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap.Strict",
        "fct-package": "unordered-containers",
        "fct-signature": "HashMap k v -\u003e HashMap k v -\u003e HashMap k v",
        "fct-source": "src/Data-HashMap-Base.html#union",
        "fct-type": "function",
        "title": "union"
      },
      "index": {
        "description": "The union of two maps If key occurs in both maps the mapping from the first will be the mapping in the result",
        "hierarchy": "Data HashMap Strict",
        "module": "Data.HashMap.Strict",
        "name": "union",
        "normalized": "HashMap a b-\u003eHashMap a b-\u003eHashMap a b",
        "package": "unordered-containers",
        "partial": "",
        "signature": "HashMap k v-\u003eHashMap k v-\u003eHashMap k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Strict.html#v:unionWith",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e The union of two maps.  If a key occurs in both maps,\n the provided function (first argument) will be used to compute the result.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap.Strict",
        "fct-package": "unordered-containers",
        "fct-signature": "(v -\u003e v -\u003e v) -\u003e HashMap k v -\u003e HashMap k v -\u003e HashMap k v",
        "fct-source": "src/Data-HashMap-Strict.html#unionWith",
        "fct-type": "function",
        "title": "unionWith"
      },
      "index": {
        "description": "The union of two maps If key occurs in both maps the provided function first argument will be used to compute the result",
        "hierarchy": "Data HashMap Strict",
        "module": "Data.HashMap.Strict",
        "name": "unionWith",
        "normalized": "(a-\u003ea-\u003ea)-\u003eHashMap b a-\u003eHashMap b a-\u003eHashMap b a",
        "package": "unordered-containers",
        "partial": "With",
        "signature": "(v-\u003ev-\u003ev)-\u003eHashMap k v-\u003eHashMap k v-\u003eHashMap k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Strict.html#v:unions",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a set containing all elements from a list of sets.\n\u003c/p\u003e",
        "fct-module": "Data.HashMap.Strict",
        "fct-package": "unordered-containers",
        "fct-signature": "[HashMap k v] -\u003e HashMap k v",
        "fct-source": "src/Data-HashMap-Base.html#unions",
        "fct-type": "function",
        "title": "unions"
      },
      "index": {
        "description": "Construct set containing all elements from list of sets",
        "hierarchy": "Data HashMap Strict",
        "module": "Data.HashMap.Strict",
        "name": "unions",
        "normalized": "[HashMap a b]-\u003eHashMap a b",
        "package": "unordered-containers",
        "partial": "",
        "signature": "[HashMap k v]-\u003eHashMap k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashSet.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA set of \u003cem\u003ehashable\u003c/em\u003e values.  A set cannot contain duplicate items.\n A \u003ccode\u003e\u003ca\u003eHashSet\u003c/a\u003e\u003c/code\u003e makes no guarantees as to the order of its elements.\n\u003c/p\u003e\u003cp\u003eThe implementation is based on \u003cem\u003ehash array mapped trie\u003c/em\u003e.  A\n \u003ccode\u003e\u003ca\u003eHashSet\u003c/a\u003e\u003c/code\u003e is often faster than other tree-based set types,\n especially when value comparison is expensive, as in the case of\n strings.\n\u003c/p\u003e\u003cp\u003eMany operations have a average-case complexity of \u003cem\u003eO(log n)\u003c/em\u003e.  The\n implementation uses a large base (i.e. 16) so in practice these\n operations are constant time.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.HashSet",
        "fct-package": "unordered-containers",
        "fct-signature": "module",
        "fct-source": "src/Data-HashSet.html",
        "fct-type": "module",
        "title": "HashSet"
      },
      "index": {
        "description": "set of hashable values set cannot contain duplicate items HashSet makes no guarantees as to the order of its elements The implementation is based on hash array mapped trie HashSet is often faster than other tree-based set types especially when value comparison is expensive as in the case of strings Many operations have average-case complexity of log The implementation uses large base i.e so in practice these operations are constant time",
        "hierarchy": "Data HashSet",
        "module": "Data.HashSet",
        "name": "HashSet",
        "normalized": "",
        "package": "unordered-containers",
        "partial": "Hash Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashSet.html#t:HashSet",
      "description": {
        "fct-descr": "\u003cp\u003eA set of values.  A set cannot contain duplicate values.\n\u003c/p\u003e",
        "fct-module": "Data.HashSet",
        "fct-package": "unordered-containers",
        "fct-signature": "data",
        "fct-source": "src/Data-HashSet.html#HashSet",
        "fct-type": "data",
        "title": "HashSet"
      },
      "index": {
        "description": "set of values set cannot contain duplicate values",
        "hierarchy": "Data HashSet",
        "module": "Data.HashSet",
        "name": "HashSet",
        "normalized": "",
        "package": "unordered-containers",
        "partial": "Hash Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashSet.html#v:delete",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(min(n,W))\u003c/em\u003e Remove the specified value from this set if\n present.\n\u003c/p\u003e",
        "fct-module": "Data.HashSet",
        "fct-package": "unordered-containers",
        "fct-signature": "a -\u003e HashSet a -\u003e HashSet a",
        "fct-source": "src/Data-HashSet.html#delete",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "min Remove the specified value from this set if present",
        "hierarchy": "Data HashSet",
        "module": "Data.HashSet",
        "name": "delete",
        "normalized": "a-\u003eHashSet a-\u003eHashSet a",
        "package": "unordered-containers",
        "partial": "",
        "signature": "a-\u003eHashSet a-\u003eHashSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashSet.html#v:difference",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Difference of two sets. Return elements of the first set\n not existing in the second.\n\u003c/p\u003e",
        "fct-module": "Data.HashSet",
        "fct-package": "unordered-containers",
        "fct-signature": "HashSet a -\u003e HashSet a -\u003e HashSet a",
        "fct-source": "src/Data-HashSet.html#difference",
        "fct-type": "function",
        "title": "difference"
      },
      "index": {
        "description": "Difference of two sets Return elements of the first set not existing in the second",
        "hierarchy": "Data HashSet",
        "module": "Data.HashSet",
        "name": "difference",
        "normalized": "HashSet a-\u003eHashSet a-\u003eHashSet a",
        "package": "unordered-containers",
        "partial": "",
        "signature": "HashSet a-\u003eHashSet a-\u003eHashSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashSet.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Construct an empty set.\n\u003c/p\u003e",
        "fct-module": "Data.HashSet",
        "fct-package": "unordered-containers",
        "fct-signature": "HashSet a",
        "fct-source": "src/Data-HashSet.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "Construct an empty set",
        "hierarchy": "Data HashSet",
        "module": "Data.HashSet",
        "name": "empty",
        "normalized": "",
        "package": "unordered-containers",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashSet.html#v:filter",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Filter this set by retaining only elements satisfying a\n predicate.\n\u003c/p\u003e",
        "fct-module": "Data.HashSet",
        "fct-package": "unordered-containers",
        "fct-signature": "(a -\u003e Bool) -\u003e HashSet a -\u003e HashSet a",
        "fct-source": "src/Data-HashSet.html#filter",
        "fct-type": "function",
        "title": "filter"
      },
      "index": {
        "description": "Filter this set by retaining only elements satisfying predicate",
        "hierarchy": "Data HashSet",
        "module": "Data.HashSet",
        "name": "filter",
        "normalized": "(a-\u003eBool)-\u003eHashSet a-\u003eHashSet a",
        "package": "unordered-containers",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eHashSet a-\u003eHashSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashSet.html#v:foldl-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Reduce this set by applying a binary operator to all\n elements, using the given starting value (typically the\n left-identity of the operator).  Each application of the operator\n is evaluated before before using the result in the next\n application.  This function is strict in the starting value.\n\u003c/p\u003e",
        "fct-module": "Data.HashSet",
        "fct-package": "unordered-containers",
        "fct-signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e HashSet b -\u003e a",
        "fct-source": "src/Data-HashSet.html#foldl%27",
        "fct-type": "function",
        "title": "foldl'"
      },
      "index": {
        "description": "Reduce this set by applying binary operator to all elements using the given starting value typically the left-identity of the operator Each application of the operator is evaluated before before using the result in the next application This function is strict in the starting value",
        "hierarchy": "Data HashSet",
        "module": "Data.HashSet",
        "name": "foldl'",
        "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eHashSet b-\u003ea",
        "package": "unordered-containers",
        "partial": "",
        "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003eHashSet b-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashSet.html#v:foldr",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Reduce this set by applying a binary operator to all\n elements, using the given starting value (typically the\n right-identity of the operator).\n\u003c/p\u003e",
        "fct-module": "Data.HashSet",
        "fct-package": "unordered-containers",
        "fct-signature": "(b -\u003e a -\u003e a) -\u003e a -\u003e HashSet b -\u003e a",
        "fct-source": "src/Data-HashSet.html#foldr",
        "fct-type": "function",
        "title": "foldr"
      },
      "index": {
        "description": "Reduce this set by applying binary operator to all elements using the given starting value typically the right-identity of the operator",
        "hierarchy": "Data HashSet",
        "module": "Data.HashSet",
        "name": "foldr",
        "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eHashSet a-\u003eb",
        "package": "unordered-containers",
        "partial": "",
        "signature": "(b-\u003ea-\u003ea)-\u003ea-\u003eHashSet b-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashSet.html#v:fromList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n*min(W, n))\u003c/em\u003e Construct a set from a list of elements.\n\u003c/p\u003e",
        "fct-module": "Data.HashSet",
        "fct-package": "unordered-containers",
        "fct-signature": "[a] -\u003e HashSet a",
        "fct-source": "src/Data-HashSet.html#fromList",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "min Construct set from list of elements",
        "hierarchy": "Data HashSet",
        "module": "Data.HashSet",
        "name": "fromList",
        "normalized": "[a]-\u003eHashSet a",
        "package": "unordered-containers",
        "partial": "List",
        "signature": "[a]-\u003eHashSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashSet.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(min(n,W))\u003c/em\u003e Add the specified value to this set.\n\u003c/p\u003e",
        "fct-module": "Data.HashSet",
        "fct-package": "unordered-containers",
        "fct-signature": "a -\u003e HashSet a -\u003e HashSet a",
        "fct-source": "src/Data-HashSet.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "min Add the specified value to this set",
        "hierarchy": "Data HashSet",
        "module": "Data.HashSet",
        "name": "insert",
        "normalized": "a-\u003eHashSet a-\u003eHashSet a",
        "package": "unordered-containers",
        "partial": "",
        "signature": "a-\u003eHashSet a-\u003eHashSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashSet.html#v:intersection",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Intersection of two sets. Return elements present in both\n the first set and the second.\n\u003c/p\u003e",
        "fct-module": "Data.HashSet",
        "fct-package": "unordered-containers",
        "fct-signature": "HashSet a -\u003e HashSet a -\u003e HashSet a",
        "fct-source": "src/Data-HashSet.html#intersection",
        "fct-type": "function",
        "title": "intersection"
      },
      "index": {
        "description": "Intersection of two sets Return elements present in both the first set and the second",
        "hierarchy": "Data HashSet",
        "module": "Data.HashSet",
        "name": "intersection",
        "normalized": "HashSet a-\u003eHashSet a-\u003eHashSet a",
        "package": "unordered-containers",
        "partial": "",
        "signature": "HashSet a-\u003eHashSet a-\u003eHashSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashSet.html#v:map",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Transform this set by applying a function to every value.\n The resulting set may be smaller than the source.\n\u003c/p\u003e",
        "fct-module": "Data.HashSet",
        "fct-package": "unordered-containers",
        "fct-signature": "(a -\u003e b) -\u003e HashSet a -\u003e HashSet b",
        "fct-source": "src/Data-HashSet.html#map",
        "fct-type": "function",
        "title": "map"
      },
      "index": {
        "description": "Transform this set by applying function to every value The resulting set may be smaller than the source",
        "hierarchy": "Data HashSet",
        "module": "Data.HashSet",
        "name": "map",
        "normalized": "(a-\u003eb)-\u003eHashSet a-\u003eHashSet b",
        "package": "unordered-containers",
        "partial": "",
        "signature": "(a-\u003eb)-\u003eHashSet a-\u003eHashSet b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashSet.html#v:member",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(min(n,W))\u003c/em\u003e Return \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the given value is present in this\n set, \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e otherwise.\n\u003c/p\u003e",
        "fct-module": "Data.HashSet",
        "fct-package": "unordered-containers",
        "fct-signature": "a -\u003e HashSet a -\u003e Bool",
        "fct-source": "src/Data-HashSet.html#member",
        "fct-type": "function",
        "title": "member"
      },
      "index": {
        "description": "min Return True if the given value is present in this set False otherwise",
        "hierarchy": "Data HashSet",
        "module": "Data.HashSet",
        "name": "member",
        "normalized": "a-\u003eHashSet a-\u003eBool",
        "package": "unordered-containers",
        "partial": "",
        "signature": "a-\u003eHashSet a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashSet.html#v:null",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Return \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if this set is empty, \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e otherwise.\n\u003c/p\u003e",
        "fct-module": "Data.HashSet",
        "fct-package": "unordered-containers",
        "fct-signature": "HashSet a -\u003e Bool",
        "fct-source": "src/Data-HashSet.html#null",
        "fct-type": "function",
        "title": "null"
      },
      "index": {
        "description": "Return True if this set is empty False otherwise",
        "hierarchy": "Data HashSet",
        "module": "Data.HashSet",
        "name": "null",
        "normalized": "HashSet a-\u003eBool",
        "package": "unordered-containers",
        "partial": "",
        "signature": "HashSet a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashSet.html#v:singleton",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Construct a set with a single element.\n\u003c/p\u003e",
        "fct-module": "Data.HashSet",
        "fct-package": "unordered-containers",
        "fct-signature": "a -\u003e HashSet a",
        "fct-source": "src/Data-HashSet.html#singleton",
        "fct-type": "function",
        "title": "singleton"
      },
      "index": {
        "description": "Construct set with single element",
        "hierarchy": "Data HashSet",
        "module": "Data.HashSet",
        "name": "singleton",
        "normalized": "a-\u003eHashSet a",
        "package": "unordered-containers",
        "partial": "",
        "signature": "a-\u003eHashSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashSet.html#v:size",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Return the number of elements in this set.\n\u003c/p\u003e",
        "fct-module": "Data.HashSet",
        "fct-package": "unordered-containers",
        "fct-signature": "HashSet a -\u003e Int",
        "fct-source": "src/Data-HashSet.html#size",
        "fct-type": "function",
        "title": "size"
      },
      "index": {
        "description": "Return the number of elements in this set",
        "hierarchy": "Data HashSet",
        "module": "Data.HashSet",
        "name": "size",
        "normalized": "HashSet a-\u003eInt",
        "package": "unordered-containers",
        "partial": "",
        "signature": "HashSet a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashSet.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Return a list of this set's elements.  The list is\n produced lazily.\n\u003c/p\u003e",
        "fct-module": "Data.HashSet",
        "fct-package": "unordered-containers",
        "fct-signature": "HashSet a -\u003e [a]",
        "fct-source": "src/Data-HashSet.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "Return list of this set elements The list is produced lazily",
        "hierarchy": "Data HashSet",
        "module": "Data.HashSet",
        "name": "toList",
        "normalized": "HashSet a-\u003e[a]",
        "package": "unordered-containers",
        "partial": "List",
        "signature": "HashSet a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashSet.html#v:union",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e Construct a set containing all elements from both sets.\n\u003c/p\u003e\u003cp\u003eTo obtain good performance, the smaller set must be presented as\n the first argument.\n\u003c/p\u003e",
        "fct-module": "Data.HashSet",
        "fct-package": "unordered-containers",
        "fct-signature": "HashSet a -\u003e HashSet a -\u003e HashSet a",
        "fct-source": "src/Data-HashSet.html#union",
        "fct-type": "function",
        "title": "union"
      },
      "index": {
        "description": "Construct set containing all elements from both sets To obtain good performance the smaller set must be presented as the first argument",
        "hierarchy": "Data HashSet",
        "module": "Data.HashSet",
        "name": "union",
        "normalized": "HashSet a-\u003eHashSet a-\u003eHashSet a",
        "package": "unordered-containers",
        "partial": "",
        "signature": "HashSet a-\u003eHashSet a-\u003eHashSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashSet.html#v:unions",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a set containing all elements from a list of sets.\n\u003c/p\u003e",
        "fct-module": "Data.HashSet",
        "fct-package": "unordered-containers",
        "fct-signature": "[HashSet a] -\u003e HashSet a",
        "fct-source": "src/Data-HashSet.html#unions",
        "fct-type": "function",
        "title": "unions"
      },
      "index": {
        "description": "Construct set containing all elements from list of sets",
        "hierarchy": "Data HashSet",
        "module": "Data.HashSet",
        "name": "unions",
        "normalized": "[HashSet a]-\u003eHashSet a",
        "package": "unordered-containers",
        "partial": "",
        "signature": "[HashSet a]-\u003eHashSet a"
      }
    }
  }
]