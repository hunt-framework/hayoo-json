[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stateful-mtl/docs/Control-Monad-ST-Class.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains the \u003ccode\u003e\u003ca\u003eMonadST\u003c/a\u003e\u003c/code\u003e type class, which encapsulates a monad capable of lifting an ST computation.  This type class is \u003cem\u003eonly\u003c/em\u003e intended to be implemented by the \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e monad and any stack of monad transformers over an \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e\u003cp\u003ePresence of a MonadST instance implies that\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The monad is single-threaded: performing an \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e computation will not cause loss of referential transparency, and only one copy of its state thread will be available at any time.\n\u003c/li\u003e\u003cli\u003e Monad transformers can demand an underlying \u003ccode\u003e\u003ca\u003eMonadST\u003c/a\u003e\u003c/code\u003e instance and use its state thread for their own safe computation in the \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: Most monad type classes cannot pass instances up through any instance of \u003ccode\u003e\u003ca\u003eMonadTrans\u003c/a\u003e\u003c/code\u003e, because a transformer farther out may wish to override the inner instance.  However, in \u003ccode\u003e\u003ca\u003eMonadST\u003c/a\u003e\u003c/code\u003e we very specifically only want one state thread for any stack of transformers, and specifically one at the very bottom level.  This justifies the very general \u003ccode\u003e\u003ca\u003eMonadST\u003c/a\u003e\u003c/code\u003e propagation instance, \u003ccode\u003e(MonadST m, MonadTrans t, Monad m, Monad (t m)) =\u003e MonadST (t m)\u003c/code\u003e (not shown in Haddock for unknown reasons).  \n\u003c/p\u003e\u003cp\u003e\u003cem\u003eDo not\u003c/em\u003e implement \u003ccode\u003e\u003ca\u003eMonadST\u003c/a\u003e\u003c/code\u003e propagation if you also provide a \u003ccode\u003e\u003ca\u003eMonadTrans\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.ST.Class",
        "fct-package": "stateful-mtl",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-ST-Class.html",
        "fct-type": "module",
        "title": "Class"
      },
      "index": {
        "description": "This module contains the MonadST type class which encapsulates monad capable of lifting an ST computation This type class is only intended to be implemented by the ST monad and any stack of monad transformers over an ST monad Presence of MonadST instance implies that The monad is single-threaded performing an ST computation will not cause loss of referential transparency and only one copy of its state thread will be available at any time Monad transformers can demand an underlying MonadST instance and use its state thread for their own safe computation in the ST monad Note Most monad type classes cannot pass instances up through any instance of MonadTrans because transformer farther out may wish to override the inner instance However in MonadST we very specifically only want one state thread for any stack of transformers and specifically one at the very bottom level This justifies the very general MonadST propagation instance MonadST MonadTrans Monad Monad MonadST not shown in Haddock for unknown reasons Do not implement MonadST propagation if you also provide MonadTrans instance",
        "hierarchy": "Control Monad ST Class",
        "module": "Control.Monad.ST.Class",
        "name": "Class",
        "normalized": "",
        "package": "stateful-mtl",
        "partial": "Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stateful-mtl/docs/Control-Monad-ST-Class.html#t:MonadST",
      "description": {
        "fct-descr": "\u003cp\u003eType class of monads that can perform lifted computation in the \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.ST.Class",
        "fct-package": "stateful-mtl",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-ST-Class.html#MonadST",
        "fct-type": "class",
        "title": "MonadST"
      },
      "index": {
        "description": "Type class of monads that can perform lifted computation in the ST monad",
        "hierarchy": "Control Monad ST Class",
        "module": "Control.Monad.ST.Class",
        "name": "MonadST",
        "normalized": "",
        "package": "stateful-mtl",
        "partial": "Monad ST",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stateful-mtl/docs/Control-Monad-ST-Class.html#v:liftST",
      "description": {
        "fct-module": "Control.Monad.ST.Class",
        "fct-package": "stateful-mtl",
        "fct-signature": "ST (StateThread m) a -\u003e m a",
        "fct-source": "src/Control-Monad-ST-Class.html#liftST",
        "fct-type": "method",
        "title": "liftST"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad ST Class",
        "module": "Control.Monad.ST.Class",
        "name": "liftST",
        "normalized": "ST(StateThread a)b-\u003ea b",
        "package": "stateful-mtl",
        "partial": "ST",
        "signature": "ST(StateThread m)a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stateful-mtl/docs/Control-Monad-Trans-Operations.html#",
      "description": {
        "fct-module": "Control.Monad.Trans.Operations",
        "fct-package": "stateful-mtl",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Trans-Operations.html",
        "fct-type": "module",
        "title": "Operations"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Operations",
        "module": "Control.Monad.Trans.Operations",
        "name": "Operations",
        "normalized": "",
        "package": "stateful-mtl",
        "partial": "Operations",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stateful-mtl/docs/Control-Monad-Trans-Operations.html#v:-62--62--61--63-",
      "description": {
        "fct-module": "Control.Monad.Trans.Operations",
        "fct-package": "stateful-mtl",
        "fct-signature": "m (Maybe a) -\u003e (a -\u003e m ()) -\u003e m ()",
        "fct-source": "src/Control-Monad-Trans-Operations.html#%3E%3E%3D%3F",
        "fct-type": "function",
        "title": "(\u003e\u003e=?)"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Operations",
        "module": "Control.Monad.Trans.Operations",
        "name": "(\u003e\u003e=?) \u003e\u003e=?",
        "normalized": "a(Maybe b)-\u003e(b-\u003ea())-\u003ea()",
        "package": "stateful-mtl",
        "partial": "",
        "signature": "m(Maybe a)-\u003e(a-\u003em())-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stateful-mtl/docs/Control-Monad-Trans-Operations.html#v:execMaybeT",
      "description": {
        "fct-module": "Control.Monad.Trans.Operations",
        "fct-package": "stateful-mtl",
        "fct-signature": "MaybeT m () -\u003e m ()",
        "fct-source": "src/Control-Monad-Trans-Operations.html#execMaybeT",
        "fct-type": "function",
        "title": "execMaybeT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Operations",
        "module": "Control.Monad.Trans.Operations",
        "name": "execMaybeT",
        "normalized": "MaybeT a()-\u003ea()",
        "package": "stateful-mtl",
        "partial": "Maybe",
        "signature": "MaybeT m()-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stateful-mtl/docs/Control-Monad-Trans-Operations.html#v:repeatMaybe",
      "description": {
        "fct-module": "Control.Monad.Trans.Operations",
        "fct-package": "stateful-mtl",
        "fct-signature": "MaybeT m a -\u003e ListT m a",
        "fct-source": "src/Control-Monad-Trans-Operations.html#repeatMaybe",
        "fct-type": "function",
        "title": "repeatMaybe"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Operations",
        "module": "Control.Monad.Trans.Operations",
        "name": "repeatMaybe",
        "normalized": "MaybeT a b-\u003eListT a b",
        "package": "stateful-mtl",
        "partial": "Maybe",
        "signature": "MaybeT m a-\u003eListT m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stateful-mtl/docs/Control-Monad-Trans-Operations.html#v:statefully",
      "description": {
        "fct-module": "Control.Monad.Trans.Operations",
        "fct-package": "stateful-mtl",
        "fct-signature": "(s -\u003e (a, s)) -\u003e m a",
        "fct-source": "src/Control-Monad-Trans-Operations.html#statefully",
        "fct-type": "function",
        "title": "statefully"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Operations",
        "module": "Control.Monad.Trans.Operations",
        "name": "statefully",
        "normalized": "(a-\u003e(b,a))-\u003ec b",
        "package": "stateful-mtl",
        "partial": "",
        "signature": "(s-\u003e(a,s))-\u003em a"
      }
    }
  }
]