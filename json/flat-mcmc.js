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
        "word": "flat-mcmc"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.MCMC.Flat",
          "name": "Flat",
          "package": "flat-mcmc",
          "source": "src/Numeric-MCMC-Flat.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric MCMC Flat",
          "module": "Numeric.MCMC.Flat",
          "name": "Flat",
          "package": "flat-mcmc",
          "partial": "Flat",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/flat-mcmc/docs/Numeric-MCMC-Flat.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn ensemble of particles.\n\u003c/p\u003e",
          "module": "Numeric.MCMC.Flat",
          "name": "Ensemble",
          "package": "flat-mcmc",
          "source": "src/Numeric-MCMC-Flat.html#Ensemble",
          "type": "type"
        },
        "index": {
          "description": "An ensemble of particles",
          "hierarchy": "Numeric MCMC Flat",
          "module": "Numeric.MCMC.Flat",
          "name": "Ensemble",
          "package": "flat-mcmc",
          "partial": "Ensemble",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/flat-mcmc/docs/Numeric-MCMC-Flat.html#t:Ensemble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eState of the Markov chain.  Current ensemble position is held in \u003ccode\u003etheta\u003c/code\u003e,\n   while \u003ccode\u003e\u003ca\u003eaccepts\u003c/a\u003e\u003c/code\u003e counts the number of proposals accepted.\n\u003c/p\u003e",
          "module": "Numeric.MCMC.Flat",
          "name": "MarkovChain",
          "package": "flat-mcmc",
          "source": "src/Numeric-MCMC-Flat.html#MarkovChain",
          "type": "data"
        },
        "index": {
          "description": "State of the Markov chain Current ensemble position is held in theta while accepts counts the number of proposals accepted",
          "hierarchy": "Numeric MCMC Flat",
          "module": "Numeric.MCMC.Flat",
          "name": "MarkovChain",
          "package": "flat-mcmc",
          "partial": "Markov Chain",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/flat-mcmc/docs/Numeric-MCMC-Flat.html#t:MarkovChain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptions for the chain.  The target (expected to be a log density), as\n   well as the size of the ensemble.  The size should be an even number.  Also\n   holds the specified parallel granularity as \u003ccode\u003ecsize\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.MCMC.Flat",
          "name": "Options",
          "package": "flat-mcmc",
          "source": "src/Numeric-MCMC-Flat.html#Options",
          "type": "data"
        },
        "index": {
          "description": "Options for the chain The target expected to be log density as well as the size of the ensemble The size should be an even number Also holds the specified parallel granularity as csize",
          "hierarchy": "Numeric MCMC Flat",
          "module": "Numeric.MCMC.Flat",
          "name": "Options",
          "package": "flat-mcmc",
          "partial": "Options",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/flat-mcmc/docs/Numeric-MCMC-Flat.html#t:Options"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.MCMC.Flat",
          "name": "MarkovChain",
          "package": "flat-mcmc",
          "signature": "MarkovChain",
          "source": "src/Numeric-MCMC-Flat.html#MarkovChain",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric MCMC Flat",
          "module": "Numeric.MCMC.Flat",
          "name": "MarkovChain",
          "package": "flat-mcmc",
          "partial": "Markov Chain",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/flat-mcmc/docs/Numeric-MCMC-Flat.html#v:MarkovChain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.MCMC.Flat",
          "name": "Options",
          "package": "flat-mcmc",
          "signature": "Options",
          "source": "src/Numeric-MCMC-Flat.html#Options",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric MCMC Flat",
          "module": "Numeric.MCMC.Flat",
          "name": "Options",
          "package": "flat-mcmc",
          "partial": "Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/flat-mcmc/docs/Numeric-MCMC-Flat.html#v:Options"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.MCMC.Flat",
          "name": "_csize",
          "package": "flat-mcmc",
          "signature": "Int",
          "source": "src/Numeric-MCMC-Flat.html#Options",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric MCMC Flat",
          "module": "Numeric.MCMC.Flat",
          "name": "_csize",
          "package": "flat-mcmc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/flat-mcmc/docs/Numeric-MCMC-Flat.html#v:_csize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.MCMC.Flat",
          "name": "_size",
          "package": "flat-mcmc",
          "signature": "Int",
          "source": "src/Numeric-MCMC-Flat.html#Options",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric MCMC Flat",
          "module": "Numeric.MCMC.Flat",
          "name": "_size",
          "package": "flat-mcmc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/flat-mcmc/docs/Numeric-MCMC-Flat.html#v:_size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.MCMC.Flat",
          "name": "_target",
          "package": "flat-mcmc",
          "signature": "[Double] -\u003e Double",
          "source": "src/Numeric-MCMC-Flat.html#Options",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric MCMC Flat",
          "module": "Numeric.MCMC.Flat",
          "name": "_target",
          "normalized": "[Double]-\u003eDouble",
          "package": "flat-mcmc",
          "signature": "[Double]-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/flat-mcmc/docs/Numeric-MCMC-Flat.html#v:_target"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.MCMC.Flat",
          "name": "accepts",
          "package": "flat-mcmc",
          "signature": "Int",
          "source": "src/Numeric-MCMC-Flat.html#MarkovChain",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric MCMC Flat",
          "module": "Numeric.MCMC.Flat",
          "name": "accepts",
          "package": "flat-mcmc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/flat-mcmc/docs/Numeric-MCMC-Flat.html#v:accepts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.MCMC.Flat",
          "name": "ensemble",
          "package": "flat-mcmc",
          "signature": "Ensemble",
          "source": "src/Numeric-MCMC-Flat.html#MarkovChain",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric MCMC Flat",
          "module": "Numeric.MCMC.Flat",
          "name": "ensemble",
          "package": "flat-mcmc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/flat-mcmc/docs/Numeric-MCMC-Flat.html#v:ensemble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA convenience function to read and parse ensemble inits from disk.  \n   Assumes a text file with one particle per line, where each particle\n   element is separated by whitespace.\n\u003c/p\u003e",
          "module": "Numeric.MCMC.Flat",
          "name": "readInits",
          "package": "flat-mcmc",
          "signature": "FilePath -\u003e IO Ensemble",
          "source": "src/Numeric-MCMC-Flat.html#readInits",
          "type": "function"
        },
        "index": {
          "description": "convenience function to read and parse ensemble inits from disk Assumes text file with one particle per line where each particle element is separated by whitespace",
          "hierarchy": "Numeric MCMC Flat",
          "module": "Numeric.MCMC.Flat",
          "name": "readInits",
          "normalized": "FilePath-\u003eIO Ensemble",
          "package": "flat-mcmc",
          "partial": "Inits",
          "signature": "FilePath-\u003eIO Ensemble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/flat-mcmc/docs/Numeric-MCMC-Flat.html#v:readInits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDiffuse through states.\n\u003c/p\u003e",
          "module": "Numeric.MCMC.Flat",
          "name": "runChain",
          "package": "flat-mcmc",
          "signature": "Options -\u003e Int -\u003e Int -\u003e MarkovChain -\u003e Gen RealWorld -\u003e IO MarkovChain",
          "source": "src/Numeric-MCMC-Flat.html#runChain",
          "type": "function"
        },
        "index": {
          "description": "Diffuse through states",
          "hierarchy": "Numeric MCMC Flat",
          "module": "Numeric.MCMC.Flat",
          "name": "runChain",
          "normalized": "Options-\u003eInt-\u003eInt-\u003eMarkovChain-\u003eGen RealWorld-\u003eIO MarkovChain",
          "package": "flat-mcmc",
          "partial": "Chain",
          "signature": "Options-\u003eInt-\u003eInt-\u003eMarkovChain-\u003eGen RealWorld-\u003eIO MarkovChain",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/flat-mcmc/docs/Numeric-MCMC-Flat.html#v:runChain"
      }
    }
  ]
]