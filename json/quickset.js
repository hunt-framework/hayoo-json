[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/quickset/docs/Data-QuickMap.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements very fast and compact query-only maps.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.QuickMap",
        "fct-package": "quickset",
        "fct-signature": "module",
        "fct-source": "src/Data-QuickMap.html",
        "fct-type": "module",
        "title": "QuickMap"
      },
      "index": {
        "description": "This module implements very fast and compact query-only maps",
        "hierarchy": "Data QuickMap",
        "module": "Data.QuickMap",
        "name": "QuickMap",
        "normalized": "",
        "package": "quickset",
        "partial": "Quick Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/quickset/docs/Data-QuickMap.html#t:QuickMap",
      "description": {
        "fct-descr": "\u003cp\u003eQuickMaps are maps from keys to values that use a compact unboxed\n vector as the internal representation.  As such QuickMaps are always\n strict in both the keys and values.\n\u003c/p\u003e",
        "fct-module": "Data.QuickMap",
        "fct-package": "quickset",
        "fct-signature": "data",
        "fct-source": "src/Data-QuickMap.html#QuickMap",
        "fct-type": "data",
        "title": "QuickMap"
      },
      "index": {
        "description": "QuickMaps are maps from keys to values that use compact unboxed vector as the internal representation As such QuickMaps are always strict in both the keys and values",
        "hierarchy": "Data QuickMap",
        "module": "Data.QuickMap",
        "name": "QuickMap",
        "normalized": "",
        "package": "quickset",
        "partial": "Quick Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/quickset/docs/Data-QuickMap.html#v:fromList",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a list to a \u003ccode\u003e\u003ca\u003eQuickMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.QuickMap",
        "fct-package": "quickset",
        "fct-signature": "[(k, a)] -\u003e QuickMap k a",
        "fct-source": "src/Data-QuickMap.html#fromList",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "Convert list to QuickMap",
        "hierarchy": "Data QuickMap",
        "module": "Data.QuickMap",
        "name": "fromList",
        "normalized": "[(a,b)]-\u003eQuickMap a b",
        "package": "quickset",
        "partial": "List",
        "signature": "[(k,a)]-\u003eQuickMap k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/quickset/docs/Data-QuickMap.html#v:fromListN",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a prefix of the given length of the given list to a\n \u003ccode\u003e\u003ca\u003eQuickMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.QuickMap",
        "fct-package": "quickset",
        "fct-signature": "Int -\u003e [(k, a)] -\u003e QuickMap k a",
        "fct-source": "src/Data-QuickMap.html#fromListN",
        "fct-type": "function",
        "title": "fromListN"
      },
      "index": {
        "description": "Convert prefix of the given length of the given list to QuickMap",
        "hierarchy": "Data QuickMap",
        "module": "Data.QuickMap",
        "name": "fromListN",
        "normalized": "Int-\u003e[(a,b)]-\u003eQuickMap a b",
        "package": "quickset",
        "partial": "List",
        "signature": "Int-\u003e[(k,a)]-\u003eQuickMap k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/quickset/docs/Data-QuickMap.html#v:fromVector",
      "description": {
        "fct-descr": "\u003cp\u003eConvert an unboxed vector to a \u003ccode\u003e\u003ca\u003eQuickMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.QuickMap",
        "fct-package": "quickset",
        "fct-signature": "Vector (k, a) -\u003e QuickMap k a",
        "fct-source": "src/Data-QuickMap.html#fromVector",
        "fct-type": "function",
        "title": "fromVector"
      },
      "index": {
        "description": "Convert an unboxed vector to QuickMap",
        "hierarchy": "Data QuickMap",
        "module": "Data.QuickMap",
        "name": "fromVector",
        "normalized": "Vector(a,b)-\u003eQuickMap a b",
        "package": "quickset",
        "partial": "Vector",
        "signature": "Vector(k,a)-\u003eQuickMap k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/quickset/docs/Data-QuickMap.html#v:lookup",
      "description": {
        "fct-descr": "\u003cp\u003eTry to look up a key.\n\u003c/p\u003e",
        "fct-module": "Data.QuickMap",
        "fct-package": "quickset",
        "fct-signature": "k -\u003e QuickMap k a -\u003e Maybe a",
        "fct-source": "src/Data-QuickMap.html#lookup",
        "fct-type": "function",
        "title": "lookup"
      },
      "index": {
        "description": "Try to look up key",
        "hierarchy": "Data QuickMap",
        "module": "Data.QuickMap",
        "name": "lookup",
        "normalized": "a-\u003eQuickMap a b-\u003eMaybe b",
        "package": "quickset",
        "partial": "",
        "signature": "k-\u003eQuickMap k a-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/quickset/docs/Data-QuickMap.html#v:member",
      "description": {
        "fct-descr": "\u003cp\u003eCheck whether the given key is in the map.\n\u003c/p\u003e",
        "fct-module": "Data.QuickMap",
        "fct-package": "quickset",
        "fct-signature": "k -\u003e QuickMap k a -\u003e Bool",
        "fct-source": "src/Data-QuickMap.html#member",
        "fct-type": "function",
        "title": "member"
      },
      "index": {
        "description": "Check whether the given key is in the map",
        "hierarchy": "Data QuickMap",
        "module": "Data.QuickMap",
        "name": "member",
        "normalized": "a-\u003eQuickMap a b-\u003eBool",
        "package": "quickset",
        "partial": "",
        "signature": "k-\u003eQuickMap k a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/quickset/docs/Data-QuickSet.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements very fast and compact query-only sets.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.QuickSet",
        "fct-package": "quickset",
        "fct-signature": "module",
        "fct-source": "src/Data-QuickSet.html",
        "fct-type": "module",
        "title": "QuickSet"
      },
      "index": {
        "description": "This module implements very fast and compact query-only sets",
        "hierarchy": "Data QuickSet",
        "module": "Data.QuickSet",
        "name": "QuickSet",
        "normalized": "",
        "package": "quickset",
        "partial": "Quick Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/quickset/docs/Data-QuickSet.html#t:QuickSet",
      "description": {
        "fct-descr": "\u003cp\u003eQuickSets are sets that use a compact unboxed vector as the\n internal representation.  As such QuickSets are always strict in the\n values.\n\u003c/p\u003e",
        "fct-module": "Data.QuickSet",
        "fct-package": "quickset",
        "fct-signature": "data",
        "fct-source": "src/Data-QuickSet.html#QuickSet",
        "fct-type": "data",
        "title": "QuickSet"
      },
      "index": {
        "description": "QuickSets are sets that use compact unboxed vector as the internal representation As such QuickSets are always strict in the values",
        "hierarchy": "Data QuickSet",
        "module": "Data.QuickSet",
        "name": "QuickSet",
        "normalized": "",
        "package": "quickset",
        "partial": "Quick Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/quickset/docs/Data-QuickSet.html#v:fromList",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a list to a \u003ccode\u003e\u003ca\u003eQuickSet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.QuickSet",
        "fct-package": "quickset",
        "fct-signature": "[a] -\u003e QuickSet a",
        "fct-source": "src/Data-QuickSet.html#fromList",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "Convert list to QuickSet",
        "hierarchy": "Data QuickSet",
        "module": "Data.QuickSet",
        "name": "fromList",
        "normalized": "[a]-\u003eQuickSet a",
        "package": "quickset",
        "partial": "List",
        "signature": "[a]-\u003eQuickSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/quickset/docs/Data-QuickSet.html#v:fromListN",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a prefix of the given length of the given list to a\n \u003ccode\u003e\u003ca\u003eQuickSet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.QuickSet",
        "fct-package": "quickset",
        "fct-signature": "Int -\u003e [a] -\u003e QuickSet a",
        "fct-source": "src/Data-QuickSet.html#fromListN",
        "fct-type": "function",
        "title": "fromListN"
      },
      "index": {
        "description": "Convert prefix of the given length of the given list to QuickSet",
        "hierarchy": "Data QuickSet",
        "module": "Data.QuickSet",
        "name": "fromListN",
        "normalized": "Int-\u003e[a]-\u003eQuickSet a",
        "package": "quickset",
        "partial": "List",
        "signature": "Int-\u003e[a]-\u003eQuickSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/quickset/docs/Data-QuickSet.html#v:fromVector",
      "description": {
        "fct-descr": "\u003cp\u003eConvert an unboxed vector to a \u003ccode\u003e\u003ca\u003eQuickSet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.QuickSet",
        "fct-package": "quickset",
        "fct-signature": "Vector a -\u003e QuickSet a",
        "fct-source": "src/Data-QuickSet.html#fromVector",
        "fct-type": "function",
        "title": "fromVector"
      },
      "index": {
        "description": "Convert an unboxed vector to QuickSet",
        "hierarchy": "Data QuickSet",
        "module": "Data.QuickSet",
        "name": "fromVector",
        "normalized": "Vector a-\u003eQuickSet a",
        "package": "quickset",
        "partial": "Vector",
        "signature": "Vector a-\u003eQuickSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/quickset/docs/Data-QuickSet.html#v:member",
      "description": {
        "fct-descr": "\u003cp\u003eCheck whether the given value is in the set.\n\u003c/p\u003e",
        "fct-module": "Data.QuickSet",
        "fct-package": "quickset",
        "fct-signature": "a -\u003e QuickSet a -\u003e Bool",
        "fct-source": "src/Data-QuickSet.html#member",
        "fct-type": "function",
        "title": "member"
      },
      "index": {
        "description": "Check whether the given value is in the set",
        "hierarchy": "Data QuickSet",
        "module": "Data.QuickSet",
        "name": "member",
        "normalized": "a-\u003eQuickSet a-\u003eBool",
        "package": "quickset",
        "partial": "",
        "signature": "a-\u003eQuickSet a-\u003eBool"
      }
    }
  }
]