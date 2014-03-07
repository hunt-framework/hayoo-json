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
        "word": "data-fresh"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Fresh.Delta",
          "name": "Delta",
          "package": "data-fresh",
          "source": "src/Control-Monad-Trans-Fresh-Delta.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Monad Trans Fresh Delta",
          "module": "Control.Monad.Trans.Fresh.Delta",
          "name": "Delta",
          "package": "data-fresh",
          "partial": "Delta",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-fresh/docs/Control-Monad-Trans-Fresh-Delta.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Fresh.Delta",
          "name": "FreshT",
          "package": "data-fresh",
          "source": "src/Control-Monad-Trans-Fresh-Delta.html#FreshT",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Control Monad Trans Fresh Delta",
          "module": "Control.Monad.Trans.Fresh.Delta",
          "name": "FreshT",
          "package": "data-fresh",
          "partial": "Fresh",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/data-fresh/docs/Control-Monad-Trans-Fresh-Delta.html#t:FreshT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Fresh.Delta",
          "name": "FreshT",
          "package": "data-fresh",
          "signature": "FreshT",
          "source": "src/Control-Monad-Trans-Fresh-Delta.html#FreshT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Fresh Delta",
          "module": "Control.Monad.Trans.Fresh.Delta",
          "name": "FreshT",
          "package": "data-fresh",
          "partial": "Fresh",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fresh/docs/Control-Monad-Trans-Fresh-Delta.html#v:FreshT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA delta of integer pairs.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Fresh.Delta",
          "name": "integerPairDelta",
          "package": "data-fresh",
          "signature": "(Integer, Integer) -\u003e Cofree Triplet (Integer, Integer)",
          "source": "src/Control-Monad-Trans-Fresh-Delta.html#integerPairDelta",
          "type": "function"
        },
        "index": {
          "description": "delta of integer pairs",
          "hierarchy": "Control Monad Trans Fresh Delta",
          "module": "Control.Monad.Trans.Fresh.Delta",
          "name": "integerPairDelta",
          "normalized": "(Integer,Integer)-\u003eCofree Triplet(Integer,Integer)",
          "package": "data-fresh",
          "partial": "Pair Delta",
          "signature": "(Integer,Integer)-\u003eCofree Triplet(Integer,Integer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fresh/docs/Control-Monad-Trans-Fresh-Delta.html#v:integerPairDelta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Fresh.Delta",
          "name": "runFreshT",
          "package": "data-fresh",
          "signature": "Cofree Triplet v -\u003e m (a, Cofree Triplet v)",
          "source": "src/Control-Monad-Trans-Fresh-Delta.html#FreshT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Fresh Delta",
          "module": "Control.Monad.Trans.Fresh.Delta",
          "name": "runFreshT",
          "normalized": "Cofree Triplet a-\u003eb(c,Cofree Triplet a)",
          "package": "data-fresh",
          "partial": "Fresh",
          "signature": "Cofree Triplet v-\u003em(a,Cofree Triplet v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fresh/docs/Control-Monad-Trans-Fresh-Delta.html#v:runFreshT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a \u003ccode\u003eCofree Triplet v\u003c/code\u003e, based on a seed, and functions to split\n   and succeed it.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Fresh.Delta",
          "name": "seedDelta",
          "package": "data-fresh",
          "signature": "v-\u003e (v -\u003e v)-\u003e (v -\u003e (v, v))-\u003e Cofree Triplet v",
          "type": "function"
        },
        "index": {
          "description": "Creates Cofree Triplet based on seed and functions to split and succeed it",
          "hierarchy": "Control Monad Trans Fresh Delta",
          "module": "Control.Monad.Trans.Fresh.Delta",
          "name": "seedDelta",
          "normalized": "a-\u003e(a-\u003ea)-\u003e(a-\u003e(a,a))-\u003eCofree Triplet a",
          "package": "data-fresh",
          "partial": "Delta",
          "signature": "v-\u003e(v-\u003ev)-\u003e(v-\u003e(v,v))-\u003eCofree Triplet v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fresh/docs/Control-Monad-Trans-Fresh-Delta.html#v:seedDelta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Fresh.Stream",
          "name": "Stream",
          "package": "data-fresh",
          "source": "src/Control-Monad-Trans-Fresh-Stream.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Monad Trans Fresh Stream",
          "module": "Control.Monad.Trans.Fresh.Stream",
          "name": "Stream",
          "package": "data-fresh",
          "partial": "Stream",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-fresh/docs/Control-Monad-Trans-Fresh-Stream.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Fresh.Stream",
          "name": "FreshT",
          "package": "data-fresh",
          "source": "src/Control-Monad-Trans-Fresh-Stream.html#FreshT",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Control Monad Trans Fresh Stream",
          "module": "Control.Monad.Trans.Fresh.Stream",
          "name": "FreshT",
          "package": "data-fresh",
          "partial": "Fresh",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/data-fresh/docs/Control-Monad-Trans-Fresh-Stream.html#t:FreshT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Fresh.Stream",
          "name": "FreshT",
          "package": "data-fresh",
          "signature": "FreshT",
          "source": "src/Control-Monad-Trans-Fresh-Stream.html#FreshT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Fresh Stream",
          "module": "Control.Monad.Trans.Fresh.Stream",
          "name": "FreshT",
          "package": "data-fresh",
          "partial": "Fresh",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fresh/docs/Control-Monad-Trans-Fresh-Stream.html#v:FreshT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA stream of integers.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Fresh.Stream",
          "name": "integerStream",
          "package": "data-fresh",
          "signature": "Integer -\u003e Cofree Identity Integer",
          "source": "src/Control-Monad-Trans-Fresh-Stream.html#integerStream",
          "type": "function"
        },
        "index": {
          "description": "stream of integers",
          "hierarchy": "Control Monad Trans Fresh Stream",
          "module": "Control.Monad.Trans.Fresh.Stream",
          "name": "integerStream",
          "normalized": "Integer-\u003eCofree Identity Integer",
          "package": "data-fresh",
          "partial": "Stream",
          "signature": "Integer-\u003eCofree Identity Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fresh/docs/Control-Monad-Trans-Fresh-Stream.html#v:integerStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a \u003ccode\u003eCofree Identity v\u003c/code\u003e based on an infinite list.\n\u003c/p\u003e\u003cp\u003eThis function will cause an error when the list turns out to be finite.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Fresh.Stream",
          "name": "listStream",
          "package": "data-fresh",
          "signature": "[v] -\u003e Cofree Identity v",
          "source": "src/Control-Monad-Trans-Fresh-Stream.html#listStream",
          "type": "function"
        },
        "index": {
          "description": "Creates Cofree Identity based on an infinite list This function will cause an error when the list turns out to be finite",
          "hierarchy": "Control Monad Trans Fresh Stream",
          "module": "Control.Monad.Trans.Fresh.Stream",
          "name": "listStream",
          "normalized": "[a]-\u003eCofree Identity a",
          "package": "data-fresh",
          "partial": "Stream",
          "signature": "[v]-\u003eCofree Identity v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fresh/docs/Control-Monad-Trans-Fresh-Stream.html#v:listStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Fresh.Stream",
          "name": "runFreshT",
          "package": "data-fresh",
          "signature": "Cofree Identity v -\u003e m (a, Cofree Identity v)",
          "source": "src/Control-Monad-Trans-Fresh-Stream.html#FreshT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Fresh Stream",
          "module": "Control.Monad.Trans.Fresh.Stream",
          "name": "runFreshT",
          "normalized": "Cofree Identity a-\u003eb(c,Cofree Identity a)",
          "package": "data-fresh",
          "partial": "Fresh",
          "signature": "Cofree Identity v-\u003em(a,Cofree Identity v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fresh/docs/Control-Monad-Trans-Fresh-Stream.html#v:runFreshT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a \u003ccode\u003eCofree Identity v\u003c/code\u003e, based on a seed, and a function to split it.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Fresh.Stream",
          "name": "seedStream",
          "package": "data-fresh",
          "signature": "v-\u003e (v -\u003e v)-\u003e Cofree Identity v",
          "type": "function"
        },
        "index": {
          "description": "Creates Cofree Identity based on seed and function to split it",
          "hierarchy": "Control Monad Trans Fresh Stream",
          "module": "Control.Monad.Trans.Fresh.Stream",
          "name": "seedStream",
          "normalized": "a-\u003e(a-\u003ea)-\u003eCofree Identity a",
          "package": "data-fresh",
          "partial": "Stream",
          "signature": "v-\u003e(v-\u003ev)-\u003eCofree Identity v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fresh/docs/Control-Monad-Trans-Fresh-Stream.html#v:seedStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fresh",
          "name": "Fresh",
          "package": "data-fresh",
          "source": "src/Data-Fresh.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Fresh",
          "module": "Data.Fresh",
          "name": "Fresh",
          "package": "data-fresh",
          "partial": "Fresh",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-fresh/docs/Data-Fresh.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fresh",
          "name": "Fresh",
          "package": "data-fresh",
          "source": "src/Data-Fresh.html#Fresh",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Fresh",
          "module": "Data.Fresh",
          "name": "Fresh",
          "package": "data-fresh",
          "partial": "Fresh",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/data-fresh/docs/Data-Fresh.html#t:Fresh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fresh",
          "name": "fresh",
          "package": "data-fresh",
          "signature": "m v",
          "source": "src/Data-Fresh.html#fresh",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Fresh",
          "module": "Data.Fresh",
          "name": "fresh",
          "package": "data-fresh",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/data-fresh/docs/Data-Fresh.html#v:fresh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Triplet",
          "name": "Triplet",
          "package": "data-fresh",
          "source": "src/Data-Triplet.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Triplet",
          "module": "Data.Triplet",
          "name": "Triplet",
          "package": "data-fresh",
          "partial": "Triplet",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-fresh/docs/Data-Triplet.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Triplet",
          "name": "Triplet",
          "package": "data-fresh",
          "source": "src/Data-Triplet.html#Triplet",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Triplet",
          "module": "Data.Triplet",
          "name": "Triplet",
          "package": "data-fresh",
          "partial": "Triplet",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-fresh/docs/Data-Triplet.html#t:Triplet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Triplet",
          "name": "Triplet",
          "package": "data-fresh",
          "signature": "Triplet a a a",
          "source": "src/Data-Triplet.html#Triplet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Triplet",
          "module": "Data.Triplet",
          "name": "Triplet",
          "package": "data-fresh",
          "partial": "Triplet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-fresh/docs/Data-Triplet.html#v:Triplet"
      }
    }
  ]
]