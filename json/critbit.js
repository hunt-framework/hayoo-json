[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/critbit/docs/Data-CritBit-Map-Lazy.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA crit-bit tree that does not evaluate its values by default.\n\u003c/p\u003e\u003cp\u003eFor every \u003cem\u003en\u003c/em\u003e key-value pairs stored, a crit-bit tree uses \u003cem\u003en\u003c/em\u003e-1\n internal nodes, for a total of 2\u003cem\u003en\u003c/em\u003e-1 internal nodes and leaves.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.CritBit.Map.Lazy",
        "fct-package": "critbit",
        "fct-signature": "module",
        "fct-source": "src/Data-CritBit-Map-Lazy.html",
        "fct-type": "module",
        "title": "Lazy"
      },
      "index": {
        "description": "crit-bit tree that does not evaluate its values by default For every key-value pairs stored crit-bit tree uses internal nodes for total of internal nodes and leaves",
        "hierarchy": "Data CritBit Map Lazy",
        "module": "Data.CritBit.Map.Lazy",
        "name": "Lazy",
        "normalized": "",
        "package": "critbit",
        "partial": "Lazy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/critbit/docs/Data-CritBit-Map-Lazy.html#t:CritBit",
      "description": {
        "fct-descr": "\u003cp\u003eA crit-bit tree.\n\u003c/p\u003e",
        "fct-module": "Data.CritBit.Map.Lazy",
        "fct-package": "critbit",
        "fct-signature": "data",
        "fct-source": "src/Data-CritBit-Types-Internal.html#CritBit",
        "fct-type": "data",
        "title": "CritBit"
      },
      "index": {
        "description": "crit-bit tree",
        "hierarchy": "Data CritBit Map Lazy",
        "module": "Data.CritBit.Map.Lazy",
        "name": "CritBit",
        "normalized": "",
        "package": "critbit",
        "partial": "Crit Bit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/critbit/docs/Data-CritBit-Map-Lazy.html#t:CritBitKey",
      "description": {
        "fct-descr": "\u003cp\u003eA type that can be used as a key in a crit-bit tree.\n\u003c/p\u003e\u003cp\u003eWe use 9 bits to represent 8-bit bytes so that we can distinguish\n between an interior byte that is zero (which must have the 9th bit\n set) and a byte past the end of the input (which must \u003cem\u003enot\u003c/em\u003e have\n the 9th bit set).\n\u003c/p\u003e\u003cp\u003eWithout this trick, the critical bit calculations would fail on\n zero bytes \u003cem\u003ewithin\u003c/em\u003e a string, and our tree would be unable to\n handle arbitrary binary data.\n\u003c/p\u003e",
        "fct-module": "Data.CritBit.Map.Lazy",
        "fct-package": "critbit",
        "fct-signature": "class",
        "fct-source": "src/Data-CritBit-Types-Internal.html#CritBitKey",
        "fct-type": "class",
        "title": "CritBitKey"
      },
      "index": {
        "description": "type that can be used as key in crit-bit tree We use bits to represent bit bytes so that we can distinguish between an interior byte that is zero which must have the th bit set and byte past the end of the input which must not have the th bit set Without this trick the critical bit calculations would fail on zero bytes within string and our tree would be unable to handle arbitrary binary data",
        "hierarchy": "Data CritBit Map Lazy",
        "module": "Data.CritBit.Map.Lazy",
        "name": "CritBitKey",
        "normalized": "",
        "package": "critbit",
        "partial": "Crit Bit Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/critbit/docs/Data-CritBit-Map-Lazy.html#v:byteCount",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the number of bytes used by this key.\n\u003c/p\u003e\u003cp\u003eFor reasonable performance, implementations must be inlined and\n \u003cem\u003eO(1)\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.CritBit.Map.Lazy",
        "fct-package": "critbit",
        "fct-signature": "k -\u003e Int",
        "fct-source": "src/Data-CritBit-Types-Internal.html#byteCount",
        "fct-type": "method",
        "title": "byteCount"
      },
      "index": {
        "description": "Return the number of bytes used by this key For reasonable performance implementations must be inlined and",
        "hierarchy": "Data CritBit Map Lazy",
        "module": "Data.CritBit.Map.Lazy",
        "name": "byteCount",
        "normalized": "a-\u003eInt",
        "package": "critbit",
        "partial": "Count",
        "signature": "k-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/critbit/docs/Data-CritBit-Map-Lazy.html#v:delete",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Delete a key and its value from the map. When the key\n is not a member of the map, the original map is returned.\n\u003c/p\u003e\u003cpre\u003e delete \"a\" (fromList [(\"a\",5), (\"b\",3)]) == singleton \"b\" 3\n delete \"c\" (fromList [(\"a\",5), (\"b\",3)]) == fromList [(\"a\",5), (\"b\",3)]\n delete \"a\" empty                         == empty\n\u003c/pre\u003e",
        "fct-module": "Data.CritBit.Map.Lazy",
        "fct-package": "critbit",
        "fct-signature": "k -\u003e CritBit k v -\u003e CritBit k v",
        "fct-source": "src/Data-CritBit-Core.html#delete",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "log Delete key and its value from the map When the key is not member of the map the original map is returned delete fromList singleton delete fromList fromList delete empty empty",
        "hierarchy": "Data CritBit Map Lazy",
        "module": "Data.CritBit.Map.Lazy",
        "name": "delete",
        "normalized": "a-\u003eCritBit a b-\u003eCritBit a b",
        "package": "critbit",
        "partial": "",
        "signature": "k-\u003eCritBit k v-\u003eCritBit k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/critbit/docs/Data-CritBit-Map-Lazy.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. The empty map.\n\u003c/p\u003e\u003cpre\u003e empty      == fromList []\n size empty == 0\n\u003c/pre\u003e",
        "fct-module": "Data.CritBit.Map.Lazy",
        "fct-package": "critbit",
        "fct-signature": "CritBit k v",
        "fct-source": "src/Data-CritBit-Tree.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "The empty map empty fromList size empty",
        "hierarchy": "Data CritBit Map Lazy",
        "module": "Data.CritBit.Map.Lazy",
        "name": "empty",
        "normalized": "",
        "package": "critbit",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/critbit/docs/Data-CritBit-Map-Lazy.html#v:findWithDefault",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Returns the value associated with the given key, or\n the given default value if the key is not in the map.\n\u003c/p\u003e\u003cpre\u003e findWithDefault 1 \"x\" (fromList [(\"a\",5), (\"b\",3)]) == 1\n findWithDefault 1 \"a\" (fromList [(\"a\",5), (\"b\",3)]) == 5\n\u003c/pre\u003e",
        "fct-module": "Data.CritBit.Map.Lazy",
        "fct-package": "critbit",
        "fct-signature": "v-\u003e k-\u003e CritBit k v-\u003e v",
        "fct-type": "function",
        "title": "findWithDefault"
      },
      "index": {
        "description": "log Returns the value associated with the given key or the given default value if the key is not in the map findWithDefault fromList findWithDefault fromList",
        "hierarchy": "Data CritBit Map Lazy",
        "module": "Data.CritBit.Map.Lazy",
        "name": "findWithDefault",
        "normalized": "a-\u003eb-\u003eCritBit b a-\u003ea",
        "package": "critbit",
        "partial": "With Default",
        "signature": "v-\u003ek-\u003eCritBit k v-\u003ev"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/critbit/docs/Data-CritBit-Map-Lazy.html#v:foldl",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Fold the values in the map using the given\n left-associative function, such that\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e f z == \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e f z . \u003ccode\u003eelems\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e elems = reverse . foldl (flip (:)) []\n\u003c/pre\u003e\u003cpre\u003e foldl (+) 0 (fromList [(\"a\",5), (\"bbb\",3)]) == 8\n\u003c/pre\u003e",
        "fct-module": "Data.CritBit.Map.Lazy",
        "fct-package": "critbit",
        "fct-signature": "(a -\u003e v -\u003e a) -\u003e a -\u003e CritBit k v -\u003e a",
        "fct-source": "src/Data-CritBit-Tree.html#foldl",
        "fct-type": "function",
        "title": "foldl"
      },
      "index": {
        "description": "Fold the values in the map using the given left-associative function such that foldl foldl elems Examples elems reverse foldl flip foldl fromList bbb",
        "hierarchy": "Data CritBit Map Lazy",
        "module": "Data.CritBit.Map.Lazy",
        "name": "foldl",
        "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eCritBit c b-\u003ea",
        "package": "critbit",
        "partial": "",
        "signature": "(a-\u003ev-\u003ea)-\u003ea-\u003eCritBit k v-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/critbit/docs/Data-CritBit-Map-Lazy.html#v:foldl-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. A strict version of \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e. Each application of the\n function is evaluated before using the result in the next\n application. This function is strict in the starting value.\n\u003c/p\u003e",
        "fct-module": "Data.CritBit.Map.Lazy",
        "fct-package": "critbit",
        "fct-signature": "(a -\u003e v -\u003e a) -\u003e a -\u003e CritBit k v -\u003e a",
        "fct-source": "src/Data-CritBit-Tree.html#foldl%27",
        "fct-type": "function",
        "title": "foldl'"
      },
      "index": {
        "description": "strict version of foldl Each application of the function is evaluated before using the result in the next application This function is strict in the starting value",
        "hierarchy": "Data CritBit Map Lazy",
        "module": "Data.CritBit.Map.Lazy",
        "name": "foldl'",
        "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eCritBit c b-\u003ea",
        "package": "critbit",
        "partial": "",
        "signature": "(a-\u003ev-\u003ea)-\u003ea-\u003eCritBit k v-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/critbit/docs/Data-CritBit-Map-Lazy.html#v:foldlWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Fold the keys and values in the map using the given\n left-associative function, such that\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003efoldlWithKey\u003c/a\u003e\u003c/code\u003e f z == \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e (\\z' (kx, x) -\u003e f z' kx x) z . \u003ccode\u003etoAscList\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e keys = reverse . foldlWithKey (\\ks k x -\u003e k:ks) []\n\u003c/pre\u003e\u003cpre\u003e let f result k a = result ++ \"(\" ++ show k ++ \":\" ++ a ++ \")\"\n foldlWithKey f \"Map: \" (fromList [(\"a\",5), (\"b\",3)]) == \"Map: (b:3)(a:5)\"\n\u003c/pre\u003e",
        "fct-module": "Data.CritBit.Map.Lazy",
        "fct-package": "critbit",
        "fct-signature": "(a -\u003e k -\u003e v -\u003e a) -\u003e a -\u003e CritBit k v -\u003e a",
        "fct-source": "src/Data-CritBit-Tree.html#foldlWithKey",
        "fct-type": "function",
        "title": "foldlWithKey"
      },
      "index": {
        "description": "Fold the keys and values in the map using the given left-associative function such that foldlWithKey foldl kx kx toAscList Examples keys reverse foldlWithKey ks ks let result result show foldlWithKey Map fromList Map",
        "hierarchy": "Data CritBit Map Lazy",
        "module": "Data.CritBit.Map.Lazy",
        "name": "foldlWithKey",
        "normalized": "(a-\u003eb-\u003ec-\u003ea)-\u003ea-\u003eCritBit b c-\u003ea",
        "package": "critbit",
        "partial": "With Key",
        "signature": "(a-\u003ek-\u003ev-\u003ea)-\u003ea-\u003eCritBit k v-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/critbit/docs/Data-CritBit-Map-Lazy.html#v:foldlWithKey-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. A strict version of \u003ccode\u003e\u003ca\u003efoldlWithKey\u003c/a\u003e\u003c/code\u003e. Each application of\n the function is evaluated before using the result in the next\n application. This function is strict in the starting value.\n\u003c/p\u003e",
        "fct-module": "Data.CritBit.Map.Lazy",
        "fct-package": "critbit",
        "fct-signature": "(a -\u003e k -\u003e v -\u003e a) -\u003e a -\u003e CritBit k v -\u003e a",
        "fct-source": "src/Data-CritBit-Tree.html#foldlWithKey%27",
        "fct-type": "function",
        "title": "foldlWithKey'"
      },
      "index": {
        "description": "strict version of foldlWithKey Each application of the function is evaluated before using the result in the next application This function is strict in the starting value",
        "hierarchy": "Data CritBit Map Lazy",
        "module": "Data.CritBit.Map.Lazy",
        "name": "foldlWithKey'",
        "normalized": "(a-\u003eb-\u003ec-\u003ea)-\u003ea-\u003eCritBit b c-\u003ea",
        "package": "critbit",
        "partial": "With Key'",
        "signature": "(a-\u003ek-\u003ev-\u003ea)-\u003ea-\u003eCritBit k v-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/critbit/docs/Data-CritBit-Map-Lazy.html#v:foldr",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Fold the values in the map using the given\n right-associative function, such that\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e f z == \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e f z . \u003ccode\u003eelems\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e elems map = foldr (:) [] map\n\u003c/pre\u003e",
        "fct-module": "Data.CritBit.Map.Lazy",
        "fct-package": "critbit",
        "fct-signature": "(v -\u003e a -\u003e a) -\u003e a -\u003e CritBit k v -\u003e a",
        "fct-source": "src/Data-CritBit-Tree.html#foldr",
        "fct-type": "function",
        "title": "foldr"
      },
      "index": {
        "description": "Fold the values in the map using the given right-associative function such that foldr foldr elems Example elems map foldr map",
        "hierarchy": "Data CritBit Map Lazy",
        "module": "Data.CritBit.Map.Lazy",
        "name": "foldr",
        "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eCritBit c a-\u003eb",
        "package": "critbit",
        "partial": "",
        "signature": "(v-\u003ea-\u003ea)-\u003ea-\u003eCritBit k v-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/critbit/docs/Data-CritBit-Map-Lazy.html#v:foldr-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. A strict version of \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e. Each application of the\n function is evaluated before using the result in the next\n application. This function is strict in the starting value.\n\u003c/p\u003e",
        "fct-module": "Data.CritBit.Map.Lazy",
        "fct-package": "critbit",
        "fct-signature": "(v -\u003e a -\u003e a) -\u003e a -\u003e CritBit k v -\u003e a",
        "fct-source": "src/Data-CritBit-Tree.html#foldr%27",
        "fct-type": "function",
        "title": "foldr'"
      },
      "index": {
        "description": "strict version of foldr Each application of the function is evaluated before using the result in the next application This function is strict in the starting value",
        "hierarchy": "Data CritBit Map Lazy",
        "module": "Data.CritBit.Map.Lazy",
        "name": "foldr'",
        "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eCritBit c a-\u003eb",
        "package": "critbit",
        "partial": "",
        "signature": "(v-\u003ea-\u003ea)-\u003ea-\u003eCritBit k v-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/critbit/docs/Data-CritBit-Map-Lazy.html#v:foldrWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Fold the keys and values in the map using the given\n right-associative function, such that\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003efoldrWithKey\u003c/a\u003e\u003c/code\u003e f z == \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003euncurry\u003c/a\u003e\u003c/code\u003e f) z . \u003ccode\u003etoAscList\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e keys map = foldrWithKey (\\k x ks -\u003e k:ks) [] map\n\u003c/pre\u003e\u003cpre\u003e let f k a result = result ++ \"(\" ++ (show k) ++ \":\" ++ a ++ \")\"\n foldrWithKey f \"Map: \" (fromList [(\"a\",5), (\"b\",3)]) == \"Map: (a:5)(b:3)\"\n\u003c/pre\u003e",
        "fct-module": "Data.CritBit.Map.Lazy",
        "fct-package": "critbit",
        "fct-signature": "(k -\u003e v -\u003e a -\u003e a) -\u003e a -\u003e CritBit k v -\u003e a",
        "fct-source": "src/Data-CritBit-Tree.html#foldrWithKey",
        "fct-type": "function",
        "title": "foldrWithKey"
      },
      "index": {
        "description": "Fold the keys and values in the map using the given right-associative function such that foldrWithKey foldr uncurry toAscList Examples keys map foldrWithKey ks ks map let result result show foldrWithKey Map fromList Map",
        "hierarchy": "Data CritBit Map Lazy",
        "module": "Data.CritBit.Map.Lazy",
        "name": "foldrWithKey",
        "normalized": "(a-\u003eb-\u003ec-\u003ec)-\u003ec-\u003eCritBit a b-\u003ec",
        "package": "critbit",
        "partial": "With Key",
        "signature": "(k-\u003ev-\u003ea-\u003ea)-\u003ea-\u003eCritBit k v-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/critbit/docs/Data-CritBit-Map-Lazy.html#v:foldrWithKey-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. A strict version of \u003ccode\u003e\u003ca\u003efoldrWithKey\u003c/a\u003e\u003c/code\u003e. Each application of\n the function is evaluated before using the result in the next\n application. This function is strict in the starting value.\n\u003c/p\u003e",
        "fct-module": "Data.CritBit.Map.Lazy",
        "fct-package": "critbit",
        "fct-signature": "(k -\u003e v -\u003e a -\u003e a) -\u003e a -\u003e CritBit k v -\u003e a",
        "fct-source": "src/Data-CritBit-Tree.html#foldrWithKey%27",
        "fct-type": "function",
        "title": "foldrWithKey'"
      },
      "index": {
        "description": "strict version of foldrWithKey Each application of the function is evaluated before using the result in the next application This function is strict in the starting value",
        "hierarchy": "Data CritBit Map Lazy",
        "module": "Data.CritBit.Map.Lazy",
        "name": "foldrWithKey'",
        "normalized": "(a-\u003eb-\u003ec-\u003ec)-\u003ec-\u003eCritBit a b-\u003ec",
        "package": "critbit",
        "partial": "With Key'",
        "signature": "(k-\u003ev-\u003ea-\u003ea)-\u003ea-\u003eCritBit k v-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/critbit/docs/Data-CritBit-Map-Lazy.html#v:fromList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n*log n)\u003c/em\u003e. Build a map from a list of key/value pairs.  If\n the list contains more than one value for the same key, the last\n value for the key is retained.\n\u003c/p\u003e\u003cpre\u003e fromList [] == empty\n fromList [(\"a\",5), (\"b\",3), (\"a\",2)] == fromList [(\"a\",2), (\"b\",3)]\n\u003c/pre\u003e",
        "fct-module": "Data.CritBit.Map.Lazy",
        "fct-package": "critbit",
        "fct-signature": "[(k, v)] -\u003e CritBit k v",
        "fct-source": "src/Data-CritBit-Tree.html#fromList",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "log Build map from list of key value pairs If the list contains more than one value for the same key the last value for the key is retained fromList empty fromList fromList",
        "hierarchy": "Data CritBit Map Lazy",
        "module": "Data.CritBit.Map.Lazy",
        "name": "fromList",
        "normalized": "[(a,b)]-\u003eCritBit a b",
        "package": "critbit",
        "partial": "List",
        "signature": "[(k,v)]-\u003eCritBit k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/critbit/docs/Data-CritBit-Map-Lazy.html#v:getByte",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the byte at the given offset (counted in bytes) of\n this key, bitwise-ORed with 256. If the offset is past the end\n of the key, return zero.\n\u003c/p\u003e\u003cp\u003eFor reasonable performance, implementations must be inlined and\n \u003cem\u003eO(1)\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.CritBit.Map.Lazy",
        "fct-package": "critbit",
        "fct-signature": "k -\u003e Int -\u003e Word16",
        "fct-source": "src/Data-CritBit-Types-Internal.html#getByte",
        "fct-type": "method",
        "title": "getByte"
      },
      "index": {
        "description": "Return the byte at the given offset counted in bytes of this key bitwise-ORed with If the offset is past the end of the key return zero For reasonable performance implementations must be inlined and",
        "hierarchy": "Data CritBit Map Lazy",
        "module": "Data.CritBit.Map.Lazy",
        "name": "getByte",
        "normalized": "a-\u003eInt-\u003eWord",
        "package": "critbit",
        "partial": "Byte",
        "signature": "k-\u003eInt-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/critbit/docs/Data-CritBit-Map-Lazy.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Insert a new key and value in the map.  If the key is\n already present in the map, the associated value is replaced with\n the supplied value. \u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e is equivalent to \u003ccode\u003e\u003ccode\u003einsertWith\u003c/code\u003e\n \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e insert \"b\" 7 (fromList [(\"a\",5), (\"b\",3)]) == fromList [(\"a\",5), (\"b\",7)]\n insert \"x\" 7 (fromList [(\"a\",5), (\"b\",3)]) == fromList [(\"a\",5), (\"b\",3), (\"x\",7)]\n insert \"x\" 5 empty                         == singleton \"x\" 5\n\u003c/pre\u003e",
        "fct-module": "Data.CritBit.Map.Lazy",
        "fct-package": "critbit",
        "fct-signature": "k -\u003e v -\u003e CritBit k v -\u003e CritBit k v",
        "fct-source": "src/Data-CritBit-Core.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "log Insert new key and value in the map If the key is already present in the map the associated value is replaced with the supplied value insert is equivalent to insertWith const insert fromList fromList insert fromList fromList insert empty singleton",
        "hierarchy": "Data CritBit Map Lazy",
        "module": "Data.CritBit.Map.Lazy",
        "name": "insert",
        "normalized": "a-\u003eb-\u003eCritBit a b-\u003eCritBit a b",
        "package": "critbit",
        "partial": "",
        "signature": "k-\u003ev-\u003eCritBit k v-\u003eCritBit k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/critbit/docs/Data-CritBit-Map-Lazy.html#v:keys",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Return all keys of the map in ascending order.\n\u003c/p\u003e\u003cpre\u003e keys (fromList [(\"b\",5), (\"a\",3)]) == [\"a\",\"b\"]\n keys empty == []\n\u003c/pre\u003e",
        "fct-module": "Data.CritBit.Map.Lazy",
        "fct-package": "critbit",
        "fct-signature": "CritBit k v -\u003e [k]",
        "fct-source": "src/Data-CritBit-Tree.html#keys",
        "fct-type": "function",
        "title": "keys"
      },
      "index": {
        "description": "Return all keys of the map in ascending order keys fromList keys empty",
        "hierarchy": "Data CritBit Map Lazy",
        "module": "Data.CritBit.Map.Lazy",
        "name": "keys",
        "normalized": "CritBit a b-\u003e[a]",
        "package": "critbit",
        "partial": "",
        "signature": "CritBit k v-\u003e[k]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/critbit/docs/Data-CritBit-Map-Lazy.html#v:lookup",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Lookup the value at a key in the map.\n\u003c/p\u003e\u003cp\u003eThe function will return the corresponding value as \u003ccode\u003e(\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e value)\u003c/code\u003e,\n or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the key isn't in the map.\n\u003c/p\u003e\u003cp\u003eAn example of using \u003ccode\u003elookup\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE OverloadedStrings #-}\n import Data.Text\n import Prelude hiding (lookup)\n import Data.CritBit.Map.Lazy\n\n employeeDept, deptCountry, countryCurrency :: CritBit Text Text\n employeeDept = fromList [(\"John\",\"Sales\"), (\"Bob\",\"IT\")]\n deptCountry = fromList [(\"IT\",\"USA\"), (\"Sales\",\"France\")]\n countryCurrency = fromList [(\"USA\", \"Dollar\"), (\"France\", \"Euro\")]\n\n employeeCurrency :: Text -\u003e Maybe Text\n employeeCurrency name = do\n   dept \u003c- lookup name employeeDept\n   country \u003c- lookup dept deptCountry\n   lookup country countryCurrency\n\n main = do\n   putStrLn $ \"John's currency: \" ++ (show (employeeCurrency \"John\"))\n   putStrLn $ \"Pete's currency: \" ++ (show (employeeCurrency \"Pete\"))\n\u003c/pre\u003e\u003cp\u003eThe output of this program:\n\u003c/p\u003e\u003cpre\u003e   John's currency: Just \"Euro\"\n   Pete's currency: Nothing\n\u003c/pre\u003e",
        "fct-module": "Data.CritBit.Map.Lazy",
        "fct-package": "critbit",
        "fct-signature": "k -\u003e CritBit k v -\u003e Maybe v",
        "fct-source": "src/Data-CritBit-Tree.html#lookup",
        "fct-type": "function",
        "title": "lookup"
      },
      "index": {
        "description": "log Lookup the value at key in the map The function will return the corresponding value as Just value or Nothing if the key isn in the map An example of using lookup LANGUAGE OverloadedStrings import Data.Text import Prelude hiding lookup import Data.CritBit.Map.Lazy employeeDept deptCountry countryCurrency CritBit Text Text employeeDept fromList John Sales Bob IT deptCountry fromList IT USA Sales France countryCurrency fromList USA Dollar France Euro employeeCurrency Text Maybe Text employeeCurrency name do dept lookup name employeeDept country lookup dept deptCountry lookup country countryCurrency main do putStrLn John currency show employeeCurrency John putStrLn Pete currency show employeeCurrency Pete The output of this program John currency Just Euro Pete currency Nothing",
        "hierarchy": "Data CritBit Map Lazy",
        "module": "Data.CritBit.Map.Lazy",
        "name": "lookup",
        "normalized": "a-\u003eCritBit a b-\u003eMaybe b",
        "package": "critbit",
        "partial": "",
        "signature": "k-\u003eCritBit k v-\u003eMaybe v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/critbit/docs/Data-CritBit-Map-Lazy.html#v:lookupGT",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Find smallest key greater than the given one and\n return the corresponding (key, value) pair.\n\u003c/p\u003e\u003cpre\u003e lookupGT \"aa\" (fromList [(\"a\",3), (\"b\",5)]) == Just (\"b\",5)\n lookupGT \"b\"  (fromList [(\"a\",3), (\"b\",5)]) == Nothing\n\u003c/pre\u003e",
        "fct-module": "Data.CritBit.Map.Lazy",
        "fct-package": "critbit",
        "fct-signature": "k -\u003e CritBit k v -\u003e Maybe (k, v)",
        "fct-source": "src/Data-CritBit-Tree.html#lookupGT",
        "fct-type": "function",
        "title": "lookupGT"
      },
      "index": {
        "description": "log Find smallest key greater than the given one and return the corresponding key value pair lookupGT aa fromList Just lookupGT fromList Nothing",
        "hierarchy": "Data CritBit Map Lazy",
        "module": "Data.CritBit.Map.Lazy",
        "name": "lookupGT",
        "normalized": "a-\u003eCritBit a b-\u003eMaybe(a,b)",
        "package": "critbit",
        "partial": "GT",
        "signature": "k-\u003eCritBit k v-\u003eMaybe(k,v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/critbit/docs/Data-CritBit-Map-Lazy.html#v:member",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Is the key a member of the map?\n\u003c/p\u003e\u003cpre\u003e member \"a\" (fromList [(\"a\",5), (\"b\",3)]) == True\n member \"c\" (fromList [(\"a\",5), (\"b\",3)]) == False\n\u003c/pre\u003e\u003cp\u003eSee also \u003ccode\u003e\u003ca\u003enotMember\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.CritBit.Map.Lazy",
        "fct-package": "critbit",
        "fct-signature": "k -\u003e CritBit k v -\u003e Bool",
        "fct-source": "src/Data-CritBit-Tree.html#member",
        "fct-type": "function",
        "title": "member"
      },
      "index": {
        "description": "log Is the key member of the map member fromList True member fromList False See also notMember",
        "hierarchy": "Data CritBit Map Lazy",
        "module": "Data.CritBit.Map.Lazy",
        "name": "member",
        "normalized": "a-\u003eCritBit a b-\u003eBool",
        "package": "critbit",
        "partial": "",
        "signature": "k-\u003eCritBit k v-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/critbit/docs/Data-CritBit-Map-Lazy.html#v:notMember",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Is the key not a member of the map?\n\u003c/p\u003e\u003cpre\u003e notMember \"a\" (fromList [(\"a\",5), (\"b\",3)]) == False\n notMember \"c\" (fromList [(\"a\",5), (\"b\",3)]) == True\n\u003c/pre\u003e\u003cp\u003eSee also \u003ccode\u003e\u003ca\u003emember\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.CritBit.Map.Lazy",
        "fct-package": "critbit",
        "fct-signature": "k -\u003e CritBit k v -\u003e Bool",
        "fct-source": "src/Data-CritBit-Tree.html#notMember",
        "fct-type": "function",
        "title": "notMember"
      },
      "index": {
        "description": "log Is the key not member of the map notMember fromList False notMember fromList True See also member",
        "hierarchy": "Data CritBit Map Lazy",
        "module": "Data.CritBit.Map.Lazy",
        "name": "notMember",
        "normalized": "a-\u003eCritBit a b-\u003eBool",
        "package": "critbit",
        "partial": "Member",
        "signature": "k-\u003eCritBit k v-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/critbit/docs/Data-CritBit-Map-Lazy.html#v:null",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Is the map empty?\n\u003c/p\u003e\u003cpre\u003e null (empty)           == True\n null (singleton 1 'a') == False\n\u003c/pre\u003e",
        "fct-module": "Data.CritBit.Map.Lazy",
        "fct-package": "critbit",
        "fct-signature": "CritBit k v -\u003e Bool",
        "fct-source": "src/Data-CritBit-Tree.html#null",
        "fct-type": "function",
        "title": "null"
      },
      "index": {
        "description": "Is the map empty null empty True null singleton False",
        "hierarchy": "Data CritBit Map Lazy",
        "module": "Data.CritBit.Map.Lazy",
        "name": "null",
        "normalized": "CritBit a b-\u003eBool",
        "package": "critbit",
        "partial": "",
        "signature": "CritBit k v-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/critbit/docs/Data-CritBit-Map-Lazy.html#v:singleton",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. A map with a single element.\n\u003c/p\u003e\u003cpre\u003e singleton \"a\" 1        == fromList [(\"a\", 1)]\n\u003c/pre\u003e",
        "fct-module": "Data.CritBit.Map.Lazy",
        "fct-package": "critbit",
        "fct-signature": "k -\u003e v -\u003e CritBit k v",
        "fct-source": "src/Data-CritBit-Tree.html#singleton",
        "fct-type": "function",
        "title": "singleton"
      },
      "index": {
        "description": "map with single element singleton fromList",
        "hierarchy": "Data CritBit Map Lazy",
        "module": "Data.CritBit.Map.Lazy",
        "name": "singleton",
        "normalized": "a-\u003eb-\u003eCritBit a b",
        "package": "critbit",
        "partial": "",
        "signature": "k-\u003ev-\u003eCritBit k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/critbit/docs/Data-CritBit-Map-Lazy.html#v:size",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. The number of elements in the map.\n\u003c/p\u003e\u003cpre\u003e size empty                                  == 0\n size (singleton \"a\" 1)                      == 1\n size (fromList [(\"a\",1), (\"c\",2), (\"b\",3)]) == 3\n\u003c/pre\u003e",
        "fct-module": "Data.CritBit.Map.Lazy",
        "fct-package": "critbit",
        "fct-signature": "CritBit k v -\u003e Int",
        "fct-source": "src/Data-CritBit-Tree.html#size",
        "fct-type": "function",
        "title": "size"
      },
      "index": {
        "description": "The number of elements in the map size empty size singleton size fromList",
        "hierarchy": "Data CritBit Map Lazy",
        "module": "Data.CritBit.Map.Lazy",
        "name": "size",
        "normalized": "CritBit a b-\u003eInt",
        "package": "critbit",
        "partial": "",
        "signature": "CritBit k v-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/critbit/docs/Data-CritBit-Map-Lazy.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Convert the map to a list of key/value pairs. The list\n returned will be sorted in lexicographically ascending order.\n\u003c/p\u003e\u003cpre\u003e toList (fromList [(\"b\",3), (\"a\",5)]) == [(\"a\",5),(\"b\",3)]\n toList empty == []\n\u003c/pre\u003e",
        "fct-module": "Data.CritBit.Map.Lazy",
        "fct-package": "critbit",
        "fct-signature": "CritBit k v -\u003e [(k, v)]",
        "fct-source": "src/Data-CritBit-Types-Internal.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "Convert the map to list of key value pairs The list returned will be sorted in lexicographically ascending order toList fromList toList empty",
        "hierarchy": "Data CritBit Map Lazy",
        "module": "Data.CritBit.Map.Lazy",
        "name": "toList",
        "normalized": "CritBit a b-\u003e[(a,b)]",
        "package": "critbit",
        "partial": "List",
        "signature": "CritBit k v-\u003e[(k,v)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/critbit/docs/Data-CritBit-Map-Lazy.html#v:union",
      "description": {
        "fct-module": "Data.CritBit.Map.Lazy",
        "fct-package": "critbit",
        "fct-signature": "CritBit k v -\u003e CritBit k v -\u003e CritBit k v",
        "fct-source": "src/Data-CritBit-Tree.html#union",
        "fct-type": "function",
        "title": "union"
      },
      "index": {
        "description": "",
        "hierarchy": "Data CritBit Map Lazy",
        "module": "Data.CritBit.Map.Lazy",
        "name": "union",
        "normalized": "CritBit a b-\u003eCritBit a b-\u003eCritBit a b",
        "package": "critbit",
        "partial": "",
        "signature": "CritBit k v-\u003eCritBit k v-\u003eCritBit k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/critbit/docs/Data-CritBit-Map-Lazy.html#v:unionL",
      "description": {
        "fct-module": "Data.CritBit.Map.Lazy",
        "fct-package": "critbit",
        "fct-signature": "CritBit k v -\u003e CritBit k v -\u003e CritBit k v",
        "fct-source": "src/Data-CritBit-Tree.html#unionL",
        "fct-type": "function",
        "title": "unionL"
      },
      "index": {
        "description": "",
        "hierarchy": "Data CritBit Map Lazy",
        "module": "Data.CritBit.Map.Lazy",
        "name": "unionL",
        "normalized": "CritBit a b-\u003eCritBit a b-\u003eCritBit a b",
        "package": "critbit",
        "partial": "",
        "signature": "CritBit k v-\u003eCritBit k v-\u003eCritBit k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/critbit/docs/Data-CritBit-Map-Lazy.html#v:unionR",
      "description": {
        "fct-module": "Data.CritBit.Map.Lazy",
        "fct-package": "critbit",
        "fct-signature": "CritBit k v -\u003e CritBit k v -\u003e CritBit k v",
        "fct-source": "src/Data-CritBit-Tree.html#unionR",
        "fct-type": "function",
        "title": "unionR"
      },
      "index": {
        "description": "",
        "hierarchy": "Data CritBit Map Lazy",
        "module": "Data.CritBit.Map.Lazy",
        "name": "unionR",
        "normalized": "CritBit a b-\u003eCritBit a b-\u003eCritBit a b",
        "package": "critbit",
        "partial": "",
        "signature": "CritBit k v-\u003eCritBit k v-\u003eCritBit k v"
      }
    }
  }
]