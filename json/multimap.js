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
        "word": "multimap"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA very simple MultiMap, based on \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e from the containers package.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.MultiMap",
          "name": "MultiMap",
          "package": "multimap",
          "source": "src/Data-MultiMap.html",
          "type": "module"
        },
        "index": {
          "description": "very simple MultiMap based on Map from the containers package",
          "hierarchy": "Data MultiMap",
          "module": "Data.MultiMap",
          "name": "MultiMap",
          "package": "multimap",
          "partial": "Multi Map",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/multimap/docs/Data-MultiMap.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA MultiMap with keys \u003ccode\u003ek\u003c/code\u003e and values \u003ccode\u003ev\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eA key can have multiple values (but not zero).\n The same value can be added multiple times (thus no\n constraints are ever imposed on \u003ccode\u003ev\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eInternally this is simply a \u003ccode\u003eMap k [v]\u003c/code\u003e.\n See \u003ccode\u003e\u003ca\u003etoMap\u003c/a\u003e\u003c/code\u003e for accessing the underlying \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.MultiMap",
          "name": "MultiMap",
          "package": "multimap",
          "source": "src/Data-MultiMap.html#MultiMap",
          "type": "data"
        },
        "index": {
          "description": "MultiMap with keys and values key can have multiple values but not zero The same value can be added multiple times thus no constraints are ever imposed on Internally this is simply Map See toMap for accessing the underlying Map",
          "hierarchy": "Data MultiMap",
          "module": "Data.MultiMap",
          "name": "MultiMap",
          "package": "multimap",
          "partial": "Multi Map",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/multimap/docs/Data-MultiMap.html#t:MultiMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs \u003ccode\u003eflip lookup\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.MultiMap",
          "name": "(!)",
          "package": "multimap",
          "signature": "MultiMap k a -\u003e k -\u003e [a]",
          "source": "src/Data-MultiMap.html#%21",
          "type": "function"
        },
        "index": {
          "description": "As flip lookup",
          "hierarchy": "Data MultiMap",
          "module": "Data.MultiMap",
          "name": "(!) !",
          "normalized": "MultiMap a b-\u003ea-\u003e[b]",
          "package": "multimap",
          "signature": "MultiMap k a-\u003ek-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multimap/docs/Data-MultiMap.html#v:-33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n).\u003c/em\u003e Return all key/value pairs in the multimap\n in ascending key order.\n\u003c/p\u003e",
          "module": "Data.MultiMap",
          "name": "assocs",
          "package": "multimap",
          "signature": "MultiMap k a -\u003e [(k, [a])]",
          "source": "src/Data-MultiMap.html#assocs",
          "type": "function"
        },
        "index": {
          "description": "Return all key value pairs in the multimap in ascending key order",
          "hierarchy": "Data MultiMap",
          "module": "Data.MultiMap",
          "name": "assocs",
          "normalized": "MultiMap a b-\u003e[(a,[b])]",
          "package": "multimap",
          "signature": "MultiMap k a-\u003e[(k,[a])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multimap/docs/Data-MultiMap.html#v:assocs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n).\u003c/em\u003e Delete a key and all its values from the map.\n\u003c/p\u003e",
          "module": "Data.MultiMap",
          "name": "delete",
          "package": "multimap",
          "signature": "k -\u003e MultiMap k a -\u003e MultiMap k a",
          "source": "src/Data-MultiMap.html#delete",
          "type": "function"
        },
        "index": {
          "description": "log Delete key and all its values from the map",
          "hierarchy": "Data MultiMap",
          "module": "Data.MultiMap",
          "name": "delete",
          "normalized": "a-\u003eMultiMap a b-\u003eMultiMap a b",
          "package": "multimap",
          "signature": "k-\u003eMultiMap k a-\u003eMultiMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multimap/docs/Data-MultiMap.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n).\u003c/em\u003e Return all elements of the multimap in the\n ascending order of their keys.\n\u003c/p\u003e\u003cp\u003eA list of lists is returned since a key can have\n multiple values. Use \u003ccode\u003e\u003ca\u003econcat\u003c/a\u003e\u003c/code\u003e to flatten.\n\u003c/p\u003e",
          "module": "Data.MultiMap",
          "name": "elems",
          "package": "multimap",
          "signature": "MultiMap k a -\u003e [[a]]",
          "source": "src/Data-MultiMap.html#elems",
          "type": "function"
        },
        "index": {
          "description": "Return all elements of the multimap in the ascending order of their keys list of lists is returned since key can have multiple values Use concat to flatten",
          "hierarchy": "Data MultiMap",
          "module": "Data.MultiMap",
          "name": "elems",
          "normalized": "MultiMap a b-\u003e[[b]]",
          "package": "multimap",
          "signature": "MultiMap k a-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multimap/docs/Data-MultiMap.html#v:elems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e The empty multimap.\n\u003c/p\u003e",
          "module": "Data.MultiMap",
          "name": "empty",
          "package": "multimap",
          "signature": "MultiMap k a",
          "source": "src/Data-MultiMap.html#empty",
          "type": "function"
        },
        "index": {
          "description": "The empty multimap",
          "hierarchy": "Data MultiMap",
          "module": "Data.MultiMap",
          "name": "empty",
          "package": "multimap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multimap/docs/Data-MultiMap.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e Find the maximal key of the multimap.\n\u003c/p\u003e",
          "module": "Data.MultiMap",
          "name": "findMax",
          "package": "multimap",
          "signature": "MultiMap k a -\u003e Maybe k",
          "source": "src/Data-MultiMap.html#findMax",
          "type": "function"
        },
        "index": {
          "description": "log Find the maximal key of the multimap",
          "hierarchy": "Data MultiMap",
          "module": "Data.MultiMap",
          "name": "findMax",
          "normalized": "MultiMap a b-\u003eMaybe a",
          "package": "multimap",
          "partial": "Max",
          "signature": "MultiMap k a-\u003eMaybe k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multimap/docs/Data-MultiMap.html#v:findMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e Find the maximal key and the values associated with it.\n\u003c/p\u003e",
          "module": "Data.MultiMap",
          "name": "findMaxWithValues",
          "package": "multimap",
          "signature": "MultiMap k a -\u003e Maybe (k, [a])",
          "source": "src/Data-MultiMap.html#findMaxWithValues",
          "type": "function"
        },
        "index": {
          "description": "log Find the maximal key and the values associated with it",
          "hierarchy": "Data MultiMap",
          "module": "Data.MultiMap",
          "name": "findMaxWithValues",
          "normalized": "MultiMap a b-\u003eMaybe(a,[b])",
          "package": "multimap",
          "partial": "Max With Values",
          "signature": "MultiMap k a-\u003eMaybe(k,[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multimap/docs/Data-MultiMap.html#v:findMaxWithValues"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e Find the minimal key of the multimap.\n\u003c/p\u003e",
          "module": "Data.MultiMap",
          "name": "findMin",
          "package": "multimap",
          "signature": "MultiMap k a -\u003e Maybe k",
          "source": "src/Data-MultiMap.html#findMin",
          "type": "function"
        },
        "index": {
          "description": "log Find the minimal key of the multimap",
          "hierarchy": "Data MultiMap",
          "module": "Data.MultiMap",
          "name": "findMin",
          "normalized": "MultiMap a b-\u003eMaybe a",
          "package": "multimap",
          "partial": "Min",
          "signature": "MultiMap k a-\u003eMaybe k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multimap/docs/Data-MultiMap.html#v:findMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e Find the minimal key and the values associated with it.\n\u003c/p\u003e",
          "module": "Data.MultiMap",
          "name": "findMinWithValues",
          "package": "multimap",
          "signature": "MultiMap k a -\u003e Maybe (k, [a])",
          "source": "src/Data-MultiMap.html#findMinWithValues",
          "type": "function"
        },
        "index": {
          "description": "log Find the minimal key and the values associated with it",
          "hierarchy": "Data MultiMap",
          "module": "Data.MultiMap",
          "name": "findMinWithValues",
          "normalized": "MultiMap a b-\u003eMaybe(a,[b])",
          "package": "multimap",
          "partial": "Min With Values",
          "signature": "MultiMap k a-\u003eMaybe(k,[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multimap/docs/Data-MultiMap.html#v:findMinWithValues"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFold the values in the map using the given left-associative binary operator.\n\u003c/p\u003e",
          "module": "Data.MultiMap",
          "name": "foldl",
          "package": "multimap",
          "signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e MultiMap k b -\u003e a",
          "source": "src/Data-MultiMap.html#foldl",
          "type": "function"
        },
        "index": {
          "description": "Fold the values in the map using the given left-associative binary operator",
          "hierarchy": "Data MultiMap",
          "module": "Data.MultiMap",
          "name": "foldl",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eMultiMap c b-\u003ea",
          "package": "multimap",
          "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003eMultiMap k b-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multimap/docs/Data-MultiMap.html#v:foldl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n).\u003c/em\u003e Fold the keys and values in the map using the given left-associative\n binary operator, taking into account not only the value but also the key.\n\u003c/p\u003e",
          "module": "Data.MultiMap",
          "name": "foldlWithKey",
          "package": "multimap",
          "signature": "(a -\u003e k -\u003e b -\u003e a) -\u003e a -\u003e MultiMap k b -\u003e a",
          "source": "src/Data-MultiMap.html#foldlWithKey",
          "type": "function"
        },
        "index": {
          "description": "Fold the keys and values in the map using the given left-associative binary operator taking into account not only the value but also the key",
          "hierarchy": "Data MultiMap",
          "module": "Data.MultiMap",
          "name": "foldlWithKey",
          "normalized": "(a-\u003eb-\u003ec-\u003ea)-\u003ea-\u003eMultiMap b c-\u003ea",
          "package": "multimap",
          "partial": "With Key",
          "signature": "(a-\u003ek-\u003eb-\u003ea)-\u003ea-\u003eMultiMap k b-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multimap/docs/Data-MultiMap.html#v:foldlWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFold the values in the map using the given right-associative binary operator.\n\u003c/p\u003e",
          "module": "Data.MultiMap",
          "name": "foldr",
          "package": "multimap",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e MultiMap k a -\u003e b",
          "source": "src/Data-MultiMap.html#foldr",
          "type": "function"
        },
        "index": {
          "description": "Fold the values in the map using the given right-associative binary operator",
          "hierarchy": "Data MultiMap",
          "module": "Data.MultiMap",
          "name": "foldr",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eMultiMap c a-\u003eb",
          "package": "multimap",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eMultiMap k a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multimap/docs/Data-MultiMap.html#v:foldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n).\u003c/em\u003e Fold the keys and values in the map using the given right-associative\n binary operator, taking into account not only the value but also the key.\n\u003c/p\u003e",
          "module": "Data.MultiMap",
          "name": "foldrWithKey",
          "package": "multimap",
          "signature": "(k -\u003e a -\u003e b -\u003e b) -\u003e b -\u003e MultiMap k a -\u003e b",
          "source": "src/Data-MultiMap.html#foldrWithKey",
          "type": "function"
        },
        "index": {
          "description": "Fold the keys and values in the map using the given right-associative binary operator taking into account not only the value but also the key",
          "hierarchy": "Data MultiMap",
          "module": "Data.MultiMap",
          "name": "foldrWithKey",
          "normalized": "(a-\u003eb-\u003ec-\u003ec)-\u003ec-\u003eMultiMap a b-\u003ec",
          "package": "multimap",
          "partial": "With Key",
          "signature": "(k-\u003ea-\u003eb-\u003eb)-\u003eb-\u003eMultiMap k a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multimap/docs/Data-MultiMap.html#v:foldrWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n*log n)\u003c/em\u003e Create a multimap from a list of key/value pairs.\n\u003c/p\u003e\u003cpre\u003e fromList xs == foldr (uncurry insert) empty\n\u003c/pre\u003e",
          "module": "Data.MultiMap",
          "name": "fromList",
          "package": "multimap",
          "signature": "[(k, a)] -\u003e MultiMap k a",
          "source": "src/Data-MultiMap.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "log Create multimap from list of key value pairs fromList xs foldr uncurry insert empty",
          "hierarchy": "Data MultiMap",
          "module": "Data.MultiMap",
          "name": "fromList",
          "normalized": "[(a,b)]-\u003eMultiMap a b",
          "package": "multimap",
          "partial": "List",
          "signature": "[(k,a)]-\u003eMultiMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multimap/docs/Data-MultiMap.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurns a map of lists into a multimap.\n\u003c/p\u003e",
          "module": "Data.MultiMap",
          "name": "fromMap",
          "package": "multimap",
          "signature": "Map k [a] -\u003e MultiMap k a",
          "source": "src/Data-MultiMap.html#fromMap",
          "type": "function"
        },
        "index": {
          "description": "Turns map of lists into multimap",
          "hierarchy": "Data MultiMap",
          "module": "Data.MultiMap",
          "name": "fromMap",
          "normalized": "Map a[b]-\u003eMultiMap a b",
          "package": "multimap",
          "partial": "Map",
          "signature": "Map k[a]-\u003eMultiMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multimap/docs/Data-MultiMap.html#v:fromMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n).\u003c/em\u003e Insert a new key and value in the map.\n\u003c/p\u003e",
          "module": "Data.MultiMap",
          "name": "insert",
          "package": "multimap",
          "signature": "k -\u003e a -\u003e MultiMap k a -\u003e MultiMap k a",
          "source": "src/Data-MultiMap.html#insert",
          "type": "function"
        },
        "index": {
          "description": "log Insert new key and value in the map",
          "hierarchy": "Data MultiMap",
          "module": "Data.MultiMap",
          "name": "insert",
          "normalized": "a-\u003eb-\u003eMultiMap a b-\u003eMultiMap a b",
          "package": "multimap",
          "signature": "k-\u003ea-\u003eMultiMap k a-\u003eMultiMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multimap/docs/Data-MultiMap.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n).\u003c/em\u003e Return all keys of the multimap in ascending order.\n\u003c/p\u003e",
          "module": "Data.MultiMap",
          "name": "keys",
          "package": "multimap",
          "signature": "MultiMap k a -\u003e [k]",
          "source": "src/Data-MultiMap.html#keys",
          "type": "function"
        },
        "index": {
          "description": "Return all keys of the multimap in ascending order",
          "hierarchy": "Data MultiMap",
          "module": "Data.MultiMap",
          "name": "keys",
          "normalized": "MultiMap a b-\u003e[a]",
          "package": "multimap",
          "signature": "MultiMap k a-\u003e[k]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multimap/docs/Data-MultiMap.html#v:keys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n).\u003c/em\u003e The set of all keys of the multimap.\n\u003c/p\u003e",
          "module": "Data.MultiMap",
          "name": "keysSet",
          "package": "multimap",
          "signature": "MultiMap k a -\u003e Set k",
          "source": "src/Data-MultiMap.html#keysSet",
          "type": "function"
        },
        "index": {
          "description": "The set of all keys of the multimap",
          "hierarchy": "Data MultiMap",
          "module": "Data.MultiMap",
          "name": "keysSet",
          "normalized": "MultiMap a b-\u003eSet a",
          "package": "multimap",
          "partial": "Set",
          "signature": "MultiMap k a-\u003eSet k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multimap/docs/Data-MultiMap.html#v:keysSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n).\u003c/em\u003e Lookup the value at a key in the map.\n\u003c/p\u003e\u003cp\u003eThe function will return the corrsponding values as a List, or the\n empty list if no values are associated witht the given key.\n\u003c/p\u003e",
          "module": "Data.MultiMap",
          "name": "lookup",
          "package": "multimap",
          "signature": "k -\u003e MultiMap k a -\u003e [a]",
          "source": "src/Data-MultiMap.html#lookup",
          "type": "function"
        },
        "index": {
          "description": "log Lookup the value at key in the map The function will return the corrsponding values as List or the empty list if no values are associated witht the given key",
          "hierarchy": "Data MultiMap",
          "module": "Data.MultiMap",
          "name": "lookup",
          "normalized": "a-\u003eMultiMap a b-\u003e[b]",
          "package": "multimap",
          "signature": "k-\u003eMultiMap k a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multimap/docs/Data-MultiMap.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a function over all values in the map.\n\u003c/p\u003e",
          "module": "Data.MultiMap",
          "name": "map",
          "package": "multimap",
          "signature": "(a -\u003e b) -\u003e MultiMap k a -\u003e MultiMap k b",
          "source": "src/Data-MultiMap.html#map",
          "type": "function"
        },
        "index": {
          "description": "Map function over all values in the map",
          "hierarchy": "Data MultiMap",
          "module": "Data.MultiMap",
          "name": "map",
          "normalized": "(a-\u003eb)-\u003eMultiMap c a-\u003eMultiMap c b",
          "package": "multimap",
          "signature": "(a-\u003eb)-\u003eMultiMap k a-\u003eMultiMap k b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multimap/docs/Data-MultiMap.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emapKeys f s is the multimap obtained by applying f to each key of s.\n\u003c/p\u003e",
          "module": "Data.MultiMap",
          "name": "mapKeys",
          "package": "multimap",
          "signature": "(k1 -\u003e k2) -\u003e MultiMap k1 a -\u003e MultiMap k2 a",
          "source": "src/Data-MultiMap.html#mapKeys",
          "type": "function"
        },
        "index": {
          "description": "mapKeys is the multimap obtained by applying to each key of",
          "hierarchy": "Data MultiMap",
          "module": "Data.MultiMap",
          "name": "mapKeys",
          "normalized": "(a-\u003ea)-\u003eMultiMap a b-\u003eMultiMap a b",
          "package": "multimap",
          "partial": "Keys",
          "signature": "(k-\u003ek)-\u003eMultiMap k a-\u003eMultiMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multimap/docs/Data-MultiMap.html#v:mapKeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a function over all key/value pairs in the map.\n\u003c/p\u003e",
          "module": "Data.MultiMap",
          "name": "mapWithKey",
          "package": "multimap",
          "signature": "(k -\u003e a -\u003e b) -\u003e MultiMap k a -\u003e MultiMap k b",
          "source": "src/Data-MultiMap.html#mapWithKey",
          "type": "function"
        },
        "index": {
          "description": "Map function over all key value pairs in the map",
          "hierarchy": "Data MultiMap",
          "module": "Data.MultiMap",
          "name": "mapWithKey",
          "normalized": "(a-\u003eb-\u003ec)-\u003eMultiMap a b-\u003eMultiMap a c",
          "package": "multimap",
          "partial": "With Key",
          "signature": "(k-\u003ea-\u003eb)-\u003eMultiMap k a-\u003eMultiMap k b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multimap/docs/Data-MultiMap.html#v:mapWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n).\u003c/em\u003e Is the key a member of the multimap?\n\u003c/p\u003e",
          "module": "Data.MultiMap",
          "name": "member",
          "package": "multimap",
          "signature": "MultiMap k a -\u003e k -\u003e Bool",
          "source": "src/Data-MultiMap.html#member",
          "type": "function"
        },
        "index": {
          "description": "log Is the key member of the multimap",
          "hierarchy": "Data MultiMap",
          "module": "Data.MultiMap",
          "name": "member",
          "normalized": "MultiMap a b-\u003ea-\u003eBool",
          "package": "multimap",
          "signature": "MultiMap k a-\u003ek-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multimap/docs/Data-MultiMap.html#v:member"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n).\u003c/em\u003e Is the key not a member of the multimap?\n\u003c/p\u003e",
          "module": "Data.MultiMap",
          "name": "notMember",
          "package": "multimap",
          "signature": "MultiMap k a -\u003e k -\u003e Bool",
          "source": "src/Data-MultiMap.html#notMember",
          "type": "function"
        },
        "index": {
          "description": "log Is the key not member of the multimap",
          "hierarchy": "Data MultiMap",
          "module": "Data.MultiMap",
          "name": "notMember",
          "normalized": "MultiMap a b-\u003ea-\u003eBool",
          "package": "multimap",
          "partial": "Member",
          "signature": "MultiMap k a-\u003ek-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multimap/docs/Data-MultiMap.html#v:notMember"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e Check whether the multimap is empty or not.\n\u003c/p\u003e",
          "module": "Data.MultiMap",
          "name": "null",
          "package": "multimap",
          "signature": "MultiMap k a -\u003e Bool",
          "source": "src/Data-MultiMap.html#null",
          "type": "function"
        },
        "index": {
          "description": "Check whether the multimap is empty or not",
          "hierarchy": "Data MultiMap",
          "module": "Data.MultiMap",
          "name": "null",
          "normalized": "MultiMap a b-\u003eBool",
          "package": "multimap",
          "signature": "MultiMap k a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multimap/docs/Data-MultiMap.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e The number of keys in the multimap.\n\u003c/p\u003e\u003cp\u003eAs this is a multimap, the number of keys is not\n necessarily equal to the number of values.\n\u003c/p\u003e",
          "module": "Data.MultiMap",
          "name": "numKeys",
          "package": "multimap",
          "signature": "MultiMap k a -\u003e Word32",
          "source": "src/Data-MultiMap.html#numKeys",
          "type": "function"
        },
        "index": {
          "description": "The number of keys in the multimap As this is multimap the number of keys is not necessarily equal to the number of values",
          "hierarchy": "Data MultiMap",
          "module": "Data.MultiMap",
          "name": "numKeys",
          "normalized": "MultiMap a b-\u003eWord",
          "package": "multimap",
          "partial": "Keys",
          "signature": "MultiMap k a-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multimap/docs/Data-MultiMap.html#v:numKeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e The number of values in the multimap.\n\u003c/p\u003e\u003cp\u003eAs this is a multimap, the number of keys is not\n necessarily equal to the number of values.\n\u003c/p\u003e",
          "module": "Data.MultiMap",
          "name": "numValues",
          "package": "multimap",
          "signature": "MultiMap k a -\u003e Word32",
          "source": "src/Data-MultiMap.html#numValues",
          "type": "function"
        },
        "index": {
          "description": "The number of values in the multimap As this is multimap the number of keys is not necessarily equal to the number of values",
          "hierarchy": "Data MultiMap",
          "module": "Data.MultiMap",
          "name": "numValues",
          "normalized": "MultiMap a b-\u003eWord",
          "package": "multimap",
          "partial": "Values",
          "signature": "MultiMap k a-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multimap/docs/Data-MultiMap.html#v:numValues"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e The number of elements in the multimap.\n\u003c/p\u003e",
          "module": "Data.MultiMap",
          "name": "size",
          "package": "multimap",
          "signature": "MultiMap k a -\u003e Int",
          "source": "src/Data-MultiMap.html#size",
          "type": "function"
        },
        "index": {
          "description": "The number of elements in the multimap",
          "hierarchy": "Data MultiMap",
          "module": "Data.MultiMap",
          "name": "size",
          "normalized": "MultiMap a b-\u003eInt",
          "package": "multimap",
          "signature": "MultiMap k a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multimap/docs/Data-MultiMap.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a flattened list of key/value pairs.\n\u003c/p\u003e",
          "module": "Data.MultiMap",
          "name": "toList",
          "package": "multimap",
          "signature": "MultiMap k a -\u003e [(k, a)]",
          "source": "src/Data-MultiMap.html#toList",
          "type": "function"
        },
        "index": {
          "description": "Return flattened list of key value pairs",
          "hierarchy": "Data MultiMap",
          "module": "Data.MultiMap",
          "name": "toList",
          "normalized": "MultiMap a b-\u003e[(a,b)]",
          "package": "multimap",
          "partial": "List",
          "signature": "MultiMap k a-\u003e[(k,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multimap/docs/Data-MultiMap.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e Return the map of lists.\n\u003c/p\u003e",
          "module": "Data.MultiMap",
          "name": "toMap",
          "package": "multimap",
          "signature": "MultiMap k a -\u003e Map k [a]",
          "source": "src/Data-MultiMap.html#toMap",
          "type": "function"
        },
        "index": {
          "description": "Return the map of lists",
          "hierarchy": "Data MultiMap",
          "module": "Data.MultiMap",
          "name": "toMap",
          "normalized": "MultiMap a b-\u003eMap a[b]",
          "package": "multimap",
          "partial": "Map",
          "signature": "MultiMap k a-\u003eMap k[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multimap/docs/Data-MultiMap.html#v:toMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e/O(k*m*log m) where k is the number of keys and m the\n maximum number of elements associated with a single key/\n\u003c/p\u003e",
          "module": "Data.MultiMap",
          "name": "toMapOfSets",
          "package": "multimap",
          "signature": "MultiMap k a -\u003e Map k (Set a)",
          "source": "src/Data-MultiMap.html#toMapOfSets",
          "type": "function"
        },
        "index": {
          "description": "log where is the number of keys and the maximum number of elements associated with single key",
          "hierarchy": "Data MultiMap",
          "module": "Data.MultiMap",
          "name": "toMapOfSets",
          "normalized": "MultiMap a b-\u003eMap a(Set b)",
          "package": "multimap",
          "partial": "Map Of Sets",
          "signature": "MultiMap k a-\u003eMap k(Set a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multimap/docs/Data-MultiMap.html#v:toMapOfSets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SetMap",
          "name": "SetMap",
          "package": "multimap",
          "source": "src/Data-SetMap.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data SetMap",
          "module": "Data.SetMap",
          "name": "SetMap",
          "package": "multimap",
          "partial": "Set Map",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/multimap/docs/Data-SetMap.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA SetMap with keys \u003ccode\u003ek\u003c/code\u003e and values \u003ccode\u003ev\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.SetMap",
          "name": "SetMap",
          "package": "multimap",
          "source": "src/Data-SetMap.html#SetMap",
          "type": "data"
        },
        "index": {
          "description": "SetMap with keys and values",
          "hierarchy": "Data SetMap",
          "module": "Data.SetMap",
          "name": "SetMap",
          "package": "multimap",
          "partial": "Set Map",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/multimap/docs/Data-SetMap.html#t:SetMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs \u003ccode\u003eflip lookup\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.SetMap",
          "name": "(!)",
          "package": "multimap",
          "signature": "SetMap k a -\u003e k -\u003e Set a",
          "source": "src/Data-SetMap.html#%21",
          "type": "function"
        },
        "index": {
          "description": "As flip lookup",
          "hierarchy": "Data SetMap",
          "module": "Data.SetMap",
          "name": "(!) !",
          "normalized": "SetMap a b-\u003ea-\u003eSet b",
          "package": "multimap",
          "signature": "SetMap k a-\u003ek-\u003eSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multimap/docs/Data-SetMap.html#v:-33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete a key and all its values from the map.\n\u003c/p\u003e",
          "module": "Data.SetMap",
          "name": "delete",
          "package": "multimap",
          "signature": "k -\u003e SetMap k a -\u003e SetMap k a",
          "source": "src/Data-SetMap.html#delete",
          "type": "function"
        },
        "index": {
          "description": "Delete key and all its values from the map",
          "hierarchy": "Data SetMap",
          "module": "Data.SetMap",
          "name": "delete",
          "normalized": "a-\u003eSetMap a b-\u003eSetMap a b",
          "package": "multimap",
          "signature": "k-\u003eSetMap k a-\u003eSetMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multimap/docs/Data-SetMap.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn all elements of the multimap in the\n ascending order of their keys.\n\u003c/p\u003e\u003cp\u003eA list of lists is returned since a key can have\n multiple values. Use \u003ccode\u003e\u003ca\u003econcat\u003c/a\u003e\u003c/code\u003e to flatten.\n\u003c/p\u003e",
          "module": "Data.SetMap",
          "name": "elems",
          "package": "multimap",
          "signature": "SetMap k a -\u003e [[a]]",
          "source": "src/Data-SetMap.html#elems",
          "type": "function"
        },
        "index": {
          "description": "Return all elements of the multimap in the ascending order of their keys list of lists is returned since key can have multiple values Use concat to flatten",
          "hierarchy": "Data SetMap",
          "module": "Data.SetMap",
          "name": "elems",
          "normalized": "SetMap a b-\u003e[[b]]",
          "package": "multimap",
          "signature": "SetMap k a-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multimap/docs/Data-SetMap.html#v:elems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e The empty multimap.\n\u003c/p\u003e",
          "module": "Data.SetMap",
          "name": "empty",
          "package": "multimap",
          "signature": "SetMap k a",
          "source": "src/Data-SetMap.html#empty",
          "type": "function"
        },
        "index": {
          "description": "The empty multimap",
          "hierarchy": "Data SetMap",
          "module": "Data.SetMap",
          "name": "empty",
          "package": "multimap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multimap/docs/Data-SetMap.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert a new key and value in the map.\n\u003c/p\u003e",
          "module": "Data.SetMap",
          "name": "insert",
          "package": "multimap",
          "signature": "k -\u003e a -\u003e SetMap k a -\u003e SetMap k a",
          "source": "src/Data-SetMap.html#insert",
          "type": "function"
        },
        "index": {
          "description": "Insert new key and value in the map",
          "hierarchy": "Data SetMap",
          "module": "Data.SetMap",
          "name": "insert",
          "normalized": "a-\u003eb-\u003eSetMap a b-\u003eSetMap a b",
          "package": "multimap",
          "signature": "k-\u003ea-\u003eSetMap k a-\u003eSetMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multimap/docs/Data-SetMap.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n).\u003c/em\u003e Return all keys of the multimap in ascending order.\n\u003c/p\u003e",
          "module": "Data.SetMap",
          "name": "keys",
          "package": "multimap",
          "signature": "SetMap k a -\u003e [k]",
          "source": "src/Data-SetMap.html#keys",
          "type": "function"
        },
        "index": {
          "description": "Return all keys of the multimap in ascending order",
          "hierarchy": "Data SetMap",
          "module": "Data.SetMap",
          "name": "keys",
          "normalized": "SetMap a b-\u003e[a]",
          "package": "multimap",
          "signature": "SetMap k a-\u003e[k]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multimap/docs/Data-SetMap.html#v:keys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n).\u003c/em\u003e Lookup the value at a key in the map.\n\u003c/p\u003e\u003cp\u003eThe function will return the corrsponding values as a List, or the\n empty list if no values are associated witht the given key.\n\u003c/p\u003e",
          "module": "Data.SetMap",
          "name": "lookup",
          "package": "multimap",
          "signature": "k -\u003e SetMap k a -\u003e Set a",
          "source": "src/Data-SetMap.html#lookup",
          "type": "function"
        },
        "index": {
          "description": "log Lookup the value at key in the map The function will return the corrsponding values as List or the empty list if no values are associated witht the given key",
          "hierarchy": "Data SetMap",
          "module": "Data.SetMap",
          "name": "lookup",
          "normalized": "a-\u003eSetMap a b-\u003eSet b",
          "package": "multimap",
          "signature": "k-\u003eSetMap k a-\u003eSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multimap/docs/Data-SetMap.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a function over all values in the map.\n\u003c/p\u003e",
          "module": "Data.SetMap",
          "name": "map",
          "package": "multimap",
          "signature": "(a -\u003e b) -\u003e SetMap k a -\u003e SetMap k b",
          "source": "src/Data-SetMap.html#map",
          "type": "function"
        },
        "index": {
          "description": "Map function over all values in the map",
          "hierarchy": "Data SetMap",
          "module": "Data.SetMap",
          "name": "map",
          "normalized": "(a-\u003eb)-\u003eSetMap c a-\u003eSetMap c b",
          "package": "multimap",
          "signature": "(a-\u003eb)-\u003eSetMap k a-\u003eSetMap k b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multimap/docs/Data-SetMap.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n).\u003c/em\u003e Is the key a member of the multimap?\n\u003c/p\u003e",
          "module": "Data.SetMap",
          "name": "member",
          "package": "multimap",
          "signature": "SetMap k a -\u003e k -\u003e Bool",
          "source": "src/Data-SetMap.html#member",
          "type": "function"
        },
        "index": {
          "description": "log Is the key member of the multimap",
          "hierarchy": "Data SetMap",
          "module": "Data.SetMap",
          "name": "member",
          "normalized": "SetMap a b-\u003ea-\u003eBool",
          "package": "multimap",
          "signature": "SetMap k a-\u003ek-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multimap/docs/Data-SetMap.html#v:member"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n).\u003c/em\u003e Is the key not a member of the multimap?\n\u003c/p\u003e",
          "module": "Data.SetMap",
          "name": "notMember",
          "package": "multimap",
          "signature": "SetMap k a -\u003e k -\u003e Bool",
          "source": "src/Data-SetMap.html#notMember",
          "type": "function"
        },
        "index": {
          "description": "log Is the key not member of the multimap",
          "hierarchy": "Data SetMap",
          "module": "Data.SetMap",
          "name": "notMember",
          "normalized": "SetMap a b-\u003ea-\u003eBool",
          "package": "multimap",
          "partial": "Member",
          "signature": "SetMap k a-\u003ek-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multimap/docs/Data-SetMap.html#v:notMember"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e Check whether the multimap is empty or not.\n\u003c/p\u003e",
          "module": "Data.SetMap",
          "name": "null",
          "package": "multimap",
          "signature": "SetMap k a -\u003e Bool",
          "source": "src/Data-SetMap.html#null",
          "type": "function"
        },
        "index": {
          "description": "Check whether the multimap is empty or not",
          "hierarchy": "Data SetMap",
          "module": "Data.SetMap",
          "name": "null",
          "normalized": "SetMap a b-\u003eBool",
          "package": "multimap",
          "signature": "SetMap k a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multimap/docs/Data-SetMap.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e The number of keys in the multimap.\n\u003c/p\u003e\u003cp\u003eAs this is a multimap, the number of keys is not\n necessarily equal to the number of values.\n\u003c/p\u003e",
          "module": "Data.SetMap",
          "name": "numKeys",
          "package": "multimap",
          "signature": "SetMap k a -\u003e Word32",
          "source": "src/Data-SetMap.html#numKeys",
          "type": "function"
        },
        "index": {
          "description": "The number of keys in the multimap As this is multimap the number of keys is not necessarily equal to the number of values",
          "hierarchy": "Data SetMap",
          "module": "Data.SetMap",
          "name": "numKeys",
          "normalized": "SetMap a b-\u003eWord",
          "package": "multimap",
          "partial": "Keys",
          "signature": "SetMap k a-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multimap/docs/Data-SetMap.html#v:numKeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e The number of values in the multimap.\n\u003c/p\u003e\u003cp\u003eAs this is a multimap, the number of keys is not\n necessarily equal to the number of values.\n\u003c/p\u003e",
          "module": "Data.SetMap",
          "name": "numValues",
          "package": "multimap",
          "signature": "SetMap k a -\u003e Word32",
          "source": "src/Data-SetMap.html#numValues",
          "type": "function"
        },
        "index": {
          "description": "The number of values in the multimap As this is multimap the number of keys is not necessarily equal to the number of values",
          "hierarchy": "Data SetMap",
          "module": "Data.SetMap",
          "name": "numValues",
          "normalized": "SetMap a b-\u003eWord",
          "package": "multimap",
          "partial": "Values",
          "signature": "SetMap k a-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multimap/docs/Data-SetMap.html#v:numValues"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e The number of elements in the multimap.\n\u003c/p\u003e",
          "module": "Data.SetMap",
          "name": "size",
          "package": "multimap",
          "signature": "SetMap k a -\u003e Int",
          "source": "src/Data-SetMap.html#size",
          "type": "function"
        },
        "index": {
          "description": "The number of elements in the multimap",
          "hierarchy": "Data SetMap",
          "module": "Data.SetMap",
          "name": "size",
          "normalized": "SetMap a b-\u003eInt",
          "package": "multimap",
          "signature": "SetMap k a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multimap/docs/Data-SetMap.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e Return the map of sets.\n\u003c/p\u003e",
          "module": "Data.SetMap",
          "name": "toMap",
          "package": "multimap",
          "signature": "SetMap k a -\u003e Map k (Set a)",
          "source": "src/Data-SetMap.html#toMap",
          "type": "function"
        },
        "index": {
          "description": "Return the map of sets",
          "hierarchy": "Data SetMap",
          "module": "Data.SetMap",
          "name": "toMap",
          "normalized": "SetMap a b-\u003eMap a(Set b)",
          "package": "multimap",
          "partial": "Map",
          "signature": "SetMap k a-\u003eMap k(Set a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multimap/docs/Data-SetMap.html#v:toMap"
      }
    }
  ]
]