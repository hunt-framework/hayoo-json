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
        "word": "pool"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Pool",
          "name": "Pool",
          "package": "pool",
          "source": "src/Data-Pool.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Pool",
          "module": "Data.Pool",
          "name": "Pool",
          "package": "pool",
          "partial": "Pool",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pool/docs/Data-Pool.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Pool",
          "name": "Pool",
          "package": "pool",
          "source": "src/Data-Pool.html#Pool",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Pool",
          "module": "Data.Pool",
          "name": "Pool",
          "package": "pool",
          "partial": "Pool",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pool/docs/Data-Pool.html#t:Pool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Pool",
          "name": "PoolStats",
          "package": "pool",
          "source": "src/Data-Pool.html#PoolStats",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Pool",
          "module": "Data.Pool",
          "name": "PoolStats",
          "package": "pool",
          "partial": "Pool Stats",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pool/docs/Data-Pool.html#t:PoolStats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Pool",
          "name": "PoolStats",
          "package": "pool",
          "signature": "PoolStats",
          "source": "src/Data-Pool.html#PoolStats",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Pool",
          "module": "Data.Pool",
          "name": "PoolStats",
          "package": "pool",
          "partial": "Pool Stats",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pool/docs/Data-Pool.html#v:PoolStats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new pool without any resource alive checking.\n\u003c/p\u003e",
          "module": "Data.Pool",
          "name": "createPool",
          "package": "pool",
          "signature": "IO a-\u003e (a -\u003e IO ())-\u003e Int-\u003e (Pool a -\u003e m b)-\u003e m b",
          "type": "function"
        },
        "index": {
          "description": "Create new pool without any resource alive checking",
          "hierarchy": "Data Pool",
          "module": "Data.Pool",
          "name": "createPool",
          "normalized": "IO a-\u003e(a-\u003eIO())-\u003eInt-\u003e(Pool a-\u003eb c)-\u003eb c",
          "package": "pool",
          "partial": "Pool",
          "signature": "IO a-\u003e(a-\u003eIO())-\u003eInt-\u003e(Pool a-\u003em b)-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pool/docs/Data-Pool.html#v:createPool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new pool, including a function to check if a resource is still\n alive. Stale resources will automatically be removed from the pool.\n\u003c/p\u003e",
          "module": "Data.Pool",
          "name": "createPoolCheckAlive",
          "package": "pool",
          "signature": "IO a-\u003e (a -\u003e IO ())-\u003e Int-\u003e (Pool a -\u003e m b)-\u003e (a -\u003e IO Bool)-\u003e m b",
          "type": "function"
        },
        "index": {
          "description": "Create new pool including function to check if resource is still alive Stale resources will automatically be removed from the pool",
          "hierarchy": "Data Pool",
          "module": "Data.Pool",
          "name": "createPoolCheckAlive",
          "normalized": "IO a-\u003e(a-\u003eIO())-\u003eInt-\u003e(Pool a-\u003eb c)-\u003e(a-\u003eIO Bool)-\u003eb c",
          "package": "pool",
          "partial": "Pool Check Alive",
          "signature": "IO a-\u003e(a-\u003eIO())-\u003eInt-\u003e(Pool a-\u003em b)-\u003e(a-\u003eIO Bool)-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pool/docs/Data-Pool.html#v:createPoolCheckAlive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Pool",
          "name": "poolStats",
          "package": "pool",
          "signature": "Pool a -\u003e IO PoolStats",
          "source": "src/Data-Pool.html#poolStats",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Pool",
          "module": "Data.Pool",
          "name": "poolStats",
          "normalized": "Pool a-\u003eIO PoolStats",
          "package": "pool",
          "partial": "Stats",
          "signature": "Pool a-\u003eIO PoolStats",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pool/docs/Data-Pool.html#v:poolStats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Pool",
          "name": "poolStatsAvailable",
          "package": "pool",
          "signature": "Int",
          "source": "src/Data-Pool.html#PoolStats",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Pool",
          "module": "Data.Pool",
          "name": "poolStatsAvailable",
          "package": "pool",
          "partial": "Stats Available",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pool/docs/Data-Pool.html#v:poolStatsAvailable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Pool",
          "name": "poolStatsCreated",
          "package": "pool",
          "signature": "Int",
          "source": "src/Data-Pool.html#PoolStats",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Pool",
          "module": "Data.Pool",
          "name": "poolStatsCreated",
          "package": "pool",
          "partial": "Stats Created",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pool/docs/Data-Pool.html#v:poolStatsCreated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Pool",
          "name": "poolStatsMax",
          "package": "pool",
          "signature": "Int",
          "source": "src/Data-Pool.html#PoolStats",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Pool",
          "module": "Data.Pool",
          "name": "poolStatsMax",
          "package": "pool",
          "partial": "Stats Max",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pool/docs/Data-Pool.html#v:poolStatsMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempt to run the given action with a resource from the given \u003ccode\u003e\u003ca\u003ePool\u003c/a\u003e\u003c/code\u003e.\n Returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if no resource was available.\n\u003c/p\u003e",
          "module": "Data.Pool",
          "name": "withPool",
          "package": "pool",
          "signature": "Pool a -\u003e (a -\u003e m b) -\u003e m (Maybe b)",
          "source": "src/Data-Pool.html#withPool",
          "type": "function"
        },
        "index": {
          "description": "Attempt to run the given action with resource from the given Pool Returns Nothing if no resource was available",
          "hierarchy": "Data Pool",
          "module": "Data.Pool",
          "name": "withPool",
          "normalized": "Pool a-\u003e(a-\u003eb c)-\u003eb(Maybe c)",
          "package": "pool",
          "partial": "Pool",
          "signature": "Pool a-\u003e(a-\u003em b)-\u003em(Maybe b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pool/docs/Data-Pool.html#v:withPool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function throws a \u003ccode\u003ePoolExhaustedException\u003c/code\u003e when no resources are\n available. See \u003ccode\u003e\u003ca\u003ewithPoolAllocate\u003c/a\u003e\u003c/code\u003e to avoid this.\n\u003c/p\u003e",
          "module": "Data.Pool",
          "name": "withPool'",
          "package": "pool",
          "signature": "Pool a -\u003e (a -\u003e m b) -\u003e m b",
          "source": "src/Data-Pool.html#withPool%27",
          "type": "function"
        },
        "index": {
          "description": "This function throws PoolExhaustedException when no resources are available See withPoolAllocate to avoid this",
          "hierarchy": "Data Pool",
          "module": "Data.Pool",
          "name": "withPool'",
          "normalized": "Pool a-\u003e(a-\u003eb c)-\u003eb c",
          "package": "pool",
          "partial": "Pool'",
          "signature": "Pool a-\u003e(a-\u003em b)-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pool/docs/Data-Pool.html#v:withPool-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003ewithPool'\u003c/code\u003e, but instead of throwing a \u003ccode\u003ePoolExhaustedException\u003c/code\u003e\n when there the maximum number of resources are created and allocated, it\n allocates a new resource, passes it to the subprocess and then frees it.\n\u003c/p\u003e",
          "module": "Data.Pool",
          "name": "withPoolAllocate",
          "package": "pool",
          "signature": "Pool a -\u003e (a -\u003e m b) -\u003e m b",
          "source": "src/Data-Pool.html#withPoolAllocate",
          "type": "function"
        },
        "index": {
          "description": "Same as withPool but instead of throwing PoolExhaustedException when there the maximum number of resources are created and allocated it allocates new resource passes it to the subprocess and then frees it",
          "hierarchy": "Data Pool",
          "module": "Data.Pool",
          "name": "withPoolAllocate",
          "normalized": "Pool a-\u003e(a-\u003eb c)-\u003eb c",
          "package": "pool",
          "partial": "Pool Allocate",
          "signature": "Pool a-\u003e(a-\u003em b)-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pool/docs/Data-Pool.html#v:withPoolAllocate"
      }
    }
  ]
]