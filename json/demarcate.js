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
        "word": "demarcate"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInternals of the \u003ccode\u003e\u003ca\u003eDemarcate\u003c/a\u003e\u003c/code\u003e monad transformer.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Trans.Demarcate.Internal",
          "name": "Internal",
          "package": "demarcate",
          "source": "src/Control-Monad-Trans-Demarcate-Internal.html",
          "type": "module"
        },
        "index": {
          "description": "Internals of the Demarcate monad transformer",
          "hierarchy": "Control Monad Trans Demarcate Internal",
          "module": "Control.Monad.Trans.Demarcate.Internal",
          "name": "Internal",
          "package": "demarcate",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/demarcate/docs/Control-Monad-Trans-Demarcate-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDemarcate monad transformer.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Demarcate.Internal",
          "name": "Demarcate",
          "package": "demarcate",
          "source": "src/Control-Monad-Trans-Demarcate-Internal.html#Demarcate",
          "type": "newtype"
        },
        "index": {
          "description": "Demarcate monad transformer",
          "hierarchy": "Control Monad Trans Demarcate Internal",
          "module": "Control.Monad.Trans.Demarcate.Internal",
          "name": "Demarcate",
          "package": "demarcate",
          "partial": "Demarcate",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/demarcate/docs/Control-Monad-Trans-Demarcate-Internal.html#t:Demarcate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDemarcate functor.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Demarcate.Internal",
          "name": "DemarcateF",
          "package": "demarcate",
          "source": "src/Control-Monad-Trans-Demarcate-Internal.html#DemarcateF",
          "type": "data"
        },
        "index": {
          "description": "Demarcate functor",
          "hierarchy": "Control Monad Trans Demarcate Internal",
          "module": "Control.Monad.Trans.Demarcate.Internal",
          "name": "DemarcateF",
          "package": "demarcate",
          "partial": "Demarcate",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/demarcate/docs/Control-Monad-Trans-Demarcate-Internal.html#t:DemarcateF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Demarcate.Internal",
          "name": "Demarcate",
          "package": "demarcate",
          "signature": "Demarcate",
          "source": "src/Control-Monad-Trans-Demarcate-Internal.html#Demarcate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Demarcate Internal",
          "module": "Control.Monad.Trans.Demarcate.Internal",
          "name": "Demarcate",
          "package": "demarcate",
          "partial": "Demarcate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/demarcate/docs/Control-Monad-Trans-Demarcate-Internal.html#v:Demarcate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnlifted monadic computation.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Demarcate.Internal",
          "name": "DemarcateMonad",
          "package": "demarcate",
          "signature": "forall a . DemarcateMonad (m a) (a -\u003e next)",
          "source": "src/Control-Monad-Trans-Demarcate-Internal.html#DemarcateF",
          "type": "function"
        },
        "index": {
          "description": "Unlifted monadic computation",
          "hierarchy": "Control Monad Trans Demarcate Internal",
          "module": "Control.Monad.Trans.Demarcate.Internal",
          "name": "DemarcateMonad",
          "normalized": "a b DemarcateMonad(c b)(b-\u003ed)",
          "package": "demarcate",
          "partial": "Demarcate Monad",
          "signature": "forall a DemarcateMonad(m a)(a-\u003enext)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/demarcate/docs/Control-Monad-Trans-Demarcate-Internal.html#v:DemarcateMonad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransformed monadic computation.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Demarcate.Internal",
          "name": "DemarcateTrans",
          "package": "demarcate",
          "signature": "forall a . DemarcateTrans (t m a) (a -\u003e next)",
          "source": "src/Control-Monad-Trans-Demarcate-Internal.html#DemarcateF",
          "type": "function"
        },
        "index": {
          "description": "Transformed monadic computation",
          "hierarchy": "Control Monad Trans Demarcate Internal",
          "module": "Control.Monad.Trans.Demarcate.Internal",
          "name": "DemarcateTrans",
          "normalized": "a b DemarcateTrans(c d b)(b-\u003ee)",
          "package": "demarcate",
          "partial": "Demarcate Trans",
          "signature": "forall a DemarcateTrans(t m a)(a-\u003enext)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/demarcate/docs/Control-Monad-Trans-Demarcate-Internal.html#v:DemarcateTrans"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift pure monadic computation into \u003ccode\u003eDemarcate t m a\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Control.Monad.Trans.Demarcate.Internal\",\"Control.Monad.Trans.Demarcate\"]",
          "name": "demarcateM",
          "package": "demarcate",
          "signature": "m a -\u003e Demarcate t m a",
          "source": "src/Control-Monad-Trans-Demarcate-Internal.html#demarcateM",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/demarcate/docs/Control-Monad-Trans-Demarcate-Internal.html#v:demarcateM\",\"http://hackage.haskell.org/package/demarcate/docs/Control-Monad-Trans-Demarcate.html#v:demarcateM\"]"
        },
        "index": {
          "description": "Lift pure monadic computation into Demarcate",
          "hierarchy": "Control Monad Trans Demarcate Internal",
          "module": "Control.Monad.Trans.Demarcate.Internal",
          "name": "demarcateM",
          "normalized": "a b-\u003eDemarcate c a b",
          "package": "demarcate",
          "signature": "m a-\u003eDemarcate t m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/demarcate/docs/Control-Monad-Trans-Demarcate-Internal.html#v:demarcateM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift transformed monadic computation into \u003ccode\u003eDemarcate t m a\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Control.Monad.Trans.Demarcate.Internal\",\"Control.Monad.Trans.Demarcate\"]",
          "name": "demarcateT",
          "package": "demarcate",
          "signature": "t m a -\u003e Demarcate t m a",
          "source": "src/Control-Monad-Trans-Demarcate-Internal.html#demarcateT",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/demarcate/docs/Control-Monad-Trans-Demarcate-Internal.html#v:demarcateT\",\"http://hackage.haskell.org/package/demarcate/docs/Control-Monad-Trans-Demarcate.html#v:demarcateT\"]"
        },
        "index": {
          "description": "Lift transformed monadic computation into Demarcate",
          "hierarchy": "Control Monad Trans Demarcate Internal",
          "module": "Control.Monad.Trans.Demarcate.Internal",
          "name": "demarcateT",
          "normalized": "a b c-\u003eDemarcate a b c",
          "package": "demarcate",
          "signature": "t m a-\u003eDemarcate t m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/demarcate/docs/Control-Monad-Trans-Demarcate-Internal.html#v:demarcateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute demarcated computation.\n\u003c/p\u003e",
          "module": "[\"Control.Monad.Trans.Demarcate.Internal\",\"Control.Monad.Trans.Demarcate\"]",
          "name": "execDemarcate",
          "package": "demarcate",
          "signature": "Demarcate t m a -\u003e t m a",
          "source": "src/Control-Monad-Trans-Demarcate-Internal.html#execDemarcate",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/demarcate/docs/Control-Monad-Trans-Demarcate-Internal.html#v:execDemarcate\",\"http://hackage.haskell.org/package/demarcate/docs/Control-Monad-Trans-Demarcate.html#v:execDemarcate\"]"
        },
        "index": {
          "description": "Execute demarcated computation",
          "hierarchy": "Control Monad Trans Demarcate Internal",
          "module": "Control.Monad.Trans.Demarcate.Internal",
          "name": "execDemarcate",
          "normalized": "Demarcate a b c-\u003ea b c",
          "package": "demarcate",
          "partial": "Demarcate",
          "signature": "Demarcate t m a-\u003et m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/demarcate/docs/Control-Monad-Trans-Demarcate-Internal.html#v:execDemarcate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubsitute monad transformer.\n\u003c/p\u003e",
          "module": "[\"Control.Monad.Trans.Demarcate.Internal\",\"Control.Monad.Trans.Demarcate\"]",
          "name": "hoistDemarcateT",
          "package": "demarcate",
          "signature": "(forall b.  t m b -\u003e t' m b) -\u003e Demarcate t m a -\u003e Demarcate t' m a",
          "source": "src/Control-Monad-Trans-Demarcate-Internal.html#hoistDemarcateT",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/demarcate/docs/Control-Monad-Trans-Demarcate-Internal.html#v:hoistDemarcateT\",\"http://hackage.haskell.org/package/demarcate/docs/Control-Monad-Trans-Demarcate.html#v:hoistDemarcateT\"]"
        },
        "index": {
          "description": "Subsitute monad transformer",
          "hierarchy": "Control Monad Trans Demarcate Internal",
          "module": "Control.Monad.Trans.Demarcate.Internal",
          "name": "hoistDemarcateT",
          "normalized": "(a b c d e-\u003ef d e)-\u003eDemarcate c d g-\u003eDemarcate f d g",
          "package": "demarcate",
          "partial": "Demarcate",
          "signature": "(forall b. t m b-\u003et' m b)-\u003eDemarcate t m a-\u003eDemarcate t' m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/demarcate/docs/Control-Monad-Trans-Demarcate-Internal.html#v:hoistDemarcateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubstitute free monad actions with demarcated monad computations.\n\u003c/p\u003e",
          "module": "[\"Control.Monad.Trans.Demarcate.Internal\",\"Control.Monad.Trans.Demarcate\"]",
          "name": "transformDemarcateFree",
          "package": "demarcate",
          "signature": "(forall b.  f (Demarcate t (Free f) b) -\u003e Demarcate t (Free f) b) -\u003e Demarcate t (Free f) a -\u003e Demarcate t (Free f) a",
          "source": "src/Control-Monad-Trans-Demarcate-Internal.html#transformDemarcateFree",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/demarcate/docs/Control-Monad-Trans-Demarcate-Internal.html#v:transformDemarcateFree\",\"http://hackage.haskell.org/package/demarcate/docs/Control-Monad-Trans-Demarcate.html#v:transformDemarcateFree\"]"
        },
        "index": {
          "description": "Substitute free monad actions with demarcated monad computations",
          "hierarchy": "Control Monad Trans Demarcate Internal",
          "module": "Control.Monad.Trans.Demarcate.Internal",
          "name": "transformDemarcateFree",
          "normalized": "(a b c(Demarcate d(Free c)e)-\u003eDemarcate d(Free c)e)-\u003eDemarcate d(Free c)f-\u003eDemarcate d(Free c)f",
          "package": "demarcate",
          "partial": "Demarcate Free",
          "signature": "(forall b. f(Demarcate t(Free f)b)-\u003eDemarcate t(Free f)b)-\u003eDemarcate t(Free f)a-\u003eDemarcate t(Free f)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/demarcate/docs/Control-Monad-Trans-Demarcate-Internal.html#v:transformDemarcateFree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubstitute monad computations with demarcated.\n\u003c/p\u003e",
          "module": "[\"Control.Monad.Trans.Demarcate.Internal\",\"Control.Monad.Trans.Demarcate\"]",
          "name": "transformDemarcateM",
          "package": "demarcate",
          "signature": "(forall b.  m b -\u003e Demarcate t m b) -\u003e Demarcate t m a -\u003e Demarcate t m a",
          "source": "src/Control-Monad-Trans-Demarcate-Internal.html#transformDemarcateM",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/demarcate/docs/Control-Monad-Trans-Demarcate-Internal.html#v:transformDemarcateM\",\"http://hackage.haskell.org/package/demarcate/docs/Control-Monad-Trans-Demarcate.html#v:transformDemarcateM\"]"
        },
        "index": {
          "description": "Substitute monad computations with demarcated",
          "hierarchy": "Control Monad Trans Demarcate Internal",
          "module": "Control.Monad.Trans.Demarcate.Internal",
          "name": "transformDemarcateM",
          "normalized": "(a b c d-\u003eDemarcate e c d)-\u003eDemarcate e c f-\u003eDemarcate e c f",
          "package": "demarcate",
          "partial": "Demarcate",
          "signature": "(forall b. m b-\u003eDemarcate t m b)-\u003eDemarcate t m a-\u003eDemarcate t m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/demarcate/docs/Control-Monad-Trans-Demarcate-Internal.html#v:transformDemarcateM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Demarcate.Internal",
          "name": "unDemarcate",
          "package": "demarcate",
          "signature": "Free (DemarcateF t m) a",
          "source": "src/Control-Monad-Trans-Demarcate-Internal.html#Demarcate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Demarcate Internal",
          "module": "Control.Monad.Trans.Demarcate.Internal",
          "name": "unDemarcate",
          "package": "demarcate",
          "partial": "Demarcate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/demarcate/docs/Control-Monad-Trans-Demarcate-Internal.html#v:unDemarcate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper function (useful with \u003ccode\u003etransformDemarcateFree\u003c/code\u003e).\n I believe it should be somewhere in \u003ccode\u003eControl.Monad.Free\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Control.Monad.Trans.Demarcate.Internal\",\"Control.Monad.Trans.Demarcate\"]",
          "name": "wrapT",
          "package": "demarcate",
          "signature": "f (t m a) -\u003e t m a",
          "source": "src/Control-Monad-Trans-Demarcate-Internal.html#wrapT",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/demarcate/docs/Control-Monad-Trans-Demarcate-Internal.html#v:wrapT\",\"http://hackage.haskell.org/package/demarcate/docs/Control-Monad-Trans-Demarcate.html#v:wrapT\"]"
        },
        "index": {
          "description": "Helper function useful with transformDemarcateFree believe it should be somewhere in Control.Monad.Free",
          "hierarchy": "Control Monad Trans Demarcate Internal",
          "module": "Control.Monad.Trans.Demarcate.Internal",
          "name": "wrapT",
          "normalized": "a(b c d)-\u003eb c d",
          "package": "demarcate",
          "signature": "f(t m a)-\u003et m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/demarcate/docs/Control-Monad-Trans-Demarcate-Internal.html#v:wrapT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInterface for \u003ccode\u003e\u003ca\u003eDemarcate\u003c/a\u003e\u003c/code\u003e monad transformer.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Trans.Demarcate",
          "name": "Demarcate",
          "package": "demarcate",
          "source": "src/Control-Monad-Trans-Demarcate.html",
          "type": "module"
        },
        "index": {
          "description": "Interface for Demarcate monad transformer",
          "hierarchy": "Control Monad Trans Demarcate",
          "module": "Control.Monad.Trans.Demarcate",
          "name": "Demarcate",
          "package": "demarcate",
          "partial": "Demarcate",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/demarcate/docs/Control-Monad-Trans-Demarcate.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDemarcate monad transformer.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Demarcate",
          "name": "Demarcate",
          "package": "demarcate",
          "source": "src/Control-Monad-Trans-Demarcate-Internal.html#Demarcate",
          "type": "data"
        },
        "index": {
          "description": "Demarcate monad transformer",
          "hierarchy": "Control Monad Trans Demarcate",
          "module": "Control.Monad.Trans.Demarcate",
          "name": "Demarcate",
          "package": "demarcate",
          "partial": "Demarcate",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/demarcate/docs/Control-Monad-Trans-Demarcate.html#t:Demarcate"
      }
    }
  ]
]