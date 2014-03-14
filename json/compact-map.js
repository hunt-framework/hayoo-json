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
        "word": "compact-map"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CompactMap",
          "name": "Map",
          "package": "compact-map",
          "source": "http://hackage.haskell.org/package/compact-map/docs/src/Data-CompactMap.html#Map",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data CompactMap",
          "module": "Data.CompactMap",
          "name": "Map",
          "package": "compact-map",
          "partial": "Map",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/compact-map/docs/Data-CompactMap.html#t:Map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Find the value at a key.\n Calls \u003ctt\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/tt\u003e when the element can not be found.\n\u003c/p\u003e\u003cpre\u003e fromList [(5,'a'), (3,'b')] ! 1    Error: element not in the map\n fromList [(5,'a'), (3,'b')] ! 5 == 'a'\n\u003c/pre\u003e",
          "module": "Data.CompactMap",
          "name": "!",
          "package": "compact-map",
          "signature": "Map k a -\u003e k -\u003e a",
          "source": "http://hackage.haskell.org/package/compact-map/docs/src/Data-CompactMap.html#%21",
          "type": "function"
        },
        "index": {
          "description": "log Find the value at key Calls error when the element can not be found fromList Error element not in the map fromList",
          "hierarchy": "Data CompactMap",
          "module": "Data.CompactMap",
          "name": "!",
          "normalized": "Map a b-\u003ea-\u003eb",
          "package": "compact-map",
          "signature": "Map k a-\u003ek-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-map/docs/Data-CompactMap.html#v:!"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Update a value at a specific key with the result of the provided function.\n When the key is not\n a member of the map, the original map is returned.\n\u003c/p\u003e\u003cpre\u003e adjust (\"new \" ++) 5 (fromList [(5,\"a\"), (3,\"b\")]) == fromList [(3, \"b\"), (5, \"new a\")]\n adjust (\"new \" ++) 7 (fromList [(5,\"a\"), (3,\"b\")]) == fromList [(3, \"b\"), (5, \"a\")]\n adjust (\"new \" ++) 7 empty                         == empty\n\u003c/pre\u003e",
          "module": "Data.CompactMap",
          "name": "adjust",
          "package": "compact-map",
          "signature": "(a -\u003e a) -\u003e k -\u003e Map k a -\u003e Map k a",
          "source": "http://hackage.haskell.org/package/compact-map/docs/src/Data-CompactMap.html#adjust",
          "type": "function"
        },
        "index": {
          "description": "log Update value at specific key with the result of the provided function When the key is not member of the map the original map is returned adjust new fromList fromList new adjust new fromList fromList adjust new empty empty",
          "hierarchy": "Data CompactMap",
          "module": "Data.CompactMap",
          "name": "adjust",
          "normalized": "(a-\u003ea)-\u003eb-\u003eMap b a-\u003eMap b a",
          "package": "compact-map",
          "signature": "(a-\u003ea)-\u003ek-\u003eMap k a-\u003eMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-map/docs/Data-CompactMap.html#v:adjust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Adjust a value at a specific key. When the key is not\n a member of the map, the original map is returned.\n\u003c/p\u003e\u003cpre\u003e let f key x = (show key) ++ \":new \" ++ x\n adjustWithKey f 5 (fromList [(5,\"a\"), (3,\"b\")]) == fromList [(3, \"b\"), (5, \"5:new a\")]\n adjustWithKey f 7 (fromList [(5,\"a\"), (3,\"b\")]) == fromList [(3, \"b\"), (5, \"a\")]\n adjustWithKey f 7 empty                         == empty\n\u003c/pre\u003e",
          "module": "Data.CompactMap",
          "name": "adjustWithKey",
          "package": "compact-map",
          "signature": "(k -\u003e a -\u003e a) -\u003e k -\u003e Map k a -\u003e Map k a",
          "source": "http://hackage.haskell.org/package/compact-map/docs/src/Data-CompactMap.html#adjustWithKey",
          "type": "function"
        },
        "index": {
          "description": "log Adjust value at specific key When the key is not member of the map the original map is returned let key show key new adjustWithKey fromList fromList new adjustWithKey fromList fromList adjustWithKey empty empty",
          "hierarchy": "Data CompactMap",
          "module": "Data.CompactMap",
          "name": "adjustWithKey",
          "normalized": "(a-\u003eb-\u003eb)-\u003ea-\u003eMap a b-\u003eMap a b",
          "package": "compact-map",
          "partial": "With Key",
          "signature": "(k-\u003ea-\u003ea)-\u003ek-\u003eMap k a-\u003eMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-map/docs/Data-CompactMap.html#v:adjustWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. The expression (\u003ctt\u003e\u003ctt\u003e\u003ca\u003ealter\u003c/a\u003e\u003c/tt\u003e f k map\u003c/tt\u003e) alters the value \u003ctt\u003ex\u003c/tt\u003e at \u003ctt\u003ek\u003c/tt\u003e, or absence thereof.\n \u003ctt\u003e\u003ca\u003ealter\u003c/a\u003e\u003c/tt\u003e can be used to insert, delete, or update a value in a \u003ctt\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/tt\u003e.\n In short : \u003ctt\u003e\u003ctt\u003e\u003ca\u003elookup\u003c/a\u003e\u003c/tt\u003e k (\u003ctt\u003e\u003ca\u003ealter\u003c/a\u003e\u003c/tt\u003e f k m) = f (\u003ctt\u003e\u003ca\u003elookup\u003c/a\u003e\u003c/tt\u003e k m)\u003c/tt\u003e.\n\u003c/p\u003e\u003cpre\u003e let f _ = Nothing\n alter f 7 (fromList [(5,\"a\"), (3,\"b\")]) == fromList [(3, \"b\"), (5, \"a\")]\n alter f 5 (fromList [(5,\"a\"), (3,\"b\")]) == singleton 3 \"b\"\n\n let f _ = Just \"c\"\n alter f 7 (fromList [(5,\"a\"), (3,\"b\")]) == fromList [(3, \"b\"), (5, \"a\"), (7, \"c\")]\n alter f 5 (fromList [(5,\"a\"), (3,\"b\")]) == fromList [(3, \"b\"), (5, \"c\")]\n\u003c/pre\u003e",
          "module": "Data.CompactMap",
          "name": "alter",
          "package": "compact-map",
          "signature": "(Maybe a -\u003e Maybe a) -\u003e k -\u003e Map k a -\u003e Map k a",
          "source": "http://hackage.haskell.org/package/compact-map/docs/src/Data-CompactMap.html#alter",
          "type": "function"
        },
        "index": {
          "description": "log The expression alter map alters the value at or absence thereof alter can be used to insert delete or update value in Map In short lookup alter lookup let Nothing alter fromList fromList alter fromList singleton let Just alter fromList fromList alter fromList fromList",
          "hierarchy": "Data CompactMap",
          "module": "Data.CompactMap",
          "name": "alter",
          "normalized": "(Maybe a-\u003eMaybe a)-\u003eb-\u003eMap b a-\u003eMap b a",
          "package": "compact-map",
          "signature": "(Maybe a-\u003eMaybe a)-\u003ek-\u003eMap k a-\u003eMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-map/docs/Data-CompactMap.html#v:alter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Return all key/value pairs in the map in ascending key order.\n\u003c/p\u003e\u003cpre\u003e assocs (fromList [(5,\"a\"), (3,\"b\")]) == [(3,\"b\"), (5,\"a\")]\n assocs empty == []\n\u003c/pre\u003e",
          "module": "Data.CompactMap",
          "name": "assocs",
          "package": "compact-map",
          "signature": "Map k a -\u003e [(k, a)]",
          "source": "http://hackage.haskell.org/package/compact-map/docs/src/Data-CompactMap.html#assocs",
          "type": "function"
        },
        "index": {
          "description": "Return all key value pairs in the map in ascending key order assocs fromList assocs empty",
          "hierarchy": "Data CompactMap",
          "module": "Data.CompactMap",
          "name": "assocs",
          "normalized": "Map a b-\u003e[(a,b)]",
          "package": "compact-map",
          "signature": "Map k a-\u003e[(k,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-map/docs/Data-CompactMap.html#v:assocs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Delete a key and its value from the map. When the key is not\n a member of the map, the original map is returned.\n\u003c/p\u003e\u003cpre\u003e delete 5 (fromList [(5,\"a\"), (3,\"b\")]) == singleton 3 \"b\"\n delete 7 (fromList [(5,\"a\"), (3,\"b\")]) == fromList [(3, \"b\"), (5, \"a\")]\n delete 5 empty                         == empty\n\u003c/pre\u003e",
          "module": "Data.CompactMap",
          "name": "delete",
          "package": "compact-map",
          "signature": "k -\u003e Map k a -\u003e Map k a",
          "source": "http://hackage.haskell.org/package/compact-map/docs/src/Data-CompactMap.html#delete",
          "type": "function"
        },
        "index": {
          "description": "log Delete key and its value from the map When the key is not member of the map the original map is returned delete fromList singleton delete fromList fromList delete empty empty",
          "hierarchy": "Data CompactMap",
          "module": "Data.CompactMap",
          "name": "delete",
          "normalized": "a-\u003eMap a b-\u003eMap a b",
          "package": "compact-map",
          "signature": "k-\u003eMap k a-\u003eMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-map/docs/Data-CompactMap.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Delete and find the minimal element.\n\u003c/p\u003e\u003cpre\u003e deleteFindMin (fromList [(5,\"a\"), (3,\"b\"), (10,\"c\")]) == ((3,\"b\"), fromList[(5,\"a\"), (10,\"c\")]) \n deleteFindMin empty                                   == (Error: can not return the minimal element of an empty map,empty)\n\u003c/pre\u003e",
          "module": "Data.CompactMap",
          "name": "deleteFindMin",
          "package": "compact-map",
          "signature": "Map k a -\u003e ((k, a), Map k a)",
          "source": "http://hackage.haskell.org/package/compact-map/docs/src/Data-CompactMap.html#deleteFindMin",
          "type": "function"
        },
        "index": {
          "description": "log Delete and find the minimal element deleteFindMin fromList fromList deleteFindMin empty Error can not return the minimal element of an empty map empty",
          "hierarchy": "Data CompactMap",
          "module": "Data.CompactMap",
          "name": "deleteFindMin",
          "normalized": "Map a b-\u003e((a,b),Map a b)",
          "package": "compact-map",
          "partial": "Find Min",
          "signature": "Map k a-\u003e((k,a),Map k a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-map/docs/Data-CompactMap.html#v:deleteFindMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Delete the minimal key. Returns an empty map if the map is empty.\n\u003c/p\u003e\u003cpre\u003e deleteMin (fromList [(5,\"a\"), (3,\"b\"), (7,\"c\")]) == fromList [(5,\"a\"), (7,\"c\")]\n deleteMin empty == empty\n\u003c/pre\u003e",
          "module": "Data.CompactMap",
          "name": "deleteMin",
          "package": "compact-map",
          "signature": "Map k a -\u003e Map k a",
          "source": "http://hackage.haskell.org/package/compact-map/docs/src/Data-CompactMap.html#deleteMin",
          "type": "function"
        },
        "index": {
          "description": "log Delete the minimal key Returns an empty map if the map is empty deleteMin fromList fromList deleteMin empty empty",
          "hierarchy": "Data CompactMap",
          "module": "Data.CompactMap",
          "name": "deleteMin",
          "normalized": "Map a b-\u003eMap a b",
          "package": "compact-map",
          "partial": "Min",
          "signature": "Map k a-\u003eMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-map/docs/Data-CompactMap.html#v:deleteMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.\n Return all elements of the map in the ascending order of their keys.\n\u003c/p\u003e\u003cpre\u003e elems (fromList [(5,\"a\"), (3,\"b\")]) == [\"b\",\"a\"]\n elems empty == []\n\u003c/pre\u003e",
          "module": "Data.CompactMap",
          "name": "elems",
          "package": "compact-map",
          "signature": "Map k a -\u003e [a]",
          "source": "http://hackage.haskell.org/package/compact-map/docs/src/Data-CompactMap.html#elems",
          "type": "function"
        },
        "index": {
          "description": "Return all elements of the map in the ascending order of their keys elems fromList elems empty",
          "hierarchy": "Data CompactMap",
          "module": "Data.CompactMap",
          "name": "elems",
          "normalized": "Map a b-\u003e[b]",
          "package": "compact-map",
          "signature": "Map k a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-map/docs/Data-CompactMap.html#v:elems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. The empty map.\n\u003c/p\u003e\u003cpre\u003e empty      == fromList []\n size empty == 0\n\u003c/pre\u003e",
          "module": "Data.CompactMap",
          "name": "empty",
          "package": "compact-map",
          "signature": "Map k a",
          "source": "http://hackage.haskell.org/package/compact-map/docs/src/Data-CompactMap.html#empty",
          "type": "function"
        },
        "index": {
          "description": "The empty map empty fromList size empty",
          "hierarchy": "Data CompactMap",
          "module": "Data.CompactMap",
          "name": "empty",
          "package": "compact-map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-map/docs/Data-CompactMap.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Filter all values that satisfy the predicate.\n\u003c/p\u003e\u003cpre\u003e filter (\u003e \"a\") (fromList [(5,\"a\"), (3,\"b\")]) == singleton 3 \"b\"\n filter (\u003e \"x\") (fromList [(5,\"a\"), (3,\"b\")]) == empty\n filter (\u003c \"a\") (fromList [(5,\"a\"), (3,\"b\")]) == empty\n\u003c/pre\u003e",
          "module": "Data.CompactMap",
          "name": "filter",
          "package": "compact-map",
          "signature": "(a -\u003e Bool) -\u003e Map k a -\u003e Map k a",
          "source": "http://hackage.haskell.org/package/compact-map/docs/src/Data-CompactMap.html#filter",
          "type": "function"
        },
        "index": {
          "description": "Filter all values that satisfy the predicate filter fromList singleton filter fromList empty filter fromList empty",
          "hierarchy": "Data CompactMap",
          "module": "Data.CompactMap",
          "name": "filter",
          "normalized": "(a-\u003eBool)-\u003eMap b a-\u003eMap b a",
          "package": "compact-map",
          "signature": "(a-\u003eBool)-\u003eMap k a-\u003eMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-map/docs/Data-CompactMap.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Filter all keys/values that satisfy the predicate.\n\u003c/p\u003e\u003cpre\u003e filterWithKey (\\k _ -\u003e k \u003e 4) (fromList [(5,\"a\"), (3,\"b\")]) == singleton 5 \"a\"\n\u003c/pre\u003e",
          "module": "Data.CompactMap",
          "name": "filterWithKey",
          "package": "compact-map",
          "signature": "(k -\u003e a -\u003e Bool) -\u003e Map k a -\u003e Map k a",
          "source": "http://hackage.haskell.org/package/compact-map/docs/src/Data-CompactMap.html#filterWithKey",
          "type": "function"
        },
        "index": {
          "description": "Filter all keys values that satisfy the predicate filterWithKey fromList singleton",
          "hierarchy": "Data CompactMap",
          "module": "Data.CompactMap",
          "name": "filterWithKey",
          "normalized": "(a-\u003eb-\u003eBool)-\u003eMap a b-\u003eMap a b",
          "package": "compact-map",
          "partial": "With Key",
          "signature": "(k-\u003ea-\u003eBool)-\u003eMap k a-\u003eMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-map/docs/Data-CompactMap.html#v:filterWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. The maximal key of the map. Calls \u003ctt\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/tt\u003e is the map is empty.\n\u003c/p\u003e\u003cpre\u003e findMax (fromList [(5,\"a\"), (3,\"b\")]) == (5,\"a\")\n findMax empty                            Error: empty map has no maximal element\n\u003c/pre\u003e",
          "module": "Data.CompactMap",
          "name": "findMax",
          "package": "compact-map",
          "signature": "Map k a -\u003e (k, a)",
          "source": "http://hackage.haskell.org/package/compact-map/docs/src/Data-CompactMap.html#findMax",
          "type": "function"
        },
        "index": {
          "description": "log The maximal key of the map Calls error is the map is empty findMax fromList findMax empty Error empty map has no maximal element",
          "hierarchy": "Data CompactMap",
          "module": "Data.CompactMap",
          "name": "findMax",
          "normalized": "Map a b-\u003e(a,b)",
          "package": "compact-map",
          "partial": "Max",
          "signature": "Map k a-\u003e(k,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-map/docs/Data-CompactMap.html#v:findMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. The minimal key of the map. Calls \u003ctt\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/tt\u003e is the map is empty.\n\u003c/p\u003e\u003cpre\u003e findMin (fromList [(5,\"a\"), (3,\"b\")]) == (3,\"b\")\n findMin empty                            Error: empty map has no minimal element\n\u003c/pre\u003e",
          "module": "Data.CompactMap",
          "name": "findMin",
          "package": "compact-map",
          "signature": "Map k a -\u003e (k, a)",
          "source": "http://hackage.haskell.org/package/compact-map/docs/src/Data-CompactMap.html#findMin",
          "type": "function"
        },
        "index": {
          "description": "log The minimal key of the map Calls error is the map is empty findMin fromList findMin empty Error empty map has no minimal element",
          "hierarchy": "Data CompactMap",
          "module": "Data.CompactMap",
          "name": "findMin",
          "normalized": "Map a b-\u003e(a,b)",
          "package": "compact-map",
          "partial": "Min",
          "signature": "Map k a-\u003e(k,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-map/docs/Data-CompactMap.html#v:findMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. The expression \u003ctt\u003e(\u003ctt\u003e\u003ca\u003efindWithDefault\u003c/a\u003e\u003c/tt\u003e def k map)\u003c/tt\u003e returns\n the value at key \u003ctt\u003ek\u003c/tt\u003e or returns default value \u003ctt\u003edef\u003c/tt\u003e\n when the key is not in the map.\n\u003c/p\u003e\u003cpre\u003e findWithDefault 'x' 1 (fromList [(5,'a'), (3,'b')]) == 'x'\n findWithDefault 'x' 5 (fromList [(5,'a'), (3,'b')]) == 'a'\n\u003c/pre\u003e",
          "module": "Data.CompactMap",
          "name": "findWithDefault",
          "package": "compact-map",
          "signature": "a -\u003e k -\u003e Map k a -\u003e a",
          "source": "http://hackage.haskell.org/package/compact-map/docs/src/Data-CompactMap.html#findWithDefault",
          "type": "function"
        },
        "index": {
          "description": "log The expression findWithDefault def map returns the value at key or returns default value def when the key is not in the map findWithDefault fromList findWithDefault fromList",
          "hierarchy": "Data CompactMap",
          "module": "Data.CompactMap",
          "name": "findWithDefault",
          "normalized": "a-\u003eb-\u003eMap b a-\u003ea",
          "package": "compact-map",
          "partial": "With Default",
          "signature": "a-\u003ek-\u003eMap k a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-map/docs/Data-CompactMap.html#v:findWithDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Fold the values in the map, such that\n \u003ctt\u003e\u003ctt\u003e\u003ca\u003efold\u003c/a\u003e\u003c/tt\u003e f z == \u003ctt\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/tt\u003e f z . \u003ctt\u003e\u003ca\u003eelems\u003c/a\u003e\u003c/tt\u003e\u003c/tt\u003e.\n For example,\n\u003c/p\u003e\u003cpre\u003e elems map = fold (:) [] map\n\u003c/pre\u003e\u003cpre\u003e let f a len = len + (length a)\n fold f 0 (fromList [(5,\"a\"), (3,\"bbb\")]) == 4\n\u003c/pre\u003e",
          "module": "Data.CompactMap",
          "name": "fold",
          "package": "compact-map",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e Map k a -\u003e b",
          "source": "http://hackage.haskell.org/package/compact-map/docs/src/Data-CompactMap.html#fold",
          "type": "function"
        },
        "index": {
          "description": "Fold the values in the map such that fold foldr elems For example elems map fold map let len len length fold fromList bbb",
          "hierarchy": "Data CompactMap",
          "module": "Data.CompactMap",
          "name": "fold",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eMap c a-\u003eb",
          "package": "compact-map",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eMap k a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-map/docs/Data-CompactMap.html#v:fold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Fold the keys and values in the map, such that\n \u003ctt\u003e\u003ctt\u003e\u003ca\u003efoldWithKey\u003c/a\u003e\u003c/tt\u003e f z == \u003ctt\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/tt\u003e (\u003ctt\u003e\u003ca\u003euncurry\u003c/a\u003e\u003c/tt\u003e f) z . \u003ctt\u003e\u003ca\u003etoAscList\u003c/a\u003e\u003c/tt\u003e\u003c/tt\u003e.\n For example,\n\u003c/p\u003e\u003cpre\u003e keys map = foldWithKey (\\k x ks -\u003e k:ks) [] map\n\u003c/pre\u003e\u003cpre\u003e let f k a result = result ++ \"(\" ++ (show k) ++ \":\" ++ a ++ \")\"\n foldWithKey f \"Map: \" (fromList [(5,\"a\"), (3,\"b\")]) == \"Map: (5:a)(3:b)\"\n\u003c/pre\u003e",
          "module": "Data.CompactMap",
          "name": "foldWithKey",
          "package": "compact-map",
          "signature": "(k -\u003e a -\u003e b -\u003e b) -\u003e b -\u003e Map k a -\u003e b",
          "source": "http://hackage.haskell.org/package/compact-map/docs/src/Data-CompactMap.html#foldWithKey",
          "type": "function"
        },
        "index": {
          "description": "Fold the keys and values in the map such that foldWithKey foldr uncurry toAscList For example keys map foldWithKey ks ks map let result result show foldWithKey Map fromList Map",
          "hierarchy": "Data CompactMap",
          "module": "Data.CompactMap",
          "name": "foldWithKey",
          "normalized": "(a-\u003eb-\u003ec-\u003ec)-\u003ec-\u003eMap a b-\u003ec",
          "package": "compact-map",
          "partial": "With Key",
          "signature": "(k-\u003ea-\u003eb-\u003eb)-\u003eb-\u003eMap k a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-map/docs/Data-CompactMap.html#v:foldWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Build a map from an ascending list in linear time.\n \u003cem\u003eThe precondition (input list is ascending) is not checked.\u003c/em\u003e\n\u003c/p\u003e\u003cpre\u003e fromAscList [(3,\"b\"), (5,\"a\")]          == fromList [(3, \"b\"), (5, \"a\")]\n fromAscList [(3,\"b\"), (5,\"a\"), (5,\"b\")] == fromList [(3, \"b\"), (5, \"b\")]\n valid (fromAscList [(3,\"b\"), (5,\"a\"), (5,\"b\")]) == True\n valid (fromAscList [(5,\"a\"), (3,\"b\"), (5,\"b\")]) == False\n\u003c/pre\u003e",
          "module": "Data.CompactMap",
          "name": "fromAscList",
          "package": "compact-map",
          "signature": "[(k, a)] -\u003e Map k a",
          "source": "http://hackage.haskell.org/package/compact-map/docs/src/Data-CompactMap.html#fromAscList",
          "type": "function"
        },
        "index": {
          "description": "Build map from an ascending list in linear time The precondition input list is ascending is not checked fromAscList fromList fromAscList fromList valid fromAscList True valid fromAscList False",
          "hierarchy": "Data CompactMap",
          "module": "Data.CompactMap",
          "name": "fromAscList",
          "normalized": "[(a,b)]-\u003eMap a b",
          "package": "compact-map",
          "partial": "Asc List",
          "signature": "[(k,a)]-\u003eMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-map/docs/Data-CompactMap.html#v:fromAscList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Build a map from an ascending list in linear time with a combining function for equal keys.\n \u003cem\u003eThe precondition (input list is ascending) is not checked.\u003c/em\u003e\n\u003c/p\u003e\u003cpre\u003e fromAscListWith (++) [(3,\"b\"), (5,\"a\"), (5,\"b\")] == fromList [(3, \"b\"), (5, \"ba\")]\n valid (fromAscListWith (++) [(3,\"b\"), (5,\"a\"), (5,\"b\")]) == True\n valid (fromAscListWith (++) [(5,\"a\"), (3,\"b\"), (5,\"b\")]) == False\n\u003c/pre\u003e",
          "module": "Data.CompactMap",
          "name": "fromAscListWith",
          "package": "compact-map",
          "signature": "(a -\u003e a -\u003e a) -\u003e [(k, a)] -\u003e Map k a",
          "source": "http://hackage.haskell.org/package/compact-map/docs/src/Data-CompactMap.html#fromAscListWith",
          "type": "function"
        },
        "index": {
          "description": "Build map from an ascending list in linear time with combining function for equal keys The precondition input list is ascending is not checked fromAscListWith fromList ba valid fromAscListWith True valid fromAscListWith False",
          "hierarchy": "Data CompactMap",
          "module": "Data.CompactMap",
          "name": "fromAscListWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[(b,a)]-\u003eMap b a",
          "package": "compact-map",
          "partial": "Asc List With",
          "signature": "(a-\u003ea-\u003ea)-\u003e[(k,a)]-\u003eMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-map/docs/Data-CompactMap.html#v:fromAscListWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Build a map from an ascending list in linear time with a\n combining function for equal keys.\n \u003cem\u003eThe precondition (input list is ascending) is not checked.\u003c/em\u003e\n\u003c/p\u003e\u003cpre\u003e let f k a1 a2 = (show k) ++ \":\" ++ a1 ++ a2\n fromAscListWithKey f [(3,\"b\"), (5,\"a\"), (5,\"b\"), (5,\"b\")] == fromList [(3, \"b\"), (5, \"5:b5:ba\")]\n valid (fromAscListWithKey f [(3,\"b\"), (5,\"a\"), (5,\"b\"), (5,\"b\")]) == True\n valid (fromAscListWithKey f [(5,\"a\"), (3,\"b\"), (5,\"b\"), (5,\"b\")]) == False\n\u003c/pre\u003e",
          "module": "Data.CompactMap",
          "name": "fromAscListWithKey",
          "package": "compact-map",
          "signature": "(k -\u003e a -\u003e a -\u003e a) -\u003e [(k, a)] -\u003e Map k a",
          "source": "http://hackage.haskell.org/package/compact-map/docs/src/Data-CompactMap.html#fromAscListWithKey",
          "type": "function"
        },
        "index": {
          "description": "Build map from an ascending list in linear time with combining function for equal keys The precondition input list is ascending is not checked let a1 a2 show a1 a2 fromAscListWithKey fromList b5 ba valid fromAscListWithKey True valid fromAscListWithKey False",
          "hierarchy": "Data CompactMap",
          "module": "Data.CompactMap",
          "name": "fromAscListWithKey",
          "normalized": "(a-\u003eb-\u003eb-\u003eb)-\u003e[(a,b)]-\u003eMap a b",
          "package": "compact-map",
          "partial": "Asc List With Key",
          "signature": "(k-\u003ea-\u003ea-\u003ea)-\u003e[(k,a)]-\u003eMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-map/docs/Data-CompactMap.html#v:fromAscListWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Build a map from an ascending list of distinct elements in linear time.\n \u003cem\u003eThe precondition is not checked.\u003c/em\u003e\n\u003c/p\u003e\u003cpre\u003e fromDistinctAscList [(3,\"b\"), (5,\"a\")] == fromList [(3, \"b\"), (5, \"a\")]\n valid (fromDistinctAscList [(3,\"b\"), (5,\"a\")])          == True\n valid (fromDistinctAscList [(3,\"b\"), (5,\"a\"), (5,\"b\")]) == False\n\u003c/pre\u003e",
          "module": "Data.CompactMap",
          "name": "fromDistinctAscList",
          "package": "compact-map",
          "signature": "[(k, a)] -\u003e Map k a",
          "source": "http://hackage.haskell.org/package/compact-map/docs/src/Data-CompactMap.html#fromDistinctAscList",
          "type": "function"
        },
        "index": {
          "description": "Build map from an ascending list of distinct elements in linear time The precondition is not checked fromDistinctAscList fromList valid fromDistinctAscList True valid fromDistinctAscList False",
          "hierarchy": "Data CompactMap",
          "module": "Data.CompactMap",
          "name": "fromDistinctAscList",
          "normalized": "[(a,b)]-\u003eMap a b",
          "package": "compact-map",
          "partial": "Distinct Asc List",
          "signature": "[(k,a)]-\u003eMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-map/docs/Data-CompactMap.html#v:fromDistinctAscList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n*log n)\u003c/em\u003e. Build a map from a list of key/value pairs. See also \u003ctt\u003e\u003ca\u003efromAscList\u003c/a\u003e\u003c/tt\u003e.\n If the list contains more than one value for the same key, the last value\n for the key is retained.\n\u003c/p\u003e\u003cpre\u003e fromList [] == empty\n fromList [(5,\"a\"), (3,\"b\"), (5, \"c\")] == fromList [(5,\"c\"), (3,\"b\")]\n fromList [(5,\"c\"), (3,\"b\"), (5, \"a\")] == fromList [(5,\"a\"), (3,\"b\")]\n\u003c/pre\u003e",
          "module": "Data.CompactMap",
          "name": "fromList",
          "package": "compact-map",
          "signature": "[(k, a)] -\u003e Map k a",
          "source": "http://hackage.haskell.org/package/compact-map/docs/src/Data-CompactMap.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "log Build map from list of key value pairs See also fromAscList If the list contains more than one value for the same key the last value for the key is retained fromList empty fromList fromList fromList fromList",
          "hierarchy": "Data CompactMap",
          "module": "Data.CompactMap",
          "name": "fromList",
          "normalized": "[(a,b)]-\u003eMap a b",
          "package": "compact-map",
          "partial": "List",
          "signature": "[(k,a)]-\u003eMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-map/docs/Data-CompactMap.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n*log n)\u003c/em\u003e. Build a map from a list of key/value pairs with a combining function. See also \u003ctt\u003e\u003ca\u003efromAscListWith\u003c/a\u003e\u003c/tt\u003e.\n\u003c/p\u003e\u003cpre\u003e fromListWith (++) [(5,\"a\"), (5,\"b\"), (3,\"b\"), (3,\"a\"), (5,\"a\")] == fromList [(3, \"ab\"), (5, \"aba\")]\n fromListWith (++) [] == empty\n\u003c/pre\u003e",
          "module": "Data.CompactMap",
          "name": "fromListWith",
          "package": "compact-map",
          "signature": "(a -\u003e a -\u003e a) -\u003e [(k, a)] -\u003e Map k a",
          "source": "http://hackage.haskell.org/package/compact-map/docs/src/Data-CompactMap.html#fromListWith",
          "type": "function"
        },
        "index": {
          "description": "log Build map from list of key value pairs with combining function See also fromAscListWith fromListWith fromList ab aba fromListWith empty",
          "hierarchy": "Data CompactMap",
          "module": "Data.CompactMap",
          "name": "fromListWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[(b,a)]-\u003eMap b a",
          "package": "compact-map",
          "partial": "List With",
          "signature": "(a-\u003ea-\u003ea)-\u003e[(k,a)]-\u003eMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-map/docs/Data-CompactMap.html#v:fromListWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n*log n)\u003c/em\u003e. Build a map from a list of key/value pairs with a combining function. See also \u003ctt\u003e\u003ca\u003efromAscListWithKey\u003c/a\u003e\u003c/tt\u003e.\n\u003c/p\u003e\u003cpre\u003e let f k a1 a2 = (show k) ++ a1 ++ a2\n fromListWithKey f [(5,\"a\"), (5,\"b\"), (3,\"b\"), (3,\"a\"), (5,\"a\")] == fromList [(3, \"3ab\"), (5, \"5a5ba\")]\n fromListWithKey f [] == empty\n\u003c/pre\u003e",
          "module": "Data.CompactMap",
          "name": "fromListWithKey",
          "package": "compact-map",
          "signature": "(k -\u003e a -\u003e a -\u003e a) -\u003e [(k, a)] -\u003e Map k a",
          "source": "http://hackage.haskell.org/package/compact-map/docs/src/Data-CompactMap.html#fromListWithKey",
          "type": "function"
        },
        "index": {
          "description": "log Build map from list of key value pairs with combining function See also fromAscListWithKey let a1 a2 show a1 a2 fromListWithKey fromList ab a5ba fromListWithKey empty",
          "hierarchy": "Data CompactMap",
          "module": "Data.CompactMap",
          "name": "fromListWithKey",
          "normalized": "(a-\u003eb-\u003eb-\u003eb)-\u003e[(a,b)]-\u003eMap a b",
          "package": "compact-map",
          "partial": "List With Key",
          "signature": "(k-\u003ea-\u003ea-\u003ea)-\u003e[(k,a)]-\u003eMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-map/docs/Data-CompactMap.html#v:fromListWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Insert a new key and value in the map.\n If the key is already present in the map, the associated value is\n replaced with the supplied value. \u003ctt\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/tt\u003e is equivalent to\n \u003ctt\u003e\u003ctt\u003e\u003ca\u003einsertWith\u003c/a\u003e\u003c/tt\u003e \u003ctt\u003e\u003ca\u003econst\u003c/a\u003e\u003c/tt\u003e\u003c/tt\u003e.\n\u003c/p\u003e\u003cpre\u003e insert 5 'x' (fromList [(5,'a'), (3,'b')]) == fromList [(3, 'b'), (5, 'x')]\n insert 7 'x' (fromList [(5,'a'), (3,'b')]) == fromList [(3, 'b'), (5, 'a'), (7, 'x')]\n insert 5 'x' empty                         == singleton 5 'x'\n\u003c/pre\u003e",
          "module": "Data.CompactMap",
          "name": "insert",
          "package": "compact-map",
          "signature": "k -\u003e a -\u003e Map k a -\u003e Map k a",
          "source": "http://hackage.haskell.org/package/compact-map/docs/src/Data-CompactMap.html#insert",
          "type": "function"
        },
        "index": {
          "description": "log Insert new key and value in the map If the key is already present in the map the associated value is replaced with the supplied value insert is equivalent to insertWith const insert fromList fromList insert fromList fromList insert empty singleton",
          "hierarchy": "Data CompactMap",
          "module": "Data.CompactMap",
          "name": "insert",
          "normalized": "a-\u003eb-\u003eMap a b-\u003eMap a b",
          "package": "compact-map",
          "signature": "k-\u003ea-\u003eMap k a-\u003eMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-map/docs/Data-CompactMap.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Combines insert operation with old value retrieval.\n The expression (\u003ctt\u003e\u003ctt\u003e\u003ca\u003einsertLookupWithKey\u003c/a\u003e\u003c/tt\u003e f k x map\u003c/tt\u003e)\n is a pair where the first element is equal to (\u003ctt\u003e\u003ctt\u003e\u003ca\u003elookup\u003c/a\u003e\u003c/tt\u003e k map\u003c/tt\u003e)\n and the second element equal to (\u003ctt\u003e\u003ctt\u003e\u003ca\u003einsertWithKey\u003c/a\u003e\u003c/tt\u003e f k x map\u003c/tt\u003e).\n\u003c/p\u003e\u003cpre\u003e let f key new_value old_value = (show key) ++ \":\" ++ new_value ++ \"|\" ++ old_value\n insertLookupWithKey f 5 \"xxx\" (fromList [(5,\"a\"), (3,\"b\")]) == (Just \"a\", fromList [(3, \"b\"), (5, \"5:xxx|a\")])\n insertLookupWithKey f 7 \"xxx\" (fromList [(5,\"a\"), (3,\"b\")]) == (Nothing,  fromList [(3, \"b\"), (5, \"a\"), (7, \"xxx\")])\n insertLookupWithKey f 5 \"xxx\" empty                         == (Nothing,  singleton 5 \"xxx\")\n\u003c/pre\u003e\u003cp\u003eThis is how to define \u003ctt\u003einsertLookup\u003c/tt\u003e using \u003ctt\u003einsertLookupWithKey\u003c/tt\u003e:\n\u003c/p\u003e\u003cpre\u003e let insertLookup kx x t = insertLookupWithKey (\\_ a _ -\u003e a) kx x t\n insertLookup 5 \"x\" (fromList [(5,\"a\"), (3,\"b\")]) == (Just \"a\", fromList [(3, \"b\"), (5, \"x\")])\n insertLookup 7 \"x\" (fromList [(5,\"a\"), (3,\"b\")]) == (Nothing,  fromList [(3, \"b\"), (5, \"a\"), (7, \"x\")])\n\u003c/pre\u003e",
          "module": "Data.CompactMap",
          "name": "insertLookupWithKey",
          "package": "compact-map",
          "signature": "(k -\u003e a -\u003e a -\u003e a) -\u003e k -\u003e a -\u003e Map k a -\u003e (Maybe a, Map k a)",
          "source": "http://hackage.haskell.org/package/compact-map/docs/src/Data-CompactMap.html#insertLookupWithKey",
          "type": "function"
        },
        "index": {
          "description": "log Combines insert operation with old value retrieval The expression insertLookupWithKey map is pair where the first element is equal to lookup map and the second element equal to insertWithKey map let key new value old value show key new value old value insertLookupWithKey xxx fromList Just fromList xxx insertLookupWithKey xxx fromList Nothing fromList xxx insertLookupWithKey xxx empty Nothing singleton xxx This is how to define insertLookup using insertLookupWithKey let insertLookup kx insertLookupWithKey kx insertLookup fromList Just fromList insertLookup fromList Nothing fromList",
          "hierarchy": "Data CompactMap",
          "module": "Data.CompactMap",
          "name": "insertLookupWithKey",
          "normalized": "(a-\u003eb-\u003eb-\u003eb)-\u003ea-\u003eb-\u003eMap a b-\u003e(Maybe b,Map a b)",
          "package": "compact-map",
          "partial": "Lookup With Key",
          "signature": "(k-\u003ea-\u003ea-\u003ea)-\u003ek-\u003ea-\u003eMap k a-\u003e(Maybe a,Map k a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-map/docs/Data-CompactMap.html#v:insertLookupWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Insert with a function, combining new value and old value.\n \u003ctt\u003e\u003ctt\u003e\u003ca\u003einsertWith\u003c/a\u003e\u003c/tt\u003e f key value mp\u003c/tt\u003e \n will insert the pair (key, value) into \u003ctt\u003emp\u003c/tt\u003e if key does\n not exist in the map. If the key does exist, the function will\n insert the pair \u003ctt\u003e(key, f new_value old_value)\u003c/tt\u003e.\n\u003c/p\u003e\u003cpre\u003e insertWith (++) 5 \"xxx\" (fromList [(5,\"a\"), (3,\"b\")]) == fromList [(3, \"b\"), (5, \"xxxa\")]\n insertWith (++) 7 \"xxx\" (fromList [(5,\"a\"), (3,\"b\")]) == fromList [(3, \"b\"), (5, \"a\"), (7, \"xxx\")]\n insertWith (++) 5 \"xxx\" empty                         == singleton 5 \"xxx\"\n\u003c/pre\u003e",
          "module": "Data.CompactMap",
          "name": "insertWith",
          "package": "compact-map",
          "signature": "(a -\u003e a -\u003e a) -\u003e k -\u003e a -\u003e Map k a -\u003e Map k a",
          "source": "http://hackage.haskell.org/package/compact-map/docs/src/Data-CompactMap.html#insertWith",
          "type": "function"
        },
        "index": {
          "description": "log Insert with function combining new value and old value insertWith key value mp will insert the pair key value into mp if key does not exist in the map If the key does exist the function will insert the pair key new value old value insertWith xxx fromList fromList xxxa insertWith xxx fromList fromList xxx insertWith xxx empty singleton xxx",
          "hierarchy": "Data CompactMap",
          "module": "Data.CompactMap",
          "name": "insertWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003eb-\u003ea-\u003eMap b a-\u003eMap b a",
          "package": "compact-map",
          "partial": "With",
          "signature": "(a-\u003ea-\u003ea)-\u003ek-\u003ea-\u003eMap k a-\u003eMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-map/docs/Data-CompactMap.html#v:insertWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Insert with a function, combining key, new value and old value.\n \u003ctt\u003e\u003ctt\u003e\u003ca\u003einsertWithKey\u003c/a\u003e\u003c/tt\u003e f key value mp\u003c/tt\u003e \n will insert the pair (key, value) into \u003ctt\u003emp\u003c/tt\u003e if key does\n not exist in the map. If the key does exist, the function will\n insert the pair \u003ctt\u003e(key,f key new_value old_value)\u003c/tt\u003e.\n Note that the key passed to f is the same key passed to \u003ctt\u003e\u003ca\u003einsertWithKey\u003c/a\u003e\u003c/tt\u003e.\n\u003c/p\u003e\u003cpre\u003e let f key new_value old_value = (show key) ++ \":\" ++ new_value ++ \"|\" ++ old_value\n insertWithKey f 5 \"xxx\" (fromList [(5,\"a\"), (3,\"b\")]) == fromList [(3, \"b\"), (5, \"5:xxx|a\")]\n insertWithKey f 7 \"xxx\" (fromList [(5,\"a\"), (3,\"b\")]) == fromList [(3, \"b\"), (5, \"a\"), (7, \"xxx\")]\n insertWithKey f 5 \"xxx\" empty                         == singleton 5 \"xxx\"\n\u003c/pre\u003e",
          "module": "Data.CompactMap",
          "name": "insertWithKey",
          "package": "compact-map",
          "signature": "(k -\u003e a -\u003e a -\u003e a) -\u003e k -\u003e a -\u003e Map k a -\u003e Map k a",
          "source": "http://hackage.haskell.org/package/compact-map/docs/src/Data-CompactMap.html#insertWithKey",
          "type": "function"
        },
        "index": {
          "description": "log Insert with function combining key new value and old value insertWithKey key value mp will insert the pair key value into mp if key does not exist in the map If the key does exist the function will insert the pair key key new value old value Note that the key passed to is the same key passed to insertWithKey let key new value old value show key new value old value insertWithKey xxx fromList fromList xxx insertWithKey xxx fromList fromList xxx insertWithKey xxx empty singleton xxx",
          "hierarchy": "Data CompactMap",
          "module": "Data.CompactMap",
          "name": "insertWithKey",
          "normalized": "(a-\u003eb-\u003eb-\u003eb)-\u003ea-\u003eb-\u003eMap a b-\u003eMap a b",
          "package": "compact-map",
          "partial": "With Key",
          "signature": "(k-\u003ea-\u003ea-\u003ea)-\u003ek-\u003ea-\u003eMap k a-\u003eMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-map/docs/Data-CompactMap.html#v:insertWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Return all keys of the map in ascending order.\n\u003c/p\u003e\u003cpre\u003e keys (fromList [(5,\"a\"), (3,\"b\")]) == [3,5]\n keys empty == []\n\u003c/pre\u003e",
          "module": "Data.CompactMap",
          "name": "keys",
          "package": "compact-map",
          "signature": "Map k a -\u003e [k]",
          "source": "http://hackage.haskell.org/package/compact-map/docs/src/Data-CompactMap.html#keys",
          "type": "function"
        },
        "index": {
          "description": "Return all keys of the map in ascending order keys fromList keys empty",
          "hierarchy": "Data CompactMap",
          "module": "Data.CompactMap",
          "name": "keys",
          "normalized": "Map a b-\u003e[a]",
          "package": "compact-map",
          "signature": "Map k a-\u003e[k]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-map/docs/Data-CompactMap.html#v:keys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. The set of all keys of the map.\n\u003c/p\u003e\u003cpre\u003e keysSet (fromList [(5,\"a\"), (3,\"b\")]) == Data.Set.fromList [3,5]\n keysSet empty == Data.Set.empty\n\u003c/pre\u003e",
          "module": "Data.CompactMap",
          "name": "keysSet",
          "package": "compact-map",
          "signature": "Map k a -\u003e Set k",
          "source": "http://hackage.haskell.org/package/compact-map/docs/src/Data-CompactMap.html#keysSet",
          "type": "function"
        },
        "index": {
          "description": "The set of all keys of the map keysSet fromList Data.Set.fromList keysSet empty Data.Set.empty",
          "hierarchy": "Data CompactMap",
          "module": "Data.CompactMap",
          "name": "keysSet",
          "normalized": "Map a b-\u003eSet a",
          "package": "compact-map",
          "partial": "Set",
          "signature": "Map k a-\u003eSet k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-map/docs/Data-CompactMap.html#v:keysSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Lookup the value at a key in the map.\n\u003c/p\u003e\u003cp\u003eThe function will return the corresponding value as \u003ctt\u003e(\u003ctt\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/tt\u003e value)\u003c/tt\u003e,\n or \u003ctt\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/tt\u003e if the key isn't in the map.\n\u003c/p\u003e\u003cp\u003eAn example of using \u003ctt\u003elookup\u003c/tt\u003e:\n\u003c/p\u003e\u003cpre\u003e import Prelude hiding (lookup)\n import Data.CompactMap\n\n employeeDept = fromList([(\"John\",\"Sales\"), (\"Bob\",\"IT\")])\n deptCountry = fromList([(\"IT\",\"USA\"), (\"Sales\",\"France\")])\n countryCurrency = fromList([(\"USA\", \"Dollar\"), (\"France\", \"Euro\")])\n\n employeeCurrency :: String -\u003e Maybe String\n employeeCurrency name = do\n     dept \u003c- lookup name employeeDept\n     country \u003c- lookup dept deptCountry\n     lookup country countryCurrency\n\n main = do\n     putStrLn $ \"John's currency: \" ++ (show (employeeCurrency \"John\"))\n     putStrLn $ \"Pete's currency: \" ++ (show (employeeCurrency \"Pete\"))\n\u003c/pre\u003e\u003cp\u003eThe output of this program:\n\u003c/p\u003e\u003cpre\u003e   John's currency: Just \"Euro\"\n   Pete's currency: Nothing\n\u003c/pre\u003e",
          "module": "Data.CompactMap",
          "name": "lookup",
          "package": "compact-map",
          "signature": "k -\u003e Map k a -\u003e Maybe a",
          "source": "http://hackage.haskell.org/package/compact-map/docs/src/Data-CompactMap.html#lookup",
          "type": "function"
        },
        "index": {
          "description": "log Lookup the value at key in the map The function will return the corresponding value as Just value or Nothing if the key isn in the map An example of using lookup import Prelude hiding lookup import Data.CompactMap employeeDept fromList John Sales Bob IT deptCountry fromList IT USA Sales France countryCurrency fromList USA Dollar France Euro employeeCurrency String Maybe String employeeCurrency name do dept lookup name employeeDept country lookup dept deptCountry lookup country countryCurrency main do putStrLn John currency show employeeCurrency John putStrLn Pete currency show employeeCurrency Pete The output of this program John currency Just Euro Pete currency Nothing",
          "hierarchy": "Data CompactMap",
          "module": "Data.CompactMap",
          "name": "lookup",
          "normalized": "a-\u003eMap a b-\u003eMaybe b",
          "package": "compact-map",
          "signature": "k-\u003eMap k a-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-map/docs/Data-CompactMap.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Map a function over all values in the map.\n\u003c/p\u003e\u003cpre\u003e map (++ \"x\") (fromList [(5,\"a\"), (3,\"b\")]) == fromList [(3, \"bx\"), (5, \"ax\")]\n\u003c/pre\u003e",
          "module": "Data.CompactMap",
          "name": "map",
          "package": "compact-map",
          "signature": "(a -\u003e b) -\u003e Map k a -\u003e Map k b",
          "source": "http://hackage.haskell.org/package/compact-map/docs/src/Data-CompactMap.html#map",
          "type": "function"
        },
        "index": {
          "description": "Map function over all values in the map map fromList fromList bx ax",
          "hierarchy": "Data CompactMap",
          "module": "Data.CompactMap",
          "name": "map",
          "normalized": "(a-\u003eb)-\u003eMap c a-\u003eMap c b",
          "package": "compact-map",
          "signature": "(a-\u003eb)-\u003eMap k a-\u003eMap k b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-map/docs/Data-CompactMap.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Map values and separate the \u003ctt\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/tt\u003e and \u003ctt\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/tt\u003e results.\n\u003c/p\u003e\u003cpre\u003e let f a = if a \u003c \"c\" then Left a else Right a\n mapEither f (fromList [(5,\"a\"), (3,\"b\"), (1,\"x\"), (7,\"z\")])\n     == (fromList [(3,\"b\"), (5,\"a\")], fromList [(1,\"x\"), (7,\"z\")])\n\n mapEither (\\ a -\u003e Right a) (fromList [(5,\"a\"), (3,\"b\"), (1,\"x\"), (7,\"z\")])\n     == (empty, fromList [(5,\"a\"), (3,\"b\"), (1,\"x\"), (7,\"z\")])\n\u003c/pre\u003e",
          "module": "Data.CompactMap",
          "name": "mapEither",
          "package": "compact-map",
          "signature": "(a -\u003e Either b c) -\u003e Map k a -\u003e (Map k b, Map k c)",
          "source": "http://hackage.haskell.org/package/compact-map/docs/src/Data-CompactMap.html#mapEither",
          "type": "function"
        },
        "index": {
          "description": "Map values and separate the Left and Right results let if then Left else Right mapEither fromList fromList fromList mapEither Right fromList empty fromList",
          "hierarchy": "Data CompactMap",
          "module": "Data.CompactMap",
          "name": "mapEither",
          "normalized": "(a-\u003eEither b c)-\u003eMap d a-\u003e(Map d b,Map d c)",
          "package": "compact-map",
          "partial": "Either",
          "signature": "(a-\u003eEither b c)-\u003eMap k a-\u003e(Map k b,Map k c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-map/docs/Data-CompactMap.html#v:mapEither"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Map keys/values and separate the \u003ctt\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/tt\u003e and \u003ctt\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/tt\u003e results.\n\u003c/p\u003e\u003cpre\u003e let f k a = if k \u003c 5 then Left (k * 2) else Right (a ++ a)\n mapEitherWithKey f (fromList [(5,\"a\"), (3,\"b\"), (1,\"x\"), (7,\"z\")])\n     == (fromList [(1,2), (3,6)], fromList [(5,\"aa\"), (7,\"zz\")])\n\n mapEitherWithKey (\\_ a -\u003e Right a) (fromList [(5,\"a\"), (3,\"b\"), (1,\"x\"), (7,\"z\")])\n     == (empty, fromList [(1,\"x\"), (3,\"b\"), (5,\"a\"), (7,\"z\")])\n\u003c/pre\u003e",
          "module": "Data.CompactMap",
          "name": "mapEitherWithKey",
          "package": "compact-map",
          "signature": "(k -\u003e a -\u003e Either b c) -\u003e Map k a -\u003e (Map k b, Map k c)",
          "source": "http://hackage.haskell.org/package/compact-map/docs/src/Data-CompactMap.html#mapEitherWithKey",
          "type": "function"
        },
        "index": {
          "description": "Map keys values and separate the Left and Right results let if then Left else Right mapEitherWithKey fromList fromList fromList aa zz mapEitherWithKey Right fromList empty fromList",
          "hierarchy": "Data CompactMap",
          "module": "Data.CompactMap",
          "name": "mapEitherWithKey",
          "normalized": "(a-\u003eb-\u003eEither c d)-\u003eMap a b-\u003e(Map a c,Map a d)",
          "package": "compact-map",
          "partial": "Either With Key",
          "signature": "(k-\u003ea-\u003eEither b c)-\u003eMap k a-\u003e(Map k b,Map k c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-map/docs/Data-CompactMap.html#v:mapEitherWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n*log n)\u003c/em\u003e.\n \u003ctt\u003e\u003ctt\u003e\u003ca\u003emapKeys\u003c/a\u003e\u003c/tt\u003e f s\u003c/tt\u003e is the map obtained by applying \u003ctt\u003ef\u003c/tt\u003e to each key of \u003ctt\u003es\u003c/tt\u003e.\n\u003c/p\u003e\u003cp\u003eThe size of the result may be smaller if \u003ctt\u003ef\u003c/tt\u003e maps two or more distinct\n keys to the same new key.  In this case the value at the smallest of\n these keys is retained.\n\u003c/p\u003e\u003cpre\u003e mapKeys (+ 1) (fromList [(5,\"a\"), (3,\"b\")])                        == fromList [(4, \"b\"), (6, \"a\")]\n mapKeys (\\ _ -\u003e 1) (fromList [(1,\"b\"), (2,\"a\"), (3,\"d\"), (4,\"c\")]) == singleton 1 \"c\"\n mapKeys (\\ _ -\u003e 3) (fromList [(1,\"b\"), (2,\"a\"), (3,\"d\"), (4,\"c\")]) == singleton 3 \"c\"\n\u003c/pre\u003e",
          "module": "Data.CompactMap",
          "name": "mapKeys",
          "package": "compact-map",
          "signature": "(k1 -\u003e k2) -\u003e Map k1 a -\u003e Map k2 a",
          "source": "http://hackage.haskell.org/package/compact-map/docs/src/Data-CompactMap.html#mapKeys",
          "type": "function"
        },
        "index": {
          "description": "log mapKeys is the map obtained by applying to each key of The size of the result may be smaller if maps two or more distinct keys to the same new key In this case the value at the smallest of these keys is retained mapKeys fromList fromList mapKeys fromList singleton mapKeys fromList singleton",
          "hierarchy": "Data CompactMap",
          "module": "Data.CompactMap",
          "name": "mapKeys",
          "normalized": "(a-\u003ea)-\u003eMap a b-\u003eMap a b",
          "package": "compact-map",
          "partial": "Keys",
          "signature": "(k-\u003ek)-\u003eMap k a-\u003eMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-map/docs/Data-CompactMap.html#v:mapKeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.\n \u003ctt\u003e\u003ctt\u003e\u003ca\u003emapKeysMonotonic\u003c/a\u003e\u003c/tt\u003e f s == \u003ctt\u003e\u003ca\u003emapKeys\u003c/a\u003e\u003c/tt\u003e f s\u003c/tt\u003e, but works only when \u003ctt\u003ef\u003c/tt\u003e\n is strictly monotonic.\n That is, for any values \u003ctt\u003ex\u003c/tt\u003e and \u003ctt\u003ey\u003c/tt\u003e, if \u003ctt\u003ex\u003c/tt\u003e \u003c \u003ctt\u003ey\u003c/tt\u003e then \u003ctt\u003ef x\u003c/tt\u003e \u003c \u003ctt\u003ef y\u003c/tt\u003e.\n \u003cem\u003eThe precondition is not checked.\u003c/em\u003e\n Semi-formally, we have:\n\u003c/p\u003e\u003cpre\u003e and [x \u003c y ==\u003e f x \u003c f y | x \u003c- ls, y \u003c- ls] \n                     ==\u003e mapKeysMonotonic f s == mapKeys f s\n     where ls = keys s\n\u003c/pre\u003e\u003cp\u003eThis means that \u003ctt\u003ef\u003c/tt\u003e maps distinct original keys to distinct resulting keys.\n This function has better performance than \u003ctt\u003e\u003ca\u003emapKeys\u003c/a\u003e\u003c/tt\u003e.\n\u003c/p\u003e\u003cpre\u003e mapKeysMonotonic (\\ k -\u003e k * 2) (fromList [(5,\"a\"), (3,\"b\")]) == fromList [(6, \"b\"), (10, \"a\")]\n valid (mapKeysMonotonic (\\ k -\u003e k * 2) (fromList [(5,\"a\"), (3,\"b\")])) == True\n valid (mapKeysMonotonic (\\ _ -\u003e 1)     (fromList [(5,\"a\"), (3,\"b\")])) == False\n\u003c/pre\u003e",
          "module": "Data.CompactMap",
          "name": "mapKeysMonotonic",
          "package": "compact-map",
          "signature": "(k1 -\u003e k2) -\u003e Map k1 a -\u003e Map k2 a",
          "source": "http://hackage.haskell.org/package/compact-map/docs/src/Data-CompactMap.html#mapKeysMonotonic",
          "type": "function"
        },
        "index": {
          "description": "mapKeysMonotonic mapKeys but works only when is strictly monotonic That is for any values and if then The precondition is not checked Semi-formally we have and ls ls mapKeysMonotonic mapKeys where ls keys This means that maps distinct original keys to distinct resulting keys This function has better performance than mapKeys mapKeysMonotonic fromList fromList valid mapKeysMonotonic fromList True valid mapKeysMonotonic fromList False",
          "hierarchy": "Data CompactMap",
          "module": "Data.CompactMap",
          "name": "mapKeysMonotonic",
          "normalized": "(a-\u003ea)-\u003eMap a b-\u003eMap a b",
          "package": "compact-map",
          "partial": "Keys Monotonic",
          "signature": "(k-\u003ek)-\u003eMap k a-\u003eMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-map/docs/Data-CompactMap.html#v:mapKeysMonotonic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n*log n)\u003c/em\u003e.\n \u003ctt\u003e\u003ctt\u003e\u003ca\u003emapKeysWith\u003c/a\u003e\u003c/tt\u003e c f s\u003c/tt\u003e is the map obtained by applying \u003ctt\u003ef\u003c/tt\u003e to each key of \u003ctt\u003es\u003c/tt\u003e.\n\u003c/p\u003e\u003cp\u003eThe size of the result may be smaller if \u003ctt\u003ef\u003c/tt\u003e maps two or more distinct\n keys to the same new key.  In this case the associated values will be\n combined using \u003ctt\u003ec\u003c/tt\u003e.\n\u003c/p\u003e\u003cpre\u003e mapKeysWith (++) (\\ _ -\u003e 1) (fromList [(1,\"b\"), (2,\"a\"), (3,\"d\"), (4,\"c\")]) == singleton 1 \"cdab\"\n mapKeysWith (++) (\\ _ -\u003e 3) (fromList [(1,\"b\"), (2,\"a\"), (3,\"d\"), (4,\"c\")]) == singleton 3 \"cdab\"\n\u003c/pre\u003e",
          "module": "Data.CompactMap",
          "name": "mapKeysWith",
          "package": "compact-map",
          "signature": "(a -\u003e a -\u003e a) -\u003e (k1 -\u003e k2) -\u003e Map k1 a -\u003e Map k2 a",
          "source": "http://hackage.haskell.org/package/compact-map/docs/src/Data-CompactMap.html#mapKeysWith",
          "type": "function"
        },
        "index": {
          "description": "log mapKeysWith is the map obtained by applying to each key of The size of the result may be smaller if maps two or more distinct keys to the same new key In this case the associated values will be combined using mapKeysWith fromList singleton cdab mapKeysWith fromList singleton cdab",
          "hierarchy": "Data CompactMap",
          "module": "Data.CompactMap",
          "name": "mapKeysWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003e(b-\u003eb)-\u003eMap b a-\u003eMap b a",
          "package": "compact-map",
          "partial": "Keys With",
          "signature": "(a-\u003ea-\u003ea)-\u003e(k-\u003ek)-\u003eMap k a-\u003eMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-map/docs/Data-CompactMap.html#v:mapKeysWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Map values and collect the \u003ctt\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/tt\u003e results.\n\u003c/p\u003e\u003cpre\u003e let f x = if x == \"a\" then Just \"new a\" else Nothing\n mapMaybe f (fromList [(5,\"a\"), (3,\"b\")]) == singleton 5 \"new a\"\n\u003c/pre\u003e",
          "module": "Data.CompactMap",
          "name": "mapMaybe",
          "package": "compact-map",
          "signature": "(a -\u003e Maybe b) -\u003e Map k a -\u003e Map k b",
          "source": "http://hackage.haskell.org/package/compact-map/docs/src/Data-CompactMap.html#mapMaybe",
          "type": "function"
        },
        "index": {
          "description": "Map values and collect the Just results let if then Just new else Nothing mapMaybe fromList singleton new",
          "hierarchy": "Data CompactMap",
          "module": "Data.CompactMap",
          "name": "mapMaybe",
          "normalized": "(a-\u003eMaybe b)-\u003eMap c a-\u003eMap c b",
          "package": "compact-map",
          "partial": "Maybe",
          "signature": "(a-\u003eMaybe b)-\u003eMap k a-\u003eMap k b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-map/docs/Data-CompactMap.html#v:mapMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Map keys/values and collect the \u003ctt\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/tt\u003e results.\n\u003c/p\u003e\u003cpre\u003e let f k _ = if k \u003c 5 then Just (\"key : \" ++ (show k)) else Nothing\n mapMaybeWithKey f (fromList [(5,\"a\"), (3,\"b\")]) == singleton 3 \"key : 3\"\n\u003c/pre\u003e",
          "module": "Data.CompactMap",
          "name": "mapMaybeWithKey",
          "package": "compact-map",
          "signature": "(k -\u003e a -\u003e Maybe b) -\u003e Map k a -\u003e Map k b",
          "source": "http://hackage.haskell.org/package/compact-map/docs/src/Data-CompactMap.html#mapMaybeWithKey",
          "type": "function"
        },
        "index": {
          "description": "Map keys values and collect the Just results let if then Just key show else Nothing mapMaybeWithKey fromList singleton key",
          "hierarchy": "Data CompactMap",
          "module": "Data.CompactMap",
          "name": "mapMaybeWithKey",
          "normalized": "(a-\u003eb-\u003eMaybe c)-\u003eMap a b-\u003eMap a c",
          "package": "compact-map",
          "partial": "Maybe With Key",
          "signature": "(k-\u003ea-\u003eMaybe b)-\u003eMap k a-\u003eMap k b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-map/docs/Data-CompactMap.html#v:mapMaybeWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Map a function over all values in the map.\n\u003c/p\u003e\u003cpre\u003e let f key x = (show key) ++ \":\" ++ x\n mapWithKey f (fromList [(5,\"a\"), (3,\"b\")]) == fromList [(3, \"3:b\"), (5, \"5:a\")]\n\u003c/pre\u003e",
          "module": "Data.CompactMap",
          "name": "mapWithKey",
          "package": "compact-map",
          "signature": "(k -\u003e a -\u003e b) -\u003e Map k a -\u003e Map k b",
          "source": "http://hackage.haskell.org/package/compact-map/docs/src/Data-CompactMap.html#mapWithKey",
          "type": "function"
        },
        "index": {
          "description": "Map function over all values in the map let key show key mapWithKey fromList fromList",
          "hierarchy": "Data CompactMap",
          "module": "Data.CompactMap",
          "name": "mapWithKey",
          "normalized": "(a-\u003eb-\u003ec)-\u003eMap a b-\u003eMap a c",
          "package": "compact-map",
          "partial": "With Key",
          "signature": "(k-\u003ea-\u003eb)-\u003eMap k a-\u003eMap k b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-map/docs/Data-CompactMap.html#v:mapWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Is the key a member of the map? See also \u003ctt\u003e\u003ca\u003enotMember\u003c/a\u003e\u003c/tt\u003e.\n\u003c/p\u003e\u003cpre\u003e member 5 (fromList [(5,'a'), (3,'b')]) == True\n member 1 (fromList [(5,'a'), (3,'b')]) == False\n\u003c/pre\u003e",
          "module": "Data.CompactMap",
          "name": "member",
          "package": "compact-map",
          "signature": "k -\u003e Map k a -\u003e Bool",
          "source": "http://hackage.haskell.org/package/compact-map/docs/src/Data-CompactMap.html#member",
          "type": "function"
        },
        "index": {
          "description": "log Is the key member of the map See also notMember member fromList True member fromList False",
          "hierarchy": "Data CompactMap",
          "module": "Data.CompactMap",
          "name": "member",
          "normalized": "a-\u003eMap a b-\u003eBool",
          "package": "compact-map",
          "signature": "k-\u003eMap k a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-map/docs/Data-CompactMap.html#v:member"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Is the key not a member of the map? See also \u003ctt\u003e\u003ca\u003emember\u003c/a\u003e\u003c/tt\u003e.\n\u003c/p\u003e\u003cpre\u003e notMember 5 (fromList [(5,'a'), (3,'b')]) == False\n notMember 1 (fromList [(5,'a'), (3,'b')]) == True\n\u003c/pre\u003e",
          "module": "Data.CompactMap",
          "name": "notMember",
          "package": "compact-map",
          "signature": "k -\u003e Map k a -\u003e Bool",
          "source": "http://hackage.haskell.org/package/compact-map/docs/src/Data-CompactMap.html#notMember",
          "type": "function"
        },
        "index": {
          "description": "log Is the key not member of the map See also member notMember fromList False notMember fromList True",
          "hierarchy": "Data CompactMap",
          "module": "Data.CompactMap",
          "name": "notMember",
          "normalized": "a-\u003eMap a b-\u003eBool",
          "package": "compact-map",
          "partial": "Member",
          "signature": "k-\u003eMap k a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-map/docs/Data-CompactMap.html#v:notMember"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Is the map empty?\n\u003c/p\u003e\u003cpre\u003e Data.Map.null (empty)           == True\n Data.Map.null (singleton 1 'a') == False\n\u003c/pre\u003e",
          "module": "Data.CompactMap",
          "name": "null",
          "package": "compact-map",
          "signature": "Map k a -\u003e Bool",
          "source": "http://hackage.haskell.org/package/compact-map/docs/src/Data-CompactMap.html#null",
          "type": "function"
        },
        "index": {
          "description": "Is the map empty Data.Map.null empty True Data.Map.null singleton False",
          "hierarchy": "Data CompactMap",
          "module": "Data.CompactMap",
          "name": "null",
          "normalized": "Map a b-\u003eBool",
          "package": "compact-map",
          "signature": "Map k a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-map/docs/Data-CompactMap.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Partition the map according to a predicate. The first\n map contains all elements that satisfy the predicate, the second all\n elements that fail the predicate. See also split.\n\u003c/p\u003e\u003cpre\u003e partition (\u003e \"a\") (fromList [(5,\"a\"), (3,\"b\")]) == (singleton 3 \"b\", singleton 5 \"a\")\n partition (\u003c \"x\") (fromList [(5,\"a\"), (3,\"b\")]) == (fromList [(3, \"b\"), (5, \"a\")], empty)\n partition (\u003e \"x\") (fromList [(5,\"a\"), (3,\"b\")]) == (empty, fromList [(3, \"b\"), (5, \"a\")])\n\u003c/pre\u003e",
          "module": "Data.CompactMap",
          "name": "partition",
          "package": "compact-map",
          "signature": "(a -\u003e Bool) -\u003e Map k a -\u003e (Map k a, Map k a)",
          "source": "http://hackage.haskell.org/package/compact-map/docs/src/Data-CompactMap.html#partition",
          "type": "function"
        },
        "index": {
          "description": "Partition the map according to predicate The first map contains all elements that satisfy the predicate the second all elements that fail the predicate See also split partition fromList singleton singleton partition fromList fromList empty partition fromList empty fromList",
          "hierarchy": "Data CompactMap",
          "module": "Data.CompactMap",
          "name": "partition",
          "normalized": "(a-\u003eBool)-\u003eMap b a-\u003e(Map b a,Map b a)",
          "package": "compact-map",
          "signature": "(a-\u003eBool)-\u003eMap k a-\u003e(Map k a,Map k a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-map/docs/Data-CompactMap.html#v:partition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Partition the map according to a predicate. The first\n map contains all elements that satisfy the predicate, the second all\n elements that fail the predicate. See also split.\n\u003c/p\u003e\u003cpre\u003e partitionWithKey (\\ k _ -\u003e k \u003e 3) (fromList [(5,\"a\"), (3,\"b\")]) == (singleton 5 \"a\", singleton 3 \"b\")\n partitionWithKey (\\ k _ -\u003e k \u003c 7) (fromList [(5,\"a\"), (3,\"b\")]) == (fromList [(3, \"b\"), (5, \"a\")], empty)\n partitionWithKey (\\ k _ -\u003e k \u003e 7) (fromList [(5,\"a\"), (3,\"b\")]) == (empty, fromList [(3, \"b\"), (5, \"a\")])\n\u003c/pre\u003e",
          "module": "Data.CompactMap",
          "name": "partitionWithKey",
          "package": "compact-map",
          "signature": "(k -\u003e a -\u003e Bool) -\u003e Map k a -\u003e (Map k a, Map k a)",
          "source": "http://hackage.haskell.org/package/compact-map/docs/src/Data-CompactMap.html#partitionWithKey",
          "type": "function"
        },
        "index": {
          "description": "Partition the map according to predicate The first map contains all elements that satisfy the predicate the second all elements that fail the predicate See also split partitionWithKey fromList singleton singleton partitionWithKey fromList fromList empty partitionWithKey fromList empty fromList",
          "hierarchy": "Data CompactMap",
          "module": "Data.CompactMap",
          "name": "partitionWithKey",
          "normalized": "(a-\u003eb-\u003eBool)-\u003eMap a b-\u003e(Map a b,Map a b)",
          "package": "compact-map",
          "partial": "With Key",
          "signature": "(k-\u003ea-\u003eBool)-\u003eMap k a-\u003e(Map k a,Map k a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-map/docs/Data-CompactMap.html#v:partitionWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. A map with a single element.\n\u003c/p\u003e\u003cpre\u003e singleton 1 'a'        == fromList [(1, 'a')]\n size (singleton 1 'a') == 1\n\u003c/pre\u003e",
          "module": "Data.CompactMap",
          "name": "singleton",
          "package": "compact-map",
          "signature": "k -\u003e a -\u003e Map k a",
          "source": "http://hackage.haskell.org/package/compact-map/docs/src/Data-CompactMap.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "map with single element singleton fromList size singleton",
          "hierarchy": "Data CompactMap",
          "module": "Data.CompactMap",
          "name": "singleton",
          "normalized": "a-\u003eb-\u003eMap a b",
          "package": "compact-map",
          "signature": "k-\u003ea-\u003eMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-map/docs/Data-CompactMap.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. The number of elements in the map.\n\u003c/p\u003e\u003cpre\u003e size empty                                   == 0\n size (singleton 1 'a')                       == 1\n size (fromList([(1,'a'), (2,'c'), (3,'b')])) == 3\n\u003c/pre\u003e",
          "module": "Data.CompactMap",
          "name": "size",
          "package": "compact-map",
          "signature": "Map k a -\u003e Int",
          "source": "http://hackage.haskell.org/package/compact-map/docs/src/Data-CompactMap.html#size",
          "type": "function"
        },
        "index": {
          "description": "The number of elements in the map size empty size singleton size fromList",
          "hierarchy": "Data CompactMap",
          "module": "Data.CompactMap",
          "name": "size",
          "normalized": "Map a b-\u003eInt",
          "package": "compact-map",
          "signature": "Map k a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-map/docs/Data-CompactMap.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Convert to an ascending list.\n\u003c/p\u003e\u003cpre\u003e toAscList (fromList [(5,\"a\"), (3,\"b\")]) == [(3,\"b\"), (5,\"a\")]\n\u003c/pre\u003e",
          "module": "Data.CompactMap",
          "name": "toAscList",
          "package": "compact-map",
          "signature": "Map k a -\u003e [(k, a)]",
          "source": "http://hackage.haskell.org/package/compact-map/docs/src/Data-CompactMap.html#toAscList",
          "type": "function"
        },
        "index": {
          "description": "Convert to an ascending list toAscList fromList",
          "hierarchy": "Data CompactMap",
          "module": "Data.CompactMap",
          "name": "toAscList",
          "normalized": "Map a b-\u003e[(a,b)]",
          "package": "compact-map",
          "partial": "Asc List",
          "signature": "Map k a-\u003e[(k,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-map/docs/Data-CompactMap.html#v:toAscList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Convert to a list of key/value pairs.\n\u003c/p\u003e\u003cpre\u003e toList (fromList [(5,\"a\"), (3,\"b\")]) == [(3,\"b\"), (5,\"a\")]\n toList empty == []\n\u003c/pre\u003e",
          "module": "Data.CompactMap",
          "name": "toList",
          "package": "compact-map",
          "signature": "Map k a -\u003e [(k, a)]",
          "source": "http://hackage.haskell.org/package/compact-map/docs/src/Data-CompactMap.html#toList",
          "type": "function"
        },
        "index": {
          "description": "Convert to list of key value pairs toList fromList toList empty",
          "hierarchy": "Data CompactMap",
          "module": "Data.CompactMap",
          "name": "toList",
          "normalized": "Map a b-\u003e[(a,b)]",
          "package": "compact-map",
          "partial": "List",
          "signature": "Map k a-\u003e[(k,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-map/docs/Data-CompactMap.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n*m)\u003c/em\u003e.\n The expression (\u003ctt\u003e\u003ctt\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/tt\u003e t1 t2\u003c/tt\u003e) takes the left-biased union of \u003ctt\u003et1\u003c/tt\u003e and \u003ctt\u003et2\u003c/tt\u003e. \n It prefers \u003ctt\u003et1\u003c/tt\u003e when duplicate keys are encountered,\n i.e. (\u003ctt\u003e\u003ctt\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/tt\u003e == \u003ctt\u003e\u003ca\u003eunionWith\u003c/a\u003e\u003c/tt\u003e \u003ctt\u003e\u003ca\u003econst\u003c/a\u003e\u003c/tt\u003e\u003c/tt\u003e).\n\u003c/p\u003e\u003cpre\u003e union (fromList [(5, \"a\"), (3, \"b\")]) (fromList [(5, \"A\"), (7, \"C\")]) == fromList [(3, \"b\"), (5, \"a\"), (7, \"C\")]\n\u003c/pre\u003e",
          "module": "Data.CompactMap",
          "name": "union",
          "package": "compact-map",
          "signature": "Map k a -\u003e Map k a -\u003e Map k a",
          "source": "http://hackage.haskell.org/package/compact-map/docs/src/Data-CompactMap.html#union",
          "type": "function"
        },
        "index": {
          "description": "log The expression union t1 t2 takes the left-biased union of t1 and t2 It prefers t1 when duplicate keys are encountered i.e union unionWith const union fromList fromList fromList",
          "hierarchy": "Data CompactMap",
          "module": "Data.CompactMap",
          "name": "union",
          "normalized": "Map a b-\u003eMap a b-\u003eMap a b",
          "package": "compact-map",
          "signature": "Map k a-\u003eMap k a-\u003eMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-map/docs/Data-CompactMap.html#v:union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n*m)\u003c/em\u003e. Union with a combining function.\n\u003c/p\u003e\u003cpre\u003e unionWith (++) (fromList [(5, \"a\"), (3, \"b\")]) (fromList [(5, \"A\"), (7, \"C\")]) == fromList [(3, \"b\"), (5, \"aA\"), (7, \"C\")]\n\u003c/pre\u003e",
          "module": "Data.CompactMap",
          "name": "unionWith",
          "package": "compact-map",
          "signature": "(a -\u003e a -\u003e a) -\u003e Map k a -\u003e Map k a -\u003e Map k a",
          "source": "http://hackage.haskell.org/package/compact-map/docs/src/Data-CompactMap.html#unionWith",
          "type": "function"
        },
        "index": {
          "description": "log Union with combining function unionWith fromList fromList fromList aA",
          "hierarchy": "Data CompactMap",
          "module": "Data.CompactMap",
          "name": "unionWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003eMap b a-\u003eMap b a-\u003eMap b a",
          "package": "compact-map",
          "partial": "With",
          "signature": "(a-\u003ea-\u003ea)-\u003eMap k a-\u003eMap k a-\u003eMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-map/docs/Data-CompactMap.html#v:unionWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n*m)\u003c/em\u003e.\n Union with a combining function.\n\u003c/p\u003e\u003cpre\u003e let f key new_value old_value = (show key) ++ \":\" ++ new_value ++ \"|\" ++ old_value\n unionWithKey f (fromList [(5, \"a\"), (3, \"b\")]) (fromList [(5, \"A\"), (7, \"C\")]) == fromList [(3, \"b\"), (5, \"5:a|A\"), (7, \"C\")]\n\u003c/pre\u003e",
          "module": "Data.CompactMap",
          "name": "unionWithKey",
          "package": "compact-map",
          "signature": "(k -\u003e a -\u003e a -\u003e a) -\u003e Map k a -\u003e Map k a -\u003e Map k a",
          "source": "http://hackage.haskell.org/package/compact-map/docs/src/Data-CompactMap.html#unionWithKey",
          "type": "function"
        },
        "index": {
          "description": "log Union with combining function let key new value old value show key new value old value unionWithKey fromList fromList fromList",
          "hierarchy": "Data CompactMap",
          "module": "Data.CompactMap",
          "name": "unionWithKey",
          "normalized": "(a-\u003eb-\u003eb-\u003eb)-\u003eMap a b-\u003eMap a b-\u003eMap a b",
          "package": "compact-map",
          "partial": "With Key",
          "signature": "(k-\u003ea-\u003ea-\u003ea)-\u003eMap k a-\u003eMap k a-\u003eMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-map/docs/Data-CompactMap.html#v:unionWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe union of a list of maps:\n   (\u003ctt\u003e\u003ctt\u003e\u003ca\u003eunions\u003c/a\u003e\u003c/tt\u003e == \u003ctt\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/tt\u003e \u003ctt\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/tt\u003e \u003ctt\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/tt\u003e\u003c/tt\u003e).\n\u003c/p\u003e\u003cpre\u003e unions [(fromList [(5, \"a\"), (3, \"b\")]), (fromList [(5, \"A\"), (7, \"C\")]), (fromList [(5, \"A3\"), (3, \"B3\")])]\n     == fromList [(3, \"b\"), (5, \"a\"), (7, \"C\")]\n unions [(fromList [(5, \"A3\"), (3, \"B3\")]), (fromList [(5, \"A\"), (7, \"C\")]), (fromList [(5, \"a\"), (3, \"b\")])]\n     == fromList [(3, \"B3\"), (5, \"A3\"), (7, \"C\")]\n\u003c/pre\u003e",
          "module": "Data.CompactMap",
          "name": "unions",
          "package": "compact-map",
          "signature": "[Map k a] -\u003e Map k a",
          "source": "http://hackage.haskell.org/package/compact-map/docs/src/Data-CompactMap.html#unions",
          "type": "function"
        },
        "index": {
          "description": "The union of list of maps unions foldl union empty unions fromList fromList fromList A3 B3 fromList unions fromList A3 B3 fromList fromList fromList B3 A3",
          "hierarchy": "Data CompactMap",
          "module": "Data.CompactMap",
          "name": "unions",
          "normalized": "[Map a b]-\u003eMap a b",
          "package": "compact-map",
          "signature": "[Map k a]-\u003eMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-map/docs/Data-CompactMap.html#v:unions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe union of a list of maps, with a combining operation:\n   (\u003ctt\u003e\u003ctt\u003e\u003ca\u003eunionsWith\u003c/a\u003e\u003c/tt\u003e f == \u003ctt\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/tt\u003e (\u003ctt\u003e\u003ca\u003eunionWith\u003c/a\u003e\u003c/tt\u003e f) \u003ctt\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/tt\u003e\u003c/tt\u003e).\n\u003c/p\u003e\u003cpre\u003e unionsWith (++) [(fromList [(5, \"a\"), (3, \"b\")]), (fromList [(5, \"A\"), (7, \"C\")]), (fromList [(5, \"A3\"), (3, \"B3\")])]\n     == fromList [(3, \"bB3\"), (5, \"aAA3\"), (7, \"C\")]\n\u003c/pre\u003e",
          "module": "Data.CompactMap",
          "name": "unionsWith",
          "package": "compact-map",
          "signature": "(a -\u003e a -\u003e a) -\u003e [Map k a] -\u003e Map k a",
          "source": "http://hackage.haskell.org/package/compact-map/docs/src/Data-CompactMap.html#unionsWith",
          "type": "function"
        },
        "index": {
          "description": "The union of list of maps with combining operation unionsWith foldl unionWith empty unionsWith fromList fromList fromList A3 B3 fromList bB3 aAA3",
          "hierarchy": "Data CompactMap",
          "module": "Data.CompactMap",
          "name": "unionsWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[Map b a]-\u003eMap b a",
          "package": "compact-map",
          "partial": "With",
          "signature": "(a-\u003ea-\u003ea)-\u003e[Map k a]-\u003eMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-map/docs/Data-CompactMap.html#v:unionsWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. The expression (\u003ctt\u003e\u003ctt\u003e\u003ca\u003eupdate\u003c/a\u003e\u003c/tt\u003e f k map\u003c/tt\u003e) updates the value \u003ctt\u003ex\u003c/tt\u003e\n at \u003ctt\u003ek\u003c/tt\u003e (if it is in the map). If (\u003ctt\u003ef x\u003c/tt\u003e) is \u003ctt\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/tt\u003e, the element is\n deleted. If it is (\u003ctt\u003e\u003ctt\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/tt\u003e y\u003c/tt\u003e), the key \u003ctt\u003ek\u003c/tt\u003e is bound to the new value \u003ctt\u003ey\u003c/tt\u003e.\n\u003c/p\u003e\u003cpre\u003e let f x = if x == \"a\" then Just \"new a\" else Nothing\n update f 5 (fromList [(5,\"a\"), (3,\"b\")]) == fromList [(3, \"b\"), (5, \"new a\")]\n update f 7 (fromList [(5,\"a\"), (3,\"b\")]) == fromList [(3, \"b\"), (5, \"a\")]\n update f 3 (fromList [(5,\"a\"), (3,\"b\")]) == singleton 5 \"a\"\n\u003c/pre\u003e",
          "module": "Data.CompactMap",
          "name": "update",
          "package": "compact-map",
          "signature": "(a -\u003e Maybe a) -\u003e k -\u003e Map k a -\u003e Map k a",
          "source": "http://hackage.haskell.org/package/compact-map/docs/src/Data-CompactMap.html#update",
          "type": "function"
        },
        "index": {
          "description": "log The expression update map updates the value at if it is in the map If is Nothing the element is deleted If it is Just the key is bound to the new value let if then Just new else Nothing update fromList fromList new update fromList fromList update fromList singleton",
          "hierarchy": "Data CompactMap",
          "module": "Data.CompactMap",
          "name": "update",
          "normalized": "(a-\u003eMaybe a)-\u003eb-\u003eMap b a-\u003eMap b a",
          "package": "compact-map",
          "signature": "(a-\u003eMaybe a)-\u003ek-\u003eMap k a-\u003eMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-map/docs/Data-CompactMap.html#v:update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Lookup and update. See also \u003ctt\u003e\u003ca\u003eupdateWithKey\u003c/a\u003e\u003c/tt\u003e.\n The function returns changed value, if it is updated.\n Returns the original key value if the map entry is deleted. \n\u003c/p\u003e\u003cpre\u003e let f k x = if x == \"a\" then Just ((show k) ++ \":new a\") else Nothing\n updateLookupWithKey f 5 (fromList [(5,\"a\"), (3,\"b\")]) == (Just \"5:new a\", fromList [(3, \"b\"), (5, \"5:new a\")])\n updateLookupWithKey f 7 (fromList [(5,\"a\"), (3,\"b\")]) == (Nothing,  fromList [(3, \"b\"), (5, \"a\")])\n updateLookupWithKey f 3 (fromList [(5,\"a\"), (3,\"b\")]) == (Just \"b\", singleton 5 \"a\")\n\u003c/pre\u003e",
          "module": "Data.CompactMap",
          "name": "updateLookupWithKey",
          "package": "compact-map",
          "signature": "(k -\u003e a -\u003e Maybe a) -\u003e k -\u003e Map k a -\u003e (Maybe a, Map k a)",
          "source": "http://hackage.haskell.org/package/compact-map/docs/src/Data-CompactMap.html#updateLookupWithKey",
          "type": "function"
        },
        "index": {
          "description": "log Lookup and update See also updateWithKey The function returns changed value if it is updated Returns the original key value if the map entry is deleted let if then Just show new else Nothing updateLookupWithKey fromList Just new fromList new updateLookupWithKey fromList Nothing fromList updateLookupWithKey fromList Just singleton",
          "hierarchy": "Data CompactMap",
          "module": "Data.CompactMap",
          "name": "updateLookupWithKey",
          "normalized": "(a-\u003eb-\u003eMaybe b)-\u003ea-\u003eMap a b-\u003e(Maybe b,Map a b)",
          "package": "compact-map",
          "partial": "Lookup With Key",
          "signature": "(k-\u003ea-\u003eMaybe a)-\u003ek-\u003eMap k a-\u003e(Maybe a,Map k a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-map/docs/Data-CompactMap.html#v:updateLookupWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. The expression (\u003ctt\u003e\u003ctt\u003e\u003ca\u003eupdateWithKey\u003c/a\u003e\u003c/tt\u003e f k map\u003c/tt\u003e) updates the\n value \u003ctt\u003ex\u003c/tt\u003e at \u003ctt\u003ek\u003c/tt\u003e (if it is in the map). If (\u003ctt\u003ef k x\u003c/tt\u003e) is \u003ctt\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/tt\u003e,\n the element is deleted. If it is (\u003ctt\u003e\u003ctt\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/tt\u003e y\u003c/tt\u003e), the key \u003ctt\u003ek\u003c/tt\u003e is bound\n to the new value \u003ctt\u003ey\u003c/tt\u003e.\n\u003c/p\u003e\u003cpre\u003e let f k x = if x == \"a\" then Just ((show k) ++ \":new a\") else Nothing\n updateWithKey f 5 (fromList [(5,\"a\"), (3,\"b\")]) == fromList [(3, \"b\"), (5, \"5:new a\")]\n updateWithKey f 7 (fromList [(5,\"a\"), (3,\"b\")]) == fromList [(3, \"b\"), (5, \"a\")]\n updateWithKey f 3 (fromList [(5,\"a\"), (3,\"b\")]) == singleton 5 \"a\"\n\u003c/pre\u003e",
          "module": "Data.CompactMap",
          "name": "updateWithKey",
          "package": "compact-map",
          "signature": "(k -\u003e a -\u003e Maybe a) -\u003e k -\u003e Map k a -\u003e Map k a",
          "source": "http://hackage.haskell.org/package/compact-map/docs/src/Data-CompactMap.html#updateWithKey",
          "type": "function"
        },
        "index": {
          "description": "log The expression updateWithKey map updates the value at if it is in the map If is Nothing the element is deleted If it is Just the key is bound to the new value let if then Just show new else Nothing updateWithKey fromList fromList new updateWithKey fromList fromList updateWithKey fromList singleton",
          "hierarchy": "Data CompactMap",
          "module": "Data.CompactMap",
          "name": "updateWithKey",
          "normalized": "(a-\u003eb-\u003eMaybe b)-\u003ea-\u003eMap a b-\u003eMap a b",
          "package": "compact-map",
          "partial": "With Key",
          "signature": "(k-\u003ea-\u003eMaybe a)-\u003ek-\u003eMap k a-\u003eMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-map/docs/Data-CompactMap.html#v:updateWithKey"
      }
    }
  ]
]