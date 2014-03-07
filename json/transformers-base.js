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
        "word": "transformers-base"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Base",
          "name": "Base",
          "package": "transformers-base",
          "source": "src/Control-Monad-Base.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Monad Base",
          "module": "Control.Monad.Base",
          "name": "Base",
          "package": "transformers-base",
          "partial": "Base",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/transformers-base/docs/Control-Monad-Base.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Base",
          "name": "MonadBase",
          "package": "transformers-base",
          "source": "src/Control-Monad-Base.html#MonadBase",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Monad Base",
          "module": "Control.Monad.Base",
          "name": "MonadBase",
          "package": "transformers-base",
          "partial": "Monad Base",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/transformers-base/docs/Control-Monad-Base.html#t:MonadBase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a computation from the base monad\n\u003c/p\u003e",
          "module": "Control.Monad.Base",
          "name": "liftBase",
          "package": "transformers-base",
          "signature": "b α -\u003e m α",
          "source": "src/Control-Monad-Base.html#liftBase",
          "type": "method"
        },
        "index": {
          "description": "Lift computation from the base monad",
          "hierarchy": "Control Monad Base",
          "module": "Control.Monad.Base",
          "name": "liftBase",
          "normalized": "a b-\u003ec b",
          "package": "transformers-base",
          "partial": "Base",
          "signature": "b α-\u003em α",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/transformers-base/docs/Control-Monad-Base.html#v:liftBase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCan be used as a default implementation for \u003ccode\u003e\u003ca\u003eliftBase\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that: \u003ccode\u003eliftBaseDefault = \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003eliftBase\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.Base",
          "name": "liftBaseDefault",
          "package": "transformers-base",
          "signature": "b α -\u003e t m α",
          "source": "src/Control-Monad-Base.html#liftBaseDefault",
          "type": "function"
        },
        "index": {
          "description": "Can be used as default implementation for liftBase Note that liftBaseDefault lift liftBase",
          "hierarchy": "Control Monad Base",
          "module": "Control.Monad.Base",
          "name": "liftBaseDefault",
          "normalized": "a b-\u003ec d b",
          "package": "transformers-base",
          "partial": "Base Default",
          "signature": "b α-\u003et m α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/transformers-base/docs/Control-Monad-Base.html#v:liftBaseDefault"
      }
    }
  ]
]