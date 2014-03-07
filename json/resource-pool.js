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
        "word": "resource-pool"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA high-performance striped pooling abstraction for managing\n flexibly-sized collections of resources such as database\n connections.\n\u003c/p\u003e\u003cp\u003e\"Striped\" means that a single \u003ccode\u003e\u003ca\u003ePool\u003c/a\u003e\u003c/code\u003e consists of several\n sub-pools, each managed independently.  A stripe size of 1 is fine\n for many applications, and probably what you should choose by\n default.  Larger stripe sizes will lead to reduced contention in\n high-performance multicore applications, at a trade-off of causing\n the maximum number of simultaneous resources in use to grow.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Pool",
          "name": "Pool",
          "package": "resource-pool",
          "source": "src/Data-Pool.html",
          "type": "module"
        },
        "index": {
          "description": "high-performance striped pooling abstraction for managing flexibly-sized collections of resources such as database connections Striped means that single Pool consists of several sub-pools each managed independently stripe size of is fine for many applications and probably what you should choose by default Larger stripe sizes will lead to reduced contention in high-performance multicore applications at trade-off of causing the maximum number of simultaneous resources in use to grow",
          "hierarchy": "Data Pool",
          "module": "Data.Pool",
          "name": "Pool",
          "package": "resource-pool",
          "partial": "Pool",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/resource-pool/docs/Data-Pool.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA single striped pool.\n\u003c/p\u003e",
          "module": "Data.Pool",
          "name": "LocalPool",
          "package": "resource-pool",
          "source": "src/Data-Pool.html#LocalPool",
          "type": "data"
        },
        "index": {
          "description": "single striped pool",
          "hierarchy": "Data Pool",
          "module": "Data.Pool",
          "name": "LocalPool",
          "package": "resource-pool",
          "partial": "Local Pool",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/resource-pool/docs/Data-Pool.html#t:LocalPool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Pool",
          "name": "Pool",
          "package": "resource-pool",
          "source": "src/Data-Pool.html#Pool",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Pool",
          "module": "Data.Pool",
          "name": "Pool",
          "package": "resource-pool",
          "partial": "Pool",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/resource-pool/docs/Data-Pool.html#t:Pool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Pool",
          "name": "createPool",
          "package": "resource-pool",
          "signature": "IO a-\u003e (a -\u003e IO ())-\u003e Int-\u003e NominalDiffTime-\u003e Int-\u003e IO (Pool a)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Pool",
          "module": "Data.Pool",
          "name": "createPool",
          "normalized": "IO a-\u003e(a-\u003eIO())-\u003eInt-\u003eNominalDiffTime-\u003eInt-\u003eIO(Pool a)",
          "package": "resource-pool",
          "partial": "Pool",
          "signature": "IO a-\u003e(a-\u003eIO())-\u003eInt-\u003eNominalDiffTime-\u003eInt-\u003eIO(Pool a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/resource-pool/docs/Data-Pool.html#v:createPool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDestroy a resource. Note that this will ignore any exceptions in the\n destroy function.\n\u003c/p\u003e",
          "module": "Data.Pool",
          "name": "destroyResource",
          "package": "resource-pool",
          "signature": "Pool a -\u003e LocalPool a -\u003e a -\u003e IO ()",
          "source": "src/Data-Pool.html#destroyResource",
          "type": "function"
        },
        "index": {
          "description": "Destroy resource Note that this will ignore any exceptions in the destroy function",
          "hierarchy": "Data Pool",
          "module": "Data.Pool",
          "name": "destroyResource",
          "normalized": "Pool a-\u003eLocalPool a-\u003ea-\u003eIO()",
          "package": "resource-pool",
          "partial": "Resource",
          "signature": "Pool a-\u003eLocalPool a-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/resource-pool/docs/Data-Pool.html#v:destroyResource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a resource to the given \u003ccode\u003e\u003ca\u003eLocalPool\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Pool",
          "name": "putResource",
          "package": "resource-pool",
          "signature": "LocalPool a -\u003e a -\u003e IO ()",
          "source": "src/Data-Pool.html#putResource",
          "type": "function"
        },
        "index": {
          "description": "Return resource to the given LocalPool",
          "hierarchy": "Data Pool",
          "module": "Data.Pool",
          "name": "putResource",
          "normalized": "LocalPool a-\u003ea-\u003eIO()",
          "package": "resource-pool",
          "partial": "Resource",
          "signature": "LocalPool a-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/resource-pool/docs/Data-Pool.html#v:putResource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a resource from the pool, following the same results as\n \u003ccode\u003e\u003ca\u003ewithResource\u003c/a\u003e\u003c/code\u003e. Note that this function should be used with caution, as\n improper exception handling can lead to leaked resources.\n\u003c/p\u003e\u003cp\u003eThis function returns both a resource and the \u003ccode\u003eLocalPool\u003c/code\u003e it came from so\n that it may either be destroyed (via \u003ccode\u003e\u003ca\u003edestroyResource\u003c/a\u003e\u003c/code\u003e) or returned to the\n pool (via \u003ccode\u003e\u003ca\u003eputResource\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.Pool",
          "name": "takeResource",
          "package": "resource-pool",
          "signature": "Pool a -\u003e IO (a, LocalPool a)",
          "source": "src/Data-Pool.html#takeResource",
          "type": "function"
        },
        "index": {
          "description": "Take resource from the pool following the same results as withResource Note that this function should be used with caution as improper exception handling can lead to leaked resources This function returns both resource and the LocalPool it came from so that it may either be destroyed via destroyResource or returned to the pool via putResource",
          "hierarchy": "Data Pool",
          "module": "Data.Pool",
          "name": "takeResource",
          "normalized": "Pool a-\u003eIO(a,LocalPool a)",
          "package": "resource-pool",
          "partial": "Resource",
          "signature": "Pool a-\u003eIO(a,LocalPool a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/resource-pool/docs/Data-Pool.html#v:takeResource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTemporarily take a resource from a \u003ccode\u003e\u003ca\u003ePool\u003c/a\u003e\u003c/code\u003e, perform an action with\n it, and return it to the pool afterwards.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e If the pool has an idle resource available, it is used\n   immediately.\n\u003c/li\u003e\u003cli\u003e Otherwise, if the maximum number of resources has not yet been\n   reached, a new resource is created and used.\n\u003c/li\u003e\u003cli\u003e If the maximum number of resources has been reached, this\n   function blocks until a resource becomes available.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eIf the action throws an exception of any type, the resource is\n destroyed, and not returned to the pool.\n\u003c/p\u003e\u003cp\u003eIt probably goes without saying that you should never manually\n destroy a pooled resource, as doing so will almost certainly cause\n a subsequent user (who expects the resource to be valid) to throw\n an exception.\n\u003c/p\u003e",
          "module": "Data.Pool",
          "name": "withResource",
          "package": "resource-pool",
          "signature": "Pool a -\u003e (a -\u003e m b) -\u003e m b",
          "source": "src/Data-Pool.html#withResource",
          "type": "function"
        },
        "index": {
          "description": "Temporarily take resource from Pool perform an action with it and return it to the pool afterwards If the pool has an idle resource available it is used immediately Otherwise if the maximum number of resources has not yet been reached new resource is created and used If the maximum number of resources has been reached this function blocks until resource becomes available If the action throws an exception of any type the resource is destroyed and not returned to the pool It probably goes without saying that you should never manually destroy pooled resource as doing so will almost certainly cause subsequent user who expects the resource to be valid to throw an exception",
          "hierarchy": "Data Pool",
          "module": "Data.Pool",
          "name": "withResource",
          "normalized": "Pool a-\u003e(a-\u003eb c)-\u003eb c",
          "package": "resource-pool",
          "partial": "Resource",
          "signature": "Pool a-\u003e(a-\u003em b)-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/resource-pool/docs/Data-Pool.html#v:withResource"
      }
    }
  ]
]