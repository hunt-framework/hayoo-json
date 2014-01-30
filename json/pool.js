[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pool/docs/Data-Pool.html#",
      "description": {
        "fct-module": "Data.Pool",
        "fct-package": "pool",
        "fct-signature": "module",
        "fct-source": "src/Data-Pool.html",
        "fct-type": "module",
        "title": "Pool"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Pool",
        "module": "Data.Pool",
        "name": "Pool",
        "normalized": "",
        "package": "pool",
        "partial": "Pool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pool/docs/Data-Pool.html#t:Pool",
      "description": {
        "fct-module": "Data.Pool",
        "fct-package": "pool",
        "fct-signature": "data",
        "fct-source": "src/Data-Pool.html#Pool",
        "fct-type": "data",
        "title": "Pool"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Pool",
        "module": "Data.Pool",
        "name": "Pool",
        "normalized": "",
        "package": "pool",
        "partial": "Pool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pool/docs/Data-Pool.html#t:PoolStats",
      "description": {
        "fct-module": "Data.Pool",
        "fct-package": "pool",
        "fct-signature": "data",
        "fct-source": "src/Data-Pool.html#PoolStats",
        "fct-type": "data",
        "title": "PoolStats"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Pool",
        "module": "Data.Pool",
        "name": "PoolStats",
        "normalized": "",
        "package": "pool",
        "partial": "Pool Stats",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pool/docs/Data-Pool.html#v:PoolStats",
      "description": {
        "fct-module": "Data.Pool",
        "fct-package": "pool",
        "fct-signature": "PoolStats",
        "fct-source": "src/Data-Pool.html#PoolStats",
        "fct-type": "function",
        "title": "PoolStats"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Pool",
        "module": "Data.Pool",
        "name": "PoolStats",
        "normalized": "",
        "package": "pool",
        "partial": "Pool Stats",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pool/docs/Data-Pool.html#v:createPool",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new pool without any resource alive checking.\n\u003c/p\u003e",
        "fct-module": "Data.Pool",
        "fct-package": "pool",
        "fct-signature": "IO a-\u003e (a -\u003e IO ())-\u003e Int-\u003e (Pool a -\u003e m b)-\u003e m b",
        "fct-type": "function",
        "title": "createPool"
      },
      "index": {
        "description": "Create new pool without any resource alive checking",
        "hierarchy": "Data Pool",
        "module": "Data.Pool",
        "name": "createPool",
        "normalized": "IO a-\u003e(a-\u003eIO())-\u003eInt-\u003e(Pool a-\u003eb c)-\u003eb c",
        "package": "pool",
        "partial": "Pool",
        "signature": "IO a-\u003e(a-\u003eIO())-\u003eInt-\u003e(Pool a-\u003em b)-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pool/docs/Data-Pool.html#v:createPoolCheckAlive",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new pool, including a function to check if a resource is still\n alive. Stale resources will automatically be removed from the pool.\n\u003c/p\u003e",
        "fct-module": "Data.Pool",
        "fct-package": "pool",
        "fct-signature": "IO a-\u003e (a -\u003e IO ())-\u003e Int-\u003e (Pool a -\u003e m b)-\u003e (a -\u003e IO Bool)-\u003e m b",
        "fct-type": "function",
        "title": "createPoolCheckAlive"
      },
      "index": {
        "description": "Create new pool including function to check if resource is still alive Stale resources will automatically be removed from the pool",
        "hierarchy": "Data Pool",
        "module": "Data.Pool",
        "name": "createPoolCheckAlive",
        "normalized": "IO a-\u003e(a-\u003eIO())-\u003eInt-\u003e(Pool a-\u003eb c)-\u003e(a-\u003eIO Bool)-\u003eb c",
        "package": "pool",
        "partial": "Pool Check Alive",
        "signature": "IO a-\u003e(a-\u003eIO())-\u003eInt-\u003e(Pool a-\u003em b)-\u003e(a-\u003eIO Bool)-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pool/docs/Data-Pool.html#v:poolStats",
      "description": {
        "fct-module": "Data.Pool",
        "fct-package": "pool",
        "fct-signature": "Pool a -\u003e IO PoolStats",
        "fct-source": "src/Data-Pool.html#poolStats",
        "fct-type": "function",
        "title": "poolStats"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Pool",
        "module": "Data.Pool",
        "name": "poolStats",
        "normalized": "Pool a-\u003eIO PoolStats",
        "package": "pool",
        "partial": "Stats",
        "signature": "Pool a-\u003eIO PoolStats"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pool/docs/Data-Pool.html#v:poolStatsAvailable",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Pool",
        "fct-package": "pool",
        "fct-signature": "Int",
        "fct-source": "src/Data-Pool.html#PoolStats",
        "fct-type": "function",
        "title": "poolStatsAvailable"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Pool",
        "module": "Data.Pool",
        "name": "poolStatsAvailable",
        "normalized": "",
        "package": "pool",
        "partial": "Stats Available",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pool/docs/Data-Pool.html#v:poolStatsCreated",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Pool",
        "fct-package": "pool",
        "fct-signature": "Int",
        "fct-source": "src/Data-Pool.html#PoolStats",
        "fct-type": "function",
        "title": "poolStatsCreated"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Pool",
        "module": "Data.Pool",
        "name": "poolStatsCreated",
        "normalized": "",
        "package": "pool",
        "partial": "Stats Created",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pool/docs/Data-Pool.html#v:poolStatsMax",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Pool",
        "fct-package": "pool",
        "fct-signature": "Int",
        "fct-source": "src/Data-Pool.html#PoolStats",
        "fct-type": "function",
        "title": "poolStatsMax"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Pool",
        "module": "Data.Pool",
        "name": "poolStatsMax",
        "normalized": "",
        "package": "pool",
        "partial": "Stats Max",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pool/docs/Data-Pool.html#v:withPool",
      "description": {
        "fct-descr": "\u003cp\u003eAttempt to run the given action with a resource from the given \u003ccode\u003e\u003ca\u003ePool\u003c/a\u003e\u003c/code\u003e.\n Returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if no resource was available.\n\u003c/p\u003e",
        "fct-module": "Data.Pool",
        "fct-package": "pool",
        "fct-signature": "Pool a -\u003e (a -\u003e m b) -\u003e m (Maybe b)",
        "fct-source": "src/Data-Pool.html#withPool",
        "fct-type": "function",
        "title": "withPool"
      },
      "index": {
        "description": "Attempt to run the given action with resource from the given Pool Returns Nothing if no resource was available",
        "hierarchy": "Data Pool",
        "module": "Data.Pool",
        "name": "withPool",
        "normalized": "Pool a-\u003e(a-\u003eb c)-\u003eb(Maybe c)",
        "package": "pool",
        "partial": "Pool",
        "signature": "Pool a-\u003e(a-\u003em b)-\u003em(Maybe b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pool/docs/Data-Pool.html#v:withPool-39-",
      "description": {
        "fct-descr": "\u003cp\u003eThis function throws a \u003ccode\u003ePoolExhaustedException\u003c/code\u003e when no resources are\n available. See \u003ccode\u003e\u003ca\u003ewithPoolAllocate\u003c/a\u003e\u003c/code\u003e to avoid this.\n\u003c/p\u003e",
        "fct-module": "Data.Pool",
        "fct-package": "pool",
        "fct-signature": "Pool a -\u003e (a -\u003e m b) -\u003e m b",
        "fct-source": "src/Data-Pool.html#withPool%27",
        "fct-type": "function",
        "title": "withPool'"
      },
      "index": {
        "description": "This function throws PoolExhaustedException when no resources are available See withPoolAllocate to avoid this",
        "hierarchy": "Data Pool",
        "module": "Data.Pool",
        "name": "withPool'",
        "normalized": "Pool a-\u003e(a-\u003eb c)-\u003eb c",
        "package": "pool",
        "partial": "Pool'",
        "signature": "Pool a-\u003e(a-\u003em b)-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pool/docs/Data-Pool.html#v:withPoolAllocate",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003ewithPool'\u003c/code\u003e, but instead of throwing a \u003ccode\u003ePoolExhaustedException\u003c/code\u003e\n when there the maximum number of resources are created and allocated, it\n allocates a new resource, passes it to the subprocess and then frees it.\n\u003c/p\u003e",
        "fct-module": "Data.Pool",
        "fct-package": "pool",
        "fct-signature": "Pool a -\u003e (a -\u003e m b) -\u003e m b",
        "fct-source": "src/Data-Pool.html#withPoolAllocate",
        "fct-type": "function",
        "title": "withPoolAllocate"
      },
      "index": {
        "description": "Same as withPool but instead of throwing PoolExhaustedException when there the maximum number of resources are created and allocated it allocates new resource passes it to the subprocess and then frees it",
        "hierarchy": "Data Pool",
        "module": "Data.Pool",
        "name": "withPoolAllocate",
        "normalized": "Pool a-\u003e(a-\u003eb c)-\u003eb c",
        "package": "pool",
        "partial": "Pool Allocate",
        "signature": "Pool a-\u003e(a-\u003em b)-\u003em b"
      }
    }
  }
]