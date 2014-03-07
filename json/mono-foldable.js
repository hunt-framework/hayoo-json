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
        "word": "mono-foldable"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Foldable.Mono",
          "name": "Mono",
          "package": "mono-foldable",
          "source": "src/Data-Foldable-Mono.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Foldable Mono",
          "module": "Data.Foldable.Mono",
          "name": "Mono",
          "package": "mono-foldable",
          "partial": "Mono",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/mono-foldable/docs/Data-Foldable-Mono.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonomorphic data structures that can be folded\n     Minimal complete definition: \u003ccode\u003e\u003ca\u003efoldMap\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Foldable.Mono",
          "name": "MFoldable",
          "package": "mono-foldable",
          "source": "src/Data-Foldable-Mono.html#MFoldable",
          "type": "class"
        },
        "index": {
          "description": "Monomorphic data structures that can be folded Minimal complete definition foldMap or foldr",
          "hierarchy": "Data Foldable Mono",
          "module": "Data.Foldable.Mono",
          "name": "MFoldable",
          "package": "mono-foldable",
          "partial": "MFoldable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/mono-foldable/docs/Data-Foldable-Mono.html#t:MFoldable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonadic left fold\n\u003c/p\u003e",
          "module": "Data.Foldable.Mono",
          "name": "foldM",
          "package": "mono-foldable",
          "signature": "(a -\u003e Elem t -\u003e m a) -\u003e a -\u003e t -\u003e m a",
          "source": "src/Data-Foldable-Mono.html#foldM",
          "type": "method"
        },
        "index": {
          "description": "Monadic left fold",
          "hierarchy": "Data Foldable Mono",
          "module": "Data.Foldable.Mono",
          "name": "foldM",
          "normalized": "(a-\u003eElem b-\u003ec a)-\u003ea-\u003eb-\u003ec a",
          "package": "mono-foldable",
          "signature": "(a-\u003eElem t-\u003em a)-\u003ea-\u003et-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-foldable/docs/Data-Foldable-Mono.html#v:foldM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap each element to a monoid and combine the results \n\u003c/p\u003e",
          "module": "Data.Foldable.Mono",
          "name": "foldMap",
          "package": "mono-foldable",
          "signature": "(Elem t -\u003e m) -\u003e t -\u003e m",
          "source": "src/Data-Foldable-Mono.html#foldMap",
          "type": "method"
        },
        "index": {
          "description": "Map each element to monoid and combine the results",
          "hierarchy": "Data Foldable Mono",
          "module": "Data.Foldable.Mono",
          "name": "foldMap",
          "normalized": "(Elem a-\u003eb)-\u003ea-\u003eb",
          "package": "mono-foldable",
          "partial": "Map",
          "signature": "(Elem t-\u003em)-\u003et-\u003em",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-foldable/docs/Data-Foldable-Mono.html#v:foldMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLeft-associative fold \n\u003c/p\u003e",
          "module": "Data.Foldable.Mono",
          "name": "foldl",
          "package": "mono-foldable",
          "signature": "(a -\u003e Elem t -\u003e a) -\u003e a -\u003e t -\u003e a",
          "source": "src/Data-Foldable-Mono.html#foldl",
          "type": "method"
        },
        "index": {
          "description": "Left-associative fold",
          "hierarchy": "Data Foldable Mono",
          "module": "Data.Foldable.Mono",
          "name": "foldl",
          "normalized": "(a-\u003eElem b-\u003ea)-\u003ea-\u003eb-\u003ea",
          "package": "mono-foldable",
          "signature": "(a-\u003eElem t-\u003ea)-\u003ea-\u003et-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-foldable/docs/Data-Foldable-Mono.html#v:foldl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrict version of \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Data.Foldable.Mono",
          "name": "foldl'",
          "package": "mono-foldable",
          "signature": "(a -\u003e Elem t -\u003e a) -\u003e a -\u003e t -\u003e a",
          "source": "src/Data-Foldable-Mono.html#foldl%27",
          "type": "method"
        },
        "index": {
          "description": "Strict version of foldl",
          "hierarchy": "Data Foldable Mono",
          "module": "Data.Foldable.Mono",
          "name": "foldl'",
          "normalized": "(a-\u003eElem b-\u003ea)-\u003ea-\u003eb-\u003ea",
          "package": "mono-foldable",
          "signature": "(a-\u003eElem t-\u003ea)-\u003ea-\u003et-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-foldable/docs/Data-Foldable-Mono.html#v:foldl-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e with no base case.  Requires at least 1\n list element.\n\u003c/p\u003e",
          "module": "Data.Foldable.Mono",
          "name": "foldl1",
          "package": "mono-foldable",
          "signature": "(Elem t -\u003e Elem t -\u003e Elem t) -\u003e t -\u003e Elem t",
          "source": "src/Data-Foldable-Mono.html#foldl1",
          "type": "method"
        },
        "index": {
          "description": "variant of foldl with no base case Requires at least list element",
          "hierarchy": "Data Foldable Mono",
          "module": "Data.Foldable.Mono",
          "name": "foldl1",
          "normalized": "(Elem a-\u003eElem a-\u003eElem a)-\u003ea-\u003eElem a",
          "package": "mono-foldable",
          "signature": "(Elem t-\u003eElem t-\u003eElem t)-\u003et-\u003eElem t",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-foldable/docs/Data-Foldable-Mono.html#v:foldl1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRight-associative fold \n\u003c/p\u003e",
          "module": "Data.Foldable.Mono",
          "name": "foldr",
          "package": "mono-foldable",
          "signature": "(Elem t -\u003e b -\u003e b) -\u003e b -\u003e t -\u003e b",
          "source": "src/Data-Foldable-Mono.html#foldr",
          "type": "method"
        },
        "index": {
          "description": "Right-associative fold",
          "hierarchy": "Data Foldable Mono",
          "module": "Data.Foldable.Mono",
          "name": "foldr",
          "normalized": "(Elem a-\u003eb-\u003eb)-\u003eb-\u003ea-\u003eb",
          "package": "mono-foldable",
          "signature": "(Elem t-\u003eb-\u003eb)-\u003eb-\u003et-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-foldable/docs/Data-Foldable-Mono.html#v:foldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrict version of \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Foldable.Mono",
          "name": "foldr'",
          "package": "mono-foldable",
          "signature": "(Elem t -\u003e b -\u003e b) -\u003e b -\u003e t -\u003e b",
          "source": "src/Data-Foldable-Mono.html#foldr%27",
          "type": "method"
        },
        "index": {
          "description": "Strict version of foldr",
          "hierarchy": "Data Foldable Mono",
          "module": "Data.Foldable.Mono",
          "name": "foldr'",
          "normalized": "(Elem a-\u003eb-\u003eb)-\u003eb-\u003ea-\u003eb",
          "package": "mono-foldable",
          "signature": "(Elem t-\u003eb-\u003eb)-\u003eb-\u003et-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-foldable/docs/Data-Foldable-Mono.html#v:foldr-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e, but with no starting value\n\u003c/p\u003e",
          "module": "Data.Foldable.Mono",
          "name": "foldr1",
          "package": "mono-foldable",
          "signature": "(Elem t -\u003e Elem t -\u003e Elem t) -\u003e t -\u003e Elem t",
          "source": "src/Data-Foldable-Mono.html#foldr1",
          "type": "method"
        },
        "index": {
          "description": "Like foldr but with no starting value",
          "hierarchy": "Data Foldable Mono",
          "module": "Data.Foldable.Mono",
          "name": "foldr1",
          "normalized": "(Elem a-\u003eElem a-\u003eElem a)-\u003ea-\u003eElem a",
          "package": "mono-foldable",
          "signature": "(Elem t-\u003eElem t-\u003eElem t)-\u003et-\u003eElem t",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-foldable/docs/Data-Foldable-Mono.html#v:foldr1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonadic map, discarding results\n\u003c/p\u003e",
          "module": "Data.Foldable.Mono",
          "name": "mapM_",
          "package": "mono-foldable",
          "signature": "(Elem t -\u003e m b) -\u003e t -\u003e m ()",
          "source": "src/Data-Foldable-Mono.html#mapM_",
          "type": "method"
        },
        "index": {
          "description": "Monadic map discarding results",
          "hierarchy": "Data Foldable Mono",
          "module": "Data.Foldable.Mono",
          "name": "mapM_",
          "normalized": "(Elem a-\u003eb c)-\u003ea-\u003eb()",
          "package": "mono-foldable",
          "signature": "(Elem t-\u003em b)-\u003et-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-foldable/docs/Data-Foldable-Mono.html#v:mapM_"
      }
    }
  ]
]