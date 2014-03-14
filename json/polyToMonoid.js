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
        "word": "polyToMonoid"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCreates polyvariadic functions that map their parameters into a given monoid.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.PolyToMonoid",
          "name": "PolyToMonoid",
          "package": "polyToMonoid",
          "source": "src/Data-PolyToMonoid.html",
          "type": "module"
        },
        "index": {
          "description": "Creates polyvariadic functions that map their parameters into given monoid",
          "hierarchy": "Data PolyToMonoid",
          "module": "Data.PolyToMonoid",
          "name": "PolyToMonoid",
          "package": "polyToMonoid",
          "partial": "Poly To Monoid",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/polyToMonoid/docs/Data-PolyToMonoid.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ectm is a composable variant of ptm.\n\u003c/p\u003e\u003cp\u003eTo actually get its value, use the terminator function trm.\n\u003c/p\u003e",
          "module": "Data.PolyToMonoid",
          "name": "CPolyVariadic",
          "package": "polyToMonoid",
          "source": "src/Data-PolyToMonoid.html#CPolyVariadic",
          "type": "class"
        },
        "index": {
          "description": "ctm is composable variant of ptm To actually get its value use the terminator function trm",
          "hierarchy": "Data PolyToMonoid",
          "module": "Data.PolyToMonoid",
          "name": "CPolyVariadic",
          "package": "polyToMonoid",
          "partial": "CPoly Variadic",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/polyToMonoid/docs/Data-PolyToMonoid.html#t:CPolyVariadic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefine instances of Monoidable to tell Haskell\n how to convert your parameters into values in the underlying \n monoid\n\u003c/p\u003e",
          "module": "Data.PolyToMonoid",
          "name": "Monoidable",
          "package": "polyToMonoid",
          "source": "src/Data-PolyToMonoid.html#Monoidable",
          "type": "class"
        },
        "index": {
          "description": "Define instances of Monoidable to tell Haskell how to convert your parameters into values in the underlying monoid",
          "hierarchy": "Data PolyToMonoid",
          "module": "Data.PolyToMonoid",
          "name": "Monoidable",
          "package": "polyToMonoid",
          "partial": "Monoidable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/polyToMonoid/docs/Data-PolyToMonoid.html#t:Monoidable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConceptually, ptm is defined as:\n\u003c/p\u003e\u003cpre\u003e    ptm (mempty :: MyMonoid) p1 p2 ... pN =\n        (toMonoid p1) `mappend` (toMonoid p2) `mappend` ... `mappend` (toMonoid pN)\n\u003c/pre\u003e",
          "module": "Data.PolyToMonoid",
          "name": "PolyVariadic",
          "package": "polyToMonoid",
          "source": "src/Data-PolyToMonoid.html#PolyVariadic",
          "type": "class"
        },
        "index": {
          "description": "Conceptually ptm is defined as ptm mempty MyMonoid p1 p2 pN toMonoid p1 mappend toMonoid p2 mappend mappend toMonoid pN",
          "hierarchy": "Data PolyToMonoid",
          "module": "Data.PolyToMonoid",
          "name": "PolyVariadic",
          "package": "polyToMonoid",
          "partial": "Poly Variadic",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/polyToMonoid/docs/Data-PolyToMonoid.html#t:PolyVariadic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.PolyToMonoid",
          "name": "Terminate",
          "package": "polyToMonoid",
          "source": "src/Data-PolyToMonoid.html#Terminate",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data PolyToMonoid",
          "module": "Data.PolyToMonoid",
          "name": "Terminate",
          "package": "polyToMonoid",
          "partial": "Terminate",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/polyToMonoid/docs/Data-PolyToMonoid.html#t:Terminate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.PolyToMonoid",
          "name": "Terminate",
          "package": "polyToMonoid",
          "signature": "Terminate",
          "source": "src/Data-PolyToMonoid.html#Terminate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data PolyToMonoid",
          "module": "Data.PolyToMonoid",
          "name": "Terminate",
          "package": "polyToMonoid",
          "partial": "Terminate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/polyToMonoid/docs/Data-PolyToMonoid.html#v:Terminate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.PolyToMonoid",
          "name": "ctm",
          "package": "polyToMonoid",
          "signature": "m -\u003e r",
          "source": "src/Data-PolyToMonoid.html#ctm",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data PolyToMonoid",
          "module": "Data.PolyToMonoid",
          "name": "ctm",
          "normalized": "a-\u003eb",
          "package": "polyToMonoid",
          "signature": "m-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/polyToMonoid/docs/Data-PolyToMonoid.html#v:ctm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.PolyToMonoid",
          "name": "ptm",
          "package": "polyToMonoid",
          "signature": "m -\u003e r",
          "source": "src/Data-PolyToMonoid.html#ptm",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data PolyToMonoid",
          "module": "Data.PolyToMonoid",
          "name": "ptm",
          "normalized": "a-\u003eb",
          "package": "polyToMonoid",
          "signature": "m-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/polyToMonoid/docs/Data-PolyToMonoid.html#v:ptm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.PolyToMonoid",
          "name": "toMonoid",
          "package": "polyToMonoid",
          "signature": "a -\u003e m",
          "source": "src/Data-PolyToMonoid.html#toMonoid",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data PolyToMonoid",
          "module": "Data.PolyToMonoid",
          "name": "toMonoid",
          "normalized": "a-\u003eb",
          "package": "polyToMonoid",
          "partial": "Monoid",
          "signature": "a-\u003em",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/polyToMonoid/docs/Data-PolyToMonoid.html#v:toMonoid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse the terminator function trm to get the value of a ctm calculation.\n\u003c/p\u003e",
          "module": "Data.PolyToMonoid",
          "name": "trm",
          "package": "polyToMonoid",
          "signature": "m",
          "source": "src/Data-PolyToMonoid.html#Terminate",
          "type": "function"
        },
        "index": {
          "description": "Use the terminator function trm to get the value of ctm calculation",
          "hierarchy": "Data PolyToMonoid",
          "module": "Data.PolyToMonoid",
          "name": "trm",
          "package": "polyToMonoid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/polyToMonoid/docs/Data-PolyToMonoid.html#v:trm"
      }
    }
  ]
]