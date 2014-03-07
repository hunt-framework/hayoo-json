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
        "word": "quickset"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements very fast and compact query-only maps.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.QuickMap",
          "name": "QuickMap",
          "package": "quickset",
          "source": "src/Data-QuickMap.html",
          "type": "module"
        },
        "index": {
          "description": "This module implements very fast and compact query-only maps",
          "hierarchy": "Data QuickMap",
          "module": "Data.QuickMap",
          "name": "QuickMap",
          "package": "quickset",
          "partial": "Quick Map",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/quickset/docs/Data-QuickMap.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuickMaps are maps from keys to values that use a compact unboxed\n vector as the internal representation.  As such QuickMaps are always\n strict in both the keys and values.\n\u003c/p\u003e",
          "module": "Data.QuickMap",
          "name": "QuickMap",
          "package": "quickset",
          "source": "src/Data-QuickMap.html#QuickMap",
          "type": "data"
        },
        "index": {
          "description": "QuickMaps are maps from keys to values that use compact unboxed vector as the internal representation As such QuickMaps are always strict in both the keys and values",
          "hierarchy": "Data QuickMap",
          "module": "Data.QuickMap",
          "name": "QuickMap",
          "package": "quickset",
          "partial": "Quick Map",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/quickset/docs/Data-QuickMap.html#t:QuickMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a list to a \u003ccode\u003e\u003ca\u003eQuickMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.QuickMap",
          "name": "fromList",
          "package": "quickset",
          "signature": "[(k, a)] -\u003e QuickMap k a",
          "source": "src/Data-QuickMap.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Convert list to QuickMap",
          "hierarchy": "Data QuickMap",
          "module": "Data.QuickMap",
          "name": "fromList",
          "normalized": "[(a,b)]-\u003eQuickMap a b",
          "package": "quickset",
          "partial": "List",
          "signature": "[(k,a)]-\u003eQuickMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/quickset/docs/Data-QuickMap.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a prefix of the given length of the given list to a\n \u003ccode\u003e\u003ca\u003eQuickMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.QuickMap",
          "name": "fromListN",
          "package": "quickset",
          "signature": "Int -\u003e [(k, a)] -\u003e QuickMap k a",
          "source": "src/Data-QuickMap.html#fromListN",
          "type": "function"
        },
        "index": {
          "description": "Convert prefix of the given length of the given list to QuickMap",
          "hierarchy": "Data QuickMap",
          "module": "Data.QuickMap",
          "name": "fromListN",
          "normalized": "Int-\u003e[(a,b)]-\u003eQuickMap a b",
          "package": "quickset",
          "partial": "List",
          "signature": "Int-\u003e[(k,a)]-\u003eQuickMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/quickset/docs/Data-QuickMap.html#v:fromListN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an unboxed vector to a \u003ccode\u003e\u003ca\u003eQuickMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.QuickMap",
          "name": "fromVector",
          "package": "quickset",
          "signature": "Vector (k, a) -\u003e QuickMap k a",
          "source": "src/Data-QuickMap.html#fromVector",
          "type": "function"
        },
        "index": {
          "description": "Convert an unboxed vector to QuickMap",
          "hierarchy": "Data QuickMap",
          "module": "Data.QuickMap",
          "name": "fromVector",
          "normalized": "Vector(a,b)-\u003eQuickMap a b",
          "package": "quickset",
          "partial": "Vector",
          "signature": "Vector(k,a)-\u003eQuickMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/quickset/docs/Data-QuickMap.html#v:fromVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to look up a key.\n\u003c/p\u003e",
          "module": "Data.QuickMap",
          "name": "lookup",
          "package": "quickset",
          "signature": "k -\u003e QuickMap k a -\u003e Maybe a",
          "source": "src/Data-QuickMap.html#lookup",
          "type": "function"
        },
        "index": {
          "description": "Try to look up key",
          "hierarchy": "Data QuickMap",
          "module": "Data.QuickMap",
          "name": "lookup",
          "normalized": "a-\u003eQuickMap a b-\u003eMaybe b",
          "package": "quickset",
          "signature": "k-\u003eQuickMap k a-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/quickset/docs/Data-QuickMap.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether the given key is in the map.\n\u003c/p\u003e",
          "module": "Data.QuickMap",
          "name": "member",
          "package": "quickset",
          "signature": "k -\u003e QuickMap k a -\u003e Bool",
          "source": "src/Data-QuickMap.html#member",
          "type": "function"
        },
        "index": {
          "description": "Check whether the given key is in the map",
          "hierarchy": "Data QuickMap",
          "module": "Data.QuickMap",
          "name": "member",
          "normalized": "a-\u003eQuickMap a b-\u003eBool",
          "package": "quickset",
          "signature": "k-\u003eQuickMap k a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/quickset/docs/Data-QuickMap.html#v:member"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements very fast and compact query-only sets.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.QuickSet",
          "name": "QuickSet",
          "package": "quickset",
          "source": "src/Data-QuickSet.html",
          "type": "module"
        },
        "index": {
          "description": "This module implements very fast and compact query-only sets",
          "hierarchy": "Data QuickSet",
          "module": "Data.QuickSet",
          "name": "QuickSet",
          "package": "quickset",
          "partial": "Quick Set",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/quickset/docs/Data-QuickSet.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuickSets are sets that use a compact unboxed vector as the\n internal representation.  As such QuickSets are always strict in the\n values.\n\u003c/p\u003e",
          "module": "Data.QuickSet",
          "name": "QuickSet",
          "package": "quickset",
          "source": "src/Data-QuickSet.html#QuickSet",
          "type": "data"
        },
        "index": {
          "description": "QuickSets are sets that use compact unboxed vector as the internal representation As such QuickSets are always strict in the values",
          "hierarchy": "Data QuickSet",
          "module": "Data.QuickSet",
          "name": "QuickSet",
          "package": "quickset",
          "partial": "Quick Set",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/quickset/docs/Data-QuickSet.html#t:QuickSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a list to a \u003ccode\u003e\u003ca\u003eQuickSet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.QuickSet",
          "name": "fromList",
          "package": "quickset",
          "signature": "[a] -\u003e QuickSet a",
          "source": "src/Data-QuickSet.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Convert list to QuickSet",
          "hierarchy": "Data QuickSet",
          "module": "Data.QuickSet",
          "name": "fromList",
          "normalized": "[a]-\u003eQuickSet a",
          "package": "quickset",
          "partial": "List",
          "signature": "[a]-\u003eQuickSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/quickset/docs/Data-QuickSet.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a prefix of the given length of the given list to a\n \u003ccode\u003e\u003ca\u003eQuickSet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.QuickSet",
          "name": "fromListN",
          "package": "quickset",
          "signature": "Int -\u003e [a] -\u003e QuickSet a",
          "source": "src/Data-QuickSet.html#fromListN",
          "type": "function"
        },
        "index": {
          "description": "Convert prefix of the given length of the given list to QuickSet",
          "hierarchy": "Data QuickSet",
          "module": "Data.QuickSet",
          "name": "fromListN",
          "normalized": "Int-\u003e[a]-\u003eQuickSet a",
          "package": "quickset",
          "partial": "List",
          "signature": "Int-\u003e[a]-\u003eQuickSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/quickset/docs/Data-QuickSet.html#v:fromListN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an unboxed vector to a \u003ccode\u003e\u003ca\u003eQuickSet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.QuickSet",
          "name": "fromVector",
          "package": "quickset",
          "signature": "Vector a -\u003e QuickSet a",
          "source": "src/Data-QuickSet.html#fromVector",
          "type": "function"
        },
        "index": {
          "description": "Convert an unboxed vector to QuickSet",
          "hierarchy": "Data QuickSet",
          "module": "Data.QuickSet",
          "name": "fromVector",
          "normalized": "Vector a-\u003eQuickSet a",
          "package": "quickset",
          "partial": "Vector",
          "signature": "Vector a-\u003eQuickSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/quickset/docs/Data-QuickSet.html#v:fromVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether the given value is in the set.\n\u003c/p\u003e",
          "module": "Data.QuickSet",
          "name": "member",
          "package": "quickset",
          "signature": "a -\u003e QuickSet a -\u003e Bool",
          "source": "src/Data-QuickSet.html#member",
          "type": "function"
        },
        "index": {
          "description": "Check whether the given value is in the set",
          "hierarchy": "Data QuickSet",
          "module": "Data.QuickSet",
          "name": "member",
          "normalized": "a-\u003eQuickSet a-\u003eBool",
          "package": "quickset",
          "signature": "a-\u003eQuickSet a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/quickset/docs/Data-QuickSet.html#v:member"
      }
    }
  ]
]