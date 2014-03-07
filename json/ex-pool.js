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
        "word": "ex-pool"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA high-performance striped pooling abstraction for managing flexibly-sized\n collections of resources such as database connections.\n\u003c/p\u003e\u003cp\u003eThis module is based on \u003ccode\u003eresource-pool\u003c/code\u003e. For more comprehensive\n documentation, please refer to the original package:\n \u003ca\u003ehttp://hackage.haskell.org/package/resource-pool\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Pool",
          "name": "Pool",
          "package": "ex-pool",
          "source": "src/Data-Pool.html",
          "type": "module"
        },
        "index": {
          "description": "high-performance striped pooling abstraction for managing flexibly-sized collections of resources such as database connections This module is based on resource-pool For more comprehensive documentation please refer to the original package http hackage.haskell.org package resource-pool",
          "hierarchy": "Data Pool",
          "module": "Data.Pool",
          "name": "Pool",
          "package": "ex-pool",
          "partial": "Pool",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ex-pool/docs/Data-Pool.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Pool",
          "name": "LocalPool",
          "package": "ex-pool",
          "source": "src/Data-Pool.html#LocalPool",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Pool",
          "module": "Data.Pool",
          "name": "LocalPool",
          "package": "ex-pool",
          "partial": "Local Pool",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ex-pool/docs/Data-Pool.html#t:LocalPool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Pool",
          "name": "Pool",
          "package": "ex-pool",
          "source": "src/Data-Pool.html#Pool",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Pool",
          "module": "Data.Pool",
          "name": "Pool",
          "package": "ex-pool",
          "partial": "Pool",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ex-pool/docs/Data-Pool.html#t:Pool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Pool",
          "name": "createPool",
          "package": "ex-pool",
          "signature": "IO a-\u003e (a -\u003e IO ())-\u003e Word32-\u003e NominalDiffTime-\u003e Word32-\u003e IO (Pool a)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Pool",
          "module": "Data.Pool",
          "name": "createPool",
          "normalized": "IO a-\u003e(a-\u003eIO())-\u003eWord-\u003eNominalDiffTime-\u003eWord-\u003eIO(Pool a)",
          "package": "ex-pool",
          "partial": "Pool",
          "signature": "IO a-\u003e(a-\u003eIO())-\u003eWord-\u003eNominalDiffTime-\u003eWord-\u003eIO(Pool a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ex-pool/docs/Data-Pool.html#v:createPool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Pool",
          "name": "destroyResource",
          "package": "ex-pool",
          "signature": "Pool a -\u003e LocalPool a -\u003e a -\u003e m ()",
          "source": "src/Data-Pool.html#destroyResource",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Pool",
          "module": "Data.Pool",
          "name": "destroyResource",
          "normalized": "Pool a-\u003eLocalPool a-\u003ea-\u003eb()",
          "package": "ex-pool",
          "partial": "Resource",
          "signature": "Pool a-\u003eLocalPool a-\u003ea-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ex-pool/docs/Data-Pool.html#v:destroyResource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDestroys all resources currently not in use and removes them from the pool.\n\u003c/p\u003e\u003cp\u003eNote that resources are automatically released when the \u003ccode\u003e\u003ca\u003ePool\u003c/a\u003e\u003c/code\u003e is\n garbage-collected. This function is however useful in situations where a\n \u003ccode\u003e\u003ca\u003ePool\u003c/a\u003e\u003c/code\u003e is explicitly discarded and resources should be freed immediately.\n\u003c/p\u003e",
          "module": "Data.Pool",
          "name": "purgePool",
          "package": "ex-pool",
          "signature": "Pool a -\u003e IO ()",
          "source": "src/Data-Pool.html#purgePool",
          "type": "function"
        },
        "index": {
          "description": "Destroys all resources currently not in use and removes them from the pool Note that resources are automatically released when the Pool is garbage-collected This function is however useful in situations where Pool is explicitly discarded and resources should be freed immediately",
          "hierarchy": "Data Pool",
          "module": "Data.Pool",
          "name": "purgePool",
          "normalized": "Pool a-\u003eIO()",
          "package": "ex-pool",
          "partial": "Pool",
          "signature": "Pool a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ex-pool/docs/Data-Pool.html#v:purgePool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Pool",
          "name": "putResource",
          "package": "ex-pool",
          "signature": "LocalPool a -\u003e a -\u003e m ()",
          "source": "src/Data-Pool.html#putResource",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Pool",
          "module": "Data.Pool",
          "name": "putResource",
          "normalized": "LocalPool a-\u003ea-\u003eb()",
          "package": "ex-pool",
          "partial": "Resource",
          "signature": "LocalPool a-\u003ea-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ex-pool/docs/Data-Pool.html#v:putResource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Pool",
          "name": "takeResource",
          "package": "ex-pool",
          "signature": "Pool a -\u003e m (a, LocalPool a)",
          "source": "src/Data-Pool.html#takeResource",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Pool",
          "module": "Data.Pool",
          "name": "takeResource",
          "normalized": "Pool a-\u003eb(a,LocalPool a)",
          "package": "ex-pool",
          "partial": "Resource",
          "signature": "Pool a-\u003em(a,LocalPool a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ex-pool/docs/Data-Pool.html#v:takeResource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA non-blocking version of \u003ccode\u003e\u003ca\u003etakeResource\u003c/a\u003e\u003c/code\u003e. The \u003ccode\u003e\u003ca\u003etryTakeResource\u003c/a\u003e\u003c/code\u003e function\n returns immediately, with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the pool is exhausted, or \u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e (a,\n \u003ccode\u003e\u003ca\u003eLocalPool\u003c/a\u003e\u003c/code\u003e a)\u003c/code\u003e if a resource could be borrowed from the pool successfully.\n\u003c/p\u003e",
          "module": "Data.Pool",
          "name": "tryTakeResource",
          "package": "ex-pool",
          "signature": "Pool a -\u003e m (Maybe (a, LocalPool a))",
          "source": "src/Data-Pool.html#tryTakeResource",
          "type": "function"
        },
        "index": {
          "description": "non-blocking version of takeResource The tryTakeResource function returns immediately with Nothing if the pool is exhausted or Just LocalPool if resource could be borrowed from the pool successfully",
          "hierarchy": "Data Pool",
          "module": "Data.Pool",
          "name": "tryTakeResource",
          "normalized": "Pool a-\u003eb(Maybe(a,LocalPool a))",
          "package": "ex-pool",
          "partial": "Take Resource",
          "signature": "Pool a-\u003em(Maybe(a,LocalPool a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ex-pool/docs/Data-Pool.html#v:tryTakeResource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003ewithResource\u003c/a\u003e\u003c/code\u003e, but only performs the action if a resource could\n be taken from the pool \u003cem\u003ewithout blocking\u003c/em\u003e. Otherwise, \u003ccode\u003e\u003ca\u003etryWithResource\u003c/a\u003e\u003c/code\u003e\n returns immediately with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e (ie. the action function is \u003cem\u003enot\u003c/em\u003e called).\n Conversely, if a resource can be borrowed from the pool without blocking, the\n action is performed and it's result is returned, wrapped in a \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Pool",
          "name": "tryWithResource",
          "package": "ex-pool",
          "signature": "Pool a -\u003e (a -\u003e m b) -\u003e m (Maybe b)",
          "source": "src/Data-Pool.html#tryWithResource",
          "type": "function"
        },
        "index": {
          "description": "Similar to withResource but only performs the action if resource could be taken from the pool without blocking Otherwise tryWithResource returns immediately with Nothing ie the action function is not called Conversely if resource can be borrowed from the pool without blocking the action is performed and it result is returned wrapped in Just",
          "hierarchy": "Data Pool",
          "module": "Data.Pool",
          "name": "tryWithResource",
          "normalized": "Pool a-\u003e(a-\u003eb c)-\u003eb(Maybe c)",
          "package": "ex-pool",
          "partial": "With Resource",
          "signature": "Pool a-\u003e(a-\u003em b)-\u003em(Maybe b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ex-pool/docs/Data-Pool.html#v:tryWithResource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Pool",
          "name": "withResource",
          "package": "ex-pool",
          "signature": "Pool a -\u003e (a -\u003e m b) -\u003e m b",
          "source": "src/Data-Pool.html#withResource",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Pool",
          "module": "Data.Pool",
          "name": "withResource",
          "normalized": "Pool a-\u003e(a-\u003eb c)-\u003eb c",
          "package": "ex-pool",
          "partial": "Resource",
          "signature": "Pool a-\u003e(a-\u003em b)-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ex-pool/docs/Data-Pool.html#v:withResource"
      }
    }
  ]
]