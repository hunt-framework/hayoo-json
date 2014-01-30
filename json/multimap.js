[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multimap/docs/Data-MultiMap.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA very simple MultiMap, based on \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e from the containers package.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.MultiMap",
        "fct-package": "multimap",
        "fct-signature": "module",
        "fct-source": "src/Data-MultiMap.html",
        "fct-type": "module",
        "title": "MultiMap"
      },
      "index": {
        "description": "very simple MultiMap based on Map from the containers package",
        "hierarchy": "Data MultiMap",
        "module": "Data.MultiMap",
        "name": "MultiMap",
        "normalized": "",
        "package": "multimap",
        "partial": "Multi Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multimap/docs/Data-MultiMap.html#t:MultiMap",
      "description": {
        "fct-descr": "\u003cp\u003eA MultiMap with keys \u003ccode\u003ek\u003c/code\u003e and values \u003ccode\u003ev\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eA key can have multiple values (but not zero).\n The same value can be added multiple times (thus no\n constraints are ever imposed on \u003ccode\u003ev\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eInternally this is simply a \u003ccode\u003eMap k [v]\u003c/code\u003e.\n See \u003ccode\u003e\u003ca\u003etoMap\u003c/a\u003e\u003c/code\u003e for accessing the underlying \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.MultiMap",
        "fct-package": "multimap",
        "fct-signature": "data",
        "fct-source": "src/Data-MultiMap.html#MultiMap",
        "fct-type": "data",
        "title": "MultiMap"
      },
      "index": {
        "description": "MultiMap with keys and values key can have multiple values but not zero The same value can be added multiple times thus no constraints are ever imposed on Internally this is simply Map See toMap for accessing the underlying Map",
        "hierarchy": "Data MultiMap",
        "module": "Data.MultiMap",
        "name": "MultiMap",
        "normalized": "",
        "package": "multimap",
        "partial": "Multi Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multimap/docs/Data-MultiMap.html#v:-33-",
      "description": {
        "fct-descr": "\u003cp\u003eAs \u003ccode\u003eflip lookup\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.MultiMap",
        "fct-package": "multimap",
        "fct-signature": "MultiMap k a -\u003e k -\u003e [a]",
        "fct-source": "src/Data-MultiMap.html#%21",
        "fct-type": "function",
        "title": "(!)"
      },
      "index": {
        "description": "As flip lookup",
        "hierarchy": "Data MultiMap",
        "module": "Data.MultiMap",
        "name": "(!) !",
        "normalized": "MultiMap a b-\u003ea-\u003e[b]",
        "package": "multimap",
        "partial": "",
        "signature": "MultiMap k a-\u003ek-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multimap/docs/Data-MultiMap.html#v:assocs",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n).\u003c/em\u003e Return all key/value pairs in the multimap\n in ascending key order.\n\u003c/p\u003e",
        "fct-module": "Data.MultiMap",
        "fct-package": "multimap",
        "fct-signature": "MultiMap k a -\u003e [(k, [a])]",
        "fct-source": "src/Data-MultiMap.html#assocs",
        "fct-type": "function",
        "title": "assocs"
      },
      "index": {
        "description": "Return all key value pairs in the multimap in ascending key order",
        "hierarchy": "Data MultiMap",
        "module": "Data.MultiMap",
        "name": "assocs",
        "normalized": "MultiMap a b-\u003e[(a,[b])]",
        "package": "multimap",
        "partial": "",
        "signature": "MultiMap k a-\u003e[(k,[a])]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multimap/docs/Data-MultiMap.html#v:delete",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n).\u003c/em\u003e Delete a key and all its values from the map.\n\u003c/p\u003e",
        "fct-module": "Data.MultiMap",
        "fct-package": "multimap",
        "fct-signature": "k -\u003e MultiMap k a -\u003e MultiMap k a",
        "fct-source": "src/Data-MultiMap.html#delete",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "log Delete key and all its values from the map",
        "hierarchy": "Data MultiMap",
        "module": "Data.MultiMap",
        "name": "delete",
        "normalized": "a-\u003eMultiMap a b-\u003eMultiMap a b",
        "package": "multimap",
        "partial": "",
        "signature": "k-\u003eMultiMap k a-\u003eMultiMap k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multimap/docs/Data-MultiMap.html#v:elems",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n).\u003c/em\u003e Return all elements of the multimap in the\n ascending order of their keys.\n\u003c/p\u003e\u003cp\u003eA list of lists is returned since a key can have\n multiple values. Use \u003ccode\u003e\u003ca\u003econcat\u003c/a\u003e\u003c/code\u003e to flatten.\n\u003c/p\u003e",
        "fct-module": "Data.MultiMap",
        "fct-package": "multimap",
        "fct-signature": "MultiMap k a -\u003e [[a]]",
        "fct-source": "src/Data-MultiMap.html#elems",
        "fct-type": "function",
        "title": "elems"
      },
      "index": {
        "description": "Return all elements of the multimap in the ascending order of their keys list of lists is returned since key can have multiple values Use concat to flatten",
        "hierarchy": "Data MultiMap",
        "module": "Data.MultiMap",
        "name": "elems",
        "normalized": "MultiMap a b-\u003e[[b]]",
        "package": "multimap",
        "partial": "",
        "signature": "MultiMap k a-\u003e[[a]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multimap/docs/Data-MultiMap.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e The empty multimap.\n\u003c/p\u003e",
        "fct-module": "Data.MultiMap",
        "fct-package": "multimap",
        "fct-signature": "MultiMap k a",
        "fct-source": "src/Data-MultiMap.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "The empty multimap",
        "hierarchy": "Data MultiMap",
        "module": "Data.MultiMap",
        "name": "empty",
        "normalized": "",
        "package": "multimap",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multimap/docs/Data-MultiMap.html#v:findMax",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e Find the maximal key of the multimap.\n\u003c/p\u003e",
        "fct-module": "Data.MultiMap",
        "fct-package": "multimap",
        "fct-signature": "MultiMap k a -\u003e Maybe k",
        "fct-source": "src/Data-MultiMap.html#findMax",
        "fct-type": "function",
        "title": "findMax"
      },
      "index": {
        "description": "log Find the maximal key of the multimap",
        "hierarchy": "Data MultiMap",
        "module": "Data.MultiMap",
        "name": "findMax",
        "normalized": "MultiMap a b-\u003eMaybe a",
        "package": "multimap",
        "partial": "Max",
        "signature": "MultiMap k a-\u003eMaybe k"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multimap/docs/Data-MultiMap.html#v:findMaxWithValues",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e Find the maximal key and the values associated with it.\n\u003c/p\u003e",
        "fct-module": "Data.MultiMap",
        "fct-package": "multimap",
        "fct-signature": "MultiMap k a -\u003e Maybe (k, [a])",
        "fct-source": "src/Data-MultiMap.html#findMaxWithValues",
        "fct-type": "function",
        "title": "findMaxWithValues"
      },
      "index": {
        "description": "log Find the maximal key and the values associated with it",
        "hierarchy": "Data MultiMap",
        "module": "Data.MultiMap",
        "name": "findMaxWithValues",
        "normalized": "MultiMap a b-\u003eMaybe(a,[b])",
        "package": "multimap",
        "partial": "Max With Values",
        "signature": "MultiMap k a-\u003eMaybe(k,[a])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multimap/docs/Data-MultiMap.html#v:findMin",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e Find the minimal key of the multimap.\n\u003c/p\u003e",
        "fct-module": "Data.MultiMap",
        "fct-package": "multimap",
        "fct-signature": "MultiMap k a -\u003e Maybe k",
        "fct-source": "src/Data-MultiMap.html#findMin",
        "fct-type": "function",
        "title": "findMin"
      },
      "index": {
        "description": "log Find the minimal key of the multimap",
        "hierarchy": "Data MultiMap",
        "module": "Data.MultiMap",
        "name": "findMin",
        "normalized": "MultiMap a b-\u003eMaybe a",
        "package": "multimap",
        "partial": "Min",
        "signature": "MultiMap k a-\u003eMaybe k"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multimap/docs/Data-MultiMap.html#v:findMinWithValues",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e Find the minimal key and the values associated with it.\n\u003c/p\u003e",
        "fct-module": "Data.MultiMap",
        "fct-package": "multimap",
        "fct-signature": "MultiMap k a -\u003e Maybe (k, [a])",
        "fct-source": "src/Data-MultiMap.html#findMinWithValues",
        "fct-type": "function",
        "title": "findMinWithValues"
      },
      "index": {
        "description": "log Find the minimal key and the values associated with it",
        "hierarchy": "Data MultiMap",
        "module": "Data.MultiMap",
        "name": "findMinWithValues",
        "normalized": "MultiMap a b-\u003eMaybe(a,[b])",
        "package": "multimap",
        "partial": "Min With Values",
        "signature": "MultiMap k a-\u003eMaybe(k,[a])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multimap/docs/Data-MultiMap.html#v:foldl",
      "description": {
        "fct-descr": "\u003cp\u003eFold the values in the map using the given left-associative binary operator.\n\u003c/p\u003e",
        "fct-module": "Data.MultiMap",
        "fct-package": "multimap",
        "fct-signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e MultiMap k b -\u003e a",
        "fct-source": "src/Data-MultiMap.html#foldl",
        "fct-type": "function",
        "title": "foldl"
      },
      "index": {
        "description": "Fold the values in the map using the given left-associative binary operator",
        "hierarchy": "Data MultiMap",
        "module": "Data.MultiMap",
        "name": "foldl",
        "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eMultiMap c b-\u003ea",
        "package": "multimap",
        "partial": "",
        "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003eMultiMap k b-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multimap/docs/Data-MultiMap.html#v:foldlWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n).\u003c/em\u003e Fold the keys and values in the map using the given left-associative\n binary operator, taking into account not only the value but also the key.\n\u003c/p\u003e",
        "fct-module": "Data.MultiMap",
        "fct-package": "multimap",
        "fct-signature": "(a -\u003e k -\u003e b -\u003e a) -\u003e a -\u003e MultiMap k b -\u003e a",
        "fct-source": "src/Data-MultiMap.html#foldlWithKey",
        "fct-type": "function",
        "title": "foldlWithKey"
      },
      "index": {
        "description": "Fold the keys and values in the map using the given left-associative binary operator taking into account not only the value but also the key",
        "hierarchy": "Data MultiMap",
        "module": "Data.MultiMap",
        "name": "foldlWithKey",
        "normalized": "(a-\u003eb-\u003ec-\u003ea)-\u003ea-\u003eMultiMap b c-\u003ea",
        "package": "multimap",
        "partial": "With Key",
        "signature": "(a-\u003ek-\u003eb-\u003ea)-\u003ea-\u003eMultiMap k b-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multimap/docs/Data-MultiMap.html#v:foldr",
      "description": {
        "fct-descr": "\u003cp\u003eFold the values in the map using the given right-associative binary operator.\n\u003c/p\u003e",
        "fct-module": "Data.MultiMap",
        "fct-package": "multimap",
        "fct-signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e MultiMap k a -\u003e b",
        "fct-source": "src/Data-MultiMap.html#foldr",
        "fct-type": "function",
        "title": "foldr"
      },
      "index": {
        "description": "Fold the values in the map using the given right-associative binary operator",
        "hierarchy": "Data MultiMap",
        "module": "Data.MultiMap",
        "name": "foldr",
        "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eMultiMap c a-\u003eb",
        "package": "multimap",
        "partial": "",
        "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eMultiMap k a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multimap/docs/Data-MultiMap.html#v:foldrWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n).\u003c/em\u003e Fold the keys and values in the map using the given right-associative\n binary operator, taking into account not only the value but also the key.\n\u003c/p\u003e",
        "fct-module": "Data.MultiMap",
        "fct-package": "multimap",
        "fct-signature": "(k -\u003e a -\u003e b -\u003e b) -\u003e b -\u003e MultiMap k a -\u003e b",
        "fct-source": "src/Data-MultiMap.html#foldrWithKey",
        "fct-type": "function",
        "title": "foldrWithKey"
      },
      "index": {
        "description": "Fold the keys and values in the map using the given right-associative binary operator taking into account not only the value but also the key",
        "hierarchy": "Data MultiMap",
        "module": "Data.MultiMap",
        "name": "foldrWithKey",
        "normalized": "(a-\u003eb-\u003ec-\u003ec)-\u003ec-\u003eMultiMap a b-\u003ec",
        "package": "multimap",
        "partial": "With Key",
        "signature": "(k-\u003ea-\u003eb-\u003eb)-\u003eb-\u003eMultiMap k a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multimap/docs/Data-MultiMap.html#v:fromList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n*log n)\u003c/em\u003e Create a multimap from a list of key/value pairs.\n\u003c/p\u003e\u003cpre\u003e fromList xs == foldr (uncurry insert) empty\n\u003c/pre\u003e",
        "fct-module": "Data.MultiMap",
        "fct-package": "multimap",
        "fct-signature": "[(k, a)] -\u003e MultiMap k a",
        "fct-source": "src/Data-MultiMap.html#fromList",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "log Create multimap from list of key value pairs fromList xs foldr uncurry insert empty",
        "hierarchy": "Data MultiMap",
        "module": "Data.MultiMap",
        "name": "fromList",
        "normalized": "[(a,b)]-\u003eMultiMap a b",
        "package": "multimap",
        "partial": "List",
        "signature": "[(k,a)]-\u003eMultiMap k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multimap/docs/Data-MultiMap.html#v:fromMap",
      "description": {
        "fct-descr": "\u003cp\u003eTurns a map of lists into a multimap.\n\u003c/p\u003e",
        "fct-module": "Data.MultiMap",
        "fct-package": "multimap",
        "fct-signature": "Map k [a] -\u003e MultiMap k a",
        "fct-source": "src/Data-MultiMap.html#fromMap",
        "fct-type": "function",
        "title": "fromMap"
      },
      "index": {
        "description": "Turns map of lists into multimap",
        "hierarchy": "Data MultiMap",
        "module": "Data.MultiMap",
        "name": "fromMap",
        "normalized": "Map a[b]-\u003eMultiMap a b",
        "package": "multimap",
        "partial": "Map",
        "signature": "Map k[a]-\u003eMultiMap k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multimap/docs/Data-MultiMap.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n).\u003c/em\u003e Insert a new key and value in the map.\n\u003c/p\u003e",
        "fct-module": "Data.MultiMap",
        "fct-package": "multimap",
        "fct-signature": "k -\u003e a -\u003e MultiMap k a -\u003e MultiMap k a",
        "fct-source": "src/Data-MultiMap.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "log Insert new key and value in the map",
        "hierarchy": "Data MultiMap",
        "module": "Data.MultiMap",
        "name": "insert",
        "normalized": "a-\u003eb-\u003eMultiMap a b-\u003eMultiMap a b",
        "package": "multimap",
        "partial": "",
        "signature": "k-\u003ea-\u003eMultiMap k a-\u003eMultiMap k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multimap/docs/Data-MultiMap.html#v:keys",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n).\u003c/em\u003e Return all keys of the multimap in ascending order.\n\u003c/p\u003e",
        "fct-module": "Data.MultiMap",
        "fct-package": "multimap",
        "fct-signature": "MultiMap k a -\u003e [k]",
        "fct-source": "src/Data-MultiMap.html#keys",
        "fct-type": "function",
        "title": "keys"
      },
      "index": {
        "description": "Return all keys of the multimap in ascending order",
        "hierarchy": "Data MultiMap",
        "module": "Data.MultiMap",
        "name": "keys",
        "normalized": "MultiMap a b-\u003e[a]",
        "package": "multimap",
        "partial": "",
        "signature": "MultiMap k a-\u003e[k]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multimap/docs/Data-MultiMap.html#v:keysSet",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n).\u003c/em\u003e The set of all keys of the multimap.\n\u003c/p\u003e",
        "fct-module": "Data.MultiMap",
        "fct-package": "multimap",
        "fct-signature": "MultiMap k a -\u003e Set k",
        "fct-source": "src/Data-MultiMap.html#keysSet",
        "fct-type": "function",
        "title": "keysSet"
      },
      "index": {
        "description": "The set of all keys of the multimap",
        "hierarchy": "Data MultiMap",
        "module": "Data.MultiMap",
        "name": "keysSet",
        "normalized": "MultiMap a b-\u003eSet a",
        "package": "multimap",
        "partial": "Set",
        "signature": "MultiMap k a-\u003eSet k"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multimap/docs/Data-MultiMap.html#v:lookup",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n).\u003c/em\u003e Lookup the value at a key in the map.\n\u003c/p\u003e\u003cp\u003eThe function will return the corrsponding values as a List, or the\n empty list if no values are associated witht the given key.\n\u003c/p\u003e",
        "fct-module": "Data.MultiMap",
        "fct-package": "multimap",
        "fct-signature": "k -\u003e MultiMap k a -\u003e [a]",
        "fct-source": "src/Data-MultiMap.html#lookup",
        "fct-type": "function",
        "title": "lookup"
      },
      "index": {
        "description": "log Lookup the value at key in the map The function will return the corrsponding values as List or the empty list if no values are associated witht the given key",
        "hierarchy": "Data MultiMap",
        "module": "Data.MultiMap",
        "name": "lookup",
        "normalized": "a-\u003eMultiMap a b-\u003e[b]",
        "package": "multimap",
        "partial": "",
        "signature": "k-\u003eMultiMap k a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multimap/docs/Data-MultiMap.html#v:map",
      "description": {
        "fct-descr": "\u003cp\u003eMap a function over all values in the map.\n\u003c/p\u003e",
        "fct-module": "Data.MultiMap",
        "fct-package": "multimap",
        "fct-signature": "(a -\u003e b) -\u003e MultiMap k a -\u003e MultiMap k b",
        "fct-source": "src/Data-MultiMap.html#map",
        "fct-type": "function",
        "title": "map"
      },
      "index": {
        "description": "Map function over all values in the map",
        "hierarchy": "Data MultiMap",
        "module": "Data.MultiMap",
        "name": "map",
        "normalized": "(a-\u003eb)-\u003eMultiMap c a-\u003eMultiMap c b",
        "package": "multimap",
        "partial": "",
        "signature": "(a-\u003eb)-\u003eMultiMap k a-\u003eMultiMap k b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multimap/docs/Data-MultiMap.html#v:mapKeys",
      "description": {
        "fct-descr": "\u003cp\u003emapKeys f s is the multimap obtained by applying f to each key of s.\n\u003c/p\u003e",
        "fct-module": "Data.MultiMap",
        "fct-package": "multimap",
        "fct-signature": "(k1 -\u003e k2) -\u003e MultiMap k1 a -\u003e MultiMap k2 a",
        "fct-source": "src/Data-MultiMap.html#mapKeys",
        "fct-type": "function",
        "title": "mapKeys"
      },
      "index": {
        "description": "mapKeys is the multimap obtained by applying to each key of",
        "hierarchy": "Data MultiMap",
        "module": "Data.MultiMap",
        "name": "mapKeys",
        "normalized": "(a-\u003ea)-\u003eMultiMap a b-\u003eMultiMap a b",
        "package": "multimap",
        "partial": "Keys",
        "signature": "(k-\u003ek)-\u003eMultiMap k a-\u003eMultiMap k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multimap/docs/Data-MultiMap.html#v:mapWithKey",
      "description": {
        "fct-descr": "\u003cp\u003eMap a function over all key/value pairs in the map.\n\u003c/p\u003e",
        "fct-module": "Data.MultiMap",
        "fct-package": "multimap",
        "fct-signature": "(k -\u003e a -\u003e b) -\u003e MultiMap k a -\u003e MultiMap k b",
        "fct-source": "src/Data-MultiMap.html#mapWithKey",
        "fct-type": "function",
        "title": "mapWithKey"
      },
      "index": {
        "description": "Map function over all key value pairs in the map",
        "hierarchy": "Data MultiMap",
        "module": "Data.MultiMap",
        "name": "mapWithKey",
        "normalized": "(a-\u003eb-\u003ec)-\u003eMultiMap a b-\u003eMultiMap a c",
        "package": "multimap",
        "partial": "With Key",
        "signature": "(k-\u003ea-\u003eb)-\u003eMultiMap k a-\u003eMultiMap k b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multimap/docs/Data-MultiMap.html#v:member",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n).\u003c/em\u003e Is the key a member of the multimap?\n\u003c/p\u003e",
        "fct-module": "Data.MultiMap",
        "fct-package": "multimap",
        "fct-signature": "MultiMap k a -\u003e k -\u003e Bool",
        "fct-source": "src/Data-MultiMap.html#member",
        "fct-type": "function",
        "title": "member"
      },
      "index": {
        "description": "log Is the key member of the multimap",
        "hierarchy": "Data MultiMap",
        "module": "Data.MultiMap",
        "name": "member",
        "normalized": "MultiMap a b-\u003ea-\u003eBool",
        "package": "multimap",
        "partial": "",
        "signature": "MultiMap k a-\u003ek-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multimap/docs/Data-MultiMap.html#v:notMember",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n).\u003c/em\u003e Is the key not a member of the multimap?\n\u003c/p\u003e",
        "fct-module": "Data.MultiMap",
        "fct-package": "multimap",
        "fct-signature": "MultiMap k a -\u003e k -\u003e Bool",
        "fct-source": "src/Data-MultiMap.html#notMember",
        "fct-type": "function",
        "title": "notMember"
      },
      "index": {
        "description": "log Is the key not member of the multimap",
        "hierarchy": "Data MultiMap",
        "module": "Data.MultiMap",
        "name": "notMember",
        "normalized": "MultiMap a b-\u003ea-\u003eBool",
        "package": "multimap",
        "partial": "Member",
        "signature": "MultiMap k a-\u003ek-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multimap/docs/Data-MultiMap.html#v:null",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e Check whether the multimap is empty or not.\n\u003c/p\u003e",
        "fct-module": "Data.MultiMap",
        "fct-package": "multimap",
        "fct-signature": "MultiMap k a -\u003e Bool",
        "fct-source": "src/Data-MultiMap.html#null",
        "fct-type": "function",
        "title": "null"
      },
      "index": {
        "description": "Check whether the multimap is empty or not",
        "hierarchy": "Data MultiMap",
        "module": "Data.MultiMap",
        "name": "null",
        "normalized": "MultiMap a b-\u003eBool",
        "package": "multimap",
        "partial": "",
        "signature": "MultiMap k a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multimap/docs/Data-MultiMap.html#v:numKeys",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e The number of keys in the multimap.\n\u003c/p\u003e\u003cp\u003eAs this is a multimap, the number of keys is not\n necessarily equal to the number of values.\n\u003c/p\u003e",
        "fct-module": "Data.MultiMap",
        "fct-package": "multimap",
        "fct-signature": "MultiMap k a -\u003e Word32",
        "fct-source": "src/Data-MultiMap.html#numKeys",
        "fct-type": "function",
        "title": "numKeys"
      },
      "index": {
        "description": "The number of keys in the multimap As this is multimap the number of keys is not necessarily equal to the number of values",
        "hierarchy": "Data MultiMap",
        "module": "Data.MultiMap",
        "name": "numKeys",
        "normalized": "MultiMap a b-\u003eWord",
        "package": "multimap",
        "partial": "Keys",
        "signature": "MultiMap k a-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multimap/docs/Data-MultiMap.html#v:numValues",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e The number of values in the multimap.\n\u003c/p\u003e\u003cp\u003eAs this is a multimap, the number of keys is not\n necessarily equal to the number of values.\n\u003c/p\u003e",
        "fct-module": "Data.MultiMap",
        "fct-package": "multimap",
        "fct-signature": "MultiMap k a -\u003e Word32",
        "fct-source": "src/Data-MultiMap.html#numValues",
        "fct-type": "function",
        "title": "numValues"
      },
      "index": {
        "description": "The number of values in the multimap As this is multimap the number of keys is not necessarily equal to the number of values",
        "hierarchy": "Data MultiMap",
        "module": "Data.MultiMap",
        "name": "numValues",
        "normalized": "MultiMap a b-\u003eWord",
        "package": "multimap",
        "partial": "Values",
        "signature": "MultiMap k a-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multimap/docs/Data-MultiMap.html#v:size",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e The number of elements in the multimap.\n\u003c/p\u003e",
        "fct-module": "Data.MultiMap",
        "fct-package": "multimap",
        "fct-signature": "MultiMap k a -\u003e Int",
        "fct-source": "src/Data-MultiMap.html#size",
        "fct-type": "function",
        "title": "size"
      },
      "index": {
        "description": "The number of elements in the multimap",
        "hierarchy": "Data MultiMap",
        "module": "Data.MultiMap",
        "name": "size",
        "normalized": "MultiMap a b-\u003eInt",
        "package": "multimap",
        "partial": "",
        "signature": "MultiMap k a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multimap/docs/Data-MultiMap.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003eReturn a flattened list of key/value pairs.\n\u003c/p\u003e",
        "fct-module": "Data.MultiMap",
        "fct-package": "multimap",
        "fct-signature": "MultiMap k a -\u003e [(k, a)]",
        "fct-source": "src/Data-MultiMap.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "Return flattened list of key value pairs",
        "hierarchy": "Data MultiMap",
        "module": "Data.MultiMap",
        "name": "toList",
        "normalized": "MultiMap a b-\u003e[(a,b)]",
        "package": "multimap",
        "partial": "List",
        "signature": "MultiMap k a-\u003e[(k,a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multimap/docs/Data-MultiMap.html#v:toMap",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e Return the map of lists.\n\u003c/p\u003e",
        "fct-module": "Data.MultiMap",
        "fct-package": "multimap",
        "fct-signature": "MultiMap k a -\u003e Map k [a]",
        "fct-source": "src/Data-MultiMap.html#toMap",
        "fct-type": "function",
        "title": "toMap"
      },
      "index": {
        "description": "Return the map of lists",
        "hierarchy": "Data MultiMap",
        "module": "Data.MultiMap",
        "name": "toMap",
        "normalized": "MultiMap a b-\u003eMap a[b]",
        "package": "multimap",
        "partial": "Map",
        "signature": "MultiMap k a-\u003eMap k[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multimap/docs/Data-MultiMap.html#v:toMapOfSets",
      "description": {
        "fct-descr": "\u003cp\u003e/O(k*m*log m) where k is the number of keys and m the\n maximum number of elements associated with a single key/\n\u003c/p\u003e",
        "fct-module": "Data.MultiMap",
        "fct-package": "multimap",
        "fct-signature": "MultiMap k a -\u003e Map k (Set a)",
        "fct-source": "src/Data-MultiMap.html#toMapOfSets",
        "fct-type": "function",
        "title": "toMapOfSets"
      },
      "index": {
        "description": "log where is the number of keys and the maximum number of elements associated with single key",
        "hierarchy": "Data MultiMap",
        "module": "Data.MultiMap",
        "name": "toMapOfSets",
        "normalized": "MultiMap a b-\u003eMap a(Set b)",
        "package": "multimap",
        "partial": "Map Of Sets",
        "signature": "MultiMap k a-\u003eMap k(Set a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multimap/docs/Data-SetMap.html#",
      "description": {
        "fct-module": "Data.SetMap",
        "fct-package": "multimap",
        "fct-signature": "module",
        "fct-source": "src/Data-SetMap.html",
        "fct-type": "module",
        "title": "SetMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Data SetMap",
        "module": "Data.SetMap",
        "name": "SetMap",
        "normalized": "",
        "package": "multimap",
        "partial": "Set Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multimap/docs/Data-SetMap.html#t:SetMap",
      "description": {
        "fct-descr": "\u003cp\u003eA SetMap with keys \u003ccode\u003ek\u003c/code\u003e and values \u003ccode\u003ev\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.SetMap",
        "fct-package": "multimap",
        "fct-signature": "data",
        "fct-source": "src/Data-SetMap.html#SetMap",
        "fct-type": "data",
        "title": "SetMap"
      },
      "index": {
        "description": "SetMap with keys and values",
        "hierarchy": "Data SetMap",
        "module": "Data.SetMap",
        "name": "SetMap",
        "normalized": "",
        "package": "multimap",
        "partial": "Set Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multimap/docs/Data-SetMap.html#v:-33-",
      "description": {
        "fct-descr": "\u003cp\u003eAs \u003ccode\u003eflip lookup\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.SetMap",
        "fct-package": "multimap",
        "fct-signature": "SetMap k a -\u003e k -\u003e Set a",
        "fct-source": "src/Data-SetMap.html#%21",
        "fct-type": "function",
        "title": "(!)"
      },
      "index": {
        "description": "As flip lookup",
        "hierarchy": "Data SetMap",
        "module": "Data.SetMap",
        "name": "(!) !",
        "normalized": "SetMap a b-\u003ea-\u003eSet b",
        "package": "multimap",
        "partial": "",
        "signature": "SetMap k a-\u003ek-\u003eSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multimap/docs/Data-SetMap.html#v:delete",
      "description": {
        "fct-descr": "\u003cp\u003eDelete a key and all its values from the map.\n\u003c/p\u003e",
        "fct-module": "Data.SetMap",
        "fct-package": "multimap",
        "fct-signature": "k -\u003e SetMap k a -\u003e SetMap k a",
        "fct-source": "src/Data-SetMap.html#delete",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "Delete key and all its values from the map",
        "hierarchy": "Data SetMap",
        "module": "Data.SetMap",
        "name": "delete",
        "normalized": "a-\u003eSetMap a b-\u003eSetMap a b",
        "package": "multimap",
        "partial": "",
        "signature": "k-\u003eSetMap k a-\u003eSetMap k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multimap/docs/Data-SetMap.html#v:elems",
      "description": {
        "fct-descr": "\u003cp\u003eReturn all elements of the multimap in the\n ascending order of their keys.\n\u003c/p\u003e\u003cp\u003eA list of lists is returned since a key can have\n multiple values. Use \u003ccode\u003e\u003ca\u003econcat\u003c/a\u003e\u003c/code\u003e to flatten.\n\u003c/p\u003e",
        "fct-module": "Data.SetMap",
        "fct-package": "multimap",
        "fct-signature": "SetMap k a -\u003e [[a]]",
        "fct-source": "src/Data-SetMap.html#elems",
        "fct-type": "function",
        "title": "elems"
      },
      "index": {
        "description": "Return all elements of the multimap in the ascending order of their keys list of lists is returned since key can have multiple values Use concat to flatten",
        "hierarchy": "Data SetMap",
        "module": "Data.SetMap",
        "name": "elems",
        "normalized": "SetMap a b-\u003e[[b]]",
        "package": "multimap",
        "partial": "",
        "signature": "SetMap k a-\u003e[[a]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multimap/docs/Data-SetMap.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e The empty multimap.\n\u003c/p\u003e",
        "fct-module": "Data.SetMap",
        "fct-package": "multimap",
        "fct-signature": "SetMap k a",
        "fct-source": "src/Data-SetMap.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "The empty multimap",
        "hierarchy": "Data SetMap",
        "module": "Data.SetMap",
        "name": "empty",
        "normalized": "",
        "package": "multimap",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multimap/docs/Data-SetMap.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003eInsert a new key and value in the map.\n\u003c/p\u003e",
        "fct-module": "Data.SetMap",
        "fct-package": "multimap",
        "fct-signature": "k -\u003e a -\u003e SetMap k a -\u003e SetMap k a",
        "fct-source": "src/Data-SetMap.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "Insert new key and value in the map",
        "hierarchy": "Data SetMap",
        "module": "Data.SetMap",
        "name": "insert",
        "normalized": "a-\u003eb-\u003eSetMap a b-\u003eSetMap a b",
        "package": "multimap",
        "partial": "",
        "signature": "k-\u003ea-\u003eSetMap k a-\u003eSetMap k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multimap/docs/Data-SetMap.html#v:keys",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n).\u003c/em\u003e Return all keys of the multimap in ascending order.\n\u003c/p\u003e",
        "fct-module": "Data.SetMap",
        "fct-package": "multimap",
        "fct-signature": "SetMap k a -\u003e [k]",
        "fct-source": "src/Data-SetMap.html#keys",
        "fct-type": "function",
        "title": "keys"
      },
      "index": {
        "description": "Return all keys of the multimap in ascending order",
        "hierarchy": "Data SetMap",
        "module": "Data.SetMap",
        "name": "keys",
        "normalized": "SetMap a b-\u003e[a]",
        "package": "multimap",
        "partial": "",
        "signature": "SetMap k a-\u003e[k]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multimap/docs/Data-SetMap.html#v:lookup",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n).\u003c/em\u003e Lookup the value at a key in the map.\n\u003c/p\u003e\u003cp\u003eThe function will return the corrsponding values as a List, or the\n empty list if no values are associated witht the given key.\n\u003c/p\u003e",
        "fct-module": "Data.SetMap",
        "fct-package": "multimap",
        "fct-signature": "k -\u003e SetMap k a -\u003e Set a",
        "fct-source": "src/Data-SetMap.html#lookup",
        "fct-type": "function",
        "title": "lookup"
      },
      "index": {
        "description": "log Lookup the value at key in the map The function will return the corrsponding values as List or the empty list if no values are associated witht the given key",
        "hierarchy": "Data SetMap",
        "module": "Data.SetMap",
        "name": "lookup",
        "normalized": "a-\u003eSetMap a b-\u003eSet b",
        "package": "multimap",
        "partial": "",
        "signature": "k-\u003eSetMap k a-\u003eSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multimap/docs/Data-SetMap.html#v:map",
      "description": {
        "fct-descr": "\u003cp\u003eMap a function over all values in the map.\n\u003c/p\u003e",
        "fct-module": "Data.SetMap",
        "fct-package": "multimap",
        "fct-signature": "(a -\u003e b) -\u003e SetMap k a -\u003e SetMap k b",
        "fct-source": "src/Data-SetMap.html#map",
        "fct-type": "function",
        "title": "map"
      },
      "index": {
        "description": "Map function over all values in the map",
        "hierarchy": "Data SetMap",
        "module": "Data.SetMap",
        "name": "map",
        "normalized": "(a-\u003eb)-\u003eSetMap c a-\u003eSetMap c b",
        "package": "multimap",
        "partial": "",
        "signature": "(a-\u003eb)-\u003eSetMap k a-\u003eSetMap k b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multimap/docs/Data-SetMap.html#v:member",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n).\u003c/em\u003e Is the key a member of the multimap?\n\u003c/p\u003e",
        "fct-module": "Data.SetMap",
        "fct-package": "multimap",
        "fct-signature": "SetMap k a -\u003e k -\u003e Bool",
        "fct-source": "src/Data-SetMap.html#member",
        "fct-type": "function",
        "title": "member"
      },
      "index": {
        "description": "log Is the key member of the multimap",
        "hierarchy": "Data SetMap",
        "module": "Data.SetMap",
        "name": "member",
        "normalized": "SetMap a b-\u003ea-\u003eBool",
        "package": "multimap",
        "partial": "",
        "signature": "SetMap k a-\u003ek-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multimap/docs/Data-SetMap.html#v:notMember",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n).\u003c/em\u003e Is the key not a member of the multimap?\n\u003c/p\u003e",
        "fct-module": "Data.SetMap",
        "fct-package": "multimap",
        "fct-signature": "SetMap k a -\u003e k -\u003e Bool",
        "fct-source": "src/Data-SetMap.html#notMember",
        "fct-type": "function",
        "title": "notMember"
      },
      "index": {
        "description": "log Is the key not member of the multimap",
        "hierarchy": "Data SetMap",
        "module": "Data.SetMap",
        "name": "notMember",
        "normalized": "SetMap a b-\u003ea-\u003eBool",
        "package": "multimap",
        "partial": "Member",
        "signature": "SetMap k a-\u003ek-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multimap/docs/Data-SetMap.html#v:null",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e Check whether the multimap is empty or not.\n\u003c/p\u003e",
        "fct-module": "Data.SetMap",
        "fct-package": "multimap",
        "fct-signature": "SetMap k a -\u003e Bool",
        "fct-source": "src/Data-SetMap.html#null",
        "fct-type": "function",
        "title": "null"
      },
      "index": {
        "description": "Check whether the multimap is empty or not",
        "hierarchy": "Data SetMap",
        "module": "Data.SetMap",
        "name": "null",
        "normalized": "SetMap a b-\u003eBool",
        "package": "multimap",
        "partial": "",
        "signature": "SetMap k a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multimap/docs/Data-SetMap.html#v:numKeys",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e The number of keys in the multimap.\n\u003c/p\u003e\u003cp\u003eAs this is a multimap, the number of keys is not\n necessarily equal to the number of values.\n\u003c/p\u003e",
        "fct-module": "Data.SetMap",
        "fct-package": "multimap",
        "fct-signature": "SetMap k a -\u003e Word32",
        "fct-source": "src/Data-SetMap.html#numKeys",
        "fct-type": "function",
        "title": "numKeys"
      },
      "index": {
        "description": "The number of keys in the multimap As this is multimap the number of keys is not necessarily equal to the number of values",
        "hierarchy": "Data SetMap",
        "module": "Data.SetMap",
        "name": "numKeys",
        "normalized": "SetMap a b-\u003eWord",
        "package": "multimap",
        "partial": "Keys",
        "signature": "SetMap k a-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multimap/docs/Data-SetMap.html#v:numValues",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e The number of values in the multimap.\n\u003c/p\u003e\u003cp\u003eAs this is a multimap, the number of keys is not\n necessarily equal to the number of values.\n\u003c/p\u003e",
        "fct-module": "Data.SetMap",
        "fct-package": "multimap",
        "fct-signature": "SetMap k a -\u003e Word32",
        "fct-source": "src/Data-SetMap.html#numValues",
        "fct-type": "function",
        "title": "numValues"
      },
      "index": {
        "description": "The number of values in the multimap As this is multimap the number of keys is not necessarily equal to the number of values",
        "hierarchy": "Data SetMap",
        "module": "Data.SetMap",
        "name": "numValues",
        "normalized": "SetMap a b-\u003eWord",
        "package": "multimap",
        "partial": "Values",
        "signature": "SetMap k a-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multimap/docs/Data-SetMap.html#v:size",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e The number of elements in the multimap.\n\u003c/p\u003e",
        "fct-module": "Data.SetMap",
        "fct-package": "multimap",
        "fct-signature": "SetMap k a -\u003e Int",
        "fct-source": "src/Data-SetMap.html#size",
        "fct-type": "function",
        "title": "size"
      },
      "index": {
        "description": "The number of elements in the multimap",
        "hierarchy": "Data SetMap",
        "module": "Data.SetMap",
        "name": "size",
        "normalized": "SetMap a b-\u003eInt",
        "package": "multimap",
        "partial": "",
        "signature": "SetMap k a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multimap/docs/Data-SetMap.html#v:toMap",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e Return the map of sets.\n\u003c/p\u003e",
        "fct-module": "Data.SetMap",
        "fct-package": "multimap",
        "fct-signature": "SetMap k a -\u003e Map k (Set a)",
        "fct-source": "src/Data-SetMap.html#toMap",
        "fct-type": "function",
        "title": "toMap"
      },
      "index": {
        "description": "Return the map of sets",
        "hierarchy": "Data SetMap",
        "module": "Data.SetMap",
        "name": "toMap",
        "normalized": "SetMap a b-\u003eMap a(Set b)",
        "package": "multimap",
        "partial": "Map",
        "signature": "SetMap k a-\u003eMap k(Set a)"
      }
    }
  }
]