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
        "word": "stateful-mtl"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains the \u003ccode\u003e\u003ca\u003eMonadST\u003c/a\u003e\u003c/code\u003e type class, which encapsulates a monad capable of lifting an ST computation.  This type class is \u003cem\u003eonly\u003c/em\u003e intended to be implemented by the \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e monad and any stack of monad transformers over an \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e\u003cp\u003ePresence of a MonadST instance implies that\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The monad is single-threaded: performing an \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e computation will not cause loss of referential transparency, and only one copy of its state thread will be available at any time.\n\u003c/li\u003e\u003cli\u003e Monad transformers can demand an underlying \u003ccode\u003e\u003ca\u003eMonadST\u003c/a\u003e\u003c/code\u003e instance and use its state thread for their own safe computation in the \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: Most monad type classes cannot pass instances up through any instance of \u003ccode\u003e\u003ca\u003eMonadTrans\u003c/a\u003e\u003c/code\u003e, because a transformer farther out may wish to override the inner instance.  However, in \u003ccode\u003e\u003ca\u003eMonadST\u003c/a\u003e\u003c/code\u003e we very specifically only want one state thread for any stack of transformers, and specifically one at the very bottom level.  This justifies the very general \u003ccode\u003e\u003ca\u003eMonadST\u003c/a\u003e\u003c/code\u003e propagation instance, \u003ccode\u003e(MonadST m, MonadTrans t, Monad m, Monad (t m)) =\u003e MonadST (t m)\u003c/code\u003e (not shown in Haddock for unknown reasons).  \n\u003c/p\u003e\u003cp\u003e\u003cem\u003eDo not\u003c/em\u003e implement \u003ccode\u003e\u003ca\u003eMonadST\u003c/a\u003e\u003c/code\u003e propagation if you also provide a \u003ccode\u003e\u003ca\u003eMonadTrans\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.ST.Class",
          "name": "Class",
          "package": "stateful-mtl",
          "source": "src/Control-Monad-ST-Class.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains the MonadST type class which encapsulates monad capable of lifting an ST computation This type class is only intended to be implemented by the ST monad and any stack of monad transformers over an ST monad Presence of MonadST instance implies that The monad is single-threaded performing an ST computation will not cause loss of referential transparency and only one copy of its state thread will be available at any time Monad transformers can demand an underlying MonadST instance and use its state thread for their own safe computation in the ST monad Note Most monad type classes cannot pass instances up through any instance of MonadTrans because transformer farther out may wish to override the inner instance However in MonadST we very specifically only want one state thread for any stack of transformers and specifically one at the very bottom level This justifies the very general MonadST propagation instance MonadST MonadTrans Monad Monad MonadST not shown in Haddock for unknown reasons Do not implement MonadST propagation if you also provide MonadTrans instance",
          "hierarchy": "Control Monad ST Class",
          "module": "Control.Monad.ST.Class",
          "name": "Class",
          "package": "stateful-mtl",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/stateful-mtl/docs/Control-Monad-ST-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType class of monads that can perform lifted computation in the \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Control.Monad.ST.Class",
          "name": "MonadST",
          "package": "stateful-mtl",
          "source": "src/Control-Monad-ST-Class.html#MonadST",
          "type": "class"
        },
        "index": {
          "description": "Type class of monads that can perform lifted computation in the ST monad",
          "hierarchy": "Control Monad ST Class",
          "module": "Control.Monad.ST.Class",
          "name": "MonadST",
          "package": "stateful-mtl",
          "partial": "Monad ST",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/stateful-mtl/docs/Control-Monad-ST-Class.html#t:MonadST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ST.Class",
          "name": "liftST",
          "package": "stateful-mtl",
          "signature": "ST (StateThread m) a -\u003e m a",
          "source": "src/Control-Monad-ST-Class.html#liftST",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad ST Class",
          "module": "Control.Monad.ST.Class",
          "name": "liftST",
          "normalized": "ST(StateThread a)b-\u003ea b",
          "package": "stateful-mtl",
          "partial": "ST",
          "signature": "ST(StateThread m)a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/stateful-mtl/docs/Control-Monad-ST-Class.html#v:liftST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Operations",
          "name": "Operations",
          "package": "stateful-mtl",
          "source": "src/Control-Monad-Trans-Operations.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Monad Trans Operations",
          "module": "Control.Monad.Trans.Operations",
          "name": "Operations",
          "package": "stateful-mtl",
          "partial": "Operations",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/stateful-mtl/docs/Control-Monad-Trans-Operations.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Operations",
          "name": "(\u003e\u003e=?)",
          "package": "stateful-mtl",
          "signature": "m (Maybe a) -\u003e (a -\u003e m ()) -\u003e m ()",
          "source": "src/Control-Monad-Trans-Operations.html#%3E%3E%3D%3F",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Operations",
          "module": "Control.Monad.Trans.Operations",
          "name": "(\u003e\u003e=?) \u003e\u003e=?",
          "normalized": "a(Maybe b)-\u003e(b-\u003ea())-\u003ea()",
          "package": "stateful-mtl",
          "signature": "m(Maybe a)-\u003e(a-\u003em())-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stateful-mtl/docs/Control-Monad-Trans-Operations.html#v:-62--62--61--63-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Operations",
          "name": "execMaybeT",
          "package": "stateful-mtl",
          "signature": "MaybeT m () -\u003e m ()",
          "source": "src/Control-Monad-Trans-Operations.html#execMaybeT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Operations",
          "module": "Control.Monad.Trans.Operations",
          "name": "execMaybeT",
          "normalized": "MaybeT a()-\u003ea()",
          "package": "stateful-mtl",
          "partial": "Maybe",
          "signature": "MaybeT m()-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stateful-mtl/docs/Control-Monad-Trans-Operations.html#v:execMaybeT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Operations",
          "name": "repeatMaybe",
          "package": "stateful-mtl",
          "signature": "MaybeT m a -\u003e ListT m a",
          "source": "src/Control-Monad-Trans-Operations.html#repeatMaybe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Operations",
          "module": "Control.Monad.Trans.Operations",
          "name": "repeatMaybe",
          "normalized": "MaybeT a b-\u003eListT a b",
          "package": "stateful-mtl",
          "partial": "Maybe",
          "signature": "MaybeT m a-\u003eListT m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stateful-mtl/docs/Control-Monad-Trans-Operations.html#v:repeatMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Operations",
          "name": "statefully",
          "package": "stateful-mtl",
          "signature": "(s -\u003e (a, s)) -\u003e m a",
          "source": "src/Control-Monad-Trans-Operations.html#statefully",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Operations",
          "module": "Control.Monad.Trans.Operations",
          "name": "statefully",
          "normalized": "(a-\u003e(b,a))-\u003ec b",
          "package": "stateful-mtl",
          "signature": "(s-\u003e(a,s))-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stateful-mtl/docs/Control-Monad-Trans-Operations.html#v:statefully"
      }
    }
  ]
]