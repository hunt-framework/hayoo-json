[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mono-foldable/docs/Data-Foldable-Mono.html#",
      "description": {
        "fct-module": "Data.Foldable.Mono",
        "fct-package": "mono-foldable",
        "fct-signature": "module",
        "fct-source": "src/Data-Foldable-Mono.html",
        "fct-type": "module",
        "title": "Mono"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Foldable Mono",
        "module": "Data.Foldable.Mono",
        "name": "Mono",
        "normalized": "",
        "package": "mono-foldable",
        "partial": "Mono",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mono-foldable/docs/Data-Foldable-Mono.html#t:MFoldable",
      "description": {
        "fct-descr": "\u003cp\u003eMonomorphic data structures that can be folded\n     Minimal complete definition: \u003ccode\u003e\u003ca\u003efoldMap\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Foldable.Mono",
        "fct-package": "mono-foldable",
        "fct-signature": "class",
        "fct-source": "src/Data-Foldable-Mono.html#MFoldable",
        "fct-type": "class",
        "title": "MFoldable"
      },
      "index": {
        "description": "Monomorphic data structures that can be folded Minimal complete definition foldMap or foldr",
        "hierarchy": "Data Foldable Mono",
        "module": "Data.Foldable.Mono",
        "name": "MFoldable",
        "normalized": "",
        "package": "mono-foldable",
        "partial": "MFoldable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mono-foldable/docs/Data-Foldable-Mono.html#v:foldM",
      "description": {
        "fct-descr": "\u003cp\u003eMonadic left fold\n\u003c/p\u003e",
        "fct-module": "Data.Foldable.Mono",
        "fct-package": "mono-foldable",
        "fct-signature": "(a -\u003e Elem t -\u003e m a) -\u003e a -\u003e t -\u003e m a",
        "fct-source": "src/Data-Foldable-Mono.html#foldM",
        "fct-type": "method",
        "title": "foldM"
      },
      "index": {
        "description": "Monadic left fold",
        "hierarchy": "Data Foldable Mono",
        "module": "Data.Foldable.Mono",
        "name": "foldM",
        "normalized": "(a-\u003eElem b-\u003ec a)-\u003ea-\u003eb-\u003ec a",
        "package": "mono-foldable",
        "partial": "",
        "signature": "(a-\u003eElem t-\u003em a)-\u003ea-\u003et-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mono-foldable/docs/Data-Foldable-Mono.html#v:foldMap",
      "description": {
        "fct-descr": "\u003cp\u003eMap each element to a monoid and combine the results \n\u003c/p\u003e",
        "fct-module": "Data.Foldable.Mono",
        "fct-package": "mono-foldable",
        "fct-signature": "(Elem t -\u003e m) -\u003e t -\u003e m",
        "fct-source": "src/Data-Foldable-Mono.html#foldMap",
        "fct-type": "method",
        "title": "foldMap"
      },
      "index": {
        "description": "Map each element to monoid and combine the results",
        "hierarchy": "Data Foldable Mono",
        "module": "Data.Foldable.Mono",
        "name": "foldMap",
        "normalized": "(Elem a-\u003eb)-\u003ea-\u003eb",
        "package": "mono-foldable",
        "partial": "Map",
        "signature": "(Elem t-\u003em)-\u003et-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mono-foldable/docs/Data-Foldable-Mono.html#v:foldl",
      "description": {
        "fct-descr": "\u003cp\u003eLeft-associative fold \n\u003c/p\u003e",
        "fct-module": "Data.Foldable.Mono",
        "fct-package": "mono-foldable",
        "fct-signature": "(a -\u003e Elem t -\u003e a) -\u003e a -\u003e t -\u003e a",
        "fct-source": "src/Data-Foldable-Mono.html#foldl",
        "fct-type": "method",
        "title": "foldl"
      },
      "index": {
        "description": "Left-associative fold",
        "hierarchy": "Data Foldable Mono",
        "module": "Data.Foldable.Mono",
        "name": "foldl",
        "normalized": "(a-\u003eElem b-\u003ea)-\u003ea-\u003eb-\u003ea",
        "package": "mono-foldable",
        "partial": "",
        "signature": "(a-\u003eElem t-\u003ea)-\u003ea-\u003et-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mono-foldable/docs/Data-Foldable-Mono.html#v:foldl-39-",
      "description": {
        "fct-descr": "\u003cp\u003eStrict version of \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Data.Foldable.Mono",
        "fct-package": "mono-foldable",
        "fct-signature": "(a -\u003e Elem t -\u003e a) -\u003e a -\u003e t -\u003e a",
        "fct-source": "src/Data-Foldable-Mono.html#foldl%27",
        "fct-type": "method",
        "title": "foldl'"
      },
      "index": {
        "description": "Strict version of foldl",
        "hierarchy": "Data Foldable Mono",
        "module": "Data.Foldable.Mono",
        "name": "foldl'",
        "normalized": "(a-\u003eElem b-\u003ea)-\u003ea-\u003eb-\u003ea",
        "package": "mono-foldable",
        "partial": "",
        "signature": "(a-\u003eElem t-\u003ea)-\u003ea-\u003et-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mono-foldable/docs/Data-Foldable-Mono.html#v:foldl1",
      "description": {
        "fct-descr": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e with no base case.  Requires at least 1\n list element.\n\u003c/p\u003e",
        "fct-module": "Data.Foldable.Mono",
        "fct-package": "mono-foldable",
        "fct-signature": "(Elem t -\u003e Elem t -\u003e Elem t) -\u003e t -\u003e Elem t",
        "fct-source": "src/Data-Foldable-Mono.html#foldl1",
        "fct-type": "method",
        "title": "foldl1"
      },
      "index": {
        "description": "variant of foldl with no base case Requires at least list element",
        "hierarchy": "Data Foldable Mono",
        "module": "Data.Foldable.Mono",
        "name": "foldl1",
        "normalized": "(Elem a-\u003eElem a-\u003eElem a)-\u003ea-\u003eElem a",
        "package": "mono-foldable",
        "partial": "",
        "signature": "(Elem t-\u003eElem t-\u003eElem t)-\u003et-\u003eElem t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mono-foldable/docs/Data-Foldable-Mono.html#v:foldr",
      "description": {
        "fct-descr": "\u003cp\u003eRight-associative fold \n\u003c/p\u003e",
        "fct-module": "Data.Foldable.Mono",
        "fct-package": "mono-foldable",
        "fct-signature": "(Elem t -\u003e b -\u003e b) -\u003e b -\u003e t -\u003e b",
        "fct-source": "src/Data-Foldable-Mono.html#foldr",
        "fct-type": "method",
        "title": "foldr"
      },
      "index": {
        "description": "Right-associative fold",
        "hierarchy": "Data Foldable Mono",
        "module": "Data.Foldable.Mono",
        "name": "foldr",
        "normalized": "(Elem a-\u003eb-\u003eb)-\u003eb-\u003ea-\u003eb",
        "package": "mono-foldable",
        "partial": "",
        "signature": "(Elem t-\u003eb-\u003eb)-\u003eb-\u003et-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mono-foldable/docs/Data-Foldable-Mono.html#v:foldr-39-",
      "description": {
        "fct-descr": "\u003cp\u003eStrict version of \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Foldable.Mono",
        "fct-package": "mono-foldable",
        "fct-signature": "(Elem t -\u003e b -\u003e b) -\u003e b -\u003e t -\u003e b",
        "fct-source": "src/Data-Foldable-Mono.html#foldr%27",
        "fct-type": "method",
        "title": "foldr'"
      },
      "index": {
        "description": "Strict version of foldr",
        "hierarchy": "Data Foldable Mono",
        "module": "Data.Foldable.Mono",
        "name": "foldr'",
        "normalized": "(Elem a-\u003eb-\u003eb)-\u003eb-\u003ea-\u003eb",
        "package": "mono-foldable",
        "partial": "",
        "signature": "(Elem t-\u003eb-\u003eb)-\u003eb-\u003et-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mono-foldable/docs/Data-Foldable-Mono.html#v:foldr1",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e, but with no starting value\n\u003c/p\u003e",
        "fct-module": "Data.Foldable.Mono",
        "fct-package": "mono-foldable",
        "fct-signature": "(Elem t -\u003e Elem t -\u003e Elem t) -\u003e t -\u003e Elem t",
        "fct-source": "src/Data-Foldable-Mono.html#foldr1",
        "fct-type": "method",
        "title": "foldr1"
      },
      "index": {
        "description": "Like foldr but with no starting value",
        "hierarchy": "Data Foldable Mono",
        "module": "Data.Foldable.Mono",
        "name": "foldr1",
        "normalized": "(Elem a-\u003eElem a-\u003eElem a)-\u003ea-\u003eElem a",
        "package": "mono-foldable",
        "partial": "",
        "signature": "(Elem t-\u003eElem t-\u003eElem t)-\u003et-\u003eElem t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mono-foldable/docs/Data-Foldable-Mono.html#v:mapM_",
      "description": {
        "fct-descr": "\u003cp\u003eMonadic map, discarding results\n\u003c/p\u003e",
        "fct-module": "Data.Foldable.Mono",
        "fct-package": "mono-foldable",
        "fct-signature": "(Elem t -\u003e m b) -\u003e t -\u003e m ()",
        "fct-source": "src/Data-Foldable-Mono.html#mapM_",
        "fct-type": "method",
        "title": "mapM_"
      },
      "index": {
        "description": "Monadic map discarding results",
        "hierarchy": "Data Foldable Mono",
        "module": "Data.Foldable.Mono",
        "name": "mapM_",
        "normalized": "(Elem a-\u003eb c)-\u003ea-\u003eb()",
        "package": "mono-foldable",
        "partial": "",
        "signature": "(Elem t-\u003em b)-\u003et-\u003em()"
      }
    }
  }
]