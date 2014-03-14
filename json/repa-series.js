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
        "word": "repa-series"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFallback implementations of Series operators.\n\u003c/p\u003e\u003cp\u003eCode using these series operators is typically fused and vectorised by\n   the Repa plugin. If this transformation is successful then the resulting\n   GHC Core program will use primitives from the \u003ccode\u003eData.Array.Repa.Series.Prim\u003c/code\u003e\n   module instead. If the fusion process is not successful then the implementations\n   in this module will be used directly.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Repa.Series.Fallback",
          "name": "Fallback",
          "package": "repa-series",
          "source": "src/Data-Array-Repa-Series-Fallback.html",
          "type": "module"
        },
        "index": {
          "description": "Fallback implementations of Series operators Code using these series operators is typically fused and vectorised by the Repa plugin If this transformation is successful then the resulting GHC Core program will use primitives from the Data.Array.Repa.Series.Prim module instead If the fusion process is not successful then the implementations in this module will be used directly",
          "hierarchy": "Data Array Repa Series Fallback",
          "module": "Data.Array.Repa.Series.Fallback",
          "name": "Fallback",
          "package": "repa-series",
          "partial": "Fallback",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Fallback.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine all elements of a series with an associative operator.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Repa.Series.Fallback\",\"Data.Array.Repa.Series\"]",
          "name": "fold",
          "package": "repa-series",
          "signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e Series k b -\u003e a",
          "source": "src/Data-Array-Repa-Series-Fallback.html#fold",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Fallback.html#v:fold\",\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:fold\"]"
        },
        "index": {
          "description": "Combine all elements of series with an associative operator",
          "hierarchy": "Data Array Repa Series Fallback",
          "module": "Data.Array.Repa.Series.Fallback",
          "name": "fold",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eSeries c b-\u003ea",
          "package": "repa-series",
          "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003eSeries k b-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Fallback.html#v:fold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine all elements of a series with an associative operator.\n   The worker function is given the current index into the series.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Repa.Series.Fallback\",\"Data.Array.Repa.Series\"]",
          "name": "foldIndex",
          "package": "repa-series",
          "signature": "(Int# -\u003e a -\u003e b -\u003e a) -\u003e a -\u003e Series k b -\u003e a",
          "source": "src/Data-Array-Repa-Series-Fallback.html#foldIndex",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Fallback.html#v:foldIndex\",\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:foldIndex\"]"
        },
        "index": {
          "description": "Combine all elements of series with an associative operator The worker function is given the current index into the series",
          "hierarchy": "Data Array Repa Series Fallback",
          "module": "Data.Array.Repa.Series.Fallback",
          "name": "foldIndex",
          "normalized": "(Int #-\u003ea-\u003eb-\u003ea)-\u003ea-\u003eSeries c b-\u003ea",
          "package": "repa-series",
          "partial": "Index",
          "signature": "(Int #-\u003ea-\u003eb-\u003ea)-\u003ea-\u003eSeries k b-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Fallback.html#v:foldIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function to all elements of a series.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Repa.Series.Fallback\",\"Data.Array.Repa.Series\"]",
          "name": "map",
          "package": "repa-series",
          "signature": "(a -\u003e b) -\u003e Series k a -\u003e Series k b",
          "source": "src/Data-Array-Repa-Series-Fallback.html#map",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Fallback.html#v:map\",\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:map\"]"
        },
        "index": {
          "description": "Apply function to all elements of series",
          "hierarchy": "Data Array Repa Series Fallback",
          "module": "Data.Array.Repa.Series.Fallback",
          "name": "map",
          "normalized": "(a-\u003eb)-\u003eSeries c a-\u003eSeries c b",
          "package": "repa-series",
          "signature": "(a-\u003eb)-\u003eSeries k a-\u003eSeries k b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Fallback.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e, but for equal-length series\n\u003c/p\u003e",
          "module": "[\"Data.Array.Repa.Series.Fallback\",\"Data.Array.Repa.Series\"]",
          "name": "map2",
          "package": "repa-series",
          "signature": "(a -\u003e b -\u003e c) -\u003e Series k a -\u003e Series k b -\u003e Series k c",
          "source": "src/Data-Array-Repa-Series-Fallback.html#map2",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Fallback.html#v:map2\",\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:map2\"]"
        },
        "index": {
          "description": "Like zipWith but for equal-length series",
          "hierarchy": "Data Array Repa Series Fallback",
          "module": "Data.Array.Repa.Series.Fallback",
          "name": "map2",
          "normalized": "(a-\u003eb-\u003ec)-\u003eSeries d a-\u003eSeries d b-\u003eSeries d c",
          "package": "repa-series",
          "signature": "(a-\u003eb-\u003ec)-\u003eSeries k a-\u003eSeries k b-\u003eSeries k c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Fallback.html#v:map2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePack elements of a series using a selector.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Repa.Series.Fallback\",\"Data.Array.Repa.Series\"]",
          "name": "pack",
          "package": "repa-series",
          "signature": "Sel1 k1 k2 -\u003e Series k1 a -\u003e Series k2 a",
          "source": "src/Data-Array-Repa-Series-Fallback.html#pack",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Fallback.html#v:pack\",\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:pack\"]"
        },
        "index": {
          "description": "Pack elements of series using selector",
          "hierarchy": "Data Array Repa Series Fallback",
          "module": "Data.Array.Repa.Series.Fallback",
          "name": "pack",
          "normalized": "Sel a a-\u003eSeries a b-\u003eSeries a b",
          "package": "repa-series",
          "signature": "Sel k k-\u003eSeries k a-\u003eSeries k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Fallback.html#v:pack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003erepa-plugin\u003c/code\u003e rewrites client code to use these primitives.\n\u003c/p\u003e\u003cp\u003eThe plugin will use whatever names are in scope, so if you want to debug\n   your code you can import a different implementation of these primitives\n   into the module to be vectorized.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Repa.Series.Prim",
          "name": "Prim",
          "package": "repa-series",
          "source": "src/Data-Array-Repa-Series-Prim.html",
          "type": "module"
        },
        "index": {
          "description": "The repa-plugin rewrites client code to use these primitives The plugin will use whatever names are in scope so if you want to debug your code you can import different implementation of these primitives into the module to be vectorized",
          "hierarchy": "Data Array Repa Series Prim",
          "module": "Data.Array.Repa.Series.Prim",
          "name": "Prim",
          "package": "repa-series",
          "partial": "Prim",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrimitives needed by the repa-plugin.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Series.Prim",
          "name": "Primitives",
          "package": "repa-series",
          "source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
          "type": "data"
        },
        "index": {
          "description": "Primitives needed by the repa-plugin",
          "hierarchy": "Data Array Repa Series Prim",
          "module": "Data.Array.Repa.Series.Prim",
          "name": "Primitives",
          "package": "repa-series",
          "partial": "Primitives",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#t:Primitives"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Array.Repa.Series.Prim\",\"Data.Array.Repa.Series\"]",
          "name": "Primitives",
          "package": "repa-series",
          "signature": "Primitives",
          "source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:Primitives\",\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:Primitives\"]"
        },
        "index": {
          "hierarchy": "Data Array Repa Series Prim",
          "module": "Data.Array.Repa.Series.Prim",
          "name": "Primitives",
          "package": "repa-series",
          "partial": "Primitives",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:Primitives"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Array.Repa.Series.Prim\",\"Data.Array.Repa.Series\"]",
          "name": "prim_Ref",
          "package": "repa-series",
          "signature": "forall a.  Ref a",
          "source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_Ref\",\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:prim_Ref\"]"
        },
        "index": {
          "hierarchy": "Data Array Repa Series Prim",
          "module": "Data.Array.Repa.Series.Prim",
          "name": "prim_Ref",
          "package": "repa-series",
          "partial": "Ref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_Ref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Array.Repa.Series.Prim\",\"Data.Array.Repa.Series\"]",
          "name": "prim_Series",
          "package": "repa-series",
          "signature": "forall k a.  Series k a",
          "source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_Series\",\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:prim_Series\"]"
        },
        "index": {
          "hierarchy": "Data Array Repa Series Prim",
          "module": "Data.Array.Repa.Series.Prim",
          "name": "prim_Series",
          "package": "repa-series",
          "partial": "Series",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_Series"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Array.Repa.Series.Prim\",\"Data.Array.Repa.Series\"]",
          "name": "prim_Vector",
          "package": "repa-series",
          "signature": "forall a.  Vector a",
          "source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_Vector\",\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:prim_Vector\"]"
        },
        "index": {
          "hierarchy": "Data Array Repa Series Prim",
          "module": "Data.Array.Repa.Series.Prim",
          "name": "prim_Vector",
          "package": "repa-series",
          "partial": "Vector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_Vector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Array.Repa.Series.Prim\",\"Data.Array.Repa.Series\"]",
          "name": "prim_addInt",
          "package": "repa-series",
          "signature": "Int# -\u003e Int# -\u003e Int#",
          "source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_addInt\",\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:prim_addInt\"]"
        },
        "index": {
          "hierarchy": "Data Array Repa Series Prim",
          "module": "Data.Array.Repa.Series.Prim",
          "name": "prim_addInt",
          "normalized": "Int #-\u003eInt #-\u003eInt #",
          "package": "repa-series",
          "partial": "Int",
          "signature": "Int #-\u003eInt #-\u003eInt #",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_addInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Array.Repa.Series.Prim\",\"Data.Array.Repa.Series\"]",
          "name": "prim_divInt",
          "package": "repa-series",
          "signature": "Int# -\u003e Int# -\u003e Int#",
          "source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_divInt\",\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:prim_divInt\"]"
        },
        "index": {
          "hierarchy": "Data Array Repa Series Prim",
          "module": "Data.Array.Repa.Series.Prim",
          "name": "prim_divInt",
          "normalized": "Int #-\u003eInt #-\u003eInt #",
          "package": "repa-series",
          "partial": "Int",
          "signature": "Int #-\u003eInt #-\u003eInt #",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_divInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Array.Repa.Series.Prim\",\"Data.Array.Repa.Series\"]",
          "name": "prim_eqInt",
          "package": "repa-series",
          "signature": "Int# -\u003e Int# -\u003e Bool",
          "source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_eqInt\",\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:prim_eqInt\"]"
        },
        "index": {
          "hierarchy": "Data Array Repa Series Prim",
          "module": "Data.Array.Repa.Series.Prim",
          "name": "prim_eqInt",
          "normalized": "Int #-\u003eInt #-\u003eBool",
          "package": "repa-series",
          "partial": "Int",
          "signature": "Int #-\u003eInt #-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_eqInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Array.Repa.Series.Prim\",\"Data.Array.Repa.Series\"]",
          "name": "prim_geInt",
          "package": "repa-series",
          "signature": "Int# -\u003e Int# -\u003e Bool",
          "source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_geInt\",\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:prim_geInt\"]"
        },
        "index": {
          "hierarchy": "Data Array Repa Series Prim",
          "module": "Data.Array.Repa.Series.Prim",
          "name": "prim_geInt",
          "normalized": "Int #-\u003eInt #-\u003eBool",
          "package": "repa-series",
          "partial": "Int",
          "signature": "Int #-\u003eInt #-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_geInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Array.Repa.Series.Prim\",\"Data.Array.Repa.Series\"]",
          "name": "prim_gtInt",
          "package": "repa-series",
          "signature": "Int# -\u003e Int# -\u003e Bool",
          "source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_gtInt\",\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:prim_gtInt\"]"
        },
        "index": {
          "hierarchy": "Data Array Repa Series Prim",
          "module": "Data.Array.Repa.Series.Prim",
          "name": "prim_gtInt",
          "normalized": "Int #-\u003eInt #-\u003eBool",
          "package": "repa-series",
          "partial": "Int",
          "signature": "Int #-\u003eInt #-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_gtInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Array.Repa.Series.Prim\",\"Data.Array.Repa.Series\"]",
          "name": "prim_guard",
          "package": "repa-series",
          "signature": "Ref Int -\u003e Bool -\u003e (Int# -\u003e World -\u003e World) -\u003e World -\u003e World",
          "source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_guard\",\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:prim_guard\"]"
        },
        "index": {
          "hierarchy": "Data Array Repa Series Prim",
          "module": "Data.Array.Repa.Series.Prim",
          "name": "prim_guard",
          "normalized": "Ref Int-\u003eBool-\u003e(Int #-\u003eWorld-\u003eWorld)-\u003eWorld-\u003eWorld",
          "package": "repa-series",
          "signature": "Ref Int-\u003eBool-\u003e(Int #-\u003eWorld-\u003eWorld)-\u003eWorld-\u003eWorld",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_guard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Array.Repa.Series.Prim\",\"Data.Array.Repa.Series\"]",
          "name": "prim_leInt",
          "package": "repa-series",
          "signature": "Int# -\u003e Int# -\u003e Bool",
          "source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_leInt\",\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:prim_leInt\"]"
        },
        "index": {
          "hierarchy": "Data Array Repa Series Prim",
          "module": "Data.Array.Repa.Series.Prim",
          "name": "prim_leInt",
          "normalized": "Int #-\u003eInt #-\u003eBool",
          "package": "repa-series",
          "partial": "Int",
          "signature": "Int #-\u003eInt #-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_leInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Array.Repa.Series.Prim\",\"Data.Array.Repa.Series\"]",
          "name": "prim_loop",
          "package": "repa-series",
          "signature": "Int# -\u003e (Int# -\u003e World -\u003e World) -\u003e World -\u003e World",
          "source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_loop\",\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:prim_loop\"]"
        },
        "index": {
          "hierarchy": "Data Array Repa Series Prim",
          "module": "Data.Array.Repa.Series.Prim",
          "name": "prim_loop",
          "normalized": "Int #-\u003e(Int #-\u003eWorld-\u003eWorld)-\u003eWorld-\u003eWorld",
          "package": "repa-series",
          "signature": "Int #-\u003e(Int #-\u003eWorld-\u003eWorld)-\u003eWorld-\u003eWorld",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_loop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Array.Repa.Series.Prim\",\"Data.Array.Repa.Series\"]",
          "name": "prim_ltInt",
          "package": "repa-series",
          "signature": "Int# -\u003e Int# -\u003e Bool",
          "source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_ltInt\",\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:prim_ltInt\"]"
        },
        "index": {
          "hierarchy": "Data Array Repa Series Prim",
          "module": "Data.Array.Repa.Series.Prim",
          "name": "prim_ltInt",
          "normalized": "Int #-\u003eInt #-\u003eBool",
          "package": "repa-series",
          "partial": "Int",
          "signature": "Int #-\u003eInt #-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_ltInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Array.Repa.Series.Prim\",\"Data.Array.Repa.Series\"]",
          "name": "prim_modInt",
          "package": "repa-series",
          "signature": "Int# -\u003e Int# -\u003e Int#",
          "source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_modInt\",\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:prim_modInt\"]"
        },
        "index": {
          "hierarchy": "Data Array Repa Series Prim",
          "module": "Data.Array.Repa.Series.Prim",
          "name": "prim_modInt",
          "normalized": "Int #-\u003eInt #-\u003eInt #",
          "package": "repa-series",
          "partial": "Int",
          "signature": "Int #-\u003eInt #-\u003eInt #",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_modInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Array.Repa.Series.Prim\",\"Data.Array.Repa.Series\"]",
          "name": "prim_mulInt",
          "package": "repa-series",
          "signature": "Int# -\u003e Int# -\u003e Int#",
          "source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_mulInt\",\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:prim_mulInt\"]"
        },
        "index": {
          "hierarchy": "Data Array Repa Series Prim",
          "module": "Data.Array.Repa.Series.Prim",
          "name": "prim_mulInt",
          "normalized": "Int #-\u003eInt #-\u003eInt #",
          "package": "repa-series",
          "partial": "Int",
          "signature": "Int #-\u003eInt #-\u003eInt #",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_mulInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Array.Repa.Series.Prim\",\"Data.Array.Repa.Series\"]",
          "name": "prim_neqInt",
          "package": "repa-series",
          "signature": "Int# -\u003e Int# -\u003e Bool",
          "source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_neqInt\",\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:prim_neqInt\"]"
        },
        "index": {
          "hierarchy": "Data Array Repa Series Prim",
          "module": "Data.Array.Repa.Series.Prim",
          "name": "prim_neqInt",
          "normalized": "Int #-\u003eInt #-\u003eBool",
          "package": "repa-series",
          "partial": "Int",
          "signature": "Int #-\u003eInt #-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_neqInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Array.Repa.Series.Prim\",\"Data.Array.Repa.Series\"]",
          "name": "prim_newRefInt",
          "package": "repa-series",
          "signature": "Int# -\u003e World -\u003e (#World, Ref Int#)",
          "source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_newRefInt\",\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:prim_newRefInt\"]"
        },
        "index": {
          "hierarchy": "Data Array Repa Series Prim",
          "module": "Data.Array.Repa.Series.Prim",
          "name": "prim_newRefInt",
          "normalized": "Int #-\u003eWorld-\u003e(#World,Ref Int #)",
          "package": "repa-series",
          "partial": "Ref Int",
          "signature": "Int #-\u003eWorld-\u003e(#World,Ref Int #)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_newRefInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Array.Repa.Series.Prim\",\"Data.Array.Repa.Series\"]",
          "name": "prim_newRefInt_T2",
          "package": "repa-series",
          "signature": "(#Int#, Int##) -\u003e World -\u003e (#World, Ref (Int, Int)#)",
          "source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_newRefInt_T2\",\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:prim_newRefInt_T2\"]"
        },
        "index": {
          "hierarchy": "Data Array Repa Series Prim",
          "module": "Data.Array.Repa.Series.Prim",
          "name": "prim_newRefInt_T2",
          "normalized": "(#Int #,Int # #)-\u003eWorld-\u003e(#World,Ref(Int,Int)#)",
          "package": "repa-series",
          "partial": "Ref Int",
          "signature": "(#Int #,Int # #)-\u003eWorld-\u003e(#World,Ref(Int,Int)#)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_newRefInt_T2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Array.Repa.Series.Prim\",\"Data.Array.Repa.Series\"]",
          "name": "prim_newVectorInt",
          "package": "repa-series",
          "signature": "Int# -\u003e World -\u003e (#World, Vector Int#)",
          "source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_newVectorInt\",\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:prim_newVectorInt\"]"
        },
        "index": {
          "hierarchy": "Data Array Repa Series Prim",
          "module": "Data.Array.Repa.Series.Prim",
          "name": "prim_newVectorInt",
          "normalized": "Int #-\u003eWorld-\u003e(#World,Vector Int #)",
          "package": "repa-series",
          "partial": "Vector Int",
          "signature": "Int #-\u003eWorld-\u003e(#World,Vector Int #)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_newVectorInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Array.Repa.Series.Prim\",\"Data.Array.Repa.Series\"]",
          "name": "prim_nextInt",
          "package": "repa-series",
          "signature": "forall k.  Series k Int -\u003e Int# -\u003e World -\u003e (#World, Int##)",
          "source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_nextInt\",\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:prim_nextInt\"]"
        },
        "index": {
          "hierarchy": "Data Array Repa Series Prim",
          "module": "Data.Array.Repa.Series.Prim",
          "name": "prim_nextInt",
          "normalized": "a b Series c Int-\u003eInt #-\u003eWorld-\u003e(#World,Int # #)",
          "package": "repa-series",
          "partial": "Int",
          "signature": "forall k. Series k Int-\u003eInt #-\u003eWorld-\u003e(#World,Int # #)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_nextInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Array.Repa.Series.Prim\",\"Data.Array.Repa.Series\"]",
          "name": "prim_nextInt_T2",
          "package": "repa-series",
          "signature": "forall k.  Series k (Int, Int) -\u003e Int# -\u003e World -\u003e (#World, (#Int#, Int##)#)",
          "source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_nextInt_T2\",\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:prim_nextInt_T2\"]"
        },
        "index": {
          "hierarchy": "Data Array Repa Series Prim",
          "module": "Data.Array.Repa.Series.Prim",
          "name": "prim_nextInt_T2",
          "normalized": "a b Series c(Int,Int)-\u003eInt #-\u003eWorld-\u003e(#World,(#Int #,Int # #)#)",
          "package": "repa-series",
          "partial": "Int",
          "signature": "forall k. Series k(Int,Int)-\u003eInt #-\u003eWorld-\u003e(#World,(#Int #,Int # #)#)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_nextInt_T2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Array.Repa.Series.Prim\",\"Data.Array.Repa.Series\"]",
          "name": "prim_rateOfSeries",
          "package": "repa-series",
          "signature": "forall k a.  Series k a -\u003e Int#",
          "source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_rateOfSeries\",\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:prim_rateOfSeries\"]"
        },
        "index": {
          "hierarchy": "Data Array Repa Series Prim",
          "module": "Data.Array.Repa.Series.Prim",
          "name": "prim_rateOfSeries",
          "normalized": "a b c Series b d-\u003eInt #",
          "package": "repa-series",
          "partial": "Of Series",
          "signature": "forall k a. Series k a-\u003eInt #",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_rateOfSeries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Array.Repa.Series.Prim\",\"Data.Array.Repa.Series\"]",
          "name": "prim_readRefInt",
          "package": "repa-series",
          "signature": "Ref Int -\u003e World -\u003e (#World, Int##)",
          "source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_readRefInt\",\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:prim_readRefInt\"]"
        },
        "index": {
          "hierarchy": "Data Array Repa Series Prim",
          "module": "Data.Array.Repa.Series.Prim",
          "name": "prim_readRefInt",
          "normalized": "Ref Int-\u003eWorld-\u003e(#World,Int # #)",
          "package": "repa-series",
          "partial": "Ref Int",
          "signature": "Ref Int-\u003eWorld-\u003e(#World,Int # #)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_readRefInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Array.Repa.Series.Prim\",\"Data.Array.Repa.Series\"]",
          "name": "prim_readRefInt_T2",
          "package": "repa-series",
          "signature": "Ref (Int, Int) -\u003e World -\u003e (#World, (#Int#, Int##)#)",
          "source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_readRefInt_T2\",\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:prim_readRefInt_T2\"]"
        },
        "index": {
          "hierarchy": "Data Array Repa Series Prim",
          "module": "Data.Array.Repa.Series.Prim",
          "name": "prim_readRefInt_T2",
          "normalized": "Ref(Int,Int)-\u003eWorld-\u003e(#World,(#Int #,Int # #)#)",
          "package": "repa-series",
          "partial": "Ref Int",
          "signature": "Ref(Int,Int)-\u003eWorld-\u003e(#World,(#Int #,Int # #)#)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_readRefInt_T2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Array.Repa.Series.Prim\",\"Data.Array.Repa.Series\"]",
          "name": "prim_readVectorInt",
          "package": "repa-series",
          "signature": "Vector Int -\u003e Int# -\u003e World -\u003e (#World, Int##)",
          "source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_readVectorInt\",\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:prim_readVectorInt\"]"
        },
        "index": {
          "hierarchy": "Data Array Repa Series Prim",
          "module": "Data.Array.Repa.Series.Prim",
          "name": "prim_readVectorInt",
          "normalized": "Vector Int-\u003eInt #-\u003eWorld-\u003e(#World,Int # #)",
          "package": "repa-series",
          "partial": "Vector Int",
          "signature": "Vector Int-\u003eInt #-\u003eWorld-\u003e(#World,Int # #)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_readVectorInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Array.Repa.Series.Prim\",\"Data.Array.Repa.Series\"]",
          "name": "prim_remInt",
          "package": "repa-series",
          "signature": "Int# -\u003e Int# -\u003e Int#",
          "source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_remInt\",\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:prim_remInt\"]"
        },
        "index": {
          "hierarchy": "Data Array Repa Series Prim",
          "module": "Data.Array.Repa.Series.Prim",
          "name": "prim_remInt",
          "normalized": "Int #-\u003eInt #-\u003eInt #",
          "package": "repa-series",
          "partial": "Int",
          "signature": "Int #-\u003eInt #-\u003eInt #",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_remInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Array.Repa.Series.Prim\",\"Data.Array.Repa.Series\"]",
          "name": "prim_sliceVectorInt",
          "package": "repa-series",
          "signature": "Int# -\u003e Vector Int -\u003e World -\u003e (#World, Vector Int#)",
          "source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_sliceVectorInt\",\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:prim_sliceVectorInt\"]"
        },
        "index": {
          "hierarchy": "Data Array Repa Series Prim",
          "module": "Data.Array.Repa.Series.Prim",
          "name": "prim_sliceVectorInt",
          "normalized": "Int #-\u003eVector Int-\u003eWorld-\u003e(#World,Vector Int #)",
          "package": "repa-series",
          "partial": "Vector Int",
          "signature": "Int #-\u003eVector Int-\u003eWorld-\u003e(#World,Vector Int #)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_sliceVectorInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Array.Repa.Series.Prim\",\"Data.Array.Repa.Series\"]",
          "name": "prim_subInt",
          "package": "repa-series",
          "signature": "Int# -\u003e Int# -\u003e Int#",
          "source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_subInt\",\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:prim_subInt\"]"
        },
        "index": {
          "hierarchy": "Data Array Repa Series Prim",
          "module": "Data.Array.Repa.Series.Prim",
          "name": "prim_subInt",
          "normalized": "Int #-\u003eInt #-\u003eInt #",
          "package": "repa-series",
          "partial": "Int",
          "signature": "Int #-\u003eInt #-\u003eInt #",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_subInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Array.Repa.Series.Prim\",\"Data.Array.Repa.Series\"]",
          "name": "prim_writeRefInt",
          "package": "repa-series",
          "signature": "Ref Int -\u003e Int# -\u003e World -\u003e World",
          "source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_writeRefInt\",\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:prim_writeRefInt\"]"
        },
        "index": {
          "hierarchy": "Data Array Repa Series Prim",
          "module": "Data.Array.Repa.Series.Prim",
          "name": "prim_writeRefInt",
          "normalized": "Ref Int-\u003eInt #-\u003eWorld-\u003eWorld",
          "package": "repa-series",
          "partial": "Ref Int",
          "signature": "Ref Int-\u003eInt #-\u003eWorld-\u003eWorld",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_writeRefInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Array.Repa.Series.Prim\",\"Data.Array.Repa.Series\"]",
          "name": "prim_writeRefInt_T2",
          "package": "repa-series",
          "signature": "Ref (Int, Int) -\u003e (#Int#, Int##) -\u003e World -\u003e World",
          "source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_writeRefInt_T2\",\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:prim_writeRefInt_T2\"]"
        },
        "index": {
          "hierarchy": "Data Array Repa Series Prim",
          "module": "Data.Array.Repa.Series.Prim",
          "name": "prim_writeRefInt_T2",
          "normalized": "Ref(Int,Int)-\u003e(#Int #,Int # #)-\u003eWorld-\u003eWorld",
          "package": "repa-series",
          "partial": "Ref Int",
          "signature": "Ref(Int,Int)-\u003e(#Int #,Int # #)-\u003eWorld-\u003eWorld",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_writeRefInt_T2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Array.Repa.Series.Prim\",\"Data.Array.Repa.Series\"]",
          "name": "prim_writeVectorInt",
          "package": "repa-series",
          "signature": "Vector Int -\u003e Int# -\u003e Int# -\u003e World -\u003e World",
          "source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_writeVectorInt\",\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:prim_writeVectorInt\"]"
        },
        "index": {
          "hierarchy": "Data Array Repa Series Prim",
          "module": "Data.Array.Repa.Series.Prim",
          "name": "prim_writeVectorInt",
          "normalized": "Vector Int-\u003eInt #-\u003eInt #-\u003eWorld-\u003eWorld",
          "package": "repa-series",
          "partial": "Vector Int",
          "signature": "Vector Int-\u003eInt #-\u003eInt #-\u003eWorld-\u003eWorld",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_writeVectorInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTable of primitives used by the repa-plugin.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Repa.Series.Prim\",\"Data.Array.Repa.Series\"]",
          "name": "primitives",
          "package": "repa-series",
          "signature": "Primitives",
          "source": "src/Data-Array-Repa-Series-Prim.html#primitives",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:primitives\",\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:primitives\"]"
        },
        "index": {
          "description": "Table of primitives used by the repa-plugin",
          "hierarchy": "Data Array Repa Series Prim",
          "module": "Data.Array.Repa.Series.Prim",
          "name": "primitives",
          "package": "repa-series",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:primitives"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.Series.Ref",
          "name": "Ref",
          "package": "repa-series",
          "source": "src/Data-Array-Repa-Series-Ref.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Array Repa Series Ref",
          "module": "Data.Array.Repa.Series.Ref",
          "name": "Ref",
          "package": "repa-series",
          "partial": "Ref",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Ref.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMutable references.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Series.Ref",
          "name": "Ref",
          "package": "repa-series",
          "source": "src/Data-Array-Repa-Series-Ref.html#Ref",
          "type": "data"
        },
        "index": {
          "description": "Mutable references",
          "hierarchy": "Data Array Repa Series Ref",
          "module": "Data.Array.Repa.Series.Ref",
          "name": "Ref",
          "package": "repa-series",
          "partial": "Ref",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Ref.html#t:Ref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.Series.Ref",
          "name": "Ref",
          "package": "repa-series",
          "signature": "Ref !(IOVector a)",
          "source": "src/Data-Array-Repa-Series-Ref.html#Ref",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Repa Series Ref",
          "module": "Data.Array.Repa.Series.Ref",
          "name": "Ref",
          "package": "repa-series",
          "partial": "Ref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Ref.html#v:Ref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new unboxed reference.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Series.Ref",
          "name": "new",
          "package": "repa-series",
          "signature": "a -\u003e IO (Ref a)",
          "source": "src/Data-Array-Repa-Series-Ref.html#new",
          "type": "function"
        },
        "index": {
          "description": "Create new unboxed reference",
          "hierarchy": "Data Array Repa Series Ref",
          "module": "Data.Array.Repa.Series.Ref",
          "name": "new",
          "normalized": "a-\u003eIO(Ref a)",
          "package": "repa-series",
          "signature": "a-\u003eIO(Ref a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Ref.html#v:new"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead from an unboxed reference.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Series.Ref",
          "name": "read",
          "package": "repa-series",
          "signature": "Ref a -\u003e IO a",
          "source": "src/Data-Array-Repa-Series-Ref.html#read",
          "type": "function"
        },
        "index": {
          "description": "Read from an unboxed reference",
          "hierarchy": "Data Array Repa Series Ref",
          "module": "Data.Array.Repa.Series.Ref",
          "name": "read",
          "normalized": "Ref a-\u003eIO a",
          "package": "repa-series",
          "signature": "Ref a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Ref.html#v:read"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite to an unboxed reference.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Series.Ref",
          "name": "write",
          "package": "repa-series",
          "signature": "Ref a -\u003e a -\u003e IO ()",
          "source": "src/Data-Array-Repa-Series-Ref.html#write",
          "type": "function"
        },
        "index": {
          "description": "Write to an unboxed reference",
          "hierarchy": "Data Array Repa Series Ref",
          "module": "Data.Array.Repa.Series.Ref",
          "name": "write",
          "normalized": "Ref a-\u003ea-\u003eIO()",
          "package": "repa-series",
          "signature": "Ref a-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Ref.html#v:write"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.Series.Sel",
          "name": "Sel",
          "package": "repa-series",
          "source": "src/Data-Array-Repa-Series-Sel.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Array Repa Series Sel",
          "module": "Data.Array.Repa.Series.Sel",
          "name": "Sel",
          "package": "repa-series",
          "partial": "Sel",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Sel.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelectors.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Series.Sel",
          "name": "Sel1",
          "package": "repa-series",
          "source": "src/Data-Array-Repa-Series-Sel.html#Sel1",
          "type": "data"
        },
        "index": {
          "description": "Selectors",
          "hierarchy": "Data Array Repa Series Sel",
          "module": "Data.Array.Repa.Series.Sel",
          "name": "Sel1",
          "package": "repa-series",
          "partial": "Sel",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Sel.html#t:Sel1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Array.Repa.Series.Sel\",\"Data.Array.Repa.Series\"]",
          "name": "Sel1",
          "package": "repa-series",
          "signature": "Sel1",
          "source": "src/Data-Array-Repa-Series-Sel.html#Sel1",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Sel.html#v:Sel1\",\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:Sel1\"]"
        },
        "index": {
          "hierarchy": "Data Array Repa Series Sel",
          "module": "Data.Array.Repa.Series.Sel",
          "name": "Sel1",
          "package": "repa-series",
          "partial": "Sel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Sel.html#v:Sel1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new selector from a series of flags.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Repa.Series.Sel\",\"Data.Array.Repa.Series\"]",
          "name": "mkSel1",
          "package": "repa-series",
          "signature": "Series k1 Bool -\u003e (forall k2.  Sel1 k1 k2 -\u003e a) -\u003e a",
          "source": "src/Data-Array-Repa-Series-Sel.html#mkSel1",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Sel.html#v:mkSel1\",\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:mkSel1\"]"
        },
        "index": {
          "description": "Create new selector from series of flags",
          "hierarchy": "Data Array Repa Series Sel",
          "module": "Data.Array.Repa.Series.Sel",
          "name": "mkSel1",
          "normalized": "Series a Bool-\u003e(b a Sel a a-\u003ec)-\u003ec",
          "package": "repa-series",
          "partial": "Sel",
          "signature": "Series k Bool-\u003e(forall k Sel k k-\u003ea)-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Sel.html#v:mkSel1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Array.Repa.Series.Sel\",\"Data.Array.Repa.Series\"]",
          "name": "sel1Flags",
          "package": "repa-series",
          "signature": "(Vector Bool)",
          "source": "src/Data-Array-Repa-Series-Sel.html#Sel1",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Sel.html#v:sel1Flags\",\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:sel1Flags\"]"
        },
        "index": {
          "hierarchy": "Data Array Repa Series Sel",
          "module": "Data.Array.Repa.Series.Sel",
          "name": "sel1Flags",
          "package": "repa-series",
          "partial": "Flags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Sel.html#v:sel1Flags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Array.Repa.Series.Sel\",\"Data.Array.Repa.Series\"]",
          "name": "sel1Length",
          "package": "repa-series",
          "signature": "Int#",
          "source": "src/Data-Array-Repa-Series-Sel.html#Sel1",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Sel.html#v:sel1Length\",\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:sel1Length\"]"
        },
        "index": {
          "hierarchy": "Data Array Repa Series Sel",
          "module": "Data.Array.Repa.Series.Sel",
          "name": "sel1Length",
          "package": "repa-series",
          "partial": "Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Sel.html#v:sel1Length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.Series.Series",
          "name": "Series",
          "package": "repa-series",
          "source": "src/Data-Array-Repa-Series-Series.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Array Repa Series Series",
          "module": "Data.Array.Repa.Series.Series",
          "name": "Series",
          "package": "repa-series",
          "partial": "Series",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Series.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eSeries\u003c/a\u003e\u003c/code\u003e is an abstract source of element data and is consumed\n   by series processes. The elements of a series must be consumed\n   sequentially, so they don't support random access indexing.\n\u003c/p\u003e\u003cp\u003eThe rate parameter \u003ccode\u003ek\u003c/code\u003e represents the abstract length of the series.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Series.Series",
          "name": "Series",
          "package": "repa-series",
          "source": "src/Data-Array-Repa-Series-Series.html#Series",
          "type": "data"
        },
        "index": {
          "description": "Series is an abstract source of element data and is consumed by series processes The elements of series must be consumed sequentially so they don support random access indexing The rate parameter represents the abstract length of the series",
          "hierarchy": "Data Array Repa Series Series",
          "module": "Data.Array.Repa.Series.Series",
          "name": "Series",
          "package": "repa-series",
          "partial": "Series",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Series.html#t:Series"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Array.Repa.Series.Series\",\"Data.Array.Repa.Series\"]",
          "name": "Series",
          "package": "repa-series",
          "signature": "Series",
          "source": "src/Data-Array-Repa-Series-Series.html#Series",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Series.html#v:Series\",\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:Series\"]"
        },
        "index": {
          "hierarchy": "Data Array Repa Series Series",
          "module": "Data.Array.Repa.Series.Series",
          "name": "Series",
          "package": "repa-series",
          "partial": "Series",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Series.html#v:Series"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndex into a series.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Series.Series",
          "name": "index",
          "package": "repa-series",
          "signature": "Series k a -\u003e Int# -\u003e a",
          "source": "src/Data-Array-Repa-Series-Series.html#index",
          "type": "function"
        },
        "index": {
          "description": "Index into series",
          "hierarchy": "Data Array Repa Series Series",
          "module": "Data.Array.Repa.Series.Series",
          "name": "index",
          "normalized": "Series a b-\u003eInt #-\u003eb",
          "package": "repa-series",
          "signature": "Series k a-\u003eInt #-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Series.html#v:index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake the length of a series.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Series.Series",
          "name": "length",
          "package": "repa-series",
          "signature": "Series k a -\u003e Int#",
          "source": "src/Data-Array-Repa-Series-Series.html#length",
          "type": "function"
        },
        "index": {
          "description": "Take the length of series",
          "hierarchy": "Data Array Repa Series Series",
          "module": "Data.Array.Repa.Series.Series",
          "name": "length",
          "normalized": "Series a b-\u003eInt #",
          "package": "repa-series",
          "signature": "Series k a-\u003eInt #",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Series.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate a series expression, feeding it an unboxed vector.\n\u003c/p\u003e\u003cp\u003eThe rate variable \u003ccode\u003ek\u003c/code\u003e represents the length of the series.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Repa.Series.Series\",\"Data.Array.Repa.Series\"]",
          "name": "runSeries",
          "package": "repa-series",
          "signature": "Vector a-\u003e (forall k.  Series k a -\u003e b)-\u003e b",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Series.html#v:runSeries\",\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:runSeries\"]"
        },
        "index": {
          "description": "Evaluate series expression feeding it an unboxed vector The rate variable represents the length of the series",
          "hierarchy": "Data Array Repa Series Series",
          "module": "Data.Array.Repa.Series.Series",
          "name": "runSeries",
          "normalized": "Vector a-\u003e(b c Series d a-\u003ee)-\u003ee",
          "package": "repa-series",
          "partial": "Series",
          "signature": "Vector a-\u003e(forall k. Series k a-\u003eb)-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Series.html#v:runSeries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate a series expression, feeding it two unboxed vectors\n   of the same length.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Repa.Series.Series\",\"Data.Array.Repa.Series\"]",
          "name": "runSeries2",
          "package": "repa-series",
          "signature": "Vector a-\u003e Vector b-\u003e (forall k.  Series k a -\u003e Series k b -\u003e c)-\u003e Maybe c",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Series.html#v:runSeries2\",\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:runSeries2\"]"
        },
        "index": {
          "description": "Evaluate series expression feeding it two unboxed vectors of the same length",
          "hierarchy": "Data Array Repa Series Series",
          "module": "Data.Array.Repa.Series.Series",
          "name": "runSeries2",
          "normalized": "Vector a-\u003eVector b-\u003e(c d Series e a-\u003eSeries e b-\u003ef)-\u003eMaybe f",
          "package": "repa-series",
          "partial": "Series",
          "signature": "Vector a-\u003eVector b-\u003e(forall k. Series k a-\u003eSeries k b-\u003ec)-\u003eMaybe c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Series.html#v:runSeries2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThree!\n\u003c/p\u003e",
          "module": "[\"Data.Array.Repa.Series.Series\",\"Data.Array.Repa.Series\"]",
          "name": "runSeries3",
          "package": "repa-series",
          "signature": "Vector a-\u003e Vector b-\u003e Vector c-\u003e (forall k.  Series k a -\u003e Series k b -\u003e Series k c -\u003e d)-\u003e Maybe d",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Series.html#v:runSeries3\",\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:runSeries3\"]"
        },
        "index": {
          "description": "Three",
          "hierarchy": "Data Array Repa Series Series",
          "module": "Data.Array.Repa.Series.Series",
          "name": "runSeries3",
          "normalized": "Vector a-\u003eVector b-\u003eVector c-\u003e(d e Series f a-\u003eSeries f b-\u003eSeries f c-\u003eg)-\u003eMaybe g",
          "package": "repa-series",
          "partial": "Series",
          "signature": "Vector a-\u003eVector b-\u003eVector c-\u003e(forall k. Series k a-\u003eSeries k b-\u003eSeries k c-\u003ed)-\u003eMaybe d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Series.html#v:runSeries3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFour!\n\u003c/p\u003e",
          "module": "[\"Data.Array.Repa.Series.Series\",\"Data.Array.Repa.Series\"]",
          "name": "runSeries4",
          "package": "repa-series",
          "signature": "Vector a-\u003e Vector b-\u003e Vector c-\u003e Vector d-\u003e (forall k.  Series k a -\u003e Series k b -\u003e Series k c -\u003e Series k d -\u003e e)-\u003e Maybe e",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Series.html#v:runSeries4\",\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:runSeries4\"]"
        },
        "index": {
          "description": "Four",
          "hierarchy": "Data Array Repa Series Series",
          "module": "Data.Array.Repa.Series.Series",
          "name": "runSeries4",
          "normalized": "Vector a-\u003eVector b-\u003eVector c-\u003eVector d-\u003e(e f Series g a-\u003eSeries g b-\u003eSeries g c-\u003eSeries g d-\u003eh)-\u003eMaybe h",
          "package": "repa-series",
          "partial": "Series",
          "signature": "Vector a-\u003eVector b-\u003eVector c-\u003eVector d-\u003e(forall k. Series k a-\u003eSeries k b-\u003eSeries k c-\u003eSeries k d-\u003ee)-\u003eMaybe e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Series.html#v:runSeries4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Array.Repa.Series.Series\",\"Data.Array.Repa.Series\"]",
          "name": "seriesLength",
          "package": "repa-series",
          "signature": "Int#",
          "source": "src/Data-Array-Repa-Series-Series.html#Series",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Series.html#v:seriesLength\",\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:seriesLength\"]"
        },
        "index": {
          "hierarchy": "Data Array Repa Series Series",
          "module": "Data.Array.Repa.Series.Series",
          "name": "seriesLength",
          "package": "repa-series",
          "partial": "Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Series.html#v:seriesLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Array.Repa.Series.Series\",\"Data.Array.Repa.Series\"]",
          "name": "seriesVector",
          "package": "repa-series",
          "signature": "(Vector a)",
          "source": "src/Data-Array-Repa-Series-Series.html#Series",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Series.html#v:seriesVector\",\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:seriesVector\"]"
        },
        "index": {
          "hierarchy": "Data Array Repa Series Series",
          "module": "Data.Array.Repa.Series.Series",
          "name": "seriesVector",
          "package": "repa-series",
          "partial": "Vector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Series.html#v:seriesVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a series to a vector, discarding the rate information.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Series.Series",
          "name": "toVector",
          "package": "repa-series",
          "signature": "Series k a -\u003e Vector a",
          "source": "src/Data-Array-Repa-Series-Series.html#toVector",
          "type": "function"
        },
        "index": {
          "description": "Convert series to vector discarding the rate information",
          "hierarchy": "Data Array Repa Series Series",
          "module": "Data.Array.Repa.Series.Series",
          "name": "toVector",
          "normalized": "Series a b-\u003eVector b",
          "package": "repa-series",
          "partial": "Vector",
          "signature": "Series k a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Series.html#v:toVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.Series.Vector",
          "name": "Vector",
          "package": "repa-series",
          "source": "src/Data-Array-Repa-Series-Vector.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Array Repa Series Vector",
          "module": "Data.Array.Repa.Series.Vector",
          "name": "Vector",
          "package": "repa-series",
          "partial": "Vector",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Vector.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbstract mutable vector type that supports random access indexing.\n\u003c/p\u003e\u003cp\u003eUse \u003ccode\u003e\u003ca\u003efromUnboxed\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003etoUnboxed\u003c/a\u003e\u003c/code\u003e to convert to and from regular\n   immutable unboxed vectors.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Series.Vector",
          "name": "Vector",
          "package": "repa-series",
          "source": "src/Data-Array-Repa-Series-Vector.html#Vector",
          "type": "data"
        },
        "index": {
          "description": "Abstract mutable vector type that supports random access indexing Use fromUnboxed and toUnboxed to convert to and from regular immutable unboxed vectors",
          "hierarchy": "Data Array Repa Series Vector",
          "module": "Data.Array.Repa.Series.Vector",
          "name": "Vector",
          "package": "repa-series",
          "partial": "Vector",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Vector.html#t:Vector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Convert from an Unboxed vector.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Repa.Series.Vector\",\"Data.Array.Repa.Series\"]",
          "name": "fromUnboxed",
          "package": "repa-series",
          "signature": "Vector a -\u003e IO (Vector a)",
          "source": "src/Data-Array-Repa-Series-Vector.html#fromUnboxed",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Vector.html#v:fromUnboxed\",\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:fromUnboxed\"]"
        },
        "index": {
          "description": "Convert from an Unboxed vector",
          "hierarchy": "Data Array Repa Series Vector",
          "module": "Data.Array.Repa.Series.Vector",
          "name": "fromUnboxed",
          "normalized": "Vector a-\u003eIO(Vector a)",
          "package": "repa-series",
          "partial": "Unboxed",
          "signature": "Vector a-\u003eIO(Vector a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Vector.html#v:fromUnboxed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake the length of a vector.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Series.Vector",
          "name": "length",
          "package": "repa-series",
          "signature": "Vector a -\u003e Int#",
          "source": "src/Data-Array-Repa-Series-Vector.html#length",
          "type": "function"
        },
        "index": {
          "description": "Take the length of vector",
          "hierarchy": "Data Array Repa Series Vector",
          "module": "Data.Array.Repa.Series.Vector",
          "name": "length",
          "normalized": "Vector a-\u003eInt #",
          "package": "repa-series",
          "signature": "Vector a-\u003eInt #",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Vector.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new vector of the given length.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Series.Vector",
          "name": "new",
          "package": "repa-series",
          "signature": "Int# -\u003e IO (Vector a)",
          "source": "src/Data-Array-Repa-Series-Vector.html#new",
          "type": "function"
        },
        "index": {
          "description": "Create new vector of the given length",
          "hierarchy": "Data Array Repa Series Vector",
          "module": "Data.Array.Repa.Series.Vector",
          "name": "new",
          "normalized": "Int #-\u003eIO(Vector a)",
          "package": "repa-series",
          "signature": "Int #-\u003eIO(Vector a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Vector.html#v:new"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a value from a vector.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Series.Vector",
          "name": "read",
          "package": "repa-series",
          "signature": "Vector a -\u003e Int# -\u003e IO a",
          "source": "src/Data-Array-Repa-Series-Vector.html#read",
          "type": "function"
        },
        "index": {
          "description": "Read value from vector",
          "hierarchy": "Data Array Repa Series Vector",
          "module": "Data.Array.Repa.Series.Vector",
          "name": "read",
          "normalized": "Vector a-\u003eInt #-\u003eIO a",
          "package": "repa-series",
          "signature": "Vector a-\u003eInt #-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Vector.html#v:read"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake the first n elements of a vector\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Series.Vector",
          "name": "take",
          "package": "repa-series",
          "signature": "Int# -\u003e Vector a -\u003e IO (Vector a)",
          "source": "src/Data-Array-Repa-Series-Vector.html#take",
          "type": "function"
        },
        "index": {
          "description": "Take the first elements of vector",
          "hierarchy": "Data Array Repa Series Vector",
          "module": "Data.Array.Repa.Series.Vector",
          "name": "take",
          "normalized": "Int #-\u003eVector a-\u003eIO(Vector a)",
          "package": "repa-series",
          "signature": "Int #-\u003eVector a-\u003eIO(Vector a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Vector.html#v:take"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Convert to an Unboxed vector.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Repa.Series.Vector\",\"Data.Array.Repa.Series\"]",
          "name": "toUnboxed",
          "package": "repa-series",
          "signature": "Vector a -\u003e IO (Vector a)",
          "source": "src/Data-Array-Repa-Series-Vector.html#toUnboxed",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Vector.html#v:toUnboxed\",\"http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:toUnboxed\"]"
        },
        "index": {
          "description": "Convert to an Unboxed vector",
          "hierarchy": "Data Array Repa Series Vector",
          "module": "Data.Array.Repa.Series.Vector",
          "name": "toUnboxed",
          "normalized": "Vector a-\u003eIO(Vector a)",
          "package": "repa-series",
          "partial": "Unboxed",
          "signature": "Vector a-\u003eIO(Vector a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Vector.html#v:toUnboxed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a value into a vector.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Series.Vector",
          "name": "write",
          "package": "repa-series",
          "signature": "Vector a -\u003e Int# -\u003e a -\u003e IO ()",
          "source": "src/Data-Array-Repa-Series-Vector.html#write",
          "type": "function"
        },
        "index": {
          "description": "Write value into vector",
          "hierarchy": "Data Array Repa Series Vector",
          "module": "Data.Array.Repa.Series.Vector",
          "name": "write",
          "normalized": "Vector a-\u003eInt #-\u003ea-\u003eIO()",
          "package": "repa-series",
          "signature": "Vector a-\u003eInt #-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Vector.html#v:write"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Repa.Series",
          "name": "Series",
          "package": "repa-series",
          "source": "src/Data-Array-Repa-Series.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Array Repa Series",
          "module": "Data.Array.Repa.Series",
          "name": "Series",
          "package": "repa-series",
          "partial": "Series",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrimitives needed by the repa-plugin.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Series",
          "name": "Primitives",
          "package": "repa-series",
          "source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
          "type": "data"
        },
        "index": {
          "description": "Primitives needed by the repa-plugin",
          "hierarchy": "Data Array Repa Series",
          "module": "Data.Array.Repa.Series",
          "name": "Primitives",
          "package": "repa-series",
          "partial": "Primitives",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#t:Primitives"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelectors.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Series",
          "name": "Sel1",
          "package": "repa-series",
          "source": "src/Data-Array-Repa-Series-Sel.html#Sel1",
          "type": "data"
        },
        "index": {
          "description": "Selectors",
          "hierarchy": "Data Array Repa Series",
          "module": "Data.Array.Repa.Series",
          "name": "Sel1",
          "package": "repa-series",
          "partial": "Sel",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#t:Sel1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eSeries\u003c/a\u003e\u003c/code\u003e is an abstract source of element data and is consumed\n   by series processes. The elements of a series must be consumed\n   sequentially, so they don't support random access indexing.\n\u003c/p\u003e\u003cp\u003eThe rate parameter \u003ccode\u003ek\u003c/code\u003e represents the abstract length of the series.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Series",
          "name": "Series",
          "package": "repa-series",
          "source": "src/Data-Array-Repa-Series-Series.html#Series",
          "type": "data"
        },
        "index": {
          "description": "Series is an abstract source of element data and is consumed by series processes The elements of series must be consumed sequentially so they don support random access indexing The rate parameter represents the abstract length of the series",
          "hierarchy": "Data Array Repa Series",
          "module": "Data.Array.Repa.Series",
          "name": "Series",
          "package": "repa-series",
          "partial": "Series",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#t:Series"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbstract mutable vector type that supports random access indexing.\n\u003c/p\u003e\u003cp\u003eUse \u003ccode\u003e\u003ca\u003efromUnboxed\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003etoUnboxed\u003c/a\u003e\u003c/code\u003e to convert to and from regular\n   immutable unboxed vectors.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.Series",
          "name": "Vector",
          "package": "repa-series",
          "source": "src/Data-Array-Repa-Series-Vector.html#Vector",
          "type": "data"
        },
        "index": {
          "description": "Abstract mutable vector type that supports random access indexing Use fromUnboxed and toUnboxed to convert to and from regular immutable unboxed vectors",
          "hierarchy": "Data Array Repa Series",
          "module": "Data.Array.Repa.Series",
          "name": "Vector",
          "package": "repa-series",
          "partial": "Vector",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#t:Vector"
      }
    }
  ]
]