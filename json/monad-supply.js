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
        "word": "monad-supply"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSupport for computations which consume values from a (possibly infinite)\n supply. See \u003ca\u003ehttp://www.haskell.org/haskellwiki/New_monads/MonadSupply\u003c/a\u003e for\n details.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Supply",
          "name": "Supply",
          "package": "monad-supply",
          "source": "src/Control-Monad-Supply.html",
          "type": "module"
        },
        "index": {
          "description": "Support for computations which consume values from possibly infinite supply See http www.haskell.org haskellwiki New monads MonadSupply for details",
          "hierarchy": "Control Monad Supply",
          "module": "Control.Monad.Supply",
          "name": "Supply",
          "package": "monad-supply",
          "partial": "Supply",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monad-supply/docs/Control-Monad-Supply.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Supply",
          "name": "MonadSupply",
          "package": "monad-supply",
          "source": "src/Control-Monad-Supply.html#MonadSupply",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Monad Supply",
          "module": "Control.Monad.Supply",
          "name": "MonadSupply",
          "package": "monad-supply",
          "partial": "Monad Supply",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monad-supply/docs/Control-Monad-Supply.html#t:MonadSupply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSupply monad. \n\u003c/p\u003e",
          "module": "Control.Monad.Supply",
          "name": "Supply",
          "package": "monad-supply",
          "source": "src/Control-Monad-Supply.html#Supply",
          "type": "data"
        },
        "index": {
          "description": "Supply monad",
          "hierarchy": "Control Monad Supply",
          "module": "Control.Monad.Supply",
          "name": "Supply",
          "package": "monad-supply",
          "partial": "Supply",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/monad-supply/docs/Control-Monad-Supply.html#t:Supply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSupply monad transformer.\n\u003c/p\u003e",
          "module": "Control.Monad.Supply",
          "name": "SupplyT",
          "package": "monad-supply",
          "source": "src/Control-Monad-Supply.html#SupplyT",
          "type": "data"
        },
        "index": {
          "description": "Supply monad transformer",
          "hierarchy": "Control Monad Supply",
          "module": "Control.Monad.Supply",
          "name": "SupplyT",
          "package": "monad-supply",
          "partial": "Supply",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/monad-supply/docs/Control-Monad-Supply.html#t:SupplyT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Supply",
          "name": "evalSupply",
          "package": "monad-supply",
          "signature": "Supply s a -\u003e [s] -\u003e a",
          "source": "src/Control-Monad-Supply.html#evalSupply",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Supply",
          "module": "Control.Monad.Supply",
          "name": "evalSupply",
          "normalized": "Supply a b-\u003e[a]-\u003eb",
          "package": "monad-supply",
          "partial": "Supply",
          "signature": "Supply s a-\u003e[s]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-supply/docs/Control-Monad-Supply.html#v:evalSupply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Supply",
          "name": "evalSupplyT",
          "package": "monad-supply",
          "signature": "SupplyT s m a -\u003e [s] -\u003e m a",
          "source": "src/Control-Monad-Supply.html#evalSupplyT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Supply",
          "module": "Control.Monad.Supply",
          "name": "evalSupplyT",
          "normalized": "SupplyT a b c-\u003e[a]-\u003eb c",
          "package": "monad-supply",
          "partial": "Supply",
          "signature": "SupplyT s m a-\u003e[s]-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-supply/docs/Control-Monad-Supply.html#v:evalSupplyT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Supply",
          "name": "exhausted",
          "package": "monad-supply",
          "signature": "m Bool",
          "source": "src/Control-Monad-Supply.html#exhausted",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Supply",
          "module": "Control.Monad.Supply",
          "name": "exhausted",
          "package": "monad-supply",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monad-supply/docs/Control-Monad-Supply.html#v:exhausted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Supply",
          "name": "peek",
          "package": "monad-supply",
          "signature": "m s",
          "source": "src/Control-Monad-Supply.html#peek",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Supply",
          "module": "Control.Monad.Supply",
          "name": "peek",
          "package": "monad-supply",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monad-supply/docs/Control-Monad-Supply.html#v:peek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Supply",
          "name": "runSupply",
          "package": "monad-supply",
          "signature": "Supply s a -\u003e [s] -\u003e (a, [s])",
          "source": "src/Control-Monad-Supply.html#runSupply",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Supply",
          "module": "Control.Monad.Supply",
          "name": "runSupply",
          "normalized": "Supply a b-\u003e[a]-\u003e(b,[a])",
          "package": "monad-supply",
          "partial": "Supply",
          "signature": "Supply s a-\u003e[s]-\u003e(a,[s])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-supply/docs/Control-Monad-Supply.html#v:runSupply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Supply",
          "name": "runSupplyT",
          "package": "monad-supply",
          "signature": "SupplyT s m a -\u003e [s] -\u003e m (a, [s])",
          "source": "src/Control-Monad-Supply.html#runSupplyT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Supply",
          "module": "Control.Monad.Supply",
          "name": "runSupplyT",
          "normalized": "SupplyT a b c-\u003e[a]-\u003eb(c,[a])",
          "package": "monad-supply",
          "partial": "Supply",
          "signature": "SupplyT s m a-\u003e[s]-\u003em(a,[s])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-supply/docs/Control-Monad-Supply.html#v:runSupplyT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet n supplies.\n\u003c/p\u003e",
          "module": "Control.Monad.Supply",
          "name": "supplies",
          "package": "monad-supply",
          "signature": "Int -\u003e m [s]",
          "source": "src/Control-Monad-Supply.html#supplies",
          "type": "function"
        },
        "index": {
          "description": "Get supplies",
          "hierarchy": "Control Monad Supply",
          "module": "Control.Monad.Supply",
          "name": "supplies",
          "normalized": "Int-\u003ea[b]",
          "package": "monad-supply",
          "signature": "Int-\u003em[s]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-supply/docs/Control-Monad-Supply.html#v:supplies"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Supply",
          "name": "supply",
          "package": "monad-supply",
          "signature": "m s",
          "source": "src/Control-Monad-Supply.html#supply",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Supply",
          "module": "Control.Monad.Supply",
          "name": "supply",
          "package": "monad-supply",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monad-supply/docs/Control-Monad-Supply.html#v:supply"
      }
    }
  ]
]