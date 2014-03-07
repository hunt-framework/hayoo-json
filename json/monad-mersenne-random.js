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
        "word": "monad-mersenne-random"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA fast random number generator monad.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Mersenne.Random",
          "name": "Random",
          "package": "monad-mersenne-random",
          "source": "src/Control-Monad-Mersenne-Random.html",
          "type": "module"
        },
        "index": {
          "description": "fast random number generator monad",
          "hierarchy": "Control Monad Mersenne Random",
          "module": "Control.Monad.Mersenne.Random",
          "name": "Random",
          "package": "monad-mersenne-random",
          "partial": "Random",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monad-mersenne-random/docs/Control-Monad-Mersenne-Random.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe state of a random monad, optimized for performance.\n\u003c/p\u003e",
          "module": "Control.Monad.Mersenne.Random",
          "name": "R",
          "package": "monad-mersenne-random",
          "source": "src/Control-Monad-Mersenne-Random.html#R",
          "type": "data"
        },
        "index": {
          "description": "The state of random monad optimized for performance",
          "hierarchy": "Control Monad Mersenne Random",
          "module": "Control.Monad.Mersenne.Random",
          "name": "R",
          "package": "monad-mersenne-random",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/monad-mersenne-random/docs/Control-Monad-Mersenne-Random.html#t:R"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA basic random monad, for generating random numbers from pure mersenne twisters.\n\u003c/p\u003e",
          "module": "Control.Monad.Mersenne.Random",
          "name": "Rand",
          "package": "monad-mersenne-random",
          "source": "src/Control-Monad-Mersenne-Random.html#Rand",
          "type": "newtype"
        },
        "index": {
          "description": "basic random monad for generating random numbers from pure mersenne twisters",
          "hierarchy": "Control Monad Mersenne Random",
          "module": "Control.Monad.Mersenne.Random",
          "name": "Rand",
          "package": "monad-mersenne-random",
          "partial": "Rand",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/monad-mersenne-random/docs/Control-Monad-Mersenne-Random.html#t:Rand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Mersenne.Random",
          "name": "R",
          "package": "monad-mersenne-random",
          "signature": "R !a !PureMT",
          "source": "src/Control-Monad-Mersenne-Random.html#R",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Mersenne Random",
          "module": "Control.Monad.Mersenne.Random",
          "name": "R",
          "package": "monad-mersenne-random",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-mersenne-random/docs/Control-Monad-Mersenne-Random.html#v:R"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Mersenne.Random",
          "name": "Rand",
          "package": "monad-mersenne-random",
          "signature": "Rand",
          "source": "src/Control-Monad-Mersenne-Random.html#Rand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Mersenne Random",
          "module": "Control.Monad.Mersenne.Random",
          "name": "Rand",
          "package": "monad-mersenne-random",
          "partial": "Rand",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-mersenne-random/docs/Control-Monad-Mersenne-Random.html#v:Rand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate a random computation using the mersenne generator \u003ccode\u003eg\u003c/code\u003e.  Note that the\n generator \u003ccode\u003eg\u003c/code\u003e is not returned, so there's no way to recover the\n updated version of \u003ccode\u003eg\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Mersenne.Random",
          "name": "evalRandom",
          "package": "monad-mersenne-random",
          "signature": "Rand a -\u003e PureMT -\u003e a",
          "source": "src/Control-Monad-Mersenne-Random.html#evalRandom",
          "type": "function"
        },
        "index": {
          "description": "Evaluate random computation using the mersenne generator Note that the generator is not returned so there no way to recover the updated version of",
          "hierarchy": "Control Monad Mersenne Random",
          "module": "Control.Monad.Mersenne.Random",
          "name": "evalRandom",
          "normalized": "Rand a-\u003ePureMT-\u003ea",
          "package": "monad-mersenne-random",
          "partial": "Random",
          "signature": "Rand a-\u003ePureMT-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-mersenne-random/docs/Control-Monad-Mersenne-Random.html#v:evalRandom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Mersenne.Random",
          "name": "getBool",
          "package": "monad-mersenne-random",
          "signature": "Rand Bool",
          "source": "src/Control-Monad-Mersenne-Random.html#getBool",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Mersenne Random",
          "module": "Control.Monad.Mersenne.Random",
          "name": "getBool",
          "package": "monad-mersenne-random",
          "partial": "Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-mersenne-random/docs/Control-Monad-Mersenne-Random.html#v:getBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYield a new 53-bit precise \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e value from the generator.\n\u003c/p\u003e",
          "module": "Control.Monad.Mersenne.Random",
          "name": "getDouble",
          "package": "monad-mersenne-random",
          "signature": "Rand Double",
          "source": "src/Control-Monad-Mersenne-Random.html#getDouble",
          "type": "function"
        },
        "index": {
          "description": "Yield new bit precise Double value from the generator",
          "hierarchy": "Control Monad Mersenne Random",
          "module": "Control.Monad.Mersenne.Random",
          "name": "getDouble",
          "package": "monad-mersenne-random",
          "partial": "Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-mersenne-random/docs/Control-Monad-Mersenne-Random.html#v:getDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYield a new \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e value from the generator.\n\u003c/p\u003e",
          "module": "Control.Monad.Mersenne.Random",
          "name": "getInt",
          "package": "monad-mersenne-random",
          "signature": "Rand Int",
          "source": "src/Control-Monad-Mersenne-Random.html#getInt",
          "type": "function"
        },
        "index": {
          "description": "Yield new Int value from the generator",
          "hierarchy": "Control Monad Mersenne Random",
          "module": "Control.Monad.Mersenne.Random",
          "name": "getInt",
          "package": "monad-mersenne-random",
          "partial": "Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-mersenne-random/docs/Control-Monad-Mersenne-Random.html#v:getInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYield a new \u003ccode\u003e\u003ca\u003eInt64\u003c/a\u003e\u003c/code\u003e value from the generator.\n\u003c/p\u003e",
          "module": "Control.Monad.Mersenne.Random",
          "name": "getInt64",
          "package": "monad-mersenne-random",
          "signature": "Rand Int64",
          "source": "src/Control-Monad-Mersenne-Random.html#getInt64",
          "type": "function"
        },
        "index": {
          "description": "Yield new Int64 value from the generator",
          "hierarchy": "Control Monad Mersenne Random",
          "module": "Control.Monad.Mersenne.Random",
          "name": "getInt64",
          "package": "monad-mersenne-random",
          "partial": "Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-mersenne-random/docs/Control-Monad-Mersenne-Random.html#v:getInt64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYield a new \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003e value from the generator.\n\u003c/p\u003e",
          "module": "Control.Monad.Mersenne.Random",
          "name": "getWord",
          "package": "monad-mersenne-random",
          "signature": "Rand Word",
          "source": "src/Control-Monad-Mersenne-Random.html#getWord",
          "type": "function"
        },
        "index": {
          "description": "Yield new Word value from the generator",
          "hierarchy": "Control Monad Mersenne Random",
          "module": "Control.Monad.Mersenne.Random",
          "name": "getWord",
          "package": "monad-mersenne-random",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-mersenne-random/docs/Control-Monad-Mersenne-Random.html#v:getWord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYield a new \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e value from the generator.\n\u003c/p\u003e",
          "module": "Control.Monad.Mersenne.Random",
          "name": "getWord64",
          "package": "monad-mersenne-random",
          "signature": "Rand Word64",
          "source": "src/Control-Monad-Mersenne-Random.html#getWord64",
          "type": "function"
        },
        "index": {
          "description": "Yield new Word64 value from the generator",
          "hierarchy": "Control Monad Mersenne Random",
          "module": "Control.Monad.Mersenne.Random",
          "name": "getWord64",
          "package": "monad-mersenne-random",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-mersenne-random/docs/Control-Monad-Mersenne-Random.html#v:getWord64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Mersenne.Random",
          "name": "runRand",
          "package": "monad-mersenne-random",
          "signature": "PureMT -\u003e R a",
          "source": "src/Control-Monad-Mersenne-Random.html#Rand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Mersenne Random",
          "module": "Control.Monad.Mersenne.Random",
          "name": "runRand",
          "normalized": "PureMT-\u003eR a",
          "package": "monad-mersenne-random",
          "partial": "Rand",
          "signature": "PureMT-\u003eR a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-mersenne-random/docs/Control-Monad-Mersenne-Random.html#v:runRand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a random computation using the generator \u003ccode\u003eg\u003c/code\u003e, returning the result\n and the updated generator.\n\u003c/p\u003e",
          "module": "Control.Monad.Mersenne.Random",
          "name": "runRandom",
          "package": "monad-mersenne-random",
          "signature": "Rand a -\u003e PureMT -\u003e (a, PureMT)",
          "source": "src/Control-Monad-Mersenne-Random.html#runRandom",
          "type": "function"
        },
        "index": {
          "description": "Run random computation using the generator returning the result and the updated generator",
          "hierarchy": "Control Monad Mersenne Random",
          "module": "Control.Monad.Mersenne.Random",
          "name": "runRandom",
          "normalized": "Rand a-\u003ePureMT-\u003e(a,PureMT)",
          "package": "monad-mersenne-random",
          "partial": "Random",
          "signature": "Rand a-\u003ePureMT-\u003e(a,PureMT)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-mersenne-random/docs/Control-Monad-Mersenne-Random.html#v:runRandom"
      }
    }
  ]
]