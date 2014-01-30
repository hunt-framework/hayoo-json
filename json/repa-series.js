[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Fallback.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFallback implementations of Series operators.\n\u003c/p\u003e\u003cp\u003eCode using these series operators is typically fused and vectorised by\n   the Repa plugin. If this transformation is successful then the resulting\n   GHC Core program will use primitives from the \u003ccode\u003eData.Array.Repa.Series.Prim\u003c/code\u003e\n   module instead. If the fusion process is not successful then the implementations\n   in this module will be used directly.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Array.Repa.Series.Fallback",
        "fct-package": "repa-series",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Repa-Series-Fallback.html",
        "fct-type": "module",
        "title": "Fallback"
      },
      "index": {
        "description": "Fallback implementations of Series operators Code using these series operators is typically fused and vectorised by the Repa plugin If this transformation is successful then the resulting GHC Core program will use primitives from the Data.Array.Repa.Series.Prim module instead If the fusion process is not successful then the implementations in this module will be used directly",
        "hierarchy": "Data Array Repa Series Fallback",
        "module": "Data.Array.Repa.Series.Fallback",
        "name": "Fallback",
        "normalized": "",
        "package": "repa-series",
        "partial": "Fallback",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Fallback.html#v:fold",
      "description": {
        "fct-descr": "\u003cp\u003eCombine all elements of a series with an associative operator.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Repa.Series.Fallback",
        "fct-package": "repa-series",
        "fct-signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e Series k b -\u003e a",
        "fct-source": "src/Data-Array-Repa-Series-Fallback.html#fold",
        "fct-type": "function",
        "title": "fold"
      },
      "index": {
        "description": "Combine all elements of series with an associative operator",
        "hierarchy": "Data Array Repa Series Fallback",
        "module": "Data.Array.Repa.Series.Fallback",
        "name": "fold",
        "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eSeries c b-\u003ea",
        "package": "repa-series",
        "partial": "",
        "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003eSeries k b-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Fallback.html#v:foldIndex",
      "description": {
        "fct-descr": "\u003cp\u003eCombine all elements of a series with an associative operator.\n   The worker function is given the current index into the series.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Repa.Series.Fallback",
        "fct-package": "repa-series",
        "fct-signature": "(Int# -\u003e a -\u003e b -\u003e a) -\u003e a -\u003e Series k b -\u003e a",
        "fct-source": "src/Data-Array-Repa-Series-Fallback.html#foldIndex",
        "fct-type": "function",
        "title": "foldIndex"
      },
      "index": {
        "description": "Combine all elements of series with an associative operator The worker function is given the current index into the series",
        "hierarchy": "Data Array Repa Series Fallback",
        "module": "Data.Array.Repa.Series.Fallback",
        "name": "foldIndex",
        "normalized": "(Int #-\u003ea-\u003eb-\u003ea)-\u003ea-\u003eSeries c b-\u003ea",
        "package": "repa-series",
        "partial": "Index",
        "signature": "(Int #-\u003ea-\u003eb-\u003ea)-\u003ea-\u003eSeries k b-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Fallback.html#v:map",
      "description": {
        "fct-descr": "\u003cp\u003eApply a function to all elements of a series.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Repa.Series.Fallback",
        "fct-package": "repa-series",
        "fct-signature": "(a -\u003e b) -\u003e Series k a -\u003e Series k b",
        "fct-source": "src/Data-Array-Repa-Series-Fallback.html#map",
        "fct-type": "function",
        "title": "map"
      },
      "index": {
        "description": "Apply function to all elements of series",
        "hierarchy": "Data Array Repa Series Fallback",
        "module": "Data.Array.Repa.Series.Fallback",
        "name": "map",
        "normalized": "(a-\u003eb)-\u003eSeries c a-\u003eSeries c b",
        "package": "repa-series",
        "partial": "",
        "signature": "(a-\u003eb)-\u003eSeries k a-\u003eSeries k b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Fallback.html#v:map2",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e, but for equal-length series\n\u003c/p\u003e",
        "fct-module": "Data.Array.Repa.Series.Fallback",
        "fct-package": "repa-series",
        "fct-signature": "(a -\u003e b -\u003e c) -\u003e Series k a -\u003e Series k b -\u003e Series k c",
        "fct-source": "src/Data-Array-Repa-Series-Fallback.html#map2",
        "fct-type": "function",
        "title": "map2"
      },
      "index": {
        "description": "Like zipWith but for equal-length series",
        "hierarchy": "Data Array Repa Series Fallback",
        "module": "Data.Array.Repa.Series.Fallback",
        "name": "map2",
        "normalized": "(a-\u003eb-\u003ec)-\u003eSeries d a-\u003eSeries d b-\u003eSeries d c",
        "package": "repa-series",
        "partial": "",
        "signature": "(a-\u003eb-\u003ec)-\u003eSeries k a-\u003eSeries k b-\u003eSeries k c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Fallback.html#v:pack",
      "description": {
        "fct-descr": "\u003cp\u003ePack elements of a series using a selector.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Repa.Series.Fallback",
        "fct-package": "repa-series",
        "fct-signature": "Sel1 k1 k2 -\u003e Series k1 a -\u003e Series k2 a",
        "fct-source": "src/Data-Array-Repa-Series-Fallback.html#pack",
        "fct-type": "function",
        "title": "pack"
      },
      "index": {
        "description": "Pack elements of series using selector",
        "hierarchy": "Data Array Repa Series Fallback",
        "module": "Data.Array.Repa.Series.Fallback",
        "name": "pack",
        "normalized": "Sel a a-\u003eSeries a b-\u003eSeries a b",
        "package": "repa-series",
        "partial": "",
        "signature": "Sel k k-\u003eSeries k a-\u003eSeries k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003erepa-plugin\u003c/code\u003e rewrites client code to use these primitives.\n\u003c/p\u003e\u003cp\u003eThe plugin will use whatever names are in scope, so if you want to debug\n   your code you can import a different implementation of these primitives\n   into the module to be vectorized.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Array.Repa.Series.Prim",
        "fct-package": "repa-series",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Repa-Series-Prim.html",
        "fct-type": "module",
        "title": "Prim"
      },
      "index": {
        "description": "The repa-plugin rewrites client code to use these primitives The plugin will use whatever names are in scope so if you want to debug your code you can import different implementation of these primitives into the module to be vectorized",
        "hierarchy": "Data Array Repa Series Prim",
        "module": "Data.Array.Repa.Series.Prim",
        "name": "Prim",
        "normalized": "",
        "package": "repa-series",
        "partial": "Prim",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#t:Primitives",
      "description": {
        "fct-descr": "\u003cp\u003ePrimitives needed by the repa-plugin.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Repa.Series.Prim",
        "fct-package": "repa-series",
        "fct-signature": "data",
        "fct-source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
        "fct-type": "data",
        "title": "Primitives"
      },
      "index": {
        "description": "Primitives needed by the repa-plugin",
        "hierarchy": "Data Array Repa Series Prim",
        "module": "Data.Array.Repa.Series.Prim",
        "name": "Primitives",
        "normalized": "",
        "package": "repa-series",
        "partial": "Primitives",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:Primitives",
      "description": {
        "fct-module": "Data.Array.Repa.Series.Prim",
        "fct-package": "repa-series",
        "fct-signature": "Primitives",
        "fct-source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
        "fct-type": "function",
        "title": "Primitives"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa Series Prim",
        "module": "Data.Array.Repa.Series.Prim",
        "name": "Primitives",
        "normalized": "",
        "package": "repa-series",
        "partial": "Primitives",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_Ref",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Array.Repa.Series.Prim",
        "fct-package": "repa-series",
        "fct-signature": "forall a.  Ref a",
        "fct-source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
        "fct-type": "function",
        "title": "prim_Ref"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa Series Prim",
        "module": "Data.Array.Repa.Series.Prim",
        "name": "prim_Ref",
        "normalized": "",
        "package": "repa-series",
        "partial": "Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_Series",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Array.Repa.Series.Prim",
        "fct-package": "repa-series",
        "fct-signature": "forall k a.  Series k a",
        "fct-source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
        "fct-type": "function",
        "title": "prim_Series"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa Series Prim",
        "module": "Data.Array.Repa.Series.Prim",
        "name": "prim_Series",
        "normalized": "",
        "package": "repa-series",
        "partial": "Series",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_Vector",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Array.Repa.Series.Prim",
        "fct-package": "repa-series",
        "fct-signature": "forall a.  Vector a",
        "fct-source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
        "fct-type": "function",
        "title": "prim_Vector"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa Series Prim",
        "module": "Data.Array.Repa.Series.Prim",
        "name": "prim_Vector",
        "normalized": "",
        "package": "repa-series",
        "partial": "Vector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_addInt",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Array.Repa.Series.Prim",
        "fct-package": "repa-series",
        "fct-signature": "Int# -\u003e Int# -\u003e Int#",
        "fct-source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
        "fct-type": "function",
        "title": "prim_addInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa Series Prim",
        "module": "Data.Array.Repa.Series.Prim",
        "name": "prim_addInt",
        "normalized": "Int #-\u003eInt #-\u003eInt #",
        "package": "repa-series",
        "partial": "Int",
        "signature": "Int #-\u003eInt #-\u003eInt #"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_divInt",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Array.Repa.Series.Prim",
        "fct-package": "repa-series",
        "fct-signature": "Int# -\u003e Int# -\u003e Int#",
        "fct-source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
        "fct-type": "function",
        "title": "prim_divInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa Series Prim",
        "module": "Data.Array.Repa.Series.Prim",
        "name": "prim_divInt",
        "normalized": "Int #-\u003eInt #-\u003eInt #",
        "package": "repa-series",
        "partial": "Int",
        "signature": "Int #-\u003eInt #-\u003eInt #"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_eqInt",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Array.Repa.Series.Prim",
        "fct-package": "repa-series",
        "fct-signature": "Int# -\u003e Int# -\u003e Bool",
        "fct-source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
        "fct-type": "function",
        "title": "prim_eqInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa Series Prim",
        "module": "Data.Array.Repa.Series.Prim",
        "name": "prim_eqInt",
        "normalized": "Int #-\u003eInt #-\u003eBool",
        "package": "repa-series",
        "partial": "Int",
        "signature": "Int #-\u003eInt #-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_geInt",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Array.Repa.Series.Prim",
        "fct-package": "repa-series",
        "fct-signature": "Int# -\u003e Int# -\u003e Bool",
        "fct-source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
        "fct-type": "function",
        "title": "prim_geInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa Series Prim",
        "module": "Data.Array.Repa.Series.Prim",
        "name": "prim_geInt",
        "normalized": "Int #-\u003eInt #-\u003eBool",
        "package": "repa-series",
        "partial": "Int",
        "signature": "Int #-\u003eInt #-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_gtInt",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Array.Repa.Series.Prim",
        "fct-package": "repa-series",
        "fct-signature": "Int# -\u003e Int# -\u003e Bool",
        "fct-source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
        "fct-type": "function",
        "title": "prim_gtInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa Series Prim",
        "module": "Data.Array.Repa.Series.Prim",
        "name": "prim_gtInt",
        "normalized": "Int #-\u003eInt #-\u003eBool",
        "package": "repa-series",
        "partial": "Int",
        "signature": "Int #-\u003eInt #-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_guard",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Array.Repa.Series.Prim",
        "fct-package": "repa-series",
        "fct-signature": "Ref Int -\u003e Bool -\u003e (Int# -\u003e World -\u003e World) -\u003e World -\u003e World",
        "fct-source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
        "fct-type": "function",
        "title": "prim_guard"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa Series Prim",
        "module": "Data.Array.Repa.Series.Prim",
        "name": "prim_guard",
        "normalized": "Ref Int-\u003eBool-\u003e(Int #-\u003eWorld-\u003eWorld)-\u003eWorld-\u003eWorld",
        "package": "repa-series",
        "partial": "",
        "signature": "Ref Int-\u003eBool-\u003e(Int #-\u003eWorld-\u003eWorld)-\u003eWorld-\u003eWorld"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_leInt",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Array.Repa.Series.Prim",
        "fct-package": "repa-series",
        "fct-signature": "Int# -\u003e Int# -\u003e Bool",
        "fct-source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
        "fct-type": "function",
        "title": "prim_leInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa Series Prim",
        "module": "Data.Array.Repa.Series.Prim",
        "name": "prim_leInt",
        "normalized": "Int #-\u003eInt #-\u003eBool",
        "package": "repa-series",
        "partial": "Int",
        "signature": "Int #-\u003eInt #-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_loop",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Array.Repa.Series.Prim",
        "fct-package": "repa-series",
        "fct-signature": "Int# -\u003e (Int# -\u003e World -\u003e World) -\u003e World -\u003e World",
        "fct-source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
        "fct-type": "function",
        "title": "prim_loop"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa Series Prim",
        "module": "Data.Array.Repa.Series.Prim",
        "name": "prim_loop",
        "normalized": "Int #-\u003e(Int #-\u003eWorld-\u003eWorld)-\u003eWorld-\u003eWorld",
        "package": "repa-series",
        "partial": "",
        "signature": "Int #-\u003e(Int #-\u003eWorld-\u003eWorld)-\u003eWorld-\u003eWorld"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_ltInt",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Array.Repa.Series.Prim",
        "fct-package": "repa-series",
        "fct-signature": "Int# -\u003e Int# -\u003e Bool",
        "fct-source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
        "fct-type": "function",
        "title": "prim_ltInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa Series Prim",
        "module": "Data.Array.Repa.Series.Prim",
        "name": "prim_ltInt",
        "normalized": "Int #-\u003eInt #-\u003eBool",
        "package": "repa-series",
        "partial": "Int",
        "signature": "Int #-\u003eInt #-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_modInt",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Array.Repa.Series.Prim",
        "fct-package": "repa-series",
        "fct-signature": "Int# -\u003e Int# -\u003e Int#",
        "fct-source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
        "fct-type": "function",
        "title": "prim_modInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa Series Prim",
        "module": "Data.Array.Repa.Series.Prim",
        "name": "prim_modInt",
        "normalized": "Int #-\u003eInt #-\u003eInt #",
        "package": "repa-series",
        "partial": "Int",
        "signature": "Int #-\u003eInt #-\u003eInt #"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_mulInt",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Array.Repa.Series.Prim",
        "fct-package": "repa-series",
        "fct-signature": "Int# -\u003e Int# -\u003e Int#",
        "fct-source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
        "fct-type": "function",
        "title": "prim_mulInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa Series Prim",
        "module": "Data.Array.Repa.Series.Prim",
        "name": "prim_mulInt",
        "normalized": "Int #-\u003eInt #-\u003eInt #",
        "package": "repa-series",
        "partial": "Int",
        "signature": "Int #-\u003eInt #-\u003eInt #"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_neqInt",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Array.Repa.Series.Prim",
        "fct-package": "repa-series",
        "fct-signature": "Int# -\u003e Int# -\u003e Bool",
        "fct-source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
        "fct-type": "function",
        "title": "prim_neqInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa Series Prim",
        "module": "Data.Array.Repa.Series.Prim",
        "name": "prim_neqInt",
        "normalized": "Int #-\u003eInt #-\u003eBool",
        "package": "repa-series",
        "partial": "Int",
        "signature": "Int #-\u003eInt #-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_newRefInt",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Array.Repa.Series.Prim",
        "fct-package": "repa-series",
        "fct-signature": "Int# -\u003e World -\u003e (#World, Ref Int#)",
        "fct-source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
        "fct-type": "function",
        "title": "prim_newRefInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa Series Prim",
        "module": "Data.Array.Repa.Series.Prim",
        "name": "prim_newRefInt",
        "normalized": "Int #-\u003eWorld-\u003e(#World,Ref Int #)",
        "package": "repa-series",
        "partial": "Ref Int",
        "signature": "Int #-\u003eWorld-\u003e(#World,Ref Int #)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_newRefInt_T2",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Array.Repa.Series.Prim",
        "fct-package": "repa-series",
        "fct-signature": "(#Int#, Int##) -\u003e World -\u003e (#World, Ref (Int, Int)#)",
        "fct-source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
        "fct-type": "function",
        "title": "prim_newRefInt_T2"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa Series Prim",
        "module": "Data.Array.Repa.Series.Prim",
        "name": "prim_newRefInt_T2",
        "normalized": "(#Int #,Int # #)-\u003eWorld-\u003e(#World,Ref(Int,Int)#)",
        "package": "repa-series",
        "partial": "Ref Int",
        "signature": "(#Int #,Int # #)-\u003eWorld-\u003e(#World,Ref(Int,Int)#)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_newVectorInt",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Array.Repa.Series.Prim",
        "fct-package": "repa-series",
        "fct-signature": "Int# -\u003e World -\u003e (#World, Vector Int#)",
        "fct-source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
        "fct-type": "function",
        "title": "prim_newVectorInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa Series Prim",
        "module": "Data.Array.Repa.Series.Prim",
        "name": "prim_newVectorInt",
        "normalized": "Int #-\u003eWorld-\u003e(#World,Vector Int #)",
        "package": "repa-series",
        "partial": "Vector Int",
        "signature": "Int #-\u003eWorld-\u003e(#World,Vector Int #)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_nextInt",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Array.Repa.Series.Prim",
        "fct-package": "repa-series",
        "fct-signature": "forall k.  Series k Int -\u003e Int# -\u003e World -\u003e (#World, Int##)",
        "fct-source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
        "fct-type": "function",
        "title": "prim_nextInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa Series Prim",
        "module": "Data.Array.Repa.Series.Prim",
        "name": "prim_nextInt",
        "normalized": "a b Series c Int-\u003eInt #-\u003eWorld-\u003e(#World,Int # #)",
        "package": "repa-series",
        "partial": "Int",
        "signature": "forall k. Series k Int-\u003eInt #-\u003eWorld-\u003e(#World,Int # #)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_nextInt_T2",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Array.Repa.Series.Prim",
        "fct-package": "repa-series",
        "fct-signature": "forall k.  Series k (Int, Int) -\u003e Int# -\u003e World -\u003e (#World, (#Int#, Int##)#)",
        "fct-source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
        "fct-type": "function",
        "title": "prim_nextInt_T2"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa Series Prim",
        "module": "Data.Array.Repa.Series.Prim",
        "name": "prim_nextInt_T2",
        "normalized": "a b Series c(Int,Int)-\u003eInt #-\u003eWorld-\u003e(#World,(#Int #,Int # #)#)",
        "package": "repa-series",
        "partial": "Int",
        "signature": "forall k. Series k(Int,Int)-\u003eInt #-\u003eWorld-\u003e(#World,(#Int #,Int # #)#)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_rateOfSeries",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Array.Repa.Series.Prim",
        "fct-package": "repa-series",
        "fct-signature": "forall k a.  Series k a -\u003e Int#",
        "fct-source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
        "fct-type": "function",
        "title": "prim_rateOfSeries"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa Series Prim",
        "module": "Data.Array.Repa.Series.Prim",
        "name": "prim_rateOfSeries",
        "normalized": "a b c Series b d-\u003eInt #",
        "package": "repa-series",
        "partial": "Of Series",
        "signature": "forall k a. Series k a-\u003eInt #"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_readRefInt",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Array.Repa.Series.Prim",
        "fct-package": "repa-series",
        "fct-signature": "Ref Int -\u003e World -\u003e (#World, Int##)",
        "fct-source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
        "fct-type": "function",
        "title": "prim_readRefInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa Series Prim",
        "module": "Data.Array.Repa.Series.Prim",
        "name": "prim_readRefInt",
        "normalized": "Ref Int-\u003eWorld-\u003e(#World,Int # #)",
        "package": "repa-series",
        "partial": "Ref Int",
        "signature": "Ref Int-\u003eWorld-\u003e(#World,Int # #)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_readRefInt_T2",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Array.Repa.Series.Prim",
        "fct-package": "repa-series",
        "fct-signature": "Ref (Int, Int) -\u003e World -\u003e (#World, (#Int#, Int##)#)",
        "fct-source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
        "fct-type": "function",
        "title": "prim_readRefInt_T2"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa Series Prim",
        "module": "Data.Array.Repa.Series.Prim",
        "name": "prim_readRefInt_T2",
        "normalized": "Ref(Int,Int)-\u003eWorld-\u003e(#World,(#Int #,Int # #)#)",
        "package": "repa-series",
        "partial": "Ref Int",
        "signature": "Ref(Int,Int)-\u003eWorld-\u003e(#World,(#Int #,Int # #)#)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_readVectorInt",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Array.Repa.Series.Prim",
        "fct-package": "repa-series",
        "fct-signature": "Vector Int -\u003e Int# -\u003e World -\u003e (#World, Int##)",
        "fct-source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
        "fct-type": "function",
        "title": "prim_readVectorInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa Series Prim",
        "module": "Data.Array.Repa.Series.Prim",
        "name": "prim_readVectorInt",
        "normalized": "Vector Int-\u003eInt #-\u003eWorld-\u003e(#World,Int # #)",
        "package": "repa-series",
        "partial": "Vector Int",
        "signature": "Vector Int-\u003eInt #-\u003eWorld-\u003e(#World,Int # #)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_remInt",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Array.Repa.Series.Prim",
        "fct-package": "repa-series",
        "fct-signature": "Int# -\u003e Int# -\u003e Int#",
        "fct-source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
        "fct-type": "function",
        "title": "prim_remInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa Series Prim",
        "module": "Data.Array.Repa.Series.Prim",
        "name": "prim_remInt",
        "normalized": "Int #-\u003eInt #-\u003eInt #",
        "package": "repa-series",
        "partial": "Int",
        "signature": "Int #-\u003eInt #-\u003eInt #"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_sliceVectorInt",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Array.Repa.Series.Prim",
        "fct-package": "repa-series",
        "fct-signature": "Int# -\u003e Vector Int -\u003e World -\u003e (#World, Vector Int#)",
        "fct-source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
        "fct-type": "function",
        "title": "prim_sliceVectorInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa Series Prim",
        "module": "Data.Array.Repa.Series.Prim",
        "name": "prim_sliceVectorInt",
        "normalized": "Int #-\u003eVector Int-\u003eWorld-\u003e(#World,Vector Int #)",
        "package": "repa-series",
        "partial": "Vector Int",
        "signature": "Int #-\u003eVector Int-\u003eWorld-\u003e(#World,Vector Int #)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_subInt",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Array.Repa.Series.Prim",
        "fct-package": "repa-series",
        "fct-signature": "Int# -\u003e Int# -\u003e Int#",
        "fct-source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
        "fct-type": "function",
        "title": "prim_subInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa Series Prim",
        "module": "Data.Array.Repa.Series.Prim",
        "name": "prim_subInt",
        "normalized": "Int #-\u003eInt #-\u003eInt #",
        "package": "repa-series",
        "partial": "Int",
        "signature": "Int #-\u003eInt #-\u003eInt #"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_writeRefInt",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Array.Repa.Series.Prim",
        "fct-package": "repa-series",
        "fct-signature": "Ref Int -\u003e Int# -\u003e World -\u003e World",
        "fct-source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
        "fct-type": "function",
        "title": "prim_writeRefInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa Series Prim",
        "module": "Data.Array.Repa.Series.Prim",
        "name": "prim_writeRefInt",
        "normalized": "Ref Int-\u003eInt #-\u003eWorld-\u003eWorld",
        "package": "repa-series",
        "partial": "Ref Int",
        "signature": "Ref Int-\u003eInt #-\u003eWorld-\u003eWorld"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_writeRefInt_T2",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Array.Repa.Series.Prim",
        "fct-package": "repa-series",
        "fct-signature": "Ref (Int, Int) -\u003e (#Int#, Int##) -\u003e World -\u003e World",
        "fct-source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
        "fct-type": "function",
        "title": "prim_writeRefInt_T2"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa Series Prim",
        "module": "Data.Array.Repa.Series.Prim",
        "name": "prim_writeRefInt_T2",
        "normalized": "Ref(Int,Int)-\u003e(#Int #,Int # #)-\u003eWorld-\u003eWorld",
        "package": "repa-series",
        "partial": "Ref Int",
        "signature": "Ref(Int,Int)-\u003e(#Int #,Int # #)-\u003eWorld-\u003eWorld"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:prim_writeVectorInt",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Array.Repa.Series.Prim",
        "fct-package": "repa-series",
        "fct-signature": "Vector Int -\u003e Int# -\u003e Int# -\u003e World -\u003e World",
        "fct-source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
        "fct-type": "function",
        "title": "prim_writeVectorInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa Series Prim",
        "module": "Data.Array.Repa.Series.Prim",
        "name": "prim_writeVectorInt",
        "normalized": "Vector Int-\u003eInt #-\u003eInt #-\u003eWorld-\u003eWorld",
        "package": "repa-series",
        "partial": "Vector Int",
        "signature": "Vector Int-\u003eInt #-\u003eInt #-\u003eWorld-\u003eWorld"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Prim.html#v:primitives",
      "description": {
        "fct-descr": "\u003cp\u003eTable of primitives used by the repa-plugin.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Repa.Series.Prim",
        "fct-package": "repa-series",
        "fct-signature": "Primitives",
        "fct-source": "src/Data-Array-Repa-Series-Prim.html#primitives",
        "fct-type": "function",
        "title": "primitives"
      },
      "index": {
        "description": "Table of primitives used by the repa-plugin",
        "hierarchy": "Data Array Repa Series Prim",
        "module": "Data.Array.Repa.Series.Prim",
        "name": "primitives",
        "normalized": "",
        "package": "repa-series",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Ref.html#",
      "description": {
        "fct-module": "Data.Array.Repa.Series.Ref",
        "fct-package": "repa-series",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Repa-Series-Ref.html",
        "fct-type": "module",
        "title": "Ref"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa Series Ref",
        "module": "Data.Array.Repa.Series.Ref",
        "name": "Ref",
        "normalized": "",
        "package": "repa-series",
        "partial": "Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Ref.html#t:Ref",
      "description": {
        "fct-descr": "\u003cp\u003eMutable references.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Repa.Series.Ref",
        "fct-package": "repa-series",
        "fct-signature": "data",
        "fct-source": "src/Data-Array-Repa-Series-Ref.html#Ref",
        "fct-type": "data",
        "title": "Ref"
      },
      "index": {
        "description": "Mutable references",
        "hierarchy": "Data Array Repa Series Ref",
        "module": "Data.Array.Repa.Series.Ref",
        "name": "Ref",
        "normalized": "",
        "package": "repa-series",
        "partial": "Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Ref.html#v:Ref",
      "description": {
        "fct-module": "Data.Array.Repa.Series.Ref",
        "fct-package": "repa-series",
        "fct-signature": "Ref !(IOVector a)",
        "fct-source": "src/Data-Array-Repa-Series-Ref.html#Ref",
        "fct-type": "function",
        "title": "Ref"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa Series Ref",
        "module": "Data.Array.Repa.Series.Ref",
        "name": "Ref",
        "normalized": "",
        "package": "repa-series",
        "partial": "Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Ref.html#v:new",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new unboxed reference.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Repa.Series.Ref",
        "fct-package": "repa-series",
        "fct-signature": "a -\u003e IO (Ref a)",
        "fct-source": "src/Data-Array-Repa-Series-Ref.html#new",
        "fct-type": "function",
        "title": "new"
      },
      "index": {
        "description": "Create new unboxed reference",
        "hierarchy": "Data Array Repa Series Ref",
        "module": "Data.Array.Repa.Series.Ref",
        "name": "new",
        "normalized": "a-\u003eIO(Ref a)",
        "package": "repa-series",
        "partial": "",
        "signature": "a-\u003eIO(Ref a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Ref.html#v:read",
      "description": {
        "fct-descr": "\u003cp\u003eRead from an unboxed reference.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Repa.Series.Ref",
        "fct-package": "repa-series",
        "fct-signature": "Ref a -\u003e IO a",
        "fct-source": "src/Data-Array-Repa-Series-Ref.html#read",
        "fct-type": "function",
        "title": "read"
      },
      "index": {
        "description": "Read from an unboxed reference",
        "hierarchy": "Data Array Repa Series Ref",
        "module": "Data.Array.Repa.Series.Ref",
        "name": "read",
        "normalized": "Ref a-\u003eIO a",
        "package": "repa-series",
        "partial": "",
        "signature": "Ref a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Ref.html#v:write",
      "description": {
        "fct-descr": "\u003cp\u003eWrite to an unboxed reference.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Repa.Series.Ref",
        "fct-package": "repa-series",
        "fct-signature": "Ref a -\u003e a -\u003e IO ()",
        "fct-source": "src/Data-Array-Repa-Series-Ref.html#write",
        "fct-type": "function",
        "title": "write"
      },
      "index": {
        "description": "Write to an unboxed reference",
        "hierarchy": "Data Array Repa Series Ref",
        "module": "Data.Array.Repa.Series.Ref",
        "name": "write",
        "normalized": "Ref a-\u003ea-\u003eIO()",
        "package": "repa-series",
        "partial": "",
        "signature": "Ref a-\u003ea-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Sel.html#",
      "description": {
        "fct-module": "Data.Array.Repa.Series.Sel",
        "fct-package": "repa-series",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Repa-Series-Sel.html",
        "fct-type": "module",
        "title": "Sel"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa Series Sel",
        "module": "Data.Array.Repa.Series.Sel",
        "name": "Sel",
        "normalized": "",
        "package": "repa-series",
        "partial": "Sel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Sel.html#t:Sel1",
      "description": {
        "fct-descr": "\u003cp\u003eSelectors.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Repa.Series.Sel",
        "fct-package": "repa-series",
        "fct-signature": "data",
        "fct-source": "src/Data-Array-Repa-Series-Sel.html#Sel1",
        "fct-type": "data",
        "title": "Sel1"
      },
      "index": {
        "description": "Selectors",
        "hierarchy": "Data Array Repa Series Sel",
        "module": "Data.Array.Repa.Series.Sel",
        "name": "Sel1",
        "normalized": "",
        "package": "repa-series",
        "partial": "Sel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Sel.html#v:Sel1",
      "description": {
        "fct-module": "Data.Array.Repa.Series.Sel",
        "fct-package": "repa-series",
        "fct-signature": "Sel1",
        "fct-source": "src/Data-Array-Repa-Series-Sel.html#Sel1",
        "fct-type": "function",
        "title": "Sel1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa Series Sel",
        "module": "Data.Array.Repa.Series.Sel",
        "name": "Sel1",
        "normalized": "",
        "package": "repa-series",
        "partial": "Sel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Sel.html#v:mkSel1",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new selector from a series of flags.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Repa.Series.Sel",
        "fct-package": "repa-series",
        "fct-signature": "Series k1 Bool -\u003e (forall k2.  Sel1 k1 k2 -\u003e a) -\u003e a",
        "fct-source": "src/Data-Array-Repa-Series-Sel.html#mkSel1",
        "fct-type": "function",
        "title": "mkSel1"
      },
      "index": {
        "description": "Create new selector from series of flags",
        "hierarchy": "Data Array Repa Series Sel",
        "module": "Data.Array.Repa.Series.Sel",
        "name": "mkSel1",
        "normalized": "Series a Bool-\u003e(b a Sel a a-\u003ec)-\u003ec",
        "package": "repa-series",
        "partial": "Sel",
        "signature": "Series k Bool-\u003e(forall k Sel k k-\u003ea)-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Sel.html#v:sel1Flags",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Array.Repa.Series.Sel",
        "fct-package": "repa-series",
        "fct-signature": "!(Vector Bool)",
        "fct-source": "src/Data-Array-Repa-Series-Sel.html#Sel1",
        "fct-type": "function",
        "title": "sel1Flags"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa Series Sel",
        "module": "Data.Array.Repa.Series.Sel",
        "name": "sel1Flags",
        "normalized": "",
        "package": "repa-series",
        "partial": "Flags",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Sel.html#v:sel1Length",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Array.Repa.Series.Sel",
        "fct-package": "repa-series",
        "fct-signature": "Int#",
        "fct-source": "src/Data-Array-Repa-Series-Sel.html#Sel1",
        "fct-type": "function",
        "title": "sel1Length"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa Series Sel",
        "module": "Data.Array.Repa.Series.Sel",
        "name": "sel1Length",
        "normalized": "",
        "package": "repa-series",
        "partial": "Length",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Series.html#",
      "description": {
        "fct-module": "Data.Array.Repa.Series.Series",
        "fct-package": "repa-series",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Repa-Series-Series.html",
        "fct-type": "module",
        "title": "Series"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa Series Series",
        "module": "Data.Array.Repa.Series.Series",
        "name": "Series",
        "normalized": "",
        "package": "repa-series",
        "partial": "Series",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Series.html#t:Series",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eSeries\u003c/a\u003e\u003c/code\u003e is an abstract source of element data and is consumed\n   by series processes. The elements of a series must be consumed\n   sequentially, so they don't support random access indexing.\n\u003c/p\u003e\u003cp\u003eThe rate parameter \u003ccode\u003ek\u003c/code\u003e represents the abstract length of the series.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Repa.Series.Series",
        "fct-package": "repa-series",
        "fct-signature": "data",
        "fct-source": "src/Data-Array-Repa-Series-Series.html#Series",
        "fct-type": "data",
        "title": "Series"
      },
      "index": {
        "description": "Series is an abstract source of element data and is consumed by series processes The elements of series must be consumed sequentially so they don support random access indexing The rate parameter represents the abstract length of the series",
        "hierarchy": "Data Array Repa Series Series",
        "module": "Data.Array.Repa.Series.Series",
        "name": "Series",
        "normalized": "",
        "package": "repa-series",
        "partial": "Series",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Series.html#v:Series",
      "description": {
        "fct-module": "Data.Array.Repa.Series.Series",
        "fct-package": "repa-series",
        "fct-signature": "Series",
        "fct-source": "src/Data-Array-Repa-Series-Series.html#Series",
        "fct-type": "function",
        "title": "Series"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa Series Series",
        "module": "Data.Array.Repa.Series.Series",
        "name": "Series",
        "normalized": "",
        "package": "repa-series",
        "partial": "Series",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Series.html#v:index",
      "description": {
        "fct-descr": "\u003cp\u003eIndex into a series.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Repa.Series.Series",
        "fct-package": "repa-series",
        "fct-signature": "Series k a -\u003e Int# -\u003e a",
        "fct-source": "src/Data-Array-Repa-Series-Series.html#index",
        "fct-type": "function",
        "title": "index"
      },
      "index": {
        "description": "Index into series",
        "hierarchy": "Data Array Repa Series Series",
        "module": "Data.Array.Repa.Series.Series",
        "name": "index",
        "normalized": "Series a b-\u003eInt #-\u003eb",
        "package": "repa-series",
        "partial": "",
        "signature": "Series k a-\u003eInt #-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Series.html#v:length",
      "description": {
        "fct-descr": "\u003cp\u003eTake the length of a series.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Repa.Series.Series",
        "fct-package": "repa-series",
        "fct-signature": "Series k a -\u003e Int#",
        "fct-source": "src/Data-Array-Repa-Series-Series.html#length",
        "fct-type": "function",
        "title": "length"
      },
      "index": {
        "description": "Take the length of series",
        "hierarchy": "Data Array Repa Series Series",
        "module": "Data.Array.Repa.Series.Series",
        "name": "length",
        "normalized": "Series a b-\u003eInt #",
        "package": "repa-series",
        "partial": "",
        "signature": "Series k a-\u003eInt #"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Series.html#v:runSeries",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate a series expression, feeding it an unboxed vector.\n\u003c/p\u003e\u003cp\u003eThe rate variable \u003ccode\u003ek\u003c/code\u003e represents the length of the series.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Repa.Series.Series",
        "fct-package": "repa-series",
        "fct-signature": "Vector a-\u003e (forall k.  Series k a -\u003e b)-\u003e b",
        "fct-type": "function",
        "title": "runSeries"
      },
      "index": {
        "description": "Evaluate series expression feeding it an unboxed vector The rate variable represents the length of the series",
        "hierarchy": "Data Array Repa Series Series",
        "module": "Data.Array.Repa.Series.Series",
        "name": "runSeries",
        "normalized": "Vector a-\u003e(b c Series d a-\u003ee)-\u003ee",
        "package": "repa-series",
        "partial": "Series",
        "signature": "Vector a-\u003e(forall k. Series k a-\u003eb)-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Series.html#v:runSeries2",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate a series expression, feeding it two unboxed vectors\n   of the same length.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Repa.Series.Series",
        "fct-package": "repa-series",
        "fct-signature": "Vector a-\u003e Vector b-\u003e (forall k.  Series k a -\u003e Series k b -\u003e c)-\u003e Maybe c",
        "fct-type": "function",
        "title": "runSeries2"
      },
      "index": {
        "description": "Evaluate series expression feeding it two unboxed vectors of the same length",
        "hierarchy": "Data Array Repa Series Series",
        "module": "Data.Array.Repa.Series.Series",
        "name": "runSeries2",
        "normalized": "Vector a-\u003eVector b-\u003e(c d Series e a-\u003eSeries e b-\u003ef)-\u003eMaybe f",
        "package": "repa-series",
        "partial": "Series",
        "signature": "Vector a-\u003eVector b-\u003e(forall k. Series k a-\u003eSeries k b-\u003ec)-\u003eMaybe c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Series.html#v:runSeries3",
      "description": {
        "fct-descr": "\u003cp\u003eThree!\n\u003c/p\u003e",
        "fct-module": "Data.Array.Repa.Series.Series",
        "fct-package": "repa-series",
        "fct-signature": "Vector a-\u003e Vector b-\u003e Vector c-\u003e (forall k.  Series k a -\u003e Series k b -\u003e Series k c -\u003e d)-\u003e Maybe d",
        "fct-type": "function",
        "title": "runSeries3"
      },
      "index": {
        "description": "Three",
        "hierarchy": "Data Array Repa Series Series",
        "module": "Data.Array.Repa.Series.Series",
        "name": "runSeries3",
        "normalized": "Vector a-\u003eVector b-\u003eVector c-\u003e(d e Series f a-\u003eSeries f b-\u003eSeries f c-\u003eg)-\u003eMaybe g",
        "package": "repa-series",
        "partial": "Series",
        "signature": "Vector a-\u003eVector b-\u003eVector c-\u003e(forall k. Series k a-\u003eSeries k b-\u003eSeries k c-\u003ed)-\u003eMaybe d"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Series.html#v:runSeries4",
      "description": {
        "fct-descr": "\u003cp\u003eFour!\n\u003c/p\u003e",
        "fct-module": "Data.Array.Repa.Series.Series",
        "fct-package": "repa-series",
        "fct-signature": "Vector a-\u003e Vector b-\u003e Vector c-\u003e Vector d-\u003e (forall k.  Series k a -\u003e Series k b -\u003e Series k c -\u003e Series k d -\u003e e)-\u003e Maybe e",
        "fct-type": "function",
        "title": "runSeries4"
      },
      "index": {
        "description": "Four",
        "hierarchy": "Data Array Repa Series Series",
        "module": "Data.Array.Repa.Series.Series",
        "name": "runSeries4",
        "normalized": "Vector a-\u003eVector b-\u003eVector c-\u003eVector d-\u003e(e f Series g a-\u003eSeries g b-\u003eSeries g c-\u003eSeries g d-\u003eh)-\u003eMaybe h",
        "package": "repa-series",
        "partial": "Series",
        "signature": "Vector a-\u003eVector b-\u003eVector c-\u003eVector d-\u003e(forall k. Series k a-\u003eSeries k b-\u003eSeries k c-\u003eSeries k d-\u003ee)-\u003eMaybe e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Series.html#v:seriesLength",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Array.Repa.Series.Series",
        "fct-package": "repa-series",
        "fct-signature": "Int#",
        "fct-source": "src/Data-Array-Repa-Series-Series.html#Series",
        "fct-type": "function",
        "title": "seriesLength"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa Series Series",
        "module": "Data.Array.Repa.Series.Series",
        "name": "seriesLength",
        "normalized": "",
        "package": "repa-series",
        "partial": "Length",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Series.html#v:seriesVector",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Array.Repa.Series.Series",
        "fct-package": "repa-series",
        "fct-signature": "!(Vector a)",
        "fct-source": "src/Data-Array-Repa-Series-Series.html#Series",
        "fct-type": "function",
        "title": "seriesVector"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa Series Series",
        "module": "Data.Array.Repa.Series.Series",
        "name": "seriesVector",
        "normalized": "",
        "package": "repa-series",
        "partial": "Vector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Series.html#v:toVector",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a series to a vector, discarding the rate information.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Repa.Series.Series",
        "fct-package": "repa-series",
        "fct-signature": "Series k a -\u003e Vector a",
        "fct-source": "src/Data-Array-Repa-Series-Series.html#toVector",
        "fct-type": "function",
        "title": "toVector"
      },
      "index": {
        "description": "Convert series to vector discarding the rate information",
        "hierarchy": "Data Array Repa Series Series",
        "module": "Data.Array.Repa.Series.Series",
        "name": "toVector",
        "normalized": "Series a b-\u003eVector b",
        "package": "repa-series",
        "partial": "Vector",
        "signature": "Series k a-\u003eVector a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Vector.html#",
      "description": {
        "fct-module": "Data.Array.Repa.Series.Vector",
        "fct-package": "repa-series",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Repa-Series-Vector.html",
        "fct-type": "module",
        "title": "Vector"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa Series Vector",
        "module": "Data.Array.Repa.Series.Vector",
        "name": "Vector",
        "normalized": "",
        "package": "repa-series",
        "partial": "Vector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Vector.html#t:Vector",
      "description": {
        "fct-descr": "\u003cp\u003eAbstract mutable vector type that supports random access indexing.\n\u003c/p\u003e\u003cp\u003eUse \u003ccode\u003e\u003ca\u003efromUnboxed\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003etoUnboxed\u003c/a\u003e\u003c/code\u003e to convert to and from regular\n   immutable unboxed vectors.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Repa.Series.Vector",
        "fct-package": "repa-series",
        "fct-signature": "data",
        "fct-source": "src/Data-Array-Repa-Series-Vector.html#Vector",
        "fct-type": "data",
        "title": "Vector"
      },
      "index": {
        "description": "Abstract mutable vector type that supports random access indexing Use fromUnboxed and toUnboxed to convert to and from regular immutable unboxed vectors",
        "hierarchy": "Data Array Repa Series Vector",
        "module": "Data.Array.Repa.Series.Vector",
        "name": "Vector",
        "normalized": "",
        "package": "repa-series",
        "partial": "Vector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Vector.html#v:fromUnboxed",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Convert from an Unboxed vector.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Repa.Series.Vector",
        "fct-package": "repa-series",
        "fct-signature": "Vector a -\u003e IO (Vector a)",
        "fct-source": "src/Data-Array-Repa-Series-Vector.html#fromUnboxed",
        "fct-type": "function",
        "title": "fromUnboxed"
      },
      "index": {
        "description": "Convert from an Unboxed vector",
        "hierarchy": "Data Array Repa Series Vector",
        "module": "Data.Array.Repa.Series.Vector",
        "name": "fromUnboxed",
        "normalized": "Vector a-\u003eIO(Vector a)",
        "package": "repa-series",
        "partial": "Unboxed",
        "signature": "Vector a-\u003eIO(Vector a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Vector.html#v:length",
      "description": {
        "fct-descr": "\u003cp\u003eTake the length of a vector.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Repa.Series.Vector",
        "fct-package": "repa-series",
        "fct-signature": "Vector a -\u003e Int#",
        "fct-source": "src/Data-Array-Repa-Series-Vector.html#length",
        "fct-type": "function",
        "title": "length"
      },
      "index": {
        "description": "Take the length of vector",
        "hierarchy": "Data Array Repa Series Vector",
        "module": "Data.Array.Repa.Series.Vector",
        "name": "length",
        "normalized": "Vector a-\u003eInt #",
        "package": "repa-series",
        "partial": "",
        "signature": "Vector a-\u003eInt #"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Vector.html#v:new",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new vector of the given length.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Repa.Series.Vector",
        "fct-package": "repa-series",
        "fct-signature": "Int# -\u003e IO (Vector a)",
        "fct-source": "src/Data-Array-Repa-Series-Vector.html#new",
        "fct-type": "function",
        "title": "new"
      },
      "index": {
        "description": "Create new vector of the given length",
        "hierarchy": "Data Array Repa Series Vector",
        "module": "Data.Array.Repa.Series.Vector",
        "name": "new",
        "normalized": "Int #-\u003eIO(Vector a)",
        "package": "repa-series",
        "partial": "",
        "signature": "Int #-\u003eIO(Vector a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Vector.html#v:read",
      "description": {
        "fct-descr": "\u003cp\u003eRead a value from a vector.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Repa.Series.Vector",
        "fct-package": "repa-series",
        "fct-signature": "Vector a -\u003e Int# -\u003e IO a",
        "fct-source": "src/Data-Array-Repa-Series-Vector.html#read",
        "fct-type": "function",
        "title": "read"
      },
      "index": {
        "description": "Read value from vector",
        "hierarchy": "Data Array Repa Series Vector",
        "module": "Data.Array.Repa.Series.Vector",
        "name": "read",
        "normalized": "Vector a-\u003eInt #-\u003eIO a",
        "package": "repa-series",
        "partial": "",
        "signature": "Vector a-\u003eInt #-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Vector.html#v:take",
      "description": {
        "fct-descr": "\u003cp\u003eTake the first n elements of a vector\n\u003c/p\u003e",
        "fct-module": "Data.Array.Repa.Series.Vector",
        "fct-package": "repa-series",
        "fct-signature": "Int# -\u003e Vector a -\u003e IO (Vector a)",
        "fct-source": "src/Data-Array-Repa-Series-Vector.html#take",
        "fct-type": "function",
        "title": "take"
      },
      "index": {
        "description": "Take the first elements of vector",
        "hierarchy": "Data Array Repa Series Vector",
        "module": "Data.Array.Repa.Series.Vector",
        "name": "take",
        "normalized": "Int #-\u003eVector a-\u003eIO(Vector a)",
        "package": "repa-series",
        "partial": "",
        "signature": "Int #-\u003eVector a-\u003eIO(Vector a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Vector.html#v:toUnboxed",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Convert to an Unboxed vector.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Repa.Series.Vector",
        "fct-package": "repa-series",
        "fct-signature": "Vector a -\u003e IO (Vector a)",
        "fct-source": "src/Data-Array-Repa-Series-Vector.html#toUnboxed",
        "fct-type": "function",
        "title": "toUnboxed"
      },
      "index": {
        "description": "Convert to an Unboxed vector",
        "hierarchy": "Data Array Repa Series Vector",
        "module": "Data.Array.Repa.Series.Vector",
        "name": "toUnboxed",
        "normalized": "Vector a-\u003eIO(Vector a)",
        "package": "repa-series",
        "partial": "Unboxed",
        "signature": "Vector a-\u003eIO(Vector a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series-Vector.html#v:write",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a value into a vector.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Repa.Series.Vector",
        "fct-package": "repa-series",
        "fct-signature": "Vector a -\u003e Int# -\u003e a -\u003e IO ()",
        "fct-source": "src/Data-Array-Repa-Series-Vector.html#write",
        "fct-type": "function",
        "title": "write"
      },
      "index": {
        "description": "Write value into vector",
        "hierarchy": "Data Array Repa Series Vector",
        "module": "Data.Array.Repa.Series.Vector",
        "name": "write",
        "normalized": "Vector a-\u003eInt #-\u003ea-\u003eIO()",
        "package": "repa-series",
        "partial": "",
        "signature": "Vector a-\u003eInt #-\u003ea-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#",
      "description": {
        "fct-module": "Data.Array.Repa.Series",
        "fct-package": "repa-series",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Repa-Series.html",
        "fct-type": "module",
        "title": "Series"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa Series",
        "module": "Data.Array.Repa.Series",
        "name": "Series",
        "normalized": "",
        "package": "repa-series",
        "partial": "Series",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#t:Primitives",
      "description": {
        "fct-descr": "\u003cp\u003ePrimitives needed by the repa-plugin.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Repa.Series",
        "fct-package": "repa-series",
        "fct-signature": "data",
        "fct-source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
        "fct-type": "data",
        "title": "Primitives"
      },
      "index": {
        "description": "Primitives needed by the repa-plugin",
        "hierarchy": "Data Array Repa Series",
        "module": "Data.Array.Repa.Series",
        "name": "Primitives",
        "normalized": "",
        "package": "repa-series",
        "partial": "Primitives",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#t:Sel1",
      "description": {
        "fct-descr": "\u003cp\u003eSelectors.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Repa.Series",
        "fct-package": "repa-series",
        "fct-signature": "data",
        "fct-source": "src/Data-Array-Repa-Series-Sel.html#Sel1",
        "fct-type": "data",
        "title": "Sel1"
      },
      "index": {
        "description": "Selectors",
        "hierarchy": "Data Array Repa Series",
        "module": "Data.Array.Repa.Series",
        "name": "Sel1",
        "normalized": "",
        "package": "repa-series",
        "partial": "Sel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#t:Series",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eSeries\u003c/a\u003e\u003c/code\u003e is an abstract source of element data and is consumed\n   by series processes. The elements of a series must be consumed\n   sequentially, so they don't support random access indexing.\n\u003c/p\u003e\u003cp\u003eThe rate parameter \u003ccode\u003ek\u003c/code\u003e represents the abstract length of the series.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Repa.Series",
        "fct-package": "repa-series",
        "fct-signature": "data",
        "fct-source": "src/Data-Array-Repa-Series-Series.html#Series",
        "fct-type": "data",
        "title": "Series"
      },
      "index": {
        "description": "Series is an abstract source of element data and is consumed by series processes The elements of series must be consumed sequentially so they don support random access indexing The rate parameter represents the abstract length of the series",
        "hierarchy": "Data Array Repa Series",
        "module": "Data.Array.Repa.Series",
        "name": "Series",
        "normalized": "",
        "package": "repa-series",
        "partial": "Series",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#t:Vector",
      "description": {
        "fct-descr": "\u003cp\u003eAbstract mutable vector type that supports random access indexing.\n\u003c/p\u003e\u003cp\u003eUse \u003ccode\u003e\u003ca\u003efromUnboxed\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003etoUnboxed\u003c/a\u003e\u003c/code\u003e to convert to and from regular\n   immutable unboxed vectors.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Repa.Series",
        "fct-package": "repa-series",
        "fct-signature": "data",
        "fct-source": "src/Data-Array-Repa-Series-Vector.html#Vector",
        "fct-type": "data",
        "title": "Vector"
      },
      "index": {
        "description": "Abstract mutable vector type that supports random access indexing Use fromUnboxed and toUnboxed to convert to and from regular immutable unboxed vectors",
        "hierarchy": "Data Array Repa Series",
        "module": "Data.Array.Repa.Series",
        "name": "Vector",
        "normalized": "",
        "package": "repa-series",
        "partial": "Vector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:Primitives",
      "description": {
        "fct-module": "Data.Array.Repa.Series",
        "fct-package": "repa-series",
        "fct-signature": "Primitives",
        "fct-source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
        "fct-type": "function",
        "title": "Primitives"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa Series",
        "module": "Data.Array.Repa.Series",
        "name": "Primitives",
        "normalized": "",
        "package": "repa-series",
        "partial": "Primitives",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:Sel1",
      "description": {
        "fct-module": "Data.Array.Repa.Series",
        "fct-package": "repa-series",
        "fct-signature": "Sel1",
        "fct-source": "src/Data-Array-Repa-Series-Sel.html#Sel1",
        "fct-type": "function",
        "title": "Sel1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa Series",
        "module": "Data.Array.Repa.Series",
        "name": "Sel1",
        "normalized": "",
        "package": "repa-series",
        "partial": "Sel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:Series",
      "description": {
        "fct-module": "Data.Array.Repa.Series",
        "fct-package": "repa-series",
        "fct-signature": "Series",
        "fct-source": "src/Data-Array-Repa-Series-Series.html#Series",
        "fct-type": "function",
        "title": "Series"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa Series",
        "module": "Data.Array.Repa.Series",
        "name": "Series",
        "normalized": "",
        "package": "repa-series",
        "partial": "Series",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:fold",
      "description": {
        "fct-descr": "\u003cp\u003eCombine all elements of a series with an associative operator.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Repa.Series",
        "fct-package": "repa-series",
        "fct-signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e Series k b -\u003e a",
        "fct-source": "src/Data-Array-Repa-Series-Fallback.html#fold",
        "fct-type": "function",
        "title": "fold"
      },
      "index": {
        "description": "Combine all elements of series with an associative operator",
        "hierarchy": "Data Array Repa Series",
        "module": "Data.Array.Repa.Series",
        "name": "fold",
        "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eSeries c b-\u003ea",
        "package": "repa-series",
        "partial": "",
        "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003eSeries k b-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:foldIndex",
      "description": {
        "fct-descr": "\u003cp\u003eCombine all elements of a series with an associative operator.\n   The worker function is given the current index into the series.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Repa.Series",
        "fct-package": "repa-series",
        "fct-signature": "(Int# -\u003e a -\u003e b -\u003e a) -\u003e a -\u003e Series k b -\u003e a",
        "fct-source": "src/Data-Array-Repa-Series-Fallback.html#foldIndex",
        "fct-type": "function",
        "title": "foldIndex"
      },
      "index": {
        "description": "Combine all elements of series with an associative operator The worker function is given the current index into the series",
        "hierarchy": "Data Array Repa Series",
        "module": "Data.Array.Repa.Series",
        "name": "foldIndex",
        "normalized": "(Int #-\u003ea-\u003eb-\u003ea)-\u003ea-\u003eSeries c b-\u003ea",
        "package": "repa-series",
        "partial": "Index",
        "signature": "(Int #-\u003ea-\u003eb-\u003ea)-\u003ea-\u003eSeries k b-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:fromUnboxed",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Convert from an Unboxed vector.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Repa.Series",
        "fct-package": "repa-series",
        "fct-signature": "Vector a -\u003e IO (Vector a)",
        "fct-source": "src/Data-Array-Repa-Series-Vector.html#fromUnboxed",
        "fct-type": "function",
        "title": "fromUnboxed"
      },
      "index": {
        "description": "Convert from an Unboxed vector",
        "hierarchy": "Data Array Repa Series",
        "module": "Data.Array.Repa.Series",
        "name": "fromUnboxed",
        "normalized": "Vector a-\u003eIO(Vector a)",
        "package": "repa-series",
        "partial": "Unboxed",
        "signature": "Vector a-\u003eIO(Vector a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:map",
      "description": {
        "fct-descr": "\u003cp\u003eApply a function to all elements of a series.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Repa.Series",
        "fct-package": "repa-series",
        "fct-signature": "(a -\u003e b) -\u003e Series k a -\u003e Series k b",
        "fct-source": "src/Data-Array-Repa-Series-Fallback.html#map",
        "fct-type": "function",
        "title": "map"
      },
      "index": {
        "description": "Apply function to all elements of series",
        "hierarchy": "Data Array Repa Series",
        "module": "Data.Array.Repa.Series",
        "name": "map",
        "normalized": "(a-\u003eb)-\u003eSeries c a-\u003eSeries c b",
        "package": "repa-series",
        "partial": "",
        "signature": "(a-\u003eb)-\u003eSeries k a-\u003eSeries k b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:map2",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e, but for equal-length series\n\u003c/p\u003e",
        "fct-module": "Data.Array.Repa.Series",
        "fct-package": "repa-series",
        "fct-signature": "(a -\u003e b -\u003e c) -\u003e Series k a -\u003e Series k b -\u003e Series k c",
        "fct-source": "src/Data-Array-Repa-Series-Fallback.html#map2",
        "fct-type": "function",
        "title": "map2"
      },
      "index": {
        "description": "Like zipWith but for equal-length series",
        "hierarchy": "Data Array Repa Series",
        "module": "Data.Array.Repa.Series",
        "name": "map2",
        "normalized": "(a-\u003eb-\u003ec)-\u003eSeries d a-\u003eSeries d b-\u003eSeries d c",
        "package": "repa-series",
        "partial": "",
        "signature": "(a-\u003eb-\u003ec)-\u003eSeries k a-\u003eSeries k b-\u003eSeries k c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:mkSel1",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new selector from a series of flags.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Repa.Series",
        "fct-package": "repa-series",
        "fct-signature": "Series k1 Bool -\u003e (forall k2.  Sel1 k1 k2 -\u003e a) -\u003e a",
        "fct-source": "src/Data-Array-Repa-Series-Sel.html#mkSel1",
        "fct-type": "function",
        "title": "mkSel1"
      },
      "index": {
        "description": "Create new selector from series of flags",
        "hierarchy": "Data Array Repa Series",
        "module": "Data.Array.Repa.Series",
        "name": "mkSel1",
        "normalized": "Series a Bool-\u003e(b a Sel a a-\u003ec)-\u003ec",
        "package": "repa-series",
        "partial": "Sel",
        "signature": "Series k Bool-\u003e(forall k Sel k k-\u003ea)-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:pack",
      "description": {
        "fct-descr": "\u003cp\u003ePack elements of a series using a selector.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Repa.Series",
        "fct-package": "repa-series",
        "fct-signature": "Sel1 k1 k2 -\u003e Series k1 a -\u003e Series k2 a",
        "fct-source": "src/Data-Array-Repa-Series-Fallback.html#pack",
        "fct-type": "function",
        "title": "pack"
      },
      "index": {
        "description": "Pack elements of series using selector",
        "hierarchy": "Data Array Repa Series",
        "module": "Data.Array.Repa.Series",
        "name": "pack",
        "normalized": "Sel a a-\u003eSeries a b-\u003eSeries a b",
        "package": "repa-series",
        "partial": "",
        "signature": "Sel k k-\u003eSeries k a-\u003eSeries k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:prim_Ref",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Array.Repa.Series",
        "fct-package": "repa-series",
        "fct-signature": "forall a.  Ref a",
        "fct-source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
        "fct-type": "function",
        "title": "prim_Ref"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa Series",
        "module": "Data.Array.Repa.Series",
        "name": "prim_Ref",
        "normalized": "",
        "package": "repa-series",
        "partial": "Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:prim_Series",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Array.Repa.Series",
        "fct-package": "repa-series",
        "fct-signature": "forall k a.  Series k a",
        "fct-source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
        "fct-type": "function",
        "title": "prim_Series"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa Series",
        "module": "Data.Array.Repa.Series",
        "name": "prim_Series",
        "normalized": "",
        "package": "repa-series",
        "partial": "Series",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:prim_Vector",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Array.Repa.Series",
        "fct-package": "repa-series",
        "fct-signature": "forall a.  Vector a",
        "fct-source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
        "fct-type": "function",
        "title": "prim_Vector"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa Series",
        "module": "Data.Array.Repa.Series",
        "name": "prim_Vector",
        "normalized": "",
        "package": "repa-series",
        "partial": "Vector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:prim_addInt",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Array.Repa.Series",
        "fct-package": "repa-series",
        "fct-signature": "Int# -\u003e Int# -\u003e Int#",
        "fct-source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
        "fct-type": "function",
        "title": "prim_addInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa Series",
        "module": "Data.Array.Repa.Series",
        "name": "prim_addInt",
        "normalized": "Int #-\u003eInt #-\u003eInt #",
        "package": "repa-series",
        "partial": "Int",
        "signature": "Int #-\u003eInt #-\u003eInt #"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:prim_divInt",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Array.Repa.Series",
        "fct-package": "repa-series",
        "fct-signature": "Int# -\u003e Int# -\u003e Int#",
        "fct-source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
        "fct-type": "function",
        "title": "prim_divInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa Series",
        "module": "Data.Array.Repa.Series",
        "name": "prim_divInt",
        "normalized": "Int #-\u003eInt #-\u003eInt #",
        "package": "repa-series",
        "partial": "Int",
        "signature": "Int #-\u003eInt #-\u003eInt #"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:prim_eqInt",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Array.Repa.Series",
        "fct-package": "repa-series",
        "fct-signature": "Int# -\u003e Int# -\u003e Bool",
        "fct-source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
        "fct-type": "function",
        "title": "prim_eqInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa Series",
        "module": "Data.Array.Repa.Series",
        "name": "prim_eqInt",
        "normalized": "Int #-\u003eInt #-\u003eBool",
        "package": "repa-series",
        "partial": "Int",
        "signature": "Int #-\u003eInt #-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:prim_geInt",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Array.Repa.Series",
        "fct-package": "repa-series",
        "fct-signature": "Int# -\u003e Int# -\u003e Bool",
        "fct-source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
        "fct-type": "function",
        "title": "prim_geInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa Series",
        "module": "Data.Array.Repa.Series",
        "name": "prim_geInt",
        "normalized": "Int #-\u003eInt #-\u003eBool",
        "package": "repa-series",
        "partial": "Int",
        "signature": "Int #-\u003eInt #-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:prim_gtInt",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Array.Repa.Series",
        "fct-package": "repa-series",
        "fct-signature": "Int# -\u003e Int# -\u003e Bool",
        "fct-source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
        "fct-type": "function",
        "title": "prim_gtInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa Series",
        "module": "Data.Array.Repa.Series",
        "name": "prim_gtInt",
        "normalized": "Int #-\u003eInt #-\u003eBool",
        "package": "repa-series",
        "partial": "Int",
        "signature": "Int #-\u003eInt #-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:prim_guard",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Array.Repa.Series",
        "fct-package": "repa-series",
        "fct-signature": "Ref Int -\u003e Bool -\u003e (Int# -\u003e World -\u003e World) -\u003e World -\u003e World",
        "fct-source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
        "fct-type": "function",
        "title": "prim_guard"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa Series",
        "module": "Data.Array.Repa.Series",
        "name": "prim_guard",
        "normalized": "Ref Int-\u003eBool-\u003e(Int #-\u003eWorld-\u003eWorld)-\u003eWorld-\u003eWorld",
        "package": "repa-series",
        "partial": "",
        "signature": "Ref Int-\u003eBool-\u003e(Int #-\u003eWorld-\u003eWorld)-\u003eWorld-\u003eWorld"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:prim_leInt",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Array.Repa.Series",
        "fct-package": "repa-series",
        "fct-signature": "Int# -\u003e Int# -\u003e Bool",
        "fct-source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
        "fct-type": "function",
        "title": "prim_leInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa Series",
        "module": "Data.Array.Repa.Series",
        "name": "prim_leInt",
        "normalized": "Int #-\u003eInt #-\u003eBool",
        "package": "repa-series",
        "partial": "Int",
        "signature": "Int #-\u003eInt #-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:prim_loop",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Array.Repa.Series",
        "fct-package": "repa-series",
        "fct-signature": "Int# -\u003e (Int# -\u003e World -\u003e World) -\u003e World -\u003e World",
        "fct-source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
        "fct-type": "function",
        "title": "prim_loop"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa Series",
        "module": "Data.Array.Repa.Series",
        "name": "prim_loop",
        "normalized": "Int #-\u003e(Int #-\u003eWorld-\u003eWorld)-\u003eWorld-\u003eWorld",
        "package": "repa-series",
        "partial": "",
        "signature": "Int #-\u003e(Int #-\u003eWorld-\u003eWorld)-\u003eWorld-\u003eWorld"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:prim_ltInt",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Array.Repa.Series",
        "fct-package": "repa-series",
        "fct-signature": "Int# -\u003e Int# -\u003e Bool",
        "fct-source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
        "fct-type": "function",
        "title": "prim_ltInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa Series",
        "module": "Data.Array.Repa.Series",
        "name": "prim_ltInt",
        "normalized": "Int #-\u003eInt #-\u003eBool",
        "package": "repa-series",
        "partial": "Int",
        "signature": "Int #-\u003eInt #-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:prim_modInt",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Array.Repa.Series",
        "fct-package": "repa-series",
        "fct-signature": "Int# -\u003e Int# -\u003e Int#",
        "fct-source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
        "fct-type": "function",
        "title": "prim_modInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa Series",
        "module": "Data.Array.Repa.Series",
        "name": "prim_modInt",
        "normalized": "Int #-\u003eInt #-\u003eInt #",
        "package": "repa-series",
        "partial": "Int",
        "signature": "Int #-\u003eInt #-\u003eInt #"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:prim_mulInt",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Array.Repa.Series",
        "fct-package": "repa-series",
        "fct-signature": "Int# -\u003e Int# -\u003e Int#",
        "fct-source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
        "fct-type": "function",
        "title": "prim_mulInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa Series",
        "module": "Data.Array.Repa.Series",
        "name": "prim_mulInt",
        "normalized": "Int #-\u003eInt #-\u003eInt #",
        "package": "repa-series",
        "partial": "Int",
        "signature": "Int #-\u003eInt #-\u003eInt #"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:prim_neqInt",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Array.Repa.Series",
        "fct-package": "repa-series",
        "fct-signature": "Int# -\u003e Int# -\u003e Bool",
        "fct-source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
        "fct-type": "function",
        "title": "prim_neqInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa Series",
        "module": "Data.Array.Repa.Series",
        "name": "prim_neqInt",
        "normalized": "Int #-\u003eInt #-\u003eBool",
        "package": "repa-series",
        "partial": "Int",
        "signature": "Int #-\u003eInt #-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:prim_newRefInt",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Array.Repa.Series",
        "fct-package": "repa-series",
        "fct-signature": "Int# -\u003e World -\u003e (#World, Ref Int#)",
        "fct-source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
        "fct-type": "function",
        "title": "prim_newRefInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa Series",
        "module": "Data.Array.Repa.Series",
        "name": "prim_newRefInt",
        "normalized": "Int #-\u003eWorld-\u003e(#World,Ref Int #)",
        "package": "repa-series",
        "partial": "Ref Int",
        "signature": "Int #-\u003eWorld-\u003e(#World,Ref Int #)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:prim_newRefInt_T2",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Array.Repa.Series",
        "fct-package": "repa-series",
        "fct-signature": "(#Int#, Int##) -\u003e World -\u003e (#World, Ref (Int, Int)#)",
        "fct-source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
        "fct-type": "function",
        "title": "prim_newRefInt_T2"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa Series",
        "module": "Data.Array.Repa.Series",
        "name": "prim_newRefInt_T2",
        "normalized": "(#Int #,Int # #)-\u003eWorld-\u003e(#World,Ref(Int,Int)#)",
        "package": "repa-series",
        "partial": "Ref Int",
        "signature": "(#Int #,Int # #)-\u003eWorld-\u003e(#World,Ref(Int,Int)#)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:prim_newVectorInt",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Array.Repa.Series",
        "fct-package": "repa-series",
        "fct-signature": "Int# -\u003e World -\u003e (#World, Vector Int#)",
        "fct-source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
        "fct-type": "function",
        "title": "prim_newVectorInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa Series",
        "module": "Data.Array.Repa.Series",
        "name": "prim_newVectorInt",
        "normalized": "Int #-\u003eWorld-\u003e(#World,Vector Int #)",
        "package": "repa-series",
        "partial": "Vector Int",
        "signature": "Int #-\u003eWorld-\u003e(#World,Vector Int #)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:prim_nextInt",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Array.Repa.Series",
        "fct-package": "repa-series",
        "fct-signature": "forall k.  Series k Int -\u003e Int# -\u003e World -\u003e (#World, Int##)",
        "fct-source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
        "fct-type": "function",
        "title": "prim_nextInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa Series",
        "module": "Data.Array.Repa.Series",
        "name": "prim_nextInt",
        "normalized": "a b Series c Int-\u003eInt #-\u003eWorld-\u003e(#World,Int # #)",
        "package": "repa-series",
        "partial": "Int",
        "signature": "forall k. Series k Int-\u003eInt #-\u003eWorld-\u003e(#World,Int # #)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:prim_nextInt_T2",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Array.Repa.Series",
        "fct-package": "repa-series",
        "fct-signature": "forall k.  Series k (Int, Int) -\u003e Int# -\u003e World -\u003e (#World, (#Int#, Int##)#)",
        "fct-source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
        "fct-type": "function",
        "title": "prim_nextInt_T2"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa Series",
        "module": "Data.Array.Repa.Series",
        "name": "prim_nextInt_T2",
        "normalized": "a b Series c(Int,Int)-\u003eInt #-\u003eWorld-\u003e(#World,(#Int #,Int # #)#)",
        "package": "repa-series",
        "partial": "Int",
        "signature": "forall k. Series k(Int,Int)-\u003eInt #-\u003eWorld-\u003e(#World,(#Int #,Int # #)#)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:prim_rateOfSeries",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Array.Repa.Series",
        "fct-package": "repa-series",
        "fct-signature": "forall k a.  Series k a -\u003e Int#",
        "fct-source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
        "fct-type": "function",
        "title": "prim_rateOfSeries"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa Series",
        "module": "Data.Array.Repa.Series",
        "name": "prim_rateOfSeries",
        "normalized": "a b c Series b d-\u003eInt #",
        "package": "repa-series",
        "partial": "Of Series",
        "signature": "forall k a. Series k a-\u003eInt #"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:prim_readRefInt",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Array.Repa.Series",
        "fct-package": "repa-series",
        "fct-signature": "Ref Int -\u003e World -\u003e (#World, Int##)",
        "fct-source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
        "fct-type": "function",
        "title": "prim_readRefInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa Series",
        "module": "Data.Array.Repa.Series",
        "name": "prim_readRefInt",
        "normalized": "Ref Int-\u003eWorld-\u003e(#World,Int # #)",
        "package": "repa-series",
        "partial": "Ref Int",
        "signature": "Ref Int-\u003eWorld-\u003e(#World,Int # #)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:prim_readRefInt_T2",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Array.Repa.Series",
        "fct-package": "repa-series",
        "fct-signature": "Ref (Int, Int) -\u003e World -\u003e (#World, (#Int#, Int##)#)",
        "fct-source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
        "fct-type": "function",
        "title": "prim_readRefInt_T2"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa Series",
        "module": "Data.Array.Repa.Series",
        "name": "prim_readRefInt_T2",
        "normalized": "Ref(Int,Int)-\u003eWorld-\u003e(#World,(#Int #,Int # #)#)",
        "package": "repa-series",
        "partial": "Ref Int",
        "signature": "Ref(Int,Int)-\u003eWorld-\u003e(#World,(#Int #,Int # #)#)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:prim_readVectorInt",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Array.Repa.Series",
        "fct-package": "repa-series",
        "fct-signature": "Vector Int -\u003e Int# -\u003e World -\u003e (#World, Int##)",
        "fct-source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
        "fct-type": "function",
        "title": "prim_readVectorInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa Series",
        "module": "Data.Array.Repa.Series",
        "name": "prim_readVectorInt",
        "normalized": "Vector Int-\u003eInt #-\u003eWorld-\u003e(#World,Int # #)",
        "package": "repa-series",
        "partial": "Vector Int",
        "signature": "Vector Int-\u003eInt #-\u003eWorld-\u003e(#World,Int # #)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:prim_remInt",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Array.Repa.Series",
        "fct-package": "repa-series",
        "fct-signature": "Int# -\u003e Int# -\u003e Int#",
        "fct-source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
        "fct-type": "function",
        "title": "prim_remInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa Series",
        "module": "Data.Array.Repa.Series",
        "name": "prim_remInt",
        "normalized": "Int #-\u003eInt #-\u003eInt #",
        "package": "repa-series",
        "partial": "Int",
        "signature": "Int #-\u003eInt #-\u003eInt #"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:prim_sliceVectorInt",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Array.Repa.Series",
        "fct-package": "repa-series",
        "fct-signature": "Int# -\u003e Vector Int -\u003e World -\u003e (#World, Vector Int#)",
        "fct-source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
        "fct-type": "function",
        "title": "prim_sliceVectorInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa Series",
        "module": "Data.Array.Repa.Series",
        "name": "prim_sliceVectorInt",
        "normalized": "Int #-\u003eVector Int-\u003eWorld-\u003e(#World,Vector Int #)",
        "package": "repa-series",
        "partial": "Vector Int",
        "signature": "Int #-\u003eVector Int-\u003eWorld-\u003e(#World,Vector Int #)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:prim_subInt",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Array.Repa.Series",
        "fct-package": "repa-series",
        "fct-signature": "Int# -\u003e Int# -\u003e Int#",
        "fct-source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
        "fct-type": "function",
        "title": "prim_subInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa Series",
        "module": "Data.Array.Repa.Series",
        "name": "prim_subInt",
        "normalized": "Int #-\u003eInt #-\u003eInt #",
        "package": "repa-series",
        "partial": "Int",
        "signature": "Int #-\u003eInt #-\u003eInt #"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:prim_writeRefInt",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Array.Repa.Series",
        "fct-package": "repa-series",
        "fct-signature": "Ref Int -\u003e Int# -\u003e World -\u003e World",
        "fct-source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
        "fct-type": "function",
        "title": "prim_writeRefInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa Series",
        "module": "Data.Array.Repa.Series",
        "name": "prim_writeRefInt",
        "normalized": "Ref Int-\u003eInt #-\u003eWorld-\u003eWorld",
        "package": "repa-series",
        "partial": "Ref Int",
        "signature": "Ref Int-\u003eInt #-\u003eWorld-\u003eWorld"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:prim_writeRefInt_T2",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Array.Repa.Series",
        "fct-package": "repa-series",
        "fct-signature": "Ref (Int, Int) -\u003e (#Int#, Int##) -\u003e World -\u003e World",
        "fct-source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
        "fct-type": "function",
        "title": "prim_writeRefInt_T2"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa Series",
        "module": "Data.Array.Repa.Series",
        "name": "prim_writeRefInt_T2",
        "normalized": "Ref(Int,Int)-\u003e(#Int #,Int # #)-\u003eWorld-\u003eWorld",
        "package": "repa-series",
        "partial": "Ref Int",
        "signature": "Ref(Int,Int)-\u003e(#Int #,Int # #)-\u003eWorld-\u003eWorld"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:prim_writeVectorInt",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Array.Repa.Series",
        "fct-package": "repa-series",
        "fct-signature": "Vector Int -\u003e Int# -\u003e Int# -\u003e World -\u003e World",
        "fct-source": "src/Data-Array-Repa-Series-Prim.html#Primitives",
        "fct-type": "function",
        "title": "prim_writeVectorInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa Series",
        "module": "Data.Array.Repa.Series",
        "name": "prim_writeVectorInt",
        "normalized": "Vector Int-\u003eInt #-\u003eInt #-\u003eWorld-\u003eWorld",
        "package": "repa-series",
        "partial": "Vector Int",
        "signature": "Vector Int-\u003eInt #-\u003eInt #-\u003eWorld-\u003eWorld"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:primitives",
      "description": {
        "fct-descr": "\u003cp\u003eTable of primitives used by the repa-plugin.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Repa.Series",
        "fct-package": "repa-series",
        "fct-signature": "Primitives",
        "fct-source": "src/Data-Array-Repa-Series-Prim.html#primitives",
        "fct-type": "function",
        "title": "primitives"
      },
      "index": {
        "description": "Table of primitives used by the repa-plugin",
        "hierarchy": "Data Array Repa Series",
        "module": "Data.Array.Repa.Series",
        "name": "primitives",
        "normalized": "",
        "package": "repa-series",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:runSeries",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate a series expression, feeding it an unboxed vector.\n\u003c/p\u003e\u003cp\u003eThe rate variable \u003ccode\u003ek\u003c/code\u003e represents the length of the series.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Repa.Series",
        "fct-package": "repa-series",
        "fct-signature": "Vector a-\u003e (forall k.  Series k a -\u003e b)-\u003e b",
        "fct-type": "function",
        "title": "runSeries"
      },
      "index": {
        "description": "Evaluate series expression feeding it an unboxed vector The rate variable represents the length of the series",
        "hierarchy": "Data Array Repa Series",
        "module": "Data.Array.Repa.Series",
        "name": "runSeries",
        "normalized": "Vector a-\u003e(b c Series d a-\u003ee)-\u003ee",
        "package": "repa-series",
        "partial": "Series",
        "signature": "Vector a-\u003e(forall k. Series k a-\u003eb)-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:runSeries2",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate a series expression, feeding it two unboxed vectors\n   of the same length.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Repa.Series",
        "fct-package": "repa-series",
        "fct-signature": "Vector a-\u003e Vector b-\u003e (forall k.  Series k a -\u003e Series k b -\u003e c)-\u003e Maybe c",
        "fct-type": "function",
        "title": "runSeries2"
      },
      "index": {
        "description": "Evaluate series expression feeding it two unboxed vectors of the same length",
        "hierarchy": "Data Array Repa Series",
        "module": "Data.Array.Repa.Series",
        "name": "runSeries2",
        "normalized": "Vector a-\u003eVector b-\u003e(c d Series e a-\u003eSeries e b-\u003ef)-\u003eMaybe f",
        "package": "repa-series",
        "partial": "Series",
        "signature": "Vector a-\u003eVector b-\u003e(forall k. Series k a-\u003eSeries k b-\u003ec)-\u003eMaybe c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:runSeries3",
      "description": {
        "fct-descr": "\u003cp\u003eThree!\n\u003c/p\u003e",
        "fct-module": "Data.Array.Repa.Series",
        "fct-package": "repa-series",
        "fct-signature": "Vector a-\u003e Vector b-\u003e Vector c-\u003e (forall k.  Series k a -\u003e Series k b -\u003e Series k c -\u003e d)-\u003e Maybe d",
        "fct-type": "function",
        "title": "runSeries3"
      },
      "index": {
        "description": "Three",
        "hierarchy": "Data Array Repa Series",
        "module": "Data.Array.Repa.Series",
        "name": "runSeries3",
        "normalized": "Vector a-\u003eVector b-\u003eVector c-\u003e(d e Series f a-\u003eSeries f b-\u003eSeries f c-\u003eg)-\u003eMaybe g",
        "package": "repa-series",
        "partial": "Series",
        "signature": "Vector a-\u003eVector b-\u003eVector c-\u003e(forall k. Series k a-\u003eSeries k b-\u003eSeries k c-\u003ed)-\u003eMaybe d"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:runSeries4",
      "description": {
        "fct-descr": "\u003cp\u003eFour!\n\u003c/p\u003e",
        "fct-module": "Data.Array.Repa.Series",
        "fct-package": "repa-series",
        "fct-signature": "Vector a-\u003e Vector b-\u003e Vector c-\u003e Vector d-\u003e (forall k.  Series k a -\u003e Series k b -\u003e Series k c -\u003e Series k d -\u003e e)-\u003e Maybe e",
        "fct-type": "function",
        "title": "runSeries4"
      },
      "index": {
        "description": "Four",
        "hierarchy": "Data Array Repa Series",
        "module": "Data.Array.Repa.Series",
        "name": "runSeries4",
        "normalized": "Vector a-\u003eVector b-\u003eVector c-\u003eVector d-\u003e(e f Series g a-\u003eSeries g b-\u003eSeries g c-\u003eSeries g d-\u003eh)-\u003eMaybe h",
        "package": "repa-series",
        "partial": "Series",
        "signature": "Vector a-\u003eVector b-\u003eVector c-\u003eVector d-\u003e(forall k. Series k a-\u003eSeries k b-\u003eSeries k c-\u003eSeries k d-\u003ee)-\u003eMaybe e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:sel1Flags",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Array.Repa.Series",
        "fct-package": "repa-series",
        "fct-signature": "!(Vector Bool)",
        "fct-source": "src/Data-Array-Repa-Series-Sel.html#Sel1",
        "fct-type": "function",
        "title": "sel1Flags"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa Series",
        "module": "Data.Array.Repa.Series",
        "name": "sel1Flags",
        "normalized": "",
        "package": "repa-series",
        "partial": "Flags",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:sel1Length",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Array.Repa.Series",
        "fct-package": "repa-series",
        "fct-signature": "Int#",
        "fct-source": "src/Data-Array-Repa-Series-Sel.html#Sel1",
        "fct-type": "function",
        "title": "sel1Length"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa Series",
        "module": "Data.Array.Repa.Series",
        "name": "sel1Length",
        "normalized": "",
        "package": "repa-series",
        "partial": "Length",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:seriesLength",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Array.Repa.Series",
        "fct-package": "repa-series",
        "fct-signature": "Int#",
        "fct-source": "src/Data-Array-Repa-Series-Series.html#Series",
        "fct-type": "function",
        "title": "seriesLength"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa Series",
        "module": "Data.Array.Repa.Series",
        "name": "seriesLength",
        "normalized": "",
        "package": "repa-series",
        "partial": "Length",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:seriesVector",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Array.Repa.Series",
        "fct-package": "repa-series",
        "fct-signature": "!(Vector a)",
        "fct-source": "src/Data-Array-Repa-Series-Series.html#Series",
        "fct-type": "function",
        "title": "seriesVector"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Repa Series",
        "module": "Data.Array.Repa.Series",
        "name": "seriesVector",
        "normalized": "",
        "package": "repa-series",
        "partial": "Vector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-series/docs/Data-Array-Repa-Series.html#v:toUnboxed",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Convert to an Unboxed vector.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Repa.Series",
        "fct-package": "repa-series",
        "fct-signature": "Vector a -\u003e IO (Vector a)",
        "fct-source": "src/Data-Array-Repa-Series-Vector.html#toUnboxed",
        "fct-type": "function",
        "title": "toUnboxed"
      },
      "index": {
        "description": "Convert to an Unboxed vector",
        "hierarchy": "Data Array Repa Series",
        "module": "Data.Array.Repa.Series",
        "name": "toUnboxed",
        "normalized": "Vector a-\u003eIO(Vector a)",
        "package": "repa-series",
        "partial": "Unboxed",
        "signature": "Vector a-\u003eIO(Vector a)"
      }
    }
  }
]