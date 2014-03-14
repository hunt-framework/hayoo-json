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
        "word": "ghc-mtl"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Ghc",
          "name": "Ghc",
          "package": "ghc-mtl",
          "source": "src/Control-Monad-Ghc.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Monad Ghc",
          "module": "Control.Monad.Ghc",
          "name": "Ghc",
          "package": "ghc-mtl",
          "partial": "Ghc",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ghc-mtl/docs/Control-Monad-Ghc.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Ghc",
          "name": "Ghc",
          "package": "ghc-mtl",
          "source": "src/Control-Monad-Ghc.html#Ghc",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Monad Ghc",
          "module": "Control.Monad.Ghc",
          "name": "Ghc",
          "package": "ghc-mtl",
          "partial": "Ghc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ghc-mtl/docs/Control-Monad-Ghc.html#t:Ghc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monad that has all the features needed by GHC API calls.\n\u003c/p\u003e\u003cp\u003eIn short, a GHC monad\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e allows embedding of IO actions,\n\u003c/li\u003e\u003cli\u003e can log warnings,\n\u003c/li\u003e\u003cli\u003e allows handling of (extensible) exceptions, and\n\u003c/li\u003e\u003cli\u003e maintains a current session.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eIf you do not use \u003ccode\u003e\u003ca\u003eGhc\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eGhcT\u003c/a\u003e\u003c/code\u003e, make sure to call \u003ccode\u003e\u003ca\u003einitGhcMonad\u003c/a\u003e\u003c/code\u003e\n before any call to the GHC API functions can occur.\n\u003c/p\u003e",
          "module": "Control.Monad.Ghc",
          "name": "GhcMonad",
          "package": "ghc-mtl",
          "type": "class"
        },
        "index": {
          "description": "monad that has all the features needed by GHC API calls In short GHC monad allows embedding of IO actions can log warnings allows handling of extensible exceptions and maintains current session If you do not use Ghc or GhcT make sure to call initGhcMonad before any call to the GHC API functions can occur",
          "hierarchy": "Control Monad Ghc",
          "module": "Control.Monad.Ghc",
          "name": "GhcMonad",
          "package": "ghc-mtl",
          "partial": "Ghc Monad",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ghc-mtl/docs/Control-Monad-Ghc.html#t:GhcMonad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Ghc",
          "name": "GhcT",
          "package": "ghc-mtl",
          "source": "src/Control-Monad-Ghc.html#GhcT",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Monad Ghc",
          "module": "Control.Monad.Ghc",
          "name": "GhcT",
          "package": "ghc-mtl",
          "partial": "Ghc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ghc-mtl/docs/Control-Monad-Ghc.html#t:GhcT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Ghc",
          "name": "getSession",
          "package": "ghc-mtl",
          "signature": "m HscEnv",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Ghc",
          "module": "Control.Monad.Ghc",
          "name": "getSession",
          "package": "ghc-mtl",
          "partial": "Session",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ghc-mtl/docs/Control-Monad-Ghc.html#v:getSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Ghc",
          "name": "runGhc",
          "package": "ghc-mtl",
          "signature": "Maybe FilePath -\u003e Ghc a -\u003e IO a",
          "source": "src/Control-Monad-Ghc.html#runGhc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Ghc",
          "module": "Control.Monad.Ghc",
          "name": "runGhc",
          "normalized": "Maybe FilePath-\u003eGhc a-\u003eIO a",
          "package": "ghc-mtl",
          "partial": "Ghc",
          "signature": "Maybe FilePath-\u003eGhc a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-mtl/docs/Control-Monad-Ghc.html#v:runGhc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Ghc",
          "name": "runGhcT",
          "package": "ghc-mtl",
          "signature": "Maybe FilePath -\u003e GhcT m a -\u003e m a",
          "source": "src/Control-Monad-Ghc.html#runGhcT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Ghc",
          "module": "Control.Monad.Ghc",
          "name": "runGhcT",
          "normalized": "Maybe FilePath-\u003eGhcT a b-\u003ea b",
          "package": "ghc-mtl",
          "partial": "Ghc",
          "signature": "Maybe FilePath-\u003eGhcT m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-mtl/docs/Control-Monad-Ghc.html#v:runGhcT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Ghc",
          "name": "setSession",
          "package": "ghc-mtl",
          "signature": "HscEnv -\u003e m ()",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Ghc",
          "module": "Control.Monad.Ghc",
          "name": "setSession",
          "normalized": "HscEnv-\u003ea()",
          "package": "ghc-mtl",
          "partial": "Session",
          "signature": "HscEnv-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ghc-mtl/docs/Control-Monad-Ghc.html#v:setSession"
      }
    }
  ]
]