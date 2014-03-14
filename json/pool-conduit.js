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
        "word": "pool-conduit"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAllocate resources from a pool, guaranteeing resource handling via the\n ResourceT transformer.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Conduit.Pool",
          "name": "Pool",
          "package": "pool-conduit",
          "source": "src/Data-Conduit-Pool.html",
          "type": "module"
        },
        "index": {
          "description": "Allocate resources from pool guaranteeing resource handling via the ResourceT transformer",
          "hierarchy": "Data Conduit Pool",
          "module": "Data.Conduit.Pool",
          "name": "Pool",
          "package": "pool-conduit",
          "partial": "Pool",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pool-conduit/docs/Data-Conduit-Pool.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe result of taking a resource.\n\u003c/p\u003e",
          "module": "Data.Conduit.Pool",
          "name": "ManagedResource",
          "package": "pool-conduit",
          "source": "src/Data-Conduit-Pool.html#ManagedResource",
          "type": "data"
        },
        "index": {
          "description": "The result of taking resource",
          "hierarchy": "Data Conduit Pool",
          "module": "Data.Conduit.Pool",
          "name": "ManagedResource",
          "package": "pool-conduit",
          "partial": "Managed Resource",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pool-conduit/docs/Data-Conduit-Pool.html#t:ManagedResource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.Pool",
          "name": "Pool",
          "package": "pool-conduit",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Conduit Pool",
          "module": "Data.Conduit.Pool",
          "name": "Pool",
          "package": "pool-conduit",
          "partial": "Pool",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pool-conduit/docs/Data-Conduit-Pool.html#t:Pool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.Pool",
          "name": "ManagedResource",
          "package": "pool-conduit",
          "signature": "ManagedResource",
          "source": "src/Data-Conduit-Pool.html#ManagedResource",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Conduit Pool",
          "module": "Data.Conduit.Pool",
          "name": "ManagedResource",
          "package": "pool-conduit",
          "partial": "Managed Resource",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pool-conduit/docs/Data-Conduit-Pool.html#v:ManagedResource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.Pool",
          "name": "createPool",
          "package": "pool-conduit",
          "signature": "IO a-\u003e (a -\u003e IO ())-\u003e Int-\u003e NominalDiffTime-\u003e Int-\u003e IO (Pool a)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Conduit Pool",
          "module": "Data.Conduit.Pool",
          "name": "createPool",
          "normalized": "IO a-\u003e(a-\u003eIO())-\u003eInt-\u003eNominalDiffTime-\u003eInt-\u003eIO(Pool a)",
          "package": "pool-conduit",
          "partial": "Pool",
          "signature": "IO a-\u003e(a-\u003eIO())-\u003eInt-\u003eNominalDiffTime-\u003eInt-\u003eIO(Pool a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pool-conduit/docs/Data-Conduit-Pool.html#v:createPool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRelease this resource, either destroying it or returning it to the\n pool.\n\u003c/p\u003e",
          "module": "Data.Conduit.Pool",
          "name": "mrRelease",
          "package": "pool-conduit",
          "signature": "m ()",
          "source": "src/Data-Conduit-Pool.html#ManagedResource",
          "type": "function"
        },
        "index": {
          "description": "Release this resource either destroying it or returning it to the pool",
          "hierarchy": "Data Conduit Pool",
          "module": "Data.Conduit.Pool",
          "name": "mrRelease",
          "normalized": "a()",
          "package": "pool-conduit",
          "partial": "Release",
          "signature": "m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pool-conduit/docs/Data-Conduit-Pool.html#v:mrRelease"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLet's you specify whether the resource should be returned to the pool\n (via \u003ccode\u003e\u003ca\u003eputResource\u003c/a\u003e\u003c/code\u003e) or destroyed (via \u003ccode\u003e\u003ca\u003edestroyResource\u003c/a\u003e\u003c/code\u003e) on release.\n This defaults to destruction, in case of exceptions.\n\u003c/p\u003e",
          "module": "Data.Conduit.Pool",
          "name": "mrReuse",
          "package": "pool-conduit",
          "signature": "Bool -\u003e m ()",
          "source": "src/Data-Conduit-Pool.html#ManagedResource",
          "type": "function"
        },
        "index": {
          "description": "Let you specify whether the resource should be returned to the pool via putResource or destroyed via destroyResource on release This defaults to destruction in case of exceptions",
          "hierarchy": "Data Conduit Pool",
          "module": "Data.Conduit.Pool",
          "name": "mrReuse",
          "normalized": "Bool-\u003ea()",
          "package": "pool-conduit",
          "partial": "Reuse",
          "signature": "Bool-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pool-conduit/docs/Data-Conduit-Pool.html#v:mrReuse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe actual resource.\n\u003c/p\u003e",
          "module": "Data.Conduit.Pool",
          "name": "mrValue",
          "package": "pool-conduit",
          "signature": "a",
          "source": "src/Data-Conduit-Pool.html#ManagedResource",
          "type": "function"
        },
        "index": {
          "description": "The actual resource",
          "hierarchy": "Data Conduit Pool",
          "module": "Data.Conduit.Pool",
          "name": "mrValue",
          "package": "pool-conduit",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pool-conduit/docs/Data-Conduit-Pool.html#v:mrValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a resource from the pool and register a release action.\n\u003c/p\u003e",
          "module": "Data.Conduit.Pool",
          "name": "takeResource",
          "package": "pool-conduit",
          "signature": "Pool a -\u003e m (ManagedResource m a)",
          "source": "src/Data-Conduit-Pool.html#takeResource",
          "type": "function"
        },
        "index": {
          "description": "Take resource from the pool and register release action",
          "hierarchy": "Data Conduit Pool",
          "module": "Data.Conduit.Pool",
          "name": "takeResource",
          "normalized": "Pool a-\u003eb(ManagedResource b a)",
          "package": "pool-conduit",
          "partial": "Resource",
          "signature": "Pool a-\u003em(ManagedResource m a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pool-conduit/docs/Data-Conduit-Pool.html#v:takeResource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003etakeResource\u003c/a\u003e\u003c/code\u003e, but apply some action to check if a resource is\n still valid.\n\u003c/p\u003e",
          "module": "Data.Conduit.Pool",
          "name": "takeResourceCheck",
          "package": "pool-conduit",
          "signature": "Pool a -\u003e (a -\u003e m Bool) -\u003e m (ManagedResource m a)",
          "source": "src/Data-Conduit-Pool.html#takeResourceCheck",
          "type": "function"
        },
        "index": {
          "description": "Same as takeResource but apply some action to check if resource is still valid",
          "hierarchy": "Data Conduit Pool",
          "module": "Data.Conduit.Pool",
          "name": "takeResourceCheck",
          "normalized": "Pool a-\u003e(a-\u003eb Bool)-\u003eb(ManagedResource b a)",
          "package": "pool-conduit",
          "partial": "Resource Check",
          "signature": "Pool a-\u003e(a-\u003em Bool)-\u003em(ManagedResource m a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pool-conduit/docs/Data-Conduit-Pool.html#v:takeResourceCheck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTemporarily take a resource from a \u003ccode\u003e\u003ca\u003ePool\u003c/a\u003e\u003c/code\u003e, perform an action with\n it, and return it to the pool afterwards.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e If the pool has an idle resource available, it is used\n   immediately.\n\u003c/li\u003e\u003cli\u003e Otherwise, if the maximum number of resources has not yet been\n   reached, a new resource is created and used.\n\u003c/li\u003e\u003cli\u003e If the maximum number of resources has been reached, this\n   function blocks until a resource becomes available.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eIf the action throws an exception of any type, the resource is\n destroyed, and not returned to the pool.\n\u003c/p\u003e\u003cp\u003eIt probably goes without saying that you should never manually\n destroy a pooled resource, as doing so will almost certainly cause\n a subsequent user (who expects the resource to be valid) to throw\n an exception.\n\u003c/p\u003e",
          "module": "Data.Conduit.Pool",
          "name": "withResource",
          "package": "pool-conduit",
          "signature": "Pool a -\u003e (a -\u003e m b) -\u003e m b",
          "type": "function"
        },
        "index": {
          "description": "Temporarily take resource from Pool perform an action with it and return it to the pool afterwards If the pool has an idle resource available it is used immediately Otherwise if the maximum number of resources has not yet been reached new resource is created and used If the maximum number of resources has been reached this function blocks until resource becomes available If the action throws an exception of any type the resource is destroyed and not returned to the pool It probably goes without saying that you should never manually destroy pooled resource as doing so will almost certainly cause subsequent user who expects the resource to be valid to throw an exception",
          "hierarchy": "Data Conduit Pool",
          "module": "Data.Conduit.Pool",
          "name": "withResource",
          "normalized": "Pool a-\u003e(a-\u003eb c)-\u003eb c",
          "package": "pool-conduit",
          "partial": "Resource",
          "signature": "Pool a-\u003e(a-\u003em b)-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pool-conduit/docs/Data-Conduit-Pool.html#v:withResource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ewithResource\u003c/a\u003e\u003c/code\u003e, but uses \u003ccode\u003e\u003ca\u003eMonadResource\u003c/a\u003e\u003c/code\u003e instead of \u003ccode\u003e\u003ca\u003eMonadBaseControl\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 0.1.1\n\u003c/p\u003e",
          "module": "Data.Conduit.Pool",
          "name": "withResourceT",
          "package": "pool-conduit",
          "signature": "Pool a -\u003e (a -\u003e m b) -\u003e m b",
          "source": "src/Data-Conduit-Pool.html#withResourceT",
          "type": "function"
        },
        "index": {
          "description": "Like withResource but uses MonadResource instead of MonadBaseControl Since",
          "hierarchy": "Data Conduit Pool",
          "module": "Data.Conduit.Pool",
          "name": "withResourceT",
          "normalized": "Pool a-\u003e(a-\u003eb c)-\u003eb c",
          "package": "pool-conduit",
          "partial": "Resource",
          "signature": "Pool a-\u003e(a-\u003em b)-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pool-conduit/docs/Data-Conduit-Pool.html#v:withResourceT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ewithResource\u003c/a\u003e\u003c/code\u003e, but times out the operation if resource\n allocation does not complete within the given timeout period.\n\u003c/p\u003e\u003cp\u003eSince 0.1.2\n\u003c/p\u003e",
          "module": "Data.Conduit.Pool",
          "name": "withResourceTimeout",
          "package": "pool-conduit",
          "signature": "Int-\u003e Pool a-\u003e (a -\u003e m b)-\u003e m (Maybe b)",
          "type": "function"
        },
        "index": {
          "description": "Like withResource but times out the operation if resource allocation does not complete within the given timeout period Since",
          "hierarchy": "Data Conduit Pool",
          "module": "Data.Conduit.Pool",
          "name": "withResourceTimeout",
          "normalized": "Int-\u003ePool a-\u003e(a-\u003eb c)-\u003eb(Maybe c)",
          "package": "pool-conduit",
          "partial": "Resource Timeout",
          "signature": "Int-\u003ePool a-\u003e(a-\u003em b)-\u003em(Maybe b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pool-conduit/docs/Data-Conduit-Pool.html#v:withResourceTimeout"
      }
    }
  ]
]