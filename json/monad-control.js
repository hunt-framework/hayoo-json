[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-control/docs/Control-Monad-Trans-Control.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e(TODO: It would be nicer if the associated \u003cem\u003edata types\u003c/em\u003e \u003ccode\u003e\u003ca\u003eStT\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eStM\u003c/a\u003e\u003c/code\u003e were\nassociated \u003cem\u003etype synonyms\u003c/em\u003e instead. This would simplify a lot of code and could\nmake some definitions more efficient because there'll be no need to wrap the\nmonadic state in a data type. Unfortunately GHC has a bug which prevents this:\n\u003ca\u003ehttp://hackage.haskell.org/trac/ghc/ticket/5595\u003c/a\u003e. I will switch to associated\ntype synonyms when that bug is fixed.)\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Trans.Control",
        "fct-package": "monad-control",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Trans-Control.html",
        "fct-type": "module",
        "title": "Control"
      },
      "index": {
        "description": "TODO It would be nicer if the associated data types StT and StM were associated type synonyms instead This would simplify lot of code and could make some definitions more efficient because there ll be no need to wrap the monadic state in data type Unfortunately GHC has bug which prevents this http hackage.haskell.org trac ghc ticket will switch to associated type synonyms when that bug is fixed",
        "hierarchy": "Control Monad Trans Control",
        "module": "Control.Monad.Trans.Control",
        "name": "Control",
        "normalized": "",
        "package": "monad-control",
        "partial": "Control",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-control/docs/Control-Monad-Trans-Control.html#t:ComposeSt",
      "description": {
        "fct-descr": "\u003cp\u003eHandy type synonym that composes the monadic states of \u003ccode\u003et\u003c/code\u003e and \u003ccode\u003em\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIt can be used to define the \u003ccode\u003e\u003ca\u003eStM\u003c/a\u003e\u003c/code\u003e for new \u003ccode\u003e\u003ca\u003eMonadBaseControl\u003c/a\u003e\u003c/code\u003e instances.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Control",
        "fct-package": "monad-control",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-Trans-Control.html#ComposeSt",
        "fct-type": "type",
        "title": "ComposeSt"
      },
      "index": {
        "description": "Handy type synonym that composes the monadic states of and It can be used to define the StM for new MonadBaseControl instances",
        "hierarchy": "Control Monad Trans Control",
        "module": "Control.Monad.Trans.Control",
        "name": "ComposeSt",
        "normalized": "",
        "package": "monad-control",
        "partial": "Compose St",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-control/docs/Control-Monad-Trans-Control.html#t:MonadBaseControl",
      "description": {
        "fct-module": "Control.Monad.Trans.Control",
        "fct-package": "monad-control",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Trans-Control.html#MonadBaseControl",
        "fct-type": "class",
        "title": "MonadBaseControl"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Control",
        "module": "Control.Monad.Trans.Control",
        "name": "MonadBaseControl",
        "normalized": "",
        "package": "monad-control",
        "partial": "Monad Base Control",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-control/docs/Control-Monad-Trans-Control.html#t:MonadTransControl",
      "description": {
        "fct-module": "Control.Monad.Trans.Control",
        "fct-package": "monad-control",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Trans-Control.html#MonadTransControl",
        "fct-type": "class",
        "title": "MonadTransControl"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Control",
        "module": "Control.Monad.Trans.Control",
        "name": "MonadTransControl",
        "normalized": "",
        "package": "monad-control",
        "partial": "Monad Trans Control",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-control/docs/Control-Monad-Trans-Control.html#t:Run",
      "description": {
        "fct-descr": "\u003cp\u003eA function that runs a transformed monad \u003ccode\u003et n\u003c/code\u003e on the monadic state that\n was captured by \u003ccode\u003e\u003ca\u003eliftWith\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003eRun t\u003c/code\u003e function yields a computation in \u003ccode\u003en\u003c/code\u003e that returns the monadic state\n of \u003ccode\u003et\u003c/code\u003e. This state can later be used to restore a \u003ccode\u003et\u003c/code\u003e computation using\n \u003ccode\u003e\u003ca\u003erestoreT\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Control",
        "fct-package": "monad-control",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-Trans-Control.html#Run",
        "fct-type": "type",
        "title": "Run"
      },
      "index": {
        "description": "function that runs transformed monad on the monadic state that was captured by liftWith Run function yields computation in that returns the monadic state of This state can later be used to restore computation using restoreT",
        "hierarchy": "Control Monad Trans Control",
        "module": "Control.Monad.Trans.Control",
        "name": "Run",
        "normalized": "",
        "package": "monad-control",
        "partial": "Run",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-control/docs/Control-Monad-Trans-Control.html#t:RunInBase",
      "description": {
        "fct-descr": "\u003cp\u003eA function that runs a \u003ccode\u003em\u003c/code\u003e computation on the monadic state that was\n captured by \u003ccode\u003e\u003ca\u003eliftBaseWith\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003eRunInBase m\u003c/code\u003e function yields a computation in the base monad of \u003ccode\u003em\u003c/code\u003e that\n returns the monadic state of \u003ccode\u003em\u003c/code\u003e. This state can later be used to restore the\n \u003ccode\u003em\u003c/code\u003e computation using \u003ccode\u003e\u003ca\u003erestoreM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Control",
        "fct-package": "monad-control",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-Trans-Control.html#RunInBase",
        "fct-type": "type",
        "title": "RunInBase"
      },
      "index": {
        "description": "function that runs computation on the monadic state that was captured by liftBaseWith RunInBase function yields computation in the base monad of that returns the monadic state of This state can later be used to restore the computation using restoreM",
        "hierarchy": "Control Monad Trans Control",
        "module": "Control.Monad.Trans.Control",
        "name": "RunInBase",
        "normalized": "",
        "package": "monad-control",
        "partial": "Run In Base",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-control/docs/Control-Monad-Trans-Control.html#v:control",
      "description": {
        "fct-descr": "\u003cp\u003eAn often used composition: \u003ccode\u003econtrol f = \u003ccode\u003e\u003ca\u003eliftBaseWith\u003c/a\u003e\u003c/code\u003e f \u003e\u003e= \u003ccode\u003e\u003ca\u003erestoreM\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Control",
        "fct-package": "monad-control",
        "fct-signature": "(RunInBase m b -\u003e b (StM m a)) -\u003e m a",
        "fct-source": "src/Control-Monad-Trans-Control.html#control",
        "fct-type": "function",
        "title": "control"
      },
      "index": {
        "description": "An often used composition control liftBaseWith restoreM",
        "hierarchy": "Control Monad Trans Control",
        "module": "Control.Monad.Trans.Control",
        "name": "control",
        "normalized": "(RunInBase a b-\u003eb(StM a c))-\u003ea c",
        "package": "monad-control",
        "partial": "",
        "signature": "(RunInBase m b-\u003eb(StM m a))-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-control/docs/Control-Monad-Trans-Control.html#v:defaultLiftBaseWith",
      "description": {
        "fct-descr": "\u003cp\u003eDefault defintion for the \u003ccode\u003e\u003ca\u003eliftBaseWith\u003c/a\u003e\u003c/code\u003e method.\n\u003c/p\u003e\u003cp\u003eNote that it composes a \u003ccode\u003e\u003ca\u003eliftWith\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003et\u003c/code\u003e with a \u003ccode\u003e\u003ca\u003eliftBaseWith\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003em\u003c/code\u003e to\n give a \u003ccode\u003e\u003ca\u003eliftBaseWith\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003et m\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\n defaultLiftBaseWith stM = \\f -\u003e \u003ccode\u003e\u003ca\u003eliftWith\u003c/a\u003e\u003c/code\u003e $ \\run -\u003e\n                                   \u003ccode\u003e\u003ca\u003eliftBaseWith\u003c/a\u003e\u003c/code\u003e $ \\runInBase -\u003e\n                                     f $ liftM stM . runInBase . run\n\u003c/pre\u003e",
        "fct-module": "Control.Monad.Trans.Control",
        "fct-package": "monad-control",
        "fct-signature": "(forall c.  ComposeSt t m c -\u003e StM (t m) c)-\u003e (RunInBase (t m) b -\u003e b a) -\u003e t m a",
        "fct-type": "function",
        "title": "defaultLiftBaseWith"
      },
      "index": {
        "description": "Default defintion for the liftBaseWith method Note that it composes liftWith of with liftBaseWith of to give liftBaseWith of defaultLiftBaseWith stM liftWith run liftBaseWith runInBase liftM stM runInBase run",
        "hierarchy": "Control Monad Trans Control",
        "module": "Control.Monad.Trans.Control",
        "name": "defaultLiftBaseWith",
        "normalized": "(a b ComposeSt c d e-\u003eStM(c d)e)-\u003e(RunInBase(c d)f-\u003ef g)-\u003ec d g",
        "package": "monad-control",
        "partial": "Lift Base With",
        "signature": "(forall c. ComposeSt t m c-\u003eStM(t m)c)-\u003e(RunInBase(t m)b-\u003eb a)-\u003et m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-control/docs/Control-Monad-Trans-Control.html#v:defaultLiftWith",
      "description": {
        "fct-descr": "\u003cp\u003eDefault definition for the \u003ccode\u003e\u003ca\u003eliftWith\u003c/a\u003e\u003c/code\u003e method.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Control",
        "fct-package": "monad-control",
        "fct-signature": "(forall b.  n m b -\u003e t m b)-\u003e (forall o b.  t o b -\u003e n o b)-\u003e (forall b.  StT n b -\u003e StT t b)-\u003e (Run t -\u003e m a)-\u003e t m a",
        "fct-type": "function",
        "title": "defaultLiftWith"
      },
      "index": {
        "description": "Default definition for the liftWith method",
        "hierarchy": "Control Monad Trans Control",
        "module": "Control.Monad.Trans.Control",
        "name": "defaultLiftWith",
        "normalized": "(a b c d e-\u003ef d e)-\u003e(a g b f g e-\u003ec g e)-\u003e(a b StT c e-\u003eStT f e)-\u003e(Run f-\u003ed h)-\u003ef d h",
        "package": "monad-control",
        "partial": "Lift With",
        "signature": "(forall b. n m b-\u003et m b)-\u003e(forall o b. t o b-\u003en o b)-\u003e(forall b. StT n b-\u003eStT t b)-\u003e(Run t-\u003em a)-\u003et m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-control/docs/Control-Monad-Trans-Control.html#v:defaultRestoreM",
      "description": {
        "fct-descr": "\u003cp\u003eDefault definition for the \u003ccode\u003e\u003ca\u003erestoreM\u003c/a\u003e\u003c/code\u003e method.\n\u003c/p\u003e\u003cp\u003eNote that: \u003ccode\u003edefaultRestoreM unStM = \u003ccode\u003e\u003ca\u003erestoreT\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003erestoreM\u003c/a\u003e\u003c/code\u003e . unStM\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Control",
        "fct-package": "monad-control",
        "fct-signature": "(StM (t m) a -\u003e ComposeSt t m a)-\u003e StM (t m) a -\u003e t m a",
        "fct-type": "function",
        "title": "defaultRestoreM"
      },
      "index": {
        "description": "Default definition for the restoreM method Note that defaultRestoreM unStM restoreT restoreM unStM",
        "hierarchy": "Control Monad Trans Control",
        "module": "Control.Monad.Trans.Control",
        "name": "defaultRestoreM",
        "normalized": "(StM(a b)c-\u003eComposeSt a b c)-\u003eStM(a b)c-\u003ea b c",
        "package": "monad-control",
        "partial": "Restore",
        "signature": "(StM(t m)a-\u003eComposeSt t m a)-\u003eStM(t m)a-\u003et m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-control/docs/Control-Monad-Trans-Control.html#v:defaultRestoreT",
      "description": {
        "fct-module": "Control.Monad.Trans.Control",
        "fct-package": "monad-control",
        "fct-signature": "(n m a -\u003e t m a)-\u003e (StT t a -\u003e StT n a)-\u003e m (StT t a)-\u003e t m a",
        "fct-type": "function",
        "title": "defaultRestoreT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Control",
        "module": "Control.Monad.Trans.Control",
        "name": "defaultRestoreT",
        "normalized": "(a b c-\u003ed b c)-\u003e(StT d c-\u003eStT a c)-\u003eb(StT d c)-\u003ed b c",
        "package": "monad-control",
        "partial": "Restore",
        "signature": "(n m a-\u003et m a)-\u003e(StT t a-\u003eStT n a)-\u003em(StT t a)-\u003et m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-control/docs/Control-Monad-Trans-Control.html#v:liftBaseDiscard",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eliftBaseDiscard\u003c/code\u003e is a particular application of \u003ccode\u003e\u003ca\u003eliftBaseWith\u003c/a\u003e\u003c/code\u003e that allows\n lifting control operations of type:\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e(b () -\u003e b a)\u003c/code\u003e to: \u003ccode\u003e(\u003ccode\u003e\u003ca\u003eMonadBaseControl\u003c/a\u003e\u003c/code\u003e b m =\u003e m () -\u003e m a)\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that, while the argument computation \u003ccode\u003em ()\u003c/code\u003e has access to the captured\n state, all its side-effects in \u003ccode\u003em\u003c/code\u003e are discarded. It is run only for its\n side-effects in the base monad \u003ccode\u003eb\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor example:\n\u003c/p\u003e\u003cpre\u003eliftBaseDiscard forkIO :: \u003ccode\u003e\u003ca\u003eMonadBaseControl\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e m =\u003e m () -\u003e m ThreadId\u003c/pre\u003e",
        "fct-module": "Control.Monad.Trans.Control",
        "fct-package": "monad-control",
        "fct-signature": "(b () -\u003e b a) -\u003e m () -\u003e m a",
        "fct-source": "src/Control-Monad-Trans-Control.html#liftBaseDiscard",
        "fct-type": "function",
        "title": "liftBaseDiscard"
      },
      "index": {
        "description": "liftBaseDiscard is particular application of liftBaseWith that allows lifting control operations of type to MonadBaseControl Note that while the argument computation has access to the captured state all its side-effects in are discarded It is run only for its side-effects in the base monad For example liftBaseDiscard forkIO MonadBaseControl IO ThreadId",
        "hierarchy": "Control Monad Trans Control",
        "module": "Control.Monad.Trans.Control",
        "name": "liftBaseDiscard",
        "normalized": "(a()-\u003ea b)-\u003ec()-\u003ec b",
        "package": "monad-control",
        "partial": "Base Discard",
        "signature": "(b()-\u003eb a)-\u003em()-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-control/docs/Control-Monad-Trans-Control.html#v:liftBaseOp",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eliftBaseOp\u003c/code\u003e is a particular application of \u003ccode\u003e\u003ca\u003eliftBaseWith\u003c/a\u003e\u003c/code\u003e that allows\n lifting control operations of type:\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e((a -\u003e b c) -\u003e b c)\u003c/code\u003e to: \u003ccode\u003e(\u003ccode\u003e\u003ca\u003eMonadBaseControl\u003c/a\u003e\u003c/code\u003e b m =\u003e (a -\u003e m c) -\u003e m c)\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor example:\n\u003c/p\u003e\u003cpre\u003eliftBaseOp alloca :: \u003ccode\u003e\u003ca\u003eMonadBaseControl\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e m =\u003e (Ptr a -\u003e m c) -\u003e m c\u003c/pre\u003e",
        "fct-module": "Control.Monad.Trans.Control",
        "fct-package": "monad-control",
        "fct-signature": "((a -\u003e b (StM m c)) -\u003e b (StM m d)) -\u003e (a -\u003e m c) -\u003e m d",
        "fct-source": "src/Control-Monad-Trans-Control.html#liftBaseOp",
        "fct-type": "function",
        "title": "liftBaseOp"
      },
      "index": {
        "description": "liftBaseOp is particular application of liftBaseWith that allows lifting control operations of type to MonadBaseControl For example liftBaseOp alloca MonadBaseControl IO Ptr",
        "hierarchy": "Control Monad Trans Control",
        "module": "Control.Monad.Trans.Control",
        "name": "liftBaseOp",
        "normalized": "((a-\u003eb(StM c d))-\u003eb(StM c e))-\u003e(a-\u003ec d)-\u003ec e",
        "package": "monad-control",
        "partial": "Base Op",
        "signature": "((a-\u003eb(StM m c))-\u003eb(StM m d))-\u003e(a-\u003em c)-\u003em d"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-control/docs/Control-Monad-Trans-Control.html#v:liftBaseOp_",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eliftBaseOp_\u003c/code\u003e is a particular application of \u003ccode\u003e\u003ca\u003eliftBaseWith\u003c/a\u003e\u003c/code\u003e that allows\n lifting control operations of type:\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e(b a -\u003e b a)\u003c/code\u003e to: \u003ccode\u003e(\u003ccode\u003e\u003ca\u003eMonadBaseControl\u003c/a\u003e\u003c/code\u003e b m =\u003e m a -\u003e m a)\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor example:\n\u003c/p\u003e\u003cpre\u003eliftBaseOp_ mask_ :: \u003ccode\u003e\u003ca\u003eMonadBaseControl\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e m =\u003e m a -\u003e m a\u003c/pre\u003e",
        "fct-module": "Control.Monad.Trans.Control",
        "fct-package": "monad-control",
        "fct-signature": "(b (StM m a) -\u003e b (StM m c)) -\u003e m a -\u003e m c",
        "fct-source": "src/Control-Monad-Trans-Control.html#liftBaseOp_",
        "fct-type": "function",
        "title": "liftBaseOp_"
      },
      "index": {
        "description": "liftBaseOp is particular application of liftBaseWith that allows lifting control operations of type to MonadBaseControl For example liftBaseOp mask MonadBaseControl IO",
        "hierarchy": "Control Monad Trans Control",
        "module": "Control.Monad.Trans.Control",
        "name": "liftBaseOp_",
        "normalized": "(a(StM b c)-\u003ea(StM b d))-\u003eb c-\u003eb d",
        "package": "monad-control",
        "partial": "Base Op",
        "signature": "(b(StM m a)-\u003eb(StM m c))-\u003em a-\u003em c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-control/docs/Control-Monad-Trans-Control.html#v:liftBaseWith",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eliftBaseWith\u003c/code\u003e is similar to \u003ccode\u003eliftIO\u003c/code\u003e and \u003ccode\u003eliftBase\u003c/code\u003e in that it\n lifts a base computation to the constructed monad.\n\u003c/p\u003e\u003cp\u003eInstances should satisfy similar laws as the \u003ccode\u003eMonadIO\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eMonadBase\u003c/a\u003e\u003c/code\u003e laws:\n\u003c/p\u003e\u003cpre\u003eliftBaseWith . const . return = return\u003c/pre\u003e\u003cpre\u003eliftBaseWith (const (m \u003e\u003e= f)) = liftBaseWith (const m) \u003e\u003e= liftBaseWith . const . f\u003c/pre\u003e\u003cp\u003eThe difference with \u003ccode\u003eliftBase\u003c/code\u003e is that before lifting the base computation\n \u003ccode\u003eliftBaseWith\u003c/code\u003e captures the state of \u003ccode\u003em\u003c/code\u003e. It then provides the base\n computation with a \u003ccode\u003e\u003ca\u003eRunInBase\u003c/a\u003e\u003c/code\u003e function that allows running \u003ccode\u003em\u003c/code\u003e\n computations in the base monad on the captured state.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Control",
        "fct-package": "monad-control",
        "fct-signature": "(RunInBase m b -\u003e b a) -\u003e m a",
        "fct-source": "src/Control-Monad-Trans-Control.html#liftBaseWith",
        "fct-type": "method",
        "title": "liftBaseWith"
      },
      "index": {
        "description": "liftBaseWith is similar to liftIO and liftBase in that it lifts base computation to the constructed monad Instances should satisfy similar laws as the MonadIO and MonadBase laws liftBaseWith const return return liftBaseWith const liftBaseWith const liftBaseWith const The difference with liftBase is that before lifting the base computation liftBaseWith captures the state of It then provides the base computation with RunInBase function that allows running computations in the base monad on the captured state",
        "hierarchy": "Control Monad Trans Control",
        "module": "Control.Monad.Trans.Control",
        "name": "liftBaseWith",
        "normalized": "(RunInBase a b-\u003eb c)-\u003ea c",
        "package": "monad-control",
        "partial": "Base With",
        "signature": "(RunInBase m b-\u003eb a)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-control/docs/Control-Monad-Trans-Control.html#v:liftWith",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eliftWith\u003c/code\u003e is similar to \u003ccode\u003elift\u003c/code\u003e in that it lifts a computation from\n the argument monad to the constructed monad.\n\u003c/p\u003e\u003cp\u003eInstances should satisfy similar laws as the \u003ccode\u003eMonadTrans\u003c/code\u003e laws:\n\u003c/p\u003e\u003cpre\u003eliftWith . const . return = return\u003c/pre\u003e\u003cpre\u003eliftWith (const (m \u003e\u003e= f)) = liftWith (const m) \u003e\u003e= liftWith . const . f\u003c/pre\u003e\u003cp\u003eThe difference with \u003ccode\u003elift\u003c/code\u003e is that before lifting the \u003ccode\u003em\u003c/code\u003e computation\n \u003ccode\u003eliftWith\u003c/code\u003e captures the state of \u003ccode\u003et\u003c/code\u003e. It then provides the \u003ccode\u003em\u003c/code\u003e\n computation with a \u003ccode\u003e\u003ca\u003eRun\u003c/a\u003e\u003c/code\u003e function that allows running \u003ccode\u003et n\u003c/code\u003e computations in\n \u003ccode\u003en\u003c/code\u003e (for all \u003ccode\u003en\u003c/code\u003e) on the captured state.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Control",
        "fct-package": "monad-control",
        "fct-signature": "(Run t -\u003e m a) -\u003e t m a",
        "fct-source": "src/Control-Monad-Trans-Control.html#liftWith",
        "fct-type": "method",
        "title": "liftWith"
      },
      "index": {
        "description": "liftWith is similar to lift in that it lifts computation from the argument monad to the constructed monad Instances should satisfy similar laws as the MonadTrans laws liftWith const return return liftWith const liftWith const liftWith const The difference with lift is that before lifting the computation liftWith captures the state of It then provides the computation with Run function that allows running computations in for all on the captured state",
        "hierarchy": "Control Monad Trans Control",
        "module": "Control.Monad.Trans.Control",
        "name": "liftWith",
        "normalized": "(Run a-\u003eb c)-\u003ea b c",
        "package": "monad-control",
        "partial": "With",
        "signature": "(Run t-\u003em a)-\u003et m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-control/docs/Control-Monad-Trans-Control.html#v:restoreM",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a \u003ccode\u003em\u003c/code\u003e computation from the monadic state of \u003ccode\u003em\u003c/code\u003e that is\n returned from a \u003ccode\u003e\u003ca\u003eRunInBase\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e\u003cp\u003eInstances should satisfy:\n\u003c/p\u003e\u003cpre\u003eliftBaseWith (\\runInBase -\u003e runInBase m) \u003e\u003e= restoreM = m\u003c/pre\u003e",
        "fct-module": "Control.Monad.Trans.Control",
        "fct-package": "monad-control",
        "fct-signature": "StM m a -\u003e m a",
        "fct-source": "src/Control-Monad-Trans-Control.html#restoreM",
        "fct-type": "method",
        "title": "restoreM"
      },
      "index": {
        "description": "Construct computation from the monadic state of that is returned from RunInBase function Instances should satisfy liftBaseWith runInBase runInBase restoreM",
        "hierarchy": "Control Monad Trans Control",
        "module": "Control.Monad.Trans.Control",
        "name": "restoreM",
        "normalized": "StM a b-\u003ea b",
        "package": "monad-control",
        "partial": "",
        "signature": "StM m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-control/docs/Control-Monad-Trans-Control.html#v:restoreT",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a \u003ccode\u003et\u003c/code\u003e computation from the monadic state of \u003ccode\u003et\u003c/code\u003e that is\n returned from a \u003ccode\u003e\u003ca\u003eRun\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e\u003cp\u003eInstances should satisfy:\n\u003c/p\u003e\u003cpre\u003eliftWith (\\run -\u003e run t) \u003e\u003e= restoreT . return = t\u003c/pre\u003e",
        "fct-module": "Control.Monad.Trans.Control",
        "fct-package": "monad-control",
        "fct-signature": "m (StT t a) -\u003e t m a",
        "fct-source": "src/Control-Monad-Trans-Control.html#restoreT",
        "fct-type": "method",
        "title": "restoreT"
      },
      "index": {
        "description": "Construct computation from the monadic state of that is returned from Run function Instances should satisfy liftWith run run restoreT return",
        "hierarchy": "Control Monad Trans Control",
        "module": "Control.Monad.Trans.Control",
        "name": "restoreT",
        "normalized": "a(StT b c)-\u003eb a c",
        "package": "monad-control",
        "partial": "",
        "signature": "m(StT t a)-\u003et m a"
      }
    }
  }
]