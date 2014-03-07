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
        "word": "EnumMap"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn efficient implementation of maps from integer keys to values.\n\u003c/p\u003e\u003cp\u003eSince many function names (but not the type name) clash with\n \u003ca\u003ePrelude\u003c/a\u003e names, this module is usually imported \u003ccode\u003equalified\u003c/code\u003e, e.g.\n\u003c/p\u003e\u003cpre\u003e  import Data.EnumMap (EnumMap)\n  import qualified Data.EnumMap k as EnumMap\n\u003c/pre\u003e\u003cp\u003eThe implementation is based on \u003cem\u003ebig-endian patricia trees\u003c/em\u003e.  This data\n structure performs especially well on binary operations like \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e\n and \u003ccode\u003e\u003ca\u003eintersection\u003c/a\u003e\u003c/code\u003e.  However, my benchmarks show that it is also\n (much) faster on insertions and deletions when compared to a generic\n size-balanced map implementation (see \u003ca\u003eData.Map\u003c/a\u003e).\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Chris Okasaki and Andy Gill,  \"\u003cem\u003eFast Mergeable Integer Maps\u003c/em\u003e\",\n      Workshop on ML, September 1998, pages 77-86,\n      \u003ca\u003ehttp://citeseer.ist.psu.edu/okasaki98fast.html\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e D.R. Morrison, \"/PATRICIA -- Practical Algorithm To Retrieve\n      Information Coded In Alphanumeric/\", Journal of the ACM, 15(4),\n      October 1968, pages 514-534.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eOperation comments contain the operation time complexity in\n the Big-O notation \u003ca\u003ehttp://en.wikipedia.org/wiki/Big_O_notation\u003c/a\u003e.\n Many operations have a worst-case complexity of \u003cem\u003eO(min(n,W))\u003c/em\u003e.\n This means that the operation can become linear in the number of\n elements with a maximum of \u003cem\u003eW\u003c/em\u003e -- the number of bits in an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e\n (32 or 64).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.EnumMap",
          "name": "EnumMap",
          "package": "EnumMap",
          "source": "src/Data-EnumMap.html",
          "type": "module"
        },
        "index": {
          "description": "An efficient implementation of maps from integer keys to values Since many function names but not the type name clash with Prelude names this module is usually imported qualified e.g import Data.EnumMap EnumMap import qualified Data.EnumMap as EnumMap The implementation is based on big-endian patricia trees This data structure performs especially well on binary operations like union and intersection However my benchmarks show that it is also much faster on insertions and deletions when compared to generic size-balanced map implementation see Data.Map Chris Okasaki and Andy Gill Fast Mergeable Integer Maps Workshop on ML September pages http citeseer.ist.psu.edu okasaki98fast.html D.R Morrison PATRICIA Practical Algorithm To Retrieve Information Coded In Alphanumeric Journal of the ACM October pages Operation comments contain the operation time complexity in the Big-O notation http en.wikipedia.org wiki Big notation Many operations have worst-case complexity of min This means that the operation can become linear in the number of elements with maximum of the number of bits in an Int or",
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "EnumMap",
          "package": "EnumMap",
          "partial": "Enum Map",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/EnumMap/docs/Data-EnumMap.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA map of integers to values \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.EnumMap",
          "name": "EnumMap",
          "package": "EnumMap",
          "source": "src/Data-EnumMap.html#EnumMap",
          "type": "data"
        },
        "index": {
          "description": "map of integers to values",
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "EnumMap",
          "package": "EnumMap",
          "partial": "Enum Map",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/EnumMap/docs/Data-EnumMap.html#t:EnumMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap",
          "name": "Key_",
          "package": "EnumMap",
          "source": "src/Data-EnumMap.html#Key_",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "Key_",
          "package": "EnumMap",
          "partial": "Key",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/EnumMap/docs/Data-EnumMap.html#t:Key_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(min(n,W))\u003c/em\u003e. Find the value at a key.\n Calls \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e when the element can not be found.\n\u003c/p\u003e\u003cpre\u003e fromList [(5,'a'), (3,'b')] ! 1    Error: element not in the map\n fromList [(5,'a'), (3,'b')] ! 5 == 'a'\n\u003c/pre\u003e",
          "module": "Data.EnumMap",
          "name": "(!)",
          "package": "EnumMap",
          "signature": "EnumMap k a -\u003e k -\u003e a",
          "source": "src/Data-EnumMap.html#%21",
          "type": "function"
        },
        "index": {
          "description": "min Find the value at key Calls error when the element can not be found fromList Error element not in the map fromList",
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "(!) !",
          "normalized": "EnumMap a b-\u003ea-\u003eb",
          "package": "EnumMap",
          "signature": "EnumMap k a-\u003ek-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EnumMap/docs/Data-EnumMap.html#v:-33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003edifference\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.EnumMap",
          "name": "(\\\\)",
          "package": "EnumMap",
          "signature": "EnumMap k a -\u003e EnumMap k b -\u003e EnumMap k a",
          "source": "src/Data-EnumMap.html#%5C%5C",
          "type": "function"
        },
        "index": {
          "description": "Same as difference",
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "(\\\\) \\\\",
          "normalized": "EnumMap a b-\u003eEnumMap a c-\u003eEnumMap a b",
          "package": "EnumMap",
          "signature": "EnumMap k a-\u003eEnumMap k b-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EnumMap/docs/Data-EnumMap.html#v:-92--92-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(min(n,W))\u003c/em\u003e. Adjust a value at a specific key. When the key is not\n a member of the map, the original map is returned.\n\u003c/p\u003e\u003cpre\u003e adjust (\"new \" ++) 5 (fromList [(5,\"a\"), (3,\"b\")]) == fromList [(3, \"b\"), (5, \"new a\")]\n adjust (\"new \" ++) 7 (fromList [(5,\"a\"), (3,\"b\")]) == fromList [(3, \"b\"), (5, \"a\")]\n adjust (\"new \" ++) 7 empty                         == empty\n\u003c/pre\u003e",
          "module": "Data.EnumMap",
          "name": "adjust",
          "package": "EnumMap",
          "signature": "(a -\u003e a) -\u003e k -\u003e EnumMap k a -\u003e EnumMap k a",
          "source": "src/Data-EnumMap.html#adjust",
          "type": "function"
        },
        "index": {
          "description": "min Adjust value at specific key When the key is not member of the map the original map is returned adjust new fromList fromList new adjust new fromList fromList adjust new empty empty",
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "adjust",
          "normalized": "(a-\u003ea)-\u003eb-\u003eEnumMap b a-\u003eEnumMap b a",
          "package": "EnumMap",
          "signature": "(a-\u003ea)-\u003ek-\u003eEnumMap k a-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EnumMap/docs/Data-EnumMap.html#v:adjust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(min(n,W))\u003c/em\u003e. Adjust a value at a specific key. When the key is not\n a member of the map, the original map is returned.\n\u003c/p\u003e\u003cpre\u003e let f key x = (show key) ++ \":new \" ++ x\n adjustWithKey f 5 (fromList [(5,\"a\"), (3,\"b\")]) == fromList [(3, \"b\"), (5, \"5:new a\")]\n adjustWithKey f 7 (fromList [(5,\"a\"), (3,\"b\")]) == fromList [(3, \"b\"), (5, \"a\")]\n adjustWithKey f 7 empty                         == empty\n\u003c/pre\u003e",
          "module": "Data.EnumMap",
          "name": "adjustWithKey",
          "package": "EnumMap",
          "signature": "(k -\u003e a -\u003e a) -\u003e k -\u003e EnumMap k a -\u003e EnumMap k a",
          "source": "src/Data-EnumMap.html#adjustWithKey",
          "type": "function"
        },
        "index": {
          "description": "min Adjust value at specific key When the key is not member of the map the original map is returned let key show key new adjustWithKey fromList fromList new adjustWithKey fromList fromList adjustWithKey empty empty",
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "adjustWithKey",
          "normalized": "(a-\u003eb-\u003eb)-\u003ea-\u003eEnumMap a b-\u003eEnumMap a b",
          "package": "EnumMap",
          "partial": "With Key",
          "signature": "(k-\u003ea-\u003ea)-\u003ek-\u003eEnumMap k a-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EnumMap/docs/Data-EnumMap.html#v:adjustWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. The expression (\u003ccode\u003e\u003ccode\u003e\u003ca\u003ealter\u003c/a\u003e\u003c/code\u003e f k map\u003c/code\u003e) alters the value \u003ccode\u003ex\u003c/code\u003e at \u003ccode\u003ek\u003c/code\u003e, or absence thereof.\n \u003ccode\u003e\u003ca\u003ealter\u003c/a\u003e\u003c/code\u003e can be used to insert, delete, or update a value in an \u003ccode\u003e\u003ca\u003eEnumMap\u003c/a\u003e\u003c/code\u003e.\n In short : \u003ccode\u003e\u003ccode\u003e\u003ca\u003elookup\u003c/a\u003e\u003c/code\u003e k (\u003ccode\u003e\u003ca\u003ealter\u003c/a\u003e\u003c/code\u003e f k m) = f (\u003ccode\u003e\u003ca\u003elookup\u003c/a\u003e\u003c/code\u003e k m)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.EnumMap",
          "name": "alter",
          "package": "EnumMap",
          "signature": "(Maybe a -\u003e Maybe a) -\u003e Int -\u003e EnumMap k a -\u003e EnumMap k a",
          "source": "src/Data-EnumMap.html#alter",
          "type": "function"
        },
        "index": {
          "description": "log The expression alter map alters the value at or absence thereof alter can be used to insert delete or update value in an EnumMap In short lookup alter lookup",
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "alter",
          "normalized": "(Maybe a-\u003eMaybe a)-\u003eInt-\u003eEnumMap b a-\u003eEnumMap b a",
          "package": "EnumMap",
          "signature": "(Maybe a-\u003eMaybe a)-\u003eInt-\u003eEnumMap k a-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EnumMap/docs/Data-EnumMap.html#v:alter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Return all key/value pairs in the map in ascending key order.\n\u003c/p\u003e\u003cpre\u003e assocs (fromList [(5,\"a\"), (3,\"b\")]) == [(3,\"b\"), (5,\"a\")]\n assocs empty == []\n\u003c/pre\u003e",
          "module": "Data.EnumMap",
          "name": "assocs",
          "package": "EnumMap",
          "signature": "EnumMap k a -\u003e [(k, a)]",
          "source": "src/Data-EnumMap.html#assocs",
          "type": "function"
        },
        "index": {
          "description": "Return all key value pairs in the map in ascending key order assocs fromList assocs empty",
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "assocs",
          "normalized": "EnumMap a b-\u003e[(a,b)]",
          "package": "EnumMap",
          "signature": "EnumMap k a-\u003e[(k,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EnumMap/docs/Data-EnumMap.html#v:assocs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(min(n,W))\u003c/em\u003e. Delete a key and its value from the map. When the key is not\n a member of the map, the original map is returned.\n\u003c/p\u003e\u003cpre\u003e delete 5 (fromList [(5,\"a\"), (3,\"b\")]) == singleton 3 \"b\"\n delete 7 (fromList [(5,\"a\"), (3,\"b\")]) == fromList [(3, \"b\"), (5, \"a\")]\n delete 5 empty                         == empty\n\u003c/pre\u003e",
          "module": "Data.EnumMap",
          "name": "delete",
          "package": "EnumMap",
          "signature": "k -\u003e EnumMap k a -\u003e EnumMap k a",
          "source": "src/Data-EnumMap.html#delete",
          "type": "function"
        },
        "index": {
          "description": "min Delete key and its value from the map When the key is not member of the map the original map is returned delete fromList singleton delete fromList fromList delete empty empty",
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "delete",
          "normalized": "a-\u003eEnumMap a b-\u003eEnumMap a b",
          "package": "EnumMap",
          "signature": "k-\u003eEnumMap k a-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EnumMap/docs/Data-EnumMap.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Delete and find the maximal element.\n\u003c/p\u003e",
          "module": "Data.EnumMap",
          "name": "deleteFindMax",
          "package": "EnumMap",
          "signature": "EnumMap k a -\u003e (a, EnumMap k a)",
          "source": "src/Data-EnumMap.html#deleteFindMax",
          "type": "function"
        },
        "index": {
          "description": "log Delete and find the maximal element",
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "deleteFindMax",
          "normalized": "EnumMap a b-\u003e(b,EnumMap a b)",
          "package": "EnumMap",
          "partial": "Find Max",
          "signature": "EnumMap k a-\u003e(a,EnumMap k a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EnumMap/docs/Data-EnumMap.html#v:deleteFindMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Delete and find the minimal element.\n\u003c/p\u003e",
          "module": "Data.EnumMap",
          "name": "deleteFindMin",
          "package": "EnumMap",
          "signature": "EnumMap k a -\u003e (a, EnumMap k a)",
          "source": "src/Data-EnumMap.html#deleteFindMin",
          "type": "function"
        },
        "index": {
          "description": "log Delete and find the minimal element",
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "deleteFindMin",
          "normalized": "EnumMap a b-\u003e(b,EnumMap a b)",
          "package": "EnumMap",
          "partial": "Find Min",
          "signature": "EnumMap k a-\u003e(a,EnumMap k a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EnumMap/docs/Data-EnumMap.html#v:deleteFindMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Delete the maximal key.\n\u003c/p\u003e",
          "module": "Data.EnumMap",
          "name": "deleteMax",
          "package": "EnumMap",
          "signature": "EnumMap k a -\u003e EnumMap k a",
          "source": "src/Data-EnumMap.html#deleteMax",
          "type": "function"
        },
        "index": {
          "description": "log Delete the maximal key",
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "deleteMax",
          "normalized": "EnumMap a b-\u003eEnumMap a b",
          "package": "EnumMap",
          "partial": "Max",
          "signature": "EnumMap k a-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EnumMap/docs/Data-EnumMap.html#v:deleteMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Delete the minimal key.\n\u003c/p\u003e",
          "module": "Data.EnumMap",
          "name": "deleteMin",
          "package": "EnumMap",
          "signature": "EnumMap k a -\u003e EnumMap k a",
          "source": "src/Data-EnumMap.html#deleteMin",
          "type": "function"
        },
        "index": {
          "description": "log Delete the minimal key",
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "deleteMin",
          "normalized": "EnumMap a b-\u003eEnumMap a b",
          "package": "EnumMap",
          "partial": "Min",
          "signature": "EnumMap k a-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EnumMap/docs/Data-EnumMap.html#v:deleteMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e. Difference between two maps (based on keys).\n\u003c/p\u003e\u003cpre\u003e difference (fromList [(5, \"a\"), (3, \"b\")]) (fromList [(5, \"A\"), (7, \"C\")]) == singleton 3 \"b\"\n\u003c/pre\u003e",
          "module": "Data.EnumMap",
          "name": "difference",
          "package": "EnumMap",
          "signature": "EnumMap k a -\u003e EnumMap k b -\u003e EnumMap k a",
          "source": "src/Data-EnumMap.html#difference",
          "type": "function"
        },
        "index": {
          "description": "Difference between two maps based on keys difference fromList fromList singleton",
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "difference",
          "normalized": "EnumMap a b-\u003eEnumMap a c-\u003eEnumMap a b",
          "package": "EnumMap",
          "signature": "EnumMap k a-\u003eEnumMap k b-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EnumMap/docs/Data-EnumMap.html#v:difference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e. Difference with a combining function.\n\u003c/p\u003e\u003cpre\u003e let f al ar = if al == \"b\" then Just (al ++ \":\" ++ ar) else Nothing\n differenceWith f (fromList [(5, \"a\"), (3, \"b\")]) (fromList [(5, \"A\"), (3, \"B\"), (7, \"C\")])\n     == singleton 3 \"b:B\"\n\u003c/pre\u003e",
          "module": "Data.EnumMap",
          "name": "differenceWith",
          "package": "EnumMap",
          "signature": "(a -\u003e b -\u003e Maybe a) -\u003e EnumMap k a -\u003e EnumMap k b -\u003e EnumMap k a",
          "source": "src/Data-EnumMap.html#differenceWith",
          "type": "function"
        },
        "index": {
          "description": "Difference with combining function let al ar if al then Just al ar else Nothing differenceWith fromList fromList singleton",
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "differenceWith",
          "normalized": "(a-\u003eb-\u003eMaybe a)-\u003eEnumMap c a-\u003eEnumMap c b-\u003eEnumMap c a",
          "package": "EnumMap",
          "partial": "With",
          "signature": "(a-\u003eb-\u003eMaybe a)-\u003eEnumMap k a-\u003eEnumMap k b-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EnumMap/docs/Data-EnumMap.html#v:differenceWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e. Difference with a combining function. When two equal keys are\n encountered, the combining function is applied to the key and both values.\n If it returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, the element is discarded (proper set difference).\n If it returns (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e y\u003c/code\u003e), the element is updated with a new value \u003ccode\u003ey\u003c/code\u003e. \n\u003c/p\u003e\u003cpre\u003e let f k al ar = if al == \"b\" then Just ((show k) ++ \":\" ++ al ++ \"|\" ++ ar) else Nothing\n differenceWithKey f (fromList [(5, \"a\"), (3, \"b\")]) (fromList [(5, \"A\"), (3, \"B\"), (10, \"C\")])\n     == singleton 3 \"3:b|B\"\n\u003c/pre\u003e",
          "module": "Data.EnumMap",
          "name": "differenceWithKey",
          "package": "EnumMap",
          "signature": "(k -\u003e a -\u003e b -\u003e Maybe a) -\u003e EnumMap k a -\u003e EnumMap k b -\u003e EnumMap k a",
          "source": "src/Data-EnumMap.html#differenceWithKey",
          "type": "function"
        },
        "index": {
          "description": "Difference with combining function When two equal keys are encountered the combining function is applied to the key and both values If it returns Nothing the element is discarded proper set difference If it returns Just the element is updated with new value let al ar if al then Just show al ar else Nothing differenceWithKey fromList fromList singleton",
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "differenceWithKey",
          "normalized": "(a-\u003eb-\u003ec-\u003eMaybe b)-\u003eEnumMap a b-\u003eEnumMap a c-\u003eEnumMap a b",
          "package": "EnumMap",
          "partial": "With Key",
          "signature": "(k-\u003ea-\u003eb-\u003eMaybe a)-\u003eEnumMap k a-\u003eEnumMap k b-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EnumMap/docs/Data-EnumMap.html#v:differenceWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.\n Return all elements of the map in the ascending order of their keys.\n\u003c/p\u003e\u003cpre\u003e elems (fromList [(5,\"a\"), (3,\"b\")]) == [\"b\",\"a\"]\n elems empty == []\n\u003c/pre\u003e",
          "module": "Data.EnumMap",
          "name": "elems",
          "package": "EnumMap",
          "signature": "EnumMap k a -\u003e [a]",
          "source": "src/Data-EnumMap.html#elems",
          "type": "function"
        },
        "index": {
          "description": "Return all elements of the map in the ascending order of their keys elems fromList elems empty",
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "elems",
          "normalized": "EnumMap a b-\u003e[b]",
          "package": "EnumMap",
          "signature": "EnumMap k a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EnumMap/docs/Data-EnumMap.html#v:elems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. The empty map.\n\u003c/p\u003e\u003cpre\u003e empty      == fromList []\n size empty == 0\n\u003c/pre\u003e",
          "module": "Data.EnumMap",
          "name": "empty",
          "package": "EnumMap",
          "signature": "EnumMap k a",
          "source": "src/Data-EnumMap.html#empty",
          "type": "function"
        },
        "index": {
          "description": "The empty map empty fromList size empty",
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "empty",
          "package": "EnumMap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EnumMap/docs/Data-EnumMap.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Filter all values that satisfy some predicate.\n\u003c/p\u003e\u003cpre\u003e filter (\u003e \"a\") (fromList [(5,\"a\"), (3,\"b\")]) == singleton 3 \"b\"\n filter (\u003e \"x\") (fromList [(5,\"a\"), (3,\"b\")]) == empty\n filter (\u003c \"a\") (fromList [(5,\"a\"), (3,\"b\")]) == empty\n\u003c/pre\u003e",
          "module": "Data.EnumMap",
          "name": "filter",
          "package": "EnumMap",
          "signature": "(a -\u003e Bool) -\u003e EnumMap k a -\u003e EnumMap k a",
          "source": "src/Data-EnumMap.html#filter",
          "type": "function"
        },
        "index": {
          "description": "Filter all values that satisfy some predicate filter fromList singleton filter fromList empty filter fromList empty",
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "filter",
          "normalized": "(a-\u003eBool)-\u003eEnumMap b a-\u003eEnumMap b a",
          "package": "EnumMap",
          "signature": "(a-\u003eBool)-\u003eEnumMap k a-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EnumMap/docs/Data-EnumMap.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Filter all keys/values that satisfy some predicate.\n\u003c/p\u003e\u003cpre\u003e filterWithKey (\\k _ -\u003e k \u003e 4) (fromList [(5,\"a\"), (3,\"b\")]) == singleton 5 \"a\"\n\u003c/pre\u003e",
          "module": "Data.EnumMap",
          "name": "filterWithKey",
          "package": "EnumMap",
          "signature": "(k -\u003e a -\u003e Bool) -\u003e EnumMap k a -\u003e EnumMap k a",
          "source": "src/Data-EnumMap.html#filterWithKey",
          "type": "function"
        },
        "index": {
          "description": "Filter all keys values that satisfy some predicate filterWithKey fromList singleton",
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "filterWithKey",
          "normalized": "(a-\u003eb-\u003eBool)-\u003eEnumMap a b-\u003eEnumMap a b",
          "package": "EnumMap",
          "partial": "With Key",
          "signature": "(k-\u003ea-\u003eBool)-\u003eEnumMap k a-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EnumMap/docs/Data-EnumMap.html#v:filterWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. The maximal key of the map.\n\u003c/p\u003e",
          "module": "Data.EnumMap",
          "name": "findMax",
          "package": "EnumMap",
          "signature": "EnumMap k a -\u003e a",
          "source": "src/Data-EnumMap.html#findMax",
          "type": "function"
        },
        "index": {
          "description": "log The maximal key of the map",
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "findMax",
          "normalized": "EnumMap a b-\u003eb",
          "package": "EnumMap",
          "partial": "Max",
          "signature": "EnumMap k a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EnumMap/docs/Data-EnumMap.html#v:findMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. The minimal key of the map.\n\u003c/p\u003e",
          "module": "Data.EnumMap",
          "name": "findMin",
          "package": "EnumMap",
          "signature": "EnumMap k a -\u003e a",
          "source": "src/Data-EnumMap.html#findMin",
          "type": "function"
        },
        "index": {
          "description": "log The minimal key of the map",
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "findMin",
          "normalized": "EnumMap a b-\u003eb",
          "package": "EnumMap",
          "partial": "Min",
          "signature": "EnumMap k a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EnumMap/docs/Data-EnumMap.html#v:findMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(min(n,W))\u003c/em\u003e. The expression \u003ccode\u003e(\u003ccode\u003e\u003ca\u003efindWithDefault\u003c/a\u003e\u003c/code\u003e def k map)\u003c/code\u003e\n returns the value at key \u003ccode\u003ek\u003c/code\u003e or returns \u003ccode\u003edef\u003c/code\u003e when the key is not an\n element of the map.\n\u003c/p\u003e\u003cpre\u003e findWithDefault 'x' 1 (fromList [(5,'a'), (3,'b')]) == 'x'\n findWithDefault 'x' 5 (fromList [(5,'a'), (3,'b')]) == 'a'\n\u003c/pre\u003e",
          "module": "Data.EnumMap",
          "name": "findWithDefault",
          "package": "EnumMap",
          "signature": "a -\u003e k -\u003e EnumMap k a -\u003e a",
          "source": "src/Data-EnumMap.html#findWithDefault",
          "type": "function"
        },
        "index": {
          "description": "min The expression findWithDefault def map returns the value at key or returns def when the key is not an element of the map findWithDefault fromList findWithDefault fromList",
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "findWithDefault",
          "normalized": "a-\u003eb-\u003eEnumMap b a-\u003ea",
          "package": "EnumMap",
          "partial": "With Default",
          "signature": "a-\u003ek-\u003eEnumMap k a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EnumMap/docs/Data-EnumMap.html#v:findWithDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Fold the values in the map, such that\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e f z == \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e f z . \u003ccode\u003e\u003ca\u003eelems\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n For example,\n\u003c/p\u003e\u003cpre\u003e elems map = fold (:) [] map\n\u003c/pre\u003e\u003cpre\u003e let f a len = len + (length a)\n fold f 0 (fromList [(5,\"a\"), (3,\"bbb\")]) == 4\n\u003c/pre\u003e",
          "module": "Data.EnumMap",
          "name": "fold",
          "package": "EnumMap",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e EnumMap k a -\u003e b",
          "source": "src/Data-EnumMap.html#fold",
          "type": "function"
        },
        "index": {
          "description": "Fold the values in the map such that fold foldr elems For example elems map fold map let len len length fold fromList bbb",
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "fold",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eEnumMap c a-\u003eb",
          "package": "EnumMap",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eEnumMap k a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EnumMap/docs/Data-EnumMap.html#v:fold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Fold the keys and values in the map, such that\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003efoldWithKey\u003c/a\u003e\u003c/code\u003e f z == \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003euncurry\u003c/a\u003e\u003c/code\u003e f) z . \u003ccode\u003e\u003ca\u003etoAscList\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n For example,\n\u003c/p\u003e\u003cpre\u003e keys map = foldWithKey (\\k x ks -\u003e k:ks) [] map\n\u003c/pre\u003e\u003cpre\u003e let f k a result = result ++ \"(\" ++ (show k) ++ \":\" ++ a ++ \")\"\n foldWithKey f \"Map: \" (fromList [(5,\"a\"), (3,\"b\")]) == \"Map: (5:a)(3:b)\"\n\u003c/pre\u003e",
          "module": "Data.EnumMap",
          "name": "foldWithKey",
          "package": "EnumMap",
          "signature": "(k -\u003e a -\u003e b -\u003e b) -\u003e b -\u003e EnumMap k a -\u003e b",
          "source": "src/Data-EnumMap.html#foldWithKey",
          "type": "function"
        },
        "index": {
          "description": "Fold the keys and values in the map such that foldWithKey foldr uncurry toAscList For example keys map foldWithKey ks ks map let result result show foldWithKey Map fromList Map",
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "foldWithKey",
          "normalized": "(a-\u003eb-\u003ec-\u003ec)-\u003ec-\u003eEnumMap a b-\u003ec",
          "package": "EnumMap",
          "partial": "With Key",
          "signature": "(k-\u003ea-\u003eb-\u003eb)-\u003eb-\u003eEnumMap k a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EnumMap/docs/Data-EnumMap.html#v:foldWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n*min(n,W))\u003c/em\u003e. Build a map from a list of key/value pairs where\n the keys are in ascending order.\n\u003c/p\u003e\u003cpre\u003e fromAscList [(3,\"b\"), (5,\"a\")]          == fromList [(3, \"b\"), (5, \"a\")]\n fromAscList [(3,\"b\"), (5,\"a\"), (5,\"b\")] == fromList [(3, \"b\"), (5, \"b\")]\n\u003c/pre\u003e",
          "module": "Data.EnumMap",
          "name": "fromAscList",
          "package": "EnumMap",
          "signature": "[(k, a)] -\u003e EnumMap k a",
          "source": "src/Data-EnumMap.html#fromAscList",
          "type": "function"
        },
        "index": {
          "description": "min Build map from list of key value pairs where the keys are in ascending order fromAscList fromList fromAscList fromList",
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "fromAscList",
          "normalized": "[(a,b)]-\u003eEnumMap a b",
          "package": "EnumMap",
          "partial": "Asc List",
          "signature": "[(k,a)]-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EnumMap/docs/Data-EnumMap.html#v:fromAscList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n*min(n,W))\u003c/em\u003e. Build a map from a list of key/value pairs where\n the keys are in ascending order, with a combining function on equal keys.\n\u003c/p\u003e\u003cpre\u003e fromAscListWith (++) [(3,\"b\"), (5,\"a\"), (5,\"b\")] == fromList [(3, \"b\"), (5, \"ba\")]\n\u003c/pre\u003e",
          "module": "Data.EnumMap",
          "name": "fromAscListWith",
          "package": "EnumMap",
          "signature": "(a -\u003e a -\u003e a) -\u003e [(k, a)] -\u003e EnumMap k a",
          "source": "src/Data-EnumMap.html#fromAscListWith",
          "type": "function"
        },
        "index": {
          "description": "min Build map from list of key value pairs where the keys are in ascending order with combining function on equal keys fromAscListWith fromList ba",
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "fromAscListWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[(b,a)]-\u003eEnumMap b a",
          "package": "EnumMap",
          "partial": "Asc List With",
          "signature": "(a-\u003ea-\u003ea)-\u003e[(k,a)]-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EnumMap/docs/Data-EnumMap.html#v:fromAscListWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n*min(n,W))\u003c/em\u003e. Build a map from a list of key/value pairs where\n the keys are in ascending order, with a combining function on equal keys.\n\u003c/p\u003e\u003cpre\u003e fromAscListWith (++) [(3,\"b\"), (5,\"a\"), (5,\"b\")] == fromList [(3, \"b\"), (5, \"ba\")]\n\u003c/pre\u003e",
          "module": "Data.EnumMap",
          "name": "fromAscListWithKey",
          "package": "EnumMap",
          "signature": "(k -\u003e a -\u003e a -\u003e a) -\u003e [(k, a)] -\u003e EnumMap k a",
          "source": "src/Data-EnumMap.html#fromAscListWithKey",
          "type": "function"
        },
        "index": {
          "description": "min Build map from list of key value pairs where the keys are in ascending order with combining function on equal keys fromAscListWith fromList ba",
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "fromAscListWithKey",
          "normalized": "(a-\u003eb-\u003eb-\u003eb)-\u003e[(a,b)]-\u003eEnumMap a b",
          "package": "EnumMap",
          "partial": "Asc List With Key",
          "signature": "(k-\u003ea-\u003ea-\u003ea)-\u003e[(k,a)]-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EnumMap/docs/Data-EnumMap.html#v:fromAscListWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n*min(n,W))\u003c/em\u003e. Build a map from a list of key/value pairs where\n the keys are in ascending order and all distinct.\n\u003c/p\u003e\u003cpre\u003e fromDistinctAscList [(3,\"b\"), (5,\"a\")] == fromList [(3, \"b\"), (5, \"a\")]\n\u003c/pre\u003e",
          "module": "Data.EnumMap",
          "name": "fromDistinctAscList",
          "package": "EnumMap",
          "signature": "[(k, a)] -\u003e EnumMap k a",
          "source": "src/Data-EnumMap.html#fromDistinctAscList",
          "type": "function"
        },
        "index": {
          "description": "min Build map from list of key value pairs where the keys are in ascending order and all distinct fromDistinctAscList fromList",
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "fromDistinctAscList",
          "normalized": "[(a,b)]-\u003eEnumMap a b",
          "package": "EnumMap",
          "partial": "Distinct Asc List",
          "signature": "[(k,a)]-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EnumMap/docs/Data-EnumMap.html#v:fromDistinctAscList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n*min(n,W))\u003c/em\u003e. Create a map from a list of key/value pairs.\n\u003c/p\u003e\u003cpre\u003e fromList [] == empty\n fromList [(5,\"a\"), (3,\"b\"), (5, \"c\")] == fromList [(5,\"c\"), (3,\"b\")]\n fromList [(5,\"c\"), (3,\"b\"), (5, \"a\")] == fromList [(5,\"a\"), (3,\"b\")]\n\u003c/pre\u003e",
          "module": "Data.EnumMap",
          "name": "fromList",
          "package": "EnumMap",
          "signature": "[(k, a)] -\u003e EnumMap k a",
          "source": "src/Data-EnumMap.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "min Create map from list of key value pairs fromList empty fromList fromList fromList fromList",
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "fromList",
          "normalized": "[(a,b)]-\u003eEnumMap a b",
          "package": "EnumMap",
          "partial": "List",
          "signature": "[(k,a)]-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EnumMap/docs/Data-EnumMap.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n*min(n,W))\u003c/em\u003e. Create a map from a list of key/value pairs with a combining function. See also \u003ccode\u003e\u003ca\u003efromAscListWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e fromListWith (++) [(5,\"a\"), (5,\"b\"), (3,\"b\"), (3,\"a\"), (5,\"a\")] == fromList [(3, \"ab\"), (5, \"aba\")]\n fromListWith (++) [] == empty\n\u003c/pre\u003e",
          "module": "Data.EnumMap",
          "name": "fromListWith",
          "package": "EnumMap",
          "signature": "(a -\u003e a -\u003e a) -\u003e [(k, a)] -\u003e EnumMap k a",
          "source": "src/Data-EnumMap.html#fromListWith",
          "type": "function"
        },
        "index": {
          "description": "min Create map from list of key value pairs with combining function See also fromAscListWith fromListWith fromList ab aba fromListWith empty",
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "fromListWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[(b,a)]-\u003eEnumMap b a",
          "package": "EnumMap",
          "partial": "List With",
          "signature": "(a-\u003ea-\u003ea)-\u003e[(k,a)]-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EnumMap/docs/Data-EnumMap.html#v:fromListWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n*min(n,W))\u003c/em\u003e. Build a map from a list of key/value pairs with a combining function. See also fromAscListWithKey'.\n\u003c/p\u003e\u003cpre\u003e fromListWith (++) [(5,\"a\"), (5,\"b\"), (3,\"b\"), (3,\"a\"), (5,\"a\")] == fromList [(3, \"ab\"), (5, \"aba\")]\n fromListWith (++) [] == empty\n\u003c/pre\u003e",
          "module": "Data.EnumMap",
          "name": "fromListWithKey",
          "package": "EnumMap",
          "signature": "(k -\u003e a -\u003e a -\u003e a) -\u003e [(k, a)] -\u003e EnumMap k a",
          "source": "src/Data-EnumMap.html#fromListWithKey",
          "type": "function"
        },
        "index": {
          "description": "min Build map from list of key value pairs with combining function See also fromAscListWithKey fromListWith fromList ab aba fromListWith empty",
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "fromListWithKey",
          "normalized": "(a-\u003eb-\u003eb-\u003eb)-\u003e[(a,b)]-\u003eEnumMap a b",
          "package": "EnumMap",
          "partial": "List With Key",
          "signature": "(k-\u003ea-\u003ea-\u003ea)-\u003e[(k,a)]-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EnumMap/docs/Data-EnumMap.html#v:fromListWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(min(n,W))\u003c/em\u003e. Insert a new key/value pair in the map.\n If the key is already present in the map, the associated value is\n replaced with the supplied value, i.e. \u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e is equivalent to\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003einsertWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e insert 5 'x' (fromList [(5,'a'), (3,'b')]) == fromList [(3, 'b'), (5, 'x')]\n insert 7 'x' (fromList [(5,'a'), (3,'b')]) == fromList [(3, 'b'), (5, 'a'), (7, 'x')]\n insert 5 'x' empty                         == singleton 5 'x'\n\u003c/pre\u003e",
          "module": "Data.EnumMap",
          "name": "insert",
          "package": "EnumMap",
          "signature": "k -\u003e a -\u003e EnumMap k a -\u003e EnumMap k a",
          "source": "src/Data-EnumMap.html#insert",
          "type": "function"
        },
        "index": {
          "description": "min Insert new key value pair in the map If the key is already present in the map the associated value is replaced with the supplied value i.e insert is equivalent to insertWith const insert fromList fromList insert fromList fromList insert empty singleton",
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "insert",
          "normalized": "a-\u003eb-\u003eEnumMap a b-\u003eEnumMap a b",
          "package": "EnumMap",
          "signature": "k-\u003ea-\u003eEnumMap k a-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EnumMap/docs/Data-EnumMap.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(min(n,W))\u003c/em\u003e. The expression (\u003ccode\u003e\u003ccode\u003e\u003ca\u003einsertLookupWithKey\u003c/a\u003e\u003c/code\u003e f k x map\u003c/code\u003e)\n is a pair where the first element is equal to (\u003ccode\u003e\u003ccode\u003e\u003ca\u003elookup\u003c/a\u003e\u003c/code\u003e k map\u003c/code\u003e)\n and the second element equal to (\u003ccode\u003e\u003ccode\u003e\u003ca\u003einsertWithKey\u003c/a\u003e\u003c/code\u003e f k x map\u003c/code\u003e).\n\u003c/p\u003e\u003cpre\u003e let f key new_value old_value = (show key) ++ \":\" ++ new_value ++ \"|\" ++ old_value\n insertLookupWithKey f 5 \"xxx\" (fromList [(5,\"a\"), (3,\"b\")]) == (Just \"a\", fromList [(3, \"b\"), (5, \"5:xxx|a\")])\n insertLookupWithKey f 7 \"xxx\" (fromList [(5,\"a\"), (3,\"b\")]) == (Nothing,  fromList [(3, \"b\"), (5, \"a\"), (7, \"xxx\")])\n insertLookupWithKey f 5 \"xxx\" empty                         == (Nothing,  singleton 5 \"xxx\")\n\u003c/pre\u003e\u003cp\u003eThis is how to define \u003ccode\u003einsertLookup\u003c/code\u003e using \u003ccode\u003einsertLookupWithKey\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e let insertLookup kx x t = insertLookupWithKey (\\_ a _ -\u003e a) kx x t\n insertLookup 5 \"x\" (fromList [(5,\"a\"), (3,\"b\")]) == (Just \"a\", fromList [(3, \"b\"), (5, \"x\")])\n insertLookup 7 \"x\" (fromList [(5,\"a\"), (3,\"b\")]) == (Nothing,  fromList [(3, \"b\"), (5, \"a\"), (7, \"x\")])\n\u003c/pre\u003e",
          "module": "Data.EnumMap",
          "name": "insertLookupWithKey",
          "package": "EnumMap",
          "signature": "(k -\u003e a -\u003e a -\u003e a) -\u003e k -\u003e a -\u003e EnumMap k a -\u003e (Maybe a, EnumMap k a)",
          "source": "src/Data-EnumMap.html#insertLookupWithKey",
          "type": "function"
        },
        "index": {
          "description": "min The expression insertLookupWithKey map is pair where the first element is equal to lookup map and the second element equal to insertWithKey map let key new value old value show key new value old value insertLookupWithKey xxx fromList Just fromList xxx insertLookupWithKey xxx fromList Nothing fromList xxx insertLookupWithKey xxx empty Nothing singleton xxx This is how to define insertLookup using insertLookupWithKey let insertLookup kx insertLookupWithKey kx insertLookup fromList Just fromList insertLookup fromList Nothing fromList",
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "insertLookupWithKey",
          "normalized": "(a-\u003eb-\u003eb-\u003eb)-\u003ea-\u003eb-\u003eEnumMap a b-\u003e(Maybe b,EnumMap a b)",
          "package": "EnumMap",
          "partial": "Lookup With Key",
          "signature": "(k-\u003ea-\u003ea-\u003ea)-\u003ek-\u003ea-\u003eEnumMap k a-\u003e(Maybe a,EnumMap k a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EnumMap/docs/Data-EnumMap.html#v:insertLookupWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(min(n,W))\u003c/em\u003e. Insert with a combining function.\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003einsertWith\u003c/a\u003e\u003c/code\u003e f key value mp\u003c/code\u003e \n will insert the pair (key, value) into \u003ccode\u003emp\u003c/code\u003e if key does\n not exist in the map. If the key does exist, the function will\n insert \u003ccode\u003ef new_value old_value\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e insertWith (++) 5 \"xxx\" (fromList [(5,\"a\"), (3,\"b\")]) == fromList [(3, \"b\"), (5, \"xxxa\")]\n insertWith (++) 7 \"xxx\" (fromList [(5,\"a\"), (3,\"b\")]) == fromList [(3, \"b\"), (5, \"a\"), (7, \"xxx\")]\n insertWith (++) 5 \"xxx\" empty                         == singleton 5 \"xxx\"\n\u003c/pre\u003e",
          "module": "Data.EnumMap",
          "name": "insertWith",
          "package": "EnumMap",
          "signature": "(a -\u003e a -\u003e a) -\u003e k -\u003e a -\u003e EnumMap k a -\u003e EnumMap k a",
          "source": "src/Data-EnumMap.html#insertWith",
          "type": "function"
        },
        "index": {
          "description": "min Insert with combining function insertWith key value mp will insert the pair key value into mp if key does not exist in the map If the key does exist the function will insert new value old value insertWith xxx fromList fromList xxxa insertWith xxx fromList fromList xxx insertWith xxx empty singleton xxx",
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "insertWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003eb-\u003ea-\u003eEnumMap b a-\u003eEnumMap b a",
          "package": "EnumMap",
          "partial": "With",
          "signature": "(a-\u003ea-\u003ea)-\u003ek-\u003ea-\u003eEnumMap k a-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EnumMap/docs/Data-EnumMap.html#v:insertWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(min(n,W))\u003c/em\u003e. Insert with a combining function.\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003einsertWithKey\u003c/a\u003e\u003c/code\u003e f key value mp\u003c/code\u003e \n will insert the pair (key, value) into \u003ccode\u003emp\u003c/code\u003e if key does\n not exist in the map. If the key does exist, the function will\n insert \u003ccode\u003ef key new_value old_value\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e let f key new_value old_value = (show key) ++ \":\" ++ new_value ++ \"|\" ++ old_value\n insertWithKey f 5 \"xxx\" (fromList [(5,\"a\"), (3,\"b\")]) == fromList [(3, \"b\"), (5, \"5:xxx|a\")]\n insertWithKey f 7 \"xxx\" (fromList [(5,\"a\"), (3,\"b\")]) == fromList [(3, \"b\"), (5, \"a\"), (7, \"xxx\")]\n insertWithKey f 5 \"xxx\" empty                         == singleton 5 \"xxx\"\n\u003c/pre\u003e",
          "module": "Data.EnumMap",
          "name": "insertWithKey",
          "package": "EnumMap",
          "signature": "(k -\u003e a -\u003e a -\u003e a) -\u003e k -\u003e a -\u003e EnumMap k a -\u003e EnumMap k a",
          "source": "src/Data-EnumMap.html#insertWithKey",
          "type": "function"
        },
        "index": {
          "description": "min Insert with combining function insertWithKey key value mp will insert the pair key value into mp if key does not exist in the map If the key does exist the function will insert key new value old value let key new value old value show key new value old value insertWithKey xxx fromList fromList xxx insertWithKey xxx fromList fromList xxx insertWithKey xxx empty singleton xxx",
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "insertWithKey",
          "normalized": "(a-\u003eb-\u003eb-\u003eb)-\u003ea-\u003eb-\u003eEnumMap a b-\u003eEnumMap a b",
          "package": "EnumMap",
          "partial": "With Key",
          "signature": "(k-\u003ea-\u003ea-\u003ea)-\u003ek-\u003ea-\u003eEnumMap k a-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EnumMap/docs/Data-EnumMap.html#v:insertWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e. The (left-biased) intersection of two maps (based on keys).\n\u003c/p\u003e\u003cpre\u003e intersection (fromList [(5, \"a\"), (3, \"b\")]) (fromList [(5, \"A\"), (7, \"C\")]) == singleton 5 \"a\"\n\u003c/pre\u003e",
          "module": "Data.EnumMap",
          "name": "intersection",
          "package": "EnumMap",
          "signature": "EnumMap k a -\u003e EnumMap k b -\u003e EnumMap k a",
          "source": "src/Data-EnumMap.html#intersection",
          "type": "function"
        },
        "index": {
          "description": "The left-biased intersection of two maps based on keys intersection fromList fromList singleton",
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "intersection",
          "normalized": "EnumMap a b-\u003eEnumMap a c-\u003eEnumMap a b",
          "package": "EnumMap",
          "signature": "EnumMap k a-\u003eEnumMap k b-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EnumMap/docs/Data-EnumMap.html#v:intersection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e. The intersection with a combining function.\n\u003c/p\u003e\u003cpre\u003e intersectionWith (++) (fromList [(5, \"a\"), (3, \"b\")]) (fromList [(5, \"A\"), (7, \"C\")]) == singleton 5 \"aA\"\n\u003c/pre\u003e",
          "module": "Data.EnumMap",
          "name": "intersectionWith",
          "package": "EnumMap",
          "signature": "(a -\u003e b -\u003e a) -\u003e EnumMap k a -\u003e EnumMap k b -\u003e EnumMap k a",
          "source": "src/Data-EnumMap.html#intersectionWith",
          "type": "function"
        },
        "index": {
          "description": "The intersection with combining function intersectionWith fromList fromList singleton aA",
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "intersectionWith",
          "normalized": "(a-\u003eb-\u003ea)-\u003eEnumMap c a-\u003eEnumMap c b-\u003eEnumMap c a",
          "package": "EnumMap",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ea)-\u003eEnumMap k a-\u003eEnumMap k b-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EnumMap/docs/Data-EnumMap.html#v:intersectionWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e. The intersection with a combining function.\n\u003c/p\u003e\u003cpre\u003e let f k al ar = (show k) ++ \":\" ++ al ++ \"|\" ++ ar\n intersectionWithKey f (fromList [(5, \"a\"), (3, \"b\")]) (fromList [(5, \"A\"), (7, \"C\")]) == singleton 5 \"5:a|A\"\n\u003c/pre\u003e",
          "module": "Data.EnumMap",
          "name": "intersectionWithKey",
          "package": "EnumMap",
          "signature": "(k -\u003e a -\u003e b -\u003e a) -\u003e EnumMap k a -\u003e EnumMap k b -\u003e EnumMap k a",
          "source": "src/Data-EnumMap.html#intersectionWithKey",
          "type": "function"
        },
        "index": {
          "description": "The intersection with combining function let al ar show al ar intersectionWithKey fromList fromList singleton",
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "intersectionWithKey",
          "normalized": "(a-\u003eb-\u003ec-\u003eb)-\u003eEnumMap a b-\u003eEnumMap a c-\u003eEnumMap a b",
          "package": "EnumMap",
          "partial": "With Key",
          "signature": "(k-\u003ea-\u003eb-\u003ea)-\u003eEnumMap k a-\u003eEnumMap k b-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EnumMap/docs/Data-EnumMap.html#v:intersectionWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e. Is this a proper submap? (ie. a submap but not equal). \n Defined as (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eisProperSubmapOf\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eisProperSubmapOfBy\u003c/a\u003e\u003c/code\u003e (==)\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.EnumMap",
          "name": "isProperSubmapOf",
          "package": "EnumMap",
          "signature": "EnumMap k a -\u003e EnumMap k a -\u003e Bool",
          "source": "src/Data-EnumMap.html#isProperSubmapOf",
          "type": "function"
        },
        "index": {
          "description": "Is this proper submap ie submap but not equal Defined as isProperSubmapOf isProperSubmapOfBy",
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "isProperSubmapOf",
          "normalized": "EnumMap a b-\u003eEnumMap a b-\u003eBool",
          "package": "EnumMap",
          "partial": "Proper Submap Of",
          "signature": "EnumMap k a-\u003eEnumMap k a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EnumMap/docs/Data-EnumMap.html#v:isProperSubmapOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e. Is this a proper submap? (ie. a submap but not equal).\n The expression (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eisProperSubmapOfBy\u003c/a\u003e\u003c/code\u003e f m1 m2\u003c/code\u003e) returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e when\n \u003ccode\u003em1\u003c/code\u003e and \u003ccode\u003em2\u003c/code\u003e are not equal,\n all keys in \u003ccode\u003em1\u003c/code\u003e are in \u003ccode\u003em2\u003c/code\u003e, and when \u003ccode\u003ef\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e when\n applied to their respective values. For example, the following \n expressions are all \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e isProperSubmapOfBy (==) (fromList [(1,1)]) (fromList [(1,1),(2,2)])\n isProperSubmapOfBy (\u003c=) (fromList [(1,1)]) (fromList [(1,1),(2,2)])\n\u003c/pre\u003e\u003cp\u003eBut the following are all \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e isProperSubmapOfBy (==) (fromList [(1,1),(2,2)]) (fromList [(1,1),(2,2)])\n isProperSubmapOfBy (==) (fromList [(1,1),(2,2)]) (fromList [(1,1)])\n isProperSubmapOfBy (\u003c)  (fromList [(1,1)])       (fromList [(1,1),(2,2)])\n\u003c/pre\u003e",
          "module": "Data.EnumMap",
          "name": "isProperSubmapOfBy",
          "package": "EnumMap",
          "signature": "(a -\u003e b -\u003e Bool) -\u003e EnumMap k a -\u003e EnumMap k b -\u003e Bool",
          "source": "src/Data-EnumMap.html#isProperSubmapOfBy",
          "type": "function"
        },
        "index": {
          "description": "Is this proper submap ie submap but not equal The expression isProperSubmapOfBy m1 m2 returns True when m1 and m2 are not equal all keys in m1 are in m2 and when returns True when applied to their respective values For example the following expressions are all True isProperSubmapOfBy fromList fromList isProperSubmapOfBy fromList fromList But the following are all False isProperSubmapOfBy fromList fromList isProperSubmapOfBy fromList fromList isProperSubmapOfBy fromList fromList",
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "isProperSubmapOfBy",
          "normalized": "(a-\u003eb-\u003eBool)-\u003eEnumMap c a-\u003eEnumMap c b-\u003eBool",
          "package": "EnumMap",
          "partial": "Proper Submap Of By",
          "signature": "(a-\u003eb-\u003eBool)-\u003eEnumMap k a-\u003eEnumMap k b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EnumMap/docs/Data-EnumMap.html#v:isProperSubmapOfBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e. Is this a submap?\n Defined as (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eisSubmapOf\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eisSubmapOfBy\u003c/a\u003e\u003c/code\u003e (==)\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.EnumMap",
          "name": "isSubmapOf",
          "package": "EnumMap",
          "signature": "EnumMap k a -\u003e EnumMap k a -\u003e Bool",
          "source": "src/Data-EnumMap.html#isSubmapOf",
          "type": "function"
        },
        "index": {
          "description": "Is this submap Defined as isSubmapOf isSubmapOfBy",
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "isSubmapOf",
          "normalized": "EnumMap a b-\u003eEnumMap a b-\u003eBool",
          "package": "EnumMap",
          "partial": "Submap Of",
          "signature": "EnumMap k a-\u003eEnumMap k a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EnumMap/docs/Data-EnumMap.html#v:isSubmapOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e.\n The expression (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eisSubmapOfBy\u003c/a\u003e\u003c/code\u003e f m1 m2\u003c/code\u003e) returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if\n all keys in \u003ccode\u003em1\u003c/code\u003e are in \u003ccode\u003em2\u003c/code\u003e, and when \u003ccode\u003ef\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e when\n applied to their respective values. For example, the following \n expressions are all \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e isSubmapOfBy (==) (fromList [(1,1)]) (fromList [(1,1),(2,2)])\n isSubmapOfBy (\u003c=) (fromList [(1,1)]) (fromList [(1,1),(2,2)])\n isSubmapOfBy (==) (fromList [(1,1),(2,2)]) (fromList [(1,1),(2,2)])\n\u003c/pre\u003e\u003cp\u003eBut the following are all \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e isSubmapOfBy (==) (fromList [(1,2)]) (fromList [(1,1),(2,2)])\n isSubmapOfBy (\u003c) (fromList [(1,1)]) (fromList [(1,1),(2,2)])\n isSubmapOfBy (==) (fromList [(1,1),(2,2)]) (fromList [(1,1)])\n\u003c/pre\u003e",
          "module": "Data.EnumMap",
          "name": "isSubmapOfBy",
          "package": "EnumMap",
          "signature": "(a -\u003e b -\u003e Bool) -\u003e EnumMap k a -\u003e EnumMap k b -\u003e Bool",
          "source": "src/Data-EnumMap.html#isSubmapOfBy",
          "type": "function"
        },
        "index": {
          "description": "The expression isSubmapOfBy m1 m2 returns True if all keys in m1 are in m2 and when returns True when applied to their respective values For example the following expressions are all True isSubmapOfBy fromList fromList isSubmapOfBy fromList fromList isSubmapOfBy fromList fromList But the following are all False isSubmapOfBy fromList fromList isSubmapOfBy fromList fromList isSubmapOfBy fromList fromList",
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "isSubmapOfBy",
          "normalized": "(a-\u003eb-\u003eBool)-\u003eEnumMap c a-\u003eEnumMap c b-\u003eBool",
          "package": "EnumMap",
          "partial": "Submap Of By",
          "signature": "(a-\u003eb-\u003eBool)-\u003eEnumMap k a-\u003eEnumMap k b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EnumMap/docs/Data-EnumMap.html#v:isSubmapOfBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Return all keys of the map in ascending order.\n\u003c/p\u003e\u003cpre\u003e keys (fromList [(5,\"a\"), (3,\"b\")]) == [3,5]\n keys empty == []\n\u003c/pre\u003e",
          "module": "Data.EnumMap",
          "name": "keys",
          "package": "EnumMap",
          "signature": "EnumMap k a -\u003e [k]",
          "source": "src/Data-EnumMap.html#keys",
          "type": "function"
        },
        "index": {
          "description": "Return all keys of the map in ascending order keys fromList keys empty",
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "keys",
          "normalized": "EnumMap a b-\u003e[a]",
          "package": "EnumMap",
          "signature": "EnumMap k a-\u003e[k]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EnumMap/docs/Data-EnumMap.html#v:keys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n*min(n,W))\u003c/em\u003e. The set of all keys of the map.\n\u003c/p\u003e\u003cpre\u003e keysSet (fromList [(5,\"a\"), (3,\"b\")]) == Data.IntSet.fromList [3,5]\n keysSet empty == Data.IntSet.empty\n\u003c/pre\u003e",
          "module": "Data.EnumMap",
          "name": "keysSet",
          "package": "EnumMap",
          "signature": "EnumMap k a -\u003e IntSet",
          "source": "src/Data-EnumMap.html#keysSet",
          "type": "function"
        },
        "index": {
          "description": "min The set of all keys of the map keysSet fromList Data.IntSet.fromList keysSet empty Data.IntSet.empty",
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "keysSet",
          "normalized": "EnumMap a b-\u003eIntSet",
          "package": "EnumMap",
          "partial": "Set",
          "signature": "EnumMap k a-\u003eIntSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EnumMap/docs/Data-EnumMap.html#v:keysSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(min(n,W))\u003c/em\u003e. Lookup the value at a key in the map. See also \u003ccode\u003eData.Map.lookup\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.EnumMap",
          "name": "lookup",
          "package": "EnumMap",
          "signature": "k -\u003e EnumMap k a -\u003e Maybe a",
          "source": "src/Data-EnumMap.html#lookup",
          "type": "function"
        },
        "index": {
          "description": "min Lookup the value at key in the map See also Data.Map.lookup",
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "lookup",
          "normalized": "a-\u003eEnumMap a b-\u003eMaybe b",
          "package": "EnumMap",
          "signature": "k-\u003eEnumMap k a-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EnumMap/docs/Data-EnumMap.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Map a function over all values in the map.\n\u003c/p\u003e\u003cpre\u003e map (++ \"x\") (fromList [(5,\"a\"), (3,\"b\")]) == fromList [(3, \"bx\"), (5, \"ax\")]\n\u003c/pre\u003e",
          "module": "Data.EnumMap",
          "name": "map",
          "package": "EnumMap",
          "signature": "(a -\u003e b) -\u003e EnumMap k a -\u003e EnumMap k b",
          "source": "src/Data-EnumMap.html#map",
          "type": "function"
        },
        "index": {
          "description": "Map function over all values in the map map fromList fromList bx ax",
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "map",
          "normalized": "(a-\u003eb)-\u003eEnumMap c a-\u003eEnumMap c b",
          "package": "EnumMap",
          "signature": "(a-\u003eb)-\u003eEnumMap k a-\u003eEnumMap k b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EnumMap/docs/Data-EnumMap.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. The function \u003ccode\u003e\u003ccode\u003e\u003ca\u003emapAccum\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e threads an accumulating\n argument through the map in ascending order of keys.\n\u003c/p\u003e\u003cpre\u003e let f a b = (a ++ b, b ++ \"X\")\n mapAccum f \"Everything: \" (fromList [(5,\"a\"), (3,\"b\")]) == (\"Everything: ba\", fromList [(3, \"bX\"), (5, \"aX\")])\n\u003c/pre\u003e",
          "module": "Data.EnumMap",
          "name": "mapAccum",
          "package": "EnumMap",
          "signature": "(a -\u003e b -\u003e (a, c)) -\u003e a -\u003e EnumMap k b -\u003e (a, EnumMap k c)",
          "source": "src/Data-EnumMap.html#mapAccum",
          "type": "function"
        },
        "index": {
          "description": "The function mapAccum threads an accumulating argument through the map in ascending order of keys let mapAccum Everything fromList Everything ba fromList bX aX",
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "mapAccum",
          "normalized": "(a-\u003eb-\u003e(a,c))-\u003ea-\u003eEnumMap d b-\u003e(a,EnumMap d c)",
          "package": "EnumMap",
          "partial": "Accum",
          "signature": "(a-\u003eb-\u003e(a,c))-\u003ea-\u003eEnumMap k b-\u003e(a,EnumMap k c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EnumMap/docs/Data-EnumMap.html#v:mapAccum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. The function \u003ccode\u003e\u003ccode\u003e\u003ca\u003emapAccumWithKey\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e threads an accumulating\n argument through the map in ascending order of keys.\n\u003c/p\u003e\u003cpre\u003e let f a k b = (a ++ \" \" ++ (show k) ++ \"-\" ++ b, b ++ \"X\")\n mapAccumWithKey f \"Everything:\" (fromList [(5,\"a\"), (3,\"b\")]) == (\"Everything: 3-b 5-a\", fromList [(3, \"bX\"), (5, \"aX\")])\n\u003c/pre\u003e",
          "module": "Data.EnumMap",
          "name": "mapAccumWithKey",
          "package": "EnumMap",
          "signature": "(a -\u003e k -\u003e b -\u003e (a, c)) -\u003e a -\u003e EnumMap k b -\u003e (a, EnumMap k c)",
          "source": "src/Data-EnumMap.html#mapAccumWithKey",
          "type": "function"
        },
        "index": {
          "description": "The function mapAccumWithKey threads an accumulating argument through the map in ascending order of keys let show mapAccumWithKey Everything fromList Everything fromList bX aX",
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "mapAccumWithKey",
          "normalized": "(a-\u003eb-\u003ec-\u003e(a,d))-\u003ea-\u003eEnumMap b c-\u003e(a,EnumMap b d)",
          "package": "EnumMap",
          "partial": "Accum With Key",
          "signature": "(a-\u003ek-\u003eb-\u003e(a,c))-\u003ea-\u003eEnumMap k b-\u003e(a,EnumMap k c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EnumMap/docs/Data-EnumMap.html#v:mapAccumWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Map values and separate the \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e results.\n\u003c/p\u003e\u003cpre\u003e let f a = if a \u003c \"c\" then Left a else Right a\n mapEither f (fromList [(5,\"a\"), (3,\"b\"), (1,\"x\"), (7,\"z\")])\n     == (fromList [(3,\"b\"), (5,\"a\")], fromList [(1,\"x\"), (7,\"z\")])\n\n mapEither (\\ a -\u003e Right a) (fromList [(5,\"a\"), (3,\"b\"), (1,\"x\"), (7,\"z\")])\n     == (empty, fromList [(5,\"a\"), (3,\"b\"), (1,\"x\"), (7,\"z\")])\n\u003c/pre\u003e",
          "module": "Data.EnumMap",
          "name": "mapEither",
          "package": "EnumMap",
          "signature": "(a -\u003e Either b c) -\u003e EnumMap k a -\u003e (EnumMap k b, EnumMap k c)",
          "source": "src/Data-EnumMap.html#mapEither",
          "type": "function"
        },
        "index": {
          "description": "Map values and separate the Left and Right results let if then Left else Right mapEither fromList fromList fromList mapEither Right fromList empty fromList",
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "mapEither",
          "normalized": "(a-\u003eEither b c)-\u003eEnumMap d a-\u003e(EnumMap d b,EnumMap d c)",
          "package": "EnumMap",
          "partial": "Either",
          "signature": "(a-\u003eEither b c)-\u003eEnumMap k a-\u003e(EnumMap k b,EnumMap k c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EnumMap/docs/Data-EnumMap.html#v:mapEither"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Map keys/values and separate the \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e results.\n\u003c/p\u003e\u003cpre\u003e let f k a = if k \u003c 5 then Left (k * 2) else Right (a ++ a)\n mapEitherWithKey f (fromList [(5,\"a\"), (3,\"b\"), (1,\"x\"), (7,\"z\")])\n     == (fromList [(1,2), (3,6)], fromList [(5,\"aa\"), (7,\"zz\")])\n\n mapEitherWithKey (\\_ a -\u003e Right a) (fromList [(5,\"a\"), (3,\"b\"), (1,\"x\"), (7,\"z\")])\n     == (empty, fromList [(1,\"x\"), (3,\"b\"), (5,\"a\"), (7,\"z\")])\n\u003c/pre\u003e",
          "module": "Data.EnumMap",
          "name": "mapEitherWithKey",
          "package": "EnumMap",
          "signature": "(k -\u003e a -\u003e Either b c) -\u003e EnumMap k a -\u003e (EnumMap k b, EnumMap k c)",
          "source": "src/Data-EnumMap.html#mapEitherWithKey",
          "type": "function"
        },
        "index": {
          "description": "Map keys values and separate the Left and Right results let if then Left else Right mapEitherWithKey fromList fromList fromList aa zz mapEitherWithKey Right fromList empty fromList",
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "mapEitherWithKey",
          "normalized": "(a-\u003eb-\u003eEither c d)-\u003eEnumMap a b-\u003e(EnumMap a c,EnumMap a d)",
          "package": "EnumMap",
          "partial": "Either With Key",
          "signature": "(k-\u003ea-\u003eEither b c)-\u003eEnumMap k a-\u003e(EnumMap k b,EnumMap k c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EnumMap/docs/Data-EnumMap.html#v:mapEitherWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Map values and collect the \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e results.\n\u003c/p\u003e\u003cpre\u003e let f x = if x == \"a\" then Just \"new a\" else Nothing\n mapMaybe f (fromList [(5,\"a\"), (3,\"b\")]) == singleton 5 \"new a\"\n\u003c/pre\u003e",
          "module": "Data.EnumMap",
          "name": "mapMaybe",
          "package": "EnumMap",
          "signature": "(a -\u003e Maybe b) -\u003e EnumMap k a -\u003e EnumMap k b",
          "source": "src/Data-EnumMap.html#mapMaybe",
          "type": "function"
        },
        "index": {
          "description": "Map values and collect the Just results let if then Just new else Nothing mapMaybe fromList singleton new",
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "mapMaybe",
          "normalized": "(a-\u003eMaybe b)-\u003eEnumMap c a-\u003eEnumMap c b",
          "package": "EnumMap",
          "partial": "Maybe",
          "signature": "(a-\u003eMaybe b)-\u003eEnumMap k a-\u003eEnumMap k b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EnumMap/docs/Data-EnumMap.html#v:mapMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Map keys/values and collect the \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e results.\n\u003c/p\u003e\u003cpre\u003e let f k _ = if k \u003c 5 then Just (\"key : \" ++ (show k)) else Nothing\n mapMaybeWithKey f (fromList [(5,\"a\"), (3,\"b\")]) == singleton 3 \"key : 3\"\n\u003c/pre\u003e",
          "module": "Data.EnumMap",
          "name": "mapMaybeWithKey",
          "package": "EnumMap",
          "signature": "(k -\u003e a -\u003e Maybe b) -\u003e EnumMap k a -\u003e EnumMap k b",
          "source": "src/Data-EnumMap.html#mapMaybeWithKey",
          "type": "function"
        },
        "index": {
          "description": "Map keys values and collect the Just results let if then Just key show else Nothing mapMaybeWithKey fromList singleton key",
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "mapMaybeWithKey",
          "normalized": "(a-\u003eb-\u003eMaybe c)-\u003eEnumMap a b-\u003eEnumMap a c",
          "package": "EnumMap",
          "partial": "Maybe With Key",
          "signature": "(k-\u003ea-\u003eMaybe b)-\u003eEnumMap k a-\u003eEnumMap k b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EnumMap/docs/Data-EnumMap.html#v:mapMaybeWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Map a function over all values in the map.\n\u003c/p\u003e\u003cpre\u003e let f key x = (show key) ++ \":\" ++ x\n mapWithKey f (fromList [(5,\"a\"), (3,\"b\")]) == fromList [(3, \"3:b\"), (5, \"5:a\")]\n\u003c/pre\u003e",
          "module": "Data.EnumMap",
          "name": "mapWithKey",
          "package": "EnumMap",
          "signature": "(k -\u003e a -\u003e b) -\u003e EnumMap k a -\u003e EnumMap k b",
          "source": "src/Data-EnumMap.html#mapWithKey",
          "type": "function"
        },
        "index": {
          "description": "Map function over all values in the map let key show key mapWithKey fromList fromList",
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "mapWithKey",
          "normalized": "(a-\u003eb-\u003ec)-\u003eEnumMap a b-\u003eEnumMap a c",
          "package": "EnumMap",
          "partial": "With Key",
          "signature": "(k-\u003ea-\u003eb)-\u003eEnumMap k a-\u003eEnumMap k b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EnumMap/docs/Data-EnumMap.html#v:mapWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Retrieves the maximal key of the map, and the map\n stripped of that element, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if passed an empty map.\n\u003c/p\u003e",
          "module": "Data.EnumMap",
          "name": "maxView",
          "package": "EnumMap",
          "signature": "EnumMap k a -\u003e Maybe (a, EnumMap k a)",
          "source": "src/Data-EnumMap.html#maxView",
          "type": "function"
        },
        "index": {
          "description": "log Retrieves the maximal key of the map and the map stripped of that element or Nothing if passed an empty map",
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "maxView",
          "normalized": "EnumMap a b-\u003eMaybe(b,EnumMap a b)",
          "package": "EnumMap",
          "partial": "View",
          "signature": "EnumMap k a-\u003eMaybe(a,EnumMap k a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EnumMap/docs/Data-EnumMap.html#v:maxView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Retrieves the maximal (key,value) pair of the map, and\n the map stripped of that element, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if passed an empty map.\n\u003c/p\u003e\u003cpre\u003e maxViewWithKey (fromList [(5,\"a\"), (3,\"b\")]) == Just ((5,\"a\"), singleton 3 \"b\")\n maxViewWithKey empty == Nothing\n\u003c/pre\u003e",
          "module": "Data.EnumMap",
          "name": "maxViewWithKey",
          "package": "EnumMap",
          "signature": "EnumMap k a -\u003e Maybe ((k, a), EnumMap k a)",
          "source": "src/Data-EnumMap.html#maxViewWithKey",
          "type": "function"
        },
        "index": {
          "description": "log Retrieves the maximal key value pair of the map and the map stripped of that element or Nothing if passed an empty map maxViewWithKey fromList Just singleton maxViewWithKey empty Nothing",
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "maxViewWithKey",
          "normalized": "EnumMap a b-\u003eMaybe((a,b),EnumMap a b)",
          "package": "EnumMap",
          "partial": "View With Key",
          "signature": "EnumMap k a-\u003eMaybe((k,a),EnumMap k a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EnumMap/docs/Data-EnumMap.html#v:maxViewWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(min(n,W))\u003c/em\u003e. Is the key a member of the map?\n\u003c/p\u003e\u003cpre\u003e member 5 (fromList [(5,'a'), (3,'b')]) == True\n member 1 (fromList [(5,'a'), (3,'b')]) == False\n\u003c/pre\u003e",
          "module": "Data.EnumMap",
          "name": "member",
          "package": "EnumMap",
          "signature": "k -\u003e EnumMap k a -\u003e Bool",
          "source": "src/Data-EnumMap.html#member",
          "type": "function"
        },
        "index": {
          "description": "min Is the key member of the map member fromList True member fromList False",
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "member",
          "normalized": "a-\u003eEnumMap a b-\u003eBool",
          "package": "EnumMap",
          "signature": "k-\u003eEnumMap k a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EnumMap/docs/Data-EnumMap.html#v:member"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Retrieves the minimal key of the map, and the map\n stripped of that element, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if passed an empty map.\n\u003c/p\u003e",
          "module": "Data.EnumMap",
          "name": "minView",
          "package": "EnumMap",
          "signature": "EnumMap k a -\u003e Maybe (a, EnumMap k a)",
          "source": "src/Data-EnumMap.html#minView",
          "type": "function"
        },
        "index": {
          "description": "log Retrieves the minimal key of the map and the map stripped of that element or Nothing if passed an empty map",
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "minView",
          "normalized": "EnumMap a b-\u003eMaybe(b,EnumMap a b)",
          "package": "EnumMap",
          "partial": "View",
          "signature": "EnumMap k a-\u003eMaybe(a,EnumMap k a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EnumMap/docs/Data-EnumMap.html#v:minView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Retrieves the minimal (key,value) pair of the map, and\n the map stripped of that element, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if passed an empty map.\n\u003c/p\u003e\u003cpre\u003e minViewWithKey (fromList [(5,\"a\"), (3,\"b\")]) == Just ((3,\"b\"), singleton 5 \"a\")\n minViewWithKey empty == Nothing\n\u003c/pre\u003e",
          "module": "Data.EnumMap",
          "name": "minViewWithKey",
          "package": "EnumMap",
          "signature": "EnumMap k a -\u003e Maybe ((k, a), EnumMap k a)",
          "source": "src/Data-EnumMap.html#minViewWithKey",
          "type": "function"
        },
        "index": {
          "description": "log Retrieves the minimal key value pair of the map and the map stripped of that element or Nothing if passed an empty map minViewWithKey fromList Just singleton minViewWithKey empty Nothing",
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "minViewWithKey",
          "normalized": "EnumMap a b-\u003eMaybe((a,b),EnumMap a b)",
          "package": "EnumMap",
          "partial": "View With Key",
          "signature": "EnumMap k a-\u003eMaybe((k,a),EnumMap k a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EnumMap/docs/Data-EnumMap.html#v:minViewWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Is the key not a member of the map?\n\u003c/p\u003e\u003cpre\u003e notMember 5 (fromList [(5,'a'), (3,'b')]) == False\n notMember 1 (fromList [(5,'a'), (3,'b')]) == True\n\u003c/pre\u003e",
          "module": "Data.EnumMap",
          "name": "notMember",
          "package": "EnumMap",
          "signature": "k -\u003e EnumMap k a -\u003e Bool",
          "source": "src/Data-EnumMap.html#notMember",
          "type": "function"
        },
        "index": {
          "description": "log Is the key not member of the map notMember fromList False notMember fromList True",
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "notMember",
          "normalized": "a-\u003eEnumMap a b-\u003eBool",
          "package": "EnumMap",
          "partial": "Member",
          "signature": "k-\u003eEnumMap k a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EnumMap/docs/Data-EnumMap.html#v:notMember"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Is the map empty?\n\u003c/p\u003e\u003cpre\u003e Data.EnumMap.null (empty)           == True\n Data.EnumMap.null (singleton 1 'a') == False\n\u003c/pre\u003e",
          "module": "Data.EnumMap",
          "name": "null",
          "package": "EnumMap",
          "signature": "EnumMap k a -\u003e Bool",
          "source": "src/Data-EnumMap.html#null",
          "type": "function"
        },
        "index": {
          "description": "Is the map empty Data.EnumMap.null empty True Data.EnumMap.null singleton False",
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "null",
          "normalized": "EnumMap a b-\u003eBool",
          "package": "EnumMap",
          "signature": "EnumMap k a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EnumMap/docs/Data-EnumMap.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Partition the map according to some predicate. The first\n map contains all elements that satisfy the predicate, the second all\n elements that fail the predicate. See also \u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e partition (\u003e \"a\") (fromList [(5,\"a\"), (3,\"b\")]) == (singleton 3 \"b\", singleton 5 \"a\")\n partition (\u003c \"x\") (fromList [(5,\"a\"), (3,\"b\")]) == (fromList [(3, \"b\"), (5, \"a\")], empty)\n partition (\u003e \"x\") (fromList [(5,\"a\"), (3,\"b\")]) == (empty, fromList [(3, \"b\"), (5, \"a\")])\n\u003c/pre\u003e",
          "module": "Data.EnumMap",
          "name": "partition",
          "package": "EnumMap",
          "signature": "(a -\u003e Bool) -\u003e EnumMap k a -\u003e (EnumMap k a, EnumMap k a)",
          "source": "src/Data-EnumMap.html#partition",
          "type": "function"
        },
        "index": {
          "description": "Partition the map according to some predicate The first map contains all elements that satisfy the predicate the second all elements that fail the predicate See also split partition fromList singleton singleton partition fromList fromList empty partition fromList empty fromList",
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "partition",
          "normalized": "(a-\u003eBool)-\u003eEnumMap b a-\u003e(EnumMap b a,EnumMap b a)",
          "package": "EnumMap",
          "signature": "(a-\u003eBool)-\u003eEnumMap k a-\u003e(EnumMap k a,EnumMap k a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EnumMap/docs/Data-EnumMap.html#v:partition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Partition the map according to some predicate. The first\n map contains all elements that satisfy the predicate, the second all\n elements that fail the predicate. See also \u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e partitionWithKey (\\ k _ -\u003e k \u003e 3) (fromList [(5,\"a\"), (3,\"b\")]) == (singleton 5 \"a\", singleton 3 \"b\")\n partitionWithKey (\\ k _ -\u003e k \u003c 7) (fromList [(5,\"a\"), (3,\"b\")]) == (fromList [(3, \"b\"), (5, \"a\")], empty)\n partitionWithKey (\\ k _ -\u003e k \u003e 7) (fromList [(5,\"a\"), (3,\"b\")]) == (empty, fromList [(3, \"b\"), (5, \"a\")])\n\u003c/pre\u003e",
          "module": "Data.EnumMap",
          "name": "partitionWithKey",
          "package": "EnumMap",
          "signature": "(k -\u003e a -\u003e Bool) -\u003e EnumMap k a -\u003e (EnumMap k a, EnumMap k a)",
          "source": "src/Data-EnumMap.html#partitionWithKey",
          "type": "function"
        },
        "index": {
          "description": "Partition the map according to some predicate The first map contains all elements that satisfy the predicate the second all elements that fail the predicate See also split partitionWithKey fromList singleton singleton partitionWithKey fromList fromList empty partitionWithKey fromList empty fromList",
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "partitionWithKey",
          "normalized": "(a-\u003eb-\u003eBool)-\u003eEnumMap a b-\u003e(EnumMap a b,EnumMap a b)",
          "package": "EnumMap",
          "partial": "With Key",
          "signature": "(k-\u003ea-\u003eBool)-\u003eEnumMap k a-\u003e(EnumMap k a,EnumMap k a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EnumMap/docs/Data-EnumMap.html#v:partitionWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Show the tree that implements the map. The tree is shown\n in a compressed, hanging format.\n\u003c/p\u003e",
          "module": "Data.EnumMap",
          "name": "showTree",
          "package": "EnumMap",
          "signature": "EnumMap k a -\u003e String",
          "source": "src/Data-EnumMap.html#showTree",
          "type": "function"
        },
        "index": {
          "description": "Show the tree that implements the map The tree is shown in compressed hanging format",
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "showTree",
          "normalized": "EnumMap a b-\u003eString",
          "package": "EnumMap",
          "partial": "Tree",
          "signature": "EnumMap k a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EnumMap/docs/Data-EnumMap.html#v:showTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. The expression (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eshowTreeWith\u003c/a\u003e\u003c/code\u003e hang wide map\u003c/code\u003e) shows\n the tree that implements the map. If \u003ccode\u003ehang\u003c/code\u003e is\n \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, a \u003cem\u003ehanging\u003c/em\u003e tree is shown otherwise a rotated tree is shown. If\n \u003ccode\u003ewide\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, an extra wide version is shown.\n\u003c/p\u003e",
          "module": "Data.EnumMap",
          "name": "showTreeWith",
          "package": "EnumMap",
          "signature": "Bool -\u003e Bool -\u003e EnumMap k a -\u003e String",
          "source": "src/Data-EnumMap.html#showTreeWith",
          "type": "function"
        },
        "index": {
          "description": "The expression showTreeWith hang wide map shows the tree that implements the map If hang is True hanging tree is shown otherwise rotated tree is shown If wide is True an extra wide version is shown",
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "showTreeWith",
          "normalized": "Bool-\u003eBool-\u003eEnumMap a b-\u003eString",
          "package": "EnumMap",
          "partial": "Tree With",
          "signature": "Bool-\u003eBool-\u003eEnumMap k a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EnumMap/docs/Data-EnumMap.html#v:showTreeWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. A map of one element.\n\u003c/p\u003e\u003cpre\u003e singleton 1 'a'        == fromList [(1, 'a')]\n size (singleton 1 'a') == 1\n\u003c/pre\u003e",
          "module": "Data.EnumMap",
          "name": "singleton",
          "package": "EnumMap",
          "signature": "k -\u003e a -\u003e EnumMap k a",
          "source": "src/Data-EnumMap.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "map of one element singleton fromList size singleton",
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "singleton",
          "normalized": "a-\u003eb-\u003eEnumMap a b",
          "package": "EnumMap",
          "signature": "k-\u003ea-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EnumMap/docs/Data-EnumMap.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Number of elements in the map.\n\u003c/p\u003e\u003cpre\u003e size empty                                   == 0\n size (singleton 1 'a')                       == 1\n size (fromList([(1,'a'), (2,'c'), (3,'b')])) == 3\n\u003c/pre\u003e",
          "module": "Data.EnumMap",
          "name": "size",
          "package": "EnumMap",
          "signature": "EnumMap k a -\u003e Int",
          "source": "src/Data-EnumMap.html#size",
          "type": "function"
        },
        "index": {
          "description": "Number of elements in the map size empty size singleton size fromList",
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "size",
          "normalized": "EnumMap a b-\u003eInt",
          "package": "EnumMap",
          "signature": "EnumMap k a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EnumMap/docs/Data-EnumMap.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. The expression (\u003ccode\u003e\u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e k map\u003c/code\u003e) is a pair \u003ccode\u003e(map1,map2)\u003c/code\u003e\n where all keys in \u003ccode\u003emap1\u003c/code\u003e are lower than \u003ccode\u003ek\u003c/code\u003e and all keys in\n \u003ccode\u003emap2\u003c/code\u003e larger than \u003ccode\u003ek\u003c/code\u003e. Any key equal to \u003ccode\u003ek\u003c/code\u003e is found in neither \u003ccode\u003emap1\u003c/code\u003e nor \u003ccode\u003emap2\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e split 2 (fromList [(5,\"a\"), (3,\"b\")]) == (empty, fromList [(3,\"b\"), (5,\"a\")])\n split 3 (fromList [(5,\"a\"), (3,\"b\")]) == (empty, singleton 5 \"a\")\n split 4 (fromList [(5,\"a\"), (3,\"b\")]) == (singleton 3 \"b\", singleton 5 \"a\")\n split 5 (fromList [(5,\"a\"), (3,\"b\")]) == (singleton 3 \"b\", empty)\n split 6 (fromList [(5,\"a\"), (3,\"b\")]) == (fromList [(3,\"b\"), (5,\"a\")], empty)\n\u003c/pre\u003e",
          "module": "Data.EnumMap",
          "name": "split",
          "package": "EnumMap",
          "signature": "k -\u003e EnumMap k a -\u003e (EnumMap k a, EnumMap k a)",
          "source": "src/Data-EnumMap.html#split",
          "type": "function"
        },
        "index": {
          "description": "log The expression split map is pair map1 map2 where all keys in map1 are lower than and all keys in map2 larger than Any key equal to is found in neither map1 nor map2 split fromList empty fromList split fromList empty singleton split fromList singleton singleton split fromList singleton empty split fromList fromList empty",
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "split",
          "normalized": "a-\u003eEnumMap a b-\u003e(EnumMap a b,EnumMap a b)",
          "package": "EnumMap",
          "signature": "k-\u003eEnumMap k a-\u003e(EnumMap k a,EnumMap k a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EnumMap/docs/Data-EnumMap.html#v:split"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Performs a \u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e but also returns whether the pivot\n key was found in the original map.\n\u003c/p\u003e\u003cpre\u003e splitLookup 2 (fromList [(5,\"a\"), (3,\"b\")]) == (empty, Nothing, fromList [(3,\"b\"), (5,\"a\")])\n splitLookup 3 (fromList [(5,\"a\"), (3,\"b\")]) == (empty, Just \"b\", singleton 5 \"a\")\n splitLookup 4 (fromList [(5,\"a\"), (3,\"b\")]) == (singleton 3 \"b\", Nothing, singleton 5 \"a\")\n splitLookup 5 (fromList [(5,\"a\"), (3,\"b\")]) == (singleton 3 \"b\", Just \"a\", empty)\n splitLookup 6 (fromList [(5,\"a\"), (3,\"b\")]) == (fromList [(3,\"b\"), (5,\"a\")], Nothing, empty)\n\u003c/pre\u003e",
          "module": "Data.EnumMap",
          "name": "splitLookup",
          "package": "EnumMap",
          "signature": "k -\u003e EnumMap k a -\u003e (EnumMap k a, Maybe a, EnumMap k a)",
          "source": "src/Data-EnumMap.html#splitLookup",
          "type": "function"
        },
        "index": {
          "description": "log Performs split but also returns whether the pivot key was found in the original map splitLookup fromList empty Nothing fromList splitLookup fromList empty Just singleton splitLookup fromList singleton Nothing singleton splitLookup fromList singleton Just empty splitLookup fromList fromList Nothing empty",
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "splitLookup",
          "normalized": "a-\u003eEnumMap a b-\u003e(EnumMap a b,Maybe b,EnumMap a b)",
          "package": "EnumMap",
          "partial": "Lookup",
          "signature": "k-\u003eEnumMap k a-\u003e(EnumMap k a,Maybe a,EnumMap k a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EnumMap/docs/Data-EnumMap.html#v:splitLookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Convert the map to a list of key/value pairs where the\n keys are in ascending order.\n\u003c/p\u003e\u003cpre\u003e toAscList (fromList [(5,\"a\"), (3,\"b\")]) == [(3,\"b\"), (5,\"a\")]\n\u003c/pre\u003e",
          "module": "Data.EnumMap",
          "name": "toAscList",
          "package": "EnumMap",
          "signature": "EnumMap k a -\u003e [(k, a)]",
          "source": "src/Data-EnumMap.html#toAscList",
          "type": "function"
        },
        "index": {
          "description": "Convert the map to list of key value pairs where the keys are in ascending order toAscList fromList",
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "toAscList",
          "normalized": "EnumMap a b-\u003e[(a,b)]",
          "package": "EnumMap",
          "partial": "Asc List",
          "signature": "EnumMap k a-\u003e[(k,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EnumMap/docs/Data-EnumMap.html#v:toAscList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Convert the map to a list of key/value pairs.\n\u003c/p\u003e\u003cpre\u003e toList (fromList [(5,\"a\"), (3,\"b\")]) == [(3,\"b\"), (5,\"a\")]\n toList empty == []\n\u003c/pre\u003e",
          "module": "Data.EnumMap",
          "name": "toList",
          "package": "EnumMap",
          "signature": "EnumMap k a -\u003e [(k, a)]",
          "source": "src/Data-EnumMap.html#toList",
          "type": "function"
        },
        "index": {
          "description": "Convert the map to list of key value pairs toList fromList toList empty",
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "toList",
          "normalized": "EnumMap a b-\u003e[(a,b)]",
          "package": "EnumMap",
          "partial": "List",
          "signature": "EnumMap k a-\u003e[(k,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EnumMap/docs/Data-EnumMap.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e. The (left-biased) union of two maps.\n It prefers the first map when duplicate keys are encountered,\n i.e. (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e == \u003ccode\u003e\u003ca\u003eunionWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cpre\u003e union (fromList [(5, \"a\"), (3, \"b\")]) (fromList [(5, \"A\"), (7, \"C\")]) == fromList [(3, \"b\"), (5, \"a\"), (7, \"C\")]\n\u003c/pre\u003e",
          "module": "Data.EnumMap",
          "name": "union",
          "package": "EnumMap",
          "signature": "EnumMap k a -\u003e EnumMap k a -\u003e EnumMap k a",
          "source": "src/Data-EnumMap.html#union",
          "type": "function"
        },
        "index": {
          "description": "The left-biased union of two maps It prefers the first map when duplicate keys are encountered i.e union unionWith const union fromList fromList fromList",
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "union",
          "normalized": "EnumMap a b-\u003eEnumMap a b-\u003eEnumMap a b",
          "package": "EnumMap",
          "signature": "EnumMap k a-\u003eEnumMap k a-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EnumMap/docs/Data-EnumMap.html#v:union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e. The union with a combining function.\n\u003c/p\u003e\u003cpre\u003e unionWith (++) (fromList [(5, \"a\"), (3, \"b\")]) (fromList [(5, \"A\"), (7, \"C\")]) == fromList [(3, \"b\"), (5, \"aA\"), (7, \"C\")]\n\u003c/pre\u003e",
          "module": "Data.EnumMap",
          "name": "unionWith",
          "package": "EnumMap",
          "signature": "(a -\u003e a -\u003e a) -\u003e EnumMap k a -\u003e EnumMap k a -\u003e EnumMap k a",
          "source": "src/Data-EnumMap.html#unionWith",
          "type": "function"
        },
        "index": {
          "description": "The union with combining function unionWith fromList fromList fromList aA",
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "unionWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003eEnumMap b a-\u003eEnumMap b a-\u003eEnumMap b a",
          "package": "EnumMap",
          "partial": "With",
          "signature": "(a-\u003ea-\u003ea)-\u003eEnumMap k a-\u003eEnumMap k a-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EnumMap/docs/Data-EnumMap.html#v:unionWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e. The union with a combining function.\n\u003c/p\u003e\u003cpre\u003e let f key left_value right_value = (show key) ++ \":\" ++ left_value ++ \"|\" ++ right_value\n unionWithKey f (fromList [(5, \"a\"), (3, \"b\")]) (fromList [(5, \"A\"), (7, \"C\")]) == fromList [(3, \"b\"), (5, \"5:a|A\"), (7, \"C\")]\n\u003c/pre\u003e",
          "module": "Data.EnumMap",
          "name": "unionWithKey",
          "package": "EnumMap",
          "signature": "(k -\u003e a -\u003e a -\u003e a) -\u003e EnumMap k a -\u003e EnumMap k a -\u003e EnumMap k a",
          "source": "src/Data-EnumMap.html#unionWithKey",
          "type": "function"
        },
        "index": {
          "description": "The union with combining function let key left value right value show key left value right value unionWithKey fromList fromList fromList",
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "unionWithKey",
          "normalized": "(a-\u003eb-\u003eb-\u003eb)-\u003eEnumMap a b-\u003eEnumMap a b-\u003eEnumMap a b",
          "package": "EnumMap",
          "partial": "With Key",
          "signature": "(k-\u003ea-\u003ea-\u003ea)-\u003eEnumMap k a-\u003eEnumMap k a-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EnumMap/docs/Data-EnumMap.html#v:unionWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe union of a list of maps.\n\u003c/p\u003e\u003cpre\u003e unions [(fromList [(5, \"a\"), (3, \"b\")]), (fromList [(5, \"A\"), (7, \"C\")]), (fromList [(5, \"A3\"), (3, \"B3\")])]\n     == fromList [(3, \"b\"), (5, \"a\"), (7, \"C\")]\n unions [(fromList [(5, \"A3\"), (3, \"B3\")]), (fromList [(5, \"A\"), (7, \"C\")]), (fromList [(5, \"a\"), (3, \"b\")])]\n     == fromList [(3, \"B3\"), (5, \"A3\"), (7, \"C\")]\n\u003c/pre\u003e",
          "module": "Data.EnumMap",
          "name": "unions",
          "package": "EnumMap",
          "signature": "[EnumMap k a] -\u003e EnumMap k a",
          "source": "src/Data-EnumMap.html#unions",
          "type": "function"
        },
        "index": {
          "description": "The union of list of maps unions fromList fromList fromList A3 B3 fromList unions fromList A3 B3 fromList fromList fromList B3 A3",
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "unions",
          "normalized": "[EnumMap a b]-\u003eEnumMap a b",
          "package": "EnumMap",
          "signature": "[EnumMap k a]-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EnumMap/docs/Data-EnumMap.html#v:unions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe union of a list of maps, with a combining operation.\n\u003c/p\u003e\u003cpre\u003e unionsWith (++) [(fromList [(5, \"a\"), (3, \"b\")]), (fromList [(5, \"A\"), (7, \"C\")]), (fromList [(5, \"A3\"), (3, \"B3\")])]\n     == fromList [(3, \"bB3\"), (5, \"aAA3\"), (7, \"C\")]\n\u003c/pre\u003e",
          "module": "Data.EnumMap",
          "name": "unionsWith",
          "package": "EnumMap",
          "signature": "(a -\u003e a -\u003e a) -\u003e [EnumMap k a] -\u003e EnumMap k a",
          "source": "src/Data-EnumMap.html#unionsWith",
          "type": "function"
        },
        "index": {
          "description": "The union of list of maps with combining operation unionsWith fromList fromList fromList A3 B3 fromList bB3 aAA3",
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "unionsWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[EnumMap b a]-\u003eEnumMap b a",
          "package": "EnumMap",
          "partial": "With",
          "signature": "(a-\u003ea-\u003ea)-\u003e[EnumMap k a]-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EnumMap/docs/Data-EnumMap.html#v:unionsWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(min(n,W))\u003c/em\u003e. The expression (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eupdate\u003c/a\u003e\u003c/code\u003e f k map\u003c/code\u003e) updates the value \u003ccode\u003ex\u003c/code\u003e\n at \u003ccode\u003ek\u003c/code\u003e (if it is in the map). If (\u003ccode\u003ef x\u003c/code\u003e) is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, the element is\n deleted. If it is (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e y\u003c/code\u003e), the key \u003ccode\u003ek\u003c/code\u003e is bound to the new value \u003ccode\u003ey\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e let f x = if x == \"a\" then Just \"new a\" else Nothing\n update f 5 (fromList [(5,\"a\"), (3,\"b\")]) == fromList [(3, \"b\"), (5, \"new a\")]\n update f 7 (fromList [(5,\"a\"), (3,\"b\")]) == fromList [(3, \"b\"), (5, \"a\")]\n update f 3 (fromList [(5,\"a\"), (3,\"b\")]) == singleton 5 \"a\"\n\u003c/pre\u003e",
          "module": "Data.EnumMap",
          "name": "update",
          "package": "EnumMap",
          "signature": "(a -\u003e Maybe a) -\u003e k -\u003e EnumMap k a -\u003e EnumMap k a",
          "source": "src/Data-EnumMap.html#update",
          "type": "function"
        },
        "index": {
          "description": "min The expression update map updates the value at if it is in the map If is Nothing the element is deleted If it is Just the key is bound to the new value let if then Just new else Nothing update fromList fromList new update fromList fromList update fromList singleton",
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "update",
          "normalized": "(a-\u003eMaybe a)-\u003eb-\u003eEnumMap b a-\u003eEnumMap b a",
          "package": "EnumMap",
          "signature": "(a-\u003eMaybe a)-\u003ek-\u003eEnumMap k a-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EnumMap/docs/Data-EnumMap.html#v:update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(min(n,W))\u003c/em\u003e. Lookup and update.\n The function returns original value, if it is updated.\n This is different behavior than \u003ccode\u003eData.Map.updateLookupWithKey\u003c/code\u003e.\n Returns the original key value if the map entry is deleted.\n\u003c/p\u003e\u003cpre\u003e let f k x = if x == \"a\" then Just ((show k) ++ \":new a\") else Nothing\n updateLookupWithKey f 5 (fromList [(5,\"a\"), (3,\"b\")]) == (Just \"a\", fromList [(3, \"b\"), (5, \"5:new a\")])\n updateLookupWithKey f 7 (fromList [(5,\"a\"), (3,\"b\")]) == (Nothing,  fromList [(3, \"b\"), (5, \"a\")])\n updateLookupWithKey f 3 (fromList [(5,\"a\"), (3,\"b\")]) == (Just \"b\", singleton 5 \"a\")\n\u003c/pre\u003e",
          "module": "Data.EnumMap",
          "name": "updateLookupWithKey",
          "package": "EnumMap",
          "signature": "(k -\u003e a -\u003e Maybe a) -\u003e k -\u003e EnumMap k a -\u003e (Maybe a, EnumMap k a)",
          "source": "src/Data-EnumMap.html#updateLookupWithKey",
          "type": "function"
        },
        "index": {
          "description": "min Lookup and update The function returns original value if it is updated This is different behavior than Data.Map.updateLookupWithKey Returns the original key value if the map entry is deleted let if then Just show new else Nothing updateLookupWithKey fromList Just fromList new updateLookupWithKey fromList Nothing fromList updateLookupWithKey fromList Just singleton",
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "updateLookupWithKey",
          "normalized": "(a-\u003eb-\u003eMaybe b)-\u003ea-\u003eEnumMap a b-\u003e(Maybe b,EnumMap a b)",
          "package": "EnumMap",
          "partial": "Lookup With Key",
          "signature": "(k-\u003ea-\u003eMaybe a)-\u003ek-\u003eEnumMap k a-\u003e(Maybe a,EnumMap k a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EnumMap/docs/Data-EnumMap.html#v:updateLookupWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Update the value at the maximal key.\n\u003c/p\u003e\u003cpre\u003e updateMax (\\ a -\u003e Just (\"X\" ++ a)) (fromList [(5,\"a\"), (3,\"b\")]) == fromList [(3, \"b\"), (5, \"Xa\")]\n updateMax (\\ _ -\u003e Nothing)         (fromList [(5,\"a\"), (3,\"b\")]) == singleton 3 \"b\"\n\u003c/pre\u003e",
          "module": "Data.EnumMap",
          "name": "updateMax",
          "package": "EnumMap",
          "signature": "(a -\u003e a) -\u003e EnumMap k a -\u003e EnumMap k a",
          "source": "src/Data-EnumMap.html#updateMax",
          "type": "function"
        },
        "index": {
          "description": "log Update the value at the maximal key updateMax Just fromList fromList Xa updateMax Nothing fromList singleton",
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "updateMax",
          "normalized": "(a-\u003ea)-\u003eEnumMap b a-\u003eEnumMap b a",
          "package": "EnumMap",
          "partial": "Max",
          "signature": "(a-\u003ea)-\u003eEnumMap k a-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EnumMap/docs/Data-EnumMap.html#v:updateMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Update the value at the maximal key.\n\u003c/p\u003e\u003cpre\u003e updateMaxWithKey (\\ k a -\u003e Just ((show k) ++ \":\" ++ a)) (fromList [(5,\"a\"), (3,\"b\")]) == fromList [(3,\"b\"), (5,\"5:a\")]\n updateMaxWithKey (\\ _ _ -\u003e Nothing)                     (fromList [(5,\"a\"), (3,\"b\")]) == singleton 3 \"b\"\n\u003c/pre\u003e",
          "module": "Data.EnumMap",
          "name": "updateMaxWithKey",
          "package": "EnumMap",
          "signature": "(k -\u003e a -\u003e a) -\u003e EnumMap k a -\u003e EnumMap k a",
          "source": "src/Data-EnumMap.html#updateMaxWithKey",
          "type": "function"
        },
        "index": {
          "description": "log Update the value at the maximal key updateMaxWithKey Just show fromList fromList updateMaxWithKey Nothing fromList singleton",
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "updateMaxWithKey",
          "normalized": "(a-\u003eb-\u003eb)-\u003eEnumMap a b-\u003eEnumMap a b",
          "package": "EnumMap",
          "partial": "Max With Key",
          "signature": "(k-\u003ea-\u003ea)-\u003eEnumMap k a-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EnumMap/docs/Data-EnumMap.html#v:updateMaxWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Update the value at the minimal key.\n\u003c/p\u003e\u003cpre\u003e updateMin (\\ a -\u003e Just (\"X\" ++ a)) (fromList [(5,\"a\"), (3,\"b\")]) == fromList [(3, \"Xb\"), (5, \"a\")]\n updateMin (\\ _ -\u003e Nothing)         (fromList [(5,\"a\"), (3,\"b\")]) == singleton 5 \"a\"\n\u003c/pre\u003e",
          "module": "Data.EnumMap",
          "name": "updateMin",
          "package": "EnumMap",
          "signature": "(a -\u003e a) -\u003e EnumMap k a -\u003e EnumMap k a",
          "source": "src/Data-EnumMap.html#updateMin",
          "type": "function"
        },
        "index": {
          "description": "log Update the value at the minimal key updateMin Just fromList fromList Xb updateMin Nothing fromList singleton",
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "updateMin",
          "normalized": "(a-\u003ea)-\u003eEnumMap b a-\u003eEnumMap b a",
          "package": "EnumMap",
          "partial": "Min",
          "signature": "(a-\u003ea)-\u003eEnumMap k a-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EnumMap/docs/Data-EnumMap.html#v:updateMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Update the value at the minimal key.\n\u003c/p\u003e\u003cpre\u003e updateMinWithKey (\\ k a -\u003e Just ((show k) ++ \":\" ++ a)) (fromList [(5,\"a\"), (3,\"b\")]) == fromList [(3,\"3:b\"), (5,\"a\")]\n updateMinWithKey (\\ _ _ -\u003e Nothing)                     (fromList [(5,\"a\"), (3,\"b\")]) == singleton 5 \"a\"\n\u003c/pre\u003e",
          "module": "Data.EnumMap",
          "name": "updateMinWithKey",
          "package": "EnumMap",
          "signature": "(k -\u003e a -\u003e a) -\u003e EnumMap k a -\u003e EnumMap k a",
          "source": "src/Data-EnumMap.html#updateMinWithKey",
          "type": "function"
        },
        "index": {
          "description": "log Update the value at the minimal key updateMinWithKey Just show fromList fromList updateMinWithKey Nothing fromList singleton",
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "updateMinWithKey",
          "normalized": "(a-\u003eb-\u003eb)-\u003eEnumMap a b-\u003eEnumMap a b",
          "package": "EnumMap",
          "partial": "Min With Key",
          "signature": "(k-\u003ea-\u003ea)-\u003eEnumMap k a-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EnumMap/docs/Data-EnumMap.html#v:updateMinWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(min(n,W))\u003c/em\u003e. The expression (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eupdate\u003c/a\u003e\u003c/code\u003e f k map\u003c/code\u003e) updates the value \u003ccode\u003ex\u003c/code\u003e\n at \u003ccode\u003ek\u003c/code\u003e (if it is in the map). If (\u003ccode\u003ef k x\u003c/code\u003e) is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, the element is\n deleted. If it is (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e y\u003c/code\u003e), the key \u003ccode\u003ek\u003c/code\u003e is bound to the new value \u003ccode\u003ey\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e let f k x = if x == \"a\" then Just ((show k) ++ \":new a\") else Nothing\n updateWithKey f 5 (fromList [(5,\"a\"), (3,\"b\")]) == fromList [(3, \"b\"), (5, \"5:new a\")]\n updateWithKey f 7 (fromList [(5,\"a\"), (3,\"b\")]) == fromList [(3, \"b\"), (5, \"a\")]\n updateWithKey f 3 (fromList [(5,\"a\"), (3,\"b\")]) == singleton 5 \"a\"\n\u003c/pre\u003e",
          "module": "Data.EnumMap",
          "name": "updateWithKey",
          "package": "EnumMap",
          "signature": "(k -\u003e a -\u003e Maybe a) -\u003e k -\u003e EnumMap k a -\u003e EnumMap k a",
          "source": "src/Data-EnumMap.html#updateWithKey",
          "type": "function"
        },
        "index": {
          "description": "min The expression update map updates the value at if it is in the map If is Nothing the element is deleted If it is Just the key is bound to the new value let if then Just show new else Nothing updateWithKey fromList fromList new updateWithKey fromList fromList updateWithKey fromList singleton",
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "updateWithKey",
          "normalized": "(a-\u003eb-\u003eMaybe b)-\u003ea-\u003eEnumMap a b-\u003eEnumMap a b",
          "package": "EnumMap",
          "partial": "With Key",
          "signature": "(k-\u003ea-\u003eMaybe a)-\u003ek-\u003eEnumMap k a-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EnumMap/docs/Data-EnumMap.html#v:updateWithKey"
      }
    }
  ]
]