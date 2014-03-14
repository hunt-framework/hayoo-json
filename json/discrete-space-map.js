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
        "word": "discrete-space-map"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.DiscreteSpaceMap.Internal",
          "name": "Internal",
          "package": "discrete-space-map",
          "source": "src/Data-DiscreteSpaceMap-Internal.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data DiscreteSpaceMap Internal",
          "module": "Data.DiscreteSpaceMap.Internal",
          "name": "Internal",
          "package": "discrete-space-map",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/discrete-space-map/docs/Data-DiscreteSpaceMap-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.DiscreteSpaceMap.Internal",
          "name": "MapD",
          "package": "discrete-space-map",
          "source": "src/Data-DiscreteSpaceMap-Internal.html#MapD",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data DiscreteSpaceMap Internal",
          "module": "Data.DiscreteSpaceMap.Internal",
          "name": "MapD",
          "package": "discrete-space-map",
          "partial": "Map",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/discrete-space-map/docs/Data-DiscreteSpaceMap-Internal.html#t:MapD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTo be a key in the map, a position needs to be convertible to and from a stream of bits.\n\u003c/p\u003e",
          "module": "Data.DiscreteSpaceMap.Internal",
          "name": "Pos",
          "package": "discrete-space-map",
          "source": "src/Data-DiscreteSpaceMap-Internal.html#Pos",
          "type": "class"
        },
        "index": {
          "description": "To be key in the map position needs to be convertible to and from stream of bits",
          "hierarchy": "Data DiscreteSpaceMap Internal",
          "module": "Data.DiscreteSpaceMap.Internal",
          "name": "Pos",
          "package": "discrete-space-map",
          "partial": "Pos",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/discrete-space-map/docs/Data-DiscreteSpaceMap-Internal.html#t:Pos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.DiscreteSpaceMap.Internal",
          "name": "MapD",
          "package": "discrete-space-map",
          "signature": "MapD a (MapD (a, a))",
          "source": "src/Data-DiscreteSpaceMap-Internal.html#MapD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data DiscreteSpaceMap Internal",
          "module": "Data.DiscreteSpaceMap.Internal",
          "name": "MapD",
          "normalized": "MapD a(MapD(a,a))",
          "package": "discrete-space-map",
          "partial": "Map",
          "signature": "MapD a(MapD(a,a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/discrete-space-map/docs/Data-DiscreteSpaceMap-Internal.html#v:MapD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e cons . uncons == id \n\u003c/pre\u003e",
          "module": "Data.DiscreteSpaceMap.Internal",
          "name": "cons",
          "package": "discrete-space-map",
          "signature": "(p, Bool) -\u003e p",
          "source": "src/Data-DiscreteSpaceMap-Internal.html#cons",
          "type": "method"
        },
        "index": {
          "description": "cons uncons id",
          "hierarchy": "Data DiscreteSpaceMap Internal",
          "module": "Data.DiscreteSpaceMap.Internal",
          "name": "cons",
          "normalized": "(a,Bool)-\u003ea",
          "package": "discrete-space-map",
          "signature": "(p,Bool)-\u003ep",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/discrete-space-map/docs/Data-DiscreteSpaceMap-Internal.html#v:cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.DiscreteSpaceMap.Internal",
          "name": "cotraverseD",
          "package": "discrete-space-map",
          "signature": "(f a -\u003e b) -\u003e f (MapD a) -\u003e MapD b",
          "source": "src/Data-DiscreteSpaceMap-Internal.html#cotraverseD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data DiscreteSpaceMap Internal",
          "module": "Data.DiscreteSpaceMap.Internal",
          "name": "cotraverseD",
          "normalized": "(a b-\u003ec)-\u003ea(MapD b)-\u003eMapD c",
          "package": "discrete-space-map",
          "signature": "(f a-\u003eb)-\u003ef(MapD a)-\u003eMapD b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/discrete-space-map/docs/Data-DiscreteSpaceMap-Internal.html#v:cotraverseD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.DiscreteSpaceMap.Internal",
          "name": "gotoD",
          "package": "discrete-space-map",
          "signature": "p -\u003e p -\u003e (a, MapD a) -\u003e (a, MapD a)",
          "source": "src/Data-DiscreteSpaceMap-Internal.html#gotoD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data DiscreteSpaceMap Internal",
          "module": "Data.DiscreteSpaceMap.Internal",
          "name": "gotoD",
          "normalized": "a-\u003ea-\u003e(b,MapD b)-\u003e(b,MapD b)",
          "package": "discrete-space-map",
          "signature": "p-\u003ep-\u003e(a,MapD a)-\u003e(a,MapD a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/discrete-space-map/docs/Data-DiscreteSpaceMap-Internal.html#v:gotoD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.DiscreteSpaceMap.Internal",
          "name": "tabulateD",
          "package": "discrete-space-map",
          "signature": "(p -\u003e a) -\u003e MapD a",
          "source": "src/Data-DiscreteSpaceMap-Internal.html#tabulateD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data DiscreteSpaceMap Internal",
          "module": "Data.DiscreteSpaceMap.Internal",
          "name": "tabulateD",
          "normalized": "(a-\u003eb)-\u003eMapD b",
          "package": "discrete-space-map",
          "signature": "(p-\u003ea)-\u003eMapD a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/discrete-space-map/docs/Data-DiscreteSpaceMap-Internal.html#v:tabulateD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.DiscreteSpaceMap.Internal",
          "name": "traverseWithKey1D",
          "package": "discrete-space-map",
          "signature": "(p -\u003e a -\u003e f b) -\u003e p -\u003e MapD a -\u003e f (MapD b)",
          "source": "src/Data-DiscreteSpaceMap-Internal.html#traverseWithKey1D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data DiscreteSpaceMap Internal",
          "module": "Data.DiscreteSpaceMap.Internal",
          "name": "traverseWithKey1D",
          "normalized": "(a-\u003eb-\u003ec d)-\u003ea-\u003eMapD b-\u003ec(MapD d)",
          "package": "discrete-space-map",
          "partial": "With Key",
          "signature": "(p-\u003ea-\u003ef b)-\u003ep-\u003eMapD a-\u003ef(MapD b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/discrete-space-map/docs/Data-DiscreteSpaceMap-Internal.html#v:traverseWithKey1D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.DiscreteSpaceMap.Internal",
          "name": "uncons",
          "package": "discrete-space-map",
          "signature": "p -\u003e (p, Bool)",
          "source": "src/Data-DiscreteSpaceMap-Internal.html#uncons",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data DiscreteSpaceMap Internal",
          "module": "Data.DiscreteSpaceMap.Internal",
          "name": "uncons",
          "normalized": "a-\u003e(a,Bool)",
          "package": "discrete-space-map",
          "signature": "p-\u003e(p,Bool)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/discrete-space-map/docs/Data-DiscreteSpaceMap-Internal.html#v:uncons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e uncons zero == (zero, False)\n\u003c/pre\u003e",
          "module": "Data.DiscreteSpaceMap.Internal",
          "name": "zero",
          "package": "discrete-space-map",
          "signature": "p",
          "source": "src/Data-DiscreteSpaceMap-Internal.html#zero",
          "type": "method"
        },
        "index": {
          "description": "uncons zero zero False",
          "hierarchy": "Data DiscreteSpaceMap Internal",
          "module": "Data.DiscreteSpaceMap.Internal",
          "name": "zero",
          "package": "discrete-space-map",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/discrete-space-map/docs/Data-DiscreteSpaceMap-Internal.html#v:zero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.DiscreteSpaceMap.Internal",
          "name": "zipWithKeyD",
          "package": "discrete-space-map",
          "signature": "(p -\u003e a -\u003e b -\u003e c) -\u003e p -\u003e MapD a -\u003e MapD b -\u003e MapD c",
          "source": "src/Data-DiscreteSpaceMap-Internal.html#zipWithKeyD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data DiscreteSpaceMap Internal",
          "module": "Data.DiscreteSpaceMap.Internal",
          "name": "zipWithKeyD",
          "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003ea-\u003eMapD b-\u003eMapD c-\u003eMapD d",
          "package": "discrete-space-map",
          "partial": "With Key",
          "signature": "(p-\u003ea-\u003eb-\u003ec)-\u003ep-\u003eMapD a-\u003eMapD b-\u003eMapD c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/discrete-space-map/docs/Data-DiscreteSpaceMap-Internal.html#v:zipWithKeyD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.DiscreteSpaceMap",
          "name": "DiscreteSpaceMap",
          "package": "discrete-space-map",
          "source": "src/Data-DiscreteSpaceMap.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data DiscreteSpaceMap",
          "module": "Data.DiscreteSpaceMap",
          "name": "DiscreteSpaceMap",
          "package": "discrete-space-map",
          "partial": "Discrete Space Map",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/discrete-space-map/docs/Data-DiscreteSpaceMap.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e is a zipper on an infinite perfect binary tree.\n   It contains the position and value of the focus.\n   The other values are stored in the derivative of a perfect binary tree.\n\u003c/p\u003e\u003cp\u003eFunctions that combine 2 maps like \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ezipWithKey\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003e\u003c@\u003e\u003c/a\u003e\u003c/code\u003e preserve the focus position of the second argument.\n\u003c/p\u003e",
          "module": "Data.DiscreteSpaceMap",
          "name": "Map",
          "package": "discrete-space-map",
          "source": "src/Data-DiscreteSpaceMap.html#Map",
          "type": "data"
        },
        "index": {
          "description": "Map is zipper on an infinite perfect binary tree It contains the position and value of the focus The other values are stored in the derivative of perfect binary tree Functions that combine maps like zipWith zipWithKey and preserve the focus position of the second argument",
          "hierarchy": "Data DiscreteSpaceMap",
          "module": "Data.DiscreteSpaceMap",
          "name": "Map",
          "package": "discrete-space-map",
          "partial": "Map",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/discrete-space-map/docs/Data-DiscreteSpaceMap.html#t:Map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTo be a key in the map, a position needs to be convertible to and from a stream of bits.\n\u003c/p\u003e",
          "module": "Data.DiscreteSpaceMap",
          "name": "Pos",
          "package": "discrete-space-map",
          "source": "src/Data-DiscreteSpaceMap-Internal.html#Pos",
          "type": "class"
        },
        "index": {
          "description": "To be key in the map position needs to be convertible to and from stream of bits",
          "hierarchy": "Data DiscreteSpaceMap",
          "module": "Data.DiscreteSpaceMap",
          "name": "Pos",
          "package": "discrete-space-map",
          "partial": "Pos",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/discrete-space-map/docs/Data-DiscreteSpaceMap.html#t:Pos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.DiscreteSpaceMap",
          "name": "Map",
          "package": "discrete-space-map",
          "signature": "Map !p !a (MapD a)",
          "source": "src/Data-DiscreteSpaceMap.html#Map",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data DiscreteSpaceMap",
          "module": "Data.DiscreteSpaceMap",
          "name": "Map",
          "package": "discrete-space-map",
          "partial": "Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/discrete-space-map/docs/Data-DiscreteSpaceMap.html#v:Map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e cons . uncons == id \n\u003c/pre\u003e",
          "module": "Data.DiscreteSpaceMap",
          "name": "cons",
          "package": "discrete-space-map",
          "signature": "(p, Bool) -\u003e p",
          "source": "src/Data-DiscreteSpaceMap-Internal.html#cons",
          "type": "method"
        },
        "index": {
          "description": "cons uncons id",
          "hierarchy": "Data DiscreteSpaceMap",
          "module": "Data.DiscreteSpaceMap",
          "name": "cons",
          "normalized": "(a,Bool)-\u003ea",
          "package": "discrete-space-map",
          "signature": "(p,Bool)-\u003ep",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/discrete-space-map/docs/Data-DiscreteSpaceMap.html#v:cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify the value of the focus.\n\u003c/p\u003e",
          "module": "Data.DiscreteSpaceMap",
          "name": "modify",
          "package": "discrete-space-map",
          "signature": "(a -\u003e a) -\u003e Map p a -\u003e Map p a",
          "source": "src/Data-DiscreteSpaceMap.html#modify",
          "type": "function"
        },
        "index": {
          "description": "Modify the value of the focus",
          "hierarchy": "Data DiscreteSpaceMap",
          "module": "Data.DiscreteSpaceMap",
          "name": "modify",
          "normalized": "(a-\u003ea)-\u003eMap b a-\u003eMap b a",
          "package": "discrete-space-map",
          "signature": "(a-\u003ea)-\u003eMap p a-\u003eMap p a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/discrete-space-map/docs/Data-DiscreteSpaceMap.html#v:modify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.DiscreteSpaceMap",
          "name": "uncons",
          "package": "discrete-space-map",
          "signature": "p -\u003e (p, Bool)",
          "source": "src/Data-DiscreteSpaceMap-Internal.html#uncons",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data DiscreteSpaceMap",
          "module": "Data.DiscreteSpaceMap",
          "name": "uncons",
          "normalized": "a-\u003e(a,Bool)",
          "package": "discrete-space-map",
          "signature": "p-\u003e(p,Bool)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/discrete-space-map/docs/Data-DiscreteSpaceMap.html#v:uncons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e uncons zero == (zero, False)\n\u003c/pre\u003e",
          "module": "Data.DiscreteSpaceMap",
          "name": "zero",
          "package": "discrete-space-map",
          "signature": "p",
          "source": "src/Data-DiscreteSpaceMap-Internal.html#zero",
          "type": "method"
        },
        "index": {
          "description": "uncons zero zero False",
          "hierarchy": "Data DiscreteSpaceMap",
          "module": "Data.DiscreteSpaceMap",
          "name": "zero",
          "package": "discrete-space-map",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/discrete-space-map/docs/Data-DiscreteSpaceMap.html#v:zero"
      }
    }
  ]
]