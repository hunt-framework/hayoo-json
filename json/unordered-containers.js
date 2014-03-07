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
        "word": "unordered-containers"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA map from \u003cem\u003ehashable\u003c/em\u003e keys to values.  A map cannot contain\n duplicate keys; each key can map to at most one value.  A \u003ccode\u003e\u003ca\u003eHashMap\u003c/a\u003e\u003c/code\u003e\n makes no guarantees as to the order of its elements.\n\u003c/p\u003e\u003cp\u003eThe implementation is based on \u003cem\u003ehash array mapped tries\u003c/em\u003e.  A\n \u003ccode\u003e\u003ca\u003eHashMap\u003c/a\u003e\u003c/code\u003e is often faster than other tree-based set types,\n especially when key comparison is expensive, as in the case of\n strings.\n\u003c/p\u003e\u003cp\u003eMany operations have a average-case complexity of \u003cem\u003eO(log n)\u003c/em\u003e.  The\n implementation uses a large base (i.e. 16) so in practice these\n operations are constant time.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.HashMap.Lazy",
          "name": "Lazy",
          "package": "unordered-containers",
          "source": "src/Data-HashMap-Lazy.html",
          "type": "module"
        },
        "index": {
          "description": "map from hashable keys to values map cannot contain duplicate keys each key can map to at most one value HashMap makes no guarantees as to the order of its elements The implementation is based on hash array mapped tries HashMap is often faster than other tree-based set types especially when key comparison is expensive as in the case of strings Many operations have average-case complexity of log The implementation uses large base i.e so in practice these operations are constant time",
          "hierarchy": "Data HashMap Lazy",
          "module": "Data.HashMap.Lazy",
          "name": "Lazy",
          "package": "unordered-containers",
          "partial": "Lazy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA map from keys to values.  A map cannot contain duplicate keys;\n each key can map to at most one value.\n\u003c/p\u003e",
          "module": "Data.HashMap.Lazy",
          "name": "HashMap",
          "package": "unordered-containers",
          "source": "src/Data-HashMap-Base.html#HashMap",
          "type": "data"
        },
        "index": {
          "description": "map from keys to values map cannot contain duplicate keys each key can map to at most one value",
          "hierarchy": "Data HashMap Lazy",
          "module": "Data.HashMap.Lazy",
          "name": "HashMap",
          "package": "unordered-containers",
          "partial": "Hash Map",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#t:HashMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e Return the value to which the specified key is mapped.\n Calls \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e if this map contains no mapping for the key.\n\u003c/p\u003e",
          "module": "[\"Data.HashMap.Lazy\",\"Data.HashMap.Strict\"]",
          "name": "(!)",
          "package": "unordered-containers",
          "signature": "HashMap k v -\u003e k -\u003e v",
          "source": "src/Data-HashMap-Base.html#%21",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#v:-33-\",\"http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Strict.html#v:-33-\"]"
        },
        "index": {
          "description": "log Return the value to which the specified key is mapped Calls error if this map contains no mapping for the key",
          "hierarchy": "Data HashMap Lazy",
          "module": "Data.HashMap.Lazy",
          "name": "(!) !",
          "normalized": "HashMap a b-\u003ea-\u003eb",
          "package": "unordered-containers",
          "signature": "HashMap k v-\u003ek-\u003ev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#v:-33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e Adjust the value tied to a given key in this map only\n if it is present. Otherwise, leave the map alone.\n\u003c/p\u003e",
          "module": "Data.HashMap.Lazy",
          "name": "adjust",
          "package": "unordered-containers",
          "signature": "(v -\u003e v) -\u003e k -\u003e HashMap k v -\u003e HashMap k v",
          "source": "src/Data-HashMap-Base.html#adjust",
          "type": "function"
        },
        "index": {
          "description": "log Adjust the value tied to given key in this map only if it is present Otherwise leave the map alone",
          "hierarchy": "Data HashMap Lazy",
          "module": "Data.HashMap.Lazy",
          "name": "adjust",
          "normalized": "(a-\u003ea)-\u003eb-\u003eHashMap b a-\u003eHashMap b a",
          "package": "unordered-containers",
          "signature": "(v-\u003ev)-\u003ek-\u003eHashMap k v-\u003eHashMap k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#v:adjust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e Remove the mapping for the specified key from this map\n if present.\n\u003c/p\u003e",
          "module": "[\"Data.HashMap.Lazy\",\"Data.HashMap.Strict\"]",
          "name": "delete",
          "package": "unordered-containers",
          "signature": "k -\u003e HashMap k v -\u003e HashMap k v",
          "source": "src/Data-HashMap-Base.html#delete",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#v:delete\",\"http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Strict.html#v:delete\"]"
        },
        "index": {
          "description": "log Remove the mapping for the specified key from this map if present",
          "hierarchy": "Data HashMap Lazy",
          "module": "Data.HashMap.Lazy",
          "name": "delete",
          "normalized": "a-\u003eHashMap a b-\u003eHashMap a b",
          "package": "unordered-containers",
          "signature": "k-\u003eHashMap k v-\u003eHashMap k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n*log m)\u003c/em\u003e Difference of two maps. Return elements of the first map\n not existing in the second.\n\u003c/p\u003e",
          "module": "[\"Data.HashMap.Lazy\",\"Data.HashMap.Strict\"]",
          "name": "difference",
          "package": "unordered-containers",
          "signature": "HashMap k v -\u003e HashMap k w -\u003e HashMap k v",
          "source": "src/Data-HashMap-Base.html#difference",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#v:difference\",\"http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Strict.html#v:difference\"]"
        },
        "index": {
          "description": "log Difference of two maps Return elements of the first map not existing in the second",
          "hierarchy": "Data HashMap Lazy",
          "module": "Data.HashMap.Lazy",
          "name": "difference",
          "normalized": "HashMap a b-\u003eHashMap a c-\u003eHashMap a b",
          "package": "unordered-containers",
          "signature": "HashMap k v-\u003eHashMap k w-\u003eHashMap k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#v:difference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Return a list of this map's values.  The list is produced\n lazily.\n\u003c/p\u003e",
          "module": "[\"Data.HashMap.Lazy\",\"Data.HashMap.Strict\"]",
          "name": "elems",
          "package": "unordered-containers",
          "signature": "HashMap k v -\u003e [v]",
          "source": "src/Data-HashMap-Base.html#elems",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#v:elems\",\"http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Strict.html#v:elems\"]"
        },
        "index": {
          "description": "Return list of this map values The list is produced lazily",
          "hierarchy": "Data HashMap Lazy",
          "module": "Data.HashMap.Lazy",
          "name": "elems",
          "normalized": "HashMap a b-\u003e[b]",
          "package": "unordered-containers",
          "signature": "HashMap k v-\u003e[v]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#v:elems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Construct an empty map.\n\u003c/p\u003e",
          "module": "[\"Data.HashMap.Lazy\",\"Data.HashMap.Strict\"]",
          "name": "empty",
          "package": "unordered-containers",
          "signature": "HashMap k v",
          "source": "src/Data-HashMap-Base.html#empty",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#v:empty\",\"http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Strict.html#v:empty\"]"
        },
        "index": {
          "description": "Construct an empty map",
          "hierarchy": "Data HashMap Lazy",
          "module": "Data.HashMap.Lazy",
          "name": "empty",
          "package": "unordered-containers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Filter this map by retaining only elements which values\n satisfy a predicate.\n\u003c/p\u003e",
          "module": "[\"Data.HashMap.Lazy\",\"Data.HashMap.Strict\"]",
          "name": "filter",
          "package": "unordered-containers",
          "signature": "(v -\u003e Bool) -\u003e HashMap k v -\u003e HashMap k v",
          "source": "src/Data-HashMap-Base.html#filter",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#v:filter\",\"http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Strict.html#v:filter\"]"
        },
        "index": {
          "description": "Filter this map by retaining only elements which values satisfy predicate",
          "hierarchy": "Data HashMap Lazy",
          "module": "Data.HashMap.Lazy",
          "name": "filter",
          "normalized": "(a-\u003eBool)-\u003eHashMap b a-\u003eHashMap b a",
          "package": "unordered-containers",
          "signature": "(v-\u003eBool)-\u003eHashMap k v-\u003eHashMap k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Filter this map by retaining only elements satisfying a\n predicate.\n\u003c/p\u003e",
          "module": "[\"Data.HashMap.Lazy\",\"Data.HashMap.Strict\"]",
          "name": "filterWithKey",
          "package": "unordered-containers",
          "signature": "(k -\u003e v -\u003e Bool) -\u003e HashMap k v -\u003e HashMap k v",
          "source": "src/Data-HashMap-Base.html#filterWithKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#v:filterWithKey\",\"http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Strict.html#v:filterWithKey\"]"
        },
        "index": {
          "description": "Filter this map by retaining only elements satisfying predicate",
          "hierarchy": "Data HashMap Lazy",
          "module": "Data.HashMap.Lazy",
          "name": "filterWithKey",
          "normalized": "(a-\u003eb-\u003eBool)-\u003eHashMap a b-\u003eHashMap a b",
          "package": "unordered-containers",
          "partial": "With Key",
          "signature": "(k-\u003ev-\u003eBool)-\u003eHashMap k v-\u003eHashMap k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#v:filterWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Reduce this map by applying a binary operator to all\n elements, using the given starting value (typically the\n left-identity of the operator).  Each application of the operator\n is evaluated before before using the result in the next\n application.  This function is strict in the starting value.\n\u003c/p\u003e",
          "module": "[\"Data.HashMap.Lazy\",\"Data.HashMap.Strict\"]",
          "name": "foldl'",
          "package": "unordered-containers",
          "signature": "(a -\u003e v -\u003e a) -\u003e a -\u003e HashMap k v -\u003e a",
          "source": "src/Data-HashMap-Base.html#foldl%27",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#v:foldl-39-\",\"http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Strict.html#v:foldl-39-\"]"
        },
        "index": {
          "description": "Reduce this map by applying binary operator to all elements using the given starting value typically the left-identity of the operator Each application of the operator is evaluated before before using the result in the next application This function is strict in the starting value",
          "hierarchy": "Data HashMap Lazy",
          "module": "Data.HashMap.Lazy",
          "name": "foldl'",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eHashMap c b-\u003ea",
          "package": "unordered-containers",
          "signature": "(a-\u003ev-\u003ea)-\u003ea-\u003eHashMap k v-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#v:foldl-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Reduce this map by applying a binary operator to all\n elements, using the given starting value (typically the\n left-identity of the operator).  Each application of the operator\n is evaluated before before using the result in the next\n application.  This function is strict in the starting value.\n\u003c/p\u003e",
          "module": "[\"Data.HashMap.Lazy\",\"Data.HashMap.Strict\"]",
          "name": "foldlWithKey'",
          "package": "unordered-containers",
          "signature": "(a -\u003e k -\u003e v -\u003e a) -\u003e a -\u003e HashMap k v -\u003e a",
          "source": "src/Data-HashMap-Base.html#foldlWithKey%27",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#v:foldlWithKey-39-\",\"http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Strict.html#v:foldlWithKey-39-\"]"
        },
        "index": {
          "description": "Reduce this map by applying binary operator to all elements using the given starting value typically the left-identity of the operator Each application of the operator is evaluated before before using the result in the next application This function is strict in the starting value",
          "hierarchy": "Data HashMap Lazy",
          "module": "Data.HashMap.Lazy",
          "name": "foldlWithKey'",
          "normalized": "(a-\u003eb-\u003ec-\u003ea)-\u003ea-\u003eHashMap b c-\u003ea",
          "package": "unordered-containers",
          "partial": "With Key'",
          "signature": "(a-\u003ek-\u003ev-\u003ea)-\u003ea-\u003eHashMap k v-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#v:foldlWithKey-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Reduce this map by applying a binary operator to all\n elements, using the given starting value (typically the\n right-identity of the operator).\n\u003c/p\u003e",
          "module": "[\"Data.HashMap.Lazy\",\"Data.HashMap.Strict\"]",
          "name": "foldr",
          "package": "unordered-containers",
          "signature": "(v -\u003e a -\u003e a) -\u003e a -\u003e HashMap k v -\u003e a",
          "source": "src/Data-HashMap-Base.html#foldr",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#v:foldr\",\"http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Strict.html#v:foldr\"]"
        },
        "index": {
          "description": "Reduce this map by applying binary operator to all elements using the given starting value typically the right-identity of the operator",
          "hierarchy": "Data HashMap Lazy",
          "module": "Data.HashMap.Lazy",
          "name": "foldr",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eHashMap c a-\u003eb",
          "package": "unordered-containers",
          "signature": "(v-\u003ea-\u003ea)-\u003ea-\u003eHashMap k v-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#v:foldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Reduce this map by applying a binary operator to all\n elements, using the given starting value (typically the\n right-identity of the operator).\n\u003c/p\u003e",
          "module": "[\"Data.HashMap.Lazy\",\"Data.HashMap.Strict\"]",
          "name": "foldrWithKey",
          "package": "unordered-containers",
          "signature": "(k -\u003e v -\u003e a -\u003e a) -\u003e a -\u003e HashMap k v -\u003e a",
          "source": "src/Data-HashMap-Base.html#foldrWithKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#v:foldrWithKey\",\"http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Strict.html#v:foldrWithKey\"]"
        },
        "index": {
          "description": "Reduce this map by applying binary operator to all elements using the given starting value typically the right-identity of the operator",
          "hierarchy": "Data HashMap Lazy",
          "module": "Data.HashMap.Lazy",
          "name": "foldrWithKey",
          "normalized": "(a-\u003eb-\u003ec-\u003ec)-\u003ec-\u003eHashMap a b-\u003ec",
          "package": "unordered-containers",
          "partial": "With Key",
          "signature": "(k-\u003ev-\u003ea-\u003ea)-\u003ea-\u003eHashMap k v-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#v:foldrWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Construct a map with the supplied mappings.  If the list\n contains duplicate mappings, the later mappings take precedence.\n\u003c/p\u003e",
          "module": "Data.HashMap.Lazy",
          "name": "fromList",
          "package": "unordered-containers",
          "signature": "[(k, v)] -\u003e HashMap k v",
          "source": "src/Data-HashMap-Base.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Construct map with the supplied mappings If the list contains duplicate mappings the later mappings take precedence",
          "hierarchy": "Data HashMap Lazy",
          "module": "Data.HashMap.Lazy",
          "name": "fromList",
          "normalized": "[(a,b)]-\u003eHashMap a b",
          "package": "unordered-containers",
          "partial": "List",
          "signature": "[(k,v)]-\u003eHashMap k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n*log n)\u003c/em\u003e Construct a map from a list of elements.  Uses\n the provided function to merge duplicate entries.\n\u003c/p\u003e",
          "module": "Data.HashMap.Lazy",
          "name": "fromListWith",
          "package": "unordered-containers",
          "signature": "(v -\u003e v -\u003e v) -\u003e [(k, v)] -\u003e HashMap k v",
          "source": "src/Data-HashMap-Base.html#fromListWith",
          "type": "function"
        },
        "index": {
          "description": "log Construct map from list of elements Uses the provided function to merge duplicate entries",
          "hierarchy": "Data HashMap Lazy",
          "module": "Data.HashMap.Lazy",
          "name": "fromListWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[(b,a)]-\u003eHashMap b a",
          "package": "unordered-containers",
          "partial": "List With",
          "signature": "(v-\u003ev-\u003ev)-\u003e[(k,v)]-\u003eHashMap k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#v:fromListWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e Associate the specified value with the specified\n key in this map.  If this map previously contained a mapping for\n the key, the old value is replaced.\n\u003c/p\u003e",
          "module": "Data.HashMap.Lazy",
          "name": "insert",
          "package": "unordered-containers",
          "signature": "k -\u003e v -\u003e HashMap k v -\u003e HashMap k v",
          "source": "src/Data-HashMap-Base.html#insert",
          "type": "function"
        },
        "index": {
          "description": "log Associate the specified value with the specified key in this map If this map previously contained mapping for the key the old value is replaced",
          "hierarchy": "Data HashMap Lazy",
          "module": "Data.HashMap.Lazy",
          "name": "insert",
          "normalized": "a-\u003eb-\u003eHashMap a b-\u003eHashMap a b",
          "package": "unordered-containers",
          "signature": "k-\u003ev-\u003eHashMap k v-\u003eHashMap k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e Associate the value with the key in this map.  If\n this map previously contained a mapping for the key, the old value\n is replaced by the result of applying the given function to the new\n and old value.  Example:\n\u003c/p\u003e\u003cpre\u003e insertWith f k v map\n   where f new old = new + old\n\u003c/pre\u003e",
          "module": "Data.HashMap.Lazy",
          "name": "insertWith",
          "package": "unordered-containers",
          "signature": "(v -\u003e v -\u003e v) -\u003e k -\u003e v -\u003e HashMap k v -\u003e HashMap k v",
          "source": "src/Data-HashMap-Base.html#insertWith",
          "type": "function"
        },
        "index": {
          "description": "log Associate the value with the key in this map If this map previously contained mapping for the key the old value is replaced by the result of applying the given function to the new and old value Example insertWith map where new old new old",
          "hierarchy": "Data HashMap Lazy",
          "module": "Data.HashMap.Lazy",
          "name": "insertWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003eb-\u003ea-\u003eHashMap b a-\u003eHashMap b a",
          "package": "unordered-containers",
          "partial": "With",
          "signature": "(v-\u003ev-\u003ev)-\u003ek-\u003ev-\u003eHashMap k v-\u003eHashMap k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#v:insertWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n*log m)\u003c/em\u003e Intersection of two maps. Return elements of the first\n map for keys existing in the second.\n\u003c/p\u003e",
          "module": "[\"Data.HashMap.Lazy\",\"Data.HashMap.Strict\"]",
          "name": "intersection",
          "package": "unordered-containers",
          "signature": "HashMap k v -\u003e HashMap k w -\u003e HashMap k v",
          "source": "src/Data-HashMap-Base.html#intersection",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#v:intersection\",\"http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Strict.html#v:intersection\"]"
        },
        "index": {
          "description": "log Intersection of two maps Return elements of the first map for keys existing in the second",
          "hierarchy": "Data HashMap Lazy",
          "module": "Data.HashMap.Lazy",
          "name": "intersection",
          "normalized": "HashMap a b-\u003eHashMap a c-\u003eHashMap a b",
          "package": "unordered-containers",
          "signature": "HashMap k v-\u003eHashMap k w-\u003eHashMap k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#v:intersection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e Intersection of two maps. If a key occurs in both maps\n the provided function is used to combine the values from the two\n maps.\n\u003c/p\u003e",
          "module": "Data.HashMap.Lazy",
          "name": "intersectionWith",
          "package": "unordered-containers",
          "signature": "(v1 -\u003e v2 -\u003e v3) -\u003e HashMap k v1 -\u003e HashMap k v2 -\u003e HashMap k v3",
          "source": "src/Data-HashMap-Base.html#intersectionWith",
          "type": "function"
        },
        "index": {
          "description": "Intersection of two maps If key occurs in both maps the provided function is used to combine the values from the two maps",
          "hierarchy": "Data HashMap Lazy",
          "module": "Data.HashMap.Lazy",
          "name": "intersectionWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003eHashMap b a-\u003eHashMap b a-\u003eHashMap b a",
          "package": "unordered-containers",
          "partial": "With",
          "signature": "(v-\u003ev-\u003ev)-\u003eHashMap k v-\u003eHashMap k v-\u003eHashMap k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#v:intersectionWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Return a list of this map's keys.  The list is produced\n lazily.\n\u003c/p\u003e",
          "module": "[\"Data.HashMap.Lazy\",\"Data.HashMap.Strict\"]",
          "name": "keys",
          "package": "unordered-containers",
          "signature": "HashMap k v -\u003e [k]",
          "source": "src/Data-HashMap-Base.html#keys",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#v:keys\",\"http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Strict.html#v:keys\"]"
        },
        "index": {
          "description": "Return list of this map keys The list is produced lazily",
          "hierarchy": "Data HashMap Lazy",
          "module": "Data.HashMap.Lazy",
          "name": "keys",
          "normalized": "HashMap a b-\u003e[a]",
          "package": "unordered-containers",
          "signature": "HashMap k v-\u003e[k]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#v:keys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e Return the value to which the specified key is mapped,\n or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if this map contains no mapping for the key.\n\u003c/p\u003e",
          "module": "[\"Data.HashMap.Lazy\",\"Data.HashMap.Strict\"]",
          "name": "lookup",
          "package": "unordered-containers",
          "signature": "k -\u003e HashMap k v -\u003e Maybe v",
          "source": "src/Data-HashMap-Base.html#lookup",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#v:lookup\",\"http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Strict.html#v:lookup\"]"
        },
        "index": {
          "description": "log Return the value to which the specified key is mapped or Nothing if this map contains no mapping for the key",
          "hierarchy": "Data HashMap Lazy",
          "module": "Data.HashMap.Lazy",
          "name": "lookup",
          "normalized": "a-\u003eHashMap a b-\u003eMaybe b",
          "package": "unordered-containers",
          "signature": "k-\u003eHashMap k v-\u003eMaybe v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e Return the value to which the specified key is mapped,\n or the default value if this map contains no mapping for the key.\n\u003c/p\u003e",
          "module": "[\"Data.HashMap.Lazy\",\"Data.HashMap.Strict\"]",
          "name": "lookupDefault",
          "package": "unordered-containers",
          "signature": "v-\u003e k-\u003e HashMap k v-\u003e v",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#v:lookupDefault\",\"http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Strict.html#v:lookupDefault\"]"
        },
        "index": {
          "description": "log Return the value to which the specified key is mapped or the default value if this map contains no mapping for the key",
          "hierarchy": "Data HashMap Lazy",
          "module": "Data.HashMap.Lazy",
          "name": "lookupDefault",
          "normalized": "a-\u003eb-\u003eHashMap b a-\u003ea",
          "package": "unordered-containers",
          "partial": "Default",
          "signature": "v-\u003ek-\u003eHashMap k v-\u003ev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#v:lookupDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HashMap.Lazy",
          "name": "map",
          "package": "unordered-containers",
          "signature": "(v1 -\u003e v2) -\u003e HashMap k v1 -\u003e HashMap k v2",
          "source": "src/Data-HashMap-Base.html#map",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HashMap Lazy",
          "module": "Data.HashMap.Lazy",
          "name": "map",
          "normalized": "(a-\u003ea)-\u003eHashMap b a-\u003eHashMap b a",
          "package": "unordered-containers",
          "signature": "(v-\u003ev)-\u003eHashMap k v-\u003eHashMap k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e Return \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the specified key is present in the\n map, \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e otherwise.\n\u003c/p\u003e",
          "module": "[\"Data.HashMap.Lazy\",\"Data.HashMap.Strict\"]",
          "name": "member",
          "package": "unordered-containers",
          "signature": "k -\u003e HashMap k a -\u003e Bool",
          "source": "src/Data-HashMap-Base.html#member",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#v:member\",\"http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Strict.html#v:member\"]"
        },
        "index": {
          "description": "log Return True if the specified key is present in the map False otherwise",
          "hierarchy": "Data HashMap Lazy",
          "module": "Data.HashMap.Lazy",
          "name": "member",
          "normalized": "a-\u003eHashMap a b-\u003eBool",
          "package": "unordered-containers",
          "signature": "k-\u003eHashMap k a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#v:member"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Return \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if this map is empty, \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e otherwise.\n\u003c/p\u003e",
          "module": "[\"Data.HashMap.Lazy\",\"Data.HashMap.Strict\"]",
          "name": "null",
          "package": "unordered-containers",
          "signature": "HashMap k v -\u003e Bool",
          "source": "src/Data-HashMap-Base.html#null",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#v:null\",\"http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Strict.html#v:null\"]"
        },
        "index": {
          "description": "Return True if this map is empty False otherwise",
          "hierarchy": "Data HashMap Lazy",
          "module": "Data.HashMap.Lazy",
          "name": "null",
          "normalized": "HashMap a b-\u003eBool",
          "package": "unordered-containers",
          "signature": "HashMap k v-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Construct a map with a single element.\n\u003c/p\u003e",
          "module": "Data.HashMap.Lazy",
          "name": "singleton",
          "package": "unordered-containers",
          "signature": "k -\u003e v -\u003e HashMap k v",
          "source": "src/Data-HashMap-Base.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "Construct map with single element",
          "hierarchy": "Data HashMap Lazy",
          "module": "Data.HashMap.Lazy",
          "name": "singleton",
          "normalized": "a-\u003eb-\u003eHashMap a b",
          "package": "unordered-containers",
          "signature": "k-\u003ev-\u003eHashMap k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Return the number of key-value mappings in this map.\n\u003c/p\u003e",
          "module": "[\"Data.HashMap.Lazy\",\"Data.HashMap.Strict\"]",
          "name": "size",
          "package": "unordered-containers",
          "signature": "HashMap k v -\u003e Int",
          "source": "src/Data-HashMap-Base.html#size",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#v:size\",\"http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Strict.html#v:size\"]"
        },
        "index": {
          "description": "Return the number of key-value mappings in this map",
          "hierarchy": "Data HashMap Lazy",
          "module": "Data.HashMap.Lazy",
          "name": "size",
          "normalized": "HashMap a b-\u003eInt",
          "package": "unordered-containers",
          "signature": "HashMap k v-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Return a list of this map's elements.  The list is\n produced lazily.\n\u003c/p\u003e",
          "module": "[\"Data.HashMap.Lazy\",\"Data.HashMap.Strict\"]",
          "name": "toList",
          "package": "unordered-containers",
          "signature": "HashMap k v -\u003e [(k, v)]",
          "source": "src/Data-HashMap-Base.html#toList",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#v:toList\",\"http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Strict.html#v:toList\"]"
        },
        "index": {
          "description": "Return list of this map elements The list is produced lazily",
          "hierarchy": "Data HashMap Lazy",
          "module": "Data.HashMap.Lazy",
          "name": "toList",
          "normalized": "HashMap a b-\u003e[(a,b)]",
          "package": "unordered-containers",
          "partial": "List",
          "signature": "HashMap k v-\u003e[(k,v)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Transform this map by accumulating an Applicative result\n from every value.\n\u003c/p\u003e",
          "module": "[\"Data.HashMap.Lazy\",\"Data.HashMap.Strict\"]",
          "name": "traverseWithKey",
          "package": "unordered-containers",
          "signature": "(k -\u003e v1 -\u003e f v2) -\u003e HashMap k v1 -\u003e f (HashMap k v2)",
          "source": "src/Data-HashMap-Base.html#traverseWithKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#v:traverseWithKey\",\"http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Strict.html#v:traverseWithKey\"]"
        },
        "index": {
          "description": "Transform this map by accumulating an Applicative result from every value",
          "hierarchy": "Data HashMap Lazy",
          "module": "Data.HashMap.Lazy",
          "name": "traverseWithKey",
          "normalized": "(a-\u003eb-\u003ec b)-\u003eHashMap a b-\u003ec(HashMap a b)",
          "package": "unordered-containers",
          "partial": "With Key",
          "signature": "(k-\u003ev-\u003ef v)-\u003eHashMap k v-\u003ef(HashMap k v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#v:traverseWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e The union of two maps. If a key occurs in both maps, the\n mapping from the first will be the mapping in the result.\n\u003c/p\u003e",
          "module": "[\"Data.HashMap.Lazy\",\"Data.HashMap.Strict\"]",
          "name": "union",
          "package": "unordered-containers",
          "signature": "HashMap k v -\u003e HashMap k v -\u003e HashMap k v",
          "source": "src/Data-HashMap-Base.html#union",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#v:union\",\"http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Strict.html#v:union\"]"
        },
        "index": {
          "description": "The union of two maps If key occurs in both maps the mapping from the first will be the mapping in the result",
          "hierarchy": "Data HashMap Lazy",
          "module": "Data.HashMap.Lazy",
          "name": "union",
          "normalized": "HashMap a b-\u003eHashMap a b-\u003eHashMap a b",
          "package": "unordered-containers",
          "signature": "HashMap k v-\u003eHashMap k v-\u003eHashMap k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#v:union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e The union of two maps.  If a key occurs in both maps,\n the provided function (first argument) will be used to compute the\n result.\n\u003c/p\u003e",
          "module": "Data.HashMap.Lazy",
          "name": "unionWith",
          "package": "unordered-containers",
          "signature": "(v -\u003e v -\u003e v) -\u003e HashMap k v -\u003e HashMap k v -\u003e HashMap k v",
          "source": "src/Data-HashMap-Base.html#unionWith",
          "type": "function"
        },
        "index": {
          "description": "The union of two maps If key occurs in both maps the provided function first argument will be used to compute the result",
          "hierarchy": "Data HashMap Lazy",
          "module": "Data.HashMap.Lazy",
          "name": "unionWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003eHashMap b a-\u003eHashMap b a-\u003eHashMap b a",
          "package": "unordered-containers",
          "partial": "With",
          "signature": "(v-\u003ev-\u003ev)-\u003eHashMap k v-\u003eHashMap k v-\u003eHashMap k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#v:unionWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a set containing all elements from a list of sets.\n\u003c/p\u003e",
          "module": "[\"Data.HashMap.Lazy\",\"Data.HashMap.Strict\"]",
          "name": "unions",
          "package": "unordered-containers",
          "signature": "[HashMap k v] -\u003e HashMap k v",
          "source": "src/Data-HashMap-Base.html#unions",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#v:unions\",\"http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Strict.html#v:unions\"]"
        },
        "index": {
          "description": "Construct set containing all elements from list of sets",
          "hierarchy": "Data HashMap Lazy",
          "module": "Data.HashMap.Lazy",
          "name": "unions",
          "normalized": "[HashMap a b]-\u003eHashMap a b",
          "package": "unordered-containers",
          "signature": "[HashMap k v]-\u003eHashMap k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Lazy.html#v:unions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA map from \u003cem\u003ehashable\u003c/em\u003e keys to values.  A map cannot contain\n duplicate keys; each key can map to at most one value.  A \u003ccode\u003e\u003ca\u003eHashMap\u003c/a\u003e\u003c/code\u003e\n makes no guarantees as to the order of its elements.\n\u003c/p\u003e\u003cp\u003eThe implementation is based on \u003cem\u003ehash array mapped tries\u003c/em\u003e.  A\n \u003ccode\u003e\u003ca\u003eHashMap\u003c/a\u003e\u003c/code\u003e is often faster than other tree-based set types,\n especially when key comparison is expensive, as in the case of\n strings.\n\u003c/p\u003e\u003cp\u003eMany operations have a average-case complexity of \u003cem\u003eO(log n)\u003c/em\u003e.  The\n implementation uses a large base (i.e. 16) so in practice these\n operations are constant time.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.HashMap.Strict",
          "name": "Strict",
          "package": "unordered-containers",
          "source": "src/Data-HashMap-Strict.html",
          "type": "module"
        },
        "index": {
          "description": "map from hashable keys to values map cannot contain duplicate keys each key can map to at most one value HashMap makes no guarantees as to the order of its elements The implementation is based on hash array mapped tries HashMap is often faster than other tree-based set types especially when key comparison is expensive as in the case of strings Many operations have average-case complexity of log The implementation uses large base i.e so in practice these operations are constant time",
          "hierarchy": "Data HashMap Strict",
          "module": "Data.HashMap.Strict",
          "name": "Strict",
          "package": "unordered-containers",
          "partial": "Strict",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Strict.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA map from keys to values.  A map cannot contain duplicate keys;\n each key can map to at most one value.\n\u003c/p\u003e",
          "module": "Data.HashMap.Strict",
          "name": "HashMap",
          "package": "unordered-containers",
          "source": "src/Data-HashMap-Base.html#HashMap",
          "type": "data"
        },
        "index": {
          "description": "map from keys to values map cannot contain duplicate keys each key can map to at most one value",
          "hierarchy": "Data HashMap Strict",
          "module": "Data.HashMap.Strict",
          "name": "HashMap",
          "package": "unordered-containers",
          "partial": "Hash Map",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Strict.html#t:HashMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e Adjust the value tied to a given key in this map only\n if it is present. Otherwise, leave the map alone.\n\u003c/p\u003e",
          "module": "Data.HashMap.Strict",
          "name": "adjust",
          "package": "unordered-containers",
          "signature": "(v -\u003e v) -\u003e k -\u003e HashMap k v -\u003e HashMap k v",
          "source": "src/Data-HashMap-Strict.html#adjust",
          "type": "function"
        },
        "index": {
          "description": "log Adjust the value tied to given key in this map only if it is present Otherwise leave the map alone",
          "hierarchy": "Data HashMap Strict",
          "module": "Data.HashMap.Strict",
          "name": "adjust",
          "normalized": "(a-\u003ea)-\u003eb-\u003eHashMap b a-\u003eHashMap b a",
          "package": "unordered-containers",
          "signature": "(v-\u003ev)-\u003ek-\u003eHashMap k v-\u003eHashMap k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Strict.html#v:adjust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n*log n)\u003c/em\u003e Construct a map with the supplied mappings.  If the\n list contains duplicate mappings, the later mappings take\n precedence.\n\u003c/p\u003e",
          "module": "Data.HashMap.Strict",
          "name": "fromList",
          "package": "unordered-containers",
          "signature": "[(k, v)] -\u003e HashMap k v",
          "source": "src/Data-HashMap-Strict.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "log Construct map with the supplied mappings If the list contains duplicate mappings the later mappings take precedence",
          "hierarchy": "Data HashMap Strict",
          "module": "Data.HashMap.Strict",
          "name": "fromList",
          "normalized": "[(a,b)]-\u003eHashMap a b",
          "package": "unordered-containers",
          "partial": "List",
          "signature": "[(k,v)]-\u003eHashMap k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Strict.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n*log n)\u003c/em\u003e Construct a map from a list of elements.  Uses\n the provided function to merge duplicate entries.\n\u003c/p\u003e",
          "module": "Data.HashMap.Strict",
          "name": "fromListWith",
          "package": "unordered-containers",
          "signature": "(v -\u003e v -\u003e v) -\u003e [(k, v)] -\u003e HashMap k v",
          "source": "src/Data-HashMap-Strict.html#fromListWith",
          "type": "function"
        },
        "index": {
          "description": "log Construct map from list of elements Uses the provided function to merge duplicate entries",
          "hierarchy": "Data HashMap Strict",
          "module": "Data.HashMap.Strict",
          "name": "fromListWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[(b,a)]-\u003eHashMap b a",
          "package": "unordered-containers",
          "partial": "List With",
          "signature": "(v-\u003ev-\u003ev)-\u003e[(k,v)]-\u003eHashMap k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Strict.html#v:fromListWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e Associate the specified value with the specified\n key in this map.  If this map previously contained a mapping for\n the key, the old value is replaced.\n\u003c/p\u003e",
          "module": "Data.HashMap.Strict",
          "name": "insert",
          "package": "unordered-containers",
          "signature": "k -\u003e v -\u003e HashMap k v -\u003e HashMap k v",
          "source": "src/Data-HashMap-Strict.html#insert",
          "type": "function"
        },
        "index": {
          "description": "log Associate the specified value with the specified key in this map If this map previously contained mapping for the key the old value is replaced",
          "hierarchy": "Data HashMap Strict",
          "module": "Data.HashMap.Strict",
          "name": "insert",
          "normalized": "a-\u003eb-\u003eHashMap a b-\u003eHashMap a b",
          "package": "unordered-containers",
          "signature": "k-\u003ev-\u003eHashMap k v-\u003eHashMap k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Strict.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e Associate the value with the key in this map.  If\n this map previously contained a mapping for the key, the old value\n is replaced by the result of applying the given function to the new\n and old value.  Example:\n\u003c/p\u003e\u003cpre\u003e insertWith f k v map\n   where f new old = new + old\n\u003c/pre\u003e",
          "module": "Data.HashMap.Strict",
          "name": "insertWith",
          "package": "unordered-containers",
          "signature": "(v -\u003e v -\u003e v) -\u003e k -\u003e v -\u003e HashMap k v -\u003e HashMap k v",
          "source": "src/Data-HashMap-Strict.html#insertWith",
          "type": "function"
        },
        "index": {
          "description": "log Associate the value with the key in this map If this map previously contained mapping for the key the old value is replaced by the result of applying the given function to the new and old value Example insertWith map where new old new old",
          "hierarchy": "Data HashMap Strict",
          "module": "Data.HashMap.Strict",
          "name": "insertWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003eb-\u003ea-\u003eHashMap b a-\u003eHashMap b a",
          "package": "unordered-containers",
          "partial": "With",
          "signature": "(v-\u003ev-\u003ev)-\u003ek-\u003ev-\u003eHashMap k v-\u003eHashMap k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Strict.html#v:insertWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e Intersection of two maps. If a key occurs in both maps\n the provided function is used to combine the values from the two\n maps.\n\u003c/p\u003e",
          "module": "Data.HashMap.Strict",
          "name": "intersectionWith",
          "package": "unordered-containers",
          "signature": "(v1 -\u003e v2 -\u003e v3) -\u003e HashMap k v1 -\u003e HashMap k v2 -\u003e HashMap k v3",
          "source": "src/Data-HashMap-Strict.html#intersectionWith",
          "type": "function"
        },
        "index": {
          "description": "Intersection of two maps If key occurs in both maps the provided function is used to combine the values from the two maps",
          "hierarchy": "Data HashMap Strict",
          "module": "Data.HashMap.Strict",
          "name": "intersectionWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003eHashMap b a-\u003eHashMap b a-\u003eHashMap b a",
          "package": "unordered-containers",
          "partial": "With",
          "signature": "(v-\u003ev-\u003ev)-\u003eHashMap k v-\u003eHashMap k v-\u003eHashMap k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Strict.html#v:intersectionWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HashMap.Strict",
          "name": "map",
          "package": "unordered-containers",
          "signature": "(v1 -\u003e v2) -\u003e HashMap k v1 -\u003e HashMap k v2",
          "source": "src/Data-HashMap-Strict.html#map",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HashMap Strict",
          "module": "Data.HashMap.Strict",
          "name": "map",
          "normalized": "(a-\u003ea)-\u003eHashMap b a-\u003eHashMap b a",
          "package": "unordered-containers",
          "signature": "(v-\u003ev)-\u003eHashMap k v-\u003eHashMap k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Strict.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Construct a map with a single element.\n\u003c/p\u003e",
          "module": "Data.HashMap.Strict",
          "name": "singleton",
          "package": "unordered-containers",
          "signature": "k -\u003e v -\u003e HashMap k v",
          "source": "src/Data-HashMap-Strict.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "Construct map with single element",
          "hierarchy": "Data HashMap Strict",
          "module": "Data.HashMap.Strict",
          "name": "singleton",
          "normalized": "a-\u003eb-\u003eHashMap a b",
          "package": "unordered-containers",
          "signature": "k-\u003ev-\u003eHashMap k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Strict.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e The union of two maps.  If a key occurs in both maps,\n the provided function (first argument) will be used to compute the result.\n\u003c/p\u003e",
          "module": "Data.HashMap.Strict",
          "name": "unionWith",
          "package": "unordered-containers",
          "signature": "(v -\u003e v -\u003e v) -\u003e HashMap k v -\u003e HashMap k v -\u003e HashMap k v",
          "source": "src/Data-HashMap-Strict.html#unionWith",
          "type": "function"
        },
        "index": {
          "description": "The union of two maps If key occurs in both maps the provided function first argument will be used to compute the result",
          "hierarchy": "Data HashMap Strict",
          "module": "Data.HashMap.Strict",
          "name": "unionWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003eHashMap b a-\u003eHashMap b a-\u003eHashMap b a",
          "package": "unordered-containers",
          "partial": "With",
          "signature": "(v-\u003ev-\u003ev)-\u003eHashMap k v-\u003eHashMap k v-\u003eHashMap k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashMap-Strict.html#v:unionWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA set of \u003cem\u003ehashable\u003c/em\u003e values.  A set cannot contain duplicate items.\n A \u003ccode\u003e\u003ca\u003eHashSet\u003c/a\u003e\u003c/code\u003e makes no guarantees as to the order of its elements.\n\u003c/p\u003e\u003cp\u003eThe implementation is based on \u003cem\u003ehash array mapped trie\u003c/em\u003e.  A\n \u003ccode\u003e\u003ca\u003eHashSet\u003c/a\u003e\u003c/code\u003e is often faster than other tree-based set types,\n especially when value comparison is expensive, as in the case of\n strings.\n\u003c/p\u003e\u003cp\u003eMany operations have a average-case complexity of \u003cem\u003eO(log n)\u003c/em\u003e.  The\n implementation uses a large base (i.e. 16) so in practice these\n operations are constant time.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.HashSet",
          "name": "HashSet",
          "package": "unordered-containers",
          "source": "src/Data-HashSet.html",
          "type": "module"
        },
        "index": {
          "description": "set of hashable values set cannot contain duplicate items HashSet makes no guarantees as to the order of its elements The implementation is based on hash array mapped trie HashSet is often faster than other tree-based set types especially when value comparison is expensive as in the case of strings Many operations have average-case complexity of log The implementation uses large base i.e so in practice these operations are constant time",
          "hierarchy": "Data HashSet",
          "module": "Data.HashSet",
          "name": "HashSet",
          "package": "unordered-containers",
          "partial": "Hash Set",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashSet.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA set of values.  A set cannot contain duplicate values.\n\u003c/p\u003e",
          "module": "Data.HashSet",
          "name": "HashSet",
          "package": "unordered-containers",
          "source": "src/Data-HashSet.html#HashSet",
          "type": "data"
        },
        "index": {
          "description": "set of values set cannot contain duplicate values",
          "hierarchy": "Data HashSet",
          "module": "Data.HashSet",
          "name": "HashSet",
          "package": "unordered-containers",
          "partial": "Hash Set",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashSet.html#t:HashSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(min(n,W))\u003c/em\u003e Remove the specified value from this set if\n present.\n\u003c/p\u003e",
          "module": "Data.HashSet",
          "name": "delete",
          "package": "unordered-containers",
          "signature": "a -\u003e HashSet a -\u003e HashSet a",
          "source": "src/Data-HashSet.html#delete",
          "type": "function"
        },
        "index": {
          "description": "min Remove the specified value from this set if present",
          "hierarchy": "Data HashSet",
          "module": "Data.HashSet",
          "name": "delete",
          "normalized": "a-\u003eHashSet a-\u003eHashSet a",
          "package": "unordered-containers",
          "signature": "a-\u003eHashSet a-\u003eHashSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashSet.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Difference of two sets. Return elements of the first set\n not existing in the second.\n\u003c/p\u003e",
          "module": "Data.HashSet",
          "name": "difference",
          "package": "unordered-containers",
          "signature": "HashSet a -\u003e HashSet a -\u003e HashSet a",
          "source": "src/Data-HashSet.html#difference",
          "type": "function"
        },
        "index": {
          "description": "Difference of two sets Return elements of the first set not existing in the second",
          "hierarchy": "Data HashSet",
          "module": "Data.HashSet",
          "name": "difference",
          "normalized": "HashSet a-\u003eHashSet a-\u003eHashSet a",
          "package": "unordered-containers",
          "signature": "HashSet a-\u003eHashSet a-\u003eHashSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashSet.html#v:difference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Construct an empty set.\n\u003c/p\u003e",
          "module": "Data.HashSet",
          "name": "empty",
          "package": "unordered-containers",
          "signature": "HashSet a",
          "source": "src/Data-HashSet.html#empty",
          "type": "function"
        },
        "index": {
          "description": "Construct an empty set",
          "hierarchy": "Data HashSet",
          "module": "Data.HashSet",
          "name": "empty",
          "package": "unordered-containers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashSet.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Filter this set by retaining only elements satisfying a\n predicate.\n\u003c/p\u003e",
          "module": "Data.HashSet",
          "name": "filter",
          "package": "unordered-containers",
          "signature": "(a -\u003e Bool) -\u003e HashSet a -\u003e HashSet a",
          "source": "src/Data-HashSet.html#filter",
          "type": "function"
        },
        "index": {
          "description": "Filter this set by retaining only elements satisfying predicate",
          "hierarchy": "Data HashSet",
          "module": "Data.HashSet",
          "name": "filter",
          "normalized": "(a-\u003eBool)-\u003eHashSet a-\u003eHashSet a",
          "package": "unordered-containers",
          "signature": "(a-\u003eBool)-\u003eHashSet a-\u003eHashSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashSet.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Reduce this set by applying a binary operator to all\n elements, using the given starting value (typically the\n left-identity of the operator).  Each application of the operator\n is evaluated before before using the result in the next\n application.  This function is strict in the starting value.\n\u003c/p\u003e",
          "module": "Data.HashSet",
          "name": "foldl'",
          "package": "unordered-containers",
          "signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e HashSet b -\u003e a",
          "source": "src/Data-HashSet.html#foldl%27",
          "type": "function"
        },
        "index": {
          "description": "Reduce this set by applying binary operator to all elements using the given starting value typically the left-identity of the operator Each application of the operator is evaluated before before using the result in the next application This function is strict in the starting value",
          "hierarchy": "Data HashSet",
          "module": "Data.HashSet",
          "name": "foldl'",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eHashSet b-\u003ea",
          "package": "unordered-containers",
          "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003eHashSet b-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashSet.html#v:foldl-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Reduce this set by applying a binary operator to all\n elements, using the given starting value (typically the\n right-identity of the operator).\n\u003c/p\u003e",
          "module": "Data.HashSet",
          "name": "foldr",
          "package": "unordered-containers",
          "signature": "(b -\u003e a -\u003e a) -\u003e a -\u003e HashSet b -\u003e a",
          "source": "src/Data-HashSet.html#foldr",
          "type": "function"
        },
        "index": {
          "description": "Reduce this set by applying binary operator to all elements using the given starting value typically the right-identity of the operator",
          "hierarchy": "Data HashSet",
          "module": "Data.HashSet",
          "name": "foldr",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eHashSet a-\u003eb",
          "package": "unordered-containers",
          "signature": "(b-\u003ea-\u003ea)-\u003ea-\u003eHashSet b-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashSet.html#v:foldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n*min(W, n))\u003c/em\u003e Construct a set from a list of elements.\n\u003c/p\u003e",
          "module": "Data.HashSet",
          "name": "fromList",
          "package": "unordered-containers",
          "signature": "[a] -\u003e HashSet a",
          "source": "src/Data-HashSet.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "min Construct set from list of elements",
          "hierarchy": "Data HashSet",
          "module": "Data.HashSet",
          "name": "fromList",
          "normalized": "[a]-\u003eHashSet a",
          "package": "unordered-containers",
          "partial": "List",
          "signature": "[a]-\u003eHashSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashSet.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(min(n,W))\u003c/em\u003e Add the specified value to this set.\n\u003c/p\u003e",
          "module": "Data.HashSet",
          "name": "insert",
          "package": "unordered-containers",
          "signature": "a -\u003e HashSet a -\u003e HashSet a",
          "source": "src/Data-HashSet.html#insert",
          "type": "function"
        },
        "index": {
          "description": "min Add the specified value to this set",
          "hierarchy": "Data HashSet",
          "module": "Data.HashSet",
          "name": "insert",
          "normalized": "a-\u003eHashSet a-\u003eHashSet a",
          "package": "unordered-containers",
          "signature": "a-\u003eHashSet a-\u003eHashSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashSet.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Intersection of two sets. Return elements present in both\n the first set and the second.\n\u003c/p\u003e",
          "module": "Data.HashSet",
          "name": "intersection",
          "package": "unordered-containers",
          "signature": "HashSet a -\u003e HashSet a -\u003e HashSet a",
          "source": "src/Data-HashSet.html#intersection",
          "type": "function"
        },
        "index": {
          "description": "Intersection of two sets Return elements present in both the first set and the second",
          "hierarchy": "Data HashSet",
          "module": "Data.HashSet",
          "name": "intersection",
          "normalized": "HashSet a-\u003eHashSet a-\u003eHashSet a",
          "package": "unordered-containers",
          "signature": "HashSet a-\u003eHashSet a-\u003eHashSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashSet.html#v:intersection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Transform this set by applying a function to every value.\n The resulting set may be smaller than the source.\n\u003c/p\u003e",
          "module": "Data.HashSet",
          "name": "map",
          "package": "unordered-containers",
          "signature": "(a -\u003e b) -\u003e HashSet a -\u003e HashSet b",
          "source": "src/Data-HashSet.html#map",
          "type": "function"
        },
        "index": {
          "description": "Transform this set by applying function to every value The resulting set may be smaller than the source",
          "hierarchy": "Data HashSet",
          "module": "Data.HashSet",
          "name": "map",
          "normalized": "(a-\u003eb)-\u003eHashSet a-\u003eHashSet b",
          "package": "unordered-containers",
          "signature": "(a-\u003eb)-\u003eHashSet a-\u003eHashSet b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashSet.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(min(n,W))\u003c/em\u003e Return \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the given value is present in this\n set, \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e otherwise.\n\u003c/p\u003e",
          "module": "Data.HashSet",
          "name": "member",
          "package": "unordered-containers",
          "signature": "a -\u003e HashSet a -\u003e Bool",
          "source": "src/Data-HashSet.html#member",
          "type": "function"
        },
        "index": {
          "description": "min Return True if the given value is present in this set False otherwise",
          "hierarchy": "Data HashSet",
          "module": "Data.HashSet",
          "name": "member",
          "normalized": "a-\u003eHashSet a-\u003eBool",
          "package": "unordered-containers",
          "signature": "a-\u003eHashSet a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashSet.html#v:member"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Return \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if this set is empty, \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e otherwise.\n\u003c/p\u003e",
          "module": "Data.HashSet",
          "name": "null",
          "package": "unordered-containers",
          "signature": "HashSet a -\u003e Bool",
          "source": "src/Data-HashSet.html#null",
          "type": "function"
        },
        "index": {
          "description": "Return True if this set is empty False otherwise",
          "hierarchy": "Data HashSet",
          "module": "Data.HashSet",
          "name": "null",
          "normalized": "HashSet a-\u003eBool",
          "package": "unordered-containers",
          "signature": "HashSet a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashSet.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Construct a set with a single element.\n\u003c/p\u003e",
          "module": "Data.HashSet",
          "name": "singleton",
          "package": "unordered-containers",
          "signature": "a -\u003e HashSet a",
          "source": "src/Data-HashSet.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "Construct set with single element",
          "hierarchy": "Data HashSet",
          "module": "Data.HashSet",
          "name": "singleton",
          "normalized": "a-\u003eHashSet a",
          "package": "unordered-containers",
          "signature": "a-\u003eHashSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashSet.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Return the number of elements in this set.\n\u003c/p\u003e",
          "module": "Data.HashSet",
          "name": "size",
          "package": "unordered-containers",
          "signature": "HashSet a -\u003e Int",
          "source": "src/Data-HashSet.html#size",
          "type": "function"
        },
        "index": {
          "description": "Return the number of elements in this set",
          "hierarchy": "Data HashSet",
          "module": "Data.HashSet",
          "name": "size",
          "normalized": "HashSet a-\u003eInt",
          "package": "unordered-containers",
          "signature": "HashSet a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashSet.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Return a list of this set's elements.  The list is\n produced lazily.\n\u003c/p\u003e",
          "module": "Data.HashSet",
          "name": "toList",
          "package": "unordered-containers",
          "signature": "HashSet a -\u003e [a]",
          "source": "src/Data-HashSet.html#toList",
          "type": "function"
        },
        "index": {
          "description": "Return list of this set elements The list is produced lazily",
          "hierarchy": "Data HashSet",
          "module": "Data.HashSet",
          "name": "toList",
          "normalized": "HashSet a-\u003e[a]",
          "package": "unordered-containers",
          "partial": "List",
          "signature": "HashSet a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashSet.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e Construct a set containing all elements from both sets.\n\u003c/p\u003e\u003cp\u003eTo obtain good performance, the smaller set must be presented as\n the first argument.\n\u003c/p\u003e",
          "module": "Data.HashSet",
          "name": "union",
          "package": "unordered-containers",
          "signature": "HashSet a -\u003e HashSet a -\u003e HashSet a",
          "source": "src/Data-HashSet.html#union",
          "type": "function"
        },
        "index": {
          "description": "Construct set containing all elements from both sets To obtain good performance the smaller set must be presented as the first argument",
          "hierarchy": "Data HashSet",
          "module": "Data.HashSet",
          "name": "union",
          "normalized": "HashSet a-\u003eHashSet a-\u003eHashSet a",
          "package": "unordered-containers",
          "signature": "HashSet a-\u003eHashSet a-\u003eHashSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashSet.html#v:union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a set containing all elements from a list of sets.\n\u003c/p\u003e",
          "module": "Data.HashSet",
          "name": "unions",
          "package": "unordered-containers",
          "signature": "[HashSet a] -\u003e HashSet a",
          "source": "src/Data-HashSet.html#unions",
          "type": "function"
        },
        "index": {
          "description": "Construct set containing all elements from list of sets",
          "hierarchy": "Data HashSet",
          "module": "Data.HashSet",
          "name": "unions",
          "normalized": "[HashSet a]-\u003eHashSet a",
          "package": "unordered-containers",
          "signature": "[HashSet a]-\u003eHashSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unordered-containers/docs/Data-HashSet.html#v:unions"
      }
    }
  ]
]