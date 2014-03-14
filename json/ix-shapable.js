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
        "word": "ix-shapable"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Ix.Shapable",
          "name": "Shapable",
          "package": "ix-shapable",
          "source": "src/Data-Ix-Shapable.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Ix Shapable",
          "module": "Data.Ix.Shapable",
          "name": "Shapable",
          "package": "ix-shapable",
          "partial": "Shapable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ix-shapable/docs/Data-Ix-Shapable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe need this type class to distinguish between different tuples of Ix.\n There are Shapable instances for homogenous Int tuples, but may Haddock\n doesn't see them.\n\u003c/p\u003e",
          "module": "Data.Ix.Shapable",
          "name": "Shapable",
          "package": "ix-shapable",
          "source": "src/Data-Ix-Shapable.html#Shapable",
          "type": "class"
        },
        "index": {
          "description": "We need this type class to distinguish between different tuples of Ix There are Shapable instances for homogenous Int tuples but may Haddock doesn see them",
          "hierarchy": "Data Ix Shapable",
          "module": "Data.Ix.Shapable",
          "name": "Shapable",
          "package": "ix-shapable",
          "partial": "Shapable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ix-shapable/docs/Data-Ix-Shapable.html#t:Shapable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine the rank of an array.\n\u003c/p\u003e",
          "module": "Data.Ix.Shapable",
          "name": "rank",
          "package": "ix-shapable",
          "signature": "a i e -\u003e Int",
          "source": "src/Data-Ix-Shapable.html#rank",
          "type": "function"
        },
        "index": {
          "description": "Determine the rank of an array",
          "hierarchy": "Data Ix Shapable",
          "module": "Data.Ix.Shapable",
          "name": "rank",
          "normalized": "a b c-\u003eInt",
          "package": "ix-shapable",
          "signature": "a i e-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ix-shapable/docs/Data-Ix-Shapable.html#v:rank"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Ix.Shapable",
          "name": "sBounds",
          "package": "ix-shapable",
          "signature": "[Int] -\u003e (i, i)",
          "source": "src/Data-Ix-Shapable.html#sBounds",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Ix Shapable",
          "module": "Data.Ix.Shapable",
          "name": "sBounds",
          "normalized": "[Int]-\u003e(a,a)",
          "package": "ix-shapable",
          "partial": "Bounds",
          "signature": "[Int]-\u003e(i,i)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ix-shapable/docs/Data-Ix-Shapable.html#v:sBounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Ix.Shapable",
          "name": "sRank",
          "package": "ix-shapable",
          "signature": "i -\u003e Int",
          "source": "src/Data-Ix-Shapable.html#sRank",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Ix Shapable",
          "module": "Data.Ix.Shapable",
          "name": "sRank",
          "normalized": "a-\u003eInt",
          "package": "ix-shapable",
          "partial": "Rank",
          "signature": "i-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ix-shapable/docs/Data-Ix-Shapable.html#v:sRank"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Ix.Shapable",
          "name": "sShape",
          "package": "ix-shapable",
          "signature": "i -\u003e i -\u003e [Int]",
          "source": "src/Data-Ix-Shapable.html#sShape",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Ix Shapable",
          "module": "Data.Ix.Shapable",
          "name": "sShape",
          "normalized": "a-\u003ea-\u003e[Int]",
          "package": "ix-shapable",
          "partial": "Shape",
          "signature": "i-\u003ei-\u003e[Int]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ix-shapable/docs/Data-Ix-Shapable.html#v:sShape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCanonical representation of the shape.\n The following properties hold:\n     'length . shape = rank'\n     'product . shape = size'\n\u003c/p\u003e",
          "module": "Data.Ix.Shapable",
          "name": "shape",
          "package": "ix-shapable",
          "signature": "a i e -\u003e [Int]",
          "source": "src/Data-Ix-Shapable.html#shape",
          "type": "function"
        },
        "index": {
          "description": "Canonical representation of the shape The following properties hold length shape rank product shape size",
          "hierarchy": "Data Ix Shapable",
          "module": "Data.Ix.Shapable",
          "name": "shape",
          "normalized": "a b c-\u003e[Int]",
          "package": "ix-shapable",
          "signature": "a i e-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ix-shapable/docs/Data-Ix-Shapable.html#v:shape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow much the offset changes when you move one element in the given\n direction.  Since arrays are in row-major order, 'last . shapeToStride = const 1'\n\u003c/p\u003e",
          "module": "Data.Ix.Shapable",
          "name": "shapeToStride",
          "package": "ix-shapable",
          "signature": "[Int] -\u003e [Int]",
          "source": "src/Data-Ix-Shapable.html#shapeToStride",
          "type": "function"
        },
        "index": {
          "description": "How much the offset changes when you move one element in the given direction Since arrays are in row-major order last shapeToStride const",
          "hierarchy": "Data Ix Shapable",
          "module": "Data.Ix.Shapable",
          "name": "shapeToStride",
          "normalized": "[Int]-\u003e[Int]",
          "package": "ix-shapable",
          "partial": "To Stride",
          "signature": "[Int]-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ix-shapable/docs/Data-Ix-Shapable.html#v:shapeToStride"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of elements in the Array.\n\u003c/p\u003e",
          "module": "Data.Ix.Shapable",
          "name": "size",
          "package": "ix-shapable",
          "signature": "a i e -\u003e Int",
          "source": "src/Data-Ix-Shapable.html#size",
          "type": "function"
        },
        "index": {
          "description": "Number of elements in the Array",
          "hierarchy": "Data Ix Shapable",
          "module": "Data.Ix.Shapable",
          "name": "size",
          "normalized": "a b c-\u003eInt",
          "package": "ix-shapable",
          "signature": "a i e-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ix-shapable/docs/Data-Ix-Shapable.html#v:size"
      }
    }
  ]
]