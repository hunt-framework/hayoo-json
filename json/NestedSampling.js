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
        "word": "NestedSampling"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Statistics.MiniNest",
          "name": "MiniNest",
          "package": "NestedSampling",
          "source": "src/Statistics-MiniNest.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Statistics MiniNest",
          "module": "Statistics.MiniNest",
          "name": "MiniNest",
          "package": "NestedSampling",
          "partial": "Mini Nest",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/NestedSampling/docs/Statistics-MiniNest.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Statistics.MiniNest",
          "name": "NestedSamplingResult",
          "package": "NestedSampling",
          "source": "src/Statistics-MiniNest.html#NestedSamplingResult",
          "type": "data"
        },
        "index": {
          "hierarchy": "Statistics MiniNest",
          "module": "Statistics.MiniNest",
          "name": "NestedSamplingResult",
          "package": "NestedSampling",
          "partial": "Nested Sampling Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/NestedSampling/docs/Statistics-MiniNest.html#t:NestedSamplingResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Statistics.MiniNest",
          "name": "SamplingObject",
          "package": "NestedSampling",
          "source": "src/Statistics-MiniNest.html#SamplingObject",
          "type": "class"
        },
        "index": {
          "hierarchy": "Statistics MiniNest",
          "module": "Statistics.MiniNest",
          "name": "SamplingObject",
          "package": "NestedSampling",
          "partial": "Sampling Object",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/NestedSampling/docs/Statistics-MiniNest.html#t:SamplingObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Statistics.MiniNest",
          "name": "getLogL",
          "package": "NestedSampling",
          "signature": "a -\u003e Double",
          "source": "src/Statistics-MiniNest.html#getLogL",
          "type": "method"
        },
        "index": {
          "hierarchy": "Statistics MiniNest",
          "module": "Statistics.MiniNest",
          "name": "getLogL",
          "normalized": "a-\u003eDouble",
          "package": "NestedSampling",
          "partial": "Log",
          "signature": "a-\u003eDouble",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/NestedSampling/docs/Statistics-MiniNest.html#v:getLogL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Statistics.MiniNest",
          "name": "getLogWt",
          "package": "NestedSampling",
          "signature": "a -\u003e Double",
          "source": "src/Statistics-MiniNest.html#getLogWt",
          "type": "method"
        },
        "index": {
          "hierarchy": "Statistics MiniNest",
          "module": "Statistics.MiniNest",
          "name": "getLogWt",
          "normalized": "a-\u003eDouble",
          "package": "NestedSampling",
          "partial": "Log Wt",
          "signature": "a-\u003eDouble",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/NestedSampling/docs/Statistics-MiniNest.html#v:getLogWt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enestedSampling computes the evidence Z and samples from the posterior.\n Args:\n   priorSamples: a list of samples from the prior.\n   explore: a function that evolves an object within a likelihood constraint.\n   iterations: number of iterations to run.\n\u003c/p\u003e",
          "module": "Statistics.MiniNest",
          "name": "nestedSampling",
          "package": "NestedSampling",
          "signature": "[a] -\u003e (a -\u003e Double -\u003e IO a) -\u003e Int -\u003e IO (NestedSamplingResult a)",
          "source": "src/Statistics-MiniNest.html#nestedSampling",
          "type": "function"
        },
        "index": {
          "description": "nestedSampling computes the evidence and samples from the posterior Args priorSamples list of samples from the prior explore function that evolves an object within likelihood constraint iterations number of iterations to run",
          "hierarchy": "Statistics MiniNest",
          "module": "Statistics.MiniNest",
          "name": "nestedSampling",
          "normalized": "[a]-\u003e(a-\u003eDouble-\u003eIO a)-\u003eInt-\u003eIO(NestedSamplingResult a)",
          "package": "NestedSampling",
          "partial": "Sampling",
          "signature": "[a]-\u003e(a-\u003eDouble-\u003eIO a)-\u003eInt-\u003eIO(NestedSamplingResult a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NestedSampling/docs/Statistics-MiniNest.html#v:nestedSampling"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Statistics.MiniNest",
          "name": "setLogWt",
          "package": "NestedSampling",
          "signature": "a -\u003e Double -\u003e a",
          "source": "src/Statistics-MiniNest.html#setLogWt",
          "type": "method"
        },
        "index": {
          "hierarchy": "Statistics MiniNest",
          "module": "Statistics.MiniNest",
          "name": "setLogWt",
          "normalized": "a-\u003eDouble-\u003ea",
          "package": "NestedSampling",
          "partial": "Log Wt",
          "signature": "a-\u003eDouble-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/NestedSampling/docs/Statistics-MiniNest.html#v:setLogWt"
      }
    }
  ]
]