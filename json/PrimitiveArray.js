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
        "word": "PrimitiveArray"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAdditional functions on shapes\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Repa.ExtShape",
          "name": "ExtShape",
          "package": "PrimitiveArray",
          "source": "src/Data-Array-Repa-ExtShape.html",
          "type": "module"
        },
        "index": {
          "description": "Additional functions on shapes",
          "hierarchy": "Data Array Repa ExtShape",
          "module": "Data.Array.Repa.ExtShape",
          "name": "ExtShape",
          "package": "PrimitiveArray",
          "partial": "Ext Shape",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/PrimitiveArray/docs/Data-Array-Repa-ExtShape.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA number of additional operations that are useful together with\n \u003ccode\u003ePrimitiveArray\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.ExtShape",
          "name": "ExtShape",
          "package": "PrimitiveArray",
          "source": "src/Data-Array-Repa-ExtShape.html#ExtShape",
          "type": "class"
        },
        "index": {
          "description": "number of additional operations that are useful together with PrimitiveArray",
          "hierarchy": "Data Array Repa ExtShape",
          "module": "Data.Array.Repa.ExtShape",
          "name": "ExtShape",
          "package": "PrimitiveArray",
          "partial": "Ext Shape",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/PrimitiveArray/docs/Data-Array-Repa-ExtShape.html#t:ExtShape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven an index and an extend, return a list of all indices. For\n \u003ccode\u003erangeList (Z:.3) (Z:.2)\u003c/code\u003e this returns \u003ccode\u003e[(Z:.3), (Z:.4), (Z:.5)]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.ExtShape",
          "name": "rangeList",
          "package": "PrimitiveArray",
          "signature": "sh -\u003e sh -\u003e [sh]",
          "source": "src/Data-Array-Repa-ExtShape.html#rangeList",
          "type": "method"
        },
        "index": {
          "description": "Given an index and an extend return list of all indices For rangeList this returns",
          "hierarchy": "Data Array Repa ExtShape",
          "module": "Data.Array.Repa.ExtShape",
          "name": "rangeList",
          "normalized": "a-\u003ea-\u003e[a]",
          "package": "PrimitiveArray",
          "partial": "List",
          "signature": "sh-\u003esh-\u003e[sh]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/PrimitiveArray/docs/Data-Array-Repa-ExtShape.html#v:rangeList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esubtract the right coordinates from the left. Does not check if the\n resulting shape make sense.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.ExtShape",
          "name": "subDim",
          "package": "PrimitiveArray",
          "signature": "sh -\u003e sh -\u003e sh",
          "source": "src/Data-Array-Repa-ExtShape.html#subDim",
          "type": "method"
        },
        "index": {
          "description": "subtract the right coordinates from the left Does not check if the resulting shape make sense",
          "hierarchy": "Data Array Repa ExtShape",
          "module": "Data.Array.Repa.ExtShape",
          "name": "subDim",
          "normalized": "a-\u003ea-\u003ea",
          "package": "PrimitiveArray",
          "partial": "Dim",
          "signature": "sh-\u003esh-\u003esh",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/PrimitiveArray/docs/Data-Array-Repa-ExtShape.html#v:subDim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eOutside\u003c/a\u003e\u003c/code\u003e covers subwords for outside calculations. These types of\n calculations requires quite \u003ca\u003eweird\u003c/a\u003e index movements if you want to stay with\n usual grammars. This remains true if grammars are transformed to Chomsky\n normal form, only that in said form it is easier to write down the\n recursions.\n\u003c/p\u003e\u003cp\u003eTODO basically untested!\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Repa.Index.Outside",
          "name": "Outside",
          "package": "PrimitiveArray",
          "source": "src/Data-Array-Repa-Index-Outside.html",
          "type": "module"
        },
        "index": {
          "description": "Outside covers subwords for outside calculations These types of calculations requires quite weird index movements if you want to stay with usual grammars This remains true if grammars are transformed to Chomsky normal form only that in said form it is easier to write down the recursions TODO basically untested",
          "hierarchy": "Data Array Repa Index Outside",
          "module": "Data.Array.Repa.Index.Outside",
          "name": "Outside",
          "package": "PrimitiveArray",
          "partial": "Outside",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/PrimitiveArray/docs/Data-Array-Repa-Index-Outside.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eOutside\u003c/a\u003e\u003c/code\u003e inverts the usual subword (i,j) system.\n\u003c/p\u003e\u003cp\u003eTODO do I need to store N ?\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Index.Outside",
          "name": "Outside",
          "package": "PrimitiveArray",
          "source": "src/Data-Array-Repa-Index-Outside.html#Outside",
          "type": "newtype"
        },
        "index": {
          "description": "Outside inverts the usual subword system TODO do need to store",
          "hierarchy": "Data Array Repa Index Outside",
          "module": "Data.Array.Repa.Index.Outside",
          "name": "Outside",
          "package": "PrimitiveArray",
          "partial": "Outside",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/PrimitiveArray/docs/Data-Array-Repa-Index-Outside.html#t:Outside"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.Index.Outside",
          "name": "Outside",
          "package": "PrimitiveArray",
          "signature": "Outside (Int :. Int)",
          "source": "src/Data-Array-Repa-Index-Outside.html#Outside",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa Index Outside",
          "module": "Data.Array.Repa.Index.Outside",
          "name": "Outside",
          "package": "PrimitiveArray",
          "partial": "Outside",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PrimitiveArray/docs/Data-Array-Repa-Index-Outside.html#v:Outside"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.Index.Outside",
          "name": "outside",
          "package": "PrimitiveArray",
          "signature": "Int -\u003e Int -\u003e Outside",
          "source": "src/Data-Array-Repa-Index-Outside.html#outside",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa Index Outside",
          "module": "Data.Array.Repa.Index.Outside",
          "name": "outside",
          "normalized": "Int-\u003eInt-\u003eOutside",
          "package": "PrimitiveArray",
          "signature": "Int-\u003eInt-\u003eOutside",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PrimitiveArray/docs/Data-Array-Repa-Index-Outside.html#v:outside"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.Index.Outside",
          "name": "stage",
          "package": "PrimitiveArray",
          "signature": "[Char]",
          "source": "src/Data-Array-Repa-Index-Outside.html#stage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa Index Outside",
          "module": "Data.Array.Repa.Index.Outside",
          "name": "stage",
          "normalized": "[Char]",
          "package": "PrimitiveArray",
          "signature": "[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PrimitiveArray/docs/Data-Array-Repa-Index-Outside.html#v:stage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.Index.Outside",
          "name": "subwordFromIndex",
          "package": "PrimitiveArray",
          "signature": "Outside -\u003e Int -\u003e Outside",
          "source": "src/Data-Array-Repa-Index-Outside.html#subwordFromIndex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa Index Outside",
          "module": "Data.Array.Repa.Index.Outside",
          "name": "subwordFromIndex",
          "normalized": "Outside-\u003eInt-\u003eOutside",
          "package": "PrimitiveArray",
          "partial": "From Index",
          "signature": "Outside-\u003eInt-\u003eOutside",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PrimitiveArray/docs/Data-Array-Repa-Index-Outside.html#v:subwordFromIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutside indexing. Given the longest subword and the current subword,\n calculate a linear index \u003ca\u003e[0,..]\u003c/a\u003e. \u003ca\u003e(l,n)\u003c/a\u003e in this case means \u003ca\u003el\u003c/a\u003eower bound,\n length \u003ca\u003en\u003c/a\u003e. And \u003ca\u003e(i,j)\u003c/a\u003e is the normal index.\n\u003c/p\u003e\u003cp\u003eTODO probably doesn't work right with non-zero base ?!\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Index.Outside",
          "name": "subwordIndex",
          "package": "PrimitiveArray",
          "signature": "Outside -\u003e Outside -\u003e Int",
          "source": "src/Data-Array-Repa-Index-Outside.html#subwordIndex",
          "type": "function"
        },
        "index": {
          "description": "Outside indexing Given the longest subword and the current subword calculate linear index in this case means ower bound length And is the normal index TODO probably doesn work right with non-zero base",
          "hierarchy": "Data Array Repa Index Outside",
          "module": "Data.Array.Repa.Index.Outside",
          "name": "subwordIndex",
          "normalized": "Outside-\u003eOutside-\u003eInt",
          "package": "PrimitiveArray",
          "partial": "Index",
          "signature": "Outside-\u003eOutside-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PrimitiveArray/docs/Data-Array-Repa-Index-Outside.html#v:subwordIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSize of an upper triangle starting at \u003ccode\u003ei\u003c/code\u003e and ending at \u003ccode\u003ej\u003c/code\u003e. \u003ca\u003e(0,N)\u003c/a\u003e what\n be the normal thing to use. Internally, we stell upper triangular matrices.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Index.Outside",
          "name": "upperTri",
          "package": "PrimitiveArray",
          "signature": "Outside -\u003e Int",
          "source": "src/Data-Array-Repa-Index-Outside.html#upperTri",
          "type": "function"
        },
        "index": {
          "description": "Size of an upper triangle starting at and ending at what be the normal thing to use Internally we stell upper triangular matrices",
          "hierarchy": "Data Array Repa Index Outside",
          "module": "Data.Array.Repa.Index.Outside",
          "name": "upperTri",
          "normalized": "Outside-\u003eInt",
          "package": "PrimitiveArray",
          "partial": "Tri",
          "signature": "Outside-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PrimitiveArray/docs/Data-Array-Repa-Index-Outside.html#v:upperTri"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA Repa-compatible index of points in multi-dimensional space. A point\n represents the index of a left- or right-linear grammar.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Repa.Index.Point",
          "name": "Point",
          "package": "PrimitiveArray",
          "source": "src/Data-Array-Repa-Index-Point.html",
          "type": "module"
        },
        "index": {
          "description": "Repa-compatible index of points in multi-dimensional space point represents the index of left or right-linear grammar",
          "hierarchy": "Data Array Repa Index Point",
          "module": "Data.Array.Repa.Index.Point",
          "name": "Point",
          "package": "PrimitiveArray",
          "partial": "Point",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/PrimitiveArray/docs/Data-Array-Repa-Index-Point.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.Index.Point",
          "name": "Point",
          "package": "PrimitiveArray",
          "source": "src/Data-Array-Repa-Index-Point.html#Point",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Array Repa Index Point",
          "module": "Data.Array.Repa.Index.Point",
          "name": "Point",
          "package": "PrimitiveArray",
          "partial": "Point",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/PrimitiveArray/docs/Data-Array-Repa-Index-Point.html#t:Point"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.Index.Point",
          "name": "Point",
          "package": "PrimitiveArray",
          "signature": "Point Int",
          "source": "src/Data-Array-Repa-Index-Point.html#Point",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa Index Point",
          "module": "Data.Array.Repa.Index.Point",
          "name": "Point",
          "package": "PrimitiveArray",
          "partial": "Point",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PrimitiveArray/docs/Data-Array-Repa-Index-Point.html#v:Point"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.Index.Point",
          "name": "stage",
          "package": "PrimitiveArray",
          "signature": "[Char]",
          "source": "src/Data-Array-Repa-Index-Point.html#stage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa Index Point",
          "module": "Data.Array.Repa.Index.Point",
          "name": "stage",
          "normalized": "[Char]",
          "package": "PrimitiveArray",
          "signature": "[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PrimitiveArray/docs/Data-Array-Repa-Index-Point.html#v:stage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIndex structures for left- and right-linear grammars. Do not use this\n index for general linear- or context-free grammars.\n\u003c/p\u003e\u003cp\u003eInternally, both \u003ccode\u003e\u003ca\u003ePointL\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ePointR\u003c/a\u003e\u003c/code\u003e work a lot like \u003ccode\u003e\u003ca\u003eSubword\u003c/a\u003e\u003c/code\u003es, but in\n non-terminals we only store the left- or right part.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Repa.Index.Points",
          "name": "Points",
          "package": "PrimitiveArray",
          "source": "src/Data-Array-Repa-Index-Points.html",
          "type": "module"
        },
        "index": {
          "description": "Index structures for left and right-linear grammars Do not use this index for general linear or context-free grammars Internally both PointL and PointR work lot like Subword but in non-terminals we only store the left or right part",
          "hierarchy": "Data Array Repa Index Points",
          "module": "Data.Array.Repa.Index.Points",
          "name": "Points",
          "package": "PrimitiveArray",
          "partial": "Points",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/PrimitiveArray/docs/Data-Array-Repa-Index-Points.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA point in left-linear grammars. In \u003ccode\u003e(i:.j)\u003c/code\u003e, \u003ccode\u003ej\u003c/code\u003e is the non-terminal\n storage point, \u003ccode\u003ei==0\u003c/code\u003e always for the non-terminal, while \u003ccode\u003ei\u003e=0\u003c/code\u003e for\n terminals, which are on the right of the non-terminal. (This is why\n left-linear grammars are called left-linear: they recurse on the left).\n\u003c/p\u003e\u003cp\u003ePS: all this left/right talk deals with the RHS of a production rule, the\n LHS is always a non-terminal ;-)\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Index.Points",
          "name": "PointL",
          "package": "PrimitiveArray",
          "source": "src/Data-Array-Repa-Index-Points.html#PointL",
          "type": "newtype"
        },
        "index": {
          "description": "point in left-linear grammars In is the non-terminal storage point always for the non-terminal while for terminals which are on the right of the non-terminal This is why left-linear grammars are called left-linear they recurse on the left PS all this left right talk deals with the RHS of production rule the LHS is always non-terminal",
          "hierarchy": "Data Array Repa Index Points",
          "module": "Data.Array.Repa.Index.Points",
          "name": "PointL",
          "package": "PrimitiveArray",
          "partial": "Point",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/PrimitiveArray/docs/Data-Array-Repa-Index-Points.html#t:PointL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA point in right-linear grammars.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Index.Points",
          "name": "PointR",
          "package": "PrimitiveArray",
          "source": "src/Data-Array-Repa-Index-Points.html#PointR",
          "type": "newtype"
        },
        "index": {
          "description": "point in right-linear grammars",
          "hierarchy": "Data Array Repa Index Points",
          "module": "Data.Array.Repa.Index.Points",
          "name": "PointR",
          "package": "PrimitiveArray",
          "partial": "Point",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/PrimitiveArray/docs/Data-Array-Repa-Index-Points.html#t:PointR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.Index.Points",
          "name": "PointL",
          "package": "PrimitiveArray",
          "signature": "PointL (Int :. Int)",
          "source": "src/Data-Array-Repa-Index-Points.html#PointL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa Index Points",
          "module": "Data.Array.Repa.Index.Points",
          "name": "PointL",
          "package": "PrimitiveArray",
          "partial": "Point",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PrimitiveArray/docs/Data-Array-Repa-Index-Points.html#v:PointL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.Index.Points",
          "name": "PointR",
          "package": "PrimitiveArray",
          "signature": "PointR (Int :. Int)",
          "source": "src/Data-Array-Repa-Index-Points.html#PointR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa Index Points",
          "module": "Data.Array.Repa.Index.Points",
          "name": "PointR",
          "package": "PrimitiveArray",
          "partial": "Point",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PrimitiveArray/docs/Data-Array-Repa-Index-Points.html#v:PointR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.Index.Points",
          "name": "pointL",
          "package": "PrimitiveArray",
          "signature": "Int -\u003e Int -\u003e PointL",
          "source": "src/Data-Array-Repa-Index-Points.html#pointL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa Index Points",
          "module": "Data.Array.Repa.Index.Points",
          "name": "pointL",
          "normalized": "Int-\u003eInt-\u003ePointL",
          "package": "PrimitiveArray",
          "signature": "Int-\u003eInt-\u003ePointL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PrimitiveArray/docs/Data-Array-Repa-Index-Points.html#v:pointL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.Index.Points",
          "name": "pointR",
          "package": "PrimitiveArray",
          "signature": "Int -\u003e Int -\u003e PointR",
          "source": "src/Data-Array-Repa-Index-Points.html#pointR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa Index Points",
          "module": "Data.Array.Repa.Index.Points",
          "name": "pointR",
          "normalized": "Int-\u003eInt-\u003ePointR",
          "package": "PrimitiveArray",
          "signature": "Int-\u003eInt-\u003ePointR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PrimitiveArray/docs/Data-Array-Repa-Index-Points.html#v:pointR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSubwords span upper triangular tables. A subword (i,j) is legal iff i\u003c=j.\n\u003c/p\u003e\u003cp\u003eNOTE Using more complicated shapes has a number of benefits. We don't need\n to specify triangular or rectangular tables anymore. A rectangular\n one-dimensional table with a subword as shape actually \u003cem\u003edoes\u003c/em\u003e create space\n as required for subwords.\n\u003c/p\u003e\u003cp\u003eTODO subword indexing is currently hardcoded to be zero-based. See\n \u003ccode\u003e\u003ca\u003esubwordIndex\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eTODO consider replacing (\u003ccode\u003e\u003ca\u003equot\u003c/a\u003e\u003c/code\u003e 2) with (\u003ccode\u003eshiftR\u003c/code\u003e 1)\n\u003c/p\u003e\u003cp\u003eTODO all the QuickCheck stuff is missing\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Repa.Index.Subword",
          "name": "Subword",
          "package": "PrimitiveArray",
          "source": "src/Data-Array-Repa-Index-Subword.html",
          "type": "module"
        },
        "index": {
          "description": "Subwords span upper triangular tables subword is legal iff NOTE Using more complicated shapes has number of benefits We don need to specify triangular or rectangular tables anymore rectangular one-dimensional table with subword as shape actually does create space as required for subwords TODO subword indexing is currently hardcoded to be zero-based See subwordIndex TODO consider replacing quot with shiftR TODO all the QuickCheck stuff is missing",
          "hierarchy": "Data Array Repa Index Subword",
          "module": "Data.Array.Repa.Index.Subword",
          "name": "Subword",
          "package": "PrimitiveArray",
          "partial": "Subword",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/PrimitiveArray/docs/Data-Array-Repa-Index-Subword.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA subword wraps a simple pair.\n\u003c/p\u003e\u003cp\u003eSubwords always yield the upper-triangular part of a rect-angular array.\n This gives the quite curious effect that (0,N) points to the `\u003ccode\u003elargest'\u003c/code\u003e\n index, while (0,0) and (N,N) both point to the smallest. We do, however, use\n (0,0) as the smallest as (0,k) gives successively smaller upper triangular\n parts.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Index.Subword",
          "name": "Subword",
          "package": "PrimitiveArray",
          "source": "src/Data-Array-Repa-Index-Subword.html#Subword",
          "type": "newtype"
        },
        "index": {
          "description": "subword wraps simple pair Subwords always yield the upper-triangular part of rect-angular array This gives the quite curious effect that points to the largest index while and both point to the smallest We do however use as the smallest as gives successively smaller upper triangular parts",
          "hierarchy": "Data Array Repa Index Subword",
          "module": "Data.Array.Repa.Index.Subword",
          "name": "Subword",
          "package": "PrimitiveArray",
          "partial": "Subword",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/PrimitiveArray/docs/Data-Array-Repa-Index-Subword.html#t:Subword"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.Index.Subword",
          "name": "Subword",
          "package": "PrimitiveArray",
          "signature": "Subword (Int :. Int)",
          "source": "src/Data-Array-Repa-Index-Subword.html#Subword",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa Index Subword",
          "module": "Data.Array.Repa.Index.Subword",
          "name": "Subword",
          "package": "PrimitiveArray",
          "partial": "Subword",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PrimitiveArray/docs/Data-Array-Repa-Index-Subword.html#v:Subword"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.Index.Subword",
          "name": "stage",
          "package": "PrimitiveArray",
          "signature": "[Char]",
          "source": "src/Data-Array-Repa-Index-Subword.html#stage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa Index Subword",
          "module": "Data.Array.Repa.Index.Subword",
          "name": "stage",
          "normalized": "[Char]",
          "package": "PrimitiveArray",
          "signature": "[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PrimitiveArray/docs/Data-Array-Repa-Index-Subword.html#v:stage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.Index.Subword",
          "name": "subword",
          "package": "PrimitiveArray",
          "signature": "Int -\u003e Int -\u003e Subword",
          "source": "src/Data-Array-Repa-Index-Subword.html#subword",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa Index Subword",
          "module": "Data.Array.Repa.Index.Subword",
          "name": "subword",
          "normalized": "Int-\u003eInt-\u003eSubword",
          "package": "PrimitiveArray",
          "signature": "Int-\u003eInt-\u003eSubword",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PrimitiveArray/docs/Data-Array-Repa-Index-Subword.html#v:subword"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.Index.Subword",
          "name": "subwordFromIndex",
          "package": "PrimitiveArray",
          "signature": "Subword -\u003e Int -\u003e Subword",
          "source": "src/Data-Array-Repa-Index-Subword.html#subwordFromIndex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa Index Subword",
          "module": "Data.Array.Repa.Index.Subword",
          "name": "subwordFromIndex",
          "normalized": "Subword-\u003eInt-\u003eSubword",
          "package": "PrimitiveArray",
          "partial": "From Index",
          "signature": "Subword-\u003eInt-\u003eSubword",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PrimitiveArray/docs/Data-Array-Repa-Index-Subword.html#v:subwordFromIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubword indexing. Given the longest subword and the current subword,\n calculate a linear index \u003ca\u003e[0,..]\u003c/a\u003e. \u003ca\u003e(l,n)\u003c/a\u003e in this case means \u003ca\u003el\u003c/a\u003eower bound,\n length \u003ca\u003en\u003c/a\u003e. And \u003ca\u003e(i,j)\u003c/a\u003e is the normal index.\n\u003c/p\u003e\u003cp\u003eTODO probably doesn't work right with non-zero base ?!\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Index.Subword",
          "name": "subwordIndex",
          "package": "PrimitiveArray",
          "signature": "Subword -\u003e Subword -\u003e Int",
          "source": "src/Data-Array-Repa-Index-Subword.html#subwordIndex",
          "type": "function"
        },
        "index": {
          "description": "Subword indexing Given the longest subword and the current subword calculate linear index in this case means ower bound length And is the normal index TODO probably doesn work right with non-zero base",
          "hierarchy": "Data Array Repa Index Subword",
          "module": "Data.Array.Repa.Index.Subword",
          "name": "subwordIndex",
          "normalized": "Subword-\u003eSubword-\u003eInt",
          "package": "PrimitiveArray",
          "partial": "Index",
          "signature": "Subword-\u003eSubword-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PrimitiveArray/docs/Data-Array-Repa-Index-Subword.html#v:subwordIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etriangular numbers\n\u003c/p\u003e\u003cp\u003eA000217\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Index.Subword",
          "name": "triangularNumber",
          "package": "PrimitiveArray",
          "signature": "Int -\u003e Int",
          "source": "src/Data-Array-Repa-Index-Subword.html#triangularNumber",
          "type": "function"
        },
        "index": {
          "description": "triangular numbers A000217",
          "hierarchy": "Data Array Repa Index Subword",
          "module": "Data.Array.Repa.Index.Subword",
          "name": "triangularNumber",
          "normalized": "Int-\u003eInt",
          "package": "PrimitiveArray",
          "partial": "Number",
          "signature": "Int-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PrimitiveArray/docs/Data-Array-Repa-Index-Subword.html#v:triangularNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSize of an upper triangle starting at \u003ccode\u003ei\u003c/code\u003e and ending at \u003ccode\u003ej\u003c/code\u003e. \u003ca\u003e(0,N)\u003c/a\u003e what\n be the normal thing to use.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Index.Subword",
          "name": "upperTri",
          "package": "PrimitiveArray",
          "signature": "Subword -\u003e Int",
          "source": "src/Data-Array-Repa-Index-Subword.html#upperTri",
          "type": "function"
        },
        "index": {
          "description": "Size of an upper triangle starting at and ending at what be the normal thing to use",
          "hierarchy": "Data Array Repa Index Subword",
          "module": "Data.Array.Repa.Index.Subword",
          "name": "upperTri",
          "normalized": "Subword-\u003eInt",
          "package": "PrimitiveArray",
          "partial": "Tri",
          "signature": "Subword-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PrimitiveArray/docs/Data-Array-Repa-Index-Subword.html#v:upperTri"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eOperations to fill primitive arrays. Arrays are combined just like indices\n using \u003ccode\u003e\u003ca\u003eZ\u003c/a\u003e\u003c/code\u003e and '(:.)'. This allows filling an unlimited number of tables.\n\u003c/p\u003e\u003cp\u003eTODO make explicit in which order the tables are filled.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.PrimitiveArray.FillTables",
          "name": "FillTables",
          "package": "PrimitiveArray",
          "source": "src/Data-PrimitiveArray-FillTables.html",
          "type": "module"
        },
        "index": {
          "description": "Operations to fill primitive arrays Arrays are combined just like indices using and This allows filling an unlimited number of tables TODO make explicit in which order the tables are filled",
          "hierarchy": "Data PrimitiveArray FillTables",
          "module": "Data.PrimitiveArray.FillTables",
          "name": "FillTables",
          "package": "PrimitiveArray",
          "partial": "Fill Tables",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/PrimitiveArray/docs/Data-PrimitiveArray-FillTables.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.PrimitiveArray.FillTables",
          "name": "GeneralNonTerminal",
          "package": "PrimitiveArray",
          "source": "src/Data-PrimitiveArray-FillTables.html#GeneralNonTerminal",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data PrimitiveArray FillTables",
          "module": "Data.PrimitiveArray.FillTables",
          "name": "GeneralNonTerminal",
          "package": "PrimitiveArray",
          "partial": "General Non Terminal",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/PrimitiveArray/docs/Data-PrimitiveArray-FillTables.html#t:GeneralNonTerminal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines how a single index in a stack of arrays + evaluation functions is\n handled. The instances *should* work for any index \u003ccode\u003eix\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.PrimitiveArray.FillTables",
          "name": "Stack",
          "package": "PrimitiveArray",
          "source": "src/Data-PrimitiveArray-FillTables.html#Stack",
          "type": "class"
        },
        "index": {
          "description": "Defines how single index in stack of arrays evaluation functions is handled The instances should work for any index ix",
          "hierarchy": "Data PrimitiveArray FillTables",
          "module": "Data.PrimitiveArray.FillTables",
          "name": "Stack",
          "package": "PrimitiveArray",
          "partial": "Stack",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/PrimitiveArray/docs/Data-PrimitiveArray-FillTables.html#t:Stack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.PrimitiveArray.FillTables",
          "name": "SubwordNonTerminal",
          "package": "PrimitiveArray",
          "source": "src/Data-PrimitiveArray-FillTables.html#SubwordNonTerminal",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data PrimitiveArray FillTables",
          "module": "Data.PrimitiveArray.FillTables",
          "name": "SubwordNonTerminal",
          "package": "PrimitiveArray",
          "partial": "Subword Non Terminal",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/PrimitiveArray/docs/Data-PrimitiveArray-FillTables.html#t:SubwordNonTerminal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.PrimitiveArray.FillTables",
          "name": "UpperTriS",
          "package": "PrimitiveArray",
          "source": "src/Data-PrimitiveArray-FillTables.html#UpperTriS",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data PrimitiveArray FillTables",
          "module": "Data.PrimitiveArray.FillTables",
          "name": "UpperTriS",
          "package": "PrimitiveArray",
          "partial": "Upper Tri",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/PrimitiveArray/docs/Data-PrimitiveArray-FillTables.html#t:UpperTriS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.PrimitiveArray.FillTables",
          "name": "upperTriS",
          "package": "PrimitiveArray",
          "signature": "stack -\u003e m ()",
          "source": "src/Data-PrimitiveArray-FillTables.html#upperTriS",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data PrimitiveArray FillTables",
          "module": "Data.PrimitiveArray.FillTables",
          "name": "upperTriS",
          "normalized": "a-\u003eb()",
          "package": "PrimitiveArray",
          "partial": "Tri",
          "signature": "stack-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/PrimitiveArray/docs/Data-PrimitiveArray-FillTables.html#v:upperTriS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.PrimitiveArray.FillTables",
          "name": "writeStack",
          "package": "PrimitiveArray",
          "signature": "xs -\u003e sh -\u003e m ()",
          "source": "src/Data-PrimitiveArray-FillTables.html#writeStack",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data PrimitiveArray FillTables",
          "module": "Data.PrimitiveArray.FillTables",
          "name": "writeStack",
          "normalized": "a-\u003eb-\u003ec()",
          "package": "PrimitiveArray",
          "partial": "Stack",
          "signature": "xs-\u003esh-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/PrimitiveArray/docs/Data-PrimitiveArray-FillTables.html#v:writeStack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.PrimitiveArray.QuickCheck",
          "name": "QuickCheck",
          "package": "PrimitiveArray",
          "source": "src/Data-PrimitiveArray-QuickCheck.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data PrimitiveArray QuickCheck",
          "module": "Data.PrimitiveArray.QuickCheck",
          "name": "QuickCheck",
          "package": "PrimitiveArray",
          "partial": "Quick Check",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/PrimitiveArray/docs/Data-PrimitiveArray-QuickCheck.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePrimitive arrays where the lower index is zero (or the equivalent of zero\n for newtypes and enumerations).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.PrimitiveArray.Zero",
          "name": "Zero",
          "package": "PrimitiveArray",
          "source": "src/Data-PrimitiveArray-Zero.html",
          "type": "module"
        },
        "index": {
          "description": "Primitive arrays where the lower index is zero or the equivalent of zero for newtypes and enumerations",
          "hierarchy": "Data PrimitiveArray Zero",
          "module": "Data.PrimitiveArray.Zero",
          "name": "Zero",
          "package": "PrimitiveArray",
          "partial": "Zero",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/PrimitiveArray/docs/Data-PrimitiveArray-Zero.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.PrimitiveArray.Zero",
          "name": "Boxed",
          "package": "PrimitiveArray",
          "source": "src/Data-PrimitiveArray-Zero.html#Boxed",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data PrimitiveArray Zero",
          "module": "Data.PrimitiveArray.Zero",
          "name": "Boxed",
          "package": "PrimitiveArray",
          "partial": "Boxed",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/PrimitiveArray/docs/Data-PrimitiveArray-Zero.html#t:Boxed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.PrimitiveArray.Zero",
          "name": "Unboxed",
          "package": "PrimitiveArray",
          "source": "src/Data-PrimitiveArray-Zero.html#Unboxed",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data PrimitiveArray Zero",
          "module": "Data.PrimitiveArray.Zero",
          "name": "Unboxed",
          "package": "PrimitiveArray",
          "partial": "Unboxed",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/PrimitiveArray/docs/Data-PrimitiveArray-Zero.html#t:Unboxed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.PrimitiveArray.Zero",
          "name": "Boxed",
          "package": "PrimitiveArray",
          "signature": "Boxed !sh !(Vector e)",
          "source": "src/Data-PrimitiveArray-Zero.html#Boxed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data PrimitiveArray Zero",
          "module": "Data.PrimitiveArray.Zero",
          "name": "Boxed",
          "package": "PrimitiveArray",
          "partial": "Boxed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PrimitiveArray/docs/Data-PrimitiveArray-Zero.html#v:Boxed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.PrimitiveArray.Zero",
          "name": "Unboxed",
          "package": "PrimitiveArray",
          "signature": "Unboxed !sh !(Vector e)",
          "source": "src/Data-PrimitiveArray-Zero.html#Unboxed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data PrimitiveArray Zero",
          "module": "Data.PrimitiveArray.Zero",
          "name": "Unboxed",
          "package": "PrimitiveArray",
          "partial": "Unboxed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PrimitiveArray/docs/Data-PrimitiveArray-Zero.html#v:Unboxed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVastly extended primitive arrays. Some basic ideas are now modeled after\n the vector package, especially the monadic mutable / pure immutable array\n system.\n\u003c/p\u003e\u003cp\u003eNOTE all operations in MPrimArrayOps and PrimArrayOps are highly unsafe. No\n bounds-checking is performed at all.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.PrimitiveArray",
          "name": "PrimitiveArray",
          "package": "PrimitiveArray",
          "source": "src/Data-PrimitiveArray.html",
          "type": "module"
        },
        "index": {
          "description": "Vastly extended primitive arrays Some basic ideas are now modeled after the vector package especially the monadic mutable pure immutable array system NOTE all operations in MPrimArrayOps and PrimArrayOps are highly unsafe No bounds-checking is performed at all",
          "hierarchy": "Data PrimitiveArray",
          "module": "Data.PrimitiveArray",
          "name": "PrimitiveArray",
          "package": "PrimitiveArray",
          "partial": "Primitive Array",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/PrimitiveArray/docs/Data-PrimitiveArray.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe core set of operations for monadic arrays.\n\u003c/p\u003e",
          "module": "Data.PrimitiveArray",
          "name": "MPrimArrayOps",
          "package": "PrimitiveArray",
          "source": "src/Data-PrimitiveArray.html#MPrimArrayOps",
          "type": "class"
        },
        "index": {
          "description": "The core set of operations for monadic arrays",
          "hierarchy": "Data PrimitiveArray",
          "module": "Data.PrimitiveArray",
          "name": "MPrimArrayOps",
          "package": "PrimitiveArray",
          "partial": "MPrim Array Ops",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/PrimitiveArray/docs/Data-PrimitiveArray.html#t:MPrimArrayOps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMutable version of an array.\n\u003c/p\u003e",
          "module": "Data.PrimitiveArray",
          "name": "MutArr",
          "package": "PrimitiveArray",
          "signature": "MutArr",
          "type": "function"
        },
        "index": {
          "description": "Mutable version of an array",
          "hierarchy": "Data PrimitiveArray",
          "module": "Data.PrimitiveArray",
          "name": "MutArr",
          "package": "PrimitiveArray",
          "partial": "Mut Arr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PrimitiveArray/docs/Data-PrimitiveArray.html#t:MutArr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.PrimitiveArray",
          "name": "PrimArrayMap",
          "package": "PrimitiveArray",
          "source": "src/Data-PrimitiveArray.html#PrimArrayMap",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data PrimitiveArray",
          "module": "Data.PrimitiveArray",
          "name": "PrimArrayMap",
          "package": "PrimitiveArray",
          "partial": "Prim Array Map",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/PrimitiveArray/docs/Data-PrimitiveArray.html#t:PrimArrayMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe core set of functions on immutable arrays.\n\u003c/p\u003e",
          "module": "Data.PrimitiveArray",
          "name": "PrimArrayOps",
          "package": "PrimitiveArray",
          "source": "src/Data-PrimitiveArray.html#PrimArrayOps",
          "type": "class"
        },
        "index": {
          "description": "The core set of functions on immutable arrays",
          "hierarchy": "Data PrimitiveArray",
          "module": "Data.PrimitiveArray",
          "name": "PrimArrayOps",
          "package": "PrimitiveArray",
          "partial": "Prim Array Ops",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/PrimitiveArray/docs/Data-PrimitiveArray.html#t:PrimArrayOps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInfix index operator. Performs minimal bounds-checking using assert in\n non-optimized code.\n\u003c/p\u003e",
          "module": "Data.PrimitiveArray",
          "name": "(!)",
          "package": "PrimitiveArray",
          "signature": "arr sh elm -\u003e sh -\u003e elm",
          "source": "src/Data-PrimitiveArray.html#%21",
          "type": "function"
        },
        "index": {
          "description": "Infix index operator Performs minimal bounds-checking using assert in non-optimized code",
          "hierarchy": "Data PrimitiveArray",
          "module": "Data.PrimitiveArray",
          "name": "(!) !",
          "normalized": "a b c-\u003eb-\u003ec",
          "package": "PrimitiveArray",
          "signature": "arr sh elm-\u003esh-\u003eelm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PrimitiveArray/docs/Data-PrimitiveArray.html#v:-33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn all associations from an array.\n\u003c/p\u003e",
          "module": "Data.PrimitiveArray",
          "name": "assocs",
          "package": "PrimitiveArray",
          "signature": "arr sh elm -\u003e [(sh, elm)]",
          "source": "src/Data-PrimitiveArray.html#assocs",
          "type": "function"
        },
        "index": {
          "description": "Return all associations from an array",
          "hierarchy": "Data PrimitiveArray",
          "module": "Data.PrimitiveArray",
          "name": "assocs",
          "normalized": "a b c-\u003e[(b,c)]",
          "package": "PrimitiveArray",
          "signature": "arr sh elm-\u003e[(sh,elm)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PrimitiveArray/docs/Data-PrimitiveArray.html#v:assocs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the bounds of an immutable array, again inclusive bounds: \u003ccode\u003e [lb..ub] \u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.PrimitiveArray",
          "name": "bounds",
          "package": "PrimitiveArray",
          "signature": "arr sh elm -\u003e (sh, sh)",
          "source": "src/Data-PrimitiveArray.html#bounds",
          "type": "method"
        },
        "index": {
          "description": "Returns the bounds of an immutable array again inclusive bounds lb..ub",
          "hierarchy": "Data PrimitiveArray",
          "module": "Data.PrimitiveArray",
          "name": "bounds",
          "normalized": "a b c-\u003e(b,b)",
          "package": "PrimitiveArray",
          "signature": "arr sh elm-\u003e(sh,sh)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/PrimitiveArray/docs/Data-PrimitiveArray.html#v:bounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the bounds of the array. All bounds are inclusive, as in\n \u003ccode\u003e[lb..ub]\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.PrimitiveArray",
          "name": "boundsM",
          "package": "PrimitiveArray",
          "signature": "MutArr m (arr sh elm) -\u003e (sh, sh)",
          "source": "src/Data-PrimitiveArray.html#boundsM",
          "type": "method"
        },
        "index": {
          "description": "Return the bounds of the array All bounds are inclusive as in lb..ub",
          "hierarchy": "Data PrimitiveArray",
          "module": "Data.PrimitiveArray",
          "name": "boundsM",
          "normalized": "MutArr a(b c d)-\u003e(c,c)",
          "package": "PrimitiveArray",
          "signature": "MutArr m(arr sh elm)-\u003e(sh,sh)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/PrimitiveArray/docs/Data-PrimitiveArray.html#v:boundsM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFreezes a mutable array an returns its immutable version. This operation\n is \u003cem\u003eO(1)\u003c/em\u003e and both arrays share the same memory. Do not use the mutable\n array afterwards.\n\u003c/p\u003e",
          "module": "Data.PrimitiveArray",
          "name": "freeze",
          "package": "PrimitiveArray",
          "signature": "MutArr m (arr sh elm) -\u003e m (arr sh elm)",
          "source": "src/Data-PrimitiveArray.html#freeze",
          "type": "method"
        },
        "index": {
          "description": "Freezes mutable array an returns its immutable version This operation is and both arrays share the same memory Do not use the mutable array afterwards",
          "hierarchy": "Data PrimitiveArray",
          "module": "Data.PrimitiveArray",
          "name": "freeze",
          "normalized": "MutArr a(b c d)-\u003ea(b c d)",
          "package": "PrimitiveArray",
          "signature": "MutArr m(arr sh elm)-\u003em(arr sh elm)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/PrimitiveArray/docs/Data-PrimitiveArray.html#v:freeze"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates an immutable array from lower and upper bounds, a default element,\n and a list of associations.\n\u003c/p\u003e",
          "module": "Data.PrimitiveArray",
          "name": "fromAssocs",
          "package": "PrimitiveArray",
          "signature": "sh -\u003e sh -\u003e elm -\u003e [(sh, elm)] -\u003e arr sh elm",
          "source": "src/Data-PrimitiveArray.html#fromAssocs",
          "type": "function"
        },
        "index": {
          "description": "Creates an immutable array from lower and upper bounds default element and list of associations",
          "hierarchy": "Data PrimitiveArray",
          "module": "Data.PrimitiveArray",
          "name": "fromAssocs",
          "normalized": "a-\u003ea-\u003eb-\u003e[(a,b)]-\u003ec a b",
          "package": "PrimitiveArray",
          "partial": "Assocs",
          "signature": "sh-\u003esh-\u003eelm-\u003e[(sh,elm)]-\u003earr sh elm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PrimitiveArray/docs/Data-PrimitiveArray.html#v:fromAssocs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a mutable primitive array from a lower and an upper bound, a\n default element, and a list of associations.\n\u003c/p\u003e",
          "module": "Data.PrimitiveArray",
          "name": "fromAssocsM",
          "package": "PrimitiveArray",
          "signature": "sh -\u003e sh -\u003e elm -\u003e [(sh, elm)] -\u003e m (MutArr m (arr sh elm))",
          "source": "src/Data-PrimitiveArray.html#fromAssocsM",
          "type": "function"
        },
        "index": {
          "description": "Construct mutable primitive array from lower and an upper bound default element and list of associations",
          "hierarchy": "Data PrimitiveArray",
          "module": "Data.PrimitiveArray",
          "name": "fromAssocsM",
          "normalized": "a-\u003ea-\u003eb-\u003e[(a,b)]-\u003ec(MutArr c(d a b))",
          "package": "PrimitiveArray",
          "partial": "Assocs",
          "signature": "sh-\u003esh-\u003eelm-\u003e[(sh,elm)]-\u003em(MutArr m(arr sh elm))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PrimitiveArray/docs/Data-PrimitiveArray.html#v:fromAssocsM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates an immutable array from lower and upper bounds and a complete list\n of elements.\n\u003c/p\u003e",
          "module": "Data.PrimitiveArray",
          "name": "fromList",
          "package": "PrimitiveArray",
          "signature": "sh -\u003e sh -\u003e [elm] -\u003e arr sh elm",
          "source": "src/Data-PrimitiveArray.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Creates an immutable array from lower and upper bounds and complete list of elements",
          "hierarchy": "Data PrimitiveArray",
          "module": "Data.PrimitiveArray",
          "name": "fromList",
          "normalized": "a-\u003ea-\u003e[b]-\u003ec a b",
          "package": "PrimitiveArray",
          "partial": "List",
          "signature": "sh-\u003esh-\u003e[elm]-\u003earr sh elm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PrimitiveArray/docs/Data-PrimitiveArray.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven lower and upper bounds and a list of \u003cem\u003eall\u003c/em\u003e elements, produce a\n mutable array.\n\u003c/p\u003e",
          "module": "Data.PrimitiveArray",
          "name": "fromListM",
          "package": "PrimitiveArray",
          "signature": "sh -\u003e sh -\u003e [elm] -\u003e m (MutArr m (arr sh elm))",
          "source": "src/Data-PrimitiveArray.html#fromListM",
          "type": "method"
        },
        "index": {
          "description": "Given lower and upper bounds and list of all elements produce mutable array",
          "hierarchy": "Data PrimitiveArray",
          "module": "Data.PrimitiveArray",
          "name": "fromListM",
          "normalized": "a-\u003ea-\u003e[b]-\u003ec(MutArr c(d a b))",
          "package": "PrimitiveArray",
          "partial": "List",
          "signature": "sh-\u003esh-\u003e[elm]-\u003em(MutArr m(arr sh elm))",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/PrimitiveArray/docs/Data-PrimitiveArray.html#v:fromListM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermines if an index is valid for a given immutable array.\n\u003c/p\u003e",
          "module": "Data.PrimitiveArray",
          "name": "inBounds",
          "package": "PrimitiveArray",
          "signature": "arr sh elm -\u003e sh -\u003e Bool",
          "source": "src/Data-PrimitiveArray.html#inBounds",
          "type": "function"
        },
        "index": {
          "description": "Determines if an index is valid for given immutable array",
          "hierarchy": "Data PrimitiveArray",
          "module": "Data.PrimitiveArray",
          "name": "inBounds",
          "normalized": "a b c-\u003eb-\u003eBool",
          "package": "PrimitiveArray",
          "partial": "Bounds",
          "signature": "arr sh elm-\u003esh-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PrimitiveArray/docs/Data-PrimitiveArray.html#v:inBounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns true if the index is valid for the array.\n\u003c/p\u003e",
          "module": "Data.PrimitiveArray",
          "name": "inBoundsM",
          "package": "PrimitiveArray",
          "signature": "MutArr m (arr sh elm) -\u003e sh -\u003e Bool",
          "source": "src/Data-PrimitiveArray.html#inBoundsM",
          "type": "function"
        },
        "index": {
          "description": "Returns true if the index is valid for the array",
          "hierarchy": "Data PrimitiveArray",
          "module": "Data.PrimitiveArray",
          "name": "inBoundsM",
          "normalized": "MutArr a(b c d)-\u003ec-\u003eBool",
          "package": "PrimitiveArray",
          "partial": "Bounds",
          "signature": "MutArr m(arr sh elm)-\u003esh-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PrimitiveArray/docs/Data-PrimitiveArray.html#v:inBoundsM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract a single element from the array. Generally unsafe as not\n bounds-checking is performed.\n\u003c/p\u003e",
          "module": "Data.PrimitiveArray",
          "name": "index",
          "package": "PrimitiveArray",
          "signature": "arr sh elm -\u003e sh -\u003e elm",
          "source": "src/Data-PrimitiveArray.html#index",
          "type": "method"
        },
        "index": {
          "description": "Extract single element from the array Generally unsafe as not bounds-checking is performed",
          "hierarchy": "Data PrimitiveArray",
          "module": "Data.PrimitiveArray",
          "name": "index",
          "normalized": "a b c-\u003eb-\u003ec",
          "package": "PrimitiveArray",
          "signature": "arr sh elm-\u003esh-\u003eelm",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/PrimitiveArray/docs/Data-PrimitiveArray.html#v:index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a function over each element, keeping the shape intact.\n\u003c/p\u003e",
          "module": "Data.PrimitiveArray",
          "name": "map",
          "package": "PrimitiveArray",
          "signature": "(e -\u003e e') -\u003e arr sh e -\u003e arr sh e'",
          "source": "src/Data-PrimitiveArray.html#map",
          "type": "method"
        },
        "index": {
          "description": "Map function over each element keeping the shape intact",
          "hierarchy": "Data PrimitiveArray",
          "module": "Data.PrimitiveArray",
          "name": "map",
          "normalized": "(a-\u003eb)-\u003ec d a-\u003ec d b",
          "package": "PrimitiveArray",
          "signature": "(e-\u003ee')-\u003earr sh e-\u003earr sh e'",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/PrimitiveArray/docs/Data-PrimitiveArray.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new array with the given bounds with each element within the\n array being in an undefined state.\n\u003c/p\u003e",
          "module": "Data.PrimitiveArray",
          "name": "newM",
          "package": "PrimitiveArray",
          "signature": "sh -\u003e sh -\u003e m (MutArr m (arr sh elm))",
          "source": "src/Data-PrimitiveArray.html#newM",
          "type": "method"
        },
        "index": {
          "description": "Creates new array with the given bounds with each element within the array being in an undefined state",
          "hierarchy": "Data PrimitiveArray",
          "module": "Data.PrimitiveArray",
          "name": "newM",
          "normalized": "a-\u003ea-\u003eb(MutArr b(c a d))",
          "package": "PrimitiveArray",
          "signature": "sh-\u003esh-\u003em(MutArr m(arr sh elm))",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/PrimitiveArray/docs/Data-PrimitiveArray.html#v:newM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new array with all elements being equal to \u003ccode\u003eelm\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.PrimitiveArray",
          "name": "newWithM",
          "package": "PrimitiveArray",
          "signature": "sh -\u003e sh -\u003e elm -\u003e m (MutArr m (arr sh elm))",
          "source": "src/Data-PrimitiveArray.html#newWithM",
          "type": "method"
        },
        "index": {
          "description": "Creates new array with all elements being equal to elm",
          "hierarchy": "Data PrimitiveArray",
          "module": "Data.PrimitiveArray",
          "name": "newWithM",
          "normalized": "a-\u003ea-\u003eb-\u003ec(MutArr c(d a b))",
          "package": "PrimitiveArray",
          "partial": "With",
          "signature": "sh-\u003esh-\u003eelm-\u003em(MutArr m(arr sh elm))",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/PrimitiveArray/docs/Data-PrimitiveArray.html#v:newWithM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads a single element in the array.\n\u003c/p\u003e",
          "module": "Data.PrimitiveArray",
          "name": "readM",
          "package": "PrimitiveArray",
          "signature": "MutArr m (arr sh elm) -\u003e sh -\u003e m elm",
          "source": "src/Data-PrimitiveArray.html#readM",
          "type": "method"
        },
        "index": {
          "description": "Reads single element in the array",
          "hierarchy": "Data PrimitiveArray",
          "module": "Data.PrimitiveArray",
          "name": "readM",
          "normalized": "MutArr a(b c d)-\u003ec-\u003ea d",
          "package": "PrimitiveArray",
          "signature": "MutArr m(arr sh elm)-\u003esh-\u003em elm",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/PrimitiveArray/docs/Data-PrimitiveArray.html#v:readM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven two arrays with the same dimensionality, their respective starting\n index, and how many steps to go in each dimension (in terms of a dimension\n again), determine if the multidimensional slices have the same value at\n all positions\n\u003c/p\u003e\u003cp\u003eTODO specialize for DIM1 (and maybe higher dim's) to use memcmp\n\u003c/p\u003e",
          "module": "Data.PrimitiveArray",
          "name": "sliceEq",
          "package": "PrimitiveArray",
          "signature": "arr sh elm -\u003e sh -\u003e arr sh elm -\u003e sh -\u003e sh -\u003e Bool",
          "source": "src/Data-PrimitiveArray.html#sliceEq",
          "type": "function"
        },
        "index": {
          "description": "Given two arrays with the same dimensionality their respective starting index and how many steps to go in each dimension in terms of dimension again determine if the multidimensional slices have the same value at all positions TODO specialize for DIM1 and maybe higher dim to use memcmp",
          "hierarchy": "Data PrimitiveArray",
          "module": "Data.PrimitiveArray",
          "name": "sliceEq",
          "normalized": "a b c-\u003eb-\u003ea b c-\u003eb-\u003eb-\u003eBool",
          "package": "PrimitiveArray",
          "partial": "Eq",
          "signature": "arr sh elm-\u003esh-\u003earr sh elm-\u003esh-\u003esh-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PrimitiveArray/docs/Data-PrimitiveArray.html#v:sliceEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns all elements of an immutable array as a list.\n\u003c/p\u003e",
          "module": "Data.PrimitiveArray",
          "name": "toList",
          "package": "PrimitiveArray",
          "signature": "arr sh elm -\u003e [elm]",
          "source": "src/Data-PrimitiveArray.html#toList",
          "type": "function"
        },
        "index": {
          "description": "Returns all elements of an immutable array as list",
          "hierarchy": "Data PrimitiveArray",
          "module": "Data.PrimitiveArray",
          "name": "toList",
          "normalized": "a b c-\u003e[c]",
          "package": "PrimitiveArray",
          "partial": "List",
          "signature": "arr sh elm-\u003e[elm]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PrimitiveArray/docs/Data-PrimitiveArray.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrites a single element in the array.\n\u003c/p\u003e",
          "module": "Data.PrimitiveArray",
          "name": "writeM",
          "package": "PrimitiveArray",
          "signature": "MutArr m (arr sh elm) -\u003e sh -\u003e elm -\u003e m ()",
          "source": "src/Data-PrimitiveArray.html#writeM",
          "type": "method"
        },
        "index": {
          "description": "Writes single element in the array",
          "hierarchy": "Data PrimitiveArray",
          "module": "Data.PrimitiveArray",
          "name": "writeM",
          "normalized": "MutArr a(b c d)-\u003ec-\u003ed-\u003ea()",
          "package": "PrimitiveArray",
          "signature": "MutArr m(arr sh elm)-\u003esh-\u003eelm-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/PrimitiveArray/docs/Data-PrimitiveArray.html#v:writeM"
      }
    }
  ]
]