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
        "word": "hamtmap"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn implementation of maps from keys to values (dictionaries) based on the\n hash array mapped trie.\n\u003c/p\u003e\u003cp\u003eSince many function names (but not the type name) clash with\n \u003ca\u003ePrelude\u003c/a\u003e names, this module is usually imported \u003ccode\u003equalified\u003c/code\u003e, e.g.\n\u003c/p\u003e\u003cpre\u003e  import qualified Data.HamtMap as HM\n\u003c/pre\u003e\u003cp\u003eThis data structure is based on Phil Bagwell's hash array mapped trie,\n which is described by his original paper:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003ehttp://lampwww.epfl.ch/papers/idealhashtrees.pdf\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Data.HamtMap",
          "name": "HamtMap",
          "package": "hamtmap",
          "source": "src/Data-HamtMap.html",
          "type": "module"
        },
        "index": {
          "description": "An implementation of maps from keys to values dictionaries based on the hash array mapped trie Since many function names but not the type name clash with Prelude names this module is usually imported qualified e.g import qualified Data.HamtMap as HM This data structure is based on Phil Bagwell hash array mapped trie which is described by his original paper http lampwww.epfl.ch papers idealhashtrees.pdf",
          "hierarchy": "Data HamtMap",
          "module": "Data.HamtMap",
          "name": "HamtMap",
          "package": "hamtmap",
          "partial": "Hamt Map",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hamtmap/docs/Data-HamtMap.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA HamtMap from keys \u003ccode\u003ek\u003c/code\u003e to values \u003ccode\u003ev\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.HamtMap",
          "name": "HamtMap",
          "package": "hamtmap",
          "source": "src/Data-HamtMap.html#HamtMap",
          "type": "data"
        },
        "index": {
          "description": "HamtMap from keys to values",
          "hierarchy": "Data HamtMap",
          "module": "Data.HamtMap",
          "name": "HamtMap",
          "package": "hamtmap",
          "partial": "Hamt Map",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hamtmap/docs/Data-HamtMap.html#t:HamtMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the value at a key.\n Calls \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e when the element can not be found.\n\u003c/p\u003e",
          "module": "Data.HamtMap",
          "name": "(!)",
          "package": "hamtmap",
          "signature": "HamtMap k v -\u003e k -\u003e v",
          "source": "src/Data-HamtMap.html#%21",
          "type": "function"
        },
        "index": {
          "description": "Find the value at key Calls error when the element can not be found",
          "hierarchy": "Data HamtMap",
          "module": "Data.HamtMap",
          "name": "(!) !",
          "normalized": "HamtMap a b-\u003ea-\u003eb",
          "package": "hamtmap",
          "signature": "HamtMap k v-\u003ek-\u003ev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hamtmap/docs/Data-HamtMap.html#v:-33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdate a value at a specific key with the result of the provided function.\n When the key is not a member of the map, the original map is returned.\n\u003c/p\u003e",
          "module": "Data.HamtMap",
          "name": "adjust",
          "package": "hamtmap",
          "signature": "(v -\u003e v) -\u003e k -\u003e HamtMap k v -\u003e HamtMap k v",
          "source": "src/Data-HamtMap.html#adjust",
          "type": "function"
        },
        "index": {
          "description": "Update value at specific key with the result of the provided function When the key is not member of the map the original map is returned",
          "hierarchy": "Data HamtMap",
          "module": "Data.HamtMap",
          "name": "adjust",
          "normalized": "(a-\u003ea)-\u003eb-\u003eHamtMap b a-\u003eHamtMap b a",
          "package": "hamtmap",
          "signature": "(v-\u003ev)-\u003ek-\u003eHamtMap k v-\u003eHamtMap k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hamtmap/docs/Data-HamtMap.html#v:adjust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe expression (\u003ccode\u003e\u003ccode\u003e\u003ca\u003ealter\u003c/a\u003e\u003c/code\u003e f k map\u003c/code\u003e) alters the value \u003ccode\u003ex\u003c/code\u003e at \u003ccode\u003ek\u003c/code\u003e, or absence thereof.\n \u003ccode\u003e\u003ca\u003ealter\u003c/a\u003e\u003c/code\u003e can be used to insert, delete, or update a value in a \u003ccode\u003eMap\u003c/code\u003e.\n In short : \u003ccode\u003e\u003ccode\u003e\u003ca\u003elookup\u003c/a\u003e\u003c/code\u003e k (\u003ccode\u003e\u003ca\u003ealter\u003c/a\u003e\u003c/code\u003e f k m) = f (\u003ccode\u003e\u003ca\u003elookup\u003c/a\u003e\u003c/code\u003e k m)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.HamtMap",
          "name": "alter",
          "package": "hamtmap",
          "signature": "(Maybe v -\u003e Maybe v) -\u003e k -\u003e HamtMap k v -\u003e HamtMap k v",
          "source": "src/Data-HamtMap.html#alter",
          "type": "function"
        },
        "index": {
          "description": "The expression alter map alters the value at or absence thereof alter can be used to insert delete or update value in Map In short lookup alter lookup",
          "hierarchy": "Data HamtMap",
          "module": "Data.HamtMap",
          "name": "alter",
          "normalized": "(Maybe a-\u003eMaybe a)-\u003eb-\u003eHamtMap b a-\u003eHamtMap b a",
          "package": "hamtmap",
          "signature": "(Maybe v-\u003eMaybe v)-\u003ek-\u003eHamtMap k v-\u003eHamtMap k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hamtmap/docs/Data-HamtMap.html#v:alter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete a key and its value from the map. When the key is not\n a member of the map, the original map is returned.\n\u003c/p\u003e",
          "module": "Data.HamtMap",
          "name": "delete",
          "package": "hamtmap",
          "signature": "k -\u003e HamtMap k v -\u003e HamtMap k v",
          "source": "src/Data-HamtMap.html#delete",
          "type": "function"
        },
        "index": {
          "description": "Delete key and its value from the map When the key is not member of the map the original map is returned",
          "hierarchy": "Data HamtMap",
          "module": "Data.HamtMap",
          "name": "delete",
          "normalized": "a-\u003eHamtMap a b-\u003eHamtMap a b",
          "package": "hamtmap",
          "signature": "k-\u003eHamtMap k v-\u003eHamtMap k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hamtmap/docs/Data-HamtMap.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn all elements of the map.\n\u003c/p\u003e",
          "module": "Data.HamtMap",
          "name": "elems",
          "package": "hamtmap",
          "signature": "HamtMap k v -\u003e [v]",
          "source": "src/Data-HamtMap.html#elems",
          "type": "function"
        },
        "index": {
          "description": "Return all elements of the map",
          "hierarchy": "Data HamtMap",
          "module": "Data.HamtMap",
          "name": "elems",
          "normalized": "HamtMap a b-\u003e[b]",
          "package": "hamtmap",
          "signature": "HamtMap k v-\u003e[v]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hamtmap/docs/Data-HamtMap.html#v:elems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe empty HamtMap.\n\u003c/p\u003e",
          "module": "Data.HamtMap",
          "name": "empty",
          "package": "hamtmap",
          "signature": "HamtMap k v",
          "source": "src/Data-HamtMap.html#empty",
          "type": "function"
        },
        "index": {
          "description": "The empty HamtMap",
          "hierarchy": "Data HamtMap",
          "module": "Data.HamtMap",
          "name": "empty",
          "package": "hamtmap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hamtmap/docs/Data-HamtMap.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilter for all values that satisify a predicate.\n\u003c/p\u003e",
          "module": "Data.HamtMap",
          "name": "filter",
          "package": "hamtmap",
          "signature": "(v -\u003e Bool) -\u003e HamtMap k v -\u003e HamtMap k v",
          "source": "src/Data-HamtMap.html#filter",
          "type": "function"
        },
        "index": {
          "description": "Filter for all values that satisify predicate",
          "hierarchy": "Data HamtMap",
          "module": "Data.HamtMap",
          "name": "filter",
          "normalized": "(a-\u003eBool)-\u003eHamtMap b a-\u003eHamtMap b a",
          "package": "hamtmap",
          "signature": "(v-\u003eBool)-\u003eHamtMap k v-\u003eHamtMap k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hamtmap/docs/Data-HamtMap.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilter for all values that satisify a predicate.\n\u003c/p\u003e",
          "module": "Data.HamtMap",
          "name": "filterWithKey",
          "package": "hamtmap",
          "signature": "(k -\u003e v -\u003e Bool) -\u003e HamtMap k v -\u003e HamtMap k v",
          "source": "src/Data-HamtMap.html#filterWithKey",
          "type": "function"
        },
        "index": {
          "description": "Filter for all values that satisify predicate",
          "hierarchy": "Data HamtMap",
          "module": "Data.HamtMap",
          "name": "filterWithKey",
          "normalized": "(a-\u003eb-\u003eBool)-\u003eHamtMap a b-\u003eHamtMap a b",
          "package": "hamtmap",
          "partial": "With Key",
          "signature": "(k-\u003ev-\u003eBool)-\u003eHamtMap k v-\u003eHamtMap k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hamtmap/docs/Data-HamtMap.html#v:filterWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a map from a list of key/value pairs.\n If the list contains more than one value for the same key, the last value\n for the key is retained.\n\u003c/p\u003e",
          "module": "Data.HamtMap",
          "name": "fromList",
          "package": "hamtmap",
          "signature": "[(k, v)] -\u003e HamtMap k v",
          "source": "src/Data-HamtMap.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Build map from list of key value pairs If the list contains more than one value for the same key the last value for the key is retained",
          "hierarchy": "Data HamtMap",
          "module": "Data.HamtMap",
          "name": "fromList",
          "normalized": "[(a,b)]-\u003eHamtMap a b",
          "package": "hamtmap",
          "partial": "List",
          "signature": "[(k,v)]-\u003eHamtMap k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hamtmap/docs/Data-HamtMap.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a map from a list of key/value pairs with a combining function.\n\u003c/p\u003e",
          "module": "Data.HamtMap",
          "name": "fromListWith",
          "package": "hamtmap",
          "signature": "(v -\u003e v -\u003e v) -\u003e [(k, v)] -\u003e HamtMap k v",
          "source": "src/Data-HamtMap.html#fromListWith",
          "type": "function"
        },
        "index": {
          "description": "Build map from list of key value pairs with combining function",
          "hierarchy": "Data HamtMap",
          "module": "Data.HamtMap",
          "name": "fromListWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[(b,a)]-\u003eHamtMap b a",
          "package": "hamtmap",
          "partial": "List With",
          "signature": "(v-\u003ev-\u003ev)-\u003e[(k,v)]-\u003eHamtMap k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hamtmap/docs/Data-HamtMap.html#v:fromListWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert a new key and value in the map.\n If the key is already present in the map, the associated value is\n replaced with the supplied value. \u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e is equivalent to\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003einsertWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.HamtMap",
          "name": "insert",
          "package": "hamtmap",
          "signature": "k -\u003e v -\u003e HamtMap k v -\u003e HamtMap k v",
          "source": "src/Data-HamtMap.html#insert",
          "type": "function"
        },
        "index": {
          "description": "Insert new key and value in the map If the key is already present in the map the associated value is replaced with the supplied value insert is equivalent to insertWith const",
          "hierarchy": "Data HamtMap",
          "module": "Data.HamtMap",
          "name": "insert",
          "normalized": "a-\u003eb-\u003eHamtMap a b-\u003eHamtMap a b",
          "package": "hamtmap",
          "signature": "k-\u003ev-\u003eHamtMap k v-\u003eHamtMap k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hamtmap/docs/Data-HamtMap.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert with a function, combining new value and old value.\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003einsertWith\u003c/a\u003e\u003c/code\u003e f key value mp\u003c/code\u003e\n will insert the pair (key, value) into \u003ccode\u003emp\u003c/code\u003e if key does\n not exist in the map. If the key does exist, the function will\n insert the pair \u003ccode\u003e(key, f new_value old_value)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.HamtMap",
          "name": "insertWith",
          "package": "hamtmap",
          "signature": "(v -\u003e v -\u003e v) -\u003e k -\u003e v -\u003e HamtMap k v -\u003e HamtMap k v",
          "source": "src/Data-HamtMap.html#insertWith",
          "type": "function"
        },
        "index": {
          "description": "Insert with function combining new value and old value insertWith key value mp will insert the pair key value into mp if key does not exist in the map If the key does exist the function will insert the pair key new value old value",
          "hierarchy": "Data HamtMap",
          "module": "Data.HamtMap",
          "name": "insertWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003eb-\u003ea-\u003eHamtMap b a-\u003eHamtMap b a",
          "package": "hamtmap",
          "partial": "With",
          "signature": "(v-\u003ev-\u003ev)-\u003ek-\u003ev-\u003eHamtMap k v-\u003eHamtMap k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hamtmap/docs/Data-HamtMap.html#v:insertWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn all keys of the map.\n\u003c/p\u003e",
          "module": "Data.HamtMap",
          "name": "keys",
          "package": "hamtmap",
          "signature": "HamtMap k v -\u003e [k]",
          "source": "src/Data-HamtMap.html#keys",
          "type": "function"
        },
        "index": {
          "description": "Return all keys of the map",
          "hierarchy": "Data HamtMap",
          "module": "Data.HamtMap",
          "name": "keys",
          "normalized": "HamtMap a b-\u003e[a]",
          "package": "hamtmap",
          "signature": "HamtMap k v-\u003e[k]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hamtmap/docs/Data-HamtMap.html#v:keys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLookup the value at a key in the map.\n\u003c/p\u003e\u003cp\u003eThe function will return the corresponding value as \u003ccode\u003e(\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e value)\u003c/code\u003e,\n or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the key isn't in the map.\n\u003c/p\u003e",
          "module": "Data.HamtMap",
          "name": "lookup",
          "package": "hamtmap",
          "signature": "k -\u003e HamtMap k v -\u003e Maybe v",
          "source": "src/Data-HamtMap.html#lookup",
          "type": "function"
        },
        "index": {
          "description": "Lookup the value at key in the map The function will return the corresponding value as Just value or Nothing if the key isn in the map",
          "hierarchy": "Data HamtMap",
          "module": "Data.HamtMap",
          "name": "lookup",
          "normalized": "a-\u003eHamtMap a b-\u003eMaybe b",
          "package": "hamtmap",
          "signature": "k-\u003eHamtMap k v-\u003eMaybe v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hamtmap/docs/Data-HamtMap.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a function over all values in the map.\n\u003c/p\u003e",
          "module": "Data.HamtMap",
          "name": "map",
          "package": "hamtmap",
          "signature": "(v -\u003e v) -\u003e HamtMap k v -\u003e HamtMap k v",
          "source": "src/Data-HamtMap.html#map",
          "type": "function"
        },
        "index": {
          "description": "Map function over all values in the map",
          "hierarchy": "Data HamtMap",
          "module": "Data.HamtMap",
          "name": "map",
          "normalized": "(a-\u003ea)-\u003eHamtMap b a-\u003eHamtMap b a",
          "package": "hamtmap",
          "signature": "(v-\u003ev)-\u003eHamtMap k v-\u003eHamtMap k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hamtmap/docs/Data-HamtMap.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a function over all values in the map.\n\u003c/p\u003e",
          "module": "Data.HamtMap",
          "name": "mapWithKey",
          "package": "hamtmap",
          "signature": "(k -\u003e v -\u003e v) -\u003e HamtMap k v -\u003e HamtMap k v",
          "source": "src/Data-HamtMap.html#mapWithKey",
          "type": "function"
        },
        "index": {
          "description": "Map function over all values in the map",
          "hierarchy": "Data HamtMap",
          "module": "Data.HamtMap",
          "name": "mapWithKey",
          "normalized": "(a-\u003eb-\u003eb)-\u003eHamtMap a b-\u003eHamtMap a b",
          "package": "hamtmap",
          "partial": "With Key",
          "signature": "(k-\u003ev-\u003ev)-\u003eHamtMap k v-\u003eHamtMap k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hamtmap/docs/Data-HamtMap.html#v:mapWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs the key a member of the map? See also \u003ccode\u003e\u003ca\u003enotMember\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.HamtMap",
          "name": "member",
          "package": "hamtmap",
          "signature": "k -\u003e HamtMap k v -\u003e Bool",
          "source": "src/Data-HamtMap.html#member",
          "type": "function"
        },
        "index": {
          "description": "Is the key member of the map See also notMember",
          "hierarchy": "Data HamtMap",
          "module": "Data.HamtMap",
          "name": "member",
          "normalized": "a-\u003eHamtMap a b-\u003eBool",
          "package": "hamtmap",
          "signature": "k-\u003eHamtMap k v-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hamtmap/docs/Data-HamtMap.html#v:member"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs the key a member of the map? See also \u003ccode\u003e\u003ca\u003emember\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.HamtMap",
          "name": "notMember",
          "package": "hamtmap",
          "signature": "k -\u003e HamtMap k v -\u003e Bool",
          "source": "src/Data-HamtMap.html#notMember",
          "type": "function"
        },
        "index": {
          "description": "Is the key member of the map See also member",
          "hierarchy": "Data HamtMap",
          "module": "Data.HamtMap",
          "name": "notMember",
          "normalized": "a-\u003eHamtMap a b-\u003eBool",
          "package": "hamtmap",
          "partial": "Member",
          "signature": "k-\u003eHamtMap k v-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hamtmap/docs/Data-HamtMap.html#v:notMember"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e(\u003ccode\u003e\u003ca\u003esingleton\u003c/a\u003e\u003c/code\u003e key value)\u003c/code\u003e is a single-element HamtMap holding \u003ccode\u003e(key, value)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.HamtMap",
          "name": "singleton",
          "package": "hamtmap",
          "signature": "k -\u003e v -\u003e HamtMap k v",
          "source": "src/Data-HamtMap.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "singleton key value is single-element HamtMap holding key value",
          "hierarchy": "Data HamtMap",
          "module": "Data.HamtMap",
          "name": "singleton",
          "normalized": "a-\u003eb-\u003eHamtMap a b",
          "package": "hamtmap",
          "signature": "k-\u003ev-\u003eHamtMap k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hamtmap/docs/Data-HamtMap.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert to a list of key/value pairs.\n\u003c/p\u003e",
          "module": "Data.HamtMap",
          "name": "toList",
          "package": "hamtmap",
          "signature": "HamtMap k v -\u003e [(k, v)]",
          "source": "src/Data-HamtMap.html#toList",
          "type": "function"
        },
        "index": {
          "description": "Convert to list of key value pairs",
          "hierarchy": "Data HamtMap",
          "module": "Data.HamtMap",
          "name": "toList",
          "normalized": "HamtMap a b-\u003e[(a,b)]",
          "package": "hamtmap",
          "partial": "List",
          "signature": "HamtMap k v-\u003e[(k,v)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hamtmap/docs/Data-HamtMap.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe expression (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eupdate\u003c/a\u003e\u003c/code\u003e f k map\u003c/code\u003e) updates the value \u003ccode\u003ex\u003c/code\u003e\n at \u003ccode\u003ek\u003c/code\u003e (if it is in the map). If (\u003ccode\u003ef x\u003c/code\u003e) is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, the element is\n deleted. If it is (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e y\u003c/code\u003e), the key \u003ccode\u003ek\u003c/code\u003e is bound to the new value \u003ccode\u003ey\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.HamtMap",
          "name": "update",
          "package": "hamtmap",
          "signature": "(v -\u003e Maybe v) -\u003e k -\u003e HamtMap k v -\u003e HamtMap k v",
          "source": "src/Data-HamtMap.html#update",
          "type": "function"
        },
        "index": {
          "description": "The expression update map updates the value at if it is in the map If is Nothing the element is deleted If it is Just the key is bound to the new value",
          "hierarchy": "Data HamtMap",
          "module": "Data.HamtMap",
          "name": "update",
          "normalized": "(a-\u003eMaybe a)-\u003eb-\u003eHamtMap b a-\u003eHamtMap b a",
          "package": "hamtmap",
          "signature": "(v-\u003eMaybe v)-\u003ek-\u003eHamtMap k v-\u003eHamtMap k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hamtmap/docs/Data-HamtMap.html#v:update"
      }
    }
  ]
]